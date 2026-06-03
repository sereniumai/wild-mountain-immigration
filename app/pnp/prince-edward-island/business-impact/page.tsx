import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/prince-edward-island/business-impact";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "PEI Business Impact Category, 2026 Guide",
  titleAbsolute: "PEI PNP Business Impact Category: 2026 Guide",
  description:
    "PEI Business Impact Category (Work Permit Entrepreneur): start a PEI business, run it on a work permit, then earn PR. Net worth, EOI and process. RCIC-led.",
  path: PATH,
  keywords: [
    "PEI Business Impact Category",
    "PEI Work Permit Entrepreneur",
    "start a business PEI PR",
    "PEI business immigration",
    "PEI Expression of Interest",
  ],
});

const faqs = [
  {
    q: "What is the PEI Business Impact Category?",
    a: "The PEI Business Impact Category is the entrepreneur route within the Prince Edward Island Provincial Nominee Program. Its main pathway is the Work Permit Entrepreneur stream: you move to PEI on a temporary work permit, establish or buy and actively run an eligible Prince Edward Island business, and then, once you have met your business commitments, the province nominates you for permanent residence. Unlike the Labour Impact streams, there is no job offer because you are creating the business yourself. Because criteria change, always confirm the current requirements on princeedwardisland.ca before relying on any figure.",
  },
  {
    q: "Is the PEI Business Impact Category an investor or entrepreneur visa?",
    a: "It is an entrepreneur route, not a passive investor scheme, though people search for it as a PEI entrepreneur visa or PEI investor immigration option. There is no Canadian immigrant investor visa where you simply place capital and wait. The Work Permit Entrepreneur stream requires you to actively own and manage a real Prince Edward Island business. Your money must go in as genuine, at-risk equity, and you must run the venture day to day, so think of it as entrepreneur immigration with an investment requirement rather than investor immigration in the hands-off sense.",
  },
  {
    q: "How much money do I need for the PEI Work Permit Entrepreneur stream?",
    a: "As current criteria to confirm on princeedwardisland.ca, applicants generally need a minimum personal net worth in the region of $600,000, legally obtained and verifiable, plus a minimum direct investment into an eligible PEI business (often framed around $150,000). PEI also typically requires a refundable escrow or good-faith deposit that is returned as you meet your business and residency commitments. Treat every number here as a guide. PEI adjusts these thresholds, and the official program page is the controlling source.",
  },
  {
    q: "Do I need to visit PEI before applying for the Business Impact Category?",
    a: "In most cases, yes. The Work Permit Entrepreneur stream is built around a genuine intention to live in Prince Edward Island and run a real business there, and a business exploratory visit is typically expected as part of demonstrating that intention. The visit lets you research the local market, meet suppliers or a business you might buy, and show that your plan fits real PEI needs. Requirements change, so confirm current expectations on princeedwardisland.ca before you travel.",
  },
  {
    q: "Does the Business Impact Category require a job offer?",
    a: "No. The Business Impact Category is distinct from PEI's Labour Impact streams precisely because it does not require a Prince Edward Island job offer. Instead of being sponsored by an employer, you become your own, establishing or buying an eligible PEI business, investing your own capital, and actively managing day-to-day operations. That is also why the provincial application fee is far higher than the worker streams and why a credible, well-documented business plan matters so much.",
  },
  {
    q: "Is the PEI Business Impact Category open right now?",
    a: "Intake for the Work Permit Entrepreneur stream can be limited and may open and close in windows, and PEI's overall nomination allocation is small. Following federal cuts to provincial allocations, PEI's 2025 base allocation was roughly 1,025 (with a possible top-up), and 2026 numbers remain tight, so business spaces are restricted. Confirm whether the stream is currently accepting Expressions of Interest on princeedwardisland.ca before you plan around it.",
  },
  {
    q: "Does a PEI nomination guarantee permanent residence?",
    a: "No. A PEI Business Impact nomination is a provincial endorsement, not permanent residence. After PEI nominates you, you submit a separate permanent-residence application to IRCC, which makes the final decision on medical, security and admissibility grounds. The Business Impact route is a base (paper) nomination, so it does not add CRS points and is generally processed through a slower IRCC application than an enhanced Express Entry nomination. Neither the province nor IRCC guarantees the final result, and we are not affiliated with any government.",
  },
  {
    q: "How long does the PEI Business Impact Category take?",
    a: "It is a multi-stage, multi-year journey rather than a single application. You submit an Expression of Interest, wait for a possible invitation, sign a performance agreement and obtain a work permit, then run your PEI business for a qualifying period, typically at least about a year, before nomination. A separate IRCC permanent-residence application follows. Timelines depend on intake, your business and processing, so verify current information on princeedwardisland.ca and canada.ca.",
  },
];

