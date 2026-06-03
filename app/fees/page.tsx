import type { Metadata } from "next";
import { ShieldCheck, FileSearch, ClipboardCheck, BadgeCheck } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult, site } from "@/lib/site";

const PATH = "/fees";
const UPDATED = "May 2026";

/* Published professional fees (CAD). Government fees are separate. Ranges use an
   en dash. This single source feeds both the on-page tables and the JSON-LD. */
type FeeRow = [string, string];
const CONSULTATION: FeeRow = ["Consultation (video conference)", "$120"];

const fileManagement: { group: string; rows: FeeRow[] }[] = [
  { group: "Permanent residence: Express Entry", rows: [
    ["Express Entry profile", "$1,000"],
    ["Canadian Experience Class", "$3,000"],
    ["Federal Skilled Worker", "$3,500"],
    ["Federal Skilled Trades", "$3,500"],
  ] },
  { group: "Permanent residence: provincial nominee (PNP) + PR", rows: [
    ["Alberta (AAIP), by stage of application", "$3,500 – $4,500"],
    ["British Columbia (BC PNP), by stage", "$4,500 – $5,000"],
    ["Ontario (OINP), by stage", "$4,500 – $5,000"],
    ["Atlantic Immigration Program", "$4,500"],
  ] },
  { group: "Permanent residence: accompanying family", rows: [
    ["Spouse / common-law partner", "$1,200"],
    ["Dependent child", "$750"],
  ] },
  { group: "Family sponsorship", rows: [
    ["Inland (In-Canada Class) spousal sponsorship", "$4,000"],
    ["Sponsorship open work permit", "$500 – $750"],
    ["Outland (Family Class) spousal sponsorship", "$4,500"],
    ["Parent / grandparent sponsorship", "$2,500"],
    ["Accompanying spouse / common-law partner", "$1,250"],
    ["Accompanying dependent child", "$750"],
  ] },
  { group: "Work permits", rows: [
    ["Labour Market Impact Assessment (LMIA), up to 4 workers", "$4,000 – $4,750"],
    ["LMIA-based work permit", "$1,000"],
    ["Working Holiday (IEC)", "$850 – $1,000"],
    ["Young Professionals (IEC)", "$1,000 – $1,200"],
    ["Employer-specific, LMIA-exempt", "$1,000 – $3,000"],
    ["Spousal open work permit", "$850"],
    ["Post-Graduation Work Permit (PGWP)", "$1,000"],
    ["Bridging open work permit (BOWP)", "$500 – $750"],
  ] },
  { group: "Study permits", rows: [
    ["Initial study permit (no prior refusals)", "$850"],
    ["Study permit extension", "$600"],
  ] },
  { group: "Visit Canada", rows: [
    ["Temporary Resident Visa (TRV)", "$850"],
    ["Visitor extension (inside Canada)", "$750"],
    ["TRV renewal (inside Canada)", "$750"],
    ["Super Visa, per parent or grandparent", "$1,200"],
  ] },
  { group: "Canadian citizenship", rows: [
    ["Grant of Canadian citizenship", "$1,000"],
    ["Proof of Canadian citizenship", "$850"],
  ] },
];

const fileReview: { group: string; rows: FeeRow[] }[] = [
  { group: "Permanent residence: Express Entry", rows: [
    ["Express Entry profile", "$350"],
    ["Canadian Experience Class", "$850"],
    ["Federal Skilled Worker", "$950"],
    ["Federal Skilled Trades", "$950"],
  ] },
  { group: "Permanent residence: provincial nominee (PNP) + PR", rows: [
    ["Alberta (AAIP), by stage of application", "$850 – $1,200"],
    ["British Columbia (BC PNP), by stage", "$850 – $1,500"],
    ["Ontario (OINP), by stage", "$850 – $1,500"],
    ["Atlantic Immigration Program", "$850"],
  ] },
  { group: "Permanent residence: accompanying family", rows: [
    ["Spouse / common-law partner", "$500"],
    ["Dependent child", "$300"],
  ] },
  { group: "Family sponsorship", rows: [
    ["Inland (In-Canada Class) spousal sponsorship", "$850"],
    ["Outland (Family Class) spousal sponsorship", "$950"],
    ["Parent / grandparent sponsorship", "$850"],
    ["Accompanying spouse / common-law partner", "$500"],
    ["Accompanying dependent child", "$300"],
  ] },
];

