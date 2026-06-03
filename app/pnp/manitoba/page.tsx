import type { Metadata } from "next";
import { MapPin, Briefcase, Globe2, GraduationCap, Building2, Rocket, Map } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/manitoba";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Manitoba Provincial Nominee Program (MPNP) 2026",
  titleAbsolute: "Manitoba Provincial Nominee Program (MPNP) 2026 Guide",
  description:
    "Manitoba Provincial Nominee Program 2026: how the MPNP Expression of Interest points draws work, the streams, eligibility and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Manitoba Provincial Nominee Program",
    "MPNP 2026",
    "Manitoba PNP",
    "MPNP Expression of Interest",
    "MPNP eligibility",
    "how to apply MPNP",
  ],
});

const faqs = [
  {
    q: "Do I need a connection to Manitoba to qualify for the MPNP?",
    a: "Yes, a genuine connection to Manitoba is mandatory for every MPNP applicant, and it carries the most points in the Expression of Interest ranking. A connection can come from current work in Manitoba, past study there, close family or friends living in the province, or selection through a strategic recruitment initiative. Without an established connection, most candidates will not score highly enough to receive a Letter of Advice to Apply. This requirement is the single biggest difference between the MPNP and other provincial programs.",
  },
  {
    q: "How does the MPNP Expression of Interest work?",
    a: "You first create a free MPNP Expression of Interest (EOI) profile. Manitoba scores it out of 1,000 points, with your Manitoba connection worth up to 500 of those, and then ranks all candidates in the pool. In each draw, the province issues a Letter of Advice to Apply (LAA) to the highest-ranked profiles, often targeting specific occupations. Selection is by ranking and provincial priorities, not first-come-first-served, and submitting an EOI is not an application. You only apply for a nomination after you receive an LAA.",
  },
  {
    q: "Is the MPNP an Express Entry program?",
    a: "Mostly no. The MPNP's core skilled-worker streams are 'base' nominations, which means you apply to IRCC for permanent residence through a separate paper application rather than through Express Entry. The Skilled Worker Overseas stream does include an enhanced, Express Entry-aligned pathway for candidates already in the federal pool, which adds 600 CRS points. We confirm at the outset whether your route is base or enhanced, because it changes your entire timeline.",
  },
  {
    q: "What is a good Expression of Interest score for the MPNP?",
    a: "There is no single published pass mark. Manitoba has largely stopped publishing one uniform cut-off because many draws are now occupation-specific or tied to strategic recruitment, so the score needed varies draw to draw. Your Manitoba connection (up to 500 points), language ability, age, education and work experience all feed your ranking out of 1,000. Rather than chase a number, the practical goal is to maximise every category, especially your connection and language, and apply in a draw that targets your occupation.",
  },
  {
    q: "Can international graduates apply through the MPNP?",
    a: "The International Education Stream is reserved for graduates of designated Manitoba post-secondary institutions. It includes the Career Employment Pathway, the Graduate Internship Pathway (which uses Mitacs internships and needs no job offer), and a small International Student Entrepreneur Pilot. Graduates from outside Manitoba do not use this stream, they would generally apply through the Skilled Worker in Manitoba stream if they hold qualifying Manitoba work and a job offer.",
  },
  {
    q: "How much does the MPNP cost?",
    a: "Submitting an Expression of Interest is free. There is a provincial application fee once you are invited to apply for a nomination, confirm the current amount on immigratemanitoba.com, as fees change. These provincial fees are separate from the IRCC permanent-residence fees you pay later at the federal stage. Business Investor Stream candidates face higher costs and substantial net-worth and investment requirements rather than an application fee alone.",
  },
  {
    q: "How does the Business Investor Stream work?",
    a: "The Business Investor Stream is work-permit-first. Approved Entrepreneur Pathway candidates come to Manitoba on a temporary work permit, establish or buy a business, and are only nominated for permanent residence after meeting the terms of a Business Performance Agreement. The Entrepreneur Pathway expects roughly a $500,000 minimum net worth and a minimum investment (around $250,000 in the Winnipeg capital region or $150,000 outside it). A separate Farm Investor Pathway exists for agricultural operations.",
  },
  {
    q: "How long does the MPNP take?",
    a: "Timelines depend on your stream and the federal stage. After you submit a complete nomination application, Manitoba's processing typically runs several months. Once nominated, a base nomination means a separate paper application to IRCC, which generally takes longer than an Express Entry application; an enhanced Skilled Worker Overseas nomination processed through Express Entry is usually faster. Add the waiting time for a Letter of Advice to Apply, and most applicants should plan for the better part of a year or more.",
  },
];

