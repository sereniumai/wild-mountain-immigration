import type { Metadata } from "next";
import { Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/newfoundland-and-labrador/express-entry-skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "NL Express Entry Skilled Worker 2026 Guide",
  titleAbsolute: "NL Express Entry Skilled Worker 2026 Guide",
  description:
    "Newfoundland Express Entry Skilled Worker: the NLPNP enhanced route with an NL job offer adds +600 CRS. RCIC-reviewed. See if you qualify.",
  path: PATH,
  keywords: [
    "Newfoundland Express Entry Skilled Worker",
    "NLPNP Express Entry",
    "Newfoundland job offer PR",
    "NL Express Entry Skilled Worker eligibility",
    "+600 CRS Newfoundland",
  ],
});

const faqs = [
  {
    q: "Do I need a job offer for the Newfoundland Express Entry Skilled Worker stream?",
    a: "Yes. The Express Entry Skilled Worker stream is employer-driven: you need a permanent, full-time job offer in a TEER 0–3 occupation from an eligible Newfoundland and Labrador employer. This is the requirement that separates it from Priority Skills NL, the province's no-job-offer pathway. Without a qualifying NL offer, this stream is not open to you, but another NLPNP route may fit. Confirm the current rules on gov.nl.ca before relying on them.",
  },
  {
    q: "How many CRS points does an NLPNP nomination add?",
    a: "A provincial nomination through an enhanced (Express Entry-aligned) stream adds 600 points to your Comprehensive Ranking System (CRS) score. Because Express Entry draw cut-offs sit far below the 600-point boost, that nomination puts most candidates well above the typical cut-off, though IRCC issues the Invitation to Apply at the next general draw. The Express Entry Skilled Worker stream is enhanced, so a nomination here gives you the +600 CRS jump.",
  },
  {
    q: "Do I need an active Express Entry profile first?",
    a: "Yes. To be nominated through this enhanced stream you must already have a valid Express Entry profile in IRCC's federal pool, meaning you qualify for one of the federal programs (Federal Skilled Worker, Canadian Experience Class or Federal Skilled Trades). Newfoundland and Labrador nominates you within that framework, so the profile has to exist before the nomination can attach its +600 CRS points.",
  },
  {
    q: "What is the difference between this stream and the base Skilled Worker stream?",
    a: "Both require a Newfoundland and Labrador job offer, but the mechanics differ. The Express Entry Skilled Worker stream is enhanced: it needs an active Express Entry profile, is limited to TEER 0–3 occupations, and a nomination adds 600 CRS points. The base Skilled Worker stream takes any TEER level and does not need an Express Entry profile, but a nomination leads to a separate paper application to IRCC instead of CRS points, generally a slower route.",
  },
  {
    q: "Does Newfoundland publish a cut-off score for this stream?",
    a: "No. Newfoundland and Labrador does not publish minimum cut-off scores for its NLPNP invitation rounds. The Express Entry Skilled Worker stream is assessed against a 67-point eligibility grid, but there is no advertised pass mark for invitations. Because the province does not disclose round-by-round cut-offs, an honest assessment of how competitive your profile is matters more than chasing a target number.",
  },
  {
    q: "How long does the whole process take?",
    a: "There are two stages. The provincial nomination has one of Canada's fastest targets, roughly 25 days for a complete application once you are invited. After nomination, you apply to IRCC for permanent residence through Express Entry, which IRCC typically processes in about six months for enhanced applications. Targets move with demand, so confirm current timelines on gov.nl.ca and canada.ca before relying on them.",
  },
  {
    q: "Is there a provincial fee for the NLPNP?",
    a: "No. As of December 5, 2025, Newfoundland and Labrador eliminated its provincial application fees, so there is $0 to pay at the provincial stage. You still pay the separate federal IRCC permanent-residence fees once you reach that stage. Fees and policies change, so confirm current amounts on gov.nl.ca before you apply.",
  },
];

