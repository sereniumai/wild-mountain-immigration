import type { Metadata } from "next";
import { Building2, FileCheck2, Globe, Languages, Users, ShieldCheck } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/hiring-foreign-workers";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Hiring Foreign Workers in Canada",
  titleAbsolute: "Hiring Foreign Workers in Canada: Employer Guide",
  description:
    "A guide for Canadian employers hiring foreign workers: LMIA and LMIA-exempt options, the Global Talent Stream, compliance, timelines and how an RCIC helps.",
  path: PATH,
  keywords: [
    "hiring foreign workers canada",
    "how to hire a foreign worker",
    "lmia for employers",
    "employer immigration canada",
    "hire temporary foreign worker",
    "employer guide work permits",
  ],
});

const faqs = [
  {
    q: "How can a Canadian employer hire a foreign worker?",
    a: "There are two broad systems. The Temporary Foreign Worker Program (TFWP) requires a Labour Market Impact Assessment (LMIA), where you show that hiring a foreign worker will not displace Canadians. The International Mobility Program (IMP) covers LMIA-exempt work permits, where a trade agreement, reciprocal benefit or other public policy already justifies the hire. The right route depends on the role, the worker's nationality and whether an exemption applies. We assess both and recommend the fastest compliant path.",
  },
  {
    q: "What is an LMIA and when do I need one?",
    a: "A Labour Market Impact Assessment is a document from Employment and Social Development Canada (ESDC) confirming that hiring a foreign worker is justified because no Canadian or permanent resident is readily available. You generally need one when no LMIA exemption applies. The process usually involves advertising the role, meeting recruitment requirements, paying the processing fee and submitting an application. We manage the advertising, the application and the supporting documents so it is built correctly the first time.",
  },
  {
    q: "Are there ways to hire a foreign worker without an LMIA?",
    a: "Yes. The International Mobility Program offers a range of LMIA-exempt routes: intra-company transfers for staff moving within your company, CUSMA permits for US and Mexican professionals, CETA permits for certain Europeans, the Francophone Mobility route for French-speaking workers outside Quebec, and open work permits some candidates already hold. These can be far faster than an LMIA when the worker qualifies, so the first question we ask is whether an exemption fits before defaulting to the LMIA.",
  },
  {
    q: "How long does it take to hire a foreign worker?",
    a: "It depends heavily on the route. An LMIA-based hire takes longer because of the advertising period and ESDC processing before the worker can even apply for their permit. LMIA-exempt routes are usually quicker, and some, like a CUSMA permit, can sometimes be issued at a port of entry. We give you a realistic timeline for your specific situation up front, and we flag the steps that tend to cause delay so you can plan recruitment around them.",
  },
  {
    q: "What are my compliance obligations as an employer?",
    a: "Employers who hire foreign workers take on real obligations: paying the agreed wage, providing the role and conditions described in the offer, keeping records, and being ready for a possible inspection. LMIA-exempt hires usually still require an offer of employment through the Employer Portal and the employer compliance fee. Non-compliance can lead to penalties or a ban from the programs. We help you meet the requirements and keep clean records so you stay onside.",
  },
  {
    q: "Can hiring a foreign worker help them become a permanent resident?",
    a: "Often, yes. A genuine Canadian job and Canadian work experience strengthen many permanent-residence routes, including Express Entry's Canadian Experience Class and a wide range of Provincial Nominee Program streams built around employer job offers. Supporting a valued worker toward permanent residence is also a strong retention tool. We can plan the work-permit stage with the worker's eventual PR in mind, so the temporary hire builds toward a permanent one.",
  },
  {
    q: "Do you work with employers directly?",
    a: "Yes. Working under a licensed RCIC (CICC #R706497), we advise Canadian employers on the right route, prepare LMIA applications or LMIA-exempt offers of employment, and coordinate with your candidate's work-permit application. Everything is handled online, with clear, fixed-scope fees set out in writing. We are not affiliated with any government; our job is to make your hire compliant, well-documented and as fast as the rules allow.",
  },
];

