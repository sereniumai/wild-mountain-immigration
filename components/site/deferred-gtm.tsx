"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const GTM_ID = "GTM-TWNKHJV";

/**
 * Loads Google Tag Manager (and therefore GA4, Google Ads conversion/remarketing
 * and the Reddit pixels) only AFTER the first user interaction, with a short
 * timeout fallback. This keeps the marketing stack off the initial loading path
 * so it stops costing main-thread time / "unused JS" during first paint, which is
 * worth ~34 points on the throttled mobile Lighthouse run.
 *
 * Analytics and conversions are preserved: real users scroll/tap within a second
 * or two (which fires GTM), and the timeout fallback loads it for passive readers
 * too. A visitor always interacts before reaching a thank-you/conversion page, so
 * conversion tags still fire there. (Client confirmed this trade-off 2026-06-08.)
 */
export function DeferredGtm() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) return;
    const trigger = () => setLoad(true);
    const events: (keyof WindowEventMap)[] = ["scroll", "pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));
    // Fallback so analytics still fire for visitors who never interact.
    const timer = window.setTimeout(trigger, 3000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      window.clearTimeout(timer);
    };
  }, [load]);

  return load ? <GoogleTagManager gtmId={GTM_ID} /> : null;
}
