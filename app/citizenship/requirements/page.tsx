import type { Metadata } from "next";
import { ListChecks, Stamp, BookOpen, Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/citizenship/requirements";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canadian Citizenship Eligibility Requirements",
  titleAbsolute: "Canadian Citizenship Eligibility Requirements",
  description:
    "Citizenship eligibility in Canada: 1,095 minimum days, PR status in good standing, tax filing, language at CLB 4 and the knowledge test. Do you qualify?",
  path: PATH,
  keywords: [
    "citizenship eligibility canada",
    "canadian citizenship eligibility requirements",
    "canadian citizenship requirements",
    "do i qualify for canadian citizenship",
    "physical presence 1095 days",
  ],
});

const faqs = [
  {
    q: "How many days do I need to be in Canada for citizenship?",
    a: "You must be physically present in Canada for at least 1,095 days during the five years immediately before the date you sign your application. Time spent in Canada legally before becoming a permanent resident, for example as a student, worker or protected person, counts as half a day each, up to a maximum of 365 days of credit. The IRCC Physical Presence Calculator is the reliable way to count, and we recommend applying with a buffer of extra days beyond 1,095.",
  },
  {
    q: "Do I need to be a permanent resident to apply for citizenship?",
    a: "Yes. To apply for citizenship by grant you must already be a permanent resident in good standing, with no unfulfilled conditions on your status and no active removal order. Your PR status does not need to be unexpired on a card as long as the underlying status is valid, but it must be in good standing. You also do not have a minimum waiting period after landing; what governs your timeline is meeting the 1,095-day physical presence rule.",
  },
  {
    q: "Is there a language requirement for Canadian citizenship?",
    a: "Yes, for applicants aged 18 to 54 on the date they sign the application. You must show you can communicate in English or French at Canadian Language Benchmark (CLB) level 4. Acceptable proof includes an approved third-party language test, certain Canadian or English/French-medium education, or some government-funded language programs. Applicants under 18 or 55 and older are exempt from the language requirement.",
  },
  {
    q: "Who has to take the citizenship knowledge test?",
    a: "Applicants between 18 and 54 years old on the date they sign the application must pass the citizenship knowledge test. It is 20 questions drawn from the official Discover Canada study guide, covering history, geography, government, rights and responsibilities, and you need 15 correct (75%) to pass. Those under 18 or 55 and older are exempt from both the knowledge test and the language requirement.",
  },
  {
    q: "Do I have to file taxes to qualify for citizenship?",
    a: "Yes, if you were required to file under the Income Tax Act. You must have met your personal income tax filing obligations for at least three of the five tax years that fall within your eligibility period. IRCC verifies this directly with the Canada Revenue Agency, so your filings should be in order and up to date before you apply.",
  },
  {
    q: "What can stop me from becoming a Canadian citizen?",
    a: "Certain prohibitions can bar or delay a citizenship grant, including some criminal charges or convictions, being under a removal order, or time spent in prison, on parole or on probation during the relevant period. This is general information only and not a determination. Assessing prohibitions is outside our standard service, so where these issues arise we will be candid about that and recommend you obtain the appropriate advice.",
  },
  {
    q: "Does time outside Canada count toward the 1,095 days?",
    a: "No. Only days you are physically present in Canada count toward the 1,095-day requirement, and days spent outside Canada do not count, even short trips. The exception is pre-PR time spent legally in Canada, which counts as half a day each up to a 365-day maximum. Because the count is exact, the IRCC Physical Presence Calculator is the safest tool, and applying with a buffer protects you if a date is questioned.",
  },
  {
    q: "How soon after becoming a PR can I apply?",
    a: "There is no fixed waiting period after you land; what matters is meeting the 1,095-day physical presence requirement within the five years before you apply. In practice, most permanent residents reach eligibility around three years after landing if they stay in Canada continuously, and pre-PR credit can bring that forward. Extended travel pushes it back, so count carefully before you apply.",
  },
];

