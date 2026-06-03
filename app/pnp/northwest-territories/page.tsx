import type { Metadata } from "next";
import { MapPin, Briefcase, Hammer, Rocket, Building2, Languages } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/northwest-territories";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Northwest Territories Nominee Program (NTNP)",
  titleAbsolute: "NTNP 2026: Northwest Territories PNP",
  description:
    "Northwest Territories Nominee Program 2026: NTNP employer-driven, Express Entry, business and francophone streams, eligibility and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Northwest Territories Nominee Program",
    "NTNP 2026",
    "NWT PNP",
    "immigrate to Northwest Territories",
    "NWT employer-driven",
    "NWT Express Entry",
  ],
});

const faqs = [
  {
    q: "What is the Northwest Territories Nominee Program (NTNP)?",
    a: "The NTNP is the territory's economic immigration program. It lets the Government of the Northwest Territories nominate foreign workers and business owners who help meet local labour-market and economic needs. Most NTNP streams are employer-driven, meaning you need a genuine job offer from an NWT employer who supports your application. A nomination is not permanent residence on its own, you still apply to IRCC for PR afterward. Always confirm current rules on immigratenwt.ca, as figures and streams change.",
  },
  {
    q: "Do I need a job offer to immigrate to the Northwest Territories?",
    a: "For most NTNP routes, yes. The Employer-Driven Skilled Worker, Entry-Level/Semi-Skilled and NWT Express Entry pathways all require a full-time job offer from an eligible NWT employer, and the employer, not the candidate, initiates the application. The two exceptions are the Business Stream, where you invest in or buy a territorial business instead, and the Francophone Stream, which still requires NWT employment but is open across all skill levels. We can tell you honestly which route, if any, fits your profile.",
  },
  {
    q: "What is the difference between the enhanced and base NTNP streams?",
    a: "NWT Express Entry is the territory's enhanced stream: you must already be in the federal Express Entry pool, and an NTNP nomination adds 600 CRS points to your score, which lifts most candidates well above recent federal draw cut-offs, though IRCC issues any Invitation to Apply at a following draw. The Employer-Driven Skilled Worker, Entry-Level/Semi-Skilled, Business and Francophone streams are base (paper) nominations: once nominated, you submit a separate permanent-residence application directly to IRCC, which generally takes longer than the Express Entry route.",
  },
  {
    q: "How does the NTNP employer-driven EOI draw work?",
    a: "As of 2026, the employer-driven side of the NTNP moved to a points-ranked Expression of Interest (EOI) model. An eligible NWT employer-supported candidate submits an EOI, the territory ranks profiles against its grid, and invitations are issued in periodic draws. The first 2026 draw (March 25) invited 65 candidates, with further draws planned for June 25 and September 25 of up to 65 each. Because it is now competitive, meeting the basic eligibility no longer guarantees an invitation.",
  },
  {
    q: "How many nominations does the NWT have for 2026?",
    a: "The Northwest Territories' 2026 nomination allocation is roughly 197, down from about 300 the year before, reflecting federal cuts to provincial and territorial nominee numbers (source: immigratenwt.ca / IRCC, May 2026). With one of the smallest allocations in Canada, the NTNP is highly limited, so a well-positioned, employer-supported profile matters more than ever. Allocations can change, so verify the current figure before you act.",
  },
  {
    q: "What are the requirements for the NWT Express Entry stream?",
    a: "The NWT Express Entry stream layers territorial requirements on top of the federal Express Entry minimums. You need an active Express Entry profile, an eligible full-time NWT job offer (generally in a TEER 0–3 occupation), and you must meet the program's work-experience, language and education criteria. Because it is enhanced, a nomination adds 600 CRS points. Not sure where your federal score stands? Try our free CRS calculator first, then book a consultation to confirm whether NWT Express Entry is realistic for you.",
  },
  {
    q: "Can I open a business to immigrate to the Northwest Territories?",
    a: "Yes, the NTNP Business Stream is for entrepreneurs who establish, buy or invest in an NWT business. It does not require a job offer. The published thresholds ask for a higher net worth and investment for a business in Yellowknife (about $500,000 net worth and $200,000 investment) than for one outside the capital (about $250,000 net worth and $100,000 investment). The Business Stream is processed first-come, first-served rather than through EOI draws. These figures change, so confirm the current criteria on immigratenwt.ca.",
  },
  {
    q: "How long does the NTNP take and what does it cost?",
    a: "There are two stages. First the territorial nomination, where processing varies and the employer-driven side now depends on the EOI draw schedule; the NTNP application fee is modest (reported around $300, verify current amounts). Then the permanent-residence application to IRCC, which carries separate federal fees: an enhanced NWT Express Entry application is typically processed in about six months, while a base nomination's paper application generally takes longer. Confirm fees and timelines on immigratenwt.ca and canada.ca before applying.",
  },
];

