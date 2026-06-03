import type { Metadata } from "next";
import { Languages, Briefcase, Globe, Map, Rocket, FileCheck2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/francophone-mobility";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Francophone Mobility Work Permit",
  titleAbsolute: "Francophone Mobility Work Permit 2026 (LMIA-Exempt)",
  description:
    "The Francophone Mobility work permit lets French-speaking workers work in Canada outside Quebec with no LMIA. Eligibility, the NCLC 5 French level and how to apply.",
  path: PATH,
  keywords: [
    "francophone mobility work permit",
    "mobilite francophone",
    "lmia-exempt french work permit",
    "french speaking work permit canada",
    "work in canada outside quebec french",
    "francophone mobility C16",
  ],
});

const faqs = [
  {
    q: "What is the Francophone Mobility work permit?",
    a: "Francophone Mobility is an LMIA-exempt work permit under Canada's International Mobility Program (exemption code C16). It lets French-speaking foreign workers take a job with a Canadian employer located in a province or territory outside Quebec, without the employer needing a Labour Market Impact Assessment. It exists to support French-speaking immigration to communities outside Quebec, so it is faster and lighter for employers than the standard LMIA route when the worker and the role qualify.",
  },
  {
    q: "What level of French do I need for Francophone Mobility?",
    a: "You generally need at least Niveau de compétence linguistique canadien (NCLC) 5 in oral comprehension and oral expression, the French equivalent of CLB 5 speaking and listening. You can usually show this with a recognised French test such as the TEF or TCF, or by having completed secondary or post-secondary studies in French. We confirm the current evidence rules on canada.ca for your case before you apply, because language requirements can be updated.",
  },
  {
    q: "Does Francophone Mobility apply in Quebec?",
    a: "No. The job must be located in a province or territory outside Quebec. Quebec runs its own immigration and worker selection system with separate rules, which we do not handle. Francophone Mobility is specifically designed to bring French-speaking workers to the rest of Canada, from British Columbia and Alberta through Ontario and the Atlantic provinces.",
  },
  {
    q: "Which jobs qualify for the Francophone Mobility work permit?",
    a: "Since the 2023 expansion, Francophone Mobility covers a broad range of occupations across National Occupational Classification (NOC) TEER categories 0, 1, 2, 3, 4 and 5, with primary agricultural occupations excluded. That means it now reaches many roles that the older, skilled-only version did not. The job still has to be genuine, full details documented, and we check your specific NOC code against the current rules before you rely on this route.",
  },
  {
    q: "Does my employer need an LMIA?",
    a: "No. Francophone Mobility is LMIA-exempt, so there is no labour-market test and no advertising or recruitment process for the employer. However, LMIA-exempt does not mean requirement-free: the Canadian employer usually still submits an offer of employment through the Employer Portal and pays the employer compliance fee before you apply. We make sure the employer side and the worker side line up so the application is clean.",
  },
  {
    q: "Can Francophone Mobility lead to permanent residence?",
    a: "Often, yes, indirectly. The permit itself is a temporary-work tool, but the skilled Canadian experience you build on it can support permanent residence, and your French is a genuine advantage. Strong French can add points and open category-based Express Entry draws for French-language proficiency, and several Provincial Nominee Program streams welcome French-speaking workers outside Quebec. We plan the work-permit stage with the eventual PR route in mind.",
  },
  {
    q: "How do I prove my French proficiency?",
    a: "The two common routes are a standardised French test (such as the TEF Canada or TCF Canada) showing at least NCLC 5 in oral comprehension and expression, or evidence that you completed your secondary or post-secondary education in French. Which is simpler depends on your background. We advise on the strongest evidence for your situation and prepare the supporting documents so the officer can see the requirement is met.",
  },
];

