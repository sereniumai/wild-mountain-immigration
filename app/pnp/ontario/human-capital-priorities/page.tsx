import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario/human-capital-priorities";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario Human Capital Priorities Stream",
  titleAbsolute: "OINP Human Capital Priorities Stream 2026",
  description:
    "Ontario Human Capital Priorities Stream: OINP searches the Express Entry pool, sends a Notification of Interest and adds 600 CRS. Plus the 2026 redesign.",
  path: PATH,
  keywords: [
    "Ontario Human Capital Priorities Stream",
    "OINP HCP",
    "Ontario Express Entry",
    "Notification of Interest",
    "OINP Human Capital Priorities",
    "+600 CRS Ontario",
  ],
});

const faqs = [
  {
    q: "What is the Ontario Human Capital Priorities Stream?",
    a: "The Human Capital Priorities (HCP) Stream is an enhanced, Express Entry-aligned stream of the Ontario Immigrant Nominee Program (OINP). You cannot apply to it directly. Instead, Ontario searches the federal Express Entry pool and issues a Notification of Interest (NOI) to candidates who match its targeted profiles. If you receive an NOI and apply, an Ontario nomination adds 600 points to your Comprehensive Ranking System (CRS) score, which sits well above recent Express Entry cut-offs, though IRCC still issues the Invitation to Apply at the next draw. Because Ontario announced a 2026 OINP redesign, confirm the current rules on ontario.ca before you act.",
  },
  {
    q: "How does a Notification of Interest (NOI) work?",
    a: "A Notification of Interest is an invitation from Ontario, sent to your IRCC Express Entry account, that lets you apply to the HCP Stream. You do not submit a separate HCP application up front, Ontario finds you in the Express Entry pool based on your profile. NOI draws are targeted: Ontario may search by CRS range, by specific occupations (for example tech or health), by education, or by French-language ability. Receiving an NOI is not a nomination and not permanent residence; it is permission to apply, after which Ontario assesses your full application.",
  },
  {
    q: "What CRS score do I need for the Human Capital Priorities Stream?",
    a: "There is no fixed CRS pass mark, Ontario sets the parameters for each NOI draw and they move with demand and the targeted profile. General HCP draws have historically targeted candidates in higher CRS bands, while targeted (occupation or French-language) draws have reached well below that, sometimes into the low-to-mid 400s or lower. Treat any number as a moving target rather than a guarantee, and always check the latest ontario.ca draw results. A nomination, once granted, adds 600 CRS, so the NOI threshold is about getting noticed, not about your final score.",
  },
  {
    q: "Do I need an Express Entry profile for the HCP Stream?",
    a: "Yes. The Human Capital Priorities Stream is enhanced, so you must already have an active profile in the federal Express Entry pool, meaning you qualify under the Canadian Experience Class, Federal Skilled Worker Program or Federal Skilled Trades Program. Ontario can only issue you a Notification of Interest if you are in that pool. If you are not yet in Express Entry, that is the first step; our free CRS calculator helps you estimate where you would rank.",
  },
  {
    q: "Do I need a job offer for the Human Capital Priorities Stream?",
    a: "No. Unlike Ontario's Employer Job Offer category, the HCP Stream does not require a job offer in Ontario. It is a human-capital route that assesses your Express Entry profile, education, skilled work experience and language ability. Some targeted NOI draws focus on specific in-demand occupations or on French-language skills, but a job offer itself is not a requirement. We can confirm which profile factors matter most under the rules in force when you apply.",
  },
  {
    q: "Is the Human Capital Priorities Stream changing in 2026?",
    a: "Yes. Ontario announced an OINP redesign and amended the regulation underpinning the program; effective late May 2026 several legacy streams lost their previous regulatory basis while replacement rules were still being finalised. The HCP Stream's Express Entry alignment and the +600 CRS mechanic are central to how Ontario selects skilled workers, but criteria and stream branding may change. Treat the details here as current and transitioning, and verify the live position on the official OINP page at ontario.ca before you act.",
  },
  {
    q: "Does Wild Mountain Immigration handle Ontario HCP applications?",
    a: "Yes. Wild Mountain Immigration is based in Canmore, Alberta but represents clients across Canada and abroad, including those targeting Ontario through the OINP. Working under a licensed RCIC, our team optimises your Express Entry profile to improve your odds of a Notification of Interest, then manages the HCP application and the federal permanent-residence stage after nomination. With the 2026 redesign underway, we keep your strategy aligned to the rules actually in force when you apply.",
  },
];

