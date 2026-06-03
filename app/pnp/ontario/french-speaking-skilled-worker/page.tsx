import type { Metadata } from "next";
import { Languages } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/ontario/french-speaking-skilled-worker";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Ontario French-Speaking Skilled Worker Stream",
  titleAbsolute: "OINP French-Speaking Skilled Worker Stream 2026",
  description:
    "Ontario French-Speaking Skilled Worker Stream 2026: the OINP French Express Entry route, NCLC 7 / CLB 6 language rules, +600 CRS boost and how to apply.",
  path: PATH,
  keywords: [
    "Ontario French-Speaking Skilled Worker Stream",
    "OINP French stream",
    "French Express Entry Ontario",
    "bilingual immigration Ontario",
    "+600 CRS",
  ],
});

const faqs = [
  {
    q: "What is the Ontario French-Speaking Skilled Worker Stream?",
    a: "It is an enhanced (Express Entry-aligned) stream of the Ontario Immigrant Nominee Program (OINP) for French-speaking skilled workers who also have strong English. You must already have a profile in the federal Express Entry pool. Ontario searches that pool and issues a Notification of Interest (NOI) to candidates who meet the stream's French and English language, education and work-experience criteria. An OINP nomination then adds 600 CRS points, well above recent Express Entry cut-offs, though IRCC still issues the Invitation to Apply at the next draw. Because Ontario is redesigning the OINP in 2026, confirm the current rules on ontario.ca before relying on them.",
  },
  {
    q: "What language scores do I need for the OINP French stream?",
    a: "Historically the stream required French at NCLC 7 or higher across all four abilities (reading, writing, listening and speaking), plus English at CLB 6 or higher across all four. French is your primary language and English your second, both are tested on your lowest of four abilities, so a single weak skill can drop you below the bar. You must take an approved French test (TEF Canada or TCF Canada) and an approved English test (IELTS General or CELPIP-General); results are valid for two years. With the 2026 OINP redesign underway, verify the current thresholds on ontario.ca.",
  },
  {
    q: "Do I need a job offer for the French-Speaking Skilled Worker Stream?",
    a: "No. Like Ontario's other Human Capital streams, this is a no-job-offer pathway focused on your Express Entry profile, language ability, education and skilled work experience rather than an employer offer. That makes it attractive to bilingual candidates abroad. You do, however, need an active Express Entry profile and you must meet the federal Federal Skilled Worker, Canadian Experience Class or Federal Skilled Trades criteria to be in the pool in the first place.",
  },
  {
    q: "How does the +600 CRS boost work?",
    a: "The French-Speaking Skilled Worker Stream is enhanced, meaning it is linked to federal Express Entry. If Ontario issues you a Notification of Interest and you are nominated, the nomination adds 600 points to your Comprehensive Ranking System (CRS) score. That boost lifts most candidates well above the cut-off, so in recent draws it has been more than enough to earn an Invitation to Apply at the next Express Entry draw, though IRCC still issues it. The nomination itself is not permanent residence, IRCC still makes the final decision on a separate PR application.",
  },
  {
    q: "How are candidates selected, is it first-come or points-ranked?",
    a: "Ontario selects from the Express Entry pool by issuing Notifications of Interest (NOIs) in periodic, targeted rounds. It looks at the whole pool against the stream's criteria and a CRS range it sets for each round, then notifies eligible French-speaking candidates. Being eligible places you in scope but does not guarantee an NOI, Ontario controls the timing and the targeting. Once notified, you have a limited window to submit your OINP application, so your documents need to be ready in advance.",
  },
  {
    q: "Is the OINP French stream changing in 2026?",
    a: "Yes. Ontario announced an OINP redesign and, effective late May 2026, several legacy streams lost their previous regulatory basis while replacement rules were still being finalised. Applications already submitted, and complete files that received a Notification of Interest before the change, are generally assessed under the prior rules, but new criteria may differ. Treat the French-Speaking Skilled Worker details here as current/transitioning and confirm the live position on the official OINP page at ontario.ca before you act.",
  },
  {
    q: "Does Wild Mountain Immigration handle Ontario French-stream applications?",
    a: "Yes. Wild Mountain Immigration is based in Canmore, Alberta but represents clients across Canada and abroad, including bilingual candidates targeting Ontario through the OINP. Working under a licensed RCIC, our team confirms whether your French and English scores meet the stream, keeps your Express Entry profile competitive, and prepares the OINP application within Ontario's NOI deadline. Given the 2026 redesign, we keep your strategy aligned with the rules actually in force when you apply.",
  },
];

export default function FrenchSpeakingSkilledWorkerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Ontario French-Speaking Skilled Worker Stream, 2026 RCIC Guide",
            description:
              "Ontario French-Speaking Skilled Worker Stream 2026: the OINP French Express Entry route, NCLC 7 / CLB 6 language rules, +600 CRS boost and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "OINP French-Speaking Skilled Worker Stream application support",
            description:
              "Ontario French-Speaking Skilled Worker Stream 2026: the OINP French Express Entry route, NCLC 7 / CLB 6 language rules, +600 CRS boost and how to apply.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Ontario (OINP), Human Capital"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Ontario (OINP)", path: "/pnp/ontario" },
          { name: "French-Speaking Skilled Worker", path: PATH },
        ]}
        title={<>Ontario French-Speaking Skilled Worker <span className="text-brand">Stream</span></>}
        lede={
          <p>
            The <strong>Ontario French-Speaking Skilled Worker Stream</strong> is an Express Entry-aligned OINP route for
            bilingual candidates with strong French and English, and a nomination adds 600 CRS points. Ontario is
            redesigning the OINP in 2026, so the stream&apos;s criteria are changing.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Bilingual and eyeing Ontario?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With the OINP redesign underway in 2026, French-stream timing matters. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Ontario (OINP) overview", href: "/pnp/ontario", note: "Every OINP stream explained" },
                { label: "Human Capital Priorities", href: "/pnp/ontario/human-capital-priorities", note: "The other enhanced Ontario route" },
                { label: "Express Entry", href: "/express-entry", note: "The federal pool this stream draws from" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "All provinces compared" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Ontario French-Speaking Skilled Worker Stream is an enhanced, Express Entry-aligned OINP route for French-speaking skilled workers who also have strong English. Historically it asked for French at NCLC 7 and English at CLB 6 on all four abilities, with no job offer required. You must already be in the Express Entry pool, where Ontario issues a Notification of Interest. A resulting nomination adds 600 CRS points, well above recent cut-offs, though IRCC still issues the Invitation to Apply."
            items={[
              <>The <strong>Ontario French-Speaking Skilled Worker Stream</strong> is an <strong>enhanced</strong> OINP route tied to federal <a href="/express-entry">Express Entry</a>.</>,
              <>It targets <strong>French-speaking skilled workers with strong English too</strong>, historically <strong>French NCLC 7+</strong> and <strong>English CLB 6+</strong>.</>,
              <>Selection is by <strong>Notification of Interest (NOI)</strong> from the Express Entry pool, eligibility does not guarantee one.</>,
              <>A nomination adds <strong>+600 CRS points</strong>, well above recent cut-offs.</>,
              <>Ontario is running a <strong>2026 OINP redesign</strong>: criteria are changing, so confirm current rules on ontario.ca.</>,
            ]}
          />

          <Callout type="warning" title="The OINP is being redesigned in 2026">
            Ontario amended the regulation underpinning the OINP, and effective late May 2026 several legacy streams, including the French-Speaking Skilled Worker Stream, lost their previous regulatory basis while replacement
            rules were still being finalised. Treat the language thresholds and process described below as{" "}
            <strong>current/transitioning</strong> rather than settled. Applications already submitted, and complete files
            that received a Notification of Interest before the change, are generally assessed under the prior rules, but new
            criteria may differ. Always confirm the live position on the official OINP page at <strong>ontario.ca</strong>{" "}
            before you act. Figures and rules change frequently.
          </Callout>

          <h2>What is the Ontario French-Speaking Skilled Worker Stream?</h2>
          <p>
            The <strong>Ontario French-Speaking Skilled Worker Stream</strong> is one of the Ontario Immigrant Nominee
            Program&apos;s (OINP) Human Capital streams, and it is <strong>enhanced</strong>, meaning it is aligned with
            federal <a href="/express-entry">Express Entry</a>. It exists to help Ontario meet its francophone immigration
            targets: the province has worked toward a goal of <strong>French-speaking immigrants making up about 5%</strong>{" "}
            of its economic nominations, supporting francophone communities outside Quebec (source: ontario.ca, May 2026).
            The stream is designed for skilled workers whose primary language is French but who also have solid English, so it is a <strong>bilingual immigration</strong> pathway into Ontario, not a French-only one. It complements
            IRCC&apos;s own <strong>francophone Express Entry category-based draws</strong>, which target French language proficiency federally, by giving Ontario a provincial route to the same talent.
          </p>
          <p>
            Because it is enhanced, you must already be in the federal Express Entry pool. Ontario then searches that pool
            and issues a <strong>Notification of Interest (NOI)</strong> to candidates who meet the stream&apos;s criteria. If
            you are nominated, the nomination adds <strong>600 CRS points</strong>, well above recent cut-offs, though IRCC still issues the Invitation to
            Apply. As with every OINP route, a nomination is not permanent residence: IRCC makes the final decision on a
            separate PR application. With the 2026 redesign underway, treat the details here as transitioning and verify them
            on ontario.ca.
          </p>
          <Callout type="brand" title="French primary, English second, but both matter">
            This is a <strong>French Express Entry Ontario</strong> stream, so French is your stronger language, but the
            English requirement is real and tested on your weakest ability. Candidates often have the French scores yet fall
            short on English, or vice versa. Lining up both approved tests early is the single biggest thing you can do to
            stay eligible.
          </Callout>

          <h2>What are the language requirements?</h2>
          <p>
            Language is the heart of this stream. Historically you needed <strong>French at NCLC 7</strong> or higher across
            all four abilities, reading, writing, listening and speaking, plus <strong>English at CLB 6</strong> or higher
            across all four. NCLC (Niveaux de compétence linguistique canadiens) is the French equivalent of the English CLB
            scale, and the <strong>NCLC vs CLB equivalence</strong> means an NCLC 7 result reflects much the same French
            language proficiency as CLB 7 in English. For the French test you can choose <strong>TEF Canada vs TCF
            Canada</strong>: both are accepted, so sit whichever format suits you. Crucially, each requirement is measured
            on your <strong>lowest of four abilities</strong>, so one weak skill in either language can put you below the
            bar. The table below summarises the historic thresholds; confirm the current numbers on ontario.ca, as the 2026
            redesign may revise them.
          </p>
          <DataTable
            headers={["Language", "Role", "Minimum level (all 4 abilities)", "Approved tests"]}
            rows={[
              ["French", "Primary", "NCLC 7 or higher", "TEF Canada or TCF Canada"],
              ["English", "Second", "CLB 6 or higher", "IELTS General or CELPIP-General"],
            ]}
            caption="OINP French-Speaking Skilled Worker Stream historic language requirements (ontario.ca, May 2026). Scored on your lowest of four abilities; test results valid two years. Thresholds may change under the 2026 redesign, verify before relying on them."
          />
          <Callout type="info" title="NCLC 7 ≈ CLB 7">
            The NCLC and CLB scales are aligned, so French NCLC 7 corresponds to roughly the same proficiency as English CLB
            7. The stream asks for a <em>higher</em> French level (NCLC 7) than English (CLB 6) precisely because French is
            your primary language, but do not underestimate the English bar, which trips up many otherwise strong
            candidates.
          </Callout>

          <h2>What are the full eligibility requirements?</h2>
          <p>
            Beyond language, eligibility for the <strong>OINP French stream</strong> mirrors the other enhanced Human
            Capital routes. You must have an active Express Entry profile and qualify under one of the federal programs
            within it, Federal Skilled Worker, Canadian Experience Class or Federal Skilled Trades. Layered on top are the
            stream&apos;s own education, work-experience and settlement-funds requirements. No job offer is required, which is
            part of what makes this route attractive to bilingual candidates abroad.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Express Entry profile", "An active profile in the federal pool, eligible under FSW, CEC or FST"],
              ["French language", "NCLC 7+ on all four abilities (TEF Canada or TCF Canada)"],
              ["English language", "CLB 6+ on all four abilities (IELTS General or CELPIP-General)"],
              ["Education", "At least a Canadian bachelor's degree (or ECA-assessed foreign equivalent), per the relevant EE class"],
              ["Skilled work experience", "Eligible skilled work experience as required by your Express Entry class (e.g. one year for FSW)"],
              ["Settlement funds", "Proof of funds to settle in Ontario, unless exempt (e.g. authorised to work via CEC)"],
              ["Intention to reside", "An intention to live and work in Ontario"],
            ]}
            caption="OINP French-Speaking Skilled Worker Stream core eligibility (ontario.ca, May 2026). Requirements are detailed and changing in 2026, confirm the official criteria before applying. Eligibility does not guarantee a Notification of Interest."
          />

          <h2>How do Notifications of Interest (NOIs) work?</h2>
          <p>
            Unlike streams with their own Expression of Interest portal, this enhanced stream selects directly from the{" "}
            <strong>Express Entry pool</strong>. Ontario reviews the pool in periodic, targeted rounds and issues a{" "}
            <strong>Notification of Interest (NOI)</strong> to French-speaking candidates who meet the stream&apos;s criteria
            and fall within the CRS range Ontario sets for that round. Receiving an NOI is your green light to apply to the
            OINP, but the province controls the timing and targeting, so <strong>being eligible does not guarantee an
            NOI</strong>. <strong>Ontario francophone NOI rounds</strong> have historically reached lower CRS scores than its
            general draws, which is part of the appeal for bilingual candidates. That appeal grows alongside steady demand in
            Ontario&apos;s bilingual job market, which spans the public sector, healthcare and services.
          </p>
          <Callout type="info" title="Two points applicants often get wrong">
            <strong>Eligibility is not a Notification of Interest</strong>, Ontario chooses whom to notify and when. And a{" "}
            <strong>nomination is not permanent residence</strong>, even with +600 CRS and an Invitation to Apply, IRCC makes
            the final decision on a separate application.
          </Callout>

          <h2>How does the +600 CRS boost change your odds?</h2>
          <p>
            This is where an enhanced stream earns its keep. Your federal <a href="/express-entry/comprehensive-ranking-system">CRS
            score</a> ranks you against everyone in the Express Entry pool. An OINP nomination through the French-Speaking
            Skilled Worker Stream adds a flat <strong>600 CRS points</strong>, a boost so large it lifts most
            candidates well above the cut-off. In recent draws that has been more than enough to earn an Invitation to Apply at the next Express Entry draw, though IRCC still issues it. For
            bilingual candidates who are competitive but not quite at the federal cut-off on their own, that <strong>+600
            CRS</strong> is often the difference between waiting indefinitely and receiving an ITA within weeks. Not sure
            where your score sits today? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>How do you apply for the French-Speaking Skilled Worker Stream?</h2>
          <p>
            <strong>How to apply</strong> follows the standard enhanced-stream sequence, though the 2026 redesign may adjust
            individual steps. You build a competitive Express Entry profile, wait to see whether Ontario issues you a
            Notification of Interest, then submit a complete OINP application within the deadline and use the nomination to
            apply to IRCC for permanent residence.
          </p>
          <Steps
            steps={[
              { title: "Sit your language tests", desc: "Take an approved French test (TEF/TCF Canada) and English test (IELTS/CELPIP). Confirm you hit NCLC 7 French and CLB 6 English on every ability." },
              { title: "Enter the Express Entry pool", desc: "Create or maintain an active Express Entry profile, eligible under FSW, CEC or FST. Get an ECA for foreign education and maximise your base CRS." },
              { title: "Receive a Notification of Interest", desc: "Ontario searches the pool and issues NOIs to eligible French-speaking candidates in targeted rounds. Eligibility alone does not guarantee one." },
              { title: "Apply to the OINP & get nominated", desc: "Submit a complete OINP application within Ontario's deadline with all supporting documents. On approval, Ontario nominates you." },
              { title: "Apply to IRCC for PR", desc: "Your nomination adds 600 CRS points, well above recent cut-offs. IRCC still issues the Invitation to Apply, after which you file your federal PR application and IRCC makes the final decision." },
            ]}
          />

          <h2>How Wild Mountain helps with the OINP French stream</h2>
          <p>
            Wild Mountain Immigration confirms your French and English scores genuinely meet the stream on every ability, keeps
            your <a href="/express-entry">Express Entry</a> profile as competitive as possible while you wait for a
            Notification of Interest, and prepares a complete OINP application that can be filed inside Ontario&apos;s tight
            deadline. Working under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr>{" "}
            (CICC #R706497), our team represents you with both Ontario and IRCC. With the OINP being redesigned in 2026, we
            keep your strategy aligned to the rules actually in force when you apply, and we give you a candid read on your
            realistic chances first. We are not affiliated with the Government of Ontario or
            IRCC.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment, and see our <a href="/fees">fees</a>{" "}
            for how our professional fee works alongside the provincial and IRCC charges. Compare the{" "}
            <strong>Ontario French-Speaking Skilled Worker Stream</strong> with the{" "}
            <a href="/pnp/ontario/human-capital-priorities">Human Capital Priorities</a> and{" "}
            <a href="/pnp/ontario/skilled-trades">Skilled Trades</a> streams, or the full{" "}
            <a href="/pnp/ontario">Ontario OINP</a> overview.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Bilingual? See if the OINP French stream fits you"
        sub="Get started with a licensed RCIC for an honest read on your French and English scores, your CRS, and how the 2026 OINP redesign affects your plan."
      />
    </>
  );
}
