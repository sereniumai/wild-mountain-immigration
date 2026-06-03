import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/newfoundland-and-labrador/international-graduate";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Newfoundland International Graduate Category 2026",
  titleAbsolute: "NLPNP International Graduate 2026 Guide",
  description:
    "NLPNP International Graduate Category 2026: NLPNP eligibility, PGWP and NL job-offer rules, language and how to apply. RCIC-reviewed, talk to us.",
  path: PATH,
  keywords: [
    "Newfoundland International Graduate Category",
    "NLPNP International Graduate",
    "Newfoundland graduate PR",
    "study to PR Newfoundland",
    "NLPNP graduate stream",
  ],
});

const faqs = [
  {
    q: "Do I need a job offer for the Newfoundland International Graduate Category?",
    a: "Yes. The International Graduate Category requires a job or a job offer from an eligible Newfoundland and Labrador employer in an occupation related to your field of study. This is what separates it from a pure post-graduation pathway. Your NL credential and valid post-graduation work permit (PGWP) qualify you to apply, but the provincial nomination is anchored to genuine, ongoing NL employment connected to what you studied. Confirm the current rules on gov.nl.ca before you apply.",
  },
  {
    q: "Which schools count for the NLPNP International Graduate Category?",
    a: "You generally need a credential from a recognised Newfoundland and Labrador public post-secondary institution, most commonly Memorial University (MUN) or the College of the North Atlantic (CNA). Some private institutions and certain programs may not qualify, and a credential earned mostly online or outside the province can be a problem. Because the eligible-institution and eligible-program lists change, verify your specific school and program against the current gov.nl.ca guide.",
  },
  {
    q: "Is the International Graduate Category enhanced or base?",
    a: "It is a base stream. A nomination under the International Graduate Category does not add 600 points to a federal Express Entry profile, instead, once Newfoundland and Labrador nominates you, you submit a separate paper-based permanent-residence application directly to IRCC. If you have an Express Entry profile and a TEER 0–3 job offer, the enhanced Express Entry Skilled Worker stream may be a faster route, which is one of the first things we assess.",
  },
  {
    q: "Do I need a valid post-graduation work permit (PGWP)?",
    a: "Yes, a valid PGWP (or another qualifying work permit) is central to the International Graduate Category. It is what lets you work in Newfoundland and Labrador after graduation while you build the job and experience that support your nomination. If your PGWP is close to expiring, timing matters a great deal: the province expects you to have valid status, so we map your permit dates against the EOI and application windows carefully.",
  },
  {
    q: "What language level do I need for the International Graduate Category?",
    a: "You must demonstrate language ability with an approved English or French test result, generally at least Canadian Language Benchmark (CLB) 5, with some occupations setting a higher bar. Test results are typically valid for two years. Even though you studied in Newfoundland, the province still expects a valid official test result on file, so book your test early. Language is one of the most common avoidable gaps in graduate applications.",
  },
  {
    q: "How long does the NLPNP take after I am nominated?",
    a: "Newfoundland and Labrador advertises one of the fastest provincial targets in the country, roughly a 25-day standard for a complete nomination application once invited. That covers only the provincial stage. Because the International Graduate Category is a base stream, after nomination you file a separate paper-based application with IRCC for permanent residence, which generally takes longer than the roughly six months IRCC targets for enhanced applications. Verify current timelines on gov.nl.ca and canada.ca.",
  },
  {
    q: "Does a nomination guarantee permanent residence?",
    a: "No. A provincial nomination is an endorsement from Newfoundland and Labrador, not a grant of permanent residence. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. As a licensed RCIC we build the strongest possible case and flag risks before they turn into refusals.",
  },
];

