import type { Metadata } from "next";
import { Calculator, Briefcase, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/federal-skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Federal Skilled Worker (FSW) Eligibility 2026",
  titleAbsolute: "Federal Skilled Worker (FSW) Program: Eligibility 2026",
  description:
    "Federal Skilled Worker (FSW) Program eligibility: the FSW 67-point grid, 2026 requirements and FSW vs CEC. Reviewed by a licensed RCIC. Get started.",
  path: PATH,
  keywords: [
    "federal skilled worker program eligibility",
    "fsw 67 points grid",
    "fsw 67 points calculator",
    "fsw eligibility",
    "fsw requirements 2026",
    "fsw vs cec",
    "skilled worker visa canada",
  ],
});

const faqs = [
  {
    q: "What is the pass mark for the FSW 67-point grid?",
    a: "You must score at least 67 out of 100 on the six Federal Skilled Worker selection factors, language, education, work experience, age, arranged employment and adaptability, to be eligible for the program. Scoring 67 or more lets you enter the Express Entry pool under FSW; it does not, on its own, earn you an invitation. Once in the pool, a separate score (the CRS, out of 1,200) ranks you against other candidates.",
  },
  {
    q: "Is the FSW 67-point grid the same as the CRS score?",
    a: "No, and confusing the two is a common mistake. The 67-point grid is an eligibility test: pass it and you qualify for the Federal Skilled Worker Program. The Comprehensive Ranking System (CRS) is a separate ranking score out of 1,200 that decides when IRCC invites you from the pool. You can pass the 67-point grid comfortably and still need to raise your CRS to receive an invitation to apply.",
  },
  {
    q: "What are the minimum FSW requirements in 2026?",
    a: "At minimum you need at least one year of continuous, full-time (or equivalent part-time) skilled work experience in NOC TEER 0, 1, 2 or 3 within the last 10 years; language results of at least Canadian Language Benchmark (CLB) 7 in all four abilities; a Canadian educational credential or an Educational Credential Assessment (ECA) for foreign study; and proof of settlement funds (unless you are already authorised to work in Canada). You must also score 67 on the selection-factor grid.",
  },
  {
    q: "What is the difference between FSW, CEC and FST?",
    a: "All three are Express Entry programs but suit different profiles. Federal Skilled Worker (FSW) is for people with skilled foreign or Canadian experience who pass the 67-point grid and hold an ECA. Canadian Experience Class (CEC) is for those with at least one year of skilled Canadian work in the last three years and needs no proof of funds or 67-point grid. Federal Skilled Trades (FST) is for tradespeople with two years of trade experience plus a job offer or certificate of qualification.",
  },
  {
    q: "Do I need a job offer to qualify for Federal Skilled Worker?",
    a: "No. A job offer is one of six factors on the 67-point grid and can add up to 10 points, but it is not required. Most applicants qualify without one. Note that since 25 March 2025 a job offer no longer adds any points to your separate CRS ranking score, so its only remaining value in Express Entry is the small contribution to the eligibility grid and helping you meet a provincial nomination.",
  },
  {
    q: "How recent does my work experience have to be for FSW?",
    a: "Your skilled work experience must fall within the 10 years before you apply, and it must add up to at least one year of continuous, full-time work (1,560 hours) or the equivalent in part-time work. The experience has to be in a single skilled occupation classified under NOC TEER 0, 1, 2 or 3, and you must have performed the lead duties listed for that occupation.",
  },
  {
    q: "How long does an Educational Credential Assessment take?",
    a: "An ECA from an IRCC-designated organisation (such as WES, IQAS, ICES, ICAS, CES or the Medical Council of Canada for physicians) typically takes a few weeks to a few months depending on how quickly your institution releases transcripts. An ECA is valid for five years. Always confirm current turnaround times and fees directly with the assessing organisation.",
  },
];

