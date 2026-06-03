import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/yukon/critical-impact-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Yukon Critical Impact Worker Program 2026",
  titleAbsolute: "YNP Critical Impact Worker: Yukon 2026",
  description:
    "Yukon Critical Impact Worker Program 2026: eligibility, CLB 4 language, the Yukon job offer you need and how to apply. RCIC-led YNP guide.",
  path: PATH,
  keywords: [
    "Yukon Critical Impact Worker Program",
    "YNP Critical Impact Worker",
    "Yukon semi-skilled immigration",
    "Yukon employer job offer PR",
    "Yukon Nominee Program",
  ],
});

const faqs = [
  {
    q: "Who is the Yukon Critical Impact Worker Program for?",
    a: "It is for workers filling intermediate or lower-skilled roles (NOC TEER 4 or 5) that are critical to a Yukon employer, for example many service, hospitality, care-support and labour occupations. You must hold a genuine, full-time, ongoing job offer from an eligible Yukon employer who registers with the program. If your role is higher-skilled (TEER 0–3), the Skilled Worker stream is the right route instead. We can confirm honestly which YNP stream matches your occupation before you invest time.",
  },
  {
    q: "What language level do I need for the Critical Impact Worker stream?",
    a: "The Critical Impact Worker stream generally requires Canadian Language Benchmark (CLB) 4 across all four abilities, reading, writing, listening and speaking, on an approved English or French test. CLB 4 is a lower threshold than the Skilled Worker stream, reflecting the lower-skilled nature of the roles. Because the published CLB-by-occupation requirements are detailed and updated periodically, confirm the current minimum against the yukon.ca program guide before testing.",
  },
  {
    q: "Is the Critical Impact Worker stream base or enhanced?",
    a: "It is a base (paper) nomination. It is not connected to federal Express Entry, so a nomination adds no Comprehensive Ranking System (CRS) points. Once Yukon nominates you, you submit a separate permanent-residence application directly to IRCC, which is generally processed more slowly than an enhanced application. If you already have an Express Entry profile, the Yukon Express Entry stream, which adds 600 CRS points, may be worth exploring instead.",
  },
  {
    q: "Do I need a job offer to apply?",
    a: "Yes. Like almost every Yukon Nominee Program stream, the Critical Impact Worker stream is employer-driven. You must hold a genuine, full-time, ongoing job offer from an eligible Yukon employer who registers with the program and submits the offer of employment. The only YNP stream that skips a job offer is the Business Nominee stream, where you establish or buy a Yukon business instead.",
  },
  {
    q: "How long does the Critical Impact Worker nomination take?",
    a: "Timelines run in stages. First you wait for an open expression-of-interest (EOI) intake window and selection within Yukon's limited allocation. After a complete application is submitted, territorial processing of the nomination typically takes a few months. Because this is a base stream, the IRCC permanent-residence application that follows is paper-based and generally takes longer than the roughly six months IRCC targets for enhanced applications. Plan for the better part of a year overall, and verify current service standards on yukon.ca and canada.ca.",
  },
  {
    q: "Does meeting the requirements guarantee a nomination?",
    a: "No. Yukon's 2026 nomination allocation is small, about 282 spaces across all streams, so the territory prioritises its highest-need profiles. Meeting the Critical Impact Worker stream's basic eligibility places you in contention but does not entitle you to a nomination, and a nomination is not permanent residence: IRCC makes the final decision on a separate application. We build the strongest realistic case and flag risks early.",
  },
  {
    q: "Who pays the employer compliance fee?",
    a: "Under the YNP, the Yukon employer that hires you is responsible for the IRCC employer compliance fee (currently about $230) when the offer of employment is submitted, along with meeting the program's employer requirements. As the candidate, you do not pay that particular fee. Program and federal fees change, so confirm current amounts on yukon.ca and canada.ca before applying.",
  },
];

