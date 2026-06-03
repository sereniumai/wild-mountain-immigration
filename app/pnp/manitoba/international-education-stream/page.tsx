import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/manitoba/international-education-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Manitoba International Education Stream 2026",
  titleAbsolute: "MPNP International Education Stream 2026",
  description:
    "Manitoba International Education Stream 2026: three MPNP pathways for Manitoba graduates, Career Employment, Graduate Internship, Entrepreneur. RCIC-led.",
  path: PATH,
  keywords: [
    "Manitoba International Education Stream",
    "MPNP international education",
    "Manitoba graduate PR",
    "Career Employment Pathway",
    "Graduate Internship Pathway",
    "International Student Entrepreneur Pilot",
  ],
});

const faqs = [
  {
    q: "Who qualifies for the Manitoba International Education Stream?",
    a: "The stream is reserved for recent graduates of designated Manitoba post-secondary institutions. You generally need to have completed a qualifying full-time program in Manitoba, hold a valid post-graduation work permit (or be eligible for one), live in the province, and intend to settle in Manitoba. Graduates from institutions outside Manitoba do not use this stream, they would usually apply through the Skilled Worker in Manitoba stream if they hold qualifying Manitoba work and a permanent job offer.",
  },
  {
    q: "What are the three International Education Stream pathways?",
    a: "There are three: the Career Employment Pathway, for graduates with a full-time job offer in an in-demand Manitoba occupation related to their studies; the Graduate Internship Pathway, for master's and doctoral graduates who complete a Mitacs Accelerate or Elevate internship, no job offer is required; and the International Student Entrepreneur Pilot, a small capped route for graduates who own and actively operate a Manitoba business. Each has its own eligibility rules, so the right pathway depends on your degree level, employment and plans.",
  },
  {
    q: "Do I need a job offer for the International Education Stream?",
    a: "It depends on the pathway. The Career Employment Pathway requires a full-time, long-term job offer from a Manitoba employer in an occupation on the in-demand list and connected to your field of study. The Graduate Internship Pathway does not require a job offer at all, it uses a completed Mitacs research internship instead, which is why it is popular with master's and PhD graduates. The Student Entrepreneur Pilot requires you to run your own qualifying Manitoba business rather than hold a job offer.",
  },
  {
    q: "Is the International Education Stream an Express Entry pathway?",
    a: "No. Like most MPNP routes, the International Education Stream is a base nomination. Once Manitoba nominates you, you apply to IRCC for permanent residence through a separate paper application rather than receiving 600 CRS points in Express Entry. If you also hold a valid Express Entry profile, we can discuss whether any other Manitoba route fits better, but the IES itself is not enhanced.",
  },
  {
    q: "What is the Graduate Internship Pathway?",
    a: "The Graduate Internship Pathway is for graduates of master's or doctoral programs at a Manitoba institution who complete a Mitacs Accelerate or Mitacs Elevate research internship. Crucially, it does not require a job offer, the completed internship and your Manitoba graduate credential form the basis of the application. It is one of the few Canadian PR pathways open to recent graduates without an employer offer, which makes it valuable for researchers planning their next step in Manitoba.",
  },
  {
    q: "How long does the International Education Stream take?",
    a: "Timelines depend on the pathway and the federal stage. After you submit a complete nomination application, Manitoba's provincial processing typically runs several months. Because the stream is a base nomination, you then file a separate paper application with IRCC for permanent residence, which generally takes longer than an enhanced Express Entry application. Most graduates should plan for the better part of a year from application to permanent residence, verify current times on immigratemanitoba.com and canada.ca.",
  },
  {
    q: "Does a Manitoba nomination guarantee permanent residence?",
    a: "No. A provincial nomination is Manitoba's endorsement, not permanent residence itself. You still submit a separate application to IRCC, which makes the final decision on medical, security and admissibility grounds. We have no government affiliation, we build the strongest possible case and flag risks before they become refusals. Eligibility for a pathway also does not by itself guarantee a nomination.",
  },
];

export default function ManitobaInternationalEducationStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Manitoba International Education Stream, 2026 RCIC Guide",
            description:
              "Manitoba International Education Stream 2026: three MPNP pathways for Manitoba graduates, Career Employment, Graduate Internship, Entrepreneur. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "MPNP International Education Stream application support",
            description:
              "Manitoba International Education Stream 2026: three MPNP pathways for Manitoba graduates, Career Employment, Graduate Internship, Entrepreneur. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Manitoba (MPNP), International Education Stream"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Manitoba (MPNP)", path: "/pnp/manitoba" },
          { name: "International Education Stream", path: PATH },
        ]}
        title={<>Manitoba <span className="text-brand">International Education Stream</span></>}
        lede={
          <p>
            The <strong>Manitoba International Education Stream</strong> nominates recent graduates of designated
            Manitoba institutions for permanent residence through three pathways. This RCIC-led guide explains the
            Career Employment, Graduate Internship and Student Entrepreneur routes, eligibility and how to apply.
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
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Just graduated in Manitoba?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Find out which International Education Stream pathway fits your degree, work and plans, from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Manitoba (MPNP) overview", href: "/pnp/manitoba", note: "All four MPNP streams explained" },
                { label: "Skilled Worker in Manitoba", href: "/pnp/manitoba/skilled-worker-in-manitoba", note: "For graduates working in MB" },
                { label: "Business Investor Stream", href: "/pnp/manitoba/business-investor-stream", note: "The MPNP entrepreneur route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Manitoba International Education Stream (IES) is the MPNP route reserved for recent graduates of designated Manitoba post-secondary institutions. It suits international students who have completed an eligible program in the province and includes pathways tied to a graduate's field of study, internship or career-focused employment. A nomination through this stream supports a PR application to IRCC."
            items={[
              <>The <strong>Manitoba International Education Stream</strong> is reserved for recent graduates of <strong>designated Manitoba post-secondary institutions</strong>.</>,
              <>It runs three pathways: <strong>Career Employment</strong>, <strong>Graduate Internship</strong> (Mitacs, no job offer) and the <strong>International Student Entrepreneur Pilot</strong>.</>,
              <>The <strong>Graduate Internship Pathway</strong> waives the job-offer requirement for master&apos;s and doctoral graduates who complete a Mitacs internship.</>,
              <>It is a <strong>base</strong> nomination, once nominated you file a separate IRCC paper application, not a +600 CRS Express Entry boost.</>,
              <>Manitoba&apos;s 2026 nomination allocation is roughly <strong>6,239</strong>, and the Student Entrepreneur Pilot is capped at a small number of approvals each year.</>,
            ]}
          />

          <h2>What is the Manitoba International Education Stream?</h2>
          <p>
            The <strong>Manitoba International Education Stream</strong> (IES) is the branch of the Manitoba Provincial
            Nominee Program built specifically for <strong>recent graduates of designated Manitoba institutions</strong>.
            Rather than scoring everyone in one Expression of Interest pool, the IES offers three distinct pathways tuned
            to how a graduate plans to stay in the province, through employment, through a research internship, or by
            running their own business. It is one of the most direct routes from a Manitoba classroom to{" "}
            <strong>Manitoba graduate PR</strong>.
          </p>
          <p>
            Manitoba&apos;s 2026 nomination allocation across the whole MPNP is about <strong>6,239</strong> (source:
            immigratemanitoba.com / IRCC, 2026), and the province has shifted toward targeted, occupation-specific
            selection. Because the IES is reserved for Manitoba-educated graduates, it sits apart from the skilled-worker
            streams. Graduates from institutions in other provinces do not use it. Figures, designated-institution lists
            and pathway rules change frequently, so always verify the current criteria on the official Manitoba source
            before acting.
          </p>
          <Callout type="brand" title="Manitoba graduates only">
            The International Education Stream is open <strong>only to graduates of designated Manitoba post-secondary
            institutions</strong>. If you studied elsewhere in Canada but now work in Manitoba, the{" "}
            <a href="/pnp/manitoba/skilled-worker-in-manitoba">Skilled Worker in Manitoba</a> stream is usually the right
            route instead.
          </Callout>

          <h2>What are the three International Education Stream pathways?</h2>
          <p>
            The heart of the <strong>MPNP international education</strong> offer is its three pathways. Each targets a
            different graduate profile, so the first job is matching your degree level, employment and plans to the right
            one. The table below summarises all three; the detailed eligibility for each lives on immigratemanitoba.com
            and changes periodically.
          </p>
          <DataTable
            headers={["Pathway", "Who it's for", "Job offer needed?"]}
            rows={[
              [
                "Career Employment Pathway",
                "Manitoba graduates with a full-time, long-term Manitoba job offer in an in-demand occupation linked to their studies",
                "Yes, in-demand occupation",
              ],
              [
                "Graduate Internship Pathway",
                "Master's and doctoral graduates of a Manitoba institution who complete a Mitacs Accelerate or Elevate internship",
                "No, uses a Mitacs internship",
              ],
              [
                "International Student Entrepreneur Pilot",
                "Manitoba graduates who own and actively operate a qualifying Manitoba business (small annual cap)",
                "No, you run your own business",
              ],
            ]}
            caption="The three Manitoba International Education Stream pathways (immigratemanitoba.com, 2026). Eligibility does not guarantee a nomination, figures and rules change."
          />
          <Callout type="info" title="The Student Entrepreneur Pilot is tightly capped">
            The International Student Entrepreneur Pilot accepts only a small number of graduates each year and carries
            its own business, ownership and operating requirements. It is a niche route, most graduates fit the Career
            Employment or Graduate Internship pathways. Confirm current intake on the official Manitoba page before
            planning around it.
          </Callout>

          <h2>Who is the Career Employment Pathway for?</h2>
          <p>
            The <strong>Career Employment Pathway</strong> is the most-used IES route. It is designed for graduates of a
            designated Manitoba institution who have secured a <strong>full-time, long-term job offer</strong> from a
            Manitoba employer in an occupation that appears on the province&apos;s in-demand list <em>and</em> is connected
            to their field of study. The in-demand-occupation requirement is central.</p>
          <p>The role must sit on
            Manitoba&apos;s current in-demand list and relate to what you studied, so a marketing degree paired with an
            off-list job will not qualify. You are generally expected to be working in the province on a valid
            post-graduation work permit, living in Manitoba, and intending to settle there. This is the route that
            turns a Manitoba work placement into a clear step from PGWP to permanent residence once the province
            nominates you.
          </p>
          <p>
            Because the pathway ties your offer to an in-demand occupation linked to your studies, the common stumbling
            blocks are a job that does not match your program, an occupation that is not on the current list, or a permit
            issue. We check those alignment points first, getting the occupation and field-of-study match right is often
            the difference between a clean application and a refusal.
          </p>

          <h2>How does the Graduate Internship Pathway work?</h2>
          <p>
            The <strong>Graduate Internship Pathway</strong> is the standout option for researchers. It is open to
            graduates of <strong>master&apos;s or doctoral programs</strong> at a designated Manitoba institution who have
            completed a <strong>Mitacs Accelerate or Mitacs Elevate</strong> research internship. Its defining feature is
            that it needs <strong>no job offer at all</strong>, the completed internship and your Manitoba graduate
            credential carry the application. That makes it one of very few Canadian permanent-residence routes a recent
            graduate can use without an employer offer in hand.
          </p>
          <Callout type="brand" title="No job offer, but a completed Mitacs internship">
            The Graduate Internship Pathway substitutes a finished <strong>Mitacs Accelerate or Elevate</strong> internship
            for an employer job offer. If you are a master&apos;s or PhD graduate planning your internship now, sequencing
            it correctly against your work-permit timeline is worth getting right early.
          </Callout>

          <h2>What is the International Student Entrepreneur Pilot?</h2>
          <p>
            The <strong>International Student Entrepreneur Pilot</strong> is a small, capped route for graduates who want
            to build a business in Manitoba rather than take a job. To qualify you must have graduated from a designated
            Manitoba institution and <strong>own and actively operate a qualifying Manitoba business</strong>, meeting the
            pilot&apos;s ownership, operating and residency conditions. Because the pilot approves only a limited number of
            graduates each year, it is competitive and detail-heavy, a viable business and careful documentation matter
            as much as eligibility on paper.
          </p>

          <h2>What are the International Education Stream eligibility requirements?</h2>
          <p>
            <strong>Eligibility</strong> for the International Education Stream varies by pathway, but a common foundation
            runs through all three. You must have <strong>graduated from a designated Manitoba post-secondary
            institution</strong>, hold or qualify for the appropriate immigration status (typically a valid{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> after your{" "}
            <a href="/study-permit">study permit</a>), be living in Manitoba, and intend to settle in the province.</p>
          <p>Language
            ability is tested by an approved English or French test, and each pathway then layers on its own requirement, a job
            offer, a completed Mitacs internship, or an operating business. For most applicants the journey is the same:
            you study on a study permit, transition to a PGWP, then use one of the three pathways to convert that status
            into permanent residence.
          </p>
          <p>
            The controlling criteria are detailed and change regularly, since designated-institution lists, in-demand
            occupations and pilot caps all move over time. The safest first step is a profile review against the current
            immigratemanitoba.com program guide. As a base stream, the IES leads to a separate IRCC application rather than
            an <a href="/express-entry">Express Entry</a> boost, which also shapes your overall timeline.
          </p>

          <h2>How to apply for the International Education Stream</h2>
          <p>
            <strong>How to apply</strong> for the International Education Stream follows the MPNP&apos;s usual shape, adapted
            to your chosen pathway. You confirm you meet a pathway&apos;s requirements, gather your graduate, status and
            pathway-specific evidence, and submit your nomination application to Manitoba. Once nominated, you apply to{" "}
            <strong>IRCC</strong> for permanent residence, a base paper application, because the IES does not add Express
            Entry points. The steps below show the path from confirming eligibility to a federal decision.
          </p>
          <Steps
            steps={[
              { title: "Confirm your pathway", desc: "Check that you graduated from a designated Manitoba institution, then match your profile to Career Employment, Graduate Internship or the Student Entrepreneur Pilot." },
              { title: "Test language & gather documents", desc: "Take an approved English or French test, and collect your Manitoba credential, work-permit, and pathway evidence, a job offer, a completed Mitacs internship, or business records." },
              { title: "Submit your nomination application", desc: "File your International Education Stream application with Manitoba, including proof you live in and intend to settle in the province." },
              { title: "Receive a Manitoba nomination", desc: "On approval, Manitoba nominates you for permanent residence. A nomination is an endorsement, not permanent residence itself." },
              { title: "Apply to IRCC for permanent residence", desc: "File your separate federal PR paper application with medicals, police checks and proof of funds. IRCC makes the final decision." },
            ]}
          />
          <Callout type="warning" title="Eligibility does not guarantee a nomination">
            Meeting a pathway&apos;s requirements places you in contention, but Manitoba assesses applications against its
            priorities and pathway caps, the Student Entrepreneur Pilot especially. Be wary of any source that implies a
            Manitoba graduate is guaranteed a nomination or permanent residence.
          </Callout>

          <h2>How long does the International Education Stream take?</h2>
          <p>
            <strong>How long the International Education Stream takes</strong> depends on your pathway and the federal
            stage. After you submit a complete nomination application, Manitoba&apos;s provincial processing typically runs
            several months.</p>
          <p>Because the IES is a base nomination, you then file a separate paper application to IRCC, which
            generally takes longer than an enhanced Express Entry application (source: canada.ca, processing times, 2026).
            Adding it up, most graduates should plan for the better part of a year, sometimes more, from application to
            permanent residence, and both provincial and federal timelines move with demand.
          </p>

          <h2>How Wild Mountain Immigration helps with your International Education Stream application</h2>
          <p>
            Wild Mountain Immigration matches your graduate profile to the right IES pathway, confirms your
            designated-institution status, and checks the alignment points that cause refusals, an occupation off the
            in-demand list, a job that does not match your program, a mistimed Mitacs internship, or a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit</a> gap. Working under a licensed{" "}
            <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC #R706497), our team prepares a
            nomination application that stands up to scrutiny and represents you with the province and with IRCC.
          </p>
          <p>
            Start on the <a href="/contact">contact</a> page for an honest read on your Manitoba graduate profile, and see
            our <a href="/fees">fees</a> for how our professional fee works alongside the provincial and IRCC charges. Figures
            here are current to 2026 and change frequently, so we always confirm the live immigratemanitoba.com page before
            advising. For context on the wider program, see the <a href="/pnp/manitoba">Manitoba MPNP</a> overview or the{" "}
            <a href="/pnp/manitoba/skilled-worker-in-manitoba">Skilled Worker in Manitoba</a> stream many graduates use next.
            Handled well, the <strong>Manitoba International Education Stream</strong> is one of the cleanest routes from a
            Manitoba credential to permanent residence.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Which International Education Stream pathway fits you?"
        sub="Get started with a licensed RCIC for an honest read on your Manitoba graduate profile and the strongest pathway, Career Employment, Graduate Internship or Student Entrepreneur, to permanent residence."
      />
    </>
  );
}
