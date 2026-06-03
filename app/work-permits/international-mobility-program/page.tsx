import type { Metadata } from "next";
import { Globe, Building2, Briefcase, Rocket, FileCheck2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/international-mobility-program";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "International Mobility Program (IMP) Canada",
  titleAbsolute: "International Mobility Program (IMP) Canada",
  description:
    "The International Mobility Program (IMP) lets you work in Canada without an LMIA: intra-company transfers, CUSMA and CETA permits, and how to apply.",
  path: PATH,
  keywords: [
    "international mobility program",
    "IMP canada",
    "LMIA exempt work permit",
    "work permit without LMIA",
    "intra company transfer canada",
  ],
});

const faqs = [
  {
    q: "What is the International Mobility Program?",
    a: "The International Mobility Program (IMP) is the set of work-permit categories that do not require a Labour Market Impact Assessment (LMIA). Instead of proving a labour shortage, these permits are justified by a broader Canadian economic, cultural or competitive interest, or by an international agreement. Intra-company transfers and treaty-based permits under CUSMA and CETA are common examples.",
  },
  {
    q: "How is the IMP different from the Temporary Foreign Worker Program?",
    a: "The key difference is the LMIA. The Temporary Foreign Worker Program (TFWP) requires an employer to obtain a positive LMIA before you can get a work permit. The International Mobility Program is LMIA-exempt: the role qualifies under a specific exemption category, so there is no labour-market test. IMP permits are often faster to put in place because the LMIA step is removed.",
  },
  {
    q: "Do I still need a job offer for an IMP work permit?",
    a: "In most cases, yes. Many IMP categories, such as intra-company transfers and CUSMA professionals, require a qualifying job or assignment with a specific employer. Some open work permits sit under the IMP too, but the employer-specific IMP categories generally need an offer that fits the exemption. We confirm which category applies and what evidence it needs.",
  },
  {
    q: "What is an intra-company transfer?",
    a: "An intra-company transfer lets a multinational company move an existing employee to a Canadian branch, parent, subsidiary or affiliate. The worker usually must be in a senior managerial, executive or specialised-knowledge role and have worked for the company abroad for a qualifying period. Because it falls under the IMP, no LMIA is required, which makes it a fast route for established companies expanding into Canada.",
  },
  {
    q: "Do CUSMA and CETA work permits fall under the IMP?",
    a: "Yes. Work permits under the Canada-United States-Mexico Agreement (CUSMA) and the Canada-European Union Comprehensive Economic and Trade Agreement (CETA) are LMIA-exempt and processed under the International Mobility Program. They cover specific categories such as professionals, intra-company transferees and, for CETA, certain contractual service suppliers, each with its own eligibility rules.",
  },
  {
    q: "Can an IMP work permit lead to permanent residence?",
    a: "Yes. Like other work permits, an IMP permit is temporary, but the Canadian work experience you gain can support a permanent-residence application through Express Entry (the Canadian Experience Class) or a Provincial Nominee Program. We plan the IMP permit and the PR pathway together from the start.",
  },
  {
    q: "What is the difference between the IMP and the TFWP?",
    a: "The International Mobility Program and the Temporary Foreign Worker Program (TFWP) are the two halves of Canada's work-permit system, and the dividing line is the LMIA. Under the TFWP, the employer must first obtain a positive Labour Market Impact Assessment from ESDC, proving no Canadian or permanent resident was available, before you can apply. Under the IMP, the role is LMIA-exempt: it qualifies under an international agreement, a Canadian interest such as significant benefit, or a reciprocal-employment arrangement, so there is no labour-market test. Because the LMIA step is removed, the IMP route is usually faster and less burdensome for the employer.",
  },
  {
    q: "Do I need an LMIA under the International Mobility Program?",
    a: "No. By definition, every category under the International Mobility Program is exempt from the Labour Market Impact Assessment, so a work permit without an LMIA is the whole point of the IMP. That said, LMIA-exempt is not requirement-free. Each category relies on a specific LMIA exemption code, and for most employer-specific roles the Canadian employer must still submit an offer of employment through the IRCC Employer Portal and pay the employer compliance fee before you apply. If a role does not fit any exemption code, it falls back under the TFWP and an LMIA is needed instead.",
  },
  {
    q: "What is francophone mobility under the IMP?",
    a: "Francophone Mobility (LMIA exemption code C16) is an International Mobility Program stream that lets French-speaking workers take a job in an eligible occupation anywhere in Canada outside Quebec without an LMIA. It is designed to support francophone minority communities, and recent updates have broadened the occupations it covers while keeping a French-language ability threshold. As with other IMP categories, the employer submits an offer of employment through the IRCC Employer Portal and pays the compliance fee. Always confirm the current eligible occupations and language criteria on canada.ca.",
  },
  {
    q: "How long does an IMP work permit take?",
    a: "Processing times vary by category, by where you apply (online, on arrival at a port of entry, or from outside Canada) and by IRCC service standards at the time. Because the LMIA step is removed, the International Mobility Program is often quicker to arrange than an LMIA-based TFWP permit, and some treaty categories such as CUSMA can be processed at the port of entry for eligible nationals. We do not quote a fixed number, processing estimates move, so we plan around the current IRCC processing time for your specific category on canada.ca.",
  },
];

