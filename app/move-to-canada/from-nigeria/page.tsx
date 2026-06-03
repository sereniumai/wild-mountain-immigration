import type { Metadata } from "next";
import { Globe, Rocket, Briefcase, GraduationCap, Map, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-nigeria";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From Nigeria 2026",
  titleAbsolute: "Move to Canada From Nigeria: 2026 Guide",
  description:
    "Move to Canada from Nigeria in 2026: Express Entry, French draws, study to PGWP to PR, PNPs, work permits and sponsorship. See your route, RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from nigeria",
    "nigeria to canada immigration",
    "moving to canada from nigeria",
    "emigrate to canada from nigeria",
    "canada visa for nigerian citizens",
    "canada pr from nigeria",
  ],
});

const faqs = [
  {
    q: "How can a Nigerian citizen move to Canada permanently?",
    a: "Most Nigerians move to Canada permanently through Express Entry, the federal system for skilled workers, or through a Provincial Nominee Program such as the Alberta Advantage Immigration Program or the BC PNP, where an enhanced nomination adds 600 CRS points. Strong English helps Nigerian applicants score well, and a French-language category draw can lower the bar further if you have French. Other common routes include studying in Canada and staying on a Post-Graduation Work Permit, an employer-driven work permit that leads to permanent residence, or family sponsorship if you have a spouse, partner or close relative who is already a Canadian citizen or permanent resident.",
  },
  {
    q: "Do Nigerian citizens need a visa to enter Canada?",
    a: "Yes. Nigerian citizens are visa-required, so even a short visit needs a Temporary Resident Visa (TRV) with biometrics (fingerprints and a photo). An eTA is not available to Nigerian passport holders. A visitor visa is for visits only; it does not let you live, work or settle. To move permanently you need permanent residence, and to work you need the appropriate work permit. We make sure you apply for the right status for your plans from the start.",
  },
  {
    q: "What is the French-language draw and can it help Nigerian applicants?",
    a: "Express Entry runs category-based draws, including draws for candidates with strong French. These French-language draws have at times used lower CRS cut-offs than general draws, so French ability can be a genuine advantage. Many Nigerian applicants are bilingual or have studied French, so it is well worth assessing whether you can claim French points or build them. Always confirm current categories and cut-offs on IRCC at canada.ca, as they change.",
  },
  {
    q: "How closely is proof of funds checked for Nigerian applicants?",
    a: "Closely. For most Express Entry applicants outside the Canadian Experience Class you must show settlement funds, and Nigerian applications often receive careful scrutiny of both the amount and the source of funds. Clean, well-documented finances matter: consistent bank statements, clear explanations for large deposits, and supporting records. We help you assemble proof of funds and source-of-funds documentation so it is transparent and credible before you submit.",
  },
  {
    q: "Do my Nigerian qualifications count in Canada?",
    a: "For immigration, you typically have your Nigerian degree assessed through an Educational Credential Assessment (ECA), commonly via World Education Services (WES), so it can be compared to Canadian standards and scored under Express Entry. For regulated professions such as healthcare, engineering or law, you may also need to be licensed by the relevant Canadian provincial regulator before you can practise. These are two separate processes, and we flag any licensing steps early so they do not catch you out after you arrive.",
  },
  {
    q: "Is the study permit route to PR a good option from Nigeria?",
    a: "Yes, it is a popular pathway. You study at a designated learning institution in Canada, qualify for a Post-Graduation Work Permit, gain skilled Canadian work experience, then apply for permanent residence, often through the Canadian Experience Class. You will need to show proof of funds for tuition and living costs and a Provincial Attestation Letter where required. Program choice shapes your PGWP eligibility, so we help you plan the whole sequence from the start.",
  },
  {
    q: "How long does it take to move to Canada from Nigeria?",
    a: "It depends on the route. After an Invitation to Apply, IRCC processes most complete Express Entry applications in around six months, though building a profile and waiting for a draw can add weeks or months. Provincial nomination and the study to PR sequence each add their own steps, and spousal sponsorship currently runs roughly 12 months. Processing times move with volume, so we plan your timeline against the current IRCC estimates on canada.ca rather than a fixed promise.",
  },
];

