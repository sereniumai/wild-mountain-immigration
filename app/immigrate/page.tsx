import type { Metadata } from "next";
import { Rocket, Mountain, Heart, Briefcase, GraduationCap, Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { img } from "@/lib/images";

const PATH = "/immigrate";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "How to Immigrate to Canada in 2026",
  titleAbsolute: "How to Immigrate to Canada in 2026: Your Options",
  description:
    "How to immigrate to Canada and get PR in 2026: Express Entry, provincial nominees, family sponsorship and work-to-PR routes. Map your path with an RCIC.",
  path: PATH,
  keywords: [
    "how to immigrate to canada",
    "canada pr",
    "immigrate to canada 2026",
    "canadian permanent residence",
    "ways to get pr in canada",
    "express entry",
    "provincial nominee program",
  ],
});

const faqs = [
  {
    q: "What is the easiest way to immigrate to Canada?",
    a: "There is no single 'easiest' route, the best path depends on your work experience, age, language ability, family in Canada and where you want to live. For skilled workers, Express Entry is usually the fastest. If you have a spouse or partner who is a Canadian citizen or permanent resident, family sponsorship is often the most direct. A provincial nominee program can be the strongest option if your profile suits a specific province like Alberta.",
  },
  {
    q: "How long does it take to immigrate to Canada?",
    a: "It depends on the route. A complete Express Entry application is processed in about six months after an invitation, though building a profile and waiting for a draw can add weeks to many months. Provincial nominee programs typically add several months for the nomination step. Spousal sponsorship currently runs roughly 12 months. Always check current processing times on IRCC's website, as they change regularly.",
  },
  {
    q: "How much does it cost to immigrate to Canada in 2026?",
    a: "Government fees for an Express Entry permanent-residence application are about CAD $1,525 per adult (including the right-of-permanent-residence fee), plus roughly CAD $85 in biometrics. You should also budget for a language test, an educational credential assessment, medical exams and police certificates. Proof-of-funds requirements are separate. Verify the current fee schedule on canada.ca before you apply.",
  },
  {
    q: "Can I immigrate to Canada without a job offer?",
    a: "Yes. Express Entry is built for skilled workers and does not require a Canadian job offer. You qualify on your work experience, language results and education. A job offer no longer adds CRS points (those were removed in March 2025), but it can still help you qualify for some provincial nominee streams.",
  },
  {
    q: "Do I need to live in Canada already to get permanent residence?",
    a: "No. Many people apply for permanent residence from outside Canada, particularly through Express Entry and several provincial streams. That said, Canadian work or study experience can raise your ranking, and some pathways, such as the Canadian Experience Class or work-to-PR routes, are designed for people already living and working here on a temporary permit.",
  },
  {
    q: "What is the difference between Express Entry and a provincial nominee program?",
    a: "Express Entry is the federal system that ranks skilled workers and issues invitations for permanent residence. A Provincial Nominee Program (PNP) is run by an individual province to select people who fit its labour-market needs. An 'enhanced' provincial nomination adds 600 points to your Express Entry score, which in recent draws has put candidates well above the cut-off, though IRCC issues the invitation. Many candidates pursue both at the same time.",
  },
  {
    q: "Can studying or working in Canada lead to permanent residence?",
    a: "Yes, these are two of the most common stepping-stone routes. International students can work after graduation on a Post-Graduation Work Permit, gain Canadian experience, and then apply through the Canadian Experience Class or a provincial stream. Temporary workers can build the same experience and transition to PR. Neither a study nor a work permit grants PR automatically; they create eligibility you then act on.",
  },
  {
    q: "Do I need an immigration consultant to immigrate to Canada?",
    a: "You can apply yourself, but the process is detailed and small mistakes, a wrong NOC code, mis-stated experience, weak proof of funds, are common reasons for refusal. A Regulated Canadian Immigration Consultant builds your application for the strongest possible outcome and reviews every document. We also offer a lower-cost File Review if you prefer to prepare your own application and have it checked.",
  },
];

