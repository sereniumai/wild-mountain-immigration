import type { Metadata } from "next";
import { Heart, ShieldCheck, FileText } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/super-visa";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Super Visa Canada 2026",
  titleAbsolute: "Super Visa Canada 2026: Requirements & How to Apply",
  description:
    "Super Visa Canada 2026: requirements, the LICO income test, medical insurance and how to apply for parents and grandparents. Reviewed by a licensed RCIC.",
  path: PATH,
  keywords: [
    "super visa canada",
    "super visa canada 2026",
    "super visa requirements 2026",
    "super visa income requirement",
    "super visa insurance",
    "parents and grandparents super visa",
  ],
});

const faqs = [
  {
    q: "What is the income requirement for a Super Visa?",
    a: "The host in Canada must meet the Low Income Cut-Off (LICO) for their family size, which includes everyone in the household plus the parents or grandparents being invited. As current 2026 guidance, the LICO for a family of two is roughly CAD $39,000, and it rises with household size. As of March 31, 2026, IRCC eased how income is counted. A host can now use either of the two prior tax years, and in some cases a visiting parent's own income may be included. Always confirm the current LICO figure on canada.ca before you apply, as the table is updated each year.",
  },
  {
    q: "How long can I stay on a Super Visa?",
    a: "A Super Visa lets parents and grandparents stay for up to 5 years per entry without renewing their status, far longer than the standard 6 months on a visitor visa. It is a multiple-entry visa valid for up to 10 years, so you can come and go during that period. You may also apply to extend a single visit by up to 2 more years from inside Canada.",
  },
  {
    q: "Is the PGP open in 2026?",
    a: "No. IRCC has confirmed there is no new Parents and Grandparents Program (PGP) intake in 2026, the 2025 round invited only from the existing 2020 interest pool. Because there is no confirmed 2026 PGP intake, the Super Visa is the practical way to reunite with parents and grandparents for long stays this year. The Super Visa is a long-stay visitor route, not permanent residence.",
  },
  {
    q: "What medical insurance do I need for a Super Visa?",
    a: "You must show proof of medical insurance that is valid for at least 1 year from the date of entry, covers health care, hospitalisation and repatriation, and provides minimum coverage of CAD $100,000. Since January 2025, policies from approved foreign insurers are accepted in addition to Canadian insurers. Coverage must be paid in full or by instalments, a quote alone is not enough.",
  },
  {
    q: "Who can apply for a Super Visa?",
    a: "The Super Visa is for the parents and grandparents of Canadian citizens or permanent residents. The applicant must be the parent or grandparent of the host; dependants such as children cannot be included on the same application. The host must sign a letter of invitation, prove they meet the LICO income threshold, and the applicant must buy qualifying medical insurance and pass an immigration medical exam.",
  },
  {
    q: "How is a Super Visa different from a regular visitor visa?",
    a: "A standard visitor visa or eTA usually allows a stay of up to 6 months per entry and has no insurance or income requirement. A Super Visa is purpose-built for parents and grandparents: it allows stays of up to 5 years per entry, requires the host to meet LICO and the applicant to hold $100,000 medical insurance, but in return offers far longer, uninterrupted visits.",
  },
  {
    q: "How long does a Super Visa take to process?",
    a: "Processing times vary by visa office and change frequently. Many applications are decided within a few months, but times depend on your country of residence, biometrics and whether a medical exam or extra documents are requested. Check the live processing-time tool on canada.ca for the current estimate for your country.",
  },
  {
    q: "Does a Super Visa lead to permanent residence?",
    a: "No. A Super Visa is a long-stay visitor status, it does not grant permanent residence or the right to work. If your goal is for a parent or grandparent to settle permanently, the sponsorship route is the Parents and Grandparents Program, which has no confirmed 2026 intake. A consultation can help you weigh a Super Visa now against waiting for a future PGP round.",
  },
];

