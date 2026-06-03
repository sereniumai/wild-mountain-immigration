import type { Metadata } from "next";
import { MapPin, Calculator, Briefcase, UserRound, HeartPulse, Cpu, Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/british-columbia";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "British Columbia Provincial Nominee Program (BC PNP)",
  titleAbsolute: "BC PNP 2026: British Columbia Immigration Guide",
  description:
    "BC PNP 2026: skilled worker, tech, health and entrepreneur streams, SIRS points and how to apply for British Columbia PR. Talk to a licensed RCIC.",
  path: PATH,
  keywords: [
    "British Columbia Provincial Nominee Program",
    "BC PNP 2026",
    "BC PNP skilled worker",
    "BC PNP tech",
    "how to apply BC PNP",
    "BC PNP draw",
  ],
});

const faqs = [
  {
    q: "How long does the BC PNP take?",
    a: "Timelines run in two stages. After you submit a complete registration to the BC PNP and receive an invitation, BC's service standard for processing a nomination application is typically about two to three months. Once nominated, you apply to IRCC for permanent residence. An enhanced (Express Entry-aligned) application is processed in roughly six months, while a base, paper-based application can take longer. The waiting time to receive an invitation depends on your SIRS score and how often draws are held.",
  },
  {
    q: "What is a good SIRS score for the BC PNP in 2026?",
    a: "There is no fixed pass mark, each invitation round sets its own cut-off, and scores vary by occupation category. The Skills Immigration Registration System (SIRS) ranks you out of 200 points, with your hourly wage being the single largest factor. Higher wages, in-demand occupations and jobs outside Metro Vancouver tend to score better. Because cut-offs move every draw, always check the latest welcomebc.ca invitation results before assuming you qualify.",
  },
  {
    q: "Is the BC PNP tech stream still open in 2026?",
    a: "The standalone BC PNP Tech draws ended in December 2024. Technology workers are not shut out, however, many tech occupations are now invited through the broader Skilled Worker stream and BC's new High Economic Impact (\"Innovate\") selection focus, which targets higher-wage TEER 0 to 3 roles. The route has changed, so older guides referring to dedicated weekly tech draws are out of date.",
  },
  {
    q: "Can I apply to the BC PNP without a job offer?",
    a: "For the main Skilled Worker stream, an indeterminate (permanent), full-time job offer from an eligible BC employer is generally required. The Health Authority stream also runs through a BC employer. Entrepreneur Immigration streams do not need a job offer because you are establishing or buying a business instead. We can review your profile and tell you honestly which route, if any, fits your situation.",
  },
  {
    q: "How does Express Entry BC (EEBC) work?",
    a: "Express Entry BC is the enhanced option within the Skilled Worker and Health Authority streams. If you already have a valid Express Entry profile and qualify, a BC nomination through EEBC adds 600 points to your federal CRS score. In recent draws that has placed candidates well above the cut-off, though IRCC still issues the Invitation to Apply in a subsequent federal draw. It is the fastest BC route because it links the provincial nomination directly to the federal Express Entry system.",
  },
  {
    q: "How much does the BC PNP cost?",
    a: "Registration in the Skills Immigration system is free. As of January 22, 2026, the application fee for a Skills Immigration nomination is $1,750 (up from $1,475). Entrepreneur Immigration carries a higher application fee. These provincial fees are separate from the IRCC permanent-residence fees you pay later. Fees change, so confirm current amounts on welcomebc.ca before you apply.",
  },
  {
    q: "Did BC reduce its PNP allocation for 2026?",
    a: "Yes. Following federal cuts to provincial nominee allocations, British Columbia's 2026 nomination space fell to roughly 5,254, far below prior years. With fewer nominations available, BC has concentrated selection on its highest-priority \"Care, Build and Innovate\" occupations and paused several streams. Meeting the basic eligibility no longer guarantees an invitation, which makes a well-positioned profile more important than ever.",
  },
  {
    q: "What happened to the International Graduate stream?",
    a: "The BC PNP International Graduate and International Post-Graduate streams are closed to new registrations, the Post-Graduate stream closed in January 2025 and the International Graduate stream in November 2025. Recent BC graduates may still qualify through the Skilled Worker stream if they hold an eligible job offer. We can assess whether your graduate profile fits a currently open route.",
  },
];

