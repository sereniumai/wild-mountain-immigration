import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/saskatchewan/saskatchewan-experience";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "SINP Saskatchewan Experience Category 2026",
  titleAbsolute: "SINP Saskatchewan Experience Category 2026",
  description:
    "Saskatchewan Experience category 2026: SINP sub-categories for workers already in Saskatchewan, 6-month rules, job offer and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Saskatchewan Experience category",
    "SINP Saskatchewan Experience",
    "Existing Work Permit sub-category",
    "SINP long-haul truck driver",
    "SINP hospitality sector",
  ],
});

const faqs = [
  {
    q: "Who can apply through the Saskatchewan Experience category?",
    a: "The Saskatchewan Experience category is for people who are already living and working in Saskatchewan on a valid work permit. It is not a route you can use from outside Canada. The main sub-category, Existing Work Permit, is open to skilled workers in eligible occupations, while separate sub-categories cover health professionals, the hospitality sector, long-haul truck drivers and students who graduated from a recognised Saskatchewan institution. Each sub-category sets its own minimum work experience, job-offer and language requirements, so the safest first step is to confirm which one fits your situation against the current saskatchewan.ca criteria.",
  },
  {
    q: "How long do I need to have worked in Saskatchewan?",
    a: "It depends on the sub-category, but most Saskatchewan Experience routes ask for a minimum period of recent, full-time work in the province for your current employer. Skilled workers in the Existing Work Permit sub-category generally need at least six months of work in Saskatchewan, while lower-skilled routes such as the Hospitality Sector and Long-Haul Truck Driver sub-categories have historically required a longer qualifying period, often around six months as well, plus a permanent full-time job offer. Because these thresholds change, always verify the current minimum on saskatchewan.ca before you apply.",
  },
  {
    q: "Do I need a job offer for the Saskatchewan Experience category?",
    a: "Yes, for almost every sub-category. Because the Saskatchewan Experience category is built for people already employed in the province, you normally need a permanent, full-time job offer from your current Saskatchewan employer in the occupation you have been working in. The job offer requirement is one of the features that distinguishes this category from the International Skilled Worker category, where some routes were designed for candidates without an offer. We assess whether your offer and occupation meet the SINP's current standards.",
  },
  {
    q: "What language level do I need?",
    a: "Most Saskatchewan Experience sub-categories require at least Canadian Language Benchmark (CLB) 4 from an approved English or French test, with results that are still valid. Some skilled or regulated occupations set a higher bar. Language is measured on your lowest of four abilities, reading, writing, listening and speaking, so a single weak skill can drop you below the threshold. Because requirements differ by sub-category and occupation, confirm the exact level on saskatchewan.ca before booking a test.",
  },
  {
    q: "Is the Saskatchewan Experience category enhanced or base?",
    a: "The Saskatchewan Experience category is a base route. That means a nomination through it does not add 600 points to a federal Express Entry profile; instead, once Saskatchewan nominates you, you submit a separate paper application to IRCC for permanent residence. The enhanced, Express Entry-aligned option in Saskatchewan is the Saskatchewan Express Entry sub-category under the International Skilled Worker category. If you already have an Express Entry profile, we can advise whether an enhanced route is realistic for you.",
  },
  {
    q: "Can students apply through the Saskatchewan Experience category?",
    a: "Yes. The Students sub-category is for international graduates of recognised Saskatchewan post-secondary institutions who have worked in the province after graduating and hold a valid post-graduation work permit. Graduates from institutions outside Saskatchewan generally cannot use this sub-category. Eligibility around your study programme, work experience and permit type is applied strictly, so a profile review against the current saskatchewan.ca rules is the safest way to confirm you qualify before you apply.",
  },
  {
    q: "Does a Saskatchewan Experience nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence itself. After Saskatchewan nominates you, you still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible application and flag risks before they become refusals. Figures, sub-categories and processing times change, so we always confirm the live saskatchewan.ca page before advising.",
  },
];

