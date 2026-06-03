import type { Metadata } from "next";
import { CreditCard, RefreshCw, Clock, Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/immigrate/pr-card";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canadian PR Card: Validity & First Card",
  titleAbsolute: "PR Card Canada: Validity, Uses & Your First Card",
  description:
    "Your PR card in Canada explained: five-year validity, what it is used for, getting your first card and how it differs from PR status. Talk to our team.",
  path: PATH,
  keywords: [
    "pr card canada",
    "permanent resident card",
    "pr card validity",
    "first pr card",
    "pr card vs pr status",
  ],
});

const faqs = [
  {
    q: "What is a PR card in Canada?",
    a: "A PR card, or permanent resident card, is the official wallet-sized document that proves you are a permanent resident of Canada. It shows your name, photo, status and the card's expiry date. Its main purpose is as proof of status when you re-enter Canada on a commercial carrier such as a plane, train, bus or boat. The card is proof of your status, not the status itself: your permanent residence continues even if the card expires.",
  },
  {
    q: "How long is a PR card valid?",
    a: "Most PR cards are valid for five years from the date of issue, though some are issued for a shorter period, such as one year, in certain situations. The validity period is printed on the card. When the card approaches its expiry date you apply to renew it. Remember that the card's expiry is not the same as your status expiring; your permanent residence does not end when the card does, as long as you meet the residency obligation.",
  },
  {
    q: "What is a PR card used for?",
    a: "The PR card's primary use is to prove your permanent resident status when you board a commercial carrier to travel to Canada from abroad. It is also widely used inside Canada as identification and to confirm your status when you start a job, open accounts or access certain services. If you are outside Canada without a valid PR card, you generally need a permanent resident travel document (PRTD) to return by commercial carrier instead.",
  },
  {
    q: "How do I get my first PR card?",
    a: "If you applied for permanent residence from inside or outside Canada, your first PR card is usually processed automatically after you land and confirm your residential address with IRCC, so you do not file a separate application for it in most cases. You simply provide a Canadian mailing address within a set window after landing, and the card is mailed to you. If a first card is not issued automatically, or your situation is different, you may need to apply directly; confirm the current process on canada.ca.",
  },
  {
    q: "Is the PR card the same as my PR status?",
    a: "No. The PR card is proof of your permanent resident status, but it is not the status itself. Your status as a permanent resident continues regardless of whether your card is valid or expired, as long as you have not lost status through other means and you meet the residency obligation. That said, an expired card makes commercial travel back to Canada difficult, so most people renew before it lapses.",
  },
  {
    q: "What happens if my PR card expires?",
    a: "An expired PR card does not end your permanent resident status. However, you cannot use an expired card to board a commercial carrier to return to Canada, so an expired card mainly creates travel and identification difficulties rather than a loss of status. The fix is to apply for a PR card renewal. If you are already abroad with an expired card, you generally apply for a permanent resident travel document to return.",
  },
  {
    q: "Do I need to carry my PR card at all times?",
    a: "There is no requirement to carry it everywhere inside Canada day to day, but you should keep it safe and bring it when you travel internationally, because you will need it to board a commercial carrier back to Canada. Many people also use it as convenient photo identification. If your card is lost or stolen, especially while abroad, take steps to replace the lost PR card promptly, as travel back to Canada depends on it. Where you face a genuine travel emergency, IRCC may offer urgent processing on request.",
  },
  {
    q: "Can an RCIC help with my PR card?",
    a: "Yes. Working under a licensed RCIC (CICC #R706497), our team can advise on whether your first card will issue automatically, help you confirm your address with IRCC, and prepare a PR card application or renewal where one is needed. We also help you check that you meet the residency obligation before you apply, since that is assessed when a card is issued. We represent clients entirely online.",
  },
];

