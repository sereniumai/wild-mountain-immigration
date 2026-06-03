import type { Metadata } from "next";
import { FileCheck2, Briefcase, Rocket, Map, Building2, Users } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/lmia";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "LMIA Canada 2026: Labour Market Impact Assessment",
  titleAbsolute: "LMIA Canada 2026: Labour Market Impact Assessment",
  description:
    "LMIA (Labour Market Impact Assessment) explained: who needs one, the employer process, high-wage, low-wage and Global Talent streams, exemptions and PR.",
  path: PATH,
  keywords: [
    "lmia",
    "labour market impact assessment",
    "owner operator lmia",
    "lmia work permit",
    "positive lmia",
    "global talent stream",
  ],
});

const faqs = [
  {
    q: "What is an LMIA and who needs one?",
    a: "An LMIA, or Labour Market Impact Assessment, is a document a Canadian employer obtains from Employment and Social Development Canada (ESDC) showing that hiring a foreign worker will not negatively affect the Canadian labour market. A positive or neutral LMIA confirms there is a genuine need for the worker and that no Canadian or permanent resident was available to fill the role. An employer needs one when they want to hire a foreign worker under the Temporary Foreign Worker Program and no LMIA exemption applies. The worker then uses the positive LMIA to support an employer-specific work permit application.",
  },
  {
    q: "Is getting an LMIA the employer's job or the worker's?",
    a: "The LMIA is the employer's responsibility. It is the Canadian employer who advertises the role, completes recruitment, submits the application to ESDC and pays the processing fee. A foreign worker cannot apply for their own LMIA. Once the employer holds a positive or neutral LMIA, the worker applies for the work permit, and that is the stage where our team supports the worker, preparing a complete, accurate work-permit application built on the LMIA and the job offer. We advise on the work-permit side and help both sides understand how the pieces fit together.",
  },
  {
    q: "What is the difference between the high-wage and low-wage LMIA streams?",
    a: "ESDC splits LMIA applications by whether the wage offered is above or below the median hourly wage for the province or territory where the job is located. High-wage positions and low-wage positions carry different requirements: low-wage roles come with additional conditions, such as transportation, housing support and caps on the proportion of low-wage foreign workers an employer can have. The advertising and recruitment expectations also differ. Because the median wage thresholds and conditions change periodically, we confirm the current figures and stream rules on canada.ca for each role.",
  },
  {
    q: "What is the Global Talent Stream?",
    a: "The Global Talent Stream is a faster LMIA route within the Temporary Foreign Worker Program aimed at innovative employers hiring highly skilled talent, often in technology and specialised occupations. It offers expedited processing for eligible employers and roles, and it pairs with faster work-permit processing for the worker. Employers commit to a Labour Market Benefits Plan, setting out how the hire will create lasting benefits such as jobs or training for Canadians. It is one of the more attractive LMIA streams when the role and employer qualify, and we help workers prepare the matching work-permit application quickly.",
  },
  {
    q: "How long does an LMIA take and what does it cost?",
    a: "Processing times vary by stream, with the Global Talent Stream and certain priority categories processed faster than standard streams. The employer pays a processing fee per position for most LMIA applications, although some categories are exempt from the fee. Because the fee amount and processing service standards change from time to time, we point employers and workers to canada.ca for the current LMIA fee and processing estimates rather than quoting a fixed number. On the worker side, our fees guide explains our professional fee for the work-permit application separately.",
  },
  {
    q: "What is an owner-operator LMIA?",
    a: "An owner-operator LMIA refers to an arrangement where a foreign national buys or establishes a Canadian business and seeks an LMIA to support their own work permit to run it. IRCC and ESDC have tightened and changed the rules around these arrangements over time, and the traditional owner-operator exemption has been altered, so this route is far more restricted than it once was. Because the policy in this area moves, we assess each entrepreneurial case carefully against the current rules and often compare it with dedicated business routes such as the Start-up Visa or a provincial entrepreneur stream.",
  },
  {
    q: "Does an LMIA-based job offer help with permanent residence?",
    a: "It can. A valid LMIA-supported job offer can add points under the Express Entry Comprehensive Ranking System and can underpin many Provincial Nominee Program streams that require an employer offer. So while an LMIA itself is a temporary-work tool, a positive LMIA and the Canadian work experience that follows often become important building blocks toward permanent residence. We plan the work-permit stage with the eventual PR route in mind, whether that is the Canadian Experience Class or a provincial nomination, so the temporary step builds toward the permanent one.",
  },
  {
    q: "Can I get a work permit without an LMIA?",
    a: "Yes, in many cases. A large number of work permits are LMIA-exempt and fall under the International Mobility Program instead, including intra-company transfers, CUSMA professionals, International Experience Canada open work permits, and several other categories. LMIA-exempt does not mean requirement-free: the employer usually still submits an offer of employment through the Employer Portal and pays the compliance fee. We check first whether an exemption applies before assuming an LMIA is needed, because an exempt route is often faster and simpler for everyone.",
  },
];

