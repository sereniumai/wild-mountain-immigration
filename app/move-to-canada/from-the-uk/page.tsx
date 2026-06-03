import type { Metadata } from "next";
import { Globe, Rocket, Briefcase, GraduationCap, Map, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-the-uk";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From the UK 2026",
  titleAbsolute: "Move to Canada From the UK: 2026 Guide",
  description:
    "Move to Canada from the UK in 2026: Express Entry, PNPs, the IEC Working Holiday, work and study permits, costs and timelines. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from uk",
    "uk to canada immigration",
    "moving to canada from uk",
    "emigrate to canada from uk",
    "canada visa for uk citizens",
    "british citizen move to canada",
  ],
});

const faqs = [
  {
    q: "How can a UK citizen move to Canada permanently?",
    a: "Most British citizens move to Canada permanently through Express Entry, the federal system for skilled workers, or through a Provincial Nominee Program such as the Alberta Advantage Immigration Program or the BC PNP. Strong English, UK degrees and professional experience often produce competitive CRS scores. Other routes include an employer-driven work permit that bridges to permanent residence, studying in Canada and staying on a Post-Graduation Work Permit, or family sponsorship if you have a spouse, partner or close relative who is already a Canadian citizen or permanent resident.",
  },
  {
    q: "Do UK citizens need a visa to enter Canada?",
    a: "British citizens are visa-exempt for short visits and travel on an Electronic Travel Authorisation (eTA) rather than a visa. An eTA is for visits only; it does not let you live, work or settle in Canada. To move permanently you still need permanent residence, and to work you need the appropriate work permit. A common and costly misunderstanding is to treat the eTA as a right to relocate, so we make sure you apply for the right status for your actual plans.",
  },
  {
    q: "Can young British people work in Canada through IEC?",
    a: "Yes. The International Experience Canada (IEC) programme includes a Working Holiday open work permit for eligible UK citizens, generally aged 18 to 35, that lets you live and work almost anywhere in Canada for up to two years. It is a popular first step, and the Canadian work experience you gain through it can later count toward a Canadian Experience Class profile under Express Entry, turning a working holiday into a route to permanent residence.",
  },
  {
    q: "Is it expensive to move to Canada from the UK?",
    a: "Budget for several categories: IRCC government fees, the right-of-permanent-residence fee, biometrics, an approved English language test, an Educational Credential Assessment for your UK qualifications, proof of settlement funds (for most Express Entry applicants outside the Canadian Experience Class), and your own relocation costs such as flights, shipping and initial housing. The exact figures depend on your route and family size and change periodically, so confirm current government fees on canada.ca. We give you a clear, itemised picture for your specific case before you commit.",
  },
  {
    q: "Do my UK qualifications count in Canada?",
    a: "For immigration scoring, you typically have your UK degree assessed through an Educational Credential Assessment (ECA) from a designated organisation, so it can be compared to Canadian standards and scored under Express Entry. For regulated professions, such as nursing, medicine, teaching, law and many skilled trades, you usually also need to be licensed or certified by the relevant Canadian provincial regulator before you can practise. These are two separate processes, and confirming the licensing path early prevents an unwelcome surprise after you arrive.",
  },
  {
    q: "Which Canadian province is best for UK immigrants?",
    a: "There is no single best province; it depends on your occupation, lifestyle and which Provincial Nominee Program your profile suits. Many British newcomers are drawn to Alberta for its mountains, lower taxes and the AAIP, to British Columbia for the BC PNP and tech and outdoor lifestyle, and to Ontario for jobs and the OINP. The Atlantic provinces run an employer-driven route that can suit British workers with a job offer. We match your profile to the province and program where you are most competitive.",
  },
  {
    q: "How long does it take to move to Canada from the UK?",
    a: "It varies by route. Once you have an Invitation to Apply, IRCC usually finishes a complete Express Entry application in about six months, though building a competitive profile and waiting for the right draw can add weeks or months before that. A provincial nomination adds its own processing stage. The IEC Working Holiday opens in seasonal pools, so timing depends on when rounds run and how quickly they fill. Spousal sponsorship is currently around 12 months. Because British applicants are visa-exempt, there is no separate entry-visa wait, but we still plan your timeline against live IRCC estimates rather than a fixed promise.",
  },
];

