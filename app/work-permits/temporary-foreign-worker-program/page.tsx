import type { Metadata } from "next";
import { Briefcase, FileCheck2, Rocket, Map, Building2, Sprout } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/temporary-foreign-worker-program";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Temporary Foreign Worker Program (TFWP) Canada",
  titleAbsolute: "Temporary Foreign Worker Program (TFWP) Canada",
  description:
    "How the Temporary Foreign Worker Program (TFWP) works: the LMIA, high-wage and low-wage streams and the Global Talent Stream. See if you qualify.",
  path: PATH,
  keywords: [
    "temporary foreign worker program",
    "TFWP canada",
    "LMIA work permit",
    "high wage stream",
    "low wage stream",
  ],
});

const faqs = [
  {
    q: "What is the Temporary Foreign Worker Program?",
    a: "The Temporary Foreign Worker Program (TFWP) lets Canadian employers hire foreign workers for jobs they cannot fill locally. Its defining feature is the Labour Market Impact Assessment (LMIA): before you can get this kind of work permit, your employer must obtain a positive or neutral LMIA from Employment and Social Development Canada (ESDC), confirming there is a genuine need and no Canadian available. The job offer plus the LMIA then support your work permit application.",
  },
  {
    q: "What is the difference between the TFWP and the International Mobility Program?",
    a: "Both lead to a Canadian work permit, but the TFWP requires an LMIA while the International Mobility Program (IMP) is LMIA-exempt. The TFWP is used when an employer must prove a labour-market need; the IMP covers permits that serve a broader Canadian interest, such as intra-company transfers and treaty-based permits under CUSMA or CETA, where no LMIA is needed.",
  },
  {
    q: "What are the high-wage and low-wage streams?",
    a: "Under the TFWP, ESDC sorts most positions into a high-wage or low-wage stream based on whether the offered wage is at or above the provincial or territorial median wage. The streams carry different employer obligations, including recruitment, transportation and housing rules for low-wage positions, and caps on the share of low-wage temporary foreign workers an employer can hire. We confirm which stream a role falls into before an LMIA is filed.",
  },
  {
    q: "Does a TFWP work permit lead to permanent residence?",
    a: "Indirectly, yes. A TFWP work permit is temporary and tied to a specific employer, but the skilled Canadian work experience you gain can help you qualify for permanent residence through Express Entry (the Canadian Experience Class) or a Provincial Nominee Program, including the Alberta AAIP. We plan the work permit and the PR pathway together so your time in Canada counts.",
  },
  {
    q: "Does the Temporary Foreign Worker Program require an LMIA?",
    a: "Yes. The defining feature of the Temporary Foreign Worker Program is that it is the LMIA-based route: an employer must hold a positive or neutral Labour Market Impact Assessment from Employment and Social Development Canada before the foreign worker can apply for an employer-specific work permit. If a position is LMIA-exempt, it is processed under the International Mobility Program instead, not the TFWP. The first question in any case is therefore whether an LMIA is needed at all.",
  },
  {
    q: "How long does a TFWP work permit take?",
    a: "A TFWP work permit involves two stages, so two sets of timelines apply: first the employer's LMIA at Service Canada, then the worker's work permit at IRCC. Processing times vary by stream and change regularly. Global Talent Stream applications are handled on a faster service standard, while standard high-wage and low-wage LMIAs take longer and require a formal recruitment effort first. Because timelines shift, we confirm current ESDC and IRCC processing times for your stream before you plan around them.",
  },
  {
    q: "Can a TFWP work permit lead to permanent residence?",
    a: "Indirectly, yes. A TFWP work permit is temporary and tied to a specific employer, but the skilled Canadian work experience you gain can help you qualify for permanent residence through Express Entry (the Canadian Experience Class) or a Provincial Nominee Program, including the Alberta AAIP. A valid LMIA-supported job offer can also add points to your Express Entry score. We plan the work permit and the permanent-residence pathway together so your time in Canada counts.",
  },
  {
    q: "What is the cap on low-wage positions under the TFWP?",
    a: "ESDC limits the proportion of an employer's workforce at a given location that can be low-wage temporary foreign workers, and it has tightened that cap and the related refusal-to-process rules. In certain regions with higher unemployment, ESDC will refuse to process low-wage LMIA applications for some occupations altogether. The cap, the thresholds and the affected occupations are adjusted from time to time, so we confirm the current low-wage rules on canada.ca before an employer files.",
  },
  {
    q: "Do you represent employers as well as workers?",
    a: "We advise on the worker side of the process and on how the LMIA-based route works, and we coordinate with employers so the job offer, wage and stream line up with the work permit application. We do not provide Quebec-selected immigration services, and we will tell you honestly if your situation needs help outside our scope.",
  },
];

