import type { Metadata } from "next";
import { Languages } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/new-brunswick/strategic-initiative";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "New Brunswick Strategic Initiative Stream 2026",
  titleAbsolute: "NB Strategic Initiative Stream: NBPNP 2026",
  description:
    "New Brunswick Strategic Initiative Stream: the enhanced NBPNP route for French-speaking skilled workers. Eligibility, +600 CRS and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "New Brunswick Strategic Initiative Stream",
    "NB French-speaking immigration",
    "bilingual workers New Brunswick",
    "NB strategic initiative PR",
    "New Brunswick francophone immigration",
  ],
});

const faqs = [
  {
    q: "What is the New Brunswick Strategic Initiative Stream?",
    a: "The New Brunswick Strategic Initiative Stream is an enhanced, Express-Entry-aligned pathway of the New Brunswick Provincial Nominee Program (NBPNP) for French-speaking skilled workers who want to settle in the province. It supports New Brunswick's francophone-immigration goals: the province is officially bilingual and works to keep its French-speaking share of newcomers high. Because it is enhanced, a nomination adds 600 CRS points to a valid Express Entry profile. That lifts most candidates well above recent draw cut-offs, though IRCC still issues any Invitation to Apply in a following federal draw.",
  },
  {
    q: "Do I have to speak French to qualify for the Strategic Initiative Stream?",
    a: "Yes. French language ability is the defining feature of this stream. It exists specifically to attract French-speaking newcomers to New Brunswick. You demonstrate it with results from an approved French test (TEF Canada or TCF Canada). Strong English alongside French (bilingualism) can strengthen your overall Express Entry profile, but French ability is what makes you a candidate for this particular route. Confirm the current French-test thresholds on welcomenb.ca before you apply.",
  },
  {
    q: "Is the Strategic Initiative Stream an enhanced or base nomination?",
    a: "It is enhanced. Like the NB Express Entry stream, the Strategic Initiative Stream is aligned with federal Express Entry, so a provincial nomination adds 600 CRS points to your Express Entry profile. That puts most candidates well above the typical draw cut-off and routes you to permanent residence through Express Entry, generally faster than a base stream, which requires a separate paper application to IRCC.",
  },
  {
    q: "Do I need a job offer for the Strategic Initiative Stream?",
    a: "It depends on the pathway. Some routes within New Brunswick's francophone-focused selection require a connection to the province or a genuine New Brunswick job offer, while others place more weight on French ability, work experience and a credible intention to settle. Because New Brunswick selects by sector and labour-market need rather than a published score, requirements shift. We review your profile and confirm honestly whether a job offer or provincial connection is needed in your case.",
  },
  {
    q: "Is the Strategic Initiative Stream open right now?",
    a: "New Brunswick runs a controlled, invitation-driven intake through the INB Portal, and individual streams can pause or reopen as the province manages its limited allocation. Because intake status changes, you should always confirm whether the Strategic Initiative Stream is currently accepting expressions of interest on the official welcomenb.ca program page before relying on it. We track these changes and will tell you the live position when we assess your file.",
  },
  {
    q: "How does the Strategic Initiative Stream differ from NB Express Entry?",
    a: "Both are enhanced streams that add 600 CRS points, but they target different candidates. The NB Express Entry stream draws from the federal pool based on New Brunswick employment or provincial interest across sectors. The Strategic Initiative Stream is built specifically around French language ability and the province's francophone-immigration goals. A French-speaking candidate may be eligible for both, choosing the right one depends on your French results, ties to the province and occupation.",
  },
  {
    q: "Does a Strategic Initiative nomination guarantee permanent residence?",
    a: "No. A provincial nomination is an endorsement, not permanent residence. Even with 600 CRS points and an Invitation to Apply, you still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We build the strongest possible case and flag risks before they become refusals.",
  },
];

