import type { Metadata } from "next";
import { Users } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/new-brunswick/critical-worker-pilot";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "New Brunswick Critical Worker Pilot (NBCWP)",
  titleAbsolute: "NB Critical Worker Pilot (NBCWP): 2026 Guide",
  description:
    "New Brunswick Critical Worker Pilot 2026: how the NBCWP lets designated NB employers hire and retain critical foreign workers toward PR. RCIC-led.",
  path: PATH,
  keywords: [
    "New Brunswick Critical Worker Pilot",
    "NBCWP",
    "designated employer New Brunswick",
    "critical worker immigration NB",
    "New Brunswick employer-driven immigration",
  ],
});

const faqs = [
  {
    q: "What is the New Brunswick Critical Worker Pilot?",
    a: "The New Brunswick Critical Worker Pilot (NBCWP) is an employer-driven immigration pilot that lets a small number of designated New Brunswick employers hire and retain critical foreign workers, including in lower-skilled roles, and support them toward permanent residence. Each designated employer commits to training and settlement supports for the workers it brings in. Because participation is limited to the designated employers, you generally cannot apply on your own unless one of them has hired you.",
  },
  {
    q: "Which employers are part of the Critical Worker Pilot?",
    a: "The pilot is open through a small, fixed group of designated New Brunswick employers, historically around six larger employers selected by the province. New Brunswick does not run an open application stream for the NBCWP, and the list of participating employers can change. If you have a job offer from a New Brunswick employer, we can help you confirm whether that employer takes part in the pilot before you rely on this route.",
  },
  {
    q: "Do I need high English scores for the Critical Worker Pilot?",
    a: "No, one of the pilot's defining features is its lower language threshold. The NBCWP is designed to support candidates at roughly CLB 4, which is lower than most skilled-worker routes require. You still need to take an approved language test and meet the specific level set for your role, but the pilot deliberately accommodates lower-skilled and lower-language workers that designated employers need to fill critical positions.",
  },
  {
    q: "Can I apply to the Critical Worker Pilot from outside Canada?",
    a: "The pilot is employer-driven, so the starting point is always a job with a designated New Brunswick employer rather than a self-submitted profile. Some candidates are already working in New Brunswick on a temporary permit, while others are recruited by a designated employer. Because the employer leads the process and selection runs through the province's INB system, you cannot enter the pilot independently. Confirm your employer's participation first.",
  },
  {
    q: "Does the Critical Worker Pilot lead to permanent residence?",
    a: "The pilot is built to help designated employers retain critical workers over the long term, with permanent residence as the goal. A provincial nomination through the NBCWP is a base nomination. It is not aligned with Express Entry and does not add 600 CRS points. Once nominated, you submit a separate paper application directly to IRCC, which makes the final permanent-residence decision on medical, security and admissibility grounds.",
  },
  {
    q: "How is the Critical Worker Pilot different from the NB Skilled Worker stream?",
    a: "Both are base, employer-driven routes, but the NB Skilled Worker stream is open to a wider range of New Brunswick employers and, since May 4, 2026, limits new invitations to Healthcare, Education and Construction Trades occupations. The Critical Worker Pilot is far narrower, open only through the small group of designated employers, but it accommodates lower-skilled roles and a lower language threshold, with employer-provided training and settlement supports built in.",
  },
  {
    q: "Does a nomination through the pilot guarantee permanent residence?",
    a: "No. A provincial nomination is an endorsement from New Brunswick, not permanent residence itself. You still submit a separate application to IRCC, which decides on admissibility, medical and security grounds. We build the strongest possible case and flag risks before they become refusals. Figures and program rules change, so we always confirm the current criteria on welcomenb.ca before advising.",
  },
];