export default function PrCardPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "The Canadian PR Card: What It Is and How to Get One",
            description:
              "The Canadian PR card explained: what it is, its five-year validity, what it is used for, applying for your first card and how it differs from PR status.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-17",
          }),
          serviceLd({
            name: "Canadian PR card support",
            description:
              "The Canadian PR card explained: what it is, its five-year validity, what it is used for, applying for your first card and how it differs from PR status.",
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
          { name: "PR Card", path: PATH },
        ]}
        title={<>The <span className="text-brand">PR card</span> in Canada</>}
        lede={
          <p>
            Your <strong>PR card in Canada</strong> is the document that proves you are a permanent resident,
            especially when you travel back into the country. This guide explains what the card is, how long it is
            valid, what it is used for, how to get your first card, and why the card is not the same as your status.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/immigrate/pr-card-renewal", label: "Renewing your card?" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <CreditCard className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Questions about your PR card?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Our team can confirm how your first card issues, or prepare an application where one is needed.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "PR card renewal", href: "/immigrate/pr-card-renewal", note: "When and how to renew" },
                { label: "Residency obligation", href: "/immigrate/residency-obligation", note: "The 730-days rule behind the card" },
                { label: "Canadian permanent residence", href: "/immigrate/permanent-residence", note: "The full PR overview" },
                { label: "Get started", href: "/contact", note: "Get an honest read on your case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A PR card in Canada is the official document proving permanent resident status, used mainly to board a commercial carrier when returning to Canada from abroad. It is usually valid for five years, and the first card is normally issued automatically after you land and confirm your address with IRCC. The card is proof of status, not the status itself. Your permanent residence continues even after the card expires, though most people renew before it lapses to keep travel simple."
            items={[
              <>A <strong>PR card</strong> proves your permanent resident status, mainly for boarding a commercial carrier back to Canada.</>,
              <>Most cards are valid for <strong>five years</strong> from issue; the date is printed on the card.</>,
              <>Your <strong>first card</strong> is usually issued automatically after landing and confirming your address with IRCC.</>,
              <>The card is <strong>proof of status, not the status itself</strong>; your PR does not end when the card expires.</>,
              <>When the card nears expiry, apply for a <a href="/immigrate/pr-card-renewal">PR card renewal</a>.</>,
            ]}
          />

          <h2>What is a PR card in Canada?</h2>
          <p>
            A <strong>PR card (permanent resident card)</strong> is the official wallet-sized document that proves you
            are a <a href="/immigrate/permanent-residence">permanent resident</a> of Canada. It carries your name,
            photo, signature, a unique card number, your client identifier (UCI) and the card expiry date. Its primary
            purpose is to serve as proof of your status when you re-enter Canada on a commercial carrier, such as a
            plane, train, bus or boat. The card is the everyday evidence of a status that itself does not expire as
            long as you keep meeting the residency obligation.
          </p>
          <p>
            Figures and rules below reflect IRCC policy current to May 2026; confirm the latest on canada.ca before
            you rely on them.
          </p>

          <h2>How long is a PR card valid?</h2>
          <p>
            Most PR cards are valid for <strong>five years</strong> from the date of issue, though some are issued for
            a shorter period, such as one year, in certain situations. The validity period is printed on the card.
            When the card approaches its expiry date, you apply for a <a href="/immigrate/pr-card-renewal">renewal</a>.
          </p>
          <Callout type="brand" title="The card&apos;s expiry is not your status expiring">
            This is the single most important thing to understand about the PR card. Your{" "}
            <strong>permanent resident status does not end when the card expires</strong>. An expired card mainly
            creates travel and identification difficulties, not a loss of status. You lose PR only through specific
            processes, not because a card lapsed.
          </Callout>

          <h2>What is a PR card used for?</h2>
          <p>
            The card has one primary use and several everyday ones:
          </p>
          <ul>
            <li><strong>Commercial travel to Canada.</strong> Its main purpose is to prove your status when you board a plane, train, bus or boat to travel to Canada from abroad. Without a valid card you generally need a permanent resident travel document (PRTD) to return by commercial carrier.</li>
            <li><strong>Identification inside Canada.</strong> It is widely accepted as photo ID and to confirm your status.</li>
            <li><strong>Confirming status for work and services.</strong> Employers and service providers may ask to see it to confirm you are entitled to work or access services.</li>
          </ul>
          <DataTable
            headers={["Feature", "Detail"]}
            rows={[
              ["What it is", "Official proof of permanent resident status"],
              ["Typical validity", "Five years from issue (sometimes one year)"],
              ["Primary use", "Boarding a commercial carrier to return to Canada"],
              ["If lost abroad", "Apply for a permanent resident travel document (PRTD) to return"],
              ["Relationship to status", "Proof of status, not the status itself"],
            ]}
            caption="The PR card at a glance (2026). Confirm current details on canada.ca."
          />

          <h2>How to get your first PR card</h2>
          <p>
            For most new permanent residents, the <strong>first PR card</strong> is processed automatically. After you
            land and confirm your permanent residence (your COPR, the Confirmation of Permanent Residence, is signed at
            this stage), you provide IRCC with a Canadian mailing address within a set window, and the card is mailed to
            you. In most cases you do not file a separate application for that first card. If you do apply directly, the
            photo must meet IRCC photo specifications, so use a photographer who follows the current size and quality
            rules.
          </p>
          <Steps
            steps={[
              { title: "Land as a permanent resident", desc: "Complete the landing process, in Canada or at a port of entry, and confirm your permanent residence." },
              { title: "Confirm your mailing address", desc: "Provide IRCC with a Canadian mailing address within the required window after landing, so the card can be sent." },
              { title: "Receive your card", desc: "Your first PR card is mailed to you. If a first card does not issue automatically, you may need to apply directly." },
            ]}
          />
          <p>
            If a first card is not issued automatically, or your situation differs, you may need to apply for the card
            directly. Confirm the current process on canada.ca, and remember that the residency obligation is assessed
            when a card is issued, so it pays to be sure you meet it first.
          </p>

          <h2>PR card and the residency obligation</h2>
          <p>
            Because a PR card application is assessed against your status, the{" "}
            <a href="/immigrate/residency-obligation">residency obligation</a> matters. To hold PR you must be
            physically present in Canada for at least <strong>730 days in every five-year period</strong>, with some
            time abroad counting in defined circumstances. We help you confirm you meet the obligation before you
            apply for or renew a card, so there are no surprises.
          </p>

          <h2>How Wild Mountain Immigration helps with your PR card</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team advises on whether your first card will issue
            automatically, helps you confirm your address with IRCC, and prepares a PR card application or{" "}
            <a href="/immigrate/pr-card-renewal">renewal</a> where one is needed, including steps to replace a lost PR
            card or request urgent processing for a travel emergency. We also help you check the residency obligation
            before you apply. Whatever stage you are at with your PR card in Canada, we represent clients entirely
            online, by video call and secure document sharing.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Manage your status</h2>
          <p className="mt-3 text-ink-soft">From renewing your card to the residency obligation behind it.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={RefreshCw} title="PR card renewal" desc="When and how to renew, the documents you need, and travelling while your renewal is in progress." href="/immigrate/pr-card-renewal" />
            <FeatureCard icon={Clock} title="Residency obligation" desc="The 730-days-in-5-years rule, what time abroad counts and how to plan travel to stay onside." href="/immigrate/residency-obligation" />
            <FeatureCard icon={Rocket} title="Canadian permanent residence" desc="The full PR overview, your rights and obligations, and the routes that get you there." href="/immigrate/permanent-residence" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Need help with your PR card?"
        sub="Tell us about your situation and our licensed team will advise on your first card or renewal, with honest advice and clear fees."
      />
    </>
  );
}
