// Contact form for mediaflowswift.com.
// Receives the form, then sends one ordinary email to the address that topic
// maps to in route.js. Secrets: SMTP_USER, SMTP_PASSWORD (wrangler secret).
// Deploy: npx wrangler deploy   (from this directory, logged into the
// mediaflow-licence Cloudflare account). forms@ must be allowed to send as
// itself in Purelymail Sending Restrictions, or SMTP answers 530.

import { connect } from "cloudflare:sockets";
import { buildMessage } from "./route.js";
import { createSmtp, messageBytes } from "./smtp.js";

const ALLOWED = new Set([
  "https://mediaflowswift.com",
  "https://www.mediaflowswift.com",
]);

function allowedOrigin(origin) {
  if (ALLOWED.has(origin)) return origin;
  if (/^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin || "")) return origin;
  return "";
}

function json(body, status, origin) {
  const headers = {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  };
  if (origin) {
    headers["access-control-allow-origin"] = origin;
    headers["vary"] = "Origin";
  }
  return new Response(JSON.stringify(body), { status, headers });
}

async function limited(env, request) {
  if (!env.RATE) return false;
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  const key = "ip:" + ip;
  const n = Number(await env.RATE.get(key)) || 0;
  if (n >= 5) return true;
  await env.RATE.put(key, String(n + 1), { expirationTtl: 3600 });
  return false;
}

async function sendMail(env, mail) {
  const socket = connect(
    { hostname: "smtp.purelymail.com", port: 465 },
    { secureTransport: "on" }
  );
  const reader = socket.readable.getReader();
  const writer = socket.writable.getWriter();
  const smtp = createSmtp(reader, writer);
  try {
    const greet = await smtp.readReply();
    if (greet.code[0] !== "2") throw new Error("smtp greet");
    await smtp.cmd("EHLO mediaflowswift.com");
    await smtp.cmd("AUTH LOGIN");
    await smtp.cmd(btoa(env.SMTP_USER));
    await smtp.cmd(btoa(env.SMTP_PASSWORD));
    await smtp.cmd("MAIL FROM:<forms@longroadsoftware.com>");
    await smtp.cmd("RCPT TO:<" + mail.to + ">");
    await smtp.cmd("DATA");
    await writer.write(new TextEncoder().encode(messageBytes(mail) + ".\r\n"));
    const done = await smtp.readReply();
    if (done.code[0] !== "2") throw new Error("smtp data");
    await smtp.cmd("QUIT");
  } finally {
    try { await writer.close(); } catch (e) { /* socket already gone */ }
  }
}

export default {
  async fetch(request, env) {
    const origin = allowedOrigin(request.headers.get("origin") || "");
    if (request.method === "OPTIONS") {
      if (!origin) return new Response(null, { status: 403 });
      return new Response(null, {
        status: 204,
        headers: {
          "access-control-allow-origin": origin,
          "access-control-allow-methods": "POST, OPTIONS",
          "access-control-allow-headers": "content-type",
          "access-control-max-age": "86400",
          vary: "Origin",
        },
      });
    }
    if (request.method === "GET") return json({ ok: true }, 200, origin);
    if (request.method !== "POST") return json({ error: "Send the form." }, 405, origin);
    if (!origin) return json({ error: "Send it from the contact page." }, 403, "");

    const len = Number(request.headers.get("content-length") || 0);
    if (len > 20000) return json({ error: "That note is too long." }, 413, origin);

    let fields;
    try {
      fields = await request.json();
    } catch (e) {
      return json({ error: "Send it again from the contact page." }, 400, origin);
    }
    if (!fields || typeof fields !== "object") {
      return json({ error: "Send it again from the contact page." }, 400, origin);
    }

    const built = buildMessage(fields);
    if (built.drop) return json({ ok: true }, 200, origin);
    if (built.error) return json({ error: built.error }, 400, origin);

    if (await limited(env, request)) {
      return json({ error: "Too many notes from this network. Write to support@mediaflowswift.com instead." }, 429, origin);
    }

    try {
      await sendMail(env, built);
    } catch (e) {
      return json({ error: "That did not send. Write to support@mediaflowswift.com instead." }, 502, origin);
    }
    return json({ ok: true }, 200, origin);
  },
};
