import type { Metadata } from "next";
import { Calculator, Rocket, Briefcase, Cpu, HeartPulse, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/express-entry-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Express Entry Stream, AAIP 2026",
  titleAbsolute: "Alberta Express Entry Stream 2026: AAIP Eligibility",
  description:
    "The Alberta Express Entry Stream: how the AAIP notifies federal pool candidates, the CRS 300 floor, the +600 nomination and how to apply. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "Alberta Express Entry Stream",
    "AAIP Express Entry Stream",
    "Alberta nomination 600 CRS",
    "CRS 300 Alberta",
    "how does the AAIP notification work",
  ],
});

const faqs = [
  {
    q: "Do I need CRS 300 for the Alberta Express Entry Stream?",
    a: "Yes. The Alberta Express Entry Stream sets a hard floor of a Comprehensive Ranking System (CRS) score of at least 300. You must have an active federal Express Entry profile sitting at 300 or above before Alberta will consider notifying you. Candidates below 300 are not eligible for this enhanced stream, no matter how strong their Alberta Worker Expression of Interest (EOI) is. The CRS 300 requirement is separate from your Worker EOI score, so you need to clear both.",
  },
  {
    q: "How does Alberta notify candidates in the Express Entry Stream?",
    a: "Alberta searches the federal Express Entry pool for candidates who meet the stream's criteria and match its priority sectors, then issues a Notification of Interest (NOI) through the federal Express Entry account. The Notification of Interest is an invitation to apply to the AAIP, it is not a nomination and not permanent residence. If you receive an NOI and accept, you then submit a full AAIP application; only after Alberta approves it are you nominated and given 600 CRS points. You cannot request an NOI; Alberta selects candidates from the pool.",
  },
  {
    q: "How many CRS points does an Alberta nomination add?",
    a: "An Alberta nomination through the Express Entry Stream adds 600 CRS points to your federal Express Entry profile. Because the maximum core score is far below that, the +600 lifts most eligible profiles well above the cut-off in the next provincial-nominee Express Entry draw, though IRCC still issues the Invitation to Apply for permanent residence. The 600-point boost is the defining advantage of an enhanced stream over a base stream.",
  },
  {
    q: "What is the difference between the Express Entry Stream and the Opportunity Stream?",
    a: "The Alberta Express Entry Stream is enhanced and aligned with the federal Express Entry system: you need a CRS of at least 300, and a nomination adds 600 CRS points to your federal profile. The Alberta Opportunity Stream is a base stream for temporary foreign workers already working in Alberta, a nomination there leads to a separate paper application to IRCC and adds no CRS points. The Express Entry Stream can also select candidates from outside Alberta, while the Opportunity Stream requires you to already be living and working in the province.",
  },
  {
    q: "Does the Alberta Express Entry Stream need a job offer?",
    a: "Not always. Unlike most AAIP pathways, the main Alberta Express Entry Stream can select skilled workers from the federal pool without an Alberta job offer, provided they meet the criteria and Alberta's priorities. However, a permanent full-time Alberta job offer adds up to 10 economic-factor points to your Worker EOI, and the Accelerated Tech and Dedicated Health Care pathways within the stream are employer-driven and require a matching Alberta offer.",
  },
  {
    q: "Does a Notification of Interest guarantee a nomination?",
    a: "No. A Notification of Interest is an invitation to apply to the AAIP, not a nomination and not permanent residence. After you accept and submit a complete AAIP application, Alberta assesses it and can still refuse if you do not meet every requirement. Even after a nomination, IRCC makes the final permanent-residence decision on medical, security and admissibility grounds. We build the strongest possible application.",
  },
  {
    q: "What are the two scores in the AAIP Express Entry Stream?",
    a: "The Alberta Express Entry Stream uses two separate scores. Your federal CRS (out of 1,200) decides whether you clear the 300 floor and benefit from the +600 nomination. Your Alberta Worker EOI (out of 100) is a provincial score that ranks you within Alberta's pool for selection. You need to be competitive on both, a strong CRS alone does not guarantee a Notification of Interest, and a strong EOI alone is useless below CRS 300.",
  },
  {
    q: "Can I be selected from outside Alberta?",
    a: "Yes. The Alberta Express Entry Stream can notify skilled workers in the federal pool who are living outside the province, as long as they meet the criteria and intend to settle in Alberta. This is a key difference from the Alberta Opportunity Stream, which requires you to already be working in Alberta on a valid permit. That said, Alberta connections and a permanent Alberta job offer both add Worker EOI points that improve your chances of selection.",
  },
];

