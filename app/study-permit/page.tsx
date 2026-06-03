import type { Metadata } from "next";
import { GraduationCap, Briefcase, Rocket, FileText } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/study-permit";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Study Permit Canada 2026",
  titleAbsolute: "Study Permit Canada 2026: Complete Guide",
  description:
    "Study permit Canada 2026: requirements, the PAL, proof of funds and how to apply step by step. Get an honest eligibility read from a licensed RCIC.",
  path: PATH,
  keywords: [
    "study permit canada",
    "study permit canada 2026",
    "how to apply study permit",
    "study permit requirements",
    "provincial attestation letter PAL",
    "proof of funds study permit",
  ],
});

const faqs = [
  {
    q: "How much money do I need for a Canada study permit in 2026?",
    a: "Outside Quebec, a single applicant must show at least $20,635 for living costs for the first year, on top of the first year's tuition and travel costs. IRCC raised this figure on January 1, 2024 and it scales upward for each accompanying family member. Always confirm the current amount on the IRCC proof-of-funds page before you apply, as the figure is reviewed annually.",
  },
  {
    q: "Do I need a Provincial Attestation Letter (PAL) for my study permit?",
    a: "Most applicants do. Since January 22, 2024, IRCC requires a Provincial or Territorial Attestation Letter (PAL/TAL) from the province where your school is located for most college and undergraduate study-permit applications. From January 1, 2026, students starting a master's or doctoral program at a public university are exempt from the PAL requirement. Your designated learning institution can tell you whether your program needs one.",
  },
  {
    q: "Can I work while studying in Canada?",
    a: "Yes. Eligible full-time students at a designated learning institution can work off-campus up to 24 hours per week during regular study terms, and full-time during scheduled breaks such as summer or winter holidays. This rule took effect on November 8, 2024. You must keep meeting your study-permit conditions to keep this work authorisation.",
  },
  {
    q: "What are the basic requirements for a Canada study permit?",
    a: "You need a letter of acceptance from a designated learning institution (DLI), a Provincial Attestation Letter where required, proof you can pay tuition and living costs, a valid passport, and evidence you will leave Canada at the end of your authorised stay. Some applicants also need a medical exam or biometrics. We confirm the full checklist for your specific country and program.",
  },
  {
    q: "How long does a Canada study permit take to process?",
    a: "Processing times vary by country and time of year and are updated regularly by IRCC. The Student Direct Stream, which offered faster processing, closed on November 8, 2024, so all applicants now follow the standard stream. Check the live IRCC processing-times tool for your country, and apply as early as your letter of acceptance allows.",
  },
  {
    q: "Can a study permit lead to permanent residence?",
    a: "Yes, indirectly. A study permit itself is temporary, but graduating from an eligible program can qualify you for a Post-Graduation Work Permit. The skilled Canadian work experience you gain can then make you eligible for the Canadian Experience Class under Express Entry or for a provincial nominee program, both of which lead to permanent residence.",
  },
  {
    q: "Can my spouse or children come with me?",
    a: "Sometimes. Since January 21, 2025, open work permits for spouses of students are limited to spouses of those in a master's program of at least 16 months, a doctoral program, or certain professional programs. Dependent children are generally no longer eligible for open work permits. We assess your family's options as part of your file.",
  },
];

