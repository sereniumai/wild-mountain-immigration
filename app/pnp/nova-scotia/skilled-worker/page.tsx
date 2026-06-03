import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia/skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia Skilled Worker Stream, 2026 Guide",
  titleAbsolute: "NSNP Skilled Worker Stream: Nova Scotia 2026",
  description:
    "Nova Scotia Skilled Worker stream 2026: NSNP base nomination for workers with a permanent NS job offer. Eligibility, language and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Nova Scotia Skilled Worker stream",
    "NSNP Skilled Worker",
    "Nova Scotia job offer PR",
    "base nomination Nova Scotia",
    "NSNP 2026",
  ],
});

const faqs = [
  {
    q: "Do I need a job offer for the Nova Scotia Skilled Worker stream?",
    a: "Yes. The Skilled Worker stream is employer-driven: you must hold a full-time, permanent job offer from a Nova Scotia employer in an eligible occupation. Unlike the Express Entry-aligned routes, this stream cannot select you from a federal pool without an offer. The job offer is the foundation of the application, so it must be genuine, full-time and permanent, not seasonal, casual or part-time.",
  },
  {
    q: "Does the Nova Scotia Skilled Worker stream accept lower-skilled jobs?",
    a: "Yes, and that is what sets it apart. The Skilled Worker stream can accept job offers in lower-skilled occupations (NOC TEER 4 and some TEER 5 roles), not just professional or managerial jobs. The language requirement reflects this: roughly CLB 5 for higher-skilled NOC TEER 0–3 occupations and CLB 4 for lower-skilled TEER 4–5 roles. Some occupations are paused or excluded, so always confirm your specific NOC on novascotia.ca first.",
  },
  {
    q: "Is the Nova Scotia Skilled Worker stream a base or enhanced nomination?",
    a: "It is a base nomination. That means it is not linked to Express Entry and adds no CRS points. Once Nova Scotia nominates you, you submit a separate, paper-based permanent-residence application directly to IRCC. Base applications are generally processed more slowly than the roughly six months IRCC targets for enhanced Express Entry applications, so plan your timeline accordingly.",
  },
  {
    q: "What language level do I need for the NSNP Skilled Worker stream?",
    a: "Language scales with your occupation's skill level. Higher-skilled NOC TEER 0–3 jobs generally require Canadian Language Benchmark (CLB) 5, while lower-skilled TEER 4–5 jobs require CLB 4, measured on the lowest of your four abilities. You must take an approved English or French test, and results are valid for two years. Confirm the exact requirement for your occupation on novascotia.ca.",
  },
  {
    q: "How long does the Nova Scotia Skilled Worker stream take?",
    a: "There are two stages. Provincial processing of a nomination application typically runs from a few weeks to a few months, depending on document completeness and volumes. After nomination, you apply to IRCC for permanent residence, and because this is a base (paper) application, it generally takes longer than an enhanced Express Entry application. Plan for the better part of a year overall, and check current service standards before relying on any timeline.",
  },
  {
    q: "Does the Nova Scotia Skilled Worker stream charge an application fee?",
    a: "No. Nova Scotia is one of the few provinces that charges no provincial application fee for an NSNP nomination, including the Skilled Worker stream. However, federal IRCC permanent-residence fees still apply, as do the costs of language tests, an educational credential assessment and supporting documents. Fees and policies change, so confirm the current position on novascotia.ca before you budget.",
  },
  {
    q: "Do you guarantee a Nova Scotia Skilled Worker nomination?",
    a: "No. No licensed consultant can guarantee a nomination or a permanent-residence outcome, those decisions rest with the Province of Nova Scotia and IRCC. The NSNP runs a ranked expression-of-interest system, so meeting the minimum requirements does not guarantee an invitation. What we do is assess your prospects honestly and prepare an application that stands up to scrutiny. Wild Mountain Immigration is not affiliated with any government and never promises approvals.",
  },
];

