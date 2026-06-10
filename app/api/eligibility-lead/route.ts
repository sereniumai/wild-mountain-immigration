import { Resend } from "resend";
import { site } from "@/lib/site";
import { POLICY, FRESHNESS_NOTE } from "@/lib/eligibility/constants";

/* Lead capture for the eligibility checker. Fires only on a completed, consented
   submission: sends the business an internal lead email and the user a copy of
   their results. (There is deliberately no "abandoner"/partial capture: emailing
   identifiable details before consent would breach PIPEDA/CASL.) */

type QA = { q: string; a: string };
type Item = { title: string; tier: string; why: string };
type Group = { heading: string; items: Item[] };
type Snapshot = { passport?: string; residence?: string; province?: string };
type Body = {
  path?: string;          // human label, e.g. "Immigrate permanently"
  name?: string;
  email?: string;
  consent?: boolean;
  snapshot?: Snapshot;    // passport / inside-outside Canada / province, surfaced up top
  answers?: QA[];
  results?: { headline?: string; groups?: Group[]; flags?: string[]; provinceNote?: string };
  company?: string;       // honeypot
  turnstileToken?: string; // Cloudflare Turnstile challenge token
};

/* Clamp untrusted input before it is rendered into emails: bounds array lengths
   and string sizes so a malicious/oversized body cannot inflate the outbound
   email or function memory. Values are also HTML-escaped at render time. */
const cut = (s: unknown, n: number) => String(s ?? "").slice(0, n);
function clampBody(b: Body): Body {
  const r = b.results ?? {};
  return {
    path: cut(b.path, 120),
    name: cut(b.name, 120),
    email: cut(b.email, 200),
    consent: b.consent === true,
    company: b.company,
    turnstileToken: b.turnstileToken,
    snapshot: {
      passport: cut(b.snapshot?.passport, 100),
      residence: cut(b.snapshot?.residence, 80),
      province: cut(b.snapshot?.province, 60),
    },
    answers: (b.answers ?? []).slice(0, 60).map((qa) => ({ q: cut(qa?.q, 300), a: cut(qa?.a, 300) })),
    results: {
      headline: cut(r.headline, 400),
      provinceNote: cut(r.provinceNote, 600),
      flags: (r.flags ?? []).slice(0, 20).map((f) => cut(f, 600)),
      groups: (r.groups ?? []).slice(0, 12).map((g) => ({
        heading: cut(g?.heading, 200),
        items: (g?.items ?? []).slice(0, 20).map((i) => ({ title: cut(i?.title, 200), tier: cut(i?.tier, 20), why: cut(i?.why, 500) })),
      })),
    },
  };
}

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

function renderGroups(groups: Group[]): string {
  return groups
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
}

function renderFlags(flags: string[], heading = "Important notes"): string {
  if (!flags.length) return "";
  return `<div style="margin-top:14px;padding:12px 14px;background:#fff8e6;border:1px solid #f3e2b3;border-radius:8px;">
      <div style="font-size:12px;font-weight:700;color:#9a6b00;margin-bottom:6px;">${esc(heading)}</div>
      ${flags.map((f) => `<div style="font-size:12.5px;color:#6b5a2a;line-height:1.5;margin-top:3px;">• ${esc(f)}</div>`).join("")}
    </div>`;
}

/* The three intake facts the team asked to see on every email: passport held,
   whether the person is inside/outside Canada, and (if inside) their province.
   Empty fields are dropped, so non-Canada leads don't show a blank province. */
function renderSnapshot(s: Snapshot | undefined): string {
  const rows = ([
    ["Passport held", s?.passport],
    ["Currently resides", s?.residence],
    ["Province of residence", s?.province],
  ] as [string, string | undefined][]).filter(([, v]) => v && v.trim());
  if (!rows.length) return "";
  const cells = rows
    .map(([k, v], i) => {
      const border = i < rows.length - 1 ? "border-bottom:1px solid #f4ecea;" : "";
      return `<tr><td style="padding:11px 16px;${border}font-size:13px;color:${muted};width:46%;">${esc(k)}</td><td style="padding:11px 16px;${border}font-size:14px;color:#32373c;font-weight:600;">${esc(v)}</td></tr>`;
    })
    .join("");
  return `<div style="font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:${muted};font-weight:700;margin-bottom:8px;">Applicant snapshot</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0e6e4;border-radius:10px;">${cells}</table>`;
}

