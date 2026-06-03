import type { Metadata } from "next";
import { Building2, Rocket, Map, FileCheck2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/intra-company-transfer";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Intra-Company Transfer Canada 2026, ICT Guide",
  titleAbsolute: "Intra-Company Transfer to Canada 2026 (ICT)",
  description:
    "Intra-company transfer Canada: how the LMIA-exempt ICT work permit moves executives, managers and specialised staff to a Canadian branch. Talk to an RCIC.",
  path: PATH,
  keywords: [
    "intra-company transfer Canada",
    "ICT work permit",
    "LMIA-exempt transfer",
    "specialised knowledge transfer",
    "open a Canadian branch",
  ],
});

const faqs = [
  {
    q: "Is an intra-company transfer LMIA-exempt?",
    a: "Yes. An intra-company transfer (ICT) is LMIA-exempt, it falls under the International Mobility Program rather than the Temporary Foreign Worker Program, so the Canadian employer does not need a Labour Market Impact Assessment. However, LMIA-exempt does not mean work-permit-exempt: the Canadian entity still has to submit an offer of employment through the Employer Portal and pay the employer compliance fee before the worker applies. The exemption reflects the broader economic benefit of letting multinationals move key staff into Canada.",
  },
  {
    q: "How long does an ICT work permit last?",
    a: "An initial intra-company transfer permit is usually issued for up to one to three years, and for a brand-new Canadian office it is typically limited to one year. With extensions, executives and senior managers can stay for a maximum of seven years, while specialised-knowledge workers are capped at five years. After reaching the maximum, the worker generally must spend time working outside Canada for the company before becoming eligible again. We track these limits so you plan a transition to permanent residence well before they bite.",
  },
  {
    q: "Who qualifies for an intra-company transfer to Canada?",
    a: "To qualify, you must have worked continuously for the multinational for at least one year in the last three years, in a role that is an executive, senior managerial or specialised-knowledge position, and you must be transferring into a comparable role at a Canadian parent, branch, subsidiary or affiliate. There must be a genuine qualifying relationship between the foreign and Canadian companies, and both entities must be actively doing business. We confirm all three pillars before you apply.",
  },
  {
    q: "What counts as specialised knowledge for an ICT?",
    a: "Specialised knowledge means proprietary knowledge of the company's products, services, research, techniques or management that is unusual and different from that generally found in the industry, combined with advanced expertise gained through significant experience with the organisation. IRCC scrutinises specialised-knowledge transfers closely and generally expects the role to be paid at the prevailing wage. Simply being a skilled or senior employee is not enough, the knowledge must be genuinely specialised and difficult to find in the Canadian labour market.",
  },
  {
    q: "Can I use an intra-company transfer to open a Canadian branch?",
    a: "Yes, the ICT category includes start-up or new-office transfers, designed to let a multinational send an executive, senior manager or specialised-knowledge worker to establish a Canadian parent, branch, subsidiary or affiliate. For a new office, IRCC expects evidence of secured physical premises, a realistic business plan, the financial ability to start operations and pay staff, and proof the foreign company will continue operating. The first permit is usually limited to one year while the Canadian office gets established.",
  },
  {
    q: "Does an intra-company transfer lead to permanent residence?",
    a: "It can. An ICT is a temporary work permit, but the skilled Canadian work experience it builds can help you qualify for permanent residence, most commonly through the Express Entry Canadian Experience Class, or through a Provincial Nominee Program. Executives and senior managers may also have other PR avenues. The ICT does not grant PR by itself, and we never guarantee an outcome; what we do is plan the transfer so it builds toward the permanent residence you want.",
  },
  {
    q: "What is the difference between a parent, branch, subsidiary and affiliate?",
    a: "These describe the qualifying relationship the ICT requires between the foreign and Canadian companies. A parent controls another entity; a branch is an operating division of the same company in another country; a subsidiary is an entity the parent controls through majority ownership; and an affiliate is one of two entities owned and controlled by the same parent or group. The transfer must be between two such related entities, a mere business partner, client or franchise is generally not enough.",
  },
  {
    q: "Do I need a job offer or LMIA for an intra-company transfer?",
    a: "You do not need an LMIA, and you do not need a separate job offer in the TFWP sense. Instead, the Canadian entity submits an offer of employment for you through the IRCC Employer Portal and pays the compliance fee, confirming the qualifying relationship and your transferring role. Your eligibility rests on your year of qualifying employment, your position category and the corporate relationship, not on a labour-market test.",
  },
];

