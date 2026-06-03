import type { Metadata } from "next";
import { Globe, Rocket, GraduationCap, Briefcase, Map, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-the-uae";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From the UAE 2026",
  titleAbsolute: "Move to Canada From the UAE: 2026 Guide",
  description:
    "Move to Canada from the UAE or Dubai in 2026: Express Entry for expats, PNPs, work and study permits, proof of funds and police checks. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from uae",
    "move to canada from dubai",
    "uae to canada immigration",
    "canada pr from dubai",
    "expat move to canada from uae",
    "canada visa from uae",
  ],
});

const faqs = [
  {
    q: "How can an expat in the UAE move to Canada permanently?",
    a: "Most expats in the UAE move to Canada permanently through Express Entry, the federal system for skilled workers, or through a Provincial Nominee Program such as the Alberta Advantage Immigration Program. Many do this because UAE residence is tied to employment and offers no path to citizenship, so Canada offers the permanence the Gulf cannot. Other routes include an employer-driven work permit that bridges to permanent residence, studying in Canada and staying on a Post-Graduation Work Permit, or family sponsorship if you have a spouse, partner or close relative who is already a Canadian citizen or permanent resident.",
  },
  {
    q: "Do I need a visa to enter Canada if I live in Dubai?",
    a: "It depends on your nationality, not on the fact that you live in the UAE. Whether you are visa-exempt (travelling on an Electronic Travel Authorisation, an eTA) or visa-required (applying for a Temporary Resident Visa and giving biometrics) is decided by the passport you hold. So a British expat in Dubai and an Indian, Pakistani or Filipino expat in Dubai can face different entry requirements even though they all live in the same city. Either way, a visit is not the same as settling: you still need permanent residence to live in Canada and a work permit to work. Confirm your nationality's status on canada.ca.",
  },
  {
    q: "Can I use my tax-free UAE earnings as proof of funds?",
    a: "Often, yes. Most Express Entry applicants outside the Canadian Experience Class must show proof of settlement funds, and tax-free UAE earnings can make this requirement easier to meet because savings tend to accumulate faster. You still need to document the money clearly with bank letters and statements that satisfy IRCC, and show it is genuinely available and unencumbered, not borrowed or tied up in assets you cannot access. Our team helps you assemble a clean paper trail. See our guide to proof of funds.",
  },
  {
    q: "Which police certificates do I need from the UAE?",
    a: "IRCC normally requires a police certificate from the UAE for the time you have lived there, plus certificates from your country of nationality and any other country where you have lived long enough to need one. Because UAE residence is employment-linked and many expats move between countries, mapping exactly which certificates apply to your history is important, and the UAE certificate has its own process that can take time. Our team works this out with you early so nothing stalls your application.",
  },
  {
    q: "Do my qualifications count in Canada if I trained outside the UAE?",
    a: "For immigration scoring, you typically have your qualifications assessed through an Educational Credential Assessment (ECA) from a designated organisation such as WES, wherever you earned them, so they can be compared to Canadian standards and scored under Express Entry. For regulated professions such as healthcare, engineering or some trades, you usually also need to be licensed by the relevant Canadian provincial regulator before you can practise. These are two separate processes, and our team flags any licensing steps early.",
  },
  {
    q: "How much does it cost and how long does it take from the UAE?",
    a: "There are two cost groups, plus your relocation. Government charges cover IRCC processing, the right-of-permanent-residence fee, biometrics and your medical exam; third-party costs add your ECA, an approved English test, police certificates from each country you have lived in and, for most Express Entry applicants, proof of settlement funds, where tax-free Gulf savings often help. On timing, after an Invitation to Apply IRCC usually finishes a complete Express Entry application in about six months, while a provincial nomination or family sponsorship adds its own stage. Figures and processing times change, so our team itemises the current numbers for your case and plans against the latest IRCC estimates rather than a fixed promise. Our fees guide explains how our professional fee differs from government fees.",
  },
];

