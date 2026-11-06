// What the contact form may send, and where. Destinations are fixed here.
// The page cannot choose an address.

export const TOPICS = {
  help: {
    to: "support@mediaflowswift.com",
    subject: "Help with MediaFlowSwift",
    label: "Help with the app",
  },
  sales: {
    to: "hello@longroadsoftware.com",
    subject: "Question about buying MediaFlowSwift",
    label: "Buying or a plan",
  },
  billing: {
    to: "billing@longroadsoftware.com",
    subject: "Billing question",
    label: "A bill, invoice, receipt, payment or tax",
  },
  plan: {
    to: "support@mediaflowswift.com",
    subject: "Refund or plan change",
    label: "A refund, or a change to a plan already paid for",
  },
  other: {
    to: "hello@longroadsoftware.com",
    subject: "Message from the MediaFlowSwift website",
    label: "Something else",
  },
};

export const USAGE = {
  "not-yet": "Not using it yet",
  trial: "Trying the 14-day trial",
  paid: "Has a licence key",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 2000;
const MAX_AGE_MS = 2 * 60 * 60 * 1000;

export function cleanHeader(value) {
  return String(value || "").replace(/[\r\n]+/g, " ").trim();
}

export function buildMessage(fields, now = Date.now()) {
  if (String(fields.company_url || "").trim()) return { ok: true, drop: true };

  const started = Number(fields.started);
  const age = now - started;
  if (!Number.isFinite(started) || age < MIN_FILL_MS || age > MAX_AGE_MS) {
    return { error: "Send it again from the contact page." };
  }

  const topic = TOPICS[fields.topic];
  if (!topic) return { error: "Pick what this is about." };

  const name = cleanHeader(fields.name).slice(0, 80);
  const email = cleanHeader(fields.email).slice(0, 120);
  const message = String(fields.message || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim().slice(0, 4000);
  const version = cleanHeader(fields.version).slice(0, 120);
  const usage = USAGE[fields.usage] || "Not said";

  if (!name) return { error: "Add your name." };
  if (!EMAIL.test(email) || email.length > 120) return { error: "That email address does not look right." };
  if (message.length < 8) return { error: "Say a little more about what you need." };

  const text = [
    name + " wrote from the contact form on mediaflowswift.com.",
    "",
    "About: " + topic.label,
    "Reply to: " + email,
    "Using MediaFlowSwift: " + usage,
    version ? "Mac or app version: " + version : null,
    "",
    message,
    "",
    "—",
    "Sent from https://mediaflowswift.com/contact.html",
    "Reply to the address above. This note was not added to any mailing list.",
  ].filter((line) => line !== null).join("\n");

  return { ok: true, to: topic.to, replyTo: email, subject: topic.subject, text };
}