export default function SuperVisaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Super Visa Canada 2026, Complete RCIC Guide",
            description:
              "Super Visa Canada 2026: requirements, the LICO income test, medical insurance and how to apply for parents and grandparents. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-16",
          }),
          serviceLd({
            name: "Super Visa application support",
            description:
              "Super Visa Canada 2026: requirements, the LICO income test, medical insurance and how to apply for parents and grandparents. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Super Visa immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Super Visa", path: PATH },
        ]}
        title={<>Super Visa Canada: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            The <strong>Super Visa Canada</strong> route lets parents and grandparents of Canadian citizens and
            permanent residents visit for up to 5 years per entry, far longer than a standard visitor visa, provided
            the host meets an income threshold and the visitor holds qualifying medical insurance.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship", label: "All family sponsorship routes" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Heart className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Reunite with your parents</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Not sure if a Super Visa or sponsorship fits your family? Get an honest read from a licensed RCIC.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Spousal sponsorship", href: "/family-sponsorship/spousal-sponsorship", note: "Sponsor a spouse or partner" },
                { label: "Minimum Necessary Income", href: "/family-sponsorship/minimum-necessary-income", note: "The income test for PGP sponsorship" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "Permanent residence routes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Super Visa Canada route is a long-stay temporary resident visa for the parents and grandparents of Canadian citizens or permanent residents. It allows stays of up to 5 years per entry and is multiple-entry, valid for up to 10 years. The host must meet the LICO income requirement for their household size, and the visitor needs medical insurance of at least 100,000 dollars valid for one year. It is visitor status, not permanent residence."
            items={[
              <>The <strong>Super Visa</strong> is for the parents and grandparents of Canadian citizens or permanent residents.</>,
              <>It allows stays of <strong>up to 5 years per entry</strong> and is valid for up to 10 years (multiple entry).</>,
              <>The host must meet the <strong>LICO income requirement</strong> for their household size.</>,
              <>The visitor needs <strong>medical insurance of at least $100,000</strong>, valid for 1 year.</>,
              <>There is <strong>no confirmed PGP intake in 2026</strong>, so the Super Visa is the main long-stay route this year.</>,
            ]}
          />

          <h2>What is the Super Visa?</h2>
          <p>
            The <strong>Super Visa Canada 2026</strong> programme is a long-stay temporary resident visa created
            specifically for <strong>parents and grandparents</strong> of Canadian citizens and permanent residents.
            Unlike an ordinary visitor visa, it is a multiple-entry visa valid for up to 10 years that lets your
            parent or grandparent stay for <strong>up to 5 years on each entry</strong> without having to renew their
            status. According to IRCC, the Super Visa is intended for extended family reunification rather than
            immigration (source: canada.ca, parent and grandparent super visa, 2026).
          </p>
          <p>
            It is important to be clear about what the Super Visa is not. It is a <em>visitor</em> status, it does
            not grant permanent residence, the right to work, or access to most public benefits. For families who want
            a parent to settle permanently, the route is the Parents and Grandparents Program (PGP); we explain below
            why the Super Visa matters so much in 2026.
          </p>

          <h2>Super Visa eligibility: who can apply</h2>
          <p>
            To qualify, the applicant must be the <strong>parent or grandparent</strong> of a Canadian citizen or
            permanent resident. Dependants such as children or other relatives cannot be added to the same Super Visa
            application. Beyond the relationship, eligibility rests on three pillars that we work through carefully with
            every client:
          </p>
          <ul>
            <li>The <strong>host in Canada</strong> must sign a letter of invitation and prove they meet the minimum income (LICO) threshold.</li>
            <li>The <strong>applicant</strong> must buy qualifying medical insurance and pass an immigration medical exam.</li>
            <li>The applicant must satisfy a visa officer that they will leave Canada at the end of their authorised stay, and may need to provide biometrics.</li>
          </ul>
          <Callout type="brand" title="Citizen or permanent-resident host required">
            The host who invites the parent or grandparent must themselves be a Canadian citizen or permanent
            resident. A temporary resident, for example someone on a work or study permit, cannot host a Super Visa.
          </Callout>

          <h2>The Super Visa income requirement (LICO)</h2>
          <p>
            The host must show they can support the visiting parent or grandparent by meeting the{" "}
            <strong>Low Income Cut-Off (LICO)</strong> for their family size. Family size counts everyone the host is
            already responsible for <em>plus</em> the parents or grandparents being invited. The figures below
            illustrate the scale of the <strong>super visa income requirement</strong>, one of the core{" "}
            <strong>Super Visa requirements 2026</strong> applicants must satisfy. These are current 2026 guidance only:
            the LICO table is revised each year, so always confirm the live numbers on canada.ca before you apply.
          </p>
          <DataTable
            headers={["Super Visa requirement", "Detail (current 2026 guidance)"]}
            rows={[
              ["Minimum income, family of 2", "~CAD $39,000 (LICO)"],
              ["Minimum income, family of 3", "~CAD $48,000 (LICO)"],
              ["Minimum income, family of 4", "~CAD $58,000 (LICO)"],
              ["Minimum income, family of 5", "~CAD $66,000 (LICO)"],
              ["Medical insurance, minimum coverage", "CAD $100,000, valid 1 year"],
              ["Length of stay", "Up to 5 years per entry"],
              ["Visa validity", "Multiple entry, up to 10 years"],
            ]}
            caption="Illustrative Super Visa requirements (IRCC, current 2026 guidance). LICO figures are updated yearly, verify the current numbers on canada.ca."
          />
          <Callout type="info" title="2026 update: income calculation eased">
            As of <strong>March 31, 2026</strong>, IRCC eased how host income is counted. A host may now rely on{" "}
            <strong>either of the two previous tax years</strong>, and in some situations the visiting parent&apos;s own
            income can be added to help meet LICO. This makes the income test easier for many families than it used to be.
          </Callout>

          <h2>Mandatory medical insurance</h2>
          <p>
            Every Super Visa applicant must hold private <strong>medical insurance</strong> that covers their stay. To
            be accepted, the policy must be <strong>valid for at least 1 year</strong> from the date of entry, cover
            health care, hospitalisation and repatriation, and provide minimum coverage of{" "}
            <strong>CAD $100,000</strong>. The insurance must be paid in full or set up on an instalment plan, a quote
            on its own is not accepted.
          </p>
          <p>
            A welcome change took effect in <strong>January 2025</strong>: policies from{" "}
            <strong>approved foreign (non-Canadian) insurers</strong> are now accepted, not just Canadian insurers.
            This often gives families more affordable options. We help confirm a policy meets every IRCC condition
            before it is submitted, because an insufficient policy is a common, avoidable reason for refusal.
          </p>

          <h2>How long the Super Visa lets you stay</h2>
          <p>
            This is the heart of the Super Visa&apos;s appeal. A standard visitor is usually admitted for up to{" "}
            <strong>6 months</strong>; a Super Visa holder can stay for <strong>up to 5 years per entry</strong>. The
            visa itself is valid for up to 10 years (or until the passport expires), and because it is multiple-entry,
            a parent or grandparent can leave and return throughout that period. If they wish to stay longer than five
            years on a single visit, they may apply from within Canada to extend by up to <strong>2 more years</strong>.
          </p>

          <h2>Super Visa vs visitor visa vs PGP</h2>
          <p>
            Families often ask which route is right for them. The short answer: a visitor visa suits brief trips, the
            Super Visa suits long visits, and the PGP is the only path to permanent residence, but it has no confirmed
            2026 intake.
          </p>
          <DataTable
            headers={["Feature", "Visitor visa / eTA", "Super Visa", "PGP (sponsorship)"]}
            rows={[
              ["Typical stay", "Up to 6 months", "Up to 5 years per entry", "Permanent residence"],
              ["Who it's for", "Any eligible visitor", "Parents & grandparents", "Parents & grandparents"],
              ["Insurance required", "No", "Yes, $100,000, 1 year", "No"],
              ["Host income test", "No", "Yes, LICO", "Yes, LICO + 30%"],
              ["Open in 2026?", "Yes", "Yes", "No new intake"],
            ]}
            caption="How the Super Visa compares with a visitor visa and the Parents and Grandparents Program (2026)."
          />
          <Callout type="warning" title="Is the PGP open in 2026?">
            No. IRCC has <strong>not opened a new PGP intake in 2026</strong>, the 2025 round invited only from the
            existing 2020 interest-to-sponsor pool. With no confirmed 2026 PGP intake, the Super Visa is the practical
            way to reunite with parents and grandparents for long stays this year. Learn more about{" "}
            <a href="/family-sponsorship">family sponsorship options</a>.
          </Callout>

          <h2>How to apply for a Super Visa</h2>
          <Steps
            steps={[
              { title: "Confirm eligibility & relationship", desc: "Check the host is a citizen or PR and the applicant is their parent or grandparent. Gather proof of the relationship." },
              { title: "Meet the LICO income test", desc: "The host prepares proof of income (Notices of Assessment, employment letters) showing they meet LICO for the household size." },
              { title: "Buy qualifying medical insurance", desc: "Purchase $100,000 coverage valid for at least one year, covering health care, hospitalisation and repatriation." },
              { title: "Write the invitation letter", desc: "The host signs a letter of invitation confirming support and accommodation for the visiting parent or grandparent." },
              { title: "Submit the application & biometrics", desc: "File the Super Visa application, pay the fees, give biometrics and complete the immigration medical exam when requested." },
              { title: "Receive the decision", desc: "If approved, the parent or grandparent travels to Canada and can stay for up to five years per entry." },
            ]}
          />
          <p>
            Small errors, an insurance policy that falls short of the rules, income proof that misses LICO, or a weak
            invitation letter, are the usual reasons a Super Visa is refused. Working under a licensed RCIC (CICC
            #R706497), our team reviews every document before submission and represents you with IRCC.
          </p>

          <h2>Super Visa processing times</h2>
          <p>
            Processing times for the Super Visa change often and vary by the visa office handling your country of
            residence. Many applications are decided within a few months, but biometrics, a medical exam or a request
            for extra documents can extend that timeline. Because these estimates move regularly, always check the
            live processing-time tool on canada.ca for the current figure for your country, and build in a buffer when
            planning travel.
          </p>
          <Callout type="brand" title="How Wild Mountain Immigration helps">
            We confirm your host income meets LICO, vet the insurance policy from a Canadian or approved foreign
            insurer against every IRCC condition, draft a strong invitation letter and manage the full Super Visa
            Canada application from start to decision. Prefer to do the legwork yourself? Our lower-cost{" "}
            <a href="/contact">File Review</a> gives your own application an expert check before you submit.
          </Callout>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Other ways to reunite your family</h2>
          <p className="mt-3 text-ink-soft">The Super Visa is one route. We help you find the one that fits your family.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Sponsor a spouse, partner, child or other relative for permanent residence in Canada." href="/family-sponsorship" />
            <FeatureCard icon={ShieldCheck} title="Spousal sponsorship" desc="Bring your spouse or common-law partner to Canada as a permanent resident, our flagship service." href="/family-sponsorship/spousal-sponsorship" />
            <FeatureCard icon={FileText} title="Get started" desc="Planning a visit or not sure which route fits? Get an honest assessment from a licensed RCIC." href="/contact" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Bring your parents or grandparents to Canada"
        sub="Get started with a licensed RCIC for honest guidance on the Super Visa, LICO and insurance, no promises, just clear next steps."
      />
    </>
  );
}
