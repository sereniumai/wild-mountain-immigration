"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, RotateCcw, Check, Sparkles, Info,
  Compass, Briefcase, Heart, BadgeCheck,
} from "lucide-react";

/* ----------------------------------------------------------------------------
   Eligibility / pathway finder. A friendly questionnaire that maps a person's
   situation to the Canadian permanent-residence and work-permit routes they may
   qualify for. Honest, rule-based and in-scope only (no Quebec, no refugee/
   appeal matters). It is a guide, not a decision: a licensed RCIC confirms.
---------------------------------------------------------------------------- */

type Answers = {
  goal?: string;
  age?: string;
  education?: string;
  language?: string;
  experience?: string;
  experienceWhere?: string;
  jobOffer?: string;
  status?: string;
  family?: string;
  extras: string[];
};

type Opt = { v: string; l: string; hint?: string };
type Step = {
  id: keyof Answers;
  q: string;
  help?: string;
  type: "single" | "multi";
  options: Opt[];
};

const STEPS: Step[] = [
  {
    id: "goal", type: "single",
    q: "What would you most like to do in Canada?",
    help: "Pick the closest fit. We'll still check every route you might qualify for.",
    options: [
      { v: "pr", l: "Settle in Canada permanently" },
      { v: "work", l: "Work in Canada" },
      { v: "family", l: "Join or sponsor my family" },
      { v: "study", l: "Study, then build a future here" },
      { v: "business", l: "Start, buy or invest in a business" },
    ],
  },
  {
    id: "age", type: "single",
    q: "How old are you?",
    help: "Age affects your Express Entry score, so it helps us be realistic.",
    options: [
      { v: "u18", l: "Under 18" },
      { v: "18-29", l: "18 to 29" },
      { v: "30-34", l: "30 to 34" },
      { v: "35-39", l: "35 to 39" },
      { v: "40-44", l: "40 to 44" },
      { v: "45+", l: "45 or older" },
    ],
  },
  {
    id: "education", type: "single",
    q: "What is your highest level of education?",
    options: [
      { v: "secondary", l: "High school or less" },
      { v: "trade", l: "Skilled trade certificate" },
      { v: "post1", l: "1 to 2 year diploma" },
      { v: "bachelor", l: "Bachelor's degree (3+ years)" },
      { v: "masters", l: "Master's or doctorate" },
    ],
  },
  {
    id: "language", type: "single",
    q: "How strong is your English or French?",
    help: "Your best of the two. Don't worry about exact test scores yet.",
    options: [
      { v: "basic", l: "Just starting / basic" },
      { v: "intermediate", l: "Conversational (around CLB 5 to 6)" },
      { v: "strong", l: "Strong (around CLB 7 to 8)" },
      { v: "expert", l: "Fluent (CLB 9 or higher)" },
    ],
  },
  {
    id: "experience", type: "single",
    q: "How much skilled work experience do you have?",
    help: "Skilled means a professional, technical, managerial or trade role.",
    options: [
      { v: "none", l: "None yet" },
      { v: "lt1", l: "Less than 1 year" },
      { v: "1-3", l: "1 to 3 years" },
      { v: "3plus", l: "More than 3 years" },
    ],
  },
  {
    id: "experienceWhere", type: "single",
    q: "Where did you gain that work experience?",
    options: [
      { v: "canada", l: "In Canada" },
      { v: "abroad", l: "Outside Canada" },
      { v: "both", l: "Both in Canada and abroad" },
    ],
  },
  {
    id: "jobOffer", type: "single",
    q: "Do you have a Canadian job offer?",
    options: [
      { v: "none", l: "Not yet" },
      { v: "lmia", l: "Yes, from a Canadian employer" },
      { v: "exempt", l: "Yes, a transfer or treaty role (CUSMA, CETA, intra-company)" },
      { v: "unsure", l: "I'm not sure which kind" },
    ],
  },
  {
    id: "status", type: "single",
    q: "Where are you right now?",
    options: [
      { v: "outside", l: "Outside Canada" },
      { v: "visitor", l: "Visiting Canada" },
      { v: "worker", l: "Working in Canada" },
      { v: "student", l: "Studying in Canada" },
      { v: "graduate", l: "I graduated from a Canadian school" },
    ],
  },
  {
    id: "family", type: "single",
    q: "Do you have close family in Canada?",
    options: [
      { v: "none", l: "No close family here" },
      { v: "spouse-pr", l: "My spouse or partner is a citizen or PR" },
      { v: "spouse-temp", l: "My spouse or partner works or studies here" },
      { v: "parent-child", l: "A parent or child of mine is a citizen or PR" },
      { v: "sibling", l: "A sibling of mine is a citizen or PR" },
    ],
  },
  {
    id: "extras", type: "multi",
    q: "Anything else that applies to you?",
    help: "Select all that fit, or continue if none do.",
    options: [
      { v: "trade", l: "I work in a skilled trade" },
      { v: "iec", l: "I'm 18 to 35 and from an IEC partner country", hint: "e.g. UK, Ireland, Australia, France" },
      { v: "nomination", l: "I already have a provincial nomination" },
      { v: "funds", l: "I have funds to invest in a business" },
    ],
  },
];

