import type { Metadata } from "next";
import { Globe2, Stamp, BookOpen, Rocket } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/citizenship/citizenship-by-descent";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canadian Citizenship by Descent 2026",
  titleAbsolute: "Canadian Citizenship by Descent 2026",
  description:
    "Canadian citizenship by descent explained: the first-generation limit, Bill C-3, Lost Canadians and proof of citizenship. Check your status with an RCIC.",
  path: PATH,
  keywords: [
    "canadian citizenship by descent",
    "bill c-3",
    "first-generation limit",
    "lost canadians",
    "proof of citizenship",
  ],
});

const faqs = [
  {
    q: "Am I a Canadian citizen by descent?",
    a: "You may be a Canadian citizen by descent if you were born outside Canada to at least one parent who was a Canadian citizen at the time of your birth, whether that parent was born in Canada or naturalised here. Until recently, a first-generation limit cut this off for many people born abroad to a Canadian parent who was also born abroad. Under Bill C-3 (in force per canada.ca), that limit has been addressed and many previously excluded people are now recognised as citizens. Whether you qualify depends on your exact family facts and dates, so confirm the current rules on canada.ca and book a consultation for an assessment.",
  },
  {
    q: "What is the first-generation limit?",
    a: "The first-generation limit was a rule that, in general, only allowed Canadian citizenship by descent to pass to the first generation born outside Canada. In other words, a Canadian who was themselves born abroad could not automatically pass citizenship to their own child born abroad. This rule left many families without status they expected. Bill C-3 changes how the limit works by allowing citizenship to pass beyond the first generation in certain cases, using a substantial-connection test. Confirm the current rules on canada.ca.",
  },
  {
    q: "What is Bill C-3 and is it in force?",
    a: "Bill C-3 is the legislation that updates Canada's citizenship-by-descent rules, including the first-generation limit, and introduces a substantial-connection test so citizenship can pass beyond the first generation in certain cases. We describe it as current/in force, but because the details have been evolving you should always confirm the live status and rules directly on canada.ca before relying on them. This page is general information, not a legal determination of your status.",
  },
  {
    q: "Who are the Lost Canadians?",
    a: "Lost Canadians is the informal name for people who believed they were Canadian, or expected to be, but were excluded by past citizenship laws, including the first-generation limit and older rules about birth abroad, parentage and timing. Many Lost Canadians are now recognised as citizens, or have a clearer path to be recognised, following the Bill C-3 changes. If you think you might be a Lost Canadian, it is worth checking, because recognition can affect passports, work and benefits.",
  },
  {
    q: "How do I prove I am a Canadian citizen by descent?",
    a: "Citizenship by descent is not granted by an application, if you qualify, you are already a citizen by operation of law. To prove it, you apply to IRCC for proof of citizenship, also called a citizenship certificate. The certificate is a secure document that confirms your status; you can then use it to apply for a Canadian passport. Demand has been high since the descent rules changed, so processing can be slow, check current processing times on canada.ca.",
  },
  {
    q: "Is citizenship by descent the same as a citizenship grant?",
    a: "No. Citizenship by descent is automatic citizenship you receive at birth (or by operation of law) because of a Canadian parent, there is no test, no physical-presence requirement and no oath for you. A citizenship grant is the process a permanent resident goes through to become a citizen, which does involve physical presence, the citizenship test and the oath. If you are a citizen by descent, you simply apply for proof of citizenship rather than going through the grant process.",
  },
  {
    q: "Does citizenship by descent affect dual citizenship?",
    a: "Canada permits dual (and multiple) citizenship, so being recognised as a Canadian by descent does not, on Canada's side, require you to give up another nationality. However, your other country may have its own rules, some nations restrict dual citizenship, so confirm with that government. Note that, once recognised, a dual citizen generally needs a valid Canadian passport to board a flight to or from Canada.",
  },
  {
    q: "Can a Regulated Canadian Immigration Consultant help with citizenship by descent?",
    a: "Yes. As a standard immigration practice, an RCIC can assess whether your family facts likely make you a citizen by descent under the current rules, explain how the first-generation limit and Bill C-3 apply to your case, and prepare and review your proof-of-citizenship application. We do not handle matters before the Immigration and Refugee Board or the courts, we are not affiliated with the government, and we never guarantee an outcome.",
  },
];

