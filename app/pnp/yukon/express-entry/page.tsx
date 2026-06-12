import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/yukon/express-entry";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Yukon Express Entry: YNP +600 CRS Guide 2026",
  titleAbsolute: "Yukon Express Entry: YNP +600 CRS 2026 Guide",
  description:
    "Yukon Express Entry (YNP): the enhanced nomination stream that needs a Yukon job offer and adds 600 CRS. Eligibility and how to apply. RCIC-led guide.",
  path: PATH,
  keywords: [
    "Yukon Express Entry",
    "YNP Express Entry",
    "Yukon job offer PR",
    "Yukon nominee Express Entry",
    "+600 CRS Yukon",
  ],
});

const faqs = [
  {
    q: "Do I need a job offer for Yukon Express Entry?",
    a: "Yes. Like every Yukon Nominee Program worker stream, Yukon Express Entry is employer-driven: you must hold a genuine, full-time, ongoing job offer from an eligible Yukon employer who registers with the program. You also need an active federal Express Entry profile. Without a Yukon job offer you cannot use this enhanced stream, but you may still qualify for federal Express Entry or another province's route. We can confirm honestly whether your profile fits before you invest time.",
  },
  {
    q: "How many CRS points does a Yukon nomination add?",
    a: "A Yukon Express Entry nomination adds 600 points to your Comprehensive Ranking System (CRS) score. That boost lifts most candidates well above the cut-off in the next federal Express Entry draw, though IRCC issues any Invitation to Apply (ITA). The 600 points are the same provincial-nomination boost every enhanced PNP stream provides, they are added on top of your existing CRS, not in place of it.",
  },
  {
    q: "What is the difference between Yukon Express Entry and the Skilled Worker stream?",
    a: "Yukon Express Entry is the YNP's enhanced stream: it requires an active federal Express Entry profile, and a nomination adds 600 CRS so you apply for permanent residence through the federal Express Entry system (roughly six-month processing). The Yukon Skilled Worker stream is a base (paper) nomination: it earns no CRS points, and after nomination you file a separate paper PR application directly with IRCC, which generally takes longer. Both need a Yukon job offer; the right choice depends on whether you have, or can build, an Express Entry profile.",
  },
  {
    q: "What language level does Yukon Express Entry require?",
    a: "Language scales with your occupation's skill level. For TEER 0 and 1 roles, Yukon generally expects Canadian Language Benchmark (CLB) 7; for TEER 2 and 3 roles, CLB 5 (source: yukon.ca). You must also meet the federal Express Entry minimums for your program. Because the published CLB-by-TEER matrix is detailed and updated regularly, confirm the current thresholds on the official yukon.ca program guide before applying.",
  },
  {
    q: "When can I apply to Yukon Express Entry in 2026?",
    a: "The Yukon Nominee Program selects through fixed expression-of-interest (EOI) intake windows rather than year-round. For 2026, yukon.ca lists two windows, roughly January 19–30 and July 6–17, though Yukon can adjust the dates and the territory's allocation is limited. Your federal Express Entry profile, however, can sit in the pool at any time. Because windows are short and the cap is small, having your employer and documents ready in advance matters. Always confirm the current intake dates on yukon.ca.",
  },
  {
    q: "Does a Yukon Express Entry nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement worth 600 CRS, it puts most candidates well above the typical cut-off for an ITA, but it is not permanent residence itself. After you receive the ITA you submit a federal Express Entry application, and IRCC makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
  {
    q: "Who pays the Yukon employer compliance fee?",
    a: "Under the YNP, the Yukon employer that hires you is responsible for the IRCC employer compliance fee (currently about $230) when the offer of employment is submitted, along with meeting the program's employer requirements. As the candidate, you do not pay that particular fee. Program and federal fees change, so confirm current amounts on yukon.ca and canada.ca before applying.",
  },
];

export default function YukonExpressEntryPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Yukon Express Entry (YNP), 2026 RCIC Guide",
            description:
              "Yukon Express Entry (YNP): the enhanced nomination stream that needs a Yukon job offer and adds 600 CRS. Eligibility and how to apply. RCIC-led guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Yukon Express Entry nomination support",
            description:
              "Yukon Express Entry (YNP): the enhanced nomination stream that needs a Yukon job offer and adds 600 CRS. Eligibility and how to apply. RCIC-led guide.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Yukon (YNP), Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Yukon (YNP)", path: "/pnp/yukon" },
          { name: "Express Entry", path: PATH },
        ]}
        title={<>Yukon Express Entry <span className="text-brand">(YNP, enhanced)</span></>}
        lede={
          <p>
            <strong>Yukon Express Entry</strong> is the YNP&apos;s enhanced, employer-driven nominee stream. With a Yukon
            job offer and an active federal profile, a nomination adds <strong>600 CRS points</strong>, lifting most
            candidates well above recent draw cut-offs. This RCIC-led guide covers eligibility and how to apply.
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
                See where you stand before a Yukon nomination adds 600 points, estimate your Express Entry CRS in two
                minutes.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Yukon Nominee Program (YNP)", href: "/pnp/yukon", note: "All Yukon streams explained" },
                { label: "Yukon Skilled Worker stream", href: "/pnp/yukon/skilled-worker", note: "The base (paper) alternative" },
                { label: "Federal Express Entry", href: "/express-entry", note: "How the CRS and draws work" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "Score your Express Entry profile" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Yukon Express Entry is the Yukon Nominee Program's enhanced stream, for candidates with an active federal Express Entry profile. It is employer-driven, so you need a genuine, full-time job offer from an eligible Yukon employer. Language is typically CLB 7 for TEER 0 to 1 roles and CLB 5 for TEER 2 to 3 roles. A nomination adds 600 CRS points, putting most candidates well above the typical draw cut-off."
            items={[
              <><strong>Yukon Express Entry</strong> is the YNP&apos;s <strong>enhanced</strong> stream, it requires an active federal Express Entry profile.</>,
              <>It is <strong>employer-driven</strong>: you need a genuine, full-time job offer from an eligible Yukon employer.</>,
              <>A nomination adds <strong>600 CRS points</strong>, lifting most candidates well above recent draw cut-offs, though IRCC issues any Invitation to Apply.</>,
              <>Typical language bar: <strong>CLB 7</strong> for TEER 0–1 roles and <strong>CLB 5</strong> for TEER 2–3 roles.</>,
              <>Yukon&apos;s 2026 allocation is about <strong>282</strong>, and intake runs in short EOI windows. Eligibility alone doesn&apos;t guarantee a nomination.</>,
            ]}
          />

          <h2>What is Yukon Express Entry?</h2>
          <p>
            <strong>Yukon Express Entry</strong> is the enhanced stream of the Yukon Nominee Program (YNP), sometimes
            called <strong>YNP Express Entry</strong>. &ldquo;Enhanced&rdquo; means it is aligned with the federal Express
            Entry system: to use it, you must already hold an active Express Entry profile, and a Yukon nomination adds{" "}
            <strong>600 points</strong> to your Comprehensive Ranking System (CRS) score. That boost lifts virtually any
            candidate above the cut-off, putting them in a strong position for an Invitation to Apply (ITA) at the next
            Express Entry draw. IRCC issues that ITA, followed by the usual roughly six-month federal processing.
          </p>
          <p>
            Like every YNP worker stream, Yukon Express Entry is <strong>employer-driven</strong>, a{" "}
            <strong>Yukon job offer</strong> is the key that unlocks it. Yukon&apos;s 2026 nomination allocation is about{" "}
            <strong>282</strong>, one of the smallest in Canada after IRCC cut provincial and territorial allocations
            nationwide (source: yukon.ca, 2026). With so few spaces, the territory concentrates on its highest-priority
            profiles, so meeting the eligibility bar is not the same as receiving a nomination. Figures and rules change
            frequently, so always verify the current position on yukon.ca before acting.
          </p>
          <Callout type="brand" title="Enhanced means a Yukon job offer plus a federal profile">
            Yukon Express Entry works only when both pieces are in place: a genuine full-time offer from an eligible
            Yukon employer who registers with the program, <em>and</em> an active federal Express Entry profile. The
            nomination then adds 600 CRS to that profile. No Express Entry profile? The base{" "}
            <a href="/pnp/yukon/skilled-worker">Yukon Skilled Worker stream</a> may fit instead.
          </Callout>

          <h2>Yukon Express Entry vs the Skilled Worker stream</h2>
          <p>
            The most important distinction in the YNP is whether a stream is enhanced or base. Yukon Express Entry is the{" "}
            <em>enhanced</em> route described above. The <a href="/pnp/yukon/skilled-worker">Yukon Skilled Worker</a>{" "}
            stream is a <em>base</em> (paper) nomination: it is not connected to Express Entry, earns no CRS points, and
            once nominated you submit a separate permanent-residence application directly to IRCC, which generally takes
            longer. Both streams require a Yukon job offer and cover similar higher-skilled (TEER 0–3) occupations, the
            practical difference is whether you have, or can build, a federal Express Entry profile.
          </p>
          <DataTable
            headers={["Feature", "Yukon Express Entry (enhanced)", "Skilled Worker (base)"]}
            rows={[
              ["Express Entry profile", "Required (active profile)", "Not required"],
              ["Effect of nomination", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["Yukon job offer", "Required, employer-driven", "Required, employer-driven"],
              ["PR application route", "Federal Express Entry (~6 months)", "Paper application to IRCC (generally longer)"],
              ["Typical occupations", "TEER 0–3", "TEER 0–3"],
            ]}
            caption="Yukon Express Entry vs Yukon Skilled Worker (yukon.ca, 2026). Eligibility does not guarantee a nomination. Figures change."
          />

          <h2>What are the Yukon Express Entry eligibility requirements?</h2>
          <p>
            <strong>Yukon Express Entry eligibility</strong> combines the territory&apos;s requirements with the federal
            Express Entry minimums. At the YNP level you generally need a genuine, full-time, ongoing{" "}
            <strong>job offer from an eligible Yukon employer</strong>, work experience that matches the offered role,
            and language results scaled to your occupation&apos;s skill level.</p>
          <p>On the federal side, you must hold an
            active Express Entry profile and meet the eligibility criteria of one of its programs (Canadian Experience
            Class, Federal Skilled Worker or Federal Skilled Trades). The table below summarises the core requirements;
            the official, controlling list lives on yukon.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What Yukon Express Entry asks for"]}
            rows={[
              ["Express Entry profile", "An active federal Express Entry profile meeting one program's criteria (CEC, FSW or FST)"],
              ["Yukon job offer", "Genuine, full-time, ongoing offer from an eligible Yukon employer registered with the program"],
              ["Occupation skill level", "Higher-skilled roles, generally NOC TEER 0–3"],
              ["Language", "Typically CLB 7 for TEER 0–1 and CLB 5 for TEER 2–3, plus the federal Express Entry minimums"],
              ["Work experience", "Recent, relevant experience matching the offered Yukon occupation"],
              ["Settlement funds & intent", "Ability to settle in Yukon and a genuine intention to live in the territory"],
            ]}
            caption="Yukon Express Entry core eligibility, accurate as of May 2026 (yukon.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Language scales with your occupation">
            Yukon sets language by skill level: broadly <strong>CLB 7</strong> for TEER 0 and 1 roles and{" "}
            <strong>CLB 5</strong> for TEER 2 and 3 roles, measured on an approved test. Your weakest of the four
            abilities usually sets the result, so lifting a single low band is often the most valuable thing you can do
            before submitting.
          </Callout>

          <h2>How does Yukon Express Entry connect to the federal pool?</h2>
          <p>
            Yukon Express Entry sits on top of the federal system rather than replacing it. You first create an{" "}
            <a href="/express-entry">Express Entry profile</a> and enter the federal pool, where you are ranked by your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a> score, often
            qualifying through the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> if
            you already hold skilled Canadian work experience.</p>
          <p>Separately, your Yukon employer drives the YNP nomination.
            When Yukon nominates you, it issues a <strong>Yukon nominee certificate</strong> through the federal system,
            linked to your <strong>Express Entry profile number</strong>, which automatically adds{" "}
            <strong>600 CRS points</strong> to your profile. That provincial nomination of 600 points sits well above any
            recent CRS cut-off score, so you are then virtually certain to be invited at the next general Express Entry
            draw. Want to see your starting point? Our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> estimates your score before the 600-point boost.
          </p>

          <h2>How to apply for Yukon Express Entry</h2>
          <p>
            <strong>How to apply for Yukon Express Entry</strong> follows an employer-led sequence layered onto the
            federal Express Entry process. The steps below show the path from confirming eligibility to a federal
            permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Create your Express Entry profile", desc: "Confirm you qualify for a federal Express Entry program (CEC, FSW or FST) and submit a profile so you are in the federal pool with a CRS score." },
              { title: "Secure a Yukon job offer", desc: "Obtain a genuine, full-time, ongoing offer from an eligible Yukon employer who is willing to register with the program and submit the offer of employment." },
              { title: "Prepare documents & language results", desc: "Take an approved English or French test (aiming for CLB 7 for TEER 0–1 or CLB 5 for TEER 2–3), and gather work-experience, job-offer and identity evidence." },
              { title: "Apply during an EOI window", desc: "You and your employer submit the Yukon Express Entry application during an open intake window (2026: roughly Jan 19–30 and Jul 6–17). Eligibility alone does not guarantee selection." },
              { title: "Receive the nomination & +600 CRS", desc: "If Yukon nominates you, it issues the nomination through Express Entry, adding 600 CRS to your profile and lifting most candidates well above recent cut-offs, though IRCC issues any Invitation to Apply." },
              { title: "Apply to IRCC for permanent residence", desc: "After the ITA, submit your federal Express Entry PR application with medicals, police checks and proof of funds. IRCC makes the final decision (~6 months)." },
            ]}
          />

          <h2>How long does Yukon Express Entry take?</h2>
          <p>
            Timelines run in stages. The first variable is simply waiting for an open <strong>EOI window</strong> and
            being selected within Yukon&apos;s limited allocation of about 282. After a complete application is
            submitted, territorial processing of the nomination typically takes a few months.</p>
          <p>Once the nomination adds
            600 CRS and you receive an ITA, IRCC processes an enhanced (Express Entry) permanent-residence application in{" "}
            <strong>roughly six months</strong> (source: canada.ca, processing times, 2026), faster than a base, paper
            application. Realistically, plan for the better part of a year from application to permanent residence, and
            confirm current service standards on yukon.ca and canada.ca.
          </p>

          <h2>How Wild Mountain Immigration helps with Yukon Express Entry</h2>
          <p>
            The practical hurdle in <strong>Yukon Express Entry</strong> is almost always the employer-driven job offer
            and the short EOI windows, and making sure your federal profile is built correctly so the 600-point boost
            actually lands you an ITA. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team confirms your
            eligibility, optimises your <a href="/express-entry">Express Entry</a> profile, and prepares a nomination
            application that stands up to scrutiny with both the territory and IRCC.</p>
          <p>We catch the avoidable mistakes that
            cause refusals: a wrong NOC code, a language band one point short, a gap in your profile. If you do not yet have a
            qualifying offer, we also weigh the base <a href="/pnp/yukon/skilled-worker">Skilled Worker</a> and{" "}
            <a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a> streams, and you can see every route
            on the <a href="/pnp/yukon">Yukon Nominee Program</a> overview.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own{" "}
            <strong>Yukon Express Entry</strong> application an expert check before you submit, and you can{" "}
            <a href="/contact">contact our team</a> first. Figures here are current to 2026 and change, so we always
            confirm the live yukon.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Could Yukon Express Entry add 600 CRS to your profile?"
        sub="Get started with a licensed RCIC for an honest read on your Yukon job offer, your Express Entry profile and the strongest route to permanent residence."
      />
    </>
  );
}
