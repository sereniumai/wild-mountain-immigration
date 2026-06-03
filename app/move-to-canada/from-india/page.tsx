import type { Metadata } from "next";
import { Globe, Rocket, Briefcase, GraduationCap, Map, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-india";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From India 2026",
  titleAbsolute: "Move to Canada From India: 2026 Guide",
  description:
    "Move to Canada from India in 2026: Express Entry, study permit to PGWP to PR, PNPs and the AAIP, work permits and sponsorship. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from india",
    "canada immigration from india",
    "moving to canada from india",
    "canada pr from india",
    "canada visa for indian citizens",
    "indian citizen move to canada",
  ],
});

const faqs = [
  {
    q: "How can an Indian citizen move to Canada permanently?",
    a: "India is Canada's largest source country, and most Indian applicants move permanently through Express Entry, the federal system for skilled workers. A Provincial Nominee Program such as the Alberta Advantage Immigration Program (AAIP) or the BC PNP is another strong route, and an enhanced provincial nomination adds 600 CRS points. A hugely popular path is to study in Canada, earn a Post-Graduation Work Permit, then transition to permanent residence through the Canadian Experience Class. Family sponsorship is also an option if you have a spouse, partner or close relative who is already a Canadian citizen or permanent resident.",
  },
  {
    q: "Do Indian citizens need a visa to enter Canada?",
    a: "Yes. Indian citizens are visa-required, so you need a Temporary Resident Visa (TRV) to enter Canada for a visit, plus biometrics (fingerprints and a photo). A visitor visa is for visits only; it does not let you live, work or settle. To move permanently you still need permanent residence, and to work you need the appropriate work permit. A common and costly misunderstanding is to treat a visitor visa as a route to relocate, so we make sure you apply for the right status for your actual plans.",
  },
  {
    q: "Is the study permit route to PR worth it from India?",
    a: "It is one of the most popular routes from India. You study at a designated learning institution in Canada, qualify for a Post-Graduation Work Permit, gain skilled Canadian work experience, then apply for permanent residence, often through the Canadian Experience Class within Express Entry. It takes planning around program choice, proof of funds, a Provincial Attestation Letter where required, and study permit approval, but it gives you Canadian credentials and Canadian experience that score strongly on your PR application.",
  },
  {
    q: "How is my Indian degree assessed for Express Entry?",
    a: "For immigration you have your Indian qualification assessed through an Educational Credential Assessment (ECA), most commonly via World Education Services (WES), so it can be compared to Canadian standards and scored under Express Entry. You will also sit an approved English test, with IELTS General Training commonly taken by Indian applicants. For regulated professions such as nursing, medicine, engineering and many trades, you may also need to be licensed by the relevant Canadian provincial regulator before you can practise. These are two separate processes, and we flag any licensing steps early.",
  },
  {
    q: "What documents do Indian applicants usually need?",
    a: "Expect to provide a WES (or equivalent) ECA, an approved language test such as IELTS, proof of settlement funds for most Express Entry applicants outside the Canadian Experience Class, and a Police Clearance Certificate (PCC) covering your time in India and any other country you lived in long enough to require one. Biometrics are required for the TRV and many applications, and a medical exam is usually needed for permanent residence. Fund and fee amounts change periodically, so we confirm current figures on canada.ca and give you a clear, itemised picture for your case.",
  },
  {
    q: "Which Canadian province is best for Indian immigrants?",
    a: "There is no single best province; it depends on your occupation, your CRS score and which Provincial Nominee Program your profile suits. Many Indian newcomers settle in Ontario for its job market and the OINP, in British Columbia for tech, healthcare and the BC PNP, and in Alberta for lower taxes and the AAIP. The Atlantic provinces run an employer-driven route that suits Indian workers with a job offer. As a Canmore-based firm, Alberta is the province we know best, and we match your profile to the program where you are most competitive.",
  },
  {
    q: "How long does it take to move to Canada from India?",
    a: "It depends on the route. After an Invitation to Apply, IRCC processes most complete Express Entry applications in around six months, though building a profile and waiting for a draw can add weeks or months. Provincial nomination adds a separate processing step. A study permit runs on its own timeline and the study to PR sequence can take a few years end to end. Spousal sponsorship currently runs roughly 12 months. Processing times move with volume, so we plan your timeline against the current IRCC estimates on canada.ca rather than a fixed promise.",
  },
];

