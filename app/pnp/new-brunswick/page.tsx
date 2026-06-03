import type { Metadata } from "next";
import { MapPin, Rocket, Briefcase, Languages, Building2, Users, Anchor } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/new-brunswick";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "New Brunswick Provincial Nominee Program (NBPNP)",
  titleAbsolute: "New Brunswick PNP 2026: NBPNP Streams & How to Apply",
  description:
    "New Brunswick Provincial Nominee Program 2026: NBPNP streams, enhanced vs base nomination, eligibility and how to apply through the INB Portal. RCIC-led.",
  path: PATH,
  keywords: [
    "New Brunswick Provincial Nominee Program",
    "NBPNP 2026",
    "New Brunswick PNP",
    "immigrate to New Brunswick",
    "NB skilled worker",
    "how to apply NBPNP",
  ],
});

const faqs = [
  {
    q: "How do I apply to the New Brunswick Provincial Nominee Program?",
    a: "Most New Brunswick PNP streams use a two-step, expression-of-interest model through the INB Portal. You submit a profile, and New Brunswick may issue an Invitation to Apply (ITA) based on its labour-market and sector priorities rather than a published numeric cut-off. If invited, you submit a full nomination application with supporting documents. An ITA is not guaranteed simply by being eligible. Selection follows provincial needs and the available allocation.",
  },
  {
    q: "What is the difference between enhanced and base nomination in New Brunswick?",
    a: "An enhanced nomination is aligned with federal Express Entry: the NB Express Entry and Strategic Initiative streams add 600 CRS points to a valid Express Entry profile, lifting most candidates well above recent draw cut-offs, though IRCC issues any Invitation to Apply in a following federal draw. A base nomination, such as the Skilled Worker or Business Immigration stream, is not connected to Express Entry; once nominated, you submit a separate paper permanent-residence application directly to IRCC, which is generally processed more slowly.",
  },
  {
    q: "Do I need a job offer to immigrate to New Brunswick through the NBPNP?",
    a: "It depends on the stream. The Skilled Worker, Critical Worker Pilot and the Employment-in-NB pathway of NB Express Entry are employer-driven and generally require a genuine, full-time job offer from a New Brunswick employer. The NB Interests pathway and some Express Entry routes can consider candidates with strong ties to the province. Business Immigration tests net worth, investment and a business plan instead of a job offer. We can review your profile and tell you honestly which route, if any, fits.",
  },
  {
    q: "Which occupations does the New Brunswick PNP accept in 2026?",
    a: "New Brunswick's priorities shift with its labour-market needs. Since May 4, 2026, new Invitations to Apply under the Skilled Worker stream have been limited to Healthcare, Education and Construction Trades occupations. The province also excludes a number of sectors, including accommodation and food services, retail, and certain administrative and processing roles. Because these lists change, always confirm current eligible and excluded occupations on welcomenb.ca before applying.",
  },
  {
    q: "How long does NB EOI eligibility last?",
    a: "An expression of interest in the INB Portal is generally valid for 365 days from submission. During that window New Brunswick may invite you if your profile matches its sector and labour-market priorities. If you are not invited before your profile expires, you can submit a new one. Because invitations follow provincial need rather than a fixed score, there is no guaranteed waiting time. Keeping your profile and documents current improves your standing.",
  },
  {
    q: "Is the New Brunswick PNP the same as the Atlantic Immigration Program?",
    a: "No. The Atlantic Immigration Program (AIP) is a separate, employer-driven federal pathway that New Brunswick participates in alongside Nova Scotia, Prince Edward Island and Newfoundland and Labrador. It requires a job offer from a designated Atlantic employer and a settlement plan, and it does not run through the NBPNP's INB Portal. New Brunswick administers both programs, but they have different eligibility rules, intake processes and allocations.",
  },
  {
    q: "How much does a New Brunswick nomination cost?",
    a: "Submitting an expression of interest is free. As published on welcomenb.ca, most NBPNP streams charge an application fee of around $250, while the Business Immigration stream carries a higher fee of roughly $2,000. These provincial fees are separate from the IRCC permanent-residence fees you pay at the federal stage. Fees change, so confirm the current amounts on the official New Brunswick immigration site before you apply.",
  },
  {
    q: "What is the Critical Worker Pilot?",
    a: "The NB Critical Worker Pilot is an employer-driven stream open only through a small number of designated New Brunswick employers. It supports lower-language-threshold candidates, typically around CLB 4, in roles those specific employers need to fill. Because participation is restricted to the designated employers, you generally cannot apply unless one of them has hired you. We can confirm whether your employer takes part.",
  },
];

