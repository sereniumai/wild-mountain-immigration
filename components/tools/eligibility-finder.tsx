"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, RotateCcw, Check, Sparkles, Info, ShieldAlert,
  Compass, Briefcase, Heart, Building2, GraduationCap, Send, BadgeCheck,
} from "lucide-react";
import {
  PATHS, PATH_BY_ID, visibleFields, val, arr,
  type PathId, type Field, type Answers,
} from "@/lib/eligibility/config";
import { evaluate, type EvalResult, type Tier } from "@/lib/eligibility/engine";

const EASE = [0.16, 1, 0.3, 1] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PATH_ICON: Record<PathId, typeof Compass> = {
  immigrate: Compass, work: Briefcase, sponsor: Heart, business: Building2, study: GraduationCap,
};

type Stage = "pick" | "quiz" | "contact" | "results";

export function EligibilityFinder() {
  const [stage, setStage] = useState<Stage>("pick");
  const [pathId, setPathId] = useState<PathId | null>(null);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState(""); // honeypot
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [partialSent, setPartialSent] = useState(false);
  const [result, setResult] = useState<EvalResult | null>(null);
  const partialTimer = useRef<number | null>(null);

  const path = pathId ? PATH_BY_ID[pathId] : null;
  const sections = path?.sections ?? [];
  const section = sections[sectionIdx];

  // progress across quiz sections (+ contact + results)
  const totalSteps = sections.length + 1; // sections + contact
  const stepNow = stage === "pick" ? 0 : stage === "quiz" ? sectionIdx + 1 : stage === "contact" ? sections.length + 1 : totalSteps;
  const progress = stage === "results" ? 100 : Math.round((stepNow / (totalSteps + 1)) * 100);

  function choosePath(id: PathId) {
    setPathId(id);
    setAnswers({});
    setSectionIdx(0);
    setStage("quiz");
  }

  function setField(f: Field, value: string) {
    setAnswers((prev) => {
      if (f.type === "multi") {
        const cur = Array.isArray(prev[f.id]) ? (prev[f.id] as string[]) : [];
        const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
        return { ...prev, [f.id]: next };
      }
      return { ...prev, [f.id]: value };
    });
  }

  function sectionComplete(): boolean {
    if (!section) return false;
    return visibleFields(section, answers).every((f) => {
      if (f.optional || f.type === "multi") return true;
      return Boolean(val(answers, f.id));
    });
  }

  // Some sections are conditional (e.g. the parent-income section only applies to
  // parent/grandparent sponsorship). Skip any section with no visible questions.
  function nextSection() {
    if (!sectionComplete()) { setError("Please answer the questions to continue."); return; }
    setError("");
    let i = sectionIdx + 1;
    while (i < sections.length && visibleFields(sections[i], answers).length === 0) i++;
    if (i < sections.length) setSectionIdx(i);
    else setStage("contact");
  }
  function prevSection() {
    setError("");
    let i = sectionIdx - 1;
    while (i >= 0 && visibleFields(sections[i], answers).length === 0) i--;
    if (i >= 0) setSectionIdx(i);
    else { setStage("pick"); setPathId(null); }
  }

  // Human-readable answers for the lead email.
  const qaPairs = useMemo(() => {
    if (!path) return [];
    const out: { q: string; a: string }[] = [];
    for (const sec of path.sections) {
      for (const f of visibleFields(sec, answers)) {
        const labelFor = (v: string) => f.options.find((o) => o.value === v)?.label ?? v;
        if (f.type === "multi") {
          const vals = arr(answers, f.id);
          if (vals.length) out.push({ q: f.label, a: vals.map(labelFor).join(", ") });
        } else {
          const v = val(answers, f.id);
          if (v) out.push({ q: f.label, a: labelFor(v) });
        }
      }
    }
    return out;
  }, [path, answers]);

  async function ping(stageName: "partial" | "complete", res?: EvalResult) {
    try {
      await fetch("/api/eligibility-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stage: stageName,
          path: path?.label,
          name, email, phone, consent, company,
          answers: stageName === "complete" ? qaPairs : undefined,
          results: res ? { headline: res.headline, groups: res.groups, flags: res.flags, provinceNote: res.provinceNote } : undefined,
        }),
      });
    } catch { /* background, non-blocking */ }
  }

  function onEmailBlur() {
    // Capture abandoners: if they enter a valid email but don't submit within a
    // few seconds, send a "started" lead. Completing cancels this (see submit).
    if (partialSent || !EMAIL_RE.test(email.trim())) return;
    if (partialTimer.current) window.clearTimeout(partialTimer.current);
    partialTimer.current = window.setTimeout(() => {
      setPartialSent(true);
      void ping("partial");
    }, 5000);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (partialTimer.current) window.clearTimeout(partialTimer.current); // they finished, no "started" email
    if (!name.trim() || !EMAIL_RE.test(email.trim()) || !consent) {
      setError("Please add your name, a valid email, and agree to be contacted.");
      return;
    }
    setError("");
    setSubmitting(true);
    const res = evaluate(pathId!, answers);
    setResult(res);
    void ping("complete", res);
    setStage("results");
    setSubmitting(false);
  }

  function restart() {
    if (partialTimer.current) window.clearTimeout(partialTimer.current);
    setStage("pick"); setPathId(null); setSectionIdx(0); setAnswers({});
    setName(""); setEmail(""); setPhone(""); setConsent(false);
    setPartialSent(false); setResult(null); setError("");
  }

  return (
    <div className="rounded-[1.75rem] border border-brand/15 bg-blush p-4 shadow-soft sm:p-6 lg:p-8">
      {/* progress */}
      {stage !== "pick" && (
        <div className="mb-6 flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
            <motion.div className="h-full rounded-full bg-brand" animate={{ width: `${Math.max(progress, 5)}%` }} transition={{ duration: 0.4, ease: EASE }} />
          </div>
          <span className="shrink-0 text-xs font-semibold text-ink-soft">
            {stage === "results" ? "Your results" : stage === "contact" ? "Last step" : `Step ${stepNow} of ${totalSteps}`}
          </span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* ----------------------------------------------------- PICK A PATH */}
        {stage === "pick" && (
          <motion.div key="pick" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: EASE }}>
            <h2 className="font-heading text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[2rem]">What would you like to do in Canada?</h2>
            <p className="mt-2 text-[15px] text-ink-soft">Pick the closest fit. We&apos;ll ask a few questions, then show the routes you may qualify for.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {PATHS.map((p) => {
                const Icon = PATH_ICON[p.id];
                return (
                  <button key={p.id} type="button" onClick={() => choosePath(p.id)}
                    className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-4 text-left shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-window focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15 transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-5.5" strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading text-[16px] font-semibold text-ink">{p.label}</span>
                      <span className="mt-0.5 block text-[13.5px] leading-relaxed text-ink-soft">{p.blurb}</span>
                    </span>
                    <ArrowRight className="ml-auto size-4 shrink-0 self-center text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
                  </button>
                );
              })}
            </div>
            <p className="mt-5 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-faint">
              <Info className="mt-0.5 size-3.5 shrink-0" />
              Free and confidential. This is an AI-assisted guide using current IRCC criteria, not an official decision. We don&apos;t cover Quebec-selected programs.
            </p>
          </motion.div>
        )}

        {/* ----------------------------------------------------- QUIZ */}
        {stage === "quiz" && section && (
          <motion.div key={`sec-${sectionIdx}`} initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -22 }} transition={{ duration: 0.3, ease: EASE }}>
            <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
              {path && (() => { const I = PATH_ICON[path.id]; return <I className="size-3.5" />; })()} {path?.label}
            </div>
            <h2 className="mt-2 font-heading text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.85rem]">{section.title}</h2>
            {section.intro && <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{section.intro}</p>}

            <div className="mt-6 space-y-7">
              {visibleFields(section, answers).map((f) => (
                <fieldset key={f.id}>
                  <legend className="text-[15px] font-medium text-ink">{f.label}</legend>
                  {f.help && <p className="mt-1 text-[13px] text-ink-soft">{f.help}</p>}
                  <div className={`mt-3 grid gap-2.5 ${f.options.length > 4 ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
                    {f.options.map((o) => {
                      const selected = f.type === "multi" ? arr(answers, f.id).includes(o.value) : val(answers, f.id) === o.value;
                      return (
                        <button key={o.value} type="button" onClick={() => setField(f, o.value)}
                          className={`group flex items-center gap-3 rounded-xl border bg-white px-3.5 py-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${selected ? "border-brand ring-2 ring-brand/20" : "border-line hover:border-brand/40"}`}>
                          <span className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors ${selected ? "border-brand bg-brand text-white" : "border-line bg-white text-transparent"}`}>
                            <Check className="size-3.5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[14.5px] font-medium text-ink">{o.label}</span>
                            {o.hint && <span className="block text-[12px] text-ink-faint">{o.hint}</span>}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>

            {error && <p role="alert" className="mt-5 rounded-lg bg-brand-soft/60 px-3.5 py-2.5 text-[13px] font-medium text-brand ring-1 ring-inset ring-brand/15">{error}</p>}

            <div className="mt-7 flex items-center justify-between">
              <button type="button" onClick={prevSection} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-brand">
                <ArrowLeft className="size-4" /> Back
              </button>
              <button type="button" onClick={nextSection}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-6 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5">
                {sectionIdx < sections.length - 1 ? "Next step" : "Almost done"} <ArrowRight className="size-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ----------------------------------------------------- CONTACT GATE */}
        {stage === "contact" && (
          <motion.form key="contact" onSubmit={submit} initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -22 }} transition={{ duration: 0.3, ease: EASE }}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden value={company} onChange={(e) => setCompany(e.target.value)} className="hidden" />
            <div className="mx-auto max-w-md text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
                <Sparkles className="size-6" />
              </span>
              <h2 className="mt-4 font-heading text-[1.6rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.95rem]">Where should we send your results?</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">Add your details to see the routes you may qualify for. We&apos;ll keep them private and only use them to help with your enquiry.</p>
            </div>

            <div className="mx-auto mt-6 max-w-md space-y-4">
              <label className="block">
                <span className="block text-sm font-medium text-ink">Full name <span className="text-brand">*</span></span>
                <input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" placeholder="John Smith"
                  className="mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-ink shadow-soft outline-none transition-colors placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/15" />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-ink">Email address <span className="text-brand">*</span></span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} onBlur={onEmailBlur} type="email" required autoComplete="email" inputMode="email" placeholder="you@email.com"
                  className="mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-ink shadow-soft outline-none transition-colors placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/15" />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-ink">Phone <span className="text-ink-faint">(optional)</span></span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" placeholder="+1 (___) ___-____"
                  className="mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-ink shadow-soft outline-none transition-colors placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/15" />
              </label>
              <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-soft">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-0.5 size-4 shrink-0 rounded border-line accent-brand" />
                <span>I agree that Wild Mountain Immigration may contact me about my enquiry, and to the{" "}
                  <a href="/privacy-policy" className="font-medium text-brand hover:underline">Privacy Policy</a> and{" "}
                  <a href="/terms" className="font-medium text-brand hover:underline">Terms</a>.</span>
              </label>

              {error && <p role="alert" className="rounded-lg bg-brand-soft/60 px-3.5 py-2.5 text-[13px] font-medium text-brand ring-1 ring-inset ring-brand/15">{error}</p>}

              <button type="submit" disabled={submitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-6 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5 disabled:opacity-70">
                <Send className="size-4" /> See my results
              </button>
              <button type="button" onClick={() => { setError(""); setStage("quiz"); }} className="mx-auto block text-[13px] font-medium text-ink-soft hover:text-brand">
                Back to questions
              </button>
            </div>
          </motion.form>
        )}

        {/* ----------------------------------------------------- RESULTS */}
        {stage === "results" && result && (
          <motion.div key="results" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
            <div className="rounded-2xl border border-brand/10 bg-white p-6 shadow-soft sm:p-7">
              <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
                <Sparkles className="size-3.5" /> Your pathway summary
              </div>
              <h2 className="mt-2 font-heading text-[1.5rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.95rem]">{result.headline}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{result.intro}</p>
            </div>

            {/* flags / important notes */}
            {result.flags.length > 0 && (
              <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-800"><ShieldAlert className="size-4" /> Important to know</div>
                <ul className="mt-2 space-y-1.5">
                  {result.flags.map((f, i) => <li key={i} className="text-[13.5px] leading-relaxed text-amber-900">{f}</li>)}
                </ul>
              </div>
            )}

            {/* groups */}
            <div className="mt-5 space-y-6">
              {result.groups.map((gr) => (
                <div key={gr.heading}>
                  <h3 className="text-sm font-semibold text-ink">{gr.heading}</h3>
                  <div className="mt-3 grid gap-3">
                    {gr.items.map((it) => (
                      <ResultCard key={it.key} title={it.title} tier={it.tier} why={it.why} href={it.href} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* province note */}
            {result.provinceNote && (
              <div className="mt-5 rounded-2xl border border-brand/15 bg-brand-tint/60 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink"><Compass className="size-4 text-brand" /> Provincial programs</div>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{result.provinceNote}</p>
              </div>
            )}

            {/* AI disclaimer + contact CTA */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-window sm:p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-brand/10 blur-3xl" aria-hidden />
              <div className="relative flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand"><Info className="size-3.5" /> One honest note</div>
              <h3 className="relative mt-2 font-heading text-xl font-semibold text-ink sm:text-2xl">This is an AI-assisted guide, not a decision</h3>
              <p className="relative mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                These results are an automated first read based on what you told us, so they aren&apos;t 100% and can miss details that change everything. The real next step is a proper review: a licensed RCIC (#R706497) will confirm which of these you genuinely qualify for, dig into the details, and map the steps, honestly, with no guarantees about outcomes only IRCC decides.
              </p>
              <div className="relative mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-6 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5">
                  Contact us for a proper review <ArrowRight className="size-4" />
                </Link>
                <button type="button" onClick={restart} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-[15px] font-medium text-ink-soft ring-1 ring-line transition-colors hover:bg-surface hover:text-brand">
                  <RotateCcw className="size-4" /> Start over
                </button>
              </div>
              <p className="relative mt-4 flex items-center gap-1.5 text-[12px] text-ink-faint">
                <BadgeCheck className="size-3.5 text-brand" /> CICC-regulated RCIC · not affiliated with the Government of Canada · Quebec programs not covered.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({ title, tier, why, href }: { title: string; tier: Tier; why: string; href?: string }) {
  const badge =
    tier === "strong" ? { cls: "bg-brand-tint text-brand", label: "Strong match", icon: true }
    : tier === "possible" ? { cls: "bg-brand-soft text-brand", label: "Worth exploring", icon: false }
    : { cls: "bg-surface-2 text-ink-soft", label: "Good to know", icon: false };
  const inner = (
    <>
      <span className={`mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badge.cls}`}>
        {badge.icon && <BadgeCheck className="size-3.5" />}{badge.label}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-[15.5px] font-semibold text-ink group-hover:text-brand">
          {title}
          {href && <ArrowRight className="size-4 shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100" />}
        </span>
        <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{why}</span>
      </span>
    </>
  );
  const cls = "group flex items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]";
  return href ? <Link href={href} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>;
}
