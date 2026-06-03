import type { Metadata } from "next";
import { Calculator, Store, GraduationCap, Globe, Tractor, Briefcase, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/rural-entrepreneur-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Rural Entrepreneur Stream Guide 2026",
  titleAbsolute: "Alberta Rural Entrepreneur Stream 2026 (AAIP)",
  description:
    "Alberta Rural Entrepreneur Stream: start or buy a business in rural Alberta for PR, net worth, investment, business plan and how to apply. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "alberta rural entrepreneur stream",
    "aaip rural entrepreneur",
    "start a business rural alberta pr",
    "alberta entrepreneur immigration",
    "rural entrepreneur stream requirements",
  ],
});

const faqs = [
  {
    q: "What is the Alberta Rural Entrepreneur Stream?",
    a: "The Alberta Rural Entrepreneur Stream is a business pathway of the Alberta Advantage Immigration Program (AAIP) for entrepreneurs who will start a new business, or buy and grow an existing one, in a smaller or rural Alberta community and actively manage it day to day. Unlike the worker streams, it is not based on a job offer, you become a permanent resident by establishing and running a qualifying rural business. Thresholds change, so confirm the current criteria on alberta.ca before relying on any figure.",
  },
  {
    q: "How much money do I need for the Rural Entrepreneur Stream?",
    a: "As current criteria to confirm on alberta.ca, applicants generally need a minimum personal net worth in the region of $300,000 and a minimum business investment of about $100,000 (lower minimums can apply for the most rural communities). Your net worth must be legally obtained and verifiable, and your investment must be active equity in the business, not a passive or loan-only arrangement. Because Alberta adjusts these thresholds, treat the numbers here as a guide and verify the official figures before you commit funds.",
  },
  {
    q: "Do I need to visit the rural community before applying?",
    a: "In most cases, yes. The Rural Entrepreneur Stream is built around genuine ties to a specific Alberta community, and a business support letter or exploratory visit to that community is typically part of the process. The visit lets you research the local market, meet the economic-development office and show that your business plan fits real local needs. Requirements vary by community and change over time, so confirm the current expectations on alberta.ca and with the community before you travel.",
  },
  {
    q: "How is the Rural Entrepreneur Stream different from the worker streams?",
    a: "The worker streams, such as the Alberta Opportunity Stream and the Express Entry Stream, require an Alberta job offer and rank you on a Worker Expression of Interest. The Rural Entrepreneur Stream is a business stream: there is no job offer, and you are assessed on your net worth, investment, business-management experience and business plan. You first come to Alberta on a work permit to establish the business, and nomination follows only after you have actually set it up and met your performance commitments.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. An AAIP nomination is a provincial endorsement, not permanent residence. After nomination you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible business case and flag risks before they become refusals. This stream is a standard RCIC matter and is not affiliated with or endorsed by any government.",
  },
  {
    q: "Can I buy an existing business in rural Alberta through this stream?",
    a: "Yes. The Rural Entrepreneur Stream allows you to either start a new business or buy and actively manage an existing one in an eligible rural Alberta community, provided you meet the ownership, investment and active-management requirements and the business is a genuine, ongoing operation. Passive investments and certain business types are typically excluded. Confirm the current list of eligible and ineligible business types on alberta.ca before you sign any purchase agreement.",
  },
  {
    q: "What language level do I need for the Rural Entrepreneur Stream?",
    a: "You generally need to demonstrate a minimum official-language ability, typically around Canadian Language Benchmark (CLB) 5 in English or French, measured by an approved test, though you should confirm the current minimum on alberta.ca. Language matters here because you will be running a business, dealing with suppliers, staff and customers, and reporting to the province on your progress, so practical communication ability is part of showing your venture can succeed.",
  },
  {
    q: "How long does the Rural Entrepreneur Stream take?",
    a: "Alberta does not publish a single guaranteed timeline, and your path depends on how quickly you select a community, finalise your business plan, establish the business and meet your commitments before nomination. It is a multi-stage, multi-year journey: Expression of Interest, invitation, application and a work permit to set up the business, then nomination and a separate IRCC permanent-residence application. Verify current processing information on alberta.ca and canada.ca.",
  },
];

