import type { Metadata } from "next";
import { GraduationCap, Briefcase, Clock, FileCheck2, Rocket, BookOpen } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/study-permit/work-while-studying";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Working While Studying in Canada",
  titleAbsolute: "Working While Studying in Canada: Study Permit Hours",
  description:
    "Work while studying in Canada: on- and off-campus rules, the ~24 hours/week cap, co-op permits and eligibility. Talk to a licensed RCIC to stay compliant.",
  path: PATH,
  keywords: [
    "work while studying canada",
    "off campus work study permit",
    "international student work hours canada",
    "on campus work canada",
    "co-op work permit canada",
    "24 hours per week study permit",
  ],
});

const faqs = [
  {
    q: "Can international students work while studying in Canada?",
    a: "Yes. Many international students with a valid study permit can work in Canada both on campus and off campus while their classes are in session, and full-time during scheduled breaks, as long as they meet the conditions. The right to work off campus must be allowed by your study permit, you must be a full-time student in an eligible program at a designated learning institution, and your program must meet length and level requirements. On-campus work has its own conditions. The exact rules and hour limits change periodically, so confirm the current requirements on canada.ca.",
  },
  {
    q: "How many hours can international students work off campus in Canada?",
    a: "As of changes that took effect in late 2024, eligible international students can work off campus up to a higher cap of around 24 hours per week while classes are in session, up from the previous 20-hour limit. During scheduled breaks, such as summer and winter holidays or a reading week, eligible students can work full-time with no weekly cap. These figures changed recently and can change again, so confirm the current off-campus hour limit on canada.ca before relying on it. Working beyond the permitted hours can put your status and future applications at risk.",
  },
  {
    q: "Do I need a separate work permit to work while studying?",
    a: "Usually not for ordinary on-campus or off-campus work: that right comes from your study permit conditions, so you work without a separate work permit if you meet the criteria. You do need a separate co-op or intern work permit if your program includes a mandatory work placement, internship or co-op term that forms an essential part of the program. You apply for that co-op work permit in addition to your study permit. We help students confirm which permits they need and keep them compliant.",
  },
  {
    q: "What is on-campus work and who can do it?",
    a: "On-campus work means employment on the premises of the institution where you study, for example for the school, a faculty member, a student organisation, or certain private businesses or contractors located on campus. Generally, eligible full-time students at a public post-secondary institution (or an eligible private one) with a valid study permit and a Social Insurance Number can work on campus, often with no fixed weekly hour limit while studying. Eligibility conditions apply and can change, so we confirm them against canada.ca for your institution and program.",
  },
  {
    q: "What is a co-op or internship work permit?",
    a: "A co-op or intern work permit lets you complete a work placement, internship or co-op term that is a required, integral part of your study program. If the placement is essential to completing your studies and usually does not exceed a set proportion of the program, you generally need this separate permit alongside your study permit. It is normally free of the usual fee for this category, but you must apply and qualify. We help students identify whether their program requires a co-op permit and prepare that application.",
  },
  {
    q: "Does working while studying count toward permanent residence?",
    a: "Part-time work during your studies does not by itself count as the skilled experience most PR programs require, but it is strategically valuable. It supports you financially, builds Canadian references and workplace experience, and after you graduate it positions you to apply for a Post-Graduation Work Permit, where the skilled work you do can qualify you for the Canadian Experience Class under Express Entry. So working while studying is best seen as part of a longer plan that runs through the PGWP toward permanent residence.",
  },
  {
    q: "Can my spouse work while I study in Canada?",
    a: "In some cases. Spouses or common-law partners of certain international students may be eligible for an open work permit, but the rules around spousal open work permits for students have been tightened and now focus on partners of students in specific programs, such as master's, doctoral and certain professional programs. Because this is an area that has changed and continues to evolve, we confirm the current eligibility on canada.ca for your specific program before assuming a spouse can work.",
  },
  {
    q: "What happens if I work more than the allowed hours?",
    a: "Working more than the permitted off-campus hours while classes are in session is a breach of your study permit conditions. It can lead to loss of status, removal from Canada, and problems with future applications, including a Post-Graduation Work Permit or permanent residence. It is one of the most common and most damaging mistakes international students make. We help students track their permitted hours and stay compliant, because protecting your status protects your whole pathway to PR.",
  },
];

