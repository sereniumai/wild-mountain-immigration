import type { Metadata } from "next";
import { Globe, Rocket, Briefcase, GraduationCap, Map, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-pakistan";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From Pakistan 2026",
  titleAbsolute: "Move to Canada From Pakistan: 2026 Guide",
  description:
    "Move to Canada from Pakistan in 2026: Express Entry, ECA and IELTS, study to PGWP to PR, work permits, sponsorship and costs. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from pakistan",
    "pakistan to canada immigration",
    "emigrate to canada from pakistan",
    "canada visa for pakistani citizens",
    "moving to canada from pakistan",
    "canada pr from pakistan",
  ],
});

const faqs = [
  {
    q: "How can a Pakistani citizen move to Canada permanently?",
    a: "Most Pakistanis move to Canada permanently through Express Entry, the federal system for skilled workers, or through a Provincial Nominee Program such as Alberta's AAIP or the BC PNP, where an enhanced nomination adds 600 CRS points. Other routes include studying in Canada and staying on a Post-Graduation Work Permit, an employer-driven work permit that can bridge to permanent residence, or family sponsorship if you have a spouse, partner or close relative who is already a Canadian citizen or permanent resident. We match your background to the program most likely to invite you.",
  },
  {
    q: "Do Pakistani citizens need a visa to enter Canada?",
    a: "Yes. Pakistani citizens are visa-required, so you apply for a Temporary Resident Visa (TRV) to visit and give biometrics (fingerprints and a photo) as part of the process. A visitor visa is for short stays only; it does not let you live, work or settle in Canada. To move permanently you need permanent residence, and to work you need the appropriate work permit. We make sure you apply for the right status for your plans, and you should confirm current requirements on canada.ca.",
  },
  {
    q: "How do I get an ECA and which language test should I take?",
    a: "For immigration, you typically have your degree assessed through an Educational Credential Assessment (ECA), usually via World Education Services (WES) for Pakistani applicants, so it can be compared to Canadian standards and scored under Express Entry. For language, most Pakistani applicants take IELTS General Training to earn their English points, though other approved tests exist. We help you sequence the ECA and the test so your Express Entry profile is as strong as possible before you create it.",
  },
  {
    q: "How closely are settlement funds scrutinised for Pakistani applicants?",
    a: "Closely. Most Express Entry applicants outside the Canadian Experience Class must show proof of settlement funds, and for Pakistani applications the source of funds tends to receive careful scrutiny. That means documenting clearly where the money came from, with bank letters, statements and a clean paper trail that satisfies IRCC, and showing the funds are genuinely available and unencumbered. Planning this early matters, and our team helps you assemble proof of funds and source-of-funds documentation so it is transparent and credible.",
  },
  {
    q: "Which police certificate do I need from Pakistan?",
    a: "IRCC normally requires a police character certificate from the relevant Pakistani authority for the time you have lived in Pakistan, plus certificates from any other country you have lived in long enough to require one. The process and issuing authority can vary by region, so we confirm exactly what applies to your history and timeline so it does not delay your application. Order it early, because turnaround times are not always predictable.",
  },
  {
    q: "Is the study permit route to PR a good option from Pakistan?",
    a: "Yes, it is a popular and proven path. You study at a designated learning institution in Canada, qualify for a Post-Graduation Work Permit, gain skilled Canadian work experience, then apply for permanent residence, often through the Canadian Experience Class. You will need to show proof of funds for tuition and living costs and a Provincial Attestation Letter where required. Program choice shapes your PGWP eligibility, so we help you plan the whole sequence from the start.",
  },
  {
    q: "How long does it take to move to Canada from Pakistan?",
    a: "It depends on the route. After an Invitation to Apply, IRCC processes most complete Express Entry applications in around six months, though building a profile and waiting for a draw can add weeks or months. Provincial nomination and the study to PR sequence each add their own steps, and spousal sponsorship currently runs roughly 12 months. Processing times move with volume, so we plan your timeline against the current IRCC estimates on canada.ca rather than a fixed promise.",
  },
];

