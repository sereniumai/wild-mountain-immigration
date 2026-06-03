import type { Metadata } from "next";
import { Rocket, GraduationCap, Heart, FileCheck2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Work Permit Canada 2026 Guide",
  titleAbsolute: "Work Permit Canada 2026: LMIA, Open & PGWP Guide",
  description:
    "Work permit Canada 2026: LMIA, open and employer-specific permits, PGWP and spousal work permits, plus how to apply. Reviewed by a licensed RCIC.",
  path: PATH,
  keywords: [
    "work permit canada",
    "canada work permit 2026",
    "types of work permits canada",
    "lmia",
    "open work permit",
    "pgwp",
  ],
});

const faqs = [
  {
    q: "Do I need an LMIA to work in Canada?",
    a: "Not always. A Labour Market Impact Assessment (LMIA) is needed for permits under the Temporary Foreign Worker Program, where an employer must show no Canadian was available for the role. But a large share of permits are LMIA-exempt under the International Mobility Program, including intra-company transfers, treaty workers (CUSMA), Francophone Mobility, the Post-Graduation Work Permit and most spousal open work permits. So whether you need an LMIA depends entirely on which permit category fits your situation.",
  },
  {
    q: "What is the difference between an open and an employer-specific work permit?",
    a: "An employer-specific (closed) permit ties you to one employer, job and location named on the permit, you cannot freely change jobs without applying for a new permit. An open work permit lets you work for almost any employer in Canada, with limited exceptions. Open permits include the PGWP, spousal open work permits and bridging open work permits; most LMIA-based permits are employer-specific.",
  },
  {
    q: "Can my spouse work in Canada on my permit?",
    a: "Sometimes, but the rules tightened on January 21, 2025. A spousal open work permit is now generally limited to spouses of workers in TEER 0 or 1 occupations (or select TEER 2/3 shortage occupations) with at least 16 months remaining on their permit, and to spouses of students in a master's program of 16 months or longer, a doctoral program, or certain listed programs. Dependent children are generally no longer eligible. We assess your specific case before you apply.",
  },
  {
    q: "Am I eligible for a PGWP in 2026?",
    a: "To qualify for a Post-Graduation Work Permit you must have completed a program of at least eight months at an eligible designated learning institution. Since November 1, 2024, you must also meet a language requirement (CLB 7 for university graduates, CLB 5 for college graduates) and, for non-degree programs, your field of study must be on the eligible list. Bachelor's, master's and doctoral degree graduates are exempt from the field-of-study rule. You must apply within 180 days of receiving confirmation that you completed your program.",
  },
  {
    q: "How long does a Canada work permit take to process?",
    a: "Processing times vary by permit type, country and whether you apply from inside or outside Canada, and they change monthly. IRCC publishes live estimates on its processing-times tool. LMIA-based applications also require the employer's LMIA to be approved first, which adds time. Always check the current figure on canada.ca before you rely on a timeline.",
  },
  {
    q: "Can a work permit lead to permanent residence?",
    a: "Yes, for many people a work permit is the first step toward PR. Skilled Canadian work experience can make you eligible for the Canadian Experience Class under Express Entry, support a provincial nomination, or qualify you for programs like the Atlantic Immigration Program. While you wait for a PR decision, a bridging open work permit can keep you working. We map this pathway with you from the start.",
  },
  {
    q: "What changed with LMIA rules in 2024 and 2025?",
    a: "In September 2024, IRCC and ESDC tightened the Temporary Foreign Worker Program. The cap on low-wage positions per workplace was cut from 20% to 10% (health care, construction and food sectors kept 20%), low-wage LMIA applications are refused in census metropolitan areas with unemployment of 6% or higher, and the high-wage threshold was raised by roughly 20% above the median. These changes make employer-specific LMIA routes harder, so LMIA-exempt options are worth exploring.",
  },
  {
    q: "Do I need an immigration consultant for a work permit?",
    a: "You can apply yourself, but choosing the wrong permit category, a weak LMIA application, or errors on employer-specific forms are common reasons for delay or refusal. Working under a licensed RCIC (CICC #R706497), our team identifies the strongest permit route, prepares the application and represents you with IRCC. We also offer a lower-cost File Review if you prefer to do the work yourself.",
  },
];

