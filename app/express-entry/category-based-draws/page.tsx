import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/express-entry/category-based-draws";
const UPDATED = "May 2026";
const ROUNDS_URL =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html";

export const metadata: Metadata = pageMeta({
  title: "Express Entry Category-Based Draws 2026",
  titleAbsolute: "Express Entry Category-Based Draws 2026",
  description:
    "Express Entry category-based draws 2026: the targeted categories, the new 12-month experience rule and recent cut-offs. Reviewed by a licensed RCIC.",
  path: PATH,
  keywords: [
    "express entry category-based draws 2026",
    "category-based selection",
    "healthcare category draw",
    "french category draw",
    "trades category draw",
    "STEM category",
  ],
});

const faqs = [
  {
    q: "What are Express Entry category-based draws?",
    a: "Category-based draws are rounds of invitations where IRCC invites Express Entry candidates who belong to a targeted category, such as healthcare, the trades, or French-language speakers, instead of inviting the highest-scoring candidates overall. Because the pool is narrowed to one category, the CRS cut-off is usually lower than a general round, so candidates with more modest scores can still receive an Invitation to Apply.",
  },
  {
    q: "What categories are being targeted in 2026?",
    a: "For 2026 the published categories are French-language proficiency, Healthcare and social services, Trades, STEM occupations and Education, plus newer additions including Senior Managers, Researchers, Transport, Skilled Military and Physicians. IRCC sets the eligible occupation (NOC) lists each year, so always confirm the current categories and codes on the IRCC rounds-of-invitations page before relying on them.",
  },
  {
    q: "Do I need 12 months of experience to qualify in 2026?",
    a: "For most 2026 categories, yes. IRCC moved the qualifying-experience threshold for occupation-based categories to at least 12 months of eligible work experience (up from the earlier six-month rule) in the past three years. The French-language proficiency category is based on test results rather than a single occupation. Requirements can change between draws, so verify the exact threshold for your category on canada.ca.",
  },
  {
    q: "Is the STEM category still being used in 2026?",
    a: "STEM remains a named category for 2026, but it has been quiet. No dedicated STEM round has been observed for some time, and many STEM candidates are invited instead through Canadian Experience Class rounds. Treat STEM draws as possible but not guaranteed, and keep your profile competitive for CEC as well.",
  },
  {
    q: "Are there general all-program draws in 2026?",
    a: "As of the most recent 2026 rounds, IRCC had not held a general all-program draw. Every invitation came through either a program-specific round (such as Canadian Experience Class or Provincial Nominee Program) or a category-based round. This is why belonging to a targeted category matters more than ever in 2026.",
  },
  {
    q: "How do I find out if I am in a targeted category?",
    a: "Eligibility comes down to your work experience in an eligible NOC code (and the required months), or your French test results for the French category. Your Express Entry profile must show the qualifying experience clearly. A Regulated Canadian Immigration Consultant can check your NOC classification and experience evidence so you are correctly flagged for the categories you qualify for.",
  },
  {
    q: "Does a category draw replace my CRS score?",
    a: "No. You still need a competitive CRS score within the targeted category, because IRCC ranks eligible candidates by CRS and sets a cut-off. The advantage is that the cut-off is drawn only from candidates in that category, which is typically lower than a general round. Improving your CRS still helps; our free CRS calculator shows where you stand.",
  },
];

