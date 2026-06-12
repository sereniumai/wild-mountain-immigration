import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/canadian-experience-class";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canadian Experience Class (CEC) Eligibility & Requirements",
  titleAbsolute: "Canadian Experience Class (CEC) Eligibility 2026",
  description:
    "Canadian Experience Class eligibility: CEC requirements 2026, language by TEER, and how Canadian work experience leads to PR. Reviewed by a licensed RCIC.",
  path: PATH,
  keywords: [
    "canadian experience class eligibility",
    "cec requirements 2026",
    "cec vs fsw",
    "canadian work experience pr",
    "cec language requirements",
  ],
});

const faqs = [
  {
    q: "What is the minimum work experience for Canadian Experience Class eligibility?",
    a: "You need at least one year (1,560 hours) of skilled work experience in Canada, gained within the three years before you apply. This can be full-time at one job, or an equal amount of part-time hours, and the work must have been done while you were authorised to work in Canada.",
  },
  {
    q: "What are the CEC language requirements?",
    a: "CEC language requirements depend on the TEER category of your job. For NOC TEER 0 or 1 jobs you need Canadian Language Benchmark (CLB) 7 in each of reading, writing, listening and speaking. For TEER 2 or 3 jobs you need CLB 5 in each ability. Results must come from an approved test taken within the last two years.",
  },
  {
    q: "Do I need to show proof of funds for the Canadian Experience Class?",
    a: "No. Unlike the Federal Skilled Worker and Federal Skilled Trades programs, the Canadian Experience Class does not require proof of funds. Because CEC candidates are already working in Canada, IRCC does not ask for settlement funds for this program.",
  },
  {
    q: "Does self-employed or co-op work count for CEC?",
    a: "No. Self-employment and work experience gained while you were a full-time student (for example, co-op terms during studies) do not count toward Canadian Experience Class eligibility. The experience must be paid, authorised, skilled work that was not part of your study programme.",
  },
  {
    q: "Is there an education requirement for the Canadian Experience Class?",
    a: "No. CEC has no minimum education requirement and you do not need an Educational Credential Assessment (ECA) to qualify. However, education still earns Comprehensive Ranking System points, so claiming your credentials can raise your CRS score and your chances of an invitation.",
  },
  {
    q: "Can PGWP holders apply through the Canadian Experience Class?",
    a: "Yes. The Canadian Experience Class is the most common route for Post-Graduation Work Permit holders. Once you have accumulated 12 months of skilled work on your PGWP within the last three years and meet the language requirement, you can enter the Express Entry pool through CEC.",
  },
  {
    q: "How is CEC different from the Federal Skilled Worker program?",
    a: "CEC is for people who already have skilled Canadian work experience, requires no proof of funds and no ECA, and has no 67-point selection grid. The Federal Skilled Worker program is built for people with foreign work experience, requires proof of funds and an ECA, and you must score at least 67 of 100 on its selection-factor grid.",
  },
];