export default function StrategicInitiativePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "New Brunswick Strategic Initiative Stream, 2026 RCIC Guide",
            description:
              "New Brunswick Strategic Initiative Stream: the enhanced NBPNP route for French-speaking skilled workers. Eligibility, +600 CRS and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "New Brunswick Strategic Initiative Stream application support",
            description:
              "New Brunswick Strategic Initiative Stream: the enhanced NBPNP route for French-speaking skilled workers. Eligibility, +600 CRS and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="New Brunswick (NBPNP), Strategic Initiative"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "New Brunswick", path: "/pnp/new-brunswick" },
          { name: "Strategic Initiative", path: PATH },
        ]}
        title={<>New Brunswick <span className="text-brand">Strategic Initiative Stream</span></>}
        lede={
          <p>
            The <strong>New Brunswick Strategic Initiative Stream</strong> is the enhanced NBPNP route for French-speaking
            skilled workers who want to settle in the province. A nomination adds 600 CRS points to an Express Entry
            profile and supports New Brunswick&apos;s francophone-immigration goals.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Languages className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">French-speaking and eyeing New Brunswick?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Strategic Initiative Stream rewards French ability, but intake and pathways shift. Get an honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "New Brunswick PNP (NBPNP)", href: "/pnp/new-brunswick", note: "All New Brunswick streams" },
                { label: "NB Express Entry Labour Market", href: "/pnp/new-brunswick/express-entry-labour-market", note: "The other enhanced NB route" },
                { label: "NB Business Immigration", href: "/pnp/new-brunswick/business-immigration", note: "For entrepreneurs in NB" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The New Brunswick Strategic Initiative Stream is an enhanced, Express Entry-aligned stream of the New Brunswick Provincial Nominee Program (NBPNP) for French-speaking skilled workers who intend to settle in the province. You must already have a valid Express Entry profile and meet the stream's French-language, work-experience and education requirements. A resulting nomination adds 600 CRS points toward permanent residence, putting most candidates well above the typical federal draw cut-off."
            items={[
              <>The <strong>Strategic Initiative Stream</strong> is the <strong>enhanced</strong> NBPNP route for <strong>French-speaking skilled workers</strong> who intend to settle in New Brunswick.</>,
              <>A nomination <strong>adds 600 CRS points</strong> to a valid Express Entry profile, lifting most candidates well above recent federal draw cut-offs, though IRCC issues any Invitation to Apply.</>,
              <><strong>French language ability is essential</strong>, proven with an approved French test (TEF/TCF Canada); strong English alongside it helps your wider profile.</>,
              <>Eligibility also rests on <strong>work experience, education and a genuine intention to live in New Brunswick</strong>; some routes need a connection or job offer.</>,
              <>Selection runs through the <strong>INB Portal</strong> by sector and labour need, eligibility does not guarantee an Invitation to Apply, and intake can pause.</>,
            ]}
          />

          <h2>What is the New Brunswick Strategic Initiative Stream?</h2>
          <p>
            The <strong>New Brunswick Strategic Initiative Stream</strong> is a pathway of the New Brunswick Provincial
            Nominee Program (NBPNP) created to attract <strong>French-speaking skilled workers</strong> to the province, and
            it sits at the heart of <strong>New Brunswick francophone immigration</strong>. New
            Brunswick is Canada&apos;s only officially bilingual province, and roughly <strong>one in three</strong>{" "}
            residents speaks French as a first language (source: Statistics Canada, 2021 Census). To protect that
            demographic balance, the province has set a <strong>francophone immigration target</strong>, aiming for
            francophones to make up a third of its newcomers, and the Strategic Initiative Stream is one of the main tools
            it uses to reach it (source: welcomenb.ca, May 2026). Figures and targets change, so always verify the current
            rules before acting.
          </p>
          <p>
            Crucially, this is an <strong>enhanced</strong> stream. Like the NB Express Entry route, it is aligned with
            federal Express Entry, so a provincial nomination adds <strong>600 CRS points</strong> to a valid Express Entry
            profile. That lifts most candidates well above recent draw cut-offs, though IRCC still issues any Invitation to Apply in a following federal draw. As a result, it is one of the
            fastest routes to permanent residence in New Brunswick for candidates whose French is strong. Not sure where
            your federal score stands? Try our <a href="/tools/crs-calculator">free CRS calculator</a> first.
          </p>

          <h2>Who is the Strategic Initiative Stream for?</h2>
          <p>
            This stream is built for one profile above all: a <strong>French-speaking skilled worker</strong> who genuinely
            intends to live, work and settle in New Brunswick. It is the province&apos;s flagship channel for{" "}
            <strong>French immigration to New Brunswick</strong>, helping to grow its{" "}
            <strong>French-speaking minority communities</strong> outside Quebec. If you are a francophone or strongly
            bilingual professional with qualifying work experience and you are drawn to the Acadian and francophone
            communities of New Brunswick, in regions such as the north and east of the province, this is the route designed
            with you in mind. The wider{" "}
            <a href="/pnp/new-brunswick">New Brunswick PNP</a> page sets out how it fits alongside the province&apos;s other
            streams.
          </p>
          <Callout type="brand" title="French ability is the defining feature">
            Unlike most economic streams, the Strategic Initiative Stream is organised around{" "}
            <strong>French language ability</strong> and New Brunswick&apos;s francophone-immigration goals. If your French
            is limited, the enhanced{" "}
            <a href="/pnp/new-brunswick/express-entry-labour-market">NB Express Entry Labour Market</a> route or a base
            stream is likely a better fit. We help you decide which door to knock on.
          </Callout>

          <h2>Strategic Initiative Stream eligibility</h2>
          <p>
            Because New Brunswick selects by sector and labour-market need rather than a single published score,
            requirements are best read as a connected set rather than a fixed checklist. That said, the core pillars of{" "}
            <strong>Strategic Initiative Stream eligibility</strong> are consistent: French language ability, qualifying
            work experience, education, and a credible intention to settle in New Brunswick. The stream is aimed squarely at
            francophone and <strong>bilingual workers</strong> New Brunswick wants to retain, so French ability sits at the
            centre of every profile. Some routes within the
            province&apos;s francophone selection also look for a <strong>connection to New Brunswick</strong> or a genuine{" "}
            <strong>job offer</strong> from a New Brunswick employer. The table below summarises what the stream typically
            asks for.
          </p>
          <DataTable
            headers={["Requirement", "What the Strategic Initiative Stream looks for"]}
            rows={[
              ["French language ability", "Results from an approved French test (TEF Canada or TCF Canada); French ability is the stream's defining requirement"],
              ["English (bilingualism)", "Optional but valuable, strong English alongside French lifts your overall Express Entry profile"],
              ["Work experience", "Qualifying skilled work experience that matches New Brunswick's labour-market and sector priorities"],
              ["Education", "Completed education appropriate to your occupation; foreign credentials generally need an Educational Credential Assessment (ECA)"],
              ["Intention to settle", "A genuine intention to live and work in New Brunswick, central to a francophone-focused stream"],
              ["NB connection / job offer", "Some routes require a connection to the province or a genuine NB job offer, confirm which applies to you"],
              ["Express Entry profile", "A valid federal Express Entry profile, so the 600-point enhanced boost can attach to it"],
            ]}
            caption="Strategic Initiative Stream core eligibility, accurate as of May 2026 (welcomenb.ca). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Prove your French with an approved test">
            You demonstrate French ability with results from an approved test, <strong>TEF Canada</strong> or{" "}
            <strong>TCF Canada</strong>, which are scored against the Canadian-French benchmark{" "}
            <strong>NCLC</strong> (Niveaux de competence linguistique canadiens). Test results are time-limited, and the
            NCLC threshold the province expects can change, so confirm the current minimum on welcomenb.ca and keep your
            results current before you submit.
          </Callout>

          <h2>How the Strategic Initiative Stream compares to NB Express Entry</h2>
          <p>
            New Brunswick runs two enhanced, Express-Entry-aligned routes, and French-speaking candidates often qualify for
            both. The difference is what each one is built around. The{" "}
            <a href="/pnp/new-brunswick/express-entry-labour-market">NB Express Entry Labour Market</a> stream selects from
            the federal pool based on New Brunswick employment or provincial interest across sectors. The{" "}
            <strong>Strategic Initiative Stream</strong> is built specifically around French ability and the
            province&apos;s francophone-immigration goals. Choosing well can be the difference between an invitation and a
            long wait.
          </p>
          <DataTable
            headers={["Feature", "Strategic Initiative Stream", "NB Express Entry Labour Market"]}
            rows={[
              ["Stream type", "Enhanced (+600 CRS)", "Enhanced (+600 CRS)"],
              ["Built around", "French ability + francophone goals", "NB employment / provincial interest"],
              ["French required?", "Yes, defining requirement", "No, open to all language profiles"],
              ["Express Entry profile", "Required", "Required"],
              ["Route to PR", "Express Entry (after nomination)", "Express Entry (after nomination)"],
            ]}
            caption="Strategic Initiative Stream vs NB Express Entry Labour Market (welcomenb.ca, May 2026). Eligibility does not guarantee an Invitation to Apply."
          />

          <h2>How to apply for the Strategic Initiative Stream</h2>
          <p>
            <strong>How to apply for the New Brunswick Strategic Initiative Stream</strong> follows the standard NBPNP
            sequence, an expression of interest first, then an invitation, then a full nomination application. The steps
            below show the path from confirming your French and eligibility to a federal permanent-residence decision.
            Because intake can pause and reopen, confirm the stream is currently accepting expressions of interest on
            welcomenb.ca before you start.
          </p>
          <Steps
            steps={[
              { title: "Confirm French & eligibility", desc: "Take an approved French test (TEF/TCF Canada), check your work experience and education match New Brunswick's priorities, and confirm the stream is open." },
              { title: "Create an Express Entry profile", desc: "Set up or update your federal Express Entry profile so the enhanced +600-point nomination can attach to it later." },
              { title: "Submit an INB Portal expression of interest", desc: "Submit your expression of interest through New Brunswick's INB Portal. It stays valid for 365 days while the province reviews candidates against its francophone and sector priorities." },
              { title: "Receive an Invitation to Apply", desc: "If New Brunswick selects you, it issues an Invitation to Apply. Eligibility alone does not guarantee this, selection follows provincial need." },
              { title: "Submit your nomination application", desc: "File a full nomination application with French results, work-experience evidence and supporting documents within the window you are given." },
              { title: "Get nominated & apply to IRCC", desc: "On approval, New Brunswick nominates you and adds 600 CRS points to your Express Entry profile. You then apply to IRCC, which makes the final PR decision." },
            ]}
          />
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            New Brunswick selects by francophone target, sector and labour-market need, not a published numeric ranking, and its allocation is limited. Many otherwise-eligible profiles will not receive an Invitation to Apply in a
            given cycle, and intake can pause. We give you a candid read on your realistic chances before you invest time
            and fees.
          </Callout>

          <h2>Fees and the 2026 New Brunswick context</h2>
          <p>
            Submitting an expression of interest through the INB Portal is <strong>free</strong>. As published on
            welcomenb.ca, most NBPNP streams charge a provincial application fee of around <strong>$250</strong> at the
            nomination stage, separate from the IRCC permanent-residence fees you pay federally. All figures change, so
            confirm the current amounts on the official New Brunswick immigration site before you apply.
          </p>
          <p>
            Two factors shape the program in 2026. First, New Brunswick&apos;s nomination space is{" "}
            <strong>tight</strong>, its 2025 allocation was about <strong>2,750</strong> spaces shared between the PNP and
            the Atlantic Immigration Program, and the 2026 figure is expected to remain constrained after federal
            allocations were cut nationwide (source: welcomenb.ca / IRCC, May 2026). Second, the province runs a{" "}
            <strong>controlled, sector-focused intake</strong>, directing invitations toward its highest priorities. The
            francophone focus of the Strategic Initiative Stream is a deliberate counterweight: by encouraging francophone
            mobility into the province, it lets New Brunswick keep attracting French-speaking newcomers even while overall
            numbers are limited.
          </p>

          <h2>How Wild Mountain helps with the Strategic Initiative Stream</h2>
          <p>
            We assess your profile against New Brunswick&apos;s current francophone and sector priorities, confirm your
            French results clear the threshold the province expects, and position your Express Entry profile and INB Portal
            expression of interest to stand out. Our team is led by a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497); we prepare a nomination
            application that stands up to scrutiny and represent you with both the province and IRCC. We work entirely
            online. With New Brunswick&apos;s allocation tight and intake shifting, that positioning is where good advice
            earns its keep, and we will tell you honestly if the enhanced{" "}
            <a href="/pnp/new-brunswick/express-entry-labour-market">NB Express Entry</a> route or another stream fits you
            better.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. Whichever way you go, the{" "}
            <strong>New Brunswick Strategic Initiative Stream</strong> can be one of the fastest francophone routes to
            permanent residence in the province. Figures here are current to 2026 and change, so
            we always confirm the live welcomenb.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="French-speaking? See if New Brunswick fits"
        sub="Get started with a licensed RCIC for an honest read on the Strategic Initiative Stream and your strongest route to permanent residence in New Brunswick."
      />
    </>
  );
}
