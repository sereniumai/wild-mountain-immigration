import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import {
  PageHero, Prose, DataTable, Faq, CtaBand, JsonLd, Callout, KeyTakeaways,
} from "@/components/content/blocks";
import { CrsCalculator } from "@/components/tools/crs-calculator";
import { YouTubeEmbed } from "@/components/content/youtube-embed";
import { pageMeta, articleLd } from "@/lib/seo";

const PATH = "/tools/crs-calculator";

export const metadata: Metadata = pageMeta({
  title: "CRS Calculator 2026",
  titleAbsolute: "CRS Calculator 2026: Free Express Entry Calculator",
  description:
    "Free CRS calculator and Express Entry points calculator. Estimate your Comprehensive Ranking System score for 2026 on the current IRCC grid.",
  path: PATH,
  keywords: ["crs calculator", "crs calculator 2026", "express entry calculator", "express entry points calculator", "comprehensive ranking system", "what is my crs score"],
});

const faqs = [
  {
    q: "What is a CRS calculator?",
    a: "A CRS calculator is a free tool that estimates your Express Entry Comprehensive Ranking System (CRS) score out of 1,200 using IRCC's current points grid. You enter your age, education, language results, work experience and other factors, and it returns an estimated score so you can see where you stand against recent Express Entry draw cut-offs before you apply.",
  },
  {
    q: "Is this CRS calculator free to use?",
    a: "Yes. Our CRS calculator and Express Entry points calculator are completely free to use. You can run your score as many times as you like and model different scenarios, then get in touch only if you want an RCIC to review your profile.",
  },
  {
    q: "How is the CRS score calculated?",
    a: "The Comprehensive Ranking System awards up to 1,200 points across four areas: core human capital (age, education, language, Canadian work experience), spouse factors, skill transferability, and additional points. A provincial nomination adds 600 points, the single largest boost available.",
  },
  {
    q: "What is a good CRS score in 2026?",
    a: "It depends on the draw. In 2026, Canadian Experience Class cut-offs have sat around 507–518, while category-based draws for healthcare, trades and French speakers have invited scores in the high 400s. Above 510 is competitive for general profiles; below that, a category draw or nomination is the realistic route.",
  },
  {
    q: "Is this CRS calculator accurate?",
    a: "It uses the current public IRCC points grid, so it gives a close estimate for most profiles. It is not an official tool, IRCC calculates your real score from your documents. Small details, such as your lowest language ability or how Canadian experience interacts with skill transferability, can change the result, so an RCIC review is wise before you submit.",
  },
  {
    q: "Do I still get points for a job offer in 2026?",
    a: "No. IRCC removed all arranged-employment (job-offer) CRS points on March 25, 2025. This calculator reflects that change and does not award any points for a job offer. A job offer can still help you qualify for a provincial nomination, which does add 600 points.",
  },
  {
    q: "How can I increase my CRS score?",
    a: "The fastest gains usually come from improving your language test results, adding a second official language, gaining Canadian work experience, completing further education, or securing a provincial nomination. We can model each option for your profile and tell you which moves the needle most.",
  },
];

