import type { Metadata } from "next";
import { MapPin, Rocket, Languages, Wrench, GraduationCap, Briefcase, Building2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario Immigrant Nominee Program (OINP)",
  titleAbsolute: "Ontario PNP (OINP) 2026 Guide",
  description:
    "Ontario Immigrant Nominee Program 2026: OINP streams, the Expression of Interest, enhanced vs base nomination and how to apply. Talk to a licensed RCIC.",
  path: PATH,
  keywords: [
    "Ontario Immigrant Nominee Program",
    "OINP 2026",
    "Ontario PNP",
    "OINP Expression of Interest",
    "OINP streams",
    "how to apply OINP",
  ],
});

const faqs = [
  {
    q: "What is the Ontario Immigrant Nominee Program (OINP)?",
    a: "The Ontario Immigrant Nominee Program (OINP) is Ontario's economic immigration program. It lets the province nominate workers, graduates and entrepreneurs whose skills meet Ontario's labour-market needs. A nomination is not permanent residence. It is a provincial recommendation you then use to apply to IRCC for PR. The OINP runs streams across three broad categories: Human Capital, Employer Job Offer and Business. Note that several streams are being redesigned in 2026, so always confirm current rules on ontario.ca.",
  },
  {
    q: "What is the OINP Expression of Interest?",
    a: "Most OINP streams use an Expression of Interest (EOI) system. You create a profile and score points against factors such as work experience, education, language and your job offer or ties to Ontario. Ontario then issues Invitations to Apply (ITAs) to the highest-ranked candidates in periodic, often occupation-targeted draws. Submitting an EOI does not guarantee an invitation. Eligibility only puts you in the pool. Because the OINP is being redesigned in 2026, the way the EOI works for some streams is changing; confirm the current process on ontario.ca.",
  },
  {
    q: "Is the OINP changing in 2026?",
    a: "Yes. Ontario announced an OINP redesign and, effective late May 2026, several legacy streams lost their previous regulatory basis while replacement rules were still being finalised. Applications already submitted, and complete files that received an Invitation to Apply before the change, are generally assessed under the prior rules, but new criteria for the redesigned streams may differ. Treat any 2026 stream details as transitioning and verify the current position on the official OINP page at ontario.ca before you act.",
  },
  {
    q: "What is the difference between an enhanced and a base OINP nomination?",
    a: "An enhanced OINP nomination is aligned with federal Express Entry: you must already be in the Express Entry pool, and the nomination adds 600 CRS points, which in recent draws has placed candidates well above the cut-off, though IRCC still issues the Invitation to Apply at the next draw. Ontario's Human Capital Priorities, French-Speaking Skilled Worker and Skilled Trades streams have historically been enhanced. A base nomination is not linked to Express Entry. Once nominated, you submit a separate paper permanent-residence application directly to IRCC, which is generally processed more slowly.",
  },
  {
    q: "Do I need a job offer for the OINP?",
    a: "It depends on the stream. The Employer Job Offer category requires a valid, permanent, full-time job offer from an eligible Ontario employer, and employer registration is now part of the process. Human Capital streams such as Human Capital Priorities and the graduate streams (Masters and PhD) generally do not require a job offer, focusing instead on Express Entry profile, education and language. The Entrepreneur stream requires a business plan and investment rather than a job offer. We can confirm which route fits your profile under the current rules.",
  },
  {
    q: "How long does the OINP take?",
    a: "Timelines run in two stages. Ontario's published service standard for processing most OINP nomination applications has historically been around 30 to 90 days after you submit a complete application, though this varies by stream and volume. Once nominated, you apply to IRCC for permanent residence, an enhanced (Express Entry) application is processed in roughly six months, while a base, paper-based application generally takes longer. With the 2026 redesign underway, confirm current processing times on ontario.ca.",
  },
  {
    q: "How much does the OINP cost?",
    a: "OINP application fees vary by stream and have historically ranged from about $1,500 for Express Entry-aligned and graduate streams up to roughly $1,500–$2,000 for Employer Job Offer applications, with a higher fee for positions in the Greater Toronto Area. The Entrepreneur stream carries its own fee structure. These provincial fees are separate from the IRCC permanent-residence fees you pay at the federal stage. Fees change, so confirm current amounts on ontario.ca before applying.",
  },
  {
    q: "Does Wild Mountain Immigration handle Ontario applications?",
    a: "Yes. Wild Mountain Immigration is based in Canmore, Alberta but represents clients across Canada and abroad, including those targeting Ontario through the OINP. Working under a licensed RCIC, our team assesses your profile, identifies the strongest current OINP stream, and manages the Expression of Interest, nomination and permanent-residence applications. Given the 2026 redesign, we keep your strategy aligned with the rules that are actually in force when you apply.",
  },
];

