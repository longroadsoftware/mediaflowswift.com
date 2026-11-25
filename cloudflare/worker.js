// mediaflowswift.com on Cloudflare (moved from GitHub Pages, 2026-11-11).
// Static files come from Jekyll's _site. Exact file paths are served by Cloudflare directly;
// this script only runs for paths that are not a file, and copies GitHub Pages' rules so that
// every existing address keeps working exactly as before:
//   /folder/      -> folder/index.html
//   /page         -> page.html (200), or 301 to /page/ when page/index.html exists
//   /a .. /z, /0 .. /9  -> 302 to /?utm_source=heycatch&utm_campaign=<x> (old campaign short links)
//   anything else -> 404.html with status 404
// It also runs first for files (run_worker_first), so it can count where each visit came from
// (cloudflare/traffic.js, D1 `lrs-traffic`, daily totals only; LON-3645) and serve those totals at
// /api/traffic-stats to the KPI report. Counting never slows or breaks a page: it runs after the
// response (waitUntil) and every error is caught.
import { landingFor, recordVisit, chicagoDate, carryParams, rewriteLinks, stats, mustAsk } from "./traffic.js";

const SITE = "mediaflowswift.com";

const SECURITY = {
  "Strict-Transport-Security": "max-age=31536000",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
};

async function asset(env, url, path) {
  const r = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));
  return r.status === 200 ? r : null;
}

function withHeaders(resp, status) {
  const r = new Response(resp.body, { status: status || resp.status, headers: resp.headers });
  for (const [k, v] of Object.entries(SECURITY)) r.headers.set(k, v);
  return r;
}

function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

/** Tell analytics.js whether this visitor must be asked first (EU, EEA, UK, Switzerland, or unknown). */
function markRegion(resp, request) {
  const ask = mustAsk(request.cf && request.cf.country) ? "1" : "0";
  return new HTMLRewriter().on("script[data-ga]", { element(el) { el.setAttribute("data-ask", ask); } }).transform(resp);
}

/** A page went out: count the landing (if it is one) and carry its source on internal links. */
function page(resp, request, env, ctx, status) {
  const out = markRegion(withHeaders(resp, status), request);
  if ((status || resp.status) !== 200 || request.method !== "GET") return out;
  let landing = null;
  try {
    const url = new URL(request.url);
    landing = landingFor(request, env, SITE);
    if (landing && env.TRAFFIC) {
      ctx.waitUntil(recordVisit(env.TRAFFIC, SITE, chicagoDate(), landing).catch((e) => console.error("visit count failed", String(e))));
    }
    // Bots and our own visits keep the plain links (search engines must never see ?src= links).
    if (landing && landing.who !== "human") return out;
    return rewriteLinks(out, carryParams(url, landing));
  } catch (e) {
    console.error("traffic failed", String(e));
    return out;
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    if (path === "/api/traffic-stats") {
      const auth = request.headers.get("Authorization") || "";
      if (!env.TRAFFIC_STATS_KEY || !safeEqual(auth, `Bearer ${env.TRAFFIC_STATS_KEY}`)) return new Response("no", { status: 401 });
      return new Response(JSON.stringify(await stats(env.TRAFFIC, url.searchParams.get("days"))), {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
      });
    }

    // The app zip (over the 25 MiB asset limit) comes from the GitHub Release of the same version. Fetched here and
    // streamed back, never redirected: the app's updater refuses redirects. Same bytes as latest.json's sha256.
    const zip = path.match(/^\/downloads\/(MediaFlowswift-(\d+(?:\.\d+)+)\.zip)$/);
    if (zip && (request.method === "GET" || request.method === "HEAD")) {
      const src = `https://github.com/longroadsoftware/mediaflowswift.com/releases/download/v${zip[2]}/${zip[1]}`;
      const r = await fetch(src, { method: request.method, redirect: "follow", cf: { cacheEverything: true, cacheTtl: 86400 } });
      if (r.status !== 200) return new Response("Not found", { status: 404 });
      const h = new Headers();
      h.set("Content-Type", "application/zip");
      const len = r.headers.get("Content-Length");
      if (len) h.set("Content-Length", len);
      h.set("Cache-Control", "public, max-age=3600");
      h.set("X-Robots-Tag", "noindex");
      return new Response(request.method === "HEAD" ? null : r.body, { status: 200, headers: h });
    }

    // Files (run_worker_first sends them here too): serve as-is; HTML pages also get counted.
    if (!path.endsWith("/")) {
      const file = await env.ASSETS.fetch(request);
      if (file.status === 200 || file.status === 304) {
        const type = file.headers.get("Content-Type") || "";
        if (type.startsWith("text/html") && file.status === 200) return page(file, request, env, ctx);
        // _headers isn't applied to files the Worker hands back, so set the same headers here.
        const out = withHeaders(file);
        if (path.startsWith("/images/")) out.headers.set("Cache-Control", "public, max-age=604800");
        return out;
      }
    }

    const short = path.match(/^\/([a-z0-9])\/?$/);
    if (short) {
      return Response.redirect(`${url.origin}/?utm_source=heycatch&utm_campaign=${short[1]}`, 302);
    }

    if (path.endsWith("/")) {
      const r = await asset(env, url, path + "index.html");
      if (r) return page(r, request, env, ctx);
    } else {
      const pg = await asset(env, url, path + ".html");
      if (pg) return page(pg, request, env, ctx);
      if (await asset(env, url, path + "/index.html")) {
        return Response.redirect(`${url.origin}${url.pathname}/${url.search}`, 301);
      }
    }

    const nf = await asset(env, url, "/404.html");
    if (nf) return markRegion(withHeaders(nf, 404), request);
    return new Response("Not found", { status: 404 });
  },
};
