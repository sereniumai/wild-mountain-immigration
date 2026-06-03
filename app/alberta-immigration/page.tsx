import type { Metadata } from "next";
import { Rocket, Wrench, Calculator, Briefcase, MapPin, HeartPulse, Cpu, UtensilsCrossed, Shield, Store, GraduationCap, Globe, Tractor, CalendarClock } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { img } from "@/lib/images";

const PATH = "/alberta-immigration";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "AAIP 2026 Guide (RCIC)",
  titleAbsolute: "AAIP 2026: Alberta Advantage Immigration Program",
  description:
    "AAIP 2026: the Alberta Advantage Immigration Program explained, streams, Worker EOI scoring, draw cut-offs, fees and processing. RCIC-reviewed, talk to us.",
  path: PATH,
  keywords: [
    "aaip",
    "alberta advantage immigration program",
    "aaip 2026",
    "aaip streams 2026",
    "aaip requirements",
    "immigrate to alberta",
  ],
});

const faqs = [
  {
    q: "What EOI score do I need for the AAIP in 2026?",
    a: "There is no fixed pass mark, the Alberta Worker Expression of Interest (EOI) is scored out of 100, and the cut-off changes with every draw and pathway. In 2026, observed cut-offs have ranged from the mid-40s for some non-Express-Entry health draws to the low-60s for Accelerated Tech, with Alberta Opportunity Stream rounds landing around 54–57. Treat any score as a moving target and check the latest alberta.ca draw results before relying on it.",
  },
  {
    q: "Does the AAIP need a job offer?",
    a: "Most AAIP worker pathways do. The Alberta Opportunity Stream requires you to already be working in Alberta on a valid work permit with a qualifying job offer, and the Rural Renewal, Tourism & Hospitality and Dedicated Health Care pathways are all employer-driven. The main exception is the Alberta Express Entry Stream, where Alberta can select candidates from the federal pool without a job offer, though a permanent Alberta job offer adds up to 10 economic-factor points to your Worker EOI.",
  },
  {
    q: "How long does the AAIP take to process?",
    a: "Alberta does not publish a single guaranteed timeline, and processing depends on the stream and your file's completeness. After a nomination, the federal permanent-residence application is a separate step: IRCC processes enhanced (Express Entry) PNP applications in roughly six months and base PNP applications can take longer. Always verify current processing times on alberta.ca and canada.ca, as they shift with volume.",
  },
  {
    q: "What is the difference between the Alberta Opportunity Stream and the Express Entry Stream?",
    a: "The Alberta Opportunity Stream (AOS) is a base stream for temporary foreign workers already employed in Alberta, a nomination leads to a separate IRCC paper application. The Alberta Express Entry Stream is enhanced: you must already have a federal Express Entry profile with a CRS of at least 300, and an Alberta nomination adds 600 CRS points, which in recent draws has been enough to clear the cut-off, though IRCC still issues the invitation.",
  },
  {
    q: "How much does the AAIP cost in 2026?",
    a: "Alberta introduced a $135 Worker Expression of Interest (WEOI) submission fee effective April 7, 2026, in addition to the $1,500 (non-refundable) AAIP application fee. A reconsideration request costs $250. These provincial fees are separate from federal IRCC permanent-residence fees, which apply once you reach that stage. Confirm current amounts on alberta.ca before you pay.",
  },
  {
    q: "Do I have to live in Alberta to qualify for the AAIP?",
    a: "It depends on the pathway. The Alberta Opportunity Stream requires you to be living and working in Alberta. Rural Renewal requires a job and community endorsement in a designated Alberta community. The Alberta Express Entry Stream can select skilled workers from outside the province who intend to settle in Alberta. We help you confirm which pathway fits your situation.",
  },
  {
    q: "Does an AAIP nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not a grant of permanent residence. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. Meeting an EOI cut-off also does not guarantee an invitation, Alberta selects candidates from its pool through targeted draws. We build the strongest possible case.",
  },
  {
    q: "Which AAIP stream is best for tech or healthcare workers?",
    a: "Tech workers with an Alberta job offer are often routed through the Accelerated Tech Pathway under the Alberta Express Entry Stream, where the EE primary occupation must match the Alberta job. Healthcare professionals with an Alberta offer may qualify through the Dedicated Health Care Pathway, which runs both Express Entry and non-Express-Entry draws. The right fit depends on your occupation, CRS and job offer, book a consultation for a tailored read.",
  },
];

