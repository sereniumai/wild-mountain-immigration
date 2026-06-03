import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/express-entry/federal-skilled-trades";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Federal Skilled Trades Program 2026",
  titleAbsolute: "Federal Skilled Trades (FST) Program 2026",
  description:
    "Federal Skilled Trades Program (FST) eligibility 2026: trade experience, language and the certificate of qualification. Check your route with an RCIC.",
  path: PATH,
  keywords: [
    "Federal Skilled Trades Program",
    "FST eligibility 2026",
    "skilled trades immigration Canada",
    "certificate of qualification",
    "FST requirements",
  ],
});

const faqs = [
  {
    q: "What is the Federal Skilled Trades Program?",
    a: "The Federal Skilled Trades Program (FST) is one of the three federal economic programs managed under Express Entry. It is for qualified tradespeople who want permanent residence based on skilled-trade work experience. To qualify, you need at least two years of full-time skilled-trade experience in the last five years. You must also meet the job requirements for that trade, hold either a valid one-year job offer or a certificate of qualification from a province or territory, and meet the language thresholds.",
  },
  {
    q: "How much work experience do I need for the FST in 2026?",
    a: "You need at least two years of full-time work experience (or an equal amount of part-time work) in a skilled trade within the five years before you apply. Full-time means at least 30 hours of paid work per week, so two years of full-time work equals 3,120 hours. The experience must be in the skilled trade you are applying under, and you must have met the job requirements for that trade as set out in the National Occupational Classification.",
  },
  {
    q: "Do I need a certificate of qualification for the Federal Skilled Trades Program?",
    a: "You need either a certificate of qualification OR a valid job offer of at least one year, you do not need both. A certificate of qualification is issued by a provincial or territorial body (or, for some trades, a federal authority) after it assesses your training and experience and, usually, after you pass a certification exam. If you do not yet have a job offer, getting a certificate of qualification is the route most overseas tradespeople use to qualify.",
  },
  {
    q: "What language level do I need for the FST?",
    a: "FST has lower language requirements than the other Express Entry programs. You need Canadian Language Benchmark (CLB) 5 in speaking and listening and CLB 4 in reading and writing. You prove this with an approved test such as IELTS General Training or CELPIP-General for English, or TEF Canada or TCF Canada for French. Results must be less than two years old when you apply.",
  },
  {
    q: "Is a job offer required for the Federal Skilled Trades Program?",
    a: "A job offer is not required if you hold a certificate of qualification from a Canadian province or territory. If you do not have a certificate of qualification, you need a valid job offer of full-time employment for at least one year from up to two employers. Note that since 25 March 2025 a job offer no longer adds points to your CRS score, but it can still satisfy this FST eligibility requirement.",
  },
  {
    q: "Which trades qualify under the Federal Skilled Trades Program?",
    a: "Eligible trades fall within specific National Occupational Classification (NOC) major and minor groups, including industrial, electrical and construction trades; maintenance and equipment operation trades; supervisors and technical jobs in natural resources, agriculture and related production; processing, manufacturing and utilities supervisors and central control operators; chefs and cooks; and bakers and butchers. The exact occupations on the eligible list can change, so verify your trade on the current IRCC and NOC pages before you apply.",
  },
  {
    q: "Do I need proof of funds for the FST?",
    a: "Yes, in most cases. You must show you have enough money to support yourself and your family when you arrive, unless you are already legally working in Canada and have a valid job offer. The required amount scales with family size and is updated each year, so check the current proof-of-funds figures on IRCC before you submit.",
  },
  {
    q: "How is the FST different from the Federal Skilled Worker Program?",
    a: "Both lead to permanent residence through Express Entry, but they target different applicants. The Federal Skilled Trades Program is built for tradespeople, asks for two years of trade experience, has lower language thresholds (CLB 5/4) and does not use a points grid for eligibility. The Federal Skilled Worker Program is for a broader range of skilled occupations, needs one year of experience, requires CLB 7 and an educational credential assessment, and you must score at least 67 out of 100 on its selection grid.",
  },
];

