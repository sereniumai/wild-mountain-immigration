import type { Metadata } from "next";
import { Plane, Ticket, Briefcase, Heart, Clock, Globe } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/visit/eta";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "eTA Canada 2026",
  titleAbsolute: "eTA Canada 2026: Travel Authorization Guide",
  description:
    "eTA Canada explained: what it is, who needs it, how to apply online, the CAD $7 cost and five-year validity, plus eTA vs visitor visa. Get expert help.",
  path: PATH,
  keywords: [
    "eta canada",
    "canada eta",
    "electronic travel authorization",
    "eta vs visitor visa",
    "visa-exempt canada",
    "canada travel authorization",
  ],
});

const faqs = [
  {
    q: "What is an eTA for Canada?",
    a: "An eTA, or Electronic Travel Authorization, is an entry requirement for visa-exempt foreign nationals who fly to or transit through Canada. It is not a visa and not a document in your passport; it is an electronic authorization linked to the specific passport you used to apply. Most applications are approved automatically within minutes, though some are referred for further review. An eTA lets you travel to Canada as a visitor, but the final decision on entry and on how long you may stay is always made by a border services officer.",
  },
  {
    q: "Who needs an eTA to enter Canada?",
    a: "Visa-exempt foreign nationals need an eTA when they fly to or transit through a Canadian airport. This includes citizens of countries such as the UK, most of the European Union, Australia, New Zealand and Japan. Citizens of visa-required countries do not use an eTA; they need a visitor visa instead. US citizens are exempt and do not need an eTA, though lawful permanent residents of the US generally do. Because the rules have specific exceptions, confirm your own requirement on canada.ca before you fly.",
  },
  {
    q: "Do I need an eTA if I drive or arrive by sea?",
    a: "Generally no. The eTA requirement applies to visa-exempt travellers arriving by air. If you are a visa-exempt traveller entering Canada by land, for example by car or bus from the United States, or by sea, you do not normally need an eTA, though you must still carry valid travel documents and meet entry requirements. If your trip combines a flight with land travel, the air segment is what triggers the eTA, so it is safest to hold one if any part of your journey involves flying to Canada.",
  },
  {
    q: "How much does an eTA cost?",
    a: "The eTA fee is CAD $7 per person at the time of writing, which makes it far cheaper than a visitor visa. You pay it by credit card when you apply through the official Government of Canada website. Be careful of third-party websites that charge much higher fees for the same service; the only official application is on canada.ca. Because government fees can change, it is worth confirming the current amount on canada.ca before you apply.",
  },
  {
    q: "How long is an eTA valid?",
    a: "An eTA is valid for up to five years, or until the passport it is linked to expires, whichever comes first. If you get a new passport, you need a new eTA, because the authorization is tied to the specific passport used in the application. While the eTA is valid, you can use it for multiple trips to Canada. Each time you arrive, a border services officer still decides whether to admit you and for how long, usually up to six months at a time.",
  },
  {
    q: "How do I apply for an eTA?",
    a: "You apply online through the official Government of Canada website. You need a valid passport, a credit card to pay the CAD $7 fee, and an email address. The form asks for basic personal, passport and background information and usually takes only a few minutes to complete. Most applicants receive approval by email within minutes, but some applications are referred for additional review, which can take several days, so do not leave it to the last minute before travelling.",
  },
  {
    q: "What is the difference between an eTA and a visitor visa?",
    a: "An eTA and a visitor visa both let you enter Canada as a visitor, but they apply to different travellers. An eTA is for visa-exempt nationals flying to Canada; it is a quick, low-cost electronic authorization valid for up to five years. A visitor visa (TRV) is for travellers from visa-required countries; it is a full application that includes biometrics and a document placed in your passport. Your nationality, not your preference, determines which one you need.",
  },
  {
    q: "Can I work or study in Canada with an eTA?",
    a: "No. An eTA only authorizes you to travel to Canada as a visitor. It does not let you enter the Canadian labour market or enrol in a long study programme. To work you need a work permit, and for a programme longer than six months you need a study permit. Some short courses and certain business visitor activities are allowed without a permit, but an eTA itself is purely a travel authorization for visiting, so always apply for the correct status if your plans involve working or studying.",
  },
  {
    q: "My eTA application was referred for review. What does that mean?",
    a: "Most eTA applications are approved automatically within minutes, but a minority are referred for manual review, which can add several days. A referral on its own does not mean a problem; it simply means an officer needs to look at the application before deciding. To avoid stress, apply well before you book or travel. If you have questions about your eligibility or a more complex travel history, our team can advise on the right approach before you apply.",
  },
];