export default function NlExpressEntrySkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Newfoundland Express Entry Skilled Worker, 2026 NLPNP Guide",
            description:
              "Newfoundland Express Entry Skilled Worker: the NLPNP enhanced route for skilled workers with an NL job offer. A nomination adds +600 CRS. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NLPNP Express Entry Skilled Worker application support",
            description:
              "Newfoundland Express Entry Skilled Worker: the NLPNP enhanced route for skilled workers with an NL job offer. A nomination adds +600 CRS. RCIC-reviewed.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NLPNP, Express Entry Skilled Worker"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Newfoundland and Labrador", path: "/pnp/newfoundland-and-labrador" },
          { name: "Express Entry Skilled Worker", path: PATH },
        ]}
        title={<>Newfoundland <span className="text-brand">Express Entry Skilled Worker</span></>}
        lede={
          <p>
            The <strong>NLPNP Express Entry</strong> Skilled Worker stream is the enhanced Newfoundland route to PR.
            It is for skilled workers who hold a Newfoundland and Labrador job offer and an active Express Entry profile,
            and a nomination adds <strong>600 CRS points</strong>. This RCIC-reviewed guide covers eligibility and how to
            apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Rocket className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the NL EE route right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A +600 CRS nomination is powerful, but only if you have an NL job offer and a strong Express Entry
                profile. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Newfoundland & Labrador PNP", href: "/pnp/newfoundland-and-labrador", note: "Every NLPNP stream explained" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province's PNP" },
                { label: "NL Skilled Worker stream", href: "/pnp/newfoundland-and-labrador/skilled-worker", note: "The base, any-TEER route" },
                { label: "Priority Skills NL", href: "/pnp/newfoundland-and-labrador/priority-skills", note: "The no-job-offer enhanced route" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other NL employer route" },
                { label: "Express Entry", href: "/express-entry", note: "How the federal system works" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The NLPNP Express Entry Skilled Worker stream is an enhanced Newfoundland and Labrador route to permanent residence. You qualify with an active federal Express Entry profile and a permanent, full-time NL job offer in a TEER 0 to 3 occupation, and a provincial nomination adds 600 CRS points to that profile. You apply through an Expression of Interest, then the nomination supports your federal application for permanent residence."
            items={[
              <>The <strong>Express Entry Skilled Worker</strong> stream is an <strong>enhanced</strong> NLPNP route, a nomination adds <strong>+600 CRS</strong>.</>,
              <>You need an <strong>active Express Entry profile</strong> plus a permanent, full-time <strong>NL job offer</strong> in a <strong>TEER 0–3</strong> occupation.</>,
              <>Candidates are assessed against a <strong>67-point eligibility grid</strong>; Newfoundland does <strong>not</strong> publish invitation cut-off scores.</>,
              <>Since <strong>February 19, 2025</strong>, you apply via an <strong>expression of interest (EOI)</strong>, not a direct application.</>,
              <>Provincial fees are <strong>$0</strong> (since December 5, 2025); only federal IRCC fees remain. The provincial target is roughly <strong>25 days</strong>.</>,
            ]}
          />

          <h2>What is the Newfoundland Express Entry Skilled Worker stream?</h2>
          <p>
            The <strong>Newfoundland Express Entry Skilled Worker</strong> stream is the Express-Entry-aligned route within
            the Newfoundland and Labrador Provincial Nominee Program (NLPNP). It is built for skilled workers who already
            have a permanent, full-time job offer from an eligible Newfoundland and Labrador employer and an active profile
            in the federal Express Entry pool.</p>
          <p>Because it is an <strong>enhanced</strong> stream, a provincial nomination
            adds <strong>600 CRS points</strong> to your Comprehensive Ranking System score. That lifts most candidates well
            above the typical Express Entry draw cut-off, although the Invitation to Apply still comes from IRCC. The province has set an ambitious growth goal of welcoming
            up to roughly <strong>5,100 newcomers a year</strong> by 2026 (source: gov.nl.ca, 2026), and skilled workers
            are central to that target.
          </p>
          <p>
            Two NLPNP-wide features make this <strong>Newfoundland job offer PR</strong> route attractive. First, as of
            December 5, 2025, the province eliminated its provincial application fees, so there is <strong>$0</strong> to
            pay at the provincial stage (federal IRCC fees still apply). Second, the NLPNP advertises one of the fastest
            provincial processing targets in the country, at roughly <strong>25 days</strong> for a complete nomination
            application. Figures and policies change frequently, so always verify the current rules on gov.nl.ca before
            acting.
          </p>

          <h2>Why is the +600 CRS nomination so valuable?</h2>
          <p>
            Express Entry ranks candidates on the CRS, and IRCC invites the highest-scoring profiles at each draw. A
            general-draw cut-off typically sits a few hundred points below the maximum, so the <strong>+600 CRS</strong>{" "}
            boost from an enhanced <strong>NLPNP Express Entry</strong> nomination lifts almost any profile clear of the
            cut-off. In practical terms, once Newfoundland and Labrador nominates you under this stream, an Invitation to
            Apply at the next eligible draw is all but certain, and federal processing for enhanced applications then
            typically runs around six months.</p>
          <p>You can see how the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> adds up, and candidates
            with skilled Canadian experience often enter the pool through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>. Not sure where your federal
            score stands today? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <Callout type="brand" title="Enhanced means Express Entry-aligned">
            &ldquo;Enhanced&rdquo; is the term for a stream that plugs into federal Express Entry. The Express Entry
            Skilled Worker stream and Priority Skills NL are the NLPNP&apos;s enhanced routes that add +600 CRS. The base
            Skilled Worker stream is not connected to Express Entry, once nominated, you file a separate paper application
            directly to IRCC.
          </Callout>

          <h2>What are the eligibility requirements?</h2>
          <p>
            Eligibility for the <strong>NL PNP Express Entry</strong> Skilled Worker stream rests on a connected set of
            requirements you must meet when you submit your expression of interest. Missing even one can sink the application:
            an offer outside TEER 0–3, a language result a band short, or no live Express Entry profile. The
            table below summarises the core 2026 requirements; the official, controlling list lives on gov.nl.ca and
            changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Express Entry profile", "An active profile in IRCC's federal Express Entry pool (you must qualify for FSW, CEC or FST)"],
              ["Job offer", "A permanent, full-time offer in a TEER 0–3 occupation from an eligible Newfoundland and Labrador employer"],
              ["Eligibility grid", "Assessment against a 67-point grid covering education, experience, language, age and adaptability"],
              ["Language", "Approved English or French test results that meet the threshold for your occupation; results valid 2 years"],
              ["Work experience", "Skilled work experience that matches the offered TEER 0–3 occupation"],
              ["Settlement intent", "A genuine intention to live and work in Newfoundland and Labrador"],
            ]}
            caption="NLPNP Express Entry Skilled Worker core eligibility, accurate as of May 2026 (gov.nl.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="TEER 0–3 only">
            This enhanced stream is limited to skilled occupations in <strong>TEER 0–3</strong> of the National
            Occupational Classification. If your Newfoundland and Labrador job offer falls in TEER 4–5, the base{" "}
            <a href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled Worker stream</a>, which takes any TEER level
