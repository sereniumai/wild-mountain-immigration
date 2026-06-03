import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario/masters-graduate";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario Masters Graduate Stream (OINP) 2026",
  titleAbsolute: "OINP Masters Graduate Stream 2026 (Ontario)",
  description:
    "Ontario Masters Graduate Stream: PR with no job offer after a master's at an eligible Ontario university. OINP eligibility, EOI and how to apply.",
  path: PATH,
  keywords: [
    "Ontario Masters Graduate Stream",
    "OINP Masters Graduate",
    "Ontario master's PR no job offer",
    "study to PR Ontario",
    "OINP eligibility",
  ],
});

const faqs = [
  {
    q: "What is the Ontario Masters Graduate Stream?",
    a: "The Ontario Masters Graduate Stream is an OINP Human Capital stream that lets recent graduates of an eligible Ontario master's degree apply for a provincial nomination without a job offer. It focuses on your Ontario credential, language ability, residence in the province and settlement funds rather than employment. A nomination is not permanent residence, it is a base nomination you then use to file a separate paper PR application with IRCC. Because Ontario is redesigning the OINP in 2026, confirm the current rules on ontario.ca before you apply.",
  },
  {
    q: "Do I need a job offer for the OINP Masters Graduate Stream?",
    a: "No. The Masters Graduate Stream is one of the few OINP routes that does not require a job offer or employer. Selection rests on a recent eligible Ontario master's degree, language at CLB 7, legal status, residence and intent to live in Ontario, and proof of settlement funds. This makes it a popular study-to-PR pathway in Ontario for international students who graduate and want to stay. Always verify the live criteria on ontario.ca, as the 2026 redesign may change the requirements.",
  },
  {
    q: "Which Ontario universities are eligible for the Masters Graduate Stream?",
    a: "Your master's degree must come from an eligible publicly funded Ontario university listed by the OINP. The list historically covers Ontario's major public universities, and the degree must be a completed eligible master's program of at least one academic year of full-time study. Degrees from private institutions or from universities outside Ontario do not qualify. Because the eligible-institution list can change, check the current list on the official OINP page at ontario.ca before relying on a particular school.",
  },
  {
    q: "How recent does my graduation have to be?",
    a: "The Masters Graduate Stream is for recent graduates. Historically you must apply within two years of the date you completed the requirements of your eligible Ontario master's degree, so the graduation recency window is a hard eligibility limit. You also generally need to have lived in Ontario for at least one year in the three years before you apply. With the 2026 OINP redesign underway, these timeframes may be revised, confirm the current rules on ontario.ca.",
  },
  {
    q: "What language level do I need for the Masters Graduate Stream?",
    a: "You need to show at least Canadian Language Benchmark (CLB) 7 in English or French, measured across all four abilities, reading, writing, listening and speaking, on an approved test such as IELTS, CELPIP, TEF or TCF. The CLB level is taken from your lowest ability, so a single weak skill can drop you below the threshold. Test results are typically valid for two years. Verify the current accepted tests and minimum on ontario.ca.",
  },
  {
    q: "Is the Masters Graduate Stream enhanced or base?",
    a: "It is a base stream. A base nomination is not connected to federal Express Entry and adds no CRS points, once Ontario nominates you, you submit a separate paper permanent-residence application directly to IRCC, which is generally processed more slowly than an enhanced Express Entry application. If you also have an Express Entry profile, we can advise whether an enhanced OINP route or a federal draw might be a faster path for you.",
  },
  {
    q: "Does an OINP nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence, and meeting the eligibility criteria does not guarantee an Invitation to Apply through the Expression of Interest pool. After nomination you still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function OntarioMastersGraduatePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario Masters Graduate Stream (OINP), 2026 RCIC Guide",
            description:
              "Ontario Masters Graduate Stream: PR with no job offer after a master's at an eligible Ontario university. OINP eligibility, EOI and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "OINP Masters Graduate Stream application support",
            description:
              "Ontario Masters Graduate Stream: PR with no job offer after a master's at an eligible Ontario university. OINP eligibility, EOI and how to apply.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Ontario (OINP), Masters Graduate"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: "/pnp/ontario" },
          { name: "Masters Graduate", path: PATH },
        ]}
        title={<>Ontario Masters Graduate Stream <span className="text-brand">(OINP)</span></>}
        lede={
          <p>
            The <strong>Ontario Masters Graduate Stream</strong> is a path to PR <strong>without a job offer</strong>. It
            lets graduates of an eligible Ontario master&apos;s degree apply for permanent residence on the strength of their
            credential. This RCIC-reviewed guide covers OINP eligibility, the Expression of Interest and exactly how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Graduated in Ontario?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With the OINP redesign underway in 2026, timing matters for graduate streams. Get an honest read from a
                licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Ontario (OINP) overview", href: "/pnp/ontario", note: "Every Ontario stream explained" },
                { label: "OINP PhD Graduate Stream", href: "/pnp/ontario/phd-graduate", note: "The doctoral graduate route" },
                { label: "Study permits", href: "/study-permit", note: "Your study-to-PR starting point" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Ontario Masters Graduate Stream is a Human Capital stream of the Ontario Immigrant Nominee Program (OINP). It lets recent graduates of an eligible Ontario master's degree apply for permanent residence without a job offer. Selection focuses on your Ontario credential, language ability, residence in the province and settlement funds, and runs through an Expression of Interest. It is a base nomination: a provincial recommendation toward permanent residence that you then use to file a separate application with IRCC."
            items={[
              <>The <strong>Ontario Masters Graduate Stream</strong> nominates recent master&apos;s graduates of eligible Ontario universities for permanent residence.</>,
              <>It needs <strong>no job offer</strong>, selection rests on your Ontario credential, language, residence and funds.</>,
              <>Core eligibility: an eligible Ontario master&apos;s, <strong>graduation within two years</strong>, <strong>CLB 7</strong> language, legal status and settlement funds.</>,
              <>It runs through an <strong>Expression of Interest</strong>, eligibility places you in the pool but does not guarantee an invitation.</>,
              <>It is a <strong>base stream</strong>: a nomination leads to a separate IRCC paper PR application, not 600 CRS points.</>,
              <>Ontario is <strong>redesigning the OINP in 2026</strong>, so confirm current rules on ontario.ca before you apply.</>,
            ]}
          />

          <Callout type="warning" title="The OINP is being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective late May 2026 several legacy streams, including the graduate streams, lost their previous regulatory basis while replacement rules were still being
            finalised (source: ontario.ca, OINP updates, May 2026). Treat the details below as{" "}
            <strong>current/transitioning</strong> rather than settled. Applications already submitted, and complete files
            that received an Invitation to Apply before the change, are generally assessed under the prior rules, but new
            criteria may differ. Always confirm the live position on the official OINP page at <strong>ontario.ca</strong>{" "}
            before you act.
          </Callout>

          <h2>What is the Ontario Masters Graduate Stream?</h2>
          <p>
            The <strong>Ontario Masters Graduate Stream</strong> is a Human Capital stream of the{" "}
            <a href="/pnp/ontario">Ontario Immigrant Nominee Program (OINP)</a> built for one group: recent graduates of an
            eligible Ontario master&apos;s degree. Its defining feature is that it lets a master&apos;s graduate apply for a
            provincial nomination <strong>without a job offer</strong>. Rather than weighing an employer, the program looks at
            your Ontario credential, official-language ability, time spent in the province and settlement funds. That makes
            it one of the clearest <strong>study-to-PR Ontario</strong> pathways for international students who finish a
            master&apos;s and want to stay.
          </p>
          <p>
            Ontario runs the country&apos;s largest provincial program, with a 2026 nomination allocation of roughly{" "}
            <strong>14,119</strong> across all streams, the biggest of any PNP (source: ontario.ca / IRCC, May 2026). That
            overall cap shapes the <strong>OINP masters intake</strong> each year, since the graduate streams draw from the
            same provincial allocation. The <strong>OINP Masters Graduate</strong> route is a <em>base</em> stream: a
            nomination does not add points to a federal Express Entry profile. Instead, once Ontario nominates you, you file a separate paper permanent-residence
            application with IRCC, which makes the final PR decision.
          </p>
          <Callout type="brand" title="No job offer, but you must be in Ontario">
            Unlike Ontario&apos;s Employer Job Offer category, the Masters Graduate Stream needs no employer or job offer.
            What it does require is a genuine connection to the province: an eligible Ontario master&apos;s degree, residence
            in Ontario and intent to live there. It is not a route you can build from outside the province on the strength of
            a foreign degree.
          </Callout>

          <h2>Who is eligible for the OINP Masters Graduate Stream?</h2>
          <p>
            <strong>OINP eligibility</strong> for this stream rests on a connected set of requirements you must meet when you
            register your Expression of Interest. Miss any one of them and the application can be refused, whether it is a
            degree from a non-eligible institution, a graduation date outside the window, or a language ability one band
            short. Your degree must sit on
            the eligible Ontario universities list maintained by the OINP, so confirm your school appears there first. The
            table below summarises the core requirements; the official, controlling list lives on ontario.ca and is changing
            under the 2026 redesign.
          </p>
          <DataTable
            headers={["Requirement", "What the Masters Graduate Stream asks for"]}
            rows={[
              ["Eligible degree", "A completed master's degree from an eligible publicly funded Ontario university, of at least one academic year of full-time study"],
              ["Graduation recency", "Apply within two years of completing the requirements of your eligible master's degree"],
              ["Language", "At least CLB 7 in English or French across all four abilities (reading, writing, listening, speaking) on an approved test, valid 2 years"],
              ["Residence in Ontario", "Lived in Ontario for at least one year (12 cumulative months) in the three years before applying"],
              ["Legal status", "Legal status in Canada at application (e.g. study/work permit, visitor record), though you may also apply from outside Canada if other criteria are met"],
              ["Settlement funds", "Proof of funds or income to support yourself and any dependants in Ontario"],
              ["Intent to live in Ontario", "Genuine intention to live and establish yourself in Ontario after PR"],
            ]}
            caption="Ontario Masters Graduate Stream core eligibility, accurate as of May 2026 (ontario.ca). Requirements are changing under the 2026 OINP redesign, verify the official criteria before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The CLB 7 level is taken from the lowest of your four abilities, so one weak skill, often writing or speaking, can drop you below the threshold even when your other scores are strong. Lifting your weakest band is frequently
            the single most valuable thing you can do before you register your Expression of Interest.
          </Callout>

          <h2>How does the Masters Graduate Stream compare with the PhD Graduate Stream?</h2>
          <p>
            Ontario runs two graduate streams, and the difference is the credential. The <strong>Masters Graduate
            Stream</strong> targets eligible Ontario master&apos;s graduates, while the{" "}
            <a href="/pnp/ontario/phd-graduate">PhD Graduate Stream</a> targets eligible Ontario doctoral graduates. Both are
            base, no-job-offer Human Capital streams, but they differ on language requirements and the residence rules, the
            PhD stream has historically had no minimum language requirement and a more generous graduation window. The grid
            below sets out the headline contrasts.
          </p>
          <DataTable
            headers={["Feature", "Masters Graduate Stream", "PhD Graduate Stream"]}
            rows={[
              ["Required credential", "Eligible Ontario master's degree", "Eligible Ontario PhD"],
              ["Job offer", "Not required", "Not required"],
              ["Language", "CLB 7 (all four abilities)", "No minimum language requirement (historically)"],
              ["Graduation window", "Apply within 2 years of completion", "Apply within 2 years of completion"],
              ["Stream type", "Base (separate IRCC paper PR application)", "Base (separate IRCC paper PR application)"],
            ]}
            caption="Ontario Masters Graduate vs PhD Graduate Stream (ontario.ca, May 2026). Both streams are being redesigned in 2026, confirm current rules."
          />

          <h2>How the OINP Expression of Interest works</h2>
          <p>
            Like most OINP streams, the Masters Graduate Stream uses an <strong>Expression of Interest (EOI)</strong> system.
            You create a profile and register your details; Ontario scores and ranks candidates against factors such as
            education, language ability and time spent in the province. Those <strong>master&apos;s graduate EOI points</strong>{" "}
            determine your ranking, and Ontario then issues <strong>Invitations to Apply (ITAs)</strong>{" "}
            to the highest-ranked candidates in periodic draws. Registering an EOI places you in the pool. It does{" "}
            <em>not</em> guarantee an invitation, and the pool is heavily oversubscribed.
          </p>
          <Callout type="info" title="Two rules that trip people up">
            <strong>Eligibility is not an invitation</strong>, the OINP is points-ranked, so meeting the minimum only puts
            you in the pool. And a <strong>nomination is not permanent residence</strong>, IRCC makes the final decision on a
            separate application after Ontario nominates you.
          </Callout>

          <h2>How to apply for the Ontario Masters Graduate Stream</h2>
          <p>
            <strong>How to apply for the Ontario Masters Graduate Stream</strong> follows a clear sequence, though the 2026
            redesign may adjust individual steps. The path runs from confirming your eligible Ontario master&apos;s degree
            through to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "Check your master's is from an eligible Ontario university, that you are within the graduation window, and that you meet the CLB 7, residence and settlement-funds bars." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, and collect your degree, transcripts, proof of Ontario residence, status documents and proof of funds." },
              { title: "Register your Expression of Interest", desc: "Create an OINP profile and submit your EOI. It sits in Ontario's pool, ranked against other candidates, eligibility alone does not guarantee an invitation." },
              { title: "Receive an ITA & apply", desc: "If invited, file a complete nomination application within the deadline. Missing documents is a common reason for refusal." },
              { title: "Apply to IRCC for PR", desc: "Use the base nomination to file a separate paper permanent-residence application with medicals and police checks. IRCC makes the final decision." },
            ]}
          />

          <h2>Fees, processing times and the 2026 outlook</h2>
          <p>
            There are two stages, each with its own timeline and fee. Ontario&apos;s OINP application fee for graduate and
            Express Entry-aligned streams has historically been about <strong>$1,500</strong>, paid at the nomination stage.
            Once nominated, a base, paper-based permanent-residence application to IRCC is generally processed more slowly
            than an enhanced Express Entry application (which IRCC targets at roughly six months). These provincial fees are
            separate from the federal IRCC permanent-residence fees you pay at the federal stage.
          </p>
          <DataTable
            headers={["Stage", "Typical fee / timeline", "Notes"]}
            rows={[
              ["OINP nomination fee", "~$1,500", "Provincial fee for graduate-stream applications (ontario.ca)"],
              ["OINP nomination processing", "Varies by stream & volume", "Confirm the live service standard on ontario.ca"],
              ["IRCC PR application (base)", "Generally slower than ~6 months", "Separate federal paper application + federal fees"],
            ]}
            caption="Ontario Masters Graduate Stream indicative fees and timelines, current to May 2026 (ontario.ca). With the 2026 redesign underway, figures may change, confirm before paying."
          />
          <Callout type="warning" title="Eligibility does not guarantee an invitation">
            The Masters Graduate Stream is ranked through the Expression of Interest pool. Meeting every requirement places
            you in the pool, but Ontario invites only the highest-ranked candidates each draw, and with the 2026 redesign in
            progress, both the criteria and the process may shift. Beware any source that implies a place is guaranteed.
          </Callout>

          <h2>How Wild Mountain Immigration helps with your OINP application</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Ontario&apos;s current graduate-stream rules, confirms
            whether your degree and timeline qualify, and builds an Expression of Interest that presents your case well.
            Working under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our
            team prepares a nomination application that stands up to scrutiny and represents you with both Ontario and IRCC.
            Many graduates reach this stream after a <a href="/study-permit">study permit</a> and a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a>, and we make sure those pieces line up.</p>
          <p>With the OINP
            being redesigned in 2026, we keep your strategy aligned to the rules actually in force when you apply, and give you
            a candid read on your realistic chances first.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment, and see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial and IRCC charges. Figures here are current to May 2026
            and change with the redesign, so we always confirm the live ontario.ca page before advising. For an international
            student weighing PR in Ontario, the <strong>Ontario Masters Graduate Stream</strong> remains one of the strongest
            no-job-offer routes, so compare it with the <a href="/pnp/ontario/phd-graduate">PhD Graduate</a> route or the full{" "}
            <a href="/pnp/ontario">Ontario OINP</a> overview before you commit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Graduated with a master's in Ontario?"
        sub="Get started with a licensed RCIC for an honest read on whether the OINP Masters Graduate Stream fits you, and how the 2026 redesign affects your plan."
      />
    </>
  );
}
