// Wild Mountain Immigration, per-page SEO helpers (metadata + JSON-LD).
// Follows _seo-audit/PAGE-SEO-MASTER-CHECKLIST.md + ON-PAGE-SPEC.md.
import type { Metadata } from "next";
import { site } from "./site";

const ORG_ID = `${site.url}/#org`;
const PERSON_ID = `${site.url}/#nicola`;

/** Build per-page Metadata. Title ≤60, description ≤155 (enforced by caller). */
export function pageMeta(opts: {
  title: string;          // <title> WITHOUT brand suffix (layout template appends it); keep page title ≤ ~32 chars so rendered ≤60
  titleAbsolute?: string; // full <title> that BYPASSES the brand template; use on keyword-led pages, keep ≤60 chars
  description: string;    // ≤155
  path: string;           // e.g. "/express-entry"
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const url = opts.path === "/" ? site.url : `${site.url}${opts.path}`;
  const ogTitle = opts.titleAbsolute ?? `${opts.title} | ${site.name}`;
  return {
    title: opts.titleAbsolute ? { absolute: opts.titleAbsolute } : opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "article",
      title: ogTitle,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "en_CA",
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: opts.description },
    robots: { index: true, follow: true },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? site.url : `${site.url}${c.path}`,
    })),
  };
}

/** A Service offered by the practice, tied to the Organization entity. */
export function serviceLd(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    url: `${site.url}${opts.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Canada" },
    audience: { "@type": "Audience", audienceType: "Prospective immigrants to Canada" },
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Article/guide node with author = Nicola, publisher = Org. */
export function articleLd(opts: {
  headline: string;
  description: string;
  path: string;
  dateModified: string; // ISO e.g. "2026-05-31"
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    mainEntityOfPage: `${site.url}${opts.path}`,
    datePublished: opts.datePublished ?? opts.dateModified,
    dateModified: opts.dateModified,
    author: { "@id": PERSON_ID },
    reviewedBy: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-CA",
  };
}
