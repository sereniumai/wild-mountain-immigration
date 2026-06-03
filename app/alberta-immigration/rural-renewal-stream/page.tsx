import type { Metadata } from "next";
import { Calculator, MapPin, Rocket, Briefcase, Store, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/rural-renewal-stream";
const COMMUNITIES_PATH = "/alberta-immigration/rural-renewal-stream/designated-communities";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Rural Renewal Stream 2026 (RCIC)",
  titleAbsolute: "Alberta Rural Renewal Stream 2026: Eligibility & Towns",
  description:
    "The Alberta Rural Renewal Stream lets workers settle in a designated community and apply for PR. The 3 steps, 2026 eligibility, endorsement and cut-offs.",
  path: PATH,
  keywords: [
    "alberta rural renewal stream",
    "rural renewal endorsement letter",
    "designated communities alberta",
    "rural renewal eligibility 2026",
    "how to get a rural renewal endorsement",
  ],
});

const faqs = [
  {
    q: "How do I get a rural renewal endorsement?",
    a: "You apply to a designated Alberta community, not to the province. Each Rural Renewal community runs its own local economic-development process: you submit a candidate application (usually with your full-time job offer from a local employer, language results and resume) and, if the community supports your settlement, it issues a community endorsement letter. That letter is what unlocks an AAIP Rural Renewal application. Since January 1, 2026, an endorsement is valid for 12 months and many communities apply their own caps, so you cannot rely on one always being available.",
  },
  {
    q: "Which Alberta communities are designated for Rural Renewal?",
    a: "Alberta designates dozens of smaller communities across the province, places outside the Calgary and Edmonton metro areas that have a Community Economic Development Organization approved to run Rural Renewal. The list changes as communities join or pause, so we keep a current, full breakdown on our designated communities page rather than printing a static list here. Always confirm a community is actively endorsing before you build a plan around it.",
  },
  {
    q: "What is the Rural Renewal cut-off in 2026?",
    a: "Rural Renewal draws in 2026 have landed around a minimum Worker EOI score of 46 to 50, for example, an April 2026 round invited candidates at 50 (source: alberta.ca, AAIP processing information). There is no fixed pass mark: Alberta holds draws as needed and the cut-off moves every round. Meeting it is also not a guarantee of an invitation, so treat any number as a moving target and check the live alberta.ca figures.",
  },
  {
    q: "What are the language and education requirements for Rural Renewal?",
    a: "You generally need a minimum of CLB 4 in English or French across all four abilities (reading, writing, listening and speaking) from an approved test, plus at least a high-school education or equivalent. Your job offer's occupation also matters: applicants already in Alberta can come from NOC TEER 0–5, while those applying from outside Alberta need a TEER 0–3 occupation. Requirements can change, verify the current criteria on alberta.ca before you apply.",
  },
  {
    q: "Does the Rural Renewal Stream lead to permanent residence?",
    a: "Yes, but in steps. The stream is a base AAIP pathway, so an Alberta nomination does not add CRS points. After Alberta nominates you, you file a separate permanent-residence application with IRCC, which makes the final decision on medical, security and admissibility grounds. A community endorsement and even a nomination are endorsements of your case, not a grant of PR.",
  },
  {
    q: "Do I need a job offer in the designated community?",
    a: "Yes. The Rural Renewal Stream is employer-driven: you must hold an eligible full-time, non-seasonal job offer from an employer based in the designated community that endorses you. The job offer is also central to the local endorsement decision. Communities are trying to fill genuine labour gaps, so the offer and your fit for the community both matter.",
  },
  {
    q: "What changed for the Rural Renewal Stream on January 1, 2026?",
    a: "Alberta overhauled the stream effective January 1, 2026. Community endorsements are now valid for 12 months, and you must hold a valid work permit to apply, implied or maintained status is no longer accepted, and restoration is refused. Alberta also distinguishes in-Alberta applicants (NOC TEER 0–5) from those applying from outside Alberta (TEER 0–3), and many communities apply their own caps. Older guides that omit these rules are out of date.",
  },
  {
    q: "How long does the Rural Renewal Stream take and what does it cost?",
    a: "Alberta does not publish a single guaranteed processing time, and your timeline depends on the community endorsement step plus the AAIP and federal stages. On fees, expect the $135 Worker EOI submission fee (new April 7, 2026) and the $1,500 non-refundable AAIP application fee, plus separate IRCC permanent-residence fees later. Confirm current amounts and timelines on alberta.ca and canada.ca before you pay.",
  },
];

