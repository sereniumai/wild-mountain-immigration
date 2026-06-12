import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/british-columbia/skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "BC PNP Skilled Worker Stream 2026 (Skills Immigration)",
  titleAbsolute: "BC PNP Skilled Worker Stream 2026 Guide",
  description:
    "BC PNP Skilled Worker 2026: SIRS points, eligibility, the BC job offer, wage and language rules, plus Express Entry BC and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "BC PNP Skilled Worker",
    "BC Skills Immigration",
    "BC job offer PR",
    "SIRS",
    "BC PNP points",
    "Express Entry BC",
  ],
});

const faqs = [
  {
    q: "What is the BC PNP Skilled Worker stream?",
    a: "The Skilled Worker stream is the main route within British Columbia's Skills Immigration division. It is for people with an indeterminate, full-time job offer from an eligible BC employer in a skilled (generally NOC TEER 0, 1, 2 or 3) occupation. It runs as two routes: a base route, which leads to a paper application to IRCC, and an Express Entry BC route for candidates who already have a valid federal Express Entry profile. Both are ranked through the Skills Immigration Registration System (SIRS).",
  },
  {
    q: "Do I need a job offer for the BC PNP Skilled Worker stream?",
    a: "Yes. An indeterminate (permanent), full-time job offer from an eligible British Columbia employer is the foundation of the Skilled Worker stream, there is no no-job-offer route here. The offer must be in a skilled occupation that matches your experience, and the employer must meet BC's recruitment and good-standing requirements. The wage they pay also directly drives your SIRS score, so a qualifying offer is both an eligibility gate and your largest pool of points.",
  },
  {
    q: "What is a good SIRS score for the Skilled Worker stream in 2026?",
    a: "There is no fixed pass mark. SIRS ranks you out of 200 points, and each invitation round sets its own cut-off, which varies by the selection category BC is drawing from. Your hourly wage is the single largest factor, so higher-paid, in-demand roles outside Metro Vancouver tend to score best. Because cut-offs change every draw, always check the latest welcomebc.ca invitation results rather than relying on a target number.",
  },
  {
    q: "What is the difference between the base route and Express Entry BC?",
    a: "Both run through the same Skilled Worker stream and the same SIRS registration, but the outcome differs. The base route ends in a provincial nomination that you take to IRCC as a separate paper-based permanent-residence application. Express Entry BC (EEBC) requires you to already hold a valid federal Express Entry profile; an EEBC nomination adds 600 CRS points to your federal score, which in recent draws has been more than enough to clear the cut-off, though IRCC still issues the Invitation to Apply in a later federal draw. EEBC is the faster route when you qualify.",
  },
  {
    q: "What language level does the BC PNP Skilled Worker stream require?",
    a: "For most skilled occupations in NOC TEER 0 or 1, no minimum language result is set for the base stream, though strong scores lift your SIRS points. For TEER 2 or 3 occupations a minimum of CLB 4 generally applies. The Express Entry BC route adds the federal Express Entry language minimums on top, typically CLB 7 for Federal Skilled Worker or Canadian Experience Class. Take an approved English or French test; results are valid for two years. Verify the current bands on welcomebc.ca.",
  },
  {
    q: "How much does the BC PNP Skilled Worker stream cost in 2026?",
    a: "Creating a SIRS registration is free. If you are invited and apply for a nomination, the Skills Immigration application fee is $1,750 as of January 22, 2026 (up from $1,475). These are provincial fees only, separate IRCC permanent-residence fees apply at the federal stage, whether your nomination is base or Express Entry BC. Fees change, so confirm the current amount on welcomebc.ca before paying.",
  },
  {
    q: "Does a Skilled Worker nomination guarantee permanent residence?",
    a: "No. A provincial nomination is an endorsement from British Columbia, not permanent residence itself. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. With BC's 2026 allocation reduced and selection concentrated on priority occupations, meeting the eligibility bar also does not guarantee an invitation. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function SkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "BC PNP Skilled Worker Stream 2026 (Skills Immigration), RCIC Guide",
            description:
              "BC PNP Skilled Worker 2026: SIRS points, eligibility, the BC job offer, wage and language rules, plus Express Entry BC and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "BC PNP Skilled Worker application support",
            description:
              "BC PNP Skilled Worker 2026: SIRS points, eligibility, the BC job offer, wage and language rules, plus Express Entry BC and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="British Columbia (BC PNP), Skilled Worker"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "British Columbia (BC PNP)", path: "/pnp/british-columbia" },
          { name: "Skilled Worker", path: PATH },
        ]}
        title={<>BC PNP Skilled Worker: <span className="text-brand">the Skills Immigration route</span></>}
        lede={
          <p>
            The <strong>BC PNP Skilled Worker</strong> stream is British Columbia&apos;s main route to permanent residence
            for workers with a permanent, full-time BC job offer in a skilled occupation. This RCIC-reviewed guide covers
            BC Skills Immigration eligibility, the SIRS points that rank you, the BC job offer PR rules, and the base
            versus Express Entry BC routes.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Heading to Express Entry BC?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">An enhanced BC nomination adds 600 CRS points. See where your federal score stands first, free.</p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "Every BC stream explained" },
                { label: "Express Entry BC", href: "/pnp/british-columbia/express-entry-bc", note: "The enhanced +600 CRS route" },
                { label: "BC PNP Tech", href: "/pnp/british-columbia/tech", note: "Tech occupations in BC" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The BC PNP Skilled Worker stream is British Columbia's main Skills Immigration route for workers who hold a permanent, full-time B.C. job offer in a skilled occupation. It suits candidates with relevant experience and the language their job requires. Candidates are ranked through the Skills Immigration Registration System (SIRS), where hourly wage carries the most weight. It can run as a base route or an Express Entry BC route, and a nomination supports a PR application to IRCC (adding 600 CRS points when enhanced)."
            items={[
              <>The <strong>BC PNP Skilled Worker</strong> stream is the main BC Skills Immigration route, for workers with a permanent, full-time <strong>BC job offer</strong> in a skilled occupation.</>,
              <>It runs as two routes: a <strong>base route</strong> (paper application to IRCC) and an <strong>Express Entry BC</strong> route that adds <strong>600 CRS points</strong>.</>,
              <>Both are ranked through the <strong>Skills Immigration Registration System (SIRS)</strong>, scored out of <strong>200</strong>, your <strong>hourly wage</strong> is the biggest factor.</>,
              <>Core eligibility: an eligible BC employer&apos;s job offer, matching experience, language appropriate to your occupation, and a wage at the regional going rate.</>,
              <>For 2026, BC&apos;s allocation was cut to about <strong>5,254</strong> nominations, so <strong>eligibility does not guarantee an invitation</strong>.</>,
            ]}
          />

          <h2>What is the BC PNP Skilled Worker stream?</h2>
          <p>
            The <strong>BC PNP Skilled Worker</strong> stream is the highest-volume route within British Columbia&apos;s{" "}
            <strong>Skills Immigration</strong> division of the{" "}
            <a href="/pnp/british-columbia">BC Provincial Nominee Program</a>. It is built for people who hold an
            indeterminate (permanent), full-time job offer from an eligible BC employer in a skilled occupation, generally <abbr title="National Occupational Classification">NOC</abbr> TEER 0, 1, 2 or 3.</p>
          <p>According to
            welcomebc.ca, British Columbia&apos;s 2026 nomination allocation is about <strong>5,254</strong> across the
            whole program, sharply lower than in previous years after IRCC reduced provincial allocations nationwide
            (source: welcomebc.ca, May 2026). With far fewer spaces, BC now concentrates selection on its highest-priority
            occupations, so qualifying is no longer the same as being invited.
          </p>
          <p>
            The stream offers two routes that share the same registration and points system but end differently. The{" "}
            <strong>base route</strong> leads to a provincial nomination that you take to IRCC as a separate, paper-based
            permanent-residence application. The <strong>Express Entry BC</strong> route, covered below, is for
            candidates who already have a federal Express Entry profile, and a nomination through it adds 600 points to
            your federal CRS score.
          </p>
          <Callout type="brand" title="A BC job offer is the foundation">
            Unlike some federal routes, the Skilled Worker stream has no no-job-offer pathway. You need an indeterminate,
            full-time offer from an eligible BC employer in a skilled occupation that matches your experience. The wage on
            that offer is also your single largest source of SIRS points, so the offer is both an eligibility gate and the
            engine of your score.
          </Callout>

          <h2>What are the BC Skills Immigration eligibility requirements?</h2>
          <p>
            <strong>BC Skills Immigration eligibility</strong> for the Skilled Worker stream rests on a connected set of
            BC PNP requirements you must meet when you create your registration. Miss one and the application can be
            refused. Common gaps include a term-limited offer rather than an indeterminate job offer, a wage below the
            regional going wage, or the wrong NOC TEER level. The table below summarises the core 2026 requirements; the
            official, controlling list lives on welcomebc.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the Skilled Worker stream asks for"]}
            rows={[
              ["BC job offer", "Indeterminate (permanent), full-time offer from an eligible BC employer in a skilled occupation (generally NOC TEER 0–3)"],
              ["Work experience", "Directly related, qualifying work experience in your offered occupation"],
              ["Wage", "A wage that meets or exceeds the going rate for the occupation in the BC region where you will work"],
              ["Language", "No minimum for most TEER 0–1 roles (base); CLB 4 generally for TEER 2–3; Express Entry BC adds the federal minimums (often CLB 7)"],
              ["Education", "Education appropriate to the occupation; foreign credentials may need an Educational Credential Assessment (ECA)"],
              ["Employer", "An eligible BC employer in good standing that meets BC's recruitment and offer requirements"],
              ["Settlement & intent", "Ability to support yourself and any dependants, and genuine intent to live and work in British Columbia"],
            ]}
            caption="BC PNP Skilled Worker core eligibility, accurate as of May 2026 (welcomebc.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="The wage must clear the regional going rate">
            BC checks your offered wage against the prevailing wage for that occupation in the specific region you will
            work in. A wage below the going rate can make the offer ineligible, and because wage is the top-scoring SIRS
            factor, a stronger wage both qualifies you and lifts your rank.
          </Callout>

          <h2>How do BC PNP points work? The SIRS registration system</h2>
          <p>
            Every skilled stream is ranked through the <strong>Skills Immigration Registration System (SIRS)</strong>. You
            create a free registration, SIRS scores it out of <strong>200 points</strong>, and BC invites the
            highest-ranked registrants in periodic draws. Your registration stays in the pool, and <strong>BC PNP
            points</strong> are awarded across economic and human-capital factors.</p>
          <p>Your <strong>hourly wage</strong> is
            the single largest factor: the higher the offered wage, the more points you earn. Points also come from your
            occupation&apos;s skill level, work experience, education, language and the region of your BC job. Jobs in
            Metro Vancouver score lower, reflecting BC&apos;s goal of directing roughly a third of nominations outside
            Greater Vancouver.
          </p>
          <DataTable
            headers={["SIRS factor", "What it rewards", "Weight"]}
            rows={[
              ["Hourly wage of the BC job offer", "Higher wages score the most points", "Highest single factor"],
              ["Occupation skill level (NOC TEER)", "Higher-skilled TEER 0–1 roles", "Significant"],
              ["Regional district of employment", "Jobs outside Metro Vancouver", "Moderate"],
              ["Directly related work experience", "More months in the occupation", "Moderate"],
              ["Highest level of education", "Higher credentials, BC/Canadian study a plus", "Moderate"],
              ["Official language proficiency", "Higher CLB across all four abilities", "Moderate"],
            ]}
            caption="How BC PNP points are awarded under SIRS (max 200), summarised from welcomebc.ca (May 2026). Wage is the top-weighted factor; exact point values change, verify the current SIRS criteria."
          />
          <p>
            Because the <strong>BC PNP cut-off</strong> changes with every <strong>BC PNP draw</strong> and varies by the
            selection category BC is drawing from, there is no fixed pass mark. A high wage in an in-demand occupation
            outside Greater Vancouver is the most reliable way to build a competitive score, but remember that clearing a
            recent cut-off is necessary, not sufficient.
          </p>

          <h2>How does Express Entry BC fit the Skilled Worker stream?</h2>
          <p>
            The Skilled Worker stream offers an <strong>Express Entry BC (EEBC)</strong> route alongside the base route. To
            use it you must already qualify for federal Express Entry and hold an active profile. When you do, an enhanced
            BC nomination adds <strong>600 CRS points</strong> to your federal score, which in recent draws has sat well above the cut-off, though IRCC still issues
            the Invitation to Apply in a following federal draw.</p>
          <p>It is the fastest route to permanent residence through this
            stream because the provincial nomination plugs directly into the federal system, replacing the separate paper
            application the base route requires. Our dedicated{" "}
            <a href="/pnp/british-columbia/express-entry-bc">Express Entry BC</a> guide covers the federal minimums in
            full; if you are unsure where your federal score stands, our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> is the place to start.
          </p>
          <DataTable
            headers={["Feature", "Base route", "Express Entry BC (EEBC)"]}
            rows={[
              ["Federal Express Entry profile", "Not required", "Required and active"],
              ["Effect of a BC nomination", "Leads to a separate IRCC paper application", "Adds 600 CRS points"],
              ["Federal language minimum", "Not added by BC", "Yes, typically CLB 7"],
              ["Typical IRCC processing", "Longer (base, paper-based)", "Around six months (enhanced)"],
              ["Registration & SIRS", "Same SIRS registration", "Same SIRS registration"],
            ]}
            caption="BC PNP Skilled Worker, base route vs Express Entry BC (welcomebc.ca, May 2026). Both run through the same SIRS pool."
          />
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            With BC&apos;s 2026 allocation cut to about 5,254 nominations and selection concentrated on priority
            occupations, meeting every Skilled Worker requirement places you in the SIRS pool but does not entitle you to
            an invitation. BC invites only the highest-ranked registrants in each draw, beware any source that implies a
            place is guaranteed.
          </Callout>

          <h2>What are the fees and processing times in 2026?</h2>
          <p>
            Creating a <strong>SIRS registration is free</strong>. If you are invited and apply for a nomination, the Skills
            Immigration application fee is <strong>$1,750</strong> as of January 22, 2026 (up from $1,475). These are
            provincial fees only, once you reach the IRCC stage you pay separate federal permanent-residence fees, whether
            your nomination is base or Express Entry BC. All figures change, so confirm the current amounts on welcomebc.ca
            before paying.
          </p>
          <DataTable
            headers={["Fee", "Amount", "Notes"]}
            rows={[
              ["SIRS registration", "Free", "Create and submit your registration at no cost"],
              ["Skills Immigration application", "$1,750", "Effective January 22, 2026 (up from $1,475); paid after an invitation"],
              ["IRCC permanent residence", "Separate federal fees", "Paid at the federal stage, base or Express Entry BC"],
            ]}
            caption="BC PNP Skilled Worker fees, current to May 2026 (welcomebc.ca). Federal IRCC fees are separate. Confirm before paying."
          />
          <h3>How long does the Skilled Worker stream take?</h3>
          <p>
            The BC PNP processing time runs in stages and depends on your SIRS score and the pace of draws. After you
            submit a complete nomination application, BC&apos;s processing typically runs about two to three months. Once nominated, an
            Express Entry BC application to IRCC is processed in roughly six months, while a base, paper-based application
            generally takes longer (source: welcomebc.ca and canada.ca, 2026).</p>
          <p>Most skilled applicants should plan for the
            better part of a year from registration to permanent residence, sometimes more, and treat any estimate as
            approximate, verifying current times on welcomebc.ca and canada.ca.
          </p>

          <h2>How to apply for the BC PNP Skilled Worker stream step by step</h2>
          <p>
            <strong>How to apply for the BC PNP Skilled Worker stream</strong> follows a clear sequence: secure a qualifying
            BC job offer, register in SIRS, and wait to see whether your score earns an invitation. The steps below show the
            path from confirming eligibility to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Secure an eligible BC job offer", desc: "Obtain an indeterminate, full-time offer from an eligible BC employer in a skilled occupation, at or above the regional going wage for the role." },
              { title: "Confirm eligibility & decide your route", desc: "Check that your experience, language and education fit, and decide between the base route and Express Entry BC (which needs an active federal profile)." },
              { title: "Create your SIRS registration", desc: "Register for free in the Skills Immigration Registration System. SIRS scores you out of 200, with your hourly wage the top factor." },
              { title: "Receive an invitation", desc: "If your score meets a draw's cut-off, BC issues an invitation to apply. Cut-offs change every draw and eligibility alone does not guarantee this." },
              { title: "Apply for nomination & get nominated", desc: "Submit a complete application with the $1,750 fee and supporting documents. On approval, BC nominates you for permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File through Express Entry if your nomination is enhanced (EEBC), or on paper if it is a base nomination. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with your Skilled Worker application</h2>
          <p>
            We assess your profile against BC&apos;s current priorities, model your SIRS score, and tell you honestly
            whether the base route or Express Entry BC gives you the strongest realistic chance. As a CICC-regulated
            practice led by a licensed RCIC, our team confirms your eligibility, checks that the BC job offer and wage
            qualify, and prepares a registration and nomination application that stand up to scrutiny with the province
            and with IRCC. We catch the avoidable mistakes that cause refusals, such as a term-limited offer, a wage
            below the going rate, or a mismatched NOC.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            BC PNP Skilled Worker application an expert check before you submit. Figures here are current to 2026
            and change with each draw, so we always confirm the live welcomebc.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Ready to apply through the BC Skilled Worker stream?"
        sub="Get started with a licensed RCIC for an honest read on your SIRS score and the strongest route to permanent residence in British Columbia."
      />
    </>
  );
}
