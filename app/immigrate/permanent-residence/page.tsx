import type { Metadata } from "next";
import { Rocket, Map, Heart, Building2, CreditCard, RefreshCw, Clock, Stamp } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/immigrate/permanent-residence";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canadian Permanent Residence",
  titleAbsolute: "Permanent Residence in Canada 2026: How to Get PR",
  description:
    "Canadian permanent residence explained: what PR is, your rights and obligations, every route to PR, the PR card and citizenship. Map your route with us.",
  path: PATH,
  keywords: [
    "canadian permanent residence",
    "permanent resident canada",
    "how to get pr in canada",
    "routes to permanent residence",
    "pr residency obligation",
  ],
});

const faqs = [
  {
    q: "What is a permanent resident of Canada?",
    a: "A permanent resident is someone who has been granted the right to live, work and study anywhere in Canada indefinitely, but who is not yet a Canadian citizen. Permanent residents hold most of the rights of citizens, including access to healthcare and the protection of Canadian law, and they carry a PR card as proof of status. They are not Canadian citizens, so they cannot vote or hold a Canadian passport, and they remain citizens of their home country.",
  },
  {
    q: "How do I get permanent residence in Canada?",
    a: "There are several routes. Express Entry is the fastest federal system for skilled workers, the Provincial Nominee Programs let provinces nominate workers they need, family sponsorship reunites close relatives, and business routes such as the Start-up Visa target entrepreneurs. The right route depends on your profile: your age, education, work experience, language, any Canadian job offer, and whether you have close family already in Canada. We assess your situation and choose the route where you are most competitive.",
  },
  {
    q: "What is the difference between PR and citizenship?",
    a: "Permanent residence gives you the right to live, work and study in Canada indefinitely, but you remain a citizen of your home country and cannot vote or hold a Canadian passport. Citizenship is the next step: after meeting the physical presence and other requirements, a permanent resident can apply to become a citizen, gaining the right to vote, to hold a Canadian passport, and freedom from any residency obligation. Most permanent residents become eligible for citizenship around three years after landing.",
  },
  {
    q: "Do permanent residents have to live in Canada?",
    a: "Yes, to keep PR status you must meet the residency obligation: being physically present in Canada for at least 730 days in every rolling five-year period. Certain time abroad can still count, such as time accompanying a Canadian citizen spouse or working abroad for a Canadian business. Failing to meet the obligation can put your status at risk, so we advise filing accurately and planning travel carefully. Our residency obligation guide explains what counts.",
  },
  {
    q: "How long is PR status valid?",
    a: "Permanent resident status itself does not expire as long as you meet the residency obligation and do not lose it through other means. What expires is the PR card, which is usually valid for five years and serves as proof of your status when you travel. When the card nears expiry you apply to renew it. Letting the card lapse does not by itself end your status, but it can complicate travel, so most people renew before it expires.",
  },
  {
    q: "Does permanent residence lead to citizenship?",
    a: "Yes. Permanent residence is the foundation for Canadian citizenship. Once you have held PR and been physically present in Canada for at least 1,095 days in the five years before you apply, and you meet the language, tax and other requirements, you can apply for a citizenship grant. Many people see PR as the goal in itself, while others treat it as the step before citizenship; both are valid, and we plan your PR with your longer-term goals in mind.",
  },
  {
    q: "Can my family be included in my PR application?",
    a: "In most economic routes, yes. Your spouse or common-law partner and your dependent children can usually be included as accompanying family members on your permanent residence application, so the whole family lands together. Each accompanying family member is assessed and carries their own fees, and dependent children must meet the age and dependency rules. Where family cannot be included, family sponsorship may be the route to bring them later.",
  },
  {
    q: "What rights do permanent residents have?",
    a: "Permanent residents can live, work and study anywhere in Canada, access publicly funded healthcare and most social benefits, and enjoy the protection of Canadian law and the Charter. They cannot vote in elections, run for office, hold a Canadian passport, or hold certain jobs that require high-level security clearance or citizenship. With those exceptions, day-to-day life as a permanent resident is very close to that of a citizen.",
  },
  {
    q: "Do I need a consultant to apply for PR?",
    a: "You can apply yourself, but permanent residence applications are detailed and route selection matters: choosing the wrong program, or a thin application, can cost you months. Working under a licensed RCIC (CICC #R706497), our team assesses your profile, chooses the route where you are most competitive and builds a complete application. We represent you with IRCC entirely online.",
  },
];