export default function NlInternationalGraduatePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Newfoundland International Graduate Category (NLPNP), 2026 RCIC Guide",
            description:
              "Newfoundland International Graduate Category 2026: NLPNP eligibility, PGWP and NL job-offer rules, language and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "NLPNP International Graduate Category application support",
            description:
              "Newfoundland International Graduate Category 2026: NLPNP eligibility, PGWP and NL job-offer rules, language and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="NLPNP, International Graduate Category"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Newfoundland and Labrador", path: "/pnp/newfoundland-and-labrador" },
          { name: "International Graduate", path: PATH },
        ]}
        title={<>NLPNP International Graduate Category <span className="text-brand">(Newfoundland)</span></>}
        lede={
          <p>
            The <strong>NLPNP International Graduate</strong> category is the pathway to permanent residence
            for recent graduates of Newfoundland and Labrador institutions who hold a valid post-graduation work permit
            and a job in their field. This RCIC-reviewed guide covers eligibility, the PGWP rules and how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Graduated in Newfoundland?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Turning your NL degree and PGWP into permanent residence is all about timing and stream fit. Get an honest
                read from a licensed RCIC before your permit clock runs down.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Newfoundland & Labrador PNP", href: "/pnp/newfoundland-and-labrador", note: "All NLPNP streams explained" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Compare every province's PNP" },
                { label: "NL Skilled Worker stream", href: "/pnp/newfoundland-and-labrador/skilled-worker", note: "The base job-offer route" },
                { label: "Study permits", href: "/study-permit", note: "Start the study-to-PR path" },
                { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp", note: "The permit this stream needs" },
                { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program", note: "The other NL employer route" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The NLPNP International Graduate category is a base provincial stream that nominates recent graduates of Newfoundland and Labrador institutions for permanent residence. You qualify on the strength of an eligible NL credential, a valid post-graduation work permit (PGWP), and an NL job or job offer related to your field of study, with language generally at CLB 5. Candidates apply through an Expression of Interest, and the nomination supports a separate paper application to IRCC."
            items={[
              <>The <strong>International Graduate Category</strong> nominates recent graduates of NL institutions for permanent residence.</>,
              <>You need an <strong>eligible NL credential</strong>, a <strong>valid post-graduation work permit (PGWP)</strong>, and an <strong>NL job or job offer</strong> related to your field of study.</>,
              <>Language is generally <strong>CLB 5</strong> on an approved test, with higher levels for some occupations.</>,
              <>It is a <strong>base stream</strong>: a nomination leads to a separate paper application to IRCC, not +600 CRS.</>,
              <>As of <strong>December 5, 2025</strong>, provincial fees are <strong>$0</strong>; candidates apply through an <strong>expression of interest (EOI)</strong>.</>,
            ]}
          />

          <h2>What is the NLPNP International Graduate category?</h2>
          <p>
            The <strong>NLPNP International Graduate</strong> category is the stream of the Newfoundland and
            Labrador Provincial Nominee Program (NLPNP) built for international students who have recently completed a
            credential at a Newfoundland and Labrador institution and want to stay permanently.</p>
          <p>Rather than ask you to
            arrive with years of foreign experience, this NLPNP graduate stream recognises the education you earned in
            the province and the job you have started in your field, turning the journey from international student to
            permanent resident into a single, joined-up path. The province has set an ambitious growth goal, aiming to welcome up to roughly{" "}
            <strong>5,100 newcomers a year</strong> by 2026 (source: gov.nl.ca, 2026), and recent graduates are a core
            part of that plan.
          </p>
          <p>
            Two NLPNP-wide features make the timing especially favourable. As of December 5, 2025, the province
            eliminated its provincial application fees, so there is <strong>$0</strong> to pay at the provincial stage
            (federal IRCC fees still apply). And the NLPNP advertises one of the fastest provincial processing targets in
            the country, roughly <strong>25 days</strong> for a complete nomination application. Figures and rules
            change frequently, so always confirm the current criteria on gov.nl.ca before acting.
          </p>

          <Callout type="brand" title="A graduate stream with a job-offer anchor">
            Unlike a no-strings post-graduation route, the <strong>NLPNP International Graduate</strong> category ties
            your nomination to genuine Newfoundland and Labrador employment in your field. Your NL credential and valid
            PGWP qualify you to apply, but the job or job offer is what anchors the case, and getting the occupation-to-
            field connection right is where preparation pays off.
          </Callout>

          <h2>Who is the International Graduate Category for?</h2>
          <p>
            The category is designed for recent graduates of recognised Newfoundland and Labrador public post-secondary
            institutions, most commonly Memorial University (MUN) and the College of the North Atlantic (CNA), who have
            obtained a valid <a href="/work-permits/pgwp">post-graduation work permit (PGWP)</a> and are now working, or
            hold a job offer, in an occupation related to what they studied.</p>
          <p>In other words, this graduate stream of the
            Newfoundland nominee program rewards people who studied in the province, stayed, and
            began contributing to the local labour market. If you graduated elsewhere in Canada, or your program or
            institution is not on the eligible list, a different NLPNP stream, such as the base{" "}
            <a href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled Worker stream</a>, may fit you better.
          </p>

          <h2>What are the International Graduate Category eligibility requirements?</h2>
          <p>
            Eligibility for the <strong>NLPNP International Graduate</strong> category rests on a connected set of
            requirements you must meet when you submit your expression of interest. Miss one, a non-eligible
            institution, a lapsed PGWP, a job unrelated to your field, a language band one level short, and the
            application can be refused. The table below summarises the core 2026 requirements; the official, controlling
            list lives on gov.nl.ca and changes periodically.
          </p>
          <DataTable
            headers={["Requirement", "What the International Graduate Category asks for"]}
            rows={[
              ["Eligible NL credential", "A completed credential from a recognised Newfoundland and Labrador public post-secondary institution (e.g. MUN or the College of the North Atlantic), check the eligible-program list"],
              ["Post-graduation work permit", "A valid PGWP (or another qualifying work permit) with enough time remaining to support your application"],
              ["NL job or job offer", "Employment or a genuine job offer from an eligible Newfoundland and Labrador employer in an occupation related to your field of study"],
              ["Language", "An approved English or French test result, generally CLB 5, higher for some occupations, typically valid for two years"],
              ["Intent to settle", "A demonstrated intention to live and work permanently in Newfoundland and Labrador"],
              ["Settlement & support", "Ability to support yourself and any dependants while you establish in the province"],
            ]}
            caption="NLPNP International Graduate Category core eligibility, accurate as of May 2026 (gov.nl.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Your job must relate to your field of study">
            A common avoidable error is a job offer in an occupation unconnected to your credential. The province expects
            a clear link between what you studied in Newfoundland and the role you are filling. If the connection is not
            obvious on paper, the case needs to be made explicitly, exactly the kind of detail we help graduates frame.
          </Callout>

          <h2>How does it differ from the other NLPNP graduate routes?</h2>
          <p>
            Newfoundland and Labrador runs more than one pathway for people who studied in the province, and choosing
            correctly up front saves months. The <strong>International Graduate Category</strong> is for graduates taking
            up employment in their field. The <strong>International Graduate Entrepreneur</strong> route, by contrast, is
            for MUN or CNA graduates starting or buying a Newfoundland business rather than working for an employer. And
            if you hold an Express Entry profile with a TEER 0–3 job offer, the enhanced{" "}
            <a href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled Worker</a> family of streams may move faster
            because an enhanced nomination adds 600 CRS points.
          </p>
          <DataTable
            headers={["Feature", "International Graduate", "Skilled Worker (base)"]}
            rows={[
              ["Who it's for", "Recent graduates of NL institutions", "Workers aged 21–59 with an NL job offer"],
              ["NL credential required?", "Yes", "No"],
              ["Post-graduation work permit?", "Yes (valid PGWP)", "Not specifically required"],
              ["Stream type", "Base", "Base"],
              ["Effect of nomination", "Separate IRCC paper application", "Separate IRCC paper application"],
            ]}
            caption="NLPNP International Graduate Category vs base Skilled Worker stream (gov.nl.ca, May 2026). Eligibility does not guarantee an invitation."
          />

          <h2>How to apply for the International Graduate Category: the EOI system</h2>
          <p>
            <strong>How to apply</strong> for the NLPNP changed on February 19, 2025. You can no longer apply directly to
            most streams; instead you submit an <strong>expression of interest (EOI)</strong> through the province&apos;s
            online portal, and Newfoundland and Labrador invites the candidates it wants to nominate. For graduates, the
            first task is therefore building a strong EOI profile while your PGWP is valid, not filing a full
            application on day one.
          </p>
          <Callout type="info" title="The EOI timeline at a glance">
            Your <strong>EOI stays valid for 12 months</strong>. If the province issues you an invitation, you then have
            <strong> 60 days</strong> to submit a complete nomination application. With the provincial processing target
            at roughly <strong>25 days</strong>, a well-prepared graduate file can clear the provincial stage quickly, but missing documents inside that 60-day window is a common, avoidable setback.
          </Callout>
          <Steps
            steps={[
              { title: "Confirm your eligibility", desc: "Check that your NL credential and institution qualify, that your PGWP is valid with time remaining, and that your job relates to your field of study." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test (IELTS, CELPIP or TEF/TCF) and collect your credential, transcripts, PGWP, job-offer letter and proof of employment." },
              { title: "Submit your EOI", desc: "Create and submit your expression of interest through the province's online portal. It stays valid for 12 months while you wait for an invitation." },
              { title: "Receive an invitation", desc: "If Newfoundland and Labrador invites you, you have 60 days to submit a complete nomination application, meeting eligibility does not guarantee this." },
              { title: "Apply to the NLPNP & get nominated", desc: "Submit your complete provincial application (no provincial fee as of December 5, 2025). On approval, the province nominates you for permanent residence." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate paper-based PR application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <p>
            Because the International Graduate Category is a <strong>base</strong> stream, the final step is a separate
            paper application to IRCC rather than an Express Entry submission. Newfoundland and Labrador does not publish
            invitation cut-off scores, so there is no public target to chase, the focus is simply on a complete,
            well-evidenced EOI. Not sure whether an Express Entry route might be faster? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>Fees, processing and your PGWP timing</h2>
          <p>
            On cost, the 2026 headline is simple: <strong>$0 provincial fees</strong>. Newfoundland and Labrador
            eliminated its NLPNP application fees on December 5, 2025, leaving only the federal IRCC permanent-residence
            fees you pay at the final stage. On speed, the province&apos;s roughly <strong>25-day</strong> provincial
            processing target is among the fastest in Canada, but it covers only the provincial nomination, not the
            separate federal PR application that follows a base nomination.
          </p>
          <p>
            For graduates, the single biggest planning variable is your <strong>PGWP expiry date</strong>. Your permit
            is what keeps you working in Newfoundland and Labrador while you build and submit your case, so we map your
            permit dates against the EOI validity window and the 60-day application deadline from the outset. Leaving it
            late is the most common way a strong graduate profile runs into trouble. Figures and timelines change with
            demand, so we always confirm the live gov.nl.ca and canada.ca pages before advising.
          </p>

          <h2>How Wild Mountain Immigration helps with your International Graduate application</h2>
          <p>
            Turning a Newfoundland credential into <strong>Newfoundland graduate PR</strong> is about two things:
            being in the right stream and submitting a complete EOI before your{" "}
            <a href="/work-permits/pgwp">PGWP</a> clock runs down. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team confirms your
            eligibility, checks that your institution, credential and job all qualify, frames the link between your
            studies and your occupation, and prepares an EOI and nomination application that stand up to scrutiny, then
            represents you with the province and with IRCC.</p>
          <p>If the base{" "}
            <a href="/pnp/newfoundland-and-labrador/skilled-worker">Skilled Worker</a> stream or the{" "}
            <a href="/atlantic-immigration-program">Atlantic Immigration Program</a> is a better fit, we will say so
            honestly.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            NLPNP International Graduate application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Graduated in Newfoundland? Turn it into PR"
        sub="Get started with a licensed RCIC for an honest read on the International Graduate Category and the best route from your NL degree to permanent residence."
      />
    </>
  );
}
