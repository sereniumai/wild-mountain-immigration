import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/saskatchewan/international-skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Saskatchewan International Skilled Worker (SINP)",
  titleAbsolute: "SINP International Skilled Worker 2026",
  description:
    "Saskatchewan International Skilled Worker (SINP) 2026: EOI 60-point floor, sub-categories, language CLB 4+, settlement funds and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Saskatchewan International Skilled Worker",
    "SINP Employment Offer",
    "SINP Occupation In-Demand",
    "SINP Express Entry sub-category",
    "SINP Expression of Interest",
  ],
});

const faqs = [
  {
    q: "What is the Saskatchewan International Skilled Worker category?",
    a: "The Saskatchewan International Skilled Worker (ISW) category is the SINP route for skilled workers living outside Canada who want to be nominated for permanent residence in Saskatchewan. It has three sub-categories, Employment Offer, Occupation In-Demand and Saskatchewan Express Entry, and most applicants are scored against an Expression of Interest (EOI) points grid out of 110, with 60 the minimum to be eligible. Reaching 60 is an eligibility floor, not a guarantee of an invitation. Because the grid and criteria change, always confirm the current rules on saskatchewan.ca before relying on a score.",
  },
  {
    q: "Do I need a job offer for the International Skilled Worker category?",
    a: "It depends on the sub-category. The Employment Offer sub-category requires a permanent, full-time job offer from an eligible Saskatchewan employer who holds an approved job approval letter. The Occupation In-Demand sub-category was designed for candidates without a job offer whose occupation matches a Saskatchewan in-demand list, though its EOI draws have been paused since late 2024. The Saskatchewan Express Entry sub-category does not require a job offer but you must hold a valid federal Express Entry profile. We assess which route your profile actually qualifies for.",
  },
  {
    q: "What is the minimum SINP points score for skilled workers?",
    a: "The SINP Expression of Interest grid is scored out of 110 points, and you must reach at least 60 points to be eligible to enter the International Skilled Worker pool. Points come from your education and training, skilled work experience, language ability, age and your connection to Saskatchewan. Reaching 60 only places you in the pool. When Saskatchewan runs an EOI draw, it invites the highest-ranked profiles, and cut-offs can sit well above the 60-point floor. Always confirm the current grid on saskatchewan.ca, because both the grid and cut-offs change.",
  },
  {
    q: "What is the difference between enhanced and base in the ISW category?",
    a: "The Saskatchewan Express Entry sub-category is enhanced: you must already hold a valid federal Express Entry profile, and a Saskatchewan nomination through this route adds 600 points to your Comprehensive Ranking System score, well above recent federal cut-offs, though IRCC still issues the Invitation to Apply at a following draw. The Employment Offer and Occupation In-Demand sub-categories are base (paper) streams: once nominated, you submit a separate permanent-residence application directly to IRCC, with no CRS boost. The underlying enhanced EOI draws have been paused since late 2024, so many candidates use a base route instead.",
  },
  {
    q: "What language level do I need for the SINP skilled worker category?",
    a: "You need an approved language test showing at least Canadian Language Benchmark (CLB) 4 across all four abilities, reading, writing, listening and speaking, for most occupations, with the Saskatchewan Express Entry sub-category requiring CLB 7 to align with federal minimums. Regulated or higher-skilled occupations may set a higher bar. The level is measured on your lowest of four abilities, so a single weak skill can drop you below the threshold. Approved test results are valid for two years. Confirm the current requirement for your occupation on saskatchewan.ca.",
  },
  {
    q: "How much settlement money do I need for the SINP?",
    a: "Saskatchewan requires International Skilled Worker applicants to show enough settlement funds to support themselves and their family after arriving, scaled to family size and broadly tracking the federal low-income cut-off. The funds must be available, unencumbered and yours, typically shown through bank statements, and you may also need a settlement plan. Candidates already living and working in Saskatchewan on a valid work permit can sometimes be exempt. Thresholds change with family size and over time, so verify the current amount on saskatchewan.ca before you apply.",
  },
  {
    q: "Are the International Skilled Worker EOI draws still running in 2026?",
    a: "The position is mixed. Saskatchewan's International Skilled Worker EOI draws, for the Occupation In-Demand and Saskatchewan Express Entry sub-categories, have been paused since late 2024 and remain dormant in 2026. They have not been formally closed, so profiles can still sit in the pool, but you should not assume a draw is imminent. The Employment Offer sub-category accepts direct applications without a draw, and the sector Talent Pathways accept employer-driven applications during their intake windows. We can tell you which currently active route fits your profile.",
  },
];

