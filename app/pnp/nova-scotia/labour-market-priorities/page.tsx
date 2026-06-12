import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia/labour-market-priorities";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia Labour Market Priorities (NSNP LMP) 2026",
  titleAbsolute: "NSNP Labour Market Priorities: NS 2026",
  description:
    "Nova Scotia Labour Market Priorities 2026: how the NSNP LMP draws from Express Entry, issues Letters of Interest and adds 600 CRS. RCIC-led.",
  path: PATH,
  keywords: [
    "Nova Scotia Labour Market Priorities",
    "NSNP LMP",
    "Nova Scotia Express Entry",
    "Letter of Interest",
    "NSNP +600 CRS",
  ],
});

const faqs = [
  {
    q: "What is the Nova Scotia Labour Market Priorities stream?",
    a: "Labour Market Priorities is Nova Scotia's enhanced, Express Entry-aligned approach to selecting candidates whose occupation, experience and language match a current provincial priority. The province searches the federal Express Entry pool and issues a Letter of Interest to matching candidates, inviting them to apply for a provincial nomination. Because it is enhanced, a resulting nomination adds 600 CRS points to your Express Entry profile. As of 2026 it runs through Nova Scotia's broader Express Entry selection rather than as a separate standalone stream.",
  },
  {
    q: "Do I need a job offer for Nova Scotia Labour Market Priorities?",
    a: "Usually not. The Labour Market Priorities approach is designed to let Nova Scotia invite candidates already in the Express Entry pool whose occupation matches a provincial priority, often without a standing Nova Scotia job offer. That is what distinguishes it from the employer-driven Skilled Worker route. The exact criteria for each Letter of Interest round, including any occupation, language or experience requirements, are set by the province and change, so always confirm the current targeting on novascotia.ca.",
  },
  {
    q: "How does a Letter of Interest work?",
    a: "A Letter of Interest (LOI) is an invitation from Nova Scotia to a candidate in the federal Express Entry pool. You cannot apply for it directly, the province searches the pool against its current priority criteria and issues LOIs to matching candidates through their Express Entry account. If you receive one, you have a limited window to submit a full provincial application. Receiving a Letter of Interest is not a nomination and not permanent residence; it is an invitation to apply for the nomination.",
  },
  {
    q: "Does a Labour Market Priorities nomination add 600 CRS points?",
    a: "Yes. Labour Market Priorities is an enhanced, Express Entry-aligned selection, so a provincial nomination adds 600 points to your Comprehensive Ranking System score. That boost lifts most candidates well above recent cut-offs, putting them in a strong position for an Invitation to Apply at the next federal Express Entry draw. IRCC issues that invitation, then processes the permanent-residence application, usually within about six months. The 600 points apply only because the route is enhanced; Nova Scotia's base streams add no CRS points.",
  },
  {
    q: "How do I get selected for Nova Scotia Labour Market Priorities?",
    a: "You must first have a valid, active profile in the federal Express Entry pool. Nova Scotia then searches that pool when it runs a Labour Market Priorities selection and issues Letters of Interest to candidates who match its current targeted occupations and criteria. You cannot apply to the province directly for an LOI. The best thing you can do is build the strongest possible Express Entry profile in a targeted occupation, keep your language results current, and make sure your profile is accurate and complete.",
  },
  {
    q: "Has Nova Scotia changed Labour Market Priorities for 2026?",
    a: "Yes. In its early-2026 stream consolidation, Nova Scotia folded Labour Market Priorities into its broader Express Entry-aligned selection rather than running it as a separate standalone stream. The underlying mechanism, searching the Express Entry pool and issuing Letters of Interest against provincial priorities, survives, and existing expressions of interest remain valid. Because the packaging changed, older guides that describe it as a distinct stream are now out of date; verify the current structure on novascotia.ca.",
  },
  {
    q: "Do you guarantee a Letter of Interest or a nomination?",
    a: "No. No licensed consultant can guarantee a Letter of Interest, a nomination or a permanent-residence outcome, those decisions rest with the Province of Nova Scotia and IRCC, and the province controls which occupations it targets in each round. What we do is assess whether your profile fits Nova Scotia's priorities, help you build the strongest possible Express Entry profile, and prepare an application that stands up to scrutiny. Wild Mountain Immigration is not affiliated with any government and never promises approvals.",
  },
];

