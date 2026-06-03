import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { LiveDraws } from "@/components/content/live-draws";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/draws";
const UPDATED = "May 2026";

// Refresh the cached page from IRCC's open-data feed every 6 hours (ISR).
export const revalidate = 21600;

// Live source of truth for every figure on this page.
const IRCC_ROUNDS_URL =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html";

export const metadata: Metadata = pageMeta({
  title: "Latest Express Entry Draw 2026",
  titleAbsolute: "Latest Express Entry Draw 2026: Results & CRS Cut-Off",
  description:
    "Latest Express Entry draw 2026: recent IRCC round results, CRS cut-off, ITAs and draw history. Reviewed by an RCIC and updated after each IRCC round.",
  path: PATH,
  keywords: [
    "latest express entry draw",
    "express entry draws",
    "express entry draws 2026",
    "latest express entry draw results",
    "express entry draw history 2026",
    "express entry crs cut-off 2026",
    "when is the next express entry draw",
  ],
});

const faqs = [
  {
    q: "When is the next Express Entry draw?",
    a: "IRCC does not publish a fixed calendar, but draws run on a roughly two-week rhythm, and most rounds fall on a Tuesday or Wednesday. With the most recent round on May 28, 2026, the next Express Entry draw is expected in early-to-mid June 2026. The only confirmed schedule is the official IRCC rounds-of-invitations page, which we re-check and re-date this tracker against after every round.",
  },
  {
    q: "What were the latest Express Entry draw results?",
    a: "The latest Express Entry draw was Round #418 on May 28, 2026, a French-language proficiency draw that issued 4,500 invitations to apply (ITAs) with a CRS cut-off of 409. The IRCC draw before it, #417 on May 27, was a Canadian Experience Class (CEC) draw of 3,000 ITAs at a cut-off of 518. Figures change every round, so confirm the current numbers on the live IRCC rounds page.",
  },
  {
    q: "How often does IRCC hold Express Entry draws?",
    a: "Roughly every two weeks, though the pace varies. In busy stretches IRCC has held two or three rounds in a single week, mixing a program-specific draw with one or more category-based draws. There is no guaranteed frequency. The cadence is set by IRCC's admission targets and the size of each category pool.",
  },
  {
    q: "What is a good CRS score to get invited in 2026?",
    a: "There is no fixed pass mark; the cut-off is set fresh at each draw by how many people are invited. In 2026, Canadian Experience Class rounds have landed around 507–518, while category-based draws have invited candidates from the high 100s (Physicians) to the mid-400s (Healthcare, Trades) and around 393–419 for French. A provincial nomination adds 600 points, which is usually enough to clear the cut-off in a PNP-specific draw.",
  },
  {
    q: "Why are there no general all-program Express Entry draws in 2026?",
    a: "Through 2026, IRCC has run only program-specific rounds (Canadian Experience Class and Provincial Nominee Program) and category-based rounds (French, Healthcare, Trades and others). No general all-program draw has been held this year. This reflects IRCC's stated emphasis on in-Canada candidates and in-demand occupations. The mix can change at any round, so check the live IRCC page.",
  },
  {
    q: "Where can I see the official Express Entry draw history?",
    a: "The authoritative record is IRCC's rounds-of-invitations page on canada.ca, which lists every round number, date, category, number of ITAs and CRS cut-off. This tracker mirrors the recent 2026 rounds for quick reference, but the IRCC page is always the source of truth for live figures.",
  },
  {
    q: "Does a category-based draw need a higher or lower CRS score?",
    a: "Category-based draws often invite candidates with lower CRS scores than a comparable general round, because the pool is restricted to people who meet the category (for example, qualifying healthcare or trades experience, or French at NCLC 7+). You still need to be in the Express Entry pool and meet the category criteria, including the qualifying-experience requirement, which is now 12 months for most 2026 categories.",
  },
];

