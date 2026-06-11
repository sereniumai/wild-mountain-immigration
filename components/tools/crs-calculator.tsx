"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { RotateCcw, Info, Lock, Sparkles, Send, X, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Cloudflare Turnstile site key (public). When unset, the widget is hidden and
// the gate still works, so it's safe to ship before keys are configured.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/* ----------------------------------------------------------------------------
   CRS scoring grids, current official IRCC grid (~2026), per CALCULATOR-DATA.md.
   Job-offer points removed (Mar 25 2025). Values are [withSpouse, withoutSpouse].
   The calculator starts empty (nothing selected, score 0) and updates as the
   user answers each question.
---------------------------------------------------------------------------- */

type Pair = [number, number]; // [withSpouse, withoutSpouse]
const pick = (p: Pair, spouse: boolean) => (spouse ? p[0] : p[1]);
const PH = { v: "", l: "Select…" };

function agePoints(age: number): Pair {
  if (age < 18) return [0, 0];
  if (age === 18) return [90, 99];
  if (age === 19) return [95, 105];
  if (age >= 20 && age <= 29) return [100, 110];
  const map: Record<number, Pair> = {
    30: [95, 105], 31: [90, 99], 32: [85, 94], 33: [80, 88], 34: [75, 83],
    35: [70, 77], 36: [65, 72], 37: [60, 66], 38: [55, 61], 39: [50, 55],
    40: [45, 50], 41: [35, 39], 42: [25, 28], 43: [15, 17], 44: [5, 6],
  };
  if (age >= 45) return [0, 0];
  return map[age] ?? [0, 0];
}

const EDU: Record<string, Pair> = {
  none: [0, 0], secondary: [28, 30], "one-year": [84, 90], "two-year": [91, 98],
  bachelor: [112, 120], "two-or-more": [119, 128], master: [126, 135], phd: [140, 150],
};
const EDU_LABELS: [string, string][] = [
  ["none", "Less than secondary"], ["secondary", "Secondary (high school)"],
  ["one-year", "1-year post-secondary"], ["two-year", "2-year post-secondary"],
  ["bachelor", "Bachelor's / 3-year+"], ["two-or-more", "Two or more credentials"],
  ["master", "Master's / professional"], ["phd", "Doctoral (PhD)"],
];

// First official language, points PER ABILITY (×4): index by CLB
function firstLangAbility(clb: number): Pair {
  if (clb <= 3) return [0, 0];
  if (clb === 4 || clb === 5) return [6, 6];
  if (clb === 6) return [8, 9];
  if (clb === 7) return [16, 17];
  if (clb === 8) return [22, 23];
  if (clb === 9) return [29, 31];
  return [32, 34]; // 10+
}
// Second official language per ability (×4), cap 22/24
function secondLangAbility(clb: number): number {
  if (clb <= 4) return 0;
  if (clb <= 6) return 1;
  if (clb <= 8) return 3;
  return 6;
}

const CAN_EXP: Record<string, Pair> = {
  "0": [0, 0], "1": [35, 40], "2": [46, 53], "3": [56, 64], "4": [63, 72], "5": [70, 80],
};

// Spouse factors
const SP_EDU: Record<string, number> = { none: 0, secondary: 2, "one-year": 6, "two-year": 7, bachelor: 8, "two-or-more": 9, master: 10, phd: 10 };
function spouseLangAbility(clb: number): number { if (clb <= 4) return 0; if (clb <= 6) return 1; if (clb <= 8) return 3; return 5; }
const SP_EXP: Record<string, number> = { "0": 0, "1": 5, "2": 7, "3": 8, "4": 9, "5": 10 };

const CLB_OPTIONS = [
  { v: 3, l: "CLB 3 or lower" }, { v: 4, l: "CLB 4" }, { v: 5, l: "CLB 5" },
  { v: 6, l: "CLB 6" }, { v: 7, l: "CLB 7" }, { v: 8, l: "CLB 8" },
  { v: 9, l: "CLB 9" }, { v: 10, l: "CLB 10+" },
];
// 0 represents "not selected" for the per-ability CLB dropdowns.
const CLB_FIELD_OPTIONS = [{ v: 0, l: "Select…" }, ...CLB_OPTIONS];

