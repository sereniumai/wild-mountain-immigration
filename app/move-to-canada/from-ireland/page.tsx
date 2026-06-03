import type { Metadata } from "next";
import { Globe, Rocket, Briefcase, GraduationCap, Map, Heart } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/move-to-canada/from-ireland";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Move to Canada From Ireland 2026",
  titleAbsolute: "Move to Canada From Ireland: 2026 Guide",
  description:
    "Move to Canada from Ireland in 2026: the IEC Working Holiday, Express Entry, PNPs, work and study permits, sponsorship and costs. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "move to canada from ireland",
    "ireland to canada immigration",
    "moving to canada from ireland",
    "emigrate to canada from ireland",
    "canada visa for irish citizens",
    "irish citizen move to canada",
  ],
});

const faqs = [
  {
    q: "How can an Irish citizen move to Canada permanently?",
    a: "Most Irish citizens move to Canada permanently through Express Entry, the federal system for skilled workers, or through a Provincial Nominee Program such as the Alberta Advantage Immigration Program or the BC PNP. Strong English, recognised qualifications and professional experience often produce competitive CRS scores. Other routes include an employer-driven work permit that bridges to permanent residence, studying in Canada and staying on a Post-Graduation Work Permit, or family sponsorship if you have a partner or close relative who is already a Canadian citizen or permanent resident.",
  },
  {
    q: "Do Irish citizens need a visa to enter Canada?",
    a: "Irish citizens are visa-exempt for short visits and travel on an Electronic Travel Authorisation (eTA) rather than a visa. An eTA is for visits only; it does not let you live, work or settle in Canada. To move permanently you still need permanent residence, and to work you need the appropriate work permit. A common and costly misunderstanding is to treat the eTA as a right to relocate, so we make sure you apply for the right status for your actual plans.",
  },
  {
    q: "Can young Irish people work in Canada through IEC?",
    a: "Yes, and it is very popular. The International Experience Canada (IEC) programme includes a Working Holiday open work permit for eligible Irish citizens, and Ireland has a generous IEC allocation. Many young Irish applicants take the two-year option, living and working in Canada before deciding whether to stay. The Canadian work experience you gain can later count toward a Canadian Experience Class profile under Express Entry, turning a working holiday into a route to permanent residence. Confirm current ages and durations on IRCC at canada.ca.",
  },
  {
    q: "Is it expensive to move to Canada from Ireland?",
    a: "The IEC Working Holiday is one of the cheaper ways to start, with a participation fee and open work permit rather than the full PR cost stack. A permanent move costs more: IRCC government fees, the right-of-permanent-residence fee, biometrics, an approved English test, an Educational Credential Assessment for your Irish qualifications, a Garda police certificate, and proof of settlement funds for most Express Entry applicants outside the Canadian Experience Class, plus relocation costs such as flights and initial housing. Figures depend on your route and family size and change periodically, so confirm current government fees on canada.ca. We itemise everything for your case before you commit.",
  },
  {
    q: "Do my Irish qualifications count in Canada?",
    a: "For immigration scoring, you typically have your Irish degree assessed through an Educational Credential Assessment (ECA) from a designated organisation so it can be compared to Canadian standards and scored under Express Entry. For regulated professions, such as nursing, medicine, teaching, law and many skilled trades, you usually also need to be licensed or certified by the relevant Canadian provincial regulator before you can practise. These are two separate processes, and confirming the licensing path early prevents an unwelcome surprise after you arrive.",
  },
  {
    q: "How long does it take to move to Canada from Ireland?",
    a: "It depends which door you use. The IEC Working Holiday can be the quickest start, since profiles are drawn from seasonal pools and an approved application leads to a port-of-entry letter rather than a long PR wait. For permanent routes, IRCC usually finishes a complete Express Entry application about six months after the Invitation to Apply, with profile-building and the wait for a suitable draw on top. Provincial nomination adds a stage, and spousal sponsorship is currently around 12 months. Processing times shift with volume, so we plan against live IRCC estimates on canada.ca rather than a fixed promise.",
  },
];

