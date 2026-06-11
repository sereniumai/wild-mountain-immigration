import { Resend } from "resend";
import { site } from "@/lib/site";
import { POLICY } from "@/lib/eligibility/constants";

/* Lead capture for the CRS calculator. The score is gated: the user fills the
   calculator (score blurred), then submits their contact details to reveal it.
   On submit we email the business an internal lead and the user a copy of their
   score breakdown. Fires only on a completed, consented submission. */

type QA = { q: string; a: string };
type Score = {
  total?: number; core?: number; spouse?: number; transfer?: number; additional?: number;
  breakdown?: { age?: number; edu?: number; lang1?: number; lang2?: number; canExp?: number };
};
type Body = {
  name?: string;
  email?: string;
  consent?: boolean;
  score?: Score;
  answers?: QA[];
  company?: string;       // honeypot
  turnstileToken?: string; // Cloudflare Turnstile challenge token
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: unknown) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const muted = "#9aa0a6";
const font = "'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const cut = (s: unknown, n: number) => String(s ?? "").slice(0, n);
// Clamp a number into a sane CRS range so a malicious body can't inject nonsense.
const num = (v: unknown, max: number) => {
  const n = Math.round(Number(v));
  return Number.isFinite(n) ? Math.max(0, Math.min(n, max)) : 0;
};

function clampBody(b: Body): Body {
  const s = b.score ?? {};
  const bd = s.breakdown ?? {};
  return {
    name: cut(b.name, 120),
    email: cut(b.email, 200),
    consent: b.consent === true,
    company: b.company,
    turnstileToken: b.turnstileToken,
    score: {
      total: num(s.total, 1200), core: num(s.core, 600), spouse: num(s.spouse, 40),
      transfer: num(s.transfer, 100), additional: num(s.additional, 600),
      breakdown: {
        age: num(bd.age, 110), edu: num(bd.edu, 150), lang1: num(bd.lang1, 136),
        lang2: num(bd.lang2, 24), canExp: num(bd.canExp, 80),
      },
    },
    answers: (b.answers ?? []).slice(0, 40).map((qa) => ({ q: cut(qa?.q, 200), a: cut(qa?.a, 200) })),
  };
}

/** Competitiveness band, mirrors the calculator's on-screen verdict thresholds. */
function band(total: number): string {
  if (total >= 520) return "Very competitive";
  if (total >= 480) return "Competitive";
  if (total >= 400) return "Below recent general cut-offs";
  return "Needs a boost";
}

function scoreCard(s: Score): string {
  const total = s.total ?? 0;
  const rows: [string, number][] = [
    ["Core human capital", s.core ?? 0],
    ["Spouse factors", s.spouse ?? 0],
    ["Skill transferability", s.transfer ?? 0],
    ["Additional points", s.additional ?? 0],
  ];
  const bd = s.breakdown ?? {};
  const sub: [string, number][] = [
    ["Age", bd.age ?? 0], ["Education", bd.edu ?? 0], ["First language", bd.lang1 ?? 0],
    ["Second language", bd.lang2 ?? 0], ["Canadian experience", bd.canExp ?? 0],
  ];
  const line = ([k, v]: [string, number]) =>
    `<tr><td style="padding:8px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};">${esc(k)}</td><td style="padding:8px 16px;border-bottom:1px solid #f4ecea;font-size:14px;color:#32373c;font-weight:600;text-align:right;">${v}</td></tr>`;
  return `<div style="text-align:center;padding:18px 16px;background:#fbeceb;border:1px solid #f4d3d0;border-radius:12px;">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.6px;color:#c40300;font-weight:700;">Estimated CRS score</div>
      <div style="font-size:44px;line-height:1.1;font-weight:800;color:#e00400;margin-top:4px;">${total}</div>
      <div style="font-size:12px;color:${muted};">out of 1,200 &middot; ${esc(band(total))}</div>
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;border:1px solid #f0e6e4;border-radius:10px;">
      ${rows.map(line).join("")}
      <tr><td colspan="2" style="padding:8px 16px;border-bottom:1px solid #f4ecea;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:${muted};font-weight:700;">Core breakdown</td></tr>
      ${sub.map(line).join("")}
    </table>`;
}

