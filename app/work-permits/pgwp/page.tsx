import type { Metadata } from "next";
import { GraduationCap, Rocket, FileCheck2, Compass } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/pgwp";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "PGWP Eligibility 2026, Post-Graduation Work Permit",
  titleAbsolute: "PGWP 2026: Post-Graduation Work Permit Guide",
  description:
    "PGWP eligibility 2026: the post-graduation work permit field-of-study and language requirements, length, and study-to-PR path. Talk to an RCIC.",
  path: PATH,
  keywords: [
    "PGWP eligibility 2026",
    "post-graduation work permit",
    "PGWP field of study requirements",
    "PGWP language requirement",
    "PGWP length",
    "study to PR",
  ],
});

const faqs = [
  {
    q: "How long is a PGWP?",
    a: "A post-graduation work permit is matched to the length of your study program, from a minimum of 8 months to a maximum of 3 years. As a rule of thumb: a program of at least 8 months but under 2 years generally earns a PGWP roughly equal to the program length, while a program of 2 years or longer earns the full 3 years. Master's programs of at least 8 months started on or after February 15, 2024 also qualify for a 3-year PGWP even though they are shorter than two years. The PGWP is issued for a single period and is a once-in-a-lifetime permit. You generally cannot get a second one.",
  },
  {
    q: "Do I need a language test for the PGWP?",
    a: "Yes, since November 1, 2024, every PGWP applicant must prove their language ability with an accepted test taken within the last two years. University graduates (bachelor's, master's or doctoral degrees) must reach Canadian Language Benchmark (CLB) 7 in English or NCLC 7 in French, while college and other non-degree graduates must reach CLB/NCLC 5. The requirement applies in all four abilities, reading, writing, listening and speaking. Always confirm the current accepted tests and minimum scores on canada.ca before you book a test.",
  },
  {
    q: "What is the PGWP field of study requirement?",
    a: "The field-of-study requirement, introduced in 2024, applies to graduates of college and other non-degree programs. To qualify, your program's field of study must be linked to an eligible occupation facing a long-term labour shortage, drawn from IRCC's published list. Graduates of bachelor's, master's and doctoral degree programs are exempt from this requirement entirely, and as of March 2025 graduates of college bachelor's-degree programs are also exempt. Because the eligible field-of-study list changes, you must verify the current list on canada.ca for the date you apply.",
  },
  {
    q: "Am I eligible for a PGWP in 2026?",
    a: "To be eligible for a PGWP in 2026 you must have graduated from an eligible program at an eligible designated learning institution (DLI), have studied full-time for each academic session (with limited exceptions), and have completed a program of at least 8 months. Since November 1, 2024 you must also meet the language requirement (CLB 7 for university graduates, CLB 5 for college graduates) and, for non-degree programs, the field-of-study requirement. You must apply within 180 days of receiving written confirmation that you completed your program, and your study permit must have been valid at some point in those 180 days.",
  },
  {
    q: "Can I work while I wait for my PGWP?",
    a: "If you applied for your PGWP before your study permit expired and you were eligible to work off-campus during your studies, you can generally begin full-time work while your application is processed under maintained status, provided you remained in Canada. If you left Canada or your study permit expired before you applied, the rules differ, so confirm your specific situation before starting work. We map this out so you do not work without authorization.",
  },
  {
    q: "How does the PGWP lead to permanent residence?",
    a: "The PGWP is an open work permit, so the skilled Canadian work experience you build on it can make you eligible for permanent residence, most commonly through the Express Entry Canadian Experience Class (CEC), which requires at least one year of skilled Canadian work experience in the last three years. Many provincial nominee streams also value Canadian study and work. The PGWP is, for many graduates, the single most important bridge between studying in Canada and staying permanently.",
  },
  {
    q: "Can I get a second PGWP?",
    a: "Generally no. The post-graduation work permit is a once-in-a-lifetime permit, so most people can only ever hold one. If your PGWP is expiring and you still need to work in Canada, other options may apply, such as a bridging open work permit if you have a permanent-residence application in progress, an employer-specific work permit, or another open permit category. We help graduates plan the next status well before the PGWP runs out.",
  },
  {
    q: "Does the school I chose affect my PGWP eligibility?",
    a: "Yes, your designated learning institution and your specific program must both be PGWP-eligible. Not every DLI or program qualifies, and the rules have tightened: students who began certain programs after recent policy changes face stricter institution and program requirements. This is why we recommend confirming PGWP eligibility before you enrol, not after you graduate. We never guarantee an outcome, but we can help you read the rules correctly for your situation.",
  },
];

