import type { Metadata } from "next";
import { Anchor, Briefcase, GraduationCap, MapPin } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/atlantic-immigration-program";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Atlantic Immigration Program",
  titleAbsolute: "Atlantic Immigration Program (AIP) 2026: PR Guide",
  description:
    "Atlantic Immigration Program (AIP) explained: an employer-driven route to PR in Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador. RCIC-led.",
  path: PATH,
  keywords: [
    "atlantic immigration program",
    "AIP canada",
    "atlantic immigration program requirements",
    "atlantic canada immigration",
    "designated employer atlantic canada",
  ],
});

const faqs = [
  {
    q: "What is the Atlantic Immigration Program (AIP)?",
    a: "The Atlantic Immigration Program (AIP) is a permanent, employer-driven pathway to permanent residence for skilled workers and international graduates who want to settle in one of Canada's four Atlantic provinces: Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador. It became a permanent program in 2022, replacing the earlier Atlantic Immigration Pilot. The core feature is that you need a job offer from a designated employer in the region, who supports your move to permanent residence.",
  },
  {
    q: "Which provinces are part of the Atlantic Immigration Program?",
    a: "The AIP covers the four Atlantic provinces only: Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador. It does not apply to Quebec or to any other province. If you want to settle in Atlantic Canada and have an offer from a designated employer there, this is often the most direct route to permanent residence.",
  },
  {
    q: "Do I need a job offer for the Atlantic Immigration Program?",
    a: "Yes. A genuine job offer from a designated employer in Atlantic Canada is the foundation of the program. The employer must be approved (designated) by the province, and they support your application and your settlement plan. Without a designated-employer job offer, the AIP is not open to you, though other federal or provincial routes may be.",
  },
  {
    q: "What are the requirements for the Atlantic Immigration Program?",
    a: "Beyond a designated-employer job offer and a provincial endorsement, you generally need qualifying work experience (or graduation from a recognised Atlantic institution for the international-graduate route), language ability (typically CLB 5, or CLB 4 for some intermediate roles), education with an Educational Credential Assessment if your studies were outside Canada, and a settlement plan plus proof of funds. Criteria can change, so always confirm the current requirements on canada.ca and with the relevant province.",
  },
  {
    q: "Does the Atlantic Immigration Program lead to permanent residence?",
    a: "Yes. The AIP is a route to permanent residence, not just a temporary work permit. While your permanent residence application is processed you may be eligible for a temporary work permit so you can start your job sooner, but the destination of the program is PR in Atlantic Canada. We confirm your eligibility and build the application so the path to PR is as smooth as possible.",
  },
  {
    q: "How is the AIP different from Express Entry?",
    a: "Express Entry is a points-ranked federal pool: you build a profile, you are scored under the Comprehensive Ranking System, and the highest-ranked candidates are invited to apply. The Atlantic Immigration Program does not work that way. It is employer-driven, so the starting point is a genuine job offer from a designated Atlantic employer plus a provincial endorsement, rather than a CRS score. For candidates with a solid Atlantic job offer but a CRS score that is not yet competitive for a federal draw, the AIP can be a more direct route. Many people qualify for both, and our team compares them side by side before you commit.",
  },
  {
    q: "How long does the Atlantic Immigration Program take and what does it cost?",
    a: "Timelines move with application volume, so we plan against current IRCC processing estimates rather than a fixed promise, and the temporary work permit option can let you start your Atlantic job while permanent residence is assessed. On cost, budget for IRCC government fees, the right-of-permanent-residence fee, biometrics, an approved language test, an Educational Credential Assessment if you studied abroad, a medical exam, police certificates and proof of settlement funds. Government figures change periodically, so confirm the current amounts on canada.ca, and see our fees guide for how our professional fee differs from government fees.",
  },
];

export default function AtlanticImmigrationProgramPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Atlantic Immigration Program (AIP): 2026 RCIC Guide",
            description:
              "Atlantic Immigration Program (AIP) explained: an employer-driven route to PR in Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "Atlantic Immigration Program support",
            description:
              "Atlantic Immigration Program (AIP) explained: an employer-driven route to PR in Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador. RCIC-led.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Immigrate"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Atlantic Immigration Program", path: PATH },
        ]}
        title={<>Atlantic Immigration Program <span className="text-brand">(AIP)</span></>}
        lede={
          <p>
            The <strong>Atlantic Immigration Program (AIP)</strong> is a permanent, employer-driven route to permanent
            residence for skilled workers and international graduates who want to settle in one of Canada&apos;s four
            Atlantic provinces. With a job offer from a designated employer and a provincial endorsement, it can be one
            of the most direct paths to PR in the region.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/pnp/nova-scotia", label: "Nova Scotia PNP" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Anchor className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Eyeing Atlantic Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Have an offer from an Atlantic employer, or hoping to land one? Tell us your situation and we will map
                your route to permanent residence.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia (NSNP)", href: "/pnp/nova-scotia", note: "The province's own nominee streams" },
                { label: "New Brunswick (NBPNP)", href: "/pnp/new-brunswick", note: "Employer and skilled-worker streams" },
                { label: "Prince Edward Island (PEI PNP)", href: "/pnp/prince-edward-island", note: "PEI's nominee program" },
                { label: "Newfoundland and Labrador (NLPNP)", href: "/pnp/newfoundland-and-labrador", note: "The province's nominee program" },
                { label: "Express Entry", href: "/express-entry", note: "The main federal PR system" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Atlantic Immigration Program (AIP) is a permanent, employer-driven pathway to permanent residence in Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador. To qualify, you need a job offer from a designated employer in Atlantic Canada and a provincial endorsement. You also need work experience (or graduation from a recognised Atlantic institution), language at typically CLB 5, education and a settlement plan. It became permanent in 2022 after the Atlantic Immigration Pilot, and it does not cover Quebec."
            items={[
              <>The <strong>Atlantic Immigration Program</strong> is a <strong>permanent, employer-driven</strong> route to PR in <a href="/pnp/nova-scotia">Nova Scotia</a>, <a href="/pnp/new-brunswick">New Brunswick</a>, <a href="/pnp/prince-edward-island">PEI</a> and <a href="/pnp/newfoundland-and-labrador">Newfoundland and Labrador</a>.</>,
              <>You need a <strong>job offer from a designated employer</strong> in Atlantic Canada plus a <strong>provincial endorsement</strong>.</>,
              <>Other criteria include <strong>work experience</strong> (or graduation from a recognised Atlantic institution), <strong>language</strong> (typically CLB 5), education and a settlement plan.</>,
              <>It became <strong>permanent in 2022</strong>, replacing the earlier Atlantic Immigration Pilot, and can be more direct than <a href="/express-entry">Express Entry</a> for the right candidate.</>,
              <>It covers <strong>Atlantic Canada only</strong>, not Quebec; confirm current criteria on canada.ca and with the province.</>,
            ]}
          />

          <h2>What is the Atlantic Immigration Program?</h2>
          <p>
            The <strong>Atlantic Immigration Program (AIP)</strong> is a federal program, run in partnership with the
            four Atlantic provinces, that helps employers in the region hire skilled workers and international graduates
            who then become permanent residents. It became a <strong>permanent program in 2022</strong>, building on the
            success of the earlier Atlantic Immigration Pilot. The idea is simple: Atlantic Canada needs workers, local
            employers identify the people they want to hire, and the program turns that hire into a path to permanent
            residence.
          </p>
          <p>
            What sets the AIP apart from Express Entry is that it is <strong>employer-driven</strong>. The starting point
            is not a points score, it is a genuine job offer from a <strong>designated employer</strong>, an employer
            the province has approved to use the program. That employer supports your application, helps with your
            settlement plan, and is part of why this route can feel more direct than the federal pool for the right
            candidate.
          </p>

          <Callout type="brand" title="Atlantic Canada only, not Quebec">
            The AIP covers <strong>Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador</strong>{" "}
            only. It does not apply to Quebec, which runs its own separate immigration system, and it does not apply to
            provinces outside the Atlantic region. If your heart is set on Atlantic Canada, this is the program built for
            you.
          </Callout>

          <h2>The four Atlantic provinces</h2>
          <p>
            The Atlantic Immigration Program spans Canada&apos;s four eastern coastal provinces, each with its own
            economy, labour shortages and lifestyle. Whichever you settle in, the program works the same way: a
            designated employer there hires you, the province endorses the offer, and you apply for permanent residence.
            Each province also runs its own Provincial Nominee Program alongside the AIP, so it is worth knowing both
            routes into the place you want to live:
          </p>
          <ul>
            <li><a href="/pnp/nova-scotia">Nova Scotia</a>, the most populous Atlantic province, with a strong economy in Halifax and active nominee streams alongside the AIP.</li>
            <li><a href="/pnp/new-brunswick">New Brunswick</a>, Canada&apos;s only officially bilingual province, with demand across healthcare, trades and services.</li>
            <li><a href="/pnp/prince-edward-island">Prince Edward Island</a>, the smallest province, with its own nominee program and a close-knit community feel.</li>
            <li><a href="/pnp/newfoundland-and-labrador">Newfoundland and Labrador</a>, with opportunities in healthcare, ocean industries and growing sectors served by its nominee program.</li>
          </ul>

          <h2>Who the program is for</h2>
          <p>
            The AIP serves two broad groups, each with its own entry route into the same permanent-residence outcome:
          </p>
          <ul>
            <li><strong>Skilled workers</strong> with a qualifying job offer from a designated Atlantic employer and the right recent work experience.</li>
            <li><strong>International graduates</strong> who completed an eligible credential at a recognised institution in Atlantic Canada, who can use the international-graduate route without the same work-experience requirement.</li>
          </ul>
          <p>
            In both cases the destination is the same: <strong>permanent residence</strong> in one of the four Atlantic
            provinces, with a designated employer behind your application and a province endorsing it.
          </p>

          <h2>The international-graduate stream</h2>
          <p>
            If you studied in Atlantic Canada, the program has a route built for you. The{" "}
            <strong>international-graduate stream</strong> recognises that graduates of a recognised post-secondary
            institution in one of the four provinces already have local credentials and, often, local connections.
            Where the skilled-worker route asks for recent qualifying work experience, eligible graduates can apply
            without meeting the same experience requirement, provided they completed an eligible credential at a
            recognised Atlantic institution and meet the other criteria.</p>
          <p>It is a natural next step after a{" "}
            <a href="/study-permit">study permit</a>, and it sits alongside the{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a> as a way to turn study in the region
            into permanent residence. We confirm whether your specific program and institution qualify before you
            count on this route.
          </p>

          <h2>How the employer-driven process works</h2>
          <p>
            The mechanics of the AIP are different from a points-based system, so it helps to understand the moving
            parts. Four things have to come together:
          </p>
          <ul>
            <li><strong>A designated employer.</strong> The employer must first be approved (designated) by the province to use the program. You cannot use the AIP with an employer who is not designated.</li>
            <li><strong>A genuine job offer.</strong> That employer makes you a real, qualifying job offer in an eligible occupation, full-time and non-seasonal for most roles.</li>
            <li><strong>A provincial endorsement.</strong> The province reviews the job offer and your settlement plan and, if satisfied, endorses your application. The endorsement is what unlocks the federal permanent residence step.</li>
            <li><strong>A settlement plan.</strong> You complete a settlement plan with an approved service provider, so you and your family arrive with a clear plan for housing, schooling, language support and work.</li>
          </ul>
          <p>
            Because the employer is so central, much of our work on an AIP file is making sure the offer, the
            occupation and the endorsement paperwork all line up cleanly before anything reaches IRCC.
          </p>

          <h2>Atlantic Immigration Program requirements</h2>
          <p>
            The exact thresholds can change and vary slightly by route and role, so treat the table below as a working
            overview and always confirm the current criteria on <strong>canada.ca</strong> and with the relevant
            province before you rely on them.
          </p>
          <DataTable
            headers={["Requirement", "What it means", "Typical standard"]}
            rows={[
              ["Designated-employer job offer", "A genuine, full-time offer from an employer approved to use the AIP", "Required for both routes"],
              ["Provincial endorsement", "The province endorses your job offer and settlement plan", "Required"],
              ["Work experience", "Recent, qualifying experience in your occupation", "Skilled-worker route (graduates may be exempt)"],
              ["International-graduate route", "An eligible credential from a recognised Atlantic institution", "Alternative to work experience"],
              ["Language", "Approved test result in English or French", "Typically CLB 5 (CLB 4 for some intermediate roles)"],
              ["Education", "Canadian credential, or an ECA if studied abroad", "Required, with ECA for foreign study"],
              ["Settlement plan and funds", "A plan to settle plus proof of funds (unless already working in Canada)", "Required"],
            ]}
            caption="Illustrative overview of AIP requirements. Confirm the current criteria on canada.ca and with the relevant province before applying."
          />
          <Callout type="warning" title="Criteria and lists can change">
            Designated-employer lists, occupation eligibility and language thresholds are set by the program and the
            provinces, and they are updated over time. We always check your specific route against the current official
            requirements rather than relying on figures that may have moved.
          </Callout>

          <h2>Eligibility in more detail</h2>
          <p>
            Beyond the headline requirements, a few specifics decide whether an AIP application holds together. We work
            through each of these with you early, because fixing a gap before you apply is far easier than explaining
            one afterwards:
          </p>
          <ul>
            <li><strong>Work experience.</strong> The skilled-worker route generally asks for recent, qualifying experience in your occupation. The international-graduate stream can substitute an eligible Atlantic credential for that experience.</li>
            <li><strong>Language.</strong> You usually need an approved language test result in English or French, typically around CLB 5, with CLB 4 acceptable for some intermediate-skilled occupations. Even strong speakers normally sit an approved test such as IELTS or CELPIP to claim the result.</li>
            <li><strong>Education and ECA.</strong> You need a Canadian credential, or a foreign credential assessed through an Educational Credential Assessment (ECA) so it can be compared to Canadian standards.</li>
            <li><strong>Funds.</strong> You generally show proof of settlement funds to support yourself and your family on arrival, unless you are already living and working in Canada.</li>
            <li><strong>The job offer itself.</strong> The offer has to come from a designated employer and match an eligible occupation and skill level under the National Occupational Classification (NOC), so the NOC code matters as much as the wage. Some routes accept intermediate-skilled occupations at a lower language threshold.</li>
          </ul>

          <h2>Step by step: how an AIP application works</h2>
          <Steps
            steps={[
              { title: "Secure a designated-employer offer", desc: "You receive a genuine, qualifying job offer from an employer the province has approved to use the program. This is the foundation everything else rests on." },
              { title: "Complete a settlement plan", desc: "You work with an approved settlement service provider to build a plan covering housing, schooling, language support and work for you and your family." },
              { title: "Get the provincial endorsement", desc: "The province reviews your offer and settlement plan and, if satisfied, issues an endorsement letter for your application. You may apply for a temporary work permit at this stage to start sooner." },
              { title: "Apply to IRCC for permanent residence", desc: "With the endorsement in hand, you submit your permanent residence application with biometrics, medical, police certificates and proof of funds." },
            ]}
          />

          <h2>AIP vs Express Entry vs the provincial PNP streams</h2>
          <p>
            Many people who qualify for the Atlantic Immigration Program also qualify for{" "}
            <a href="/express-entry">Express Entry</a> or for an Atlantic province&apos;s own{" "}
            <a href="/pnp">Provincial Nominee Program</a>. They lead to the same destination, permanent residence, but
            they get there differently, and the right one depends on your profile rather than your preference. Here is
            how they compare:
          </p>
          <DataTable
            headers={["Route", "How you qualify", "Best for"]}
            rows={[
              ["Atlantic Immigration Program", "A designated-employer job offer plus a provincial endorsement", "Workers and graduates with an Atlantic job offer, even if their CRS is not yet competitive"],
              ["Express Entry", "A points-ranked federal pool scored by the CRS", "Skilled workers with strong CRS factors who are flexible on where they settle"],
              ["Provincial Nominee Programs", "A nomination from a specific province (often Express Entry-aligned)", "Workers a province needs; a nomination adds 600 CRS points"],
            ]}
            caption="The AIP, Express Entry and the Atlantic PNPs all lead to permanent residence. The right route depends on your job offer, CRS score and where you want to live."
          />
          <p>
            A job offer can also boost an Express Entry profile, and a{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS</a> score that is competitive may make a federal
            draw faster than waiting for an employer match. If you already have Canadian experience, the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> may apply; if your
            experience is foreign, the <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> program
            may fit. You can estimate where you stand with our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and our team weighs all of these against the AIP before
            you choose.
          </p>

          <h2>Costs and timelines</h2>
          <p>
            Costs on an AIP file fall into two buckets. <strong>Government and third-party fees</strong> include IRCC
            processing, the right-of-permanent-residence fee, biometrics, an approved language test, an{" "}
            <strong>ECA</strong> if you studied abroad, a medical exam, police certificates and proof of settlement
            funds. These figures change periodically, so we itemise the current numbers for your case and you can confirm
            government amounts on <strong>canada.ca</strong>. Our <a href="/fees">fees guide</a> explains how our
            professional fee works and how it differs from the government fees above.
          </p>
          <p>
            On <strong>timelines</strong>, AIP processing time moves with application volume, so we plan against current
            IRCC estimates rather than a fixed promise. The practical advantage of the program is that, once you hold
            your endorsement letter, you may be able to apply for a temporary <a href="/work-permits">work permit</a>{" "}
            and begin your Atlantic job, whether that is in Halifax or elsewhere in the region, while your permanent
            residence application is assessed, rather than waiting at home.
          </p>

          <h2>How the Atlantic Immigration Program leads to PR</h2>
          <p>
            The AIP is a <strong>route to permanent residence</strong>, not a temporary work scheme. Once you have a
            designated-employer job offer and a provincial endorsement, you submit your permanent residence application.
            While it is processed, you may be eligible for a <strong>temporary work permit</strong> so you can start your
            job in Atlantic Canada sooner rather than waiting at home. The endgame, though, is PR.
          </p>
          <p>
            If the AIP is not the right fit, or you do not yet have a designated-employer offer, the Atlantic provinces
            also run their own Provincial Nominee streams. You can explore{" "}
            <a href="/pnp/nova-scotia">Nova Scotia</a>, <a href="/pnp/new-brunswick">New Brunswick</a>,{" "}
            <a href="/pnp/prince-edward-island">Prince Edward Island</a> and{" "}
            <a href="/pnp/newfoundland-and-labrador">Newfoundland and Labrador</a>, or the federal{" "}
            <a href="/express-entry">Express Entry</a> system, as alternative paths to the same region.
          </p>

          <h2>How Wild Mountain Immigration helps with the AIP</h2>
          <p>
            Wild Mountain Immigration is a CICC-regulated practice led by a licensed RCIC (R706497), and we represent
            clients entirely online by video call and secure document sharing. On an Atlantic Immigration Program file,
            our job is to make sure the designated-employer offer, the occupation classification, the provincial
            endorsement and your permanent residence application all line up before anything reaches IRCC.</p>
          <p>We assess
            your eligibility honestly, compare the AIP against <a href="/express-entry">Express Entry</a> and the{" "}
            <a href="/pnp">Atlantic PNPs</a>, and build the route where you are strongest. Our scope is standard RCIC
            work, and what we do is give your application the best possible chance.
          </p>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "We review your job offer, experience or graduation, language and education to confirm which AIP route fits and whether you meet the current criteria." },
              { title: "Prepare endorsement and PR", desc: "We help line up the designated-employer offer, the provincial endorsement, your settlement plan and the supporting documents IRCC expects." },
              { title: "Apply and arrive", desc: "We build a complete permanent residence application, flag any temporary work permit option, and represent you through to your move to Atlantic Canada." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Routes into Atlantic Canada</h2>
          <p className="mt-3 text-ink-soft">The AIP is one of several ways to settle in the region. Explore the alternatives.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Provincial Nominee Programs" desc="Each Atlantic province runs its own nominee streams alongside the AIP, with employer and skilled-worker options." href="/pnp" />
            <FeatureCard icon={GraduationCap} title="Study then stay" desc="Graduate from a recognised Atlantic institution and use the international-graduate route, or a PGWP, toward PR." href="/study-permit" />
            <FeatureCard icon={MapPin} title="Express Entry" desc="The main federal system to permanent residence, which can also lead to a life in Atlantic Canada." href="/express-entry" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Thinking about Atlantic Canada?"
        sub="Tell us about your job offer or graduation and a licensed RCIC will map your best route to permanent residence. Honest advice, clear fees."
      />
    </>
  );
}
