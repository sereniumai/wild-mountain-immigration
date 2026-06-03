import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/newfoundland-and-labrador/graduate-entrepreneur";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Newfoundland Graduate Entrepreneur (NLPNP) 2026",
  titleAbsolute: "Newfoundland Graduate Entrepreneur: NLPNP 2026 Guide",
  description:
    "Newfoundland Graduate Entrepreneur category 2026: who qualifies, business and credential requirements, the EOI-to-PR process and how it differs. RCIC-led.",
  path: PATH,
  keywords: [
    "Newfoundland Graduate Entrepreneur",
    "NLPNP graduate entrepreneur",
    "Newfoundland graduate start business PR",
    "International Graduate Entrepreneur NLPNP",
    "MUN graduate entrepreneur immigration",
  ],
});

const faqs = [
  {
    q: "Who is eligible for the Newfoundland Graduate Entrepreneur category?",
    a: "The category is for international graduates of a recognised Newfoundland and Labrador post-secondary institution, typically Memorial University (MUN) or the College of the North Atlantic (CNA), who have established or bought, and now actively run, a business in the province. You generally need an eligible NL credential, a qualifying ownership share, hands-on management of the business, a valid work permit, and the required language ability. Because the province updates its criteria, always confirm the current, controlling requirements on gov.nl.ca before you commit.",
  },
  {
    q: "How is it different from the International Entrepreneur category?",
    a: "Both are NLPNP business pathways, but they target different people. The International Graduate Entrepreneur category is for graduates of an NL institution who are already running a business they started or bought in the province, and it generally sets lower investment and net-worth expectations. The International Entrepreneur category is for experienced business owners and senior managers from anywhere who plan to establish or buy a Newfoundland business, with higher net-worth and investment thresholds. Apply through the route that matches your background, see our International Entrepreneur guide for that pathway.",
  },
  {
    q: "Do I need a work permit to apply?",
    a: "Yes. The Newfoundland Graduate Entrepreneur category is built around graduates who are already in the province operating their business, so you typically need to hold a valid work permit, often a Post-Graduation Work Permit (PGWP), when you apply. Permit and status rules are detailed and change, so confirm exactly what currently applies to your situation on gov.nl.ca before you submit an expression of interest.",
  },
  {
    q: "What kind of business qualifies?",
    a: "Newfoundland and Labrador expects a genuine, active business that you own and run day to day in the province, not a passive investment. There are normally rules on your minimum ownership percentage, the nature of the business, and your active involvement, and certain business types are excluded. You also generally need to have operated the business for a minimum period before applying. The official business eligibility criteria live on gov.nl.ca and should be verified before you build your case.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. A nomination through the Newfoundland Graduate Entrepreneur category is a provincial endorsement, not permanent residence. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
  {
    q: "How long does the Graduate Entrepreneur category take?",
    a: "Newfoundland and Labrador advertises one of the fastest provincial targets in the country, roughly a 25-day standard for a complete nomination application once you have been invited. That covers only the provincial stage. After nomination you apply separately to IRCC for permanent residence, which adds its own processing time. Because this is a base business stream, that federal application is paper-based rather than aligned with Express Entry. Targets change, so verify current timelines on gov.nl.ca before relying on them.",
  },
  {
    q: "Is there a minimum investment or net worth requirement?",
    a: "The NLPNP business categories set financial expectations, and the graduate route generally carries lower thresholds than the International Entrepreneur category because applicants are already running an established NL business. Because these figures change and differ between the two business categories, we do not rely on a fixed number here, confirm the current minimum ownership, investment and any net-worth expectations on gov.nl.ca before you plan your finances.",
  },
];

export default function NewfoundlandGraduateEntrepreneurPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Newfoundland Graduate Entrepreneur Category 2026 (NLPNP Business Guide)",
            description:
              "Newfoundland Graduate Entrepreneur category 2026: who qualifies, business and credential requirements, the EOI-to-PR process and how it differs. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NLPNP Graduate Entrepreneur application support",
            description:
              "Newfoundland Graduate Entrepreneur category 2026: who qualifies, business and credential requirements, the EOI-to-PR process and how it differs. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Newfoundland & Labrador (NLPNP), Graduate Entrepreneur"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Newfoundland and Labrador", path: "/pnp/newfoundland-and-labrador" },
          { name: "Graduate Entrepreneur", path: PATH },
        ]}
        title={<>Newfoundland Graduate Entrepreneur: <span className="text-brand">run your NL business, earn PR</span></>}
        lede={
          <p>
            The <strong>Newfoundland Graduate Entrepreneur</strong> category lets international graduates of a Newfoundland
            and Labrador institution who have started or bought and now run a business in the province apply for permanent
            residence. This RCIC-reviewed guide covers who qualifies, the requirements, the process, and how it differs from
            the International Entrepreneur route.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/eligibility", label: "Find what you qualify for" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Graduated in NL and running a business?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Graduate Entrepreneur category rewards founders who put down roots in Newfoundland. Get an honest read
                from a licensed RCIC on whether it fits.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Newfoundland & Labrador PNP", href: "/pnp/newfoundland-and-labrador", note: "Every NLPNP stream explained" },
                { label: "International Entrepreneur (NLPNP)", href: "/pnp/newfoundland-and-labrador/international-entrepreneur", note: "The non-graduate business route" },
                { label: "Study Permit", href: "/study-permit", note: "Study in NL, then build a pathway to PR" },
                { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp", note: "The permit many founders hold" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Newfoundland Graduate Entrepreneur category is a base NLPNP business stream for international graduates of a Newfoundland and Labrador institution, typically MUN or CNA. It is for graduates who started or bought a business in the province, now run it day to day, and want permanent residence. You need an eligible NL credential, a qualifying ownership share, hands-on management, a valid work permit and the required language level. The path runs through an Expression of Interest to a nomination that supports a separate IRCC application for permanent residence."
            items={[
              <>The <strong>Newfoundland Graduate Entrepreneur</strong> category is an NLPNP <strong>business stream</strong> for international graduates of an NL institution who run a business they started or bought in the province.</>,
              <>Core requirements: an <strong>eligible NL credential</strong>, a qualifying <strong>business ownership share</strong>, <strong>active day-to-day management</strong>, a <strong>valid work permit</strong>, and the required <strong>language</strong> level.</>,
              <>The path runs <strong>EOI → invitation → application → nomination → IRCC PR</strong>, eligibility alone does not guarantee an invitation.</>,
              <>It generally sets <strong>lower investment and net-worth</strong> expectations than the <a href="/pnp/newfoundland-and-labrador/international-entrepreneur">International Entrepreneur</a> category.</>,
              <>As a <strong>base business stream</strong>, a nomination leads to a separate IRCC permanent-residence application, it does not add CRS points.</>,
            ]}
          />

          <h2>What is the Newfoundland Graduate Entrepreneur category?</h2>
          <p>
            The <strong>Newfoundland Graduate Entrepreneur</strong> category, formally the NLPNP International Graduate
            Entrepreneur category, is a business pathway within the Newfoundland and Labrador Provincial Nominee Program.
            It is built for international graduates of a recognised Newfoundland and Labrador post-secondary institution,
            typically Memorial University (MUN) or the College of the North Atlantic (CNA), who have <strong>started or
            bought, and now actively run, a business in the province</strong> and want to apply for permanent residence.
            Newfoundland and Labrador has set an ambitious growth goal, welcoming up to roughly <strong>5,100 newcomers a
            year</strong> by 2026 (source: gov.nl.ca, 2026), and its business categories are one way it keeps founders who
            studied in the province.
          </p>
          <p>
            In plain terms, this is the NLPNP&apos;s route for a <strong>Newfoundland graduate to keep their business and
            earn PR</strong>. It is the practical face of MUN graduate immigration: a clear path from studying in the
            province to Newfoundland business owner PR. You build a genuine, active NL business, demonstrate that you own
            and run it, and use that, together
            with your eligible NL credential, as the foundation of your nomination. Because the business
            categories are <em>base</em> streams, a nomination here leads to a separate paper application to IRCC for
            permanent residence rather than adding points to a federal Express Entry profile. Figures and policies change
            frequently, so always verify the current rules on gov.nl.ca before acting.
          </p>
          <Callout type="brand" title="This is the in-Newfoundland graduate route">
            The Graduate Entrepreneur category is built around a credential from a recognised institution{" "}
            <em>inside Newfoundland and Labrador</em> and a business you already operate there. If you are an experienced
            business owner planning to <em>establish or buy</em> an NL business from elsewhere, the{" "}
            <a href="/pnp/newfoundland-and-labrador/international-entrepreneur">International Entrepreneur category</a> is
            the pathway designed for you.
          </Callout>

          <h2>Who qualifies for the NLPNP graduate entrepreneur route?</h2>
          <p>
            <strong>NLPNP graduate entrepreneur</strong> eligibility rests on a connected set of requirements you must meet
            when you submit your expression of interest (EOI). The table below summarises the core current criteria; the
            official, controlling list lives on gov.nl.ca and the province updates it periodically, so treat these as the
            framework to confirm rather than fixed numbers.
          </p>
          <DataTable
            headers={["Requirement", "What the category looks for"]}
            rows={[
              ["Eligible NL credential", "Graduation from a recognised Newfoundland and Labrador post-secondary institution, typically MUN or the College of the North Atlantic, with an eligible credential; this is the defining requirement"],
              ["Business ownership", "A qualifying ownership share in a genuine, active business you own and operate in Newfoundland and Labrador (minimum ownership % set by gov.nl.ca)"],
              ["Active management", "Ongoing, hands-on involvement in running the business in NL, passive or absentee investment does not qualify"],
              ["Operating history", "The business has been established or purchased and operated for the minimum period the province requires before you apply"],
              ["Valid work permit", "A valid work permit at the time of application; many applicants hold a Post-Graduation Work Permit (see our PGWP guide)"],
              ["Language ability", "An approved English or French test result at the Canadian Language Benchmark level the category requires, results are time-limited"],
              ["Investment / finances", "Minimum investment and any net-worth expectations as currently set by the province for this category (generally lower than the International Entrepreneur route)"],
            ]}
            caption="Newfoundland Graduate Entrepreneur core requirements, framed as of May 2026 (gov.nl.ca). Criteria change, verify the official list before applying."
          />
          <Callout type="info" title="Confirm the thresholds before you plan">
            Ownership percentages, investment minimums, the required operating period and language levels are set by
            Newfoundland and Labrador and revised from time to time. Build your plan around the current criteria published
            on gov.nl.ca, not around a figure you saw on a third-party site.
          </Callout>

          <h2>How does the process work, from EOI to PR?</h2>
          <p>
            Since February 19, 2025, you cannot apply directly to the NLPNP. The Graduate Entrepreneur category follows the
            province&apos;s business-stream sequence:{" "}
            <strong>EOI → invitation → application → nomination → IRCC PR</strong>. You first submit an expression of
            interest; if Newfoundland and Labrador invites you, you submit a full application with your business and
            credential evidence; on approval the province nominates you; and finally you apply to IRCC for permanent
            residence.
          </p>
          <Steps
            steps={[
              { title: "Confirm eligibility", desc: "Check that your NL credential is eligible, your ownership share and business type qualify, you have run the business long enough, and you meet the work-permit, language and finance bars on gov.nl.ca." },
              { title: "Submit your expression of interest", desc: "Create and submit your business EOI through the province's portal. It is assessed against current criteria, submitting does not, on its own, guarantee an invitation." },
              { title: "Receive an invitation", desc: "If Newfoundland and Labrador invites you, you move to the full application stage. Eligibility alone does not entitle you to an invitation." },
              { title: "Submit your application", desc: "Prepare and submit your complete nomination application with business records, proof of ownership and active management, and supporting documents within the province's deadline." },
              { title: "Get nominated", desc: "On approval, NL nominates you through the Graduate Entrepreneur category, a provincial endorsement, not yet permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate, paper-based federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="info" title="The EOI and invitation timeline">
            Your <strong>EOI stays valid for 12 months</strong>. If the province issues you an invitation, you then have
            <strong> 60 days</strong> to submit a complete nomination application, and the provincial processing target is
            roughly <strong>25 days</strong>. A well-prepared file moves through the provincial stage quickly, but missing
            documents inside that 60-day window is a common, avoidable setback.
          </Callout>
          <Callout type="warning" title="Eligibility does not guarantee an invitation or PR">
            Like every NLPNP pathway, this category is selective and the province does not publish cut-off scores. Meeting
            the requirements places you in contention, but neither an invitation nor a nomination is guaranteed, and a
            nomination still requires a separate, successful IRCC application.
          </Callout>

          <h2>What credential and business requirements should I expect?</h2>
          <p>
            Two pillars hold up a <strong>Newfoundland graduate start business PR</strong> application: an{" "}
            <strong>eligible NL credential</strong> and a <strong>qualifying Newfoundland business</strong>. On the
            education side, the province expects a recognised credential of an eligible type and length from an NL
            institution such as MUN or CNA. On the business side, it expects a real, operating enterprise, with rules on
            your minimum ownership percentage, your active role, how long you have run it, and excluded business types.
          </p>
          <DataTable
            headers={["Pillar", "What Newfoundland and Labrador typically expects"]}
            rows={[
              ["Eligible credential", "A qualifying credential from a recognised NL post-secondary institution (commonly MUN or the College of the North Atlantic), of the type and duration set by the province"],
              ["Business ownership %", "A minimum ownership share in the business, as defined in the current NLPNP business criteria"],
              ["Active operation", "Genuine, ongoing involvement in running the business in NL, not a passive or absentee investment"],
              ["Operating period", "Evidence the business has been established or bought and run for the minimum period the province requires"],
              ["Eligible business type", "An active business that meets NL's rules; certain sectors and arrangements are excluded"],
            ]}
            caption="Credential and business pillars for the Newfoundland Graduate Entrepreneur category (gov.nl.ca, May 2026). Confirm the current details before relying on them."
          />

          <h2>How is it different from the International Entrepreneur category?</h2>
          <p>
            The clearest way to understand this pathway is to contrast it with its sibling. The{" "}
            <strong>Newfoundland Graduate Entrepreneur</strong> category is for international graduates of an NL institution
            who are <em>already running</em> a business they started or bought in the province. The{" "}
            <a href="/pnp/newfoundland-and-labrador/international-entrepreneur">International Entrepreneur category</a> is
            for experienced business owners and senior managers, from anywhere, who plan to <em>establish or buy</em> a
            Newfoundland business. Choosing the correct category matters, because the credential rules, work-permit
            expectations and finances differ.
          </p>
          <DataTable
            headers={["Feature", "Graduate Entrepreneur", "International Entrepreneur"]}
            rows={[
              ["Who it's for", "International graduates of an NL institution (e.g. MUN, CNA)", "Experienced owners / senior managers from anywhere"],
              ["Business stage", "Already established or bought and running in NL", "Planning to establish or buy an NL business"],
              ["Typical status", "Holds a valid work permit (often a PGWP) in NL", "Comes in on a work permit to build the business first"],
              ["Investment / net worth", "Generally lower thresholds", "Higher net-worth and investment thresholds"],
              ["Stream type", "Base business stream", "Base business stream"],
              ["Effect of nomination", "Leads to a separate IRCC PR application", "Leads to a separate IRCC PR application"],
            ]}
            caption="Newfoundland Graduate Entrepreneur vs International Entrepreneur (gov.nl.ca, May 2026). Thresholds change, verify before relying on them."
          />
          <p>
            If you did not study in Newfoundland and Labrador, or you are bringing significant capital and experience to
            launch a new venture, the{" "}
            <a href="/pnp/newfoundland-and-labrador/international-entrepreneur">International Entrepreneur category</a> is
            the route to look at. The right category depends on where you studied, what stage your business is at, and your
            background.
          </p>

          <h2>What are the costs and timelines?</h2>
          <p>
            On cost, the headline for 2026 is that Newfoundland and Labrador eliminated its provincial application fees on
            December 5, 2025, so there is <strong>$0</strong> to pay at the provincial stage, though the business
            categories still carry their own investment and net-worth requirements, and you pay the separate federal IRCC
            permanent-residence fees at the final stage. On speed, the province&apos;s roughly <strong>25-day</strong>{" "}
            provincial processing target is among the fastest in Canada. It covers only the provincial nomination, though. Federal PR processing is separate and, for a base stream, paper-based.
          </p>
          <Callout type="info" title="Provincial and federal stages are separate">
            A nomination is a provincial step. The permanent-residence decision is federal: after Newfoundland and Labrador
            nominates you, IRCC assesses your separate PR application on medical, security and admissibility grounds. Plan
            for both stages and verify current processing information on gov.nl.ca (and canada.ca for the federal stage).
          </Callout>

          <h2>How Wild Mountain Immigration helps with your graduate entrepreneur application</h2>
          <p>
            The NLPNP business categories reward a clear, credible case and a clean application, exactly what an{" "}
            <strong>international graduate running a Newfoundland business</strong> needs. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team confirms whether
            the Graduate Entrepreneur category is the right fit, helps shape your expression of interest, and prepares an
            application and nomination package, with proof of ownership, active management and your eligible NL
            credential, that stands up to scrutiny with the province and with IRCC. If the{" "}
            <a href="/pnp/newfoundland-and-labrador/international-entrepreneur">International Entrepreneur</a> route or
            another <a href="/pnp/newfoundland-and-labrador">NLPNP</a> stream fits better, we will tell you honestly.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            <strong> Newfoundland Graduate Entrepreneur</strong> application an expert check before you submit, so your
            path from MUN graduate to Newfoundland business owner PR rests on the current rules. Figures and criteria here
            are current to 2026 and change periodically, so we always confirm the live gov.nl.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Ready to turn your Newfoundland business into PR?"
        sub="Get started with a licensed RCIC for an honest read on whether the NLPNP Graduate Entrepreneur category fits your credential, your business and your plans."
      />
    </>
  );
}
