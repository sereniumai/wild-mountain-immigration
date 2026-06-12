import type { Metadata } from "next";
import { CalendarClock, Map, Rocket, Calculator, Mountain, Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/draws";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "PNP Draw Tracker 2026, Provincial Nominee Draws",
  titleAbsolute: "PNP Draws 2026: Provincial Nominee Draw Tracker",
  description:
    "PNP draws across Canada: how provincial nominee invitations work, EOI versus Express Entry-aligned draws, and a dated table of recent activity by province.",
  path: PATH,
  keywords: [
    "pnp draws",
    "pnp draw",
    "pnp draw today",
    "pnp latest draw",
    "provincial nominee draws 2026",
    "PNP invitation rounds",
    "AAIP BC PNP SINP OINP draws",
    "provincial nominee program EOI",
  ],
});

const faqs = [
  {
    q: "What is a PNP draw?",
    a: "A PNP draw is an invitation round held by a province or territory under its Provincial Nominee Program. The province selects candidates from a pool, usually ranked by an Expression of Interest (EOI) score, and invites the highest-ranked ones to apply for a provincial nomination. A nomination is not permanent residence itself, but it is a powerful step toward it. Each province runs its own draws on its own schedule, so there is no single national PNP draw calendar.",
  },
  {
    q: "How do provincial nominee invitations work?",
    a: "Most provinces use an Expression of Interest model: you submit a profile, it is scored, and it sits in a pool for a set period. In each draw the province chooses a stream or category and invites candidates above a cut-off score to apply for nomination. Some draws are tied to the federal Express Entry pool (enhanced streams), and some are province-only (base streams). The cut-off is set fresh each round by where the line falls, so it changes from draw to draw.",
  },
  {
    q: "What is the difference between EOI and Express Entry-aligned PNP draws?",
    a: "An enhanced, or Express Entry-aligned, PNP stream requires you to be in the federal Express Entry pool; a nomination from one adds 600 CRS points, putting most candidates well above the typical federal draw cut-off. A base, EOI-only stream is province-run and leads to a paper-based PR application instead of through Express Entry. Many provinces operate both kinds. Which path suits you depends on whether you qualify for Express Entry and which provincial streams you fit.",
  },
  {
    q: "How many CRS points does a provincial nomination add?",
    a: "An enhanced (Express Entry-aligned) provincial nomination adds 600 points to your Comprehensive Ranking System score. That single factor lifts almost any profile above the federal cut-off, which is why Express Entry PNP-specific rounds show very high scores. A base-stream nomination does not add CRS points because it does not go through Express Entry; instead it supports a direct PR application. Always confirm the current rules, as programs change.",
  },
  {
    q: "Which provinces hold the most PNP draws?",
    a: "Larger programs such as Alberta (AAIP), British Columbia (BC PNP), Saskatchewan (SINP), Ontario (OINP) and Manitoba (MPNP) tend to hold frequent draws across multiple streams, while smaller provinces and territories draw less often. Frequency depends on each province's annual nomination allocation and demand in each stream. Because allocations and schedules change, the best guide to recent activity is each province's own draw page, which we link below.",
  },
  {
    q: "Is there a national PNP draw schedule?",
    a: "No. Each province and territory runs its own Provincial Nominee Program with its own streams, scoring and draw timing, so there is no single national calendar. Some provinces draw on a roughly regular rhythm, others draw as needed. To track activity you have to follow each province's official page. This tracker pulls recent activity together for orientation, but each province's site is the source of truth for live figures.",
  },
  {
    q: "Do I need a job offer for a PNP draw?",
    a: "It depends entirely on the stream. Some PNP streams require a genuine job offer from an employer in that province, while others select on human-capital factors without one, especially Express Entry-aligned streams targeting in-demand occupations. Because requirements differ by province and stream, we check the specific stream's criteria rather than assuming a job offer is or is not needed. Matching your profile to the right stream is the key step.",
  },
  {
    q: "Can I be invited by more than one province?",
    a: "You can submit Expressions of Interest to more than one province if you meet each one's criteria, and provinces draw independently, so it is possible to receive invitations from different programs. You can hold only one provincial nomination at a time for a given PR application, however, and you must genuinely intend to settle in the nominating province. We help you target the provinces where your profile is most competitive rather than applying everywhere.",
  },
];

