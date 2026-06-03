import type { Metadata } from "next";
import { Calculator, Rocket, MapPin, Briefcase, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/opportunity-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Opportunity Stream (AOS) 2026 (RCIC)",
  titleAbsolute: "Alberta Opportunity Stream 2026: Requirements & EOI",
  description:
    "Alberta Opportunity Stream requirements 2026: AOS eligibility, language, EOI cut-offs, $135 + $1,500 fees. RCIC-reviewed, talk to us before you apply.",
  path: PATH,
  keywords: [
    "alberta opportunity stream",
    "alberta opportunity stream requirements 2026",
    "alberta opportunity stream eligibility",
    "aos",
    "aaip opportunity stream",
  ],
});

const faqs = [
  {
    q: "What EOI score do I need for the Opportunity Stream?",
    a: "There is no fixed pass mark. Alberta sets the cut-off draw by draw, and in 2026 the Alberta Opportunity Stream has been landing around 54–57 out of 100. Treat that as a moving target, not a guarantee. Meeting it does not entitle you to an invitation, so always check the latest alberta.ca draw results before relying on any number.",
  },
  {
    q: "Do I need a job offer for the Alberta Opportunity Stream?",
    a: "Yes. The AOS requires a full-time, ongoing job offer from your current Alberta employer in an eligible occupation, and you must already be working in Alberta on a valid work permit. The stream is built for temporary foreign workers in the province, it is not a route you can use from outside Canada or without a qualifying Alberta employer.",
  },
  {
    q: "How long does the Alberta Opportunity Stream take to process?",
    a: "Alberta does not publish a single guaranteed timeline, and it depends on your file and current volumes. The AOS is a base stream, so after a provincial nomination you file a separate paper application with IRCC for permanent residence, which can take longer than the roughly six months IRCC targets for enhanced PNP applications. Verify current times on alberta.ca and canada.ca.",
  },
  {
    q: "What is the language requirement for the Opportunity Stream?",
    a: "Language scales with your job. Most occupations in NOC TEER 0–3 need CLB 5, while TEER 4–5 occupations need CLB 4, both measured on your lowest of four abilities. Some regulated roles set a higher bar, for example NOC 33102 (nurse aides/orderlies) requires CLB 7. You must take an approved English or French test; results are valid for two years.",
  },
  {
    q: "How is the Alberta Opportunity Stream different from the Express Entry Stream?",
    a: "The AOS is a base stream for workers already employed in Alberta, a nomination leads to a separate IRCC paper application and adds no CRS points. The Alberta Express Entry Stream is enhanced: you need a federal Express Entry profile with CRS of at least 300, and a nomination adds 600 CRS points. Many AOS applicants do not have an Express Entry profile at all.",
  },
  {
    q: "How much does the Alberta Opportunity Stream cost in 2026?",
    a: "You pay a $135 Worker Expression of Interest (WEOI) submission fee, new as of April 7, 2026, plus the $1,500 non-refundable AAIP application fee if you are invited and apply. A reconsideration request costs $250. These are provincial fees only, separate federal IRCC permanent-residence fees apply once you reach that stage. Confirm current amounts on alberta.ca before paying.",
  },
  {
    q: "Does an Opportunity Stream nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function OpportunityStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Opportunity Stream Requirements 2026 (AOS Guide)",
            description:
              "Alberta Opportunity Stream requirements 2026: AOS eligibility, language, EOI cut-offs, $135 + $1,500 fees and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Alberta Opportunity Stream (AOS) application support",
            description:
              "Alberta Opportunity Stream requirements 2026: AOS eligibility, language, EOI cut-offs, $135 + $1,500 fees and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta Advantage Immigration Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Opportunity Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Opportunity Stream", path: PATH },
        ]}
        title={<>Alberta Opportunity Stream: <span className="text-brand">requirements for 2026</span></>}
        lede={
          <p>
            The <strong>Alberta Opportunity Stream requirements for 2026</strong> are built for one group: temporary
            foreign workers already employed in Alberta on a valid work permit, with a qualifying full-time job offer. This
            RCIC-reviewed guide walks through AOS eligibility, the Worker EOI score, fees and exactly how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free AAIP Points Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Estimate your Alberta Worker EOI score (out of 100) in two minutes, no email required.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Calculate my EOI score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Alberta Express Entry Stream", href: "/alberta-immigration/express-entry-stream", note: "The enhanced +600 CRS route" },
                { label: "Rural Renewal Stream", href: "/alberta-immigration/rural-renewal-stream", note: "For rural Alberta jobs" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Opportunity Stream (AOS) is a base AAIP stream for temporary foreign workers already living and working in Alberta on a valid work permit with an eligible full-time job offer. You must also meet occupation, language, education and minimum-income bars. Candidates submit a Worker Expression of Interest scored out of 100, and a nomination supports a separate permanent residence application to IRCC."
            items={[
              <>The <strong>Alberta Opportunity Stream (AOS)</strong> is a base AAIP stream for workers <strong>already in Alberta</strong> with an eligible job and a valid work permit.</>,
              <>Core <strong>AOS eligibility</strong>: an eligible occupation job offer, current Alberta work permit, language (<strong>CLB 5</strong> / CLB 4 for some TEER levels), education and minimum income.</>,
              <>The <strong>Worker EOI is scored out of 100</strong>, and 2026 AOS draw cut-offs have landed around <strong>54–57</strong>.</>,
              <>Fees in 2026: a <strong>$135 Worker EOI fee</strong> (new April 7, 2026) plus the <strong>$1,500</strong> AAIP application fee.</>,
              <>It is a <strong>base stream</strong>: a nomination leads to a separate IRCC paper application, not 600 CRS points.</>,
            ]}
          />

          <h2>What is the Alberta Opportunity Stream (AOS)?</h2>
          <p>
            The <strong>Alberta Opportunity Stream</strong> is a base stream of the Alberta Advantage Immigration Program
            (AAIP) for temporary foreign workers who are <em>already</em> living and working in Alberta on a valid work
            permit, with an ongoing full-time job offer from their Alberta employer. It is the AAIP&apos;s highest-volume
            worker route, carrying roughly <strong>80% of AAIP invitation volume</strong>. Alberta&apos;s 2026
            allocation for the stream is about <strong>3,425 nominations</strong> out of a total provincial cap of 6,403
            (source: alberta.ca, AAIP processing information, May 2026). Because it is a base stream, an Opportunity Stream
            nomination leads to a separate paper application to IRCC for permanent residence rather than adding points to a
            federal Express Entry profile.
          </p>
          <Callout type="brand" title="The AOS is an in-Alberta stream">
            You cannot use the Opportunity Stream from outside Canada. It is designed for people who already hold a valid
            Alberta work permit and a qualifying Alberta job offer. If you are still abroad, the Alberta Express Entry
            Stream or a rural pathway may fit better.
          </Callout>

          <h2>What are the Alberta Opportunity Stream eligibility requirements for 2026?</h2>
          <p>
            <strong>Alberta Opportunity Stream eligibility</strong> rests on a connected set of requirements you must meet
            at the time you submit your Worker Expression of Interest (EOI). Miss any one of them and the application can
            be refused: the wrong <abbr title="National Occupational Classification">NOC</abbr> code, a language ability
            one band short, or a permit that has lapsed. The table below summarises the core 2026 requirements;
            the official, controlling list of AOS eligible occupations and the Alberta Opportunity Stream NOC list live on
            alberta.ca and change periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the AOS asks for"]}
            rows={[
              ["Job offer", "Full-time, ongoing offer from your current Alberta employer in an eligible occupation (most NOC TEER 0–5; some occupations are ineligible)"],
              ["Work permit", "The work permit status requirement: a valid Alberta work permit at submission, implied or maintained status alone is not enough; you must be working in Alberta"],
              ["Language", "CLB 5 for NOC TEER 0–3; CLB 4 for TEER 4–5; higher for some regulated roles (e.g. NOC 33102 needs CLB 7), approved test, valid 2 years"],
              ["Education", "At least high-school completion; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Minimum income", "Total household income must meet or exceed the low-income cut-off (LICO) for your family size"],
              ["Residence & intent", "You must be living and working in Alberta and intend to settle in the province"],
              ["Work experience", "Recent, eligible work experience that matches your offered occupation, on the right permit type"],
            ]}
            caption="Alberta Opportunity Stream core eligibility, accurate as of May 2026 (alberta.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The CLB level is taken from the lowest of your four abilities, reading, writing, listening and speaking, so a
            single weak skill can drop you below the threshold for your occupation. Lifting your weakest band is often the
            single most valuable thing you can do before submitting.
          </Callout>

          <h2>How does the AOS differ from the Alberta Express Entry Stream?</h2>
          <p>
            The simplest way to understand the AAIP Opportunity Stream is to contrast it with the province&apos;s only
            enhanced stream. The <strong>AOS is a base stream</strong>: you do not need an Express Entry profile, and a
            nomination does not add CRS points, instead it leads to a separate IRCC paper application. The{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a> is enhanced: you must
            already have a federal Express Entry profile with a Comprehensive Ranking System score of at least 300, and a
            nomination adds 600 CRS points, putting most candidates well above the typical Express Entry cut-off.
          </p>
          <DataTable
            headers={["Feature", "Opportunity Stream (AOS)", "Express Entry Stream"]}
            rows={[
              ["Stream type", "Base", "Enhanced"],
              ["Express Entry profile", "Not required", "Required (CRS ≥ 300)"],
              ["Effect of nomination", "Leads to a separate IRCC paper application", "Adds 600 CRS points"],
              ["Must be in Alberta?", "Yes, working on a valid permit", "No, can select from the federal pool"],
              ["Job offer", "Required", "Optional (but adds Worker EOI points)"],
            ]}
            caption="Alberta Opportunity Stream vs Alberta Express Entry Stream (alberta.ca, May 2026)."
          />

          <h2>How is the Worker EOI scored for the Opportunity Stream?</h2>
          <p>
            Like every AAIP worker pathway, the Opportunity Stream is ranked through the{" "}
            <strong>Worker Expression of Interest (WEOI)</strong>, scored out of <strong>100 points</strong>, split into
            human capital (max 69) and economic factors (max 31). You submit your EOI once it meets the minimums above; it
            then sits in Alberta&apos;s pool, valid for one year, and Alberta invites the highest-ranked candidates in each
            draw. The summary grid below shows where the points come from; our{" "}
            <a href="/tools/aaip-calculator">free AAIP calculator</a> estimates your exact score.
          </p>
          <DataTable
            headers={["Section", "Factor", "Maximum points"]}
            rows={[
              ["Human capital (69)", "Highest education completed", "12"],
              ["Human capital", "Location of education (10 if in Alberta)", "10"],
              ["Human capital", "General language proficiency", "10"],
              ["Human capital", "Bilingual proficiency (CLB 4+ both)", "3"],
              ["Human capital", "Total work experience (Canada + abroad)", "11"],
              ["Human capital", "Work experience in Canada (10 if 6+ mo in Alberta)", "10"],
              ["Human capital", "Age (max at 21–34)", "5"],
              ["Human capital", "Family connection in Alberta", "8"],
              ["Economic factors (31)", "Permanent full-time Alberta job offer", "10"],
              ["Economic factors", "Regulated occupation (with certification)", "10"],
              ["Economic factors", "Job offer in a select rural / sector area", "6"],
              ["Economic factors", "Alberta job offer location (rural / other community)", "5"],
            ]}
            caption="AAIP Worker EOI points grid summary (alberta.ca, Aug 2025 grid). Max 100 = 69 human capital + 31 economic."
          />
          <p>
            For AOS candidates, the economic factors usually do a lot of the work: a permanent Alberta job offer is worth
            10 points on its own, and Canadian (ideally Alberta) experience and education completed in the province lift
            the human-capital side. Because the AOS pool is large, a competitive score matters, but remember that meeting
            a cut-off is necessary, not sufficient.
          </p>

          <h2>What are the recent 2026 AOS draw cut-offs?</h2>
          <p>
            In 2026, Alberta Opportunity Stream draws have cut off at a <strong>minimum EOI of roughly 54–57</strong> out
            of 100, with invitation rounds in the hundreds. Alberta holds draws &ldquo;as needed&rdquo; rather than on a
            fixed schedule and publishes the minimum score for each round, so the figures below are a representative
            sample, always check the live alberta.ca processing-information page before relying on any number.
          </p>
          <DataTable
            headers={["Date (2026)", "Stream", "Invitations", "Min EOI"]}
            rows={[
              ["Feb 2", "Alberta Opportunity Stream", "915", "57"],
              ["May 6", "Alberta Opportunity Stream", "832", "54"],
            ]}
            caption="Illustrative 2026 Alberta Opportunity Stream draws (alberta.ca, AAIP processing information). Figures change every draw, verify live."
          />
          <Callout type="warning" title="Eligibility does not guarantee an invitation">
            The AOS is points-ranked. Meeting every requirement places you in the pool, but Alberta invites only the
            highest-scoring candidates each draw. With the 2026 allocation capped at around 3,425 AOS nominations,
            competition stays firm, beware any source that implies a place is guaranteed.
          </Callout>

          <h2>What are the AOS fees and processing times in 2026?</h2>
          <p>
            Alberta introduced a <strong>$135 Worker Expression of Interest (WEOI) submission fee</strong> effective{" "}
            <strong>April 7, 2026</strong>, charged when you submit your EOI. If you are invited and apply, the{" "}
            <strong>AAIP application fee is $1,500</strong> and is non-refundable; a reconsideration request costs $250.
            These are provincial fees only, once you reach the IRCC stage you pay separate federal permanent-residence
            fees.
          </p>
          <DataTable
            headers={["Fee", "Amount", "Notes"]}
            rows={[
              ["Worker EOI (WEOI) submission", "$135", "New, effective April 7, 2026"],
              ["AAIP application", "$1,500", "Non-refundable; paid after an invitation"],
              ["Reconsideration request", "$250", "If you dispute a decision"],
            ]}
            caption="Alberta Opportunity Stream fees, current to May 2026 (alberta.ca). Federal IRCC fees are separate. Confirm before paying."
          />
          <h3>How long does the Opportunity Stream take?</h3>
          <p>
            Alberta does not publish a single guaranteed Alberta Opportunity Stream processing time, and your timeline
            depends on the completeness of your file and current volumes. Because the AOS is a base stream, the federal
            stage is a separate paper
            application: IRCC targets roughly six months for enhanced (Express Entry) PNP applications, while base PNP
            applications such as the Opportunity Stream can take longer (source: canada.ca, processing times, 2026). Both
            provincial and federal timelines move with demand, so treat any estimate as approximate and verify on
            alberta.ca and canada.ca.
          </p>

          <h2>How to apply for the Alberta Opportunity Stream step by step</h2>
          <p>
            <strong>How to apply for the Alberta Opportunity Stream</strong> follows the standard AAIP worker sequence, EOI first, invitation, then a full application. The steps below show the path from confirming eligibility to a
            federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm AOS eligibility", desc: "Check that you hold a valid Alberta work permit, have a full-time ongoing offer in an eligible occupation, and meet the language, education and minimum-income bars." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test (IELTS, CELPIP or TEF/TCF), obtain an ECA for foreign education, and collect work-permit, job-offer and experience evidence." },
              { title: "Submit your Worker EOI", desc: "Create and submit your WEOI with the $135 fee (from April 7, 2026). It stays in Alberta's pool for one year, scored out of 100." },
              { title: "Receive an invitation", desc: "If your EOI meets an AOS draw's cut-off (around 54–57 in 2026), Alberta issues an invitation to apply. Eligibility alone does not guarantee this." },
              { title: "Apply to the AAIP & get nominated", desc: "Submit a complete Opportunity Stream application with the $1,500 fee. On approval, Alberta nominates you for permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain helps with your Opportunity Stream application</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. Working under a licensed RCIC
            (CICC #R706497), our team confirms your AOS eligibility, builds your Worker EOI to capture every point you are
            entitled to, and prepares a nomination and federal application that stand up to scrutiny. We catch the
            avoidable mistakes that cause refusals: a wrong NOC code, a language band one short, or a work-permit-status
            gap.
          </p>
          <p>
            If the AOS is not your fit, we can compare it with the{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, the{" "}
            <a href="/alberta-immigration/rural-renewal-stream">Rural Renewal Stream</a> or the{" "}
            <a href="/alberta-immigration/tourism-hospitality-stream">Tourism &amp; Hospitality Stream</a>, and against{" "}
            <a href="/express-entry">Express Entry</a> and other{" "}
            <a href="/pnp">provincial nominee programs</a>. See how a nomination interacts with your{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, build the Alberta experience the AOS
            needs through a <a href="/work-permits">work permit</a>, and read our{" "}
            <a href="/fees">fees guide</a> before you decide.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Alberta Opportunity Stream application an expert check before you submit. Figures here are current to
            2026 and change with each draw, so we always confirm the live alberta.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Opportunity Stream is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="The enhanced route that adds 600 CRS points to a federal Express Entry profile." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={MapPin} title="Rural Renewal Stream" desc="Settle in a designated rural community with an employer and community endorsement." href="/alberta-immigration/rural-renewal-stream" />
            <FeatureCard icon={Calculator} title="AAIP points calculator" desc="Estimate your Worker EOI score out of 100 in two minutes, free, no email required." href="/tools/aaip-calculator" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The federal system behind the enhanced stream and the CRS score that drives it." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to apply through the Opportunity Stream?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on your AOS eligibility and Worker EOI score."
      />
    </>
  );
}
