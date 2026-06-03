import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario/phd-graduate";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario PhD Graduate Stream (OINP) 2026",
  titleAbsolute: "Ontario PhD Graduate Stream 2026 (OINP)",
  description:
    "Ontario PhD Graduate Stream: get PR with a doctorate from an eligible Ontario university and no job offer. 2026 OINP eligibility, EOI and how to apply.",
  path: PATH,
  keywords: [
    "Ontario PhD Graduate Stream",
    "OINP PhD Graduate",
    "Ontario doctorate PR no job offer",
    "PhD to PR Ontario",
    "OINP PhD eligibility 2026",
  ],
});

const faqs = [
  {
    q: "What is the Ontario PhD Graduate Stream?",
    a: "The Ontario PhD Graduate Stream is a base stream of the Ontario Immigrant Nominee Program (OINP) that lets graduates of an eligible Ontario university apply for a provincial nomination toward permanent residence without a job offer. It is aimed at people who have completed a doctorate (PhD) at a recognised Ontario institution and intend to live and work in Ontario. A nomination is not permanent residence, it is a provincial recommendation you then use to apply to IRCC. Note that the OINP is being redesigned in 2026, so confirm current rules on ontario.ca.",
  },
  {
    q: "Do I need a job offer for the OINP PhD Graduate Stream?",
    a: "No. The PhD Graduate Stream is one of the few OINP pathways that does not require a job offer, its appeal is exactly that. Selection has historically rested on your Ontario doctorate, recent graduation, settlement funds and your intention to live in Ontario rather than on employment. That makes it attractive to recent doctoral graduates who have not yet secured a permanent role. Because the stream is part of the 2026 OINP redesign, verify the no-offer position on ontario.ca before relying on it.",
  },
  {
    q: "Which Ontario universities are eligible for the PhD Graduate Stream?",
    a: "The OINP maintains a list of eligible Ontario universities whose PhD programs qualify. Historically this has covered Ontario's publicly funded, degree-granting universities, institutions such as the University of Toronto, McMaster, Waterloo, Queen's, Western, Ottawa and York, among others. The eligible-institution list is published on ontario.ca and can change, so check that your specific university and doctoral program are listed before you submit. We confirm institution eligibility as part of a profile review.",
  },
  {
    q: "How recent does my PhD have to be?",
    a: "The PhD Graduate Stream has historically required you to apply within a set window of completing your doctorate, typically you must have graduated, or met all degree requirements, within roughly the last two years when you submit. The clock generally runs from when your degree requirements were completed rather than the convocation ceremony. Because timelines are part of the rules under review in 2026, confirm the exact recency requirement on ontario.ca before applying.",
  },
  {
    q: "How is the PhD Graduate Stream different from the Masters Graduate Stream?",
    a: "Both are base OINP streams for Ontario graduates that do not require a job offer, but they target different credentials. The Masters Graduate Stream is for those who completed an eligible Ontario master's degree, while the PhD Graduate Stream is for doctoral graduates. The PhD stream does not require a language test or proof of settlement funds in the same way the Masters stream historically has, it places more weight on the doctorate itself. Both are paper applications to IRCC after nomination, not Express Entry. We map your credential to the right stream.",
  },
  {
    q: "Does a PhD Graduate nomination add 600 CRS points?",
    a: "No. The PhD Graduate Stream is a base stream, so a nomination does not add 600 Comprehensive Ranking System points to an Express Entry profile. Instead, once Ontario nominates you, you submit a separate paper permanent-residence application directly to IRCC, which is generally processed more slowly than an Express Entry application. If you also hold a strong Express Entry profile, an enhanced OINP stream might suit you better, we can compare both routes against your CRS score.",
  },
  {
    q: "Is the OINP PhD Graduate Stream changing in 2026?",
    a: "Yes. Ontario announced an OINP redesign and, effective late May 2026, several legacy streams lost their previous regulatory basis while replacement rules were still being finalised. Applications already submitted, and complete files that received an Invitation to Apply before the change, are generally assessed under the prior rules, but new criteria for the redesigned streams may differ. Treat any 2026 PhD Graduate Stream details as transitioning and verify the current position on the official OINP page at ontario.ca before you act.",
  },
];

