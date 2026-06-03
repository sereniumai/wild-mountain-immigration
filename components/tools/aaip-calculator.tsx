"use client";

import { useMemo, useState } from "react";
import { RotateCcw, Info } from "lucide-react";

/* ----------------------------------------------------------------------------
   Alberta AAIP Worker Expression of Interest (EOI), official grid, max 100.
   Source: Government of Alberta Worker Stream EOI points grid (Aug 7 2025).
   Human Capital max 69 + Economic Factors max 31. Per CALCULATOR-DATA.md.
   Starts empty (nothing selected, score 0) and updates as the user answers.
---------------------------------------------------------------------------- */

const PH = { v: "", l: "Select…" };

const EDU: Record<string, number> = { phd: 12, master: 10, bachelor: 7, trades: 7, diploma: 4, secondary: 0 };
const EDU_OPTS = [
  { v: "phd", l: "Doctorate (PhD)" }, { v: "master", l: "Master's degree" },
  { v: "bachelor", l: "Bachelor's degree" }, { v: "trades", l: "Trades certificate / diploma" },
  { v: "diploma", l: "Post-secondary diploma / certificate" }, { v: "secondary", l: "Secondary or lower" },
];

const EDU_LOC: Record<string, number> = { alberta: 10, province: 6, outside: 0 };

function engPts(clb: number) { return clb >= 6 ? 10 : clb === 5 ? 8 : clb === 4 ? 5 : 0; }
function frPts(clb: number) { return clb >= 6 ? 8 : clb === 5 ? 5 : clb === 4 ? 3 : 0; }

const TOTAL_EXP: Record<string, number> = { "12": 11, "6": 7, "0": 3, none: 0 };
const CAN_EXP: Record<string, number> = { alberta: 10, province: 6, none: 0 };

function agePts(age: number) {
  if (age >= 21 && age <= 34) return 5;
  if (age >= 35 && age <= 49) return 4;
  if (age >= 18 && age <= 20) return 3;
  return 3; // 50+
}

const CLB_OPTS = [
  { v: 0, l: "None / below CLB 4" }, { v: 4, l: "CLB 4" }, { v: 5, l: "CLB 5" },
  { v: 6, l: "CLB 6" }, { v: 7, l: "CLB 7" }, { v: 8, l: "CLB 8+" },
];
const CLB_FIELD = [PH, ...CLB_OPTS];

type State = {
  edu: string; eduLoc: string;
  eng: number | ""; fr: number | "";
  totalExp: string; canExp: string;
  age: number | ""; family: string; // "" | "0" | "1"
  jobOffer: string; sector: "" | "none" | "rural" | "tourism" | "law"; jobLoc: "" | "calgary" | "edmonton" | "rural" | "other";
  regulated: string; // "" | "0" | "1"
};

const initial: State = {
  edu: "", eduLoc: "", eng: "", fr: "",
  totalExp: "", canExp: "", age: "", family: "",
  jobOffer: "", sector: "", jobLoc: "", regulated: "",
};

