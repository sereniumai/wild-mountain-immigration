import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario/entrepreneur";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario Entrepreneur Stream (OINP) Guide 2026",
  titleAbsolute: "OINP Entrepreneur Stream 2026 (Ontario) Guide",
  description:
    "Ontario Entrepreneur Stream: start or buy a business in Ontario for PR, net worth, investment, EOI and the process. RCIC-reviewed; 2026 OINP redesign.",
  path: PATH,
  keywords: [
    "Ontario Entrepreneur Stream",
    "OINP Entrepreneur",
    "start a business Ontario PR",
    "Ontario business immigration",
    "OINP Entrepreneur EOI",
  ],
});

const faqs = [
  {
    q: "What is the Ontario Entrepreneur Stream?",
    a: "The Ontario Entrepreneur Stream is the business route of the Ontario Immigrant Nominee Program (OINP). It is for entrepreneurs who will establish a new business in Ontario, or buy and grow an existing one, and actively manage it day to day. Unlike Ontario's worker streams, it is not based on a job offer, you work toward permanent residence by investing in and running a qualifying Ontario business. Thresholds and rules change, and the OINP is being redesigned in 2026, so always confirm the current criteria on ontario.ca before relying on any figure.",
  },
  {
    q: "How much net worth and investment do I need for the OINP Entrepreneur Stream?",
    a: "As current criteria to confirm on ontario.ca, applicants have generally needed a minimum personal net worth and a minimum investment that are higher for businesses in the Greater Toronto Area (GTA) than outside it. Net worth requirements have historically sat in the region of $400,000 (in the GTA or for certain sectors) versus $200,000 outside the GTA, with minimum investments of roughly $600,000 (GTA) versus $200,000 outside. Because Ontario adjusts these thresholds, and is redesigning the stream in 2026, treat the figures as a guide and verify the official numbers before you commit funds.",
  },
  {
    q: "Do I need a job offer for the Ontario Entrepreneur Stream?",
    a: "No. The Entrepreneur Stream is a business immigration route, not a worker stream, so it does not require an Ontario job offer. Instead, you are assessed on your net worth, your investment in the business, your business and management experience, your business plan, and the jobs your venture will create for Canadians and permanent residents. You first come to Ontario on a temporary work permit to establish the business, and a nomination follows only after you have set it up and met your performance agreement.",
  },
  {
    q: "Does an OINP nomination guarantee permanent residence?",
    a: "No. An OINP nomination is a provincial endorsement, not permanent residence. After nomination you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible business case and flag risks before they become refusals. This is a standard RCIC matter and is not affiliated with or endorsed by any government.",
  },
  {
    q: "Can I buy an existing business in Ontario through this stream?",
    a: "Yes. The Ontario Entrepreneur Stream lets you either establish a new business or buy and actively manage an existing one, provided you meet the ownership, investment and job-creation requirements and the business is a genuine, ongoing operation. When you purchase an existing business, additional conditions usually apply, for example making qualifying improvements and growing employment. Passive or speculative investments and certain business types are typically excluded. Confirm the current eligible and ineligible business types on ontario.ca before you sign any purchase agreement.",
  },
  {
    q: "How does the OINP Entrepreneur EOI work?",
    a: "The Entrepreneur Stream uses an Expression of Interest (EOI) system. You register a profile and are scored against factors such as net worth, investment, business experience, jobs created, the business location and language ability. Ontario then issues invitations to the highest-ranked candidates. Submitting an EOI places you in the pool, it does not guarantee an invitation, because the stream is points-ranked and competitive. With the 2026 OINP redesign underway, the way the EOI and scoring work may change, so confirm the current process on ontario.ca.",
  },
  {
    q: "Is the Ontario Entrepreneur Stream changing in 2026?",
    a: "Yes. Ontario announced an OINP redesign and, effective late May 2026, several legacy streams lost their previous regulatory basis while replacement rules were still being finalised, and a revamped Entrepreneur stream has been signalled. Treat any 2026 stream details as transitioning rather than settled, and verify the current position on the official OINP page at ontario.ca before you act on requirements, thresholds or timelines.",
  },
];

