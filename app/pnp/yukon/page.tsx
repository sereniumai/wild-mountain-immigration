import type { Metadata } from "next";
import { MapPin, Briefcase, Rocket, Hammer, Building2, Users } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/yukon";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Yukon Nominee Program (YNP), 2026 Guide",
  titleAbsolute: "YNP 2026: Yukon Nominee Program Guide",
  description:
    "Yukon Nominee Program 2026: the YNP's employer-driven streams, Yukon Express Entry, EOI windows, who needs a Yukon job offer and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Yukon Nominee Program",
    "YNP 2026",
    "Yukon PNP",
    "immigrate to Yukon",
    "Yukon Express Entry",
  ],
});

const faqs = [
  {
    q: "Do I need a job offer to apply to the Yukon Nominee Program?",
    a: "For almost every YNP stream, yes. The Skilled Worker, Critical Impact Worker and Yukon Express Entry streams are all employer-driven, you must hold a genuine, full-time job offer from an eligible Yukon employer who registers with the program. The only exception is the Business Nominee stream, which asks you to establish or buy a Yukon business instead of holding a job offer. We can confirm honestly whether your situation fits a YNP stream before you invest time.",
  },
  {
    q: "What is the difference between the YNP base and Express Entry streams?",
    a: "The Yukon Express Entry stream is the program's 'enhanced' option: you must already have an active federal Express Entry profile, and a Yukon nomination adds 600 CRS points, which puts most candidates well above the typical draw cut-off. The Skilled Worker, Critical Impact Worker and Business Nominee streams are 'base' nominations, once nominated, you submit a separate paper permanent-residence application directly to IRCC, which is generally processed more slowly.",
  },
  {
    q: "When can I apply to the YNP in 2026?",
    a: "The Yukon Nominee Program selects candidates through fixed expression-of-interest (EOI) intake windows rather than year-round. For 2026, yukon.ca lists two windows, roughly January 19–30 and July 6–17, though Yukon can adjust dates and the territory's allocation is limited. Because windows are short and the cap is small, having your employer and documents ready in advance matters. Always confirm the current intake dates on yukon.ca before relying on them.",
  },
  {
    q: "How many people can the Yukon Nominee Program nominate in 2026?",
    a: "Yukon's 2026 nomination allocation is about 282 spaces (source: yukon.ca, 2026), one of the smallest in Canada after federal cuts to provincial and territorial allocations. With so few nominations available, the territory prioritises its highest-need profiles, so meeting a stream's basic eligibility does not guarantee a nomination. Figures change, so verify the current allocation before you apply.",
  },
  {
    q: "Which occupations does the YNP prioritise?",
    a: "Yukon focuses on filling genuine local labour shortages. For 2026 the territory's stated priorities include health-care workers, candidates with at least a year of recent Yukon work or residence, Yukon University graduates, French-speaking (Francophone) applicants and roles in rural communities. Because the YNP is employer-driven, the practical test is whether a Yukon employer needs and offers you a role that the program supports.",
  },
  {
    q: "Is the Yukon Community Pilot still open?",
    a: "No. The Yukon Community Program (Community Pilot) concluded on June 30, 2025, and now exists only as an information page, it is not accepting new applicants. Some out-of-date guides still describe it as a live route, so be cautious. If you were exploring that pilot, we can assess whether the Skilled Worker, Critical Impact Worker or Express Entry stream is a realistic alternative for you.",
  },
  {
    q: "Who pays the Yukon employer compliance fee?",
    a: "Under the YNP, the Yukon employer that hires you is responsible for the IRCC employer compliance fee (currently about $230) when the offer of employment is submitted, along with meeting the program's employer requirements. As the candidate, you do not pay that particular fee. Program and federal fees change, so confirm current amounts on yukon.ca and canada.ca before applying.",
  },
];

