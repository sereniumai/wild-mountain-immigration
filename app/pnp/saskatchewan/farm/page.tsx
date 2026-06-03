import type { Metadata } from "next";
import { Wheat } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/saskatchewan/farm";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Saskatchewan Farm Owner and Operator (SINP)",
  titleAbsolute: "SINP Farm Owner and Operator Stream 2026",
  description:
    "Saskatchewan Farm Owner and Operator 2026: buy a farm for PR. SINP net worth, investment and farming experience explained. Talk to an RCIC today.",
  path: PATH,
  keywords: [
    "Saskatchewan Farm Owner and Operator",
    "SINP farm",
    "buy a farm Saskatchewan PR",
    "Saskatchewan farm immigration",
    "SINP Farm category",
  ],
});

const faqs = [
  {
    q: "What is the SINP Farm Owner and Operator category?",
    a: "The Saskatchewan Farm Owner and Operator category is the farm sub-category of the Saskatchewan Immigrant Nominee Program's Entrepreneur and Farm stream. It is for experienced farmers who intend to buy and actively operate a farm in Saskatchewan, leading to a provincial nomination for permanent residence. It is a business-class route, you invest your own capital and run the farm yourself, rather than applying on a job offer from a Saskatchewan employer. A successful applicant is nominated, then applies separately to IRCC for permanent residence.",
  },
  {
    q: "How much money do I need for the Saskatchewan Farm category?",
    a: "Saskatchewan expects Farm Owner and Operator applicants to show substantial verifiable net worth and to make a significant investment of their own equity into a commercial farming operation in the province. The exact net-worth and minimum-investment thresholds are set by saskatchewan.ca and revised periodically, so we do not publish a fixed figure here. Confirm the current numbers on the official SINP page before you rely on them. Your capital must be legally obtained, and you must document its source as well as how you will fund both the purchase and ongoing operations.",
  },
  {
    q: "Do I need farming experience to qualify?",
    a: "Yes. The Farm Owner and Operator category is built for people with proven, hands-on farm-management experience, typically as an owner-operator or senior farm manager in primary agricultural production. It is not designed for passive investors. Saskatchewan wants applicants who can realistically run a viable commercial farm, so you must document your farming background and your ability to operate the type of farm set out in your business plan.",
  },
  {
    q: "Is an exploratory visit required for the SINP Farm category?",
    a: "Saskatchewan's farm route has historically asked applicants to make an exploratory visit to the province to research farming opportunities and demonstrate genuine intent. Whether a visit is required, and what it must cover, is set by saskatchewan.ca and can change, so confirm the current requirement on the official SINP page before booking travel. Plan any visit around the program's criteria rather than committing to a purchase first.",
  },
  {
    q: "How is the Farm category different from the SINP Entrepreneur category?",
    a: "The Farm Owner and Operator category is specifically for buying and running a primary-production farm and is assessed on farming experience, farm net worth and a farming business plan. The Entrepreneur category is for establishing or buying a general business, retail, services, trades and the like, and turns on a business proposal and a Business Performance Agreement. If you are buying a working farm, the Farm category fits; if you are launching a non-farm business, the Entrepreneur category is the right route.",
  },
  {
    q: "Does the Saskatchewan Farm category lead directly to permanent residence?",
    a: "No, a SINP nomination is a provincial endorsement of your application, not permanent residence by itself. After Saskatchewan nominates you, you submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. As with every business stream, there may be a performance or establishment expectation tied to actually buying and operating your farm. We build the strongest case and flag risks early.",
  },
  {
    q: "Can I apply for the SINP Farm category from outside Canada?",
    a: "Yes. The Farm Owner and Operator category is a business route, so eligibility turns on your farm-management experience, your net worth and your investment and business plan rather than on already holding a Saskatchewan job offer or work permit. Many applicants research and apply from abroad, often alongside an exploratory visit. Because process details and any required visits can change, confirm the current requirements on saskatchewan.ca and speak with a licensed RCIC before committing funds.",
  },
];

