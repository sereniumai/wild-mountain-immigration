import type { Metadata } from "next";
import { Languages } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/language-requirements";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Express Entry Language Requirements (CLB)",
  titleAbsolute: "Express Entry Language Requirements (CLB)",
  description:
    "Express Entry language requirements: CLB levels, approved English and French tests, minimum scores by program, and the French bonus points in the CRS.",
  path: PATH,
  keywords: [
    "express entry language requirements",
    "CLB levels",
    "IELTS Express Entry",
    "CELPIP PTE Core",
    "French bonus points",
  ],
});

const faqs = [
  {
    q: "What are the Express Entry language requirements?",
    a: "Express Entry requires you to prove ability in English or French with an approved test, scored on the Canadian Language Benchmark (CLB) scale. The minimum depends on the program: Federal Skilled Worker needs CLB 7 across all four abilities, Federal Skilled Trades needs CLB 5 in speaking and listening and CLB 4 in reading and writing, and Canadian Experience Class needs CLB 7 for TEER 0 or 1 jobs and CLB 5 for TEER 2 or 3 jobs. These are minimums; higher scores earn more CRS points.",
  },
  {
    q: "Which language tests are approved for Express Entry?",
    a: "For English, IRCC accepts IELTS General Training, CELPIP General, and PTE Core. For French, IRCC accepts the TEF Canada and the TCF Canada. You must take a designated version of the test (for example, the General Training module of IELTS, not Academic), and the results have to be current. Always confirm the approved test list and the accepted versions on canada.ca, as the list and the score conversions are updated from time to time.",
  },
  {
    q: "What is the Canadian Language Benchmark (CLB)?",
    a: "The Canadian Language Benchmark (CLB) is the national scale IRCC uses to describe language ability from level 1 to 12 (the French equivalent is the NCLC). Each approved test reports its own raw scores, which IRCC converts to a CLB level for each of the four abilities: reading, writing, listening and speaking. Because Express Entry minimums and CRS points are stated in CLB, your test scores are always translated to CLB before they count.",
  },
  {
    q: "How long are language test results valid?",
    a: "Approved language test results are valid for two years from the test date for Express Entry. Your results must be valid when you submit your profile and still valid when you apply for permanent residence after an invitation. If your test is approaching the two-year mark, plan to retake it in time, because expired results cannot support your eligibility or your CRS language points. We track validity dates as part of building your profile.",
  },
  {
    q: "Do I get extra CRS points for French?",
    a: "Yes. Strong French can add CRS points on top of your core language score. Candidates who reach NCLC 7 or higher in all four French abilities receive additional points, with a larger bonus if they also have at least basic English. French ability also opens French-language category-based draws, which have often had lower cut-offs. Because the exact bonus values and draw cut-offs change, confirm the current figures on canada.ca and our CRS guide.",
  },
  {
    q: "Is IELTS or CELPIP better for Express Entry?",
    a: "Neither is officially better; IRCC accepts both and converts each to the same CLB scale, so the right choice is the test that suits how you perform. Some candidates prefer one test's format, timing or scoring for a particular ability. Because your CRS language points are awarded per ability, the practical goal is to choose the test on which you can reliably reach a higher CLB in your weakest skill. We stay test-neutral and focus on the CLB outcome, not the brand.",
  },
  {
    q: "How much do language points matter in the CRS?",
    a: "A great deal. Language is one of the largest and most improvable parts of the Comprehensive Ranking System, and it is scored separately for each of reading, writing, listening and speaking. Lifting your weakest ability by a single CLB level often adds more points than any other change, and a second official language can add more still. This is why retaking a test to reach a higher CLB is one of the most common ways candidates raise their score before a draw.",
  },
  {
    q: "What is the minimum language level for Express Entry?",
    a: "There is no single minimum across Express Entry; it depends on your program. The lowest entry point is the Federal Skilled Trades program at CLB 5 in speaking and listening and CLB 4 in reading and writing. Federal Skilled Worker and Canadian Experience Class for higher-skilled jobs require CLB 7. Meeting the minimum only makes you eligible; competitive CRS scores usually require CLB 9 or higher, so aim well above the floor.",
  },
];

