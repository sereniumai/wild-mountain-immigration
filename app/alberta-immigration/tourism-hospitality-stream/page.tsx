import type { Metadata } from "next";
import { Calculator, Rocket, Briefcase, MapPin, UtensilsCrossed, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/tourism-hospitality-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Tourism & Hospitality Stream 2026",
  titleAbsolute: "Tourism & Hospitality Stream 2026: Alberta AAIP",
  description:
    "The Alberta Tourism and Hospitality Stream (AAIP): eligible employers, roles and EOI scoring for Banff & Canmore hospitality workers. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "alberta tourism and hospitality stream",
    "aaip tourism hospitality eligibility",
    "banff canmore hospitality immigration",
    "hospitality worker pr alberta",
    "travel alberta experience provider",
  ],
});

const faqs = [
  {
    q: "What is the Alberta Tourism and Hospitality Stream?",
    a: "It is a worker pathway under the Alberta Advantage Immigration Program (AAIP) for people working in Alberta's tourism and hospitality sector who hold a job offer from an eligible employer, typically an employer that is a recognised industry-association member or Travel Alberta experience provider. Like other AAIP worker streams, it runs on the Worker Expression of Interest (EOI), and a nomination leads to a separate IRCC permanent-residence application. Verify current rules on alberta.ca before applying.",
  },
  {
    q: "Who is an eligible tourism & hospitality employer?",
    a: "Eligibility centres on the employer being part of Alberta's recognised tourism and hospitality sector, for example, a member of a qualifying industry association or a Travel Alberta experience provider, and offering you a genuine, full-time, permanent role in an eligible occupation. The job offer must be in Alberta and meet the program's wage and genuineness tests. Because the precise employer-eligibility criteria are set by Alberta and can change, confirm your specific employer qualifies on alberta.ca before relying on this route.",
  },
  {
    q: "Can hospitality workers in Banff get PR through the AAIP?",
    a: "Yes, hospitality workers in Banff, Canmore and across the Bow Valley can pursue permanent residence through the AAIP, and the Tourism & Hospitality Stream is built for exactly this kind of resort-corridor employment. You need an eligible Alberta employer's job offer in a qualifying role, the required language level and a competitive Worker EOI score. A nomination is a provincial endorsement, not PR itself; IRCC makes the final decision on a separate application.",
  },
  {
    q: "What jobs qualify under the Tourism & Hospitality Stream?",
    a: "The stream targets front-line and supervisory tourism and hospitality roles, cooks, food and beverage servers and supervisors, front-desk and guest-services staff, housekeeping supervisors, and tour or outdoor-adventure roles such as guides and instructors. Each role must be a genuine, full-time position with an eligible Alberta employer, and the National Occupational Classification (NOC) code matters for both eligibility and language requirements. Check the current eligible-occupation guidance on alberta.ca, as lists change.",
  },
  {
    q: "How many nominations does the Tourism & Hospitality Stream get in 2026?",
    a: "Alberta's indicative 2026 allocation for the Tourism & Hospitality Stream is around 150 nominations, a small slice of the province's total 6,403 AAIP allocation. Because the pool is small, draws are competitive and held 'as needed' rather than on a fixed schedule, and meeting the minimum requirements does not guarantee an invitation. Allocations and draw cut-offs change through the year, so confirm the latest figures on alberta.ca.",
  },
  {
    q: "Do I need to already be working in Alberta to apply?",
    a: "You need a genuine job offer from an eligible Alberta tourism and hospitality employer, and most candidates are already working in the province on a valid work permit. Working in Alberta also earns extra Worker EOI points (10 for six or more months of Alberta work). Some applicants may apply with a qualifying offer while still abroad, but your situation, occupation and work-permit status all affect eligibility. Book a consultation for a tailored read.",
  },
  {
    q: "How is the Tourism & Hospitality Stream different from the Rural Renewal Stream?",
    a: "Both are base AAIP streams that lead to a separate IRCC application, but they target different things. The Tourism & Hospitality Stream is sector-based, it focuses on tourism and hospitality occupations with an eligible-employer offer anywhere in Alberta, including resort towns. The Rural Renewal Stream is place-based, it requires a job in a designated rural community plus a community endorsement letter. A Banff or Canmore hospitality worker usually fits the tourism stream, since those towns are not rural-renewal communities.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. An AAIP nomination is a provincial endorsement, not a grant of permanent residence. You still submit a separate application to Immigration, Refugees and Citizenship Canada (IRCC), which makes the final decision on medical, security and admissibility grounds. Meeting an EOI cut-off also does not guarantee an invitation, because Alberta selects from its pool through targeted draws. We build the strongest possible case.",
  },
];