type State = {
  marital: string; // "" | "single" | "spouse"
  age: number | ""; // "" = not selected
  edu: string;
  l1: { listen: number; speak: number; read: number; write: number }; // 0 = not selected
  secondLang: number; // 0 = none
  canExp: string;
  foreignExp: string;
  certificate: string; // "" | "0" | "1"
  spEdu: string; spLang: number; spExp: string;
  nomination: string; siblingInCanada: string; // "" | "0" | "1"
  frenchBonus: "" | "none" | "nclc7-low-eng" | "nclc7-eng5"; canStudy: "" | "none" | "1-2" | "3+";
};

const initial: State = {
  marital: "", age: "", edu: "",
  l1: { listen: 0, speak: 0, read: 0, write: 0 }, secondLang: 0,
  canExp: "", foreignExp: "", certificate: "",
  spEdu: "", spLang: 0, spExp: "",
  nomination: "", siblingInCanada: "", frenchBonus: "", canStudy: "",
};

function compute(s: State) {
  const spouse = s.marital === "spouse";

  // ---- Core human capital
  const age = s.age === "" ? 0 : pick(agePoints(Number(s.age)), spouse);
  const edu = pick(EDU[s.edu] ?? [0, 0], spouse);

  const abilities = [s.l1.listen, s.l1.speak, s.l1.read, s.l1.write];
  const minCLB = Math.min(...abilities);
  let lang1 = abilities.reduce((sum, clb) => sum + pick(firstLangAbility(clb), spouse), 0);
  const lang1Cap = spouse ? 128 : 136;
  lang1 = Math.min(lang1, lang1Cap);

  let lang2 = 0;
  if (s.secondLang > 0) lang2 = Math.min(secondLangAbility(s.secondLang) * 4, spouse ? 22 : 24);

  const canExp = pick(CAN_EXP[s.canExp] ?? [0, 0], spouse);
  const core = age + edu + lang1 + lang2 + canExp;

  // ---- Spouse factors (max 40)
  let spousePts = 0;
  if (spouse) {
    spousePts = Math.min(SP_EDU[s.spEdu] ?? 0, 10) + Math.min(spouseLangAbility(s.spLang) * 4, 20) + (SP_EXP[s.spExp] ?? 0);
  }

  // ---- Skill transferability (max 100)
  const allMin = minCLB;
  const hasOnePostSec = ["one-year", "two-year", "bachelor"].includes(s.edu);
  const hasTwoOrHigher = ["two-or-more", "master", "phd"].includes(s.edu);
  const canYears = parseInt(s.canExp, 10) || 0;

  // A) education + language (max 50)
  let eduLang = 0;
  if (hasOnePostSec) eduLang = allMin >= 9 ? 25 : allMin >= 7 ? 13 : 0;
  else if (hasTwoOrHigher) eduLang = allMin >= 9 ? 50 : allMin >= 7 ? 25 : 0;
  // B) education + Canadian experience (max 50)
  let eduCan = 0;
  if (hasOnePostSec) eduCan = canYears >= 2 ? 25 : canYears >= 1 ? 13 : 0;
  else if (hasTwoOrHigher) eduCan = canYears >= 2 ? 50 : canYears >= 1 ? 25 : 0;
  const eduTransfer = Math.min(eduLang + eduCan, 50);

  // C) foreign experience + language (max 50)
  const fe = s.foreignExp; // "0","1-2","3"
  let feLang = 0;
  if (fe === "1-2") feLang = allMin >= 9 ? 25 : allMin >= 7 ? 13 : 0;
  else if (fe === "3") feLang = allMin >= 9 ? 50 : allMin >= 7 ? 25 : 0;
  // D) foreign experience + Canadian experience (max 50)
  let feCan = 0;
  if (fe === "1-2") feCan = canYears >= 2 ? 25 : canYears >= 1 ? 13 : 0;
  else if (fe === "3") feCan = canYears >= 2 ? 50 : canYears >= 1 ? 25 : 0;
  const feTransfer = Math.min(feLang + feCan, 50);

  // E) certificate of qualification + language (max 50)
  let cert = 0;
  if (s.certificate === "1") cert = allMin >= 7 ? 50 : allMin >= 5 ? 25 : 0;

  const transfer = Math.min(eduTransfer + feTransfer + cert, 100);

  // ---- Additional (max 600)
  let additional = 0;
  if (s.nomination === "1") additional += 600;
  if (s.siblingInCanada === "1") additional += 15;
  if (s.frenchBonus === "nclc7-low-eng") additional += 25;
  else if (s.frenchBonus === "nclc7-eng5") additional += 50;
  if (s.canStudy === "1-2") additional += 15;
  else if (s.canStudy === "3+") additional += 30;
  additional = Math.min(additional, 600);

  const total = core + spousePts + transfer + additional;
  return {
    total, core, spouse: spousePts, transfer, additional,
    breakdown: { age, edu, lang1, lang2, canExp },
  };
}

