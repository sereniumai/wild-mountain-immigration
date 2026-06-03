import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/saskatchewan/agriculture-talent-pathway";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Saskatchewan Agriculture Talent Pathway (SINP)",
  titleAbsolute: "SINP Agriculture Talent Pathway 2026",
  description:
    "Saskatchewan Agriculture Talent Pathway: a SINP route for agriculture & agri-food workers with a job offer. Eligible roles, eligibility, how to apply.",
  path: PATH,
  keywords: [
    "Saskatchewan Agriculture Talent Pathway",
    "SINP agriculture",
    "Saskatchewan farm worker immigration",
    "agriculture PR Saskatchewan",
    "SINP Agriculture Talent Pathway eligibility",
  ],
});

const faqs = [
  {
    q: "What is the Saskatchewan Agriculture Talent Pathway?",
    a: "The Agriculture Talent Pathway is one of the Saskatchewan Immigrant Nominee Program's sector-focused routes, introduced in the province's 2026 restructuring. It is built for agriculture and agri-food workers who hold a job offer from an eligible Saskatchewan employer in a priority occupation, for example farm and greenhouse workers, livestock workers, and agri-food processing roles. A provincial nomination through this pathway is your stepping stone to applying to IRCC for permanent residence. It is a worker route, which is different from the Farm Owner/Operator business category for people buying and running their own farm. Eligibility and the in-scope occupation lists are set by the province and change, so confirm the current details on saskatchewan.ca before applying.",
  },
  {
    q: "Which jobs qualify for the SINP Agriculture Talent Pathway?",
    a: "The pathway targets occupations in Saskatchewan's agriculture and agri-food sector. Typical examples include general farm workers, harvesting labourers, nursery and greenhouse workers, livestock and dairy workers, agricultural service contractors and supervisors, and roles in agri-food and meat processing. Some lower-skilled (NOC TEER 4–5) agricultural roles may sit in the province's capped categories with fixed intake windows rather than the priority Talent Pathway, so the exact list and how an occupation is treated matters. Because Saskatchewan sets and updates the in-scope occupation list, the safest step is to confirm your specific NOC code against the current saskatchewan.ca criteria before applying.",
  },
  {
    q: "Do I need a job offer for the Agriculture Talent Pathway?",
    a: "Yes. Like the other SINP Talent Pathways, the Agriculture Talent Pathway is employer-driven, you need a permanent, full-time job offer from an eligible Saskatchewan employer in a qualifying agriculture or agri-food occupation, supported by the employer's job-approval process. This is the key difference from the broader Occupation In-Demand route, which was designed for candidates without a job offer but whose Expression of Interest draws are currently paused. If you do not yet have a Saskatchewan employer, we can talk through which other SINP routes might fit your profile.",
  },
  {
    q: "How is the Agriculture Talent Pathway different from the Farm Owner/Operator category?",
    a: "They serve completely different people. The Agriculture Talent Pathway is a worker route: you are employed by a Saskatchewan agriculture or agri-food business and need a qualifying job offer. The Farm Owner/Operator sub-category is a business route for experienced farmers who intend to buy and personally operate their own farm in Saskatchewan, and it is assessed on net worth, a farming background and a viable farm-business plan rather than a job offer. If your goal is to run your own farm, the Farm route is the right one, see our Saskatchewan Farm guide. If you will work for an agricultural employer, the Agriculture Talent Pathway is the fit.",
  },
  {
    q: "Does an Agriculture Talent Pathway nomination give me 600 CRS points?",
    a: "No. The Talent Pathways are base (paper) nominations, so a nomination does not add 600 points to a federal Express Entry Comprehensive Ranking System score. Instead, once Saskatchewan nominates you, you submit a separate permanent-residence application directly to IRCC. The +600 CRS boost only applies to the SINP's enhanced Saskatchewan Express Entry sub-category, and those Express Entry-aligned draws have been paused since late 2024. If you want to see where your federal score stands anyway, our free CRS calculator gives you an estimate.",
  },
  {
    q: "How long does the Agriculture Talent Pathway take to process?",
    a: "Processing happens in two stages. Saskatchewan's published service standard for assessing a complete nomination application is often a number of weeks, though it varies by route and the volume of applications. Once you are nominated, you apply to IRCC for permanent residence as a base, paper-based application, which generally takes longer than the roughly six months IRCC targets for enhanced Express Entry applications. Adding the stages together, most applicants should plan for several months to roughly a year overall. Service standards change, so confirm the current figures on saskatchewan.ca and canada.ca.",
  },
  {
    q: "Can I apply for the Agriculture Talent Pathway from outside Canada?",
    a: "Generally yes. A defining feature of the SINP priority-sector Talent Pathways is that employer-supported candidates can apply year-round within intake windows, including from overseas, provided they hold a qualifying Saskatchewan job offer. That contrasts with the province's capped lower-skilled sectors, which typically require candidates to already be working in Saskatchewan. Eligibility rules around work-permit type and in-province status are applied strictly. For instance, certain permit-dependent routes exclude holders of a spousal open work permit, so a profile review against the current saskatchewan.ca criteria is the safest first step.",
  },
];

export default function AgricultureTalentPathwayPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Saskatchewan Agriculture Talent Pathway (SINP), 2026 RCIC Guide",
            description:
              "Saskatchewan Agriculture Talent Pathway: a SINP route for agriculture & agri-food workers with a job offer. Eligible roles, eligibility, how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "SINP Agriculture Talent Pathway application support",
            description:
              "Saskatchewan Agriculture Talent Pathway: a SINP route for agriculture & agri-food workers with a job offer. Eligible roles, eligibility, how to apply.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Saskatchewan (SINP), Agriculture Talent Pathway"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Saskatchewan (SINP)", path: "/pnp/saskatchewan" },
          { name: "Agriculture Talent Pathway", path: PATH },
        ]}
        title={<>Saskatchewan Agriculture Talent Pathway <span className="text-brand">(SINP)</span></>}
        lede={
          <p>
            The <strong>Saskatchewan Agriculture Talent Pathway</strong> is a SINP route to PR for ag workers.
            It is built for agriculture and agri-food workers who hold a job offer from an eligible Saskatchewan
            employer. This RCIC-led guide covers eligible roles, eligibility and exactly how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Sprout className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have a Saskatchewan ag job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Agriculture Talent Pathway is employer-driven. Get a licensed RCIC&apos;s honest read on whether your role and offer qualify.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Saskatchewan (SINP) overview", href: "/pnp/saskatchewan", note: "Every SINP stream explained" },
                { label: "SINP International Skilled Worker", href: "/pnp/saskatchewan/international-skilled-worker", note: "The EOI-based skilled route" },
                { label: "SINP Farm (Owner/Operator)", href: "/pnp/saskatchewan/farm", note: "For farmers buying their own farm" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province compared" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Saskatchewan Agriculture Talent Pathway is a sector SINP route for agriculture and agri-food workers who hold an eligible Saskatchewan job offer. It is employer-driven, requiring a permanent, full-time offer in a qualifying agriculture occupation rather than an open Expression of Interest score. A SINP nomination through this pathway supports a PR application to IRCC."
            items={[
              <>The <strong>Saskatchewan Agriculture Talent Pathway</strong> is a SINP route for agriculture and agri-food workers with an eligible Saskatchewan job offer.</>,
              <>It is <strong>employer-driven</strong>: you need a permanent, full-time offer in a qualifying agriculture occupation, not an open Expression of Interest score.</>,
              <>It is a <strong>base nomination</strong>, you apply to IRCC on paper afterwards; it does <strong>not</strong> add 600 CRS points.</>,
              <>Roughly <strong>half of Saskatchewan&apos;s 2026 allocation of about 4,761</strong> nominations is reserved for priority sectors, including agriculture.</>,
              <>It is <strong>separate from the Farm Owner/Operator category</strong>, which is for people buying and running their own farm.</>,
            ]}
          />

          <h2>What is the Saskatchewan Agriculture Talent Pathway?</h2>
          <p>
            The <strong>Saskatchewan Agriculture Talent Pathway</strong> is one of the Saskatchewan Immigrant Nominee
            Program&apos;s (SINP) sector-focused routes, introduced as part of the province&apos;s 2026 restructuring. It
            is designed to help Saskatchewan&apos;s agriculture and agri-food employers fill priority roles by nominating
            foreign workers who already hold a qualifying job offer in the province. A nomination through this pathway is
            your stepping stone to applying to <strong>IRCC</strong> for permanent residence.
          </p>
          <p>
            The context matters. Saskatchewan&apos;s 2026 nomination allocation is about <strong>4,761</strong>, well
            below the roughly 8,000 it had in 2024, after IRCC reduced provincial allocations nationwide (source:
            saskatchewan.ca / IRCC, May 2026). With fewer spaces, the province reserved roughly half of its nominations
            for priority sectors such as health, technology and <strong>agriculture</strong>, channelling them through
            dedicated Talent Pathways rather than broad open draws.</p>
          <p>The pathway is a provincial route, distinct from any
            federal agri-food immigration pilot, though both target similar agriculture and agri-food occupations.
            Because figures and policies change frequently, always verify the current rules before acting.
          </p>
          <Callout type="brand" title="A worker route, not the Farm business category">
            The Agriculture Talent Pathway is for people <strong>employed by</strong> a Saskatchewan agriculture or
            agri-food business. If you instead intend to buy and personally operate your own farm, that is the separate{" "}
            <a href="/pnp/saskatchewan/farm">SINP Farm (Owner/Operator)</a> sub-category, assessed on net worth and a
            farming plan rather than a job offer.
          </Callout>

          <h2>Which agriculture and agri-food roles are eligible?</h2>
          <p>
            The pathway targets occupations across Saskatchewan&apos;s agriculture and agri-food sector, the backbone of
            the provincial economy. The table below shows representative role types and the kind of National Occupational
            Classification (<abbr title="National Occupational Classification">NOC</abbr>) groups they sit in. Saskatchewan
            sets and updates the precise in-scope occupation list, and some lower-skilled (NOC TEER 4–5) roles may be
            handled through the province&apos;s capped categories with fixed intake windows instead of the priority
            pathway, so confirming your exact NOC code is essential.
          </p>
          <DataTable
            headers={["Role type", "Typical examples", "Where it usually fits"]}
            rows={[
              ["Primary farm work", "General farm worker (NOC 85100), harvesting labourer (NOC 85101), grain and oilseed farm hands", "Priority pathway or capped sector, depending on NOC TEER"],
              ["Livestock & dairy", "Livestock workers, dairy and feedlot workers, herd technicians", "Priority pathway (employer-driven)"],
              ["Greenhouse & nursery", "Nursery and greenhouse workers, horticulture labourers", "Priority pathway or capped sector"],
              ["Agricultural supervision", "Farm and agricultural service supervisors, contractors", "Priority pathway (employer-driven)"],
              ["Agri-food processing", "Meat processing worker, food and beverage processing workers", "Priority pathway or capped sector"],
            ]}
            caption="Representative agriculture and agri-food roles (saskatchewan.ca, 2026). The official in-scope occupation list is controlling and changes, verify your NOC code before applying."
          />
          <Callout type="info" title="Your NOC code decides the route">
            Two similar-sounding farm jobs can fall under different NOC codes, and that determines whether your role
            runs through the priority Agriculture Talent Pathway or a capped sector with fixed intake windows. Getting the
            NOC right at the outset is one of the most valuable things you can do.
          </Callout>

          <h2>What are the Agriculture Talent Pathway eligibility requirements?</h2>
          <p>
            <strong>Agriculture Talent Pathway eligibility</strong> combines an employer-side requirement with the usual
            SINP candidate minimums. Because it is employer-driven, the anchor is a genuine, qualifying job offer from an
            eligible Saskatchewan agriculture or agri-food employer; the rest mirrors the International Skilled Worker
            framework.</p>
          <p>Many applicants already work in a Saskatchewan agriculture job on an LMIA-supported temporary
            work permit, which can strengthen a nomination but is not in itself a substitute for it. The summary
            below is accurate to May 2026. The official, controlling criteria live on saskatchewan.ca and change
            periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the pathway asks for"]}
            rows={[
              ["Job offer", "Permanent, full-time offer from an eligible Saskatchewan agriculture / agri-food employer in a qualifying occupation, supported by the employer's job-approval process"],
              ["Occupation", "A NOC code on Saskatchewan's in-scope agriculture list for the pathway (some TEER 4–5 roles route through capped sectors instead)"],
              ["Work experience", "Recent, relevant work experience that matches the offered agricultural occupation"],
              ["Language", "Approved English or French test results appropriate to the occupation (results valid two years)"],
              ["Education / training", "Education or training consistent with the role; foreign credentials may need an Educational Credential Assessment (ECA)"],
              ["Settlement funds", "Proof of funds to support yourself and your family on arrival, unless already working in the province"],
              ["EOI points", "Meet the SINP Expression of Interest grid minimum of 60 out of 110 where the route uses the pool"],
            ]}
            caption="Saskatchewan Agriculture Talent Pathway core eligibility, accurate as of May 2026 (saskatchewan.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="warning" title="Eligibility is not an invitation">
            Meeting the requirements places you in scope for the pathway, it is not the same as a nomination.
            Saskatchewan manages intake within its priority-sector allocation, and the province makes the final
            selection. Be wary of any source that implies a place is guaranteed.
          </Callout>

          <h2>How does it compare with other SINP routes?</h2>
          <p>
            The Agriculture Talent Pathway sits alongside the broader{" "}
            <a href="/pnp/saskatchewan/international-skilled-worker">International Skilled Worker</a> category and the
            business-focused <a href="/pnp/saskatchewan/farm">Farm</a> sub-category. The contrast below shows who each is
            for and how a nomination behaves at the federal stage.
          </p>
          <DataTable
            headers={["Route", "Who it's for", "Nomination type"]}
            rows={[
              ["Agriculture Talent Pathway", "Agriculture / agri-food workers with a Saskatchewan job offer", "Base (paper), no +600 CRS"],
              ["International Skilled Worker", "Skilled workers entering the EOI pool (incl. Employment Offer and the enhanced Saskatchewan Express Entry sub-category)", "Base or enhanced (+600 CRS via Express Entry)"],
              ["Farm (Owner/Operator)", "Experienced farmers buying and operating their own Saskatchewan farm", "Base (business), no job offer required"],
            ]}
            caption="How the Agriculture Talent Pathway compares with neighbouring SINP routes (saskatchewan.ca, May 2026)."
          />
          <p>
            Note the federal-stage difference: the Talent Pathways are <strong>base</strong> nominations, so a nomination
            does not add 600 points to a federal Express Entry score, you apply to IRCC on paper instead. The +600 CRS
            boost only applies to the enhanced Saskatchewan Express Entry sub-category, whose draws have been paused since
            late 2024. Curious where your federal score sits anyway? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a>.
          </p>

          <h2>How do you apply for the Agriculture Talent Pathway?</h2>
          <p>
            <strong>How to apply for the Agriculture Talent Pathway</strong> follows the standard SINP employer-driven
            sequence: secure a qualifying job offer, confirm your occupation is in scope, submit your application, and, once nominated, apply to IRCC. The steps below show the path from a Saskatchewan job offer to a federal
            permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Secure a qualifying job offer", desc: "Obtain a permanent, full-time offer from an eligible Saskatchewan agriculture or agri-food employer, supported by the employer's job-approval process." },
              { title: "Confirm your occupation is in scope", desc: "Check that your NOC code sits on Saskatchewan's in-scope agriculture list for the priority pathway, not a capped sector with fixed intake windows." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, obtain an ECA for foreign education if needed, and collect work-experience, job-offer and settlement-funds evidence." },
              { title: "Submit your application", desc: "Submit your SINP application (an Expression of Interest where the route uses the pool) within the relevant intake, with the supporting documents." },
              { title: "Receive a nomination", desc: "If selected within Saskatchewan's priority-sector allocation, the province issues a provincial nomination. Eligibility alone does not guarantee this." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <p>
            On cost, submitting a SINP Expression of Interest is <strong>free</strong>, and there is no separate
            provincial application fee for the International Skilled Worker category at the time of writing, one reason
            Saskatchewan can be cost-competitive among provincial programs. All provincial steps are separate from the
            IRCC permanent-residence fees you pay at the federal stage, and figures change, confirm current details on
            saskatchewan.ca before applying.
          </p>

          <h2>How long does the Agriculture Talent Pathway take?</h2>
          <p>
            <strong>How long the Agriculture Talent Pathway takes</strong> depends on the stage. After you submit a
            complete nomination application, Saskatchewan&apos;s assessment is often a matter of weeks, though it varies by
            route and volume.</p>
          <p>Once nominated, your application to IRCC is a base, paper-based permanent-residence
            application, which generally takes longer than the roughly six months IRCC targets for enhanced Express Entry
            applications. Most applicants should plan for several months to the better part of a year overall, and both
            provincial and federal timelines move with demand, so treat any estimate as approximate.
          </p>

          <h2>How Wild Mountain helps with the Agriculture Talent Pathway</h2>
          <p>
            We assess your profile and your Saskatchewan job offer against the province&apos;s current agriculture
            priorities, confirm your NOC code is genuinely in scope, and steer you toward the right route, the Agriculture
            Talent Pathway, the broader <a href="/pnp/saskatchewan/international-skilled-worker">International Skilled
            Worker</a> category, or the <a href="/pnp/saskatchewan/farm">Farm</a> sub-category if your goal is to run your
            own farm. As a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>, our team prepares a
            nomination application that stands up to scrutiny and represents you with the province and with IRCC.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            <strong> Saskatchewan Agriculture Talent Pathway</strong> application an expert check before you submit.
            Figures here are current to 2026 and change, so we always confirm the live saskatchewan.ca page before
            advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Does the Agriculture Talent Pathway fit your profile?"
        sub="Get started with a licensed RCIC for an honest read on whether your Saskatchewan agriculture job offer and occupation qualify for a SINP nomination."
      />
    </>
  );
}