export default function CanadianExperienceClassPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Canadian Experience Class (CEC): Eligibility & 2026 Requirements",
            description:
              "Canadian Experience Class eligibility: CEC requirements 2026, language by TEER, and how Canadian work experience leads to PR. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-31",
          }),
          serviceLd({
            name: "Canadian Experience Class application support",
            description:
              "Canadian Experience Class eligibility: CEC requirements 2026, language by TEER, and how Canadian work experience leads to PR. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Canadian Experience Class immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Express Entry", path: "/express-entry" },
          { name: "Canadian Experience Class", path: PATH },
        ]}
        title={<>Canadian Experience Class (CEC): <span className="text-brand">eligibility &amp; 2026 guide</span></>}
        lede={
          <p>
            The <strong>Canadian Experience Class (CEC)</strong> is the fastest Express Entry route to PR for people who
            already have skilled Canadian work experience. If you have at least 1 year of qualifying Canadian work
            experience and meet the language standard, CEC eligibility takes you through Express Entry to permanent
            residence, with no proof of funds required.
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
              <p className="mt-1.5 text-sm text-ink-soft">See how your Canadian experience scores in two minutes.</p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "How the whole system works" },
                { label: "Federal Skilled Worker", href: "/express-entry/federal-skilled-worker", note: "The route for foreign experience" },
                { label: "Comprehensive Ranking System", href: "/express-entry/comprehensive-ranking-system", note: "How your CRS score is built" },
                { label: "CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your score for free" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Canadian Experience Class (CEC) is an Express Entry program for people who already have skilled work experience in Canada and want permanent residence. You generally need at least one year (1,560 hours) of authorised skilled Canadian work within the past three years. You also need minimum language results that depend on your job's TEER category. Eligible candidates then enter the Express Entry pool, where they are ranked by CRS score."
            items={[
              <>CEC needs <strong>≥1 year (1,560 hours) of skilled Canadian work</strong> in the last three years, while authorised.</>,
              <>Language is by job type: <strong>CLB 7 for TEER 0/1</strong>, <strong>CLB 5 for TEER 2/3</strong>.</>,
              <><strong>No education requirement and no ECA</strong> needed, though credentials still earn CRS points.</>,
              <><strong>No proof of funds</strong> is required for the Canadian Experience Class.</>,
              <>It is the most common in-Canada route, ideal for <strong>PGWP holders and current workers</strong>.</>,
            ]}
          />

          <h2>What is the Canadian Experience Class (CEC)?</h2>
          <p>
            The Canadian Experience Class (CEC) is one of the three federal programs managed under Express Entry, built
            for people who have already worked in skilled jobs in Canada. Rather than testing foreign credentials or
            settlement funds, it recognises the Canadian work experience you have built, so it suits temporary workers
            and graduates who want to stay permanently. According to IRCC, CEC has been the largest source of Express
            Entry invitations through 2025–2026, with program-specific rounds running regularly (source: canada.ca,
            rounds of invitations, 2026).
          </p>
          <p>
            Because CEC candidates are already established in Canada, the program drops two requirements that other
            streams keep: there is <strong>no proof of funds</strong> and <strong>no education minimum</strong>. That
            makes it one of the most accessible federal routes for those who qualify.
          </p>

          <h2>What are the Canadian Experience Class eligibility requirements in 2026?</h2>
          <p>
            Canadian Experience Class eligibility rests on four pillars: qualifying Canadian work experience, the right
            language score for your job, lawful status while you worked, and an intention to live outside Quebec. The
            table below sets out the CEC requirements for 2026 at a glance.
          </p>
          <DataTable
            headers={["Requirement", "What CEC asks for"]}
            rows={[
              ["Work experience", "≥1 year (1,560 hours) of skilled work in Canada within the last 3 years"],
              ["Type of work", "NOC TEER 0, 1, 2 or 3, full-time or equal part-time, while authorised to work"],
              ["Language", "CLB 7 (TEER 0/1) or CLB 5 (TEER 2/3) in all four abilities"],
              ["Education", "No minimum requirement; no ECA needed"],
              ["Proof of funds", "Not required"],
              ["Where you'll live", "Anywhere in Canada except Quebec"],
            ]}
            caption="Canadian Experience Class requirements (IRCC, 2026). Verify current details on the IRCC CEC page."
          />
          <Callout type="warning" title="What does not count toward CEC">
            Self-employment and any work experience gained while you were a <strong>full-time student</strong> (such as
            co-op placements) do not count. Your hours must be paid, skilled and gained while you held valid work
            authorisation.
          </Callout>

          <h2>What are the CEC language requirements by TEER?</h2>
          <p>
            CEC language requirements are tied to the TEER category of your Canadian job under the National Occupational
            Classification (NOC). Higher-skilled roles (TEER 0 and 1) require a stronger result than mid-skilled roles
            (TEER 2 and 3). You must hit the minimum in <em>each</em> of the four abilities, reading, writing,
            listening and speaking, using an approved test taken within the last two years.
          </p>
          <DataTable
            headers={["Your job (NOC TEER)", "Minimum language", "Typical roles"]}
            rows={[
              ["TEER 0 or 1", "CLB 7 in each ability", "Managers, professionals, jobs needing a degree"],
              ["TEER 2 or 3", "CLB 5 in each ability", "Technical roles, skilled trades, supervisors"],
            ]}
            caption="CEC language requirements by NOC TEER (IRCC, 2026). CLB is measured per ability, not as an average."
          />
          <p>
            Approved tests include IELTS General Training or CELPIP-General for English, and TEF Canada or TCF Canada
            for French. Strong language scores do double duty: they unlock eligibility and they are one of the biggest
            levers on your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score.
          </p>

          <h2>Who is the Canadian Experience Class best suited to?</h2>
          <p>
            CEC is designed for people whose careers are already rooted in Canada. It is most powerful for two groups in
            particular, both of whom tend to score well on the CRS thanks to their Canadian experience.
          </p>
          <DataTable
            headers={["Profile", "Why CEC fits", "What to watch"]}
            rows={[
              ["Graduates on a PGWP", "Canadian study + skilled work boosts CRS", "Track your 12 months of skilled hours carefully"],
              ["In-Canada skilled workers", "Existing job builds qualifying experience", "Keep status valid throughout your experience"],
              ["Bilingual candidates", "French adds strong CRS points and category eligibility", "Consider a French test even if you work in English"],
            ]}
            caption="Common Canadian Experience Class candidate profiles."
          />
          <p>
            If you are working toward Canadian work experience for PR but have not yet hit 12 months, a{" "}
            <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> profile or a provincial
            nomination may bridge the gap in the meantime.
          </p>

          <h2>How does CEC differ from FSW and FST?</h2>
          <p>
            The CEC vs FSW question is the most common one we hear. In short, CEC values experience you earned
            <em> inside</em> Canada, while the Federal Skilled Worker (FSW) program is built for experience earned
            abroad. Federal Skilled Trades (FST) is a narrower stream for qualified tradespeople. The table compares the
            three Express Entry programs side by side.
          </p>
          <DataTable
            headers={["Feature", "CEC", "FSW", "FST"]}
            rows={[
              ["Experience", "1 yr skilled work in Canada (last 3 yrs)", "1 yr skilled work abroad or in Canada (last 10 yrs)", "2 yrs in a skilled trade (last 5 yrs)"],
              ["Language", "CLB 7 (TEER 0/1) / CLB 5 (TEER 2/3)", "CLB 7 in all abilities", "CLB 5 speaking/listening, CLB 4 reading/writing"],
              ["Education / ECA", "None required", "ECA for foreign study; part of 67-point grid", "None required"],
              ["Proof of funds", "Not required", "Required", "Required"],
              ["Selection grid", "None", "Must score ≥67/100", "None"],
            ]}
            caption="Canadian Experience Class vs FSW vs FST (IRCC, 2026)."
          />
          <Callout type="info" title="One profile, multiple programs">
            You only need to qualify for <strong>one</strong> program to enter the Express Entry pool. Many of our
            clients are eligible for both CEC and FSW. In those cases, we choose the framing that presents your file
            most accurately and maximises your CRS score.
          </Callout>

          <h2>How do you apply for the Canadian Experience Class via Express Entry?</h2>
          <p>
            CEC is not a separate application. It is one of the programs you can be eligible for inside Express Entry.
            You create a single profile, IRCC ranks you with the CRS, and you wait for an invitation in a CEC or
            category-based draw. Here is the path from eligibility to permanent residence.
          </p>
          <Steps
            steps={[
              { title: "Confirm your experience & test language", desc: "Verify you have 12 months of skilled, authorised Canadian work and take an approved language test (CLB 7 or CLB 5 by TEER)." },
              { title: "Build your Express Entry profile", desc: "Enter your work history, NOC codes and language results. CEC needs no ECA, but adding education raises your CRS." },
              { title: "Maximise your CRS score", desc: "Claim Canadian-experience, spouse and language points, and explore a provincial nomination (+600) where it fits." },
              { title: "Receive your Invitation to Apply", desc: "If your score meets the draw cut-off, IRCC issues an ITA. You then have 60 days to submit a complete application." },
              { title: "Submit your PR application", desc: "Upload reference letters, police checks and a medical. Accurate work-experience records are what prevent refusals." },
              { title: "Confirm permanent residence", desc: "After approval, complete landing and receive your PR card. No settlement funds are required for CEC." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with the Canadian Experience Class</h2>
          <p>
            We confirm your Canadian Experience Class eligibility before you spend a dollar on testing, then build your
            Express Entry profile to capture every CRS point your Canadian work and study earn you. Working under a
            licensed RCIC (CICC #R706497), our team gets the NOC codes and hours right, the small details that decide
            whether a CEC file is approved or refused. If you are still building that year of experience, a{" "}
            <a href="/work-permits/pgwp">post-graduation work permit</a> or other{" "}
            <a href="/work-permits">work permit</a> is often the route in.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own CEC
            application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Is the Canadian Experience Class right for you?"
        sub="Get started with a licensed RCIC for an honest read on your CEC eligibility and CRS score."
      />
    </>
  );
}
