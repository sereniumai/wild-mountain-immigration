import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/british-columbia/tech";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "BC PNP Tech 2026: BC Tech Immigration Route (RCIC)",
  titleAbsolute: "BC PNP Tech 2026: BC Tech Immigration Route",
  description:
    "BC PNP Tech in 2026: how B.C. gives priority invitations to eligible tech occupations via Skills Immigration. See if your tech job offer qualifies.",
  path: PATH,
  keywords: [
    "BC PNP Tech",
    "BC Tech immigration",
    "BC tech worker PR",
    "BC PNP tech occupations",
    "priority tech invitations",
  ],
});

const faqs = [
  {
    q: "Is BC PNP Tech still a separate program in 2026?",
    a: "No. The standalone, weekly BC PNP Tech draws ended in December 2024. Technology is now a priority within the regular Skilled Worker stream, where eligible tech occupations are selected through BC's High Economic Impact (\"Innovate\") focus and the Skills Immigration Registration System (SIRS). So \"BC PNP Tech\" today means the tech-priority route inside Skills Immigration, not a dedicated portal. Older guides describing weekly tech draws are out of date.",
  },
  {
    q: "Which tech occupations are eligible for the BC PNP?",
    a: "BC prioritises higher-skilled, higher-wage technology roles, typically TEER 0–3 occupations such as software engineers (NOC 21231), software developers and programmers (21232), web developers (21234), data scientists (21211), database analysts (21223), cybersecurity and information-systems analysts (21220), computer and information systems managers (20012) and computer network technicians (22220). BC has historically used a tech occupations list, and the priorities are evolving under the May 28, 2026 Skills Immigration guide. Confirm your NOC on welcomebc.ca before relying on it.",
  },
  {
    q: "Do I need a BC tech job offer for the BC PNP?",
    a: "Yes. For the Skilled Worker stream that now carries tech, you generally need an indeterminate (permanent), full-time job offer from an eligible B.C. employer in a qualifying tech occupation. There is no no-offer tech pathway. The job offer also drives your SIRS score, because your hourly wage is the single largest scoring factor, and the wage helps determine whether you meet the High Economic Impact threshold.",
  },
  {
    q: "How are priority tech invitations decided?",
    a: "Skilled Worker candidates submit a free registration that SIRS scores out of 200 points, and BC invites the highest-ranked registrants in periodic draws. Under the Care/Build/Innovate selection model, technology sits in the Innovate group, which targets higher-wage TEER 0–3 roles. Each draw sets its own cut-off and it changes every round, so meeting eligibility does not guarantee a priority tech invitation. Always check the latest welcomebc.ca invitation results.",
  },
  {
    q: "Does a BC nomination help my Express Entry CRS score?",
    a: "Yes, if your nomination is enhanced through Express Entry BC (EEBC). If you already hold an active federal Express Entry profile and qualify, an enhanced BC nomination adds 600 CRS points to your federal score, which in recent draws has placed candidates well above the cut-off, though IRCC still issues the Invitation to Apply in a following federal draw. A base (paper) nomination does not add CRS points; instead you apply to IRCC on paper. You can estimate your federal score with our free CRS calculator.",
  },
  {
    q: "Does a BC PNP tech nomination guarantee permanent residence?",
    a: "No. A provincial nomination is an endorsement, not a grant of permanent residence. After BC nominates you, you still submit a separate application to Immigration, Refugees and Citizenship Canada (IRCC), which makes the final decision on medical, security and admissibility grounds. We never promise outcomes, and we are not affiliated with any government.",
  },
  {
    q: "How long does BC tech immigration take?",
    a: "It runs in stages. Waiting for a priority tech invitation depends on your SIRS score and the pace of draws. After you submit a complete nomination application, BC's processing typically runs about two to three months. Once nominated, an enhanced Express Entry application to IRCC is processed in roughly six months, while a base, paper-based application generally takes longer. Most tech applicants should plan for the better part of a year from registration to PR. Figures change, confirm current timelines on welcomebc.ca.",
  },
];