export default function YukonCriticalImpactWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Yukon Critical Impact Worker Program, 2026 RCIC Guide",
            description:
              "Yukon Critical Impact Worker Program 2026: eligibility, CLB 4 language, the Yukon job offer you need and how to apply. RCIC-led YNP guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Yukon Critical Impact Worker Program application support",
            description:
              "Yukon Critical Impact Worker Program 2026: eligibility, CLB 4 language, the Yukon job offer you need and how to apply. RCIC-led YNP guide.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Yukon (YNP), Critical Impact Worker"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Yukon (YNP)", path: "/pnp/yukon" },
          { name: "Critical Impact Worker", path: PATH },
        ]}
        title={<>Yukon Critical Impact <span className="text-brand">Worker Program</span></>}
        lede={
          <p>
            The <strong>Yukon Critical Impact Worker Program</strong> nominates workers in intermediate or
            lower-skilled roles (NOC TEER 4–5) that are critical to a Yukon employer, and it hinges on a
            permanent, full-time Yukon job offer. This RCIC-led guide covers eligibility, the CLB 4 language bar
            and exactly how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is this stream right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Critical Impact Worker stream turns a permanent Yukon job offer in a lower-skilled role into a
                path to PR. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Yukon Nominee Program (YNP)", href: "/pnp/yukon", note: "Every Yukon stream explained" },
                { label: "Yukon Skilled Worker", href: "/pnp/yukon/skilled-worker", note: "For TEER 0–3 roles" },
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
            summary="The Yukon Critical Impact Worker Program is an employer-driven Yukon Nominee Program stream for intermediate or lower-skilled roles in NOC TEER 4 and 5. These are jobs critical to a Yukon employer and hard to fill locally. You must hold a genuine, full-time, permanent Yukon job offer, with language generally at CLB 4. It is a base nomination with no CRS points, leading to a separate IRCC application for permanent residence."
            items={[
              <>The <strong>Yukon Critical Impact Worker Program</strong> nominates workers in intermediate or lower-skilled <strong>NOC TEER 4–5</strong> roles critical to a Yukon employer.</>,
              <>It is <strong>employer-driven</strong>, you must hold a genuine, full-time, permanent job offer from an eligible Yukon employer.</>,
              <>The language bar is generally <strong>CLB 4</strong> across all four abilities, lower than the Skilled Worker stream.</>,
              <>It is a <strong>base (paper) nomination</strong>: no CRS points, and a separate IRCC application follows.</>,
              <>Yukon's <strong>2026 allocation is about 282</strong> across all streams, selected through short EOI windows, so eligibility does not guarantee a nomination.</>,
            ]}
          />

          <h2>What is the Yukon Critical Impact Worker Program?</h2>
          <p>
            The <strong>Yukon Critical Impact Worker Program</strong> is a base stream of the Yukon Nominee
            Program (YNP) built for people in <strong>intermediate or lower-skilled roles</strong>. These are occupations classified as <abbr title="National Occupational Classification">NOC</abbr> TEER 4 or 5 that a Yukon employer relies on but struggles to fill locally. Think service and hospitality
            roles, care-support occupations, and retail or labour positions, the kinds of jobs Whitehorse employers and
            operators across the territory most often cannot fill. If a Yukon employer offers you a permanent, full-time role
            of this kind, the <strong>YNP Critical Impact Worker</strong> stream can turn that offer into a
            nomination for permanent residence. It is the lower-skilled counterpart to the higher-skilled{" "}
            <a href="/pnp/yukon/skilled-worker">Skilled Worker</a> stream.
          </p>
          <p>
            Yukon&apos;s 2026 nomination allocation is about <strong>282</strong> across all streams, one of the
            smallest in the country after IRCC cut provincial and territorial allocations nationwide (source:
            yukon.ca, 2026). With so few spaces, the territory concentrates on its highest-priority profiles, so
            meeting this stream&apos;s minimum eligibility is not the same as receiving a nomination. Figures and
            rules change frequently, so always verify the current position on yukon.ca before acting.
          </p>
          <Callout type="brand" title="A Yukon job offer is the key">
            Like almost every YNP stream, the <strong>Critical Impact Worker</strong> stream is employer-driven:
            it only works once an eligible Yukon employer offers you a permanent, full-time role in an occupation in
            demand in Yukon and registers with the program. Without that job offer there is no application, so for
            hospitality workers in Yukon and other intermediate-skilled candidates, securing the right employer is the
            first and most important step in <strong>Yukon semi-skilled immigration</strong>.
          </Callout>

          <h2>Who is the Critical Impact Worker stream for?</h2>
          <p>
            The defining test is the skill level of your job. The Critical Impact Worker stream is built for the{" "}
            <strong>Yukon semi-skilled worker</strong> in <strong>NOC TEER 4 and 5 occupations</strong>. These roles usually require secondary school and/or
            occupation-specific training rather than a university degree or several years of specialised
            experience. If your offered occupation sits in TEER 0, 1, 2 or 3, you belong in the Skilled Worker
            stream instead, which sets higher language and experience bars. Choosing the wrong stream is one of the
            most common and costly mistakes, because the application is assessed against that stream&apos;s
            criteria. The table below contrasts the two worker streams so you can see where your role fits.
          </p>
          <DataTable
            headers={["Feature", "Critical Impact Worker", "Skilled Worker"]}
            rows={[
              ["Skill level (NOC)", "TEER 4–5 (intermediate / lower-skilled)", "TEER 0–3 (higher-skilled)"],
              ["Typical language bar", "CLB 4 (all abilities)", "Higher CLB by TEER level"],
              ["Work experience", "Recent relevant experience (about 6 months)", "About 1 year of relevant experience"],
              ["Yukon job offer", "Required, permanent, full-time", "Required, permanent, full-time"],
              ["Stream type", "Base (paper), no CRS points", "Base (paper), no CRS points"],
            ]}
            caption="Yukon Critical Impact Worker vs Skilled Worker (yukon.ca, 2026). Eligibility does not guarantee a nomination. Figures change, verify before applying."
          />

          <h2>What are the Critical Impact Worker eligibility requirements?</h2>
          <p>
            <strong>Critical Impact Worker eligibility</strong> rests on a connected set of requirements you must
            meet at the time you apply. Miss any one of them and the application can be refused, whether it is a permit-status gap, a language ability one band short, or an
            occupation in the wrong TEER tier. The most important constants are
            a genuine permanent job offer, recent relevant experience, and language results matched to the
            stream&apos;s lower-skilled level. The summary below sets out the core requirements; the official,
            controlling list lives on yukon.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Yukon job offer", "Genuine, full-time, permanent offer from an eligible Yukon employer in a NOC TEER 4–5 occupation"],
              ["Employer registration", "Your Yukon employer registers with the YNP and submits the offer of employment"],
              ["Language", "Generally CLB 4 across all four abilities on an approved English or French test"],
              ["Work experience", "Recent, relevant work experience (about 6 months) matching the offered role"],
              ["Education", "Generally secondary-school completion or the training the occupation requires"],
              ["Intent & ability to settle", "Genuine intention and ability to live and work in Yukon, plus enough settlement funds"],
            ]}
            caption="Yukon Critical Impact Worker core eligibility, accurate as of May 2026 (yukon.ca). Requirements change, confirm the official criteria before applying."
          />
          <Callout type="info" title="Language is judged on your weakest ability">
            The CLB level is taken from the lowest of your four abilities, reading, writing, listening and
            speaking, so a single weak skill can drop you below the threshold. Lifting your weakest band before you
            test is often the single most valuable thing you can do.
          </Callout>

          <h2>Critical Impact Worker vs Yukon Express Entry, which route?</h2>
          <p>
            The Critical Impact Worker stream is a <strong>base</strong> nomination: it is not linked to federal
            Express Entry, earns no CRS points, and leads to a separate paper application to IRCC. For most
            lower-skilled workers that is the only realistic YNP route, because the enhanced{" "}
            <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> stream requires an active Express Entry
            profile and higher language levels (broadly CLB 7 for TEER 0–1 and CLB 5 for TEER 2–3) that TEER 4–5
            roles cannot meet. If you do qualify for Express Entry, though, a Yukon nomination there adds{" "}
            <strong>600 CRS points</strong>, putting most candidates well above the typical draw cut-off. Not sure where your
            federal score stands? Try our <a href="/tools/crs-calculator">free CRS calculator</a> before you choose
            a route.
          </p>

          <h2>How do you apply for the Critical Impact Worker Program?</h2>
          <p>
            <strong>How to apply</strong> for the Critical Impact Worker stream follows a clear, employer-led
            sequence. First, secure a genuine permanent, full-time job offer from an eligible Yukon employer in a
            TEER 4–5 occupation. Your employer then registers with the YNP and submits the offer of employment,
            paying the IRCC employer compliance fee, currently about <strong>$230</strong>. You and your employer then submit the
            application during an open expression-of-interest (EOI) intake window, with your language results, experience evidence and supporting documents. For 2026, yukon.ca lists two windows, roughly{" "}
            <strong>January 19–30</strong> and <strong>July 6–17</strong>. If Yukon nominates
            you, you then apply to <strong>IRCC</strong> for permanent residence on a separate paper application.
            Because the windows are short and the allocation is small, preparing well ahead of a window is the single
            biggest advantage in <strong>Yukon employer PR</strong>.
          </p>
          <Callout type="warning" title="Eligibility does not guarantee a nomination">
            With only about 282 nominations available for 2026 across every YNP stream, Yukon prioritises its
            highest-need profiles. Meeting the Critical Impact Worker requirements places you in contention but does
            not entitle you to a nomination, and a nomination is not permanent residence. Be wary of any source that
            implies a place is guaranteed.
          </Callout>

          <h2>How long does it take?</h2>
          <p>
            Timelines run in stages. The first variable is simply waiting for an open <strong>EOI window</strong> and
            being selected within Yukon&apos;s limited allocation. After a complete application is submitted,
            territorial processing of the nomination typically takes a few months. Because the Critical Impact
            Worker stream is a base stream, the federal stage that follows is a separate paper application to IRCC,
            which generally takes longer than the roughly six months IRCC targets for enhanced (Express Entry) PNP
            applications (source: canada.ca, processing times, 2026). Realistically, plan for the better part of a
            year from application to permanent residence, sometimes more, and confirm current service standards on
            yukon.ca and canada.ca.
          </p>

          <h2>How Wild Mountain Immigration helps with your Critical Impact Worker application</h2>
          <p>
            For lower-skilled roles, the practical hurdle is almost always the employer-driven job offer, the right
            stream choice and the short EOI windows. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team confirms that
            your occupation truly sits in TEER 4–5 and belongs in the Critical Impact Worker stream rather than the{" "}
            <a href="/pnp/yukon/skilled-worker">Skilled Worker</a> stream, checks your language results against the
            CLB 4 bar, and makes sure your employer&apos;s offer of employment and your documents are ready before a
            window opens. If you are in Canada on a <a href="/work-permits">work permit</a>, we factor that status in.
            We catch the avoidable mistakes that cause refusals, such as a wrong NOC code, a language band one short, or a permit-status gap, and we prepare a nomination application that stands up to scrutiny with the territory and
            with IRCC. See every Yukon route on the <a href="/pnp/yukon">Yukon Nominee Program</a> overview.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own
            <strong> Yukon Critical Impact Worker Program</strong> application an expert check before you submit, and you can{" "}
            <a href="/contact">contact our team</a> first. Figures here are current to 2026 and change, so we always confirm
            the live yukon.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Does the Critical Impact Worker stream fit your profile?"
        sub="Get started with a licensed RCIC for an honest read on your Yukon job offer, your occupation's TEER level and the strongest route to permanent residence in Yukon."
      />
    </>
  );
}
