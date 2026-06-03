import type { Metadata } from "next";
import { Languages } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/northwest-territories/francophone";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Northwest Territories Francophone Stream",
  titleAbsolute: "NTNP Francophone Stream: NWT 2026 Guide",
  description:
    "Northwest Territories Francophone Stream 2026: NTNP francophone eligibility, French language ability and the NWT job offer you need. RCIC-led guide.",
  path: PATH,
  keywords: [
    "Northwest Territories Francophone Stream",
    "NTNP francophone",
    "French-speaking immigration NWT",
    "bilingual workers NWT",
    "NWT francophone immigration",
  ],
});

const faqs = [
  {
    q: "What is the Northwest Territories Francophone Stream?",
    a: "The Francophone Stream is a base (paper) pathway under the Northwest Territories Nominee Program (NTNP) for French-speaking skilled workers who hold a job offer from an NWT employer and intend to settle in the territory. Unlike the employer-driven streams, it is open across all skill levels (NOC TEER 0–5) and is processed first-come, first-served rather than through ranked Expression of Interest draws. A nomination is not permanent residence, you still apply to IRCC afterward. Always confirm current rules on immigratenwt.ca.",
  },
  {
    q: "What French language ability do I need for the NTNP Francophone Stream?",
    a: "You must demonstrate French as your primary language through an approved test (such as the TEF or TCF), and many candidates also show some English ability, the stream is aimed at French-speaking and bilingual workers who will strengthen the NWT's francophone community. The exact minimum levels and accepted tests are set out in the current immigratenwt.ca program guide, which changes periodically, so confirm the live requirement before booking a test.",
  },
  {
    q: "Do I need a job offer for the Francophone Stream?",
    a: "Yes. Like most NTNP streams, the Francophone Stream requires a genuine, full-time job offer from an eligible NWT employer who supports your application. The difference is that the offer can be in any skill level (NOC TEER 0–5), not just higher-skilled roles. Without NWT employment, this stream is not open to you, though a consultation can tell you honestly whether another route fits.",
  },
  {
    q: "Is the Francophone Stream enhanced or base?",
    a: "It is a base nomination. That means a nomination does not add 600 CRS points to a federal Express Entry profile; instead, once the NWT nominates you, you submit a separate paper application to IRCC for permanent residence. If you want the +600 CRS boost, the enhanced route is NWT Express Entry, which has its own job-offer and skill-level requirements. We can confirm which path is realistic for your profile.",
  },
  {
    q: "Does the Francophone Stream use EOI draws?",
    a: "No. The NTNP's employer-driven Skilled Worker and Entry-Level/Semi-Skilled streams moved to points-ranked Expression of Interest (EOI) draws in 2026, but the Francophone Stream, like the Business Stream, remains first-come, first-served. Applications are assessed in the order received against the published criteria, so a complete, well-prepared file submitted early matters.",
  },
  {
    q: "How many nominations does the NWT have for 2026?",
    a: "The Northwest Territories' 2026 nomination allocation is roughly 197, down from about 300 the year before, after IRCC cut provincial and territorial numbers (source: immigratenwt.ca / IRCC, May 2026). The Francophone Stream draws from this same small, shared pool, so spaces are limited and a complete application submitted promptly is important. Allocations can change, so verify the current figure before you act.",
  },
  {
    q: "Does a Francophone Stream nomination guarantee permanent residence?",
    a: "No. A nomination is a territorial endorsement, not permanent residence. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. As a licensed RCIC we build the strongest possible case and flag risks before they become refusals. Wild Mountain is not affiliated with the Government of the Northwest Territories or IRCC.",
  },
];

