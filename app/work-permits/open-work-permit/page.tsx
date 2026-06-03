import type { Metadata } from "next";
import { FileCheck2, Rocket, GraduationCap, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/open-work-permit";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Open Work Permit Canada 2026",
  titleAbsolute: "Open Work Permit Canada 2026: Who Qualifies",
  description:
    "Open work permit Canada 2026: who's eligible, the types and the 2025 restrictions. See if you qualify with a licensed RCIC, get started today.",
  path: PATH,
  keywords: [
    "open work permit canada 2026",
    "who is eligible for an open work permit",
    "types of open work permits",
    "open work permit vs employer-specific",
    "2025 open work permit restrictions",
  ],
});

const faqs = [
  {
    q: "Who is eligible for an open work permit?",
    a: "Open work permits are limited to specific groups, not the general public. The main categories are: certain spouses and common-law partners of skilled workers and of master's, doctoral or listed-program students; Post-Graduation Work Permit holders; permanent-residence applicants eligible for a bridging open work permit; young people in the Working Holiday category of International Experience Canada; some vulnerable workers facing abuse; and certain family-class sponsorship applicants in Canada. Eligibility turns on the fine details of your situation, so we confirm your category before you apply.",
  },
  {
    q: "Can my spouse get an open work permit in 2026?",
    a: "Sometimes, but the rules tightened on January 21, 2025. A spousal open work permit is now generally limited to spouses of workers in TEER 0 or 1 occupations (or select TEER 2/3 shortage occupations) with at least 16 months remaining on their permit, and to spouses of students in a master's program of 16 months or longer, a doctoral program, or certain listed programs. Dependent children are generally no longer eligible. Because eligibility depends on the principal applicant's exact status, we assess each family individually before applying. Always confirm the current rules on canada.ca.",
  },
  {
    q: "What is the difference between an open work permit and an employer-specific permit?",
    a: "An open work permit lets you work for almost any employer in Canada and is not tied to a single job or LMIA. An employer-specific (closed) permit names one employer, one job and often one location, you cannot freely switch jobs without applying for a new permit. Open permits include the PGWP, spousal open work permits, bridging open work permits and the Working Holiday category; most LMIA-based permits are employer-specific.",
  },
  {
    q: "Do I need a job offer for an open work permit?",
    a: "No. An open work permit does not require a job offer or a Labour Market Impact Assessment (LMIA). You qualify through your relationship or status, for example, as the spouse of an eligible worker or student, a graduate applying for a PGWP, or a PR applicant past your acknowledgement of receipt. This flexibility is what makes open permits so valuable when you are eligible for one.",
  },
  {
    q: "What are the 2025 restrictions on family open work permits?",
    a: "Effective January 21, 2025, IRCC narrowed who can get a family open work permit. Spouses of foreign workers now qualify only if the worker is in a TEER 0 or 1 occupation (or a select TEER 2/3 shortage occupation) with at least 16 months left on their permit. Spouses of students qualify only if the student is in a master's program of 16 months or longer, a doctoral program, or a specific listed program. Dependent children are generally no longer eligible. These are the current rules to confirm at the time you apply, as IRCC may update the listed occupations and programs.",
  },
  {
    q: "Can an open work permit lead to permanent residence?",
    a: "Yes, an open work permit is often a stepping stone to PR. The Canadian work experience you build on a PGWP or spousal open work permit can make you eligible for the Canadian Experience Class under Express Entry or support a provincial nomination. If you already have a PR application in progress, a bridging open work permit can keep you working while IRCC decides. We map this pathway with you from the start.",
  },
  {
    q: "How long is an open work permit valid?",
    a: "It depends on the category. A PGWP runs from eight months up to three years based on your program. A spousal open work permit is usually tied to the validity of the principal applicant's status. A bridging open work permit can be issued for up to 24 months. Working Holiday permits typically run 12 to 24 months depending on the country agreement. Always check the conditions printed on your own permit and the current rules on canada.ca.",
  },
  {
    q: "Is an open work permit the same as permanent residence?",
    a: "No. An open work permit is temporary status that lets you work, it is not permanent residence and it is not a visa on its own. Visa-required travellers also need a temporary resident visa or eTA to enter Canada. An open permit can, however, help you build the experience that leads to PR, which is why choosing the right route matters.",
  },
];