export default function LanguageRequirementsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Express Entry Language Requirements (CLB) Explained, 2026",
            description:
              "Express Entry language requirements: CLB levels, approved English and French tests, minimum scores by program, and the French bonus points in the CRS.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Express Entry language strategy",
            description:
              "Express Entry language requirements: CLB levels, approved English and French tests, minimum scores by program, and the French bonus points in the CRS.",
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
          { name: "Language Requirements", path: PATH },
        ]}
        title={<>Express Entry <span className="text-brand">language requirements</span></>}
        lede={
          <p>
            <strong>Express Entry language requirements</strong> are measured on the Canadian Language Benchmark
            (CLB) scale using an approved English or French test. The minimum depends on your program, and higher
            scores earn more CRS points. This guide covers the tests, the minimums and the French bonus.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Languages className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Need to lift your CLB?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can pinpoint the ability holding your score back and map the language strategy that
                moves the needle most.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry overview", href: "/express-entry", note: "How the whole system works" },
                { label: "Comprehensive Ranking System", href: "/express-entry/comprehensive-ranking-system", note: "How language scores in the CRS" },
                { label: "Federal Skilled Worker", href: "/express-entry/federal-skilled-worker", note: "Needs CLB 7 across all abilities" },
                { label: "Educational Credential Assessment", href: "/express-entry/educational-credential-assessment", note: "The other core eligibility factor" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your score in 2 minutes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox label="Quick answer">
            <strong>Express Entry language requirements</strong> are set on the Canadian Language Benchmark (CLB)
            scale and proven with an approved test. The minimum is <strong>CLB 7</strong> for Federal Skilled Worker
            and higher-skilled Canadian Experience Class, <strong>CLB 5</strong> for lower-skilled CEC, and{" "}
            <strong>CLB 5/4</strong> for Federal Skilled Trades. Higher scores earn more CRS points.
          </AnswerBox>

          <KeyTakeaways
            summary="Express Entry language requirements are measured on the Canadian Language Benchmark (CLB) scale using an IRCC-approved English or French test. Minimums vary by program: CLB 7 for Federal Skilled Worker, CLB 5 in speaking and listening with CLB 4 in reading and writing for Federal Skilled Trades, and CLB 7 or CLB 5 for Canadian Experience Class depending on the job's TEER. Approved English tests are IELTS General, CELPIP General and PTE Core, with TEF and TCF for French. All results stay valid for two years."
            items={[
              <>Language is measured on the <strong>CLB scale</strong> using an IRCC-approved English or French test.</>,
              <>Approved English tests: <strong>IELTS General Training, CELPIP General, PTE Core</strong>. French: <strong>TEF Canada, TCF Canada</strong>.</>,
              <>Minimums: <strong>CLB 7</strong> for <a href="/express-entry/federal-skilled-worker">FSW</a>, <strong>CLB 5/4</strong> for <a href="/express-entry/federal-skilled-trades">FST</a>, <strong>CLB 7 or 5</strong> for CEC by TEER.</>,
              <>Strong <strong>French (NCLC 7+)</strong> adds CRS bonus points and opens French-language category draws.</>,
              <>Results are valid for <strong>two years</strong>, and language is one of the most improvable parts of the <a href="/express-entry/comprehensive-ranking-system">CRS</a>.</>,
            ]}
          />

          <h2>What are the Express Entry language requirements?</h2>
          <p>
            To enter the <a href="/express-entry">Express Entry</a> pool, you must prove your ability in English or
            French by taking an approved language test and meeting the minimum for your program. IRCC expresses every
            requirement on the <strong>Canadian Language Benchmark (CLB)</strong> scale, a national standard that runs
            from level 1 to 12 (the French equivalent is the NCLC).</p>
          <p>Your test reports raw scores, and IRCC converts
            them to CLB levels for each of the four abilities: reading, writing, listening and speaking. IRCC
            publishes a Canadian Language Benchmark chart for every approved test, so you can map your result to a CLB
            level before you book. Meeting the minimum makes you eligible; scoring higher earns you more points in
            the <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a>.
          </p>

          <h2>Which language tests are approved?</h2>
          <p>
            IRCC accepts specific designated tests, and you must take the correct version. For English, that means
            the General Training module of IELTS rather than Academic. Each test reports its own raw scores, which
            IRCC then maps to the CLB scale: the IELTS to CLB conversion, for example, is what turns an IELTS band
            into a CLB level. The table below lists the approved tests for Express Entry; always confirm the current
            list and accepted versions on canada.ca, because IRCC updates it periodically.
          </p>
          <DataTable
            headers={["Language", "Approved tests", "Notes"]}
            rows={[
              ["English", "IELTS General Training", "Must be the General Training module, not Academic"],
              ["English", "CELPIP General", "The General test, not CELPIP General LS"],
              ["English", "PTE Core", "Accepted for Express Entry English ability"],
              ["French", "TEF Canada", "Test d'évaluation de français for Canada"],
              ["French", "TCF Canada", "Test de connaissance du français for Canada"],
            ]}
            caption="IRCC-approved Express Entry language tests (canada.ca, 2026). The approved list and accepted versions can change, verify before booking."
          />
          <Callout type="info" title="We stay test-neutral">
            IRCC converts every approved test to the same CLB scale, so no test is inherently better. The CELPIP vs
            IELTS question really comes down to format and timing, not score value: the right choice is the one on
            which you can reliably reach a higher CLB, especially in your weakest ability. We focus on the CLB
            outcome, not the brand.
          </Callout>

          <h2>What are the minimum scores by program?</h2>
          <p>
            There is no single Express Entry minimum; each program sets its own floor, and some set different levels
            for different abilities or job types. The table below summarises the minimum CLB by program. Remember
            these are eligibility floors, competitive CRS scores almost always require more.
          </p>
          <DataTable
            headers={["Program", "Minimum language requirement"]}
            rows={[
              ["Federal Skilled Worker (FSW)", "CLB 7 in all four abilities"],
              ["Canadian Experience Class, TEER 0 or 1 jobs", "CLB 7 in all four abilities"],
              ["Canadian Experience Class, TEER 2 or 3 jobs", "CLB 5 in all four abilities"],
              ["Federal Skilled Trades (FST)", "CLB 5 in speaking and listening; CLB 4 in reading and writing"],
            ]}
            caption="Minimum language requirements by Express Entry program (IRCC, 2026). These are minimums for eligibility, confirm current rules on canada.ca."
          />
          <Callout type="warning" title="Minimums are not competitive scores">
            Meeting the floor only gets you into the pool. Because language is scored per ability and rewarded
            heavily in the CRS, most invited candidates score well above the minimum, often CLB 9 or higher. Treat
            the minimum as a starting line, not a target.
          </Callout>

          <h2>How is language scored in the CRS?</h2>
          <p>
            Language is one of the largest and most improvable parts of your CRS score, and it is scored{" "}
            <strong>separately for each of the four abilities</strong>. That structure is important: a single weak
            ability quietly drags down your total, so the fastest gain often comes from lifting your weakest skill by
            one CLB level. A second official language can add still more. This is why retaking a test to push a CLB 7
            up to CLB 9 is one of the most common ways candidates raise their score before a draw. Model the effect
            with our free <a href="/tools/crs-calculator">CRS calculator</a> to see exactly where your points sit.
          </p>

          <h2>Do you get extra points for French?</h2>
          <p>
            Yes. French bonus points are added to your CRS score beyond your core language result. Candidates who
            reach <strong>NCLC 7 or higher in all four French abilities</strong> earn these additional points, with a
            larger bonus if they also have at least basic English. On top of that, strong French opens
            French-language{" "}
            <a href="/express-entry/category-based-draws">category-based draws</a>, which have often invited
            candidates at lower cut-offs than general rounds. Because the exact bonus values and the French draw
            cut-offs change over time, confirm the current figures on canada.ca and in our{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS guide</a>.
          </p>
          <DataTable
            headers={["French scenario", "Effect"]}
            rows={[
              ["NCLC 7+ in all four French abilities, with English CLB 5+", "Larger French bonus added to your CRS score"],
              ["NCLC 7+ in all four French abilities, with weak or no English", "Smaller French bonus added to your CRS score"],
              ["Strong French generally", "Eligibility for French-language category-based draws, often lower cut-offs"],
            ]}
            caption="How French ability boosts Express Entry standing (IRCC, 2026). Exact bonus values and draw cut-offs change, verify on canada.ca."
          />

          <h2>How long are results valid?</h2>
          <p>
            Approved language test results are <strong>valid for two years</strong> from the test date. They must be
            valid when you submit your Express Entry profile and still valid when you apply for permanent residence
            after an invitation. If your test is approaching the two-year mark, retake it in good time, because
            expired results cannot support either your eligibility or your CRS language points. We track these
            validity dates when we build a profile, so your scores never lapse at the wrong moment.
          </p>

          <h2>How Wild Mountain Immigration helps with your language strategy</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team reads your CLB results ability by ability,
            identifies which skill is costing you the most points, and maps a realistic plan to lift it, whether that
            is a retake, a different approved test, or building French toward the bonus.</p>
          <p>We then make sure your scores
            meet the Express Entry language requirements for your program and are entered correctly into your{" "}
            <a href="/express-entry">Express Entry</a> profile. We work entirely online.
            Approved tests, the IELTS to CLB conversion and bonus values change over time, so we always confirm the
            current Express Entry language requirements on canada.ca before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Turn your language scores into CRS points"
        sub="Get started with a licensed RCIC to find the ability holding your score back and the fastest realistic way to a higher CLB and a stronger profile."
      />
    </>
  );
}
