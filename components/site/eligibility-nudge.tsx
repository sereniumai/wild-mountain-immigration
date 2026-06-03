"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, X } from "lucide-react";

/* A gentle, dismissible bottom banner that points visitors at the free
   eligibility checker. Appears once they've engaged (a short delay or a scroll),
   never on the checker or contact pages, and stays gone for 14 days after a
   dismiss or click (localStorage). Non-blocking and keyboard-accessible. */

const STORAGE_KEY = "wmi-eligibility-nudge";
const SNOOZE_DAYS = 14;
const SHOW_AFTER_MS = 7000;
const SHOW_AFTER_SCROLL = 700;
// Pages where the nudge would be redundant or pushy.
const HIDDEN_ON = ["/tools/eligibility", "/contact", "/consultation", "/thank-you"];

function snoozed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const until = Number(raw);
    return Number.isFinite(until) && Date.now() < until;
  } catch {
    return false;
  }
}

function snooze() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now() + SNOOZE_DAYS * 864e5));
  } catch {
    /* private mode, ignore */
  }
}

export function EligibilityNudge() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const hidden = HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  useEffect(() => {
    if (hidden || snoozed()) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (window.scrollY > SHOW_AFTER_SCROLL) reveal();
    };
    const timer = window.setTimeout(reveal, SHOW_AFTER_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hidden, pathname]);

  function dismiss() {
    setOpen(false);
    snooze();
  }

  if (hidden) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="region"
          aria-label="Free eligibility check"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-4 sm:pb-4"
        >
          <div className="relative mx-auto flex max-w-3xl flex-col gap-3 overflow-hidden rounded-2xl bg-brand p-4 pr-10 shadow-[var(--shadow-lift)] ring-1 ring-black/5 sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:pr-12">
            {/* dismiss */}
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="size-4" />
            </button>

            {/* Nicola, the real RCIC, not stock */}
            <Image
              src="/brand/nicola-wightman.avif"
              alt="Nicola Wightman, RCIC"
              width={52}
              height={52}
              className="hidden size-13 shrink-0 rounded-full object-cover ring-2 ring-white/70 sm:block"
            />

            <div className="min-w-0 flex-1">
              <p className="font-heading text-[15.5px] font-semibold leading-snug text-white sm:text-base">
                Discover your Canadian immigration options
              </p>
              <p className="mt-0.5 text-[13px] leading-relaxed text-white/85">
                Take our free eligibility check, about 2 minutes, no obligation.
              </p>
            </div>

            <Link
              href="/tools/eligibility"
              onClick={dismiss}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 font-heading text-[14px] font-semibold text-brand shadow-sm ring-1 ring-inset ring-black/5 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Find out if you qualify <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
