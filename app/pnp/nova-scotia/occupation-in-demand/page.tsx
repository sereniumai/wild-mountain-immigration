import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia/occupation-in-demand";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia Occupation in Demand, 2026 Guide",
  titleAbsolute: "NSNP Occupation in Demand: Nova Scotia 2026",
  description:
    "Nova Scotia Occupation in Demand 2026: NSNP base nomination for workers with an NS job offer in a selected in-demand occupation. Rules and how to apply.",
  path: PATH,
  keywords: [
    "Nova Scotia Occupation in Demand",
    "NSNP Occupation in Demand",
    "Nova Scotia in-demand jobs PR",
    "base nomination job offer",
    "NSNP in-demand occupations",
  ],
});

const faqs = [
  {
    q: "What is the Nova Scotia Occupation in Demand stream?",
    a: "The Nova Scotia Occupation in Demand stream is a base sub-stream of the NSNP Skilled Worker pathway for workers who have a full-time, permanent job offer from a Nova Scotia employer in a selected in-demand occupation, often intermediate-skilled roles such as nurse aides, transport-truck drivers and food-and-beverage workers. Because it is a base nomination, a successful nomination leads to a separate paper application to IRCC for permanent residence rather than 600 CRS points. The list of eligible occupations changes, and is the only reliable source, so always confirm the current position on novascotia.ca.",
  },
  {
    q: "Which occupations are in demand for the NSNP Occupation in Demand stream?",
    a: "Nova Scotia selects a short list of in-demand occupations based on labour-market need, and it has historically focused on intermediate-skilled roles (across NOC TEER 3 to 5) such as nurse aides and orderlies, transport-truck drivers, and food and beverage servers. The selected list changes and at times has had no occupations open, so the only reliable source is the current program page on novascotia.ca. We confirm whether your occupation is open before you build an application around it.",
  },
  {
    q: "Do I need a job offer for the Occupation in Demand stream?",
    a: "Yes. The Occupation in Demand stream is employer-driven: you need a full-time, permanent (non-seasonal) job offer from an eligible Nova Scotia employer in one of the selected in-demand occupations. Without a qualifying Nova Scotia job offer in a listed occupation, this is not the right route. An Express Entry-aligned pathway such as Labour Market Priorities may fit better, since it can invite some candidates without a standing offer.",
  },
  {
    q: "Does the Occupation in Demand stream add 600 CRS points?",
    a: "No. The Occupation in Demand stream is a base nomination, not an enhanced Express Entry-aligned one, so it does not add 600 points to a Comprehensive Ranking System score. Once Nova Scotia nominates you, you submit a separate permanent-residence application directly to IRCC, which is generally processed more slowly than an Express Entry application. Only Nova Scotia's enhanced, Express Entry-linked selections carry the 600-point boost.",
  },
  {
    q: "What language level do I need for the Occupation in Demand stream?",
    a: "You need an approved English or French language test that meets at least the minimum Canadian Language Benchmark set for the stream, historically CLB 5 for the in-demand occupations, though some occupations or the province may set a different bar. Results must come from an approved test (such as IELTS, CELPIP or TEF/TCF) and are generally valid for two years. Confirm the current minimum on novascotia.ca, because language thresholds can change.",
  },
  {
    q: "How long does an Occupation in Demand nomination take?",
    a: "There are two stages. Nova Scotia's provincial processing of a nomination application typically runs a few weeks to a few months depending on document completeness and volumes. Because this is a base stream, you then file a separate paper application with IRCC for permanent residence, which generally takes longer than the roughly six months IRCC targets for enhanced Express Entry applications. Plan for the better part of a year overall and verify current service standards before relying on any timeline.",
  },
  {
    q: "Do you guarantee a Nova Scotia nomination?",
    a: "No. No licensed consultant can guarantee a nomination or a permanent-residence outcome, those decisions rest with the Province of Nova Scotia and IRCC. What we do is confirm whether your occupation is currently selected, check your job offer and eligibility, and prepare an application that stands up to scrutiny. Wild Mountain Immigration is not affiliated with any government, and we never promise approvals.",
  },
];

export default function NovaScotiaOccupationInDemandPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia Occupation in Demand Stream, 2026 RCIC Guide",
            description:
              "Nova Scotia Occupation in Demand 2026: NSNP base nomination for workers with an NS job offer in a selected in-demand occupation. Rules and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Nova Scotia Occupation in Demand stream application support",
            description:
              "Nova Scotia Occupation in Demand 2026: NSNP base nomination for workers with an NS job offer in a selected in-demand occupation. Rules and how to apply.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Nova Scotia (NSNP), Occupation in Demand"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Nova Scotia (NSNP)", path: "/pnp/nova-scotia" },
          { name: "Occupation in Demand", path: PATH },
        ]}
        title={<>Nova Scotia <span className="text-brand">Occupation in Demand</span></>}
        lede={
          <p>
            The <strong>Nova Scotia Occupation in Demand</strong> stream nominates workers who hold a Nova Scotia job
            offer in a selected in-demand occupation, often intermediate-skilled roles. It is a base NSNP nomination, so
            it leads to a separate IRCC application, not 600 CRS points.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is your occupation in demand?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The selected occupation list changes, and has sometimes been empty. Get a licensed RCIC to confirm
                whether your route is open before you build a case around it.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia Nominee Program (NSNP)", href: "/pnp/nova-scotia", note: "All Nova Scotia streams explained" },
                { label: "NSNP Skilled Worker", href: "/pnp/nova-scotia/skilled-worker", note: "The main employer-driven base stream" },
                { label: "Labour Market Priorities", href: "/pnp/nova-scotia/labour-market-priorities", note: "Enhanced route, often no job offer" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province compared" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Nova Scotia Occupation in Demand is a base sub-stream of the Nova Scotia Nominee Program (NSNP) Skilled Worker pathway. It is built for workers who hold a full-time, permanent job offer from a Nova Scotia employer in a selected in-demand occupation, often an intermediate-skilled role. The stream assesses your job offer, work experience and language. Because it is not Express Entry-aligned, a nomination is a provincial recommendation toward permanent residence: it leads to a separate application to IRCC, not 600 CRS points."
            items={[
              <>The <strong>Nova Scotia Occupation in Demand</strong> stream is a <strong>base</strong> NSNP route for workers with an NS job offer in a selected in-demand occupation.</>,
              <>It targets <strong>intermediate-skilled roles</strong> (across NOC TEER 3 to 5) such as nurse aides, transport-truck drivers and food-and-beverage servers.</>,
              <>You need a <strong>full-time, permanent Nova Scotia job offer</strong> in a currently <strong>selected</strong> occupation, plus experience, language and education.</>,
              <>As a base nomination it leads to a <strong>separate IRCC paper application</strong>. It does <strong>not</strong> add 600 CRS points.</>,
              <>The eligible <strong>occupation list changes</strong> and has at times had no occupations open, so always confirm the current list on novascotia.ca.</>,
            ]}
          />

          <h2>What is the Nova Scotia Occupation in Demand stream?</h2>
          <p>
            The <strong>Nova Scotia Occupation in Demand</strong> stream is a sub-stream of the NSNP Skilled Worker
            pathway built for workers who have a job offer in a small list of occupations the province has flagged as
            in demand. Where Nova Scotia&apos;s standard Skilled Worker route covers a broad range of skilled jobs, the{" "}
            <strong>NSNP Occupation in Demand</strong> sub-stream narrows the focus to selected occupations, frequently
            intermediate-skilled roles such as nurse aides and orderlies, transport-truck drivers and food
            and beverage servers, that local employers struggle to fill from the resident workforce.
          </p>
          <p>
            Like the wider Nova Scotia Nominee Program, this is a base nomination, and Nova Scotia charges{" "}
            <strong>no provincial application fee</strong> for an NSNP nomination (source: novascotia.ca, May 2026), though federal IRCC fees still apply. The crucial caveat is that the selected occupation list changes with
            labour-market need and has, at points, listed no occupations at all. So while the pathway exists, whether it
            is open for <em>your</em> job is the first thing to verify, and meeting the criteria is never the same as
            receiving an invitation.
          </p>
          <Callout type="brand" title="A base nomination, not a CRS boost">
            The Occupation in Demand stream does not add 600 CRS points. It is a base nomination: once Nova Scotia
            nominates you, you make a separate paper application to IRCC for permanent residence. Only Nova Scotia&apos;s
            enhanced, Express Entry-aligned selections carry the +600 boost.
          </Callout>

          <h2>Which occupations are &quot;in demand&quot; in Nova Scotia?</h2>
          <p>
            Nova Scotia selects a short list of <strong>Nova Scotia in-demand jobs</strong> for permanent residence based
            on provincial labour-market need. Historically, that list has centred on intermediate-skilled roles that
            other NSNP streams do not reach as easily. The table below shows representative examples of the kinds of
            occupations the province has selected. It is illustrative, not the live list, because Nova Scotia adds and
            removes occupations as needs shift.
          </p>
          <DataTable
            headers={["Example occupation", "NOC TEER", "Typical employers"]}
            rows={[
              ["Nurse aides, orderlies & patient service associates (NOC 33102)", "TEER 3", "Long-term care homes, hospitals, home-care agencies"],
              ["Transport-truck drivers (NOC 73300)", "TEER 3", "Trucking and logistics carriers"],
              ["Food and beverage servers (NOC 65200)", "TEER 5", "Restaurants, hotels, food-service operators"],
              ["Food counter attendants & kitchen helpers (NOC 65201)", "TEER 5", "Quick-service and food-service businesses"],
              ["Light-duty cleaners (NOC 65310)", "TEER 5", "Facilities, hospitality and cleaning contractors"],
              ["Construction trades helpers & labourers (NOC 75110)", "TEER 5", "Construction and trades employers"],
            ]}
            caption="Illustrative examples of in-demand occupations Nova Scotia has selected (NOC 2021 codes). This is NOT the live list, selected occupations change and have at times been empty. Confirm the current list on novascotia.ca before relying on it."
          />
          <Callout type="warning" title="The list changes, and can be empty">
            Do not build an application around an occupation without checking it is currently selected. Nova Scotia has,
            at times, had no occupations open under the Occupation in Demand sub-stream. A source listing fixed
            &quot;in-demand&quot; jobs without a date is unreliable, figures and lists here change frequently.
          </Callout>

          <h2>What are the Occupation in Demand eligibility requirements?</h2>
          <p>
            <strong>Eligibility</strong> rests on a connected set of requirements you must meet when you apply. The exact
            thresholds are set by Nova Scotia and can differ by occupation, so treat the summary below as a starting
            point and confirm the controlling criteria on novascotia.ca. Missing a single element can sink an otherwise
            strong file: the wrong NOC code, a job that is seasonal rather than permanent, or a language band one short.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Job offer", "A full-time, permanent (non-seasonal) job offer from an eligible Nova Scotia employer in a currently selected in-demand occupation"],
              ["Selected occupation", "Your offered occupation must be on Nova Scotia's current Occupation in Demand list (the list changes and can be empty)"],
              ["Work experience", "Recent, relevant work experience in the offered occupation, typically about a year within the past few years"],
              ["Language", "Approved English or French test meeting the minimum CLB for the stream (historically around CLB 5); valid two years"],
              ["Education", "At least high-school completion; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Age & intent", "Within the stream's age range and a genuine intention to live and work in Nova Scotia"],
              ["Settlement funds", "Proof of funds to settle, unless already legally working in Nova Scotia"],
            ]}
            caption="Nova Scotia Occupation in Demand core eligibility, as a general guide (novascotia.ca, May 2026). Requirements change and vary by occupation, verify the official criteria before applying."
          />

          <h2>How does Occupation in Demand differ from the Skilled Worker stream?</h2>
          <p>
            The Occupation in Demand sub-stream sits inside the broader{" "}
            <a href="/pnp/nova-scotia/skilled-worker">NSNP Skilled Worker</a> pathway, and the two share most mechanics:
            both are <strong>base nominations</strong>, both require a permanent Nova Scotia job offer, and both route
            through a separate IRCC application. The difference is scope. The standard Skilled Worker route covers a wide
            band of skilled occupations, while Occupation in Demand is restricted to the province&apos;s short list of
            selected, often intermediate-skilled jobs, meaning the right route for you depends on your specific NOC code
            and whether it is currently selected.
          </p>
          <p>
            If your occupation is not on the in-demand list, the standard Skilled Worker stream may still fit. And if you
            do not have a Nova Scotia job offer at all, the enhanced{" "}
            <a href="/pnp/nova-scotia/labour-market-priorities">Labour Market Priorities</a> approach can sometimes
            invite Express Entry candidates without a standing offer. Not sure where your federal score stands? Our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> is a good first check.
          </p>

          <h2>How to apply to the Occupation in Demand stream</h2>
          <p>
            <strong>How to apply</strong> follows the NSNP expression-of-interest sequence. Because Nova Scotia charges no
            provincial application fee, your costs at the provincial stage are mainly your documents and time; the federal
            IRCC permanent-residence fees come later and are separate. All figures and timelines change, so confirm the
            current position on novascotia.ca before you apply.
          </p>
          <Steps
            steps={[
              { title: "Confirm your occupation is selected", desc: "Check that your offered occupation is currently on Nova Scotia's Occupation in Demand list, it changes and has at times been empty." },
              { title: "Secure a qualifying job offer", desc: "Obtain a full-time, permanent (non-seasonal) job offer from an eligible Nova Scotia employer in that occupation." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, obtain an ECA for foreign education, and collect job-offer and work-experience evidence." },
              { title: "Submit your expression of interest", desc: "Create and submit your NSNP expression of interest; Nova Scotia ranks candidates and invites the strongest profiles in periodic rounds." },
              { title: "Apply for nomination & get nominated", desc: "If invited, file a complete nomination application within the stated window. On approval, Nova Scotia nominates you, with no provincial application fee." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="info" title="Eligibility does not guarantee an invitation">
            Nova Scotia runs a ranked expression-of-interest system. Meeting every requirement places you in the pool,
            but the province invites only selected profiles in each round. We never present a place as guaranteed, and
            no honest consultant should.
          </Callout>

          <h2>How Wild Mountain helps with your Occupation in Demand application</h2>
          <p>
            We start by confirming the part most applicants get wrong: whether your occupation is actually on Nova
            Scotia&apos;s current in-demand list, since it changes and can be empty. From there, our team, led by a
            licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), checks your job
            offer, NOC code, language and experience against the live criteria, prepares an expression of interest and
            nomination application that stands up to scrutiny, and represents you with the province and with IRCC. We work
            entirely online and are not affiliated with any government. Sound positioning is
            where good advice earns its keep.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own{" "}
            <strong>Nova Scotia Occupation in Demand</strong> application an expert check before you submit. Figures here
            are current to 2026, and the selected occupation list can change at any time, so we always confirm the
            live novascotia.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Is your occupation in demand in Nova Scotia?"
        sub="Get started with a licensed RCIC for an honest read on whether the Occupation in Demand stream is open for your job and offer."
      />
    </>
  );
}
