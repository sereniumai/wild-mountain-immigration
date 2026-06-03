import type { Metadata } from "next";
import { Calculator, Globe, GraduationCap, Store, Tractor, Briefcase, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/foreign-graduate-entrepreneur-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Foreign Graduate Entrepreneur Stream",
  titleAbsolute: "Foreign Graduate Entrepreneur Stream 2026: Alberta",
  description:
    "Alberta Foreign Graduate Entrepreneur Stream: who qualifies, the agency endorsement, investment and language criteria, and how to apply. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "alberta foreign graduate entrepreneur stream",
    "aaip foreign graduate entrepreneur",
    "foreign graduate start business alberta",
    "alberta entrepreneur immigration foreign graduate",
    "aaip business stream alberta",
  ],
});

const faqs = [
  {
    q: "Who qualifies for the Alberta Foreign Graduate Entrepreneur Stream?",
    a: "The stream is built for recent graduates of approved post-secondary institutions located outside Canada who want to start or buy and actively run an innovative business in Alberta. You generally need a recent eligible foreign credential, the backing of a designated Alberta agency or incubator, qualifying language results, and the ability to make and manage the required investment. It is not for graduates of Canadian schools; they look at the Alberta Graduate Entrepreneur Stream instead. Confirm the full criteria on alberta.ca before relying on any one requirement.",
  },
  {
    q: "How is this different from the Alberta Graduate Entrepreneur Stream?",
    a: "The dividing line is where you studied. The Foreign Graduate Entrepreneur Stream is for graduates of institutions outside Canada and runs through endorsement by a designated Alberta agency or incubator. The Alberta Graduate Entrepreneur Stream is for graduates of approved Alberta or Canadian institutions, typically those holding a Post-Graduation Work Permit. The two are separate AAIP business pathways with different entry points, so the first question is always which graduate group you belong to.",
  },
  {
    q: "Do I need an endorsement to apply?",
    a: "Yes. The Foreign Graduate Entrepreneur Stream is built around support from a designated Alberta agency or business incubator. That agency assesses your business concept, helps validate that it is innovative and viable, and provides the endorsement or letter of support the AAIP relies on. Without that designated-agency backing you cannot move forward in this stream. Because the list of designated agencies and their intake can change, confirm the current partners on alberta.ca before you commit.",
  },
  {
    q: "How much do I need to invest?",
    a: "Alberta sets a minimum personal investment for the business, and the exact figure depends on where in the province your business is located. Thresholds are lower for businesses outside the Calgary and Edmonton metropolitan areas. Because these amounts and the related net-worth expectations are reviewed periodically, we treat any number as a figure to confirm rather than a fixed promise. Always check the current minimum investment on alberta.ca before you plan your capital.",
  },
  {
    q: "Does this stream lead directly to permanent residence?",
    a: "Not in a single step. The AAIP is a provincial nomination program: a successful Foreign Graduate Entrepreneur Stream application leads to a provincial nomination, after which you submit a separate permanent residence application to IRCC, which makes the final decision on medical, security and admissibility grounds. A nomination is a strong endorsement, but it is not permanent residence and it is never guaranteed.",
  },
  {
    q: "Can I apply from outside Canada?",
    a: "The stream is aimed at recent graduates of institutions outside Canada, so applicants are often abroad when they begin. What matters is that you meet the recency, credential, endorsement, language and investment criteria and that you genuinely intend to establish and actively manage the business in Alberta. Your specific status and timing should be mapped out before you apply, because permit and residency details affect how and when you can run the business.",
  },
  {
    q: "What language level do I need?",
    a: "Alberta requires a minimum official-language result for entrepreneur applicants, demonstrated through an approved English or French test, and the level can differ by stream and is reviewed over time. Treat the published minimum as the figure to confirm on alberta.ca, and aim comfortably above it where you can, because language strength also helps you operate the business once you arrive.",
  },
  {
    q: "Does an endorsement or nomination guarantee my business will succeed or that I will get PR?",
    a: "No. A designated-agency endorsement reflects confidence in your business concept, and a provincial nomination reflects Alberta's support, but IRCC makes the final permanent residence decision and your business carries normal commercial risk. Our role is to build the strongest, most honest application and flag risks early, not to promise results no licensed RCIC can deliver.",
  },
];

export default function ForeignGraduateEntrepreneurStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Foreign Graduate Entrepreneur Stream (AAIP Guide)",
            description:
              "Alberta Foreign Graduate Entrepreneur Stream: who qualifies, the agency endorsement, investment and language criteria, and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Alberta Foreign Graduate Entrepreneur Stream application support",
            description:
              "Alberta Foreign Graduate Entrepreneur Stream: who qualifies, the agency endorsement, investment and language criteria, and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta Advantage Immigration Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Foreign Graduate Entrepreneur Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Foreign Graduate Entrepreneur Stream", path: PATH },
        ]}
        title={<>Alberta Foreign Graduate <span className="text-brand">Entrepreneur Stream</span></>}
        lede={
          <p>
            The <strong>Alberta Foreign Graduate Entrepreneur Stream</strong> lets recent graduates of approved
            institutions <em>outside</em> Canada start an innovative business in Alberta and apply for permanent
            residence. This RCIC-reviewed guide covers who qualifies, the designated-agency endorsement, the
            investment and language criteria, and exactly how the process works.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Map your AAIP route</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Not sure if you fit the foreign graduate stream or another AAIP pathway? Start with our free calculator.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Open the AAIP calculator</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Graduate Entrepreneur Stream", href: "/alberta-immigration/graduate-entrepreneur-stream", note: "For graduates of Alberta/Canadian schools" },
                { label: "Rural Entrepreneur Stream", href: "/alberta-immigration/rural-entrepreneur-stream", note: "Start a business in rural Alberta" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Estimate your AAIP standing" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Foreign Graduate Entrepreneur Stream is an AAIP business pathway for recent graduates of approved institutions outside Canada. Through it, a foreign graduate can start, or buy and actively run, an innovative business in Alberta. The route centres on an endorsement from a designated Alberta agency or incubator. The other core criteria are a recent eligible foreign credential, a minimum investment, business ownership, active management and language. A successful application leads to a provincial nomination that supports your permanent residence application."
            items={[
              <>The <strong>Alberta Foreign Graduate Entrepreneur Stream</strong> is an AAIP <strong>business</strong> pathway for recent graduates of approved institutions <strong>outside Canada</strong>.</>,
              <>It lets a foreign graduate <strong>start (or buy and actively run) an innovative business in Alberta</strong> and apply for permanent residence.</>,
              <>The route runs on an <strong>endorsement from a designated Alberta agency or incubator</strong>, that backing is central, not optional.</>,
              <>Core criteria: a <strong>recent eligible foreign credential</strong>, designated-agency support, <strong>minimum investment</strong>, business ownership and active management, and language.</>,
              <>It is the sibling of the <a href="/alberta-immigration/graduate-entrepreneur-stream">Alberta Graduate Entrepreneur Stream</a>; the dividing line is <strong>where you studied</strong>.</>,
            ]}
          />

          <h2>What is the Alberta Foreign Graduate Entrepreneur Stream?</h2>
          <p>
            The <strong>Alberta Foreign Graduate Entrepreneur Stream</strong> is a business pathway under the Alberta
            Advantage Immigration Program (AAIP) that lets recent graduates of approved post-secondary institutions
            <em> located outside Canada</em> establish an innovative business in the province and then apply for
            permanent residence.</p>
          <p>Alberta&apos;s AAIP business streams sit within a tightly managed program: the
            province&apos;s 2026 AAIP allocation is about <strong>6,403 nominations</strong> across all streams (source:
            alberta.ca, AAIP processing information, May 2026), so entrepreneur pathways like this one are deliberately
            selective and concept-driven rather than high-volume. The defining feature of this stream is its route in:
            rather than scoring through the Worker Expression of Interest, a <strong>foreign graduate</strong> works with
            a designated Alberta agency or business incubator that assesses the concept and provides the endorsement the
            AAIP relies on.
          </p>
          <Callout type="brand" title="This is the &ldquo;studied outside Canada&rdquo; entrepreneur stream">
            The <strong>AAIP foreign graduate entrepreneur</strong> route is specifically for graduates of institutions
            outside Canada. If you graduated from an approved Alberta or Canadian school, typically on a Post-Graduation
            Work Permit, the <a href="/alberta-immigration/graduate-entrepreneur-stream">Alberta Graduate Entrepreneur
            Stream</a> is your pathway instead.
          </Callout>

          <h2>Who is eligible for the Foreign Graduate Entrepreneur Stream?</h2>
          <p>
            Eligibility rests on a connected set of requirements, and the foundation is a recent, eligible credential
            from an approved institution outside Canada paired with the support of a designated Alberta agency. For a
            <strong> foreign graduate to start a business in Alberta</strong> through this stream, the agency endorsement
            does a lot of the heavy lifting: it validates that the business concept is innovative and viable before the
            province assesses your application. The table below summarises the core criteria as they currently stand. The official, controlling list lives on alberta.ca and is reviewed periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Eligible foreign credential", "A recent qualifying credential from an approved post-secondary institution located outside Canada"],
              ["Designated-agency endorsement", "Support or endorsement from a designated Alberta agency or business incubator that has assessed your concept"],
              ["Business ownership & management", "Ownership of a qualifying share and a commitment to actively and continuously manage the Alberta business"],
              ["Innovative business concept", "A genuinely innovative, viable business, not a passive investment or a routine, easily-replicated operation"],
              ["Minimum investment", "A minimum personal investment in the business, with a lower threshold outside the Calgary and Edmonton metro areas"],
              ["Language", "An approved English or French test result meeting the published minimum for entrepreneur applicants"],
              ["Intent to settle in Alberta", "A genuine intention to establish, run and remain with the business in Alberta"],
            ]}
            caption="Foreign Graduate Entrepreneur Stream core criteria, framed as current and accurate to May 2026 (alberta.ca). Thresholds and lists change, verify the official criteria before applying."
          />
          <Callout type="info" title="Treat every threshold as a figure to confirm">
            Investment minimums, net-worth expectations, language bands and the list of designated agencies are reviewed
            from time to time. We frame them as current criteria to confirm on alberta.ca rather than fixed promises. Check the live page before you plan your capital or book a language test.
          </Callout>

          <h2>What are the investment and financial requirements?</h2>
          <p>
            Alberta sets a <strong>minimum personal investment</strong> for the business, and the figure depends on
            location: businesses outside the Calgary and Edmonton metropolitan areas generally face a lower threshold
            than those inside them, reflecting the province&apos;s interest in spreading entrepreneurship beyond the two
            big cities. Alongside the investment, expect the province and the designated agency to look closely at your
            sources of funds and the realism of your business plan. The grid below frames the financial picture; the
            exact dollar amounts are the part most likely to change, so confirm them on alberta.ca.
          </p>
          <DataTable
            headers={["Financial factor", "How it works"]}
            rows={[
              ["Minimum investment (metro)", "Higher minimum personal investment for a business in the Calgary or Edmonton metro area, confirm the current figure on alberta.ca"],
              ["Minimum investment (outside metro)", "Lower minimum for a business located outside the two metro areas, to encourage regional growth, confirm the current figure"],
              ["Ownership share", "You must hold a qualifying ownership stake and be actively involved in day-to-day management"],
              ["Net worth requirement", "Alberta expects you to show enough personal net worth to support the investment and your settlement, confirm the current net worth requirement on alberta.ca"],
              ["Source of funds", "Funds must be legally obtained and clearly documented; the agency and province scrutinise this"],
              ["Business plan & viability", "A credible plan showing the business is innovative, viable and will operate in Alberta"],
            ]}
            caption="Indicative financial structure for the Foreign Graduate Entrepreneur Stream (alberta.ca, May 2026). Dollar thresholds change, verify before planning."
          />

          <h2>How does the process work?</h2>
          <p>
            The path runs from credential and concept through designated-agency endorsement to a provincial nomination
            and, finally, a separate federal permanent residence decision. Because the endorsement is central, the early
            steps, choosing the right designated agency and shaping a concept it will back, matter enormously. The
            steps below show the route from confirming eligibility to landing as a permanent resident.
          </p>
          <Steps
            steps={[
              { title: "Confirm eligibility", desc: "Check that you have a recent eligible credential from an approved institution outside Canada and can meet the language, investment and management criteria." },
              { title: "Engage a designated agency", desc: "Approach a designated Alberta agency or incubator, present your business concept, and work through their assessment toward an endorsement." },
              { title: "Build the business case", desc: "Prepare a credible, innovative business plan, document your sources of funds, and take an approved English or French language test." },
              { title: "Apply to the AAIP", desc: "Submit your Foreign Graduate Entrepreneur Stream application to Alberta with the agency endorsement and supporting evidence." },
              { title: "Receive a provincial nomination", desc: "On approval, and typically after establishing or progressing the business as required, Alberta nominates you for permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File a separate federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="warning" title="A nomination is not permanent residence">
            A successful AAIP application leads to a provincial nomination, not permanent residence. You still file a
            separate application with IRCC, which decides on medical, security and admissibility grounds. No licensed
            RCIC can guarantee a nomination or PR, be wary of anyone who does.
          </Callout>

          <h2>How does it differ from the Alberta Graduate Entrepreneur Stream?</h2>
          <p>
            These two AAIP business pathways are easy to confuse, but the dividing line is simple: <strong>where you
            studied</strong>. The Foreign Graduate Entrepreneur Stream is for graduates of approved institutions outside
            Canada and runs through a designated-agency endorsement. The{" "}
            <a href="/alberta-immigration/graduate-entrepreneur-stream">Alberta Graduate Entrepreneur Stream</a> is for
            graduates of approved Alberta or Canadian institutions, typically people holding a Post-Graduation Work
            Permit (PGWP) with meaningful time remaining.</p>
          <p>That PGWP comparison is the quickest way to tell the two streams
            apart. If your business is aimed at a smaller community, the{" "}
            <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a> may be the better fit
            again. The table below sets the two graduate streams side by side.
          </p>
          <DataTable
            headers={["Feature", "Foreign Graduate Entrepreneur", "Graduate Entrepreneur"]}
            rows={[
              ["Where you studied", "Approved institution outside Canada", "Approved Alberta / Canadian institution"],
              ["Typical status", "Often applying from abroad", "Usually on a Post-Graduation Work Permit"],
              ["Route in", "Endorsement by a designated Alberta agency / incubator", "Direct AAIP business application (no overseas-agency endorsement)"],
              ["Stream type", "Base (business)", "Base (business)"],
              ["Goal", "Innovative business in Alberta → nomination → PR", "Innovative business in Alberta → nomination → PR"],
            ]}
            caption="Foreign Graduate vs Alberta Graduate Entrepreneur Stream (alberta.ca, May 2026). Confirm current criteria for both before choosing."
          />

          <h2>What kind of business does Alberta want to see?</h2>
          <p>
            Both the designated agency and the province are looking for a genuinely <strong>innovative</strong> business,
            one that brings something new, scalable or technically distinctive, rather than a passive investment or a
            routine operation that simply duplicates what already exists.</p>
          <p>The endorsement process is, in effect, a
            credibility test: the designated agency stakes its reputation on concepts it believes can succeed in Alberta.
            That is why <strong>Alberta entrepreneur immigration</strong> through this foreign graduate route lives or dies on
            the strength of the concept and the plan behind it, not just on meeting the financial floor. A well-built
            file shows market understanding, a realistic path to revenue, and your own active role in running the
            business.
          </p>

          <h2>Common mistakes to avoid</h2>
          <p>
            The avoidable errors we see most often are choosing the wrong stream (applying as a foreign graduate when you
            actually studied in Canada, or vice versa), underestimating how central the designated-agency endorsement is,
            and treating published thresholds as permanent.</p>
          <p>Investment minimums, language bands and the agency list all
            change, so a plan built on last year&apos;s numbers can unravel. Documenting sources of funds late, or
            presenting a concept that reads as a passive investment rather than an actively managed innovative business,
            are the other classic stumbles. Each is fixable, but far more cheaply before you submit than after a
            refusal.
          </p>

          <h2>How Wild Mountain helps with your application</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. Working under a licensed RCIC
            (CICC #R706497), our team confirms whether the Foreign Graduate Entrepreneur Stream is genuinely your best
            route, helps you approach the right designated agency, and shapes a business case and application built to
            withstand scrutiny. We are candid about the parts that change: investment minimums, language bands and the
            agency list. We confirm the live alberta.ca criteria before advising.
          </p>
          <p>
            We can compare this stream with the{" "}
            <a href="/alberta-immigration/graduate-entrepreneur-stream">Alberta Graduate Entrepreneur Stream</a>, the{" "}
            <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a> and the{" "}
            <a href="/alberta-immigration/farm-stream">Farm Stream</a>, or with worker routes like the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a> and the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>. We also weigh your federal{" "}
            <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, set Alberta against other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>, line up the right{" "}
            <a href="/work-permits">work permit</a>, and set out our <a href="/fees">fees</a> up front.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            own <strong>Alberta Foreign Graduate Entrepreneur Stream</strong> application an expert check before you
            submit. Figures here are framed as current to 2026 and change periodically, so we always verify the official
            alberta.ca page first.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Foreign Graduate Entrepreneur Stream is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP worker and business stream, with scoring and 2026 cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={GraduationCap} title="Graduate Entrepreneur Stream" desc="The sibling stream for graduates of approved Alberta or Canadian institutions." href="/alberta-immigration/graduate-entrepreneur-stream" />
            <FeatureCard icon={Store} title="Rural Entrepreneur Stream" desc="Start or buy and run a business in a smaller Alberta community." href="/alberta-immigration/rural-entrepreneur-stream" />
            <FeatureCard icon={Tractor} title="Farm Stream" desc="For experienced farmers buying or starting a farm operation in Alberta." href="/alberta-immigration/farm-stream" />
            <FeatureCard icon={Globe} title="Express Entry" desc="The federal system and CRS score behind Alberta's enhanced Express Entry Stream." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Thinking about starting a business in Alberta?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on whether the Foreign Graduate Entrepreneur Stream fits your plans."
      />
    </>
  );
}
