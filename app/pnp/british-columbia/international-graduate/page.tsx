import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/british-columbia/international-graduate";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "BC PNP International Graduate Stream (2026 Update)",
  titleAbsolute: "BC PNP International Graduate Stream 2026",
  description:
    "BC PNP International Graduate: how the graduate and International Post-Graduate streams worked, the 2026 closures, and current routes to PR. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "BC PNP International Graduate",
    "BC graduate PR",
    "International Post-Graduate",
    "study to PR BC",
    "BC PNP graduate stream",
  ],
});

const faqs = [
  {
    q: "Is the BC PNP International Graduate stream still open in 2026?",
    a: "No, both graduate routes are closed to new registrations. The International Post-Graduate stream closed in January 2025 and the International Graduate stream closed in November 2025, as British Columbia narrowed selection around its reduced 2026 allocation. This is an information page; for the current status of every stream, always check welcomebc.ca before relying on any plan that depends on a graduate route.",
  },
  {
    q: "What was the difference between the International Graduate and International Post-Graduate streams?",
    a: "The International Graduate stream was open to graduates of an eligible Canadian institution and required an indeterminate, full-time job offer from a BC employer. The International Post-Graduate stream was narrower: it was for people who completed a master's or doctoral degree in the natural, applied or health sciences at an eligible BC institution, and historically did not require a job offer. Both fell under BC's Skills Immigration division.",
  },
  {
    q: "Do I need a job offer for the BC graduate routes?",
    a: "When it was open, the International Graduate stream required an indeterminate, full-time BC job offer in a skilled occupation. The International Post-Graduate stream historically did not require a job offer, which made it attractive to recent science master's and PhD graduates. With both streams now closed, a BC job offer typically matters because the Skilled Worker stream, the main open route for graduates, generally requires one.",
  },
  {
    q: "I just graduated in BC, how can I get permanent residence now?",
    a: "Recent graduates of a BC institution may still qualify through the Skilled Worker stream if they hold an eligible, indeterminate BC job offer and meet the language and experience requirements. Federal Express Entry (including the Canadian Experience Class) is another route once you have qualifying Canadian work experience on a post-graduation work permit. We can assess which open pathway, if any, fits your profile.",
  },
  {
    q: "Did BC reduce its nomination allocation for 2026?",
    a: "Yes. After federal cuts to provincial nominee allocations, British Columbia's 2026 nomination space fell to roughly 5,254, well below prior years. With fewer nominations available, BC concentrated selection on its highest-priority occupations and paused or closed several streams, the International Graduate and International Post-Graduate routes among them. Meeting old eligibility criteria no longer means a place exists.",
  },
  {
    q: "Does a study permit guarantee a path to permanent residence in BC?",
    a: "No. Studying in BC can build a strong PR profile, Canadian education and post-graduation work experience both help, but a study permit is not a guarantee of permanent residence. The streams that once linked graduation directly to a nomination have closed, and any future route will have its own criteria. We map the realistic options against the current rules.",
  },
  {
    q: "Will the BC PNP International Graduate stream reopen?",
    a: "British Columbia has not committed to reopening either graduate stream, and its 2026 selection focus is on priority Care, Build and Innovate occupations rather than a standalone graduate route. Program design changes frequently, so the only reliable source for current and future intakes is welcomebc.ca. We monitor BC's updates and will reassess your options if the policy shifts.",
  },
];