export default function CitizenshipRequirementsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Canadian Citizenship Requirements: The 2026 Guide",
            description:
              "Canadian citizenship requirements: 1,095 days of physical presence, PR status in good standing, tax filing, language at CLB 4 and the knowledge test.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-21",
          }),
          serviceLd({
            name: "Canadian citizenship eligibility assessment",
            description:
              "Canadian citizenship requirements: 1,095 days of physical presence, PR status in good standing, tax filing, language at CLB 4 and the knowledge test.",
            path: PATH,
            serviceType: "Citizenship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Citizenship"
        crumbs={[
          { name: "Canadian Citizenship", path: "/citizenship" },
          { name: "Requirements", path: PATH },
        ]}
        title={<>Canadian citizenship <span className="text-brand">eligibility</span> requirements</>}
        lede={
          <p>
            Your <strong>citizenship eligibility in Canada</strong> centres on five things: permanent resident status
            in good standing, 1,095 days of physical presence, tax filing, language ability and the knowledge test.
            This guide explains each citizenship eligibility requirement so you know exactly whether you qualify before
            you apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/citizenship/citizenship-application", label: "How to apply" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <ListChecks className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure if you qualify?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can confirm your eligibility and help you count your physical presence accurately.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "How to apply for citizenship", href: "/citizenship/citizenship-application", note: "The full application process" },
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
            summary="Citizenship eligibility in Canada for an adult grant means permanent resident status in good standing plus 1,095 days of physical presence in the past five years. You also need tax filing for three of those years, and (ages 18 to 54) language at CLB 4 and the knowledge test. Confirm all figures on canada.ca."
            items={[
              <>You need <strong>1,095 days</strong> of physical presence in Canada in the five years before you apply.</>,
              <>You must be a <strong>permanent resident in good standing</strong>, with no unfulfilled conditions or removal order.</>,
              <>You must have <strong>filed taxes</strong> for at least 3 of the 5 years in the period, if required to.</>,
              <>Applicants aged <strong>18 to 54</strong> must meet a <strong>CLB 4</strong> language standard and pass the <a href="/citizenship/citizenship-test">knowledge test</a>.</>,
              <>Certain <strong>prohibitions</strong> can bar an application; this is general information, not a determination.</>,
            ]}
          />

          <h2>What are the Canadian citizenship eligibility requirements?</h2>
          <p>
            To become a Canadian citizen by grant, you must meet a defined set of{" "}
            <strong>citizenship eligibility requirements</strong> under the Citizenship Act. The starting point is
            permanent residence, and from there the core rules are physical presence, tax filing, language and the
            knowledge test. These rules apply across the country, so if you are asking <em>do I qualify for Canadian
            citizenship</em>, this is your eligibility checklist. The table below summarises each one, and the sections
            that follow explain them in detail. All figures reflect IRCC policy current to May 2026; confirm the latest
            on canada.ca before you apply.
          </p>
          <DataTable
            headers={["Requirement", "Detail (2026)"]}
            rows={[
              ["Permanent residence", "Valid PR status in good standing, no unfulfilled conditions or removal order."],
              ["Physical presence", "1,095 days in Canada within the 5 years before you apply."],
              ["Pre-PR credit", "Time legally in Canada before PR counts as ½ day each, to a maximum of 365 days."],
              ["Tax filing", "Filed for at least 3 of the 5 years in the period, if required to file."],
              ["Language (ages 18 to 54)", "Proof of English or French at CLB 4."],
              ["Knowledge test (ages 18 to 54)", "20 questions from Discover Canada; pass 15/20."],
              ["Prohibitions", "Certain charges, convictions or removal orders can bar an application."],
            ]}
            caption="Core Canadian citizenship requirements (IRCC, current to 2026). Verify current details on IRCC."
          />

          <h2>Permanent resident status in good standing</h2>
          <p>
            Citizenship by grant is for <strong>permanent residents</strong>, so the first eligibility requirement is
            that you hold <strong>good standing PR status</strong>. That means valid permanent residence with no
            unfulfilled conditions on your status and no active removal order. There is no mandatory waiting period
            after you land. What governs your timeline is the physical presence rule below. If your PR card has expired
            but your underlying status is still valid, you
            can generally still apply, though you should keep your status documents current.
          </p>

          <h2>Physical presence: the 1,095-day rule</h2>
          <p>
            The <strong>physical presence 1095 days</strong> requirement is the rule most applicants stumble on. This
            is the minimum days for citizenship: you must have been physically in Canada for at least{" "}
            <strong>1,095 days</strong> (three years) out of the five years immediately before the date you sign your
            application. Days spent outside Canada do not count, even short trips.
          </p>
          <p>
            If you lived in Canada legally before becoming a permanent resident, for example as a student, worker or
            protected person, each of those days counts as <strong>half a day</strong>, up to a maximum of{" "}
            <strong>365 days</strong> of credit. So a year and a half of pre-PR time in Canada can shave roughly a
            year off your wait.
          </p>
          <Callout type="info" title="Use the official calculator, and apply with a buffer">
            IRCC&apos;s online Physical Presence Calculator is the safest way to count your days, and it generates a
            printout you submit with your application. We always recommend applying with a cushion of extra days
            beyond 1,095, so a single mis-remembered travel date never sinks the file.
          </Callout>

          <h2>Tax filing</h2>
          <p>
            You must have met your personal income tax obligations for at least <strong>three of the five tax
            years</strong> that fall within your eligibility period, but only for the years you were actually required
            to file under the Income Tax Act. IRCC confirms your filing history directly with the Canada Revenue
            Agency, so it is worth making sure your returns are filed and up to date before you apply, rather than
            scrambling afterwards.
          </p>

          <h2>Language (CLB 4, ages 18 to 54)</h2>
          <p>
            If you are between <strong>18 and 54</strong> when you sign your application, you must show you can
            communicate in English or French at <strong>Canadian Language Benchmark (CLB) 4</strong>. Acceptable
            proof includes an approved third-party language test, certain Canadian or English/French-medium education,
            or some government-funded language programs. Applicants under 18 or 55 and older are exempt from the
            language requirement.
          </p>

          <h2>The knowledge test (ages 18 to 54)</h2>
          <p>
            Applicants in the same <strong>18 to 54</strong> age band must also pass the <strong>citizenship
            knowledge test</strong>. It is based on the official study guide, <em>Discover Canada: The Rights and
            Responsibilities of Citizenship</em>, and is <strong>20 questions</strong>, usually written, with{" "}
            <strong>15 correct (75%)</strong> needed to pass. Topics cover Canadian history, geography, government,
            rights and responsibilities. Our dedicated <a href="/citizenship/citizenship-test">citizenship test</a>{" "}
            guide walks through the format, pass mark and how to prepare.
          </p>

          <h2>Prohibitions: an overview</h2>
          <p>
            Some circumstances can <strong>prohibit</strong> a citizenship grant or delay it. In general terms, these
            can include certain criminal charges or convictions, being under a removal order, or time spent in prison,
            on parole or on probation during the relevant period. This section is general information only and is not
            a determination of your situation.
          </p>
          <Callout type="warning" title="Prohibitions are outside our standard service">
            Assessing criminal prohibitions and related matters is outside the scope of our standard service. If any
            of these issues touch your situation, we will be candid about that and recommend you obtain appropriate
            advice, rather than guess. For straightforward grant applications, we focus on getting your presence, tax
            and documents exactly right.
          </Callout>

          <h2>How to confirm you qualify, step by step</h2>
          <Steps
            steps={[
              { title: "Confirm PR status", desc: "Check that your permanent residence is valid and in good standing, with no unfulfilled conditions or removal order." },
              { title: "Count your physical presence", desc: "Use the IRCC Physical Presence Calculator, including any pre-PR credit, and aim for a buffer beyond 1,095 days." },
              { title: "Check tax, language and the test", desc: "Confirm your tax filings, line up CLB 4 language proof and prepare for the knowledge test if you are aged 18 to 54." },
            ]}
          />

          <h2>How Wild Mountain helps you confirm eligibility</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms whether you genuinely meet the
            <strong> citizenship eligibility</strong> rules in Canada, helps you count your physical presence
            accurately, checks your tax filings line up and helps you line up acceptable language proof. We represent
            clients entirely online, by video call and secure document sharing. Once you are confident you qualify, our{" "}
            <a href="/citizenship/citizenship-application">how to apply</a> guide walks through the application itself.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Next steps to citizenship</h2>
          <p className="mt-3 text-ink-soft">From confirming eligibility to applying and passing the test.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Stamp} title="How to apply" desc="Eligibility, documents, the online application, fees, the test, interview and oath." href="/citizenship/citizenship-application" />
            <FeatureCard icon={BookOpen} title="Citizenship test" desc="The Discover Canada test, the 75% pass mark, who is exempt and how to prepare." href="/citizenship/citizenship-test" />
            <FeatureCard icon={Rocket} title="Canadian Citizenship" desc="The full overview of becoming a Canadian citizen, from PR to the oath." href="/citizenship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Do you meet the citizenship requirements?"
        sub="Get started with a licensed RCIC for an honest read on your eligibility and your physical presence count."
      />
    </>
  );
}
