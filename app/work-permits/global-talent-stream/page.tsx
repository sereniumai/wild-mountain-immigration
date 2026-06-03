import type { Metadata } from "next";
import { Rocket, Briefcase, FileCheck2, Cpu, Map, Building2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/global-talent-stream";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Global Talent Stream: Two-Week Processing",
  titleAbsolute: "Global Talent Stream 2026: Two-Week Processing",
  description:
    "The Global Talent Stream is a faster LMIA route with two-week work-permit processing for tech hires. Covers Category A, B and the occupations list.",
  path: PATH,
  keywords: [
    "global talent stream",
    "global talent stream category a",
    "global talent stream category b",
    "global talent occupations list",
    "two week work permit canada",
    "tech work permit canada",
  ],
});

const faqs = [
  {
    q: "What is the Global Talent Stream?",
    a: "The Global Talent Stream (GTS) is a faster stream of the Temporary Foreign Worker Program, run by Employment and Social Development Canada, that helps innovative employers hire highly skilled talent quickly, often in technology. It is not LMIA-exempt: an employer still obtains a Labour Market Impact Assessment, but the GTS LMIA is processed on an expedited service standard, and the matching work permit can be processed in around two weeks under the Global Skills Strategy. In exchange, the employer commits to a Labour Market Benefits Plan setting out lasting benefits for Canadians.",
  },
  {
    q: "How fast is Global Talent Stream processing?",
    a: "Two timelines matter. First, the GTS LMIA itself is processed by Service Canada on an expedited service standard, often quoted as around ten business days for complete applications. Second, eligible workers benefit from two-week work-permit processing under the Global Skills Strategy, a service standard IRCC aims to meet most of the time for complete applications. Together these make the GTS one of the fastest skilled-worker routes into Canada. Service standards are targets, not guarantees, and they can change, so we confirm current timelines on canada.ca.",
  },
  {
    q: "What is the difference between Category A and Category B?",
    a: "Category A is for employers referred to the Global Talent Stream by a designated referral partner, who are hiring unique and specialised talent to help the business scale and grow. It does not depend on a fixed occupation list. Category B is for employers hiring in an in-demand occupation that appears on the Global Talent Occupations List, and no referral is required. In short, Category A is referral-driven and talent-specific, while Category B is occupation-driven and list-based. We help an employer identify which category fits the role and the business.",
  },
  {
    q: "What is the Global Talent Occupations List?",
    a: "The Global Talent Occupations List is the list of in-demand, highly skilled occupations, largely in technology, that qualify an employer to hire through Category B of the Global Talent Stream. It includes roles such as software engineers and designers, computer and information systems managers, data scientists, and a range of other digital and technical occupations. If a requested occupation is on the list, the application is treated as Category B. The list is maintained by the government and updated periodically, so we confirm the current contents on canada.ca for each role.",
  },
  {
    q: "Is the Global Talent Stream LMIA-exempt?",
    a: "No, and this is a common misunderstanding. The Global Talent Stream sits inside the Temporary Foreign Worker Program, which means the employer does obtain an LMIA. What makes it special is speed: the GTS LMIA is processed on a faster service standard than ordinary LMIA streams, and it pairs with two-week work-permit processing. So it is best described as a faster LMIA, not an LMIA-exempt route. If you are looking for genuinely LMIA-exempt options, those sit under the International Mobility Program instead.",
  },
  {
    q: "What is the Labour Market Benefits Plan?",
    a: "The Labour Market Benefits Plan is a commitment the employer makes when using the Global Talent Stream, setting out how the hire will create lasting, positive effects for the Canadian labour market. For Category A, a mandatory benefit is job creation for Canadians and permanent residents; for Category B, it is investment in skills and training. Employers also commit to complementary benefits and report on progress. The plan is part of what justifies the faster processing, and getting it right is central to a smooth GTS application.",
  },
  {
    q: "How does the Global Talent Stream connect to Alberta tech?",
    a: "Alberta has worked hard to grow its technology sector, and the Global Talent Stream is a useful tool for Alberta employers who need to bring in skilled tech talent quickly. The province also runs dedicated technology pathways within the Alberta Advantage Immigration Program (AAIP) aimed at workers in priority tech occupations. A worker can arrive fast on a GTS work permit, build Canadian experience, and then pursue permanent residence through an AAIP tech stream or Express Entry. We help align the fast temporary entry with the longer-term Alberta PR strategy.",
  },
  {
    q: "Can the Global Talent Stream lead to permanent residence?",
    a: "Yes, indirectly. The GTS work permit is temporary, but a valid LMIA-supported job offer can add points under the Express Entry Comprehensive Ranking System, and the skilled Canadian experience you build can qualify you for the Canadian Experience Class. Several Provincial Nominee Program streams, including Alberta tech pathways, are built around skilled workers with a Canadian job offer or experience. We plan the work-permit stage with the eventual PR route in mind so the fast temporary entry builds toward permanent residence.",
  },
];

