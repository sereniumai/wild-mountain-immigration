import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/prince-edward-island/labour-impact";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "PEI Labour Impact Category, 2026 Guide",
  titleAbsolute: "PEI PNP Labour Impact Category: 2026 Guide",
  description:
    "PEI Labour Impact Category 2026: Skilled Worker, Critical Worker and International Graduate sub-streams, the PEI job offer rule and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "PEI Labour Impact Category",
    "PEI Skilled Worker",
    "PEI Critical Worker",
    "PEI International Graduate",
    "PEI job offer PR",
  ],
});

const faqs = [
  {
    q: "What is the PEI Labour Impact Category?",
    a: "The PEI Labour Impact Category is the base, employer-driven part of the Prince Edward Island Provincial Nominee Program for workers. It groups three sub-streams, Skilled Worker, Critical Worker and International Graduate, that all require a job offer from a Prince Edward Island employer. Because it is a base category, a Labour Impact nomination does not add CRS points; instead you apply separately to IRCC for permanent residence on a paper application. Selection runs through an Expression of Interest, and meeting the criteria does not guarantee an invitation.",
  },
  {
    q: "Do I need a PEI job offer for the Labour Impact Category?",
    a: "Yes. Every Labour Impact sub-stream is built around a genuine, full-time job offer from a Prince Edward Island employer; there is no route within this category that skips the offer. A valid PEI job offer is the foundation of every Labour Impact application. For the Skilled Worker sub-stream where you are still outside Canada, the PEI employer must obtain authorization from the PEI Office of Immigration before issuing the offer. The Critical Worker sub-stream generally also expects you to have already worked for that employer for at least six months, often on a PEI work permit, which is one way to build the qualifying work history that route needs.",
  },
  {
    q: "What is the difference between the Skilled Worker and Critical Worker sub-streams?",
    a: "The Skilled Worker sub-stream is for higher-skilled roles (generally NOC TEER 0-3) and applies whether you are already working in PEI or still abroad. The Critical Worker sub-stream covers lower-skilled (TEER 4-5) intermediate roles such as truck drivers, labourers, food and beverage servers and housekeeping staff; it generally requires at least six months of full-time work with your PEI employer before you can be nominated. Both are base nominations leading to a separate IRCC application. We confirm which sub-stream matches your occupation.",
  },
  {
    q: "Who qualifies for the PEI International Graduate sub-stream?",
    a: "The International Graduate sub-stream is for people who have completed a credential at a publicly funded Prince Edward Island institution and hold a full-time job offer from a PEI employer in a field related to their studies. It is not open to graduates of institutions outside PEI or of private colleges. Like the other Labour Impact routes it is a base nomination, so after PEI nominates you, you apply to IRCC for permanent residence separately. Confirm current institution and field requirements on princeedwardisland.ca.",
  },
  {
    q: "Does a Labour Impact nomination add CRS points?",
    a: "No. The Labour Impact Category is a base, or 'paper', nomination. It does not add 600 CRS points to a federal Express Entry profile, that boost only comes from the separate enhanced PEI Express Entry stream. Once PEI nominates you under Labour Impact, you submit a standalone permanent-residence application directly to IRCC, which is generally processed more slowly than an Express Entry application. If you have a federal profile, our free CRS calculator can show whether the enhanced route is also open to you.",
  },
  {
    q: "How do I apply for the PEI Labour Impact Category?",
    a: "You start by securing an eligible job offer from a Prince Edward Island employer, then submit a free Expression of Interest (EOI) to the PEI Office of Immigration describing your occupation, experience, language ability and ties to the island. PEI holds roughly monthly draws and invites the profiles that best fit its priority sectors. If invited, you file a complete application with supporting documents; once nominated, you apply to IRCC for permanent residence. The application fee for Labour Impact is around $300, separate from federal fees.",
  },
  {
    q: "Does meeting the Labour Impact criteria guarantee a nomination?",
    a: "No. PEI selects through an Expression of Interest system and concentrates invitations on its highest-priority sectors, healthcare, trades and construction, manufacturing and childcare, while sales and service occupations have been deprioritised. PEI also does not publish per-draw cut-off scores, so there is no public threshold to aim for. Meeting the basic Labour Impact eligibility places you in the pool but does not entitle you to an invitation. We give an honest read on how your occupation aligns before you invest time and fees.",
  },
];

