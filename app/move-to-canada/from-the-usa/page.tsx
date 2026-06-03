import type { Metadata } from "next";
import { Globe, Rocket, Briefcase, Building2, Map, GraduationCap, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-the-usa";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From the USA 2026",
  titleAbsolute: "Move to Canada From the USA: 2026 Guide",
  description:
    "Move to Canada from the USA in 2026: Express Entry, CUSMA work permits, PNPs, study to PGWP and sponsorship, plus costs and timelines. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from usa",
    "us to canada immigration",
    "moving to canada from the us",
    "americans moving to canada",
    "canada immigration for us citizens",
    "us citizen move to canada",
  ],
});

const faqs = [
  {
    q: "How can a US citizen move to Canada permanently?",
    a: "Most Americans move to Canada permanently through Express Entry, the federal system for skilled workers, or through a Provincial Nominee Program such as the Alberta Advantage Immigration Program or the BC PNP. Native English, US degrees and professional experience often produce competitive CRS scores. Other routes include a CUSMA professional or intra-company transfer work permit that can later lead to permanent residence, studying in Canada and staying on a Post-Graduation Work Permit, or family sponsorship if you have a partner or close relative who is already a Canadian citizen or permanent resident.",
  },
  {
    q: "Do US citizens need a visa or eTA to enter Canada?",
    a: "US citizens are visa-exempt, and uniquely they do not even need an Electronic Travel Authorisation when entering Canada by land or sea. An eTA is only required if a US citizen flies into Canada, and even then it is for visits, not for living, working or settling. To move permanently you still need permanent residence, and to work you need the appropriate work permit. A common and costly misunderstanding is to treat visa-exempt travel as a right to relocate, so we make sure you apply for the right status for your actual plans.",
  },
  {
    q: "Can H-1B holders and US tech workers move to Canada?",
    a: "Yes, and many do. Tech professionals at US employers often pivot to Canada for stability and a clearer path to permanent residence. Strong options include Express Entry, where US work experience and English both help your CRS score, a CUSMA work permit for eligible professionals, or an intra-company transfer if your US employer also has a Canadian office. We map which route fits your job, your timeline and your goal of staying long term, and how to sequence a temporary permit into permanent residence.",
  },
  {
    q: "What is a CUSMA work permit?",
    a: "CUSMA (the Canada-United States-Mexico Agreement, formerly NAFTA and also called USMCA) lets eligible US citizens work in Canada in certain professional occupations, or transfer within a multinational company, often without the usual labour market test. It is a temporary work permit, not permanent residence, but it can be a strong bridge to PR through Express Entry once you have Canadian work experience. We confirm whether your occupation and offer qualify before you apply.",
  },
  {
    q: "Do my US qualifications count in Canada?",
    a: "For CRS scoring, a US degree is run through an Educational Credential Assessment (ECA) by a designated organisation so it can be measured against Canadian standards; US qualifications are well recognised and the assessment is usually straightforward. Licensing is the separate hurdle, and it bites harder for some US professions than people expect: doctors, nurses, lawyers, teachers and many trades must register with the relevant Canadian provincial regulator before practising, and a US license or bar admission does not carry over. We confirm the licensing route early so it does not stall your plans north of the border.",
  },
  {
    q: "How long does it take to move to Canada from the USA?",
    a: "It depends on the route. After an Invitation to Apply, IRCC processes most complete Express Entry applications in around six months, though building a profile and waiting for a draw can add weeks or months. A CUSMA or intra-company transfer work permit can often be arranged more quickly, sometimes at a port of entry, which is part of why proximity makes this such a fast move. Provincial nomination and spousal sponsorship each add their own steps. Processing times move with volume, so we plan against the current IRCC estimates on canada.ca rather than a fixed promise.",
  },
];

