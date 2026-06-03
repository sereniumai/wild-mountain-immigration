import type { Metadata } from "next";
import { Calculator, Rocket, Briefcase, Cpu, HeartPulse, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/accelerated-tech-pathway";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Accelerated Tech Pathway 2026 (RCIC)",
  titleAbsolute: "Alberta Accelerated Tech Pathway 2026: AAIP Guide",
  description:
    "The Alberta Accelerated Tech Pathway: the AAIP tech route via Express Entry for workers with an Alberta tech job. See 2026 draws and eligible NOCs.",
  path: PATH,
  keywords: [
    "alberta accelerated tech pathway",
    "aaip tech pathway",
    "alberta tech immigration",
    "tech worker pr alberta",
    "calgary tech immigration",
  ],
});

const faqs = [
  {
    q: "Which tech jobs qualify for the AAIP tech pathway?",
    a: "The Accelerated Tech Pathway targets technology occupations such as software engineers and developers (NOC 21231/21232), data scientists (21211), computer and information systems managers (20012), database analysts (21223), cybersecurity and information-systems analysts (21220), web developers (21234) and computer network technicians (22220). Your Express Entry primary occupation must match your Alberta tech job offer. Alberta updates its eligible-occupation list, so confirm your NOC 2021 code on alberta.ca before relying on it.",
  },
  {
    q: "Do I need an Express Entry profile for the tech pathway?",
    a: "Yes. The Accelerated Tech Pathway runs through the Alberta Express Entry Stream, so you must already have an active federal Express Entry profile with a Comprehensive Ranking System (CRS) score of at least 300 before Alberta can select you. The pathway is not a separate application portal. Alberta searches the Express Entry pool, issues a Notification of Interest, and a nomination then adds 600 CRS points to your federal profile.",
  },
  {
    q: "What was the Alberta Accelerated Tech Pathway cut-off in 2026?",
    a: "Recent 2026 Accelerated Tech draws have cut off near a Worker Expression of Interest (EOI) score of 63, among the highest of any AAIP pathway. A January 2026 round invited 148 candidates at a minimum EOI of 63. Cut-offs change with every draw, so always check the live alberta.ca AAIP processing-information page before relying on any figure.",
  },
  {
    q: "Do I need a job offer for the Alberta tech pathway?",
    a: "Yes. The Accelerated Tech Pathway is employer-driven: you need a genuine, full-time Alberta tech job offer in an eligible technology occupation, and your Express Entry primary occupation must match that job. A permanent full-time Alberta job offer also adds up to 10 economic-factor points to your Worker EOI score.",
  },
  {
    q: "Does an Accelerated Tech Pathway nomination guarantee permanent residence?",
    a: "No. An AAIP nomination is a provincial endorsement, not a grant of permanent residence. After Alberta nominates you and adds 600 CRS points, you still submit a separate application to Immigration, Refugees and Citizenship Canada (IRCC), which makes the final decision on medical, security and admissibility grounds. Meeting an EOI cut-off also does not guarantee an invitation, and we never promise outcomes.",
  },
  {
    q: "Can I use the tech pathway if I work in Calgary?",
    a: "Yes. Calgary is the centre of Alberta's technology sector, and a tech job offer with a Calgary employer in an eligible occupation can support an Accelerated Tech Pathway application. Note that the Worker EOI awards 0 location points for the Calgary and Edmonton census metropolitan areas (those points are reserved for rural and designated communities), but the pathway itself remains fully open to Calgary tech workers.",
  },
  {
    q: "What language level do I need for the AAIP tech pathway?",
    a: "Because the Accelerated Tech Pathway sits inside the Alberta Express Entry Stream, you must first meet the federal Express Entry minimum for your program (generally Canadian Language Benchmark 7 for skilled-worker programs, CLB 5 for some). Stronger language also lifts both your CRS and your Worker EOI, where general language proficiency is worth up to 10 points on the lowest of your four abilities.",
  },
  {
    q: "How long does the Accelerated Tech Pathway take?",
    a: "Alberta does not publish a single guaranteed timeline. After a nomination, the federal PR application is a separate stage: IRCC processes enhanced (Express Entry) provincial-nominee applications in roughly six months, though volume shifts this. Confirm current processing times on alberta.ca and canada.ca before relying on any estimate.",
  },
];

export default function AcceleratedTechPathwayPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Accelerated Tech Pathway 2026, The AAIP Tech Route",
            description:
              "The Alberta Accelerated Tech Pathway: the AAIP tech route via Express Entry for workers with an Alberta tech job. 2026 draws, eligible NOCs, RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Alberta Accelerated Tech Pathway (AAIP) support",
            description:
              "The Alberta Accelerated Tech Pathway: the AAIP tech route via Express Entry for workers with an Alberta tech job. 2026 draws, eligible NOCs, RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta tech immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Tech Pathway"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Accelerated Tech Pathway", path: PATH },
        ]}
        title={<>The Alberta Accelerated Tech Pathway: <span className="text-brand">tech PR through the AAIP</span></>}
        lede={
          <p>
            The <strong>Alberta Accelerated Tech Pathway</strong> is an accelerated AAIP route, run through Express Entry,
            for technology workers who hold an Alberta tech job offer in an eligible occupation. For software developers,
            data scientists and IT professionals, especially in Calgary&apos;s growing tech sector, it is often the
            fastest provincial route to permanent residence in Alberta.
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
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every AAIP stream explained" },
                { label: "Alberta Express Entry Stream", href: "/alberta-immigration/express-entry-stream", note: "The enhanced stream the tech pathway runs through" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "For workers already in Alberta" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Accelerated Tech Pathway is an accelerated AAIP route for technology workers, run through the enhanced Alberta Express Entry Stream. It selects candidates who hold an active Express Entry profile plus a matching Alberta tech job offer in an eligible occupation. A nomination adds 600 CRS points toward an invitation for permanent residence, and tech draw cut-offs stay competitive."
            items={[
              <>The <strong>Alberta Accelerated Tech Pathway (ATP)</strong> is an accelerated AAIP route for tech workers, run through the <strong>Alberta Express Entry Stream</strong>.</>,
              <>You need an <strong>active Express Entry profile (CRS ≥ 300)</strong> plus an Alberta tech job offer in an <strong>eligible technology occupation</strong>.</>,
              <>A nomination adds <strong>600 CRS points</strong>, usually enough to clear the next Express Entry cut-off (IRCC issues the invitation).</>,
              <><strong>2026 tech draws</strong> have cut off near a Worker EOI of <strong>63</strong>, the highest of any AAIP pathway.</>,
              <><strong>Calgary</strong> is Alberta&apos;s tech hub, giving local software, data and IT workers a genuine in-province advantage.</>,
            ]}
          />

          <h2>What is the Alberta Accelerated Tech Pathway?</h2>
          <p>
            The <strong>Alberta Accelerated Tech Pathway</strong> (ATP) is a targeted pathway within the{" "}
            <a href="/alberta-immigration">Alberta Advantage Immigration Program (AAIP)</a> that fast-tracks technology
            workers toward provincial nomination and permanent residence.</p>
          <p>It is not a
            stand-alone program: it runs <em>through</em> the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, so Alberta selects
            candidates directly from the federal Express Entry pool whose primary occupation matches an in-demand Alberta
            tech job. In 2026, Alberta set aside roughly <strong>600 nominations</strong> for the Accelerated Tech Pathway
            out of a total provincial allocation of 6,403 (source: alberta.ca, AAIP, 2026), a meaningful carve-out that
            reflects how strongly the province is courting tech talent.
          </p>
          <p>
            The &ldquo;accelerated&rdquo; label is earned in two ways. First, because the pathway is enhanced, an AAIP
            nomination adds <strong>600 CRS points</strong> to your federal profile, putting most candidates well above
            the typical cut-off in the next federal draw, though IRCC still issues the invitation. Second, Alberta runs dedicated tech draws on its own schedule, letting
            qualifying software developers, data scientists and IT analysts move ahead of the general pool. For{" "}
            <strong>tech worker PR in Alberta</strong>, that combination is hard to beat.
          </p>
          <Callout type="brand" title="Nomination is a step, not the finish line">
            An Accelerated Tech Pathway nomination is a provincial endorsement, not permanent residence. You still file a
            separate application with IRCC, which makes the final decision. Be cautious of any source that implies a
            nomination is guaranteed or equals PR.
          </Callout>

          <h2>Which tech occupations are eligible?</h2>
          <p>
            Eligible tech occupations span software engineering, development, data, networking and IT leadership. Your
            Express Entry <abbr title="National Occupational Classification">NOC</abbr> 2021 primary occupation must match
            the Alberta tech job offer you hold.</p>
          <p>Many roles sit inside the broad <strong>NOC 21230 occupation group</strong>{" "}
            (computer systems developers and programmers, TEER 1), while computer and information systems managers (NOC
            20012) are a <strong>TEER 0 manager</strong> occupation. The table below lists representative eligible
            technology occupations and the practical requirements that apply to each, but Alberta updates this list
            periodically, so confirm your exact NOC code against the live alberta.ca eligibility page.
          </p>
          <DataTable
            headers={["Eligible tech occupation", "NOC 2021", "Key requirement"]}
            rows={[
              ["Software engineers & designers", "21231", "EE profile + matching Alberta software job offer"],
              ["Software developers & programmers", "21232", "Hands-on development experience in the offered role"],
              ["Web developers & programmers", "21234", "Job offer in front-end / full-stack development"],
              ["Data scientists", "21211", "Analytics / ML experience matching the Alberta offer"],
              ["Database analysts & data administrators", "21223", "Database design or administration job offer"],
              ["Cybersecurity / information-systems analysts", "21220", "Security or systems-analysis Alberta role"],
              ["Computer & information systems managers", "20012", "Senior tech-leadership offer (TEER 0)"],
              ["Computer network & web technicians", "22220", "Network / infrastructure support job offer"],
            ]}
            caption="Representative eligible tech occupations for the Accelerated Tech Pathway (illustrative, alberta.ca, May 2026). NOC lists change, verify your code before applying."
          />
          <Callout type="info" title="Your Express Entry occupation must match the job">
            For the Accelerated Tech Pathway, your <strong>Express Entry primary occupation</strong> has to align with your
            Alberta tech job offer. A mismatched NOC is one of the most common reasons a promising tech file is passed
            over. Getting the code right is where expert review pays off.
          </Callout>

          <h2>Who is eligible for the Accelerated Tech Pathway?</h2>
          <p>
            Eligibility for the <strong>AAIP tech pathway</strong> combines federal Express Entry requirements with
            Alberta&apos;s own criteria. At a high level you need all of the following in place before Alberta can select
            you:
          </p>
          <ul>
            <li>
              <strong>An active Express Entry profile with a CRS of at least 300.</strong> This is a hard floor set by
              Alberta for its Express Entry Stream, learn more on our{" "}
              <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a> page.
            </li>
            <li>
              <strong>A genuine, full-time Alberta tech job offer</strong> in an eligible technology occupation, with your
              Express Entry primary occupation matching that job.
            </li>
            <li>
              <strong>Language ability that meets your federal program minimum</strong> (generally CLB 7 for skilled-worker
              programs), and ideally higher, since language lifts both your CRS and your Worker EOI.
            </li>
            <li>
              <strong>An ECA credential assessment</strong> for any foreign education, since an Educational Credential
              Assessment (ECA) is what lets IRCC count that schooling toward your CRS and confirms how your degree compares
              in Canada.
            </li>
            <li>
              <strong>A competitive Worker Expression of Interest (EOI)</strong>, scored out of 100, that clears the tech
              pathway&apos;s draw cut-off when Alberta selects from the pool.
            </li>
          </ul>
          <p>
            Note the two-score reality: your <strong>federal CRS</strong> (out of 1,200) decides whether you clear the 300
            floor and benefit from the +600, while your <strong>Alberta Worker EOI</strong> (out of 100) ranks you within
            Alberta&apos;s pool. You need to be competitive on both, our{" "}
            <a href="/tools/aaip-calculator">free AAIP points calculator</a> estimates the EOI side in about two minutes.
          </p>

          <h2>Why Calgary makes Alberta tech immigration attractive</h2>
          <p>
            <strong>Calgary tech immigration</strong> has real momentum behind it. Once defined almost entirely by energy,
            Calgary has built one of Canada&apos;s fastest-growing technology ecosystems, anchored by scale-ups in
            software, fintech, agtech, clean tech and energy technology, along with the Platform Calgary innovation hub and
            a deepening pool of engineering talent. Alberta lists <strong>technology</strong> among its priority sectors
            for 2026, alongside health care, construction and the trades, which is exactly why the Accelerated Tech
            Pathway exists.
          </p>
          <p>
            For tech workers, that local context matters in two practical ways. Alberta has no provincial sales tax and
            generally lower living costs than Toronto or Vancouver, which stretches a developer&apos;s salary further. And
            because the Calgary and Edmonton tech sector is actively hiring into the very occupations the Accelerated Tech
            Pathway covers, a genuine in-province tech offer is more attainable here than the headlines about a tight
            allocation might suggest.</p>
          <p>One scoring caveat: the Worker EOI awards <strong>0 location points</strong> for the
            Calgary and Edmonton census metropolitan areas, since those points are reserved for rural and designated
            communities, but that does not affect your eligibility for the tech pathway itself.
          </p>

          <h2>How the Accelerated Tech Pathway is scored</h2>
          <p>
            Like all AAIP worker pathways, the Accelerated Tech Pathway is ranked through the <strong>Worker Expression of
            Interest (WEOI)</strong>, scored out of <strong>100 points</strong>, split into human capital (max 69) and
            economic factors (max 31). Tech applicants tend to score well on education and language, and a permanent
            Alberta job offer adds economic-factor points. The summary grid below highlights the factors that matter most
            for a typical tech candidate.
          </p>
          <DataTable
            headers={["Section", "Factor", "Maximum points"]}
            rows={[
              ["Human capital (69)", "Highest education completed", "12"],
              ["Human capital", "General language proficiency (lowest of 4 abilities)", "10"],
              ["Human capital", "Total work experience (Canada + abroad)", "11"],
              ["Human capital", "Work experience in Canada (10 if 6+ mo in Alberta)", "10"],
              ["Human capital", "Age (max at 21–34)", "5"],
              ["Economic factors (31)", "Permanent full-time Alberta job offer", "10"],
              ["Economic factors", "Job offer in a regulated occupation (with certification)", "10"],
              ["Economic factors", "Alberta job offer location (rural / designated only)", "5"],
            ]}
            caption="Worker EOI factors most relevant to tech applicants (alberta.ca points grid, Aug 2025; max 100 overall). Calgary/Edmonton score 0 location points."
          />

          <h2>2026 Accelerated Tech Pathway draws and cut-offs</h2>
          <p>
            Alberta holds tech draws &ldquo;as needed&rdquo; and publishes the minimum EOI score for each round. Across
            2026, the Accelerated Tech Pathway has produced the <strong>highest cut-offs of any AAIP pathway</strong>, generally around <strong>63</strong>. A January 2026 tech round invited 148 candidates at a minimum EOI of 63.
            The table below shows recent illustrative draws; cut-offs and invitation counts change every round, so always
            verify on the live alberta.ca AAIP processing-information page.
          </p>
          <DataTable
            headers={["Date (2026)", "Pathway", "Invites", "Min EOI"]}
            rows={[
              ["Jan 29", "Accelerated Tech (Express Entry)", "148", "63"],
              ["Apr 14", "AB Express Entry, priority sectors", "50", "60"],
              ["2026 set-aside", "Accelerated Tech allocation", "~600", "n/a"],
            ]}
            caption="Illustrative 2026 Accelerated Tech draws (alberta.ca, AAIP processing information). Figures change every draw, verify live."
          />
          <Callout type="warning" title="A high cut-off means scoring matters">
            Because tech draws sit near the top of the AAIP range, a single missed point can leave a strong tech profile
            below the line. A language band one short, a mis-coded NOC or an unclaimed economic factor is often all it
            takes. Treat any cut-off here as a moving target and confirm the latest figure before you rely on it.
          </Callout>

          <h2>How to apply through the Accelerated Tech Pathway</h2>
          <Steps
            steps={[
              { title: "Build a strong Express Entry profile", desc: "Create an active federal Express Entry profile with a CRS of at least 300 and your tech occupation as your primary NOC 2021 code." },
              { title: "Secure a matching Alberta tech job offer", desc: "Obtain a genuine, full-time Alberta tech job offer in an eligible occupation that matches your Express Entry primary occupation." },
              { title: "Submit your Worker EOI", desc: "Submit your Alberta Worker Expression of Interest (with the $135 WEOI fee from April 7, 2026). It is scored out of 100 and stays valid for one year." },
              { title: "Receive a Notification of Interest", desc: "If your EOI meets a tech draw's cut-off, Alberta issues a Notification of Interest inviting you to apply. Eligibility alone does not guarantee this." },
              { title: "Apply to the AAIP & get nominated", desc: "Submit a complete AAIP application (the $1,500 fee applies). On approval, Alberta nominates you and 600 CRS points are added to your profile." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain helps tech workers</h2>
          <p>
            The Accelerated Tech Pathway rewards precision: the right NOC 2021 code, an{" "}
            <a href="/express-entry">Express Entry</a> occupation that truly matches the job offer, every Worker EOI point
            captured, and a federal <a href="/express-entry/comprehensive-ranking-system">CRS</a> that clears the 300
            floor with room to spare. Working under a licensed RCIC (CICC #R706497) based in Canmore, in the Bow Valley
            an hour west of Calgary&apos;s tech corridor, our team helps software developers, data scientists and IT professionals
            position a file that stands up to scrutiny and clears a high tech cut-off.
          </p>
          <p>
            Because the pathway runs through the{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, we also compare it with
            the <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> and the{" "}
            <a href="/alberta-immigration/dedicated-health-care-pathway">Dedicated Health Care Pathway</a>, set Alberta
            against other <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>, line up the right{" "}
            <a href="/work-permits">work permit</a> while you wait, score yourself with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and explain our{" "}
            <a href="/fees">fees</a> up front.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Alberta Accelerated Tech Pathway application an expert check before you submit. Tech-pathway rules,
            eligible occupations and cut-offs change frequently, so we always confirm the live alberta.ca figures before
            advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The tech pathway is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="The enhanced stream the tech pathway runs through, adding 600 CRS on nomination." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={Cpu} title="Express Entry" desc="The federal pool Alberta selects tech candidates from, and the CRS the +600 lands on." href="/express-entry" />
            <FeatureCard icon={HeartPulse} title="Dedicated Health Care Pathway" desc="The sibling enhanced pathway for health professionals with an Alberta job offer." href="/alberta-immigration/dedicated-health-care-pathway" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base AAIP route for workers already employed in Alberta on a valid permit." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to move to Alberta as a tech worker?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on the Accelerated Tech Pathway, your Express Entry profile and your Worker EOI score."
      />
    </>
  );
}
