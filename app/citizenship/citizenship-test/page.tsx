import type { Metadata } from "next";
import { BookOpenCheck, Stamp, Globe2, Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/citizenship/citizenship-test";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Citizenship Test Canada 2026",
  titleAbsolute: "Citizenship Test Canada 2026: Questions, Pass Mark & Prep",
  description:
    "Canadian citizenship test 2026: 20 questions, pass mark 15/20, from Discover Canada. See how to prepare, who is exempt and what to expect, RCIC-reviewed.",
  path: PATH,
  keywords: [
    "citizenship test canada",
    "canadian citizenship test",
    "citizenship test 2026",
    "discover canada study guide",
    "citizenship test questions",
  ],
});

const faqs = [
  {
    q: "How many questions are on the Canadian citizenship test?",
    a: "The Canadian citizenship test has 20 multiple-choice and true/false questions drawn from the official Discover Canada study guide. The questions cover the rights and responsibilities of citizenship, Canadian history, geography, government, economy, laws and national symbols. You normally have 30 minutes to complete it.",
  },
  {
    q: "What is the pass mark for the citizenship test?",
    a: "The pass mark is 15 out of 20, which is 75%. You must answer at least 15 of the 20 questions correctly. Anything below 15 is a fail, but a first failure is not the end of your application, IRCC usually offers a second written attempt, and if needed a hearing with a citizenship officer.",
  },
  {
    q: "Who is exempt from the Canadian citizenship test?",
    a: "Applicants who are under 18 or 55 and older on the date they sign their citizenship application are exempt from both the citizenship test and the language requirement. If you are between 18 and 54, you must take the test. Exemptions for the test format itself (for example, on medical grounds) are decided case by case by IRCC.",
  },
  {
    q: "What is the best way to prepare for the citizenship test?",
    a: "Study the official Discover Canada: The Rights and Responsibilities of Citizenship guide from canada.ca, which the test is based on. Read it several times, focus on facts about Canada's history, government, geography and symbols, and use free practice questions to test recall. Most applicants who read Discover Canada thoroughly pass on the first attempt.",
  },
  {
    q: "Is the citizenship test online or in person?",
    a: "IRCC has offered the citizenship test both online (taken remotely under verification) and in person at a local office, depending on the period and your case. You will receive a notice telling you the format, date and how to prepare. Always follow the instructions in your specific invitation, as IRCC adjusts delivery from time to time.",
  },
  {
    q: "What happens if I fail the citizenship test?",
    a: "Failing the first attempt does not automatically end your application. IRCC generally gives you a second chance to write the test. If you do not pass the second attempt, you are usually scheduled for a hearing with a citizenship officer who assesses your knowledge in person. Only after these steps would the application typically be refused, and you can reapply.",
  },
  {
    q: "Do I have to take the test myself, or can a consultant help?",
    a: "You must take the citizenship test yourself, no representative, including a Regulated Canadian Immigration Consultant, can sit the test or take the oath of citizenship on your behalf. An RCIC can confirm your eligibility, prepare and review your full application, and explain what to expect, but the test and oath are completed by the applicant personally.",
  },
  {
    q: "How long do I have to study before the test?",
    a: "After you submit a complete citizenship application, IRCC processes it and then sends a notice for the test, usually giving you a few weeks of warning. In practice most applicants have several months between applying and testing, so it is wise to start reading Discover Canada early rather than waiting for the invitation.",
  },
];

