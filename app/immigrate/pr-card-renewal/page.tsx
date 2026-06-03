import type { Metadata } from "next";
import { RefreshCw, CreditCard, Clock, Plane } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/immigrate/pr-card-renewal";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "PR Card Renewal in Canada",
  titleAbsolute: "PR Card Renewal Canada 2026: Documents & Timeline",
  description:
    "PR card renewal in Canada: when and how to renew, the documents you need, the residency obligation and processing times. Talk to a licensed team.",
  path: PATH,
  keywords: [
    "pr card renewal",
    "renew pr card canada",
    "pr card renewal documents",
    "pr card renewal processing time",
    "prtd travel document",
  ],
});

const faqs = [
  {
    q: "When should I renew my PR card?",
    a: "Apply to renew your PR card when it is close to expiring, generally within the last several months before the expiry date printed on the card. There is no penalty for applying before it expires, and renewing early avoids being caught without valid proof of status when you need to travel. If your card has already expired, you can still apply to renew it; the status itself does not lapse, only the card.",
  },
  {
    q: "How do I renew my PR card?",
    a: "You apply to IRCC to renew or replace your card, providing your current or expired card details, identity documents, a photo meeting IRCC's specifications, and information about your time in and out of Canada to show you meet the residency obligation. Depending on the current process you may apply online or on paper. Because the channel and forms change from time to time, confirm the current renewal process and document checklist on canada.ca.",
  },
  {
    q: "What documents do I need to renew my PR card?",
    a: "Typical documents include your existing or expired PR card, primary and secondary identity documents, a photo that meets IRCC's specifications, and a travel history covering the relevant period so IRCC can assess the residency obligation. You may also need supporting evidence if you are relying on time abroad that counts toward the obligation, such as proof of a Canadian citizen spouse or employment with a Canadian business. We build a tailored checklist for your situation.",
  },
  {
    q: "Does renewing my PR card check the residency obligation?",
    a: "Yes. When you apply to renew, IRCC assesses whether you meet the residency obligation of being physically present in Canada for at least 730 days in the relevant five-year period. Certain time abroad can count, such as accompanying a Canadian citizen spouse or working abroad for a Canadian business. Because the card application puts your days under review, it is essential to count accurately and keep the supporting evidence; we help you do this before you apply.",
  },
  {
    q: "How long does a PR card renewal take?",
    a: "Processing times for PR card renewals vary and are published by IRCC, and they move with application volumes. Because the timeline can be lengthy and changes periodically, check the live IRCC processing-times tool before you plan around a date, and apply well ahead of any travel. A complete, accurate application is the best way to avoid the delays that come from a request for more documents.",
  },
  {
    q: "Can I travel while my PR card renewal is being processed?",
    a: "You can travel, but be careful: you cannot board a commercial carrier back to Canada without a valid PR card or a permanent resident travel document (PRTD). If you must travel abroad while your renewal is in progress and your card is expired, you generally apply for a PRTD from outside Canada to return. Many people plan essential travel around the renewal, or use a PRTD, rather than risk being unable to board a flight home.",
  },
  {
    q: "What is a PRTD and when do I need one?",
    a: "A permanent resident travel document (PRTD) lets a permanent resident who is outside Canada, and who does not have a valid PR card, board a commercial carrier to return to Canada. You apply for it from abroad. It is the standard solution when your card has expired while you are overseas or while a renewal is in progress. Like a card application, a PRTD application assesses your residency obligation.",
  },
  {
    q: "Does an expired PR card mean I have lost my status?",
    a: "No. An expired PR card does not end your permanent resident status. The card is proof of status, not the status itself, so your PR continues even when the card lapses, as long as you have not lost status through other means and you meet the residency obligation. The practical issue with an expired card is travel: you cannot use it to board a commercial carrier back to Canada, which is why renewing matters.",
  },
];

