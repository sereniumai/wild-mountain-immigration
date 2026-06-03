import type { Metadata } from "next";
import { Calculator, Rocket, Briefcase, Cpu, HeartPulse, Wrench } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/alberta-immigration/dedicated-health-care-pathway";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Alberta Dedicated Health Care Pathway 2026",
  titleAbsolute: "Dedicated Health Care Pathway 2026: Alberta AAIP",
  description:
    "The Alberta Dedicated Health Care Pathway: AAIP healthcare eligibility, eligible occupations, language, 2026 draw cut-offs and how to apply. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "alberta dedicated health care pathway",
    "aaip healthcare eligibility",
    "aaip nurses alberta",
    "health care job offer alberta pr",
    "clb 5 healthcare aaip",
  ],
});

const faqs = [
  {
    q: "What is the Alberta Dedicated Health Care Pathway?",
    a: "It is a dedicated stream of the Alberta Advantage Immigration Program (AAIP) for eligible health-care workers who hold an Alberta health-care job offer. It runs primarily through the Alberta Express Entry Stream, so a nomination adds 600 CRS points to your federal Express Entry profile. Alberta holds targeted draws for the pathway and selects health-care candidates from its Worker Expression of Interest (EOI) pool. A non-Express-Entry variant also exists for some candidates.",
  },
  {
    q: "Which occupations qualify for the AAIP Dedicated Health Care Pathway?",
    a: "Eligible occupations span physicians, registered nurses (RNs), licensed/registered practical nurses (LPNs), nurse aides and health-care aides, and a range of allied health professionals such as medical laboratory technologists, pharmacists, paramedics, respiratory therapists and physiotherapists. The exact list reflects Alberta's current health-care priorities and changes over time, so confirm your specific NOC against the live alberta.ca occupation list before relying on it.",
  },
  {
    q: "Do I need an Alberta job offer for the Dedicated Health Care Pathway?",
    a: "Yes. The pathway is employer-driven, so you need a genuine, ongoing offer from an Alberta health-care employer in an eligible occupation. That offer is the anchor of your eligibility. Without a qualifying one, you would need to look at another AAIP route or a federal program. We help you confirm it meets AAIP requirements before you submit.",
  },
  {
    q: "What language score do nurses need for the AAIP?",
    a: "There is no single number that fits every role. Language is scored on your lowest of four abilities, and the practical floor for many health-care roles is around CLB 5, with some regulated nursing occupations effectively needing CLB 7 to satisfy both AAIP and Alberta licensure. Registration with the relevant Alberta regulatory college (for example, the College of Registered Nurses of Alberta) usually sets its own English-language standard, which can be higher. Confirm both the AAIP and the college requirement for your exact occupation.",
  },
  {
    q: "What were the 2026 Dedicated Health Care draw cut-offs?",
    a: "In 2026, observed Dedicated Health Care (Express Entry) rounds have cut off around 57 to 61 on the Alberta Worker EOI, with roughly 60 to 65 invitations per draw. Cut-offs move with every round and the published 2026 allocation for the pathway is approximately 500 nominations. These figures change constantly, so always check the live alberta.ca AAIP processing-information page before relying on any number.",
  },
  {
    q: "Does an AAIP health-care nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence. Through the Alberta Express Entry Stream it adds 600 CRS points, usually enough to clear the next Express Entry cut-off, but you still file a separate application with IRCC, which makes the final decision on medical, security and admissibility grounds. Meeting a draw cut-off also does not guarantee an invitation, selection is competitive. We build the strongest possible case.",
  },
  {
    q: "Do I need to be licensed in Alberta before I apply?",
    a: "It depends on the occupation. Regulated health professionals such as physicians and nurses must ultimately register with the relevant Alberta regulatory college, and your job offer and EOI scoring are stronger when you hold that recognition. Some roles, such as many health-care aide positions, are not provincially regulated in the same way. Licensure is always via the relevant Alberta regulatory college, not the AAIP, so confirm your college's process early.",
  },
  {
    q: "How is the Dedicated Health Care Pathway different from other AAIP routes?",
    a: "It is a targeted pathway within the Alberta Express Entry Stream that runs its own draws for health-care workers, rather than competing in the general pool. Compared with the Alberta Opportunity Stream (a base stream for people already working in Alberta) or the broader Alberta Express Entry Stream, the Dedicated Health Care Pathway is sector-specific and tied to an Alberta health-care job offer. A consultation can confirm which AAIP route is genuinely strongest for you.",
  },
];

export default function DedicatedHealthCarePathwayPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Alberta Dedicated Health Care Pathway 2026, AAIP for Health-Care Workers",
            description:
              "The Alberta Dedicated Health Care Pathway: AAIP healthcare eligibility, eligible occupations, language, 2026 draw cut-offs and how to apply. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Alberta Dedicated Health Care Pathway (AAIP) support",
            description:
              "The Alberta Dedicated Health Care Pathway: AAIP healthcare eligibility, eligible occupations, language, 2026 draw cut-offs and how to apply. RCIC-reviewed.",
            path: PATH,
            serviceType: "Alberta provincial nominee program consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Alberta (AAIP), Health Care"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Alberta (AAIP)", path: "/alberta-immigration" },
          { name: "Dedicated Health Care Pathway", path: PATH },
        ]}
        title={<>The Alberta <span className="text-brand">Dedicated Health Care Pathway</span></>}
        lede={
          <p>
            The <strong>Alberta Dedicated Health Care Pathway</strong> is a dedicated AAIP route, run through the Alberta
            Express Entry Stream, for eligible health-care workers who hold an Alberta health-care job offer. For nurses,
            physicians, health-care aides and allied health professionals, it is one of the most direct paths to Alberta
            permanent residence in 2026.
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
                { label: "Alberta Express Entry Stream", href: "/alberta-immigration/express-entry-stream", note: "The enhanced stream this pathway runs through" },
                { label: "Alberta Opportunity Stream", href: "/alberta-immigration/opportunity-stream", note: "For workers already in Alberta" },
                { label: "AAIP calculator", href: "/tools/aaip-calculator", note: "Score your Worker EOI now" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Alberta Dedicated Health Care Pathway is a sector-specific AAIP route for eligible health-care workers, such as physicians, nurses, health-care aides and allied health roles, who hold an Alberta health-care job offer. It runs mainly through the enhanced Alberta Express Entry Stream, so a provincial nomination adds 600 CRS points toward permanent residence. Language requirements and draw cut-offs vary by role and change over time."
            items={[
              <>The <strong>Alberta Dedicated Health Care Pathway</strong> is a sector-specific AAIP route for eligible health-care workers with an <strong>Alberta health-care job offer</strong>.</>,
              <>It runs mainly through the <strong>Alberta Express Entry Stream</strong>, so a nomination adds <strong>600 CRS points</strong> to your federal profile.</>,
              <>Eligible occupations span <strong>physicians, nurses (RNs/LPNs), health-care aides and allied health</strong> roles.</>,
              <>Language is scored on your lowest ability, many roles need around <strong>CLB 5</strong>, and some regulated nursing roles effectively need <strong>CLB 7</strong>.</>,
              <>2026 draws have cut off near <strong>57–61</strong> on the Worker EOI, against an allocation of roughly <strong>500</strong> nominations.</>,
            ]}
          />

          <h2>What is the Alberta Dedicated Health Care Pathway?</h2>
          <p>
            The <strong>Alberta Dedicated Health Care Pathway</strong> is a dedicated route within the Alberta Advantage
            Immigration Program (AAIP) for eligible health-care workers who already hold a job offer from an Alberta
            health-care employer. It is delivered mainly through the enhanced{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, which means a provincial
            nomination adds <strong>600 CRS points</strong> to your federal Express Entry profile, typically enough to
            clear the cut-off in the next Express Entry draw, though IRCC issues the invitation. Alberta runs targeted draws for the pathway and
            selects health-care candidates from its Worker Expression of Interest (EOI) pool, with a published 2026
            allocation of roughly <strong>500 nominations</strong> for the health-care stream (source: alberta.ca, AAIP,
            May 2026).
          </p>
          <p>
            This is one of Alberta&apos;s clearest priorities. Health care sits at the top of the province&apos;s 2026
            priority-sector list, which is why a dedicated pathway exists at all. If you are a nurse, physician,
            health-care aide or allied health professional with a genuine Alberta offer, the AAIP healthcare eligibility
            rules below are likely the most relevant part of the whole program for you.
          </p>
          <Callout type="brand" title="Nomination is a step, not the finish line">
            An AAIP nomination, even on a dedicated health-care draw, does not grant permanent residence. You still file
            a separate application with IRCC, which decides on medical, security and admissibility grounds. Be wary of any
            source that implies a nomination is guaranteed or equals PR.
          </Callout>

          <h2>Which health-care occupations are eligible?</h2>
          <p>
            Eligible occupations for the Dedicated Health Care Pathway span four broad groups: physicians, the nursing
            family (RNs and LPNs), nurse aides and health-care aides, and allied health professionals. The table below
            gives representative examples in each group, along with the kind of requirement that typically applies. The
            exact occupation list reflects Alberta&apos;s current health-care needs and changes over time, so always
            confirm your specific NOC 2021 code against the live alberta.ca list before relying on it.
          </p>
          <p>
            Two of the most-searched routes are health-care aide PR in Alberta (<strong>NOC 33102</strong>, nurse aides
            and orderlies) and registered nurse immigration to Alberta (<strong>NOC 31301</strong>, registered nurses).
            Both hinge on credential recognition and a genuine offer from an Alberta health-care employer, often a public
            employer such as Alberta Health Services, with pharmacist immigration and other allied health roles following
            the same pattern through their respective regulatory colleges.
          </p>
          <DataTable
            headers={["Occupation group", "Examples", "Typical requirement"]}
            rows={[
              ["Physicians", "Family physicians, general practitioners, specialist physicians", "Registration with the College of Physicians & Surgeons of Alberta; Alberta job offer"],
              ["Nurses (RNs)", "Registered nurses, registered psychiatric nurses, nurse practitioners", "Registration with the College of Registered Nurses of Alberta; higher language (often CLB 7)"],
              ["Nurses (LPNs)", "Licensed / registered practical nurses", "Registration with the College of Licensed Practical Nurses of Alberta; language around CLB 5–7"],
              ["Nurse aides & health-care aides", "Health-care aides, nurse aides, orderlies, patient service associates", "Alberta job offer; CLB 5 commonly applies; many roles not provincially regulated"],
              ["Allied health", "Pharmacists, medical lab technologists, paramedics, respiratory therapists, physiotherapists, occupational therapists", "Registration with the relevant Alberta regulatory college where required; Alberta job offer"],
            ]}
            caption="Representative eligible occupation groups for the AAIP Dedicated Health Care Pathway (alberta.ca, May 2026). The official occupation list changes, verify your NOC before applying."
          />
          <Callout type="warning" title="Licensure is via the relevant Alberta regulatory college">
            For regulated occupations, the AAIP does not grant your right to practise. Registration is handled by the
            relevant Alberta regulatory college, for example, the College of Registered Nurses of Alberta for RNs, or the
            College of Physicians &amp; Surgeons of Alberta for doctors. Start that process early, as it runs in parallel
            with your immigration file and can take time.
          </Callout>

          <h2>AAIP healthcare eligibility: the core requirements</h2>
          <p>
            To meet AAIP healthcare eligibility for the Dedicated Health Care Pathway, you generally need each of the
            following in place. Because the pathway runs through the Alberta Express Entry Stream, you must also satisfy
            that stream&apos;s federal requirements, including an active Express Entry profile with a Comprehensive
            Ranking System (CRS) score of at least <strong>300</strong>.
          </p>
          <ul>
            <li>
              <strong>An Alberta health-care job offer</strong>, a genuine, ongoing offer from an Alberta health-care
              employer in an eligible occupation. This is the anchor of the whole pathway.
            </li>
            <li>
              <strong>Licensure or registration where required</strong>, for regulated roles (physicians, RNs, LPNs and
              many allied health professionals), recognition by the relevant Alberta regulatory college.
            </li>
            <li>
              <strong>Language</strong>, an approved test result meeting the AAIP minimum (generally CLB/NCLC 4 to submit
              an EOI, with most health-care roles needing more), plus any higher standard your regulatory college sets.
            </li>
            <li>
              <strong>A Worker Expression of Interest (EOI)</strong>, submitted to Alberta&apos;s pool and scored out of
              100, with the new <strong>$135 WEOI submission fee</strong> (effective April 7, 2026).
            </li>
            <li>
              <strong>An active Express Entry profile (CRS ≥ 300)</strong>, required because the pathway is delivered
              through the enhanced Alberta Express Entry Stream.
            </li>
          </ul>

          <h2>What language score do health-care workers need?</h2>
          <p>
            Language is scored on your <strong>lowest of four abilities</strong>, reading, writing, listening and
            speaking, so a single weak skill can quietly hold back the whole file. As a practical guide, many health-care
            roles work to around <strong>CLB 5</strong>, while several regulated nursing occupations effectively need{" "}
            <strong>CLB 7</strong> to satisfy both the AAIP and Alberta licensure. The decisive standard is usually set by
            your regulatory college rather than the AAIP itself: the College of Registered Nurses of Alberta, for
            instance, applies its own English-language requirement that can exceed the AAIP minimum. Always confirm both
            the AAIP and the college standard for your exact occupation before booking a test.
          </p>
          <Callout type="info" title="CLB 5 healthcare AAIP, a floor, not a ceiling">
            CLB 5 is a common practical floor for health-care roles in the AAIP, but it is not a guarantee that your
            occupation or college will accept it. Treat CLB 5 as a starting point and verify the specific requirement for
            your role, overshooting your weakest ability by one band is often the single most valuable improvement you
            can make.
          </Callout>

          <h2>Recent 2026 Dedicated Health Care draw cut-offs</h2>
          <p>
            Alberta holds dedicated health-care draws &ldquo;as needed&rdquo; and publishes the minimum Worker EOI score
            for each round. Across 2026, observed Dedicated Health Care (Express Entry) cut-offs have landed around{" "}
            <strong>57 to 61</strong>, with roughly 60 to 65 invitations per draw and a pathway allocation near{" "}
            <strong>500 nominations</strong> for the year. The sample below is illustrative, cut-offs change with every
            round, so check the live alberta.ca AAIP processing-information page before relying on any figure.
          </p>
          <DataTable
            headers={["Date (2026)", "Draw", "Invites", "Min EOI"]}
            rows={[
              ["Jan 26", "Dedicated Health Care (Express Entry)", "63", "61"],
              ["May 13", "Dedicated Health Care (Express Entry)", "61", "57"],
            ]}
            caption="Illustrative 2026 Dedicated Health Care draws (alberta.ca, AAIP processing information, May 2026). Figures change every draw, verify live."
          />
          <p>
            For context, the Dedicated Health Care cut-offs sit in the upper-middle of the AAIP range for 2026: lower than
            the Accelerated Tech Pathway (which has reached the low-60s) but firmly above the lowest non-Express-Entry
            health rounds. Because Alberta&apos;s overall 2026 allocation is capped, competition for these dedicated
            health-care spaces stays meaningful through the year. Our{" "}
            <a href="/tools/aaip-calculator">free AAIP calculator</a> estimates where your Worker EOI score would land.
          </p>

          <h2>How to apply for the Dedicated Health Care Pathway</h2>
          <p>
            The Dedicated Health Care Pathway follows the same overall AAIP and Express Entry sequence, with health-care
            specifics layered in. The steps below show the typical order.
          </p>
          <Steps
            steps={[
              { title: "Secure an Alberta health-care job offer", desc: "Obtain a genuine, ongoing offer from an Alberta health-care employer in an eligible occupation, the anchor of your eligibility." },
              { title: "Start licensure with your Alberta college", desc: "For regulated roles, begin registration with the relevant Alberta regulatory college (such as the College of Registered Nurses of Alberta). It runs in parallel and can take time." },
              { title: "Test language & gather documents", desc: "Take an approved language test (IELTS, CELPIP or TEF/TCF) to meet both the AAIP and your college standard, get an ECA for foreign education, and collect work-experience evidence." },
              { title: "Create your Express Entry profile (CRS ≥ 300)", desc: "Build an active federal Express Entry profile, since the pathway is delivered through the enhanced Alberta Express Entry Stream." },
              { title: "Submit your Worker EOI", desc: "Submit your WEOI to Alberta's pool (with the $135 fee from April 7, 2026), scored out of 100 and valid for one year." },
              { title: "Get invited, nominated & apply to IRCC", desc: "If a health-care draw selects you, accept the invitation, apply to the AAIP ($1,500 fee), gain the 600 CRS points on nomination, and file your separate IRCC PR application." },
            ]}
          />

          <h2>How Wild Mountain helps health-care workers</h2>
          <p>
            Alberta is our home province, we are based in Canmore, in the Bow Valley, and health care is the
            province&apos;s leading immigration priority within the <a href="/alberta-immigration">AAIP</a>. Working under
            a licensed RCIC (CICC #R706497), our team helps you confirm your occupation is eligible, coordinates the
            timing between your Alberta college registration and your immigration file, and builds your Worker EOI to
            capture every point you are entitled to. We catch the small mistakes, the wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr> code, a language score one band short of your
            college&apos;s standard, a job offer that doesn&apos;t quite meet AAIP requirements, that cause avoidable
            refusals.
          </p>
          <p>
            Because the pathway runs through the{" "}
            <a href="/alberta-immigration/express-entry-stream">Alberta Express Entry Stream</a>, we also weigh it against
            the <a href="/alberta-immigration/opportunity-stream">Alberta Opportunity Stream</a>, the sibling{" "}
            <a href="/alberta-immigration/accelerated-tech-pathway">Accelerated Tech Pathway</a>, your federal{" "}
            <a href="/express-entry">Express Entry</a> options and your{" "}
            <a href="/express-entry/comprehensive-ranking-system">CRS score</a>, and other{" "}
            <a href="/pnp">provincial nominee programs</a> within your wider{" "}
            <a href="/immigrate">route to permanent residence</a>. We can also line up the right{" "}
            <a href="/work-permits">work permit</a>, score you with our{" "}
            <a href="/tools/aaip-calculator">AAIP calculator</a> and{" "}
            <a href="/tools/crs-calculator">CRS calculator</a>, and set out our{" "}
            <a href="/fees">fees</a> up front.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Alberta Dedicated Health Care Pathway application an expert check before you submit. Figures on this page are
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
          <p className="mt-3 text-ink-soft">The health-care pathway is one route. We help you find the strongest path to Alberta and Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Alberta (AAIP) overview" desc="Every AAIP stream, Worker EOI scoring and 2026 draw cut-offs in one place." href="/alberta-immigration" />
            <FeatureCard icon={Rocket} title="Alberta Express Entry Stream" desc="The enhanced stream this pathway runs through, adding 600 CRS on nomination." href="/alberta-immigration/express-entry-stream" />
            <FeatureCard icon={Cpu} title="Accelerated Tech Pathway" desc="The sibling enhanced pathway for tech workers with a matching Alberta job offer." href="/alberta-immigration/accelerated-tech-pathway" />
            <FeatureCard icon={Briefcase} title="Alberta Opportunity Stream" desc="The base AAIP route for workers already employed in Alberta on a valid permit." href="/alberta-immigration/opportunity-stream" />
            <FeatureCard icon={HeartPulse} title="Express Entry" desc="The federal pool Alberta selects health-care candidates from, and the CRS it scores." href="/express-entry" />
            <FeatureCard icon={Wrench} title="Provincial Nominee Programs" desc="Compare Alberta with every other province to confirm your strongest route." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to bring your health-care skills to Alberta?"
        sub="Get started with a licensed RCIC in Canmore and get an honest read on your Dedicated Health Care Pathway eligibility and Worker EOI score."
      />
    </>
  );
}
