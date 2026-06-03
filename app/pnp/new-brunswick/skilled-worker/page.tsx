import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/new-brunswick/skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "New Brunswick Skilled Worker Stream 2026",
  titleAbsolute: "NB Skilled Worker Stream 2026: NBPNP Base Route",
  description:
    "NB Skilled Worker Stream 2026: a base NBPNP route to PR for a full-time NB job offer with employer support. See if you qualify with a licensed RCIC.",
  path: PATH,
  keywords: [
    "New Brunswick Skilled Worker Stream",
    "NB Skilled Worker",
    "NB job offer PR",
    "New Brunswick employer support immigration",
    "NBPNP base nomination",
    "how to apply NB Skilled Worker",
  ],
});

const faqs = [
  {
    q: "Do I need a job offer for the New Brunswick Skilled Worker Stream?",
    a: "Yes. The New Brunswick Skilled Worker Stream is an employer-driven, base NBPNP route, so you need a permanent, full-time job offer from an eligible New Brunswick employer who is willing to support your application. The employer's support is central, without a genuine NB job offer there is no eligibility under this stream. Since May 4, 2026, new Invitations to Apply have also been limited to Healthcare, Education and Construction Trades occupations, so the offer must usually fall in one of those sectors.",
  },
  {
    q: "Is the New Brunswick Skilled Worker Stream enhanced or base?",
    a: "It is a base nomination. Unlike the enhanced NB Express Entry route, the Skilled Worker Stream is not connected to federal Express Entry and adds no CRS points. Once New Brunswick nominates you, you submit a separate, paper permanent-residence application directly to IRCC, which is generally processed more slowly than an enhanced Express Entry application. If you already have an Express Entry profile, the enhanced route may be faster, we assess both before recommending a path.",
  },
  {
    q: "What language level do I need for the NB Skilled Worker Stream?",
    a: "You need an approved language test (English or French) showing at least Canadian Language Benchmark (CLB) 4, measured on your lowest of four abilities. Some occupations, particularly regulated roles in healthcare and the trades, require a higher level, and a stronger result strengthens any application. Test results are generally valid for two years. Always confirm the current minimum for your specific occupation on welcomenb.ca before submitting.",
  },
  {
    q: "Which occupations are eligible for the NB Skilled Worker Stream in 2026?",
    a: "Since May 4, 2026, new Invitations to Apply under the Skilled Worker Stream have been limited to Healthcare, Education and Construction Trades occupations. New Brunswick also publishes a list of excluded occupations, including accommodation and food services, retail, shipping, food-processing, bookkeeping and administrative roles. Because these eligible and excluded lists change with the province's labour-market needs, confirm your occupation on welcomenb.ca before applying.",
  },
  {
    q: "How much money do I need to settle in New Brunswick?",
    a: "Most New Brunswick Skilled Worker applicants must show enough settlement funds to support themselves and any accompanying family members on arrival, unless they are already living and working in the province. The amount scales with family size and is updated periodically. The provincial application fee for the Skilled Worker Stream is around $250, separate from your federal IRCC fees. Confirm the current settlement-funds figure and fees on welcomenb.ca before you apply.",
  },
  {
    q: "How long does the NB Skilled Worker Stream take?",
    a: "New Brunswick does not publish a single guaranteed timeline, and it depends on your file and current volumes. Because the Skilled Worker Stream is a base nomination, the federal stage is a separate paper application: IRCC generally targets longer processing for base provincial-nominee applications than for enhanced Express Entry ones. Both the provincial and federal timelines move with demand, so treat any estimate as approximate and verify on welcomenb.ca and canada.ca.",
  },
  {
    q: "Does a New Brunswick nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence itself. After New Brunswick nominates you, you still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. As a licensed RCIC we build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function NewBrunswickSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "New Brunswick Skilled Worker Stream 2026 (NBPNP Base Guide)",
            description:
              "NB Skilled Worker Stream 2026: base NBPNP route for workers with a full-time NB job offer and employer support. Eligibility, fees, how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "New Brunswick Skilled Worker Stream application support",
            description:
              "NB Skilled Worker Stream 2026: base NBPNP route for workers with a full-time NB job offer and employer support. Eligibility, fees, how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="New Brunswick (NBPNP), Skilled Worker"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "New Brunswick", path: "/pnp/new-brunswick" },
          { name: "Skilled Worker", path: PATH },
        ]}
        title={<>New Brunswick Skilled Worker Stream <span className="text-brand">2026</span></>}
        lede={
          <p>
            The <strong>New Brunswick Skilled Worker Stream</strong> (the <strong>NB Skilled Worker Stream</strong>) is a base
            NBPNP route for workers who hold a permanent, full-time New Brunswick job offer with employer support. This
            RCIC-reviewed guide covers eligibility, the 2026 sector limits, fees and exactly how to apply for NB job offer PR.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have an NB job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Skilled Worker Stream turns on your employer&apos;s support. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "New Brunswick (NBPNP)", href: "/pnp/new-brunswick", note: "All NB streams explained" },
                { label: "NB Express Entry (Labour Market)", href: "/pnp/new-brunswick/express-entry-labour-market", note: "The enhanced +600 CRS route" },
                { label: "NB Critical Worker Pilot", href: "/pnp/new-brunswick/critical-worker-pilot", note: "Lower-language (~CLB 4) route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The New Brunswick Skilled Worker Stream is a base route of the New Brunswick Provincial Nominee Program (NBPNP) for workers who hold a permanent, full-time New Brunswick job offer with employer support. It weighs your job offer, work experience, language and ties to the province. Because it is not Express Entry-aligned, a nomination is a provincial recommendation toward permanent residence that leads to a separate application to IRCC, not 600 CRS points."
            items={[
              <>The <strong>New Brunswick Skilled Worker Stream</strong> is a <strong>base</strong> NBPNP route for workers with a permanent, full-time NB job offer and <strong>employer support</strong>.</>,
              <>It is <strong>not</strong> tied to Express Entry, once nominated you file a <strong>separate IRCC paper application</strong> for permanent residence.</>,
              <>Core eligibility: an <strong>NB employer job offer</strong>, qualifying experience, language at <strong>CLB 4+</strong>, education and settlement funds.</>,
              <>Since <strong>May 4, 2026</strong>, new Invitations to Apply are limited to <strong>Healthcare, Education and Construction Trades</strong>.</>,
              <>Selection runs through the <strong>INB Portal</strong> by sector and labour need, <strong>eligibility does not guarantee an invitation</strong>.</>,
            ]}
          />

          <h2>What is the New Brunswick Skilled Worker Stream?</h2>
          <p>
            The <strong>New Brunswick Skilled Worker Stream</strong>, often shortened to the <strong>NB Skilled Worker
            Stream</strong>, is the base, employer-driven route of the New Brunswick Provincial Nominee Program (NBPNP). It is
            a non-Express Entry stream designed for skilled workers who already hold a permanent, full-time job offer from an
            eligible New Brunswick employer who is willing to provide employer support for the application. In other words,
            the stream is built around a genuine <strong>permanent full-time job offer</strong>: the employer&apos;s backing is
            what makes you eligible, and it anchors your case for permanent residence in the province.
          </p>
          <p>
            New Brunswick&apos;s nomination space is limited. Its 2025 allocation was about <strong>2,750</strong> spaces shared
            between the PNP and the Atlantic Immigration Program, and the 2026 figure is expected to remain tight after
            federal allocations were cut nationwide (source: welcomenb.ca / IRCC, May 2026). Because supply is constrained,
            the province directs Skilled Worker invitations toward its highest-priority sectors, so meeting the minimum
            requirements is not the same as receiving an Invitation to Apply (ITA). Figures and policies change frequently,
            so always verify the current rules before acting.
          </p>
          <Callout type="brand" title="Base nomination, a separate IRCC application">
            The Skilled Worker Stream is a <strong>base nomination</strong>. It adds no CRS points and is not connected to
            Express Entry. Once New Brunswick nominates you, you submit a separate, paper permanent-residence application
            directly to IRCC. If you already have an Express Entry profile, the enhanced{" "}
            <a href="/pnp/new-brunswick/express-entry-labour-market">NB Express Entry (Labour Market) route</a> may reach PR
            faster.
          </Callout>

          <h2>Who is the NB Skilled Worker Stream for?</h2>
          <p>
            This stream suits workers whose strongest asset is a real, ongoing New Brunswick job rather than a high federal
            score. If a New Brunswick employer wants to keep you on permanently and is prepared to support your application,
            the Skilled Worker Stream converts that <strong>NB job offer into a PR</strong> pathway. It is the main base
            option for people who may not have an Express Entry profile, or whose Comprehensive Ranking System score is not
            competitive in federal draws. Not sure where your federal score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <p>
            Two sibling routes sit alongside it. The enhanced{" "}
            <a href="/pnp/new-brunswick/express-entry-labour-market">NB Express Entry (Labour Market) stream</a> adds 600 CRS
            points for candidates already in the federal pool, while the{" "}
            <a href="/pnp/new-brunswick/critical-worker-pilot">NB Critical Worker Pilot</a> supports lower-language
            candidates (around CLB 4) hired by a small number of designated employers. The right route depends on your
            occupation, language and the employer doing the hiring.
          </p>

          <h2>What are the NB Skilled Worker Stream eligibility requirements?</h2>
          <p>
            <strong>NB Skilled Worker eligibility</strong> rests on a connected set of requirements that you must meet when
            you submit your expression of interest. Missing just one can lead to a refusal, whether that is an occupation
            outside the current sector limits, a language ability one band short, or insufficient settlement funds. The
            table below summarises the core 2026 requirements; the official, controlling list lives on welcomenb.ca and
            changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the Skilled Worker Stream asks for"]}
            rows={[
              ["NB job offer", "A permanent, full-time job offer from an eligible New Brunswick employer who supports your application, new ITAs limited to Healthcare, Education and Construction Trades since May 4, 2026"],
              ["Employer support", "The NB employer must back the nomination; the offer must be genuine and in an eligible (non-excluded) occupation"],
              ["Work experience", "Qualifying, recent work experience that matches your offered occupation"],
              ["Language", "Approved English or French test at CLB 4+ (lowest of four abilities); some regulated roles need higher, results valid ~2 years"],
              ["Education", "At least secondary-school completion; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Settlement funds", "Enough funds to support yourself and any accompanying family on arrival (scales with family size; waived for some in-NB workers)"],
              ["Intent to settle", "A genuine intention to live and work in New Brunswick"],
            ]}
            caption="New Brunswick Skilled Worker Stream core eligibility, accurate as of May 2026 (welcomenb.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The CLB level is taken from the lowest of your four abilities, reading, writing, listening and speaking, so a
            single weak skill can drop you below the threshold for your occupation. Lifting your weakest band is often the
            most valuable thing you can do before submitting.
          </Callout>

          <h2>What occupations and sector limits apply in 2026?</h2>
          <p>
            Two factors define the Skilled Worker Stream in 2026. First, the <strong>limited allocation</strong>: with
            roughly 2,750 spaces shared between the PNP and the Atlantic Immigration Program, New Brunswick runs a
            controlled, invitation-driven intake rather than a first-come, first-served one. Second, <strong>sector
            limits</strong>: since <strong>May 4, 2026</strong>, new Invitations to Apply under the Skilled Worker Stream
            have been restricted to <strong>Healthcare, Education and Construction Trades</strong> occupations.
          </p>
          <p>
            Within those sectors, eligibility still turns on your occupation&apos;s <strong>NOC TEER</strong> category and whether
            it sits among the occupations in demand New Brunswick is currently prioritising. New Brunswick also publishes a
            list of <strong>excluded occupations</strong> that are not eligible for the stream, including accommodation and
            food services, retail, shipping, food-processing, bookkeeping and many administrative roles.</p>
          <p>Because this
            designated occupation list and the excluded list are detailed and updated regularly, the safest step is a profile
            review against the current welcomenb.ca program guide before your employer commits to supporting an application.
          </p>
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            New Brunswick selects by sector and labour-market need, not a numeric ranking, and there is no published
            cut-off score. Many otherwise-eligible profiles will not receive an Invitation to Apply this cycle. We will give
            you a candid read on your realistic chances before you and your employer invest time and fees.
          </Callout>

          <h2>How does it compare with the other NB streams?</h2>
          <p>
            The simplest way to place the Skilled Worker Stream is to set it beside New Brunswick&apos;s enhanced route and its
            designated-employer pilot. All three can lead to permanent residence, the right one depends on your occupation,
            language and ties to the province.
          </p>
          <DataTable
            headers={["Feature", "Skilled Worker", "Express Entry (Labour Market)", "Critical Worker Pilot"]}
            rows={[
              ["Stream type", "Base", "Enhanced (+600 CRS)", "Base (pilot)"],
              ["Express Entry profile", "Not required", "Required", "Not required"],
              ["NB job offer", "Required (employer support)", "Generally required", "Required (designated employer)"],
              ["Language", "CLB 4+", "Higher (per occupation)", "~CLB 4"],
              ["After nomination", "Separate IRCC paper application", "Federal Express Entry draw", "Separate IRCC paper application"],
            ]}
            caption="New Brunswick Skilled Worker vs other NB routes (welcomenb.ca, May 2026). Eligibility does not guarantee an Invitation to Apply."
          />

          <h2>What are the fees and how long does it take?</h2>
          <p>
            Submitting an expression of interest through the INB Portal is <strong>free</strong>. If you are invited and
            apply, the Skilled Worker Stream charges a provincial application fee of around <strong>$250</strong>. These
            provincial amounts are separate from the IRCC permanent-residence fees you pay at the federal stage, and all
            figures change, confirm current fees on welcomenb.ca before applying.
          </p>
          <p>
            On timing, New Brunswick does not publish a single guaranteed processing time, and your timeline depends on the
            completeness of your file and current volumes. Because the Skilled Worker Stream is a <strong>base
            nomination</strong>, the federal stage is a separate paper application, which IRCC generally processes more
            slowly than an enhanced Express Entry application (source: canada.ca, processing times, 2026). Both the
            provincial and federal timelines move with demand, so treat any estimate as approximate and verify on
            welcomenb.ca and canada.ca.
          </p>

          <h2>How to apply for the NB Skilled Worker Stream step by step</h2>
          <p>
            <strong>How to apply for the New Brunswick Skilled Worker Stream</strong> follows a clear sequence built around
            your employer-supported job offer. The steps below show the path from confirming eligibility to a federal
            permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm a supported NB job offer", desc: "Secure a permanent, full-time offer from an eligible New Brunswick employer who will support your nomination, in a currently eligible occupation (Healthcare, Education or Construction Trades)." },
              { title: "Check eligibility & gather documents", desc: "Confirm your occupation is not excluded, take an approved language test (CLB 4+), obtain an ECA for foreign education, and prepare settlement-funds and experience evidence." },
              { title: "Submit your INB Portal expression of interest", desc: "Create and submit an expression of interest in the INB Portal. It stays valid for 365 days while New Brunswick reviews profiles against its sector priorities." },
              { title: "Receive an Invitation to Apply", desc: "If New Brunswick selects your profile by sector and labour need, it issues an ITA. Eligibility alone does not guarantee this." },
              { title: "Apply to the NBPNP & get nominated", desc: "Submit a complete Skilled Worker application with the ~$250 fee and your employer's supporting documents. On approval, New Brunswick nominates you." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain helps with your NB Skilled Worker application</h2>
          <p>
            We assess your profile against New Brunswick&apos;s current sector priorities, confirm whether your occupation is
            eligible and whether your employer&apos;s support meets the program&apos;s expectations, and prepare an INB Portal
            profile and base-nomination application that stand up to scrutiny. Our team is led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497); we represent you with the
            province and with IRCC, work entirely online, and catch the avoidable mistakes that cause refusals: a wrong
            occupation classification, a language band one short, or a settlement-funds gap.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            NB Skilled Worker Stream application an expert check before you submit. Figures for the New Brunswick Skilled
            Worker Stream here are current to 2026 and change frequently, so we always confirm the live welcomenb.ca page
            before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have a New Brunswick job offer?"
        sub="Get started with a licensed RCIC for an honest read on your eligibility for the Skilled Worker Stream and your strongest route to PR."
      />
    </>
  );
}