export default function FromPakistanPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From Pakistan: The Complete 2026 Guide",
            description:
              "Move to Canada from Pakistan in 2026: Express Entry, ECA and IELTS, study to PGWP to PR, work permits, sponsorship and costs. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "Pakistan to Canada immigration support",
            description:
              "Move to Canada from Pakistan in 2026: Express Entry, ECA and IELTS, study to PGWP to PR, work permits, sponsorship and costs. RCIC-reviewed.",
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
          { name: "From Pakistan", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from Pakistan</span></>}
        lede={
          <p>
            Pakistan is one of the largest sources of new Canadians, and many people{" "}
            <strong>move to Canada from Pakistan</strong> every year, most often through Express Entry. This guide walks
            through every route to permanent residence and to working in Canada, what each one requires, what it costs,
            how long it takes, and exactly what is different for Pakistani applicants, from the visa and biometrics to
            the source-of-funds documentation that gets close attention.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from Pakistan?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We work with Pakistani clients entirely online. Tell us your plans and our team will map your route to PR.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The leading federal PR route" },
                { label: "Proof of funds", href: "/study-permit/proof-of-funds", note: "Documenting your source of funds" },
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
            summary="Moving to Canada from Pakistan usually means Express Entry, the leading federal route to permanent residence, or a Provincial Nominee Program such as Alberta's AAIP or the BC PNP. Studying first and bridging through a PGWP is a proven alternative, and family sponsorship can suit those with a partner already in Canada. Pakistani citizens are visa-required, so plan for a TRV and biometrics to enter, plus permanent residence to settle. Have your degree assessed via an ECA, usually through WES, and take IELTS General Training for language points. Settlement funds, source of funds and a Pakistani police certificate all need careful preparation."
            items={[
              <>Pakistani citizens usually move through <a href="/express-entry">Express Entry</a>, the leading route, or a <a href="/pnp">Provincial Nominee Program</a> such as the <a href="/alberta-immigration">AAIP</a> or <a href="/pnp/british-columbia">BC PNP</a>.</>,
              <>Have your degree assessed via an <strong>ECA</strong>, usually through <strong>WES</strong>, and take <strong>IELTS</strong> General Training for your language points.</>,
              <>Pakistani citizens are <strong>visa-required</strong>, so plan for a TRV and <strong>biometrics</strong> as part of the process.</>,
              <>The <a href="/study-permit">study permit</a> to <a href="/work-permits/pgwp">PGWP</a> to PR route is a popular and proven path from Pakistan.</>,
              <>Prepare for close scrutiny of <strong>settlement funds and source of funds</strong>, plus a <strong>police certificate</strong> from the relevant Pakistani authority.</>,
            ]}
          />

          <h2>How to move to Canada from Pakistan</h2>
          <p>
            When you <strong>move to Canada from Pakistan</strong>, <a href="/express-entry">Express Entry</a> is usually
            the centre of the plan, with provincial programs and the study route as strong alternatives. The key is to
            be realistic about the requirements: Pakistani passport holders are visa-required, so you need the right
            status both to enter and to settle, and a visitor visa never lets you live or work in Canada.</p>
          <p>Permanent
            residence lets you live in Canada indefinitely and leads to citizenship, while a work or study permit brings
            you temporarily and is often used as a stepping stone. The route that fits depends on your age, education,
            experience and language, and on how carefully your documentation is prepared.
          </p>
          <p>
            In short, every route points to one of two outcomes: <strong>permanent residence</strong>, or{" "}
            <strong>temporary status</strong> on a work or study permit that very often bridges to PR. The sections below
            take each route in turn so you can see where you fit before you commit.
          </p>

          <h2>The main routes from Pakistan at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (leading federal route)"],
              ["Study permit to PGWP to PR", "Students who plan to stay and work", "Canadian credentials, experience, then PR"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Ontario and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["Employer work permit", "Those with a Canadian job offer", "Temporary work, often a bridge to PR"],
              ["Canadian Experience Class", "Those with skilled Canadian work experience", "Permanent residence within Express Entry"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes Pakistani citizens use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <h2>Express Entry from Pakistan</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is the leading route to Canada PR from Pakistan and the quickest
            federal road to permanent residence for skilled workers. You build an online profile, your CRS score is set
            by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and each draw
            invites the top-ranked candidates to apply for permanent residence. Alongside general all-program draws, IRCC
            also runs category-based draws that target specific occupations or French ability, which can favour the right
            Pakistani profile. Three federal programs sit inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience, for example after studying in Canada and working on a PGWP.</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled Pakistani workers applying with foreign experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople such as electricians, welders and technicians.</li>
          </ul>
          <p>
            Your score is built from your age, your <strong>ECA</strong> (usually via WES), your <strong>IELTS</strong>
            {" "}result, your skilled work experience and a possible provincial nomination, so sequencing those steps well
            really matters. A <a href="/pnp">provincial nomination</a> adds a decisive 600 points. Try our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand, then we help you find the points
            you are leaving on the table.
          </p>

          <h2>The study permit to PGWP to PR route</h2>
          <p>
            Studying first is a popular and proven Pakistani path to PR. A{" "}
            <a href="/study-permit">study permit</a> at a designated learning institution gets you onto a Canadian course,
            and graduating can open a <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit
            that lets you work for almost any employer and bank the skilled Canadian experience that flows into the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>.</p>
          <p>You will need{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> for tuition and living costs, documented with the
            same care a Pakistani application needs, plus a{" "}
            <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> where required. Since
            programme choice drives PGWP eligibility, we help you plan the whole sequence from the outset.
          </p>

          <h2>Provincial Nominee Programs for Pakistani movers</h2>
          <p>
            If your CRS sits below the latest federal cut-off, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the route through. A province nominates the workers
            it needs, and an enhanced nomination adds 600 CRS points, enough to put recent candidates well clear of the
            cut-off in PNP-specific draws before IRCC decides who is invited. A few provinces recur for Pakistani movers:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, attractive for lower taxes, a strong job market and active worker streams. Based in Canmore, Alberta is the province we know best.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, a strong fit for tech, healthcare and skilled workers who want the West Coast.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, home to a large Pakistani-Canadian community and the deepest job market, with streams drawn from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-led route across the four Atlantic provinces, plus the <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a> for smaller communities.</li>
          </ul>

          <h2>Work permits and employer routes</h2>
          <p>
            With a Canadian job offer, secured or in progress, a <a href="/work-permits">work permit</a> can bring you
            over and often bridges to PR. The form depends on the role and employer: an employer-specific permit backed by
            a Labour Market Impact Assessment, an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a> for staff of a multinational with a
            Canadian office, or a <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> once your
            PR file is advanced. Many Pakistani professionals start on a work permit, gather Canadian experience, then move
            to PR through the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a PNP.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            If your spouse, common-law or conjugal partner already holds Canadian citizenship or PR, sponsorship through{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a> may be open to you. Sponsoring a
            partner normally carries no income test, and the sponsored spouse arrives as a permanent resident. Pakistani
            families with relatives in Canada can also weigh the{" "}
            <a href="/family-sponsorship/parents-grandparents">Parents and Grandparents Program</a> or the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a> for long stays. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> sets out who can sponsor whom.
          </p>

          <Callout type="brand" title="An online, Pakistan-aware RCIC practice">
            Wild Mountain Immigration is a CICC-regulated Canadian immigration practice led by a licensed RCIC
            (#R706497), based in Canmore, Alberta and working with clients in Pakistan entirely online by video call,
            phone and secure document sharing. You get licensed guidance from home, with careful help on the
            source-of-funds and police-certificate steps that need extra attention on Pakistani applications.
          </Callout>

          <h2>What is different when you move from Pakistan</h2>
          <ul>
            <li><strong>Visa-required, plus biometrics.</strong> You apply for a TRV to visit and give biometrics; settling still requires PR and working requires a permit. Confirm current rules on canada.ca.</li>
            <li><strong>Pakistani police certificate.</strong> IRCC will ask for a police clearance from the relevant issuing authority, often a NADRA Police Character Certificate or one from local police, plus certificates from any other country you have lived in.</li>
            <li><strong>Source of funds is scrutinised.</strong> Document where your settlement funds came from with clear bank letters, statements and a clean paper trail.</li>
            <li><strong>ECA via WES and IELTS.</strong> Have your degree assessed and take an approved English test so both can be scored under Express Entry.</li>
            <li><strong>Provincial and family options.</strong> Programs like the AAIP, the BC PNP and family sponsorship can open routes alongside, or instead of, federal Express Entry.</li>
            <li><strong>Professional licensing.</strong> Regulated professions such as medicine, nursing and engineering often need Canadian provincial registration before you can practise.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Costs sit in two groups. Government charges cover IRCC processing, the right-of-permanent-residence fee and
            biometrics; third-party costs add your WES ECA, IELTS, the Pakistani police certificate, a medical exam and,
            for most Express Entry applicants, the settlement funds you must show. These amounts change periodically, so we
            itemise the current figures for your route rather than quote one headline, and government fees can be checked
            on canada.ca.</p>
          <p>On timing, a complete Express Entry application is usually finished about six months after the
            invitation, while provincial nomination, the study route and family sponsorship each add their own stages. Our{" "}
            <a href="/fees">fees guide</a> explains our professional fee and how it differs from government fees.
          </p>

          <h2>How Wild Mountain Immigration helps you move from Pakistan</h2>
          <p>
            We do one thing: build the strongest, most complete Canadian immigration application for your situation, and
            represent you with IRCC, all online, from Pakistan through to your arrival. As a CICC-regulated practice led
            by a licensed RCIC, we assess your profile honestly, choose the route where you are most competitive, and
            manage the paperwork, the WES ECA, the police certificate and the source-of-funds documentation so you do
            not have to decode it alone.</p>
          <p>Whichever pathway fits, our goal is the same: to help you{" "}
            <strong>move to Canada from Pakistan</strong> on the route that gives you the best realistic chance, with
            IRCC always the decision-maker on the outcome.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your age, qualifications, experience and language to find your strongest route from Pakistan, Express Entry, the study to PR path or a PNP." },
              { title: "Plan and prepare", desc: "We map the pathway, the ECA via WES, IELTS, the police certificate, source-of-funds documentation and your Express Entry or AAIP strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC, all online, from Pakistan through to your arrival in Canada." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from Pakistan</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways Pakistani applicants use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The leading federal route to permanent residence, built on your ECA, IELTS and experience." href="/express-entry" />
            <FeatureCard icon={GraduationCap} title="Study to PR" desc="Study in Canada and stay to work with a PGWP, a popular study to PR path from Pakistan." href="/study-permit" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="A nomination from Alberta, BC or Ontario adds 600 CRS points to your profile." href="/pnp" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="Come on a Canadian job offer and bridge to PR through the Canadian Experience Class." href="/work-permits" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
            <FeatureCard icon={Globe} title="Other countries" desc="Moving from somewhere else? See our country-by-country guides to Canada." href="/move-to-canada" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from Pakistan to Canada"
        sub="Tell us your plans and our licensed team will map your best route, all online, with honest advice and clear fees."
      />
    </>
  );
}