export default function ExpressEntryDrawsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Latest Express Entry Draw 2026: Results & Draw History",
            description:
              "Latest Express Entry draw 2026: the most recent IRCC round results, CRS cut-off, ITAs and draw history. Reviewed by an RCIC and updated after each IRCC round.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-01-08",
          }),
          serviceLd({
            name: "Express Entry profile & CRS optimisation",
            description:
              "Latest Express Entry draw results: the most recent 2026 round, CRS cut-off, ITAs and draw history. Reviewed by an RCIC. Updated after each IRCC round.",
            path: PATH,
            serviceType: "Express Entry immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Express Entry", path: "/express-entry" },
          { name: "Draw Results", path: PATH },
        ]}
        title={<><span className="text-brand">Latest</span> Express Entry draw: 2026 results</>}
        lede={
          <p>
            The <strong>latest Express Entry draw</strong> was Round&nbsp;#418 on May&nbsp;28,&nbsp;2026, a
            French-language IRCC round of 4,500 invitations at a CRS cut-off of 409. This evergreen tracker re-dates
            after every official IRCC round so you always see the most recent results.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <CalendarClock className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Score below the cut-off?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can find the CRS points you&apos;re missing and the draws you actually qualify for.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry (overview)", href: "/express-entry", note: "How the whole system works" },
                { label: "Category-based draws", href: "/express-entry/category-based-draws", note: "French, healthcare, trades & more" },
                { label: "Comprehensive Ranking System", href: "/express-entry/comprehensive-ranking-system", note: "How your CRS score is built" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your score in 2 minutes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox label="Latest draw, updated May 31, 2026">
            As of the <strong>May&nbsp;28,&nbsp;2026</strong> round (#418), the CRS cut-off was{" "}
            <strong>409</strong> for a French-language draw of <strong>4,500&nbsp;ITAs</strong>. The most recent
            Canadian Experience Class round (#417, May&nbsp;27) cut off at <strong>518</strong>. Source:{" "}
            <a href={IRCC_ROUNDS_URL} target="_blank" rel="noopener noreferrer">
              IRCC rounds of invitations
            </a>{" "}
            (canada.ca), accessed May&nbsp;31,&nbsp;2026. Figures change every draw, so always confirm the live page.
          </AnswerBox>

          <KeyTakeaways
            summary="The latest Express Entry draw was Round #418 on May 28, 2026, a French-language IRCC draw of 4,500 invitations with a CRS cut-off of 409. Each round has a CRS cut-off, a number of invitations issued and a category, and the figures change every round. This tracker re-dates after each official IRCC round."
            items={[
              <>The <strong>latest Express Entry draw</strong> was Round&nbsp;#418 on May&nbsp;28,&nbsp;2026: French, 4,500 ITAs, CRS cut-off 409.</>,
              <>IRCC holds rounds roughly <strong>every two weeks</strong>, often clustering a program draw with category draws.</>,
              <>In 2026 IRCC has run only <strong>program-specific and category-based draws</strong>, no general all-program rounds.</>,
              <>The <strong>CRS cut-off changes every round</strong>; there is no fixed pass mark.</>,
              <>This page is <strong>updated after each official IRCC round</strong>, the live IRCC page is the source of truth.</>,
            ]}
          />

          <p className="text-sm text-ink-faint">
            <strong>Last updated:</strong> May&nbsp;31,&nbsp;2026. This is an evergreen tracker re-dated after each
            official IRCC round of invitations. All cut-offs, ITA counts and dates below are mirrored from the live{" "}
            <a href={IRCC_ROUNDS_URL} target="_blank" rel="noopener noreferrer">IRCC rounds-of-invitations page</a>,
            which remains the authoritative source.
          </p>

          <h2>What were the latest Express Entry draw results?</h2>
          <p>
            The latest Express Entry draw was <strong>Round&nbsp;#418 on May&nbsp;28,&nbsp;2026</strong>, a
            category-based French-language draw that issued <strong>4,500 invitations to apply (ITAs)</strong> at a{" "}
            <strong>CRS cut-off of 409</strong>. The day before, Round&nbsp;#417 (May&nbsp;27) was a Canadian
            Experience Class (CEC) draw of 3,000 ITAs at a cut-off of 518, and Round&nbsp;#416 (May&nbsp;25) was a
            Provincial Nominee Program round of 334 ITAs at 805.</p>
          <p>These three rounds show the 2026 pattern at a
            glance: a high-volume category draw, a steady CEC draw stream and a small PNP round whose high cut-off
            simply reflects the +600 points a nomination adds. There was no general all-program IRCC draw in this
            window.
          </p>

          <h2>Recent 2026 Express Entry draw history</h2>
          <p>
            The table below lists the most recent rounds, round number, date, category, ITAs issued and the CRS
            cut-off. It updates <strong>automatically</strong> from IRCC&apos;s official open-data feed, so if there is
            an Express Entry draw today the new round appears here within hours, and every round on
            record stays in sync with the live page. You can always cross-check the{" "}
            <a href={IRCC_ROUNDS_URL} target="_blank" rel="noopener noreferrer">IRCC rounds-of-invitations page</a>.
          </p>
          <LiveDraws limit={8} />
          <Callout type="brand" title="This tracker updates itself">
            This table is pulled directly from IRCC&apos;s open-data feed and refreshes in the background several times
            a day, so you see each new round of invitations shortly after IRCC publishes it, no manual updates needed.
          </Callout>

          <h2>How do Express Entry draws work?</h2>
          <p>
            An Express Entry draw, IRCC calls it a <em>round of invitations</em>, is the moment IRCC reaches into
            the pool of profiles and invites the top-ranked candidates to apply for permanent residence. Every
            profile in the pool carries a <strong>Comprehensive Ranking System (CRS) score</strong> out of 1,200.
            For each round, IRCC decides the category and how many invitations to issue; the{" "}
            <strong>CRS cut-off is simply the score of the lowest-ranked candidate invited</strong>.</p>
          <p>If you are at or
            above that cut-off in an eligible category, you receive an Invitation to Apply (ITA) and have 60 days to
            submit a complete application. Because the cut-off is set by where the line falls each time, it moves
            from round to round. There is no fixed pass mark.
          </p>

          <h2>How often does IRCC hold Express Entry draws?</h2>
          <p>
            IRCC holds rounds <strong>roughly every two weeks</strong>, most often on a Tuesday or Wednesday. The
            cadence is not fixed: in busy stretches IRCC has run two or three rounds in a single week, pairing a
            program-specific draw with one or more category-based draws, and in quieter periods the gap stretches
            longer. The pace is driven by Canada&apos;s annual admission targets under the Immigration Levels Plan
            and by how many candidates sit in each category pool, not by a published calendar.
          </p>

          <h2>What is the 2026 Express Entry draw pattern?</h2>
          <p>
            Through 2026, IRCC has run two kinds of rounds and <strong>no general all-program draws</strong>:
          </p>
          <ul>
            <li>
              <strong>Program-specific draws</strong>, Canadian Experience Class (the steady, high-volume in-Canada
              stream, cutting off around 507–518) and the Provincial Nominee Program (small rounds with very high
              cut-offs near 710–805 because each candidate already holds a +600 nomination).
            </li>
            <li>
              <strong>Category-based draws</strong>, targeting in-demand groups: French-language proficiency
              (around 393–419), Healthcare &amp; social services (~467), Trades (~477), and newer 2026 categories
              such as Physicians (as low as 169) and Senior Managers (~429).
            </li>
          </ul>
          <p>
            This reflects IRCC&apos;s stated emphasis on in-Canada candidates and in-demand occupations. Most 2026
            categories now require at least <strong>12 months</strong> of qualifying experience (up from six), so
            check the category criteria before counting on a lower category cut-off. Note that a strong CRS score
            alone is not enough for a category draw. You must also meet that category&apos;s eligibility.
          </p>
          <Callout type="warning" title="Job-offer CRS points were removed in 2025">
            As of <strong>March&nbsp;25,&nbsp;2025</strong>, a job offer no longer adds CRS points. If an older draw
            guide still tells you a job offer adds 50 or 200 points, it is out of date. The biggest remaining
            booster is a provincial nomination (+600).
          </Callout>

          <h2>When is the next Express Entry draw?</h2>
          <p>
            With the latest round on <strong>May&nbsp;28,&nbsp;2026</strong> and IRCC&apos;s roughly two-week
            rhythm, the <strong>next Express Entry draw</strong> is expected in <strong>early-to-mid June 2026</strong>,
            most likely a Canadian Experience Class or category-based round. IRCC does not pre-announce dates, so
            treat any forecast as an estimate. The only confirmed schedule is the official IRCC page, bookmark this
            tracker and we will re-date it as soon as each round is published.
          </p>
          <p>
            Waiting for a draw you can actually clear? Whether you are tracking the latest Express Entry draw, the
            next CEC draw or a category-based round, use our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> to see where you stand, then book a{" "}
            <a href="/contact">consultation</a> with a licensed RCIC to map the fastest realistic route, whether that is improving your CRS, qualifying for a category draw, or pursuing a provincial nomination.
            We never guarantee an outcome, but we make sure your profile is as strong as the rules allow.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Not sure which draw you qualify for?"
        sub="Book a no-pressure consultation with a licensed RCIC and get an honest read on your CRS score, the categories you fit, and your fastest realistic route."
      />
    </>
  );
}