function toOffer(name: string, fee: string, tier: string) {
  const parts = fee.replace(/[$,]/g, "").split(/[–-]/).map((s) => s.trim()).filter(Boolean);
  const base = { "@type": "Offer", name: `${name} (${tier})`, priceCurrency: "CAD", category: tier, url: `${site.url}${PATH}` };
  return parts.length === 2
    ? { ...base, priceSpecification: { "@type": "PriceSpecification", priceCurrency: "CAD", minPrice: Number(parts[0]), maxPrice: Number(parts[1]) } }
    : { ...base, price: Number(parts[0]) };
}
const feeOffers = [
  toOffer(CONSULTATION[0], CONSULTATION[1], "Consultation"),
  ...fileManagement.flatMap((g) => g.rows.map((r) => toOffer(r[0], r[1], "File Management"))),
  ...fileReview.flatMap((g) => g.rows.map((r) => toOffer(r[0], r[1], "File Review"))),
];

export const metadata: Metadata = pageMeta({
  title: "Immigration Consultant Cost",
  titleAbsolute: "Immigration Consultant Cost & Fees Canada | RCIC",
  description:
    "What does an immigration consultant cost in Canada? See our RCIC fees by program, the $120 consultation (free for spousal sponsorship) and a fixed quote.",
  path: PATH,
  keywords: [
    "immigration consultant cost",
    "immigration consultant fees canada",
    "how much does an immigration consultant cost",
    "rcic fees alberta",
    "are immigration consultants worth it",
  ],
});