/* ----------------------------------------------------------------- engine */

type Tier = "strong" | "possible";
type Cat = "pr" | "work" | "family";
type Match = { key: string; title: string; href: string; tier: Tier; why: string; cat: Cat };

function evaluate(a: Answers): Match[] {
  const out: Match[] = [];
  const ex = a.extras ?? [];
  const expYears = a.experience; // none | lt1 | 1-3 | 3plus
  const hasExp = expYears === "1-3" || expYears === "3plus";
  const someExp = hasExp || expYears === "lt1";
  const where = a.experienceWhere;
  const expCanada = someExp && (where === "canada" || where === "both");
  const expAbroad = someExp && (where === "abroad" || where === "both");
  const langStrong = a.language === "strong" || a.language === "expert";
  const langInt = langStrong || a.language === "intermediate";
  const young = a.age === "18-29" || a.age === "30-34" || a.age === "35-39";
  const degree = a.education === "bachelor" || a.education === "masters";
  const postSec = degree || a.education === "post1" || a.education === "trade";
  const offer = a.jobOffer === "lmia" || a.jobOffer === "exempt";
  const trade = ex.includes("trade") || a.education === "trade";
  const nominated = ex.includes("nomination");

  const add = (m: Match) => out.push(m);

  /* ---- Permanent residence ---- */

  // Canadian Experience Class: 1 yr skilled Canadian work + CLB 7 (TEER 0/1) or
  // CLB 5 (TEER 2/3). Require at least CLB 5 (langInt) to surface it honestly.
  if (expCanada && hasExp && langInt) {
    add({
      key: "cec", cat: "pr", tier: langStrong ? "strong" : "possible",
      title: "Express Entry, Canadian Experience Class",
      href: "/express-entry/canadian-experience-class",
      why: langStrong
        ? "You have skilled Canadian work experience and strong language, the core of a CEC profile."
        : "You have skilled Canadian experience; lifting your language scores would make CEC a strong fit.",
    });
  }

  // Federal Skilled Worker: 1 yr skilled work + CLB 7 in all abilities + the
  // 67-point grid (education matters). FSW has a hard CLB 7 minimum.
  if (hasExp && (expAbroad || expCanada) && langStrong && postSec) {
    add({
      key: "fsw", cat: "pr", tier: degree && young ? "strong" : "possible",
      title: "Express Entry, Federal Skilled Worker",
      href: "/express-entry/federal-skilled-worker",
      why: "You have a year or more of skilled work, strong language and post-secondary education, the basis for an FSW profile.",
    });
  }

  // Federal Skilled Trades: 2 yrs trade experience (last 5) + a job offer or a
  // certificate of qualification, with CLB 5 speaking/listening.
  if (trade && hasExp && (offer || a.education === "trade") && langInt) {
    add({
      key: "fst", cat: "pr", tier: hasExp && offer ? "strong" : "possible",
      title: "Express Entry, Federal Skilled Trades",
      href: "/express-entry/federal-skilled-trades",
      why: "Skilled-trade experience plus a job offer or certificate can open the Federal Skilled Trades stream.",
    });
  }

  // Provincial Nominee Programs / Alberta AAIP (broad, often the best route when CRS is mid)
  if (nominated || expCanada || offer || (hasExp && langInt) || (degree && langInt)) {
    add({
      key: "pnp", cat: "pr", tier: nominated || offer || expCanada ? "strong" : "possible",
      title: nominated ? "Provincial nomination, finish your PR" : "Provincial Nominee Programs (incl. Alberta AAIP)",
      href: "/pnp",
      why: nominated
        ? "With a nomination in hand, a +600 boost puts permanent residence within close reach."
        : "Provinces nominate skilled workers directly, often a realistic route even when general draws are high.",
    });
  }

  // Study to PR
  if (a.status === "graduate") {
    add({
      key: "study-pr", cat: "pr", tier: "strong",
      title: "Study to PR, your graduate advantage",
      href: "/study-permit/study-to-pr",
      why: "As a Canadian graduate, a PGWP plus skilled work is the classic fast track to permanent residence.",
    });
  } else if (a.status === "student" || a.goal === "study") {
    add({
      key: "study-pr2", cat: "pr", tier: "possible",
      title: "Study to PR pathway",
      href: "/study-permit/study-to-pr",
      why: "Studying in Canada builds the work experience and points that lead to permanent residence.",
    });
  }

  // Start-up Visa / business
  if ((a.goal === "business" || ex.includes("funds")) && (degree || hasExp)) {
    add({
      key: "suv", cat: "pr", tier: "possible",
      title: "Start-up Visa",
      href: "/start-up-visa",
      why: "If you can build an innovative business backed by a designated organisation, the Start-up Visa leads to PR.",
    });
  }

  /* ---- Family ---- */
  if (a.family === "spouse-pr") {
    add({
      key: "spousal", cat: "family", tier: "strong",
      title: "Spousal / partner sponsorship",
      href: "/family-sponsorship/spousal-sponsorship",
      why: "Your spouse or partner is a citizen or PR, so they may be able to sponsor you for permanent residence.",
    });
  }
  if (a.family === "parent-child") {
    add({
      key: "family", cat: "family", tier: "possible",
      title: "Family sponsorship",
      href: "/family-sponsorship",
      why: "A close family member who is a citizen or PR may be able to sponsor you, depending on your relationship and age.",
    });
  }

  /* ---- Work permits ---- */
  if (a.jobOffer === "lmia" || a.jobOffer === "unsure") {
    add({
      key: "lmia", cat: "work", tier: a.jobOffer === "lmia" ? "strong" : "possible",
      title: "Employer-specific (LMIA) work permit",
      href: "/work-permits/lmia",
      why: a.jobOffer === "lmia"
        ? "A Canadian job offer usually means an LMIA-based work permit while you plan your PR."
        : "If your offer needs an LMIA, this is the route; we can confirm which kind applies.",
    });
  }
  if (a.jobOffer === "exempt") {
    add({
      key: "exempt", cat: "work", tier: "strong",
      title: "LMIA-exempt work permit (CUSMA / CETA / transfer)",
      href: "/work-permits/intra-company-transfer",
      why: "Treaty and intra-company roles can skip the LMIA, a faster way into Canada to work.",
    });
  }
  if (a.status === "graduate") {
    add({
      key: "pgwp", cat: "work", tier: "strong",
      title: "Post-Graduation Work Permit (PGWP)",
      href: "/work-permits/pgwp",
      why: "As a recent graduate of an eligible Canadian school, a PGWP lets you work and build toward PR.",
    });
  }
  if (ex.includes("iec")) {
    add({
      key: "iec", cat: "work", tier: "strong",
      title: "International Experience Canada (Working Holiday)",
      href: "/work-permits/international-experience-canada",
      why: "Your age and country may qualify you for an open IEC work permit, an easy first step into Canada.",
    });
  }
  if (a.family === "spouse-temp") {
    add({
      key: "owp", cat: "work", tier: "possible",
      title: "Open work permit (partner of a worker / student)",
      href: "/work-permits/open-work-permit",
      why: "If your partner works or studies in Canada, you may qualify for an open work permit to join them.",
    });
  }
  if (a.family === "spouse-pr") {
    add({
      key: "sowp", cat: "work", tier: "possible",
      title: "Spousal Open Work Permit (during sponsorship)",
      href: "/family-sponsorship/spousal-open-work-permit",
      why: "Applying for spousal PR from inside Canada can come with an open work permit while you wait.",
    });
  }

  // de-dupe by key, keep first (strongest)
  const seen = new Set<string>();
  return out.filter((m) => (seen.has(m.key) ? false : seen.add(m.key)));
}

