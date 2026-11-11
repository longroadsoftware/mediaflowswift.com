// mediaflowswift.com on Cloudflare (moved from GitHub Pages, 2026-11-11).
// Static files come from Jekyll's _site. Exact file paths are served by Cloudflare directly;
// this script only runs for paths that are not a file, and copies GitHub Pages' rules so that
// every existing address keeps working exactly as before:
//   /folder/      -> folder/index.html
//   /page         -> page.html (200), or 301 to /page/ when page/index.html exists
//   /a .. /z, /0 .. /9  -> 302 to /?utm_source=heycatch&utm_campaign=<x> (old campaign short links)
//   anything else -> 404.html with status 404
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = decodeURIComponent(url.pathname);

    const short = path.match(/^\/([a-z0-9])\/?$/);
    if (short) {
      return Response.redirect(`${url.origin}/?utm_source=heycatch&utm_campaign=${short[1]}`, 302);
    }

    if (path.endsWith("/")) {
      const r = await asset(env, url, path + "index.html");
      if (r) return withHeaders(r);
    } else {
      const page = await asset(env, url, path + ".html");
      if (page) return withHeaders(page);
      if (await asset(env, url, path + "/index.html")) {
        return Response.redirect(`${url.origin}${url.pathname}/${url.search}`, 301);
      }
    }

    const nf = await asset(env, url, "/404.html");
    if (nf) return withHeaders(nf, 404);
    return new Response("Not found", { status: 404 });
  },
};