export default function OntarioPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario Immigrant Nominee Program (OINP), 2026 RCIC Guide",
            description:
              "Ontario Immigrant Nominee Program 2026: OINP streams, the Expression of Interest, enhanced vs base nomination and how to apply, plus the 2026 redesign.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "OINP application support",
            description:
              "Ontario Immigrant Nominee Program 2026: OINP streams, the Expression of Interest, enhanced vs base nomination and how to apply, plus the 2026 redesign.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Provincial Nominee Programs"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: PATH },
        ]}
        title={<>Ontario Immigrant Nominee Program <span className="text-brand">(OINP)</span></>}
        lede={
          <p>
            The <strong>Ontario Immigrant Nominee Program</strong> lets Ontario nominate skilled workers, graduates and
            entrepreneurs for permanent residence, and an Express Entry-aligned nomination adds 600 CRS points. Ontario is
            redesigning the OINP in 2026, so several streams and criteria are changing.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the OINP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With the OINP redesign underway in 2026, stream choice matters. Get an honest assessment from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Manitoba (MPNP)", href: "/pnp/manitoba", note: "Manitoba's streams" },
                { label: "Nova Scotia (NSNP)", href: "/pnp/nova-scotia", note: "Atlantic Canada route" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Ontario Immigrant Nominee Program (OINP) is Ontario's economic immigration program. It nominates skilled workers, graduates and entrepreneurs whose skills meet provincial labour needs. Its streams sit in three categories (Human Capital, Employer Job Offer and Business), and most use an Expression of Interest. A nomination is a provincial recommendation toward permanent residence, not PR itself. An enhanced, Express Entry-aligned nomination adds 600 CRS points, while a base nomination means a separate application to IRCC."
            items={[
              <>The <strong>Ontario Immigrant Nominee Program (OINP)</strong> nominates workers, graduates and entrepreneurs for permanent residence in Ontario.</>,
              <>Its streams fall into three broad categories: <strong>Human Capital</strong>, <strong>Employer Job Offer</strong> and <strong>Business</strong>.</>,
              <>An <strong>enhanced (Express Entry-aligned) nomination adds 600 CRS points</strong>; a <strong>base nomination</strong> is a separate paper application to IRCC.</>,
              <>Ontario is the <strong>largest PNP</strong> by allocation, about <strong>14,119 nominations</strong> for 2026.</>,
              <>Ontario announced a <strong>2026 OINP redesign</strong>: several streams and criteria are changing, so confirm current rules on ontario.ca.</>,
            ]}
          />

          <Callout type="warning" title="The OINP is being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective late May 2026 several legacy streams lost
            their previous regulatory basis while replacement rules were still being finalised. Treat the stream details
            below as <strong>current/transitioning</strong> rather than settled. Applications already submitted, and complete
            files that received an Invitation to Apply before the change, are generally assessed under the prior rules, but
            new criteria may differ. Always confirm the live position on the official OINP page at <strong>ontario.ca</strong>{" "}
            before you act. Figures and rules change frequently.
          </Callout>

          <h2>What is the Ontario Immigrant Nominee Program?</h2>
          <p>
            The <strong>Ontario Immigrant Nominee Program (OINP)</strong> is Ontario&apos;s economic immigration program, the provincial half of Canada&apos;s wider <a href="/pnp">Provincial Nominee Program</a>. It lets Ontario
            nominate people whose skills, education and experience match the province&apos;s labour-market and economic
            needs. A provincial nomination is your stepping stone: you use it to apply to IRCC for permanent residence, but
            IRCC still makes the final PR decision on a separate application.
          </p>
          <p>
            Ontario runs the country&apos;s largest provincial program. For 2026, its nomination allocation is roughly{" "}
            <strong>14,119</strong>, the biggest of any PNP (source: ontario.ca / IRCC, May 2026). Even so, demand far
            exceeds supply, so the <strong>Ontario PNP</strong> is highly competitive and meeting the minimum eligibility is
            not the same as receiving an invitation. With the 2026 redesign underway, the program is also in transition, so
            verify current rules before committing time and fees.
          </p>

          <h2>The three OINP categories and their streams</h2>
          <p>
            The OINP organises its streams into three broad categories. <strong>Human Capital</strong> targets skilled
            workers and graduates, often through Express Entry. The <strong>Employer Job Offer</strong> category is for
            people with a permanent job offer from an eligible Ontario employer. The <strong>Business</strong> category is
            for entrepreneurs who will establish or buy an Ontario business. The table below links the main{" "}
            <strong>OINP streams</strong> within each category, note that several are being consolidated or revised under the
            2026 redesign.
          </p>
          <DataTable
            headers={["OINP stream", "Category", "Type"]}
            rows={[
              [<a key="hcp" href="/pnp/ontario/human-capital-priorities">Human Capital Priorities</a>, "Human Capital", "Enhanced (Express Entry +600 CRS)"],
              [<a key="fr" href="/pnp/ontario/french-speaking-skilled-worker">French-Speaking Skilled Worker</a>, "Human Capital", "Enhanced (Express Entry +600 CRS)"],
              [<a key="trades" href="/pnp/ontario/skilled-trades">Skilled Trades</a>, "Human Capital", "Enhanced (Express Entry +600 CRS)"],
              [<a key="masters" href="/pnp/ontario/masters-graduate">Masters Graduate</a>, "Human Capital", "Base (paper application to IRCC)"],
              [<a key="phd" href="/pnp/ontario/phd-graduate">PhD Graduate</a>, "Human Capital", "Base (paper application to IRCC)"],
              [<a key="ejo" href="/pnp/ontario/employer-job-offer">Employer Job Offer</a>, "Employer Job Offer", "Base (employer registration required)"],
              [<a key="ent" href="/pnp/ontario/entrepreneur">Entrepreneur</a>, "Business", "Base (business plan & investment)"],
            ]}
            caption="Main OINP streams by category (ontario.ca, 2026). Streams are being redesigned in 2026, eligibility does not guarantee an invitation, and details may change."
          />
          <Callout type="brand" title="Where the OINP streams are heading in 2026">
            Under the redesign, Ontario is consolidating its three former Employer Job Offer streams into a single{" "}
            <strong>Employer Job Offer</strong> route (with TEER-based tracks), and has signalled a new <strong>Priority
            Healthcare stream</strong> and an <strong>Exceptional Talent stream</strong> plus a revamped Entrepreneur stream.
            Because replacement rules were still being published as of May 2026, we treat these as forthcoming and frame the
            existing streams as current/transitioning.
          </Callout>

          <h2>Enhanced vs base OINP nomination: the +600 CRS difference</h2>
          <p>
            As with every PNP, this distinction changes your whole timeline. An <strong>enhanced</strong> OINP nomination is
            aligned with federal <a href="/express-entry">Express Entry</a>: you must already hold an active Express Entry
            profile, and the nomination adds <strong>600 CRS points</strong> to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score. That boost lifts
            most candidates well above the cut-off. In recent draws it has been more than enough to earn an Invitation to Apply at the next Express Entry
            draw, though IRCC still issues the invitation.</p>
          <p>Ontario&apos;s <a href="/pnp/ontario/human-capital-priorities">Human Capital Priorities</a>,{" "}
            <a href="/pnp/ontario/french-speaking-skilled-worker">French-Speaking Skilled Worker</a> and{" "}
            <a href="/pnp/ontario/skilled-trades">Skilled Trades</a> streams have historically been enhanced. Candidates with
            skilled Canadian work experience may also qualify under the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> inside Express Entry.
          </p>
          <p>
            A <strong>base</strong> (or &quot;paper&quot;) nomination is <em>not</em> connected to Express Entry. Once Ontario
            nominates you under a base stream, such as the Masters Graduate, PhD Graduate, Employer Job Offer or Entrepreneur
            streams, you submit a separate permanent-residence application directly to IRCC. It earns no CRS points and is
            generally processed more slowly. Not sure where your federal score sits? Because the enhanced streams rank on CRS,
            our <a href="/tools/crs-calculator">free CRS calculator</a> doubles as a practical <strong>OINP points
            calculator</strong> for those Express Entry-aligned routes.
          </p>

          <h2>How the OINP Expression of Interest works</h2>
          <p>
            Most OINP streams use an <strong>Expression of Interest (EOI)</strong> system. You create a profile and the
            program scores you against factors such as work experience, education, official-language ability, and your job
            offer or ties to Ontario. Ontario then issues <strong>Invitations to Apply (ITAs)</strong> to the highest-ranked
            candidates in periodic draws, which are frequently targeted at specific occupations, categories or language
            profiles.</p>
          <p>Each <strong>OINP draw</strong> can set its own minimum score and may be limited to selected{" "}
            <abbr title="National Occupational Classification">NOC</abbr> codes, so the <strong>OINP NOC</strong> targeting in
            a given round matters as much as your raw points. Submitting an <strong>OINP Expression of Interest</strong> places
            you in the pool. It does not guarantee an invitation.
          </p>
          <Callout type="info" title="Two rules that trip people up">
            <strong>Eligibility is not an invitation.</strong> The OINP is points-ranked and heavily oversubscribed, so
            meeting the minimum only puts you in the pool. And a <strong>nomination is not permanent residence.</strong> IRCC makes the final decision on a separate application.
          </Callout>

          <h2>OINP eligibility</h2>
          <p>
            Requirements differ by stream, but a few themes run through the program. Human Capital streams generally look at
            your <a href="/express-entry">Express Entry</a> profile, education, skilled work experience and language results,
            and the graduate streams (<a href="/pnp/ontario/masters-graduate">Masters Graduate</a> and{" "}
            <a href="/pnp/ontario/phd-graduate">PhD Graduate</a>) add a recent eligible Ontario credential, often after a{" "}
            <a href="/study-permit">study permit</a> and a <a href="/work-permits/pgwp">Post-Graduation Work Permit</a>.</p>
          <p>The{" "}
            <a href="/pnp/ontario/employer-job-offer">Employer Job Offer</a> category requires a permanent, full-time{" "}
            <a href="/work-permits">job offer</a> from an eligible Ontario employer, and <strong>employer registration is now
            part of the process</strong>. The <a href="/pnp/ontario/entrepreneur">Entrepreneur</a> stream tests net worth,
            investment and a viable business plan rather than a job offer. Because the published criteria are detailed and, in
            2026, actively changing, the safest first step is a profile review against the current ontario.ca program
            requirements.
          </p>

          <h2>How to apply for the OINP</h2>
          <p>
            <strong>How to apply for the OINP</strong> follows a clear sequence for most streams, though the redesign may
            adjust individual steps. Confirm you meet a stream&apos;s requirements, submit an Expression of Interest where the
            stream uses one, and wait to see whether your score earns an Invitation to Apply. If invited, you submit a
            complete nomination application with supporting documents; once nominated, you apply to IRCC for permanent
            residence.
          </p>
          <Steps
            steps={[
              { title: "Confirm your stream", desc: "Match your profile to a current OINP stream, Human Capital, Employer Job Offer or Business, under the rules in force now." },
              { title: "Submit your EOI", desc: "Create an Expression of Interest profile where the stream uses one, and maximise every eligible point. For enhanced streams, keep an active Express Entry profile." },
              { title: "Receive an ITA & apply", desc: "If invited, file a complete nomination application within the deadline. Missing documents is a common reason for refusal." },
              { title: "Apply to IRCC for PR", desc: "Use the nomination to apply for permanent residence, through Express Entry (enhanced, +600 CRS) or a separate paper application (base)." },
            ]}
          />

          <h2>OINP processing times, fees and the 2026 outlook</h2>
          <p>
            There are two stages, each with its own timeline and fee. The <strong>OINP processing time</strong> for a complete
            nomination application has historically sat in the region of <strong>30 to 90 days</strong> under Ontario&apos;s
            published service standard, varying by stream and volume. Once nominated, an enhanced Express Entry application to
            IRCC is typically processed in about <strong>six months</strong>, while a base paper application generally takes
            longer.
          </p>
          <p>
            On fees, OINP application fees have historically ranged from about <strong>$1,500</strong> for Express
            Entry-aligned and graduate streams up to roughly <strong>$1,500–$2,000</strong> for Employer Job Offer
            applications, with a higher amount for Greater Toronto Area positions; the{" "}
            <a href="/pnp/ontario/entrepreneur">Entrepreneur</a> stream carries its own fee. These provincial amounts are
            separate from the IRCC permanent-residence fees at the federal stage, and from our own professional{" "}
            <a href="/fees">fees</a>. With the <strong>OINP 2026</strong> redesign in progress, both processing times and fees
            may shift, confirm the current figures on ontario.ca before you apply.
          </p>

          <h2>How Wild Mountain Immigration helps with the OINP</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Ontario&apos;s current priorities, confirms whether the
            stream you want is enhanced or base, and builds the <a href="/express-entry">Express Entry</a> and Expression of
            Interest strategy that ranks you well. Our team works under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497) to prepare a nomination
            application that stands up to scrutiny, and we represent you with both Ontario and IRCC.</p>
          <p>With the OINP being
            redesigned in 2026, we keep your strategy aligned to the rules that are actually in force when you apply, and we
            give you a candid read on your realistic chances first. We are a Canmore, Alberta firm acting online for clients
            across Canada and abroad, so distance from Ontario is no obstacle.
          </p>
          <Steps
            steps={[
              { title: "Confirm the right stream", desc: "We match your profile to a current OINP stream and confirm whether it is enhanced (Express Entry, +600 CRS) or a base paper nomination, under the rules in force now." },
              { title: "Build the EOI and profile", desc: "We prepare your Express Entry profile where the stream is enhanced, maximise every Expression of Interest point, and track the redesign so nothing catches you out." },
              { title: "Nominate and apply for PR", desc: "After an Invitation to Apply we file a complete nomination, then represent you with IRCC through Express Entry or a base permanent-residence application." },
            ]}
          />
          <p>
            Not sure where to begin? Compare the <strong>Ontario Immigrant Nominee Program</strong> with our{" "}
            <a href="/alberta-immigration">Alberta program</a> and the <a href="/pnp/manitoba">Manitoba MPNP</a>, read how the
            wider <a href="/pnp">Provincial Nominee Program</a> works, and see our <a href="/fees">fees</a> before you reach out
            on the <a href="/contact">contact</a> page.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the OINP streams</h2>
          <p className="mt-3 text-ink-soft">Ontario&apos;s streams sit in three categories. Find the route that fits your profile, while the 2026 redesign settles.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Human Capital Priorities" desc="Enhanced (+600 CRS) Express Entry route for skilled workers Ontario draws from the federal pool." href="/pnp/ontario/human-capital-priorities" />
            <FeatureCard icon={Languages} title="French-Speaking Skilled Worker" desc="Enhanced (+600 CRS) stream for Express Entry candidates with strong French and English." href="/pnp/ontario/french-speaking-skilled-worker" />
            <FeatureCard icon={Wrench} title="Skilled Trades" desc="Enhanced (+600 CRS) stream for tradespeople with eligible Ontario work experience in the Express Entry pool." href="/pnp/ontario/skilled-trades" />
            <FeatureCard icon={GraduationCap} title="Masters & PhD Graduate" desc="Base streams for graduates of eligible Ontario universities, no job offer required." href="/pnp/ontario/masters-graduate" />
            <FeatureCard icon={Briefcase} title="Employer Job Offer" desc="Base route for a permanent, full-time job offer from an eligible Ontario employer, with employer registration." href="/pnp/ontario/employer-job-offer" />
            <FeatureCard icon={Building2} title="Entrepreneur" desc="Business category route for those who will establish or buy a qualifying Ontario business." href="/pnp/ontario/entrepreneur" />
          </FeatureGrid>
        </div>
        <div className="mt-10 text-center">
          <p className="text-ink-soft">
            Weighing provinces? Compare the <a href="/alberta-immigration" className="text-brand underline">Alberta program</a>,
            the <a href="/pnp/manitoba" className="text-brand underline">Manitoba MPNP</a>, or start with our overview of how to{" "}
            <a href="/immigrate" className="text-brand underline">immigrate to Canada</a> and your{" "}
            <a href="/tools/crs-calculator" className="text-brand underline">CRS score</a>.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Find out if the OINP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on the strongest OINP stream for you, and how the 2026 redesign affects your plan."
      />
    </>
  );
}
