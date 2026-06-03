import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/northwest-territories/express-entry";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Northwest Territories Express Entry (NTNP)",
  titleAbsolute: "NTNP Express Entry: NWT Immigration 2026",
  description:
    "Northwest Territories Express Entry 2026: the NTNP enhanced stream adds +600 CRS with an NWT job offer. Eligibility, how to apply and timelines. RCIC-led.",
  path: PATH,
  keywords: [
    "Northwest Territories Express Entry",
    "NTNP Express Entry",
    "NWT job offer PR",
    "NWT Express Entry +600 CRS",
    "NWT Express Entry eligibility",
  ],
});

const faqs = [
  {
    q: "What is Northwest Territories Express Entry?",
    a: "Northwest Territories Express Entry is the enhanced, Express-Entry-aligned stream of the Northwest Territories Nominee Program (NTNP). It is employer-driven: you need an active federal Express Entry profile and an eligible full-time job offer from an NWT employer. If the territory nominates you, the nomination adds 600 CRS points to your Express Entry score. That boost lifts most candidates above recent federal draw cut-offs, though IRCC issues any Invitation to Apply. Always confirm current rules on immigratenwt.ca, as figures and streams change.",
  },
  {
    q: "Do I need a job offer for NWT Express Entry?",
    a: "Yes. NWT Express Entry is employer-driven, you cannot use it without a genuine, full-time job offer from an eligible NWT employer, generally in a higher-skilled (TEER 0–3) occupation. The employer initiates the application; you cannot self-apply. This is the key difference from federal Express Entry on its own, where a job offer is optional. We can tell you honestly whether your offer and occupation qualify.",
  },
  {
    q: "How many CRS points does an NTNP nomination add?",
    a: "An NWT Express Entry nomination adds 600 CRS points to your federal Comprehensive Ranking System score. Because the highest possible base CRS sits far below 600, that boost lifts most candidates well above the cut-off, though IRCC issues any Invitation to Apply at a following Express Entry draw. The +600 boost is what makes the enhanced stream the fastest NTNP route to permanent residence.",
  },
  {
    q: "What are the eligibility requirements for NWT Express Entry?",
    a: "You need: an active profile in the federal Express Entry pool (meeting the minimums for Federal Skilled Worker, Canadian Experience Class or Federal Skilled Trades); an eligible full-time, non-seasonal job offer from an NWT employer, generally in a TEER 0–3 occupation; and the work-experience, language and education levels the NTNP requires. Because the employer-driven side now uses ranked Expression of Interest (EOI) draws, meeting the bar places you in the pool but does not guarantee an invitation.",
  },
  {
    q: "How long does NWT Express Entry take?",
    a: "There are two stages. First the territorial nomination, where the employer-driven side now depends on the EOI draw schedule (draws planned for March, June and September 2026) and territorial processing of a complete application. Once you hold the nomination and update your Express Entry profile with the 600 points, IRCC typically processes an enhanced PR application in about six months. Most applicants should plan for the better part of a year from job offer to permanent residence.",
  },
  {
    q: "How is NWT Express Entry different from the Employer-Driven Skilled Worker stream?",
    a: "Both are employer-driven and both generally require a TEER 0–3 NWT job offer, but the route to PR differs. NWT Express Entry is enhanced: you must already be in the federal Express Entry pool, and a nomination adds 600 CRS points for a fast federal application. The Employer-Driven Skilled Worker stream is a base (paper) nomination, there is no CRS boost, and you submit a separate permanent-residence application directly to IRCC, which generally takes longer.",
  },
  {
    q: "Does an NTNP Express Entry nomination guarantee permanent residence?",
    a: "No. A nomination is a strong territorial endorsement, not permanent residence. Even with 600 CRS points and an Invitation to Apply, IRCC makes the final decision on your PR application based on medical, security and admissibility checks. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function NorthwestTerritoriesExpressEntryPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Northwest Territories Express Entry (NTNP), 2026 RCIC Guide",
            description:
              "Northwest Territories Express Entry 2026: the NTNP enhanced stream adds +600 CRS with an NWT job offer. Eligibility, how to apply and timelines. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NWT Express Entry (NTNP) application support",
            description:
              "Northwest Territories Express Entry 2026: the NTNP enhanced stream adds +600 CRS with an NWT job offer. Eligibility, how to apply and timelines. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NTNP, Express Entry (enhanced)"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Northwest Territories", path: "/pnp/northwest-territories" },
          { name: "Express Entry", path: PATH },
        ]}
        title={<>Northwest Territories <span className="text-brand">Express Entry</span></>}
        lede={
          <p>
            <strong>Northwest Territories Express Entry</strong> is the NTNP&apos;s enhanced, employer-driven stream, a
            nomination adds <strong>600 CRS points</strong> if you hold an eligible NWT job offer. This RCIC-led guide
            covers eligibility, how to apply and realistic timelines.
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
                See your federal Express Entry score before any boost, then get started with us to confirm whether NWT
                Express Entry is realistic.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Northwest Territories (NTNP)", href: "/pnp/northwest-territories", note: "All NTNP streams explained" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province's PNP" },
                { label: "Employer-Driven Skilled Worker", href: "/pnp/northwest-territories/employer-driven-skilled-worker", note: "The base (paper) NWT route" },
                { label: "Express Entry", href: "/express-entry", note: "How the federal system works" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
                { label: "Get started", href: "/contact", note: "An honest read from an RCIC" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Northwest Territories Express Entry is the NTNP's enhanced, Express Entry aligned stream and the territory's fastest route to permanent residence. It is employer-driven, so you need an eligible full-time NWT job offer (generally NOC TEER 0 to 3) and an active federal Express Entry profile. A provincial nomination adds 600 points to your federal score, though IRCC makes the final decision."
            items={[
              <>
                <strong>NWT Express Entry</strong> is the NTNP&apos;s <strong>enhanced</strong>, Express-Entry-aligned
                stream, the territory&apos;s fastest route to permanent residence.
              </>,
              <>
                It is <strong>employer-driven</strong>: you need an eligible full-time <strong>NWT job offer</strong>{" "}
                (generally TEER 0–3) and an active federal Express Entry profile.
              </>,
              <>
                A nomination adds <strong>+600 CRS</strong> points, lifting most candidates well above recent federal
                draw cut-offs, though IRCC issues any Invitation to Apply.
              </>,
              <>
                The employer-driven side now uses <strong>points-ranked EOI draws</strong> (new in 2026), so eligibility
                alone does not guarantee an invitation.
              </>,
              <>
                With the NWT&apos;s 2026 allocation at roughly <strong>197 nominations</strong>, strong employer support
                and a well-ranked profile matter.
              </>,
            ]}
          />

          <h2>What is Northwest Territories Express Entry?</h2>
          <p>
            <strong>Northwest Territories Express Entry</strong> is the enhanced stream of the Northwest Territories
            Nominee Program (NTNP). &ldquo;Enhanced&rdquo; means it is aligned with the federal Express Entry system: you
            must already hold an active Express Entry profile, and an NTNP nomination through this stream adds{" "}
            <strong>600 CRS points</strong> to your federal score. Like the rest of the NTNP, it is{" "}
            <strong>employer-driven</strong>, you need a genuine, full-time job offer from an eligible NWT employer, and
            the employer initiates the application on your behalf.
          </p>
          <p>
            The territory&apos;s 2026 nomination allocation is about <strong>197</strong>, down from roughly 300 the
            previous year, after IRCC cut provincial and territorial allocations nationwide (source: immigratenwt.ca /
            IRCC, May 2026). That makes the <strong>NTNP Express Entry</strong> stream part of one of the smallest
            programs in the country. A nomination is a strong recommendation, not permanent residence in itself: you
            still apply to IRCC for PR on a separate, enhanced Express Entry application. Figures and rules change
            frequently, so always verify the current position on immigratenwt.ca before acting.
          </p>
          <Callout type="brand" title="Why the +600 CRS boost matters">
            The highest realistic base CRS scores sit well below 600. So when an <strong>NWT Express Entry</strong>{" "}
            nomination adds <strong>600 points</strong>, it lifts most candidates above the cut-off at the next federal
            draw. That makes an <strong>NWT job offer</strong> a strong route toward an Invitation to Apply for{" "}
            <strong>PR</strong>, which IRCC issues. It is also why the enhanced stream is the fastest NTNP route to permanent residence.
          </Callout>

          <h2>How does NWT Express Entry differ from a base nomination?</h2>
          <p>
            The most important distinction across every nominee program is whether a stream is <strong>enhanced</strong>{" "}
            or <strong>base</strong>. An enhanced PNP or territorial stream is tied to Express Entry; a base one is not.{" "}
            <strong>NWT Express Entry</strong> is enhanced: you must already be in the federal
            Express Entry pool, the nomination adds 600 CRS points, and the usual roughly six-month federal processing
            follows. The NTNP&apos;s other employer-driven route, the{" "}
            <a href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a> stream, is a base, paper nomination with no CRS boost and a separate IRCC application that generally takes longer.
          </p>
          <DataTable
            headers={["Feature", "NWT Express Entry (enhanced)", "Employer-Driven Skilled Worker (base)"]}
            rows={[
              ["Stream type", "Enhanced (Express-Entry-aligned)", "Base (paper nomination)"],
              ["Express Entry profile", "Required, active in the federal pool", "Not required"],
              ["Effect of nomination", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["NWT job offer", "Required (generally TEER 0–3)", "Required (TEER 0–3)"],
              ["Employer initiates?", "Yes, candidate cannot self-apply", "Yes, candidate cannot self-apply"],
              ["Typical IRCC PR processing", "~6 months (enhanced)", "Generally longer than enhanced"],
            ]}
            caption="NWT Express Entry vs Employer-Driven Skilled Worker (immigratenwt.ca, May 2026). Eligibility does not guarantee an invitation; figures change."
          />

          <h2>What are the NWT Express Entry eligibility requirements?</h2>
          <p>
            <strong>NWT Express Entry eligibility</strong> layers territorial requirements on top of the federal Express
            Entry minimums. First, you must qualify for and hold an active profile in the federal Express Entry pool, under the Federal Skilled Worker Program, Canadian Experience Class or Federal Skilled Trades Program.
            Second, you need an eligible full-time, non-seasonal <strong>NWT job offer</strong> from an employer who
            supports your file.</p>
          <p>Third, you must meet the NTNP&apos;s work-experience, language and education criteria for
            the stream. Because the published criteria are detailed and updated regularly, the safest step is a profile
            review against the current immigratenwt.ca program guide.
          </p>
          <DataTable
            headers={["Requirement", "What NWT Express Entry asks for"]}
            rows={[
              ["Express Entry profile", "Active federal Express Entry profile (FSW, CEC or FST) meeting that program's minimums"],
              ["NWT job offer", "Eligible full-time, non-seasonal offer from an NWT employer, generally a higher-skilled TEER 0–3 occupation"],
              ["Employer support", "The employer initiates the application; you cannot self-apply on the employer-driven side"],
              ["Work experience", "Qualifying skilled work experience matching the offered occupation and the NTNP's requirements"],
              ["Language", "Approved English or French test results meeting the program's threshold (results valid two years)"],
              ["Education", "Required education level; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Intent to reside", "Genuine intention to live and work in the Northwest Territories"],
            ]}
            caption="NWT Express Entry core eligibility, accurate as of May 2026 (immigratenwt.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="warning" title="Eligibility is not an invitation">
            In 2026 the NTNP&apos;s employer-driven side moved to a points-ranked Expression of Interest (EOI) model.
            With roughly 197 nominations for all of 2026 and ranked draws of up to 65 candidates each (the first was on
            March 25, 2026), qualifying for <strong>NWT Express Entry</strong> places you in the pool but does not
            guarantee an invitation. Genuine NWT employer support is the foundation of any realistic plan.
          </Callout>

          <h2>How do you apply for NWT Express Entry?</h2>
          <p>
            <strong>How to apply for NWT Express Entry</strong> follows the employer-driven sequence, with an extra
            federal layer because the stream is enhanced. The steps below show the path from an active Express Entry
            profile to a federal permanent-residence decision. Throughout, your NWT employer drives the territorial
            application, candidates cannot self-apply on the employer-driven side.
          </p>
          <Steps
            steps={[
              { title: "Enter the Express Entry pool", desc: "Confirm you qualify for FSW, CEC or FST and create an active federal Express Entry profile with a CRS score." },
              { title: "Secure an eligible NWT job offer", desc: "Obtain a genuine full-time, non-seasonal offer from an eligible NWT employer, generally in a TEER 0–3 occupation." },
              { title: "Employer submits an EOI", desc: "Your NWT employer initiates a ranked Expression of Interest on your behalf, you cannot self-apply on the employer-driven side." },
              { title: "Receive an invitation", desc: "If your ranked EOI earns an invitation in a 2026 draw (March, June or September), a complete nomination application is prepared." },
              { title: "Get nominated by the NTNP", desc: "On approval, the Northwest Territories nominates you and you accept the nomination in your Express Entry profile, adding 600 CRS points." },
              { title: "Apply to IRCC for PR", desc: "With the boosted score you receive an Invitation to Apply, then file your enhanced federal PR application (~6 months). IRCC makes the final decision." },
            ]}
          />

          <h2>How long does NWT Express Entry take?</h2>
          <p>
            <strong>How long NWT Express Entry takes</strong> depends on the stage. On the employer-driven side, the wait
            for an invitation now hinges on your EOI ranking and the draw schedule, the NTNP&apos;s 2026 draws are
            planned for <strong>March 25, June 25 and September 25</strong>, each inviting up to 65 candidates.</p>
          <p>After a
            complete nomination application is submitted, territorial processing varies. Once you hold the nomination and
            update your Express Entry profile with the 600 points, IRCC typically processes an enhanced PR application in
            about <strong>six months</strong>. Most applicants should plan for the better part of a year from job offer
            to permanent residence, sometimes more.
          </p>

          <h2>NWT Express Entry vs federal Express Entry on its own</h2>
          <p>
            It helps to be clear about how the territorial stream relates to the federal system. Federal{" "}
            <a href="/express-entry">Express Entry</a> on its own ranks candidates by their{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a> score, often
            via the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> for those with
            skilled Canadian experience, and issues invitations in regular draws; a job offer is optional.{" "}
            <strong>NWT Express Entry</strong> sits on top of that pool.</p>
          <p>It
            requires an NWT job offer and employer support, but in exchange a nomination delivers the 600-point boost
            that lifts most candidates above recent cut-offs, though IRCC issues any invitation. If your standalone CRS
            is already very competitive, you may not need a provincial route at all. If it is not, an{" "}
            <strong>NWT job offer</strong> can be the difference that turns a long wait into a strong{" "}
            <strong>PR</strong> pathway. Not sure where your score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>How Wild Mountain Immigration helps with NWT Express Entry</h2>
          <p>
            The enhanced stream rewards preparation on two fronts at once, your federal{" "}
            <a href="/express-entry">Express Entry</a> profile and the territorial EOI. Our team assesses whether your
            profile is competitive, confirms that your <strong>NWT job offer</strong> and occupation qualify, and helps
            you and your employer build a ranked EOI and nomination application that stands up to scrutiny.</p>
          <p>If you do not
            yet have a qualifying offer, we also weigh the base{" "}
            <a href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a> and{" "}
            <a href="/pnp/northwest-territories/entry-level-semi-skilled">Entry-Level / Semi-Skilled</a> streams within
            the wider <a href="/pnp/northwest-territories">Northwest Territories Nominee Program</a>. Working under a
            licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), we represent
            you with the territory and with IRCC, and catch the documentation gaps that cause avoidable refusals. With
            only about 197 nominations available for 2026, that positioning is where good advice earns its keep.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own
            Northwest Territories Express Entry application an expert check before you submit, and you can{" "}
            <a href="/contact">contact our team</a> first. Figures here are current to May 2026 and change, so we always
            confirm the live immigratenwt.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Could NWT Express Entry be your fastest route to PR?"
        sub="Get started with a licensed RCIC for an honest read on whether Northwest Territories Express Entry, and your CRS score, make this enhanced stream a realistic path to permanent residence."
      />
    </>
  );
}