export default function PrCardRenewalPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "PR Card Renewal in Canada: The 2026 Guide",
            description:
              "PR card renewal in Canada: when and how to renew, the documents you need, the residency obligation, processing times and travelling abroad with a PRTD.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-17",
          }),
          serviceLd({
            name: "PR card renewal support",
            description:
              "PR card renewal in Canada: when and how to renew, the documents you need, the residency obligation, processing times and travelling abroad with a PRTD.",
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
          { name: "PR Card Renewal", path: PATH },
        ]}
        title={<>PR card <span className="text-brand">renewal</span></>}
        lede={
          <p>
            A <strong>PR card renewal</strong> keeps your proof of permanent resident status current so you can travel
            and prove your status without trouble. This guide covers when and how to renew, the documents you need,
            the residency obligation behind it, processing times, and how to travel while your renewal is in progress.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/immigrate/pr-card", label: "About the PR card" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <RefreshCw className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Renewing your PR card?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Our team can check your residency obligation and prepare a complete renewal so it is not delayed.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "PR card", href: "/immigrate/pr-card", note: "What the card is and your first one" },
                { label: "Residency obligation", href: "/immigrate/residency-obligation", note: "The 730-days rule renewal checks" },
                { label: "Canadian permanent residence", href: "/immigrate/permanent-residence", note: "The full PR overview" },
                { label: "Get started", href: "/contact", note: "Get an honest read on your case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A PR card renewal replaces an expiring permanent resident card so you keep valid proof of status for travel and identification. You apply to IRCC with identity documents, a compliant photo and your travel history. The renewal also checks whether you meet the residency obligation of 730 days in five years. Processing times vary, so apply ahead of travel. If your card is expired while you are abroad, you generally need a permanent resident travel document (PRTD) to return."
            items={[
              <>Renew when your card is <strong>close to expiring</strong>; an expired card does not end your status, only your proof of it.</>,
              <>Apply with your card, identity documents, a compliant <strong>photo</strong> and your <strong>travel history</strong>.</>,
              <>Renewal assesses the <a href="/immigrate/residency-obligation">residency obligation</a> of <strong>730 days in five years</strong>.</>,
              <><strong>Processing times vary</strong>; check the live IRCC tool and apply well ahead of any travel.</>,
              <>Travelling abroad with an expired card usually means applying for a <strong>PRTD</strong> to return to Canada.</>,
            ]}
          />

          <h2>When should you renew your PR card?</h2>
          <p>
            Apply to renew your <a href="/immigrate/pr-card">PR card</a> when it is close to expiring, generally within
            the last several months before the expiry date printed on the card. There is no penalty for applying
            before it expires, and renewing early avoids being caught without valid proof of status when you need to
            travel. If your card has already expired, you can still apply, because the card&apos;s expiry does not end
            your status; only your proof of it lapses. Figures and rules below reflect IRCC policy current to May 2026;
            confirm the latest on canada.ca.
          </p>

          <h2>How to renew your PR card</h2>
          <p>
            You apply to IRCC to renew or replace your card. Depending on the current process you may file an online
            application through the PR portal or submit a paper application using the renewal form (historically{" "}
            <strong>IMM 5444</strong>), so confirm the current channel and forms on canada.ca. The application asks for
            your card details, identity documents, a photo meeting IRCC&apos;s specifications, and information about
            your time in and out of Canada so IRCC can assess the residency obligation. There is a processing fee
            (currently <strong>CAD $50</strong>), and you may be asked to give biometrics as part of the process.
          </p>
          <Steps
            steps={[
              { title: "Check your residency obligation", desc: "Count your days in Canada over the relevant five-year period, including any time abroad that counts, before you apply." },
              { title: "Gather your documents", desc: "Collect your current or expired card, identity documents, a compliant photo and your travel history." },
              { title: "Submit and track", desc: "Apply through the current IRCC channel, then monitor processing and plan any travel around a PRTD if needed." },
            ]}
          />

          <h2>The documents you need</h2>
          <p>
            Your exact list depends on your situation, but the core documents for a renewal are below. If you are
            relying on time abroad that counts toward the residency obligation, you will also need supporting evidence
            for that.
          </p>
          <DataTable
            headers={["Document", "Why it is needed"]}
            rows={[
              ["Current or expired PR card", "To confirm your existing status and card details."],
              ["Primary and secondary identity documents", "To verify your identity for the new card."],
              ["Photo to IRCC specifications", "Required for the card; must meet the exact size and quality rules."],
              ["Travel history", "So IRCC can assess your physical presence and the residency obligation."],
              ["Evidence for time abroad that counts", "Proof of a Canadian citizen spouse or Canadian-business employment, where relied on."],
            ]}
            caption="Typical PR card renewal documents (2026). Use the current IRCC checklist and confirm details on canada.ca."
          />

          <h2>The residency obligation tie-in</h2>
          <p>
            A renewal is not just an administrative refresh: IRCC assesses whether you meet the{" "}
            <a href="/immigrate/residency-obligation">residency obligation</a> of being physically present in Canada
            for at least <strong>730 days in the relevant five-year period</strong>. Certain time abroad can count,
            including time accompanying a Canadian citizen spouse or common-law partner, or working abroad full-time
            for a Canadian business. Because the renewal puts your days under review, accurate counting and good
            supporting evidence matter.
          </p>
          <Callout type="brand" title="We keep this practical, not adversarial">
            Our role is to help you count your days accurately, organise the evidence and file a clean renewal so you
            stay onside the obligation. Acting after a failed obligation is outside our standard service; what we do
            is help you plan and file correctly so the question does not arise.
          </Callout>

          <h2>Processing times</h2>
          <p>
            Processing times for PR card renewals vary and are published by IRCC, moving with application volumes.
            Because the timeline can be lengthy and changes periodically, check the live IRCC processing-times tool
            before you plan around a date, and apply well ahead of any travel. If you have proof of imminent travel for
            urgent reasons, IRCC may consider urgent processing of a PR card, though this is granted at its discretion
            and is not guaranteed. A complete, accurate application is the best way to avoid the delays that come from a
            request for more documents.
          </p>

          <h2>Travelling while you renew (the PRTD abroad)</h2>
          <p>
            You can travel during a renewal, but you cannot board a commercial carrier back to Canada without a valid
            PR card or a <strong>permanent resident travel document (PRTD)</strong>. If you must travel abroad while
            your renewal is in progress and your card is expired, you generally apply for a PRTD from outside Canada to
            return. The PRTD assesses your residency obligation in the same way a card does. Many people plan essential
            travel around the renewal, or rely on a PRTD, rather than risk being unable to board a flight home.
          </p>
          <Callout type="warning" title="Plan travel before your card lapses">
            An expired card does not end your status, but it does stop you boarding a commercial carrier to Canada.
            If travel is unavoidable, build in time for a PRTD application from abroad, and never assume you can simply
            fly home on an expired card.
          </Callout>

          <h2>How Wild Mountain helps with your renewal</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team helps you count your days against the residency
            obligation, builds a tailored document checklist, and prepares a complete PR card renewal so it is not
            delayed by a request for more information. We confirm whether the online application through the PR portal
            or a paper application suits your case, flag the fee and any biometrics step, and advise on PRTD
            applications when travel is unavoidable. We represent clients entirely online, by video call and secure
            document sharing, and we never guarantee outcomes.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Stay onside your status</h2>
          <p className="mt-3 text-ink-soft">From the card itself to the residency obligation behind every renewal.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={CreditCard} title="PR card" desc="What the PR card is, its five-year validity, what it is used for and your first card." href="/immigrate/pr-card" />
            <FeatureCard icon={Clock} title="Residency obligation" desc="The 730-days-in-5-years rule, what time abroad counts and how to plan travel to stay onside." href="/immigrate/residency-obligation" />
            <FeatureCard icon={Plane} title="Canadian permanent residence" desc="The full PR overview, your rights and obligations, and the routes that get you there." href="/immigrate/permanent-residence" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Renew your PR card with confidence"
        sub="Tell us about your travel and time in Canada, and our licensed team will prepare a clean renewal, with honest advice and clear fees."
      />
    </>
  );
}