export default function StudyPermitPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Study Permit Canada 2026, Complete RCIC Guide",
            description:
              "Study permit Canada 2026: requirements, the Provincial Attestation Letter (PAL), proof of funds and how to apply step by step. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Canada study permit application support",
            description:
              "Canada study permit 2026: requirements, the Provincial Attestation Letter (PAL), proof of funds and how to apply step by step. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Study permit immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Work & Study"
        crumbs={[
          { name: "Work & Study", path: "/work-permits" },
          { name: "Study Permit", path: PATH },
        ]}
        title={<>Study Permit Canada: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            A <strong>study permit Canada</strong> application lets you study at a designated learning institution and
            build a pathway toward permanent residence. In 2026 the rules are tighter. Most applicants now need a
            Provincial Attestation Letter and must show stronger proof of funds, so getting the application right the
            first time matters more than ever.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/work-permits", label: "Explore work permits" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Planning to study in Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Get an honest read on your eligibility, PAL and proof of funds from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp", note: "Work after you graduate" },
                { label: "Work permits", href: "/work-permits", note: "LMIA and open work permits" },
                { label: "Express Entry", href: "/express-entry", note: "The CEC study-to-PR pathway" },
                { label: "Proof of funds", href: "/study-permit/proof-of-funds", note: "What you must show in 2026" },
                { label: "Provincial Attestation Letter", href: "/study-permit/provincial-attestation-letter", note: "Who needs a PAL" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A study permit Canada application lets a foreign national study at a designated learning institution (DLI). To apply, you generally need a DLI letter of acceptance, proof you can cover tuition and roughly $20,635 in living costs, and, for most applicants, a Provincial Attestation Letter (PAL). You must also satisfy the officer that you will leave Canada when your studies end."
            items={[
              <>A study permit requires a letter of acceptance from a <strong>designated learning institution (DLI)</strong>.</>,
              <>Most applicants now need a <strong>Provincial Attestation Letter (PAL/TAL)</strong> under the 2024+ cap rules.</>,
              <>You must show <strong>proof of funds of about $20,635</strong> for living costs (single, outside Quebec), plus tuition.</>,
              <>Eligible students can work <strong>up to 24 hours per week</strong> off-campus during study terms.</>,
              <>Graduating can lead to a <strong>Post-Graduation Work Permit</strong> and, in time, permanent residence.</>,
            ]}
          />

          <h2>What is a Canada study permit?</h2>
          <p>
            A study permit is the document that allows a foreign national to study at a designated learning institution
            (DLI) in Canada. It is not a visa. You may also need a temporary resident visa (TRV) or an electronic travel
            authorisation (eTA) to actually enter the country, and those are usually issued alongside an approved
            permit. The study permit sets out the conditions of your stay: where you can study, and whether and how much
            you can work.
          </p>
          <p>
            Canada remains one of the world&apos;s leading study destinations, but 2024 brought the largest changes to
            the program in years. To manage intake, IRCC introduced a national cap on new study-permit applications, roughly <strong>360,000 in 2024, 437,000 in 2025 and about 408,000 for 2026</strong> (source: canada.ca,
            study permit, 2026). That cap is administered through the Provincial Attestation Letter system explained
            below, and it is why preparation matters so much this year.
          </p>

          <h2>Eligibility and designated learning institutions (DLIs)</h2>
          <p>
            To qualify for a study permit you must be accepted into a program at a designated learning institution.
            A DLI is a school approved by a provincial or territorial government to host international students; not
            every Canadian school holds this status, and enrolling at a non-designated school means you cannot get a
            permit. Beyond acceptance, you must satisfy a visa officer that you:
          </p>
          <DataTable
            headers={["Requirement", "What you must show"]}
            rows={[
              ["Letter of acceptance", "An offer from a designated learning institution (DLI) for an eligible program."],
              ["Provincial Attestation Letter", "A PAL/TAL from the province where the school sits, for most programs (see below)."],
              ["Proof of funds", "Enough money for tuition, living costs (~$20,635 single, outside Quebec) and return travel."],
              ["Valid passport", "A travel document valid for the duration of your intended stay."],
              ["Intent to leave", "Evidence you will leave Canada when your authorised stay ends."],
              ["Admissibility", "Clean security and criminal record; a medical exam and biometrics where required."],
            ]}
            caption="Core study-permit requirements for 2026 (outside Quebec). Verify current figures on IRCC."
          />
          <p>
            Meeting the minimum is not the same as a strong application. Visa officers weigh your study plan, ties to
            your home country and financial history together, and thin documentation in any one area can sink an
            otherwise eligible file.
          </p>

          <h2>The Provincial Attestation Letter (PAL/TAL) and the cap</h2>
          <p>
            The biggest 2024 change was the <strong>Provincial Attestation Letter</strong>. Since{" "}
            <strong>January 22, 2024</strong>, most study-permit applications must include a PAL, or a TAL in the
            territories, issued by the province or territory where your DLI is located. The attestation confirms you
            count within that province&apos;s share of the national cap. Without it, IRCC will return most applications
            without processing them.
          </p>
          <Callout type="warning" title="Not every applicant needs a PAL">
            From <strong>January 1, 2026</strong>, students starting a <strong>master&apos;s or doctoral program at a
            public university</strong> are exempt from the PAL requirement, as are some other groups such as certain
            exchange and in-Canada permit-holders. Your DLI can confirm whether your specific program needs a PAL, do
            not assume either way.
          </Callout>
          <p>
            Because provinces issue PALs against a limited allocation, they can run out or change their rules mid-year.
            This is one reason to apply early and to confirm your program&apos;s standing before you pay deposits.
          </p>

          <h2>Proof of funds: the higher 2024+ requirement</h2>
          <p>
            IRCC sharply increased the financial requirement for study permits on <strong>January 1, 2024</strong>. A
            single applicant studying outside Quebec must now show <strong>at least $20,635</strong> for living expenses
            for the first year, <em>in addition to</em> the first year&apos;s tuition and your travel costs. The figure
            had been frozen at $10,000 for two decades, so the jump roughly doubled what students must demonstrate, and
            it scales upward for each accompanying family member.
          </p>
          <DataTable
            headers={["Family size", "Living-cost funds required (per year)"]}
            rows={[
              ["1 (just you)", "$20,635"],
              ["2 people", "$25,690"],
              ["3 people", "$31,583"],
              ["4 people", "$38,346"],
              ["Each additional person", "Add a set amount per IRCC schedule"],
            ]}
            caption="Indicative living-cost requirements outside Quebec (excludes tuition and travel). IRCC reviews these annually, verify current figures on IRCC."
          />
          <p>
            Funds must be genuine and accessible: officers look closely at where the money came from and how long it
            has been held. A Guaranteed Investment Certificate, bank statements, education-loan letters and proof of a
            sponsor&apos;s income are all common ways to evidence this. We help you assemble proof that holds up to
            scrutiny rather than triggering questions.
          </p>

          <h2>How to apply for a study permit: step by step</h2>
          <p>
            Most applications go in online. Budget for the study permit fee (currently $150) plus the biometrics fee,
            and plan to include a clear letter of explanation (often called a statement of purpose) that sets out your
            study plan and your reasons for choosing your program. A well-argued letter of explanation is one of the
            most effective ways to address the doubts that drive refusals.
          </p>
          <Steps
            steps={[
              { title: "Get accepted at a DLI", desc: "Apply to a designated learning institution and receive a formal letter of acceptance for an eligible program." },
              { title: "Obtain your PAL or confirm an exemption", desc: "Have your school or province issue a Provincial Attestation Letter, or confirm your program is exempt." },
              { title: "Assemble proof of funds", desc: "Gather GICs, bank statements, loan letters or sponsor documents showing tuition plus ~$20,635 in living costs." },
              { title: "Complete the online application", desc: "Submit your study-permit application through IRCC, with your acceptance letter, PAL, funds and a clear study plan." },
              { title: "Give biometrics and any medical", desc: "Provide fingerprints and a photo, and complete an upfront medical exam if your country or program requires one." },
              { title: "Receive your decision and travel", desc: "On approval you receive a port-of-entry letter; the officer issues your study permit when you arrive in Canada." },
            ]}
          />

          <h2>Working while studying (up to 24 hours a week)</h2>
          <p>
            One of the strongest reasons to study in Canada is the ability to work. As of{" "}
            <strong>November 8, 2024</strong>, eligible full-time students at a DLI can work off-campus{" "}
            <strong>up to 24 hours per week</strong> during regular academic sessions, and full-time during scheduled
            breaks such as the summer and winter holidays. No separate work permit is needed. The authorisation
            is written into your study permit, provided you keep meeting its conditions.
          </p>
          <Callout type="info" title="Keep your status valid">
            Off-campus work is only allowed while you remain a full-time student in good standing (with limited
            exceptions in your final term). Dropping below full-time, taking unauthorised breaks, or working more than
            the permitted hours can put your permit, and any future PR application, at risk.
          </Callout>

          <h2>From study permit to a Post-Graduation Work Permit</h2>
          <p>
            When you finish an eligible program, you may qualify for a <a href="/work-permits/pgwp">Post-Graduation Work
            Permit (PGWP)</a>, an open work permit that lets you work for almost any employer in Canada. The PGWP can
            last from eight months up to three years depending on the length of your program. Recent changes matter
            here: since <strong>November 1, 2024</strong>, most applicants must meet a language threshold (CLB 7 for
            university graduates, CLB 5 for college graduates), and graduates of non-degree programs must have studied
            in an eligible field of study.
          </p>
          <p>
            The PGWP is the bridge between studying and permanent residence, because the Canadian work experience it
            lets you gain is what most PR programs reward.
          </p>

          <h2>The study-to-PR pathway</h2>
          <p>
            A study permit is temporary, but it can be the first step toward staying permanently. The most common route
            is: study at a DLI, graduate, obtain a PGWP, gain skilled Canadian work experience, and then apply for
            permanent residence. That Canadian experience is exactly what the{" "}
            <a href="/express-entry">Canadian Experience Class under Express Entry</a> rewards, which requires at least one
            year of skilled work in Canada. It can also support a{" "}
            <a href="/alberta-immigration">provincial nominee program such as the Alberta AAIP</a>, which offers
            graduate-focused streams.
          </p>
          <Callout type="brand" title="Plan the destination, not just the first step">
            The strongest student files are built backwards from a PR goal. Choosing a DLI, program and province with
            your eventual Express Entry or provincial nomination in mind can save years later.
          </Callout>

          <h2>Processing times, extensions and applying early</h2>
          <p>
            Study permit processing time varies widely by country and by the time of year, and IRCC updates the
            estimates regularly. The faster <strong>Student Direct Stream closed on November 8, 2024</strong>, so every
            applicant now follows the standard process. That makes applying as early as your acceptance letter allows
            even more important, especially for popular September intakes. Always check the live IRCC processing-times
            tool for your country before you plan travel or pay non-refundable deposits.
          </p>
          <p>
            If your program runs longer than your permit, apply for a study permit extension from inside Canada at least
            30 days before your current permit expires, and keep studying while the decision is pending. If a first
            application is refused, the most common study permit refusal reasons are weak proof of funds, an
            unconvincing study plan or letter of explanation, and doubts about whether you will leave Canada at the end
            of your stay, all areas we strengthen before you submit.
          </p>

          <h2>How Wild Mountain helps with study permits</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team reviews your DLI choice, confirms whether you need a
            Provincial Attestation Letter, and makes sure your proof of funds is structured the way officers expect, the
            three areas where study-permit applications most often fail. We also map your study choice to a realistic{" "}
            <a href="/immigrate">permanent-residence pathway</a> so your time in Canada counts toward your bigger goal.
            We represent students entirely online, by video call and secure document sharing.
          </p>
          <p>
            Prefer to prepare your own study permit Canada application? Our lower-cost <a href="/contact">File
            Review</a> gives your documents an expert check before you submit, so small mistakes do not cost you a
            refusal.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">After you graduate</h2>
          <p className="mt-3 text-ink-soft">A study permit is the start. Here is where it can lead.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Work permits & PGWP" desc="Turn your degree into Canadian work experience with a Post-Graduation Work Permit." href="/work-permits" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Use your Canadian experience to qualify for the Canadian Experience Class and PR." href="/express-entry" />
            <FeatureCard icon={FileText} title="Immigrate to Canada" desc="See every permanent-residence route and find the one that fits your goals." href="/immigrate" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Thinking about studying in Canada?"
        sub="Get started with a licensed RCIC and get an honest read on your eligibility, PAL and proof of funds, and your path to PR."
      />
    </>
  );
}
