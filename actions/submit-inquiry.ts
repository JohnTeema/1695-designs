"use server";

import { Resend } from "resend";

export type InquiryResult =
  | { success: true }
  | { success: false; error: string };

function emailHtml(fields: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:8px 16px 8px 0;width:140px;vertical-align:top;
                     font-size:11px;letter-spacing:0.1em;text-transform:uppercase;
                     color:#A6A6A6;font-family:sans-serif;">${label}</td>
          <td style="padding:8px 0;font-size:15px;color:#1C1C1C;font-family:sans-serif;
                     line-height:1.5;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#F5F3EF;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td>
      <table width="600" cellpadding="0" cellspacing="0"
             style="max-width:600px;margin:0 auto;background:#ffffff;">

        <!-- Header -->
        <tr>
          <td style="padding:32px 40px;background:#1C1C1C;">
            <p style="margin:0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;
                      color:#B08D57;font-family:sans-serif;">1695 Designs</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:500;color:#F5F3EF;
                       font-family:Georgia,serif;">New Project Inquiry</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row("Name", fields.name)}
              ${row("Email", `<a href="mailto:${fields.email}" style="color:#B08D57;">${fields.email}</a>`)}
              ${row("Phone", fields.phone)}
              ${row("Project Type", fields.projectType)}
            </table>
            <hr style="border:none;border-top:1px solid #D8D2C8;margin:24px 0;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.1em;
                      text-transform:uppercase;color:#A6A6A6;font-family:sans-serif;">Message</p>
            <p style="margin:0;font-size:15px;color:#1C1C1C;line-height:1.7;
                      font-family:sans-serif;white-space:pre-line;">${fields.message}</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;background:#F5F3EF;border-top:1px solid #D8D2C8;">
            <p style="margin:0;font-size:11px;color:#A6A6A6;font-family:sans-serif;">
              Sent from the inquiry form at 1695designs.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function submitInquiry(formData: FormData): Promise<InquiryResult> {
  // ── Honeypot: bots fill this; humans leave it blank ──────────────────────
  const honey = formData.get("_honey") as string;
  if (honey) {
    // Silently succeed — don't reveal the check to the bot
    return { success: true };
  }

  // ── Extract fields ────────────────────────────────────────────────────────
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const projectType = (formData.get("projectType") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // ── Server-side validation ────────────────────────────────────────────────
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in your name, email, and message." };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // ── Guard: skip sending if Resend isn't configured yet ───────────────────
  if (!process.env.RESEND_API_KEY || !process.env.INQUIRY_TO_EMAIL) {
    // Log so it's visible in the dev console; still succeeds so the form UX works
    console.warn("[submit-inquiry] RESEND_API_KEY or INQUIRY_TO_EMAIL not set — skipping send.");
    return { success: true };
  }

  // ── Send via Resend ───────────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);

  const fromAddress =
    process.env.INQUIRY_FROM_EMAIL ?? "1695 Designs <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [process.env.INQUIRY_TO_EMAIL],
      replyTo: email,
      subject: `New Project Inquiry — ${name}`,
      html: emailHtml({ name, email, phone, projectType, message }),
    });

    if (error) {
      console.error("[submit-inquiry] Resend error:", error);
      return { success: false, error: "Failed to send your message. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("[submit-inquiry] Unexpected error:", err);
    return { success: false, error: "Failed to send your message. Please try again." };
  }
}
