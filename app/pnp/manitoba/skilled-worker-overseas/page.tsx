import type { Metadata } from "next";
import { Globe2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/manitoba/skilled-worker-overseas";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Manitoba Skilled Worker Overseas (MPNP) 2026",
  titleAbsolute: "MPNP Skilled Worker Overseas Stream 2026",
  description:
    "Manitoba Skilled Worker Overseas 2026: the MPNP connection requirement, eligibility, how the Expression of Interest works and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Manitoba Skilled Worker Overseas",
    "MPNP Skilled Worker Overseas",
    "Manitoba connection requirement",
    "MPNP EOI",
    "Manitoba PNP from abroad",
  ],
});

const faqs = [
  {
    q: "Can I apply for the Skilled Worker Overseas stream without a job offer in Manitoba?",
    a: "Yes. Unlike the Skilled Worker in Manitoba stream, the MPNP Skilled Worker Overseas stream does not require a Manitoba job offer. Instead, you qualify on the strength of a genuine Manitoba connection, close family or friends settled in the province, past work or study in Manitoba, or selection through a Strategic Recruitment Initiative. You still need to meet the language, work experience, settlement-funds and adaptability minimums, but the established connection is what makes this an overseas pathway rather than an in-province one.",
  },
  {
    q: "What counts as a Manitoba connection requirement for this stream?",
    a: "The Manitoba connection requirement can be met in several ways: a close relative or established friend who is a permanent resident or citizen living in Manitoba and willing to provide a supporting affidavit; previous full-time work experience in Manitoba; previous full-time study at a recognised Manitoba post-secondary institution; or an invitation to apply issued under a Strategic Recruitment Initiative. The connection is worth a large share of your Expression of Interest score, so documenting it properly is the single most important step for overseas candidates.",
  },
  {
    q: "How does the MPNP Expression of Interest work for overseas candidates?",
    a: "You first submit a free MPNP EOI profile. Manitoba scores it out of 1,000 points and ranks you against everyone else in the pool, and your Manitoba connection alone can be worth up to 500 of those points. In periodic draws, the province issues a Letter of Advice to Apply (the LAA, which is Manitoba's term for an invitation to apply) to the highest-ranked profiles, increasingly filtered by occupation or strategic priority. An EOI is not an application: you only file a nomination application once you receive an LAA.",
  },
  {
    q: "Is the Skilled Worker Overseas stream base or enhanced?",
    a: "It can be both. Most Skilled Worker Overseas nominations are base, meaning you apply to IRCC for permanent residence through a separate paper application that adds no CRS points. However, candidates who already hold a federal Express Entry profile can pursue the enhanced route. An enhanced nomination adds 600 CRS points, which in recent draws has been more than enough to clear the cut-off, though IRCC still issues the Invitation to Apply at the next Express Entry draw. We confirm which route fits you at the outset, because it changes your entire timeline.",
  },
  {
    q: "What language level do I need for Manitoba Skilled Worker Overseas?",
    a: "You must take an approved language test (IELTS, CELPIP or a French TEF/TCF) and meet at least Canadian Language Benchmark (CLB) 5 in each of the four abilities for most occupations; regulated and compulsory-trade occupations generally require CLB 7. Language is also scored in the Expression of Interest, so a higher result lifts your ranking. Always confirm the current minimums for your occupation on immigratemanitoba.com, as the thresholds change.",
  },
  {
    q: "How much money do I need to settle through this stream?",
    a: "Skilled Worker Overseas applicants must show enough settlement funds to support themselves and their family after arrival. Manitoba sets the amount by family size and updates it periodically, so confirm the current figure on immigratemanitoba.com. These provincial settlement funds are separate from any proof-of-funds IRCC may require at the federal permanent-residence stage. We help you document liquid, available funds in a form the province accepts.",
  },
  {
    q: "Does meeting the requirements guarantee an invitation to apply?",
    a: "No. The MPNP is points-ranked, so meeting the minimum eligibility places you in the pool but does not entitle you to a Letter of Advice to Apply. Manitoba invites only the highest-ranked profiles in each draw, and many 2026 draws target specific occupations or strategic priorities. Be cautious of any source that implies a place is guaranteed; we build the strongest possible connection and Expression of Interest to maximise your odds.",
  },
];

export default function SkilledWorkerOverseasPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Manitoba Skilled Worker Overseas (MPNP), 2026 RCIC Guide",
            description:
              "Manitoba Skilled Worker Overseas 2026: the MPNP connection requirement, eligibility, how the Expression of Interest works and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "MPNP Skilled Worker Overseas application support",
            description:
              "Manitoba Skilled Worker Overseas 2026: the MPNP connection requirement, eligibility, how the Expression of Interest works and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Manitoba (MPNP), Skilled Worker Overseas"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Manitoba (MPNP)", path: "/pnp/manitoba" },
          { name: "Skilled Worker Overseas", path: PATH },
        ]}
        title={<>Manitoba Skilled Worker <span className="text-brand">Overseas</span></>}
        lede={
          <p>
            <strong>Manitoba Skilled Worker Overseas</strong> nominates skilled workers abroad who have a strong,
            documented connection to Manitoba, no in-province job offer required. This RCIC-led guide covers the
            connection requirement, eligibility, the Expression of Interest and how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Globe2 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Applying from overseas?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Your Manitoba connection drives everything. Get a licensed RCIC&apos;s honest read on whether it is strong
                enough to compete.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Manitoba (MPNP) overview", href: "/pnp/manitoba", note: "How the whole program works" },
                { label: "Skilled Worker in Manitoba", href: "/pnp/manitoba/skilled-worker-in-manitoba", note: "The in-province sister stream" },
                { label: "Business Investor Stream", href: "/pnp/manitoba/business-investor-stream", note: "Manitoba's entrepreneur route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Manitoba Skilled Worker Overseas stream is the MPNP route for skilled workers abroad who have a strong, documented connection to Manitoba, with no job offer required. It suits candidates with ties such as close family, prior study or work in the province, or an invitation under a Strategic Recruitment Initiative, ranked through an Expression of Interest pool. A nomination through this stream supports a PR application to IRCC."
            items={[
              <>The <strong>Manitoba Skilled Worker Overseas</strong> stream is for skilled workers <strong>abroad</strong> with a strong, documented connection to Manitoba, <strong>no job offer required</strong>.</>,
              <>The <strong>Manitoba connection requirement</strong> is decisive: it is worth up to <strong>500 of the 1,000</strong> Expression of Interest points.</>,
              <>A connection can come from <strong>family or friends in Manitoba</strong>, past <strong>work or study</strong> there, or an invitation under a <strong>Strategic Recruitment Initiative</strong>.</>,
              <>Selection is by <strong>Letter of Advice to Apply</strong> from a ranked pool, Manitoba&apos;s name for an invitation to apply. Submitting an <strong>MPNP EOI</strong> is free and is not an application.</>,
              <>Most nominations are <strong>base</strong>, but an <strong>enhanced</strong> Express Entry route adds <strong>600 CRS</strong> points for candidates already in the federal pool.</>,
            ]}
          />

          <h2>What is the Manitoba Skilled Worker Overseas stream?</h2>
          <p>
            The <strong>Manitoba Skilled Worker Overseas</strong> stream is the MPNP route for qualified workers who are
            still living <em>outside</em> Canada but have a genuine, established connection to Manitoba. Unlike the in-province
            Skilled Worker in Manitoba stream, it does <strong>not</strong> require a Manitoba job offer. Instead, you qualify
            on the strength of that connection, family or friends settled in the province, past full-time work or study in
            Manitoba, or selection through a provincial <strong>Strategic Recruitment Initiative</strong>, combined with
            language, work experience, settlement funds and adaptability.
          </p>
          <p>
            Manitoba&apos;s 2026 nomination allocation across all MPNP streams is about <strong>6,239</strong>
            {" "}(source: immigratemanitoba.com / IRCC, 2026), and the province now runs many of its draws on an
            occupation-specific or strategic basis. Because allocations, draw patterns and thresholds change frequently,
            always verify the current rules on the official Manitoba source before acting.
          </p>
          <Callout type="brand" title="No Manitoba job offer? That is the point">
            The Skilled Worker Overseas stream exists precisely for candidates abroad without a Manitoba employer. Your
            documented connection to the province does the heavy lifting that a job offer does in other streams. If you are
            already working in Manitoba on a permit, the{" "}
            <a href="/pnp/manitoba/skilled-worker-in-manitoba">Skilled Worker in Manitoba</a> stream usually fits better.
          </Callout>

          <h2>What is the Manitoba connection requirement?</h2>
          <p>
            The <strong>Manitoba connection requirement</strong> is the heart of this stream, and no other major Canadian
            PNP weights local ties so heavily. A connection is worth up to <strong>500 of the 1,000 Expression of Interest
            points</strong>, and those <strong>Manitoba connection points</strong> make a documented tie effectively
            mandatory for every overseas applicant. You can establish it in one of several ways, and the table below sets
            out the main routes and the kind of evidence each typically needs.
          </p>
          <DataTable
            headers={["Connection type", "What it means", "Typical evidence"]}
            rows={[
              [
                "Family or friends in Manitoba",
                "A close relative or established friend who is a Manitoba permanent resident or citizen and supports your application",
                "Supporter affidavit, proof of their status and Manitoba residence, evidence of the relationship",
              ],
              [
                "Previous work in Manitoba",
                "Past full-time work experience in the province on an authorised permit",
                "Work permits, employment letters, pay records",
              ],
              [
                "Previous study in Manitoba",
                "Past full-time study at a recognised Manitoba post-secondary institution",
                "Transcripts, completion records, study-permit history",
              ],
              [
                "Strategic Recruitment Initiative",
                "An invitation issued by Manitoba through a targeted recruitment mission or exploratory pathway",
                "Manitoba's invitation / Letter of Advice to Apply under the initiative",
              ],
            ]}
            caption="Manitoba connection routes for the Skilled Worker Overseas stream (immigratemanitoba.com, 2026). A connection is required and is the largest EOI factor."
          />
          <Callout type="info" title="Document the connection before anything else">
            <strong>A weak or undocumented connection is the most common reason strong overseas candidates stall in the
            pool.</strong> Building and properly evidencing your Manitoba connection, especially a family or friend supporter
            affidavit, is the first thing we work on when we assess a Skilled Worker Overseas profile.
          </Callout>

          <h2>What are the Skilled Worker Overseas eligibility requirements?</h2>
          <p>
            Beyond the connection, <strong>Skilled Worker Overseas eligibility</strong> rests on a connected set of
            minimums you must meet when you submit your Expression of Interest. Miss one, whether a language ability falls a
            band short, your settlement funds are too low, or your work experience does not match an in-demand occupation, and
            your profile either cannot enter the pool or ranks too low to compete. The table summarises the core 2026
            requirements; the controlling list lives on immigratemanitoba.com and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the stream asks for"]}
            rows={[
              ["Manitoba connection", "A documented connection (family/friend, prior work or study, or a Strategic Recruitment Initiative invitation), the largest EOI factor"],
              ["Language", "Approved test (IELTS, CELPIP or French TEF/TCF); generally CLB 5 in each ability, higher (often CLB 7) for regulated/compulsory trades, valid 2 years"],
              ["Work experience", "Recent, full-time skilled work experience, ideally in an in-demand or strategically targeted occupation"],
              ["Settlement funds", "Proof of liquid settlement funds for your family size (amount set by Manitoba, by family size, verify current figure)"],
              ["Adaptability", "Factors such as your connection, age, education and language that show you can establish economically in Manitoba"],
              ["Intent to settle", "A genuine intention to live, work and settle in Manitoba specifically"],
            ]}
            caption="Manitoba Skilled Worker Overseas core eligibility, accurate as of May 2026 (immigratemanitoba.com). Requirements change, verify before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            Manitoba reads your language result from the lowest of your four abilities, reading, writing, listening and
            speaking. A single weak skill can drop you below the threshold for your occupation, so lifting your weakest band
            is often the most valuable thing you can do before submitting.
          </Callout>

          <h2>How does the MPNP Expression of Interest work?</h2>
          <p>
            For the Skilled Worker Overseas stream, selection runs entirely through the <strong>MPNP EOI</strong>. You build
            a free Expression of Interest profile, Manitoba scores it out of <strong>1,000 points</strong> (with your
            connection worth up to 500) and ranks the whole pool. Periodic draws then issue a <strong>Letter of Advice to
            Apply (LAA)</strong>, Manitoba&apos;s name for an invitation to apply, to the highest-ranked profiles. Draws are
            often filtered by occupation or by a Strategic Recruitment Initiative. Crucially, an EOI is <em>not</em> an
            application: you only apply for a nomination once you hold an LAA.
          </p>
          <Steps
            steps={[
              { title: "Build your MPNP EOI", desc: "Submit a free Expression of Interest profile with your connection, language, experience and adaptability details. It is scored out of 1,000 and ranked against the pool." },
              { title: "Receive an invitation (LAA)", desc: "Manitoba issues a Letter of Advice to Apply to the highest-ranked profiles in each MPNP EOI draw, often by occupation or strategic priority. An EOI alone is not an invitation." },
              { title: "Apply for nomination", desc: "After an LAA, file a full nomination application with documents proving your Manitoba connection, language, experience and settlement funds within the deadline." },
              { title: "Apply to IRCC for PR", desc: "Use the nomination to apply for permanent residence, a base paper application, or through Express Entry if your nomination is enhanced (+600 CRS)." },
            ]}
          />
          <Callout type="info" title="Two things that catch overseas applicants out">
            <strong>The Expression of Interest is free, but selection is by ranking, not first-come.</strong> And a
            <strong> documented Manitoba connection is decisive</strong>: without a strong, evidenced tie, most overseas
            profiles will not score high enough for a Letter of Advice to Apply.
          </Callout>

          <h2>Base vs enhanced: which route applies to you?</h2>
          <p>
            This distinction changes your timeline more than any other. Most Skilled Worker Overseas nominations are{" "}
            <strong>base</strong>: once nominated, you submit a <em>separate paper application directly to IRCC</em> for
            permanent residence, earning no CRS points.</p>
          <p>If you already hold a federal Express Entry profile, however, you can
            pursue the <strong>enhanced</strong> route, which runs the MPNP as an <strong>Express Entry aligned PNP</strong>:
            an enhanced nomination adds <strong>600 CRS points</strong>, which sits well above recent cut-offs, though IRCC
            still issues the Invitation to Apply at the next Express Entry draw. We confirm at the outset whether your route is
            base or enhanced, because it shapes everything that follows.
          </p>
          <Callout type="brand" title="How the 600-point boost applies here">
            Only an enhanced Skilled Worker Overseas nomination feeds Express Entry&apos;s +600 boost. Want to see your
            starting federal score first? Try our <a href="/tools/crs-calculator">free CRS calculator</a>.
          </Callout>

          <h2>How to apply for Manitoba Skilled Worker Overseas</h2>
          <p>
            <strong>How to apply</strong> follows the EOI sequence. Confirm you meet the stream&apos;s minimums and have a
            documented Manitoba connection, submit a free <strong>MPNP EOI</strong>, and wait to see whether your ranking
            earns a Letter of Advice to Apply. If invited, you file a complete nomination application with supporting
            documents within the deadline. Once nominated, you apply to <strong>IRCC</strong> for permanent residence, on
            paper for a base nomination, or through Express Entry if your nomination is enhanced.
          </p>
          <p>
            On cost, submitting an EOI is <strong>free</strong>; a provincial application fee applies once you are invited
            and apply for a nomination. All provincial amounts are separate from the IRCC permanent-residence fees you pay
            federally, and fees change, so confirm current figures on immigratemanitoba.com before you apply.
          </p>

          <h2>How long does the Skilled Worker Overseas stream take?</h2>
          <p>
            <strong>How long it takes</strong> depends on the stage. Waiting for a Letter of Advice to Apply hinges on your
            EOI ranking and which occupations Manitoba draws, there is no fixed timeline. After you submit a complete
            nomination application, provincial processing typically runs several months.</p>
          <p>Once nominated, a base
            nomination&apos;s paper application to IRCC generally takes longer than an enhanced Express Entry application.
            Adding it up, most overseas applicants should plan for the better part of a year, sometimes more, from EOI to
            permanent residence. Treat any estimate as approximate and verify on immigratemanitoba.com and canada.ca.
          </p>

          <h2>How Wild Mountain helps with your Skilled Worker Overseas application</h2>
          <p>
            For an overseas candidate, almost everything turns on the Manitoba connection and a well-built Expression of
            Interest, and that is exactly where Wild Mountain Immigration focuses.</p>
          <p>Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team documents and
            strengthens your connection, models your EOI ranking out of 1,000, confirms whether your route is base or{" "}
            <a href="/express-entry">enhanced</a>, and prepares a nomination application that stands up to scrutiny with the
            province and with IRCC. We catch the avoidable mistakes, a thin supporter affidavit, a language band one short,
            settlement funds in the wrong form, that cause overseas profiles to stall or refuse.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest assessment of your Manitoba PNP from abroad, and
            see our <a href="/fees">fees</a> for how our professional fee sits alongside the provincial and IRCC charges.
            Figures here are current to 2026 and change, so we always confirm the live immigratemanitoba.com page before
            advising. If the <strong>Manitoba Skilled Worker Overseas</strong> stream fits, compare it with the in-province{" "}
            <a href="/pnp/manitoba/skilled-worker-in-manitoba">Skilled Worker in Manitoba</a> route or the wider{" "}
            <a href="/pnp/manitoba">Manitoba MPNP</a> overview.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Is your Manitoba connection strong enough?"
        sub="Get started with a licensed RCIC for an honest read on your Manitoba connection, your Expression of Interest ranking and the strongest route to permanent residence through the Skilled Worker Overseas stream."
      />
    </>
  );
}
