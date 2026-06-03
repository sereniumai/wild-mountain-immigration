import type { Metadata } from "next";
import { Heart, FileText, Plane } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/conjugal-partner";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Conjugal Partner Sponsorship Canada",
  titleAbsolute: "Conjugal Partner Sponsorship Canada",
  description:
    "Conjugal partner sponsorship Canada: who qualifies, the barrier to marriage or cohabitation you prove, and how to apply outland. Talk to an RCIC today.",
  path: PATH,
  keywords: [
    "conjugal partner sponsorship",
    "conjugal relationship meaning",
    "conjugal partner canada immigration",
    "when to use conjugal sponsorship",
    "conjugal vs common-law",
  ],
});

const faqs = [
  {
    q: "What is a conjugal relationship?",
    a: "A conjugal relationship is a committed, marriage-like partnership marked by mutual emotional and physical commitment, financial interdependence and a shared life, the same hallmarks IRCC looks for in a married or common-law couple. The defining feature of the conjugal partner category is that the couple has been in this relationship for at least one year but could not marry or live together because of a serious, genuine barrier. It is not a label for a casual or long-distance relationship of convenience.",
  },
  {
    q: "What is the difference between conjugal and common-law?",
    a: "A common-law partner is someone you have lived with in a conjugal relationship for at least 12 months of continuous cohabitation. A conjugal partner is someone you have been committed to for at least a year but genuinely could not live with or marry because of a real barrier, such as an immigration obstacle, marital status, or laws and persecution in your country. In short: common-law requires that you did cohabit; conjugal requires that you could not. If you could have married or lived together but simply chose not to, you do not fit the conjugal category.",
  },
  {
    q: "When should I use conjugal partner sponsorship?",
    a: "Use the conjugal category only when you cannot qualify as a spouse (because you are not legally married) or as a common-law partner (because you have not completed 12 months of continuous cohabitation), and the reason you could not marry or cohabit is a serious barrier outside your control. Typical barriers include an immigration obstacle that kept you in different countries, an existing marriage that cannot be dissolved, or laws and social persecution, for example, some same-sex couples in countries where their relationship is criminalised or marriage is impossible. If marriage or cohabitation was realistically open to you, spousal or common-law is the correct route.",
  },
  {
    q: "Can a conjugal partner be sponsored from inside Canada?",
    a: "No. The conjugal partner category is for partners who are outside Canada, so the application is processed through the outland route. This is different from spousal and common-law sponsorship, where an inland option exists for partners already in Canada. Because of this, the Spousal Open Work Permit tied to inland applications is not available to conjugal partners. If your partner is already living with you in Canada, you are likely a common-law couple rather than conjugal partners.",
  },
  {
    q: "What evidence proves a genuine conjugal relationship?",
    a: "You need two things: proof the relationship is genuine and marriage-like, and proof of the barrier that prevented you from marrying or living together. For genuineness, IRCC looks for the same evidence as in any partner application, a communication history, financial interdependence, time spent together and in-person visits, photos over time, and recognition by family and friends. For the barrier, you document the specific obstacle: immigration refusals or visa records, evidence of an existing marriage, or country-condition and legal evidence showing why marriage or cohabitation was impossible. Confirm the current document requirements on canada.ca before you file.",
  },
  {
    q: "Is there an income requirement to sponsor a conjugal partner?",
    a: "In most cases there is no minimum income requirement to sponsor a spouse, common-law partner or conjugal partner. You sign an undertaking, a binding promise to support your partner financially, typically for three years, but you do not have to prove a set income, unlike sponsoring parents or grandparents. Narrow exceptions can apply, for example where a dependent child has a child of their own. We confirm whether any income test applies to your situation before you start.",
  },
  {
    q: "Do same-sex couples use conjugal partner sponsorship?",
    a: "Sometimes. Many same-sex couples qualify as spouses or common-law partners and should apply that way. The conjugal category becomes relevant when a same-sex couple genuinely could not marry or live together, for example because their relationship is criminalised or socially persecuted in their home country, making cohabitation unsafe and marriage impossible. In that situation the conjugal partner route exists precisely to recognise a committed, marriage-like relationship that an external barrier kept from becoming a marriage or shared household.",
  },
  {
    q: "Do I need a consultant for conjugal partner sponsorship?",
    a: "You can apply yourself, but the conjugal category is narrow and frequently misapplied, and the barrier evidence is easy to get wrong. An honest read on whether you genuinely fit it, or whether spousal or common-law is the right route, is exactly what the process is for. We work to a clear written service agreement with transparent fees, and we never guarantee an outcome.",
  },
];

