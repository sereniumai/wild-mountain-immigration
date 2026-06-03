import type { Metadata } from "next";
import { Compass, Rocket, FileCheck2, Map } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/international-experience-canada";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "International Experience Canada 2026, IEC Guide",
  titleAbsolute: "International Experience Canada (IEC) 2026",
  description:
    "International Experience Canada 2026: the IEC working holiday visa, three categories, eligibility and how to apply. Get started with a licensed RCIC.",
  path: PATH,
  keywords: [
    "international experience canada 2026",
    "iec working holiday visa",
    "iec categories",
    "working holiday canada",
    "young professionals",
    "international co-op",
    "iec eligibility",
  ],
});

const faqs = [
  {
    q: "What is the age limit for IEC?",
    a: "The age limit for International Experience Canada is generally 18 to 35, but the exact upper limit depends on your country of citizenship. Some bilateral youth-mobility agreements set the maximum at 30, while others go up to 35. You must be within the eligible age range for your country on the day you submit your profile to the pool. Check your country's specific age range on the canada.ca IEC page before you apply.",
  },
  {
    q: "Is working holiday the same as IEC?",
    a: "Not quite. International Experience Canada (IEC) is the umbrella program, and Working Holiday is just one of its three categories. The other two are Young Professionals and International Co-op (Internship). People often say working holiday visa when they mean IEC, but the Working Holiday category specifically gives you an open work permit, while the other two categories give employer-specific permits tied to a job offer.",
  },
  {
    q: "How do the IEC pool and invitation rounds work?",
    a: "You do not apply directly. Instead you submit a profile to the pool for each category and country you are eligible for. IRCC then holds rounds of invitations throughout the season, drawing candidates at random from each pool. If you are picked, you receive an invitation to apply (ITA) and have 10 days to accept and 20 days to start your work permit application. Spots are limited by each country's annual quota, so an invitation is not guaranteed.",
  },
  {
    q: "Which countries are eligible for International Experience Canada?",
    a: "Only citizens of countries that have a bilateral youth-mobility agreement with Canada can use IEC, and the categories available differ by country. More than 30 countries take part, including the UK, France, Australia, Germany, Ireland, Japan and many others. Citizens of countries without an agreement may still be able to participate through a Recognised Organisation. The full, current country list and the categories open to each one are published on canada.ca.",
  },
  {
    q: "Do I need a job offer for IEC?",
    a: "It depends on the category. The Working Holiday category does not require a job offer, it gives you an open work permit so you can work for almost any employer. The Young Professionals and International Co-op (Internship) categories do require a valid job offer or internship placement in Canada before you apply, because they issue employer-specific permits tied to that role.",
  },
  {
    q: "How much money do I need for IEC?",
    a: "You must show you have enough funds to support yourself when you arrive, IRCC sets this at CAD $2,500 to cover initial costs. You also need health insurance for the full length of your stay, and you may be refused entry if your insurance does not cover your whole permit. Always confirm the current funds figure on canada.ca, as amounts can change.",
  },
  {
    q: "Can IEC lead to permanent residence?",
    a: "IEC itself is a temporary program, but the Canadian work experience you gain can become a stepping stone to permanent residence. Skilled work done during an IEC permit can help you qualify for the Canadian Experience Class under Express Entry or support a provincial nomination. Many people use a working holiday as a first step and then plan their PR route while in Canada.",
  },
  {
    q: "How many times can I do IEC?",
    a: "The number of times you can participate depends on your country of citizenship and the category. Some agreements allow only one participation per category, while others permit a second. The Working Holiday category in particular is often limited to one lifetime participation for many countries. Check your country's terms on canada.ca, and consider whether the Young Professionals or International Co-op category gives you another route.",
  },
];

export default function InternationalExperienceCanadaPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "International Experience Canada (IEC) 2026: Categories, Eligibility & How to Apply",
            description:
              "International Experience Canada 2026: the IEC working holiday visa, three categories, eligibility and how to apply. Reviewed by a licensed RCIC.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-31",
          }),
          serviceLd({
            name: "International Experience Canada application support",
            description:
              "International Experience Canada 2026: the IEC working holiday visa, three categories, eligibility and how to apply. Reviewed by a licensed RCIC.",
            path: PATH,
            serviceType: "International Experience Canada immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Work Permits"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "International Experience Canada", path: PATH },
        ]}
        title={<>International Experience Canada: <span className="text-brand">the 2026 IEC guide</span></>}
        lede={
          <p>
            <strong>International Experience Canada 2026</strong> lets youth from countries with a youth-mobility
            agreement live, work and travel in Canada. It runs through three categories: the Working Holiday visa (an
            open permit), Young Professionals and International Co-op. You enter each one through a pool and invitation
            round.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/contact", label: "Get started" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Compass className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Is IEC your best route?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Working holiday, young professional or co-op, get started and find the IEC category that fits you.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Canada work permits", href: "/work-permits", note: "All work permit routes explained" },
                { label: "Open work permits", href: "/work-permits/open-work-permit", note: "Work for almost any employer" },
                { label: "Immigrate to Canada (PR)", href: "/immigrate", note: "Turn experience into permanent residence" },
                { label: "Express Entry", href: "/express-entry", note: "From Canadian work to PR" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="International Experience Canada (IEC) lets young people from countries with a youth-mobility agreement work and travel in Canada. It runs through three categories, each with its own rules: Working Holiday (an open work permit), Young Professionals and International Co-op (Internship). Age limits, eligible countries and quotas vary by agreement. Candidates enter a pool and wait to be invited, so available spots change each season."
            items={[
              <><strong>International Experience Canada 2026</strong> lets youth from agreement countries work and travel in Canada.</>,
              <>It has <strong>three categories</strong>: Working Holiday (open permit), Young Professionals and International Co-op.</>,
              <>You must be <strong>18–35</strong> (the upper limit depends on your country) with an eligible passport.</>,
              <>You enter a <strong>pool</strong> and wait for an <strong>invitation round</strong>, places are capped per country.</>,
              <>An IEC permit can build <strong>Canadian work experience</strong> toward permanent residence.</>,
            ]}
          />

          <h2>What is International Experience Canada?</h2>
          <p>
            International Experience Canada (IEC) is a program run by Immigration, Refugees and Citizenship Canada (IRCC)
            that lets young people from countries with a bilateral youth-mobility agreement come to Canada to work and
            travel.</p>
          <p>In short, if your country has signed an agreement with Canada and you are within the eligible age
            range, IEC gives you a time-limited work permit, usually 12 or 24 months, to gain experience, fund your
            travels and explore the country. According to IRCC, more than 30 countries and territories take part in the
            program, and the 2026 pools opened in December 2025 (source: canada.ca, 2026).
          </p>
          <p>
            IEC is a reciprocal youth mobility arrangement: just as foreign youth can come to Canada, young Canadians
            can work abroad in partner countries. The working holiday visa Canada route inside IEC is one of the most
            accessible ways for someone in their twenties or early thirties to spend a year or two here, and, for many,
            a first step toward something more permanent.
          </p>

          <h2>Working Holiday visa and the three IEC categories</h2>
          <p>
            International Experience Canada is not a single permit. It is three distinct categories, each with its own
            permit type and rules. The category that fits you depends on whether you want freedom to work anywhere, a
            specific job, or a study-related internship. The table below sets out the three IEC categories side by side.
          </p>
          <DataTable
            headers={["IEC category", "Who it's for", "Permit type", "Job offer needed?"]}
            rows={[
              ["Working Holiday", "Youth who want to fund travel and work for almost any employer", "Open work permit", "No"],
              ["Young Professionals", "Youth with a job offer that advances their career", "Employer-specific permit", "Yes, a named employer"],
              ["International Co-op (Internship)", "Students needing a work placement to complete their studies", "Employer-specific permit", "Yes, an internship placement"],
            ]}
            caption="The three International Experience Canada categories (IRCC, 2026). Availability of each category varies by country."
          />
          <p>
            The <strong>Working Holiday</strong> category is the most flexible and the most popular: it gives you an open
            work permit, so you can change jobs, work part-time, and travel between roles without applying for a new
            permit. <strong>Young Professionals</strong> and <strong>International Co-op</strong> are employer-specific. Your permit is tied to the job or placement named in your application, and the role must support your career
            or studies rather than fund general travel.
          </p>
          <Callout type="info" title="Working holiday is not the only option">
            People often say <em>IEC working holiday visa</em> as if it is the whole program, but Working Holiday is just
            one of the three categories. If you already have a job offer, the Young Professionals category may suit you
            better, and some countries only offer one or two of the three categories. Check what is open for your
            nationality.
          </Callout>

          <h2>Who is eligible for International Experience Canada?</h2>
          <p>
            IEC eligibility rests on a few core conditions: your nationality, your age, a valid passport and the funds
            and insurance to support yourself. Because the program is built on bilateral agreements, the precise rules
            depend on your country of citizenship, including the IEC age limit by country, which is set at either 30 or
            35. The table below shows the general eligibility requirements.
          </p>
          <DataTable
            headers={["Requirement", "What IEC asks for"]}
            rows={[
              ["Citizenship", "Citizen of a country with a youth-mobility agreement with Canada"],
              ["Age", "18 to 35, the upper limit (30 or 35) depends on your country"],
              ["Passport", "A valid passport for the duration of your stay; your permit won't exceed its validity"],
              ["Funds", "Proof of CAD $2,500 to cover initial costs on arrival"],
              ["Insurance", "Health insurance covering your entire stay in Canada"],
              ["Other", "No dependants travelling with you on the permit; admissibility (no relevant criminal/medical bars)"],
            ]}
            caption="General International Experience Canada eligibility (IRCC, 2026). Confirm your country's exact terms on canada.ca."
          />
          <Callout type="warning" title="Insurance must cover your whole stay">
            A border officer can shorten your permit, or refuse entry, if your health insurance does not cover the full
            length of your intended stay. Buy coverage for the entire period before you travel, and carry proof. This is
            one of the most common avoidable problems IEC participants face at the port of entry.
          </Callout>

          <h2>How do the pool and invitation rounds work?</h2>
          <p>
            IEC does not work like a normal application where you submit and wait for a decision. Instead, you create a
            profile and enter a <strong>pool</strong> for each category and country you are eligible for. Throughout the
            season, IRCC holds <strong>rounds of invitations</strong>, drawing candidates from each pool, largely at
            random, until that country's annual quota is filled.
          </p>
          <p>
            If you are selected, you receive an <strong>invitation to apply (ITA)</strong>. You then have a limited
            window, generally 10 days to accept and 20 days to submit your complete work permit application, so it pays
            to have your documents ready before you enter the pool. Because places are capped per country, sitting in the
            pool does not guarantee an invitation in any given season.
          </p>
          <Callout type="brand" title="The 2026 season">
            IRCC opened the IEC pool 2026 intake in December 2025, and rounds of invitations run through the season until
            country quotas are reached. Quotas, the number of rounds and timing change each year, so check the live
            season status and your remaining pool spots on the canada.ca IEC page before you plan around a date.
          </Callout>

          <h2>Which countries are eligible for IEC?</h2>
          <p>
            Only citizens of countries that hold a youth-mobility agreement with Canada can take part directly, and the
            categories on offer differ from country to country. Well-known participating countries include the United
            Kingdom, France, Australia, Germany, Ireland and Japan, alongside many others, more than 30 in total. Some
            agreements offer all three categories; others offer only one or two.
          </p>
          <p>
            If your country does not have an agreement with Canada, you may still be able to join the Young Professionals
            or International Co-op categories through a <strong>Recognised Organisation</strong>, a third party
            approved by IRCC to help youth take part. Because the list of participating countries, their categories and
            their quotas are updated regularly, always confirm your eligibility and options on the official country list
            at canada.ca rather than relying on a static list.
          </p>

          <h2>How do you apply for International Experience Canada?</h2>
          <p>
            Applying for IEC is a staged process: you check your eligibility, create the right profiles, wait to be
            invited, and only then submit your work permit application. Here is the path from the pool to your permit.
          </p>
          <Steps
            steps={[
              { title: "Check your eligibility", desc: "Confirm your country has an agreement, your age fits its range, and decide which of the three categories suits you." },
              { title: "Create your IRCC account & profile", desc: "Answer the eligibility questions, get your reference code, and submit a profile to the pool for each category you qualify for." },
              { title: "Wait for an invitation round", desc: "IRCC draws candidates from each country's pool throughout the season. If selected, you receive an invitation to apply (ITA)." },
              { title: "Accept and prepare documents", desc: "Accept your ITA within the deadline and gather your passport, proof of funds, insurance and, for employer-specific categories, your job offer." },
              { title: "Submit your work permit application", desc: "Apply online within 20 days of accepting, pay the fees, and give biometrics. Employer-specific categories need the employer's compliance steps completed." },
              { title: "Receive your port-of-entry letter", desc: "On approval you get a letter of introduction; your work permit is printed when you arrive in Canada, provided your insurance and documents are in order." },
            ]}
          />

          <h2>Can IEC lead to permanent residence?</h2>
          <p>
            IEC is a temporary program, but it is often a launchpad. The skilled Canadian work experience you build on an
            IEC permit can help you qualify for the <a href="/express-entry">Express Entry</a> Canadian Experience Class,
            strengthen a provincial nomination, or open other economic routes once you are established here. Many people
            arrive on a working holiday and decide partway through that they want to stay, and the work history they have
            already built becomes the foundation of a PR application.
          </p>
          <p>
            If permanent residence is your longer-term goal, it is worth planning the route from the start so your IEC
            time counts toward it. See our wider guides on{" "}
            <a href="/work-permits">Canada work permits</a> and how to{" "}
            <a href="/immigrate">immigrate to Canada</a> for the bigger picture.
          </p>

          <h2>How Wild Mountain Immigration helps with International Experience Canada</h2>
          <p>
            Working under a licensed RCIC (CICC #R706497), our team helps you confirm which IEC category you qualify for,
            build a pool profile that is ready to convert the moment you are invited, and prepare a clean work permit
            application that avoids the delays and port-of-entry problems that catch people out. We also map how your IEC
            time can feed into a permanent-residence plan, so a year or two in Canada becomes a real stepping stone
            rather than a dead end. We represent clients entirely online, by video call and secure document sharing.
          </p>
          <Steps
            steps={[
              { title: "Choose your category", desc: "We confirm which IEC categories are open for your nationality and which one, Working Holiday, Young Professionals or International Co-op, fits your goals." },
              { title: "Get pool-ready", desc: "We build a profile that is ready to convert the moment you are invited, with your documents, funds and insurance prepared in advance." },
              { title: "Apply and plan ahead", desc: "We prepare your work permit application within the deadline and map how your Canadian work experience can feed a future PR plan." },
            ]}
          />
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            International Experience Canada application an expert check before you submit, so your IEC profile and work
            permit are right the first time.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">Where IEC can take you</h2>
          <p className="mt-3 text-ink-soft">A working holiday is often the first step in a longer plan. We help you make it count.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={Rocket} title="Canadian Experience Class" desc="Skilled work on an IEC permit can make you eligible for PR through the Express Entry CEC stream." href="/express-entry/canadian-experience-class" />
            <FeatureCard icon={Map} title="Provincial nominees" desc="Many PNP streams value Canadian work experience built during an IEC permit." href="/pnp" />
            <FeatureCard icon={FileCheck2} title="Open work permits" desc="See how the Working Holiday open permit compares to other open work permit routes." href="/work-permits/open-work-permit" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Is International Experience Canada right for you?"
        sub="Get started with a licensed RCIC for an honest read on your IEC eligibility and the best category for your goals."
      />
    </>
  );
}
