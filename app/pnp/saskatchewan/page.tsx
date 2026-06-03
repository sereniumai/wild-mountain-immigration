import type { Metadata } from "next";
import { MapPin, Briefcase, GraduationCap, Cpu, HeartPulse, Wheat, Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/saskatchewan";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Saskatchewan Immigrant Nominee Program (SINP)",
  titleAbsolute: "Saskatchewan Immigrant Nominee Program (SINP) 2026",
  description:
    "Saskatchewan Immigrant Nominee Program 2026: SINP Expression of Interest points, streams, Talent Pathways and eligibility explained. See if you qualify.",
  path: PATH,
  keywords: [
    "Saskatchewan Immigrant Nominee Program",
    "SINP 2026",
    "Saskatchewan PNP",
    "SINP Expression of Interest",
    "SINP eligibility",
  ],
});

const faqs = [
  {
    q: "What is the minimum SINP points score?",
    a: "The SINP Expression of Interest grid is scored out of 110 points, and you must reach at least 60 points to be eligible to enter the International Skilled Worker pool. Reaching 60 is an eligibility floor, not a guarantee of an invitation. When the province runs an Expression of Interest draw, it selects from the highest-ranked profiles. Points come from education, skilled work experience, language ability, age and your connection to Saskatchewan. Because cut-offs and the grid change, always confirm the current criteria on saskatchewan.ca before relying on a score.",
  },
  {
    q: "Are SINP Expression of Interest draws still running in 2026?",
    a: "The position is mixed. Saskatchewan's International Skilled Worker Expression of Interest draws, for the Occupation In-Demand and Saskatchewan Express Entry sub-categories, have been paused since late 2024 and remain dormant in 2026. They have not been formally closed, so profiles can still sit in the pool, but you should not assume a draw is imminent. Meanwhile the Employment Offer route accepts direct applications without a draw, and the sector Talent Pathways accept applications during their intake windows. We can tell you which currently active route fits your profile.",
  },
  {
    q: "How does the SINP enhanced (Express Entry) option work?",
    a: "The Saskatchewan Express Entry sub-category is the SINP's enhanced, Express Entry-aligned route. To use it you must already have a valid federal Express Entry profile. A Saskatchewan nomination through this route adds 600 points to your Comprehensive Ranking System score, which sits well above recent federal cut-offs, though IRCC still issues the Invitation to Apply at a following draw. Note that the underlying Express Entry Expression of Interest draws have been paused since late 2024, so in practice many candidates are nominated through other live SINP routes and then apply to IRCC. A base nomination, by contrast, does not add CRS points.",
  },
  {
    q: "Do I need a job offer for the SINP?",
    a: "It depends on the route. The International Skilled Worker, Employment Offer route and the sector Talent Pathways generally require a job offer from an eligible Saskatchewan employer. The International Skilled Worker, Occupation In-Demand sub-category was designed to invite candidates without a job offer if their occupation matched a provincial priority, though its Expression of Interest draws are currently paused. Entrepreneur and Farm applicants do not need a job offer because they are establishing or buying a business or farm instead. We assess which route your profile actually qualifies for.",
  },
  {
    q: "What are the SINP Talent Pathways?",
    a: "The Talent Pathways are sector-focused SINP routes introduced as part of Saskatchewan's 2026 restructuring, aimed at filling jobs in the province's priority industries. They include a Health Talent Pathway, a Tech Talent Pathway and an Agriculture Talent Pathway, each tied to occupations Saskatchewan most needs to fill. Under the 2026 model, roughly half of the province's nominations are reserved for these priority sectors, with employer-driven applications accepted from candidates who hold a qualifying job offer. Eligibility and the in-scope occupation lists are set by the province and change, so confirm the current details before applying.",
  },
  {
    q: "How long does the SINP take to process?",
    a: "Processing is in two stages. Saskatchewan's published service standard for assessing a complete nomination application is often a number of weeks, though it varies by route and volume. Once nominated, you apply to IRCC for permanent residence: an enhanced, Express Entry application is typically processed in about six months, while a base nomination requires a separate paper application to IRCC that generally takes longer. Adding the stages together, most applicants should plan for several months to roughly a year. Service standards change, so confirm the current figures on saskatchewan.ca and the IRCC website.",
  },
  {
    q: "How much does a SINP application cost?",
    a: "Submitting a SINP Expression of Interest is free. There is no separate provincial application fee for the International Skilled Worker category at the time of writing, which is one reason Saskatchewan can be cost-competitive among provincial programs. The Entrepreneur and Farm categories work differently and carry their own requirements, including net-worth thresholds. Any provincial costs are separate from the IRCC permanent-residence fees you pay at the federal stage. Fees and policies change, so verify current amounts on saskatchewan.ca before you apply.",
  },
  {
    q: "Can people on a spousal open work permit use the SINP?",
    a: "Not for every route. Saskatchewan restricts certain permit-dependent pathways so that holders of a spousal open work permit are not eligible for them. Eligibility rules around work-permit type, in-province status and intake windows are detailed and applied strictly, and they differ between the priority-sector Talent Pathways and the capped sectors. Because a misread here can waste an application, the safest step is a profile review against the current SINP criteria. We will tell you candidly which routes, if any, you qualify for.",
  },
];

