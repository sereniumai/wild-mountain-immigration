import type { Metadata } from "next";
import { Rocket, Briefcase, Wrench, Calculator, Gauge, Award, UserRound, Hammer, Layers, CalendarClock } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, AnswerBox, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { img } from "@/lib/images";

const PATH = "/express-entry";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Express Entry Canada 2026",
  titleAbsolute: "Express Entry Canada 2026: Eligibility, CRS & Draws",
  description:
    "Express Entry Canada 2026: how the three programs, CRS score and category-based draws work, plus how to apply. Reviewed by a licensed RCIC. Get started.",
  path: PATH,
  keywords: ["express entry canada 2026", "express entry process", "crs score", "category-based draws", "federal skilled worker"],
});

const faqs = [
  {
    q: "What is a good CRS score for Express Entry in 2026?",
    a: "There is no fixed pass mark, the cut-off changes every draw. In 2026, Canadian Experience Class draws have landed around 507–518, while category-based draws (healthcare, trades, French) have invited candidates from the high 400s. A score above 510 is competitive for general profiles, but a lower score can still succeed in a category draw or with a provincial nomination.",
  },
  {
    q: "How long does Express Entry take?",
    a: "IRCC's service standard for an Express Entry permanent-residence application is about six months from the date you submit a complete application after your invitation. Creating a profile and waiting for an invitation can take anywhere from days to many months, depending on your CRS score and the draws held.",
  },
  {
    q: "Do I still get CRS points for a job offer in 2026?",
    a: "No. IRCC removed all arranged-employment (job-offer) CRS points on March 25, 2025. A valid job offer no longer adds 50 or 200 points to your score. A job offer can still help you qualify for a provincial nominee program, which adds 600 CRS points.",
  },
  {
    q: "Can I apply for Express Entry without a job offer?",
    a: "Yes. Express Entry is designed for skilled workers and does not require a Canadian job offer. You need eligible work experience, language test results, and, for Federal Skilled Worker, an educational credential assessment. Your CRS score then determines when you are invited to apply.",
  },
  {
    q: "What is the difference between Express Entry and a PNP?",
    a: "Express Entry is the federal system that ranks skilled workers and issues invitations for permanent residence. A Provincial Nominee Program (PNP) is run by a province; an 'enhanced' nomination through Express Entry adds 600 CRS points, which in recent draws has lifted candidates well above the cut-off. IRCC still issues the invitation. Many candidates use both routes at once.",
  },
  {
    q: "Do I need an immigration consultant for Express Entry?",
    a: "You can apply yourself, but small errors in work-experience claims, NOC codes or proof of funds are common reasons for refusal. A Regulated Canadian Immigration Consultant builds your profile to maximise your CRS score and reviews every document before submission. We also offer a lower-cost File Review if you prefer to do the work yourself.",
  },
];

