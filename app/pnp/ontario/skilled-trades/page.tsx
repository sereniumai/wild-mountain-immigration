import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario/skilled-trades";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario Skilled Trades Stream (OINP) 2026",
  titleAbsolute: "Ontario Skilled Trades Stream 2026 (OINP)",
  description:
    "Ontario Skilled Trades Stream 2026: OINP eligibility, eligible trade NOCs, how NOIs work and the +600 CRS Express Entry boost. RCIC-reviewed, book a call.",
  path: PATH,
  keywords: [
    "Ontario Skilled Trades Stream",
    "OINP skilled trades",
    "Express Entry trades Ontario",
    "Ontario trades PR",
    "OINP +600 CRS",
  ],
});

const faqs = [
  {
    q: "What is the Ontario Skilled Trades Stream?",
    a: "The Ontario Skilled Trades Stream is an Express Entry-aligned (enhanced) stream of the Ontario Immigrant Nominee Program (OINP). It lets Ontario nominate tradespeople who already have a federal Express Entry profile and recent Ontario work experience in an eligible trade. Because it is enhanced, a nomination adds 600 CRS points to your Express Entry score, well above recent federal cut-offs, though IRCC still issues the Invitation to Apply at the next draw. The OINP is being redesigned in 2026, so confirm the current rules on ontario.ca before applying.",
  },
  {
    q: "What are the eligibility requirements for the Ontario Skilled Trades Stream?",
    a: "You need an active Express Entry profile in either the Federal Skilled Trades Program or the Canadian Experience Class, with at least one year of cumulative, paid, full-time (or equivalent part-time) Ontario work experience in an eligible skilled-trade occupation gained in the 24 months before you apply. You must meet the federal minimum language requirement (generally CLB 5 for speaking and listening, CLB 4 for reading and writing), intend to live in Ontario, and have legal status in Canada if you are applying from within the country. The controlling list lives on ontario.ca and is changing under the 2026 redesign.",
  },
  {
    q: "Which trades are eligible for the OINP Skilled Trades Stream?",
    a: "The stream has historically covered skilled-trade occupations in NOC major groups such as 72 (technical trades and transportation), 73 (general trades), 82 (supervisors and technical jobs in natural resources and agriculture), 92 (processing and manufacturing supervisors and central control operators) and 632/633 (chefs, cooks, butchers and bakers). Construction and industrial trades, electricians, welders, plumbers, carpenters, heavy-equipment technicians, feature heavily. The exact eligible-NOC list is set by Ontario and changes, so verify your specific occupation against the current ontario.ca list before relying on it.",
  },
  {
    q: "How does a Notification of Interest (NOI) work?",
    a: "The Skilled Trades Stream draws candidates from the federal Express Entry pool. Ontario reviews profiles and issues a Notification of Interest (NOI) to candidates who appear to meet the stream's criteria, often in targeted, occupation-specific rounds. Receiving an NOI is an invitation to apply to the OINP; it is not a nomination and not permanent residence. You then have a limited window (historically 14 days) to submit a complete online application. A profile sitting in the pool does not guarantee an NOI, Ontario selects based on its priorities at the time.",
  },
  {
    q: "Does the Skilled Trades Stream really add 600 CRS points?",
    a: "Yes. The Ontario Skilled Trades Stream is enhanced, meaning it is aligned with federal Express Entry. Once Ontario nominates you and you accept the nomination in your Express Entry profile, IRCC adds 600 points to your Comprehensive Ranking System (CRS) score. That boost lifts most candidates well above the cut-off, and in recent draws it has been more than enough to earn an Invitation to Apply at the next Express Entry draw, though IRCC still issues it. The nomination itself is still not permanent residence, IRCC makes the final PR decision on a separate application.",
  },
  {
    q: "Is the Ontario Skilled Trades Stream changing in 2026?",
    a: "Yes. Ontario announced an OINP redesign, and effective late May 2026 several legacy streams, including Skilled Trades, lost their previous regulatory basis while replacement rules were still being finalised. Applications already submitted, and complete files that received an invitation before the change, are generally assessed under the prior rules, but new criteria for the redesigned streams may differ. Treat any 2026 stream details as transitioning and verify the current position on the official OINP page at ontario.ca before you act.",
  },
  {
    q: "Does Wild Mountain Immigration handle Ontario Skilled Trades applications?",
    a: "Yes. Wild Mountain Immigration is based in Canmore, Alberta but represents clients across Canada and abroad, including tradespeople targeting Ontario through the OINP. Working under a licensed RCIC, our team confirms your Express Entry eligibility, checks your trade NOC and Ontario work experience against the current rules, and manages the NOI response and nomination application. With the 2026 redesign underway, we keep your strategy aligned to the rules actually in force when you apply.",
  },
];

