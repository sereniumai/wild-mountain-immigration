import type { Metadata } from "next";
import { Heart, Users, Plane, Calculator, Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { img } from "@/lib/images";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Family Sponsorship Canada 2026",
  titleAbsolute: "Family Sponsorship Canada 2026: Who You Can Sponsor",
  description:
    "Family sponsorship Canada 2026: who you can sponsor, spousal sponsorship, parents & grandparents, income rules. RCIC-reviewed. Free spousal consult.",
  path: PATH,
  keywords: [
    "family sponsorship canada 2026",
    "who can sponsor family to canada",
    "spousal sponsorship",
    "sponsor parents canada",
    "sponsorship requirements",
  ],
});

const faqs = [
  {
    q: "How long does spousal sponsorship take?",
    a: "IRCC's published service standard for a spouse or common-law partner sponsorship is about 12 months from a complete application, whether you apply inland or outland. Real-world timelines vary with completeness, your country of residence and biometrics. The single biggest avoidable delay is an incomplete application that gets returned, so accuracy at submission is what protects your timeline.",
  },
  {
    q: "What income do I need to sponsor my spouse?",
    a: "For a spouse, common-law or conjugal partner, and for dependent children with no children of their own, there is usually no minimum income requirement. You sign an undertaking to support them, but you do not have to prove a set income. An income test (the Minimum Necessary Income, based on LICO) does apply when you sponsor parents, grandparents or most other relatives.",
  },
  {
    q: "Can I sponsor my parents in 2026?",
    a: "Parents and Grandparents Program (PGP) sponsorship works by lottery: you submit an Interest to Sponsor form and IRCC invites a limited number to apply. For 2026, IRCC has not opened a new PGP intake, the 2025 round invited only from the existing 2020 interest pool. While there is no confirmed new intake, the Super Visa is the practical route to bring parents and grandparents to Canada for long stays. We can help you prepare a strong Super Visa application now.",
  },
  {
    q: "What is the difference between inland and outland spousal sponsorship?",
    a: "Inland applies when your partner is already in Canada with valid status and intends to stay here during processing; they may qualify for an open work permit after the application is acknowledged. Outland applies when your partner is abroad (or willing to be assessed as if abroad) and is generally more travel-friendly, since leaving and re-entering Canada is less of a concern. Both lead to the same permanent residence.",
  },
  {
    q: "Who can sponsor a family member to Canada?",
    a: "You must be a Canadian citizen, a permanent resident, or a person registered under the Canadian Indian Act, and at least 18 years old. You sign an undertaking to financially support the people you sponsor. Some situations create a bar, for example, a five-year bar if you were yourself sponsored as a partner, or if you are in default on a previous undertaking. We confirm your eligibility before you start.",
  },
  {
    q: "Is a sponsored spouse's permanent residence conditional?",
    a: "No. Canada repealed conditional permanent residence in 2017. A sponsored spouse or partner receives unconditional permanent residence, there is no requirement to live together for a set period afterwards to keep status. The relationship must, however, be genuine and not entered into primarily for immigration.",
  },
  {
    q: "Do I need a consultant for family sponsorship?",
    a: "You can apply yourself, but sponsorship refusals often come down to thin relationship evidence, an excluded family member, or a missed form rather than the relationship itself. Working under a licensed RCIC (CICC #R706497), our team builds the relationship record and reviews every document before submission. Consultations are free for spousal sponsorship, so there is no cost to get an honest read on your case.",
  },
];

