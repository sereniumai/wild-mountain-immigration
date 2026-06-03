import type { Metadata } from "next";
import { MapPin, Rocket, Briefcase, GraduationCap, Building2, Anchor } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/prince-edward-island";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Prince Edward Island PNP (PEI PNP), 2026 Guide",
  titleAbsolute: "PEI PNP 2026: Prince Edward Island Nominee",
  description:
    "Prince Edward Island Provincial Nominee Program 2026: how PEI PNP EOI draws work, Express Entry vs base streams, eligibility and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Prince Edward Island Provincial Nominee Program",
    "PEI PNP 2026",
    "PEI immigration",
    "immigrate to PEI",
    "PEI Expression of Interest",
    "PEI Express Entry",
  ],
});

const faqs = [
  {
    q: "How does the PEI PNP Expression of Interest system work?",
    a: "The Prince Edward Island Provincial Nominee Program is expression-of-interest (EOI) based. You submit a free profile to the PEI Office of Immigration describing your skills, work experience and ties to the island. PEI holds draws roughly once a month and invites candidates whose profiles best match its current labour-market priorities. Your EOI stays valid for about six months. Unlike some provinces, PEI does not publish a per-draw cut-off score, so selection is driven by priority occupations rather than a transparent points threshold.",
  },
  {
    q: "Does PEI publish cut-off scores for its draws?",
    a: "No. The PEI PNP does not publish per-draw minimum scores. Selection is guided by Prince Edward Island's priority sectors, healthcare, trades and construction, manufacturing and childcare, rather than a public points cut-off. Sales and service occupations have been deprioritised. Because there is no published threshold to aim for, a candid assessment of how your occupation aligns with PEI's current priorities matters more here than on points-transparent programs. Always confirm current priorities on princeedwardisland.ca.",
  },
  {
    q: "What is the difference between enhanced and base PEI PNP streams?",
    a: "PEI Express Entry is the enhanced option: you must already have an active federal Express Entry profile, and a PEI nomination adds 600 CRS points to your score, putting most candidates well above the typical federal draw cut-off. The Labour Impact streams (Skilled Workers in PEI, Skilled Workers Outside Canada, Critical Workers and International Graduates) are base, or 'paper', nominations: once nominated you apply to IRCC for permanent residence through a separate, generally slower application that does not add CRS points.",
  },
  {
    q: "Do I need a job offer to immigrate to PEI through the PNP?",
    a: "For most PEI PNP routes, yes. The program is largely employer-driven, the Labour Impact streams require a job offer from a Prince Edward Island employer, and for Skilled Workers Outside Canada the employer must obtain authorization from the PEI Office of Immigration before issuing the offer. The Business Impact (Work Permit Entrepreneur) stream does not need a job offer because you are establishing or buying a PEI business instead. A standalone Express Entry profile alone is not enough without meeting a stream's requirements.",
  },
  {
    q: "What are the Critical Workers and International Graduate requirements?",
    a: "The Critical Workers stream covers lower-skilled (TEER 4–5) roles such as truck drivers, labourers and food-service workers; it generally requires at least six months of full-time work with your PEI employer before you can be nominated. The International Graduates stream is for graduates of publicly funded PEI institutions who hold a job offer in a related field. Both are base streams leading to a separate IRCC permanent-residence application. We can confirm which route fits your profile.",
  },
  {
    q: "How much does the PEI PNP cost?",
    a: "Submitting an Expression of Interest is free. As of 2026, the application fee for the Labour Impact and International Graduate streams is around $300, while the Business Impact (entrepreneur) stream carries a much higher fee of roughly $10,000 reflecting its commercial nature. These provincial fees are separate from the IRCC permanent-residence fees you pay at the federal stage. Fees change, so confirm current amounts on princeedwardisland.ca before applying.",
  },
  {
    q: "How many people can PEI nominate in 2026?",
    a: "Prince Edward Island's nomination allocation is small. Following federal cuts to provincial allocations, PEI's 2025 base allocation was roughly 1,025 (with a possible top-up), and 2026 numbers remain tight. With limited spaces, PEI concentrates invitations on its highest-priority sectors and issues only modest numbers of invitations each monthly draw. Meeting the basic eligibility does not guarantee an invitation, so positioning your profile against current priorities is essential. Verify current figures on princeedwardisland.ca.",
  },
  {
    q: "Can the PEI PNP lead to permanent residence?",
    a: "Yes, a PEI nomination is your stepping stone to permanent residence, but it is not PR itself. After PEI nominates you, IRCC makes the final decision on a separate permanent-residence application. An enhanced PEI Express Entry nomination is processed through Express Entry in roughly six months; a base Labour Impact nomination routes through a slower paper application to IRCC. We manage both the provincial and federal stages on your behalf.",
  },
];