export default function FederalSkilledTradesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Federal Skilled Trades Program (FST), 2026 RCIC Guide",
            description:
              "Federal Skilled Trades Program (FST) eligibility 2026: trade experience, language and the certificate of qualification, by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-31",
          }),
          serviceLd({
            name: "Federal Skilled Trades Program application support",
            description:
              "Federal Skilled Trades Program (FST) eligibility 2026: trade experience, language and the certificate of qualification, by a licensed RCIC.",
            path: PATH,
            serviceType: "Federal Skilled Trades immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Express Entry · Permanent Residence"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Express Entry", path: "/express-entry" },
          { name: "Federal Skilled Trades", path: PATH },
        ]}
        title={<>Federal Skilled Trades Program: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            The <strong>Federal Skilled Trades Program</strong> is Canada&apos;s Express Entry route to permanent
            residence for qualified tradespeople. You qualify on two years of skilled-trade work experience plus
            either a certificate of qualification or a one-year job offer, with lower language requirements than the
            other federal programs.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free CRS Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">See your Express Entry score in two minutes, no email required.</p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry overview", href: "/express-entry", note: "How the three programs work" },
                { label: "Federal Skilled Worker", href: "/express-entry/federal-skilled-worker", note: "The 67-point grid route" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "For in-Canada work experience" },
                { label: "CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Federal Skilled Trades Program (FST) is an Express Entry route to permanent residence for qualified tradespeople. FST eligibility needs two years of skilled-trade experience in an eligible NOC, the minimum language levels, and either a certificate of qualification or a one-year job offer. Eligible candidates then compete by CRS score."
            items={[
              <>The <strong>Federal Skilled Trades Program (FST)</strong> is one of three programs managed under Express Entry, built for qualified tradespeople.</>,
              <>You need <strong>at least two years</strong> of full-time skilled-trade work experience in the last five years and must meet the job requirements for that trade.</>,
              <>You must hold either a <strong>valid job offer of one year or more</strong> OR a <strong>certificate of qualification</strong> from a province or territory.</>,
              <>Language thresholds are lower than other programs: <strong>CLB 5</strong> speaking and listening, <strong>CLB 4</strong> reading and writing.</>,
              <>There is no points grid for FST eligibility, but your <strong>CRS score</strong> still decides when you are invited to apply.</>,
            ]}
          />

          <h2>What is the Federal Skilled Trades Program?</h2>
          <p>
            The Federal Skilled Trades Program is a permanent-residence pathway for people qualified in a skilled
            trade. It is one of the three federal economic programs managed through{" "}
            <a href="/express-entry">Express Entry</a>, alongside the Federal Skilled Worker Program and the Canadian
            Experience Class. According to IRCC, once you are invited and submit a complete application, your permanent
            residence is typically processed within about <strong>six months</strong> (source: canada.ca, Express Entry
            processing times, 2026).
          </p>
          <p>
            FST exists because Canada needs welders, electricians, machinists, cooks and dozens of other tradespeople,
            and the program recognises that hands-on trade qualifications do not always line up with the education and
            language profile the other programs reward. That is why its language bar is lower and why it does not use a
            selection points grid to decide eligibility. Skilled trades immigration to Canada has also been supported by
            category-based selection, where IRCC can run a trades category draw that invites tradespeople at a lower CRS
            cut-off than a general round.
          </p>

          <h2>Who is eligible for the Federal Skilled Trades Program in 2026?</h2>
          <p>
            The FST requirements for 2026 set four core conditions you must satisfy at once. You need at least two years
            of full-time skilled-trade work experience in the last five years, you must have met the job requirements
            for that trade, you must hold a valid job offer or a certificate of qualification, and you must meet the
            language thresholds below. The table sets out each requirement.
          </p>
          <DataTable
            headers={["FST requirement", "What you must meet", "Notes"]}
            rows={[
              ["Skilled-trade work experience", "≥ 2 years full-time (or 3,120 hours) in the last 5 years", "Must be paid, in one eligible trade, and gained while qualified"],
              ["Job requirements for the trade", "Show you performed the duties in the NOC description", "Including all essential duties for that trade"],
              ["Job offer or certificate", "Valid job offer ≥ 1 year OR a certificate of qualification", "One or the other, not both"],
              ["Language ability", "Approved test results less than 2 years old", "See language thresholds below"],
              ["Proof of funds", "Settlement funds scaled to family size", "Not required if working in Canada with a valid job offer"],
            ]}
            caption="Core Federal Skilled Trades Program requirements (IRCC, 2026). Verify current figures on IRCC before applying."
          />
          <p>
            Full-time work means at least 30 hours of paid work per week, so two years of full-time experience equals
            3,120 hours. You can also combine part-time work to reach the same total. Volunteer work, unpaid
            internships and any experience gained while you were a student do not count toward the two years.
          </p>

          <h2>What are the FST language requirements?</h2>
          <p>
            The Federal Skilled Trades Program has the lowest language thresholds of the three Express Entry programs.
            You need Canadian Language Benchmark (CLB) 5 in speaking and listening, and CLB 4 in reading and writing.
            You prove this with an approved language test taken within the last two years.
          </p>
          <DataTable
            headers={["Language skill", "Minimum level (CLB)", "How you prove it"]}
            rows={[
              ["Speaking", "CLB 5", "IELTS General / CELPIP-General (English) or TEF / TCF Canada (French)"],
              ["Listening", "CLB 5", "Same approved test"],
              ["Reading", "CLB 4", "Same approved test"],
              ["Writing", "CLB 4", "Same approved test"],
            ]}
            caption="FST minimum language thresholds (IRCC, 2026). Test results must be less than two years old when you apply."
          />
          <Callout type="warning" title="Job-offer points were removed in 2025">
            As of <strong>25 March 2025</strong>, a valid job offer no longer adds points to your CRS score. A job offer
            can still satisfy the FST eligibility requirement above, but it will not raise your ranking. Be cautious of
            older guides that still list arranged-employment CRS points. That information is out of date.
          </Callout>

          <h2>Which trades qualify for the Federal Skilled Trades Program?</h2>
          <p>
            Eligible trades sit within specific National Occupational Classification (NOC) groups. Your occupation must
            fall inside one of these groups, and you must have performed the duties listed in that NOC description.
            Because the FST NOC list is reviewed periodically, always confirm your specific trade on the current IRCC
            and NOC pages before you rely on it.
          </p>
          <DataTable
            headers={["Eligible trade group", "Examples"]}
            rows={[
              ["Industrial, electrical & construction trades", "Welders, electricians, plumbers, carpenters, machinists"],
              ["Maintenance & equipment operation trades", "Heavy-duty equipment mechanics, crane operators, automotive technicians"],
              ["Supervisors & technical jobs, natural resources & agriculture", "Mining, oil & gas and forestry supervisors; agricultural service contractors"],
              ["Supervisors, processing, manufacturing & utilities", "Central control and process operators; production supervisors"],
              ["Chefs & cooks", "Chefs and cooks in restaurants and institutions"],
              ["Bakers & butchers", "Bakers, butchers and related food-preparation trades"],
            ]}
            caption="Eligible FST trade groups by NOC major group (IRCC, 2026). Verify your specific occupation on the current NOC list."
          />

          <h2>How does the certificate of qualification work?</h2>
          <p>
            A certificate of qualification proves you are qualified to work in a skilled trade in Canada. It is issued
            by a provincial or territorial body that assesses your training and work experience and, in most cases,
            requires you to pass a certification or trade exam. Many trades are tested against the national Red Seal
            standard, and some are assessed by a federal authority instead.
          </p>
          <p>
            For overseas tradespeople without a Canadian job offer, the certificate of qualification is usually the key
            that unlocks FST eligibility. The process is run by the province or territory, not by IRCC, so you apply
            directly to the relevant trades authority, for example Alberta&apos;s apprenticeship and trade
            certification body. You often have to be physically assessed or sit an exam in that province, which is why
            many applicants plan a trip or arrange the assessment well before they enter the Express Entry pool.
          </p>
          <Callout type="info" title="Start the certificate early">
            Provincial trade assessments can take months and may require an in-person exam. If you are relying on a
            certificate of qualification rather than a job offer, begin that process as early as possible so it does not
            hold up your Express Entry profile.
          </Callout>

          <h2>How to apply for the Federal Skilled Trades Program</h2>
          <p>
            Applying for the FST follows the standard Express Entry sequence: confirm eligibility, take a language test,
            secure your job offer or certificate of qualification, build your profile, and respond if you are invited.
          </p>
          <Steps
            steps={[
              { title: "Confirm your trade & experience", desc: "Match your work to an eligible NOC trade group and confirm at least two years of full-time experience in the last five years." },
              { title: "Take an approved language test", desc: "Sit IELTS General, CELPIP-General, or TEF/TCF Canada and reach CLB 5 speaking/listening and CLB 4 reading/writing." },
              { title: "Get a job offer or certificate", desc: "Secure a valid one-year job offer, or apply to a province or territory for a certificate of qualification in your trade." },
              { title: "Build your Express Entry profile", desc: "Create your profile, enter the pool and receive your CRS score, which ranks you against other candidates." },
              { title: "Receive your Invitation to Apply", desc: "If your score meets a draw cut-off, IRCC issues an ITA and you then have 60 days to submit your application." },
              { title: "Submit a complete PR application", desc: "Upload language results, reference letters, police checks, medicals and proof of funds where required. Accuracy here helps prevent refusals." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with the Federal Skilled Trades Program</h2>
          <p>
            FST cases live and die on detail: the right{" "}
            <abbr title="National Occupational Classification">NOC</abbr> code, reference letters that prove every
            essential trade duty, and a clean route to the certificate of qualification or a compliant job offer.
            Working under a licensed RCIC (CICC #R706497), our team reviews your trade experience against the eligible
            groups, helps you choose between the certificate and job-offer routes, and prepares an application built to
            withstand scrutiny. A <a href="/work-permits">work permit</a> can also help you build the Canadian trade
            experience that strengthens an FST or <a href="/pnp">provincial nominee</a> profile.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Federal Skilled Trades Program application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Are you eligible for the Federal Skilled Trades Program?"
        sub="Get started with a licensed RCIC for an honest read on your trade experience, certification route and CRS score."
      />
    </>
  );
}
