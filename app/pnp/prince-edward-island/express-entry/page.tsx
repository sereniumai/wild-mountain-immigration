import type { Metadata } from "next";
import { Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/prince-edward-island/express-entry";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "PEI PNP Express Entry, 2026 Guide",
  titleAbsolute: "PEI PNP Express Entry: 2026 Guide",
  description:
    "PEI PNP Express Entry 2026: how Prince Edward Island Express Entry works, who qualifies and how a +600 CRS nomination works. Plan your route with an RCIC.",
  path: PATH,
  keywords: [
    "PEI PNP Express Entry",
    "Prince Edward Island Express Entry",
    "PEI EOI",
    "PEI nomination 600 CRS",
    "PEI Express Entry eligibility",
  ],
});

const faqs = [
  {
    q: "What is PEI PNP Express Entry?",
    a: "PEI PNP Express Entry is the enhanced, federally aligned stream of the Prince Edward Island Provincial Nominee Program. You must already hold an active federal Express Entry profile. You then submit a free Expression of Interest (EOI) to the PEI Office of Immigration. If Prince Edward Island invites and nominates you, that nomination adds 600 points to your Comprehensive Ranking System (CRS) score. That boost puts most candidates well above the typical cut-off, though IRCC still issues any Invitation to Apply at the next federal Express Entry draw.",
  },
  {
    q: "How many CRS points does a PEI nomination add?",
    a: "A provincial nomination through PEI PNP Express Entry adds 600 CRS points to your Express Entry score. The highest-scoring candidates without a nomination typically sit in the 500s, so a +600 boost lifts almost any eligible profile above the federal cut-off. IRCC still issues any Invitation to Apply at the next general Express Entry draw. The nomination itself is not permanent residence, and IRCC makes the final PR decision.",
  },
  {
    q: "Do I need a job offer for PEI Express Entry?",
    a: "Not strictly, but it helps a great deal. PEI Express Entry requires an active federal Express Entry profile rather than a mandatory job offer, yet Prince Edward Island runs an employer-driven program and favours candidates with a genuine PEI connection, a job offer, study or work history on the island, or close family there. In practice, candidates with a real, demonstrable tie to PEI are far more likely to be invited than those with no connection.",
  },
  {
    q: "Does PEI publish Express Entry draw cut-off scores?",
    a: "No. Unlike the federal Express Entry system, the PEI PNP does not publish a per-draw minimum score for its EOI draws. Selection is guided by Prince Edward Island's priority sectors, healthcare, trades and construction, manufacturing and childcare, rather than a transparent points threshold. That makes how well your occupation and connection align with PEI's current priorities more important than chasing a number. Always confirm current priorities on princeedwardisland.ca.",
  },
  {
    q: "How long is a PEI EOI profile valid?",
    a: "A PEI Expression of Interest profile generally stays valid for about six months in the province's pool. PEI holds draws roughly once a month, so a profile typically sees several draws before it expires. If you are not invited within that window, you can submit a fresh EOI. Note this six-month PEI validity is separate from your federal Express Entry profile, which has its own validity and must remain active throughout.",
  },
  {
    q: "How long does PEI Express Entry take to get permanent residence?",
    a: "Timelines run in stages: time in the EOI pool waiting for an invitation, then the provincial nomination application, then the federal stage. Because PEI Express Entry is enhanced, once you accept the nomination and apply to IRCC through Express Entry, federal processing is typically targeted at around six months. Most applicants should plan for the better part of a year from EOI to permanent residence. Processing times change, verify current targets on canada.ca.",
  },
  {
    q: "Does a PEI Express Entry nomination guarantee permanent residence?",
    a: "No. A PEI nomination is a provincial endorsement that adds 600 CRS points, it is not permanent residence itself. After PEI nominates you, IRCC makes the final decision on a separate Express Entry permanent-residence application, assessing medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function PeiExpressEntryPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "PEI PNP Express Entry, 2026 RCIC Guide",
            description:
              "PEI PNP Express Entry 2026: how Prince Edward Island Express Entry works, who qualifies, how PEI EOI draws run and how a nomination adds 600 CRS. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "PEI PNP Express Entry application support",
            description:
              "PEI PNP Express Entry 2026: how Prince Edward Island Express Entry works, who qualifies, how PEI EOI draws run and how a nomination adds 600 CRS. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Prince Edward Island, PEI PNP"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Prince Edward Island", path: "/pnp/prince-edward-island" },
          { name: "Express Entry", path: PATH },
        ]}
        title={<>PEI PNP <span className="text-brand">Express Entry</span></>}
        lede={
          <p>
            <strong>PEI PNP Express Entry</strong> is the enhanced, federally aligned route of the Prince Edward Island
            Provincial Nominee Program, submit a free Expression of Interest, and a PEI nomination adds 600 CRS points
            to your Express Entry profile.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is PEI Express Entry your route?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A +600 nomination changes everything, but PEI selects by priority sector and connection. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Prince Edward Island PNP", href: "/pnp/prince-edward-island", note: "All PEI streams explained" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province's PNP" },
                { label: "PEI Labour Impact streams", href: "/pnp/prince-edward-island/labour-impact", note: "The base (paper) PEI routes" },
                { label: "PEI Business Impact", href: "/pnp/prince-edward-island/business-impact", note: "The entrepreneur route" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other PEI employer route" },
                { label: "Federal Express Entry", href: "/express-entry", note: "How the CRS and draws work" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="PEI PNP Express Entry is the enhanced, federally aligned stream of the Prince Edward Island Provincial Nominee Program. It suits candidates who hold an active federal Express Entry profile and a genuine PEI connection, and a provincial nomination adds 600 CRS points that lift most profiles above the typical cut-off. IRCC still issues any Invitation to Apply and makes the final permanent residence decision."
            items={[
              <>The <strong>PEI PNP Express Entry</strong> stream is the <strong>enhanced</strong> route, it requires an active federal Express Entry profile.</>,
              <>A PEI nomination adds <strong>600 CRS points</strong>, lifting most candidates well above recent federal draw cut-offs, though IRCC issues any Invitation to Apply.</>,
              <>It runs on a free <strong>Expression of Interest (EOI)</strong> with roughly monthly draws, but PEI <strong>does not publish cut-off scores</strong>.</>,
              <>No mandatory job offer, but a genuine <strong>PEI connection</strong> (job, study, work or family) is strongly favoured.</>,
              <>A nomination is <strong>not permanent residence</strong>, IRCC makes the final PR decision on a separate Express Entry application.</>,
            ]}
          />

          <h2>What is PEI PNP Express Entry?</h2>
          <p>
            <strong>PEI PNP Express Entry</strong>, also called Prince Edward Island Express Entry, is the enhanced,
            federally aligned stream of the Prince Edward Island Provincial Nominee Program. &ldquo;Enhanced&rdquo; has a
            precise meaning: the stream is plugged into the federal Express Entry system, so a provincial nomination adds{" "}
            <strong>600 points</strong> to your Comprehensive Ranking System (CRS) score.</p>
          <p>To use it, you must already
            hold an active federal Express Entry profile. According to princeedwardisland.ca (accurate as of May 2026),
            the PEI PNP is organised into three categories, Labour Impact, Express Entry and Business Impact, and
            Express Entry is the only enhanced one.
          </p>
          <p>
            That distinction matters because PEI&apos;s nomination space is small. Its 2025 base allocation was roughly{" "}
            <strong>1,025 nominations</strong> (with a possible top-up), and 2026 numbers remain tight after IRCC reduced
            provincial allocations nationwide (source: princeedwardisland.ca / IRCC, 2026). With limited spaces, Prince
            Edward Island directs invitations to its highest-priority sectors, so simply meeting the minimum eligibility
            is no longer the same as receiving an invitation. Figures and policies change frequently, so always verify
            the current rules before acting.
          </p>
          <Callout type="brand" title="Enhanced means +600 CRS, well above recent cut-offs">
            Because the strongest candidates without a nomination typically sit in the CRS 500s, a{" "}
            <strong>+600 PEI nomination</strong> lifts virtually any eligible profile above the federal cut-off. Not sure
            where your score stands today? Try our <a href="/tools/crs-calculator">free CRS calculator</a> before you
            invest in an EOI.
          </Callout>

          <h2>Who is eligible for PEI Express Entry?</h2>
          <p>
            Eligibility for <strong>Prince Edward Island Express Entry</strong> layers PEI&apos;s requirements on top of
            the federal Express Entry minimums. The headline rule is that you must already have an{" "}
            <strong>active federal Express Entry profile</strong> in the pool, meaning you qualify for one of the federal
            programs (Canadian Experience Class, Federal Skilled Worker or Federal Skilled Trades), meet the language and
            education bars, and have a valid profile number and job-seeker validation code. On top of that, PEI looks for
            a genuine connection to the island and an occupation aligned with its priority sectors.
          </p>
          <DataTable
            headers={["Requirement", "What PEI Express Entry asks for"]}
            rows={[
              ["Active Express Entry profile", "A valid federal Express Entry profile (CEC, FSW or FST) with a profile number and job-seeker validation code"],
              ["PEI connection", "No mandatory job offer, but a genuine tie, a PEI job offer, prior study/work on the island, or close family, is strongly favoured"],
              ["Language", "Meet the federal program minimum for your route (e.g. CLB 7 for FSW), tested on an approved exam and still valid"],
              ["Work experience", "Skilled work experience matching your occupation and federal program; PEI priority sectors are favoured"],
              ["Education", "Meet the federal minimum; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Intent to settle", "A genuine intention to live and work in Prince Edward Island"],
            ]}
            caption="PEI Express Entry core eligibility, accurate as of May 2026 (princeedwardisland.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="A PEI connection is the quiet decider">
            Prince Edward Island runs an employer-driven program. While PEI Express Entry has no strict job-offer rule,
            candidates with a <strong>demonstrable PEI connection</strong>, a job offer, study or work history on the
            island, or close family there, are far more likely to be invited than those with none. Positioning that
            connection well is where good advice earns its keep.
          </Callout>

          <h2>How do PEI&apos;s EOI draws work?</h2>
          <p>
            Prince Edward Island Express Entry runs through a free <strong>Expression of Interest (EOI)</strong>. You
            submit a profile to the PEI Office of Immigration setting out your occupation, work experience, language
            ability, federal Express Entry details and any ties to the island. Prince Edward Island then holds draws roughly once a month, around a dozen times a year, and issues invitations to the candidates who best fit its
            current priorities. A <strong>PEI EOI</strong> profile generally stays valid for about{" "}
            <strong>six months</strong> in the provincial pool.
          </p>
          <p>
            The crucial difference from the federal system is that <strong>PEI does not publish a per-draw cut-off
            score</strong>. There is no transparent points threshold to aim for. Instead, selection is driven by{" "}
            <strong>priority occupations</strong> and your connection to the island, which is why understanding where
            your profile sits against PEI&apos;s sector focus matters far more than chasing a number.
          </p>
          <Callout type="warning" title="No published cut-offs, and sales/service deprioritised">
            Because PEI publishes no draw cut-offs, eligibility alone tells you little about your real chances. The
            province prioritises healthcare, trades and construction, manufacturing and childcare, while{" "}
            <strong>sales and service occupations have been deprioritised</strong>. We give you a candid read on how your
            occupation aligns before you invest time in an EOI.
          </Callout>

          <h2>How does a PEI nomination add 600 CRS points?</h2>
          <p>
            This is the heart of the enhanced route. Once Prince Edward Island invites you through an EOI draw and you
            complete a successful nomination application, the province issues an <strong>enhanced nomination</strong> tied
            to your federal Express Entry profile. IRCC then automatically applies <strong>600 CRS points</strong> to
            your score. The table below shows why that is decisive against typical federal benchmarks.
          </p>
          <DataTable
            headers={["Scenario", "Approximate CRS", "Effect"]}
            rows={[
              ["Strong profile, no nomination", "470–510", "May fall below recent general-draw cut-offs"],
              ["Same profile + PEI nomination", "1,070–1,110", "+600, well above recent cut-offs"],
              ["Recent general-draw cut-off (illustrative)", "~520–550", "The bar a +600 nomination clears with ease"],
            ]}
            caption="Illustrative CRS impact of a PEI Express Entry +600 nomination (figures vary by draw; verify on canada.ca and princeedwardisland.ca)."
          />
          <p>
            In practice, a +600 nomination lifts almost any eligible candidate above the federal cut-off, securing an
            Invitation to Apply at the next general <a href="/express-entry">Express Entry</a> draw, and you can see how
            the maths works on our{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> guide. From there,
            IRCC targets roughly six months to process the permanent-residence application, markedly faster than
            PEI&apos;s base, paper-based <a href="/pnp/prince-edward-island/labour-impact">Labour Impact</a> routes.
            Candidates whose qualifying experience is Canadian often enter the pool through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>.
          </p>

          <h2>PEI Express Entry vs the base Labour Impact streams</h2>
          <p>
            Prince Edward Island offers both enhanced and base routes, and the distinction changes your entire timeline.
            PEI Express Entry is enhanced (+600 CRS, federally processed); the{" "}
            <a href="/pnp/prince-edward-island/labour-impact">Labour Impact streams</a> are base, or &ldquo;paper&rdquo;,
            nominations that lead to a separate, generally slower IRCC application and add no CRS points.
          </p>
          <DataTable
            headers={["Feature", "PEI Express Entry", "Labour Impact (base)"]}
            rows={[
              ["Stream type", "Enhanced", "Base"],
              ["Federal Express Entry profile", "Required", "Not required"],
              ["Effect of nomination", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["Job offer", "Not mandatory (connection favoured)", "Generally required (employer-driven)"],
              ["Federal processing", "~6 months via Express Entry", "Typically longer (paper application)"],
            ]}
            caption="PEI Express Entry vs PEI Labour Impact streams (princeedwardisland.ca, May 2026). Eligibility does not guarantee an invitation."
          />

          <h2>How to apply for PEI PNP Express Entry</h2>
          <p>
            <strong>How to apply for PEI Express Entry</strong> follows a clear sequence, federal profile first, then the
            provincial EOI, the nomination, and finally the federal permanent-residence application. The steps below show
            the full path.
          </p>
          <Steps
            steps={[
              { title: "Create a federal Express Entry profile", desc: "Qualify for a federal program (CEC, FSW or FST), take an approved language test, get an ECA if needed, and enter the federal pool with a valid profile and job-seeker validation code." },
              { title: "Submit your free PEI EOI", desc: "Lodge an Expression of Interest with the PEI Office of Immigration, setting out your occupation, experience, language, federal profile details and your connection to Prince Edward Island. It stays valid about six months." },
              { title: "Receive a PEI invitation", desc: "If your profile matches PEI's priorities in a monthly draw, the province invites you to apply. There is no published cut-off, selection follows priority sectors and connection." },
              { title: "Apply to the PEI PNP & get nominated", desc: "Submit a complete provincial application with supporting documents. On approval, PEI issues an enhanced nomination tied to your Express Entry profile." },
              { title: "Receive +600 CRS and your ITA", desc: "IRCC applies 600 CRS points to your profile, which lifts most candidates well above recent cut-offs, though IRCC issues any Invitation to Apply at the next general Express Entry draw." },
              { title: "Apply to IRCC for permanent residence", desc: "File your federal Express Entry PR application with medicals, police checks and proof of funds. IRCC makes the final decision, typically targeted at around six months." },
            ]}
          />
          <p>
            On fees, submitting a PEI EOI is <strong>free</strong>. The provincial application fee for the relevant PEI
            streams is modest (around $300 for most worker routes), and these provincial amounts are separate from the
            IRCC permanent-residence fees you pay at the federal stage. All figures change, confirm current fees on
            princeedwardisland.ca before applying.
          </p>

          <h2>How Wild Mountain Immigration helps with PEI Express Entry</h2>
          <p>
            Wild Mountain Immigration assesses your federal Express Entry profile and your connection to Prince Edward
            Island, confirms that <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a> is genuinely
            your strongest route rather than a <a href="/pnp/prince-edward-island/labour-impact">Labour Impact</a> stream
            or the <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, and builds an EOI that
            positions your occupation and ties against PEI&apos;s priority sectors.</p>
          <p>Because the province publishes no
            cut-off scores, that honest sector and connection read is where good advice earns its keep. Working under a
            licensed RCIC (CICC #R706497), our team prepares a nomination application that stands up to scrutiny and
            manages both the provincial and federal Express Entry stages on your behalf, online throughout.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            <strong> PEI Express Entry</strong> application an expert check before you submit. Cut-off scores, draw
            frequency, federal processing times and figures here are current to May 2026 and change frequently, so we
            always confirm the live princeedwardisland.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Could PEI Express Entry add 600 CRS to your profile?"
        sub="Get started with a licensed RCIC for an honest read on your federal Express Entry profile, your PEI connection and the strongest route to permanent residence."
      />
    </>
  );
}