export default function CategoryBasedDrawsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Express Entry Category-Based Draws 2026, RCIC Guide",
            description:
              "Express Entry category-based draws 2026: the targeted categories, the new 12-month experience rule and recent cut-offs. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Express Entry category-based draw support",
            description:
              "Express Entry category-based draws 2026: the targeted categories, the new 12-month experience rule and recent cut-offs. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Express Entry immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Express Entry", path: "/express-entry" },
          { name: "Category-Based Draws", path: PATH },
        ]}
        title={<>Express Entry <span className="text-brand">category-based draws</span> in 2026</>}
        lede={
          <p>
            <strong>Express Entry category-based draws</strong> let IRCC invite candidates in targeted categories, like
            healthcare, trades and French speakers, at a lower CRS cut-off than a general round, so a more modest score
            can still earn an Invitation to Apply in 2026.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Are you in a targeted category?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Get an honest read on your CRS score and category eligibility from a licensed RCIC.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry (overview)", href: "/express-entry", note: "The full 2026 pillar guide" },
                { label: "Rounds of invitations", href: "/express-entry/draws", note: "Every 2026 draw, explained" },
                { label: "Comprehensive Ranking System", href: "/express-entry/comprehensive-ranking-system", note: "How your CRS score is built" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "Two minutes, no email" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Express Entry category-based draws invite candidates who have specific skills, work experience or French-language ability that Canada is prioritising, rather than ranking the whole pool by score alone. IRCC sets the eligible categories each year, and the CRS cut-off in a category draw is often lower than in a general draw. Candidates selected in these draws are invited to apply for permanent residence. Categories and cut-offs change over time."
            items={[
              <>Category-based draws invite candidates in <strong>targeted categories</strong> at a lower CRS cut-off than a general round.</>,
              <>The <strong>2026 categories</strong> include French, Healthcare &amp; social services, Trades, STEM and Education, plus new additions like Senior Managers, Researchers, Transport, Skilled Military and Physicians.</>,
              <>Most 2026 categories now require <strong>at least 12 months</strong> of qualifying work experience.</>,
              <>No <strong>general all-program draws</strong> have been observed in 2026. Invitations now come through program-specific or category rounds.</>,
              <>You still need a competitive CRS score, but the cut-off is drawn only from your category, which helps <strong>lower-CRS candidates</strong>.</>,
            ]}
          />

          <h2>What are Express Entry category-based draws (category-based selection)?</h2>
          <p>
            Express Entry category-based draws, the rounds IRCC formally calls category-based selection, are rounds of
            invitations in which IRCC invites candidates who belong to a specific, in-demand category, rather than simply
            inviting the highest-scoring profiles in the whole pool. IRCC introduced category-based selection in 2023 to
            target occupations and skills the Canadian labour market needs most.</p>
          <p>In a recent 2026 example, IRCC issued <strong>4,000 invitations in a single Healthcare and social
            services round at a CRS cut-off of 467</strong> (source: IRCC rounds of invitations, canada.ca, 2026), well
            below the high-500s seen in Canadian Experience Class rounds the same year.
          </p>
          <p>
            The mechanics are simple: IRCC announces a category, then ranks only the eligible candidates by their{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a> score and sets a
            cut-off. Because the pool is narrowed to one category, that cut-off is usually lower than a general round.
            That is the whole point. It lets Canada pull in nurses, tradespeople, French speakers and other priority
            profiles who might otherwise wait a long time behind higher-scoring generalists.
          </p>

          <h2>Which categories is IRCC targeting in 2026?</h2>
          <p>
            For 2026, IRCC is running category-based selection across the established categories plus several newer
            additions. The core categories carried into 2026 are French-language proficiency, Healthcare and social
            services, Trades, STEM occupations and Education. The 2026 additions broaden the targeting to Senior
            Managers, Researchers, Transport, Skilled Military and Physicians. Each category maps to a defined list of
            National Occupational Classification (NOC) codes, and those lists are reviewed every year, so they must be
            verified against the live IRCC page before you rely on them.
          </p>
          <DataTable
            headers={["2026 category", "Who it targets", "Basis"]}
            rows={[
              ["French-language proficiency", "Strong French speakers (NCLC 7+ across all four abilities)", "Language test results"],
              ["Healthcare & social services", "Nurses, physicians, care and social-service roles", "Eligible NOC codes"],
              ["Trades", "Construction and skilled-trade occupations", "Eligible NOC codes"],
              ["STEM", "Science, technology, engineering and maths roles", "Eligible NOC codes"],
              ["Education", "Teachers and education-sector occupations", "Eligible NOC codes"],
              ["Senior Managers (2026)", "Senior management occupations", "Eligible NOC codes"],
              ["Researchers (2026)", "Research-focused occupations", "Eligible NOC codes"],
              ["Transport (2026)", "Transport-sector occupations", "Eligible NOC codes"],
              ["Skilled Military (2026)", "Candidates with skilled military experience", "Eligible NOC codes"],
              ["Physicians (2026)", "Physicians and specialist medical roles", "Eligible NOC codes"],
            ]}
            caption="2026 Express Entry category-based selection categories (IRCC). Occupation lists are reviewed yearly, verify live."
          />
          <p>
            A quick word on the <strong>STEM category</strong>: although STEM is still a named category for 2026, it has
            been quiet, with no dedicated STEM round observed for some time. Many STEM candidates are invited instead
            through Canadian Experience Class rounds. Treat a STEM category draw as possible but not guaranteed, and keep
            your profile competitive for CEC as well.
          </p>

          <h2>How does the new 12-month experience rule work?</h2>
          <p>
            The most important 2026 change is the qualifying-experience threshold. For most occupation-based categories,
            IRCC now requires at least <strong>12 months of eligible work experience</strong> in the past three years, up from the earlier six-month rule. This applies to categories such as Healthcare and social services, the
            Trades and STEM. The French-language proficiency category is the exception: it is based on your French test
            results (NCLC 7 or higher across reading, writing, listening and speaking) rather than a single occupation.
          </p>
          <Callout type="warning" title="Verify the threshold for your category">
            Category rules, eligible NOC codes and the exact experience requirement can change between draws. Always
            confirm the current threshold for your specific category on the{" "}
            <a href={ROUNDS_URL} target="_blank" rel="noopener noreferrer">IRCC rounds-of-invitations page</a> before
            relying on it.
          </Callout>

          <h2>How are candidates selected in a category draw?</h2>
          <p>
            Selection in an Express Entry category-based draw follows a clear sequence. First, you must already be in the
            Express Entry pool, eligible for Federal Skilled Worker, Federal Skilled Trades or Canadian Experience
            Class. Second, your profile must show that you meet the category criteria: the right NOC code and the
            required months of experience, or qualifying French results. Third, IRCC ranks all eligible candidates in
            that category by CRS and invites from the top down to a cut-off.
          </p>
          <p>
            These occupation-targeted draws run alongside program-specific rounds: throughout 2026 IRCC has held regular
            Canadian Experience Class draws (CEC draws) for in-Canada workers, so a strong profile can be invited through
            either route. Each occupation-based category maps to a defined eligible NOC list for 2026, which IRCC reviews
            yearly, so confirm your code appears on the current list before counting on a category round.
          </p>
          <p>
            In practice, the work is in the evidence. Your Express Entry profile has to classify your experience under
            the correct NOC, and your reference letters and timelines need to prove the qualifying months cleanly. A
            mis-stated NOC code or a gap in your experience evidence can quietly exclude you from a category you actually
            qualify for. As a licensed RCIC, we check exactly this before you submit.
          </p>

          <h2>What are the recent 2026 category cut-offs?</h2>
          <p>
            The table below shows a selection of recent 2026 rounds, including category-based and program-specific draws
            for context. These figures change with every draw, so treat them as a snapshot rather than a target, always
            check the live IRCC rounds page for the latest cut-offs.
          </p>
          <DataTable
            headers={["Date (2026)", "Category / round", "Invitations", "CRS cut-off"]}
            rows={[
              ["May 28", "French-language proficiency", "4,500", "409"],
              ["Apr 2", "Trades", "3,000", "477"],
              ["Mar 5", "Senior Managers", "250", "429"],
              ["Feb 20", "Healthcare & social services", "4,000", "467"],
              ["Feb 19", "Physicians", "391", "169"],
              ["May 27", "Canadian Experience Class (for comparison)", "3,000", "518"],
              ["May 25", "Provincial Nominee Program (for comparison)", "334", "805"],
            ]}
            caption="Illustrative 2026 rounds of invitations (IRCC). Figures change each draw, verify on the IRCC rounds page."
          />
          <p>
            The pattern is striking. Category rounds such as French (409) and Physicians (169) sit far below the Canadian
            Experience Class cut-off of 518 in the same period, and the Provincial Nominee Program figure of 805 simply
            reflects the +600 points a nomination adds. As of the most recent 2026 rounds, <strong>IRCC had not held a
            general all-program draw</strong>. Every invitation came through a program-specific or category-based round.
          </p>

          <h2>Why do category draws help lower-CRS candidates?</h2>
          <p>
            Category-based draws help lower-CRS candidates because the cut-off is drawn only from candidates inside the
            targeted category, not from the entire pool. If general rounds were sitting in the high 500s, a healthcare or
            French candidate in the 400s would never be invited in a general round, but a category draw resets the
            ranking to just that group, bringing the cut-off down to where they can compete. The 2026 examples above show
            cut-offs from the 160s to the 470s for category rounds.
          </p>
          <p>
            This does not mean CRS no longer matters. You still need to rank within your category, so improving your
            language scores, education or Canadian experience still helps. Our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> uses the current official grid and takes about two
            minutes, so you can see exactly where you stand before a draw.
          </p>

          <h2>How Wild Mountain helps you target a category draw</h2>
          <p>
            We start by confirming the categories you genuinely qualify for, checking your NOC classification, your
            qualifying months and, for the French category, your test results. Then we build your Express Entry profile
            so that eligibility is unambiguous, and we work on the CRS levers that move you up the ranking inside your
            category. Working under a licensed RCIC (CICC #R706497), our team represents you with IRCC and catches the
            small evidence problems that quietly cost people invitations: ambiguous reference letters, the wrong NOC and
            gaps in your timeline.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own profile
            an expert check before the next Express Entry category-based draw, so you go into each IRCC draw with your
            NOC, experience evidence and CRS levers in order.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Find out which category draw fits you"
        sub="Get started with a licensed RCIC for an honest read on your CRS score and category eligibility."
      />
    </>
  );
}
