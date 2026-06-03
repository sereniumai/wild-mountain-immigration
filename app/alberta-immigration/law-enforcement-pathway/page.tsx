import type { Metadata } from "next";
import { Calculator, Rocket, Briefcase, Shield, HeartPulse, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/law-enforcement-pathway";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "AAIP Law Enforcement Pathway 2026",
  titleAbsolute: "Law Enforcement Pathway 2026: Alberta AAIP Guide",
  description:
    "The AAIP Law Enforcement Pathway: Alberta police officer PR via Express Entry, the +6 sector EOI points, eligibility and how to apply. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "aaip law enforcement pathway",
    "alberta police officer pr",
    "law enforcement immigration alberta",
    "alberta peace officer immigration",
    "aaip law enforcement eoi points",
  ],
});

const faqs = [
  {
    q: "What is the AAIP Law Enforcement Pathway?",
    a: "It is a niche pathway within the Alberta Advantage Immigration Program (AAIP), delivered through the enhanced Alberta Express Entry Stream, for law-enforcement workers who hold an Alberta job offer where the employer is a member of the Alberta Association of Chiefs of Police. That membership lets the job offer earn +6 points under the AAIP Worker Expression of Interest (EOI) 'select sector' economic factor. Because the pathway runs through Express Entry, a provincial nomination adds 600 CRS points to your federal profile.",
  },
  {
    q: "Who is eligible for Alberta police officer PR through this pathway?",
    a: "The pathway is built for law-enforcement workers, primarily police officers (NOC 42100) and certain peace-officer roles, who have a genuine Alberta job offer with an employer that belongs to the Alberta Association of Chiefs of Police. You also need an active federal Express Entry profile (CRS of at least 300), an approved language test result and any required licensing or recognition under Alberta's policing and peace-officer standards. The membership of the employer is what unlocks the +6 sector points.",
  },
  {
    q: "How do the +6 law enforcement sector points work?",
    a: "On the AAIP Worker EOI grid (max 100), there is an economic factor worth up to 6 points for a job offer in a 'select' rural or sector area. Law enforcement is one of the qualifying select sectors: if your Alberta employer is a member of the Alberta Association of Chiefs of Police, your offer earns the full +6. That sits alongside up to 10 points for a permanent full-time Alberta job offer and up to 10 for a regulated occupation, so a strong law-enforcement file can stack a meaningful economic score.",
  },
  {
    q: "Does the AAIP Law Enforcement Pathway add 600 CRS points?",
    a: "Yes, indirectly. The pathway is delivered through the enhanced Alberta Express Entry Stream, so it is the provincial nomination that adds 600 CRS points to your federal Express Entry profile, not the +6 EOI points, which only improve your ranking inside Alberta's WEOI pool. The +6 helps you get selected by Alberta; the 600 CRS points come once Alberta nominates you, usually enough to clear the federal cut-off, though IRCC still issues the Invitation to Apply.",
  },
  {
    q: "Do I need to be licensed before I apply?",
    a: "Policing and peace-officer roles in Alberta are governed by provincial standards and, for many positions, by the employing service's own recruit-training and certification process. The AAIP does not grant your authority to serve as an officer, that comes through Alberta's policing and peace-officer framework and the hiring service. Confirm the standards for your specific role early, because they run in parallel with your immigration file.",
  },
  {
    q: "Does an AAIP nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence. Through the Alberta Express Entry Stream it adds 600 CRS points, usually enough to clear the next Express Entry cut-off, but you still file a separate application with IRCC, which makes the final decision on medical, security and admissibility grounds. Meeting a draw cut-off does not guarantee an invitation either, selection is competitive. We build the strongest possible case.",
  },
  {
    q: "How is the Law Enforcement Pathway different from other AAIP routes?",
    a: "It is a sector-specific use of the Alberta Express Entry Stream rather than a separate stream with its own rulebook. Compared with the Dedicated Health Care Pathway (which runs its own targeted health draws) or the Alberta Opportunity Stream (a base stream for people already working in Alberta), the Law Enforcement Pathway's defining feature is the +6 'select sector' EOI points unlocked when your employer is an Alberta Association of Chiefs of Police member. A consultation can confirm which AAIP route is genuinely strongest for you.",
  },
  {
    q: "Can I use this pathway from outside Canada?",
    a: "Potentially, because it runs through the Alberta Express Entry Stream, which can select candidates from the federal pool rather than requiring you to already be in Alberta. What you do need is a genuine Alberta law-enforcement job offer from a qualifying employer and an active Express Entry profile. In practice, policing recruitment and Alberta's standards often require steps best handled with the employer early, so confirm the sequence for your specific role.",
  },
];