export default function SaskatchewanPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Saskatchewan Immigrant Nominee Program (SINP), 2026 RCIC Guide",
            description:
              "Saskatchewan Immigrant Nominee Program 2026: SINP Expression of Interest points, enhanced and base streams, Talent Pathways, eligibility and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "SINP application support",
            description:
              "Saskatchewan Immigrant Nominee Program 2026: SINP Expression of Interest points, enhanced and base streams, Talent Pathways, eligibility and how to apply.",
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
          { name: "Saskatchewan (SINP)", path: PATH },
        ]}
        title={<>Saskatchewan Immigrant Nominee Program <span className="text-brand">(SINP)</span></>}
        lede={
          <p>
            The <strong>Saskatchewan Immigrant Nominee Program</strong> lets the province nominate skilled workers,
            entrepreneurs and farmers for permanent residence based on the occupations it needs. In 2026, SINP selects
            through an Expression of Interest points system and a set of sector-focused Talent Pathways.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the SINP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With several SINP draws paused, choosing the right active route matters. Get an honest assessment from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Manitoba (MPNP)", href: "/pnp/manitoba", note: "The neighbouring prairie program" },
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "BC's streams" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Saskatchewan Immigrant Nominee Program (SINP) is the province's economic immigration program. It lets Saskatchewan nominate skilled workers, entrepreneurs and farmers whose occupations meet local labour-market needs, giving them a provincial nomination they can use to apply to IRCC for permanent residence. Skilled applicants enter an Expression of Interest (EOI) pool scored out of 110 points (60 is the minimum to be eligible) and are ranked for invitations. A SINP nomination supports a PR application to IRCC, and an enhanced (Saskatchewan Express Entry) nomination adds 600 CRS points to your federal profile."
            items={[
              <>The <strong>Saskatchewan Immigrant Nominee Program (SINP)</strong> nominates skilled workers, entrepreneurs and farmers for permanent residence in Saskatchewan.</>,
              <>Skilled applicants enter an <strong>Expression of Interest (EOI) pool</strong> scored out of <strong>110 points</strong>, with <strong>60</strong> the minimum to be eligible.</>,
              <>The <strong>Saskatchewan Express Entry</strong> sub-category is enhanced, a nomination adds <strong>600 CRS points</strong>; base streams do not.</>,
              <>Saskatchewan&apos;s <strong>2026 allocation fell to about 4,761</strong> nominations, with roughly half reserved for priority-sector Talent Pathways.</>,
              <>The <strong>International Skilled Worker EOI draws have been paused since late 2024</strong>, dormant, but not formally closed.</>,
            ]}
          />

          <h2>What is the Saskatchewan Immigrant Nominee Program?</h2>
          <p>
            The <strong>Saskatchewan Immigrant Nominee Program</strong> is the province&apos;s economic immigration
            program. It lets Saskatchewan nominate people whose skills, experience and occupations meet local
            labour-market needs; a provincial nomination is then your stepping stone to applying to IRCC for permanent
            residence. The SINP is divided into three broad categories, <strong>International Skilled Worker</strong>,{" "}
            <strong>Saskatchewan Experience</strong> (for people already working or studying in the province) and{" "}
            <strong>Entrepreneur and Farm</strong>.
          </p>
          <p>
            Saskatchewan&apos;s 2026 nomination allocation is about <strong>4,761</strong>, well below the roughly
            8,000 it had in 2024, after IRCC reduced provincial allocations nationwide (source: saskatchewan.ca / IRCC,
            May 2026). With fewer spaces, the province has reserved roughly half of its nominations for priority sectors
            such as health, agriculture, trades, mining, manufacturing, energy and technology. Because figures and
            policies change frequently, always verify the current rules before acting.
          </p>

          <h2>How the SINP works: the Expression of Interest points system</h2>
          <p>
            Most skilled applicants apply through the International Skilled Worker category, which uses an{" "}
            <strong>Expression of Interest (EOI)</strong> pool. You create a profile, Saskatchewan scores it against a
            points grid out of <strong>110 points</strong>, and the province invites the highest-ranked profiles in
            periodic draws.</p>
          <p>You must reach at least <strong>60 points</strong> to be eligible, but, as with every PNP,
            reaching the floor only puts you in the pool; it does not guarantee an invitation. Points come from your
            education and training, skilled work experience, language ability, age and your connection to Saskatchewan
            (such as a job offer, past study or close family in the province).
          </p>
          <Callout type="info" title="Eligibility is not an invitation">
            Scoring 60 or more on the <strong>SINP Expression of Interest</strong> grid makes you eligible to enter the
            pool, it is not the same as being selected. The province draws from the strongest profiles, and with the
            2026 allocation reduced, the EOI draw cut-off score can sit well above the 60-point floor. Before any SINP
            draw in 2026, check the latest draw results on saskatchewan.ca, as the cut-off shifts with each round.
          </Callout>

          <h2>Enhanced vs base: where the +600 CRS boost applies</h2>
          <p>
            The International Skilled Worker category contains both enhanced and base options, and they behave very
            differently. The <strong>Saskatchewan Express Entry</strong> sub-category is <em>enhanced</em>: you must
            already hold a valid federal Express Entry profile, and a Saskatchewan nomination through this route adds{" "}
            <strong>600 CRS points</strong> to your Comprehensive Ranking System score, well above recent federal cut-offs, though IRCC still issues the
            Invitation to Apply at a following draw.</p>
          <p>The <strong>Occupation In-Demand</strong> and{" "}
            <strong>Employment Offer</strong> routes are <em>base</em> (paper) streams: once nominated, you submit a
            separate permanent-residence application directly to IRCC, with no CRS boost. Not sure where your federal
            score stands? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <Callout type="warning" title="Several SINP draws are paused, but not closed">
            Saskatchewan&apos;s International Skilled Worker EOI draws (both Occupation In-Demand and Saskatchewan
            Express Entry) have been paused since late 2024 and remain dormant in 2026. They are <strong>not formally
            closed</strong>, so profiles can still sit in the pool, but a draw is not guaranteed. In the meantime the
            Employment Offer route and the sector Talent Pathways remain active.
          </Callout>

          <h2>SINP streams and how to reach each sub-page</h2>
          <p>
            The table below lists the main SINP streams, who each is for and its 2026 status. Each stream links to its
            dedicated guide, where we cover eligibility and the application steps in detail. Under the 2026 model, the
            priority-sector Talent Pathways accept employer-driven applications year-round within intake windows, while
            some capped sectors require in-province status.
          </p>
          <DataTable
            headers={["SINP stream", "Who it's for", "Status (2026)"]}
            rows={[
              [
                <a key="isw" href="/pnp/saskatchewan/international-skilled-worker">International Skilled Worker</a>,
                "Skilled workers entering the EOI pool, incl. Employment Offer (base), Occupation In-Demand (base) and Saskatchewan Express Entry (enhanced, +600 CRS)",
                "Employment Offer open; EOI draws paused",
              ],
              [
                <a key="exp" href="/pnp/saskatchewan/saskatchewan-experience">Saskatchewan Experience</a>,
                "People already working or studying in Saskatchewan, incl. graduates of Saskatchewan institutions",
                "Open",
              ],
              [
                <a key="tech" href="/pnp/saskatchewan/tech-talent-pathway">Tech Talent Pathway</a>,
                "Technology and innovation occupations with an eligible Saskatchewan job offer",
                "Open",
              ],
              [
                <a key="health" href="/pnp/saskatchewan/health-talent-pathway">Health Talent Pathway</a>,
                "Health-sector workers with an eligible Saskatchewan job offer",
                "Open",
              ],
              [
                <a key="ag" href="/pnp/saskatchewan/agriculture-talent-pathway">Agriculture Talent Pathway</a>,
                "Agriculture and agri-food workers with an eligible Saskatchewan job offer",
                "Open",
              ],
              [
                <a key="ent" href="/pnp/saskatchewan/entrepreneur">Entrepreneur</a>,
                "Business owners establishing or buying a Saskatchewan business (net-worth threshold applies)",
                "Open",
              ],
              [
                <a key="farm" href="/pnp/saskatchewan/farm">Farm</a>,
                "Experienced farmers buying and operating a farm in Saskatchewan",
                "Open",
              ],
            ]}
            caption="Main SINP streams and status (saskatchewan.ca, 2026). Eligibility does not guarantee an invitation; streams and statuses change."
          />

          <h2>The sector Talent Pathways in 2026</h2>
          <p>
            A defining feature of the SINP in 2026 is its sector <strong>Talent Pathways</strong>. Rather than relying
            solely on broad EOI draws, Saskatchewan now reserves roughly half of its nominations for priority industries
            and invites employer-supported candidates through dedicated <a href="/pnp/saskatchewan/health-talent-pathway">Health</a>,{" "}
            <a href="/pnp/saskatchewan/tech-talent-pathway">Tech</a> and{" "}
            <a href="/pnp/saskatchewan/agriculture-talent-pathway">Agriculture</a> pathways.</p>
          <p>A separate carve-out reserves
            a block of nominations for graduates of Saskatchewan post-secondary institutions. Some lower-skilled or
            capped sectors, such as food and accommodation, trucking and retail, are limited by quota and run on fixed
            intake windows through the year, and typically require candidates to already be working in the province.
          </p>

          <h2>SINP eligibility</h2>
          <p>
            <strong>SINP eligibility</strong> differs by route, but the International Skilled Worker category generally
            asks for skilled work experience in an eligible occupation, language results appropriate to that occupation,
            post-secondary education or training, and enough settlement funds, plus a points score of at least 60 on
            the EOI grid. Your occupation must also match an in-demand SINP NOC code, so check the current list on
            saskatchewan.ca before assuming you qualify.</p>
          <p>The Employment Offer route and the Talent Pathways add a job offer from an eligible
            Saskatchewan employer. The Saskatchewan Express Entry sub-category layers the federal Express Entry minimums
            on top. Entrepreneur and Farm applicants are instead assessed on net worth, investment and a viable business
            or farming plan rather than a job offer. Eligibility rules around work-permit type and in-province status are
            applied strictly, so the safest step is a profile review against the current saskatchewan.ca criteria.
          </p>

          <h2>How to apply for the SINP</h2>
          <p>
            <strong>How to apply for the SINP</strong> follows a clear sequence for skilled applicants. First, confirm
            you meet a route&apos;s requirements and calculate your EOI points. For EOI-based routes, you create your
            saskatchewan.ca SINP login, submit a free Expression of Interest and wait to see whether your score earns
            an invitation in a draw.</p>
          <p>For the Employment
            Offer route, eligible candidates can apply directly without a draw. If invited or eligible to apply, you
            submit a full nomination application with supporting documents. Once nominated, you apply to{" "}
            <strong>IRCC</strong> for permanent residence, through Express Entry if your nomination is enhanced, or on
            paper if it is a base nomination.
          </p>
          <p>
            On cost, submitting an Expression of Interest is <strong>free</strong>, and there is no separate SINP
            application fee for the International Skilled Worker category at the time of writing, a reason Saskatchewan
            can be cost-competitive among provincial programs. Entrepreneur and Farm applicants face their own
            requirements and thresholds. All of these provincial steps are separate from the IRCC permanent-residence
            fees you pay at the federal stage, and figures change, confirm current details on saskatchewan.ca before
            applying.
          </p>

          <h2>How long does the SINP take?</h2>
          <p>
            <strong>How long the SINP takes</strong> depends on the stage, and the SINP processing time varies by
            route and volume. For EOI routes, waiting for an invitation hinges on your points score and the pace of
            draws, and with the International Skilled Worker draws paused, that timing is uncertain in 2026.</p>
          <p>After you
            submit a complete nomination application, Saskatchewan&apos;s assessment is often a matter of weeks. Once nominated, an enhanced
            Express Entry application to IRCC is processed in roughly six months, while a base, paper-based application
            generally takes longer. Most applicants should plan for several months to the better part of a year overall.
          </p>

          <h2>How Wild Mountain helps with the SINP</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Saskatchewan&apos;s current priorities, calculates
            your EOI points, and steers you toward the route, whether that is the{" "}
            <a href="/pnp/saskatchewan/international-skilled-worker">International Skilled Worker</a> Employment Offer
            route, a sector Talent Pathway,{" "}
            <a href="/pnp/saskatchewan/saskatchewan-experience">Saskatchewan Experience</a>,{" "}
            <a href="/pnp/saskatchewan/entrepreneur">Entrepreneur</a> or{" "}
            <a href="/pnp/saskatchewan/farm">Farm</a>, with the strongest realistic chance while the EOI draws remain
            paused.</p>
          <p>As a CICC-regulated practice led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>, our team prepares an Expression of
            Interest and nomination application that stands up to scrutiny and represents you with the province and with
            IRCC, working with clients across Canada and abroad entirely online.
          </p>
          <Steps
            steps={[
              { title: "Assess and choose a route", desc: "We review your occupation, job offer, experience, language and Saskatchewan connection against the live SINP routes and the EOI grid, then recommend where you are most competitive while the draws are paused." },
              { title: "Build your profile or application", desc: "We prepare your Expression of Interest or, for the Employment Offer route and Talent Pathways, your employer-driven application, with documents in order and clear written fees." },
              { title: "Nominate and apply for PR", desc: "Once nominated, we prepare your permanent-residence application to IRCC, by Express Entry if your nomination is enhanced or on paper if it is base, and represent you through to a decision." },
            ]}
          />
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            <strong> Saskatchewan Immigrant Nominee Program</strong> application an expert check before you submit. You
            can also compare Saskatchewan with other programs on our <a href="/pnp">Provincial Nominee Programs</a> hub,
            the neighbouring <a href="/pnp/manitoba">Manitoba (MPNP)</a> program or our home province&apos;s{" "}
            <a href="/alberta-immigration">Alberta Advantage Immigration Program</a>, and see how our professional fee
            works on our <a href="/fees">fees page</a>.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">SINP streams</h2>
          <p className="mt-3 text-ink-soft">Saskatchewan runs its Immigrant Nominee Program through several streams, find the one that fits.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="International Skilled Worker" desc="The EOI-based skilled category, incl. Employment Offer, Occupation In-Demand and Saskatchewan Express Entry." href="/pnp/saskatchewan/international-skilled-worker" />
            <FeatureCard icon={GraduationCap} title="Saskatchewan Experience" desc="For people already working or studying in Saskatchewan, including graduates of provincial institutions." href="/pnp/saskatchewan/saskatchewan-experience" />
            <FeatureCard icon={HeartPulse} title="Health Talent Pathway" desc="A priority-sector route for health workers with an eligible Saskatchewan job offer." href="/pnp/saskatchewan/health-talent-pathway" />
            <FeatureCard icon={Cpu} title="Tech Talent Pathway" desc="A priority-sector route for technology and innovation roles with a Saskatchewan job offer." href="/pnp/saskatchewan/tech-talent-pathway" />
            <FeatureCard icon={Wheat} title="Agriculture Talent Pathway" desc="A priority-sector route for agriculture and agri-food workers with a Saskatchewan job offer." href="/pnp/saskatchewan/agriculture-talent-pathway" />
            <FeatureCard icon={Rocket} title="Entrepreneur and Farm" desc="Business and farm routes for owners and experienced farmers establishing themselves in Saskatchewan." href="/pnp/saskatchewan/entrepreneur" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the SINP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on your SINP Expression of Interest points and the strongest route to permanent residence in Saskatchewan."
      />
    </>
  );
}
