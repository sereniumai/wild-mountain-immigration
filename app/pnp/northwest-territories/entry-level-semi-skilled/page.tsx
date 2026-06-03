import type { Metadata } from "next";
import { Users } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/northwest-territories/entry-level-semi-skilled";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "NWT Entry-Level / Semi-Skilled (NTNP) 2026",
  titleAbsolute: "Northwest Territories Entry-Level / Semi-Skilled 2026",
  description:
    "Northwest Territories Entry-Level Semi-Skilled stream: NTNP eligibility, the 12-month employer rule and how lower-skilled workers reach PR. Ask an RCIC.",
  path: PATH,
  keywords: [
    "Northwest Territories Entry-Level Semi-Skilled",
    "NTNP semi-skilled",
    "NWT lower-skilled immigration",
    "NWT employer PR",
    "NTNP Entry-Level",
  ],
});

const faqs = [
  {
    q: "What is the NTNP Entry-Level / Semi-Skilled stream?",
    a: "It is a base, employer-driven stream of the Northwest Territories Nominee Program (NTNP) for workers in intermediate and lower-skilled (NOC TEER 4–5) occupations, for example tourism, hospitality, food service, retail and general labour roles, who hold a permanent, full-time job offer from an eligible NWT employer. The employer initiates the application; the candidate cannot self-apply. A nomination is not permanent residence on its own, you still apply to IRCC for PR afterward. Always confirm current rules on immigratenwt.ca.",
  },
  {
    q: "What is the 12-month employer rule for the Entry-Level / Semi-Skilled stream?",
    a: "The stream's most distinctive condition is that you must have worked full-time for at least 12 months with the same NWT employer who is supporting your nomination before the application is submitted. This proves a genuine, ongoing employment relationship and sets the Entry-Level / Semi-Skilled route apart from the Employer-Driven Skilled Worker stream, which does not impose the same minimum. Confirm the current requirement on immigratenwt.ca before you rely on it.",
  },
  {
    q: "Which occupations qualify for the NWT semi-skilled stream?",
    a: "The Entry-Level / Semi-Skilled stream is built for intermediate and lower-skilled roles classified as NOC TEER 4 or TEER 5, commonly in tourism, hospitality, food and accommodation services, retail, and general labour. Higher-skilled (TEER 0–3) occupations go through the Employer-Driven Skilled Worker or NWT Express Entry streams instead. Because occupation classifications and any restricted lists change, verify your specific NOC code against the current program guide.",
  },
  {
    q: "Do I need a job offer for NWT lower-skilled immigration?",
    a: "Yes. The Entry-Level / Semi-Skilled stream is employer-driven, so you need a permanent, full-time job offer from an eligible NWT employer, and that employer must initiate the application on your behalf. There is no version of this stream you can use from outside Canada without a qualifying NWT employer, and the 12-month same-employer requirement means you will already be working for them when the application is submitted.",
  },
  {
    q: "Does qualifying for the Entry-Level / Semi-Skilled stream guarantee a nomination?",
    a: "No. As of 2026 the employer-driven side of the NTNP, including Entry-Level / Semi-Skilled, runs on points-ranked Expression of Interest (EOI) draws. Your employer-supported profile is ranked against the territory's grid, and invitations go to the highest-ranked candidates in periodic draws (March 25, June 25 and September 25 in 2026, up to 65 each). Meeting the basic eligibility no longer guarantees an invitation, and a nomination is still separate from permanent residence.",
  },
  {
    q: "Is the NWT Entry-Level / Semi-Skilled stream enhanced or base?",
    a: "It is a base (paper) nomination. Once the Northwest Territories nominates you, you submit a separate permanent-residence application directly to IRCC, there is no 600 CRS boost. The only enhanced NTNP route is NWT Express Entry, which requires an active Express Entry profile and generally a higher-skilled (TEER 0–3) job offer. If your federal score interests you, our free CRS calculator shows where you stand before any boost.",
  },
  {
    q: "How long does the NTNP take and what does it cost?",
    a: "There are two stages. First the territorial nomination, where the employer-driven side now depends on the EOI draw schedule and processing varies; the NTNP application fee is modest (reported around $300, verify current amounts). Then the permanent-residence application to IRCC, which carries separate federal fees. As a base nomination, the Entry-Level / Semi-Skilled paper application generally takes longer than the roughly six months IRCC targets for enhanced Express Entry files. Confirm fees and timelines on immigratenwt.ca and canada.ca.",
  },
];

export default function NwtEntryLevelSemiSkilledPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Northwest Territories Entry-Level / Semi-Skilled Stream (NTNP), 2026 RCIC Guide",
            description:
              "Northwest Territories Entry-Level Semi-Skilled stream 2026: NTNP semi-skilled eligibility, the 12-month employer rule, NWT job offer and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NTNP Entry-Level / Semi-Skilled application support",
            description:
              "Northwest Territories Entry-Level Semi-Skilled stream 2026: NTNP semi-skilled eligibility, the 12-month employer rule, NWT job offer and how to apply.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NTNP, Entry-Level / Semi-Skilled"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Northwest Territories", path: "/pnp/northwest-territories" },
          { name: "Entry-Level / Semi-Skilled", path: PATH },
        ]}
        title={<>Northwest Territories <span className="text-brand">Entry-Level / Semi-Skilled</span></>}
        lede={
          <p>
            The <strong>Northwest Territories Entry-Level / Semi-Skilled</strong> stream is a base, employer-driven
            route to permanent residence for workers in intermediate and lower-skilled (TEER 4–5) NWT jobs, think
            tourism, hospitality and services, who hold a permanent NWT job offer and have worked 12 months with that
            same employer.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is this NTNP stream right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With only ~197 NWT nominations for 2026 and ranked EOI draws, a strong employer-supported profile
                matters. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Northwest Territories (NTNP)", href: "/pnp/northwest-territories", note: "Every NTNP stream explained" },
                { label: "Employer-Driven Skilled Worker", href: "/pnp/northwest-territories/employer-driven-skilled-worker", note: "The TEER 0–3 NWT route" },
                { label: "NWT Express Entry", href: "/pnp/northwest-territories/express-entry", note: "The enhanced +600 CRS stream" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province & territory" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Northwest Territories Entry-Level Semi-Skilled stream is the base, employer-driven part of the NTNP. It nominates workers in lower-skilled NOC TEER 4 and 5 roles, such as cooks, food counter attendants, housekeeping, retail and general labour, who hold a permanent, full-time NWT job offer. You need that offer from an eligible NWT employer who initiates the application, and you must have worked 12 months full-time with the same employer first. Because it is a base nomination, you then apply separately to IRCC for PR."
            items={[
              <>The <strong>Entry-Level / Semi-Skilled</strong> stream nominates workers in intermediate and lower-skilled (<strong>TEER 4–5</strong>) NWT jobs, tourism, hospitality, food service, retail and general labour.</>,
              <>It is <strong>employer-driven</strong>: you need a permanent, full-time job offer from an eligible NWT employer who <strong>initiates the application</strong>, you cannot self-apply.</>,
              <>Its defining rule: you must have worked <strong>12 months full-time with the same NWT employer</strong> before applying.</>,
              <>It is a <strong>base (paper) nomination</strong>, no 600 CRS boost; you file a separate PR application with IRCC.</>,
              <>The employer-driven side now uses <strong>points-ranked EOI draws</strong> (new in 2026), so eligibility alone does not guarantee an invitation.</>,
            ]}
          />

          <h2>What is the NTNP Entry-Level / Semi-Skilled stream?</h2>
          <p>
            The <strong>Northwest Territories Entry-Level / Semi-Skilled</strong> stream is a base, employer-driven
            pathway within the Northwest Territories Nominee Program (NTNP). It exists for workers in intermediate and
            lower-skilled occupations, those classified as <abbr title="National Occupational Classification">NOC</abbr>{" "}
            <strong>TEER 4 or TEER 5</strong>, who hold a permanent, full-time job offer from an eligible NWT employer.
            In practice that means roles across <strong>tourism, hospitality, food and accommodation services, retail
            and general labour</strong>, for example cooks, food counter attendants, housekeeping and labourer
            positions. These are exactly the jobs a small northern economy struggles to fill locally. Because it is{" "}
            <strong>employer-driven</strong>, the NWT employer must offer the position and initiate the application;
            candidates cannot apply on their own.
          </p>
          <p>
            This is the part of the NTNP built for <strong>NWT lower-skilled immigration</strong>, sitting alongside the
            higher-skilled streams. The territory&apos;s 2026 nomination allocation is about <strong>197</strong> across
            all streams, down from roughly 300 the previous year, after IRCC cut provincial and territorial allocations
            nationwide (source: immigratenwt.ca / IRCC, May 2026). With one of the smallest allocations in Canada, a
            well-positioned, employer-supported profile is essential. As with every nominee program, a nomination is a
            recommendation, not permanent residence in itself, you still apply to IRCC for PR on a separate application.
            Figures and rules change frequently, so always verify the current position on immigratenwt.ca before acting.
          </p>
          <Callout type="brand" title="Who the Entry-Level / Semi-Skilled stream is for">
            This stream is for <strong>NTNP semi-skilled</strong> candidates already working in the NWT for a supporting
            employer in a TEER 4–5 role. If your occupation is higher-skilled (TEER 0–3), the{" "}
            <a href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a> or{" "}
            <a href="/pnp/northwest-territories/express-entry">NWT Express Entry</a> streams will fit better.
          </Callout>

          <h2>Who is eligible for NWT Entry-Level / Semi-Skilled?</h2>
          <p>
            Eligibility for the <strong>Entry-Level / Semi-Skilled</strong> stream rests on a connected set of
            requirements you must satisfy before your employer submits the application. The defining condition is the{" "}
            <strong>12-month same-employer rule</strong>: you must have worked full-time for at least 12 months with the
            same NWT employer who is supporting your nomination. That requirement is what most clearly separates this
            stream from the Skilled Worker route, and it means you will already be in the NWT and employed when the file
            goes in. The table below summarises the core criteria; the official, controlling list lives on
            immigratenwt.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the Entry-Level / Semi-Skilled stream asks for"]}
            rows={[
              ["Job offer", "A permanent, full-time job offer from an eligible NWT employer in an intermediate or lower-skilled (NOC TEER 4–5) occupation"],
              ["12-month rule", "At least 12 months of full-time work with the same NWT employer supporting your nomination, before the application is submitted"],
              ["Employer-driven", "The NWT employer initiates the Expression of Interest, candidates cannot self-apply on the employer-driven streams"],
              ["Occupation level", "NOC TEER 4 or 5 (e.g. tourism, hospitality, food service, retail, general labour); TEER 0–3 roles use the Skilled Worker / Express Entry streams"],
              ["Language, education & funds", "Meet the program's minimum language ability, education and settlement-funds criteria as set out in the current program guide"],
              ["Intent to settle", "A genuine intention to live and work in the Northwest Territories"],
            ]}
            caption="NTNP Entry-Level / Semi-Skilled core eligibility, accurate as of May 2026 (immigratenwt.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="The 12-month rule is the one most applicants miss">
            Because you must have <strong>12 months full-time with the same supporting employer</strong> before applying,
            this is not a route you can start from abroad. It rewards workers who have already settled into a stable NWT
            job, and it means changing employers can reset the clock. Confirm how your specific history counts before
            relying on it.
          </Callout>

          <h2>How does it differ from the Skilled Worker and Express Entry streams?</h2>
          <p>
            The clearest way to understand the <strong>Entry-Level / Semi-Skilled</strong> stream is to contrast it with
            the territory&apos;s other employer-driven routes. The difference comes down to <strong>occupation skill
            level</strong>, the <strong>12-month employer rule</strong>, and whether the route is base or enhanced. All
            three are employer-driven and run through ranked EOI draws, but only NWT Express Entry adds CRS points.
          </p>
          <DataTable
            headers={["Feature", "Entry-Level / Semi-Skilled", "Skilled Worker", "NWT Express Entry"]}
            rows={[
              ["Occupation level", "TEER 4–5", "TEER 0–3", "Generally TEER 0–3"],
              ["12-month same-employer rule", "Yes", "No", "No"],
              ["Stream type", "Base", "Base", "Enhanced (+600 CRS)"],
              ["Express Entry profile", "Not required", "Not required", "Required"],
              ["Effect of nomination", "Separate IRCC paper application", "Separate IRCC paper application", "Adds 600 CRS points"],
            ]}
            caption="NTNP employer-driven streams compared (immigratenwt.ca, May 2026). All are employer-driven; figures change, verify live."
          />
          <p>
            For <strong>NWT employer PR</strong> through this stream, the trade-off is straightforward: the
            Entry-Level / Semi-Skilled route opens permanent residence to lower-skilled workers the higher-skilled
            streams exclude, but in exchange it asks for that year of proven employment and, as a base nomination, leads
            to a longer federal paper process. Want to see your federal starting score before any boost? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a>.
          </p>

          <h2>How do the EOI draws work for this stream?</h2>
          <p>
            A major 2026 change reshaped the <strong>NWT employer-driven</strong> side of the NTNP, and the
            Entry-Level / Semi-Skilled stream is part of it. Rather than a simple first-come process, the employer-driven
            pathways now use a points-ranked <strong>Expression of Interest (EOI)</strong> model. An eligible,
            employer-supported candidate has an EOI submitted, the territory ranks profiles against its grid, and
            invitations are issued to the highest-ranked candidates in periodic draws.
          </p>
          <p>
            The 2026 draw schedule reflects how limited the program is. The first draw on <strong>March 25, 2026</strong>{" "}
            invited <strong>65 candidates</strong>, with further draws planned for <strong>June 25</strong> and{" "}
            <strong>September 25</strong> of up to 65 invitations each. Because the employer-driven streams are now
            competitive, simply meeting the eligibility criteria does not mean you will be invited, your ranking, and
            the strength of your employer support, decide the outcome.
          </p>
          <Callout type="warning" title="Eligibility is not an invitation">
            With roughly 197 nominations for all of 2026 and ranked EOI draws of up to 65 candidates each, qualifying for
            the Entry-Level / Semi-Skilled stream does not mean you will be invited. The employer initiates the
            application, you cannot self-apply, so genuine, durable NWT employer support is the foundation of any
            realistic plan. We will give you a candid read before you invest time and fees.
          </Callout>

          <h2>How to apply to the NTNP Entry-Level / Semi-Skilled stream</h2>
          <p>
            <strong>How to apply</strong> for the Entry-Level / Semi-Skilled stream follows the standard NTNP
            employer-driven sequence, secure and hold the job, EOI, invitation, then a full nomination application. The
            steps below show the path from a qualifying NWT job to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Hold a qualifying NWT job", desc: "Work full-time in a permanent, intermediate or lower-skilled (TEER 4–5) role for an eligible NWT employer who will support your nomination." },
              { title: "Meet the 12-month rule", desc: "Complete at least 12 months full-time with that same NWT employer before the application is submitted, the stream's defining requirement." },
              { title: "Employer submits an EOI", desc: "Your NWT employer initiates a points-ranked Expression of Interest on your behalf. Candidates cannot self-apply on the employer-driven streams." },
              { title: "Receive an invitation", desc: "If your ranked EOI earns an invitation in a draw (March 25, June 25 or September 25 in 2026), you move to a full application. Eligibility alone does not guarantee this." },
              { title: "Submit the nomination application & get nominated", desc: "File a complete Entry-Level / Semi-Skilled application with supporting documents and the modest NTNP fee. On approval, the NWT nominates you." },
              { title: "Apply to IRCC for permanent residence", desc: "As a base nomination, file a separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <p>
            On cost, the NTNP application fee is modest (reported around $300, verify the current amount) and is
            separate from the IRCC permanent-residence fees you pay at the federal stage. Because this is a{" "}
            <strong>base</strong> nomination, the federal paper application generally takes longer than the roughly
            six-month target IRCC sets for enhanced Express Entry files. All figures change, so confirm current fees and
            timelines on immigratenwt.ca and canada.ca before you apply.
          </p>

          <h2>How long does the Entry-Level / Semi-Skilled route take?</h2>
          <p>
            <strong>How long the stream takes</strong> depends on the stage. On the employer-driven side, the wait for an
            invitation now hinges on your EOI ranking and the draw schedule (draws planned for March, June and September
            2026). After a complete nomination application is submitted, territorial processing varies. Once nominated,
            because this is a base nomination, your separate IRCC paper application generally takes longer than the
            roughly six months IRCC targets for enhanced files. Most applicants should plan for the better part of a
            year, often more, from invitation to permanent residence, on top of the 12 months of employment the stream
            already requires.
          </p>

          <h2>How Wild Mountain Immigration helps with the Entry-Level / Semi-Skilled stream</h2>
          <p>
            This stream rewards preparation and timing. Our team assesses your profile against the wider{" "}
            <a href="/pnp/northwest-territories">Northwest Territories Nominee Program</a> priorities, confirms that your
            occupation truly sits at TEER 4–5 rather than the higher-skilled{" "}
            <a href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a> band,
            checks that your 12 months of full-time work with the same NWT employer is documented properly, often built
            on a <a href="/work-permits">work permit</a>, and helps you and your employer put together an EOI and
            nomination application that ranks well and stands up to scrutiny. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), we represent you with
            the territory and with IRCC, and catch the documentation gaps that cause avoidable refusals. With only about
            197 nominations available across all of 2026, that positioning is where good advice earns its keep.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own
            application an expert check before you submit, and you can <a href="/contact">contact our team</a> first.
            Used well, the <strong>Northwest Territories Entry-Level / Semi-Skilled</strong> stream turns a settled TEER
            4–5 job into a credible transition to PR. Figures here are current to 2026 and change regularly, so we
            always confirm the live immigratenwt.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Find out if the Entry-Level / Semi-Skilled stream fits you"
        sub="Get started with a licensed RCIC for an honest read on whether the Northwest Territories Entry-Level / Semi-Skilled stream is a realistic route to permanent residence."
      />
    </>
  );
}
