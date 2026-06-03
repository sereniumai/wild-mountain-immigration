import type { Metadata } from "next";
import { Briefcase, Ticket, Plane, Heart, FileText, Building2 } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, AnswerBox, DataTable, Steps,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/visit/business-visitor";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Business Visitor to Canada 2026 Guide",
  titleAbsolute: "Business Visitor Visa to Canada 2026",
  description:
    "Who qualifies as a business visitor to Canada and what you can do without a work permit. RCIC-reviewed: get clear advice before you travel.",
  path: PATH,
  keywords: [
    "business visitor canada",
    "business visitor",
    "canada business visa",
    "business visitor vs work permit",
    "work permit canada",
    "visit canada for business",
  ],
});

const faqs = [
  {
    q: "What is a business visitor to Canada?",
    a: "A business visitor is someone who comes to Canada for international business activities without directly entering the Canadian labour market. Typical activities include attending meetings, conferences or trade fairs, buying Canadian goods or services on behalf of a foreign company, taking orders, or providing after-sales service. The defining feature is that the person's primary source of income and main place of business remain outside Canada. Because they are not taking a job in Canada, business visitors generally do not need a work permit, though they still need to be admissible and may need a visitor visa or eTA to travel.",
  },
  {
    q: "Do I need a work permit to come to Canada for business?",
    a: "Not always. If your activities fall within the business visitor category, you can come without a work permit. The key tests are that you do not intend to enter the Canadian labour market, your main source of income and your employer remain outside Canada, and your activities are international in scope. If you will actually perform work that competes in the Canadian labour market, or be paid by a Canadian source for hands-on work, you usually need a work permit instead. We help assess which side of the line your trip falls on.",
  },
  {
    q: "What activities are allowed as a business visitor?",
    a: "Permitted activities typically include attending business meetings, conferences, conventions and trade shows; buying Canadian goods or services for a foreign business; receiving training from a Canadian parent company; giving or receiving after-sales or after-lease service tied to a purchase or warranty agreement made outside Canada; and similar international business activities. The common thread is that the work benefits a foreign employer and does not amount to taking a job in the Canadian labour market. The precise list and conditions are set by Canada, so confirm current details on canada.ca.",
  },
  {
    q: "Do I still need a visa or eTA as a business visitor?",
    a: "Yes, the business visitor category determines whether you need a work permit, not whether you need a travel document. You still need the correct entry status for your nationality: a visitor visa (TRV) if you are from a visa-required country, or an eTA if you are a visa-exempt traveller flying to Canada. So a business visitor from a visa-required country applies for a visitor visa and notes the business purpose, while a visa-exempt business traveller applies for an eTA. Confirm your own requirement on canada.ca.",
  },
  {
    q: "What is the difference between a business visitor and a worker?",
    a: "A business visitor carries out international business activities while keeping their job, employer and income outside Canada, and does not need a work permit. A worker performs work that enters the Canadian labour market, is typically paid by a Canadian source or directly competes with Canadian workers, and needs a work permit, often supported by an LMIA or under an LMIA-exempt category. The distinction matters because doing actual work on a business visitor entry, when a permit was required, can lead to serious problems at the border or later.",
  },
  {
    q: "Can a business visitor be paid by a Canadian company?",
    a: "Generally, a true business visitor is not paid by a Canadian source for their activities; their salary continues to come from their foreign employer. Receiving payment from a Canadian company for hands-on work is a strong sign that the activity is work requiring a work permit rather than a business visit. There can be nuances, such as reimbursement of expenses, so if payment is involved at all it is worth confirming the correct category before you travel. Our team can review your arrangement against the current rules.",
  },
  {
    q: "How long can a business visitor stay in Canada?",
    a: "Like other visitors, a business visitor is generally admitted for up to six months, with the exact period decided by the border services officer on entry. Most business visits are short, lasting days or a few weeks. If a legitimate business reason means you need to stay longer as a visitor, you may be able to apply for a visitor record from inside Canada, but if the work itself grows into labour-market activity, a work permit becomes the right route instead of a longer visit.",
  },
  {
    q: "What documents should a business visitor carry?",
    a: "Helpful documents include a letter from your foreign employer describing the purpose and duration of the trip, details of any meetings, conference registrations or contracts, evidence that your salary and main employment remain abroad, and proof of ties to your home country. For after-sales service, carry the original purchase or warranty agreement showing it was made outside Canada. Carrying clear documentation helps you explain your purpose to a border officer and supports that you are a genuine business visitor, not entering the labour market.",
  },
  {
    q: "Can Wild Mountain advise on business visitor trips?",
    a: "Yes. As a CICC-regulated practice, our team assesses whether your planned activities qualify under the business visitor category or whether they require a work permit, advises on the visitor visa or eTA you need to travel, and helps you prepare supporting documentation. If a work permit turns out to be the right route, we prepare that application too. We work entirely online; our goal is to make sure you travel under the correct status and avoid a misstep.",
  },
];