export default function HiringForeignWorkersPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Hiring Foreign Workers in Canada: An Employer Guide (2026)",
            description:
              "A guide for Canadian employers hiring foreign workers: LMIA and LMIA-exempt options, the Global Talent Stream, compliance, timelines and how an RCIC helps.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-28",
          }),
          serviceLd({
            name: "Employer immigration support: hiring foreign workers",
            description:
              "Support for Canadian employers hiring foreign workers: LMIA applications, LMIA-exempt offers of employment, the Global Talent Stream and compliance.",
            path: PATH,
            serviceType: "Employer immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="For Employers"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Hiring Foreign Workers", path: PATH },
        ]}
        title={<>Hiring <span className="text-brand">foreign workers</span> in Canada</>}
        lede={
          <p>
            A clear guide for Canadian employers on <strong>hiring foreign workers</strong>: when you need an LMIA, the
            LMIA-exempt routes that can move faster, your compliance obligations, and how a licensed RCIC manages the
            process so your hire is correct, compliant and as quick as the rules allow.
          </p>
        }
        updated={UPDATED}
        primaryCta={{ href: "/contact", label: "Talk to us about a hire" }}
        secondaryCta={{ href: "/work-permits", label: "Explore work permits" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Building2 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Hiring from abroad?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us about the role and the candidate. Our team will map the fastest compliant route and handle the
                paperwork, online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Talk to us about a hire</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Temporary Foreign Worker Program", href: "/work-permits/temporary-foreign-worker-program", note: "The LMIA-based system" },
                { label: "LMIA work permits", href: "/work-permits/lmia", note: "The labour-market test, step by step" },
                { label: "Global Talent Stream", href: "/work-permits/global-talent-stream", note: "Fast hiring for in-demand tech roles" },
                { label: "International Mobility Program", href: "/work-permits/international-mobility-program", note: "LMIA-exempt hiring routes" },
                { label: "Francophone Mobility", href: "/work-permits/francophone-mobility", note: "Hire French-speaking workers, no LMIA" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <AnswerBox>
            Canadian employers hire <strong>foreign workers</strong> through two systems: the{" "}
            <a href="/work-permits/temporary-foreign-worker-program">Temporary Foreign Worker Program</a>, which needs
            a <a href="/work-permits/lmia">Labour Market Impact Assessment (LMIA)</a>, and the{" "}
            <a href="/work-permits/international-mobility-program">International Mobility Program</a>, which covers
            LMIA-exempt routes. The best path depends on the role, the candidate and whether an exemption applies.
          </AnswerBox>

          <KeyTakeaways
            summary="Canadian employers can hire foreign workers through two systems. The Temporary Foreign Worker Program (TFWP) requires a Labour Market Impact Assessment (LMIA), proving the hire will not displace Canadians, and includes the faster Global Talent Stream for in-demand roles. The International Mobility Program (IMP) covers LMIA-exempt routes such as intra-company transfers, CUSMA and CETA permits, and Francophone Mobility, which are often quicker when the worker qualifies. Either way, employers take on compliance obligations, usually including an offer of employment and the employer compliance fee. A licensed RCIC assesses the role, recommends the fastest compliant route, and prepares the application."
            items={[
              <>Two systems: the <strong>LMIA-based TFWP</strong> and the <strong>LMIA-exempt IMP</strong>.</>,
              <>An <a href="/work-permits/lmia">LMIA</a> proves no Canadian is readily available; the <a href="/work-permits/global-talent-stream">Global Talent Stream</a> speeds up in-demand roles.</>,
              <>LMIA-exempt routes (ICT, <a href="/work-permits/cusma">CUSMA</a>, <a href="/work-permits/ceta">CETA</a>, <a href="/work-permits/francophone-mobility">Francophone Mobility</a>) can be much faster.</>,
              <>Employers carry <strong>compliance obligations</strong>: wages, conditions, records and possible inspection.</>,
              <>A Canadian job offer can help a valued worker move toward <a href="/express-entry">permanent residence</a>.</>,
            ]}
          />

          <h2>The two ways to hire a foreign worker</h2>
          <p>
            Every Canadian hire of a foreign worker runs through one of two systems. Knowing which one applies is the
            first decision, because it sets the timeline, the cost and the paperwork.
          </p>
          <DataTable
            headers={["System", "What it is", "Best for"]}
            rows={[
              ["Temporary Foreign Worker Program (TFWP)", "Requires an LMIA confirming no Canadian is readily available for the role.", "Roles where no LMIA exemption applies, including many lower-wage and high-wage positions."],
              ["International Mobility Program (IMP)", "LMIA-exempt work permits justified by a trade agreement, reciprocal benefit or public policy.", "Intra-company transfers, treaty professionals, French-speaking hires and other exemptions."],
            ]}
            caption="The two systems for hiring foreign workers in Canada. We confirm which applies before any advertising or application."
          />

          <h2>Hiring with an LMIA</h2>
          <p>
            When no exemption applies, you hire through the{" "}
            <a href="/work-permits/temporary-foreign-worker-program">Temporary Foreign Worker Program</a> with a
            positive <a href="/work-permits/lmia">Labour Market Impact Assessment</a>. In broad terms, you advertise
            the role, meet the recruitment requirements, pay the processing fee and apply to ESDC. Once the LMIA is
            positive, your candidate uses it to apply for their work permit.
          </p>
          <p>
            The LMIA route takes more time and effort than an exemption, but it is the workhorse of Canadian hiring and
            opens the door to many roles. For in-demand technology and high-skill positions, the{" "}
            <a href="/work-permits/global-talent-stream">Global Talent Stream</a> offers a faster, streamlined LMIA
            with two-week service standards in many cases.
          </p>

          <h2>Hiring without an LMIA</h2>
          <p>
            The <a href="/work-permits/international-mobility-program">International Mobility Program</a> lets you skip
            the LMIA entirely when a recognised exemption applies. These routes are usually quicker and lighter, so
            they are worth checking before you commit to the LMIA process.
          </p>
          <ul>
            <li><strong><a href="/work-permits/intra-company-transfer">Intra-company transfers</a></strong>, for staff moving within your company to a Canadian office.</li>
            <li><strong><a href="/work-permits/cusma">CUSMA permits</a></strong>, for eligible US and Mexican professionals, transferees, traders and investors.</li>
            <li><strong><a href="/work-permits/ceta">CETA permits</a></strong>, for certain European professionals and transferees.</li>
            <li><strong><a href="/work-permits/francophone-mobility">Francophone Mobility</a></strong>, for French-speaking workers in roles outside Quebec.</li>
            <li><strong>Open work permits</strong>, which some candidates already hold and can use to start without employer sponsorship.</li>
          </ul>

          <Callout type="info" title="LMIA-exempt is not requirement-free">
            For most LMIA-exempt hires, you still submit an <strong>offer of employment</strong> through the Employer
            Portal and pay the employer compliance fee before the worker applies. The fee can change, so confirm the
            current amount on canada.ca.
          </Callout>

          <h2>Your obligations as an employer</h2>
          <p>
            Hiring a foreign worker comes with responsibilities that continue after the permit is issued. You must pay
            the wage and provide the role and conditions set out in the offer, keep proper records, and be ready for a
            possible inspection.
          </p>
          <p>
            Getting compliance right protects your business. Non-compliance can lead to penalties, public listing or a
            ban from the programs, which is why we build clean documentation into every hire and keep your obligations
            clear from the start.
          </p>

          <h2>How Wild Mountain helps employers</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), we act as your guide through the whole process: assessing
            the role, recommending the fastest compliant route, and preparing the LMIA or the LMIA-exempt offer of
            employment.
          </p>
          <p>
            We coordinate with your candidate&apos;s work-permit application so the two sides line up, and we keep the
            fees fixed and in writing. Everything is handled online, and we can plan the hire with your worker&apos;s
            eventual permanent residence in mind, which helps with retention.
          </p>
          <Steps
            steps={[
              { title: "Assess the role and candidate", desc: "We confirm whether an LMIA is needed or an exemption applies, and recommend the fastest compliant route." },
              { title: "Prepare the application", desc: "We handle the LMIA and advertising, or the LMIA-exempt offer of employment, with the supporting documents." },
              { title: "Support the work permit", desc: "We coordinate your candidate's permit application and keep your compliance records clean for any inspection." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Routes and tools for employers</h2>
          <p className="mt-3 text-ink-soft">The hiring routes and pathways that connect to your foreign-worker hire.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={FileCheck2} title="LMIA work permits" desc="The labour-market test, the advertising rules and the application, step by step." href="/work-permits/lmia" />
            <FeatureCard icon={Users} title="Temporary Foreign Worker Program" desc="The LMIA-based system for hiring when no exemption applies." href="/work-permits/temporary-foreign-worker-program" />
            <FeatureCard icon={ShieldCheck} title="Global Talent Stream" desc="Faster, streamlined hiring for in-demand technology and high-skill roles." href="/work-permits/global-talent-stream" />
            <FeatureCard icon={Globe} title="International Mobility Program" desc="LMIA-exempt routes: intra-company transfers, CUSMA, CETA and more." href="/work-permits/international-mobility-program" />
            <FeatureCard icon={Languages} title="Francophone Mobility" desc="Hire French-speaking workers outside Quebec with no LMIA." href="/work-permits/francophone-mobility" />
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="Move key staff into a Canadian office without a labour-market test." href="/work-permits/intra-company-transfer" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Ready to hire a foreign worker?"
        sub="Tell us about the role and the candidate. Our licensed team will map the fastest compliant route and handle the paperwork, with clear written fees."
      />
    </>
  );
}
