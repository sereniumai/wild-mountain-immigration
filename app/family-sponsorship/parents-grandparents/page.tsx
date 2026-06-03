import type { Metadata } from "next";
import { Plane, Users, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/parents-grandparents";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Parents and Grandparents Program 2026",
  titleAbsolute: "Parents and Grandparents Program (PGP) 2026",
  description:
    "Parents and Grandparents Program 2026: the PGP lottery, income requirement, undertaking and the Super Visa alternative. Talk to a licensed RCIC.",
  path: PATH,
  keywords: [
    "parents and grandparents program 2026",
    "pgp 2026",
    "sponsor parents to canada",
    "is the pgp open 2026",
    "pgp income requirement",
    "super visa alternative",
  ],
});

const faqs = [
  {
    q: "Is the PGP open in 2026?",
    a: "No. IRCC has not opened a new Interest to Sponsor intake for the Parents and Grandparents Program (PGP) in 2026. The 2025 round invited applicants only from the existing 2020 interest pool and closed in October 2025. Because there is no confirmed new PGP intake this year, the Super Visa is the practical way to reunite with parents and grandparents for long stays. Always confirm the current status on canada.ca, as IRCC can update the program at any time.",
  },
  {
    q: "What income do I need to sponsor my parents through the PGP?",
    a: "If you are invited to apply through the PGP, you must meet the Minimum Necessary Income (MNI), which is the Low Income Cut-Off (LICO) plus 30%, and you must meet it for each of the three tax years before you apply. IRCC checks this against your Canada Revenue Agency Notices of Assessment, so your filed taxes matter. The income figure rises with family size, which counts everyone you are responsible for plus the parents or grandparents you are sponsoring. Confirm the current LICO + 30% table on canada.ca before you rely on it.",
  },
  {
    q: "Should I choose the PGP or the Super Visa?",
    a: "It depends on your goal. The PGP leads to permanent residence but has no confirmed 2026 intake, runs as a lottery and carries a 20-year undertaking with a strict income test. The Super Visa is open year-round, lets parents and grandparents stay up to 5 years per entry on a visa valid for up to 10 years, and can be applied for now, but it is visitor status, not permanent residence. For most families this year, the Super Visa is the practical route while the PGP remains uncertain.",
  },
  {
    q: "How does the PGP lottery work?",
    a: "When the PGP is open, you first submit a free Interest to Sponsor form during a set window. IRCC then randomly selects, or draws, a limited number of people from that pool and sends them an invitation to apply. Only those invited can submit a full sponsorship application. Submitting the interest form does not guarantee an invitation, it places you in the pool. In 2025, IRCC invited only from the 2020 pool rather than opening a new one.",
  },
  {
    q: "How long is the PGP undertaking?",
    a: "The sponsorship undertaking for parents and grandparents is 20 years (longer than the 3-year undertaking for a spouse or partner). During that period you are financially responsible for the people you sponsor and must repay any social assistance they receive. This long commitment is one reason the PGP carries a strict income test across three tax years.",
  },
  {
    q: "Can I sponsor my parents to Canada if I am a permanent resident?",
    a: "Yes. Canadian citizens and permanent residents who are at least 18 years old can sponsor parents and grandparents through the PGP, provided they meet the income requirement and are not subject to a bar (such as a default on a previous undertaking). The host for a Super Visa must also be a Canadian citizen or permanent resident. We confirm your eligibility before you start.",
  },
  {
    q: "How long does it take to bring my parents to Canada?",
    a: "There is no single answer. The PGP depends entirely on whether IRCC opens an intake and whether you are invited. With no confirmed 2026 intake, there is no application timeline this year. A Super Visa, by contrast, can be applied for now and is often decided within a few months, depending on the visa office and your country of residence. Check the live processing-time tool on canada.ca for current figures.",
  },
  {
    q: "Do I need a consultant for the PGP or a Super Visa?",
    a: "You can apply yourself, but small errors are common, avoidable reasons for refusal: a missed income year, an insurance policy that falls short, or an incomplete form. Working under a licensed RCIC (CICC #R706497), our team reviews your eligibility and every document before submission and represents you with IRCC. We will help you prepare a strong Super Visa application now and position you for a future PGP round.",
  },
];

