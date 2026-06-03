import type { Metadata } from "next";
import { Stamp, Users, BookOpen, Rocket, ListChecks } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/citizenship";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canadian Citizenship Requirements 2026",
  titleAbsolute: "Canadian Citizenship Requirements 2026: Grant & Test",
  description:
    "Canadian citizenship requirements in 2026: 1,095 days of presence, the test, tax filing and how to apply. Reviewed by a licensed RCIC. Get started today.",
  path: PATH,
  keywords: [
    "how to become a canadian citizen",
    "canadian citizenship",
    "canadian citizenship requirements 2026",
    "physical presence 1095 days",
    "citizenship test",
    "citizenship by descent",
  ],
});

const faqs = [
  {
    q: "How many days do I need to become a Canadian citizen?",
    a: "You must be physically present in Canada for at least 1,095 days during the five years immediately before you apply. Time spent in Canada as a temporary resident or protected person before becoming a permanent resident counts as half a day each, up to a maximum of 365 days. IRCC's online Physical Presence Calculator is the reliable way to count, and we recommend applying with a buffer of extra days in case any travel dates are questioned.",
  },
  {
    q: "Do I have to pass a test to become a Canadian citizen?",
    a: "If you are between 18 and 54 years old on the date you sign your application, yes, you must pass the citizenship test. It is 20 questions drawn from the official Discover Canada study guide, and you need 15 correct (75%) to pass. Applicants under 18 or 55 and older are exempt from both the test and the language requirement.",
  },
  {
    q: "Can I have dual citizenship in Canada?",
    a: "Yes. Canada allows dual (and multiple) citizenship, so becoming Canadian does not require you to give up another nationality. However, your other country may have its own rules, some nations do not permit dual citizenship, so confirm with that government. Note that dual citizens generally need a valid Canadian passport to board a flight to or from Canada.",
  },
  {
    q: "How long does it take to go from PR to citizenship?",
    a: "There is no fixed waiting period after you land, what matters is meeting the 1,095-day physical presence requirement within the five years before you apply. In practice, most permanent residents reach eligibility around three years after landing if they stay in Canada continuously. Once you submit, IRCC's published processing time for a citizenship grant is roughly 8 to 12 months in 2026, though it varies by case.",
  },
  {
    q: "Do I need to file taxes to become a citizen?",
    a: "Yes, if you were required to file under the Income Tax Act. You must have met your personal income tax filing obligations for at least three of the five tax years that fall within your eligibility period. IRCC verifies this directly with the Canada Revenue Agency, so your filings should be in order before you apply.",
  },
  {
    q: "What is citizenship by descent and how does Bill C-3 change it?",
    a: "Citizenship by descent is automatic citizenship passed from a Canadian parent to a child born outside Canada. Bill C-3 (which received Royal Assent on 20 November 2025 and came into force on 15 December 2025) removed the old first-generation limit. People born abroad before 15 December 2025 to a Canadian parent are now generally citizens automatically and can apply for a citizenship certificate as proof. This is information only, eligibility depends on your specific facts, and we can advise on your situation.",
  },
  {
    q: "Can a Regulated Canadian Immigration Consultant help with my citizenship application?",
    a: "Yes. An RCIC can advise on whether you meet the requirements, help you count your physical presence correctly, and prepare and review your application before submission. Note that the citizenship test and the oath of citizenship are completed by the applicant personally, a consultant cannot sit the test or take the oath for you.",
  },
];

