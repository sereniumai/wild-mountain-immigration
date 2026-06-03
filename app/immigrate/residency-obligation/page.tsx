import type { Metadata } from "next";
import { Clock, RefreshCw, CreditCard, Stamp } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/immigrate/residency-obligation";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "PR Residency Obligation in Canada",
  titleAbsolute: "PR Residency Obligation Canada: 730-Day Rule 2026",
  description:
    "The PR residency obligation explained: the 730-days-in-5-years rule, what time abroad counts and the cost of falling short. Plan your travel with us.",
  path: PATH,
  keywords: [
    "pr residency obligation",
    "730 days rule canada",
    "permanent resident residency requirement",
    "time abroad pr canada",
    "maintain pr status",
  ],
});

const faqs = [
  {
    q: "What is the PR residency obligation in Canada?",
    a: "The residency obligation is the rule that requires a permanent resident to be physically present in Canada for at least 730 days within every rolling five-year period to keep their status. The 730 days do not have to be continuous; they can be accumulated across the five years. Certain days spent outside Canada can also count toward the 730, in defined circumstances. The obligation is assessed when you apply for or renew a PR card, apply for a travel document, or at a port of entry.",
  },
  {
    q: "How are the 730 days counted?",
    a: "IRCC looks at a rolling five-year period and counts the days you were physically present in Canada, which must total at least 730. The days can be spread out across the five years rather than served all at once. Certain time abroad counts as if you were in Canada, such as days accompanying a Canadian citizen spouse or common-law partner, or days employed full-time abroad by a Canadian business. Keeping an accurate record of your entries and exits is essential.",
  },
  {
    q: "What time outside Canada counts toward the residency obligation?",
    a: "In defined circumstances, time abroad can count as if you were present in Canada. Common examples include accompanying a Canadian citizen spouse or common-law partner outside Canada, being employed full-time abroad by a Canadian business or the public service, or accompanying a permanent resident spouse, parent or common-law partner who is themselves employed abroad by a Canadian business. The rules are specific, so confirm the exact conditions on canada.ca and keep supporting evidence.",
  },
  {
    q: "What happens if I do not meet the residency obligation?",
    a: "Falling short of the 730 days can put your permanent resident status at risk, and the obligation is assessed when you apply for a PR card, a travel document, or at a port of entry. A negative finding can lead to a removal order, usually a departure document, with a limited right to a residency obligation appeal to the Immigration Appeal Division (IAD), where humanitarian and compassionate grounds (H&C) may be weighed. Because the consequences are serious and fact-specific, our role is to help you understand the rule, count your days accurately and plan travel so you stay onside, rather than to act after a shortfall arises. Where a shortfall has occurred, we will be candid that this falls outside our standard service.",
  },
  {
    q: "Does the residency obligation apply to citizens too?",
    a: "No. The residency obligation applies only to permanent residents, as a condition of keeping PR status. Canadian citizens have no residency obligation and can live outside Canada indefinitely without affecting their citizenship. This is one of the practical advantages of moving from permanent residence to citizenship: once you naturalise, the 730-day rule no longer applies to you.",
  },
  {
    q: "How is the residency obligation different from the citizenship presence rule?",
    a: "They are separate rules with different thresholds and purposes. The residency obligation requires 730 days in every rolling five-year period to keep PR status. The citizenship physical presence requirement is at least 1,095 days within the five years before you apply for a citizenship grant. Meeting the residency obligation keeps your PR; meeting the higher 1,095-day citizenship requirement lets you apply to become a citizen.",
  },
  {
    q: "How can I make sure I stay onside the residency obligation?",
    a: "Keep a careful, dated record of every entry and exit, count your days against the rolling five-year window, and plan extended travel with the 730-day target in mind. If you expect long periods abroad, check early whether any of that time counts, such as accompanying a Canadian citizen spouse or working for a Canadian business, and keep the supporting evidence. Filing accurately and planning ahead is the reliable way to protect your status.",
  },
  {
    q: "Can an RCIC help me with the residency obligation?",
    a: "Yes, for planning and accurate filing. Working under a licensed RCIC (CICC #R706497), our team can help you count your days, understand what time abroad counts, organise supporting evidence, and prepare a PR card renewal or travel document that reflects your situation accurately. Acting after a failed obligation is outside our standard service, so where a shortfall has occurred we will tell you plainly and point you to the right help.",
  },
];

