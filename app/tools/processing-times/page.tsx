import type { Metadata } from "next";
import { Clock } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/tools/processing-times";
const UPDATED = "May 2026";

// The live, authoritative source for every figure on this page.
const IRCC_TIMES_URL =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html";

export const metadata: Metadata = pageMeta({
  title: "IRCC Processing Times 2026",
  titleAbsolute: "IRCC Processing Times 2026: Canada Guide",
  description:
    "IRCC processing times by line: Express Entry, PNP, spousal sponsorship, study and work permits, citizenship and PR cards. See current estimates inside.",
  path: PATH,
  keywords: [
    "ircc processing times",
    "canada immigration processing times",
    "ircc processing times 2026",
    "express entry processing time",
    "spousal sponsorship processing time",
    "study permit processing time",
  ],
});

const faqs = [
  {
    q: "What are the current IRCC processing times?",
    a: "As a rough 2026 guide, Express Entry (federal skilled) is around 6 months from invitation, a study permit varies widely by country, a visitor visa runs from a few weeks to several months depending on the office, spousal sponsorship is around 12 months, and citizenship grants are often near 12 months. These are illustrative averages that shift constantly. The only accurate figures are on IRCC's live processing-times tool on canada.ca, which we always check before quoting a timeline.",
  },
  {
    q: "How does IRCC calculate processing times?",
    a: "For most lines, IRCC publishes a time based on how long it took to finish a large share of recently completed applications of that type, so the figure is backward-looking rather than a promise about your file. For some programs it shows a service standard instead, a target IRCC aims to meet. Because the number reflects past completions and changes as new data comes in, your own application can be faster or slower than the posted estimate.",
  },
  {
    q: "Why do processing times vary so much?",
    a: "Times vary with application volumes, annual admission targets under the Immigration Levels Plan, the completeness and complexity of each file, where it is processed, and whether extra steps such as background or medical checks are needed. Country-specific demand also matters, the same permit can show very different times by visa office. A complete, well-documented application avoids the delays that incomplete files cause, but it cannot change the underlying queue.",
  },
  {
    q: "Does using a consultant make processing faster?",
    a: "No one can make IRCC process faster, and any consultant who promises that is not being honest. What a licensed RCIC can do is prevent the avoidable delays: missing documents, errors, and requests for more information that add weeks or months. We build a complete, accurate application that moves through the queue without self-inflicted hold-ups, but the underlying processing time is set by IRCC, not by us. We never guarantee timelines or outcomes.",
  },
  {
    q: "Why is my application taking longer than the posted time?",
    a: "The posted time is an average of recently completed cases, so some files finish faster and some slower. Common reasons for a longer wait include incomplete documents, a request from IRCC for more information, additional background or medical checks, higher application volumes, or a busier visa office. The estimate is also recalculated as new data arrives, so the figure you saw at submission can change while you wait. Check the live tool for the current estimate.",
  },
  {
    q: "Are these processing times guaranteed?",
    a: "No. Processing times are estimates, not guarantees or deadlines. IRCC can take longer or shorter than the posted figure, and the numbers change frequently as volumes and targets shift. Treat any timeline, including the illustrative table on this page, as a planning guide only. For your specific application type and country, always use the live IRCC processing-times tool on canada.ca, which is the single source of truth.",
  },
  {
    q: "Where can I check the official processing times?",
    a: "IRCC publishes a live processing-times tool on canada.ca where you select your application type and, where relevant, your country to see the current estimate. That tool is the authoritative source and updates regularly. The table on this page is a clearly dated snapshot for orientation only; before you rely on any timeline, confirm it against the live IRCC tool.",
  },
  {
    q: "Can I get my application processed urgently?",
    a: "Some application types have limited urgent or priority processing in specific circumstances, with their own eligibility rules and evidence requirements set by IRCC. It is not available for every line, and meeting the criteria is essential. Because the rules and availability change, we check the current options on canada.ca for your specific situation rather than assuming urgent processing is possible. Most files simply follow the standard queue.",
  },
];

