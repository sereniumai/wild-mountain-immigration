import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia/international-graduate-entrepreneur";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia Intl Graduate Entrepreneur 2026",
  titleAbsolute: "NSNP Intl Graduate Entrepreneur: NS 2026",
  description:
    "Nova Scotia International Graduate Entrepreneur stream: who qualifies, the credential and business rules, and how it differs. See if you fit.",
  path: PATH,
  keywords: [
    "Nova Scotia International Graduate Entrepreneur",
    "NSNP graduate entrepreneur",
    "Nova Scotia graduate start business PR",
    "NSNP international graduate entrepreneur stream",
    "Nova Scotia graduate entrepreneur requirements",
  ],
});

const faqs = [
  {
    q: "Who is eligible for the Nova Scotia International Graduate Entrepreneur stream?",
    a: "The stream is for international graduates of a recognized Nova Scotia university or community college who have owned and actively operated their own business in Nova Scotia for at least one year before applying. You generally need an eligible Nova Scotia post-secondary credential, a qualifying ownership share in an active provincial business, a valid work permit, and the required language ability. Because the province updates its criteria periodically, always confirm the current, controlling requirements on novascotia.ca before you commit.",
  },
  {
    q: "How is this different from the (non-graduate) Entrepreneur stream?",
    a: "Both are base business streams under the NSNP, but they target different people. The International Graduate Entrepreneur stream is for graduates of a Nova Scotia institution who are already running their own NS business. The broader Entrepreneur stream is for experienced business owners or senior managers, typically from outside the province, who establish, buy or invest in a Nova Scotia business, and it sets higher net-worth and investment expectations. See our Nova Scotia Entrepreneur stream guide for that route.",
  },
  {
    q: "How long must I have run my business before I apply?",
    a: "The defining feature of this stream is that you must have actively owned and managed your own business in Nova Scotia for at least one year before you apply. Nova Scotia looks for a genuine, operating business that you run day to day, not a passive investment or a company that exists only on paper. Confirm the current minimum operating period and ownership rules on novascotia.ca before relying on them.",
  },
  {
    q: "Do I need a work permit to apply?",
    a: "Yes. Applicants are international graduates building a business in Nova Scotia, so you typically need valid status that permits self-employment, most commonly a Post-Graduation Work Permit (PGWP). Status and permit rules are detailed and change, so confirm what currently applies to your situation on novascotia.ca and canada.ca before you submit an expression of interest.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. A nomination through the International Graduate Entrepreneur stream is a provincial endorsement, not permanent residence. As a base nomination it adds no CRS points; you submit a separate paper application to IRCC, which makes the final decision on medical, security and admissibility grounds. What we do is build the strongest possible case and flag risks before they become refusals.",
  },
  {
    q: "What language level do I need?",
    a: "Nova Scotia sets a minimum language requirement for this stream, proven with an approved English or French test result at the required Canadian Language Benchmark level. The exact CLB minimum and the list of accepted tests are set by the province and can change, so confirm the current threshold on novascotia.ca before you book a test.",
  },
  {
    q: "Is there a net-worth or investment requirement?",
    a: "This graduate stream is built around an already-operating business rather than a large upfront investment, so its financial expectations are generally lighter than the broader Entrepreneur stream. That said, the province still sets ownership and business-viability requirements, and figures change. Confirm the current rules on novascotia.ca before you plan your finances.",
  },
];

export default function NsInternationalGraduateEntrepreneurPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia International Graduate Entrepreneur Stream 2026 (NSNP Business Guide)",
            description:
              "Nova Scotia International Graduate Entrepreneur stream: who qualifies, the credential and business rules, and how it differs from the Entrepreneur stream.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Nova Scotia International Graduate Entrepreneur stream application support",
            description:
              "Nova Scotia International Graduate Entrepreneur stream: who qualifies, the credential and business rules, and how it differs from the Entrepreneur stream.",
            path: PATH,
            serviceType: "Nova Scotia Nominee Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Nova Scotia (NSNP), International Graduate Entrepreneur"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Nova Scotia (NSNP)", path: "/pnp/nova-scotia" },
          { name: "International Graduate Entrepreneur", path: PATH },
        ]}
        title={<>Nova Scotia International Graduate Entrepreneur: <span className="text-brand">run your business, earn PR</span></>}
        lede={
          <p>
            The <strong>Nova Scotia International Graduate Entrepreneur</strong> stream turns your NS business into a PR
            pathway. It is for graduates of a Nova Scotia university or college who have owned and operated their own
            provincial business for at least a year. This RCIC-reviewed guide covers who qualifies, the credential,
            business and language requirements, the process, and how it differs from the broader Entrepreneur stream.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Graduated in Nova Scotia?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                If you run your own NS business after studying here, this stream may be your fastest route to PR. Get an
                honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia Nominee Program (NSNP)", href: "/pnp/nova-scotia", note: "Every NSNP stream explained" },
                { label: "NSNP Entrepreneur stream", href: "/pnp/nova-scotia/entrepreneur", note: "The non-graduate business route" },
                { label: "Study permits", href: "/study-permit", note: "Where the graduate pathway begins" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Nova Scotia International Graduate Entrepreneur stream is a base NSNP business pathway for graduates of Nova Scotia universities and colleges who have owned and actively run their own provincial business for at least a year before applying. There is no job offer; eligibility rests on your NS credential, ownership and active management. A nomination leads to a separate IRCC application for permanent residence."
            items={[
              <>The <strong>Nova Scotia International Graduate Entrepreneur</strong> stream is a <strong>base business stream</strong> of the NSNP for graduates of NS universities and community colleges who run their own NS business.</>,
              <>The defining requirement is that you have <strong>owned and actively operated your business in Nova Scotia for at least one year</strong> before applying.</>,
              <>Core requirements: an <strong>eligible NS credential</strong>, a qualifying <strong>business ownership share</strong>, a valid <strong>work permit</strong> (often a PGWP), and the required <strong>language</strong> level.</>,
              <>It differs from the broader <a href="/pnp/nova-scotia/entrepreneur">Entrepreneur stream</a>, which targets experienced owners/managers and sets higher net-worth and investment bars.</>,
              <>As a <strong>base</strong> nomination it adds <strong>no CRS points</strong>, it leads to a separate paper application to IRCC for permanent residence.</>,
            ]}
          />

          <h2>What is the Nova Scotia International Graduate Entrepreneur stream?</h2>
          <p>
            The <strong>Nova Scotia International Graduate Entrepreneur</strong> stream is a business pathway within the
            Nova Scotia Nominee Program (NSNP) for international graduates of a recognized Nova Scotia university or
            community college who have <strong>operated their own business in the province for at least one year</strong>.
            It rewards graduates who choose to stay and build a company in Nova Scotia after studying there, letting them
            use that business, together with their eligible NS credential, as the foundation of a provincial nomination.
            Nova Scotia is also unusual in charging <strong>no provincial application fee</strong> for an NSNP nomination
            (source: novascotia.ca, May 2026), though federal IRCC fees still apply at the permanent-residence stage.
          </p>
          <p>
            In plain terms, this is the NSNP&apos;s route for a <strong>Nova Scotia graduate to keep running their
            business and earn PR</strong>: you demonstrate that you genuinely own and run an active NS business, that you
            graduated from an eligible provincial institution, and that you meet the language and status requirements.
            Because it is a <em>base</em> stream, a nomination here leads to a separate paper application to IRCC for
            permanent residence rather than adding points to a federal Express Entry profile.
          </p>
          <Callout type="brand" title="This is the graduate-owner route">
            The International Graduate Entrepreneur stream is built around an already-operating NS business run by a
            graduate of a Nova Scotia institution. If you are an experienced owner or manager planning to{" "}
            <em>establish or buy into</em> a Nova Scotia business, the{" "}
            <a href="/pnp/nova-scotia/entrepreneur">Entrepreneur stream</a> is the pathway designed for you.
          </Callout>

          <h2>Who qualifies as an NSNP graduate entrepreneur?</h2>
          <p>
            <strong>NSNP graduate entrepreneur</strong> eligibility rests on a connected set of requirements you must meet
            when you submit your expression of interest (EOI). The table below summarises the core current criteria; the
            official, controlling list lives on novascotia.ca and the province updates it periodically, so treat these as
            the framework to confirm rather than fixed numbers.
          </p>
          <DataTable
            headers={["Requirement", "What the stream looks for"]}
            rows={[
              ["Eligible NS credential", "Graduation from a recognized Nova Scotia university or community college with an eligible post-secondary credential, the defining requirement of the stream"],
              ["Business ownership ≥ 1 year", "A qualifying ownership share in a genuine, active business that you have owned and operated in Nova Scotia for at least one year before applying"],
              ["Active management", "Ongoing, hands-on involvement in running the business day to day, passive investment does not qualify"],
              [<>Valid work permit</>, <>Valid status that permits self-employment in Canada; most applicants hold a <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a></>],
              ["Language ability", "An approved English or French test result that meets the stream's CLB language requirement (Canadian Language Benchmark)"],
              ["Intent to settle", "A genuine intention to live in Nova Scotia and continue operating your business in the province"],
            ]}
            caption="Nova Scotia International Graduate Entrepreneur core requirements, framed as of May 2026 (novascotia.ca). Criteria change, verify the official list before applying."
          />
          <Callout type="info" title="Confirm the thresholds before you plan">
            The minimum operating period, ownership percentage, language level and accepted credentials are set by Nova
            Scotia and revised from time to time. Build your plan around the current criteria published on novascotia.ca,
            not around a figure you saw on a third-party site.
          </Callout>

          <h2>What credential and business requirements should I expect?</h2>
          <p>
            Two pillars hold up a <strong>Nova Scotia graduate start business PR</strong> application: an{" "}
            <strong>eligible Nova Scotia credential</strong> and a <strong>qualifying, operating NS business</strong>. On
            the education side, the province expects a recognized credential from an eligible Nova Scotia university or
            community college. On the business side, it expects a real, active enterprise that you have run for at least a
            year, with rules on your minimum ownership percentage, your hands-on role, and excluded business types.
          </p>
          <DataTable
            headers={["Pillar", "What Nova Scotia typically expects"]}
            rows={[
              ["Eligible credential", "A qualifying credential from a recognized Nova Scotia university or community college, of the type and length set by the province"],
              ["Operating period", "At least one year of active business ownership and operation in Nova Scotia before you apply"],
              ["Business ownership %", "A minimum ownership share in the business, as defined in the current NSNP criteria"],
              ["Active operation", "Genuine, ongoing involvement in running the business in Nova Scotia, not a passive or absentee investment"],
              ["Eligible business type", "An active business that meets Nova Scotia's rules; certain sectors and arrangements are excluded"],
            ]}
            caption="Credential and business pillars for the Nova Scotia International Graduate Entrepreneur stream (novascotia.ca, May 2026). Confirm the current details before relying on them."
          />

          <h2>How does the process work, from EOI to PR?</h2>
          <p>
            The International Graduate Entrepreneur stream follows the NSNP&apos;s business-stream sequence:{" "}
            <strong>EOI → invitation → application &amp; documents → nomination → PR</strong>. You first submit an
            expression of interest; if Nova Scotia invites you, you submit a full application with proof of your
            credential, your year of business operation and your finances; on approval the province nominates you; and
            finally you apply to IRCC for permanent residence.
          </p>
          <Steps
            steps={[
              { title: "Confirm eligibility", desc: "Check that your NS credential is eligible, your business meets the one-year operating and ownership rules, and you meet the work-permit and language bars on novascotia.ca." },
              { title: "Submit your expression of interest", desc: "Create and submit your EOI. It is assessed and ranked against current criteria, submitting does not, on its own, guarantee an invitation." },
              { title: "Receive an invitation", desc: "If Nova Scotia invites you, you move to the full application stage. Eligibility alone does not entitle you to an invitation." },
              { title: "Apply with your documents", desc: "Submit your complete application with proof of your credential, at least one year of business operation, ownership and active management." },
              { title: "Get nominated", desc: "On approval, Nova Scotia nominates you through the stream, a provincial endorsement, not yet permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate, base (paper) PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="warning" title="Eligibility does not guarantee an invitation or PR">
            Like every NSNP pathway, this stream runs through a ranked EOI and Nova Scotia&apos;s allocation is tight.
            Meeting the requirements places you in contention, but neither an invitation nor a nomination is guaranteed, and a nomination still requires a separate, successful IRCC application.
          </Callout>

          <h2>How is it different from the Entrepreneur stream?</h2>
          <p>
            The clearest way to understand this pathway is to contrast it with its sibling. The{" "}
            <strong>International Graduate Entrepreneur</strong> stream is for graduates of a Nova Scotia institution who
            are <em>already running</em> their own NS business. The broader{" "}
            <a href="/pnp/nova-scotia/entrepreneur">Entrepreneur stream</a> is for experienced business owners or senior
            managers, typically from outside the province, who <em>establish, buy or invest in</em> a Nova Scotia
            business, and it sets higher net-worth and investment expectations. Choosing the correct stream matters,
            because the credential, business-history and financial rules differ.
          </p>
          <DataTable
            headers={["Feature", "International Graduate Entrepreneur", "Entrepreneur stream"]}
            rows={[
              ["Typical applicant", "Graduate of a Nova Scotia university or college", "Experienced owner or senior manager, often from abroad"],
              ["NS credential needed", "Yes, an eligible NS post-secondary credential", "No credential requirement"],
              ["Business history", "Already operating own NS business ≥ 1 year", "Establishing, buying or investing in an NS business"],
              ["Financial bar", "Lighter, built around an operating business", "Higher net-worth and investment expectations"],
              ["Stream type", "Base business stream", "Base business stream"],
              ["Effect of nomination", "Separate IRCC PR application (no CRS points)", "Separate IRCC PR application (no CRS points)"],
            ]}
            caption="Nova Scotia International Graduate Entrepreneur vs the Entrepreneur stream (novascotia.ca, May 2026)."
          />
          <p>
            If you have not yet started your studies in Canada, the graduate pathway begins with a{" "}
            <a href="/study-permit">study permit</a> at a recognized Nova Scotia institution. For the full picture of how
            this stream sits alongside the province&apos;s skilled-worker and Express Entry routes, see our{" "}
            <a href="/pnp/nova-scotia">Nova Scotia Nominee Program</a> overview.
          </p>

          <h2>What are the costs and timelines?</h2>
          <p>
            Nova Scotia charges <strong>no provincial application fee</strong> for an NSNP nomination, so your costs at the
            provincial stage are mainly your documents, language test and time. The federal IRCC permanent-residence fees
            come later and are separate. As a base nomination, the IRCC stage is a paper application that is generally
            processed more slowly than an Express Entry application. Because amounts and timelines change, confirm the
            current figures on novascotia.ca (and canada.ca for the federal stage) before you budget.
          </p>
          <Callout type="info" title="Provincial and federal stages are separate">
            A nomination is a provincial step. The permanent-residence decision is federal: after Nova Scotia nominates
            you, IRCC assesses your separate PR application on medical, security and admissibility grounds. Plan for both
            stages and verify current processing information on novascotia.ca and canada.ca.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your graduate entrepreneur application</h2>
          <p>
            The NSNP business streams reward a clear, credible record and a clean application, and that is exactly what a{" "}
            <strong>Nova Scotia graduate running their own business</strong> needs.</p>
          <p>Our team is led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497); we confirm whether the
            International Graduate Entrepreneur stream is the right fit, help you evidence your eligible credential and
            your year of business operation, and prepare an expression of interest and nomination package that stand up to
            scrutiny. We work entirely online and are not affiliated with any government. With these streams, good
            positioning is where sound advice earns its keep.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. We help at every stage, whether you are mapping out
            international student PR in Nova Scotia from your first term or finalising your{" "}
            <strong>Nova Scotia International Graduate Entrepreneur</strong> nomination. The figures and criteria here are
            current to 2026 and change periodically, so we always confirm the live novascotia.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Ready to turn your Nova Scotia business into PR?"
        sub="Get started with a licensed RCIC for an honest read on whether the International Graduate Entrepreneur stream fits your credential and your business."
      />
    </>
  );
}
