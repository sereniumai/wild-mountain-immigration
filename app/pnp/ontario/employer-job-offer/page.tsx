import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario/employer-job-offer";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario Employer Job Offer Streams (OINP) 2026",
  titleAbsolute: "OINP Employer Job Offer Streams 2026 (Ontario)",
  description:
    "OINP Employer Job Offer streams 2026: the Foreign Worker, In-Demand Skills and International Student streams, eligibility and how to apply. RCIC guide.",
  path: PATH,
  keywords: [
    "Ontario Employer Job Offer streams",
    "OINP Employer Job Offer",
    "Foreign Worker stream",
    "In-Demand Skills stream",
    "International Student stream",
    "Ontario job offer PR",
  ],
});

const faqs = [
  {
    q: "What are the Ontario Employer Job Offer streams?",
    a: "The OINP Employer Job Offer category is a set of base streams for people who hold a permanent, full-time job offer from an eligible Ontario employer. Historically it has run three streams: the Foreign Worker stream, the In-Demand Skills stream and the International Student stream. They are base streams, not enhanced ones, and they are not aligned with federal Express Entry. So after a nomination you file a separate paper application to IRCC for permanent residence. Ontario is redesigning the OINP in 2026, including merging these streams, so confirm current rules on ontario.ca.",
  },
  {
    q: "Do I need a job offer for the OINP Employer Job Offer streams?",
    a: "Yes, a valid job offer is the entire basis of this category. You need a permanent, full-time offer from an eligible Ontario employer in a qualifying occupation, and the employer must meet revenue, employee and (for some streams) recruitment requirements. Employer registration is now part of the OINP process. Without a qualifying Ontario job offer you cannot use the Foreign Worker, In-Demand Skills or International Student stream, though Ontario's Human Capital streams may be an alternative.",
  },
  {
    q: "How is the Foreign Worker stream different from the In-Demand Skills stream?",
    a: "The Foreign Worker stream covers higher-skilled occupations (broadly NOC TEER 0, 1, 2 and 3) and does not always require a language test. The In-Demand Skills stream targets specific lower-skilled occupations (broadly NOC TEER 4 and 5, such as certain agriculture, construction and trucking roles). It does require a language result at CLB/NCLC 4, a minimum education level, and nine months of relevant Ontario work experience. Both are base streams that need a permanent Ontario job offer.",
  },
  {
    q: "Are the Ontario Employer Job Offer streams Express Entry aligned?",
    a: "No. The Employer Job Offer streams are base streams, they are not linked to federal Express Entry and a nomination does not add 600 CRS points. Once Ontario nominates you, you submit a separate, paper-based application directly to IRCC for permanent residence, which is generally processed more slowly than an enhanced Express Entry application. If you want an Express Entry-aligned Ontario route, look at the Human Capital Priorities stream instead.",
  },
  {
    q: "Does the International Student stream require a job offer?",
    a: "Yes. Despite the name, the OINP International Student stream is part of the Employer Job Offer category and requires a permanent, full-time job offer from an eligible Ontario employer in a NOC TEER 0–3 occupation. What sets it apart is that you must have graduated from an eligible Canadian post-secondary institution with a degree or diploma. Unlike the Masters and PhD Graduate streams, it does not require a job offer to be in a specific field, but it does require one.",
  },
  {
    q: "How do I apply through an OINP Employer Job Offer stream?",
    a: "These streams use Ontario's Expression of Interest (EOI) system. You confirm a qualifying Ontario job offer, the employer registers and submits an employer form, and you create an EOI profile scored on factors such as your job offer, wage, experience, education and language. Ontario then issues Invitations to Apply to higher-ranked candidates. If invited, you file a full nomination application; once nominated, you apply to IRCC for permanent residence. With the 2026 redesign underway, confirm the current process on ontario.ca.",
  },
  {
    q: "Is the OINP Employer Job Offer category changing in 2026?",
    a: "Yes. Ontario amended the regulation underpinning the OINP and, effective May 30, 2026, several legacy streams lost their previous regulatory basis while replacement rules were still being finalised. Ontario has signalled it will consolidate the three Employer Job Offer streams into a single Employer Job Offer route with TEER-based tracks. Treat the stream details here as current/transitioning, and always verify the live position on the official OINP page at ontario.ca before you act.",
  },
];

