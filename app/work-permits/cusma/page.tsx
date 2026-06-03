import type { Metadata } from "next";
import { FileCheck2, Briefcase, Building2, Globe, Rocket, Map } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/cusma";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "CUSMA Work Permit (formerly NAFTA)",
  titleAbsolute: "CUSMA Work Permit 2026 (formerly NAFTA)",
  description:
    "The CUSMA work permit lets eligible US and Mexican professionals, transferees, traders and investors work in Canada with no LMIA. Categories explained.",
  path: PATH,
  keywords: [
    "cusma work permit",
    "cusma professional",
    "nafta work permit canada",
    "usmca work permit",
    "cusma intra company transfer",
    "cusma trader investor",
  ],
});

const faqs = [
  {
    q: "What is a CUSMA work permit?",
    a: "A CUSMA work permit is an LMIA-exempt work permit issued under the Canada-United States-Mexico Agreement, the trade agreement that replaced NAFTA in 2020. It lets qualifying citizens of the United States and Mexico work in Canada in defined categories without their employer needing a Labour Market Impact Assessment. There are four broad categories: professionals, intra-company transferees, traders, and investors. Because it skips the labour-market test, it is usually faster and simpler than the standard LMIA route, which is why so many US and Mexican professionals use it.",
  },
  {
    q: "Who qualifies for a CUSMA work permit?",
    a: "You generally need to be a citizen of the United States or Mexico, not simply a permanent resident of those countries. Each category has its own test: CUSMA professionals must work in one of the listed professions and hold the required degree or credentials, intra-company transferees must be moving within the same company in an executive, managerial or specialized-knowledge role, and traders and investors must meet substantial-trade or substantial-investment thresholds. The role offered in Canada must match the category you apply under. Our team checks your citizenship, your profession and your documents against the current CUSMA rules before you apply.",
  },
  {
    q: "Is the CUSMA work permit the same as the old NAFTA work permit?",
    a: "In substance, yes. CUSMA, the Canada-United States-Mexico Agreement, replaced NAFTA in July 2020, and the work permit categories carried over with the same broad structure: professionals, intra-company transferees, traders and investors. Some people still call it a NAFTA work permit out of habit, and IRCC officers understand the term, but the agreement and the formal name are now CUSMA. The list of eligible professions and the documentary requirements remain central, so we work from the current CUSMA provisions rather than older NAFTA references.",
  },
  {
    q: "Do CUSMA professionals need a job offer?",
    a: "Yes. A CUSMA professional needs a pre-arranged offer of employment from a Canadian employer in a profession on the CUSMA list, and the role must require someone with the relevant qualifications. The professional must hold the specific degree or credential the list sets for that profession. Self-employment does not qualify under the professional category. The employer usually still submits an offer of employment through the Employer Portal and pays the employer compliance fee, because LMIA-exempt does not mean requirement-free. We make sure the offer, the profession and your credentials line up before submission.",
  },
  {
    q: "Can I get a CUSMA work permit at the border?",
    a: "Eligible US and Mexican citizens can often apply for a CUSMA work permit on arrival at a Canadian port of entry, which is one reason the route is so quick. That said, applying at the border still means presenting a complete, well-organised package: proof of citizenship, the job offer, evidence of your profession and credentials, and any category-specific documents. A weak or incomplete package risks being turned away at the border, which is a difficult position to be in. We prepare your documents to a port-of-entry standard, or guide an online application where that route is more suitable.",
  },
  {
    q: "What is the difference between CUSMA and an LMIA work permit?",
    a: "The core difference is the labour-market test. A standard LMIA work permit requires the Canadian employer to obtain a Labour Market Impact Assessment from ESDC, which involves advertising, recruitment and a processing fee, before the worker applies. A CUSMA work permit is LMIA-exempt: there is no labour-market test because the trade agreement already provides for the movement of qualifying professionals, transferees, traders and investors. That makes CUSMA faster and lighter when you qualify. If you are not a US or Mexican citizen, or your profession is not listed, the LMIA route or another exemption may be the answer instead.",
  },
  {
    q: "How long does a CUSMA work permit last?",
    a: "Duration depends on the category. Professionals and intra-company transferees are typically issued permits for a defined period that can often be extended while the underlying conditions continue to be met, with intra-company transfers subject to overall maximum durations. Trader and investor permits also run for a set period with extension possible. Because the maximum lengths and extension rules differ by category and can change, we confirm the current limits on canada.ca for your situation rather than promising a fixed term.",
  },
  {
    q: "Can a CUSMA work permit lead to permanent residence?",
    a: "It can, indirectly. The CUSMA permit itself is a temporary-work tool, but the skilled Canadian work experience you build on it can qualify you for the Canadian Experience Class under Express Entry, and a number of Provincial Nominee Program streams are built around skilled workers with a Canadian job offer or Canadian experience. Many US and Mexican professionals come on a CUSMA permit, establish themselves, then transition to permanent residence. We plan the work-permit stage with the eventual PR route in mind so the temporary step builds toward the permanent one.",
  },
];

