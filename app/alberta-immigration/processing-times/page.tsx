import type { Metadata } from "next";
import { Clock, Briefcase, Rocket, CalendarClock, Calculator, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/alberta-immigration/processing-times";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "AAIP Processing Time 2026 (RCIC Timeline)",
  titleAbsolute: "AAIP Processing Time 2026: Nomination Timeline",
  description:
    "AAIP processing time 2026: how long the Alberta nomination takes stage by stage, from EOI to PR, plus the separate IRCC timeline. Talk to an RCIC today.",
  path: PATH,
  keywords: [
    "aaip processing time 2026",
    "how long does the aaip take",
    "aaip nomination timeline",
    "aaip application processing",
    "aaip processing times",
  ],
});

const faqs = [
  {
    q: "How long does the AAIP take from start to finish?",
    a: "There is no single guaranteed figure, but most worker files run roughly 12 to 20 months end to end: a few weeks to a few months waiting in the Worker EOI pool, then about 3 to 6 months for Alberta to assess your nomination application, then a separate federal PR application with IRCC that can take six months for enhanced (Express Entry) streams and longer for base streams. Timelines move with demand and your file's completeness, so always verify the current ranges on alberta.ca and canada.ca before relying on them.",
  },
  {
    q: "Is an AAIP nomination the same as permanent residence?",
    a: "No. An AAIP nomination is a provincial endorsement, not permanent residence. After Alberta nominates you, you submit a separate application to IRCC, which makes the final PR decision on medical, security and admissibility grounds. The provincial nomination timeline and the federal IRCC timeline are two distinct steps, each with its own processing time. The nomination is the first half, not the finish line.",
  },
  {
    q: "What is the current AAIP nomination processing time in 2026?",
    a: "Alberta does not publish a fixed service standard for nomination assessment, but in 2026 most complete worker applications are being assessed in roughly the 3 to 6 month range once submitted. That figure excludes the time your Worker EOI spends in the pool waiting for an invitation and the separate federal PR step. Alberta updates its processing information periodically, so check alberta.ca/aaip-processing-information for the live position.",
  },
  {
    q: "How long does the federal PR step take after an AAIP nomination?",
    a: "It depends on whether your stream is enhanced or base. IRCC targets roughly six months for enhanced (Express Entry-aligned) provincial nominee applications, while base-stream paper applications, such as the Alberta Opportunity Stream, can take longer. These are IRCC timelines, separate from Alberta's, and they change with volumes; confirm the current estimate on canada.ca.",
  },
  {
    q: "Why is my AAIP application taking longer than expected?",
    a: "The most common causes are an incomplete file, a document Alberta or IRCC has to request, a language result or ECA that expired, a change in your circumstances, or simply higher application volumes against Alberta's tighter 2026 allocation of 6,403 nominations. Background, medical and security checks at the federal stage can also add time. A clean, complete submission is the single biggest thing within your control.",
  },
  {
    q: "Can I speed up my AAIP processing time?",
    a: "You cannot jump the queue, and no one can guarantee a faster government decision. What you can do is remove every avoidable delay: submit a complete application with the right NOC code, valid language and ECA results, and all supporting evidence the first time, and respond to any request for more information immediately. That is exactly where an RCIC adds value, preventing the back-and-forth that stretches timelines.",
  },
  {
    q: "Does meeting the EOI cut-off mean I will be invited quickly?",
    a: "Not necessarily. The Worker EOI is points-ranked and valid for one year, and Alberta holds draws 'as needed' rather than on a fixed schedule. A competitive score improves your odds, but the wait in the pool is unpredictable and meeting a past cut-off does not entitle you to an invitation. Treat any draw frequency or cut-off as a moving target and check the latest results on alberta.ca.",
  },
  {
    q: "Do AAIP timelines change?",
    a: "Yes, frequently. Both Alberta's nomination assessment times and IRCC's PR processing times shift with application volumes, allocation levels and policy changes. Every figure on this page is current to May 2026 and provided as an estimate, not a promise. Always confirm the live position on alberta.ca/aaip-processing-information and canada.ca before making plans around a timeline.",
  },
];

