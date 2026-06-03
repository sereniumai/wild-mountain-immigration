"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroVideo, type HeroVideoHandle } from "@/components/home/hero-video";
import { consult } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export function Hero() {
  const videoRef = useRef<HeroVideoHandle>(null);
  const [sound, setSound] = useState({ enabled: false, muted: true });

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Full-bleed background video (poster fallback on mobile / reduced-motion) */}
      <HeroVideo
        ref={videoRef}
        onState={setSound}
        id="AJkWoQk6_E8"
        poster="/brand/hero-poster.avif"
        posterAlt="People who moved to Canada with Wild Mountain Immigration"
        start={7}
        end={135}
        cover
      />

      {/* Cinematic grading: strong dark wash on the left for the copy, a soft
          vignette, and a brand glow, so the footage reads as a backdrop. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/30" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/45" aria-hidden />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_220px_60px_rgba(20,22,24,0.65)]" aria-hidden />

      {/* Sound toggle: subtle frosted control, top-right, aligned with the nav. */}
      {sound.enabled && (
        <button
          type="button"
          onClick={() => videoRef.current?.toggleSound()}
          aria-label={sound.muted ? "Turn video sound on" : "Mute video"}
          className="absolute right-5 top-6 z-20 inline-flex items-center gap-1.5 rounded-full bg-ink/45 px-3 py-1.5 text-[12.5px] font-medium text-white/85 ring-1 ring-inset ring-white/20 backdrop-blur transition-colors hover:bg-ink/65 hover:text-white active:scale-95 lg:right-8"
        >
          {sound.muted ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
          {sound.muted ? "Sound" : "Mute"}
        </button>
      )}

      <Container className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-24 lg:py-28">
        <div className="max-w-3xl">
          <motion.div {...fade(0)} className="flex">
            <h1 className="inline-flex items-center rounded-full border border-white/35 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white">
              Regulated Canmore immigration consultant
            </h1>
          </motion.div>

          <motion.h2
            {...fade(0.07)}
            className="mt-6 text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-[3.7rem] lg:text-[4.3rem]"
          >
            Your new life in <br />
            <span className="relative inline-block whitespace-nowrap text-brand">
              Canada
              <svg className="absolute -bottom-1.5 left-0 w-full" height="12" viewBox="0 0 220 12" fill="none" preserveAspectRatio="none" aria-hidden>
                <motion.path
                  d="M3 8C50 3 95 2 140 4.5C172 6 200 7 217 4.5"
                  stroke="#e00400" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
                />
              </svg>
            </span>{" "}
            starts here.
          </motion.h2>

          <motion.p {...fade(0.15)} className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/75">
            A CICC-regulated Canmore immigration consultancy run by people who have been through it themselves, we
            find your best pathway, build your strongest application, and stay right beside you, all the way to the
            finish line.
          </motion.p>

          <motion.div {...fade(0.22)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={consult.href} size="lg" withArrow>{consult.label}</Button>
            <Link
              href="/tools/eligibility"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/40 px-7 font-heading text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:translate-y-0 active:scale-[0.97]"
            >
              Find what you qualify for
            </Link>
          </motion.div>

          <motion.div {...fade(0.3)} className="mt-10 flex items-center gap-2.5">
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4.5 fill-brand text-brand" />)}
            </span>
            <span className="text-sm">
              <span className="font-semibold text-white">5.0</span>
              <span className="text-white/70"> · Trusted by newcomers from 20+ countries</span>
            </span>
          </motion.div>
        </div>

        {/* Scroll cue: nudges the eye down to the content below the fold. */}
        <motion.button
          type="button"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.82, behavior: "smooth" })}
          aria-label="Scroll to content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute inset-x-0 bottom-6 z-20 mx-auto hidden w-max flex-col items-center gap-1.5 text-white/65 transition-colors hover:text-white sm:flex"
        >
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-5" />
          </motion.span>
        </motion.button>
      </Container>
    </section>
  );
}
