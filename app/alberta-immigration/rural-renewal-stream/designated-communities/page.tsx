import type { Metadata } from "next";
import { Calculator, MapPin, Rocket, Briefcase, Store, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/rural-renewal-stream/designated-communities";
const STREAM_PATH = "/alberta-immigration/rural-renewal-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Rural Renewal Designated Communities 2026",
  titleAbsolute: "Designated Communities Alberta: Rural Renewal 2026",
  description:
    "Designated communities in Alberta explained: what designation means, how the Rural Renewal endorsement works and which towns qualify. RCIC-reviewed guide.",
  path: PATH,
  keywords: [
    "alberta rural renewal designated communities list 2026",
    "designated communities alberta",
    "rural renewal endorsement",
    "which alberta communities are designated",
    "how to get a community endorsement",
  ],
});

const faqs = [
  {
    q: "Where is the official Alberta Rural Renewal designated communities list?",
    a: "The single authoritative, up-to-date list lives on alberta.ca, under the Alberta Advantage Immigration Program's Rural Renewal Stream pages. Communities opt in and out, fill their caps or pause endorsing, so the official list changes through the year. Any list you see elsewhere, including the examples on this page, should be treated as a starting point and confirmed against alberta.ca before you build a plan around a specific community.",
  },
  {
    q: "What is a designated community in the Rural Renewal Stream?",
    a: "A designated community is a smaller Alberta community, outside the Calgary and Edmonton census metropolitan areas, that Alberta has approved to recommend candidates for the Rural Renewal Stream through an approved Community Economic Development Organization. Being designated means the community can assess workers who have a local job offer and, if it supports their settlement, issue a rural renewal endorsement letter that unlocks an AAIP application.",
  },
  {
    q: "Which Alberta communities are designated for Rural Renewal?",
    a: "Alberta has designated dozens of communities across the province, examples have included places such as Brooks, Camrose, Cold Lake, Drayton Valley, Hinton and Lac La Biche, plus regional collaborations. This is not an exhaustive or official list: communities join, pause and fill caps over time. Always confirm a community is currently designated and actively endorsing on alberta.ca before you approach an employer there.",
  },
  {
    q: "How do I get a community endorsement for Rural Renewal?",
    a: "You first secure an eligible full-time, non-seasonal job offer with an employer based in a designated community. You then apply to that community's economic-development organization, which assesses you against its local labour needs and settlement criteria. If it supports you, it issues a rural renewal endorsement letter, valid 12 months since January 1, 2026, which you use to apply to the AAIP. The community, not the province, makes this first decision.",
  },
  {
    q: "Does a community endorsement guarantee a nomination or permanent residence?",
    a: "No. A community endorsement is one step, not the finish line. After you secure it, you still submit a Worker Expression of Interest and apply to the AAIP, and Alberta decides whether to nominate. A nomination then leads to a separate IRCC application, where the federal government makes the final permanent-residence decision on medical, security and admissibility grounds. Be cautious of anyone implying an endorsement equals PR.",
  },
  {
    q: "Can a community refuse to endorse me even if I qualify?",
    a: "Yes. Each designated community runs its own process and applies its own settlement criteria, and many set caps on how many candidates they will endorse in a period. That means an endorsement is not guaranteed even when you meet the basic AAIP requirements, a community may decline or pause endorsing once its cap is reached. Confirm a community is actively endorsing before you rely on it.",
  },
  {
    q: "Do all designated communities use the same endorsement process?",
    a: "No. While the Rural Renewal Stream's AAIP requirements are province-wide, each designated community administers its own local endorsement process, paperwork, timelines and any community-specific criteria. Some assess settlement intentions closely, some prioritise particular sectors, and some may charge an administrative fee. Always read the specific community's instructions and contact its economic-development organization directly.",
  },
  {
    q: "How many communities can I apply to at once?",
    a: "In practice your application is tied to a job offer from an employer in a specific designated community, so you approach the community where you have, or are pursuing, that offer. You cannot meaningfully collect endorsements from multiple communities at random; the endorsement reflects genuine local settlement and employment. Focus on the community where your job offer and settlement plan are real, and verify it is currently designated.",
  },
];

