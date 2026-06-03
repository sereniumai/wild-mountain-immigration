import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero, Prose, DataTable, Faq, CtaBand, JsonLd, Callout, KeyTakeaways } from "@/components/content/blocks";
import { AaipCalculator } from "@/components/tools/aaip-calculator";
import { pageMeta, articleLd } from "@/lib/seo";

const PATH = "/tools/aaip-calculator";

export const metadata: Metadata = pageMeta({
  title: "AAIP Calculator 2026",
  titleAbsolute: "Alberta PNP Points Calculator 2026: AAIP EOI Score Tool",
  description:
    "Free Alberta PNP points calculator (AAIP) for the Worker Expression of Interest. Estimate your EOI score out of 100 on the 2026 grid. No email required.",
  path: PATH,
  keywords: ["aaip calculator", "alberta pnp points calculator", "aaip points calculator", "alberta eoi score calculator", "aaip expression of interest", "alberta pnp points"],
});

const faqs = [
  {
    q: "What is an AAIP calculator?",
    a: "An AAIP calculator is a free tool that estimates your Alberta Advantage Immigration Program (AAIP) Worker Expression of Interest score out of 100. You enter your education, language results, work experience, age, Alberta connections and job offer, and it returns an estimated EOI score so you can see where you stand against recent AAIP draw cut-offs before you submit. This AAIP calculator is ungated, with no email required.",
  },
  {
    q: "How is the AAIP Expression of Interest scored?",
    a: "The Alberta Advantage Immigration Program scores your Worker Expression of Interest out of 100: up to 69 points for human capital (education, language, work experience, age and Alberta family) and up to 31 points for economic factors tied to an Alberta job offer. The highest EOI scores are invited in periodic draws.",
  },
  {
    q: "What EOI score do I need for the AAIP in 2026?",
    a: "Cut-offs vary by stream and draw. In 2026, the Alberta Opportunity Stream has invited scores around 54–57, Rural Renewal around 46–50, and the Accelerated Tech pathway up to about 63. A score of 60 or more is competitive across most pathways, but a targeted draw can invite lower.",
  },
  {
    q: "Does the AAIP Express Entry Stream need a separate score?",
    a: "Yes. The Alberta Express Entry Stream requires two things: a competitive Worker EOI score and an active federal Express Entry profile with a CRS of at least 300. They are separate scores, this calculator estimates the EOI, not your CRS. Use our CRS calculator for the federal score.",
  },
  {
    q: "Do I need a job offer for the AAIP?",
    a: "Most AAIP worker pathways are built around a genuine, permanent, full-time Alberta job offer, which is worth up to 10 EOI points plus location and sector bonuses. A few pathways (such as the Alberta Express Entry Stream) can work without one, but a job offer significantly strengthens almost every application.",
  },
  {
    q: "How much does the AAIP cost in 2026?",
    a: "Alberta charges a Worker EOI submission fee (recently set at $135) plus a $1,500 non-refundable AAIP application fee once you are invited. These are provincial fees, separate from the federal permanent-residence fees you pay to IRCC. Always confirm current amounts on alberta.ca before you apply.",
  },
];

