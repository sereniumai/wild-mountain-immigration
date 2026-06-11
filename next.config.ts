import type { NextConfig } from "next";
import path from "node:path";

/**
 * 301 redirect map: old WordPress site to new site.
 * Preserves backlink equity by pointing every legacy URL at its most relevant
 * new page (never a 404, never the homepage unless nothing better fits).
 * Source paths are written without trailing slashes (Next normalises them).
 * Specific rules are listed BEFORE wildcard catch-alls so they win.
 */
const redirectPairs: [string, string][] = [
  // ---- top-level pages & services ----
  ["/visitor", "/visit"],
  ["/canadian-tourist-visa", "/visit/visitor-visa"],
  ["/canadian-super-visa", "/family-sponsorship/super-visa"],
  ["/terms-of-use", "/terms"],
  ["/services/immigrate-to-alberta", "/alberta-immigration"],
  ["/services/labour-market-impact-assessment", "/work-permits/lmia"],
  ["/canadian-city-guides", "/immigrate"],
  ["/faqs", "/services"],

  // ---- immigrate cluster ----
  ["/immigrate/canadian-citizenship", "/citizenship"],
  ["/immigrate/british-columbia-provincial-nominee-program", "/pnp/british-columbia"],
  ["/immigrate/alberta-advantage-immigration-program", "/alberta-immigration"],
  ["/immigrate/express-entry", "/express-entry"],
  ["/immigrate/spousal-sponsorship-canada", "/family-sponsorship/spousal-sponsorship"],

  // ---- AAIP streams (legacy root path) ----
  ["/alberta-advantage-immigration-program/alberta-express-entry-stream", "/alberta-immigration/express-entry-stream"],
  ["/alberta-advantage-immigration-program/alberta-opportunity-stream", "/alberta-immigration/opportunity-stream"],
  ["/alberta-advantage-immigration-program/alberta-accelerated-tech-pathway", "/alberta-immigration/accelerated-tech-pathway"],

  // ---- express entry tools / draws / reps ----
  ["/express-entry/express-entry-crs-score-calculator", "/tools/crs-calculator"],
  ["/express-entry/clb-calculator", "/express-entry/language-requirements"],
  ["/express-entry/latest-express-entry-draw", "/express-entry/draws"],
  ["/express-entry/use-of-a-representative", "/rcic-vs-immigration-lawyer"],

  // ---- work cluster ----
  ["/work-in-canada", "/work-permits"],
  ["/work/bridging-open-work-permit", "/work-permits/bridging-open-work-permit"],
  ["/work/post-graduation-work-permit", "/work-permits/pgwp"],
  ["/work/intra-company-transfers", "/work-permits/intra-company-transfer"],
  ["/work/international-experience-canada", "/work-permits/international-experience-canada"],
  ["/work/labour-market-impact-assessment", "/work-permits/lmia"],

  // ---- study cluster ----
  ["/study/can-i-work-24-hours-as-a-student-in-canada", "/study-permit/work-while-studying"],
  ["/study", "/study-permit"],

  // ---- resources / lead magnets / move-from ----
  ["/resources/express-entry-download", "/express-entry"],
  ["/resources/express-entry-ebook", "/express-entry"],
  ["/how-to-move-to-canada", "/move-to-canada"],
  // Old country pages that now have a dedicated new page. Both the "move-to-canada-from-X"
  // and "life-in-canada-vs-X" legacy slugs point at the matching country page. Countries
  // without a dedicated page fall through to the /move-from/:slug* catch-all below.
  ["/move-from/move-to-canada-from-usa", "/move-to-canada/from-the-usa"],
  ["/move-from/move-to-canada-from-uk", "/move-to-canada/from-the-uk"],
  ["/move-from/life-in-canada-vs-uk", "/move-to-canada/from-the-uk"],
  ["/move-from/move-to-canada-from-australia", "/move-to-canada/from-australia"],
  ["/move-from/life-in-canada-vs-australia-complete-expat-comparison", "/move-to-canada/from-australia"],
  ["/move-from/move-to-canada-from-ireland", "/move-to-canada/from-ireland"],
  ["/move-from/life-in-canada-vs-ireland-comparison", "/move-to-canada/from-ireland"],

  // ---- WordPress theme demo pages (no value) ----
  ["/portfolio-agency", "/"],
  ["/creative-persona", "/"],
  ["/creative-software", "/"],
  ["/accordion-panels", "/"],
  ["/popups", "/"],
  ["/partners", "/"],

  // ---- city guides (geo-relevant targets) ----
  ["/city-guides/calgary", "/immigration-consultant-calgary"],
  ["/city-guides/vancouver", "/pnp/british-columbia"],
  ["/city-guides/edmonton", "/alberta-immigration-consultant"],
  ["/city-guides/toronto", "/pnp/ontario"],

  // ---- FAQ posts: consultants / RCIC ----
  ["/faqs/immigration-consultant-vs-lawyer", "/rcic-vs-immigration-lawyer"],
  ["/faqs/do-i-need-an-immigration-lawyer-to-move-to-canada", "/rcic-vs-immigration-lawyer"],
  ["/faqs/questions-to-ask-immigration-consultant-canada", "/rcic-vs-immigration-lawyer"],
  ["/faqs/how-to-choose-a-canadian-immigration-consultant", "/rcic-vs-immigration-lawyer"],
  ["/faqs/how-to-verify-immigration-consultant", "/rcic-vs-immigration-lawyer"],
  ["/faqs/are-immigration-consultants-worth-it", "/rcic-vs-immigration-lawyer"],
  ["/faqs/canadian-immigration-consultant-role", "/rcic-vs-immigration-lawyer"],
  ["/faqs/ghost-consultant", "/rcic-vs-immigration-lawyer"],
  ["/faqs/why-are-immigration-consultants-so-expensive", "/fees"],

  // ---- FAQ posts: express entry / crs ----
  ["/faqs/pnp-vs-express-entry", "/pnp"],
  ["/faqs/good-crs-score-for-canada-pr-2024", "/express-entry/comprehensive-ranking-system"],
  ["/faqs/language-requirements-express-entry-canada", "/express-entry/language-requirements"],
  ["/faqs/english-test-for-express-entry", "/express-entry/language-requirements"],
  ["/faqs/celpip-vs-ielts", "/express-entry/language-requirements"],
  ["/faqs/how-to-find-your-noc-code", "/express-entry/noc-teer"],
  ["/faqs/six-selection-factors", "/express-entry/federal-skilled-worker"],
  ["/faqs/proof-of-funds-express-entry", "/study-permit/proof-of-funds"],
  ["/faqs/bank-statement-for-express-entry-proof-of-funds", "/study-permit/proof-of-funds"],
  ["/faqs/proof-of-work-experience", "/express-entry"],
  ["/faqs/can-i-create-2-express-entry-profiles", "/express-entry"],

  // ---- FAQ posts: family / sponsorship ----
  ["/faqs/how-long-does-spousal-sponsorship-take-in-canada-2024", "/family-sponsorship/spousal-sponsorship"],
  ["/faqs/common-mistakes-made-on-spousal-sponsorship-application-2024", "/family-sponsorship/spousal-sponsorship"],
  ["/faqs/can-i-leave-canada-after-applying-for-spousal-sponsorship", "/family-sponsorship/spousal-sponsorship"],
  ["/faqs/what-is-the-lonely-canadian-rule", "/family-sponsorship/spousal-sponsorship"],
  ["/faqs/sponsor-boyfriend-to-canada", "/family-sponsorship/conjugal-partner"],
  ["/faqs/what-is-conjugal-relationship-explained", "/family-sponsorship/conjugal-partner"],
  ["/faqs/benefits-of-marrying-a-canadian-citizen", "/family-sponsorship/spousal-sponsorship"],
  ["/faqs/how-long-financially-responsible-for-someone-you-sponsor-canada", "/family-sponsorship/eligibility-requirements"],
  ["/faqs/canada-super-visa-processing-time-guide", "/family-sponsorship/super-visa"],
  ["/faqs/imm-5409", "/family-sponsorship"],

  // ---- FAQ posts: work / lmia ----
  ["/faqs/pgwp-requirements-2024", "/work-permits/pgwp"],
  ["/faqs/who-can-apply-for-bridging-open-work-permit", "/work-permits/bridging-open-work-permit"],
  ["/faqs/what-is-maintained-status", "/work-permits/bridging-open-work-permit"],
  ["/faqs/what-is-flagpoling", "/visit"],
  ["/faqs/how-much-does-lmia-cost", "/work-permits/lmia"],
  ["/faqs/how-many-lmias-can-an-employer-get-in-canada", "/work-permits/lmia"],
  ["/faqs/lmia-process", "/work-permits/lmia"],
  ["/faqs/positive-labour-market-impact-assessment-guide", "/work-permits/lmia"],
  ["/faqs/lmia-employer-requirements-canada", "/work-permits/lmia"],
  ["/faqs/lmia-business-legitimacy", "/work-permits/lmia"],
  ["/faqs/understanding-lmia-cap", "/work-permits/lmia"],
  ["/faqs/labour-market-impact-assessment-processing-time-2024", "/work-permits/lmia"],

  // ---- FAQ posts: citizenship / PR ----
  ["/faqs/can-i-be-a-dual-citizen", "/citizenship"],
  ["/faqs/advantages-of-canadian-citizenship", "/citizenship"],
  ["/faqs/canadian-citizen-vs-permanent-resident", "/citizenship/requirements"],
  ["/faqs/benefits-of-permanent-residency-in-canada", "/immigrate/permanent-residence"],
  ["/faqs/cover-letter-for-permanent-residence-application", "/immigrate/permanent-residence"],

  // ---- FAQ posts: eligibility / general / out-of-scope ----
  ["/faqs/age-limit-for-canadian-immigration", "/express-entry/comprehensive-ranking-system"],
  ["/faqs/can-you-immigrate-to-canada-if-you-are-over-50", "/express-entry/comprehensive-ranking-system"],
  ["/faqs/what-is-the-cut-off-age-to-move-to-canada", "/express-entry/comprehensive-ranking-system"],
  ["/faqs/5-easiest-ways-to-immigrate-to-canada-2024", "/immigrate"],
  ["/faqs/10-reasons-for-moving-to-canada", "/move-to-canada"],
  ["/faqs/why-do-people-immigrate-to-canada", "/move-to-canada"],
  ["/faqs/how-much-bank-balance-is-required-for-canada", "/study-permit/proof-of-funds"],
  ["/faqs/how-long-is-medical-valid-for-canada-immigration", "/immigrate"],
  ["/faqs/what-crimes-can-get-you-deported-from-canada", "/immigrate"],
  ["/faqs/gcms-notes", "/immigrate"],
  ["/faqs/how-to-renew-canadian-passport-2024", "/citizenship"],
  ["/faqs/top-10-highest-paying-jobs-in-canada-2024", "/immigrate"],
  ["/faqs/top-10-safest-cities-in-canada-2024", "/immigrate"],

  // ---- blog: work / pgwp / lmia ----
  ["/blog/work-in-canada-without-an-lmia", "/work-permits"],
  ["/blog/top-6-companies-lmia-exempt-work-permits-canada", "/work-permits"],
  ["/blog/lmia-new-rules-2024", "/work-permits/lmia"],
  ["/blog/trucking-industry-lmia-abuse", "/work-permits/lmia"],
  ["/blog/pgwp-extension-2024", "/work-permits/pgwp"],
  ["/blog/pgwp-extension-2023", "/work-permits/pgwp"],
  ["/blog/2024-pgwp-eligibility-guidelines", "/work-permits/pgwp"],
  ["/blog/international-experience-canada-2024-deadline", "/work-permits/international-experience-canada"],
  ["/blog/work-a-ski-season-in-canada", "/work-permits/international-experience-canada"],
  ["/blog/cover-letter-for-ski-season", "/work-permits/international-experience-canada"],
  ["/blog/canada-reduces-sowp-eligibility", "/family-sponsorship/spousal-open-work-permit"],

  // ---- blog: express entry / pnp draws & news ----
  ["/blog/express-entry-draw-2024", "/express-entry/draws"],
  ["/blog/november-18-2024-express-entry-draw", "/express-entry/draws"],
  ["/blog/express-entry-draw-327-healthcare-workers-2024", "/express-entry/draws"],
  ["/blog/canada-express-entry-draw-400-cec-invitations-crs-547", "/express-entry/draws"],
  ["/blog/express-entry-draw-317-october-2024-cec", "/express-entry/draws"],
  ["/blog/express-entry-changes-2024", "/express-entry"],
  ["/blog/canada-new-pnp-draw-1613-invitations", "/pnp/draws"],
  ["/blog/july-2024-bcs-latest-pnp-draw", "/pnp/british-columbia"],
  ["/blog/209-family-physicians-invited-by-ontario", "/pnp/ontario"],

  // ---- blog: alberta / banff / pr programs ----
  ["/blog/new-pr-program-for-alberta-police-officers", "/alberta-immigration/law-enforcement-pathway"],
  ["/blog/alberta-to-nominate-immigrants", "/alberta-immigration"],
  ["/blog/is-alberta-a-good-place-to-live", "/alberta-immigration"],
  ["/blog/move-to-banff", "/immigration-consultant-banff"],
  ["/blog/banff-history-lesson-101", "/immigration-consultant-banff"],
  ["/blog/gap-year-canada-banff", "/immigration-consultant-banff"],
  ["/blog/permanent-residence-semi-skilled-workers-canada", "/immigrate/permanent-residence"],
  ["/blog/how-long-can-canadian-permanent-residents-stay-abroad", "/immigrate/residency-obligation"],

  // ---- blog: family / visit ----
  ["/blog/canada-parents-and-grandparents-program-2022", "/family-sponsorship/parents-grandparents"],
  ["/blog/super-visa-vs-visitor-visa", "/family-sponsorship/super-visa"],
  ["/blog/canada-temporary-resident-visa-guidelines", "/visit/visitor-visa"],
  ["/blog/new-rule-no-work-permits-for-visitors-canada-2024", "/visit"],
  ["/blog/canada-lowers-family-sponsorship-targets-2025-2027", "/family-sponsorship"],

  // ---- blog: move-to / general guides ----
  ["/blog/moving-to-canada-checklist", "/move-to-canada"],
  ["/blog/12-reasons-to-move-to-canada", "/move-to-canada"],
  ["/blog/best-time-to-move-to-canada", "/move-to-canada"],
  ["/blog/moving-to-canada-2024-election-guide", "/move-to-canada"],
  ["/blog/new-immigration-pathways-canada-2025", "/immigrate"],

  // ---- blog: precise targets for the remainder (better than the /immigrate catch-all) ----
  ["/blog/living-and-working-in-ontario", "/pnp/ontario"],
  ["/blog/celebrating-permanent-residency", "/immigrate/permanent-residence"],
  ["/blog/tr-to-pr-2022", "/immigrate/permanent-residence"],
  ["/blog/canada-skilled-trades-crisis-economic-impact-solutions", "/express-entry/federal-skilled-trades"],
  ["/blog/faster-judicial-review-refused-study-permits", "/study-permit"],
  ["/blog/new-limits-temporary-workers-canada-2024", "/work-permits/temporary-foreign-worker-program"],
  ["/blog/new-minimum-wage-rates-ontario-three-provinces-2024", "/work-permits"],
  ["/blog/virtual-job-fair-for-bilingual-candidates-canada", "/work-permits"],
  ["/blog/trump-impact-immigration-canada-trade-economic-relations", "/move-to-canada/from-the-usa"],
  ["/blog/a-helpful-post-arrival-checklist-for-newcomers", "/move-to-canada"],
  ["/blog/best-place-to-live-in-canada-for-software-engineers", "/move-to-canada"],
  ["/blog/two-canadian-cities-in-top-livability-rankings", "/move-to-canada"],
  ["/blog/canada-top-5-globally-work-life-balance-2024", "/move-to-canada"],
  ["/blog/canada-ranks-7th-most-advanced-countries-2024", "/move-to-canada"],
  ["/blog/how-do-immigrants-help-the-economy-in-canada", "/move-to-canada"],
  ["/blog", "/immigrate"],

  // ---- wildcard catch-alls (must come after specific rules) ----
  ["/alberta-advantage-immigration-program/:slug*", "/alberta-immigration"],
  ["/labour-market-impact-assessment/:slug*", "/work-permits/lmia"],
  ["/move-from/:slug*", "/move-to-canada"],
  ["/work/:slug*", "/work-permits"],
  ["/study/:slug*", "/study-permit"],
  ["/calgary/:slug*", "/immigration-consultant-calgary"],
  ["/canmore/:slug*", "/"],
  ["/vancouver/:slug*", "/pnp/british-columbia"],
  ["/edmonton/:slug*", "/alberta-immigration-consultant"],
  ["/toronto/:slug*", "/pnp/ontario"],
  ["/city-guides/:slug*", "/immigrate"],
  ["/resources/:slug*", "/services"],
  ["/faqs/:slug*", "/immigrate"],
  ["/blog/:slug*", "/immigrate"],
];