export default function RuralEntrepreneurStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Rural Entrepreneur Stream: 2026 Guide (AAIP Business Immigration)",
            description:
              "Alberta Rural Entrepreneur Stream: start or buy a business in rural Alberta for PR, net worth, investment, business plan and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Alberta Rural Entrepreneur Stream application support",
            description:
              "Alberta Rural Entrepreneur Stream: start or buy a business in rural Alberta for PR, net worth, investment, business plan and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta Advantage Immigration Program business consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Rural Entrepreneur Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Rural Entrepreneur Stream", path: PATH },
        ]}
        title={<>Alberta Rural Entrepreneur Stream: <span className="text-brand">start a business, settle rural</span></>}
        lede={
          <p>
            <strong>The Alberta Rural Entrepreneur Stream is for founders starting or buying a rural Alberta business.</strong>{" "}
            You earn permanent residence by actively running a genuine local venture in a smaller Alberta community, no job
            offer needed. This RCIC-reviewed guide covers the requirements, the EOI-to-PR process and how it differs from the
            AAIP worker streams.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Explore the AAIP calculator" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Weighing the AAIP options?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Our free AAIP calculator helps you compare Alberta&apos;s worker and business routes before you commit.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Open the AAIP calculator</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Graduate Entrepreneur Stream", href: "/alberta-immigration/graduate-entrepreneur-stream", note: "For PGWP-holding founders" },
                { label: "Farm Stream", href: "/alberta-immigration/farm-stream", note: "Buy or build a farm in Alberta" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Rural Entrepreneur Stream is a business immigration route of the Alberta Advantage Immigration Program (AAIP). You start, or buy and actively manage, a genuine business in a smaller, rural Alberta community, and you earn permanent residence without a job offer. Applicants are assessed on net worth, investment, business-management experience, language and a business plan, and a community support or exploratory visit is usually expected. The path runs from Expression of Interest through nomination to permanent residence."
            items={[
              <>The <strong>Alberta Rural Entrepreneur Stream</strong> is an AAIP <strong>business immigration</strong> route, you earn PR by starting or buying and actively managing a business in a smaller, rural Alberta community.</>,
              <>There is <strong>no job offer</strong>: you are assessed on <strong>net worth, investment, business-management experience, language and a business plan</strong>, not a Worker EOI.</>,
              <>Typical current criteria (confirm on alberta.ca): roughly <strong>$300,000 minimum net worth</strong> and about <strong>$100,000 minimum investment</strong>, with lower minimums in the most rural communities.</>,
              <>Expect a <strong>community support / exploratory visit</strong> step, the stream rewards genuine ties to a specific Alberta town.</>,
              <>The path runs <strong>EOI → invitation → business plan & application → work permit to establish the business → nomination → PR</strong>; nomination is not PR.</>,
            ]}
          />

          <h2>What is the Alberta Rural Entrepreneur Stream?</h2>
          <p>
            The <strong>Alberta Rural Entrepreneur Stream</strong> is a business stream of the Alberta Advantage Immigration
            Program (AAIP) for entrepreneurs who will <strong>start a business in rural Alberta, or buy an existing one, and actively manage it</strong> in
            a smaller community outside the Calgary and Edmonton metro areas.</p>
          <p>It is one of Alberta&apos;s entrepreneur pathways
            and supports the province&apos;s 2026 priority on rural economic growth, with the AAIP working within a total provincial
            allocation of <strong>6,403 nominations for 2026</strong> across all of its worker and business streams
            (source: alberta.ca, AAIP allocation, May 2026). Unlike the worker routes, you do not need an Alberta job offer:
            you become a permanent resident by establishing and running a genuine rural business that creates local economic
            benefit.
          </p>
          <Callout type="brand" title="This is a business stream, not a worker stream">
            The Rural Entrepreneur Stream is for owner-operators. You first come to Alberta on a work permit to set up your
            business, and a nomination follows only after you have actually established it and met your commitments, it is a
            staged, multi-year pathway, not a single application.
          </Callout>

          <h2>Who is the Rural Entrepreneur Stream for?</h2>
          <p>
            This stream fits people who want to <em>build and run</em> a business and put down roots in a smaller Alberta
            community, a town that wants new investment, jobs and services. You should have real
            business-management or ownership experience, capital you can invest and verify, and a concrete idea for a
            venture a rural community actually needs: a trade or service business, a shop or restaurant, a manufacturing or
            agri-related operation, or buying and growing an existing local business whose owner is retiring.</p>
          <p>It is not for
            passive investors looking to park money, and certain business types are excluded, confirm the current eligible
            and ineligible categories on alberta.ca.
          </p>
          <Callout type="info" title="Why &ldquo;rural&rdquo; matters">
            Eligibility hinges on the community: the business must be located in an eligible Alberta community outside the
            Calgary and Edmonton metropolitan areas, and the most rural communities often carry lower investment and
            net-worth minimums. Alberta maintains an eligible rural community list, so check whether your chosen town
            qualifies. Choosing the right town, and showing genuine ties to it, is central to a strong file.
          </Callout>

          <h2>What are the Rural Entrepreneur Stream requirements for 2026?</h2>
          <p>
            The <strong>Rural Entrepreneur Stream requirements</strong> centre on a connected set of criteria: minimum net
            worth, minimum investment, business-management experience, language, and a viable business plan backed by ties to
            an eligible rural community. The thresholds below reflect current criteria you should confirm on alberta.ca. Alberta adjusts these figures periodically, so the official page is always the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on alberta.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth in the region of $300,000, legally obtained and independently verifiable"],
              ["Minimum investment", "Active equity investment of about $100,000 in the business (lower minimums can apply in the most rural communities)"],
              ["Business ownership", "At least a qualifying ownership share, with active, day-to-day management of the business"],
              ["Business-management experience", "Recent business ownership or senior management experience appropriate to the venture you propose"],
              ["Language", "Minimum official-language ability, typically around CLB 5 in English or French via an approved test"],
              ["Community support", "A community support letter and/or exploratory visit to an eligible rural Alberta community"],
              ["Business plan", "A viable, community-appropriate business plan showing local economic benefit (e.g. jobs created)"],
            ]}
            caption="Alberta Rural Entrepreneur Stream key requirements, current criteria to confirm on alberta.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and language minimums change, and eligible communities and business types are updated over
            time. Nothing on this page is a guarantee of eligibility or of an invitation, always confirm the current,
            official criteria on alberta.ca before you make decisions or move money.
          </Callout>

          <h2>What net worth and investment do I need?</h2>
          <p>
            Two financial tests sit at the heart of the stream. Your <strong>minimum net worth</strong> shows you can
            support yourself and absorb business risk; your <strong>minimum investment</strong> is the active capital you
            put into the venture itself. As current criteria to confirm on alberta.ca, these generally land around the levels
            below, with the lowest minimums reserved for the most rural communities to encourage investment where it is
            needed most.
          </p>
          <DataTable
            headers={["Factor", "Typical current minimum", "What it must show"]}
            rows={[
              ["Personal net worth", "~$300,000", "Legally obtained, fully documented and verifiable by a third party"],
              ["Business investment", "~$100,000 (urban-rural) / lower in the most rural communities", "Active equity in the business, not a loan, deposit or passive stake"],
              ["Ownership share", "Qualifying ownership %", "Genuine ownership with hands-on management responsibility"],
            ]}
            caption="Indicative Rural Entrepreneur Stream financial thresholds, current criteria to confirm on alberta.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. The province expects a clear, legitimate source-of-funds trail for both your net
            worth and your investment capital, and weak or unexplained financials are a common reason business files stall.
            Your investment must be genuine, at-risk equity in an operating Alberta business, not a passive arrangement.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Rural Entrepreneur Stream follows a staged sequence: you signal interest, are invited, build your plan and
            apply, come to Alberta on a work permit to <strong>establish the business</strong>, and are only nominated once
            you have actually set it up and met your commitments. The steps below show the path from first interest to a
            federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an Expression of Interest (EOI)", desc: "Confirm you meet the net-worth, investment, experience and language minimums, then submit an EOI signalling the rural community and business you have in mind." },
              { title: "Receive an invitation to apply", desc: "If selected, Alberta invites you to apply. Meeting the minimums places you in contention, it does not guarantee an invitation." },
              { title: "Build your business plan & community support", desc: "Complete an exploratory visit, secure community support, and prepare a viable business plan with a verified net-worth worksheet and source-of-funds evidence." },
              { title: "Submit your application", desc: "File your Rural Entrepreneur Stream application with your business plan, financial documentation, language results and supporting evidence for AAIP assessment." },
              { title: "Get a work permit & establish the business", desc: "On a positive assessment, obtain a work permit, move to Alberta and actually start or buy and run the business, meeting the investment, job-creation and management commitments." },
              { title: "Nomination & IRCC permanent residence", desc: "Once you have met your business commitments, Alberta nominates you. You then file a separate IRCC application; IRCC makes the final PR decision." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike the worker streams, you are not nominated up front. The work-permit stage exists so you can prove the
            business is real and meeting its targets before the province endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the AAIP worker streams?</h2>
          <p>
            The clearest way to understand the Rural Entrepreneur Stream is to contrast it with the AAIP worker routes such
            as the <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> and the Express Entry
            Stream. The worker streams need an Alberta job offer and rank you on a Worker Expression of Interest. The
            entrepreneur stream needs <strong>no job offer</strong>: you are assessed on capital, experience and a business
            plan, and PR follows only after you build the business yourself.
          </p>
          <DataTable
            headers={["Feature", "Rural Entrepreneur Stream", "AAIP worker streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business plan", "Job offer + Worker EOI score"],
              ["Job offer", "Not required, you create the business", "Required (full-time Alberta offer)"],
              ["When you're nominated", "After establishing the business on a work permit", "After a points-based invitation and application"],
              ["Where you settle", "An eligible rural / smaller Alberta community", "Anywhere your eligible Alberta job is"],
              ["Typical timeline", "Multi-stage, multi-year (build then nominate)", "EOI → invitation → application → nomination"],
            ]}
            caption="Alberta Rural Entrepreneur Stream vs the AAIP worker streams (alberta.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match the host
            community&apos;s real needs; choosing a town without genuine ties or community support; mistaking a passive
            investment for the required active, at-risk equity; and relying on outdated thresholds. Because the figures and
            eligible-community lists change, a plan built on last year&apos;s numbers can quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of Alberta or IRCC. We give honest
            assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain helps with your rural business move</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. Working under a licensed RCIC
            (CICC #R706497), our team assesses whether the Rural Entrepreneur Stream genuinely fits your capital,
            experience and goals, helps you match a credible business to the right rural community, and prepares an
            application, net-worth worksheet, source-of-funds trail and business plan, that stands up to provincial
            scrutiny. If a different route fits better, we will tell you honestly.
          </p>
          <p>
            We can compare this stream with the other AAIP business routes, the{" "}
            <a href="/alberta-immigration/graduate-entrepreneur-stream">Graduate Entrepreneur Stream</a>, the{" "}
            <a href="/alberta-immigration/foreign-graduate-entrepreneur-stream">Foreign Graduate Entrepreneur Stream</a>{" "}
            and the <a href="/alberta-immigration/farm-stream">Farm Stream</a>, or with worker routes like the{" "}
            <a href="/alberta-immigration/rural-renewal-stream">Rural Renewal Stream</a> and{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>. We also weigh your federal{" "}
            <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, set Alberta against other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>, line up the right{" "}
            <a href="/work-permits">work permit</a> to establish the business, and set out our{" "}
            <a href="/fees">fees</a> up front.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Rural Entrepreneur Stream materials an expert check before you submit. Thresholds and
            eligible-community lists here are current to 2026 and change over time, so we always confirm the live alberta.ca
            page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Rural Entrepreneur Stream is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP worker and business stream, with scoring and 2026 cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={GraduationCap} title="Graduate Entrepreneur Stream" desc="For founders building a business after graduating from an approved Alberta institution." href="/alberta-immigration/graduate-entrepreneur-stream" />
            <FeatureCard icon={Globe} title="Foreign Graduate Entrepreneur" desc="For recent graduates of institutions outside Canada starting an Alberta business." href="/alberta-immigration/foreign-graduate-entrepreneur-stream" />
            <FeatureCard icon={Tractor} title="Farm Stream" desc="For experienced farmers buying or starting a farm operation in Alberta." href="/alberta-immigration/farm-stream" />
            <FeatureCard icon={Store} title="Rural Renewal Stream" desc="The worker route for a job in a designated rural community with an endorsement." href="/alberta-immigration/rural-renewal-stream" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Thinking of building a business in rural Alberta?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on whether the Rural Entrepreneur Stream fits your capital, experience and plans."
      />
    </>
  );
}