export default function LawEnforcementPathwayPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "AAIP Law Enforcement Pathway 2026, Alberta Police Officer PR",
            description:
              "The AAIP Law Enforcement Pathway: Alberta police officer PR via Express Entry, the +6 sector EOI points, eligibility and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "AAIP Law Enforcement Pathway support",
            description:
              "The AAIP Law Enforcement Pathway: Alberta police officer PR via Express Entry, the +6 sector EOI points, eligibility and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta provincial nominee program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Law Enforcement"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Law Enforcement Pathway", path: PATH },
        ]}
        title={<>The AAIP <span className="text-brand">Law Enforcement Pathway</span></>}
        lede={
          <p>
            The <strong>AAIP Law Enforcement Pathway</strong> is a niche AAIP route, run through the Alberta Express Entry
            Stream, for police and peace officers with a qualifying Alberta job offer. For officers aiming at Alberta
            police officer PR, an employer that belongs to the Alberta Association of Chiefs of Police unlocks +6 Worker
            EOI points and a clear path to provincial nomination.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Score your AAIP EOI, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free AAIP Points Calculator</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Estimate your Alberta Worker EOI score (out of 100) in two minutes, no email required.</p>
              <Button href="/tools/aaip-calculator" className="mt-4 w-full" withArrow>Calculate my EOI score</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every AAIP stream explained" },
                { label: "Alberta Express Entry Stream", href: "/alberta-immigration/express-entry-stream", note: "The enhanced +600 CRS route this runs through" },
                { label: "Dedicated Health Care Pathway", href: "/alberta-immigration/dedicated-health-care-pathway", note: "Another sector-specific AAIP pathway" },
                { label: "AAIP calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The AAIP Law Enforcement Pathway is a sector-specific route within the enhanced Alberta Express Entry Stream for police and peace officers with a qualifying Alberta job offer. When the employer is an Alberta Association of Chiefs of Police member, the offer earns +6 Worker Expression of Interest points. Candidates also need an active Express Entry profile, language and any required licensing, and a nomination adds 600 CRS points toward permanent residence."
            items={[
              <>The <strong>AAIP Law Enforcement Pathway</strong> is a sector-specific route within the <strong>Alberta Express Entry Stream</strong> for police and peace officers with an Alberta job offer.</>,
              <>The defining feature: a job offer from an employer that is a member of the <strong>Alberta Association of Chiefs of Police</strong> earns <strong>+6 Worker EOI points</strong> under the &ldquo;select sector&rdquo; economic factor.</>,
              <>Because it runs through Express Entry, a <strong>nomination adds 600 CRS points</strong> to your federal profile.</>,
              <>Eligible roles centre on <strong>police officers</strong> (NOC 42100) and certain <strong>peace-officer</strong> positions.</>,
              <>You also need an <strong>Express Entry profile (CRS ≥ 300)</strong>, language and any licensing under Alberta&apos;s policing standards.</>,
            ]}
          />

          <h2>What is the AAIP Law Enforcement Pathway?</h2>
          <p>
            The <strong>AAIP Law Enforcement Pathway</strong> is a niche route within the Alberta Advantage Immigration
            Program (AAIP) for law-enforcement workers who hold an Alberta job offer where the employer is a member of the{" "}
            <strong>Alberta Association of Chiefs of Police</strong>.</p>
          <p>It is delivered through the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, so a provincial
            nomination adds <strong>600 CRS points</strong> to your federal Express Entry profile, typically enough to
            clear the cut-off in the next Express Entry draw, though IRCC issues the invitation. Law enforcement is one of Alberta&apos;s named
            priority sectors for 2026, alongside health care, tech, construction and the trades (source: alberta.ca,
            AAIP, May 2026), which is exactly why a qualifying offer earns extra Worker Expression of Interest (EOI)
            points.
          </p>
          <p>
            For officers pursuing Alberta police officer PR, the appeal is that this is a genuinely thin-competition
            niche: the volume is small compared with health care or the Opportunity Stream, but the scoring advantage is
            real. Law enforcement immigration cases in Alberta succeed when the employer relationship is confirmed early
            and the Worker EOI is built to capture every point, including the +6 the sector unlocks.
          </p>
          <Callout type="brand" title="Nomination is a step, not the finish line">
            An AAIP nomination, even on a sector pathway, does not grant permanent residence. You still file a separate
            application with IRCC, which decides on medical, security and admissibility grounds. Be wary of any source
            that implies a nomination is guaranteed or equals PR.
          </Callout>

          <h2>Which roles are eligible for Alberta peace officer immigration?</h2>
          <p>
            Eligibility centres on genuine law-enforcement roles in Alberta. The clearest fit is the sworn officer NOC,
            the police officer occupation (<abbr title="National Occupational Classification">NOC</abbr> 42100), but
            certain peace-officer roles can also qualify where the position is genuinely law-enforcement in nature and the
            employer participates in the Alberta Association of Chiefs of Police.</p>
          <p>That includes community peace officer
            immigration and special constable PR cases, provided the role is truly enforcement-focused. The table below
            gives representative examples; the exact occupation list and how a role is classified reflect
            Alberta&apos;s current priorities and change over time, so always confirm your specific NOC 2021 code and the
            employer&apos;s membership against the live alberta.ca guidance before relying on it.
          </p>
          <DataTable
            headers={["Role group", "Examples", "Typical requirement"]}
            rows={[
              ["Police officers", "Municipal police constables, provincial and RCMP Alberta employer officers, First Nations police officers (NOC 42100)", "Alberta job offer with an Alberta Association of Chiefs of Police member; recruit training to Alberta policing standards"],
              ["Peace officers", "Certain community peace officers and special constables (special constable PR) in genuine law-enforcement roles", "Alberta job offer; role must qualify as law enforcement; appointment under Alberta peace-officer standards"],
              ["Supervisory / specialist", "Sergeants and specialist sworn roles within a qualifying service", "Alberta job offer with a qualifying employer; relevant certification and experience"],
            ]}
            caption="Representative eligible law-enforcement roles for the AAIP Law Enforcement Pathway (alberta.ca, May 2026). The official occupation list and role classification change, verify your NOC and the employer's membership before applying."
          />
          <Callout type="warning" title="The employer link is everything">
            The +6 sector points depend on your Alberta employer being a member of the Alberta Association of Chiefs of
            Police. Confirm that membership in writing before you build your EOI around it, without it, the offer scores
            as an ordinary Alberta job offer rather than a select-sector one.
          </Callout>

          <h2>How do the +6 law enforcement sector EOI points work?</h2>
          <p>
            Every AAIP worker pathway is ranked through the <strong>Worker Expression of Interest (WEOI)</strong>, scored
            out of <strong>100 points</strong>, split into human capital (max 69) and economic factors (max 31). Within
            the economic factors, there is a &ldquo;select rural / sector&rdquo; factor worth up to <strong>6 points</strong>.
            Law enforcement is one of the qualifying select sectors: if your Alberta employer is a member of the Alberta
            Association of Chiefs of Police, your job offer earns the full <strong>+6</strong>. The grid below shows where
            that factor sits among the other economic points a law-enforcement file can stack.
          </p>
          <DataTable
            headers={["Economic factor", "Maximum points", "How a law-enforcement file earns it"]}
            rows={[
              ["Permanent full-time Alberta job offer", "10", "An ongoing, full-time offer from your Alberta law-enforcement employer"],
              ["Job offer in a select rural / sector area", "6", "+6 when the employer is a member of the Alberta Association of Chiefs of Police (law-enforcement select sector)"],
              ["Regulated occupation (with certification)", "10", "Where the role is regulated and you hold the recognised Alberta certification / appointment"],
              ["Alberta job offer location (rural / other community)", "5", "5 for an offer outside the Calgary or Edmonton CMA (rural / other Alberta community)"],
            ]}
            caption="AAIP Worker EOI economic factors relevant to the Law Enforcement Pathway (alberta.ca Worker EOI points grid, Aug 2025; max economic section 31). Verify the live grid before relying on any figure."
          />
          <Callout type="info" title="The +6 boosts your ranking, not your CRS">
            The +6 sector points improve where you sit inside Alberta&apos;s Worker EOI pool, helping you get selected. The
            600 CRS points, the figure that usually clears the federal cut-off, come separately, when Alberta
            nominates you through the enhanced Express Entry Stream. Keep the two scores distinct.
          </Callout>

          <h2>What are the eligibility requirements?</h2>
          <p>
            To qualify for the Law Enforcement Pathway you generally need each of the following in place at the time you
            submit your Worker EOI. Because the pathway runs through the Alberta Express Entry Stream, you must also
            satisfy that stream&apos;s federal requirement, an active Express Entry profile with a Comprehensive Ranking
            System (CRS) score of at least <strong>300</strong>.
          </p>
          <DataTable
            headers={["Requirement", "What it asks for", "EOI points it can earn"]}
            rows={[
              ["Eligible Alberta law-enforcement job offer", "A genuine, ongoing full-time offer in a qualifying police / peace-officer role", "Up to 10 (permanent full-time Alberta job offer)"],
              ["Alberta Association of Chiefs of Police employer", "Your employer is a member, this unlocks the law-enforcement select sector", "+6 (select sector economic factor)"],
              ["Licensing / policing standards", "Recognition or appointment under the policing standards Alberta sets for officers and peace officers where required", "Up to 10 if the role is regulated and you hold the certification"],
              ["Express Entry profile (CRS ≥ 300)", "An active federal Express Entry profile, since the pathway is enhanced", "Nomination later adds 600 CRS (federal, not EOI)"],
              ["Language", "An approved test result meeting the AAIP minimum (CLB/NCLC 4 to submit), scored on your lowest of four abilities", "Up to 10 (general language proficiency)"],
              ["Worker EOI submission", "A WEOI submitted to Alberta's pool, valid one year, with the $135 fee (effective April 7, 2026)", "Scored out of 100 overall"],
            ]}
            caption="Core AAIP Law Enforcement Pathway eligibility and the Worker EOI points each element can earn (alberta.ca, May 2026). Requirements change, verify the official criteria before applying."
          />
          <Callout type="info" title="Language is scored on your weakest ability">
            The CLB level is taken from the lowest of your four abilities, reading, writing, listening and speaking, so a
            single weak skill can quietly hold back your whole file. Lifting your weakest band is often the single most
            valuable thing you can do before submitting.
          </Callout>

          <h2>How does this differ from other AAIP routes?</h2>
          <p>
            The Law Enforcement Pathway is best understood as a sector-specific use of Alberta&apos;s only enhanced
            stream rather than a separate programme with its own rulebook. The contrast below shows how it sits beside the
            two AAIP routes officers most often compare it with.
          </p>
          <DataTable
            headers={["Feature", "Law Enforcement Pathway", "Dedicated Health Care Pathway", "Opportunity Stream (AOS)"]}
            rows={[
              ["Delivered through", "Alberta Express Entry Stream (enhanced)", "Alberta Express Entry Stream (+ non-EE variant)", "Base stream"],
              ["Effect of nomination", "Adds 600 CRS points", "Adds 600 CRS points", "Leads to a separate IRCC paper application"],
              ["Defining feature", "+6 select-sector points (Chiefs of Police member employer)", "Targeted health-care draws", "For workers already in Alberta on a valid permit"],
              ["Must be in Alberta?", "No, can select from the federal pool", "No, can select from the federal pool", "Yes, working on a valid permit"],
            ]}
            caption="AAIP Law Enforcement Pathway compared with two related AAIP routes (alberta.ca, May 2026)."
          />
          <p>
            Because law-enforcement volumes are small, this niche faces thinner competition than headline streams, but
            remember that meeting any cut-off is necessary, not sufficient. Our{" "}
            <a href="/tools/aaip-calculator">free AAIP calculator</a> estimates where your Worker EOI score, including the
            +6 sector points, would land.
          </p>

          <h2>How to apply for the Law Enforcement Pathway</h2>
          <p>
            The pathway follows the standard AAIP and Express Entry sequence, with the law-enforcement specifics layered
            in. The steps below show the typical order.
          </p>
          <Steps
            steps={[
              { title: "Secure an eligible Alberta law-enforcement job offer", desc: "Obtain a genuine, ongoing full-time offer in a qualifying police or peace-officer role, the anchor of your eligibility." },
              { title: "Confirm the Chiefs of Police employer link", desc: "Verify in writing that your Alberta employer is a member of the Alberta Association of Chiefs of Police, since that membership unlocks the +6 select-sector points." },
              { title: "Meet Alberta's policing standards", desc: "Begin any required recruit training, certification or peace-officer appointment under Alberta's policing standards, it runs in parallel and can take time." },
              { title: "Test language & gather documents", desc: "Take an approved language test (IELTS, CELPIP or TEF/TCF), get an ECA for foreign education, and collect job-offer and work-experience evidence." },
              { title: "Create your Express Entry profile & submit your EOI", desc: "Build an active federal Express Entry profile (CRS ≥ 300), then submit your Worker EOI (with the $135 fee from April 7, 2026), scored out of 100 and valid one year." },
              { title: "Get invited, nominated & apply to IRCC", desc: "If Alberta selects you, accept the invitation, apply to the AAIP ($1,500 fee), gain the 600 CRS points on nomination, and file your separate IRCC PR application." },
            ]}
          />

          <h2>How Wild Mountain helps law-enforcement applicants</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. Working under a licensed RCIC
            (CICC #R706497), our team confirms that your role genuinely qualifies, gets the Alberta Association of Chiefs
            of Police employer link documented properly, and builds your Worker EOI so the +6 sector points and every
            other entitlement are captured. We catch the small mistakes, the wrong NOC code, a language score one band
            short, a job offer that doesn&apos;t quite meet AAIP requirements, that cause avoidable refusals.
          </p>
          <p>
            Because the pathway runs through the{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, we also weigh it against
            the <a href="/alberta-immigration/dedicated-health-care-pathway">Dedicated Health Care Pathway</a>, the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, your federal{" "}
            <a href="/express-entry">Express Entry</a> standing and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, and other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>. We can line up the right{" "}
            <a href="/work-permits">work permit</a>, score you with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and set out our{" "}
            <a href="/fees">fees</a> in advance.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own AAIP
            law-enforcement application an expert check before you submit. Figures on this page are
            current to May 2026 and change with each draw, so we always confirm the live alberta.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">The Law Enforcement Pathway is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="The enhanced stream this pathway runs through, adding 600 CRS on nomination." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={HeartPulse} title="Dedicated Health Care Pathway" desc="Another sector-specific AAIP pathway, with its own targeted health-care draws." href="/alberta-immigration/dedicated-health-care-pathway" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base AAIP route for workers already employed in Alberta on a valid permit." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Shield} title="Express Entry" desc="The federal pool Alberta selects from, and the CRS score the +600 lands on." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to bring your law-enforcement career to Alberta?"
        sub="Get started with a licensed RCIC in Canmore and get an honest read on your Law Enforcement Pathway eligibility and Worker EOI score."
      />
    </>
  );
}
