import type { Metadata } from "next";
import { FileCheck2, Briefcase, Building2, Globe, Rocket, Map } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/ceta";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "CETA Work Permit for EU Nationals",
  titleAbsolute: "CETA Work Permit for EU Nationals",
  description:
    "The CETA work permit lets eligible EU nationals work in Canada with no LMIA: service suppliers, independent professionals and corporate transferees.",
  path: PATH,
  keywords: [
    "ceta work permit",
    "ceta canada work permit",
    "ceta intra corporate transferee",
    "ceta independent professional",
    "eu work permit canada",
    "lmia exempt work permit eu",
  ],
});

const faqs = [
  {
    q: "What is a CETA work permit?",
    a: "A CETA work permit is an LMIA-exempt Canadian work permit issued under the Comprehensive Economic and Trade Agreement between Canada and the European Union. It lets qualifying EU nationals work in Canada in defined categories without their employer or contracting business needing a Labour Market Impact Assessment. The main categories are contractual service suppliers, independent professionals, and intra-corporate transferees, with provisions also covering certain business visitors and key personnel. Because it removes the labour-market test, CETA can be a faster and lighter route than a standard LMIA for eligible Europeans.",
  },
  {
    q: "Who qualifies for a CETA work permit?",
    a: "You generally need to be a national of a European Union member state that applies CETA, and your role in Canada must fit one of the agreement's categories. Contractual service suppliers and independent professionals must work in a covered sector, hold the required qualifications and have a service contract with a Canadian client. Intra-corporate transferees must be moving within the same enterprise into a senior, specialist or graduate-trainee role after qualifying prior employment. The exact covered sectors and reservations vary, so we check your nationality, sector and documents against the current CETA provisions before applying.",
  },
  {
    q: "What categories does CETA cover?",
    a: "The work-relevant CETA categories are intra-corporate transferees (senior personnel, specialists and graduate trainees moving within the same company), contractual service suppliers (employees of an EU company delivering a service under a contract with a Canadian client), and independent professionals (self-employed EU professionals delivering a service under contract). CETA also provides for short-term business visitors and investors. Each category has its own eligibility test, duration and conditions, so identifying the right one is the first step.",
  },
  {
    q: "What is a CETA contractual service supplier?",
    a: "A contractual service supplier is an employee of a European Union company that has a service contract with a Canadian client, sent to Canada to deliver that service. To qualify you typically need relevant qualifications, a set period of prior experience with the EU employer, and the service must fall within a sector covered by the agreement. There are usually limits on the length of stay tied to the contract. Independent professionals are similar but are self-employed rather than employees. We help match your contract and credentials to the right one of the two.",
  },
  {
    q: "What is an intra-corporate transferee under CETA?",
    a: "An intra-corporate transferee under CETA is someone moving within the same enterprise from an EU office to a Canadian one, in a senior personnel, specialist or graduate-trainee capacity. You generally need to have been employed by the company for a qualifying period before the transfer. CETA provides EU nationals a treaty-based route to this transfer, and it sits alongside the broader intra-company transfer route under Canada's International Mobility Program, which is open to other nationalities. We help you choose and document whichever path fits your company structure and role.",
  },
  {
    q: "Can Irish citizens use the CETA work permit?",
    a: "Yes. Ireland is a European Union member state, so Irish nationals can use the CETA work permit where they meet a category's requirements, as an intra-corporate transferee, a contractual service supplier or an independent professional. Irish citizens also have other strong options for Canada, including the International Experience Canada Working Holiday for eligible youth and Express Entry, where native English supports a strong score. We weigh CETA against those routes to find the fastest, strongest path for your situation.",
  },
  {
    q: "How long does a CETA work permit last?",
    a: "Duration depends on the category. Intra-corporate transfers run for a defined period with maximum limits depending on the role, while contractual service suppliers and independent professionals are usually limited to a stay tied to the length of the service contract within a given period. Extensions may be possible while the underlying conditions continue to be met. Because the precise durations and limits are set by the agreement and can be updated, we confirm the current figures on canada.ca for your category rather than promising a fixed term.",
  },
  {
    q: "Can a CETA work permit lead to permanent residence?",
    a: "Indirectly, yes. The CETA permit is a temporary-work tool, but the skilled Canadian work experience you build on it can qualify you for the Canadian Experience Class under Express Entry, and many Provincial Nominee Program streams are built around skilled workers with Canadian experience or a job offer. Many European professionals come on a CETA permit, establish themselves in Canada, then transition to permanent residence. We plan the work-permit stage with the eventual PR route in mind so the temporary step builds toward the permanent one.",
  },
];

