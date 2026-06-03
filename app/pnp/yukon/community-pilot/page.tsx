import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/yukon/community-pilot";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Yukon Community Pilot (YCP), 2026 Status",
  titleAbsolute: "Yukon Community Pilot (YCP): 2026 Status",
  description:
    "Yukon Community Pilot (YCP): what the rural Yukon PR route was, who it helped and its current closed status. RCIC-led guide to your real Yukon options.",
  path: PATH,
  keywords: [
    "Yukon Community Pilot",
    "YCP",
    "Yukon community immigration pilot",
    "rural Yukon PR",
    "Yukon Nominee Program",
  ],
});

const faqs = [
  {
    q: "Is the Yukon Community Pilot still open in 2026?",
    a: "No. The Yukon Community Pilot (the Yukon Community Program) concluded on June 30, 2025 and is not accepting new applicants. It now exists only as an information page. Some older guides still describe it as a live route, so be cautious, always confirm the current position on yukon.ca before relying on any source. If this pilot was your plan, we can assess whether the Skilled Worker, Critical Impact Worker or Yukon Express Entry stream is a realistic alternative for you.",
  },
  {
    q: "What was the Yukon Community Pilot?",
    a: "The Yukon Community Pilot was a community-driven element of the territory's immigration system designed to help smaller and rural Yukon communities, outside the main Whitehorse labour market, attract and retain the workers they needed. It worked alongside the employer-driven Yukon Nominee Program, with participating communities helping to identify genuine local labour shortages and connect newcomers with employers who would support them toward permanent residence.",
  },
  {
    q: "Why did the Yukon Community Pilot close?",
    a: "Pilots are, by design, time-limited tests. The Yukon Community Pilot concluded on June 30, 2025, in line with a broader tightening of provincial and territorial immigration after IRCC cut allocations nationwide for 2026. Yukon's 2026 nomination allocation is about 282 spaces (source: yukon.ca, 2026), one of the smallest in Canada, so the territory has concentrated its limited capacity on its core Yukon Nominee Program streams. Always verify the current status on yukon.ca.",
  },
  {
    q: "Can I still get permanent residence in a rural Yukon community?",
    a: "Often, yes, just not through this pilot. The core Yukon Nominee Program streams remain open, and roles in rural Yukon communities are actually one of the territory's stated 2026 priorities. If a Yukon employer in a smaller community offers you a genuine, full-time job, the Skilled Worker, Critical Impact Worker or Yukon Express Entry stream may be the right route. We can confirm honestly which one fits before you invest time.",
  },
  {
    q: "What is the difference between the Yukon Community Pilot and the Yukon Nominee Program?",
    a: "The Yukon Nominee Program (YNP) is the territory's main, ongoing economic immigration route, an employer-driven program with Skilled Worker, Critical Impact Worker, Express Entry and Business Nominee streams. The Yukon Community Pilot was a separate, time-limited community-focused initiative aimed at smaller communities. With the pilot now closed, the YNP streams are where prospective applicants should focus.",
  },
  {
    q: "I was relying on the Community Pilot, what should I do now?",
    a: "Don't lose momentum. Because the route is closed, the practical question is which live Yukon Nominee Program stream now fits your profile. If you have (or can secure) a genuine full-time job offer from an eligible Yukon employer, the Skilled Worker or Critical Impact Worker stream may work, and a Yukon Express Entry nomination adds 600 CRS points to a federal profile. Get started with a licensed RCIC for an honest assessment of your realistic options.",
  },
  {
    q: "Where can I check the official status of the Yukon Community Pilot?",
    a: "Always rely on the Government of Yukon's own website, yukon.ca, for the current and authoritative status of any Yukon immigration route, including this pilot and the live Yukon Nominee Program streams. Program rules, dates and allocations change frequently, and Wild Mountain Immigration is not affiliated with or endorsed by the Government of Yukon or IRCC, we are an independent, CICC-regulated practice.",
  },
];

