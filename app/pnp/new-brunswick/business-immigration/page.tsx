import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/new-brunswick/business-immigration";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "New Brunswick Business Immigration Stream Guide",
  titleAbsolute: "NB Business Immigration Stream: NBPNP 2026 Guide",
  description:
    "New Brunswick Business Immigration Stream 2026: the NB Entrepreneurial route to PR, net worth, investment, exploratory visit and the process. RCIC-led.",
  path: PATH,
  keywords: [
    "New Brunswick Business Immigration Stream",
    "NB Entrepreneurial Stream",
    "start a business New Brunswick PR",
    "NB business immigration",
    "post-graduate entrepreneurial New Brunswick",
  ],
});

const faqs = [
  {
    q: "What is the New Brunswick Business Immigration Stream?",
    a: "The New Brunswick Business Immigration Stream is a base nomination pathway of the New Brunswick Provincial Nominee Program (NBPNP) for entrepreneurs who will establish, buy or invest in, and actively manage a business in New Brunswick. It includes the NB Entrepreneurial Stream for experienced business owners and managers, and a post-graduate entrepreneurial route for graduates of New Brunswick institutions who start a business in the province. You first run the business on a work permit, and the province nominates you only after you have met your business performance commitments. Thresholds change, so confirm the current criteria on welcomenb.ca before relying on any figure.",
  },
  {
    q: "How much money do I need for the NB Entrepreneurial Stream?",
    a: "As current criteria to confirm on welcomenb.ca, applicants to the NB Entrepreneurial Stream generally need a verifiable personal net worth in the region of $600,000 and a minimum business investment of around $250,000, with the investment going into a business you actively manage day to day. Your net worth must be legally obtained and independently verifiable, and your funds must be genuine, at-risk equity, not a passive or loan-only arrangement. Because New Brunswick adjusts these thresholds, treat the figures here as a guide and verify the official numbers before you commit any money.",
  },
  {
    q: "Do I need to visit New Brunswick before applying?",
    a: "In most cases, yes. The Business Immigration Stream is built around a genuine intention to settle and run a business in New Brunswick, and an exploratory visit to the province is typically part of the process. The visit lets you research the local market, meet economic-development contacts and show that your business concept fits a real New Brunswick need. Requirements change over time, so confirm the current expectations on welcomenb.ca before you travel, and keep records of your visit for your file.",
  },
  {
    q: "How is the Business Immigration Stream different from the worker streams?",
    a: "The NBPNP worker streams, such as the Skilled Worker stream and the NB Express Entry pathways, are employer-driven and generally require a New Brunswick job offer. The Business Immigration Stream needs no job offer: you are assessed on your net worth, investment, business experience, language and a viable business plan. You first come to New Brunswick on a work permit to establish the business, and nomination follows only after you have actually set it up and met your performance commitments. It is a base nomination, so once nominated you submit a separate paper application directly to IRCC.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. An NBPNP nomination is a provincial endorsement, not permanent residence. Because the Business Immigration Stream is a base nomination, after you are nominated you submit a separate paper permanent-residence application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible business case and flag risks before they become refusals. This stream is a standard RCIC matter and is not affiliated with or endorsed by any government.",
  },
  {
    q: "Is there a route for graduates of New Brunswick institutions?",
    a: "Yes. Alongside the main NB Entrepreneurial Stream, New Brunswick offers a post-graduate entrepreneurial route for people who have graduated from an eligible New Brunswick institution and want to start and run a business in the province. It typically carries lower financial thresholds than the main entrepreneurial route but adds its own conditions around your graduation, work permit and the business you establish. Because the eligibility details change, confirm the current post-graduate entrepreneurial criteria on welcomenb.ca before relying on them.",
  },
  {
    q: "What language level do I need for NB business immigration?",
    a: "You generally need to demonstrate a minimum official-language ability, typically around Canadian Language Benchmark (CLB) 5 in English or French, measured by an approved test, though you should confirm the current minimum on welcomenb.ca. Language matters here because you will be running a business, dealing with suppliers, staff and customers, and reporting to the province on your progress, so practical communication ability is part of showing your venture can succeed.",
  },
  {
    q: "How long does the NB Business Immigration Stream take?",
    a: "New Brunswick does not publish a single guaranteed timeline, and your path depends on how quickly you finalise your business concept, complete an exploratory visit, obtain a work permit, establish the business and meet your commitments before nomination. It is a multi-stage, multi-year journey: expression of interest, invitation, work permit to set up the business, then nomination and a separate IRCC permanent-residence application. Verify current processing information on welcomenb.ca and canada.ca.",
  },
];

export default function NewBrunswickBusinessImmigrationPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "New Brunswick Business Immigration Stream, 2026 RCIC Guide",
            description:
              "New Brunswick Business Immigration Stream 2026: the NB Entrepreneurial route to PR, net worth, investment, exploratory visit and the process. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "New Brunswick Business Immigration Stream application support",
            description:
              "New Brunswick Business Immigration Stream 2026: the NB Entrepreneurial route to PR, net worth, investment, exploratory visit and the process. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="New Brunswick (NBPNP), Business Immigration"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "New Brunswick", path: "/pnp/new-brunswick" },
          { name: "Business Immigration", path: PATH },
        ]}
        title={<>New Brunswick Business Immigration Stream: <span className="text-brand">build a business, earn PR</span></>}
        lede={
          <p>
            <strong>The New Brunswick Business Immigration Stream is for entrepreneurs running an NB business.</strong>{" "}
            You earn permanent residence by establishing and actively managing a genuine New Brunswick venture, no job offer
            needed. This RCIC-reviewed guide covers the NB Entrepreneurial and post-graduate entrepreneurial routes, the
            requirements and the EOI-to-nomination process.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/eligibility", label: "Find what you qualify for" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Briefcase className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is NB business immigration right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Net worth, investment and a viable plan all have to line up. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "New Brunswick PNP (NBPNP)", href: "/pnp/new-brunswick", note: "Every NB stream explained" },
                { label: "Strategic Initiative (French)", href: "/pnp/new-brunswick/strategic-initiative", note: "Enhanced Francophone route" },
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
            summary="The New Brunswick Business Immigration Stream is a base route of the New Brunswick Provincial Nominee Program (NBPNP) for entrepreneurs who will establish, buy or invest in, and actively manage a business in New Brunswick. It assesses net worth, investment, business experience and a business plan rather than a job offer, and typically involves an exploratory visit. A nomination is a provincial recommendation toward permanent residence, not 600 CRS points; you then use it to apply separately to IRCC."
            items={[
              <>The <strong>New Brunswick Business Immigration Stream</strong> is an NBPNP <strong>base</strong> route, you earn PR by establishing and actively managing a genuine business in New Brunswick.</>,
              <>It covers the <strong>NB Entrepreneurial Stream</strong> for experienced owners and managers, plus a <strong>post-graduate entrepreneurial</strong> route for graduates of NB institutions.</>,
              <>There is <strong>no job offer</strong>: you are assessed on <strong>net worth, investment, business experience, language and a business plan</strong>, not a worker profile.</>,
              <>Typical current criteria (confirm on welcomenb.ca): roughly <strong>$600,000 net worth</strong> and about <strong>$250,000 investment</strong> for the main entrepreneurial route, with lower thresholds on the post-graduate route.</>,
              <>The path runs <strong>EOI → invitation → work permit to establish the business → nomination → separate IRCC PR application</strong>; nomination is not PR.</>,
            ]}
          />

          <h2>What is the New Brunswick Business Immigration Stream?</h2>
          <p>
            The <strong>New Brunswick Business Immigration Stream</strong> is the business route of the New Brunswick
            Provincial Nominee Program (NBPNP) for entrepreneurs who will <strong>establish, buy into and actively manage a
            business in New Brunswick</strong>. It is one of New Brunswick&apos;s economic pathways and runs through the
            province&apos;s INB Portal alongside the worker streams. New Brunswick&apos;s nomination space is limited, its
            2025 allocation was about <strong>2,750</strong> spaces split between the PNP and the Atlantic Immigration
            Program, with the 2026 figure expected to remain tight after federal allocations were cut nationwide (source:
            welcomenb.ca / IRCC, May 2026). Unlike the worker routes, you do not need a New Brunswick job offer: you become a
            permanent resident by building and running a genuine business that creates local economic benefit.
          </p>
          <p>
            The stream is delivered through two routes. The main <strong>NB Entrepreneurial Stream</strong> is for
            experienced business owners and senior managers with the capital to invest in and run a New Brunswick venture.
            Running alongside it is a <strong>post-graduate entrepreneurial</strong> route for people who have graduated from
            an eligible New Brunswick institution and want to start a business in the province, typically with lower
            financial thresholds but additional conditions tied to their graduation and work permit.
          </p>
          <Callout type="brand" title="This is a base nomination, not enhanced">
            The Business Immigration Stream is a <strong>base</strong> NBPNP route, it is not connected to federal Express
            Entry and does not add 600 CRS points. Once you are nominated, you submit a separate paper permanent-residence
            application directly to IRCC, which is generally processed more slowly than an enhanced, Express-Entry-aligned
            nomination.
          </Callout>

          <h2>Who is the NB Entrepreneurial Stream for?</h2>
          <p>
            This stream fits people who want to <em>build and run</em> a business and put down roots in New Brunswick. For
            the main entrepreneurial route you should have real business-ownership or senior-management experience, capital
            you can invest and verify, and a concrete idea for a venture the province actually needs. That could mean a trade
            or service business, a shop or restaurant, a manufacturing or technology operation, becoming self-employed in a
            regulated field, or buying and growing an existing New Brunswick business. The{" "}
            <strong>post-graduate entrepreneurial</strong> route, by contrast, is aimed at recent graduates of
            New Brunswick institutions who want to launch their own business in the province after studying there. Neither
            route is for passive investors looking to park money, and certain business types are excluded, confirm the
            current eligible and ineligible categories on welcomenb.ca.
          </p>
          <Callout type="info" title="Why New Brunswick wants entrepreneurs">
            The Business Immigration Stream exists to bring investment, jobs and services to New Brunswick communities. As an
            entrepreneur immigration route, it rewards genuine economic establishment: a strong file shows real ties to the
            province, a viable concept that meets a local need, and a credible plan to actively manage the business and
            create jobs, not just to invest in it.
          </Callout>

          <h2>What are the NB Business Immigration Stream requirements for 2026?</h2>
          <p>
            The <strong>NB business immigration</strong> requirements centre on a connected set of criteria: minimum net
            worth, minimum investment, business experience, language, an exploratory visit and a viable business plan backed
            by a genuine intention to settle in New Brunswick. The thresholds below reflect current criteria you should
            confirm on welcomenb.ca, New Brunswick adjusts these figures periodically, and the official page is the
            controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on welcomenb.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth in the region of $600,000, legally obtained and independently verifiable"],
              ["Minimum investment", "Active equity investment of around $250,000 in the New Brunswick business (lower on the post-graduate route)"],
              ["Business ownership", "A qualifying ownership share, with active, day-to-day management of the business"],
              ["Business experience", "Recent business ownership or senior management experience appropriate to the venture you propose"],
              ["Language", "Minimum official-language ability, typically around CLB 5 in English or French via an approved test"],
              ["Exploratory visit", "A documented exploratory visit to New Brunswick to research the market and your concept"],
              ["Business plan", "A viable business plan showing local economic benefit (e.g. jobs created) and a genuine intention to settle"],
            ]}
            caption="New Brunswick Business Immigration Stream key requirements, current criteria to confirm on welcomenb.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and language minimums change, and eligible business types and intake conditions are updated
            over time. Nothing on this page is a guarantee of eligibility or of an invitation, always confirm the current,
            official criteria on welcomenb.ca before you make decisions or move money.
          </Callout>

          <h2>What net worth and investment do I need?</h2>
          <p>
            Two financial tests sit at the heart of the stream. Your <strong>minimum net worth</strong> shows you can support
            yourself and absorb business risk; your <strong>minimum investment</strong> is the active capital you put into
            the venture itself. As current criteria to confirm on welcomenb.ca, the main NB Entrepreneurial route and the
            post-graduate entrepreneurial route generally sit at different levels. The post-graduate route is designed for
            graduates building a first business and typically carries lower thresholds.
          </p>
          <DataTable
            headers={["Factor", "NB Entrepreneurial (typical)", "Post-graduate entrepreneurial (typical)"]}
            rows={[
              ["Personal net worth", "~$600,000, fully documented and verifiable", "Lower threshold, confirm on welcomenb.ca"],
              ["Business investment", "~$250,000 active equity in the business", "Lower investment, confirm on welcomenb.ca"],
              ["Who it suits", "Experienced owners and senior managers", "Graduates of eligible New Brunswick institutions"],
            ]}
            caption="Indicative New Brunswick Business Immigration financial thresholds, current criteria to confirm on welcomenb.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. The province expects a clear, legitimate source-of-funds trail for both your net worth
            and your investment capital, and weak or unexplained financials are a common reason business files stall. Your
            investment must be genuine, at-risk equity in an operating New Brunswick business, not a passive arrangement or a
            loan you do not control.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Business Immigration Stream follows a staged sequence: you signal interest, are invited, come to New Brunswick
            on a work permit to <strong>establish and run the business</strong>, and are only nominated once you have actually
            set it up and met your commitments. The steps below show the path from first interest to a federal
            permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an expression of interest (EOI)", desc: "Confirm you meet the net-worth, investment, experience and language criteria, then submit an EOI through the INB Portal signalling the business you have in mind." },
              { title: "Complete an exploratory visit", desc: "Research the New Brunswick market, meet economic-development contacts and refine a business concept that fits a real local need." },
              { title: "Receive an invitation to apply", desc: "If selected by sector and provincial need, New Brunswick invites you to apply. Meeting the criteria puts you in contention, it does not guarantee an invitation." },
              { title: "Get a work permit & establish the business", desc: "On a positive assessment, obtain a work permit, move to New Brunswick and actually start or buy and run the business, meeting your investment, job-creation and management commitments." },
              { title: "Nomination after performance", desc: "Once you have met the targets in your performance agreement with the province, New Brunswick nominates you under the base Business Immigration Stream." },
              { title: "Separate IRCC permanent-residence application", desc: "Because this is a base nomination, you then file a separate paper PR application with IRCC, which makes the final decision." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike the worker streams, you are not nominated up front. The work-permit stage exists so you can prove the
            business is real and meeting its targets before the province endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the NBPNP worker streams?</h2>
          <p>
            The clearest way to understand the Business Immigration Stream is to contrast it with the NBPNP worker routes such
            as the <a href="/pnp/new-brunswick">Skilled Worker stream and the NB Express Entry pathways</a>. The worker
            streams are employer-driven and generally need a New Brunswick job offer. The business stream needs{" "}
            <strong>no job offer</strong>: you are assessed on capital, experience and a business plan, and PR follows only
            after you build the business yourself.
          </p>
          <DataTable
            headers={["Feature", "Business Immigration Stream", "NBPNP worker streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business plan", "Job offer + provincial / sector need"],
              ["Job offer", "Not required, you create the business", "Generally required (NB employer)"],
              ["When you're nominated", "After establishing the business on a work permit", "After an invitation and application"],
              ["Nomination type", "Base, separate paper IRCC application", "Base or enhanced (NB Express Entry = +600 CRS)"],
              ["Typical timeline", "Multi-stage, multi-year (build then nominate)", "EOI → invitation → application → nomination"],
            ]}
            caption="New Brunswick Business Immigration Stream vs the NBPNP worker streams (welcomenb.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match a real New
            Brunswick need; skipping or under-documenting the exploratory visit; mistaking a passive investment for the
            required active, at-risk equity; and relying on outdated thresholds. Because the figures and eligibility
            conditions change, a plan built on last year&apos;s numbers can quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of New Brunswick or IRCC, and we never guarantee a nomination or permanent residence. We give honest
            assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain helps with your NB business move</h2>
          <p>
            Our team is led by a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC
            #R706497); we assess whether the New Brunswick Business Immigration Stream genuinely fits your capital,
            experience and goals, help you decide between the NB Entrepreneurial and post-graduate entrepreneurial routes,
            and prepare an application, net-worth worksheet, source-of-funds trail and business plan, that stands up to
            provincial scrutiny. We work entirely online. If a different route, or a different{" "}
            <a href="/pnp">province</a>, fits better, we will tell you honestly.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own New
            Brunswick Business Immigration Stream materials, including your business plan and performance agreement
            commitments, an expert check before you submit. Thresholds and intake conditions here are current to 2026 and
            change over time, so we always confirm the live welcomenb.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in New Brunswick?"
        sub="Get started with a licensed RCIC for an honest read on whether the NB Business Immigration Stream fits your capital, experience and plans."
      />
    </>
  );
}
