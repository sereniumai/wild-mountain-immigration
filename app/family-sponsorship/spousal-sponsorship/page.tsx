import type { Metadata } from "next";
import { Heart, FileText, Plane } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/content/youtube-embed";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/spousal-sponsorship";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Spousal Sponsorship Canada 2026",
  titleAbsolute: "Spousal Sponsorship Canada 2026: Inland & Outland",
  description:
    "Spousal sponsorship Canada requirements 2026: who can sponsor, inland vs outland, document checklist, processing time. RCIC-reviewed. Free spousal consult.",
  path: PATH,
  keywords: [
    "spousal sponsorship canada",
    "spousal sponsorship",
    "how to sponsor your spouse",
    "common-law sponsorship canada",
    "inland vs outland spousal sponsorship",
    "spousal sponsorship document checklist",
    "spousal sponsorship canada requirements 2026",
  ],
});

const faqs = [
  {
    q: "How long does spousal sponsorship take?",
    a: "IRCC's published service standard for a spouse or common-law partner sponsorship is about 12 months from a complete application, and it applies to both inland and outland routes. Real-world timelines move with completeness, your country of residence and biometrics. The biggest avoidable delay is an incomplete package that gets returned, which effectively restarts your wait, so accuracy at submission is what protects your timeline. Always check the live IRCC processing-times tool before planning around a date.",
  },
  {
    q: "Should I apply inland or outland for spousal sponsorship?",
    a: "Choose inland when your partner is already in Canada with valid status and intends to stay throughout processing. On that route they may qualify for a Spousal Open Work Permit after the application is acknowledged. Choose outland when your partner is abroad, or when travel during processing matters, because outland is more mobility-friendly. Both routes lead to the same permanent residence. The right choice depends on where your partner lives, whether they need to work, and how much they need to travel.",
  },
  {
    q: "What proof do I need for a genuine relationship?",
    a: "You need to show the relationship is genuine and was not entered into primarily for immigration. Strong evidence includes joint finances (shared accounts, bills, a lease or mortgage), a communication history, photos together over time, proof you have met in person and travelled together, and statements from people who know you as a couple. For common-law partners, you also need proof of 12 months of continuous cohabitation. Thin or disorganised evidence is one of the most common reasons a genuine couple gets a procedural fairness letter.",
  },
  {
    q: "What income do I need to sponsor my spouse?",
    a: "For a spouse, common-law or conjugal partner there is usually no minimum income requirement. You sign an undertaking to support your partner, typically for three years, but you do not have to prove a set income, unlike sponsoring parents or grandparents. There are exceptions, such as when your partner has a dependent child who has their own child, but for most couples no income test applies.",
  },
  {
    q: "Can I sponsor my common-law partner if we aren't married?",
    a: "Yes. You can sponsor a common-law partner if you have lived together in a conjugal relationship for at least 12 months of continuous cohabitation. You do not need to be married. The key difference from a married spouse is the evidence. You must document that you genuinely lived together for that continuous period, with a shared address, joint bills and mail to the same home, on top of the usual proof that the relationship is genuine.",
  },
  {
    q: "Is a sponsored spouse's permanent residence conditional?",
    a: "No. Canada repealed conditional permanent residence in 2017. A sponsored spouse or partner receives unconditional permanent residence, there is no requirement to live together for a set period afterwards to keep status. The relationship must still be genuine and not entered into primarily for an immigration benefit, but once approved your partner holds full PR status with a path to citizenship.",
  },
  {
    q: "Why do spousal sponsorship applications get refused?",
    a: "The most common reasons are thin relationship evidence, an inconsistent or incomplete history that raises genuineness concerns, a missed form or document that causes the package to be returned, or an excluded relationship type. Refusals often turn on how the case is presented rather than the relationship itself. We are an informational and application-preparation practice, we do not provide sponsorship-appeal or tribunal representation, but careful, complete preparation is the best protection against an avoidable refusal.",
  },
  {
    q: "Is the spousal sponsorship consultation really free?",
    a: "Yes. Spousal and partner sponsorship is our flagship service, so the consultation is completely free. You get an honest read on your relationship evidence, the inland-versus-outland decision and your likely timeline before you commit to anything. We work to a clear written service agreement with transparent fees, and we never guarantee an outcome.",
  },
];

