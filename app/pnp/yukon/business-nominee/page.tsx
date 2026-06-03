import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/yukon/business-nominee";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Yukon Business Nominee Program, 2026 Guide",
  titleAbsolute: "YNP Business Nominee Program: Yukon 2026",
  description:
    "Yukon Business Nominee Program (YBNP): start a business in Yukon for PR, net worth, investment, exploratory visit and the route to nomination. RCIC-led.",
  path: PATH,
  keywords: [
    "Yukon Business Nominee Program",
    "YBNP",
    "start a business Yukon PR",
    "Yukon business immigration",
    "Yukon Nominee Program business",
  ],
});

const faqs = [
  {
    q: "What is the Yukon Business Nominee Program?",
    a: "The Yukon Business Nominee Program (YBNP) is the business stream of the Yukon Nominee Program for entrepreneurs who will invest in, and actively manage, a Yukon business, either by starting a new venture or buying an existing one. Unlike Yukon's worker streams, it does not require a job offer: you become a permanent resident by establishing and running a genuine Yukon business that benefits the local economy. Thresholds change, so confirm the current criteria on yukon.ca before relying on any figure.",
  },
  {
    q: "How much money do I need for the Yukon Business Nominee Program?",
    a: "As current criteria to confirm on yukon.ca, applicants generally need a minimum personal net worth in the region of $500,000 and a minimum business investment of about $300,000 in the Yukon business. Your net worth must be legally obtained and independently verifiable, and your investment must be active, at-risk equity in the business, not a passive or loan-only arrangement. Because Yukon adjusts these thresholds, treat the figures here as a guide and verify the official numbers before you commit funds.",
  },
  {
    q: "Do I need to visit Yukon before applying?",
    a: "In most cases, yes. The YBNP is built around genuine commitment to Yukon, and an exploratory visit to the territory is typically part of the process. The visit lets you research the local market, meet potential partners or a business you might buy, and show that your business plan fits real Yukon needs. Requirements change over time, so confirm the current exploratory-visit expectations on yukon.ca before you travel.",
  },
  {
    q: "Does a Yukon nomination guarantee permanent residence?",
    a: "No. A Yukon nomination is a territorial endorsement, not permanent residence. The Business Nominee stream is a base (paper) nomination, so after you are nominated you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. Neither the territory nor IRCC guarantees approval, and we build the strongest possible business case and flag risks before they become refusals. This is a standard RCIC matter and is not affiliated with or endorsed by any government.",
  },
  {
    q: "Can I buy an existing business in Yukon through this stream?",
    a: "Yes. The Yukon Business Nominee Program lets you either start a new business or buy and actively manage an existing one, provided you meet the ownership, investment and active-management requirements and the business is a genuine, ongoing operation. Passive investments and certain business types are typically excluded. Confirm the current list of eligible and ineligible business types on yukon.ca before you sign any purchase agreement.",
  },
  {
    q: "How is the Business Nominee stream different from Yukon's worker streams?",
    a: "Almost every Yukon Nominee Program stream, Skilled Worker, Critical Impact Worker and Yukon Express Entry, is employer-driven and requires a full-time job offer from an eligible Yukon employer. The Business Nominee stream is the exception: there is no job offer, and you are assessed on net worth, investment, business experience and a viable business plan instead. You first come to Yukon on a work permit to establish the business, and nomination follows only after you have actually set it up and met the terms of your business performance agreement.",
  },
  {
    q: "How long does the Yukon Business Nominee Program take?",
    a: "Yukon does not publish a single guaranteed timeline, and your path depends on how quickly you finalise your business plan, complete an exploratory visit, establish the business and meet your performance commitments before nomination. It is a multi-stage, multi-year journey: application, a business performance agreement, a work permit to set up the business, then nomination and a separate IRCC permanent-residence application. Verify current processing information on yukon.ca and canada.ca.",
  },
];

