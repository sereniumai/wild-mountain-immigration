import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/newfoundland-and-labrador/skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Newfoundland Skilled Worker Category 2026",
  titleAbsolute: "NLPNP Skilled Worker 2026: Base Category Guide",
  description:
    "NLPNP Skilled Worker Category 2026: a base stream for workers with a permanent Newfoundland job offer. Eligibility, $0 fees and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Newfoundland Skilled Worker Category",
    "NLPNP Skilled Worker",
    "Newfoundland job offer PR",
    "Newfoundland and Labrador base nomination",
    "NLPNP skilled worker eligibility",
  ],
});

const faqs = [
  {
    q: "Do I need a job offer for the Newfoundland Skilled Worker Category?",
    a: "Yes. A permanent, full-time job offer from an eligible Newfoundland and Labrador employer is the foundation of this stream and its defining requirement. The offer must be in a genuine, ongoing position and, for many roles, supported by the employer. If you do not have an NL job offer, Priority Skills NL is the main NLPNP pathway that waives that requirement; otherwise the Skilled Worker Category will not be open to you until you secure one.",
  },
  {
    q: "Is the Newfoundland Skilled Worker Category enhanced or base?",
    a: "It is a base stream. That means a nomination does not add 600 CRS points to an Express Entry profile. Once Newfoundland and Labrador nominates you, you submit a separate, paper-based permanent-residence application directly to IRCC. If you already have an Express Entry profile and a TEER 0-3 job offer, the enhanced Express Entry Skilled Worker stream may be faster, because it is Express Entry-aligned and adds 600 CRS points to your score.",
  },
  {
    q: "What is the difference between the Skilled Worker Category and the Express Entry Skilled Worker stream?",
    a: "Both require a Newfoundland and Labrador job offer, but they sit in different frameworks. The Express Entry Skilled Worker stream is enhanced: it needs an active Express Entry profile and a TEER 0-3 job offer, and a nomination adds 600 CRS points. The Skilled Worker Category is base: it accepts a broader range of occupations, does not require an Express Entry profile, and leads to a separate IRCC paper application rather than CRS points. We help you choose which fits your profile.",
  },
  {
    q: "How much does the Newfoundland Skilled Worker Category cost?",
    a: "As of December 5, 2025, Newfoundland and Labrador eliminated its provincial application fees, so there is no provincial charge to apply to the Skilled Worker Category. You still pay the separate federal IRCC permanent-residence fees at the final stage. Fees and policies change, so confirm the current amounts on gov.nl.ca and canada.ca before you apply.",
  },
  {
    q: "How long does the Skilled Worker Category take to process?",
    a: "Newfoundland and Labrador advertises one of the fastest provincial targets in Canada, roughly a 25-day standard for a complete nomination application once you are invited. That covers only the provincial stage. Because the Skilled Worker Category is a base stream, the federal stage is a separate paper-based PR application to IRCC, which generally takes longer than the roughly six months IRCC targets for enhanced applications. Verify current timelines on gov.nl.ca and canada.ca.",
  },
  {
    q: "Does a Skilled Worker Category nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. The province also does not publish cut-off scores, and meeting the eligibility criteria does not guarantee an invitation. We build the strongest possible case and flag risks before they become refusals.",
  },
  {
    q: "How do I apply for the Skilled Worker Category in 2026?",
    a: "Since February 19, 2025, you cannot apply directly. You submit an expression of interest (EOI) through Newfoundland and Labrador's online portal, and the province invites the candidates it wants to nominate. Your EOI stays valid for 12 months, and if you are invited you have 60 days to submit a complete nomination application. After a nomination, you file a separate paper PR application with IRCC. Confirm the current process on gov.nl.ca.",
  },
];