export default function DesignatedCommunitiesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Rural Renewal Designated Communities List 2026",
            description:
              "Alberta Rural Renewal designated communities list 2026: what designation means, how the endorsement works, examples and how to approach one. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Alberta Rural Renewal community endorsement support",
            description:
              "Alberta Rural Renewal designated communities list 2026: what designation means, how the endorsement works, examples and how to approach one. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta Rural Renewal Stream consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Rural Renewal Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Rural Renewal Stream", path: STREAM_PATH },
          { name: "Designated Communities", path: PATH },
        ]}
        title={<>Alberta Rural Renewal <span className="text-brand">designated communities</span></>}
        lede={
          <p>
            <strong>Alberta Rural Renewal designated communities are rural communities approved to recommend
            candidates.</strong> Each one assesses workers with a local job offer and issues a rural renewal endorsement
            letter. This guide explains what designation means, how the endorsement works, example communities and how to
            approach one in 2026.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: STREAM_PATH, label: "Back to the Rural Renewal Stream" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free AAIP Points Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Estimate your Alberta Worker EOI score (out of 100) in two minutes, no email required.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Calculate my EOI score</Button>
            </div>
            <div className="rounded-2xl border border-brand/20 bg-brand-soft/50 p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">The full Rural Renewal guide</h2>
              <p className="mt-1.5 text-sm text-ink-soft">The three steps, 2026 eligibility, draw cut-offs and fees for the Rural Renewal Stream.</p>
              <Button href={STREAM_PATH} variant="secondary" className="mt-4 w-full" withArrow>Read the stream guide</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Rural Renewal Stream", href: STREAM_PATH, note: "The full stream guide, eligibility & steps" },
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "For workers already in Alberta" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Designated communities in Alberta are rural towns, outside the Calgary and Edmonton metro areas, that the province has approved to recommend candidates for the AAIP Rural Renewal Stream through a local economic-development organization. The process is community-first. You secure a local job offer, the community assesses you, and it then issues a rural renewal endorsement letter. That letter lets you apply to the AAIP and, in turn, to IRCC for permanent residence. The official list changes as communities opt in and out, and an endorsement is a step, not a guarantee."
            items={[
              <>An <strong>Alberta Rural Renewal designated community</strong> is a rural community approved to recommend candidates for the <a href={STREAM_PATH}>Rural Renewal Stream</a>.</>,
              <>The endorsement runs <strong>community-first</strong>: secure a local job offer, the community assesses you, then it issues a <strong>rural renewal endorsement letter</strong>.</>,
              <>Since <strong>January 1, 2026</strong>, an endorsement is valid <strong>12 months</strong>, and many communities apply their own caps.</>,
              <>The official list <strong>changes</strong> as communities opt in and out, the examples here are illustrative; <strong>alberta.ca is the source of truth</strong>.</>,
              <>An endorsement is a step, <em>not</em> a guarantee, you still apply to the AAIP, then to IRCC for permanent residence.</>,
            ]}
          />

          <h2>What is an Alberta Rural Renewal designated community?</h2>
          <p>
            An <strong>Alberta Rural Renewal designated community</strong> is a smaller Alberta community, one outside the
            Calgary and Edmonton census metropolitan areas, that Alberta has approved to recommend candidates for the{" "}
            <a href={STREAM_PATH}>Rural Renewal Stream</a> under the Alberta Advantage Immigration Program
            (<a href="/alberta-immigration">AAIP</a>). To become designated, a community sets up an approved Community
            Economic Development Organization that runs a local process to assess and endorse workers it wants to keep.
          </p>
          <p>
            For 2026, Alberta&apos;s overall nomination allocation is <strong>6,403</strong>, with a reported Rural Renewal
            carve-out of roughly <strong>1,000</strong> nominations (source: alberta.ca, AAIP, 2026). That tight cap is why
            being designated matters so much: the communities themselves are the gatekeepers, deciding which candidates
            they will recommend toward a limited pool of provincial nominations. Designation is what gives a community the
            authority to issue the endorsement letter the stream is built around.
          </p>
          <Callout type="brand" title="Designation is about who can endorse, not a guarantee for you">
            A community being &ldquo;designated&rdquo; only means it is approved to recommend candidates. It does not mean
            it is currently endorsing, that it has capacity, or that you will be endorsed. Each community runs its own
            process and caps, so always confirm a community&apos;s current status on alberta.ca before you plan around it.
          </Callout>

          <h2>How does the community endorsement work?</h2>
          <p>
            The Rural Renewal endorsement works in a clear order, and the <em>community</em>, not the province, makes the
            first decision. You secure a job offer with an employer in the designated community, the community assesses you
            against its local labour needs and settlement criteria, and if it supports you, it issues a rural renewal
            endorsement letter. Only then do you apply to the AAIP. The table below sets out the full sequence.
          </p>
          <DataTable
            headers={["Stage", "What happens", "Who decides"]}
            rows={[
              ["1 · Local job offer", "Secure a full-time, non-seasonal job offer with an employer based in the designated community", "Your local Alberta employer"],
              ["2 · Community assessment", "Apply to the community's economic-development organization, which assesses your fit and settlement intentions", "The designated community"],
              ["3 · Endorsement letter", "If supported, the community issues a rural renewal endorsement letter (valid 12 months since Jan 1, 2026)", "The designated community"],
              ["4 · Apply to the AAIP", "Submit your Worker EOI and, if invited, apply to the AAIP for nomination, then to IRCC for PR", "The Government of Alberta, then IRCC"],
            ]}
            caption="How an Alberta Rural Renewal community endorsement works, current to May 2026 (alberta.ca). Rules change, verify before applying."
          />
          <Callout type="warning" title="The work-permit rule changed on January 1, 2026">
            Under the overhauled Rural Renewal Stream, you must hold a <strong>valid work permit</strong> to apply.{" "}
            <strong>Implied or maintained status is no longer accepted, and restoration is refused.</strong> A community
            endorsement will not rescue an application filed without valid status, check your permit carefully before you
            submit.
          </Callout>

          <h2>Which Alberta communities are designated for Rural Renewal?</h2>
          <p>
            Alberta has designated <strong>dozens of communities</strong> across the province for the Rural Renewal Stream,
            and the list changes as communities opt in and out. The examples below are towns and communities that have
            participated in Rural Renewal, so they are illustrative, not an official or exhaustive list. The single
            authoritative, full list, along with a designated community map showing where each participating town sits,
            lives on <strong>alberta.ca</strong>. That is the source of truth, so always confirm a community is currently
            designated and actively endorsing there before you act.
          </p>
          <DataTable
            headers={["Example community", "General region", "Note"]}
            rows={[
              ["Brooks", "Southern Alberta", "Example only, confirm current status on alberta.ca"],
              ["Camrose", "Central Alberta", "Example only, confirm current status on alberta.ca"],
              ["Cold Lake", "Northeast Alberta", "Example only, confirm current status on alberta.ca"],
              ["Drayton Valley", "West-central Alberta", "Example only, confirm current status on alberta.ca"],
              ["Hinton", "West-central / foothills", "Example only, confirm current status on alberta.ca"],
              ["Lac La Biche", "Northeast Alberta", "Example only, confirm current status on alberta.ca"],
              ["Lethbridge County region", "Southern Alberta", "Regional collaboration, confirm current status on alberta.ca"],
            ]}
            caption="Illustrative examples of Alberta Rural Renewal participating communities, NOT an official or complete list. Communities opt in and out; the authoritative list is on alberta.ca (May 2026)."
          />
          <Callout type="info" title="Treat any list, including this one, as a starting point">
            Because designation status, caps and endorsing activity move through the year, a printed list goes stale
            quickly. Use the examples above to understand the kinds of communities involved, then verify the live,
            authoritative list on alberta.ca for the community you actually intend to settle in.
          </Callout>

          <h2>How do I approach a designated community?</h2>
          <p>
            To approach a designated community, start with the job offer: the endorsement is built around genuine local
            employment and settlement. Once you have, or are pursuing, an eligible offer with a community employer, find the
            community economic development office contact on alberta.ca. Reach out to that community&apos;s
            economic-development organization, and follow its specific endorsement process. The steps below show the path
            most candidates follow.
          </p>
          <Steps
            steps={[
              { title: "Confirm the community is designated", desc: "Check alberta.ca that your target community is currently designated and actively endorsing, and read its specific instructions, designation and caps change through the year." },
              { title: "Secure an eligible local job offer", desc: "Line up a full-time, non-seasonal job offer with an employer based in that community. In-Alberta applicants can be NOC TEER 0–5; from outside Alberta, TEER 0–3." },
              { title: "Apply to the community & get endorsed", desc: "Submit the community's endorsement application with your job offer, language results and settlement plan. If it supports you, it issues the endorsement letter (valid 12 months)." },
            ]}
          />
          <p>
            From there, the endorsement letter feeds into the AAIP application, submit your{" "}
            <a href="/tools/aaip-calculator">Worker EOI</a> and, if invited, apply to the AAIP, then to IRCC for permanent
            residence. The full mechanics of eligibility, draw cut-offs and fees live on our{" "}
            <a href={STREAM_PATH}>Rural Renewal Stream</a> guide.
          </p>

          <h2>What makes a strong community-endorsement case?</h2>
          <p>
            A strong community-endorsement case shows the community you are a genuine, long-term fit, not just someone
            using it as a shortcut to permanent residence. Communities are trying to fill real labour gaps and retain
            people who will settle, so your job offer, your ties and your settlement intentions all matter. The tips below
            reflect what designated communities tend to value.
          </p>
          <DataTable
            headers={["Tip", "Why it helps"]}
            rows={[
              ["Target a genuine local labour gap", "Communities endorse to fill needs, an offer in an in-demand local role is far more compelling"],
              ["Show real settlement intentions", "Evidence you intend to live in the community (housing, schools, ties) supports the endorsement decision"],
              ["Confirm status before you apply", "A valid work permit is mandatory since Jan 1, 2026, implied/maintained status is not accepted"],
              ["Read the community's own criteria", "Each designated community runs its own process, paperwork and any community-specific or sector priorities"],
              ["Mind the cap and timing", "Many communities cap endorsements; applying while a community is actively endorsing matters"],
            ]}
            caption="Practical tips for a Rural Renewal community endorsement, current to May 2026. Each community sets its own criteria, confirm on alberta.ca and with the community."
          />

          <h2>How is a Rural Renewal designated community different from the Opportunity Stream?</h2>
          <p>
            The key difference is the community endorsement step. The Rural Renewal Stream is built around settling in a
            specific designated community, which means winning a local endorsement before Alberta will look at your file.
            The <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a> has no community
            endorsement at all. It is for temporary foreign workers already living and working anywhere in Alberta on a
            valid permit. If your job and life are genuinely rooted in a smaller Alberta community, the designated-community
            route can also unlock rural and sector points on your Worker EOI that a big-city offer does not.
          </p>
          <DataTable
            headers={["Feature", "Rural Renewal (designated community)", "Opportunity Stream"]}
            rows={[
              ["Community endorsement", "Required, from a designated community", "Not required"],
              ["Where you work", "A specific designated rural community", "Anywhere in Alberta"],
              ["First decision-maker", "The community", "The Government of Alberta"],
              ["Stream type", "Base (community-endorsed)", "Base"],
            ]}
            caption="Rural Renewal designated-community route vs the Alberta Opportunity Stream (alberta.ca, May 2026). Both are base streams."
          />

          <h2>How Wild Mountain Immigration helps with your community endorsement</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and we work with the{" "}
            <a href="/alberta-immigration">AAIP</a> every day. Working under a licensed RCIC (CICC #R706497), our team
            helps you identify a genuinely designated community, build a community-endorsement application that reflects a
            real settlement plan, and line up the Worker EOI so it captures every rural and sector point you are entitled
            to. We catch the avoidable issues, the wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr> TEER level for a from-outside applicant, or a
            work-permit-status problem under the new January 2026 rules, before they cause a refusal.
          </p>
          <p>
            We also set the <a href={STREAM_PATH}>Rural Renewal Stream</a> beside the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a> and the{" "}
            <a href="/alberta-immigration/rural-entrepreneur-stream">Rural Entrepreneur Stream</a>, weigh your federal{" "}
            <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, and compare Alberta with other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>. We can line up the right{" "}
            <a href="/work-permits">work permit</a>, score you with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and set out our{" "}
            <a href="/fees">fees</a> in advance.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own Rural
            Renewal application an expert check before you submit. The roster of designated communities in Alberta, their
            caps and the rules change frequently, and only some are actively endorsing at any one time. That is why we
            always confirm the live alberta.ca list before advising: it is the authoritative source of truth, not any
            static list.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">A community endorsement is one step. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={MapPin} title="Rural Renewal Stream" desc="The full stream guide: the three steps, 2026 eligibility, draw cut-offs and fees." href={STREAM_PATH} />
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base AAIP route for workers already employed anywhere in Alberta." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Store} title="Rural Entrepreneur Stream" desc="Start or buy a business in a smaller Alberta community instead of working for an employer." href="/alberta-immigration/rural-entrepreneur-stream" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The federal system behind the enhanced stream and the CRS score that drives it." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Planning a move to a designated Alberta community?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on your Rural Renewal community endorsement and Worker EOI score."
      />
    </>
  );
}
