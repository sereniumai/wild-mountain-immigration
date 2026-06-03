import type { Metadata } from "next";
import { MapPin, Briefcase, Rocket, Building2, GraduationCap, Anchor } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia PNP (NSNP): Nova Scotia Nominee Program 2026 Guide",
  titleAbsolute: "Nova Scotia PNP 2026: Nova Scotia Nominee Program (NSNP)",
  description:
    "Nova Scotia Nominee Program 2026: NSNP streams, enhanced vs base nomination, the +600 CRS boost, eligibility and how to immigrate to Nova Scotia. RCIC-led.",
  path: PATH,
  keywords: [
    "Nova Scotia Nominee Program",
    "NSNP 2026",
    "Nova Scotia PNP",
    "NSNP streams",
    "immigrate to Nova Scotia",
  ],
});

const faqs = [
  {
    q: "Does the Nova Scotia Nominee Program charge an application fee?",
    a: "No. Nova Scotia is one of the few provinces that charges no provincial application fee for an NSNP nomination. That said, the federal fees IRCC charges for the permanent-residence application itself still apply, and so do the costs of language tests, an educational credential assessment and other supporting documents. Fees and policies change, so confirm the current position on novascotia.ca before you budget.",
  },
  {
    q: "Which NSNP stream adds 600 CRS points?",
    a: "Only the enhanced, Express Entry-aligned streams add 600 points to your Comprehensive Ranking System score. These include Nova Scotia's Experience: Express Entry pathway and other Express Entry-linked selections, and you must already have a valid Express Entry profile to use them. The base streams, such as Skilled Worker, are not connected to Express Entry: once nominated, you submit a separate paper application to IRCC and earn no CRS points.",
  },
  {
    q: "Can I apply to the NSNP without a job offer?",
    a: "It depends on the stream. The Skilled Worker stream is employer-driven and generally requires a full-time, permanent job offer from a Nova Scotia employer. Some Express Entry-aligned selections, such as the Labour Market Priorities approach, can invite candidates in the Express Entry pool without a standing job offer when their occupation matches a provincial priority. Entrepreneur streams require a business rather than a job offer. We assess which route, if any, fits your profile.",
  },
  {
    q: "How long does the Nova Scotia Nominee Program take?",
    a: "There are two stages. Provincial processing of a nomination application typically runs a few weeks to a few months, depending on the stream and document completeness. Once nominated, you apply to IRCC for permanent residence: an enhanced Express Entry application is usually processed in about six months, while a base, paper-based application generally takes longer. Plan for the better part of a year overall, and always check current service standards before relying on a timeline.",
  },
  {
    q: "What is the difference between enhanced and base NSNP nomination?",
    a: "An enhanced nomination is aligned with Express Entry. You must already be in the Express Entry pool, and the nomination adds 600 CRS points, which puts most candidates well above the typical federal draw cut-off, though IRCC issues any Invitation to Apply. A base nomination is not linked to Express Entry; once Nova Scotia nominates you, you make a separate permanent-residence application directly to IRCC, which does not add CRS points and is generally slower to process.",
  },
  {
    q: "Did the NSNP change its streams in 2026?",
    a: "Yes. Nova Scotia consolidated its streams in early 2026, folding several pathways, including Labour Market Priorities and the Physician stream, into broader Express Entry and Skilled Worker selections. Eligibility criteria from the older streams largely survive as sub-criteria, and expressions of interest already in the system remain valid. Because the structure shifted, older guides referring to many separate standalone streams are now out of date.",
  },
  {
    q: "Is there an Entrepreneur route to immigrate to Nova Scotia?",
    a: "Yes. The NSNP runs an Entrepreneur stream for people who establish or buy and actively manage a business in Nova Scotia, and an International Graduate Entrepreneur stream for graduates of a Nova Scotia university or community college who run a business in the province. These streams test net worth, investment and a viable business, not a job offer, and are base nominations that route through a separate IRCC application.",
  },
  {
    q: "Do you guarantee a Nova Scotia nomination?",
    a: "No. No licensed consultant can guarantee a nomination or a permanent-residence outcome, those decisions rest with the Province of Nova Scotia and IRCC. What we do is give you an honest assessment of your prospects, identify the stream where you rank best, and prepare an application that stands up to scrutiny. Wild Mountain Immigration is not affiliated with any government, and we never promise approvals.",
  },
];

