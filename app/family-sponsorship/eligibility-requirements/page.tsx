import type { Metadata } from "next";
import { Users, Heart, Calculator, Plane } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/family-sponsorship/eligibility-requirements";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Family Sponsorship Eligibility in Canada",
  titleAbsolute: "Family Sponsorship Eligibility in Canada",
  description:
    "Family sponsorship eligibility in Canada explained: who can sponsor, who can be sponsored, the undertaking and income rules. Check if you qualify today.",
  path: PATH,
  keywords: [
    "family sponsorship eligibility canada",
    "who can sponsor family canada",
    "sponsorship undertaking",
    "sponsor income requirement",
    "eligible family members",
  ],
});

const faqs = [
  {
    q: "Who is eligible to sponsor a family member to Canada?",
    a: "To sponsor, you must be at least 18 years old and be a Canadian citizen, a permanent resident, or a person registered under the Canadian Indian Act. You must be able to meet the sponsorship undertaking and generally must not be receiving social assistance, except for reasons of disability. Some situations create a temporary bar, such as being in default on a previous undertaking or immigration loan, or having been sponsored as a spouse or partner yourself within the last five years.",
  },
  {
    q: "Who can I sponsor for permanent residence?",
    a: "The family class is deliberately narrow. You can sponsor a spouse, common-law partner or conjugal partner, your dependent children, and your parents and grandparents. In limited situations you may sponsor another relative, such as an orphaned sibling, niece, nephew or grandchild under 18, or one relative of any kind if you have no other family you could sponsor and no close relatives who are Canadian citizens or permanent residents. Each category has its own relationship rules.",
  },
  {
    q: "Is there an income requirement to sponsor family?",
    a: "It depends on who you sponsor. For a spouse, common-law or conjugal partner, and for dependent children with no children of their own, there is usually no minimum income requirement. An income test, the Minimum Necessary Income based on the Low Income Cut-Off, applies when you sponsor parents, grandparents or most other relatives. Where an income test applies, IRCC uses your Canada Revenue Agency Notices of Assessment, so your filed taxes matter.",
  },
  {
    q: "What is the sponsorship undertaking?",
    a: "The undertaking is a binding promise you sign to financially support the relatives you sponsor, and to repay any social assistance they receive during a set period. The length depends on who you sponsor: it is shorter for a spouse or partner and much longer, 20 years, for parents and grandparents. The undertaking remains in force even if your circumstances change, for example through divorce or a move, so it is a serious, long-term commitment.",
  },
  {
    q: "Can I sponsor if I receive social assistance?",
    a: "Generally no, with one important exception. You usually cannot be a sponsor if you are receiving social assistance, but social assistance received for reasons of disability does not disqualify you. The rule is aimed at ensuring you can meet the undertaking. If you are unsure how your situation is treated, it is worth confirming before you apply, because eligibility to sponsor is assessed up front.",
  },
  {
    q: "What is the Minimum Necessary Income (MNI)?",
    a: "The Minimum Necessary Income is the income test that applies when you sponsor parents, grandparents or most other relatives. It is generally based on the Low Income Cut-Off, with parents and grandparents requiring LICO plus 30% for each of the three prior tax years. The exact figures depend on your family size and change annually, so confirm current numbers on canada.ca. There is usually no MNI test for sponsoring a spouse, partner or dependent child.",
  },
  {
    q: "Are there situations that bar someone from sponsoring?",
    a: "Yes. Common bars include being in default on a previous sponsorship undertaking or an immigration loan, having been sponsored as a spouse or partner yourself and become a permanent resident less than five years ago (the five-year bar), and certain criminal convictions or being subject to a removal order. Some of these are temporary and others are situation-specific, so we confirm your eligibility to sponsor before you start.",
  },
  {
    q: "Does the relationship have to be genuine?",
    a: "Yes. For partner and certain other sponsorships, the relationship must be genuine and not entered into primarily to gain an immigration benefit. IRCC assesses this through the evidence you provide, which is why a well-documented relationship record matters. Misrepresenting a relationship has serious consequences, so honesty and good evidence are essential to a successful application.",
  },
  {
    q: "Can an RCIC confirm my sponsorship eligibility?",
    a: "Yes. Working under a licensed RCIC (CICC #R706497), our team confirms whether you are an eligible sponsor, whether your relative is in an eligible family class, and whether any income test or bar applies, before you invest in an application. Getting eligibility right at the start is the best way to avoid a refusal that comes down to a technical issue rather than the relationship itself. We represent clients entirely online.",
  },
];

export default function FamilySponsorshipEligibilityPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Family Sponsorship Eligibility in Canada: The 2026 Guide",
            description:
              "Family sponsorship eligibility in Canada: who can sponsor, who can be sponsored, the undertaking, income rules and the minimum necessary income tie-in.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-16",
          }),
          serviceLd({
            name: "Family sponsorship eligibility assessment",
            description:
              "Family sponsorship eligibility in Canada: who can sponsor, who can be sponsored, the undertaking, income rules and the minimum necessary income tie-in.",
            path: PATH,
            serviceType: "Family sponsorship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Sponsor Your Family"
        crumbs={[
          { name: "Sponsor Your Family", path: "/family-sponsorship" },
          { name: "Eligibility", path: PATH },
        ]}
        title={<>Family sponsorship <span className="text-brand">eligibility</span> in Canada</>}
        lede={
          <p>
            <strong>Family sponsorship eligibility in Canada</strong> turns on two questions: are you an eligible{" "}
            <strong>sponsor</strong>, and is your relative an eligible <strong>family member</strong>? This guide
            explains who can sponsor, who can be sponsored, the undertaking you sign, and the income rules that apply
            to some classes but not others.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship", label: "Family sponsorship overview" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Users className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Are you eligible to sponsor?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Our team can confirm your eligibility, your relative&apos;s class and any income test before you apply.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Family sponsorship overview", href: "/family-sponsorship", note: "Every family-class route" },
                { label: "Spousal sponsorship", href: "/family-sponsorship/spousal-sponsorship", note: "Sponsor a spouse or partner" },
                { label: "Parents & grandparents", href: "/family-sponsorship/parents-grandparents", note: "The PGP and the income test" },
                { label: "Minimum Necessary Income", href: "/family-sponsorship/minimum-necessary-income", note: "The LICO income rule" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Family sponsorship eligibility in Canada depends on the sponsor and the family member. To sponsor, you must be at least 18 and a Canadian citizen, permanent resident or registered Indian. You also need to meet the undertaking, and you generally cannot be on social assistance, except for reasons of disability. You can sponsor a spouse, common-law or conjugal partner, dependent children, and parents or grandparents. Spouses and children usually have no income test. Parents and grandparents require the Minimum Necessary Income, and certain bars can disqualify a sponsor."
            items={[
              <>Sponsors must be <strong>18+</strong> and a <strong>Canadian citizen, permanent resident or registered Indian</strong>.</>,
              <>You generally must <strong>not be on social assistance</strong>, except for reasons of disability.</>,
              <>You can sponsor a <strong>spouse, partner, dependent children, parents and grandparents</strong>.</>,
              <>Spouses and children usually have <strong>no income test</strong>; parents and grandparents need the <a href="/family-sponsorship/minimum-necessary-income">MNI</a>.</>,
              <>Every sponsorship rests on a binding <strong>undertaking</strong> to support the relative financially.</>,
            ]}
          />

          <h2>Family sponsorship eligibility in Canada: who can sponsor?</h2>
          <p>
            The <strong>sponsor eligibility requirements</strong> come first. To be an eligible <strong>sponsor</strong>{" "}
            in 2026 you must be at least <strong>18 years old</strong> and one of the following: a Canadian citizen, a{" "}
            <strong>permanent resident sponsor</strong>, or a person registered under the Canadian Indian Act.</p>
          <p>Beyond
            status and age, you must be able to meet the sponsorship undertaking and generally must not be receiving
            social assistance, with an important exception for assistance received for reasons of disability. Where a
            spouse or partner has income, they can act as a co-signer to help meet an income test that applies. Figures
            and rules below reflect IRCC policy current to May 2026; confirm the latest on canada.ca.
          </p>
          <p>
            Some situations create a temporary or situation-specific bar to sponsoring:
          </p>
          <ul>
            <li>You are in <strong>default</strong> on a previous sponsorship undertaking or an immigration loan.</li>
            <li>You were yourself <strong>sponsored as a spouse or partner</strong> and became a PR less than five years ago (the five-year bar).</li>
            <li>You have certain criminal convictions, or are subject to a removal order.</li>
          </ul>
          <Callout type="brand" title="A note on Quebec">
            Quebec runs its own sponsorship undertaking and selection rules. We do not handle Quebec-destined
            sponsorships; if you and your relative intend to settle in Quebec, you will be directed to the provincial
            process. Everywhere else in Canada, the federal rules on this page apply.
          </Callout>

          <h2>Who can be sponsored?</h2>
          <p>
            The family class covers close relatives, not extended family in general. The table summarises who you can
            sponsor and the relationship rule that must be met. Processing times and dollar figures move; always
            confirm the current figures on canada.ca.
          </p>
          <DataTable
            headers={["Who you can sponsor", "Relationship / rule"]}
            rows={[
              ["Spouse", "Legally married; genuine relationship"],
              ["Common-law partner", "12 months of continuous cohabitation"],
              ["Conjugal partner", "1+ year relationship, barred from cohabiting or marrying; outside Canada only"],
              ["Dependent children", "Under 22 and without a spouse or partner (or dependent due to a condition since before 22)"],
              ["Parents & grandparents", "Through the PGP, which has its own intake and income test"],
              ["Other relatives", "Orphaned sibling/niece/nephew/grandchild under 18, or one relative if you have no other sponsorable family"],
            ]}
            caption="Eligible family members for sponsorship (2026). Confirm current rules and processing on canada.ca."
          />
          <p>
            Dependent children are assessed at the age they are when IRCC receives a complete application. The age is
            &ldquo;locked in&rdquo; at that point, which matters if a child is approaching 22. For partners, the
            relationship rule turns on genuine commitment and financial and emotional <strong>interdependency</strong>,
            which the evidence you submit must demonstrate.
          </p>

          <h2>The undertaking</h2>
          <p>
            Every sponsorship rests on an <strong>undertaking</strong>, a binding promise to financially support the
            relatives you sponsor and to repay any social assistance they receive during a set period. The length
            depends on who you sponsor, and the undertaking remains in force even if your circumstances change, for
            example through divorce or relocation. It is a serious, long-term commitment, which is why eligibility to
            meet it is assessed up front.
          </p>
          <DataTable
            headers={["You sponsor", "Income test?", "Undertaking length"]}
            rows={[
              ["Spouse / common-law / conjugal partner", "No minimum income (most cases)", "3 years"],
              ["Dependent child (no children of their own)", "No minimum income", "Varies with the child's age"],
              ["Parents & grandparents (PGP)", "Yes, MNI (LICO + 30%), 3 tax years", "20 years"],
              ["Other eligible relatives", "Yes, LICO", "10 years"],
            ]}
            caption="Income tests and undertaking lengths by relationship (2026). Confirm current figures on canada.ca."
          />

          <h2>Income requirements and the MNI tie-in</h2>
          <p>
            Whether an income test applies is one of the most important eligibility questions, and it surprises many
            sponsors. For a <strong>spouse, common-law or conjugal partner</strong>, and for{" "}
            <strong>dependent children</strong> with no children of their own, there is usually{" "}
            <strong>no minimum income requirement</strong>. The income test bites when you sponsor{" "}
            <strong>parents, grandparents</strong> or most other relatives.
          </p>
          <p>
            Where an income test applies, it is the{" "}
            <a href="/family-sponsorship/minimum-necessary-income">Minimum Necessary Income (MNI)</a>, generally based
            on the Low Income Cut-Off. For parents and grandparents through the PGP, you must meet LICO plus 30% for
            each of the three prior tax years. IRCC uses your Canada Revenue Agency Notices of Assessment to check, so
            your filed taxes matter. The exact figures depend on your family size and change annually, so confirm
            current numbers on canada.ca. Our dedicated{" "}
            <a href="/family-sponsorship/minimum-necessary-income">Minimum Necessary Income</a> guide explains the
            test, who is exempt, and how IRCC checks it.
          </p>

          <h2>How to confirm your sponsorship eligibility, step by step</h2>
          <Steps
            steps={[
              { title: "Confirm you can sponsor", desc: "Check you are 18+, a citizen, PR or registered Indian, not on social assistance (except disability), with no bar such as default or the five-year partner bar." },
              { title: "Confirm the relationship qualifies", desc: "Identify which family-class category your relative falls in, spouse, partner, dependent child, parent or grandparent, and the rule it must meet." },
              { title: "Check any income test", desc: "Determine whether the Minimum Necessary Income applies, and if so confirm you meet LICO or LICO + 30% with your Notices of Assessment." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps confirm eligibility</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team confirms your <strong>family sponsorship
            eligibility in Canada</strong>: whether you are an eligible sponsor, whether your relative is in an eligible
            family class, and whether any income test or bar applies, before you invest in an application. Getting
            eligibility right at the start is the best way to avoid a refusal that comes down to a technical issue
            rather than the relationship itself. We work to a clear written service agreement with transparent fees, we
            represent clients entirely online, and we never guarantee outcomes.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the sponsorship routes</h2>
          <p className="mt-3 text-ink-soft">Once you know you are eligible, see the route that fits your family.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Heart} title="Spousal sponsorship" desc="Sponsor your spouse, common-law or conjugal partner for permanent residence." href="/family-sponsorship/spousal-sponsorship" />
            <FeatureCard icon={Users} title="Parents & grandparents" desc="The PGP route, the 20-year undertaking and the income rules, plus the Super Visa alternative." href="/family-sponsorship/parents-grandparents" />
            <FeatureCard icon={Calculator} title="Minimum Necessary Income" desc="The LICO and LICO + 30% income test, who is exempt, and how IRCC checks it." href="/family-sponsorship/minimum-necessary-income" />
            <FeatureCard icon={Plane} title="Family sponsorship overview" desc="The full family-class breakdown, from spouses to the Super Visa." href="/family-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if you can sponsor your family"
        sub="Tell us about your situation and our licensed team will confirm your eligibility and the right route, with honest advice and clear fees."
      />
    </>
  );
}
