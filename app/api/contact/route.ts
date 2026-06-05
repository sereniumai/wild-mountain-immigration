import { Resend } from "resend";
import { site } from "@/lib/site";

type Body = {
  name?: string;
  email?: string;
  age?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: boolean;
  company?: string; // honeypot
  turnstileToken?: string; // Cloudflare Turnstile challenge token
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field people never see but bots fill in. Pretend success.
  if (body.company && body.company.trim()) return Response.json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const age = (body.age ?? "").trim().slice(0, 20);
  const phone = (body.phone ?? "").trim();
  const service = (body.service ?? "").trim() || "General enquiry";
  const message = (body.message ?? "").trim();

  if (!name || !EMAIL_RE.test(email) || body.consent !== true) {
    return Response.json(
      { ok: false, error: "Please add your name, a valid email and agree to be contacted." },
      { status: 422 },
    );
  }

  // Cloudflare Turnstile: verify the challenge server-side. Only enforced when a
  // secret is configured, so the form still works before keys are added.
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const tok = (body.turnstileToken ?? "").trim();
    if (!tok) {
      return Response.json(
        { ok: false, error: "Please complete the verification and try again." },
        { status: 422 },
      );
    }
    try {
      const ip =
        request.headers.get("CF-Connecting-IP") ||
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        "";
      const params = new URLSearchParams({ secret: turnstileSecret, response: tok });
      if (ip) params.set("remoteip", ip);
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
        signal: AbortSignal.timeout(10000),
      });
      const outcome = (await verify.json()) as { success?: boolean };
      if (!outcome.success) {
        return Response.json(
          { ok: false, error: "Verification failed. Please refresh and try again." },
          { status: 403 },
        );
      }
    } catch (err) {
      console.error("[contact] Turnstile verify failed", err);
      return Response.json(
        { ok: false, error: "We could not verify your request. Please try again." },
        { status: 502 },
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json(
      { ok: false, error: "The form is not configured yet. Please call or email us instead." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Wild Mountain Immigration <onboarding@resend.dev>";

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Age: ${age || "(not given)"}`,
    `Phone: ${phone || "(not given)"}`,
    `Pathway: ${service}`,
    "",
    "Message:",
    message || "(no message)",
  ].join("\n");

  const muted = '#9aa0a6';
  const ageCell = esc(age) || `<span style="color:${muted}">Not provided</span>`;
  const phoneCell = esc(phone) || `<span style="color:${muted}">Not provided</span>`;
  const messageCell = esc(message) || `<span style="color:${muted}">No message provided</span>`;
  const font = "'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#f4f1ef;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ef;padding:28px 12px;font-family:${font};">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #efe6e4;">
        <tr><td style="background:#e00400;background-image:linear-gradient(135deg,#ee100c,#e00400);padding:22px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="font-size:17px;font-weight:700;color:#ffffff;letter-spacing:-0.2px;">${esc(site.name)}</td>
            <td align="right" style="font-size:12px;color:rgba(255,255,255,0.88);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">New enquiry</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:28px 28px 6px;">
          <h1 style="margin:0 0 6px;font-size:20px;line-height:1.3;color:#32373c;font-weight:700;">You have a new website enquiry</h1>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;">${esc(name)} got in touch via your website. Reply to this email to respond to them directly.</p>
        </td></tr>
        <tr><td style="padding:18px 28px 6px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0e6e4;border-radius:12px;background:#fdfbfb;">
            <tr><td style="padding:14px 18px;border-bottom:1px solid #f4ecea;">
              <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:${muted};font-weight:600;">Name</div>
              <div style="font-size:15px;color:#32373c;font-weight:600;margin-top:3px;">${esc(name)}</div>
            </td></tr>
            <tr><td style="padding:14px 18px;border-bottom:1px solid #f4ecea;">
              <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:${muted};font-weight:600;">Email</div>
              <div style="font-size:15px;margin-top:3px;"><a href="mailto:${esc(email)}" style="color:#e00400;text-decoration:none;font-weight:600;">${esc(email)}</a></div>
            </td></tr>
            <tr><td style="padding:14px 18px;border-bottom:1px solid #f4ecea;">
              <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:${muted};font-weight:600;">Age</div>
              <div style="font-size:15px;color:#32373c;margin-top:3px;">${ageCell}</div>
            </td></tr>
            <tr><td style="padding:14px 18px;border-bottom:1px solid #f4ecea;">
              <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:${muted};font-weight:600;">Phone</div>
              <div style="font-size:15px;color:#32373c;margin-top:3px;">${phoneCell}</div>
            </td></tr>
            <tr><td style="padding:14px 18px;">
              <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:${muted};font-weight:600;">Pathway</div>
              <div style="margin-top:7px;"><span style="display:inline-block;background:#fbe9e8;color:#e00400;font-size:13px;font-weight:600;padding:4px 13px;border-radius:999px;">${esc(service)}</span></div>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:18px 28px 4px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:${muted};font-weight:600;margin-bottom:8px;">Their message</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fef4f3;border-radius:8px;">
            <tr><td style="padding:14px 16px;border-left:3px solid #e00400;border-radius:8px;font-size:14px;line-height:1.65;color:#32373c;white-space:pre-wrap;">${messageCell}</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:20px 28px 4px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border-radius:10px;background:#e00400;">
            <a href="mailto:${esc(email)}?subject=Re:%20your%20enquiry%20to%20${encodeURIComponent(site.name)}" style="display:inline-block;padding:12px 26px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:10px;">Reply to ${esc(name)} &rarr;</a>
          </td></tr></table>
        </td></tr>
        <tr><td style="padding:22px 28px 26px;">
          <hr style="border:none;border-top:1px solid #f0e6e4;margin:0 0 14px;">
          <p style="margin:0;font-size:12px;line-height:1.6;color:${muted};">Sent from the contact form at <a href="${site.url}" style="color:#e00400;text-decoration:none;">wildmountainimmigration.com</a>. Hitting reply emails ${esc(name)} directly at ${esc(email)}.</p>
        </td></tr>
      </table>
      <p style="margin:16px 0 0;font-size:11px;color:#b8b2af;">${esc(site.name)} &middot; RCIC #${site.rcicNumber} &middot; ${esc(site.locality)}, ${esc(site.region)}</p>
    </td></tr>
  </table>
</body></html>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry: ${service} (${name})`,
      text,
      html,
    });
    if (error) {
      console.error("[contact] Resend error", error);
      return Response.json(
        { ok: false, error: "We could not send your message. Please try again, or call us." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Resend threw", err);
    return Response.json(
      { ok: false, error: "We could not send your message. Please try again, or call us." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
