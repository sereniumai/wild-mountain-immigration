import type { Metadata } from "next";
import { Baby } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/dependent-children";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Sponsor a Dependent Child to Canada",
  titleAbsolute: "Sponsor a Dependent Child to Canada",
  description:
    "Sponsor a dependent child to Canada in 2026: who qualifies, the age limit of 22, adopted children and documents. Talk to a licensed RCIC.",
  path: PATH,
  keywords: [
    "sponsor a dependent child to canada",
    "dependent child sponsorship",
    "who qualifies as a dependent child",
    "dependent child age limit 22",
    "sponsor my child canada",
  ],
});

const faqs = [
  {
    q: "What is the age limit for a dependent child?",
    a: "The age limit for a dependent child is under 22 years old. To qualify, the child must be under 22 and not have a spouse or common-law partner of their own. IRCC \"locks in\" the child's age on the day it receives a complete application, so a child who is under 22 at that point is generally protected even if they turn 22 while the application is processing. A child 22 or older can still qualify in one specific situation: if they have depended on a parent for financial support since before turning 22 because of a physical or mental condition. Always confirm the current rule on canada.ca before you rely on a date.",
  },
  {
    q: "Can I sponsor a child over 22?",
    a: "Yes, but only in one situation. A child who is 22 or older qualifies as a dependent child if they have been financially dependent on a parent since before they turned 22 because of a physical or mental condition, and they remain unable to support themselves. This is sometimes called an \"over-age\" dependant. You will need medical and supporting evidence showing the condition existed before age 22 and that the dependency has been continuous. A child over 22 who is simply studying or living at home does not qualify under the current rules, that older \"full-time student\" exception was removed years ago.",
  },
  {
    q: "Who qualifies as a dependent child?",
    a: "A dependent child is your biological or adopted child who is under 22 and does not have a spouse or common-law partner. That is the main rule. The one exception is a child 22 or older who has depended on a parent for support since before age 22 due to a physical or mental condition. The relationship can be biological or through adoption, both are treated as your child for sponsorship, but the parent-child relationship must be genuine and not created mainly for immigration. A child who has married or entered a common-law relationship is no longer considered a dependent child, regardless of age.",
  },
  {
    q: "Does the age get locked in when I apply?",
    a: "Yes. IRCC assesses a child's age as of the day it receives a complete application, this is often called the \"age lock-in\" date. If your child is under 22 and has no spouse or partner on that date, they are generally treated as a dependent child for the rest of the process even if they turn 22 while it is being assessed. This is why completeness and timing matter so much when a child is approaching 22: an application returned as incomplete loses that lock-in and is assessed again at the later date. Confirm how the rule applies to your case on canada.ca or with a licensed RCIC.",
  },
  {
    q: "Can I sponsor an adopted child?",
    a: "Yes. An adopted child can be sponsored as a dependent child, and biological and adopted children are treated the same way for the age and dependency rules. Adoption cases have extra requirements: the adoption must create a genuine parent-child relationship, it must not have been entered into mainly to gain immigration status, and the relevant provincial or territorial adoption authority (outside Quebec) generally has to be involved. International adoptions follow a specific IRCC process. Because adoption files are more complex, it is worth getting advice early on whether to use the sponsorship route or the citizenship route for an adopted child.",
  },
  {
    q: "Is there an income requirement to sponsor my child?",
    a: "In most cases, no. There is usually no minimum income requirement to sponsor a dependent child who does not have a child of their own. You still sign an undertaking, a binding promise to support the child financially for a set period, but you do not have to meet an income test. The exception is when a dependent child has their own dependent child (your grandchild): in that situation an income test can apply. We confirm whether any income test affects your case before you start.",
  },
  {
    q: "Can I include my children in my spousal or PR application?",
    a: "Yes, and this is very common. Dependent children are usually included as accompanying dependants in a parent's application rather than sponsored separately. If you are sponsoring a spouse or partner, their dependent children can be added to that application, and if you are applying for permanent residence yourself through a program like Express Entry, your dependent children are normally included as dependants. Including a child correctly from the start avoids having to sponsor them later. It is important to declare every dependent child even if they are not coming with you, failing to declare a child can affect your ability to sponsor them in the future.",
  },
  {
    q: "Do I need a consultant to sponsor my child?",
    a: "You can apply yourself, but dependent-child cases turn on details: the age lock-in date, whether an over-age child meets the condition test, adoption requirements, and declaring every child correctly. Mistakes in these areas can cost a child their eligibility. Working under a licensed RCIC (CICC #R706497), our team confirms who qualifies, gets the timing right when a child is close to 22, and makes sure every dependant is declared and documented. Many dependent children are included in a spousal sponsorship, which is our flagship service, so we can review the whole family together.",
  },
];

