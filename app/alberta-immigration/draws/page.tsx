import type { Metadata } from "next";
import { CalendarClock, Briefcase, Rocket, Clock, Calculator, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/draws";
const UPDATED = "May 2026";

// Live source of truth for every figure on this page.
const AAIP_PROCESSING_URL = "https://www.alberta.ca/aaip-processing-information";

export const metadata: Metadata = pageMeta({
  title: "AAIP Draw Results 2026, Latest Alberta Draws",
  titleAbsolute: "AAIP Draws 2026: Latest Alberta Draw Results",
  description:
    "AAIP draw results 2026: latest Alberta nomination updates, EOI cut-off scores by pathway and draw history. RCIC-reviewed, updated after each draw.",
  path: PATH,
  keywords: [
    "AAIP draw results 2026",
    "latest AAIP draw",
    "AAIP cut-off scores 2026",
    "AAIP EOI cut-off",
    "Alberta nomination updates",
  ],
});

const faqs = [
  {
    q: "When is the next AAIP draw?",
    a: "Alberta does not publish a fixed draw calendar. The AAIP runs invitation rounds \"as needed\" through the year, often several per month spread across different pathways (Opportunity Stream, Rural Renewal, Dedicated Health Care, Accelerated Tech and other Express Entry pathways). With the most recent draws in mid-May 2026, the next AAIP draw is expected within weeks, but the only confirmed schedule is the official alberta.ca processing-information page, which we re-check and re-date this tracker against after every round.",
  },
  {
    q: "What were the latest AAIP draw results?",
    a: "The most recent rounds were a Dedicated Health Care (Express Entry) draw on May 13, 2026 to 61 invitations at a minimum EOI of 57, and an Alberta Opportunity Stream draw on May 6, 2026 of 832 invitations at a cut-off of 54. Earlier 2026 rounds included Priority Sectors (construction/trades) at 60 and Rural Renewal at 50. Figures change with every draw, so confirm the current numbers on the live alberta.ca processing page.",
  },
  {
    q: "What EOI score do I need for an AAIP draw in 2026?",
    a: "There is no fixed pass mark, Alberta sets each pathway's cut-off draw by draw based on how many candidates it invites. In 2026, observed minimums have ranged from roughly 45 (some health-care rounds) to 63 (Accelerated Tech), with the high-volume Opportunity Stream landing around 54–57 and Rural Renewal around 46–50. Meeting a past cut-off does not entitle you to an invitation; always check the latest alberta.ca results before relying on any number.",
  },
  {
    q: "How does Alberta decide who gets invited in an AAIP draw?",
    a: "Every worker submits a Worker Expression of Interest (EOI) scored out of 100 (69 human-capital points plus 31 economic points). Your EOI sits in Alberta's pool for one year. In each draw, Alberta selects a pathway or sector and invites the highest-ranked candidates who meet that pathway's criteria; the minimum EOI published for the round is simply the score of the lowest-ranked candidate invited. Because the line is set fresh each time, the cut-off moves from draw to draw.",
  },
  {
    q: "Why do AAIP cut-off scores differ so much between pathways?",
    a: "Each AAIP pathway draws from a different pool with different demand and allocation. Targeted Express Entry pathways such as Accelerated Tech attract higher-scoring federal candidates, so their cut-offs sit higher (around 63). The large Opportunity Stream pool produces mid-range cut-offs (54–57), while Rural Renewal, designed to fill jobs in smaller communities, often lands lower (46–50). The pathway, not just your score, determines which cut-off applies to you.",
  },
  {
    q: "How many nominations does Alberta have for 2026?",
    a: "Alberta's 2026 AAIP allocation is around 6,403 nominations across all streams, with roughly 3,425 earmarked for the Opportunity Stream, 1,000 for Rural Renewal, 600 for Accelerated Tech, 500 for Health Care and 150 for Tourism & Hospitality (alberta.ca, May 2026). Because the cap is finite, competition firms up as the year progresses and remaining allocation shrinks. These figures are provincial planning numbers and can be adjusted, verify the current allocation on the live alberta.ca page.",
  },
  {
    q: "Where can I see the official AAIP draw history?",
    a: "The authoritative record is Alberta's AAIP processing-information page on alberta.ca, which lists recent draw dates, pathways, the number of invitations issued and the minimum EOI for each round. This tracker mirrors the recent 2026 draws for quick reference, but the alberta.ca page is always the source of truth for live figures.",
  },
];

export default function AlbertaDrawsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "AAIP Draw Results 2026 & Latest Alberta Draw History",
            description:
              "AAIP draw results 2026: latest Alberta nomination updates, EOI cut-off scores by pathway and draw history. RCIC-reviewed, updated after each draw.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-01-12",
          }),
          serviceLd({
            name: "AAIP Worker EOI profile & nomination support",
            description:
              "AAIP draw results 2026: latest Alberta nomination updates, EOI cut-off scores by pathway and draw history. RCIC-reviewed, updated after each draw.",
            path: PATH,
            serviceType: "Alberta Advantage Immigration Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Draw Results"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Draw Results", path: PATH },
        ]}
        title={<>AAIP <span className="text-brand">draw results 2026</span></>}
        lede={
          <p>
            <strong>AAIP draw results 2026</strong> show Alberta inviting by pathway, a Dedicated
            Health Care round on May&nbsp;13,&nbsp;2026 (61 invitations, EOI&nbsp;57) and an Opportunity Stream
            round on May&nbsp;6 (832 invitations, EOI&nbsp;54). This evergreen tracker re-dates after every
            official Alberta draw so you always see the most recent nomination updates.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Score your AAIP EOI, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <CalendarClock className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Below the AAIP cut-off?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can find the Worker EOI points you&apos;re missing and the pathways you actually
                qualify for.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "The highest-volume worker route" },
                { label: "AAIP processing times", href: "/alberta-immigration/processing-times", note: "How long nomination takes" },
                { label: "Free AAIP Calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI in 2 minutes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox label="Latest AAIP draws, updated May 31, 2026">
            As of the <strong>May&nbsp;13,&nbsp;2026</strong> draw, the AAIP invited <strong>61</strong>{" "}
            Dedicated Health Care candidates at a minimum EOI of <strong>57</strong>; the most recent Alberta
            Opportunity Stream round (May&nbsp;6) issued <strong>832</strong> invitations at a cut-off of{" "}
            <strong>54</strong>. Source:{" "}
            <a href={AAIP_PROCESSING_URL} target="_blank" rel="noopener noreferrer">
              alberta.ca AAIP processing information
            </a>
, accessed May&nbsp;31,&nbsp;2026. AAIP cut-off scores change every draw, always confirm the live page.
          </AnswerBox>

          <KeyTakeaways
            summary="AAIP draw results 2026 record each round in which Alberta invites Worker Expression of Interest candidates to apply for a provincial nomination. Each entry lists the pathway, the invitations issued and the minimum EOI cut-off. Alberta invites by pathway, so the Opportunity Stream, Rural Renewal, Health Care, Accelerated Tech and other Express Entry pathways each draw from their own pool. There is no fixed pass mark or draw calendar; cut-off scores are set fresh each round and change over time. This page is updated after each official draw."
            items={[
              <>The <strong>latest AAIP draw</strong> was Dedicated Health Care on May&nbsp;13,&nbsp;2026: 61 invitations at a minimum EOI of 57.</>,
              <>Alberta invites <strong>by pathway</strong>, Opportunity Stream, Rural Renewal, Health Care, Accelerated Tech and other Express Entry pathways each draw from their own pool.</>,
              <><strong>2026 AAIP cut-off scores</strong> have ranged from roughly 45 to 63; Opportunity Stream ~54–57, Rural Renewal ~46–50, Accelerated Tech ~63.</>,
              <>There is <strong>no fixed pass mark or draw calendar</strong>; Alberta runs rounds &ldquo;as needed&rdquo; and sets each cut-off fresh.</>,
              <>This page is <strong>updated after each official alberta.ca draw</strong>, the live AAIP processing page is the source of truth.</>,
            ]}
          />

          <p className="text-sm text-ink-faint">
            <strong>Last updated:</strong> May&nbsp;31,&nbsp;2026. This is an evergreen tracker re-dated after each
            official Alberta draw. All cut-offs, invitation counts and dates below are mirrored from the live{" "}
            <a href={AAIP_PROCESSING_URL} target="_blank" rel="noopener noreferrer">alberta.ca AAIP processing-information page</a>,
            which remains the authoritative source.
          </p>

          <h2>What were the latest AAIP draw results?</h2>
          <p>
            As of the <strong>May&nbsp;13,&nbsp;2026</strong> draw, Alberta&apos;s most recent rounds were a{" "}
            <strong>Dedicated Health Care (Express Entry)</strong> draw of <strong>61 invitations</strong> at a{" "}
            <strong>minimum EOI of 57</strong>, and an <strong>Alberta Opportunity Stream</strong> round on{" "}
            May&nbsp;6 of <strong>832 invitations</strong> at a cut-off of <strong>54</strong>.</p>
          <p>Earlier in the
            spring, an Alberta Express Entry Priority Sectors draw (construction/trades) on April&nbsp;14 cut off at
            60, and a Rural Renewal round on April&nbsp;9 invited 74 candidates at 50. Together these rounds show
            the 2026 pattern at a glance: small, high-bar targeted Express Entry pathways alongside the large,
            mid-range Opportunity Stream and lower Rural Renewal cut-offs. Figures change every draw, confirm the
            current numbers on the live{" "}
            <a href={AAIP_PROCESSING_URL} target="_blank" rel="noopener noreferrer">alberta.ca processing page</a>.
          </p>

          <h2>Recent 2026 AAIP draw history</h2>
          <p>
            The table below lists recent 2026 AAIP draws, the date, pathway, number of invitations issued and the
            minimum EOI cut-off, drawn from Alberta&apos;s official record. It is a snapshot for quick reference;
            for the AAIP all draws history and the complete, live list always check the{" "}
            <a href={AAIP_PROCESSING_URL} target="_blank" rel="noopener noreferrer">alberta.ca AAIP processing-information page</a>.
          </p>
          <DataTable
            headers={["Date (2026)", "Stream / Pathway", "Invitations", "Min EOI"]}
            rows={[
              ["May 13", "Dedicated Health Care (Express Entry)", "61", "57"],
              ["May 6", "Alberta Opportunity Stream", "832", "54"],
              ["Apr 14", "AB Express Entry, Priority Sectors (construction/trades)", "50", "60"],
              ["Apr 9", "Rural Renewal", "74", "50"],
              ["Feb 2", "Alberta Opportunity Stream", "915", "57"],
              ["Jan 29", "Accelerated Tech (Express Entry)", "148", "63"],
              ["Jan 26", "Dedicated Health Care (Express Entry)", "63", "61"],
            ]}
            caption="Recent 2026 AAIP draws (alberta.ca, AAIP processing information, accessed May 31, 2026). Figures change every draw, verify on alberta.ca."
          />
          <Callout type="brand" title="This table is updated after each official AAIP draw">
            We re-date and refresh this tracker once Alberta publishes each new round. Between updates, the live{" "}
            <a href={AAIP_PROCESSING_URL} target="_blank" rel="noopener noreferrer">alberta.ca page</a> is the source
            of truth for the very latest AAIP cut-off scores and invitation counts.
          </Callout>

          <h2>How do AAIP draws work?</h2>
          <p>
            In an AAIP draw, Alberta reaches into its{" "}
            <a href="/alberta-immigration">Alberta Advantage Immigration Program</a> pool of Worker Expressions of
            Interest (EOIs) and invites the highest-ranked candidates in a chosen pathway to apply for a provincial
            nomination. Every worker who meets the minimum criteria submits an <strong>EOI scored out of 100</strong>,
            split into human capital (max 69) and economic factors (max 31). That EOI then sits in the pool, valid
            for one year.</p>
          <p>For each draw, Alberta decides the{" "}
            <strong>pathway or sector and how many invitations to issue</strong>; the{" "}
            <strong>minimum EOI is simply the score of the lowest-ranked candidate invited</strong> in that round.
            If your score is at or above that line in an eligible pathway, you receive a Notification of Interest and
            can submit a full AAIP application. Because the line falls in a different place each time, the cut-off
            moves from draw to draw. There is no fixed pass mark.
          </p>
          <Callout type="info" title="Alberta invites by pathway, not one big pool">
            Unlike a single province-wide ranking, the AAIP runs targeted rounds, Opportunity Stream, Rural Renewal,
            Dedicated Health Care, Accelerated Tech and other Express Entry pathways. Your eligibility for a given
            pathway, not just your raw EOI score, determines which draws you can be invited from.
          </Callout>

          <h2>What are the 2026 AAIP cut-off scores by pathway?</h2>
          <p>
            Because each pathway draws from its own pool, <strong>2026 AAIP cut-off scores</strong> vary widely.
            Targeted Express Entry pathways that attract higher-scoring federal candidates sit at the top of the
            range, while broader or community-focused pathways land lower. The ranges below summarise what Alberta
            has published across 2026 rounds, treat them as moving targets, not guarantees.
          </p>
          <DataTable
            headers={["Pathway", "2026 min EOI range", "Notes"]}
            rows={[
              ["Accelerated Tech (Express Entry)", "~63", "Higher-scoring federal pool; smaller targeted rounds"],
              ["Dedicated Health Care (Express Entry)", "~57–61", "Periodic rounds for in-demand health occupations"],
              ["AB Express Entry, Priority Sectors", "~60", "Construction/trades and other priority sectors"],
              ["Alberta Opportunity Stream", "~54–57", "Highest-volume worker route; large pool"],
              ["Rural Renewal", "~46–50", "Designated-community endorsements for rural jobs"],
            ]}
            caption="Illustrative 2026 AAIP minimum-EOI ranges by pathway (alberta.ca, AAIP processing information). Cut-offs change every draw, verify live."
          />
          <Callout type="warning" title="Meeting a past cut-off does not guarantee an invitation">
            AAIP draws are points-ranked and the line is reset every round. A score that cleared one draw can fall
            short of the next, and you must also meet the chosen pathway&apos;s eligibility. Beware any source that
            implies a fixed pass mark or a guaranteed nomination.
          </Callout>

          <h2>How often does Alberta hold AAIP draws?</h2>
          <p>
            Alberta holds AAIP draws <strong>&ldquo;as needed&rdquo; rather than on a fixed calendar</strong>. In
            practice that has meant several rounds per month across 2026, spread over different pathways, a small
            targeted Express Entry round one week, a large Opportunity Stream draw the next, a Rural Renewal round
            after that. The pace is driven by Alberta&apos;s annual nomination allocation and the demand in each
            pathway pool, not by a published schedule. Because there is no pre-announced AAIP draw 2026 schedule,
            treat any forecast as an estimate and watch the live alberta.ca page.
          </p>

          <h2>How much of Alberta&apos;s 2026 allocation is left?</h2>
          <p>
            Alberta&apos;s 2026 AAIP allocation is roughly <strong>6,403 nominations</strong> across all streams.
            Provincial planning figures earmark about <strong>3,425 for the Opportunity Stream</strong>, 1,000 for
            Rural Renewal, 600 for Accelerated Tech, 500 for Health Care and 150 for Tourism &amp; Hospitality. As
            draws issue invitations through the year, the remaining allocation shrinks, which is part of why
            cut-offs can firm up later in the year. These are provincial planning numbers that can be adjusted, so
            confirm the current allocation and remaining balance on the live{" "}
            <a href={AAIP_PROCESSING_URL} target="_blank" rel="noopener noreferrer">alberta.ca processing page</a>.
          </p>
          <DataTable
            headers={["Stream / Pathway", "2026 allocation (approx.)"]}
            rows={[
              ["Alberta Opportunity Stream", "~3,425"],
              ["Rural Renewal", "~1,000"],
              ["Accelerated Tech", "~600"],
              ["Dedicated Health Care", "~500"],
              ["Tourism & Hospitality", "~150"],
              ["Total (all streams)", "~6,403"],
            ]}
            caption="Illustrative 2026 AAIP allocation by stream (alberta.ca, May 2026). Planning figures can change, verify on alberta.ca."
          />

          <h2>When is the next AAIP draw?</h2>
          <p>
            With the latest rounds in <strong>mid-May 2026</strong> and Alberta&apos;s &ldquo;as needed&rdquo;
            rhythm, the <strong>next AAIP draw</strong> is expected within weeks, most likely another Opportunity
            Stream or targeted Express Entry round. Alberta does not pre-announce dates, so treat any forecast as an
            estimate. The only confirmed schedule is the official alberta.ca processing-information page, bookmark
            this tracker and we will re-date it as soon as each new round is published.
          </p>
          <p>
            Reading the AAIP draw results 2026 and waiting for a round you can actually clear? Use our{" "}
            <a href="/tools/aaip-calculator">free AAIP calculator</a> to estimate your Worker EOI score, then{" "}
            <a href="/contact">contact us</a> to map the fastest realistic route.</p>
          <p>Working under a licensed RCIC
            (CICC #R706497), our team can lift your EOI for the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, target a higher-bar pathway
            like the <a href="/alberta-immigration/accelerated-tech-pathway">Accelerated Tech Pathway</a> or{" "}
            <a href="/alberta-immigration/dedicated-health-care-pathway">Dedicated Health Care Pathway</a> through the
            enhanced <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, or set Alberta
            against your federal <a href="/express-entry">Express Entry</a> /{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS</a> standing and other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>. We never guarantee an outcome, but we make sure your
            profile is as strong as the rules allow. See our <a href="/fees">fees</a> for how we work.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">Draw results are one signal. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and how the draws fit together." href="/alberta-immigration" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The highest-volume worker route and the cut-offs it draws at." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="The enhanced route behind the tech, health and priority-sector draws." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={Clock} title="AAIP processing times" desc="How long each stage takes once you clear a draw, from EOI to PR." href="/alberta-immigration/processing-times" />
            <FeatureCard icon={Calculator} title="AAIP points calculator" desc="Estimate your Worker EOI score out of 100 in two minutes, free, no email required." href="/tools/aaip-calculator" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Not sure which AAIP draw you qualify for?"
        sub="Book a no-pressure consultation with a licensed RCIC in Canmore and get an honest read on your Worker EOI score, the pathways you fit, and your fastest realistic route to an Alberta nomination."
      />
    </>
  );
}
