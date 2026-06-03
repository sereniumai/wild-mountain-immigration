"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Guarantees every route navigation lands at the very top of the page.
 * Next's built-in scroll restoration can leave the viewport partway down when
 * a sticky header/sidebar layout is involved, so we force an instant reset on
 * each pathname change. In-page anchor (#) jumps are unaffected.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}
