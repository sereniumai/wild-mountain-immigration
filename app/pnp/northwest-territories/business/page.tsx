import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/northwest-territories/business";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Northwest Territories Business Stream (NTNP)",
  titleAbsolute: "NTNP Business Stream: NWT Immigration 2026",
  description:
    "Northwest Territories Business Stream: net worth, investment and deposit criteria for entrepreneurs starting or buying an NWT business for PR. RCIC-led.",
  path: PATH,
  keywords: [
    "Northwest Territories Business Stream",
    "NTNP business",
    "start a business NWT PR",
    "NWT business immigration",
    "NTNP entrepreneur",
  ],
});

const faqs = [
  {
    q: "What is the Northwest Territories Business Stream?",
    a: "The Northwest Territories Business Stream is the entrepreneur pathway of the NTNP, for people who will establish, buy into or invest in a Northwest Territories business and actively run it day to day. Unlike the territory's employer-driven streams, it does not need a job offer, you earn permanent residence by building or operating a genuine NWT business that benefits the local economy. Thresholds change, so confirm the current criteria on immigratenwt.ca before relying on any figure.",
  },
  {
    q: "How much money do I need for the NTNP Business Stream?",
    a: "As current criteria to confirm on immigratenwt.ca, the published thresholds differ by location. For a business in Yellowknife you generally need about $500,000 in net worth and a $200,000 minimum investment; outside the capital the figures are roughly $250,000 net worth and $100,000 investment. A refundable good-faith deposit is also typically required and returned once you meet your business commitments. Because the NWT adjusts these figures, treat them as a guide and verify the official amounts before committing funds.",
  },
  {
    q: "Do I need a job offer for the Business Stream?",
    a: "No. The Business Stream is the NTNP route that does not require an NWT job offer. Instead of being sponsored by an employer, you are assessed on your net worth, business investment, business or management experience and a viable business plan. You typically come to the Northwest Territories on a temporary work permit to establish or take over the business, and a nomination follows only after you have actually set it up and met your performance commitments.",
  },
  {
    q: "Is the Business Stream first-come, first-served or EOI-ranked?",
    a: "The Business Stream is processed first-come, first-served, not through the points-ranked Expression of Interest (EOI) draws that the NTNP introduced for its employer-driven streams in 2026. The Francophone Stream is also first-come, first-served. That said, the NWT's 2026 allocation is only about 197 nominations across all streams, so spaces are limited and early, well-prepared files have the advantage. Confirm the current intake position on immigratenwt.ca.",
  },
  {
    q: "Can I buy an existing business in the Northwest Territories?",
    a: "Yes. The Business Stream lets you either start a new NWT business or buy and actively manage an existing one, provided you meet the ownership, investment and active-management requirements and the business is a genuine, ongoing operation. Passive investments and certain business types are typically excluded, and you generally need a qualifying ownership share with hands-on, day-to-day involvement. Confirm the current list of eligible and ineligible business types on immigratenwt.ca before you sign any purchase agreement.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. An NTNP nomination is a territorial endorsement, not permanent residence. After nomination you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible business case and flag risks before they become refusals. The Business Stream is a base nomination, so there is no Express Entry CRS boost; you apply to IRCC on paper.",
  },
  {
    q: "How long does the NTNP Business Stream take?",
    a: "The NWT does not publish a single guaranteed timeline, and your path depends on how quickly you finalise your business plan, obtain a work permit, establish or buy the business and meet your commitments before nomination. It is a multi-stage, multi-year journey: application and business plan, a work permit to set up the business, then nomination and a separate IRCC permanent-residence application that, as a base nomination, generally takes longer than the Express Entry route. Verify current processing information on immigratenwt.ca and canada.ca.",
  },
];

export default function NorthwestTerritoriesBusinessStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Northwest Territories Business Stream (NTNP), 2026 RCIC Guide",
            description:
              "Northwest Territories Business Stream: net worth, investment and deposit criteria for entrepreneurs starting or buying an NWT business for PR. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "NTNP Business Stream application support",
            description:
              "Northwest Territories Business Stream: net worth, investment and deposit criteria for entrepreneurs starting or buying an NWT business for PR. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NTNP, Business Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Northwest Territories", path: "/pnp/northwest-territories" },
          { name: "Business", path: PATH },
        ]}
        title={<>Northwest Territories Business Stream <span className="text-brand">(NTNP)</span></>}
        lede={
          <p>
            <strong>The Northwest Territories Business Stream is for entrepreneurs starting or buying an NWT business.</strong>{" "}
            You earn permanent residence by establishing and actively running a genuine territorial business, no job offer
            needed. This RCIC-led guide covers the net worth, investment and deposit criteria, the process and how it differs
            from the NTNP&apos;s employer-driven streams.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the Business Stream right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With only ~197 NTNP nominations for 2026 and detailed financial tests, strategy matters. Get an honest read
                from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "NTNP overview", href: "/pnp/northwest-territories", note: "Every NWT stream explained" },
                { label: "Employer-Driven Skilled Worker", href: "/pnp/northwest-territories/employer-driven-skilled-worker", note: "The NWT's main worker route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Northwest Territories Business Stream is the NTNP's entrepreneur route, for people who establish, buy or invest in an NWT business and actively run it. There is no job offer. Candidates are assessed on net worth, investment, business experience and a business plan, and the stream is first-come, first-served rather than using the points-ranked EOI draws. It is a base nomination with no CRS boost, leading to a separate paper application to IRCC for permanent residence."
            items={[
              <>The <strong>Northwest Territories Business Stream</strong> is the NTNP entrepreneur route, you earn PR by establishing, buying or investing in an NWT business and actively running it.</>,
              <>There is <strong>no job offer</strong>: you are assessed on <strong>net worth, investment, business experience and a business plan</strong>, not an employer EOI.</>,
              <>Published criteria (confirm on immigratenwt.ca): about <strong>$500,000 net worth / $200,000 investment</strong> in Yellowknife, or <strong>$250,000 / $100,000</strong> outside the capital, plus a refundable deposit.</>,
              <>The Business Stream is <strong>first-come, first-served</strong>, not run through the 2026 points-ranked EOI draws used for the employer-driven streams.</>,
              <>It is a <strong>base</strong> nomination (no +600 CRS boost): you apply to IRCC on paper after establishing the business and being nominated. Nomination is not PR.</>,
            ]}
          />

          <h2>What is the Northwest Territories Business Stream?</h2>
          <p>
            The <strong>Northwest Territories Business Stream</strong> is the entrepreneur pathway of the Northwest
            Territories Nominee Program (NTNP), for people who will <strong>start a business in the NWT, or buy into an
            existing one, and actively manage it</strong> day to day. It is the one NTNP route that does not need a job
            offer: you become a permanent resident by establishing and running a genuine territorial business that creates
            local economic benefit. The NTNP works within a 2026 territorial allocation of just{" "}
            <strong>about 197 nominations</strong> across all of its worker and business streams, one of the smallest in
            Canada (source: immigratenwt.ca / IRCC, May 2026). With so few spaces, a well-prepared business file matters.
          </p>
          <Callout type="brand" title="This is a business stream, not an employer-driven stream">
            <strong>NTNP business</strong> applicants are owner-operators. You typically come to the Northwest Territories on
            a temporary work permit to set up or take over the business, and a nomination follows only after you have
            actually established it and met your commitments. This is a staged, multi-year pathway, not a single application.
          </Callout>

          <h2>Who is the Business Stream for?</h2>
          <p>
            This stream fits the working <strong>Northwest Territories entrepreneur</strong> who wants to{" "}
            <em>build and run</em> a business and put down roots in the territory, whether in Yellowknife or a smaller
            northern community that needs new investment, jobs and services. It suits self-employed founders and start-up
            owners as much as people buying an established operation. You should have real business-ownership or
            senior-management experience, capital you can invest and verify, and a concrete idea for a venture the
            territory actually needs: a trade or service business, a shop, restaurant or tourism operation, a
            resource-related or transport business, or buying and growing an existing local business whose owner is
            retiring. It is not for passive investors looking to park money, and certain business types are excluded.
            Confirm the current eligible and ineligible categories on immigratenwt.ca.
          </p>
          <Callout type="info" title="Why location matters">
            The published financial thresholds are tiered: a business inside Yellowknife carries higher net-worth and
            investment minimums than one outside the capital, to encourage investment in smaller communities. Choosing where
            to build, and showing a genuine, viable plan for that community, is central to a strong <strong>start a
            business NWT PR</strong> file.
          </Callout>

          <h2>What are the Business Stream requirements for 2026?</h2>
          <p>
            The <strong>Business Stream requirements</strong> centre on a connected set of criteria: minimum net worth,
            minimum investment, a refundable good-faith deposit, business or management experience, and a viable business
            plan. The thresholds below reflect current criteria you should confirm on immigratenwt.ca, the NWT adjusts these
            figures periodically, and the official program guide is the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on immigratenwt.ca)"]}
            rows={[
              ["Minimum net worth", "About $500,000 for a Yellowknife business, or about $250,000 outside the capital, legally obtained and independently verifiable"],
              ["Minimum investment", "About $200,000 (Yellowknife) or $100,000 (outside Yellowknife) of active equity in the business"],
              ["Good-faith deposit", "A refundable deposit, returned once you establish the business and meet your performance commitments"],
              ["Business ownership", "A qualifying ownership share with active, day-to-day management of the business"],
              ["Business experience", "Relevant business-ownership or senior-management experience appropriate to your proposed venture"],
              ["Business plan", "A viable plan showing local economic benefit (e.g. jobs created) and how the business fits the NWT market"],
              ["Selection basis", "First-come, first-served, not the points-ranked EOI draws used for the employer-driven streams"],
            ]}
            caption="NTNP Business Stream key requirements, current criteria to confirm on immigratenwt.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment and deposit amounts change, and eligible business types are updated over time. Nothing on
            this page is a guarantee of eligibility or of a nomination. Always confirm the current, official criteria on
            immigratenwt.ca before you make decisions or move money.
          </Callout>

          <h2>What net worth, investment and deposit do I need?</h2>
          <p>
            Three financial tests sit at the heart of the stream. Your <strong>net worth</strong> shows you can support
            yourself and absorb business risk; your <strong>investment</strong> is the active capital you put into the
            venture itself; and a refundable <strong>deposit</strong> demonstrates good faith and is returned once you meet
            your commitments. As current criteria to confirm on immigratenwt.ca, the published thresholds land around the
            levels below, with lower minimums outside Yellowknife to encourage investment in smaller communities.
          </p>
          <DataTable
            headers={["Factor", "Yellowknife", "Outside Yellowknife"]}
            rows={[
              ["Personal net worth", "~$500,000", "~$250,000"],
              ["Business investment", "~$200,000", "~$100,000"],
              ["Good-faith deposit", "Refundable, returned on meeting commitments", "Refundable, returned on meeting commitments"],
              ["Ownership", "Qualifying share + active management", "Qualifying share + active management"],
            ]}
            caption="Indicative NTNP Business Stream financial thresholds by location, current criteria to confirm on immigratenwt.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. The territory expects a clear, legitimate source-of-funds trail for both your net
            worth and your investment capital, and weak or unexplained financials are a common reason business files stall.
            Your investment must be genuine, at-risk equity in an operating NWT business, not a passive arrangement or a
            loan-only stake.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Business Stream follows a staged sequence: you prepare a business plan and apply, come to the Northwest
            Territories on a work permit to <strong>establish or buy the business</strong>, and are only nominated once you
            have actually set it up and met your commitments. Because it is first-come, first-served, there are no ranked EOI
            draws, but spaces are limited, so timing and a complete file matter.
          </p>
          <Steps
            steps={[
              { title: "Assess eligibility & plan", desc: "Confirm you meet the net-worth, investment, deposit and experience criteria for your chosen location, and develop a viable NWT business plan." },
              { title: "Submit your application", desc: "File your Business Stream application with your business plan, verified net-worth worksheet, source-of-funds evidence and proposed investment, on a first-come, first-served basis." },
              { title: "Business performance agreement & deposit", desc: "On a positive assessment, enter the territory's business agreement, place the refundable good-faith deposit and confirm your commitments." },
              { title: "Work permit & establish the business", desc: "Obtain a work permit, move to the NWT and actually start or buy and run the business, meeting the investment, job-creation and active-management commitments." },
              { title: "Nomination & deposit return", desc: "Once you have met your commitments, the NWT nominates you and returns the refundable deposit." },
              { title: "IRCC permanent residence", desc: "As a base nomination, you submit a separate paper application to IRCC, which makes the final PR decision on medical, security and admissibility grounds." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike a job-offer route, you are not nominated up front. The work-permit stage exists so you can prove the
            business is real and meeting its targets before the territory endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the employer-driven streams?</h2>
          <p>
            The clearest way to understand the Business Stream is to contrast it with the NTNP&apos;s{" "}
            <a href="/pnp/northwest-territories/employer-driven-skilled-worker">employer-driven streams</a>. Those need an
            NWT job offer and are now ranked through points-based Expression of Interest (EOI) draws introduced in 2026. The
            Business Stream needs <strong>no job offer</strong>: you are assessed on capital, experience and a business plan,
            it is first-come, first-served, and PR follows only after you build the business yourself.
          </p>
          <DataTable
            headers={["Feature", "Business Stream", "Employer-driven streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, deposit, experience, business plan", "Job offer + ranked EOI score"],
              ["Job offer", "Not required, you create the business", "Required (full-time NWT offer; employer initiates)"],
              ["Intake model", "First-come, first-served", "Points-ranked EOI draws (new in 2026)"],
              ["When you're nominated", "After establishing the business on a work permit", "After an EOI invitation and nomination application"],
              ["Nomination type", "Base (paper PR application to IRCC)", "Base, except NWT Express Entry (enhanced, +600 CRS)"],
            ]}
            caption="NTNP Business Stream vs the employer-driven streams (immigratenwt.ca, May 2026). Confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps in <strong>NWT business immigration</strong> are an unverifiable or thinly documented source of funds; a
            business plan that does not match the territory&apos;s real market needs; mistaking a passive investment for the
            required active, at-risk equity; underestimating the deposit and performance commitments; and relying on outdated
            thresholds. Because the figures and eligible-business lists change, a plan built on last year&apos;s numbers can
            quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of the Northwest Territories or IRCC, and we never guarantee a nomination or permanent residence. We
            give honest assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your NWT business move</h2>
          <p>
            Working under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497),
            our team assesses whether the <strong>NTNP business</strong> route genuinely fits your capital, experience
            and goals, helps you match a credible business to the right NWT location, and prepares an application,
            net-worth worksheet, source-of-funds trail and business plan, that stands up to territorial scrutiny. If a
            worker route fits better, such as the{" "}
            <a href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a> or{" "}
            <a href="/pnp/northwest-territories/express-entry">NWT Express Entry</a> stream within the wider{" "}
            <a href="/pnp/northwest-territories">Northwest Territories Nominee Program</a>, or a programme in another
            province like the <a href="/alberta-immigration">Alberta Advantage Immigration Program</a>, we will tell you
            honestly. Want to see where your federal <a href="/express-entry">Express Entry</a> score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a>.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own{" "}
            <strong>Northwest Territories Business Stream</strong> materials an expert check before you submit, and you
            can <a href="/contact">contact our team</a> first. Thresholds and eligible-business lists for this
            business immigration route are current to 2026 and change over time, so we always confirm the live
            immigratenwt.ca program guide before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in the Northwest Territories?"
        sub="Get started with a licensed RCIC for an honest read on whether the NTNP Business Stream fits your capital, experience and plans."
      />
    </>
  );
}