function answersTable(answers: QA[]): string {
  if (!answers.length) return "";
  const rows = answers
    .map(
      (qa) => `<tr><td style="padding:9px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};width:52%;vertical-align:top;">${esc(qa.q)}</td>
      <td style="padding:9px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:#32373c;font-weight:600;">${esc(qa.a)}</td></tr>`,
    )
    .join("");
  return `<div style="font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:${muted};font-weight:700;margin:0 0 8px;">Their answers</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0e6e4;border-radius:10px;">${rows}</table>`;
}

/* Internal lead email to the business. */
function buildHtml(b: Body): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#f4f1ef;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ef;padding:28px 12px;font-family:${font};"><tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #efe6e4;">
    <tr><td style="background:#e00400;padding:20px 26px;">
      <table role="presentation" width="100%"><tr>
        <td style="font-size:16px;font-weight:700;color:#ffffff;">${esc(site.name)}</td>
        <td align="right" style="font-size:12px;color:rgba(255,255,255,0.9);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">CRS calculator</td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:24px 26px 4px;">
      <h1 style="margin:0 0 4px;font-size:19px;color:#32373c;">New CRS score result</h1>
      <p style="margin:0;font-size:13.5px;color:#6b7280;line-height:1.6;">Someone calculated their CRS score and asked to be contacted. Reply to this email to reach them directly.</p>
    </td></tr>
    <tr><td style="padding:16px 26px 4px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0e6e4;border-radius:10px;">
        <tr><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:13px;color:${muted};width:46%;">Name</td><td style="padding:11px 16px;border-bottom:1px solid #f4ecea;font-size:14px;color:#32373c;font-weight:600;">${esc(b.name || "(not given)")}</td></tr>
        <tr><td style="padding:11px 16px;font-size:13px;color:${muted};">Email</td><td style="padding:11px 16px;font-size:14px;"><a href="mailto:${esc(b.email)}" style="color:#e00400;text-decoration:none;font-weight:600;">${esc(b.email)}</a></td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:16px 26px 0;">${scoreCard(b.score ?? {})}</td></tr>
    <tr><td style="padding:18px 26px 4px;">${answersTable(b.answers ?? [])}</td></tr>
    <tr><td style="padding:20px 26px 26px;">
      <hr style="border:none;border-top:1px solid #f0e6e4;margin:0 0 12px;">
      <p style="margin:0;font-size:11.5px;color:${muted};line-height:1.6;">Captured by the CRS calculator on <a href="${site.url}/tools/crs-calculator" style="color:#e00400;text-decoration:none;">wildmountainimmigration.com</a>. This is an estimate based on the public CRS grid, not an official IRCC score.</p>
    </td></tr>
  </table>
</td></tr></table></body></html>`;
}

/* Warmer results email to the person, with a single consultation CTA. */
function buildUserHtml(b: Body): string {
  const firstName = (b.name ?? "").trim().split(/\s+/)[0] || "there";
  const contactUrl = `${site.url}/contact`;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#f4f1ef;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ef;padding:28px 12px;font-family:${font};"><tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #efe6e4;">
    <tr><td style="background:#e00400;padding:22px 26px;">
      <table role="presentation" width="100%"><tr>
        <td style="font-size:17px;font-weight:700;color:#ffffff;">${esc(site.name)}</td>
        <td align="right" style="font-size:12px;color:rgba(255,255,255,0.9);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Your CRS score</td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:26px 26px 6px;">
      <h1 style="margin:0 0 8px;font-size:20px;color:#32373c;">Hi ${esc(firstName)}, here's your CRS estimate</h1>
      <p style="margin:0;font-size:13.5px;color:#6b7280;line-height:1.65;">Thanks for using our Express Entry CRS calculator. Here's your estimated score and how it breaks down. It's based on the current public CRS grid, the real next step is a review with our regulated consultant to confirm it and find ways to raise it.</p>
    </td></tr>
    <tr><td style="padding:16px 26px 0;">${scoreCard(b.score ?? {})}</td></tr>
    <tr><td style="padding:22px 26px 4px;">
      <div style="background:#32373c;border-radius:14px;padding:22px 22px 24px;text-align:center;">
        <div style="font-size:16px;font-weight:700;color:#ffffff;">Want to raise this score?</div>
        <p style="margin:8px 0 16px;font-size:13px;color:#cfd3d6;line-height:1.6;">A licensed RCIC (#R706497) can confirm your real CRS, spot the points you're leaving on the table, and map your route, honestly, with no guarantees about outcomes only IRCC decides.</p>
        <a href="${contactUrl}" style="display:inline-block;background:#e00400;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 26px;border-radius:10px;">Book a consultation</a>
      </div>
    </td></tr>
    <tr><td style="padding:20px 26px 26px;">
      <hr style="border:none;border-top:1px solid #f0e6e4;margin:0 0 12px;">
      <p style="margin:0;font-size:11.5px;color:${muted};line-height:1.65;">This is an estimate from the public CRS grid, not an official IRCC score, and it isn't legal advice. ${esc(site.name)} is a CICC-regulated immigration consultancy and is not affiliated with the Government of Canada. Program details last verified ${esc(POLICY.lastVerified)}. You received this because you used the CRS calculator at <a href="${site.url}/tools/crs-calculator" style="color:#e00400;text-decoration:none;">wildmountainimmigration.com</a>.</p>
    </td></tr>
  </table>
</td></tr></table></body></html>`;
}

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
    console.error("[crs-lead] Turnstile verify failed", err);
    return false;
  }
}