export default function FromUaePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From the UAE: The Complete 2026 Guide for Expats",
            description:
              "Move to Canada from the UAE or Dubai in 2026: Express Entry for expats, PNPs, work and study permits, proof of funds and police checks. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "UAE to Canada immigration support",
            description:
              "Move to Canada from the UAE or Dubai in 2026: Express Entry for expats, PNPs, work and study permits, proof of funds and police checks. RCIC-reviewed.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Move to Canada"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Move to Canada by country", path: "/move-to-canada" },
          { name: "From the UAE", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from the UAE</span></>}
        lede={
          <p>
            The UAE is home to a huge expat workforce, and many residents in Dubai and Abu Dhabi plan to{" "}
            <strong>move to Canada from the UAE</strong> for one simple reason: Gulf residence is tied to your job and offers
            no path to citizenship. Canada offers permanence. This guide walks through every route for expats, what each one
            requires, what it costs, how long it takes, and one nuance that trips people up: your entry-visa status depends on
            your nationality, not on living in the UAE.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Based in the UAE or Dubai?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We work with expats across the Gulf entirely online. Tell us your plans and our team will map your route to PR.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The main PR route for expats" },
                { label: "Proof of funds", href: "/study-permit/proof-of-funds", note: "Using your UAE savings correctly" },
                { label: "Work permits", href: "/work-permits", note: "Employer-driven routes to Canada" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's PNP" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
                { label: "Move to Canada by country", href: "/move-to-canada", note: "Guides for other countries" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Moving to Canada from the UAE appeals to expats whose Gulf residence is tied to their job and offers no path to citizenship, because Canada offers permanent residence and a clear road to a passport. Express Entry is the main route: a points-based system that invites the highest-ranked candidates to apply for PR. Provincial nominees, work permits and the study-to-PGWP path are further options. Whether you are visa-exempt or visa-required to enter depends on your nationality, not on living in the UAE. Tax-free earnings can make proof of settlement funds easier, and you will gather police certificates from the UAE and other countries plus an ECA."
            items={[
              <>UAE expats (Indian, Pakistani, Filipino, British and many others) <a href="/express-entry">move to Canada</a> because Gulf residence is <strong>tied to your job</strong> and offers <strong>no path to citizenship</strong>.</>,
              <><a href="/express-entry">Express Entry</a> is the main route; you compete on a <a href="/express-entry/comprehensive-ranking-system">CRS score</a> and the highest-ranked candidates are invited to apply for PR.</>,
              <><strong>Important:</strong> visa-exempt versus visa-required to enter Canada depends on your <strong>nationality</strong>, not on living in the UAE.</>,
              <>Tax-free UAE earnings can make the <a href="/study-permit/proof-of-funds">proof of settlement funds</a> requirement easier to meet.</>,
              <>Expect <strong>police certificates</strong> from the UAE and other countries you have lived in, plus an <strong>ECA</strong> for your qualifications.</>,
            ]}
          />

          <h2>How to move to Canada from the UAE</h2>
          <p>
            When you <strong>move to Canada from the UAE</strong>, you join a well-trodden path. The Gulf is full of skilled
            professionals on employment-linked residence visas, with no route to a passport and a constant question over what
            happens when a job ends. Canada answers that with permanent residence and a clear road to citizenship. The
            practical point is that visiting and immigrating are different things: to live in Canada you need PR, and to work
            you need a permit. The route that fits depends on your profile, and on the passport you hold.
          </p>
          <p>
            It resolves to two outcomes. <strong>Permanent residence</strong> lets you live, work and settle anywhere in
            Canada with no time limit and opens the road to citizenship, the very permanence Gulf residence lacks, while{" "}
            <strong>temporary status</strong> on a <a href="/work-permits">work permit</a> or{" "}
            <a href="/study-permit">study permit</a> brings you for a set period and is often a stepping stone to PR. The
            sections below take each route in turn.
          </p>

          <Callout type="brand" title="Visa-exempt or visa-required? It is about your passport">
            This catches a lot of Dubai expats out. Whether you can enter Canada visa-exempt on an eTA, or must apply for a
            Temporary Resident Visa (TRV) and give biometrics, is decided by your nationality, not by your UAE residence. A
            British colleague in Dubai may be visa-exempt while an Indian, Pakistani or Filipino colleague in the same office
            is visa-required. Our team confirms your individual status and plans accordingly. Always verify on canada.ca.
          </Callout>

          <h2>The main routes from the UAE at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Express Entry", "Skilled expats with a degree and experience", "Permanent residence (fastest federal route)"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Ontario, Atlantic and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["Employer work permit", "Expats with a Canadian job offer", "Temporary work, often a bridge to PR"],
              ["Study permit to PGWP", "Those choosing to study in Canada first", "Study, then a PGWP and a path to PR"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes expats in the UAE use to move to Canada. The right one depends on your profile and your nationality."
          />

          <h2>Express Entry from the UAE</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is the main route for Gulf expats and the quickest federal road to
            PR for skilled workers. You build an online profile, it is ranked by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and each draw
            invites the top-ranked candidates. Many UAE professionals score well on age,
            education and experience, and the tax-free savings built up in the Gulf can make the proof-of-funds piece more
            comfortable. Three federal programs sit inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled expats applying with overseas experience.</li>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for those who already have skilled Canadian work experience, for example after a work permit.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople.</li>
          </ul>
          <p>
            Before you submit, you will need an <strong>ECA</strong> of your qualifications and an approved English test. Small
            differences in age, experience and test scores move your CRS more than people expect, and a{" "}
            <a href="/pnp">provincial nomination</a> adds a decisive 600 points. Try our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand, then our team helps you find the points
            you are leaving on the table.
          </p>

          <h2>Provincial Nominee Programs for UAE expats</h2>
          <p>
            If your CRS sits below the latest federal cut-off, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the route through. A province nominates the workers
            it needs, and an enhanced nomination adds 600 CRS points, usually enough to put a profile well above typical
            Express Entry cut-offs, with IRCC making the final selection. The programs Gulf expats turn to most include:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, popular for its lower taxes and active worker streams. As a Canmore-based firm, Alberta is the province our team knows best.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, a strong fit for the tech and healthcare professionals who fill much of the Gulf workforce.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, the deepest job market in Canada, with streams drawn from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-led route across Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador.</li>
          </ul>

          <h2>Work permits and employer routes</h2>
          <p>
            If you have, or can secure, a Canadian job offer, an employer-driven <a href="/work-permits">work permit</a> can
            get you to Canada and often bridges to permanent residence. Some expats working for multinationals with a Canadian
            office move through an intra-company transfer, while others come on an employer-specific permit and transition to
            PR through the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a provincial
            nominee stream. Smaller communities also recruit through the{" "}
            <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a>.
          </p>

          <h2>Studying in Canada as a route to PR</h2>
          <p>
            Some expats choose to study in Canada first. A <a href="/study-permit">study permit</a> at a designated learning
            institution lets you study in Canada, and after graduating you may qualify for a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit that lets you work and build
            the Canadian experience that feeds straight into the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>. You will need to show{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> for tuition and living costs, where Gulf savings can
            again help, and a Provincial Attestation Letter where required.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            Where a spouse, common-law or conjugal partner already holds Canadian citizenship or PR, sponsorship through{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a> may be open to you. Sponsoring a
            partner usually carries no income test, and the sponsored spouse lands as a permanent resident. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> sets out who can sponsor whom.
          </p>

          <Callout type="brand" title="A regulated practice that understands the Gulf">
            Wild Mountain Immigration is a CICC-regulated Canadian immigration practice led by a licensed RCIC (R706497). Our
            team works with expats across the UAE entirely online, by video call and secure document sharing, and knows the
            details that matter from the Gulf: confirming your entry-visa status by nationality, mapping multi-country police
            certificates, and documenting tax-free savings so they stand up as proof of funds.
          </Callout>

          <h2>What is different when you move from the UAE</h2>
          <ul>
            <li><strong>Entry status follows your nationality.</strong> Visa-exempt (eTA) or visa-required (TRV plus biometrics) depends on your passport, not on living in the UAE. Confirm on canada.ca.</li>
            <li><strong>UAE and multi-country police certificates.</strong> Expect a police certificate from the UAE and from other countries you have lived in, including your country of nationality; the UAE certificate has its own process, so start early.</li>
            <li><strong>Proof of funds from tax-free earnings.</strong> Gulf savings can help here, but you must document the source and availability clearly with bank letters and statements.</li>
            <li><strong>ECA for qualifications.</strong> Wherever you trained, your credentials are assessed (often via WES) so they can be scored against Canadian standards.</li>
            <li><strong>Licensing for regulated work.</strong> Healthcare, engineering and some trades may need Canadian provincial registration before you can practise.</li>
            <li><strong>Settling in.</strong> Provincial health cover, banking, credit history and driving licences all restart in Canada; our team flags the practical steps so nothing catches you out.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Costs sit in two groups. Government charges cover IRCC processing, the right-of-permanent-residence fee,
            biometrics and your medical exam; third-party costs add your ECA, a language test, the police certificates from
            each country you have lived in and, for most Express Entry applicants, the settlement funds you must show, where
            Gulf savings often help.</p>
          <p>These amounts change periodically, so our team itemises the current figures for your
            route rather than quote one headline. On timing, a complete Express Entry application is usually finished about
            six months after the invitation, while provincial nomination and family sponsorship add their own stages. Our{" "}
            <a href="/fees">fees guide</a> explains our professional fee and how it differs from government fees.
          </p>

          <h2>How Wild Mountain Immigration helps you move from the UAE</h2>
          <p>
            We do one thing: build the strongest, most complete Canadian immigration application for your situation, and
            represent you with IRCC from the UAE through to your arrival. As a CICC-regulated practice led by a licensed RCIC,
            our team assesses your profile honestly, confirms your entry-visa status by nationality, chooses the route where
            you are most competitive, and manages the paperwork, the ECA, the police certificates and the proof of funds so
            you do not have to decode it alone.</p>
          <p>Whether you are weighing Canada PR from Dubai or a work permit out of Abu
            Dhabi, the goal is the same: help you <strong>move to Canada from the UAE</strong> with a plan built around your
            nationality and your numbers.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your nationality, age, qualifications, experience and language to find your strongest route from the UAE." },
              { title: "Plan and prepare", desc: "We confirm your entry-visa status, plan your police certificates, ECA and proof of funds, and set your Express Entry or provincial strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC, all online, from the UAE through to your arrival in Canada." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from the UAE</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways Gulf expats use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route to permanent residence, the main path for skilled expats leaving the Gulf." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial nominees" desc="A nomination from Alberta, BC, Ontario or the Atlantic provinces adds 600 CRS points." href="/pnp" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="Employer-driven routes for expats with a Canadian job offer, often a bridge to PR." href="/work-permits" />
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study in Canada and stay to work with a PGWP, a proven path to permanent residence." href="/study-permit" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
            <FeatureCard icon={Globe} title="Other countries" desc="Moving from somewhere else? See our country-by-country guides to Canada." href="/move-to-canada" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from the UAE to Canada"
        sub="Tell us your nationality and your plans, and our licensed team will map your best route, all online. Honest advice and clear fees."
      />
    </>
  );
}