export default function OntarioEntrepreneurStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario Entrepreneur Stream (OINP): 2026 Business Immigration Guide",
            description:
              "Ontario Entrepreneur Stream: start or buy a business in Ontario for PR, net worth, investment, EOI and the process. RCIC-reviewed; 2026 OINP redesign.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Ontario Entrepreneur Stream application support",
            description:
              "Ontario Entrepreneur Stream: start or buy a business in Ontario for PR, net worth, investment, EOI and the process. RCIC-reviewed; 2026 OINP redesign.",
            path: PATH,
            serviceType: "Ontario Immigrant Nominee Program business consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Ontario (OINP), Entrepreneur Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: "/pnp/ontario" },
          { name: "Entrepreneur", path: PATH },
        ]}
        title={<>Ontario Entrepreneur Stream: <span className="text-brand">start a business, settle in Ontario</span></>}
        lede={
          <p>
            <strong>The Ontario Entrepreneur Stream is for founders establishing or buying a business in Ontario.</strong>{" "}
            You work toward permanent residence by investing in and actively running a genuine Ontario venture, no job offer
            needed. This RCIC-reviewed guide covers the requirements, the EOI-to-PR process and the 2026 OINP redesign.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/eligibility", label: "Find what you qualify for" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Building2 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is your business case strong enough?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With the OINP redesign underway in 2026, an honest read on your capital, plan and timing matters. Talk to a
                licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Ontario (OINP) overview", href: "/pnp/ontario", note: "Every Ontario stream explained" },
                { label: "Employer Job Offer stream", href: "/pnp/ontario/employer-job-offer", note: "The job-offer route to PR" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Ontario Entrepreneur Stream is the business immigration route of the Ontario Immigrant Nominee Program (OINP). It is for entrepreneurs who will establish, or buy and actively manage, a qualifying business in Ontario, and it leads to permanent residence with no job offer required. You are assessed through an Expression of Interest on net worth, investment, business experience, jobs created and a business plan, with higher thresholds in the Greater Toronto Area. You first run the business on a work permit, and a nomination toward permanent residence follows once you meet your performance agreement."
            items={[
              <>The <strong>Ontario Entrepreneur Stream</strong> is the OINP&apos;s <strong>business immigration</strong> route, you work toward PR by establishing or buying and actively managing a business in Ontario.</>,
              <>There is <strong>no job offer</strong>: you are assessed on <strong>net worth, investment, business experience, jobs created and a business plan</strong> via an Expression of Interest.</>,
              <>Net worth and investment minimums are <strong>higher in the Greater Toronto Area (GTA)</strong> than outside it, confirm current figures on ontario.ca.</>,
              <>The path runs <strong>EOI → invitation → performance agreement → work permit to establish the business → nomination → PR</strong>; a nomination is not PR.</>,
              <>Ontario announced a <strong>2026 OINP redesign</strong>, including a revamped Entrepreneur stream, so treat the rules below as transitioning and verify on ontario.ca.</>,
            ]}
          />

          <h2>What is the Ontario Entrepreneur Stream?</h2>
          <p>
            The <strong>Ontario Entrepreneur Stream</strong> is the OINP business stream, the business route of the{" "}
            <a href="/pnp/ontario">Ontario Immigrant Nominee Program (OINP)</a>, Ontario&apos;s economic immigration
            program. It is for entrepreneurs who will <strong>start a business in Ontario for PR, or buy and grow an
            existing one, and actively manage it</strong> day to day.</p>
          <p>Ontario runs the country&apos;s largest provincial
            program, with a 2026 nomination allocation of roughly <strong>14,119</strong> across all of its worker and
            business streams (source: ontario.ca / IRCC, May 2026). Unlike the OINP&apos;s worker routes, this stream needs
            no Ontario job offer: you progress toward permanent residence by investing in and running a genuine business
            that creates local jobs and economic benefit.
          </p>
          <Callout type="warning" title="The OINP is being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective late May 2026 several legacy streams lost
            their previous regulatory basis while replacement rules were still being finalised, including a signalled
            revamp of the Entrepreneur stream. Treat the requirements and thresholds on this page as{" "}
            <strong>current/transitioning</strong> rather than settled. Applications already submitted before the change are
            generally assessed under the prior rules, but new criteria may differ. Always confirm the live position on the
            official OINP page at <strong>ontario.ca</strong> before you act. Figures and rules change frequently.
          </Callout>

          <h2>Who is the Entrepreneur Stream for?</h2>
          <p>
            This stream fits people who want to <em>build and run</em> a business and put down roots in Ontario, founders
            with real business or senior-management experience, capital they can invest and verify, and a concrete plan for
            a venture that creates jobs.</p>
          <p>Good candidates include those launching a trade, service, retail, manufacturing or
            technology business, or buying and growing an established Ontario business whose owner is moving on. It is not
            for passive investors looking to park money, and certain business types are excluded. Confirm the current
            lists of eligible and ineligible business types on ontario.ca.
          </p>
          <Callout type="info" title="Why location matters">
            Ontario sets different financial thresholds inside and outside the Greater Toronto Area, and businesses outside
            the GTA have historically carried lower net-worth and investment minimums to encourage investment across the
            province. Where you base your business directly affects the bar you must clear.
          </Callout>

          <h2>What are the Ontario Entrepreneur Stream requirements for 2026?</h2>
          <p>
            The <strong>Ontario Entrepreneur Stream requirements</strong> centre on a connected set of criteria: minimum net
            worth, minimum investment, business and management experience, job creation, and a viable business plan, with
            the financial bar higher for ventures in the GTA. The thresholds below reflect current criteria you should
            confirm on ontario.ca; Ontario adjusts these figures periodically and is redesigning the stream in 2026, so the
            official page is the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on ontario.ca)"]}
            rows={[
              ["Minimum net worth", "Higher in the GTA / certain sectors (historically ~$400,000) than outside the GTA (historically ~$200,000), legally obtained and verifiable"],
              ["Minimum investment", "Higher in the GTA (historically ~$600,000) than outside the GTA (historically ~$200,000), as active equity in the business"],
              ["Ownership share", "A qualifying ownership share (commonly at least one third), with active, day-to-day management"],
              ["Business experience", "Recent business ownership or senior-management experience appropriate to the venture you propose"],
              ["Job creation", "Create and maintain qualifying full-time jobs for Canadian citizens or permanent residents (more for GTA businesses)"],
              ["Business plan", "A viable business plan showing local economic benefit and how investment and jobs will be delivered"],
              ["Exploratory business visit", "An exploratory business visit to Ontario may be required where you are buying an existing business"],
            ]}
            caption="Ontario Entrepreneur Stream key requirements, current criteria to confirm on ontario.ca (May 2026). Thresholds change and the stream is being redesigned in 2026; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and job-creation minimums change, eligible business types are updated over time, and the 2026 redesign may revise them further. Nothing on this page is a guarantee of eligibility or of an
            invitation, always confirm the current, official criteria on ontario.ca before you make decisions or move money.
          </Callout>

          <h2>How much do net worth and investment differ in the GTA?</h2>
          <p>
            Two financial tests sit at the heart of the stream, and both are tiered by location. Your{" "}
            <strong>minimum net worth</strong> shows you can support yourself and absorb business risk; your{" "}
            <strong>minimum investment</strong> is the active capital you put into the venture. As current criteria to
            confirm on ontario.ca, the bar has historically been higher for businesses in the{" "}
            <strong>Greater Toronto Area</strong> and lower for those outside it.
          </p>
          <DataTable
            headers={["Factor", "Greater Toronto Area (GTA)", "Outside the GTA"]}
            rows={[
              ["Personal net worth", "Historically ~$400,000", "Historically ~$200,000"],
              ["Business investment", "Historically ~$600,000", "Historically ~$200,000"],
              ["Job creation", "More qualifying full-time jobs", "Fewer qualifying full-time jobs"],
            ]}
            caption="Indicative Ontario Entrepreneur Stream thresholds by location, current criteria to confirm on ontario.ca (May 2026). Figures change and the 2026 redesign may revise them; verify before relying on them."
          />
          <p>
            Document everything early. Ontario expects a clear, legitimate source-of-funds trail for both your net worth
            and your investment capital, and net worth verification with weak or unexplained financials is a common reason
            business files stall. Your investment must be genuine, at-risk equity in an operating Ontario business, not a
            passive arrangement, deposit or loan-only stake.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Entrepreneur Stream follows a staged sequence: you register an Expression of Interest, are invited, sign a
            performance agreement, come to Ontario on a temporary work permit to <strong>establish the business</strong>, and
            are nominated only once you have actually set it up and met your commitments. The steps below show the path from
            first interest to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an Expression of Interest (EOI)", desc: "Register a profile, confirm you meet the net-worth, investment, experience and job-creation minimums, and earn Entrepreneur Stream EOI points against the scoring factors for the business you have in mind." },
              { title: "Receive an invitation to apply", desc: "If ranked highly enough, Ontario invites you to apply. Meeting the minimums places you in the pool, it does not guarantee an invitation." },
              { title: "Apply & sign a performance agreement", desc: "Submit your application with your business plan, net-worth and source-of-funds evidence, then negotiate and sign a performance agreement setting out your investment and job-creation commitments." },
              { title: "Get a work permit & establish the business", desc: "On a positive assessment, obtain a temporary work permit, move to Ontario and actually start or buy and run the business, meeting the investment, job-creation and management commitments." },
              { title: "Nomination after meeting commitments", desc: "Once you have implemented your business plan and met your performance agreement, Ontario nominates you under the OINP for permanent residence." },
              { title: "IRCC permanent residence", desc: "Use the nomination to file a separate application to IRCC; IRCC makes the final PR decision on medical, security and admissibility grounds." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike a worker stream, you are not nominated up front. The work-permit and performance-agreement stages exist so
            you can prove the business is real and meeting its targets before Ontario endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the OINP worker streams?</h2>
          <p>
            The clearest way to understand the Entrepreneur Stream is to contrast it with the OINP worker routes such as the{" "}
            <a href="/pnp/ontario/employer-job-offer">Employer Job Offer</a> category. The worker streams need an Ontario job
            offer (and employer registration) and rank you largely on that offer and your profile. The Entrepreneur Stream
            needs <strong>no job offer</strong>: you are assessed on capital, experience, jobs created and a business plan,
            and PR follows only after you build the business yourself.
          </p>
          <DataTable
            headers={["Feature", "Entrepreneur Stream", "OINP worker streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, jobs, business plan", "Job offer + profile / Express Entry score"],
              ["Job offer", "Not required, you create the business and jobs", "Required (eligible Ontario job offer)"],
              ["When you're nominated", "After establishing the business and meeting a performance agreement", "After an invitation and a complete application"],
              ["Nomination type", "Base (separate paper application to IRCC)", "Enhanced (+600 CRS) or base, depending on stream"],
              ["Typical timeline", "Multi-stage, multi-year (build then nominate)", "EOI → invitation → application → nomination"],
            ]}
            caption="Ontario Entrepreneur Stream vs the OINP worker streams (ontario.ca, May 2026). The OINP is being redesigned in 2026, confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match Ontario&apos;s
            requirements or realistic market conditions; underestimating the higher GTA thresholds; mistaking a passive
            investment for the required active, at-risk equity; and relying on outdated figures. Because the thresholds and
            eligible-business lists change, and the 2026 redesign is in progress, a plan built on last year&apos;s numbers
            can quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of Ontario or IRCC, and we never guarantee a nomination or permanent residence. We give honest
            assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your Ontario business move</h2>
          <p>
            Wild Mountain Immigration is based in Canmore, Alberta, but represents clients across Canada and abroad, including
            entrepreneurs targeting Ontario through the OINP. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team assesses whether the
            Entrepreneur Stream genuinely fits your capital, experience and goals, helps you structure a credible business and
            EOI, and prepares an application, net-worth worksheet, source-of-funds trail and business plan, that stands up to
            provincial scrutiny.</p>
          <p>With the OINP being redesigned in 2026, we keep your strategy aligned to the rules actually in
            force when you apply. If a different route fits better, we will tell you honestly.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment of the Ontario Entrepreneur Stream, and
            see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial charges and your business investment. The eligible and
            ineligible business types, the net worth verification standards and the thresholds set out here are current to 2026
            and change over time, so we always confirm the live ontario.ca page before advising. If a worker route suits you
            better, compare the{" "}
            <a href="/pnp/ontario/human-capital-priorities">Human Capital Priorities</a> and{" "}
            <a href="/pnp/ontario/employer-job-offer">Employer Job Offer</a> streams, or the full{" "}
            <a href="/pnp/ontario">Ontario OINP</a> overview.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in Ontario?"
        sub="Get started with a licensed RCIC for an honest read on whether the OINP Entrepreneur Stream fits your capital, experience and plans, and how the 2026 redesign affects your timing."
      />
    </>
  );
}