export default function InternationalSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Saskatchewan International Skilled Worker (SINP), 2026 RCIC Guide",
            description:
              "Saskatchewan International Skilled Worker (SINP) 2026: EOI 60-point floor, sub-categories, language CLB 4+, settlement funds and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "SINP International Skilled Worker application support",
            description:
              "Saskatchewan International Skilled Worker (SINP) 2026: EOI 60-point floor, sub-categories, language CLB 4+, settlement funds and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Saskatchewan (SINP)"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Saskatchewan (SINP)", path: "/pnp/saskatchewan" },
          { name: "International Skilled Worker", path: PATH },
        ]}
        title={<>Saskatchewan <span className="text-brand">International Skilled Worker</span></>}
        lede={
          <p>
            The <strong>Saskatchewan International Skilled Worker</strong> category is for skilled workers abroad seeking
            PR. This RCIC-reviewed guide covers its three sub-categories, the Expression of Interest points floor,
            eligibility and exactly how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the ISW category right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With SINP EOI draws paused, choosing the right active sub-category matters. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "Saskatchewan (SINP) overview", href: "/pnp/saskatchewan", note: "Every SINP stream explained" },
                { label: "Saskatchewan Experience", href: "/pnp/saskatchewan/saskatchewan-experience", note: "For people already in the province" },
                { label: "Tech Talent Pathway", href: "/pnp/saskatchewan/tech-talent-pathway", note: "Tech jobs with a SK offer" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Saskatchewan International Skilled Worker category is the SINP route for skilled workers outside Canada seeking a provincial nomination toward permanent residence. It suits candidates ranked in an Expression of Interest pool and runs in three sub-categories: Employment Offer (base), Occupation In-Demand (base) and Saskatchewan Express Entry (enhanced). A nomination supports a PR application to IRCC, and the enhanced Saskatchewan Express Entry option adds 600 CRS points to your federal profile."
            items={[
              <>The <strong>Saskatchewan International Skilled Worker</strong> category is for skilled workers <strong>outside Canada</strong> seeking a SINP nomination for permanent residence.</>,
              <>It has three sub-categories: <strong>Employment Offer</strong> (base), <strong>Occupation In-Demand</strong> (base) and <strong>Saskatchewan Express Entry</strong> (enhanced, +600 CRS).</>,
              <>Skilled applicants enter an <strong>Expression of Interest (EOI) pool</strong> scored out of <strong>110 points</strong>, with <strong>60</strong> the minimum to be eligible.</>,
              <>Core eligibility: <strong>language CLB 4+</strong>, an <abbr title="Educational Credential Assessment">ECA</abbr>-verified education, skilled work experience and <strong>settlement funds</strong>.</>,
              <>The <strong>Occupation In-Demand and Express Entry EOI draws have been paused since late 2024</strong>, dormant, but not formally closed.</>,
            ]}
          />

          <h2>What is the Saskatchewan International Skilled Worker category?</h2>
          <p>
            The <strong>Saskatchewan International Skilled Worker</strong> (ISW) category is the SINP route for skilled
            workers who live <em>outside</em> Canada and want the province to nominate them for permanent residence based
            on the occupations Saskatchewan needs. It is the SINP&apos;s main skilled-worker category and is split into
            three sub-categories, <strong>Employment Offer</strong>, <strong>Occupation In-Demand</strong> and{" "}
            <strong>Saskatchewan Express Entry</strong>, most of which rank candidates through an{" "}
            <strong>Expression of Interest (EOI)</strong> pool. Saskatchewan&apos;s 2026 nomination allocation is about{" "}
            <strong>4,761</strong>, well below the roughly 8,000 it had in 2024, after IRCC reduced provincial
            allocations nationwide (source: saskatchewan.ca / IRCC, May 2026). With fewer spaces, the province has
            reserved roughly half of its nominations for priority sectors.
          </p>
          <Callout type="brand" title="The ISW category is for skilled workers abroad">
            The International Skilled Worker category is built for candidates outside Canada. If you are already living,
            working or studying in Saskatchewan, the{" "}
            <a href="/pnp/saskatchewan/saskatchewan-experience">Saskatchewan Experience</a> category is usually the better
            fit. A profile review confirms which route applies to you.
          </Callout>

          <h2>What are the three International Skilled Worker sub-categories?</h2>
          <p>
            The International Skilled Worker category contains three sub-categories that behave very differently. The{" "}
            <strong>SINP Employment Offer</strong> sub-category is a base route for candidates who hold a permanent,
            full-time job offer from an eligible Saskatchewan employer. The <strong>Occupations In-Demand</strong>{" "}
            sub-category is a base route for candidates <em>without</em> a job offer whose occupation matches the
            SINP in-demand occupation list. The <strong>Saskatchewan Express Entry</strong> sub-category is the enhanced,
            federally aligned route. The table below summarises each.
          </p>
          <DataTable
            headers={["Sub-category", "Who it's for", "Type & 2026 status"]}
            rows={[
              ["Employment Offer", "Candidates with a permanent, full-time offer from an eligible Saskatchewan employer holding a job approval letter", "Base, direct application, no draw; open"],
              ["Occupation In-Demand", "Candidates without a job offer whose occupation matches a Saskatchewan in-demand list", "Base, EOI draws paused since late 2024"],
              ["Saskatchewan Express Entry", "Candidates with a valid federal Express Entry profile (job offer not required)", "Enhanced, +600 CRS; EOI draws paused since late 2024"],
            ]}
            caption="SINP International Skilled Worker sub-categories (saskatchewan.ca, 2026). Eligibility does not guarantee an invitation; statuses change, verify live."
          />
          <Callout type="warning" title="Two ISW EOI draws are paused, but not closed">
            Saskatchewan&apos;s Occupation In-Demand and Saskatchewan Express Entry EOI draws have been paused since late
            2024 and remain dormant in 2026. They are <strong>not formally closed</strong>, so profiles can still sit in
            the pool, but a draw is not guaranteed. The Employment Offer route accepts direct applications in the
            meantime.
          </Callout>

          <h2>How is the SINP Expression of Interest scored?</h2>
          <p>
            Skilled applicants are ranked through the <strong>SINP Expression of Interest (EOI)</strong>, a profile scored
            against a points grid out of <strong>110 points</strong>, with <strong>60</strong> the minimum to be eligible
            to enter the pool. You create a free EOI profile, Saskatchewan scores it, and the province invites the
            highest-ranked profiles in periodic draws. Reaching 60 is an eligibility floor, not a guarantee. With the
            2026 allocation reduced, a draw cut-off can sit well above 60. No SINP draw has been published in 2026 for the
            paused sub-categories, so there is no live cut-off to target right now. Points come from
            your education and training, skilled work experience, language ability, age and your connection to
            Saskatchewan. There is no official SINP points calculator, but our team scores your grid by hand. Not sure how
            your federal score compares? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <DataTable
            headers={["EOI factor", "What it measures", "Maximum points"]}
            rows={[
              ["Education & training", "Highest completed credential, ECA-verified for foreign education", "23"],
              ["Skilled work experience", "Recent skilled experience in your field, in Canada and abroad", "23"],
              ["Language ability", "Your approved test result, scored on the lowest of four CLB abilities", "23"],
              ["Age", "Highest in the prime working-age band", "12"],
              ["Connection to Saskatchewan", "Job offer, prior study, work or close family in the province", "30"],
            ]}
            caption="Illustrative SINP Expression of Interest grid summary (saskatchewan.ca, 2026); total 110, minimum 60. The official grid controls and changes, verify before relying on figures."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The CLB level is taken from the lowest of your four abilities, reading, writing, listening and speaking, so
            a single weak skill can both drop your points and put you below your occupation&apos;s threshold. Lifting your
            weakest band is often the single most valuable thing you can do before submitting your EOI.
          </Callout>

          <h2>What are the International Skilled Worker eligibility requirements?</h2>
          <p>
            <strong>Saskatchewan International Skilled Worker eligibility</strong> rests on a connected set of
            requirements you must meet when you submit your EOI or application. Miss any one of them, such as a language
            band that falls short, an occupation outside <abbr title="National Occupational Classification">NOC</abbr> TEER 0–3,
            or missing settlement funds, and the application can be refused. The table below summarises the core 2026 requirements; for the
            settlement money, saskatchewan.ca publishes a proof of funds table by family size, which the official,
            controlling list mirrors and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the ISW category asks for"]}
            rows={[
              ["EOI points", "At least 60 of 110 on the Expression of Interest grid to be eligible to enter the pool"],
              ["Language", "Approved test at CLB 4+ across all four abilities for most occupations; CLB 7 for the Saskatchewan Express Entry sub-category; valid 2 years"],
              ["Education", "Post-secondary, trade or other credential; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Work experience", "Recent, skilled work experience in a high-skilled occupation (generally NOC TEER 0–3) that matches your field"],
              ["Settlement funds", "Proof of funds scaled to family size, plus a settlement plan, unless exempt as a worker already in Saskatchewan"],
              ["Job offer / EE profile", "A permanent SK job offer (Employment Offer), an in-demand occupation (Occupation In-Demand), or a valid Express Entry profile (Saskatchewan Express Entry)"],
            ]}
            caption="SINP International Skilled Worker core eligibility, accurate as of May 2026 (saskatchewan.ca). Requirements change, verify the official criteria before applying."
          />

          <h2>How does enhanced (Express Entry) differ from base?</h2>
          <p>
            The clearest way to understand the ISW category is to contrast its enhanced and base routes. The{" "}
            <strong>Saskatchewan Express Entry</strong> sub-category is <em>enhanced</em>: you must already hold a valid
            federal Express Entry profile, and a nomination through this route adds <strong>600 CRS
            points</strong> to your Comprehensive Ranking System score, well above recent federal cut-offs. IRCC still issues the Invitation to Apply at a
            following draw. The <strong>Employment Offer</strong> and <strong>Occupation In-Demand</strong>{" "}
            sub-categories are <em>base</em> (paper) streams: once nominated, you submit a separate permanent-residence
            application directly to IRCC, with no CRS boost.
          </p>
          <DataTable
            headers={["Feature", "Saskatchewan Express Entry", "Employment Offer / Occupation In-Demand"]}
            rows={[
              ["Stream type", "Enhanced", "Base"],
              ["Express Entry profile", "Required", "Not required"],
              ["Effect of nomination", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["Job offer", "Not required", "Required (Employment Offer); not required (Occupation In-Demand)"],
              ["2026 draw status", "Paused since late 2024", "Employment Offer open; Occupation In-Demand paused"],
            ]}
            caption="Enhanced vs base within the SINP International Skilled Worker category (saskatchewan.ca, 2026)."
          />

          <h2>How to apply for the International Skilled Worker category step by step</h2>
          <p>
            <strong>How to apply for the Saskatchewan International Skilled Worker</strong> category follows a clear
            sequence. For the EOI-based routes you submit a free Expression of Interest and wait for an invitation; for the
            Employment Offer route, eligible candidates can apply directly without a draw. The steps below show the path
            from confirming eligibility to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm your sub-category & eligibility", desc: "Check whether you fit Employment Offer, Occupation In-Demand or Saskatchewan Express Entry, and that you meet the language, education, experience and settlement-fund bars." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, obtain an ECA for foreign education, and collect work-experience, job-offer and proof-of-funds evidence." },
              { title: "Create your EOI profile", desc: "Build your Expression of Interest (free) so Saskatchewan can score it out of 110, you must reach at least 60 points to be eligible to enter the pool." },
              { title: "Apply or wait for an invitation", desc: "For the Employment Offer route, apply directly. For Occupation In-Demand or Express Entry, your profile waits for an EOI draw, currently paused, so timing is uncertain." },
              { title: "Submit your nomination application", desc: "If invited or eligible to apply, submit a complete SINP application with supporting documents; submitting an EOI and applying carry no provincial fee at present." },
              { title: "Apply to IRCC for permanent residence", desc: "Once nominated, apply to IRCC, through Express Entry if enhanced (+600 CRS), or on paper if base. IRCC makes the final decision." },
            ]}
          />

          <h2>How long does the International Skilled Worker category take?</h2>
          <p>
            <strong>How long the International Skilled Worker category takes</strong> depends on the stage. For EOI routes,
            waiting for an invitation hinges on your points score and the pace of draws, and with the Occupation
            In-Demand and Saskatchewan Express Entry draws paused, that timing is uncertain in 2026. After you submit a
            complete nomination application, the SINP application processing time is often a matter of weeks, though it
            varies by route and volume. Once nominated, an enhanced Express Entry application to IRCC is processed in roughly six
            months, while a base, paper-based application generally takes longer. Most applicants should plan for several
            months to the better part of a year overall (source: saskatchewan.ca and IRCC processing times, 2026).
          </p>

          <h2>How Wild Mountain helps with your SINP skilled worker application</h2>
          <p>
            We assess your profile against Saskatchewan&apos;s current priorities, calculate your EOI points, and steer
            you toward the sub-category, Employment Offer, Occupation In-Demand or Saskatchewan Express Entry, with the
            strongest realistic chance while the EOI draws remain paused. As a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>, our team prepares an Expression of Interest
            and nomination application that stands up to scrutiny and represents you with the province and with IRCC. We
            catch the avoidable mistakes, a wrong NOC code, a language band one short, missing settlement funds, that
            cause refusals.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            International Skilled Worker application an expert check before you submit. Figures here are
            current to 2026 and change, so we always confirm the live saskatchewan.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Ready to apply through the International Skilled Worker category?"
        sub="Get started with a licensed RCIC for an honest read on your SINP Expression of Interest points and the strongest sub-category to permanent residence in Saskatchewan."
      />
    </>
  );
}
