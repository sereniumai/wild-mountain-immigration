import { Resend } from "resend";
import { site } from "@/lib/site";

/* Lead capture for the eligibility checker.
   stage "partial"  -> fired when a valid email is entered on the final step but
                       the person hasn't submitted yet (abandoner capture).
   stage "complete" -> fired on submit, with the full answers + recommended routes. */

type QA = { q: string; a: string };
type Item = { title: string; tier: string; why: string };
type Group = { heading: string; items: Item[] };
type Body = {
  stage?: "partial" | "complete";
  path?: string;          // human label, e.g. "Immigrate permanently"
  name?: string;
  email?: string;
  phone?: string;
  consent?: boolean;
  answers?: QA[];
  results?: { headline?: string; groups?: Group[]; flags?: string[]; provinceNote?: string };
  company?: string;       // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: unknown) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const muted = "#9aa0a6";
const font = "'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function tierChip(tier: string): string {
  const map: Record<string, [string, string, string]> = {
    strong: ["#e7f6ea", "#1d7a33", "Strong match"],
    possible: ["#fbe9e8", "#c40300", "Worth exploring"],
    note: ["#eef0f2", "#565c61", "Note"],
  };
  const [bg, fg, label] = map[tier] ?? map.note;
  return `<span style="display:inline-block;background:${bg};color:${fg};font-size:11px;font-weight:600;padding:2px 9px;border-radius:999px;">${label}</span>`;
}

function buildHtml(b: Body, partial: boolean): string {
  const rows = (b.answers ?? [])
    .map(
      (qa) => `<tr><td style="padding:9px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};width:46%;vertical-align:top;">${esc(qa.q)}</td>
      <td style="padding:9px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:#32373c;font-weight:600;">${esc(qa.a)}</td></tr>`,
    )
    .join("");

  const groupsHtml = (b.results?.groups ?? [])
    .map(
      (gr) => `<div style="margin-top:14px;">
        <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:${muted};font-weight:700;margin-bottom:6px;">${esc(gr.heading)}</div>
        ${gr.items
          .map(
            (it) => `<div style="padding:10px 12px;border:1px solid #f0e6e4;border-radius:8px;margin-bottom:6px;">
              <div>${tierChip(it.tier)} <span style="font-size:14px;font-weight:600;color:#32373c;">${esc(it.title)}</span></div>
              <div style="font-size:12.5px;color:#6b7280;margin-top:4px;line-height:1.5;">${esc(it.why)}</div>
            </div>`,
          )
          .join("")}
      </div>`,
    )
    .join("");

  const flagsHtml = (b.results?.flags ?? []).length
    ? `<div style="margin-top:14px;padding:12px 14px;background:#fff8e6;border:1px solid #f3e2b3;border-radius:8px;">
        <div style="font-size:12px;font-weight:700;color:#9a6b00;margin-bottom:6px;">Important notes</div>
        ${(b.results!.flags ?? []).map((f) => `<div style="font-size:12.5px;color:#6b5a2a;line-height:1.5;margin-top:3px;">• ${esc(f)}</div>`).join("")}
      </div>`
    : "";

  const banner = partial ? "Started, not finished" : "Eligibility results";
  const bannerColor = partial ? "#9a6b00" : "#e00400";

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#f4f1ef;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ef;padding:28px 12px;font-family:${font};"><tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #efe6e4;">
    <tr><td style="background:${bannerColor};padding:20px 26px;">
      <table role="presentation" width="100%"><tr>
        <td style="font-size:16px;font-weight:700;color:#ffffff;">${esc(site.name)}</td>
        <td align="right" style="font-size:12px;color:rgba(255,255,255,0.9);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">${banner}</td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:24px 26px 4px;">
      <h1 style="margin:0 0 4px;font-size:19px;color:#32373c;">${partial ? "Someone started the eligibility checker" : "New eligibility checker result"}</h1>
      <p style="margin:0;font-size:13.5px;color:#6b7280;line-height:1.6;">${partial
        ? "They entered their email but hadn't submitted when this was sent. You may want to follow up."
        : "A full result from the eligibility checker. Reply to this email to reach them directly."}</p>
    </td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0e6e4;border-radius:10px;">
        <tr><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};width:46%;">Name</td><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:14px;color:#32373c;font-weight:600;">${esc(b.name || "(not given)")}</td></tr>
        <tr><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};">Email</td><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:14px;"><a href="mailto:${esc(b.email)}" style="color:#e00400;text-decoration:none;font-weight:600;">${esc(b.email)}</a></td></tr>
        <tr><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};">Phone</td><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:14px;color:#32373c;">${esc(b.phone || "(not given)")}</td></tr>
        <tr><td style="padding:11px 16px;font-size:13px;color:${muted};">Path</td><td style="padding:11px 16px;font-size:14px;"><span style="display:inline-block;background:#fbe9e8;color:#e00400;font-size:13px;font-weight:600;padding:3px 12px;border-radius:999px;">${esc(b.path || "Eligibility")}</span></td></tr>
      </table>
    </td></tr>
    ${b.results?.headline ? `<tr><td style="padding:16px 26px 0;"><div style="font-size:14px;font-weight:700;color:#32373c;">Summary: ${esc(b.results.headline)}</div></td></tr>` : ""}
    ${groupsHtml ? `<tr><td style="padding:4px 26px 0;">${groupsHtml}</td></tr>` : ""}
    ${flagsHtml ? `<tr><td style="padding:4px 26px 0;">${flagsHtml}</td></tr>` : ""}
    ${rows ? `<tr><td style="padding:18px 26px 4px;">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:${muted};font-weight:700;margin-bottom:8px;">Their answers</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0e6e4;border-radius:10px;">${rows}</table>
    </td></tr>` : ""}
    <tr><td style="padding:20px 26px 26px;">
      <hr style="border:none;border-top:1px solid #f0e6e4;margin:0 0 12px;">
      <p style="margin:0;font-size:11.5px;color:${muted};line-height:1.6;">Captured by the eligibility checker on <a href="${site.url}/tools/eligibility" style="color:#e00400;text-decoration:none;">wildmountainimmigration.com</a>. This is an AI-assisted guide, not a decision.</p>
    </td></tr>
  </table>