export default function TfwpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Temporary Foreign Worker Program (TFWP): The 2026 Guide",
            description:
              "How the Temporary Foreign Worker Program (TFWP) works: the LMIA, high-wage and low-wage streams, the Global Talent Stream and employer duties.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Temporary Foreign Worker Program (LMIA) support",
            description:
              "How the Temporary Foreign Worker Program (TFWP) works: the LMIA, high-wage and low-wage streams, the Global Talent Stream and employer duties.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        size="hub"
        eyebrow="Work in Canada"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Temporary Foreign Worker Program", path: PATH },
        ]}
        title={<>Temporary Foreign Worker Program <span className="text-brand">(TFWP)</span></>}
        lede={
          <p>
            The <strong>Temporary Foreign Worker Program (TFWP)</strong> lets Canadian employers hire abroad when no local
            worker is available, on the strength of a <strong>Labour Market Impact Assessment (LMIA)</strong>. Here is how
            the LMIA, the high-wage and low-wage streams and the Global Talent Stream fit together, and how a TFWP permit
            can lead to permanent residence.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/eligibility", label: "Check what you qualify for" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Briefcase className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have a Canadian job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We confirm whether it needs an LMIA and build your strongest work-permit application.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "All Canadian work permit routes" },
                { label: "Labour Market Impact Assessment (LMIA)", href: "/work-permits/lmia", note: "The core of the TFWP" },
                { label: "Global Talent Stream", href: "/work-permits/global-talent-stream", note: "Faster permits for tech roles" },
                { label: "International Mobility Program", href: "/work-permits/international-mobility-program", note: "The LMIA-exempt route" },
                { label: "Caregiver program", href: "/caregiver-program-canada", note: "Home child care and support roles" },
                { label: "Express Entry", href: "/express-entry", note: "Turn work into permanent residence" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Temporary Foreign Worker Program (TFWP) is the LMIA-based route into Canada. An employer first obtains a positive Labour Market Impact Assessment showing no Canadian is available, and the foreign worker then applies for an employer-specific work permit. Positions fall into high-wage or low-wage streams with different employer duties, and the Global Talent Stream offers faster processing for eligible tech and specialised roles. TFWP experience can lead to permanent residence through Express Entry or a provincial program."
            items={[
              <>The TFWP always involves a <strong>Labour Market Impact Assessment (LMIA)</strong> from ESDC.</>,
              <>Most jobs are sorted into a <strong>high-wage or low-wage stream</strong> with different rules.</>,
              <>The <a href="/work-permits/global-talent-stream">Global Talent Stream</a> offers <strong>faster processing</strong> for eligible roles.</>,
              <>A TFWP permit is <strong>employer-specific</strong> and temporary, but builds Canadian experience.</>,
              <>That experience can lead to <strong>permanent residence</strong> via Express Entry or a PNP.</>,
            ]}
          />

          <h2>What is the Temporary Foreign Worker Program?</h2>
          <p>
            The Temporary Foreign Worker Program lets employers fill genuine labour shortages with workers from abroad
            when qualified Canadians and permanent residents are not available. It is run jointly by Employment and Social
            Development Canada (ESDC), which assesses the labour-market need, and Immigration, Refugees and Citizenship
            Canada (IRCC), which issues the work permit. The program exists to protect the Canadian labour market, so the
            paperwork is built around proving that an employer genuinely needs to hire abroad.
          </p>
          <p>
            Because of that, the TFWP is an <strong>employer-driven</strong> route: the process starts with the employer,
            not the worker. The job offer and the LMIA come first, and your work permit application follows.
          </p>

          <h2>The Labour Market Impact Assessment (LMIA)</h2>
          <p>
            The <a href="/work-permits/lmia">Labour Market Impact Assessment</a> is the heart of the TFWP. Before you can
            apply for this kind of work permit, your employer must apply to ESDC and receive a positive or neutral LMIA.
            It confirms that hiring you will not negatively affect Canadian workers, that the wage and conditions meet the
            standard for the job and region, and that the employer advertised the role and could not find a suitable
            Canadian or permanent resident.
          </p>
          <Callout type="info" title="The LMIA comes before the work permit">
            A positive LMIA plus a valid job offer is what lets you apply for an employer-specific work permit. Without
            the LMIA (or an LMIA exemption under the <a href="/work-permits/international-mobility-program">International
            Mobility Program</a>), a TFWP work permit cannot be issued.
          </Callout>

          <h2>The Temporary Foreign Worker Program streams</h2>
          <p>
            ESDC processes LMIA applications under the Temporary Foreign Worker Program through several streams, each
            with its own wage rule and employer obligations. The split is driven mainly by the offered wage against the
            prevailing or median wage for the occupation and region. The table below summarises the main streams relevant
            to most applicants. The 2024 TFWP Canada changes tightened employer requirements on the low-wage side: they
            lowered the cap on the share of a workforce that can be temporary foreign workers, and they added stricter
            recruitment and advertising before an LMIA is filed.
          </p>
          <DataTable
            headers={["Stream", "Wage rule", "LMIA", "Who it fits"]}
            rows={[
              ["High-wage stream", "At or above the provincial or territorial median wage", "Required", "Skilled, professional and management roles paying above the median wage"],
              ["Low-wage stream", "Below the provincial or territorial median wage", "Required", "Service, hospitality and other roles paying below the median wage, subject to the low-wage cap"],
              [<a href="/work-permits/global-talent-stream">Global Talent Stream</a>, "Prevailing wage for the occupation", "Required (faster service standard)", "In-demand tech and specialised talent with an eligible innovative employer"],
              ["Primary agriculture stream", "Prevailing wage for the occupation", "Required", "On-farm production roles, including the Seasonal Agricultural Worker Program (SAWP)"],
              [<a href="/caregiver-program-canada">In-home caregivers</a>, "Prevailing wage for the occupation", "Required where applicable", "Home child care and home support roles, where an LMIA-based route applies"],
            ]}
            caption="Main Temporary Foreign Worker Program streams (ESDC, 2026). Wage thresholds, the low-wage cap and stream rules change periodically, so confirm current figures on canada.ca before you apply."
          />

          <h2>The employer&apos;s LMIA obligations</h2>
          <p>
            Because the Temporary Foreign Worker Program is employer-driven, the heaviest obligations fall on the
            employer, not the worker. Understanding them helps both sides see why an LMIA work permit takes the shape it
            does. The core duties run through recruitment, the prevailing wage, the low-wage cap, transition plans and
            ongoing compliance.
          </p>
          <ul>
            <li><strong>Recruitment and advertising.</strong> The recruitment requirements ask the employer to advertise the position and conduct genuine recruitment to test whether a Canadian or permanent resident is available, usually for a set minimum period and across required channels, with Job Bank advertising mandatory for most streams alongside other methods.</li>
            <li><strong>Prevailing wage.</strong> The offered wage must meet or exceed the prevailing or median wage for the occupation and region. The wage also decides whether the role falls in the high-wage stream or the low-wage stream, which in turn sets the rest of the conditions.</li>
            <li><strong>The low-wage cap and refusal to process.</strong> ESDC caps the proportion of a workforce that can be low-wage temporary foreign workers, and in certain higher-unemployment regions it will refuse to process low-wage LMIA applications for some occupations entirely.</li>
            <li><strong>Transition plans.</strong> Where applicable, high-wage employers may need a transition plan showing how they will reduce reliance on temporary foreign workers over time, for example through training or recruitment of Canadians.</li>
            <li><strong>Compliance and inspections.</strong> Employers must keep to the terms set out in the LMIA and the offer of employment, and they are subject to ESDC and Service Canada inspections, with penalties for non-compliance.</li>
          </ul>
          <Callout type="brand" title="The LMIA is the employer&apos;s responsibility">
            The Canadian employer advertises, recruits, applies to ESDC and pays the LMIA processing fee. A foreign
            worker cannot apply for their own LMIA. Once a positive or neutral{" "}
            <a href="/work-permits/lmia">Labour Market Impact Assessment</a> exists, our team prepares the worker&apos;s
            employer-specific work permit application for IRCC, entirely online.
          </Callout>

          <h2>TFWP vs the International Mobility Program</h2>
          <p>
            The cleanest way to understand the Temporary Foreign Worker Program is to contrast it with the route beside
            it. The TFWP is the <strong>LMIA-based</strong> path: an employer must prove a labour-market need. The{" "}
            <a href="/work-permits/international-mobility-program">International Mobility Program (IMP)</a> is the{" "}
            <strong>LMIA-exempt</strong> path, used where a permit serves a broader Canadian interest, such as
            intra-company transfers or treaty-based permits under CUSMA or CETA. Knowing which one applies is the first
            decision in any work permit case, because an exempt route is usually faster and simpler.
          </p>
          <DataTable
            headers={["Feature", "Temporary Foreign Worker Program", "International Mobility Program"]}
            rows={[
              ["LMIA", "Required (positive or neutral)", "Not required (LMIA-exempt)"],
              ["Decided by", "ESDC / Service Canada, then IRCC", "IRCC (employer files an offer of employment)"],
              ["Driven by", "A proven labour-market need", "A broader Canadian economic, cultural or reciprocal benefit"],
              ["Permit type", "Employer-specific work permit", "Often employer-specific, sometimes open"],
              ["Typical examples", "High-wage, low-wage, Global Talent, agriculture", "Intra-company transfers, CUSMA / CETA, IEC open permits"],
            ]}
            caption="The TFWP is the LMIA-based route; the International Mobility Program is the LMIA-exempt route (IRCC / ESDC, 2026). Confirm the current rules on canada.ca."
          />

          <h2>How the TFWP process works</h2>
          <p>
            From a worker&apos;s point of view, an LMIA-based work permit usually follows these steps.
          </p>
          <Steps
            steps={[
              { title: "Secure a job offer", desc: "A Canadian employer offers you a genuine, full-time position that meets the wage and conditions for the role." },
              { title: "Employer obtains the LMIA", desc: "The employer advertises the role, then applies to ESDC for a Labour Market Impact Assessment in the right stream." },
              { title: "Apply for your work permit", desc: "With a positive LMIA and your job offer, you apply to IRCC for an employer-specific work permit." },
              { title: "Plan your PR pathway", desc: "Once you're working, we map how your Canadian experience leads to permanent residence." },
            ]}
          />
          <p>
            TFWP processing time depends on the stream. The Global Talent Stream runs on a faster service standard, while
            standard high-wage and low-wage LMIAs take longer because the recruitment and advertising effort must be
            completed first. Because ESDC timelines shift, we confirm the current TFWP processing time for your stream
            before you plan around it.
          </p>

          <h2>From a TFWP permit to permanent residence</h2>
          <p>
            A TFWP work permit is temporary, but it is often the first step toward staying for good. The skilled Canadian
            work experience you build can qualify you for the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> under Express Entry, or for a
            Provincial Nominee Program such as the <a href="/alberta-immigration">Alberta AAIP</a>. A valid
            LMIA-supported job offer can also add points to your Express Entry score. Not sure where you stand? Our free{" "}
            <a href="/tools/eligibility">eligibility checker</a> is a good place to start.
          </p>

          <h2>How Wild Mountain Immigration helps with the Temporary Foreign Worker Program</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team supports the worker side of an LMIA-based hire and
            coordinates with employers so the job offer, wage and stream line up with the work permit application. We
            represent clients entirely online, by video call and secure document sharing. We plan your Temporary Foreign
            Worker Program permit and the permanent-residence route together so nothing about your time in Canada is
            wasted, and we never imply that IRCC or Service Canada approval is assured: the decision always rests with
            them.
          </p>
          <Steps
            steps={[
              { title: "Confirm the route", desc: "We check whether the role truly needs an LMIA under the TFWP or whether an LMIA-exempt International Mobility Program route fits better, and which stream suits the job." },
              { title: "Prepare the work permit", desc: "Once a positive or neutral LMIA exists, we build the worker's employer-specific work permit application around the LMIA and job offer, with clear written fees." },
              { title: "Apply and plan for PR", desc: "We submit and represent the worker with IRCC, then map how the LMIA offer and Canadian experience feed into Express Entry or a Provincial Nominee Program." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related work and PR routes</h2>
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that connect to the Temporary Foreign Worker Program.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Work permits" desc="The full picture of Canadian work permits, both LMIA-based and LMIA-exempt." href="/work-permits" />
            <FeatureCard icon={FileCheck2} title="Labour Market Impact Assessment" desc="The LMIA at the core of the TFWP: the employer process, streams and fees." href="/work-permits/lmia" />
            <FeatureCard icon={Rocket} title="Global Talent Stream" desc="A faster LMIA route for in-demand tech and specialised talent." href="/work-permits/global-talent-stream" />
            <FeatureCard icon={Building2} title="International Mobility Program" desc="The LMIA-exempt route, including intra-company transfers and CUSMA permits." href="/work-permits/international-mobility-program" />
            <FeatureCard icon={Sprout} title="Caregiver program" desc="Routes for home child care and home support workers in Canada." href="/caregiver-program-canada" />
            <FeatureCard icon={Map} title="Express Entry" desc="Where a valid LMIA job offer can add points toward permanent residence." href="/express-entry" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Turn a Canadian job offer into a work permit"
        sub="Tell us about your offer and a licensed RCIC will confirm the route, the LMIA and your path to permanent residence."
      />
    </>
  );
}