export default function FromNigeriaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From Nigeria: The Complete 2026 Guide",
            description:
              "Move to Canada from Nigeria in 2026: Express Entry, French draws, study to PGWP to PR, PNPs, work permits, sponsorship and costs. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "Nigeria to Canada immigration support",
            description:
              "Move to Canada from Nigeria in 2026: Express Entry, French draws, study to PGWP to PR, PNPs, work permits, sponsorship and costs. RCIC-reviewed.",
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
          { name: "From Nigeria", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from Nigeria</span></>}
        lede={
          <p>
            Nigeria is one of Canada&apos;s largest and fastest-growing source countries, and many people{" "}
            <strong>move to Canada from Nigeria</strong> every year, most often through Express Entry. With the wave of
            professionals planning to &ldquo;japa&rdquo;, getting <strong>Canada PR from Nigeria</strong> is one of the
            most searched routes out. This guide walks through every pathway to permanent residence and to working in
            Canada: what each one requires, what it costs and how long it takes. It also covers exactly what is different
            for Nigerian applicants, from the visa and biometrics to the French-language draws that can open a real
            opportunity.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from Nigeria?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We work with Nigerian applicants worldwide, fully online. Tell us your plans and our team will map your route.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The leading route from Nigeria" },
                { label: "Category-based draws", href: "/express-entry/category-based-draws", note: "Including French-language draws" },
                { label: "Study permits", href: "/study-permit", note: "Study, PGWP, then a path to PR" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
                { label: "Move to Canada by country", href: "/move-to-canada", note: "Guides for other countries" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Move to Canada from Nigeria most often through Express Entry, the leading federal route to permanent residence. Strong English helps your CRS score, a French-language category draw can lower the bar if you have French, and a provincial nomination adds a decisive 600 points. Nigerian citizens are visa-required, so you need a TRV with biometrics for visits and permanent residence to settle. The study permit to PGWP to PR route and provincial programs such as the AAIP are strong options, and proof of funds and source-of-funds documents receive close scrutiny."
            items={[
              <>Nigeria is a large, growing source country, and <a href="/express-entry">Express Entry</a> is the leading route. Strong English helps your CRS score.</>,
              <>Nigerian citizens are <strong>visa-required</strong>: a TRV with <strong>biometrics</strong> for visits, and PR to settle, a <a href="/work-permits">permit</a> to work.</>,
              <>The <a href="/express-entry/category-based-draws">French-language category draws</a> can use lower CRS cut-offs, a real opportunity if you have French.</>,
              <>The <a href="/study-permit">study permit</a> to <a href="/work-permits/pgwp">PGWP</a> to PR route is a popular pathway for Nigerian students.</>,
              <><a href="/study-permit/proof-of-funds">Proof of funds</a> and source-of-funds documents receive close scrutiny, so clean, well-documented finances matter.</>,
            ]}
          />

          <h2>How to move to Canada from Nigeria</h2>
          <p>
            When you <strong>move to Canada from Nigeria</strong>, you bring some real advantages. English is one of
            Canada&apos;s two official languages, so you score well on the language factors that drive most economic
            programs, and Nigerian professionals are well represented across Canadian workplaces. That said, visiting and
            immigrating are different things.</p>
          <p>As a Nigerian passport holder you are visa-required even to visit, and a
            visitor visa never lets you settle or work. To live in Canada you need the right status: permanent residence
            to settle, or a work or study permit to come temporarily. The route that fits depends on your age,
            occupation and experience, and on whether you have a Canadian job offer or close family already in Canada.
          </p>
          <p>
            Two outcomes are possible. <strong>Permanent residence</strong> lets you live, work and settle anywhere in
            Canada with no time limit and leads to citizenship, while <strong>temporary status</strong> on a work or study
            permit brings you for a fixed spell and very often bridges to PR. The sections below take each route in turn so
            you can see where you fit before you commit.
          </p>

          <h2>The main routes from Nigeria at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (the leading route)"],
              ["French-category draw", "Candidates with French ability", "Express Entry PR, sometimes at lower CRS cut-offs"],
              ["Study permit to PGWP to PR", "Students who plan to stay and work", "Canadian credentials, experience, then PR"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Ontario and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["Employer work permit", "Those with a Canadian job offer", "Temporary work, often a bridge to PR"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes Nigerian citizens use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <h2>Express Entry from Nigeria</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is the leading route from Nigeria and the quickest federal road to
            PR for skilled workers. You build an online profile, it is ranked by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and the
            top-ranked candidates are invited at each draw. Nigerian applicants usually pick up strong language points
            from good English, but age, education and experience still have to be assembled carefully to compete. Three
            federal programs sit inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience, for example after studying in Canada and working on a PGWP.</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled Nigerian workers applying from Nigeria with foreign experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople.</li>
          </ul>
          <p>
            Before you submit, you will need a <strong>WES (or equivalent) Educational Credential Assessment</strong> of
            your Nigerian degree and an approved English test. A <a href="/pnp">provincial nomination</a> adds a decisive
            600 points. Try our free <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand, then we
            help you find the points you are leaving on the table.
          </p>

          <h2>French-language category draws: a real opportunity</h2>
          <p>
            One of the most underused opportunities for Nigerian applicants is the{" "}
            <a href="/express-entry/category-based-draws">category-based draw</a> for candidates with strong French.
            IRCC runs targeted draws for specific occupations and for French-speaking candidates, and the French-language
            draws have at times used <strong>lower CRS cut-offs</strong> than general draws.</p>
          <p>Many Nigerian applicants
            already have some French from school or are well placed to build it, so if you can claim CLB French points, or
            are willing to study toward a recognised French test result, this can be the difference between waiting and
            being invited. The category-based draw occupations and the CRS cut-offs change, so confirm the current ones
            on canada.ca, and we assess whether the French route is realistic for your profile.
          </p>

          <h2>The study permit to PGWP to PR route</h2>
          <p>
            Studying first is a popular Nigerian pathway to PR. A <a href="/study-permit">study permit</a> at a designated
            learning institution gets you onto a Canadian course, and graduating can open a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit that lets you work for
            almost any employer and bank the skilled Canadian experience that flows into the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>.</p>
          <p>You will need{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> for tuition and living costs, documented with the
            same care Nigerian applications need, plus a{" "}
            <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> where required. Because
            programme choice drives PGWP eligibility, we help you map the whole sequence from the outset.
          </p>

          <h2>Provincial Nominee Programs for Nigerian movers</h2>
          <p>
            If your CRS sits below the latest federal cut-off, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the route through. A province nominates workers it
            needs, and an enhanced nomination adds 600 CRS points, which in recent rounds has placed candidates well clear
            of the cut-off before IRCC makes the final selection. A few provinces recur for Nigerian movers:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, attractive for lower taxes, a strong job market and active worker streams. Based in Canmore, Alberta is the province we know best.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, a strong fit for tech, healthcare and skilled workers.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, home to a large Nigerian-Canadian community and the deepest job market, with streams drawn from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-led route across the four Atlantic provinces, plus the <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a> for smaller communities.</li>
          </ul>

          <h2>Work permits and family sponsorship</h2>
          <p>
            If you have, or can secure, a Canadian job offer, a <a href="/work-permits">work permit</a> can get you to
            Canada and often bridges to permanent residence, whether that is an employer-specific permit, an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a>, or a{" "}
            <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> once your PR application is
            far enough along. And if your spouse, common-law or conjugal partner is already a Canadian citizen or
            permanent resident, they may be able to sponsor you through{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a>. Parents and grandparents can
            explore the <a href="/family-sponsorship/parents-grandparents">Parents and Grandparents Program</a>. See our
            full <a href="/family-sponsorship">family sponsorship guide</a> for who can sponsor whom.
          </p>

          <Callout type="brand" title="Document your finances carefully">
            Nigerian applications often receive close attention on proof of settlement funds and the source of those
            funds. Consistent bank statements, clear explanations for large deposits and supporting records make a real
            difference. As a CICC-regulated practice led by a licensed RCIC (#R706497), our team helps you build a
            transparent, credible financial picture before you submit, and our whole service runs online by video call,
            phone and secure documents.
          </Callout>

          <h2>What is different when you move from Nigeria</h2>
          <ul>
            <li><strong>Visa-required, with biometrics.</strong> Nigerian citizens need a TRV (not an eTA) for visits, with fingerprints and a photo, and PR to settle.</li>
            <li><strong>French-language draws.</strong> If you have French, a category-based draw can use a lower CRS cut-off, so it is worth assessing early.</li>
            <li><strong>Proof and source of funds.</strong> Settlement funds and where they came from receive close scrutiny, so keep finances clean and documented.</li>
            <li><strong>Police certificate.</strong> IRCC will ask for a police certificate from the Nigeria Police Force covering your time in Nigeria, plus any other country you lived in.</li>
            <li><strong>ECA via WES.</strong> Your Nigerian degree is assessed (commonly through WES) so it can be scored against Canadian standards.</li>
            <li><strong>Professional licensing.</strong> Regulated professions such as healthcare, engineering and law often need Canadian provincial registration before you can practise.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Costs sit in two groups. Government charges cover IRCC processing, the right-of-permanent-residence fee and
            biometrics; third-party costs add your WES ECA, a language test, the Nigeria Police Force certificate, a
            medical exam and, for most Express Entry applicants, the settlement funds you must show. These amounts change
            periodically, so we itemise the current figures for your route rather than quote one headline, and government
            fees can be checked on canada.ca.</p>
          <p>On timing, a complete Express Entry application is usually finished about six
            months after the invitation, while provincial nomination, the study route and family sponsorship each add
            their own stages. Our <a href="/fees">fees guide</a> explains our professional fee and how it differs from
            government fees.
          </p>

          <h2>How Wild Mountain Immigration helps you move from Nigeria</h2>
          <p>
            We do one thing: build the strongest, most complete Canadian immigration application for your situation, and
            represent you with IRCC from Nigeria through to your arrival.</p>
          <p>As a CICC-regulated practice led by a licensed
            RCIC, we assess your profile honestly, choose the route where you are most competitive, including whether the
            French-language draws are realistic for you, and manage the paperwork, the ECA, the police certificate and
            the proof of funds so you do not have to decode it alone. If you are ready to move to Canada from Nigeria,
            tell us your plans and our team will map the route that gives you the best shot at Canada PR from Nigeria.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your age, Nigerian qualifications, experience, English and any French to find your strongest route, Express Entry, the study to PR path or a PNP." },
              { title: "Plan and prepare", desc: "We map the pathway, the ECA, the police certificate, proof of funds and your Express Entry, French-category or provincial strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC from Nigeria through to your arrival in Canada." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from Nigeria</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways Nigerian applicants use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The leading federal route to permanent residence, where strong English helps Nigerian applicants." href="/express-entry" />
            <FeatureCard icon={Globe} title="French-category draws" desc="Category-based draws that can use lower CRS cut-offs if you have French." href="/express-entry/category-based-draws" />
            <FeatureCard icon={GraduationCap} title="Study to PR" desc="Study in Canada and stay to work with a PGWP, a popular path to permanent residence." href="/study-permit" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="A nomination from Alberta, BC or Ontario adds 600 CRS points to your profile." href="/pnp" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="Come on a Canadian job offer and bridge to PR through the Canadian Experience Class." href="/work-permits" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from Nigeria to Canada"
        sub="Tell us your plans and our licensed team will map your best route, fully online, with honest advice and clear fees."
      />
    </>
  );
}
