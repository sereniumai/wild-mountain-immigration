import type { Metadata } from "next";
import { Layers } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/noc-teer";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "NOC Code Canada & TEER Explained (2026)",
  titleAbsolute: "NOC Code & TEER Canada: Find Your NOC for Express Entry",
  description:
    "NOC code Canada and TEER explained: find your NOC code, read the TEER 0 to 5 levels, and see why your NOC matters for Express Entry. Ask a licensed RCIC.",
  path: PATH,
  keywords: [
    "noc code canada",
    "noc teer",
    "TEER categories",
    "noc code list",
    "find my noc",
    "noc code finder",
    "NOC 2021",
    "find your NOC code",
  ],
});

const faqs = [
  {
    q: "What is the NOC and what is TEER?",
    a: "The National Occupational Classification (NOC) is Canada's system for naming and grouping every occupation. The current version, NOC 2021, organises jobs by a structure called TEER, which stands for Training, Education, Experience and Responsibilities. Each occupation sits in a TEER category from 0 to 5 that reflects the skills, education and duties the job typically requires. Together, your NOC code and its TEER category determine which immigration programs your work experience can support.",
  },
  {
    q: "What are the TEER categories 0 to 5?",
    a: "TEER 0 covers management occupations. TEER 1 generally requires a university degree. TEER 2 usually needs a college diploma, apprenticeship training of two or more years, or supervisory roles. TEER 3 typically needs a shorter college program or several months of on-the-job training. TEER 4 usually requires a high school diploma or several weeks of training, and TEER 5 needs short demonstration or no formal education. Higher skill levels sit at the lower TEER numbers, so TEER 0 and 1 are the most skilled.",
  },
  {
    q: "How do I find my NOC code?",
    a: "Start at the official NOC website and search by your job title or keywords, then open the occupation that best matches your actual duties. Read the lead statement and the list of main duties and confirm that most of them describe what you genuinely did, not just your job title. Each occupation page shows the five-digit NOC code and the TEER category. Because the right code depends on your real responsibilities rather than your title, take time to match the duties carefully.",
  },
  {
    q: "Why does my NOC and TEER matter for Express Entry?",
    a: "Your NOC and its TEER category decide whether your work experience qualifies for an Express Entry program and which one. The Federal Skilled Worker class and Canadian Experience Class generally count experience in TEER 0, 1, 2 or 3, while the Federal Skilled Trades program focuses on specific trade occupations. Your NOC also determines whether you fit an occupation-targeted category-based draw. Choosing the wrong code can make eligible experience look ineligible, or the reverse, which is why accuracy matters.",
  },
  {
    q: "What changed when NOC 2016 became NOC 2021?",
    a: "NOC 2021 replaced the old four-tier skill-level system (Skill Type 0 and Skill Levels A, B, C, D) with the six-category TEER structure (0 to 5) and moved to a five-digit code. Some occupations also shifted category, so a job that qualified under the old system may sit differently now, and vice versa. IRCC adopted NOC 2021 for Express Entry, so older guides that reference Skill Level A or B are out of date. Always use the current NOC 2021 code.",
  },
  {
    q: "Can my job match more than one NOC code?",
    a: "Sometimes a role looks close to two occupations, especially for blended or senior positions. The correct approach is to choose the single NOC whose lead statement and main duties best describe the work you actually performed, supported by your reference letters. Picking a code only because it sits in a more favourable TEER, without the duties to back it, creates real risk if IRCC reviews your experience. We help match duties to the right code and gather reference letters that support it.",
  },
  {
    q: "Does my NOC affect Provincial Nominee Program eligibility?",
    a: "Yes. Many Provincial Nominee Program streams set their own occupation lists or TEER requirements, and some target specific in-demand NOCs. The same NOC code you use federally usually carries into a provincial application, so getting it right benefits both. Because each province sets its own rules and in-demand lists, we check the specific stream's requirements rather than assuming a federally eligible NOC automatically qualifies provincially.",
  },
  {
    q: "How is TEER different from the old NOC skill levels?",
    a: "TEER is a refinement of the old skill-level idea. Where the previous system used Skill Type 0 and Skill Levels A through D, TEER splits the middle of that range more finely into categories 1, 2, 3 and 4, which gives a clearer picture of the training and responsibilities a job involves. The practical effect is that some occupations moved category in the transition, so eligibility should always be checked against the current TEER, not the retired skill levels.",
  },
];