export default function ManitobaPnpPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Manitoba Provincial Nominee Program (MPNP), 2026 RCIC Guide",
            description:
              "Manitoba Provincial Nominee Program 2026: how the MPNP Expression of Interest points draws work, the streams, eligibility and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "MPNP application support",
            description:
              "Manitoba Provincial Nominee Program 2026: how the MPNP Expression of Interest points draws work, the streams, eligibility and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Provincial Nominee Programs"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Manitoba (MPNP)", path: PATH },
        ]}
        title={<>Manitoba Provincial Nominee Program <span className="text-brand">(MPNP)</span></>}
        lede={
          <p>
            The <strong>Manitoba Provincial Nominee Program</strong> nominates skilled workers, graduates and entrepreneurs
            with a genuine connection to Manitoba for permanent residence. In 2026, the MPNP selects through a points-ranked
            Expression of Interest, issuing Letters of Advice to Apply to its highest-priority candidates.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is the MPNP right for you?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The MPNP rewards a real connection to Manitoba. Get an honest assessment of your odds from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Saskatchewan (SINP)", href: "/pnp/saskatchewan", note: "The neighbouring prairie PNP" },
                { label: "Ontario (OINP)", href: "/pnp/ontario", note: "Canada's largest PNP" },
                { label: "Alberta (AAIP)", href: "/alberta-immigration", note: "Our home province's program" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Manitoba Provincial Nominee Program (MPNP) is the province's economic immigration program for skilled workers, international graduates and business investors who hold a genuine connection to Manitoba. It selects candidates for Canadian permanent residence through a points-ranked Expression of Interest pool, issuing Letters of Advice to Apply to its highest-priority profiles. An MPNP nomination supports a PR application to IRCC, and an enhanced (Express Entry aligned) nomination adds 600 CRS points to your federal profile."
            items={[
              <>The <strong>Manitoba Provincial Nominee Program (MPNP)</strong> nominates workers, graduates and entrepreneurs with ties to Manitoba for permanent residence.</>,
              <>A <strong>genuine connection to Manitoba is mandatory</strong> for every applicant, it is worth up to 500 of the 1,000 Expression of Interest points.</>,
              <>Selection is by <strong>Letter of Advice to Apply (LAA)</strong> from a ranked pool, submitting an EOI is free and is not an application.</>,
              <>Manitoba&apos;s 2026 nomination allocation is roughly <strong>6,239</strong>, with many draws now occupation-specific.</>,
              <>Most MPNP streams are <strong>base</strong> nominations; only the Skilled Worker Overseas stream offers an enhanced, Express Entry-aligned (+600 CRS) option.</>,
            ]}
          />

          <h2>What is the Manitoba Provincial Nominee Program?</h2>
          <p>
            The <strong>Manitoba Provincial Nominee Program</strong> is the province&apos;s main economic immigration
            route. It lets Manitoba nominate people whose skills, experience and ties match its labour-market needs; the
            provincial nomination is then your stepping stone to applying to IRCC for permanent residence. The program is
            built around one defining idea, a <strong>genuine connection to Manitoba</strong>, and it is organised into
            streams for skilled workers, international graduates and business investors.
          </p>
          <p>
            Manitoba&apos;s 2026 nomination allocation is about <strong>6,239</strong> (source: immigratemanitoba.com /
            IRCC, 2026). With that space, the province runs a points-ranked <strong>Expression of Interest (EOI)</strong>
            {" "}system and issues invitations, Letters of Advice to Apply, to its highest-priority candidates, increasingly
            targeting specific in-demand occupations. Figures, streams and draw patterns change frequently, so always verify
            the current rules on the official Manitoba source before acting.
          </p>

          <h2>How does the MPNP work?</h2>
          <p>
            For the skilled-worker streams, the <strong>MPNP 2026</strong> follows a clear shape. You build a free EOI
            profile, Manitoba scores it out of <strong>1,000 points</strong>, and the province ranks the whole pool.
            Periodic draws then issue a <strong>Letter of Advice to Apply (LAA)</strong> to the top-ranked candidates,
            often filtered by occupation or by a strategic recruitment initiative. Crucially, an EOI is <em>not</em> an
            application, you only apply for a nomination once you hold an LAA.
          </p>
          <p>
            The <strong>MPNP EOI</strong> is the entry point for every skilled-worker draw, so getting that profile
            right is where your chances are won or lost. In 2026 most <strong>MPNP draws</strong> are occupation-specific,
            which means there is no single published cut-off and each round can favour different in-demand fields. If you
            are tracking the latest MPNP draw to gauge your odds, treat those results as context rather than a fixed pass
            mark: the Manitoba PNP draw cut-off shifts from round to round, so always confirm the current pattern on the
            official immigratemanitoba.com source.
          </p>
          <Steps
            steps={[
              { title: "Build your EOI", desc: "Submit a free Manitoba Expression of Interest profile. It is scored out of 1,000 points and ranked against the pool." },
              { title: "Receive an LAA", desc: "Manitoba issues Letters of Advice to Apply to the highest-ranked profiles in each draw, often by occupation. An EOI alone is not an invitation." },
              { title: "Apply for nomination", desc: "After an LAA, submit a full nomination application with documents proving your connection, work and eligibility." },
              { title: "Apply to IRCC for PR", desc: "Use the nomination to apply for permanent residence, a base paper application, or Express Entry if your Skilled Worker Overseas nomination is enhanced." },
            ]}
          />
          <Callout type="info" title="Two things that catch MPNP applicants out">
            <strong>The Expression of Interest is free, but selection is by ranking, not first-come.</strong> And the{" "}
            <strong>Manitoba connection is mandatory for everyone</strong>: without one, most profiles will not score high
            enough for a Letter of Advice to Apply.
          </Callout>

          <h2>The Manitoba connection: why it matters most</h2>
          <p>
            No other major Canadian PNP weights local ties as heavily as the MPNP. A <strong>connection to Manitoba</strong>
            {" "}is worth up to <strong>500 of the 1,000 EOI points</strong>, which makes it effectively mandatory for every
            applicant. That connection can be established through current work in the province, past full-time study at a
            Manitoba institution, close family or friends living in Manitoba, or selection through a provincial strategic
            recruitment initiative or exploratory visit.
          </p>
          <p>
            Because the connection carries so much weight, it is usually the deciding factor in whether you receive a Letter
            of Advice to Apply. Building and properly documenting that connection is one of the first things we work on when
            we assess an MPNP profile, a weak or undocumented tie is a common reason strong candidates stall in the pool.
          </p>

          <h2>MPNP streams in 2026</h2>
          <p>
            The table below summarises the MPNP&apos;s four main streams and links to our detailed guide for each. The
            skilled-worker routes are the most-used; the International Education Stream is reserved for Manitoba graduates;
            and the Business Investor Stream is a work-permit-first entrepreneur route.
          </p>
          <DataTable
            headers={["Stream", "Who it's for", "Guide"]}
            rows={[
              [
                "Skilled Worker in Manitoba",
                "Workers already employed in Manitoba with a permanent job offer (base; ~6 months with employer)",
                <a key="swm" href="/pnp/manitoba/skilled-worker-in-manitoba">Skilled Worker in Manitoba →</a>,
              ],
              [
                "Skilled Worker Overseas",
                "Overseas candidates with a strong Manitoba connection or via strategic recruitment (base + enhanced EE option)",
                <a key="swo" href="/pnp/manitoba/skilled-worker-overseas">Skilled Worker Overseas →</a>,
              ],
              [
                "International Education Stream",
                "Graduates of designated Manitoba institutions (Career Employment, Graduate Internship, Student Entrepreneur)",
                <a key="ies" href="/pnp/manitoba/international-education-stream">International Education Stream →</a>,
              ],
              [
                "Business Investor Stream",
                "Entrepreneurs and farm investors (work-permit-first; net-worth & investment thresholds apply)",
                <a key="bis" href="/pnp/manitoba/business-investor-stream">Business Investor Stream →</a>,
              ],
            ]}
            caption="The four main MPNP streams (immigratemanitoba.com, 2026). Eligibility does not guarantee a Letter of Advice to Apply."
          />
          <Callout type="brand" title="One caution on stream names">
            Some third-party sites use labels like &quot;Human Capital&quot; or &quot;Employer Direct&quot; for MPNP
            routes, these are <strong>not official Manitoba stream names</strong>. We work only from the streams Manitoba
            actually publishes, so your application matches the province&apos;s own criteria.
          </Callout>

          <h2>Base vs enhanced: where the MPNP sits</h2>
          <p>
            This distinction changes your timeline more than any other. Most MPNP streams issue a <strong>base</strong>
            {" "}nomination, meaning that once nominated you submit a <em>separate paper application directly to IRCC</em> for
            permanent residence. This route earns no CRS points and is generally slower. The{" "}
            <a href="/pnp/manitoba/skilled-worker-overseas">Skilled Worker Overseas</a> stream, however, includes an{" "}
            <strong>enhanced</strong>, <a href="/express-entry">Express Entry</a>-aligned pathway: if you already hold an
            Express Entry profile, the nomination adds <strong>600 CRS points</strong> to your{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> score, well above recent federal cut-offs, though IRCC still issues
            the Invitation to Apply at the next draw. If your Manitoba work was gained on a permit, that same Canadian
            experience may also help you qualify for the{" "}
            <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> inside Express Entry.
          </p>
          <Callout type="brand" title="Where the 600 points land">
            Only an enhanced Skilled Worker Overseas nomination feeds Express Entry&apos;s +600 boost. Want to see your
            starting federal score first? Try our <a href="/tools/crs-calculator">free CRS calculator</a>.
          </Callout>

          <h2>MPNP eligibility</h2>
          <p>
            <strong>MPNP eligibility</strong> differs by stream, but a few principles run through all of them. Every
            applicant needs a genuine Manitoba connection. The Skilled Worker in Manitoba stream generally expects you to be
            <strong> already working in the province</strong> on a valid permit with a permanent, full-time job offer from
            your employer, often after about six months on the job. Skilled Worker Overseas candidates qualify on the
            strength of their Manitoba connection or through strategic recruitment, with language, education and experience
            scored in the EOI.
          </p>
          <p>
            The <a href="/pnp/manitoba/international-education-stream">International Education Stream</a> is open only to
            graduates of <strong>designated Manitoba post-secondary institutions</strong>, its Graduate Internship Pathway even
            waives the job-offer requirement by using a Mitacs research internship. Many international graduates first complete
            a <a href="/study-permit">study permit</a> in Manitoba and work on a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> before nominating. The{" "}
            <a href="/pnp/manitoba/business-investor-stream">Business Investor Stream</a> instead tests net worth, investment
            and a viable business plan, and is <a href="/work-permits">work-permit</a>-first. Because the published criteria
            are detailed and change regularly, the safest step is a profile review against the current immigratemanitoba.com
            program guide.
          </p>

          <h2>How to apply for the MPNP</h2>
          <p>
            <strong>How to apply</strong> for the MPNP follows the EOI sequence for skilled streams: confirm you meet a
            stream&apos;s requirements and have a documented Manitoba connection, submit a free <strong>MPNP Expression of
            Interest</strong>, and wait to see whether your ranking earns a Letter of Advice to Apply. If invited, you file a
            complete nomination application with supporting documents within the deadline. Once nominated, you apply to
            <strong> IRCC</strong> for permanent residence, on paper for a base nomination, or through Express Entry if your
            Skilled Worker Overseas nomination is enhanced.
          </p>
          <p>
            On cost, submitting an EOI is <strong>free</strong>; a provincial application fee applies once you are invited,
            and <a href="/pnp/manitoba/business-investor-stream">Business Investor Stream</a> candidates face far higher
            net-worth and investment requirements. All provincial amounts are separate from the IRCC permanent-residence fees
            you pay federally, and fees change, so confirm current figures on immigratemanitoba.com before you apply. Our{" "}
            <a href="/fees">fees page</a> explains how our professional fee sits alongside those government charges.
          </p>

          <h2>How long does the MPNP take?</h2>
          <p>
            <strong>How long the MPNP takes</strong> depends on the stage and stream. Waiting for a Letter of Advice to Apply
            hinges on your EOI ranking and which occupations Manitoba draws. After you submit a complete nomination
            application, provincial processing typically runs several months. Once nominated, a base nomination&apos;s paper
            application to IRCC generally takes longer than an enhanced Express Entry application. Adding it up, most
            applicants should plan for the better part of a year, sometimes more, from EOI to permanent residence.
          </p>

          <h2>How Wild Mountain helps with the MPNP</h2>
          <p>
            Wild Mountain Immigration assesses your profile against Manitoba&apos;s current priorities, builds and documents
            the all-important Manitoba connection, models your <a href="/pnp/manitoba/skilled-worker-overseas">Expression of
            Interest</a> ranking, and steers you toward the stream, <a href="/pnp/manitoba/skilled-worker-in-manitoba">Skilled
            Worker in Manitoba</a>, <a href="/pnp/manitoba/international-education-stream">International Education</a> or{" "}
            <a href="/pnp/manitoba/business-investor-stream">Business Investor</a>, with the strongest realistic chance. Our
            team works under a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497) to
            prepare an Expression of Interest and nomination application that stands up to scrutiny, and we represent you with
            the province and with IRCC. We are a Canmore, Alberta firm that acts for clients across Canada and abroad entirely
            online, so where you live now is no barrier to a Manitoba application.
          </p>
          <Steps
            steps={[
              { title: "Assess and position", desc: "We review your Manitoba connection, language, education and experience, confirm whether your route is base or enhanced, and identify the stream where you rank strongest." },
              { title: "Build the EOI and connection", desc: "We document your provincial ties, model your Expression of Interest score out of 1,000, and prepare the profile that gives you the best shot at a Letter of Advice to Apply." },
              { title: "Nominate and apply for PR", desc: "After a Letter of Advice to Apply we file a complete nomination application, then represent you with IRCC, on paper for a base nomination or through Express Entry for an enhanced one." },
            ]}
          />
          <p>
            Whichever stream fits, our role on your <strong>MPNP</strong> is the same: an honest read on your odds, a
            complete file, and steady representation from <a href="/pnp/manitoba">Expression of Interest</a> through to
            permanent residence. See our <a href="/fees">fees</a> for how our professional fee works alongside the
            provincial and IRCC charges, and start on the <a href="/contact">contact</a> page when you are ready for an
            assessment.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore the MPNP streams</h2>
          <p className="mt-3 text-ink-soft">Four Manitoba streams, one points-ranked Expression of Interest. Find the route that fits your connection and profile.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Skilled Worker in Manitoba" desc="For people already working in Manitoba on a permit with a permanent, full-time job offer." href="/pnp/manitoba/skilled-worker-in-manitoba" />
            <FeatureCard icon={Globe2} title="Skilled Worker Overseas" desc="For candidates abroad with a strong Manitoba connection, with a base and an enhanced (+600 CRS) option." href="/pnp/manitoba/skilled-worker-overseas" />
            <FeatureCard icon={GraduationCap} title="International Education Stream" desc="For graduates of designated Manitoba institutions, including a no-job-offer Mitacs internship pathway." href="/pnp/manitoba/international-education-stream" />
            <FeatureCard icon={Building2} title="Business Investor Stream" desc="A work-permit-first route for entrepreneurs and farm investors who will run a Manitoba business." href="/pnp/manitoba/business-investor-stream" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The federal system an enhanced MPNP nomination feeds, adding 600 CRS points to your profile." href="/express-entry" />
            <FeatureCard icon={Map} title="All Provincial Nominee Programs" desc="Compare Manitoba with Alberta, Ontario and every other province before you commit." href="/pnp" />
          </FeatureGrid>
        </div>
        <div className="mt-10 text-center">
          <p className="text-ink-soft">
            Weighing provinces? See our <a href="/alberta-immigration" className="text-brand underline">Alberta program</a>,
            the <a href="/pnp/ontario" className="text-brand underline">Ontario OINP</a>, or start with our overview of how to{" "}
            <a href="/immigrate" className="text-brand underline">immigrate to Canada</a>.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Find out if the MPNP fits your profile"
        sub="Get started with a licensed RCIC for an honest read on your Manitoba connection, your Expression of Interest ranking and the strongest route to permanent residence in Manitoba."
      />
    </>
  );
}
