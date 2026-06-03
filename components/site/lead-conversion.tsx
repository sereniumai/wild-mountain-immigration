"use client";

import { useEffect } from "react";

/**
 * Fires a GA4 `generate_lead` conversion once, on mount. Rendered on the
 * /thank-you page, which the contact form redirects to after a successful send.
 * No-ops when analytics isn't loaded.
 */
export function LeadConversion() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      dataLayer?: Record<string, unknown>[];
      gtag?: (...args: unknown[]) => void;
    };
    // Push to the GTM dataLayer so a Google Ads / GA4 conversion tag can fire on
    // the `generate_lead` event (configure the trigger in GTM-TWNKHJV).
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "generate_lead", lead_category: "contact", value: 1 });
    // Also fire directly if a gtag-based GA tag is loaded.
    if (typeof w.gtag === "function") {
      w.gtag("event", "generate_lead", { event_category: "contact", value: 1 });
    }
  }, []);
  return null;
}