export default function ProcessingTimesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "AAIP Processing Time 2026: How Long the Alberta Nomination Takes",
            description:
              "AAIP processing time 2026: how long the Alberta nomination takes stage by stage, from EOI to PR, plus the separate IRCC timeline. RCIC-reviewed guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-31",
          }),
          serviceLd({
            name: "AAIP application management & timeline support",
            description:
              "AAIP processing time 2026: how long the Alberta nomination takes stage by stage, from EOI to PR, plus the separate IRCC timeline. RCIC-reviewed guide.",
            path: PATH,
            serviceType: "Alberta Advantage Immigration Program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Processing Times"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Processing Times", path: PATH },
        ]}
        title={<>AAIP processing time: <span className="text-brand">how long the nomination takes in 2026</span></>}
        lede={
          <p>
            <strong>AAIP processing time in 2026 runs in separate stages, not one wait</strong>: typically
            12&ndash;20 months from Worker EOI to permanent residence. This RCIC-reviewed guide breaks the AAIP
            nomination timeline down stage by stage and shows where the separate IRCC step fits in.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/aaip-calculator", label: "Score your AAIP EOI, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Clock className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Where does your file stand?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Get an honest read on your AAIP eligibility, EOI score and realistic timeline from a licensed RCIC.</p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta (AAIP) overview", href: "/alberta-immigration", note: "Every Alberta stream explained" },
                { label: "Latest AAIP draws", href: "/alberta-immigration/draws", note: "Recent invitations & cut-offs" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "The base in-Alberta worker route" },
                { label: "AAIP points calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="AAIP processing time in 2026 is not one figure but the sum of separate stages, often spanning roughly 12 to 20 months from Worker Expression of Interest to permanent residence. Those stages are an unpredictable wait in the EOI pool, about 3 to 6 months for Alberta to assess the nomination, then a separate IRCC step for PR. The pool wait varies because Alberta holds draws as needed rather than on a fixed schedule. A complete, accurate file is one of the biggest drivers of speed, and every estimate here can change with demand."
            items={[
              <>There is <strong>no single AAIP processing time</strong>, your wait is the sum of separate stages, typically <strong>12&ndash;20 months</strong> from Worker EOI to PR.</>,
              <>The <strong>Worker EOI pool wait</strong> is unpredictable: Alberta holds draws <strong>&ldquo;as needed&rdquo;</strong>, not on a fixed schedule, and EOIs stay valid one year.</>,
              <>In 2026, Alberta is assessing most complete <strong>nomination applications in roughly 3&ndash;6 months</strong> once submitted (estimate, not a service standard).</>,
              <>The <strong>AAIP nomination is separate from PR</strong>: IRCC runs its own timeline, about six months for enhanced streams, longer for base streams.</>,
              <>Tighter <strong>2026 allocation (6,403 nominations)</strong> and a complete, accurate file are the biggest drivers of how long the AAIP takes.</>,
            ]}
          />

          <h2>How long does the AAIP take from start to finish?</h2>
          <p>
            <strong>AAIP processing time</strong> is best understood as a chain of separate stages, not one number. From
            submitting your Worker Expression of Interest (EOI) to landing as a permanent resident, most worker files run
            roughly <strong>12 to 20 months</strong>. That total hides a lot of variation, because each stage has its
            own clock, and the biggest one (the IRCC permanent-residence step) is not run by Alberta at all.</p>
          <p>As a frame of
            reference, Alberta&apos;s 2026 nomination allocation is just <strong>6,403</strong>, down from 9,750 in 2024
            (source: alberta.ca, AAIP processing information, May 2026), so demand is firm against a tighter cap and
            timelines stay sensitive to volume.
          </p>
          <p>
            That is why a clean answer to &ldquo;<em>how long does the AAIP take</em>&rdquo; is impossible to pin to a
            single figure. What we can do is map the AAIP nomination timeline stage by stage, give you the current
            estimated ranges for each, and be honest that every one of them is an estimate that moves with demand. The
            table below is the end-to-end view; the sections after it explain each stage.
          </p>

          <h2>What are the stages of the AAIP nomination timeline?</h2>
          <p>
            The AAIP follows a standard sequence for worker streams: you submit a Worker EOI, wait to be invited, file a
            full nomination application, receive (or are refused) a provincial nomination, and then file a{" "}
            <em>separate</em> federal application with IRCC for permanent residence. The estimated ranges below are current
            to May 2026 and are <strong>estimates, not guarantees</strong>, Alberta does not publish a fixed service
            standard for nomination assessment, and IRCC&apos;s figures change with volumes.
          </p>
          <DataTable
            headers={["Stage", "What happens", "Estimated time (2026)"]}
            rows={[
              ["1. Worker EOI submission", "You create and submit your Worker EOI (WEOI), scored out of 100. It sits in Alberta's pool, valid for one year.", "Same day to submit; then a variable wait in the pool"],
              ["2. Invitation to apply", "Alberta runs draws 'as needed' and invites the highest-ranked candidates. Meeting a past cut-off does not guarantee an invitation.", "Days to several months (unpredictable)"],
              ["3. AAIP nomination application", "After an invitation you submit a complete application with the $1,500 fee; Alberta assesses eligibility and documents.", "~3–6 months once submitted (estimate)"],
              ["4. Provincial nomination", "If approved, Alberta issues your nomination certificate. This is a provincial endorsement, not PR.", "Issued on approval of stage 3"],
              ["5. Federal PR application (IRCC)", "You file a separate PR application with IRCC, including medicals, police checks and proof of funds. IRCC makes the final decision.", "~6 months (enhanced/EE); longer for base streams"],
            ]}
            caption="AAIP nomination timeline, stage by stage. Estimates current to May 2026 (alberta.ca/aaip-processing-information + IRCC). Figures change, verify live."
          />
          <Callout type="brand" title="The nomination is the first half, not the finish line">
            A common misunderstanding is treating an AAIP nomination as permanent residence. It is not. The nomination is a
            provincial endorsement; permanent residence is granted by IRCC on a separate application with its own
            processing time. When you plan around an AAIP timeline, you have to budget for both halves.
          </Callout>

          <h2>How long is the Worker EOI pool wait?</h2>
          <p>
            The first, and least predictable, part of your AAIP processing time is the wait in the{" "}
            <strong>Worker EOI pool</strong>. Submitting the EOI itself is quick, but Alberta holds draws &ldquo;as
            needed&rdquo; rather than on a fixed monthly cadence, and it invites only the highest-ranked candidates each
            round. Your EOI stays valid for one year. A strong score shortens the likely wait, but nobody can promise a
            draw date or that a given cut-off will hold, both move draw to draw. You can estimate your score with
            our <a href="/tools/aaip-calculator">free AAIP calculator</a> and track recent rounds on our{" "}
            <a href="/alberta-immigration/draws">AAIP draws page</a>.
          </p>
          <Callout type="warning" title="Meeting the cut-off does not start a clock">
            Because draws are ad-hoc, there is no countdown that begins when your score clears a past cut-off. You remain in
            the pool until Alberta actually invites you. Beware any source that implies a guaranteed invitation timeframe
            from the Worker EOI stage.
          </Callout>

          <h2>What is the AAIP nomination application processing time in 2026?</h2>
          <p>
            Once you are invited and submit a complete nomination application with the <strong>$1,500</strong> AAIP
            application fee, Alberta assesses your eligibility, documents and Worker EOI claims. Alberta does not publish a
            fixed service standard, but in 2026 most <em>complete</em> applications are being assessed in roughly a{" "}
            <strong>3 to 6 month</strong> window once submitted.</p>
          <p>The single biggest variable here is completeness: a file
            that triggers a request for missing documents, or that has a wrong NOC code or an expired language result,
            restarts the back-and-forth and stretches the AAIP application processing time well beyond that range. The
            controlling, up-to-date position lives on alberta.ca/aaip-processing-information.
          </p>
          <DataTable
            headers={["Driver", "Effect on nomination processing time"]}
            rows={[
              ["File completeness", "A complete, accurate submission is assessed fastest; missing documents trigger requests that add weeks or months."],
              ["Stream", "Base streams (e.g. Opportunity, Rural Renewal) and enhanced (Express Entry) streams move through different queues and federal steps."],
              ["Document validity", "Expired language results, an out-of-date ECA or a lapsed work permit force resubmission and delay assessment."],
              ["Application volume", "Against the tighter 2026 allocation of 6,403, higher volumes lengthen queues."],
              ["Changes in your situation", "A new job, NOC change, or family change mid-process can require updates and re-assessment."],
            ]}
            caption="Factors that affect AAIP nomination processing time (alberta.ca, May 2026). All timelines are estimates that change with demand."
          />

          <h2>How long does the federal PR step take after a nomination?</h2>
          <p>
            Here is the part many applicants underestimate: the <strong>AAIP nomination is separate from your permanent
            residence application</strong>, and the federal step has its own, often longer, timeline. After Alberta
            nominates you, you file a distinct application with IRCC. The IRCC PNP processing time in 2026 depends on
            whether your stream is enhanced or base: an Express Entry PNP application targets roughly six months, while
            base-stream paper applications run longer.
          </p>
          <DataTable
            headers={["Stream type", "Federal route", "IRCC processing estimate (2026)"]}
            rows={[
              ["Enhanced (Express Entry-aligned)", "Express Entry electronic PR application after a +600 CRS nomination", "~6 months (IRCC target)"],
              ["Base (e.g. Opportunity, Rural Renewal)", "Separate paper PR application to IRCC", "Often longer than 6 months"],
            ]}
            caption="IRCC permanent-residence processing after an AAIP nomination (canada.ca, 2026). These are federal timelines, separate from Alberta's, and change with volumes."
          />
          <p>
            On the nomination certificate timeline, the certificate itself is issued the moment Alberta approves stage 3;
            the longer clock is the federal PR step that follows. The Alberta{" "}
            <a href="/alberta-immigration/express-entry-stream">Express Entry Stream</a> is the province&apos;s
            only enhanced route, a nomination there adds 600 CRS points and channels you into the faster electronic
            IRCC process.</p>
          <p>The <a href="/alberta-immigration/opportunity-stream">Opportunity Stream</a> and other base
            streams lead to a separate paper PR application, which typically takes longer at the federal stage. Either way,
            IRCC, not Alberta, makes the final decision on medical, security and admissibility grounds, and
            those checks can add time. Confirm current figures on canada.ca, as they move with demand.
          </p>

          <h2>What factors affect how long the AAIP takes?</h2>
          <p>
            Most of the variation in AAIP processing time comes down to a handful of factors, some within your
            control, some not:
          </p>
          <ul>
            <li><strong>Completeness and accuracy.</strong> A complete application with the right NOC code, valid documents and clear evidence is assessed fastest. Gaps create requests for more information that add weeks or months.</li>
            <li><strong>Your stream.</strong> Enhanced (Express Entry) and base streams move through different queues and very different federal steps, this is usually the biggest single driver of total time.</li>
            <li><strong>EOI score and draw timing.</strong> A competitive score shortens the likely pool wait, but ad-hoc draws make the invitation stage inherently unpredictable.</li>
            <li><strong>Application volumes and allocation.</strong> The tighter 2026 allocation of 6,403 nominations means firmer competition and queues that lengthen when volumes spike.</li>
            <li><strong>Federal checks.</strong> Medical, security and background verification at the IRCC stage can extend the federal timeline beyond the headline estimate.</li>
          </ul>

          <h2>What should I do while I wait?</h2>
          <p>
            Waiting is not dead time. The most useful things you can do keep your file ready and your timeline as short as
            the rules allow:
          </p>
          <ul>
            <li><strong>Keep documents current.</strong> Language test results are valid for two years and your ECA has its own validity, renew before they lapse so nothing forces a resubmission.</li>
            <li><strong>Maintain valid status.</strong> If you are in Alberta on a work permit, keep your status valid; gaps can affect eligibility and the federal step.</li>
            <li><strong>Update your EOI if your profile improves.</strong> A higher language band or new Canadian experience can lift your score while you wait in the pool.</li>
            <li><strong>Respond fast to any request.</strong> If Alberta or IRCC asks for more information, replying immediately is the single best way to avoid stretching your timeline.</li>
            <li><strong>Verify the live timelines.</strong> Treat alberta.ca/aaip-processing-information as your AAIP processing time tracker and check it and canada.ca periodically, the estimates here are current to May 2026 and do change.</li>
          </ul>

          <h2>How Wild Mountain keeps your AAIP file moving</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and the{" "}
            <a href="/alberta-immigration">AAIP</a> is the program we work with most. We cannot speed up a government
            decision, and we never pretend to: timelines are set by Alberta and IRCC, and we make no guarantees about
            outcomes or processing speed.</p>
          <p>What we <em>can</em> do is remove the avoidable delays. Working under a licensed
            RCIC (CICC #R706497), our team builds a complete, accurate nomination application the first time, right NOC
            code, valid documents, evidence in order, and manages the separate IRCC step so requests for more information
            don&apos;t stretch your timeline.
          </p>
          <p>
            We can also map a realistic timeline for whichever route fits, the{" "}
            <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a> or the{" "}
            <a href="/alberta-immigration/rural-renewal-stream">Rural Renewal Stream</a>, track the latest{" "}
            <a href="/alberta-immigration/draws">AAIP draws</a>, weigh your federal{" "}
            <a href="/express-entry">Express Entry</a> options and{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, compare Alberta with other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>, line up the right{" "}
            <a href="/work-permits">work permit</a>, score yourself with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and set out our <a href="/fees">fees</a> up front.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own AAIP
            application an expert check before you submit, which is often where the costliest delays are caught.{" "}
            Every AAIP processing time figure here is current to 2026 and changes with demand, so we always confirm the
            live alberta.ca and canada.ca pages before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore your Alberta options</h2>
          <p className="mt-3 text-ink-soft">Timelines are one piece. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={CalendarClock} title="Latest AAIP draws" desc="Recent 2026 invitation rounds, cut-offs and allocation, updated each draw." href="/alberta-immigration/draws" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base in-Alberta worker route, and how its timeline compares." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="The enhanced route that adds 600 CRS and channels you into the faster IRCC process." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={Calculator} title="AAIP points calculator" desc="Estimate your Worker EOI score out of 100 in two minutes, free, no email required." href="/tools/aaip-calculator" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Want a realistic AAIP timeline for your file?"
        sub="Get started with a licensed RCIC in Canmore for an honest read on your AAIP processing time, EOI score and next steps."
      />
    </>
  );
}