export default function EmployerJobOfferPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario Employer Job Offer Streams (OINP), 2026 RCIC Guide",
            description:
              "Ontario Employer Job Offer streams 2026: the Foreign Worker, In-Demand Skills and International Student streams, eligibility and how to apply. RCIC guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "OINP Employer Job Offer application support",
            description:
              "Ontario Employer Job Offer streams 2026: the Foreign Worker, In-Demand Skills and International Student streams, eligibility and how to apply. RCIC guide.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Ontario (OINP), Employer Job Offer"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: "/pnp/ontario" },
          { name: "Employer Job Offer", path: PATH },
        ]}
        title={<>OINP Employer Job Offer <span className="text-brand">streams</span></>}
        lede={
          <p>
            The <strong>Ontario Employer Job Offer streams</strong> are base OINP routes for people with a permanent,
            full-time job offer from an eligible Ontario employer. This RCIC-reviewed guide explains the Foreign Worker,
            In-Demand Skills and International Student streams, who qualifies and how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have an Ontario job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With the OINP redesign underway in 2026, picking the right Employer Job Offer stream matters. Get an honest
                read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Ontario (OINP) overview", href: "/pnp/ontario", note: "Every OINP stream explained" },
                { label: "Human Capital Priorities", href: "/pnp/ontario/human-capital-priorities", note: "The enhanced +600 CRS route" },
                { label: "Work permits", href: "/work-permits", note: "LMIA & employer-specific permits" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The OINP Employer Job Offer category covers base immigration routes for people who hold a permanent, full-time job offer from an eligible Ontario employer. It has historically run the Foreign Worker, In-Demand Skills and International Student streams. Employer registration and an Expression of Interest are part of the process. These streams are not Express Entry-aligned, so a nomination is a provincial recommendation that leads to a separate IRCC application, not 600 CRS points."
            items={[
              <>The <strong>Ontario Employer Job Offer streams</strong> are base OINP routes that all require a permanent, full-time job offer from an eligible Ontario employer.</>,
              <>The category runs three streams: the <strong>Foreign Worker stream</strong>, the <strong>In-Demand Skills stream</strong> and the <strong>International Student stream</strong>.</>,
              <>They are <strong>not Express Entry-aligned</strong>. A nomination leads to a <strong>separate paper IRCC application</strong>, not 600 CRS points.</>,
              <><strong>Employer registration</strong> is now part of the process, and selection runs through Ontario&apos;s Expression of Interest (EOI) system.</>,
              <>Ontario is <strong>redesigning the OINP in 2026</strong> and merging these streams, so confirm current rules on ontario.ca.</>,
            ]}
          />

          <Callout type="warning" title="The OINP Employer Job Offer streams are being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective <strong>May 30, 2026</strong> several legacy
            streams, including the three Employer Job Offer streams, lost their previous regulatory basis while replacement
            rules were still being finalised. Ontario has signalled it will <strong>consolidate the Foreign Worker, In-Demand
            Skills and International Student streams into a single Employer Job Offer route</strong> with TEER-based tracks.
            Treat the stream details below as <strong>current/transitioning</strong> rather than settled. Applications already
            submitted, and complete files that received an Invitation to Apply before the change, are generally assessed
            under the prior rules, but new criteria may differ. Always confirm the live position on the official OINP page at{" "}
            <strong>ontario.ca</strong> before you act. Figures and rules change frequently.
          </Callout>

          <h2>What are the Ontario Employer Job Offer streams?</h2>
          <p>
            The <strong>Ontario Employer Job Offer streams</strong> sit within one of the three broad categories of the{" "}
            <a href="/pnp/ontario">Ontario Immigrant Nominee Program (OINP)</a>. Where the Human Capital category targets
            skilled workers and graduates and the Business category targets entrepreneurs, the Employer Job Offer category is
            built around one thing: a <strong>permanent, full-time job offer from an eligible Ontario employer</strong>.
            Historically the category has run three streams, the <strong>Foreign Worker stream</strong>, the{" "}
            <strong>In-Demand Skills stream</strong> and the <strong>International Student stream</strong>.
          </p>
          <p>
            Ontario runs the country&apos;s largest provincial program: for 2026 its nomination allocation is roughly{" "}
            <strong>14,119</strong>, the biggest of any PNP (source: ontario.ca / IRCC, May 2026). The Employer Job Offer
            streams are an important part of that volume because they create a direct line from an Ontario job offer to
            permanent residence. But they are heavily oversubscribed, so meeting the minimum eligibility is not the same as
            receiving an invitation, and with the 2026 redesign underway the category is in transition.
          </p>
          <p>
            One point is essential: these are <strong>base</strong> streams. They are <em>not</em> aligned with federal{" "}
            <a href="/express-entry">Express Entry</a>, so a nomination does not add 600 CRS points. Instead, once Ontario
            nominates you, you submit a <strong>separate paper application directly to IRCC</strong> for permanent residence.
            That distinction shapes your whole timeline and is the single most important thing to understand about this
            category.
          </p>

          <h2>The three OINP Employer Job Offer streams</h2>
          <p>
            Each of the three <strong>OINP Employer Job Offer</strong> streams targets a different profile, but all require a
            qualifying Ontario job offer. The table below summarises who each stream is for and what makes it distinct. Note
            that under the 2026 redesign Ontario is consolidating these into a single route, so the details are
            current/transitioning.
          </p>
          <DataTable
            headers={["Stream", "Who it is for", "Distinctive requirement"]}
            rows={[
              [
                "Foreign Worker stream",
                "Workers with a permanent Ontario job offer in a higher-skilled occupation (broadly NOC TEER 0–3)",
                "No language test required for many occupations; many roles use an LMIA-exempt job offer under provincial selection",
              ],
              [
                "In-Demand Skills stream",
                "Workers with an offer in specific in-demand occupations in Ontario (broadly NOC TEER 4–5 roles such as trucking and agriculture NOC codes, plus construction)",
                "Requires CLB/NCLC 4 language, a minimum education level and 9 months of relevant Ontario work experience",
              ],
              [
                "International Student stream",
                "Graduates of an eligible Canadian post-secondary institution with a permanent Ontario job offer (NOC TEER 0–3)",
                "Must hold an eligible degree or diploma; aimed at retaining Canadian-educated talent",
              ],
            ]}
            caption="The three OINP Employer Job Offer streams (ontario.ca, 2026). Streams are being merged under the 2026 redesign, eligibility does not guarantee an invitation, and details may change."
          />
          <Callout type="info" title="Two rules that trip people up">
            <strong>Eligibility is not an invitation.</strong> The OINP is points-ranked and oversubscribed, so meeting the
            minimum only puts you in the pool. And a <strong>nomination is not permanent residence</strong>: IRCC makes the
            final decision on a separate application.
          </Callout>

          <h2>Eligibility for the Employer Job Offer streams</h2>
          <p>
            Requirements differ by stream, but the category shares a common spine built around the job offer and the
            employer. The offer must be <strong>permanent and full-time</strong>, in a qualifying occupation, and pay a wage
            that meets the stream&apos;s threshold, Ontario generally expects the offer to meet the median wage for the
            occupation or the employer&apos;s prevailing wage, whichever applies.</p>
          <p>The <strong>employer</strong> must also
            qualify: minimum revenue, a minimum number of employees, and (for the Foreign Worker and International Student
            streams) recruitment efforts, with more flexible thresholds inside the Greater Toronto Area than outside it.
            Employer registration is now part of the process.
          </p>
          <DataTable
            headers={["Requirement", "What the Employer Job Offer streams ask for"]}
            rows={[
              ["Job offer", "Permanent, full-time offer from an eligible Ontario employer in a qualifying occupation"],
              ["Wage", "Must meet the applicable wage threshold for the occupation (typically the median or prevailing wage)"],
              ["Occupation / skill level", "Foreign Worker & International Student: NOC TEER 0–3; In-Demand Skills: specified TEER 4–5 occupations"],
              ["Work experience", "Foreign Worker: relevant recent experience; In-Demand Skills: 9 months of relevant Ontario experience"],
              ["Language", "Not required for many Foreign Worker occupations; In-Demand Skills requires CLB/NCLC 4"],
              ["Education", "In-Demand Skills requires a minimum education level; International Student requires an eligible Canadian credential"],
              ["Employer eligibility", "Revenue, employee-count and recruitment thresholds (more flexible inside the GTA); employer registration required"],
            ]}
            caption="OINP Employer Job Offer core eligibility, current to May 2026 (ontario.ca). Requirements are being redesigned in 2026, verify the official criteria before applying."
          />
          <Callout type="brand" title="The wage and the employer can make or break a file">
            Two of the most common reasons an Employer Job Offer application runs into trouble are a wage that falls short of
            the threshold and an employer that does not meet the revenue, headcount or recruitment tests. We assess the
            employer side as carefully as the candidate side before anyone commits time or fees.
          </Callout>

          <h2>How the Employer Job Offer streams differ from Human Capital Priorities</h2>
          <p>
            The clearest way to place these streams is to contrast them with Ontario&apos;s flagship enhanced route. The{" "}
            <strong>Employer Job Offer streams are base</strong>: no Express Entry profile is required, a nomination adds no
            CRS points, and you finish with a separate paper application to IRCC.</p>
          <p>The{" "}
            <a href="/pnp/ontario/human-capital-priorities">Human Capital Priorities stream</a> is enhanced: you must already
            be in the Express Entry pool, and a nomination adds <strong>600 CRS points</strong>, well above recent cut-offs. IRCC still issues the
            Invitation to Apply at the next federal draw. If you do not have a strong Express Entry profile but you do have an
            Ontario job offer, the Employer Job Offer route may be the better fit, and the reverse is also true.
          </p>
          <DataTable
            headers={["Feature", "Employer Job Offer streams", "Human Capital Priorities"]}
            rows={[
              ["Stream type", "Base", "Enhanced"],
              ["Express Entry profile", "Not required", "Required (active EE profile)"],
              ["Effect of nomination", "Leads to a separate IRCC paper application", "Adds 600 CRS points"],
              ["Ontario job offer", "Required", "Not required"],
              ["IRCC processing", "Generally slower (paper)", "Generally faster (Express Entry)"],
            ]}
            caption="OINP Employer Job Offer streams vs Human Capital Priorities (ontario.ca, May 2026)."
          />

          <h2>How to apply for the Ontario Employer Job Offer streams</h2>
          <p>
            <strong>How to apply for the Ontario Employer Job Offer streams</strong> follows the OINP&apos;s Expression of
            Interest sequence, though the 2026 redesign may adjust individual steps. You confirm a qualifying Ontario job
            offer, the employer registers and completes its part, you submit an EOI profile, and Ontario invites higher-ranked
            candidates to apply. The steps below show the path from job offer to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm a qualifying job offer", desc: "Secure a permanent, full-time offer from an eligible Ontario employer in a qualifying occupation, at a wage that meets the threshold." },
              { title: "Pick the right stream", desc: "Match your profile to the Foreign Worker, In-Demand Skills or International Student stream under the rules in force now." },
              { title: "Submit your Expression of Interest", desc: "Create an EOI profile scored on your job offer, wage, experience, education and language. The employer registers and submits the OINP employer form." },
              { title: "Receive an ITA & apply", desc: "If invited, file a complete nomination application within the deadline. Missing documents is a common reason for refusal." },
              { title: "Apply to IRCC for PR", desc: "Use the nomination to file a separate, paper-based permanent-residence application with IRCC, which makes the final decision." },
            ]}
          />
          <Callout type="info" title="Base means a separate federal application">
            Because these are base streams, the federal stage is a standalone paper application to IRCC rather than an
            Express Entry profile boost. It earns no CRS points and is generally processed more slowly than an enhanced
            application. Curious where your federal score sits? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> to compare routes.
          </Callout>

          <h2>OINP Employer Job Offer fees and processing in 2026</h2>
          <p>
            There are two stages, each with its own fee and timeline. OINP application fees for Employer Job Offer streams
            have historically run from about <strong>$1,500 to $2,000</strong>, with a higher amount for positions in the
            Greater Toronto Area; these provincial fees are separate from the IRCC permanent-residence fees you pay at the
            federal stage.</p>
          <p>Ontario&apos;s service standard for processing a complete nomination application has historically
            sat in the region of <strong>30 to 90 days</strong>, varying by stream and volume. After that, the base IRCC paper
            application generally takes longer than the roughly six months IRCC targets for enhanced applications. With the{" "}
            <strong>OINP 2026</strong> redesign in progress, both fees and timelines may shift, confirm the current figures
            on ontario.ca before you apply.
          </p>

          <h2>How Wild Mountain helps with your Ontario job offer PR application</h2>
          <p>
            Turning an <strong>Ontario job offer PR</strong> plan into a nomination takes coordination on both sides, yours
            and your employer&apos;s. Working under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>{" "}
            (CICC #R706497), Wild Mountain Immigration confirms which Employer Job Offer stream fits your profile, checks the
            wage and employer-eligibility tests before you rely on them, reviews the underlying{" "}
            <a href="/work-permits">work permit</a>, builds an Expression of Interest that ranks you well, and prepares a
            nomination and separate IRCC application that stand up to scrutiny.</p>
          <p>With the OINP being redesigned in 2026, our
            team keeps your strategy aligned to the rules actually in force when you apply, and gives you a candid read on your
            realistic chances first.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment, and see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial and IRCC charges. Whichever{" "}
            <strong>OINP Employer Job Offer</strong> stream fits, this is Ontario job offer immigration done carefully, with
            the employer side checked as closely as your own. Figures here are current to May 2026
            and the OINP is mid-redesign, so we always confirm the live ontario.ca page before advising. For the wider picture,
            see the <a href="/pnp/ontario">Ontario OINP</a> overview, or the{" "}
            <a href="/pnp/ontario/human-capital-priorities">Human Capital Priorities</a> and{" "}
            <a href="/pnp/ontario/entrepreneur">Entrepreneur</a> streams.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have an Ontario job offer? Let's find your stream"
        sub="Get started with a licensed RCIC for an honest read on the strongest OINP Employer Job Offer route for you, and how the 2026 redesign affects your plan."
      />
    </>
  );
}
