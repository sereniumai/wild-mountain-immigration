import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia/experience-express-entry";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia Experience: Express Entry 2026",
  titleAbsolute: "Nova Scotia Experience Express Entry 2026",
  description:
    "Nova Scotia Experience: Express Entry (NSNP): eligibility, the +600 CRS boost, language and work-experience rules, and how to apply. RCIC-led guide.",
  path: PATH,
  keywords: [
    "Nova Scotia Experience Express Entry",
    "NSNP Experience stream",
    "Nova Scotia work experience PR",
    "Nova Scotia Nominee Program Express Entry",
    "NSNP +600 CRS",
  ],
});

const faqs = [
  {
    q: "How much Nova Scotia work experience do I need for the Experience: Express Entry stream?",
    a: "You need at least one year (1,560 hours) of skilled work experience in Nova Scotia within the last three years, in an occupation at NOC TEER 0, 1, 2 or 3. The experience must be in the province specifically. General Canadian experience elsewhere does not satisfy this stream, and that is what distinguishes it from the federal Canadian Experience Class. Hours and rules change, so confirm the current criteria on novascotia.ca before you rely on them.",
  },
  {
    q: "Does the NSNP Experience stream add 600 CRS points?",
    a: "Yes. The Experience: Express Entry stream is an enhanced, Express Entry-aligned nomination, so a provincial nomination adds 600 points to your Comprehensive Ranking System (CRS) score. That boost puts most candidates well above the typical cut-off at the next federal Express Entry draw, though IRCC issues any Invitation to Apply. To use the stream you must already have an active Express Entry profile in the federal pool.",
  },
  {
    q: "What language level do I need for Nova Scotia Experience: Express Entry?",
    a: "Language scales with your occupation's skill level. NOC TEER 0 or 1 occupations require Canadian Language Benchmark (CLB) 7, while TEER 2 or 3 occupations require CLB 5, measured on your lowest of four abilities. You must take an approved English or French test such as IELTS, CELPIP or TEF/TCF, and results are generally valid for two years. Verify the current thresholds on novascotia.ca.",
  },
  {
    q: "Do I need a job offer for the Experience: Express Entry stream?",
    a: "No standing job offer is required for this stream. It is built for people who already have recent skilled work experience in Nova Scotia, so the qualifying experience itself is the anchor rather than a forward-looking offer. That said, you must still have an active Express Entry profile and meet the language, education and experience minimums. Other NSNP routes, such as Skilled Worker, are employer-driven and do require an offer.",
  },
  {
    q: "How is Experience: Express Entry different from the federal Canadian Experience Class?",
    a: "The federal Canadian Experience Class (CEC) counts skilled work experience anywhere in Canada and is a standalone federal route. Nova Scotia's Experience: Express Entry stream requires your skilled experience to be in Nova Scotia specifically and results in a provincial nomination that adds 600 CRS points on top of your federal profile. Many candidates qualify for both, so we assess which one gives you the strongest position.",
  },
  {
    q: "Does meeting the requirements guarantee a Nova Scotia nomination?",
    a: "No. Nova Scotia selects through a ranked expression-of-interest and invitation system, so meeting the published minimums places you in consideration but does not entitle you to an invitation or a nomination. The Province of Nova Scotia and IRCC make the final decisions. No licensed consultant can guarantee a nomination or permanent residence, we position your profile as strongly as the rules allow.",
  },
  {
    q: "Is there a provincial application fee for the NSNP Experience stream?",
    a: "No. Nova Scotia is one of the few provinces that charges no provincial application fee for an NSNP nomination, including the Experience: Express Entry stream. However, the federal IRCC permanent-residence fees still apply, along with the cost of language tests, an educational credential assessment and other supporting documents. Fees and policies change, so confirm the current position on novascotia.ca before you budget.",
  },
];

export default function NovaScotiaExperienceExpressEntryPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia Experience: Express Entry (NSNP), 2026 RCIC Guide",
            description:
              "Nova Scotia Experience: Express Entry (NSNP): eligibility, the +600 CRS boost, language and work-experience rules, and how to apply. RCIC-led guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Nova Scotia Experience: Express Entry stream application support",
            description:
              "Nova Scotia Experience: Express Entry (NSNP): eligibility, the +600 CRS boost, language and work-experience rules, and how to apply. RCIC-led guide.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Nova Scotia (NSNP), Experience: Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Nova Scotia (NSNP)", path: "/pnp/nova-scotia" },
          { name: "Experience: Express Entry", path: PATH },
        ]}
        title={<>Nova Scotia Experience: <span className="text-brand">Express Entry</span></>}
        lede={
          <p>
            <strong>Nova Scotia Experience: Express Entry</strong> is the NSNP&apos;s enhanced stream for people with
            recent skilled work experience in Nova Scotia, and a nomination adds 600 CRS points. This RCIC-reviewed guide
            covers eligibility, the work-experience and language rules, selection and exactly how to apply.
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
                See your Express Entry score before a Nova Scotia nomination adds 600 points, no email required.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia Nominee Program (NSNP)", href: "/pnp/nova-scotia", note: "Every NSNP stream explained" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province's PNP" },
                { label: "Labour Market Priorities", href: "/pnp/nova-scotia/labour-market-priorities", note: "The no-offer Express Entry route" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "The federal experience route" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Nova Scotia Experience: Express Entry is an enhanced, Express Entry-aligned stream of the Nova Scotia Nominee Program (NSNP) for people with recent skilled work experience in Nova Scotia. You must already have a valid Express Entry profile and meet the stream's work-experience and language requirements. A resulting nomination adds 600 CRS points toward permanent residence, putting most candidates well above the typical federal Express Entry draw cut-off."
            items={[
              <>The <strong>Experience: Express Entry</strong> stream is an enhanced NSNP route for people with recent <strong>Nova Scotia skilled work experience</strong>.</>,
              <>It requires <strong>at least one year (1,560 hours) of NS work in the last three years</strong> in a NOC TEER 0–3 occupation.</>,
              <>You must already hold an <strong>active Express Entry profile</strong>; a nomination adds <strong>600 CRS points</strong>.</>,
              <>Language scales with skill level, <strong>CLB 7 for TEER 0/1, CLB 5 for TEER 2/3</strong>, and you need a recognised education credential.</>,
              <>Selection is a <strong>ranked expression of interest</strong>, so meeting the minimums does not guarantee an invitation, and Nova Scotia charges <strong>no provincial fee</strong>.</>,
            ]}
          />

          <h2>What is Nova Scotia Experience: Express Entry?</h2>
          <p>
            <strong>Nova Scotia Experience: Express Entry</strong> is one of the Nova Scotia Nominee Program&apos;s
            enhanced, Express Entry-aligned streams. It is designed for candidates who already have recent skilled work
            experience <em>in Nova Scotia</em> and want to convert that local experience into permanent residence.</p>
          <p>Because
            it is enhanced, a Nova Scotia nomination through this stream adds <strong>600 points</strong> to your
            Comprehensive Ranking System (CRS) score in the federal Express Entry pool. That boost puts most
            candidates well above the typical draw cut-off, though IRCC still issues any Invitation to Apply. To use the stream, you must already have an active Express Entry
            profile.
          </p>
          <p>
            The stream sits within Nova Scotia&apos;s ranked expression-of-interest (EOI) system. In early 2026 Nova
            Scotia consolidated its lineup of streams and runs a formalized EOI model in which candidates are ranked and
            the strongest profiles invited (source: novascotia.ca, May 2026). Unusually among PNPs, Nova Scotia charges
            <strong> no provincial application fee</strong> for an NSNP nomination, though federal
            IRCC fees still apply. Figures and rules change frequently, so always verify the current position before
            acting, and remember that meeting the eligibility bar is not the same as receiving an invitation.
          </p>
          <Callout type="brand" title="The experience must be in Nova Scotia">
            What sets this stream apart from the federal <a href="/express-entry/canadian-experience-class">Canadian
            Experience Class</a> is geography. The qualifying skilled work experience must have been gained in Nova Scotia
            specifically, not simply anywhere in Canada. That local connection is the anchor of the stream.
          </Callout>

          <h2>Who is the Experience: Express Entry stream for?</h2>
          <p>
            This stream targets people who have spent time working skilled jobs in Nova Scotia, often on a work permit, and now want to settle permanently. Typical candidates include temporary foreign workers, post-graduation work
            permit holders who studied and then worked in the province, and intra-company transferees who built a Nova
            Scotia track record.</p>
          <p>Because the route is built around <strong>Nova Scotia work experience PR</strong>, it does
            not require a forward-looking job offer the way the employer-driven{" "}
            <a href="/pnp/nova-scotia/skilled-worker">Skilled Worker</a> stream does; your existing local experience does
            the work instead. If you have no Nova Scotia experience but match a provincial priority occupation, the{" "}
            <a href="/pnp/nova-scotia/labour-market-priorities">Labour Market Priorities</a> approach may suit you better.
          </p>

          <h2>What are the Experience: Express Entry eligibility requirements?</h2>
          <p>
            Eligibility for the <strong>NSNP Experience stream</strong> rests on a connected set of requirements you must
            meet when you submit your expression of interest. Miss one, the wrong NOC TEER level, a language ability one
            band short, an Express Entry profile that has expired, and the application can be refused. The table below
            summarises the core 2026 requirements; the official, controlling list lives on novascotia.ca and changes
            periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Nova Scotia work experience", "At least 1 year (1,560 hours) of skilled work in Nova Scotia within the last 3 years, in a NOC TEER 0, 1, 2 or 3 occupation"],
              ["Express Entry profile", "An active profile in the federal Express Entry pool, eligible under a federal program (e.g. Canadian Experience Class or Federal Skilled Worker)"],
              ["Language", "CLB 7 for NOC TEER 0 or 1; CLB 5 for TEER 2 or 3, measured on your lowest ability, from an approved test valid 2 years"],
              ["Education", "A Canadian high-school credential or higher, or a foreign credential with an Educational Credential Assessment (ECA)"],
              ["Settlement funds & intent", "Proof of funds to settle (unless working in Canada) and genuine intention to live in Nova Scotia"],
            ]}
            caption="Experience: Express Entry core eligibility, accurate as of May 2026 (novascotia.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The CLB level is taken from the lowest of your four abilities, reading, writing, listening and speaking, so a
            single weak skill can drop you below the threshold for your occupation. You evidence it with an approved test
            (IELTS or CELPIP for English, TEF or TCF for French). For a TEER 0 or 1 role you need CLB 7 across the board;
            lifting your weakest band is often the most valuable thing you can do before submitting.
          </Callout>

          <h2>How does the +600 CRS boost work?</h2>
          <p>
            The single most important feature of the Experience: Express Entry stream is that it is{" "}
            <strong>enhanced</strong>. Because it is aligned with Express Entry, a Nova Scotia nomination adds{" "}
            <strong>600 CRS points</strong> to your federal Comprehensive Ranking System score. Federal Express Entry draws
            typically have cut-offs well under 600, so adding 600 points lifts most nominated candidates well above the
            line. That puts them in a strong position for an Invitation to Apply at the next round, which IRCC issues. The usual
            permanent-residence processing of roughly six months then follows.
          </p>
          <p>
            This is what separates the Experience stream from Nova Scotia&apos;s <em>base</em> routes, such as Skilled
            Worker, which lead to a separate paper application to IRCC and add no CRS points. Because the 600-point boost
            only matters if you are already in the pool, the first step is a competitive federal profile. Not sure where
            your score stands? Try our <a href="/tools/crs-calculator">free CRS calculator</a> before you build your
            expression of interest.
          </p>

          <h2>How does application and selection work?</h2>
          <p>
            Nova Scotia runs the Experience stream through a <strong>ranked expression of interest (EOI)</strong>. After
            you create or update your federal Express Entry profile and confirm you meet the minimums, you submit an EOI to
            Nova Scotia. The province ranks candidates and, in periodic rounds, invites the strongest profiles to apply for
            a nomination.</p>
          <p>Because selection is ranked rather than first-come, meeting the published minimums places you in
            consideration but does not entitle you to an invitation. Nova Scotia does not publish a fixed pass mark for
            this stream, and we do not invent cut-off scores the province has not released.
          </p>
          <p>
            If invited, you file a full nomination application with supporting documents within the stated window. On a
            successful nomination, the 600 CRS points are added to your Express Entry profile, you receive an Invitation to
            Apply at a federal draw, and you then submit your permanent-residence application to IRCC. Nova Scotia&apos;s
            EOIs carry a validity period, so timing your submission and keeping your profile current both matter, confirm
            the current EOI validity on novascotia.ca.
          </p>

          <h2>How to apply for Experience: Express Entry step by step</h2>
          <p>
            <strong>How to apply</strong> follows the standard enhanced NSNP sequence, federal profile first, then an EOI,
            an invitation, and a nomination that feeds back into Express Entry. The steps below show the path from
            confirming eligibility to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "Check you have at least one year of NS skilled work in the last three years (TEER 0–3), meet the language bar (CLB 7 or 5), and hold a recognised education credential." },
              { title: "Create your Express Entry profile", desc: "Take an approved language test, obtain an ECA for foreign education, and build an active federal Express Entry profile eligible under a program such as the Canadian Experience Class." },
              { title: "Submit your Nova Scotia EOI", desc: "Submit an expression of interest to the NSNP Experience: Express Entry stream. There is no provincial application fee; your EOI is ranked in Nova Scotia's pool." },
              { title: "Receive an invitation", desc: "If your profile ranks high enough in a selection round, Nova Scotia invites you to apply for a nomination. Eligibility alone does not guarantee this." },
              { title: "Apply for the nomination", desc: "Submit a complete nomination application with your work-experience, language and education evidence within the stated window. On approval, Nova Scotia nominates you." },
              { title: "Apply to IRCC for permanent residence", desc: "The 600 CRS points are added to your profile, you receive an Invitation to Apply, and you file your federal PR application with medicals, police checks and proof of funds." },
            ]}
          />

          <h2>How Wild Mountain helps with your Experience: Express Entry application</h2>
          <p>
            We assess whether the Experience stream is genuinely your strongest route, or whether the federal{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>, the{" "}
            <a href="/pnp/nova-scotia/labour-market-priorities">Labour Market Priorities</a> approach or another{" "}
            <a href="/pnp/nova-scotia">NSNP stream</a> would position you better.</p>
          <p>Our team is led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497); we confirm your Nova
            Scotia work experience qualifies, align your <a href="/express-entry">Express Entry</a> profile, and prepare
            an expression of interest and nomination application that stand up to scrutiny. We catch the avoidable
            mistakes, a misclassified NOC, a language band one short, an expired profile, that cause refusals. If you hold
            an offer from a designated Nova Scotia employer, we also weigh the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> as an alternative route.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. We work entirely online and are not affiliated with any government;
            figures here are current to 2026 and change, so we always confirm the live novascotia.ca page before advising on
            your <strong>Nova Scotia Experience: Express Entry</strong> route to permanent residence.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Does Experience: Express Entry fit your profile?"
        sub="Get started with a licensed RCIC for an honest read on your Nova Scotia experience and the strongest route to permanent residence."
      />
    </>
  );
}