function compute(s: State) {
  const eng = s.eng === "" ? 0 : s.eng;
  const fr = s.fr === "" ? 0 : s.fr;

  // Human capital (max 69)
  const edu = EDU[s.edu] ?? 0;
  const eduLoc = EDU_LOC[s.eduLoc] ?? 0;
  const lang = Math.min(Math.max(engPts(eng), frPts(fr)), 10);
  const bilingual = eng >= 4 && fr >= 4 ? 3 : 0;
  const totalExp = TOTAL_EXP[s.totalExp] ?? 0;
  const canExp = CAN_EXP[s.canExp] ?? 0;
  const age = s.age === "" ? 0 : agePts(Number(s.age));
  const family = s.family === "1" ? 8 : 0;
  const human = Math.min(edu + eduLoc + lang + bilingual + totalExp + canExp + age + family, 69);

  // Economic (max 31)
  const hasOffer = s.jobOffer === "1";
  const jobOffer = hasOffer ? 10 : 0;
  const sector = hasOffer && s.sector !== "none" && s.sector !== "" ? 6 : 0;
  const jobLoc = hasOffer && (s.jobLoc === "rural" || s.jobLoc === "other") ? 5 : 0;
  const regulated = hasOffer && s.regulated === "1" ? 10 : 0;
  const economic = Math.min(jobOffer + sector + jobLoc + regulated, 31);

  return {
    total: Math.min(human + economic, 100), human, economic,
    parts: { edu, eduLoc, lang, bilingual, totalExp, canExp, age, family, jobOffer, sector, jobLoc, regulated },
  };
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink">{label}</span>
      {hint && <span className="block truncate text-xs text-ink-faint">{hint}</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
const selectCls = "w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink shadow-soft outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15";
function Sel({ value, onChange, options }: { value: string | number; onChange: (v: string) => void; options: { v: string | number; l: string }[] }) {
  return <select className={selectCls} value={value} onChange={(e) => onChange(e.target.value)}>{options.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}</select>;
}

/** A titled white card. The heading sits cleanly inside the border, above a
 *  divider, so each group of questions reads as one balanced block. */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-7">
      <div className="flex items-center gap-2.5 border-b border-line-soft pb-4">
        <span className="h-5 w-1.5 rounded-full bg-brand" />
        <h3 className="font-heading text-base font-semibold tracking-tight text-ink">{title}</h3>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function AaipCalculator() {
  const [s, setS] = useState<State>(initial);
  const r = useMemo(() => compute(s), [s]);
  const set = <K extends keyof State>(k: K, v: State[K]) => setS((p) => ({ ...p, [k]: v }));

  const verdict =
    r.total === 0 ? { t: "Answer the questions", c: "text-ink-soft", note: "Select your details above and your estimated AAIP EOI score appears here instantly." }
    : r.total >= 60 ? { t: "Competitive", c: "text-brand", note: "In range for several 2026 AAIP draws, including priority sectors." }
    : r.total >= 50 ? { t: "Borderline", c: "text-brand", note: "Near recent Opportunity / Rural Renewal cut-offs, worth a strategy session." }
    : { t: "Below recent cut-offs", c: "text-brand", note: "A job offer, Alberta experience or a designated-community endorsement would lift this." };

  return (
    <div className="rounded-[1.75rem] border border-brand/15 bg-blush p-4 shadow-soft sm:p-6 lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
      <div className="space-y-6">
        <Section title="Human capital">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Highest education" hint="Your top completed qualification"><Sel value={s.edu} onChange={(v) => set("edu", v)} options={[PH, ...EDU_OPTS]} /></Field>
            <Field label="Where you studied" hint="Location of your highest credential">
              <Sel value={s.eduLoc} onChange={(v) => set("eduLoc", v)} options={[PH, { v: "alberta", l: "In Alberta" }, { v: "province", l: "Another Canadian province" }, { v: "outside", l: "Outside Canada" }]} />
            </Field>
            <Field label="English (lowest CLB)" hint="Your lowest ability band"><Sel value={s.eng} onChange={(v) => set("eng", v === "" ? "" : Number(v))} options={CLB_FIELD} /></Field>
            <Field label="French (lowest NCLC)" hint="Skip if you don't speak French"><Sel value={s.fr} onChange={(v) => set("fr", v === "" ? "" : Number(v))} options={CLB_FIELD} /></Field>
            <Field label="Total work experience" hint="Canada + abroad, last 10 years">
              <Sel value={s.totalExp} onChange={(v) => set("totalExp", v)} options={[PH, { v: "12", l: "12+ months" }, { v: "6", l: "6–11 months" }, { v: "0", l: "Under 6 months" }, { v: "none", l: "None" }]} />
            </Field>
            <Field label="Canadian work experience" hint="Skilled work, last 10 years">
              <Sel value={s.canExp} onChange={(v) => set("canExp", v)} options={[PH, { v: "alberta", l: "6+ months in Alberta" }, { v: "province", l: "6+ months, other province" }, { v: "none", l: "None" }]} />
            </Field>
            <Field label="Age" hint="Your current age in years"><Sel value={s.age} onChange={(v) => set("age", v === "" ? "" : Number(v))} options={[PH, ...Array.from({ length: 38 }, (_, i) => i + 18).map((a) => ({ v: a, l: a >= 50 ? "50 or older" : `${a}` }))]} /></Field>
            <Field label="Family in Alberta" hint="Relative who's a citizen/PR there">
              <Sel value={s.family} onChange={(v) => set("family", v)} options={[PH, { v: "0", l: "No" }, { v: "1", l: "Yes (+8)" }]} />
            </Field>
          </div>
        </Section>

        <Section title="Economic factors (job offer)">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Permanent full-time Alberta job offer" hint="From an eligible Alberta employer">
              <Sel value={s.jobOffer} onChange={(v) => set("jobOffer", v)} options={[PH, { v: "0", l: "No" }, { v: "1", l: "Yes (+10)" }]} />
            </Field>
            <Field label="Priority sector / rural" hint="Only if you have a job offer">
              <Sel value={s.sector} onChange={(v) => set("sector", v as State["sector"])} options={[PH, { v: "none", l: "None of these" }, { v: "rural", l: "Rural Renewal endorsement" }, { v: "tourism", l: "Tourism & hospitality" }, { v: "law", l: "Law enforcement" }]} />
            </Field>
            <Field label="Job offer location" hint="Where the job is based">
              <Sel value={s.jobLoc} onChange={(v) => set("jobLoc", v as State["jobLoc"])} options={[PH, { v: "calgary", l: "Calgary metro (CMA)" }, { v: "edmonton", l: "Edmonton metro (CMA)" }, { v: "rural", l: "Rural Renewal community" }, { v: "other", l: "Other Alberta community" }]} />
            </Field>
            <Field label="Regulated occupation + certified" hint="You hold the Alberta licence">
              <Sel value={s.regulated} onChange={(v) => set("regulated", v)} options={[PH, { v: "0", l: "No" }, { v: "1", l: "Yes (+10)" }]} />
            </Field>
          </div>
        </Section>

        <button onClick={() => setS(initial)} className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-brand">
          <RotateCcw className="size-4" /> Reset
        </button>
      </div>

      <div className="lg:sticky lg:top-28">
        <div className="overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-window">
          <div className="border-b border-line bg-blush p-6 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-soft">Your estimated AAIP EOI score</p>
            <p className={`mt-2 font-heading text-6xl font-semibold tracking-tight ${r.total === 0 ? "text-ink-faint/45" : "text-brand"}`}>{r.total}</p>
            <p className="text-xs text-ink-faint">out of 100</p>
            <p className={`mt-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-soft ${verdict.c}`}>{verdict.t}</p>
          </div>
          <div className="p-5">
            <p className="text-[13px] leading-relaxed text-ink-soft">{verdict.note}</p>
            <dl className="mt-4 space-y-1.5 text-[13.5px]">
              {[["Human capital (max 69)", r.human], ["Economic factors (max 31)", r.economic]].map(([k, v]) => (
                <div key={k as string} className="flex justify-between border-b border-line-soft py-1.5">
                  <dt className="text-ink-soft">{k}</dt><dd className="font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <a href="/contact" className="mt-5 flex w-full items-center justify-center rounded-xl bg-gradient-to-b from-[#ee100c] to-brand px-5 py-3 font-heading text-[15px] font-medium text-white shadow-[var(--shadow-brand)] ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5">
              Build my Alberta strategy
            </a>
            <p className="mt-3 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-faint">
              <Info className="mt-0.5 size-3.5 shrink-0" />
              Estimate only, based on Alberta&apos;s published Worker EOI grid. The AAIP Express Entry Stream also needs a federal CRS of at least 300. Your official EOI is scored by the AAIP.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