export default function AlbertaImmigrationPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "AAIP 2026, The Complete Alberta Advantage Immigration Program Guide",
            description:
              "AAIP 2026: the Alberta Advantage Immigration Program explained. Streams, Worker EOI scoring, draw cut-offs, fees and processing, RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Alberta Advantage Immigration Program (AAIP) support",
            description:
              "AAIP support: the Alberta Advantage Immigration Program explained. Streams, Worker EOI scoring, draw cut-offs, fees and processing, reviewed by a licensed RCIC in Canmore.",
            path: PATH,
            serviceType: "Alberta provincial nominee program consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Alberta, Our Home Province"
        crumbs={[{ name: "Immigrate", path: "/immigrate" }, { name: "Alberta (AAIP)", path: PATH }]}
        title={<>The AAIP: <span className="text-brand">Alberta Advantage Immigration Program</span></>}
        lede={
          <p>
            The <strong>AAIP</strong> (Alberta Advantage Immigration Program) is Alberta&apos;s provincial nominee
            program and, for most skilled workers, the main way to immigrate to Alberta in 2026: you submit a Worker
            Expression of Interest, earn a provincial nomination, then apply to IRCC for permanent residence. As a
            Canmore-based RCIC firm, Alberta is the province we know best.
          </p>
        }
        updated={UPDATED}
        image={img.rockies}
        imageAlt="The Canadian Rockies in Alberta, the home province of Wild Mountain Immigration"
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
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
                { label: "Express Entry", href: "/express-entry", note: "The federal pool feeding the EE Stream" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Work permits", href: "/work-permits", note: "Build the Alberta experience AOS needs" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The AAIP (Alberta Advantage Immigration Program) is Alberta's provincial nominee program and the main way for skilled workers, graduates and entrepreneurs to immigrate to the province in 2026. The route has three stages: you submit a Worker Expression of Interest, earn a provincial nomination, then apply to IRCC for permanent residence. Each AAIP stream is scored separately, and allocations and draw cut-offs change every year, so the streams stay competitive."
            items={[
              <>The <strong>AAIP</strong> (Alberta Advantage Immigration Program) is Alberta&apos;s provincial nominee program and the main route to <strong>immigrate to Alberta</strong>.</>,
              <>Worker streams run on a <strong>Worker Expression of Interest (WEOI)</strong>, scored out of <strong>100</strong> (69 human capital + 31 economic factors).</>,
              <>Only the <strong>Alberta Express Entry Stream is &ldquo;enhanced&rdquo;</strong>: it needs a federal CRS of at least 300 and a nomination adds <strong>600 CRS</strong>.</>,
              <>Alberta&apos;s <strong>2026 allocation is 6,403</strong> nominations, down from 9,750 in 2024, so draws are competitive and ad-hoc.</>,
              <>Fees in 2026: a <strong>$135 WEOI fee</strong> (new April 7, 2026) plus the <strong>$1,500</strong> AAIP application fee.</>,
            ]}
          />

          <h2>What is the AAIP (Alberta Advantage Immigration Program)?</h2>
          <p>
            The <strong>Alberta Advantage Immigration Program</strong> is Alberta&apos;s provincial nominee program (PNP).
            It lets the Government of Alberta nominate skilled workers, graduates and entrepreneurs who can meet the
            province&apos;s labour-market needs. A nomination is a powerful endorsement, but it is not permanent residence
            on its own. After Alberta nominates you, you apply separately to Immigration, Refugees and Citizenship Canada
            (IRCC), which makes the final decision.
          </p>
          <p>
            For 2026, Alberta&apos;s nomination allocation is <strong>6,403</strong>, down from 9,750 in 2024 after the
            federal government cut provincial allocations (source: alberta.ca, AAIP, 2026). That tighter cap is the single
            most important fact for anyone planning to immigrate to Alberta this year: spaces are limited, draws are held
            &ldquo;as needed&rdquo; rather than on a fixed schedule, and meeting the minimum requirements does not
            guarantee an invitation.
          </p>
          <Callout type="brand" title="Nomination is a step, not the finish line">
            An AAIP nomination does not grant permanent residence. You still file a separate application with IRCC, which
            decides on medical, security and admissibility grounds. Beware of any source, or any consultant, that
            implies a nomination is guaranteed or equals PR.
          </Callout>

          <h2>AAIP streams in 2026: which one fits you?</h2>
          <p>
            The AAIP is not one program but a family of <strong>streams and pathways</strong>, each with its own
            AAIP eligibility rules. Most are <em>worker</em> streams; a few are <em>business</em> streams for entrepreneurs and
            farmers. The table below maps the live 2026 streams. Note that &ldquo;base&rdquo; streams lead to a separate
            IRCC paper application, while the &ldquo;enhanced&rdquo; Alberta Express Entry Stream adds 600 CRS points to
            your federal profile.
          </p>
          <DataTable
            headers={["Stream / pathway", "Who it's for", "Status (2026)"]}
            rows={[
              ["Alberta Opportunity Stream (AOS)", "Temporary foreign workers already working in Alberta on a valid permit with a qualifying job offer", "Base · open · ~80% of invite volume"],
              ["Alberta Express Entry Stream", "Express Entry candidates (CRS ≥ 300) who match Alberta priorities", "Enhanced · open · +600 CRS"],
              ["→ Accelerated Tech Pathway", "Tech workers with an Alberta job in a matching occupation", "Enhanced · active draws"],
              ["→ Dedicated Health Care Pathway", "Health professionals with an Alberta job offer", "Enhanced + non-EE variant · active"],
              ["→ Law Enforcement Pathway", "Police and peace officers identified by Alberta chiefs of police", "Enhanced · active"],
              ["Rural Renewal Stream", "Workers with a rural job and a designated-community endorsement", "Base · overhauled Jan 1, 2026"],
              ["Tourism & Hospitality Stream", "Tourism and hospitality workers with an Alberta offer", "Base · open"],
              ["Rural / Graduate / Foreign Graduate Entrepreneur", "Entrepreneurs starting or buying an Alberta business", "Business · open"],
              ["Farm Stream", "Experienced farmers establishing an Alberta farm", "Business · open"],
            ]}
            caption="Live AAIP streams and pathways, accurate as of May 2026 (alberta.ca). Streams and rules change, verify before applying."
          />
          <Callout type="warning" title="Two streams were discontinued in 2025">
            Alberta ended the <strong>Family Connection</strong> and <strong>Occupation in Demand</strong> pathway of the
            Express Entry Stream on <strong>March 17, 2025</strong>. Older guides that still list them are out of date.
          </Callout>

          <h2>The Alberta Opportunity Stream (AOS)</h2>
          <p>
            The <strong>Alberta Opportunity Stream</strong> carries roughly 80% of AAIP invitation volume, so for many
            people it is the practical route to immigrate to Alberta. It is designed for temporary foreign workers who are
            <em> already</em> living and working in Alberta on a valid work permit, with an ongoing full-time job offer
            from their Alberta employer. The language requirement scales with your job. Most occupations in NOC 2021
            TEER 0&ndash;3 need CLB 5, TEER 4&ndash;5 roles need CLB 4, and some regulated roles (such as NOC 33102) require
            CLB 7. The AOS is a base stream, so a nomination leads to a separate IRCC application rather than CRS points.
          </p>

          <h2>The Alberta Express Entry Stream, and why CRS ≥ 300 matters</h2>
          <p>
            The <strong>Alberta Express Entry Stream</strong> is the program&apos;s only <em>enhanced</em> stream. To be
            considered, you must already have an active federal{" "}
            <a href="/express-entry">Express Entry</a> profile with a Comprehensive Ranking System (CRS) score of at least{" "}
            <strong>300</strong>, a hard floor set by Alberta. Alberta then searches the pool for candidates who match its
            priority occupations and issues a Notification of Interest. If you accept and are nominated, IRCC adds{" "}
            <strong>600 CRS points</strong> to your profile, putting most candidates well above the typical cut-off in
            the next federal draw, though IRCC still issues the invitation.
          </p>
          <Callout type="info" title="The AAIP Express Entry Stream uses two separate scores">
            Don&apos;t conflate them. Your <strong>federal CRS</strong> (out of 1,200) decides if you clear the 300 floor
            and benefit from the +600. Your <strong>Alberta Worker EOI</strong> (out of 100) is a separate provincial
            score that ranks you within Alberta&apos;s pool. You need to be competitive on both.
          </Callout>

          <h2>Other AAIP streams: Rural Renewal, Tourism & Hospitality, tech and more</h2>
          <p>
            Beyond the two flagship streams, Alberta runs several targeted pathways:
          </p>
          <ul>
            <li>
              <strong>Rural Renewal Stream</strong>, for workers with a job and a designated-community endorsement letter.
              It was overhauled on <strong>January 1, 2026</strong>: endorsements are valid for 12 months, and applicants
              must hold a <em>valid</em> work permit, implied or maintained status is no longer accepted and restoration
              is refused. In-Alberta applicants can come from TEER 0–5; those applying from outside need TEER 0–3.
            </li>
            <li>
              <strong>Tourism &amp; Hospitality Stream</strong>, launched March 2024 for tourism and hospitality workers
              with an Alberta job offer, important in resort communities across the Bow Valley.
            </li>
            <li>
              <strong>Accelerated Tech &amp; Dedicated Health Care pathways</strong>, enhanced pathways within the Express
              Entry Stream that run their own draws for tech workers and health professionals.
            </li>
            <li>
              <strong>Entrepreneur and Farm streams</strong>, for those starting or buying an Alberta business, or
              establishing a farm, scored on a separate business points grid with net-worth and investment thresholds.
            </li>
          </ul>
          <p>
            Alberta&apos;s <strong>priority sectors for 2026</strong> are health care, technology, construction and the
            trades, manufacturing, aviation, agriculture, tourism and hospitality, and law enforcement, plus designated
            Rural Renewal communities. Not sure which stream fits? Our{" "}
            <a href="/tools/aaip-calculator">AAIP points calculator</a> estimates your Worker EOI score, and a{" "}
            <a href="/pnp">provincial nominee program</a> comparison can confirm whether Alberta is your strongest route.
          </p>

          <h2>How the Alberta Worker EOI is scored (max 100)</h2>
          <p>
            All worker pathways are ranked through the <strong>Worker Expression of Interest (WEOI)</strong>, scored out of{" "}
            <strong>100 points</strong>. That total splits into two sections: <strong>human capital (max 69)</strong> and{" "}
            <strong>economic factors (max 31)</strong>. The grid below is drawn from the official Government of Alberta
            points grid.
          </p>
          <DataTable
            headers={["Section", "Factor", "Maximum points"]}
            rows={[
              ["Human capital (69)", "Highest education completed", "12"],
              ["Human capital", "Location of highest education (10 if in Alberta)", "10"],
              ["Human capital", "General language proficiency (English/French)", "10"],
              ["Human capital", "Bilingual proficiency (CLB/NCLC 4+ in both)", "3"],
              ["Human capital", "Total work experience (Canada + abroad)", "11"],
              ["Human capital", "Work experience in Canada (10 if 6+ mo in Alberta)", "10"],
              ["Human capital", "Age (max at 21–34)", "5"],
              ["Human capital", "Family connection living in Alberta", "8"],
              ["Economic factors (31)", "Permanent full-time Alberta job offer", "10"],
              ["Economic factors", "Job offer in a regulated occupation (with certification)", "10"],
              ["Economic factors", "Job offer in a select rural / sector area", "6"],
              ["Economic factors", "Alberta job offer location (rural / other community)", "5"],
            ]}
            caption="AAIP Worker EOI points grid summary (alberta.ca, Aug 2025 grid). Max 100 = 69 human capital + 31 economic."
          />
          <p>
            A few points are worth flagging. Education scored highest if completed <em>in Alberta</em> (10 location points),
            and language is scored on your lowest of four abilities, so a single weak skill drags the whole score down.
            The economic factors reward an Alberta job offer most heavily, which is why so many AAIP routes are
            employer-driven. Use our <a href="/tools/aaip-calculator">free AAIP calculator</a> to see where you land.
          </p>

          <h2>AAIP draw cut-offs in 2026</h2>
          <p>
            Alberta holds draws &ldquo;as needed&rdquo; and publishes the minimum EOI score for each round. The table
            below shows a representative sample of 2026 rounds. Cut-offs vary widely by pathway, and they change with every
            draw, always check the live alberta.ca processing-information page for the latest figures before relying on
            any number here.
          </p>
          <DataTable
            headers={["Date (2026)", "Stream / pathway", "Invites", "Min EOI"]}
            rows={[
              ["Jan 26", "Dedicated Health Care (Express Entry)", "63", "61"],
              ["Jan 29", "Accelerated Tech (Express Entry)", "148", "63"],
              ["Feb 2", "Alberta Opportunity Stream", "915", "57"],
              ["Apr 9", "Rural Renewal", "74", "50"],
              ["Apr 14", "AB Express Entry, priority sectors (construction/trades)", "50", "60"],
              ["May 6", "Alberta Opportunity Stream", "832", "54"],
              ["May 13", "Dedicated Health Care (Express Entry)", "61", "57"],
            ]}
            caption="Illustrative 2026 AAIP draws (alberta.ca, AAIP processing information). Figures change every draw, verify live."
          />
          <p>
            Across 2026, observed cut-offs have ranged from roughly <strong>45</strong> (some non-Express-Entry health
            draws) up to about <strong>63</strong> (Accelerated Tech), with the Alberta Opportunity Stream typically
            landing around <strong>54–57</strong> and Rural Renewal near <strong>46–50</strong>. Because the 2026
            allocation is capped at 6,403 nominations, expect competition to stay firm through the year.
          </p>

          <h2>AAIP fees and processing in 2026</h2>
          <p>
            Alberta introduced a <strong>$135 Worker Expression of Interest (WEOI) submission fee</strong> effective{" "}
            <strong>April 7, 2026</strong>, new this year. On top of that, the <strong>AAIP application fee is $1,500</strong>{" "}
            and is non-refundable, and a reconsideration request costs $250. These are provincial fees only; once you reach
            the IRCC stage you pay separate federal permanent-residence fees.
          </p>
          <DataTable
            headers={["Fee", "Amount", "Notes"]}
            rows={[
              ["Worker EOI (WEOI) submission", "$135", "New, effective April 7, 2026"],
              ["AAIP application", "$1,500", "Non-refundable"],
              ["Reconsideration request", "$250", "If you dispute a decision"],
            ]}
            caption="AAIP fees, current to May 2026 (alberta.ca). Federal IRCC fees are separate. Confirm amounts before paying."
          />
          <h3>How long does the AAIP take?</h3>
          <p>
            Alberta does not publish a single guaranteed AAIP processing time, and your timeline depends on the stream and how
            complete your file is. After a nomination, the federal PR application is a separate stage: IRCC processes{" "}
            <strong>enhanced (Express Entry) PNP applications in roughly six months</strong>, while base PNP applications
            (such as the Alberta Opportunity Stream) can take longer (source: canada.ca, processing times, 2026). Both the
            provincial and federal timelines move with application volume, so treat any estimate as approximate and verify
            on alberta.ca and canada.ca.
          </p>

          <h2>How to immigrate to Alberta through the AAIP: step by step</h2>
          <Steps
            steps={[
              { title: "Confirm your eligible stream", desc: "Match your profile to the right AAIP pathway, AOS if you're already working in Alberta, the Express Entry Stream if you're in the federal pool with CRS ≥ 300, or a rural/sector pathway." },
              { title: "Test language & gather documents", desc: "Take an approved language test (IELTS, CELPIP or TEF/TCF), get an ECA for foreign education, and collect work-experience and job-offer evidence." },
              { title: "Submit your Worker EOI", desc: "Create and submit your WEOI (with the $135 fee from April 7, 2026). It stays in Alberta's pool, valid for one year, scored out of 100." },
              { title: "Receive an invitation", desc: "If your EOI meets a draw's cut-off for your pathway, Alberta issues an invitation to apply. Eligibility alone does not guarantee this." },
              { title: "Apply to the AAIP & get nominated", desc: "Submit a complete AAIP application (the $1,500 fee applies). On approval, Alberta nominates you, and the Express Entry Stream adds 600 CRS." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain helps you immigrate to Alberta</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the AAIP is the program we work
            with most. Working under a licensed RCIC (CICC #R706497), our team helps you choose the stream that genuinely
            fits, builds your Worker EOI to capture every point you are entitled to, and prepares a nomination and federal
            application that stand up to scrutiny. We catch the small mistakes, the wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr> code, a language score one band short, a
            work-permit-status issue under the new Rural Renewal rules, that cause avoidable refusals.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own AAIP
            application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">AAIP streams &amp; pathways</h2>
          <p className="mt-3 text-ink-soft">Alberta runs a stream for almost every situation. Find the one that fits your job, sector or business.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="For workers already in Alberta with an eligible job and work permit." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="Enhanced route, a nomination adds 600 CRS points (needs CRS 300+)." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={MapPin} title="Rural Renewal Stream" desc="Settle in a designated rural community with a community endorsement." href="/alberta-immigration/rural-renewal-stream" />
            <FeatureCard icon={HeartPulse} title="Dedicated Health Care Pathway" desc="For physicians, nurses and care workers with an Alberta job offer." href="/alberta-immigration/dedicated-health-care-pathway" />
            <FeatureCard icon={Cpu} title="Accelerated Tech Pathway" desc="Fast-tracked PR for tech workers with an Alberta tech job offer." href="/alberta-immigration/accelerated-tech-pathway" />
            <FeatureCard icon={UtensilsCrossed} title="Tourism & Hospitality Stream" desc="For hospitality workers, our Bow Valley, Banff and Canmore backyard." href="/alberta-immigration/tourism-hospitality-stream" />
            <FeatureCard icon={Shield} title="Law Enforcement Pathway" desc="For police and peace-officer roles with an eligible Alberta employer." href="/alberta-immigration/law-enforcement-pathway" />
            <FeatureCard icon={Store} title="Rural Entrepreneur Stream" desc="Start or buy and run a business in a smaller Alberta community." href="/alberta-immigration/rural-entrepreneur-stream" />
            <FeatureCard icon={GraduationCap} title="Graduate Entrepreneur Stream" desc="For graduates of approved Alberta institutions building a business." href="/alberta-immigration/graduate-entrepreneur-stream" />
            <FeatureCard icon={Globe} title="Foreign Graduate Entrepreneur" desc="For recent graduates of institutions outside Canada." href="/alberta-immigration/foreign-graduate-entrepreneur-stream" />
            <FeatureCard icon={Tractor} title="Farm Stream" desc="For experienced farmers buying or starting an Alberta farm." href="/alberta-immigration/farm-stream" />
            <FeatureCard icon={CalendarClock} title="AAIP draws" desc="Latest 2026 AAIP draw cut-offs and allocation, updated each round." href="/alberta-immigration/draws" />
            <FeatureCard icon={CalendarClock} title="AAIP processing times" desc="How long each AAIP stream is taking, and what drives the timeline." href="/alberta-immigration/processing-times" />
          </FeatureGrid>
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The AAIP is one route, we help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The federal pool that feeds the Alberta Express Entry Stream. A nomination adds 600 CRS points." href="/express-entry" />
            <FeatureCard icon={Calculator} title="AAIP points calculator" desc="Estimate your Worker EOI score out of 100 in two minutes, free, no email required." href="/tools/aaip-calculator" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest nomination route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to immigrate to Alberta?"
        sub="Get started with a licensed RCIC in Canmore and get an honest read on your AAIP pathway and Worker EOI score."
      />
    </>
  );
}
