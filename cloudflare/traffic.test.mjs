// node --test cloudflare/traffic.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { sourceOf, mapHost, landingFor, whoIs, isPageLink, tagHref, carryParams, deviceOf } from "./traffic.js";

const HOME = "50.42.107.18/32,2001:1960:6800:88df::/64";
const ENV = { EXCLUDE_IPS: HOME };
const PHONE = "Mozilla/5.0 (Linux; Android 14; SM-A546B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
const MAC = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15";
const req = (path, h = {}) => {
  const r = new Request("https://mediaflowswift.com" + path, {
    headers: { "User-Agent": MAC, "Accept-Language": "en-US", "CF-Connecting-IP": "41.0.0.1", ...h },
  });
  return r;
};
const src = (path, referer) => sourceOf(new URL("https://mediaflowswift.com" + path), referer, "mediaflowswift.com");

test("referrer hosts map to sources", () => {
  const cases = {
    "www.youtube.com": "youtube", "m.youtube.com": "youtube", "youtu.be": "youtube",
    "googleads.g.doubleclick.net": "youtube", "www.googleadservices.com": "youtube",
    "www.google.com": "google", "www.google.co.za": "google", "www.bing.com": "bing",
    "duckduckgo.com": "duckduckgo", "l.facebook.com": "facebook", "m.facebook.com": "facebook",
    "fb.me": "facebook", "www.instagram.com": "instagram", "t.co": "x", "x.com": "x",
    "old.reddit.com": "reddit", "www.tiktok.com": "tiktok", "lnkd.in": "linkedin",
    "chatgpt.com": "ai-chatgpt", "www.perplexity.ai": "ai-perplexity", "claude.ai": "ai-claude",
    "gemini.google.com": "ai-gemini", "peerpush.com": "peerpush", "longroadsoftware.com": "longroadsoftware",
    "news.ycombinator.com": "hackernews", "alternativeto.net": "alternativeto",
    "some-blog.example.org": "some-blog.example.org",
  };
  for (const [host, want] of Object.entries(cases)) assert.equal(mapHost(host).source, want, host);
  assert.equal(mapHost("googleads.g.doubleclick.net").medium, "paid");
});

test("utm beats referrer; junk utm is cleaned", () => {
  assert.deepEqual(src("/?utm_source=YouTube&utm_medium=paid&utm_campaign=promo-no-trash", "https://www.google.com/"),
    { source: "youtube", medium: "paid", campaign: "promo-no-trash" });
  assert.deepEqual(src("/?utm_source=%3Cscript%3Ex%20y&utm_campaign=" + "a".repeat(90)),
    { source: "scriptxy", medium: "", campaign: "a".repeat(40) });
  assert.equal(src("/?utm_source=%3C%3E").source, "unknown");
});

test("Google Ads click ids count as YouTube paid (the promos carry no utm tag)", () => {
  assert.deepEqual(src("/?gclid=abc"), { source: "youtube", medium: "paid", campaign: "" });
  assert.deepEqual(src("/?gad_source=1&gad_campaignid=2346"), { source: "youtube", medium: "paid", campaign: "2346" });
});

test("no referrer = direct; our own referrer = not a landing", () => {
  assert.deepEqual(src("/", null), { source: "direct", medium: "", campaign: "" });
  assert.equal(src("/faq.html", "https://mediaflowswift.com/"), null);
  assert.equal(src("/faq.html", "https://www.mediaflowswift.com/x"), null);
  assert.deepEqual(src("/", "not a url"), { source: "direct", medium: "", campaign: "" });
});

test("bots, scripts and the family are kept apart from humans", () => {
  assert.equal(whoIs(req("/"), ENV), "human");
  assert.equal(whoIs(req("/", { "User-Agent": "Googlebot/2.1" }), ENV), "bot");
  assert.equal(whoIs(req("/", { "User-Agent": "curl/8.4" }), ENV), "bot");
  assert.equal(whoIs(req("/", { "User-Agent": "" }), ENV), "bot");
  assert.equal(whoIs(req("/", { "Accept-Language": "" }), ENV), "bot");
  assert.equal(whoIs(req("/", { "CF-Connecting-IP": "50.42.107.18" }), ENV), "us");
  assert.equal(whoIs(req("/", { "CF-Connecting-IP": "2001:1960:6800:88df:6108:3cc:a6cd:a2f" }), ENV), "us");
});

test("a landing records source, path, country and device; internal clicks with src are not counted again", () => {
  const r = req("/vs/offshoot/?utm_source=youtube&utm_medium=video&utm_campaign=oit-abc", { "User-Agent": PHONE });
  Object.defineProperty(r, "cf", { value: { country: "ZA" } });
  assert.deepEqual(landingFor(r, ENV, "mediaflowswift.com"), {
    who: "human", source: "youtube", medium: "video", campaign: "oit-abc", landing: "/vs/offshoot/", country: "za", device: "mobile",
  });
  assert.equal(landingFor(req("/download.html?src=youtube&med=video"), ENV, "mediaflowswift.com"), null);
  assert.equal(landingFor(req("/faq.html", { Referer: "https://mediaflowswift.com/" }), ENV, "mediaflowswift.com"), null);
  assert.equal(landingFor(new Request("https://mediaflowswift.com/", { method: "HEAD" }), ENV, "mediaflowswift.com"), null);
  assert.equal(landingFor(req("/"), ENV, "mediaflowswift.com").country, "xx");
});

test("only page links get the source carried, never assets, other sites or fragments", () => {
  for (const h of ["/", "/faq.html", "/vs/offshoot/", "download.html", "/manual/getting-started/#x", "https://mediaflowswift.com/about/"])
    assert.equal(isPageLink(h), true, h);
  for (const h of ["#plans", "/images/a.jpg", "/site.css", "mailto:x@y.z", "https://github.com/x", "//cdn.x/y", "/downloads/latest.json", ""])
    assert.equal(isPageLink(h), false, h);
  assert.equal(tagHref("/#plans", "src=youtube"), "/?src=youtube#plans");
  assert.equal(tagHref("/x?a=1", "src=youtube"), "/x?a=1&src=youtube");
});

test("carry params come from the landing, or are passed on from the link", () => {
  assert.equal(carryParams(new URL("https://m.com/"), { source: "youtube", medium: "paid", campaign: "" }), "src=youtube&med=paid");
  assert.equal(carryParams(new URL("https://m.com/x?src=reddit&med=forum&cmp=t1"), null), "src=reddit&med=forum&cmp=t1");
  assert.equal(carryParams(new URL("https://m.com/x"), null), "");
  assert.equal(deviceOf(PHONE), "mobile");
  assert.equal(deviceOf(MAC), "desktop");
});