export default function BusinessVisitorPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Business Visitor to Canada 2026: The Complete Guide",
            description:
              "Who qualifies as a business visitor to Canada, what is allowed without a work permit, and when a business trip needs a work permit instead. RCIC-reviewed.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-27",
          }),
          serviceLd({
            name: "Business visitor and work permit advice",
            description:
              "Who qualifies as a business visitor to Canada, what is allowed without a work permit, and when a business trip needs a work permit instead. RCIC-reviewed.",
            path: PATH,
            serviceType: "Temporary resident immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Visit Canada"
        crumbs={[
          { name: "Visit Canada", path: "/visit" },
          { name: "Business visitor", path: PATH },
        ]}
        title={<>Business <span className="text-brand">visitor to Canada</span></>}
        lede={
          <p>
            A <strong>business visitor to Canada</strong> comes for international business activities, such as meetings,
            conferences and after-sales service, without entering the Canadian labour market or needing a work permit.
            This guide explains who qualifies, what is allowed, the travel document you still need, and when a business
            trip crosses into needing a work permit.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/work-permits", label: "Explore work permits" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Briefcase className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Business trip to Canada?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We confirm whether your activities qualify as a business visitor or need a work permit, and prepare what
                you need, entirely online.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Work permits", href: "/work-permits", note: "When a business visit needs a permit" },
                { label: "Visitor visa (TRV)", href: "/visit/visitor-visa", note: "For visa-required business travellers" },
                { label: "eTA", href: "/visit/eta", note: "For visa-exempt business travellers" },
                { label: "Super visa", href: "/family-sponsorship/super-visa", note: "Long stays for parents and grandparents" },
                { label: "Visit Canada", href: "/visit", note: "All temporary-resident options" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="A business visitor to Canada comes for international business activities, such as meetings, conferences, training and after-sales service, without entering the Canadian labour market. Because of that, you do not need a work permit. The key tests are that your employer, income and main place of business stay outside Canada and your activities are international in scope. You still need the right travel document, a visitor visa or eTA, and if your trip involves actual work that competes in the Canadian labour market, a work permit is required instead."
            items={[
              <>A <strong>business visitor</strong> attends meetings, conferences and similar activities without a <a href="/work-permits">work permit</a>.</>,
              <>Your <strong>employer, income and main business</strong> must remain outside Canada.</>,
              <>You still need the correct travel document: a <a href="/visit/visitor-visa">visitor visa</a> or an <a href="/visit/eta">eTA</a>.</>,
              <>Doing actual work that competes in the Canadian labour market requires a <strong>work permit</strong>, not a business visit.</>,
              <>Carry a clear <strong>employer letter</strong> and documents that show the international purpose of your trip.</>,
            ]}
          />

          <AnswerBox>
            A <strong>business visitor to Canada</strong> comes for international business activities, such as meetings,
            conferences, training or after-sales service, without entering the Canadian labour market, and therefore
            does not need a <a href="/work-permits">work permit</a>. Your employer and income must stay outside Canada.
            You still need the right travel document, a <a href="/visit/visitor-visa">visitor visa</a> or an{" "}
            <a href="/visit/eta">eTA</a>, and if you will perform actual Canadian work, a work permit is required
            instead.
          </AnswerBox>

          <h2>What is a business visitor to Canada?</h2>
          <p>
            A <strong>business visitor to Canada</strong> is a foreign national who comes for international business
            activities without directly entering the Canadian labour market. This status is often loosely called a{" "}
            <strong>business visa for Canada</strong>, although it is really a category that lets you visit Canada for
            business without a separate permit. The category exists because not every work-related trip amounts to
            taking a job in Canada.</p>
          <p>Someone flying in for a conference or convention, to negotiate a contract, to buy
            Canadian goods for a foreign company, or to service equipment under a foreign warranty or after-lease
            agreement is doing business that benefits an employer outside Canada, not competing for Canadian work.
            Because of that, business visitors generally do not need a <a href="/work-permits">work permit</a>, although
            they still need to be admissible and to hold the right travel document for their nationality.
          </p>

          <h2>Who qualifies as a business visitor?</h2>
          <p>
            To qualify, your situation must satisfy the core tests that define a business visitor. In broad terms, you
            should be able to show that:
          </p>
          <ul>
            <li>you do not intend to enter the Canadian labour market;</li>
            <li>your main source of income and your principal place of business remain outside Canada;</li>
            <li>your activities are international in scope, benefiting a foreign employer or business;</li>
            <li>you meet the general requirements to enter Canada, including admissibility and adequate funds.</li>
          </ul>
          <p>
            The defining idea is that you enter as a temporary resident with a clear business purpose: you keep your
            job abroad and come to Canada for a specific, short-term reason such as joining a meeting as one of many
            conference or convention attendees. If those tests are not met, the activity is likely work requiring a
            permit.
          </p>

          <h2>What is allowed without a work permit?</h2>
          <p>
            The business visitor category covers a defined set of activities. Common examples include the following,
            though the precise rules are set by Canada, so confirm current details on canada.ca.
          </p>
          <DataTable
            headers={["Activity", "Typically allowed as a business visitor?"]}
            rows={[
              ["Attending meetings, conferences and trade shows", "Yes"],
              ["Buying Canadian goods or services for a foreign company", "Yes"],
              ["Taking orders for goods or services", "Yes"],
              ["After-sales or after-lease service tied to a foreign purchase or warranty", "Yes, within the agreement terms"],
              ["Training received from a Canadian parent or affiliate", "Often yes, within limits"],
              ["Performing hands-on work paid by a Canadian source", "No, this needs a work permit"],
              ["Filling a job in the Canadian labour market", "No, this needs a work permit"],
            ]}
            caption="A guide to common activities. Where an activity crosses into Canadian labour-market work, a work permit is required."
          />

          <Callout type="brand" title="The line that matters">
            The deciding question is whether you are <strong>entering the Canadian labour market</strong>. Attending a
            conference or servicing equipment under a foreign warranty is business visiting. Taking a job, being paid by
            a Canadian source for hands-on work, or doing work that competes with Canadian workers is{" "}
            <strong>work</strong>, and needs a <a href="/work-permits">work permit</a>. When the line is unclear, the
            right step is to work with a licensed RCIC to confirm the correct status before you travel.
          </Callout>

          <h2>Do you still need a visa or eTA?</h2>
          <p>
            Yes. The business visitor category answers whether you need a <strong>work permit</strong>, not whether you
            need a <strong>travel document</strong>. To visit Canada for business you still need the correct entry
            status for your nationality: a <a href="/visit/visitor-visa">visitor visa (TRV)</a> if you are from a
            visa-required country, or an <a href="/visit/eta">eTA</a> if you are a visa-exempt traveller flying to
            Canada. A business visitor from a visa-required country applies for a visitor visa and notes the business
            purpose; a visa-exempt business traveller applies for an eTA. Confirm your own requirement on canada.ca.
          </p>

          <h2>Business visitor vs work permit</h2>
          <p>
            Getting this distinction right is the most important part of any business trip to Canada. The table below
            sets the two side by side.
          </p>
          <DataTable
            headers={["Feature", "Business visitor", "Worker (work permit)"]}
            rows={[
              ["Enters the Canadian labour market", "No", "Yes"],
              ["Main income and employer", "Remain outside Canada", "Often a Canadian source"],
              ["Needs a work permit", "No", "Yes (LMIA-based or LMIA-exempt)"],
              ["Travel document", "Visitor visa or eTA", "Work permit, plus visa or eTA as applicable"],
              ["Typical purpose", "Meetings, conferences, after-sales service", "Performing a job or contract in Canada"],
            ]}
            caption="If your activities cross into Canadian labour-market work, you need a work permit rather than a business visit."
          />
          <p>
            If your trip turns out to need a permit, our <a href="/work-permits">work permits</a> guide explains the
            options, including <a href="/work-permits/lmia">LMIA-based</a> permits and LMIA-exempt work-permit
            categories such as the <a href="/work-permits/intra-company-transfer">intra-company transfer</a>, the C11
            significant-benefit stream, and treaty or GATS-based business entry. If your trip needs a permit rather
            than a business visit, one of these routes will usually apply.
          </p>

          <h2>How to prepare for a business visit</h2>
          <p>
            A business visit needs no work permit application, but preparation still matters, because a border officer
            will want to understand why you are coming and be satisfied you are not entering the labour market.
          </p>
          <Steps
            steps={[
              { title: "Confirm the category", desc: "We assess your activities against the business visitor tests to confirm you qualify, or flag that a work permit is needed before you travel." },
              { title: "Arrange the travel document", desc: "We confirm whether you need a visitor visa or an eTA for your nationality and help you apply, noting the business purpose." },
              { title: "Assemble supporting documents", desc: "We help prepare an employer letter, meeting or contract details, and proof your income and employment remain abroad, so your purpose is clear at the border." },
            ]}
          />

          <h2>What documents to carry</h2>
          <p>
            Carrying clear documentation helps you explain your trip on arrival. Useful items include a letter from your
            foreign employer setting out the purpose and length of the visit, registrations or invitations for the
            meetings or conference, contracts or order details, proof that your salary and main job remain outside
            Canada, and, for after-sales service, the original purchase or warranty agreement made abroad. Good
            documentation supports that you are a genuine business visitor rather than someone entering the Canadian
            labour market.
          </p>

          <h2>How Wild Mountain helps business travellers</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team assesses whether your planned activities
            qualify under the business visitor category or whether they require a work permit, advises on the{" "}
            <a href="/visit/visitor-visa">visitor visa</a> or <a href="/visit/eta">eTA</a> you need to travel, and helps
            you prepare supporting documentation. If a permit is the right route, we prepare that application too. We
            work entirely online; our role is to make sure you enter as a business visitor to Canada under the correct
            status, or hold the right work permit if your trip needs one.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Related routes</h2>
          <p className="mt-3 text-ink-soft">Explore work permits and the other ways to come to Canada.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={FileText} title="Work permits" desc="When a business trip crosses into Canadian work, explore the permit routes that apply." href="/work-permits" />
            <FeatureCard icon={Building2} title="Intra-company transfer" desc="Move key staff to a Canadian office under the International Mobility Program." href="/work-permits/intra-company-transfer" />
            <FeatureCard icon={Ticket} title="Visitor visa (TRV)" desc="For visa-required business travellers: eligibility and the application steps." href="/visit/visitor-visa" />
            <FeatureCard icon={Plane} title="eTA" desc="For visa-exempt business travellers flying to Canada: a quick, low-cost authorization." href="/visit/eta" />
            <FeatureCard icon={Heart} title="Super visa" desc="Long visits for parents and grandparents of Canadians, valid for up to ten years." href="/family-sponsorship/super-visa" />
            <FeatureCard icon={Briefcase} title="Visit Canada" desc="See all the temporary-resident options in one place." href="/visit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Coming to Canada for business?"
        sub="Tell us about your trip and our licensed team will confirm whether you qualify as a business visitor or need a work permit, with honest advice and clear fees."
      />
    </>
  );
}
