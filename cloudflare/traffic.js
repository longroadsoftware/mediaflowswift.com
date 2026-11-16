// Who sent us visitors (LON-3645, approved by Mike 2026-11-12).
//
// Google Analytics only counts visitors who press Yes on the notice, and most people never answer it.
// This counts, per day, how many visits ARRIVED from each kind of source (YouTube, a search engine,
// a direct visit, a utm-tagged link...), with no cookie, no storage in the browser and nothing kept
// about the visitor: only daily totals in the D1 database `lrs-traffic`.
//
// Never stored: IP address, full referrer URL or its path, user agent, any id. The IP is only
// compared in memory with the family's home addresses (EXCLUDE_IPS), like lrs-downloads does.
//
// Downloads by source: on a counted landing, internal links on the page get `src`/`med`/`cmp`
// added, so the source rides along in the URL as the visitor moves around, and lrs-downloads
// (mediaflowswift.com/get) can count the download against it. A request that already carries
// `src` is the same visitor moving around: it is never counted as a new visit.

export const BOT_UA = /bot|crawl|spider|slurp|preview|facebookexternalhit|curl|wget|python|httpclient|headless|okhttp|go-http|java\/|monitor|uptime|lighthouse|scan|fetch|axios|node|ruby|perl|php|libwww|httpx|aiohttp|scrapy|phantom|selenium|puppeteer|playwright/i;

// Same rules as lrs-downloads (copied: the two Workers deploy separately).
export function chicagoDate(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

function v4ToBig(ip) {
  const p = ip.split(".");
  if (p.length !== 4 || p.some((x) => !/^\d{1,3}$/.test(x) || +x > 255)) return null;
  return p.reduce((a, x) => (a << 8n) | BigInt(+x), 0n);
}

function v6ToBig(ip) {
  if (!ip.includes(":")) return null;
  let [head, tail] = ip.split("::");
  if (ip.split("::").length > 2) return null;
  const h = head ? head.split(":") : [];
  const t = tail !== undefined ? (tail ? tail.split(":") : []) : null;
  let parts;
  if (t === null) parts = h;
  else parts = [...h, ...Array(8 - h.length - t.length).fill("0"), ...t];
  if (parts.length !== 8 || parts.some((x) => !/^[0-9a-f]{1,4}$/i.test(x))) return null;
  return parts.reduce((a, x) => (a << 16n) | BigInt(parseInt(x, 16)), 0n);
}

/** true when ip is inside one of the comma-separated CIDRs (IPv4 or IPv6). */
export function ipExcluded(ip, list) {
  if (!ip || !list) return false;
  for (const raw of list.split(",")) {
    const cidr = raw.trim();
    if (!cidr) continue;
    const [net, lenStr] = cidr.split("/");
    const v6 = net.includes(":");
    const bits = v6 ? 128 : 32;
    const len = lenStr === undefined ? bits : +lenStr;
    const a = v6 ? v6ToBig(ip) : v4ToBig(ip);
    const b = v6 ? v6ToBig(net) : v4ToBig(net);
    if (a === null || b === null || !(len >= 0 && len <= bits)) continue;
    const shift = BigInt(bits - len);
    if (a >> shift === b >> shift) return true;
  }
  return false;
}

const clean = (s, max = 40) => String(s || "").toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, max);