export default function YukonCommunityPilotPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Yukon Community Pilot (YCP), Status & 2026 Guide",
            description:
              "Yukon Community Pilot (YCP): what the rural Yukon PR route was, who it helped and its current closed status. RCIC-led guide to your real Yukon options.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Yukon Nominee Program & rural Yukon immigration support",
            description:
              "Yukon Community Pilot (YCP): what the rural Yukon PR route was, who it helped and its current closed status. RCIC-led guide to your real Yukon options.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Yukon (YNP), Community Pilot"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Yukon (YNP)", path: "/pnp/yukon" },
          { name: "Community Pilot", path: PATH },
        ]}
        title={<>Yukon Community Pilot <span className="text-brand">(YCP)</span></>}
        lede={
          <p>
            The <strong>Yukon Community Pilot</strong> was a community-driven route that helped smaller and rural Yukon
            communities attract and retain the workers they needed, but it concluded on June 30, 2025 and is no longer
            accepting applicants. This guide explains what it was and the live routes that replace it.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/pnp/yukon", label: "See the live Yukon Nominee Program" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">The pilot is closed, what now?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                The Community Pilot ended June 30, 2025. If rural Yukon was your plan, get an honest read on the live YNP
                streams from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Yukon Nominee Program (YNP)", href: "/pnp/yukon", note: "The territory's live streams" },
                { label: "Yukon Skilled Worker", href: "/pnp/yukon/skilled-worker", note: "TEER 0–3 with a Yukon job offer" },
                { label: "Yukon Express Entry", href: "/pnp/yukon/express-entry", note: "Enhanced, +600 CRS" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province & territory" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Yukon Community Pilot (YCP) was a community-driven route that helped smaller, rural Yukon communities attract and retain workers. It concluded on June 30, 2025 and is no longer accepting applicants, so this page is informational only. The core Yukon Nominee Program streams, including Skilled Worker, Critical Impact Worker and Yukon Express Entry, remain open and may now fit candidates who were considering the pilot."
            items={[
              <>The <strong>Yukon Community Pilot (YCP)</strong> was a community-driven route helping smaller, rural Yukon communities attract and retain workers.</>,
              <>It <strong>concluded on June 30, 2025</strong> and is <strong>no longer accepting applicants</strong>. It now exists only as an information page.</>,
              <>This page is <strong>informational</strong>; always confirm the current status on <strong>yukon.ca</strong> before relying on any source.</>,
              <>The core <strong>Yukon Nominee Program</strong> streams remain open, and <strong>rural Yukon roles are a stated 2026 priority</strong>.</>,
              <>If the pilot was your plan, the <strong>Skilled Worker</strong>, <strong>Critical Impact Worker</strong> or <strong>Yukon Express Entry</strong> stream may now fit.</>,
            ]}
          />

          <Callout type="info" title="This route is closed, read this as an information page">
            The <strong>Yukon Community Pilot (Yukon Community Program) concluded on June 30, 2025</strong> and is not
            accepting new applicants. We keep this guide live only to explain what the pilot was and to point you toward
            the routes that are still open. For the current, authoritative status of any Yukon immigration route, always
            check <strong>yukon.ca</strong>.
          </Callout>

          <h2>What was the Yukon Community Pilot?</h2>
          <p>
            The <strong>Yukon Community Pilot</strong>, sometimes searched as the <strong>YCP</strong> or the{" "}
            <strong>Yukon community immigration pilot</strong>, and formally the Yukon Community Program, was a
            community-driven element of the territory&apos;s immigration system.</p>
          <p>Its purpose was practical: to help
            smaller and rural Yukon communities, outside the main Whitehorse labour market, attract and retain the
            workers they genuinely needed. Like other community pilots across Canada, it recognised that rural employers
            often struggle to compete for talent, and gave participating communities a more direct role in connecting
            newcomers to local jobs that could lead to <strong>rural Yukon PR</strong>.
          </p>
          <p>
            The pilot sat alongside the employer-driven <a href="/pnp/yukon">Yukon Nominee Program</a> rather than
            replacing it. Yukon&apos;s 2026 nomination allocation is about <strong>282</strong> spaces, one of the
            smallest in Canada after IRCC cut provincial and territorial allocations nationwide (source: yukon.ca,
            2026). With so little capacity, the territory has concentrated on its core streams, and the Community Pilot
            concluded on <strong>June 30, 2025</strong>. Figures and program rules change frequently, so always verify
            the current position on yukon.ca before acting.
          </p>

          <h2>Is the Yukon Community Pilot still open?</h2>
          <p>
            No. The <strong>Yukon Community Pilot concluded on June 30, 2025</strong> and is not accepting new
            applicants. It now exists only as an information page. This matters because some older third-party guides and
            forums still present the discontinued pilot as a live route, which can lead prospective applicants to waste
            time chasing a pathway that no longer exists. If you have read elsewhere that the pilot is open, treat that
            source with caution and confirm the status directly on yukon.ca.
          </p>
          <Callout type="warning" title="Don't be misled by out-of-date guides">
            Several older websites still describe the <strong>Yukon Community Pilot</strong> as though you can apply
            today. You cannot. If you were counting on this route, the productive next step is to assess which live{" "}
            <strong>Yukon Nominee Program</strong> stream now fits your profile. <a href="/contact">Get started</a> and
            we will give you an honest read.
          </Callout>

          <h2>How did the Yukon Community Pilot work?</h2>
          <p>
            While the pilot was active, it followed the logic common to Canada&apos;s community-driven immigration
            initiatives. Participating <strong>communities</strong> helped identify genuine, local labour shortages that
            were hard to fill from within the territory. A local <strong>employer</strong> would then offer a newcomer a
            genuine, full-time role tied to that need.</p>
          <p>The candidate&apos;s application moved forward with community and
            employer support, and, like the rest of the Yukon Nominee Program, a nomination was a stepping stone to
            applying to <strong>IRCC</strong> for permanent residence, not permanent residence itself. The community
            layer was the distinguishing feature: it gave smaller centres a more direct say in attracting and{" "}
            <em>retaining</em> the people they recruited.
          </p>

          <h2>Who was the Yukon Community Pilot for?</h2>
          <p>
            The pilot was aimed at workers willing to live and work in smaller Yukon communities, such as Dawson City or
            Watson Lake, rather than only in Whitehorse, and at the rural Yukon employers who needed them. In practice the
            strongest candidates had a genuine job offer from a participating community employer and the intention to
            settle there for the long term.</p>
          <p>The &ldquo;retain&rdquo; half of &ldquo;attract and retain&rdquo; was
            central. With the pilot now closed, that same profile, a rural Yukon job offer plus a real commitment to the
            community, remains valuable, because <strong>roles in rural communities are one of Yukon&apos;s stated 2026
            priorities</strong>{" "}
            under the live nominee program.
          </p>

          <h2>What are the live alternatives to the Yukon Community Pilot?</h2>
          <p>
            Because the pilot is closed, the realistic question is which open <strong>Yukon Nominee Program</strong>{" "}
            stream now fits. The table below summarises the live, employer-driven streams that most former Community
            Pilot candidates should consider, particularly if their job offer is in a smaller Yukon community.
          </p>
          <DataTable
            headers={["Route", "Status", "Who it's for"]}
            rows={[
              ["Yukon Community Pilot (YCP)", "Closed (Jun 30, 2025)", "Community-based hires in smaller Yukon communities, no longer accepting applicants"],
              [<a href="/pnp/yukon/skilled-worker">Yukon Skilled Worker</a>, "Open", "TEER 0–3 workers with a Yukon job offer and ~1 year of relevant experience (base)"],
              [<a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a>, "Open", "TEER 4–5 (lower-skilled) roles with a Yukon job offer; CLB 4 language (base)"],
              [<a href="/pnp/yukon/express-entry">Yukon Express Entry</a>, "Open", "Candidates in the federal Express Entry pool with a Yukon job offer (enhanced, +600 CRS)"],
            ]}
            caption="Yukon Community Pilot vs the live Yukon Nominee Program streams (yukon.ca, 2026). The pilot is closed; eligibility for an open stream does not guarantee a nomination. Figures change."
          />
          <p>
            Rural roles fit naturally here: Yukon&apos;s 2026 priorities include roles in rural communities, candidates
            with at least a year of recent Yukon work or residence, health-care workers, Yukon University graduates and
            French-speaking (Francophone) applicants. So a job offer from a smaller community can still be a strength, just under a different stream. Not sure where your federal score stands for the enhanced route? Try our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> before you choose a path.
          </p>

          <h2>How to confirm the current status</h2>
          <p>
            With a closed pilot, accuracy matters more than ever. Before acting on anything you read about the{" "}
            <strong>Yukon Community Pilot</strong>, here or elsewhere, confirm the live position on the Government of
            Yukon&apos;s own website, <strong>yukon.ca</strong>, which is the authoritative source for every Yukon
            immigration route.</p>
          <p>Program statuses, allocations and stream rules change regularly. Wild Mountain
            Immigration is an independent, <abbr title="College of Immigration and Citizenship Consultants">CICC</abbr>
            -regulated practice and is not affiliated with, or endorsed by, the Government of Yukon or IRCC; we cannot
            guarantee any outcome, and we will always tell you honestly whether a route is realistic for you.
          </p>

          <h2>How Wild Mountain Immigration helps after the pilot&apos;s closure</h2>
          <p>
            If the <strong>Yukon Community Pilot</strong> was your intended route, the most useful thing we can do is
            re-map your options to what is actually open. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team assesses your
            profile against the wider <a href="/pnp/yukon">Yukon Nominee Program</a> priorities, confirms whether the{" "}
            <a href="/pnp/yukon/skilled-worker">Skilled Worker</a>,{" "}
            <a href="/pnp/yukon/critical-impact-worker">Critical Impact Worker</a> or{" "}
            <a href="/pnp/yukon/express-entry">Yukon Express Entry</a> stream gives you the strongest realistic chance,
            and makes sure your employer&apos;s offer of employment and your documents are ready before a short EOI
            window opens.</p>
          <p>As a closest alternative to the Yukon Community Pilot for rural and small-centre hires, we also
            look at the <a href="/rural-northern-immigration-pilot">Rural and Northern Immigration Pilot</a> and other{" "}
            <a href="/pnp">provincial nominee programs</a>.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/fees">File Review</a> gives your own
            application an expert check before you submit, and you can <a href="/contact">contact our team</a> first. With
            the <strong>Yukon Community Pilot</strong> now closed, that quick second opinion makes sure you build on a
            stream that is genuinely open rather than a discontinued route.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="The Community Pilot closed, let's find your real Yukon route"
        sub="Get started with a licensed RCIC for an honest read on the live Yukon Nominee Program streams and the strongest path to permanent residence in Yukon."
      />
    </>
  );
}