export default function BcInternationalGraduatePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "BC PNP International Graduate Stream, 2026 Status & Changes",
            description:
              "BC PNP International Graduate: how the graduate and International Post-Graduate streams worked, the 2026 closures, and current routes to PR. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-24",
          }),
          serviceLd({
            name: "BC graduate immigration guidance",
            description:
              "BC PNP International Graduate: how the graduate and International Post-Graduate streams worked, the 2026 closures, and current routes to PR. RCIC-reviewed.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="British Columbia (BC PNP), International Graduate"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "British Columbia (BC PNP)", path: "/pnp/british-columbia" },
          { name: "International Graduate", path: PATH },
        ]}
        title={<>BC PNP <span className="text-brand">International Graduate</span> stream</>}
        lede={
          <p>
            The <strong>BC PNP International Graduate</strong> stream is closed to new registrations. It once turned a BC
            credential into a provincial nomination for permanent residence. This RCIC-reviewed page explains how the
            graduate and International Post-Graduate routes worked, what changed in 2026, and the open pathways that remain.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <GraduationCap className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Graduated in BC? Find your route.</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The graduate streams have closed, but other PR routes may fit. Get an honest assessment from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "How the whole program works in 2026" },
                { label: "BC PNP Skilled Worker", href: "/pnp/british-columbia/skilled-worker", note: "The main open route for graduates" },
                { label: "Study Permit", href: "/study-permit", note: "Study in Canada and build a PR pathway" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The BC PNP International Graduate stream was British Columbia's route to permanent residence for graduates of eligible Canadian institutions. It led to a provincial nomination, but required an indeterminate, full-time BC job offer. This is now an information page only: the stream closed to new registrations in November 2025, and the related International Post-Graduate stream closed in January 2025. Recent graduates may still pursue PR through the BC PNP Skilled Worker stream or federal Express Entry, so confirm current rules on welcomebc.ca."
            items={[
              <>The <strong>BC PNP International Graduate</strong> stream is an <strong>information page</strong>, it closed to new registrations in <strong>November 2025</strong>.</>,
              <>The related <strong>International Post-Graduate</strong> stream (master&apos;s / PhD in the sciences, historically no job offer) closed earlier, in <strong>January 2025</strong>.</>,
              <>The International Graduate stream needed an <strong>indeterminate, full-time BC job offer</strong>; the Post-Graduate stream did not.</>,
              <>BC&apos;s 2026 allocation was cut to roughly <strong>5,254 nominations</strong>, concentrating selection on priority occupations.</>,
              <>Recent graduates may still reach PR through the <strong>Skilled Worker stream</strong> or federal Express Entry, verify current rules on welcomebc.ca.</>,
            ]}
          />

          <h2>What was the BC PNP International Graduate stream?</h2>
          <p>
            The <strong>BC PNP International Graduate</strong> stream was part of British Columbia&apos;s Skills Immigration
            division, the route that let recent graduates of eligible Canadian institutions seek a provincial nomination for
            permanent residence. It sat alongside a second, narrower route, the <strong>International Post-Graduate</strong>{" "}
            stream, and together they were BC&apos;s study-to-PR pathways.</p>
          <p>Both have since been closed: according to
            welcomebc.ca, the International Post-Graduate stream closed to new registrations in <strong>January 2025</strong>{" "}
            and the International Graduate stream in <strong>November 2025</strong>, as the province narrowed selection around
            its reduced 2026 allocation. This page is now an information resource rather than a live application route.
          </p>
          <Callout type="warning" title="Current status: both graduate streams are closed">
            British Columbia <strong>reduced its 2024–26 nomination allocation</strong> after federal cuts and, in response,
            paused or changed several intakes, including the International Graduate and International Post-Graduate streams.
            The figures and dates here are current to May 2026, but program design changes frequently. Always confirm the
            live status of any stream on <strong>welcomebc.ca</strong> before making plans that depend on it.
          </Callout>

          <h2>International Graduate vs International Post-Graduate: what was the difference?</h2>
          <p>
            The two routes targeted different graduates. The <strong>International Graduate</strong> stream was the broader
            of the two and required a BC job offer, while the <strong>International Post-Graduate</strong> stream was reserved
            for higher-degree science graduates of BC institutions and historically did not require one. The table below
            summarises how each route worked while it was open.
          </p>
          <DataTable
            headers={["Feature", "International Graduate", "International Post-Graduate"]}
            rows={[
              ["Who it was for", "Graduates of an eligible Canadian institution", "Master's or doctoral graduates of an eligible BC institution"],
              ["Field of study", "Any eligible program", "Natural, applied or health sciences"],
              ["BC job offer", "Required, indeterminate, full-time, skilled", "Historically not required"],
              ["Selection", "SIRS points (Skills Immigration)", "SIRS points (Skills Immigration)"],
              ["Enhanced (EEBC) option", "Available if Express Entry-eligible", "Available if Express Entry-eligible"],
              ["Status (2026)", "Closed, November 2025", "Closed, January 2025"],
            ]}
            caption="BC PNP International Graduate vs International Post-Graduate, as the streams operated before closure (welcomebc.ca, May 2026). Both are now closed to new registrations."
          />
          <Callout type="info" title="Why the Post-Graduate route stood out">
            The International Post-Graduate stream was unusual because it did not require a job offer, a master&apos;s or PhD
            in the natural, applied or health sciences from an eligible BC institution could be enough to register. That made
            it a popular study-to-PR route for science graduates, which is one reason its January 2025 closure was keenly felt.
          </Callout>

          <h2>What were the eligibility requirements?</h2>
          <p>
            While the streams were open, <strong>BC graduate PR</strong> eligibility rested on your credential, your status
            in Canada and, for the International Graduate stream, a qualifying BC job offer. The core requirements below
            reflect how the routes worked before they closed; they no longer lead to a nomination, but they explain why some
            graduates were eligible and others were not.
          </p>
          <DataTable
            headers={["Requirement", "What the graduate streams asked for"]}
            rows={[
              ["Credential", "A completed degree, diploma or certificate from an eligible institution (BC institution required for the Post-Graduate route)"],
              ["Recency", "You generally had to register within a set window of completing your program"],
              ["Job offer", "International Graduate: an indeterminate, full-time, skilled BC job offer. Post-Graduate: not required"],
              ["Field of study", "Post-Graduate: a master's or doctoral degree in the natural, applied or health sciences"],
              ["Status", "Valid temporary status in Canada (or eligibility to apply from abroad in limited cases)"],
              ["SIRS registration", "A Skills Immigration registration scored against other candidates, eligibility never guaranteed an invitation"],
            ]}
            caption="BC graduate stream eligibility as it stood before closure (welcomebc.ca). For historical reference only, neither route accepts new registrations."
          />

          <h2>How did you apply when the streams were open?</h2>
          <p>
            <strong>Study to PR in BC</strong> followed the standard Skills Immigration sequence. Although the steps below no
            longer lead anywhere for graduate applicants, they show how the process worked, and they mirror how the open
            Skilled Worker stream still operates today.
          </p>
          <Steps
            steps={[
              { title: "Confirm eligibility", desc: "Check your credential, recency window and, for the International Graduate route, that you held a qualifying indeterminate BC job offer." },
              { title: "Create a SIRS registration", desc: "Submit a free Skills Immigration Registration System profile, scored out of 200 points against other candidates in the pool." },
              { title: "Receive an invitation", desc: "If your score met a draw's cut-off, BC issued an invitation to apply. Eligibility alone never guaranteed an invitation." },
              { title: "Apply for nomination", desc: "Submit a full application with your supporting documents and the provincial application fee within the deadline." },
              { title: "Apply to IRCC for PR", desc: "Once nominated, apply to IRCC for permanent residence, through Express Entry if enhanced (EEBC), or on paper if base." },
            ]}
          />

          <h2>What changed in 2026, and why did the streams close?</h2>
          <p>
            The closures trace back to one number. After IRCC cut provincial nominee allocations nationwide, British
            Columbia&apos;s 2026 nomination space fell to roughly <strong>5,254</strong>, sharply lower than in prior years
            (source: welcomebc.ca / IRCC, May 2026). With far fewer nominations to give, BC concentrated selection on its
            highest-priority occupations under a &ldquo;Care, Build and Innovate&rdquo; focus and stepped back from broader
            routes. The graduate streams were among those paused and then closed: the International Post-Graduate stream in
            January 2025, and the International Graduate stream in November 2025.
          </p>
          <Callout type="warning" title="Eligibility is not the same as an invitation">
            Even when these streams were open, meeting the criteria only placed you in a points-ranked pool, BC invited the
            highest-scoring candidates each draw. With the 2026 allocation capped at about 5,254 and graduate routes now
            closed, treat any older guide promising a guaranteed graduate pathway with caution, and verify the current
            position on welcomebc.ca.
          </Callout>

          <h2>If you graduated in BC, what routes are open now?</h2>
          <p>
            The closure of the graduate streams does not shut recent graduates out of permanent residence. It simply changes
            the route. The main open option is the{" "}
            <a href="/pnp/british-columbia/skilled-worker">BC PNP Skilled Worker stream</a>, which generally requires an
            indeterminate, full-time BC job offer in a skilled occupation. Many graduates build toward this on a
            post-graduation work permit, gaining the Canadian experience that also strengthens a federal Express Entry
            profile. If a graduate route ever returns, BC will announce it on welcomebc.ca.
          </p>
          <DataTable
            headers={["Route", "Best for", "Status (2026)"]}
            rows={[
              ["BC PNP Skilled Worker", "Graduates with an eligible, indeterminate BC job offer", "Open"],
              ["Express Entry (Canadian Experience Class)", "Graduates with qualifying Canadian work experience on a PGWP", "Open (federal)"],
              ["BC PNP International Graduate", "Graduates of eligible institutions (with a BC job offer)", "Closed (Nov 2025)"],
              ["BC PNP International Post-Graduate", "Science master's / PhD graduates of BC institutions", "Closed (Jan 2025)"],
            ]}
            caption="Routes for BC graduates and the status of the graduate streams (welcomebc.ca, May 2026). Figures and intakes change, verify before applying."
          />
          <p>
            Not sure where your federal score stands? Our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> gives you a quick read on Express Entry before you commit
            to a plan. A <a href="/study-permit">study permit</a> can still anchor a strong long-term PR strategy, even
            though the streams that once linked graduation directly to a nomination have closed.
          </p>

          <h2>How Wild Mountain helps BC graduates</h2>
          <p>
            We assess your credential, your status and your work history against BC&apos;s current priorities and steer you
            toward the route with the strongest realistic chance, usually the Skilled Worker stream or federal Express Entry
            now that the graduate streams have closed. As a CICC-regulated practice led by a licensed RCIC, our team
            builds an application that stands up to scrutiny and represents you with the province and with IRCC.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            application an expert check before you submit. Now that the <strong>BC PNP International Graduate</strong>{" "}
            stream closure has removed the direct study-permit-to-PR shortcut, we map your study permit to PR options
            against the routes that remain open. Figures here are current to May 2026 and change with each BC policy
            update, so we always confirm the live welcomebc.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Graduated in BC? Let's find your real route to PR."
        sub="Get started with a licensed RCIC for an honest read on the open pathways now that the graduate streams have closed."
      />
    </>
  );
}
