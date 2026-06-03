import type { Metadata } from "next";
import { Mountain, Map, Compass, Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { img } from "@/lib/images";
import { consult } from "@/lib/site";

const PATH = "/pnp";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Provincial Nominee Program Canada, PNP 2026 Guide",
  titleAbsolute: "Provincial Nominee Program (PNP) 2026 Guide",
  description:
    "Provincial Nominee Program Canada 2026: how the PNP works, enhanced vs base nomination and the +600 CRS boost, explained by a licensed RCIC. Talk to us.",
  path: PATH,
  keywords: [
    "provincial nominee program",
    "provincial nominee program canada",
    "pnp canada",
    "pnp 2026",
    "how does the pnp work",
    "enhanced vs base nomination",
    "provincial nomination 600 crs",
  ],
});

const faqs = [
  {
    q: "How does the Provincial Nominee Program work?",
    a: "Each province (except Quebec) runs its own immigration streams aimed at workers, graduates and entrepreneurs it needs. You submit an expression of interest, and if the province invites you, you apply for a provincial nomination. A nomination is not permanent residence, it is a strong recommendation that you then use to apply to IRCC for PR. An 'enhanced' nomination through Express Entry adds 600 CRS points; a 'base' nomination is a separate paper application made directly to IRCC.",
  },
  {
    q: "What is the difference between enhanced and base nomination?",
    a: "An enhanced nomination is aligned with Express Entry: you must already be in the Express Entry pool, and the nomination adds 600 CRS points, which in recent draws has been more than enough to clear the cut-off, though IRCC still issues the invitation. A base (or 'paper') nomination is not linked to Express Entry, once nominated, you submit a separate permanent-residence application directly to IRCC, which is generally processed more slowly than an Express Entry application.",
  },
  {
    q: "Does a provincial nomination really add 600 CRS points?",
    a: "Yes, but only an enhanced (Express Entry-aligned) nomination. The 600 points are added to your Comprehensive Ranking System score, which lifts almost any candidate above the cut-off for the next Express Entry PNP draw. A base nomination does not add CRS points because it does not go through Express Entry at all; it leads to a separate IRCC application instead.",
  },
  {
    q: "Which PNP is the easiest or fastest to get a nomination from?",
    a: "There is no single 'easiest' PNP, each province targets different occupations, and almost every program is now points-ranked, so meeting the minimum does not guarantee an invitation. Smaller provinces such as Newfoundland and Labrador and Saskatchewan can move quickly for in-demand occupations, while large programs like Ontario receive far more applications. The right PNP depends on your occupation, work experience and ties to a province, which is exactly what we assess in a consultation.",
  },
  {
    q: "Do I need a job offer for a provincial nomination?",
    a: "It depends on the stream. Many PNP streams are employer-driven and require a valid job offer from an employer in that province. Others, such as some Express Entry-aligned streams and occupation-targeted draws, can invite candidates without a job offer if their profile matches a provincial priority. Several provinces also run streams for international graduates and entrepreneurs with different requirements.",
  },
  {
    q: "Can I apply to more than one PNP at the same time?",
    a: "You can submit expressions of interest to more than one province, but you may only hold one provincial nomination at a time, and you must genuinely intend to live in the province that nominates you. Many candidates also keep an active Express Entry profile while pursuing a nomination, so they can be invited federally or provincially, whichever comes first.",
  },
  {
    q: "How much does a Provincial Nominee Program application cost?",
    a: "Costs vary by province. Most charge a provincial processing fee, ranging from $0 in Newfoundland and Labrador and Nova Scotia to roughly $1,500–$2,000 in Alberta, British Columbia and Ontario, on top of the federal permanent-residence fees IRCC charges separately. Business and entrepreneur streams cost considerably more. Always check the official provincial page for current fees, as several changed in 2026.",
  },
  {
    q: "Do you handle Quebec immigration through its provincial program?",
    a: "No. Quebec runs its own selection system (the CSQ, via Arrima and the PSTQ) under the Canada-Québec Accord, which is separate from the federal Provincial Nominee Program. Wild Mountain Immigration does not handle Quebec applications. We work with every other province and territory that operates a PNP.",
  },
];