/* ----------------------------------------------------------------- UI */

const EASE = [0.16, 1, 0.3, 1] as const;

const catMeta: Record<Cat, { label: string; icon: typeof Compass }> = {
  pr: { label: "Permanent residence", icon: Compass },
  work: { label: "Work in Canada", icon: Briefcase },
  family: { label: "Family", icon: Heart },
};

export function EligibilityFinder() {
  const [answers, setAnswers] = useState<Answers>({ extras: [] });
  const [stepIdx, setStepIdx] = useState(0);
  const [done, setDone] = useState(false);

  // Skip the "where" step when there's no experience to place.
  const steps = useMemo(
    () => STEPS.filter((s) => !(s.id === "experienceWhere" && answers.experience === "none")),
    [answers.experience],
  );
  const step = steps[stepIdx];
  const progress = done ? 100 : Math.round((stepIdx / steps.length) * 100);

  const results = useMemo(() => (done ? evaluate(answers) : []), [done, answers]);
  const grouped = useMemo(() => {
    const byCat: Record<Cat, Match[]> = { pr: [], work: [], family: [] };
    for (const m of results) byCat[m.cat].push(m);
    (Object.keys(byCat) as Cat[]).forEach((c) =>
      byCat[c].sort((x, y) => (x.tier === y.tier ? 0 : x.tier === "strong" ? -1 : 1)),
    );
    return byCat;
  }, [results]);
  const strongCount = results.filter((m) => m.tier === "strong").length;

  function choose(v: string) {
    const next = { ...answers, [step.id]: v };
    setAnswers(next);
    // advance after a beat so the selection is visible
    window.setTimeout(() => advance(next), 160);
  }
  function toggle(v: string) {
    const has = answers.extras.includes(v);
    setAnswers({ ...answers, extras: has ? answers.extras.filter((x) => x !== v) : [...answers.extras, v] });
  }
  function advance(state: Answers) {
    const visible = STEPS.filter((s) => !(s.id === "experienceWhere" && state.experience === "none"));
    if (stepIdx >= visible.length - 1) setDone(true);
    else setStepIdx((i) => i + 1);
  }
  function back() {
    if (stepIdx > 0) setStepIdx((i) => i - 1);
  }
  function restart() {
    setAnswers({ extras: [] });
    setStepIdx(0);
    setDone(false);
  }

  return (
    <div className="rounded-[1.75rem] border border-brand/15 bg-blush p-4 shadow-soft sm:p-6 lg:p-8">
      {/* progress */}
      <div className="flex items-center gap-4">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
          <motion.div
            className="h-full rounded-full bg-brand"
            animate={{ width: `${Math.max(progress, 4)}%` }}
            transition={{ duration: 0.4, ease: EASE }}
          />
        </div>
        <span className="text-xs font-semibold text-ink-soft">
          {done ? "Your results" : `Step ${stepIdx + 1} of ${steps.length}`}
        </span>
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step.id + String(stepIdx)}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <h3 className="font-heading text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.8rem]">
                {step.q}
              </h3>
              {step.help && <p className="mt-2 text-[14.5px] text-ink-soft">{step.help}</p>}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {step.options.map((o) => {
                  const selected =
                    step.type === "multi"
                      ? answers.extras.includes(o.v)
                      : answers[step.id] === o.v;
                  return (
                    <button
                      key={o.v}
                      type="button"
                      onClick={() => (step.type === "multi" ? toggle(o.v) : choose(o.v))}
                      className={`group flex items-center gap-3 rounded-2xl border bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft ${
                        selected ? "border-brand ring-2 ring-brand/20" : "border-line hover:border-brand/40"
                      }`}
                    >
                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          selected ? "border-brand bg-brand text-white" : "border-line bg-white text-transparent"
                        }`}
                      >
                        <Check className="size-3.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-medium text-ink">{o.l}</span>
                        {o.hint && <span className="block text-xs text-ink-faint">{o.hint}</span>}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center justify-between">
                <button
                  type="button"
                  onClick={back}
                  disabled={stepIdx === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-brand disabled:pointer-events-none disabled:opacity-0"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
                {step.type === "multi" && (
                  <button
                    type="button"
                    onClick={() => advance(answers)}
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-b from-[#ee100c] to-brand px-6 font-heading text-[15px] font-medium text-white shadow-[var(--shadow-brand)] ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5"
                  >
                    See my results <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <Results grouped={grouped} strongCount={strongCount} total={results.length} onRestart={restart} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Results({
  grouped, strongCount, total, onRestart,
}: {
  grouped: Record<Cat, Match[]>;
  strongCount: number;
  total: number;
  onRestart: () => void;
}) {
  const cats = (Object.keys(grouped) as Cat[]).filter((c) => grouped[c].length > 0);

  return (
    <div>
      <div className="rounded-2xl border border-brand/10 bg-white p-6 shadow-soft sm:p-7">
        <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
          <Sparkles className="size-3.5" /> Your pathway summary
        </div>
        <h3 className="mt-2 font-heading text-[1.5rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.9rem]">
          {total === 0
            ? "Your situation needs a closer look"
            : strongCount > 0
              ? `${total} route${total > 1 ? "s" : ""} could fit you, ${strongCount} look${strongCount > 1 ? "" : "s"} strong`
              : `${total} route${total > 1 ? "s" : ""} worth exploring`}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
          {total === 0
            ? "Nothing matched our quick rules, but that rarely means there's no route, it usually means your case is unusual and deserves a proper look. Tell us your details and we'll find the angle."
            : "Here's where you may stand today. This is a guide, not a decision, your real eligibility depends on the full details and current IRCC rules."}
        </p>
      </div>

      <div className="mt-5 space-y-6">
        {cats.map((c) => {
          const Icon = catMeta[c].icon;
          return (
            <div key={c}>
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Icon className="size-4 text-brand" /> {catMeta[c].label}
              </div>
              <div className="mt-3 grid gap-3">
                {grouped[c].map((m) => (
                  <Link
                    key={m.key}
                    href={m.href}
                    className="group flex items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]"
                  >
                    <span
                      className={`mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        m.tier === "strong" ? "bg-brand-tint text-brand" : "bg-brand-soft text-brand"
                      }`}
                    >
                      {m.tier === "strong" ? <BadgeCheck className="size-3.5" /> : null}
                      {m.tier === "strong" ? "Strong match" : "Worth exploring"}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 text-[15.5px] font-semibold text-ink group-hover:text-brand">
                        {m.title}
                        <ArrowRight className="size-4 shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                      <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{m.why}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-window sm:p-7">
        <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-brand/10 blur-3xl" aria-hidden />
        <h3 className="relative font-heading text-xl font-semibold text-ink sm:text-2xl">Turn this into a real plan</h3>
        <p className="relative mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Send us your details and a licensed RCIC (#R706497) will confirm which of these routes is genuinely your
          best move, and map the steps. Honest advice, no false promises.
        </p>
        <div className="relative mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-6 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5"
          >
            Get an expert review <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-[15px] font-medium text-ink-soft ring-1 ring-line transition-colors hover:bg-surface hover:text-brand"
          >
            <RotateCcw className="size-4" /> Start over
          </button>
        </div>
      </div>

      <p className="mt-4 flex items-start gap-1.5 text-[12px] leading-relaxed text-ink-faint">
        <Info className="mt-0.5 size-3.5 shrink-0" />
        This tool gives general guidance based on the answers you provide and current public IRCC criteria. It is not
        legal advice and not a decision on your application. A licensed RCIC confirms your real options. Quebec-selected
        programs and refugee, appeal and inadmissibility matters are outside our scope.
      </p>
    </div>
  );
}
