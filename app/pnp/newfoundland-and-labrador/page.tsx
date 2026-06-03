import type { Metadata } from "next";
import { MapPin, Rocket, Briefcase, GraduationCap, Building2, Calculator, Anchor } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/newfoundland-and-labrador";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Newfoundland & Labrador PNP (NLPNP), 2026 Guide",
  titleAbsolute: "Newfoundland PNP 2026: NLPNP Streams & EOI Guide",
  description:
    "Newfoundland PNP 2026 guide: NLPNP streams, Priority Skills NL, the EOI system and $0 provincial fees. Get an honest RCIC read on which fits you.",
  path: PATH,
  keywords: [
    "Newfoundland and Labrador Provincial Nominee Program",
    "NLPNP 2026",
    "Newfoundland PNP",
    "immigrate to Newfoundland",
    "NL skilled worker",
  ],
});

const faqs = [
  {
    q: "How long does the NLPNP take to process?",
    a: "Newfoundland and Labrador advertises one of the fastest provincial targets in the country, roughly a 25-day processing standard for a complete nomination application once you have been invited. That is only the provincial stage. After you receive your nomination you still apply to IRCC for permanent residence: an enhanced (Express Entry-aligned) application is typically processed in about six months, while a base, paper-based application generally takes longer. Targets change, so confirm current timelines on gov.nl.ca before relying on them.",
  },
  {
    q: "Do I need a job offer to immigrate to Newfoundland through the NLPNP?",
    a: "For most streams, yes. The Express Entry Skilled Worker and Skilled Worker streams both require a job offer from an eligible Newfoundland and Labrador employer. The important exception is Priority Skills NL, which lets certain high-demand candidates apply without a Newfoundland job offer. The International Graduate stream needs a post-graduation work permit rather than a fresh offer, and the entrepreneur streams require a business investment instead of a job offer.",
  },
  {
    q: "What is Priority Skills NL?",
    a: "Priority Skills NL is Newfoundland and Labrador's pathway for in-demand candidates who do not yet have a provincial job offer. It operates within the Express Entry framework and targets people with the education, experience and skills the province most needs, for example in health care or other priority sectors. It is the main no-job-offer route into the NLPNP, which makes it valuable for skilled candidates who are not yet tied to a specific Newfoundland employer.",
  },
  {
    q: "How much does the NLPNP cost?",
    a: "As of December 5, 2025, Newfoundland and Labrador eliminated its provincial application fees, so there is no provincial charge to apply to the NLPNP. You still pay the separate IRCC permanent-residence fees at the federal stage, and the entrepreneur streams carry their own investment and net-worth thresholds. Fees and policies change, so confirm current amounts on gov.nl.ca before you apply.",
  },
  {
    q: "What is the difference between enhanced and base NLPNP streams?",
    a: "An enhanced stream is aligned with federal Express Entry: a nomination adds 600 CRS points to your profile, which lifts most candidates well above recent Express Entry draw cut-offs, though IRCC issues any Invitation to Apply. The Express Entry Skilled Worker stream and Priority Skills NL run within that framework. A base stream, such as the standard Skilled Worker stream, is not connected to Express Entry, so once nominated you submit a separate paper application directly to IRCC, which is generally slower.",
  },
  {
    q: "Does Newfoundland and Labrador publish NLPNP cut-off scores?",
    a: "No. Unlike some provinces, Newfoundland and Labrador does not publish minimum cut-off scores for its invitation rounds. The Express Entry Skilled Worker stream is assessed against a 67-point eligibility grid, but there is no advertised pass mark for invitations. Because the province does not disclose round-by-round cut-offs, a candid assessment of how competitive your profile is matters more than chasing a target number.",
  },
  {
    q: "How is the NLPNP different from the Atlantic Immigration Program?",
    a: "They are two separate programs that both operate in Newfoundland and Labrador. The NLPNP is the province's own Provincial Nominee Program. The Atlantic Immigration Program (AIP) is a distinct, employer-driven federal-provincial program shared across the four Atlantic provinces, with its own designated-employer and endorsement process. You generally choose one pathway based on your situation, and we can advise which fits your profile best.",
  },
  {
    q: "How does the NLPNP expression of interest (EOI) system work?",
    a: "Since February 19, 2025, you cannot apply directly to most NLPNP streams. Instead you submit an expression of interest (EOI) through the province's online portal. Your EOI stays valid for 12 months, and if the province invites you, you have 60 days to submit a complete nomination application. This means the first step is building a strong EOI profile, not filing a full application. Getting that profile right is where good preparation pays off.",
  },
];