export default function PnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Provincial Nominee Program Canada, The 2026 PNP Guide",
            description:
              "Provincial Nominee Program Canada 2026: how the PNP works, enhanced vs base nomination, the +600 CRS boost and every province explained by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Provincial Nominee Program application support",
            description:
              "Provincial Nominee Program Canada 2026: how the PNP works, enhanced vs base nomination, the +600 CRS boost and every province explained by a licensed RCIC.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Permanent Residence"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: PATH },
        ]}
        title={<>Provincial Nominee Program: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            The <strong>Provincial Nominee Program</strong> lets a Canadian province nominate you for permanent
            residence based on the skills it needs. An Express Entry-aligned nomination adds 600 CRS points, which in
            recent draws has comfortably cleared the cut-off, though IRCC still issues the final invitation. Every province except Quebec runs its own streams for workers, graduates
            and entrepreneurs.
          </p>
        }
        updated={UPDATED}
        image={img.rockiesAlt}
        imageAlt="Canadian Rocky Mountains representing provincial nominee program routes to permanent residence"
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">See your CRS score</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A provincial nomination adds 600 points. Check your base score first, it takes two minutes.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
                { label: "Alberta AAIP", href: "/alberta-immigration", note: "Our home province's PNP" },
                { label: "BC PNP", href: "/pnp/british-columbia", note: "British Columbia's streams" },
                { label: "Express Entry", href: "/express-entry", note: "How the +600 boost works" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Provincial Nominee Program (PNP) lets Canadian provinces and territories nominate skilled workers, graduates and entrepreneurs they need for permanent residence. Every province takes part except Quebec. A nomination supports a PR application to IRCC and, when enhanced (Express Entry aligned), adds 600 CRS points to your profile."
            items={[
              <>The <strong>Provincial Nominee Program (PNP)</strong> lets each province (except Quebec) nominate immigrants it needs for permanent residence.</>,
              <>An <strong>enhanced nomination</strong> is Express Entry-aligned and adds <strong>600 CRS points</strong>; a <strong>base nomination</strong> is a separate paper application to IRCC.</>,
              <>A nomination is <strong>not</strong> permanent residence, IRCC still makes the final PR decision on a separate application.</>,
              <>Almost every PNP is now <strong>points-ranked</strong>: meeting the minimum does not guarantee an invitation.</>,
              <>Federal allocations were cut sharply for 2025 and remain tight in <strong>2026</strong>, so streams open, close and change often.</>,
            ]}
          />

          <h2>What is the Provincial Nominee Program?</h2>
          <p>
            The <strong>Provincial Nominee Program (PNP)</strong> is the route by which Canada&apos;s provinces and
            territories select immigrants for permanent residence based on their own labour-market and economic needs.
            Under Canada&apos;s immigration system, the federal government sets overall numbers and makes the final
            permanent-residence decision, while each province runs its own streams to nominate the workers, graduates
            and entrepreneurs it wants to attract.</p>
          <p>For 2026, IRCC allocated roughly{" "}
            <strong>55,000 PNP admissions</strong> across the participating provinces and territories (source:
            canada.ca, Immigration Levels Plan 2026–2028, 2026).
          </p>
          <p>
            Every province and territory operates a PNP except <strong>Quebec</strong>, which selects its own immigrants
            under a separate agreement (more on that below). Nunavut has no PNP. That leaves eleven jurisdictions, from Alberta and British Columbia to the Atlantic provinces and the northern territories, each with its own
            streams, points grids and priorities.
          </p>

          <h2>How does the PNP work?</h2>
          <p>
            For most provinces in 2026, the PNP follows a similar shape: you submit an <strong>expression of interest
            (EOI)</strong> or profile, the province ranks candidates against a points grid, and it issues invitations to
            the strongest profiles in periodic draws. If invited, you apply for a <strong>nomination</strong>; once
            nominated, you apply to IRCC for permanent residence, either through PNP Express Entry (an enhanced,
            Express Entry-aligned nomination) or a separate base application. Two important truths run through every
            stream:
          </p>
          <Steps
            steps={[
              { title: "Express your interest", desc: "Submit an EOI or profile to a province whose streams match your occupation, experience and ties." },
              { title: "Get ranked & invited", desc: "The province scores candidates and invites the highest-ranked. Eligibility alone does not guarantee an invitation." },
              { title: "Apply for nomination", desc: "Submit your provincial application with full documentation. Approval results in a provincial nomination certificate." },
              { title: "Apply to IRCC for PR", desc: "Use the nomination to apply for permanent residence, through Express Entry (enhanced) or a separate paper application (base)." },
            ]}
          />
          <Callout type="info" title="Two rules that trip people up">
            <strong>Eligibility is not an invitation</strong>, almost every PNP is points-ranked, so meeting the
            minimum only puts you in the pool. And a <strong>nomination is not permanent residence</strong>, IRCC makes
            the final decision on a separate application.
          </Callout>

          <h2>Enhanced vs base nomination: the +600 CRS difference</h2>
          <p>
            This is the single most important distinction in the whole program, and one many guides get wrong. PNP
            streams come in two types, and which one you use changes everything about your timeline.
          </p>
          <p>
            An <strong>enhanced nomination</strong> is <em>aligned with Express Entry</em>. You must already be in the
            Express Entry pool, and the nomination adds <strong>600 CRS points</strong> to your Comprehensive Ranking
            System score. That boost lifts most candidates well above the cut-off, so in recent
            Express Entry PNP-specific draws an enhanced nomination has been more than enough to earn an Invitation to Apply. IRCC still issues that invitation, and the usual
            federal processing of about six months follows.
          </p>
          <p>
            A <strong>base nomination</strong> (sometimes called a &quot;paper&quot; nomination) is{" "}
            <em>not</em> connected to Express Entry. Once a province nominates you under a base stream, you submit a
            <strong> separate permanent-residence application directly to IRCC</strong>. It does not earn CRS points, and
            it is generally processed more slowly than an Express Entry application. Only specific, named streams in each
            province are enhanced, so confirming whether a stream is enhanced or base is one of the first things we
            check.
          </p>
          <Callout type="brand" title="Where the 600 points land">
            The 600-point boost only applies to an enhanced, Express Entry-aligned nomination. Want to see your starting
            score before the boost? Try our <a href="/tools/crs-calculator">free CRS calculator</a>.
          </Callout>

          <h2>How to get a provincial nomination</h2>
          <p>
            There is no universal checklist, each stream sets its own bar, but the steps below capture how most 2026
            nominations come together. The strongest candidates line up an occupation a province actually wants, real
            ties to that province, and clean documentation before they ever submit an EOI.
          </p>
          <Steps
            steps={[
              { title: "Match your occupation", desc: "Identify provinces whose occupations in demand (health care, trades, tech, agriculture) match your NOC code and experience." },
              { title: "Build the ties", desc: "A job offer, past study or work in the province, or family connections often raise your ranking, and are required by some streams." },
              { title: "Maximise your EOI score", desc: "Improve language results, claim every eligible point, and choose the stream where you rank highest." },
              { title: "Submit & respond fast", desc: "After an invitation, you usually have a short window to file a complete application. Missing documents is a common reason for refusal." },
            ]}
          />

          <h2>Province-by-province PNP overview (2026)</h2>
          <p>
            Below is a snapshot of every province and territory that runs a Provincial Nominee Program, with its program
            name and whether it offers an Express Entry-aligned (enhanced) pathway. Almost all of them operate at least
            one enhanced stream alongside their base streams. Figures and streams change frequently, always confirm
            against the official provincial source before you act.
          </p>
          <DataTable
            headers={["Province / Territory", "Program name", "Express Entry-aligned?"]}
            rows={[
              ["Alberta", "Alberta Advantage Immigration Program (AAIP)", "Yes, Alberta Express Entry Stream"],
              ["British Columbia", "BC Provincial Nominee Program (BC PNP)", "Yes, Express Entry BC option"],
              ["Saskatchewan", "Saskatchewan Immigrant Nominee Program (SINP)", "Yes, Saskatchewan Express Entry"],
              ["Manitoba", "Manitoba Provincial Nominee Program (MPNP)", "Base only (no enhanced stream)"],
              ["Ontario", "Ontario Immigrant Nominee Program (OINP)", "Yes, Human Capital Priorities (in redesign)"],
              ["Prince Edward Island", "PEI Provincial Nominee Program (PEI PNP)", "Yes, PEI Express Entry"],
              ["Nova Scotia", "Nova Scotia Nominee Program (NSNP)", "Yes, Nova Scotia Express Entry"],
              ["New Brunswick", "New Brunswick Provincial Nominee Program (INB)", "Yes, NB Express Entry"],
              ["Newfoundland & Labrador", "NL Provincial Nominee Program (NLPNP)", "Yes, Express Entry Skilled Worker"],
              ["Yukon", "Yukon Nominee Program (YNP)", "Yes, Yukon Express Entry"],
              ["Northwest Territories", "NWT Nominee Program (NTNP)", "Yes, NWT Express Entry"],
            ]}
            caption="Provinces and territories operating a PNP (May 2026). Quebec and Nunavut excluded, see below. Stream names and status change often."
          />
          <p>
            A few 2026 notes worth flagging. <strong>Ontario</strong> is mid-redesign: as of May 30, 2026, several
            legacy OINP streams lost their regulatory basis and replacement rules are still being published, so treat
            anything you read about Ontario&apos;s streams as provisional. <strong>British Columbia</strong> has
            consolidated its skills streams under a new &quot;Care / Build / Innovate&quot; selection model.{" "}
            <strong>Newfoundland and Labrador</strong> and <strong>Nova Scotia</strong> charge no provincial application
            fee. And the <strong>territories</strong>, Yukon and the Northwest Territories, run small, largely
            employer-driven programs with limited allocations.
          </p>

          <h2>Which PNP is easiest or fastest?</h2>
          <p>
            &quot;Which PNP is easiest?&quot; is the question we hear most, and the honest answer is that there is no
            universally easy or fast province. Because almost every PNP is now points-ranked and tied to specific
            occupations, the &quot;best&quot; province is simply the one whose priorities match <em>your</em> profile.
          </p>
          <p>
            That said, a few patterns hold in 2026. Smaller provinces such as{" "}
            <strong>Newfoundland and Labrador</strong> (which advertises a roughly 25-day provincial processing target)
            and <strong>Saskatchewan</strong> can move quickly for genuinely in-demand occupations. Large programs like{" "}
            <strong>Ontario</strong> attract far more candidates than they can nominate, so competition is intense.</p>
          <p>And
            an enhanced nomination is always the <em>fastest</em> route to PR, because the +600 CRS boost feeds straight
            into Express Entry&apos;s roughly six-month processing, whereas base nominations route through a slower,
            separate IRCC application. Rather than chasing the &quot;easiest&quot; province, we match your occupation and
            ties to the stream where you genuinely rank well.
          </p>

          <h2>PNP processing times and cost</h2>
          <p>
            There are two stages, each with its own timeline and fee. First, the <strong>provincial nomination</strong>:
            processing ranges from a few weeks in fast provinces to several months in busier ones, and provincial fees
            range from <strong>$0</strong> in Newfoundland and Labrador and Nova Scotia to roughly{" "}
            <strong>$1,500–$2,000</strong> in Alberta, British Columbia and Ontario. Business and entrepreneur streams
            cost considerably more.
          </p>
          <p>
            Second, the <strong>permanent-residence application to IRCC</strong>, which carries separate federal fees. An
            enhanced nomination processed through Express Entry is typically completed in about{" "}
            <strong>six months</strong>; a base nomination&apos;s paper application generally takes longer. Because
            allocations were cut sharply for 2025 and stay tight in 2026, streams open and close with little notice. Always confirm timelines against the live provincial page when you apply.
          </p>

          <h2>No Quebec, and how Wild Mountain Immigration helps</h2>
          <p>
            One important boundary: the Provincial Nominee Program does <strong>not</strong> include{" "}
            <strong>Quebec</strong>. Under the Canada-Québec Accord, Quebec selects its own economic immigrants through
            its own system, the Québec Selection Certificate (CSQ), issued via the Arrima portal and programs such as
            the PSTQ. It is entirely separate from the federal PNP, and <strong>Wild Mountain Immigration does not handle
            Quebec applications</strong>. We work with every other province and territory.
          </p>
          <p>
            For the rest of Canada, we help you find the province where your profile is strongest, confirm whether a
            stream is enhanced or base, build the EOI that ranks you well, and manage both the nomination and the
            permanent-residence application. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team represents you
            with the province and with IRCC, and catches the documentation gaps that cause
            avoidable refusals.</p>
          <p>Prefer to do the legwork yourself? Our lower-cost{" "}
            <a href="/contact">File Review</a> gives your own application an expert check before you submit. Whichever
            route fits, the Provincial Nominee Program can be one of the most reliable pathways to
            Canadian permanent residence when your occupation and ties are matched to the right stream.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">
            Choose your province or territory
          </h2>
          <p className="mt-3 text-ink-soft">
            We cover every province and territory except Quebec, each runs its own streams. Start with your target
            province below.
          </p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Mountain} title="Alberta (AAIP)" desc="Our home province, health, tech, construction, rural and Express Entry streams." href="/alberta-immigration" />
            <FeatureCard icon={Map} title="British Columbia (BC PNP)" desc="Skilled Worker, Health Authority, Tech and Entrepreneur, with an Express Entry BC option." href="/pnp/british-columbia" />
            <FeatureCard icon={Map} title="Saskatchewan (SINP)" desc="International Skilled Worker, Experience, Tech, Health and Agriculture Talent pathways." href="/pnp/saskatchewan" />
            <FeatureCard icon={Map} title="Manitoba (MPNP)" desc="Skilled Worker in Manitoba, Skilled Worker Overseas, International Education and Business." href="/pnp/manitoba" />
            <FeatureCard icon={Map} title="Ontario (OINP)" desc="Human Capital, Employer Job Offer, graduate and Entrepreneur streams (2026 redesign)." href="/pnp/ontario" />
            <FeatureCard icon={Map} title="Nova Scotia (NSNP)" desc="Labour Market Priorities, Experience, Skilled Worker, Occupation in Demand and Physician." href="/pnp/nova-scotia" />
            <FeatureCard icon={Map} title="New Brunswick" desc="Express Entry Labour Market, Skilled Worker, Strategic Initiative and Critical Worker Pilot." href="/pnp/new-brunswick" />
            <FeatureCard icon={Map} title="Prince Edward Island" desc="PEI Express Entry, Labour Impact and Business Impact categories via the EOI." href="/pnp/prince-edward-island" />
            <FeatureCard icon={Map} title="Newfoundland & Labrador" desc="Express Entry, Skilled Worker, International Graduate and Priority Skills NL." href="/pnp/newfoundland-and-labrador" />
            <FeatureCard icon={Compass} title="Yukon (YNP)" desc="Employer-driven Express Entry, Skilled Worker, Critical Impact Worker and Business." href="/pnp/yukon" />
            <FeatureCard icon={Compass} title="Northwest Territories" desc="Express Entry, Employer-Driven, Entry-Level/Semi-Skilled, Business and Francophone." href="/pnp/northwest-territories" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find the right Provincial Nominee Program for you"
        sub="Get started with a licensed RCIC and get an honest read on which province, and which stream, fits your profile."
      />
    </>
  );
}