export default function DependentChildrenPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Sponsor a Dependent Child to Canada, Complete RCIC Guide",
            description:
              "Sponsor a dependent child to Canada in 2026: who qualifies, the age limit of 22, adopted children, documents and processing. RCIC-reviewed guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "Dependent child sponsorship support",
            description:
              "Sponsor a dependent child to Canada in 2026: who qualifies, the age limit of 22, adopted children, documents and processing. RCIC-reviewed guide.",
            path: PATH,
            serviceType: "Dependent child sponsorship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Dependent Children", path: PATH },
        ]}
        title={<>Sponsor a Dependent Child <span className="text-brand">to Canada</span></>}
        lede={
          <p>
            To <strong>sponsor a dependent child to Canada</strong>, the child must generally be under 22 and have no
            spouse or common-law partner. Biological and adopted children both qualify. This guide covers who qualifies
            as a dependent child, the age limit, documents, processing, and how to include children in a spousal or PR
            application.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship", label: "All family sponsorship routes" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Baby className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Bringing your child to Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Children are often included with a spousal sponsorship, our flagship service, so we can review the whole family in one session.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Spousal sponsorship", href: "/family-sponsorship/spousal-sponsorship", note: "Include children with a partner's application" },
                { label: "Parents & grandparents", href: "/family-sponsorship/parents-grandparents", note: "Sponsor parents, and the Super Visa route" },
                { label: "Super Visa", href: "/family-sponsorship/super-visa", note: "Long stays for parents & grandparents" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="To sponsor a dependent child to Canada, the child must be your biological or adopted child who is under 22 and has no spouse or common-law partner. A child 22 or older can still qualify if they depended on a parent since before 22 due to a physical or mental condition. The age locks in on the complete application date."
            items={[
              <>A <strong>dependent child</strong> is your biological or adopted child who is <strong>under 22 and has no spouse or common-law partner</strong>.</>,
              <>A child <strong>22 or older</strong> can still qualify if they have depended on a parent since before 22 due to a <strong>physical or mental condition</strong>.</>,
              <>The child&apos;s age is <strong>locked in</strong> on the day IRCC receives a complete application, so timing matters near 22.</>,
              <><strong>No income test</strong> applies in most cases, unless the dependent child has a child of their own.</>,
              <>Children are usually <strong>included in a spousal or PR application</strong> as dependants rather than sponsored on their own.</>,
            ]}
          />

          <h2>Who qualifies as a dependent child?</h2>
          <p>
            A <strong>dependent child</strong> is your child, biological or adopted, who meets Canada&apos;s definition of
            dependency. The core rule is simple: the child must be <strong>under 22 years old and not have a spouse or
            common-law partner</strong>. According to IRCC, that is the main test for who qualifies as a dependent child
            (source: canada.ca, age limit and requirements for dependent children, 2026). There is one exception for older
            children, covered below.
          </p>
          <p>
            This matters because the family class lets a Canadian citizen or permanent resident bring a dependent child to
            Canada as a permanent resident. In practice, most dependent children are <em>included</em> in a parent&apos;s
            application, for example a spouse&apos;s <a href="/family-sponsorship/spousal-sponsorship">spousal
            sponsorship</a> or a principal applicant&apos;s permanent-residence application, rather than sponsored on their
            own. Either way, the child has to fit the dependent-child definition.
          </p>
          <DataTable
            headers={["Situation", "Age", "Other conditions", "Qualifies as a dependent child?"]}
            rows={[
              ["Standard dependent child", "Under 22", "No spouse or common-law partner", "Yes"],
              ["Child has married or is common-law", "Any age", "Has a spouse or common-law partner", "No, they are no longer a dependent child"],
              ["Over-age dependant", "22 or older", "Dependent on a parent since before 22 due to a physical or mental condition", "Yes, with medical and supporting evidence"],
              ["Older child, no condition", "22 or older", "Simply studying or living at home", "No, the old full-time-student exception was removed"],
              ["Adopted child", "Under 22 (or over-age with a condition)", "Genuine parent-child relationship; adoption authority involved", "Yes, treated the same as a biological child"],
            ]}
            caption="Who qualifies as a dependent child for Canadian sponsorship (2026). Confirm the current age rule on canada.ca."
          />

          <h2>What is the age limit for a dependent child?</h2>
          <p>
            The age limit for a dependent child is <strong>under 22</strong>. A child who is under 22 on the day IRCC
            receives a complete application, and who has no spouse or common-law partner, qualifies as a dependent child.
            This is a hard line: a child who is 22 or older on that date generally does not qualify unless they meet the
            over-age condition described in the next section.
          </p>
          <p>
            The age is assessed at one fixed moment, the <strong>age &ldquo;lock-in&rdquo; date</strong>, which is the day
            IRCC receives a complete application. If your child is under 22 then, they are normally treated as a dependent
            child for the rest of the process even if they have a birthday and turn 22 while the file is being assessed. The
            risk is an application returned as incomplete: it loses the lock-in and is reassessed at the later submission
            date, which can push a child over the limit.
          </p>
          <Callout type="warning" title="If a child is approaching 22, timing is everything">
            When a child is close to the age limit, an incomplete package that gets returned can cost them their
            eligibility, because the age is reassessed at the new submission date. The protection is a complete, accurate
            application that locks the age in on the first submission. This is one of the situations where careful
            preparation makes the biggest difference.
          </Callout>

          <h2>Can I sponsor a child over 22?</h2>
          <p>
            Yes, but only in one specific situation. A child who is <strong>22 or older</strong> qualifies as a dependent
            child if they have <strong>depended on a parent for financial support since before they turned 22 because of a
            physical or mental condition</strong>, and they remain unable to support themselves. This is sometimes called an
            <em> over-age dependant</em>.
          </p>
          <p>
            The key is that the condition and the dependency must have existed <strong>before</strong> the child turned 22. It cannot be something that began afterwards. You will need medical evidence of the condition and supporting
            documents showing the dependency has been continuous. A child over 22 who is simply a full-time student or living
            at home does <strong>not</strong> qualify: that older student exception was removed years ago and is no longer
            part of the rules.
          </p>

          <h2>Biological and adopted children</h2>
          <p>
            Both <strong>biological and adopted children</strong> can be sponsored as dependent children, and the age and
            dependency rules apply to them in the same way. What changes with adoption is the additional layer of
            requirements designed to protect children and prevent immigration by convenience.
          </p>
          <ul>
            <li>The adoption must create a <strong>genuine parent-child relationship</strong>.</li>
            <li>It must <strong>not</strong> have been entered into mainly to gain an immigration benefit.</li>
            <li>The relevant <strong>provincial or territorial adoption authority</strong> (outside Quebec) is generally involved, and an international adoption (intercountry adoption) follows a specific IRCC process.</li>
          </ul>
          <p>
            For an adopted child there can be two routes, the sponsorship route covered here, or a citizenship route in some
            cases. For an intercountry adoption in particular, weighing the immigration route against the citizenship route
            matters, and which is better depends on the family&apos;s situation, so adoption files are worth getting advice on early.
            Working under a licensed RCIC (CICC #R706497), our team can walk through the options before you commit to a
            path. We do not handle Quebec-destined cases, which run under separate provincial rules.
          </p>

          <h2>Are you an eligible sponsor?</h2>
          <p>
            To sponsor a dependent child in 2026 you must be at least 18 years old and one of the following: a Canadian
            citizen, a permanent resident, or a person registered under the Canadian Indian Act. You sign an
            <strong> undertaking</strong>, a binding promise to support the child financially for a set period. A few
            situations create a temporary bar on sponsoring:
          </p>
          <ul>
            <li>You are in <strong>default</strong> on a previous sponsorship undertaking or an immigration loan.</li>
            <li>You have certain criminal convictions, or you are subject to a removal order.</li>
          </ul>
          <p>
            For a dependent child with no child of their own, there is usually <strong>no minimum income requirement</strong>, unlike sponsoring <a href="/family-sponsorship/parents-grandparents">parents and grandparents</a>. The exception
            is when the dependent child has their <em>own</em> dependent child (your grandchild): in that narrow situation an
            income test can apply. We confirm whether any income test affects your case before you start.
          </p>
          <Callout type="brand" title="A note on Quebec">
            Quebec runs its own sponsorship undertaking and selection rules. We do not handle Quebec-destined sponsorships. If you and your child intend to settle in Quebec, you will be directed to the provincial process. Everywhere else
            in Canada, the federal rules in this guide apply.
          </Callout>

          <h2>What documents do you need?</h2>
          <p>
            A dependent-child application is built around proving two things: the <strong>parent-child relationship</strong>{" "}
            and that the child <strong>meets the dependency definition</strong>. The exact forms change, so always confirm the
            current checklist on canada.ca; the table below is a starting point for the core evidence.
          </p>
          <DataTable
            headers={["Evidence category", "Examples to include"]}
            rows={[
              ["Proof of the relationship", "Birth certificate naming the parent; adoption order or final adoption documents for an adopted child."],
              ["Proof of identity and age", "The child's passport or national ID, establishing age as of the lock-in date."],
              ["Proof of no spouse/partner", "A statement of the child's marital status; the child must not have a spouse or common-law partner."],
              ["Over-age dependency (if 22+)", "Medical evidence of a physical or mental condition existing before age 22, plus proof of continuous financial dependency."],
              ["Custody and consent", "Where another parent is involved, evidence of custody or written consent for the child to immigrate."],
            ]}
            caption="Core dependent-child document categories (2026). Confirm the current forms and checklist on canada.ca."
          />
          <p>
            Two details cause most avoidable problems. First, the child&apos;s status as having <strong>no spouse or
            common-law partner</strong> must be clear, because a married or common-law child is no longer a dependent child.
            Second, where a second parent has rights, custody or consent documents are often required so the child can
            immigrate. Getting these right the first time protects both the child&apos;s eligibility and your timeline.
          </p>

          <h2>How long does it take, and how is it processed?</h2>
          <p>
            When a dependent child is included in another application, such as a <a href="/family-sponsorship/spousal-sponsorship">spousal
            sponsorship</a> or a permanent-residence application, the child is normally assessed <strong>alongside that
            principal application</strong>, so the timeline tracks the main file rather than running separately. A spousal
            sponsorship, for example, follows IRCC&apos;s service standard of about 12 months from a complete application.
          </p>
          <p>
            The biggest factor you control is completeness. An application returned as incomplete restarts the wait and, for a
            child near 22, can cost them the age lock-in. Processing times are updated regularly, so check the live IRCC
            processing-times tool for the current estimate before you plan around a date.
          </p>

          <h2>Including dependent children in a spousal or PR application</h2>
          <p>
            Most dependent children are not sponsored on their own. Instead, they are included as <strong>accompanying
            dependants</strong> in a parent&apos;s application. There are two common scenarios:
          </p>
          <ul>
            <li>You are sponsoring a <strong>spouse or partner</strong>, and their dependent children are added to that <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a> application.</li>
            <li>You are applying for <strong>permanent residence yourself</strong>, for example through Express Entry, and your dependent children are included as dependants on your application.</li>
          </ul>
          <p>
            One rule deserves special emphasis: you must <strong>declare every dependent child</strong>, even one who is not
            coming to Canada with you. Failing to declare and have a child examined can affect your ability to sponsor that
            child later. Including children correctly from the start avoids a separate sponsorship down the road and protects
            future family reunification.
          </p>
          <Callout type="success" title="Children are usually included with a spousal sponsorship">
            Because so many dependent children are included in a <a href="/family-sponsorship/spousal-sponsorship">spousal
            sponsorship</a>, our flagship service, you can get an honest read on both the partner and the children in one
            session.
          </Callout>

          <h2>How to sponsor a dependent child: step by step</h2>
          <Steps
            steps={[
              { title: "Confirm the child qualifies", desc: "Check the child is under 22 with no spouse or partner, or, if 22+, that they meet the over-age condition test." },
              { title: "Confirm you can sponsor", desc: "Make sure you are an eligible sponsor (citizen, PR or registered Indian, 18+) with no bar such as a default." },
              { title: "Decide how to apply", desc: "Most children are included as dependants in a spousal or PR application rather than sponsored separately." },
              { title: "Build the evidence", desc: "Gather proof of the relationship, the child's identity and age, no-partner status, and custody or consent where needed." },
              { title: "Submit a complete application", desc: "File a complete, accurate package, completeness locks in the child's age and protects your timeline." },
              { title: "Respond and land", desc: "Answer any IRCC requests promptly, complete biometrics and medicals, and the child confirms permanent residence." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps</h2>
          <p>
            Dependent-child cases turn on details that are easy to get wrong: the age lock-in date, whether an over-age child
            meets the condition test, adoption requirements, and declaring every child correctly. Working under a licensed
            RCIC (CICC #R706497), our team confirms who qualifies, gets the timing right when a child is approaching 22, and
            makes sure every dependant is declared and documented, including children added to a spousal sponsorship.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees, and we never guarantee an outcome, because no
            honest consultant can. What we do promise is a careful, complete application and straight answers. Because dependent
            children are so often part of a spousal sponsorship, our flagship service, we can review the partner and the
            children together, so you can sponsor a dependent child to Canada with the rest of your family in one application.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Bring your child to Canada"
        sub="Whether your child is included with a spousal sponsorship or sponsored on their own, book a no-pressure session with a licensed RCIC for an honest read on who qualifies and your timeline."
      />
    </>
  );
}
