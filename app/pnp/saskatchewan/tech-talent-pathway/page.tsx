import type { Metadata } from "next";
import { Cpu } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/saskatchewan/tech-talent-pathway";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Saskatchewan Tech Talent Pathway (SINP)",
  titleAbsolute: "SINP Tech Talent Pathway 2026 (Saskatchewan)",
  description:
    "Saskatchewan Tech Talent Pathway 2026: a fast-track SINP route for tech workers with a job offer. Eligible occupations, eligibility and how to apply.",
  path: PATH,
  keywords: [
    "Saskatchewan Tech Talent Pathway",
    "SINP tech",
    "Saskatchewan tech immigration",
    "tech worker PR Saskatchewan",
    "SINP Tech Talent Pathway eligibility",
  ],
});

const faqs = [
  {
    q: "What is the Saskatchewan Tech Talent Pathway?",
    a: "The Saskatchewan Tech Talent Pathway is a sector-focused stream within the Saskatchewan Immigrant Nominee Program (SINP), introduced as part of the province's 2026 Talent Pathways restructuring. It fast-tracks technology and innovation workers who hold an eligible job offer from a Saskatchewan employer in a qualifying tech occupation. Rather than waiting in the broader International Skilled Worker Expression of Interest pool, eligible tech candidates are invited through this dedicated employer-driven route. The in-scope occupation list and eligibility rules are set by the province and change, so confirm the current details on saskatchewan.ca before applying.",
  },
  {
    q: "Which tech occupations are eligible for the SINP Tech Talent Pathway?",
    a: "Saskatchewan targets technology and innovation roles such as software developers and programmers (NOC 21232), software engineers and designers (NOC 21231), computer and information systems managers (NOC 20012), data scientists (NOC 21211), cybersecurity specialists (NOC 21220), web developers (NOC 21233) and computer network technicians (NOC 22220). The province maintains the controlling eligible-occupation list and updates it periodically, so the example codes here are illustrative. Always verify your specific NOC against the current Tech Talent Pathway list on saskatchewan.ca before relying on it.",
  },
  {
    q: "Do I need a job offer for the Tech Talent Pathway?",
    a: "Yes. The Tech Talent Pathway is an employer-driven route, so you must hold a genuine, full-time job offer from an eligible Saskatchewan employer in a qualifying tech occupation. This is the central requirement that separates the Talent Pathways from the paused International Skilled Worker Expression of Interest draws. Unlike a temporary work permit, a SINP nomination through this route does not require a Labour Market Impact Assessment, so an eligible Saskatchewan tech job offer does not need an LMIA behind it. Without such an offer, you would generally need to look at another SINP route. We assess whether your offer and employer meet the province's criteria.",
  },
  {
    q: "Is the Tech Talent Pathway enhanced or base?",
    a: "It is generally a base route: once Saskatchewan nominates you, you submit a separate paper application to IRCC for permanent residence, and the nomination does not add 600 points to a federal Express Entry profile. If you already hold a valid Express Entry profile, you may instead be nominated through the enhanced Saskatchewan Express Entry sub-category, but its Expression of Interest draws have been paused since late 2024. We confirm which mechanism applies to your file and whether a Comprehensive Ranking System boost is realistically available.",
  },
  {
    q: "How long does the Tech Talent Pathway take to process?",
    a: "Processing runs in two stages. Saskatchewan's published service standard for assessing a complete nomination application is often a number of weeks, though it varies with route and volume. Once nominated, you apply to IRCC for permanent residence: a base, paper-based application generally takes longer than the roughly six months IRCC targets for enhanced Express Entry applications. Most applicants should plan for several months to roughly a year overall. Service standards change, so confirm the current figures on saskatchewan.ca and the IRCC website.",
  },
  {
    q: "Can I apply to the Tech Talent Pathway from outside Canada?",
    a: "Often, yes. Because the priority-sector Talent Pathways are employer-driven rather than tied to in-province status, candidates with a qualifying Saskatchewan tech job offer can generally be considered from overseas, unlike the capped sectors and certain permit-dependent routes that require you to already be working in Saskatchewan. Eligibility around work-permit type and in-province status is applied strictly and differs by route, so the safest step is a profile review against the current SINP criteria.",
  },
  {
    q: "How much does the Tech Talent Pathway cost?",
    a: "At the time of writing there is no separate provincial application fee for the International Skilled Worker category, of which the Tech Talent Pathway forms part. That is one reason Saskatchewan can be cost-competitive among provincial programs. Any provincial costs are separate from the IRCC permanent-residence fees you pay at the federal stage. Fees and policies change, so verify current amounts on saskatchewan.ca before you apply.",
  },
];

export default function SaskatchewanTechTalentPathwayPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Saskatchewan Tech Talent Pathway (SINP), 2026 RCIC Guide",
            description:
              "Saskatchewan Tech Talent Pathway 2026: a fast-track SINP route for tech workers with a job offer. Eligible occupations, eligibility and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "SINP Tech Talent Pathway application support",
            description:
              "Saskatchewan Tech Talent Pathway 2026: a fast-track SINP route for tech workers with a job offer. Eligible occupations, eligibility and how to apply.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Saskatchewan (SINP), Tech Talent Pathway"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Saskatchewan (SINP)", path: "/pnp/saskatchewan" },
          { name: "Tech Talent Pathway", path: PATH },
        ]}
        title={<>Saskatchewan <span className="text-brand">Tech Talent Pathway</span></>}
        lede={
          <p>
            The <strong>Saskatchewan Tech Talent Pathway</strong> is a fast-track SINP route for tech workers with a job
            offer. It targets technology and innovation occupations Saskatchewan most needs to fill. This RCIC-led guide
            covers eligible occupations, eligibility and exactly how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Cpu className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the Tech Talent Pathway right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A Saskatchewan tech job offer can open a fast nomination route. Get an honest assessment from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Saskatchewan (SINP) overview", href: "/pnp/saskatchewan", note: "Every SINP stream explained" },
                { label: "International Skilled Worker", href: "/pnp/saskatchewan/international-skilled-worker", note: "The EOI-based SINP category" },
                { label: "Health Talent Pathway", href: "/pnp/saskatchewan/health-talent-pathway", note: "The sister sector pathway" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Saskatchewan Tech Talent Pathway is a sector-focused SINP route for technology and innovation workers who hold an eligible Saskatchewan job offer. It is employer-driven, so a genuine, full-time job offer in a qualifying tech occupation is the central requirement rather than a competitive points score. A SINP nomination through this pathway supports a PR application to IRCC."
            items={[
              <>The <strong>Saskatchewan Tech Talent Pathway</strong> is a sector-focused SINP route for technology and innovation workers with an eligible Saskatchewan job offer.</>,
              <>It is <strong>employer-driven</strong>: a genuine, full-time job offer in a qualifying tech occupation is the central requirement.</>,
              <>It forms part of Saskatchewan&apos;s <strong>2026 Talent Pathways</strong>, which reserve roughly <strong>half</strong> of the province&apos;s nominations for priority sectors.</>,
              <>It is generally a <strong>base</strong> route: a nomination leads to a separate IRCC application, not a <strong>+600 CRS</strong> boost.</>,
              <>Saskatchewan&apos;s <strong>2026 allocation is about 4,761</strong> nominations, down from roughly 8,000 in 2024.</>,
            ]}
          />

          <h2>What is the Saskatchewan Tech Talent Pathway?</h2>
          <p>
            The <strong>Saskatchewan Tech Talent Pathway</strong> is a fast-track stream within the Saskatchewan Immigrant
            Nominee Program (SINP) for technology and innovation workers who hold an eligible job offer from a Saskatchewan
            employer in a qualifying tech occupation. It was introduced as part of the province&apos;s 2026 sector{" "}
            <a href="/pnp/saskatchewan">Talent Pathways</a> restructuring, which reserves roughly half of Saskatchewan&apos;s
            nominations for priority industries, including technology, and invites employer-supported candidates through
            dedicated routes rather than relying solely on broad Expression of Interest draws.
          </p>
          <p>
            Saskatchewan&apos;s 2026 nomination allocation is about <strong>4,761</strong>, well below the roughly 8,000 it
            had in 2024, after IRCC reduced provincial allocations nationwide (source: saskatchewan.ca / IRCC, May 2026).
            With fewer spaces, the province has concentrated its capacity on sectors it most needs to fill, and technology
            is one of them. Because figures and occupation lists change frequently, always verify the current rules on
            saskatchewan.ca before acting.
          </p>
          <Callout type="brand" title="A faster route for tech workers with an offer">
            The Tech Talent Pathway exists precisely because Saskatchewan&apos;s broader International Skilled Worker
            Expression of Interest draws have been paused since late 2024. If you hold a qualifying tech job offer, this
            employer-driven pathway can move forward without waiting on those dormant draws.
          </Callout>

          <h2>Which tech occupations are eligible?</h2>
          <p>
            The pathway targets <strong>technology and innovation occupations</strong>: software, data, networks,
            cybersecurity and the management roles around them. Software developer immigration to Canada is one of the
            clearest fits. Saskatchewan maintains the controlling list of eligible occupations by National Occupational
            Classification (<abbr title="National Occupational Classification">NOC</abbr>) code and updates it periodically.
            The table below shows representative roles the province has prioritised; treat it as illustrative and confirm
            your specific NOC against the current Tech Talent Pathway occupation list on saskatchewan.ca.
          </p>
          <DataTable
            headers={["Eligible tech occupation (illustrative)", "NOC code", "Typical roles"]}
            rows={[
              ["Software developers & programmers", "21232", "Application developers, full-stack and backend programmers"],
              ["Software engineers & designers", "21231", "Software architects, systems software engineers"],
              ["Data scientists", "21211", "Machine-learning, analytics and AI specialists"],
              ["Cybersecurity specialists", "21220", "Information-security analysts and engineers"],
              ["Web developers & designers", "21233", "Front-end, UX and web application developers"],
              ["Computer network & web technicians", "22220", "Network administration and support technicians"],
              ["Computer & information systems managers", "20012", "IT and engineering team leads and managers"],
            ]}
            caption="Illustrative SINP Tech Talent Pathway occupations by NOC (saskatchewan.ca, 2026). The province maintains the controlling list and updates it, verify your NOC before applying."
          />

          <h2>What are the Tech Talent Pathway eligibility requirements?</h2>
          <p>
            <strong>Tech Talent Pathway eligibility</strong> combines a Saskatchewan tech job offer with the core
            International Skilled Worker requirements. You generally need a genuine, full-time offer in an eligible tech
            occupation from an approved Saskatchewan employer, skilled work experience that matches that occupation,
            language results appropriate to the role, post-secondary education or training (often with an Educational
            Credential Assessment for foreign credentials), and enough settlement funds.</p>
          <p>As with every SINP route, meeting
            the requirements places you in scope. It does not guarantee a nomination. The table summarises the core asks;
            the official, controlling criteria live on saskatchewan.ca.
          </p>
          <DataTable
            headers={["Requirement", "What the Tech Talent Pathway asks for"]}
            rows={[
              ["Saskatchewan job offer", "Genuine, full-time offer from an eligible Saskatchewan employer in a qualifying tech occupation"],
              ["Eligible occupation", "Your NOC must appear on the province's current Tech Talent Pathway occupation list"],
              ["Work experience", "Recent, relevant skilled experience that matches your offered tech occupation"],
              ["Language", "Approved English or French test results appropriate to the occupation (results valid 2 years)"],
              ["Education", "Post-secondary education or training; foreign credentials generally need an ECA"],
              ["Settlement funds", "Proof of funds sufficient to support yourself and any family in Saskatchewan"],
            ]}
            caption="SINP Tech Talent Pathway core eligibility, accurate as of May 2026 (saskatchewan.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="warning" title="Eligibility is not a nomination">
            Holding a qualifying tech job offer and meeting the criteria makes you eligible to be considered. That is not the
            same as being nominated. With Saskatchewan&apos;s 2026 allocation reduced to about 4,761, the province manages
            intake carefully, so confirm the live position on saskatchewan.ca rather than assuming a place is secured.
          </Callout>

          <h2>Is the Tech Talent Pathway base or enhanced?</h2>
          <p>
            For most candidates the Tech Talent Pathway is a <strong>base</strong> route: once Saskatchewan nominates you,
            you submit a separate paper application to IRCC for permanent residence, and the nomination does <em>not</em> add
            600 points to a federal Express Entry profile. If you already hold a valid Express Entry profile, you may instead
            be nominated through the enhanced <a href="/pnp/saskatchewan/international-skilled-worker">Saskatchewan Express
            Entry</a> sub-category, which adds <strong>600 CRS points</strong>, but its Expression of Interest draws have
            been paused since late 2024. Not sure where your federal score stands? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>How to apply for the Tech Talent Pathway</h2>
          <p>
            <strong>How to apply for the Tech Talent Pathway</strong> follows the SINP&apos;s employer-driven sequence. The
            steps below show the path from securing a qualifying Saskatchewan tech offer through to a federal
            permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Secure a qualifying tech job offer", desc: "Obtain a genuine, full-time offer from an eligible Saskatchewan employer in an occupation on the current Tech Talent Pathway list." },
              { title: "Confirm your eligibility", desc: "Check that your NOC, skilled work experience, language results, education and settlement funds meet the province's criteria." },
              { title: "Prepare your documents", desc: "Take an approved English or French test, obtain an ECA for foreign education, and gather job-offer, experience and identity evidence." },
              { title: "Submit your SINP application", desc: "Apply through the Tech Talent Pathway with your supporting documents. Saskatchewan assesses the complete application." },
              { title: "Receive your nomination", desc: "If approved, Saskatchewan issues a provincial nomination, an endorsement, not permanent residence in itself." },
              { title: "Apply to IRCC for permanent residence", desc: "File your federal application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <p>
            On cost, there is currently no separate provincial application fee for the International Skilled Worker category,
            of which the Tech Talent Pathway forms part. That is one reason Saskatchewan can be cost-competitive among
            provincial programs. These provincial steps are separate from the IRCC permanent-residence fees you pay at the
            federal stage. Figures change, so confirm current details on saskatchewan.ca before applying.
          </p>

          <h2>How long does the Tech Talent Pathway take?</h2>
          <p>
            <strong>How long the Tech Talent Pathway takes</strong> depends on the stage. After you submit a complete
            nomination application, Saskatchewan&apos;s assessment is often a matter of weeks, though it varies by volume.
            Once nominated, a base, paper-based application to IRCC generally takes longer than the roughly six months IRCC
            targets for enhanced Express Entry applications. Most applicants should plan for several months to the better
            part of a year overall. Service standards move with demand, so verify current figures on saskatchewan.ca and the
            IRCC website.
          </p>

          <h2>How Wild Mountain Immigration helps with the Tech Talent Pathway</h2>
          <p>
            We confirm that your NOC sits on Saskatchewan&apos;s current Tech Talent Pathway list, assess whether your job
            offer and employer meet the province&apos;s criteria, and prepare a nomination application that stands up to
            scrutiny. As a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>, our team represents
            you with the province and with IRCC. We also flag the avoidable issues that cause refusals: a wrong NOC code, a
            language band one short, or thin work-experience evidence.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. Whether you are a software developer in the Saskatoon tech
            sector or weighing offers from Regina tech employers, the <strong>Saskatchewan Tech Talent Pathway</strong> can
            be a genuine fast-track to tech PR in Canada. Figures here are current to 2026 and the province&apos;s Tech
            Talent Pathway occupation list changes, so we always confirm the live saskatchewan.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have a Saskatchewan tech job offer?"
        sub="Get started with a licensed RCIC for an honest read on whether the SINP Tech Talent Pathway is your fastest route to permanent residence in Saskatchewan."
      />
    </>
  );
}