export default function ImmigratePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "How to Immigrate to Canada in 2026, Permanent Residence Routes",
            description:
              "How to immigrate to Canada and get Canada PR in 2026: Express Entry, provincial nominees, family sponsorship and work-to-PR routes, from a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Canadian permanent residence consulting",
            description:
              "How to immigrate to Canada and get Canada PR in 2026: Express Entry, provincial nominees, family sponsorship and work-to-PR routes, from a licensed RCIC.",
            path: PATH,
            serviceType: "Canadian immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Permanent Residence"
        crumbs={[{ name: "Immigrate", path: PATH }]}
        title={<>How to immigrate to Canada: <span className="text-brand">your 2026 routes to PR</span></>}
        lede={
          <p>
            <strong>How to immigrate to Canada</strong> comes down to choosing the right route to permanent residence:
            Express Entry, a provincial nomination, family sponsorship, or a work- or study-based pathway. Each leads to
            the same goal, Canadian PR, but suits a different profile. This hub explains every option so you can find
            yours.
          </p>
        }
        updated={UPDATED}
        image={img.heroPeople}
        imageAlt="A family who immigrated to Canada and became permanent residents"
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free CRS Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">See your Express Entry score in two minutes, no email required.</p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Express Entry", href: "/express-entry", note: "The fastest federal route to PR" },
                { label: "Alberta AAIP", href: "/alberta-immigration", note: "Our home province · +600 CRS" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "Sponsor a spouse or partner" },
                { label: "Get started", href: "/contact", note: "Honest advice from a licensed RCIC" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="How to immigrate to Canada in 2026 comes down to applying for permanent residence through one of several routes. Your main options are Express Entry, a provincial nominee program, family sponsorship, or a work- or study-to-PR pathway. Express Entry is usually the fastest for skilled workers (about six months after an invitation), while a provincial nomination can add 600 CRS points. The right route depends on your skills, age, language, family ties and where you want to settle (Quebec selects its own immigrants)."
            items={[
              <>There are <strong>four main routes</strong> to Canadian PR: Express Entry, provincial nominee programs, family sponsorship, and work- or study-to-PR pathways.</>,
              <><strong>Express Entry</strong> is usually the fastest for skilled workers, most complete applications are processed in about six months.</>,
              <>A <strong>provincial nomination</strong> (such as Alberta&apos;s AAIP) can add 600 CRS points, usually enough to clear the cut-off in a PNP-specific Express Entry draw.</>,
              <><strong>Family sponsorship</strong> lets a Canadian citizen or PR bring a spouse, partner, child or other eligible relative.</>,
              <>Studying or working in Canada can build the experience that <strong>leads to permanent residence</strong> later.</>,
            ]}
          />

          <h2>How to immigrate to Canada in 2026</h2>
          <p>
            To immigrate to Canada you apply for <strong>permanent residence</strong> through one of several federal or
            provincial routes, the most common being Express Entry, a Provincial Nominee Program, or family sponsorship.
            Canada plans to welcome a large number of new permanent residents each year, its 2025–2027 Immigration
            Levels Plan targets <strong>395,000 new PRs in 2025</strong>, easing slightly in following years (source:
            canada.ca, Immigration Levels Plan, 2024). The right route for you depends on your skills, age, language,
            family ties and where you want to settle.
          </p>
          <p>
            Permanent residents can live, work and study anywhere in Canada (outside Quebec, which selects its own
            immigrants), access public health care, and apply for citizenship after meeting residency requirements. The
            sections below walk through each main pathway, who it suits, and how long and how much it typically takes.
          </p>

          <h2>The main routes to Canadian permanent residence</h2>
          <p>
            Most people immigrate through one of four routes. The table below compares them at a glance, who each is
            best for and a rough timeline, before we look at each in detail.
          </p>
          <DataTable
            headers={["Route", "Best for", "Rough timeline"]}
            rows={[
              ["Express Entry", "Skilled workers with foreign or Canadian experience", "~6 months after an invitation"],
              ["Provincial Nominee Program (PNP)", "Workers whose skills fit a specific province", "Add several months for the nomination"],
              ["Family sponsorship", "Spouses, partners, children & eligible relatives of Canadians", "~12 months (spousal)"],
              ["Work-to-PR", "People already working in Canada on a permit", "Varies, build 1+ year of experience first"],
              ["Study-to-PR", "International graduates of Canadian institutions", "Study → work → PR over a few years"],
            ]}
            caption="The main permanent-residence routes to Canada (2026). Timelines are typical, not guaranteed; verify current processing times on IRCC."
          />

          <h2>Express Entry: the fastest federal route</h2>
          <p>
            Express Entry is Canada&apos;s online system for managing skilled-worker applications, and for most people it
            is the quickest path to PR. You create a profile, IRCC ranks it with the{" "}
            <strong>Comprehensive Ranking System (CRS)</strong>, and the highest-scoring candidates are invited to apply
            in regular draws. It covers three programs, the Federal Skilled Worker Program, the Canadian Experience
            Class and the Federal Skilled Trades Program, and you need to qualify for at least one.
          </p>
          <p>
            You do not need a job offer to enter the pool. In 2026, IRCC is favouring{" "}
            <strong>category-based draws</strong> that target in-demand occupations such as healthcare and trades, plus
            French-language speakers, which means a lower score can still earn an invitation in the right category. Want
            to know where you stand? Try our <a href="/tools/crs-calculator">free CRS calculator</a> or read the full{" "}
            <a href="/express-entry">Express Entry guide</a>.
          </p>
          <Callout type="warning" title="Job-offer points were removed in 2025">
            As of <strong>March 25, 2025</strong>, a job offer no longer adds CRS points. The biggest score booster is now
            a provincial nomination, worth 600 points. Be wary of older guides that still list job-offer points.
          </Callout>

          <h2>Provincial Nominee Programs (PNPs)</h2>
          <p>
            A Provincial Nominee Program lets a province nominate people who match its labour-market needs, and a
            nomination is one of the strongest tools for securing permanent residence. Almost every province and
            territory runs its own streams (Quebec is the exception, it selects immigrants separately, and we do not
            handle Quebec). There are two types: an <strong>enhanced</strong> nomination, which adds 600 CRS points to
            your Express Entry profile, and a <strong>base</strong> nomination, which is a separate paper application to
            IRCC.
          </p>
          <h3>Alberta&apos;s AAIP, our home province</h3>
          <p>
            Based in Canmore, Alberta, we know the <strong>Alberta Advantage Immigration Program (AAIP)</strong> inside
            out. It includes worker streams such as the Alberta Opportunity Stream, the Alberta Express Entry Stream, the
            Rural Renewal Stream and the Tourism &amp; Hospitality Stream, plus entrepreneur pathways. See our dedicated{" "}
            <a href="/alberta-immigration">Alberta immigration</a> page, or explore every province on the{" "}
            <a href="/pnp">PNP hub</a>.
          </p>

          <h2>Family sponsorship</h2>
          <p>
            Family sponsorship lets a Canadian citizen or permanent resident bring a close family member to live in
            Canada as a permanent resident. The most common case is sponsoring a{" "}
            <strong>spouse, common-law partner or conjugal partner</strong>; you can also sponsor dependent children and,
            in limited circumstances, other relatives. There is usually no income test for sponsoring a partner or
            children, and sponsored spouses receive unconditional permanent residence.
          </p>
          <p>
            Parents and grandparents are sponsored through a separate, lottery-based program that has no new intake in
            2026, the <a href="/family-sponsorship/super-visa">Super Visa</a> is the practical alternative for reuniting with them
            long-term. Our <a href="/family-sponsorship">family sponsorship</a> page explains each option in detail.
          </p>

          <h2>Work-to-PR pathways</h2>
          <p>
            Working in Canada on a temporary permit is one of the most reliable ways to build toward permanent
            residence. A year of skilled Canadian work experience can qualify you for the{" "}
            <strong>Canadian Experience Class</strong> under Express Entry, and it strengthens many provincial streams.
            Common starting points include an employer-specific work permit (often requiring an LMIA), an open work
            permit, or the <a href="/work-permits">Post-Graduation Work Permit</a> for recent graduates.
          </p>
          <p>
            Because a job offer no longer adds CRS points, the value of Canadian work experience now lies in the
            experience itself, the points it earns directly, and the provincial-nomination doors it opens. We help you
            sequence a work permit and a PR application so each step counts toward the next.
          </p>

          <h2>Study-to-PR pathways</h2>
          <p>
            Studying in Canada can be the first step on a multi-year road to permanent residence. After graduating from
            an eligible program at a designated learning institution, many students qualify for a{" "}
            <strong>Post-Graduation Work Permit</strong>, which lets them gain the Canadian work experience that feeds
            into the Canadian Experience Class or a provincial stream. A study permit does not grant PR on its own, but
            it can open a clear, well-trodden pathway.
          </p>
          <p>
            Note that recent years have brought study-permit caps and tighter PGWP eligibility rules around language and
            field of study, so it is more important than ever to choose a program that keeps your PR options open. We can
            map the route before you enrol.
          </p>

          <h2>How long does it take, and how much does it cost?</h2>
          <p>
            How long it takes to immigrate to Canada depends entirely on your route. A complete Express Entry application
            is processed in about <strong>six months</strong> after an invitation, while provincial nominations and
            spousal sponsorship typically add several months on top. Costs vary too: government fees for an Express Entry
            PR application run to roughly <strong>CAD $1,525 per adult</strong>, before an approved language test (such as
            IELTS or CELPIP), an educational credential assessment, medicals and police certificates. You will also need
            to show proof of funds unless you have a qualifying job or Canadian work experience. Because fees and
            processing times change regularly, always confirm the current figures on IRCC&apos;s website.
          </p>
          <DataTable
            headers={["Route", "Typical processing", "Main government fees"]}
            rows={[
              ["Express Entry", "~6 months after invitation", "~CAD $1,525 / adult + ~$85 biometrics"],
              ["Provincial nominee (enhanced)", "Nomination + ~6 months federal", "Province fee + federal PR fee"],
              ["Spousal sponsorship", "~12 months", "~CAD $1,205 (sponsor + principal applicant)"],
            ]}
            caption="Illustrative timelines and fees (2026). Verify current amounts and processing times on canada.ca."
          />
          <p>
            These are general figures, not promises, every file is different, and we never guarantee a timeline or
            outcome. What we can do is build the strongest, cleanest application for your situation.
          </p>

          <h2>How Wild Mountain Immigration helps you immigrate</h2>
          <p>
            Choosing the right route is the single most important decision in your immigration journey, and it is where
            an experienced RCIC practice adds the most value. Working under a licensed Regulated Canadian Immigration
            Consultant, our team assesses your full profile, recommends the pathway most likely to succeed, and prepares
            an application that stands up to scrutiny, catching the small errors in NOC codes, work history and proof of
            funds that cause avoidable refusals.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. However you choose to plan how to immigrate to Canada, start by{" "}
            <a href="/contact">booking a consultation</a> for an honest read on your best route to Canadian PR.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your route to PR</h2>
          <p className="mt-3 text-ink-soft">Five paths to permanent residence, we help you find the one that fits.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The fastest federal route for skilled workers. We build your strongest CRS profile." href="/express-entry" />
            <FeatureCard icon={Mountain} title="Alberta AAIP" desc="Our home province. A provincial nomination adds 600 CRS points and can fast-track your PR." href="/alberta-immigration" />
            <FeatureCard icon={Mountain} title="Provincial Nominee Programs" desc="Every province runs its own streams. We match you to the strongest nomination route." href="/pnp" />
            <FeatureCard icon={Heart} title="Family sponsorship" desc="Sponsor a spouse, partner, child or eligible relative to join you in Canada as a permanent resident." href="/family-sponsorship" />
            <FeatureCard icon={Briefcase} title="Work-to-PR" desc="LMIA, PGWP and open work permits, build Canadian experience that leads to permanent residence." href="/work-permits" />
            <FeatureCard icon={GraduationCap} title="Study-to-PR" desc="Study in Canada, work after graduation, and build a pathway to PR through Canadian experience." href="/study-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Not sure which route is right for you?"
        sub="Get started with a licensed RCIC and get an honest read on your strongest path to Canadian permanent residence."
      />
    </>
  );
}
