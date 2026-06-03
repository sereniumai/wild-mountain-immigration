import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/yukon/skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Yukon Skilled Worker Program, 2026 Guide",
  titleAbsolute: "YNP Skilled Worker Program: Yukon 2026",
  description:
    "Yukon Skilled Worker Program 2026: who qualifies, the YNP job offer, experience, language and education rules. Talk to an RCIC about your route.",
  path: PATH,
  keywords: [
    "Yukon Skilled Worker Program",
    "YNP skilled worker",
    "Yukon job offer PR",
    "employer-driven Yukon nomination",
    "Yukon Nominee Program skilled worker",
  ],
});

const faqs = [
  {
    q: "Who qualifies for the Yukon Skilled Worker Program?",
    a: "The Yukon Skilled Worker Program is for candidates who hold a full-time, permanent job offer from an eligible Yukon employer in a higher-skilled occupation (broadly NOC TEER 0–3), have roughly a year of relevant work experience, meet the language requirement for their role and have the education the position needs. Because the stream is employer-driven, the employer applies on your behalf, you cannot self-nominate. We can confirm honestly whether your profile fits before you invest time.",
  },
  {
    q: "Do I need a job offer for the YNP Skilled Worker stream?",
    a: "Yes. A genuine, full-time, permanent (non-seasonal, ongoing) job offer from an eligible Yukon employer is the foundation of the Skilled Worker stream, there is no version of this route without one. The employer must register with the program, demonstrate it could not fill the role locally and submit the nomination application. The job offer is what turns a Yukon job into a realistic path to permanent residence.",
  },
  {
    q: "What is the difference between Skilled Worker and Critical Impact Worker?",
    a: "Both are employer-driven base streams, but they cover different skill levels. The Yukon Skilled Worker Program targets higher-skilled roles (broadly NOC TEER 0–3) and asks for about a year of relevant experience. The Critical Impact Worker stream covers lower-skilled TEER 4–5 roles, many service and labour occupations, with a shorter experience requirement and a CLB 4 language bar. The right stream depends on your occupation's TEER level.",
  },
  {
    q: "Is the Yukon Skilled Worker Program enhanced or base?",
    a: "It is a base (paper) nomination. The Skilled Worker stream is not connected to federal Express Entry, so a nomination adds no CRS points; once Yukon nominates you, you submit a separate permanent-residence application directly to IRCC, which generally takes longer than the enhanced route. If you already have an Express Entry profile, the Yukon Express Entry stream, which adds 600 CRS points, may be the stronger option, and we can compare the two for you.",
  },
  {
    q: "What language level do I need for the YNP Skilled Worker stream?",
    a: "Language requirements scale with your occupation's skill level under the Yukon Nominee Program, broadly higher Canadian Language Benchmark (CLB) levels for higher-TEER roles. You must take an approved English or French test and meet the level set for your position. Because the published CLB-by-TEER matrix is detailed and updated regularly, confirm the exact requirement for your occupation on yukon.ca before relying on it.",
  },
  {
    q: "When can I apply to the Yukon Skilled Worker Program in 2026?",
    a: "The Yukon Nominee Program selects through fixed expression-of-interest (EOI) intake windows rather than year-round. For 2026, yukon.ca lists two windows, roughly January 19–30 and July 6–17, though Yukon can adjust dates and the territory's allocation is limited. Because windows are short and the cap is small, having your employer and documents ready in advance matters. Always confirm the current intake dates on yukon.ca before relying on them.",
  },
  {
    q: "Does a Yukon nomination guarantee permanent residence?",
    a: "No. A nomination is a territorial endorsement, not permanent residence. After Yukon nominates you, you still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function YukonSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Yukon Skilled Worker Program, 2026 RCIC Guide",
            description:
              "Yukon Skilled Worker Program 2026: who qualifies, the YNP job offer, experience, language and education rules, and how the employer-driven process works.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Yukon Skilled Worker Program application support",
            description:
              "Yukon Skilled Worker Program 2026: who qualifies, the YNP job offer, experience, language and education rules, and how the employer-driven process works.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Yukon (YNP), Skilled Worker"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Yukon (YNP)", path: "/pnp/yukon" },
          { name: "Skilled Worker", path: PATH },
        ]}
        title={<>Yukon Skilled Worker <span className="text-brand">Program</span></>}
        lede={
          <p>
            The <strong>Yukon Skilled Worker Program</strong> nominates skilled workers for permanent residence when they
            hold a full-time, permanent job offer from an eligible Yukon employer. Because the stream is employer-driven, a
            genuine Yukon job offer is the key that unlocks it. This RCIC-led guide covers who qualifies, the eligibility
            rules and how the application works.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have a Yukon job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Skilled Worker stream lives or dies on the employer-driven job offer and short EOI windows. Get an
                honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Yukon Nominee Program (YNP)", href: "/pnp/yukon", note: "All Yukon streams explained" },
                { label: "Critical Impact Worker", href: "/pnp/yukon/critical-impact-worker", note: "Lower-skilled TEER 4–5 roles" },
                { label: "Yukon Express Entry", href: "/pnp/yukon/express-entry", note: "The enhanced +600 CRS route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Yukon Skilled Worker Program is an employer-driven Yukon Nominee Program stream for higher-skilled workers, broadly NOC TEER 0 to 3. It nominates you for permanent residence when you hold a genuine, full-time, permanent job offer from an eligible Yukon employer, who applies on your behalf. You also need about a year of relevant experience plus the language and education set for your occupation. It is a base nomination with no CRS points, leading to a separate IRCC application for permanent residence."
            items={[
              <>The <strong>Yukon Skilled Worker Program</strong> nominates higher-skilled workers (broadly NOC TEER 0–3) for permanent residence in Yukon.</>,
              <>It is <strong>employer-driven</strong>, you need a genuine, full-time, permanent <strong>Yukon job offer</strong> from an eligible employer, who applies for you.</>,
              <>Core eligibility: the job offer, about <strong>1 year of relevant experience</strong>, the language level set for your occupation and the right education.</>,
              <>It is a <strong>base (paper) nomination</strong>, it adds no CRS points; you then apply separately to IRCC for permanent residence.</>,
              <>Yukon selects through short <strong>EOI intake windows</strong> (2026: roughly Jan 19–30 and Jul 6–17), and the 2026 allocation is about 282.</>,
            ]}
          />

          <h2>What is the Yukon Skilled Worker Program?</h2>
          <p>
            The <strong>Yukon Skilled Worker Program</strong> is the base, employer-driven stream of the Yukon Nominee
            Program (YNP) for higher-skilled workers, broadly those in occupations classified as{" "}
            <abbr title="National Occupational Classification">NOC</abbr> TEER 0–3. It lets the Government of Yukon
            nominate a worker who already holds a <strong>full-time, permanent job offer from an eligible Yukon
            employer</strong>, where the employer has shown it could not fill the role from the local labour market. A
            nomination is your stepping stone to applying to IRCC for permanent residence, a clear path from a Yukon job
            offer to PR.
          </p>
          <p>
            The defining feature is that the stream is <strong>employer-driven</strong>: the Yukon employer registers
            with the program and submits the nomination application, so you cannot self-nominate. Yukon&apos;s 2026
            nomination allocation is about <strong>282</strong> across all YNP streams, one of the smallest in the
            country after IRCC cut provincial and territorial allocations nationwide (source: yukon.ca, 2026).</p>
          <p>With so
            few spaces, the territory concentrates on its highest-priority profiles, so meeting the Skilled Worker
            stream&apos;s minimum eligibility is not the same as receiving a nomination. Figures and rules change
            frequently, so always verify the current position on yukon.ca before acting.
          </p>
          <Callout type="brand" title="The Skilled Worker stream is built around a Yukon employer">
            With the <strong>Yukon Skilled Worker Program</strong>, the practical test is whether a Yukon employer needs
            and offers you a full-time, permanent role in a higher-skilled (TEER 0–3) occupation and registers with the
            program. If your occupation sits in the lower-skilled TEER 4–5 band, the{" "}
            <a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a> stream is the route to consider
            instead.
          </Callout>

          <h2>Who is the YNP Skilled Worker stream for?</h2>
          <p>
            The <strong>YNP skilled worker</strong> stream is designed for people whose occupation is higher-skilled and
            who have secured a permanent, full-time job offer, for example trades and technicians in Yukon, supervisors
            and many regulated and professional roles in TEER 0–3. It often fits in-demand occupations and skilled jobs in
            Whitehorse where a local employer cannot recruit from the territory.</p>
          <p>It suits candidates who do
            not have a federal Express Entry profile, or whose Comprehensive Ranking System (CRS) score is not yet
            competitive, but who have a committed Yukon employer behind them. If you already have an active Express Entry profile, compare this
            stream with the enhanced <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> route first, and you can
            check where you stand with our <a href="/tools/crs-calculator">free CRS calculator</a>.
          </p>

          <h2>Yukon Skilled Worker Program eligibility</h2>
          <p>
            <strong>Eligibility</strong> for the Yukon Skilled Worker Program rests on a connected set of requirements
            you must meet when your employer submits the nomination. The table below summarises the core 2026
            requirements; the official, controlling list lives on yukon.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the Skilled Worker stream asks for"]}
            rows={[
              ["Job offer", "A genuine, full-time, permanent (ongoing, non-seasonal) offer from an eligible Yukon employer in a higher-skilled occupation, broadly NOC TEER 0–3"],
              ["Work experience", "About one year of relevant, recent experience in the occupation you are offered"],
              ["Language", "An approved English or French test result meeting the CLB level set for your occupation's skill level (higher TEER = higher CLB)"],
              ["Education", "The education or credentials the offered occupation requires; foreign credentials may need an Educational Credential Assessment (ECA)"],
              ["Employer eligibility", "The Yukon employer must register with the YNP, show genuine local recruitment efforts and submit the application on your behalf"],
              ["Intent & admissibility", "Genuine intention to live and work in Yukon, plus federal medical, security and admissibility requirements at the IRCC stage"],
            ]}
            caption="Yukon Skilled Worker Program core eligibility, accurate as of May 2026 (yukon.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Employer-driven means the employer applies">
            Unlike points-ranked streams you submit yourself, the Skilled Worker stream is initiated by your Yukon
            employer, who registers with the program and submits the offer of employment. The employer does not need a
            Labour Market Impact Assessment (LMIA) for the nomination, but it must show genuine Yukon employer
            recruitment efforts to prove it could not fill the role locally. The employer is also responsible for the
            IRCC employer compliance fee (currently about <strong>$230</strong>). As the candidate, you do not pay that
            particular fee.
          </Callout>

          <h2>How is it different from the other Yukon streams?</h2>
          <p>
            The clearest way to place the Skilled Worker stream is alongside Yukon&apos;s other worker routes. The{" "}
            <strong>Skilled Worker</strong> and <strong>Critical Impact Worker</strong> streams are both base (paper)
            nominations, separated by skill level; the <strong>Yukon Express Entry</strong> stream is the enhanced
            option that adds 600 CRS points to a federal profile. The summary below shows where each fits.
          </p>
          <DataTable
            headers={["Stream", "Skill level", "Type"]}
            rows={[
              [<a href="/pnp/yukon/skilled-worker">Skilled Worker</a>, "Higher-skilled (broadly NOC TEER 0–3), ~1 year experience", "Base (paper)"],
              [<a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a>, "Lower-skilled (NOC TEER 4–5), shorter experience, CLB 4", "Base (paper)"],
              [<a href="/pnp/yukon/express-entry">Yukon Express Entry</a>, "Already in the federal Express Entry pool with a Yukon job offer", "Enhanced (+600 CRS)"],
            ]}
            caption="Yukon Nominee Program worker streams (yukon.ca, 2026). All need a Yukon job offer. Eligibility does not guarantee a nomination."
          />

          <h2>How do you apply for the Yukon Skilled Worker Program?</h2>
          <p>
            <strong>How to apply</strong> to the Skilled Worker stream follows a clear, employer-led sequence. First, you
            secure a genuine full-time, permanent job offer from an eligible Yukon employer. The employer then registers
            with the program and submits the offer of employment, paying the IRCC employer compliance fee (about $230).
            You and your employer then submit the Skilled Worker application during an open{" "}
            <strong>EOI intake window</strong>.</p>
          <p>For 2026, yukon.ca lists roughly <strong>January 19–30</strong> and{" "}
            <strong>July 6–17</strong>. If Yukon selects you, the territory issues a Yukon nominee certificate, and you then apply
            to <strong>IRCC</strong> for permanent residence on a separate paper application, because this is a base
            nomination. Because intake windows are short and the cap is small, preparing well ahead of a window is the
            single biggest advantage.
          </p>
          <Callout type="warning" title="Eligibility does not guarantee a nomination">
            With only about 282 nominations available across all YNP streams in 2026, the territory prioritises its
            highest-need profiles, its stated 2026 priorities include health-care workers, candidates with recent Yukon
            work or residence, Yukon University graduates, French-speaking (Francophone) applicants and roles in rural
            communities. Meeting the Skilled Worker stream&apos;s basic eligibility places you in contention, but it does
            not entitle you to a nomination. Be cautious of any source that implies a place is guaranteed.
          </Callout>

          <h2>How long does the Yukon Skilled Worker Program take?</h2>
          <p>
            Timelines run in stages. The first variable is simply waiting for an open <strong>EOI window</strong> and
            being selected within Yukon&apos;s limited allocation. After a complete application is submitted, territorial
            processing of the nomination typically takes a few months.</p>
          <p>Because the Skilled Worker stream is a{" "}
            <strong>base, paper-based</strong> nomination, the federal stage is a separate IRCC application that generally
            takes longer than the roughly six months IRCC targets for enhanced (Express Entry) applications.
            Realistically, most candidates should plan for the better part of a year, sometimes more, from application
            to permanent residence, and confirm current service standards on yukon.ca and canada.ca.
          </p>

          <h2>How Wild Mountain Immigration helps with your Yukon Skilled Worker application</h2>
          <p>
            For the <strong>Yukon Skilled Worker Program</strong>, the practical hurdle is almost always the
            employer-driven job offer and the short EOI windows. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team confirms your
            eligibility against the wider <a href="/pnp/yukon">Yukon Nominee Program</a> priorities, checks that your
            occupation, experience, language and education line up with the stream, and makes sure your employer&apos;s
            offer of employment and your documents are ready before a window opens.</p>
          <p>If you are already in Canada on a{" "}
            <a href="/work-permits">work permit</a>, we factor that in, and if you hold an{" "}
            <a href="/express-entry">Express Entry</a> profile we compare this base route with the enhanced{" "}
            <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> stream. We prepare a nomination application that
            stands up to scrutiny and represent you with the territory and with IRCC, catching the avoidable mistakes
            that cause refusals.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own{" "}
            <strong>Yukon Skilled Worker Program</strong> application an expert check before you submit, once your
            permanent, full-time job offer is in hand, and you can <a href="/contact">contact our team</a> first.
            Figures here are current to May 2026 and change, so we always confirm the live yukon.ca page before
            advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have a Yukon job offer? Find out if you qualify"
        sub="Get started with a licensed RCIC for an honest read on your Yukon Skilled Worker eligibility and the strongest route to permanent residence in Yukon."
      />
    </>
  );
}