export default function PeiLabourImpactPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "PEI Labour Impact Category, 2026 RCIC Guide",
            description:
              "PEI Labour Impact Category 2026: Skilled Worker, Critical Worker and International Graduate sub-streams, the PEI job offer rule and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "PEI Labour Impact Category application support",
            description:
              "PEI Labour Impact Category 2026: Skilled Worker, Critical Worker and International Graduate sub-streams, the PEI job offer rule and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="PEI PNP, Labour Impact"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Prince Edward Island", path: "/pnp/prince-edward-island" },
          { name: "Labour Impact", path: PATH },
        ]}
        title={<>PEI Labour Impact Category <span className="text-brand">explained</span></>}
        lede={
          <p>
            The <strong>PEI Labour Impact Category</strong> is the base, employer-driven route of the PEI PNP, three
            worker sub-streams that all need a Prince Edward Island job offer to reach permanent residence.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Which sub-stream fits you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Skilled Worker, Critical Worker or International Graduate, all need a PEI job offer. Get a licensed RCIC&apos;s read.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Prince Edward Island PNP", href: "/pnp/prince-edward-island", note: "The full PEI PNP overview" },
                { label: "PEI Express Entry", href: "/pnp/prince-edward-island/express-entry", note: "The enhanced +600 CRS route" },
                { label: "PEI Business Impact", href: "/pnp/prince-edward-island/business-impact", note: "The entrepreneur route" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other PEI employer route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The PEI Labour Impact Category is the base, employer-driven worker route of the Prince Edward Island PNP. It covers three sub-streams, Skilled Worker, Critical Worker and International Graduate, each of which needs a genuine PEI job offer and leads to permanent residence through a separate IRCC paper application. As a base category it adds no CRS points; selection runs through an Expression of Interest, and meeting the criteria does not guarantee an invitation. A licensed RCIC can confirm which sub-stream fits you."
            items={[
              <>The <strong>PEI Labour Impact Category</strong> is the <strong>base, employer-driven</strong> worker route of the PEI PNP.</>,
              <>It has <strong>three sub-streams</strong>, <strong>Skilled Worker</strong>, <strong>Critical Worker</strong> and <strong>International Graduate</strong>.</>,
              <>Every sub-stream needs a genuine <strong>job offer from a Prince Edward Island employer</strong> (PEI job offer PR).</>,
              <>It is <strong>base</strong>: a nomination adds <strong>no CRS points</strong> and leads to a separate IRCC paper application.</>,
              <>Selection runs through an <strong>Expression of Interest</strong> with no published cut-off, eligibility does not guarantee an invitation.</>,
            ]}
          />

          <h2>What is the PEI Labour Impact Category?</h2>
          <p>
            The <strong>PEI Labour Impact Category</strong> is the worker-focused, employer-driven part of the Prince
            Edward Island Provincial Nominee Program. It is a <strong>base</strong> category, which means a nomination
            does not add points to a federal Express Entry profile, instead it becomes your stepping stone to a separate
            permanent-residence application with IRCC. According to princeedwardisland.ca, the PEI PNP is organised into
            three categories: <strong>Labour Impact</strong> (covered here), Express Entry (the enhanced, federally
            aligned route) and Business Impact (for entrepreneurs).
          </p>
          <p>
            PEI&apos;s nomination space is modest. Its 2025 base allocation was roughly <strong>1,025
            nominations</strong> (with a possible top-up), and 2026 numbers remain tight after IRCC reduced provincial
            allocations nationwide (source: princeedwardisland.ca / IRCC, 2026). With limited spaces and a sector focus
            on healthcare, trades and construction, manufacturing and childcare, meeting the Labour Impact minimums is no
            longer the same as receiving an invitation. Figures and policies change frequently, so always verify the
            current rules before acting.
          </p>
          <Callout type="brand" title="Labour Impact is base, not enhanced">
            Every Labour Impact sub-stream is a base (&quot;paper&quot;) nomination: it adds <strong>no CRS
            points</strong> and leads to a separate, generally slower IRCC application. The +600 CRS boost only comes
            from the distinct <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a> stream. If you hold
            a federal profile, our <a href="/tools/crs-calculator">free CRS calculator</a> shows whether the enhanced
            route is also open to you.
          </Callout>

          <h2>What are the three Labour Impact sub-streams?</h2>
          <p>
            The Labour Impact Category is built around <strong>one shared requirement, a Prince Edward Island job
            offer, and three sub-streams</strong> tailored to different workers, sorted by the National Occupational
            Classification (NOC) and its TEER levels. The table below sets out who each is for and the key condition
            that defines it. Sub-streams and intakes change, so confirm current status on princeedwardisland.ca before
            you apply.
          </p>
          <DataTable
            headers={["Sub-stream", "Who it's for", "Defining condition"]}
            rows={[
              [
                "Skilled Worker",
                "Higher-skilled workers (generally NOC TEER 0–3) already in PEI, or still abroad, with a PEI job offer",
                "If applying from outside Canada, the PEI employer must get Office of Immigration authorization before issuing the offer",
              ],
              [
                "Critical Worker",
                "Intermediate / lower-skilled roles (NOC TEER 4–5) drawn from PEI's in-demand occupations, e.g. truck drivers, labourers, food-service and housekeeping staff",
                "Generally requires ≥6 months of full-time work with the PEI employer before nomination",
              ],
              [
                "International Graduate",
                "Graduates of a publicly funded PEI institution with a related full-time PEI job offer",
                "Studies must be at a publicly funded PEI institution; job offer in a related field",
              ],
            ]}
            caption="The three PEI Labour Impact sub-streams (princeedwardisland.ca, 2026). All are base nominations requiring a PEI job offer. Eligibility does not guarantee an invitation."
          />
          <Callout type="info" title="Critical Worker is NOC TEER 4–5, and needs time on the job">
            The Critical Worker sub-stream is the route for intermediate occupations that the higher-skilled Skilled
            Worker sub-stream excludes. PEI keeps its own Critical Worker occupations list of in-demand occupations:
            common examples include truck drivers, construction and farm labourers, food and beverage servers, light
            duty cleaners and housekeeping staff. Because these are lower-skilled (NOC TEER 4–5) roles, PEI generally
            wants to see <strong>at least six months of full-time employment</strong> with your PEI employer before it
            will nominate you.
          </Callout>

          <h2>What are the PEI Labour Impact eligibility requirements?</h2>
          <p>
            Requirements differ by sub-stream, but every Labour Impact route shares a core shape: a genuine{" "}
            <strong>job offer from a Prince Edward Island employer</strong>, qualifying work experience that matches the
            offered occupation, language results appropriate to your role, education or credentials suited to the job,
            and a genuine intention to live in PEI. The summary below covers the common requirements; the official,
            controlling criteria live on princeedwardisland.ca and are updated regularly.
          </p>
          <DataTable
            headers={["Requirement", "What Labour Impact asks for"]}
            rows={[
              ["PEI job offer", "Full-time, genuine offer from a Prince Edward Island employer; for Skilled Workers abroad the employer must get Office of Immigration authorization first"],
              ["Work experience", "Recent, relevant experience matching the offered occupation; Critical Workers generally need ≥6 months with the PEI employer"],
              ["Language", "An approved English or French test result appropriate to your occupation and its NOC TEER level (higher for PEI Skilled Worker stream requirements, lower for Critical Worker)"],
              ["Education", "Education or credentials suited to the job; International Graduates must have studied at a publicly funded PEI institution"],
              ["Intent to reside", "A genuine intention to live and work in Prince Edward Island"],
            ]}
            caption="Core PEI Labour Impact eligibility, accurate as of May 2026 (princeedwardisland.ca). Requirements change, verify the official criteria before applying."
          />

          <h2>Labour Impact vs PEI Express Entry, which route is yours?</h2>
          <p>
            The clearest way to place the Labour Impact Category is to contrast it with PEI&apos;s enhanced option. The{" "}
            <strong>Labour Impact Category is base</strong>: you do not need a federal Express Entry profile, and a
            nomination leads to a separate IRCC paper application rather than adding points. The{" "}
            <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a> stream is enhanced: you must already
            hold an active federal Express Entry profile, and a PEI nomination adds <strong>600 CRS points</strong>,
            putting most candidates well above the typical federal draw cut-off. Many Labour Impact applicants do not have an
            <a href="/express-entry"> Express Entry</a> profile at all, which is exactly what this category is for. If you
            have a job offer from a designated PEI employer, the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> is a further employer-driven route
            worth comparing against a base Labour Impact nomination.
          </p>

          <h2>How do you apply for the PEI Labour Impact Category?</h2>
          <p>
            <strong>Applying through the Labour Impact Category</strong> follows the standard PEI PNP sequence, job
            offer first, then a free Expression of Interest, then an invitation and a full application. The steps below
            show the path from securing an offer to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Secure a PEI job offer", desc: "Obtain a genuine full-time offer from a Prince Edward Island employer. For Skilled Workers abroad, the employer must first get Office of Immigration authorization." },
              { title: "Choose your sub-stream", desc: "Confirm whether you fit Skilled Worker, Critical Worker (TEER 4–5, ≥6 months on the job) or International Graduate (publicly funded PEI institution)." },
              { title: "Submit your free Expression of Interest", desc: "Lodge an EOI with the PEI Office of Immigration setting out your occupation, experience, language ability and ties to PEI. It stays valid about six months." },
              { title: "Receive an invitation", desc: "PEI holds roughly monthly draws and invites profiles that best match its priority sectors. There is no published cut-off, eligibility does not guarantee an invitation." },
              { title: "Apply for nomination", desc: "File a complete application with supporting documents (around $300 for Labour Impact). On approval, PEI nominates you for permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "Submit your separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="warning" title="No published cut-offs, and sales/service deprioritised">
            PEI publishes no per-draw cut-off scores, so eligibility alone tells you little about your real chances. The
            province prioritises healthcare, trades and construction, manufacturing and childcare, while <strong>sales
            and service occupations have been deprioritised</strong>. We give you a candid read on how your occupation
            aligns before you invest time and fees.
          </Callout>

          <h2>How long does the Labour Impact Category take, and what does it cost?</h2>
          <p>
            Timelines run in stages. How long you wait for an invitation depends on how well your occupation matches
            PEI&apos;s priorities and the pace of the monthly draws, there is no published cut-off to predict against.
            After an invitation you assemble and submit your provincial application; once nominated, a base, paper-based
            Labour Impact application to IRCC generally takes longer than an enhanced Express Entry application. Most
            applicants should plan for the better part of a year from EOI to permanent residence, sometimes more.
          </p>
          <p>
            On fees, submitting an EOI is <strong>free</strong>, and the Labour Impact application fee is around{" "}
            <strong>$300</strong>. These provincial amounts are separate from the IRCC permanent-residence fees you pay
            at the federal stage, and all figures change, confirm current fees on princeedwardisland.ca before applying.
          </p>

          <h2>How Wild Mountain Immigration helps with the PEI Labour Impact Category</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Prince Edward Island&apos;s current priority sectors,
            identifies which Labour Impact sub-stream, Skilled Worker, Critical Worker or International Graduate, gives
            you the strongest realistic chance, and builds an EOI that positions your PEI job offer well. Because this is
            PEI job offer immigration, we look at the whole path: for a Critical Worker route we can map how a PEI work
            permit lets you build the six months of qualifying work history with your employer before nomination. Where a
            federal profile or a designated employer points to{" "}
            <a href="/pnp/prince-edward-island/express-entry">PEI Express Entry</a> or the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> instead, we will say so. Because PEI
            publishes no cut-off scores, that honest sector read is where good advice earns its keep. Working under a
            licensed RCIC (CICC #R706497), our team prepares a nomination and federal application that stand up to
            scrutiny and represents you with the province and with IRCC, online from start to finish.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            PEI Labour Impact Category application an expert check before you submit. Figures here are current to 2026
            and change, so we always confirm the live princeedwardisland.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Find out which Labour Impact sub-stream fits you"
        sub="Get started with a licensed RCIC for an honest read on your PEI job offer, the right Labour Impact sub-stream and your route to permanent residence."
      />
    </>
  );
}
