import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/northwest-territories/employer-driven-skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Northwest Territories Skilled Worker (NTNP)",
  titleAbsolute: "NTNP Skilled Worker: NWT Immigration 2026",
  description:
    "Northwest Territories Skilled Worker stream: NTNP employer-driven eligibility, NWT job offer for PR, experience, language and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Northwest Territories Skilled Worker",
    "NTNP employer-driven",
    "NWT job offer PR",
    "skilled worker NWT",
    "NTNP Skilled Worker stream",
  ],
});

const faqs = [
  {
    q: "What is the NTNP Employer-Driven Skilled Worker stream?",
    a: "It is the Northwest Territories Nominee Program's pathway for higher-skilled foreign workers (generally NOC TEER 0–3) who hold a permanent, full-time job offer from an eligible NWT employer. It is employer-driven: your employer initiates the application and supports your file. A nomination is not permanent residence on its own. Once nominated, you apply separately to IRCC for PR. Always confirm current rules on immigratenwt.ca, as figures and streams change.",
  },
  {
    q: "Do I need a job offer to apply as a Skilled Worker in the NWT?",
    a: "Yes. A permanent, full-time job offer from an eligible Northwest Territories employer is the foundation of this stream. Without it, you cannot apply. The offer must generally be in a higher-skilled (TEER 0–3) occupation, and the employer, not the candidate, initiates the application. We can tell you honestly whether your offer and profile fit the stream before you commit time and fees.",
  },
  {
    q: "Is the NTNP Skilled Worker stream a base or enhanced nomination?",
    a: "It is a base (paper) nomination. Once the Northwest Territories nominates you, you submit a separate permanent-residence application directly to IRCC, with no 600-CRS boost. If you already hold an active Express Entry profile and an eligible NWT job offer, the enhanced NWT Express Entry stream may be faster, because a nomination there adds 600 CRS points. We help you choose the right route.",
  },
  {
    q: "How does the employer-driven EOI draw work for skilled workers?",
    a: "As of 2026, the employer-driven side of the NTNP moved to a points-ranked Expression of Interest (EOI) model. Your NWT employer submits an EOI on your behalf, the territory ranks profiles against its grid, and invitations are issued to the highest-ranked candidates in periodic draws. The first 2026 draw (March 25) invited 65 candidates, with further draws planned for June 25 and September 25 of up to 65 each. Because it is competitive, meeting the basic eligibility no longer guarantees an invitation.",
  },
  {
    q: "What experience and language do I need?",
    a: "Requirements are detailed and set by the territory, but in broad terms you need relevant work experience matching your offered TEER 0–3 occupation, an approved English or French language test result, and education appropriate to the role (foreign credentials usually need an Educational Credential Assessment). Exact bands and minimums are published on immigratenwt.ca and change periodically, so the safest step is a profile review against the current program guide.",
  },
  {
    q: "How many nominations does the NWT have for 2026?",
    a: "The Northwest Territories' 2026 nomination allocation is roughly 197, down from about 300 the year before, reflecting federal cuts to provincial and territorial nominee numbers (source: immigratenwt.ca / IRCC, May 2026). With one of the smallest allocations in Canada, the NTNP is highly limited, so a well-positioned, employer-supported profile matters more than ever. Allocations can change, so verify the current figure before you act.",
  },
  {
    q: "How long does the NTNP Skilled Worker stream take and what does it cost?",
    a: "There are two stages. First the territorial nomination, where the wait for an invitation now depends on your EOI ranking and the draw schedule (March, June and September 2026); the NTNP application fee is modest (reported around $300, verify the current amount). Then the permanent-residence application to IRCC, which carries separate federal fees and, as a base nomination, generally takes longer than the enhanced Express Entry route. Confirm fees and timelines on immigratenwt.ca and canada.ca before applying.",
  },
];

