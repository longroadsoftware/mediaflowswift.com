// Minimal SMTP client over an already-open TLS socket (Purelymail, port 465).

export function createSmtp(reader, writer) {
  const dec = new TextDecoder();
  const enc = new TextEncoder();
  let buf = "";

  async function readReply() {
    while (true) {
      const idx = buf.indexOf("\n");
      if (idx === -1) {
        const { value, done } = await reader.read();
        if (done) throw new Error("smtp closed");
        buf += dec.decode(value, { stream: true });
        continue;
      }
      const line = buf.slice(0, idx).replace(/\r$/, "");
      buf = buf.slice(idx + 1);
      if (line.length < 4) continue;
      if (line[3] === "-") continue;
      return { code: line.slice(0, 3), line };
    }
  }

  async function cmd(line) {
    await writer.write(enc.encode(line + "\r\n"));
    const reply = await readReply();
    if (reply.code[0] === "4" || reply.code[0] === "5") {
      throw new Error("smtp " + reply.code);
    }
    return reply;
  }

  return { readReply, cmd };
}

export function dotStuff(text) {
  return text.replace(/\n\./g, "\n..");
}

export function messageBytes(mail) {
  const headers = [
    "From: MediaFlowSwift website <forms@longroadsoftware.com>",
    "To: " + mail.to,
    "Reply-To: " + mail.replyTo,
    "Subject: " + mail.subject,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
    "Date: " + new Date().toUTCString(),
  ];
  return headers.join("\r\n") + "\r\n\r\n" + dotStuff(mail.text).replace(/\n/g, "\r\n") + "\r\n";
}
