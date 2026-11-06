import assert from "node:assert/strict";
import { buildMessage, TOPICS } from "../src/route.js";

const now = 1_700_000_000_000;
const base = {
  topic: "billing",
  name: "Ada Lovelace",
  email: "ada@example.com",
  usage: "paid",
  message: "The receipt for October never arrived.",
  started: now - 10_000,
  company_url: "",
};

const bill = buildMessage(base, now);
assert.equal(bill.ok, true);
assert.equal(bill.to, "billing@longroadsoftware.com");
assert.equal(bill.replyTo, "ada@example.com");
assert.match(bill.text, /receipt for October/);
assert.doesNotMatch(bill.text, /mailing list is on/);

const help = buildMessage({ ...base, topic: "help", version: "macOS 15, 1.11.3" }, now);
assert.equal(help.to, "support@mediaflowswift.com");
assert.match(help.text, /macOS 15/);

const refund = buildMessage({ ...base, topic: "plan" }, now);
assert.equal(refund.to, TOPICS.plan.to);
assert.equal(refund.to, "support@mediaflowswift.com");

const sales = buildMessage({ ...base, topic: "sales" }, now);
assert.equal(sales.to, "hello@longroadsoftware.com");

assert.equal(buildMessage({ ...base, company_url: "http://spam" }, now).drop, true);
assert.ok(buildMessage({ ...base, started: now - 500 }, now).error);
assert.ok(buildMessage({ ...base, email: "not-an-email" }, now).error);
assert.ok(buildMessage({ ...base, topic: "delete-all" }, now).error);
const injected = buildMessage({ ...base, name: "Ada\r\nBcc: evil@example.com" }, now);
assert.equal(injected.replyTo, "ada@example.com");
assert.doesNotMatch(injected.subject, /[\r\n]/);
assert.match(injected.text, /Ada Bcc: evil@example.com/);

console.log("route tests ok");
