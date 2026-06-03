import { Resend } from "resend";
import { site } from "@/lib/site";

type Body = {
  name?: string;
  email?: string;
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
    `Phone: ${phone || "(not given)"}`,
    `Pathway: ${service}`,
    "",
    "Message:",
    message || "(no message)",
  ].join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,Arial,sans-serif;color:#32373c;line-height:1.6;max-width:560px">
      <h2 style="margin:0 0 14px;font-size:18px;color:#e00400">New website enquiry</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:4px 14px 4px 0;color:#6b7280">Name</td><td style="padding:4px 0;font-weight:600">${esc(name)}</td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#6b7280">Email</td><td style="padding:4px 0"><a href="mailto:${esc(email)}" style="color:#e00400">${esc(email)}</a></td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#6b7280">Phone</td><td style="padding:4px 0">${esc(phone) || "(not given)"}</td></tr>
        <tr><td style="padding:4px 14px 4px 0;color:#6b7280">Pathway</td><td style="padding:4px 0">${esc(service)}</td></tr>
      </table>
      <p style="margin:18px 0 4px;color:#6b7280;font-size:13px">Message</p>
      <p style="margin:0;white-space:pre-wrap">${esc(message) || "(no message)"}</p>
    </div>`;

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
