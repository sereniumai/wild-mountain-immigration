import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/manitoba/business-investor-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Manitoba Business Investor Stream (MPNP BIS) 2026",
  titleAbsolute: "MPNP Business Investor Stream (BIS) 2026",
  description:
    "Manitoba Business Investor Stream: start a business in Manitoba for PR, MPNP BIS Entrepreneur & Farm Investor Pathways. Requirements & process. RCIC.",
  path: PATH,
  keywords: [
    "Manitoba Business Investor Stream",
    "MPNP BIS",
    "Manitoba business immigration",
    "start a business Manitoba PR",
    "Farm Investor Pathway",
    "MPNP Entrepreneur Pathway",
  ],
});

const faqs = [
  {
    q: "What is the Manitoba Business Investor Stream?",
    a: "The Manitoba Business Investor Stream (MPNP BIS) is the province's business-immigration route for entrepreneurs and investors who will establish or buy and actively operate a business in Manitoba. It has two pathways: the Entrepreneur Pathway, for general businesses, and the Farm Investor Pathway, for those establishing a farm operation in rural Manitoba. It is work-permit-first, you come to Manitoba on a temporary work permit, build the business, and are nominated for permanent residence only after meeting the terms of a Business Performance Agreement. Thresholds change, so confirm the current criteria on immigratemanitoba.com.",
  },
  {
    q: "How much money do I need for the MPNP Business Investor Stream?",
    a: "As current criteria to confirm on immigratemanitoba.com, the Entrepreneur Pathway generally expects a minimum personal net worth in the region of $500,000 and a minimum business investment of about $250,000 if the business is in the Winnipeg capital region, or about $150,000 if it is outside that region. Your net worth must be legally obtained and independently verifiable, and your investment must be active equity in the business, not a passive or loan-only stake. Because Manitoba adjusts these figures, treat them as a guide and verify the official numbers before committing funds.",
  },
  {
    q: "How is the Business Investor Stream different from the MPNP skilled-worker streams?",
    a: "The skilled-worker streams, Skilled Worker in Manitoba and Skilled Worker Overseas, rank you on an Expression of Interest and lead directly toward a nomination. The Business Investor Stream is work-permit-first: there is no Worker EOI ranking, and you are assessed on net worth, business experience, investment and a viable business plan. You first come to Manitoba on a temporary work permit to establish the business, and nomination follows only after you have actually built it and met your Business Performance Agreement. It is a staged, multi-year route rather than a single application.",
  },
  {
    q: "Does an MPNP nomination guarantee permanent residence?",
    a: "No. An MPNP nomination is a provincial endorsement, not permanent residence. After nomination you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible business case and flag risks before they become refusals. This stream is a standard RCIC matter and is not affiliated with or endorsed by any government.",
  },
  {
    q: "What is the Farm Investor Pathway?",
    a: "The Farm Investor Pathway is the agricultural arm of the Business Investor Stream, for experienced farm operators who intend to establish and actively run a farm business in rural Manitoba. Like the Entrepreneur Pathway it is work-permit-first and tests net worth, farming experience, an exploratory visit and a viable farm-business plan, with investment in a primary-production farm operation. The specific net-worth and investment expectations differ from the general Entrepreneur Pathway, so confirm the current Farm Investor Pathway criteria on immigratemanitoba.com before relying on any figure.",
  },
  {
    q: "Do I need to visit Manitoba before applying to the Business Investor Stream?",
    a: "In most cases, yes. The Business Investor Stream is built around a genuine intent to establish a business and settle in Manitoba, and a business-research or exploratory visit is typically part of the process. The visit lets you research the local market, meet relevant contacts and show that your business concept fits real Manitoba conditions. Expectations vary by pathway and change over time, so confirm the current exploratory-visit requirements on immigratemanitoba.com before you travel.",
  },
  {
    q: "How long does the MPNP Business Investor Stream take?",
    a: "Manitoba does not publish a single guaranteed timeline, and your path depends on how quickly you submit an Expression of Interest, receive an invitation, obtain a work permit, establish the business and meet your Business Performance Agreement before nomination. It is a multi-stage, multi-year journey: EOI, invitation, temporary work permit to set up the business, the operating period, then nomination and a separate IRCC permanent-residence application. Verify current processing information on immigratemanitoba.com and canada.ca.",
  },
];

export default function ManitobaBusinessInvestorStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Manitoba Business Investor Stream (MPNP BIS): 2026 Guide",
            description:
              "Manitoba Business Investor Stream: start a business in Manitoba for PR, MPNP BIS Entrepreneur & Farm Investor Pathways. Requirements & process. RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Manitoba Business Investor Stream application support",
            description:
              "Manitoba Business Investor Stream: start a business in Manitoba for PR, MPNP BIS Entrepreneur & Farm Investor Pathways. Requirements & process. RCIC.",
            path: PATH,
            serviceType: "Manitoba Provincial Nominee Program business consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Manitoba (MPNP), Business Investor Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Manitoba (MPNP)", path: "/pnp/manitoba" },
          { name: "Business Investor Stream", path: PATH },
        ]}
        title={<>Manitoba Business Investor Stream: <span className="text-brand">build a business, earn PR</span></>}
        lede={
          <p>
            <strong>The Manitoba Business Investor Stream is for entrepreneurs establishing a Manitoba business.</strong>{" "}
            Through the MPNP BIS, an Entrepreneur Pathway and a Farm Investor Pathway, you come to Manitoba on a work permit,
            build a genuine business, and earn permanent residence after meeting a Business Performance Agreement. This
            RCIC-reviewed guide covers the requirements and the EOI-to-PR process.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Considering the MPNP BIS?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Business Investor Stream rewards a credible plan and verifiable capital. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "Manitoba (MPNP) overview", href: "/pnp/manitoba", note: "How the whole program works" },
                { label: "Skilled Worker Overseas", href: "/pnp/manitoba/skilled-worker-overseas", note: "The overseas worker route" },
                { label: "International Education Stream", href: "/pnp/manitoba/international-education-stream", note: "For Manitoba graduates" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Manitoba Business Investor Stream (MPNP BIS) is the province's business-immigration route, where you earn permanent residence by establishing or buying and actively running a business in Manitoba. It suits experienced business owners and senior managers, who enter an Expression of Interest pool scored on factors such as net worth, business experience and connection to the province. The path runs from EOI and invitation to a work permit, running the business, provincial nomination and finally a PR application to IRCC."
            items={[
              <>The <strong>Manitoba Business Investor Stream (MPNP BIS)</strong> is the province&apos;s <strong>business-immigration</strong> route, you earn PR by establishing and actively running a business in Manitoba.</>,
              <>It has two pathways: an <strong>Entrepreneur Pathway</strong> for general businesses and a <strong>Farm Investor Pathway</strong> for farm operations in rural Manitoba.</>,
              <>It is <strong>work-permit-first</strong>: you come to Manitoba on a temporary work permit, build the business, and are nominated only after meeting a <strong>Business Performance Agreement</strong>.</>,
              <>Entrepreneur Pathway current criteria (confirm on immigratemanitoba.com): about <strong>$500,000 minimum net worth</strong> and a minimum investment of roughly <strong>$250,000 in the Winnipeg capital region</strong> or <strong>$150,000 outside it</strong>.</>,
              <>The path runs <strong>EOI → invitation → work permit to establish the business → Business Performance Agreement → nomination → PR</strong>; nomination is not PR.</>,
            ]}
          />

          <h2>What is the Manitoba Business Investor Stream?</h2>
          <p>
            The <strong>Manitoba Business Investor Stream</strong> is the business arm of the Manitoba Provincial Nominee
            Program (MPNP), for entrepreneurs and investors who will <strong>start a business in Manitoba, or buy and
            actively operate one, and earn permanent residence by doing so</strong>. It runs within Manitoba&apos;s 2026
            nomination allocation of about <strong>6,239</strong> across all MPNP streams (source: immigratemanitoba.com /
            IRCC, 2026). Unlike the skilled-worker routes, it is not based on a job offer or a Worker Expression of Interest
            ranking: you become a permanent resident by establishing and running a genuine Manitoba business that creates
            local economic benefit. The stream is split into two pathways, the <strong>Entrepreneur Pathway</strong> for
            general businesses and the <strong>Farm Investor Pathway</strong> for agricultural operations.
          </p>
          <Callout type="brand" title="This is a work-permit-first business stream">
            The MPNP BIS does not nominate you up front. Approved candidates come to Manitoba on a temporary{" "}
            <a href="/work-permits">work permit</a>, establish or buy the business, and are nominated only after meeting the
            terms of a Business Performance Agreement. It is a staged, multi-year pathway, not a single application.
          </Callout>

          <h2>Who is the Business Investor Stream for?</h2>
          <p>
            This stream fits people who want to <em>build and run</em> a business and settle in Manitoba, owner-operators
            with real business-management or ownership experience, capital they can invest and verify, and a concrete idea
            for a venture Manitoba actually needs. Often described informally as a Manitoba entrepreneur visa, it works as an
            owner-operator work permit first and a nomination second. The Entrepreneur Pathway suits a trade or service
            business, a shop or restaurant, a manufacturing or technology operation, or buying an existing Manitoba business
            and growing it. The Farm Investor Pathway is for experienced farmers planning to establish a primary-production farm
            in rural Manitoba. It is not for passive investors looking to park money, and certain business types are excluded. Confirm the current eligible and ineligible categories on immigratemanitoba.com.
          </p>
          <Callout type="info" title="Two pathways, one stream">
            The <strong>Entrepreneur Pathway</strong> covers general businesses across Manitoba, with a higher investment
            minimum inside the Winnipeg capital region than outside it. The <strong>Farm Investor Pathway</strong> is a
            separate track for farm operators, with its own farming-experience and farm-investment expectations. Choosing
            the right pathway, and the right location, is central to a strong file.
          </Callout>

          <h2>What are the MPNP BIS requirements for 2026?</h2>
          <p>
            The <strong>Business Investor Stream requirements</strong> centre on a connected set of criteria: minimum net
            worth, minimum investment, business or farming experience, an exploratory or business-research visit, language,
            and a viable business plan. The thresholds below reflect current criteria you should confirm on
            immigratemanitoba.com. Manitoba adjusts these figures periodically, and the official page is the controlling
            source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on immigratemanitoba.com)"]}
            rows={[
              ["Minimum net worth", "Personal net worth in the region of $500,000 (Entrepreneur Pathway), legally obtained and independently verifiable"],
              ["Minimum investment", "Active equity investment of about $250,000 in the Winnipeg capital region, or about $150,000 outside it (Entrepreneur Pathway)"],
              ["Business ownership", "A qualifying ownership share, with active, day-to-day management of the business"],
              ["Business / farming experience", "Recent business ownership or senior management experience, or farm-operation experience for the Farm Investor Pathway"],
              ["Exploratory / business-research visit", "A visit to research the Manitoba market and demonstrate genuine intent to establish the business"],
              ["Language", "A minimum official-language ability in English or French via an approved test"],
              ["Business plan", "A viable business plan showing local economic benefit, underpinning a Business Performance Agreement"],
            ]}
            caption="Manitoba Business Investor Stream key requirements, current criteria to confirm on immigratemanitoba.com (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and language minimums change, and eligible business types and locations are updated over
            time. Nothing on this page is a guarantee of eligibility or of an invitation, always confirm the current,
            official criteria on immigratemanitoba.com before you make decisions or move money.
          </Callout>

          <h2>What net worth and investment do I need?</h2>
          <p>
            Two financial tests sit at the heart of the Entrepreneur Pathway. Your <strong>minimum net worth</strong> shows
            you can support yourself and absorb business risk; your <strong>minimum investment</strong> is the active capital
            you put into the venture itself. The investment minimum varies by location: a higher figure applies inside the
            Winnipeg capital region than outside it, which encourages investment across the province. As current criteria to
            confirm on immigratemanitoba.com, these generally land around the levels below.
          </p>
          <DataTable
            headers={["Factor", "Entrepreneur Pathway minimum", "What it must show"]}
            rows={[
              ["Personal net worth", "~$500,000", "Legally obtained, fully documented and verifiable by a third party"],
              ["Business investment (Winnipeg capital region)", "~$250,000", "Active equity in the business, not a loan, deposit or passive stake"],
              ["Business investment (outside the capital region)", "~$150,000", "Active equity in a genuine, operating Manitoba business"],
              ["Ownership share", "Qualifying ownership %", "Genuine ownership with hands-on management responsibility"],
            ]}
            caption="Indicative Entrepreneur Pathway financial thresholds, current criteria to confirm on immigratemanitoba.com (May 2026). The Farm Investor Pathway has its own figures. Verify before relying on them."
          />
          <p>
            Document everything early. Manitoba expects a clear, legitimate source-of-funds trail for both your net worth and
            your investment capital, and weak or unexplained financials are a common reason business files stall. Your
            investment must be genuine, at-risk equity in an operating Manitoba business, not a passive arrangement, and the
            <strong> Farm Investor Pathway</strong> carries its own distinct net-worth and farm-investment expectations to
            confirm on the official page.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Business Investor Stream follows a staged sequence: you submit an Expression of Interest, are invited, obtain
            a temporary work permit to come to Manitoba and <strong>establish the business</strong>, sign and meet a Business
            Performance Agreement, and are only nominated once you have actually built the business and met your commitments.
            The steps below show the path from first interest to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an Expression of Interest (EOI)", desc: "Confirm you meet the net-worth, investment, experience and language minimums, then submit a Business Investor Stream EOI for the Entrepreneur or Farm Investor Pathway." },
              { title: "Receive an invitation to apply", desc: "If selected, Manitoba invites you to apply. Meeting the minimums places you in contention, it does not guarantee an invitation." },
              { title: "Complete your visit & business plan", desc: "Carry out an exploratory or business-research visit and prepare a viable business plan with a verified net-worth worksheet and source-of-funds evidence." },
              { title: "Get a work permit & establish the business", desc: "On approval, obtain a temporary work permit, move to Manitoba and actually start or buy and run the business under a Business Performance Agreement." },
              { title: "Meet your Business Performance Agreement", desc: "Operate the business and meet the agreed investment, management and (where applicable) job-creation commitments over the operating period." },
              { title: "Nomination & IRCC permanent residence", desc: "Once you have met the Business Performance Agreement, Manitoba nominates you. You then file a separate IRCC application; IRCC makes the final PR decision." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike the skilled-worker streams, you are not nominated up front. The work-permit stage exists so you can prove
            the business is real and meeting its targets, through the Business Performance Agreement, before the province
            endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the MPNP skilled-worker streams?</h2>
          <p>
            The clearest way to understand the Business Investor Stream is to contrast it with the MPNP worker routes such as
            the <a href="/pnp/manitoba/skilled-worker-overseas">Skilled Worker Overseas</a> stream and Skilled Worker in
            Manitoba. The worker streams rank you on an Expression of Interest scored out of 1,000 points and lead toward a
            nomination. The Business Investor Stream needs <strong>no Worker EOI ranking</strong>: you are assessed on
            capital, experience and a business plan, you come to Manitoba on a work permit, and PR follows only after you
            build the business and meet a Business Performance Agreement.
          </p>
          <DataTable
            headers={["Feature", "Business Investor Stream", "MPNP skilled-worker streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business plan", "Manitoba connection + EOI score (out of 1,000)"],
              ["Job offer", "Not required, you create the business", "Job offer or strong Manitoba connection"],
              ["When you're nominated", "After establishing the business & meeting the Business Performance Agreement", "After a Letter of Advice to Apply and a nomination application"],
              ["Type of nomination", "Base (separate IRCC paper application for PR)", "Base, with an enhanced Express Entry option only on Skilled Worker Overseas"],
              ["Typical timeline", "Multi-stage, multi-year (build then nominate)", "EOI → LAA → application → nomination"],
            ]}
            caption="Manitoba Business Investor Stream vs the MPNP skilled-worker streams (immigratemanitoba.com, 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Manitoba business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match real Manitoba
            market conditions; mistaking a passive investment for the required active, at-risk equity; underestimating the
            Business Performance Agreement&apos;s operating commitments; choosing the wrong pathway or location for your
            investment minimum; and relying on outdated thresholds. Because the figures and eligible-business lists change, a
            plan built on last year&apos;s numbers can quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Province of Manitoba or IRCC, and we never guarantee a nomination or permanent residence. We give honest
            assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain helps with your Manitoba business move</h2>
          <p>
            Working under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497),
            Wild Mountain Immigration assesses whether the Business Investor Stream genuinely fits your capital, experience
            and goals, helps you choose between the Entrepreneur and Farm Investor Pathways, and prepares an application,
            net-worth worksheet, source-of-funds trail and business plan, that stands up to provincial scrutiny and supports a
            realistic Business Performance Agreement. If a different <a href="/pnp/manitoba">MPNP</a> route fits better, our
            team will tell you honestly.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest read, and see our <a href="/fees">fees</a> for how
            our professional fee works alongside the provincial charges and your business investment. Thresholds and eligible
            categories for the <strong>Manitoba Business Investor Stream</strong> are current to 2026 and change over time, so
            we always confirm the live immigratemanitoba.com page before advising. If a skilled-worker route suits you better
            than this PNP business stream, compare the{" "}
            <a href="/pnp/manitoba/skilled-worker-overseas">Skilled Worker Overseas</a> and{" "}
            <a href="/pnp/manitoba/skilled-worker-in-manitoba">Skilled Worker in Manitoba</a> streams.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in Manitoba?"
        sub="Get started with a licensed RCIC for an honest read on whether the Manitoba Business Investor Stream fits your capital, experience and plans."
      />
    </>
  );
}