export default function ExpressEntryPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Express Entry Canada 2026, Complete RCIC Guide",
            description:
              "Express Entry Canada 2026: how the three programs, CRS score and category-based draws work, plus how to apply. Reviewed by a licensed RCIC. Get started.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Express Entry application support",
            description: "Express Entry Canada 2026: how the three programs, CRS score and category-based draws work, plus how to apply. Reviewed by a licensed RCIC. Get started.",
            path: PATH,
            serviceType: "Express Entry immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Permanent Residence"
        crumbs={[{ name: "Immigrate", path: "/immigrate" }, { name: "Express Entry", path: PATH }]}
        title={<>Express Entry Canada <span className="text-brand">2026</span></>}
        lede={
          <p>
            <strong>Express Entry Canada 2026</strong> is the country&apos;s fastest federal route to permanent
            residence. It manages applications under three skilled-worker programs, ranks candidates with the
            Comprehensive Ranking System (CRS), and invites the highest-scoring profiles in regular draws, with most
            applications processed in about six months.
          </p>
        }
        updated={UPDATED}
        image={img.heroPeople}
        imageAlt="Skilled workers who immigrated to Canada through Express Entry"
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free CRS Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Get your Express Entry score in two minutes, no email required.</p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
                { label: "Alberta AAIP", href: "/alberta-immigration", note: "Provincial nomination + 600 CRS" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "Sponsor a spouse or partner" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Express Entry Canada 2026 is the online system IRCC uses to manage permanent-residence applications from skilled workers. It covers three federal economic programs: the Federal Skilled Worker Program, the Canadian Experience Class and the Federal Skilled Trades Program. Candidates submit an Express Entry profile, receive a Comprehensive Ranking System (CRS) score, and the highest-ranked are invited in regular draws. Cut-offs change with each round."
            items={[
              <>Express Entry covers <strong>three programs</strong>: Federal Skilled Worker, Canadian Experience Class and Federal Skilled Trades.</>,
              <>Your <strong>CRS score</strong> (out of 1,200) decides when you are invited, there is no fixed pass mark.</>,
              <>In 2026, IRCC is running <strong>program-specific and category-based draws</strong> rather than all-program rounds.</>,
              <><strong>Job-offer CRS points were removed</strong> on March 25, 2025. A provincial nomination (+600) is now the biggest score booster.</>,
              <>Most complete PR applications are processed in <strong>about six months</strong>.</>,
            ]}
          />

          <h2>What is Express Entry Canada 2026 and how does it work?</h2>
          <p>
            Express Entry is an online application-management system, not a single immigration program. You create an
            <strong> Express Entry profile</strong>, IRCC scores it with the{" "}
            <strong>Comprehensive Ranking System (CRS)</strong>, and your profile sits in the{" "}
            <strong>Express Entry pool</strong> with everyone else&apos;s. Roughly every two weeks, IRCC holds a{" "}
            <em>draw</em> and issues an Invitation to Apply (ITA) to candidates whose score meets the draw cut-off.
            According to IRCC, a complete application is then processed within about <strong>six months</strong>{" "}
            (source: canada.ca, processing times, 2026).
          </p>
          <p>
            The system was built for skilled workers who can support Canada&apos;s economy. You do not need a job offer,
            and you do not need to already live in Canada, though Canadian work experience and study both raise your
            score.
          </p>

          <h2>The three Express Entry programs</h2>
          <p>
            Express Entry manages three federal economic programs. You must be eligible for at least one of them to
            enter the pool. Each has its own minimum requirements for work experience, language and education.
          </p>
          <DataTable
            headers={["Program", "Who it's for", "Key requirement"]}
            rows={[
              ["Federal Skilled Worker (FSW)", "Skilled workers with foreign experience", "Pass the 67-point grid + an ECA for foreign education"],
              ["Canadian Experience Class (CEC)", "People with skilled Canadian work experience", "≥1 year skilled work in Canada in the last 3 years"],
              ["Federal Skilled Trades (FST)", "Qualified tradespeople", "2 years' trade experience + a job offer or certificate of qualification"],
            ]}
            caption="The three programs managed under Express Entry (2026)."
          />

          <h2>How the CRS score works</h2>
          <p>
            The CRS awards up to <strong>1,200 points</strong> across four areas: core human capital (age, education,
            language, Canadian experience), spouse factors, skill transferability, and additional points. The single
            biggest booster is a <strong>provincial nomination, worth 600 points</strong>.
          </p>
          <Callout type="warning" title="Job-offer points were removed in 2025">
            As of <strong>March 25, 2025</strong>, a job offer no longer adds CRS points (it previously added 50, or 200
            for senior managers). Be cautious of older guides that still list job-offer points, they are out of date.
          </Callout>
          <p>
            Not sure where you stand? Our free <a href="/tools/crs-calculator">Express Entry points calculator</a> uses
            the current official CRS grid and takes about two minutes.
          </p>

          <h2>Express Entry category-based draws in 2026</h2>
          <p>
            In 2026, IRCC is favouring <strong>category-based draws</strong> that target specific occupations and French
            speakers, alongside program-specific CEC and PNP rounds. This means a lower CRS score can still earn an
            invitation if you belong to a targeted category. The table below shows the shape of recent 2026 rounds;
            exact figures change every draw, so always check the IRCC rounds-of-invitations page for the latest.
          </p>
          <DataTable
            headers={["Category (2026)", "Typical cut-off", "Notes"]}
            rows={[
              ["Canadian Experience Class", "~507–518", "Largest stream of invitations"],
              ["Provincial Nominee Program", "~710–805", "High scores reflect the +600 nomination"],
              ["French-language proficiency", "~393–419", "Strongly favoured in 2026"],
              ["Healthcare & social services", "~467", "Nurses, physicians, care roles"],
              ["Trades", "~477", "Construction and skilled trades"],
            ]}
            caption="Illustrative 2026 draw cut-offs (IRCC rounds of invitations). Figures change each draw."
          />
          <p>
            As of the most recent 2026 rounds, IRCC had not held a general all-program draw, every invitation came
            through a program-specific or category-based round. Most 2026 categories now require at least{" "}
            <strong>12 months</strong> of qualifying experience.
          </p>

          <h2>How to apply for Express Entry: step by step</h2>
          <Steps
            steps={[
              { title: "Check eligibility & test language", desc: "Confirm you meet FSW, CEC or FST minimums and take an approved language test (IELTS, CELPIP or TEF/TCF)." },
              { title: "Get your ECA & build your profile", desc: "Get an Educational Credential Assessment for foreign study, then create your Express Entry profile and enter the pool." },
              { title: "Maximise your CRS score", desc: "Improve language scores, claim spouse points, and pursue a provincial nomination where it fits your profile." },
              { title: "Receive your ITA", desc: "If your score meets the draw cut-off, IRCC issues an Invitation to Apply, you then have 60 days to apply." },
              { title: "Submit a complete PR application", desc: "Upload police checks, medicals, proof of funds and reference letters. Accuracy here is what prevents refusals." },
              { title: "Confirm permanent residence", desc: "After approval, complete landing and receive your PR card. Welcome to Canada." },
            ]}
          />

          <h2>How Wild Mountain Immigration helps with Express Entry</h2>
          <p>
            We build your profile to capture every CRS point you are entitled to, choose the right program, and prepare
            an application that stands up to scrutiny. Working under a licensed RCIC (CICC #R706497), our team represents
            you with IRCC and catches the small mistakes that cause avoidable refusals: mis-stated work experience, the
            wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr>{" "}
            code, or weak proof of funds.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own Express
            Entry Canada 2026 application an expert check before you submit, so you enter the pool with your strongest
            possible profile.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Inside Express Entry</h2>
          <p className="mt-3 text-ink-soft">Go deeper on each program and the scoring that decides your invitation.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Gauge} title="Comprehensive Ranking System (CRS)" desc="How your score out of 1,200 is calculated, and how to raise it." href="/express-entry/comprehensive-ranking-system" />
            <FeatureCard icon={Award} title="Canadian Experience Class (CEC)" desc="For people with skilled Canadian work experience, no proof of funds needed." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={UserRound} title="Federal Skilled Worker (FSW)" desc="The route for skilled workers with foreign experience and the 67-point grid." href="/express-entry/federal-skilled-worker" />
            <FeatureCard icon={Hammer} title="Federal Skilled Trades (FST)" desc="For qualified tradespeople with a job offer or certificate of qualification." href="/express-entry/federal-skilled-trades" />
            <FeatureCard icon={Layers} title="Category-based draws 2026" desc="Targeted draws for healthcare, trades, French and more, often at a lower CRS." href="/express-entry/category-based-draws" />
            <FeatureCard icon={CalendarClock} title="Latest draw results" desc="Every 2026 Express Entry round, cut-off scores and what they mean." href="/express-entry/draws" />
          </FeatureGrid>
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Other routes to permanent residence</h2>
          <p className="mt-3 text-ink-soft">Express Entry is one of several paths. We help you find the one that fits.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Alberta AAIP" desc="Our home province. A provincial nomination adds 600 CRS points and can fast-track your PR." href="/alberta-immigration" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="LMIA, PGWP and open work permits, build Canadian experience that boosts your CRS." href="/work-permits" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Every province runs its own streams. We match you to the strongest nomination route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find out if Express Entry is right for you"
        sub="Get started with a licensed RCIC and get an honest read on your CRS score and best pathway."
      />
    </>
  );
}
