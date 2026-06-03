import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/manitoba/skilled-worker-in-manitoba";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Skilled Worker in Manitoba Stream (MPNP) 2026",
  titleAbsolute: "MPNP Skilled Worker in Manitoba Stream 2026",
  description:
    "Skilled Worker in Manitoba stream: MPNP eligibility for workers already in Manitoba with a job offer, the EOI and how to apply. RCIC-led guidance.",
  path: PATH,
  keywords: [
    "Skilled Worker in Manitoba",
    "Skilled Worker in Manitoba stream",
    "MPNP Skilled Worker in Manitoba",
    "Manitoba job offer PR",
    "MPNP EOI",
    "workers already in Manitoba",
  ],
});

const faqs = [
  {
    q: "Who qualifies for the Skilled Worker in Manitoba stream?",
    a: "The Skilled Worker in Manitoba stream is for temporary foreign workers and recent graduates who are already living and working in Manitoba on a valid work permit, and who hold a permanent, full-time job offer from their current Manitoba employer. You generally need to have worked for that employer for at least six continuous months before you apply, plus meet the language, and connection requirements. It is an in-Manitoba stream, you cannot use it from outside Canada. Workers abroad apply through Skilled Worker Overseas instead.",
  },
  {
    q: "How long do I need to work in Manitoba before applying?",
    a: "For most applicants the Skilled Worker in Manitoba stream expects at least six months of continuous full-time employment with the Manitoba employer who is offering you the permanent job. The six-month rule shows the province a genuine, ongoing employment relationship rather than a brand-new hire. Some recent graduates of designated Manitoba institutions can qualify on a shorter period. Because the exact rule varies by applicant type, confirm your situation against the current immigratemanitoba.com program criteria before you submit.",
  },
  {
    q: "Do I need a job offer for the Skilled Worker in Manitoba stream?",
    a: "Yes. A permanent, full-time job offer from your current Manitoba employer is the core requirement of this stream, it is what separates it from Skilled Worker Overseas. The offer must be for ongoing, non-seasonal work that matches the occupation you have been doing in Manitoba. A temporary, casual or seasonal offer does not meet the bar. Because the offer anchors your whole application, we always review it carefully before you submit your Expression of Interest.",
  },
  {
    q: "How does the MPNP Expression of Interest work for this stream?",
    a: "You first build a free MPNP Expression of Interest (EOI) profile. Manitoba scores it out of 1,000 points, your Manitoba connection alone is worth up to 500, and ranks your profile against the whole pool. In each draw the province issues a Letter of Advice to Apply (LAA) to the highest-ranked candidates, often targeting specific occupations. Submitting an EOI is not an application: you only apply for a nomination after you receive an LAA. Selection is by ranking and provincial priorities, not first-come-first-served.",
  },
  {
    q: "Is the Skilled Worker in Manitoba stream a base or enhanced nomination?",
    a: "It is a base nomination. That means once Manitoba nominates you, you submit a separate paper application directly to IRCC for permanent residence, the nomination does not add 600 CRS points to an Express Entry profile. Only the enhanced pathway within Skilled Worker Overseas feeds the Express Entry boost. Because base applications run on their own federal timeline, we confirm at the outset that you understand the route before you start, so there are no surprises later.",
  },
  {
    q: "What language level do I need for the Skilled Worker in Manitoba stream?",
    a: "You must take an approved English or French test and meet the Canadian Language Benchmark (CLB) level set for your occupation. Regulated and many TEER 0–3 occupations generally require CLB 5 or higher, while some lower-skilled roles may accept CLB 4. The required level is measured on your lowest of four abilities, reading, writing, listening and speaking, so one weak skill can hold you back. Test results are valid for two years. Verify the current minimum for your occupation on immigratemanitoba.com.",
  },
  {
    q: "Does a Skilled Worker in Manitoba nomination guarantee permanent residence?",
    a: "No. A provincial nomination is Manitoba's endorsement, not permanent residence itself. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case, document your Manitoba connection and job offer properly, and flag risks before they become refusals. Meeting every requirement also does not guarantee a Letter of Advice to Apply, because selection is by ranking.",
  },
];

export default function SkilledWorkerInManitobaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Skilled Worker in Manitoba Stream (MPNP), 2026 RCIC Guide",
            description:
              "Skilled Worker in Manitoba stream: MPNP eligibility for workers already in Manitoba with a job offer, the EOI and how to apply. RCIC-led guidance.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "MPNP Skilled Worker in Manitoba application support",
            description:
              "Skilled Worker in Manitoba stream: MPNP eligibility for workers already in Manitoba with a job offer, the EOI and how to apply. RCIC-led guidance.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Manitoba (MPNP), Skilled Worker in Manitoba"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Manitoba (MPNP)", path: "/pnp/manitoba" },
          { name: "Skilled Worker in Manitoba", path: PATH },
        ]}
        title={<>Skilled Worker in Manitoba <span className="text-brand">stream (MPNP)</span></>}
        lede={
          <p>
            The <strong>Skilled Worker in Manitoba stream</strong> nominates temporary foreign workers and graduates
            already working in Manitoba, on a valid permit, with a permanent job offer from their employer, for
            permanent residence. This RCIC-reviewed guide covers eligibility, the MPNP EOI and how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Already working in Manitoba?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Get an honest read on your Skilled Worker in Manitoba eligibility and EOI ranking from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "Manitoba (MPNP) overview", href: "/pnp/manitoba", note: "Every MPNP stream explained" },
                { label: "Skilled Worker Overseas", href: "/pnp/manitoba/skilled-worker-overseas", note: "The from-abroad route" },
                { label: "International Education Stream", href: "/pnp/manitoba/international-education-stream", note: "For Manitoba graduates" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Skilled Worker in Manitoba stream is the MPNP route for temporary foreign workers and graduates already working in Manitoba who hold a permanent, full-time job offer from their employer. It suits candidates with current local work experience and an established connection to the province, ranked through an Expression of Interest pool. A nomination through this stream supports a PR application to IRCC."
            items={[
              <>The <strong>Skilled Worker in Manitoba stream</strong> is for temporary foreign workers and graduates <strong>already working in Manitoba</strong> with a permanent job offer.</>,
              <>It is a <strong>base</strong> MPNP nomination, it leads to a separate IRCC paper application, not 600 CRS points.</>,
              <>Core eligibility: <strong>6+ months</strong> of full-time work with your Manitoba employer, a permanent job offer, language and a Manitoba connection.</>,
              <>Selection runs through the <strong>MPNP EOI</strong> (scored out of 1,000), submitting an EOI is free and is <strong>not</strong> an application.</>,
              <>A <strong>Letter of Advice to Apply</strong> comes from a ranked pool: meeting every requirement does not guarantee an invitation.</>,
            ]}
          />

          <h2>What is the Skilled Worker in Manitoba stream?</h2>
          <p>
            The <strong>Skilled Worker in Manitoba stream</strong> is the Manitoba Provincial Nominee Program&apos;s
            route for temporary foreign workers and recent graduates who are <em>already</em> living and working in the
            province on a valid work permit, with a permanent, full-time job offer from their current Manitoba employer.
            It sits alongside Skilled Worker Overseas in the MPNP&apos;s skilled-worker category, and within
            Manitoba&apos;s 2026 nomination allocation of roughly <strong>6,239</strong>, the in-Manitoba route is one of
            the most-used pathways for workers settling in the province (source: immigratemanitoba.com / IRCC, 2026).
            Because it is a <strong>base</strong> stream, a nomination leads to a separate paper application to IRCC for
            permanent residence rather than adding points to a federal Express Entry profile.
          </p>
          <Callout type="brand" title="This is an in-Manitoba stream">
            You cannot use the Skilled Worker in Manitoba stream from outside Canada. It is built for people who already
            hold a valid Manitoba work permit and a qualifying job offer from their Manitoba employer. If you are still
            abroad, the <a href="/pnp/manitoba/skilled-worker-overseas">Skilled Worker Overseas</a> stream is the route
            designed for you.
          </Callout>

          <h2>Who is the Skilled Worker in Manitoba stream for?</h2>
          <p>
            This stream is aimed squarely at people who have already started their Manitoba working life. Typically that
            means a <strong>temporary foreign worker</strong> on an employer-specific work permit or open work permit who
            has been with the same Manitoba employer for several months, or a <strong>recent graduate</strong> of a Manitoba
            institution who has moved into ongoing employment.</p>
          <p>The common thread is simple. This stream is <em>for workers
            already in Manitoba</em>, contributing to the local labour market, whose employer wants to keep them
            permanently. This is the classic <strong>Manitoba job offer PR</strong> route, turning a current work permit
            into permanent residence. If you do not yet have Manitoba work experience or a job offer, this is not your stream.
          </p>

          <h2>What are the eligibility requirements?</h2>
          <p>
            <strong>MPNP Skilled Worker in Manitoba</strong> eligibility rests on a connected set of requirements you
            must meet when you submit your Expression of Interest. Miss one and the application can be refused, whether
            it is a job offer that is only temporary, a language ability one band short or a permit that has lapsed. The
            table below summarises the core 2026 requirements. The official, controlling list lives on
            immigratemanitoba.com and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Manitoba work experience", "At least 6 continuous months of full-time work with the Manitoba employer making the job offer (some recent Manitoba graduates qualify on a shorter period)"],
              ["Permanent job offer", "A permanent, full-time, non-seasonal offer from your current Manitoba employer in the occupation you have been doing"],
              ["Work permit", "A valid work permit and authorised temporary-resident status in Manitoba at the time you apply"],
              ["Language", "Approved English or French test meeting the CLB level for your occupation (commonly CLB 5; some roles accept CLB 4), measured on your lowest ability, valid 2 years"],
              ["Manitoba connection", "Established through your ongoing Manitoba employment and residence (the MPNP connection is worth up to 500 EOI points)"],
              ["Settlement intent & funds", "Intend to live and work in Manitoba, with settlement funds and an adaptability profile to establish there"],
            ]}
            caption="Skilled Worker in Manitoba core eligibility, accurate as of May 2026 (immigratemanitoba.com). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The CLB level is taken from the lowest of your four abilities, reading, writing, listening and speaking, so
            a single weak skill can drop you below the threshold for your occupation. Lifting your weakest band is often
            the single most valuable thing you can do before submitting your EOI.
          </Callout>

          <h2>How does the MPNP Expression of Interest work?</h2>
          <p>
            Like every MPNP skilled-worker route, the Skilled Worker in Manitoba stream is ranked through the{" "}
            <strong>MPNP Expression of Interest (MPNP EOI)</strong>, scored out of <strong>1,000 points</strong>. You build a
            free EOI profile and Manitoba scores it, with your <strong>Manitoba connection alone worth up to 500 points</strong>,
            then the province ranks your profile against the whole pool.</p>
          <p>Periodic draws then issue a{" "}
            <strong>Letter of Advice to Apply (LAA)</strong> to the highest-ranked candidates, often filtered by an{" "}
            <strong>in-demand occupation in Manitoba</strong> or a strategic recruitment initiative. Crucially, an MPNP EOI
            is <em>not</em> an application, you only apply for a nomination once you hold an LAA.
          </p>
          <DataTable
            headers={["EOI factor", "What it rewards", "Approx. max points"]}
            rows={[
              ["Manitoba connection", "Ongoing work, study, family or friends in the province", "500"],
              ["Language proficiency", "Higher CLB across all four abilities", "175"],
              ["Age", "Candidates in the prime working-age band", "75"],
              ["Work experience", "Years of relevant full-time experience", "175"],
              ["Education", "Completed credentials (degrees, diplomas, trades)", "125"],
            ]}
            caption="Illustrative MPNP Expression of Interest factors and weightings, out of 1,000 (immigratemanitoba.com, 2026). Manitoba largely no longer publishes a single uniform cut-off, figures are indicative and change."
          />
          <Callout type="warning" title="Eligibility does not guarantee an invitation">
            The MPNP is points-ranked. Meeting every requirement places you in the pool, but Manitoba issues a Letter of
            Advice to Apply only to the highest-ranked candidates in each draw, and many draws now target specific
            occupations. Treat any score you see online as indicative, and beware any source that implies a place is
            guaranteed.
          </Callout>

          <h2>Base vs enhanced: where this stream sits</h2>
          <p>
            This distinction changes your timeline more than any other. The Skilled Worker in Manitoba stream issues a{" "}
            <strong>base</strong> nomination: once nominated, you submit a <em>separate paper application directly to
            IRCC</em> for permanent residence, it earns no CRS points and is generally slower than an Express Entry
            application. Only the enhanced pathway within{" "}
            <a href="/pnp/manitoba/skilled-worker-overseas">Skilled Worker Overseas</a> feeds Express Entry&apos;s +600
            CRS boost. If seeing your federal starting score matters to you, our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> is a useful first step, but for this stream, the
            nomination itself does not add those points.
          </p>

          <h2>How do you apply for the Skilled Worker in Manitoba stream?</h2>
          <p>
            <strong>How to apply</strong> for the Skilled Worker in Manitoba stream follows the standard MPNP EOI
            sequence, EOI first, then a Letter of Advice to Apply, then a full nomination application, then IRCC. The
            steps below show the path from confirming eligibility to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "Check that you hold valid Manitoba status, have at least six months of full-time work with your employer, a permanent job offer, and meet the language and connection requirements." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, and collect your work permit, employment records, job-offer letter and proof of your Manitoba connection." },
              { title: "Submit your MPNP EOI", desc: "Create and submit a free Expression of Interest profile. Manitoba scores it out of 1,000 points and ranks it against the pool." },
              { title: "Receive a Letter of Advice to Apply", desc: "If your EOI ranks highly enough in a draw, often by occupation, Manitoba issues an LAA. An EOI alone is not an invitation." },
              { title: "Apply for nomination", desc: "Submit a complete nomination application with the provincial fee and supporting documents within the deadline. On approval, Manitoba nominates you." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <p>
            On cost, submitting an EOI is <strong>free</strong>; a provincial application fee applies once you receive a
            Letter of Advice to Apply and submit your nomination application. These provincial amounts are separate from
            the IRCC permanent-residence fees you pay federally, and fees change, so confirm current figures on
            immigratemanitoba.com before you apply.
          </p>

          <h2>How does this stream compare to Skilled Worker Overseas?</h2>
          <p>
            The clearest way to place the in-Manitoba route is to contrast it with the province&apos;s from-abroad
            skilled-worker stream. The Skilled Worker in Manitoba stream is for people <strong>already working in the
            province</strong> with a job offer and Manitoba experience; <a href="/pnp/manitoba/skilled-worker-overseas">
            Skilled Worker Overseas</a> qualifies candidates on the strength of their Manitoba connection or through a
            strategic recruitment initiative, and it offers an enhanced Express Entry pathway that this stream does not.
          </p>
          <DataTable
            headers={["Feature", "Skilled Worker in Manitoba", "Skilled Worker Overseas"]}
            rows={[
              ["Where you are", "Already living and working in Manitoba", "Outside Canada (or not yet working in Manitoba)"],
              ["Job offer", "Required, permanent, from your current employer", "Not always required; connection or strategic recruitment instead"],
              ["Manitoba work experience", "Typically 6+ months with the employer", "Not required"],
              ["Nomination type", "Base only", "Base, plus an enhanced Express Entry option (+600 CRS)"],
              ["Effect of nomination", "Leads to a separate IRCC paper application", "Paper application, or Express Entry if enhanced"],
            ]}
            caption="Skilled Worker in Manitoba vs Skilled Worker Overseas (immigratemanitoba.com, 2026)."
          />

          <h2>How Wild Mountain helps with your application</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Manitoba&apos;s current priorities, reviews your job offer
            and work history, documents the all-important <strong>Manitoba connection</strong>, and models your EOI ranking so
            you submit with a realistic read on your odds. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team prepares an
            Expression of Interest and nomination application that stands up to scrutiny, and catches the avoidable mistakes,
            such as a job offer that reads as temporary or a status gap, that cause refusals. If your nomination is{" "}
            <a href="/express-entry">enhanced</a>, we manage the federal stage too.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment, and see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial and IRCC charges. Figures here are current to 2026 and
            change, so we always confirm the live immigratemanitoba.com page before advising. For the right candidate the{" "}
            <strong>Skilled Worker in Manitoba</strong> stream is one of the most direct work-permit-to-PR routes in Manitoba.
            Compare it with the <a href="/pnp/manitoba/skilled-worker-overseas">Skilled Worker Overseas</a> route or the full{" "}
            <a href="/pnp/manitoba">Manitoba MPNP</a> overview.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Ready to apply through the Skilled Worker in Manitoba stream?"
        sub="Get started with a licensed RCIC for an honest read on your Manitoba connection, your job offer and your Expression of Interest ranking."
      />
    </>
  );
}
