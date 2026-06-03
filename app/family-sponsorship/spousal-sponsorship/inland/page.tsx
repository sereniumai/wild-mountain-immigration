import type { Metadata } from "next";
import { Home, Plane, FileText, Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/spousal-sponsorship/inland";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Inland Spousal Sponsorship Canada",
  titleAbsolute: "Inland Spousal Sponsorship Canada",
  description:
    "Inland spousal sponsorship Canada: sponsor a spouse from inside Canada, the Spousal Open Work Permit, travel risk, inland vs outland. Free RCIC consult.",
  path: PATH,
  keywords: [
    "inland spousal sponsorship canada",
    "inland sponsorship",
    "sponsor spouse from inside canada",
    "spousal open work permit",
    "can i travel during inland sponsorship",
  ],
});

const faqs = [
  {
    q: "What is inland spousal sponsorship in Canada?",
    a: "Inland spousal sponsorship is the route you use when both the sponsor and the sponsored spouse or partner live together in Canada, and the spouse holds valid temporary status. You file the sponsorship and the permanent-residence application together, and your partner stays in Canada while IRCC processes it. The main draw is that your partner may qualify for a Spousal Open Work Permit during processing. The main trade-off is mobility: leaving Canada during processing can put an inland application at risk.",
  },
  {
    q: "Can I travel during inland spousal sponsorship?",
    a: "It is risky. Inland sponsorship assumes your partner stays in Canada throughout processing. If they leave, they may not be allowed back in, because there is no guarantee of re-entry, and an absence can complicate or even jeopardise the application. If travel during processing is important to you, outland sponsorship is built for mobility and is usually the safer choice. We talk every couple through this before they commit to a route, because it is one of the most common and costly inland surprises.",
  },
  {
    q: "What is a Spousal Open Work Permit and who qualifies?",
    a: "A Spousal Open Work Permit (SOWP) lets your sponsored partner work for almost any employer in Canada while their permanent-residence application is processed, rather than being tied to one job. It is tied to the inland route and is generally available after IRCC acknowledges your application (the AOR stage). The financial relief over the roughly year-long wait is a major reason couples choose inland. Read more on our Spousal Open Work Permit guide.",
  },
  {
    q: "Does my spouse need valid status for inland sponsorship?",
    a: "Yes. Inland sponsorship is built for a spouse or partner who is in Canada with valid temporary status, for example as a visitor, student or worker, and who intends to stay. Maintaining valid status during processing matters. If your partner's status is uncertain or has lapsed, that is exactly the kind of issue to raise in a consultation before you file, because it changes both your options and your strategy.",
  },
  {
    q: "Is there an appeal if an inland application is refused?",
    a: "No. A key drawback of the inland route is that there is no right of appeal to the Immigration Appeal Division if an inland application is refused, unlike outland, where a sponsor generally has appeal rights. This makes getting the inland application right the first time especially important. We are an informational and application-preparation practice and do not provide sponsorship-appeal or tribunal representation, so our focus is on a careful, complete submission that avoids an avoidable refusal.",
  },
  {
    q: "Should I choose inland or outland spousal sponsorship?",
    a: "Choose inland when your partner is already in Canada with valid status, intends to stay throughout processing, and wants to work via a Spousal Open Work Permit. Choose outland when your partner is abroad, or when travel during processing matters, because outland is more mobility-friendly and preserves a right of appeal. Both routes lead to the same permanent residence. The right answer depends on where your partner lives, whether they need to work, and how much they need to travel.",
  },
  {
    q: "Is the inland spousal sponsorship consultation really free?",
    a: "Yes. Spousal and partner sponsorship is our flagship service, so the consultation is completely free. You get an honest read on your partner's status, the inland-versus-outland decision, the work-permit option and your likely timeline before you commit to anything. We work to a clear written service agreement with transparent fees, and we never guarantee an outcome.",
  },
];

export default function InlandSpousalSponsorshipPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Inland Spousal Sponsorship Canada, Complete RCIC Guide",
            description:
              "Inland spousal sponsorship Canada: sponsor a spouse from inside Canada, the Spousal Open Work Permit, travel risk, inland vs outland. Free RCIC consult.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Inland spousal sponsorship application support",
            description:
              "Inland spousal sponsorship Canada: sponsor a spouse from inside Canada, the Spousal Open Work Permit, travel risk, inland vs outland. Free RCIC consult.",
            path: PATH,
            serviceType: "Inland spousal sponsorship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Spousal Sponsorship", path: "/family-sponsorship/spousal-sponsorship" },
          { name: "Inland", path: PATH },
        ]}
        title={<>Inland Spousal Sponsorship Canada: <span className="text-brand">sponsoring a spouse from inside Canada</span></>}
        lede={
          <p>
            <strong>Inland spousal sponsorship</strong> lets you sponsor a spouse who is already living in Canada, they
            stay here on valid status while IRCC processes their permanent residence, often with a Spousal Open Work
            Permit. Our spousal consultation is free.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship/spousal-sponsorship", label: "Spousal sponsorship overview" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Home className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free spousal consultation</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Spousal and partner sponsorship is our flagship, and the consultation is completely free.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Spousal sponsorship overview", href: "/family-sponsorship/spousal-sponsorship", note: "Requirements, evidence & routes" },
                { label: "Outland sponsorship", href: "/family-sponsorship/spousal-sponsorship/outland", note: "Partner abroad, travel-friendly" },
                { label: "Spousal Open Work Permit", href: "/family-sponsorship/spousal-open-work-permit", note: "Work while your PR is processed" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Inland spousal sponsorship in Canada is the route for couples who already live together in Canada. The sponsored spouse holds valid temporary status and stays here throughout processing, while you file the sponsorship and permanent-residence application together and your partner becomes the principal applicant. Its main advantage is the Spousal Open Work Permit, which can let your partner work during the roughly year-long wait. Travel during processing is risky and there is no right of appeal if an inland application is refused, but it leads to the same unconditional permanent residence as outland, and our spousal consultation is free."
            items={[
              <><strong>Inland spousal sponsorship</strong> is for couples who both live in Canada, where the sponsored spouse holds valid status and stays here throughout processing.</>,
              <>The big advantage is the <a href="/family-sponsorship/spousal-open-work-permit">Spousal Open Work Permit</a>, which can let your partner work during the roughly year-long wait.</>,
              <><strong>Travel is risky</strong>, leaving Canada during inland processing can jeopardise the application, with no guaranteed re-entry.</>,
              <>There is <strong>no right of appeal</strong> if an inland application is refused, unlike outland.</>,
              <>Both inland and outland lead to the same <strong>unconditional permanent residence</strong>, and our spousal consultation is free.</>,
            ]}
          />

          <h2>What is inland spousal sponsorship?</h2>
          <p>
            Inland spousal sponsorship is the route you use when <strong>both the sponsor and the sponsored spouse or
            partner live together in Canada</strong>. Your partner holds valid temporary status, as a visitor, student
            or worker, and the application is processed while they stay in Canada. You file the sponsorship and your
            partner&apos;s permanent-residence application together, and your partner becomes the <em>principal
            applicant</em>. According to IRCC (source: canada.ca, spouse, common-law or conjugal partner sponsorship,
            2026), the family class is built around exactly this kind of relationship-based reunification.
          </p>
          <p>
            The defining features of inland are simple: your partner is <strong>here</strong>, they intend to{" "}
            <strong>stay</strong>, and they maintain <strong>valid status</strong> while they wait. It is the natural
            choice for couples who are already building a life together in Canada. The alternative,{" "}
            <a href="/family-sponsorship/spousal-sponsorship/outland">outland sponsorship</a>, is processed as though the
            applicant is abroad and is more travel-friendly.</p>
          <p>In IRCC terms, inland sits in the{" "}
            <strong>spouse or common-law partner in-Canada class</strong>, and the file is handled by a{" "}
            <strong>Case Processing Centre</strong>. Both routes lead to the same{" "}
            <strong>unconditional permanent residence</strong>. Conditional PR was repealed in 2017, so a sponsored
            spouse does not face any requirement to stay together for a set period to keep status.
          </p>

          <h2>How does sponsoring a spouse from inside Canada work?</h2>
          <p>
            The mechanics mirror spousal sponsorship generally, with one inland-specific assumption: your partner is in
            Canada and stays here. You confirm you are an eligible sponsor, a Canadian citizen, permanent resident or
            person registered under the Indian Act, at least 18, with no bar such as a default or the five-year partner
            bar. You confirm the relationship type (spouse or common-law partner; the conjugal category is outside Canada
            only, so it does not apply inland). Then you build the relationship evidence and submit a complete package.
          </p>
          <p>
            From there, IRCC acknowledges receipt (the AOR stage), and your partner can apply for a{" "}
            <strong>Spousal Open Work Permit</strong> if eligible. The heart of any spousal file is{" "}
            <strong>relationship evidence</strong>, proof the relationship is genuine and not entered into primarily for
            an immigration benefit. For the full document checklist, eligibility detail and the undertaking, see our{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship overview</a>.
          </p>

          <h2>What is the Spousal Open Work Permit option?</h2>
          <p>
            The single biggest reason couples choose inland is the <strong>Spousal Open Work Permit (SOWP)</strong>. An
            open work permit lets your sponsored partner work for almost any employer in Canada, rather than being tied
            to one job, while the permanent-residence application is in progress. Over the roughly year-long wait, the
            ability to keep earning makes a real financial difference, and it is a benefit the outland route does not
            offer.
          </p>
          <Callout type="info" title="The SOWP is an inland advantage">
            The Spousal Open Work Permit is tied to <strong>inland</strong> spousal sponsorship and is generally
            available after IRCC acknowledges your application (AOR). It is not available through the outland route. If
            your partner needs to work in Canada during processing, factor this into your route decision. Read more on
            our <a href="/family-sponsorship/spousal-open-work-permit">Spousal Open Work Permit guide</a>.
          </Callout>

          <h2>Inland vs outland: a quick comparison</h2>
          <p>
            Choosing the right route matters for work authorisation, travel and your appeal rights. The table below sets
            inland against <a href="/family-sponsorship/spousal-sponsorship/outland">outland</a> on the points that
            actually change the experience during processing. Both end in the same permanent residence, the difference
            is what happens in between.
          </p>
          <DataTable
            headers={["", "Inland", "Outland"]}
            rows={[
              ["Where the partner is", "In Canada with valid status, intending to stay", "Abroad, or assessed as if abroad"],
              ["Spousal Open Work Permit", "May qualify after the application is acknowledged (AOR)", "Not available through this route"],
              ["Travel during processing", "Risky, leaving Canada can jeopardise the application", "Travel-friendly, built for mobility"],
              ["Appeal if refused", "No right of appeal to the IAD", "Sponsor generally has a right of appeal"],
              ["Best when", "Your partner is here and wants to work", "Your partner is abroad, or needs to travel"],
              ["Result", "Unconditional permanent residence", "Unconditional permanent residence"],
            ]}
            caption="Inland vs outland spousal sponsorship (2026), both lead to permanent residence. Confirm current rules on canada.ca."
          />

          <h2>Can I travel during inland sponsorship?</h2>
          <p>
            This is the question that catches couples off guard, so it is worth stating plainly:{" "}
            <strong>leaving Canada during inland processing is risky</strong>. The inland route assumes your partner stays
            in Canada throughout. If they travel abroad, there is <strong>no guarantee they will be allowed back in</strong>,
            and an absence can complicate or even jeopardise the application. This <strong>re-entry risk</strong> is real:
            border officers decide admissibility at entry, and a pending inland application does not change that.
          </p>
          <Callout type="warning" title="Travel can put an inland application at risk">
            If your partner may need to travel during processing, for work, a family emergency, or anything else, {" "}
            <strong>outland</strong> is the more mobility-friendly route and the safer choice. Do not assume re-entry. We
            raise this with every couple before they commit, because choosing inland and then needing to leave is one of
            the most stressful and avoidable situations in spousal sponsorship.
          </Callout>

          <h2>What are the drawbacks of inland sponsorship?</h2>
          <p>
            Inland has two trade-offs every couple should weigh against the work-permit advantage. The first is{" "}
            <strong>travel risk</strong>, covered above. The second is that there is <strong>no right of appeal</strong> to
            the Immigration Appeal Division if an inland application is refused. By contrast, an outland sponsor generally
            keeps a right of appeal. An inland refusal can usually only be challenged by <strong>judicial review</strong> at
            the Federal Court, a narrower and more demanding route, which makes getting the inland application right the
            first time especially important.
          </p>
          <Callout type="brand" title="We are informational, not an appeals service">
            As a standard RCIC practice, we focus on careful, complete application preparation. We do{" "}
            <strong>not</strong> provide sponsorship-appeal or tribunal (IAD) representation. Because the inland route has
            no appeal right, the best protection is a well-built application the first time, which is exactly the service
            we offer.
          </Callout>
          <p>
            There is also the practical matter of <strong>maintaining valid status</strong> while you wait. Inland is built
            for a partner who keeps lawful status in Canada throughout, including <strong>maintained status</strong> if a
            visitor, study or work permit renewal is filed before the current one expires. If status is uncertain or has
            lapsed, that changes your options and is best addressed before you file. None of this makes inland the wrong
            choice, for the right couple it is clearly the best route, but it should be a deliberate decision, not a default.
          </p>

          <h2>Who does inland spousal sponsorship suit?</h2>
          <p>
            Inland is the right fit when a specific set of facts line up. It tends to suit couples who:
          </p>
          <ul>
            <li>are <strong>already living together in Canada</strong>, with the sponsored partner on valid temporary status;</li>
            <li>intend for the partner to <strong>stay in Canada</strong> throughout processing, without needing to travel;</li>
            <li>want the partner to <strong>work during the wait</strong> through a Spousal Open Work Permit;</li>
            <li>are comfortable with the inland trade-offs, <strong>travel risk</strong> and <strong>no appeal right</strong>.</li>
          </ul>
          <p>
            If your partner is abroad, or travel during processing is likely, <a href="/family-sponsorship/spousal-sponsorship/outland">outland
            sponsorship</a> is usually the better match. Many couples genuinely could go either way, and the decision
            comes down to work needs, travel plans and risk tolerance. That trade-off is exactly what a free spousal
            consultation is for, an honest read on your situation before you commit to a route.
          </p>
          <Callout type="success" title="Inland spousal consultations are free">
            Because spousal and partner sponsorship is our flagship, we offer the consultation at no charge. You get an
            honest read on your partner&apos;s status, the inland-versus-outland choice, the work-permit option and your
            timeline before you commit to anything.
          </Callout>

          <h2>How Wild Mountain Immigration helps with inland sponsorship</h2>
          <p>
            We make spousal and partner sponsorship our priority. Working under a licensed RCIC (CICC #R706497), our team
            confirms your eligibility and your partner&apos;s status, recommends inland or outland honestly, and builds a
            relationship record that stands up to scrutiny, catching the issues that cause avoidable refusals before they
            reach an officer. We represent you with IRCC throughout the process.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees. We never guarantee an outcome, because no
            honest consultant can, and we are not affiliated with or endorsed by the Government of Canada. What we do
            promise on every inland spousal sponsorship in Canada is a careful, complete application and straight
            answers. Because this is our flagship, the consultation is free.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Compare your spousal sponsorship routes</h2>
          <p className="mt-3 text-ink-soft">Inland or outland, with or without a work permit, we help you choose the route that fits your situation.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Home} title="Inland sponsorship" desc="Your partner is in Canada and wants to stay, with the option of a Spousal Open Work Permit while you wait." href="/family-sponsorship/spousal-sponsorship/inland" />
            <FeatureCard icon={Plane} title="Outland sponsorship" desc="Your partner is abroad or needs to travel, the more mobility-friendly route, with a right of appeal." href="/family-sponsorship/spousal-sponsorship/outland" />
            <FeatureCard icon={Briefcase} title="Spousal Open Work Permit" desc="Let your partner work in Canada while the permanent-residence application is processed." href="/family-sponsorship/spousal-open-work-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Sponsor your spouse from inside Canada"
        sub="Inland spousal consultations are free. Book a no-pressure session with a licensed RCIC and get an honest read on your partner's status, your route and the work-permit option."
      />
    </>
  );
}
