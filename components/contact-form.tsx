"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import {
  Compass, Briefcase, GraduationCap, Heart, Plane, Award, Building2, HelpCircle,
  ChevronRight, ChevronDown, Send,
} from "lucide-react";

// Cloudflare Turnstile site key (public). When unset, the widget is hidden and
// the form falls back to the honeypot only, so local dev works without keys.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/** Step 1 options. Each maps to a pathway the practice handles in-house. */
const options = [
  { label: "Permanent residence", icon: Compass },
  { label: "Work permit", icon: Briefcase },
  { label: "Study permit", icon: GraduationCap },
  { label: "Family sponsorship", icon: Heart },
  { label: "Visit Canada", icon: Plane },
  { label: "Canadian citizenship", icon: Award },
  { label: "Business immigration", icon: Building2 },
  { label: "Not sure yet", icon: HelpCircle },
] as const;

/** Canadian provinces and territories, shown only when the person is in Canada. */
const provinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut",
  "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon",
] as const;

const inputCls =
  "w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink shadow-soft outline-none transition-colors placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/15";

const stepAnim = {
  initial: { opacity: 0, x: 14 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -14 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
};

export function ContactForm({ tone = "white" }: { tone?: "white" | "pink" }) {
  const router = useRouter();
  // 0 = choose a pathway, 1 = contact details
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  // Residence drives the conditional province question: only "inside" reveals it.
  const [residence, setResidence] = useState<"" | "inside" | "outside">("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  function choose(label: string) {
    setService(label);
    setStep(1);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    if (TURNSTILE_SITE_KEY && !token) {
      setError("Please complete the human verification below.");
      return;
    }
    const f = new FormData(e.currentTarget);
    const payload = {
      name: String(f.get("name") || "").trim(),
      email: String(f.get("email") || "").trim(),
      age: String(f.get("age") || "").trim(),
      passport: String(f.get("passport") || "").trim(),
      residence: residence === "inside" ? "Inside Canada" : residence === "outside" ? "Outside Canada" : "",
      province: residence === "inside" ? String(f.get("province") || "").trim() : "",
      phone: String(f.get("phone") || "").trim(),
      service,
      message: String(f.get("message") || "").trim(),
      consent: f.get("consent") === "on",
      company: String(f.get("company") || ""), // honeypot
      turnstileToken: token,
    };
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
      // Turnstile tokens are single-use; reset so the next attempt gets a fresh one.
      turnstileRef.current?.reset();
      setToken("");
    }
  }

  return (
    <div className={clsx("overflow-hidden rounded-2xl border p-6 shadow-soft sm:p-8", tone === "pink" ? "border-brand/20 bg-brand-soft" : "border-line bg-white")}>
      {/* Progress: two segments that fill as you move through the quiz. */}
      {step < 2 && (
        <div className="mb-7 flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2">
            {[0, 1].map((i) => (
              <span
                key={i}
                className={clsx("h-1.5 flex-1 rounded-full transition-colors duration-300", step >= i ? "bg-brand" : "bg-line")}
              />
            ))}
          </div>
          <span className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Step {step + 1} of 2
          </span>
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
        {/* ---------------------------------------------------- STEP 1: choose */}
        {step === 0 && (
          <motion.div key="choose" {...stepAnim}>
            <h2 className="font-heading text-[1.7rem] font-semibold tracking-[-0.02em] text-ink">
              What can we help with?
            </h2>
            <p className="mt-1.5 text-[15px] text-ink-soft">
              Tap the option that fits. We&apos;ll take it from there.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {options.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => choose(label)}
                  className="group flex items-center gap-3.5 rounded-2xl border border-line bg-white px-4 py-3.5 text-left shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-window focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand ring-1 ring-inset ring-brand/15 transition-colors duration-300 group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-heading text-[15px] font-semibold text-ink">{label}</span>
                  <ChevronRight className="ml-auto size-4 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ---------------------------------------------------- STEP 2: details */}
        {step === 1 && (
          <motion.form key="details" onSubmit={handleSubmit} {...stepAnim}>
            {/* Honeypot: hidden from people, catches bots. */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <h2 className="font-heading text-[1.7rem] font-semibold tracking-[-0.02em] text-ink">
              How can we reach you?
            </h2>
            <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[14px] text-ink-soft">
              <span>You picked</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-3 py-1 text-[13px] font-semibold text-brand ring-1 ring-inset ring-brand/15">
                {service}
              </span>
              <button type="button" onClick={() => setStep(0)} className="font-medium text-brand hover:underline">
                Change
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="block text-sm font-medium text-ink">Full name <span className="text-brand">*</span></span>
                <input name="name" required autoComplete="name" className={`mt-1.5 ${inputCls}`} placeholder="John Smith" />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-ink">Email address <span className="text-brand">*</span></span>
                <input name="email" type="email" required autoComplete="email" inputMode="email" className={`mt-1.5 ${inputCls}`} placeholder="you@email.com" />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-ink">Age</span>
                <input name="age" type="number" inputMode="numeric" min={16} max={99} autoComplete="off" className={`mt-1.5 ${inputCls}`} placeholder="e.g. 32" />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-ink">Which passport do you currently hold?</span>
                <input name="passport" autoComplete="off" className={`mt-1.5 ${inputCls}`} placeholder="e.g. British passport" />
              </label>
              <div className="block">
                <span className="block text-sm font-medium text-ink">Which country do you currently reside in?</span>
                <div className="mt-1.5 grid grid-cols-2 gap-2.5">
                  {([
                    { v: "inside", label: "Inside Canada" },
                    { v: "outside", label: "Outside Canada" },
                  ] as const).map((o) => (
                    <button
                      key={o.v}
                      type="button"
                      onClick={() => setResidence(o.v)}
                      aria-pressed={residence === o.v}
                      className={clsx(
                        "flex items-center justify-center rounded-xl border px-4 py-2.5 text-[15px] font-medium shadow-soft transition-all",
                        residence === o.v
                          ? "border-brand bg-brand-tint text-brand ring-2 ring-brand/20"
                          : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-brand/40",
                      )}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
              <AnimatePresence initial={false}>
                {residence === "inside" && (
                  <motion.div
                    key="province"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <label className="block">
                      <span className="block text-sm font-medium text-ink">Which province do you currently reside in?</span>
                      <div className="relative mt-1.5">
                        <select name="province" defaultValue="" className={`${inputCls} appearance-none pr-10`}>
                          <option value="" disabled>Select a province or territory</option>
                          {provinces.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
                      </div>
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
              <label className="block">
                <span className="block text-sm font-medium text-ink">Tell us about your situation</span>
                <textarea name="message" rows={4} className={`mt-1.5 ${inputCls} resize-y`} placeholder="A few lines about your goals, timeline and any history with Canadian immigration." />
              </label>
            </div>

            <label className="mt-4 flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-soft">
              <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 rounded border-line accent-brand" />
              <span>
                I agree that Wild Mountain Immigration may contact me about my enquiry, and to the{" "}
                <a href="/privacy-policy" className="font-medium text-brand hover:underline">Privacy Policy</a> and{" "}
                <a href="/terms" className="font-medium text-brand hover:underline">Terms</a>.
              </span>
            </label>

            {TURNSTILE_SITE_KEY && (
              <div className="mt-4">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={TURNSTILE_SITE_KEY}
                  onSuccess={setToken}
                  onExpire={() => setToken("")}
                  onError={() => setToken("")}
                  options={{ theme: "light", size: "flexible" }}
                />
              </div>
            )}

            {error && (
              <p role="alert" className="mt-4 rounded-lg bg-brand-soft/60 px-3.5 py-2.5 text-[13px] font-medium text-brand ring-1 ring-inset ring-brand/15">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting || (!!TURNSTILE_SITE_KEY && !token)}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-[#ee100c] to-brand px-6 font-heading text-[15px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {submitting ? (
                <><span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden /> Sending…</>
              ) : (
                <><Send className="size-4" /> Send enquiry</>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
