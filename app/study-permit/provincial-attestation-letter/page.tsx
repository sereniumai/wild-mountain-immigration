import type { Metadata } from "next";
import { GraduationCap, FileText, Wallet } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/study-permit/provincial-attestation-letter";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Provincial Attestation Letter 2026 (PAL) Guide",
  titleAbsolute: "Provincial Attestation Letter (PAL) 2026",
  description:
    "Provincial attestation letter 2026: what a PAL is, who needs one for a study permit, who's exempt and how to get a PAL. Reviewed by a licensed RCIC.",
  path: PATH,
  keywords: [
    "provincial attestation letter 2026",
    "PAL study permit",
    "what is a PAL",
    "do I need a provincial attestation letter",
    "PAL TAL exemptions",
    "how to get a PAL",
  ],
});

const faqs = [
  {
    q: "Do I need a provincial attestation letter for my study permit?",
    a: "Most new study-permit applicants do. Since January 22, 2024, IRCC requires a Provincial Attestation Letter (PAL), or a Territorial Attestation Letter (TAL) in some territories, from the province or territory where your school is located. Without a PAL or a confirmed exemption, IRCC returns most applications without processing them. A few groups are exempt (see below). Your designated learning institution can confirm whether your specific program needs one, but always verify the current rules on canada.ca before you apply.",
  },
  {
    q: "What is a provincial attestation letter (PAL)?",
    a: "A Provincial Attestation Letter is an official letter from a Canadian province or territory confirming that your study-permit application counts within that province's share of the national cap on international students. IRCC introduced it on January 22, 2024 as the mechanism that administers the 2024+ study-permit cap. In territories that use the equivalent document it is called a Territorial Attestation Letter (TAL). You submit the PAL or TAL as part of your study-permit application.",
  },
  {
    q: "Who is exempt from the PAL requirement?",
    a: "As current 2026 guidance, exemptions include students starting a master's or doctoral program at a public university (exempt from January 1, 2026), most primary and secondary (K-12) students, certain exchange students, and some applicants already in Canada extending or applying for a permit. These exemptions change over time. Confirm your category on canada.ca and with your designated learning institution before assuming you do not need a PAL.",
  },
  {
    q: "How do I get a provincial attestation letter?",
    a: "In most cases you do not apply for a PAL directly. After you receive a letter of acceptance from a designated learning institution (DLI), the school requests and issues the PAL to you on the province's behalf, drawing on that province's limited allocation. Some provinces issue PALs through their own portal instead. Because allocations are finite, schools can run out, so ask about timing as soon as you accept your offer.",
  },
  {
    q: "What is the difference between a PAL and a TAL?",
    a: "They serve the same purpose, confirming your application falls within the regional cap, but a PAL (Provincial Attestation Letter) is issued by a province, while a TAL (Territorial Attestation Letter) is the equivalent document used in some territories. IRCC accepts both. Which one you need depends on where your designated learning institution is located.",
  },
  {
    q: "What happens if I apply for a study permit without a PAL?",
    a: "If your program requires a PAL or TAL and you do not include one (and you do not qualify for an exemption), IRCC will generally return your application without processing it. You will not get a decision on the merits. You simply have to reapply once you have the attestation, which can cost you weeks and risk missing your program start date. That is why confirming the requirement early matters.",
  },
  {
    q: "How does the study-permit cap affect the PAL in 2026?",
    a: "The PAL is how IRCC enforces the national cap on study permits. IRCC set roughly 360,000 permits for 2024, 437,000 for 2025 and about 408,000 for 2026 (source: canada.ca, study permit, 2026). Each province receives a slice of that total and issues PALs up to its limit. Because allocations are capped and can be used up during the year, applying early, and securing your PAL promptly, is more important than ever.",
  },
  {
    q: "Does having a PAL guarantee my study permit will be approved?",
    a: "No. A PAL confirms only that your application counts within the provincial cap, it does not approve the application itself. You still have to meet every other study-permit requirement, including a valid letter of acceptance, proof of funds and an officer's satisfaction that you will leave Canada when authorised. No one can guarantee a permit outcome; a PAL is one required piece of a complete application.",
  },
];

export default function ProvincialAttestationLetterPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Provincial Attestation Letter (PAL) 2026, RCIC Guide",
            description:
              "Provincial attestation letter 2026: what a PAL is, who needs one for a study permit, who's exempt and how to get a PAL. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Provincial Attestation Letter (PAL) study-permit support",
            description:
              "Provincial attestation letter 2026: what a PAL is, who needs one for a study permit, who's exempt and how to get a PAL. Reviewed by a licensed RCIC.",
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
          { name: "Provincial Attestation Letter", path: PATH },
        ]}
        title={<>Provincial Attestation Letter: <span className="text-brand">the 2026 PAL guide</span></>}
        lede={
          <p>
            A <strong>provincial attestation letter (PAL)</strong> confirms your study-permit application counts within
            your province&apos;s share of Canada&apos;s international-student cap. Most new study-permit applicants have
            needed one since 2024, though some students are exempt, so confirming your status early matters.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/study-permit", label: "Back to the study permit guide" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <FileText className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure if you need a PAL?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Get an honest read on your study permit, PAL and proof of funds from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canada study permit", href: "/study-permit", note: "The full 2026 study-permit guide" },
                { label: "Proof of funds", href: "/study-permit/proof-of-funds", note: "How much money you must show" },
                { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp", note: "Work in Canada after you graduate" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "Study-to-PR pathways" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A provincial attestation letter (PAL) is a document from a Canadian province or territory confirming that your study-permit application counts within that region's share of the national study-permit cap. Most new study-permit applicants must include a PAL when they apply, though some applicants are exempt. You get a PAL through your institution or province before applying, and it must be in hand when you submit. The cap and exemptions can change."
            items={[
              <>A <strong>Provincial Attestation Letter (PAL)</strong> confirms your application counts within a province&apos;s share of the study-permit cap.</>,
              <>IRCC introduced the PAL on <strong>January 22, 2024</strong> to administer the international-student cap.</>,
              <>In some territories the equivalent document is a <strong>Territorial Attestation Letter (TAL)</strong>.</>,
              <>Most new study-permit applicants need one, but <strong>master&apos;s/doctoral, many K-12 and some exchange students are exempt</strong>.</>,
              <>Your <strong>designated learning institution usually issues the PAL</strong> after you are accepted; allocations are limited, so apply early.</>,
            ]}
          />

          <h2>What is a provincial attestation letter (PAL)?</h2>
          <p>
            A <strong>provincial attestation letter</strong>, a PAL, is an official letter from a Canadian province
            or territory confirming that your study-permit application counts within that province&apos;s allocated
            share of the national cap on international students. It is easy to confuse a PAL with your letter of
            acceptance, but they are not the same: a PAL is not your acceptance letter and not your study permit, but a
            separate document that IRCC uses to keep study-permit numbers within the limits set in 2024.
            In some territories the equivalent document is called a <strong>Territorial Attestation Letter (TAL)</strong>,
            and IRCC accepts both interchangeably depending on where your school sits.
          </p>
          <p>
            IRCC introduced the PAL on <strong>January 22, 2024</strong> as part of the largest shake-up to the
            study-permit program in years. To manage intake, the government set a national cap on new study-permit
            applications, roughly <strong>360,000 for 2024, 437,000 for 2025 and about 408,000 for 2026</strong>{" "}
            (source: canada.ca, study permit, 2026). The PAL is the mechanism that administers that cap: each province
            receives a portion of the total and issues attestation letters up to its own limit.
          </p>

          <h2>Do I need a PAL for my study permit?</h2>
          <p>
            For <strong>most new study-permit applicants since 2024, the answer is yes</strong>. Unless you fall into
            one of the exempt categories below, your study-permit application must include a PAL, or a TAL, from the
            province or territory where your designated learning institution is located. Without it, and without a
            confirmed exemption, IRCC will return most applications without processing them, so this is one of the first
            things to settle when you plan to study in Canada.
          </p>
          <Callout type="warning" title="A PAL is required before you apply, not after">
            You generally need the PAL <strong>in hand when you submit</strong> your study-permit application. If your
            program requires one and you apply without it, IRCC will usually return the file unprocessed. You do not
            get a decision on the merits, and you simply have to reapply. Confirm the requirement before you pay deposits or
            book travel.
          </Callout>

          <h2>Who needs a PAL versus who is exempt</h2>
          <p>
            The PAL requirement is broad, but it is not universal. The table below sets out, as current 2026 guidance,
            who typically needs a provincial attestation letter and who is currently exempt. Exemptions change, so treat
            this as a starting point and confirm your own category on canada.ca and with your school.
          </p>
          <DataTable
            headers={["Applicant", "PAL / TAL status (current 2026 guidance)"]}
            rows={[
              ["New college or undergraduate study-permit applicant", "PAL/TAL required"],
              ["Most post-secondary applicants at a DLI", "PAL/TAL required"],
              ["Master's or doctoral student at a public university", "Exempt (from January 1, 2026)"],
              ["Primary & secondary (K-12) students", "Generally exempt"],
              ["Certain exchange / visiting students", "Generally exempt"],
              ["In-Canada study-permit extensions (same program)", "Often exempt, confirm your category"],
              ["Work-permit holders & some other in-Canada applicants", "May be exempt, confirm on canada.ca"],
            ]}
            caption="Who needs a PAL vs who is exempt (IRCC, current 2026 guidance). Exemptions are reviewed and change, verify your category on canada.ca before applying."
          />
          <Callout type="info" title="2026 update: master's and doctoral students exempted">
            From <strong>January 1, 2026</strong>, students starting a <strong>master&apos;s or doctoral program at a
            public university</strong> no longer need a PAL. If that is you, you may be able to apply without one, but
            confirm with your designated learning institution, because eligibility depends on the exact program and
            institution type.
          </Callout>

          <h2>How to get a provincial attestation letter</h2>
          <p>
            For most students, you do not apply for a provincial attestation letter yourself. The usual sequence is
            straightforward: you receive a{" "}
            <strong>letter of acceptance from a designated learning institution (DLI)</strong>, and the school then
            requests and issues the PAL to you on the province&apos;s behalf, drawing on that province&apos;s limited
            allocation. The route varies by province. In <strong>Ontario</strong> most public colleges and universities
            request the PAL for you, in <strong>British Columbia (BC)</strong> the province runs a dedicated PAL
            application portal that institutions use, and in <strong>Alberta</strong> the PAL is typically issued through
            your school once your seat is confirmed. Check your institution&apos;s instructions, because the exact process
            depends on where you are studying.
          </p>
          <p>
            <strong>PAL processing time</strong> also varies. Where a school issues the letter directly it can arrive
            within days, but during busy intake periods, or where a provincial portal is involved, it can take several
            weeks, so request it the moment you accept your offer. Watch the <strong>PAL validity and expiry</strong>{" "}
            too: a provincial attestation letter is time-limited, so confirm the dates on yours and submit your
            study-permit application well before it expires.
          </p>
          <Steps
            steps={[
              { title: "Get accepted at a DLI", desc: "Apply to a designated learning institution and receive a formal letter of acceptance for an eligible program." },
              { title: "Confirm whether you need a PAL", desc: "Ask your school whether your program requires a PAL/TAL or qualifies for a current exemption such as the master's/doctoral exemption." },
              { title: "Have the school issue your PAL", desc: "Most DLIs request and issue the PAL on the province's behalf once you accept your offer; some provinces use their own portal." },
              { title: "Add the PAL to your study-permit application", desc: "Include the PAL (or TAL) with your acceptance letter, proof of funds and other documents when you submit to IRCC." },
            ]}
          />
          <Callout type="warning" title="Allocations can run out">
            Because each province issues PALs against a <strong>finite allocation</strong>, schools can run out or
            change their rules part-way through the year. Request your PAL as soon as you accept your offer, and do not
            assume one will still be available later in an intake cycle.
          </Callout>

          <h2>How the PAL fits your study-permit application</h2>
          <p>
            The PAL is one required piece of a complete study-permit application, not a substitute for the rest. A full
            application still needs your <a href="/study-permit">letter of acceptance from a DLI</a>, your{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a>, a valid passport, and evidence that you will
            leave Canada at the end of your authorised stay. The PAL simply confirms that your application is counted
            within the provincial cap; the visa officer still assesses every other requirement on its own merits.
          </p>
          <Callout type="brand" title="A PAL is not an approval">
            Having a provincial attestation letter does <strong>not</strong> guarantee your study permit. It only
            confirms you count within the cap. Your application can still be refused if proof of funds, study-plan or
            other elements fall short, which is exactly where careful preparation pays off.
          </Callout>

          <h2>The 2026 study-permit cap and the PAL</h2>
          <p>
            The PAL exists because of the cap, so the two move together. IRCC set the national limit at roughly{" "}
            <strong>360,000 permits in 2024, 437,000 in 2025 and about 408,000 for 2026</strong>, and divides each
            year&apos;s total among the provinces and territories. Each region then issues PALs up to its share. In
            practice this means that, in a tighter year, attestation letters are a genuinely scarce resource, and that
            applying early in the intake cycle is one of the simplest ways to protect your plans.
          </p>
          <p>
            It also means the rules can shift between years. The exemptions, the cap size and the way provinces
            distribute PALs have all changed since 2024, and may change again. Treat any figure or exemption here as
            current 2026 guidance and confirm the live position on canada.ca before you rely on it.
          </p>

          <h2>How Wild Mountain helps with your PAL and study permit</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms whether your specific program needs a
            provincial attestation letter or qualifies for a current exemption, checks that the PAL you receive is valid,
            and makes sure the rest of your <a href="/study-permit">study-permit application</a>, proof of funds, study
            plan and supporting documents, is built the way officers expect. We also map your study choice to a realistic{" "}
            <a href="/immigrate">permanent-residence pathway</a> so your time in Canada counts toward your bigger goal.
            We represent students entirely online, by video call and secure document sharing.
          </p>
          <p>
            Prefer to prepare your own application? Our lower-cost <a href="/contact">File Review</a> gives your
            documents, including your provincial attestation letter and proof of funds, an expert check before you
            submit, so an avoidable mistake does not cost you a returned application or a refusal.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Build the rest of your study-permit file</h2>
          <p className="mt-3 text-ink-soft">The PAL is one piece. Here is what else your application needs.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={GraduationCap} title="Canada study permit" desc="The full 2026 guide to requirements, the application steps and working while you study." href="/study-permit" />
            <FeatureCard icon={Wallet} title="Proof of funds" desc="See how much money you must show for tuition and living costs, and how to evidence it." href="/study-permit/proof-of-funds" />
            <FeatureCard icon={FileText} title="Post-Graduation Work Permit" desc="Turn your degree into Canadian work experience and a pathway to permanent residence." href="/work-permits/pgwp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Need a hand with your PAL and study permit?"
        sub="Get started with a licensed RCIC for honest guidance on whether you need a provincial attestation letter, proof of funds and your path to PR, no promises, just clear next steps."
      />
    </>
  );
}
