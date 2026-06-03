import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia/entrepreneur";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia Entrepreneur Stream, 2026 Guide",
  titleAbsolute: "NSNP Entrepreneur Stream: Nova Scotia 2026",
  description:
    "Nova Scotia Entrepreneur stream (NSNP): run a business a year on a work permit, then apply for nomination to PR. Net worth, investment, EOI. RCIC-led.",
  path: PATH,
  keywords: [
    "Nova Scotia Entrepreneur stream",
    "NSNP Entrepreneur",
    "start a business Nova Scotia PR",
    "Nova Scotia business immigration",
    "NSNP entrepreneur EOI",
  ],
});

const faqs = [
  {
    q: "What is the Nova Scotia Entrepreneur stream?",
    a: "The Nova Scotia Entrepreneur stream is a Nova Scotia business immigration pathway under the Nova Scotia Nominee Program (NSNP) for experienced owners and senior managers who will establish, or buy and actively run, a business in Nova Scotia. You first come on a temporary work permit, operate the business for at least one year, and only then apply for a provincial nomination toward permanent residence. It tests net worth, investment, business experience and active management rather than a job offer. Thresholds change, so confirm the current criteria on novascotia.ca before relying on any figure.",
  },
  {
    q: "How much money do I need for the NSNP Entrepreneur stream?",
    a: "As current criteria to confirm on novascotia.ca, applicants generally need a minimum personal net worth in the region of $600,000 if the business is in the Halifax (HRM) area, or about $400,000 outside it, plus a minimum business investment commonly around $150,000. Your net worth must be legally obtained and verifiable, and your investment must be active equity in the business, not a passive or loan-only arrangement. Because Nova Scotia adjusts these thresholds, treat the numbers here as a guide and verify the official figures before you commit funds.",
  },
  {
    q: "Do I need a job offer for the Nova Scotia Entrepreneur stream?",
    a: "No. This is a business stream, not an employer-driven one, so there is no job offer. Instead of a Nova Scotia employer sponsoring you, you create and actively manage your own qualifying business in the province. You are assessed on net worth, investment, relevant business ownership or senior management experience, language and a viable business plan, and you must run the business yourself, day to day, rather than holding a passive stake.",
  },
  {
    q: "How does the work permit stage work?",
    a: "After Nova Scotia approves your business proposal and issues a benefits letter, you apply to IRCC for a temporary work permit and move to the province to establish and operate your business. You must actively manage it for at least one year before you become eligible to apply for the provincial nomination. This work-permit-first design lets Nova Scotia confirm the business is genuine and operating before endorsing you. Always confirm the current permit and operating requirements on novascotia.ca.",
  },
  {
    q: "Is the Entrepreneur stream enhanced or base, does it add 600 CRS points?",
    a: "It is a base nomination, so it does not add 600 Comprehensive Ranking System (CRS) points and is not aligned with Express Entry. Once Nova Scotia nominates you under the Entrepreneur stream, you submit a separate, paper-based permanent-residence application directly to IRCC rather than receiving an Express Entry Invitation to Apply. Only Nova Scotia's enhanced, Express Entry-aligned selections add the 600-point boost; the entrepreneur routes do not.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. An NSNP nomination is a provincial endorsement, not permanent residence. After nomination you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. Neither the province nor IRCC promises a result in advance, so we build the strongest possible business case and flag risks before they become refusals. Wild Mountain Immigration is a standard RCIC practice and is not affiliated with or endorsed by any government.",
  },
  {
    q: "Can I buy an existing business in Nova Scotia through this stream?",
    a: "Yes. The Nova Scotia Entrepreneur stream lets you either start a new business or buy and actively manage an existing one, provided you meet the ownership, investment and active-management requirements and the business is a genuine, ongoing operation. Passive investments and certain business types are typically excluded. If you are buying, you generally need to have explored the business and meet the same financial tests. Confirm the current eligible and ineligible business types on novascotia.ca before you sign any purchase agreement.",
  },
  {
    q: "How long does the Nova Scotia Entrepreneur stream take?",
    a: "It is a multi-stage, multi-year journey rather than a single application. You submit an expression of interest (EOI), and if invited prepare a business proposal; after approval you obtain a work permit, move to Nova Scotia and run the business for at least one year before applying for the nomination; then you file a separate IRCC permanent-residence application. Each stage has its own processing time, so plan for a journey measured in years and verify current timelines on novascotia.ca and canada.ca.",
  },
];

export default function NovaScotiaEntrepreneurPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia Entrepreneur Stream: 2026 Guide (NSNP Business Immigration)",
            description:
              "Nova Scotia Entrepreneur stream (NSNP): run a business a year on a work permit, then apply for nomination to PR. Net worth, investment, EOI. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Nova Scotia Entrepreneur stream application support",
            description:
              "Nova Scotia Entrepreneur stream (NSNP): run a business a year on a work permit, then apply for nomination to PR. Net worth, investment, EOI. RCIC-led.",
            path: PATH,
            serviceType: "Nova Scotia Nominee Program business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Nova Scotia (NSNP), Entrepreneur"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Nova Scotia (NSNP)", path: "/pnp/nova-scotia" },
          { name: "Entrepreneur", path: PATH },
        ]}
        title={<>Nova Scotia Entrepreneur stream: <span className="text-brand">build a business, earn PR</span></>}
        lede={
          <p>
            <strong>The Nova Scotia Entrepreneur stream is for owners who run a Nova Scotia business toward PR.</strong>{" "}
            Sometimes called the Nova Scotia entrepreneur visa, it is a form of Nova Scotia investor immigration: you come
            on a work permit, actively operate a qualifying business for at least a year, then apply for an NSNP nomination,
            a business route to permanent residence with no job offer needed. This RCIC-reviewed guide covers the
            requirements, the EOI-to-PR process and the work-permit-first model.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the NSNP Entrepreneur stream right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Get an honest read from a licensed RCIC on whether your capital, experience and business plan fit Nova Scotia business immigration.</p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia (NSNP) overview", href: "/pnp/nova-scotia", note: "Every Nova Scotia stream explained" },
                { label: "International Graduate Entrepreneur", href: "/pnp/nova-scotia/international-graduate-entrepreneur", note: "For NS university/college graduates" },
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
            summary="The Nova Scotia Entrepreneur stream is the business immigration route of the Nova Scotia Nominee Program (NSNP). It lets experienced owners and senior managers earn permanent residence by establishing, or buying and actively running, a qualifying business in Nova Scotia instead of holding a job offer. You first come on a temporary work permit, operate the business for at least one year, and only then apply for a provincial nomination toward permanent residence. Selection runs through an Expression of Interest scored on net worth, investment, business experience and active management."
            items={[
              <>The <strong>Nova Scotia Entrepreneur stream</strong> is an NSNP <strong>business immigration</strong> route, you earn PR by establishing or buying and actively managing a business in Nova Scotia.</>,
              <>There is <strong>no job offer</strong>: you are assessed on <strong>net worth, investment, business experience, language and a business plan</strong>, then run the business yourself.</>,
              <>It is <strong>work-permit-first</strong>: you operate the business for <strong>at least one year</strong> on a temporary permit before you can apply for the nomination.</>,
              <>Typical current criteria (confirm on novascotia.ca): roughly <strong>$600,000 net worth in HRM / $400,000 outside</strong> and a <strong>~$150,000 minimum investment</strong>.</>,
              <>It is a <strong>base nomination</strong>, no 600 CRS points; once nominated you file a <strong>separate paper application to IRCC</strong> for permanent residence.</>,
            ]}
          />

          <h2>What is the Nova Scotia Entrepreneur stream?</h2>
          <p>
            The <strong>Nova Scotia Entrepreneur stream</strong> is a business pathway of the Nova Scotia Nominee Program
            (NSNP) for experienced owners and senior managers who will <strong>start a business in Nova Scotia, or buy and
            actively run an existing one</strong>, and settle in the province as permanent residents.</p>
          <p>It is part of how
            Nova Scotia grows its economy: the province charges <strong>no provincial application fee</strong> for an NSNP
            nomination (source: novascotia.ca, May 2026), one of the few in Canada to do so, though federal IRCC fees still
            apply. Unlike the employer-driven routes, the <strong>NSNP Entrepreneur</strong> path needs no job offer, you
            become a permanent resident by establishing and running a genuine Nova Scotia business that creates local
            economic benefit.
          </p>
          <Callout type="brand" title="This is a business stream, and it is work-permit-first">
            The Entrepreneur stream is for owner-operators. You first come to Nova Scotia on a temporary work permit to set
            up and run your business, and a nomination follows only after you have actively operated it for at least a year. This is a staged, multi-year pathway, not a single application.
          </Callout>

          <h2>Who is the NSNP Entrepreneur stream for?</h2>
          <p>
            This stream fits people who want to <em>build and run</em> a business and put down roots in Nova Scotia, whether
            in Halifax (the Halifax Regional Municipality, or HRM) or a smaller community across the province.</p>
          <p>You should have
            real business ownership or senior-management experience, capital you can invest and verify, and a concrete idea
            for a viable venture: a trade or service business, a shop or restaurant, a manufacturing or technology operation,
            or buying and growing an existing local business whose owner is retiring. It is not for passive investors looking
            to park money, and certain business types are excluded. Confirm the current eligible and ineligible categories
            on novascotia.ca.
          </p>
          <Callout type="info" title="Active management is the core requirement">
            Eligibility hinges on genuine, hands-on ownership. You must actively manage the business day to day, dealing
            with staff, suppliers and customers, not simply hold a passive or arm&apos;s-length stake. Demonstrating that
            active role is central to both the work-permit and the nomination stages.
          </Callout>

          <h2>What are the Nova Scotia Entrepreneur stream requirements for 2026?</h2>
          <p>
            The <strong>Nova Scotia Entrepreneur stream requirements</strong> centre on a connected set of criteria: minimum
            net worth, minimum investment, business ownership and experience, language, and a viable business plan. The
            thresholds below reflect current criteria you should confirm on novascotia.ca. Nova Scotia adjusts these figures
            periodically, so the official page is always the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on novascotia.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth around $600,000 (HRM) or $400,000 (outside HRM), legally obtained and independently verifiable"],
              ["Minimum investment", "Active equity investment commonly around $150,000 in the Nova Scotia business"],
              ["Business ownership", "At least a qualifying ownership share, with active, day-to-day management of the business"],
              ["Business experience", "Recent business ownership (typically several years) or NOC senior management experience appropriate to the venture"],
              ["Age", "Generally an adult applicant of working age, confirm any current age criteria on novascotia.ca"],
              ["Language", "Minimum official-language ability, typically around Canadian Language Benchmark (CLB) 5 in English or French via an approved test"],
              ["Business plan", "A viable business plan showing local economic benefit, plus an exploratory visit where required"],
            ]}
            caption="Nova Scotia Entrepreneur stream key requirements, current criteria to confirm on novascotia.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and language minimums change, and eligible business types are updated over time. Nothing on
            this page is a guarantee of eligibility or of an invitation. Always confirm the current, official criteria on
            novascotia.ca before you make decisions or move money.
          </Callout>

          <h2>What net worth and investment do I need?</h2>
          <p>
            Two financial tests sit at the heart of the stream. Your <strong>minimum net worth</strong> shows you can
            support yourself and absorb business risk; your <strong>minimum investment</strong> is the active capital you put
            into the venture itself. As current criteria to confirm on novascotia.ca, these generally land around the levels
            below, with the higher net-worth figure reserved for businesses in the Halifax area.
          </p>
          <DataTable
            headers={["Factor", "Typical current minimum", "What it must show"]}
            rows={[
              ["Personal net worth (HRM)", "~$600,000", "Legally obtained, fully documented and verifiable by a third party"],
              ["Personal net worth (outside HRM)", "~$400,000", "Same documentation standard, for businesses outside the Halifax area"],
              ["Business investment", "~$150,000", "Active equity in the Nova Scotia business, not a loan, deposit or passive stake"],
              ["Ownership share", "Qualifying ownership %", "Genuine ownership with hands-on management responsibility"],
            ]}
            caption="Indicative Nova Scotia Entrepreneur stream financial thresholds, current criteria to confirm on novascotia.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. The province expects a clear, legitimate source-of-funds trail for both your net
            worth and your investment capital, and weak or unexplained financials are a common reason business files stall.
            Plan to evidence your source of funds in full and to complete an exploratory visit to Nova Scotia where required,
            so you can confirm the local market and your business location first-hand. Your investment must be genuine,
            at-risk equity in an operating Nova Scotia business, not a passive arrangement.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Entrepreneur stream follows a staged sequence built around an <strong>expression of interest (EOI)</strong>{" "}
            and the work-permit-first model: you signal interest, are invited, build your business proposal, come to Nova
            Scotia on a work permit to <strong>run the business for at least a year</strong>, and are only nominated once you
            have met your commitments. The steps below show the path from first interest to a federal permanent-residence
            decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an Expression of Interest (EOI)", desc: "Confirm you meet the net-worth, investment, experience and language minimums, then submit an EOI to Nova Scotia describing the business you have in mind." },
              { title: "Receive an invitation to apply", desc: "Nova Scotia ranks EOIs and invites the strongest profiles. Meeting the minimums places you in contention, it does not guarantee an invitation." },
              { title: "Submit your business proposal & application", desc: "Prepare a viable business proposal with a verified net-worth worksheet and source-of-funds evidence, complete any required exploratory visit, and file your application for assessment." },
              { title: "Get a benefits letter & work permit", desc: "On approval, Nova Scotia issues a benefits letter; you apply to IRCC for a temporary work permit and move to the province." },
              { title: "Establish & run the business for ≥1 year", desc: "Start or buy and actively manage your Nova Scotia business, meeting your investment, ownership and active-management commitments for at least one year." },
              { title: "Apply for nomination, then IRCC PR", desc: "Once you have met your commitments, apply for the NSNP nomination. After nomination, you file a separate IRCC permanent-residence application; IRCC makes the final PR decision." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike the worker streams, you are not nominated up front. The work-permit stage exists so you can prove the
            business is real and operating before the province endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the NSNP worker streams?</h2>
          <p>
            The clearest way to understand the Entrepreneur stream is to contrast it with the NSNP worker routes such as the{" "}
            <a href="/pnp/nova-scotia">Skilled Worker and Express Entry-aligned selections</a>. The worker streams typically
            need a Nova Scotia job offer or an Express Entry profile and rank you on labour-market criteria. The entrepreneur
            stream needs <strong>no job offer</strong>: you are assessed on capital, experience and a business plan, and PR
            follows only after you build and run the business yourself.
          </p>
          <DataTable
            headers={["Feature", "Entrepreneur stream", "NSNP worker streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business plan", "Job offer and/or Express Entry / EOI ranking"],
              ["Job offer", "Not required, you create the business", "Often required (Skilled Worker) or an EE profile"],
              ["Nomination type", "Base (no 600 CRS points)", "Enhanced (EE-aligned) or base, depending on stream"],
              ["When you're nominated", "After running the business ≥1 year on a work permit", "After invitation and a nomination application"],
              ["Route to PR", "Separate paper application to IRCC", "Express Entry (enhanced) or paper (base)"],
            ]}
            caption="Nova Scotia Entrepreneur stream vs the NSNP worker streams (novascotia.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match a real Nova
            Scotia market need; mistaking a passive investment for the required active, at-risk equity; underestimating the
            commitment of running the business in person for a full year on a work permit; and relying on outdated thresholds.
            Because the figures and eligible-business lists change, a plan built on last year&apos;s numbers can quietly fall
            short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent, standard RCIC practice. We are not affiliated with, nor endorsed by,
            the Province of Nova Scotia or IRCC, and we never guarantee a nomination or permanent residence. We give honest
            assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain helps with your Nova Scotia business move</h2>
          <p>
            Our team is led by a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC
            #R706497); we assess whether the <strong>NSNP Entrepreneur</strong> stream genuinely fits your capital,
            experience and goals, help you shape a credible business for the right Nova Scotia community, and prepare an
            application, net-worth worksheet, source-of-funds trail and business proposal, that stands up to provincial
            scrutiny. If a different route fits better, including the{" "}
            <a href="/pnp/nova-scotia/international-graduate-entrepreneur">International Graduate Entrepreneur</a> stream for
            Nova Scotia graduates or another <a href="/pnp/nova-scotia">NSNP stream</a>, we will tell you honestly. We work
            entirely online.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Nova Scotia Entrepreneur stream materials an expert check before you submit. Thresholds here are current to
            2026 and change over time, so we always confirm the live novascotia.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in Nova Scotia?"
        sub="Get started with a licensed RCIC for an honest read on whether the Nova Scotia Entrepreneur stream fits your capital, experience and plans."
      />
    </>
  );
}
