import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/comprehensive-ranking-system";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Comprehensive Ranking System (CRS)",
  titleAbsolute: "Comprehensive Ranking System (CRS) 2026",
  description:
    "The Comprehensive Ranking System (CRS) explained: how the points formula ranks Express Entry profiles out of 1,200, with the 2026 breakdown. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "comprehensive ranking system",
    "comprehensive ranking system crs",
    "how the CRS works",
    "CRS score explained",
    "CRS points breakdown 2026",
    "express entry crs",
  ],
});

const faqs = [
  {
    q: "How does the CRS actually work?",
    a: "The Comprehensive Ranking System scores your Express Entry profile out of 1,200 points across four sections: core human capital, spouse factors, skill transferability and additional points. IRCC ranks every profile in the pool by total score, then invites the highest-ranked candidates in each draw. There is no fixed pass mark, the cut-off is set by where the last invited candidate lands.",
  },
  {
    q: "What is a good CRS score in 2026?",
    a: "A good score depends on the draw. In 2026, Canadian Experience Class rounds have cut off around 507–518, while category-based draws have invited candidates from the high 100s (physicians) to the 400s (French, healthcare, trades). A general profile above 510 is competitive, but a lower score can still win an invitation through a category draw or a provincial nomination.",
  },
  {
    q: "How many CRS points is a provincial nomination worth?",
    a: "A provincial nomination through an enhanced (Express Entry) Provincial Nominee Program adds 600 CRS points. That single factor lifts almost any profile above the cut-off, which is why PNP-specific draws show very high scores. It is the largest score booster available since job-offer points were removed in 2025.",
  },
  {
    q: "Do I still get CRS points for a job offer?",
    a: "No. IRCC removed all arranged-employment (job-offer) CRS points on March 25, 2025. A valid job offer no longer adds 50 or 200 points. A job offer can still help you qualify for a Provincial Nominee Program, which adds 600 CRS points, but it no longer scores anything directly in the CRS.",
  },
  {
    q: "What is the difference between core human capital and skill transferability?",
    a: "Core human capital scores your age, education, language and Canadian work experience on their own. Skill transferability rewards strong combinations, for example, good language plus a credential, or foreign experience plus Canadian experience, because the combination predicts better outcomes. Transferability is capped at 100 points, so you cannot stack every combination.",
  },
  {
    q: "Can I improve my CRS score before a draw?",
    a: "Yes. The fastest gains usually come from retaking a language test to reach a higher CLB level, claiming a second official language, adding Canadian work experience, or pursuing a provincial nomination. An Educational Credential Assessment for foreign study and accurate spouse points also help. Our free CRS calculator shows where your points sit so you can target the right area.",
  },
];

export default function ComprehensiveRankingSystemPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Comprehensive Ranking System (CRS) Explained, Express Entry 2026",
            description:
              "The Comprehensive Ranking System (CRS) explained: how the points formula ranks Express Entry profiles out of 1,200, with the 2026 breakdown. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "CRS score optimisation",
            description: "How the CRS works: the Comprehensive Ranking System explained, with the 2026 CRS points breakdown across all four sections. RCIC-reviewed.",
            path: PATH,
            serviceType: "Express Entry CRS consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Express Entry", path: "/express-entry" },
          { name: "Comprehensive Ranking System", path: PATH },
        ]}
        title={<>The Comprehensive Ranking <span className="text-brand">System (CRS)</span></>}
        lede={
          <p>
            The <strong>Comprehensive Ranking System (CRS)</strong> is the points formula that scores your Express
            Entry profile out of 1,200, ranks you against everyone else in the pool, and decides who is invited in each
            draw. This guide explains how the CRS works and breaks down exactly how each point is awarded in 2026.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Calculate your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free CRS Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">See your exact CRS points breakdown in two minutes, no email required.</p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry overview", href: "/express-entry", note: "The full 2026 guide" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "The most common in-Canada route" },
                { label: "Federal Skilled Worker", href: "/express-entry/federal-skilled-worker", note: "For skilled foreign experience" },
                { label: "CRS calculator", href: "/tools/crs-calculator", note: "Score your profile now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Comprehensive Ranking System (CRS) is the points-based formula Canada uses to rank Express Entry candidates out of 1,200. It scores your profile across four sections: core human capital, spouse factors, skill transferability and additional points. Core factors cover age, education, language and Canadian experience, while boosters such as a provincial nomination add extra points. The highest-ranked candidates above each draw's cut-off are invited to apply for permanent residence, and that cut-off changes from draw to draw."
            items={[
              <>The <strong>CRS scores your profile out of 1,200 points</strong> across four sections and ranks you against the whole pool.</>,
              <>Core human capital (age, education, language, Canadian experience) is worth up to <strong>500 points</strong> on its own.</>,
              <>A <strong>provincial nomination adds 600 points</strong>, the single biggest booster in the additional-points section.</>,
              <><strong>Skill transferability is hard-capped at 100 points</strong>, so you cannot stack every combination of factors.</>,
              <><strong>Job-offer CRS points were removed on 25 March 2025</strong>, older guides listing 50 or 200 points are out of date.</>,
            ]}
          />

          <h2>How does the CRS work?</h2>
          <p>
            The Comprehensive Ranking System (CRS) is the points formula IRCC uses to rank every Express Entry profile.
            It awards up to <strong>1,200 points</strong> across four sections, totals your score, and places you in a
            pool with every other candidate. Roughly every two weeks IRCC holds a draw and issues an Invitation to Apply
            (ITA) to the highest-ranked profiles. According to IRCC&apos;s rounds of invitations, the most recent 2026
            Canadian Experience Class draw (27 May 2026) cut off at a <strong>CRS score of 518</strong> (source:
            canada.ca, rounds of invitations, May 2026). There is no fixed pass mark, the cut-off is simply wherever the
            last invited candidate sits, so it changes every CRS draw. When several candidates share the cut-off score,
            a <strong>tie-break rule</strong> applies: profiles submitted earlier are invited first, so the date and time
            you entered the pool can decide who receives an invitation.
          </p>
          <p>
            Understanding <strong>how the CRS works</strong> matters because small profile changes can move you above or
            below a cut-off. Our <a href="/tools/crs-calculator">free CRS calculator</a> (an Express Entry points
            calculator built on the current official grid) lets you calculate your CRS score and see exactly where your
            points come from in about two minutes.
          </p>
          <DataTable
            headers={["CRS section", "Maximum points", "What it scores"]}
            rows={[
              ["Core / human capital", "500 (460 with a spouse)", "Age, education, official languages, Canadian work experience"],
              ["Spouse or partner factors", "40", "Your spouse's education, language and Canadian experience"],
              ["Skill transferability", "100", "Strong combinations of education, language and experience"],
              ["Additional points", "600", "Provincial nomination, French, a sibling in Canada, Canadian study"],
            ]}
            caption="The four CRS sections and their maximums (IRCC CRS criteria, 2026). Totals are hard-capped at 1,200."
          />

          <h2>What is the core human capital section?</h2>
          <p>
            Core human capital is the largest part of your CRS score, worth up to <strong>500 points</strong> for a
            single applicant (or 460 if you have an accompanying spouse, because some points shift into the spouse
            section). It scores four factors entirely on your own profile: <strong>age</strong>, <strong>education</strong>,{" "}
            <strong>official language ability</strong> and <strong>Canadian work experience</strong>. These are the
            factors most candidates can actually influence, so this is where profile optimisation starts. The full CRS
            points breakdown for 2026 below shows the maximum each factor can earn.
          </p>
          <p>
            Age peaks between 20 and 29 and tapers off after 30, which is why younger applicants score higher. Education
            rewards higher and multiple credentials, language is scored per ability (reading, writing, listening,
            speaking), and Canadian experience is counted in full years.
          </p>

          <h2>How are age points awarded in the CRS?</h2>
          <p>
            Age points peak at <strong>110 points</strong> (without a spouse) for candidates aged 20 to 29, then decline
            year by year to zero at age 45 and over. With an accompanying spouse, the maximum is 100. This is one of the
            few CRS factors you cannot change, so it often drives how aggressively the rest of the profile needs to be
            built.
          </p>
          <DataTable
            headers={["Age", "Points (no spouse)", "Points (with spouse)"]}
            rows={[
              ["18", "99", "90"],
              ["19", "105", "95"],
              ["20–29", "110", "100"],
              ["30", "105", "95"],
              ["35", "77", "70"],
              ["40", "50", "45"],
              ["44", "6", "5"],
              ["45 and over", "0", "0"],
            ]}
            caption="CRS age points, selected ages (IRCC CRS criteria, 2026). Maximum 110 without a spouse."
          />

          <h2>How are education and language scored?</h2>
          <p>
            Education and language are the two human-capital factors you can most readily improve. Education scores your
            highest completed credential, with foreign study needing an Educational Credential Assessment (ECA) to count.
            Language is scored <strong>per ability</strong> on the Canadian Language Benchmark (CLB) scale, so a single
            weak ability can quietly cost you points. The tables below show the no-spouse figures; with a spouse, each
            value is a few points lower.
          </p>
          <DataTable
            headers={["Highest education", "Points (no spouse)", "Points (with spouse)"]}
            rows={[
              ["Secondary (high school)", "30", "28"],
              ["One-year post-secondary", "90", "84"],
              ["Two-year post-secondary", "98", "91"],
              ["Bachelor's / 3-year+ degree", "120", "112"],
              ["Two or more credentials", "128", "119"],
              ["Master's or professional degree", "135", "126"],
              ["Doctoral (PhD)", "150", "140"],
            ]}
            caption="CRS education points (IRCC CRS criteria, 2026). Maximum 150 without a spouse."
          />
          <DataTable
            headers={["First language (per ability)", "Points (no spouse)", "Points (with spouse)"]}
            rows={[
              ["CLB 4 or 5", "6", "6"],
              ["CLB 6", "9", "8"],
              ["CLB 7", "17", "16"],
              ["CLB 8", "23", "22"],
              ["CLB 9", "31", "29"],
              ["CLB 10 or higher", "34", "32"],
            ]}
            caption="CRS first-official-language points, awarded per ability across reading, writing, listening and speaking (IRCC CRS criteria, 2026)."
          />
          <Callout type="info" title="Language is scored four times">
            Each first-language figure above is awarded separately for reading, writing, listening and speaking. Lifting
            your weakest ability by one CLB level often adds more points than any other single change, and a second
            official language can add up to 24 more.
          </Callout>

          <h2>How is Canadian work experience scored?</h2>
          <p>
            Canadian work experience is scored in core human capital up to <strong>80 points</strong> (no spouse) for
            five or more years, and it also unlocks valuable skill-transferability points when combined with your
            education or language. This is why the Canadian Experience Class is such a strong route, time spent working
            in Canada compounds across two sections of the CRS.
          </p>
          <DataTable
            headers={["Canadian work experience", "Points (no spouse)", "Points (with spouse)"]}
            rows={[
              ["None / less than 1 year", "0", "0"],
              ["1 year", "40", "35"],
              ["2 years", "53", "46"],
              ["3 years", "64", "56"],
              ["4 years", "72", "63"],
              ["5 years or more", "80", "70"],
            ]}
            caption="CRS Canadian work experience points (IRCC CRS criteria, 2026). Maximum 80 without a spouse."
          />

          <h2>What are spouse factors and skill transferability?</h2>
          <p>
            If you apply with an accompanying spouse or common-law partner, up to <strong>40 points</strong> come from
            their profile: their education (max 10), first-language ability (max 20) and Canadian work experience
            (max 10). Skill transferability then rewards strong <strong>combinations</strong> of factors, for instance,
            a credential paired with CLB 9 language, or foreign experience paired with Canadian experience, because
            those combinations predict better settlement outcomes.
          </p>
          <p>
            Skill transferability is <strong>hard-capped at 100 points</strong>, and each sub-group (education combos,
            experience combos, certificate-of-qualification combos) is itself capped at 50. You cannot simply add every
            combination together, a common mistake in DIY scoring that our{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> handles correctly.
          </p>

          <h2>What are the additional CRS points (including +600)?</h2>
          <p>
            The additional-points section is worth up to <strong>600 points</strong> and is dominated by a single
            factor: an enhanced provincial nomination adds the full 600. The other additional points are smaller but can
            still tip you over a cut-off. The 2025 removal of job-offer points means a nomination is now the only way to
            add hundreds of points at once.
          </p>
          <DataTable
            headers={["Additional factor", "CRS points"]}
            rows={[
              ["Provincial nomination (enhanced PNP)", "600"],
              ["French NCLC 7+ (all four abilities) with English CLB 5+", "50"],
              ["French NCLC 7+ (all four abilities) with weak/no English", "25"],
              ["Canadian post-secondary, 3-year+ or master's+", "30"],
              ["Canadian post-secondary, 1–2 year credential", "15"],
              ["Sibling in Canada (citizen or PR, 18+)", "15"],
              ["Arranged employment / job offer", "0 (removed 25 Mar 2025)"],
            ]}
            caption="CRS additional points (IRCC CRS criteria, 2026). A provincial nomination is the single biggest booster."
          />
          <Callout type="warning" title="Job-offer points were removed in 2025">
            As of <strong>25 March 2025</strong>, a valid job offer no longer adds CRS points (it previously added 50, or
            200 for senior managers). Be cautious of older guides and calculators that still award job-offer points, they
            are out of date. A job offer can still help you qualify for a PNP, which is where the +600 comes from.
          </Callout>

          <h2>What is a good CRS score in 2026?</h2>
          <p>
            There is no fixed &quot;good&quot; score, it depends entirely on the draw you are aiming at, and cut-offs
            change every round. In 2026, IRCC is running program-specific and category-based draws rather than general
            all-program rounds, which means a lower CRS score can still earn an invitation in a targeted category. The
            table below shows the shape of recent 2026 cut-offs; always check the IRCC rounds-of-invitations page for the
            latest figures.
          </p>
          <DataTable
            headers={["Draw type (2026)", "Recent cut-off", "Notes"]}
            rows={[
              ["Canadian Experience Class", "~507–518", "Largest stream of invitations"],
              ["Provincial Nominee Program", "~710–805", "High scores reflect the +600 nomination"],
              ["French-language proficiency", "~393–419", "Strongly favoured in 2026"],
              ["Healthcare & social services", "~467", "Nurses, physicians, care roles"],
              ["Trades", "~477", "Construction and skilled trades"],
              ["Physicians", "~169", "Narrow, occupation-specific category"],
            ]}
            caption="Illustrative 2026 draw cut-offs (IRCC rounds of invitations, May 2026). Figures change every draw."
          />
          <p>
            As a rough guide, a general profile above <strong>510</strong> is competitive for a CEC draw, but a score in
            the 400s can still succeed in a category-based round or with a provincial nomination. The honest answer is
            that your target depends on your category and the draws being held, so the best first step is to know your
            exact number.
          </p>

          <h2>How Wild Mountain helps you maximise your CRS</h2>
          <p>
            We review your profile section by section to capture every point you are entitled to, the right ECA, a
            language-test strategy, correctly claimed spouse points, and the skill-transferability combinations DIY
            calculators get wrong. Working under a licensed RCIC (CICC #R706497), our team also identifies whether a{" "}
            <a href="/pnp">provincial nomination</a> is a realistic route to the +600 that changes everything, including
            an <a href="/alberta-immigration">Alberta AAIP</a> nomination here in our home province.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> checks your own
            scoring and documents against the latest CRS requirements before you submit. These Comprehensive Ranking
            System figures are current to 2026 and change with each draw, so we always confirm the live IRCC grid before
            advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Find out your real CRS score"
        sub="Get started with a licensed RCIC for an honest read on your Comprehensive Ranking System score and the fastest way to raise it."
      />
    </>
  );
}
