import type { Metadata } from "next";
import { Clock4, Rocket, Map, FileCheck2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/bridging-open-work-permit";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Bridging Open Work Permit 2026, BOWP Guide",
  titleAbsolute: "Bridging Open Work Permit (BOWP) 2026",
  description:
    "Bridging open work permit 2026: BOWP eligibility, who can apply, and how to keep working when your permit is expiring with PR pending. Talk to an RCIC.",
  path: PATH,
  keywords: [
    "bridging open work permit 2026",
    "BOWP eligibility",
    "who can apply for a bridging open work permit",
    "work permit about to expire PR pending",
    "BOWP requirements",
  ],
});

const faqs = [
  {
    q: "Who can apply for a BOWP?",
    a: "You can apply for a bridging open work permit if you are inside Canada, hold a valid or maintained work permit that is expiring soon (generally within four months), and have an eligible permanent-residence application that has reached at least the completeness/acknowledgement-of-receipt stage. Qualifying PR programs include Express Entry (FSW, FST and the Canadian Experience Class), most Provincial Nominee Program enhanced streams, the Quebec Skilled Worker program, the Agri-Food route where still applicable, and certain caregiver pathways. We confirm your specific stream qualifies before you apply.",
  },
  {
    q: "When should I apply for a bridging open work permit?",
    a: "Apply once your PR application has reached the acknowledgement-of-receipt (AOR) or completeness-check stage and while your current work permit is still valid, ideally well before it expires. IRCC generally lets you apply when your permit has roughly four months or less remaining. Do not let your permit lapse: if you apply before it expires you keep working under maintained status, but if it expires first you lose authorization to work.",
  },
  {
    q: "How long is a bridging open work permit valid?",
    a: "Since early 2025, BOWPs are generally issued for up to 24 months. The exact length depends on your situation and IRCC's discretion. If your PR application is still pending when the BOWP nears expiry, you may be able to apply for a new one, provided you still meet the eligibility requirements at that time.",
  },
  {
    q: "Can I work for any employer on a BOWP?",
    a: "Yes, a bridging open work permit is an open work permit, so you can work for almost any employer in Canada and change jobs freely, with narrow exceptions (for example employers on the ineligible list or those offering certain adult-entertainment services). It is not tied to the job or employer connected to your PR application.",
  },
  {
    q: "Do I need a job offer or LMIA for a BOWP?",
    a: "No. A bridging open work permit does not require a Labour Market Impact Assessment (LMIA) or a job offer, because it is an open permit under the International Mobility Program. Your eligibility is based on your pending PR application and your current immigration status, not on a specific employer.",
  },
  {
    q: "Can I leave Canada while I hold a BOWP?",
    a: "You must be physically in Canada to apply for a bridging open work permit. Once it is issued you can travel, but re-entry depends on holding a valid travel document (such as a valid TRV or eTA) and being admissible. Leaving Canada while your application is still in process, or before the BOWP is issued, can create complications, so we plan travel carefully around your timeline.",
  },
  {
    q: "What happens if my work permit expires before I apply?",
    a: "If you apply for the BOWP before your current work permit expires, you benefit from maintained status (formerly implied status) and can keep working under the same conditions until IRCC decides. If your permit expires before you apply, you lose your status and your right to work, and you may need to apply to restore status, a more difficult and time-sensitive process. This is why applying early matters.",
  },
  {
    q: "Does a BOWP guarantee my permanent residence will be approved?",
    a: "No. A bridging open work permit only lets you keep working while IRCC processes your permanent-residence application, it has no bearing on whether that PR application is approved. The two are assessed separately. We never guarantee an immigration outcome; what we do is make sure your status stays valid and your file is as strong as it can be.",
  },
];

export default function BridgingOpenWorkPermitPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Bridging Open Work Permit (BOWP) 2026, Complete RCIC Guide",
            description:
              "Bridging open work permit 2026: BOWP eligibility, who can apply, and how to keep working when your permit is expiring with PR pending. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Bridging open work permit application support",
            description:
              "Bridging open work permit 2026: BOWP eligibility, who can apply, and how to keep working when your permit is expiring with PR pending. RCIC-reviewed.",
            path: PATH,
            serviceType: "Bridging open work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work Permits"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Bridging Open Work Permit", path: PATH },
        ]}
        title={<>Bridging Open Work Permit: <span className="text-brand">keep working while you wait for PR</span></>}
        lede={
          <p>
            A <strong>bridging open work permit</strong> lets certain permanent-residence applicants keep working in
            Canada when their current work permit is about to expire, while IRCC finishes processing their PR
            application. This 2026 guide covers BOWP eligibility, who can apply, and exactly how to apply in time.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/contact", label: "Get started" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Clock4 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Permit expiring, PR pending?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Timing a BOWP is everything. Get started and we&apos;ll make sure you apply before your status lapses.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canada work permits", href: "/work-permits", note: "The full 2026 overview" },
                { label: "Open work permits", href: "/work-permits/open-work-permit", note: "How open permits work" },
                { label: "Express Entry", href: "/express-entry", note: "The PR route many BOWPs bridge" },
                { label: "Get started", href: "/contact", note: "Get an honest read on your timing" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A bridging open work permit (BOWP) lets you keep working in Canada while IRCC processes your permanent-residence application. So if your work permit is about to expire with PR pending, you do not have to stop working before your PR is confirmed. To qualify, you generally need valid or maintained status (formerly implied status) and a PR application accepted into processing under an eligible program, and you must apply before your current permit ends. Timing is critical, and the qualifying programs can change."
            items={[
              <>A <strong>bridging open work permit 2026</strong> keeps you working while IRCC processes your <strong>permanent-residence</strong> application.</>,
              <><strong>BOWP eligibility</strong> requires being in Canada, holding a valid or maintained work permit, and having an eligible PR application past the completeness/AOR stage.</>,
              <>It is an <strong>open permit</strong>, no LMIA, no job offer, and you can work for almost any employer.</>,
              <>Qualifying PR programs include <strong>Express Entry</strong>, most <strong>PNP</strong> enhanced streams and the Quebec Skilled Worker program.</>,
              <>Apply <strong>before your current permit expires</strong>, generally when it has about four months or less remaining, to stay on maintained status.</>,
            ]}
          />

          <h2>What is a bridging open work permit?</h2>
          <p>
            A bridging open work permit (BOWP) is a temporary open work permit that lets certain permanent-residence
            applicants continue working in Canada while Immigration, Refugees and Citizenship Canada (IRCC) finishes
            processing their PR application. It exists to solve a common timing problem: your work permit is expiring,
            but your permanent residence has not yet been decided.</p>
          <p>Rather than forcing you to stop working, or leave
            Canada, the BOWP &quot;bridges&quot; the gap between your old permit and your PR decision. Work permits like the BOWP
            remain one of the most-used immigration documents in Canada, with IRCC processing hundreds of thousands of
            work permit applications each year (source: canada.ca, 2026).
          </p>
          <p>
            Because it is an <a href="/work-permits/open-work-permit">open work permit</a>, a BOWP is not tied to a
            specific employer, job or location. You can work for almost any employer in Canada and change jobs freely
            while you wait. The catch is in the eligibility and the timing, both of which are stricter than many
            applicants expect, and both of which we walk through below.
          </p>

          <h2>Who is eligible for a bridging open work permit?</h2>
          <p>
            <strong>BOWP eligibility</strong> rests on three things being true at the same time: where you are, the
            status you hold, and how far along your PR application has progressed. In broad terms, you may qualify if you
            are <strong>physically in Canada</strong>, hold a <strong>valid or maintained work permit that is expiring
            soon</strong>, and have an <strong>eligible permanent-residence application that has reached at least the
            completeness check or acknowledgement-of-receipt (AOR) stage</strong>.
          </p>
          <p>
            The table below sets out the core BOWP requirements. Every one must be met, missing a single condition (for
            example, applying after your permit has already expired, or before your PR application is far enough along)
            is the most common reason a BOWP is refused.
          </p>
          <DataTable
            headers={["BOWP requirement", "What it means"]}
            rows={[
              ["You are in Canada", "You must be physically present in Canada to apply for a bridging open work permit."],
              ["Valid or maintained status", "You currently hold a valid work permit, or maintained status from a permit you applied to extend in time."],
              ["Work permit expiring soon", "Your current work permit is expiring, IRCC generally accepts applications when about four months or less remain."],
              ["Eligible PR application in progress", "You have applied for PR under a qualifying program and it has passed the completeness check / AOR stage."],
              ["Authorized to work", "Your existing work permit authorizes you to work (you are not, for example, on a visitor record only)."],
            ]}
            caption="Core bridging open work permit eligibility requirements (source: canada.ca, 2026). Verify the current rules on IRCC before applying."
          />
          <Callout type="warning" title="Timing is the make-or-break factor">
            The single biggest BOWP mistake is applying too late. Apply <strong>before</strong> your current work permit
            expires so you keep working under <strong>maintained status</strong> while IRCC decides. If your permit
            expires first, you lose your right to work and may have to apply to restore status. That process is
            slower, riskier and far more time-sensitive.
          </Callout>

          <h2>Which PR programs qualify for a BOWP?</h2>
          <p>
            Not every permanent-residence route makes you eligible for a bridging open work permit, your PR application
            has to be under a qualifying program <em>and</em> at the right processing stage. The most common qualifying
            routes are the federal Express Entry programs and most enhanced Provincial Nominee Program streams. The table
            below shows the main programs and the stage your application generally needs to have reached.
          </p>
          <DataTable
            headers={["PR program", "Qualifies for BOWP?", "Typical stage required"]}
            rows={[
              ["Express Entry, Canadian Experience Class", "Yes", "Completeness check / AOR after ITA"],
              ["Express Entry, Federal Skilled Worker", "Yes", "Completeness check / AOR after ITA"],
              ["Express Entry, Federal Skilled Trades", "Yes", "Completeness check / AOR after ITA"],
              ["Provincial Nominee Program (enhanced / EE)", "Yes", "AOR on the federal PR application"],
              ["Provincial Nominee Program (base, paper)", "Sometimes", "Positive eligibility assessment (varies)"],
              ["Quebec Skilled Worker", "Yes", "AOR (note: we do not handle Quebec files)"],
              ["Agri-Food / caregiver pathways", "Where still open", "AOR, confirm the route is active"],
            ]}
            caption="PR programs that commonly qualify for a bridging open work permit (source: canada.ca, 2026). Stages and program availability change, verify your specific stream on IRCC."
          />
          <Callout type="info" title="We don't handle Quebec, but the federal BOWP rules are the same">
            Although the Quebec Skilled Worker program can qualify a person for a BOWP, our practice does not take Quebec
            immigration files. If your PR route runs through Express Entry, the <a href="/express-entry">federal</a>{" "}
            system or a Provincial Nominee Program outside Quebec, we can help.
          </Callout>

          <h2>How to apply for a bridging open work permit</h2>
          <p>
            A BOWP is applied for online through your IRCC secure account, from inside Canada. The exact documents depend
            on your situation, but the framework below is consistent. The most important thing is to apply while your
            current work permit is still valid.
          </p>
          <Steps
            steps={[
              { title: "Confirm your PR stage", desc: "Check that your eligible PR application has reached the completeness check or acknowledgement-of-receipt (AOR) stage. Too early, and the BOWP will be refused." },
              { title: "Check your permit's expiry", desc: "Make sure your current work permit is still valid and is expiring soon, generally within about four months, so you fall inside the BOWP window." },
              { title: "Gather your documents", desc: "Passport, current work permit, proof of your PR application stage (AOR or completeness letter), and the completed work permit application forms." },
              { title: "Apply online to IRCC", desc: "Submit the open work permit application from inside Canada through your IRCC account, selecting the bridging open work permit basis, before your permit expires." },
              { title: "Stay on maintained status", desc: "Because you applied before expiry, you can keep working under your existing conditions while IRCC processes the BOWP, this is maintained status." },
              { title: "Receive your BOWP", desc: "On approval, your bridging open work permit is issued (generally for up to 24 months), and you can work for almost any employer while your PR is decided." },
            ]}
          />

          <h2>How long is a BOWP valid?</h2>
          <p>
            Since early 2025, bridging open work permits are generally issued for up to <strong>24 months</strong>. The
            precise length is set at IRCC&apos;s discretion based on your circumstances. The goal is to cover the expected
            processing time of your PR application, so that you can keep working throughout. Processing times and validity
            policies change, so always confirm the current figure on canada.ca before relying on a timeline.
          </p>
          <p>
            If your permanent residence is still pending when your BOWP approaches its expiry date, you may be able to
            renew your bridging open work permit, applying for a <strong>second BOWP</strong>, as long as you still meet
            the eligibility requirements at that time. We track these dates with you so a second application, if needed,
            goes in well before your status would lapse, and right up until IRCC issues your PR confirmation.
          </p>

          <h2>What a BOWP does and does not allow</h2>
          <p>
            A bridging open work permit gives you broad freedom to work, but it has clear limits. Understanding both
            sides prevents costly assumptions, particularly around travel and what the permit means for your actual PR
            decision.
          </p>
          <DataTable
            headers={["A BOWP lets you…", "A BOWP does not…"]}
            rows={[
              ["Work for almost any employer in Canada", "Tie you to a specific job, employer or location"],
              ["Change jobs freely while you wait", "Require an LMIA or a job offer"],
              ["Keep earning income while PR is processed", "Guarantee that your PR application will be approved"],
              ["Stay authorized via maintained status if you applied in time", "Cover you if your old permit already expired before you applied"],
              ["Be renewed if PR is still pending and you remain eligible", "Let you work in restricted occupations (e.g. certain ineligible employers)"],
            ]}
            caption="What a bridging open work permit does and does not allow (source: canada.ca, 2026)."
          />
          <Callout type="brand" title="The BOWP and your PR are decided separately">
            A bridging open work permit only keeps you working. It has <strong>no effect</strong> on whether your
            permanent residence is approved, the two applications are assessed independently. Working under a licensed
            RCIC (CICC #R706497), our team never guarantees an immigration outcome; the BOWP simply protects your ability
            to work in the meantime.
          </Callout>

          <h2>How the BOWP fits your path to permanent residence</h2>
          <p>
            For many clients, the BOWP is a bridge between two stages of the same journey. You may have built Canadian
            work experience on an employer-specific permit or a <a href="/work-permits/pgwp">PGWP</a>, used it to qualify for{" "}
            <a href="/express-entry">Express Entry</a> or a provincial nomination, and now need to keep working while
            IRCC finalises your PR. The bridging open work permit is what holds your income and your status steady
            through that final wait.
          </p>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team plans this sequencing from the start, so that as one
            permit ends, the next status is already lined up, and you never face an avoidable gap right through to your
            PR confirmation from IRCC. We represent clients entirely online, by video call and secure document sharing.
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            bridging open work permit application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">The PR routes a BOWP bridges</h2>
          <p className="mt-3 text-ink-soft">A bridging permit keeps you working while one of these decisions is finalised.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Express Entry" desc="The federal system most BOWP holders are waiting on, including the Canadian Experience Class." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={Map} title="Provincial nominees" desc="Most enhanced PNP streams qualify you for a BOWP once your federal PR application reaches AOR." href="/pnp" />
            <FeatureCard icon={FileCheck2} title="Open work permits" desc="See how the BOWP compares to the other open permits, from the PGWP to spousal permits." href="/work-permits/open-work-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Don't let your work permit lapse while you wait for PR"
        sub="Get started with a licensed RCIC and get an honest read on your bridging open work permit timing and eligibility."
      />
    </>
  );
}