export default function NwtFrancophoneStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Northwest Territories Francophone Stream, 2026 RCIC Guide",
            description:
              "Northwest Territories Francophone Stream 2026: NTNP francophone eligibility, French language ability and the NWT job offer you need. RCIC-led guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NTNP Francophone Stream application support",
            description:
              "Northwest Territories Francophone Stream 2026: NTNP francophone eligibility, French language ability and the NWT job offer you need. RCIC-led guide.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NTNP, Francophone Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Northwest Territories", path: "/pnp/northwest-territories" },
          { name: "Francophone", path: PATH },
        ]}
        title={<>Northwest Territories <span className="text-brand">Francophone Stream</span></>}
        lede={
          <p>
            The <strong>Northwest Territories Francophone Stream</strong> helps French-speaking skilled workers settle in
            the NWT with a job offer. It is the NTNP&apos;s only all-skill-level route (NOC TEER 0–5) and stays
            first-come, first-served, not an EOI draw.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Languages className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the Francophone Stream right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                French-speaking, with an NWT job offer? Get an honest read from a licensed RCIC on whether this base
                stream fits your profile.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Northwest Territories (NTNP)", href: "/pnp/northwest-territories", note: "Every NWT stream explained" },
                { label: "Employer-Driven Skilled Worker", href: "/pnp/northwest-territories/employer-driven-skilled-worker", note: "TEER 0–3 EOI-draw route" },
                { label: "NWT Express Entry", href: "/pnp/northwest-territories/express-entry", note: "The enhanced +600 CRS route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province & territory" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Northwest Territories Francophone Stream is a base NTNP route for French-speaking skilled workers settling in the NWT with a job offer. It is the program's only all-skill-level pathway, open across NOC TEER 0 to 5, and requires French language ability (with some English typically expected) plus a full-time job offer from an eligible NWT employer. Because it is base, it adds no CRS points: a nomination leads to a separate paper application to IRCC for permanent residence."
            items={[
              <>The <strong>Northwest Territories Francophone Stream</strong> is a base NTNP route for French-speaking skilled workers settling in the NWT with a job offer.</>,
              <>It is the program&apos;s <strong>only all-skill-level pathway</strong>, eligible across NOC TEER 0–5, not just higher-skilled roles.</>,
              <>You need <strong>French language ability</strong> (with some English typically expected) and a full-time job offer from an eligible <strong>NWT employer</strong>.</>,
              <>It is <strong>base, not enhanced</strong>: no 600 CRS points, a nomination leads to a separate IRCC paper application.</>,
              <>Unlike the employer-driven streams, it stays <strong>first-come, first-served</strong> rather than using ranked EOI draws.</>,
            ]}
          />

          <h2>What is the Northwest Territories Francophone Stream?</h2>
          <p>
            The <strong>Northwest Territories Francophone Stream</strong> is a base pathway under the Northwest Territories
            Nominee Program (NTNP) designed to support <strong>French-speaking skilled workers</strong> who want to settle
            in the territory and who hold a job offer from an NWT employer. It exists to grow the NWT&apos;s francophone
            community and economy, and it is the program&apos;s most flexible route on skill level, open across all
            occupations from NOC TEER 0 to TEER 5. The territory&apos;s 2026 nomination allocation is just about{" "}
            <strong>197</strong>, down from roughly 300 the previous year, after IRCC cut provincial and territorial
            numbers nationwide (source: immigratenwt.ca / IRCC, May 2026). Because the Francophone Stream draws from that
            same small, shared pool, a complete application submitted early matters.
          </p>
          <p>
            As with every nominee program, a nomination is a strong recommendation, not permanent residence in itself.
            Once the Government of the Northwest Territories nominates you, you still apply separately to IRCC for PR. The
            defining features of <strong>NTNP francophone</strong> immigration are its focus on{" "}
            <strong>French-speaking and bilingual workers</strong>, its all-skill-level reach, and the fact that it stays
            first-come, first-served while the employer-driven streams moved to ranked draws. Figures and rules change
            often, so always verify the current position on immigratenwt.ca before acting.
          </p>

          <h2>Who is the Francophone Stream for?</h2>
          <p>
            This stream is aimed squarely at <strong>French-speaking immigration to the NWT</strong>: candidates whose
            <strong> primary language is French</strong> and who will help strengthen the territory&apos;s
            francophone community. It sits within the wider push for{" "}
            <strong>francophone immigration to Canada</strong> outside Quebec, which the federal government supports
            through targeted programs (the temporary-residence Mobilité francophone work-permit category is a separate
            federal example, for context only, not part of the NTNP). Many successful applicants are{" "}
            <strong>bilingual workers</strong> who bring both French and some English, which broadens the roles open to
            them and supports settlement in a predominantly English-speaking territory. Crucially, because the stream
            spans NOC TEER 0–5, it can fit candidates in higher-skilled, technical, intermediate and entry-level
            occupations alike, provided the job offer and language requirements are met.
          </p>
          <Callout type="brand" title="The NTNP's only all-skill-level route">
            Where the <strong>Employer-Driven Skilled Worker</strong> stream covers higher-skilled (TEER 0–3) jobs and{" "}
            <strong>Entry-Level/Semi-Skilled</strong> covers TEER 4–5, the Francophone Stream uniquely accepts the full
            range, NOC TEER 0–5. For a French-speaking candidate in an intermediate or entry-level role, it is often the
            most realistic NTNP option.
          </Callout>

          <h2>What are the Francophone Stream eligibility requirements?</h2>
          <p>
            <strong>NTNP francophone</strong> eligibility rests on three connected pillars: French language ability, a
            genuine NWT job offer, and qualifying work experience and intent to settle. The table below summarises the
            core requirements; the official, controlling list lives on immigratenwt.ca and changes periodically, so treat
            this as a starting point for a profile review rather than the final word.
          </p>
          <DataTable
            headers={["Requirement", "What the Francophone Stream asks for"]}
            rows={[
              ["French language", "French as your primary language, proven by an approved test (e.g. TEF / TCF); some English ability is commonly expected of bilingual applicants"],
              ["NWT job offer", "A genuine, full-time job offer from an eligible NWT employer who supports your application, any skill level (NOC TEER 0–5)"],
              ["Work experience", "Relevant, qualifying work experience that matches your offered occupation, per the current program guide"],
              ["Skill level", "Open across NOC TEER 0–5, the NTNP's only all-skill-level stream"],
              ["Settlement intent", "Genuine intention to live and work in the Northwest Territories, and to settle in the territory"],
              ["Admissibility", "Meet IRCC admissibility (medical, security, criminality) at the federal permanent-residence stage"],
            ]}
            caption="NTNP Francophone Stream core eligibility, accurate as of May 2026 (immigratenwt.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="French is the entry point, not the only test">
            Proving French ability opens the door, but the stream still requires a real NWT job offer and qualifying
            experience. Lining up an eligible employer is usually the hardest part, so confirm your offer and occupation
            against the current program guide before you invest in language testing.
          </Callout>

          <h2>How is the Francophone Stream different from the other NTNP streams?</h2>
          <p>
            The simplest way to place the Francophone Stream is to compare it with the routes most candidates also
            consider. The <strong>Employer-Driven Skilled Worker</strong> stream now runs through ranked EOI draws and
            covers only TEER 0–3, while <strong>NWT Express Entry</strong> is the enhanced route that adds 600 CRS points.
            The Francophone Stream, by contrast, is base, all-skill-level, and first-come, first-served.
          </p>
          <DataTable
            headers={["Feature", "Francophone Stream", "Employer-Driven Skilled Worker", "NWT Express Entry"]}
            rows={[
              ["Stream type", "Base", "Base", "Enhanced (+600 CRS)"],
              ["Skill level", "NOC TEER 0–5", "NOC TEER 0–3", "Generally TEER 0–3"],
              ["Selection", "First-come, first-served", "Ranked EOI draws", "Express Entry pool + ITA"],
              ["Language focus", "French (often bilingual)", "Per program guide", "Per Express Entry minimums"],
              ["NWT job offer", "Required", "Required", "Required"],
            ]}
            caption="NTNP Francophone Stream vs employer-driven and Express Entry routes (immigratenwt.ca, May 2026). Eligibility does not guarantee a nomination; figures change."
          />

          <h2>How do you apply to the Francophone Stream?</h2>
          <p>
            <strong>How to apply</strong> to the Francophone Stream follows a clear sequence, and because it is
            first-come, first-served, completeness and timing both count. First, secure a genuine full-time job offer
            from an eligible NWT employer who will support your application. Next, prove your French ability with an
            approved test and gather your work-experience and identity documents. Then submit a complete nomination
            application to the NTNP against the current program guide. If the territory nominates you, you apply
            separately to <strong>IRCC</strong> for permanent residence on a paper application. Because this is a base
            nomination, there is no CRS boost at the federal stage.
          </p>
          <p>
            Because the Francophone Stream does not use EOI draws, there is no ranking cut-off to clear, but the small
            2026 allocation of about 197 nominations is shared across all NTNP streams, so a complete, well-documented
            file submitted promptly is your best advantage. On cost, the NTNP application fee is modest (reported around
            $300, verify the current amount), and is separate from the IRCC permanent-residence fees you pay at the
            federal stage. All figures change, so confirm current fees on immigratenwt.ca and canada.ca before you apply.
          </p>
          <Callout type="warning" title="First-come, first-served, but the pool is tiny">
            With roughly 197 nominations for all of 2026 shared across every NTNP stream, &ldquo;first-come,
            first-served&rdquo; does not mean unlimited. A complete, accurate application submitted early gives you the
            best chance, and a missing document can cost you weeks. We help make sure your file is right the first time.
          </Callout>

          <h2>How long does the Francophone Stream take?</h2>
          <p>
            <strong>How long the Francophone Stream takes</strong> depends on the stage. Territorial processing of a
            complete nomination application varies and is not guaranteed to a fixed timeline. After a nomination, the
            federal stage is a separate paper application to IRCC: base PNP nominations generally take longer than the
            roughly six months IRCC targets for enhanced (Express Entry) PNP applications (source: canada.ca, processing
            times, 2026). Most applicants should plan for the better part of a year from job offer to permanent residence,
            sometimes more. Verify current times on immigratenwt.ca and canada.ca before you rely on any estimate.
          </p>

          <h2>How Wild Mountain Immigration helps with the Francophone Stream</h2>
          <p>
            The Francophone Stream rewards preparation over speed alone. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team assesses your
            profile against the territory&apos;s francophone criteria within the wider{" "}
            <a href="/pnp/northwest-territories">Northwest Territories Nominee Program</a>, confirms your French testing
            and job offer line up with the current program guide, and prepares a nomination and federal application that
            stand up to scrutiny. If a French-speaking applicant already holds an{" "}
            <a href="/express-entry">Express Entry</a> profile, we compare this route with the enhanced{" "}
            <a href="/pnp/northwest-territories/express-entry">NWT Express Entry</a> stream, or the base{" "}
            <a href="/pnp/northwest-territories/employer-driven-skilled-worker">Employer-Driven Skilled Worker</a>{" "}
            stream. We catch the documentation gaps, a language result that does not meet the bar, an occupation that
            does not match the offer, that cause avoidable refusals. With only about 197 nominations available for 2026,
            that positioning is where good advice earns its keep.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own{" "}
            <strong>Northwest Territories Francophone Stream</strong> application an expert check before you submit, and
            you can <a href="/contact">contact our team</a> first. Wild Mountain Immigration is a private practice and is
            not affiliated with the Government of the Northwest Territories or IRCC.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Is the NTNP Francophone Stream your route?"
        sub="Get started with a licensed RCIC for an honest read on whether the Northwest Territories Francophone Stream, and your French and job-offer profile, is a realistic path to permanent residence."
      />
    </>
  );
}