export default function FederalSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Federal Skilled Worker Program Eligibility: the 2026 Guide",
            description:
              "Federal Skilled Worker Program eligibility: the FSW 67-point grid, 2026 requirements and FSW vs CEC. Reviewed by a licensed RCIC. Get started.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Federal Skilled Worker application support",
            description:
              "Federal Skilled Worker Program eligibility: the FSW 67-point grid, 2026 requirements and FSW vs CEC. Reviewed by a licensed RCIC. Get started.",
            path: PATH,
            serviceType: "Federal Skilled Worker immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Express Entry", path: "/express-entry" },
          { name: "Federal Skilled Worker", path: PATH },
        ]}
        title={<>Federal Skilled Worker (FSW) Program <span className="text-brand">eligibility</span></>}
        lede={
          <p>
            <strong>Federal Skilled Worker (FSW) Program eligibility</strong> turns on a 67-point grid. Score 67 of 100
            across six factors and you qualify for this Express Entry stream. You also need a year of skilled
            experience, Canadian Language Benchmark 7, and an Educational Credential Assessment for foreign study.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free CRS Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Passed the 67-point grid? See your Express Entry ranking score in two minutes.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry overview", href: "/express-entry", note: "How the whole system works" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "For skilled Canadian work" },
                { label: "Federal Skilled Trades", href: "/express-entry/federal-skilled-trades", note: "For qualified tradespeople" },
                { label: "CRS Calculator", href: "/tools/crs-calculator", note: "Your ranking score, free" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Federal Skilled Worker Program (FSW) is one of three Express Entry programs, built for skilled workers with foreign work experience who want permanent residence in Canada. To be eligible, you must score at least 67 of 100 on the FSW selection-factor grid. The grid weighs age, education, language ability, work experience and adaptability, and you must also meet minimum language and experience thresholds. Eligible candidates then compete in the Express Entry pool by CRS score."
            items={[
              <>To qualify, you must score <strong>at least 67 of 100</strong> on the FSW selection-factor grid.</>,
              <>The grid&apos;s six factors are <strong>language, education, work experience, age, arranged employment and adaptability</strong>.</>,
              <>Minimum bar: <strong>≥1 year continuous skilled work</strong> (NOC TEER 0–3) in the last 10 years and <strong>CLB 7</strong> in all abilities.</>,
              <>Foreign study needs an <strong>Educational Credential Assessment (ECA)</strong>; most applicants also show <strong>proof of funds</strong>.</>,
              <>The 67-point grid decides <strong>eligibility</strong>; the separate <strong>CRS score (out of 1,200)</strong> decides when you are invited, they are not the same.</>,
            ]}
          />

          <h2>What is the Federal Skilled Worker Program (FSW)?</h2>
          <p>
            The Federal Skilled Worker Program (FSW), also known as the Federal Skilled Worker class, is one of three
            economic programs managed through Express Entry, alongside the Canadian Experience Class and the Federal
            Skilled Trades program. It is designed for people with skilled work experience, gained inside or outside
            Canada, who want to immigrate as permanent residents. According to IRCC, a complete permanent-residence application is processed within about{" "}
            <strong>six months</strong> once you are invited to apply (source: canada.ca, Federal Skilled Worker
            Program, 2026).
          </p>
          <p>
            What sets FSW apart from the other two streams is its <strong>67-point eligibility grid</strong>. Before you
            can enter the Express Entry pool under this program, you must pass a points test scored out of 100 across
            six selection factors. It is the original federal route for skilled immigrants and remains the main option
            for applicants whose experience is mostly outside Canada. For many, it is the skilled worker visa Canada
            search results point to first.
          </p>

          <h2>How does the FSW 67-point grid work?</h2>
          <p>
            Federal Skilled Worker Program eligibility is decided by a grid that awards up to <strong>100 points</strong>{" "}
            across six factors; you need <strong>67 or more to qualify</strong>. The grid measures the human-capital
            characteristics IRCC associates with economic success in Canada. Each factor has its own maximum, shown in
            the FSW 67 points grid below.
          </p>
          <DataTable
            headers={["Selection factor", "Maximum points", "What it measures"]}
            rows={[
              ["Language skills", "28", "First official language (CLB 7+ required) plus optional second-language points"],
              ["Education", "25", "Highest completed credential, Canadian or assessed via an ECA"],
              ["Work experience", "15", "Years of continuous skilled work (NOC TEER 0–3) in the last 10 years"],
              ["Age", "12", "Full points at ages 18–35, declining after"],
              ["Arranged employment", "10", "A valid, qualifying job offer in Canada (optional)"],
              ["Adaptability", "10", "Spouse's language/study/work, prior Canadian study or work, relatives in Canada, a job offer"],
              ["Total", "100", "Pass mark: 67"],
            ]}
            caption="The FSW 67-point eligibility grid, six selection factors (IRCC, Six selection factors for the Federal Skilled Worker Program, 2026)."
          />
          <Callout type="brand" title="The 67-point grid is not your CRS score">
            The 67-point grid only decides whether you are <strong>eligible</strong> for FSW. Once you pass it and
            enter the pool, IRCC ranks you with the <strong>Comprehensive Ranking System (CRS)</strong>, a separate
            score out of 1,200 that determines when, or whether, you receive an invitation to apply. A high grid
            score does not guarantee a high CRS score, and the two use different point values. Don&apos;t conflate them.
          </Callout>
          <p>
            Because the factors overlap with, but are not identical to, the CRS, many applicants pass the grid easily
            yet still need to improve their CRS to be competitive in a draw. Score the grid by hand as your own FSW
            points calculator, then run our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a>, which uses the current official ranking grid so you
            can see both pictures clearly.
          </p>

          <h2>What are the minimum FSW requirements in 2026?</h2>
          <p>
            Passing the 67-point grid is necessary but not sufficient. To meet Federal Skilled Worker Program
            eligibility you must also clear several hard minimums. These FSW requirements for 2026 are set by IRCC and
            apply before the grid is even scored.
          </p>
          <DataTable
            headers={["Requirement", "Minimum standard"]}
            rows={[
              ["Skilled work experience", "≥1 year continuous, full-time (or equivalent part-time) in NOC TEER 0, 1, 2 or 3 within the last 10 years"],
              ["Language ability", "CLB 7 in all four abilities (reading, writing, listening, speaking) on an approved test"],
              ["Education", "Canadian secondary/post-secondary credential, or an ECA confirming a foreign credential's equivalence"],
              ["Selection-factor grid", "Score at least 67 of 100"],
              ["Proof of funds", "Settlement funds scaled to family size, waived only if you are legally working in Canada with a valid offer"],
              ["Admissibility", "Pass medical, security and criminality checks"],
            ]}
            caption="Minimum Federal Skilled Worker requirements (IRCC, Federal Skilled Worker Program: who can apply, 2026). Confirm current proof-of-funds amounts on IRCC."
          />
          <Callout type="info" title="ECA and language results have expiry dates">
            An <strong>Educational Credential Assessment is valid for five years</strong>, and approved language test
            results are valid for <strong>two years</strong>. Build your profile while both are current, or you may
            need to retest before you can apply.
          </Callout>

          <h2>FSW vs CEC vs FST: which Express Entry program fits?</h2>
          <p>
            FSW is not the only door into Express Entry. If your skilled experience is recent and Canadian, the
            Canadian Experience Class is usually faster and simpler; if you work in a trade, Federal Skilled Trades may
            fit. The FSW vs CEC distinction matters most because the two often overlap. Here is how the three programs
            compare.
          </p>
          <DataTable
            headers={["Feature", "FSW", "CEC", "FST"]}
            rows={[
              ["Best for", "Skilled foreign (or mixed) experience", "Skilled Canadian experience", "Qualified tradespeople"],
              ["Experience needed", "≥1 yr skilled (TEER 0–3), last 10 yrs", "≥1 yr skilled Canadian, last 3 yrs", "≥2 yrs in a skilled trade, last 5 yrs"],
              ["Language minimum", "CLB 7 (all abilities)", "CLB 7 (TEER 0/1) or CLB 5 (TEER 2/3)", "CLB 5 speaking/listening, CLB 4 reading/writing"],
              ["67-point grid?", "Yes, required", "No", "No"],
              ["ECA for foreign study?", "Yes (for grid education points)", "Not required", "Not required"],
              ["Proof of funds?", "Yes (unless authorised to work in Canada)", "No", "Yes"],
              ["Extra condition", "Score ≥67 on the selection grid", "Work gained while authorised", "Job offer (≥1 yr) or certificate of qualification"],
            ]}
            caption="Express Entry programs compared (IRCC, 2026)."
          />
          <p>
            Many applicants are eligible for more than one program. If you qualify for both FSW and{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>, CEC is generally the
            lighter route because it skips the 67-point grid, the ECA and proof of funds. Tradespeople should also
            weigh the <a href="/express-entry/federal-skilled-trades">Federal Skilled Trades</a> program. You enter one
            pool regardless, the program simply governs which minimums you must meet.
          </p>

          <h2>How do you apply for Federal Skilled Worker?</h2>
          <p>
            Applying under FSW follows the standard Express Entry sequence, with the 67-point grid and ECA front-loaded
            because they gate your eligibility. Work through the steps below in order.
          </p>
          <Steps
            steps={[
              { title: "Score the 67-point grid", desc: "Map your language, education, experience, age, any job offer and adaptability against the six selection factors and confirm you reach 67." },
              { title: "Test language & get your ECA", desc: "Take an approved test (IELTS General, CELPIP-General or TEF/TCF Canada) for CLB 7, and order an ECA for any foreign credential." },
              { title: "Confirm your NOC & funds", desc: "Match your job to the correct NOC TEER 0–3 code, document your hours, and gather proof of settlement funds for your family size." },
              { title: "Build your Express Entry profile", desc: "Enter the pool under FSW. IRCC then scores you on the separate CRS to rank you against other candidates." },
              { title: "Improve your CRS & await an ITA", desc: "Raise language scores or pursue a provincial nomination (+600 CRS). When your score meets a draw cut-off, you receive an invitation to apply." },
              { title: "Submit a complete PR application", desc: "Within 60 days, upload police certificates, medicals, reference letters and proof of funds. Accuracy here is what prevents refusals." },
            ]}
          />

          <h2>How does Wild Mountain help FSW applicants?</h2>
          <p>
            We start by scoring your 67-point grid honestly, then map the same profile against the CRS so you know both
            whether you qualify and how competitive you are. Working under a licensed RCIC (CICC #R706497), our team
            confirms your{" "}
            <abbr title="National Occupational Classification">NOC</abbr> classification, reviews your ECA and language
            results before they expire, and builds an application that withstands scrutiny, catching the
            mis-stated experience and weak proof-of-funds documentation that cause avoidable refusals.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            FSW application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Find out if you qualify for Federal Skilled Worker"
        sub="Get started with a licensed RCIC for an honest read on your 67-point grid, your CRS score and your best Express Entry route."
      />
    </>
  );
}