export default function ParentsGrandparentsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Parents and Grandparents Program (PGP) 2026, Complete RCIC Guide",
            description:
              "Parents and Grandparents Program 2026: PGP lottery, income requirement, undertaking and the Super Visa alternative. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Parents and grandparents sponsorship support",
            description:
              "Parents and Grandparents Program 2026: PGP lottery, income requirement, undertaking and the Super Visa alternative. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "Parents and grandparents immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Family Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Parents & Grandparents", path: PATH },
        ]}
        title={<>Parents and Grandparents Program: <span className="text-brand">the 2026 guide</span></>}
        lede={
          <p>
            <strong>The Parents and Grandparents Program (PGP) lets Canadian citizens and permanent residents sponsor
            their parents and grandparents</strong> for permanent residence through a randomised invitation lottery, but there is no confirmed new intake for 2026, so the Super Visa is the practical route to reunite this year.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship/super-visa", label: "Explore the Super Visa" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Plane className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Reunite this year</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With no confirmed PGP intake, the Super Visa is the practical way to bring parents and grandparents to
                Canada now. Get an honest read from a licensed RCIC.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Super Visa", href: "/family-sponsorship/super-visa", note: "Open year-round, up to 5 years per stay" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Spousal sponsorship", href: "/family-sponsorship/spousal-sponsorship", note: "Sponsor a spouse or partner" },
                { label: "Get started", href: "/contact", note: "Honest advice from a licensed RCIC" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Parents and Grandparents Program (PGP) lets Canadian citizens and permanent residents sponsor their parents and grandparents for permanent residence through a randomised interest-to-sponsor lottery. For 2026 there is no confirmed new intake, so the Super Visa is the practical year-round route to reunite families now. The PGP also carries a strict income test (the Minimum Necessary Income, LICO plus 30 percent across three tax years) and a 20-year undertaking."
            items={[
              <>The <strong>PGP</strong> lets citizens and permanent residents sponsor <strong>parents and grandparents</strong> for permanent residence through an interest-to-sponsor lottery.</>,
              <>For 2026 there is <strong>no confirmed new PGP intake</strong>, the 2025 round invited only from the existing 2020 pool.</>,
              <>The PGP carries a strict income test, the <strong>Minimum Necessary Income (LICO + 30%)</strong> across three tax years, and a <strong>20-year undertaking</strong>.</>,
              <>The <a href="/family-sponsorship/super-visa">Super Visa</a> is the practical alternative: it is <strong>open year-round</strong> and allows stays of <strong>up to 5 years per entry</strong>.</>,
              <>The Super Visa is <strong>visitor status, not permanent residence</strong>, but it reunites families now while the PGP remains uncertain.</>,
            ]}
          />

          <h2>What is the Parents and Grandparents Program?</h2>
          <p>
            The <strong>Parents and Grandparents Program (PGP)</strong> is the family-class route that lets a Canadian
            citizen or permanent resident sponsor their <strong>parents and grandparents</strong> to become permanent
            residents of Canada. Unlike spousal sponsorship, the PGP does not run on a first-come basis, IRCC manages
            demand through a randomised <em>interest-to-sponsor</em> lottery.</p>
          <p>You submit a free Interest to Sponsor
            form, and IRCC invites a limited number of people from the pool to apply. According to IRCC, the 2025 round
            drew only from the existing 2020 interest pool and closed in October 2025, with no new pool opened (source:
            canada.ca, sponsor your parents and grandparents, 2026).
          </p>
          <p>
            Because the PGP is a capped lottery rather than an open stream, getting an invitation is not guaranteed even
            if you are fully eligible. That uncertainty, combined with the lack of a confirmed 2026 intake, is why so
            many families turn to the <a href="/family-sponsorship/super-visa">Super Visa</a> as a way to reunite now.
            We explain both routes below so you can choose the one that fits your situation.
          </p>

          <h2>Is the PGP open in 2026?</h2>
          <p>
            As things stand, <strong>there is no confirmed new PGP intake for 2026</strong>. IRCC has limited the
            program in recent years and, in 2025, sent invitations only to people already in the 2020 interest pool
            rather than opening a fresh Interest to Sponsor intake window. No new pool was created, and IRCC has not
            announced a new application intake for 2026. The program still exists, it is simply not accepting new
            interest submissions right now.
          </p>
          <Callout type="warning" title="No confirmed new PGP intake for 2026, consider the Super Visa">
            Because there is no confirmed new PGP application stream this year, the practical way to bring parents and
            grandparents to Canada for long stays is the <a href="/family-sponsorship/super-visa">Super Visa</a>. It
            is open year-round, allows stays of up to five years per visit on a multiple-entry visa valid for up to ten
            years, and can be applied for now. It is not permanent residence, but it reunites families today.
          </Callout>
          <p>
            Program status can change, and IRCC sometimes announces a new intake with little notice. Always confirm the
            current PGP status directly on canada.ca before you plan around it. If a new pool does open, the best
            position to be in is ready, with your eligibility confirmed and your income documents in order.
          </p>

          <h2>How the PGP lottery works</h2>
          <p>
            When the PGP is open, the process runs in two stages. Understanding the difference between the interest
            form and the actual application matters, because only one of them is a sponsorship:
          </p>
          <Steps
            steps={[
              { title: "Submit the Interest to Sponsor form", desc: "During a set window, you complete a free online Interest to Sponsor form. This places you in the pool, it is not an application and does not commit you to anything." },
              { title: "IRCC draws from the pool", desc: "IRCC randomly selects a limited number of people from the pool and sends them an invitation to apply. Being in the pool does not guarantee an invitation." },
              { title: "Apply if invited", desc: "Only people who receive an invitation can submit a full sponsorship and permanent-residence application, including proof you meet the income requirement." },
            ]}
          />
          <p>
            In 2025, rather than opening a new interest window, IRCC invited applicants only from the 2020 pool. That
            is the heart of the 2026 problem: with no new pool and no new intake announced, there is currently no way
            to enter the PGP queue. This is precisely the gap the Super Visa fills.
          </p>

          <h2>The PGP income requirement</h2>
          <p>
            If you are invited to apply, the PGP carries a real <strong>income requirement</strong>, one of the
            strictest in the family class. You must meet the <abbr title="Minimum Necessary Income">MNI</abbr>, which
            is the <strong>Low Income Cut-Off (LICO) plus 30%</strong>, and you must meet it for <strong>each of the
            three tax years</strong> before you apply. IRCC verifies this against your Canada Revenue Agency Notices of
            Assessment, so your filed taxes, not just your current salary, are what counts.
          </p>
          <DataTable
            headers={["PGP income requirement", "Detail"]}
            rows={[
              ["Income test", "Minimum Necessary Income (MNI) = LICO + 30%"],
              ["Years assessed", "Each of the 3 tax years before you apply"],
              ["Proof IRCC uses", "Canada Revenue Agency Notices of Assessment"],
              ["Family size counts", "Everyone you support, plus the parents/grandparents sponsored"],
              ["Undertaking length", "20 years (financial responsibility)"],
            ]}
            caption="PGP income and undertaking rules (2026). The LICO + 30% figures are revised yearly, confirm the current table on canada.ca."
          />
          <p>
            Family size is the detail that catches people out. It counts everyone you are already responsible for,
            <em> plus</em> the parents and grandparents you intend to sponsor, which raises the income you must show.
            Because the figures are set against the LICO table, which IRCC updates each year, always verify the
            current numbers on canada.ca before you rely on them. Where a co-signer (such as a spouse) is allowed,
            their income can help meet the threshold.
          </p>

          <h2>The Super Visa: the practical 2026 alternative</h2>
          <p>
            With no confirmed PGP intake, the <strong>Super Visa</strong> is the route most families use to reunite
            with parents and grandparents this year. It is a long-stay visitor visa built specifically for the parents
            and grandparents of Canadian citizens and permanent residents. It does not grant permanent residence, but
            it is open year-round, can be applied for now, and allows remarkably long, uninterrupted visits.
          </p>
          <DataTable
            headers={["Feature", "PGP (sponsorship)", "Super Visa"]}
            rows={[
              ["Result", "Permanent residence", "Long-stay visitor status"],
              ["Open in 2026?", "No confirmed new intake", "Yes, open year-round"],
              ["How you get in", "Interest-to-sponsor lottery", "Apply any time"],
              ["Length of stay", "Permanent", "Up to 5 years per entry"],
              ["Visa validity", "N/A (PR)", "Multiple entry, up to 10 years"],
              ["Income test", "MNI (LICO + 30%), 3 tax years", "LICO for household size"],
              ["Insurance required", "No", "Yes, $100,000, valid 1 year"],
              ["Undertaking", "20 years", "None (host signs invitation)"],
            ]}
            caption="PGP vs Super Visa (2026). The Super Visa is the practical route while the PGP has no confirmed intake."
          />
          <Callout type="info" title="2026 update: Super Visa income calculation eased">
            As of <strong>March 31, 2026</strong>, IRCC eased how host income is counted for the Super Visa, a host
            may now rely on either of the two previous tax years, and in some situations the visiting parent&apos;s own
            income can be added to help meet LICO. Read the full breakdown on our{" "}
            <a href="/family-sponsorship/super-visa">Super Visa guide</a>.
          </Callout>
          <p>
            The Super Visa has its own requirements, the host meets a LICO income threshold and the visitor holds at
            least one year of qualifying medical insurance with minimum coverage of CAD $100,000. It is not a path to
            permanent residence, and a parent on a Super Visa cannot work. But for stays measured in years rather than
            months, it is the strongest tool available in 2026.
          </p>

          <h2>PGP eligibility: who can sponsor and be sponsored</h2>
          <p>
            To sponsor through the PGP, when it is open, you must be at least 18 years old and a Canadian citizen, a
            permanent resident, or a person registered under the Canadian Indian Act. You must intend to sponsor your
            own parents or grandparents (including step-parents and step-grandparents), meet the income requirement,
            and not be subject to a bar. Some situations prevent you from sponsoring:
          </p>
          <ul>
            <li>You are in <strong>default</strong> on a previous sponsorship undertaking or an immigration loan.</li>
            <li>You cannot meet the <strong>Minimum Necessary Income</strong> across all three required tax years.</li>
            <li>You have certain criminal convictions, are bankrupt, or are subject to a removal order.</li>
          </ul>
          <Callout type="brand" title="A note on Quebec">
            Quebec runs its own sponsorship undertaking and income rules, and the PGP undertaking length differs there.
            We do not handle Quebec-destined sponsorships, if you and your parents intend to settle in Quebec, you will
            be directed to the provincial process. Everywhere else in Canada, the federal rules above apply.
          </Callout>

          <h2>How to prepare while the PGP is closed</h2>
          <p>
            You cannot enter the PGP pool when there is no open intake, but you are not powerless. The families who
            move fastest when an intake reopens are the ones who prepared in advance, and in the meantime the Super
            Visa keeps reunification on the table:
          </p>
          <Steps
            steps={[
              { title: "Apply for a Super Visa now", desc: "If your goal is to have a parent or grandparent in Canada soon, the Super Visa is open year-round and is the practical route this year." },
              { title: "Get your income in order", desc: "File your taxes and keep your Notices of Assessment ready, so you can prove the Minimum Necessary Income across three years if a PGP intake reopens." },
              { title: "Confirm your eligibility", desc: "Check you are an eligible sponsor with no bar, such as a default, so you are ready to submit an Interest to Sponsor form the moment one opens." },
              { title: "Monitor IRCC announcements", desc: "Watch canada.ca for a new PGP intake, and book a consultation so we can flag the window and prepare your strongest position." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with parents and grandparents</h2>
          <p>
            We give families an honest, current read on the fastest realistic way to reunite. Working under a licensed
            RCIC (CICC #R706497), our team assesses whether the Super Visa or a future PGP round is the better fit for
            your goals, then confirms your eligibility and income position. From there we prepare a complete, careful
            application that catches the avoidable errors, such as a shortfall in an income year or an insufficient
            insurance policy, that often cause refusals.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees. We never guarantee an outcome, because
            no honest consultant can, and no one can promise a Parents and Grandparents Program invitation in a lottery.
            What we do promise is straight answers and a strong application. Note that we do not handle Quebec-destined
            sponsorships or appeal and tribunal representation.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Other ways to reunite your family</h2>
          <p className="mt-3 text-ink-soft">The PGP is one path. We help you find the route that fits your family this year.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Plane} title="Super Visa" desc="The practical 2026 route for parents and grandparents: long stays of up to five years on a multiple-entry visa." href="/family-sponsorship/super-visa" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Sponsor a spouse, partner, child or other relative for permanent residence in Canada." href="/family-sponsorship" />
            <FeatureCard icon={Users} title="Spousal sponsorship" desc="Bring your spouse or common-law partner to Canada as a permanent resident, our flagship service." href="/family-sponsorship/spousal-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Bring your parents or grandparents to Canada"
        sub="With no confirmed PGP intake for 2026, the Super Visa is the practical route. Get started with a licensed RCIC for honest guidance, no promises, just clear next steps."
      />
    </>
  );
}