export default function TourismHospitalityStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Tourism & Hospitality Stream, AAIP Guide for Bow Valley Workers (2026)",
            description:
              "The Alberta Tourism and Hospitality Stream (AAIP): eligible employers, roles and EOI scoring for Banff & Canmore hospitality workers. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Alberta Tourism & Hospitality Stream (AAIP) support",
            description:
              "The Alberta Tourism and Hospitality Stream (AAIP): eligible employers, roles and EOI scoring for Banff & Canmore hospitality workers. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta provincial nominee program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Our Backyard"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Tourism & Hospitality Stream", path: PATH },
        ]}
        title={<>Alberta Tourism &amp; Hospitality Stream: <span className="text-brand">PR for hospitality workers</span></>}
        lede={
          <p>
            The <strong>Alberta Tourism and Hospitality Stream</strong> is an AAIP route to permanent residence for workers
            in Alberta&apos;s tourism and hospitality sector who hold a job offer from an eligible employer. Based in the
            Bow Valley, we know the Banff and Canmore hospitality scene first-hand.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Score your AAIP EOI, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free AAIP Points Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Estimate your Alberta Worker EOI score (out of 100) in two minutes, no email required.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Calculate my EOI score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Rural Renewal Stream", href: "/alberta-immigration/rural-renewal-stream", note: "The place-based rural route" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "For workers already in Alberta" },
                { label: "AAIP calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Tourism and Hospitality Stream is a base AAIP route to permanent residence for tourism and hospitality workers who hold a job offer from an eligible employer. That employer is usually a recognised industry-association member or a Travel Alberta experience provider, and sector membership earns extra Worker Expression of Interest points. The stream is a natural fit for Banff, Canmore and Bow Valley hospitality workers. A nomination then supports a separate application to IRCC, and allocations stay small and competitive."
            items={[
              <>The <strong>Alberta Tourism and Hospitality Stream</strong> is a base AAIP route for tourism &amp; hospitality workers with an eligible-employer job offer.</>,
              <>An eligible employer is generally a recognised <strong>industry-association member or Travel Alberta experience provider</strong> offering a genuine full-time role.</>,
              <>Sector membership earns <strong>+6 Worker EOI points</strong> under the economic-factors section of the points grid.</>,
              <>It is the natural fit for <strong>Banff, Canmore and Bow Valley</strong> hospitality workers, resort towns that are not Rural Renewal communities.</>,
              <>Alberta&apos;s indicative <strong>2026 allocation is ~150</strong> nominations, so draws are small and competitive; a nomination is not PR.</>,
            ]}
          />

          <h2>What is the Alberta Tourism and Hospitality Stream?</h2>
          <p>
            The <strong>Alberta Tourism and Hospitality Stream</strong> is a worker pathway under the Alberta Advantage
            Immigration Program (AAIP) for people employed in the province&apos;s tourism and hospitality sector who hold a
            job offer from an eligible employer. Launched in March 2024, it gives the cooks, servers, front-desk staff and
            guides who keep Alberta&apos;s visitor economy running a defined route toward permanent residence. It is a{" "}
            <em>base</em> stream, which means a nomination leads to a separate application to IRCC rather than adding CRS
            points to an Express Entry profile.
          </p>
          <p>
            For 2026, Alberta&apos;s indicative allocation for this stream is roughly <strong>150 nominations</strong>, a
            small share of the province&apos;s total <strong>6,403</strong> AAIP allocation (source: alberta.ca, AAIP, 2026).
            That tight cap is the single most important planning fact: spaces are limited, draws are held &ldquo;as
            needed&rdquo; rather than on a fixed schedule, and meeting the minimum requirements does not guarantee an
            invitation. Like every AAIP worker pathway, it runs on the Worker Expression of Interest (EOI), scored out of 100.
          </p>
          <Callout type="brand" title="Nomination is a step, not the finish line">
            An AAIP nomination is a provincial endorsement, not permanent residence. You still file a separate application
            with IRCC, which decides on medical, security and admissibility grounds. Be wary of any source, or any
            consultant, that implies a nomination is guaranteed or equals PR.
          </Callout>

          <h2>Who is an eligible tourism & hospitality employer?</h2>
          <p>
            Eligibility under the <strong>Tourism and Hospitality Stream</strong> hinges on your employer being part of
            Alberta&apos;s recognised tourism and hospitality sector. In practice that usually means the employer is a member
            of a qualifying industry association or a <strong>Travel Alberta experience provider</strong>, and that they are
            offering you a genuine, full-time, permanent role in an eligible occupation. The job offer must be located in
            Alberta and pass the program&apos;s wage and genuineness checks.
          </p>
          <p>
            This sector membership is not just a gatekeeping rule: it also <strong>earns points</strong>. Under the Worker
            EOI economic-factors section, a job offer with a tourism and hospitality sector member (or an equivalent
            recognised designation) is worth <strong>6 points</strong>, the same category that rewards a Rural Renewal
            designated-community endorsement or a law-enforcement employer. Because Alberta sets and updates the exact
            employer-eligibility criteria, always confirm that your specific employer qualifies on alberta.ca before relying
            on this route.
          </p>

          <h2>Which roles qualify under the Tourism & Hospitality Stream?</h2>
          <p>
            The stream targets front-line and supervisory occupations across accommodation, food and beverage, and visitor
            experiences. The table below summarises the typical eligible roles and what each one needs. National Occupational
            Classification (NOC) codes matter here: they drive both whether a role is eligible and the language level you
            must meet, so getting the NOC right is one of the most common places a DIY application goes wrong.</p>
          <p>Two of the most
            common files we see are <strong>cook immigration to Alberta (NOC 63200)</strong> and{" "}
            <strong>food and beverage server PR (NOC 65200)</strong>, the front-line roles that fill Bow Valley kitchens and
            dining rooms year-round.
          </p>
          <DataTable
            headers={["Eligible role (examples)", "Typical NOC TEER", "Key requirements"]}
            rows={[
              ["Cooks", "TEER 3", "Eligible-employer offer; language at the level set for the NOC; relevant experience"],
              ["Food & beverage servers", "TEER 4", "Full-time permanent offer; language to the NOC's required CLB; genuine role"],
              ["Food service / restaurant supervisors", "TEER 2–3", "Supervisory offer with an eligible employer; language and experience to match"],
              ["Front-desk & guest-services agents", "TEER 4", "Hotel/resort offer; customer-facing language ability; valid status if in Alberta"],
              ["Housekeeping & accommodation supervisors", "TEER 3", "Supervisory accommodation role; eligible employer; meets language minimum"],
              ["Tour & outdoor-adventure guides / instructors", "TEER 3–5", "Experience-provider offer; relevant certification where required; language to NOC"],
            ]}
            caption="Illustrative eligible Tourism & Hospitality Stream roles and requirements (alberta.ca, AAIP, May 2026). Occupation lists and NOC mapping change, verify before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The Worker EOI awards general language points on the <em>lowest</em> of your four abilities (reading, writing,
            listening, speaking), and the minimum to submit is CLB/NCLC 4. For customer-facing hospitality roles, a single
            weak skill, often speaking or listening, can quietly cost you both eligibility and points.
          </Callout>

          <h2>What are the Tourism & Hospitality Stream eligibility requirements?</h2>
          <p>
            To be considered under the <strong>Alberta Tourism and Hospitality Stream</strong>, you generally need: a genuine
            full-time, permanent job offer from an <strong>eligible tourism and hospitality employer</strong> in an eligible
            occupation; language ability meeting the minimum for your NOC (at least CLB/NCLC 4 to submit an EOI); and a
            submitted, competitive Worker Expression of Interest. Most successful candidates are already working in Alberta on
            a valid work permit, which both supports the job-offer requirement and earns extra EOI points.
          </p>
          <p>
            Because all AAIP worker pathways share the same 100-point Worker EOI grid, it is worth seeing where a hospitality
            profile typically earns. Our <a href="/tools/aaip-calculator">AAIP points calculator</a> estimates your score in
            about two minutes, and the <a href="/alberta-immigration">Alberta (AAIP) overview</a> explains how the wider
            program fits together.
          </p>
          <DataTable
            headers={["Worker EOI factor", "Relevance to hospitality workers", "Max points"]}
            rows={[
              ["Permanent full-time Alberta job offer", "Core requirement of this stream", "10"],
              ["Tourism & hospitality sector membership", "Eligible-employer / association member, the +6 that defines this route", "6"],
              ["Work experience in Canada (6+ mo in Alberta)", "Rewards time already worked in a Banff/Canmore role", "10"],
              ["General language proficiency", "Scored on your lowest of four abilities (min CLB 4)", "10"],
              ["Alberta job offer location (other community)", "Resort-corridor offers outside Calgary/Edmonton CMAs score here", "5"],
              ["Age (max at 21–34)", "Younger front-line workers score the maximum", "5"],
            ]}
            caption="Selected Worker EOI factors most relevant to Tourism & Hospitality applicants (alberta.ca Worker EOI points grid, Aug 2025). Total grid is 100 = 69 human capital + 31 economic."
          />

          <h2>Why the Bow Valley, Banff & Canmore, fits this stream</h2>
          <p>
            We are based in Canmore, in the Bow Valley corridor, so the <strong>Banff and Canmore hospitality immigration</strong>{" "}
            picture is genuinely our backyard. The corridor&apos;s economy runs on tourism: hotels, mountain lodges,
            restaurants, ski operations and guided outdoor-adventure businesses staff up year-round and lean heavily on
            international workers. <strong>Hotel and ski-resort workers in Banff and Canmore</strong>, from front-desk agents
            to lift and guest-services teams, are precisely the people this route is built for.</p>
          <p>We field steady enquiries
            on hotel worker PR in Alberta, ski-resort worker immigration and Canmore hospitality jobs that lead to PR. Many of
            those employers are exactly the kind of Travel Alberta experience providers and industry-association members the
            Tourism &amp; Hospitality Stream is designed around.
          </p>
          <p>
            A practical point for corridor workers: Banff and Canmore are <em>resort towns, not designated Rural Renewal
            communities</em>, so the place-based <a href="/alberta-immigration/rural-renewal-stream">Rural Renewal Stream</a>{" "}
            usually is not the right fit there. The sector-based Tourism &amp; Hospitality Stream is. And because an offer
            outside the Calgary and Edmonton census metropolitan areas can attract job-offer-location points, a Bow Valley
            role can score well on the Worker EOI. If you are already employed in Alberta on a valid permit, the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> may be a parallel option worth
            comparing.
          </p>
          <Callout type="warning" title="Housing and the genuine-offer test in resort towns">
            Bow Valley wages and housing are a real-world factor in whether an offer is found genuine. Make sure your offer
            meets Alberta&apos;s wage expectations for the occupation and region, an underpaid &ldquo;offer&rdquo; can sink an
            otherwise strong file. We pressure-test this before you submit.
          </Callout>

          <h2>How do you apply to the Tourism & Hospitality Stream?</h2>
          <p>
            Applying follows the standard AAIP worker sequence: confirm your eligible role and employer, build the strongest
            Worker EOI you can, and, if invited, submit a complete AAIP application before moving to the federal stage.
          </p>
          <Steps
            steps={[
              { title: "Confirm your role & employer qualify", desc: "Check that your occupation is eligible and your employer is a recognised tourism & hospitality member or Travel Alberta experience provider, with a genuine full-time permanent offer." },
              { title: "Test language & gather documents", desc: "Take an approved language test (IELTS, CELPIP or TEF/TCF) to at least CLB 4, get an ECA for foreign education, and collect job-offer and work-experience evidence." },
              { title: "Submit your Worker EOI", desc: "Create and submit your Worker EOI (the $135 WEOI fee applies from April 7, 2026). It stays in Alberta's pool for one year, scored out of 100." },
              { title: "Receive an invitation", desc: "If your EOI meets a Tourism & Hospitality draw's cut-off, Alberta issues an invitation to apply. Eligibility alone does not guarantee this." },
              { title: "Apply to the AAIP & get nominated", desc: "Submit a complete AAIP application (the $1,500 fee applies). On approval, Alberta nominates you for permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps Bow Valley hospitality workers</h2>
          <p>
            Alberta is our home province and the Bow Valley is our backyard, so the Tourism &amp; Hospitality Stream is a
            route we know well within the <a href="/alberta-immigration">AAIP</a>. Working under a licensed RCIC
            (CICC #R706497), our team confirms whether your employer genuinely qualifies, gets your{" "}
            <abbr title="National Occupational Classification">NOC</abbr> code right, and builds your Worker EOI to capture
            every point you are entitled to, including the +6 sector points and any job-offer-location points a Banff or
            Canmore role can earn. We catch the small mistakes that cause avoidable refusals: a language band one short, a
            mis-coded occupation, or a work-permit-status gap.
          </p>
          <p>
            If another route fits better, we compare this stream with the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, the{" "}
            <a href="/alberta-immigration/rural-renewal-stream">Rural Renewal Stream</a> and the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, weigh your federal{" "}
            <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, and set Alberta against other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>. We can line up the right{" "}
            <a href="/work-permits">work permit</a>, score you with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and set out our{" "}
            <a href="/fees">fees</a> up front.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            <strong> Alberta Tourism and Hospitality Stream</strong> application an expert check before you submit, a
            sensible move whether you are mapping a Banff work permit to PR or weighing a wider plan. Rules and allocations
            change through the year, so we always confirm the live alberta.ca guidance before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Tourism &amp; Hospitality Stream is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base AAIP route for workers already employed anywhere in Alberta on a valid permit." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={MapPin} title="Rural Renewal Stream" desc="The place-based route for jobs in a designated rural community with an endorsement." href="/alberta-immigration/rural-renewal-stream" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="The enhanced route that adds 600 CRS points to a federal Express Entry profile." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={UtensilsCrossed} title="Express Entry" desc="The federal system behind the enhanced stream and the CRS score that drives it." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Hospitality worker in Banff or Canmore?"
        sub="Get started with a licensed RCIC in the Bow Valley for an honest read on your Tourism & Hospitality Stream eligibility and Worker EOI score."
      />
    </>
  );
}
