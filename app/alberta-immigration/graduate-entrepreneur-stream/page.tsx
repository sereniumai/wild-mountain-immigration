import type { Metadata } from "next";
import { Calculator, GraduationCap, Globe, Store, Tractor, Briefcase, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/graduate-entrepreneur-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Graduate Entrepreneur Stream 2026",
  titleAbsolute: "Alberta Graduate Entrepreneur Stream 2026 (AAIP)",
  description:
    "Alberta Graduate Entrepreneur Stream 2026: who qualifies, business and credential rules, and the EOI-to-PR path. RCIC-reviewed guide, see if you qualify.",
  path: PATH,
  keywords: [
    "alberta graduate entrepreneur stream",
    "aaip graduate entrepreneur",
    "alberta graduate start business pr",
    "post-graduation entrepreneur alberta",
    "graduate entrepreneur stream requirements",
  ],
});

const faqs = [
  {
    q: "Who is eligible for the Alberta Graduate Entrepreneur Stream?",
    a: "The stream is for recent graduates of an approved Alberta post-secondary institution who want to establish or buy into a business in Alberta and apply for permanent residence. You generally need an eligible Alberta credential, a qualifying ownership share in the business, the required language ability, and, in many cases, support from a designated Alberta agency, incubator or accelerator. Because the AAIP updates its criteria periodically, always confirm the current, controlling requirements on alberta.ca before you commit.",
  },
  {
    q: "How is this different from the Foreign Graduate Entrepreneur Stream?",
    a: "Both are business streams under the AAIP, but they target different graduates. The Alberta Graduate Entrepreneur Stream is for people who graduated from an approved post-secondary institution inside Alberta. The Foreign Graduate Entrepreneur Stream is for graduates of institutions outside Canada who want to launch a business in Alberta. The eligibility, credential rules and support requirements differ, so it is important to apply through the correct stream, see our Foreign Graduate Entrepreneur Stream guide for that route.",
  },
  {
    q: "Do I need a work permit to apply?",
    a: "You typically apply on the basis of your eligible Alberta credential and your business in (or planned for) Alberta. Many graduate applicants hold a Post-Graduation Work Permit (PGWP), and the AAIP has historically expected meaningful time remaining on that permit. Permit and status rules are detailed and change, so confirm what currently applies to your situation on alberta.ca before submitting an Expression of Interest.",
  },
  {
    q: "What kind of business qualifies?",
    a: "Alberta expects a genuine, active business that you own and operate in the province, not a passive investment. There are normally rules on your minimum ownership percentage, the nature of the business, and your active day-to-day involvement. Certain business types are excluded. The official business eligibility criteria live on alberta.ca and should be verified before you build your business plan.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. A nomination through the Alberta Graduate Entrepreneur Stream is a provincial endorsement, not permanent residence. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
  {
    q: "How long does the Graduate Entrepreneur Stream take?",
    a: "Alberta does not publish a single guaranteed timeline, and it depends on your file, your business and current volumes. The business streams involve an Expression of Interest, an invitation, a detailed business plan and application, a nomination, and then a separate federal permanent-residence application with IRCC. Treat any estimate as approximate and verify current processing information on alberta.ca and canada.ca.",
  },
  {
    q: "Is there a minimum investment or net worth requirement?",
    a: "The AAIP business streams generally set financial expectations, and figures have differed by stream and location over time. Because these thresholds change and are not the same across the graduate and rural entrepreneur routes, we do not rely on a fixed number here, confirm the current minimum ownership, investment and any net-worth expectations on alberta.ca before you plan your finances.",
  },
  {
    q: "Can I apply from outside Canada?",
    a: "The Alberta Graduate Entrepreneur Stream is built around graduating from an approved Alberta post-secondary institution, so most applicants have studied and lived in Alberta. If you graduated from an institution outside Canada, the Foreign Graduate Entrepreneur Stream is the route designed for you. Confirm your eligibility against the current criteria on alberta.ca, or book a consultation for an honest read on which stream fits.",
  },
];

export default function GraduateEntrepreneurStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Graduate Entrepreneur Stream 2026 (AAIP Business Guide)",
            description:
              "Alberta Graduate Entrepreneur Stream 2026: who qualifies, business and credential rules, the EOI-to-PR process and how it differs from the foreign stream.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Alberta Graduate Entrepreneur Stream application support",
            description:
              "Alberta Graduate Entrepreneur Stream 2026: who qualifies, business and credential rules, the EOI-to-PR process and how it differs from the foreign stream.",
            path: PATH,
            serviceType: "Alberta Advantage Immigration Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Graduate Entrepreneur Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Graduate Entrepreneur Stream", path: PATH },
        ]}
        title={<>Alberta Graduate Entrepreneur Stream: <span className="text-brand">start a business, earn PR</span></>}
        lede={
          <p>
            The <strong>Alberta Graduate Entrepreneur Stream</strong> lets graduates of approved Alberta post-secondary
            institutions establish or operate a business in Alberta and apply for permanent residence. This RCIC-reviewed
            guide covers who qualifies, the business and credential requirements, the EOI-to-PR process, and how it differs
            from the foreign stream.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Score your AAIP EOI, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free AAIP Points Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Estimate your Alberta EOI score in two minutes, no email required.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Calculate my EOI score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Foreign Graduate Entrepreneur Stream", href: "/alberta-immigration/foreign-graduate-entrepreneur-stream", note: "For graduates of institutions outside Canada" },
                { label: "Rural Entrepreneur Stream", href: "/alberta-immigration/rural-entrepreneur-stream", note: "Start a business in rural Alberta" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Score your EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Graduate Entrepreneur Stream is a business stream of the AAIP for graduates of approved Alberta post-secondary institutions. On the basis of an eligible Alberta credential, it lets them establish or operate a genuine business in the province and apply for permanent residence. Applicants also need a qualifying ownership share, the required language level and often support from a designated agency, incubator or accelerator. The path runs from Expression of Interest through nomination to permanent residence, and eligibility alone does not guarantee an invitation."
            items={[
              <>The <strong>Alberta Graduate Entrepreneur Stream</strong> is a <strong>business stream</strong> of the AAIP for graduates of <strong>approved Alberta post-secondary institutions</strong> who start or operate a business in Alberta.</>,
              <>Core requirements: an <strong>eligible Alberta credential</strong>, a qualifying <strong>business ownership share</strong>, the required <strong>language</strong> level, and often <strong>support from a designated agency, incubator or accelerator</strong>.</>,
              <>The path runs <strong>EOI → invitation → business plan &amp; application → nomination → PR</strong>, eligibility alone does not guarantee an invitation.</>,
              <>It is for graduates from <strong>inside Alberta</strong>; the <a href="/alberta-immigration/foreign-graduate-entrepreneur-stream">Foreign Graduate Entrepreneur Stream</a> is for graduates from <strong>outside Canada</strong>.</>,
              <>As a <strong>base business stream</strong>, a nomination leads to a separate IRCC permanent-residence application, it does not add CRS points.</>,
            ]}
          />

          <h2>What is the Alberta Graduate Entrepreneur Stream?</h2>
          <p>
            The <strong>Alberta Graduate Entrepreneur Stream</strong> is a business pathway within the Alberta Advantage
            Immigration Program (AAIP) that lets graduates of <strong>approved Alberta post-secondary institutions</strong>{" "}
            establish or operate a business in the province and apply for permanent residence. It is one of several
            entrepreneur streams the province uses to channel its tight provincial allocation.</p>
          <p>Alberta&apos;s total 2026
            AAIP nomination cap is about <strong>6,403</strong>, down sharply from 9,750 in 2024, and most invitation
            volume goes to worker streams (source: alberta.ca, AAIP, May 2026). Because the business streams are
            <em> base</em> streams, a nomination here leads to a separate paper application to IRCC for permanent residence
            rather than adding points to a federal Express Entry profile.
          </p>
          <p>
            In plain terms, this is the AAIP&apos;s route for an <strong>Alberta graduate to start a business and earn
            PR</strong>: you build a genuine, active Alberta business, demonstrate that you own and run it, and use that, together with your eligible Alberta credential, as the foundation of your nomination. It rewards graduates who
            choose to put down roots in Alberta as founders rather than employees.
          </p>
          <Callout type="brand" title="This is the in-Alberta graduate route">
            The Graduate Entrepreneur Stream is built around a credential from an approved post-secondary institution{" "}
            <em>inside Alberta</em>. If you graduated from an institution <em>outside Canada</em>, the{" "}
            <a href="/alberta-immigration/foreign-graduate-entrepreneur-stream">Foreign Graduate Entrepreneur Stream</a>{" "}
            is the pathway designed for you.
          </Callout>

          <h2>Who qualifies for the AAIP graduate entrepreneur route?</h2>
          <p>
            <strong>AAIP graduate entrepreneur</strong> eligibility rests on a connected set of requirements you must meet
            when you submit your Expression of Interest (EOI). The table below summarises the core current criteria; the
            official, controlling list lives on alberta.ca and the province updates it periodically, so treat these as the
            framework to confirm rather than fixed numbers.
          </p>
          <DataTable
            headers={["Requirement", "What the stream looks for"]}
            rows={[
              ["Approved Alberta education", "Graduation from an approved Alberta post-secondary institution with an eligible credential, this is the defining requirement of the stream"],
              ["Business ownership", "A qualifying ownership share in a genuine, active business that you own and operate in Alberta (minimum ownership % set by alberta.ca)"],
              ["Active management", "Ongoing, hands-on involvement in running the business, passive investment does not qualify"],
              ["Language ability", "An approved English or French test result at the required Canadian Language Benchmark level, results are valid two years"],
              ["Agency / incubator support", "In many cases, support or endorsement from a designated Alberta agency, business incubator or accelerator"],
              ["Permit / status", "Valid status in Canada where required; many applicants hold a PGWP with meaningful time remaining"],
              ["Investment / finances", "Minimum investment and any net-worth expectations as currently set by the province for this stream"],
            ]}
            caption="Alberta Graduate Entrepreneur Stream core requirements, framed as of May 2026 (alberta.ca). Criteria change, verify the official list before applying."
          />
          <Callout type="info" title="Confirm the thresholds before you plan">
            Ownership percentages, investment minimums, language levels and the list of designated supporting agencies are
            set by Alberta and revised from time to time. Build your plan around the current criteria published on
            alberta.ca, not around a figure you saw on a third-party site.
          </Callout>

          <h2>How does the process work, from EOI to PR?</h2>
          <p>
            The Graduate Entrepreneur Stream follows the AAIP&apos;s business-stream sequence:{" "}
            <strong>EOI → invitation → business plan &amp; application → nomination → PR</strong>. You first submit an
            Expression of Interest; if Alberta invites you, you develop a detailed business plan and submit a full
            application; on approval the province nominates you; and finally you apply to IRCC for permanent residence.
          </p>
          <Steps
            steps={[
              { title: "Confirm eligibility", desc: "Check that your Alberta credential is eligible, your planned ownership share and business type qualify, and you meet the language and finance bars on alberta.ca." },
              { title: "Submit your Expression of Interest", desc: "Create and submit your business EOI. It is assessed against current criteria, submitting does not, on its own, guarantee an invitation." },
              { title: "Receive an invitation", desc: "If Alberta invites you, you move to the full application stage. Eligibility alone does not entitle you to an invitation." },
              { title: "Build your business plan & apply", desc: "Prepare a thorough business plan and submit your complete application with supporting documents and any required agency endorsement." },
              { title: "Get nominated", desc: "On approval, Alberta nominates you through the Graduate Entrepreneur Stream, a provincial endorsement, not yet permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="warning" title="Eligibility does not guarantee an invitation or PR">
            Like every AAIP pathway, this stream is competitive and Alberta&apos;s allocation is tight. Meeting the
            requirements places you in contention, but neither an invitation nor a nomination is guaranteed, and a
            nomination still requires a separate, successful IRCC application.
          </Callout>

          <h2>What credential and business requirements should I expect?</h2>
          <p>
            Two pillars hold up an <strong>Alberta graduate start business PR</strong> application: an{" "}
            <strong>eligible Alberta credential</strong> and a <strong>qualifying Alberta business</strong>. On the
            education side, the province expects a credential of a recognised type and length from an approved Alberta
            institution. On the business side, it expects a real, operating enterprise, with rules on your minimum
            ownership percentage, your active role, and excluded business types.
          </p>
          <DataTable
            headers={["Pillar", "What Alberta typically expects"]}
            rows={[
              ["Eligible credential", "A qualifying credential from an approved Alberta post-secondary institution, of the type and duration set by the province"],
              ["Business ownership %", "A minimum ownership share in the business, as defined in the current AAIP criteria"],
              ["Active operation", "Genuine, ongoing involvement in running the business in Alberta, not a passive or absentee investment"],
              ["Eligible business type", "An active business that meets Alberta's rules; certain sectors and arrangements are excluded"],
              ["Designated support", "Where required, endorsement or support from a designated Alberta agency, incubator or accelerator"],
            ]}
            caption="Credential and business pillars for the Alberta Graduate Entrepreneur Stream (alberta.ca, May 2026). Confirm the current details before relying on them."
          />

          <h2>How is it different from the Foreign Graduate Entrepreneur Stream?</h2>
          <p>
            The clearest way to understand this pathway is to contrast it with its sibling. The{" "}
            <strong>Alberta Graduate Entrepreneur Stream</strong> is for graduates of approved post-secondary institutions{" "}
            <em>inside Alberta</em>. The{" "}
            <a href="/alberta-immigration/foreign-graduate-entrepreneur-stream">Foreign Graduate Entrepreneur Stream</a>{" "}
            is for graduates of institutions <em>outside Canada</em> who want to build a business in Alberta. Choosing the
            correct stream matters, because the credential rules, support requirements and finances differ.
          </p>
          <DataTable
            headers={["Feature", "Graduate Entrepreneur Stream", "Foreign Graduate Entrepreneur Stream"]}
            rows={[
              ["Where you graduated", "Approved Alberta post-secondary institution", "Institution outside Canada"],
              ["Typical applicant", "Recent graduate already living in Alberta", "Graduate abroad targeting an Alberta business"],
              ["Stream type", "Base business stream", "Base business stream"],
              ["Effect of nomination", "Leads to a separate IRCC PR application", "Leads to a separate IRCC PR application"],
              ["Best fit if…", "You earned your credential in Alberta", "You earned your credential outside Canada"],
            ]}
            caption="Alberta Graduate Entrepreneur Stream vs Foreign Graduate Entrepreneur Stream (alberta.ca, May 2026)."
          />
          <p>
            If you would rather start your business outside Alberta&apos;s major cities, the{" "}
            <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a> is a third option, with
            its own community and investment rules. The right stream depends on where you studied and where you want to
            build.
          </p>

          <h2>What are the costs and timelines?</h2>
          <p>
            The AAIP business streams involve provincial fees at the application stage, plus separate federal fees once you
            reach the IRCC permanent-residence stage. Alberta does not publish a single guaranteed processing time for the
            Graduate Entrepreneur Stream, it depends on your file, the strength of your business plan and current volumes.
            Because amounts and timelines change, confirm the current figures on alberta.ca (and canada.ca for the federal
            stage) before you budget.
          </p>
          <Callout type="info" title="Provincial and federal stages are separate">
            A nomination is a provincial step. The permanent-residence decision is federal: after Alberta nominates you,
            IRCC assesses your separate PR application on medical, security and admissibility grounds. Plan for both stages
            and verify current processing information on alberta.ca and canada.ca.
          </Callout>

          <h2>How Wild Mountain helps with your graduate entrepreneur application</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. The business streams reward a clear,
            credible plan and a clean application, and that is exactly what a{" "}
            <strong>post-graduation entrepreneur in Alberta</strong> needs. Working under a licensed RCIC (CICC #R706497),
            our team confirms whether the Graduate Entrepreneur Stream is the right fit, helps shape your Expression of
            Interest, and prepares a business application and nomination package that stand up to scrutiny.
          </p>
          <p>
            We can compare this stream with the{" "}
            <a href="/alberta-immigration/foreign-graduate-entrepreneur-stream">Foreign Graduate Entrepreneur Stream</a>,
            the <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a> and the{" "}
            <a href="/alberta-immigration/farm-stream">Farm Stream</a>, or with worker routes like the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> and the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>. We also weigh your
            federal <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, set Alberta against other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>, line up the right{" "}
            <a href="/work-permits">work permit</a>, and set out our <a href="/fees">fees</a> in advance.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own{" "}
            <strong>Alberta Graduate Entrepreneur Stream</strong> application an expert check before you submit. Figures
            and criteria here are current to 2026 and change periodically, so we always confirm the live alberta.ca page
            before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Graduate Entrepreneur Stream is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP worker and business stream, with scoring and 2026 cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Globe} title="Foreign Graduate Entrepreneur" desc="The sibling stream for recent graduates of institutions outside Canada." href="/alberta-immigration/foreign-graduate-entrepreneur-stream" />
            <FeatureCard icon={Store} title="Rural Entrepreneur Stream" desc="Start or buy and run a business in a smaller Alberta community." href="/alberta-immigration/rural-entrepreneur-stream" />
            <FeatureCard icon={Tractor} title="Farm Stream" desc="For experienced farmers buying or starting a farm operation in Alberta." href="/alberta-immigration/farm-stream" />
            <FeatureCard icon={GraduationCap} title="Express Entry" desc="The federal system and CRS score behind Alberta's enhanced Express Entry Stream." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to start your business in Alberta?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on whether the Graduate Entrepreneur Stream fits your credential and your plans."
      />
    </>
  );
}
