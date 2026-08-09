import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  lang?: string;
  website?: string; // honeypot
};

function esc(s = "") {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: silently accept bots without sending.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { name, email, company, phone, interest, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const from = process.env.SENDGRID_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "martin@gtconnections.com";

  if (!apiKey || !from) {
    console.error("SendGrid env vars missing (SENDGRID_API_KEY / SENDGRID_FROM_EMAIL).");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const rows: [string, string | undefined][] = [
    ["Nombre / Name", name],
    ["Email", email],
    ["Empresa / Company", company],
    ["Teléfono / Phone", phone],
    ["Interés / Interest", interest],
  ];

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;background:#03060f;color:#dbe4f5;padding:32px;">
    <div style="max-width:560px;margin:0 auto;background:#0a1124;border:1px solid #15203f;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(90deg,#0b3aa8,#2f7bff);padding:20px 28px;">
        <h1 style="margin:0;font-size:18px;color:#fff;letter-spacing:1px;">SPACE DC — New lead</h1>
      </div>
      <div style="padding:28px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows
            .filter(([, v]) => v && v.trim() !== "")
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 0;color:#7f92b8;width:150px;vertical-align:top;">${esc(
                  k
                )}</td><td style="padding:8px 0;color:#fff;">${esc(v)}</td></tr>`
            )
            .join("")}
        </table>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #15203f;">
          <div style="color:#7f92b8;font-size:14px;margin-bottom:6px;">Mensaje / Message</div>
          <div style="color:#fff;font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(
            message
          )}</div>
        </div>
      </div>
      <div style="padding:16px 28px;background:#060a18;color:#5a6a90;font-size:12px;">
        Enviado desde el formulario de Space DC · ${new Date().toISOString()}
      </div>
    </div>
  </div>`;

  const text = rows
    .filter(([, v]) => v && v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .concat(["", "Message:", message!])
    .join("\n");

  // SendGrid v3 Mail Send REST API (no SDK dependency).
  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from, name: "Space DC" },
    reply_to: { email, name },
    subject: `Space DC — ${interest || "Nuevo contacto"}: ${name}`,
    content: [
      { type: "text/plain", value: text },
      { type: "text/html", value: html },
    ],
  };

  try {
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // SendGrid returns 202 Accepted on success.
    if (res.status === 202) {
      return NextResponse.json({ ok: true });
    }

    const detail = await res.text();
    console.error("SendGrid error:", res.status, detail);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  } catch (err) {
    console.error("SendGrid request failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
