"use client";

import { useEffect } from "react";

/**
 * Fires a GA4 `generate_lead` conversion once, on mount. Rendered on the
 * /thank-you page, which the contact form redirects to after a successful send.
 * No-ops when analytics isn't loaded.
 */
export function LeadConversion() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", { event_category: "contact", value: 1 });
    }
  }, []);
  return null;
}