export default function WorkPermitsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Work Permit Canada 2026, Complete RCIC Guide",
            description:
              "Work permit Canada 2026: LMIA, open and employer-specific permits, PGWP and spousal work permits, plus how to apply. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-16",
          }),
          serviceLd({
            name: "Canada work permit application support",
            description:
              "Work permit Canada 2026: LMIA, open and employer-specific permits, PGWP and spousal work permits, plus how to apply. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Work Permits"
        crumbs={[{ name: "Work", path: PATH }]}
        title={<>Canada Work Permits: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            A <strong>Canada work permit</strong> is your legal authorisation to work for a Canadian employer.
            There are two broad families, LMIA-based permits and LMIA-exempt permits, plus open permits like the
            PGWP and spousal work permits. The right route depends on your job, your employer and your goals.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Which permit fits you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                LMIA, open, PGWP or spousal, get started and get a clear read on your strongest work permit route.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Hiring foreign workers (employers)", href: "/work-permits/hiring-foreign-workers", note: "A guide for Canadian employers" },
                { label: "Francophone Mobility", href: "/work-permits/francophone-mobility", note: "LMIA-exempt for French speakers" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
                { label: "Study permits", href: "/study-permit", note: "Study now, work after graduation" },
                { label: "Express Entry", href: "/express-entry", note: "Turn Canadian work into PR" },
                { label: "Alberta AAIP", href: "/alberta-immigration", note: "Our home province's PNP" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A work permit Canada grants is official authorisation that lets a foreign national work for a Canadian employer for a set period. Permits fall into two families: employer-specific permits, most of which require an LMIA under the Temporary Foreign Worker Program, and open work permits, which are LMIA-exempt and let you work almost anywhere. The right permit depends on your job offer, your status and the program you qualify under, and the rules change over time."
            items={[
              <>A <strong>Canada work permit 2026</strong> falls into two families: <strong>LMIA-based</strong> (TFWP) and <strong>LMIA-exempt</strong> (International Mobility Program).</>,
              <><strong>Employer-specific</strong> permits tie you to one job; <strong>open work permits</strong> let you work almost anywhere.</>,
              <>The <strong>PGWP</strong> is an open permit for graduates, but 2024+ language and field-of-study rules now apply.</>,
              <><strong>Spousal open work permits</strong> were restricted on January 21, 2025 and no longer cover every family.</>,
              <>A work permit can build the Canadian experience that leads to <strong>permanent residence</strong>.</>,
            ]}
          />

          <h2>What is a Canada work permit?</h2>
          <p>
            A Canada work permit is a document issued by Immigration, Refugees and Citizenship Canada (IRCC) that lets a
            foreign national work legally in Canada for a set period. People often search for a "work visa Canada", but
            strictly there is no such thing: a work permit is the authorisation to work, and it is not the same as
            permanent residence or a visa on its own.</p>
          <p>Visa-required travellers also need a temporary resident visa or eTA
            to enter. In
            2026, work permits remain one of the most common ways to come to Canada, with IRCC processing hundreds of
            thousands of applications each year (source: canada.ca, 2026).
          </p>
          <p>
            Every permit answers two questions: <em>does the job need an LMIA?</em> and <em>is the permit open or
            employer-specific?</em> Get those two answers right and the rest of the process follows. Choosing the wrong
            category is one of the most common, and most costly, mistakes we see.
          </p>

          <h2>Types of work permits in Canada</h2>
          <p>
            There are many types of work permits in Canada, but almost all sit under one of two programs. The table below
            shows the main permit categories, who each is for, and whether an LMIA is required.
          </p>
          <DataTable
            headers={["Permit type", "Who it's for", "Needs LMIA?"]}
            rows={[
              ["Employer-specific (TFWP)", "Workers hired by a Canadian employer for a named job", "Yes"],
              ["Intra-company transfer (ICT)", "Staff moving within a multinational to a Canadian branch", "No (IMP)"],
              ["CUSMA / treaty worker", "Eligible US/Mexican professionals and traders", "No (IMP)"],
              ["Francophone Mobility", "French-speaking workers for jobs outside Quebec", "No (IMP)"],
              ["Post-Graduation Work Permit", "Graduates of eligible Canadian institutions", "No (open)"],
              ["Spousal open work permit", "Eligible spouses of certain workers/students", "No (open)"],
              ["Bridging open work permit", "PR applicants past their acknowledgement of receipt", "No (open)"],
              ["Working Holiday (IEC)", "Youth from agreement countries", "No (open)"],
            ]}
            caption="Main Canada work permit categories in 2026. IMP = International Mobility Program (LMIA-exempt)."
          />

          <h2>Employer-specific vs open work permits</h2>
          <p>
            Every permit is either <strong>employer-specific</strong> (sometimes called a closed permit) or{" "}
            <strong>open</strong>. An employer-specific permit names your employer, your job and often your work
            location, you cannot switch jobs without applying for a new permit. Most LMIA-based permits are
            employer-specific.
          </p>
          <p>
            An open work permit lets you work for almost any employer in Canada (with narrow exceptions, such as
            employers who fail to comply with conditions). Open permits include the PGWP, spousal open work permits,
            bridging open work permits and the Working Holiday category of International Experience Canada. Because open
            permits offer far more flexibility, they are often the more valuable status to hold, when you qualify.
          </p>

          <h2>LMIA-based permits and the Temporary Foreign Worker Program</h2>
          <p>
            The <strong>Temporary Foreign Worker Program (TFWP)</strong> covers jobs that require a{" "}
            <strong>Labour Market Impact Assessment (LMIA)</strong>. An LMIA is a document an employer gets from
            Employment and Social Development Canada (ESDC) showing that hiring a foreign worker will not negatively
            affect the Canadian labour market, essentially, that no Canadian was available for the role. Once the LMIA
            is positive, the worker can apply for an employer-specific permit.
          </p>
          <p>
            LMIA streams are split into <strong>low-wage</strong> and <strong>high-wage</strong> positions based on the
            provincial or territorial median wage. If the offered wage is below the median for the location, it is treated
            as low-wage; at or above, it is high-wage.</p>
          <p>The distinction matters because the two streams carry different
            caps on the share of low-wage staff a workplace may employ, different housing and transport obligations, and, since 2024, very different odds of approval. The employer also pays a $1,000 processing fee per position for
            most LMIA applications, and the LMIA itself must be approved before the worker can apply for a permit.
          </p>
          <Callout type="warning" title="2024–25 LMIA tightening">
            On <strong>September 26, 2024</strong>, the low-wage cap per workplace was cut from 20% to 10% (health care,
            construction and food sectors keep 20%), low-wage LMIAs are <strong>refused in census metropolitan areas
            with unemployment of 6% or higher</strong>, and the high-wage threshold was raised by roughly 20% above the
            median. These changes make employer-specific LMIA routes harder, so it is worth checking whether an
            LMIA-exempt option fits before committing to the TFWP.
          </Callout>
          <p>
            For the full picture, see our guide to the{" "}
            <a href="/work-permits/temporary-foreign-worker-program">Temporary Foreign Worker Program</a> and how the{" "}
            <a href="/work-permits/lmia">LMIA</a> and the{" "}
            <a href="/work-permits/global-talent-stream">Global Talent Stream</a> fit together.
          </p>

          <h2>LMIA-exempt permits: the International Mobility Program</h2>
          <p>
            The <strong>International Mobility Program (IMP)</strong> covers permits that do <em>not</em> require an LMIA,
            because they serve a broader Canadian economic, cultural or reciprocal interest. Importantly, LMIA-exempt
            does <em>not</em> mean work-permit-exempt, you still need a permit, the employer still submits an offer of
            employment through the Employer Portal, and an employer compliance fee applies.
          </p>
          <p>
            Common IMP routes include <strong>intra-company transfers</strong> (executives, senior managers and
            specialised-knowledge staff moving within a multinational), <strong>CUSMA professionals and traders</strong>,{" "}
            <strong>Francophone Mobility</strong> (LMIA-exempt for French speakers in jobs outside Quebec),
            International Experience Canada, the PGWP and most spousal open work permits. For employers who cannot
            navigate the LMIA process, the IMP is frequently the faster and more practical path, when a worker qualifies.
          </p>
          <p>
            Two IMP routes are worth highlighting.</p>
          <p>An <strong>intra-company transfer (ICT)</strong> requires a qualifying
            corporate relationship between the foreign and Canadian entities and at least one year in a similar role in
            the past three years; permits can run up to seven years for executives and senior managers, or five years for
            specialised-knowledge workers. <strong><a href="/work-permits/francophone-mobility">Francophone Mobility</a></strong>{" "}
            is an often-overlooked option: it is LMIA-exempt for French-speaking workers (NCLC 5 or higher) taking jobs
            outside Quebec in almost any occupation, which makes it a strong route for bilingual candidates who might
            otherwise face the LMIA process.
          </p>
          <p>
            See our full guide to the{" "}
            <a href="/work-permits/international-mobility-program">International Mobility Program</a>. If you are a
            Canadian employer, our guide to{" "}
            <a href="/work-permits/hiring-foreign-workers">hiring foreign workers</a> walks through your options, or
            see when you can{" "}
            <a href="/work-permits/work-without-a-permit">work in Canada without a work permit</a>.
          </p>

          <h2>The Post-Graduation Work Permit (PGWP)</h2>
          <p>
            The <strong>Post-Graduation Work Permit (PGWP)</strong> is an open work permit for international students who
            complete an eligible program of at least eight months at a designated learning institution. Its length
            mirrors your study program, up to a maximum of three years for programs of two years or longer (and for
            master's programs of at least eight months started on or after February 15, 2024). You must apply within{" "}
            <strong>180 days</strong> of confirmation that you completed your program.
          </p>
          <Callout type="brand" title="2024+ PGWP rule changes">
            Since <strong>November 1, 2024</strong>, PGWP applicants must meet a language requirement (CLB 7 for
            university graduates, CLB 5 for college graduates), and graduates of non-degree programs must have studied in
            an <strong>eligible field of study</strong>. Bachelor's, master's and doctoral degree graduates are exempt
            from the field-of-study rule. As of March 2025, graduates of college bachelor's-degree programs are also
            exempt from the field requirement. Field-of-study lists change, so verify the current list on canada.ca.
          </Callout>
          <p>
            The PGWP is one of the strongest bridges to permanent residence: the Canadian work experience it lets you
            build can make you eligible for the <a href="/express-entry">Express Entry</a> Canadian Experience Class or a
            provincial nomination.
          </p>

          <h2>Spousal and family open work permits</h2>
          <p>
            A spouse or common-law partner of certain workers and students may qualify for an open work permit. This used
            to be broadly available, but the rules were significantly narrowed on{" "}
            <strong>January 21, 2025</strong>.
          </p>
          <p>
            Today, a spousal open work permit is generally limited to spouses of workers in{" "}
            <strong>TEER 0 or 1 occupations</strong> (or select TEER 2/3 shortage occupations) with at least 16 months
            remaining on the worker's permit, and to spouses of students in a <strong>master's program of 16 months or
            longer, a doctoral program, or certain listed programs</strong>. Dependent children are generally no longer
            eligible. Because eligibility now turns on fine details of the principal applicant's status, we assess each
            family's situation individually before applying.
          </p>
          <Callout type="info" title="Don't confuse this with family sponsorship">
            These January 2025 changes affect spouses of <em>temporary</em> workers and students. They do not affect{" "}
            <a href="/family-sponsorship">family-class sponsorship</a>, which is a separate permanent-residence route.
          </Callout>

          <h2>How to apply for a Canada work permit</h2>
          <p>
            How to get a work permit in Canada depends on your permit type and whether you apply from inside or outside
            Canada, but the framework is consistent. Most applications are submitted online to IRCC; some travellers can
            apply at a port of entry, and people already in Canada with valid status can often apply from inside the
            country. If you applied to extend or change a permit before your current one expired, you may keep working
            under <strong>maintained status</strong> (formerly implied status) while IRCC decides.
          </p>
          <Steps
            steps={[
              { title: "Confirm the right category", desc: "Decide whether your route is LMIA-based (TFWP) or LMIA-exempt (IMP), and whether the permit is open or employer-specific." },
              { title: "Secure the employer steps", desc: "For LMIA jobs, the employer obtains a positive LMIA from ESDC. For IMP jobs, the employer submits an offer through the Employer Portal and pays the compliance fee." },
              { title: "Gather your documents", desc: "Passport, job offer or LMIA number, proof of qualifications, and, where required, language results, medical exam and police certificates." },
              { title: "Submit your application", desc: "Apply online to IRCC from outside Canada, at a port of entry where eligible, or from inside Canada if you already hold status." },
              { title: "Respond to IRCC", desc: "Provide biometrics, attend any interview, and answer requests promptly. Accuracy and consistency here prevent avoidable refusals." },
              { title: "Receive your permit", desc: "On approval, you receive your work permit (or a port-of-entry letter) and can begin working under its conditions." },
            ]}
          />

          <h2>Work permit processing times</h2>
          <p>
            Processing times vary widely by permit type, country of application and whether you apply inside or outside
            Canada, and they change monthly. LMIA-based applications also depend on how long the employer's LMIA takes
            to be approved first. Rather than rely on a number that dates quickly, always check the live estimate on the
            IRCC processing-times tool (source: canada.ca, 2026) before you plan around a timeline. We monitor current
            times and build realistic expectations into your file.
          </p>

          <h2>From work permit to permanent residence</h2>
          <p>
            For many clients, a work permit is the first step toward staying permanently. Skilled Canadian work
            experience can qualify you for the <a href="/express-entry">Express Entry</a> Canadian Experience Class,
            strengthen a provincial nomination such as the <a href="/alberta-immigration">Alberta AAIP</a>, or open
            regional routes like the Atlantic Immigration Program. If you apply for PR while working, a{" "}
            <strong>bridging open work permit</strong> can keep you employed until IRCC decides your case.
          </p>
          <p>
            We plan this from day one, choosing a work permit Canada route that not only gets you working, but also
            builds toward the permanent residence you want. Prefer to handle the legwork yourself? Our lower-cost{" "}
            <a href="/contact">File Review</a> gives your own application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Where a work permit can take you</h2>
          <p className="mt-3 text-ink-soft">A permit is rarely the destination. We help you turn it into something lasting.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study at a designated institution and unlock the PGWP and a pathway to PR after you graduate." href="/study-permit" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Skilled Canadian work experience can make you eligible for the Canadian Experience Class." href="/express-entry" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Already in Canada on a permit? We can help reunite you with a spouse, partner or family." href="/family-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find the right work permit for your situation"
        sub="Get started with a licensed RCIC and get an honest read on whether an LMIA, open or LMIA-exempt route fits you best."
      />
    </>
  );
}