export default function GlobalTalentStreamPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Global Talent Stream: The Complete 2026 Guide",
            description:
              "The Global Talent Stream is a faster LMIA route with two-week work-permit processing for eligible tech hires. Covers Category A, B and the occupation list.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "Global Talent Stream work permit support",
            description:
              "The Global Talent Stream is a faster LMIA route with two-week work-permit processing for eligible tech hires. Covers Category A, B and the occupation list.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Global Talent Stream", path: PATH },
        ]}
        title={<>Global Talent <span className="text-brand">Stream</span></>}
        lede={
          <p>
            The <strong>Global Talent Stream</strong> is a faster LMIA route within the Temporary Foreign Worker
            Program, built for innovative employers hiring highly skilled talent, often in tech. Eligible workers can
            have their work permit processed in around two weeks. This guide explains Category A and B, the Global
            Talent Occupations List, and how it ties to Alberta&apos;s tech pathways.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/work-permits/lmia", label: "How LMIAs work" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Rocket className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Hiring or hired through GTS?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Once a GTS LMIA is in place, our team prepares the worker&apos;s two-week work-permit application,
                entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "All Canadian work permit routes" },
                { label: "LMIA work permits", href: "/work-permits/lmia", note: "How the LMIA process works" },
                { label: "Alberta immigration", href: "/alberta-immigration", note: "AAIP tech pathways for PR" },
                { label: "Express Entry", href: "/express-entry", note: "Where a job offer adds CRS points" },
                { label: "Canadian Experience Class", href: "/express-entry/canadian-experience-class", note: "PR from Canadian work experience" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox>
            The <strong>Global Talent Stream</strong> is a faster stream of the Temporary Foreign Worker Program for
            innovative employers hiring highly skilled talent, often in tech. The employer still obtains an{" "}
            <a href="/work-permits/lmia">LMIA</a>, but it is expedited, and eligible workers get around two-week
            work-permit processing. It uses Category A (referral-based) and Category B (occupations-list based).
          </AnswerBox>

          <KeyTakeaways
            summary="The Global Talent Stream is a faster LMIA route within the Temporary Foreign Worker Program, built for innovative employers hiring highly skilled tech talent. The employer still obtains an LMIA, but it is expedited and pairs with around two-week work-permit processing under the Global Skills Strategy."
            items={[
              <>The <strong>Global Talent Stream</strong> is a <strong>faster LMIA route</strong>, not LMIA-exempt, within the Temporary Foreign Worker Program.</>,
              <>Eligible workers can get around <strong>two-week work-permit processing</strong> under the Global Skills Strategy.</>,
              <><strong>Category A</strong> is referral-based for unique talent; <strong>Category B</strong> covers roles on the Global Talent Occupations List.</>,
              <>Employers commit to a <strong>Labour Market Benefits Plan</strong> setting out lasting benefits for Canadians.</>,
              <>It pairs with <a href="/alberta-immigration">Alberta</a> tech pathways and can lead to PR via the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>.</>,
            ]}
          />

          <h2>What is the Global Talent Stream?</h2>
          <p>
            The <strong>Global Talent Stream (GTS)</strong> is a stream of the{" "}
            <a href="/work-permits/temporary-foreign-worker-program">Temporary Foreign Worker Program</a>, run by
            Employment and Social Development Canada (ESDC), created to help innovative Canadian employers hire highly
            skilled foreign talent quickly, particularly in technology and specialised fields. Crucially, it is{" "}
            <strong>not LMIA-exempt</strong>. The employer still obtains a{" "}
            <a href="/work-permits/lmia">Labour Market Impact Assessment</a>, but the GTS LMIA is processed on a faster
            service standard than ordinary streams, and it pairs with expedited work-permit processing for the worker.
            In short, it is best understood as a <strong>faster LMIA</strong>, not a way around one.
          </p>
          <Callout type="brand" title="A faster LMIA, not an LMIA exemption">
            People often assume the Global Talent Stream skips the LMIA. It does not. The employer obtains a real
            LMIA. The speed comes from an expedited service standard plus two-week work-permit processing. Genuinely{" "}
            <strong>LMIA-exempt</strong> options, such as <a href="/work-permits/intra-company-transfer">intra-company
            transfers</a>, sit under the International Mobility Program instead.
          </Callout>

          <h2>How fast is Global Talent Stream processing?</h2>
          <p>
            Speed is the point of the GTS, and it works on two fronts. The <strong>GTS LMIA</strong> is processed by
            Service Canada on an expedited service standard, the <strong>ten business day LMIA</strong> target often
            quoted for complete applications. Then a <strong>Global Skills Strategy work permit</strong> lets eligible
            workers have their <strong>work permit processed in around two weeks</strong>, a service standard IRCC aims to
            meet most of the time for complete applications. Compared with the weeks of advertising and standard
            processing that ordinary LMIA streams involve, the GTS is one of the fastest tech work permit routes into
            Canada for skilled workers.
          </p>
          <Callout type="info" title="Service standards are targets, not guarantees">
            The ten-business-day LMIA standard and the two-week work-permit standard are processing targets that the
            government aims to meet for complete applications, not promises. They can change, so confirm the current
            service standards on canada.ca, and remember that an incomplete application falls outside the fast lane.
          </Callout>

          <h2>Category A and Category B</h2>
          <p>
            The Global Talent Stream has two categories, and the right one depends on how the employer is identified and
            what they are hiring for.
          </p>
          <DataTable
            headers={["Feature", "Category A", "Category B"]}
            rows={[
              ["Basis", "Referral by a designated referral partner", "In-demand occupation on the Global Talent Occupations List"],
              ["Referral needed?", "Yes", "No"],
              ["Best for", "Unique, specialised talent to help a business scale and grow", "Hiring into a listed high-skill occupation, largely tech"],
              ["Labour Market Benefits Plan focus", "Mandatory benefit: job creation for Canadians and PRs", "Mandatory benefit: investment in skills and training"],
            ]}
            caption="Category A is referral-driven and talent-specific; Category B is occupation-driven and list-based. Confirm current requirements on canada.ca."
          />

          <h2>The Global Talent Occupations List</h2>
          <p>
            <strong>Category B</strong> turns on the <strong>Global Talent Occupations List</strong>, the government&apos;s
            list of in-demand, highly skilled occupations, largely in technology, that qualify an employer to use the
            stream without a referral. The list typically features roles such as:
          </p>
          <ul>
            <li>Software engineers, designers and developers.</li>
            <li>Computer and information systems managers.</li>
            <li>Database analysts, data scientists and information-systems analysts.</li>
            <li>Web designers and developers, and digital media designers.</li>
            <li>Other specialised technical and engineering occupations the list defines.</li>
          </ul>
          <p>
            If a requested occupation is on the list, the application proceeds as Category B and must meet Category B
            requirements, including a wage that meets the <strong>prevailing wage</strong> for the role and region. For a
            software engineer hire on a Canadian work permit, for example, the offered salary has to match that prevailing
            wage benchmark. The list is maintained by the government and updated from time to time, so we confirm the current
            contents on canada.ca for each role rather than relying on an older version.
          </p>

          <h2>The Labour Market Benefits Plan</h2>
          <p>
            In exchange for faster processing, every GTS employer commits to a <strong>Labour Market Benefits Plan
            (LMBP)</strong>. This sets out how the hire will create lasting, positive effects for the Canadian labour
            market. For <strong>Category A</strong>, a mandatory benefit is creating jobs for Canadians and permanent
            residents; for <strong>Category B</strong>, it is investing in the skills and training of Canadians and
            permanent residents.</p>
          <p>Employers also choose complementary benefits, such as creating co-op placements,
            increasing revenue, or improving company processes, and they report on progress over time. A well-built LMBP
            is central to a smooth GTS application.
          </p>

          <h2>Who does what: employer and worker</h2>
          <p>
            Like any LMIA, the GTS LMIA is the <strong>employer&apos;s</strong> responsibility. The Canadian employer
            applies to Service Canada, prepares the Labour Market Benefits Plan and pays the processing fee. A worker
            cannot apply for their own GTS LMIA. Once a positive LMIA is in place, the <strong>worker</strong> applies
            for the work permit, and that is where our team helps, preparing a complete application that takes full
            advantage of the two-week service standard so the speed is not lost to avoidable errors.
          </p>

          <h2>The Global Talent Stream and Alberta tech</h2>
          <p>
            The GTS is a natural fit for Canada&apos;s growing technology hubs, and{" "}
            <a href="/alberta-immigration">Alberta</a> is a clear example. Alberta has invested in its tech sector and
            runs dedicated technology pathways within the Alberta Advantage Immigration Program (AAIP) aimed at workers
            in priority tech occupations. A worker can arrive quickly on a GTS work permit, build Canadian experience,
            and then pursue permanent residence through an AAIP tech stream or <a href="/express-entry">Express
            Entry</a>. As a Canmore-based firm, Alberta is the province we know best, and we are well placed to align
            fast temporary entry with a longer-term Alberta PR plan.
          </p>

          <h2>How the GTS connects to permanent residence</h2>
          <p>
            The GTS work permit is temporary, but it frequently becomes a stepping stone to permanent residence. A valid
            LMIA-supported job offer can add points under the{" "}
            <a href="/express-entry/comprehensive-ranking-system">Comprehensive Ranking System</a> in{" "}
            <a href="/express-entry">Express Entry</a>, and the skilled Canadian experience you build can qualify you for
            the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a>. Several{" "}
            <a href="/pnp">Provincial Nominee Program</a> streams, including Alberta tech pathways, are built around
            skilled workers with a Canadian job offer or experience. We plan the work-permit stage with the eventual PR
            route in mind.
          </p>

          <h2>How Wild Mountain Immigration helps with Global Talent Stream hires</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team supports the work-permit side of a Global Talent
            Stream hire. We help
            employers understand the choice between Category A and B and how the occupations list and Labour Market
            Benefits Plan apply, and we prepare the worker&apos;s work-permit application to make the most of the
            two-week service standard. We represent clients entirely online, by video call and secure document sharing.
            We are not affiliated with any government; the GTS LMIA itself remains the
            employer&apos;s responsibility.
          </p>
          <Steps
            steps={[
              { title: "Confirm the route", desc: "We help confirm whether Category A or Category B fits, check the occupation against the Global Talent Occupations List, and flag the Labour Market Benefits Plan obligations." },
              { title: "Prepare the work permit", desc: "Once a positive GTS LMIA is in place, we build the worker's work-permit application to qualify for two-week processing, with clear written fees." },
              { title: "Apply and plan for PR", desc: "We submit and represent the worker with IRCC, then map how the role feeds into Express Entry or an Alberta AAIP tech pathway toward permanent residence." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related work and PR routes</h2>
          <p className="mt-3 text-ink-soft">Explore the permits and pathways that connect to the Global Talent Stream.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Briefcase} title="Work permits" desc="The full picture of Canadian work permits, both LMIA-based and LMIA-exempt." href="/work-permits" />
            <FeatureCard icon={FileCheck2} title="LMIA work permits" desc="How the LMIA process works, including the faster Global Talent Stream." href="/work-permits/lmia" />
            <FeatureCard icon={Cpu} title="Alberta immigration" desc="Alberta's AAIP tech pathways toward permanent residence for skilled workers." href="/alberta-immigration" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="Where a valid LMIA job offer can add CRS points toward permanent residence." href="/express-entry" />
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="A genuinely LMIA-exempt route for moving staff to a Canadian office." href="/work-permits/intra-company-transfer" />
            <FeatureCard icon={Map} title="Provincial Nominee Programs" desc="Many streams are built around skilled workers with Canadian experience or a job offer." href="/pnp" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Moving fast on a Global Talent Stream hire?"
        sub="Tell us about the role and our licensed team will prepare the two-week work-permit application, with honest advice and clear fees."
      />
    </>
  );
}