function buildHtml(b: Body): string {
  const rows = (b.answers ?? [])
    .map(
      (qa) => `<tr><td style="padding:9px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};width:46%;vertical-align:top;">${esc(qa.q)}</td>
      <td style="padding:9px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:#32373c;font-weight:600;">${esc(qa.a)}</td></tr>`,
    )
    .join("");

  const groupsHtml = renderGroups(b.results?.groups ?? []);
  const flagsHtml = renderFlags(b.results?.flags ?? []);

  const banner = "Eligibility results";
  const bannerColor = "#e00400";

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
      <h1 style="margin:0 0 4px;font-size:19px;color:#32373c;">New eligibility checker result</h1>
      <p style="margin:0;font-size:13.5px;color:#6b7280;line-height:1.6;">A full result from the eligibility checker. Reply to this email to reach them directly.</p>
    </td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0e6e4;border-radius:10px;">
        <tr><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};width:46%;">Name</td><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:14px;color:#32373c;font-weight:600;">${esc(b.name || "(not given)")}</td></tr>
        <tr><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};">Email</td><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:14px;"><a href="mailto:${esc(b.email)}" style="color:#e00400;text-decoration:none;font-weight:600;">${esc(b.email)}</a></td></tr>
        <tr><td style="padding:11px 16px;font-size:13px;color:${muted};">Path</td><td style="padding:11px 16px;font-size:14px;"><span style="display:inline-block;background:#fbe9e8;color:#e00400;font-size:13px;font-weight:600;padding:3px 12px;border-radius:999px;">${esc(b.path || "Eligibility")}</span></td></tr>
      </table>
    </td></tr>
    ${renderSnapshot(b.snapshot) ? `<tr><td style="padding:16px 26px 0;">${renderSnapshot(b.snapshot)}</td></tr>` : ""}
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

/* The results email sent to the person who completed the checker. Warmer than the
   internal lead email, and built around a single CTA to book a consultation. */
