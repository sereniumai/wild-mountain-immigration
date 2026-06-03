import type { Metadata } from "next";
import { Plane, Ticket, Briefcase, Heart, Globe } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/visit";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Visit Canada: TRV, eTA & Visitor Options",
  titleAbsolute: "Visit Canada 2026: Visitor Visa, eTA & More",
  description:
    "How to visit Canada in 2026: the visitor visa (TRV), eTA for visa-exempt air travellers, the business visitor category and the super visa. RCIC-reviewed.",
  path: PATH,
  keywords: [
    "visit canada",
    "canada visitor visa",
    "eta canada",
    "temporary resident visa",
    "business visitor canada",
    "canada super visa",
  ],
});

const faqs = [
  {
    q: "Do I need a visa or an eTA to visit Canada?",
    a: "It depends on your nationality and how you travel. Citizens of visa-required countries need a visitor visa, also called a Temporary Resident Visa (TRV), to enter Canada for any purpose. Citizens of visa-exempt countries, such as the UK, most of the EU, Australia and Japan, do not need a visa but usually need an Electronic Travel Authorization (eTA) when they fly to or transit through Canada. US citizens generally need neither for short visits. Because the lists change, confirm your own requirement on canada.ca before you book travel.",
  },
  {
    q: "What is the difference between a visitor visa and an eTA?",
    a: "A visitor visa (TRV) is a document placed in your passport that lets travellers from visa-required countries enter Canada, and it involves a full application with biometrics. An eTA is a much simpler electronic authorization linked to the passport of a visa-exempt traveller flying to Canada; it costs less, is approved quickly in most cases and is valid for up to five years. They serve the same purpose, letting you enter as a visitor, but which one applies depends entirely on your nationality.",
  },
  {
    q: "How long can I stay in Canada as a visitor?",
    a: "Most visitors are allowed to stay for up to six months, though the border services officer decides the exact length of each stay on entry and can authorize less. The date stamped in your passport, or the date noted in your travel document, tells you when you must leave. If you want to stay longer, you can apply to extend your status from inside Canada by requesting a visitor record before your current status expires.",
  },
  {
    q: "Can I work or study while visiting Canada?",
    a: "No. A visitor visa, an eTA and the business visitor category do not authorize you to enter the Canadian labour market or to study in a long programme. To work you need a work permit, and to study a programme longer than six months you need a study permit. The business visitor category is a narrow exception that allows certain business activities, such as meetings and conferences, without a work permit, but it does not let you take a job in Canada.",
  },
  {
    q: "What is the super visa and who is it for?",
    a: "The super visa is a special long-stay option for parents and grandparents of Canadian citizens and permanent residents. Unlike a standard visitor visa, it can allow stays of up to 5 years per entry and is issued as a multiple-entry visa valid for up to ten years, subject to meeting income, medical insurance and other requirements. It is a popular alternative to the Parents and Grandparents Program for families who want extended visits rather than permanent residence.",
  },
  {
    q: "Can a visit to Canada lead to permanent residence?",
    a: "A visit on its own does not give you any path to staying permanently, and you must satisfy the officer that you will leave at the end of your authorized stay. That said, many people visit Canada, see where they might settle, and later apply through a proper immigration route such as Express Entry, a Provincial Nominee Program or a work or study permit. Visiting and immigrating are separate processes, and it is important to apply for the status that matches your real intentions.",
  },
  {
    q: "Do my children need their own visa or eTA?",
    a: "Yes. Every traveller, including children and infants, needs their own valid travel authorization to enter Canada. A child from a visa-required country needs their own visitor visa, and a child from a visa-exempt country flying to Canada needs their own eTA linked to their passport. Families travelling with children should also carry documents such as birth certificates and, where relevant, consent letters, particularly when one parent travels alone with a child.",
  },
  {
    q: "How far ahead should I apply to visit Canada?",
    a: "Apply as early as you reasonably can. An eTA is often approved within minutes, but some applications are referred for review and take longer, so do not leave it to the airport. A visitor visa takes considerably longer because it involves a full application and biometrics, and processing times rise and fall with demand. We recommend checking the current processing estimate on canada.ca and building in a comfortable buffer before any non-refundable bookings.",
  },
  {
    q: "Can Wild Mountain Immigration help with a visitor application?",
    a: "Yes. As a CICC-regulated practice, our team prepares visitor visa and super visa applications, advises on eTA and business visitor questions, and makes sure your application is complete, accurate and supported by the right documents. We represent clients entirely online, by video call and secure document sharing. A well-prepared visitor application that clearly addresses ties to your home country and your purpose of travel stands the best chance of a smooth outcome.",
  },
];

