import type { Metadata } from "next";
import { HeartHandshake, Baby, Home, GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/caregiver-program-canada";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Caregiver Program Canada",
  titleAbsolute: "Caregiver Program Canada 2026: PR Pathways & Eligibility",
  description:
    "Caregiver Program Canada explained: the Home Care Worker Immigration Pilots, who qualifies, language and job-offer rules, and the PR route. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "caregiver program canada",
    "caregiver immigration canada",
    "home care worker pilot",
    "home care worker immigration pilot",
    "caregiver pr canada",
  ],
});

const faqs = [
  {
    q: "What is the caregiver program in Canada?",
    a: "Canada offers permanent-residence pathways for caregivers who provide child care or home support and care for people with high medical needs. The current direction is the Home Care Worker Immigration Pilots, which replaced earlier pilots (the Home Child Care Provider Pilot and the Home Support Worker Pilot). Typical requirements include a genuine full-time job offer in an eligible caregiving role, language ability (around CLB 4 or higher), the equivalent of a Canadian high-school diploma or higher, and relevant training or experience. The outcome is permanent residence.",
  },
  {
    q: "Which caregiver pilots are open right now?",
    a: "Caregiver pilots have limited intake and the openings change over time, so availability should always be confirmed on canada.ca before you plan around it. The Home Care Worker Immigration Pilots are the current framework, covering child care and home support roles, and they replaced the earlier Home Child Care Provider Pilot and Home Support Worker Pilot. We check the live status and eligibility for you rather than assuming a stream is accepting applications.",
  },
  {
    q: "Do caregivers get permanent residence in Canada?",
    a: "Yes, the goal of these pathways is permanent residence. Depending on the stream and the rules in force, some streams have offered PR on or soon after arrival, while others require a period of qualifying Canadian caregiving work before PR is confirmed. Because the design of these pilots changes, we confirm the current structure and what it means for your timeline before you apply.",
  },
  {
    q: "What are the requirements for the caregiver pathway?",
    a: "Typical requirements include a genuine, full-time job offer in an eligible caregiving role (child care, or home support and care for people with high medical needs), language ability of around CLB 4 or higher, education usually equivalent to a Canadian high-school diploma or higher, and relevant training or experience. Exact thresholds and the documents required can change, so confirm the current criteria on canada.ca. We assess your profile against the live requirements before you commit.",
  },
  {
    q: "Can caregivers from the Philippines apply to come to Canada?",
    a: "Yes. There is strong demand for these pathways from the Philippines and many other countries, and applicants are assessed on the program criteria rather than nationality. The key questions are whether you have an eligible job offer, meet the language and education standards, and apply while a relevant stream is open. We help applicants from around the world prepare these applications remotely, by video call and phone.",
  },
  {
    q: "What is the difference between the Home Care Worker Immigration Pilots and the old caregiver programs?",
    a: "The Home Care Worker Immigration Pilots are the current framework for caregiver permanent residence, covering child care and home support roles. They replaced two earlier programs: the Home Child Care Provider Pilot and the Home Support Worker Pilot. The broad purpose has stayed the same, which is caregiving work in Canada leading to permanent residence, but the structure, intake and how and when PR is granted have shifted between versions. That is why we always confirm the live program design on canada.ca before advising on your timeline.",
  },
  {
    q: "How much does a caregiver application cost and how long does it take?",
    a: "Budget for IRCC government fees, the right-of-permanent-residence fee, biometrics, an approved language test, an Educational Credential Assessment if you studied outside Canada, a medical exam and police certificates. These government figures change periodically, so confirm the current amounts on canada.ca, and our fees guide explains how our professional fee differs from government fees. On timelines, processing moves with volume and with whether a stream is open, so we plan against current IRCC estimates rather than a fixed promise.",
  },
];