export default function ConjugalPartnerPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Conjugal Partner Sponsorship Canada, RCIC Guide",
            description:
              "Conjugal partner sponsorship Canada: who qualifies, the barrier to marriage or cohabitation you prove, evidence and how to apply outland. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Conjugal partner sponsorship support",
            description:
              "Conjugal partner sponsorship Canada: who qualifies, the barrier to marriage or cohabitation you prove, evidence and how to apply outland. RCIC-reviewed.",
            path: PATH,
            serviceType: "Conjugal partner sponsorship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Conjugal Partner", path: PATH },
        ]}
        title={<>Conjugal Partner Sponsorship: <span className="text-brand">when you couldn&apos;t marry or cohabit</span></>}
        lede={
          <p>
            <strong>Conjugal partner sponsorship</strong> is for a committed couple who could not marry or live together.
            It is a narrow, often-misunderstood category for partners kept apart by a serious barrier, and getting the
            category right is half the work.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is conjugal the right route?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The conjugal category is narrow. We confirm whether it fits before you build a file.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Spousal sponsorship", href: "/family-sponsorship/spousal-sponsorship", note: "Married, common-law or conjugal partners" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Super Visa", href: "/family-sponsorship/super-visa", note: "Long stays for parents & grandparents" },
                { label: "Get started", href: "/contact", note: "Tell us about your relationship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Conjugal partner sponsorship is the family-class route for a couple in a committed, marriage-like relationship of at least one year who genuinely could not marry or live together. The reason must be a serious barrier outside their control, such as an immigration obstacle, an existing marriage, or persecution. If you could have married or cohabited, you are a spouse or common-law partner instead. Conjugal partners are sponsored outland only, and there is usually no minimum income test."
            items={[
              <>A <strong>conjugal partner</strong> is in a marriage-like relationship of <strong>at least one year</strong> with a partner they genuinely <strong>could not marry or live with</strong> due to a serious barrier.</>,
              <>It is a <strong>narrow category</strong>: if you could have married or cohabited, you are a <a href="/family-sponsorship/spousal-sponsorship">spouse or common-law partner</a>, not conjugal.</>,
              <>You must prove <strong>two things</strong>, a genuine relationship and the <strong>specific barrier</strong> that prevented marriage or cohabitation.</>,
              <>Conjugal partners are sponsored <strong>outland only</strong>, the partner is outside Canada; there is no inland route or work-permit option.</>,
              <>There is usually <strong>no minimum income test</strong>, you sign an undertaking but do not prove a set income.</>,
            ]}
          />

          <h2>What is a conjugal partner in Canadian immigration?</h2>
          <p>
            A <strong>conjugal partner</strong> is a person you have been in a committed, marriage-like relationship with
            for at least one year, but whom you <strong>could not marry or live with</strong> because of a serious,
            genuine barrier outside your control. It is one of three partner categories under family sponsorship, alongside
            spouse and common-law partner, and it leads to the same outcome: permanent residence for your partner (source:
            canada.ca, sponsor your spouse, partner or children, 2026).
          </p>
          <p>
            The word <em>conjugal</em> describes the relationship itself. A conjugal relationship has the hallmarks of a
            marriage, mutual emotional and physical commitment, some degree of financial interdependence, and a shared
            future, even though the couple is not married. The same definition under the Immigration and Refugee Protection
            Regulations (R1(1)) underpins spouse or common-law partner sponsorship too. What sets the conjugal partner
            <em> category</em> apart from the others is the barrier: you must show <strong>why you could not marry or
            cohabit</strong>. Without that barrier, a committed couple is simply a spouse or common-law couple, and the
            conjugal route does not apply.
          </p>

          <h2>What does &ldquo;conjugal relationship&rdquo; actually mean?</h2>
          <p>
            <strong>Conjugal relationship meaning</strong> is where most confusion starts. IRCC and the courts read
            &ldquo;conjugal&rdquo; broadly: it is a relationship of significant commitment and interdependence, not merely a
            sexual or romantic connection. Officers weigh the same factors that define any genuine partner relationship:
          </p>
          <ul>
            <li><strong>Mutual commitment</strong> to a shared life, exclusive and ongoing.</li>
            <li><strong>Emotional and physical intimacy</strong> sustained over time.</li>
            <li><strong>Financial interdependence</strong>, supporting each other, sharing expenses or resources where possible.</li>
            <li><strong>Recognition by others</strong>, presenting publicly and to family as a couple.</li>
            <li><strong>Permanence</strong>, an intention to continue the relationship long term.</li>
          </ul>
          <p>
            These are the same hallmarks IRCC expects from a married spouse or a common-law partner. The difference for
            <strong> conjugal partner Canada immigration</strong> cases is purely the barrier: a conjugal couple has all the
            marks of a marriage-like relationship, but an external obstacle has kept them from marrying or sharing a home.
          </p>

          <h2>When does conjugal apply, and when does spousal or common-law?</h2>
          <p>
            Knowing <strong>when to use conjugal sponsorship</strong> matters, because choosing the wrong category is one of
            the most common reasons these applications run into trouble. The rule is simple: conjugal is a last resort, used
            only when neither of the other two categories is open to you.
          </p>
          <DataTable
            headers={["Category", "Core requirement", "When it fits"]}
            rows={[
              ["Spouse", "Legally married, with a marriage valid where it took place and under Canadian law.", "You are able to marry and have done so."],
              ["Common-law partner", "12 months of continuous cohabitation in a conjugal relationship.", "You have lived together for a full continuous year."],
              ["Conjugal partner", "1+ year in a marriage-like relationship while genuinely unable to marry or cohabit, due to a serious barrier. Outside Canada.", "You could not marry and could not live together for 12 months, and can prove why."],
            ]}
            caption="Spouse vs common-law vs conjugal partner (2026). Conjugal applies only when marriage and cohabitation were both genuinely impossible."
          />
          <p>
            Beyond the <strong>one-year relationship requirement</strong> shared by every conjugal file, the defining
            question is <strong>not</strong> &ldquo;are we committed?&rdquo; but &ldquo;<em>why couldn&apos;t we marry or
            live together?</em>&rdquo; Recognised barriers are serious and external, they are not a matter of preference or
            convenience. Common examples include:
          </p>
          <ul>
            <li><strong>Immigration barriers</strong>, visa refusals or rules that kept you in separate countries, making cohabitation impossible.</li>
            <li><strong>Legal or marital barriers</strong>, one partner is still married to someone else and cannot obtain a divorce.</li>
            <li><strong>Religious or social barriers</strong>, circumstances in which marrying or living together was not realistically possible.</li>
            <li><strong>Persecution</strong>, including some <strong>same-sex couples</strong> in countries where their relationship is criminalised or socially dangerous, so that marriage is impossible and openly cohabiting would put them at risk.</li>
          </ul>
          <Callout type="warning" title="Choosing conjugal when you didn't need to is a common pitfall">
            If you were realistically free to marry, or you could have completed 12 months of cohabitation, IRCC will expect
            you to apply as a spouse or common-law partner. Claiming the conjugal category without a genuine barrier, or
            failing to evidence the barrier, is a frequent cause of refusals. When in doubt, confirming which category truly
            fits is the first thing to get right.
          </Callout>

          <h2>Who can sponsor a conjugal partner?</h2>
          <p>
            The sponsor requirements are the same as for any partner sponsorship. To sponsor in 2026 you must be at least 18
            and a <strong>Canadian citizen, a permanent resident, or a person registered under the Canadian Indian Act</strong>,
            and able to meet the undertaking. Some situations create a temporary bar:
          </p>
          <ul>
            <li>You are in <strong>default</strong> on a previous sponsorship undertaking or an immigration loan.</li>
            <li>You were yourself <strong>sponsored as a partner</strong> and became a PR less than five years ago, the five-year bar.</li>
            <li>You have certain criminal convictions, or are subject to a removal order.</li>
          </ul>
          <p>
            A permanent-resident sponsor must also be living in Canada. We confirm your eligibility, and that your
            relationship genuinely meets the conjugal definition, before you invest time in the application.
          </p>
          <Callout type="brand" title="A note on Quebec">
            Quebec runs its own sponsorship undertaking and selection rules. We do not handle Quebec-destined sponsorships, if you and your partner intend to settle in Quebec, you will be directed to the provincial process. Everywhere
            else in Canada, the federal rules in this guide apply.
          </Callout>

          <h2>Evidence of a genuine conjugal relationship</h2>
          <p>
            A conjugal application has to carry <strong>two evidentiary burdens at once</strong>: that the relationship is
            genuine and marriage-like, and that a serious barrier prevented marriage or cohabitation. A strong file proves
            both clearly and consistently.
          </p>
          <DataTable
            headers={["What you must prove", "Evidence to include"]}
            rows={[
              ["A genuine, marriage-like relationship", "Communication history (messages, calls, emails) across the relationship; photos together over time; proof of in-person visits and travel together; statements from family and friends who recognise you as a couple."],
              ["Mutual commitment & interdependence", "Financial support sent between you, shared expenses or resources, beneficiary or insurance designations, gifts, and any plans made jointly for a shared future."],
              ["The barrier to marriage", "Records of an existing marriage that cannot be dissolved; legal or country-condition evidence; documentation of why marriage was not possible."],
              ["The barrier to cohabitation", "Immigration or visa refusals keeping you in separate countries; country-condition or persecution evidence (e.g. for some same-sex couples) showing cohabiting was unsafe or impossible."],
            ]}
            caption="Core conjugal partner evidence (2026). Always confirm current forms and document checklists on canada.ca."
          />
          <p>
            The barrier evidence is what distinguishes a conjugal file from a spousal or common-law one, and it is where many
            applications fall short. It is not enough to assert that you could not marry or live together, you must
            <strong> document the specific obstacle</strong>. Working under a licensed RCIC (CICC #R706497), our team helps
            you assemble both halves of the record so the relationship&apos;s genuineness and the barrier are obvious on
            the file.
          </p>

          <h2>How to apply: the outland route, step by step</h2>
          <p>
            Conjugal partners are <strong>outside Canada</strong>, so the application is processed through the
            <strong> outland</strong> route. There is no inland option and no Spousal Open Work Permit for this category, both
            are tied to a partner who is already in Canada with status, which by definition a conjugal partner is not. You and
            your partner submit the sponsorship and the permanent-residence application together as one package.
          </p>
          <Steps
            steps={[
              { title: "Confirm conjugal truly fits", desc: "Rule out spouse and common-law first. Establish the genuine barrier that prevented you from marrying or completing 12 months of cohabitation." },
              { title: "Confirm you can sponsor", desc: "Check you are an eligible sponsor (citizen, PR or registered Indian, 18+) with no bar, such as the five-year partner bar or a default." },
              { title: "Build the relationship evidence", desc: "Assemble proof of a genuine, marriage-like relationship: communication, visits, photos, interdependence and supporting statements." },
              { title: "Document the barrier", desc: "Gather the evidence that proves why marriage and cohabitation were impossible, immigration records, marital-status proof, or country-condition evidence." },
              { title: "Submit a complete outland application", desc: "File the sponsorship and the permanent-residence application together, with every form and document. Completeness protects your timeline." },
              { title: "Respond and land", desc: "Answer any procedural fairness letter promptly, complete biometrics and medicals, and your partner confirms permanent residence." },
            ]}
          />
          <Callout type="info" title="Processing times move, check the live tool">
            Partner sponsorship service standards are published by IRCC and updated regularly, and your partner&apos;s country
            of residence and biometrics affect the real timeline. Check the live IRCC processing-times tool before planning
            around a date. The single biggest factor you control is a complete, accurate package, an application returned as
            incomplete effectively restarts your wait.
          </Callout>

          <h2>Income, the undertaking and your obligations</h2>
          <p>
            Like spousal and common-law sponsorship, conjugal partner sponsorship rests on an <strong>undertaking</strong>, a binding promise to repay any social assistance your partner receives during a set period, typically
            <strong> three years</strong> for a partner. In most cases there is <strong>no minimum income requirement</strong>,
            unlike sponsoring parents or grandparents. The undertaking is enforceable and survives a separation or divorce, so
            it is worth understanding fully before you sign.
          </p>
          <Callout type="success" title="Get the category right before you build the file">
            The conjugal category is narrow, so the first thing we do is confirm whether it genuinely fits, or whether{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal or common-law sponsorship</a> is the right route.
            You get an honest read on the strength of your barrier evidence and your likely timeline before you commit to
            anything.
          </Callout>

          <h2>Common conjugal partner pitfalls (and how to avoid them)</h2>
          <p>
            Conjugal refusals usually come down to category and evidence, not the relationship itself. The recurring pitfalls
            are worth knowing before you submit:
          </p>
          <ul>
            <li><strong>Using conjugal when spousal or common-law applies</strong>, the most common error; if you could have married or cohabited, choose the right category.</li>
            <li><strong>An unproven barrier</strong>, asserting you could not marry or cohabit without documenting the specific obstacle.</li>
            <li><strong>Thin relationship evidence</strong>, too few categories covered, or a record that captures a moment rather than a year-plus of commitment.</li>
            <li><strong>Inconsistencies</strong>, dates and histories that do not line up across forms and documents, which raise genuineness concerns.</li>
          </ul>
          <Callout type="warning" title="We are informational, not an appeals service">
            This page is informational. If a sponsorship is refused, we can give you an honest assessment of your options, but note that we do <strong>not</strong> provide sponsorship-appeal or tribunal representation. The best protection
            is a careful, complete application the first time, which is the service we focus on.
          </Callout>

          <h2>How Wild Mountain helps with conjugal partner sponsorship</h2>
          <p>
            The conjugal category is narrow and easy to misapply, so our first job is honest: confirming whether you genuinely
            fit it, or whether <a href="/family-sponsorship/spousal-sponsorship">spousal or common-law sponsorship</a> is the
            correct route. Working under a licensed RCIC (CICC #R706497), our team then builds both halves of the file, a
            relationship record that stands up to scrutiny and clear evidence of the barrier, and represents you with IRCC
            throughout.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees, and we never guarantee an outcome, no honest
            consultant can. What we do promise is a careful, complete application and straight answers, so you know whether
            conjugal partner sponsorship genuinely fits your relationship before you commit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Find the partner route that fits</h2>
          <p className="mt-3 text-ink-soft">Conjugal is narrow. Most couples are spouses or common-law partners, we help you choose correctly.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Heart} title="Spousal sponsorship" desc="Married, common-law or conjugal partners, the full picture of partner sponsorship and inland vs outland." href="/family-sponsorship/spousal-sponsorship" />
            <FeatureCard icon={FileText} title="Family sponsorship" desc="Every way to reunite your family in Canada, from partners to parents and grandparents." href="/family-sponsorship" />
            <FeatureCard icon={Plane} title="Super Visa" desc="The 2026 route for parents and grandparents: long stays of up to five years on a multiple-entry visa." href="/family-sponsorship/super-visa" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Not sure if you're a conjugal partner?"
        sub="Get started with our team and get an honest read on the right category, your barrier evidence and your timeline, working under a licensed RCIC."
      />
    </>
  );
}