export default function VisitHubPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Visit Canada 2026: Visitor Visa, eTA, Business Visitor & Super Visa",
            description:
              "How to visit Canada in 2026: the visitor visa (TRV), eTA for visa-exempt air travellers, the business visitor category and the super visa. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-27",
          }),
          serviceLd({
            name: "Visit Canada application support",
            description:
              "How to visit Canada in 2026: the visitor visa (TRV), eTA for visa-exempt air travellers, the business visitor category and the super visa. RCIC-reviewed.",
            path: PATH,
            serviceType: "Temporary resident immigration consulting",
          }),
        ]}
      />

      <PageHero
        size="hub"
        eyebrow="Visit Canada"
        crumbs={[{ name: "Visit Canada", path: PATH }]}
        title={<>Visit <span className="text-brand">Canada</span></>}
        lede={
          <p>
            There are several ways to <strong>visit Canada</strong> temporarily, and the right one depends on your
            nationality, how you travel and why you are coming. This hub explains the main options: the visitor visa
            (TRV), the eTA for visa-exempt air travellers, the business visitor category, and the super visa for parents
            and grandparents, so you can find the route that fits your trip.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/visit/visitor-visa", label: "Visitor visa (TRV)" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Plane className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Planning a visit?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us about your trip and our team will confirm whether you need a visa, an eTA or something else, and
                prepare a complete application.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Visitor visa (TRV)", href: "/visit/visitor-visa", note: "For visa-required travellers" },
                { label: "eTA", href: "/visit/eta", note: "For visa-exempt air travellers" },
                { label: "Business visitor", href: "/visit/business-visitor", note: "Meetings without a work permit" },
                { label: "Super visa", href: "/family-sponsorship/super-visa", note: "Long stays for parents and grandparents" },
                { label: "Work permits", href: "/work-permits", note: "When a visit is not enough" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="To visit Canada you apply for the temporary-resident status that fits your nationality and purpose. Travellers from a visa-required country need a visitor visa, also called a tourist visa or Temporary Resident Visa (TRV), while a visa-exempt air traveller needs an eTA. The business visitor category and super visa cover meetings and long family stays."
            items={[
              <>Travellers from <strong>visa-required</strong> countries need a <a href="/visit/visitor-visa">visitor visa (TRV)</a>; <strong>visa-exempt</strong> air travellers usually need an <a href="/visit/eta">eTA</a>.</>,
              <>Most visitors can stay up to <strong>six months</strong>, and you can ask to extend with a <strong>visitor record</strong>.</>,
              <>The <a href="/visit/business-visitor">business visitor</a> category allows meetings and conferences without a <a href="/work-permits">work permit</a>.</>,
              <>The <a href="/family-sponsorship/super-visa">super visa</a> lets parents and grandparents of Canadians stay for up to 5 years per entry.</>,
              <>Visiting is not immigrating: to work you need a permit, and to settle you need <strong>permanent residence</strong>.</>,
            ]}
          />

          <AnswerBox>
            To visit Canada you need the temporary-resident status that matches your nationality and purpose. Travellers
            from visa-required countries apply for a <strong>visitor visa (TRV)</strong>, while visa-exempt air
            travellers usually need an <strong>eTA</strong>. Business travellers may qualify as a{" "}
            <strong>business visitor</strong>, and parents and grandparents of Canadians can apply for a{" "}
            <strong>super visa</strong> for long stays. None of these authorize work or study.
          </AnswerBox>

          <h2>What does it mean to visit Canada?</h2>
          <p>
            Visiting Canada means coming as a <strong>temporary resident</strong>, for tourism, family, business
            meetings or a short course, with the intention of leaving at the end of your authorized stay. It is
            different from immigrating. A visitor cannot take a job in the Canadian labour market or enrol in a long
            study programme; those require a <a href="/work-permits">work permit</a> or a{" "}
            <a href="/study-permit">study permit</a>. Settling permanently requires permanent residence through a route
            such as <a href="/express-entry">Express Entry</a> or a{" "}
            <a href="/pnp">Provincial Nominee Program</a>. The first question, then, is always which visitor status you
            need, and that turns on your nationality and how you travel.
          </p>

          <h2>Which option do I need to visit Canada?</h2>
          <p>
            The first step in working out how to visit Canada is matching your situation to the right status. There are
            four common temporary-resident options, and most visitors fall clearly into one of them. The table below
            summarises who each is for and what it allows.
          </p>
          <DataTable
            headers={["Option", "Who it is for", "What it allows"]}
            rows={[
              ["Visitor visa (TRV)", "Travellers from visa-required countries", "Entry as a visitor, usually up to six months"],
              ["eTA", "Visa-exempt travellers flying to Canada", "Entry as a visitor, linked to your passport for up to five years"],
              ["Business visitor", "People coming for meetings, conferences or after-sales service", "Specific business activities without a work permit"],
              ["Super visa", "Parents and grandparents of Canadians and PRs", "Stays of up to 5 years per entry, multiple entries for up to ten years"],
            ]}
            caption="The four main ways to visit Canada. Your nationality and purpose decide which applies. Confirm your own requirement on canada.ca."
          />

          <h2>The visitor visa (TRV)</h2>
          <p>
            A <a href="/visit/visitor-visa">visitor visa</a>, formally a Temporary Resident Visa (TRV) and sometimes
            called a tourist visa, is what travellers from <strong>visa-required countries</strong> need to enter Canada,
            whether for tourism, visiting family or attending an event. It is a full application: you provide documents showing the purpose of your
            trip and your ties to home, give biometrics, and pay the government fees. Most visitor visa holders are
            admitted for up to six months at a time. Our guide to the{" "}
            <a href="/visit/visitor-visa">Canada visitor visa</a> walks through eligibility, dual intent, the
            application steps and how to extend your stay.
          </p>

          <h2>The Electronic Travel Authorization (eTA)</h2>
          <p>
            If you hold a passport from a <strong>visa-exempt country</strong>, such as the UK, most EU states, Australia
            or Japan, you generally do not need a visa to visit. Instead you need an{" "}
            <a href="/visit/eta">Electronic Travel Authorization (eTA)</a> when you fly to or transit through a Canadian
            airport. An eTA is quick and inexpensive to apply for, is linked electronically to your passport, and is
            normally valid for up to five years. It is for visits only and does not let you work or settle. See our{" "}
            <a href="/visit/eta">eTA guide</a> for who needs one, how to apply and how it compares to a visitor visa.
          </p>

          <h2>The business visitor category</h2>
          <p>
            Coming to Canada for work-related reasons does not always require a{" "}
            <a href="/work-permits">work permit</a>. The <a href="/visit/business-visitor">business visitor</a> category
            lets people attend meetings, conferences, training or after-sales service without entering the Canadian
            labour market, provided the work and pay remain tied to a foreign employer. It is a narrow but useful
            category for international business. Our{" "}
            <a href="/visit/business-visitor">business visitor guide</a> explains exactly what is allowed, what is not,
            and when a business trip crosses the line into needing a work permit.
          </p>

          <h2>The super visa for parents and grandparents</h2>
          <p>
            For families, the <a href="/family-sponsorship/super-visa">super visa</a> is one of the most valuable
            options. It lets parents and grandparents of Canadian citizens and permanent residents come for extended
            visits, with stays of up to 5 years per entry and a multiple-entry visa valid for up to ten years. It
            carries its own requirements, including private medical insurance and an income test for the host, and it is
            a popular alternative to permanent <a href="/family-sponsorship">family sponsorship</a> for families who
            want long visits rather than relocation.
          </p>

          <Callout type="brand" title="Visiting is not the same as immigrating">
            A visitor visa, an eTA and the business visitor category all let you come to Canada temporarily, but none of
            them let you work in the Canadian labour market or settle permanently. If your real plan is to work or move,
            we help you apply for the correct status from the start, which avoids a costly misstep at the border.
          </Callout>

          <h2>How long can you stay, and can you extend?</h2>
          <p>
            The usual duration of stay is up to <strong>six months</strong>, though the border services officer at the
            port of entry sets the actual length when you arrive and can authorise less. If you want to stay longer, you
            apply from within Canada for a{" "}
            <strong>visitor record</strong>, which extends your visitor status (it is not a new visa). You should apply
            before your current status expires, and ideally well ahead, so you maintain legal status while the
            application is processed. The <a href="/visit/visitor-visa">visitor visa guide</a> covers extensions in more
            detail.
          </p>

          <h2>How Wild Mountain Immigration helps you visit Canada</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team prepares visitor visa and super visa
            applications and advises on eTA and business visitor questions. We confirm which status you actually need to
            visit Canada, assemble a complete application that clearly shows your purpose of travel and ties to home, and
            represent you with IRCC online, giving your application the best possible footing.
          </p>
          <Steps
            steps={[
              { title: "Confirm the right status", desc: "We check your nationality and travel purpose to confirm whether you need a visitor visa, an eTA, business visitor status or a super visa." },
              { title: "Prepare a complete application", desc: "We assemble the documents that show your purpose of travel, ties to home and, for a super visa, the income and insurance requirements, with clear written fees." },
              { title: "Apply and plan ahead", desc: "We submit and represent you with IRCC, and if your longer-term goal is to work or settle, we map the proper route to get there." },
            ]}
          />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Choose your way to visit</h2>
          <p className="mt-3 text-ink-soft">Explore each temporary-resident option in detail.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Ticket} title="Visitor visa (TRV)" desc="For travellers from visa-required countries: eligibility, dual intent, the application steps and extensions." href="/visit/visitor-visa" />
            <FeatureCard icon={Plane} title="eTA" desc="For visa-exempt air travellers: who needs one, how to apply, the cost and the five-year validity." href="/visit/eta" />
            <FeatureCard icon={Briefcase} title="Business visitor" desc="Attend meetings, conferences and training in Canada without a work permit, within strict limits." href="/visit/business-visitor" />
            <FeatureCard icon={Heart} title="Super visa" desc="Long visits for parents and grandparents of Canadians, valid for up to ten years." href="/family-sponsorship/super-visa" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="When a visit is not enough and you need to work in Canada, explore the work permit routes." href="/work-permits" />
            <FeatureCard icon={Globe} title="Move to Canada" desc="Thinking beyond a visit? See the routes to permanent residence by country and program." href="/move-to-canada" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Planning a trip to Canada?"
        sub="Tell us about your visit and our licensed team will confirm the right status and prepare a complete application, with honest advice and clear fees."
      />
    </>
  );
}