function scoreText(s: Score): string[] {
  const bd = s.breakdown ?? {};
  return [
    `Estimated CRS score: ${s.total ?? 0} / 1200 (${band(s.total ?? 0)})`,
    `  Core human capital: ${s.core ?? 0}`,
    `  Spouse factors: ${s.spouse ?? 0}`,
    `  Skill transferability: ${s.transfer ?? 0}`,
    `  Additional points: ${s.additional ?? 0}`,
    `  (Age ${bd.age ?? 0}, Education ${bd.edu ?? 0}, First language ${bd.lang1 ?? 0}, Second language ${bd.lang2 ?? 0}, Canadian experience ${bd.canExp ?? 0})`,
  ];
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
  if (!(await turnstileOk((body.turnstileToken ?? "").trim(), request))) {
    return Response.json({ ok: false, error: "Verification failed. Please refresh and try again." }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[crs-lead] RESEND_API_KEY is not set");
    // Don't block the user's score reveal if email isn't configured yet.
    return Response.json({ ok: true, warning: "not-configured" });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Wild Mountain Immigration <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  // 1) Internal lead notification to the business.
  const internalText = [
    `Name: ${name || "(not given)"}`,
    `Email: ${email}`,
    "",
    ...scoreText(body.score ?? {}),
    ...(body.answers?.length ? ["", "Answers:", ...body.answers.map((qa) => `  ${qa.q}: ${qa.a}`)] : []),
  ];
  try {
    const { error } = await resend.emails.send({
      from, to, replyTo: email,
      subject: `CRS score: ${name} (${body.score?.total ?? 0})`,
      text: internalText.join("\n"),
      html: buildHtml(body),
    });
    if (error) console.error("[crs-lead] Resend error (internal):", error.message);
  } catch (err) {
    console.error("[crs-lead] Resend threw (internal):", err instanceof Error ? err.message : err);
  }

  // 2) Results email to the user. Replies go to the business inbox.
  const userText = [
    `Hi ${name.split(/\s+/)[0] || "there"},`,
    "",
    "Thanks for using our Express Entry CRS calculator. Here's your estimated score and breakdown. It's an estimate from the public CRS grid, not an official decision.",
    "",
    ...scoreText(body.score ?? {}),
    "",
    `Want to raise this score? Book a consultation: ${site.url}/contact`,
    "",
    `${site.name} - CICC-regulated RCIC (#R706497). Not affiliated with the Government of Canada. Details last verified ${POLICY.lastVerified}.`,
  ];
  try {
    const { error } = await resend.emails.send({
      from, to: email, replyTo: to,
      subject: "Your Express Entry CRS score",
      text: userText.join("\n"),
      html: buildUserHtml(body),
    });
    if (error) console.error("[crs-lead] Resend error (user):", error.message);
  } catch (err) {
    console.error("[crs-lead] Resend threw (user):", err instanceof Error ? err.message : err);
  }

  return Response.json({ ok: true });
}