export default function FromUsaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From the USA: The Complete 2026 Guide",
            description:
              "Move to Canada from the USA in 2026: Express Entry, CUSMA work permits, PNPs, study to PGWP and sponsorship, plus costs and timelines. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "USA to Canada immigration support",
            description:
              "Move to Canada from the USA in 2026: Express Entry, CUSMA work permits, PNPs, study to PGWP and sponsorship, plus costs and timelines. RCIC-reviewed.",
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
          { name: "From the USA", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from the USA</span></>}
        lede={
          <p>
            Plenty of Americans <strong>move to Canada from the USA</strong> each year, and proximity makes it one of the
            most accessible moves there is: native English, qualifications Canada understands, and visa-exempt travel with
            no eTA needed by land. Americans moving to Canada increasingly pivot via a CUSMA work permit or Express Entry,
            often citing political stability and a clearer path to permanent residence. This guide walks through every
            route to permanent residence and to working in Canada, what each one requires, what it costs, how long it
            takes, and exactly what is different for American applicants.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from the USA?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us your plans, whether it is Express Entry or a CUSMA work permit, and our team will map your route. All online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The fastest federal PR route" },
                { label: "Intra-company transfer", href: "/work-permits/intra-company-transfer", note: "Move within your US employer" },
                { label: "Work permits", href: "/work-permits", note: "CUSMA and employer-driven options" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
                { label: "Move to Canada by country", href: "/move-to-canada", note: "Guides for other countries" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="To move to Canada from the USA, most Americans use Express Entry or a Provincial Nominee Program, where native English helps your CRS score. US citizens are visa-exempt and need no eTA by land, but you still need permanent residence to settle and a work permit to work. CUSMA professional and intra-company transfer permits suit those at US employers, including many H-1B and tech workers. Have your US degree assessed via an ECA, get an FBI police certificate, and check that regulated professions are licensed in Canada before you arrive."
            items={[
              <>Americans usually move through <a href="/express-entry">Express Entry</a> or a <a href="/pnp">Provincial Nominee Program</a>, native English helps your CRS score.</>,
              <>US citizens are <strong>visa-exempt</strong> and need no eTA by land, but you still need PR to settle and a <a href="/work-permits">work permit</a> to work.</>,
              <><a href="/work-permits">CUSMA</a> professional and <a href="/work-permits/intra-company-transfer">intra-company transfer</a> permits suit those at US employers, including many H-1B and tech workers.</>,
              <>Have your US degree assessed via an <strong>ECA</strong>, and you will need an <strong>FBI police certificate</strong>.</>,
              <><a href="/alberta-immigration">Alberta</a>, British Columbia and Ontario are all popular landing spots for American newcomers.</>,
            ]}
          />

          <h2>How to move to Canada from the USA</h2>
          <p>
            When you <strong>move to Canada from the USA</strong>, you start with real advantages. English is one of
            Canada&apos;s two official languages, so you score well on the language factors that drive most economic
            programs. US degrees and qualifications are well understood and straightforward to have assessed. And as an
            American passport holder you travel visa-exempt, with no eTA needed at a land border.</p>
          <p>What you cannot do is
            simply move north and stay, because visiting and immigrating are different things. So a US citizen move to
            Canada almost always runs through one of the formal routes below. The route that fits depends on your age,
            your occupation, your work experience and whether you have a Canadian job offer or close family already in
            Canada.
          </p>
          <p>
            Two outcomes are on the table. <strong>Permanent residence</strong> lets you live, work and settle anywhere
            in Canada indefinitely and leads to citizenship, while <strong>temporary status</strong> on a{" "}
            <a href="/work-permits">work</a> or <a href="/study-permit">study permit</a> brings you for a defined period
            and is regularly used as a stepping stone to PR. For many Americans a CUSMA permit is that first step. The
            sections below take each route in turn.
          </p>

          <h2>The main routes from the USA at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (fastest federal route)"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Ontario and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["CUSMA professional work permit", "US citizens in eligible professional occupations", "Temporary work, often a bridge to PR"],
              ["Intra-company transfer", "Staff moving within a US employer with a Canadian office", "Temporary work, a strong path to PR"],
              ["Study permit", "Students at a designated Canadian institution", "Study, then a PGWP and a path to PR"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes US citizens use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <Callout type="brand" title="Why Americans pivot to Canada">
            Many H-1B holders and US tech workers move to Canada for stability and a clearer route to permanent
            residence. A <a href="/work-permits">CUSMA work permit</a> or an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a> can get you working quickly, and the
            Canadian experience you gain can later lift your <a href="/express-entry">Express Entry</a> score. We help you
            sequence the temporary and permanent steps so they work together.
          </Callout>

          <h2>Express Entry from the USA</h2>
          <p>
            <a href="/express-entry">Express Entry</a> is the permanent route most Americans use, and the quickest
            federal road to PR. You build an online profile, it is ranked by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and the
            top-ranked candidates are invited at each draw. Native English and US work experience usually give the profile
            a solid base. Three federal programs sit inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience, for example after a CUSMA permit.</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled Americans applying from the US with foreign experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople.</li>
          </ul>
          <p>
            Before you submit, you will need an <strong>Educational Credential Assessment</strong> of your US degree and
            an approved English test (most American applicants sit IELTS General Training or CELPIP). Small differences in
            age, experience and test scores move your CRS more than people expect, and a{" "}
            <a href="/pnp">provincial nomination</a> adds a decisive 600 points. Try our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand, then we help you find the points
            you are leaving on the table.
          </p>

          <h2>Provincial Nominee Programs for American movers</h2>
          <p>
            If your CRS sits below the latest federal cut-off, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the route through. A province nominates workers it
            needs, and an enhanced nomination layers on 600 CRS points, usually enough to put a profile well clear of
            typical Express Entry cut-offs before IRCC decides who is invited. A few provinces recur for American movers:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (AAIP)</a>, a natural fit for Americans who want the Rockies, lower taxes and busy worker streams. Based in Canmore, Alberta is the province we know best.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, strong for tech, healthcare and skilled workers set on the West Coast, an easy commute back to the Pacific Northwest.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, the deepest job market in Canada, with streams that draw straight from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-led route across Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador.</li>
          </ul>

          <h2>CUSMA, intra-company transfers and other work permits</h2>
          <p>
            For Americans, work permits are often the fastest way across the border. Under{" "}
            <a href="/work-permits">CUSMA</a>, eligible US professionals in certain occupations can work in Canada often
            without a Labour Market Impact Assessment, and the permit can frequently be issued at a port of entry. If you
            work for a multinational with a Canadian office, an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a> can move you within the same
            company.</p>
          <p>Once your PR application is far enough along, a{" "}
            <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> can keep you working in the
            meantime. Many American professionals come on a work permit first, build Canadian experience, and transition
            to PR through Express Entry or a PNP. Note that there is no IEC Working Holiday agreement for US citizens, so
            the CUSMA and employer routes are the practical work options.
          </p>

          <h2>Studying in Canada as a route to PR</h2>
          <p>
            Studying first is another proven American route to PR. A <a href="/study-permit">study permit</a> at a
            designated learning institution gets you onto a Canadian programme, and graduates can often claim a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit whose Canadian work
            experience flows directly into the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>. You will need{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> covering tuition and living costs, plus a{" "}
            <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> where the province
            requires one.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            Where a spouse, common-law or conjugal partner already holds Canadian citizenship or PR, sponsorship through{" "}
            <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a> may be open to you. Sponsoring a
            partner usually carries no income test, and the sponsored spouse lands as a permanent resident. American
            parents and grandparents of Canadians can also weigh the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a> for extended stays. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> sets out who can sponsor whom.
          </p>

          <Callout type="brand" title="A regulated, US-aware practice">
            Wild Mountain Immigration is a CICC-regulated Canadian immigration practice led by a licensed RCIC. Our team
            understands the move from the US to Canada, the FBI identity history summary, the ECA, the language test and
            the CUSMA and intra-company transfer options, and we represent American clients entirely online, by video call
            and secure document sharing.
          </Callout>

          <h2>What is different when you move from the USA</h2>
          <ul>
            <li><strong>No eTA by land.</strong> US citizens are visa-exempt and need no eTA entering by land or sea, but settling still requires PR and working requires a permit.</li>
            <li><strong>FBI police certificate.</strong> IRCC asks for an FBI identity history summary covering your time in the US; order it early, as it can take time to arrive.</li>
            <li><strong>ECA for US qualifications.</strong> Your degree is assessed by a designated organisation so it can be scored against Canadian standards.</li>
            <li><strong>CUSMA options, no Working Holiday.</strong> Eligible professionals and intra-company transferees can often work without a labour market test, but there is no IEC Working Holiday for US citizens.</li>
            <li><strong>Professional licensing.</strong> Regulated professions, such as healthcare, law, teaching and many trades, often need Canadian provincial registration before you can practise.</li>
            <li><strong>Healthcare and settling in.</strong> Provincial health cover, banking, credit history and driving licences all restart in Canada; we flag the practical steps so nothing catches you out.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            Costs sit in two groups. Government charges cover IRCC processing, the right-of-permanent-residence fee and
            biometrics; third-party costs add your ECA, an English test, the FBI identity history summary, a medical exam
            and, for most Express Entry applicants, the settlement funds you must show. These amounts change periodically,
            so we itemise the current figures for your route rather than quote one headline, and government fees can be
            checked on canada.ca.</p>
          <p>On timing, a complete Express Entry application is usually finished about six months
            after the invitation. A CUSMA or intra-company transfer permit can frequently be arranged far faster,
            sometimes at the border, while provincial nomination and family sponsorship add their own stages. Budgeting
            these figures and timelines early is what keeps a plan to move to Canada from the USA on track, and our{" "}
            <a href="/fees">fees guide</a> explains our professional fee and how it differs from government fees.
          </p>

          <h2>How Wild Mountain Immigration helps you move from the USA</h2>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your age, US qualifications, experience and any US employer to find the route where you are strongest, whether that is Express Entry, a CUSMA permit or an intra-company transfer." },
              { title: "Plan and prepare", desc: "We map the pathway, the ECA, the FBI police certificate and your Express Entry, work permit or provincial strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC from the US through to your arrival in Canada, keeping you updated at every milestone." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from the USA</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways American applicants use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route to permanent residence, where native English helps American applicants." href="/express-entry" />
            <FeatureCard icon={Briefcase} title="CUSMA work permits" desc="Eligible US professionals can often work in Canada without a labour market test, a bridge to PR." href="/work-permits" />
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="Move within your US employer to a Canadian office, then build a path to permanent residence." href="/work-permits/intra-company-transfer" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="A nomination from Alberta, BC, Ontario or the Atlantic provinces adds 600 CRS points." href="/pnp" />
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study in Canada and stay to work with a PGWP, a proven path to permanent residence." href="/study-permit" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from the USA to Canada"
        sub="Tell us your plans and our licensed team will map your best route, from Express Entry to a CUSMA permit. Honest advice and clear fees, all online."
      />
    </>
  );
}