export default function OntarioHcpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario Human Capital Priorities Stream (OINP HCP), 2026 RCIC Guide",
            description:
              "Ontario Human Capital Priorities Stream: OINP searches the Express Entry pool, sends a Notification of Interest and adds 600 CRS. Plus the 2026 redesign.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Ontario Human Capital Priorities Stream (HCP) application support",
            description:
              "Ontario Human Capital Priorities Stream: OINP searches the Express Entry pool, sends a Notification of Interest and adds 600 CRS. Plus the 2026 redesign.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Ontario (OINP), Human Capital Priorities"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: "/pnp/ontario" },
          { name: "Human Capital Priorities", path: PATH },
        ]}
        title={<>Ontario Human Capital Priorities <span className="text-brand">Stream</span></>}
        lede={
          <p>
            The <strong>Ontario Human Capital Priorities Stream</strong> is enhanced. Ontario searches the federal Express
            Entry pool and sends a Notification of Interest to candidates it wants, and the nomination adds 600 CRS points.
            Ontario is redesigning the OINP in 2026, so confirm current rules on ontario.ca.
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
                Estimate your Express Entry CRS score in two minutes, the score Ontario screens against for an HCP
                Notification of Interest.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Ontario (OINP) overview", href: "/pnp/ontario", note: "Every OINP stream explained" },
                { label: "French-Speaking Skilled Worker", href: "/pnp/ontario/french-speaking-skilled-worker", note: "The Francophone enhanced route" },
                { label: "Express Entry", href: "/express-entry", note: "The federal pool HCP draws from" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "All provinces compared" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Ontario Human Capital Priorities (HCP) Stream is an enhanced, Express Entry-aligned stream of the Ontario Immigrant Nominee Program (OINP). You cannot apply directly. Instead, Ontario searches the federal Express Entry pool and issues a Notification of Interest to candidates who match its targeted profiles. If you receive one and apply, a nomination adds 600 CRS points, well above recent Express Entry cut-offs. IRCC then issues the Invitation to Apply at the next draw."
            items={[
              <>The <strong>Human Capital Priorities (HCP) Stream</strong> is an <strong>enhanced, Express Entry-aligned</strong> OINP stream, you cannot apply to it directly.</>,
              <>Ontario searches the <strong>Express Entry pool</strong> and issues a <strong>Notification of Interest (NOI)</strong> to candidates matching its targeted profiles.</>,
              <>An HCP nomination adds <strong>600 CRS points</strong>, well above recent Express Entry cut-offs.</>,
              <>You need an <strong>active Express Entry profile</strong> (CEC, FSW or FST); no Ontario job offer is required.</>,
              <>Ontario announced a <strong>2026 OINP redesign</strong>: HCP criteria may change, so confirm current rules on ontario.ca.</>,
            ]}
          />

          <Callout type="warning" title="The OINP, including HCP, is being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective late May 2026 several legacy streams lost
            their previous regulatory basis while replacement rules were still being finalised. Treat the Human Capital
            Priorities details below as <strong>current/transitioning</strong> rather than settled. Applications already
            submitted, and complete files that received a Notification of Interest before the change, are generally
            assessed under the prior rules, but new criteria may differ. Always confirm the live position on the official
            OINP page at <strong>ontario.ca</strong> before you act. Figures and rules change frequently.
          </Callout>

          <h2>What is the Ontario Human Capital Priorities Stream?</h2>
          <p>
            The <strong>Ontario Human Capital Priorities Stream</strong>, often shortened to <strong>OINP HCP</strong>, is
            the flagship enhanced stream of the <a href="/pnp/ontario">Ontario Immigrant Nominee Program</a>. &ldquo;Enhanced&rdquo;
            means it is aligned with federal <a href="/express-entry">Express Entry</a>: you must already be in the Express
            Entry pool, and an Ontario nomination adds <strong>600 CRS points</strong> to your Comprehensive Ranking System
            score. The defining feature is that you <em>cannot apply directly</em>. Instead, Ontario searches the Express
            Entry pool and issues a <strong>Notification of Interest (NOI)</strong> to candidates whose profiles match what
            the province is looking for.
          </p>
          <p>
            Ontario runs the country&apos;s largest provincial program, with a 2026 nomination allocation of roughly{" "}
            <strong>14,119</strong>, the biggest of any PNP, and the Human Capital category is a major part of how it
            selects skilled workers (source: ontario.ca / IRCC, May 2026). Even so, an NOI is competitive and selective:
            Ontario chooses who to invite, so being eligible for Express Entry is not the same as receiving a Notification
            of Interest. With the 2026 redesign underway, the stream is also in transition, so verify current rules before
            committing time and fees.
          </p>

          <h2>How do Notifications of Interest (NOIs) work?</h2>
          <p>
            A <strong>Notification of Interest</strong> is Ontario&apos;s invitation to apply to the HCP Stream, delivered
            straight to your IRCC Express Entry account. Because the stream is enhanced, the province pulls candidates out of
            the federal pool itself, you do not file an HCP application up front and wait. Ontario runs periodic{" "}
            <strong>NOI draws</strong> that are frequently <strong>targeted</strong>: it may search by CRS range, by specific
            in-demand occupations (such as an <strong>HCP tech draw</strong> aimed at a priority NOC code, or a
            health-sector round), by education level, or by French-language ability. These mirror the way IRCC now runs{" "}
            <strong>category-based Express Entry draws</strong>, so a strong Express Entry pool score in a targeted field
            helps on both fronts. The table below shows the typical NOI draw types in the <strong>OINP HCP draw history</strong>.
          </p>
          <DataTable
            headers={["NOI draw type", "What Ontario targets", "Typical effect"]}
            rows={[
              ["General / human capital", "Candidates within a set CRS range across the Express Entry pool", "Tends to target higher CRS bands"],
              ["Targeted occupations", "Express Entry candidates whose work matches priority NOC occupations (e.g. tech, health)", "Can reach lower CRS scores"],
              ["French-language", "Express Entry candidates with strong French alongside English", "Often reaches lower CRS scores"],
              ["Education / other", "Candidates meeting a specific education or profile parameter Ontario sets for the round", "Varies by the round's parameters"],
            ]}
            caption="Illustrative Ontario HCP Notification of Interest draw types (ontario.ca, historical OINP draw data, May 2026). Draw parameters and CRS ranges change every round and are being revised under the 2026 redesign, verify live."
          />
          <Callout type="info" title="Two rules that trip people up">
            <strong>An NOI is not a nomination</strong>, it is permission to apply, after which Ontario assesses your full
            application before deciding. And a <strong>nomination is not permanent residence</strong>, IRCC makes the final
            decision on a separate Express Entry application, even with your +600 CRS boost.
          </Callout>

          <h2>What is the +600 CRS nomination worth?</h2>
          <p>
            This is the heart of why the HCP Stream matters. If Ontario issues you an NOI, you apply, and the province
            nominates you, that nomination adds <strong>600 points</strong> to your Comprehensive Ranking System score in
            Express Entry. There is no single <strong>HCP CRS cut-off</strong> to clear before the boost applies. Because
            regular Express Entry cut-offs sit far below 600, that boost lifts most candidates well above the line. In
            recent draws it has been more than enough to earn an <strong>Invitation to Apply</strong> at the next general
            draw, which IRCC still issues. It is the single largest point award in the entire CRS. Not sure where your
            score sits today? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> before you do anything else.
          </p>

          <h2>What are the Human Capital Priorities Stream eligibility requirements?</h2>
          <p>
            <strong>OINP Human Capital Priorities</strong> eligibility rests on first being in the Express Entry pool, then
            matching the profile Ontario targets in a given NOI draw. The core requirements below reflect how the stream has
            historically operated; the controlling list lives on ontario.ca and is being revised in 2026.
          </p>
          <DataTable
            headers={["Requirement", "What the HCP Stream asks for"]}
            rows={[
              ["Active Express Entry profile", "You must be in the federal pool under the Canadian Experience Class, Federal Skilled Worker Program or Federal Skilled Trades Program"],
              ["CRS / ranking", "No fixed pass mark, Ontario sets each NOI draw's CRS parameters; meeting them does not guarantee an NOI"],
              ["Education", "A bachelor's degree or higher has historically been expected for general HCP draws; targeted draws may differ"],
              ["Skilled work experience", "Eligible skilled work experience consistent with your Express Entry program (e.g. one year continuous for FSW)"],
              ["Language", "Strong English or French, demonstrated by an approved test; some draws specifically target French-language ability"],
              ["Targeted occupation (some draws)", "For occupation-targeted rounds, your Express Entry work history must match a priority NOC the round specifies"],
              ["Intention to live in Ontario", "You must intend to live and work in Ontario after becoming a permanent resident"],
            ]}
            caption="Ontario HCP Stream core eligibility, accurate as of May 2026 (ontario.ca). Requirements are being redesigned in 2026, verify the official criteria before applying."
          />
          <Callout type="brand" title="HCP, French and the targeted draws">
            Ontario&apos;s enhanced selection often leans on targeted rounds. If your French is strong, the{" "}
            <a href="/pnp/ontario/french-speaking-skilled-worker">French-Speaking Skilled Worker Stream</a> may be a parallel
            or better route, it is also enhanced and adds the same 600 CRS. We assess both against your profile so you do
            not miss the stronger path.
          </Callout>

          <h2>How is the HCP Stream different from base OINP streams?</h2>
          <p>
            The simplest way to understand the Human Capital Priorities Stream is to contrast it with Ontario&apos;s base
            streams. The <strong>HCP Stream is enhanced</strong>: you must already hold an Express Entry profile, Ontario
            invites you via an NOI, and a nomination adds 600 CRS points to your federal score. A <strong>base</strong> stream
, such as the Masters Graduate, PhD Graduate or Employer Job Offer routes, is not connected to Express Entry;
            once nominated, you file a separate paper permanent-residence application directly with IRCC, which earns no CRS
            points and is generally processed more slowly.
          </p>
          <DataTable
            headers={["Feature", "Human Capital Priorities (HCP)", "Base OINP streams"]}
            rows={[
              ["Stream type", "Enhanced (Express Entry-aligned)", "Base (paper application to IRCC)"],
              ["Express Entry profile", "Required (CEC, FSW or FST)", "Not required"],
              ["How you enter", "Ontario issues a Notification of Interest", "You apply / submit an EOI directly"],
              ["Effect of nomination", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["Ontario job offer", "Not required", "Required for Employer Job Offer streams"],
            ]}
            caption="Ontario HCP Stream vs base OINP streams (ontario.ca, May 2026). Streams are being redesigned in 2026, confirm current rules before relying on these distinctions."
          />

          <h2>How to apply for the Human Capital Priorities Stream</h2>
          <p>
            <strong>How to apply for the Human Capital Priorities Stream</strong> is different from most streams: there is no
            direct application until Ontario invites you. Your job is to be in the Express Entry pool with the strongest
            possible profile, so the province notices you. The steps below show the path from Express Entry profile to a
            federal permanent-residence decision, though the 2026 redesign may adjust individual steps.
          </p>
          <Steps
            steps={[
              { title: "Enter the Express Entry pool", desc: "Qualify under the Canadian Experience Class, Federal Skilled Worker Program or Federal Skilled Trades Program and create an active Express Entry profile." },
              { title: "Maximise your CRS profile", desc: "Lift language results, claim an ECA for your education, and capture every eligible point, a stronger profile improves your odds of a Notification of Interest." },
              { title: "Receive a Notification of Interest", desc: "Ontario searches the pool and, if your profile matches a targeted HCP draw, sends an NOI to your IRCC account. Eligibility alone does not guarantee this." },
              { title: "Apply to the OINP & get nominated", desc: "Submit a complete HCP application with supporting documents within the deadline. On approval, Ontario nominates you for permanent residence." },
              { title: "Accept the +600 CRS & apply to IRCC", desc: "Accept the nomination in your Express Entry account to gain 600 CRS, which sits well above recent cut-offs. IRCC still issues the Invitation to Apply, after which you file your federal PR application and IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain helps with your HCP application</h2>
          <p>
            Because you cannot apply to the Human Capital Priorities Stream directly, the work happens <em>before</em> the NOI
            arrives, in how your <a href="/express-entry">Express Entry</a> profile is built. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), Wild Mountain Immigration
            optimises that profile to improve your chances of a Notification of Interest, confirms whether HCP or the{" "}
            <a href="/pnp/ontario/french-speaking-skilled-worker">French-Speaking</a> route fits you best, and then prepares a
            nomination application that stands up to scrutiny, representing you with both Ontario and IRCC. With the OINP being
            redesigned in 2026, our team keeps your strategy aligned to the rules actually in force when you apply, and gives
            you a candid read on your realistic chances first.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment, and see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial and IRCC charges. Figures here are current to 2026 and
            the <strong>Ontario Human Capital Priorities Stream</strong> rules are transitioning, so we always confirm the live
            ontario.ca page before advising. For the wider picture, see the <a href="/pnp/ontario">Ontario OINP</a> overview or
            the <a href="/pnp/ontario/skilled-trades">Skilled Trades</a> stream.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Want a Notification of Interest from Ontario?"
        sub="Get started with a licensed RCIC for an honest read on your Express Entry profile and your odds under the Human Capital Priorities Stream, and how the 2026 redesign affects your plan."
      />
    </>
  );
}