export default function NewBrunswickPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "New Brunswick Provincial Nominee Program (NBPNP), 2026 RCIC Guide",
            description:
              "New Brunswick Provincial Nominee Program 2026: NBPNP streams, enhanced vs base nomination, eligibility and how to apply through the INB Portal. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "New Brunswick PNP application support",
            description:
              "New Brunswick Provincial Nominee Program 2026: NBPNP streams, enhanced vs base nomination, eligibility and how to apply through the INB Portal. RCIC-led.",
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
          { name: "New Brunswick", path: PATH },
        ]}
        title={<>New Brunswick PNP: Provincial Nominee Program <span className="text-brand">(NBPNP)</span></>}
        lede={
          <p>
            The <strong>New Brunswick PNP</strong> (Provincial Nominee Program) lets the province nominate skilled workers
            and entrepreneurs for permanent residence, and an enhanced nomination adds 600 CRS points to an Express Entry
            profile. In 2026, New Brunswick selects through expression-of-interest streams aimed at its priority sectors.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the NBPNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                New Brunswick&apos;s sector limits make stream choice critical. Get an honest assessment from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Nova Scotia (NSNP)", href: "/pnp/nova-scotia", note: "Neighbouring Atlantic program" },
                { label: "Prince Edward Island (PEI PNP)", href: "/pnp/prince-edward-island", note: "Another Atlantic route" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The New Brunswick PNP (Provincial Nominee Program, or NBPNP) is the province's economic immigration program. It nominates skilled workers and entrepreneurs whose skills and experience meet New Brunswick's labour-market needs. The program runs both enhanced and base streams, several of which are employer-driven or require a New Brunswick job offer, and applications go through the INB Portal. A nomination is a provincial recommendation toward permanent residence, not PR itself: an enhanced, Express Entry-aligned nomination adds 600 CRS points, while a base nomination means a separate application to IRCC."
            items={[
              <>The <strong>NBPNP</strong> nominates skilled workers and entrepreneurs for permanent residence in New Brunswick.</>,
              <>Selection runs through the <strong>INB Portal</strong> on an expression-of-interest basis, by sector and labour need, not a published numeric score.</>,
              <>An <strong>enhanced nomination (NB Express Entry or Strategic Initiative) adds 600 CRS points</strong>; base streams route through a separate IRCC application.</>,
              <>Since <strong>May 4, 2026</strong>, new Skilled Worker invitations are limited to <strong>Healthcare, Education and Construction Trades</strong>.</>,
              <>The <strong>Atlantic Immigration Program (AIP)</strong> is a separate employer-driven route New Brunswick also runs; it is not part of the NBPNP.</>,
            ]}
          />

          <h2>What is the New Brunswick PNP (Provincial Nominee Program)?</h2>
          <p>
            The <strong>New Brunswick PNP</strong> (Provincial Nominee Program, or NBPNP) is the province&apos;s economic
            immigration route, and one of the most direct ways to move to this Atlantic Canada province. It lets New
            Brunswick nominate people whose skills, experience or business plans meet its labour-market needs; a provincial
            nomination is then your stepping stone to applying to IRCC for permanent residence. The program is administered through the province&apos;s INB Portal, where most candidates submit an
            expression of interest and wait to see whether New Brunswick issues an Invitation to Apply (ITA).
          </p>
          <p>
            New Brunswick&apos;s nomination space is limited. Its 2025 allocation was about <strong>2,750</strong> spaces
            (split between the PNP and the Atlantic Immigration Program), with the 2026 figure expected to remain tight
            after federal allocations were cut nationwide (source: welcomenb.ca / IRCC, May 2026). Because supply is
            constrained, New Brunswick directs invitations toward its highest-priority sectors, so meeting the minimum
            eligibility is not the same as receiving an invitation. Figures and policies change frequently, so always
            verify the current rules before acting.
          </p>

          <h2>Enhanced vs base nomination in New Brunswick</h2>
          <p>
            As with every Provincial Nominee Program, the most important distinction is whether a stream is{" "}
            <strong>enhanced</strong> or <strong>base</strong>. An enhanced nomination is aligned with federal Express
            Entry: New Brunswick&apos;s <strong>NB Express Entry</strong> and <strong>Strategic Initiative</strong> streams
            add <strong>600 CRS points</strong> to a valid Express Entry profile, putting most candidates well above the
            typical federal draw cut-off. That is the fastest route to permanent residence.
          </p>
          <p>
            A base nomination, such as the <strong>Skilled Worker</strong> or <strong>Business Immigration</strong>{" "}
            stream, is <em>not</em> connected to Express Entry. Once nominated, you submit a separate, paper
            permanent-residence application directly to IRCC, which is generally processed more slowly. Confirming whether
            a stream is enhanced or base is one of the first things we check, because it changes your whole timeline. Not
            sure where your federal score stands? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <p>
            To use an enhanced New Brunswick stream you must already hold a valid{" "}
            <a href="/express-entry">Express Entry</a> profile. New Brunswick searches the federal pool and, where your
            occupation and ties match its priorities, can issue a notification of interest; accepting it and securing the
            nomination adds 600 points to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score. Skilled
            Canadian work experience, including a New Brunswick job, can also support a federal{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> profile, which is one reason
            we look at your federal options and your provincial options together rather than in isolation.
          </p>

          <h2>NBPNP streams in 2026</h2>
          <p>
            The table below summarises the main New Brunswick PNP streams and links to a detailed guide for each. The
            province has run a controlled, sector-focused intake since reopening, so several streams accept candidates only
            in specific occupations or through designated employers.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Type"]}
            rows={[
              [
                <a key="ee" href="/pnp/new-brunswick/express-entry-labour-market">Express Entry Labour Market</a>,
                "Express Entry candidates with NB employment or provincial interest",
                "Enhanced (+600 CRS)",
              ],
              [
                <a key="sw" href="/pnp/new-brunswick/skilled-worker">Skilled Worker</a>,
                "Workers with an NB job offer, new ITAs limited to Healthcare, Education, Construction Trades",
                "Base",
              ],
              [
                <a key="si" href="/pnp/new-brunswick/strategic-initiative">Strategic Initiative</a>,
                "French-speaking candidates supporting NB's Francophone immigration goals",
                "Enhanced (+600 CRS)",
              ],
              [
                <a key="bi" href="/pnp/new-brunswick/business-immigration">Business Immigration</a>,
                "Entrepreneurs establishing or buying a business in New Brunswick",
                "Base",
              ],
              [
                <a key="cw" href="/pnp/new-brunswick/critical-worker-pilot">Critical Worker Pilot</a>,
                "Lower-language candidates (~CLB 4) hired by designated NB employers",
                "Base (pilot)",
              ],
            ]}
            caption="Main NBPNP streams (welcomenb.ca, 2026). Eligibility does not guarantee an Invitation to Apply."
          />
          <Callout type="brand" title="NB Express Entry, Skilled Worker and Strategic Initiative, how they fit together">
            The <strong>NB skilled worker</strong> route is the main base option, but its new invitations are currently
            limited to Healthcare, Education and Construction Trades. Candidates already in the federal pool may prefer the
            enhanced <strong>NB Express Entry</strong> route for the +600 CRS boost, while French-speaking applicants should
            look closely at the enhanced <strong>Strategic Initiative</strong> stream. All three can lead to permanent
            residence, the right one depends on your occupation, language and ties to the province.
          </Callout>

          <h2>NBPNP eligibility</h2>
          <p>
            Requirements differ by stream, but most NBPNP routes share the same foundations for immigration to NB:
            qualifying work experience, language results appropriate to your occupation, education and a genuine intention
            to settle in New Brunswick. Employer-driven streams generally require a full-time job offer from an eligible New
            Brunswick employer.</p>
          <p>This group covers the Skilled Worker stream, the Employment-in-NB pathway of NB Express
            Entry and the Critical Worker Pilot. The Strategic Initiative stream targets French-speaking candidates, and
            Business Immigration tests net worth, investment and a viable business plan instead of a job offer.
          </p>
          <p>
            New Brunswick also publishes a list of <strong>excluded occupations</strong>, including accommodation and
            food services, retail, certain administrative roles and food-processing positions, that are not eligible for
            most streams. Because the eligible and excluded occupation lists are detailed and updated regularly, the safest
            step is a profile review against the current welcomenb.ca program guide.
          </p>

          <h2>2026 sector limits and the reduced allocation</h2>
          <p>
            Two shifts define the New Brunswick PNP in 2026. First, the <strong>limited allocation</strong>: with roughly
            2,750 spaces shared between the PNP and the Atlantic Immigration Program, New Brunswick has run a controlled,
            invitation-driven intake rather than a first-come, first-served one. Second, <strong>sector limits</strong>:
            since <strong>May 4, 2026</strong>, new Invitations to Apply under the Skilled Worker stream have been
            restricted to <strong>Healthcare, Education and Construction Trades</strong> occupations.
          </p>
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            New Brunswick selects by sector and labour-market need, not a numeric ranking, and there is no published
            cut-off score. Many otherwise-eligible profiles will not receive an Invitation to Apply this cycle. We will give
            you a candid read on your realistic chances before you invest time and fees.
          </Callout>

          <h2>How to apply for the NBPNP</h2>
          <p>
            <strong>How to apply for the New Brunswick PNP</strong> follows a clear sequence for most streams. First,
            confirm you meet a stream&apos;s requirements and that your occupation is currently eligible. Next, submit an{" "}
            <strong>expression of interest through the INB Portal</strong>, which stays valid for <strong>365 days</strong>.
            New Brunswick then runs periodic rounds of invitation: each NB PNP draw (or NB EOI draw) selects profiles by
            sector and labour-market priority rather than a published score.</p>
          <p>If one of these rounds of invitation issues you
            an Invitation to Apply, you submit a full nomination application with supporting documents within the window you
            are given. Once nominated, you apply to <strong>IRCC</strong> for permanent residence, through Express Entry if
            your nomination is enhanced, or on paper if it is a base nomination.
          </p>
          <Steps
            steps={[
              { title: "Confirm an eligible stream", desc: <>We check that your occupation is currently invited, then match you to the right route, the enhanced <a href="/pnp/new-brunswick/express-entry-labour-market">NB Express Entry</a> stream, the <a href="/pnp/new-brunswick/skilled-worker">Skilled Worker</a> stream, <a href="/pnp/new-brunswick/strategic-initiative">Strategic Initiative</a>, <a href="/pnp/new-brunswick/business-immigration">Business Immigration</a> or the <a href="/pnp/new-brunswick/critical-worker-pilot">Critical Worker Pilot</a>.</> },
              { title: "Submit the INB Portal EOI", desc: <>For enhanced routes we prepare your <a href="/express-entry">Express Entry</a> profile, then submit and optimise your INB Portal expression of interest, valid for 365 days.</> },
              { title: "Nomination application", desc: "If New Brunswick issues an Invitation to Apply, we assemble a complete nomination application with documents that withstand scrutiny, inside the window you are given." },
              { title: "Permanent residence with IRCC", desc: <>Once nominated, we manage your permanent-residence application with <strong>IRCC</strong>, through Express Entry for an enhanced nomination or on paper for a base one, through to landing.</> },
            ]}
          />

          <h2>NBPNP costs and timelines</h2>
          <p>
            On fees, submitting an expression of interest is <strong>free</strong>. Most NBPNP streams charge an
            application fee of around <strong>$250</strong>, while Business Immigration carries a higher fee of roughly{" "}
            <strong>$2,000</strong>. These provincial amounts are separate from the{" "}
            <a href="/express-entry">IRCC</a> permanent-residence fees you pay at the federal stage, and from our own
            professional fee, which we set out plainly on our <a href="/fees">fees page</a>.</p>
          <p>On timing, provincial
            processing of a nomination typically runs several weeks to a few months; an enhanced Express Entry
            permanent-residence application is then usually processed in about six months, while a base, paper-based
            application generally takes longer. All figures change, so confirm current fees and service standards on
            welcomenb.ca and canada.ca before applying.
          </p>

          <h2>The Atlantic Immigration Program is separate</h2>
          <p>
            One important boundary: alongside the NBPNP, New Brunswick also takes part in the{" "}
            <strong>Atlantic Immigration Program (AIP)</strong>, but the two are not the same thing. The AIP is a separate,
            employer-driven federal pathway shared with{" "}
            <a href="/pnp/nova-scotia">Nova Scotia</a>,{" "}
            <a href="/pnp/prince-edward-island">Prince Edward Island</a> and Newfoundland and Labrador.</p>
          <p>It requires a job
            offer from a <strong>designated Atlantic employer</strong> and a settlement plan, and it does not run through
            the INB Portal. If you have an offer from a designated employer, the{" "}
            <a href="/atlantic-immigration-program">AIP</a> may be a faster route than the NBPNP; if not, a provincial
            stream may suit you better. We assess both before recommending a path.
          </p>

          <h2>How Wild Mountain helps with the NBPNP</h2>
          <p>
            Wild Mountain Immigration assesses your profile against New Brunswick&apos;s current sector priorities, confirms
            whether your occupation is eligible, and steers you toward the stream with the strongest realistic chance: NB
            Express Entry, Skilled Worker, Strategic Initiative, Business Immigration or the Critical Worker Pilot.
            Our team is led by a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC
            #R706497), and we prepare an INB Portal profile and nomination application that stands up to scrutiny, then
            represent you with the province and with IRCC.</p>
          <p>We work entirely online. With New Brunswick&apos;s allocation
            tight and its sector limits in force, that positioning is where good advice earns its keep. If your plans range
            wider than New Brunswick, we also advise on the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, other{" "}
            <a href="/pnp">Provincial Nominee Programs</a> and federal <a href="/express-entry">Express Entry</a>.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. Whether the New Brunswick PNP is the right fit or another NB
            immigration route serves you better, when you are ready, <a href="/contact">get in touch</a> for an honest read
            on your New Brunswick options.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the NBPNP streams</h2>
          <p className="mt-3 text-ink-soft">Each New Brunswick pathway in detail, plus the wider routes they connect to.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry Labour Market" desc="The enhanced stream for Express Entry candidates with NB employment or provincial interest, adding 600 CRS points." href="/pnp/new-brunswick/express-entry-labour-market" />
            <FeatureCard icon={Briefcase} title="Skilled Worker" desc="The employer-driven base stream, with new invitations limited to Healthcare, Education and Construction Trades." href="/pnp/new-brunswick/skilled-worker" />
            <FeatureCard icon={Languages} title="Strategic Initiative" desc="The enhanced stream for French-speaking candidates supporting New Brunswick's Francophone goals." href="/pnp/new-brunswick/strategic-initiative" />
            <FeatureCard icon={Building2} title="Business Immigration" desc="For entrepreneurs establishing or buying and managing a business in New Brunswick." href="/pnp/new-brunswick/business-immigration" />
            <FeatureCard icon={Users} title="Critical Worker Pilot" desc="A base pilot for lower-language candidates hired by a small number of designated NB employers." href="/pnp/new-brunswick/critical-worker-pilot" />
            <FeatureCard icon={Anchor} title="Atlantic Immigration Program" desc="The separate employer-driven Atlantic route, with a designated employer and settlement plan." href="/atlantic-immigration-program" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the NBPNP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on your strongest route to permanent residence in New Brunswick."
      />
    </>
  );
}