export default function YukonBusinessNomineePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Yukon Business Nominee Program (YBNP): 2026 Guide",
            description:
              "Yukon Business Nominee Program (YBNP): start a business in Yukon for PR, net worth, investment, exploratory visit and the route to nomination. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "Yukon Business Nominee Program application support",
            description:
              "Yukon Business Nominee Program (YBNP): start a business in Yukon for PR, net worth, investment, exploratory visit and the route to nomination. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Yukon (YNP), Business Nominee"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Yukon (YNP)", path: "/pnp/yukon" },
          { name: "Business Nominee", path: PATH },
        ]}
        title={<>Yukon Business Nominee Program <span className="text-brand">(YBNP)</span></>}
        lede={
          <p>
            <strong>The Yukon Business Nominee Program is for entrepreneurs investing in and running a Yukon business.</strong>{" "}
            You earn permanent residence by starting or buying a genuine local venture, no job offer needed. This RCIC-led guide
            covers the requirements, the work-permit-to-nomination process and how it differs from Yukon&apos;s worker streams.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the YBNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Yukon&apos;s 2026 allocation is tight, and a business stream is a serious, multi-year commitment. Get an honest
                read from a licensed RCIC before you move money.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Yukon Nominee Program (YNP)", href: "/pnp/yukon", note: "All Yukon streams explained" },
                { label: "Yukon Skilled Worker", href: "/pnp/yukon/skilled-worker", note: "The employer-driven worker route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Yukon Business Nominee Program (YBNP) is the business stream of the Yukon Nominee Program, for people who invest in and actively manage a Yukon business. It is the one YNP stream that is not employer-driven, so there is no job offer. Instead, candidates are assessed on net worth, investment, business experience and a business plan, usually with an exploratory visit. The path runs through a business performance agreement and a work permit to a base nomination that supports an application for permanent residence."
            items={[
              <>The <strong>Yukon Business Nominee Program (YBNP)</strong> is the business stream of the Yukon Nominee Program, you earn PR by <strong>investing in and actively managing</strong> a Yukon business.</>,
              <>There is <strong>no job offer</strong>: it is the one YNP stream that is not employer-driven. You are assessed on <strong>net worth, investment, business experience and a business plan</strong>.</>,
              <>Typical current criteria (confirm on yukon.ca): roughly <strong>$500,000 minimum net worth</strong> and about <strong>$300,000 minimum investment</strong> in the Yukon business.</>,
              <>Expect an <strong>exploratory visit</strong> to Yukon, the stream rewards genuine commitment to the territory.</>,
              <>The path runs <strong>application → business performance agreement → work permit → nomination → PR</strong>; nomination is a base (paper) endorsement, not PR.</>,
            ]}
          />

          <h2>What is the Yukon Business Nominee Program?</h2>
          <p>
            The <strong>Yukon Business Nominee Program</strong> (YBNP) is the entrepreneur route within the Yukon Nominee
            Program. The Yukon Nominee Program is the territory&apos;s economic immigration system, the northern equivalent of a
            provincial nominee program. The YBNP is designed for people who will <strong>invest in, and actively manage, a Yukon business</strong>,
            either by starting a new venture or buying and growing an existing one.</p>
          <p>Yukon&apos;s 2026 nomination allocation is
            about <strong>282</strong> across all of its streams, one of the smallest in Canada after IRCC cut provincial and
            territorial allocations nationwide (source: yukon.ca, 2026). Unlike Yukon&apos;s worker streams, the Business
            Nominee stream does not require a Yukon job offer: you become a permanent resident by establishing and running a
            genuine business that creates real local economic benefit.
          </p>
          <Callout type="brand" title="This is a business stream, not a worker stream">
            The Business Nominee stream is for owner-operators. You first come to Yukon on a work permit to set up your
            business, and a nomination follows only after you have actually established it and met the terms of your business
            performance agreement, it is a staged, multi-year pathway, not a single application.
          </Callout>

          <h2>Who is the Yukon Business Nominee Program for?</h2>
          <p>
            This stream fits people who want to <em>build and run</em> a business and put down roots in the territory, whether
            they already work for themselves or plan to start. You should have real business-ownership or senior-management
            experience, capital you can invest and verify, and a concrete idea for a venture the territory actually needs.
            That might be a trade or service business, a tourism or hospitality operation, a Whitehorse shop or restaurant, a
            resource or logistics business, or buying and growing an existing Yukon company whose owner is retiring.</p>
          <p>It is not
            for passive investors looking to park money, and certain ineligible business categories are typically excluded.
            Because this is <strong>Yukon business immigration</strong> at its core, the practical test is whether your venture
            is genuine, viable and good for the local economy. Confirm the current eligible business types and ineligible
            business categories on yukon.ca before you commit.
          </p>

          <h2>What are the Yukon Business Nominee Program requirements for 2026?</h2>
          <p>
            The <strong>Yukon Business Nominee Program</strong> requirements centre on a connected set of criteria: minimum net
            worth, minimum investment, business experience, an exploratory visit, and a viable business plan. The thresholds
            below reflect current criteria you should confirm on yukon.ca, Yukon adjusts these figures periodically, and the
            official program page is the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on yukon.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth in the region of $500,000, legally obtained and independently verifiable"],
              ["Minimum investment", "Active equity investment of about $300,000 in the Yukon business"],
              ["Business ownership", "A qualifying ownership share, with active, day-to-day management of the business"],
              ["Business experience", "Recent business ownership or senior management experience appropriate to the venture you propose"],
              ["Exploratory visit", "A genuine exploratory visit to Yukon to research the market and demonstrate commitment"],
              ["Language", "A minimum official-language ability (English or French) measured by an approved test"],
              ["Business plan", "A viable, Yukon-appropriate business plan showing local economic benefit and job creation"],
            ]}
            caption="Yukon Business Nominee Program key requirements, current criteria to confirm on yukon.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and language minimums change, and the lists of eligible communities and business types are
            updated over time. Nothing on this page is a guarantee of eligibility or of a nomination, always confirm the
            current, official criteria on yukon.ca before you make decisions or move money.
          </Callout>

          <h2>What net worth and investment do I need?</h2>
          <p>
            Two financial tests sit at the heart of the stream. Your <strong>minimum net worth</strong> shows you can support
            yourself and absorb business risk; your <strong>minimum investment</strong> is the active capital you put into the
            Yukon venture itself. As current criteria to confirm on yukon.ca, these generally land around the levels below, and
            the province expects a clear, legitimate source-of-funds trail for both.
          </p>
          <DataTable
            headers={["Factor", "Typical current minimum", "What it must show"]}
            rows={[
              ["Personal net worth", "~$500,000", "Legally obtained, fully documented and verifiable by a third party"],
              ["Business investment", "~$300,000", "Active, at-risk equity in the Yukon business, not a loan, deposit or passive stake"],
              ["Ownership share", "Qualifying ownership %", "Genuine ownership with hands-on management responsibility"],
            ]}
            caption="Indicative Yukon Business Nominee Program financial thresholds, current criteria to confirm on yukon.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. Weak or unexplained financials are one of the most common reasons business files stall.
            Your investment must be genuine, at-risk equity in an operating Yukon business, not a passive arrangement, and your
            net-worth statement should be independently verifiable down to the source of each major asset.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Yukon Business Nominee Program follows a staged sequence: you apply, sign a <strong>business performance
            agreement</strong>, come to Yukon on a <strong>work permit</strong> to establish the business, and are only
            nominated once you have actually set it up and met your commitments. The steps below show the path from first
            application to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Prepare & submit your application", desc: "Confirm you meet the net-worth, investment and experience criteria, complete an exploratory visit, and submit your application with a viable business plan and verified source-of-funds evidence." },
              { title: "Sign a business performance agreement", desc: "If Yukon assesses your proposal positively, you sign a business performance agreement setting out the investment, ownership and management commitments you must meet." },
              { title: "Get a work permit & establish the business", desc: "On the strength of that agreement, you obtain a work permit, move to Yukon and actually start or buy and run the business, meeting your investment, job-creation and active-management commitments." },
              { title: "Nomination", desc: "Once you have met the terms of your business performance agreement, Yukon nominates you under the Business Nominee stream, a base (paper) nomination." },
              { title: "IRCC permanent residence", desc: "You then file a separate application with IRCC for permanent residence. IRCC makes the final decision on medical, security and admissibility grounds." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike Yukon&apos;s worker streams, you are not nominated up front. The work-permit stage exists so you can prove the
            business is real and meeting its targets before the territory endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from Yukon&apos;s worker streams?</h2>
          <p>
            The clearest way to understand the Business Nominee stream is to contrast it with Yukon&apos;s worker routes, such as
            the <a href="/pnp/yukon/skilled-worker">Yukon Skilled Worker</a>,{" "}
            <a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a> and{" "}
            <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> streams, all part of the wider{" "}
            <a href="/pnp/yukon">Yukon Nominee Program</a>. Those streams are
            employer-driven and need a full-time Yukon job offer. The Business Nominee stream needs <strong>no job offer</strong>:
            you are assessed on capital, experience and a business plan, and PR follows only after you build the business
            yourself.
          </p>
          <DataTable
            headers={["Feature", "Business Nominee", "Yukon worker streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business plan", "Full-time Yukon job offer + eligibility"],
              ["Job offer", "Not required, you create the business", "Required (eligible Yukon employer)"],
              ["When you're nominated", "After establishing the business on a work permit", "After a complete application during an EOI window"],
              ["Nomination type", "Base (paper) → separate IRCC PR application", "Skilled Worker base; Yukon Express Entry enhanced (+600 CRS)"],
              ["Typical timeline", "Multi-stage, multi-year (build then nominate)", "Tied to short EOI intake windows"],
            ]}
            caption="Yukon Business Nominee Program vs the YNP worker streams (yukon.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match Yukon&apos;s real
            market needs; skipping or under-preparing the exploratory visit; mistaking a passive investment for the required
            active, at-risk equity; and relying on outdated thresholds. Because the figures and eligible-business lists change, a
            plan built on last year&apos;s numbers can quietly fall short, and with Yukon&apos;s small 282 allocation, a strong,
            current file matters more than ever.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of Yukon or IRCC, and we never guarantee a nomination or permanent residence. We give honest assessments
            and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your Yukon business move</h2>
          <p>
            If you want to <strong>start a business in Yukon for PR</strong>, the practical hurdles are a credible business plan,
            a clean source-of-funds trail and meeting the terms of your business performance agreement once you arrive. Working
            under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team
            assesses whether the Business Nominee stream genuinely fits your capital, experience and goals, helps you shape a
            viable venture for the Yukon market, and prepares an application, net-worth worksheet, source-of-funds evidence and
            business plan, that stands up to territorial scrutiny.</p>
          <p>If a worker route fits better, such as the{" "}
            <a href="/pnp/yukon/skilled-worker">Skilled Worker</a> or{" "}
            <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> stream, or a programme in another province like the{" "}
            <a href="/alberta-immigration">Alberta Advantage Immigration Program</a>, we will tell you honestly.
          </p>
          <p>
            Prefer to handle some of the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own
            Business Nominee materials an expert check before you submit, and you can <a href="/contact">contact our team</a>{" "}
            first. Whether you are weighing the <strong>Yukon Business Nominee Program</strong> or wider Yukon entrepreneur
            immigration generally, thresholds and eligible-business lists here are current to 2026 and change over time, so we
            always confirm the live yukon.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in Yukon?"
        sub="Get started with a licensed RCIC for an honest read on whether the Yukon Business Nominee Program fits your capital, experience and plans."
      />
    </>
  );
}