export default function NocTeerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "NOC and TEER Explained for Express Entry (2026)",
            description:
              "The NOC 2021 system and TEER categories explained: how to find your NOC code, the TEER 0 to 5 levels, and why your NOC matters for Express Entry and PNPs.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NOC and TEER classification guidance",
            description:
              "The NOC 2021 system and TEER categories explained: how to find your NOC code, the TEER 0 to 5 levels, and why your NOC matters for Express Entry and PNPs.",
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
          { name: "NOC & TEER", path: PATH },
        ]}
        title={<>NOC code in Canada and TEER, <span className="text-brand">explained</span></>}
        lede={
          <p>
            Your <strong>NOC code in Canada</strong> comes from the <strong>National Occupational Classification (NOC)</strong>,
            and its <strong>TEER</strong> category sorts every job by skill and responsibility. The NOC code and TEER level
            decide whether your experience qualifies for Express Entry and many provincial streams. This guide shows how the
            system works and how to find your code.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/express-entry", label: "Express Entry overview" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Layers className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Unsure of your NOC code?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can match your real duties to the right NOC and TEER, and confirm which programs your
                experience qualifies for.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry overview", href: "/express-entry", note: "How the whole system works" },
                { label: "Category-based draws", href: "/express-entry/category-based-draws", note: "Where your NOC targets a category" },
                { label: "Federal Skilled Worker", href: "/express-entry/federal-skilled-worker", note: "TEER 0, 1, 2 or 3 experience" },
                { label: "Federal Skilled Trades", href: "/express-entry/federal-skilled-trades", note: "For specific trade occupations" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Many streams target specific NOCs" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox label="Quick answer">
            The <strong>NOC (National Occupational Classification)</strong> is Canada&apos;s system for grouping
            every job, and the current NOC 2021 version sorts each occupation into a <strong>TEER</strong> category
            from 0 to 5 based on the training, education, experience and responsibilities it requires. Your{" "}
            <strong>NOC code and TEER</strong> decide which immigration programs your work experience supports.
          </AnswerBox>

          <KeyTakeaways
            summary="A NOC code in Canada is the five-digit National Occupational Classification number that IRCC assigns to your job. Under NOC 2021, each occupation also sits in a TEER category from 0 to 5, based on the training, education, experience and responsibilities the work requires. Your NOC code and TEER decide whether your experience qualifies for Express Entry and category-based draws, and they often carry into Provincial Nominee Program eligibility. The correct code depends on your actual duties, not your title."
            items={[
              <>The <strong>NOC</strong> classifies every Canadian occupation; <strong>NOC 2021</strong> uses <strong>TEER categories 0 to 5</strong>.</>,
              <><strong>TEER</strong> stands for Training, Education, Experience and Responsibilities; TEER 0 and 1 are the most skilled.</>,
              <>Your NOC and TEER decide eligibility for <a href="/express-entry">Express Entry</a> programs and <a href="/express-entry/category-based-draws">category-based draws</a>.</>,
              <>The right NOC depends on your <strong>actual duties</strong>, not your job title; match the lead statement and main duties.</>,
              <>NOC 2021 replaced the old Skill Level A to D system, so older guides referencing skill levels are <strong>out of date</strong>.</>,
            ]}
          />

          <h2>What is a NOC code in Canada, and what is TEER?</h2>
          <p>
            The <strong>National Occupational Classification (NOC)</strong> is the standard system Canada uses to
            name, describe and group every occupation in the labour market, and your <strong>NOC code</strong> is the
            five-digit number it assigns to your job. The version IRCC uses today is{" "}
            <strong>NOC 2021</strong>, which gives each occupation that five-digit code and places it in a category
            called <strong>TEER</strong>. TEER stands for <strong>Training, Education, Experience and
            Responsibilities</strong>, the four things that define how skilled a job is. Every occupation sits in one
            TEER category from 0 to 5, and that category, together with the code itself, is what immigration programs
            read when they decide whether your experience counts.
          </p>
          <p>
            In short, the NOC code tells the system <em>what</em> your job is, and the TEER category tells it{" "}
            <em>how skilled</em> that job is. Both pieces matter for <a href="/express-entry">Express Entry</a> and
            for many provincial programs.
          </p>

          <h2>What are the TEER categories 0 to 5?</h2>
          <p>
            TEER replaces the old four-tier skill-level model with six categories that describe the typical training
            and responsibility level of a job. Lower numbers mean more skilled work, so TEER 0 and TEER 1 sit at the
            top: TEER 0 jobs are management roles, while TEER 1 jobs usually require a university degree. The table
            below summarises each category and the kind of preparation it usually implies.
          </p>
          <DataTable
            headers={["TEER", "Typical requirement", "Example types of work"]}
            rows={[
              ["0", "Management responsibilities", "Managers and directors across sectors"],
              ["1", "University degree (bachelor's, master's or doctoral)", "Professional roles such as engineers and analysts"],
              ["2", "College diploma, 2+ year apprenticeship, or supervisory roles", "Technologists, skilled trades, supervisors"],
              ["3", "Shorter college program or several months of on-the-job training", "Technical and skilled support occupations"],
              ["4", "High school diploma or several weeks of on-the-job training", "Intermediate occupations"],
              ["5", "Short work demonstration and no formal education", "Labour and elemental occupations"],
            ]}
            caption="The six TEER categories under NOC 2021 (canada.ca / Statistics Canada). Requirements are typical, not absolute, confirm each occupation on the official NOC site."
          />
          <Callout type="info" title="Why the split matters">
            Express Entry programs draw lines by TEER. The{" "}
            <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> class and{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> generally count
            experience in <strong>TEER 0, 1, 2 or 3</strong>. Knowing your TEER tells you immediately whether your
            experience is in the qualifying band.
          </Callout>

          <h2>How do I find my NOC code?</h2>
          <p>
            To <strong>find my NOC</strong>, the approach is to match your real duties to an occupation, not to guess
            from your job title. Two people with the same title can fall under different NOCs if their work differs. The
            official <strong>NOC code list</strong> on canada.ca acts as a free NOC code finder: you search it by
            keyword and read the matching occupation.
          </p>
          <Steps
            steps={[
              { title: "Search the NOC code list by title or keyword", desc: "On the official NOC website, use the NOC code finder to search your job title or key duties, then open the occupations from the NOC code list that look closest to your work." },
              { title: "Match the duties", desc: "Read the lead statement and main duties for each candidate occupation. Choose the one where most duties genuinely describe what you did." },
              { title: "Record the code and TEER", desc: "Note the five-digit NOC code and its TEER code (the 0 to 5 category). This is what you enter in your profile and support with reference letters." },
            ]}
          />
          <p>
            The duties matter more than the title because IRCC assesses your experience against the NOC&apos;s main
            duties, usually evidenced by employer reference letters. If your letters do not reflect the duties of the
            code you chose, eligible experience can be questioned, so the code and the evidence have to line up.
          </p>

          <h2>Why does your NOC and TEER matter for Express Entry?</h2>
          <p>
            Your NOC and TEER are gatekeepers for eligibility. They decide three things at once: whether your
            experience qualifies for an Express Entry program at all, which program it best fits, and whether you can
            be selected in an occupation-targeted draw.
          </p>
          <DataTable
            headers={["Program / draw", "What the NOC and TEER control"]}
            rows={[
              ["Federal Skilled Worker", "Whether your foreign experience is in TEER 0, 1, 2 or 3 and meets the program minimum"],
              ["Canadian Experience Class", "Whether your Canadian experience is in a qualifying TEER (generally 0, 1, 2 or 3)"],
              ["Federal Skilled Trades", "Whether your occupation is one of the eligible skilled-trade NOCs"],
              ["Category-based draws", "Whether your NOC falls within a targeted category (for example healthcare or trades)"],
              ["Provincial Nominee Programs", "Whether your NOC meets a stream's occupation list or TEER requirement"],
            ]}
            caption="How your NOC and TEER drive eligibility across federal and provincial routes (IRCC, 2026). Confirm current criteria on canada.ca and each province's site."
          />
          <p>
            Because so much hinges on the code, the NOC is one of the most common places a do-it-yourself application
            goes wrong. A code that is slightly off can make qualifying experience look ineligible, or make experience
            look eligible when the duties do not support it. See our{" "}
            <a href="/express-entry/category-based-draws">category-based draws</a> guide for how a precise NOC can open
            a targeted round at a lower cut-off.
          </p>

          <h2>NOC 2021 and the move away from skill levels</h2>
          <p>
            NOC 2021 replaced the older NOC 2016 system. The previous model used Skill Type 0 and Skill Levels A, B, C
            and D; the new model uses the six TEER categories and a five-digit code. Some occupations changed category
            in the transition, so a role that qualified under the old skill levels may sit differently under TEER, and
            the reverse can also be true. IRCC adopted NOC 2021 for Express Entry, which means any guide that still
            talks about Skill Level A or B is out of date. Always check your occupation against the current NOC 2021
            structure.
          </p>
          <Callout type="warning" title="Ignore older skill-level guides">
            If a source tells you your job is &ldquo;Skill Level B&rdquo;, it is using a retired system. Re-check your
            occupation under NOC 2021 and confirm its TEER category, because eligibility is now decided by TEER, not
            the old letters.
          </Callout>

          <h2>How Wild Mountain helps you get your NOC right</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team matches your actual duties to the correct NOC 2021
            code and TEER category, then confirms which programs and draws that opens, from{" "}
            <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> to a{" "}
            <a href="/express-entry/category-based-draws">category-based draw</a> or a{" "}
            <a href="/pnp">provincial nominee program</a>. We also make sure your employer reference letters support
            the code you claim, so your experience holds up if IRCC reviews it. We work entirely online. Because NOC
            codes in Canada and program criteria change over time, we always confirm your NOC code in Canada and the
            current program rules on canada.ca before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Get your NOC and TEER right the first time"
        sub="Get started with a licensed RCIC to match your duties to the correct NOC code and confirm exactly which Express Entry and provincial routes your experience unlocks."
      />
    </>
  );
}
