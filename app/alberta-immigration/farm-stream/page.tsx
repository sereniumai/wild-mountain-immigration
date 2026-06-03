import type { Metadata } from "next";
import { Tractor, Store, GraduationCap, Globe, Briefcase, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/alberta-immigration/farm-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Farm Stream (AAIP) Guide 2026",
  titleAbsolute: "Alberta Farm Stream 2026: AAIP Eligibility Guide",
  description:
    "Alberta Farm Stream 2026: buy or start a farm for PR. AAIP farm immigration requirements, net worth, business plan and how to apply. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "alberta farm stream",
    "aaip farm stream",
    "farm immigration alberta",
    "buy a farm alberta pr",
    "alberta agriculture immigration",
  ],
});

const faqs = [
  {
    q: "What is the Alberta Farm Stream?",
    a: "The Alberta Farm Stream is a business pathway under the Alberta Advantage Immigration Program (AAIP) for experienced farmers and farm managers who plan to buy or start, and then actively run, a primary-production farm in Alberta. A successful applicant is nominated for permanent residence. It is a business stream rather than a worker stream: you invest your own capital and operate the farm yourself, instead of relying on a job offer from an Alberta employer.",
  },
  {
    q: "How much money do I need for the Alberta Farm Stream?",
    a: "Alberta expects Farm Stream applicants to have substantial personal net worth and to make a significant investment of their own equity into a Canadian primary-production farming business. The exact net-worth and minimum-investment thresholds are set by alberta.ca and change periodically, so we do not publish a fixed figure here, confirm the current numbers on the official AAIP page before relying on them. The capital must be your own, legally obtained, and you must show how you will fund both the purchase and ongoing operations.",
  },
  {
    q: "Do I need farming experience to apply for the Farm Stream?",
    a: "Yes. The Farm Stream is built for people with proven, hands-on farm-management experience, typically as an owner-operator or senior farm manager, not for passive investors. Alberta wants applicants who can realistically run a viable commercial farm in the province, so you must document your background in primary agricultural production and your ability to manage the type of operation set out in your business plan.",
  },
  {
    q: "What types of farms qualify under the Alberta Farm Stream?",
    a: "The Farm Stream is aimed at primary-production agriculture, for example grain and oilseed cropping, cattle and other livestock, dairy, poultry and other recognised commercial farming operations in Alberta. The focus is on hands-on, primary production rather than agri-processing or agribusiness services. Because eligible activity and any supply-managed quota rules can change, confirm that your proposed operation qualifies on alberta.ca before investing.",
  },
  {
    q: "How is the Farm Stream different from the Alberta entrepreneur streams?",
    a: "The Farm Stream is specifically for primary-production agriculture and assumes deep farm-management experience, while the Rural Entrepreneur Stream and Graduate Entrepreneur streams are for general businesses (retail, services, trades and so on) in eligible communities. The Farm Stream centres on buying or starting a working farm and meeting agricultural net-worth and investment criteria, whereas the entrepreneur streams use a business proposal in a rural or graduate context. If you are not buying a farm, an entrepreneur stream is usually the better fit.",
  },
  {
    q: "Does the Alberta Farm Stream lead directly to permanent residence?",
    a: "A Farm Stream nomination is a provincial endorsement of your application. It is not permanent residence by itself. After Alberta nominates you, you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. As with every business stream, there may be a performance or establishment expectation tied to actually operating your farm. We build the strongest case and flag risks early.",
  },
  {
    q: "Can I apply for the Alberta Farm Stream from outside Canada?",
    a: "The Farm Stream is a business stream, so eligibility turns on your farm-management experience, your net worth and your investment and business plan rather than on already holding an Alberta job offer or work permit. Some applicants explore the farm from abroad and others are already in Canada. Because process details and any required visits or temporary status can change, confirm the current requirements on alberta.ca and speak with a licensed RCIC before committing funds.",
  },
];