export default function CrsCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "CRS Calculator 2026, Express Entry Score Estimator",
            description: "Free CRS calculator for Express Entry 2026. Estimate your Comprehensive Ranking System score in minutes using the current IRCC grid.",
            path: PATH,
            dateModified: "2026-05-31",
          }),
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "CRS Calculator 2026",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
            url: "https://wildmountainimmigration.com/tools/crs-calculator",
          },
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Express Entry CRS score explained",
            description: "A short walkthrough of how the Express Entry Comprehensive Ranking System (CRS) works and what your score means for 2026 draws.",
            thumbnailUrl: "https://i.ytimg.com/vi/whXeWgze15s/hqdefault.jpg",
            contentUrl: "https://www.youtube.com/watch?v=whXeWgze15s",
            embedUrl: "https://www.youtube.com/embed/whXeWgze15s",
            uploadDate: "2024-01-01",
          },
        ]}
      />

      <PageHero
        eyebrow="Free Tool"
        crumbs={[{ name: "Tools", path: "/tools" }, { name: "CRS Calculator", path: PATH }]}
        title={<>CRS calculator <span className="text-brand">2026</span></>}
        lede={
          <p>
            This free <strong>CRS calculator</strong>, also an Express Entry points calculator, estimates your
            Comprehensive Ranking System score in about two minutes using the current official IRCC points grid. Just
            answer the questions and see where you stand for 2026 draws.
          </p>
        }
        primaryCta={{ href: "#calculator", label: "Start calculating" }}
        secondaryCta={{ href: "/express-entry", label: "Read the Express Entry guide" }}
      />

      <section id="calculator" className="scroll-mt-24 py-12 lg:py-16">
        <Container>
          <CrsCalculator />
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-3xl">
          <div className="text-center">
            <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink">Watch: Express Entry and the CRS explained</h2>
            <p className="mt-3 text-ink-soft">A quick walkthrough of how the Comprehensive Ranking System works and what your CRS score means for your Express Entry chances.</p>
          </div>
          <div className="mt-8">
            <YouTubeEmbed id="whXeWgze15s" title="Express Entry CRS score explained" />
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <Prose className="max-w-3xl">
            <KeyTakeaways
              summary="A CRS calculator estimates your Express Entry Comprehensive Ranking System (CRS) score out of 1,200 using IRCC's current points grid. This free CRS calculator scores your age, education, language, work experience and other factors in about two minutes. A provincial nomination adds 600 points, the single biggest boost."
              items={[
                <>A <strong>CRS calculator</strong> estimates your Express Entry score out of <strong>1,200</strong> points.</>,
                <>This <strong>Express Entry calculator</strong> is free to use, as often as you like.</>,
                <>It uses IRCC&apos;s current 2026 grid, including the <strong>removal of job-offer points</strong> (March 2025).</>,
                <>A <strong>provincial nomination adds 600 points</strong>, usually enough to clear the next draw cut-off.</>,
              ]}
            />
            <h2>How does this CRS calculator work?</h2>
            <p>
              The Comprehensive Ranking System (CRS) is the points formula IRCC uses to rank Express Entry candidates,
              and this calculator mirrors that formula. Everyone in the pool gets a score out of <strong>1,200</strong>,
              and each draw invites the highest scores first. Because the cut-off is set by supply and demand, it moves
              every round, there is no fixed pass mark. The same grid applies whether you enter through the Federal
              Skilled Worker program or the Canadian Experience Class.
            </p>
            <h2>How to use this free Express Entry calculator</h2>
            <p>
              Answer each question with your most accurate information: your age, education, your language test results
              expressed in Canadian Language Benchmark (CLB) levels, work experience and any provincial nomination. This{" "}
              <strong>Express Entry calculator</strong> updates as you go, so you can see exactly which factors move the
              needle. Treat the result as a close estimate, then have an RCIC confirm it before you submit.
            </p>
            <h2>What counts as a good CRS score in 2026?</h2>
            <p>
              In 2026, IRCC has leaned on category-based and program-specific draws rather than general all-program
              rounds. The table below shows the rough shape of recent 2026 cut-offs, useful context for reading your
              own estimate. Always confirm the latest numbers on the IRCC rounds-of-invitations page, as they change
              with every draw.
            </p>
            <DataTable
              headers={["2026 draw type", "Recent cut-off", "What it means for you"]}
              rows={[
                ["Canadian Experience Class", "~507–518", "Standard benchmark for in-Canada applicants"],
                ["French-language draw", "~393–419", "Strong French is a major advantage in 2026"],
                ["Healthcare & social services", "~467", "Lower bar if you work in eligible care roles"],
                ["Trades", "~477", "Construction and skilled-trade occupations"],
                ["Provincial Nominee Program", "~710–805", "Reflects the +600 nomination bonus"],
              ]}
              caption="Illustrative 2026 cut-offs (IRCC rounds of invitations), figures change each draw."
            />
            <Callout type="brand" title="A score below the general cut-off is not the end of the road">
              Many of our clients receive invitations through a category-based draw or a provincial nomination rather
              than a general round. Once you have run the CRS calculator and have your estimate, the right strategy often
              matters more than the raw number.
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
        title="Turn your score into a real plan"
        sub="Get started and we'll tell you exactly how to raise your CRS and which draw to target."
      />
    </>
  );
}
