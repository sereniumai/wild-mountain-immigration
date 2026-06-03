import type { Metadata } from "next";
import { Scale, ShieldCheck, BadgeCheck, FileSearch } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/rcic-vs-immigration-lawyer";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Immigration Consultant vs Lawyer",
  titleAbsolute: "Immigration Consultant vs Lawyer Canada | RCIC Guide",
  description:
    "Immigration consultant vs lawyer in Canada: both are licensed under IRPA s.91. Compare RCIC vs immigration lawyer scope, cost and when to choose each.",
  path: PATH,
  keywords: [
    "immigration consultant vs lawyer",
    "rcic vs immigration lawyer",
    "immigration consultant vs lawyer canada",
    "do i need an immigration lawyer or consultant",
    "rcic vs lawyer cost",
  ],
});

const faqs = [
  {
    q: "What is the difference between an immigration consultant and a lawyer in Canada?",
    a: "Both a Regulated Canadian Immigration Consultant (RCIC) and an immigration lawyer are licensed, authorised representatives under section 91 of the Immigration and Refugee Protection Act (IRPA). The main difference is scope: an RCIC prepares and submits applications and represents you with Immigration, Refugees and Citizenship Canada (IRCC), while a lawyer can also represent you in litigation, such as appeals and judicial review at the Federal Court. For most standard applications, both are qualified to do the work.",
  },
  {
    q: "Is a consultant cheaper than a lawyer?",
    a: "Generally, Regulated Canadian Immigration Consultants charge less than immigration lawyers for comparable application work, while being fully licensed and regulated for immigration and citizenship matters. That said, fees vary by professional and by case complexity, so the honest answer is that an RCIC is often more affordable for application work, but you should always ask for a written, fixed-scope quote and compare what is actually included.",
  },
  {
    q: "Can an RCIC go to court?",
    a: "Our practice focuses on application work with IRCC, not tribunal or court matters. RCICs prepare and submit applications and represent clients with IRCC. If your case needs a hearing before the Immigration and Refugee Board, a judicial review, or an appeal at the Federal Court, that work is outside our scope, and we will tell you honestly and point you to a lawyer called to a provincial or territorial bar.",
  },
  {
    q: "Do I need an immigration lawyer or a consultant?",
    a: "It depends on your situation. For preparing and submitting a standard application, Express Entry, a provincial nomination, family sponsorship, a work or study permit, a licensed RCIC is fully qualified and often more affordable. You may need a lawyer where your matter involves litigation at the Federal Court, a complex inadmissibility or criminality issue, or a judicial review. A good first step is an honest assessment of your case.",
  },
  {
    q: "Are immigration consultants and lawyers regulated the same way?",
    a: "They are regulated by different bodies but to a common standard of licensing under IRPA s.91. RCICs are regulated by the College of Immigration and Citizenship Consultants (CICC). Immigration lawyers are regulated by the law society of the province or territory where they are called to the bar. Both are accountable to a regulator, carry professional obligations, and can be verified on a public register.",
  },
  {
    q: "How do I verify an RCIC or an immigration lawyer?",
    a: "To verify a Regulated Canadian Immigration Consultant, search the public CICC register by name or licence number, Wild Mountain Immigration's CICC licence number is R706497. To verify a lawyer, check the directory of the relevant provincial or territorial law society. Only a licensed RCIC, a lawyer, or a Quebec notary in good standing may represent you for a fee, so always confirm a representative's standing before you pay anyone.",
  },
  {
    q: "Can an immigration consultant do everything a lawyer can for my application?",
    a: "For the application itself, preparing forms, building a document strategy, writing submissions and representing you with IRCC, a licensed RCIC and an immigration lawyer perform the same core work. The difference appears beyond the application: a lawyer can also take a matter to the Federal Court for appeals or judicial review, which is outside a standard RCIC's scope.",
  },
  {
    q: "Will you tell me if my case needs a lawyer instead?",
    a: "Yes. We work only within our professional scope as a licensed RCIC, and part of acting in your interest is being honest about when a matter is better suited to a lawyer, for example, a Federal Court appeal or a serious inadmissibility question. If that is your situation, we will say so clearly rather than take on work outside our scope.",
  },
];

export default function RcicVsImmigrationLawyerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Immigration Consultant vs Lawyer in Canada: RCIC vs Lawyer Explained",
            description:
              "Immigration consultant vs lawyer in Canada: both are licensed under IRPA s.91. Compare RCIC vs immigration lawyer scope, cost and when to choose each.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "RCIC immigration representation",
            description:
              "Immigration consultant vs lawyer in Canada: both are licensed under IRPA s.91. Compare RCIC vs immigration lawyer scope, cost and when to choose each.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Choosing a Representative"
        crumbs={[{ name: "Immigration Consultant vs Lawyer", path: PATH }]}
        title={<>Immigration consultant vs lawyer in Canada: <span className="text-brand">which do you need?</span></>}
        lede={
          <p>
            <strong>For an immigration consultant vs lawyer in Canada, both are licensed under IRPA s.91.</strong>{" "}
            A Regulated Canadian Immigration Consultant (RCIC) and an immigration lawyer are both authorised
            representatives: the key difference is scope and cost. This guide explains what each can do, and how to
            choose the right fit.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/about", label: "Meet your RCIC" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Scale className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure who you need?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us about your case and get an honest read on whether an RCIC is the right fit, and we&apos;ll say
                so if a lawyer would serve you better.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
                          </div>
            <RelatedLinks
              links={[
                { label: "About us", href: "/about", note: "Licence #R706497, CICC-regulated" },
                { label: "Our fees", href: "/fees", note: "Fixed-scope, transparent pricing" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="For an immigration consultant vs lawyer in Canada, both an RCIC and an immigration lawyer are licensed, authorised representatives under IRPA section 91. The real choice is about scope and cost, not whether either is qualified for your case. A lawyer can also handle litigation, such as Federal Court appeals and judicial review. A standard RCIC handles the application work with IRCC and is often more affordable for comparable work."
            items={[
              <>Both an <strong>RCIC and an immigration lawyer are licensed</strong>, authorised representatives under <strong>IRPA section 91</strong>.</>,
              <>The <strong>key scope difference</strong>: a lawyer can also represent you in <strong>Federal Court</strong> appeals and judicial review; a standard RCIC handles the application work with IRCC.</>,
              <>For application work, an <strong>RCIC is often more affordable</strong> than an immigration lawyer.</>,
              <>An RCIC is regulated by the <strong>CICC</strong>; a lawyer by a <strong>provincial law society</strong>, both are verifiable on a public register.</>,
              <>The right choice depends on your case, and an honest professional will tell you when you need a lawyer.</>,
            ]}
          />

          <h2>Immigration consultant vs lawyer in Canada: are they both licensed?</h2>
          <p>
            When you weigh up an <strong>immigration consultant vs lawyer in Canada</strong>, the first thing to know is
            that both are properly licensed, authorised representatives.</p>
          <p>Under{" "}
            <strong>section 91 of the Immigration and Refugee Protection Act (IRPA)</strong>, only three kinds of people
            may represent you for a fee in connection with a Canadian immigration or citizenship matter: a Regulated
            Canadian Immigration Consultant (RCIC) in good standing with the College of Immigration and Citizenship
            Consultants (CICC), a lawyer or Quebec notary who is a member of a provincial or territorial law society, and
            a paralegal regulated in Ontario. (Source: IRPA s.91; CICC, current to May 2026.)
          </p>
          <p>
            In other words, the <strong>RCIC vs immigration lawyer</strong> question is not about &ldquo;licensed versus
            unlicensed.&rdquo; Both are regulated professionals with real obligations to you and to a regulator. Anyone
            who charges for immigration advice without being one of these authorised representatives is acting
            unlawfully, and that, not the consultant-versus-lawyer choice, is the risk to guard against.
          </p>

          <h2>What can a Regulated Canadian Immigration Consultant (RCIC) do?</h2>
          <p>
            A licensed RCIC is qualified to handle the full range of <strong>application work</strong> with Immigration,
            Refugees and Citizenship Canada (IRCC) and with provincial programs. In practice, that covers most of what
            people come to an immigration professional for:
          </p>
          <ul>
            <li><strong>Assessing your eligibility</strong> and choosing the right program, Express Entry, a Provincial Nominee Program, family sponsorship, work or study permits, or citizenship.</li>
            <li><strong>Preparing and submitting</strong> your application, forms, document strategy and a persuasive submission.</li>
            <li><strong>Representing you with IRCC</strong>, corresponding on your behalf and responding to requests through to a decision.</li>
            <li><strong>Advising on complications</strong> within scope, such as how to present a work history or address a procedural fairness letter.</li>
          </ul>
          <p>
            For the great majority of applicants, this is exactly the help they need. As a licensed RCIC practice, Wild
            Mountain Immigration builds the strongest possible application and represents you with IRCC from start to
            finish.
          </p>

          <h2>What can an immigration lawyer do that a consultant cannot?</h2>
          <p>
            An immigration lawyer is also fully qualified to do the application work above. The distinguishing capability
            is <strong>litigation</strong>: because a lawyer is called to a provincial or territorial bar, they can also
            represent clients in court. Most relevantly for immigration, that includes <strong>judicial review and
            appeals at the Federal Court of Canada</strong>, for example, asking the court to review a refusal.
          </p>
          <p>
            A <strong>standard RCIC handles the application work to IRCC and does not go to the Federal Court</strong>.
            That is simply a matter of scope, not of competence on the application itself. Where a case has moved beyond
            an application, into litigation, a complex inadmissibility or criminality question, or a court challenge, a
            lawyer is the appropriate professional, and a responsible RCIC will say so.
          </p>
          <Callout type="info" title="Our scope, stated plainly">
            Wild Mountain Immigration is a Regulated Canadian Immigration Consultant practice. We prepare and submit
            applications and represent clients with IRCC. We do <strong>not</strong> represent clients at hearings before
            the Immigration and Refugee Board or the Federal Court, and we do not take Quebec matters. If your case needs
            a lawyer, we will tell you.
          </Callout>

          <h2>RCIC vs lawyer cost: which is more affordable?</h2>
          <p>
            Cost is one of the most common reasons people compare an <strong>immigration consultant vs lawyer</strong>.
            As a general pattern, <strong>RCICs are often more affordable than immigration lawyers for comparable
            application work</strong>, while being fully licensed and regulated for immigration and citizenship matters.
            That is one reason many applicants with a standard case choose an RCIC.
          </p>
          <p>
            That said, fees vary by professional, by program and by how complex your file is. The only reliable way
            to compare <strong>RCIC vs lawyer cost</strong> is to ask each for a clear, written retainer agreement, then run
            a like-for-like comparison of what is actually included. A lawyer&apos;s wider scope (including the ability to litigate) can justify a
            higher fee where litigation is genuinely in play; for routine application work, that capability may be more
            than your case requires. You can see how we approach this on our <a href="/fees">fees page</a>.
          </p>

          <h2>RCIC vs immigration lawyer: a side-by-side comparison</h2>
          <p>
            The table below summarises the practical differences between an RCIC and an immigration lawyer across the
            four things that matter most when you choose: regulation, scope, cost and the situations each suits.
          </p>
          <DataTable
            headers={["Factor", "Regulated Canadian Immigration Consultant (RCIC)", "Immigration lawyer"]}
            rows={[
              [
                "Regulation",
                "Licensed under IRPA s.91; regulated by the College of Immigration and Citizenship Consultants (CICC).",
                "Licensed under IRPA s.91; regulated by the law society of the province or territory of the bar.",
              ],
              [
                "Scope",
                "Prepares and submits applications and represents clients with IRCC. A standard RCIC does not go to the Federal Court.",
                "Does the same application work and can also represent clients in litigation, appeals and judicial review at the Federal Court.",
              ],
              [
                "Cost",
                "Often more affordable for comparable application work, while fully licensed and regulated.",
                "Fees vary; a wider scope including litigation can mean higher fees, which may suit court matters.",
              ],
              [
                "When to choose",
                "Standard applications, Express Entry, provincial nomination, sponsorship, work/study permits, citizenship.",
                "Litigation, Federal Court matters, complex inadmissibility or criminality, or a court challenge.",
              ],
            ]}
            caption="RCIC vs immigration lawyer, both licensed under IRPA s.91 (CICC; provincial law societies, current to May 2026)."
          />

          <h2>When is a consultant the right fit?</h2>
          <p>
            For most people preparing a Canadian immigration application, a licensed RCIC is a strong, often more
            affordable choice. A consultant tends to be the right fit when:
          </p>
          <ul>
            <li>You are pursuing a <strong>standard application route</strong>, Express Entry, a Provincial Nominee Program such as the AAIP, family or spousal sponsorship, a work or study permit, or citizenship.</li>
            <li>Your case is, at its heart, about <strong>preparing the strongest possible application</strong> and representing you with IRCC.</li>
            <li>You want a <strong>regulated professional</strong> at a cost that is often lower than a lawyer for the same application work.</li>
            <li>You want a single, accountable point of contact who manages your file end to end with IRCC.</li>
          </ul>

          <h2>When might you need an immigration lawyer?</h2>
          <p>
            There are situations where a lawyer is the better professional, and it helps to recognise them early. You may
            need an immigration lawyer when:
          </p>
          <ul>
            <li>Your matter involves <strong>litigation</strong>, a judicial review or appeal at the <strong>Federal Court</strong>.</li>
            <li>You are facing a <strong>complex inadmissibility</strong> issue, including serious criminality, where a court process may follow.</li>
            <li>A refusal needs to be <strong>challenged in court</strong> rather than addressed through a fresh application.</li>
            <li>Your matter falls in <strong>Quebec</strong>, or otherwise sits outside our practice scope.</li>
          </ul>
          <p>
            If that is your situation, the honest answer is that a lawyer will serve you better, and we will tell you so
            rather than take on work outside our scope. Both professions exist because different cases call for different
            expertise.
          </p>

          <h2>How to verify an RCIC or an immigration lawyer</h2>
          <p>
            Whichever you choose, verify their standing before you pay anyone. It takes a couple of minutes and protects
            you from unlicensed &ldquo;ghost&rdquo; representatives:
          </p>
          <ul>
            <li><strong>For an RCIC:</strong> search the public <strong>CICC register</strong> by name or licence number to confirm the licence is valid and in good standing.</li>
            <li><strong>For a lawyer:</strong> check the directory of the <strong>provincial or territorial law society</strong> where they are called to the bar.</li>
            <li><strong>For either:</strong> ask for the name that will appear on your forms and insist on a written agreement that sets out the scope and the fee.</li>
          </ul>
          <p>
            Wild Mountain Immigration works under our lead RCIC, Nicola Wightman, licence <strong>#R706497</strong>,
            regulated by the College of Immigration and Citizenship Consultants (CICC). You can verify our standing on
            the CICC register at any time, and we encourage it. When you weigh up an{" "}
            <strong>immigration consultant vs lawyer in Canada</strong>, ask each for a written retainer so you can run a
            fair cost comparison, then choose the professional whose scope of practice fits your case. Learn more{" "}
            <a href="/about">about Nicola and our practice</a>, or{" "}
            <a href="/contact">book a consultation</a> for an honest read on whether an RCIC is right for your case.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Honest guidance on who you actually need</h2>
          <p className="mt-3 text-ink-soft">A licensed RCIC for your application work, and a straight answer if a lawyer would serve you better.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={ShieldCheck} title="Licensed & regulated" desc="A Regulated Canadian Immigration Consultant under IRPA s.91, regulated by the CICC, verify licence #R706497 any time." href="/about" />
            <FeatureCard icon={FileSearch} title="Application-focused" desc="We prepare, submit and represent you with IRCC on standard applications, often more affordable than a lawyer for the same work." href="/fees" />
            <FeatureCard icon={BadgeCheck} title="Honest about scope" desc="If your case needs a lawyer, a Federal Court matter or Quebec file, we'll tell you clearly." href="/contact" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Not sure if you need a consultant or a lawyer?"
        sub="Get started with a licensed RCIC for an honest assessment of your case, and a straight answer on whether an RCIC is the right fit."
      />
    </>
  );
}
