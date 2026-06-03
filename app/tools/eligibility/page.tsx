import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import {
  PageHero, Prose, Faq, CtaBand, JsonLd, Callout, KeyTakeaways,
} from "@/components/content/blocks";
import { EligibilityFinder } from "@/components/tools/eligibility-finder";
import { pageMeta, articleLd } from "@/lib/seo";

const PATH = "/tools/eligibility";

export const metadata: Metadata = pageMeta({
  title: "Canada Immigration Eligibility",
  titleAbsolute: "Canada Immigration Eligibility Checker (Free)",
  description:
    "Free Canada immigration eligibility checker. Answer a few questions across PR, work, family, business and study to see the Canadian programs you may qualify for.",
  path: PATH,
  keywords: [
    "canada immigration eligibility",
    "immigration eligibility checker",
    "canada immigration eligibility checker",
    "am i eligible to immigrate to canada",
    "canada pr eligibility",
    "canada work permit eligibility",
  ],
});

const faqs = [
  {
    q: "How does the eligibility checker work?",
    a: "You pick what you'd like to do, immigrate, work, sponsor family, business or study, then answer questions about your age, education, language, work experience and ties to Canada. At the end you add your name and email to see your results: the permanent residence, work, family, business or study programs you may qualify for, including which provinces' nominee programs to explore. It is an AI-assisted guide using current public IRCC criteria, not an official decision.",
  },
  {
    q: "Is this an official Canadian government tool?",
    a: "No. This is a free guidance tool from Wild Mountain Immigration, a CICC-regulated practice. It is not affiliated with IRCC or the Government of Canada, and it does not submit anything or make a decision. Only IRCC can decide your application. A licensed RCIC can confirm your real eligibility before you spend money on tests or fees.",
  },
  {
    q: "Which pathways does it check?",
    a: "All the routes we handle, across five paths. Permanent residence: Express Entry (Canadian Experience Class, Federal Skilled Worker and Federal Skilled Trades), Provincial Nominee Programs including the Alberta Advantage Immigration Program, and the Atlantic and rural pilots. Work: LMIA-based permits, LMIA-exempt transfers and treaty permits (CUSMA, CETA), Francophone Mobility, the PGWP, International Experience Canada and open work permits. Family sponsorship, business immigration (Start-up Visa and provincial entrepreneur streams) and study permits are covered too. It flags PNPs at the province level. It does not cover Quebec-selected programs or refugee, appeal and inadmissibility matters.",
  },
  {
    q: "Do I need to enter my email or pay anything?",
    a: "It is completely free, there is nothing to pay. You do add your name and email at the final step to see your results, so we can send them to you and follow up if you'd like help. We keep your details private and only use them to assist with your enquiry.",
  },
  {
    q: "What should I do with my results?",
    a: "Use them as a starting map of your realistic options. The strongest next step is an expert review: tell us your details and a licensed RCIC will confirm which route is genuinely your best move and outline the steps, costs and timeline before you commit to anything.",
  },
];

export default function EligibilityPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Canada Immigration Eligibility Checker",
            description:
              "Free Canada immigration eligibility checker. Answer a few questions to see which permanent residence and work permit routes may fit you. No email needed.",
            path: PATH,
            dateModified: "2026-05-31",
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Canada Immigration Eligibility Checker",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
            url: "https://wildmountainimmigration.com/tools/eligibility",
          },
        ]}
      />

      <PageHero
        eyebrow="Free Tool"
        crumbs={[{ name: "Tools", path: "/tools" }, { name: "Eligibility Checker", path: PATH }]}
        title={<>Check your Canada immigration <span className="text-brand">eligibility</span></>}
        lede={
          <p>
            Answer a few quick questions and this free <strong>Canada immigration eligibility checker</strong> shows
            you which <strong>permanent residence</strong>, work, family, business and study programs you may qualify
            for, with an honest read on what looks strong. Add your details at the end to see your results.
          </p>
        }
        primaryCta={{ href: "#checker", label: "Start the checker" }}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Estimate your CRS score" }}
      />

      <section id="checker" className="scroll-mt-24 py-12 lg:py-16">
        <Container className="max-w-4xl">
          <EligibilityFinder />
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Prose className="max-w-3xl">
            <KeyTakeaways
              summary="This free Canada immigration eligibility checker matches your profile to the permanent residence, work, family, business and study programs you may qualify for, including which provinces' nominee programs to explore. It weighs your age, education, language, work experience and ties to Canada, then flags which pathways look strong. It is an AI-assisted guide using current IRCC criteria, not an official decision; you add your name and email at the end to see your results."
              items={[
                <>A free <strong>Canada immigration eligibility</strong> tool that maps your profile to real pathways.</>,
                <>The <strong>immigration eligibility checker</strong> covers Express Entry, PNPs, sponsorship, business and study.</>,
                <>It flags which <strong>provinces&apos; nominee programs</strong> may fit, then points you to a consultation.</>,
                <>It is an AI-assisted guide using current <strong>IRCC criteria</strong>; only IRCC can decide your application.</>,
              ]}
            />
            <h2>Who is the Canada immigration eligibility checker for?</h2>
            <p>
              Most people exploring Canadian immigration start with the same question: <em>am I even eligible?</em>{" "}
              There are dozens of programs, and the right one depends on your age, education, language, work experience
              and your ties to Canada. This checker cuts through that by mapping your answers to the routes we actually
              handle, so you can see your realistic options in a couple of minutes instead of reading a dozen guides.
            </p>
            <p>
              It looks at both sides of the journey: the <a href="/immigrate">permanent residence</a> programs that lead
              to staying for good, and the <a href="/work-permits">work permits</a> that often get you to Canada first.
              For many people the smart path is a work permit now and permanent residence later, and the checker is
              built to surface both. If you are simply asking <em>am I eligible to immigrate to Canada</em>, this free
              immigration assessment is the quickest honest answer.
            </p>
            <h2>Check your Canada PR eligibility and work permit eligibility</h2>
            <p>
              Whether you are testing your <strong>Canada PR eligibility</strong> through Express Entry or a PNP, or your{" "}
              <strong>Canada work permit eligibility</strong> for an LMIA-based or open work permit, the checker maps your
              answers to both. For the points-based Express Entry routes it reflects the same factors that drive your{" "}
              <a href="/tools/crs-calculator">CRS score</a>, so you get a realistic sense of where you stand
              before you commit to language tests or fees. Think of it as a fast Canada immigration assessment that
              points you to the routes worth pursuing.
            </p>
            <Callout type="brand" title="A guide, not a guarantee">
              No online tool can confirm your Canada immigration eligibility or approve you, only IRCC can. Treat your
              results as a shortlist to discuss, then let a licensed RCIC confirm the details before you invest in
              language tests, credential assessments or fees.
            </Callout>
          </Prose>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-3xl">
          <Faq items={faqs} />
        </Container>
      </section>

      <CtaBand
        title="Found a route that fits?"
        sub="Get started and a licensed RCIC will confirm your best pathway and map the steps, honestly."
      />
    </>
  );
}
