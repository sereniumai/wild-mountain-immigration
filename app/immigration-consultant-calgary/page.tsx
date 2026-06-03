import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
ServiceTrio,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { img } from "@/lib/images";
import { site, consult } from "@/lib/site";

const PATH = "/immigration-consultant-calgary";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Immigration Consultant Calgary",
  titleAbsolute: "Immigration Consultant Calgary | Licensed RCIC",
  description:
    "Immigration consultant in Calgary: a licensed RCIC (CICC #R706497) for Express Entry, the Alberta AAIP, work permits, study and family sponsorship.",
  path: PATH,
  keywords: [
    "immigration consultant Calgary",
    "RCIC Calgary",
    "best immigration consultant Calgary",
    "Calgary immigration help",
    "immigration consultant near me Calgary",
  ],
});

const faqs = [
  {
    q: "Do you have an office in Calgary?",
    a: "We're a service-area practice based out in Canmore, in the Bow Valley about an hour west, and we serve Calgary clients every week. We don't run a public walk-in office downtown, instead we meet online by video call and phone by appointment. That keeps our overheads low and our fees fair, while you still get a local, regulated RCIC.",
  },
  {
    q: "Are you a licensed RCIC serving Calgary?",
    a: "Yes. Wild Mountain Immigration works under a licensed Regulated Canadian Immigration Consultant (RCIC #R706497), governed by the College of Immigration and Citizenship Consultants (CICC). You can verify our standing on the CICC public register at any time, and we encourage every Calgary client to check before hiring anyone.",
  },
  {
    q: "I work in oil and gas or tech in Calgary, can you help with PR?",
    a: "Absolutely. Calgary's energy, technology and professional-services sectors are exactly where many of our clients work. We assess your skilled-worker profile, match it to Express Entry and the Alberta Advantage Immigration Program (AAIP), and build the route that gives you the strongest, fastest path to permanent residence.",
  },
  {
    q: "What's the difference between an immigration consultant and a lawyer in Calgary?",
    a: "Both an RCIC and an immigration lawyer can legally represent you with IRCC. An RCIC specialises exclusively in immigration and is regulated by the CICC. For most permanent-residence, work, study and family cases in Calgary, a licensed RCIC offers focused expertise, often at a lower cost than a downtown law firm.",
  },
  {
    q: "Can you help with Alberta's AAIP for Calgary applicants?",
    a: "Yes, Alberta is our home province, so the Alberta Advantage Immigration Program is core to what we do. For Calgary applicants we look at the Alberta Express Entry Stream, the Opportunity Stream and, where relevant, the dedicated tech and health-care pathways, then build your Expression of Interest and nomination application.",
  },
  {
    q: "I searched 'immigration consultant near me' in Calgary, do you serve my neighbourhood?",
    a: "We serve the whole Calgary area, from the inner city and the Beltline out to the suburbs, plus Chestermere, Okotoks and the Bow Valley. Because Canadian immigration is handled online with IRCC, where in Calgary you live makes no difference to the quality of your representation.",
  },
  {
    q: "How much does it cost to work with an immigration consultant in Calgary?",
    a: "It depends on your case and whether you choose full File Management or our lower-cost File Review. We set out clear, fixed-scope fees in writing up front, so there are no surprises.",
  },
  {
    q: "How do I book a Calgary consultation?",
    a: "Get started through our online booking page, or call us at +1 (587) 857-3692. We'll confirm a video call at a time that works for you, and tell you exactly what to bring.",
  },
];

export default function ImmigrationConsultantCalgaryPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Immigration Consultant in Calgary, Licensed RCIC",
            description:
              "Immigration consultant in Calgary: a licensed RCIC (CICC #R706497) for Express Entry, the Alberta AAIP, work permits, study and family sponsorship.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Immigration consulting for Calgary, Alberta",
            description:
              "Immigration consultant in Calgary: a licensed RCIC (CICC #R706497) for Express Entry, the Alberta AAIP, work permits, study and family sponsorship.",
            path: PATH,
            serviceType: "Immigration consultant",
          }),
          {
            "@context": "https://schema.org",
            "@type": ["ProfessionalService", "LocalBusiness"],
            name: "Wild Mountain Immigration Inc",
            description:
              "Licensed RCIC (CICC #R706497) serving Calgary and the surrounding Alberta region with Canadian immigration advice and application management.",
            areaServed: ["Calgary", "Chestermere", "Okotoks", "Cochrane", "Bow Valley", "Alberta"].map(
              (n) => ({ "@type": "City", name: n })
            ),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Canmore",
              addressRegion: "AB",
              addressCountry: "CA",
            },
            telephone: "+1 (587) 857-3692",
            url: "https://wildmountainimmigration.com/immigration-consultant-calgary",
          },
        ]}
      />

      <PageHero
        eyebrow="Calgary, Alberta"
        crumbs={[{ name: "Immigration Consultant Calgary", path: PATH }]}
        title={<>Immigration consultant in <span className="text-brand">Calgary</span></>}
        lede={
          <p>
            Searching for an <strong>immigration consultant in Calgary</strong>? Wild Mountain Immigration is a licensed
            RCIC practice serving Calgary professionals and families, guiding skilled workers, students and sponsors
            through Express Entry, the Alberta AAIP and family sponsorship with honest, regulated advice.
          </p>
        }
        updated={UPDATED}
        image={img.rockiesAlt}
        imageAlt="The Rockies west of Calgary, where Wild Mountain Immigration serves Alberta clients"
        secondaryCta={{ href: site.phoneHref, label: `Call ${site.phone}` }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Serving Calgary, AB</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Licensed RCIC helping Calgary clients online and across Canada remotely.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
              <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-brand">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
            <RelatedLinks
              links={[
                { label: "Check what you qualify for", href: "/tools/eligibility", note: "Free eligibility checker" },
                { label: "Express Entry", href: "/express-entry", note: "Fastest federal PR route" },
                { label: "Alberta AAIP", href: "/alberta-immigration", note: "Our home-province program" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "Sponsor a spouse or partner" },
                { label: "Immigration consultant Cochrane", href: "/immigration-consultant-cochrane", note: "Served area, east toward Calgary" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary={`An immigration consultant serving Calgary, Wild Mountain Immigration is a licensed RCIC practice (CICC #${site.rcicNumber}) based in Canmore, about an hour west in the Bow Valley. It helps Calgary's energy, tech and professional-services workers reach permanent residence through Express Entry and the Alberta AAIP, plus work, study and family pathways. We serve Calgary clients online by video call and phone, never in person, and we represent clients across Canada remotely.`}
            items={[
              <>Wild Mountain Immigration is a <strong>licensed RCIC practice serving Calgary</strong> (RCIC #{site.rcicNumber}).</>,
              <>We help Calgary&apos;s <strong>energy, tech and professional-services</strong> workers reach permanent residence.</>,
              <>Core routes include <strong>Express Entry and the Alberta AAIP</strong>, plus work, study and family pathways.</>,
              <>As a CICC-regulated consultant, our standing is <strong>publicly verifiable</strong> on the CICC register.</>,
              <>We meet Calgary clients <strong>online by video call and phone</strong>, and represent clients across Canada remotely.</>,
            ]}
          />

          <h2>Why Calgary professionals choose a local RCIC</h2>
          <p>
            Choosing an <strong>immigration consultant in Calgary</strong> who genuinely knows Alberta gives your
            application a real edge. Calgary&apos;s economy is unlike anywhere else in Canada: a global energy hub that has
            diversified fast into technology, financial services, logistics and clean energy. Those sectors shape the cases
            we see every week.</p>
          <p>We work with petroleum engineers and geoscientists, software developers and data specialists
            in the growing Calgary tech scene, accountants and project managers, health-care workers, and the skilled trades
            that keep the city building. When your route to permanent residence depends on Alberta employers and Alberta&apos;s
            provincial program, that local context matters.
          </p>
          <p>
            Being a <strong>licensed immigration consultant near Calgary</strong> also means a regulated professional who
            knows the local market is handling your file. Many Calgary clients start with a video call for the first
            consultation, then run the rest of the process by email and secure video, the convenience of working online
            with the reassurance of a regulated professional who understands the city. We&apos;re based in Canmore,
            out in the Bow Valley about an hour west, and Calgary is the city we serve most.
          </p>

          <h2>Express Entry and the AAIP for Calgary applicants</h2>
          <p>
            For most skilled workers in Calgary, the strongest path to permanent residence runs through two
            doors that we help you open together: federal <a href="/express-entry">Express Entry</a> and the provincial{" "}
            <a href="/alberta-immigration">Alberta Advantage Immigration Program (AAIP)</a>. Express Entry ranks you on the
            Comprehensive Ranking System (CRS); we help you maximise that score through language results, education
            assessments and Canadian work experience. The AAIP then gives Alberta-focused candidates a second route, and
            an Alberta nomination adds substantial points to an Express Entry profile.
          </p>
          <p>
            Calgary applicants often fit the AAIP&apos;s Alberta Express Entry Stream or Opportunity Stream, and the
            province also runs dedicated pathways aimed at the sectors driving Calgary&apos;s growth, including technology
            and health care. We assess which combination fits your profile rather than pushing a single program, and we
            build your Expression of Interest and nomination application alongside your federal options so nothing is left
            on the table.
          </p>

          <h2>Immigration services for Calgary clients</h2>
          <p>
            As a full-service <strong>RCIC serving Calgary</strong>, we handle the federal and provincial routes that
            matter most to people building a life in the city and across Alberta, from skilled-worker PR in Calgary to
            family reunification. We focus on immigration representation rather than newcomer services in Calgary such as
            housing or job placement, and we can point you toward trusted settlement organisations once your status is
            secured. The table below shows our core services and how we help, follow the links for the in-depth guide on
            each.
          </p>
          <DataTable
            headers={["Service", "How we help"]}
            rows={[
              [
                <a href="/express-entry">Express Entry</a>,
                "Build your strongest CRS profile, choose the right program, and manage your permanent-residence application end to end, ideal for Calgary's skilled professionals.",
              ],
              [
                <a href="/alberta-immigration">Alberta AAIP</a>,
                "Assess AAIP streams, including tech and health-care pathways relevant to Calgary, prepare your Expression of Interest, and run your nomination.",
              ],
              [
                <a href="/family-sponsorship">Family sponsorship</a>,
                "Reunite with a spouse, partner, parent or grandparent in Calgary through sponsorship and the Super Visa.",
              ],
              [
                <a href="/work-permits">Work permits</a>,
                "LMIA-based, employer-specific and open work permits, plus the PGWP, useful for Calgary's energy, tech and graduate hires.",
              ],
              [
                <a href="/study-permit">Study permits</a>,
                "Study in Calgary and build a pathway to permanent residence after graduation.",
              ],
            ]}
            caption="Core immigration services for Calgary clients from our Alberta-based RCIC practice."
          />
          <p>
            Not sure which route fits? Try our free <a href="/tools/eligibility">eligibility checker</a> to see which
            permanent residence and work permit pathways may suit you, then book a first consultation for an honest,
            expert read, rather than being steered toward a single program.
          </p>

          <h2>Study in Calgary and stay: your route to permanent residence</h2>
          <p>
            Calgary is a growing study destination, and studying here is one of the most reliable routes to permanent
            residence. International students at the <strong>University of Calgary</strong>, <strong>SAIT</strong>,{" "}
            <strong>Mount Royal University</strong> and <strong>Bow Valley College</strong> can move from a{" "}
            <a href="/study-permit">study permit</a> to a{" "}
            <a href="/work-permits/pgwp">Post-Graduation Work Permit (PGWP)</a>, then use that Canadian work experience to
            qualify for the <a href="/express-entry/canadian-experience-class">Canadian Experience Class</a> or an Alberta
            nomination. We map that <a href="/study-permit/study-to-pr">study-to-PR pathway</a> from day one so your time
            in Calgary counts toward staying for good.
          </p>

          <h2>Serving Calgary, Cochrane and the wider region</h2>
          <p>
            We&apos;re proud to be an Alberta practice that serves <strong>Calgary</strong> and the communities around it.
            In practice that means we regularly work with people in and around:
          </p>
          <ul>
            <li><strong>Calgary</strong>, from the inner city and Beltline to the suburbs; our largest source of skilled-worker and family cases.</li>
            <li><strong>Chestermere</strong>, a fast-growing community just outside the city we serve regularly.</li>
            <li><strong>Okotoks &amp; the foothills</strong>, south of Calgary, where many commuters and families live.</li>
            <li><strong>Canmore &amp; the Bow Valley</strong>, our home base, about an hour west of Calgary on Highway 1, with Cochrane in between.</li>
          </ul>
          <p>
            At the same time, immigration is national work. Once we represent you, your file is handled the same way
            whether you&apos;re in Calgary or in Halifax, Vancouver or overseas. Video calls, secure document sharing and
            email mean distance is rarely a barrier, so our <strong>Calgary immigration help</strong> reaches clients right
            across Canada.
          </p>
          <Callout type="brand" title="A service-area practice">
            Wild Mountain Immigration is a service-area business serving Calgary and the surrounding region by appointment.
            We don&apos;t run a public walk-in storefront, all meetings are arranged online by video call and phone,
            wherever you are.
          </Callout>

          <h2>What is an RCIC, and how to verify yours</h2>
          <p>
            An <strong>RCIC</strong> is a Regulated Canadian Immigration Consultant: a professional licensed to give
            immigration advice and represent clients with Immigration, Refugees and Citizenship Canada (IRCC). RCICs are
            governed by the{" "}
            <strong>College of Immigration and Citizenship Consultants (CICC)</strong>, which sets the rules of conduct,
            requires professional insurance, and disciplines anyone who breaches them. Working with a licensed RCIC is how
            you protect yourself from the unlicensed &ldquo;ghost agents&rdquo; that prey on newcomers.
          </p>
          <p>
            You should never take a consultant&apos;s word for their licence, verify it. Wild Mountain Immigration works
            under our lead RCIC, Nicola Wightman, who holds RCIC #{site.rcicNumber} and is a member in good standing of
            the CICC. You can confirm this yourself on the{" "}
            <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer">CICC public register</a>{" "}
            in under a minute, and we encourage every prospective Calgary client to do so before they hire anyone, us
            included.
          </p>
          <Callout type="info" title="How to verify any immigration consultant">
            Search the consultant&apos;s name or licence number on the CICC register, confirm the status reads
            &ldquo;active&rdquo; or &ldquo;good standing,&rdquo; and check the number matches. If a consultant can&apos;t
            give you a licence number, that&apos;s a red flag.
          </Callout>

          <h2>How we work with you</h2>
          <p>
            You only pay for the help you actually need. Here are the three ways to work with our licensed RCIC
            practice, choose the level of support that fits you.
          </p>
          <ServiceTrio />

          <h2>Do I need to live in Calgary to work with you?</h2>
          <p>
            No. While we know Calgary well and work with clients across the city, where you live doesn&apos;t change the
            quality of representation you receive. Canadian immigration is handled with IRCC online, so we successfully represent
            clients living elsewhere in Alberta, across Canada, and abroad, all remotely. If you found us by searching for
            an <strong>immigration consultant near you in Calgary</strong> but live in Edmonton, Toronto or overseas,
            you&apos;re still very welcome.
          </p>
          <p>
            Ready to talk it through with an <strong>immigration consultant in Calgary</strong> who knows Alberta? Learn
            more <a href="/about">about Nicola and the practice</a>, then book a time that suits you.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Talk to a licensed RCIC serving Calgary"
        sub="Book a no-pressure consultation with a CICC-regulated immigration consultant, online by video call and phone anywhere in Canada."
      />
    </>
  );
}