export default function YukonPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Yukon Nominee Program (YNP), 2026 RCIC Guide",
            description:
              "Yukon Nominee Program 2026: the YNP's employer-driven streams, Yukon Express Entry, EOI windows, who needs a Yukon job offer and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Yukon Nominee Program application support",
            description:
              "Yukon Nominee Program 2026: the YNP's employer-driven streams, Yukon Express Entry, EOI windows, who needs a Yukon job offer and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Provincial Nominee Programs"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Yukon (YNP)", path: PATH },
        ]}
        title={<>Yukon Nominee Program <span className="text-brand">(YNP)</span></>}
        lede={
          <p>
            The <strong>Yukon Nominee Program</strong> lets the territory nominate skilled workers and entrepreneurs
            for permanent residence, and almost every stream is employer-driven, so a Yukon job offer is the key that
            unlocks it. A Yukon Express Entry nomination also adds 600 CRS points to a federal profile.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the YNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With only about 282 nominations for 2026, a Yukon job offer and a sharp strategy matter. Get an honest
                read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory explained" },
                { label: "Northwest Territories (NTNP)", href: "/pnp/northwest-territories", note: "The other northern program" },
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "BC's streams" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Yukon Nominee Program (YNP) is Yukon's economic immigration route, nominating skilled workers and entrepreneurs for Canadian permanent residence. It is employer-driven: every stream except the Business Nominee Program needs a full-time job offer from an eligible Yukon employer. Yukon selects through short Expression of Interest intake windows rather than year-round, and a successful nomination supports your federal application."
            items={[
              <>The <strong>Yukon Nominee Program (YNP)</strong> nominates skilled workers and entrepreneurs for permanent residence in Yukon.</>,
              <>It is <strong>employer-driven</strong>, every stream except Business Nominee requires a full-time job offer from an eligible Yukon employer.</>,
              <>The <strong>Yukon Express Entry</strong> stream is enhanced and adds <strong>600 CRS points</strong>; the other streams are base (paper) nominations.</>,
              <>Yukon selects through short <strong>EOI intake windows</strong> (2026: roughly Jan 19–30 and Jul 6–17), not year-round.</>,
              <>The <strong>2026 allocation is about 282</strong>, one of Canada&apos;s smallest, and the Community Pilot closed on June 30, 2025.</>,
            ]}
          />

          <h2>What is the Yukon Nominee Program?</h2>
          <p>
            The <strong>Yukon Nominee Program</strong> is the territory&apos;s economic immigration route, the northern
            equivalent of a provincial nominee program (you may also see it called the <strong>Yukon Provincial
            Nominee Program</strong> or <strong>Yukon PNP</strong>). It
            lets the Government of Yukon nominate workers and business owners whose skills meet genuine local
            labour-market needs; a nomination is then your stepping stone to applying to IRCC for permanent residence.
            Its defining feature is that it is <strong>employer-driven</strong>, for nearly every stream, a Yukon
            employer must offer you a job and register with the program before you can be nominated.
          </p>
          <p>
            Yukon&apos;s 2026 nomination allocation is about <strong>282</strong>, one of the smallest in the country
            after IRCC cut provincial and territorial allocations nationwide (source: yukon.ca, 2026). With so few
            spaces, the territory concentrates on its highest-priority profiles, so meeting a stream&apos;s minimum
            eligibility is not the same as receiving a nomination. Figures and rules change frequently, so always verify
            the current position on yukon.ca before acting.
          </p>

          <h2>Enhanced (Express Entry) vs base nomination</h2>
          <p>
            The most important distinction in the YNP, as in any <a href="/pnp">nominee program</a>, is whether a stream
            is enhanced or base. The <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> stream is the{" "}
            <em>enhanced</em> option: you must already hold an active federal <a href="/express-entry">Express Entry</a>{" "}
            profile, and a Yukon nomination adds <strong>600 CRS points</strong> to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score. That boost
            lifts most candidates well above recent cut-offs, putting them in a strong position for an Invitation to Apply
            at the next draw. IRCC issues the invitation, then takes roughly six months to process the federal
            application. Candidates who already have skilled Yukon work experience often qualify under the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> within that pool.
          </p>
          <p>
            The <a href="/pnp/yukon/skilled-worker">Skilled Worker</a>,{" "}
            <a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a> and{" "}
            <a href="/pnp/yukon/business-nominee">Business Nominee</a> streams are <em>base</em> (paper) nominations.
            They are not connected to Express Entry, so they earn no CRS points; once nominated, you submit a separate
            permanent-residence application directly to IRCC, which generally takes longer. Not sure where your federal
            score stands? Try our <a href="/tools/crs-calculator">free CRS calculator</a> before you choose a route.
          </p>

          <h2>YNP streams in 2026</h2>
          <p>
            The table below summarises the live Yukon Nominee Program streams, who each is for and whether it is
            enhanced or base. Note that the now-closed Community Pilot is included only to flag that it is no longer
            accepting applicants.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Type"]}
            rows={[
              [<a href="/pnp/yukon/skilled-worker">Skilled Worker</a>, "TEER 0–3 workers with a Yukon job offer and ~1 year of relevant experience", "Base (paper)"],
              [<a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a>, "TEER 4–5 (lower-skilled) roles with a Yukon job offer; CLB 4 language", "Base (paper)"],
              [<a href="/pnp/yukon/express-entry">Yukon Express Entry</a>, "Candidates already in the federal Express Entry pool with a Yukon job offer", "Enhanced (+600 CRS)"],
              [<a href="/pnp/yukon/community-pilot">Community Pilot</a>, "Community-based hires (closed to new applicants)", "Closed (Jun 30, 2025)"],
              [<a href="/pnp/yukon/business-nominee">Business Nominee</a>, "Entrepreneurs establishing or buying a Yukon business (no job offer needed)", "Base (paper)"],
            ]}
            caption="Yukon Nominee Program streams (yukon.ca, 2026). Eligibility does not guarantee a nomination. Figures change."
          />
          <Callout type="brand" title="Every YNP stream is built around a Yukon employer">
            With one exception, the <strong>Yukon Nominee Program</strong> only works once a Yukon employer offers you a
            full-time role and registers with the program. The Skilled Worker stream covers higher-skilled TEER 0–3
            roles, while the <strong>Critical Impact Worker</strong> stream covers lower-skilled TEER 4–5 roles such as
            many service and labour occupations. Only the <strong>Business Nominee</strong> stream skips the job offer,
            because you are creating the business yourself.
          </Callout>

          <h2>YNP eligibility</h2>
          <p>
            Requirements differ by stream, but a few constants run through the worker streams. You generally need a{" "}
            <strong>genuine, full-time, ongoing job offer from an eligible Yukon employer</strong>, relevant work
            experience (about a year for Skilled Worker; roughly six months for Critical Impact Worker), and language
            results matched to your occupation&apos;s skill level, broadly higher Canadian Language Benchmark (CLB)
            levels for higher-TEER roles and lower CLB levels for Critical Impact Worker positions. The Yukon Express
            Entry stream adds the federal Express Entry minimums on top. Business Nominee instead tests net worth,
            investment and a viable Yukon business plan rather than a job offer. Because the published CLB-by-TEER
            matrix and thresholds are detailed and updated regularly, confirm them against the current yukon.ca program
            guide.
          </p>

          <h2>2026 priorities, EOI windows and the allocation</h2>
          <p>
            Two practical realities shape the YNP in 2026. First, the <strong>small allocation</strong> of about 282
            nominations means Yukon prioritises its highest-need profiles, its stated 2026 priorities include
            health-care workers, candidates with at least a year of recent Yukon work or residence, Yukon University
            graduates, French-speaking (Francophone) applicants and roles in rural communities. Second, Yukon selects
            through fixed <strong>expression-of-interest (EOI) intake windows</strong> rather than year-round: for 2026
            yukon.ca lists two windows, roughly <strong>January 19–30</strong> and <strong>July 6–17</strong>.
          </p>
          <Callout type="warning" title="The Community Pilot is closed, don't be misled">
            The <strong>Yukon Community Program (Community Pilot) concluded on June 30, 2025</strong> and now exists only
            as an information page. Some older guides still present it as an open route. If you were counting on it,{" "}
            <a href="/contact">get started</a> with us and we will assess whether the Skilled Worker, Critical Impact
            Worker or Yukon Express Entry stream is a realistic alternative.
          </Callout>

          <h2>How to apply for the Yukon Nominee Program</h2>
          <p>
            <strong>How to apply to the YNP</strong> follows a clear, employer-led sequence. First, secure a genuine
            full-time job offer from an eligible Yukon employer, most of which are based in Whitehorse (or, for{" "}
            <a href="/pnp/yukon/business-nominee">Business Nominee</a>, develop a qualifying business plan). Many
            candidates already in Canada arrive first on a Yukon <a href="/work-permits">work permit</a>, sometimes a{" "}
            <a href="/work-permits/pgwp">post-graduation work permit</a> after Canadian study, and build the Yukon
            experience the territory prioritises. Your employer then registers and submits the offer of employment,
            paying the IRCC employer compliance fee, currently about <strong>$230</strong>. During an open EOI window,
            you and your employer submit the application for the relevant stream. If Yukon nominates you, you apply to{" "}
            <strong>IRCC</strong> for permanent residence, through <a href="/express-entry">Express Entry</a> if your
            nomination is enhanced, or on paper for a base nomination. Because intake windows are short and the cap is
            small, preparation well ahead of a window is the single biggest advantage.
          </p>

          <h2>How long does the YNP take?</h2>
          <p>
            Timelines run in stages. The first variable is simply waiting for an open <strong>EOI window</strong> and
            being selected within Yukon&apos;s limited allocation. After a complete application is submitted, territorial
            processing of the nomination typically takes a few months. Once nominated, a <strong>Yukon Express
            Entry</strong> (enhanced) application to IRCC is processed in roughly six months, while a base, paper-based
            application generally takes longer. Realistically, most candidates should plan for the better part of a year
            from application to permanent residence, sometimes more, and confirm current service standards on
            yukon.ca and canada.ca.
          </p>

          <h2>How Wild Mountain Immigration helps you immigrate to Yukon</h2>
          <p>
            If you want to <strong>immigrate to Yukon</strong>, the practical hurdle is almost always the
            employer-driven job offer and the short EOI windows. Our team assesses your profile against Yukon&apos;s
            2026 priorities, confirms which stream, <a href="/pnp/yukon/skilled-worker">Skilled Worker</a>,{" "}
            <a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a>,{" "}
            <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> or{" "}
            <a href="/pnp/yukon/business-nominee">Business Nominee</a>, gives you the strongest realistic chance, and
            makes sure your employer&apos;s offer of employment and your documents are ready before a window opens.
            Working under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC
            #R706497), we prepare a nomination application that stands up to scrutiny and represent you with the
            territory and with IRCC. Compare Yukon with our home province&apos;s{" "}
            <a href="/alberta-immigration">Alberta Advantage Immigration Program</a>, or see every route on our{" "}
            <a href="/pnp">provincial nominee programs</a> hub.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile and stream", desc: "We review your occupation, TEER level, experience and language against Yukon's 2026 priorities to find whether Skilled Worker, Critical Impact Worker, Yukon Express Entry or Business Nominee is your strongest realistic route." },
              { title: "Prepare for the EOI window", desc: "We get your employer's offer of employment, the compliance-fee step and your supporting documents ready in advance, so you can submit the moment an intake window opens rather than scrambling." },
              { title: "Nominate and apply for PR", desc: "Once Yukon nominates you, we build and submit your permanent-residence application to IRCC, through Express Entry for an enhanced nomination or on paper for a base one, and represent you to the finish." },
            ]}
          />
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own
            <strong> Yukon Nominee Program</strong> application an expert check before you submit, and you can{" "}
            <a href="/contact">contact our team</a> for an honest read first.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the Yukon Nominee Program streams</h2>
          <p className="mt-3 text-ink-soft">Each YNP stream has its own eligibility, timeline and route to permanent residence.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Skilled Worker" desc="Higher-skilled TEER 0 to 3 roles with a Yukon job offer and about a year of relevant experience. A base nomination." href="/pnp/yukon/skilled-worker" />
            <FeatureCard icon={Hammer} title="Critical Impact Worker" desc="Lower-skilled TEER 4 to 5 service and labour roles with a Yukon job offer and CLB 4 language. A base nomination." href="/pnp/yukon/critical-impact-worker" />
            <FeatureCard icon={Rocket} title="Yukon Express Entry" desc="The enhanced stream for candidates already in the federal Express Entry pool. A nomination adds 600 CRS points." href="/pnp/yukon/express-entry" />
            <FeatureCard icon={Building2} title="Business Nominee" desc="For entrepreneurs establishing or buying a Yukon business. The only stream that needs no job offer." href="/pnp/yukon/business-nominee" />
            <FeatureCard icon={Users} title="Community Pilot (closed)" desc="The Yukon Community Program closed to new applicants on June 30, 2025. See it for context and current alternatives." href="/pnp/yukon/community-pilot" />
            <FeatureCard icon={MapPin} title="Northwest Territories (NTNP)" desc="Canada's other northern, employer-driven territorial program. Compare it with the Yukon Nominee Program." href="/pnp/northwest-territories" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the Yukon Nominee Program fits your profile"
        sub="Get started with a licensed RCIC for an honest read on your Yukon job offer, the right stream and the strongest route to permanent residence in Yukon."
      />
    </>
  );
}
