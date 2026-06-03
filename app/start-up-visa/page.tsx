import type { Metadata } from "next";
import { Rocket, Briefcase, Map, Users, FileCheck2, Building2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/start-up-visa";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Start-up Visa Canada (SUV)",
  titleAbsolute: "Start-up Visa Canada 2026: Full SUV Guide",
  description:
    "Start-up Visa Canada (SUV): the federal PR route for entrepreneurs with an innovative business and a Letter of Support. Talk to a licensed RCIC.",
  path: PATH,
  keywords: [
    "start up visa canada",
    "canada start up visa",
    "suv canada",
    "start-up visa program",
    "letter of support",
    "designated organisation",
  ],
});

const faqs = [
  {
    q: "What is the Start-up Visa Canada?",
    a: "The Start-up Visa (SUV) is a federal permanent-residence program for entrepreneurs who have an innovative business idea that is supported by a designated organisation in Canada. To qualify, your business must win the backing of a designated venture capital fund, angel investor group or business incubator, which issues a Letter of Support, sometimes called a commitment, confirming it will work with you. You also need to meet a language requirement and show settlement funds. Unlike many entrepreneur routes, the Start-up Visa leads directly to permanent residence rather than a temporary status that you later try to convert.",
  },
  {
    q: "What is a designated organisation and a Letter of Support?",
    a: "A designated organisation is a Canadian venture capital fund, angel investor group or business incubator that IRCC has approved to support Start-up Visa applicants. To use the program you must persuade one of them to back your business, and when they agree they issue a Letter of Support (and the organisation submits a matching commitment certificate to IRCC). That document is the cornerstone of the application: without support from a designated organisation, there is no Start-up Visa application. Each type of organisation has its own minimum-investment or acceptance expectations, which is why a credible, well-pitched business case matters so much.",
  },
  {
    q: "What are the language and settlement-fund requirements?",
    a: "You must prove language ability of at least Canadian Language Benchmark (CLB) 5 in either English or French, across all four abilities, with results from an approved test. You also need enough settlement funds to support yourself and any family members after you arrive, because the program does not provide income; the amount required rises with family size and is updated periodically, so confirm the current figures on canada.ca. These are baseline requirements: meeting them does not by itself secure approval, but failing them will stop an application before the business case is even considered.",
  },
  {
    q: "Can more than one person apply on the same business?",
    a: "Yes. Up to five owners can be named as principal applicants on a single qualifying business, which makes the Start-up Visa well suited to founding teams rather than only solo entrepreneurs. Each applicant must individually meet the language and settlement-fund requirements and pass admissibility, and the designated organisation's support must identify the essential team members. If one essential applicant withdraws or is refused, it can affect the others, so we plan team applications carefully so the business case and the people behind it stay aligned.",
  },
  {
    q: "Can I work in Canada while my SUV application is processed?",
    a: "Often, yes. Applicants whose business is ready to launch may be eligible for a temporary work permit so they can come to Canada and start building the company while the permanent-residence application is processed. This work permit is tied to the start-up and is intended to keep momentum behind a promising venture. It is not automatic, and eligibility depends on your circumstances and the readiness of the business, so we assess whether the interim work permit is available and worthwhile in your specific case.",
  },
  {
    q: "How long does the Start-up Visa take and are there intake caps?",
    a: "Permanent-residence processing for the Start-up Visa takes a meaningful amount of time. On top of that, the program applies intake caps and limits on the number of applications it accepts, and these can change. These caps mean timing and the order of applications matter. Because both the processing estimates and the intake limits are adjusted by IRCC from time to time, we point applicants to canada.ca for the current processing times and intake position rather than quoting a fixed timeline.",
  },
  {
    q: "What counts as a qualifying business?",
    a: "A qualifying business must meet ownership and structure rules. At the time you receive the commitment certificate from the designated organisation, each applicant must hold at least 10% of the voting rights, and the applicants together with the designated organisation must jointly hold more than 50% of the voting rights. The business must also be incorporated and carrying on (or planning to carry on) active business in Canada, with essential and active management of that business taking place in Canada and a significant portion of its operations located in Canada. These ownership percentages are set by the program, so we structure the company to fit them precisely before the commitment is finalised.",
  },
];