export default function SaskatchewanFarmPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Saskatchewan Farm Owner and Operator (SINP), 2026 Guide",
            description:
              "Saskatchewan Farm Owner and Operator 2026: buy a farm for PR. SINP net worth, investment, farming experience and the application process. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-31",
          }),
          serviceLd({
            name: "Saskatchewan Farm Owner and Operator (SINP) application support",
            description:
              "Saskatchewan Farm Owner and Operator 2026: buy a farm for PR. SINP net worth, investment, farming experience and the application process. RCIC-led.",
            path: PATH,
            serviceType: "Saskatchewan Immigrant Nominee Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Saskatchewan (SINP), Farm Owner & Operator"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Saskatchewan (SINP)", path: "/pnp/saskatchewan" },
          { name: "Farm Owner & Operator", path: PATH },
        ]}
        title={<>Saskatchewan Farm Owner & Operator: <span className="text-brand">buy a farm for PR</span></>}
        lede={
          <p>
            The <strong>Saskatchewan Farm Owner and Operator category is a SINP business route for experienced farmers
            who buy and operate a farm in Saskatchewan</strong> to earn a provincial nomination for permanent residence.
            This RCIC-led guide covers the net-worth, investment, experience and exploratory-visit criteria, and the
            application process.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/eligibility", label: "Find what you qualify for" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Wheat className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Thinking of farming in Saskatchewan?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Get a licensed RCIC&apos;s honest read on your Farm Owner and Operator eligibility, net worth and business plan before you invest.</p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "Saskatchewan (SINP) overview", href: "/pnp/saskatchewan", note: "Every SINP stream explained" },
                { label: "SINP Entrepreneur", href: "/pnp/saskatchewan/entrepreneur", note: "Buy or start a Saskatchewan business" },
                { label: "Agriculture Talent Pathway", href: "/pnp/saskatchewan/agriculture-talent-pathway", note: "For agri-food workers with a job offer" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Saskatchewan Farm Owner and Operator category is a SINP business route for experienced farmers who buy and actively operate a commercial farm in the province. It leads to a provincial nomination toward permanent residence, based on proven farming experience, verifiable net worth and a significant farm investment. Core criteria also typically include an exploratory visit, and a nomination supports a separate PR application to IRCC."
            items={[
              <>The <strong>Saskatchewan Farm Owner and Operator</strong> category is a <strong>SINP business route</strong> for experienced farmers who will <strong>buy and actively operate</strong> a farm in Saskatchewan, leading to a nomination for PR.</>,
              <>Core criteria: <strong>proven farming experience</strong>, sufficient verifiable <strong>net worth</strong>, a <strong>significant farm investment</strong>, and typically an <strong>exploratory visit</strong> to the province.</>,
              <>It is for <strong>hands-on primary production</strong>, buying and running a commercial farm, not passive investment or a job-offer worker route.</>,
              <>The path runs <strong>application → nomination → PR</strong>, with the final permanent-residence decision made by <strong>IRCC</strong>.</>,
              <>Thresholds and rules change, always confirm the current criteria on <strong>saskatchewan.ca</strong> before investing.</>,
            ]}
          />

          <h2>What is the Saskatchewan Farm Owner and Operator category?</h2>
          <p>
            The <strong>Saskatchewan Farm Owner and Operator</strong> category is the farm sub-category of the
            Saskatchewan Immigrant Nominee Program&apos;s Entrepreneur and Farm stream. It is for experienced farmers who
            intend to buy and actively operate a commercial farm in Saskatchewan, leading to a provincial nomination for
            permanent residence. Agriculture is one of the province&apos;s named priority sectors, and Saskatchewan&apos;s
            2026 nomination allocation is about <strong>4,761</strong> across all SINP streams, well down from roughly
            8,000 in 2024 after IRCC reduced provincial allocations nationwide (source: saskatchewan.ca / IRCC, May 2026).
            The Farm category is a niche, business-class route: it is for people bringing real capital and farm-management
            know-how to a working Saskatchewan operation, not for general workers or passive investors.
          </p>
          <Callout type="brand" title="This is a business route, not a worker route">
            Unlike the SINP&apos;s worker pathways, such as the Employment Offer route or the sector Talent Pathways, the Farm category does not run on a job offer from a Saskatchewan employer. You invest your own equity, run
            the farm yourself, and are assessed on your farming experience, finances and farming business plan.
          </Callout>

          <h2>Who is the SINP Farm category for?</h2>
          <p>
            The Farm Owner and Operator category is built for a specific applicant: an experienced farmer or senior farm
            manager with the capital and the track record to take over or build a commercial farm in Saskatchewan. It
            suits owner-operators and farm managers from a primary-agriculture background who want to continue farming in
            Canada and settle permanently in the province. It is <em>not</em> designed for investors who simply want to
            put money into agriculture without running the operation, nor for people without genuine, hands-on
            farm-management experience. If you are buying land and a working farm in Saskatchewan and intend to manage
            day-to-day production yourself, this is the category the program points you toward.
          </p>

          <h2>What are the Saskatchewan Farm Owner and Operator requirements?</h2>
          <p>
            <strong>Saskatchewan Farm Owner and Operator requirements</strong> centre on four connected pillars: proven
            farming experience, the financial resources to invest, an actual investment of your own equity into a
            Saskatchewan farm, and, typically, an exploratory visit to research opportunities and show genuine intent.
            The table below summarises the current criteria as a planning guide. Saskatchewan sets and updates the
            controlling thresholds, including net-worth and minimum-investment figures, so treat every number as
            something to <strong>confirm on saskatchewan.ca</strong> before you act. The SINP farm net worth
            requirement and minimum farm investment are tied to the cost of a viable operation. Because farmland prices
            in the province have risen steadily in recent years, budget for both the purchase and ongoing working capital
            when you plan.
          </p>
          <DataTable
            headers={["Requirement", "What the Farm category looks for"]}
            rows={[
              ["Farming experience", "Proven, hands-on experience owning or managing a farm, typically as an owner-operator or senior farm manager in primary agricultural production"],
              ["Net worth", "Sufficient verifiable personal net worth, legally obtained and documented, to fund the farm purchase and ongoing operations (threshold set on saskatchewan.ca)"],
              ["Farm investment", "A significant investment of your own equity into a commercial farming operation in Saskatchewan (the minimum farm investment in Saskatchewan is set on saskatchewan.ca)"],
              ["Exploratory visit", "Typically a visit to Saskatchewan to research farming opportunities and demonstrate genuine intent, confirm the current exploratory visit requirement for 2026 on saskatchewan.ca"],
              ["Selection points", "Farm Owner and Operator points are scored on an assessment grid covering experience, net worth, age and adaptability, with a minimum pass mark set on saskatchewan.ca"],
              ["Good faith deposit", "A good faith deposit for the farm route may be required and tied to a performance agreement, then refunded once you establish and operate the farm, confirm the current terms on saskatchewan.ca"],
              ["Farming business plan", "A viable, realistic plan for a commercial Saskatchewan farm, production type, financials, operations and your hands-on role in running it"],
              ["Source-of-funds & documentation", "Evidence of experience and legally obtained funds, plus supporting records for the proposed operation"],
            ]}
            caption="Saskatchewan Farm Owner and Operator core requirements, framed as current criteria to confirm on saskatchewan.ca (May 2026). Thresholds and details change; verify the official criteria before applying."
          />
          <Callout type="warning" title="Thresholds change, verify before you invest">
            Net-worth and minimum-investment figures for SINP business categories are set by the province and revised
            periodically. Do not commit funds or sign a purchase agreement on the basis of any number you read here or on
            a third-party site, confirm the live requirements on saskatchewan.ca and have a licensed RCIC review your
            plan first.
          </Callout>

          <h2>What types of farms qualify?</h2>
          <p>
            The Farm category is aimed at <strong>primary-production agriculture</strong>, commercial farming operations
            that produce crops or raise livestock in Saskatchewan. The emphasis throughout is on hands-on primary
            production rather than processing, distribution or agribusiness services. Saskatchewan&apos;s agricultural
            economy is dominated by large-acreage grain and oilseed cropping and by cattle and other livestock, so those
            are the most common operations. The summary below shows the kinds of farms the category is built around;
            always confirm that your specific operation qualifies on saskatchewan.ca.
          </p>
          <DataTable
            headers={["Farm type", "Examples", "Notes"]}
            rows={[
              ["Grain & oilseed", "Wheat, canola, barley, lentils, peas", "Large-acreage primary cropping is the backbone of Saskatchewan agriculture"],
              ["Cattle & livestock", "Cow-calf, feedlot, mixed livestock", "Ranching and beef production are widespread across the province"],
              ["Mixed farming", "Combined crop and livestock operations", "Common on family-scale Saskatchewan farms"],
              ["Other primary production", "Recognised commercial farming operations", "Must be genuine primary agriculture, verify eligibility on saskatchewan.ca"],
            ]}
            caption="Illustrative qualifying farm types for the Saskatchewan Farm category (saskatchewan.ca, May 2026). Eligible activity changes, confirm your operation qualifies before applying."
          />

          <h2>How does the Farm category differ from the Entrepreneur category?</h2>
          <p>
            The clearest way to place the Farm category is to compare it with the SINP&apos;s general business route. The
            Farm Owner and Operator category is purpose-built for <strong>primary-production agriculture</strong> and
            assumes deep farming experience, while the{" "}
            <a href="/pnp/saskatchewan/entrepreneur">SINP Entrepreneur category</a> is for establishing or buying a
            general business, retail, services, trades and the like, assessed through a business proposal and a Business
            Performance Agreement. If you are buying or building a working farm and meeting agricultural net-worth and
            investment criteria, the Farm category fits; if you are launching a non-farm business, the Entrepreneur
            category is the better route. Workers with an agri-food <em>job offer</em>, rather than capital to invest,
            should instead look at the{" "}
            <a href="/pnp/saskatchewan/agriculture-talent-pathway">Agriculture Talent Pathway</a>.
          </p>
          <DataTable
            headers={["Feature", "Farm Owner & Operator", "Entrepreneur"]}
            rows={[
              ["Who it is for", "Experienced farmers / farm managers", "Entrepreneurs starting or buying a general business"],
              ["Business type", "Primary-production agriculture", "Retail, services, trades and other businesses"],
              ["Experience focus", "Hands-on farming experience", "Business ownership or management experience"],
              ["Core test", "Farm net worth, investment & farming business plan", "Business proposal & Business Performance Agreement"],
              ["Outcome", "Provincial nomination → PR via IRCC", "Provincial nomination → PR via IRCC"],
            ]}
            caption="Saskatchewan Farm Owner and Operator vs Entrepreneur (saskatchewan.ca, May 2026). Both are SINP business routes ending in a separate IRCC PR application."
          />
          <Callout type="info" title="Both end with a separate IRCC application">
            Like the SINP&apos;s other business categories, the Farm route is a base stream: a SINP nomination is a
            provincial endorsement, and you then file a separate permanent-residence application with IRCC, which makes
            the final decision.
          </Callout>

          <h2>How does the Saskatchewan Farm application process work?</h2>
          <p>
            The Farm category follows the SINP business-class sequence: you research the opportunity (typically with an
            exploratory visit), submit a full application with your experience, finances and farming plan, receive a
            provincial nomination if approved, and then apply to IRCC for permanent residence. The steps below trace that
            path from first assessment to a federal PR decision. Because the program updates its forms, intake and any
            establishment expectations, confirm each step on saskatchewan.ca as you go.
          </p>
          <Steps
            steps={[
              { title: "Assess eligibility & finances", desc: "Confirm your farming experience and review your net worth and available investment capital against the current saskatchewan.ca thresholds with a licensed RCIC." },
              { title: "Plan your exploratory visit", desc: "Research Saskatchewan farming opportunities and, where required, make an exploratory visit to demonstrate genuine intent, confirm the current visit requirement first." },
              { title: "Build your farming business plan", desc: "Prepare a viable plan for a specific Saskatchewan operation, production type, acreage or herd, financials, operations and your hands-on management role." },
              { title: "Submit your Farm application", desc: "File your complete application and supporting documents, experience, source-of-funds and the plan, under the SINP Entrepreneur and Farm stream." },
              { title: "Receive a provincial nomination", desc: "On approval, Saskatchewan nominates you for permanent residence. A nomination is a provincial endorsement, not PR itself." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="brand" title="Plan the purchase around the program, not the other way around">
            The most expensive mistakes in farm immigration come from buying land or signing agreements before the
            eligibility, investment and visit criteria are confirmed. Sequence your financial commitments so they align
            with what the SINP actually requires.
          </Callout>

          <h2>How Wild Mountain helps with your Farm application</h2>
          <p>
            As a CICC-regulated practice led by a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>,
            our team confirms your Saskatchewan Farm Owner and Operator eligibility, pressure-tests your net worth and
            source-of-funds, and helps
            shape a farming business plan and nomination application that stand up to scrutiny. Farm files turn on detail:
            documenting genuine farming experience, evidencing legally obtained capital, planning the exploratory visit,
            and aligning your investment with the current criteria. We confirm the live saskatchewan.ca page before
            advising.
          </p>
          <p>
            Prefer to do some of the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            own <strong>Saskatchewan Farm Owner and Operator</strong> application an expert check before you submit.
            Figures and criteria here, including the SINP farm net worth requirement, minimum farm investment and any
            exploratory visit requirement, are current to 2026 and change periodically, so always verify the official
            SINP page before relying on them.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Thinking of buying a farm in Saskatchewan?"
        sub="Get started with a licensed RCIC for an honest read on your Farm Owner and Operator eligibility, net worth and business plan."
      />
    </>
  );
}
