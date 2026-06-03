import type { Metadata } from "next";
import { Ticket, Plane, Briefcase, Heart, Clock, FileText } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/visit/visitor-visa";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canada Visitor Visa (TRV) 2026 Guide",
  titleAbsolute: "Canada Visitor Visa (TRV) 2026 Guide",
  description:
    "What a Canada visitor visa (TRV) is, who needs one, eligibility, dual intent, how to apply, processing and extending your stay with a visitor record.",
  path: PATH,
  keywords: [
    "canada visitor visa",
    "trv",
    "temporary resident visa",
    "visitor visa canada",
    "visitor record",
    "visit canada visa",
  ],
});

const faqs = [
  {
    q: "What is a Canada visitor visa (TRV)?",
    a: "A Canada visitor visa, formally a Temporary Resident Visa (TRV), is an official document placed in your passport that lets a traveller from a visa-required country enter Canada for a temporary stay, typically for tourism, visiting family or friends, or attending an event. It confirms you have met the requirements to be admitted as a temporary resident. The visa lets you travel to a Canadian port of entry; the final decision on admission and the length of your stay is made by a border services officer when you arrive.",
  },
  {
    q: "Who needs a visitor visa for Canada?",
    a: "Citizens of visa-required countries need a visitor visa to enter Canada for any visit. Citizens of visa-exempt countries usually do not need a visa and instead apply for an Electronic Travel Authorization (eTA) when they fly to Canada. Whether your country is visa-required or visa-exempt is set by Canada and can change, so the safest step is to confirm your own requirement on canada.ca before you make any plans. If you are unsure, we check your specific nationality and situation for you.",
  },
  {
    q: "What is dual intent on a visitor visa?",
    a: "Dual intent means you can hold a genuine intention to visit Canada temporarily while also intending to apply for permanent residence in the future. Canadian law expressly allows this, so having a pending or planned PR application does not automatically disqualify you from a visitor visa. The key is that you must satisfy the officer you will leave at the end of your authorized stay if your temporary application is approved but your permanent one is not. Presenting dual intent honestly and clearly is far better than hiding it.",
  },
  {
    q: "How long can I stay in Canada on a visitor visa?",
    a: "Most visitors are admitted for up to six months, but the border services officer decides the exact period on entry and can authorize a shorter stay. Look for the stamp in your passport or any document the officer gives you, as it tells you the date by which you must leave. If there is no stamp, the standard six months from your date of entry usually applies. If you need to stay longer, you can apply from inside Canada to extend your status before it expires.",
  },
  {
    q: "How do I extend my stay as a visitor?",
    a: "To stay longer than the period you were admitted for, you apply from within Canada for a visitor record, which extends your visitor status. A visitor record is not a visa and not a new entry document; it is a status document that sets a new date by which you must leave. You should apply before your current status expires, and applying on time means you can usually remain in Canada under maintained status while the application is processed. We prepare visitor record applications and advise on timing.",
  },
  {
    q: "What is the difference between a single-entry and multiple-entry visa?",
    a: "A multiple-entry visitor visa lets you travel to Canada as many times as you wish while the visa is valid, while a single-entry visa allows only one entry. In practice, IRCC issues multiple-entry visas as the standard in most cases, often valid for several years or until the passport expires, whichever comes first. Each time you arrive, a border officer still decides how long you may stay. You do not normally choose between them; the officer assessing your application determines what is issued.",
  },
  {
    q: "How long does a Canada visitor visa take to process?",
    a: "Processing times vary by the country you apply from and by overall demand, and they change frequently. A visitor visa generally takes longer than an eTA because it is a full application that includes biometrics. Rather than quote a fixed number that may be out of date, we recommend checking the current processing estimate for your country on canada.ca and applying well ahead of any travel. We also make sure your application is complete the first time, since missing documents are a common cause of delay.",
  },
  {
    q: "What documents do I need for a visitor visa?",
    a: "Typical supporting documents include a valid passport, proof of funds to cover your stay, evidence of your purpose of travel such as an invitation letter or event details, and documents showing your ties to your home country, for example employment, property or family. You will also usually give biometrics and pay the government fees. The exact requirements depend on your situation and where you apply, so we tailor the document set to your case and confirm current fees on canada.ca.",
  },
  {
    q: "Can Wild Mountain Immigration prepare my visitor visa application?",
    a: "Yes. As a CICC-regulated practice, our team prepares complete, accurate visitor visa applications and presents your purpose of travel and ties to home in the strongest, most honest way. We advise on dual intent where it applies, assemble the right documents, and represent you with IRCC entirely online by video call and secure document sharing. A well-prepared application that clearly addresses an officer's concerns gives you the best footing.",
  },
];

