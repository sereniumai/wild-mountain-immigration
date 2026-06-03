import type { Metadata } from "next";
import { GraduationCap, Briefcase, Rocket, Map, BookOpen, Building2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/study-permit/study-to-pr";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Study to Permanent Residence in Canada",
  titleAbsolute: "Study to PR in Canada: Permanent Residence",
  description:
    "Study to PR in Canada: your route from a PGWP to permanent residence via the Canadian Experience Class, Express Entry and PNP. See how to plan it.",
  path: PATH,
  keywords: [
    "study to pr canada",
    "international student to permanent residence",
    "pgwp to pr",
    "canadian experience class graduate",
    "pnp graduate stream",
    "study permit to permanent residence",
  ],
});

const faqs = [
  {
    q: "Can studying in Canada lead to permanent residence?",
    a: "Yes. Studying in Canada is one of the most reliable pathways to permanent residence, but graduation alone does not grant PR. The usual route is to study at a designated learning institution, graduate from an eligible program, obtain a Post-Graduation Work Permit (PGWP), and use that permit to gain skilled Canadian work experience. That experience then qualifies you for the Canadian Experience Class under Express Entry or for a Provincial Nominee Program graduate stream. The plan should start before you choose your program, because eligibility for the PGWP and PR depends on choices you make early.",
  },
  {
    q: "How does the PGWP lead to permanent residence?",
    a: "The Post-Graduation Work Permit is an open work permit that lets eligible graduates work for almost any employer in Canada after they finish an eligible program. The skilled work you do on a PGWP is exactly the kind of Canadian experience the Canadian Experience Class requires. After a year of qualifying skilled work, you can usually claim that experience in an Express Entry profile, which can produce a strong Comprehensive Ranking System score. So the PGWP is the bridge that turns a study permit into the work experience that supports permanent residence.",
  },
  {
    q: "What is the Canadian Experience Class for graduates?",
    a: "The Canadian Experience Class (CEC) is an Express Entry program for people who have skilled Canadian work experience, which makes it a natural fit for graduates who have worked on a PGWP. You generally need a defined amount of skilled Canadian work experience in an eligible occupation gained within a set period, along with the required language ability. CEC applicants do not need to show settlement funds, unlike most Federal Skilled Worker applicants. For many international graduates, the CEC is the most direct route from studying to permanent residence.",
  },
  {
    q: "Are there PNP streams for international graduates?",
    a: "Yes. Many provinces run Provincial Nominee Program streams aimed specifically at international graduates of their institutions, or at graduate workers in priority occupations. A provincial nomination adds 600 points to your Comprehensive Ranking System score in Express Entry, which in recent draws has been enough to clear the cut-off, though IRCC still issues the invitation. Alberta, for example, runs streams that can suit graduates and skilled workers, and we know the Alberta Advantage Immigration Program particularly well as a Canmore-based firm. The right stream depends on your province, your program and your occupation.",
  },
  {
    q: "Do I need a job offer to go from study to PR?",
    a: "Not always. The Canadian Experience Class is based on Canadian work experience rather than a standing job offer, so once you have the required skilled experience from your PGWP you can apply without a current offer. That said, a valid job offer can add points and is a requirement for some Provincial Nominee Program streams. Many graduates secure a job during or after their PGWP and use that experience, and sometimes the offer, to strengthen an Express Entry profile or qualify for a provincial nomination.",
  },
  {
    q: "How long does it take to go from study to PR?",
    a: "It varies. A typical timeline is your study program, then a PGWP, then around a year of skilled work to qualify for the Canadian Experience Class, followed by Express Entry processing of about six months after an invitation. Provincial nomination adds its own steps. In practice the journey from arriving as a student to becoming a permanent resident often spans several years and depends on your program length, the PGWP duration, and how quickly you build qualifying experience. Processing times move with volume, so we plan against current IRCC estimates.",
  },
  {
    q: "Does my choice of program affect my PR chances?",
    a: "Significantly. Whether you qualify for a Post-Graduation Work Permit, and for how long, depends on factors such as the type of institution, the program and its length, and sometimes the field of study, and these rules have been changing. Your program also shapes the occupation you can work in, which affects Canadian Experience Class and provincial eligibility. Choosing a program without checking how it feeds into a PGWP and PR is a costly mistake. Because PGWP eligibility rules change, confirm the current requirements on canada.ca before you enrol, and we help you plan it backwards from your PR goal.",
  },
  {
    q: "Should I plan my study-to-PR pathway before I apply to study?",
    a: "Absolutely. The strongest study-to-PR outcomes come from planning the whole journey before choosing a program: confirming the institution and program lead to an eligible PGWP, that the field aligns with an in-demand occupation, and that your profile will be competitive for the Canadian Experience Class or a provincial stream. Decisions made at the study-permit stage shape everything that follows. Our team maps the full pathway from the start so each step, study, PGWP, work and PR, builds on the last.",
  },
];