export default function FarmStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Farm Stream (AAIP): Buy or Start a Farm in Alberta, 2026 Guide",
            description:
              "Alberta Farm Stream 2026: buy or start a farm for PR. AAIP farm immigration requirements, net worth, business plan and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-31",
          }),
          serviceLd({
            name: "Alberta Farm Stream (AAIP) application support",
            description:
              "Alberta Farm Stream 2026: buy or start a farm for PR. AAIP farm immigration requirements, net worth, business plan and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta Advantage Immigration Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Farm Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Farm Stream", path: PATH },
        ]}
        title={<>Alberta Farm Stream: <span className="text-brand">buy or start a farm for PR</span></>}
        lede={
          <p>
            The <strong>Alberta Farm Stream is a business route to permanent residence for experienced farmers who buy or
            start a farm in Alberta</strong> and actively run it. This RCIC-reviewed guide covers AAIP farm immigration
            requirements, eligible farm types and the proposal-to-PR process.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Explore AAIP streams, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Tractor className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Thinking of farming in Alberta?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Get a licensed RCIC&apos;s honest read on your Farm Stream eligibility, net worth and business plan before you invest.</p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Rural Entrepreneur Stream", href: "/alberta-immigration/rural-entrepreneur-stream", note: "Start a business in rural Alberta" },
                { label: "Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "For workers already in Alberta" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Compare your AAIP options" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Farm Stream is an AAIP business stream for experienced farmers and farm managers. You buy or start a primary-production farm in Alberta, actively run it, and earn a provincial nomination for permanent residence. Applicants need proven farm-management experience, sufficient net worth, a significant investment in a Canadian farm and a viable business plan. The path runs from proposal through nomination to permanent residence, with the final PR decision made by IRCC. Thresholds change, so confirm current criteria before investing."
            items={[
              <>The <strong>Alberta Farm Stream</strong> is an AAIP <strong>business stream</strong> for experienced farmers who will <strong>buy or start and actively run</strong> a primary-production farm in Alberta, leading to PR.</>,
              <>Core requirements: <strong>proven farm-management experience</strong>, sufficient <strong>net worth</strong>, a <strong>significant investment</strong> in a Canadian farm, and a <strong>viable farming business plan</strong>.</>,
              <>It is for <strong>hands-on primary production</strong> (grain, cattle, dairy, poultry and similar), not passive investment or agri-processing.</>,
              <>The path runs <strong>proposal → application → nomination → PR</strong>, with the final permanent-residence decision made by IRCC.</>,
              <>Thresholds and eligible activity change, always confirm the current criteria on <strong>alberta.ca</strong> before investing.</>,
            ]}
          />

          <h2>What is the Alberta Farm Stream?</h2>
          <p>
            The <strong>Alberta Farm Stream</strong> is a business pathway within the Alberta Advantage Immigration
            Program (AAIP) for experienced farmers and farm managers who intend to buy or start, and then actively
            operate, a primary-production farm in Alberta, leading to a nomination for permanent residence. It sits
            alongside Alberta&apos;s entrepreneur streams as part of the program&apos;s business category.</p>
          <p>Agriculture is
            one of Alberta&apos;s named 2026 priority sectors, and the AAIP&apos;s total provincial allocation for 2026 is
            about <strong>6,403 nominations</strong> across all streams (source: alberta.ca, Alberta Advantage Immigration
            Program, May 2026). The Farm Stream is a niche, business-class route, it is for people bringing real capital
            and farm-management know-how to a working Alberta operation, not for general workers or passive investors.
          </p>
          <Callout type="brand" title="This is a business stream, not a worker stream">
            Unlike the worker pathways such as the Opportunity Stream, the Farm Stream does not run on a job offer or a
            Worker Expression of Interest. You invest your own equity, run the farm yourself, and are assessed on your
            farming experience, finances and business plan.
          </Callout>

          <h2>Who is the Alberta Farm Stream for?</h2>
          <p>
            The Farm Stream is built for a specific applicant: an experienced farmer or senior farm manager with the
            capital and the track record to take over or establish a commercial farm in Alberta. It suits owner-operators
            and farm managers from a primary-agriculture background who want to continue farming in Canada and settle
            permanently in the province.</p>
          <p>It is <em>not</em> designed for investors who simply want to put money into
            agriculture without running the operation, nor for people without genuine, hands-on farm-management
            experience. If you are buying land and a working farm in Alberta and intend to manage day-to-day production
            yourself, this is the stream the program points you toward.
          </p>

          <h2>What are the Alberta Farm Stream requirements?</h2>
          <p>
            <strong>Alberta Farm Stream requirements</strong> centre on four connected pillars: proven farm-management
            experience, the financial resources to invest, a viable farming business plan, and an actual investment of
            your own equity into a Canadian primary-production farm. The table below summarises the current criteria as a
            planning guide. Alberta sets and updates the controlling thresholds, and the <strong>AAIP Farm Stream net
            worth requirement</strong> and minimum-investment figures change periodically, so treat every number as
            something to <strong>confirm on alberta.ca</strong> before you act.
          </p>
          <DataTable
            headers={["Requirement", "What the Farm Stream looks for"]}
            rows={[
              ["Farm-management experience", "Proven, hands-on experience owning or managing a farm, typically as an owner-operator or senior farm manager (NOC 80020 farm managers) in primary agricultural production"],
              ["Financial resources / net worth", "Sufficient personal net worth, legally obtained and documented, to fund the farm purchase or start-up and ongoing operations (threshold set on alberta.ca)"],
              ["Investment in a Canadian farm", "A significant investment of your own equity into a primary-production farming business in Alberta (minimum investment set on alberta.ca)"],
              ["Farming business plan", "A viable, realistic business plan for a commercial Alberta farm, production type, financials, operations and your role in running it"],
              ["Intent to operate & settle", "Genuine intent to actively run the farm and settle permanently in Alberta, not to hold a passive interest"],
              ["Documentation", "Evidence of experience, source-of-funds for your net worth, and supporting records for the proposed operation"],
            ]}
            caption="Alberta Farm Stream core requirements, framed as current criteria to confirm on alberta.ca (May 2026). Thresholds and details change; verify the official criteria before applying."
          />
          <Callout type="warning" title="Thresholds change, verify before you invest">
            Net-worth and minimum-investment figures for AAIP business streams are set by the province and revised
            periodically. Do not commit funds or sign a purchase agreement on the basis of any number you read here or on a
            third-party site, confirm the live requirements on alberta.ca and have a licensed RCIC review your plan first.
          </Callout>

          <h2>What types of farms are eligible?</h2>
          <p>
            The Farm Stream is aimed at <strong>primary-production agriculture</strong>, commercial farming operations
            that produce crops or raise livestock in Alberta. The emphasis throughout is on hands-on primary production
            rather than processing, distribution or agribusiness services. Some sectors carry extra considerations:
            supply-managed commodities such as dairy and poultry require production quota that you would need to
            acquire, which affects both cost and feasibility. The summary below shows the kinds of operations the stream is built around; always
            confirm that your specific proposal qualifies on alberta.ca.
          </p>
          <DataTable
            headers={["Farm type", "Examples", "Notes"]}
            rows={[
              ["Crop / grain & oilseed", "Wheat, canola, barley, pulses", "Large-acreage primary cropping is a common Alberta operation"],
              ["Cattle & livestock", "Cow-calf, feedlot, mixed livestock", "Ranching and beef production are widespread across the province"],
              ["Dairy", "Milk production", "Supply-managed, requires production quota; confirm feasibility and cost"],
              ["Poultry", "Eggs, chicken, turkey", "Supply-managed, quota considerations apply"],
              ["Other primary production", "Recognised commercial farming operations", "Must be genuine primary agriculture, verify eligibility on alberta.ca"],
            ]}
            caption="Illustrative eligible farm types for the Alberta Farm Stream (alberta.ca, May 2026). Eligible activity and supply-managed quota rules change, confirm your operation qualifies."
          />

          <h2>How does the Farm Stream differ from the entrepreneur streams?</h2>
          <p>
            The clearest way to place the Farm Stream is to compare it with Alberta&apos;s general business routes. The
            Farm Stream is purpose-built for <strong>primary-production agriculture</strong> and assumes deep farm-management
            experience, while the{" "}
            <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a> is for general
            businesses, retail, services, trades and the like, in eligible rural Alberta communities, and the graduate
            entrepreneur routes are for recent graduates building a business.</p>
          <p>If you are buying or starting a working farm
            and meeting agricultural net-worth and investment criteria, the Farm Stream fits; if you are launching a
            non-farm business, an entrepreneur stream is the better route.
          </p>
          <DataTable
            headers={["Feature", "Farm Stream", "Rural Entrepreneur Stream"]}
            rows={[
              ["Who it is for", "Experienced farmers / farm managers", "Entrepreneurs starting or buying a general business"],
              ["Business type", "Primary-production agriculture", "Retail, services, trades and other businesses"],
              ["Experience focus", "Hands-on farm-management experience", "Business ownership or management experience"],
              ["Core test", "Farm net worth, investment & farming business plan", "Business proposal in an eligible rural community"],
              ["Outcome", "Provincial nomination → PR via IRCC", "Provincial nomination → PR via IRCC"],
            ]}
            caption="Alberta Farm Stream vs Rural Entrepreneur Stream (alberta.ca, May 2026). Both are base business streams ending in a separate IRCC PR application."
          />
          <Callout type="info" title="Both end with a separate IRCC application">
            Like Alberta&apos;s other business streams, the Farm Stream is a base stream: an AAIP nomination is a provincial
            endorsement, and you then file a separate permanent-residence application with IRCC, which makes the final
            decision.
          </Callout>

          <h2>How does the Alberta Farm Stream process work?</h2>
          <p>
            The Farm Stream follows the AAIP business-class sequence: you put forward a farming proposal, submit a full
            application, receive a provincial nomination if approved, and then apply to IRCC for permanent residence. The
            steps below trace that path from first assessment to a federal PR decision. Because the program updates its
            forms, intake and any establishment or performance expectations, confirm each step on alberta.ca as you go.
          </p>
          <Steps
            steps={[
              { title: "Assess eligibility & finances", desc: "Confirm your farm-management experience and review your net worth and available investment capital against the current alberta.ca thresholds with a licensed RCIC." },
              { title: "Build your farming business plan", desc: "Prepare a viable business plan for a specific Alberta operation, production type, acreage or herd, financials, operations and your hands-on management role." },
              { title: "Submit your Farm Stream proposal", desc: "Put your proposal and supporting documents, experience, source-of-funds and the plan, to the AAIP under the business / farm category." },
              { title: "Complete the full application", desc: "If your proposal advances, submit a complete application with the required fees and evidence of your net worth and intended investment." },
              { title: "Receive a provincial nomination", desc: "On approval, Alberta nominates you for permanent residence. A nomination is a provincial endorsement, not PR itself." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="brand" title="Plan the purchase around the program, not the other way around">
            The most expensive mistakes in farm immigration come from buying land or signing agreements before the
            eligibility and investment criteria are confirmed. Sequence the financial commitments so they align with what
            the AAIP actually requires.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your Farm Stream application</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. Working under a licensed RCIC
            (CICC #R706497), our team confirms your Farm Stream eligibility, pressure-tests your net worth and
            source-of-funds, and helps shape a farming business plan and nomination application that stand up to scrutiny.
            Farm files turn on detail: documenting genuine farm-management experience, evidencing legally obtained capital,
            and aligning your investment with the current criteria.
          </p>
          <p>
            If a farm purchase is not your fit, we compare the Farm Stream with the{" "}
            <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a>, the{" "}
            <a href="/alberta-immigration/graduate-entrepreneur-stream">Graduate Entrepreneur Stream</a> and the{" "}
            <a href="/alberta-immigration/foreign-graduate-entrepreneur-stream">Foreign Graduate Entrepreneur Stream</a>,
            or with worker routes like the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> and the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>. We also weigh your
            federal <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, set Alberta against other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>, line up the right{" "}
            <a href="/work-permits">work permit</a>, and set out our <a href="/fees">fees</a> in advance.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            own Alberta Farm Stream application an expert check before you submit. Figures and criteria here are
            current to 2026 and change periodically, so we always confirm the live alberta.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Farm Stream is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP worker and business stream, with scoring and 2026 cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Store} title="Rural Entrepreneur Stream" desc="Start or buy and run a general business in a smaller Alberta community." href="/alberta-immigration/rural-entrepreneur-stream" />
            <FeatureCard icon={GraduationCap} title="Graduate Entrepreneur Stream" desc="For founders building a business after graduating from an approved Alberta institution." href="/alberta-immigration/graduate-entrepreneur-stream" />
            <FeatureCard icon={Globe} title="Foreign Graduate Entrepreneur" desc="For recent graduates of institutions outside Canada starting an Alberta business." href="/alberta-immigration/foreign-graduate-entrepreneur-stream" />
            <FeatureCard icon={Tractor} title="Express Entry" desc="The federal system and CRS score behind Alberta's enhanced Express Entry Stream." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Thinking of buying a farm in Alberta?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on your Farm Stream eligibility, net worth and business plan."
      />
    </>
  );
}