export default function CaregiverProgramCanadaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Caregiver Program Canada: 2026 RCIC Guide",
            description:
              "Caregiver Program Canada explained: the Home Care Worker Immigration Pilots, who qualifies, language and job-offer rules, and the PR route. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "Caregiver immigration support",
            description:
              "Caregiver Program Canada explained: the Home Care Worker Immigration Pilots, who qualifies, language and job-offer rules, and the PR route. RCIC-reviewed.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Immigrate"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Caregiver Pathways", path: PATH },
        ]}
        title={<>Caregiver Program <span className="text-brand">Canada</span></>}
        lede={
          <p>
            The <strong>Caregiver Program Canada</strong> offers permanent-residence pathways for caregivers who look
            after children or provide home support and care for people with high medical needs. The current direction is
            the <strong>Home Care Worker Immigration Pilots</strong>, and the outcome is permanent residence. Intake is
            limited and the rules change, so it pays to check the live position before you plan.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/work-permits", label: "Explore work permits" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <HeartHandshake className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Caregiver pathway?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Have a caregiving job offer, or hoping for one? Tell us your situation and we will check the live
                openings and your route to permanent residence.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "Temporary routes that can come first" },
                { label: "Express Entry", href: "/express-entry", note: "The main federal PR system" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Province-led routes for in-demand work" },
                { label: "Family Sponsorship", href: "/family-sponsorship", note: "If you have close family in Canada" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Caregiver Program Canada now centres on the Home Care Worker Immigration Pilots, permanent-residence pathways for people providing child care or home support for those with high medical needs. These pilots replaced the earlier Home Child Care Provider Pilot and Home Support Worker Pilot. Typical requirements are a genuine full-time job offer, language around CLB 4 or higher, high-school-level education, and relevant experience. Intake is limited and changes, so confirm current openings on canada.ca."
            items={[
              <>The <strong>caregiver program in Canada</strong> now centres on the <strong>Home Care Worker Immigration Pilots</strong>, covering child care and home support roles.</>,
              <>They <strong>replaced</strong> the earlier Home Child Care Provider Pilot and Home Support Worker Pilot.</>,
              <>Typical needs: a <strong>full-time caregiving job offer</strong>, language around <strong>CLB 4+</strong>, education at high-school level or higher, and relevant training or experience.</>,
              <>The outcome is <strong>permanent residence</strong>, on or after arrival depending on the stream; demand is strong from <a href="/move-to-canada/from-the-philippines">the Philippines</a>.</>,
              <>Intake is <strong>limited and changes</strong>, so confirm current openings and criteria on canada.ca; <a href="/work-permits">work permits</a> or <a href="/express-entry">Express Entry</a> may be alternatives.</>,
            ]}
          />

          <h2>What is the caregiver program in Canada?</h2>
          <p>
            Canada has long offered <strong>permanent-residence pathways for caregivers</strong>, recognising how much
            families rely on people who care for children, the elderly and those with high medical needs. Over the years
            the design of these pathways has changed several times. The <strong>current direction</strong> is the{" "}
            <strong>Home Care Worker Immigration Pilots</strong>, which cover two broad kinds of work: child care, and
            home support including care for people with high medical needs.
          </p>
          <p>
            These pilots <strong>replaced earlier programs</strong>, the Home Child Care Provider Pilot and the Home
            Support Worker Pilot. The thread that runs through all of them is the same: caregiving work in Canada that
            leads to <strong>permanent residence</strong>, rather than a temporary stay with no future. The details of
            how and when PR is granted have shifted between versions, which is exactly why current information matters.
          </p>

          <Callout type="warning" title="Intake is limited and changes">
            Caregiver pilots have <strong>capped intake</strong> and their openings come and go. A stream that is open
            today may pause, fill, or be replaced. Always confirm the <strong>current openings and criteria on
            canada.ca</strong> before you build plans around a particular pilot. We check the live status for you so you
            are not relying on out-of-date information.
          </Callout>

          <h2>A short history: from earlier pilots to the Home Care Worker pilots</h2>
          <p>
            Canada&apos;s caregiver routes have been reshaped repeatedly, which is why older guides can be misleading.
            For years, two separate pilots ran side by side: the <strong>Home Child Care Provider Pilot</strong>, for
            people caring for children in a home, and the <strong>Home Support Worker Pilot</strong>, for people
            providing personal care and support, including to those with high medical needs. Both were designed to lead
            to <strong>permanent residence</strong> rather than leaving caregivers in temporary limbo.
          </p>
          <p>
            The current direction, the <strong>Home Care Worker Immigration Pilots</strong>, carries that same
            purpose forward and covers the same two broad kinds of work, child care and home support. The framework set
            out for the 2025 intake described two ways in, a <strong>Gaining experience stream</strong> for applicants
            new to Canadian caregiving and a <strong>Recognized experience stream</strong> for those with qualifying
            Canadian work, though intake caps and exactly which job offers qualify still move between versions. Because
            the design changes, we always confirm the live structure on canada.ca before advising on your timeline
            rather than relying on how a previous pilot worked.
          </p>

          <h2>Who the caregiver pathways are for</h2>
          <p>
            Broadly, the Home Care Worker Immigration Pilots serve two groups of workers, matched to the kind of care
            they provide:
          </p>
          <ul>
            <li><strong>Child care providers</strong>, who care for children in a home setting.</li>
            <li><strong>Home support workers</strong>, who provide personal care and support, including for people with high medical needs.</li>
          </ul>
          <p>
            Demand for these routes is strong from the <strong>Philippines</strong> and many other countries. Applicants
            are assessed on the program criteria, not nationality, so the practical questions are whether you have an
            eligible job offer and meet the language and education standards while a stream is open.
          </p>

          <h2>Strong demand from the Philippines</h2>
          <p>
            Filipino caregivers have a long and respected history in Canadian families, and the{" "}
            <a href="/move-to-canada/from-the-philippines">move to Canada from the Philippines</a> often runs through
            exactly these pathways. The appeal is clear: caregiving experience is widely held, English is widely spoken,
            and the destination is permanent residence rather than a temporary posting. The same rules apply to
            Filipino applicants as to anyone else, so success comes down to an eligible job offer, meeting
            the language and education standards, and applying while a relevant stream is open. We support these applicants
            and others around the world entirely online, by video call and phone, and our country guide
            for the <a href="/move-to-canada/from-the-philippines">Philippines</a> sets out the wider picture.
          </p>

          <h2>Caregiver program requirements</h2>
          <p>
            The exact thresholds and documents can change between versions of these pilots, so treat the table below as a
            general guide and confirm the current criteria on <strong>canada.ca</strong> before relying on it.
          </p>
          <DataTable
            headers={["Requirement", "What it means", "Typical standard"]}
            rows={[
              ["Job offer", "A genuine, full-time offer in an eligible caregiving role", "Required"],
              ["Type of care", "Child care, or home support and care for high medical needs", "Defines which stream fits"],
              ["Language", "Approved test result in English or French", "Around CLB 4 or higher"],
              ["Education", "A Canadian credential or an assessed foreign one", "Usually high-school diploma equivalent or higher"],
              ["Training or experience", "Relevant caregiving training or work experience", "Stream-dependent"],
              ["Permanent residence", "The outcome of the pathway", "On arrival or after qualifying Canadian work, depending on the stream"],
            ]}
            caption="Illustrative overview only. Caregiver pilots change, so confirm the current requirements and intake on canada.ca before applying."
          />

          <h2>Eligibility in more detail</h2>
          <p>
            Behind the table, a handful of specifics decide whether an application holds together. We work through each
            of these with you early, because a gap is far easier to fix before you apply than to explain afterwards:
          </p>
          <ul>
            <li><strong>The job offer.</strong> It must be genuine, full-time and in an eligible caregiving role, child care (NOC 44100) or home support (NOC 44101), from an employer who can support your application. The occupation classification matters as much as the wage, and unlike many work-permit routes these pilots have not required a separate LMIA.</li>
            <li><strong>Language.</strong> You normally sit an approved English or French test, with results around CLB 4 or higher depending on the stream. Even confident speakers usually take the test to claim the result.</li>
            <li><strong>Education.</strong> You generally need a high-school diploma equivalency: the equivalent of a Canadian high-school diploma or higher. If you studied abroad, an Educational Credential Assessment lets your qualification be compared to Canadian standards.</li>
            <li><strong>Training or experience.</strong> Relevant caregiving training or work experience is often required, and the amount can vary by stream.</li>
          </ul>

          <h2>How caregivers reach permanent residence</h2>
          <p>
            The goal of these pathways is <strong>permanent residence</strong>. Depending on the stream and the rules in
            force, some versions have offered <strong>PR on or soon after arrival</strong>, while others ask you to
            complete a period of <strong>qualifying Canadian caregiving work</strong> first. Because the structure has
            changed between pilots, the right answer for your timeline depends on which stream is open when you apply.
          </p>
          <p>
            If a caregiver pilot is not open or not the right fit, related routes may still help. A{" "}
            <a href="/work-permits">work permit</a> can sometimes come first, while skilled applicants might explore{" "}
            <a href="/express-entry">Express Entry</a> or a <a href="/pnp">Provincial Nominee Program</a>. If you have
            close family in Canada, <a href="/family-sponsorship">family sponsorship</a> may be relevant too. We help you
            compare honestly rather than forcing a single route.
          </p>

          <h2>How caregiver routes connect to work permits and other PR pathways</h2>
          <p>
            Caregiver pathways do not sit in isolation. Depending on your situation, they can connect with the wider
            immigration system in several ways:
          </p>
          <ul>
            <li><strong>Work permits first.</strong> A <a href="/work-permits">work permit</a> can sometimes let you begin caregiving work in Canada while a permanent residence route is arranged, and Canadian experience you build can strengthen later applications.</li>
            <li><strong>Express Entry.</strong> Skilled applicants who meet the criteria may be competitive in <a href="/express-entry">Express Entry</a>, scored under the <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a>; the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> can reward Canadian work, while the <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> program suits foreign experience.</li>
            <li><strong>Provincial Nominee Programs.</strong> Several provinces run streams for in-demand occupations through their <a href="/pnp">Provincial Nominee Programs</a>, which can add 600 CRS points with a nomination.</li>
            <li><strong>Family sponsorship.</strong> If you have a spouse, partner or close relative who is already a Canadian citizen or permanent resident, <a href="/family-sponsorship">family sponsorship</a> may open a separate path.</li>
          </ul>
          <p>
            You can estimate where you stand for the federal route with our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and our team compares all of these against the caregiver
            pilots before you commit to one.
          </p>

          <h2>Costs and timelines</h2>
          <p>
            Costs fall into <strong>government and third-party fees</strong>, IRCC processing, the
            right-of-permanent-residence fee, biometrics, an approved language test, an Educational Credential
            Assessment if you studied abroad, a medical exam and police certificates, and your own relocation costs.
            These government figures change periodically, so we itemise the current numbers for your case and you can
            confirm amounts on <strong>canada.ca</strong>. Our <a href="/fees">fees guide</a> explains how our
            professional fee works and how it differs from government fees. On <strong>timelines</strong>, processing
            moves with application volume and with whether a stream is open, so we plan against current IRCC estimates
            rather than a fixed promise.
          </p>

          <Callout type="brand" title="Online support, wherever you are">
            Wild Mountain Immigration works with caregiver applicants across Canada and around the world entirely
            online, by video call and phone. As a CICC-regulated practice led by a licensed RCIC, our team checks the
            live program status, confirms whether your job offer and profile fit, and tells you honestly whether a
            caregiver pathway is realistic for you right now.
          </Callout>

          <h2>How Wild Mountain Immigration helps with caregiver applications</h2>
          <p>
            Wild Mountain Immigration is a CICC-regulated practice led by a licensed RCIC (R706497). Because intake under
            the <strong>Caregiver Program Canada</strong> changes so often, much of our value is simply telling you the
            truth about the live position before you spend a penny, then building a complete, well-documented
            application if a route is realistic for you. From confirming an eligible job offer through to settling in
            Canada as a caregiver and reaching permanent residence, our scope is standard RCIC work, and we represent
            clients entirely online.
          </p>
          <Steps
            steps={[
              { title: "Check the live position", desc: "We confirm which caregiver pilot is open, its current criteria and intake, so you are not planning around a stream that has paused." },
              { title: "Assess your profile", desc: "We review your job offer, language, education and experience against the current requirements and flag any gaps early." },
              { title: "Prepare and apply", desc: "We build a complete, well-documented application and represent you with IRCC through to a decision on permanent residence." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Caregiver routes at a glance</h2>
          <p className="mt-3 text-ink-soft">The pilots are the headline, but related routes can help too. Explore your options.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Baby} title="Child care providers" desc="Caring for children in a home setting, one of the two main streams under the Home Care Worker pilots." />
            <FeatureCard icon={Home} title="Home support workers" desc="Personal care and support, including for people with high medical needs, the second main caregiving stream." />
            <FeatureCard icon={GraduationCap} title="Other routes to PR" desc="If a pilot is closed, Express Entry, a PNP or a work permit may open a different path to permanent residence." href="/express-entry" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Exploring a caregiver pathway?"
        sub="Tell us about your job offer and background and a licensed RCIC will check the live openings and your route to PR. Honest advice, clear fees."
      />
    </>
  );
}