export default function PgwpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "PGWP Eligibility 2026, Post-Graduation Work Permit Guide",
            description:
              "PGWP eligibility 2026: the post-graduation work permit field-of-study and language requirements, PGWP length, and the study-to-PR path. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Post-graduation work permit (PGWP) application support",
            description:
              "PGWP eligibility 2026: the post-graduation work permit field-of-study and language requirements, PGWP length, and the study-to-PR path. RCIC-reviewed.",
            path: PATH,
            serviceType: "Post-graduation work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work Permits"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Post-Graduation Work Permit", path: PATH },
        ]}
        title={<>Post-Graduation Work Permit: <span className="text-brand">PGWP eligibility in 2026</span></>}
        lede={
          <p>
            <strong>PGWP eligibility in 2026</strong> rests on graduating from an eligible program at an eligible
            Canadian DLI, and now meeting new language and field-of-study rules. This guide covers who qualifies for a{" "}
            <strong>post-graduation work permit</strong>, how long a PGWP lasts, and how it bridges study to permanent
            residence.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/contact", label: "Get started" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Graduating soon?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The PGWP window is just 180 days. Get started and we&apos;ll confirm your eligibility and timing
                before you apply.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canada work permits", href: "/work-permits", note: "The full 2026 overview" },
                { label: "Study permits", href: "/study-permit", note: "Where the PGWP path begins" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "Turn PGWP work into PR" },
                { label: "CRS calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
                { label: "Get started", href: "/contact", note: "Get an honest read on your eligibility" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A post-graduation work permit (PGWP) is an open work permit for eligible international graduates. It lets you work for almost any employer in Canada after your studies, build the work experience that counts toward permanent residence, and bridge from study to PR, as long as you meet the current PGWP eligibility rules. To qualify you must graduate from an eligible full-time program of at least eight months at a designated learning institution, apply within 180 days of getting your final results, and meet the field-of-study and language rules in effect. Permit length depends on your program, and PGWP rules change periodically."
            items={[
              <><strong>PGWP eligibility 2026</strong> requires graduating from an eligible program at an eligible Canadian DLI, full-time, with the program at least <strong>8 months</strong> long.</>,
              <>Since <strong>November 1, 2024</strong> a <strong>language requirement</strong> applies: CLB 7 for university graduates, CLB 5 for college graduates.</>,
              <>The 2024+ <strong>field-of-study requirement</strong> applies to college and other non-degree grads; bachelor&apos;s, master&apos;s and doctoral degree grads are exempt.</>,
              <><strong>PGWP length</strong> is matched to your program, from <strong>8 months to 3 years</strong>.</>,
              <>The <strong>post-graduation work permit</strong> is an open permit and a key bridge from <strong>study to PR</strong> via the Canadian Experience Class.</>,
            ]}
          />

          <h2>What is a post-graduation work permit?</h2>
          <p>
            A post-graduation work permit (PGWP) is an open work permit for international students who have graduated
            from an eligible Canadian designated learning institution (DLI). Because it is open, it is not tied to a
            single employer, job or location.</p>
          <p>You can work for almost any employer in Canada, change jobs freely, and
            build the Canadian work experience that counts toward permanent residence. The PGWP is one of the most
            sought-after permits in the system: it converts a Canadian education into the right to work, and IRCC
            processes hundreds of thousands of work permit applications each year (source: canada.ca, 2026).
          </p>
          <p>
            The PGWP exists to let graduates stay and work after their studies, and for many people it is the single
            most important step in a longer plan, study in Canada, work on a PGWP, then apply for{" "}
            <a href="/express-entry/canadian-experience-class">permanent residence</a>. But the rules changed
            significantly in 2024, and the eligibility bar is now higher than many graduates expect.
          </p>

          <h2>Am I eligible for a PGWP in 2026?</h2>
          <p>
            <strong>PGWP eligibility in 2026</strong> turns on several conditions being true together: you graduated
            from an <strong>eligible program at an eligible DLI</strong>, you studied <strong>full-time</strong> for
            each academic session (with limited exceptions), and your program was at least <strong>8 months</strong>{" "}
            long. On top of those long-standing rules, two newer requirements now apply, a language test and, for
            non-degree programs, a field-of-study check.
          </p>
          <p>
            The table below sets out the core eligibility requirements. Not every school and credential qualifies, so
            confirm your institution and program against the current PGWP eligible programs list on canada.ca before you
            rely on it. Missing any one of these conditions, for example, applying after the 180-day window closes, or
            failing to meet the language minimum, is a common reason a PGWP is refused.
          </p>
          <DataTable
            headers={["PGWP requirement", "What it means"]}
            rows={[
              ["Eligible DLI and program", "You graduated from a designated learning institution and a program that are both PGWP-eligible."],
              ["Full-time status", "You maintained full-time student status during each academic session of your program (limited exceptions apply)."],
              ["Program length", "Your completed program was at least 8 months long."],
              ["Completion confirmation", "You received written confirmation (final transcript or completion letter) that you finished your program."],
              ["180-day window", "You apply within 180 days of that confirmation, and your study permit was valid at some point during those 180 days."],
              ["Language requirement", "Since Nov 1, 2024: CLB 7 (university grads) or CLB 5 (college grads), proven with an accepted test."],
              ["Field of study (non-degree)", "For college/non-degree programs, your field of study must be on the eligible list (degree grads exempt)."],
            ]}
            caption="Core post-graduation work permit eligibility requirements for 2026 (source: canada.ca, 2026). Rules change, verify the current requirements on IRCC before applying."
          />
          <Callout type="warning" title="The 180-day clock is unforgiving">
            You have just <strong>180 days</strong> from the date you receive written confirmation that you completed
            your program to apply for your PGWP. Miss it and you generally lose the chance for good, the PGWP is a{" "}
            <strong>once-in-a-lifetime permit</strong>. Plan your application before your final transcript even arrives.
          </Callout>
          <p>
            <strong>PGWP processing time</strong> varies through the year, so the practical question for most graduates
            is whether they can keep working in the meantime. If you applied before your study permit expired and you
            were already eligible to work off-campus, you can generally continue full-time work while waiting for your
            PGWP under <strong>maintained status</strong> (formerly implied status), as long as you stay in Canada.</p>
          <p>This
            is also how you can hold a <strong>PGWP without a study permit</strong> in hand once the old permit lapses.
            The rules differ if you left Canada or your study permit expired before you applied. We confirm your
            specific situation so you never work without authorization while your application is in the queue. Check the
            current PGWP processing time on canada.ca before you plan around it.
          </p>

          <h2>What is the PGWP field of study requirement?</h2>
          <p>
            The <strong>PGWP field of study requirement</strong>, introduced in 2024, is the change that catches the
            most graduates off guard. It applies to graduates of <strong>college and other non-degree programs</strong>:
            to qualify, your program&apos;s field of study must be linked to an occupation facing a long-term labour
            shortage, drawn from IRCC&apos;s <strong>eligible field-of-study list</strong>. The aim is to align the PGWP
            with where Canada needs workers.
          </p>
          <p>
            Crucially, the field-of-study rule does <em>not</em> apply to everyone. Graduates of{" "}
            <strong>bachelor&apos;s, master&apos;s and doctoral degree programs are exempt</strong>, and as of{" "}
            <strong>March 2025</strong> graduates of college bachelor&apos;s-degree programs are also exempt. The table
            below shows who the requirement applies to.
          </p>
          <DataTable
            headers={["Program type", "Field-of-study rule?", "Notes"]}
            rows={[
              ["University bachelor's, master's, doctoral degree", "Exempt", "Degree graduates do not face the field-of-study check."],
              ["College bachelor's-degree program", "Exempt (since Mar 2025)", "Added to the exemption in March 2025."],
              ["College diploma / certificate (non-degree)", "Applies", "Field of study must be on IRCC's eligible list."],
              ["Other non-degree program", "Applies", "Must align with a long-term shortage occupation on the list."],
            ]}
            caption="Who the PGWP field-of-study requirement applies to (source: canada.ca, 2026). The eligible field-of-study list changes, verify the current list on IRCC for your application date."
          />
          <Callout type="info" title="The list moves, check it on canada.ca">
            IRCC&apos;s eligible field-of-study list is reviewed and updated over time, so a field that qualifies today
            may change. Always confirm the current list on canada.ca for the date you intend to apply, and ideally
            before you enrol in a non-degree program.
          </Callout>

          <h2>Do I need a language test for the PGWP?</h2>
          <p>
            Yes. Since <strong>November 1, 2024</strong>, every PGWP applicant must meet a{" "}
            <strong>PGWP language requirement</strong> by submitting results from an accepted English or French test
            taken within the last two years. The minimum score depends on the level of your credential: university
            graduates must reach <strong>CLB 7</strong> (or NCLC 7 in French), while college and other non-degree
            graduates must reach <strong>CLB 5</strong> (or NCLC 5). The minimum applies across all four abilities: reading, writing, listening and speaking.
          </p>
          <DataTable
            headers={["Graduate type", "Minimum language level", "Applies in"]}
            rows={[
              ["University graduate (bachelor's, master's, doctoral)", "CLB / NCLC 7", "English or French"],
              ["College or other non-degree graduate", "CLB / NCLC 5", "English or French"],
            ]}
            caption="PGWP language requirement introduced November 1, 2024 (source: canada.ca, 2026). Confirm accepted tests and current minimum scores on IRCC before booking."
          />
          <Callout type="brand" title="Book your test early">
            Test availability and result turnaround can eat into your 180-day window. Because results must be valid (taken
            within the last two years) at the time you apply, we plan the test date around your completion confirmation,
            not the other way around.
          </Callout>

          <h2>How long is a PGWP?</h2>
          <p>
            <strong>PGWP length</strong> is matched to the length of your study program, from a minimum of{" "}
            <strong>8 months</strong> to a maximum of <strong>3 years</strong>. In broad terms, a program of at least 8
            months but under 2 years generally earns a PGWP roughly equal to the program length, while a program of 2
            years or longer earns the full 3 years. A special rule applies to master&apos;s programs: a master&apos;s of
            at least 8 months started on or after <strong>February 15, 2024</strong> qualifies for a 3-year PGWP even
            though it is shorter than two years.
          </p>
          <DataTable
            headers={["Program length", "Typical PGWP length"]}
            rows={[
              ["At least 8 months, under 2 years", "Roughly matched to the program length"],
              ["2 years or longer", "Up to 3 years"],
              ["Master's of at least 8 months (started on/after Feb 15, 2024)", "Up to 3 years"],
              ["Under 8 months", "Not eligible for a PGWP"],
            ]}
            caption="How PGWP length is matched to program length (source: canada.ca, 2026). The PGWP is issued once and validity is set at IRCC's discretion, verify current rules on IRCC."
          />
          <Callout type="warning" title="The PGWP is once-in-a-lifetime">
            You can generally only ever hold <strong>one</strong> post-graduation work permit. There is no{" "}
            <strong>second PGWP</strong> if you study again, so make the most of the one you get, and plan your next
            status (a <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> or another route)
            before it expires.
          </Callout>

          <h2>The 2024+ PGWP requirements at a glance</h2>
          <p>
            Several changes landed in 2024 and 2025 that reshaped who qualifies for a PGWP. The summary below pulls the
            key updates together so you can see, at a glance, what is new and who each change affects.
          </p>
          <DataTable
            headers={["Change", "Effective", "Who it affects"]}
            rows={[
              ["Language requirement (CLB 7 university / CLB 5 college)", "Nov 1, 2024", "All PGWP applicants"],
              ["Field-of-study requirement", "2024", "College / non-degree graduates only"],
              ["College bachelor's-degree grads exempt from field rule", "Mar 2025", "College bachelor's-degree graduates"],
              ["Master's of 8+ months get a 3-year PGWP", "Started on/after Feb 15, 2024", "Master's graduates"],
              ["Tighter DLI and program eligibility", "2024+", "New students choosing a school/program"],
            ]}
            caption="Summary of 2024+ PGWP requirement changes (source: canada.ca, 2026). Policy continues to evolve, verify the current rules on IRCC."
          />

          <h2>From PGWP to permanent residence</h2>
          <p>
            For many graduates the PGWP is not the destination, it is the bridge to staying permanently. Because it is
            an open permit, the skilled Canadian work experience you build on a PGWP can make you eligible for{" "}
            <strong>permanent residence</strong>, most commonly through the{" "}
            <a href="/express-entry/canadian-experience-class">Express Entry Canadian Experience Class (CEC)</a>, which
            requires at least one year of skilled Canadian work experience in the last three years. Canadian study and
            work also strengthen many provincial nominee streams.
          </p>
          <p>
            This is the <strong>study to PR</strong> path in a nutshell: a <a href="/study-permit">study permit</a> gets
            you here, the PGWP lets you work, and that Canadian experience powers your permanent-residence application.
            You can estimate where you stand with our <a href="/tools/crs-calculator">CRS calculator</a>. We plan this
            sequence from the start so that, as your PGWP nears its end, your next status, and your PR strategy, is
            already lined up.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            PGWP application an expert check before you submit.
          </p>

          <h2>How Wild Mountain Immigration helps with your PGWP</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team treats the post-graduation work permit as one stage
            in a longer plan rather than a stand-alone form. We confirm that your institution and program are
            PGWP-eligible, plan your language test around the 180-day window, check the field-of-study rules where they
            apply, and line up your next status before your permit expires. We represent students entirely online, by
            video call and secure document sharing.
          </p>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "We check your DLI, program length, full-time status, and whether the field-of-study and language rules apply to your credential." },
              { title: "Plan the application", desc: "We map your 180-day window, book the language test at the right time, and assemble your completion documents and forms." },
              { title: "Apply and plan ahead", desc: "We prepare and submit your PGWP application, then plan the study to PR path through the Canadian Experience Class or a provincial nomination." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Where the PGWP can take you</h2>
          <p className="mt-3 text-ink-soft">The permit is the bridge. We help you plan what comes next.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Canadian Experience Class" desc="Turn PGWP work into permanent residence through the Express Entry CEC stream." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={Compass} title="Express Entry" desc="See how your Canadian study and work feed into a competitive CRS score." href="/express-entry" />
            <FeatureCard icon={FileCheck2} title="Bridging open work permit" desc="Keep working while your permanent-residence application is processed." href="/work-permits/bridging-open-work-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Don't miss your 180-day PGWP window"
        sub="Get started with a licensed RCIC and get an honest read on your post-graduation work permit eligibility, language and field-of-study requirements."
      />
    </>
  );
}