export default function LabourMarketPrioritiesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia Labour Market Priorities (NSNP LMP), 2026 Guide",
            description:
              "Nova Scotia Labour Market Priorities 2026: how the NSNP LMP draws from Express Entry, issues Letters of Interest and adds 600 CRS. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Nova Scotia Labour Market Priorities application support",
            description:
              "Nova Scotia Labour Market Priorities 2026: how the NSNP LMP draws from Express Entry, issues Letters of Interest and adds 600 CRS. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Nova Scotia (NSNP), Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Nova Scotia (NSNP)", path: "/pnp/nova-scotia" },
          { name: "Labour Market Priorities", path: PATH },
        ]}
        title={<>Nova Scotia Labour Market Priorities <span className="text-brand">(NSNP LMP)</span></>}
        lede={
          <p>
            <strong>Nova Scotia Labour Market Priorities</strong> draws from the Express Entry pool. The province issues a
            Letter of Interest to candidates in targeted occupations, and an enhanced nomination adds 600 CRS. This
            RCIC-reviewed guide explains how LOIs work, who qualifies and exactly how to apply.
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
                Labour Market Priorities draws from Express Entry, see your Comprehensive Ranking System score in two
                minutes.
              </p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia Nominee Program (NSNP)", href: "/pnp/nova-scotia", note: "Every Nova Scotia stream explained" },
                { label: "Experience: Express Entry", href: "/pnp/nova-scotia/experience-express-entry", note: "The other enhanced NS route" },
                { label: "Express Entry", href: "/express-entry", note: "The federal pool LMP draws from" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Nova Scotia Labour Market Priorities (NSNP LMP) is an enhanced, Express Entry-aligned route within the Nova Scotia Nominee Program. It selects candidates whose occupation, experience and language match a current provincial priority. The province searches the federal Express Entry pool and issues a Letter of Interest to matching candidates, inviting them to apply. A resulting nomination adds 600 CRS points toward permanent residence, putting most candidates well above the typical federal draw cut-off."
            items={[
              <><strong>Nova Scotia Labour Market Priorities (NSNP LMP)</strong> is an enhanced, Express Entry-aligned selection. Nova Scotia searches the <strong>Express Entry pool</strong> and issues <strong>Letters of Interest</strong>.</>,
              <>A Labour Market Priorities nomination <strong>adds 600 CRS points</strong>, lifting most candidates well above recent federal draw cut-offs, though IRCC issues any Invitation to Apply.</>,
              <>It often requires <strong>no standing job offer</strong>, selection is driven by targeted occupations matching a provincial priority.</>,
              <>You <strong>cannot apply directly</strong>: you must have an active Express Entry profile, and the province invites matching candidates by LOI.</>,
              <>Nova Scotia <strong>folded LMP into its broader Express Entry selection</strong> in early 2026; existing expressions of interest stay valid.</>,
            ]}
          />

          <h2>What is Nova Scotia Labour Market Priorities?</h2>
          <p>
            <strong>Nova Scotia Labour Market Priorities</strong> (often shortened to <strong>NSNP LMP</strong>) is the
            province&apos;s enhanced, <a href="/express-entry">Express Entry</a>-aligned way of selecting skilled
            candidates whose occupation, experience and language match a current Nova Scotia labour-market priority.
            Rather than waiting for applications, Nova Scotia reaches into the federal Express Entry pool, searches it
            against its targeted criteria, and issues a <strong>Letter of Interest</strong> to candidates who fit.</p>
          <p>If you
            accept and are nominated, the nomination adds <strong>600 CRS points</strong> to your Comprehensive Ranking
            System score. Nova Scotia charges <strong>no provincial application fee</strong> for an NSNP nomination
            (source: novascotia.ca, May 2026), one of the few provinces that does not, though federal IRCC fees still
            apply.
          </p>
          <p>
            Because it is <strong>enhanced</strong>, Labour Market Priorities behaves very differently from Nova
            Scotia&apos;s base streams. A base nomination, such as the employer-driven{" "}
            <a href="/pnp/nova-scotia/skilled-worker">Skilled Worker</a> route, leads to a separate paper application to
            IRCC and earns no CRS points. An LMP nomination, by contrast, plugs straight into your existing Express Entry
            profile, which is why the 600-point boost matters so much.
          </p>
          <Callout type="brand" title="LMP is an Express Entry route, you can't apply to it directly">
            Labour Market Priorities works by Nova Scotia searching the Express Entry pool and issuing Letters of
            Interest. There is no separate online form to &ldquo;apply for LMP.&rdquo; If you do not have an active
            Express Entry profile, the province cannot find you, so building that profile is the essential first step.
          </Callout>

          <h2>How does Nova Scotia draw from the Express Entry pool?</h2>
          <p>
            The mechanism is what makes <strong>Nova Scotia Express Entry</strong> selection distinctive. When the
            province decides to run a Labour Market Priorities round, it defines the criteria it wants, typically one or
            more targeted occupations (by <abbr title="National Occupational Classification">NOC</abbr> code), a minimum
            language level, and sometimes a minimum CRS range or specific work experience. It then searches the federal
            pool for candidates who match and issues each of them a Letter of Interest through their Express Entry
            account. You do not bid, queue or submit anything in advance beyond keeping a strong, accurate profile in the
            pool.
          </p>
          <p>
            This is fundamentally different from an employer-driven stream, where a Nova Scotia job offer is the trigger.
            Under Labour Market Priorities, the trigger is the <em>match</em> between your profile and the
            province&apos;s current priorities, which is why the route can invite candidates{" "}
            <strong>without a standing job offer</strong>. The trade-off is that you have little control over the timing
            or over which <strong>Nova Scotia in-demand occupations</strong> a round targets. The province sets those
            priority occupations, and they change.
          </p>
          <Callout type="info" title="Targeted occupations change without notice">
            Nova Scotia does not commit to a fixed schedule or a permanent occupation list for Labour Market Priorities
            rounds. An occupation targeted in one round may not appear in the next. Treat any occupation list as a
            snapshot, and verify the current targeting on novascotia.ca before relying on it.
          </Callout>

          <h2>What is a Letter of Interest, and how does it work?</h2>
          <p>
            A <strong>Letter of Interest</strong> (LOI) is the invitation Nova Scotia sends to a matching candidate in
            the Express Entry pool. It is delivered to your Express Entry account, and it signals that the province would
            like you to apply for a provincial nomination. Crucially, a Letter of Interest is <em>not</em> a nomination
            and <em>not</em> permanent residence, it is an invitation to begin the nomination application, usually within
            a limited window.
          </p>
          <p>
            The table below sets out the stages in plain terms, because the language around &ldquo;interest,&rdquo;
            &ldquo;invitation&rdquo; and &ldquo;nomination&rdquo; is easy to conflate.
          </p>
          <DataTable
            headers={["Stage", "What it means", "What it is NOT"]}
            rows={[
              ["Express Entry profile", "Your active profile sits in the federal pool, scored by CRS", "Not a Nova Scotia application, the province finds you here"],
              ["Letter of Interest (LOI)", "Nova Scotia invites you to apply for a nomination because you match a priority", "Not a nomination, not 600 CRS points yet, not PR"],
              ["Provincial application", "You submit a full NSNP application within the stated window", "Not automatic, incomplete or late files are refused"],
              ["Nomination", "Nova Scotia nominates you; 600 CRS points are added to your Express Entry profile", "Not permanent residence, IRCC still decides"],
              ["Invitation to Apply (ITA)", "With +600 CRS you are invited at the next federal Express Entry draw", "Not granted PR, you still file the federal application"],
              ["Permanent residence", "IRCC approves your Express Entry PR application", "Not guaranteed, subject to medical, security and admissibility"],
            ]}
            caption="The Labour Market Priorities / Letter of Interest pathway, stage by stage (novascotia.ca, May 2026). Each stage is a separate decision; figures and criteria change."
          />
          <Callout type="warning" title="Eligibility does not guarantee a Letter of Interest">
            Even a strong, perfectly eligible profile in a targeted occupation may never receive an LOI, the province
            chooses how many to issue and when, based on its labour-market needs. Be wary of any source implying that
            meeting the criteria guarantees an invitation or a nomination. It does not.
          </Callout>

          <h2>Who is eligible for Nova Scotia Labour Market Priorities?</h2>
          <p>
            Because Labour Market Priorities is enhanced, eligibility rests on two layers: you must satisfy the federal{" "}
            <a href="/express-entry">Express Entry</a> minimums to be in the pool at all, and then you must match Nova
            Scotia&apos;s priority criteria for a given round. The summary below shows the building blocks; the
            controlling criteria live on novascotia.ca and change with each round.
          </p>
          <DataTable
            headers={["Requirement", "What Labour Market Priorities looks for"]}
            rows={[
              ["Express Entry profile", "An active, valid profile in the federal Express Entry pool (CEC, FSW or FST eligible)"],
              ["Targeted occupation", "Your primary occupation matches a NOC code Nova Scotia is targeting in that round (lists change)"],
              ["Language", "Approved English or French test results meeting the federal program and any round-specific minimum (often CLB 7+)"],
              ["Work experience", "Skilled work experience consistent with your Express Entry program and the province's criteria"],
              ["Education", "Canadian credential or a foreign credential with an Educational Credential Assessment (ECA)"],
              ["Settlement funds", "Proof of funds as required for your Express Entry program (unless exempt)"],
              ["Job offer", "Usually not required, LMP is designed to invite without a standing Nova Scotia job offer"],
            ]}
            caption="Nova Scotia Labour Market Priorities core eligibility building blocks, accurate as of May 2026 (novascotia.ca). Round-specific criteria change, verify before relying on them."
          />
          <Callout type="info" title="Language is often the deciding factor">
            Many Labour Market Priorities rounds have targeted candidates with higher language scores, frequently
            CLB 7 or above. Lifting your weakest of the four abilities (reading, writing, listening, speaking) is one of
            the most reliable ways to improve both your CRS and your chances of matching a priority round.
          </Callout>

          <h2>How does the +600 CRS boost work?</h2>
          <p>
            The reason candidates value an enhanced route like Labour Market Priorities is the{" "}
            <strong>+600 CRS provincial nomination boost</strong>. Your Comprehensive Ranking System score is what
            determines whether you are invited at a federal Express Entry draw. A provincial nomination adds 600 points
            on top of your existing score, which lifts virtually any candidate above the Express Entry draw cut-off. The
            example below illustrates the effect.
          </p>
          <DataTable
            headers={["Candidate", "Base CRS", "After +600 nomination", "Likely outcome"]}
            rows={[
              ["Example A", "452", "1,052", "Invited at the next general Express Entry draw"],
              ["Example B", "388", "988", "Invited at the next general Express Entry draw"],
              ["Example C", "501", "1,101", "Invited at the next general Express Entry draw"],
            ]}
            caption="Illustrative only, how a +600 CRS nomination affects a profile (concept per IRCC Express Entry rules). Actual draw cut-offs vary; an invitation is never guaranteed before a nomination is issued."
          />
          <p>
            Note that the 600 points only land <em>after</em> Nova Scotia nominates you, not when you receive a Letter
            of Interest. The LOI is the invitation to apply for the nomination; the nomination is what triggers the boost.
            Wondering where your score sits today? Try our <a href="/tools/crs-calculator">free CRS calculator</a> before
            you do anything else.
          </p>

          <h2>How does LMP differ from Nova Scotia&apos;s other routes?</h2>
          <p>
            It helps to place Labour Market Priorities next to Nova Scotia&apos;s other enhanced route and its main base
            route. Both LMP and{" "}
            <a href="/pnp/nova-scotia/experience-express-entry">Experience: Express Entry</a> are enhanced and add 600
            CRS; the difference is that Experience targets candidates with Nova Scotia or Canadian skilled experience,
            while Labour Market Priorities targets occupations the province needs, often without requiring local
            experience or a job offer. The base{" "}
            <a href="/pnp/nova-scotia/skilled-worker">Skilled Worker</a> route is a different animal: it is
            employer-driven and adds no CRS points.
          </p>
          <DataTable
            headers={["Feature", "Labour Market Priorities", "Experience: Express Entry", "Skilled Worker"]}
            rows={[
              ["Type", "Enhanced", "Enhanced", "Base"],
              ["Express Entry profile", "Required", "Required", "Not required"],
              ["Effect of nomination", "+600 CRS", "+600 CRS", "Separate IRCC paper application"],
              ["Job offer", "Usually not required", "Not always required", "Required"],
              ["Main trigger", "Occupation matches a provincial priority", "NS / Canadian skilled experience", "Nova Scotia job offer"],
            ]}
            caption="Labour Market Priorities vs Experience: Express Entry vs Skilled Worker (novascotia.ca, May 2026). Eligibility does not guarantee an invitation."
          />

          <h2>How to apply for Nova Scotia Labour Market Priorities</h2>
          <p>
            <strong>How to apply</strong> for Labour Market Priorities is really a matter of positioning yourself to be
            found, then responding well if a Letter of Interest arrives. The steps below show the path from the Express
            Entry pool to a federal permanent-residence decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm Express Entry eligibility", desc: "Make sure you qualify for a federal program (CEC, FSW or FST), take an approved language test, and get an ECA for foreign education." },
              { title: "Create your Express Entry profile", desc: "Submit an accurate, complete profile so it sits in the federal pool. Nova Scotia can only find and match candidates who are already there." },
              { title: "Optimise for a targeted occupation", desc: "Confirm your primary NOC reflects your real experience and aligns with Nova Scotia's priorities; lift your weakest language ability to strengthen the match." },
              { title: "Receive a Letter of Interest", desc: "If you match a Labour Market Priorities round, Nova Scotia issues an LOI to your Express Entry account. You cannot apply for this directly." },
              { title: "Submit your provincial application", desc: "Within the stated window, file a complete NSNP application with all supporting documents. Nova Scotia charges no provincial application fee." },
              { title: "Get nominated, then apply to IRCC", desc: "On nomination, 600 CRS points are added; you are invited at the next federal draw and file your Express Entry PR application. IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with Labour Market Priorities</h2>
          <p>
            The hardest part of Labour Market Priorities is that you cannot apply for it directly, your only lever is
            how well your <a href="/express-entry">Express Entry</a> profile matches Nova Scotia&apos;s shifting
            priorities.</p>
          <p>Our team is led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497); we assess whether your
            occupation and profile fit the province&apos;s targeting, build the strongest possible Express Entry profile,
            and, if a Letter of Interest arrives, prepare a nomination application that stands up to scrutiny. We catch
            the avoidable mistakes, a mis-coded NOC, a language band one short, an out-of-date profile, that quietly cost
            people invitations.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Express Entry profile and Labour Market Priorities response an expert check before you submit. We work
            entirely online, are not affiliated with any government; figures and targeted
            occupations change, so we always confirm the live novascotia.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Could Nova Scotia send you a Letter of Interest?"
        sub="Get started with a licensed RCIC for an honest read on whether your Express Entry profile fits Nova Scotia's Labour Market Priorities."
      />
    </>
  );
}