export default function FamilySponsorshipPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Family Sponsorship Canada 2026, Complete RCIC Guide",
            description:
              "Family sponsorship Canada 2026: who you can sponsor, spousal sponsorship, parents & grandparents, income rules. RCIC-reviewed. Free spousal consult.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Family sponsorship application support",
            description:
              "Family sponsorship Canada 2026: who you can sponsor, spousal sponsorship, parents & grandparents, income rules. RCIC-reviewed. Free spousal consult.",
            path: PATH,
            serviceType: "Family sponsorship immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Family Reunification"
        crumbs={[{ name: "Immigrate", path: "/immigrate" }, { name: "Family Sponsorship", path: PATH }]}
        title={<>Family Sponsorship Canada: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            <strong>Family sponsorship in Canada</strong> lets Canadian citizens and permanent residents bring close
            relatives to Canada as permanent residents, most often a spouse or partner, and also dependent children,
            parents and grandparents. Spousal sponsorship is our flagship service, and our consultations for it are free.
          </p>
        }
        updated={UPDATED}
        image={img.heroPeople}
        imageAlt="A reunited family who immigrated to Canada through family sponsorship"
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Heart className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free spousal consultation</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Spousal and partner sponsorship is our flagship, and the consultation is completely free.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Super Visa", href: "/family-sponsorship/super-visa", note: "The 2026 route for parents & grandparents" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
                { label: "Express Entry", href: "/express-entry", note: "Skilled-worker PR for you or your partner" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Family sponsorship in Canada lets a Canadian citizen, permanent resident or registered Indian aged 18 and over sponsor a close relative for permanent residence. That relative can be a spouse, common-law or conjugal partner, a dependent child, or a parent or grandparent. In return, you sign a letter of undertaking to support them, and spousal sponsorship usually has no minimum income test."
            items={[
              <>Sponsors must be a <strong>Canadian citizen, permanent resident or registered Indian</strong>, aged 18+, who signs an undertaking to support the relative.</>,
              <><strong>Spousal sponsorship has no minimum income test</strong> in most cases, and our consultations for it are free.</>,
              <>You can sponsor a <strong>spouse, common-law or conjugal partner, dependent children, parents and grandparents</strong>, and a few other relatives in narrow situations.</>,
              <>For 2026 there is <strong>no confirmed new Parents and Grandparents (PGP) intake</strong>, the <a href="/family-sponsorship/super-visa">Super Visa</a> is the practical alternative.</>,
              <>A sponsored spouse gets <strong>unconditional permanent residence</strong>, conditional PR was repealed in 2017.</>,
            ]}
          />

          <h2>What is family sponsorship in Canada?</h2>
          <p>
            Family sponsorship is the immigration stream that lets a Canadian citizen or permanent resident bring an
            eligible close relative to Canada as a <strong>permanent resident</strong>. As the sponsor, you commit to
            supporting that relative financially for a defined period, an <em>undertaking</em>, so they do not need
            to rely on social assistance. The person you bring is the <em>principal applicant</em>, and once approved
            they hold full permanent-resident status, with a path to citizenship.
          </p>
          <p>
            The family class is one of the three pillars of Canada&apos;s immigration system, alongside economic
            programs like <a href="/express-entry">Express Entry</a> and refugee resettlement. According to IRCC,
            spouses, partners and children make up the large majority of family-class admissions each year (source:
            canada.ca, family sponsorship, 2026). It is built on relationships, not points, there is no Comprehensive
            Ranking System and, for partners and children, usually no income test.
          </p>

          <h2>Who can sponsor family to Canada?</h2>
          <p>
            To be a sponsor in 2026 you must be at least 18 years old and one of the following: a Canadian citizen, a
            permanent resident, or a person registered under the Canadian Indian Act. You also need to be able to meet
            the undertaking, and some situations create a temporary bar:
          </p>
          <ul>
            <li>You are in <strong>default</strong> on a previous sponsorship undertaking or an immigration loan.</li>
            <li>You were yourself <strong>sponsored as a spouse or partner</strong> and became a PR less than five years ago (the five-year bar).</li>
            <li>You have certain criminal convictions, or are subject to a removal order.</li>
          </ul>
          <Callout type="brand" title="A note on Quebec">
            Quebec runs its own sponsorship undertaking and selection rules. We do not handle Quebec-destined
            sponsorships, if you and your relative intend to settle in Quebec, you will be directed to the provincial
            process. Everywhere else in Canada, the federal rules below apply.
          </Callout>

          <h2>Who you can sponsor</h2>
          <p>
            The family class is deliberately narrow, it covers close relatives, not extended family in general. The
            table below summarises who you can sponsor, the relationship that must exist, and typical IRCC processing
            timelines. Processing times and dollar figures move; always confirm the current figures on IRCC before you
            rely on them.
          </p>
          <DataTable
            headers={["Who you can sponsor", "Relationship / rule", "Typical processing"]}
            rows={[
              ["Spouse", "Legally married; genuine relationship", "~12 months"],
              ["Common-law partner", "12 months continuous cohabitation", "~12 months"],
              ["Conjugal partner", "1+ year relationship, barred from cohabiting or marrying; outside Canada only", "~12 months"],
              ["Dependent children", "Under 22 and without a spouse/partner (or dependent due to a condition since before 22)", "Varies; assessed with the principal application"],
              ["Parents & grandparents", "PGP lottery, no confirmed 2026 intake; Super Visa is the alternative", "PGP not currently open"],
              ["Other relatives", "Orphaned sibling/niece/nephew/grandchild under 18, or one relative if you have no other sponsorable family", "Case-by-case"],
            ]}
            caption="Family-class sponsorship at a glance (2026). Confirm current processing times on IRCC."
          />
          <p>
            Dependent children are assessed at the age they are when IRCC receives a complete application, the age is
            &ldquo;locked in&rdquo; at that point, which matters if a child is approaching 22. Children can be included
            with a partner&apos;s application or sponsored on their own.
          </p>

          <h2>Spousal sponsorship: inland vs outland</h2>
          <p>
            Spousal sponsorship, covering spouses, common-law partners and conjugal partners, is the most common
            family-class route and our flagship service. There are two ways to apply, and choosing correctly matters
            for work authorisation and travel.
          </p>
          <DataTable
            headers={["", "Inland", "Outland"]}
            rows={[
              ["Where the partner is", "In Canada with valid status, intending to stay", "Abroad, or assessed as if abroad"],
              ["Open work permit", "May qualify after the application is acknowledged", "Not available through this route"],
              ["Travel during processing", "Leaving Canada can risk the application", "Travel-friendly, built for mobility"],
              ["Result", "Permanent residence", "Permanent residence"],
            ]}
            caption="Inland vs outland spousal sponsorship, both lead to permanent residence."
          />
          <p>
            Whichever stream fits, the heart of a spousal application is <strong>relationship evidence</strong>: proof
            that your relationship is genuine and was not entered into primarily for immigration. That means joint
            finances, communication history, photos, travel together, and statements from people who know you. Thin or
            poorly organised evidence is one of the most common reasons a genuine couple gets a procedural fairness
            letter or a refusal. We will be expanding this into a dedicated spousal-sponsorship guide; for now, this is
            the core of what you need to know.
          </p>
          <Callout type="success" title="Spousal sponsorship consultations are free">
            Because spousal and partner sponsorship is our flagship, we offer the consultation at no charge. You get an
            honest read on your relationship evidence, the inland-versus-outland choice and your timeline before you
            commit to anything.
          </Callout>

          <h2>Sponsoring parents and grandparents in 2026</h2>
          <p>
            The Parents and Grandparents Program (PGP) is a lottery. You submit an <em>Interest to Sponsor</em> form,
            and IRCC invites a limited number of people to apply. For 2026, IRCC has <strong>not opened a new PGP
            intake</strong>, the 2025 round drew only from the existing 2020 interest pool. If you are invited, the
            PGP carries a real income test: you must meet the <abbr title="Minimum Necessary Income">MNI</abbr>, which
            is the Low Income Cut-Off plus 30% for each of the three prior tax years, and the undertaking runs 20 years.
          </p>
          <Callout type="warning" title="No confirmed new PGP intake for 2026, consider the Super Visa">
            Because there is no confirmed new PGP application stream this year, the practical way to bring parents and
            grandparents to Canada for long stays is the <a href="/family-sponsorship/super-visa">Super Visa</a>. It
            allows stays of up to five years per visit on a multiple-entry visa valid for up to ten years. It is not
            permanent residence, but it reunites families now.
          </Callout>
          <p>
            The Super Visa has its own requirements, the host meets a LICO income threshold and the visitor holds at
            least one year of qualifying medical insurance with minimum coverage. As of March 31, 2026, IRCC eased how
            the income is calculated. Read the full breakdown on our{" "}
            <a href="/family-sponsorship/super-visa">Super Visa guide</a>.
          </p>

          <h2>Sponsor eligibility, income and the undertaking</h2>
          <p>
            Every sponsorship rests on an <strong>undertaking</strong> (the letter of undertaking you sign), a binding
            promise to repay any social assistance your sponsored relative receives during a set period. The length
            depends on who you sponsor:
          </p>
          <DataTable
            headers={["You sponsor", "Income test?", "Undertaking length"]}
            rows={[
              ["Spouse / common-law / conjugal partner", "No minimum income (most cases)", "3 years"],
              ["Dependent child (no children of their own)", "No minimum income", "Varies with the child's age"],
              ["Parents & grandparents (PGP)", "Yes, MNI (LICO + 30%), 3 tax years", "20 years"],
              ["Other eligible relatives", "Yes, LICO", "10 years"],
            ]}
            caption="Income tests and undertaking lengths by relationship (2026)."
          />
          <p>
            For spouses, partners and most dependent children, there is <strong>no minimum income requirement</strong>, a relief that surprises many couples. The income test applies only to parents,
            grandparents and other relatives. Where it does apply, IRCC uses your Canada Revenue Agency Notices of
            Assessment, so your filed taxes matter.
          </p>

          <h2>Processing times and how long spousal sponsorship takes</h2>
          <p>
            IRCC&apos;s published service standard for a spouse or common-law partner sponsorship is about{" "}
            <strong>12 months</strong> from a complete application, and this applies to both inland and outland
            routes. That clock assumes a complete, accurate package; an application that is returned as incomplete
            effectively restarts your wait. Biometrics, your country of residence, and the depth of your relationship
            evidence all influence the real timeline.
          </p>
          <p>
            Processing times are updated regularly, so check the live IRCC processing-times tool for the current
            estimate before you plan around a date. What you can control is the quality of the submission, and that is
            where most of the avoidable delay lives.
          </p>

          <h2>How to apply for family sponsorship: step by step</h2>
          <Steps
            steps={[
              { title: "Confirm you can sponsor", desc: "Check that you are an eligible sponsor (citizen, PR or registered Indian, 18+) with no bar, such as the five-year partner bar or a default." },
              { title: "Confirm the relationship qualifies", desc: "Identify which family-class category fits, spouse, partner, dependent child, parent or grandparent, and the rule it must meet." },
              { title: "Choose inland or outland", desc: "For partners, decide between inland (work permit, but travel risk) and outland (mobility) based on your situation." },
              { title: "Build the relationship evidence", desc: "Assemble proof the relationship is genuine: joint finances, communication, photos, travel and supporting statements." },
              { title: "Submit a complete application", desc: "File both the sponsorship and the permanent-residence application together, with every form and document. Completeness protects your timeline." },
              { title: "Respond and land", desc: "Answer any procedural fairness letter promptly, complete biometrics and medicals, and your relative confirms permanent residence." },
            ]}
          />

          <h2>How Wild Mountain helps with family sponsorship</h2>
          <p>
            We make spousal and partner sponsorship our priority. Working under a licensed RCIC (CICC #R706497), our
            team assesses your eligibility, chooses the right stream, and builds a relationship record that stands up
            to scrutiny, catching the issues that cause avoidable refusals, like an excluded family member or thin
            evidence. We represent you with IRCC throughout.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees, and we never guarantee an outcome, no
            honest consultant can. IRCC, not us, makes the decision on every application. What we do promise is a
            careful, complete family sponsorship application and straight answers. If your family sponsorship in Canada
            is refused, we will give you an honest assessment of your options; note that we do not provide
            sponsorship-appeal or tribunal representation.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore every sponsorship route</h2>
          <p className="mt-3 text-ink-soft">Spousal sponsorship is our flagship. Here is the full family-class breakdown.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Heart} title="Spousal Sponsorship" desc="Sponsor your spouse, common-law or conjugal partner for permanent residence. Our flagship, and the consultation is free." href="/family-sponsorship/spousal-sponsorship" badge="Free consult" />
            <FeatureCard icon={Heart} title="Inland Spousal Sponsorship" desc="For partners already in Canada with status, with a possible open work permit during processing." href="/family-sponsorship/spousal-sponsorship/inland" />
            <FeatureCard icon={Plane} title="Outland Spousal Sponsorship" desc="For partners abroad or assessed as abroad, built for mobility and travel during processing." href="/family-sponsorship/spousal-sponsorship/outland" />
            <FeatureCard icon={Briefcase} title="Spousal Open Work Permit" desc="Let your sponsored partner work in Canada while their permanent-residence application is processed." href="/family-sponsorship/spousal-open-work-permit" />
            <FeatureCard icon={Heart} title="Conjugal Partner Sponsorship" desc="For couples kept apart by a real barrier to marrying or living together for 12 months." href="/family-sponsorship/conjugal-partner" />
            <FeatureCard icon={Users} title="Child or Dependent Sponsorship" desc="Sponsor dependent children, with no income test in most cases and age locked at a complete application." href="/family-sponsorship/dependent-children" />
            <FeatureCard icon={Users} title="Parents & Grandparents" desc="The PGP route, the 20-year undertaking and the income rules, plus the Super Visa alternative." href="/family-sponsorship/parents-grandparents" />
            <FeatureCard icon={Plane} title="Super Visa" desc="Long stays of up to five years per visit for parents and grandparents on a multiple-entry visa." href="/family-sponsorship/super-visa" />
            <FeatureCard icon={Calculator} title="Minimum Necessary Income" desc="The LICO + 30% income test for parents and grandparents, who is exempt, and how IRCC checks it." href="/family-sponsorship/minimum-necessary-income" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Reunite your family in Canada"
        sub="Spousal sponsorship consultations are free. Tell us about your case and get an honest read from a licensed RCIC."
      />
    </>
  );
}