export default function NorthwestTerritoriesPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Northwest Territories Nominee Program (NTNP), 2026 RCIC Guide",
            description:
              "Northwest Territories Nominee Program 2026: NTNP employer-driven, Express Entry, business and francophone streams, eligibility and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NTNP application support",
            description:
              "Northwest Territories Nominee Program 2026: NTNP employer-driven, Express Entry, business and francophone streams, eligibility and how to apply. RCIC-led.",
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
          { name: "Northwest Territories", path: PATH },
        ]}
        title={<>Northwest Territories Nominee Program <span className="text-brand">(NTNP)</span></>}
        lede={
          <p>
            The <strong>Northwest Territories Nominee Program</strong> is a small, employer-driven route to permanent
            residence, most streams need a job offer from an NWT employer. The territory&apos;s 2026 allocation is just
            about 197 nominations, so an employer-supported, well-ranked profile is essential.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the NTNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With only ~197 nominations for 2026 and an employer-driven model, strategy matters. Get an honest read
                from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory explained" },
                { label: "Yukon (YNP)", href: "/pnp/yukon", note: "The other northern territory's program" },
                { label: "Saskatchewan (SINP)", href: "/pnp/saskatchewan", note: "A fast-moving prairie PNP" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Northwest Territories Nominee Program (NTNP) is the territory's economic immigration program for foreign workers and entrepreneurs. Most streams are employer-driven, so you generally need a full-time job offer from an eligible NWT employer who initiates the application. The employer-driven side now uses points-ranked Expression of Interest draws, and NWT Express Entry is the enhanced stream that adds 600 CRS points. A nomination then supports your separate application to IRCC for permanent residence."
            items={[
              <>The <strong>Northwest Territories Nominee Program (NTNP)</strong> nominates foreign workers and entrepreneurs for permanent residence in the NWT.</>,
              <>Most streams are <strong>employer-driven</strong>, you generally need a full-time job offer from an eligible NWT employer who initiates the application.</>,
              <><strong>NWT Express Entry</strong> is the enhanced stream and adds <strong>600 CRS points</strong>; the others are base (paper) nominations.</>,
              <>For 2026, the NWT allocation fell to roughly <strong>197 nominations</strong> (down from ~300), one of the smallest in Canada.</>,
              <>The employer-driven side now uses <strong>points-ranked EOI draws</strong> (new in 2026), so eligibility alone does not guarantee an invitation.</>,
            ]}
          />

          <h2>What is the Northwest Territories Nominee Program?</h2>
          <p>
            The <strong>Northwest Territories Nominee Program (NTNP)</strong> is the territory&apos;s economic immigration
            program. It lets the Government of the Northwest Territories (GNWT) nominate foreign nationals, workers and
            business owners, who help fill labour shortages and grow the northern economy. As with every nominee program, an NTNP
            nomination is a strong recommendation, not permanent residence in itself: you still apply to IRCC for PR on a
            separate application. The defining feature of the <strong>NWT PNP</strong> is that it is largely{" "}
            <strong>employer-driven</strong>, for most streams, an NWT employer must offer you a job and support your file.
          </p>
          <p>
            The territory&apos;s 2026 nomination allocation is about <strong>197</strong>, down from roughly 300 the
            previous year, after IRCC cut provincial and territorial allocations nationwide (source: immigratenwt.ca /
            IRCC, May 2026). That makes the NTNP one of the smallest programs in the country. With so few spaces, meeting
            the basic eligibility is no longer the same as receiving an invitation, and a well-positioned,
            employer-supported profile is essential. Figures and rules change frequently, so always verify the current
            position on immigratenwt.ca before acting.
          </p>

          <h2>NTNP streams in 2026</h2>
          <p>
            The NTNP runs a compact set of streams, split between the <strong>employer-driven</strong> pathways (which now
            use ranked Expression of Interest draws), the enhanced <strong>NWT Express Entry</strong> route, and two
            first-come, first-served streams for entrepreneurs and francophone workers. The table below summarises each
            and links to its dedicated guide.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Type"]}
            rows={[
              [
                <a key="sw" href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a>,
                "Skilled workers (TEER 0–3) with a full-time NWT job offer; employer initiates via EOI",
                "Base",
              ],
              [
                <a key="el" href="/pnp/northwest-territories/entry-level-semi-skilled">Entry-Level / Semi-Skilled</a>,
                "TEER 4–5 roles; 12 months full-time with the same NWT employer required",
                "Base",
              ],
              [
                <a key="ee" href="/pnp/northwest-territories/express-entry">NWT Express Entry</a>,
                "Express Entry candidates with an eligible NWT job offer (generally TEER 0–3)",
                "Enhanced (+600 CRS)",
              ],
              [
                <a key="biz" href="/pnp/northwest-territories/business">Business Stream</a>,
                "Entrepreneurs establishing, buying or investing in an NWT business (no job offer)",
                "Base · FCFS",
              ],
              [
                <a key="fr" href="/pnp/northwest-territories/francophone">Francophone Stream</a>,
                "French-speaking workers (all TEER 0–5) with NWT employment; FR + EN required",
                "Base · FCFS",
              ],
            ]}
            caption="Main NTNP streams (immigratenwt.ca, 2026). Eligibility does not guarantee an invitation; figures change."
          />
          <Callout type="brand" title="Employer-driven, Express Entry and the +600 CRS boost">
            Most <strong>NWT employer-driven</strong> applications run as base, paper nominations. The exception is{" "}
            <strong>NWT Express Entry</strong>: if you already hold an active Express Entry profile and an eligible NWT
            job offer, a nomination adds <strong>600 CRS points</strong> to your federal score, putting most candidates
            well above the typical draw cut-off. It is the fastest NTNP route to permanent residence.
          </Callout>

          <h2>Enhanced (Express Entry) vs base nominations</h2>
          <p>
            As with every <a href="/pnp">nominee program</a>, the most important distinction is whether a stream is{" "}
            <strong>enhanced</strong> or <strong>base</strong>. The{" "}
            <a href="/pnp/northwest-territories/express-entry">NWT Express Entry</a> stream is enhanced: you must already
            be in the federal <a href="/express-entry">Express Entry</a> pool, and the territorial nomination adds{" "}
            <strong>600 CRS points</strong> to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score, which lifts
            virtually any candidate above the cut-off at the next draw. The usual roughly six-month federal processing
            follows. Workers who already hold skilled NWT experience often enter that pool through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>.
          </p>
          <p>
            The <a href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a>,{" "}
            <a href="/pnp/northwest-territories/entry-level-semi-skilled">Entry-Level/Semi-Skilled</a>,{" "}
            <a href="/pnp/northwest-territories/business">Business</a> and{" "}
            <a href="/pnp/northwest-territories/francophone">Francophone</a> streams are <strong>base</strong>{" "}
            nominations. Once the NWT nominates you, you submit a separate permanent-residence application directly to
            IRCC, there is no CRS boost, and processing generally takes longer than the Express Entry route. Confirming
            whether your route is enhanced or base is one of the first things our team checks, because it changes your
            whole timeline. Want to see your starting score before any boost? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a>.
          </p>

          <h2>The NTNP employer-driven EOI draw model</h2>
          <p>
            A major 2026 change reshaped the <strong>NWT employer-driven</strong> side. Rather than a simple first-come
            process, the Skilled Worker and Entry-Level/Semi-Skilled pathways now use a points-ranked{" "}
            <strong>Expression of Interest (EOI)</strong> model. An eligible, employer-supported candidate submits an EOI,
            the territory ranks profiles against its grid, and invitations are issued to the highest-ranked candidates in
            periodic draws.
          </p>
          <p>
            The 2026 draw schedule reflects how limited the program is. The first draw on{" "}
            <strong>March 25, 2026</strong> invited <strong>65 candidates</strong>, with further draws planned for{" "}
            <strong>June 25</strong> and <strong>September 25</strong> of up to 65 invitations each. Because the
            employer-driven streams are now competitive, simply meeting the eligibility criteria does not mean you will be
            invited. Your ranking and the strength of your employer support decide the outcome. By contrast, the{" "}
            <strong>Business</strong> and <strong>Francophone</strong> streams remain first-come, first-served.
          </p>
          <Callout type="warning" title="Eligibility is not an invitation">
            With roughly 197 nominations for all of 2026 and ranked EOI draws of up to 65 candidates each, qualifying for
            an NTNP stream does not mean you will be invited. The employer initiates the employer-driven application and you cannot self-apply, so genuine NWT employer support is the foundation of any realistic plan. We will give
            you a candid read before you invest time and fees.
          </Callout>

          <h2>NTNP eligibility</h2>
          <p>
            Requirements differ by stream, but a few rules run through the whole <strong>NWT PNP</strong>. For the{" "}
            <strong>Employer-Driven Skilled Worker</strong> and <strong>NWT Express Entry</strong> streams, you generally
            need a full-time job offer in a higher-skilled (TEER 0–3) occupation from an eligible NWT employer who
            initiates the application. The <strong>Entry-Level/Semi-Skilled</strong> stream covers lower-skilled (TEER
            4–5) roles but adds a distinctive condition: you must have worked <strong>12 months full-time with the same
            NWT employer</strong> before applying.
          </p>
          <p>
            The <strong>Business Stream</strong> instead tests net worth and investment rather than a job offer, broadly
            about $500,000 net worth and $200,000 investment for a business in Yellowknife, or $250,000 and $100,000
            outside the capital. The <strong>Francophone Stream</strong> is the program&apos;s only all-skill-level
            pathway (TEER 0–5), but requires French and English ability alongside NWT employment. Because the published
            criteria are detailed and updated regularly, the safest step is a profile review against the current
            immigratenwt.ca program guide.
          </p>

          <h2>How to apply to the NTNP and immigrate to the Northwest Territories</h2>
          <p>
            <strong>How to apply for the NTNP</strong> depends on your stream, but the employer-driven path follows a
            clear sequence. First, secure a genuine full-time job offer from an eligible NWT employer. Many candidates
            reach that point by working in the territory first on a <a href="/work-permits">work permit</a>, sometimes a{" "}
            <a href="/work-permits/pgwp">post-graduation work permit</a> after Canadian study, which is also how the{" "}
            <a href="/pnp/northwest-territories/entry-level-semi-skilled">Entry-Level/Semi-Skilled</a> stream builds its
            required 12 months of NWT employment.</p>
          <p>The <strong>employer</strong> then initiates an Expression of Interest
            on your behalf, candidates cannot self-apply on the employer-driven streams. If your ranked EOI earns an
            invitation in a draw, a complete nomination application is submitted with supporting documents. Once the
            territory nominates you, you apply to <strong>IRCC</strong> for permanent residence, through{" "}
            <a href="/express-entry">Express Entry</a> if your nomination is enhanced, or on paper if it is a base
            nomination.
          </p>
          <p>
            The <strong>Business</strong> and <strong>Francophone</strong> streams work differently, applying on a
            first-come, first-served basis rather than through EOI draws. On cost, the NTNP application fee is modest
            (reported around $300, verify the current amount), and is separate from the IRCC permanent-residence fees you
            pay at the federal stage. All figures change, so confirm current fees on immigratenwt.ca and canada.ca before
            you apply.
          </p>

          <h2>How long does the NTNP take?</h2>
          <p>
            <strong>How long the NTNP takes</strong> depends on the stage and the stream. On the employer-driven side,
            the wait for an invitation now hinges on your EOI ranking and the draw schedule (draws planned for March, June
            and September 2026). After a complete nomination application is submitted, territorial processing varies.
            Once nominated, an enhanced <strong>NWT Express Entry</strong> application to IRCC is typically processed in
            about <strong>six months</strong>, while a base, paper-based application generally takes longer. Most
            applicants should plan for the better part of a year from job offer to permanent residence, sometimes more.
          </p>

          <h2>How Wild Mountain Immigration helps with the NTNP</h2>
          <p>
            The NTNP rewards preparation. Our team assesses your profile against the territory&apos;s priorities,
            confirms whether your route is enhanced or base, and helps you and your NWT employer put together an EOI and
            nomination application that ranks well and stands up to scrutiny. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), we represent you with
            the territory and with IRCC, and catch the documentation gaps that cause avoidable refusals.</p>
          <p>With only about
            197 nominations available for 2026, that positioning is where good advice earns its keep. Compare the NTNP
            with neighbouring <a href="/pnp/yukon">Yukon (YNP)</a>, our home province&apos;s{" "}
            <a href="/alberta-immigration">Alberta Advantage Immigration Program</a>, or every option on the{" "}
            <a href="/pnp">provincial nominee programs</a> hub.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile and stream", desc: "We review your occupation, TEER level, experience and language to confirm whether Employer-Driven Skilled Worker, Entry-Level/Semi-Skilled, NWT Express Entry, Business or Francophone is your strongest realistic route." },
              { title: "Build a competitive EOI", desc: "On the employer-driven streams we help your NWT employer initiate the Expression of Interest and position your profile to rank well in a draw, since eligibility alone no longer guarantees an invitation." },
              { title: "Nominate and apply for PR", desc: "Once the territory nominates you, we prepare and submit your permanent-residence application to IRCC, through Express Entry for an enhanced nomination or on paper for a base one, and represent you to the finish." },
            ]}
          />
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own{" "}
            <strong>Northwest Territories Nominee Program</strong> application an expert check before you submit, and you
            can <a href="/contact">contact our team</a> for an honest read first.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the NTNP streams</h2>
          <p className="mt-3 text-ink-soft">Each NTNP stream has its own eligibility, draw model and route to permanent residence.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Employer-Driven Skilled Worker" desc="Higher-skilled TEER 0 to 3 roles with a full-time NWT job offer, now selected through ranked EOI draws. A base nomination." href="/pnp/northwest-territories/employer-driven-skilled-worker" />
            <FeatureCard icon={Hammer} title="Entry-Level / Semi-Skilled" desc="Lower-skilled TEER 4 to 5 roles needing 12 months full-time with the same NWT employer. A base nomination." href="/pnp/northwest-territories/entry-level-semi-skilled" />
            <FeatureCard icon={Rocket} title="NWT Express Entry" desc="The enhanced stream for candidates in the federal Express Entry pool with an NWT job offer. A nomination adds 600 CRS." href="/pnp/northwest-territories/express-entry" />
            <FeatureCard icon={Building2} title="Business Stream" desc="For entrepreneurs establishing, buying or investing in an NWT business. No job offer, processed first-come, first-served." href="/pnp/northwest-territories/business" />
            <FeatureCard icon={Languages} title="Francophone Stream" desc="The only all-skill-level pathway (TEER 0 to 5) for French-speaking workers with NWT employment and French plus English." href="/pnp/northwest-territories/francophone" />
            <FeatureCard icon={MapPin} title="Yukon (YNP)" desc="Canada's other northern, employer-driven territorial program. Compare it with the Northwest Territories." href="/pnp/yukon" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if the NTNP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on whether the Northwest Territories Nominee Program, and which stream, is a realistic route to permanent residence."
      />
    </>
  );
}
