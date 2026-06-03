import type { Metadata } from "next";
import { Globe, Rocket, HeartPulse, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-the-philippines";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From the Philippines 2026",
  titleAbsolute: "Move to Canada From the Philippines: 2026",
  description:
    "Move to Canada from the Philippines in 2026: caregiver pilots, Express Entry, work permits, PNPs and study to PGWP to PR, with costs. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from philippines",
    "philippines to canada immigration",
    "moving to canada from the philippines",
    "caregiver canada from philippines",
    "canada visa for filipino citizens",
    "filipino nurse move to canada",
  ],
});

const faqs = [
  {
    q: "How can a Filipino citizen move to Canada permanently?",
    a: "Most Filipino citizens move to Canada permanently through Express Entry, an employer-driven work permit that bridges to permanent residence, a caregiver or home care worker pathway, or a Provincial Nominee Program such as the Alberta Advantage Immigration Program. The Philippines already has one of the largest, most established communities in Canada, and English proficiency, common among Filipino applicants, helps both your Express Entry score and professional registration. Studying in Canada and staying on a Post-Graduation Work Permit is another well-used route, and family sponsorship is open if you have a spouse, partner or close relative who is already a Canadian citizen or permanent resident.",
  },
  {
    q: "Do Filipino citizens need a visa to enter Canada?",
    a: "Yes. Filipino citizens are visa-required, so you need a Temporary Resident Visa (TRV) to enter Canada for a visit, and you give biometrics (fingerprints and a photo) as part of the process. A visitor visa is for visits only; it does not let you live, work or settle. To move permanently you still need permanent residence, and to work you need the appropriate work permit. A common and costly misunderstanding is to treat a visitor visa as a right to relocate, so our team makes sure you apply for the right status for your actual plans. Confirm current requirements on canada.ca.",
  },
  {
    q: "Are there caregiver pathways for Filipino applicants?",
    a: "Yes, and they are among the most popular routes from the Philippines. Canada runs caregiver pathways for people who provide child care or home support, currently directed through the Home Care Worker Immigration Pilots, which replaced earlier pilots. They typically require a genuine full-time job offer in an eligible caregiving role, language ability of around CLB 4 or higher, the equivalent of a Canadian high-school education and relevant training or experience, and they lead to permanent residence. Because these programs and their intake change over time, our team confirms what is open and the current requirements on IRCC and canada.ca before you apply. See our full caregiver program guide for the detail.",
  },
  {
    q: "Can Filipino nurses and healthcare workers move to Canada?",
    a: "There is strong Canadian demand for healthcare workers, and many Filipino nurses, care aides and allied-health professionals move through employer-driven work permits, Express Entry (including category-based draws for healthcare) or provincial nominee programs. For nurses and other regulated roles you usually need a credential assessment and licensing through the relevant Canadian provincial regulator before you can practise, and the National Nursing Assessment Service is often part of that path. Immigration scoring and professional licensing are two separate processes, and English proficiency helps with both. Our team flags every licensing step early so nothing surprises you after you arrive.",
  },
  {
    q: "What documents do Filipino applicants usually need?",
    a: "Expect to provide an Educational Credential Assessment (ECA) for immigration scoring, an approved English test (most applicants sit IELTS General Training or CELPIP), proof of settlement funds for most Express Entry applicants outside the Canadian Experience Class, and an NBI clearance, the Philippine police certificate, covering your time in the Philippines, plus certificates from any other country you have lived in. Biometrics are required for the TRV and many applications. Regulated roles need a regulator-specific credential review. Fund and fee amounts change periodically, so our team confirms current figures on IRCC and canada.ca for your specific case.",
  },
  {
    q: "How much does it cost to move to Canada from the Philippines?",
    a: "Budget for two broad groups. Government costs include IRCC processing fees, the right-of-permanent-residence fee, biometrics and your medical exam. Third-party costs include your ECA, the English test, an NBI clearance, and, for most Express Entry applicants, proof of settlement funds, plus your own relocation costs such as flights and initial housing. Caregiver and work-permit routes have their own fee structures. Exact figures depend on your route and family size and change over time, so our team itemises the current numbers for your case rather than quoting a single headline figure. Our fees guide explains how our professional fee differs from government fees.",
  },
  {
    q: "How long does it take to move to Canada from the Philippines?",
    a: "It depends on the route. After an Invitation to Apply, IRCC processes most complete Express Entry applications in around six months, though building a profile and waiting for a draw can add time. A provincial nomination adds a separate processing step. Employer-driven work permits and caregiver pathways run on their own timelines, and spousal sponsorship currently runs roughly twelve months. Processing times move with application volumes, so our team plans your timeline against the current IRCC estimates rather than a fixed promise.",
  },
];