</td></tr></table></body></html>`;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.company && body.company.trim()) return Response.json({ ok: true }); // honeypot

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const partial = body.stage === "partial";

  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "A valid email is required." }, { status: 422 });
  }
  // Completion requires consent; partial pings don't (we email ourselves only).
  if (!partial && (!name || body.consent !== true)) {
    return Response.json({ ok: false, error: "Please add your name and agree to be contacted." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[eligibility-lead] RESEND_API_KEY is not set");
    // Don't block the user's results if email isn't configured yet.
    return Response.json({ ok: true, warning: "not-configured" });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Wild Mountain Immigration <onboarding@resend.dev>";
  const subject = partial
    ? `Eligibility checker started (not finished): ${name || email}`
    : `Eligibility result: ${name} (${body.path || "Eligibility"})`;

  const textLines = [
    `Stage: ${partial ? "PARTIAL (not submitted)" : "COMPLETE"}`,
    `Path: ${body.path || "Eligibility"}`,
    `Name: ${name || "(not given)"}`,
    `Email: ${email}`,
    `Phone: ${(body.phone ?? "").trim() || "(not given)"}`,
    "",
    body.results?.headline ? `Summary: ${body.results.headline}` : "",
    ...(body.results?.groups ?? []).flatMap((gr) => [`# ${gr.heading}`, ...gr.items.map((i) => `  [${i.tier}] ${i.title} - ${i.why}`)]),
    ...(body.results?.flags?.length ? ["", "Notes:", ...body.results.flags.map((f) => `  - ${f}`)] : []),
    ...(body.answers?.length ? ["", "Answers:", ...body.answers.map((qa) => `  ${qa.q}: ${qa.a}`)] : []),
  ].filter(Boolean);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text: textLines.join("\n"),
      html: buildHtml(body, partial),
    });
    if (error) {
      console.error("[eligibility-lead] Resend error", error);
      // Still let the user see results; this is a background lead capture.
      return Response.json({ ok: true, warning: "send-failed" });
    }
  } catch (err) {
    console.error("[eligibility-lead] Resend threw", err);
    return Response.json({ ok: true, warning: "send-failed" });
  }

  return Response.json({ ok: true });
}