export default function OntarioSkilledTradesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario Skilled Trades Stream (OINP), 2026 RCIC Guide",
            description:
              "Ontario Skilled Trades Stream 2026: OINP eligibility, eligible trade NOCs, how NOIs work and the +600 CRS Express Entry boost. RCIC-reviewed, book a call.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "OINP Skilled Trades Stream application support",
            description:
              "Ontario Skilled Trades Stream 2026: OINP eligibility, eligible trade NOCs, how NOIs work and the +600 CRS Express Entry boost. RCIC-reviewed, book a call.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Ontario (OINP), Skilled Trades"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: "/pnp/ontario" },
          { name: "Skilled Trades", path: PATH },
        ]}
        title={<>Ontario Skilled Trades Stream <span className="text-brand">(OINP)</span></>}
        lede={
          <p>
            The <strong>Ontario Skilled Trades Stream</strong> nominates tradespeople with Ontario work experience in an
            eligible trade, an Express Entry-aligned route that adds <strong>600 CRS points</strong>. Ontario is
            redesigning the OINP in 2026, so the stream&apos;s criteria are changing.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free CRS Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                See your Express Entry score before the +600 OINP boost, two minutes, no email required.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Ontario (OINP) overview", href: "/pnp/ontario", note: "Every OINP stream explained" },
                { label: "Employer Job Offer streams", href: "/pnp/ontario/employer-job-offer", note: "The job-offer OINP route" },
                { label: "Federal Skilled Trades", href: "/express-entry/federal-skilled-trades", note: "The federal trades program" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Ontario Skilled Trades Stream is an enhanced, Express Entry-aligned stream of the Ontario Immigrant Nominee Program (OINP) for tradespeople with recent Ontario experience in an eligible trade. You need a federal Express Entry profile, and Ontario selects you from the pool through a Notification of Interest. A resulting nomination adds 600 CRS points toward permanent residence, well above recent federal cut-offs, though IRCC still issues the Invitation to Apply at the next draw."
            items={[
              <>The <strong>Ontario Skilled Trades Stream</strong> is an <strong>enhanced</strong> OINP stream for tradespeople with recent Ontario work experience in an eligible trade.</>,
              <>You must already have an <strong>Express Entry profile</strong> in the Federal Skilled Trades Program or Canadian Experience Class.</>,
              <>A nomination adds <strong>+600 CRS points</strong>, well above recent Express Entry cut-offs.</>,
              <>Ontario selects candidates from the pool by issuing a <strong>Notification of Interest (NOI)</strong>, eligibility alone does not guarantee one.</>,
              <>Ontario announced a <strong>2026 OINP redesign</strong>: Skilled Trades criteria are changing, so confirm current rules on ontario.ca.</>,
            ]}
          />

          <Callout type="warning" title="The OINP is being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective late May 2026 several legacy streams, including <strong>Skilled Trades</strong>, lost their previous regulatory basis while replacement rules were
            still being finalised. Treat the details below as <strong>current/transitioning</strong> rather than settled.
            Applications already submitted, and complete files that received an invitation before the change, are generally
            assessed under the prior rules, but new criteria may differ. Always confirm the live position on the official
            OINP page at <strong>ontario.ca</strong> before you act. Figures and rules change frequently.
          </Callout>

          <h2>What is the Ontario Skilled Trades Stream?</h2>
          <p>
            The <strong>Ontario Skilled Trades Stream</strong> is an Express Entry-aligned stream of the{" "}
            <a href="/pnp/ontario">Ontario Immigrant Nominee Program (OINP)</a> built for tradespeople who already have a
            federal Express Entry profile and have been working in Ontario in an eligible skilled trade. It sits in the
            OINP&apos;s Human Capital category alongside the Human Capital Priorities and French-Speaking Skilled Worker
            streams.</p>
          <p>Ontario runs the country&apos;s largest provincial program, with a 2026 nomination allocation of
            roughly <strong>14,119</strong> across all streams, the biggest of any PNP (source: ontario.ca / IRCC, May
            2026). Because the Skilled Trades Stream is <strong>enhanced</strong>, a nomination is tied directly to your
            Express Entry profile rather than leading to a separate paper application.
          </p>
          <Callout type="brand" title="Built for trades workers already in Ontario">
            Unlike the federal{" "}
            <a href="/express-entry/federal-skilled-trades">Federal Skilled Trades Program</a>, which can work from abroad,
            the OINP Skilled Trades Stream is designed around <strong>recent Ontario work experience</strong>. It is the
            province&apos;s way of retaining tradespeople who are already contributing to its labour market. If you have no
            Ontario experience yet, an Employer Job Offer route or the federal trades program may fit better.
          </Callout>

          <h2>What are the Ontario Skilled Trades Stream eligibility requirements?</h2>
          <p>
            <strong>OINP skilled trades</strong> eligibility rests on a connected set of requirements you must satisfy at
            the time Ontario reviews your profile and when you apply. Miss any one of them and the application can be
            refused: the wrong <abbr title="National Occupational Classification">NOC</abbr> code, experience gained
            outside the qualifying window, or a language ability one band short.</p>
          <p>Depending on your occupation,
            trade certification in Ontario (for example a Certificate of Qualification) may also be expected as evidence of
            your skill level. The table below summarises the core requirements; the official, controlling list lives on
            ontario.ca and is changing under the 2026 redesign.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Express Entry profile", "An active profile in the Federal Skilled Trades Program (FST) or Canadian Experience Class (CEC) at the time you receive a Notification of Interest"],
              ["Ontario work experience", "At least 1 year of cumulative, paid, full-time (or equivalent part-time) Ontario experience in an eligible trade, gained in the 24 months before applying"],
              ["Eligible trade (NOC)", "Your experience must be in an eligible skilled-trade occupation, typically NOC major groups 72, 73, 82, 92 and 632/633 (verify your code on ontario.ca)"],
              ["Language", "Meet the federal minimum for your Express Entry program, generally CLB 5 (speaking/listening) and CLB 4 (reading/writing), approved test valid 2 years"],
              ["Legal status", "If applying from inside Canada, you must have legal status (e.g. a valid work permit); applicants from abroad must satisfy the program's residency rules"],
              ["Intent to reside", "You must intend to live and work in Ontario after becoming a permanent resident"],
              ["Settlement funds", "Sufficient funds (or eligible Ontario employment income) to support yourself and any family, unless exempt"],
            ]}
            caption="Ontario Skilled Trades Stream core eligibility, accurate as of May 2026 (ontario.ca). Criteria are changing under the 2026 redesign, verify the official rules before applying."
          />
          <Callout type="info" title="Language is measured on your weakest relevant ability">
            For the Federal Skilled Trades Program the minimum is set per skill, CLB 5 for speaking and listening, CLB 4
            for reading and writing, so a single weak band can drop you below the threshold. Lifting your lowest ability is
            often the most valuable thing you can do before submitting, and it also raises your underlying CRS score.
          </Callout>

          <h2>Which trades are eligible for the OINP Skilled Trades Stream?</h2>
          <p>
            The stream covers a broad set of <strong>Express Entry trades</strong> in Ontario, drawn from the skilled-trade
            NOC major groups. Construction and industrial trades feature heavily, electricians, welders, plumbers,
            carpenters and heavy-equipment technicians, alongside chefs, cooks, butchers and bakers, and certain
            agricultural and processing supervisory roles.</p>
          <p>Many of these are in-demand trades across Canada, and several
            line up with Red Seal trade designations, so an Ontario construction trades PR path through this stream often
            suits workers whose occupation also appears in federal Express Entry trades draws. The grid below shows the NOC
            major groups that have historically qualified; the exact eligible trade NOC list for Ontario is set by the
            province and changes, so confirm your specific code on ontario.ca.
          </p>
          <DataTable
            headers={["NOC major group", "Covers (examples)"]}
            rows={[
              ["72, Technical trades & transport officers", "Electricians, plumbers, welders, machinists, heavy-equipment and automotive technicians"],
              ["73, General trades", "Carpenters, bricklayers, construction trades helpers, painters, roofers"],
              ["82, Supervisors & technical jobs (natural resources, agriculture)", "Agricultural service contractors, supervisors in landscaping, logging and mining support"],
              ["92, Processing & manufacturing supervisors / central control", "Supervisors in food and beverage processing, plastics and chemical processing operators"],
              ["632 / 633, Chefs, cooks & specialised butchers/bakers", "Chefs, cooks, butchers and bakers"],
            ]}
            caption="Skilled-trade NOC major groups historically eligible for the Ontario Skilled Trades Stream (ontario.ca, May 2026). The eligible-occupation list changes, verify your specific NOC before relying on it."
          />

          <h2>How do Notifications of Interest (NOIs) work?</h2>
          <p>
            The Skilled Trades Stream does not run a standalone application queue, it selects candidates from the federal{" "}
            <a href="/express-entry">Express Entry</a> pool by issuing a <strong>Notification of Interest (NOI)</strong>.
            Ontario reviews profiles and sends an NOI to candidates who appear to meet the stream&apos;s criteria, often in
            targeted rounds aimed at specific trade occupations or score ranges. An NOI is an invitation to <em>apply</em> to
            the OINP, it is not a nomination, and it is not permanent residence. Once you receive one, you have a limited
            window (historically 14 days) to submit a complete online application to the OINP.
          </p>
          <Callout type="info" title="Two rules that trip people up">
            <strong>A profile in the pool is not an NOI.</strong> Ontario selects based on its priorities at the time, so
            meeting the bar only makes you eligible to be picked. And a <strong>nomination is not permanent residence</strong>:
            even with +600 CRS, IRCC makes the final decision on a separate PR application.
          </Callout>

          <h2>How does the +600 CRS Express Entry boost work?</h2>
          <p>
            This is the single biggest advantage of an enhanced stream. Because the Ontario Skilled Trades Stream is aligned
            with federal Express Entry, once Ontario nominates you and you accept the nomination in your profile, IRCC adds{" "}
            <strong>600 points</strong> to your Comprehensive Ranking System (CRS) score. That boost lifts most
            candidates well above the cut-off. In recent rounds it has been more than enough to earn an Invitation to
            Apply at the next Express Entry draw, though IRCC still issues it. The
            table below shows the practical difference between Ontario&apos;s enhanced and base routes.
          </p>
          <DataTable
            headers={["Feature", "Skilled Trades (enhanced)", "A base OINP stream"]}
            rows={[
              ["Express Entry profile", "Required (FST or CEC)", "Not required"],
              ["Effect of nomination", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["Selection trigger", "Notification of Interest from the EE pool", "Direct application or EOI within the stream"],
              ["Federal processing", "~6 months (Express Entry PR)", "Generally longer (paper-based)"],
              ["Effect of +600 CRS", "Well above recent draw cut-offs", "No CRS points added"],
            ]}
            caption="Enhanced (Skilled Trades) vs base OINP nomination (ontario.ca / IRCC, May 2026). Eligibility does not guarantee an NOI."
          />
          <p>
            Not sure where your federal score sits today? Our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> estimates your Express Entry score before the OINP boost,
            so you can see how close you are to a competitive position in the pool.
          </p>

          <h2>How to apply for the Ontario Skilled Trades Stream</h2>
          <p>
            <strong>How to apply for the Ontario Skilled Trades Stream</strong> follows the standard enhanced-OINP sequence:
            you keep an active Express Entry profile, wait for a Notification of Interest, then submit a complete OINP
            application before applying to IRCC for permanent residence. The redesign may adjust individual steps, so confirm
            the current process on ontario.ca first.
          </p>
          <Steps
            steps={[
              { title: "Create your Express Entry profile", desc: "Enter the federal pool under the Federal Skilled Trades Program or Canadian Experience Class, with your language test and trade work experience documented." },
              { title: "Confirm your trade & Ontario experience", desc: "Check that your NOC is on the eligible list and that you have at least one year of recent, paid Ontario experience in that trade." },
              { title: "Receive a Notification of Interest", desc: "Ontario issues an NOI from the pool to candidates matching its priorities. Eligibility alone does not guarantee an NOI." },
              { title: "Submit your OINP application", desc: "Within the deadline (historically 14 days), file a complete online application with your trade, experience and language evidence." },
              { title: "Get nominated & accept it", desc: "On approval, Ontario nominates you. Accept the nomination in your Express Entry profile to add 600 CRS points." },
              { title: "Apply to IRCC for permanent residence", desc: "With the +600 boost, expect an Invitation to Apply at the next draw, then submit your federal PR application. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with your Skilled Trades application</h2>
          <p>
            Trades files turn on detail: the right NOC code, experience that actually falls inside the qualifying window, and
            a language result that clears the federal minimum on every ability. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), Wild Mountain Immigration
            confirms your <a href="/express-entry">Express Entry</a> eligibility, checks your trade and Ontario work experience
            against the current rules, and manages your NOI response and nomination application so it stands up to scrutiny. We
            catch the avoidable mistakes, a misclassified occupation, experience gained on the wrong status, a missed deadline,
            that cause refusals.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment, and see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial and IRCC charges. With the OINP being redesigned in
            2026, our team keeps your <strong>Ontario Skilled Trades Stream</strong> strategy aligned to the rules actually in
            force when you apply, and always confirms the live ontario.ca page before advising. For the wider picture, see the{" "}
            <a href="/pnp/ontario">Ontario OINP</a> overview, or the{" "}
            <a href="/pnp/ontario/human-capital-priorities">Human Capital Priorities</a> and{" "}
            <a href="/pnp/ontario/employer-job-offer">Employer Job Offer</a> streams.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Ready to apply through the Skilled Trades Stream?"
        sub="Get started with a licensed RCIC for an honest read on your Express Entry profile, your trade NOC and how the 2026 OINP redesign affects your plan."
      />
    </>
  );
}