export default function ImpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "International Mobility Program (IMP): The 2026 Guide",
            description:
              "The International Mobility Program (IMP) lets you work in Canada without an LMIA: intra-company transfers, CUSMA and CETA permits, and how to apply.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "International Mobility Program (LMIA-exempt) support",
            description:
              "The International Mobility Program (IMP) lets you work in Canada without an LMIA: intra-company transfers, CUSMA and CETA permits, and how to apply.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        size="hub"
        eyebrow="Work in Canada"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "International Mobility Program", path: PATH },
        ]}
        title={<>International Mobility Program <span className="text-brand">(IMP)</span></>}
        lede={
          <p>
            The <strong>International Mobility Program (IMP)</strong> is the LMIA-exempt side of Canadian work permits.
            Instead of a labour-market test, these permits rest on a broader Canadian interest or an international
            agreement. They cover <strong>intra-company transfers</strong> and treaty-based permits under{" "}
            <strong>CUSMA</strong> and <strong>CETA</strong>, and are often a faster way to start working in Canada.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/eligibility", label: "Check what you qualify for" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Globe className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Transferring to Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We confirm whether an LMIA-exempt category fits and build your work-permit application.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "All Canadian work permit routes" },
                { label: "Intra-company transfers", href: "/work-permits/intra-company-transfer", note: "Move within your company" },
                { label: "CUSMA work permit", href: "/work-permits/cusma", note: "For US and Mexican citizens" },
                { label: "CETA work permit", href: "/work-permits/ceta", note: "For EU nationals" },
                { label: "Temporary Foreign Worker Program", href: "/work-permits/temporary-foreign-worker-program", note: "The LMIA-based route" },
                { label: "LMIA", href: "/work-permits/lmia", note: "The labour-market test explained" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The International Mobility Program (IMP) covers Canadian work permits that do not need a Labour Market Impact Assessment (LMIA). Rather than a labour-market test, each category is justified by a broader Canadian interest or an international trade agreement. The most common categories are intra-company transfers and treaty-based permits under CUSMA and CETA. Because the LMIA step is removed, IMP permits are often quicker to arrange, and the Canadian experience they build can lead to permanent residence."
            items={[
              <>IMP work permits are <strong>LMIA-exempt</strong>, no labour-market test is required.</>,
              <>Common categories include <a href="/work-permits/intra-company-transfer">intra-company transfers</a> and treaty permits.</>,
              <><a href="/work-permits/cusma">CUSMA</a> and <a href="/work-permits/ceta">CETA</a> permits are processed under the IMP.</>,
              <>Most employer-specific IMP categories still need a <strong>qualifying job offer</strong>.</>,
              <>IMP experience can lead to <strong>permanent residence</strong> via Express Entry or a PNP.</>,
            ]}
          />

          <h2>What is the International Mobility Program?</h2>
          <p>
            The International Mobility Program is the umbrella for every Canadian work permit that is exempt from the
            Labour Market Impact Assessment. The logic is simple. In these cases, letting the worker in serves a wider
            Canadian goal: economic competitiveness, reciprocal benefits for Canadians working abroad, or an obligation
            under a trade agreement. Because that wider interest is met, the labour-market test is waived. This makes the
            IMP the natural route for multinational companies, treaty nationals and certain specialised workers.
          </p>
          <p>
            Removing the LMIA does not remove the rules. Each IMP category has its own eligibility criteria and evidence
            requirements, and choosing the right one is where most of the work lies.
          </p>

          <h3>An LMIA-exempt work permit, explained</h3>
          <p>
            <strong>A work permit without an LMIA</strong> is the practical promise of the IMP. An{" "}
            <strong>LMIA-exempt work permit</strong> still ties to a specific exemption category, each carrying its own
            LMIA exemption code, but it skips the Labour Market Impact Assessment entirely. For most employer-specific
            categories the employer files the offer of employment online and receives an offer of employment number that
            you quote in your work-permit application.
          </p>

          <h2>The main LMIA-exempt categories and exemption codes</h2>
          <p>
            The IMP is broad, but most cases we see fall into a handful of categories, each tied to a specific{" "}
            <strong>LMIA exemption code</strong> that IRCC uses to identify the exemption. The table below sets out the
            most common routes, the code they rely on, and who they suit in plain English. Choosing the right code is
            where most of the work lies, because the evidence that supports each one is different.
          </p>
          <DataTable
            headers={["Category", "Exemption code", "Who it fits", "LMIA needed?"]}
            rows={[
              [<a key="cusma" href="/work-permits/cusma">CUSMA (USMCA)</a>, "T23 / T24", "Citizens of the US and Mexico working as eligible professionals or intra-company transferees under the trade agreement", "No"],
              [<a key="ceta" href="/work-permits/ceta">CETA</a>, "T23 / T22", "EU nationals as professionals, contractual service suppliers, independent professionals or intra-corporate transferees", "No"],
              [<a key="ict" href="/work-permits/intra-company-transfer">Intra-company transfer</a>, "C12", "Executives, senior managers and specialised-knowledge staff moving within a multinational to a Canadian branch, parent, subsidiary or affiliate", "No"],
              ["Significant benefit", "C10 / C11", "Workers, entrepreneurs and self-employed people whose work brings a clear social, cultural or economic benefit to Canada", "No"],
              ["Reciprocal employment", "C20 series", "Roles that create comparable opportunities for Canadians abroad, including some exchange and youth-mobility arrangements", "No"],
              ["Francophone Mobility", "C16", "French-speaking workers taking eligible jobs anywhere outside Quebec", "No"],
              ["Canadian interests, other", "C10 / C21+", "Other roles serving a broad Canadian interest, such as certain religious or charitable work and emergency repair personnel", "No"],
            ]}
            caption="Common International Mobility Program categories and their LMIA exemption codes (source: canada.ca, 2026). Codes and criteria change, verify the current exemption code and rules on IRCC for your case."
          />
          <Callout type="brand" title="No LMIA, but still an employer compliance step">
            Most employer-specific IMP categories require the employer to submit an offer of employment through the IRCC
            Employer Portal and pay the employer compliance fee before you apply. We make sure that step is done correctly
            so your work permit is not delayed.
          </Callout>

          <h3>Treaty-based permits: CUSMA and CETA</h3>
          <p>
            A large share of IMP cases run on Canada&apos;s trade agreements. Work permits under the{" "}
            <strong>Canada-United States-Mexico Agreement (CUSMA)</strong>, formerly NAFTA, let qualifying US and Mexican
            citizens work in Canada in named professional categories and as intra-company transferees without an LMIA, and
            eligible applicants can often be processed at a Canadian port of entry.</p>
          <p>The{" "}
            <strong>Canada-European Union Comprehensive Economic and Trade Agreement (CETA)</strong> opens similar
            LMIA-exempt routes for EU nationals, including professionals, intra-corporate transferees, contractual service
            suppliers and independent professionals. Each agreement has its own occupation lists and conditions, so the
            first step is matching your nationality and role to the correct treaty category and exemption code. See our{" "}
            <a href="/work-permits/cusma">CUSMA work permit</a> and <a href="/work-permits/ceta">CETA work permit</a>{" "}
            guides for the detail.
          </p>

          <h3>Canadian-interest categories: significant benefit and intra-company transfers</h3>
          <p>
            Where no treaty applies, many workers still qualify under a broad <strong>Canadian interest</strong>. The{" "}
            <strong>significant benefit</strong> category (codes C10 and C11) covers workers, entrepreneurs and
            self-employed people whose presence delivers a clear social, cultural or economic benefit that outweighs the
            usual labour-market test.</p>
          <p>The <a href="/work-permits/intra-company-transfer">intra-company transfer</a>{" "}
            (code C12) is the most heavily used Canadian-interest route: it lets a multinational move an existing
            executive, senior manager or specialised-knowledge employee to a Canadian office, provided the worker has the
            qualifying role and a qualifying period of prior employment with the company abroad. Both are
            employer-specific and both still require the employer compliance steps described below.
          </p>

          <h3>Reciprocal employment and francophone mobility</h3>
          <p>
            <strong>Reciprocal employment</strong> (the C20 series) rests on a simple idea: if a role here creates
            comparable opportunities for Canadians working abroad, the labour-market test can be waived.</p>
          <p>Several exchange
            and youth-mobility arrangements, including parts of{" "}
            <a href="/work-permits/international-experience-canada">International Experience Canada</a>, sit on this logic.{" "}
            <strong><a href="/work-permits/francophone-mobility">Francophone Mobility</a></strong> (code C16) is a
            distinct stream that lets French-speaking workers take eligible jobs anywhere in Canada outside Quebec
            without an LMIA, supporting francophone minority communities.
            Because the eligible occupations and language thresholds for francophone mobility are reviewed periodically,
            we confirm the current criteria on canada.ca for each case.
          </p>

          <h2>How an IMP work permit works</h2>
          <p>
            The exact steps depend on the category, but an employer-specific IMP permit generally follows this shape.
          </p>
          <Steps
            steps={[
              { title: "Confirm the exemption", desc: "We identify which LMIA-exempt category fits your role, employer and nationality, and confirm the LMIA exemption code it relies on." },
              { title: "Employer submits the offer", desc: "The employer files the offer of employment in the IRCC Employer Portal, pays the compliance fee and receives the offer of employment number." },
              { title: "Apply for your work permit", desc: "You apply for the work permit online, on arrival, or at a port of entry depending on the category." },
              { title: "Plan your PR pathway", desc: "We map how the Canadian experience you build leads to permanent residence." },
            ]}
          />

          <h2>How the employer&apos;s side works</h2>
          <p>
            Even though the International Mobility Program removes the LMIA, employer-specific categories still place clear
            obligations on the Canadian employer. The difference is that, instead of an ESDC labour-market test, the
            employer interacts directly with IRCC before the worker applies. Three things matter most: the offer of
            employment, the employer compliance fee, and the conditions that continue to apply after the permit is issued.
          </p>
          <ul>
            <li><strong>The offer of employment via the IRCC Employer Portal.</strong> For most LMIA-exempt employer-specific roles, the employer submits an offer of employment online through the IRCC Employer Portal. This is not an LMIA, it is an offer-of-employment submission that flags the relevant LMIA exemption code and the job details.</li>
            <li><strong>The offer of employment number.</strong> Once the offer is submitted and the fee is paid, the system generates an offer of employment number (it begins with an &quot;A&quot;). You quote this number on your own work-permit application, which links your application to the employer&apos;s submission.</li>
            <li><strong>The employer compliance fee.</strong> The employer pays a one-time employer compliance fee per offer for most IMP categories. Some categories, such as certain reciprocal and not-for-profit arrangements, are fee-exempt. The amount changes periodically, so confirm the current employer compliance fee on canada.ca.</li>
            <li><strong>Conditions still apply.</strong> No LMIA does not mean no rules. Employers must keep records, pay the wage stated in the offer, and comply with program conditions. IRCC conducts compliance inspections, and employers who do not meet their obligations can face penalties.</li>
          </ul>
          <Callout type="warning" title="Open work permits can skip the employer step">
            A few IMP categories are open work permits, for example some reciprocal and International Experience Canada
            permits, where there is no named employer and so no Employer Portal offer or compliance fee. Most
            employer-specific categories, including intra-company transfers and CUSMA professionals, do require the offer
            of employment number first. We confirm which path applies to you.
          </Callout>

          <h2>IMP or TFWP: which side are you on?</h2>
          <p>
            Canada&apos;s work-permit system has two halves. The International Mobility Program is the LMIA-exempt side;
            the <a href="/work-permits/temporary-foreign-worker-program">Temporary Foreign Worker Program (TFWP)</a> is
            the LMIA-based side. The first question in any case is which one applies, because it changes who does what,
            how long it takes, and what evidence is needed.
          </p>
          <DataTable
            headers={["Feature", "International Mobility Program (IMP)", "Temporary Foreign Worker Program (TFWP)"]}
            rows={[
              ["LMIA required?", "No, the role is LMIA-exempt", "Yes, a positive or neutral LMIA is needed first"],
              ["Justification", "International agreement, Canadian interest or reciprocal employment", "A proven labour shortage with no Canadian available"],
              ["Employer's first step", "Offer of employment via the IRCC Employer Portal", "LMIA application to ESDC, with advertising and recruitment"],
              ["Employer pays", "Employer compliance fee (most categories)", "LMIA processing fee per position (most categories)"],
              ["Typical speed", "Often faster, the LMIA step is removed", "Slower, the LMIA must be obtained first"],
            ]}
            caption="How the IMP and TFWP compare (source: canada.ca, 2026). Both sides change over time, confirm current rules and fees on IRCC."
          />
          <p>
            If your role fits an exemption code, the IMP is almost always the faster, simpler route. If it does not fit
            any exemption, an <a href="/work-permits/lmia">LMIA</a> under the TFWP is the path instead. We check the
            exemption codes first, before assuming an LMIA is needed, because an exempt route saves both the employer and
            the worker time and cost.
          </p>

          <h2>From an IMP permit to permanent residence</h2>
          <p>
            An International Mobility Program work permit gets you working in Canada quickly, and that experience is
            valuable beyond the job itself. Skilled Canadian work experience can qualify you for the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> under{" "}
            <a href="/express-entry">Express Entry</a>, or for a Provincial Nominee Program such as the{" "}
            <a href="/alberta-immigration">Alberta AAIP</a>. We plan the IMP permit and the permanent-residence route
            together. To see which pathways may fit you, try our free{" "}
            <a href="/tools/eligibility">eligibility checker</a>.
          </p>

          <h2>How Wild Mountain Immigration helps with the International Mobility Program</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team treats the International Mobility Program as a system
            of exemptions to be matched, not a single form. We start by confirming whether your role is genuinely
            LMIA-exempt and, if so, which LMIA exemption code it relies on, whether that is a CUSMA or CETA treaty
            category, an intra-company transfer, significant benefit, reciprocal employment or francophone mobility.</p>
          <p>We
            then coordinate the employer&apos;s offer of employment through the IRCC Employer Portal, confirm the
            employer compliance fee is paid, and prepare your work-permit application around the offer of employment
            number. We represent clients entirely online, by video call and secure document sharing.
          </p>
          <p>
            Whether you need a work permit without an LMIA through the International Mobility Program or a route under the{" "}
            <a href="/work-permits/temporary-foreign-worker-program">TFWP</a>, the outcome always rests with IRCC, never
            with us. What we do is read the exemption codes correctly, keep the employer compliance steps on track, and
            line up the permanent-residence pathway so the temporary permit builds toward something lasting. Explore all{" "}
            <a href="/work-permits">Canadian work permits</a> or get an honest read on your case through our{" "}
            <a href="/tools/eligibility">eligibility checker</a>.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Routes under the International Mobility Program</h2>
          <p className="mt-3 text-ink-soft">The IMP is the umbrella. Explore the LMIA-exempt categories and how they connect.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="Move executives, managers and specialised-knowledge staff to a Canadian office under code C12, no LMIA." href="/work-permits/intra-company-transfer" />
            <FeatureCard icon={Globe} title="CUSMA work permit" desc="LMIA-exempt routes for eligible US and Mexican citizens under the trade agreement." href="/work-permits/cusma" />
            <FeatureCard icon={Globe} title="CETA work permit" desc="LMIA-exempt categories for EU nationals, including transfers and contractual service suppliers." href="/work-permits/ceta" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="The full picture of Canadian work permits, both LMIA-exempt and LMIA-based." href="/work-permits" />
            <FeatureCard icon={FileCheck2} title="Temporary Foreign Worker Program" desc="The LMIA-based side of the system, for roles that do not fit an exemption code." href="/work-permits/temporary-foreign-worker-program" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Where the Canadian experience from an IMP permit can build toward permanent residence." href="/express-entry" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Work in Canada without an LMIA"
        sub="Tell us about your role and a licensed RCIC will confirm which LMIA-exempt category fits and how to apply."
      />
    </>
  );
}