// Referrer host -> source. Host only; the path is never looked at or kept.
const HOSTS = [
  [/(^|\.)(googleads\.g\.doubleclick\.net|doubleclick\.net|googlesyndication\.com|googleadservices\.com)$/, "youtube", "paid"],
  [/(^|\.)(youtube\.com|youtu\.be|youtube-nocookie\.com)$/, "youtube", "video"],
  [/(^|\.)google\.[a-z.]+$/, "google", "organic"],
  [/(^|\.)bing\.com$/, "bing", "organic"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo", "organic"],
  [/(^|\.)(search\.)?yahoo\.[a-z.]+$/, "yahoo", "organic"],
  [/(^|\.)ecosia\.org$/, "ecosia", "organic"],
  [/(^|\.)search\.brave\.com$/, "brave", "organic"],
  [/(^|\.)(facebook\.com|fb\.me|fb\.com)$/, "facebook", "social"],
  [/(^|\.)instagram\.com$/, "instagram", "social"],
  [/(^|\.)(t\.co|x\.com|twitter\.com)$/, "x", "social"],
  [/(^|\.)(reddit\.com|redd\.it)$/, "reddit", "forum"],
  [/(^|\.)tiktok\.com$/, "tiktok", "social"],
  [/(^|\.)(linkedin\.com|lnkd\.in)$/, "linkedin", "social"],
  [/(^|\.)(chatgpt\.com|chat\.openai\.com)$/, "ai-chatgpt", "ai"],
  [/(^|\.)perplexity\.ai$/, "ai-perplexity", "ai"],
  [/(^|\.)claude\.ai$/, "ai-claude", "ai"],
  [/(^|\.)gemini\.google\.com$/, "ai-gemini", "ai"],
  [/(^|\.)copilot\.microsoft\.com$/, "ai-copilot", "ai"],
  [/(^|\.)news\.ycombinator\.com$/, "hackernews", "forum"],
  [/(^|\.)peerpush\.(com|net)$/, "peerpush", "referral"],
  [/(^|\.)alternativeto\.net$/, "alternativeto", "referral"],
  [/(^|\.)producthunt\.com$/, "producthunt", "referral"],
  [/(^|\.)longroadsoftware\.com$/, "longroadsoftware", "referral"],
  [/(^|\.)checkandroll\.app$/, "checkandroll", "referral"],
  [/(^|\.)onislandtime\.life$/, "onislandtime", "referral"],
  [/(^|\.)github\.com$/, "github", "referral"],
];

export function mapHost(host) {
  host = String(host || "").toLowerCase().replace(/^www\./, "");
  if (host.startsWith("gemini.google.")) return { source: "ai-gemini", medium: "ai" };
  for (const [re, source, medium] of HOSTS) if (re.test(host)) return { source, medium };
  return { source: clean(host, 60) || "unknown", medium: "referral" };
}

/** Where this landing came from: utm tags first, then a Google Ads click id, then the referrer host. */
export function sourceOf(url, referer, ownHost) {
  const q = url.searchParams;
  if (q.get("utm_source")) {
    return { source: clean(q.get("utm_source")) || "unknown", medium: clean(q.get("utm_medium")), campaign: clean(q.get("utm_campaign")) };
  }
  // The YouTube promotions carry no utm tag (Mike left them as they are). Google adds a click id.
  if (q.get("gclid") || q.get("gad_source") || q.get("gbraid") || q.get("wbraid") || q.get("gad_campaignid")) {
    return { source: "youtube", medium: "paid", campaign: clean(q.get("gad_campaignid") || q.get("utm_campaign")) };
  }
  let host = "";
  try { host = referer ? new URL(referer).hostname : ""; } catch { host = ""; }
  if (!host) return { source: "direct", medium: "", campaign: "" };
  if (host.toLowerCase().replace(/^www\./, "") === ownHost) return null; // our own page: not a landing
  return { ...mapHost(host), campaign: "" };
}

/** "human", "us" (Mike/Sheri at home) or "bot". */
export function whoIs(request, env) {
  const ua = request.headers.get("User-Agent") || "";
  if (!ua || BOT_UA.test(ua)) return "bot";
  // Every real browser sends these; scripts and most scanners don't.
  if (!request.headers.get("Accept-Language")) return "bot";
  if (ipExcluded(request.headers.get("CF-Connecting-IP") || "", env.EXCLUDE_IPS || "")) return "us";
  return "human";
}

export const deviceOf = (ua) => (/Mobi|Android|iPhone|iPad|iPod/i.test(ua || "") ? "mobile" : "desktop");

/** What to count for this page request, or null when it is not a new landing. */
export function landingFor(request, env, ownHost) {
  if (request.method !== "GET") return null;
  const url = new URL(request.url);
  if (url.searchParams.get("src")) return null; // same visitor moving around the site
  const src = sourceOf(url, request.headers.get("Referer"), ownHost);
  if (!src) return null;
  const ua = request.headers.get("User-Agent") || "";
  return {
    who: whoIs(request, env),
    ...src,
    landing: url.pathname.slice(0, 80),
    country: clean((request.cf && request.cf.country) || "", 2) || "xx",
    device: deviceOf(ua),
  };
}

export async function recordVisit(db, site, day, v) {
  await db.prepare(
    `INSERT INTO visits (day, site, who, source, medium, campaign, landing, country, device, n)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, 1)
     ON CONFLICT (day, site, who, source, medium, campaign, landing, country, device) DO UPDATE SET n = n + 1`
  ).bind(day, site, v.who, v.source, v.medium, v.campaign, v.landing, v.country, v.device).run();
}

/** Internal page link (not an asset, not another site, not a #fragment)? */
export function isPageLink(href) {
  if (!href || href.startsWith("#")) return false;
  let path = href;
  const own = href.match(/^https:\/\/mediaflowswift\.com(\/[^]*)?$/i);
  if (own) path = own[1] || "/";
  else if (href.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(href)) return false;
  path = path.split(/[?#]/)[0];
  const last = path.split("/").pop();
  return !last.includes(".") || last.endsWith(".html");
}

export function tagHref(href, params) {
  const [beforeHash, hash] = href.split("#", 2);
  const sep = beforeHash.includes("?") ? "&" : "?";
  return `${beforeHash}${sep}${params}${hash !== undefined ? "#" + hash : ""}`;
}

/** src/med/cmp to carry on internal links: from this landing, or from the link that brought them here. */
export function carryParams(url, landing) {
  const q = url.searchParams;
  const src = landing ? landing.source : clean(q.get("src"), 60);
  if (!src) return "";
  const med = landing ? landing.medium : clean(q.get("med"));
  const cmp = landing ? landing.campaign : clean(q.get("cmp"));
  const p = new URLSearchParams({ src });
  if (med) p.set("med", med);
  if (cmp) p.set("cmp", cmp);
  return p.toString();
}

export function rewriteLinks(resp, params) {
  if (!params) return resp;
  return new HTMLRewriter()
    .on("a[href]", {
      element(el) {
        const href = el.getAttribute("href");
        if (isPageLink(href)) el.setAttribute("href", tagHref(href, params));
      },
    })
    .transform(resp);
}

export async function stats(db, days) {
  const n = Math.min(Math.max(parseInt(days, 10) || 7, 1), 400);
  const since = new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
  const v = await db.prepare(`SELECT day, site, who, source, medium, campaign, landing, country, device, n FROM visits WHERE day >= ?1 ORDER BY day, n DESC`).bind(since).all();
  const d = await db.prepare(`SELECT day, site, who, source, medium, campaign, country, device, n FROM downloads WHERE day >= ?1 ORDER BY day, n DESC`).bind(since).all();
  return { since, visits: v.results, downloads: d.results };
}

// Where the law asks for a yes before analytics cookies (Mike, 2026-11-13): the EU, the rest of the
// EEA, the UK (with its crown dependencies and Gibraltar) and Switzerland. An unknown country
// (no cf data, Tor "T1", "XX") is asked too: when in doubt, ask.
const ASK = new Set(("AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE " +
  "IS LI NO GB GG JE IM GI CH").split(" "));
export function mustAsk(country) {
  const c = String(country || "").toUpperCase();
  return !/^[A-Z]{2}$/.test(c) || c === "XX" || c === "T1" || ASK.has(c);
}
