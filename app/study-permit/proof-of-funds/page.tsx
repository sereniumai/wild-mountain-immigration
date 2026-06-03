import type { Metadata } from "next";
import { GraduationCap, FileText, Wallet } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/study-permit/proof-of-funds";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Study Permit Proof of Funds 2026",
  titleAbsolute: "Study Permit Proof of Funds 2026: How Much You Need",
  description:
    "Study permit proof of funds 2026: how much to show ($20,635 plus tuition), accepted documents and the GIC route. Talk to a licensed RCIC.",
  path: PATH,
  keywords: [
    "study permit proof of funds 2026",
    "how much money for a Canadian study permit",
    "$20,635 cost-of-living requirement",
    "financial documents checklist study permit",
    "GIC study permit",
    "proof of funds study permit",
  ],
});

const faqs = [
  {
    q: "How much money do I need for a Canadian study permit in 2026?",
    a: "Outside Quebec, a single applicant must show at least $20,635 for living costs for the first year, on top of the first year's tuition and your travel costs. IRCC raised the cost-of-living figure to this amount effective January 1, 2024, and it scales upward for each accompanying family member. The figure is reviewed annually, so always confirm the current amount on the IRCC proof-of-funds page before you apply.",
  },
  {
    q: "Is a GIC required for a study permit?",
    a: "No. A Guaranteed Investment Certificate (GIC) is not mandatory for a standard study permit. The GIC became well known through the Student Direct Stream (SDS), which closed on November 8, 2024. Since SDS ended, all applicants follow the standard stream, where a GIC is just one of several accepted ways to prove funds. Many applicants still choose a GIC because it is clear, liquid and easy for an officer to verify, but bank statements, an education loan or a sponsor can work just as well.",
  },
  {
    q: "What documents count as proof of funds for a study permit?",
    a: "IRCC accepts several forms: proof of a Canadian bank account in your name with funds transferred there, a Guaranteed Investment Certificate (GIC) from a participating Canadian financial institution, a confirmed education or student loan, four months of bank statements, a bank draft in convertible currency, proof your tuition and housing are paid, a letter from a person or institution providing money, or proof of funding from within Canada (such as a scholarship). You usually combine more than one to cover tuition plus living costs.",
  },
  {
    q: "Does proof of funds have to be in a Canadian bank account?",
    a: "Not necessarily. Funds can sit in a bank account abroad, provided they are in a convertible currency and you can show they are genuine, accessible and yours. That said, money already moved into a Canadian bank account in your name, or held in a GIC, is the easiest for an officer to accept because it removes questions about currency conversion and availability. We help you decide the strongest way to present funds for your specific country and situation.",
  },
  {
    q: "How long must I have held the money before I apply?",
    a: "IRCC does not publish a fixed minimum holding period or a single minimum balance requirement, but officers look closely at the source of funds and how long the money has been available. A large deposit that appears days before you apply, with no clear source, often triggers questions or a refusal. As a rule of thumb, a four-month financial history that shows the money held and traceable is far stronger than a sudden lump sum. Keep statements that show a consistent history.",
  },
  {
    q: "Can a sponsor or my parents provide proof of funds?",
    a: "Yes. A parent, relative or other sponsor can provide the funds, supported by a sponsorship or support letter, proof of their relationship to you, and evidence of their income and savings (such as bank statements or employment letters). The key is showing the money is genuinely available to you and that the sponsor can afford to give it. Vague or undocumented sponsor support is a common reason applications are questioned.",
  },
  {
    q: "Do I need to show living costs on top of tuition?",
    a: "Yes. The $20,635 cost-of-living figure (single applicant, outside Quebec) is in addition to your first year's tuition and your travel to and from Canada. You must be able to cover all three: tuition, living expenses and travel. Showing only tuition, or only the living-cost amount, is one of the most common proof-of-funds mistakes and can lead to a refusal.",
  },
  {
    q: "Does strong proof of funds guarantee my study permit will be approved?",
    a: "No. Proof of funds is one required element of a complete study-permit application, it does not approve the application on its own. You still need a valid letter of acceptance, a Provincial Attestation Letter where required, a credible study plan and an officer's satisfaction that you will leave Canada when authorised. No one can guarantee a permit outcome; well-prepared funds simply remove one of the most common reasons files are refused.",
  },
];

export default function StudyPermitProofOfFundsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Study Permit Proof of Funds 2026, RCIC Guide",
            description:
              "Study permit proof of funds 2026: how much to show ($20,635 plus tuition), acceptable financial documents and the GIC route. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Study permit proof-of-funds support",
            description:
              "Study permit proof of funds 2026: how much to show ($20,635 plus tuition), acceptable financial documents and the GIC route. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Study permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work & Study"
        crumbs={[
          { name: "Work & Study", path: "/work-permits" },
          { name: "Study Permit", path: "/study-permit" },
          { name: "Proof of Funds", path: PATH },
        ]}
        title={<>Study Permit Proof of Funds: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            <strong>Study permit proof of funds in 2026 means showing about $20,635 in living costs plus tuition.</strong>{" "}
            A single applicant outside Quebec must demonstrate the cost-of-living amount IRCC raised in 2024, on top of
            the first year&apos;s tuition and travel, and prove the money is genuine and accessible.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/study-permit", label: "Back to the study permit guide" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Wallet className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure your funds are strong enough?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Get an honest read on your proof of funds, GIC and study-permit file from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canada study permit", href: "/study-permit", note: "The full 2026 study-permit guide" },
                { label: "Provincial Attestation Letter", href: "/study-permit/provincial-attestation-letter", note: "What a PAL is and who needs one" },
                { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp", note: "Work in Canada after you graduate" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "Study-to-PR pathways" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Proof of funds for a study permit is the money you show IRCC to prove you can cover tuition and living costs. Outside Quebec, a single applicant must demonstrate about $20,635 in first-year living expenses on top of tuition and travel, and the total rises for each family member. Acceptable proof includes bank statements, a GIC, education loans or sponsor support."
            items={[
              <>A single applicant outside Quebec must show <strong>about $20,635 in living costs</strong> for the first year.</>,
              <>That cost-of-living amount is <strong>on top of the first year&apos;s tuition and travel</strong>, not instead of it.</>,
              <>IRCC <strong>raised the figure on January 1, 2024</strong>, roughly doubling the old $10,000 requirement.</>,
              <>Accepted proof includes <strong>bank statements, a GIC, an education loan, a sponsor letter or a scholarship</strong>.</>,
              <>A <strong>GIC is not required</strong> on the standard stream, the SDS GIC route ended November 8, 2024.</>,
            ]}
          />

          <h2>How much money do I need for a Canadian study permit?</h2>
          <p>
            For most students, the headline number is two parts: <strong>tuition plus living costs</strong>. Outside
            Quebec, a single applicant must show <strong>at least $20,635</strong> for living expenses for the first
            year, <em>in addition to</em> the first year&apos;s tuition and the cost of travelling to and from Canada.
            IRCC raised this cost-of-living requirement to about $20,635 effective <strong>January 1, 2024</strong>{" "}
            (source: canada.ca, study permit proof of funds, 2026). The figure had been frozen at $10,000 for two
            decades, so the jump roughly doubled what students must demonstrate.
          </p>
          <p>
            The living-cost amount also <strong>scales upward for each accompanying family member</strong>. If your
            spouse or children plan to come with you, you must show more, and the required total rises with family size.
            Because these figures are reviewed annually, treat any amount here as current 2026 guidance and confirm the
            live number on canada.ca before you submit.
          </p>

          <h2>How much you must show, by family size</h2>
          <p>
            The table below sets out indicative living-cost requirements for applicants studying outside Quebec. Remember
            that these amounts cover <em>living costs only</em>, your first-year tuition and your travel are separate
            and must be shown on top.
          </p>
          <DataTable
            headers={["Number of family members", "Living-cost funds required (first year)"]}
            rows={[
              ["1 (just you)", "$20,635"],
              ["2 people", "$25,690"],
              ["3 people", "$31,583"],
              ["4 people", "$38,346"],
              ["5 people", "$43,492"],
              ["6 people", "$49,051"],
              ["7 people", "$54,611"],
              ["Each additional person", "Add a set amount per the IRCC schedule"],
            ]}
            caption="Indicative living-cost requirements outside Quebec, excluding tuition and travel (IRCC, current 2026 guidance). IRCC reviews these figures annually, verify the current amounts on canada.ca before applying."
          />
          <Callout type="warning" title="Living costs are on top of tuition, not instead of it">
            A frequent mistake is showing only the <strong>$20,635</strong> living-cost figure and forgetting tuition,
            or vice versa. Your proof of funds must cover <strong>tuition + living costs + travel</strong> together.
            Showing one without the others is a common reason study-permit applications are refused.
          </Callout>

          <h2>What documents count as proof of funds?</h2>
          <p>
            IRCC accepts several types of financial evidence, and most strong applications <strong>combine more than
            one</strong> to cover tuition and living costs convincingly. The point is not just to hit the dollar amount
            but to satisfy the officer that the money is <strong>genuine, yours and actually accessible</strong> to you
            while you study. The table below summarises the documents officers most commonly accept.
          </p>
          <DataTable
            headers={["Acceptable proof", "What it shows / notes"]}
            rows={[
              ["Canadian bank account in your name", "Funds transferred to an account you control, easy for an officer to verify."],
              ["Guaranteed Investment Certificate (GIC)", "A set sum held with a participating Canadian institution; clear and liquid (not mandatory)."],
              ["Education or student loan", "A confirmed loan from a bank or financial institution, with the approval letter."],
              ["Four months of bank statements", "A traceable history showing the money is genuine and not a sudden deposit."],
              ["Bank draft in convertible currency", "Funds that can be converted to Canadian dollars."],
              ["Proof tuition & housing are paid", "Receipts reducing the amount you still need to show for those costs."],
              ["Sponsor or support letter", "A person/institution giving you money, with proof of their income and your relationship."],
              ["Scholarship or in-Canada funding", "A letter confirming a scholarship or Canadian-based funding award."],
            ]}
            caption="Common forms of proof of funds accepted for a study permit (IRCC, current 2026 guidance). Verify the current document list on canada.ca."
          />
          <p>
            Whichever route you use, the underlying test is the same: can you cover tuition plus living costs, and can
            you prove it cleanly? A neat, well-documented file that ties every dollar to a clear source is far stronger
            than a larger but murky one.
          </p>

          <h2>Is a GIC required? The SDS route explained</h2>
          <p>
            A <strong>Guaranteed Investment Certificate (GIC)</strong> is a fixed sum you deposit with a participating
            Canadian financial institution, which then releases it to you in instalments after you arrive. The GIC
            became famous through the <strong>Student Direct Stream (SDS)</strong>, a faster processing route that
            required a $10,000-style GIC, upfront tuition payment and strong language scores from applicants in certain
            countries.
          </p>
          <Callout type="info" title="SDS ended on November 8, 2024">
            The Student Direct Stream <strong>closed on November 8, 2024</strong>, so every applicant now follows the
            standard study-permit stream. That means a <strong>GIC is no longer required</strong>, it is simply one of
            several accepted ways to prove funds. Many applicants still choose a GIC because it is clean, liquid and easy
            for an officer to verify, but it is now a choice, not a rule.
          </Callout>
          <p>
            If you do use a GIC, make sure it is from a participating institution and large enough to count meaningfully
            toward your living costs. If you prefer not to, a combination of a Canadian bank account, an education loan
            and four months of statements can demonstrate the same thing, what matters is clarity and traceability, not
            the specific instrument.
          </p>

          <h2>How to assemble proof of funds: step by step</h2>
          <Steps
            steps={[
              { title: "Calculate your real total", desc: "Add your first-year tuition + the living-cost figure (~$20,635 single, more per family member) + travel costs to get the true amount to show." },
              { title: "Pick your funding mix", desc: "Decide which accepted proofs you'll combine, a GIC, Canadian bank account, education loan, sponsor support and/or a scholarship." },
              { title: "Document the source of funds", desc: "Gather a four-month financial history that traces the source of funds and shows the money has been held and accessible over time, not just deposited recently." },
              { title: "Cover tuition and travel too", desc: "Include receipts for paid tuition or housing and evidence you can fund travel, so every cost is accounted for, not just living expenses." },
              { title: "Add to your study-permit file", desc: "Submit your proof of funds alongside your acceptance letter, PAL where required, passport and study plan." },
            ]}
          />
          <Callout type="brand" title="It's about credibility, not just a number">
            Officers assess proof of funds as part of the whole story, your study plan, ties to home and financial
            history are weighed together. Funds that match a believable picture of who is paying and why are far more
            persuasive than a large balance that appears from nowhere.
          </Callout>

          <h2>Common proof-of-funds mistakes to avoid</h2>
          <p>
            Most proof-of-funds refusals come from a handful of avoidable errors. Knowing them in advance is the single
            cheapest way to protect your application:
          </p>
          <DataTable
            headers={["Common mistake", "Why it causes problems"]}
            rows={[
              ["Showing tuition or living costs, but not both", "Your funds must cover tuition + ~$20,635 living costs + travel together."],
              ["A sudden large deposit before applying", "Officers question money with no traceable history or unclear source."],
              ["Undocumented sponsor or family support", "Without income proof and a relationship letter, sponsor funds look unreliable."],
              ["Relying on inaccessible or locked funds", "Money you cannot actually draw on (e.g. property) is weaker than liquid funds."],
              ["Using last year's figure", "The cost-of-living amount is reviewed annually, always confirm the current number."],
              ["Forgetting accompanying family", "Each family member raises the required total; under-showing leads to refusal."],
            ]}
            caption="Frequent proof-of-funds mistakes on study-permit applications. Confirm current requirements on canada.ca."
          />

          <h2>How proof of funds fits your study-permit application</h2>
          <p>
            Proof of funds is one required piece of a complete study-permit application, not a substitute for the rest.
            A full application still needs your <a href="/study-permit">letter of acceptance from a DLI</a>, a{" "}
            <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> where required, a
            valid passport, a credible study plan and evidence you will leave Canada at the end of your authorised stay.
            Strong funds simply remove one of the most common reasons files are refused; the visa officer still assesses
            every other requirement on its own merits.
          </p>
          <p>
            It is also worth planning ahead: the same financial discipline that builds clean proof of funds will serve
            you later, when a <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> and your Canadian work
            experience open the door to <a href="/immigrate">permanent residence</a>.
          </p>

          <h2>How Wild Mountain Immigration helps with proof of funds</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team calculates the real total you need to show, tuition
            plus the current cost-of-living figure plus travel, and helps you structure proof of funds the way officers
            expect, whether that is a GIC, a Canadian bank account, an education loan or documented sponsor support. We
            make sure the money is presented as genuine and accessible, so an avoidable funds question does not sink an
            otherwise strong file. We represent students entirely online, by video call and secure document sharing.
          </p>
          <p>
            Prefer to prepare your own application? Our lower-cost <a href="/contact">File Review</a> gives your
            documents, including your proof of funds and your <a href="/study-permit/provincial-attestation-letter">PAL</a>, an expert check before you submit, so a small proof-of-funds mistake does not cost you a returned application or a refusal.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Build the rest of your study-permit file</h2>
          <p className="mt-3 text-ink-soft">Proof of funds is one piece. Here is what else your application needs.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={GraduationCap} title="Canada study permit" desc="The full 2026 guide to requirements, the application steps and working while you study." href="/study-permit" />
            <FeatureCard icon={FileText} title="Provincial Attestation Letter" desc="What a PAL is, who needs one for a study permit and who is exempt in 2026." href="/study-permit/provincial-attestation-letter" />
            <FeatureCard icon={Wallet} title="Post-Graduation Work Permit" desc="Turn your degree into Canadian work experience and a pathway to permanent residence." href="/work-permits/pgwp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Need a hand with your proof of funds?"
        sub="Get started with a licensed RCIC for honest guidance on how much money to show, whether to use a GIC and your path to PR, no promises, just clear next steps."
      />
    </>
  );
}