export default function StartUpVisaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Start-up Visa Canada (SUV) 2026, Complete RCIC Guide",
            description:
              "Start-up Visa Canada (SUV): the federal PR route for entrepreneurs with an innovative business and a Letter of Support. Requirements, process and caps.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "Start-up Visa (SUV) support",
            description:
              "Canada Start-up Visa (SUV): a federal PR route for entrepreneurs with an innovative business and a Letter of Support. Requirements, process, permits, caps.",
            path: PATH,
            serviceType: "Business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Immigrate"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Start-up Visa", path: PATH },
        ]}
        title={<>Start-up Visa Canada <span className="text-brand">(SUV)</span></>}
        lede={
          <p>
            The <strong>Start-up Visa Canada</strong> (SUV) is a federal permanent-residence program for entrepreneurs
            with an innovative business idea backed by a designated Canadian organisation. Secure a Letter of Support
            from a designated venture capital fund, angel investor group or business incubator, meet the language and
            settlement-fund requirements, and the Start-up Visa leads directly to permanent residence. This guide
            explains the requirements, the investment and cost, the interim work permit, processing time and the intake
            caps.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/contact", label: "Get started" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Rocket className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Building an innovative business?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us about your venture and our team will assess whether the Start-up Visa fits, and how to approach a
                designated organisation.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Immigrate to Canada", href: "/immigrate", note: "All permanent residence routes" },
                { label: "Self-Employed Persons Program", href: "/self-employed-immigration", note: "An alternative for cultural and athletic applicants" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Provincial entrepreneur streams" },
                { label: "Express Entry", href: "/express-entry", note: "The main skilled-worker PR system" },
                { label: "Our fees", href: "/fees", note: "How our professional fee works" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Start-up Visa Canada (SUV) is a federal permanent-residence program for innovative entrepreneurs. Your business must win a Letter of Support from a designated venture capital fund, angel investor group or business incubator, after that organisation's peer review and due diligence. To qualify you also need a qualifying business, language ability of at least CLB 5 in English or French, and sufficient settlement funds. The designated organisation issues the Letter of Support while sending a matching commitment certificate to IRCC. Up to five owners can be principal applicants on one business, and applicants may be eligible for a work permit while the PR application is processed. The program applies intake caps that change, so confirm the current processing time and position on canada.ca."
            items={[
              <>The <strong>Start-up Visa (SUV)</strong> is a federal route to <strong>permanent residence</strong> for innovative entrepreneurs.</>,
              <>You need a <strong>Letter of Support</strong> from a designated venture capital fund, angel investor group or business incubator.</>,
              <>Requirements include a qualifying business, <strong>CLB 5</strong> language ability, and sufficient <strong>settlement funds</strong>.</>,
              <>Up to <strong>five owners</strong> can be principal applicants on one business, and an interim <a href="/work-permits">work permit</a> may be available.</>,
              <>Intake caps and limits change, so confirm the current status on canada.ca; compare with <a href="/pnp">PNP entrepreneur streams</a> too.</>,
            ]}
          />

          <h2>What the Start-up Visa is</h2>
          <p>
            The <strong>Start-up Visa (SUV)</strong> is a federal permanent-residence program for entrepreneurs with an
            innovative business idea that is supported by a designated organisation in Canada. The defining feature is
            that endorsement: a designated <strong>venture capital fund</strong>, <strong>angel investor group</strong>{" "}
            or <strong>business incubator</strong> must agree to back your business and issue a{" "}
            <strong>Letter of Support</strong> (with a matching commitment certificate sent to IRCC).</p>
          <p>Many
            entrepreneur routes give a temporary status that you later try to convert. The Start-up Visa instead leads{" "}
            <strong>directly to permanent residence</strong>, which makes it attractive to founders who want
            certainty about settling in Canada.
          </p>
          <p>
            It exists to attract genuinely innovative companies that can compete globally and create jobs in Canada. That
            ambition runs through the whole program: the designated organisations are gatekeepers for quality, and a
            strong, credible business case is the heart of every successful application.
          </p>

          <h2>The four core requirements</h2>
          <p>
            Whatever the business, every Start-up Visa application rests on four pillars. All of them must be satisfied,
            and meeting the baseline ones does not guarantee approval; the business case still has to convince.
          </p>
          <DataTable
            headers={["Requirement", "What it means"]}
            rows={[
              ["A qualifying business", "An incorporated company meeting the program's voting-rights rules (each applicant 10%, applicants plus organisation over 50%), with essential and active management of the business in Canada"],
              ["Support from a designated organisation", "A Letter of Support from a designated venture capital fund, angel investor group or business incubator"],
              ["Language ability", "At least CLB 5 in English or French across all four abilities, by approved test"],
              ["Settlement funds", "Enough unencumbered funds to support yourself and your family on arrival (amount rises with family size)"],
            ]}
            caption="The four pillars of the Start-up Visa. Settlement-fund amounts are updated periodically, so confirm the current figures on canada.ca."
          />

          <h2>Designated organisations and the Letter of Support</h2>
          <p>
            A <strong>designated organisation</strong> is a Canadian body, a venture capital fund, an angel investor
            group or a business incubator, that IRCC has approved to support Start-up Visa Canada applicants. To use the
            program, you must persuade one of them to back your business, usually after a <strong>peer review</strong>{" "}
            and the organisation&apos;s own due diligence on your venture.</p>
          <p>When they agree, two related documents appear:
            the <strong>Letter of Support</strong> is given to you to file with your application, while the organisation
            separately sends a matching <strong>commitment certificate</strong> directly to IRCC. The Letter of Support
            is the cornerstone of the whole application: without it, there is no Start-up Visa.
          </p>
          <p>
            Each type of organisation has its own expectations and cost. A venture capital fund or angel investor group
            typically commits a minimum investment in the business, while a business incubator accepts you into its
            program rather than investing cash. Securing that backing is competitive, and a polished, well-evidenced
            pitch is what separates the applications that win support from those that do not. Our team helps you prepare a
            credible case before you approach an organisation, while being clear that the designated organisation, not
            us, decides whether to issue the Letter of Support.
          </p>

          <Callout type="brand" title="The business case comes first">
            The Start-up Visa is not a paperwork exercise with a guaranteed result. The designated organisation must
            genuinely believe in your business, and IRCC must be satisfied the venture and the team are real. What we do
            is help you present an honest, compelling application and structure the company to fit the program&apos;s
            rules.
          </Callout>

          <h2>Multiple founders: up to five principal applicants</h2>
          <p>
            The Start-up Visa is built for teams, not only solo founders. Up to <strong>five owners</strong> can be named
            as principal applicants on a single qualifying business. Each must individually meet the language and
            settlement-fund requirements and pass admissibility, and the designated organisation&apos;s support must
            identify the essential members of the team. Because the application links the founders together, the
            structure needs care: if one essential applicant withdraws or is refused, it can affect the others. We plan
            team applications so the business case and the people behind it stay aligned from the outset.
          </p>

          <h2>The interim work permit</h2>
          <p>
            Permanent-residence processing takes time, and a promising business should not have to wait idle. Applicants
            whose start-up is ready to launch may be eligible for a temporary <a href="/work-permits">work permit</a> so
            they can come to Canada and start building the company while the PR application is processed. This permit is
            tied to the start-up and is intended to keep momentum behind the venture. It is not automatic, and
            eligibility depends on your circumstances and the readiness of the business, so we assess whether the interim
            work permit is available and worthwhile in your particular case.
          </p>

          <h2>Start-up Visa processing time, cost and intake caps</h2>
          <p>
            Two timing factors shape a Start-up Visa plan. First, the permanent-residence <strong>processing time</strong>{" "}
            takes a meaningful period. Second, and importantly, the program applies <strong>intake caps and limits</strong>{" "}
            on the number of applications it accepts, and these can change.</p>
          <p>Caps mean that the timing and order of
            applications can matter as much as the strength of the file. Because both the processing estimates and the
            intake limits are adjusted by IRCC from time to time, we point applicants to canada.ca for the current
            Start-up Visa processing time and intake position rather than quoting a fixed timeline that may already have
            moved.
          </p>
          <p>
            On the <strong>cost</strong> side, plan for two separate budgets. The first is the IRCC government fees plus
            the settlement funds you must show, both confirmed on canada.ca. The second is the investment side: a
            designated venture capital fund or angel investor group will expect a minimum investment in the business,
            while a business incubator charges for or selects you into its program. We set out our own professional fee
            in writing so the full picture of the startup visa Canada cost is clear before you commit.
          </p>

          <h2>Start-up Visa compared with other routes</h2>
          <p>
            The Start-up Visa is one of several routes for people who want to build or run a business in Canada, and it
            is not always the best fit. If your background is in cultural activities or athletics rather than an
            innovative scalable company, the federal{" "}
            <a href="/self-employed-immigration">Self-Employed Persons Program</a> may be more relevant (subject to its
            current availability).</p>
          <p>If you would rather invest in or manage an established or smaller business in a
            specific province, the entrepreneur streams within the{" "}
            <a href="/pnp">Provincial Nominee Programs</a> are often a better match. And skilled workers without a
            business idea usually look to <a href="/express-entry">Express Entry</a> instead. Our team weighs these
            options honestly against your profile, because choosing the wrong route is the most expensive mistake an
            entrepreneur can make.
          </p>

          <h2>How Wild Mountain helps with the Start-up Visa</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team supports Start-up Visa Canada applicants from first
            assessment through to the permanent-residence application. We check eligibility honestly, help structure a
            qualifying business that fits the voting-rights and active-management rules, prepare you to approach
            designated organisations, and build a complete, accurate application around the Letter of Support once it is
            secured.</p>
          <p>We represent clients entirely online, by video call and secure document sharing, and we are clear
            about what we can and cannot control: we do not issue Letters of Support, and changeable figures such as
            settlement funds, processing time and intake caps are always confirmed against canada.ca.
          </p>
          <Steps
            steps={[
              { title: "Assess and strategise", desc: "We review your business idea, team, language and funds against the Start-up Visa rules, and compare it honestly with PNP entrepreneur streams and other routes." },
              { title: "Structure and pitch", desc: "We help you structure a qualifying business and prepare to approach designated organisations for a Letter of Support, with clear written fees." },
              { title: "Apply for PR", desc: "Once the Letter of Support is secured, we build and submit the permanent-residence application, and assess whether the interim work permit fits your timeline." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Other routes for entrepreneurs</h2>
          <p className="mt-3 text-ink-soft">Explore the pathways that sit alongside the Start-up Visa.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Building2} title="PNP entrepreneur streams" desc="Provincial routes for those investing in or running a business in a specific province." href="/pnp" />
            <FeatureCard icon={Users} title="Self-Employed Persons Program" desc="A federal route for those in cultural activities or athletics (subject to current availability)." href="/self-employed-immigration" />
            <FeatureCard icon={Rocket} title="Express Entry" desc="The main federal system for skilled workers without a business idea." href="/express-entry" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="Including the interim work permit Start-up Visa founders may use to launch sooner." href="/work-permits" />
            <FeatureCard icon={Map} title="Immigrate to Canada" desc="See every permanent residence route and find where you fit." href="/immigrate" />
            <FeatureCard icon={FileCheck2} title="Our fees" desc="How our professional fee works, and how it differs from government fees." href="/fees" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Bring your innovative business to Canada"
        sub="Tell us about your venture and our licensed team will assess the Start-up Visa fit, with honest advice and clear fees."
      />
    </>
  );
}