export default function BcPnpTechPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "BC PNP Tech 2026, British Columbia's Tech-Priority PR Route",
            description:
              "BC PNP Tech in 2026: how British Columbia gives priority invitations to eligible tech occupations via Skills Immigration. Needs a BC tech job offer.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "BC PNP Tech application support",
            description:
              "BC PNP Tech in 2026: how British Columbia gives priority invitations to eligible tech occupations via Skills Immigration. Needs a BC tech job offer.",
            path: PATH,
            serviceType: "British Columbia tech immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="BC PNP, Tech"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "British Columbia (BC PNP)", path: "/pnp/british-columbia" },
          { name: "Tech", path: PATH },
        ]}
        title={<>BC PNP Tech: <span className="text-brand">priority PR for tech workers</span></>}
        lede={
          <p>
            <strong>BC PNP Tech</strong> is British Columbia&apos;s tech-priority route to permanent residence. Eligible
            technology occupations receive targeted invitations through Skills Immigration and the SIRS points system, provided
            you hold a B.C. tech job offer. The dedicated weekly tech draws ended in December 2024, and tech is now a priority
            within the Skilled Worker stream.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Are you a BC tech candidate?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tech sits in BC&apos;s high-priority &quot;Innovate&quot; group, but a strong wage and SIRS score still
                matter. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "The full BC PNP overview" },
                { label: "BC PNP Skilled Worker", href: "/pnp/british-columbia/skilled-worker", note: "The stream that now carries tech" },
                { label: "Express Entry BC (EEBC)", href: "/pnp/british-columbia/express-entry-bc", note: "Add 600 CRS via a BC nomination" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="BC PNP Tech is British Columbia's technology-priority route to permanent residence. It now runs as a priority within the Skilled Worker stream rather than a standalone program. Eligible B.C. tech occupations, mostly higher-wage TEER 0 to 3 roles backed by a job offer, earn targeted invitations through the Skills Immigration Registration System (SIRS). You must hold an indeterminate, full-time offer from an eligible employer, and your hourly wage drives the score. A nomination supports a PR application to IRCC, and an enhanced Express Entry BC nomination adds 600 CRS points."
            items={[
              <><strong>BC PNP Tech</strong> is no longer a standalone program, technology is now a priority <em>within</em> the Skilled Worker stream.</>,
              <>Eligible <strong>BC PNP tech occupations</strong> (mostly higher-wage TEER 0–3 roles) get targeted invitations through <strong>SIRS</strong>.</>,
              <>You need an <strong>indeterminate, full-time B.C. tech job offer</strong> from an eligible employer, your hourly wage drives your SIRS score.</>,
              <>An enhanced <strong>Express Entry BC</strong> nomination adds <strong>600 CRS points</strong>, well above recent federal cut-offs.</>,
              <>The dedicated <strong>tech draws closed in December 2024</strong>; eligibility still does not guarantee a priority tech invitation.</>,
            ]}
          />

          <h2>What is BC PNP Tech?</h2>
          <p>
            <strong>BC PNP Tech</strong> is the way British Columbia channels technology workers toward permanent residence. Today it runs as a priority <em>within</em> the broader Skilled Worker stream rather than as a separate program.</p>
          <p>Through
            Skills Immigration and the <strong>Skills Immigration Registration System (SIRS)</strong>, eligible tech
            occupations receive targeted, priority invitations, so long as the candidate holds a genuine B.C. tech job offer.
            According to welcomebc.ca, the BC PNP&apos;s 2026 nomination allocation is about <strong>5,254</strong>, sharply
            lower than in previous years after IRCC reduced provincial allocations nationwide (source: welcomebc.ca / IRCC,
            May 2026). With fewer spaces, BC concentrates selection on its highest-priority occupations, technology among them.
          </p>
          <p>
            This is an important nuance for <strong>BC Tech immigration</strong>: the standalone, weekly <em>BC PNP Tech
            draws ended in December 2024</em>. Technology workers were not shut out. Instead, tech became one of BC&apos;s
            priority groups under a new selection model. Many former BC PNP Tech candidates are now invited through the
            Skilled Worker stream and BC&apos;s High Economic Impact (&quot;Innovate&quot;) focus on higher-wage TEER 0–3
            roles. If you have read older guides describing dedicated weekly tech draws, those are out of date. Rules and
            figures here change frequently, so always verify the current position before acting.
          </p>
          <Callout type="brand" title="BC PNP Tech, Skilled Worker and SIRS, how they fit together">
            For <strong>BC tech worker PR</strong>, the Skilled Worker stream is the vehicle, SIRS is the ranking engine, and
            the <strong>&quot;Innovate&quot;</strong> (High Economic Impact) focus is what gives qualifying technology roles
            their priority. Tech candidates with a strong B.C. job offer and a competitive wage are exactly who this route is
            designed to invite.
          </Callout>

          <h2>Which BC PNP tech occupations are eligible?</h2>
          <p>
            BC prioritises higher-skilled, higher-wage technology roles, generally TEER 0–3 occupations under the
            <abbr title="National Occupational Classification"> NOC</abbr> 2021 system. BC has historically used a defined
            list of eligible tech occupations, and these priorities are being refreshed under the Skills Immigration Program
            Guide effective May 28, 2026. The table below sets out representative <strong>BC PNP tech occupations</strong> and
            the practical requirement attached to each, but the list changes, so confirm your exact NOC code on welcomebc.ca
            before relying on it.
          </p>
          <DataTable
            headers={["Eligible tech occupation", "NOC 2021", "Key requirement"]}
            rows={[
              ["Software engineers & designers", "21231", "Indeterminate B.C. software job offer at a qualifying wage"],
              ["Software developers & programmers", "21232", "Hands-on development experience in the offered role"],
              ["Web developers & programmers", "21234", "Front-end / full-stack development job offer"],
              ["Data scientists", "21211", "Analytics / ML experience matching the B.C. offer"],
              ["Database analysts & data administrators", "21223", "Database design or administration job offer"],
              ["Cybersecurity / information-systems analysts", "21220", "Security or systems-analysis B.C. role"],
              ["Computer & information systems managers", "20012", "Senior tech-leadership offer (TEER 0)"],
              ["Computer network & web technicians", "22220", "Network / infrastructure support job offer"],
            ]}
            caption="Representative eligible BC PNP tech occupations (illustrative, welcomebc.ca, May 2026). The list changes, verify your NOC code before applying."
          />
          <Callout type="info" title="Wage matters as much as the job title">
            Because SIRS rewards your hourly wage above all else, and because the &quot;Innovate&quot; focus targets
            higher-wage roles, two candidates in the same NOC can score very differently. Getting both the right occupation
            <strong> and</strong> a competitive wage on the offer is where a tech file is won or lost.
          </Callout>

          <h2>Who is eligible for BC tech immigration?</h2>
          <p>
            Eligibility for the tech-priority route combines the Skilled Worker stream&apos;s requirements with the demands of
            a competitive SIRS score. At a high level, you generally need:
          </p>
          <ul>
            <li>
              <strong>An indeterminate, full-time B.C. tech job offer</strong> from an eligible employer in a qualifying
              technology occupation, there is no no-offer tech pathway.
            </li>
            <li>
              <strong>An Express Entry profile</strong> if you want the enhanced (EEBC) route, which is what adds the 600 CRS
              points. A base nomination does not require Express Entry but does not boost your federal score.
            </li>
            <li>
              <strong>Qualifying work experience</strong> in the offered occupation, plus <strong>language results</strong>{" "}
              appropriate to your occupation&apos;s skill level.
            </li>
            <li>
              <strong>A competitive SIRS registration</strong> (scored out of 200) that clears the cut-off when BC selects
              priority tech candidates in a draw.
            </li>
          </ul>
          <p>
            Note the two-score reality if you go enhanced: your <strong>federal CRS</strong> decides whether the +600 secures
            a federal invitation, while your <strong>SIRS score</strong> (out of 200) ranks you within BC&apos;s pool. Our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> estimates the federal side in a couple of minutes.
          </p>

          <h2>How are priority tech invitations decided?</h2>
          <p>
            Skills Immigration runs on SIRS. You submit a free registration, SIRS scores it out of <strong>200 points</strong>,
            and BC invites the highest-ranked registrants in periodic <em>draws</em>. Your <strong>hourly wage is the single
            largest factor</strong>, alongside occupation skill level, work experience, education, language and the region of
            your B.C. job. Under the Care/Build/Innovate selection model, technology sits in the <strong>Innovate</strong>{" "}
            group, High Economic Impact roles that are TEER 0–3 and meet a higher wage threshold (or a strong SIRS score).
            That is what makes a qualifying tech profile a <strong>priority tech invitation</strong> candidate.
          </p>
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            With only about 5,254 nominations for 2026, qualifying as a tech candidate does not guarantee you will be invited.
            Each draw sets its own cut-off, scores vary by occupation, and BC is prioritising its highest-impact roles. We will
            give you a candid read on your realistic chances before you invest time and fees.
          </Callout>

          <h2>Express Entry BC and the enhanced tech nomination</h2>
          <p>
            The Skilled Worker stream that carries tech offers an <strong>Express Entry BC (EEBC)</strong> option. If you
            already qualify for federal Express Entry and hold an active profile, an enhanced BC nomination adds
            <strong> 600 CRS points</strong> to your federal score, which in recent draws has sat comfortably above the cut-off, though IRCC still issues the Invitation to Apply in
            a following federal draw.</p>
          <p>It is the fastest route to <strong>BC tech worker PR</strong> because the provincial
            nomination plugs directly into the federal system. A base nomination, by contrast, leads to a paper application to
            IRCC and does not add CRS points. Learn more on our{" "}
            <a href="/pnp/british-columbia/express-entry-bc">Express Entry BC</a> page.
          </p>

          <h2>How to apply through the BC PNP tech route</h2>
          <Steps
            steps={[
              { title: "Confirm an eligible tech occupation", desc: "Check that your role is a priority B.C. tech occupation (generally TEER 0–3) under the current welcomebc.ca list, and that your NOC 2021 code matches." },
              { title: "Secure a B.C. tech job offer", desc: "Obtain a genuine, indeterminate, full-time job offer from an eligible B.C. employer at a competitive wage, the wage drives your SIRS score." },
              { title: "Create your SIRS registration", desc: "Submit a free Skills Immigration registration. SIRS scores it out of 200, with hourly wage as the largest factor; an Express Entry profile enables the EEBC route." },
              { title: "Receive a priority tech invitation", desc: "If your score clears a draw's cut-off, BC invites you to apply. Eligibility alone does not guarantee an invitation." },
              { title: "Submit your nomination application", desc: "File a complete nomination application with supporting documents (the Skills Immigration application fee is $1,750 as of January 22, 2026)." },
              { title: "Apply to IRCC for permanent residence", desc: "Once nominated, apply to IRCC, through Express Entry if your nomination is enhanced, or on paper if it is base. IRCC makes the final decision." },
            ]}
          />
          <p>
            On fees, SIRS registration is <strong>free</strong>, and the Skills Immigration application fee is{" "}
            <strong>$1,750</strong> as of January 22, 2026 (up from $1,475). These provincial amounts are separate from the
            IRCC permanent-residence fees you pay at the federal stage, and all figures change, confirm current fees on
            welcomebc.ca before applying.
          </p>

          <h2>How long does BC tech immigration take?</h2>
          <p>
            <strong>How long BC Tech immigration takes</strong> depends on the stage. Waiting for a priority tech invitation
            hinges on your SIRS score and the pace of draws. After you submit a complete nomination application, BC&apos;s
            processing typically runs about two to three months. Once nominated, an enhanced Express Entry application to IRCC
            is processed in roughly six months, while a base, paper-based application generally takes longer. Adding it up, most
            tech applicants should plan for the better part of a year from registration to permanent residence, sometimes more.
          </p>

          <h2>How Wild Mountain Immigration helps BC tech workers</h2>
          <p>
            The BC PNP tech route rewards precision: the right NOC 2021 code, a B.C. job offer at a wage that scores well on
            SIRS, and, if you go enhanced, a federal Express Entry profile that turns the +600 into an invitation. As a
            CICC-regulated practice led by a licensed RCIC, our team helps software developers, data scientists and IT
            professionals position a file that stands up to scrutiny, models the SIRS score, and steers you toward the
            strongest realistic route. With BC&apos;s 2026
            allocation reduced, that positioning is where good advice earns its keep.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own BC PNP
            tech application an expert check before you submit. Tech priorities, eligible occupations and
            cut-offs change frequently, so we always confirm the live welcomebc.ca figures before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Is BC PNP Tech the right route for you?"
        sub="Get started with a licensed RCIC for an honest read on your eligible tech occupation, your SIRS score and the fastest path to permanent residence in British Columbia."
      />
    </>
  );
}
