import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, Mountain, Compass, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  PageHero, Section, FeatureGrid, FeatureCard, Faq, CtaBand, JsonLd, Prose, KeyTakeaways,
} from "@/components/content/blocks";
import { pageMeta, articleLd } from "@/lib/seo";

const PATH = "/tools";

export const metadata: Metadata = pageMeta({
  title: "Canada Immigration Tools",
  titleAbsolute: "Canada Immigration Tools: Free Calculators & Checker",
  description:
    "Free Canada immigration tools from a licensed RCIC: check the pathways you qualify for and estimate your CRS and AAIP scores. Start now.",
  path: PATH,
  keywords: ["canada immigration tools", "free immigration tools", "canadian immigration calculator", "canada eligibility checker", "crs calculator", "aaip points calculator"],
});

const faqs = [
  {
    q: "Are these immigration tools free?",
    a: "Yes. The eligibility checker, the CRS calculator and the AAIP points calculator are all completely free to use. They give you an instant read so you can decide on your next step with confidence.",
  },
  {
    q: "How accurate are the calculators?",
    a: "They use the current official points grids from IRCC and the Government of Alberta, so they give a close estimate for most profiles. They are not official tools, your real score is calculated by IRCC or the AAIP from your documents, but they are an excellent starting point.",
  },
  {
    q: "Which calculator should I use?",
    a: "Use the CRS calculator to estimate your federal Express Entry score, and the AAIP calculator to estimate your Alberta Worker Expression of Interest score. If you are pursuing the Alberta Express Entry Stream, you will want both, since that pathway needs a competitive EOI and a CRS of at least 300.",
  },
];

export default function ToolsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({ headline: "Free Canada Immigration Tools & Calculators", description: "Free Canada immigration tools from a licensed RCIC: check which pathways you qualify for and estimate your Express Entry CRS score and Alberta AAIP points.", path: PATH, dateModified: "2026-05-31" }),
        ]}
      />

      <PageHero
        eyebrow="Free Tools"
        crumbs={[{ name: "Tools", path: PATH }]}
        title={<>Free Canada immigration <span className="text-brand">tools</span></>}
        lede={
          <p>
            Our free <strong>Canada immigration tools</strong> help you see which pathways you qualify for and
            estimate your Express Entry CRS and Alberta AAIP scores in minutes, using current official criteria. This
            free <strong>Canada immigration calculator</strong> suite, along with live processing times, lives in one
            place, so you can know where you stand before you spend a dollar.
          </p>
        }
        primaryCta={{ href: "/tools/eligibility", label: "Eligibility Checker" }}
        secondaryCta={{ href: "/tools/crs-calculator", label: "CRS Calculator" }}
      />

      {/* Featured: eligibility checker */}
      <section className="pt-14 lg:pt-16">
        <Container>
          <Link
            href="/tools/eligibility"
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[1.75rem] border border-brand/15 bg-blush p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] sm:flex-row sm:items-center sm:p-9"
          >
            <div className="absolute -right-10 -top-10 size-44 rounded-full bg-brand/10 blur-3xl" aria-hidden />
            <span className="relative flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white text-brand ring-1 ring-brand/15">
              <Compass className="size-8" strokeWidth={1.6} />
            </span>
            <div className="relative flex-1">
              <span className="inline-block rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold text-white">Start here</span>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink">Start with our free Canada immigration tools</h2>
              <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                Not sure where to begin? Answer a few questions and see which permanent residence and work permit
                pathways may fit you, with an honest read on what looks strong.
              </p>
            </div>
            <span className="relative inline-flex items-center gap-1.5 self-start rounded-xl bg-gradient-to-b from-[#ee100c] to-brand px-5 py-3 font-heading text-[15px] font-medium text-white shadow-[var(--shadow-brand)] ring-1 ring-inset ring-white/15 sm:self-center">
              Check eligibility <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Prose className="max-w-3xl">
            <KeyTakeaways
              summary="Our free Canada immigration tools are a licensed RCIC's suite of online calculators and checkers. They show you which permanent residence and work permit pathways you qualify for, estimate your Express Entry CRS and Alberta AAIP scores, and let you review live processing times before you spend a dollar. Use the eligibility checker to find routes that may fit, the CRS calculator to estimate your Express Entry score out of 1,200, and the AAIP calculator for your Alberta points."
              items={[
                <>Use our free <strong>Canada immigration calculator</strong> suite: the <a href="/tools/crs-calculator">CRS score calculator</a>, the <a href="/tools/aaip-calculator">Alberta PNP points calculator</a> and an <a href="/tools/eligibility">eligibility checker</a>, all in one place.</>,
                <>Check current <a href="/tools/processing-times">processing times</a> and recent Express Entry draw cut-offs so you can plan around realistic timelines.</>,
                <>Every tool is <strong>free to use</strong>.</>,
                <>They use current official <strong>IRCC and Government of Alberta</strong> criteria for a close estimate.</>,
                <>They are a starting point, not an official decision; only <strong>IRCC</strong> or the province can decide an application.</>,
              ]}
            />
          </Prose>
        </Container>
      </section>

      <Section>
        <FeatureGrid cols={3}>
          <FeatureCard
            icon={Calculator}
            badge="Free"
            title="CRS Calculator 2026"
            desc="Our Express Entry score calculator estimates your Comprehensive Ranking System total out of 1,200 using the current IRCC grid, including the 2025 removal of job-offer points."
            href="/tools/crs-calculator"
          />
          <FeatureCard
            icon={Mountain}
            badge="Free"
            title="AAIP Points Calculator 2026"
            desc="An Alberta PNP points calculator that estimates your Alberta Advantage Worker Expression of Interest score out of 100, the route to a provincial nomination. Alberta is our home province."
            href="/tools/aaip-calculator"
          />
          <FeatureCard
            icon={Clock}
            badge="Live"
            title="IRCC Processing Times 2026"
            desc="See current processing times and recent Express Entry draw cut-offs so you can plan realistic timelines before you apply."
            href="/tools/processing-times"
          />
        </FeatureGrid>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-3xl">
          <Faq items={faqs} />
        </div>
      </Section>

      <CtaBand
        title="Got your score? Let's build the plan"
        sub="Our free Canada immigration tools give you a starting number; we turn it into a real strategy. Get started and we'll map your route to permanent residence."
      />
    </>
  );
}