export default function AaipCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({ headline: "AAIP Calculator 2026, Alberta Worker EOI Score Estimator", description: "Free AAIP calculator for Alberta's Worker Expression of Interest. Estimate your AAIP EOI score out of 100 on the 2026 grid. No email required.", path: PATH, dateModified: "2026-05-31" }),
          { "@context": "https://schema.org", "@type": "WebApplication", name: "AAIP Calculator 2026", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" }, url: "https://wildmountainimmigration.com/tools/aaip-calculator" },
        ]}
      />

      <PageHero
        eyebrow="Free Tool"
        crumbs={[{ name: "Tools", path: "/tools" }, { name: "AAIP Calculator", path: PATH }]}
        title={<>AAIP calculator: Alberta PNP points <span className="text-brand">2026</span></>}
        lede={
          <p>
            This free <strong>AAIP calculator</strong>, also known as an{" "}
            <strong>Alberta PNP points calculator</strong>, estimates your Alberta Worker Expression of Interest (EOI)
            score out of 100 using Alberta&apos;s official points grid. Alberta is our home province, so see where you
            stand for the AAIP&apos;s 2026 draws in about two minutes. No email, no sign-up.
          </p>
        }
        primaryCta={{ href: "#calculator", label: "Start calculating" }}
        secondaryCta={{ href: "/alberta-immigration", label: "Read the Alberta (AAIP) guide" }}
      />

      <section id="calculator" className="scroll-mt-24 py-12 lg:py-16">
        <Container><AaipCalculator /></Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Prose className="max-w-3xl">
            <KeyTakeaways
              summary="An Alberta PNP points calculator (the AAIP calculator) estimates your Alberta Advantage Immigration Program Worker Expression of Interest score out of 100 using Alberta's official points grid. It scores your education, language, work experience, age, Alberta connections and job offer in about two minutes. You can then compare your result with recent 2026 Alberta EOI draw cut-offs before you submit."
              items={[
                <>An <strong>AAIP calculator</strong> estimates your Alberta Worker EOI score out of <strong>100</strong> points.</>,
                <>This <strong>AAIP calculator</strong> is free and ungated, with no email or sign-up required.</>,
                <>The score splits into <strong>human capital (max 69)</strong> and <strong>economic factors (max 31)</strong>.</>,
                <>Compare your result with recent <strong>2026 AAIP draw cut-offs</strong> before you submit your EOI.</>,
              ]}
            />
            <h2>Alberta PNP points calculator: estimate your AAIP Worker EOI score</h2>
            <p>
              The Alberta Advantage Immigration Program (AAIP) uses a <strong>Worker Expression of Interest</strong>{" "}
              system. You submit a profile, Alberta scores it out of 100, and the province invites the strongest scores
              in periodic draws across its pathways. Your score is the sum of human-capital points (up to 69) and
              economic-factor points tied to an Alberta job offer (up to 31). This Alberta PNP points calculator mirrors
              that grid, and points for work experience reflect your occupation&apos;s <strong>NOC TEER</strong>{" "}
              category, so the closer your inputs match your real profile, the more accurate your EOI Alberta estimate.
            </p>
            <h2>Recent 2026 Alberta EOI draw cut-offs</h2>
            <p>
              Cut-off scores depend heavily on the pathway and Alberta&apos;s monthly allocation, so the score from any
              Alberta PNP points calculator is only a guide until the next Alberta EOI draw. The table below shows the
              rough shape of recent 2026 rounds, including the Rural Renewal route that needs a designated community
              endorsement and the Dedicated Health Care pathway for eligible care occupations; confirm the latest on
              alberta.ca/aaip-processing-information before relying on any figure.
            </p>
            <DataTable
              headers={["Pathway (2026)", "Recent minimum EOI", "Notes"]}
              rows={[
                ["Alberta Opportunity Stream", "~54–57", "Largest stream by invitations"],
                ["Rural Renewal", "~46–50", "Needs a designated-community endorsement"],
                ["Dedicated Health Care", "~57–61", "Eligible care occupations"],
                ["Accelerated Tech", "~63", "Tech roles via Express Entry"],
                ["Priority Sectors (trades)", "~60", "Construction and trades focus"],
              ]}
              caption="Illustrative 2026 AAIP cut-offs (alberta.ca), figures change every draw."
            />
            <Callout type="brand" title="The AAIP Express Entry Stream needs two scores">
              You need a competitive Worker EOI <em>and</em> a federal Express Entry profile with a CRS of at least 300.
              A provincial nomination then adds 600 CRS points. Run this Alberta PNP points calculator first to gauge
              your AAIP EOI, then use our <a href="/tools/crs-calculator">CRS calculator</a> for the federal side.
            </Callout>
          </Prose>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-3xl"><Faq items={faqs} /></Container>
      </section>

      <CtaBand
        title="Alberta is our home turf"
        sub="Get started and we'll map the AAIP pathway that fits your score, job offer and goals."
      />
    </>
  );
}