/* Content-Security-Policy. The site uses Google Tag Manager as a marketing hub
   (it loads GA4, Google Ads conversion/remarketing and more, and new tags
   are added without code changes), so a script/connect/img allow-list would
   silently break paid conversion tracking the moment a tag changes. We therefore
   apply only the directives that harden without fighting GTM: frame-ancestors and
   X-Frame-Options stop clickjacking (the actual audit finding), object-src blocks
   plugin/embed injection, base-uri blocks <base> hijacking, and form-action keeps
   form posts same-origin. These have no impact on third-party script loading. */
const csp = [
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  // Pin the workspace root (multiple lockfiles exist higher up the tree)
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Serve next-gen formats (smaller payloads, better LCP / Lighthouse).
    formats: ["image/avif", "image/webp"],
    // Allow-list the quality levels we use. Next 16 defaults to [75] only, so
    // decorative/overlaid images can drop to 50-60 to shed bytes on mobile.
    qualities: [50, 60, 75],
    minimumCacheTTL: 2_592_000, // 30 days
    // All images are self-hosted under /public, so no remotePatterns are needed.
  },
  async redirects() {
    // statusCode 301 (true "Moved Permanently") for clean backlink-equity transfer.
    return [
      // Canonical host: force www -> apex so there is one indexable origin that
      // matches site.url and every canonical / sitemap / schema URL. Cloudflare or
      // the host can also enforce this (and http -> https) at the edge later; this
      // is a safe in-app fallback that only fires on the www host.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.wildmountainimmigration.com" }],
        destination: "https://wildmountainimmigration.com/:path*",
        statusCode: 301,
      },
      // Legacy WordPress URLs -> closest relevant new page.
      ...redirectPairs.map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301,
      })),
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