const faqs = [
  {
    q: "How much does an immigration consultant cost in Canada?",
    a: "There is no single fixed price, professional fees depend on the program and the complexity of your case. A straightforward visitor extension costs far less than a multi-applicant permanent-residence file. Rather than publish a flat number that rarely fits a real case, we quote a fixed, written fee once we understand your situation, so you know the full scope before you commit. Our File Review tier is a lower-cost alternative to full File Management.",
  },
  {
    q: "How much is the consultation, and is it ever free?",
    a: "Our one-off consultation is $120. It is free for spousal sponsorship cases, and for every other service we waive the $120 entirely when you proceed with full File Management. The consultation is where a licensed RCIC reviews your situation, maps your best pathway, and gives you a clear, written, fixed-scope quote, so you know the full cost before you commit.",
  },
  {
    q: "How do I get a quote for my case?",
    a: "Getting a quote is simple and there is no obligation. Tell us about your situation through our contact page or by phone, and once we understand your case we come back to you with the right service tier and a clear, written, fixed-scope fee before you commit to anything. Everything is handled online, by video call and secure document sharing, so it makes no difference where in Canada or the world you are.",
  },
  {
    q: "What is the difference between File Management and File Review fees?",
    a: "File Management is full service: we prepare and submit your entire application and represent you with IRCC, so the professional fee is higher because we do the work. File Review is a lower-cost option where you prepare your own application and our RCIC reviews it for errors and missed opportunities before you submit. You are paying for expert review time rather than full file preparation.",
  },
  {
    q: "Are consultant fees the same as government fees?",
    a: "No. Our professional fee pays for our team's time, expertise and representation. Government fees, such as IRCC processing fees, biometrics, the right-of-permanent-residence fee and AAIP fees in Alberta, are separate, set by government, and paid directly to the relevant authority. We always itemise the two so you can see exactly what is our fee and what is a third-party cost.",
  },
  {
    q: "Are immigration consultants worth it?",
    a: "For many applicants, yes. Canadian immigration is detailed and unforgiving of small errors, and a single mistake, a wrong NOC code, weak proof of funds, a missed deadline, can cause months of delay or a refusal. A licensed RCIC builds the strongest application, represents you with IRCC, and flags issues before they become problems. If you are confident preparing your own application, our lower-cost File Review still gives you an expert second set of eyes.",
  },
  {
    q: "Is an immigration consultant cheaper than a lawyer?",
    a: "Generally, Regulated Canadian Immigration Consultants charge less than immigration lawyers for comparable application work, while being fully licensed and regulated for immigration and citizenship matters. A licensed RCIC handles standard IRCC and provincial applications. Some matters that go before the Immigration and Refugee Board or the courts call for a lawyer; we will tell you honestly if your case needs one.",
  },
  {
    q: "How do I avoid 'ghost consultants' and verify an RCIC?",
    a: "A ghost consultant is an unlicensed person who gives immigration advice for a fee, often without putting their name on your forms, which is illegal and risky. Only a licensed RCIC, a lawyer or a notary in good standing may represent you for a fee. Always ask for the consultant's RCIC number and check it on the public CICC register. Wild Mountain Immigration's CICC licence number is R706497, and we encourage you to verify it.",
  },
  {
    q: "Will my fee change once we start?",
    a: "Our fees are fixed-scope. We agree the work and the price in writing up front, so there are no surprise charges for the agreed scope. If your circumstances change materially, for example, a new dependant is added or your case shifts to a different program, we will discuss and agree any change with you before any additional work begins.",
  },
];

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Immigration Consultant Cost & Fees in Canada, Explained",
            description:
              "How much does an immigration consultant cost in Canada? RCIC fees in Alberta, what drives the price, our two service tiers and government fees explained.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Immigration consultant fee structure",
            description:
              "How much does an immigration consultant cost in Canada? RCIC fees in Alberta, what drives the price, our two service tiers and government fees explained.",
            path: PATH,
            serviceType: "Immigration consulting fees",
          }),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Canadian immigration consultant fees",
            serviceType: "Immigration consulting",
            provider: { "@id": `${site.url}/#org` },
            areaServed: { "@type": "Country", name: "Canada" },
            url: `${site.url}${PATH}`,
            offers: feeOffers,
          },
        ]}
      />

      <PageHero
        eyebrow="Fees & Pricing"
        crumbs={[{ name: "Fees", path: PATH }]}
        title={<>Immigration consultant cost, <span className="text-brand">explained honestly</span></>}
        lede={
          <p>
            <strong>An immigration consultant&rsquo;s cost in Canada typically runs from a few hundred to several thousand
            dollars</strong>, because professional fees scale with the program and the complexity of your case. Below we
            explain what actually drives the immigration consultant cost, our $120 consultation (free for spousal
            sponsorship), the two ways you can work with us, and how our professional fee differs from the separate
            government disbursements set by IRCC and Alberta.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/about", label: "Meet your RCIC" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <ShieldCheck className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Get a fixed quote</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us about your case and get a clear, written, fixed-scope fee, no surprises.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
                          </div>
            <RelatedLinks
              links={[
                { label: "Get started", href: "/contact", note: "Tell us about your case for a fixed quote" },
                { label: "About us", href: "/about", note: "Licence #R706497, CICC-regulated" },
                { label: "Express Entry", href: "/express-entry", note: "Our most popular PR route" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The immigration consultant cost in Canada depends on the program you apply under and how complex your case is, so there is no single flat price. A Regulated Canadian Immigration Consultant&rsquo;s professional fees typically range from a few hundred to several thousand dollars. Wild Mountain Immigration charges a $120 consultation (free for spousal sponsorship, and waived with full File Management), then a fixed, written fee set out in a retainer agreement for full File Management or a lower-cost File Review. Professional fees are separate from government disbursements such as IRCC processing and the RPRF, and everything is handled online by a licensed RCIC."
            items={[
              <>There is <strong>no single flat price</strong>, immigration consultant fees in Canada scale with the program and how complex your case is.</>,
              <>The <strong>consultation is $120</strong>, free for spousal sponsorship and waived when you proceed with full File Management.</>,
              <>We work two ways: full <strong>File Management</strong> (we do everything) and lower-cost <strong>File Review</strong> (you prepare, our RCIC reviews).</>,
              <>Everything runs <strong>online</strong>, by video call and secure document sharing, so where you live makes no difference to your fee.</>,
              <>Our professional fee is <strong>separate from government fees</strong> (IRCC, biometrics, AAIP) and every fee is <strong>fixed-scope, agreed in writing</strong> up front.</>,
            ]}
          />

          <h2>How much does an immigration consultant cost in Canada?</h2>
          <p>
            The honest answer to <strong>how much does an immigration consultant cost</strong> is: it depends on the
            work involved. A short visitor-record extension is a small piece of work; a permanent-residence application
            for a family of four, with foreign documents and a provincial nomination, is a large one. Anyone who quotes
            a single flat figure for &ldquo;immigration&rdquo; without knowing your case is guessing, and you may end up
            paying for scope you do not need, or discovering hidden work later.
          </p>
          <p>
            Rather than publish prices that rarely match a real file, we quote a <strong>fixed, written fee</strong> once
            we understand your situation. That way you see the full scope and the full cost before you commit a dollar.
            Below, we set out exactly what drives the number so you can judge a fair fee, wherever you get your quote.
          </p>

          <h2>What affects the cost of immigration consultant fees?</h2>
          <p>
            Professional fees reflect time, complexity and risk. Several factors push the cost up or down, and
            understanding them helps you compare quotes sensibly when you look at <strong>immigration consultant fees
            in Canada</strong>:
          </p>
          <ul>
            <li><strong>The program.</strong> Express Entry, a provincial nominee program, family sponsorship and work or study permits each involve different forms, evidence and steps.</li>
            <li><strong>Number of applicants.</strong> A principal applicant plus a spouse and dependants means more documentation and more review.</li>
            <li><strong>Complexity.</strong> Complicated work or travel histories, multiple family members, or hard-to-document evidence all take more time to prepare properly.</li>
            <li><strong>Service tier.</strong> Full File Management costs more than a File Review, because we do the preparation rather than check yours.</li>
            <li><strong>Stage and urgency.</strong> A tight deadline or a time-sensitive intake is more involved than starting a routine application early.</li>
          </ul>
          <p>
            None of this is unique to Alberta, but as a Canmore-based practice, our <strong>RCIC fees in Alberta</strong>
            {" "}are set the same transparent way for clients here in the Bow Valley, in Calgary, and across Canada and
            overseas.
          </p>

          <h2>Our two ways to work: File Management vs File Review</h2>
          <p>
            We keep pricing simple by offering two clear service tiers. Most clients choose full File Management for
            peace of mind; others who are confident with paperwork prefer the lower-cost File Review. Both are delivered
            by the same licensed RCIC.
          </p>
          <DataTable
            headers={["Service tier", "What's included", "Best for"]}
            rows={[
              [
                "File Management (full service)",
                "We prepare and submit your entire application, forms, document strategy, submission letter and representation with IRCC from start to finish.",
                "Anyone who wants it done properly with minimal stress, or who has a complex or higher-stakes case.",
              ],
              [
                "File Review (lower cost)",
                "You prepare your own application; our RCIC reviews it for errors, gaps and missed opportunities, and gives you written feedback before you submit.",
                "Confident, organised applicants with a straightforward case who want an expert second set of eyes.",
              ],
            ]}
            caption="Two ways to work with Wild Mountain Immigration. Both are delivered by a licensed RCIC."
          />
          <p>
            Not sure which fits? Tell us about your case and we will recommend the tier that gives you the right
            balance of cost and support.
          </p>

          <h2 id="published-fees">Our published immigration consultant fees</h2>
          <p>
            Here are our current <strong>professional fees by program</strong>, for both service tiers. These are
            professional fees only; <strong>government fees</strong> (IRCC processing, biometrics, the
            right-of-permanent-residence fee and AAIP fees) are separate and paid directly to the authority. Fees are
            accurate at the time of publishing and may change, and we always confirm a fixed, written quote before any
            work begins.
          </p>
          <DataTable
            headers={["Consultation", "Fee (CAD)"]}
            rows={[CONSULTATION]}
            caption="A one-off consultation to map your best pathway with a licensed RCIC."
          />
          <Callout type="brand" title="Our consultation fee policy">
            A one-off consultation is <strong>$120</strong>. It is <strong>free for spousal sponsorship</strong> cases,
            and for every other service we <strong>waive the $120 entirely when you proceed with full File
            Management</strong>. You always know the cost before you book, and the consultation is where we map your best
            pathway and quote your fixed, written fee.
          </Callout>

          <h3>File Management fees (full service)</h3>
          <p>
            Our most popular option: we prepare and submit your entire application and represent you with IRCC from
            start to finish.
          </p>
          {fileManagement.map((g) => (
            <DataTable key={g.group} headers={[g.group, "Fee (CAD)"]} rows={g.rows} />
          ))}

          <h3>File Review fees (lower cost)</h3>
          <p>
            You prepare your own application and our RCIC reviews it for errors and missed opportunities before you
            submit, the peace of mind of an expert at a lower cost.
          </p>
          {fileReview.map((g) => (
            <DataTable key={g.group} headers={[g.group, "Fee (CAD)"]} rows={g.rows} />
          ))}
          <Callout type="info" title="Professional fees only, government fees are separate">
            The amounts above are our professional fees. They do not include IRCC and provincial government fees, which
            are set by government, can change, and are paid directly to the relevant authority. We itemise both in your
            written quote.
          </Callout>

          <h2>How to get started</h2>
          <p>
            Getting a quote is simple and there is no obligation. You tell us about your situation through our{" "}
            <a href="/contact">contact page</a> or by phone, we assess your case, and we come back to you with the
            right service tier and a clear, written, fixed-scope fee before you commit to anything. Everything is
            handled online, by video call and secure document sharing, so it makes no difference where in Canada or
            the world you are.
          </p>

          <h2>Consultant fees vs government fees</h2>
          <p>
            One of the most common points of confusion is the difference between what you pay <em>us</em> and what you
            pay the <em>government</em>. They are completely separate, and we always itemise them.
          </p>
          <ul>
            <li><strong>Our professional fee</strong> pays for our team&apos;s time, expertise, strategy and representation. It is the fee we agree in writing in your retainer agreement.</li>
            <li><strong>Government fees and disbursements</strong> are set by government and paid directly to them, for example IRCC application and processing fees, biometrics, the right-of-permanent-residence fee (RPRF), and Alberta Advantage Immigration Program (AAIP) fees where applicable.</li>
          </ul>
          <p>
            In short, it is a question of <strong>professional fee vs disbursements</strong>: the professional fee is ours
            to earn, while disbursements are third-party costs we simply pass through at cost. Where a larger file makes a
            single up-front payment difficult, we can also discuss a staged <strong>payment plan</strong> tied to the
            milestones in your retainer agreement.
          </p>
          <Callout type="info" title="Government fees can change">
            Third-party government fees are set by IRCC and the province, not by us, and they can change. We point you to
            the current official amounts so your budget reflects the latest figures rather than an out-of-date number.
          </Callout>
          <p>
            Keeping the two separate means our quote is genuinely transparent: you can see precisely what is our
            professional fee and what is an unavoidable government cost that any applicant would pay.
          </p>

          <h2>Are immigration consultants worth it?</h2>
          <p>
            Whether <strong>immigration consultants are worth it</strong> comes down to risk and value. Canadian
            immigration is detailed and unforgiving of small mistakes. A wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr> code, weak proof of funds, an inconsistent work
            history or a missed deadline can cost you months, or a refusal that follows you into future applications.
          </p>
          <p>
            A licensed RCIC builds the strongest possible application, chooses the right program, represents you with
            IRCC, and catches problems before they reach a decision-maker. For many people the cost of doing it right
            once is far lower than the cost of a refusal and a second attempt. And if you would rather do the work
            yourself, our lower-cost <a href="/contact">File Review</a> still puts an expert between you and an
            avoidable mistake.
          </p>

          <h2>How to avoid &ldquo;ghost consultants&rdquo; and verify an RCIC</h2>
          <p>
            A &ldquo;ghost consultant&rdquo; is an unlicensed person who charges for immigration advice while staying off
            your paperwork, which is illegal and leaves you with no protection if things go wrong. Only a licensed RCIC,
            a lawyer or a notary in good standing may represent you for a fee. Protect yourself before you pay anyone:
          </p>
          <ul>
            <li><strong>Ask for their RCIC number</strong> and the name that will appear on your forms.</li>
            <li><strong>Check the public CICC register</strong> to confirm the licence is valid and in good standing.</li>
            <li><strong>Insist on a written agreement</strong> that sets out the scope and the fee.</li>
            <li><strong>Be wary of guarantees and &ldquo;money-back&rdquo; promises.</strong> No honest professional can guarantee an outcome or sell a money-back guarantee on approval, because outcomes are decided by IRCC or the province, not your representative.</li>
          </ul>
          <p>
            Wild Mountain Immigration works under our lead RCIC, Nicola Wightman, licence <strong>#R706497</strong>,
            regulated by the College of Immigration and Citizenship Consultants (CICC). With us, the immigration consultant
            cost is always a fixed, written figure set out in a clear retainer agreement, with professional fees and
            government disbursements itemised separately, so you know exactly what you are paying for before you commit.
            You can verify our standing on the CICC register at any time, we encourage it. Learn more{" "}
            <a href="/about">about Nicola and our practice</a>.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Transparent from the first conversation</h2>
          <p className="mt-3 text-ink-soft">No flat-rate guesswork, just a clear, fixed-scope fee once we understand your case.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={ClipboardCheck} title="Fixed-scope fees" desc="We agree the work and the price in writing up front. No surprise charges for the agreed scope." />
            <FeatureCard icon={FileSearch} title="Two ways to work" desc="Full File Management or a lower-cost File Review, whichever fits your case and budget." href="/contact" />
            <FeatureCard icon={BadgeCheck} title="Licensed & verifiable" desc="A Regulated Canadian Immigration Consultant, CICC-regulated, verify licence #R706497 any time." href="/about" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Get a clear, fixed quote for your case"
        sub="Get started with a licensed RCIC and find out exactly what your immigration journey will cost, professional fees and government fees, itemised."
      />
    </>
  );
}