export default function FromUkPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From the UK: The Complete 2026 Guide",
            description:
              "Move to Canada from the UK in 2026: Express Entry, PNPs, the IEC Working Holiday, work and study permits, costs and timelines. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "UK to Canada immigration support",
            description:
              "Move to Canada from the UK in 2026: Express Entry, PNPs, the IEC Working Holiday, work and study permits, costs and timelines. RCIC-reviewed.",
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
          { name: "From the UK", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from the UK</span></>}
        lede={
          <p>
            Thousands of Britons <strong>move to Canada from the UK</strong> every year, and it is one of the most
            accessible moves there is: native English, qualifications Canada understands, and visa-exempt travel.
            This guide walks through every route to permanent residence and to working in Canada, what each one
            requires, what it costs, how long it takes, and exactly what is different when you apply from the UK.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from the UK?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us your situation and our team will map the route to Canada that fits your profile and timeline.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The fastest federal PR route" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "A popular province for UK movers" },
                { label: "International Experience Canada", href: "/work-permits/international-experience-canada", note: "Working Holiday for UK youth" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
                { label: "Move to Canada by country", href: "/move-to-canada", note: "Guides for other countries" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Moving to Canada from the UK usually runs through Express Entry or a Provincial Nominee Program, where strong English helps your CRS score. The IEC Working Holiday is a popular first step for those aged 18 to 35. British citizens are visa-exempt for visits (eTA) but still need permanent residence to settle and a work permit to work. Plan for an Educational Credential Assessment, an English test, an ACRO police certificate and proof of funds, and check that regulated professions are licensed in Canada before you arrive."
            items={[
              <>British citizens usually move through <a href="/express-entry">Express Entry</a> or a <a href="/pnp">Provincial Nominee Program</a>, and strong English lifts your CRS score.</>,
              <>UK citizens are <strong>visa-exempt</strong> for visits (eTA), but you still need PR to settle and a <a href="/work-permits">work permit</a> to work.</>,
              <>The <a href="/work-permits/international-experience-canada">IEC Working Holiday</a> lets eligible UK youth (18 to 35) live and work in Canada for up to two years.</>,
              <>Have your UK degree assessed via an <strong>ECA</strong>, sit an approved English test, and get an <strong>ACRO</strong> police certificate.</>,
              <><a href="/alberta-immigration">Alberta</a>, British Columbia and the Atlantic provinces are all popular landing spots for British newcomers.</>,
            ]}
          />

          <h2>How to move to Canada from the UK</h2>
          <p>
            When you <strong>move to Canada from the UK</strong>, you start with real advantages. English is one of
            Canada&apos;s two official languages, so you score well on the language factors that drive most economic
            programs. UK degrees and trade qualifications are well understood and straightforward to have assessed.</p>
          <p>And
            as a British passport holder you can travel to Canada visa-exempt to visit, explore and attend interviews.
            One point of language to clear up first: Canada has no single skilled worker visa equivalent to the UK
            system, so when people say they want to emigrate to Canada from the UK they usually mean qualifying for
            permanent residence through a points-based program rather than applying for a named visa.
          </p>
          <p>
            What you cannot do is simply turn up and stay. Visiting and immigrating are different things. The route
            that fits depends on your age, your occupation, your work experience and whether you have a Canadian job
            offer or close family already in Canada.
          </p>
          <p>
            Two outcomes are possible. <strong>Permanent residence</strong> gives you the right to live, work and settle
            anywhere in Canada for good, and after a qualifying period it leads to citizenship and a Canadian passport.{" "}
            <strong>Temporary status</strong> on a work or study permit, by contrast, brings you for a defined period and
            is frequently used as a launchpad into PR. The sections below take each British route in turn so you can see
            where you fit before you spend a penny.
          </p>

          <h2>The main routes from the UK at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (fastest federal route)"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Atlantic and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["IEC Working Holiday", "UK citizens roughly 18 to 35", "Up to 2 years of open work, a stepping stone to PR"],
              ["Employer work permit", "Those with a Canadian job offer", "Temporary work, often a bridge to PR"],
              ["Study permit", "Students at a designated Canadian institution", "Study, then a PGWP and a path to PR"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes British citizens use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <h2>Express Entry from the UK</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is the route most British movers take, and the quickest federal
            road to permanent residence for skilled workers. You build an online profile, that profile is ranked by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and the
            top-ranked candidates receive an Invitation to Apply at each draw. British applicants often start with an
            advantage on language because native English secures strong points, but every other part of the score still
            has to be assembled carefully. Three federal programs sit inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience (for example, after an IEC Working Holiday).</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled British workers applying from the UK with foreign experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople.</li>
          </ul>
          <p>
            Before you submit, you will need an <strong>Educational Credential Assessment</strong> of your UK degree and
            an approved English test (most British applicants sit IELTS General Training or CELPIP). Small differences in
            age, experience and test scores move your CRS more than people expect, and a{" "}
            <a href="/pnp">provincial nomination</a> adds a decisive 600 points. Use our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand, then we help you find the points
            you are leaving on the table.
          </p>

          <h2>Provincial Nominee Programs for British movers</h2>
          <p>
            If your CRS sits below the latest federal cut-off, a <a href="/pnp">Provincial Nominee Program (PNP)</a>
            {" "}is frequently the way through. A province nominates workers it is short of, and an enhanced nomination
            carries an extra 600 CRS points. In recent draws, that margin has put candidates comfortably clear of the
            cut-off before IRCC issues the invitation. British newcomers tend to look hardest at a handful of provinces:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, a perennial favourite with the British expat community for its Rockies, lower personal taxes and busy worker streams. Based in Canmore, Alberta is the province we know inside out.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, a magnet for tech, healthcare and skilled workers who want the West Coast and the mountains on the doorstep.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, home to Canada&apos;s deepest job market and streams that draw directly from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-led route across Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador, well suited to British workers with an offer in hand.</li>
          </ul>

          <h2>The IEC Working Holiday: a popular first move</h2>
          <p>
            For younger Britons, the <a href="/work-permits/international-experience-canada">International Experience
            Canada (IEC)</a> Working Holiday is one of the easiest ways to get to Canada. It is an open work permit, so
            you are not tied to one employer, and it lets eligible UK citizens live and work almost anywhere in Canada
            for up to two years.</p>
          <p>The Working Holiday visa age limit for British applicants is generally 18 to 35, so it
            is worth applying before you age out. Beyond the adventure, it is strategically valuable: skilled Canadian
            work experience gained on a Working Holiday can qualify you for the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>, turning a two-year trip
            into a springboard to permanent residence.
          </p>

          <h2>Work permits and employer routes</h2>
          <p>
            A Canadian job offer, whether you already hold one or can land one, lets a <a href="/work-permits">work
            permit</a> bring you over quickly, and it often becomes a bridge to PR. The exact permit depends on the role
            and employer: an employer-specific permit backed by a Labour Market Impact Assessment, an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a> for staff of a multinational with a
            Canadian arm, or a <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> to keep
            you working once your PR file is advanced. Many British professionals arrive on a permit, accumulate Canadian
            experience, then convert to PR via Express Entry or a PNP.
          </p>

          <h2>Studying in Canada as a route to PR</h2>
          <p>
            Plenty of British applicants reach PR by studying first. A <a href="/study-permit">study permit</a> at a
            designated learning institution gets you into a Canadian programme, and graduating can open a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit whose Canadian work
            experience flows directly into the Canadian Experience Class. You will need{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> covering tuition and living costs, plus a{" "}
            <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> where the province
            requires one.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            Where a spouse, common-law or conjugal partner already holds Canadian citizenship or PR, they may be able to
            sponsor you through <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a>. Sponsoring a
            partner usually carries no minimum income test, and the sponsored spouse lands as a permanent resident.
            British parents and grandparents of Canadians can look instead at the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a> for extended stays. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> sets out who can sponsor whom.
          </p>

          <Callout type="brand" title="A regulated, UK-aware practice">
            Wild Mountain Immigration is a CICC-regulated Canadian immigration practice. Our team understands the move
            from Britain to Canada inside out, the ACRO certificate, the ECA, the IELTS booking, the licensing hurdles
            for NHS and other regulated roles, and we represent UK clients entirely online, by video call and secure
            document sharing.
          </Callout>

          <h2>What is different when you move from the UK</h2>
          <ul>
            <li><strong>eTA, not a visa.</strong> You travel visa-exempt on an eTA for visits, but settling requires PR and working requires a permit.</li>
            <li><strong>ACRO police certificate.</strong> IRCC asks for an ACRO Police Certificate covering your time in the UK; order it early, as it can take time to arrive.</li>
            <li><strong>ECA for UK qualifications.</strong> Your degree is assessed by a designated organisation so it can be scored against Canadian standards.</li>
            <li><strong>Language test.</strong> Even as a native speaker you usually sit an approved English test (IELTS General Training or CELPIP) to claim the points.</li>
            <li><strong>Professional licensing.</strong> Regulated professions, such as nursing, medicine, teaching and many trades, often need Canadian provincial registration before you can practise.</li>
            <li><strong>Healthcare and settling in.</strong> Provincial health cover, banking, credit history and driving licences all restart in Canada; we flag the practical steps so nothing catches you out.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Your budget splits two ways. Government charges cover IRCC processing, the right-of-permanent-residence fee
            and biometrics, while third-party costs run to your ECA, an English test, the ACRO certificate, a medical
            exam and, for most Express Entry applicants, the settlement funds you must show. Because these amounts shift
            from time to time, we itemise the current figures for your specific route rather than quote one headline
            number.</p>
          <p>Timeline-wise, IRCC typically finishes a complete Express Entry application around six months after
            the invitation, with provincial nomination and family sponsorship adding their own stages. Our{" "}
            <a href="/fees">fees guide</a> sets out our professional fee and how it sits apart from government fees.
          </p>

          <h2>How Wild Mountain Immigration helps you move from the UK</h2>
          <p>
            We do one thing: build the strongest, most complete Canadian immigration application for your situation, and
            represent you with IRCC from the UK through to your arrival.</p>
          <p>As a CICC-regulated practice led by a licensed
            RCIC, we assess your profile honestly, choose the route where you are most competitive, and manage the
            paperwork, the ECA, the police certificates and the provincial steps so you do not have to decode it alone.
            Whether you want to <strong>move to Canada from the UK</strong> as a skilled worker, a young British expat on
            a Working Holiday or a sponsored partner, we make the path clear before you commit.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your age, UK qualifications, experience and language to find the route where you are strongest, whether that is Express Entry, a PNP or a work permit." },
              { title: "Plan and prepare", desc: "We map the pathway, the ECA, the ACRO certificate, the language test and your Express Entry or provincial strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC from the UK through to your arrival, keeping you updated at every milestone." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from the UK</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways British applicants use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route to permanent residence, where strong English helps British applicants." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="A nomination from Alberta, BC, Ontario or the Atlantic provinces adds 600 CRS points." href="/pnp" />
            <FeatureCard icon={Briefcase} title="IEC Working Holiday" desc="Live and work in Canada for up to two years, a popular first move for UK youth." href="/work-permits/international-experience-canada" />
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study in Canada and stay to work with a PGWP, a proven path to permanent residence." href="/study-permit" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
            <FeatureCard icon={Globe} title="Other countries" desc="Moving from somewhere else? See our country-by-country guides to Canada." href="/move-to-canada" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from the UK to Canada"
        sub="Tell us your plans and our licensed team will map your best route, with honest advice and clear fees."
      />
    </>
  );
}