function buildUserHtml(b: Body): string {
  const firstName = (b.name ?? "").trim().split(/\s+/)[0] || "there";
  const groupsHtml = renderGroups(b.results?.groups ?? []);
  const flagsHtml = renderFlags(b.results?.flags ?? [], "Important to know");
  const provinceNote = b.results?.provinceNote
    ? `<div style="margin-top:14px;padding:12px 14px;background:#fbeceb;border:1px solid #f4d3d0;border-radius:8px;">
        <div style="font-size:12px;font-weight:700;color:#c40300;margin-bottom:4px;">Provincial programs</div>
        <div style="font-size:12.5px;color:#6b5a59;line-height:1.55;">${esc(b.results.provinceNote)}</div>
      </div>`
    : "";
  const contactUrl = `${site.url}/contact`;

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#f4f1ef;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ef;padding:28px 12px;font-family:${font};"><tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #efe6e4;">
    <tr><td style="background:#e00400;padding:22px 26px;">
      <table role="presentation" width="100%"><tr>
        <td style="font-size:17px;font-weight:700;color:#ffffff;">${esc(site.name)}</td>
        <td align="right" style="font-size:12px;color:rgba(255,255,255,0.9);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Your results</td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:26px 26px 6px;">
      <h1 style="margin:0 0 8px;font-size:20px;color:#32373c;">Hi ${esc(firstName)}, here's your pathway summary</h1>
      <p style="margin:0;font-size:13.5px;color:#6b7280;line-height:1.65;">Thanks for using our eligibility checker. Below is an automated first read of the Canadian immigration routes that may fit what you told us. It's a starting point, not a decision, the real next step is a proper review with our regulated consultant.</p>
    </td></tr>
    ${b.results?.headline ? `<tr><td style="padding:14px 26px 0;">
      <div style="padding:13px 16px;background:#fbeceb;border:1px solid #f4d3d0;border-radius:10px;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:#c40300;font-weight:700;">Summary</div>
        <div style="font-size:15px;font-weight:700;color:#32373c;margin-top:3px;">${esc(b.results.headline)}</div>
      </div>
    </td></tr>` : ""}
    ${renderSnapshot(b.snapshot) ? `<tr><td style="padding:16px 26px 0;">${renderSnapshot(b.snapshot)}</td></tr>` : ""}
    ${groupsHtml ? `<tr><td style="padding:4px 26px 0;">${groupsHtml}</td></tr>` : ""}
    ${provinceNote ? `<tr><td style="padding:4px 26px 0;">${provinceNote}</td></tr>` : ""}
    ${flagsHtml ? `<tr><td style="padding:4px 26px 0;">${flagsHtml}</td></tr>` : ""}
    <tr><td style="padding:18px 26px 0;">
      <div style="padding:12px 14px;background:#f7f4f2;border-radius:10px;font-size:12.5px;color:#6b7280;line-height:1.55;">${esc(FRESHNESS_NOTE)}</div>
    </td></tr>
    <tr><td style="padding:22px 26px 4px;">
      <div style="background:#32373c;border-radius:14px;padding:22px 22px 24px;text-align:center;">
        <div style="font-size:16px;font-weight:700;color:#ffffff;">Ready for a proper review?</div>
        <p style="margin:8px 0 16px;font-size:13px;color:#cfd3d6;line-height:1.6;">A licensed RCIC (#R706497) will confirm which of these you genuinely qualify for and map your next steps, honestly, with no guarantees about outcomes only IRCC decides.</p>
        <a href="${contactUrl}" style="display:inline-block;background:#e00400;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 26px;border-radius:10px;">Book a consultation</a>
      </div>
    </td></tr>
    <tr><td style="padding:20px 26px 26px;">
      <hr style="border:none;border-top:1px solid #f0e6e4;margin:0 0 12px;">
      <p style="margin:0;font-size:11.5px;color:${muted};line-height:1.65;">This is an AI-assisted guide, not an official decision, and it isn't legal advice. ${esc(site.name)} is a CICC-regulated immigration consultancy and is not affiliated with the Government of Canada. We don't cover Quebec-selected programs. Program details last verified ${esc(POLICY.lastVerified)}. You received this because you used the eligibility checker at <a href="${site.url}/tools/eligibility" style="color:#e00400;text-decoration:none;">wildmountainimmigration.com</a>.</p>
    </td></tr>
  </table>
</td></tr></table></body></html>`;
}

/* Verify a Cloudflare Turnstile token server-side. Returns true when the secret
   isn't configured (so the form keeps working before keys are added). */
async function turnstileOk(token: string, request: Request): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const ip =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "";
    const params = new URLSearchParams({ secret, response: token });
    if (ip) params.set("remoteip", ip);
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
      signal: AbortSignal.timeout(10000),
    });
    const outcome = (await verify.json()) as { success?: boolean };
    return outcome.success === true;
  } catch (err) {
    console.error("[eligibility-lead] Turnstile verify failed", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.company && body.company.trim()) return Response.json({ ok: true }); // honeypot

  body = clampBody(body);
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "A valid email is required." }, { status: 422 });
  }
  if (!name || body.consent !== true) {
    return Response.json({ ok: false, error: "Please add your name and agree to be contacted." }, { status: 422 });
  }
  // Bot protection: a submission sends two emails via Resend.
  if (!(await turnstileOk((body.turnstileToken ?? "").trim(), request))) {
    return Response.json({ ok: false, error: "Verification failed. Please refresh and try again." }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[eligibility-lead] RESEND_API_KEY is not set");
    // Don't block the user's results if email isn't configured yet.
    return Response.json({ ok: true, warning: "not-configured" });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Wild Mountain Immigration <onboarding@resend.dev>";

  const snap = body.snapshot ?? {};
  const snapText = [
    snap.passport ? `Passport held: ${snap.passport}` : "",
    snap.residence ? `Currently resides: ${snap.residence}` : "",
    snap.province ? `Province of residence: ${snap.province}` : "",
  ].filter(Boolean);

  const textLines = [
    `Path: ${body.path || "Eligibility"}`,
    `Name: ${name || "(not given)"}`,
    `Email: ${email}`,
    ...snapText,
    "",
    body.results?.headline ? `Summary: ${body.results.headline}` : "",
    ...(body.results?.groups ?? []).flatMap((gr) => [`# ${gr.heading}`, ...gr.items.map((i) => `  [${i.tier}] ${i.title} - ${i.why}`)]),
    ...(body.results?.flags?.length ? ["", "Notes:", ...body.results.flags.map((f) => `  - ${f}`)] : []),
    ...(body.answers?.length ? ["", "Answers:", ...body.answers.map((qa) => `  ${qa.q}: ${qa.a}`)] : []),
  ].filter(Boolean);

  const resend = new Resend(apiKey);

  // 1) Internal lead notification to the business.
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Eligibility result: ${name} (${body.path || "Eligibility"})`,
      text: textLines.join("\n"),
      html: buildHtml(body),
    });
    if (error) console.error("[eligibility-lead] Resend error (internal):", error.message);
  } catch (err) {
    console.error("[eligibility-lead] Resend threw (internal):", err instanceof Error ? err.message : err);
  }

  // 2) Results email to the user. Replies go to the business inbox.
  const userText = [
    `Hi ${name.split(/\s+/)[0] || "there"},`,
    "",
    "Thanks for using our eligibility checker. Here's an automated first read of the routes that may fit what you told us. It's a starting point, not a decision.",
    "",
    ...snapText,
    ...(snapText.length ? [""] : []),
    body.results?.headline ? `Summary: ${body.results.headline}` : "",
    ...(body.results?.groups ?? []).flatMap((gr) => [`# ${gr.heading}`, ...gr.items.map((i) => `  [${i.tier}] ${i.title} - ${i.why}`)]),
    ...(body.results?.flags?.length ? ["", "Important to know:", ...body.results.flags.map((f) => `  - ${f}`)] : []),
    ...(body.results?.provinceNote ? ["", `Provincial programs: ${body.results.provinceNote}`] : []),
    "",
    FRESHNESS_NOTE,
    "",
    `Ready for a proper review? Book a consultation: ${site.url}/contact`,
    "",
    `${site.name} - CICC-regulated RCIC (#R706497). Not affiliated with the Government of Canada. Quebec not covered. Details last verified ${POLICY.lastVerified}.`,
  ].filter(Boolean);

  try {
    const { error } = await resend.emails.send({
      from,
      to: email,
      replyTo: to,
      subject: "Your Canadian immigration pathway results",
      text: userText.join("\n"),
      html: buildUserHtml(body),
    });
    if (error) console.error("[eligibility-lead] Resend error (user):", error.message);
  } catch (err) {
    console.error("[eligibility-lead] Resend threw (user):", err instanceof Error ? err.message : err);
  }

  return Response.json({ ok: true });
}