export default function BritishColumbiaPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "British Columbia Provincial Nominee Program (BC PNP), 2026 RCIC Guide",
            description:
              "British Columbia Provincial Nominee Program 2026: BC PNP skilled worker, tech, health and entrepreneur streams, SIRS points and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "BC PNP application support",
            description:
              "British Columbia Provincial Nominee Program 2026: BC PNP skilled worker, tech, health and entrepreneur streams, SIRS points and how to apply. RCIC-led.",
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
          { name: "British Columbia", path: PATH },
        ]}
        title={<>British Columbia Provincial Nominee Program <span className="text-brand">(BC PNP)</span></>}
        lede={
          <p>
            The <strong>British Columbia Provincial Nominee Program (BC PNP)</strong> lets the province nominate skilled
            workers, health professionals and entrepreneurs for permanent residence, and a nomination adds 600 CRS points
            to an Express Entry profile. In 2026, the BC PNP selects through a points-based registration system focused on
            its highest-priority occupations.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the BC PNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With BC&apos;s 2026 allocation reduced, profile strategy matters. Get an honest assessment from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Express Entry", href: "/express-entry", note: "The federal PR system + EEBC" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The BC PNP (British Columbia Provincial Nominee Program) is the province's economic immigration route for nominating skilled workers, health professionals and entrepreneurs for permanent residence. It suits people with a B.C. job offer or in-demand skills, ranked through the Skills Immigration Registration System (SIRS), where hourly wage is the biggest factor. A nomination supports a PR application to IRCC, and an enhanced (Express Entry BC) nomination adds 600 CRS points to your federal profile."
            items={[
              <>The <strong>BC PNP</strong> nominates skilled workers, health staff and entrepreneurs for permanent residence in British Columbia.</>,
              <>Skilled streams use the <strong>Skills Immigration Registration System (SIRS)</strong>, scored out of 200, your hourly wage is the biggest factor.</>,
              <>An <strong>enhanced (Express Entry BC) nomination adds 600 CRS points</strong>, well above recent federal cut-offs.</>,
              <>For 2026, BC&apos;s allocation was cut to roughly <strong>5,254 nominations</strong>, concentrating selection on priority occupations.</>,
              <>Several streams have closed, the <strong>Tech draws (Dec 2024)</strong> and <strong>International Graduate (Nov 2025)</strong> streams among them.</>,
            ]}
          />

          <h2>What is the BC PNP?</h2>
          <p>
            The <strong>British Columbia Provincial Nominee Program</strong> is the province&apos;s economic immigration
            stream. It lets British Columbia nominate people whose skills and experience meet local labour-market needs;
            a provincial nomination is then your stepping stone to applying to IRCC for permanent residence. According to
            welcomebc.ca, the program is divided into two parts: <strong>Skills Immigration</strong> (for workers and health
            professionals) and <strong>Entrepreneur Immigration</strong> (for business owners and investors).
          </p>
          <p>
            British Columbia&apos;s 2026 nomination allocation is about <strong>5,254</strong>, sharply lower than in
            previous years after IRCC reduced provincial allocations nationwide (source: welcomebc.ca / IRCC, May 2026).
            With fewer spaces, BC now directs selection to its highest-priority occupations, so meeting the minimum
            eligibility is no longer the same as receiving an invitation. Figures and policies change frequently, so always
            verify the current rules before acting.
          </p>

          <h2>BC PNP streams in 2026</h2>
          <p>
            The table below summarises the main BC PNP streams and their current status. In 2026, the Skills Immigration
            side has been streamlined to a smaller set of live streams, while several earlier streams now exist only as
            information pages for applicants already in the system.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Status (2026)"]}
            rows={[
              ["Skilled Worker (incl. Express Entry BC)", "Skilled workers with an eligible BC job offer; EEBC adds 600 CRS", "Open"],
              ["Health Authority", "Workers hired by a BC public health authority; also EEBC-enhanced", "Open"],
              ["Temporary Rural / Remote Health Support", "Select health-support roles outside major centres (~250 spots)", "Opens June 15, 2026"],
              ["Entrepreneur Immigration, Base", "Business owners (net worth & investment thresholds apply)", "Open"],
              ["Entrepreneur Immigration, Regional", "Entrepreneurs establishing a business in a smaller community", "Open"],
              ["International Graduate / Post-Graduate", "Recent graduates of eligible institutions", "Closed (Nov 2025 / Jan 2025)"],
              ["Tech (dedicated draws)", "Technology occupations", "Closed (Dec 2024)"],
            ]}
            caption="Main BC PNP streams and status (welcomebc.ca, 2026). Eligibility does not guarantee an invitation."
          />
          <Callout type="brand" title="BC PNP skilled worker, tech and health, how they fit together">
            The <a href="/pnp/british-columbia/skilled-worker"><strong>BC PNP skilled worker</strong></a> stream is the
            main route for most applicants. Many former <a href="/pnp/british-columbia/tech"><strong>BC PNP tech</strong></a>
            {" "}candidates are now invited through this stream or BC&apos;s High Economic Impact (&quot;Innovate&quot;)
            focus on higher-wage TEER 0 to 3 roles, while healthcare hires generally use the{" "}
            <a href="/pnp/british-columbia/health-authority">Health Authority</a> stream. All of these can be processed
            as enhanced, <a href="/pnp/british-columbia/express-entry-bc">Express Entry BC</a> applications.
          </Callout>

          <h2>The BC PNP streams in detail</h2>
          <p>
            Each BC PNP stream has its own guide on our site, where we set out the eligibility, the documents and the
            application steps in full. Here is how the live streams fit together in 2026.
          </p>
          <ul>
            <li>
              <a href="/pnp/british-columbia/skilled-worker"><strong>Skilled Worker</strong></a> is the core Skills
              Immigration stream for workers who hold an indeterminate, full-time job offer from an eligible BC employer.
              It is scored through SIRS and can be filed as a base nomination or as an enhanced Express Entry BC
              nomination.
            </li>
            <li>
              <a href="/pnp/british-columbia/express-entry-bc"><strong>Express Entry BC</strong></a> is not a separate
              stream so much as the enhanced option layered onto Skilled Worker and Health Authority. It links your BC
              nomination straight to your federal <a href="/express-entry">Express Entry</a> profile and adds 600 CRS
              points.
            </li>
            <li>
              <a href="/pnp/british-columbia/health-authority"><strong>Health Authority</strong></a> is for physicians,
              nurses and allied-health workers hired by one of BC&apos;s regional health authorities. It is a priority
              route under BC&apos;s &quot;Care&quot; focus and can also run as an enhanced Express Entry application.
            </li>
            <li>
              <a href="/pnp/british-columbia/tech"><strong>Tech</strong></a> once had its own weekly draws. Those ended in
              December 2024, but technology occupations remain a priority and are now invited through the Skilled Worker
              stream and the Innovate selection focus. Our Tech guide explains what changed and how technology workers
              position themselves now.
            </li>
            <li>
              <a href="/pnp/british-columbia/entrepreneur-immigration"><strong>Entrepreneur Immigration</strong></a> runs
              a Base Category and a Regional pilot for people establishing or buying a BC business. There is no job offer;
              instead you are tested on net worth, investment and a viable business plan.
            </li>
            <li>
              <a href="/pnp/british-columbia/international-graduate"><strong>International Graduate</strong></a> streams are
              closed to new registrations. Recent BC graduates now generally route through Skilled Worker if they hold an
              eligible job offer, and our guide covers the alternatives in detail.
            </li>
          </ul>

          <h2>Express Entry BC and the enhanced nomination</h2>
          <p>
            The <a href="/pnp/british-columbia/skilled-worker">Skilled Worker</a> and{" "}
            <a href="/pnp/british-columbia/health-authority">Health Authority</a> streams each offer an{" "}
            <a href="/pnp/british-columbia/express-entry-bc"><strong>Express Entry BC (EEBC)</strong></a> option. If you
            already qualify for federal <a href="/express-entry">Express Entry</a> and hold an active profile, an enhanced
            BC nomination adds <strong>600 CRS points</strong> to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score. In recent draws
            that has been more than enough to clear the cut-off, though IRCC still issues the Invitation to Apply in a
            following federal draw. It is the fastest BC route because the provincial nomination plugs directly into the
            federal system. Not sure where your federal score stands?
            Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>
          <p>
            The alternative is a <strong>base nomination</strong>. Base nominations do not touch your CRS score; instead,
            once BC nominates you, you submit a separate paper-based permanent-residence application directly to IRCC.
            Base routes can suit applicants who do not yet hold an Express Entry profile or who do not meet a federal
            program&apos;s minimums, but they are generally slower to process than the enhanced Express Entry path. Many
            BC applicants who already have skilled Canadian work experience, for example through a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a>, qualify federally under the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> and so are well placed to use
            the enhanced EEBC route.
          </p>

          <h2>BC PNP points: the SIRS registration system</h2>
          <p>
            Skills Immigration uses the <strong>Skills Immigration Registration System (SIRS)</strong>. You submit a free
            registration, SIRS scores it out of <strong>200 points</strong>, and BC issues invitations to the highest-ranked
            registrants in periodic <em>draws</em>. Your <strong>hourly wage is the single largest factor</strong> (worth the
            most points), alongside your occupation&apos;s skill level, work experience, education, language ability and the
            region of your BC job. Jobs in Metro Vancouver tend to score lower, reflecting BC&apos;s goal of directing roughly
            a third of nominations outside Greater Vancouver.
          </p>
          <p>
            There is no fixed pass mark. The <strong>BC PNP cut-off</strong> changes with every draw and varies by
            occupation category, so each round sets its own score for an invitation. The Health Authority and the
            temporary Rural/Remote Health Support routes work differently: they let eligible candidates apply directly
            rather than competing on a SIRS score.
          </p>

          <h2>2026 changes and the reduced allocation</h2>
          <p>
            Two shifts define the BC PNP 2026. First, the <strong>reduced allocation</strong>: BC&apos;s nomination space
            fell to about <strong>5,254</strong>, so the province paused lower-priority streams and tightened who gets
            invited. Second, a selection overhaul now concentrates nominations on three priority groups, informally
            <strong> &quot;Care, Build and Innovate.&quot;</strong> Care covers health, childcare and related occupations;
            Build covers certified construction trades; and Innovate targets higher-wage, higher-skilled roles.
          </p>
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            With only about 5,254 nominations for 2026, qualifying for a stream no longer means you will be invited. BC is
            prioritising its highest-impact occupations, and many otherwise-eligible profiles will not receive an invitation
            this cycle. We will give you a candid read on your realistic chances before you invest time and fees.
          </Callout>

          <h2>BC PNP eligibility and requirements</h2>
          <p>
            BC PNP requirements differ by stream, but the Skilled Worker route generally asks for an <strong>indeterminate,
            full-time job offer</strong> from an eligible BC employer, qualifying work experience, and language results
            appropriate to your occupation&apos;s <strong>NOC TEER</strong> level. Express Entry BC adds the federal
            Express Entry minimums on top. Entrepreneur Immigration instead tests net worth, investment and a viable
            business plan rather than a job offer. Because the published BC PNP eligibility criteria are detailed and
            updated regularly, the safest step is a profile review against the current welcomebc.ca program guide.
          </p>

          <h2>Processing, fees and how to apply for the BC PNP</h2>
          <p>
            <strong>How to apply for the BC PNP</strong> follows a clear sequence for skilled streams: confirm you meet a
            stream&apos;s requirements, create a SIRS registration, and wait to see whether your score earns an invitation
            in a draw. If invited, you submit a full nomination application with supporting documents. Once nominated, you
            apply to <strong>IRCC</strong> for permanent residence, through Express Entry if your nomination is enhanced, or
            on paper if it is a base nomination.
          </p>
          <p>
            On fees, SIRS registration is <strong>free</strong>, and the Skills Immigration application fee is{" "}
            <strong>$1,750</strong> as of January 22, 2026 (up from $1,475). Entrepreneur Immigration carries higher fees.
            These provincial amounts are separate from the IRCC permanent-residence fees you pay at the federal stage, and
            all figures change, confirm current fees on welcomebc.ca before applying.
          </p>

          <h2>BC PNP processing time</h2>
          <p>
            The <strong>BC PNP processing time</strong> depends on the stage. Waiting for an invitation hinges on your SIRS
            score and the pace of draws. After you submit a complete nomination application, BC&apos;s processing typically
            runs about two to three months. Once nominated, an enhanced Express Entry application to IRCC is processed in
            roughly six months, while a base, paper-based application generally takes longer. Adding it up, most skilled
            applicants should plan for the better part of a year from registration to permanent residence, sometimes more.
          </p>

          <h2>How Wild Mountain helps with the BC PNP</h2>
          <p>
            Wild Mountain Immigration assesses your profile against BC&apos;s current priorities, models your SIRS score,
            and steers you toward the stream, whether that is{" "}
            <a href="/pnp/british-columbia/skilled-worker">Skilled Worker</a>,{" "}
            <a href="/pnp/british-columbia/health-authority">Health Authority</a> or{" "}
            <a href="/pnp/british-columbia/entrepreneur-immigration">Entrepreneur Immigration</a>, with the strongest
            realistic chance. As a CICC-regulated practice led by a licensed RCIC, our team prepares a registration and
            nomination application that stands up to scrutiny and represents you with the province and with IRCC. With
            BC&apos;s allocation reduced for 2026, that positioning is where good advice earns its keep, and we work with
            BC clients entirely online by video call and secure document sharing.
          </p>
          <Steps
            steps={[
              { title: "Assess and choose a stream", desc: "We review your job offer, occupation, wage, experience and language against BC's live streams and the SIRS grid, then recommend the route, base or enhanced, where you are most competitive." },
              { title: "Register and prepare", desc: "We build your SIRS registration to maximise your score, line up your documents, and confirm whether an enhanced Express Entry BC nomination is open to you, with clear written fees throughout." },
              { title: "Nominate and apply for PR", desc: "Once you are invited and nominated, we prepare your permanent-residence application to IRCC, by Express Entry if your nomination is enhanced or on paper if it is base, and represent you to the finish." },
            ]}
          />
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            <strong> BC PNP</strong> application an expert check before you submit. You can also compare the BC PNP with
            other programs on our <a href="/pnp">Provincial Nominee Programs</a> hub or our home province&apos;s{" "}
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
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">BC PNP streams</h2>
          <p className="mt-3 text-ink-soft">British Columbia runs its Provincial Nominee Program through several streams, find the one that fits.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Skilled Worker" desc="The core Skills Immigration stream for workers with a BC job offer, scored through SIRS." href="/pnp/british-columbia/skilled-worker" />
            <FeatureCard icon={Rocket} title="Express Entry BC" desc="The Express-Entry-aligned route, a nomination adds 600 CRS points." href="/pnp/british-columbia/express-entry-bc" />
            <FeatureCard icon={HeartPulse} title="Health Authority" desc="For physicians, nurses and allied-health workers with a BC health-authority job offer." href="/pnp/british-columbia/health-authority" />
            <FeatureCard icon={Cpu} title="Tech" desc="Priority processing for eligible technology occupations with a BC tech job offer." href="/pnp/british-columbia/tech" />
            <FeatureCard icon={MapPin} title="Entrepreneur Immigration" desc="Base Category and Regional Pilot routes for entrepreneurs starting a BC business." href="/pnp/british-columbia/entrepreneur-immigration" />
            <FeatureCard icon={UserRound} title="International Graduate" desc="Routes for graduates of BC institutions (closed to new registrations in 2025)." href="/pnp/british-columbia/international-graduate" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the BC PNP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on your SIRS score and the strongest route to permanent residence in British Columbia."
      />
    </>
  );
}
