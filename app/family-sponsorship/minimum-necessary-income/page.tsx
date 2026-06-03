import type { Metadata } from "next";
import { Calculator, Users, Plane } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/family-sponsorship/minimum-necessary-income";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Minimum Necessary Income (MNI) for Sponsorship Canada 2026",
  titleAbsolute: "Minimum Necessary Income (MNI) Canada 2026",
  description:
    "Minimum Necessary Income (MNI) explained: the LICO plus 30% you need to sponsor parents and grandparents and who is exempt. Talk to a licensed RCIC.",
  path: PATH,
  keywords: [
    "minimum necessary income",
    "MNI canada",
    "LICO sponsorship",
    "income to sponsor parents canada",
    "minimum necessary income for sponsorship",
  ],
});

const faqs = [
  {
    q: "What is the Minimum Necessary Income (MNI) for sponsorship?",
    a: "The Minimum Necessary Income (MNI) is the income a sponsor must show to sponsor parents, grandparents or certain other relatives to Canada. For most of these applications it equals the Low Income Cut-Off (LICO) for your family size, plus 30%, and you must meet it for each of the three tax years before you apply. Spouses, partners and dependent children are generally exempt from the income test.",
  },
  {
    q: "Do I need to meet an income requirement to sponsor my spouse?",
    a: "No. There is normally no Minimum Necessary Income to sponsor a spouse, common-law or conjugal partner, or a dependent child who has no children of their own. You still sign an undertaking to support them, but you do not have to prove a set income. The MNI applies mainly to parents and grandparents (PGP) and a few other relatives.",
  },
  {
    q: "How does IRCC check my income for MNI?",
    a: "IRCC uses your Canada Revenue Agency Notices of Assessment (NOAs) for the three tax years before you apply. The figure they look at is usually line 15000 (total income), with some adjustments. Because they rely on filed taxes, having your returns filed and accurate for all three years is essential. A co-signer (your spouse or partner) can add their income to help you meet the threshold.",
  },
  {
    q: "What family size do I use for the MNI calculation?",
    a: "Your family size includes you, your spouse or partner, your dependent children, the relatives you want to sponsor and their dependants, anyone you have sponsored before whose undertaking is still in effect, and any co-signer's family members. It is easy to undercount, which can sink an otherwise strong application, so we confirm the count carefully before you file.",
  },
  {
    q: "What if I do not meet the Minimum Necessary Income?",
    a: "If you cannot meet the MNI on your own, a co-signer (your spouse or common-law partner) can combine their income with yours. If you still fall short, the parents and grandparents route may not be open to you in a given year, and the Super Visa becomes the practical way to reunite, since it does not require you to meet the full MNI, only a LICO-based income test for the host.",
  },
  {
    q: "What is the difference between the MNI for parents and grandparents and the income test for the Super Visa?",
    a: "They are related but not the same. For parents and grandparents sponsorship, the Minimum Necessary Income is the Low Income Cut-Off (LICO) plus 30 percent, and you must have met it for each of the three tax years before you apply. The Super Visa uses a lower bar: a LICO-based income test for the host, without the extra 30 percent and without the same three-year structure, alongside a requirement for qualifying medical insurance. That is why the Super Visa is often achievable when full MNI sponsorship is not.",
  },
  {
    q: "Can a co-signer help me meet the Minimum Necessary Income?",
    a: "Yes. Your spouse or common-law partner can act as a co-signer and combine their income with yours to meet the MNI. A co-signer shares legal responsibility for the undertaking to support the sponsored relatives, so it is a genuine financial commitment rather than a paperwork formality. The co-signer's family members are also counted in your family size, which can raise the threshold, so we model the combined income and the family-size count together before you file.",
  },
];