export default function NewfoundlandLabradorPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Newfoundland and Labrador Provincial Nominee Program (NLPNP), 2026 RCIC Guide",
            description:
              "Newfoundland and Labrador Provincial Nominee Program 2026: NLPNP streams, Priority Skills NL, the EOI system, $0 provincial fees and how to apply. RCIC-led",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NLPNP application support",
            description:
              "Newfoundland and Labrador Provincial Nominee Program 2026: NLPNP streams, Priority Skills NL, the EOI system, $0 provincial fees and how to apply. RCIC-led",
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
          { name: "Newfoundland and Labrador", path: PATH },
        ]}
        title={<>Newfoundland and Labrador PNP <span className="text-brand">(NLPNP)</span></>}
        lede={
          <p>
            The <strong>Newfoundland and Labrador Provincial Nominee Program</strong> (the Newfoundland PNP, or NLPNP)
            lets the province nominate skilled workers, graduates and entrepreneurs for permanent residence, with no
            provincial application fee and one of the fastest processing targets in Canada. In 2026, candidates apply
            through an expression-of-interest system.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the NLPNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With $0 fees and a fast target, Newfoundland appeals to many, but stream fit decides everything. Get an
                honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Prince Edward Island PNP", href: "/pnp/prince-edward-island", note: "Another Atlantic program" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other NL employer route" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Newfoundland PNP (NLPNP) is the province's economic immigration program, nominating skilled workers, graduates and entrepreneurs for permanent residence. It charges $0 provincial fees since December 2025 and sets one of the fastest nomination targets in Canada, at roughly 25 days. Its streams split into enhanced (Express Entry aligned, adding 600 CRS points) and base (a separate paper application to IRCC), and candidates apply through an Expression of Interest."
            items={[
              <>The <strong>NLPNP</strong> nominates skilled workers, graduates and entrepreneurs for permanent residence in Newfoundland and Labrador.</>,
              <>Streams split into <strong>enhanced</strong> (Express Entry-aligned, +600 CRS) and <strong>base</strong> (separate paper application to IRCC).</>,
              <><strong>Priority Skills NL</strong> is the main pathway that does <strong>not</strong> require a Newfoundland job offer.</>,
              <>As of <strong>December 5, 2025</strong>, provincial application fees are <strong>$0</strong>, only federal IRCC fees remain.</>,
              <>Since <strong>February 19, 2025</strong>, candidates apply through an <strong>expression of interest (EOI)</strong>, not a direct application.</>,
            ]}
          />

          <h2>What is the Newfoundland PNP (NLPNP)?</h2>
          <p>
            The <strong>Newfoundland and Labrador Provincial Nominee Program</strong> (the Newfoundland PNP, or NLPNP)
            is the province&apos;s economic immigration program. It lets Newfoundland and Labrador nominate people whose skills, experience or
            business plans meet local labour-market and economic needs; a provincial nomination is then your stepping
            stone to applying to IRCC for permanent residence. The province has set an ambitious growth goal, welcoming
            up to roughly <strong>5,100 newcomers a year</strong> by 2026 (source: gov.nl.ca, 2026), and has made the
            program notably applicant-friendly.
          </p>
          <p>
            Two features stand out for anyone looking to <strong>immigrate to Newfoundland</strong>. First, as of
            December 5, 2025, the province eliminated its provincial application fees, so there is <strong>$0</strong> to
            pay at the provincial stage (federal IRCC fees still apply). Second, the NLPNP advertises one of the fastest
            provincial processing targets in the country, at roughly <strong>25 days</strong> for a complete nomination
            application. Figures and policies change frequently, so always verify the current rules on gov.nl.ca before
            acting.
          </p>

          <h2>Enhanced vs base: how NLPNP streams differ</h2>
          <p>
            Like every <a href="/pnp">Provincial Nominee Program</a>, the Newfoundland Provincial Nominee Program runs
            two kinds of streams, and the distinction shapes your whole timeline. An <strong>enhanced</strong> stream is
            aligned with federal{" "}
            <a href="/express-entry">Express Entry</a>: a nomination adds <strong>600 CRS points</strong> to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score, which
            puts most candidates well above the typical Express Entry draw cut-off, followed by roughly six-month
            federal processing once IRCC issues the invitation. Candidates whose skilled experience was gained in Canada often qualify through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> within that same profile.
          </p>
          <p>
            A <strong>base</strong> stream is not connected to Express Entry. Once Newfoundland and Labrador nominates you
            under a base stream, you submit a <strong>separate permanent-residence application directly to IRCC</strong>,
            which does not earn CRS points and is generally processed more slowly. In the NLPNP, the Express Entry Skilled
            Worker stream and Priority Skills NL operate within the Express Entry (enhanced) framework, while the standard
            Skilled Worker stream is a base route. Confirming whether your stream is enhanced or base is one of the first
            things we check. Not sure where your federal score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>The main NLPNP streams in 2026</h2>
          <p>
            The table below summarises the NLPNP&apos;s live streams, who each is for and whether it is enhanced or base.
            Use the links to read our dedicated guide to each pathway. Eligibility never guarantees an invitation, and the
            province does not publish cut-off scores, so a realistic read on your profile matters.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Type"]}
            rows={[
              [
                <a key="ee" href="/pnp/newfoundland-and-labrador/express-entry-skilled-worker">Express Entry Skilled Worker</a>,
                "Skilled workers with a TEER 0–3 NL job offer and an Express Entry profile",
                "Enhanced (+600 CRS)",
              ],
              [
                <a key="sw" href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled Worker</a>,
                "Workers aged 21–59 with an eligible NL job offer (any TEER level)",
                "Base",
              ],
              [
                <a key="ig" href="/pnp/newfoundland-and-labrador/international-graduate">International Graduate</a>,
                "Recent graduates with a valid post-graduation work permit (PGWP)",
                "Base",
              ],
              [
                <a key="ps" href="/pnp/newfoundland-and-labrador/priority-skills">Priority Skills NL</a>,
                "In-demand candidates with no NL job offer (the no-offer exception)",
                "Enhanced (Express Entry)",
              ],
              [
                <a key="ie" href="/pnp/newfoundland-and-labrador/international-entrepreneur">International Entrepreneur</a>,
                "Entrepreneurs establishing or buying an NL business (net-worth & investment thresholds)",
                "Business",
              ],
              [
                <a key="ge" href="/pnp/newfoundland-and-labrador/graduate-entrepreneur">International Graduate Entrepreneur</a>,
                "MUN / College of the North Atlantic graduates starting an NL business",
                "Business",
              ],
            ]}
            caption="Main NLPNP streams (gov.nl.ca, 2026). Eligibility does not guarantee an invitation; figures change."
          />
          <Callout type="brand" title="Priority Skills NL, the no-job-offer route">
            Most NLPNP streams require a Newfoundland and Labrador job offer. <strong>Priority Skills NL</strong> is the
            key exception: it operates inside the Express Entry framework and targets in-demand candidates, for example in
            health care, who have the education and experience the province needs but no provincial employer yet. For
            skilled people not tied to an NL job, it is often the most realistic way in.
          </Callout>

          <h2>NLPNP eligibility</h2>
          <p>
            Requirements differ by stream. The <strong>Express Entry Skilled Worker</strong> stream expects a permanent,
            full-time job offer in a TEER 0–3 occupation from an eligible Newfoundland and Labrador employer, an active
            Express Entry profile, and assessment against a 67-point eligibility grid. The base <strong>Skilled
            Worker</strong> stream is broader on occupation (any TEER level) but generally targets applicants aged 21–59
            with an eligible NL job offer.
          </p>
          <p>
            The <strong>International Graduate</strong> stream is for recent graduates holding a valid post-graduation
            work permit. <strong>Priority Skills NL</strong> waives the job-offer requirement for in-demand candidates
            within the Express Entry framework. The two entrepreneur streams replace a job offer with business criteria, net-worth, minimum-investment and language thresholds, and the Graduate Entrepreneur route is reserved for
            graduates of Memorial University (MUN) or the College of the North Atlantic. Because the published criteria
            are detailed and updated regularly, the safest step is a profile review against the current gov.nl.ca program
            guide.
          </p>

          <h2>How to apply for the NLPNP: the EOI system</h2>
          <p>
            <strong>How to apply for the NLPNP</strong> changed on February 19, 2025. You can no longer apply directly to
            most streams. Instead, you submit an <strong>expression of interest (EOI)</strong> through the province&apos;s
            online portal, and Newfoundland and Labrador invites the candidates it wants to nominate. Each PNP draw, or
            invitation round, selects EOI profiles from the pool, so the first step is building a strong EOI profile, not
            filing a full application.
          </p>
          <Callout type="info" title="The EOI timeline at a glance">
            Your <strong>EOI stays valid for 12 months</strong>. If the province issues you an invitation, you then have
            <strong> 60 days</strong> to submit a complete nomination application. With the provincial processing target
            at roughly <strong>25 days</strong>, a well-prepared file can move through the provincial stage quickly, but
            missing documents inside that 60-day window is a common, avoidable setback.
          </Callout>
          <p>
            Once nominated, you apply to <strong>IRCC</strong> for permanent residence, through Express Entry if your
            nomination is enhanced (Express Entry Skilled Worker or Priority Skills NL), or on paper if it is a base
            nomination. The province does not publish invitation cut-off scores, so there is no public target to aim at;
            the focus is simply on maximising your EOI profile.
          </p>

          <h2>Fees, processing and the Atlantic Immigration Program</h2>
          <p>
            On cost, the headline for 2026 is simple: <strong>$0 provincial fees</strong>. Newfoundland and Labrador
            eliminated its NLPNP application fees on December 5, 2025, so the only government charges left are the federal
            IRCC permanent-residence fees you pay at the final stage (entrepreneur streams still carry investment and
            net-worth requirements). On speed, the province&apos;s roughly <strong>25-day</strong> provincial processing
            target is among the fastest in Canada, though it covers only the provincial nomination, federal PR processing
            is separate.
          </p>
          <p>
            One common point of confusion: the NLPNP is <em>not</em> the same as the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program (AIP)</a>. The AIP is a distinct,
            employer-driven federal-provincial program shared across the four Atlantic provinces, with its own
            designated-employer and endorsement process. Many candidates in Newfoundland and Labrador qualify for one
            pathway or the other; choosing correctly up front saves time, which is exactly the kind of call we make in a
            consultation. A <a href="/work-permits">work permit</a> can bridge either route, and graduates who studied on
            a <a href="/study-permit">study permit</a> and now hold a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> often build the NL experience that strengthens an{" "}
            <a href="/pnp/newfoundland-and-labrador/international-graduate">International Graduate</a> or AIP application.
          </p>

          <h2>How Wild Mountain Immigration helps with the NLPNP</h2>
          <p>
            As an <strong>NL skilled worker</strong>, graduate or entrepreneur, your first task is to land in the right
            stream and submit an EOI profile that ranks well. Wild Mountain Immigration assesses your profile against
            Newfoundland and Labrador&apos;s current priorities, confirms whether your route is enhanced or base, and
            steers you toward the pathway, the enhanced{" "}
            <a href="/pnp/newfoundland-and-labrador/express-entry-skilled-worker">Express Entry Skilled Worker</a> stream,
            the base <a href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled Worker</a> stream,{" "}
            <a href="/pnp/newfoundland-and-labrador/international-graduate">International Graduate</a>,{" "}
            <a href="/pnp/newfoundland-and-labrador/priority-skills">Priority Skills NL</a> or an entrepreneur stream,
            with the strongest realistic chance. Working under a licensed RCIC (CICC #R706497), our team prepares an EOI
            and nomination application that stands up to scrutiny and represents you with the province and with IRCC,
            online throughout.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile and stream fit", desc: "We weigh your occupation, experience, language and any NL job offer against the province's priorities, then confirm whether an enhanced Express Entry route, a base stream, Priority Skills NL or an entrepreneur category fits you best." },
              { title: "Build and submit your EOI", desc: "We prepare a strong expression of interest through the province's portal and, for enhanced streams, make sure your federal Express Entry profile is live and accurate so a nomination can attach its 600 CRS points." },
              { title: "Apply, get nominated and reach PR", desc: "On an invitation, we assemble a complete nomination application inside the 60-day window, then manage the federal stage, Express Entry or a paper application to IRCC, through to a decision." },
            ]}
          />
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Newfoundland PNP application an expert check before you submit, and our <a href="/fees">fees guide</a> sets
            out how our professional fee differs from the federal IRCC charges.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the NLPNP streams</h2>
          <p className="mt-3 text-ink-soft">Every Newfoundland and Labrador route to permanent residence, plus the Atlantic Immigration Program.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry Skilled Worker" desc="The enhanced route: a TEER 0-3 NL job offer plus a federal profile, and a nomination adds 600 CRS points." href="/pnp/newfoundland-and-labrador/express-entry-skilled-worker" badge="Enhanced" />
            <FeatureCard icon={Briefcase} title="Skilled Worker" desc="The base, any-TEER job-offer route, leading to a separate paper application to IRCC." href="/pnp/newfoundland-and-labrador/skilled-worker" />
            <FeatureCard icon={GraduationCap} title="International Graduate" desc="For recent graduates of NL institutions holding a valid PGWP and a related NL job." href="/pnp/newfoundland-and-labrador/international-graduate" />
            <FeatureCard icon={Calculator} title="Priority Skills NL" desc="The enhanced, no-job-offer route for in-demand graduates and high-skilled workers." href="/pnp/newfoundland-and-labrador/priority-skills" badge="No offer" />
            <FeatureCard icon={Building2} title="Entrepreneur streams" desc="The International Entrepreneur and Graduate Entrepreneur business routes to PR in NL." href="/pnp/newfoundland-and-labrador/international-entrepreneur" />
            <FeatureCard icon={Anchor} title="Atlantic Immigration Program" desc="A separate, employer-driven federal-provincial route shared across the four Atlantic provinces." href="/atlantic-immigration-program" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the NLPNP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on which Newfoundland and Labrador stream gives you the strongest route to permanent residence."
      />
    </>
  );
}
