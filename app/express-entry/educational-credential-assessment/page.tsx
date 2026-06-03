import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/educational-credential-assessment";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Educational Credential Assessment (ECA) Guide",
  titleAbsolute: "Educational Credential Assessment (ECA) 2026",
  description:
    "See what an Educational Credential Assessment (ECA) is, who needs one for Express Entry, designated bodies like WES and IQAS, and its 5-year validity.",
  path: PATH,
  keywords: [
    "educational credential assessment",
    "ECA Express Entry",
    "WES Canada",
    "designated ECA organizations",
    "ECA validity",
  ],
});

const faqs = [
  {
    q: "What is an Educational Credential Assessment (ECA)?",
    a: "An Educational Credential Assessment (ECA) is a report from a designated organisation that verifies a foreign diploma, degree or certificate and states what it is equal to in the Canadian education system. For Express Entry, it lets IRCC count your overseas study toward the Comprehensive Ranking System and confirms you meet the education requirement for programs such as the Federal Skilled Worker class. An ECA is for education completed outside Canada; a Canadian credential does not need one.",
  },
  {
    q: "Who needs an ECA for Express Entry?",
    a: "You need an ECA if you completed your education outside Canada and want it to count, in two situations. First, every Federal Skilled Worker applicant who relies on foreign education to meet the program minimum needs an ECA. Second, anyone in any Express Entry program who wants CRS points for a foreign credential must have an ECA on file. If all of your education is Canadian, or you are not claiming education points for overseas study, you do not need one.",
  },
  {
    q: "Which organisations can issue an ECA?",
    a: "IRCC designates specific organisations to issue ECAs for Express Entry. The general-purpose bodies are World Education Services (WES), International Qualifications Assessment Service (IQAS), International Credential Assessment Service of Canada (ICAS), International Credential Evaluation Service (ICES) and Comparative Education Service (CES) at the University of Toronto. Profession-specific bodies issue ECAs for regulated occupations: the Medical Council of Canada for doctors and the Pharmacy Examining Board of Canada for pharmacists. Always confirm the current designated list on canada.ca before you order.",
  },
  {
    q: "How long does an ECA take and how much does it cost?",
    a: "Processing time depends on the organisation and how quickly your school sends the required documents, and it commonly runs several weeks to a few months. The cost varies by provider and the service level you choose, with additional fees for courier or expedited handling. Because fees and timelines change, we point clients to the chosen organisation's own website and to canada.ca for current figures rather than quoting a fixed number. Order early, as waiting on transcripts from a foreign institution is often the slowest step.",
  },
  {
    q: "How long is an ECA valid?",
    a: "An ECA report is valid for five years from its issue date for Express Entry purposes. Your ECA must still be valid at the time you submit your Express Entry profile and when you apply for permanent residence after an invitation. If your assessment is approaching the five-year mark, plan to have a current one in hand before you create your profile, because an expired ECA cannot support your education points.",
  },
  {
    q: "Does an ECA guarantee CRS points or a specific equivalency?",
    a: "No. An ECA states what your foreign credential is equivalent to in Canada, but the equivalency is the assessing organisation's professional judgement, not a guarantee of a particular result. The CRS points then follow from that equivalency under IRCC's grid. An ECA also does not grant you a licence to practise a regulated profession in Canada; that is a separate process with the relevant provincial regulator. We help you read your ECA correctly and slot the result into your profile.",
  },
  {
    q: "Do I need an ECA for a provincial nominee program?",
    a: "It depends on the stream. Many Provincial Nominee Program streams that align with Express Entry expect the same ECA you use federally, while some non-Express-Entry streams have their own education-assessment rules. Because requirements vary by province and stream, we confirm what each program needs before you order, so you are not paying for an assessment a particular stream will not accept. A single WES or IQAS report often serves both your federal profile and a provincial application.",
  },
  {
    q: "What documents do I need for an ECA?",
    a: "Typically you provide a copy of your degree, diploma or certificate and official transcripts, and your institution usually has to send transcripts directly to the assessing organisation in a sealed or verified form. Documents in other languages generally need certified translations. Exact requirements differ by organisation and by the country where you studied, so follow your chosen provider's checklist closely. Missing or improperly sent transcripts are the most common cause of delay.",
  },
];

export default function EducationalCredentialAssessmentPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Educational Credential Assessment (ECA) for Express Entry, 2026 Guide",
            description:
              "What an Educational Credential Assessment (ECA) is, who needs one for Express Entry, designated organisations like WES and IQAS, and 5-year validity.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Educational Credential Assessment guidance",
            description:
              "What an Educational Credential Assessment (ECA) is, who needs one for Express Entry, designated organisations like WES and IQAS, and 5-year validity.",
            path: PATH,
            serviceType: "Express Entry immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Express Entry"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Express Entry", path: "/express-entry" },
          { name: "Educational Credential Assessment", path: PATH },
        ]}
        title={<>Educational Credential <span className="text-brand">Assessment (ECA)</span></>}
        lede={
          <p>
            An <strong>Educational Credential Assessment (ECA)</strong> verifies your foreign education and states
            what it is equal to in Canada, so IRCC can count it toward Express Entry. This guide explains who needs
            one, the designated organisations such as WES and IQAS, the process, and the five-year validity rule.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure if you need an ECA?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                A licensed RCIC can confirm whether your education needs an assessment and which organisation fits,
                entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry overview", href: "/express-entry", note: "How the whole system works" },
                { label: "Federal Skilled Worker", href: "/express-entry/federal-skilled-worker", note: "Where an ECA is often required" },
                { label: "Comprehensive Ranking System", href: "/express-entry/comprehensive-ranking-system", note: "How education scores in the CRS" },
                { label: "Language requirements", href: "/express-entry/language-requirements", note: "The other core eligibility factor" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your score in 2 minutes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox label="Quick answer">
            An <strong>Educational Credential Assessment (ECA)</strong> is a report from an IRCC-designated
            organisation that confirms your foreign degree, diploma or certificate and says what it equals in
            Canada. You need one if you want overseas education to count for Express Entry, and it stays valid for{" "}
            <strong>five years</strong>.
          </AnswerBox>

          <KeyTakeaways
            summary="An Educational Credential Assessment (ECA) is a report from an IRCC-designated organisation, such as WES or IQAS, that verifies a foreign degree, diploma or certificate and states its Canadian equivalency. That equivalency lets your overseas education count toward Express Entry and earn CRS points. It is required for Federal Skilled Worker applicants relying on foreign education and for anyone claiming CRS points for a foreign credential. ECAs are issued by designated bodies such as WES, IQAS, ICAS, ICES and CES, plus profession-specific organisations, and a report stays valid for five years."
            items={[
              <>An <strong>ECA</strong> confirms your foreign credential and states its <strong>Canadian equivalency</strong> so it can count for Express Entry.</>,
              <>It is required for <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> applicants using foreign education and for anyone claiming CRS education points for overseas study.</>,
              <>Designated organisations include <strong>WES, IQAS, ICAS, ICES and CES</strong>, plus profession-specific bodies for doctors and pharmacists.</>,
              <>An ECA is <strong>valid for five years</strong> and must still be valid when you submit your profile and apply for PR.</>,
              <>A Canadian credential <strong>does not need an ECA</strong>; the requirement is only for education completed abroad.</>,
            ]}
          />

          <h2>What is an Educational Credential Assessment?</h2>
          <p>
            An <strong>Educational Credential Assessment (ECA)</strong> is a report, issued by an organisation IRCC
            has designated, that verifies a diploma, degree or certificate earned outside Canada and states what it
            is equal to in the Canadian education system. In plain terms, it translates a foreign qualification into
            a Canadian reference point, for example confirming that a particular overseas degree is equivalent to a
            Canadian bachelor&apos;s degree. For <a href="/express-entry">Express Entry</a>, that equivalency is what
            lets IRCC count your education and award the matching points under the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a>.
          </p>
          <p>
            An ECA is specifically for education completed abroad. If you studied in Canada, your Canadian credential
            is recognised on its own and does not need an assessment. An ECA in Canada exists so IRCC can compare
            qualifications from around the world on a consistent Canadian scale, with the report most often issued by{" "}
            <strong>World Education Services</strong> through its WES Canada service.
          </p>

          <h2>Who needs an ECA?</h2>
          <p>
            Two groups need an ECA. The requirement is narrower than many people assume, so it is worth checking
            whether it actually applies to you before you order one.
          </p>
          <ul>
            <li><strong>Federal Skilled Worker applicants using foreign education.</strong> If you rely on overseas study to meet the education requirement of the <a href="/express-entry/federal-skilled-worker">Federal Skilled Worker</a> program, an ECA is mandatory.</li>
            <li><strong>Anyone claiming CRS points for foreign education.</strong> In any Express Entry program, if you want education points for a credential earned outside Canada, that credential must be backed by an ECA. This includes <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> candidates who want their foreign degree to add CRS points.</li>
          </ul>
          <Callout type="info" title="When you may not need one">
            If all of your education is Canadian, or you are not claiming any education points for overseas study,
            you generally do not need an ECA. A spouse&apos;s foreign education can also be assessed if you are
            claiming spouse education points. We confirm exactly whose credentials need assessing before you spend on
            reports you may not use.
          </Callout>

          <h2>Which organisations are designated to issue ECAs?</h2>
          <p>
            IRCC names specific organisations that are allowed to issue ECAs for Express Entry. There are
            general-purpose bodies that assess most fields of study, plus profession-specific bodies for certain
            regulated occupations. The table below summarises the main designated organisations, always confirm the
            current list on canada.ca, as designations can change.
          </p>
          <DataTable
            headers={["Organisation", "Type", "Notes"]}
            rows={[
              ["World Education Services (WES Canada)", "General", "One of the most widely used; often the fastest for many countries"],
              ["International Qualifications Assessment Service (IQAS)", "General", "Operated by the Government of Alberta"],
              ["International Credential Assessment Service of Canada (ICAS)", "General", "Based in Ontario"],
              ["International Credential Evaluation Service (ICES)", "General", "Based in British Columbia"],
              ["Comparative Education Service (CES)", "General", "University of Toronto"],
              ["Medical Council of Canada (MCC)", "Profession-specific", "For applicants whose occupation is physician"],
              ["Pharmacy Examining Board of Canada (PEBC)", "Profession-specific", "For applicants whose occupation is pharmacist"],
            ]}
            caption="Main IRCC-designated ECA organisations (canada.ca, 2026). The designated list can change, so verify before ordering."
          />
          <p>
            For most applicants, a general-purpose organisation is the right choice. If your intended occupation is a
            doctor or pharmacist, IRCC may direct you to the matching profession-specific body, so check which report
            your situation calls for before you order.
          </p>

          <h2>How does the ECA process work?</h2>
          <p>
            The process is largely about getting verified documents from your institution to the assessing
            organisation. The exact steps differ by provider, but the sequence is broadly the same.
          </p>
          <Steps
            steps={[
              { title: "Choose your organisation", desc: "Pick a designated body that covers your country and field, then create an account and start an application on its website. Confirm it is on IRCC's current designated list first." },
              { title: "Submit documents", desc: "Send copies of your credential and arrange for your institution to send official transcripts directly to the organisation, with certified translations where needed." },
              { title: "Assessment and report", desc: "The organisation verifies your documents and issues an ECA report stating the Canadian equivalency. This is the result you enter into your Express Entry profile." },
            ]}
          />
          <p>
            The slowest part is almost always waiting on a foreign institution to send transcripts in the required
            form. Because an ECA must be valid when you create your profile and again when you apply for PR, it pays
            to start early rather than scrambling once a draw is in sight.
          </p>

          <h2>How long does an ECA take and what does it cost?</h2>
          <p>
            ECA processing time depends on the organisation and how fast your school sends documents, and it commonly
            runs from several weeks to a few months. A <strong>WES Canada</strong> ECA, through{" "}
            <strong>World Education Services</strong>, is often quicker once your transcripts arrive, while a WES ECA
            for some countries can take longer where verification is harder. The ECA cost varies by provider and the
            service level you choose, with extra fees for courier or expedited handling. Because both timelines and
            fees change, we point clients to the chosen organisation&apos;s own site and to canada.ca for current
            figures rather than quoting a fixed number, and we advise ordering early so a slow transcript does not
            hold up your profile.
          </p>

          <h2>How long is an ECA valid?</h2>
          <p>
            An ECA is <strong>valid for five years</strong> from its issue date for Express Entry. It must still be
            valid at two moments: when you submit your Express Entry profile, and when you apply for permanent
            residence after receiving an Invitation to Apply. If your report is nearing its five-year expiry, plan to
            renew it before you create your profile, because an expired ECA cannot support your education points and
            could undercut your CRS score at the worst possible time.
          </p>
          <Callout type="warning" title="An ECA is not a licence to practise">
            An ECA states an education equivalency for immigration. It does <strong>not</strong> grant the right to
            work in a regulated profession in Canada, that is a separate licensing process handled by the relevant
            provincial regulator. Treat the ECA as an immigration document, not a professional credential.
          </Callout>

          <h2>How an ECA feeds into your CRS score</h2>
          <p>
            Once you have an ECA, its equivalency drives your education points in the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a>. A higher
            equivalency, or two or more credentials, can lift your score, and education also combines with strong{" "}
            <a href="/express-entry/language-requirements">language</a> results to unlock skill-transferability
            points. That is why getting the assessment right, and choosing whether to have a second credential
            assessed, can matter to your final number. You can model the effect with our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> before you commit to a provider.
          </p>

          <h2>How Wild Mountain helps with your ECA</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms whether you actually need an Educational
            Credential Assessment, which designated organisation suits your country and occupation, and whose
            credentials are worth assessing for
            the strongest <a href="/express-entry/comprehensive-ranking-system">CRS</a> result. We then make sure the
            equivalency is entered correctly into your <a href="/express-entry">Express Entry</a> profile and check
            that it stays valid through to your PR application. We represent clients entirely online. ECA fees,
            timelines and the designated list change over time, so we always confirm
            current details on canada.ca and the provider&apos;s site before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Make your foreign education count"
        sub="Get started with a licensed RCIC for clear advice on your ECA, the right designated organisation, and how the equivalency builds your CRS score."
      />
    </>
  );
}