export default function MniPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Minimum Necessary Income (MNI) for Canadian Sponsorship 2026",
            description:
              "Minimum Necessary Income (MNI) explained: the LICO plus 30% you need to sponsor parents and grandparents, who is exempt, and how IRCC checks it.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Sponsorship income (MNI) assessment",
            description:
              "Minimum Necessary Income (MNI) explained: the LICO plus 30% you need to sponsor parents and grandparents, who is exempt, and how IRCC checks it.",
            path: PATH,
            serviceType: "Family sponsorship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Sponsor Your Family", path: "/family-sponsorship" },
          { name: "Minimum Necessary Income", path: PATH },
        ]}
        title={<>Minimum Necessary Income <span className="text-brand">(MNI)</span> for sponsorship</>}
        lede={
          <p>
            The <strong>Minimum Necessary Income (MNI)</strong> is the income you must show to sponsor parents,
            grandparents and certain relatives to Canada. For most of those applications it is the{" "}
            <strong>Low Income Cut-Off (LICO) plus 30%</strong>, proven across the three tax years before you apply.
            Spouses, partners and dependent children are usually exempt.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship/parents-grandparents", label: "Parents & Grandparents" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Check your income</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Not sure if you meet the MNI, or how to count your family size? Rather than relying on a generic MNI
                calculator, tell us your situation and we will confirm the numbers before you file.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Parents & Grandparents", href: "/family-sponsorship/parents-grandparents", note: "The PGP route and the MNI it requires" },
                { label: "Super Visa", href: "/family-sponsorship/super-visa", note: "The alternative if you fall short of MNI" },
                { label: "Family Sponsorship", href: "/family-sponsorship", note: "All sponsorship routes and rules" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Minimum Necessary Income (MNI) is the income a Canadian sponsor must show to bring parents, grandparents and certain other relatives to Canada. It is set at the Low Income Cut-Off (LICO) plus 30 percent for your family size, and you must prove it across each of the three tax years before you apply. IRCC checks it against your CRA Notices of Assessment; spouses, partners and dependent children are generally exempt."
            items={[
              <>The <strong>MNI is LICO + 30%</strong> for your family size, and you must meet it for <strong>each of the three tax years</strong> before you apply.</>,
              <><strong>Spouses, partners and dependent children</strong> are generally exempt. There is usually no income test to sponsor them.</>,
              <>The MNI applies mainly to <a href="/family-sponsorship/parents-grandparents">parents and grandparents (PGP)</a> and a few other relatives.</>,
              <>IRCC checks your income using your <strong>CRA Notices of Assessment</strong>, so filed, accurate taxes for all three years matter.</>,
              <>If you fall short, a <strong>co-signer</strong> can add their income, or the <a href="/family-sponsorship/super-visa">Super Visa</a> (a lower LICO test) becomes the practical route.</>,
            ]}
          />

          <h2>What is the Minimum Necessary Income?</h2>
          <p>
            When you sponsor certain relatives to Canada, you have to show that you can support them without relying on
            social assistance. The yardstick IRCC uses for this is the <strong>Minimum Necessary Income (MNI)</strong>.
            For parents and grandparents and most other income-tested sponsorships, the MNI is the{" "}
            <strong>Low Income Cut-Off (LICO)</strong> for your family size <strong>plus 30%</strong>. The LICO itself is
            a Statistics Canada measure that rises with family size and is updated each year.
          </p>
          <p>
            Crucially, you do not just need to meet the MNI today. For parents and grandparents you must have met it in{" "}
            <strong>each of the three tax years</strong> immediately before you apply, evidenced by your Canada Revenue
            Agency Notices of Assessment. That three-year look-back is one of the most misunderstood parts of the rule.
          </p>

          <Callout type="brand" title="Who does NOT need to meet the MNI">
            There is normally <strong>no Minimum Necessary Income</strong> to sponsor a spouse, common-law or conjugal
            partner, or a dependent child who has no children of their own. The income test bites for parents,
            grandparents and other eligible relatives, not for partners and most children.
          </Callout>

          <h2>Understanding LICO and the extra 30%</h2>
          <p>
            To make sense of the MNI it helps to break it into its two parts. The{" "}
            <strong>Low Income Cut-Off (LICO)</strong> is a Statistics Canada measure of the income level below which a
            household is considered to be in straitened circumstances. It is not a fixed number: it rises with{" "}
            <strong>family size</strong>, because a larger household needs more income to reach the same standard of
            living, and it is <strong>updated each year</strong> to track the cost of living.
          </p>
          <p>
            For most family-class sponsorships that are income-tested, IRCC does not stop at LICO. It adds a further{" "}
            <strong>30%</strong> on top, so the threshold you actually have to meet is <strong>LICO plus 30 percent</strong>{" "}
            for your family size. That margin exists because sponsoring parents and grandparents is a long-term
            commitment, and IRCC wants comfortable headroom rather than an income that only just clears the line. The
            one route where the plain LICO test applies instead, without the extra 30 percent, is the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a>, which we return to below.
          </p>

          <h2>The three-tax-year rule</h2>
          <p>
            The part sponsors most often misjudge is timing. For{" "}
            <a href="/family-sponsorship/parents-grandparents">parents and grandparents</a> sponsorship, you do not
            simply need to meet the MNI today. You must have met it in <strong>each of the three tax years</strong>{" "}
            immediately before you apply, and IRCC verifies each year separately against your Notices of Assessment. A
            strong income last year does not rescue a year three years ago that fell below the line.
          </p>
          <p>
            This look-back period has a few practical consequences. A recent pay rise may not yet be reflected across all
            three years. A year of reduced income, parental leave, a career break or self-employment losses can pull a single
            year below the threshold and stop the whole application. And because the relevant years shift as time passes,
            timing your application well can be the difference between qualifying and not. We map your three qualifying
            years before you file so there are no surprises.
          </p>

          <h2>How the MNI is calculated: LICO + 30%</h2>
          <p>
            The MNI scales with how many people you are responsible for. The table below shows the methodology. The exact
            dollar figures change every year, so treat these as <strong>illustrative</strong> and confirm the current
            LICO + 30% amounts on IRCC before you rely on them.
          </p>
          <DataTable
            headers={["Family size", "How the MNI is built", "Illustrative MNI (confirm on IRCC)"]}
            rows={[
              ["2 people", "LICO for 2 + 30%", "~$47,000"],
              ["3 people", "LICO for 3 + 30%", "~$57,000"],
              ["4 people", "LICO for 4 + 30%", "~$70,000"],
              ["5 people", "LICO for 5 + 30%", "~$79,000"],
              ["6 people", "LICO for 6 + 30%", "~$89,000"],
              ["7 people", "LICO for 7 + 30%", "~$99,000"],
              ["Each extra person", "Add the per-person LICO increment + 30%", "Add ~$10,000"],
            ]}
            caption="Illustrative only. IRCC publishes the exact MNI (LICO + 30%) for each family size and tax year, confirm the current figures before applying."
          />
          <Callout type="warning" title="Figures change every year">
            LICO and the MNI are updated annually, and the numbers above are approximate and for illustration only. We
            always check your required threshold against the current official IRCC table for the exact tax years your
            application will be assessed against.
          </Callout>

          <h2>Counting your family size correctly</h2>
          <p>
            The family-size number you use for the MNI is larger than many sponsors expect. You count:
          </p>
          <ul>
            <li>Yourself and your spouse or common-law partner.</li>
            <li>Your dependent children (and your partner&apos;s dependent children).</li>
            <li>The parents or grandparents you want to sponsor, plus their dependants.</li>
            <li>Anyone you have sponsored before whose <strong>undertaking is still in effect</strong>.</li>
            <li>Any co-signer and the people they are responsible for.</li>
          </ul>
          <p>
            Undercounting your family size makes your required income look lower than it really is, and IRCC will
            recalculate it during assessment. Getting the count right at the start is one of the simplest ways to avoid a
            refusal.
          </p>

          <h2>Family-size counting: two worked examples</h2>
          <p>
            Because the count drives the threshold, it is worth seeing how it works in practice. These examples are{" "}
            <strong>illustrative</strong>; the principle is what matters, not the exact dollar figures, which change each
            year.
          </p>
          <ul>
            <li>
              <strong>Example one: a couple sponsoring two parents.</strong> A sponsor and their spouse, with no
              children, want to sponsor the sponsor&apos;s two parents. The family size is four: the sponsor, the spouse,
              and the two parents. The MNI is the LICO-plus-30% figure for a household of four.
            </li>
            <li>
              <strong>Example two: a larger household.</strong> A sponsor with a spouse and two dependent children wants
              to sponsor two parents, and the sponsor previously sponsored a relative whose undertaking is still in
              effect. The family size is seven: the sponsor, the spouse, the two children, the two parents, and the one
              person still under a live undertaking. The threshold is correspondingly higher.
            </li>
          </ul>
          <p>
            The lesson from both is the same: people you might not think of, dependants of the relatives you are
            sponsoring, anyone under a still-active undertaking, and a co-signer&apos;s family, all add to the count and
            raise the income you must show. We build the full count with you before anything is filed.
          </p>

          <h2>How IRCC assesses your income</h2>
          <p>
            For parents and grandparents sponsorship, IRCC relies on your <strong>CRA Notices of Assessment</strong> for
            the three tax years before you apply. The income figure is generally line 15000 (total income), with some
            adjustments, and certain types of income do not count. Because the assessment is built on filed taxes, two
            practical things matter most: your returns should be <strong>filed for all three years</strong>, and the
            income on them should genuinely clear the threshold for your family size.
          </p>
          <p>
            A <strong>co-signer</strong>, your spouse or common-law partner, can combine their income with yours to help
            you meet the MNI. A co-signer shares responsibility for the undertaking, so it is a real commitment, not just
            a paperwork formality.
          </p>

          <h2>Using a co-signer to meet the threshold</h2>
          <p>
            When one income alone does not clear the MNI, a co-signer is often the answer. There are a few things to keep
            in mind:
          </p>
          <ul>
            <li><strong>Only a spouse or common-law partner</strong> can co-sign a parents and grandparents sponsorship; you cannot bring in a sibling or friend to top up the income.</li>
            <li><strong>Their income is added across the same three tax years</strong>, so the co-signer&apos;s Notices of Assessment must also show qualifying income for each of those years.</li>
            <li><strong>The co-signer shares the undertaking</strong>, which is a binding, long-term commitment to support the sponsored relatives and repay any social assistance they receive.</li>
            <li><strong>Counting cuts both ways.</strong> A co-signer&apos;s own family members are added to your family size, which can lift the threshold even as their income helps you meet it. We model both effects together.</li>
          </ul>

          <h2>What if you do not meet the MNI?</h2>
          <p>
            If your income falls short even with a co-signer, the parents and grandparents route may not be open to you
            in that intake. That is where the <a href="/family-sponsorship/super-visa">Super Visa</a> comes in: it lets
            parents and grandparents visit Canada for stays of up to five years at a time on a multiple-entry visa valid
            for up to ten years. The Super Visa has its own income test for the host based on LICO (not LICO + 30%) and
            requires qualifying medical insurance, so it is often achievable when full MNI sponsorship is not.
          </p>
          <h2>MNI for parents and grandparents vs the LICO test for the Super Visa</h2>
          <p>
            These two income tests are easy to confuse, so it is worth setting them side by side. Both look at your
            income, but the bar and the structure differ, which is exactly why the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a> can work when full{" "}
            <a href="/family-sponsorship/parents-grandparents">parents and grandparents</a> sponsorship cannot:
          </p>
          <DataTable
            headers={["Feature", "PGP sponsorship (MNI)", "Super Visa (LICO test)"]}
            rows={[
              ["Income bar", "LICO plus 30%", "LICO (no extra 30%)"],
              ["Look-back", "Each of the three tax years before you apply", "Generally the most recent year's income for the host"],
              ["Outcome", "Permanent residence for the parent or grandparent", "Long visits, not permanent residence"],
              ["Insurance", "Standard PR requirements", "Qualifying medical insurance required"],
            ]}
            caption="Illustrative comparison. The Super Visa uses a lower, LICO-based income test, which is why it is often achievable when full MNI sponsorship is not. Confirm current figures on IRCC."
          />
          <p>
            The trade-off is real: the Super Visa reunites families through long, renewable visits rather than permanent
            residence, but it asks for a lower income and adds a medical-insurance requirement. For many families it is
            the practical way to stay together while income builds toward a future PGP application. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> sets the two routes in their wider context.
          </p>

          <Callout type="success" title="We confirm your numbers before you commit">
            The MNI, the three-year look-back and the family-size count are exactly the kind of details that quietly sink
            applications. As a CICC-regulated practice led by a licensed RCIC (R706497), our team checks your Notices of
            Assessment, confirms your family size and the correct threshold, and tells you honestly whether sponsorship
            or the Super Visa is your realistic route, before you spend on government fees.
          </Callout>

          <h2>How Wild Mountain Immigration helps with the MNI</h2>
          <p>
            Wild Mountain Immigration is a CICC-regulated practice led by a licensed RCIC, and we represent clients
            entirely online. On a parents and grandparents file, the Minimum Necessary Income is where applications most
            often come unstuck, so our work starts with confirming this sponsor income requirement against the current
            IRCC income table before you commit a penny in government fees.
          </p>
          <Steps
            steps={[
              { title: "Confirm the threshold and your three years", desc: "We identify your correct family size and the LICO-plus-30% threshold, then check your Notices of Assessment for each of the three qualifying tax years." },
              { title: "Plan income and co-signer strategy", desc: "If you fall short, we model a co-signer's income and family-size effect, and time your application to your strongest three-year window." },
              { title: "Apply or pivot to the Super Visa", desc: "We build a complete sponsorship application, or, if the MNI is out of reach, prepare a Super Visa application under its lower LICO test instead." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related sponsorship guides</h2>
          <p className="mt-3 text-ink-soft">The MNI is one piece of the picture. Explore the routes it applies to.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Users} title="Parents & Grandparents" desc="The PGP route, the 20-year undertaking, and how the MNI applies to it." href="/family-sponsorship/parents-grandparents" />
            <FeatureCard icon={Plane} title="Super Visa" desc="The practical alternative if you fall short of the full MNI, long stays for parents and grandparents." href="/family-sponsorship/super-visa" />
            <FeatureCard icon={Calculator} title="Family Sponsorship" desc="Who you can sponsor, income tests and undertakings across every family-class route." href="/family-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Not sure if you meet the MNI?"
        sub="Tell us about your income and family size and a licensed RCIC will confirm your numbers and your best route, honestly."
      />
    </>
  );
}
