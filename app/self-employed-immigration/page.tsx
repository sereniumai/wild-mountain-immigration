import type { Metadata } from "next";
import { Palette, Rocket, Map, Users, FileCheck2, Briefcase } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/self-employed-immigration";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Self-Employed Persons Program Canada 2026",
  titleAbsolute: "Self-Employed Immigration Canada 2026: PR Pathway",
  description:
    "Self-employed immigration to Canada via the Self-Employed Persons Program: a PR route for cultural workers and athletes. Check current status, talk to us.",
  path: PATH,
  keywords: [
    "self employed visa canada",
    "self-employed persons program",
    "self employed immigration canada",
    "cultural self employed canada",
    "athletics self employed canada",
  ],
});

const faqs = [
  {
    q: "What is the Self-Employed Persons Program?",
    a: "The federal Self-Employed Persons Program is a permanent-residence route for people with relevant experience in cultural activities or athletics who intend and are able to be self-employed in Canada and to contribute to Canadian cultural or athletic life. It is aimed at a specific group: artists, musicians, writers, performers, coaches, athletes and similar self-employed individuals who would make a meaningful contribution at a national level. It is not a general business or entrepreneur visa, and it is not for skilled employees, so the fit has to be genuine. Importantly, IRCC has paused new intake to this program, so its availability cannot be assumed.",
  },
  {
    q: "Is the Self-Employed Persons Program still open?",
    a: "You should not assume it is. IRCC paused new intake to the Self-Employed Persons Program, and it has seen repeated changes over recent years. That means the position can differ from one period to the next, and an application route that was open before may not be accepting new applications now. Because the status genuinely changes, the only reliable answer is the current information on canada.ca. We check the live status before advising anyone to rely on this program, and if it is closed we focus on the alternative routes that are open.",
  },
  {
    q: "Who is eligible for the Self-Employed Persons Program?",
    a: "Eligibility centres on relevant experience in cultural activities or athletics, combined with the intention and the ability to be self-employed in Canada and to make a contribution to Canadian cultural or athletic life. Relevant experience generally means taking part in cultural activities or athletics at a world-class level, or experience being self-employed in those fields, over a qualifying period. Beyond experience, applicants are assessed on a points system and must meet admissibility and other requirements. Because the program's availability is in question, we confirm both eligibility and current intake status before recommending it.",
  },
  {
    q: "How does the points-based selection work?",
    a: "Selection under the Self-Employed Persons Program is points-based, scored across five factors: experience, education, age, language ability and adaptability. Applicants must reach a minimum points total to be selected, and the assessment also looks at whether the person can genuinely establish themselves as self-employed in Canada. The points are only part of the picture. The relevance and quality of the cultural or athletic experience matters a great deal. Because the program is currently affected by pauses, scoring well does not help unless and until intake is open, which is why we check status on canada.ca first.",
  },
  {
    q: "What if the program is paused, what are my alternatives?",
    a: "If the Self-Employed Persons Program is not accepting applications, there are other routes worth examining. Entrepreneurs with an innovative scalable business may fit the Start-up Visa, while those wanting to invest in or run a business in a particular province often look to the entrepreneur streams within the Provincial Nominee Programs. Skilled workers, including those in cultural and athletic fields who can work as employees, may qualify through Express Entry. The right alternative depends entirely on your background and goals, and we map the open options for your specific situation rather than waiting on a paused program.",
  },
  {
    q: "Does the Self-Employed Persons Program lead to permanent residence?",
    a: "Yes. When it is open and an application succeeds, the Self-Employed Persons Program grants permanent residence, letting you live and work in Canada and continue your self-employed cultural or athletic activity. It is a direct PR route rather than a temporary status. That said, with intake currently paused, the practical path to PR for many cultural and athletic professionals runs through other programs in the meantime. We are careful not to overstate what this program can deliver while its availability is uncertain.",
  },
  {
    q: "Can Wild Mountain help with self-employed immigration?",
    a: "Yes, within our scope and honestly about availability. Working under a licensed RCIC, our team assesses whether your cultural or athletic background fits the Self-Employed Persons Program, checks the current intake status on canada.ca, and, if the program is paused or not the best fit, maps the open alternatives such as the Start-up Visa or a provincial entrepreneur stream. We represent clients entirely online, and we will tell you plainly if this program is not a realistic route for you right now.",
  },
];