export default function WorkWhileStudyingPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Working While Studying in Canada: The Complete 2026 Guide",
            description:
              "Working while studying in Canada: on-campus and off-campus rules, the higher off-campus cap (around 24 hours/week in session), co-op permits, eligibility.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "International student work-rules guidance",
            description:
              "Working while studying in Canada: on-campus and off-campus rules, the higher off-campus cap (around 24 hours/week in session), co-op permits, eligibility.",
            path: PATH,
            serviceType: "Study permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Study"
        crumbs={[
          { name: "Study", path: "/study-permit" },
          { name: "Working While Studying", path: PATH },
        ]}
        title={<>Working <span className="text-brand">While Studying</span> in Canada</>}
        lede={
          <p>
            Most international students can <strong>work while studying in Canada</strong>, on campus and off campus
            while classes are in session, and full-time during breaks, if they meet the conditions. Off-campus rules
            changed recently, lifting the cap to around 24 hours a week. This guide explains the hour rules, co-op
            permits, eligibility, and how working builds toward a PGWP and PR.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/study-permit", label: "Study permit guide" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Studying in Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Our team helps international students stay compliant and plan the path from study to work to PR,
                entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Study permits", href: "/study-permit", note: "How to study in Canada" },
                { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp", note: "Work after you graduate" },
                { label: "Proof of funds", href: "/study-permit/proof-of-funds", note: "Showing you can support your studies" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "PR from Canadian work experience" },
                { label: "Study to PR", href: "/study-permit/study-to-pr", note: "The full graduate-to-PR pathway" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox>
            Most international students can <strong>work while studying in Canada</strong> if their study permit allows
            it and they are full-time at a designated learning institution. As of late 2024, eligible students can work
            <strong> off campus up to around 24 hours per week</strong> while classes are in session and full-time
            during breaks. Confirm the current cap on canada.ca, as the figure changed recently.
          </AnswerBox>

          <KeyTakeaways
            summary="Working while studying in Canada is allowed for most international students whose study permit permits it and who are full-time at a designated learning institution. On-campus work generally has no fixed weekly hour limit. Off-campus work is capped at around 24 hours per week during academic sessions, up from 20 hours following changes in late 2024, and full-time during scheduled breaks. A mandatory co-op or internship that is an essential part of the program needs a separate co-op work permit. Working within the rules protects your status and sets up a Post-Graduation Work Permit and a path to permanent residence through the Canadian Experience Class."
            items={[
              <>Most students can <strong>work while studying</strong> if their <a href="/study-permit">study permit</a> allows it and they are full-time at a DLI.</>,
              <><strong>On-campus</strong> work usually has no fixed weekly cap; <strong>off-campus</strong> work is capped at around 24 hours a week in session.</>,
              <>The off-campus cap rose from 20 to around <strong>24 hours/week</strong> in late 2024, confirm the current figure on canada.ca.</>,
              <>A mandatory <strong>co-op or internship</strong> that is integral to your program needs a separate co-op work permit.</>,
              <>Staying compliant protects your <a href="/work-permits/pgwp">PGWP</a> and your path to PR via the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>.</>,
            ]}
          />

          <h2>Can you work while studying in Canada?</h2>
          <p>
            Yes, most international students with a valid <a href="/study-permit">study permit</a> can{" "}
            <strong>work while studying in Canada</strong>. There are two kinds of ordinary student work,{" "}
            <strong>on campus</strong> and <strong>off campus</strong>, and for both you generally do not need a
            separate work permit; the right to work comes from your study permit conditions when you meet the criteria.
            On top of that, some programs include a mandatory work placement, internship or co-op term, which needs its
            own <strong>co-op work permit</strong>. The sections below explain each in turn.
          </p>
          <p>
            Working as a student is about more than income. It builds Canadian references, workplace experience and
            confidence, and it sets you up for the <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> and a
            path to permanent residence after you graduate. The most important thing is to stay strictly within the
            rules, because a breach can jeopardise your status and every step that follows.
          </p>

          <h2>Off-campus work and the hour rules</h2>
          <p>
            Off-campus work means working for any employer anywhere in Canada, not just at your school. To work off
            campus without a separate permit you generally must hold a valid study permit that allows off-campus work,
            be a full-time student at a designated learning institution in an eligible post-secondary program, and have
            actually started your studies.</p>
          <p>Check the remarks or conditions field on your study permit, as it states
            whether you have work authorisation; if that wording is missing, you cannot work off campus until it is
            corrected. Before you start any international student jobs in Canada, you will also need a Social Insurance
            Number (see below).
          </p>
          <Callout type="brand" title="The off-campus hour cap changed in late 2024">
            Eligible students can now work off campus up to around <strong>24 hours per week</strong> while classes are
            in session, up from the previous 20-hour limit, following changes that took effect in late 2024. During
            scheduled breaks, eligible students can work <strong>full-time</strong> with no weekly cap. These figures
            changed recently and can change again, so confirm the current off-campus hour limit on canada.ca.
          </Callout>
          <DataTable
            headers={["When", "Off-campus hours allowed"]}
            rows={[
              ["During regular academic sessions", "Up to around 24 hours per week (eligible students)"],
              ["During scheduled breaks (summer, winter, reading week)", "Full-time, no weekly cap"],
              ["Before your program starts", "Not permitted"],
              ["After you stop being an eligible full-time student", "Not permitted under study-permit conditions"],
            ]}
            caption="Off-campus work rules for eligible students. The in-session cap rose to around 24 hours/week in late 2024; confirm the current figure on canada.ca."
          />

          <h2>On-campus work</h2>
          <p>
            <strong>On-campus</strong> work is employment on the premises of the institution where you study, for the
            school, a faculty member, a student organisation, or certain businesses and contractors on campus.
            Generally, eligible full-time students with a valid study permit and a Social Insurance Number can work on
            campus, often with no fixed weekly hour limit while studying, which makes it a flexible option around your
            class schedule.</p>
          <p>As with off-campus work, you must meet the eligibility conditions and start only once your
            program has begun. Because conditions can change, we confirm them against canada.ca for your institution.
          </p>

          <h2>Co-op and internship work permits</h2>
          <p>
            Some programs include a <strong>mandatory work placement</strong>, internship or co-op term that is an
            essential part of completing the qualification. For these, you generally need a separate{" "}
            <strong>co-op (or intern) work permit</strong> in addition to your study permit. The placement usually must
            be required to complete the program and not exceed a set proportion of it. This permit is normally issued
            without the usual fee for the category, but you still need to apply and qualify.
          </p>
          <Callout type="info" title="Co-op work is separate from your hour limits">
            A co-op or internship under a co-op work permit is part of your studies, so it is not the same as ordinary
            off-campus work and is not counted against the weekly off-campus hour cap. You still need the right permit
            in place before the placement starts, so plan ahead with your institution.
          </Callout>

          <h2>Eligibility: who can work while studying?</h2>
          <p>
            To work on or off campus without a separate permit, you generally need to meet conditions such as these.
            Because eligibility rules are specific and change periodically, treat this as a guide and confirm your own
            situation on canada.ca.
          </p>
          <ul>
            <li>You hold a <strong>valid study permit</strong>, and for off-campus work it must say you are allowed to work off campus.</li>
            <li>You are a <strong>full-time student</strong> (with limited exceptions, such as your final academic session).</li>
            <li>You are enrolled at a <strong>designated learning institution (DLI)</strong> in an eligible post-secondary program (or an eligible secondary-level vocational program in Quebec, which is outside our scope).</li>
            <li>Your <strong>program meets length and level requirements</strong> (generally at least six months, leading to a degree, diploma or certificate).</li>
            <li>You have <strong>started studying</strong> and have completed your <strong>SIN application</strong> for a Social Insurance Number, which every student needs to work legally.</li>
          </ul>

          <h2>Staying compliant: why the hours matter</h2>
          <p>
            The single most damaging mistake international students make is <strong>working more than the permitted
            hours</strong> off campus while classes are in session. It is a breach of your study permit conditions and
            can lead to loss of status, removal from Canada, and problems with future applications, including a{" "}
            <a href="/work-permits/pgwp">PGWP</a> or permanent residence. Track your hours carefully, keep evidence of
            term dates and breaks, and stop or scale back when classes resume. Protecting your status protects your
            entire pathway.
          </p>

          <h2>How working while studying builds toward PR</h2>
          <p>
            Part-time student work does not, by itself, usually count as the skilled experience permanent-residence
            programs require, but it is an important part of a longer plan. It supports you financially and builds
            Canadian references, and after you graduate it positions you for a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a>, where the skilled work you then do can qualify
            you for the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> under{" "}
            <a href="/express-entry">Express Entry</a>.</p>
          <p>For the full graduate-to-PR picture, see our{" "}
            <a href="/study-permit/study-to-pr">study to permanent residence</a> guide. Spousal open work permit
            eligibility is now narrower and tied to specific programs, so if your partner hopes to work too, confirm the
            current rules on canada.ca before you plan around a second income.
          </p>

          <h2>How Wild Mountain helps international students</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team helps international students understand exactly what
            their study permit allows, whether a co-op permit is needed, and how to stay compliant while building toward
            a PGWP and permanent residence. We represent clients entirely online, by video call and secure document
            sharing. We are not affiliated with any government; what we do is keep your status protected and your pathway
            on track. Done properly, working while studying in Canada protects your status today and strengthens every
            step toward a PGWP and PR.
          </p>
          <Steps
            steps={[
              { title: "Confirm what you can do", desc: "We check your study permit conditions and eligibility for on-campus and off-campus work, and whether your program needs a co-op work permit." },
              { title: "Stay compliant", desc: "We help you understand the off-campus hour cap, term dates and breaks so you never breach your conditions, with clear written guidance." },
              { title: "Plan study to PR", desc: "We map how your studies, the PGWP and Canadian experience feed into the Canadian Experience Class or a Provincial Nominee Program." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related study and PR routes</h2>
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that connect to studying in Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={BookOpen} title="Study permits" desc="How to apply to study in Canada at a designated learning institution." href="/study-permit" />
            <FeatureCard icon={Briefcase} title="Post-Graduation Work Permit" desc="An open permit to work after you graduate, and a proven path to PR." href="/work-permits/pgwp" />
            <FeatureCard icon={GraduationCap} title="Study to PR" desc="The full pathway from graduation through the PGWP to permanent residence." href="/study-permit/study-to-pr" />
            <FeatureCard icon={Clock} title="Proof of funds" desc="Showing you can support your studies and living costs in Canada." href="/study-permit/proof-of-funds" />
            <FeatureCard icon={Rocket} title="Canadian Experience Class" desc="Permanent residence built on skilled Canadian work experience after graduation." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={FileCheck2} title="Work permits" desc="The full picture of Canadian work permits beyond your studies." href="/work-permits" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Studying in Canada and want to work the right way?"
        sub="Tell us about your program and our licensed team will confirm what you can do and plan your route to PR, with honest advice and clear fees."
      />
    </>
  );
}