export default function SpousalSponsorshipPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Spousal Sponsorship Canada 2026, Complete RCIC Guide",
            description:
              "Spousal sponsorship Canada requirements 2026: who can sponsor, inland vs outland, document checklist, processing time. RCIC-reviewed. Free spousal consult.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Spousal sponsorship application support",
            description:
              "Spousal sponsorship Canada requirements 2026: who can sponsor, inland vs outland, document checklist, processing time. RCIC-reviewed. Free spousal consult.",
            path: PATH,
            serviceType: "Spousal sponsorship immigration consulting",
          }),
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Spousal sponsorship in Canada, explained",
            description:
              "An overview of how spousal and partner sponsorship works in Canada: who can sponsor, inland vs outland, relationship evidence and processing times.",
            thumbnailUrl: "https://i.ytimg.com/vi/J-YYcdnSkcs/hqdefault.jpg",
            contentUrl: "https://www.youtube.com/watch?v=J-YYcdnSkcs",
            embedUrl: "https://www.youtube.com/embed/J-YYcdnSkcs",
            uploadDate: "2024-01-01",
          },
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Spousal Sponsorship", path: PATH },
        ]}
        title={<>Spousal Sponsorship Canada: <span className="text-brand">the 2026 requirements</span></>}
        lede={
          <p>
            <strong>Spousal sponsorship Canada</strong> lets a Canadian citizen or permanent resident bring their spouse,
            common-law or conjugal partner to Canada as a permanent resident, and our consultation for it is free.
            This guide on how to sponsor your spouse covers the 2026 requirements, inland versus outland, the document
            checklist and processing times.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free spousal consultation</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Spousal and partner sponsorship is our flagship, and the consultation is completely free.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Inland sponsorship", href: "/family-sponsorship/spousal-sponsorship/inland", note: "Partner in Canada, work permit option" },
                { label: "Outland sponsorship", href: "/family-sponsorship/spousal-sponsorship/outland", note: "Partner abroad, travel-friendly" },
                { label: "Spousal Open Work Permit", href: "/family-sponsorship/spousal-open-work-permit", note: "Work while your PR is processed" },
                { label: "Super Visa", href: "/family-sponsorship/super-visa", note: "Long stays for parents & grandparents" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Spousal sponsorship Canada lets a Canadian citizen or permanent resident bring their spouse, common-law partner or conjugal partner to Canada as a permanent resident, usually with no minimum income test. You can apply inland (partner already in Canada, with a possible open work permit) or outland (partner abroad and more travel-friendly). The heart of any application is genuine relationship evidence. A sponsored spouse receives unconditional permanent residence, and our consultation is free."
            items={[
              <>You can sponsor a <strong>spouse, common-law partner or conjugal partner</strong>, there is usually <strong>no minimum income test</strong>, and our consultation is free.</>,
              <><strong>Inland</strong> suits a partner already in Canada (with a possible <a href="/family-sponsorship/spousal-open-work-permit">open work permit</a>); <strong>outland</strong> suits a partner abroad and is more travel-friendly.</>,
              <>The heart of any application is <strong>relationship evidence</strong>, proof the relationship is genuine and not for immigration.</>,
              <>IRCC&apos;s service standard is about <strong>12 months</strong> from a complete application, inland or outland.</>,
              <>A sponsored spouse receives <strong>unconditional permanent residence</strong>, conditional PR was repealed in 2017.</>,
            ]}
          />

          <figure className="not-prose my-10">
            <YouTubeEmbed id="J-YYcdnSkcs" title="Spousal sponsorship in Canada, explained" />
            <figcaption className="mt-3 text-center text-sm text-ink-soft">
              Spousal sponsorship in Canada, explained.
            </figcaption>
          </figure>

          <h2>What is spousal sponsorship in Canada?</h2>
          <p>
            Spousal sponsorship is the family-class route that lets a Canadian citizen or permanent resident bring their
            <strong> spouse or partner to Canada as a permanent resident</strong>. As the sponsor, you sign an{" "}
            <em>undertaking</em>, a promise to support your partner financially, and your partner becomes the{" "}
            <em>principal applicant</em>. Once approved, they hold full permanent-resident status, with the right to live,
            work and study anywhere in Canada (outside Quebec, which runs its own process) and a path to citizenship.
          </p>
          <p>
            Spouses and partners make up the large majority of family-class admissions to Canada each year, according to
            IRCC (source: canada.ca, family sponsorship, 2026). Unlike economic programs such as{" "}
            <a href="/express-entry">Express Entry</a>, spousal sponsorship is built on a relationship rather than points:
            there is no Comprehensive Ranking System and, in most cases, no income test. What it does require is proof that
            your relationship is real. It is our flagship service, and the reason our spousal consultation is free.
          </p>

          <h2>Who can sponsor a spouse or partner?</h2>
          <p>
            To sponsor in 2026 you must be at least 18 years old and one of the following: a Canadian citizen, a permanent
            resident, or a person registered under the Canadian Indian Act. You must be able to meet the undertaking. Some
            situations create a temporary bar on sponsoring:
          </p>
          <ul>
            <li>You are in <strong>default</strong> on a previous sponsorship undertaking or an immigration loan.</li>
            <li>You were yourself <strong>sponsored as a spouse or partner</strong> and became a PR less than five years ago, the five-year bar.</li>
            <li>You have certain criminal convictions, or you are subject to a removal order.</li>
          </ul>
          <p>
            A permanent-resident sponsor must also be living in Canada (citizens may sponsor from abroad if they intend to
            return). We confirm your eligibility, and your partner&apos;s, before you start, so a bar or excluded
            relationship does not surface after you have invested time in the application.
          </p>
          <Callout type="brand" title="A note on Quebec">
            Quebec runs its own sponsorship undertaking and selection rules. We do not handle Quebec-destined
            sponsorships, if you and your partner intend to settle in Quebec, you will be directed to the provincial
            process. Everywhere else in Canada, the federal rules in this guide apply.
          </Callout>

          <h2>Spouse, common-law or conjugal partner, which are you?</h2>
          <p>
            Spousal sponsorship covers three relationship types, and your partner must fit one of them. The category you
            fall into changes the evidence you need and, in the case of conjugal partners, whether you can apply at all.
          </p>
          <DataTable
            headers={["Relationship", "What qualifies", "Key evidence"]}
            rows={[
              ["Spouse", "Legally married, with a marriage recognised as valid where it took place and under Canadian law.", "Marriage certificate plus proof the relationship is genuine."],
              ["Common-law partner", "12 months of continuous cohabitation in a conjugal relationship, no marriage required.", "Proof of a shared address and intertwined lives over the full 12 months."],
              ["Conjugal partner", "1+ year in a marriage-like relationship while genuinely barred from living together or marrying. Outside Canada only.", "Proof of commitment plus the barrier that prevented cohabiting or marrying."],
            ]}
            caption="The three spousal-sponsorship relationship types (2026). Conjugal is a narrow category for couples genuinely unable to cohabit or marry."
          />
          <p>
            Most couples are spouses or common-law partners. Whether you want to sponsor your wife or husband as a married
            spouse, or pursue common-law sponsorship in Canada based on 12 months of cohabitation, the relationship test is
            the same: it must be genuine. The <strong>conjugal partner</strong> category is narrow and often misunderstood:
            it is for couples who are genuinely unable to live together or marry, for example because of immigration
            barriers, marital status, or laws in their country, not simply a couple who has chosen not to. If you are unsure
            which category fits, that is exactly what the free consultation is for.
          </p>

          <h2>Inland vs outland spousal sponsorship</h2>
          <p>
            There are two ways to apply, and choosing correctly matters for work authorisation and travel.{" "}
            <strong>Inland</strong> sponsorship is for a partner who is already in Canada with valid status and intends to
            stay throughout processing. <strong>Outland</strong> sponsorship is for a partner who is abroad, or who is in
            Canada but wants the flexibility to travel. Both lead to the same permanent residence; the difference is the
            experience during processing.
          </p>
          <DataTable
            headers={["", "Inland", "Outland"]}
            rows={[
              ["Where the partner is", "In Canada with valid status, intending to stay", "Abroad, or assessed as if abroad"],
              ["Spousal Open Work Permit", "May qualify after the application is acknowledged (AOR)", "Not available through this route"],
              ["Travel during processing", "Leaving Canada can put the application at risk", "Travel-friendly, built for mobility"],
              ["Best when", "Your partner is here and wants to work", "Your partner is abroad, or needs to travel"],
              ["Result", "Permanent residence", "Permanent residence"],
            ]}
            caption="Inland vs outland spousal sponsorship, both lead to permanent residence."
          />
          <p>
            The big practical draw of inland is the <a href="/family-sponsorship/spousal-open-work-permit">Spousal Open
            Work Permit</a>, which can let your partner work while the PR application is processed. The trade-off is
            mobility: leaving Canada during inland processing can jeopardise the application. Outland is more
            travel-friendly and historically the faster-moving route in many regions. We walk through this choice with
            every couple, because the right answer depends on your partner&apos;s location, work needs and travel plans.
            Each route has its own page: <a href="/family-sponsorship/spousal-sponsorship/inland">inland spousal
            sponsorship</a> and <a href="/family-sponsorship/spousal-sponsorship/outland">outland spousal sponsorship</a>.
          </p>

          <h2>The Spousal Open Work Permit option</h2>
          <p>
            If you apply inland, your partner may be able to work in Canada while the permanent-residence application is in
            progress through a <strong>Spousal Open Work Permit (SOWP)</strong>. An open work permit lets your partner work
            for almost any employer rather than being tied to one job. This can make a real financial difference during the
            roughly year-long wait, which is a major reason couples choose the inland route.
          </p>
          <Callout type="info" title="The SOWP is an inland advantage">
            The Spousal Open Work Permit is tied to <strong>inland</strong> spousal sponsorship and is generally available
            after IRCC acknowledges your application. It is not available through the outland route. If your partner needs
            to work in Canada during processing, factor this into the inland-versus-outland decision. Read more on our{" "}
            <a href="/family-sponsorship/spousal-open-work-permit">Spousal Open Work Permit guide</a>.
          </Callout>

          <h2>Proving a genuine relationship: the document checklist</h2>
          <p>
            Whichever route you take, the heart of a spousal application is <strong>relationship evidence</strong>: proof
            that your relationship is genuine and was not entered into primarily for an immigration benefit. Officers look
            for a consistent, well-documented story across several categories. Use the checklist below as a starting point. The strongest applications show the relationship developing over time, not a single snapshot.
          </p>
          <DataTable
            headers={["Evidence category", "Examples to include"]}
            rows={[
              ["Proof of the relationship type", "Marriage certificate (spouse); proof of 12 months' continuous cohabitation (common-law); proof of the barrier to cohabiting/marrying (conjugal)."],
              ["Joint finances", "Shared bank accounts, joint bills or utilities, a lease or mortgage in both names, beneficiary designations, shared insurance."],
              ["Cohabitation & shared life", "Documents showing a shared address, mail, IDs, tenancy or property records over time."],
              ["Communication history", "Call logs, message threads and emails spanning the relationship, especially during any time apart."],
              ["Time together", "Photos together across dates and places, travel itineraries, passport stamps, proof you have met in person."],
              ["Recognition by others", "Statutory declarations from family and friends; invitations, social-media recognition, evidence others see you as a couple."],
            ]}
            caption="Core spousal sponsorship document checklist (2026). Tailor the package to your relationship; confirm current forms on canada.ca."
          />
          <p>
            Thin, inconsistent or poorly organised evidence is one of the most common reasons a genuine couple receives a
            procedural fairness letter or a refusal. The goal is not volume for its own sake but a clear, credible record.
            Working under a licensed RCIC (CICC #R706497), our team helps you assemble and present this evidence so the
            genuineness of your relationship is obvious on the file.
          </p>

          <h2>Income, the undertaking and your obligations</h2>
          <p>
            Every sponsorship rests on an <strong>undertaking</strong>, a binding promise to repay any social assistance
            your sponsored partner receives during a set period. For a spouse, common-law or conjugal partner, the
            undertaking is typically <strong>three years</strong>. The relief that surprises many couples is that there is
            usually <strong>no minimum income requirement</strong> to sponsor a partner, unlike sponsoring parents or
            grandparents.
          </p>
          <p>
            You also sign a sponsorship agreement that sets out your responsibilities and your partner&apos;s. The
            undertaking is a serious, enforceable commitment, it survives a separation or divorce, so it is worth
            understanding before you sign. Where any income test does apply (narrow situations involving certain dependent
            children), IRCC relies on your Canada Revenue Agency Notices of Assessment, so your filed taxes matter.
          </p>
          <Callout type="success" title="Spousal sponsorship consultations are free">
            Because spousal and partner sponsorship is our flagship, we offer the consultation at no charge. You get an
            honest read on your relationship evidence, the inland-versus-outland choice and your timeline before you commit
            to anything.
          </Callout>

          <h2>Processing times: how long does spousal sponsorship take?</h2>
          <p>
            The IRCC service standard for a spouse or common-law partner sponsorship is about{" "}
            <strong>12 months</strong> from a complete application, and this applies to both the inland and outland
            routes. That clock assumes a complete, accurate package; an application returned as incomplete effectively
            restarts your wait. Biometrics, your partner&apos;s country of residence, and the depth of your relationship
            evidence all influence the real timeline.
          </p>
          <p>
            Processing times are updated regularly, so check the live IRCC processing-times tool for the current estimate
            before you plan around a date. The single biggest factor you control is the quality of the submission, and
            that is where most of the avoidable delay lives.
          </p>

          <h2>How to apply for spousal sponsorship: step by step</h2>
          <Steps
            steps={[
              { title: "Confirm you can sponsor", desc: "Check you are an eligible sponsor (citizen, PR or registered Indian, 18+) with no bar such as the five-year partner bar or a default." },
              { title: "Confirm the relationship type", desc: "Establish whether you are sponsoring a spouse, common-law partner or conjugal partner, each has its own evidence requirements." },
              { title: "Choose inland or outland", desc: "Decide based on where your partner lives, whether they need a Spousal Open Work Permit, and how much they need to travel." },
              { title: "Build the relationship evidence", desc: "Assemble the document checklist: joint finances, communication, photos, cohabitation proof and supporting statements." },
              { title: "Submit a complete application", desc: "File the sponsorship and the permanent-residence application together, with every form and document. Completeness protects your timeline." },
              { title: "Respond and land", desc: "Answer any procedural fairness letter promptly, complete biometrics and medicals, and your partner confirms permanent residence." },
            ]}
          />

          <h2>Common refusal pitfalls (and how to avoid them)</h2>
          <p>
            Spousal refusals usually come down to how a case is built, not the relationship itself. The recurring pitfalls
            are worth knowing before you submit:
          </p>
          <ul>
            <li><strong>Thin relationship evidence</strong>, too few categories covered, or a record that only captures a single moment rather than the relationship over time.</li>
            <li><strong>Inconsistencies</strong>, dates, addresses or histories that do not line up across forms and documents, which raise genuineness concerns.</li>
            <li><strong>An incomplete package</strong>, a missing form or signature that gets the application returned, restarting the clock.</li>
            <li><strong>Wrong route or category</strong>, choosing inland when travel is essential, or claiming a category the relationship does not meet.</li>
          </ul>
          <Callout type="warning" title="We are informational, not an appeals service">
            This page is informational. If a sponsorship is refused, we can give you an honest assessment of your
            options, but note that we do <strong>not</strong> provide sponsorship-appeal or tribunal (IAD)
            representation. The best protection is a careful, complete application the first time, which is the service we
            focus on.
          </Callout>

          <h2>How Wild Mountain helps with spousal sponsorship</h2>
          <p>
            We make spousal and partner sponsorship our priority. Working under a licensed RCIC (CICC #R706497), our team
            assesses your eligibility, recommends the right stream, and builds a relationship record that stands up to
            scrutiny, catching the issues that cause avoidable refusals before they reach an officer. We represent you
            with IRCC throughout the process.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees, and we never guarantee an outcome, no
            honest consultant can. What we do promise is a careful, complete application and straight answers. Because
            spousal sponsorship Canada is our flagship, the consultation is free, so there is no cost to get an honest read
            on your case.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your spousal sponsorship options</h2>
          <p className="mt-3 text-ink-soft">Inland or outland, with or without a work permit, we help you choose the route that fits.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Heart} title="Inland sponsorship" desc="Your partner is in Canada and wants to stay, with the option of a Spousal Open Work Permit while you wait." href="/family-sponsorship/spousal-sponsorship/inland" />
            <FeatureCard icon={Plane} title="Outland sponsorship" desc="Your partner is abroad or needs to travel, the more mobility-friendly route to permanent residence." href="/family-sponsorship/spousal-sponsorship/outland" />
            <FeatureCard icon={FileText} title="Spousal Open Work Permit" desc="Let your partner work in Canada while the permanent-residence application is processed." href="/family-sponsorship/spousal-open-work-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Bring your spouse or partner to Canada"
        sub="Spousal sponsorship consultations are free. Book a no-pressure session with a licensed RCIC and get an honest read on your relationship evidence, route and timeline."
      />
    </>
  );
}