, is the route to look at instead.
          </Callout>

          <h2>How does it compare to the base Skilled Worker stream?</h2>
          <p>
            Both NLPNP skilled-worker routes require a Newfoundland and Labrador job offer, but the mechanics diverge in
            ways that shape your whole timeline. The Express Entry Skilled Worker stream is{" "}
            <strong>enhanced</strong>, it needs an Express Entry profile, is limited to TEER 0–3, and pays off with{" "}
            <strong>+600 CRS</strong>. The base <a href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled
            Worker</a> stream accepts any TEER level and needs no Express Entry profile, but a nomination leads to a
            separate paper application to IRCC rather than CRS points.
          </p>
          <DataTable
            headers={["Feature", "Express Entry Skilled Worker", "Skilled Worker (base)"]}
            rows={[
              ["Stream type", "Enhanced", "Base"],
              ["Express Entry profile", "Required", "Not required"],
              ["Occupation level", "TEER 0–3 only", "Any TEER level"],
              ["Effect of nomination", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["NL job offer", "Required (permanent, full-time)", "Required (age 21–59 applies)"],
              ["Typical federal speed", "About six months", "Generally slower (paper application)"],
            ]}
            caption="NLPNP Express Entry Skilled Worker vs base Skilled Worker (gov.nl.ca, May 2026). Eligibility does not guarantee an invitation."
          />

          <h2>How do you apply through the EOI system?</h2>
          <p>
            How you apply to the NLPNP changed on February 19, 2025. You can no longer apply directly to most streams.
            Instead, you submit an <strong>expression of interest (EOI)</strong> through the province&apos;s online portal,
            and Newfoundland and Labrador invites the candidates it wants to nominate. The first step, then, is building a
            strong EOI profile, and, for this stream, having your federal Express Entry profile live first.
          </p>
          <Steps
            steps={[
              { title: "Secure a TEER 0–3 NL job offer", desc: "Obtain a permanent, full-time job offer in a TEER 0–3 occupation from an eligible Newfoundland and Labrador employer." },
              { title: "Create your Express Entry profile", desc: "Qualify for and submit a federal Express Entry profile (FSW, CEC or FST) so the nomination's +600 CRS can attach to it." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, obtain an Educational Credential Assessment for foreign credentials, and collect job-offer and experience evidence." },
              { title: "Submit your EOI", desc: "File your expression of interest through the province's portal. It stays valid for 12 months while the province runs invitation rounds." },
              { title: "Receive an invitation & apply", desc: "If invited, you have 60 days to submit a complete nomination application. With a roughly 25-day provincial target, a well-prepared file moves quickly." },
              { title: "Get nominated & apply to IRCC", desc: "On nomination, accept the +600 CRS in your Express Entry profile and apply to IRCC for permanent residence, typically processed in about six months." },
            ]}
          />
          <Callout type="warning" title="Eligibility does not guarantee an invitation">
            Newfoundland and Labrador does not publish invitation cut-off scores, and meeting the 67-point grid places you
            in the pool, it does not entitle you to an invitation. Be wary of any source that implies a place is
            guaranteed. We build the strongest realistic case.
          </Callout>

          <h2>Fees, timelines and how this stream compares to the AIP</h2>
          <p>
            On cost, the 2026 headline is simple: there are <strong>$0 provincial fees</strong> since December 5, 2025,
            leaving only the federal IRCC permanent-residence fees you pay once your enhanced nomination converts your
            Invitation to Apply into a complete application. On speed, the province targets roughly <strong>25 days</strong>{" "}
            for a complete nomination once you are invited, and IRCC then targets about six months for an enhanced{" "}
            <a href="/express-entry">Express Entry</a> application. Both timelines move with demand, so we plan against the
            current gov.nl.ca and canada.ca estimates rather than a fixed promise.
          </p>
          <p>
            If you have a Newfoundland and Labrador job offer but no live Express Entry profile, the base{" "}
            <a href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled Worker</a> stream or the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program (AIP)</a> may suit you better. The AIP is
            a separate, employer-driven federal-provincial route with its own designated-employer and endorsement
            process, and for some candidates it is more direct than building a federal profile first. Choosing between an
            enhanced PNP nomination and the AIP is a real decision, and one we weigh against your occupation, your offer
            and your CRS before recommending a path.
          </p>

          <h2>How Wild Mountain Immigration helps with your NL Express Entry application</h2>
          <p>
            For this stream, the work splits across two systems, the federal Express Entry pool and the provincial EOI,
            and a small misstep in either can stall a strong file. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team confirms your
            job offer qualifies under TEER 0–3, checks your profile against the 67-point grid, makes sure your{" "}
            <a href="/express-entry">Express Entry</a> profile is live and accurate, and prepares an EOI and nomination
            application that stand up to scrutiny.</p>
          <p>If you have no NL job offer yet,{" "}
            <a href="/pnp/newfoundland-and-labrador/priority-skills">Priority Skills NL</a> or the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> may fit better, and we will say so.
            We also catch the avoidable mistakes that cause refusals: a mismatched NOC code, a language band one short, or a
            profile that lapses before nomination.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            <strong> NLPNP Express Entry</strong> application an expert check before you submit. Figures here are current
            to 2026 and change, so we always confirm the live gov.nl.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have a Newfoundland job offer? Let's map your route to PR"
        sub="Get started with a licensed RCIC for an honest read on your Express Entry profile, your NL job offer and your +600 CRS nomination chances."
      />
    </>
  );
}