export default function CusmaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "CUSMA Work Permit (Formerly NAFTA): Complete 2026 Guide",
            description:
              "The CUSMA work permit lets eligible US and Mexican professionals, transferees, traders and investors work in Canada without an LMIA. Categories explained.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "CUSMA work permit support",
            description:
              "The CUSMA work permit lets eligible US and Mexican professionals, transferees, traders and investors work in Canada without an LMIA. Categories explained.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "CUSMA Work Permit", path: PATH },
        ]}
        title={<>CUSMA Work Permit <span className="text-brand">(formerly NAFTA)</span></>}
        lede={
          <p>
            The <strong>CUSMA work permit</strong> lets eligible citizens of the United States and Mexico work in
            Canada without an LMIA, under the trade agreement that replaced NAFTA. It covers four categories:
            professionals, intra-company transferees, traders and investors. This guide explains who qualifies, the
            eligible professions, how fast it moves, and how it compares to the LMIA route.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/work-permits", label: "Explore work permits" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <FileCheck2 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">US or Mexican citizen?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                If you have a Canadian job offer or move within your company, our team can prepare your CUSMA
                work-permit application, entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "All Canadian work permit routes" },
                { label: "LMIA work permits", href: "/work-permits/lmia", note: "The route CUSMA helps you skip" },
                { label: "Intra-company transfer", href: "/work-permits/intra-company-transfer", note: "Related LMIA-exempt route" },
                { label: "Move to Canada from the USA", href: "/move-to-canada/from-the-usa", note: "For US citizens relocating" },
                { label: "Express Entry", href: "/express-entry", note: "Where Canadian experience leads to PR" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox>
            A <strong>CUSMA work permit</strong> is an LMIA-exempt Canadian work permit for citizens of the United
            States and Mexico, issued under the Canada-United States-Mexico Agreement that replaced NAFTA in 2020. It
            covers four categories, professionals, intra-company transferees, traders and investors, and because there
            is no labour-market test it is usually faster than the <a href="/work-permits/lmia">LMIA route</a>.
          </AnswerBox>

          <KeyTakeaways
            summary="A CUSMA work permit is an LMIA-exempt work permit for US and Mexican citizens, issued under the Canada-United States-Mexico Agreement that replaced NAFTA in 2020. It covers four categories: professionals (who need a listed profession, the right credential and a Canadian job offer), intra-company transferees, traders and investors. Because there is no labour-market test, CUSMA is faster and lighter than the LMIA route, and eligible applicants can often apply at a port of entry. The skilled Canadian experience gained on a CUSMA permit can later support permanent residence through the Canadian Experience Class or a Provincial Nominee Program."
            items={[
              <>A <strong>CUSMA work permit</strong> is <strong>LMIA-exempt</strong> and open to citizens of the United States and Mexico.</>,
              <>It covers four categories: <strong>professionals, intra-company transferees, traders and investors</strong>.</>,
              <>CUSMA replaced <strong>NAFTA</strong> in 2020; the categories and eligible-profession list carried over.</>,
              <>No labour-market test means it is faster than the <a href="/work-permits/lmia">LMIA route</a>, and often available at a port of entry.</>,
              <>Canadian experience on a CUSMA permit can lead to PR via the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a <a href="/pnp">PNP</a>.</>,
            ]}
          />

          <h2>What is a CUSMA work permit?</h2>
          <p>
            A <strong>CUSMA work permit</strong> is a work permit issued under the Canada-United States-Mexico
            Agreement (CUSMA), the trade agreement that replaced the North American Free Trade Agreement (NAFTA) in
            July 2020. It is <strong>LMIA-exempt</strong>, which means a Canadian employer hiring under CUSMA does not
            need a <a href="/work-permits/lmia">Labour Market Impact Assessment</a> from Employment and Social
            Development Canada. The agreement itself provides for the cross-border movement of certain business
            people, so the usual labour-market test is set aside. CUSMA work permits sit within Canada&apos;s{" "}
            <a href="/work-permits/international-mobility-program">International Mobility Program</a> alongside other
            LMIA-exempt routes.
          </p>
          <p>
            The route is reserved for <strong>citizens</strong> of the United States and Mexico. Being a permanent
            resident or green-card holder of those countries does not, on its own, qualify you. There are four broad
            categories, each with its own rules, and the right one depends on what you do and how you are moving to
            Canada.
          </p>

          <Callout type="brand" title="CUSMA, USMCA, T-MEC, NAFTA: same agreement">
            You may see the agreement called <strong>CUSMA</strong> in Canada, <strong>USMCA</strong> in the United
            States and <strong>T-MEC</strong> in Mexico. They are the same treaty. Older references to a{" "}
            <strong>NAFTA work permit</strong> point to what is now the CUSMA route, and IRCC officers understand the
            term, but the current categories and profession list are governed by CUSMA. If you know the US{" "}
            <strong>TN visa</strong>, the CUSMA professional permit is its <strong>Canadian equivalent</strong>: the
            same idea of a listed-profession route, applied from the Canadian side.
          </Callout>

          <h2>The four CUSMA categories</h2>
          <p>
            CUSMA does not create one generic permit; it creates four distinct routes. Understanding which one fits is
            the first and most important decision, because the eligibility tests and the documents differ.
          </p>
          <DataTable
            headers={["Category", "Who it is for", "Key requirement"]}
            rows={[
              ["Professionals", "US or Mexican citizens in a listed profession", "Job offer in a CUSMA profession plus the required degree or credential"],
              ["Intra-company transferees", "Staff moving within the same company to a Canadian office", "Executive, managerial or specialized-knowledge role and qualifying prior employment"],
              ["Traders", "Those carrying on substantial trade between Canada and their country", "Substantial volume of trade in goods or services with Canada"],
              ["Investors", "Those directing a substantial investment in a Canadian enterprise", "Substantial, at-risk investment and a role developing or directing the business"],
            ]}
            caption="The four CUSMA categories. The exact credential lists and thresholds are set by the agreement and can change, so confirm current details on canada.ca."
          />

          <h2>CUSMA professionals and eligible professions</h2>
          <p>
            The <strong>professional</strong> category is the most widely used, and it is the route most US citizens
            picture when they think about how to work in Canada. To qualify, you must be a US or Mexican citizen, hold a
            pre-arranged offer of employment from a Canadian employer in a profession on the{" "}
            <strong>CUSMA professional list</strong>, and possess the specific degree or credential that the list
            requires for that profession. The list spans many regulated and skilled occupations, including:
          </p>
          <ul>
            <li>Engineers, architects, and land surveyors.</li>
            <li>Computer systems analysts and other information-technology professionals.</li>
            <li>Accountants, economists, and management consultants.</li>
            <li>Scientists across disciplines such as biology, chemistry, geology and physics.</li>
            <li>Healthcare professionals such as registered nurses, pharmacists, and physicians (subject to provincial licensing).</li>
            <li>University and college teachers, lawyers, and a range of other listed professions.</li>
          </ul>
          <p>
            Two points catch people out. First, self-employment does not qualify under the professional category; you
            need a genuine employer and offer. Second, for <strong>regulated professions</strong> such as nursing,
            medicine and law, the CUSMA permit lets you work, but you usually still need provincial licensing or
            registration before you can practise. We confirm both the profession listing and any licensing path before
            you apply, because the exact list and credential requirements are set by the agreement and can be updated.
          </p>

          <h2>Intra-company transferees under CUSMA</h2>
          <p>
            If you work for a company with offices in both your country and Canada, the{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transferee</a> category lets you move to the
            Canadian office without an LMIA. You generally need to have been employed by the company abroad for a
            qualifying period and to be transferring into an executive, managerial or specialized-knowledge role. CUSMA
            provides a citizenship-based path to this transfer, and the broader intra-company transfer route under the
            International Mobility Program is available to other nationalities too. We help you choose and document
            whichever fits.
          </p>

          <h2>Traders and investors</h2>
          <p>
            The <strong>trader</strong> category is for US or Mexican citizens carrying on substantial trade in goods
            or services principally between their country and Canada. The <strong>investor</strong> category is for
            those who have made, or are actively in the process of making, a substantial and genuinely at-risk
            investment in a Canadian enterprise, and who will direct or develop it. Both categories turn on the word
            &quot;substantial,&quot; which is assessed against the size and nature of the business. That makes the
            documentary evidence central: financial records, business plans and trade data all need to be clear. These
            cases reward careful preparation, and we build the evidence package to match the test.
          </p>

          <h2>How fast is a CUSMA work permit?</h2>
          <p>
            Speed is the headline advantage. Because there is no LMIA and no labour-market test, eligible US and
            Mexican citizens can often apply for a CUSMA work permit directly at a Canadian <strong>port of
            entry</strong> and receive a decision the same day, or apply online ahead of travel. Compared with the
            standard LMIA process, which adds weeks of employer advertising and ESDC processing before the worker can
            even apply, CUSMA is dramatically quicker when you qualify.
          </p>
          <Callout type="info" title="LMIA-exempt is not requirement-free">
            For employer-specific CUSMA permits, the Canadian employer usually still submits an{" "}
            <strong>offer of employment</strong> through the Employer Portal and pays the employer compliance fee
            before you apply. The fee amount changes from time to time, so confirm the current figure on canada.ca.
          </Callout>

          <h2>CUSMA versus the LMIA route</h2>
          <p>
            Many US and Mexican professionals weigh CUSMA against a standard{" "}
            <a href="/work-permits/lmia">LMIA work permit</a>. The two reach the same destination, a work permit, but
            by very different paths.
          </p>
          <DataTable
            headers={["Feature", "CUSMA work permit", "LMIA work permit"]}
            rows={[
              ["Labour-market test", "None (LMIA-exempt)", "Employer must obtain a positive LMIA from ESDC"],
              ["Who can use it", "US and Mexican citizens only", "Open to most nationalities"],
              ["Speed", "Fast; often available at the port of entry", "Slower; weeks of advertising and ESDC processing first"],
              ["Employer burden", "Offer of employment plus compliance fee", "Advertising, recruitment, LMIA application and fee"],
              ["Best when", "You are a US or Mexican citizen in a covered category", "You are not CUSMA-eligible or your profession is not listed"],
            ]}
            caption="CUSMA is faster and lighter for those who qualify; the LMIA route is the fallback when CUSMA does not apply."
          />
          <p>
            If you are not a US or Mexican citizen, or your profession is not on the CUSMA list, the LMIA route or a
            different exemption may be the answer. The first job in any case is to check whether a clean, fast CUSMA
            path exists before assuming a slower route is necessary.
          </p>

          <h2>How Wild Mountain helps with your CUSMA application</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms your citizenship and category, matches
            your role to the CUSMA provisions, and prepares a complete <strong>CUSMA work permit</strong> application
            built to a port-of-entry standard or for online submission, whichever suits your case. Whether you are a US
            citizen weighing how to work in Canada or a Mexican citizen seeking a work permit, we represent clients
            entirely online, by video call and secure document sharing. We are not affiliated with any government; what
            we do is make sure your CUSMA package is accurate, well-evidenced and ready.
          </p>
          <Steps
            steps={[
              { title: "Confirm the category", desc: "We verify your US or Mexican citizenship and identify whether you fit the professional, intra-company transferee, trader or investor category." },
              { title: "Build the package", desc: "We assemble the job offer, proof of profession or credentials and category-specific evidence to a port-of-entry standard, with clear written fees." },
              { title: "Apply and plan for PR", desc: "We submit at the border or online, then map how your Canadian experience can feed into the Canadian Experience Class or a Provincial Nominee Program." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related work and PR routes</h2>
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that connect to CUSMA.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Work permits" desc="The full picture of Canadian work permits, both LMIA-based and LMIA-exempt." href="/work-permits" />
            <FeatureCard icon={FileCheck2} title="LMIA work permits" desc="The standard route, and the labour-market test that CUSMA lets you skip." href="/work-permits/lmia" />
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="Move key staff to a Canadian office without an LMIA, open to more nationalities." href="/work-permits/intra-company-transfer" />
            <FeatureCard icon={Globe} title="Move to Canada from the USA" desc="A full guide for US citizens relocating north, including CUSMA and PR routes." href="/move-to-canada/from-the-usa" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Where Canadian work experience on a CUSMA permit can lead to permanent residence." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Many streams are built around skilled workers with Canadian experience or a job offer." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="US or Mexican citizen with a Canadian opportunity?"
        sub="Tell us about the role and our licensed team will prepare your CUSMA work-permit application, with honest advice and clear fees."
      />
    </>
  );
}