export default function OntarioPhdGraduatePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario PhD Graduate Stream (OINP), 2026 RCIC Guide",
            description:
              "Ontario PhD Graduate Stream: get PR with a doctorate from an eligible Ontario university and no job offer. 2026 OINP eligibility, EOI and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "OINP PhD Graduate Stream application support",
            description:
              "Ontario PhD Graduate Stream: get PR with a doctorate from an eligible Ontario university and no job offer. 2026 OINP eligibility, EOI and how to apply.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Ontario (OINP), PhD Graduate Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: "/pnp/ontario" },
          { name: "PhD Graduate", path: PATH },
        ]}
        title={<>Ontario PhD Graduate Stream: <span className="text-brand">PR with a doctorate, no job offer</span></>}
        lede={
          <p>
            The <strong>Ontario PhD Graduate Stream</strong> leads to PR with no job offer. This RCIC-reviewed guide
            covers OINP PhD eligibility for graduates of an eligible Ontario university, the Expression of Interest and
            how to apply, plus the 2026 OINP redesign now underway.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the PhD stream right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With the OINP redesign underway in 2026, confirming your doctorate qualifies matters. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Ontario (OINP) overview", href: "/pnp/ontario", note: "Every Ontario stream explained" },
                { label: "Masters Graduate Stream", href: "/pnp/ontario/masters-graduate", note: "The OINP route for master's grads" },
                { label: "Study Permit", href: "/study-permit", note: "Study in Ontario as a PR pathway" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Ontario PhD Graduate Stream is a base stream of the Ontario Immigrant Nominee Program (OINP) for people who have completed a doctorate at a publicly funded Ontario university and want doctoral graduate PR without a job offer or an Express Entry profile. It assesses your Ontario credential and intention to settle, and uses an Expression of Interest. A nomination is a provincial recommendation you then use to apply separately to IRCC."
            items={[
              <>The <strong>Ontario PhD Graduate Stream</strong> lets graduates of an eligible Ontario university apply for PR <strong>without a job offer</strong>.</>,
              <>It is a <strong>base stream</strong>: a nomination leads to a separate IRCC paper application, not 600 CRS points.</>,
              <>Core eligibility: a <strong>PhD from an eligible Ontario institution</strong>, recent graduation, settlement funds and intention to live in Ontario.</>,
              <>It differs from the <a href="/pnp/ontario/masters-graduate">Masters Graduate Stream</a>, which targets master&apos;s degrees and historically tests language and funds differently.</>,
              <>Ontario announced a <strong>2026 OINP redesign</strong>: streams and criteria are changing, so confirm current rules on ontario.ca.</>,
            ]}
          />

          <Callout type="warning" title="The OINP is being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective late May 2026 several legacy streams, including the PhD Graduate Stream, lost their previous regulatory basis while replacement rules were still
            being finalised. Treat the details below as <strong>current/transitioning</strong> rather than settled.
            Applications already submitted, and complete files that received an Invitation to Apply before the change, are generally assessed under the prior rules, but new criteria may differ. Always confirm the live position
            on the official OINP page at <strong>ontario.ca</strong> before you act. Figures and rules change frequently.
          </Callout>

          <h2>What is the Ontario PhD Graduate Stream?</h2>
          <p>
            The <strong>Ontario PhD Graduate Stream</strong> is a base stream of the{" "}
            <a href="/pnp/ontario">Ontario Immigrant Nominee Program (OINP)</a> built for one group: people who have
            completed a doctorate at an eligible Ontario university and want to stay in the province. Its defining feature
            is that it lets <strong>PhD graduates apply for permanent residence without a job offer</strong>, you are
            nominated on the strength of your Ontario doctorate, recent graduation and your intention to settle in Ontario,
            not on an employment contract. Ontario runs the country&apos;s largest provincial program, with a 2026
            nomination allocation of roughly <strong>14,119</strong> across all streams (source: ontario.ca, May 2026).
          </p>
          <p>
            As a <strong>base</strong> stream, an <strong>OINP PhD Graduate</strong> nomination is not linked to federal
            Express Entry. Once Ontario nominates you, you file a separate paper permanent-residence application directly
            with IRCC, the nomination is a provincial recommendation, not PR itself, and IRCC still makes the final
            decision. For doctoral graduates who have not yet secured a permanent role, this <strong>PhD to PR Ontario</strong>{" "}
            route can be the most direct path to staying in the province.
          </p>
          <Callout type="brand" title="The no-job-offer advantage">
            Most OINP routes need either a job offer or an active Express Entry profile. The PhD Graduate Stream needs
            neither, making it one of the cleanest <strong>Ontario doctorate PR no job offer</strong> pathways. It is a
            common <strong>post-doc to PR</strong> route for recent graduates still finishing post-docs, job hunting or
            weighing academic and industry roles.
          </Callout>

          <h2>What are the OINP PhD Graduate Stream eligibility requirements?</h2>
          <p>
            Eligibility for the <strong>OINP PhD Graduate</strong> stream rests on a connected set of requirements you must
            meet when you register, starting with a doctorate from a university on the eligible Ontario universities PhD
            list. The table below summarises the core criteria that have historically applied; the official, controlling
            list lives on ontario.ca and is among the rules being revised in the 2026 redesign.
          </p>
          <DataTable
            headers={["Requirement", "What the PhD Graduate Stream asks for"]}
            rows={[
              ["Doctorate", "A completed PhD from an eligible Ontario university on the OINP list (a master's or professional doctorate alone is not enough)"],
              ["Eligible institution", "Your degree must be from a publicly funded, degree-granting Ontario university recognised by the OINP"],
              ["Recent graduation", "You must apply within the set window of completing your degree requirements, historically roughly the last two years"],
              ["Settlement funds", "Proof of funds (or income/assets) to support yourself and any family in Ontario"],
              ["Intention to live in Ontario", "A genuine intention to live and work in Ontario after you receive PR"],
              ["Legal status", "If applying from inside Canada, you must hold legal status (e.g. a study or work permit, or be eligible to restore it)"],
            ]}
            caption="Ontario PhD Graduate Stream core eligibility, historically applicable and accurate as of May 2026 (ontario.ca). Criteria are part of the 2026 OINP redesign, verify the official list before applying."
          />
          <Callout type="info" title="Two rules that trip people up">
            <strong>Eligibility is not an invitation</strong>, the OINP is registration-and-selection based, so meeting
            the minimum only puts you forward. And a <strong>nomination is not permanent residence</strong>, IRCC makes
            the final decision on a separate application.
          </Callout>

          <h2>How does the PhD Graduate Stream differ from the Masters Graduate Stream?</h2>
          <p>
            The simplest way to place the PhD stream is to contrast it with its sibling. Both the PhD Graduate Stream and
            the <a href="/pnp/ontario/masters-graduate">Masters Graduate Stream</a> are base OINP streams for Ontario
            graduates that do <em>not</em> require a job offer, but they target different credentials and weigh the
            requirements differently. The PhD stream is for doctoral graduates and leans heavily on the doctorate itself;
            the Masters stream is for those with an eligible Ontario master&apos;s degree and has historically placed more
            explicit weight on a language test and proof of settlement funds.
          </p>
          <DataTable
            headers={["Feature", "PhD Graduate Stream", "Masters Graduate Stream"]}
            rows={[
              ["Credential", "Eligible Ontario doctorate (PhD)", "Eligible Ontario master's degree"],
              ["Job offer", "Not required", "Not required"],
              ["Language test", "Historically not required", "Required (CLB 7 in English or French)"],
              ["Settlement funds", "Required", "Required"],
              ["Stream type", "Base (paper application to IRCC)", "Base (paper application to IRCC)"],
              ["Effect of nomination", "Leads to a separate IRCC application", "Leads to a separate IRCC application"],
            ]}
            caption="Ontario PhD Graduate Stream vs Masters Graduate Stream (ontario.ca, May 2026). Both are under review in the 2026 OINP redesign, confirm current criteria."
          />

          <h2>How does the OINP Expression of Interest work for PhD graduates?</h2>
          <p>
            The OINP uses an <strong>Expression of Interest (EOI)</strong> and registration model. For PhD stream EOI
            registration you create a profile, confirm you meet the criteria above, and register your interest; Ontario then
            opens the stream and selects candidates to apply when capacity allows. Historically the graduate streams have
            opened in a short OINP PhD intake window and closed once enough registrations were received, so timing matters.
            Submitting an EOI or registration places you in consideration, it does not guarantee an invitation to apply.
          </p>
          <Callout type="info" title="Graduate streams open and close">
            Ontario&apos;s graduate streams have historically opened in intake windows and filled quickly. Having your
            documents, degree confirmation, institution evidence and proof of funds, ready in advance is often the
            difference between getting in and missing the window. With the 2026 redesign, the intake mechanics may change,
            so monitor ontario.ca.
          </Callout>

          <h2>How to apply for the Ontario PhD Graduate Stream</h2>
          <p>
            <strong>How to apply for the Ontario PhD Graduate Stream</strong> follows a clear sequence, though the 2026
            redesign may adjust individual steps. Confirm your doctorate and institution qualify, prepare your documents,
            register or submit your EOI in an open intake, and, if selected, file a complete application. Once nominated,
            you apply to IRCC for permanent residence.
          </p>
          <Steps
            steps={[
              { title: "Confirm your doctorate qualifies", desc: "Check that your PhD is from an eligible Ontario university on the OINP list and that you are within the recent-graduation window." },
              { title: "Gather your documents", desc: "Assemble your degree confirmation, transcripts, proof of settlement funds and evidence of your intention to live in Ontario before any intake opens." },
              { title: "Register / submit your EOI", desc: "Create your profile and register interest when the PhD Graduate Stream opens. Intakes can fill quickly, so be ready in advance." },
              { title: "Apply if selected", desc: "If invited, file a complete nomination application within the deadline. Missing documents is a common reason for refusal." },
              { title: "Apply to IRCC for PR", desc: "Use the nomination to file a separate paper permanent-residence application with IRCC, which makes the final decision." },
            ]}
          />

          <h2>Processing times, fees and the 2026 outlook</h2>
          <p>
            There are two stages, each with its own timeline and fee. Ontario&apos;s published service standard for
            processing a complete nomination application has historically sat in the region of <strong>30 to 90 days</strong>,
            varying by stream and volume. Because the PhD Graduate Stream is a base stream, the federal stage is a separate
            paper application: IRCC targets roughly <strong>six months</strong> for enhanced (Express Entry) PNP
            applications, while base applications such as this one generally take longer.
          </p>
          <p>
            On fees, OINP application fees for the Express Entry-aligned and graduate streams have historically been around{" "}
            <strong>$1,500</strong>, separate from the IRCC permanent-residence fees you pay at the federal stage. With the{" "}
            <strong>OINP 2026</strong> redesign in progress, both processing times and fees may shift, confirm the current
            figures on ontario.ca before you apply.
          </p>
          <DataTable
            headers={["Stage", "Typical timeline", "Indicative fee"]}
            rows={[
              ["OINP nomination application", "~30–90 days (service standard, varies)", "~$1,500 (provincial)"],
              ["IRCC permanent residence (base/paper)", "Longer than the ~6 months for enhanced PNP", "Separate federal IRCC fees"],
            ]}
            caption="Ontario PhD Graduate Stream indicative timelines and fees, current to May 2026 (ontario.ca / canada.ca). Figures change, verify before paying."
          />

          <h2>How Wild Mountain helps with the PhD Graduate Stream</h2>
          <p>
            Wild Mountain Immigration confirms your doctorate and Ontario institution qualify, checks you are within the
            recent-graduation window, and builds a registration and nomination application that stands up to scrutiny. Working
            under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team
            represents you with both Ontario and IRCC, and gives you a candid read on whether the PhD Graduate Stream or an
            alternative, such as the <a href="/pnp/ontario/masters-graduate">Masters Graduate Stream</a> or an{" "}
            <a href="/express-entry">Express Entry</a> route, is your strongest option. With the OINP being redesigned in 2026,
            we keep your strategy aligned to the rules actually in force when you apply.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment, and see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial and IRCC charges. Many doctoral graduates reach this
            stream after a <a href="/study-permit">study permit</a> and a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a>. Figures here are current to 2026 and the
            <strong> Ontario PhD Graduate Stream</strong> is mid-redesign, so we always confirm the live ontario.ca page
            before advising on your doctoral graduate PR plan. See the{" "}
            <a href="/pnp/ontario">Ontario OINP</a> overview for the wider picture.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Turn your Ontario PhD into permanent residence"
        sub="Get started with a licensed RCIC for an honest read on the PhD Graduate Stream, and how the 2026 OINP redesign affects your plan."
      />
    </>
  );
}