export default function CitizenshipByDescentPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Canadian Citizenship by Descent 2026, Bill C-3, the First-Generation Limit & Lost Canadians",
            description:
              "Canadian citizenship by descent: how it passes from a Canadian parent, the first-generation limit, Bill C-3, Lost Canadians and proof of citizenship.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Canadian citizenship by descent assessment",
            description:
              "Canadian citizenship by descent: how it passes from a Canadian parent, the first-generation limit, Bill C-3, Lost Canadians and proof of citizenship.",
            path: PATH,
            serviceType: "Citizenship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Citizenship & PR Status"
        crumbs={[
          { name: "Citizenship", path: "/citizenship" },
          { name: "Citizenship by Descent", path: PATH },
        ]}
        title={<>Canadian citizenship <span className="text-brand">by descent</span></>}
        lede={
          <p>
            <strong>Canadian citizenship by descent is citizenship passed from a Canadian parent</strong> to a
            child born outside Canada, and the rules have just changed under Bill C-3.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/citizenship", label: "Citizenship requirements" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Globe2 className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Think you might be a citizen by descent?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">A licensed RCIC can assess your family&apos;s facts and help you claim proof of citizenship.</p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canadian citizenship requirements", href: "/citizenship", note: "The full 2026 eligibility guide" },
                { label: "Citizenship requirements detail", href: "/citizenship/requirements", note: "Presence, language, tax and more" },
                { label: "How to apply for citizenship", href: "/citizenship/citizenship-application", note: "The full grant application" },
                { label: "Canadian citizenship test", href: "/citizenship/citizenship-test", note: "For citizenship by grant" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "All permanent-residence routes" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Canadian citizenship by descent is citizenship passed automatically at birth from a Canadian parent to a child born outside Canada. There is no test, oath or physical-presence requirement for the child, so if you qualify you are already a citizen and simply apply for proof of citizenship. A first-generation limit once blocked descent past the first generation born abroad, but Bill C-3, with royal assent in November 2025, now extends it via a substantial-connection test. Confirm the current law on canada.ca before relying on it."
            items={[
              <>Citizenship by descent is <strong>automatic citizenship</strong> passed from a Canadian parent to a child born abroad, no test, no oath.</>,
              <>The old <strong>first-generation limit</strong> generally blocked descent past the first generation born outside Canada.</>,
              <><strong>Bill C-3</strong> extends citizenship beyond the first generation in certain cases via a <strong>substantial-connection test</strong>.</>,
              <>Many <strong>&ldquo;Lost Canadians&rdquo;</strong> are now recognised as citizens, it is worth checking your status.</>,
              <>If you qualify, you are <em>already</em> a citizen, you apply for <strong>proof of citizenship</strong> (a citizenship certificate).</>,
            ]}
          />

          <h2>What is Canadian citizenship by descent?</h2>
          <p>
            <strong>Canadian citizenship by descent</strong> is citizenship you receive automatically at birth
            because of a Canadian parent, even though you were born outside Canada. If at least one of your
            parents was a Canadian citizen when you were born, whether they were born in Canada or became
            Canadian by naturalisation here, you may be a citizen by descent. According to IRCC, the
            descent rules were updated by <strong>Bill C-3</strong> (source: canada.ca, &ldquo;Citizenship
            rules: changes to the law&rdquo;, current to May 2026). Importantly, this is information
            only and not a determination of your status.
          </p>
          <p>
            Descent is different from a citizenship grant. With a grant, a permanent resident earns citizenship
            by meeting the <a href="/citizenship">Canadian citizenship requirements</a>, physical presence, the
            <a href="/citizenship/citizenship-test"> citizenship test</a> and the oath. With descent, you do not
            apply to <em>become</em> a citizen at all: if you qualify, you already are one, and you simply apply
            for <strong>proof of citizenship</strong>. As a standard immigration practice we advise on citizenship
            by descent and by grant, but we do not handle matters before the Immigration and Refugee Board or the
            courts, we are not affiliated with the government, and we never guarantee an outcome.
          </p>
          <DataTable
            headers={["Are you a citizen by descent?", "Likely position (confirm on canada.ca)"]}
            rows={[
              ["Born abroad; one parent born in Canada", "Generally a citizen by descent (first generation born abroad)."],
              ["Born abroad; one parent naturalised in Canada", "Generally a citizen by descent (first generation born abroad)."],
              ["Born abroad; parent was themselves born abroad to a Canadian", "Previously blocked by the first-generation limit; may now qualify under Bill C-3 if the substantial-connection test is met."],
              ["Excluded by older citizenship laws (a “Lost Canadian”)", "Many are now recognised as citizens, worth checking your status."],
              ["Born in Canada", "Citizen by birth on Canadian soil, descent rules do not apply."],
              ["Permanent resident, no Canadian parent", "Not by descent, this is the citizenship-by-grant route instead."],
            ]}
            caption="Illustrative scenarios only, not a determination. Citizenship by descent depends on your exact facts and dates. Confirm the current rules on canada.ca."
          />

          <h2>What is the first-generation limit?</h2>
          <p>
            The <strong>first-generation limit</strong> was the rule at the centre of most citizenship-by-descent
            questions. In broad terms, it allowed Canadian citizenship to pass by descent only to the{" "}
            <strong>first generation born outside Canada</strong>. So a parent who was a Canadian citizen but who
            was themselves <em>born abroad</em> generally could not pass citizenship automatically to their own
            child also born abroad. Citizenship effectively stopped at one generation outside the country.
          </p>
          <p>
            That limit produced hard outcomes for globally mobile Canadian families, children who grew up
            believing they were Canadian, only to discover they were not recognised. It is the main reason the
            term <em>Lost Canadians</em> exists, and the main thing <strong>Bill C-3</strong> sets out to fix.
          </p>

          <h2>How does Bill C-3 change citizenship by descent?</h2>
          <p>
            <strong>Bill C-3</strong> updates the descent rules so that citizenship can pass{" "}
            <strong>beyond the first generation</strong> born abroad in certain cases, rather than being cut off
            automatically by the first-generation limit. The mechanism is a{" "}
            <strong>substantial-connection test</strong>: broadly, a Canadian parent who was themselves born
            abroad can pass citizenship to their child born abroad where the parent has a genuine, demonstrable
            connection to Canada. This is typically measured by physical presence in Canada, in the order of{" "}
            <strong>1,095 days</strong>, before the child&apos;s birth or adoption.
            This matters most for the <strong>second generation born abroad</strong> and beyond, where the old
            first-generation limit used to stop citizenship entirely.
          </p>
          <p>
            We describe Bill C-3 as <strong>in force / current</strong> following{" "}
            <strong>royal assent in November 2025</strong>, but the detailed rules around it have
            been evolving, so treat the specifics here as a starting point only and{" "}
            <strong>confirm the live position on canada.ca</strong> before acting. The practical upshot is that
            many people who were previously excluded, and many parents planning a child&apos;s status, now have
            a clearer route to Canadian citizenship than they did under the old first-generation limit.
          </p>
          <Callout type="warning" title="Bill C-3 details are evolving, confirm the current rules">
            The citizenship-by-descent rules, including how the substantial-connection test is applied and the
            exact dates, have been changing. This page is general information, not a legal determination. Always
            verify the current rules directly on canada.ca, and book a consultation for advice on your own facts.
          </Callout>

          <h2>Who are the &ldquo;Lost Canadians&rdquo;?</h2>
          <p>
            <strong>Lost Canadians</strong> is the informal name for people who believed they were Canadian, or
            expected to be, but were shut out by past citizenship laws. Some were caught by the{" "}
            <strong>first-generation limit</strong>; others by older rules about birth abroad, the timing of a
            parent&apos;s citizenship, marriage, or registration deadlines that no longer reflect how families
            actually live. For many, the loss surfaced only when they tried to get a passport or pass status to
            their own children.
          </p>
          <p>
            The significance of the Bill C-3 changes is that a large group of Lost Canadians are now recognised as
            citizens, or have a clearer path to recognition. If you suspect you might be one, perhaps a parent or
            grandparent was a Canadian citizen, or you were born abroad and never formalised your status, it is well worth
            checking, because recognition affects passports, the right to live and work in Canada, and what you
            can pass to your own children.
          </p>

          <h2>How do I confirm or claim citizenship by descent?</h2>
          <p>
            Because descent is automatic, you do not apply to <em>become</em> a citizen, you apply for{" "}
            <strong>proof of citizenship</strong>, also called a <strong>citizenship certificate</strong>. This
            is a secure IRCC document that confirms the status you already hold, and it is what you use to apply
            for a Canadian passport. The steps below are the typical path; confirm the current forms, fees and
            processing times on canada.ca, as demand has been high since the rules changed.
          </p>
          <Steps
            steps={[
              { title: "Map your family facts", desc: "Identify which parent (or grandparent) was Canadian, where each generation was born, and the key dates of birth, naturalisation and any time spent in Canada." },
              { title: "Check the current rules", desc: "Read IRCC's citizenship-by-descent and Bill C-3 pages on canada.ca to see how the first-generation limit and substantial-connection test apply to your situation." },
              { title: "Gather documents", desc: "Collect birth certificates across generations, your Canadian parent's proof of citizenship, and any records of their physical presence in Canada." },
              { title: "Apply for proof of citizenship", desc: "Submit an application for a citizenship certificate to IRCC, this confirms, rather than grants, your status." },
              { title: "Receive your certificate", desc: "Once issued, your citizenship certificate is your secure proof of status. Build in time, as processing has been stretched by high demand." },
              { title: "Apply for a passport", desc: "With your certificate, you can apply for a Canadian passport and exercise your rights as a citizen." },
            ]}
          />
          <Callout type="info" title="Proof of citizenship confirms, it does not grant, your status">
            A citizenship certificate proves a status you already have by descent; it is not a citizenship grant.
            If your facts do not meet the descent rules, the route is the standard{" "}
            <a href="/citizenship">citizenship-by-grant process</a> instead. Confirm current fees and processing
            times on canada.ca.
          </Callout>

          <h2>Who should check their status?</h2>
          <p>
            Some people should treat a status check as a priority. You are a strong candidate to look into{" "}
            <strong>Canadian citizenship by descent</strong> if you were <strong>born outside Canada</strong> to a
            parent who was Canadian at your birth; if a <strong>parent or grandparent</strong> was Canadian and
            you are unsure whether status reached you; if you were previously told the{" "}
            <strong>first-generation limit</strong> blocked you; or if you have long suspected you might be a{" "}
            <strong>Lost Canadian</strong>.
          </p>
          <p>
            It also matters if you are <strong>planning a family abroad</strong> and want to understand whether you
            can pass Canadian citizenship to a child born outside Canada under the substantial-connection test. In
            all of these cases, a short assessment of your facts and dates is the fastest way to know where you
            stand, and what proof you would need to claim it.
          </p>
          <p>
            There is a practical reason not to wait. Because the descent rules changed under{" "}
            <strong>Bill C-3</strong>, many people are now applying for <strong>proof of citizenship</strong> at
            once, and the <strong>citizenship certificate processing time</strong> has been stretched as a result.
            It helps to gather the records that link the generations of your family together early: birth
            certificates, your Canadian parent&apos;s proof of citizenship, and evidence of their time in Canada.
            The sooner you confirm your status, the smoother your application will be. Older documents can take time
            to track down, so starting early is usually the difference between a clean file and a stalled one. Confirm the current processing times
            on canada.ca before you plan around any deadline, such as an upcoming move, a passport need or a
            child&apos;s birth abroad.
          </p>
          <DataTable
            headers={["Citizenship by descent", "Citizenship by grant"]}
            rows={[
              ["For people with a Canadian parent (born abroad)", "For permanent residents living in Canada"],
              ["Automatic, citizen by operation of law", "Earned by application after meeting requirements"],
              ["No physical-presence requirement for you", "1,095 days of physical presence in 5 years"],
              ["No test and no oath for you", "Test (ages 18–54) and the oath of citizenship"],
              ["You apply for proof of citizenship", "You apply for a citizenship grant"],
            ]}
            caption="Citizenship by descent vs by grant (general overview). Confirm current rules on canada.ca."
          />

          <h2>How Wild Mountain helps with citizenship by descent</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team assesses whether your family&apos;s facts likely
            make you a <strong>Canadian citizen by descent</strong> under the current rules, explains how the{" "}
            <strong>first-generation limit</strong> and <strong>Bill C-3</strong> apply to your case, and prepares
            and reviews your <strong>proof-of-citizenship</strong> application so avoidable mistakes never reach
            IRCC. We also advise on the broader <a href="/citizenship">citizenship requirements</a> and the full
            range of <a href="/immigrate">permanent-residence routes</a> if descent does not apply to you. Because
            the descent rules are still evolving, we always work from the current canada.ca guidance and never
            guarantee an outcome. We represent clients entirely online, by video call and secure document sharing.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your
            own <strong>Canadian citizenship by descent</strong> application an expert check before you submit.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Explore citizenship further</h2>
          <p className="mt-3 text-ink-soft">Whether your route is descent, a grant or permanent residence first.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Stamp} title="Citizenship requirements" desc="The full 2026 guide to citizenship by grant: physical presence, the test and the oath." href="/citizenship" />
            <FeatureCard icon={BookOpen} title="Citizenship test" desc="The Discover Canada test, the pass mark and who is exempt, for the grant route." href="/citizenship/citizenship-test" />
            <FeatureCard icon={Rocket} title="Immigrate to Canada" desc="If descent does not apply, see every permanent-residence route to Canada." href="/immigrate" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Wondering if you're a Canadian by descent?"
        sub="Get started with a licensed RCIC for an honest read on your status under the new Bill C-3 rules."
      />
    </>
  );
}