export default function LmiaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "LMIA (Labour Market Impact Assessment) Canada 2026, Complete Guide",
            description:
              "LMIA (Labour Market Impact Assessment) explained: who needs one, the employer process, high-wage, low-wage and Global Talent streams, exemptions and PR.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "LMIA work permit support",
            description:
              "LMIA (Labour Market Impact Assessment) explained: who needs one, the employer process, high-wage, low-wage and Global Talent streams, exemptions and PR.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "LMIA", path: PATH },
        ]}
        title={<>LMIA <span className="text-brand">(Labour Market Impact Assessment)</span></>}
        lede={
          <p>
            An <strong>LMIA</strong>, or <strong>Labour Market Impact Assessment</strong>, is a document a Canadian
            employer obtains from Employment and Social Development Canada to show that hiring a foreign worker will not
            harm the Canadian labour market. A positive LMIA supports an employer-specific work permit. This guide
            explains who needs one, the employer's process, the high-wage and low-wage streams, LMIA-exempt routes, and
            how an LMIA can lead to permanent residence.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Holding an LMIA job offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                If you have a positive LMIA and a Canadian job offer, our team can prepare your work-permit application
                with IRCC, entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "All Canadian work permit routes" },
                { label: "Intra-company transfer", href: "/work-permits/intra-company-transfer", note: "A common LMIA-exempt route" },
                { label: "International Experience Canada", href: "/work-permits/international-experience-canada", note: "Open work permits, no LMIA" },
                { label: "Express Entry", href: "/express-entry", note: "Where an LMIA offer can add CRS points" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Many streams need an employer offer" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="An LMIA (Labour Market Impact Assessment) is a document a Canadian employer obtains from ESDC showing that hiring a foreign worker will not negatively affect the Canadian labour market. A positive or neutral LMIA then supports an employer-specific work permit. The LMIA is the employer's responsibility: the employer advertises, recruits, applies and pays the fee, while the worker then applies for the work permit. ESDC splits applications into high-wage and low-wage streams, with the faster Global Talent Stream for eligible innovative employers. Many work permits are LMIA-exempt, and a valid LMIA job offer can help toward permanent residence."
            items={[
              <>An <strong>LMIA</strong> is a document from ESDC confirming that hiring a foreign worker will not harm the Canadian labour market.</>,
              <>The LMIA is the <strong>employer&apos;s responsibility</strong>; the worker then applies for an employer-specific <a href="/work-permits">work permit</a>.</>,
              <>ESDC uses <strong>high-wage</strong> and <strong>low-wage</strong> streams, plus the faster <strong>Global Talent Stream</strong> for eligible employers.</>,
              <>Many permits are <strong>LMIA-exempt</strong>, including <a href="/work-permits/intra-company-transfer">intra-company transfers</a> and <a href="/work-permits/international-experience-canada">IEC</a>.</>,
              <>A valid LMIA job offer can add <a href="/express-entry">Express Entry</a> points and support a <a href="/pnp">provincial nomination</a>.</>,
            ]}
          />

          <h2>What an LMIA is and who needs one</h2>
          <p>
            An <strong>LMIA (Labour Market Impact Assessment)</strong> is a document a Canadian employer obtains from
            Employment and Social Development Canada (ESDC) showing that hiring a foreign worker will not negatively
            affect the Canadian labour market. In plain terms, it is ESDC&apos;s confirmation that there is a genuine
            need for the role and that no Canadian citizen or permanent resident was available to fill it. A positive or
            neutral LMIA then supports an employer-specific <a href="/work-permits">work permit</a> application, tying
            the worker to that employer, that job and that location.
          </p>
          <p>
            An employer needs an LMIA when they want to hire a foreign worker under the Temporary Foreign Worker Program
            and no exemption applies. Not every hire requires one: a large share of work permits are{" "}
            <strong>LMIA-exempt</strong> under the International Mobility Program instead, which we cover below. The first
            question in any case is therefore not how to get an LMIA, but whether one is needed at all.
          </p>

          <Callout type="brand" title="Whose job is the LMIA?">
            The LMIA is the <strong>employer&apos;s</strong> responsibility. It is the Canadian employer who advertises,
            recruits, applies to ESDC and pays the processing fee. A worker cannot apply for their own LMIA. Wild
            Mountain Immigration advises on the work-permit side: once a positive LMIA exists, our team prepares the
            worker&apos;s employer-specific work-permit application for IRCC, online.
          </Callout>

          <h2>The employer&apos;s LMIA process, step by step</h2>
          <p>
            Because the LMIA is employer-led, it helps both employers and workers to understand the sequence. Broadly,
            an employer works through recruitment and advertising, the LMIA application itself, and the processing fee
            before a decision is issued.
          </p>
          <ul>
            <li><strong>Advertising and recruitment.</strong> The LMIA advertising requirements ask the employer to advertise the position and conduct genuine recruitment efforts to test whether a Canadian or permanent resident is available, usually for a set minimum period and across required channels. Job Bank recruitment is mandatory for most streams, alongside two other recruitment methods.</li>
            <li><strong>The LMIA application.</strong> The employer submits the application to ESDC with the job details, wage, recruitment results and supporting business documents, demonstrating the offer is genuine and that the wage meets or exceeds the prevailing wage for the occupation and region.</li>
            <li><strong>The LMIA fee.</strong> The employer pays the LMIA fee per position for most applications, although some categories are fee-exempt. The fee amount changes periodically, so confirm the current figure on canada.ca.</li>
            <li><strong>The decision.</strong> ESDC issues a positive, neutral or negative assessment. A positive or neutral LMIA, sometimes called an LMIA approval, is what the worker needs to apply for the work permit.</li>
          </ul>
          <p>
            The LMIA advertising requirements are where many applications stumble, because the rules on what counts as
            adequate advertising are specific and change over time. The LMIA processing time also varies by stream and
            ESDC service standards, so employers should confirm both the current advertising rules and processing
            estimates on canada.ca before they start.
          </p>

          <h2>High-wage and low-wage streams</h2>
          <p>
            ESDC sorts LMIA applications by wage. If the wage offered is at or above the median hourly wage for the
            province or territory, the role falls in the <strong>high-wage</strong> stream; below it, the{" "}
            <strong>low-wage</strong> stream. The split matters because the two carry different obligations.
          </p>
          <DataTable
            headers={["Feature", "High-wage stream", "Low-wage stream"]}
            rows={[
              ["Wage benchmark", "At or above the provincial median", "Below the provincial median"],
              ["Typical extra conditions", "Transition plan expectations (where applicable)", "Transportation, housing support, and caps on the share of low-wage foreign workers"],
              ["Advertising", "Required recruitment across set channels", "Required recruitment across set channels"],
              ["Worker outcome", "Employer-specific work permit", "Employer-specific work permit"],
            ]}
            caption="The high-wage and low-wage split sets the conditions. The exact median thresholds and rules change periodically, so confirm current figures on canada.ca."
          />
          <p>
            The low-wage stream also brings caps on the proportion of an employer&apos;s workforce that can be low-wage
            foreign workers, alongside the housing and transportation obligations. Because thresholds and caps are
            adjusted from time to time, we verify the current rules for each role rather than relying on figures that
            may have moved.
          </p>

          <h2>The Global Talent Stream</h2>
          <p>
            The <strong>Global Talent Stream</strong> is a faster LMIA route within the Temporary Foreign Worker Program,
            built for innovative employers hiring highly skilled talent, often in technology and specialised
            occupations. Eligible employers and roles benefit from expedited LMIA processing, and the matching work
            permit is also processed more quickly.</p>
          <p>In exchange, the employer commits to a Labour Market Benefits Plan,
            setting out lasting benefits for Canadians, such as job creation or skills training. When the role and
            employer qualify, it is one of the most attractive LMIA streams, and our team helps the worker move fast on
            the work-permit application so the speed advantage is not lost.
          </p>

          <h2>LMIA-exempt routes: when you do not need one</h2>
          <p>
            Many work permits do not require an LMIA at all. These <strong>LMIA-exempt</strong> categories sit under the
            International Mobility Program, where Canada has decided the broader economic, cultural or reciprocal benefit
            justifies skipping the labour-market test. Common examples include:
          </p>
          <ul>
            <li><a href="/work-permits/intra-company-transfer">Intra-company transfers</a>, moving executives, managers and specialised-knowledge staff within a multinational to a Canadian branch.</li>
            <li>CUSMA professionals, where qualifying professionals from the United States and Mexico can work in Canada without an LMIA under the trade agreement.</li>
            <li><a href="/work-permits/international-experience-canada">International Experience Canada (IEC)</a>, including the open Working Holiday permit for eligible youth from partner countries.</li>
            <li>Other categories such as certain <a href="/work-permits/open-work-permit">open work permits</a> and the <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> for those with a PR application in progress.</li>
          </ul>
          <p>
            LMIA-exempt does not mean paperwork-free. For employer-specific exempt permits, the Canadian employer
            usually still submits an offer of employment through the Employer Portal and pays the compliance fee. Our
            team always checks whether an exemption applies before assuming an LMIA is needed, because an exempt route is
            often faster and cheaper for everyone involved.
          </p>

          <h2>How an LMIA connects to permanent residence and PNPs</h2>
          <p>
            An LMIA is a temporary-work tool, but it frequently becomes a stepping stone to permanent residence. A valid
            LMIA-supported job offer can add points under the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> in{" "}
            <a href="/express-entry">Express Entry</a>, and many{" "}
            <a href="/pnp">Provincial Nominee Program</a> streams are built around an employer job offer. In{" "}
            <a href="/alberta-immigration">Alberta</a>, for example, several worker streams expect a genuine job offer
            from an Alberta employer.</p>
          <p>Just as importantly, the skilled Canadian work experience you build on an LMIA-based
            permit can qualify you for the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>. We plan the work-permit
            stage with the eventual PR route in mind, so the temporary step builds toward the permanent one. You can
            estimate your standing with our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> before you commit.
          </p>

          <h2>A note on owner-operator LMIAs</h2>
          <p>
            The term <strong>owner-operator LMIA</strong> describes an arrangement where a foreign national buys or
            establishes a Canadian business and seeks an LMIA to support their own work permit to run it. The rules in
            this area have tightened and changed over time, and the traditional owner-operator exemption has been
            altered, so this is far more restricted than it once was.</p>
          <p>Because the policy keeps moving, we assess each
            entrepreneurial case against the current rules and often compare it with dedicated business routes such as
            the <a href="/start-up-visa">Start-up Visa</a>, the{" "}
            <a href="/self-employed-immigration">Self-Employed Persons Program</a>, or a provincial entrepreneur stream
            under the <a href="/pnp">PNPs</a>. Confirm the current owner-operator rules on canada.ca before relying on
            this route.
          </p>

          <h2>How Wild Mountain helps employers and workers</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team supports the work-permit side of an LMIA-based hire.
            We help employers understand the process and the choice between streams, and we prepare the worker&apos;s
            employer-specific LMIA work permit application so it is complete, accurate and ready for IRCC. We represent
            clients entirely online, by video call and secure document sharing. The
            LMIA application itself remains the employer&apos;s responsibility; what we do is make sure the work-permit
            stage that follows an LMIA approval is handled properly.
          </p>
          <Steps
            steps={[
              { title: "Check the route", desc: "We confirm whether an LMIA is actually needed or whether an LMIA-exempt route such as an intra-company transfer or IEC fits better, and which stream suits the role." },
              { title: "Prepare the work permit", desc: "Once a positive or neutral LMIA exists, we build the worker's employer-specific work-permit application around the LMIA and job offer, with clear written fees." },
              { title: "Apply and plan for PR", desc: "We submit and represent the worker with IRCC, then map how the LMIA offer and Canadian experience feed into Express Entry or a Provincial Nominee Program." },
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
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that connect to an LMIA.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Work permits" desc="The full picture of Canadian work permits, both LMIA-based and LMIA-exempt." href="/work-permits" />
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="Move key staff to a Canadian office without an LMIA, under the International Mobility Program." href="/work-permits/intra-company-transfer" />
            <FeatureCard icon={Users} title="International Experience Canada" desc="Open work permits for eligible youth, with no LMIA required." href="/work-permits/international-experience-canada" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Where a valid LMIA job offer can add points toward permanent residence." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Many streams are built around a genuine Canadian employer job offer." href="/pnp" />
            <FeatureCard icon={FileCheck2} title="Start-up Visa" desc="A dedicated route for entrepreneurs, often a better fit than an owner-operator LMIA." href="/start-up-visa" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Have an LMIA job offer? Let us handle the work permit"
        sub="Tell us about the role and our licensed team will prepare your employer-specific work-permit application, with honest advice and clear fees."
      />
    </>
  );
}