export default function NwtSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Northwest Territories Skilled Worker, NTNP Employer-Driven Guide (2026)",
            description:
              "Northwest Territories Skilled Worker stream: NTNP employer-driven eligibility, NWT job offer for PR, experience, language and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NTNP Employer-Driven Skilled Worker application support",
            description:
              "Northwest Territories Skilled Worker stream: NTNP employer-driven eligibility, NWT job offer for PR, experience, language and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NTNP, Employer-Driven Skilled Worker"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Northwest Territories", path: "/pnp/northwest-territories" },
          { name: "Employer-Driven Skilled Worker", path: PATH },
        ]}
        title={<>Northwest Territories <span className="text-brand">Skilled Worker</span></>}
        lede={
          <p>
            The <strong>Northwest Territories Skilled Worker</strong> stream is the NTNP&apos;s employer-driven route to
            permanent residence for higher-skilled workers with a permanent NWT job offer. This RCIC-led guide covers
            eligibility, the 2026 EOI draws and how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Briefcase className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have an NWT job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With only ~197 nominations for 2026 and ranked EOI draws, strategy matters. Get an honest read from a
                licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Northwest Territories (NTNP)", href: "/pnp/northwest-territories", note: "All NWT streams explained" },
                { label: "Entry-Level / Semi-Skilled", href: "/pnp/northwest-territories/entry-level-semi-skilled", note: "TEER 4–5 NWT roles" },
                { label: "NWT Express Entry", href: "/pnp/northwest-territories/express-entry", note: "The enhanced +600 CRS route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Northwest Territories Skilled Worker stream (NTNP employer-driven) is for higher-skilled workers, generally NOC TEER 0 to 3, with a permanent, full-time job offer letter from an eligible employer. Your employer initiates the application via a points-ranked Expression of Interest, so you cannot self-apply. It is a base nomination with no CRS boost, leading to a separate IRCC application for permanent residence."
            items={[
              <>The <strong>NTNP Employer-Driven Skilled Worker</strong> stream is for higher-skilled workers (generally TEER 0–3) with a permanent, full-time NWT job offer.</>,
              <>It is <strong>employer-driven</strong>: your NWT employer initiates the application, you cannot self-apply.</>,
              <>It is a <strong>base (paper) nomination</strong>, no 600-CRS boost; you apply separately to IRCC for PR after nomination.</>,
              <>The employer-driven side now uses <strong>points-ranked EOI draws</strong> (new in 2026), so eligibility alone does not guarantee an invitation.</>,
              <>For 2026, the NWT allocation fell to roughly <strong>197 nominations</strong> (down from ~300), one of the smallest in Canada.</>,
            ]}
          />

          <h2>What is the NTNP Employer-Driven Skilled Worker stream?</h2>
          <p>
            The <strong>Northwest Territories Skilled Worker</strong> stream is the NTNP&apos;s core{" "}
            <strong>employer-driven</strong> pathway for higher-skilled foreign workers who have a permanent, full-time
            job offer from an eligible NWT employer, typically in a higher-skilled occupation (NOC TEER 0–3). The
            defining feature is in the name: this is an <strong>NWT job offer PR</strong> route, where the employer, not
            the candidate, initiates the application and supports the file. As with every nominee program, a nomination
            is a strong recommendation, not permanent residence in itself. Once nominated, you apply to IRCC for PR on a
            separate application.
          </p>
          <p>
            The territory&apos;s 2026 nomination allocation is about <strong>197</strong>, down from roughly 300 the
            previous year, after IRCC cut provincial and territorial allocations nationwide (source: immigratenwt.ca /
            IRCC, May 2026). That makes the NTNP one of the smallest programs in the country, so meeting the basic
            eligibility is no longer the same as receiving an invitation. Figures and rules change frequently, so always
            verify the current position on immigratenwt.ca before acting.
          </p>
          <Callout type="brand" title="Base nomination, no CRS boost">
            The <strong>Skilled Worker NWT</strong> stream is a base, paper nomination: after the territory nominates
            you, you submit a separate permanent-residence application to IRCC, with no 600-CRS boost. If you already hold
            an active Express Entry profile and an eligible NWT job offer, the{" "}
            <a href="/pnp/northwest-territories/express-entry">NWT Express Entry</a> stream may be the faster route, a
            nomination there adds <strong>600 CRS points</strong>.
          </Callout>

          <h2>Who is the Skilled Worker stream for?</h2>
          <p>
            This stream is built for skilled workers with a genuine, permanent <strong>NWT job offer</strong> in a
            higher-skilled occupation. It sits alongside two related routes within the NTNP, and choosing correctly is
            the first thing that matters. The table below shows where the Skilled Worker stream fits.
          </p>
          <DataTable
            headers={["Route", "Who it's for", "Type"]}
            rows={[
              [
                "Employer-Driven Skilled Worker",
                "Higher-skilled workers (TEER 0–3) with a permanent NWT job offer; employer initiates via EOI",
                "Base",
              ],
              [
                <a key="el" href="/pnp/northwest-territories/entry-level-semi-skilled">Entry-Level / Semi-Skilled</a>,
                "Lower-skilled (TEER 4–5) roles; 12 months full-time with the same NWT employer required",
                "Base",
              ],
              [
                <a key="ee" href="/pnp/northwest-territories/express-entry">NWT Express Entry</a>,
                "Express Entry candidates with an eligible NWT job offer (generally TEER 0–3)",
                "Enhanced (+600 CRS)",
              ],
            ]}
            caption="NTNP employer-supported routes (immigratenwt.ca, 2026). Eligibility does not guarantee an invitation; figures change."
          />

          <h2>What are the eligibility requirements?</h2>
          <p>
            <strong>NTNP employer-driven</strong> Skilled Worker eligibility rests on a connected set of requirements,
            and your NWT employer must also qualify and support the application. The published, controlling criteria live
            on immigratenwt.ca and are updated periodically, the summary below captures the core requirements as of May
            2026.
          </p>
          <DataTable
            headers={["Requirement", "What the Skilled Worker stream asks for"]}
            rows={[
              ["NWT job offer", "A permanent, full-time job offer letter from an eligible NWT employer, generally in a higher-skilled (TEER 0–3) occupation under the correct NOC code"],
              ["Employer support", "The employer must qualify and initiate the Expression of Interest, candidates cannot self-apply; a nominee job offer is LMIA-exempt for the work permit stage"],
              ["Work experience", "Relevant work experience that matches the offered occupation and skill level"],
              ["Language", "An approved English or French test result meeting the program's minimum for your occupation"],
              ["Education", "Education appropriate to the role; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Settlement & intent", "Genuine intention to live and work in the Northwest Territories, plus settlement funds and evidence you can establish in Yellowknife or another NWT community"],
            ]}
            caption="NTNP Employer-Driven Skilled Worker core eligibility, accurate as of May 2026 (immigratenwt.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Your employer has to qualify too">
            Because this is an <strong>employer-driven</strong> stream, the NWT employer must meet the territory&apos;s
            own conditions and commit to the process. A weak or non-compliant employer file can sink an otherwise strong
            candidate, which is why we review both sides before any EOI is submitted.
          </Callout>

          <h2>How does the employer-driven EOI draw model work?</h2>
          <p>
            A major 2026 change reshaped the <strong>NWT employer-driven</strong> side. Rather than a simple first-come
            process, the Skilled Worker pathway now uses a points-ranked{" "}
            <strong>Expression of Interest (EOI)</strong> model. Your eligible employer submits an EOI on your behalf,
            the territory ranks profiles against its grid, and invitations are issued to the highest-ranked candidates in
            periodic draws.
          </p>
          <p>
            The 2026 draw schedule reflects how limited the program is. The first draw on{" "}
            <strong>March 25, 2026</strong> invited <strong>65 candidates</strong>, with further draws planned for{" "}
            <strong>June 25</strong> and <strong>September 25</strong> of up to 65 invitations each (source:
            immigratenwt.ca, May 2026). Because the stream is now competitive, simply meeting the eligibility criteria
            does not mean you will be invited. Your ranking, and the strength of your employer support, decide the
            outcome.
          </p>
          <DataTable
            headers={["2026 draw", "Status", "Invitations (up to)"]}
            rows={[
              ["March 25, 2026", "Completed", "65"],
              ["June 25, 2026", "Planned", "65"],
              ["September 25, 2026", "Planned", "65"],
            ]}
            caption="NTNP employer-driven EOI draw schedule for 2026 (immigratenwt.ca, May 2026). Dates and numbers change, verify before relying on them."
          />
          <Callout type="warning" title="Eligibility is not an invitation">
            With roughly 197 nominations for all of 2026 and ranked EOI draws of up to 65 candidates each, qualifying for
            the Skilled Worker stream does not mean you will be invited. The employer initiates the application, you
            cannot self-apply, so genuine NWT employer support is the foundation of any realistic plan. We give you a
            candid read before you invest time and fees.
          </Callout>

          <h2>How do you apply to the NTNP Skilled Worker stream?</h2>
          <p>
            <strong>How to apply</strong> for the Skilled Worker stream follows an employer-led sequence. First, you
            secure a genuine, permanent full-time job offer from an eligible NWT employer. The{" "}
            <strong>employer</strong> then submits an Expression of Interest on your behalf, candidates cannot
            self-apply. If your ranked EOI earns an invitation in a draw, a complete nomination application is submitted
            with supporting documents. Once the territory nominates you, you apply to <strong>IRCC</strong> for permanent
            residence on a separate, base (paper) application.
          </p>
          <p>
            On cost, the NTNP application fee is modest (reported around $300, verify the current amount), and is
            separate from the IRCC permanent-residence fees you pay at the federal stage. All figures change, so confirm
            current fees on immigratenwt.ca and canada.ca before you apply. Not sure where your federal score stands if
            you later pivot to Express Entry? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>How long does the NTNP Skilled Worker stream take?</h2>
          <p>
            <strong>How long it takes</strong> depends on the stage. On the employer-driven side, the wait for an
            invitation now hinges on your EOI ranking and the draw schedule (draws planned for March, June and September
            2026). After a complete nomination application is submitted, territorial processing varies. Once nominated,
            the federal stage is a separate base, paper-based PR application to IRCC, which generally takes longer than
            the enhanced Express Entry route. Most applicants should plan for the better part of a year, sometimes more,
            from job offer to permanent residence.
          </p>

          <h2>How Wild Mountain Immigration helps with the Skilled Worker stream</h2>
          <p>
            The NTNP rewards preparation. Our team assesses your profile against the wider{" "}
            <a href="/pnp/northwest-territories">Northwest Territories Nominee Program</a> priorities, confirms whether
            the base Skilled Worker stream or enhanced{" "}
            <a href="/pnp/northwest-territories/express-entry">NWT Express Entry</a> is the better route, and helps you
            and your NWT employer put together an EOI and nomination application that ranks well and stands up to
            scrutiny. If you are in Canada on a <a href="/work-permits">work permit</a> we factor that in, and we weigh
            your federal <a href="/express-entry">Express Entry</a> standing alongside the territorial route. Working
            under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), we
            represent you with the territory and with IRCC, and catch the documentation gaps that cause avoidable
            refusals. With only about 197 nominations available for 2026, that positioning is where good advice earns
            its keep.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own
            Northwest Territories Skilled Worker application an expert check before you submit, and you can{" "}
            <a href="/contact">contact our team</a> first.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have an NWT job offer? Let's check your fit"
        sub="Get started with a licensed RCIC for an honest read on whether the NTNP Employer-Driven Skilled Worker stream is a realistic route to permanent residence."
      />
    </>
  );
}