export default function ProcessingTimesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "IRCC Processing Times 2026, By Application Line",
            description:
              "IRCC processing times by line: Express Entry, PNP, spousal sponsorship, study and work permits, citizenship and PR cards, plus why they vary and how to check live.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Immigration application timeline planning",
            description:
              "Canada immigration processing times by line: Express Entry, PNP, spousal sponsorship, study and work permits, citizenship and PR cards, plus why they vary.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Resources, Free Tools"
        crumbs={[
          { name: "Free Tools", path: "/tools" },
          { name: "Processing Times", path: PATH },
        ]}
        title={<>IRCC <span className="text-brand">processing times</span></>}
        lede={
          <p>
            <strong>IRCC processing times</strong> are the government&apos;s estimates of how long an application
            takes, from Express Entry and spousal sponsorship to study permits and citizenship. This page explains
            how IRCC calculates them, why they vary, and gives a clearly dated reference table. Always confirm the
            live figures on canada.ca.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools", label: "All free tools" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Clock className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Avoid the avoidable delays</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC builds a complete, accurate application so your file is not held up by missing
                documents or errors.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Free tools", href: "/tools", note: "CRS, AAIP and more" },
                { label: "Express Entry overview", href: "/express-entry", note: "Around 6 months from invitation" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Nomination plus federal processing" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "Spousal timelines explained" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your score in 2 minutes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox label="Quick answer, as of May 2026">
            <strong>IRCC processing times</strong> are government estimates that vary by application and
            country. As a rough guide: Express Entry around <strong>6 months</strong>, spousal sponsorship around{" "}
            <strong>12 months</strong>, and citizenship near <strong>12 months</strong>, with study and visitor
            permits varying widely. Because these figures change constantly, always check the live tool on canada.ca.
          </AnswerBox>

          <KeyTakeaways
            summary="IRCC processing times are the government's estimates of how long an application takes, and they vary widely by line and country. As a rough 2026 guide, Express Entry runs around 6 months, spousal sponsorship around 12 months, and citizenship near 12 months, while study, work and visitor permits vary by visa office. IRCC bases most estimates on how long recently completed applications took, so they are backward-looking and change constantly. The live IRCC processing-times tool on canada.ca is the only authoritative source."
            items={[
              <><strong>IRCC processing times</strong> are estimates, not guarantees, and they vary by application type and country.</>,
              <>Rough 2026 guide: <a href="/express-entry">Express Entry</a> ~6 months, spousal sponsorship ~12 months, citizenship ~12 months.</>,
              <>IRCC mostly calculates them from <strong>recently completed applications</strong>, so the figure is backward-looking.</>,
              <>Times vary with <strong>volumes, admission targets, file completeness, processing office and extra checks</strong>.</>,
              <>The <strong>live IRCC tool on canada.ca</strong> is the only authoritative source; the table below is a dated snapshot.</>,
            ]}
          />

          <p className="text-sm text-ink-faint">
            <strong>Snapshot dated:</strong> May&nbsp;2026. The figures below are illustrative planning estimates for
            orientation only. For the current time on your specific application and country, use the live{" "}
            <a href={IRCC_TIMES_URL} target="_blank" rel="noopener noreferrer">IRCC processing-times tool</a> on
            canada.ca, which remains the authoritative source.
          </p>

          <h2>What are the current IRCC processing times?</h2>
          <p>
            The table below is a clearly dated reference of <strong>IRCC processing times</strong> across the major
            immigration lines. Treat every figure as an
            approximate planning estimate rather than a deadline. These times move constantly and depend heavily on
            your country and the specific stream. Before you rely on any timeline, confirm it against the live{" "}
            <a href={IRCC_TIMES_URL} target="_blank" rel="noopener noreferrer">IRCC processing-times tool</a>.
          </p>
          <DataTable
            headers={["Application line", "Illustrative time (May 2026)", "Notes"]}
            rows={[
              ["Express Entry (federal skilled)", "~6 months", "From invitation to a decision; complete files only"],
              ["Provincial Nominee Program (PNP)", "Nomination + federal stage", "Province processes the nomination, then IRCC the PR application"],
              ["Spousal sponsorship", "~12 months", "Inland and outland timelines differ by office"],
              ["Post-Graduation Work Permit (PGWP)", "Varies", "Often faster when applied for from inside Canada"],
              ["Study permit", "Varies widely by country", "Strongly affected by the responsible visa office"],
              ["Visitor visa (TRV)", "Weeks to several months", "Very country-dependent"],
              ["Citizenship (grant)", "~12 months", "From a complete application to the ceremony"],
              ["PR card (new or renewal)", "Varies", "Timelines differ for first cards and renewals"],
            ]}
            caption="Illustrative Canada immigration processing times (snapshot, May 2026). These are planning estimates only, check the live IRCC tool on canada.ca for current, country-specific figures."
          />
          <Callout type="brand" title="Always check the live tool">
            This table is a dated snapshot for orientation. Processing times change frequently and vary by country
            and stream, so the live{" "}
            <a href={IRCC_TIMES_URL} target="_blank" rel="noopener noreferrer">IRCC processing-times tool</a> on
            canada.ca is the only place to get the figure that applies to your exact situation.
          </Callout>

          <h2>How does IRCC calculate processing times?</h2>
          <p>
            For most application lines, the IRCC processing time you see is based on{" "}
            <strong>how long it took to finish a large share of recently completed applications</strong> of that
            type. In other words, the posted number looks backward at cases that have already been decided, rather
            than forward at your file. For some programs IRCC instead shows a <strong>service standard</strong>, a
            target it aims to meet. Either way, the figure is an estimate. Because it is recalculated as new
            completions come in, the number you see at submission can change while you wait, and your own file can
            finish faster or slower than the average.
          </p>

          <h2>Why do processing times vary so much?</h2>
          <p>
            Several forces push times up and down at once, which is why two similar applications can take very
            different amounts of time.
          </p>
          <ul>
            <li><strong>Application volumes and admission targets.</strong> Canada&apos;s annual Immigration Levels Plan sets how many people are admitted in each category, and high demand lengthens queues.</li>
            <li><strong>File completeness and complexity.</strong> Incomplete or complex applications take longer, and a request for more information can add weeks or months.</li>
            <li><strong>Processing office and country.</strong> The same permit can show very different times depending on the responsible visa office and country-specific demand.</li>
            <li><strong>Extra steps.</strong> Biometrics, background checks, security screening and the medical exam can each extend a timeline beyond the headline figure.</li>
          </ul>
          <Callout type="info" title="Completeness is the part you control">
            You cannot change the queue, but you can control your own file. A complete, accurate, well-documented
            application avoids the requests for more information and resubmissions that cause self-inflicted delays,
            which is the single biggest timing factor within your control.
          </Callout>

          <h2>Can a consultant make processing faster?</h2>
          <p>
            No one can make IRCC process faster, and any consultant who promises a guaranteed timeline is not being
            straight with you. What a licensed RCIC genuinely does is remove the avoidable delays: the missing
            documents, the errors and the requests for more information that quietly add weeks or months to a file.
            Working under a licensed RCIC (CICC #R706497), our team builds a complete and accurate application so it
            moves through the queue without self-inflicted hold-ups. The underlying processing time, though, is set
            by IRCC, and we never guarantee timelines or outcomes.
          </p>

          <h2>How to read the live IRCC tool</h2>
          <p>
            On canada.ca, IRCC&apos;s processing-times tool lets you select your application type and, where it
            matters, your country, then shows the current estimate. A few habits make it more useful:
          </p>
          <ul>
            <li>Choose the exact application type and stream, since closely related lines can have very different times.</li>
            <li>Select your country or visa office where prompted, because the same permit varies widely by location.</li>
            <li>Re-check before key decisions, as the figure updates regularly as new completions are counted.</li>
            <li>Read the number as an average rather than a promise, because your file can land either side of it.</li>
          </ul>
          <p>
            The processing-times tool tells you the current estimate for a line, but it does not track your own
            file. To follow your application status, sign in to your IRCC secure account or the IRCC tracker, where
            available for your application type, to see the stages your file has reached.
          </p>

          <h2>How Wild Mountain helps you plan around timelines</h2>
          <p>
            We use realistic, current timelines to plan your case, sequencing steps such as language tests, an{" "}
            <a href="/express-entry/educational-credential-assessment">ECA</a>, a{" "}
            <a href="/pnp">provincial nomination</a> and your{" "}
            <a href="/express-entry">Express Entry</a> profile so nothing expires at the wrong moment. We also build a
            complete application that avoids the delays incomplete files cause. We work entirely online and never
            guarantee timelines or outcomes. Because <strong>IRCC processing times</strong> change constantly, we
            always confirm the live{" "}
            <a href={IRCC_TIMES_URL} target="_blank" rel="noopener noreferrer">processing-times tool</a> on canada.ca
            before quoting any estimate.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Plan your move around realistic timelines"
        sub="Get started with a licensed RCIC for honest, current advice on how long your route is likely to take and how to keep your file moving."
      />
    </>
  );
}