export default function PrinceEdwardIslandPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Prince Edward Island Provincial Nominee Program (PEI PNP), 2026 RCIC Guide",
            description:
              "Prince Edward Island Provincial Nominee Program 2026: how PEI PNP EOI draws work, Express Entry vs base streams, eligibility and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "PEI PNP application support",
            description:
              "Prince Edward Island Provincial Nominee Program 2026: how PEI PNP EOI draws work, Express Entry vs base streams, eligibility and how to apply. RCIC-led.",
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
          { name: "Prince Edward Island", path: PATH },
        ]}
        title={<>Prince Edward Island Provincial Nominee Program <span className="text-brand">(PEI PNP)</span></>}
        lede={
          <p>
            The <strong>Prince Edward Island Provincial Nominee Program (PEI PNP)</strong> lets Canada&apos;s smallest
            province nominate skilled workers, graduates and entrepreneurs for permanent residence through a monthly
            PEI PNP draw, and an enhanced nomination adds 600 CRS points to an Express Entry profile.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the PEI PNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                PEI selects by priority sector with no published cut-off. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Nova Scotia (NSNP)", href: "/pnp/nova-scotia", note: "A neighbouring Atlantic program" },
                { label: "Newfoundland & Labrador", href: "/pnp/newfoundland-and-labrador", note: "Fast Atlantic processing" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other PEI employer route" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Prince Edward Island PNP (PEI PNP) is Prince Edward Island's economic immigration program for skilled workers, graduates and entrepreneurs. Most streams require a PEI job offer, and the province selects candidates through an Expression of Interest system without publishing cut-off scores. A successful nomination supports your application for Canadian permanent residence."
            items={[
              <>The <strong>PEI PNP</strong> nominates skilled workers, graduates and entrepreneurs for permanent residence in Prince Edward Island.</>,
              <>It runs on an <strong>Expression of Interest (EOI)</strong> system with roughly monthly draws, but PEI <strong>does not publish cut-off scores</strong>.</>,
              <>An <strong>enhanced PEI Express Entry nomination adds 600 CRS points</strong>; the Labour Impact streams are base (paper) nominations.</>,
              <>The program is largely <strong>employer-driven</strong>, most streams need a PEI job offer, and priority goes to healthcare, trades, manufacturing and childcare.</>,
              <>PEI&apos;s allocation is <strong>small</strong> (roughly 1,025 in 2025), so meeting eligibility does not guarantee an invitation.</>,
            ]}
          />

          <h2>What is the Prince Edward Island Provincial Nominee Program (PEI PNP)?</h2>
          <p>
            The <strong>Prince Edward Island Provincial Nominee Program (PEI PNP)</strong> is the island province&apos;s
            economic immigration route. It lets Prince Edward Island nominate people whose skills and experience meet
            local labour-market needs; that provincial nomination then becomes your stepping stone to applying to IRCC
            for permanent residence. According to princeedwardisland.ca, the program is organised into three
            categories, <strong>Labour Impact</strong> (for workers), <strong>Express Entry</strong> (the enhanced,
            federally aligned route) and <strong>Business Impact</strong> (for entrepreneurs).
          </p>
          <p>
            PEI&apos;s nomination space is modest. Its 2025 base allocation was roughly <strong>1,025 nominations</strong>{" "}
            (with a possible top-up), and 2026 numbers remain tight after IRCC reduced provincial allocations nationwide
            (source: princeedwardisland.ca / IRCC, 2026). With limited spaces, PEI directs invitations to its
            highest-priority sectors, so meeting the minimum eligibility is no longer the same as receiving an
            invitation. Figures and policies change frequently, so always verify the current rules before acting.
          </p>

          <h2>How the PEI PNP draw system works</h2>
          <p>
            PEI immigration through the PNP is the most common way to move to Prince Edward Island for work, and it
            starts with a free <strong>Expression of Interest (EOI)</strong>. You
            submit a profile to the PEI Office of Immigration setting out your occupation, work experience, language
            ability and any ties to the island. Prince Edward Island then holds draws roughly once a month, about a
            dozen times a year, and invites the candidates who best fit its current priorities. An EOI
            profile generally stays valid for about <strong>six months</strong>.
          </p>
          <p>
            The crucial difference from many other provinces is that <strong>PEI does not publish a per-draw cut-off
            score</strong>, and there is no public points calculator that returns a guaranteed threshold to aim
            for. Instead, each draw is driven by <strong>priority occupations</strong>, defined by their{" "}
            <a href="/express-entry/noc-teer">NOC</a> codes, which is why understanding where your profile sits against
            PEI&apos;s sector focus matters far more than chasing a number. With no scores to report, the latest PEI PNP
            draw rarely tells you a precise cut-off; it simply signals which sectors the province is inviting.
          </p>
          <Callout type="warning" title="No published cut-offs, and sales/service deprioritised">
            Because PEI publishes no draw cut-offs, eligibility alone tells you little about your real chances. The
            province prioritises healthcare, trades and construction, manufacturing and childcare, while{" "}
            <strong>sales and service occupations have been deprioritised</strong>. We give you a candid read on how
            your occupation aligns before you invest time and fees.
          </Callout>

          <h2>Enhanced (Express Entry) vs base nominations</h2>
          <p>
            PEI offers both an enhanced and base route, and the distinction changes your entire timeline.{" "}
            <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a> is the enhanced option: you must
            already hold an active federal <a href="/express-entry">Express Entry</a> profile, and a PEI nomination adds{" "}
            <strong>600 CRS points</strong> to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a> score.</p>
          <p>That
            boost lifts most candidates well above recent federal draw cut-offs, with the usual roughly six-month
            IRCC processing that follows once IRCC issues the invitation. If your Canadian work history runs through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>, that experience feeds the
            same federal profile. Not sure where your federal score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <p>
            The <strong>Labour Impact</strong> streams are base, or &quot;paper&quot;, nominations. Once PEI nominates
            you, you submit a <strong>separate permanent-residence application directly to IRCC</strong>. A base
            nomination does not add CRS points and is generally processed more slowly than an Express Entry application.
            Confirming whether your route is enhanced or base is one of the first things we check.
          </p>

          <h2>PEI PNP streams and categories</h2>
          <p>
            The table below summarises the main PEI PNP streams, who each is for, and whether it is enhanced (Express
            Entry-aligned) or base. Each links to its dedicated guide where available. Streams and intakes change, so
            confirm current status on princeedwardisland.ca before you apply.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Type"]}
            rows={[
              [
                <a href="/pnp/prince-edward-island/express-entry" key="ee">PEI Express Entry</a>,
                "Candidates with an active federal Express Entry profile and a PEI connection",
                "Enhanced (+600 CRS)",
              ],
              [
                <a href="/pnp/prince-edward-island/labour-impact" key="li">Labour Impact, Skilled Workers in PEI</a>,
                "Skilled workers already employed by a PEI employer with a job offer",
                "Base",
              ],
              [
                <a href="/pnp/prince-edward-island/labour-impact" key="li2">Labour Impact, Skilled Workers Outside Canada</a>,
                "Skilled workers abroad (employer must get Office authorization before offering)",
                "Base",
              ],
              [
                <a href="/pnp/prince-edward-island/labour-impact" key="li3">Labour Impact, Critical Workers</a>,
                "TEER 4–5 roles after ≥6 months full-time with a PEI employer",
                "Base",
              ],
              [
                <a href="/pnp/prince-edward-island/labour-impact" key="li4">Labour Impact, International Graduates</a>,
                "Graduates of publicly funded PEI institutions with a related job offer",
                "Base",
              ],
              [
                <a href="/pnp/prince-edward-island/business-impact" key="bi">Business Impact, Work Permit Entrepreneur</a>,
                "Entrepreneurs (≈$600k net worth) starting or buying a PEI business; two-step",
                "Base",
              ],
            ]}
            caption="Main PEI PNP streams (princeedwardisland.ca, 2026). Eligibility does not guarantee an invitation; intakes may be limited."
          />
          <Callout type="brand" title="The Business Impact (entrepreneur) route works differently">
            The <strong>Business Impact</strong> stream has no job-offer requirement because you are establishing or
            buying a Prince Edward Island business. It typically expects a net worth around $600,000 and follows a{" "}
            two-step process, a temporary work permit first, then nomination once you have run the business. Intake can
            be limited, so confirm whether it is open before planning around it.
          </Callout>

          <h2>PEI PNP eligibility</h2>
          <p>
            Requirements differ by stream, but most Labour Impact routes share a core shape: a genuine{" "}
            <strong>job offer from a Prince Edward Island employer</strong>, qualifying work experience, language
            results appropriate to your occupation, and an intention to live in PEI.</p>
          <p>For{" "}
            <strong>Skilled Workers Outside Canada</strong>, the employer must obtain authorization from the PEI Office
            of Immigration <em>before</em> issuing the offer. <strong>Critical Workers</strong> (TEER 4–5) generally
            need at least six months with the employer, and <strong>International Graduates</strong> must have studied
            at a publicly funded PEI institution. PEI Express Entry adds the federal Express Entry minimums on top.
            Because the published criteria are detailed and updated regularly, the safest step is a profile review
            against the current princeedwardisland.ca program guide.
          </p>

          <h2>The PEI PNP and the Atlantic Immigration Program</h2>
          <p>
            The PEI PNP is not the only route into Prince Edward Island. As one of the four Atlantic provinces, PEI also
            takes part in the <a href="/atlantic-immigration-program">Atlantic Immigration Program (AIP)</a>, a separate,
            employer-driven federal-provincial pathway that runs through designated employers and a settlement plan
            rather than the PEI EOI pool. The two programs overlap in spirit, both are employer-led and both lead to
            permanent residence, but they are distinct applications with different rules.</p>
          <p>Many candidates with a PEI job
            offer qualify for one pathway or the other, and choosing correctly at the outset saves months of wasted
            effort. If you have a job offer from a designated PEI employer, the{" "}
            <a href="/atlantic-immigration-program">AIP</a> may be faster than a base Labour Impact nomination; if you
            hold a strong federal profile, <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a> is
            usually the stronger play.
          </p>
          <p>
            A work permit can bridge either route. Candidates already in Canada on an employer-specific{" "}
            <a href="/work-permits">work permit</a>, or graduates on a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> after studying on a{" "}
            <a href="/study-permit">study permit</a>, often build the PEI work history that strengthens a Labour Impact
            or AIP application. We weigh all of these against your profile before recommending a single path.
          </p>

          <h2>How to apply for the PEI PNP</h2>
          <p>
            Applying to immigrate to PEI follows a clear sequence. First, confirm you meet a stream&apos;s requirements
            and, for most routes, secure an eligible PEI job offer. Next, submit your free{" "}
            <strong>Expression of Interest</strong> and wait to see whether your profile is selected in a monthly draw.
            If invited, you file a complete application with supporting documents to the PEI Office of Immigration. Once
            nominated, you apply to <strong>IRCC</strong> for permanent residence, through Express Entry if your
            nomination is enhanced, or on paper if it is a base Labour Impact nomination.
          </p>
          <p>
            On fees, submitting an EOI is <strong>free</strong>. The Labour Impact and International Graduate
            application fee is around <strong>$300</strong>, while the Business Impact (entrepreneur) stream carries a
            much higher fee of roughly <strong>$10,000</strong>. These provincial amounts are separate from the IRCC
            permanent-residence fees you pay at the federal stage, and all figures change, confirm current fees on
            princeedwardisland.ca before applying.
          </p>

          <h2>PEI PNP processing time</h2>
          <p>
            The PEI PNP processing time runs in stages. How long you wait for an invitation depends on how well your
            occupation matches PEI&apos;s priorities and the pace of the monthly draws, there is no published cut-off to
            predict against.</p>
          <p>After an invitation, you assemble and submit your provincial application; once nominated, an
            enhanced PEI Express Entry application to IRCC is typically processed in roughly <strong>six months</strong>,
            while a base, paper-based Labour Impact application generally takes longer. Most applicants should plan for
            the better part of a year from EOI to permanent residence, sometimes more. You can sense-check current
            federal stages against our <a href="/tools/processing-times">processing times</a> tool.
          </p>

          <h2>How Wild Mountain Immigration helps with the PEI PNP</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Prince Edward Island&apos;s current priority sectors,
            identifies the stream, <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a>, a{" "}
            <a href="/pnp/prince-edward-island/labour-impact">Labour Impact</a> route, the{" "}
            <a href="/pnp/prince-edward-island/business-impact">Business Impact</a> entrepreneur stream or the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, with the strongest realistic
            chance, and builds an EOI that positions you well.</p>
          <p>Because PEI publishes no cut-off scores, that honest
            sector read is where good advice earns its keep. Working under a licensed RCIC (CICC #R706497), our team
            prepares a registration and nomination application that stands up to scrutiny and represents you with the
            province and with IRCC, online from start to finish.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile and stream fit", desc: "We review your occupation, experience, language and any PEI connection against the province's priority sectors, then confirm whether PEI Express Entry, a Labour Impact route, Business Impact or the AIP gives you the strongest realistic chance." },
              { title: "Build and submit your EOI", desc: "We prepare a free Expression of Interest that positions your occupation and ties to Prince Edward Island as strongly as the facts allow, and keep your federal Express Entry profile aligned where the enhanced route applies." },
              { title: "Apply, get nominated and reach PR", desc: "On an invitation, we assemble a complete nomination application, then manage the federal stage, Express Entry for an enhanced nomination or a paper application to IRCC for a base one, through to a decision." },
            ]}
          />
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            PEI PNP application an expert check before you submit, and our <a href="/fees">fees guide</a> explains how
            our professional fee differs from the provincial and IRCC charges.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the PEI PNP streams</h2>
          <p className="mt-3 text-ink-soft">Every Prince Edward Island route to permanent residence, plus the Atlantic Immigration Program.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="PEI Express Entry" desc="The enhanced route: an active federal profile plus a PEI nomination that adds 600 CRS points." href="/pnp/prince-edward-island/express-entry" badge="Enhanced" />
            <FeatureCard icon={Briefcase} title="Labour Impact" desc="The base, employer-driven worker route: Skilled Worker, Critical Worker and International Graduate sub-streams." href="/pnp/prince-edward-island/labour-impact" />
            <FeatureCard icon={Building2} title="Business Impact" desc="The Work Permit Entrepreneur stream: build or buy and run a PEI business, then earn nomination." href="/pnp/prince-edward-island/business-impact" />
            <FeatureCard icon={Anchor} title="Atlantic Immigration Program" desc="A separate, employer-driven federal-provincial route shared across the four Atlantic provinces." href="/atlantic-immigration-program" />
            <FeatureCard icon={MapPin} title="All Provincial Nominee Programs" desc="Compare PEI with every other province and territory's nominee program." href="/pnp" />
            <FeatureCard icon={GraduationCap} title="Free CRS calculator" desc="See your Express Entry score before you commit to an enhanced PEI route." href="/tools/crs-calculator" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the PEI PNP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on how your occupation aligns with Prince Edward Island's priorities and the strongest route to permanent residence."
      />
    </>
  );
}
