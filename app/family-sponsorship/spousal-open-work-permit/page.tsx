import type { Metadata } from "next";
import { Heart, Briefcase, FileText } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/spousal-open-work-permit";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Spousal Open Work Permit 2026",
  titleAbsolute: "Spousal Open Work Permit (SOWP): Apply 2026",
  description:
    "Spousal open work permit 2026: how a sponsored spouse can work during inland spousal sponsorship, eligibility and how to apply. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "spousal open work permit 2026",
    "SOWP",
    "open work permit for sponsored spouse",
    "inland spousal open work permit",
    "January 2025 open work permit restrictions",
  ],
});

const faqs = [
  {
    q: "Can my spouse work during sponsorship?",
    a: "Yes, but only on an inland spousal or common-law sponsorship. A sponsored spouse or partner who is in Canada with valid status and applies through the inland stream can apply for a spousal open work permit (SOWP), which lets them work for almost any employer while the permanent-residence application is processed. The open work permit is usually granted once IRCC issues the Acknowledgement of Receipt (AOR) for a complete application. Outland applicants, whose partner is abroad or assessed as if abroad, generally cannot get a SOWP through the sponsorship itself.",
  },
  {
    q: "Is the spousal open work permit only for inland applicants?",
    a: "In practice, yes. The SOWP that flows from a sponsorship is designed for the inland stream, where the sponsored partner is living in Canada with valid status and intends to remain here during processing. Outland applicants are abroad (or assessed as if abroad), so there is no in-Canada open work permit tied to their sponsorship. An outland applicant who happens to be in Canada might still pursue work authorisation through another route, but not through the sponsorship-linked SOWP.",
  },
  {
    q: "When can I apply for a spousal open work permit?",
    a: "You can apply for the SOWP at the same time as the inland sponsorship and permanent-residence application, or afterwards. IRCC generally finalises the open work permit after it issues the Acknowledgement of Receipt (AOR) confirming the sponsorship application is complete. Because of this, keeping valid temporary-resident status in Canada throughout, so you remain eligible, is critical. Many couples submit the SOWP together with the sponsorship package to avoid a gap.",
  },
  {
    q: "Did the January 2025 open work permit changes affect spousal sponsorship?",
    a: "The January 21, 2025 restrictions tightened open work permits for the family members of temporary residents, meaning the spouses of foreign workers and international students. They limited eligibility to certain higher-skilled occupations and programs, and largely removed eligibility for dependent children. Those changes targeted family members of temporary residents, not the family-class spousal sponsorship SOWP. That said, IRCC rules move quickly, so always confirm the current eligibility on canada.ca before you rely on it.",
  },
  {
    q: "How long does a spousal open work permit last?",
    a: "An inland spousal open work permit is typically issued to align with the expected processing of the sponsorship, often up to about two years, and can usually be extended if the permanent-residence decision is still pending. The exact validity is set by the officer and depends on factors like passport expiry and medical validity. Because timelines and validity periods change, confirm the current approach on canada.ca and keep your status valid throughout.",
  },
  {
    q: "Can I work for any employer on a spousal open work permit?",
    a: "An open work permit is not tied to a specific employer, so a SOWP holder can generally work for almost any employer in Canada, full-time or part-time. There are limited exceptions, for example, employers in certain sectors or those that have failed to comply with conditions can be excluded, and the permit does not by itself grant access to regulated professions, which have their own licensing. Always read the conditions printed on your permit.",
  },
  {
    q: "Does the spousal open work permit grant permanent residence?",
    a: "No. The SOWP is a temporary work authorisation that simply lets a sponsored spouse or partner work while the inland sponsorship is processed. Permanent residence comes from the underlying spousal sponsorship application, not from the work permit. The SOWP also does not extend your visitor status on its own, you must keep valid status in Canada for it to remain valid.",
  },
  {
    q: "What happens to my SOWP if the sponsorship is refused?",
    a: "A spousal open work permit is tied to the inland sponsorship. If the sponsorship is refused or withdrawn, the basis for the open work permit falls away, and you would generally need to stop working and review your options to maintain status. This is one reason a complete, well-evidenced application matters so much. A consultation can help you understand the risks before you submit.",
  },
];

export default function SpousalOpenWorkPermitPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Spousal Open Work Permit 2026, Complete RCIC Guide",
            description:
              "Spousal open work permit 2026: how a sponsored spouse can work during inland spousal sponsorship, eligibility and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Spousal open work permit support",
            description:
              "Spousal open work permit 2026: how a sponsored spouse can work during inland spousal sponsorship, eligibility and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Spousal open work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Spousal Open Work Permit", path: PATH },
        ]}
        title={<>Spousal Open Work Permit: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            A <strong>spousal open work permit (SOWP)</strong> lets a sponsored spouse or partner work for almost any
            employer in Canada while an <strong>inland</strong> spousal or common-law sponsorship is being processed, so your family can keep earning while you wait for permanent residence.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship", label: "All family sponsorship routes" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Briefcase className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Work while you wait</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Wondering if your spouse can work during sponsorship? Get an honest read from a licensed RCIC, spousal
                consultations are free.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Spousal sponsorship", href: "/family-sponsorship/spousal-sponsorship", note: "Sponsor a spouse or partner for PR" },
                { label: "Open work permits", href: "/work-permits/open-work-permit", note: "Who qualifies for an open work permit" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The spousal open work permit (SOWP) lets a sponsored spouse or common-law partner work for almost any employer in Canada while their inland spousal sponsorship is processed. It is an open permit, not tied to one employer, and is usually granted after IRCC issues the Acknowledgement of Receipt. It suits inland applicants who are in Canada with valid status. The permit is temporary: permanent residence comes from the underlying sponsorship, not the work permit."
            items={[
              <>The <strong>spousal open work permit (SOWP)</strong> lets a sponsored spouse or partner work while an <strong>inland</strong> spousal/common-law sponsorship is processed.</>,
              <>It is an <strong>open</strong> permit, not tied to one employer, usually granted after IRCC issues the <strong>Acknowledgement of Receipt (AOR)</strong>.</>,
              <>It is for <strong>inland applicants</strong> in Canada with valid status; <strong>outland</strong> applicants generally cannot get a SOWP through the sponsorship.</>,
              <>The <strong>January 2025 open work permit restrictions</strong> targeted family members of temporary residents, <strong>not</strong> family-class spousal sponsorship.</>,
              <>The SOWP is <strong>temporary</strong>, permanent residence comes from the underlying sponsorship, not the work permit.</>,
            ]}
          />

          <h2>What is the spousal open work permit?</h2>
          <p>
            The <strong>spousal open work permit 2026</strong>, usually shortened to <strong>SOWP</strong>, is a work
            authorisation that lets a sponsored spouse or common-law partner work for almost any employer in Canada
            while their <strong>inland</strong> spousal sponsorship application is being processed. It exists to solve a
            real problem: spousal permanent-residence applications take time, and without work authorisation a couple
            could spend many months unable to earn a second income. The SOWP closes that gap. According to IRCC, the
            published service standard for a spouse or common-law partner sponsorship is about <strong>12 months</strong>{" "}
            from a complete application (source: canada.ca, spouse or common-law partner sponsorship, 2026), so being
            able to <strong>work while the spousal sponsorship is processed</strong> matters a great deal.
          </p>
          <p>
            Because it is an <em>open</em> work permit, the SOWP is not tied to a specific employer or job. The
            sponsored partner can take almost any role, full-time or part-time, and change jobs without applying for a
            new permit. In effect it is a form of <strong>bridging work authorisation</strong> that lets the family
            keep earning while permanent residence is decided. It is, however, strictly a temporary status linked to the
            sponsorship. It is not permanent residence, and it is not a standalone right to remain in Canada.
          </p>

          <h2>Who is eligible for a spousal open work permit?</h2>
          <p>
            The <strong>open work permit for a sponsored spouse</strong> is built around the <strong>inland</strong>{" "}
            sponsorship stream. To be eligible, the sponsored partner generally must:
          </p>
          <ul>
            <li>Be the spouse or common-law partner being sponsored through an <strong>inland</strong> spousal/common-law application;</li>
            <li>Be <strong>physically in Canada</strong> with <strong>valid temporary-resident status</strong> (for example as a visitor, worker or student);</li>
            <li>Live at the same address as the sponsor in Canada, consistent with the inland stream; and</li>
            <li>Have a sponsorship application that IRCC has accepted as complete, the open work permit is normally finalised once the <strong>Acknowledgement of Receipt (AOR)</strong> is issued.</li>
          </ul>
          <p>
            This pathway is offered under a long-standing IRCC <strong>public policy</strong> for inland spousal
            applicants, which is why it is sometimes described as the spousal open-work-permit pilot or policy. It is the
            official route for a sponsored partner to work during processing, but it depends on keeping valid status in
            Canada throughout.
          </p>
          <Callout type="brand" title="Inland status is the key requirement">
            The SOWP rests on the sponsored partner being in Canada with <strong>valid status</strong> and remaining in
            the inland stream. If status lapses, eligibility for the open work permit can be lost. Protecting your
            status is one of the most important things we manage on an inland file.
          </Callout>

          <h2>How the SOWP works alongside inland sponsorship</h2>
          <p>
            The <strong>inland spousal open work permit</strong> does not stand alone, it rides on top of the inland
            spousal or common-law sponsorship. The sponsorship application is what leads to permanent residence; the
            SOWP simply lets the sponsored partner earn an income while that decision is pending. Most couples submit
            the open-work-permit application <strong>together with</strong> the sponsorship and permanent-residence
            package so there is no gap, though it can also be filed afterwards.
          </p>
          <DataTable
            headers={["SOWP, eligibility & key facts", "Detail (current 2026 guidance)"]}
            rows={[
              ["Who it's for", "Spouse/common-law partner in an inland sponsorship"],
              ["Where the applicant must be", "In Canada, with valid temporary-resident status"],
              ["Stream", "Inland only (outland generally not eligible)"],
              ["Employer", "Open, almost any employer in Canada"],
              ["Usually granted", "After IRCC issues the Acknowledgement of Receipt (AOR)"],
              ["Typical validity", "Aligned to processing, often up to ~2 years; extendable"],
              ["Leads to PR?", "No, PR comes from the underlying sponsorship"],
              ["January 2025 OWP restrictions", "Targeted family of temp residents, not family-class sponsorship"],
            ]}
            caption="Spousal open work permit at a glance (IRCC, current 2026 guidance). Eligibility and validity move, confirm the current rules on canada.ca."
          />
          <p>
            For the full picture of inland versus outland and how relationship evidence is built, see our{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship guide</a>. For how open work permits
            work more broadly, including other routes to one, see our{" "}
            <a href="/work-permits/open-work-permit">open work permit guide</a>.
          </p>

          <h2>The January 2025 open work permit changes</h2>
          <p>
            On <strong>January 21, 2025</strong>, IRCC introduced <strong>open work permit restrictions</strong> for the
            family members of temporary residents. In broad terms, the spouses of international students now qualify only
            where the student is in a master&apos;s, doctoral or other listed program, and the spouses of foreign workers
            only where the worker is in a higher-skilled (TEER 0/1 or select shortage) occupation with enough time left
            on their permit. Eligibility for most dependent children was removed.
          </p>
          <Callout type="info" title="These changes targeted a different group">
            The January 2025 restrictions apply to the family members of <strong>temporary residents</strong>, the
            spouses of foreign workers and international students. They did <strong>not</strong> change the family-class
            <strong> spousal sponsorship</strong> open work permit described on this page. The inland-sponsorship SOWP
            continues to operate, but because IRCC policy changes quickly, we always confirm the current eligibility on
            canada.ca before advising.
          </Callout>
          <p>
            We flag this because the two routes are easy to confuse. If your spouse is in Canada on your <em>own</em>{" "}
            work or study permit and you are not yet in an inland sponsorship, the January 2025 rules may apply to their
            open work permit. If you have launched an inland spousal sponsorship, the family-class SOWP is the relevant
            route. We help families work out which set of rules governs their situation.
          </p>

          <h2>How to apply for a spousal open work permit</h2>
          <Steps
            steps={[
              { title: "Confirm the inland stream fits", desc: "Check the sponsored partner is in Canada with valid status and that an inland spousal or common-law sponsorship is the right choice over outland." },
              { title: "Prepare the sponsorship package", desc: "Assemble the sponsorship and permanent-residence application with strong, genuine relationship evidence, the SOWP rides on this file." },
              { title: "Add the open work permit application", desc: "Complete the open-work-permit application, usually filed together with the inland sponsorship so there is no gap in coverage." },
              { title: "Submit and pay the fees", desc: "File the sponsorship, PR and open-work-permit applications, pay the fees, and provide biometrics if requested." },
              { title: "Wait for the AOR", desc: "IRCC reviews completeness and issues the Acknowledgement of Receipt (AOR); the open work permit is generally finalised after this point." },
              { title: "Keep status valid & receive the permit", desc: "Maintain valid status in Canada throughout. Once approved, the sponsored partner can work for almost any employer." },
            ]}
          />
          <p>
            The most common, avoidable problems are a sponsorship package that IRCC returns as incomplete, or a lapse in
            the sponsored partner&apos;s status that undermines SOWP eligibility. Working under a licensed RCIC (CICC
            #R706497), our team builds a complete, well-evidenced file and manages the timing so the open work permit
            lands cleanly.
          </p>

          <h2>How long the SOWP lasts</h2>
          <p>
            An inland spousal open work permit is normally issued to track the expected processing of the sponsorship, often up to around <strong>two years</strong>, and can usually be <strong>extended</strong> if the
            permanent-residence decision is still pending when it expires. The precise validity is set by the officer
            and can be shaped by factors such as passport expiry and the validity of any medical exam. Because IRCC
            adjusts these timelines, always confirm the current approach on canada.ca and keep your status valid so the
            permit remains in force.
          </p>

          <h2>Outland applicants and the spousal open work permit</h2>
          <p>
            If you are applying through the <strong>outland</strong> stream, where the sponsored partner is abroad, or
            chooses to be assessed as if abroad, there is <strong>generally no spousal open work permit</strong>{" "}
            available through the sponsorship. The SOWP is an in-Canada measure for partners who are physically here in
            the inland stream. Outland is often the better choice for couples who need to travel during processing, but
            the trade-off is that it does not come with sponsorship-linked work authorisation.
          </p>
          <Callout type="warning" title="Choosing inland for the SOWP, weigh the trade-offs">
            The work permit makes inland attractive, but inland generally expects the sponsored partner to remain in
            Canada, and leaving the country during processing can put the application at risk. Outland is more
            travel-friendly but offers no SOWP. The right choice depends on your work needs, travel plans and status, something we work through with every couple. Read more in our{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship guide</a>.
          </Callout>

          <h2>How Wild Mountain helps</h2>
          <p>
            Spousal and partner sponsorship is our flagship service, and the consultation for it is free. We confirm
            whether inland or outland fits your family, time the open-work-permit application so it lands without a gap,
            protect the sponsored partner&apos;s status, and build the relationship record that the underlying
            sponsorship needs to succeed.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees, and we never guarantee an outcome, no
            honest consultant can, and we are not affiliated with the Government of Canada. What we do promise on every
            inland file is a complete, carefully prepared <strong>spousal open work permit</strong> and sponsorship
            application, plus straight answers at each step.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your sponsorship options</h2>
          <p className="mt-3 text-ink-soft">The spousal open work permit is one piece of an inland sponsorship. We help you put the whole plan together.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Heart} title="Spousal sponsorship" desc="Bring your spouse or partner to Canada as a permanent resident, our flagship service, and the consultation is free." href="/family-sponsorship/spousal-sponsorship" />
            <FeatureCard icon={Briefcase} title="Open work permits" desc="Who qualifies for an open work permit in Canada, and the routes that lead to one beyond sponsorship." href="/work-permits/open-work-permit" />
            <FeatureCard icon={FileText} title="Get started" desc="Not sure if your spouse can work during sponsorship? Get an honest assessment from a licensed RCIC." href="/contact" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Help your spouse work while you wait"
        sub="Book a free spousal consultation with a licensed RCIC for clear guidance on the inland sponsorship and the open work permit, no promises, just honest next steps."
      />
    </>
  );
}