export default function PeiBusinessImpactPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "PEI Business Impact Category (Work Permit Entrepreneur), 2026 Guide",
            description:
              "PEI Business Impact Category (Work Permit Entrepreneur): start a PEI business, run it on a work permit, then earn PR. Net worth, EOI and process. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "PEI Business Impact Category application support",
            description:
              "PEI Business Impact Category (Work Permit Entrepreneur): start a PEI business, run it on a work permit, then earn PR. Net worth, EOI and process. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="PEI PNP, Business Impact Category"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Prince Edward Island", path: "/pnp/prince-edward-island" },
          { name: "Business Impact", path: PATH },
        ]}
        title={<>PEI Business Impact Category: <span className="text-brand">the Work Permit Entrepreneur route</span></>}
        lede={
          <p>
            <strong>The PEI Business Impact Category lets entrepreneurs earn PR by running a PEI business.</strong>{" "}
            You move to PEI on a work permit, establish or buy and actively manage an eligible business, then, once you have
            met your commitments, the province nominates you for permanent residence. No job offer required.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Thinking of starting a PEI business?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Intake is limited and the fee is high. Get an honest read on whether the Work Permit Entrepreneur stream fits before you commit.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Prince Edward Island PNP", href: "/pnp/prince-edward-island", note: "How the full PEI PNP works" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province's PNP" },
                { label: "PEI Labour Impact streams", href: "/pnp/prince-edward-island/labour-impact", note: "The worker, job-offer routes" },
                { label: "PEI Express Entry", href: "/pnp/prince-edward-island/express-entry", note: "The enhanced +600 CRS route" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other PEI employer route" },
                { label: "Get started with an RCIC", href: "/contact", note: "Honest read on your business case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The PEI Business Impact Category is the entrepreneur route of the Prince Edward Island PNP, led by the Work Permit Entrepreneur stream. It is for people who establish or buy and actively run an eligible PEI business rather than holding a job offer. After moving on a work permit and running the business, you earn a base nomination that supports a separate application to IRCC for permanent residence."
            items={[
              <>The <strong>PEI Business Impact Category</strong> is the entrepreneur route of the PEI PNP. Its main pathway is the <strong>Work Permit Entrepreneur</strong> stream.</>,
              <>There is <strong>no job offer</strong>: you establish or buy and <strong>actively run an eligible PEI business</strong>, then earn nomination once you meet your commitments.</>,
              <>Typical current criteria (confirm on princeedwardisland.ca): roughly <strong>$600,000 minimum net worth</strong>, a direct business investment, and a <strong>refundable escrow deposit</strong>.</>,
              <>It runs on an <strong>Expression of Interest (EOI)</strong> system, and <strong>intake can be limited</strong>. Meeting the criteria does not guarantee an invitation.</>,
              <>The path is two-step: <strong>EOI → invitation → work permit → run the business ≥1 year → nomination → PR</strong>; nomination is a base (paper) nomination, not PR itself.</>,
            ]}
          />

          <h2>What is the PEI Business Impact Category?</h2>
          <p>
            The <strong>PEI Business Impact Category</strong> is the entrepreneur arm of the Prince Edward Island Provincial
            Nominee Program, alongside the worker-focused Labour Impact streams and the enhanced Express Entry route. It is the
            province&apos;s main <strong>PEI entrepreneur immigration</strong> and business immigration route, the way people
            move to the island to build or take over a company rather than to fill a job.</p>
          <p>Its
            principal pathway is the <strong>Work Permit Entrepreneur</strong> stream: rather than arriving as a permanent
            resident up front, you first move to PEI on a temporary work permit, <strong>establish or buy and actively run an
            eligible Prince Edward Island business</strong>, and only then, once you have met your business and residency
            commitments, does the province nominate you for permanent residence.</p>
          <p>According to princeedwardisland.ca, the PEI
            PNP organises its routes into three categories: Labour Impact, Express Entry and Business Impact. The
            province&apos;s 2025 base nomination allocation was roughly <strong>1,025</strong> (with a possible top-up), and
            2026 numbers remain tight after IRCC reduced provincial allocations nationwide (source: princeedwardisland.ca /
            IRCC, 2026).
          </p>
          <Callout type="brand" title="This is a two-step, business-first route">
            Unlike the Labour Impact streams, the Work Permit Entrepreneur route has no job-offer requirement because you are
            creating the business yourself. You come to PEI on a work permit to build the venture, and nomination follows only
            after you have actually run it and met your targets. It is a staged, multi-year pathway, not a single application.
          </Callout>

          <h2>Who is the Work Permit Entrepreneur stream for?</h2>
          <p>
            This stream fits people who genuinely want to <em>own and operate</em> a business and settle on the island, not
            passive investors looking to park money. Whether you are <strong>starting a business in PEI</strong> from scratch or{" "}
            <strong>buying a business in PEI</strong> from a retiring owner, the test is the same: real, hands-on entrepreneurship.
            You should have real business-ownership or senior-management experience,
            capital you can invest and verify, and a concrete idea for a venture Prince Edward Island actually needs: a trade
            or service business, a shop, café or restaurant, a tourism operation, a small manufacturer, or buying and growing
            an existing PEI business whose owner is retiring.</p>
          <p>Certain business types are typically excluded, and you must take
            an active, hands-on management role. Confirm the current eligible and ineligible categories on
            princeedwardisland.ca.
          </p>
          <Callout type="info" title="Active ownership is the heart of the stream">
            The Business Impact Category rewards genuine, day-to-day entrepreneurship. A passive stake, a silent investment or
            a business run entirely by others will not meet the active-management test that underpins both the work permit and
            the eventual nomination.
          </Callout>

          <h2>What are the Business Impact Category requirements for 2026?</h2>
          <p>
            The <strong>PEI business immigration requirements</strong> for this category centre on a connected set of criteria:
            minimum net worth, a <strong>minimum investment</strong> in an eligible PEI business, relevant business experience,
            an exploratory visit, and a refundable escrow deposit tied to a performance agreement. The thresholds below reflect
            current criteria you should confirm on princeedwardisland.ca, PEI adjusts these figures periodically, and the
            official page is the controlling source.
          </p>
          <DataTable
            headers={["Requirement", "Current criteria (confirm on princeedwardisland.ca)"]}
            rows={[
              ["Minimum net worth", "Personal net worth in the region of $600,000, legally obtained and independently verifiable"],
              ["Minimum investment", "A direct, active minimum investment into an eligible PEI business (commonly framed around $150,000)"],
              ["Business experience", "Recent business ownership or senior-management experience appropriate to the venture you propose"],
              ["Active ownership", "A qualifying ownership share with hands-on, day-to-day management of the PEI business"],
              ["Exploratory visit", "A business exploratory visit to Prince Edward Island showing genuine intent to settle and operate there"],
              ["Escrow deposit", "A refundable good-faith / escrow deposit, returned as you meet your business and residency commitments"],
              ["Business plan", "A viable, PEI-appropriate business plan showing local economic benefit and a realistic operating model"],
            ]}
            caption="PEI Business Impact Category (Work Permit Entrepreneur) key requirements, current criteria to confirm on princeedwardisland.ca (May 2026). Thresholds change; verify the official figures before committing funds."
          />
          <Callout type="warning" title="Treat every figure as a moving target">
            Net-worth, investment, deposit and fee amounts change, and the eligible business types and intake status are
            updated over time. Nothing on this page is a guarantee of eligibility or of an invitation, always confirm the
            current, official criteria on princeedwardisland.ca before you make decisions or move money.
          </Callout>

          <h2>What net worth, investment and deposit do I need?</h2>
          <p>
            Three financial elements sit at the heart of the stream. Your <strong>minimum net worth</strong> shows you can
            support yourself and absorb business risk; your <strong>direct investment</strong> is the active capital you put
            into the venture itself; and the <strong>escrow deposit</strong> is a refundable good-faith commitment tied to
            actually establishing and running the business. As current criteria to confirm on princeedwardisland.ca, these
            generally land around the levels below.
          </p>
          <DataTable
            headers={["Element", "Typical current figure", "What it must show"]}
            rows={[
              ["Personal net worth", "~$600,000", "Legally obtained, fully documented and verifiable by a third party"],
              ["Direct business investment", "Often framed around $150,000", "Active equity in an eligible PEI business, not a loan, deposit or passive stake"],
              ["Escrow / good-faith deposit", "A refundable deposit", "Commitment to establish and run the business; returned as commitments are met"],
            ]}
            caption="Indicative PEI Business Impact Category financial elements, current criteria to confirm on princeedwardisland.ca (May 2026). Figures change; verify before relying on them."
          />
          <p>
            Document everything early. The province expects a clear, legitimate source-of-funds trail for both your net worth
            and your investment capital, and weak or unexplained financials are a common reason business files stall. Your
            investment must be genuine, at-risk equity in an operating Prince Edward Island business, not a passive
            arrangement, and the escrow deposit is refundable, returned as you hit the milestones in your performance
            agreement rather than being a fee you lose.
          </p>

          <h2>How does the process work, step by step?</h2>
          <p>
            The Work Permit Entrepreneur route follows a staged sequence: you signal interest through an Expression of
            Interest, are invited, sign a performance agreement and come to PEI on a work permit to <strong>establish the
            business</strong>, and are only nominated once you have actually run it and met your commitments. The steps below
            show the path from first interest to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Submit an Expression of Interest (EOI)", desc: "Confirm you meet the net-worth, investment and experience criteria, then submit an EOI to the PEI Office of Immigration outlining the business you intend to start or buy." },
              { title: "Receive an invitation to apply", desc: "If selected in an intake, PEI invites you to apply. Meeting the criteria places you in contention, it does not guarantee an invitation, and intake can be limited." },
              { title: "Apply, visit & sign a performance agreement", desc: "Complete a business exploratory visit, submit your business plan and source-of-funds evidence, and, on approval, sign a performance agreement and place your refundable escrow deposit." },
              { title: "Get a work permit & move to PEI", desc: "Obtain a temporary work permit, relocate to Prince Edward Island, and establish or buy your eligible business, investing your capital and taking active, day-to-day control." },
              { title: "Run the business (≥ about one year)", desc: "Actively operate the business for the required qualifying period, typically at least about a year, meeting the investment, residency and management commitments in your agreement." },
              { title: "Nomination & IRCC permanent residence", desc: "Once you have met your commitments, PEI nominates you (a base, paper nomination). You then file a separate IRCC permanent-residence application; IRCC makes the final decision." },
            ]}
          />
          <Callout type="info" title="Nomination comes after you build the business">
            Unlike an enhanced Express Entry nomination, the Business Impact route does not add CRS points and is processed
            through a separate, generally slower IRCC paper application. The work-permit stage exists so you can prove the
            business is real and meeting its targets before the province endorses you for permanent residence.
          </Callout>

          <h2>How does it differ from the PEI Labour Impact streams?</h2>
          <p>
            The clearest way to understand the Business Impact Category is to contrast it with the{" "}
            <a href="/pnp/prince-edward-island/labour-impact">PEI Labour Impact streams</a>. The Labour Impact routes are
            employer-driven: they need a Prince Edward Island job offer and assess you as a worker. The Business Impact route
            needs <strong>no job offer</strong>, you are assessed on capital, experience and a business plan, and PR follows
            only after you build and run the business yourself.
          </p>
          <DataTable
            headers={["Feature", "Business Impact (Work Permit Entrepreneur)", "Labour Impact streams"]}
            rows={[
              ["Basis of selection", "Net worth, investment, experience, business plan", "PEI job offer + worker eligibility"],
              ["Job offer", "Not required, you create the business", "Required (PEI employer offer)"],
              ["When you're nominated", "After establishing & running the business on a work permit", "After EOI selection and a complete application"],
              ["Provincial fee", "Much higher (roughly $10,000), reflecting its commercial nature", "Around $300 for Labour Impact / International Graduate"],
              ["Nomination type", "Base (paper), no CRS boost", "Base (paper), no CRS boost"],
            ]}
            caption="PEI Business Impact Category vs the Labour Impact streams (princeedwardisland.ca, 2026). Fees and criteria change; confirm current details before relying on them."
          />

          <h2>What are the most common pitfalls?</h2>
          <p>
            Business immigration files fail on avoidable issues far more often than on the business idea itself. The biggest
            traps are an unverifiable or thinly documented source of funds; a business plan that does not match real PEI
            market needs; mistaking a passive investment for the required active, hands-on ownership; planning around the
            stream when intake is actually closed or limited; and relying on outdated thresholds. Because the figures, fees
            and intake status change, a plan built on last year&apos;s numbers can quietly fall short.
          </p>
          <Callout type="warning" title="No guarantees, and no government affiliation">
            Wild Mountain Immigration is an independent RCIC practice. We are not affiliated with, nor endorsed by, the
            Government of Prince Edward Island or IRCC, and we never guarantee a nomination or permanent residence. We give
            honest assessments and build the strongest possible case within the official rules.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your PEI business move</h2>
          <p>
            Working under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497),
            our team assesses whether the Work Permit Entrepreneur stream genuinely fits your capital, experience and
            goals, confirms whether intake is open before you invest time and the substantial fee, and helps you shape a
            credible business concept for the right PEI market.</p>
          <p>We prepare an Expression of Interest and application,
            net-worth worksheet, source-of-funds trail and business plan, that stands up to provincial scrutiny, and we
            represent you through the performance agreement, nomination and the separate IRCC permanent-residence stage.
            If a <a href="/pnp/prince-edward-island/labour-impact">Labour Impact</a> route, the enhanced{" "}
            <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a> stream or the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> fits better, we will tell you
            honestly.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Business Impact materials an expert check before you submit. Thresholds, fees and intake status
            here are current to 2026 and change over time, so we always confirm the live princeedwardisland.ca page before
            advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of building a business in Prince Edward Island?"
        sub="Get started with a licensed RCIC for an honest read on whether the PEI Work Permit Entrepreneur stream fits your capital, experience and plans, before you commit to the fee."
      />
    </>
  );
}