export default function NovaScotiaSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia Skilled Worker Stream, 2026 NSNP Guide",
            description:
              "Nova Scotia Skilled Worker stream 2026: NSNP base nomination for workers with a permanent NS job offer. Eligibility, language and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Nova Scotia Skilled Worker stream application support",
            description:
              "Nova Scotia Skilled Worker stream 2026: NSNP base nomination for workers with a permanent NS job offer. Eligibility, language and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Nova Scotia (NSNP), Skilled Worker"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Nova Scotia (NSNP)", path: "/pnp/nova-scotia" },
          { name: "Skilled Worker", path: PATH },
        ]}
        title={<>Nova Scotia <span className="text-brand">Skilled Worker stream</span></>}
        lede={
          <p>
            The <strong>Nova Scotia Skilled Worker stream</strong> is the NSNP&apos;s employer-driven base route: it
            nominates workers who hold a full-time, permanent Nova Scotia job offer, including many lower-skilled roles
            other streams exclude. This RCIC-reviewed guide covers eligibility, language and how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Have a Nova Scotia job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A permanent NS job offer can open the Skilled Worker stream. Get an honest read on your eligibility from a
                licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia Nominee Program (NSNP)", href: "/pnp/nova-scotia", note: "Every NSNP stream explained" },
                { label: "Occupation in Demand", href: "/pnp/nova-scotia/occupation-in-demand", note: "Sister base stream, in-demand roles" },
                { label: "Labour Market Priorities", href: "/pnp/nova-scotia/labour-market-priorities", note: "The enhanced, no-offer route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Nova Scotia Skilled Worker stream is the employer-driven base route of the Nova Scotia Nominee Program (NSNP) for workers who hold a full-time, permanent job offer from a Nova Scotia employer. It assesses your job offer, work experience and language (historically CLB 5, or CLB 4 for lower-skilled roles). Because it is not Express Entry-aligned, a nomination adds no CRS points. Instead, it is a provincial recommendation that leads to a separate permanent-residence application to IRCC."
            items={[
              <>The <strong>Nova Scotia Skilled Worker stream</strong> is the NSNP&apos;s employer-driven route for workers with a <strong>full-time, permanent Nova Scotia job offer</strong>.</>,
              <>It is a <strong>base nomination</strong>: not linked to Express Entry, so it adds no CRS points and routes through a separate IRCC paper application.</>,
              <>Unusually, it can accept <strong>lower-skilled roles</strong> (NOC TEER 4–5), not just professional jobs, with language scaled to the occupation.</>,
              <>Language: roughly <strong>CLB 5</strong> for NOC TEER 0–3 jobs and <strong>CLB 4</strong> for TEER 4–5 jobs, on your lowest of four abilities.</>,
              <>Selection runs through a ranked <strong>expression of interest (EOI)</strong>, so meeting the minimum does not guarantee an invitation. Nova Scotia charges <strong>no provincial fee</strong>.</>,
            ]}
          />

          <h2>What is the Nova Scotia Skilled Worker stream?</h2>
          <p>
            The <strong>Nova Scotia Skilled Worker stream</strong> is the employer-driven, base pathway of the{" "}
            <a href="/pnp/nova-scotia">Nova Scotia Nominee Program (NSNP)</a>. It lets the province nominate foreign
            workers and recent graduates who hold a <strong>full-time, permanent job offer</strong> from a Nova Scotia
            employer.</p>
          <p>As of 2026 Nova Scotia charges <strong>no provincial application fee</strong> for an NSNP
            nomination (source: novascotia.ca, May 2026), one of the few provinces to do so, though federal IRCC fees
            still apply. The stream is the province&apos;s main route for people whose path to permanent residence runs
            through a Nova Scotia employer rather than the federal Express Entry pool.
          </p>
          <p>
            What sets the Skilled Worker stream apart from most PNP routes is its reach into <strong>lower-skilled
            occupations</strong>. As an <strong>employer-driven PNP</strong> stream, it ties your route to permanent
            residence to a Nova Scotia employer rather than a federal pool.</p>
          <p>While many streams are limited to
            professional and managerial NOC TEER 0–3 roles, the
            Skilled Worker stream can accept job offers in selected <strong>TEER 4 and some TEER 5</strong> occupations,
            with the language requirement scaled down accordingly. Because it is a <strong>base nomination</strong>, a
            Nova Scotia nomination here is not added to an Express Entry profile, instead it leads to a separate IRCC
            permanent-residence application, as explained below.
          </p>
          <Callout type="brand" title="This is a base stream, not Express Entry">
            The Skilled Worker stream is a base nomination. It does not require an Express Entry profile and adds no CRS
            points. Once Nova Scotia nominates you, you file a separate, paper-based permanent-residence application
            directly with IRCC. Only the NSNP&apos;s Express Entry-aligned routes add the 600-point boost.
          </Callout>

          <h2>Base vs enhanced: where the Skilled Worker stream sits</h2>
          <p>
            The most important distinction in the NSNP is whether a stream is <em>base</em> or <em>enhanced</em>. An{" "}
            <strong>enhanced nomination</strong> is aligned with Express Entry, requires a valid federal Express Entry
            profile and adds <strong>600 CRS points</strong>, putting most candidates well above the typical draw cut-off. A{" "}
            <strong>base nomination</strong> like the Skilled Worker stream is <em>not</em> connected to Express Entry: it
            adds no CRS points and routes through a separate, generally slower IRCC paper application. The table below
            shows where Skilled Worker sits relative to the enhanced{" "}
            <a href="/pnp/nova-scotia/labour-market-priorities">Labour Market Priorities</a> route.
          </p>
          <DataTable
            headers={["Feature", "Skilled Worker (base)", "Labour Market Priorities (enhanced)"]}
            rows={[
              ["Stream type", "Base", "Enhanced"],
              ["Express Entry profile", "Not required", "Required (in the EE pool)"],
              ["Effect of nomination", "Leads to a separate IRCC paper application", "Adds 600 CRS points"],
              ["Job offer", "Required (full-time, permanent NS offer)", "Often not required"],
              ["Lower-skilled roles (TEER 4–5)", "Can be eligible", "Generally not targeted"],
            ]}
            caption="Nova Scotia Skilled Worker stream vs the enhanced Labour Market Priorities route (novascotia.ca, May 2026). Eligibility does not guarantee an invitation."
          />

          <h2>What are the Nova Scotia Skilled Worker stream eligibility requirements?</h2>
          <p>
            <strong>Eligibility</strong> rests on a connected set of requirements you must meet when you submit your
            expression of interest. The cornerstone is the Nova Scotia <strong>job offer</strong>, the foundation of any{" "}
            <strong>Nova Scotia job offer PR</strong> pathway; around it sit work experience, language, education and
            settlement funds. A single gap can lead to a refusal: a NOC code that does not match the offer, a
            language band one point short, or a job that is seasonal rather than permanent.
            The table summarises the core 2026 requirements. The official, controlling list lives on novascotia.ca and
            changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the Skilled Worker stream asks for"]}
            rows={[
              ["Job offer", "A full-time, permanent job offer from a Nova Scotia employer in an eligible occupation (some occupations are paused or excluded)"],
              ["Work experience", "At least one year of related work experience in the offered occupation within recent years"],
              ["Language", "CLB 5 for NOC TEER 0–3 occupations; CLB 4 for TEER 4–5, measured on your lowest of four abilities; approved test, valid 2 years"],
              ["Education", "At least high-school completion; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Settlement funds", "Enough funds to support yourself and your family on arrival, unless you are already legally working in Nova Scotia"],
              ["Age & intent", "Within the working-age range and a genuine intention to live and work in Nova Scotia"],
            ]}
            caption="Nova Scotia Skilled Worker stream core eligibility, accurate as of May 2026 (novascotia.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            Your CLB level is taken from the lowest of your four abilities, reading, writing, listening and speaking, so
            a single weak skill can drop you below the threshold for your occupation. Lifting your weakest band is often
            the single most valuable step before you submit.
          </Callout>

          <h2>How does Skilled Worker differ from Occupation in Demand?</h2>
          <p>
            Both are <strong>base, employer-driven</strong> streams that require a Nova Scotia job offer, which is why
            they are easy to confuse. The <strong>Skilled Worker stream</strong> is the broader of the two: it can accept
            a wide range of occupations, including many lower-skilled roles, as long as the offer is full-time and
            permanent.</p>
          <p>The <a href="/pnp/nova-scotia/occupation-in-demand">Occupation in Demand</a> stream works
            similarly but focuses on a <em>defined list of selected in-demand occupations</em> that the province updates
            from time to time. If your occupation is on that list, Occupation in Demand may be the better fit; if it is
            not, the Skilled Worker stream is usually the route to consider. Because the in-demand list changes, confirm
            your occupation&apos;s current status on novascotia.ca before relying on either.
          </p>

          <h2>How to apply to the Nova Scotia Skilled Worker stream</h2>
          <p>
            <strong>How to apply</strong> follows a clear sequence built around your job offer and the province&apos;s
            ranked expression-of-interest system. The steps below show the path from confirming eligibility to a federal
            permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Secure a qualifying job offer", desc: "Obtain a full-time, permanent job offer from a Nova Scotia employer in an eligible occupation that matches your work experience and NOC code." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test (IELTS, CELPIP or TEF/TCF), obtain an ECA for foreign education, prepare proof of settlement funds, and collect job-offer, experience and identity evidence." },
              { title: "Submit your expression of interest", desc: "Create and submit your NSNP expression of interest. It sits in Nova Scotia's ranked pool, meeting the minimum does not guarantee an invitation." },
              { title: "Receive an invitation & apply", desc: "If invited, file a complete Skilled Worker nomination application within the stated window. Nova Scotia charges no provincial application fee." },
              { title: "Get nominated", desc: "If the province approves your application, it issues a base provincial nomination, a strong endorsement, but not permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "Submit your separate, paper-based PR application to IRCC with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <p>
            Because the Skilled Worker nomination is <strong>base</strong>, the IRCC stage is a separate paper
            application rather than an Express Entry submission, and base applications generally take longer than the
            roughly six months IRCC targets for enhanced routes. All figures and timelines change frequently, so confirm
            the current position on novascotia.ca and canada.ca before you apply.
          </p>

          <h2>How Wild Mountain Immigration helps with your Skilled Worker application</h2>
          <p>
            We assess your profile against Nova Scotia&apos;s 2026 criteria, confirm that your job offer and NOC code
            line up, and check whether the Skilled Worker stream, <a href="/pnp/nova-scotia/occupation-in-demand">
            Occupation in Demand</a> or an enhanced{" "}
            <a href="/pnp/nova-scotia/labour-market-priorities">Labour Market Priorities</a> route gives you the strongest
            position. Our team is led by a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>{" "}
            (CICC #R706497); we prepare an expression of interest and nomination application that stands up to scrutiny,
            then manage the separate IRCC permanent-residence application.</p>
          <p>We catch the avoidable mistakes that cause
            refusals: a mismatched NOC code, a language band one point short, or a job offer that is not genuinely
            permanent. If your
            employer is a designated Atlantic employer, we also weigh the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> against the NSNP. We work entirely
            online and are not affiliated with any government.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Skilled Worker application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Have a Nova Scotia job offer? Let's check your fit"
        sub="Get started with a licensed RCIC for an honest read on the Skilled Worker stream and your route to permanent residence."
      />
    </>
  );
}