export default function SaskatchewanExperiencePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "SINP Saskatchewan Experience Category, 2026 RCIC Guide",
            description:
              "Saskatchewan Experience category 2026: SINP sub-categories for workers already in Saskatchewan, 6-month rules, job offer and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "SINP Saskatchewan Experience category application support",
            description:
              "Saskatchewan Experience category 2026: SINP sub-categories for workers already in Saskatchewan, 6-month rules, job offer and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Saskatchewan (SINP), Saskatchewan Experience"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Saskatchewan (SINP)", path: "/pnp/saskatchewan" },
          { name: "Saskatchewan Experience", path: PATH },
        ]}
        title={<>SINP <span className="text-brand">Saskatchewan Experience</span> category</>}
        lede={
          <p>
            The <strong>Saskatchewan Experience category</strong> is the SINP route for workers already in Saskatchewan.
            This RCIC-led guide covers its sub-categories, the six-month eligibility rules, job offer and language
            requirements, and exactly how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Briefcase className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Already working in Saskatchewan?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Choosing the right Saskatchewan Experience sub-category matters. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Saskatchewan (SINP) overview", href: "/pnp/saskatchewan", note: "Every SINP stream explained" },
                { label: "International Skilled Worker", href: "/pnp/saskatchewan/international-skilled-worker", note: "The EOI-based skilled route" },
                { label: "Health Talent Pathway", href: "/pnp/saskatchewan/health-talent-pathway", note: "For health-sector workers" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Saskatchewan Experience category is a base SINP route for a work permit holder already employed in Saskatchewan. It lets people who have built in-province experience and hold a permanent job offer seek a provincial nomination toward permanent residence, through a direct application by sub-category rather than an Expression of Interest pool. The sub-categories are Existing Work Permit, Health Professionals, Hospitality Sector, Long-Haul Truck Driver and Students, each with its own work experience requirement."
            items={[
              <>The <strong>Saskatchewan Experience category</strong> is a base SINP route for people <strong>already working in Saskatchewan</strong> on a valid work permit.</>,
              <>It contains several sub-categories: <strong>Existing Work Permit</strong>, Health Professionals, Hospitality Sector, Long-Haul Truck Driver and Students.</>,
              <>Most routes need <strong>around six months</strong> of recent Saskatchewan work, a <strong>permanent job offer</strong> from your employer and language results (often <strong>CLB 4</strong>).</>,
              <>As a <strong>base route</strong>, a nomination leads to a separate IRCC paper application, it does not add 600 CRS points.</>,
              <>You <strong>cannot apply from outside Canada</strong>: this category is for temporary residents who are already in the province.</>,
            ]}
          />

          <h2>What is the Saskatchewan Experience category?</h2>
          <p>
            The <strong>Saskatchewan Experience category</strong> is the part of the Saskatchewan Immigrant Nominee
            Program (SINP) designed for people who are <em>already</em> living and working in Saskatchewan on a valid
            work permit. Rather than ranking candidates in an Expression of Interest pool, it lets the province nominate
            temporary residents who have built genuine in-province experience and have a permanent job offer from a
            Saskatchewan employer. A nomination is your stepping stone to applying to IRCC for permanent residence.
          </p>
          <p>
            Saskatchewan&apos;s 2026 nomination allocation is about <strong>4,761</strong>, down from roughly 8,000 in
            2024 after IRCC reduced provincial allocations nationwide (source: saskatchewan.ca / IRCC, May 2026). With
            fewer spaces, the province has tilted heavily toward people who already have a foothold in Saskatchewan,
            which makes the Saskatchewan Experience category one of the most practical routes for temporary foreign
            workers and graduates already in the province. Because figures and rules change frequently, always verify
            the current criteria before acting.
          </p>
          <Callout type="brand" title="This is an in-Saskatchewan route">
            You cannot use the Saskatchewan Experience category from outside Canada. It is built for people who already
            hold a valid Saskatchewan work permit and a qualifying job offer in the province. If you are still abroad,
            the <a href="/pnp/saskatchewan/international-skilled-worker">International Skilled Worker</a> category or a
            sector Talent Pathway may fit better.
          </Callout>

          <h2>What are the Saskatchewan Experience sub-categories?</h2>
          <p>
            The category is divided into sub-categories aimed at different groups of in-province workers. The flagship
            is the <strong>Existing Work Permit</strong> sub-category for skilled workers, with separate routes for
            health professionals, the hospitality sector, long-haul truck drivers and graduates of Saskatchewan
            institutions. Each sub-category sets its own qualifying work period, occupation list and language bar, so the
            first task is to identify which one fits your situation.
          </p>
          <DataTable
            headers={["Sub-category", "Who it's for", "Key feature"]}
            rows={[
              [
                "Existing Work Permit",
                "Skilled workers already employed in Saskatchewan in an eligible occupation",
                "The main route, needs ~6 months SK work + a permanent job offer",
              ],
              [
                "Health Professionals",
                "Physicians, nurses and other in-demand health workers employed in Saskatchewan",
                "Occupation-specific; some roles need licensing or registration",
              ],
              [
                "Hospitality Sector",
                "Food/beverage servers, food-counter attendants and housekeeping staff",
                "Lower-skilled route for roles such as food-counter attendant, typically a longer qualifying work period",
              ],
              [
                "Long-Haul Truck Driver",
                "Truck drivers (NOC 73300) working for an approved Saskatchewan trucking firm",
                "Must be working for an eligible employer with a valid licence",
              ],
              [
                "Students",
                "International graduates of recognised Saskatchewan post-secondary institutions",
                "Needs a post-graduation work permit and in-SK work after graduating",
              ],
            ]}
            caption="SINP Saskatchewan Experience sub-categories (saskatchewan.ca, 2026). Sub-categories and intakes change; eligibility does not guarantee a nomination."
          />
          <Callout type="info" title="The Students sub-category is Saskatchewan-only">
            The Students route is for graduates of <strong>recognised Saskatchewan</strong> post-secondary institutions
            who then worked in the province on a post-graduation work permit (PGWP). It turns that in-province PGWP
            experience into a nomination. Graduates of institutions outside Saskatchewan generally cannot use this
            sub-category and should look at other SINP or federal routes instead.
          </Callout>

          <h2>What are the eligibility requirements?</h2>
          <p>
            Across the Saskatchewan Experience sub-categories, the core requirements are similar: recent full-time work
            in Saskatchewan, a permanent job offer from your current employer, valid temporary status and language
            results. Skilled workers in the Existing Work Permit sub-category generally need at least <strong>six months
            </strong> of work in the province, while lower-skilled routes such as the Hospitality Sector and Long-Haul
            Truck Driver sub-categories set their own qualifying periods and occupation rules. The table below
            summarises the common eligibility pillars; the controlling list lives on saskatchewan.ca and changes
            periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the category asks for"]}
            rows={[
              ["Work permit & status", "A valid Saskatchewan work permit and lawful temporary-resident status at the time you apply, as a worker currently employed in the province"],
              ["Saskatchewan work experience", "Recent, full-time work in Saskatchewan for your current employer, around 6 months for most routes (the in-province work experience requirement; verify by sub-category)"],
              ["Job offer", "A permanent, full-time job offer from your current Saskatchewan employer in your occupation, with a SINP Job Approval Letter"],
              ["Language", "Approved English or French test results, commonly CLB 4, higher for some skilled or regulated roles, measured on your weakest ability"],
              ["Occupation & licensing", "An occupation eligible for your sub-category; regulated roles (e.g. some health professions) may need certification or registration"],
              ["Settlement funds", "Enough funds to support yourself and your family on arrival, unless exempt"],
            ]}
            caption="Common SINP Saskatchewan Experience eligibility pillars, accurate as of May 2026 (saskatchewan.ca). Requirements vary by sub-category, verify the official criteria before applying."
          />
          <Callout type="warning" title="Eligibility is not a guaranteed nomination">
            Meeting every requirement makes you eligible to apply, it does not guarantee a nomination. With the 2026
            allocation reduced to about 4,761, Saskatchewan manages intake carefully, and some sub-categories run on
            limited intake windows or quotas. Beware any source that implies a place is guaranteed.
          </Callout>

          <h2>How does it differ from the International Skilled Worker category?</h2>
          <p>
            The clearest way to understand the Saskatchewan Experience category is to contrast it with the SINP&apos;s
            other main skilled route. The <strong>Saskatchewan Experience category</strong> is for people already
            working in the province and almost always requires an in-Saskatchewan job offer and prior in-province
            experience. The <a href="/pnp/saskatchewan/international-skilled-worker">International Skilled Worker</a>{" "}
            category uses an Expression of Interest pool scored out of 110 points and includes routes, such as the
            Saskatchewan Express Entry sub-category, that can be enhanced. If you are abroad, or have no Saskatchewan
            job offer yet, the International Skilled Worker category is usually the better fit.
          </p>
          <DataTable
            headers={["Feature", "Saskatchewan Experience", "International Skilled Worker"]}
            rows={[
              ["Built for", "Workers already in Saskatchewan", "Candidates inside or outside Canada"],
              ["Must be in the province?", "Yes, on a valid work permit", "No"],
              ["Job offer", "Required (current SK employer)", "Required for some routes only"],
              ["Selection method", "Direct application by sub-category", "Expression of Interest pool (110 points)"],
              ["Enhanced option?", "No, base only", "Yes, Saskatchewan Express Entry sub-category"],
            ]}
            caption="Saskatchewan Experience vs International Skilled Worker category (saskatchewan.ca, May 2026)."
          />

          <h2>How do you apply for the Saskatchewan Experience category?</h2>
          <p>
            <strong>How to apply for the Saskatchewan Experience category</strong> follows a direct, application-based
            sequence rather than an Expression of Interest draw. The steps below show the path from confirming your
            sub-category to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm your sub-category", desc: "Identify which route fits, Existing Work Permit, Health Professionals, Hospitality Sector, Long-Haul Truck Driver or Students, and check its specific rules." },
              { title: "Check eligibility & status", desc: "Confirm your valid work permit, your months of Saskatchewan work, a permanent job offer from your employer and your occupation's eligibility." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, then collect your work permit, job offer, SINP Job Approval Letter, experience and education evidence." },
              { title: "Submit your SINP application", desc: "Create your SINP profile and submit a complete Saskatchewan Experience application with supporting documents for your sub-category." },
              { title: "Receive a nomination", desc: "If Saskatchewan approves your application, it nominates you for permanent residence. Eligibility alone does not guarantee this outcome." },
              { title: "Apply to IRCC for permanent residence", desc: "Because this is a base route, file a separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="info" title="This is a base nomination">
            A Saskatchewan Experience nomination does not add 600 CRS points. Once nominated, you submit a separate
            paper application to IRCC for permanent residence, which generally takes longer than an enhanced Express
            Entry application. Plan for several months across the provincial and federal stages: the Existing Work
            Permit nomination at the SINP stage comes first, then a longer IRCC PR stage. Confirm current
            processing times on saskatchewan.ca and canada.ca.
          </Callout>

          <h2>How Wild Mountain helps with your Saskatchewan Experience application</h2>
          <p>
            We assess your profile against Saskatchewan&apos;s current rules, identify the sub-category, Existing Work
            Permit, Health Professionals, Hospitality Sector, Long-Haul Truck Driver or Students, with the strongest
            realistic chance, and confirm your work permit, months of in-province experience and job offer all meet the
            SINP&apos;s standards. As a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (#R706497), our team prepares a nomination
            application that stands up to scrutiny and represents you with the province and with IRCC. We catch the
            avoidable mistakes, a wrong occupation code, a language band one short, a status gap, that cause refusals.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Saskatchewan Experience category application an expert check before you submit. Figures here are current to
            May 2026 and change, so we always confirm the live saskatchewan.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Already working in Saskatchewan? Find your route to PR"
        sub="Get started with a licensed RCIC for an honest read on which Saskatchewan Experience sub-category fits your profile and how to apply."
      />
    </>
  );
}