export default function OpenWorkPermitPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Open Work Permit Canada 2026, Eligibility, Types & Rules",
            description:
              "Open work permit Canada 2026: who's eligible, the types, open vs employer-specific and the 2025 restrictions. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-31",
          }),
          serviceLd({
            name: "Open work permit application support",
            description:
              "Open work permit Canada 2026: who's eligible, the types, open vs employer-specific and the 2025 restrictions. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Open work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work Permits"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Open Work Permit", path: PATH },
        ]}
        title={<>Open Work Permit Canada: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            An <strong>open work permit Canada</strong> lets you work for almost any employer, it is not tied to one
            job or an LMIA. But it is only open to specific groups, and the rules for families tightened in 2025. Here is
            who qualifies and how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/contact", label: "Get started" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <FileCheck2 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Are you eligible?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Spouse, graduate, PR applicant or IEC, get started and get a clear read on whether an open work
                permit fits you.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits (overview)", href: "/work-permits", note: "All permit types compared" },
                { label: "Bridging open work permit", href: "/work-permits/bridging-open-work-permit", note: "Keep working while you wait for PR" },
                { label: "Spousal open work permit", href: "/family-sponsorship/spousal-open-work-permit", note: "For partners of workers & students" },
                { label: "Study permits", href: "/study-permit", note: "Study now, work after graduation" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="An open work permit Canada lets you work for almost any employer without a job offer or an LMIA. It is not available to everyone, though. You qualify through a specific situation, such as being a recent graduate, the spouse of certain workers or students, or a permanent-residence applicant bridging to a new permit. Eligibility turns on the details of your status, and the rules change over time."
            items={[
              <>An <strong>open work permit Canada 2026</strong> lets you work for almost any employer, no job offer or LMIA required.</>,
              <>It is <strong>not for everyone</strong>: eligibility is limited to spouses, graduates, PR applicants, IEC youth and a few other groups.</>,
              <><strong>Open vs employer-specific</strong>: open permits give flexibility; closed permits tie you to one named job.</>,
              <><strong>Family open work permits were restricted on January 21, 2025</strong>, many spouses and dependent children no longer qualify.</>,
              <>An open permit can build the Canadian experience that leads to <strong>permanent residence</strong>.</>,
            ]}
          />

          <h2>What is an open work permit?</h2>
          <p>
            An open work permit lets you work for almost any employer in Canada. It is not tied to one specific job,
            employer or location, and it does not require a Labour Market Impact Assessment (LMIA) or a job offer. That
            makes it fundamentally different from an employer-specific permit, which locks you to a single
            named role. Open permits fall under the International Mobility Program, which is LMIA-exempt: spousal cases,
            for example, are processed under the C41 and C42 exemption codes (source: canada.ca, 2026).
          </p>
          <p>
            With two narrow exceptions, an open work permit gives you the freedom to change jobs, take a promotion or
            move provinces without filing a new application. You cannot work for employers who have failed to comply with
            the conditions of the program, or in certain businesses tied to the sex industry. An open work permit is
            temporary status, not permanent residence, and it is not a visa on its own: visa-required travellers still
            need a temporary resident visa or eTA to enter Canada.
          </p>

          <h2>Who is eligible for an open work permit?</h2>
          <p>
            Open work permits are not available to the general public. You qualify through a specific status or
            relationship, not through a job offer. The main groups who may be eligible in 2026 are set out below. Note
            that the family categories were significantly narrowed on January 21, 2025 (see the restrictions section).
          </p>
          <DataTable
            headers={["Who may qualify", "On what basis", "Key condition to confirm"]}
            rows={[
              ["Spouses of skilled workers", "Principal applicant holds an eligible work permit", "Worker in TEER 0/1 (or select TEER 2/3 shortage) with ≥16 months left"],
              ["Spouses of certain students", "Principal applicant is a student", "Student in a master's ≥16 months, a doctoral, or a listed program"],
              ["PGWP holders", "Completed an eligible Canadian program", "Apply within 180 days; meet 2024+ language & field rules"],
              ["PR applicants (bridging)", "PR application past acknowledgement of receipt", "Valid status + valid work permit; eligible PR stream"],
              ["International Experience Canada", "Youth from an agreement country", "Working Holiday category (open); age and quota limits apply"],
              ["Vulnerable workers", "Experiencing or at risk of employer abuse", "For workers on an employer-specific permit facing abuse"],
              ["Some family-class applicants", "In-Canada family sponsorship in progress", "Spousal/common-law applicants under specific conditions"],
            ]}
            caption="Common open work permit eligibility categories (IRCC, 2026). Verify current conditions on the IRCC page before applying."
          />
          <Callout type="info" title="Eligibility turns on details">
            Whether you qualify often depends on the <em>principal applicant's</em> exact occupation, program or
            application stage, not just your relationship to them. We confirm your category against the current IRCC
            rules before you spend money on an application.
          </Callout>

          <h2>What are the main types of open work permits?</h2>
          <p>
            There are several distinct types of open work permits, each with its own eligibility rules and validity. The
            table below summarises the main ones you are likely to encounter in 2026.
          </p>
          <DataTable
            headers={["Type of open work permit", "Who it's for", "Typical validity"]}
            rows={[
              ["Post-Graduation Work Permit (PGWP)", "Graduates of eligible Canadian institutions", "8 months to 3 years (mirrors your program)"],
              ["Spousal open work permit (SOWP)", "Eligible spouses/partners of certain workers & students", "Usually tied to the principal applicant's status"],
              ["Bridging open work permit (BOWP)", "PR applicants past their acknowledgement of receipt", "Up to 24 months"],
              ["Working Holiday (IEC)", "Youth from agreement countries", "Typically 12–24 months by country agreement"],
              ["Vulnerable worker permit", "Workers facing abuse on a closed permit", "Generally up to 12 months"],
              ["Family-class in-Canada SOWP", "Inland spousal sponsorship applicants", "Tied to the sponsorship application"],
            ]}
            caption="Main types of open work permits in Canada (IRCC, 2026). Validity varies by case, check the conditions on your own permit."
          />
          <p>
            Two of these have their own detailed guides on this site. If you are sponsoring or being sponsored by a
            partner, see the <a href="/family-sponsorship/spousal-open-work-permit">spousal open work permit</a> page.
            If you have a permanent-residence application in progress, the{" "}
            <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> page explains how to keep
            working while you wait.
          </p>

          <h2>Open work permit vs employer-specific permit</h2>
          <p>
            The open work permit vs employer-specific question is the heart of choosing a permit. An{" "}
            <strong>employer-specific</strong> (or closed) permit names your employer, your job and often your work
            location. You cannot change jobs without applying for a new permit, and most are tied to an LMIA. An{" "}
            <strong>open work permit</strong> carries none of those restrictions. The comparison below shows why an open
            permit is usually the stronger status to hold when you qualify.
          </p>
          <DataTable
            headers={["Feature", "Open work permit", "Employer-specific permit"]}
            rows={[
              ["Tied to one employer?", "No, almost any employer", "Yes, one named employer"],
              ["Job offer required?", "No", "Yes"],
              ["LMIA required?", "No (LMIA-exempt)", "Often yes (TFWP)"],
              ["Change jobs freely?", "Yes", "No, new permit needed"],
              ["Who it suits", "Spouses, graduates, PR applicants, IEC youth", "Workers hired for a specific named role"],
            ]}
            caption="Open work permit vs employer-specific permit (IRCC, 2026)."
          />
          <Callout type="brand" title="Flexibility you should not give up lightly">
            Because an open permit lets you change jobs without re-applying, it is often more valuable than a closed
            permit, even a higher-paid one. If you may qualify for both, it is worth weighing the open route carefully
            before committing.
          </Callout>

          <h2>The 2025 restrictions on family open work permits</h2>
          <p>
            The biggest recent change to open work permits affects families. On <strong>January 21, 2025</strong>, IRCC
            narrowed who can get a family open work permit, including the spouse open work permit 2025 rules below. These
            are the current rules to confirm at the time you apply, as IRCC may update the listed occupations and
            programs.
          </p>
          <DataTable
            headers={["Relationship", "Still eligible in 2026 if…", "No longer generally eligible"]}
            rows={[
              ["Spouse of a foreign worker", "Worker is in TEER 0/1 (or select TEER 2/3 shortage) with ≥16 months left", "Spouses of workers in most TEER 2–5 roles"],
              ["Spouse of a student", "Student is in a master's ≥16 months, a doctoral, or a listed program", "Spouses of most college & shorter-program students"],
              ["Dependent children", "Generally not eligible", "Dependent children of workers and students"],
            ]}
            caption="2025 family open work permit restrictions (IRCC, effective January 21, 2025). Confirm current details on canada.ca."
          />
          <Callout type="info" title="This is separate from family sponsorship">
            These January 2025 changes affect spouses of <em>temporary</em> workers and students. They do not affect{" "}
            <a href="/family-sponsorship">family-class sponsorship</a>, which is a separate permanent-residence route
            with its own inland spousal open work permit.
          </Callout>

          <h2>How to apply for an open work permit</h2>
          <p>
            The exact steps for an open work permit application depend on your category and whether you apply from inside
            or outside Canada, but the framework is consistent. Most applications are submitted online to IRCC. People
            already in Canada with valid status can often apply from inside the country, and some travellers can apply at
            a port of entry. Open work permit processing time varies by category and where you apply, so check the
            current estimate on canada.ca before you plan around it.
          </p>
          <Steps
            steps={[
              { title: "Confirm your eligibility category", desc: "Identify which open work permit you qualify for, spousal, PGWP, bridging, IEC or another category, and check the current conditions on canada.ca." },
              { title: "Gather your documents", desc: "Passport, proof of your relationship or status (e.g. the principal applicant's permit, your PR acknowledgement, or your study completion), and any required forms." },
              { title: "Complete biometrics & medicals if needed", desc: "Some applicants must give biometrics or complete a medical exam depending on their country and the work they'll do." },
              { title: "Submit your application", desc: "Apply online to IRCC from outside Canada, from inside Canada if you hold valid status, or at a port of entry where eligible." },
              { title: "Respond to IRCC promptly", desc: "Answer any requests for documents quickly and keep your information consistent. Small errors are a common cause of avoidable delays." },
              { title: "Receive your open work permit", desc: "On approval you receive your permit and can begin working for almost any employer under its conditions." },
            ]}
          />

          <h2>From open work permit to permanent residence</h2>
          <p>
            For many clients, an open work permit is the first step toward staying permanently. The skilled Canadian work
            experience you build on a PGWP or spousal open work permit can qualify you for the{" "}
            <a href="/express-entry">Express Entry</a> Canadian Experience Class, strengthen a provincial nomination such
            as the <a href="/alberta-immigration">Alberta AAIP</a>, or open regional routes. If you apply for PR while
            working, a <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> can keep you
            employed until IRCC decides your case.
          </p>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team plans your open work permit Canada route from day
            one, confirming the right category, preparing the application, and choosing a path that builds toward the
            permanent residence you want. We represent clients entirely online, by video call and secure document
            sharing. Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            own application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Where an open work permit can take you</h2>
          <p className="mt-3 text-ink-soft">The permit is rarely the destination. We help you turn it into something lasting.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="Skilled Canadian work experience can make you eligible for the Canadian Experience Class." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study at a designated institution and unlock the PGWP and a path to PR after you graduate." href="/study-permit" />
            <FeatureCard icon={Heart} title="Spousal open work permit" desc="For partners of eligible workers and students, with its own 2025 eligibility rules." href="/family-sponsorship/spousal-open-work-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if you qualify for an open work permit"
        sub="Get started with a licensed RCIC and get an honest read on whether an open, employer-specific or LMIA-exempt route fits your situation."
      />
    </>
  );
}