export default function AlbertaExpressEntryStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Express Entry Stream, The AAIP Enhanced Stream Explained (2026)",
            description:
              "The Alberta Express Entry Stream: how the AAIP notifies federal pool candidates, the CRS 300 floor, the +600 nomination and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Alberta Express Entry Stream (AAIP) support",
            description:
              "The Alberta Express Entry Stream: how the AAIP notifies federal pool candidates, the CRS 300 floor, the +600 nomination and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta Express Entry Stream consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Enhanced Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Express Entry Stream", path: PATH },
        ]}
        title={<>The Alberta Express Entry Stream: <span className="text-brand">+600 CRS, explained</span></>}
        lede={
          <p>
            The <strong>Alberta Express Entry Stream</strong> is the AAIP&apos;s enhanced route: Alberta notifies eligible
            candidates already in the federal Express Entry pool, and a provincial nomination adds 600 CRS points to your
            profile. This guide explains the two-score rule, how Alberta selects, and how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Score your AAIP EOI, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free AAIP & CRS calculators</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Check your Alberta Worker EOI (out of 100) and your federal CRS, both matter for this stream. No email required.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Score my AAIP EOI</Button>
              <Button href="/tools/crs-calculator" className="mt-3 w-full" variant="secondary">Calculate my CRS</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every AAIP stream explained" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "The AAIP base stream" },
                { label: "Express Entry", href: "/express-entry", note: "The federal pool that feeds this stream" },
                { label: "How the CRS works", href: "/express-entry/comprehensive-ranking-system", note: "Where the +600 lands" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Express Entry Stream is the AAIP's only enhanced stream, designed for candidates with an active federal Express Entry profile (generally CRS 300 or higher) and a competitive Alberta Worker Expression of Interest. Alberta selects from the federal pool and issues a Notification of Interest to apply. A provincial nomination adds 600 CRS points toward an invitation for permanent residence."
            items={[
              <>The <strong>Alberta Express Entry Stream</strong> is the AAIP&apos;s only <strong>enhanced</strong> stream, a nomination adds <strong>600 CRS</strong> to your federal profile.</>,
              <>It runs on a <strong>two-score rule</strong>: an active federal Express Entry profile at <strong>CRS 300+</strong> AND a competitive Alberta Worker EOI (out of 100).</>,
              <>Alberta selects from the federal pool and issues a <strong>Notification of Interest (NOI)</strong>, you cannot request one.</>,
              <>An NOI is an invitation to <em>apply</em> to the AAIP, it is <strong>not a nomination</strong> and not permanent residence.</>,
              <>Unlike the base <a href="/alberta-immigration/opportunity-stream">Opportunity Stream</a>, it can select candidates from <strong>outside Alberta</strong> and needs no mandatory job offer.</>,
            ]}
          />

          <h2>What is the Alberta Express Entry Stream?</h2>
          <p>
            The <strong>Alberta Express Entry Stream</strong> is the enhanced pathway of the Alberta Advantage Immigration
            Program (AAIP). &ldquo;Enhanced&rdquo; means it is wired into the federal{" "}
            <a href="/express-entry">Express Entry</a> system: Alberta searches the federal pool, notifies candidates it
            wants, and a provincial nomination then adds <strong>600 CRS points</strong> to your profile.</p>
          <p>To be eligible
            you must already have an active federal Express Entry profile with a Comprehensive Ranking System score of at
            least <strong>300</strong> (source: alberta.ca, Alberta Express Entry Stream eligibility, 2026). That CRS 300
            floor is a hard requirement set by Alberta, and it is the first thing to confirm before anything else.
          </p>
          <p>
            This stream is one of the most powerful routes to permanent residence in Alberta because of that +600. The
            federal core score tops out well below 600, so the nomination lifts most eligible profiles well above the
            cut-off in the next provincial-nominee Express Entry draw, though IRCC still issues the Invitation to Apply (ITA).
            But the stream is selective: Alberta&apos;s 2026 nomination allocation across the whole AAIP is just{" "}
            <strong>6,403</strong>, down from 9,750 in 2024 (source: alberta.ca, AAIP, 2026), so a strong profile is not a
            formality.
          </p>
          <Callout type="brand" title="Enhanced vs base, the one fact that matters">
            Only an <strong>enhanced</strong> stream adds CRS points. The Alberta Express Entry Stream is enhanced (+600
            CRS). The Alberta Opportunity Stream is <em>base</em>, a nomination there leads to a separate paper
            application to IRCC and adds no CRS points at all.
          </Callout>

          <h2>How does the two-score rule work?</h2>
          <p>
            The Alberta Express Entry Stream uses <strong>two separate scores</strong>, and you must be competitive on
            both. Don&apos;t conflate them. Your <strong>federal CRS</strong> (out of 1,200) decides whether you clear the
            300 floor and benefit from the +600. Your <strong>Alberta Worker EOI</strong> (out of 100) is a provincial
            score that ranks you within Alberta&apos;s pool when the province decides who to notify. A strong CRS alone does
            not earn a Notification of Interest, and a strong EOI is worthless if your CRS sits below 300.
          </p>
          <DataTable
            headers={["Score", "Range", "Who sets it", "What it does"]}
            rows={[
              ["Federal CRS", "0–1,200", "IRCC (federal)", "Must be ≥ 300 to be eligible; the +600 nomination is added here"],
              ["Alberta Worker EOI", "0–100", "Government of Alberta", "Ranks you in Alberta's pool for a Notification of Interest"],
            ]}
            caption="The two scores in the Alberta Express Entry Stream (alberta.ca, 2026). You need both, they are not the same thing."
          />
          <p>
            Use our <a href="/tools/crs-calculator">free CRS calculator</a> to confirm you clear the 300 floor, and our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> to estimate your Worker EOI out of 100. Knowing both
            numbers is the only honest starting point for this stream.
          </p>

          <h2>How does the AAIP notification work?</h2>
          <p>
            Alberta does not take direct applications to the Express Entry Stream, it <em>selects</em> candidates from the
            federal pool. The province searches Express Entry for profiles that meet the stream&apos;s criteria and match
            its priority sectors, then issues a <strong>Notification of Interest (NOI)</strong> through your federal Express
            Entry account. An NOI is an invitation to <em>apply</em> to the AAIP, it is not a nomination and not permanent
            residence. You cannot request a Notification of Interest; selection is entirely at Alberta&apos;s discretion,
            and meeting the minimum criteria does not guarantee one.
          </p>
          <p>
            If you accept an NOI, you submit a full AAIP application within the deadline given. Processing then runs
            on Alberta&apos;s timeline: only after the province approves that application are you <strong>nominated</strong>,
            and only then do the 600 CRS points attach to your federal profile. The sequence is: be in the pool at CRS 300+
            → receive a Notification of Interest → apply to the AAIP → be nominated (+600 CRS) → receive a federal ITA →
            apply to IRCC for permanent residence.
          </p>
          <Callout type="info" title="A Notification of Interest is not a nomination">
            The NOI simply lets you apply to the AAIP. Alberta can still refuse your application, and even after a
            nomination, IRCC makes the final permanent-residence decision. Treat the NOI as the start of the provincial
            stage, not the finish line.
          </Callout>

          <h2>Who is eligible for the Alberta Express Entry Stream?</h2>
          <p>
            Eligibility rests on the federal foundation first, then Alberta&apos;s own criteria. At a minimum you must:
          </p>
          <ul>
            <li>have an <strong>active federal Express Entry profile</strong> in the pool (not just a draft);</li>
            <li>hold a Comprehensive Ranking System score of <strong>at least 300</strong>;</li>
            <li>meet the eligibility of a federal Express Entry program, Canadian Experience Class, Federal Skilled Worker or Federal Skilled Trades;</li>
            <li>have work experience in an <strong>occupation that supports Alberta&apos;s economic priorities</strong>; and</li>
            <li>show a genuine intention to live and work in Alberta.</li>
          </ul>
          <p>
            A permanent full-time Alberta job offer is <em>not</em> mandatory for the main stream, but it adds Worker EOI
            points and is required for the employer-driven pathways within the stream (below). Alberta also discontinued
            the <strong>Family Connection</strong> and <strong>Occupation in Demand</strong> pathway of the Express Entry
            Stream on <strong>March 17, 2025</strong>, older guides that still list them are out of date.
          </p>

          <h2>Which sectors and pathways does Alberta prioritise?</h2>
          <p>
            Alberta targets the Express Entry pool around its labour-market needs. The province&apos;s{" "}
            <strong>2026 priority sectors</strong> include health care, technology, construction and the trades,
            manufacturing, aviation, agriculture, tourism and hospitality, and law enforcement. Within the Express Entry
            Stream, several <strong>enhanced pathways</strong> run their own targeted draws:
          </p>
          <ul>
            <li>
              <strong>Accelerated Tech Pathway</strong>, for tech workers with an Alberta job offer, where your Express
              Entry primary occupation must match the Alberta role.
            </li>
            <li>
              <strong>Dedicated Health Care Pathway</strong>, for health professionals with an Alberta offer; it runs both
              Express Entry (enhanced) and non-Express-Entry draws.
            </li>
            <li>
              <strong>Law Enforcement Pathway</strong>, for police and peace officers identified by Alberta chiefs of
              police.
            </li>
            <li>
              <strong>Priority-sector draws</strong>, periodic enhanced rounds targeting occupations such as construction
              and the trades.
            </li>
          </ul>
          <p>
            These pathways are employer-driven, so an Alberta job offer in a matching occupation is typically required even
            though the main stream does not demand one. Our{" "}
            <a href="/alberta-immigration">full AAIP guide</a> maps every stream side by side.
          </p>

          <h2>Express Entry Stream vs Opportunity Stream: enhanced vs base</h2>
          <p>
            The two flagship AAIP worker streams differ in a way that changes your whole strategy. The Alberta Express
            Entry Stream is <strong>enhanced</strong> and works through the federal pool; the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> is <strong>base</strong> and
            built for temporary foreign workers already employed in the province. The table below sets them against each
            other.
          </p>
          <DataTable
            headers={["Feature", "Express Entry Stream", "Opportunity Stream"]}
            rows={[
              ["Type", "Enhanced (Express-Entry-aligned)", "Base (paper nomination)"],
              ["Federal Express Entry profile", "Required, CRS ≥ 300", "Not required"],
              ["CRS effect of nomination", "+600 CRS points", "None (no CRS involved)"],
              ["After nomination", "Federal ITA, then online PR application", "Separate IRCC paper PR application"],
              ["Job offer", "Not mandatory (main stream)", "Required, ongoing Alberta job offer"],
              ["Where you can be", "In Canada or abroad, in the federal pool", "Already working in Alberta on a valid permit"],
              ["How Alberta picks you", "Notification of Interest from the pool", "Invitation based on Worker EOI"],
            ]}
            caption="Alberta Express Entry Stream vs Opportunity Stream (alberta.ca, May 2026). Rules change, verify before applying."
          />
          <Callout type="info" title="The Express Entry Stream uses two scores; the Opportunity Stream uses one">
            The Express Entry Stream needs both a federal CRS (≥ 300) and a Worker EOI. The Opportunity Stream uses only the
            Worker EOI, there is no CRS, because a base nomination does not touch your federal profile.
          </Callout>

          <h2>What are the AAIP requirements and fees?</h2>
          <p>
            On top of the CRS 300 floor and an Express Entry profile, the AAIP sets baseline requirements and provincial
            fees that apply once you are notified and apply. Alberta introduced a <strong>$135 Worker Expression of
            Interest (WEOI) submission fee</strong> effective <strong>April 7, 2026</strong>, on top of the long-standing
            <strong> $1,500</strong> (non-refundable) AAIP application fee. These are provincial fees only; once you reach
            the federal stage you pay separate IRCC permanent-residence fees.
          </p>
          <DataTable
            headers={["Requirement / fee", "Detail", "Notes"]}
            rows={[
              ["Federal Express Entry profile", "Active in the pool", "Must qualify under CEC, FSW or FST"],
              ["Minimum CRS", "300", "Hard floor, separate from the Worker EOI"],
              ["Worker EOI", "Scored out of 100", "Ranks you for a Notification of Interest"],
              ["Language", "Per your Express Entry program", "CLB/NCLC tested via IELTS, CELPIP or TEF/TCF"],
              ["Education", "ECA for foreign credentials", "Needed for your Express Entry profile"],
              ["WEOI submission fee", "$135", "New, effective April 7, 2026"],
              ["AAIP application fee", "$1,500", "Non-refundable; paid after a Notification of Interest"],
            ]}
            caption="Alberta Express Entry Stream requirements and fees, current to May 2026 (alberta.ca). Federal IRCC fees are separate. Confirm before paying."
          />

          <h2>How to apply to the Alberta Express Entry Stream</h2>
          <p>
            Because Alberta selects from the pool, &ldquo;applying&rdquo; really means making yourself visible and
            competitive, then responding quickly when a Notification of Interest arrives. The path looks like this:
          </p>
          <Steps
            steps={[
              { title: "Confirm CRS 300 and your EE program", desc: "Make sure your federal Express Entry profile is active and your CRS is at least 300 under CEC, FSW or FST. Use our CRS calculator to verify." },
              { title: "Strengthen your Worker EOI", desc: "Maximise your Alberta Worker EOI (out of 100): an Alberta job offer, Alberta study or work experience, language and an Alberta family connection all add points." },
              { title: "Match Alberta's priorities", desc: "Confirm your occupation supports Alberta's 2026 priority sectors. Tech and health-care candidates may fit the Accelerated Tech or Dedicated Health Care pathways." },
              { title: "Receive a Notification of Interest", desc: "If Alberta selects you, an NOI lands in your federal Express Entry account. It is an invitation to apply to the AAIP, not a nomination." },
              { title: "Apply to the AAIP and get nominated", desc: "Submit a complete AAIP application within the deadline (the $1,500 fee applies). On approval, Alberta nominates you and IRCC adds 600 CRS." },
              { title: "Receive an ITA and apply to IRCC", desc: "With +600, you receive a federal Invitation to Apply, then file your permanent-residence application. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with the Express Entry Stream</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. Working under a licensed RCIC
            (CICC #R706497), our team makes sure your federal <a href="/express-entry">Express Entry</a> profile is built
            to clear the <a href="/express-entry/comprehensive-ranking-system">CRS</a> 300 floor and score every point it
            should, while your Alberta Worker EOI captures every economic and human-capital factor you are entitled to. We
            catch the small errors, the wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr> code, a language band one short, a credential
            assessment that doesn&apos;t match, that quietly cost points or cause avoidable refusals.
          </p>
          <p>
            If this stream is not your strongest, we can compare it with the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, the employer-driven{" "}
            <a href="/alberta-immigration/accelerated-tech-pathway">Accelerated Tech Pathway</a> and{" "}
            <a href="/alberta-immigration/dedicated-health-care-pathway">Dedicated Health Care Pathway</a>, and against
            other <a href="/pnp">provincial nominee programs</a>. Build the experience these routes reward through a{" "}
            <a href="/work-permits">work permit</a>, score yourself with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, see the wider picture in our{" "}
            <a href="/immigrate">immigrate to Canada guide</a>, and read our{" "}
            <a href="/fees">fees guide</a> before you commit.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Express Entry profile and AAIP application an expert check before you submit, including your Express Entry
            profile eligibility and your readiness for the <strong>Alberta Express Entry Stream</strong>. Figures here are
            current to 2026 and change with every draw and fee update, so we always confirm the live alberta.ca and
            canada.ca pages before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Express Entry Stream is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The federal pool this stream selects from, and the CRS score the +600 lands on." href="/express-entry" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base AAIP route for temporary foreign workers already employed in Alberta." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Cpu} title="Accelerated Tech Pathway" desc="An enhanced pathway within this stream for tech workers with a matching Alberta job." href="/alberta-immigration/accelerated-tech-pathway" />
            <FeatureCard icon={HeartPulse} title="Dedicated Health Care Pathway" desc="Enhanced and non-Express-Entry draws for health professionals with an Alberta offer." href="/alberta-immigration/dedicated-health-care-pathway" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to target the Alberta Express Entry Stream?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on your CRS, your Worker EOI and your odds of a Notification of Interest."
      />
    </>
  );
}