export default function CetaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "CETA Work Permit for EU Nationals: Complete 2026 Guide",
            description:
              "The CETA work permit lets eligible EU nationals work in Canada without an LMIA: service suppliers, independent professionals and corporate transferees.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "CETA work permit support",
            description:
              "The CETA work permit lets eligible EU nationals work in Canada without an LMIA: service suppliers, independent professionals and corporate transferees.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "CETA Work Permit", path: PATH },
        ]}
        title={<>CETA Work Permit <span className="text-brand">for EU nationals</span></>}
        lede={
          <p>
            The <strong>CETA work permit</strong> lets eligible European Union nationals work in Canada without an
            LMIA, under the Canada-EU trade agreement. It covers contractual service suppliers, independent
            professionals and intra-corporate transferees. This guide explains who qualifies, the categories, how it
            works and how it can lead to permanent residence.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">EU national moving to Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                If you transfer within your company or work under a service contract, our team can prepare your CETA
                work-permit application, entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "All Canadian work permit routes" },
                { label: "LMIA work permits", href: "/work-permits/lmia", note: "The route CETA helps you skip" },
                { label: "Intra-company transfer", href: "/work-permits/intra-company-transfer", note: "Related LMIA-exempt route" },
                { label: "Move to Canada from Ireland", href: "/move-to-canada/from-ireland", note: "For Irish and EU applicants" },
                { label: "Express Entry", href: "/express-entry", note: "Where Canadian experience leads to PR" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox>
            A <strong>CETA work permit</strong> is an LMIA-exempt Canadian work permit for eligible European Union
            nationals, issued under the Comprehensive Economic and Trade Agreement. It covers contractual service
            suppliers, independent professionals and intra-corporate transferees, and because there is no
            labour-market test it can be faster than the standard <a href="/work-permits/lmia">LMIA route</a>.
          </AnswerBox>

          <KeyTakeaways
            summary="A CETA work permit is an LMIA-exempt Canadian work permit for eligible European Union nationals, issued under the Comprehensive Economic and Trade Agreement between Canada and the EU. The main categories are contractual service suppliers, independent professionals and intra-corporate transferees, each with its own eligibility test tied to covered sectors, qualifications and service contracts. Because there is no labour-market test, CETA can be faster and lighter than a standard LMIA for Europeans, including Irish nationals. The skilled Canadian experience gained on a CETA permit can later support permanent residence through the Canadian Experience Class or a Provincial Nominee Program."
            items={[
              <>A <strong>CETA work permit</strong> is <strong>LMIA-exempt</strong> and open to eligible European Union nationals.</>,
              <>The main categories are <strong>contractual service suppliers, independent professionals and intra-corporate transferees</strong>.</>,
              <>Eligibility turns on your <strong>nationality, sector, qualifications</strong> and, for service suppliers, a contract with a Canadian client.</>,
              <>No labour-market test makes it lighter than the <a href="/work-permits/lmia">LMIA route</a>; Irish and other EU nationals qualify.</>,
              <>Canadian experience on a CETA permit can lead to PR via the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a <a href="/pnp">PNP</a>.</>,
            ]}
          />

          <h2>What is a CETA work permit?</h2>
          <p>
            A <strong>CETA work permit</strong> is a work permit issued under the{" "}
            <strong>Comprehensive Economic and Trade Agreement (CETA)</strong>, the trade agreement between Canada and
            the European Union that has applied provisionally since 2017. It is <strong>LMIA-exempt</strong>: a
            Canadian employer or client engaging an eligible EU national under CETA does not need a{" "}
            <a href="/work-permits/lmia">Labour Market Impact Assessment</a> from Employment and Social Development
            Canada.</p>
          <p>The agreement itself provides for the temporary entry of certain service suppliers, professionals
            and corporate transferees, so the labour-market test is set aside. CETA permits sit within Canada&apos;s{" "}
            <a href="/work-permits/international-mobility-program">International Mobility Program</a> alongside other
            LMIA-exempt routes.
          </p>
          <p>
            The route is for <strong>nationals of EU member states</strong> that apply the agreement, and your role in
            Canada must fit one of CETA&apos;s defined categories. There are a few category types, each with its own
            eligibility test, so the first step is identifying which one matches your situation.
          </p>

          <Callout type="brand" title="CETA covers more than the obvious">
            Beyond the three main work categories, CETA also makes provision for{" "}
            <strong>short-term business visitors</strong>, investors and key personnel. The covered sectors and any
            country-specific reservations vary, so we confirm that your occupation and EU nationality fall within the
            current CETA provisions before relying on the route.
          </Callout>

          <h2>The main CETA categories</h2>
          <p>
            CETA does not create one generic permit; it provides several distinct routes for temporary entry.
            Identifying the right one is the most important early decision, because the tests, durations and documents
            differ.
          </p>
          <DataTable
            headers={["Category", "Who it is for", "Key requirement"]}
            rows={[
              ["Intra-corporate transferees", "Staff moving within the same enterprise to a Canadian office", "Senior, specialist or graduate-trainee role and qualifying prior employment"],
              ["Contractual service suppliers", "Employees of an EU company serving a Canadian client under contract", "Covered sector, relevant qualifications and a service contract"],
              ["Independent professionals", "Self-employed EU professionals serving a Canadian client", "Covered sector, qualifications and a service contract with a client"],
              ["Short-term business visitors", "EU nationals on defined short business activities", "Activities within the permitted business-visitor list"],
            ]}
            caption="The main CETA categories. Covered sectors, durations and reservations are set by the agreement and can change, so confirm current details on canada.ca."
          />

          <h2>Contractual service suppliers and independent professionals</h2>
          <p>
            These two categories are closely related and often confused. A <strong>contractual service supplier</strong>{" "}
            is an <em>employee</em> of an EU company that holds a service contract with a Canadian client, sent to Canada
            to deliver that service. An <strong>independent professional</strong> is essentially the same idea but{" "}
            <em>self-employed</em>: an EU professional contracting directly with a Canadian client.</p>
          <p>In both cases you
            typically need relevant qualifications, a defined period of prior experience, a contract that falls within a
            covered sector, and a stay limited to the contract within a set period. The distinction between employed and
            self-employed determines which set of rules applies, so we pin it down at the outset.
          </p>

          <h2>Intra-corporate transferees under CETA</h2>
          <p>
            If you work for a company with offices in both an EU member state and Canada, the{" "}
            <a href="/work-permits/intra-company-transfer">intra-corporate transferee</a> category lets you move to the
            Canadian office without an LMIA. CETA recognises three types: <strong>senior personnel</strong>,{" "}
            <strong>specialists</strong>, and <strong>graduate trainees</strong>.</p>
          <p>You generally need to have been
            employed by the enterprise for a qualifying period before the transfer, and the role in Canada must match
            the type you apply under. CETA gives EU nationals a treaty-based path to this transfer, and it sits
            alongside the broader intra-company transfer route under the International Mobility Program, which is open to
            other nationalities. We help you choose and document whichever path fits your company and role.
          </p>

          <Callout type="info" title="LMIA-exempt is not requirement-free">
            For employer-specific CETA permits, the Canadian employer usually still submits an{" "}
            <strong>offer of employment</strong> through the Employer Portal and pays the employer compliance fee. For
            independent professionals and contractual service suppliers, the service contract and your qualifications
            carry the case. The compliance fee changes from time to time, so confirm the current figure on canada.ca.
          </Callout>

          <h2>CETA and the Ireland and EU audience</h2>
          <p>
            CETA is particularly relevant to professionals and companies across the European Union, including{" "}
            <a href="/move-to-canada/from-ireland">Ireland</a>. Irish and other EU nationals can use CETA where they
            meet a category&apos;s requirements, and they often have strong parallel options: the{" "}
            <a href="/work-permits/international-experience-canada">International Experience Canada</a> Working Holiday
            for eligible youth, and <a href="/express-entry">Express Entry</a>, where qualifications and (for many)
            strong English support a competitive score. We weigh CETA against these routes to find the fastest, most
            durable path for your circumstances rather than defaulting to a single option.
          </p>

          <h2>CETA versus the LMIA route</h2>
          <p>
            Many EU professionals looking for a work permit in Canada compare CETA with a standard{" "}
            <a href="/work-permits/lmia">LMIA work permit</a>. Both lead to a work permit, but by very different paths.
          </p>
          <DataTable
            headers={["Feature", "CETA work permit", "LMIA work permit"]}
            rows={[
              ["Labour-market test", "None (LMIA-exempt)", "Employer must obtain a positive LMIA from ESDC"],
              ["Who can use it", "Eligible EU nationals only", "Open to most nationalities"],
              ["Speed", "Lighter; no advertising or ESDC assessment", "Slower; weeks of advertising and ESDC processing first"],
              ["Basis of the case", "Treaty category, qualifications and contract or transfer", "Employer recruitment and ESDC approval"],
              ["Best when", "You are an EU national in a covered category", "You are not CETA-eligible or your role is not covered"],
            ]}
            caption="CETA is faster and lighter for those who qualify; the LMIA route is the fallback when CETA does not apply."
          />

          <h2>Can a CETA work permit lead to permanent residence?</h2>
          <p>
            A CETA permit is temporary, but it frequently becomes a stepping stone to permanent residence. The skilled
            Canadian work experience you build can qualify you for the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> under{" "}
            <a href="/express-entry">Express Entry</a>, and many <a href="/pnp">Provincial Nominee Program</a> streams
            are built around skilled workers with Canadian experience or a job offer. We plan the work-permit stage with
            the eventual PR route in mind so the temporary step builds toward the permanent one.
          </p>

          <h2>How Wild Mountain Immigration helps with your CETA application</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms your EU nationality and category, checks
            that your sector and role are covered, and prepares a complete, well-evidenced work-permit application for
            IRCC. We represent clients entirely online, by video call and secure document sharing. We do not guarantee
            outcomes, and we are not affiliated with any government; what we do is make sure your{" "}
            <strong>CETA work permit</strong> application is accurate, properly documented and ready, whether you come as
            a corporate transferee, a contractual service supplier or an independent professional.
          </p>
          <Steps
            steps={[
              { title: "Confirm the category", desc: "We verify your EU nationality and identify whether you fit as an intra-corporate transferee, contractual service supplier or independent professional." },
              { title: "Build the package", desc: "We assemble the transfer evidence or service contract, your qualifications and the sector confirmation, with clear written fees." },
              { title: "Apply and plan for PR", desc: "We submit your application to IRCC, then map how your Canadian experience can feed into the Canadian Experience Class or a Provincial Nominee Program." },
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
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that connect to CETA.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Work permits" desc="The full picture of Canadian work permits, both LMIA-based and LMIA-exempt." href="/work-permits" />
            <FeatureCard icon={FileCheck2} title="LMIA work permits" desc="The standard route, and the labour-market test that CETA lets you skip." href="/work-permits/lmia" />
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="Move key staff to a Canadian office without an LMIA, open to more nationalities." href="/work-permits/intra-company-transfer" />
            <FeatureCard icon={Globe} title="Move to Canada from Ireland" desc="A full guide for Irish and EU citizens relocating, including CETA and PR routes." href="/move-to-canada/from-ireland" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Where Canadian work experience on a CETA permit can lead to permanent residence." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Many streams are built around skilled workers with Canadian experience or a job offer." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="EU national with a Canadian opportunity?"
        sub="Tell us about your transfer or contract and our licensed team will prepare your CETA work-permit application, with honest advice and clear fees."
      />
    </>
  );
}