export default function VisitorVisaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Canada Visitor Visa (TRV) 2026: The Complete Guide",
            description:
              "What a Canada visitor visa (TRV) is, who needs one, eligibility, dual intent, how to apply, processing and extending your stay with a visitor record.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-27",
          }),
          serviceLd({
            name: "Canada visitor visa application support",
            description:
              "What a Canada visitor visa (TRV) is, who needs one, eligibility, dual intent, how to apply, processing and extending your stay with a visitor record.",
            path: PATH,
            serviceType: "Temporary resident immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Visit Canada"
        crumbs={[
          { name: "Visit Canada", path: "/visit" },
          { name: "Visitor visa (TRV)", path: PATH },
        ]}
        title={<>Canada <span className="text-brand">visitor visa (TRV)</span></>}
        lede={
          <p>
            A <strong>Canada visitor visa</strong>, formally a Temporary Resident Visa (TRV), lets travellers from
            visa-required countries enter Canada for a temporary stay. This guide explains who needs one, the
            eligibility requirements, how dual intent works, the application steps, processing and how to extend your
            stay with a visitor record.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/visit", label: "All ways to visit Canada" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Ticket className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Applying for a visitor visa?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Our team prepares complete visitor visa applications that clearly show your purpose of travel and ties to
                home, entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "eTA", href: "/visit/eta", note: "For visa-exempt air travellers" },
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
            summary="A Canada visitor visa, or Temporary Resident Visa (TRV), is the official document travellers from visa-required countries need to enter Canada for a temporary stay of usually up to six months. You apply online, give biometrics, and show your purpose of travel and ties to your home country. Canadian law allows dual intent, so a future PR plan does not bar a visitor visa, and you can extend your stay from inside Canada with a visitor record."
            items={[
              <>A <strong>visitor visa (TRV)</strong> lets travellers from <strong>visa-required countries</strong> enter Canada for a temporary stay.</>,
              <>Visa-exempt travellers usually need an <a href="/visit/eta">eTA</a> instead, not a visitor visa.</>,
              <><strong>Dual intent</strong> is allowed: a planned PR application does not automatically disqualify you.</>,
              <>Most visitors are admitted for up to <strong>six months</strong>; the border officer sets the exact period.</>,
              <>Extend your stay from inside Canada with a <strong>visitor record</strong> before your status expires.</>,
            ]}
          />

          <AnswerBox>
            A <strong>Canada visitor visa (TRV)</strong> is an official document, placed in your passport, that lets a
            traveller from a visa-required country enter Canada for a temporary visit of usually up to six months. You
            apply online, pay the government fees, give biometrics, and show your purpose of travel and ties to home. If
            you are from a visa-exempt country, you need an <a href="/visit/eta">eTA</a> instead.
          </AnswerBox>

          <h2>What is a Canada visitor visa (TRV)?</h2>
          <p>
            A <strong>Canada visitor visa</strong> is officially called a Temporary Resident Visa (TRV), and many people
            refer to it informally as a <strong>tourist visa</strong>. It is a counterfoil placed in your passport that
            allows a traveller from a{" "}
            <strong>visa-required country</strong> to travel to a Canadian port of entry and seek admission as a
            temporary resident, for tourism, visiting family or friends, or attending an event such as a wedding,
            conference or graduation.</p>
          <p>The visa itself lets you travel to Canada; a border services officer makes the
            final decision on admission and on how long you may stay when you arrive. A visitor visa is strictly for
            visiting: it does not authorize you to work or to study in a long programme.
          </p>

          <h2>Who needs a visitor visa for Canada?</h2>
          <p>
            Whether you need a visitor visa depends entirely on your nationality. Citizens of{" "}
            <strong>visa-required countries</strong> need a TRV to enter Canada. Citizens of{" "}
            <strong>visa-exempt countries</strong>, such as the UK, most EU states, Australia and Japan, do not need a
            visa and instead need an <a href="/visit/eta">eTA</a> when they fly to Canada. US citizens generally need
            neither for short visits. Because Canada updates which countries are visa-required and visa-exempt, confirm
            your own requirement on canada.ca before booking.
          </p>
          <DataTable
            headers={["Your situation", "What you usually need"]}
            rows={[
              ["Citizen of a visa-required country", "A visitor visa (TRV)"],
              ["Citizen of a visa-exempt country, flying to Canada", "An eTA (not a visa)"],
              ["Citizen of a visa-exempt country, entering by land or sea", "Usually neither, but carry valid travel documents"],
              ["US citizen", "Generally neither for short visits"],
            ]}
            caption="A quick guide to who needs a visitor visa. Lists change, so confirm your requirement on canada.ca."
          />

          <h2>Visitor visa eligibility</h2>
          <p>
            To be approved for a visitor visa, you must satisfy a Canadian visa officer that you meet the core
            requirements for a temporary resident. In broad terms, you need to show that you:
          </p>
          <ul>
            <li>have a valid passport or travel document;</li>
            <li>are coming for a genuine, temporary purpose, such as tourism, family or an event;</li>
            <li>will leave Canada at the end of your authorized stay;</li>
            <li>have enough funds to support your visit and your return;</li>
            <li>have ties to your home country, such as employment, family or property, that show you will return.</li>
          </ul>
          <p>
            The single biggest factor in most refusals, which we help you address head-on, is convincing the officer
            that you will return home. Common refusal reasons include weak ties to your home country, insufficient
            funds, an unclear purpose of travel, or a sponsor or host in Canada whose invitation is not well documented.
            A strong application demonstrates clear ties and a credible purpose. If your case is complex, the right
            approach is to work with a licensed RCIC to file a complete, accurate application.
          </p>

          <Callout type="brand" title="Dual intent is allowed">
            Canadian law expressly recognises <strong>dual intent</strong>: you can intend to visit temporarily while
            also intending to apply for permanent residence one day. A planned or pending{" "}
            <a href="/express-entry">Express Entry</a> or other PR application does not, by itself, disqualify you from a
            visitor visa. The key is showing you will leave at the end of your stay if asked. We help you present dual
            intent honestly and clearly rather than concealing it.
          </Callout>

          <h2>How to apply for a visitor visa</h2>
          <p>
            A visitor visa is a full application, almost always submitted online. The broad sequence is the same for most
            applicants, though the exact documents depend on your situation and the country you apply from.
          </p>
          <Steps
            steps={[
              { title: "Prepare your documents", desc: "Gather your passport, proof of funds, evidence of your purpose of travel such as a purpose of travel letter or an invitation letter from a sponsor or host in Canada, and documents showing ties to your home country. We tailor this set to your specific case." },
              { title: "Apply online and give biometrics", desc: "You submit the application online and pay the government fees, then attend a biometrics appointment where required. We confirm current fees on canada.ca." },
              { title: "Decision and travel", desc: "If approved, the visa is placed in your passport. You then travel to Canada, where a border officer decides your admission and the length of your stay." },
            ]}
          />

          <h2>How long does a visitor visa take?</h2>
          <p>
            Processing times depend on the country you apply from and on overall demand, and they change frequently. A
            visitor visa generally takes longer than an <a href="/visit/eta">eTA</a> because it is a full application
            with biometrics. Rather than rely on a fixed figure that may be out of date, check the current estimate for
            your country on canada.ca and apply well ahead of any travel. A complete application, submitted right the
            first time, is the most reliable way to avoid avoidable delays.
          </p>

          <h2>How long can you stay, and how to extend</h2>
          <p>
            Most visitors are admitted for up to <strong>six months</strong>, but the border services officer sets the
            actual period on entry. The stamp in your passport, or any document the officer gives you, tells you when you
            must leave. If you want to stay longer, you apply from within Canada for a <strong>visitor record</strong>,
            a status document that extends your visitor status and sets a new departure date.</p>
          <p>Apply before your current
            status expires; if you do, you can usually remain under maintained status while IRCC processes the request.
            A visitor record is not a visa, so it does not, on its own, let you re-enter Canada after leaving.
          </p>
          <DataTable
            headers={["Document", "What it does", "Where you apply"]}
            rows={[
              ["Visitor visa (TRV)", "Lets you travel to Canada and seek entry as a visitor", "From outside Canada, online"],
              ["Visitor record", "Extends your visitor status once you are in Canada", "From inside Canada, online"],
            ]}
            caption="A visitor visa gets you to Canada; a visitor record extends a stay once you are here."
          />

          <h2>How Wild Mountain helps with your visitor visa</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team prepares complete, accurate visitor visa
            applications. We present your purpose of travel and your ties to home in the strongest, most honest light,
            advise on dual intent where it applies, and assemble the right documents for your country and situation. We
            also prepare visitor record extensions for those already in Canada. We represent clients entirely online and
            give your Canada visitor visa application the best possible footing with IRCC, which always remains the
            decision-maker.
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
            <FeatureCard icon={Plane} title="eTA" desc="For visa-exempt air travellers: a quick, low-cost authorization linked to your passport." href="/visit/eta" />
            <FeatureCard icon={Briefcase} title="Business visitor" desc="Attend meetings, conferences and training in Canada without a work permit." href="/visit/business-visitor" />
            <FeatureCard icon={Heart} title="Super visa" desc="Long visits for parents and grandparents of Canadians, valid for up to ten years." href="/family-sponsorship/super-visa" />
            <FeatureCard icon={Clock} title="Visitor record" desc="Already in Canada and want to stay longer? Extend your status with a visitor record." href="/visit/visitor-visa" />
            <FeatureCard icon={FileText} title="Work permits" desc="A visit does not let you work. Explore the permits that do." href="/work-permits" />
            <FeatureCard icon={Ticket} title="Visit Canada" desc="See all the temporary-resident options in one place." href="/visit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Apply for your Canada visitor visa with confidence"
        sub="Tell us about your trip and our licensed team will prepare a complete application that addresses an officer's concerns, with honest advice and clear fees."
      />
    </>
  );
}