export default function FromPhilippinesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From the Philippines: The Complete 2026 Guide",
            description:
              "Move to Canada from the Philippines in 2026: caregiver pilots, Express Entry, work permits, PNPs and study to PGWP to PR, with costs. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "Philippines to Canada immigration support",
            description:
              "Move to Canada from the Philippines in 2026: caregiver pilots, Express Entry, work permits, PNPs and study to PGWP to PR, with costs. RCIC-reviewed.",
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
          { name: "From the Philippines", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from the Philippines</span></>}
        lede={
          <p>
            Tens of thousands of Filipinos <strong>move to Canada from the Philippines</strong> every year, drawn by one of
            Canada&apos;s largest and most established communities and by strong demand for caregivers, nurses and other
            healthcare workers. This guide walks through every route to permanent residence and to working in Canada, what
            each one requires, what it costs, how long it takes, and exactly what is different when you apply from the
            Philippines.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/caregiver-program-canada", label: "Caregiver pathways" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Globe className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from the Philippines?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us your plans, caregiver, healthcare, Express Entry or provincial, and our team will map the route that
                fits your profile. All online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Caregiver Program Canada", href: "/caregiver-program-canada", note: "Home Care Worker pilots to PR" },
                { label: "Express Entry", href: "/express-entry", note: "The fastest federal PR route" },
                { label: "Work permits", href: "/work-permits", note: "Employer-driven routes" },
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
            summary="To move to Canada from the Philippines, choose a permanent route such as Express Entry, a Provincial Nominee Program or a caregiver pilot, or a work permit that bridges to PR. One of Canada's largest, most established communities and strong English both help your CRS score and professional registration. Caregiver, home care worker and healthcare routes are in heavy demand. Filipino citizens are visa-required, so plan for a TRV plus biometrics to enter and permanent residence to settle. An NBI clearance serves as your police certificate, and nurses need a regulator credential review."
            items={[
              <>The <strong>large Filipino-Canadian community</strong> makes settling familiar, and English proficiency lifts both your <a href="/express-entry/comprehensive-ranking-system">CRS score</a> and professional registration.</>,
              <>Strong demand for caregivers and healthcare workers makes the <a href="/caregiver-program-canada">Home Care Worker pilots</a> and employer routes popular paths to PR.</>,
              <>Filipino citizens are <strong>visa-required</strong>: you need a TRV plus biometrics to enter, and <a href="/express-entry">permanent residence</a> to settle.</>,
              <><a href="/work-permits">Employer-driven work permits</a>, <a href="/pnp">provincial nominees</a> including the <a href="/alberta-immigration">AAIP</a>, and <a href="/study-permit">study to PGWP</a> are all common routes.</>,
              <>The <strong>NBI clearance</strong> is your police certificate; nurses and regulated roles need a credential assessment via the Canadian regulator.</>,
            ]}
          />

          <h2>How to move to Canada from the Philippines</h2>
          <p>
            When you <strong>move to Canada from the Philippines</strong>, you start with real advantages. You join one of
            Canada&apos;s largest and most established communities, which makes settling more familiar, and English
            proficiency, common among Filipino applicants, helps with both immigration scoring and professional
            registration. What you cannot do is simply turn up and stay: visiting and immigrating are different things, and
            the route that fits depends on your occupation, your experience, whether you have a Canadian job offer, and
            whether you have close family already in Canada.
          </p>
          <p>
            It comes down to two outcomes. <strong>Permanent residence</strong> lets you live, work and settle anywhere in
            Canada with no end date and leads to citizenship, while <strong>temporary status</strong> on a{" "}
            <a href="/work-permits">work permit</a> or <a href="/study-permit">study permit</a> brings you for a set period
            and is often a stepping stone to PR. For many Filipino applicants a caregiver or employer permit is exactly
            that stepping stone. The sections below take each route in turn so you can see where you fit before you spend a
            peso.
          </p>

          <h2>The main routes from the Philippines at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Caregiver / home care worker pilots", "Those providing child care or home support", "Work in Canada and permanent residence"],
              ["Employer work permit", "Workers with a Canadian job offer, including healthcare", "Temporary work, often a bridge to PR"],
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (fastest federal route)"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Ontario and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["Study permit to PGWP", "Students at a designated Canadian institution", "Study, then a PGWP and a path to PR"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes Filipino citizens use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <h2>Caregiver and home care worker pathways</h2>
          <p>
            Canada has long relied on Filipino caregivers, and the demand remains strong. The{" "}
            <a href="/caregiver-program-canada">caregiver pathways</a> are aimed at people who provide child care or home
            support, currently directed through the <strong>Home Care Worker Immigration Pilots</strong> that replaced the
            earlier Home Child Care Provider and Home Support Worker pilots.</p>
          <p>Typical requirements include a genuine full-time
            job offer in an eligible caregiving role, language ability of around CLB 4 or higher, the equivalent of a Canadian
            high-school education, and relevant training or experience. The destination is <strong>permanent residence</strong>,
            which is what sets these routes apart from an ordinary work permit. Intake and criteria change over time, so our
            team confirms what is open on IRCC and canada.ca and matches you to the route that fits your experience.
          </p>

          <Callout type="brand" title="Caregivers and healthcare workers in demand">
            Canada actively recruits caregivers, nurses, and care aides and personal support workers, and Filipino
            professionals are central to that workforce. Whether your route is a <a href="/caregiver-program-canada">caregiver pilot</a>, an{" "}
            <a href="/work-permits">employer-driven work permit</a>, an Express Entry healthcare draw or a{" "}
            <a href="/pnp">provincial nominee</a> stream, our team flags any licensing your role needs before you apply,
            so the immigration plan and the registration plan move together.
          </Callout>

          <h2>Express Entry from the Philippines</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is a strong permanent route from the Philippines and the quickest
            federal road to PR for skilled workers. You build an online profile, it is ranked by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and the
            top-ranked candidates are invited at each draw, including category-based draws that can favour healthcare and
            other priority occupations, a real edge for a Filipino nurse moving to Canada and for care workers. Three
            federal programs sit inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience, for example after a work permit or PGWP.</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled Filipino workers applying with overseas experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople.</li>
          </ul>
          <p>
            Before you submit, you will need an <strong>Educational Credential Assessment</strong> of your degree or diploma
            and an approved English test. Small differences in age, experience and test scores move your CRS more than people
            expect, and a <a href="/pnp">provincial nomination</a> adds a decisive 600 points. Use our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand, then our team helps you find the points
            you are leaving on the table.
          </p>

          <h2>Work permits and employer routes</h2>
          <p>
            If you have, or can secure, a Canadian job offer, an employer-driven <a href="/work-permits">work permit</a> can
            get you to Canada and often bridges to permanent residence. Many Filipino professionals, especially in healthcare
            and the trades, come on a work permit first, build Canadian experience, and transition to PR through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a provincial nominee stream.
            Depending on the role, that permit may be supported by a Labour Market Impact Assessment or fall under an exempt
            category.</p>
          <p>Smaller communities also recruit through the{" "}
            <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a>, which can suit workers open
            to settling outside the big cities.
          </p>

          <h2>Provincial Nominee Programs for Filipino movers</h2>
          <p>
            If your CRS sits below the latest federal cut-off, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the route through. A province nominates the workers
            it needs, and an enhanced nomination adds 600 CRS points, a boost that has lifted recent candidates well above
            the cut-off in PNP-specific draws before IRCC issues the invitation. Filipino newcomers settle right across the
            country, and a few programs come up again and again:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, with active streams in healthcare and other priority sectors. As a Canmore-based firm, Alberta is the province our team knows best.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, strong for healthcare, tech and skilled workers who want the West Coast.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, home to one of the largest Filipino-Canadian communities and the deepest job market, with streams drawn from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-led route across Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador that often recruits in care and healthcare roles.</li>
          </ul>

          <h2>Studying in Canada as a route to PR</h2>
          <p>
            Studying first is another proven Filipino route to PR. A <a href="/study-permit">study permit</a> at a
            designated learning institution gets you onto a Canadian course, and graduating can open a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit whose Canadian work
            experience flows directly into the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>. You will need{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> for tuition and living costs, plus a Provincial
            Attestation Letter where the province requires one.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            If your spouse, common-law or conjugal partner already holds Canadian citizenship or PR, sponsorship through{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a> may be open to you. Sponsoring a
            partner normally carries no income test, and the sponsored spouse arrives as a permanent resident. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> sets out who can sponsor whom.
          </p>

          <Callout type="brand" title="A regulated, online practice">
            Wild Mountain Immigration is a CICC-regulated Canadian immigration practice led by a licensed RCIC (R706497). Our
            team works with Filipino clients entirely online, by video call and secure document sharing, and understands the
            move from the Philippines inside out, the NBI clearance, the ECA, the IELTS or CELPIP booking, and the regulator
            licensing for nurses and other regulated roles.
          </Callout>

          <h2>What is different when you move from the Philippines</h2>
          <ul>
            <li><strong>TRV and biometrics.</strong> Filipino citizens are visa-required, so you need a Temporary Resident Visa and biometrics to enter; settling still requires PR.</li>
            <li><strong>NBI clearance.</strong> IRCC asks for an NBI clearance, the Philippine police certificate, covering your time in the Philippines, plus certificates from any other country you have lived in.</li>
            <li><strong>ECA for your qualifications.</strong> Your degree or diploma is assessed so it can be scored against Canadian standards.</li>
            <li><strong>Regulator credential review.</strong> Nurses and other regulated roles need a credential assessment and provincial licensing before practising; the NNAS is often part of the nursing path.</li>
            <li><strong>Caregiver options.</strong> Caregiver and home care worker pilots suit those with relevant care experience and lead to permanent residence.</li>
            <li><strong>Settling in.</strong> Provincial health cover, banking, credit history and driving licences all restart in Canada; our team flags the practical steps so nothing catches you out.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Costs sit in two groups. Government charges cover IRCC processing, the right-of-permanent-residence fee,
            biometrics and your medical exam; third-party costs add your ECA, a language test, the NBI clearance and, for
            most Express Entry applicants, the settlement funds you must show. Caregiver and work-permit routes have their
            own fee structures.</p>
          <p>These amounts change periodically, so our team itemises the current figures for your route
            rather than quote one headline. On timing, a complete Express Entry application is usually finished about six
            months after the invitation, while provincial nomination, the caregiver pilots and family sponsorship each add
            their own stages. Our <a href="/fees">fees guide</a> explains our professional fee and how it differs from
            government fees.
          </p>

          <h2>How Wild Mountain Immigration helps you move from the Philippines</h2>
          <p>
            We do one thing: build the strongest, most complete Canadian immigration application for your situation, and
            represent you with IRCC from the Philippines through to your arrival. As a CICC-regulated practice led by a
            licensed RCIC, our team assesses your profile honestly, chooses the route where you are most competitive, and
            manages the paperwork, the ECA, the NBI clearance and any regulator licensing so you do not have to decode it
            alone. When you are ready to <strong>move to Canada from the Philippines</strong>, our licensed team is online
            to map and manage the route that fits your profile.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your experience, qualifications, English and any job offer to find your strongest route, including caregiver and healthcare pathways." },
              { title: "Plan and prepare", desc: "We map the pathway, ECA, regulator licensing where needed, NBI clearance and your Express Entry, caregiver or work-permit strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC from the Philippines through to your arrival, keeping you updated at every milestone." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from the Philippines</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways Filipino applicants use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={HeartPulse} title="Caregiver pathways" desc="Home Care Worker pilots and employer permits for caregivers, leading to permanent residence." href="/caregiver-program-canada" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route to permanent residence, where English proficiency helps your score." href="/express-entry" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="Employer-driven routes for healthcare and other in-demand roles, often a bridge to PR." href="/work-permits" />
            <FeatureCard icon={MapPin} title="Alberta (AAIP)" desc="Our home province's nominee program, a strong option that can add 600 CRS points." href="/alberta-immigration" />
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study in Canada and stay to work with a PGWP, a proven path to permanent residence." href="/study-permit" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from the Philippines to Canada"
        sub="Tell us your plans and our licensed team will map your best route, from caregiver pathways to Express Entry. Honest advice and clear fees, all online."
      />
    </>
  );
}