export default function PnpDrawsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "PNP Draw Tracker 2026, Provincial Nominee Draws Across Canada",
            description:
              "PNP draws across Canada: how provincial nominee invitations work, EOI versus Express Entry-aligned draws, and a dated table of recent activity by province.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-01-12",
          }),
          serviceLd({
            name: "Provincial Nominee Program strategy",
            description:
              "PNP draws across Canada: how provincial nominee invitations work, EOI versus Express Entry-aligned draws, and a dated table of recent activity by province.",
            path: PATH,
            serviceType: "Provincial Nominee Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Provincial Nominee Programs, Draws"
        crumbs={[
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Draws", path: PATH },
        ]}
        title={<>PNP <span className="text-brand">draw tracker</span></>}
        lede={
          <p>
            <strong>PNP draws</strong> are the invitation rounds each province holds under its Provincial Nominee
            Program, selecting candidates from a pool to apply for a nomination. This cross-Canada tracker explains
            how the draws work, the difference between EOI and Express Entry-aligned rounds, and recent activity by
            province, as of May&nbsp;2026.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/pnp", label: "All provincial programs" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <CalendarClock className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Which province fits you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can match your profile to the provinces and streams where you are most competitive,
                entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province and stream explained" },
                { label: "Alberta (AAIP) draws", href: "/alberta-immigration/draws", note: "Our home-province tracker" },
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "Skilled worker, tech and more" },
                { label: "Express Entry overview", href: "/express-entry", note: "Where a nomination adds 600 CRS points" },
                { label: "Comprehensive Ranking System", href: "/express-entry/comprehensive-ranking-system", note: "How the +600 changes your score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox label="Quick answer, as of May 2026">
            Looking for the latest PNP draw? <strong>PNP draws</strong> are invitation rounds run by each province
            under its Provincial Nominee Program. Provinces rank candidates by an{" "}
            <strong>Expression of Interest</strong> score and invite the top ones, above a{" "}
            <strong>cut-off score</strong>, to apply for a nomination. An Express Entry-aligned nomination adds{" "}
            <strong>600 CRS points</strong>. There is no national calendar. Each province draws on its own schedule,
            so to find the PNP draw today you follow each province below.
          </AnswerBox>

          <KeyTakeaways
            summary="PNP draws are the invitation rounds provinces and territories hold under their Provincial Nominee Programs. Each round picks candidates from a pool, usually ranked by an Expression of Interest score, and invites them to apply for a provincial nomination. Draws are either Express Entry-aligned (enhanced), where a nomination adds 600 CRS points, or province-only (base), leading to a direct PR application. Each province runs its own streams, scoring and schedule, so there is no national PNP draw calendar. Cut-offs are set fresh each round and change over time."
            items={[
              <><strong>PNP draws</strong> are provincial invitation rounds; provinces rank an <strong>EOI pool</strong> and invite the top candidates to apply for nomination.</>,
              <><strong>Enhanced</strong> (Express Entry-aligned) draws add <strong>600 CRS points</strong>; <strong>base</strong> draws lead to a direct PR application.</>,
              <>Larger programs, <strong>AAIP, BC PNP, SINP, OINP, MPNP</strong>, draw frequently across multiple streams.</>,
              <>There is <strong>no national calendar</strong>; each province draws on its own schedule and sets its own cut-offs.</>,
              <>This tracker is <strong>dated May 2026</strong> and for orientation; each province&apos;s official page is the source of truth.</>,
            ]}
          />

          <p className="text-sm text-ink-faint">
            <strong>Data as of:</strong> May&nbsp;2026. The activity below is a curated, illustrative snapshot for
            orientation only. Provincial draw figures change constantly, so confirm the latest dates, streams and
            cut-offs on each province&apos;s official program site before relying on any number.
          </p>

          <h2>What is a PNP draw?</h2>
          <p>
            A <strong>PNP draw</strong> is an invitation round held by a province or territory under its{" "}
            <a href="/pnp">Provincial Nominee Program</a>. The province reaches into a pool of candidates, usually
            ranked by an <strong>Expression of Interest (EOI)</strong> score, selects a stream or category, and
            invites the highest-ranked candidates to apply for a <strong>provincial nomination</strong>.</p>
          <p>A nomination
            is not permanent residence on its own, but it is one of the strongest steps toward it, and through an
            Express Entry-aligned stream it puts most candidates well above the typical federal draw cut-off. Because every province runs its
            own program, there is no single national PNP draw. You track each province separately.
          </p>

          <h2>How do provincial nominee invitations work?</h2>
          <p>
            Most provinces use an <strong>Expression of Interest</strong> model. You submit a profile, it is scored
            against that province&apos;s criteria, and it sits in a pool for a set period. In each draw the province
            decides a stream and a number of invitations, then invites everyone above a cut-off score. The cut-off is
            simply the score of the lowest-ranked candidate invited that round, so it is set fresh each time and moves
            from draw to draw. Meeting a past cut-off does not entitle you to an invitation, because the line resets
            every round, and you must also meet the chosen stream&apos;s eligibility.
          </p>

          <h2>EOI versus Express Entry-aligned PNP draws</h2>
          <p>
            PNP streams come in two broad kinds, and the difference shapes your whole route to permanent residence.
          </p>
          <DataTable
            headers={["Feature", "Enhanced (Express Entry-aligned)", "Base (EOI-only)"]}
            rows={[
              ["Express Entry pool required", "Yes, you must have an Express Entry profile", "No, province-run application"],
              ["Effect of nomination", "Adds 600 CRS points, well above recent federal cut-offs", "Supports a direct, paper-based PR application"],
              ["PR application route", "Through federal Express Entry", "Through IRCC outside Express Entry"],
              ["Typical use", "Candidates already eligible for Express Entry", "Candidates who fit a province but not Express Entry"],
            ]}
            caption="Enhanced versus base PNP streams (IRCC and provincial programs, 2026). Many provinces run both, confirm each stream's rules on the province's site."
          />
          <Callout type="info" title="The +600 is why Express Entry PNP draws look so high">
            When a nomination through an enhanced stream adds <strong>600 points</strong>, federal{" "}
            <a href="/express-entry/draws">Express Entry PNP rounds</a> naturally show very high cut-offs, every
            candidate in them already carries the +600. See our{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS guide</a> for how that reshapes your score.
          </Callout>

          <h2>Recent PNP activity by province</h2>
          <p>
            The table below gathers recent, illustrative activity across the major provincial programs as of
            May&nbsp;2026, including <a href="/alberta-immigration/draws">AAIP draws</a> in Alberta,{" "}
            <a href="/pnp/british-columbia">BC PNP draws</a> in British Columbia and{" "}
            <a href="/pnp/ontario">OINP draws</a> in Ontario. It is a curated snapshot for orientation, not a live
            feed, so treat the patterns rather than any exact figure as the takeaway, and confirm the latest rounds
            on each province&apos;s own page.
          </p>
          <DataTable
            headers={["Province / program", "Draw pattern", "What it typically targets"]}
            rows={[
              ["Alberta (AAIP draws)", "Frequent draws by pathway", "Opportunity Stream, Rural Renewal, health, tech and other Express Entry pathways"],
              ["British Columbia (BC PNP draws)", "Regular, often weekly-style rounds", "Skilled worker, tech, health authority and international graduate categories"],
              ["Saskatchewan (SINP draws)", "Periodic rounds across streams", "International Skilled Worker (EOI) and in-demand occupation lists"],
              ["Ontario (OINP draws)", "Targeted draws as streams open", "Human Capital Priorities, employer job offer, skilled trades, French-speaking"],
              ["Manitoba (MPNP draws)", "Regular EOI rounds", "Skilled Worker in Manitoba, overseas and international education streams"],
              ["Other provinces & territories", "Less frequent, allocation-driven", "Atlantic provinces, the territories and others draw on their own schedules"],
            ]}
            caption="Illustrative PNP activity by province (curated snapshot, May 2026). This is orientation only, confirm current dates, streams and cut-off scores on each province's official site."
          />
          <Callout type="brand" title="Follow each province for live figures">
            Because there is no national calendar and provincial draws change constantly, the live source for any
            province is its own program page. For Alberta, our home province, see the dedicated{" "}
            <a href="/alberta-immigration/draws">AAIP draw tracker</a>, which we re-date after every official round.
          </Callout>

          <h2>Why do PNP cut-offs differ so much between provinces?</h2>
          <p>
            Each province draws from its own pool, with its own scoring system, allocation and demand, so cut-offs are
            not comparable across programs. A score that wins an invitation in one province&apos;s stream means
            nothing in another, because the scales and criteria differ. Targeted streams aimed at in-demand
            occupations or tech talent often sit higher, while community-focused or rural streams can land lower.
            Always read a cut-off in the context of the specific province and stream it came from.
          </p>
          <Callout type="warning" title="Meeting a past cut-off does not guarantee an invitation">
            PNP draws are points-ranked, and the line resets every round. A score that cleared one draw can fall
            short of the next, and you must also meet the stream&apos;s eligibility. Be cautious of any source that
            implies a fixed pass mark or a guaranteed nomination.
          </Callout>

          <h2>How often do provinces hold PNP draws?</h2>
          <p>
            Frequency varies widely. Larger programs such as Alberta, British Columbia, Saskatchewan, Ontario and
            Manitoba tend to draw often, sometimes several times a month across different streams, while smaller
            provinces and the territories draw less frequently. The pace is driven by each province&apos;s annual
            nomination allocation and the demand sitting in each stream pool, not by a published national schedule.
            As allocations are used through the year, competition can firm up and cut-offs can rise, so timing
            matters.
          </p>

          <h2>How Wild Mountain Immigration helps you target the right PNP draw</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team matches your profile to the provinces and streams
            where you are most competitive, sets a provincial route against your federal{" "}
            <a href="/express-entry">Express Entry</a> /{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS</a> standing, and prepares a complete EOI or
            application for the streams you actually qualify for.</p>
          <p>In our home province, that includes the{" "}
            <a href="/alberta-immigration">Alberta AAIP</a>, and across Canada it spans{" "}
            <a href="/pnp/british-columbia">BC</a>, <a href="/pnp/saskatchewan">Saskatchewan</a>,{" "}
            <a href="/pnp/ontario">Ontario</a>, <a href="/pnp/manitoba">Manitoba</a> and more. We work entirely
            online. Provincial streams, allocations and cut-off scores change constantly, so we always confirm the
            current rules on each province&apos;s official site before advising you on the next PNP draw worth
            targeting.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the provincial programs</h2>
          <p className="mt-3 text-ink-soft">Draw activity is one signal. We help you find the province and stream that fits your profile.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Every province and territory, with streams, scoring and how the draws fit together." href="/pnp" />
            <FeatureCard icon={Mountain} title="Alberta (AAIP) draws" desc="Our home-province tracker, re-dated after each official Alberta round." href="/alberta-immigration/draws" />
            <FeatureCard icon={Briefcase} title="British Columbia (BC PNP)" desc="Skilled worker, tech, health authority and international graduate streams." href="/pnp/british-columbia" />
            <FeatureCard icon={Map} title="Saskatchewan (SINP)" desc="International Skilled Worker and in-demand occupation routes to nomination." href="/pnp/saskatchewan" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Where an enhanced provincial nomination adds 600 CRS points." href="/express-entry" />
            <FeatureCard icon={Calculator} title="Free CRS Calculator" desc="Estimate your federal score in two minutes, free." href="/tools/crs-calculator" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Not sure which PNP draw you qualify for?"
        sub="Get started with a licensed RCIC for an honest read on the provinces and streams that fit your profile, and your fastest realistic route to a nomination."
      />
    </>
  );
}
