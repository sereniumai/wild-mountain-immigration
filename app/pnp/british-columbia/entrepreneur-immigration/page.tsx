import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/british-columbia/entrepreneur-immigration";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "BC PNP Entrepreneur Immigration: 2026 Guide",
  titleAbsolute: "BC Entrepreneur Immigration: BC PNP 2026 Guide",
  description:
    "BC entrepreneur immigration via the BC PNP Base Category or Regional Pilot: invest, build a BC business and earn PR. See if you qualify, RCIC-reviewed.",
  path: PATH,
  keywords: [
    "BC PNP Entrepreneur Immigration",
    "BC Entrepreneur Immigration",
    "BC PNP Entrepreneur Base Category",
    "BC Entrepreneur Regional Pilot",
    "start a business BC PR",
  ],
});

const faqs = [
  {
    q: "What is BC PNP Entrepreneur Immigration?",
    a: "BC PNP Entrepreneur Immigration is the business side of the British Columbia Provincial Nominee Program. It is for people who will invest in, and actively manage, a business in British Columbia, either through the Base Category or the Regional Pilot aimed at smaller communities. Unlike the skilled-worker streams, it does not require a job offer; instead you register a business concept, are invited to apply, come to BC on a work permit to run the business, and are nominated only after you have established it and met your agreed commitments. Thresholds and program details change, so confirm the current criteria on welcomebc.ca before relying on any figure.",
  },
  {
    q: "How much net worth and investment do I need for the Base Category?",
    a: "As current criteria to confirm on welcomebc.ca, the Base Category generally expects a minimum personal net worth of around $600,000 and a minimum eligible business investment of about $200,000, with a requirement to create at least one new full-time job for a Canadian or permanent resident. The Regional Pilot uses lower thresholds, roughly $300,000 net worth and $100,000 investment with one job created. Because British Columbia adjusts these figures, treat the numbers here as a guide and verify the official amounts before you commit funds.",
  },
  {
    q: "What is the difference between the Base Category and the Regional Pilot?",
    a: "Both are BC Entrepreneur Immigration routes, but they target different scales of business and community. The Base Category carries higher net-worth and investment thresholds and can be located anywhere in British Columbia, including larger centres. The Regional Pilot (originally the Entrepreneur Immigration – Regional stream) has lower financial thresholds and is designed for entrepreneurs establishing a business in a smaller or regional BC community that has agreed to take part, and it typically requires a mandatory exploratory visit to that community. Confirm which route is open and which thresholds apply on welcomebc.ca before you choose.",
  },
  {
    q: "Does a BC entrepreneur nomination guarantee permanent residence?",
    a: "No. A BC PNP nomination is a provincial endorsement, not permanent residence. After you establish the business and the province nominates you, you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. Neither British Columbia nor IRCC commits in advance, so we build the strongest possible business case and flag risks before they become refusals. Entrepreneur Immigration is a standard RCIC matter and is not affiliated with, or endorsed by, any government.",
  },
  {
    q: "Do I have to run the business myself?",
    a: "Yes. BC Entrepreneur Immigration is built around active, day-to-day ownership and management, it is not a passive or investor-only route. You first come to British Columbia on a work permit to establish and operate the business, and the province only nominates you after you have actually set it up, made the required investment, created the agreed jobs and met the other terms of your performance agreement. Passive investments and certain business types are excluded, so confirm the eligible and ineligible categories on welcomebc.ca.",
  },
  {
    q: "Is the Regional Pilot the same as the old Regional stream?",
    a: "The Regional route has evolved over time. The Entrepreneur Immigration – Regional stream ran as a pilot for entrepreneurs settling in smaller BC communities, and British Columbia has continued to use a regional, community-partnered model with lower thresholds and a mandatory exploratory visit. Because the province periodically renews, pauses or rebrands these regional pilots, the safest step is to confirm the current name, status and rules on welcomebc.ca before you plan around it.",
  },
  {
    q: "How long does BC PNP Entrepreneur Immigration take?",
    a: "British Columbia does not publish a single guaranteed timeline, and your path depends on how quickly you build your concept, are invited, establish the business and meet your commitments. It is a multi-stage, multi-year journey: registration, invitation to apply, a work permit to set up and run the business, then nomination and a separate IRCC permanent-residence application. Verify current processing information on welcomebc.ca and canada.ca, and remember that nomination and PR are decided separately.",
  },
];

export default function BcEntrepreneurImmigrationPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "BC PNP Entrepreneur Immigration: 2026 Guide (Base Category & Regional Pilot)",
            description:
              "BC PNP Entrepreneur Immigration: the Base Category and Regional Pilot to start a business and earn BC PR, net worth, investment and jobs. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "BC PNP Entrepreneur Immigration application support",
            description:
              "BC PNP Entrepreneur Immigration: the Base Category and Regional Pilot to start a business and earn BC PR, net worth, investment and jobs. RCIC-reviewed.",
            path: PATH,
            serviceType: "Provincial Nominee Program business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="British Columbia (BC PNP), Entrepreneur Immigration"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "British Columbia (BC PNP)", path: "/pnp/british-columbia" },
          { name: "Entrepreneur Immigration", path: PATH },
        ]}
        title={<>BC PNP Entrepreneur Immigration: <span className="text-brand">build a business, earn BC PR</span></>}
        lede={
          <p>
            <strong>BC PNP Entrepreneur Immigration is for founders investing in and actively running a BC business.</strong>{" "}
            You earn permanent residence by establishing a genuine British Columbia venture, through the Base Category or the
            Regional Pilot for smaller communities, not a job offer. This RCIC-reviewed guide covers the requirements, the
            two routes and the registration-to-PR process.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/eligibility", label: "Find what you qualify for" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the BC entrepreneur route right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Net worth, investment and active management all matter. Get an honest read from a licensed RCIC before you commit.</p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "Every BC stream explained" },
                { label: "BC PNP Skilled Worker", href: "/pnp/british-columbia/skilled-worker", note: "The main job-offer route" },
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
            summary="BC PNP Entrepreneur Immigration is the business side of the British Columbia Provincial Nominee Program. You earn permanent residence by investing in and actively managing a genuine British Columbia business, not through a job offer. It suits experienced business owners and managers and runs in two routes: the Base Category (higher thresholds, anywhere in B.C.) and the Regional Pilot (lower thresholds, smaller communities, with a mandatory exploratory visit). The path runs from registration and invitation to a work permit, running the business, provincial nomination and finally a PR application to IRCC."
            items={[
              <><strong>BC PNP Entrepreneur Immigration</strong> is the business side of the BC PNP, you earn PR by <strong>investing in and actively managing</strong> a British Columbia business, not through a job offer.</>,
              <>There are two routes: the <strong>Base Category</strong> (higher thresholds, anywhere in BC) and the <strong>Regional Pilot</strong> (lower thresholds, smaller communities, mandatory exploratory visit).</>,
              <>Typical current criteria (confirm on welcomebc.ca): Base around <strong>$600,000 net worth / $200,000 investment</strong>; Regional around <strong>$300,000 / $100,000</strong>, each with <strong>jobs created</strong>.</>,
              <>The path runs <strong>registration → invitation → work permit → run the business → nomination → PR</strong>; nomination is a provincial endorsement, not PR.</>,
              <>British Columbia is concentrating its reduced 2026 allocation on priority outcomes, so meeting the thresholds does <strong>not guarantee an invitation</strong>.</>,
            ]}
          />

          <h2>What is BC PNP Entrepreneur Immigration?</h2>
          <p>
            <strong>BC PNP Entrepreneur Immigration</strong> is the business stream of the British Columbia Provincial Nominee
            Program, for people who will <strong>invest in and actively manage a business in British Columbia</strong>. It sits
            alongside the province&apos;s Skills Immigration streams, but works very differently: rather than scoring you on a
            job offer, it asks you to register a credible business concept, establish the business yourself, and earn a
            nomination by delivering on what you promised.</p>
          <p>According to welcomebc.ca, the BC PNP is divided into Skills
            Immigration and Entrepreneur Immigration, and British Columbia&apos;s overall 2026 nomination allocation is about{" "}
            <strong>5,254</strong>, sharply reduced from prior years (source: welcomebc.ca / IRCC, May 2026). As the main route
            for business immigration in BC, it places founders on a staged pathway. With space tight, the province directs
            selection to its highest-priority outcomes, so qualifying is not the same as being invited.
          </p>
          <Callout type="brand" title="This is a business route, not a skilled-worker route">
            Entrepreneur Immigration is for owner-operators. You first come to BC on a work permit to set up and run your
            business, and a nomination follows only after you have actually established it and met your commitments, it is a
            staged, multi-year pathway, not a single application. Compare it with the{" "}
            <a href="/pnp/british-columbia/skilled-worker">BC PNP Skilled Worker</a> stream, which needs a job offer.
          </Callout>

          <h2>Who is BC Entrepreneur Immigration for?</h2>
          <p>
            This route fits people who want to <em>build and run</em> a business in British Columbia and have the capital,
            experience and appetite to do it hands-on. You should have genuine business ownership or senior-management
            experience, personal net worth you can document and verify, and a concrete idea for a venture that creates real
            economic benefit, typically including <strong>new jobs for Canadians or permanent residents</strong>.</p>
          <p>It is not
            for passive investors looking to park money, and certain business types are excluded. People often search for a
            &ldquo;BC entrepreneur visa&rdquo;, but the route is technically a work permit followed by a provincial nomination,
            not a single visa. If you are drawn to a smaller or regional BC community, the <strong>Regional Pilot</strong>
            exists precisely to channel that investment, often at lower thresholds, while the <strong>Base Category</strong>
            suits larger ventures anywhere in the province.
          </p>
          <Callout type="info" title="Why the two routes exist">
            British Columbia wants entrepreneurial investment spread beyond its biggest centres. The Base Category covers
            higher-value ventures across BC, while the Regional Pilot lowers the financial bar for entrepreneurs willing to
            settle in a participating smaller community, usually after a mandatory exploratory visit to that community.
          </Callout>

          <h2>BC Entrepreneur Immigration requirements for 2026</h2>
          <p>
            The <strong>BC Entrepreneur Immigration requirements</strong> centre on a connected set of criteria: the personal
            net worth requirement, minimum eligible business investment, business-ownership or management experience, language,
            job creation, and a viable business concept tied to British Columbia. The thresholds below reflect current criteria
            you should confirm on welcomebc.ca, British Columbia adjusts these figures periodically, and the official program
            guide is the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on welcomebc.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth (roughly $600,000 Base / $300,000 Regional), legally obtained and independently verifiable"],
              ["Minimum investment", "Eligible business investment (roughly $200,000 Base / $100,000 Regional) as active equity in the business"],
              ["Jobs created", "At least one new full-time job for a Canadian or permanent resident (more jobs strengthen a Base concept)"],
              ["Active management", "Genuine day-to-day ownership and management of the business, not a passive stake"],
              ["Business experience", "Recent business-ownership or senior-management experience appropriate to the venture"],
              ["Language", "Minimum official-language ability via an approved test, appropriate to running a business"],
              ["Regional visit", "Regional Pilot: a mandatory exploratory visit to the participating community"],
            ]}
            caption="BC PNP Entrepreneur Immigration key requirements, current criteria to confirm on welcomebc.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment, job-creation and language minimums change, and the Base Category and Regional Pilot are
            periodically renewed, paused or rebranded. Nothing on this page is a guarantee of eligibility or of an invitation. Always confirm the current, official criteria on welcomebc.ca before you make decisions or move money.
          </Callout>

          <h2>Base Category vs Regional Pilot, how do they compare?</h2>
          <p>
            The clearest way to choose your route is to set the <strong>Base Category</strong> against the{" "}
            <strong>Regional Pilot</strong> (the route built on the Entrepreneur Immigration Regional model) side by side. The
            Base Category carries higher thresholds and can locate anywhere in British Columbia; the Regional Pilot lowers the
            financial bar for entrepreneurs willing to build in a smaller, participating community and adds a mandatory
            exploratory visit. The figures below are current criteria to confirm on welcomebc.ca.
          </p>
          <DataTable
            headers={["Factor", "Base Category", "Regional Pilot"]}
            rows={[
              ["Typical net worth", "~$600,000", "~$300,000"],
              ["Typical investment", "~$200,000", "~$100,000"],
              ["Jobs to create", "At least 1 (more strengthens the case)", "At least 1"],
              ["Where you settle", "Anywhere in British Columbia", "A participating smaller / regional community"],
              ["Exploratory visit", "Recommended, not mandatory", "Mandatory community visit"],
              ["Best suited to", "Larger ventures and higher-capital founders", "Lower-capital founders open to a regional community"],
            ]}
            caption="BC Entrepreneur Immigration, Base Category vs Regional Pilot, indicative current criteria to confirm on welcomebc.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Either way, your investment must be genuine, at-risk equity in an operating British Columbia business, not a loan,
            deposit or passive stake, and you must show a clear, legitimate source-of-funds trail for both your net worth and
            your investment capital. Weak or unexplained financials are a common reason business files stall.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            BC Entrepreneur Immigration follows a staged sequence: you register a business concept, are invited to apply, come
            to British Columbia on a work permit to <strong>establish and run the business</strong>, and are only nominated
            once you have actually built it and met your performance commitments. The steps below show the path from first
            registration to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Register your business concept", desc: "Confirm you meet the net-worth, investment, experience and language minimums for the Base Category or Regional Pilot, then submit a registration setting out your business concept and intended BC location." },
              { title: "Receive an invitation to apply", desc: "Higher-scoring concepts are invited to apply. Meeting the thresholds places you in contention, with BC's reduced allocation, it does not guarantee an invitation." },
              { title: "Submit your application & business plan", desc: "File your application with a detailed business plan, a verified net-worth worksheet and source-of-funds evidence; the Regional Pilot also requires a completed exploratory visit." },
              { title: "Sign a performance agreement & get a work permit", desc: "On approval you sign a performance agreement setting your investment and job-creation commitments, then obtain a work permit to come to BC." },
              { title: "Establish & actively run the business", desc: "Move to British Columbia, make the required investment, create the agreed jobs and actively manage the business for the committed period." },
              { title: "Nomination & IRCC permanent residence", desc: "Once you have met your commitments and the final review, BC nominates you. You then file a separate IRCC application; IRCC makes the final PR decision." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike the skilled-worker streams, you are not nominated up front. The work-permit stage exists so you can prove
            the business is real and meeting its targets before the province endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the BC PNP skilled-worker streams?</h2>
          <p>
            The simplest way to understand Entrepreneur Immigration is to contrast it with the{" "}
            <a href="/pnp/british-columbia/skilled-worker">BC PNP Skilled Worker</a> route. The skilled-worker streams need an
            eligible BC job offer and rank you on the Skills Immigration Registration System (SIRS) score. Entrepreneur
            Immigration needs <strong>no job offer</strong>: you are assessed on capital, experience and a business concept,
            and PR follows only after you build the business yourself. For a full picture of every BC route, see the{" "}
            <a href="/pnp/british-columbia">British Columbia (BC PNP)</a> overview, or compare provinces on our{" "}
            <a href="/pnp">Provincial Nominee Programs</a> hub.
          </p>
          <DataTable
            headers={["Feature", "Entrepreneur Immigration", "Skilled Worker streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business concept", "Eligible BC job offer + SIRS score"],
              ["Job offer", "Not required, you create the business and jobs", "Required (indeterminate full-time BC offer)"],
              ["When you're nominated", "After establishing the business on a work permit", "After a SIRS-based invitation and application"],
              ["+600 CRS (enhanced)", "No, base nomination → separate IRCC application", "Yes via Express Entry BC, if you qualify"],
              ["Typical timeline", "Multi-stage, multi-year (build then nominate)", "Registration → invitation → application → nomination"],
            ]}
            caption="BC Entrepreneur Immigration vs the BC PNP skilled-worker streams (welcomebc.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business concept that does not match real BC
            market needs; choosing the wrong route for your capital; mistaking a passive investment for the required active,
            at-risk equity; under-delivering on job-creation commitments; and relying on outdated thresholds. Because the
            figures and the status of the Base Category and Regional Pilot change, a plan built on last year&apos;s numbers can
            quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of British Columbia or IRCC, and we never guarantee a nomination or permanent residence. We give honest
            assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain helps with your BC business move</h2>
          <p>
            As a CICC-regulated practice led by a licensed RCIC, our team assesses whether BC Entrepreneur Immigration
            genuinely fits your capital, experience and goals, helps you choose between the Base Category and the Regional
            Pilot, and prepares an application, net-worth worksheet, source-of-funds trail and business plan that stand up
            to provincial scrutiny. If a different route,
            such as the skilled-worker stream or another province&apos;s program, fits better, we will tell you honestly.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            BC Entrepreneur Immigration materials an expert check before you submit. Thresholds and the status of
            the Base Category and Regional Pilot here are current to 2026 and change over time, so we always confirm the live
            welcomebc.ca program guide before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of starting a business in British Columbia?"
        sub="Get started with a licensed RCIC for an honest read on whether BC PNP Entrepreneur Immigration, Base Category or Regional Pilot, fits your capital, experience and plans."
      />
    </>
  );
}
