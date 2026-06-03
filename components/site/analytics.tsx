"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Google Analytics 4, gated behind NEXT_PUBLIC_GA_ID. With no ID set it renders
 * nothing, so the site ships analytics-ready and you just paste the Measurement
 * ID when you're ready. The initial page_view comes from gtag config; we send
 * one manually on each client-side route change after that.
 */
export function Analytics() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!GA_ID) return;
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pathname });
    }
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