export default function NewfoundlandSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Newfoundland Skilled Worker Category 2026 (NLPNP Base Stream Guide)",
            description:
              "Newfoundland Skilled Worker Category 2026: a base NLPNP stream for workers with a permanent NL job offer. Eligibility, $0 fees and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NLPNP Skilled Worker Category application support",
            description:
              "Newfoundland Skilled Worker Category 2026: a base NLPNP stream for workers with a permanent NL job offer. Eligibility, $0 fees and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NLPNP, Skilled Worker Category"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Newfoundland and Labrador", path: "/pnp/newfoundland-and-labrador" },
          { name: "Skilled Worker", path: PATH },
        ]}
        title={<><span className="text-brand">NLPNP Skilled Worker</span> Category (Newfoundland)</>}
        lede={
          <p>
            The <strong>NLPNP Skilled Worker</strong> Category is a base NLPNP stream for workers who hold a
            permanent, full-time job offer from a Newfoundland and Labrador employer. A nomination leads to a separate
            permanent-residence application to IRCC, and in 2026 there are $0 provincial fees.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Briefcase className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have an NL job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A Newfoundland job offer can open a base route to PR, but stream fit decides everything. Get an honest
                read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Newfoundland & Labrador PNP", href: "/pnp/newfoundland-and-labrador", note: "Every NLPNP stream explained" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province's PNP" },
                { label: "Express Entry Skilled Worker", href: "/pnp/newfoundland-and-labrador/express-entry-skilled-worker", note: "The enhanced +600 CRS route" },
                { label: "International Graduate", href: "/pnp/newfoundland-and-labrador/international-graduate", note: "For recent PGWP holders" },
                { label: "Priority Skills NL", href: "/pnp/newfoundland-and-labrador/priority-skills", note: "The no-job-offer route" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other NL employer route" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The NLPNP Skilled Worker category is a base nomination stream for skilled workers who hold a permanent, full-time job offer from an eligible Newfoundland and Labrador employer but are not applying through Express Entry. It accepts a broader range of occupations than the enhanced route and generally targets applicants aged 21 to 59. As a base stream it adds no CRS points, leading instead to a separate paper application to IRCC."
            items={[
              <>The <strong>NLPNP Skilled Worker</strong> category needs a permanent, full-time <strong>NL job offer</strong> from an eligible employer.</>,
              <>It is a <strong>base</strong> stream: a nomination leads to a <strong>separate IRCC paper PR application</strong>, not 600 CRS points.</>,
              <>It accepts a <strong>broader range of occupations</strong> than the enhanced route and generally targets applicants aged <strong>21–59</strong>.</>,
              <>As of <strong>December 5, 2025</strong>, provincial application fees are <strong>$0</strong>, only federal IRCC fees remain.</>,
              <>Since <strong>February 19, 2025</strong>, you apply through an <strong>expression of interest (EOI)</strong>, not a direct application.</>,
            ]}
          />

          <h2>What is the NLPNP Skilled Worker category?</h2>
          <p>
            The <strong>NLPNP Skilled Worker</strong> Category is the base, job-offer stream of the Newfoundland and
            Labrador Provincial Nominee Program (NLPNP). It is built for skilled workers who hold a permanent, full-time
            job offer from an eligible Newfoundland and Labrador employer but who are not applying through federal Express
            Entry. The province has set an ambitious growth target, welcoming up to roughly{" "}
            <strong>5,100 newcomers a year</strong> by 2026 (source: gov.nl.ca, 2026), and the Skilled Worker Category is
            one of the main worker routes that supports it.
          </p>
          <p>
            Two 2026 features stand out. First, as of December 5, 2025, Newfoundland and Labrador eliminated its provincial
            application fees, so there is <strong>$0</strong> to pay at the provincial stage (federal IRCC fees still
            apply). Second, the NLPNP advertises one of the fastest provincial processing targets in the country, at
            roughly <strong>25 days</strong> for a complete nomination application. Because this is a base stream, however,
            the route to permanent residence has a second, separate step, an application directly to IRCC. Figures and
            policies change frequently, so always verify the current rules on gov.nl.ca before acting.
          </p>

          <h2>Is the Skilled Worker Category a base or enhanced stream?</h2>
          <p>
            The Skilled Worker Category is a <strong>base</strong> stream, and that distinction shapes your whole timeline.
            An <em>enhanced</em> stream is aligned with federal Express Entry: a nomination adds <strong>600 CRS
            points</strong> to your Comprehensive Ranking System score, putting most candidates well above the typical
            Express Entry draw cut-off, though IRCC issues any invitation. A <em>base</em> stream is not connected to Express Entry.
          </p>
          <p>
            Under the Skilled Worker Category, once Newfoundland and Labrador nominates you, you submit a{" "}
            <strong>separate permanent-residence application directly to IRCC</strong>, a paper-based <strong>base
            nomination</strong> that earns no CRS points and is generally processed more slowly than an enhanced
            application. If you already have an Express Entry profile and a TEER 0–3 job offer, the{" "}
            <a href="/pnp/newfoundland-and-labrador/express-entry-skilled-worker">Express Entry Skilled Worker</a> stream
            may be the faster route. Not sure where your federal score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>What are the NLPNP Skilled Worker eligibility requirements?</h2>
          <p>
            <strong>NLPNP skilled worker eligibility</strong> rests on a connected set of requirements you
            must meet when you submit your expression of interest. The cornerstone is a genuine{" "}
            <strong>Newfoundland job offer for PR</strong>, a permanent, full-time job offer, but the province also
            assesses your experience, language, education, ties and ability to settle. The table below summarises the core 2026 requirements; the official,
            controlling list lives on gov.nl.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the Skilled Worker Category asks for"]}
            rows={[
              ["Job offer", "A permanent, full-time job offer from an eligible Newfoundland and Labrador employer, in a genuine and ongoing position (any TEER level)"],
              ["Age", "Generally between 21 and 59 at the time of application"],
              ["Work experience", "Relevant skilled work experience that matches the offered occupation, with the qualifications the role requires"],
              ["Language", "Demonstrated English or French ability appropriate to the occupation, via an approved test (CLB level scales with the role)"],
              ["Education", "Education or training relevant to the job offer; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Settlement funds", "Enough funds, alongside your NL income, to support yourself and any family members as you establish in the province"],
              ["Intent & status", "A genuine intention to live and work in Newfoundland and Labrador, with valid status if you are already in Canada"],
            ]}
            caption="Newfoundland Skilled Worker Category core eligibility, accurate as of May 2026 (gov.nl.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="brand" title="No NL job offer? Priority Skills NL is the exception">
            The Skilled Worker Category is built around a Newfoundland and Labrador job offer. The main NLPNP pathway that
            does <strong>not</strong> require one is{" "}
            <a href="/pnp/newfoundland-and-labrador/priority-skills">Priority Skills NL</a>, which targets in-demand
            candidates, for example in health care, within the <a href="/express-entry">Express Entry</a> framework. If
            you do have a designated employer, the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> is a further route worth comparing.
          </Callout>
          <Callout type="info" title="Language is judged against the occupation">
            There is no single province-wide language floor for this base stream. Instead, the level expected scales with
            the offered occupation and its regulatory requirements. An approved English or French test result (valid two years)
            is the safest evidence, and lifting your weakest ability is often the highest-value preparation you can do.
          </Callout>

          <h2>How does the Skilled Worker Category compare with the other NL job-offer streams?</h2>
          <p>
            Newfoundland and Labrador runs more than one worker route, and most require a job offer. The table below
            contrasts the base Skilled Worker Category with the province&apos;s two other main worker streams, so you can
            see where your profile fits before you build an EOI.
          </p>
          <DataTable
            headers={["Feature", "Skilled Worker Category", "Express Entry Skilled Worker", "International Graduate"]}
            rows={[
              ["Stream type", "Base", "Enhanced (+600 CRS)", "Base"],
              ["NL job offer", "Required (any TEER)", "Required (TEER 0–3)", "Required"],
              ["Express Entry profile", "Not required", "Required", "Not required"],
              ["Effect of nomination", "Separate IRCC paper application", "Adds 600 CRS points", "Separate IRCC paper application"],
              ["Best for", "Workers with an NL offer, no EE profile", "EE candidates with a TEER 0–3 offer", "Recent grads holding a valid PGWP"],
            ]}
            caption="NLPNP worker streams compared (gov.nl.ca, May 2026). Eligibility does not guarantee an invitation; figures change."
          />

          <h2>How do you apply for the Skilled Worker Category in 2026?</h2>
          <p>
            <strong>How to apply for the NLPNP Skilled Worker Category</strong> changed on February 19, 2025. You can no
            longer apply directly. Instead, you submit an <strong>expression of interest (EOI)</strong> through the
            province&apos;s online portal, and Newfoundland and Labrador invites the candidates it wants to nominate. The
            first step, then, is building a strong EOI profile around your job offer, not filing a full application.
          </p>
          <Callout type="info" title="The EOI timeline at a glance">
            Your <strong>EOI stays valid for 12 months</strong>. If the province issues an invitation, you then have{" "}
            <strong>60 days</strong> to submit a complete nomination application. With the provincial processing target at
            roughly <strong>25 days</strong>, a well-prepared file can clear the provincial stage quickly, but missing
            documents inside that 60-day window is a common, avoidable setback.
          </Callout>
          <Steps
            steps={[
              { title: "Secure an eligible NL job offer", desc: "Confirm a permanent, full-time offer from an eligible Newfoundland and Labrador employer in a genuine, ongoing role." },
              { title: "Confirm eligibility & gather documents", desc: "Check age, experience, language and education bars; take an approved language test, obtain an ECA for foreign education, and collect job-offer and experience evidence." },
              { title: "Submit your expression of interest", desc: "Create and submit your EOI through the province's portal. It stays valid for 12 months while Newfoundland and Labrador reviews candidates." },
              { title: "Receive an invitation", desc: "If the province invites you, you have 60 days to file a complete nomination application. Eligibility alone does not guarantee an invitation." },
              { title: "Get nominated by the province", desc: "Submit your complete application (no provincial fee since December 5, 2025). On approval, Newfoundland and Labrador nominates you for permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "Because this is a base nomination, file a separate paper PR application with IRCC, including medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <p>
            The province does not publish invitation cut-off scores for this stream, so there is no public target to aim
            at; the focus is simply on presenting a strong, well-documented EOI built around a genuine Newfoundland and
            Labrador job offer.
          </p>

          <h2>What are the fees and processing times in 2026?</h2>
          <p>
            On cost, the 2026 headline is straightforward: <strong>$0 provincial fees</strong>. Newfoundland and Labrador
            eliminated its NLPNP application fees on December 5, 2025, so the only government charges left are the federal
            IRCC permanent-residence fees you pay at the final stage. On speed, the province&apos;s roughly{" "}
            <strong>25-day</strong> provincial processing target is among the fastest in Canada, but it covers only the
            provincial nomination.
          </p>
          <p>
            Because the Skilled Worker Category is a <strong>base</strong> stream, the federal stage is a separate,
            paper-based PR application. IRCC targets roughly six months for enhanced (Express Entry) PNP applications, while
            base PNP applications generally take longer (source: canada.ca, processing times, 2026). Both provincial and
            federal timelines move with demand, so treat any estimate as approximate and verify on gov.nl.ca and
            canada.ca.
          </p>

          <h2>How Wild Mountain Immigration helps with your Skilled Worker Category application</h2>
          <p>
            As a skilled worker with a Newfoundland and Labrador job offer, your first task is to land in the right stream
            and submit an EOI that stands up to scrutiny. Wild Mountain Immigration assesses your profile against the
            province&apos;s current requirements, confirms whether the base Skilled Worker Category or the enhanced{" "}
            <a href="/pnp/newfoundland-and-labrador/express-entry-skilled-worker">Express Entry Skilled Worker</a> route
            gives you the strongest realistic chance, and, for recent graduates, whether the{" "}
            <a href="/pnp/newfoundland-and-labrador/international-graduate">International Graduate</a> stream or the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> fits better. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team prepares an EOI,
            a nomination application and the separate IRCC base PR application, and represents you with the province and
            with IRCC, online throughout.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            <strong> NLPNP Skilled Worker</strong> application an expert check before you submit. Figures here are current
            to 2026 and change frequently, so we always confirm the live gov.nl.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have a Newfoundland job offer? Let's check your route"
        sub="Get started with a licensed RCIC for an honest read on whether the base Skilled Worker Category or an enhanced NLPNP stream gives you the strongest path to permanent residence."
      />
    </>
  );
}
