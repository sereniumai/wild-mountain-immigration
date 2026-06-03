import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/saskatchewan/entrepreneur";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Saskatchewan Entrepreneur Stream (SINP) Guide 2026",
  titleAbsolute: "Saskatchewan Entrepreneur Stream (SINP) 2026 Guide",
  description:
    "Saskatchewan Entrepreneur stream: earn PR by starting or buying a business via EOI, net worth and investment. RCIC-reviewed guide, get an honest read.",
  path: PATH,
  keywords: [
    "Saskatchewan Entrepreneur stream",
    "SINP entrepreneur",
    "start a business Saskatchewan PR",
    "Saskatchewan business immigration",
    "SINP entrepreneur EOI",
  ],
});

const faqs = [
  {
    q: "What is the Saskatchewan Entrepreneur stream?",
    a: "The Saskatchewan Entrepreneur stream is the SINP business sub-category for people who will establish a new business, or buy and grow an existing one, in Saskatchewan and actively manage it. Unlike the skilled-worker routes, it is not based on a job offer. Instead, you become a permanent resident by investing in and running a genuine Saskatchewan business. You first enter an Expression of Interest pool, and if invited you sign a Business Performance Agreement, come to the province on a work permit to establish the business, and are nominated only after you meet your commitments. Thresholds and rules change, so confirm the current criteria on saskatchewan.ca before relying on any figure.",
  },
  {
    q: "How much net worth and investment do I need for the SINP Entrepreneur stream?",
    a: "As current criteria to confirm on saskatchewan.ca, applicants generally need a minimum personal net worth in the region of $500,000, legally obtained and verifiable, plus a minimum business investment that is higher for businesses in Regina and Saskatoon than for those located elsewhere in the province. Your investment must be active equity in the business, not a passive or loan-only arrangement, and you must hold a qualifying ownership share with hands-on management. Because Saskatchewan adjusts these thresholds, treat the numbers here as a guide and verify the official figures before you commit funds.",
  },
  {
    q: "How does the Entrepreneur Expression of Interest (EOI) work?",
    a: "You first submit a free Expression of Interest that scores your profile against the SINP entrepreneur points grid, covering factors such as business and management experience, net worth, proposed investment, age, language ability and ties to Saskatchewan. The province periodically runs an entrepreneur EOI draw, inviting the highest-ranked profiles to submit a full application. Reaching the scoring threshold makes you eligible to be considered, but it does not guarantee an invitation, because Saskatchewan draws from the strongest profiles. Confirm the current grid and any cut-offs on saskatchewan.ca before relying on a score.",
  },
  {
    q: "Do I get permanent residence straight away if I'm invited?",
    a: "No. An invitation lets you apply and sign a Business Performance Agreement (BPS), a contract setting out what you commit to invest and establish. You then come to Saskatchewan on a temporary work permit to set up and actively run the business. Only once you have met the terms of that agreement does Saskatchewan nominate you. A nomination is a provincial endorsement, not permanent residence: you then submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds.",
  },
  {
    q: "Can I buy an existing business in Saskatchewan through this stream?",
    a: "Yes. The Saskatchewan Entrepreneur stream allows you to either establish a new business or buy and actively manage an existing one, provided you meet the ownership, investment and active-management requirements and the business is a genuine, ongoing operation that creates economic benefit. Passive investments and certain business types are typically excluded, and a business located in Regina or Saskatoon usually carries a higher minimum investment than one elsewhere in the province. Confirm the current list of eligible and ineligible business types on saskatchewan.ca before you sign any purchase agreement.",
  },
  {
    q: "Is this the same as the SINP Farm category?",
    a: "No. The Farm Owner/Operator category is a separate SINP business route for experienced farmers who will buy and operate a farm in Saskatchewan, and it has its own net-worth and farm-investment requirements. The Entrepreneur stream is for a wider range of commercial businesses. If you are weighing both, we can assess which route genuinely fits your capital and experience. You can read more on our Saskatchewan Farm guide.",
  },
  {
    q: "How long does the Saskatchewan Entrepreneur stream take?",
    a: "There is no single guaranteed timeline, and the SINP entrepreneur processing time is best thought of as multi-stage and multi-year rather than a fixed figure: an Expression of Interest, an invitation, a full application and Business Performance Agreement, a two-year work permit to establish the business, then nomination and a separate IRCC permanent-residence application. How quickly you move depends on how fast you finalise your business plan, establish the operation and meet your commitments, plus provincial and federal processing. Service standards change, so confirm current processing information on saskatchewan.ca and canada.ca.",
  },
];

export default function SaskatchewanEntrepreneurPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Saskatchewan Entrepreneur Stream (SINP): 2026 Business Immigration Guide",
            description:
              "Saskatchewan Entrepreneur stream: start or buy a business for PR via EOI, net worth, investment and a business establishment plan. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Saskatchewan Entrepreneur stream application support",
            description:
              "Saskatchewan Entrepreneur stream: start or buy a business for PR via EOI, net worth, investment and a business establishment plan. RCIC-reviewed.",
            path: PATH,
            serviceType: "Saskatchewan Immigrant Nominee Program business consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Saskatchewan (SINP), Entrepreneur"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Saskatchewan (SINP)", path: "/pnp/saskatchewan" },
          { name: "Entrepreneur", path: PATH },
        ]}
        title={<>Saskatchewan Entrepreneur stream (SINP): <span className="text-brand">start a business, settle for PR</span></>}
        lede={
          <p>
            <strong>The Saskatchewan Entrepreneur stream is for founders starting or buying a Saskatchewan business.</strong>{" "}
            You earn permanent residence by investing in and actively running a genuine venture, with no job offer needed. This
            RCIC-reviewed guide covers the requirements, the entrepreneur Expression of Interest and the EOI-to-PR process.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the SINP Entrepreneur stream right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Business immigration is detailed and high-stakes. Get an honest read on your capital, experience and plan from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "Saskatchewan (SINP) overview", href: "/pnp/saskatchewan", note: "Every SINP stream explained" },
                { label: "SINP Farm category", href: "/pnp/saskatchewan/farm", note: "Buy and operate a Saskatchewan farm" },
                { label: "International Skilled Worker", href: "/pnp/saskatchewan/international-skilled-worker", note: "The SINP skilled-worker route" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Saskatchewan Entrepreneur stream is the SINP business route to permanent residence. Instead of a job offer, you earn PR by establishing, or buying and actively managing, a genuine Saskatchewan business once you meet the net-worth, investment and business-plan requirements. It suits experienced owners and managers, who enter an entrepreneur Expression of Interest (EOI) pool scored on net worth, investment, experience and ties to the province. The path then runs from EOI and invitation to a work permit, running the business, provincial nomination and finally a PR application to IRCC."
            items={[
              <>The <strong>Saskatchewan Entrepreneur stream</strong> is the SINP <strong>business</strong> route: you earn PR by establishing or buying and actively managing a Saskatchewan business.</>,
              <>There is <strong>no job offer</strong>: you enter an <strong>entrepreneur Expression of Interest (EOI)</strong> pool scored on net worth, investment, experience and ties to the province.</>,
              <>Typical current criteria (confirm on saskatchewan.ca): roughly <strong>$500,000 minimum net worth</strong>, with a <strong>higher minimum investment in Regina and Saskatoon</strong> than elsewhere.</>,
              <>Once invited you sign a <strong>Business Performance Agreement (BPS)</strong> and come to Saskatchewan on a <strong>work permit</strong> to establish the business.</>,
              <>The path runs <strong>EOI → invitation → BPS → work permit to establish the business → nomination → PR</strong>; nomination is not PR.</>,
            ]}
          />

          <h2>What is the Saskatchewan Entrepreneur stream?</h2>
          <p>
            The <strong>Saskatchewan Entrepreneur stream</strong> is the business sub-category of the Saskatchewan Immigrant
            Nominee Program (SINP) for entrepreneurs who will <strong>establish a new business in Saskatchewan, or buy an
            existing one, and actively manage it</strong>. It sits alongside the program&apos;s skilled-worker and farm
            routes within Saskatchewan&apos;s total provincial allocation of about <strong>4,761 nominations for 2026</strong>{" "}
            (source: saskatchewan.ca / IRCC, May 2026).</p>
          <p>Unlike the worker routes, you do not need a Saskatchewan job offer:
            you become a permanent resident by investing in and running a genuine business that creates local economic
            benefit. Because figures and policies change frequently, always verify the current rules before acting.
          </p>
          <Callout type="brand" title="This is a business stream, not a worker stream">
            The SINP Entrepreneur stream is for owner-operators. After an invitation you sign a Business Performance
            Agreement and come to Saskatchewan on a work permit to set up your business. A nomination follows only after you
            have actually established it and met your commitments. It is a staged, multi-year pathway, not a single
            application.
          </Callout>

          <h2>Who is the SINP Entrepreneur stream for?</h2>
          <p>
            This stream fits people who want to <em>build and run</em> a business and put down roots in Saskatchewan. You
            should have real business-ownership or senior-management experience, capital you can invest and verify, and a
            concrete idea for a venture the province needs, a trade or service business, a shop or restaurant, a
            manufacturing or technology operation, or buying and growing an existing local business whose owner is retiring.
            It is not for passive investors looking to park money, and certain business types are excluded.</p>
          <p>Confirm the
            current list of eligible and ineligible business types in Saskatchewan on saskatchewan.ca.
          </p>
          <Callout type="info" title="Where you locate matters">
            Saskatchewan typically sets a <strong>higher minimum investment for a business in Regina or Saskatoon</strong>{" "}
            than for one located elsewhere in the province, to encourage investment beyond the two largest cities. Choosing
            where to establish your business, and showing it genuinely fits local needs, is central to a strong file.
          </Callout>

          <h2>What are the Saskatchewan Entrepreneur stream requirements for 2026?</h2>
          <p>
            The <strong>Saskatchewan Entrepreneur stream requirements</strong> centre on a connected set of criteria: minimum
            net worth, minimum investment, business or management experience, language ability, and a viable business
            establishment plan. The thresholds below reflect current criteria you should confirm on saskatchewan.ca. The province adjusts these figures periodically, and the official page is always the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on saskatchewan.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth in the region of $500,000, legally obtained and independently verifiable"],
              ["Minimum investment", "Active equity investment in the business, typically higher for Regina/Saskatoon than for businesses located elsewhere in Saskatchewan"],
              ["Business ownership", "A qualifying ownership share, with active, day-to-day management of the business"],
              ["Business / management experience", "Recent business-ownership or senior-management experience appropriate to the venture you propose"],
              ["Expression of Interest", "A scored entrepreneur EOI profile; reaching the threshold is eligibility to be considered, not an invitation"],
              ["Business establishment plan", "A viable, well-researched plan showing local economic benefit (e.g. jobs created) and how you will run the business"],
              ["Language", "Official-language ability appropriate to running a business, measured by an approved test where required"],
            ]}
            caption="Saskatchewan Entrepreneur stream key requirements, current criteria to confirm on saskatchewan.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and language minimums change, and eligible business types and city-specific investment
            rules are updated over time. Nothing on this page is a guarantee of eligibility or of an invitation. Always
            confirm the current, official criteria on saskatchewan.ca before you make decisions or move money.
          </Callout>

          <h2>How much net worth and investment do I need?</h2>
          <p>
            Two financial tests sit at the heart of the stream. Your <strong>minimum net worth</strong> shows you can support
            yourself and absorb business risk; your <strong>minimum investment</strong> is the active capital you put into
            the venture itself. As current criteria to confirm on saskatchewan.ca, these generally land around the levels
            below, with a higher investment floor for businesses located in Regina or Saskatoon.
          </p>
          <DataTable
            headers={["Factor", "Typical current minimum", "What it must show"]}
            rows={[
              ["Personal net worth", "~$500,000", "Legally obtained, fully documented and verifiable by a third party"],
              ["Business investment", "Higher in Regina/Saskatoon, lower elsewhere in Saskatchewan", "Active equity in the business, not a loan, deposit or passive stake"],
              ["Ownership share", "Qualifying ownership %", "Genuine ownership with hands-on management responsibility"],
            ]}
            caption="Indicative Saskatchewan Entrepreneur stream financial thresholds, current criteria to confirm on saskatchewan.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. The province expects a clear, legitimate source-of-funds trail for both your net worth
            and your investment capital, and weak or unexplained financials are a common reason business files stall. Your
            investment must be genuine, at-risk equity in an operating Saskatchewan business, not a passive arrangement.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The SINP Entrepreneur stream follows a staged sequence: you submit an Expression of Interest, are invited, sign a
            Business Performance Agreement and apply, come to Saskatchewan on a work permit to <strong>establish the
            business</strong>, and are only nominated once you have actually set it up and met your commitments. The steps
            below show the path from first interest to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an Expression of Interest (EOI)", desc: "Confirm you meet the net-worth, investment and experience minimums, then submit a free entrepreneur EOI scored against Saskatchewan's points grid." },
              { title: "Receive an invitation to apply", desc: "If your profile ranks highly enough, Saskatchewan invites you to apply. Meeting the threshold places you in contention, but it does not guarantee an invitation." },
              { title: "Sign a Business Performance Agreement (BPS)", desc: "Submit your full application with your business establishment plan and verified financials, sign a BPS setting out what you commit to invest and establish, and lodge any required good faith deposit." },
              { title: "Get a work permit & establish the business", desc: "Obtain a temporary work permit (typically a two-year work permit), move to Saskatchewan and start or buy and actively run the business, meeting your investment, management and job-creation commitments." },
              { title: "Nomination", desc: "Once you have met the terms of your Business Performance Agreement, Saskatchewan nominates you for permanent residence." },
              { title: "IRCC permanent residence", desc: "You then file a separate application to IRCC, which makes the final PR decision on medical, security and admissibility grounds." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike the skilled-worker routes, you are not nominated up front. The work-permit stage exists so you can prove
            the business is real and meeting its targets before the province endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the SINP skilled-worker routes?</h2>
          <p>
            The clearest way to understand the Entrepreneur stream is to contrast it with the SINP{" "}
            <a href="/pnp/saskatchewan/international-skilled-worker">International Skilled Worker</a> category. The
            skilled-worker routes use a points-ranked Expression of Interest and generally need a job offer or in-demand
            occupation, and a base nomination leads to a separate IRCC application. The entrepreneur route needs{" "}
            <strong>no job offer</strong>: you are assessed on capital, experience and a business plan, and PR follows only
            after you build the business yourself.
          </p>
          <DataTable
            headers={["Feature", "Entrepreneur stream", "Skilled-worker routes"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business plan (entrepreneur EOI)", "Points-ranked ISW EOI; often a job offer or in-demand occupation"],
              ["Job offer", "Not required, you create the business", "Often required (eligible Saskatchewan employer)"],
              ["When you're nominated", "After establishing the business on a work permit and meeting a BPS", "After a full nomination application is approved"],
              ["CRS boost", "No automatic +600 CRS (business route)", "Only the Saskatchewan Express Entry sub-category is enhanced (+600 CRS)"],
              ["Typical timeline", "Multi-stage, multi-year (build then nominate)", "EOI → application → nomination, then IRCC"],
            ]}
            caption="Saskatchewan Entrepreneur stream vs the SINP skilled-worker routes (saskatchewan.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business establishment plan that does not match
            real local needs; underestimating the higher investment floor for Regina and Saskatoon; mistaking a passive
            investment for the required active, at-risk equity; and relying on outdated thresholds. Because the figures and
            eligible-business rules change, a plan built on last year&apos;s numbers can quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of Saskatchewan or IRCC, and we never guarantee a nomination or permanent residence. We give honest
            assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your Saskatchewan business move</h2>
          <p>
            As a CICC-regulated practice led by a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>,
            our team assesses whether the Saskatchewan Entrepreneur stream genuinely fits your capital, experience and
            goals, then helps you match a credible business to the right location. We also prepare your application,
            net-worth documentation, source-of-funds trail and business establishment plan, built from a proven template,
            so the file stands up to provincial scrutiny.</p>
          <p>If a different SINP route, such as the{" "}
            <a href="/pnp/saskatchewan/farm">Farm category</a> or the{" "}
            <a href="/pnp/saskatchewan/international-skilled-worker">International Skilled Worker</a> category, fits better, we
            will tell you honestly. Not sure where your federal score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Saskatchewan Entrepreneur stream materials an expert check before you submit. Thresholds and business rules
            here are current to 2026 and change over time, so we always confirm the live saskatchewan.ca page before
            advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in Saskatchewan?"
        sub="Get started with a licensed RCIC for an honest read on whether the SINP Entrepreneur stream fits your capital, experience and plans."
      />
    </>
  );
}
