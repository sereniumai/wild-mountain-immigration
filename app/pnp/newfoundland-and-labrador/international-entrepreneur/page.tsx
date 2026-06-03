import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/newfoundland-and-labrador/international-entrepreneur";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Newfoundland International Entrepreneur 2026",
  titleAbsolute: "NL International Entrepreneur: NLPNP 2026",
  description:
    "Newfoundland International Entrepreneur Category (NLPNP): start or buy a business in NL for PR. Net worth, investment and the EOI-to-PR process.",
  path: PATH,
  keywords: [
    "Newfoundland International Entrepreneur",
    "NLPNP entrepreneur",
    "start a business Newfoundland PR",
    "NL business immigration",
    "Newfoundland and Labrador entrepreneur category",
  ],
});

const faqs = [
  {
    q: "What is the Newfoundland International Entrepreneur Category?",
    a: "The International Entrepreneur Category is a business stream of the Newfoundland and Labrador Provincial Nominee Program (NLPNP) for experienced entrepreneurs and business owners who will establish a new business, or buy and actively run an existing one, in Newfoundland and Labrador. Unlike the worker streams, it is not based on a job offer, you earn permanent residence by investing in and operating a genuine NL business. Thresholds change, so confirm the current criteria on gov.nl.ca before relying on any figure.",
  },
  {
    q: "How much money do I need for the NLPNP International Entrepreneur Category?",
    a: "As current criteria to confirm on gov.nl.ca, applicants generally need a minimum personal net worth in the region of $600,000 and a minimum eligible business investment of about $200,000. Your net worth must be legally obtained and independently verifiable, and your investment must be active equity in the business, not a passive or loan-only arrangement. Because Newfoundland and Labrador adjusts these thresholds, treat the numbers here as a guide and verify the official figures before you commit funds.",
  },
  {
    q: "Do I need to visit Newfoundland and Labrador before applying?",
    a: "In most cases, yes. The International Entrepreneur Category is built around a genuine intention to settle and run a business in the province, and an exploratory visit is typically part of the criteria. The visit lets you research the local market, view business opportunities and show that your plan fits real NL needs. Requirements change over time, so confirm the current exploratory-visit expectations on gov.nl.ca before you travel.",
  },
  {
    q: "How is it different from the International Graduate Entrepreneur route?",
    a: "The International Entrepreneur Category is for experienced entrepreneurs and owner-operators with substantial net worth and investment capital, and it carries higher financial thresholds. The International Graduate Entrepreneur route is for recent graduates of Memorial University (MUN) or the College of the North Atlantic who are starting a business in NL, it has lower or no fixed net-worth and investment minimums but requires the NL graduate credential and an operating business. We can advise which route fits your profile in a consultation.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. An NLPNP nomination is a provincial endorsement, not permanent residence. After nomination you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. Neither the province nor IRCC guarantees a result, we build the strongest possible business case and flag risks before they become refusals. This stream is a standard RCIC matter and is not affiliated with or endorsed by any government.",
  },
  {
    q: "Can I buy an existing business in Newfoundland through this category?",
    a: "Yes. The International Entrepreneur Category lets you either establish a new business or buy and actively manage an existing NL business, provided you meet the ownership, investment and active-management requirements and the business is a genuine, ongoing operation. Passive investments and certain business types are typically excluded. Confirm the current list of eligible and ineligible business types on gov.nl.ca before you sign any purchase agreement.",
  },
  {
    q: "What language level do I need?",
    a: "You generally need to demonstrate a minimum official-language ability, typically around Canadian Language Benchmark (CLB) 5 in English or French, measured by an approved test, though you should confirm the current minimum on gov.nl.ca. Language matters here because you will be running a business, dealing with suppliers, staff and customers, and reporting to the province on your progress, so practical communication ability is part of showing your venture can succeed.",
  },
];

export default function NewfoundlandInternationalEntrepreneurPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Newfoundland International Entrepreneur Category, 2026 NLPNP Guide",
            description:
              "Newfoundland International Entrepreneur Category (NLPNP): start or buy a business in NL for PR. Net worth, investment and the EOI-to-PR process.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "NLPNP International Entrepreneur Category application support",
            description:
              "Newfoundland International Entrepreneur Category (NLPNP): start or buy a business in NL for PR. Net worth, investment and the EOI-to-PR process.",
            path: PATH,
            serviceType: "Provincial Nominee Program business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NLPNP, International Entrepreneur Category"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Newfoundland and Labrador", path: "/pnp/newfoundland-and-labrador" },
          { name: "International Entrepreneur", path: PATH },
        ]}
        title={<>Newfoundland <span className="text-brand">International Entrepreneur</span> Category</>}
        lede={
          <p>
            <strong>The Newfoundland International Entrepreneur Category is for experienced owners who will run a business in NL.</strong>{" "}
            You earn permanent residence by establishing, or buying and actively managing, a genuine Newfoundland and
            Labrador business. This RCIC-reviewed guide covers the requirements, the EOI-to-PR process and how it differs
            from the Graduate Entrepreneur route.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the entrepreneur route right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Business immigration turns on capital, experience and a credible plan. Get an honest read on your NL
                business case from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Newfoundland & Labrador PNP", href: "/pnp/newfoundland-and-labrador", note: "All NLPNP streams explained" },
                { label: "International Graduate Entrepreneur", href: "/pnp/newfoundland-and-labrador/graduate-entrepreneur", note: "For MUN / CNA graduate founders" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province compared" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Newfoundland International Entrepreneur Category is a base NLPNP business route for people who establish or buy and actively run a business in Newfoundland and Labrador, with no job offer required. Candidates are assessed on net worth, investment, business or management experience, language and an exploratory visit. The path runs through an Expression of Interest and a work permit to a nomination that supports a separate application for permanent residence."
            items={[
              <>The <strong>International Entrepreneur Category</strong> is an NLPNP <strong>business</strong> route, you earn PR by establishing or buying and actively running a business in Newfoundland and Labrador.</>,
              <>There is <strong>no job offer</strong>: you are assessed on <strong>net worth, investment, business or management experience, language and an exploratory visit</strong>.</>,
              <>Typical current criteria (confirm on gov.nl.ca): roughly <strong>$600,000 minimum net worth</strong>, about <strong>$200,000 minimum investment</strong> and around <strong>CLB 5</strong> language.</>,
              <>The path runs <strong>EOI → invitation → work permit to run the business → nomination → PR</strong>; nomination is not PR.</>,
              <>It differs from the <strong>International Graduate Entrepreneur</strong> route, which is for MUN / College of the North Atlantic graduates, link below.</>,
            ]}
          />

          <h2>What is the Newfoundland International Entrepreneur Category?</h2>
          <p>
            The <strong>Newfoundland International Entrepreneur</strong> Category is a business stream of the Newfoundland
            and Labrador Provincial Nominee Program (NLPNP) for experienced entrepreneurs and business owners who will
            <strong> establish a new business, or buy and actively run an existing one, in Newfoundland and Labrador</strong>.
            It supports the province&apos;s growth ambitions, which aim to welcome up to roughly <strong>5,100 newcomers a
            year</strong> by 2026 (source: gov.nl.ca, 2026).</p>
          <p>Unlike the NLPNP&apos;s worker streams, you do not need a
            Newfoundland job offer: you become a permanent resident by investing in and operating a genuine local business
            that creates economic benefit for the province.
          </p>
          <Callout type="brand" title="This is a business stream, not a worker stream">
            The International Entrepreneur Category is for owner-operators. You first come to Newfoundland and Labrador on a
            work permit to set up and run your business, and a nomination follows only after you have actually established it
            and met your commitments, it is a staged, multi-year pathway, not a single application.
          </Callout>

          <h2>Who is the International Entrepreneur Category for?</h2>
          <p>
            This category fits people who want to <em>build and run</em> a business and settle in Newfoundland and Labrador:
            seasoned entrepreneurs and senior managers with capital they can invest and verify. You should have genuine
            business-ownership or management experience, a concrete idea for a venture the province needs, and the personal
            net worth to absorb business risk.</p>
          <p>Typical fits include a trade or service business, a shop, restaurant or
            tourism operation, a manufacturing or technology venture, or buying a business in Newfoundland from a retiring
            owner and growing it. Because it rewards active ownership rather than passive capital, Newfoundland investor
            immigration through this route means running the business yourself. It is not for passive investors looking to
            park money, and certain business types are excluded. Confirm the current eligible and ineligible categories on
            gov.nl.ca.
          </p>
          <Callout type="info" title="Settlement intent matters">
            The category rewards a genuine intention to live in Newfoundland and Labrador and run the business day to day.
            An exploratory visit, a credible business concept and a realistic settlement plan are central to a strong file. The province is investing in people who will actually move and operate locally.
          </Callout>

          <h2>What are the International Entrepreneur requirements for 2026?</h2>
          <p>
            The <strong>NLPNP entrepreneur</strong> requirements centre on a connected set of criteria: minimum net worth,
            minimum eligible investment, business-ownership or senior-management experience, official language, and an
            exploratory visit backing a viable business concept. The thresholds below reflect current criteria you should
            confirm on gov.nl.ca, Newfoundland and Labrador adjusts these figures periodically, and the official page is the
            controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on gov.nl.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth in the region of $600,000, legally obtained and independently verifiable"],
              ["Minimum investment", "Eligible active investment of about $200,000 in the NL business (not a loan, deposit or passive stake)"],
              ["Business / management experience", "Recent business-ownership or senior-management experience appropriate to the venture you propose"],
              ["Ownership & management", "A qualifying ownership share with active, day-to-day management of the business in NL"],
              ["Language", "Minimum official-language ability, typically around CLB 5 in English or French via an approved test"],
              ["Exploratory visit", "An exploratory visit to research the NL market and business opportunities before or during the process"],
              ["Business concept", "A viable business plan showing genuine economic benefit to Newfoundland and Labrador"],
            ]}
            caption="NLPNP International Entrepreneur Category key requirements, current criteria to confirm on gov.nl.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and language minimums change, and eligible business types are updated over time. Nothing on
            this page is a guarantee of eligibility or of an invitation, always confirm the current, official criteria on
            gov.nl.ca before you make decisions or move money.
          </Callout>

          <h2>What net worth and investment do I need to start a business in Newfoundland for PR?</h2>
          <p>
            Two financial tests sit at the heart of the route to <strong>start a business in Newfoundland for PR</strong>.
            Your <strong>minimum net worth</strong> shows you can support yourself and absorb business risk; your
            <strong> minimum investment</strong> is the active capital you put into the venture itself. As current criteria
            to confirm on gov.nl.ca, these generally land around the levels below, and both must be fully documented.
          </p>
          <DataTable
            headers={["Factor", "Typical current minimum", "What it must show"]}
            rows={[
              ["Personal net worth", "~$600,000", "Legally obtained, fully documented and verifiable by a third party"],
              ["Business investment", "~$200,000", "Active equity in the NL business, not a loan, deposit or passive stake"],
              ["Ownership share", "Qualifying ownership %", "Genuine ownership with hands-on, day-to-day management responsibility"],
            ]}
            caption="Indicative International Entrepreneur Category financial thresholds, current criteria to confirm on gov.nl.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. The province expects a clear, legitimate source-of-funds trail for both your net worth
            and your investment capital, and weak or unexplained financials are a common reason business files stall. Your
            investment must be genuine, at-risk equity in an operating Newfoundland and Labrador business, not a passive
            arrangement. Not sure how your federal profile stacks up alongside a provincial route? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            <strong>NL business immigration</strong> through this category follows a staged sequence: you signal interest via
            an expression of interest, are invited, come to Newfoundland and Labrador on a work permit to
            <strong> establish and run the business</strong>, and are only nominated once you have actually set it up and met
            your commitments. The steps below show the path from first interest to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an Expression of Interest (EOI)", desc: "Confirm you meet the net-worth, investment, experience and language criteria, then submit an EOI describing the NL business you intend to establish or buy." },
              { title: "Receive an invitation to apply", desc: "If selected, Newfoundland and Labrador invites you to apply. Meeting the criteria places you in contention, it does not guarantee an invitation." },
              { title: "Apply with your business plan & financials", desc: "File your application with a viable business plan, a verified net-worth worksheet, source-of-funds evidence, language results and your exploratory-visit details." },
              { title: "Get a work permit & run the business", desc: "On a positive assessment, obtain a work permit, move to NL and actually establish or buy and operate the business, meeting the investment, management and performance commitments." },
              { title: "Nomination", desc: "Once you have met your business commitments under the agreement with the province, Newfoundland and Labrador nominates you for permanent residence." },
              { title: "IRCC permanent residence", desc: "After nomination you file a separate application to IRCC, which makes the final PR decision on medical, security and admissibility grounds." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike the worker streams, you are not nominated up front. The work-permit stage exists so you can prove the
            business is real and meeting its targets before the province endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the International Graduate Entrepreneur route?</h2>
          <p>
            Newfoundland and Labrador runs two entrepreneur routes, and choosing correctly up front saves time. The
            <strong> International Entrepreneur Category</strong> is for experienced owners and senior managers with
            substantial capital, and it carries higher financial thresholds. The{" "}
            <a href="/pnp/newfoundland-and-labrador/graduate-entrepreneur">International Graduate Entrepreneur</a> route is
            reserved for recent graduates of Memorial University (MUN) or the College of the North Atlantic who are starting
            a business in the province, it has lower or no fixed net-worth and investment minimums but requires the NL
            graduate credential and a genuinely operating business.
          </p>
          <DataTable
            headers={["Feature", "International Entrepreneur", "Graduate Entrepreneur"]}
            rows={[
              ["Who it's for", "Experienced entrepreneurs & senior managers", "Recent MUN / College of the North Atlantic graduates"],
              ["Net worth & investment", "Higher (≈ $600k net worth / $200k investment)", "Lower or no fixed minimum, confirm on gov.nl.ca"],
              ["Key credential", "Business-ownership / management experience", "Eligible NL post-secondary credential"],
              ["Language", "Around CLB 5 (confirm)", "Typically higher (around CLB 7, confirm)"],
              ["Common fit", "Buy or build a substantial NL business", "Launch a venture after studying in NL"],
            ]}
            caption="NLPNP International Entrepreneur vs International Graduate Entrepreneur (gov.nl.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match real NL market
            needs; skipping or under-preparing the exploratory visit; mistaking a passive investment for the required active,
            at-risk equity; and relying on outdated thresholds. Because the figures and eligible-business lists change, a plan
            built on last year&apos;s numbers can quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of Newfoundland and Labrador or IRCC, and we never guarantee a nomination or permanent residence. We
            give honest assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your NL business move</h2>
          <p>
            As an <strong>NL business immigration</strong> applicant, your first task is to confirm the route genuinely
            fits your capital, experience and goals, then submit an EOI and application that stand up to scrutiny. Working
            under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team
            assesses whether the International Entrepreneur Category is the right call, helps you shape a credible business
            concept for Newfoundland and Labrador, and prepares your file, net-worth worksheet, source-of-funds trail and
            business plan, to provincial standards.</p>
          <p>If the{" "}
            <a href="/pnp/newfoundland-and-labrador/graduate-entrepreneur">Graduate Entrepreneur</a> route or a different{" "}
            <a href="/pnp/newfoundland-and-labrador">NLPNP</a> pathway fits better, we will tell you honestly.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Newfoundland International Entrepreneur materials an expert check before you submit. Thresholds here are current
            to 2026 and change over time, so we always confirm the live gov.nl.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in Newfoundland and Labrador?"
        sub="Get started with a licensed RCIC for an honest read on whether the NLPNP International Entrepreneur Category fits your capital, experience and plans."
      />
    </>
  );
}