export default function RuralRenewalStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Rural Renewal Stream 2026, Endorsement, Eligibility & Cut-offs",
            description:
              "The Alberta Rural Renewal Stream lets workers settle in a designated community and apply for PR. The 3 steps, 2026 eligibility, endorsement and cut-offs.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Alberta Rural Renewal Stream (RRS) support",
            description:
              "The Alberta Rural Renewal Stream lets workers settle in a designated community and apply for PR. The 3 steps, 2026 eligibility, endorsement and cut-offs.",
            path: PATH,
            serviceType: "Alberta Rural Renewal Stream consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP)"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Rural Renewal Stream", path: PATH },
        ]}
        title={<>The Alberta Rural Renewal Stream: <span className="text-brand">settle rural, get PR</span></>}
        lede={
          <p>
            The <strong>Alberta Rural Renewal Stream</strong> lets skilled workers settle in a smaller designated Alberta
            community and apply for permanent residence. You secure a community endorsement, hold an eligible local job
            offer, then submit an Expression of Interest to the AAIP. This guide walks through all three steps for 2026.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: COMMUNITIES_PATH, label: "See designated communities" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free AAIP Points Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Estimate your Alberta Worker EOI score (out of 100) in two minutes, no email required.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Calculate my EOI score</Button>
            </div>
            <div className="rounded-2xl border border-brand/20 bg-brand-soft/50 p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Find a designated community</h2>
              <p className="mt-1.5 text-sm text-ink-soft">See the full, current list of Alberta communities endorsing for Rural Renewal.</p>
              <Button href={COMMUNITIES_PATH} variant="secondary" className="mt-4 w-full" withArrow>View the full list</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Designated communities", href: COMMUNITIES_PATH, note: "The full Rural Renewal community list" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "For workers already in Alberta" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Rural Renewal Stream is a base AAIP stream that lets workers settle in a smaller designated Alberta community and apply for permanent residence. It runs in three steps: secure a community endorsement letter, hold an eligible full-time local job offer, then submit a Worker Expression of Interest to the AAIP. A nomination supports a separate application to IRCC and does not add CRS points, and the rules were overhauled in 2026."
            items={[
              <>The <strong>Alberta Rural Renewal Stream</strong> lets workers settle in a smaller <strong>designated Alberta community</strong> and apply for permanent residence.</>,
              <>It runs in <strong>three steps</strong>: get a <strong>community endorsement letter</strong>, hold an eligible full-time local job offer, then submit a Worker EOI to the AAIP.</>,
              <>It is a <strong>base</strong> stream: a nomination leads to a separate IRCC application and does <em>not</em> add 600 CRS points.</>,
              <>Core eligibility: <strong>CLB 4+</strong> language, at least high-school education, and a job offer (in-Alberta TEER 0–5; from outside TEER 0–3).</>,
              <>Overhauled <strong>January 1, 2026</strong>: endorsements valid 12 months and a <strong>valid work permit is required</strong>, implied/maintained status is not accepted.</>,
            ]}
          />

          <h2>What is the Alberta Rural Renewal Stream?</h2>
          <p>
            The <strong>Alberta Rural Renewal Stream</strong> (RRS) is a base pathway under the Alberta Advantage
            Immigration Program (<a href="/alberta-immigration">AAIP</a>) that lets skilled workers settle in a smaller
            <em> designated</em> Alberta community, outside the Calgary and Edmonton metro areas, and apply for
            permanent residence. The idea is simple: rural and small-town Alberta has real labour gaps, so a community
            can endorse a worker it wants to keep, and that endorsement opens the door to an Alberta nomination.
          </p>
          <p>
            For 2026, Alberta&apos;s overall nomination allocation is <strong>6,403</strong>, with a reported Rural
            Renewal carve-out of roughly <strong>1,000</strong> nominations (source: alberta.ca, AAIP, 2026). That tight
            cap is the headline fact for anyone planning a Rural Renewal application this year: endorsements and
            invitations are limited, draws are held &ldquo;as needed&rdquo; rather than on a fixed schedule, and meeting
            the minimum requirements does not guarantee a community endorsement or an invitation.
          </p>
          <Callout type="brand" title="A nomination is a step, not the finish line">
            A Rural Renewal community endorsement and even an AAIP nomination are not permanent residence. You still file
            a separate application with IRCC, which decides on medical, security and admissibility grounds. Be cautious of
            any source, or any consultant, implying a nomination is guaranteed or equals PR.
          </Callout>

          <h2>How does the Rural Renewal Stream work? The three steps</h2>
          <p>
            The <strong>Alberta Rural Renewal Stream</strong> works in three distinct steps, and they happen in order.
            Unlike most AAIP pathways, the first decision-maker is not the province but a <em>designated community</em>:
            you have to win local support before Alberta will look at your file. The table and steps below set out the
            full sequence.
          </p>
          <DataTable
            headers={["Step", "What happens", "Who decides"]}
            rows={[
              ["1 · Community endorsement", "Apply to a designated community and secure a rural renewal endorsement letter, valid 12 months", "The designated community's economic-development organization"],
              ["2 · Eligible job offer", "Hold a full-time, non-seasonal job offer from an employer in that designated community", "Your local Alberta employer"],
              ["3 · Submit EOI & apply to AAIP", "Submit a Worker Expression of Interest, and if invited, apply to the AAIP for nomination", "The Government of Alberta (AAIP)"],
            ]}
            caption="The three steps of the Alberta Rural Renewal Stream, accurate as of May 2026 (alberta.ca). Rules change, verify before applying."
          />
          <Steps
            steps={[
              { title: "Get a community endorsement", desc: "Apply to a designated Alberta community with your job offer, language results and resume. If it supports your settlement, it issues a rural renewal endorsement letter (valid 12 months)." },
              { title: "Have an eligible job offer there", desc: "Hold a full-time, non-seasonal job offer from an employer based in that designated community. In-Alberta applicants can be NOC TEER 0–5; from outside Alberta, TEER 0–3." },
              { title: "Submit your EOI & apply to AAIP", desc: "With the endorsement in hand, submit your Worker EOI (with the $135 fee). If invited, file your AAIP application ($1,500) for nomination, then apply to IRCC for PR." },
            ]}
          />

          <h2>How do I get a rural renewal endorsement letter?</h2>
          <p>
            To get a <strong>rural renewal endorsement letter</strong>, you apply directly to a designated community, not
            to the AAIP. Each community runs its own local Community Economic Development Organization, which reviews
            candidate applications against its labour needs. You typically submit your full-time job offer from a local
            employer, your language-test results, your resume and proof you meet the basic criteria. If the community
            supports your settlement, it issues the endorsement letter.
          </p>
          <p>
            Two things changed on <strong>January 1, 2026</strong> that matter here: the endorsement is now valid for{" "}
            <strong>12 months</strong>, and many communities apply their own caps on how many candidates they will
            endorse. That means an endorsement is not always available even if you qualify, so it is worth confirming a
            community is actively endorsing before you build your plan around it. Our{" "}
            <a href={COMMUNITIES_PATH}>designated communities</a> page keeps a current list.
          </p>
          <Callout type="warning" title="The work-permit rule changed on January 1, 2026">
            Under the overhauled Rural Renewal Stream, you must hold a <strong>valid work permit</strong> to apply.{" "}
            <strong>Implied or maintained status is no longer accepted, and restoration is refused.</strong> This is one
            of the most common avoidable reasons a Rural Renewal application now fails. Check your permit status carefully
            before you submit.
          </Callout>

          <h2>What is a designated community in Alberta?</h2>
          <p>
            A <strong>designated community</strong> is a smaller Alberta municipality, outside the Calgary and Edmonton
            census metropolitan areas, that Alberta has approved to participate in the Rural Renewal Stream through an
            approved Community Economic Development Organization. Alberta has designated dozens of such communities across
            the province, and the list shifts as communities join, pause or fill their caps.
          </p>
          <p>
            Because the list changes and each community endorses on its own terms, we maintain a full, current breakdown
            on a dedicated page rather than printing a static list that goes stale. See the complete, up-to-date list of{" "}
            <a href={COMMUNITIES_PATH}>designated communities for the Alberta Rural Renewal Stream</a>, including which
            communities are actively endorsing, before you choose where to settle.
          </p>

          <h2>What are the Rural Renewal eligibility requirements for 2026?</h2>
          <p>
            <strong>Rural Renewal eligibility in 2026</strong> rests on three pillars: language, education and the rural
            renewal job offer requirements. The thresholds below summarise the core requirements; some communities and
            occupations layer on additional criteria, and all figures should be confirmed on alberta.ca.
          </p>
          <DataTable
            headers={["Requirement", "What you need", "Notes"]}
            rows={[
              ["Community endorsement", "A valid rural renewal endorsement letter", "From a designated community; valid 12 months (since Jan 1, 2026)"],
              ["Job offer", "Full-time, non-seasonal offer from a community employer", "In-Alberta: NOC TEER 0–5 · From outside Alberta: TEER 0–3"],
              ["Language", "CLB / NCLC 4+ in all four abilities", "English or French, from an approved test"],
              ["Education", "High-school diploma or equivalent (minimum)", "Higher credentials score more on the Worker EOI"],
              ["Work-permit status", "A valid work permit to apply", "Implied/maintained status not accepted; restoration refused"],
            ]}
            caption="Core Alberta Rural Renewal Stream requirements, current to May 2026 (alberta.ca). Verify before applying, criteria change."
          />
          <Callout type="info" title="In-Alberta vs from-outside applicants">
            The overhauled stream treats the two differently. If you are <strong>already in Alberta</strong>, your job
            offer can be in a NOC <strong>TEER 0–5</strong> occupation. If you are applying <strong>from outside
            Alberta</strong>, the offer must be in a higher-skill <strong>TEER 0–3</strong> occupation. Confirm your
            occupation&apos;s TEER before committing to the stream.
          </Callout>

          <h2>How is the Worker EOI scored for Rural Renewal?</h2>
          <p>
            Like all AAIP worker pathways, Rural Renewal candidates are ranked through the{" "}
            <strong>Worker Expression of Interest (WEOI)</strong>, scored out of <strong>100 points</strong>, split into
            human capital (max 69) and economic factors (max 31). The Rural Renewal route has a built-in advantage in the
            economic section: a designated-community endorsement and a rural job location both score points that a
            big-city offer does not.
          </p>
          <DataTable
            headers={["Scoring factor", "Why Rural Renewal benefits", "Points"]}
            rows={[
              ["Permanent full-time Alberta job offer", "Required for the stream, every applicant has one", "10"],
              ["Job offer in a select rural / sector area", "A Rural Renewal designated-community endorsement letter qualifies", "6"],
              ["Alberta job offer location", "A Rural Renewal community scores; Calgary/Edmonton CMA score 0", "5"],
              ["General language proficiency", "Scored on your lowest of four abilities (CLB 4 minimum)", "up to 10"],
            ]}
            caption="Selected AAIP Worker EOI factors that reward a Rural Renewal designated-community offer (alberta.ca points grid, Aug 2025). Max total 100."
          />
          <p>
            In other words, the same person can score higher through Rural Renewal than through an urban offer, because a
            designated-community endorsement unlocks the rural and sector points. Use our{" "}
            <a href="/tools/aaip-calculator">free AAIP points calculator</a> to see where your Worker EOI lands.
          </p>

          <h2>What are the Rural Renewal cut-offs in 2026?</h2>
          <p>
            Alberta holds Rural Renewal draws &ldquo;as needed&rdquo; and publishes the minimum EOI score for each round.
            In 2026, Rural Renewal cut-offs have landed around <strong>46 to 50</strong>, lower than the Alberta
            Opportunity Stream&apos;s typical 54–57. The sample below is illustrative; cut-offs change every draw, so always
            check the live alberta.ca processing-information page before relying on any number.
          </p>
          <DataTable
            headers={["Date (2026)", "Stream", "Invites", "Min EOI"]}
            rows={[
              ["Apr 9", "Rural Renewal", "74", "50"],
              ["Feb 2", "Alberta Opportunity Stream (for comparison)", "915", "57"],
              ["May 6", "Alberta Opportunity Stream (for comparison)", "832", "54"],
            ]}
            caption="Illustrative 2026 AAIP draws (alberta.ca, AAIP processing information). Figures change every draw, verify live."
          />
          <p>
            Because the 2026 Rural Renewal allocation is only around <strong>1,000</strong> nominations, expect
            competition to stay firm and endorsements to be the real bottleneck. A lower EOI cut-off does not make this an
            easy route. Winning a community endorsement, with its 12-month validity and per-community caps, is often the
            harder step.
          </p>

          <h2>What are the Rural Renewal fees and processing times?</h2>
          <p>
            Alberta introduced a <strong>$135 Worker Expression of Interest (WEOI) submission fee</strong> effective{" "}
            <strong>April 7, 2026</strong>. On top of that, the <strong>AAIP application fee is $1,500</strong> and is
            non-refundable, and a reconsideration request costs $250. These are provincial fees only; once you reach the
            IRCC stage you pay separate federal permanent-residence fees. Many communities do not charge for the
            endorsement itself, but confirm with the specific community.
          </p>
          <DataTable
            headers={["Fee", "Amount", "Notes"]}
            rows={[
              ["Worker EOI (WEOI) submission", "$135", "New, effective April 7, 2026"],
              ["AAIP application", "$1,500", "Non-refundable"],
              ["Reconsideration request", "$250", "If you dispute a decision"],
              ["Federal IRCC PR application", "Separate", "Paid later, once nominated"],
            ]}
            caption="AAIP fees, current to May 2026 (alberta.ca). Federal IRCC fees are separate. Confirm amounts before paying."
          />
          <p>
            Alberta does not publish a single guaranteed processing time, and your timeline depends on the community
            endorsement step plus the AAIP and federal stages. After a nomination, the federal PR application is a separate
            stage: because Rural Renewal is a <strong>base</strong> stream, IRCC processes it as a base PNP application,
            which can take longer than the roughly six months for enhanced (Express Entry) PNP applications (source:
            canada.ca, processing times, 2026). Treat any estimate as approximate and verify on alberta.ca and canada.ca.
          </p>

          <h2>Rural Renewal vs the Alberta Opportunity Stream, which fits?</h2>
          <p>
            Both are base AAIP streams, but they suit different people. The{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> is for temporary foreign
            workers already living and working anywhere in Alberta on a valid permit, no community endorsement needed.</p>
          <p>The
            Rural Renewal Stream is built around <em>settling in a specific designated community</em>, which means an extra
            endorsement step but a lower EOI cut-off and access to rural and sector points. If your job and life are
            genuinely rooted in a smaller Alberta community, Rural Renewal is often the stronger route; if you are in a
            big-city role, the Opportunity Stream usually fits better.
          </p>

          <h2>How Wild Mountain helps with your Rural Renewal application</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and we work with the{" "}
            <a href="/alberta-immigration">AAIP</a> every day. Working under a licensed RCIC (CICC #R706497), our team
            helps you target the right <a href={COMMUNITIES_PATH}>designated community</a>, prepare a
            community-endorsement application that stands out, and build a Worker EOI that captures every rural and sector
            point you are entitled to. We catch the small mistakes that cause avoidable refusals, such as the wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr> TEER level for a from-outside applicant, or a
            work-permit-status issue under the new January 2026 rules.
          </p>
          <p>
            If a rural move is not your fit, we compare Rural Renewal with the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a> and the{" "}
            <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a>, weigh your federal{" "}
            <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, and set Alberta against other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>. We can line up the right{" "}
            <a href="/work-permits">work permit</a>, score you with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and explain our{" "}
            <a href="/fees">fees</a> up front.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own{" "}
            <strong>Alberta Rural Renewal Stream</strong> application an expert check before you submit. Rural Renewal
            rules, communities and cut-offs change frequently, so we always confirm the live alberta.ca guidance before
            advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">Rural Renewal is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={MapPin} title="Designated communities" desc="The full, current list of Alberta communities endorsing for Rural Renewal." href={COMMUNITIES_PATH} />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base AAIP route for workers already employed anywhere in Alberta." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Store} title="Rural Entrepreneur Stream" desc="Start or buy a business in a smaller Alberta community instead of working for an employer." href="/alberta-immigration/rural-entrepreneur-stream" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The federal system behind the enhanced stream and the CRS score that drives it." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Planning a move to rural Alberta?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on your Rural Renewal endorsement, eligibility and Worker EOI score."
      />
    </>
  );
}
