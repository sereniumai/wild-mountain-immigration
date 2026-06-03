import type { Metadata } from "next";
import { Stamp, BookOpen, ListChecks, Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/citizenship/citizenship-application";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "How to Apply for Canadian Citizenship",
  titleAbsolute: "How to Apply for Canadian Citizenship 2026",
  description:
    "How to apply for Canadian citizenship the right way: eligibility, documents, the online application, fees, the test and the oath. Get expert RCIC help.",
  path: PATH,
  keywords: [
    "canada citizenship application",
    "how to apply for canadian citizenship",
    "citizenship application online",
    "citizenship grant application",
    "citizenship oath",
  ],
});

const faqs = [
  {
    q: "How do I apply for Canadian citizenship online?",
    a: "Most adults applying for a citizenship grant now apply through IRCC's online citizenship application portal. You create or sign in to an account, complete the application form, upload your supporting documents (including your physical presence calculation), pay the fees electronically and submit. IRCC then sends an acknowledgement of receipt and, later, an invitation to any test and interview. A small number of applicants still apply on paper where the online route is not available for their situation, so confirm the current channel for your case on canada.ca.",
  },
  {
    q: "What documents do I need for a citizenship application?",
    a: "Core documents usually include your physical presence calculation printout, a copy of your valid PR card or PR document, two pieces of personal identification, a passport or travel-document history covering the eligibility period, and, for applicants aged 18 to 54, acceptable proof of English or French at CLB 4. Depending on your situation you may also need court documents, name-change records or additional identity evidence. We build a tailored checklist for your file, because missing or inconsistent documents are a leading cause of returned applications.",
  },
  {
    q: "How much does a Canadian citizenship application cost?",
    a: "For an adult grant application, IRCC charges a processing fee plus the right-of-citizenship fee, combined into a single adult total, with a lower fee for applicants under 18. Because these government fees change from time to time, we point you to the current figures on canada.ca rather than quoting a number that may have moved. Our professional fee for preparing and reviewing your application is separate and set out in a written agreement before we begin.",
  },
  {
    q: "Do I have to take a test and attend an interview?",
    a: "If you are between 18 and 54 when you sign your application, you must pass the citizenship test, which is 20 questions drawn from the Discover Canada study guide, with 15 correct needed to pass. IRCC may also invite you to an interview with a citizenship official to verify your documents, your physical presence and, where needed, your language ability. Applicants under 18 or 55 and older are exempt from the test and the language requirement, though they may still be asked to attend an appointment.",
  },
  {
    q: "How long does a citizenship application take in 2026?",
    a: "IRCC's published processing time for a citizenship grant sits at roughly 8 to 12 months in 2026, from a complete application through to the oath ceremony, though it varies by case and office. The single biggest avoidable delay is an incomplete application that gets returned, which effectively restarts your wait. Processing times are updated regularly, so check the live IRCC processing-times tool before you plan around a date.",
  },
  {
    q: "What is the oath of citizenship?",
    a: "The oath of citizenship is the final step. Once your application is approved you are invited to a citizenship ceremony, in person or online, where you take the oath, sign the oath form and receive your citizenship certificate. Taking the oath is what actually makes you a Canadian citizen. Like the test, the oath must be completed by you personally; no representative can take it on your behalf.",
  },
  {
    q: "Can an RCIC apply for citizenship on my behalf?",
    a: "A Regulated Canadian Immigration Consultant can advise on your eligibility, help you count your physical presence accurately, prepare and review your application and act as your authorised representative with IRCC. What a consultant cannot do is sit the citizenship test or take the oath for you, those steps are yours alone. Working under a licensed RCIC, our team makes sure the parts we can handle are complete and accurate before they reach IRCC.",
  },
  {
    q: "Should I apply with extra days beyond 1,095?",
    a: "Yes, we recommend it. The physical presence requirement is at least 1,095 days in the five years before you sign your application, and applying with only the bare minimum leaves no room for error if a travel date is questioned. Building in a buffer of extra days protects your file, so a single mis-remembered trip does not put you below the threshold. The IRCC Physical Presence Calculator is the reliable way to count and generates the printout you submit.",
  },
];