export default function ResidencyObligationPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "The Canadian PR Residency Obligation: The 2026 Guide",
            description:
              "The Canadian PR residency obligation: the 730-days-in-5-years rule, what time abroad counts, the consequences of falling short and how to plan travel.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-17",
          }),
          serviceLd({
            name: "PR residency obligation support",
            description:
              "The Canadian PR residency obligation: the 730-days-in-5-years rule, what time abroad counts, the consequences of falling short and how to plan travel.",
            path: PATH,
            serviceType: "Permanent residence immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Immigrate to Canada"
        crumbs={[
          { name: "Immigrate to Canada", path: "/immigrate" },
          { name: "Permanent Residence", path: "/immigrate/permanent-residence" },
          { name: "Residency Obligation", path: PATH },
        ]}
        title={<>The PR <span className="text-brand">residency obligation</span></>}
        lede={
          <p>
            To keep permanent resident status you must meet the <strong>PR residency obligation</strong>: at least 730
            days of physical presence in Canada in every rolling five-year period. This guide explains how the rule
            works, what time abroad counts, the consequences of falling short, and how to plan travel and file
            accurately so you stay onside.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/immigrate/pr-card-renewal", label: "Renewing your card?" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Clock className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Planning time abroad?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Our team can help you count your days, see what time abroad counts, and plan travel to stay onside.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "PR card renewal", href: "/immigrate/pr-card-renewal", note: "Where the obligation is assessed" },
                { label: "Citizenship requirements", href: "/citizenship/requirements", note: "The separate 1,095-day rule" },
                { label: "Canadian permanent residence", href: "/immigrate/permanent-residence", note: "The full PR overview" },
                { label: "Get started", href: "/contact", note: "Get an honest read on your case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The PR residency obligation requires a permanent resident to be physically present in Canada for at least 730 days within every rolling five-year period to keep their status. The days need not be continuous, and certain time abroad can count toward the total. Falling short can put PR status at risk, so the reliable approach is to keep accurate records, plan travel around the rule and file accurately. It is separate from the 1,095-day citizenship presence rule."
            items={[
              <>You must be in Canada at least <strong>730 days in every rolling five-year period</strong> to keep PR status.</>,
              <>The 730 days <strong>need not be continuous</strong>; they accumulate across the five years.</>,
              <>Certain <strong>time abroad counts</strong>, such as accompanying a Canadian citizen spouse or Canadian-business employment abroad.</>,
              <>Falling short can <strong>put your status at risk</strong>; plan travel and file accurately to stay onside.</>,
              <>It is separate from the <a href="/citizenship/requirements">1,095-day citizenship</a> presence rule.</>,
            ]}
          />

          <h2>What is the PR residency obligation?</h2>
          <p>
            The <strong>residency obligation</strong> is the condition that keeps your{" "}
            <a href="/immigrate/permanent-residence">permanent resident</a> status alive. To meet it, you must be
            physically present in Canada for at least <strong>730 days within every rolling five-year period</strong>.
            The days do not have to be served in one block, they can be accumulated across the five years, and certain
            days spent outside Canada can count toward the total in defined circumstances. The obligation is assessed
            at key moments: when you apply for or renew a <a href="/immigrate/pr-card">PR card</a>, when you apply for
            a travel document, or at a port of entry.
          </p>
          <p>
            Figures and rules below reflect IRCC policy current to May 2026; the conditions for counting time abroad
            are specific, so confirm the exact details on canada.ca before you rely on them.
          </p>

          <h2>How the 730 days are counted</h2>
          <p>
            IRCC looks at a <strong>rolling five-year period</strong> and counts the days you were physically present
            in Canada, which must total at least 730. Because the window rolls, your compliance is assessed against
            the most recent five years at the moment it is checked. Keeping an accurate, dated record of your entries and exits
            is the single most useful habit a permanent resident can have. You can cross-check it against your CBSA
            travel history, which logs your crossings into Canada, so your day count matches the official record when
            the obligation is reviewed.
          </p>

          <h2>What time abroad counts</h2>
          <p>
            In defined circumstances, time spent outside Canada counts as if you were present here. The common
            categories are below. Each has specific conditions and requires supporting evidence, so confirm the exact
            rules on canada.ca.
          </p>
          <DataTable
            headers={["Time abroad that can count", "Typical condition"]}
            rows={[
              ["Accompanying a Canadian citizen spouse or partner", "Living with a Canadian citizen spouse or common-law partner abroad."],
              ["Employed abroad by a Canadian business", "Full-time work abroad for a qualifying Canadian business or the public service."],
              ["Accompanying a PR spouse or parent working abroad", "Living with a PR who is themselves employed abroad by a Canadian business."],
            ]}
            caption="Categories where time abroad can count toward the 730 days (2026). Conditions are specific; confirm on canada.ca and keep evidence."
          />

          <h2>The consequences of falling short</h2>
          <p>
            Falling short of the 730 days can put your <strong>permanent resident status at risk</strong>, because the
            obligation is assessed when you apply for a PR card, a travel document, or at a port of entry. A finding
            that you have not met the obligation can lead to a removal order, often issued as a departure document, and
            you may have a limited right to a residency obligation appeal to the Immigration Appeal Division (IAD). At
            that stage the IAD can weigh humanitarian and compassionate grounds, known as H&C, but the consequences and
            any appeal process are serious and very fact-specific.
          </p>
          <Callout type="warning" title="We focus on planning and accurate filing, not after-the-fact disputes">
            Our standard service is to help you understand the rule, count your days accurately, organise evidence and
            plan travel so you stay onside. Acting after a failed obligation falls outside that scope. Where a
            shortfall has already happened, we will be candid about that and point you toward the right help, rather
            than guess.
          </Callout>

          <h2>How the obligation differs from the citizenship rule</h2>
          <p>
            The residency obligation is often confused with the citizenship presence rule, but they are separate. The
            obligation keeps your PR alive and requires <strong>730 days in every rolling five-year period</strong>.
            The <a href="/citizenship/requirements">citizenship physical presence requirement</a> is higher,{" "}
            <strong>1,095 days</strong> within the five years before you apply for a citizenship grant. Meeting the
            obligation keeps your status; meeting the higher citizenship threshold lets you apply to naturalise, after
            which the obligation no longer applies to you at all.
          </p>
          <DataTable
            headers={["", "Residency obligation", "Citizenship presence"]}
            rows={[
              ["Purpose", "Keep PR status", "Become a citizen"],
              ["Days required", "730 days", "1,095 days"],
              ["Period", "Every rolling 5 years", "The 5 years before you apply"],
              ["Applies to", "Permanent residents", "PRs applying for citizenship"],
            ]}
            caption="The residency obligation and the citizenship presence rule compared (2026)."
          />

          <h2>How to stay onside the obligation</h2>
          <Steps
            steps={[
              { title: "Track every entry and exit", desc: "Keep a dated record of your travel so you can count your days in Canada against the rolling five-year window at any time." },
              { title: "Check what counts before long trips", desc: "If you expect extended time abroad, confirm early whether any of it counts, and keep the supporting evidence." },
              { title: "Plan and file accurately", desc: "Plan travel around the 730-day target and file PR card renewals or travel documents that reflect your days accurately." },
            ]}
          />

          <h2>How Wild Mountain helps with the residency obligation</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team helps you count your days, understand what time
            abroad counts, organise the supporting evidence and prepare a <a href="/immigrate/pr-card-renewal">PR card
            renewal</a> or travel document that reflects your situation accurately. Our focus on the PR residency
            obligation is planning and accurate filing so you stay onside, not after-the-fact appeals. We represent
            clients entirely online, by video call and secure document sharing.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Protect your PR status</h2>
          <p className="mt-3 text-ink-soft">From renewing your card to the citizenship that lifts the obligation.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={RefreshCw} title="PR card renewal" desc="When and how to renew, the documents you need, and travelling while your renewal is in progress." href="/immigrate/pr-card-renewal" />
            <FeatureCard icon={CreditCard} title="PR card" desc="What the PR card is, its five-year validity, what it is used for and your first card." href="/immigrate/pr-card" />
            <FeatureCard icon={Stamp} title="Citizenship requirements" desc="The separate 1,095-day rule, language, tax and the test on the path to citizenship." href="/citizenship/requirements" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Plan your time abroad with confidence"
        sub="Tell us about your travel and our licensed team will help you count your days and stay onside, with honest advice and clear fees."
      />
    </>
  );
}