export default function CriticalWorkerPilotPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "New Brunswick Critical Worker Pilot (NBCWP), 2026 RCIC Guide",
            description:
              "New Brunswick Critical Worker Pilot 2026: how the NBCWP lets designated NB employers hire and retain critical foreign workers toward PR. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "New Brunswick Critical Worker Pilot application support",
            description:
              "New Brunswick Critical Worker Pilot 2026: how the NBCWP lets designated NB employers hire and retain critical foreign workers toward PR. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="New Brunswick (NBPNP), Critical Worker Pilot"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "New Brunswick", path: "/pnp/new-brunswick" },
          { name: "Critical Worker Pilot", path: PATH },
        ]}
        title={<>New Brunswick Critical Worker Pilot <span className="text-brand">(NBCWP)</span></>}
        lede={
          <p>
            The <strong>New Brunswick Critical Worker Pilot</strong> lets a small group of designated NB employers hire and
            retain critical foreign workers, including lower-skilled roles, toward permanent residence. It is
            employer-driven: you generally enter only if a designated employer has hired you.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Users className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Hired by an NB employer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We confirm whether your employer is part of the pilot and review your eligibility honestly, book a
                licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "New Brunswick PNP (NBPNP)", href: "/pnp/new-brunswick", note: "Every NB stream explained" },
                { label: "NB Skilled Worker stream", href: "/pnp/new-brunswick/skilled-worker", note: "The wider employer route" },
                { label: "Work permits", href: "/work-permits", note: "Get to Canada to work first" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The New Brunswick Critical Worker Pilot (NBCWP) is an employer-driven pilot that lets a small number of designated New Brunswick employers hire and retain critical foreign workers, including in lower-skilled roles. Each designated employer commits to training and settlement supports, and participation is limited to those employers. A nomination leads to permanent residence through a separate application to IRCC."
            items={[
              <>The <strong>New Brunswick Critical Worker Pilot (NBCWP)</strong> is an <strong>employer-driven</strong> pilot for critical foreign workers, including lower-skilled roles.</>,
              <>It runs only through a <strong>small group of designated NB employers</strong>, you generally cannot apply on your own.</>,
              <>It accommodates a <strong>lower language threshold (~CLB 4)</strong>, with employer training and settlement supports built in.</>,
              <>It is a <strong>base nomination</strong>: no +600 CRS boost, a nomination leads to a separate IRCC paper application.</>,
              <>Eligibility does not guarantee a nomination, and program details change, always verify on <strong>welcomenb.ca</strong>.</>,
            ]}
          />

          <h2>What is the New Brunswick Critical Worker Pilot?</h2>
          <p>
            The <strong>New Brunswick Critical Worker Pilot (NBCWP)</strong> is an employer-driven immigration pilot that
            lets a small number of <strong>designated New Brunswick employers</strong> hire and retain the critical foreign
            workers they need, including in lower-skilled roles that other streams exclude, and support those workers
            toward permanent residence. Rather than ranking individual candidates, the pilot is built around the employer:
            each designated employer commits to providing training and settlement supports for the workers it brings in.
          </p>
          <p>
            The pilot sits within New Brunswick&apos;s tightly managed nomination space. The province&apos;s 2025 allocation
            was about <strong>2,750</strong> spaces, split between the Provincial Nominee Program and the Atlantic
            Immigration Program (source: welcomenb.ca, May 2026), with the 2026 figure expected to stay tight after federal
            allocations were reduced nationwide. Because supply is constrained, New Brunswick channels several routes, including the Critical Worker Pilot, through specific employers and sectors rather than an open intake. Figures
            and rules change frequently, so always verify the current details before acting.
          </p>
          <Callout type="brand" title="The NBCWP is an employer route, not a self-apply stream">
            The pilot is open only through its designated employers. There is no public profile you can submit on your own,
            and meeting the criteria does not entitle you to a place. The practical starting point is a genuine job with a
            designated New Brunswick employer, we can confirm whether a specific employer takes part.
          </Callout>

          <h2>Who can use the Critical Worker Pilot?</h2>
          <p>
            Eligibility for <strong>critical worker immigration in NB</strong> rests first on the employer and then on you.
            Because the pilot is restricted to designated employers, the gateway requirement is a genuine, full-time job
            offer from one of them in a role they need to fill. On the worker side, the pilot deliberately accommodates
            intermediate-skilled and lower-skilled positions, typically <strong>NOC TEER 4 and 5 occupations</strong> that
            other NB streams exclude, and a <strong>lower language threshold, typically around CLB 4</strong>, which is
            below what most skilled-worker routes demand. This kind of low-language immigration to Canada is rare, so the
            pilot is a genuine opening for in-demand workers other streams turn away. You still take an approved language
            test and meet the level set for your role, along with the training and settlement supports the employer provides.
          </p>
          <DataTable
            headers={["Requirement", "What the NBCWP asks for"]}
            rows={[
              ["Designated employer", "A genuine full-time job offer from one of the small group of designated New Brunswick employers in the pilot"],
              ["Occupation", "A critical role the designated employer needs to fill, the pilot accommodates lower-skilled positions other NB streams exclude"],
              ["Language", "Lower threshold than most streams, typically around CLB 4, on an approved English or French test, at the level set for the role"],
              ["Training & settlement", "Employer-provided training and settlement supports, a core feature of the pilot's retention model"],
              ["Intent to settle", "A genuine intention to live and work in New Brunswick long term"],
            ]}
            caption="New Brunswick Critical Worker Pilot core requirements (welcomenb.ca, May 2026). Employer-driven, eligibility does not guarantee a nomination. Verify current rules before applying."
          />
          <Callout type="info" title="Lower language, but still a real test">
            The CLB 4 threshold is a deliberate accommodation for lower-skilled critical roles, but it is still measured on
            an approved test, and your weakest ability counts. Lifting a single weak band can make the difference, so
            language preparation is rarely wasted.
          </Callout>

          <h2>How does the Critical Worker Pilot work?</h2>
          <p>
            The pilot works through the <strong>designated employer New Brunswick</strong> relationship. The province
            selects and approves the participating employers and the volume of workers each may bring in under the pilot.
            A designated employer then recruits or retains a critical worker, supports them with the required training and
            settlement plan, and the candidate is processed toward a provincial nomination through New Brunswick&apos;s INB
            system. Some candidates are already in New Brunswick on a temporary work permit, which makes the pilot a practical
            TR to PR pathway from temporary status to permanent residence; others are recruited from
            abroad. Either way, the employer leads. You cannot enter the pilot by submitting an independent profile.
          </p>
          <p>
            Once New Brunswick nominates you, the route to permanent residence is the same as other base streams: the
            nomination is a provincial endorsement, and you then file a separate paper application directly with{" "}
            <strong>IRCC</strong>, which makes the final decision. Because the <strong>NBCWP</strong> is a base nomination,
            it does not add 600 CRS points to an Express Entry profile. If you also want to understand your federal
            standing, try our <a href="/tools/crs-calculator">free CRS calculator</a>.
          </p>

          <h2>NBCWP compared with other NB routes</h2>
          <p>
            The Critical Worker Pilot is one of several New Brunswick options, and it is easy to confuse with the wider
            Skilled Worker stream. The table below sets the pilot beside the routes it is most often compared with so you
            can see where it fits.
          </p>
          <DataTable
            headers={["Route", "Open to", "Language", "Type"]}
            rows={[
              [
                "Critical Worker Pilot (NBCWP)",
                "Workers hired by the small group of designated employers, lower-skilled roles included",
                "Lower (~CLB 4)",
                "Base (pilot)",
              ],
              [
                <a key="sw" href="/pnp/new-brunswick/skilled-worker">NB Skilled Worker</a>,
                "Wider range of NB employers, new ITAs limited to Healthcare, Education, Construction Trades (since May 4, 2026)",
                "Higher, occupation-dependent",
                "Base",
              ],
              [
                <a key="nb" href="/pnp/new-brunswick">NB Express Entry</a>,
                "Express Entry candidates with NB employment or provincial interest",
                "Higher, Express Entry minimums",
                "Enhanced (+600 CRS)",
              ],
            ]}
            caption="NBCWP vs other New Brunswick routes (welcomenb.ca, 2026). Eligibility does not guarantee an invitation or nomination."
          />

          <h2>How to apply through the Critical Worker Pilot</h2>
          <p>
            Because the pilot is <strong>employer-led</strong>, &ldquo;how to apply&rdquo; looks different from a
            self-submitted stream. The sequence below shows the path from confirming a designated employer to a federal
            permanent-residence decision, the first and most important step is verifying that your employer is actually
            part of the pilot.
          </p>
          <Steps
            steps={[
              { title: "Confirm a designated employer", desc: "Verify that the New Brunswick employer offering you a critical role is one of the small group designated under the pilot, this is the gateway, and we can help you check." },
              { title: "Secure a genuine job offer", desc: "Obtain a full-time offer in the critical role the employer needs to fill, with the training and settlement supports the pilot requires." },
              { title: "Meet language & document requirements", desc: "Take an approved English or French test at the role's level (typically around CLB 4) and gather work, identity and offer documents." },
              { title: "Employer-led nomination application", desc: "The employer-driven application is processed through New Brunswick's INB system toward a provincial nomination, eligibility alone does not guarantee one." },
              { title: "Apply to IRCC for permanent residence", desc: "Once nominated, file a separate federal PR paper application with medicals and police checks. IRCC makes the final decision." },
            ]}
          />
          <Callout type="warning" title="Eligibility is not the same as a nomination">
            The pilot is restricted to designated employers and a limited volume of workers. Even with a qualifying offer,
            a place is not guaranteed, and beware any source that implies the NBCWP is an open stream you can join
            independently. We give you a candid read before you invest time and fees.
          </Callout>

          <h2>How Wild Mountain helps with the Critical Worker Pilot</h2>
          <p>
            The single most common mistake we see with the <strong>New Brunswick Critical Worker Pilot</strong> is assuming
            it is an open route. Our team is led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497); we first confirm whether
            your New Brunswick employer is genuinely part of the pilot. We then review your eligibility, language, the
            critical role and your settlement plan honestly against the current welcomenb.ca rules. We work entirely online.
            If the pilot does not fit, we will tell you, and point you to a route that might, such as the wider{" "}
            <a href="/pnp/new-brunswick/skilled-worker">NB Skilled Worker stream</a> or a{" "}
            <a href="/work-permits">work-permit</a> pathway to get to Canada first.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            New Brunswick Critical Worker Pilot application an expert check before you submit. Program details and
            allocations change, so we always confirm the live welcomenb.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Hired for a critical role in New Brunswick?"
        sub="Get started with a licensed RCIC for an honest read on whether the Critical Worker Pilot, or another NB route, fits your situation."
      />
    </>
  );
}