export default function SelfEmployedPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Self-Employed Persons Program Canada 2026, RCIC Guide",
            description:
              "Self-Employed Persons Program: a PR route for cultural workers and athletes. IRCC has paused intake, so check status and weigh entrepreneur and PNP routes.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-26",
          }),
          serviceLd({
            name: "Self-employed immigration support",
            description:
              "Self-Employed Persons Program: a PR route for cultural workers and athletes. IRCC has paused intake, so check status and weigh entrepreneur and PNP routes.",
            path: PATH,
            serviceType: "Business immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Immigrate"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Self-Employed Persons Program", path: PATH },
        ]}
        title={<>Self-Employed Immigration Canada: the Self-Employed <span className="text-brand">Persons Program</span></>}
        lede={
          <p>
            <strong>Self-employed immigration to Canada</strong> runs mainly through the federal
            <strong> Self-Employed Persons Program</strong>, a permanent-residence route for people with
            relevant experience in cultural activities or athletics who intend and are able to be self-employed in Canada
            and contribute to Canadian cultural or athletic life. Selection is points-based. Please note that IRCC has
            paused new intake to this program, so its availability cannot be assumed; this guide explains how it works
            and the open alternatives, and points you to canada.ca for the current status.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/immigrate", label: "See all PR routes" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Palette className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Self-employed in arts or sport?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us about your background and our team will check the program&apos;s current status and map the open
                routes that fit you.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Immigrate to Canada", href: "/immigrate", note: "All permanent residence routes" },
                { label: "Start-up Visa", href: "/start-up-visa", note: "For innovative entrepreneurs" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Provincial entrepreneur streams" },
                { label: "Express Entry", href: "/express-entry", note: "For skilled workers and employees" },
                { label: "Our fees", href: "/fees", note: "How our professional fee works" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Self-employed immigration to Canada runs mainly through the federal Self-Employed Persons Program, a permanent-residence route for people with relevant experience in cultural activities or athletics who intend and are able to be self-employed in Canada and contribute to Canadian cultural or athletic life. Selection is points-based across experience, education, age, language and adaptability. Importantly, IRCC has paused new intake to this program, and it has seen repeated changes over the years, so its availability cannot be assumed. Check canada.ca for the current status. If it is closed or not the best fit, alternatives include the Start-up Visa and provincial entrepreneur streams."
            items={[
              <>The <strong>Self-Employed Persons Program</strong> is a federal PR route for people in <strong>cultural activities or athletics</strong>.</>,
              <>You must intend and be able to be <strong>self-employed</strong> in Canada and contribute to Canadian cultural or athletic life.</>,
              <>Selection is <strong>points-based</strong>: experience, education, age, language and adaptability.</>,
              <><strong>IRCC has paused new intake</strong>, so do not assume it is open; confirm the current status on canada.ca.</>,
              <>Alternatives include the <a href="/start-up-visa">Start-up Visa</a> and provincial entrepreneur streams under the <a href="/pnp">PNPs</a>.</>,
            ]}
          />

          <Callout type="warning" title="Check availability before you rely on this program">
            IRCC has <strong>paused new intake</strong> to the Self-Employed Persons Program, and it has faced pauses and
            changes in recent years. That means it may not be accepting applications right now. We do not overstate its
            availability: before recommending it, our team checks the live status on canada.ca and, if it is closed, we
            focus on the open alternatives below.
          </Callout>

          <h2>What is self-employed immigration to Canada (the Self-Employed Persons Program)?</h2>
          <p>
            The federal <strong>Self-Employed Persons Program</strong> is the main self-employed visa to Canada: a
            permanent-residence route for people with relevant experience in <strong>cultural activities</strong> or
            <strong> athletics</strong> who intend and are able to be self-employed in Canada and to contribute to
            Canadian cultural or athletic life.</p>
          <p>It is designed for a particular group: artists and athletes, including
            musicians, writers, performers and coaches, and similar self-employed individuals whose work would make a
            meaningful contribution at a national level. It is not a general business or entrepreneur visa, and it is not
            a route for skilled employees, so the fit has to be genuine. As noted above, its availability is currently in
            question because IRCC has paused new intake.
          </p>

          <h2>Who it is for</h2>
          <p>
            Eligibility centres on three things working together: relevant experience, the intention to be self-employed,
            and the ability to make a contribution to Canadian cultural or athletic life.
          </p>
          <ul>
            <li><strong>Relevant experience</strong> generally means at least two years of taking part in cultural activities or athletics at a world-class level, or being self-employed in those fields, within the qualifying period before you apply.</li>
            <li><strong>Intention and ability to be self-employed</strong> means you plan to support yourself through your own cultural or athletic activity in Canada, not to take a salaried job.</li>
            <li><strong>Contribution</strong> means your activity would add to Canada&apos;s cultural or athletic life, which is why the program targets people who operate at a recognised level.</li>
          </ul>
          <p>
            People whose background is an innovative scalable company, or who want to run a conventional business, are
            usually better served by other routes, which we cover below.
          </p>

          <h2>How the points-based selection works</h2>
          <p>
            When the program is open, selection runs on a <strong>selection grid</strong> scored across five factors.
            Applicants must reach the <strong>pass mark of 35 points</strong> out of 100 and must also satisfy IRCC,
            partly through their net worth and resources, that they have the ability to be self-employed and can
            genuinely establish themselves as self-employed in Canada.
          </p>
          <DataTable
            headers={["Factor", "What it assesses"]}
            rows={[
              ["Experience", "Relevant self-employed or world-class cultural or athletic experience over a qualifying period"],
              ["Education", "Your level of formal education"],
              ["Age", "Points awarded by age band"],
              ["Language ability", "English or French ability, assessed by approved test"],
              ["Adaptability", "Factors such as prior study or experience that help you settle and establish yourself"],
            ]}
            caption="The five selection factors. Pass marks and details are set by IRCC and can change, and intake is currently paused, so confirm the position on canada.ca."
          />
          <p>
            Scoring well only helps when intake is open. With the program currently paused, a strong points profile does
            not by itself create a path, which is why we always check the live status first rather than building a plan
            on a program that may not be accepting applications.
          </p>

          <h2>If the program is paused: your alternatives</h2>
          <p>
            Because the Self-Employed Persons Program may not be open, it is sensible to know the routes that are. The
            right alternative depends entirely on your background and goals.
          </p>
          <ul>
            <li><a href="/start-up-visa">Start-up Visa</a>, a federal PR route for entrepreneurs with an innovative, scalable business backed by a designated organisation.</li>
            <li>Entrepreneur streams within the <a href="/pnp">Provincial Nominee Programs</a>, for those who want to invest in or run a business in a particular province.</li>
            <li><a href="/express-entry">Express Entry</a>, for skilled workers, including people in cultural and athletic fields who can work as employees, often via the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> once they have Canadian work experience.</li>
            <li>If you are drawn to a specific province, <a href="/alberta-immigration">Alberta</a> and other provinces run their own worker and entrepreneur streams worth comparing.</li>
          </ul>
          <p>
            We map the open options for your specific situation rather than waiting on a paused program, so you do not
            lose time betting on a route that is not currently available.
          </p>

          <h2>Does it lead to permanent residence?</h2>
          <p>
            Yes. When the program is open and an application succeeds, the Self-Employed Persons Program grants{" "}
            <strong>permanent residence</strong>, letting you live and work in Canada and continue your self-employed
            cultural or athletic activity. It is a direct PR route rather than a temporary status. With intake currently
            paused, though, the practical path to PR for many cultural and athletic professionals runs through other
            programs in the meantime, and we are careful not to overstate what this program can deliver while its
            availability is uncertain.
          </p>

          <h2>How Wild Mountain helps</h2>
          <p>
            For <strong>self-employed immigration to Canada</strong>, our team works under a licensed RCIC (CICC
            #R706497) to assess whether your cultural or athletic background fits the Self-Employed Persons Program,
            checks the current intake status on canada.ca, and, if the program is paused or not the best fit, maps the
            open alternatives such as the <a href="/start-up-visa">Start-up Visa</a>{" "}
            or a provincial entrepreneur stream under the <a href="/pnp">PNPs</a>.</p>
          <p>We represent clients entirely online,
            by video call and secure document sharing. We will tell you plainly if this
            program is not a realistic route for you right now. Our <a href="/fees">fees guide</a> explains how our
            professional fee works.
          </p>
          <Steps
            steps={[
              { title: "Assess and check status", desc: "We review your cultural or athletic background against the program's criteria and check the current intake status on canada.ca before recommending anything." },
              { title: "Choose the open route", desc: "If the program is paused or not the best fit, we map the open alternatives, the Start-up Visa, a PNP entrepreneur stream or Express Entry, with clear written fees." },
              { title: "Prepare and apply", desc: "We build a complete, accurate application for the route you choose and represent you with IRCC, online, keeping you updated at each step." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Open routes to explore</h2>
          <p className="mt-3 text-ink-soft">If the Self-Employed Persons Program is paused, these alternatives may fit.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Start-up Visa" desc="A federal PR route for entrepreneurs with an innovative, scalable business idea." href="/start-up-visa" />
            <FeatureCard icon={Map} title="PNP entrepreneur streams" desc="Provincial routes for those investing in or running a business in a specific province." href="/pnp" />
            <FeatureCard icon={Briefcase} title="Express Entry" desc="The main federal system for skilled workers and employees." href="/express-entry" />
            <FeatureCard icon={Users} title="Canadian Experience Class" desc="A PR route once you have skilled Canadian work experience." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={Palette} title="Immigrate to Canada" desc="See every permanent residence route and find where you fit." href="/immigrate" />
            <FeatureCard icon={FileCheck2} title="Our fees" desc="How our professional fee works, and how it differs from government fees." href="/fees" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Find the route that is open for you"
        sub="Tell us your background and our licensed team will check the current status and map your best open route, with honest advice and clear fees."
      />
    </>
  );
}