export default function FromIrelandPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Move to Canada From Ireland: The Complete 2026 Guide",
            description:
              "Move to Canada from Ireland in 2026: the IEC Working Holiday, Express Entry, PNPs, work and study permits, sponsorship and costs. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-25",
          }),
          serviceLd({
            name: "Ireland to Canada immigration support",
            description:
              "Move to Canada from Ireland in 2026: the IEC Working Holiday, Express Entry, PNPs, work and study permits, sponsorship and costs. RCIC-reviewed.",
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
          { name: "From Ireland", path: PATH },
        ]}
        title={<>Move to Canada <span className="text-brand">from Ireland</span></>}
        lede={
          <p>
            The Irish have been moving to Canada for generations, and deep community ties make it a welcoming place to
            land. Many people <strong>move to Canada from Ireland</strong> on the popular IEC Working Holiday, while
            skilled workers use Express Entry. This guide walks through every route to permanent residence and to working
            in Canada, what each one requires, what it costs, how long it takes, and what is different for Irish applicants.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Moving from Ireland?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We work with Irish applicants worldwide, fully online. Tell us your plans and our team will map your route.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "International Experience Canada", href: "/work-permits/international-experience-canada", note: "The popular Working Holiday for Irish youth" },
                { label: "Express Entry", href: "/express-entry", note: "The fastest federal PR route" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "A popular province for movers" },
                { label: "Free CRS Calculator", href: "/tools/crs-calculator", note: "Estimate your Express Entry score" },
                { label: "Move to Canada by country", href: "/move-to-canada", note: "Guides for other countries" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="To move to Canada from Ireland, most people start with the IEC Working Holiday visa, which is very popular with Irish youth. Skilled workers usually take Express Entry or a Provincial Nominee Program, where strong English lifts your CRS score. Irish citizens are visa-exempt for visits (eTA) but still need permanent residence to settle and a work permit to work. Plan for an Educational Credential Assessment, IELTS or CELPIP, a Garda police certificate and proof of funds, and check that regulated professions are licensed in Canada before you arrive."
            items={[
              <>The <a href="/work-permits/international-experience-canada">IEC Working Holiday</a> is very popular with Irish youth, with a generous allocation and a two-year option well worth considering.</>,
              <>Skilled workers usually move through <a href="/express-entry">Express Entry</a> or a <a href="/pnp">Provincial Nominee Program</a>, and strong English lifts your CRS score.</>,
              <>Irish citizens are <strong>visa-exempt</strong> for visits (eTA), but you still need PR to settle and a <a href="/work-permits">work permit</a> to work.</>,
              <>Have your Irish degree assessed via an <strong>ECA</strong>, sit an approved English test, and get a <strong>Garda</strong> police certificate.</>,
              <>A long history of Irish emigration means <strong>strong community ties</strong> across <a href="/alberta-immigration">Alberta</a>, British Columbia and beyond.</>,
            ]}
          />

          <h2>How to move to Canada from Ireland</h2>
          <p>
            When you <strong>move to Canada from Ireland</strong>, you start with real advantages. English is one of
            Canada&apos;s two official languages, so you score well on the language factors that drive most economic
            programs. Irish degrees and trade qualifications are well understood and straightforward to have assessed, and
            generations of Irish emigration mean established communities right across the country.</p>
          <p>As an Irish passport
            holder you travel visa-exempt to visit. What you cannot do is simply turn up and stay, because visiting and
            immigrating are different things. The route that fits depends on your age, your occupation, your work
            experience and whether you have a Canadian job offer or close family already in Canada.
          </p>
          <p>
            There are really two finish lines. <strong>Permanent residence</strong> lets you live, work and settle
            anywhere in Canada with no time limit and opens the door to citizenship, while{" "}
            <strong>temporary status</strong> on a <a href="/work-permits">work</a> or{" "}
            <a href="/study-permit">study permit</a> brings you for a fixed spell and very often becomes the first leg of
            a PR journey. For many Irish applicants the IEC is exactly that first leg. The sections below take each route
            in turn.
          </p>

          <h2>The main routes from Ireland at a glance</h2>
          <DataTable
            headers={["Route", "Best for", "Leads to"]}
            rows={[
              ["IEC Working Holiday", "Irish youth, with a generous allocation", "Up to two years of open work, a popular stepping stone to PR"],
              ["Express Entry", "Skilled workers with a degree and experience", "Permanent residence (fastest federal route)"],
              ["Provincial Nominee Program", "Workers a province needs (Alberta, BC, Atlantic and more)", "Permanent residence (+600 CRS with a nomination)"],
              ["Employer work permit", "Those with a Canadian job offer", "Temporary work, often a bridge to PR"],
              ["Study permit", "Students at a designated Canadian institution", "Study, then a PGWP and a path to PR"],
              ["Family sponsorship", "Partners or close relatives of Canadians and PRs", "Permanent residence"],
            ]}
            caption="The routes Irish citizens use to move to Canada. The right one depends on your profile, not just your preference."
          />

          <h2>The IEC Working Holiday: a popular first move</h2>
          <p>
            For younger Irish applicants, the <a href="/work-permits/international-experience-canada">International
            Experience Canada (IEC)</a> Working Holiday is one of the easiest ways to get to Canada, and Ireland&apos;s
            working holiday quota is particularly generous. It is an open work permit, so you are not tied to one employer, and many
            Irish applicants take the two-year option, living and working almost anywhere in Canada before deciding
            whether to stay.</p>
          <p>Beyond the adventure, it is strategically valuable: skilled Canadian work experience gained
            on a Working Holiday can qualify you for the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>, turning a working holiday
            into a springboard to permanent residence.
          </p>

          <h2>Express Entry from Ireland</h2>
          <p>
            The main skilled worker route out of Ireland is <a href="/express-entry">Express Entry</a>, the quickest
            federal path to PR. You set up an online profile, it is ranked by the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System (CRS)</a>, and each draw
            invites the highest-ranked candidates to apply. Like British applicants, Irish citizens score strongly on
            language as native English speakers, which gives the profile a healthy head start. Three federal programs sit
            inside Express Entry:
          </p>
          <ul>
            <li><a href="/express-entry/canadian-experience-class">Canadian Experience Class (CEC)</a>, for people who already have skilled Canadian work experience, for example after an IEC Working Holiday.</li>
            <li><a href="/express-entry/federal-skilled-worker">Federal Skilled Worker (FSW)</a>, the main route for skilled Irish workers applying from Ireland with foreign experience.</li>
            <li><a href="/express-entry/federal-skilled-trades">Federal Skilled Trades (FST)</a>, for qualified tradespeople.</li>
          </ul>
          <p>
            Before you submit, you will need an <strong>Educational Credential Assessment</strong> of your Irish degree
            and an approved English test (most Irish applicants sit IELTS General Training or CELPIP). Small differences in
            age, experience and test scores move your CRS more than people expect, and a{" "}
            <a href="/pnp">provincial nomination</a> adds a decisive 600 points. Try our free{" "}
            <a href="/tools/crs-calculator">CRS calculator</a> to see where you stand, then we help you find the points
            you are leaving on the table.
          </p>

          <h2>Provincial Nominee Programs for Irish movers</h2>
          <p>
            If your CRS falls short of the current federal cut-off, a{" "}
            <a href="/pnp">Provincial Nominee Program (PNP)</a> is often the route through. A province picks out workers
            it needs, and an enhanced nomination layers on 600 CRS points, a jump that in recent draws has carried
            candidates well past the cut-off before IRCC sends the invitation. A few provinces come up again and again
            for Irish movers:
          </p>
          <ul>
            <li><a href="/alberta-immigration">Alberta (the Alberta Advantage Immigration Program, AAIP)</a>, drawing Irish movers with its mountains, lower taxes and active worker streams. We are based in Canmore, so Alberta is our home turf.</li>
            <li><a href="/pnp/british-columbia">British Columbia (BC PNP)</a>, a strong fit for tech, healthcare and skilled workers set on the West Coast.</li>
            <li><a href="/pnp/ontario">Ontario (OINP)</a>, the biggest job market in the country, with streams that pull from the Express Entry pool.</li>
            <li>The <a href="/atlantic-immigration-program">Atlantic Immigration Program</a>, an employer-led route through Nova Scotia, New Brunswick, PEI and Newfoundland and Labrador, where Ireland&apos;s long ties run especially deep.</li>
          </ul>

          <h2>Work permits and employer routes</h2>
          <p>
            With a Canadian job offer in hand, or one you can secure, a <a href="/work-permits">work permit</a> can move
            you over quickly and frequently bridges to PR. The form it takes depends on the role and employer: an
            employer-specific permit backed by a Labour Market Impact Assessment, an{" "}
            <a href="/work-permits/intra-company-transfer">intra-company transfer</a> for staff of a multinational with a
            Canadian office, or a <a href="/work-permits/bridging-open-work-permit">bridging open work permit</a> to keep
            you working as your PR file advances. Many Irish professionals begin on the IEC or a work permit, bank Canadian
            experience, then move across to PR through Express Entry or a PNP.
          </p>

          <h2>Studying in Canada as a route to PR</h2>
          <p>
            Studying first is another well-worn Irish route to PR. A <a href="/study-permit">study permit</a> at a
            designated learning institution gets you onto a Canadian course, and graduates can often claim a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, an open permit whose Canadian work
            experience feeds the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> directly. You will need{" "}
            <a href="/study-permit/proof-of-funds">proof of funds</a> for tuition and living costs, plus a{" "}
            <a href="/study-permit/provincial-attestation-letter">Provincial Attestation Letter</a> in provinces that
            require it.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            If your spouse, common-law or conjugal partner is already a Canadian citizen or permanent resident, sponsorship
            through <a href="/family-sponsorship/spousal-sponsorship">spousal sponsorship</a> may be open to you. There is
            normally no income threshold to sponsor a partner, and the sponsored spouse arrives with permanent residence.
            Irish parents and grandparents of Canadians can also weigh up the{" "}
            <a href="/family-sponsorship/super-visa">Super Visa</a> for extended visits. Our full{" "}
            <a href="/family-sponsorship">family sponsorship guide</a> covers who can sponsor whom.
          </p>

          <Callout type="brand" title="A well-trodden path to Canada">
            Ireland has one of the longest emigration histories with Canada, and the community ties run deep, so many
            Irish movers find a ready-made welcome. The IEC Working Holiday makes the first step easy for younger
            applicants, and skilled workers move smoothly via Express Entry. Wild Mountain Immigration is a
            CICC-regulated practice led by a licensed RCIC, and whichever route fits, our whole service runs online by
            video call and secure documents.
          </Callout>

          <h2>What is different when you move from Ireland</h2>
          <ul>
            <li><strong>eTA, not a visa.</strong> You travel visa-exempt on an eTA for visits, but settling requires PR and working requires a permit.</li>
            <li><strong>Generous IEC allocation.</strong> Ireland has a large Working Holiday quota, and many take the two-year option. See <a href="/work-permits/international-experience-canada">IEC</a>.</li>
            <li><strong>Garda police certificate.</strong> IRCC asks for a Garda (Irish police) certificate covering your time in Ireland; order it early, as it can take time to arrive.</li>
            <li><strong>ECA for qualifications.</strong> Your Irish degree is assessed by a designated organisation so it can be scored against Canadian standards.</li>
            <li><strong>Professional licensing.</strong> Regulated professions, such as nursing, medicine, teaching and many trades, often need Canadian provincial registration before you can practise.</li>
            <li><strong>Healthcare and settling in.</strong> Provincial health cover, banking, credit history and driving licences all restart in Canada; we flag the practical steps so nothing catches you out.</li>
          </ul>

          <h2>How much it costs and how long it takes</h2>
          <p>
            There are two cost buckets. Government charges cover IRCC processing, the right-of-permanent-residence fee and
            biometrics; third-party costs add your ECA, an English test, the Garda certificate, a medical exam and, for
            most Express Entry applicants, the settlement funds you have to show. These amounts move from time to time, so
            we itemise the live numbers for your route rather than quote a single headline, and government fees can be
            checked on canada.ca.</p>
          <p>On timing, IRCC usually completes a full Express Entry application about six months after
            the invitation, while provincial nomination and family sponsorship add their own stages and the IEC runs in
            seasonal rounds. Whatever it costs to move to Canada from Ireland, our <a href="/fees">fees guide</a> explains
            our professional fee and how it differs from government fees.
          </p>

          <h2>How Wild Mountain helps you move from Ireland</h2>
          <Steps
            steps={[
              { title: "Assess your profile", desc: "We review your age, Irish qualifications, experience and language to find the route where you are strongest, whether that is the IEC, Express Entry or a PNP." },
              { title: "Plan and prepare", desc: "We map the pathway, the ECA, the Garda certificate, the language test and your IEC, Express Entry or provincial strategy, with clear, written fees." },
              { title: "Apply and land", desc: "We build a complete application and represent you with IRCC from Ireland through to your arrival in Canada, keeping you updated at every milestone." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Start your route from Ireland</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways Irish applicants use most.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="IEC Working Holiday" desc="Live and work in Canada for up to two years, the popular first move for Irish youth." href="/work-permits/international-experience-canada" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route to permanent residence, where strong English helps Irish applicants." href="/express-entry" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="A nomination from Alberta, BC, Ontario or the Atlantic provinces adds 600 CRS points." href="/pnp" />
            <FeatureCard icon={GraduationCap} title="Study permits" desc="Study in Canada and stay to work with a PGWP, a proven path to permanent residence." href="/study-permit" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Join a spouse or partner who is already a Canadian citizen or permanent resident." href="/family-sponsorship" />
            <FeatureCard icon={Globe} title="Other countries" desc="Moving from somewhere else? See our country-by-country guides to Canada." href="/move-to-canada" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Make the move from Ireland to Canada"
        sub="Tell us your plans and our licensed team will map your best route, fully online. Honest advice and clear fees."
      />
    </>
  );
}
