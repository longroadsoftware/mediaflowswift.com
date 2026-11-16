/* Behaviour checks for the goal events in analytics.js (download_clicked,
   download_page_clicked, checkout_opened), with a small fake browser. No install:
     node tools/goal-test.mjs            (from the repo root) */
import fs from "node:fs";
const src = fs.readFileSync(process.argv[2] || "analytics.js", "utf8");

let pass = 0, fail = 0;
function ok(name, cond) { if (cond) { pass++; } else { fail++; console.log("FAIL:", name); } }
const tick = () => new Promise(r => setTimeout(r, 0));

function makeEl(tag) {
  return {
    tagName: tag, children: [], attrs: {}, style: {}, className: "", src: "", offsetHeight: 0,
    setAttribute(k, v) { this.attrs[k] = v; },
    getAttribute(k) { return k in this.attrs ? this.attrs[k] : null; },
    hasAttribute(k) { return k in this.attrs; },
    appendChild(c) { this.children.push(c); return c; },
    removeChild(c) { return c; },
    addEventListener() {},
    closest() { return this; },
  };
}
function link(href, extra = {}) {
  const a = makeEl("a"); a.setAttribute("href", href); a.href = "https://mediaflowswift.com" + href;
  Object.entries(extra).forEach(([k, v]) => { if (k === "id") a.id = v; else a.setAttribute(k, v); });
  return a;
}

/* stored: the visitor's earlier answer. slow: HeyCatch has not finished loading yet. */
function run({ stored = "yes", slow = false } = {}) {
  const tag = makeEl("script"); tag.setAttribute("data-ga", "G-TEST123");
  const sent = [], clicks = [];
  let release;
  const gate = new Promise(r => { release = r; });
  const heycatch = { init() {}, optInCapturing() {}, optOutCapturing() {}, trackEvent(n, p) { sent.push(["hc", n, p]); } };
  const fakeFunction = function () { return () => (slow ? gate : Promise.resolve()).then(() => ({ analytics: heycatch })); };
  const win = {
    localStorage: { getItem: () => stored, setItem() {} },
    location: { hostname: "mediaflowswift.com", pathname: "/download.html", href: "" },
    addEventListener() {}, removeEventListener() {}, setTimeout: (f, ms) => setTimeout(f, ms),
  };
  const doc = {
    currentScript: tag, head: makeEl("head"), body: makeEl("body"), createElement: makeEl,
    querySelector: () => tag, getElementById: () => null, createTextNode: (t) => ({ textContent: t }),
    addEventListener(t, f) { if (t === "click") clicks.push(f); },
  };
  new Function("window", "document", "localStorage", "location", "Function", "navigator", src)(
    win, doc, win.localStorage, win.location, fakeFunction, {});
  const realGtag = win.gtag;
  if (realGtag) win.gtag = function (kind, name, props) { if (kind === "event") sent.push(["ga", name, props]); };
  return {
    win, sent, release,
    click(el, more = {}) {
      const ev = Object.assign({ target: el, button: 0, cancelable: true, prevented: false,
        preventDefault() { this.prevented = true; } }, more);
      clicks.forEach(f => f(ev));
      return ev;
    },
  };
}
const names = (t, via) => t.sent.filter(s => s[0] === via).map(s => s[1]).join(",");

// 1 HeyCatch ready: the event leaves inside the click, the link is not held
let t = run(); await tick();
let ev = t.click(link("/get"));
ok("ready: HeyCatch gets download_clicked in the click", names(t, "hc") === "download_clicked");
ok("ready: Google Analytics gets it too", names(t, "ga") === "download_clicked");
ok("ready: the link is not held", ev.prevented === false);
ok("ready: the page is on the event", t.sent[0][2].page === "/download.html");
ok("ready: the old name is gone", !src.includes("trial_download_clicked"));

// 2 HeyCatch still loading: hold the link, send, then go
t = run({ slow: true });
ev = t.click(link("/get"));
ok("loading: the link is held", ev.prevented === true);
ok("loading: nothing sent to HeyCatch yet", names(t, "hc") === "");
ok("loading: Google Analytics gets it at once", names(t, "ga") === "download_clicked");
t.release(); await tick(); await tick();
ok("loading: sent once HeyCatch is ready", names(t, "hc") === "download_clicked");
ok("loading: then the download starts", t.win.location.href === "https://mediaflowswift.com/get");

// 3 HeyCatch never loads: the download still starts
t = run({ slow: true });
t.click(link("/get"));
await new Promise(r => setTimeout(r, 450));
ok("stuck: the download starts anyway", t.win.location.href === "https://mediaflowswift.com/get");

// 4 a click that opens a new tab is never held
t = run({ slow: true });
ev = t.click(link("/get"), { metaKey: true });
ok("new tab: not held", ev.prevented === false);
t.release(); await tick(); await tick();
ok("new tab: still sent", names(t, "hc") === "download_clicked");

// 5 before the version loads the button points at the plans: not a download
t = run(); await tick();
t.click(link("/#plans", { id: "get" }));
ok("button not ready: nothing sent", t.sent.length === 0);

// 6 the older counter address still counts; the download page and checkout keep their names
t = run(); await tick();
t.click(link("https://lrs-downloads.example.workers.dev/mac"));
t.click(link("/download.html"));
t.click(link("/#plans", { "data-buy": "pro" }));
ok("other links: names", names(t, "hc") === "download_clicked,download_page_clicked,checkout_opened");
ok("checkout: plan is on the event", t.sent.filter(s => s[1] === "checkout_opened")[0][2].plan === "pro");

// 7 the download page adds the visitor's source to the link: still the download, and the held click keeps it
t = run(); await tick();
ev = t.click(link("/get?src=youtube&med=video"));
ok("with a source: sent", names(t, "hc") === "download_clicked" && names(t, "ga") === "download_clicked");
ok("with a source: not held when ready", ev.prevented === false);
t = run({ slow: true });
ev = t.click(link("/get?src=youtube&med=video&cmp=launch"));
ok("with a source, loading: held", ev.prevented === true);
t.release(); await tick(); await tick();
ok("with a source, loading: sent", names(t, "hc") === "download_clicked");
ok("with a source, loading: goes to the full address", t.win.location.href === "https://mediaflowswift.com/get?src=youtube&med=video&cmp=launch");
t = run(); await tick();
t.click(link("/getting-started.html"));
ok("a page whose name starts with get: nothing sent", t.sent.length === 0);

// 8 an impatient second press while the first is held: one download, counted once
t = run({ slow: true });
const once = link("/get");
ev = t.click(once);
const again = t.click(once);
ok("pressed twice: the second press does not leave either", again.prevented === true);
ok("pressed twice: Google Analytics hears of one", names(t, "ga") === "download_clicked");
t.release(); await tick(); await tick();
ok("pressed twice: HeyCatch hears of one", names(t, "hc") === "download_clicked");
ok("pressed twice: the download starts", t.win.location.href === "https://mediaflowswift.com/get");
ev = t.click(once);
ok("pressed again later (the tab stayed): counted as a new press", names(t, "hc") === "download_clicked,download_clicked" && ev.prevented === false);

// 9 a no: nothing is sent and nothing is held
t = run({ stored: "no" }); await tick();
ev = t.click(link("/get"));
ok("no: nothing sent", t.sent.length === 0);
ok("no: not held", ev.prevented === false);

console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