export default function FrancophoneMobilityPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Francophone Mobility Work Permit: Complete 2026 Guide",
            description:
              "The Francophone Mobility work permit lets French-speaking workers work in Canada outside Quebec without an LMIA. Eligibility, the NCLC 5 French level and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-28",
          }),
          serviceLd({
            name: "Francophone Mobility work permit support",
            description:
              "The Francophone Mobility work permit lets French-speaking workers work in Canada outside Quebec without an LMIA. Eligibility, the NCLC 5 French level and how to apply.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Francophone Mobility", path: PATH },
        ]}
        title={<>Francophone Mobility <span className="text-brand">work permit</span></>}
        lede={
          <p>
            The <strong>Francophone Mobility work permit</strong> lets French-speaking workers take a job in Canada
            outside Quebec with no LMIA. It is one of the fastest, lightest routes for a qualifying worker and employer.
            This guide explains who qualifies, the French level you need, the jobs it covers, and how it can lead to
            permanent residence.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/work-permits", label: "Explore work permits" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Languages className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Speak French? Work in Canada</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                If you have a job offer outside Quebec and moderate French, our team can prepare your Francophone
                Mobility application, entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "International Mobility Program", href: "/work-permits/international-mobility-program", note: "The LMIA-exempt framework C16 sits in" },
                { label: "Work permits", href: "/work-permits", note: "All Canadian work permit routes" },
                { label: "LMIA work permits", href: "/work-permits/lmia", note: "The route Francophone Mobility lets you skip" },
                { label: "Express Entry category draws", href: "/express-entry/category-based-draws", note: "French-language proficiency category" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Francophone streams outside Quebec" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox>
            The <strong>Francophone Mobility work permit</strong> is an LMIA-exempt Canadian work permit (International
            Mobility Program code <strong>C16</strong>) for French-speaking workers taking a job outside Quebec. You
            generally need French at <strong>NCLC 5</strong> in speaking and listening, and a job offer in an eligible
            occupation. Because there is no labour-market test, it is faster and cheaper for employers than the{" "}
            <a href="/work-permits/lmia">LMIA route</a>.
          </AnswerBox>

          <KeyTakeaways
            summary="Francophone Mobility is an LMIA-exempt work permit under Canada's International Mobility Program (exemption code C16) for French-speaking workers taking a job in a province or territory outside Quebec. Applicants generally need French at NCLC 5 in oral comprehension and oral expression, shown by a recognised test or French-language education, plus a genuine job offer. Since the 2023 expansion it covers occupations across NOC TEER 0 to 5, with primary agriculture excluded. The employer needs no LMIA, though they usually still submit an offer of employment and pay the compliance fee. The skilled Canadian experience and strong French can later support permanent residence."
            items={[
              <>The <strong>Francophone Mobility work permit</strong> is <strong>LMIA-exempt</strong> (IMP code C16).</>,
              <>You generally need French at <strong>NCLC 5</strong> in speaking and listening.</>,
              <>The job must be <strong>outside Quebec</strong>; it covers <strong>NOC TEER 0 to 5</strong> (primary agriculture excluded).</>,
              <>No labour-market test means it is faster than the <a href="/work-permits/lmia">LMIA route</a>.</>,
              <>French is an advantage for PR through <a href="/express-entry/category-based-draws">category-based draws</a> and francophone <a href="/pnp">PNP</a> streams.</>,
            ]}
          />

          <h2>What is the Francophone Mobility work permit?</h2>
          <p>
            Francophone Mobility is a work permit issued under Canada&apos;s{" "}
            <a href="/work-permits/international-mobility-program">International Mobility Program</a>, using the
            LMIA-exemption code <strong>C16</strong>. It lets a French-speaking foreign worker accept a job with a
            Canadian employer in any province or territory <strong>except Quebec</strong>, without that employer
            needing a <a href="/work-permits/lmia">Labour Market Impact Assessment</a>.
          </p>
          <p>
            The policy goal behind it is simple. Canada wants more French-speaking newcomers settling in communities
            outside Quebec, and removing the LMIA makes hiring a French-speaking worker far easier for employers across
            the rest of the country. For the worker, it can be one of the quickest ways into Canada to work.
          </p>

          <Callout type="brand" title="Mobilité Francophone, the same route">
            You may see this called <strong>Mobilité Francophone</strong> in French. It is the same work permit and the
            same exemption code, C16. The route is about your French ability and the location of the job, not your
            nationality, so French speakers from many countries can use it.
          </Callout>

          <h2>Who qualifies for Francophone Mobility?</h2>
          <p>
            There are three core tests: your French, your job offer, and where the job is located. Get all three right
            and the route is usually straightforward.
          </p>
          <DataTable
            headers={["Requirement", "What it means"]}
            rows={[
              ["French proficiency", "Generally NCLC 5 or higher in oral comprehension and oral expression, shown by a recognised test or French-language studies."],
              ["A job offer", "A genuine offer of employment from a Canadian employer, in an eligible occupation."],
              ["Outside Quebec", "The work location must be in a province or territory other than Quebec."],
              ["Eligible occupation", "A role in NOC TEER 0, 1, 2, 3, 4 or 5, with primary agricultural occupations excluded."],
            ]}
            caption="The core Francophone Mobility requirements. Exact thresholds are set by IRCC and can change, so confirm current details on canada.ca."
          />
          <p>
            The French requirement is the part people ask about most. NCLC 5 in speaking and listening is a moderate,
            conversational level, not full fluency. You can usually prove it with a French test such as the TEF Canada
            or TCF Canada, or by showing you studied in French at secondary or post-secondary level.
          </p>

          <h2>Which jobs are eligible?</h2>
          <p>
            This route became far more useful after a 2023 expansion. The older version was limited to skilled,
            higher-TEER roles. The current version reaches occupations across <strong>NOC TEER 0 to 5</strong>, which
            includes many mid-skill and service roles, with primary agricultural occupations set aside for other
            programs.
          </p>
          <p>
            In practice that means a French-speaking worker can use Francophone Mobility for a wide span of jobs, from
            management and professional roles to many trades, administrative and service positions. We always confirm
            your specific NOC code against the current list before you rely on it.
          </p>

          <Callout type="info" title="LMIA-exempt is not requirement-free">
            Even though there is no LMIA, the Canadian employer usually still submits an{" "}
            <strong>offer of employment</strong> through the Employer Portal and pays the employer compliance fee before
            you apply. The fee can change, so confirm the current amount on canada.ca.
          </Callout>

          <h2>Francophone Mobility versus an LMIA work permit</h2>
          <p>
            Most workers weighing this route are comparing it with a standard{" "}
            <a href="/work-permits/lmia">LMIA work permit</a>. Both end in a work permit, but the path is very
            different.
          </p>
          <DataTable
            headers={["Feature", "Francophone Mobility", "LMIA work permit"]}
            rows={[
              ["Labour-market test", "None (LMIA-exempt, code C16)", "Employer must obtain a positive LMIA from ESDC"],
              ["Key worker condition", "French at NCLC 5 in speaking and listening", "No language threshold set by the LMIA itself"],
              ["Where the job is", "Outside Quebec", "Anywhere in Canada"],
              ["Employer burden", "Offer of employment plus compliance fee", "Advertising, recruitment, LMIA application and fee"],
              ["Best when", "You speak French and have a job offer outside Quebec", "You do not qualify for an LMIA exemption"],
            ]}
            caption="Francophone Mobility is faster and lighter when you qualify; the LMIA route is the fallback when no exemption applies."
          />

          <h2>From work permit to permanent residence</h2>
          <p>
            A Francophone Mobility permit is a strong first step, not a dead end. The skilled Canadian work experience
            you gain can support permanent residence, and your French becomes a real asset rather than just a
            requirement.
          </p>
          <p>
            Strong French can add points under Express Entry and open{" "}
            <a href="/express-entry/category-based-draws">category-based draws</a> for French-language proficiency,
            where cut-offs have often been lower than general draws. Several{" "}
            <a href="/pnp">Provincial Nominee Program</a> streams also actively welcome French-speaking workers settling
            outside Quebec. We map the work-permit stage with that destination in mind.
          </p>

          <h2>How Wild Mountain Immigration helps with Francophone Mobility</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms your French evidence, checks the job and
            NOC code against the current C16 rules, and prepares a complete application alongside the employer&apos;s
            offer of employment.
          </p>
          <p>
            We represent clients entirely online, by video call and secure document sharing, wherever you are. We are
            not affiliated with any government; what we do is make sure your Francophone Mobility package is accurate,
            well-evidenced and ready, with honest advice and clear written fees.
          </p>
          <Steps
            steps={[
              { title: "Confirm French and the job", desc: "We check your French evidence reaches NCLC 5 and that the role and its NOC code qualify for code C16 outside Quebec." },
              { title: "Build the package", desc: "We assemble your offer of employment, French proof and supporting documents, and coordinate the employer's compliance-fee steps." },
              { title: "Apply and plan for PR", desc: "We submit your work-permit application, then map how your French and Canadian experience can lead to permanent residence." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related work and PR routes</h2>
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that connect to Francophone Mobility.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Globe} title="International Mobility Program" desc="The LMIA-exempt framework that Francophone Mobility (code C16) sits within." href="/work-permits/international-mobility-program" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="The full picture of Canadian work permits, both LMIA-based and LMIA-exempt." href="/work-permits" />
            <FeatureCard icon={FileCheck2} title="LMIA work permits" desc="The standard route, and the labour-market test that Francophone Mobility lets you skip." href="/work-permits/lmia" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Where strong French and Canadian experience can lead to permanent residence." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Francophone streams that welcome French-speaking workers outside Quebec." href="/pnp" />
            <FeatureCard icon={Languages} title="Category-based draws" desc="Express Entry rounds that target French-language proficiency, often with lower cut-offs." href="/express-entry/category-based-draws" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Speak French and have a Canadian job offer?"
        sub="Tell us about the role and our licensed team will prepare your Francophone Mobility work-permit application, with honest advice and clear fees."
      />
    </>
  );
}