export default function FromIndiaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From India: The Complete 2026 Guide",
            description:
              "Move to Canada from India in 2026: Express Entry, study permit to PGWP to PR, PNPs and the AAIP, work permits and sponsorship. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "India to Canada immigration support",
            description:
              "Move to Canada from India in 2026: Express Entry, study permit to PGWP to PR, PNPs and the AAIP, work permits and sponsorship. RCIC-reviewed.",
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
          { name: "From India", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from India</span></>}
        lede={
          <p>
            India is Canada&apos;s largest source country, and tens of thousands{" "}
            <strong>move to Canada from India</strong> every year. Most pursue Canada PR from India through Express
            Entry, with the study to work to PR route the other most travelled path. This guide walks through every
            route to permanent residence and to working in Canada, what each one requires, what it costs, how long it
            takes, and exactly what is different when you apply from India.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from India?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us your situation and our team will map the route to Canada that fits your profile and timeline.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The dominant federal PR route" },
                { label: "Study permit", href: "/study-permit", note: "Study, PGWP, then PR" },
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
            summary="Moving to Canada from India usually runs through Express Entry, the dominant route to permanent residence, where you compete on education, skilled experience, age and English. Indian citizens are visa-required, so you need a TRV plus biometrics to enter and PR to settle. Your credentials are typically assessed via WES and you sit IELTS for language points. The study permit to PGWP to PR pathway is hugely popular, and provincial programs such as the AAIP and BC PNP add 600 CRS points with a nomination. Plan for proof of settlement funds and an Indian police clearance certificate."
            items={[
              <>India is Canada&apos;s <strong>largest source country</strong>, and <a href="/express-entry">Express Entry</a> is the dominant route to permanent residence.</>,
              <>The <a href="/study-permit">study permit</a> to <a href="/work-permits/pgwp">PGWP</a> to PR route is hugely popular and builds Canadian credentials and experience.</>,
              <>Indian citizens are <strong>visa-required</strong>: you need a TRV plus biometrics to enter, and PR to settle.</>,
              <>Your <strong>ECA</strong> is usually done via <strong>WES</strong>, and IELTS is commonly taken for the language points.</>,
              <>Proof of settlement funds and a <strong>PCC</strong> matter; <a href="/pnp">provincial programs</a> including the <a href="/alberta-immigration">AAIP</a> and <a href="/pnp/british-columbia">BC PNP</a> are strong options.</>,
            ]}
          />

          <h2>How to move to Canada from India</h2>
          <p>
            When you <strong>move to Canada from India</strong>, you are following the most travelled path of any
            country. <a href="/express-entry">Express Entry</a> rewards a strong combination of education, skilled
            experience, age and English, and many Indian applicants build that profile through a Canadian study program
            first.</p>
          <p>Visiting and immigrating are different things, though: as an Indian passport holder you are
            visa-required even to visit, and a visitor visa never lets you settle or work. To live in Canada you need the
            right status: permanent residence to settle, or a work or study permit to come temporarily. The route that
            fits depends on your age, your occupation and your experience, and on whether you have a Canadian job offer
            or close family already in Canada.
          </p>
          <p>
            It comes down to two outcomes. <strong>Permanent residence</strong> lets you live, work and settle anywhere
            in Canada with no end date and leads to citizenship, while <strong>temporary status</strong> on a work or
            study permit brings you for a fixed spell and is very often used as a stepping stone to PR. The sections below
            take each route in turn so you can see where you fit before you spend a rupee.
          </p>

          <h2>The main routes from India at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (dominant route from India)"],
              ["Study permit to PGWP to PR", "Students who plan to stay and work", "Canadian credentials, experience, then PR"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Ontario and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["Employer work permit", "Those with a Canadian job offer", "Temporary work, often a bridge to PR"],
              ["Canadian Experience Class", "Those with skilled Canadian work experience", "Permanent residence within Express Entry"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes Indian citizens use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <h2>Express Entry from India</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is the route most Indian applicants take, and the quickest federal
            road to PR for skilled workers. You build an online profile, it is ranked by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and the
            top-ranked candidates are invited at each draw. With India sending more candidates than any other country, a
            sharp, well-built profile matters here more than anywhere. Three federal programs sit inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience, for example after studying in Canada and working on a PGWP. This is often the fastest path for Indian graduates already in Canada.</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled Indian workers applying from India with foreign experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople such as electricians, welders and technicians.</li>
          </ul>
          <p>
            Before you submit, you will need a <strong>WES (or equivalent) Educational Credential Assessment</strong> of
            your Indian degree and an approved English test, most Indian applicants sit IELTS General Training. Small
            differences in age, experience and test scores move your CRS more than people expect, and a{" "}
            <a href="/pnp">provincial nomination</a> adds a decisive 600 points. Your profile is also matched to a{" "}
            <strong>NOC code</strong> for your occupation, which sets your program eligibility.</p>
          <p>The same code decides
            whether you qualify for IRCC&apos;s category-based draws, for example in healthcare, trades or French
            language, where the cut-off score is often lower than the general CRS cut-off. Use our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand against the latest CRS cut-off,
            then we help you find the points you are leaving on the table.
          </p>

          <h2>The study permit to PGWP to PR route</h2>
          <p>
            For a great many Indian applicants, the surest path is to study in Canada first. A{" "}
            <a href="/study-permit">study permit</a> at a designated learning institution lets you study in Canada, and
            after graduating you may qualify for a <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>,
            an open permit that lets you work for almost any employer and build the skilled Canadian experience that
            feeds straight into the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>.</p>
          <p>You
            will need to show <a href="/study-permit/proof-of-funds">proof of funds</a> for tuition and living costs, and
            a <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> where required.
            Program choice matters enormously here, because it shapes your PGWP eligibility, so we help you plan the
            whole sequence from the start.
          </p>

          <h2>Provincial Nominee Programs for Indian movers</h2>
          <p>
            If your CRS sits below the latest federal cut-off, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the way through, and with India&apos;s competition
            it is a route worth planning for from the start. A province nominates the workers it needs, and an enhanced
            nomination adds 600 CRS points, usually enough to put a profile well above typical Express Entry cut-offs
            before IRCC decides who is invited. A few provinces recur for Indian movers:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, drawing Indian families with lower taxes, a strong job market and active worker streams. Based in Canmore, Alberta is the province we know best.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, a magnet for Indian tech and healthcare talent who want the West Coast.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, home to the largest Indian-Canadian community and the deepest job market, with streams drawn from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-driven route across Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador, and the <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a> for smaller communities.</li>
          </ul>

          <h2>Work permits and employer routes</h2>
          <p>
            With a Canadian job offer, secured or in progress, a <a href="/work-permits">work permit</a> can bring you
            over and often bridges to PR. The form depends on the role and employer: an employer-specific permit backed by
            a Labour Market Impact Assessment, an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a> for staff of a multinational with a
            Canadian office (common for Indian IT professionals), or a{" "}
            <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> once your PR file is advanced.
            Many Indian professionals start on a work permit, gather Canadian experience, then move to PR through the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or a PNP.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            If your spouse, common-law or conjugal partner already holds Canadian citizenship or PR, sponsorship through{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a> may be open to you. Sponsoring a
            partner normally carries no income test, and the sponsored spouse arrives as a permanent resident. Given how
            many Indian families already have relatives in Canada, the{" "}
            <a href="/family-sponsorship/parents-grandparents">Parents and Grandparents Program</a> and the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a> for long stays are also worth weighing. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> sets out who can sponsor whom.
          </p>

          <Callout type="brand" title="A regulated, India-aware practice">
            Wild Mountain Immigration is a CICC-regulated Canadian immigration practice led by a licensed RCIC
            (#R706497). Our team understands the move from India inside out, the WES ECA, the IELTS booking, the police
            clearance certificate, proof of settlement funds and the licensing hurdles for regulated roles, and we
            represent Indian clients entirely online, by video call and secure document sharing.
          </Callout>

          <h2>What is different when you move from India</h2>
          <ul>
            <li><strong>TRV and biometrics.</strong> Indian citizens are visa-required, so you need a Temporary Resident Visa and biometrics to enter; settling still requires PR and working requires a permit.</li>
            <li><strong>WES ECA.</strong> Your Indian qualification is usually assessed through WES so it can be scored against Canadian standards.</li>
            <li><strong>IELTS language test.</strong> An approved English test, commonly IELTS General Training, is needed to claim the language points.</li>
            <li><strong>Proof of funds.</strong> Most Express Entry applicants outside the Canadian Experience Class must show settlement funds, with a clear paper trail.</li>
            <li><strong>Police clearance certificate.</strong> A PCC covering India, and any other country you lived in long enough, is required; order it early as it can take time.</li>
            <li><strong>Professional licensing.</strong> Regulated professions such as nursing, medicine, engineering and many trades often need Canadian provincial registration before you can practise.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Costs sit in two groups. Government charges cover IRCC processing, the right-of-permanent-residence fee and
            biometrics; third-party costs add your WES ECA, IELTS, the police clearance certificate, a medical exam and,
            for most Express Entry applicants, the settlement funds you must show. These amounts change periodically, so
            we itemise the current figures for your route rather than quote one headline, and government fees can be
            checked on canada.ca.</p>
          <p>On timing, a complete Express Entry application is usually finished about six months
            after the invitation, while provincial nomination, the study-to-PR sequence and family sponsorship each add
            their own stages. Our <a href="/fees">fees guide</a> explains our professional fee and how it differs from
            government fees.
          </p>

          <h2>How Wild Mountain Immigration helps you move from India</h2>
          <p>
            We do one thing: build the strongest, most complete Canadian immigration application for your situation, and
            represent you with IRCC from India through to your arrival. As a CICC-regulated practice led by a licensed
            RCIC, we assess your profile honestly, choose the route where you are most competitive, and manage the
            paperwork, the WES ECA, the police clearance and the provincial steps so you do not have to decode it alone.
            Whether you aim for Canada PR through Express Entry or the study to PR path, we map the way you move to
            Canada from India, from the first call to your landing.
          </p>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your education, experience, age and English to find the route where you are strongest, whether that is Express Entry, the study to PR path or a PNP." },
              { title: "Plan and prepare", desc: "We map the pathway, the WES ECA, IELTS, proof of funds, the police certificate and your Express Entry or AAIP strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC from India through to your arrival, keeping you updated at every milestone." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from India</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways Indian applicants use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The dominant federal route to permanent residence for Indian skilled workers." href="/express-entry" />
            <FeatureCard icon={GraduationCap} title="Study to PR" desc="Study in Canada, earn a PGWP, then transition to permanent residence, a hugely popular path." href="/study-permit" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="A nomination from Alberta, BC or Ontario adds 600 CRS points to your profile." href="/pnp" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="Come on a Canadian job offer and bridge to PR through the Canadian Experience Class." href="/work-permits" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
            <FeatureCard icon={Globe} title="Other countries" desc="Moving from somewhere else? See our country-by-country guides to Canada." href="/move-to-canada" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from India to Canada"
        sub="Tell us your plans and our licensed team will map your best route, from Express Entry to the study to PR path, with honest advice and clear fees, all online."
      />
    </>
  );
}