export default function CitizenshipApplicationPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "How to Apply for Canadian Citizenship: The 2026 Guide",
            description:
              "How to apply for Canadian citizenship: eligibility, document checklist, the online application, fees, the test and interview, the oath and timelines.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Canadian citizenship application support",
            description:
              "How to apply for Canadian citizenship: eligibility, document checklist, the online application, fees, the test and interview, the oath and timelines.",
            path: PATH,
            serviceType: "Citizenship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Citizenship"
        crumbs={[
          { name: "Canadian Citizenship", path: "/citizenship" },
          { name: "How to Apply", path: PATH },
        ]}
        title={<>How to apply for <span className="text-brand">Canadian citizenship</span></>}
        lede={
          <p>
            <strong>How to apply for Canadian citizenship</strong> is a defined process once you meet the
            requirements: confirm your eligibility, gather your documents, submit online, pay the fees, pass the test
            and interview, then take the oath. This guide walks through each stage so you apply once, completely,
            and with confidence.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/citizenship/requirements", label: "Check the requirements" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Stamp className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Ready to apply for citizenship?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can confirm your eligibility, build your document checklist and review your
                application before you submit.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Citizenship requirements", href: "/citizenship/requirements", note: "Presence, language, tax and more" },
                { label: "Citizenship test", href: "/citizenship/citizenship-test", note: "Discover Canada, 20 questions" },
                { label: "Canadian Citizenship", href: "/citizenship", note: "The full citizenship overview" },
                { label: "Get started", href: "/contact", note: "Get an honest read on your case" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="How to apply for Canadian citizenship: confirm your eligibility (PR status, 1,095 days of physical presence, language and tax filing), prepare your documents and presence calculation, submit the application online and pay the fees, then pass the test and take the oath. Applicants aged 18 to 54 also face an interview at IRCC's discretion. Grant processing currently runs roughly 8 to 12 months, with fees confirmed on canada.ca."
            items={[
              <>First confirm you meet the <a href="/citizenship/requirements">citizenship requirements</a>: PR status, 1,095 days of presence, language and tax.</>,
              <>Most adults <strong>apply online</strong> through the IRCC portal, uploading documents and the physical presence calculation.</>,
              <>Applicants aged <strong>18 to 54</strong> pass the <a href="/citizenship/citizenship-test">citizenship test</a> and may attend an interview.</>,
              <>Approved applicants take the <strong>oath of citizenship</strong>, which is what makes you a citizen.</>,
              <>Grant processing runs roughly <strong>8 to 12 months</strong> in 2026; verify current fees and times on canada.ca.</>,
            ]}
          />

          <h2>Who can apply for Canadian citizenship?</h2>
          <p>
            Before you start a <strong>Canada citizenship application</strong>, confirm you are eligible, because the
            most common reason an application is returned is that it was filed too early. To apply for citizenship by
            grant you must be a permanent resident in good standing, have been physically present in Canada for at
            least <strong>1,095 days</strong> in the five years before you sign your application, have met your tax
            filing obligations, and, if you are aged 18 to 54, meet the language standard and pass the citizenship
            test. Our dedicated <a href="/citizenship/requirements">citizenship requirements</a> guide covers each of
            these in full.
          </p>
          <p>
            As a standard immigration practice, we advise on citizenship by grant and prepare your application. The
            figures and rules below reflect IRCC policy current to May 2026; always confirm the latest details on
            canada.ca before you apply.
          </p>

          <h2>The document checklist</h2>
          <p>
            A complete document set is what protects your timeline. While IRCC provides an official document checklist
            with the application, the core items for most adult grant applicants are below. Your exact list depends on
            your history, so we tailor a checklist to your file.
          </p>
          <DataTable
            headers={["Document", "Why it is needed"]}
            rows={[
              ["Physical presence calculation", "The printout from the IRCC Physical Presence Calculator, showing you meet 1,095 days."],
              ["PR card or PR document", "Proof you hold valid permanent resident status."],
              ["Two pieces of personal ID", "To confirm your identity, with at least one showing your photo and signature where possible."],
              ["Travel and passport history", "Pages and entry/exit records covering the eligibility period, to support your day count."],
              ["Language proof (ages 18 to 54)", "Acceptable evidence of English or French at CLB 4."],
              ["Situation-specific documents", "Name-change records, court documents or extra identity evidence where they apply."],
            ]}
            caption="A typical adult grant document set. Use the official IRCC checklist for your application and confirm current requirements on canada.ca."
          />
          <Callout type="info" title="Count your days with the official calculator">
            IRCC&apos;s online Physical Presence Calculator is the safest way to count your 1,095 days, and it
            generates the printout you submit with your application. We always recommend applying with a cushion of
            extra days beyond 1,095, so a single mis-remembered travel date never sinks the file.
          </Callout>

          <h2>How the online application works</h2>
          <p>
            Most adults now apply through IRCC&apos;s <strong>online citizenship application</strong>. You sign in to
            your account, complete the citizenship application form (the equivalent of the paper{" "}
            <strong>form CIT 0002</strong>), upload your supporting documents, pay the fees electronically and submit.
            IRCC sends an <strong>acknowledgement of receipt</strong>, and later an invitation to the test and any
            interview. The choice of <strong>apply on paper vs online</strong> is not always yours: a small number of
            applicants still apply on paper where the online route is not available for their situation, so confirm
            the current channel for your case on canada.ca.
          </p>
          <p>
            Unlike many other immigration streams, a standard adult citizenship grant does not normally require
            biometrics, since IRCC already holds the fingerprints and photo taken when you became a permanent
            resident. If your situation is different, IRCC will tell you directly in writing.
          </p>

          <h2>Fees</h2>
          <p>
            For an adult grant application, IRCC charges a processing fee plus the <strong>right-of-citizenship
            fee</strong>, combined into a single adult total, with a lower fee for applicants under 18. These
            government fees change from time to time, so confirm the current figures on canada.ca rather than relying
            on a number that may have moved. Our professional fee for preparing and reviewing your application is
            separate, and we set it out in a written agreement before we begin. See our <a href="/fees">fees
            guide</a> for how our fee differs from government fees.
          </p>

          <h2>The citizenship test and interview</h2>
          <p>
            If you are between <strong>18 and 54</strong> when you sign your application, you must pass the{" "}
            <a href="/citizenship/citizenship-test">citizenship test</a>. It is <strong>20 questions</strong> drawn
            from the official study guide, <em>Discover Canada</em>, and you need <strong>15 correct (75%)</strong> to
            pass. IRCC may also invite you to an interview with a citizenship official, who can verify your documents,
            your physical presence and, where needed, your language ability. Applicants under 18 or 55 and older are
            exempt from the test and the language requirement.
          </p>
          <Callout type="brand" title="The test and oath are done by you, personally">
            An RCIC can prepare and review your entire application, but the citizenship test and the oath of
            citizenship must be completed by you. No representative can sit the test or take the oath on your behalf.
          </Callout>

          <h2>The oath of citizenship</h2>
          <p>
            The final step is the <strong>oath of citizenship</strong>. Once your application is approved, IRCC
            invites you to a citizenship ceremony, in person or online, where you take the oath, sign the oath form
            and receive your <strong>citizenship certificate</strong>. Taking the oath is what actually makes you a
            Canadian citizen, with the right to vote and to apply for a Canadian passport.
          </p>

          <h2>How to apply for Canadian citizenship, step by step</h2>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "Check your PR status, count your physical presence with the IRCC calculator, and confirm your tax filings." },
              { title: "Gather documents and language proof", desc: "Collect your PR card, ID, travel history and, if aged 18 to 54, acceptable proof of CLB 4 language ability." },
              { title: "Complete and submit online", desc: "Fill in the application, upload documents and your presence printout, pay the fees and submit through the IRCC portal." },
              { title: "Take the test (ages 18 to 54)", desc: "Study Discover Canada and sit the 20-question test, with 15 correct to pass." },
              { title: "Attend any interview", desc: "A citizenship official may verify your documents, presence and, where needed, language ability." },
              { title: "Take the oath of citizenship", desc: "Attend the ceremony, take the oath, sign the form and receive your citizenship certificate." },
            ]}
          />

          <h2>Processing times</h2>
          <p>
            Once you submit a complete application, IRCC&apos;s published processing time for a citizenship grant sits
            at roughly <strong>8 to 12 months</strong> in 2026, ending with your oath ceremony, though it varies by
            case and office. An application returned as incomplete effectively restarts your wait, which is why
            completeness at submission matters so much. Processing times are updated regularly, so check the live IRCC
            processing-times tool before you plan around a date.
          </p>

          <h2>How Wild Mountain helps with your application</h2>
          <p>
            Knowing how to apply for Canadian citizenship is one thing; applying once, completely, is another.
            Working under a licensed RCIC (CICC #R706497), our team confirms whether you genuinely meet the
            requirements, helps you count your physical presence accurately, builds a tailored document checklist and
            reviews your application so avoidable mistakes never reach IRCC and your file is not returned as
            incomplete. We represent clients entirely online, by video call and secure document sharing. Remember
            that the test and oath are yours to complete in person.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Continue with citizenship</h2>
          <p className="mt-3 text-ink-soft">From the requirements to the test and the permanent residence behind it.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={ListChecks} title="Citizenship requirements" desc="Physical presence, PR status, language, tax filing and the prohibitions overview." href="/citizenship/requirements" />
            <FeatureCard icon={BookOpen} title="Citizenship test" desc="The Discover Canada test, the 75% pass mark, who is exempt and how to prepare." href="/citizenship/citizenship-test" />
            <FeatureCard icon={Rocket} title="Canadian Citizenship" desc="The full overview of becoming a Canadian citizen, from PR to the oath." href="/citizenship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to apply for Canadian citizenship?"
        sub="Get started with a licensed RCIC and have your eligibility confirmed and your application reviewed before you submit."
      />
    </>
  );
}
