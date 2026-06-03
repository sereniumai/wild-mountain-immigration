import type { Metadata } from "next";
import { Globe, Rocket, Mountain, Map, Heart, Briefcase, GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { ReviewsStrip } from "@/components/content/reviews";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada";
const UPDATED = "May 2026";

export const countries = [
  { name: "United States", short: "the USA", href: "/move-to-canada/from-the-usa" },
  { name: "United Kingdom", short: "the UK", href: "/move-to-canada/from-the-uk" },
  { name: "India", short: "India", href: "/move-to-canada/from-india" },
  { name: "Philippines", short: "the Philippines", href: "/move-to-canada/from-the-philippines" },
  { name: "Nigeria", short: "Nigeria", href: "/move-to-canada/from-nigeria" },
  { name: "Australia", short: "Australia", href: "/move-to-canada/from-australia" },
  { name: "Ireland", short: "Ireland", href: "/move-to-canada/from-ireland" },
  { name: "South Africa", short: "South Africa", href: "/move-to-canada/from-south-africa" },
  { name: "United Arab Emirates", short: "the UAE", href: "/move-to-canada/from-the-uae" },
  { name: "Pakistan", short: "Pakistan", href: "/move-to-canada/from-pakistan" },
];

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From Another Country 2026",
  titleAbsolute: "Move to Canada: 2026 Pathways From Another Country",
  description:
    "Move to Canada in 2026: Express Entry, Provincial Nominee Programs, work permits, study to PGWP and sponsorship, plus costs. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada",
    "moving to canada",
    "move to canada from another country",
    "how to immigrate to canada",
    "immigrate to canada from abroad",
  ],
});

const faqs = [
  {
    q: "What is the easiest way to move to Canada from another country?",
    a: "There is no single easiest route. The best pathway depends on your age, education, work experience, language ability and whether you have a Canadian job offer or family here. For many skilled applicants, Express Entry is the fastest federal route to permanent residence. Others do better through a Provincial Nominee Program, an employer-driven work permit, a study permit that leads to a Post-Graduation Work Permit and then PR, or family sponsorship. Our team assesses your profile and recommends the route with the best realistic chance.",
  },
  {
    q: "Does the country I am moving from change how I immigrate to Canada?",
    a: "The core programs are the same wherever you apply from, but the practical details change: which visa office processes your file, document and police-certificate requirements, language-test logistics, credential recognition, and processing times. Some nationalities also need a temporary resident visa to enter Canada while others are visa-exempt and travel on an eTA. Our country guides explain what is different when you move to Canada from your specific country.",
  },
  {
    q: "How much money do I need to move to Canada?",
    a: "It depends on the program. Most Express Entry applicants (outside the Canadian Experience Class) must show proof of settlement funds that scales with family size, study permit applicants must show tuition plus living costs, and provincial and pilot streams have their own thresholds. On top of that you budget for IRCC government fees, the right-of-permanent-residence fee, biometrics, a language test, an Educational Credential Assessment and your own relocation costs. These figures change periodically, so confirm current numbers on canada.ca, and we give you a clear, itemised picture for your route before you commit.",
  },
  {
    q: "Can you help me move to Canada if I do not live in Canada yet?",
    a: "Yes. The large majority of our clients start their journey from outside Canada, and the entire process is handled online with IRCC. As a CICC-regulated practice led by a licensed RCIC, our team can represent you wherever you live, by video call, phone and secure document sharing. You do not need to be in Canada, or in Alberta, to work with us.",
  },
  {
    q: "Do I have to speak French or settle in a particular province?",
    a: "You do not need French for most economic routes. Strong English alone can produce a competitive score, though French ability can add points and open extra draws. You are also free to settle in almost any province or territory. We do not advise on Quebec, which runs its own separate immigration system, but we cover the federal programs and the Provincial Nominee Programs across Alberta, British Columbia, Ontario, the Atlantic provinces and beyond.",
  },
  {
    q: "How long does it take to move to Canada?",
    a: "It depends on the route. After an Invitation to Apply, IRCC processes most complete Express Entry applications in around six months, though building a profile and waiting for a draw can add weeks or months. Provincial nomination adds a separate processing step, work and study permits run on their own timelines, and spousal sponsorship currently runs roughly 12 months. Processing times move with volume, so we plan your timeline against the current IRCC estimates on canada.ca rather than a fixed promise.",
  },
];