export default function NovaScotiaPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia Nominee Program (NSNP), 2026 RCIC Guide",
            description:
              "Nova Scotia Nominee Program 2026: NSNP streams, enhanced vs base nomination, the +600 CRS boost, eligibility and how to immigrate to Nova Scotia. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Nova Scotia Nominee Program application support",
            description:
              "Nova Scotia Nominee Program 2026: NSNP streams, enhanced vs base nomination, the +600 CRS boost, eligibility and how to immigrate to Nova Scotia. RCIC-led.",
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
          { name: "Nova Scotia (NSNP)", path: PATH },
        ]}
        title={<>Nova Scotia Nominee Program <span className="text-brand">(NSNP)</span></>}
        lede={
          <p>
            The <strong>Nova Scotia Nominee Program</strong>, often called the <strong>Nova Scotia PNP</strong>, lets the
            province nominate skilled workers, graduates and entrepreneurs for permanent residence, and an Express
            Entry-aligned nomination adds 600 CRS points. In 2026, Nova Scotia charges no provincial application fee and
            selects through a ranked expression-of-interest system.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the NSNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With Nova Scotia&apos;s streams consolidated for 2026, picking the right route matters. Get an honest read
                from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "Employer-driven Atlantic route" },
                { label: "New Brunswick (NBPNP)", href: "/pnp/new-brunswick", note: "Atlantic neighbour's PNP" },
                { label: "Express Entry", href: "/express-entry", note: "The federal system enhanced streams use" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Nova Scotia PNP, formally the Nova Scotia Nominee Program (NSNP), is the province's economic immigration program that nominates skilled workers, graduates and entrepreneurs whose skills and experience meet Nova Scotia's labour needs. It runs both enhanced and base streams, and several are employer-driven or require a Nova Scotia job offer. A nomination is a provincial recommendation toward permanent residence, not PR itself; an enhanced, Express Entry-aligned nomination adds 600 CRS points, while a base nomination means a separate application to IRCC."
            items={[
              <>The <strong>Nova Scotia Nominee Program (NSNP)</strong> nominates skilled workers, graduates and entrepreneurs for permanent residence in Nova Scotia.</>,
              <>Nova Scotia charges <strong>no provincial application fee</strong>, unusual among PNPs, though federal IRCC fees still apply.</>,
              <>Only the <strong>enhanced (Express Entry-aligned) stream adds 600 CRS points</strong>; base streams route through a separate IRCC paper application.</>,
              <>Selection runs through a ranked <strong>expression of interest (EOI)</strong>, so meeting the minimum does not guarantee an invitation.</>,
              <>Nova Scotia <strong>consolidated its streams in early 2026</strong>, folding Labour Market Priorities and Physician routes into broader selections.</>,
            ]}
          />

          <h2>What is the Nova Scotia Nominee Program?</h2>
          <p>
            The <strong>Nova Scotia Nominee Program</strong> is the province&apos;s economic immigration channel. It lets
            Nova Scotia nominate people whose skills, experience or business plans meet local labour-market and economic
            needs; a provincial nomination is then your stepping stone to applying to IRCC for permanent residence. The
            program, the <strong>Nova Scotia Provincial Nominee Program</strong> in full and often called the{" "}
            <strong>Nova Scotia PNP</strong>, covers skilled workers, recent graduates and entrepreneurs, with selection
            running through a ranked expression-of-interest (EOI) system rather than first-come applications.
          </p>
          <p>
            One feature sets Nova Scotia apart: as of 2026 it charges <strong>no provincial application fee</strong> for
            an NSNP nomination (source: novascotia.ca, May 2026), one of the few provinces to do so. For 2026, Nova
            Scotia also moved to a formalized EOI model and consolidated its older streams into a smaller, clearer set.
            Figures and policies change frequently, so always verify the current rules before acting, and remember that
            meeting a stream&apos;s eligibility is not the same as receiving an invitation.
          </p>

          <h2>Enhanced vs base nomination: where the +600 CRS lands</h2>
          <p>
            The single most important distinction in the <strong>NSNP 2026</strong> is whether a stream is{" "}
            <em>enhanced</em> or <em>base</em>. An <strong>enhanced nomination</strong> is aligned with Express Entry: you
            must already hold a valid Express Entry profile, and the nomination adds <strong>600 CRS points</strong> to
            your Comprehensive Ranking System score. That boost lifts most candidates well above recent cut-offs, so an
            enhanced nomination puts you in a strong position for an Invitation to Apply at the next federal draw. IRCC
            issues that invitation, and processing then usually takes about six months.
          </p>
          <p>
            A <strong>base nomination</strong> (sometimes called a &quot;paper&quot; nomination) is{" "}
            <em>not</em> connected to Express Entry. Once Nova Scotia nominates you under a base stream, you submit a
            separate permanent-residence application directly to IRCC. It earns no CRS points and is generally processed
            more slowly. In Nova Scotia, the Express Entry-aligned selections are enhanced, while Skilled Worker and the
            entrepreneur routes are base, so confirming a stream&apos;s type is one of the first things we check. Not
            sure where your federal score stands? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <Callout type="brand" title="Only the Express Entry route adds the 600 points">
            Many guides imply every NSNP stream feeds Express Entry. It does not. The 600-point boost applies only to an
            enhanced, Express Entry-aligned nomination. Base streams lead to a separate, slower IRCC application with no
            CRS benefit.
          </Callout>

          <h2>NSNP streams in 2026</h2>
          <p>
            The table below summarises the main <strong>NSNP streams</strong> and where each links. In early 2026 Nova
            Scotia consolidated its lineup, folding several older pathways, including Labour Market Priorities and the
            Physician stream, into broader Express Entry and Skilled Worker selections. The earlier criteria largely
            survive as sub-criteria, and expressions of interest already in the system remain valid. Each row links to a
            dedicated guide.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Type"]}
            rows={[
              [<a href="/pnp/nova-scotia/labour-market-priorities">Labour Market Priorities</a>, "Express Entry candidates in priority occupations (often no job offer)", "Enhanced"],
              [<a href="/pnp/nova-scotia/experience-express-entry">Experience: Express Entry</a>, "Express Entry candidates with NS or Canadian skilled work experience", "Enhanced"],
              [<a href="/pnp/nova-scotia/skilled-worker">Skilled Worker</a>, "Workers with a full-time, permanent NS job offer", "Base"],
              [<a href="/pnp/nova-scotia/occupation-in-demand">Occupation in Demand</a>, "Workers in selected in-demand occupations with an NS job offer", "Base"],
              [<a href="/pnp/nova-scotia/entrepreneur">Entrepreneur</a>, "Owners establishing or buying and managing an NS business", "Base"],
              [<a href="/pnp/nova-scotia/international-graduate-entrepreneur">International Graduate Entrepreneur</a>, "NS university/college graduates running an NS business", "Base"],
              [<a href="/pnp/nova-scotia/physician">Physician</a>, "Physicians with a NS health-authority or IWK offer", "Now via Express Entry"],
            ]}
            caption="Main NSNP streams and where they link (novascotia.ca, 2026). Structure changed with the 2026 consolidation; eligibility does not guarantee an invitation."
          />
          <Callout type="info" title="The 2026 stream consolidation">
            If you are reading older material that lists ten or more separate Nova Scotia streams, it predates the early
            2026 changes. Labour Market Priorities and Physician selections now run through the Express Entry-aligned
            route, and Skilled Worker absorbs several former sub-streams. The underlying eligibility is broadly unchanged
, only the packaging is different.
          </Callout>

          <h2>How the NSNP aligns with Express Entry</h2>
          <p>
            Nova Scotia&apos;s enhanced selections sit inside the federal{" "}
            <a href="/express-entry">Express Entry</a> framework. The{" "}
            <a href="/pnp/nova-scotia/labour-market-priorities">Labour Market Priorities</a> approach lets the province
            search the federal Express Entry pool and issue Letters of Interest to candidates whose occupation, language
            and experience match a current priority, often <strong>without requiring a standing job offer</strong>. The{" "}
            <a href="/pnp/nova-scotia/experience-express-entry">Experience: Express Entry</a> stream targets candidates
            who already have skilled work experience in Nova Scotia or elsewhere in Canada, the same kind of experience
            that also supports a federal{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> profile. Both NSNP routes
            are <strong>enhanced</strong>, so a nomination adds the 600 CRS points described above on top of your existing{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score. Because these
            are ranked, invitation-based routes, there is no fixed pass mark, and we do not invent cut-off scores that the
            province has not published. To use an enhanced stream you must first build and maintain a valid Express Entry
            profile, so a sensible first step is to run our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> and see how close you already are to a federal draw.
          </p>

          <h2>The base streams: Skilled Worker, Occupation in Demand and entrepreneurs</h2>
          <p>
            On the base side, the <a href="/pnp/nova-scotia/skilled-worker">Skilled Worker</a> stream is the main
            employer-driven route: it generally requires a <strong>full-time, permanent job offer</strong> from a Nova
            Scotia employer and qualifying work experience. The{" "}
            <a href="/pnp/nova-scotia/occupation-in-demand">Occupation in Demand</a> route works similarly but focuses on
            selected in-demand occupations; the list of eligible occupations changes, so confirm it before relying on it.
            For business owners, the <a href="/pnp/nova-scotia/entrepreneur">Entrepreneur</a> stream and the{" "}
            <a href="/pnp/nova-scotia/international-graduate-entrepreneur">International Graduate Entrepreneur</a> stream
            test net worth, investment and an active, viable business rather than a job offer. The{" "}
            <a href="/pnp/nova-scotia/physician">Physician</a> route, meanwhile, now runs through the Express Entry-aligned
            selection for doctors with a Nova Scotia health-authority or IWK offer.
          </p>

          <h2>NSNP eligibility</h2>
          <p>
            Requirements differ by stream, but most skilled routes look at the same building blocks: a qualifying{" "}
            <strong>occupation and skill level</strong> (NOC TEER), sufficient <strong>work experience</strong>, language
            results appropriate to your occupation, an <strong>educational credential assessment</strong> for foreign
            education, and proof of settlement funds. Employer-driven streams add a valid Nova Scotia{" "}
            <strong>job offer</strong>; the Express Entry-aligned routes add the federal Express Entry minimums on top.
            Entrepreneur streams instead test net worth, investment and a business plan. For 2026, Nova Scotia has also
            signalled priority tiers that affect which candidates are invited first, so two people who both &quot;qualify&quot;
            may have very different odds. The safest step is a profile review against the current novascotia.ca program
            guide.
          </p>

          <h2>The expression-of-interest system explained</h2>
          <p>
            Nova Scotia does not run most of its streams on a first-come, first-served basis. Instead it uses a ranked{" "}
            <strong>expression of interest (EOI)</strong> model: you create a profile describing your occupation, work
            experience, language results, education and any Nova Scotia job offer or ties, and the province scores and
            ranks the pool. In periodic rounds Nova Scotia invites the highest-ranked profiles that match its current
            priorities. Submitting an EOI is not an application and does not, on its own, secure a nomination. It places
            you in a pool from which the province selects. That is why meeting a stream&apos;s minimum eligibility and
            actually receiving an invitation are two different things, and why how your profile is presented matters as
            much as whether you qualify on paper. For the enhanced routes, your federal{" "}
            <a href="/express-entry">Express Entry</a> profile and your Nova Scotia EOI work together.
          </p>

          <h2>The Atlantic Immigration Program: a separate route into Nova Scotia</h2>
          <p>
            Alongside the NSNP, Nova Scotia takes part in the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program (AIP)</a>, but the two are not the same
            thing. The AIP is an employer-driven federal pathway shared with{" "}
            <a href="/pnp/new-brunswick">New Brunswick</a>,{" "}
            <a href="/pnp/prince-edward-island">Prince Edward Island</a> and Newfoundland and Labrador. It requires a job
            offer from a <strong>designated Atlantic employer</strong> and an approved settlement plan, and it does not run
            through the NSNP&apos;s expression-of-interest system. If you already hold an offer from a designated Nova
            Scotia employer, the AIP can be a faster, lower-CRS route to permanent residence than building an Express Entry
            score; if you do not, an NSNP stream may suit you better. We assess both before recommending a path.
          </p>

          <h2>How to apply to the Nova Scotia Nominee Program</h2>
          <p>
            <strong>How to apply</strong> follows a clear sequence. First, confirm you meet a stream&apos;s requirements
            and, for enhanced routes, create or update your federal{" "}
            <a href="/express-entry">Express Entry</a> profile. Next, submit an{" "}
            <strong>expression of interest</strong> to Nova Scotia, which ranks candidates and invites the strongest
            profiles in periodic rounds. If invited, you file a full nomination application with supporting documents
            within the stated window. Once nominated, you apply to <strong>IRCC</strong> for permanent residence, through{" "}
            <a href="/express-entry">Express Entry</a> if your nomination is enhanced, or on paper if it is base.
          </p>
          <Steps
            steps={[
              { title: "Confirm the right stream", desc: <>We match your occupation, experience and language to the NSNP stream where you rank best, whether that is an enhanced <a href="/pnp/nova-scotia/labour-market-priorities">Express Entry</a> route, the <a href="/pnp/nova-scotia/skilled-worker">Skilled Worker</a> stream or an entrepreneur pathway.</> },
              { title: "Build the profile and EOI", desc: <>For enhanced streams we prepare your <a href="/express-entry">Express Entry</a> profile, then submit and optimise your Nova Scotia expression of interest so it presents your strongest case.</> },
              { title: "Nomination application", desc: "If Nova Scotia invites you, we assemble a complete nomination application with documents that withstand scrutiny and meet the stated deadline." },
              { title: "Permanent residence with IRCC", desc: <>Once nominated, we manage your permanent-residence application with <strong>IRCC</strong>, through Express Entry for an enhanced nomination or on paper for a base one, through to landing.</> },
            ]}
          />

          <h2>NSNP costs and timelines</h2>
          <p>
            Because Nova Scotia charges <strong>no provincial application fee</strong>, your costs at the provincial stage
            are mainly your supporting documents and time: an approved language test, an educational credential assessment
            for foreign education, police certificates and proof of settlement funds. The federal{" "}
            <a href="/express-entry">IRCC</a> permanent-residence fees come later and are separate, and our own
            professional fee is set out plainly on our <a href="/fees">fees page</a>. On timing, provincial processing of
            a nomination typically runs a few weeks to a few months depending on the stream and document completeness; an
            enhanced Express Entry permanent-residence application is then usually processed in about six months, while a
            base, paper-based application generally takes longer. All figures and timelines change, so confirm the current
            position on novascotia.ca and canada.ca before you rely on them.
          </p>

          <h2>How Wild Mountain helps you immigrate to Nova Scotia</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Nova Scotia&apos;s 2026 priorities, confirms whether
            your best route is enhanced or base, and steers you toward the stream, Express Entry, Skilled Worker,
            Occupation in Demand or one of the entrepreneur pathways, where you genuinely rank well. Our team is led by a
            licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), and we prepare
            an expression of interest and nomination application that stands up to scrutiny, then represent you with the
            province and with IRCC. We work entirely online and we are not affiliated with any government. Good positioning is where sound advice earns its keep. If your plans range wider than
            Nova Scotia, we also advise on the <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>,{" "}
            other <a href="/pnp">Provincial Nominee Programs</a> and federal{" "}
            <a href="/express-entry">Express Entry</a>.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. When you are ready, <a href="/contact">get in touch</a> for an
            honest read on your <strong>Nova Scotia PNP</strong> options and the wider routes into Nova Scotia immigration.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the NSNP streams</h2>
          <p className="mt-3 text-ink-soft">Each Nova Scotia pathway in detail, plus the wider routes they connect to.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Experience: Express Entry" desc="The enhanced stream for candidates with Canadian skilled work experience, adding 600 CRS points." href="/pnp/nova-scotia/experience-express-entry" />
            <FeatureCard icon={MapPin} title="Labour Market Priorities" desc="Province-led selection from the Express Entry pool, often without a standing job offer." href="/pnp/nova-scotia/labour-market-priorities" />
            <FeatureCard icon={Briefcase} title="Skilled Worker" desc="The employer-driven base stream for workers with a full-time, permanent Nova Scotia job offer." href="/pnp/nova-scotia/skilled-worker" />
            <FeatureCard icon={Building2} title="Entrepreneur" desc="For owners who establish, or buy and actively manage, a business in Nova Scotia." href="/pnp/nova-scotia/entrepreneur" />
            <FeatureCard icon={GraduationCap} title="Graduate Entrepreneur" desc="For Nova Scotia university and college graduates running a business in the province." href="/pnp/nova-scotia/international-graduate-entrepreneur" />
            <FeatureCard icon={Anchor} title="Atlantic Immigration Program" desc="The separate employer-driven Atlantic route, with a designated employer and settlement plan." href="/atlantic-immigration-program" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the NSNP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on the strongest Nova Scotia stream and route to permanent residence."
      />
    </>
  );
}