/* ----------------------------------------------------------------------- UI */

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      {hint && <span className="block truncate text-xs text-ink-faint">{hint}</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const selectCls =
  "w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink shadow-soft outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15";

function Sel({ value, onChange, options }: { value: string | number; onChange: (v: string) => void; options: { v: string | number; l: string }[] }) {
  return (
    <select className={selectCls} value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
    </select>
  );
}

/** A titled white card. The heading sits cleanly inside the border, above a
 *  divider, so each group of questions reads as one balanced block. */
function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-7">
      <div className="flex items-center gap-2.5 border-b border-line-soft pb-4">
        <span className="h-5 w-1.5 rounded-full bg-brand" />
        <h3 className="font-heading text-base font-semibold tracking-tight text-ink">{title}</h3>
      </div>
      {desc && <p className="mt-4 text-xs leading-relaxed text-ink-faint">{desc}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function clbField(label: string, value: number, onChange: (v: number) => void) {
  return (
    <Field label={label} hint="From your language test">
      <Sel value={value} onChange={(v) => onChange(Number(v))} options={CLB_FIELD_OPTIONS} />
    </Field>
  );
}

/** Human-readable answers for the lead email (skips anything left unselected). */
function summarize(s: State): { q: string; a: string }[] {
  const out: { q: string; a: string }[] = [];
  const push = (q: string, a: string) => { if (a) out.push({ q, a }); };
  const eduLabel = (v: string) => EDU_LABELS.find(([val]) => val === v)?.[1] ?? "";
  const yn = (v: string) => (v === "1" ? "Yes" : v === "0" ? "No" : "");
  const years = (v: string) => (v === "" ? "" : v === "0" ? "None" : v === "5" ? "5+ years" : `${v} year${v === "1" ? "" : "s"}`);

  push("Marital status", s.marital === "single" ? "Single / spouse is PR or citizen" : s.marital === "spouse" ? "Married / common-law (spouse coming)" : "");
  push("Age", s.age === "" ? "" : Number(s.age) >= 45 ? "45 or older" : String(s.age));
  push("Highest education", eduLabel(s.edu));
  push("Skilled work experience in Canada", years(s.canExp));
  push("Skilled work experience abroad", s.foreignExp === "" ? "" : s.foreignExp === "0" ? "None" : s.foreignExp === "1-2" ? "1–2 years" : "3+ years");
  push("Certificate of qualification (trades)", yn(s.certificate));

  const { listen, speak, read, write } = s.l1;
  if (listen || speak || read || write) push("First language (CLB L/S/R/W)", `${listen || "–"} / ${speak || "–"} / ${read || "–"} / ${write || "–"}`);
  const second: Record<number, string> = { 5: "CLB 5–6", 7: "CLB 7–8", 9: "CLB 9+" };
  if (s.secondLang) push("Second official language", second[s.secondLang] ?? "");

  if (s.marital === "spouse") {
    push("Spouse education", eduLabel(s.spEdu));
    if (s.spLang) push("Spouse language (lowest CLB)", `CLB ${s.spLang}`);
    push("Spouse Canadian work experience", years(s.spExp));
  }

  push("Provincial nomination (PNP)", s.nomination === "1" ? "Yes, enhanced nomination" : s.nomination === "0" ? "No" : "");
  push("Sibling in Canada (citizen/PR)", yn(s.siblingInCanada));
  push("Canadian post-secondary study", s.canStudy === "none" ? "None" : s.canStudy === "1-2" ? "1–2 year credential" : s.canStudy === "3+" ? "3-year+ / master's" : "");
  push("French proficiency bonus", s.frenchBonus === "none" ? "None" : s.frenchBonus === "nclc7-low-eng" ? "NCLC 7+ French, low English (+25)" : s.frenchBonus === "nclc7-eng5" ? "NCLC 7+ French & CLB 5+ English (+50)" : "");

  return out;
}

export function CrsCalculator() {
  const [s, setS] = useState<State>(initial);
  const r = useMemo(() => compute(s), [s]);
  const set = <K extends keyof State>(k: K, v: State[K]) => setS((p) => ({ ...p, [k]: v }));

  // The score stays blurred until the person submits their details (the gate).
  const [revealed, setRevealed] = useState(false);
  const [showGate, setShowGate] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  // Close the gate modal on Escape.
  useEffect(() => {
    if (!showGate) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setShowGate(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showGate]);

  async function submitGate(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (!name.trim() || !EMAIL_RE.test(email.trim()) || !consent) {
      setError("Please add your name, a valid email, and agree to be contacted.");
      return;
    }
    if (TURNSTILE_SITE_KEY && !token) {
      setError("Please complete the human verification below.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/crs-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(), email: email.trim(), consent, company,
          turnstileToken: token,
          score: { total: r.total, core: r.core, spouse: r.spouse, transfer: r.transfer, additional: r.additional, breakdown: r.breakdown },
          answers: summarize(s),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setRevealed(true);
      setShowGate(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      turnstileRef.current?.reset();
      setToken("");
    } finally {
      setSubmitting(false);
    }
  }

  const verdict =
    r.total === 0 ? { t: "Answer the questions", c: "text-ink-soft", note: "Select your details above and your estimated CRS score appears here instantly." }
    : r.total >= 520 ? { t: "Very competitive", c: "text-brand", note: "Strong for most 2026 draws, including CEC rounds." }
    : r.total >= 480 ? { t: "Competitive", c: "text-brand", note: "In range for category-based draws; a nomination would secure it." }
    : r.total >= 400 ? { t: "Below recent general cut-offs", c: "text-brand", note: "A provincial nomination (+600) or a category draw is your best route." }
    : { t: "Needs a boost", c: "text-brand", note: "Focus on language, a nomination, or a PNP. Let's map a plan." };

  return (
    <div className="rounded-[1.75rem] border border-brand/15 bg-blush p-4 shadow-soft sm:p-6 lg:p-7">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      {/* form */}
      <div className="min-w-0 space-y-6">
        {/* marital + age + education */}
        <Section title="About you">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Marital status" hint="Changes how points are scored">
              <Sel value={s.marital} onChange={(v) => set("marital", v)}
                options={[PH, { v: "single", l: "Single / spouse is PR or citizen" }, { v: "spouse", l: "Married / common-law (spouse coming)" }]} />
            </Field>
            <Field label="Age" hint="Your age at the time of invitation">
              <Sel value={s.age} onChange={(v) => set("age", v === "" ? "" : Number(v))}
                options={[PH, ...Array.from({ length: 32 }, (_, i) => i + 17).map((a) => ({ v: a, l: a >= 45 ? "45 or older" : `${a}` }))]} />
            </Field>
            <Field label="Highest education" hint="Your highest completed credential">
              <Sel value={s.edu} onChange={(v) => set("edu", v)} options={[PH, ...EDU_LABELS.map(([v, l]) => ({ v, l }))]} />
            </Field>
            <Field label="Skilled work experience in Canada" hint="Skilled (TEER 0–3) work here">
              <Sel value={s.canExp} onChange={(v) => set("canExp", v)}
                options={[PH, { v: "0", l: "None" }, { v: "1", l: "1 year" }, { v: "2", l: "2 years" }, { v: "3", l: "3 years" }, { v: "4", l: "4 years" }, { v: "5", l: "5+ years" }]} />
            </Field>
            <Field label="Skilled work experience abroad" hint="Skilled work outside Canada">
              <Sel value={s.foreignExp} onChange={(v) => set("foreignExp", v)}
                options={[PH, { v: "0", l: "None" }, { v: "1-2", l: "1–2 years" }, { v: "3", l: "3+ years" }]} />
            </Field>
            <Field label="Certificate of qualification (trades)" hint="Provincial trade certificate">
              <Sel value={s.certificate} onChange={(v) => set("certificate", v)}
                options={[PH, { v: "0", l: "No" }, { v: "1", l: "Yes (provincial trade certificate)" }]} />
            </Field>
          </div>
        </Section>

        {/* language */}
        <Section title="First official language (CLB per ability)" desc="Convert your IELTS/CELPIP/TEF result to CLB. Your lowest ability drives skill-transferability points.">
          <div className="grid gap-4 sm:grid-cols-2">
            {clbField("Listening", s.l1.listen, (v) => set("l1", { ...s.l1, listen: v }))}
            {clbField("Speaking", s.l1.speak, (v) => set("l1", { ...s.l1, speak: v }))}
            {clbField("Reading", s.l1.read, (v) => set("l1", { ...s.l1, read: v }))}
            {clbField("Writing", s.l1.write, (v) => set("l1", { ...s.l1, write: v }))}
          </div>
          <div className="mt-4">
            <Field label="Second official language" hint="Optional, French if your first is English, or vice-versa">
              <Sel value={s.secondLang} onChange={(v) => set("secondLang", Number(v))}
                options={[{ v: 0, l: "None / below CLB 5" }, { v: 5, l: "CLB 5–6" }, { v: 7, l: "CLB 7–8" }, { v: 9, l: "CLB 9+" }]} />
            </Field>
          </div>
        </Section>

        {/* spouse */}
        {s.marital === "spouse" && (
          <Section title="Your spouse / partner">
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Education" hint="Their highest credential">
                <Sel value={s.spEdu} onChange={(v) => set("spEdu", v)} options={[PH, ...EDU_LABELS.map(([v, l]) => ({ v, l }))]} />
              </Field>
              <Field label="Language (lowest CLB)" hint="Their lowest ability band">
                <Sel value={s.spLang} onChange={(v) => set("spLang", Number(v))} options={CLB_FIELD_OPTIONS} />
              </Field>
              <Field label="Canadian work experience" hint="Their skilled work in Canada">
                <Sel value={s.spExp} onChange={(v) => set("spExp", v)}
                  options={[PH, { v: "0", l: "None" }, { v: "1", l: "1 year" }, { v: "2", l: "2 years" }, { v: "3", l: "3 years" }, { v: "4", l: "4 years" }, { v: "5", l: "5+ years" }]} />
              </Field>
            </div>
          </Section>
        )}

        {/* additional */}
        <Section title="Additional points">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Provincial nomination (PNP)" hint="Adds 600 points">
              <Sel value={s.nomination} onChange={(v) => set("nomination", v)}
                options={[PH, { v: "0", l: "No" }, { v: "1", l: "Yes, enhanced nomination" }]} />
            </Field>
            <Field label="Sibling in Canada (citizen/PR)" hint="Adds 15 points">
              <Sel value={s.siblingInCanada} onChange={(v) => set("siblingInCanada", v)}
                options={[PH, { v: "0", l: "No" }, { v: "1", l: "Yes" }]} />
            </Field>
            <Field label="Canadian post-secondary study" hint="A credential earned in Canada">
              <Sel value={s.canStudy} onChange={(v) => set("canStudy", v as State["canStudy"])}
                options={[PH, { v: "none", l: "None" }, { v: "1-2", l: "1–2 year credential" }, { v: "3+", l: "3-year+ / master's" }]} />
            </Field>
            <Field label="French proficiency bonus" hint="Strong French adds points">
              <Sel value={s.frenchBonus} onChange={(v) => set("frenchBonus", v as State["frenchBonus"])}
                options={[PH, { v: "none", l: "None" }, { v: "nclc7-low-eng", l: "NCLC 7+ French, low English (+25)" }, { v: "nclc7-eng5", l: "NCLC 7+ French & CLB 5+ English (+50)" }]} />
            </Field>
          </div>
        </Section>

        <button onClick={() => setS(initial)} className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-brand">
          <RotateCcw className="size-4" /> Reset
        </button>
      </div>

      {/* result */}
      <div className="min-w-0 lg:sticky lg:top-28">
        <div className="overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-window">
          <div className="border-b border-line bg-blush p-6 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-soft">Your estimated CRS score</p>
            <p
              className={`mt-2 font-heading text-6xl font-semibold tracking-tight transition ${
                revealed ? (r.total === 0 ? "text-ink-faint/45" : "text-brand") : "select-none text-brand blur-[9px]"
              }`}
              aria-hidden={!revealed}
            >
              {r.total}
            </p>
            <p className="text-xs text-ink-faint">out of 1,200</p>
            {revealed ? (
              <p className={`mt-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-soft ${verdict.c}`}>{verdict.t}</p>
            ) : (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-semibold text-ink-soft shadow-soft">
                <Lock className="size-3.5" /> Calculated at the end
              </p>
            )}
          </div>
          <div className="p-5">
            {revealed ? (
              <>
                <p className="text-[13px] leading-relaxed text-ink-soft">{verdict.note}</p>
                <dl className="mt-4 space-y-1.5 text-[13.5px]">
                  {[["Core human capital", r.core], ["Spouse factors", r.spouse], ["Skill transferability", r.transfer], ["Additional points", r.additional]].map(([k, v]) => (
                    <div key={k as string} className="flex justify-between border-b border-line-soft py-1.5">
                      <dt className="text-ink-soft">{k}</dt><dd className="font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 flex items-start gap-1.5 rounded-lg bg-brand-tint/60 px-3 py-2 text-[12.5px] leading-relaxed text-ink-soft">
                  <BadgeCheck className="mt-0.5 size-3.5 shrink-0 text-brand" /> We&apos;ve emailed this breakdown to {email}.
                </p>
                <a href="/contact" className="mt-4 flex w-full items-center justify-center rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-5 py-3 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5">
                  Get an expert review of my profile
                </a>
              </>
            ) : (
              <>
                <p className="text-[13px] leading-relaxed text-ink-soft">Your score updates as you answer. Add your details to reveal your final number and full breakdown, emailed to you and our team.</p>
                <dl className="mt-4 select-none space-y-1.5 text-[13.5px] blur-[5px]" aria-hidden>
                  {[["Core human capital", r.core], ["Spouse factors", r.spouse], ["Skill transferability", r.transfer], ["Additional points", r.additional]].map(([k, v]) => (
                    <div key={k as string} className="flex justify-between border-b border-line-soft py-1.5">
                      <dt className="text-ink-soft">{k}</dt><dd className="font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <button
                  type="button"
                  onClick={() => { setShowGate(true); setError(""); }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-5 py-3 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5"
                >
                  <Lock className="size-4" /> Reveal my CRS score
                </button>
              </>
            )}
            <p className="mt-3 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-faint">
              <Info className="mt-0.5 size-3.5 shrink-0" />
              Estimate only, based on the current public CRS grid. Your official score is calculated by IRCC. An RCIC review confirms it before you submit.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* gate: collect contact details, then reveal the score and email the breakdown */}
      <AnimatePresence>
        {showGate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}
          >
            <button type="button" aria-label="Close" onClick={() => setShowGate(false)} className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />
            <motion.div
              role="dialog" aria-modal="true"
              initial={{ opacity: 0, scale: 0.96, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-window sm:p-7"
            >
              <button type="button" onClick={() => setShowGate(false)} aria-label="Close" className="absolute right-4 top-4 text-ink-faint transition-colors hover:text-ink">
                <X className="size-5" />
              </button>
              <form onSubmit={submitGate}>
                <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden value={company} onChange={(e) => setCompany(e.target.value)} className="hidden" />
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                  <Sparkles className="size-6" />
                </span>
                <h3 className="mt-4 font-heading text-[1.4rem] font-semibold tracking-[-0.02em] text-ink">Your CRS score is ready</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">Add your details to reveal your final score and full breakdown. We&apos;ll email a copy to you and our team so we can help you raise it.</p>

                <div className="mt-5 space-y-4">
                  <label className="block">
                    <span className="block text-sm font-medium text-ink">Full name <span className="text-brand">*</span></span>
                    <input autoFocus value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" placeholder="John Smith"
                      className="mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-ink shadow-soft outline-none transition-colors placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/15" />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-ink">Email address <span className="text-brand">*</span></span>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required autoComplete="email" inputMode="email" placeholder="you@email.com"
                      className="mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-ink shadow-soft outline-none transition-colors placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/15" />
                  </label>
                  <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-soft">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-0.5 size-4 shrink-0 rounded border-line accent-brand" />
                    <span>I agree that Wild Mountain Immigration may contact me about my enquiry, and to the{" "}
                      <a href="/privacy-policy" className="font-medium text-brand hover:underline">Privacy Policy</a> and{" "}
                      <a href="/terms" className="font-medium text-brand hover:underline">Terms</a>.</span>
                  </label>

                  {TURNSTILE_SITE_KEY && (
                    <Turnstile ref={turnstileRef} siteKey={TURNSTILE_SITE_KEY} onSuccess={setToken} onExpire={() => setToken("")} onError={() => setToken("")} options={{ theme: "light", size: "flexible" }} />
                  )}

                  {error && <p role="alert" className="rounded-lg bg-brand-soft/60 px-3.5 py-2.5 text-[13px] font-medium text-brand ring-1 ring-inset ring-brand/15">{error}</p>}

                  <button type="submit" disabled={submitting || (!!TURNSTILE_SITE_KEY && !token)}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-6 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0">
                    {submitting ? (<><span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden /> Revealing…</>) : (<><Send className="size-4" /> Reveal my score</>)}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
