import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/new-brunswick/express-entry-labour-market";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "New Brunswick EE Labour Market Stream",
  titleAbsolute: "NB Express Entry: Labour Market Stream (2026 Guide)",
  description:
    "NB Express Entry Labour Market Stream: how an NB job offer and nomination add 600 CRS to your profile. RCIC-led eligibility, selection and how to apply.",
  path: PATH,
  keywords: [
    "New Brunswick Express Entry Labour Market Stream",
    "NB Express Entry",
    "NB job offer PR",
    "NB EOI",
    "New Brunswick +600 CRS",
  ],
});

const faqs = [
  {
    q: "How does the New Brunswick Express Entry Labour Market Stream add 600 CRS points?",
    a: "Because it is an enhanced, Express-Entry-aligned stream. Once New Brunswick nominates you through the Express Entry Labour Market Stream, you accept the nomination in your federal Express Entry profile, which adds 600 points to your Comprehensive Ranking System (CRS) score. That boost is large enough that almost any candidate clears recent draw cut-offs, and IRCC then issues the invitation in the next general Express Entry draw. The nomination itself is not permanent residence, IRCC still makes the final decision on your federal application.",
  },
  {
    q: "Do I need a job offer for the NB Express Entry Labour Market Stream?",
    a: "Yes. The Labour Market Stream is employer-driven: it requires a genuine, full-time, non-seasonal job offer from an eligible New Brunswick employer, usually in a NOC TEER 0, 1, 2 or 3 occupation, before you can be invited. The offer must be in an occupation New Brunswick is currently accepting and not on its excluded-occupation list. If you have strong ties to the province but no job offer, the separate NB Interests pathway of NB Express Entry may fit you better.",
  },
  {
    q: "Is an active Express Entry profile required?",
    a: "Yes. You must already have a valid profile in the federal Express Entry pool, for Canadian Experience Class, Federal Skilled Worker or Federal Skilled Trades, to use this enhanced stream. New Brunswick can only nominate candidates who are in the pool, because the +600 CRS boost is applied to an existing Express Entry profile. If you are not yet in the pool, building an eligible profile is the first step. Our free CRS calculator helps you estimate where you stand.",
  },
  {
    q: "What language level does NB Express Entry require?",
    a: "You must meet the minimum for your federal Express Entry program and your occupation, generally Canadian Language Benchmark (CLB) 7 for NOC TEER 0 and 1 roles and CLB 5 for TEER 2 and 3, measured on an approved English or French test. Higher language scores also lift your underlying CRS, which matters before the nomination is applied. New Brunswick can set its own minimums by occupation, so confirm the current requirement on welcomenb.ca.",
  },
  {
    q: "How does New Brunswick select candidates for this stream?",
    a: "Selection runs through an Expression of Interest (EOI) in the INB Portal. You submit a profile, and New Brunswick issues Invitations to Apply based on its labour-market and sector priorities and your job offer, not a single published numeric cut-off. An EOI is valid for 365 days. Meeting the minimum eligibility does not entitle you to an invitation; the province directs limited invitations toward its highest-priority occupations, so an eligible profile may still wait.",
  },
  {
    q: "How long does the NB Express Entry Labour Market Stream take?",
    a: "Because it is enhanced, the federal stage is faster than a base nomination. After New Brunswick nominates you and you accept the 600 CRS points, IRCC targets roughly six months to process the Express Entry permanent-residence application that follows your invitation. The provincial nomination step and the wait for an EOI invitation are separate and depend on New Brunswick's intake. Timelines move with demand, verify current figures on welcomenb.ca and canada.ca.",
  },
  {
    q: "Does a New Brunswick nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement that adds 600 CRS, not a grant of permanent residence. You still submit a separate federal application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function NbExpressEntryLabourMarketPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "New Brunswick Express Entry Labour Market Stream 2026 (RCIC Guide)",
            description:
              "New Brunswick Express Entry Labour Market Stream 2026: how an NB job offer and nomination add 600 CRS, eligibility, selection and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "New Brunswick Express Entry Labour Market Stream application support",
            description:
              "New Brunswick Express Entry Labour Market Stream 2026: how an NB job offer and nomination add 600 CRS, eligibility, selection and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="New Brunswick (NBPNP), Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "New Brunswick", path: "/pnp/new-brunswick" },
          { name: "Express Entry Labour Market", path: PATH },
        ]}
        title={<>New Brunswick Express Entry: <span className="text-brand">Labour Market Stream</span></>}
        lede={
          <p>
            The <strong>New Brunswick Express Entry Labour Market Stream</strong> nominates Express Entry candidates who
            hold a New Brunswick job offer, and that enhanced nomination adds 600 CRS points to your federal profile.
            This RCIC-reviewed guide covers eligibility, how New Brunswick selects, and exactly how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free CRS Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                See your Express Entry score before the +600 boost, and what an NB nomination would do for it.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Check my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "New Brunswick PNP (NBPNP)", href: "/pnp/new-brunswick", note: "Every NB stream explained" },
                { label: "NB Skilled Worker stream", href: "/pnp/new-brunswick/skilled-worker", note: "The base, job-offer route" },
                { label: "Express Entry", href: "/express-entry", note: "How the federal system works" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "Estimate your score now" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The NB Express Entry Labour Market Stream is an enhanced, Express Entry-aligned stream of the New Brunswick Provincial Nominee Program (NBPNP). It nominates in-pool candidates who hold a genuine New Brunswick job offer, and that nomination adds 600 CRS points to your federal profile. You must already be in the Express Entry pool and meet the stream's job-offer, work-experience and language requirements. That +600 boost puts most candidates well above the typical draw cut-off toward permanent residence."
            items={[
              <>The <strong>NB Express Entry Labour Market Stream</strong> is an <strong>enhanced</strong> route that nominates Express Entry candidates with a New Brunswick job offer.</>,
              <>An enhanced nomination <strong>adds 600 CRS points</strong> to your federal profile, lifting most candidates well above recent Express Entry draw cut-offs.</>,
              <>You need an <strong>active Express Entry profile</strong>, a <strong>genuine NB job offer</strong>, and language and experience that meet your federal program.</>,
              <>Selection runs through an <strong>NB EOI</strong> in the INB Portal, valid <strong>365 days</strong>, by sector and labour need, not a published numeric score.</>,
              <>A nomination is not permanent residence: <strong>IRCC makes the final decision</strong> on a separate federal application.</>,
            ]}
          />

          <h2>What is the NB Express Entry Labour Market Stream?</h2>
          <p>
            The <strong>NB Express Entry Labour Market Stream</strong> is the employment-driven pathway of New Brunswick
            Express Entry, the province&apos;s <strong>enhanced</strong>, Express-Entry-aligned route to permanent
            residence. It is built for skilled workers who already have a profile in the federal Express Entry pool{" "}
            <em>and</em> a genuine, full-time job offer from a New Brunswick employer. When New Brunswick nominates you
            through this NB Express Entry stream, the provincial nomination is attached to your Express Entry profile and
            adds <strong>600 points</strong> to your CRS, putting most candidates well above the typical general-draw
            cut-off.
          </p>
          <p>
            New Brunswick&apos;s nomination space is limited and shapes how this stream runs. The province&apos;s 2025
            allocation was about <strong>2,750</strong> nomination spaces, split between the NBPNP and the Atlantic
            Immigration Program, with the 2026 figure expected to stay tight after federal allocations were cut nationwide
            (source: welcomenb.ca / IRCC, May 2026).</p>
          <p>Because supply is constrained, New Brunswick directs its enhanced
            invitations toward priority sectors and occupations, so meeting the minimum eligibility is not the same as
            receiving an invitation. Figures and policies change frequently; always verify the current rules before acting.
          </p>
          <Callout type="brand" title="Enhanced means +600 CRS, and speed">
            Unlike a base nomination, an enhanced <strong>NB Express Entry</strong> nomination does not send you to a
            separate paper application. The 600 CRS points are applied inside your federal profile, and you continue
            through Express Entry, the fastest route New Brunswick offers to permanent residence.
          </Callout>

          <h2>Who is the NB Express Entry Labour Market Stream for?</h2>
          <p>
            This stream suits a specific candidate: someone already in the Express Entry pool who has secured, or can
            secure, a qualifying job offer from a New Brunswick employer. It sits alongside the <strong>NB Interests</strong>{" "}
            pathway of NB Express Entry, which can consider candidates with strong provincial ties rather than a job offer.
            If you have an offer, the Labour Market Stream is usually the more direct route; if you do not, the{" "}
            <a href="/pnp/new-brunswick/skilled-worker">NB Skilled Worker stream</a> (a base route) or the NB Interests
            pathway may be worth reviewing. Not sure where your federal score sits? Start with our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a>.
          </p>

          <h2>What are the NB Express Entry Labour Market Stream eligibility requirements?</h2>
          <p>
            Eligibility rests on a connected set of requirements you must meet when you submit your{" "}
            <strong>NB EOI</strong>. Because it is enhanced, you must first satisfy a federal Express Entry program, then
            add New Brunswick&apos;s own employment and occupation criteria on top. The table below summarises the core
            2026 requirements; the controlling list lives on welcomenb.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Active Express Entry profile", "A valid profile in the federal pool under any program (CEC, FSW or FST: Canadian Experience Class, Federal Skilled Worker or Federal Skilled Trades), the nomination attaches here"],
              ["NB job offer", "A genuine, full-time, non-seasonal offer from an eligible New Brunswick employer, usually in NOC TEER 0–3 and not on the excluded-occupation list"],
              ["Language", "Meet your federal program minimum and occupation, generally CLB 7 (TEER 0–1) or CLB 5 (TEER 2–3) on an approved English or French test"],
              ["Work experience", "Skilled work experience that qualifies you for your federal Express Entry program and matches the offered occupation"],
              ["Education", "Education that meets your federal program; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Intent to settle", "A genuine intention to live and work in New Brunswick"],
            ]}
            caption="NB Express Entry Labour Market Stream core eligibility, accurate as of May 2026 (welcomenb.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            New Brunswick selects by sector and labour-market need, not a single numeric ranking, and it does not publish a
            fixed cut-off score. Many otherwise-eligible profiles will not receive an Invitation to Apply this cycle. We
            give you a candid read on your realistic chances before you invest time and fees.
          </Callout>

          <h2>How does selection work?</h2>
          <p>
            Selection for the <strong>NB Express Entry Labour Market Stream</strong> runs through an{" "}
            <strong>Expression of Interest (EOI)</strong> in the province&apos;s INB Portal. You submit a profile that
            reflects your Express Entry standing, your job offer and your ties to New Brunswick; the province may then send
            a Notification of Interest and issue Invitations to Apply to the candidates whose profiles best match its
            current labour-market and sector priorities.</p>
          <p>Unlike a points-only system, there is no single published score
            to clear and no fixed NB Express Entry draw schedule. Selection follows provincial need and the available
            allocation.
          </p>
          <p>
            An EOI is generally valid for <strong>365 days</strong> from submission. During that window New Brunswick may
            invite you if your occupation and profile align with its priorities; if you are not invited before the profile
            expires, you can submit a new one. Keeping your job offer, language results and documents current improves your
            standing. There is no guaranteed waiting time, because invitations follow need rather than a fixed queue.
          </p>

          <h2>How the +600 CRS boost changes your odds</h2>
          <p>
            The reason this stream matters so much is the <strong>+600 CRS</strong> it delivers. Federal Express Entry
            draws in 2026 have typically required CRS scores in the mid-500s for general draws, so very few candidates
            reach an Invitation to Apply on human-capital points alone. A New Brunswick nomination lifts almost any
            in-pool profile far above any realistic cut-off, which is why the enhanced route is so valuable when you can
            secure a qualifying NB job offer.
          </p>
          <DataTable
            headers={["Scenario", "Approx. CRS", "Likely outcome"]}
            rows={[
              ["Typical in-pool profile, no nomination", "350–470", "Below recent general-draw cut-offs, unlikely to be invited"],
              ["Same profile + NB enhanced nomination", "+600", "Total well above recent cut-offs, IRCC issues any invitation"],
            ]}
            caption="Illustrative only, CRS varies by profile and every Express Entry draw (canada.ca, 2026). Verify the latest draw results before relying on any number."
          />

          <h2>How to apply for the NB Express Entry Labour Market Stream</h2>
          <p>
            <strong>How to apply</strong> follows the standard enhanced sequence, federal profile first, an NB EOI, then a
            nomination that flows back into Express Entry. The steps below show the path from confirming eligibility to a
            federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Enter the Express Entry pool", desc: "Take an approved language test, get an ECA if needed, and create a valid federal Express Entry profile (CEC, FSW or FST). You must be in the pool to be nominated." },
              { title: "Secure an eligible NB job offer", desc: "Obtain a genuine, full-time offer from a New Brunswick employer in an eligible occupation (usually NOC TEER 0–3) that is not on the excluded-occupation list." },
              { title: "Submit your NB EOI", desc: "Create and submit an Expression of Interest through the INB Portal. It stays valid for 365 days while New Brunswick assesses it against its sector priorities." },
              { title: "Receive an Invitation to Apply", desc: "If your profile matches New Brunswick's labour-market needs, the province issues an ITA. Eligibility alone does not guarantee this step." },
              { title: "Apply for the provincial nomination", desc: "Submit a full nomination application with supporting documents within your window, including the provincial application fee (around $250, confirm on welcomenb.ca)." },
              { title: "Accept +600 CRS & apply to IRCC", desc: "Accept the nomination in your Express Entry profile to gain 600 CRS, receive your federal ITA, and submit your permanent-residence application to IRCC, which makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with NB Express Entry</h2>
          <p>
            We assess your <a href="/express-entry">Express Entry</a> standing, confirm whether your New Brunswick job
            offer and occupation are eligible, and position your <strong>NB EOI</strong> to match the province&apos;s
            current sector priorities. Our team is led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497); we prepare an INB Portal
            profile and nomination application that stands up to scrutiny and represent you with both New Brunswick and
            IRCC. We work entirely online. With the province&apos;s allocation tight and its sector focus in force, that
            positioning is where good advice earns its keep.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            NB Express Entry application an expert check before you submit. Figures here are current to May 2026 and change
            often, so we always confirm the live welcomenb.ca and canada.ca pages before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Could an NB nomination add 600 CRS to your profile?"
        sub="Get started with a licensed RCIC for an honest read on the New Brunswick Express Entry Labour Market Stream and your strongest route to permanent residence."
      />
    </>
  );
}