export default function IntraCompanyTransferPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Intra-Company Transfer to Canada (ICT) 2026, Complete RCIC Guide",
            description:
              "Intra-company transfer Canada: how the LMIA-exempt ICT work permit moves executives, managers and specialised-knowledge staff to a Canadian branch.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Intra-company transfer (ICT) work permit support",
            description:
              "Intra-company transfer Canada: how the LMIA-exempt ICT work permit moves executives, managers and specialised-knowledge staff to a Canadian branch.",
            path: PATH,
            serviceType: "Intra-company transfer immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work Permits"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Intra-Company Transfer", path: PATH },
        ]}
        title={<>Intra-Company Transfer to Canada: <span className="text-brand">move key staff to your Canadian office</span></>}
        lede={
          <p>
            An <strong>intra-company transfer to Canada</strong> is an LMIA-exempt work permit. It lets a multinational
            move an executive, senior manager or specialised-knowledge employee to a Canadian parent, branch, subsidiary
            or affiliate. This 2026 guide covers the three ICT categories, eligibility and how to apply.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/contact", label: "Get started" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Building2 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Expanding into Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The qualifying relationship makes or breaks an ICT. Get started and we&apos;ll confirm your
                transfer fits before you file.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canada work permits", href: "/work-permits", note: "The full 2026 overview" },
                { label: "Open work permits", href: "/work-permits/open-work-permit", note: "How open permits work" },
                { label: "Express Entry", href: "/express-entry", note: "Turn the transfer into PR" },
                { label: "Get started", href: "/contact", note: "Get an honest read on your transfer" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="An intra-company transfer to Canada (ICT) is an LMIA-exempt work permit under the International Mobility Program. It lets a multinational move a qualifying employee into its Canadian parent, branch, subsidiary or affiliate without a labour-market test. The ICT covers three categories: executives, senior managers, and workers with specialised knowledge. The employee usually needs about one year of recent employment with the company abroad, and specialised-knowledge applications are scrutinised closely."
            items={[
              <>An <strong>intra-company transfer (ICT)</strong> is an <strong>LMIA-exempt</strong> work permit under the International Mobility Program.</>,
              <>It moves staff in <strong>three categories</strong>: <strong>executives</strong>, <strong>senior managers</strong> and <strong>specialised-knowledge</strong> workers.</>,
              <>You need <strong>≥1 year continuous employment</strong> with the company in the last 3 years and a <strong>qualifying corporate relationship</strong>.</>,
              <>A <strong>new-office (start-up) ICT</strong> lets a multinational <strong>open a Canadian branch</strong>, usually a one-year first permit.</>,
              <>Maximum stays: <strong>seven years</strong> (executives/managers) or <strong>five years</strong> (specialised knowledge); a route toward <strong>permanent residence</strong>.</>,
            ]}
          />

          <h2>What is an intra-company transfer?</h2>
          <p>
            An intra-company transfer (ICT) is an LMIA-exempt work permit that lets a multinational company move a
            qualifying employee from a foreign office into a related Canadian entity, a parent, branch, subsidiary or
            affiliate.</p>
          <p>It sits under the <a href="/work-permits">International Mobility Program (IMP)</a>, which covers
            permits that do <em>not</em> require a Labour Market Impact Assessment because they serve a broader Canadian
            economic interest (source: canada.ca, 2026). For global businesses, the ICT is one of the most practical ways
            to bring leadership and specialised talent into a Canadian operation without the delay of the LMIA process.
          </p>
          <p>
            Crucially, LMIA-exempt does <em>not</em> mean work-permit-exempt. The Canadian entity still submits an offer
            of employment through the IRCC Employer Portal and pays the employer compliance fee before the worker
            applies. What the ICT removes is the labour-market test. There is no need to prove that no Canadian was
            available, because the worker is being transferred within the same corporate group, not hired off the open
            market.
          </p>

          <h2>The three intra-company transfer categories</h2>
          <p>
            Every ICT falls into one of three categories, defined by the role the employee holds and will continue to
            hold in Canada. The category matters: it sets the evidence IRCC expects and the maximum length of stay. The
            table below sets out the three categories, who each is for, and the requirements that go with them.
          </p>
          <DataTable
            headers={["ICT category", "Who it's for", "Key requirement & max stay"]}
            rows={[
              ["Executives", "Senior leaders who direct the management of the company or a major component of it", "Primarily directs the organisation; minimal supervision. Up to 7 years."],
              ["Senior managers", "Managers who manage the organisation, a department, subdivision or essential function", "Supervises professional/managerial staff or manages an essential function. Up to 7 years."],
              ["Specialised knowledge", "Staff with proprietary, advanced knowledge of the company's products, processes or management", "Knowledge unusual in the industry + advanced expertise; prevailing wage expected. Up to 5 years."],
            ]}
            caption="The three intra-company transfer categories (source: canada.ca, 2026). Specialised-knowledge transfers face the closest scrutiny, verify current rules on IRCC before applying."
          />
          <Callout type="warning" title="Specialised knowledge is scrutinised closely">
            Being a skilled or senior employee is not enough. IRCC expects genuinely <strong>specialised knowledge</strong>:
            proprietary, unusual in the industry, and built through significant experience with the company. It also
            generally expects the Canadian role to be paid at the <strong>prevailing wage</strong>. This is the ICT
            category refused most often, so the evidence has to be precise.
          </Callout>

          <h2>Who is eligible for an intra-company transfer?</h2>
          <p>
            ICT eligibility rests on three pillars that must all be true at once: <strong>the employee</strong>,{" "}
            <strong>the role</strong>, and <strong>the relationship between the companies</strong>. In broad terms, you
            may qualify if you have been <strong>continuously employed by the company for at least one year in the past
            three years</strong>, you held and will hold a <strong>qualifying executive, managerial or
            specialised-knowledge role</strong>, and there is a genuine <strong>qualifying relationship</strong> between
            the foreign and Canadian entities that are both actively doing business.
          </p>
          <p>
            The table below sets out the core ICT requirements. Each must be met, and the most common stumbling block is
            the corporate relationship: a client, supplier, business partner or unrelated franchise generally does not
            qualify, even when the companies work together closely.
          </p>
          <DataTable
            headers={["ICT requirement", "What it means"]}
            rows={[
              ["≥1 year continuous employment", "You have worked full-time and continuously for the company for at least one year within the three years before applying."],
              ["Qualifying role", "Your position is executive, senior managerial or specialised-knowledge, and you transfer into a comparable role in Canada."],
              ["Qualifying corporate relationship", "The Canadian entity is a parent, branch, subsidiary or affiliate of your current employer."],
              ["Genuine, ongoing business", "Both the foreign and Canadian entities are actively, regularly and continuously doing business, not shell companies."],
              ["Temporary intent + employer offer", "You intend to work temporarily, and the Canadian entity submits an offer of employment via the Employer Portal and pays the compliance fee."],
            ]}
            caption="Core intra-company transfer eligibility requirements (source: canada.ca, 2026). Verify the current rules on IRCC before applying."
          />
          <Callout type="info" title="What the qualifying relationship means">
            The transfer must be between two related entities: a <strong>parent</strong> (controls another entity), a{" "}
            <strong>branch</strong> (an operating division abroad), a <strong>subsidiary</strong> (controlled through
            majority ownership), or an <strong>affiliate</strong> (two entities owned by the same parent or group). We
            map the corporate structure with you and assemble the ownership evidence IRCC will want to see.
          </Callout>

          <h2>Start-up and new-office intra-company transfers</h2>
          <p>
            The ICT category also covers <strong>start-up or new-office transfers</strong>, the route a multinational
            uses to <strong>open a Canadian branch</strong> by sending an executive, senior manager or
            specialised-knowledge worker to establish it. This is one of the most valuable, and most demanding, ICT
            scenarios: there is no established Canadian operation yet, so IRCC asks for stronger up-front evidence that
            the new office is real and viable.
          </p>
          <p>
            For a new office, you should expect to show <strong>secured physical premises</strong> in Canada, a realistic
            business plan, the financial ability to start operations and pay staff, and evidence that the foreign company
            will continue to operate. Because the office is unproven, the first permit is typically issued for{" "}
            <strong>one year</strong>; extensions then depend on showing the Canadian entity is actually doing business, staffing up, generating revenue and operating as planned.
          </p>
          <Callout type="brand" title="A new-office ICT is a business case, not just a form">
            For a start-up transfer, IRCC is effectively assessing whether the Canadian office will succeed. Working
            under a licensed RCIC (CICC #R706497), our team helps build that case, premises, business plan, financials
            and structure, while being clear that we never guarantee an outcome. The stronger and more genuine the plan,
            the better the application.
          </Callout>

          <h2>How to apply for an intra-company transfer</h2>
          <p>
            An ICT can be applied for online through an IRCC account, and in some cases, for visa-exempt nationals, at a
            port of entry. The exact documents depend on your category and whether the Canadian office is established or
            new, but the framework below is consistent. The employer steps come first.
          </p>
          <Steps
            steps={[
              { title: "Confirm the qualifying relationship", desc: "Verify the Canadian entity is a parent, branch, subsidiary or affiliate of the foreign employer, and gather the ownership/control evidence." },
              { title: "Identify the right category", desc: "Confirm whether the transfer is executive, senior managerial or specialised-knowledge, this drives the evidence and the maximum stay." },
              { title: "Check the one-year rule", desc: "Confirm at least one year of continuous full-time employment with the company in the three years before applying, in a qualifying role." },
              { title: "Submit the employer offer", desc: "The Canadian entity submits an offer of employment through the IRCC Employer Portal and pays the employer compliance fee, no LMIA required." },
              { title: "Apply for the work permit", desc: "The worker applies online to IRCC (or at a port of entry where eligible), with proof of the role, the relationship and, for a new office, premises and a business plan." },
              { title: "Receive the ICT permit", desc: "On approval, the intra-company transfer permit is issued (often one year for a new office), and the employee can begin work for the Canadian entity." },
            ]}
          />

          <h2>How long does an intra-company transfer last?</h2>
          <p>
            An initial ICT is generally issued for up to one to three years, and a <strong>new-office transfer</strong> is
            usually limited to <strong>one year</strong> while the Canadian operation gets established. With extensions,
            the maximum total stay is <strong>seven years for executives and senior managers</strong> and{" "}
            <strong>five years for specialised-knowledge workers</strong>. Processing times and exact validity sit at
            IRCC&apos;s discretion and change, so always confirm current figures on canada.ca before relying on a timeline.
          </p>
          <p>
            Once you reach the maximum, you generally have to work outside Canada for the company for a period before a
            further ICT is possible. Because these caps are firm, the smartest transfers plan a transition to permanent
            residence well before the limit, so your status never lapses. We map that timeline with you from the start.
          </p>

          <h2>From intra-company transfer to permanent residence</h2>
          <p>
            For many transferees, the ICT is a first step toward staying in Canada permanently. The skilled Canadian work
            experience it builds can make you eligible for the <a href="/express-entry">Express Entry</a> Canadian
            Experience Class, or support a Provincial Nominee Program nomination outside Quebec. Executives and senior
            managers in particular often have strong profiles for permanent residence once they have Canadian experience
            on file.
          </p>
          <p>
            The ICT does not grant permanent residence on its own, and the two are assessed separately, but planned well,
            a transfer is an excellent runway to PR. If your spouse comes with you, they may also qualify for an{" "}
            <a href="/work-permits/open-work-permit">open work permit</a>, subject to the 2025 eligibility rules. Working
            under a licensed RCIC (CICC #R706497), our team plans this sequencing from day one, entirely online, by video
            call and secure document sharing. Prefer to handle the legwork yourself? Our lower-cost{" "}
            <a href="/contact">File Review</a> gives your own intra-company transfer to Canada application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Where an intra-company transfer can lead</h2>
          <p className="mt-3 text-ink-soft">A transfer is rarely the destination. We help you turn Canadian experience into permanent residence.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Canadian Experience Class" desc="Skilled work on an ICT can make you eligible for PR through the Express Entry CEC stream." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={Map} title="Provincial nominees" desc="A nomination outside Quebec can support PR for transferees with Canadian experience." href="/pnp" />
            <FeatureCard icon={FileCheck2} title="Open work permits" desc="See how a spouse joining you may qualify for an open work permit under the 2025 rules." href="/work-permits/open-work-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Planning an intra-company transfer to Canada?"
        sub="Get started with a licensed RCIC and get an honest read on your qualifying relationship, the right ICT category and your path to PR."
      />
    </>
  );
}