export default function StudyToPrPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Study to Permanent Residence in Canada: The Complete 2026 Guide",
            description:
              "Study to PR in Canada: the pathway from graduation through a PGWP to permanent residence via the Canadian Experience Class, Express Entry and PNP streams.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "Study to PR pathway support",
            description:
              "Study to PR in Canada: the pathway from graduation through a PGWP to permanent residence via the Canadian Experience Class, Express Entry and PNP streams.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Study"
        crumbs={[
          { name: "Study", path: "/study-permit" },
          { name: "Study to PR", path: PATH },
        ]}
        title={<>Study to <span className="text-brand">PR</span> in Canada: Permanent Residence</>}
        lede={
          <p>
            <strong>Study to PR in Canada</strong> is one of the most reliable routes to permanent residence, but
            graduation alone does not grant <strong>PR</strong>. The usual pathway runs from your study permit, to a
            Post-Graduation Work Permit, to skilled Canadian experience, and then to PR through the Canadian Experience
            Class or a provincial graduate stream. This guide shows how to plan it from day one.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/study-permit", label: "Study permit guide" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Planning study to PR?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Our team maps the full pathway from program choice through the PGWP to permanent residence, entirely
                online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp", note: "The bridge from study to work" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "PR from Canadian work experience" },
                { label: "Express Entry", href: "/express-entry", note: "The federal PR system" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Graduate and worker streams" },
                { label: "Alberta immigration", href: "/alberta-immigration", note: "The AAIP, our home province" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox>
            <strong>Study to PR in Canada</strong> usually means studying at a designated learning institution,
            graduating from an eligible program, obtaining a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a>, gaining skilled Canadian work experience, and
            then applying for permanent residence through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a{" "}
            <a href="/pnp">PNP</a> graduate stream. Graduation alone does not grant PR.
          </AnswerBox>

          <KeyTakeaways
            summary="Study to PR in Canada is the pathway from an international study program to permanent residence. You study at a designated learning institution, obtain a Post-Graduation Work Permit, gain skilled Canadian work experience, and then apply through the Canadian Experience Class or a Provincial Nominee Program graduate stream. Graduation alone does not grant PR, and the usual route runs through Express Entry once that experience qualifies you. The PGWP is the critical bridge, and the experience you build on it produces the Canadian Experience Class eligibility and Comprehensive Ranking System points that drive PR. Because PGWP and PR eligibility depend on program choices, the strongest outcomes come from planning the whole journey before you enrol."
            items={[
              <><strong>Study to PR</strong> runs from a <a href="/study-permit">study permit</a>, to a <a href="/work-permits/pgwp">PGWP</a>, to skilled work, to permanent residence.</>,
              <>Graduation alone does not grant PR; the <strong>PGWP</strong> is the bridge that builds the experience PR programs need.</>,
              <>The <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> is the most direct route, based on skilled Canadian experience.</>,
              <><a href="/pnp">PNP</a> graduate streams can add 600 CRS points; <a href="/alberta-immigration">Alberta</a> is the province we know best.</>,
              <>Plan the pathway <strong>before you enrol</strong>, because PGWP and PR eligibility depend on your program choices.</>,
            ]}
          />

          <h2>How the study-to-PR pathway works</h2>
          <p>
            <strong>Study to PR</strong> is not a single application; it is a sequence of carefully connected steps. You
            study at a <a href="/study-permit">designated learning institution</a>, you graduate from an eligible
            program, you obtain a <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, you use that
            permit to build skilled Canadian work experience, and then you apply for permanent residence through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a provincial graduate
            stream. Each step unlocks the next, which is why the strongest outcomes come from planning the whole journey
            before you choose a program.
          </p>
          <DataTable
            headers={["Stage", "What it is", "What it leads to"]}
            rows={[
              ["Study permit", "Full-time study at a DLI in an eligible program", "Graduation and PGWP eligibility"],
              ["PGWP", "An open work permit after graduation", "Skilled Canadian work experience"],
              ["Skilled work", "Qualifying experience in an eligible occupation", "Canadian Experience Class or PNP eligibility"],
              ["Express Entry / PNP", "Federal or provincial PR application", "Permanent residence"],
            ]}
            caption="The study-to-PR sequence. Each stage builds the eligibility for the next; confirm current rules on canada.ca."
          />

          <h2>The PGWP: the bridge from study to work</h2>
          <p>
            The <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> is the single most important step in the
            pathway. It is an <strong>open work permit</strong>, so eligible graduates can work for almost any employer
            in Canada, and the skilled work you do on it is exactly the Canadian experience that permanent-residence
            programs reward. Whether you qualify, and for how long, depends on factors such as your institution, your
            program and its length, and sometimes your field of study, and these rules have been changing.
          </p>
          <Callout type="brand" title="Plan your program around the PGWP">
            PGWP eligibility flows directly from your study choices, the type of institution, the program, its length,
            and increasingly the field of study. Choosing a program without checking how it feeds into a PGWP is one of
            the costliest mistakes a student can make. Because these rules change, confirm the current PGWP requirements
            on canada.ca before you enrol, and plan backwards from your PR goal.
          </Callout>

          <h2>The Canadian Experience Class for graduates</h2>
          <p>
            For most international graduates, the <a href="/express-entry/canadian-experience-class">Canadian Experience
            Class (CEC)</a> is the most direct route to permanent residence. It is an{" "}
            <a href="/express-entry">Express Entry</a> program for people with skilled Canadian work experience, which
            is exactly what you build on a PGWP. You generally need one year of skilled work experience in an eligible
            NOC TEER occupation, gained within a set period, plus the language ability set out in Canadian Language
            Benchmark (CLB) levels.</p>
          <p>Unlike most{" "}
            <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> applicants, CEC applicants do not
            need to show settlement funds. Once you have the experience, you can claim it in an Express Entry profile and
            be scored under the <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a>.
          </p>

          <h2>PNP graduate streams</h2>
          <p>
            If your CRS is not yet high enough for a general federal draw, two routes can help: Express Entry
            category-based draws, which target specific occupations or French ability and can invite candidates at a
            lower score, and a <a href="/pnp">Provincial Nominee Program (PNP)</a>. Many provinces run streams aimed
            specifically at international graduates of their institutions, or at graduate workers in priority
            occupations.</p>
          <p>An enhanced nomination adds <strong>600 CRS points</strong>, putting most candidates well
            above the typical federal cut-off, though IRCC still issues the invitation. As a Canmore-based firm, we know <a href="/alberta-immigration">Alberta</a> and the Alberta
            Advantage Immigration Program best, and several Alberta streams can suit graduates and
            skilled workers. The right stream depends on your province, your program and your occupation, so we match
            your profile to where you are most competitive.
          </p>

          <h2>The graduate pathways at a glance</h2>
          <DataTable
            headers={["Route to PR", "Best for", "Key feature"]}
            rows={[
              ["Canadian Experience Class", "Graduates with skilled PGWP experience", "No settlement funds required; experience-based"],
              ["Federal Skilled Worker", "Graduates with foreign and Canadian experience", "Points-based, settlement funds usually required"],
              ["PNP graduate streams", "Graduates of a province's institutions or in-demand roles", "+600 CRS with an enhanced nomination"],
              ["PNP worker streams", "Skilled graduates with a provincial job offer", "Province-driven selection by occupation"],
            ]}
            caption="The main PR routes for graduates. The Canadian Experience Class is the most common, but a PNP can be decisive."
          />

          <h2>How long does study to PR take?</h2>
          <p>
            A typical timeline runs through your study program, then a PGWP, then around a year of skilled work to
            qualify for the Canadian Experience Class, followed by Express Entry processing of roughly six months after
            an invitation. Provincial nomination adds its own steps. In practice the journey from arriving as a student
            to becoming a permanent resident often spans several years, shaped by your program length, your PGWP
            duration and how quickly you build qualifying experience.</p>
          <p>IRCC has at times opened dedicated in-Canada PR
            pathways for recent graduating classes, such as the Class of 2024 and 2025, so it is worth checking whether
            any current measure fits your profile. Processing times move with volume, so we plan against current IRCC
            estimates rather than a fixed promise.
          </p>

          <h2>Plan the whole journey from day one</h2>
          <p>
            The students who succeed at study to PR almost always plan the journey before they enrol. That means
            confirming the institution and program lead to an eligible PGWP, that the field aligns with an in-demand
            occupation, and that the profile will be competitive for the Canadian Experience Class or a provincial
            stream. Decisions made at the study-permit stage, the program, the city, even the start date, shape every
            step that follows. See our guides to <a href="/study-permit/work-while-studying">working while studying</a>{" "}
            and <a href="/study-permit/proof-of-funds">proof of funds</a> as you prepare.
          </p>

          <h2>How Wild Mountain helps you go from study to PR</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team maps the full study to PR in Canada pathway from the
            start, so each step builds on the last. We help confirm that your program leads to an eligible PGWP, plan the
            Canadian Experience Class or provincial stream that suits you, and represent you with IRCC at each stage. We
            work entirely online, by video call and secure document sharing. We are not affiliated with any government;
            what we do is build the strongest study to PR pathway for your situation.
          </p>
          <Steps
            steps={[
              { title: "Plan backwards from PR", desc: "We confirm that your chosen institution and program lead to an eligible PGWP and align with an in-demand occupation for the Canadian Experience Class or a PNP." },
              { title: "Build experience", desc: "After graduation we help you secure the PGWP and use it to build the skilled Canadian work experience that PR programs require, with clear written fees." },
              { title: "Apply for PR", desc: "We prepare your Express Entry profile or provincial application and represent you with IRCC through to permanent residence." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Your route from study to PR</h2>
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that turn studying into permanent residence.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={BookOpen} title="Study permits" desc="How to apply to study in Canada at a designated learning institution." href="/study-permit" />
            <FeatureCard icon={Briefcase} title="Post-Graduation Work Permit" desc="The open permit that bridges study to the work experience PR needs." href="/work-permits/pgwp" />
            <FeatureCard icon={Rocket} title="Canadian Experience Class" desc="The most direct route to PR for graduates with skilled Canadian experience." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={GraduationCap} title="Express Entry" desc="The federal PR system where graduate experience produces a strong CRS score." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Graduate and worker streams that can add 600 CRS points with a nomination." href="/pnp" />
            <FeatureCard icon={Building2} title="Alberta immigration" desc="The Alberta Advantage Immigration Program, the province we know best." href="/alberta-immigration" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Turn your studies into permanent residence"
        sub="Tell us your plans and our licensed team will map the full study-to-PR pathway, with honest advice and clear fees."
      />
    </>
  );
}