export default function CitizenshipTestPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Citizenship Test Canada 2026, Format, Study Guide & How to Prepare",
            description:
              "Citizenship test Canada 2026: 20 questions, pass mark 15/20, from Discover Canada. How to prepare, who is exempt, and what to expect. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Canadian citizenship application support",
            description:
              "Citizenship test Canada 2026: 20 questions, pass mark 15/20, from Discover Canada. How to prepare, who is exempt, and what to expect. RCIC-reviewed.",
            path: PATH,
            serviceType: "Citizenship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Citizenship & PR Status"
        crumbs={[
          { name: "Citizenship", path: "/citizenship" },
          { name: "Citizenship Test", path: PATH },
        ]}
        title={<>The Canadian citizenship test: <span className="text-brand">questions, pass mark & prep</span></>}
        lede={
          <p>
            <strong>The Canadian citizenship test is a 20-question, multiple-choice test</strong> based on the
            official <em>Discover Canada</em> study guide. You need 15 correct (75%) to pass, and it applies
            to applicants aged 18 to 54.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/citizenship", label: "Citizenship requirements" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <BookOpenCheck className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Preparing to apply for citizenship?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">A licensed RCIC can confirm your eligibility and review your application before you submit.</p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canadian citizenship requirements", href: "/citizenship", note: "The full 2026 eligibility guide" },
                { label: "Citizenship requirements detail", href: "/citizenship/requirements", note: "Presence, language, tax and more" },
                { label: "How to apply for citizenship", href: "/citizenship/citizenship-application", note: "The full grant application" },
                { label: "Citizenship by descent", href: "/citizenship/citizenship-by-descent", note: "Bill C-3 and Lost Canadians" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Canadian citizenship test is a short knowledge exam taken by applicants aged 18 to 54 as part of the grant process. It has 20 multiple-choice and true or false questions from the official Discover Canada study guide, and you need a passing score of 15 out of 20 (75%). The test covers the rights and responsibilities of citizenship, history, geography and government, is usually taken online, and applicants under 18 or 55 and older are generally exempt."
            items={[
              <>The citizenship test is <strong>20 questions</strong>, multiple-choice and true/false, from the <strong>Discover Canada</strong> guide.</>,
              <>The pass mark is <strong>15 out of 20 (75%)</strong>; you usually have <strong>30 minutes</strong>.</>,
              <>Only applicants aged <strong>18–54</strong> take the test; those <strong>under 18 or 55+</strong> are exempt.</>,
              <>It covers <strong>rights & responsibilities, history, geography, government and symbols</strong>.</>,
              <>Failing the first attempt is <strong>not the end</strong>: a second written test, then a hearing, usually follow.</>,
            ]}
          />

          <h2>What is the Canadian citizenship test?</h2>
          <p>
            The <strong>Canadian citizenship test</strong> is a short knowledge test you must pass to become a
            citizen by grant if you are between 18 and 54 years old. According to IRCC, it is{" "}
            <strong>20 questions</strong> drawn from the official study guide and you need{" "}
            <strong>15 correct (75%) to pass</strong> (source: canada.ca, &ldquo;Prepare for the citizenship
            test&rdquo;, current to May 2026). The questions are multiple-choice and true/false, and you
            normally have 30 minutes to finish.
          </p>
          <p>
            The test is one step inside the wider <a href="/citizenship">Canadian citizenship requirements</a>:
            you take it after you have submitted a complete application and IRCC has confirmed you are eligible.
            As a standard immigration practice we advise on citizenship by grant and by descent and prepare your
            application, but we do not handle matters before the Immigration and Refugee Board or the courts, and
            we never guarantee an outcome.
          </p>
          <DataTable
            headers={["Test fact", "Detail (2026)"]}
            rows={[
              ["Number of questions", "20"],
              ["Question types", "Multiple-choice and true/false"],
              ["Pass mark", "15 out of 20 (75%)"],
              ["Time allowed", "Usually 30 minutes"],
              ["Who must take it", "Applicants aged 18–54 on the date they sign the application"],
              ["Based on", "Discover Canada: The Rights and Responsibilities of Citizenship"],
              ["Language", "Taken in English or French"],
              ["Attempts", "Usually up to a second written test, then a hearing if needed"],
            ]}
            caption="Canadian citizenship test format (IRCC, current to 2026). Verify current details on canada.ca."
          />

          <h2>What is on the citizenship test? (Discover Canada study guide)</h2>
          <p>
            Every question on the test is drawn from <em>Discover Canada: The Rights and Responsibilities of
            Citizenship</em>, the free official <strong>Discover Canada study guide</strong> published by IRCC.
            If you read and understand the guide, you have seen the source material for every possible{" "}
            <strong>citizenship test question</strong>. The guide is organised into themes covering Canada&apos;s
            rights and responsibilities, history, people, government, geography, economy and symbols.
          </p>
          <p>
            There is no way to predict the exact 20 questions you will be asked, because they are randomised from
            the full pool. That is why thorough reading beats trying to memorise a short list of facts. The table
            below shows the main areas the questions are pulled from.
          </p>
          <DataTable
            headers={["Topic area", "Examples of what to know"]}
            rows={[
              ["Rights & responsibilities", "Voting, the rule of law, equality, jury duty, obeying the law"],
              ["History", "Indigenous peoples, French and British settlement, Confederation 1867, the World Wars"],
              ["Geography", "The provinces and territories, capital cities, regions and major bodies of water"],
              ["Government", "Parliamentary democracy, the three branches, the monarch, federal vs provincial powers"],
              ["Symbols & identity", "The flag, the maple leaf, the national anthem, the beaver, official languages"],
              ["Economy", "Major industries, trading partners and the regions' economic strengths"],
            ]}
            caption="Themes covered by the citizenship test, from Discover Canada (IRCC, 2026). Read the full guide for the source of every question."
          />

          <h2>Who is exempt from the citizenship test?</h2>
          <p>
            The single most common question is <strong>who is exempt</strong>. The answer is set by age:
            applicants who are <strong>under 18 or 55 and older</strong> on the date they sign their citizenship
            application do not have to take the test, and they are also exempt from the language requirement. If
            you are between <strong>18 and 54</strong>, the test applies to you.
          </p>
          <p>
            Beyond age, IRCC may make accommodations for some applicants, for example adjustments for a
            disability or medical condition, or an oral test instead of a written one. These are decided
            case by case, so if you think you may need an accommodation, raise it with IRCC as part of your
            application rather than assuming an automatic exemption.
          </p>
          <Callout type="brand" title="The test and oath are done by you, personally">
            An RCIC can prepare and review your entire application and explain exactly what to expect, but the
            citizenship test and the oath of citizenship must be completed by you. No representative can sit the
            test or take the oath on your behalf.
          </Callout>

          <h2>Is the citizenship test online or in person?</h2>
          <p>
            IRCC has delivered the citizenship test both <strong>online</strong>, taken remotely under identity
            verification, and <strong>in person</strong> at a local office, and the format has shifted over
            recent years. You will receive a notice that tells you the date, the format and how to log in or
            where to attend. Whatever the channel, the content and pass mark are the same: 20 questions, 15 to
            pass.
          </p>
          <p>
            Because IRCC adjusts delivery from time to time, the golden rule is to follow the instructions in
            your specific invitation rather than what a friend experienced a year ago. If you sit the test
            online, make sure you have a quiet space, a stable connection and the identity documents IRCC asks
            for ready in advance.
          </p>
          <Callout type="info" title="Always confirm the current process on IRCC">
            Test delivery, scheduling and the study guide edition can change. Confirm the live details on
            canada.ca and in your IRCC account before your test date, and treat older blog posts about the
            &ldquo;in-person only&rdquo; or &ldquo;online only&rdquo; test with caution.
          </Callout>

          <h2>How to prepare for the citizenship test</h2>
          <p>
            <strong>How to prepare for the citizenship test</strong> comes down to one core habit: read{" "}
            <em>Discover Canada</em> properly, more than once. The guide is free on canada.ca as a study guide
            PDF download, as a web page and as Discover Canada audio, so you can read it, listen to it on a
            commute, or both. Most applicants who work through the whole guide a few times pass the Canadian
            citizenship test on their first attempt.
          </p>
          <Steps
            steps={[
              { title: "Download Discover Canada", desc: "Get the free official study guide from canada.ca in PDF, web or audio format, it is the only source you truly need." },
              { title: "Read it in full, twice", desc: "Work through every chapter once for understanding, then again to lock in dates, names, provinces and symbols." },
              { title: "Focus on the heavy-hitters", desc: "Pay extra attention to history, the system of government, and the provinces, territories and capitals." },
              { title: "Use free practice questions", desc: "Test your recall with citizenship test practice questions and a free practice test that mirror the format. Treat any wrong answer as a prompt to re-read that section." },
              { title: "Review your local region", desc: "Some questions touch on your province or territory, so make sure you know your local geography and representatives." },
              { title: "Rest before test day", desc: "Have your ID ready, confirm the format and time in your notice, and approach the 30 minutes calmly. It is shorter than most people expect." },
            ]}
          />
          <Callout type="warning" title="Study the official guide, not just question lists">
            Free practice questions are useful for recall, but unofficial &ldquo;cheat sheets&rdquo; can be out
            of date or wrong. The test is written from <em>Discover Canada</em>, so the guide itself is always
            the authoritative source, verify anything you are unsure of against canada.ca.
          </Callout>

          <h2>What happens if you fail the citizenship test?</h2>
          <p>
            Failing the first attempt is not the end of your application. If you score below 15, IRCC generally
            offers a <strong>second written test</strong>, usually a few weeks later. If you do not pass that
            second attempt either, you are normally scheduled for a <strong>hearing with a citizenship
            officer</strong>, who assesses your knowledge of Canada in person.
          </p>
          <p>
            Only after these steps would an application typically be refused on knowledge grounds, and even then
            you can reapply. The practical takeaway is to prepare well so the first attempt counts, while knowing
            that one bad result does not sink your case.
          </p>

          <h2>After the test: the oath and citizenship ceremony</h2>
          <p>
            Passing the test is a milestone, not the finish line. Once IRCC has approved your application, you
            are invited to take the <strong>oath of citizenship</strong> at a citizenship ceremony, which may be
            held in person or online. At the ceremony you take the oath, sign the oath form and receive your{" "}
            <strong>citizenship certificate</strong>, the moment you officially become a Canadian citizen.
          </p>
          <p>
            Like the test, the oath must be taken by you personally. After the ceremony you can apply for your
            first Canadian passport and, if you wish, a citizenship certificate as proof of status. Canada
            permits <strong>dual citizenship</strong>, so becoming Canadian does not, on Canada&apos;s side,
            require you to give up another nationality, though you should check the rules of your other country.
          </p>

          <h2>How Wild Mountain Immigration helps with your citizenship application</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms whether you genuinely meet the{" "}
            <a href="/citizenship">citizenship requirements</a>, counts your physical presence accurately, checks
            your tax filings line up, and reviews your application so avoidable mistakes never reach IRCC. We
            also advise on <a href="/citizenship/citizenship-by-descent">citizenship by descent</a> under the new
            Bill C-3 rules, and on the full range of <a href="/immigrate">permanent-residence routes</a> that
            lead there. We represent clients entirely online, by video call and secure document sharing. Remember
            that the test and oath are yours to complete in person.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            own application an expert check before you submit, so you can walk into the Canadian citizenship test
            confident the rest of your file is sound.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore citizenship further</h2>
          <p className="mt-3 text-ink-soft">The test is one step. Here is the bigger picture.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Stamp} title="Citizenship requirements" desc="The full 2026 guide to citizenship by grant: physical presence, language, tax filing and the oath." href="/citizenship" />
            <FeatureCard icon={Globe2} title="Citizenship by descent" desc="How Bill C-3 removed the first-generation limit and what it means for lost Canadians." href="/citizenship/citizenship-by-descent" />
            <FeatureCard icon={Rocket} title="Immigrate to Canada" desc="Permanent residence is the first step to citizenship. See every route to PR." href="/immigrate" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to become a Canadian citizen?"
        sub="Get started with a licensed RCIC and get an honest read on your eligibility, the test and your timeline."
      />
    </>
  );
}