export default function EtaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "eTA Canada 2026: Electronic Travel Authorization Guide",
            description:
              "eTA Canada explained: what the Electronic Travel Authorization is, who needs it, how to apply online and its five-year validity, plus eTA vs visitor visa.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-27",
          }),
          serviceLd({
            name: "Canada eTA guidance",
            description:
              "eTA Canada explained: what the Electronic Travel Authorization is, who needs it, how to apply online and its five-year validity, plus eTA vs visitor visa.",
            path: PATH,
            serviceType: "Temporary resident immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Visit Canada"
        crumbs={[
          { name: "Visit Canada", path: "/visit" },
          { name: "eTA", path: PATH },
        ]}
        title={<>Canada <span className="text-brand">eTA</span></>}
        lede={
          <p>
            The <strong>eTA Canada</strong> (Electronic Travel Authorization) is what visa-exempt travellers need when they
            fly to Canada. This guide explains who needs an eTA, how to apply, the CAD $7 cost, the five-year validity,
            and how an eTA compares with a visitor visa, so you arrive with the right authorization.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/visit", label: "All ways to visit Canada" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Plane className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure what you need?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We confirm whether you need an eTA, a visitor visa or something else for your trip, and prepare any
                application, entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Visitor visa (TRV)", href: "/visit/visitor-visa", note: "For visa-required travellers" },
                { label: "Business visitor", href: "/visit/business-visitor", note: "Meetings without a work permit" },
                { label: "Super visa", href: "/family-sponsorship/super-visa", note: "Long stays for parents and grandparents" },
                { label: "Visit Canada", href: "/visit", note: "All temporary-resident options" },
                { label: "Work permits", href: "/work-permits", note: "When you need to work, not just visit" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="An eTA Canada (Electronic Travel Authorization) is an entry requirement for visa-exempt foreign nationals who fly to or transit through Canada. It costs CAD $7, is applied for online in minutes, and is valid for up to five years or until your passport expires. An eTA is linked to your passport, not placed in it, and lets you visit only, not work or study. Travellers from visa-required countries need a visitor visa instead."
            items={[
              <>An <strong>eTA</strong> is for <strong>visa-exempt</strong> foreign nationals who fly to or transit through Canada.</>,
              <>It costs <strong>CAD $7</strong> and is usually approved within minutes when you apply on canada.ca.</>,
              <>An eTA is valid for <strong>up to five years</strong>, or until your passport expires, whichever is first.</>,
              <>It is for <strong>visits only</strong>; you cannot work or study on an eTA. To work, see <a href="/work-permits">work permits</a>.</>,
              <>Travellers from visa-required countries need a <a href="/visit/visitor-visa">visitor visa</a> instead, not an eTA.</>,
            ]}
          />

          <AnswerBox>
            An <strong>eTA Canada</strong> (Electronic Travel Authorization) is an entry requirement for visa-exempt
            travellers who fly to or transit through Canada. You apply online in a few minutes, pay{" "}
            <strong>CAD $7</strong>, and it is valid for <strong>up to five years</strong> or until your passport
            expires. It is linked to your passport, lets you visit only, and is not the same as a{" "}
            <a href="/visit/visitor-visa">visitor visa</a>, which is for travellers from visa-required countries.
          </AnswerBox>

          <h2>What is an eTA for Canada?</h2>
          <p>
            An <strong>eTA (Electronic Travel Authorization)</strong> is an entry requirement for visa-exempt foreign
            nationals who travel to Canada by air. It is not a visa, and nothing is stamped into your passport; instead,
            the authorization is recorded electronically and linked to the specific passport you used to apply. When you
            check in for your flight, the airline confirms you hold a valid eTA. The eTA lets you travel to Canada as a
            visitor, but, as with any traveller, a border services officer makes the final decision on your admission and
            on how long you may stay when you arrive.
          </p>

          <h2>Who needs an eTA to enter Canada?</h2>
          <p>
            You need an eTA if you are a <strong>visa-exempt foreign national flying to or transiting through</strong> a
            Canadian airport. That covers citizens of many countries on the eTA-eligible countries list, including the
            UK, most EU states, Australia, New Zealand and Japan. Travellers from <strong>visa-required countries</strong>{" "}
            do not use an eTA; they apply for a <a href="/visit/visitor-visa">visitor visa</a> instead. There are specific
            exceptions, so confirm your own situation on canada.ca before you fly.
          </p>
          <DataTable
            headers={["Traveller", "What they need to fly to Canada"]}
            rows={[
              ["Visa-exempt foreign national (for example UK, EU, Australia, Japan)", "An eTA"],
              ["Citizen of a visa-required country", "A visitor visa (TRV), not an eTA"],
              ["US citizen", "Neither an eTA nor a visa for short visits"],
              ["US lawful permanent resident", "Generally an eTA, plus proof of US PR status"],
            ]}
            caption="Who needs an eTA when flying to Canada. Exceptions apply, so confirm your requirement on canada.ca."
          />

          <Callout type="info" title="eTA is for air travel">
            The eTA requirement applies when you <strong>fly to or transit through</strong> Canada. Visa-exempt
            travellers arriving by land or sea, for example driving from the United States, do not normally need an eTA,
            though you must still carry valid travel documents. If any part of your journey involves flying to Canada, it
            is safest to hold an eTA.
          </Callout>

          <h2>How much does an eTA cost?</h2>
          <p>
            The eTA fee is <strong>CAD $7</strong> per person, paid by credit card when you apply on the official
            Government of Canada website. That makes it far cheaper than a visitor visa. Be wary of third-party websites
            that charge much higher fees to submit the same simple form on your behalf; the only official place to apply
            is canada.ca. Government fees can change, so confirm the current amount on canada.ca before you apply.
          </p>

          <h2>How long is an eTA valid?</h2>
          <p>
            An eTA is valid for <strong>up to five years</strong>, or until the linked passport expires, whichever comes
            first. Because the authorization is tied to a specific passport, getting a new passport means applying for a
            new eTA, even if your previous one had time left. While it is valid, an eTA can be used for multiple trips.
            Each arrival is still assessed by a border officer, who typically admits visitors for up to six months at a
            time. If you want to stay longer, see how to extend your stay with a visitor record on our{" "}
            <a href="/visit/visitor-visa">visitor visa guide</a>.
          </p>

          <h2>How to apply for an eTA online</h2>
          <p>
            The eTA application is quick and done entirely online through the official Government of Canada website at
            canada.ca. You will need a valid passport, a credit card and an email address. Approval usually takes only
            minutes, though some applications are referred for review that can take several days.
          </p>
          <Steps
            steps={[
              { title: "Complete the online form", desc: "On canada.ca, enter your passport, personal and background details. The form usually takes only a few minutes." },
              { title: "Pay the CAD $7 fee", desc: "Pay by credit card on the official site. Avoid third-party sites that charge inflated fees for the same service." },
              { title: "Receive your decision", desc: "Most applicants are approved by email within minutes. Some applications are referred for review and take longer, so apply ahead of travel." },
            ]}
          />

          <h2>eTA vs visitor visa: which do you need?</h2>
          <p>
            An eTA and a <a href="/visit/visitor-visa">visitor visa (TRV)</a> both let you enter Canada as a visitor, but
            they apply to different travellers and work very differently. The choice is not yours to make; your
            nationality decides it.
          </p>
          <DataTable
            headers={["Feature", "eTA", "Visitor visa (TRV)"]}
            rows={[
              ["Who it is for", "Visa-exempt air travellers", "Travellers from visa-required countries"],
              ["Form", "Electronically linked to your passport", "A document placed in your passport"],
              ["Cost", "CAD $7 (confirm on canada.ca)", "Higher; full application with biometrics"],
              ["Typical processing", "Often minutes, sometimes longer", "Longer; varies by country and demand"],
              ["Validity", "Up to 5 years or passport expiry", "Often multiple years or passport expiry"],
              ["Lets you work or study", "No", "No"],
            ]}
            caption="The eTA and the visitor visa serve the same purpose for different travellers. Your nationality determines which applies."
          />

          <h2>What an eTA does not let you do</h2>
          <p>
            An eTA is purely a travel authorization for <strong>visiting</strong>. It does not let you work in the
            Canadian labour market or enrol in a study programme longer than six months. To work you need a{" "}
            <a href="/work-permits">work permit</a>, and to study a longer programme you need a{" "}
            <a href="/study-permit">study permit</a>. Certain <a href="/visit/business-visitor">business visitor</a>{" "}
            activities, such as meetings and conferences, are allowed without a work permit, but the eTA itself never
            confers the right to work. Applying for the status that matches your real plans avoids problems at the
            border.
          </p>

          <h2>How Wild Mountain can help</h2>
          <p>
            The Canada eTA application itself is simple and most travellers complete it directly on canada.ca. Where our
            team adds value, working under a licensed RCIC (CICC #R706497), is confirming which status you actually
            need, advising visa-exempt travellers whose plans edge toward working or studying, and preparing a full{" "}
            <a href="/visit/visitor-visa">visitor visa</a> or other application where one is required. We represent
            clients entirely online; our role is to make sure your eTA Canada trip starts with the correct
            authorization.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related visit options</h2>
          <p className="mt-3 text-ink-soft">Explore the other ways to come to Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Ticket} title="Visitor visa (TRV)" desc="For travellers from visa-required countries: eligibility, dual intent and the application steps." href="/visit/visitor-visa" />
            <FeatureCard icon={Briefcase} title="Business visitor" desc="Attend meetings, conferences and training in Canada without a work permit." href="/visit/business-visitor" />
            <FeatureCard icon={Heart} title="Super visa" desc="Long visits for parents and grandparents of Canadians, valid for up to ten years." href="/family-sponsorship/super-visa" />
            <FeatureCard icon={Clock} title="Extend your stay" desc="Already in Canada? See how a visitor record extends your visitor status." href="/visit/visitor-visa" />
            <FeatureCard icon={Briefcase} title="Work permits" desc="An eTA does not let you work. Explore the permits that do." href="/work-permits" />
            <FeatureCard icon={Globe} title="Visit Canada" desc="See all the temporary-resident options in one place." href="/visit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Travel to Canada with the right authorization"
        sub="Tell us about your trip and our licensed team will confirm whether you need an eTA, a visitor visa or something else, with honest advice and clear fees."
      />
    </>
  );
}