export default function PermanentResidencePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Canadian Permanent Residence: The Complete 2026 Guide",
            description:
              "Canadian permanent residence explained: what PR is, your rights and obligations, the routes to PR, the PR card and the path to citizenship.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-18",
          }),
          serviceLd({
            name: "Canadian permanent residence support",
            description:
              "Canadian permanent residence explained: what PR is, your rights and obligations, the routes to PR, the PR card and the path to citizenship.",
            path: PATH,
            serviceType: "Permanent residence immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Immigrate to Canada"
        crumbs={[
          { name: "Immigrate to Canada", path: "/immigrate" },
          { name: "Permanent Residence", path: PATH },
        ]}
        title={<>Canadian <span className="text-brand">permanent residence</span></>}
        lede={
          <p>
            <strong>Canadian permanent residence</strong> gives you the right to live, work and study anywhere in
            Canada indefinitely, with most of the rights of a citizen and a clear path to citizenship. This guide
            explains what PR is, the rights and obligations that come with it, every route to get there, and how the
            PR card and residency obligation work.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/express-entry", label: "Explore Express Entry" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Rocket className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Ready to pursue PR?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us your situation and our team will map the permanent residence route that fits your profile.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The fastest federal PR route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Provinces nominate workers they need" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "Reunite close relatives in Canada" },
                { label: "PR card", href: "/immigrate/pr-card", note: "Your proof of permanent resident status" },
                { label: "Path to citizenship", href: "/citizenship", note: "Where permanent residence leads" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Canadian permanent residence lets you live, work and study anywhere in Canada indefinitely, with most of the rights of a citizen except voting and holding a Canadian passport. You can reach PR through Express Entry, a Provincial Nominee Program, family sponsorship or a business route. Your status is proven by a PR card valid for five years. To keep it, you must meet the residency obligation of 730 days in every five-year period. PR is also the foundation for Canadian citizenship."
            items={[
              <>PR lets you <strong>live, work and study</strong> anywhere in Canada indefinitely, with most rights of a citizen.</>,
              <>Routes include <a href="/express-entry">Express Entry</a>, the <a href="/pnp">PNPs</a>, <a href="/family-sponsorship">family sponsorship</a> and <a href="/start-up-visa">business</a> programs.</>,
              <>Your status is proven by a <a href="/immigrate/pr-card">PR card</a>, usually valid for <strong>five years</strong>.</>,
              <>To keep PR you must meet the <a href="/immigrate/residency-obligation">residency obligation</a>: 730 days in every 5 years.</>,
              <>PR is the foundation for <a href="/citizenship">Canadian citizenship</a>, usually around three years after landing.</>,
            ]}
          />

          <h2>What is Canadian permanent residence?</h2>
          <p>
            <strong>Canadian permanent residence (PR)</strong> is a status granted to someone who is not a Canadian
            citizen but has the right to live, work and study anywhere in Canada indefinitely. A permanent resident
            holds most of the rights enjoyed by citizens, including access to publicly funded healthcare and the
            protection of Canadian law, and carries a <a href="/immigrate/pr-card">PR card</a> as proof of status. PR
            is the status most economic and family immigrants are aiming for, and it is the foundation for{" "}
            <a href="/citizenship">Canadian citizenship</a>.
          </p>
          <p>
            A permanent resident is not a Canadian citizen. You remain a citizen of your home country, you cannot vote
            or hold a Canadian passport, and your status carries a residency obligation you must keep meeting. The
            sections below set out the rights and obligations, the routes to PR, and how the PR card, residency
            obligation and citizenship all fit together. Figures and rules reflect IRCC policy current to May 2026;
            confirm the latest on canada.ca.
          </p>

          <h2>Rights and obligations of permanent residents</h2>
          <p>
            PR is close to citizenship in day-to-day life, but not identical. The table below sets out what you can
            and cannot do as a permanent resident.
          </p>
          <DataTable
            headers={["Permanent residents can", "Permanent residents cannot"]}
            rows={[
              ["Live, work and study anywhere in Canada", "Vote in elections or run for office"],
              ["Access publicly funded healthcare and most social benefits", "Hold a Canadian passport (you keep your own nationality)"],
              ["Receive the protection of Canadian law and the Charter", "Hold jobs needing high-level security clearance or citizenship"],
              ["Apply for citizenship once eligible", "Ignore the residency obligation without risking status"],
            ]}
            caption="Permanent resident rights and limits (2026). Confirm current details on canada.ca."
          />
          <p>
            The key obligation is the <a href="/immigrate/residency-obligation">residency obligation</a>: you must be
            physically present in Canada for at least <strong>730 days in every rolling five-year period</strong>.
            Some time abroad can still count, such as time accompanying a Canadian citizen spouse or working abroad
            for a Canadian business. Failing to meet the obligation can put your status at risk, so we advise filing
            accurately and planning travel carefully.
          </p>

          <h2>What are the routes to permanent residence?</h2>
          <p>
            There is no single way to become a permanent resident. Canada runs several streams, broadly economic,
            family and business, and the right one depends on your profile. The table gives a quick comparison, and
            the feature cards below link to each route in detail.
          </p>
          <DataTable
            headers={["Route", "Best for", "Notes"]}
            rows={[
              ["Express Entry", "Skilled workers with education and experience", "The fastest federal route to PR"],
              ["Provincial Nominee Program", "Workers a specific province needs", "A nomination adds 600 CRS points in Express Entry"],
              ["Family sponsorship", "Spouses, partners and close relatives of Canadians and PRs", "Relationship-based, not points-based"],
              ["Business immigration", "Entrepreneurs and innovators", "The Start-up Visa and self-employed routes"],
            ]}
            caption="The main routes to Canadian permanent residence (2026). The right one depends on your profile."
          />
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route to PR for skilled workers, scored under the Comprehensive Ranking System." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Provinces nominate workers they need; a nomination adds a decisive 600 CRS points." href="/pnp" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Bring a spouse, partner or close relative to Canada as a permanent resident." href="/family-sponsorship" />
            <FeatureCard icon={Building2} title="Start-up Visa" desc="A direct-to-PR route for entrepreneurs with a qualifying business and designated support." href="/start-up-visa" />
          </FeatureGrid>

          <h2>Landing and the PR card</h2>
          <p>
            When IRCC approves your file you receive a <strong>Confirmation of Permanent Residence (COPR)</strong>, the
            document that formalises your status at landing. Landing is the moment you officially become a permanent
            resident, either at a port of entry or, increasingly, through an online confirmation process. Your first{" "}
            <a href="/immigrate/pr-card">PR card</a> is then issued and mailed to your Canadian address.
          </p>
          <p>
            Your PR card is the wallet-sized document that proves your permanent resident status, especially when you
            travel back to Canada on a commercial carrier. It is usually valid for <strong>five years</strong>.
            Importantly, the card is proof of status, not the status itself: letting the card expire does not end your
            PR, but it can complicate travel, so most people renew before it lapses. When the card nears expiry you
            apply for a <a href="/immigrate/pr-card-renewal">PR card renewal</a>. If you are abroad without a valid
            card, you apply instead for a <strong>permanent resident travel document (PRTD)</strong> to board a flight
            back to Canada.
          </p>

          <h2>The residency obligation</h2>
          <p>
            To keep PR, you must meet the <a href="/immigrate/residency-obligation">residency obligation</a> of being
            physically present in Canada for at least <strong>730 days in every five-year period</strong>. Certain
            days abroad can count toward this, including time spent accompanying a Canadian citizen spouse or
            common-law partner, or working abroad full-time for a Canadian business. Because the calculation matters
            so much, we advise counting carefully, filing accurately and planning extended travel with the obligation
            in mind.
          </p>
          <Callout type="brand" title="We keep this neutral and practical">
            Our role is to help you plan and file accurately so you stay onside the residency obligation. Acting after
            a failed obligation is outside our standard service; what we do is help you understand the rule, count what
            counts, and plan travel so the question never arises.
          </Callout>

          <h2>The path to citizenship</h2>
          <p>
            For many people, PR is the step before <a href="/citizenship">Canadian citizenship</a>. Once you have held
            permanent residence and been physically present in Canada for at least <strong>1,095 days</strong> in the
            five years before you apply, and you meet the language, tax and other{" "}
            <a href="/citizenship/requirements">citizenship requirements</a>, you can apply for a citizenship grant.
            Most permanent residents who remain in Canada continuously become eligible around three years after
            landing. We plan your PR with your longer-term goals in mind, whether PR is the destination or a
            stepping stone.
          </p>

          <h2>How to pursue permanent residence, step by step</h2>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your age, education, experience, language and any Canadian job offer or family to find the route where you are strongest." },
              { title: "Choose and prepare the route", desc: "We map the pathway, whether Express Entry, a PNP, family sponsorship or a business route, and prepare a complete application with clear written fees, including the right of permanent residence fee and the fees for any accompanying family members." },
              { title: "Apply, land and plan ahead", desc: "We represent you with IRCC through to landing, then map the PR card, residency obligation and path to citizenship." },
            ]}
          />

          <h2>How Wild Mountain helps with permanent residence</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team assesses your profile honestly, chooses the route
            where you are most competitive, and builds a complete, accurate application for IRCC. We represent clients
            entirely online, by video call and secure document sharing, and we plan your Canadian permanent residence
            with any accompanying family members, the PR card, the residency obligation and the path to citizenship all
            in view, from landing through to citizenship.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Manage your PR status</h2>
          <p className="mt-3 text-ink-soft">From the PR card to the residency obligation and the path to citizenship.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={CreditCard} title="PR card" desc="What the PR card is, its five-year validity, what it is used for and applying for your first card." href="/immigrate/pr-card" />
            <FeatureCard icon={RefreshCw} title="PR card renewal" desc="When and how to renew, the documents you need, and travelling while your renewal is in progress." href="/immigrate/pr-card-renewal" />
            <FeatureCard icon={Clock} title="Residency obligation" desc="The 730-days-in-5-years rule, what time abroad counts and how to plan travel to stay onside." href="/immigrate/residency-obligation" />
            <FeatureCard icon={Stamp} title="Canadian citizenship" desc="Where permanent residence leads, with the 1,095-day rule, the test and the oath." href="/citizenship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make Canada your permanent home"
        sub="Tell us about your situation and our licensed team will map your best route to permanent residence, with honest advice and clear fees."
      />
    </>
  );
}