export default function CitizenshipPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Canadian Citizenship Requirements 2026, Complete RCIC Guide",
            description:
              "Canadian citizenship requirements 2026: 1,095 days physical presence, the test, tax filing and how to apply. Reviewed by a licensed RCIC. Get started.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Canadian citizenship application support",
            description:
              "Canadian citizenship requirements 2026: 1,095 days physical presence, the test, tax filing and how to apply. Reviewed by a licensed RCIC. Get started.",
            path: PATH,
            serviceType: "Citizenship immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Citizenship & PR Status"
        crumbs={[{ name: "Citizenship", path: PATH }]}
        title={<>Canadian citizenship requirements: <span className="text-brand">how to become a citizen in 2026</span></>}
        lede={
          <p>
            <strong>Canadian citizenship requirements in 2026</strong> centre on being a permanent
            resident with 1,095 days of physical presence in Canada, then passing the test, filing
            your taxes and taking the oath.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/immigrate", label: "Explore PR pathways" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Stamp className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Ready to apply for citizenship?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">A licensed RCIC can confirm your eligibility and review your application before you submit.</p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Citizenship requirements", href: "/citizenship/requirements", note: "Presence, language, tax and more" },
                { label: "How to apply for citizenship", href: "/citizenship/citizenship-application", note: "The full grant application" },
                { label: "Citizenship test", href: "/citizenship/citizenship-test", note: "Discover Canada, 20 questions" },
                { label: "Citizenship by descent", href: "/citizenship/citizenship-by-descent", note: "Bill C-3 and lost Canadians" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Canadian citizenship requirements to become a citizen by grant start with permanent resident status and 1,095 days of physical presence in Canada within the past five years. You also meet language and tax-filing obligations and, if you are aged 18 to 54, pass the citizenship test and take the oath."
            items={[
              <>You must be a <strong>permanent resident</strong> with <strong>1,095 days</strong> of physical presence in Canada in the last 5 years.</>,
              <>Applicants aged <strong>18–54</strong> must pass the <strong>citizenship test</strong> and meet a <strong>CLB 4</strong> language standard.</>,
              <>You must have <strong>filed taxes</strong> for at least 3 of the 5 years within your eligibility period, if required to.</>,
              <>Canada <strong>allows dual citizenship</strong>, so you usually keep your other nationality.</>,
              <><strong>Citizenship by descent</strong> changed under <strong>Bill C-3</strong> (in force 15 December 2025), removing the first-generation limit.</>,
            ]}
          />

          <h2>What are the Canadian citizenship requirements in 2026?</h2>
          <p>
            To learn <strong>how to become a Canadian citizen</strong> by grant (the process the
            Citizenship Act calls naturalisation), the starting point is permanent residence: you must
            already be a permanent resident (PR) in good standing, with no unfulfilled conditions on your
            status and no active removal order.</p>
          <p>From there, the core
            <strong> Canadian citizenship requirements</strong> for 2026 are physical presence, language,
            the citizenship test and tax filing. According to IRCC, an adult applicant needs at least
            <strong> 1,095 days of physical presence</strong> in Canada during the five years before
            applying (source: canada.ca, &ldquo;Become a Canadian citizen&rdquo;, current to May 2026).
          </p>
          <p>
            These rules apply across the country. As a standard immigration practice we advise on
            citizenship by grant and by descent and prepare your application, but we do not handle
            matters before the Immigration and Refugee Board or the courts.
          </p>
          <DataTable
            headers={["Requirement", "Detail (2026)"]}
            rows={[
              ["Permanent residence", "Must hold valid PR status with no unfulfilled conditions or removal order."],
              ["Physical presence", "1,095 days in Canada within the 5 years before you apply."],
              ["Pre-PR credit", "Time in Canada before PR counts as ½ day each, to a maximum of 365 days."],
              ["Language", "Proof of CLB 4 in English or French (ages 18–54)."],
              ["Citizenship test", "20 questions from Discover Canada; pass 15/20 (ages 18–54)."],
              ["Income tax", "Filed for at least 3 of the 5 years in the period, if required to file."],
              ["Prohibitions", "Certain criminal charges, convictions or removal orders can bar an application."],
            ]}
            caption="Core Canadian citizenship requirements (IRCC, current to 2026). Verify current details on IRCC."
          />

          <h2>Physical presence: the 1,095-day rule and how to count it</h2>
          <p>
            The <strong>physical presence 1095 days</strong> requirement is the rule most applicants
            stumble on. You must have been <em>physically in Canada</em> for at least 1,095 days
            (three years) out of the five years immediately before the date you sign your application.
            Days spent outside Canada do not count, even short trips.
          </p>
          <p>
            If you lived in Canada legally before becoming a permanent resident, for example as a
            student, worker or protected person, each of those days counts as <strong>half a day</strong>,
            up to a maximum of <strong>365 days</strong> of credit. So a year and a half of pre-PR time
            in Canada can shave roughly a year off your wait.
          </p>
          <Callout type="info" title="Use the official calculator, and apply with a buffer">
            IRCC&apos;s online Physical Presence Calculator is the safest way to count your days, and it
            generates a printout you submit with your application. We always recommend applying with a
            cushion of extra days beyond 1,095, so a single mis-remembered travel date never sinks the file.
          </Callout>

          <h2>Language and the citizenship test (Discover Canada, ages 18–54)</h2>
          <p>
            If you are between <strong>18 and 54</strong> when you sign your application, you must show
            you can communicate in English or French at <strong>Canadian Language Benchmark (CLB) 4</strong>,
            and you must pass the <strong>citizenship test</strong>. Acceptable language proof includes an
            approved third-party test, certain Canadian or English/French-medium education, or some
            government-funded language programs.
          </p>
          <p>
            The test itself is based on the official study guide, <em>Discover Canada: The Rights and
            Responsibilities of Citizenship</em>. It is <strong>20 questions</strong>, usually written, and
            you need <strong>15 correct (75%)</strong> to pass. Topics cover Canadian history, geography,
            government, rights and responsibilities. Applicants <strong>under 18 or 55 and older</strong> are
            exempt from both the test and the language requirement. Our dedicated{" "}
            <a href="/citizenship/citizenship-test">Canadian citizenship test</a> guide walks through the
            format, pass mark and how to prepare.
          </p>
          <Callout type="brand" title="The test and oath are done by you, personally">
            An RCIC can prepare and review your entire application, but the citizenship test and the oath of
            citizenship must be completed by you. No representative can sit the test or take the oath on your behalf.
          </Callout>

          <h2>The tax filing requirement</h2>
          <p>
            You must have met your personal income tax obligations for at least <strong>three of the five
            tax years</strong> that fall within your eligibility period, but only for the years you were
            actually required to file under the Income Tax Act. IRCC confirms your filing history directly
            with the Canada Revenue Agency, so it is worth making sure your returns are filed and up to date
            before you apply, rather than scrambling afterwards.
          </p>

          <h2>How to apply for Canadian citizenship: step by step</h2>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "Check your PR status, count your physical presence with the IRCC calculator, and confirm your tax filings." },
              { title: "Gather documents & language proof", desc: "Collect your PR card, travel history, ID and, if aged 18–54, acceptable proof of CLB 4 language ability." },
              { title: "Complete and submit your application", desc: "Apply online or on paper, pay the processing and right of citizenship fee, and include your physical presence calculation printout." },
              { title: "Take the test (ages 18–54)", desc: "Study Discover Canada and sit the 20-question test; you usually have up to three attempts." },
              { title: "Attend any interview", desc: "An IRCC officer may verify your documents, presence and, where needed, language ability." },
              { title: "Take the oath of citizenship", desc: "Attend a citizenship ceremony, take the oath, and receive your citizenship certificate." },
            ]}
          />

          <h2>Citizenship by descent and Bill C-3 (lost Canadians)</h2>
          <p>
            <strong>Citizenship by descent</strong> is one of the highest-demand topics in 2026. It is the
            automatic passing of Canadian citizenship from a Canadian parent to a child born outside Canada.
            For years, a &ldquo;first-generation limit&rdquo; cut this off after one generation born abroad,
            leaving many people, the so-called <em>lost Canadians</em>, without status they expected.
          </p>
          <p>
            <strong>Bill C-3</strong> changed that. It received Royal Assent on <strong>20 November 2025</strong>{" "}
            and came into force on <strong>15 December 2025</strong>, removing the first-generation limit.
            People <strong>born abroad before 15 December 2025</strong> to a Canadian parent are now generally
            citizens automatically and can apply for a citizenship certificate as proof. For those
            <strong> born on or after that date</strong> to a Canadian parent who was themselves born abroad,
            citizenship passes only where the parent has a &ldquo;substantial connection&rdquo;, at least
            1,095 days of physical presence in Canada before the birth or adoption.
          </p>
          <Callout type="warning" title="This is general information, not a determination">
            Whether you are a citizen by descent depends on your family&apos;s specific facts and dates. The
            rules are new and the surge in applications has stretched processing of citizenship certificates.
            This section is informational only; see our full{" "}
            <a href="/citizenship/citizenship-by-descent">citizenship by descent</a> guide, and{" "}
            <a href="/contact">get started</a> for an assessment of your own situation.
          </Callout>

          <h2>Dual citizenship</h2>
          <p>
            Canada permits <strong>dual citizenship</strong> (and multiple citizenships), so becoming Canadian
            does not, on Canada&apos;s side, require you to renounce another nationality. The catch is the other
            country: some nations do not allow their citizens to hold a second citizenship, or attach conditions.
            Always check the law of your country of origin. Practically, dual citizens generally need a valid
            <strong> Canadian passport</strong> to board a flight to or from Canada.
          </p>

          <h2>Processing times and how long from PR to citizenship</h2>
          <p>
            There is no mandatory waiting period after landing as a PR. Instead, the
            <strong> PR to citizenship timeline</strong> is governed by the 1,095-day presence rule. Most permanent residents who
            remain in Canada continuously reach eligibility around <strong>three years</strong> after landing.
            Pre-PR time in Canada can bring that forward, while extended travel pushes it back.
          </p>
          <p>
            Once you submit a complete application, IRCC&apos;s published processing time for a citizenship grant
            sits at roughly <strong>8 to 12 months</strong> in 2026, ending with your oath ceremony. Fees and
            processing times move, so always confirm the current figures on IRCC before you apply.
          </p>
          <DataTable
            headers={["Stage", "Typical 2026 timing"]}
            rows={[
              ["Landing as a PR to meeting 1,095 days", "~3 years if continuously in Canada (less with pre-PR credit)"],
              ["Application submitted to test/interview", "Several months, varies by office"],
              ["Grant processing (overall)", "~8–12 months (verify current IRCC processing time)"],
              ["Citizenship certificate by descent", "Processing stretched in 2026 due to high demand"],
            ]}
            caption="Illustrative 2026 timelines. Figures change, verify current processing times on IRCC."
          />

          <h2>How Wild Mountain helps with your citizenship application</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms whether you genuinely meet the
            requirements, helps you count your physical presence accurately, checks your tax filings line up, and
            reviews your application so avoidable mistakes never reach IRCC. We also advise on{" "}
            <a href="/citizenship/citizenship-by-descent">citizenship-by-descent</a> questions under the new Bill C-3
            rules. We represent clients entirely online, by video call and secure document sharing. Remember that the
            test and oath are yours to complete in person.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            own application an expert check against the Canadian citizenship requirements before you submit,
            so you reach your citizenship ceremony with confidence.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore citizenship further</h2>
          <p className="mt-3 text-ink-soft">From the test to descent and the permanent residence that gets you there.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={ListChecks} title="Citizenship requirements" desc="Physical presence, PR status, language, tax filing and the prohibitions overview." href="/citizenship/requirements" />
            <FeatureCard icon={Stamp} title="How to apply" desc="Eligibility, documents, the online application, fees, the test, interview and oath." href="/citizenship/citizenship-application" />
            <FeatureCard icon={BookOpen} title="Citizenship test" desc="The Discover Canada test, the 75% pass mark, who is exempt and how to prepare." href="/citizenship/citizenship-test" />
            <FeatureCard icon={Users} title="Citizenship by descent" desc="How Bill C-3 removed the first-generation limit and what it means for lost Canadians." href="/citizenship/citizenship-by-descent" />
            <FeatureCard icon={Rocket} title="Immigrate to Canada" desc="Permanent residence is the first step to citizenship. See every route to PR." href="/immigrate" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to become a Canadian citizen?"
        sub="Get started with a licensed RCIC and get an honest read on your eligibility and timeline."
      />
    </>
  );
}