export default function MoveToCanadaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From Another Country: 2026 Pathways Guide",
            description:
              "Move to Canada in 2026: Express Entry, Provincial Nominee Programs, work permits, study to PGWP and sponsorship, plus costs. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "Immigration support for newcomers moving to Canada",
            description:
              "Move to Canada in 2026: Express Entry, Provincial Nominee Programs, work permits, study to PGWP and sponsorship, plus costs. RCIC-reviewed.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Move to Canada"
        crumbs={[{ name: "Immigrate", path: "/immigrate" }, { name: "Move to Canada by country", path: PATH }]}
        title={<>Move to Canada <span className="text-brand">from another country</span></>}
        lede={
          <p>
            Planning to <strong>move to Canada</strong> from abroad? The immigration programs are the same wherever you
            start, but the practical steps change with where you live. This guide explains every main pathway to
            permanent residence and to working in Canada, what each one requires, what it costs and how long it takes,
            then points you to a detailed guide for your country.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/express-entry", label: "Explore Express Entry" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Globe className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from abroad?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us where you are and your goals. Our licensed RCIC will map the right route to Canada, wherever you
                live.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The fastest federal PR route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Province-led routes to PR" },
                { label: "Work permits", href: "/work-permits", note: "Come to work, then transition to PR" },
                { label: "Study permits", href: "/study-permit", note: "Study, then stay with a PGWP" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="To move to Canada from abroad you choose among the same core routes wherever you start: Express Entry, Provincial Nominee Programs, work permits, study permits that lead to a PGWP, and family sponsorship. Regional options like the Atlantic Immigration Program, the Caregiver pathways and the Rural and Northern Immigration Pilot widen the field. For many skilled applicants, Express Entry is the fastest route to permanent residence. What changes by country is the visa office, documents, police certificates, language logistics and processing times. You can start the whole process from outside Canada, handled online with IRCC."
            items={[
              <>The same core programs apply wherever you move from, <a href="/express-entry">Express Entry</a>, <a href="/pnp">PNPs</a>, <a href="/work-permits">work</a>, <a href="/study-permit">study</a> and <a href="/family-sponsorship">family</a> routes.</>,
              <>For many skilled applicants, <a href="/express-entry">Express Entry</a> is the fastest route to permanent residence, ranked by the <a href="/express-entry/comprehensive-ranking-system">CRS</a>.</>,
              <>Regional options like the <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, <a href="/caregiver-program-canada">Caregiver pathways</a> and the <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a> widen your choices.</>,
              <>What changes by country: <strong>visa office, documents, police certificates, language logistics and processing times</strong>.</>,
              <>You can start the whole process <strong>from outside Canada</strong>, handled online with IRCC, and our country guides cover what is different for you.</>,
            ]}
          />

          <h2>How to immigrate to Canada from another country</h2>
          <p>
            Canada runs one of the most active immigration systems in the world, and most newcomers arrive through a
            handful of well-defined routes. If you are wondering <strong>how to immigrate to Canada</strong> as a skilled
            worker, the honest answer is that the right pathway depends on you, not your passport. When you{" "}
            <strong>move to Canada from another country</strong>, the route you choose depends far more on your profile,
            your age, education, skilled work experience, language ability and any Canadian job offer or family, than on
            the country you are leaving. Broadly there are two destinations:{" "}
            <strong>permanent residence</strong>, which lets you live, work and settle anywhere in Canada indefinitely
            and leads to citizenship, and <strong>temporary status</strong> through a <a href="/work-permits">work</a> or{" "}
            <a href="/study-permit">study permit</a>, which is often used as a stepping stone to permanent residence. The
            sections below explain each pathway in turn so you can see where you fit before you spend anything.
          </p>

          <h2>The main pathways at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (fastest federal route)"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Ontario, Atlantic and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["Work permit", "Those with a Canadian job offer or intra-company move", "Temporary work, often a bridge to PR"],
              ["Study permit", "Students at a designated Canadian institution", "Study, then a PGWP and a path to PR"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
              ["Atlantic, Caregiver and Rural pilots", "Workers tied to a region, employer or caregiving role", "Permanent residence via a targeted stream"],
            ]}
            caption="The main routes people use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <h2>Express Entry</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is the most common route to permanent residence for skilled
            workers and the fastest federal option. You create an online profile, you are scored under the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and the
            highest-ranked candidates are invited to apply in regular draws. Three federal programs sit inside Express
            Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience (often gained on a work permit or after studying).</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled workers applying from abroad with foreign experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople.</li>
          </ul>
          <p>
            Eligibility turns on your occupation being a skilled role under Canada's{" "}
            <strong>National Occupational Classification (NOC)</strong>, so confirming your correct NOC code is one of the
            first things we check. Most applicants also need an <strong>Educational Credential Assessment</strong> of
            their degree and an approved language test (IELTS, CELPIP, TEF or TCF). Small differences in age, experience
            and test scores move your CRS more than people expect, and a <a href="/pnp">provincial nomination</a> adds a
            decisive 600 points. Use our free <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand,
            then we help you find the points you are leaving on the table.
          </p>

          <h2>Provincial Nominee Programs</h2>
          <p>
            If your CRS is not yet high enough for a federal draw, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the answer. Provinces nominate workers they
            specifically need, and an enhanced provincial nomination adds 600 CRS points, which in recent draws has lifted candidates comfortably above the cut-off. IRCC issues the invitation.
            Each province runs its own streams:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, popular for its mountains, lower taxes and active worker streams. As a Canmore-based firm, Alberta is the province our team knows best.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, strong for tech, healthcare and skilled workers who want the West Coast lifestyle.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, the largest job market, with streams aligned to Express Entry.</li>
            <li>Many other provinces run their own PNP streams too. See our <a href="/pnp">PNP overview</a> for how nomination works and which stream suits your profile.</li>
          </ul>

          <h2>Work permits and employer routes</h2>
          <p>
            If you have, or can secure, a Canadian job offer, a <a href="/work-permits">work permit</a> can get you to
            Canada quickly and often bridges to permanent residence. Depending on the role and employer, that might be an
            employer-specific permit supported by a Labour Market Impact Assessment, an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a> if you work for a multinational
            with a Canadian office, or a <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a>{" "}
            once your PR application is far enough along. Younger applicants from eligible countries can also use the{" "}
            <a href="/work-permits/international-experience-canada">International Experience Canada (IEC)</a> Working
            Holiday. Many newcomers come on a permit first, build Canadian experience, and transition to PR through
            Express Entry or a PNP.
          </p>

          <h2>Study permits and the PGWP</h2>
          <p>
            Studying is a well-trodden path to permanent residence. A <a href="/study-permit">study permit</a> at a
            designated learning institution lets you study in Canada, and after graduating you may qualify for a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit that lets you work and
            build the Canadian experience that feeds straight into the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>. You will need to show{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> for tuition and living costs, and a{" "}
            <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> where required.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            If your spouse, common-law or conjugal partner is already a Canadian citizen or permanent resident, they may
            be able to sponsor you through <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a>.
            There is normally no minimum income requirement to sponsor a partner, and a sponsored spouse receives
            permanent residence. Parents and grandparents of Canadians can also explore the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a> for long stays. See our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> for who can sponsor whom.
          </p>

          <h2>Regional and targeted pathways</h2>
          <p>
            Beyond the main programs, Canada runs several targeted routes that can suit the right profile, especially if
            you are open to a particular region or employer:
          </p>
          <ul>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-driven route to PR across Nova Scotia, New Brunswick, Prince Edward Island and Newfoundland and Labrador.</li>
            <li>The <a href="/caregiver-program-canada">Caregiver pathways</a>, for those providing in-home care, with routes that can lead to permanent residence.</li>
            <li>The <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a>, which helps smaller communities attract and keep newcomers with a local job offer.</li>
          </ul>

          <Callout type="brand" title="A regulated practice that works worldwide">
            Wild Mountain Immigration is a CICC-regulated Canadian immigration practice led by a licensed RCIC. Our team
            represents clients from across the world entirely online, by video call and secure document sharing. We do
            not advise on Quebec, which runs its own system, and we focus on building the strongest federal or provincial
            application for your situation.
          </Callout>

          <h2>What changes depending on where you move from</h2>
          <p>
            While the programs are universal, the experience of applying differs by country. These are the things our
            country guides walk you through:
          </p>
          <ul>
            <li><strong>Visa-exempt vs visa-required.</strong> Some nationalities travel visa-exempt on an eTA, others need a temporary resident visa to enter Canada at all.</li>
            <li><strong>Visa office and processing times.</strong> Your country of residence affects which IRCC office handles your file and how long it takes.</li>
            <li><strong>Police certificates.</strong> Each country you have lived in has its own way of issuing the certificates IRCC requires, and some take weeks to arrive.</li>
            <li><strong>Language testing.</strong> Test availability (IELTS, CELPIP, TEF, TCF) and booking lead times vary by country.</li>
            <li><strong>Credential recognition.</strong> Educational Credential Assessments and regulated-profession licensing differ by where you studied and trained.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Costs fall into government fees (IRCC processing, the right-of-permanent-residence fee and biometrics) and
            third-party costs (your ECA, language test, police certificates, medical exam and, for most Express Entry
            applicants, proof of settlement funds that scales with family size). On top of that you budget for your own
            move, flights, shipping and initial housing. These figures change periodically, so we itemise the current
            numbers for your route rather than quote a single headline, and you can confirm government fees on canada.ca.
            On timelines, a complete Express Entry application is usually processed in around six months after an
            invitation, while provincial nomination, work and study permits and family sponsorship each add their own
            steps. Our <a href="/fees">fees guide</a> explains how our professional fee works and how it differs from
            government fees, so you know the true cost before you commit. With those numbers in front of you, you can move
            to Canada with a clear, realistic plan.
          </p>

          <h2>How to choose your route</h2>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "Your age, education, skilled work experience and language scores shape which programs you qualify for, whether that is Express Entry, a PNP, a work permit or a regional pilot." },
              { title: "Match to a pathway", desc: "We compare the federal, provincial, work, study and family routes and find the option where you are most competitive, with clear, written fees." },
              { title: "Build and submit", desc: "We prepare a complete, accurate application and represent you with IRCC from your country to your landing, keeping you updated at every milestone." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">The main pathways to Canada</h2>
          <p className="mt-3 text-ink-soft">Explore the routes newcomers use most, then pick your country below.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route to permanent residence for skilled workers, ranked by the CRS." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Provinces nominate workers they need. A nomination adds 600 CRS points." href="/pnp" />
            <FeatureCard icon={Mountain} title="Alberta (AAIP)" desc="Our specialty. Alberta's own streams for workers, graduates, healthcare and more." href="/alberta-immigration" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="Come to work on an LMIA-based, intra-company or open permit, then transition to PR." href="/work-permits" />
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study at a Canadian institution and stay to work with a PGWP, a common route to PR." href="/study-permit" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse, partner, parent or grandparent who is already in Canada." href="/family-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Moving to Canada from your country</h2>
          <p className="mt-3 text-ink-soft">Pick your country for a guide tailored to moving to Canada from where you live.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            {countries.map((c) => (
              <FeatureCard
                key={c.href}
                icon={Globe}
                title={`From ${c.short}`}
                desc={`The routes, documents and practical steps to move to Canada from ${c.short}.`}
                href={c.href}
              />
            ))}
          </FeatureGrid>
        </div>
      </Section>

      <Section muted>
        <ReviewsStrip title="Newcomers we have helped" n={3} />
      </Section>

      <CtaBand
        title="Ready to make Canada home?"
        sub="Tell us where you are moving from and our licensed RCIC will map your best route, with honest advice and clear fees."
      />
    </>
  );
}
