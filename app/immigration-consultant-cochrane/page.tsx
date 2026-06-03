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

const PATH = "/immigration-consultant-cochrane";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Immigration Consultant Cochrane",
  titleAbsolute: "Immigration Consultant Cochrane, Alberta | RCIC",
  description:
    "Looking for an immigration consultant in Cochrane, Alberta? Work with a licensed RCIC (CICC #R706497) based in nearby Canmore. Book a consultation today.",
  path: PATH,
  keywords: [
    "immigration consultant Cochrane",
    "RCIC Cochrane Alberta",
    "Bow Valley immigration consultant",
    "licensed immigration consultant Cochrane",
    "immigration help Cochrane",
  ],
});

const faqs = [
  {
    q: "Do I have to live in Cochrane to work with you?",
    a: "Not at all. We're based in Canmore, in the Bow Valley just west of Cochrane, and we work online with clients across Cochrane, Calgary, Canmore and Banff, and represent clients right across Canada and overseas remotely. Whether you're nearby or on the other side of the country, the service is the same.",
  },
  {
    q: "Are you a licensed immigration consultant?",
    a: "Yes. Wild Mountain Immigration works under a licensed Regulated Canadian Immigration Consultant (RCIC #R706497), governed by the College of Immigration and Citizenship Consultants (CICC). You can verify our standing on the CICC public register at any time, and we encourage every client to check.",
  },
  {
    q: "What's the difference between an immigration consultant and a lawyer?",
    a: "Both an RCIC and an immigration lawyer can legally represent you with IRCC. An RCIC specialises exclusively in immigration and is regulated by the CICC. For most permanent-residence, work, study and family cases, a licensed RCIC offers focused expertise, often at a lower cost than a law firm.",
  },
  {
    q: "Do you have an office in Cochrane?",
    a: "We're a service-area business based in Canmore, serving Cochrane and the wider Bow Valley, so we meet by appointment rather than running a public walk-in office. All meetings are held online, by video call and phone, wherever you are.",
  },
  {
    q: "Can you help with Alberta's AAIP from Cochrane?",
    a: "Yes, Alberta is our home province, so the Alberta Advantage Immigration Program (AAIP) is core to what we do. We assess whether an Alberta stream fits your profile and, where it does, build your Expression of Interest and nomination application alongside your federal options.",
  },
  {
    q: "I work in hospitality in Canmore or Banff, can you help?",
    a: "Absolutely. The Bow Valley's tourism economy means we work with many hospitality and seasonal workers in Canmore and Banff on work permits and provincial pathways. We assess your work history and map a realistic route toward permanent residence.",
  },
  {
    q: "How much does it cost to work with an immigration consultant?",
    a: "It depends on your case and whether you choose full File Management or our lower-cost File Review. We set out clear, fixed-scope fees in writing up front, so there are no surprises.",
  },
  {
    q: "How do I book an appointment?",
    a: "Get started through our online booking page, or call us at +1 (587) 857-3692. We'll confirm a video call at a time that works for you, and tell you exactly what to bring.",
  },
];

export default function ImmigrationConsultantCochranePage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Immigration Consultant in Cochrane, Alberta, Licensed RCIC",
            description:
              "Immigration consultant in Cochrane, Alberta. Wild Mountain Immigration is a licensed RCIC practice (CICC #R706497) serving the Bow Valley and Canada-wide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Immigration consulting in Cochrane, Alberta",
            description:
              "Immigration consultant in Cochrane, Alberta. Wild Mountain Immigration is a licensed RCIC practice (CICC #R706497) serving the Bow Valley and Canada-wide.",
            path: PATH,
            serviceType: "Immigration consultant",
          }),
          {
            "@context": "https://schema.org",
            "@type": ["ProfessionalService", "LocalBusiness"],
            name: "Wild Mountain Immigration Inc",
            areaServed: ["Cochrane", "Calgary", "Canmore", "Banff", "Bow Valley", "Alberta"].map(
              (n) => ({ "@type": "City", name: n })
            ),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Canmore",
              addressRegion: "AB",
              addressCountry: "CA",
            },
            telephone: "+1 (587) 857-3692",
            url: "https://wildmountainimmigration.com/immigration-consultant-cochrane",
          },
        ]}
      />

      <PageHero
        eyebrow="Cochrane, Alberta"
        crumbs={[{ name: "Immigration Consultant Cochrane", path: PATH }]}
        title={<>Immigration consultant in <span className="text-brand">Cochrane, Alberta</span></>}
        lede={
          <p>
            Looking for an <strong>immigration consultant in Cochrane</strong>? Wild Mountain Immigration is a licensed
            RCIC practice in the Bow Valley, based in nearby Canmore, helping families across Cochrane, Calgary and
            Canada-wide navigate permanent residence, work and study permits, and family sponsorship with honest,
            regulated advice.
          </p>
        }
        updated={UPDATED}
        image={img.rockiesAlt}
        imageAlt="The Bow Valley near Cochrane, Alberta, served by Wild Mountain Immigration"
        secondaryCta={{ href: site.phoneHref, label: `Call ${site.phone}` }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Serving Cochrane, AB</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Licensed RCIC based in Canmore, serving Cochrane and the Bow Valley online, and clients across Canada remotely.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
              <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-brand">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
            <RelatedLinks
              links={[
                { label: "Immigration consultant Calgary", href: "/immigration-consultant-calgary", note: "Serving Alberta's largest city" },
                { label: "About us & the practice", href: "/about", note: "RCIC #R706497, verify on CICC" },
                { label: "Express Entry", href: "/express-entry", note: "Fastest federal PR route" },
                { label: "Alberta AAIP", href: "/alberta-immigration", note: "Our home-province program" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "Sponsor a spouse or partner" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary={`The right immigration consultant for Cochrane is a licensed RCIC who knows Alberta. Wild Mountain Immigration (CICC #${site.rcicNumber}) is based in nearby Canmore and serves Cochrane, Calgary, Canmore and Banff online. We help with Express Entry, the Alberta AAIP, family sponsorship, and work and study permits. All meetings run by video call and phone, never in person, and our CICC standing is publicly verifiable.`}
            items={[
              <>Wild Mountain Immigration is a <strong>licensed RCIC practice serving Cochrane</strong>, based in nearby Canmore, Alberta (RCIC #{site.rcicNumber}).</>,
              <>We serve <strong>Cochrane, Calgary, Canmore and Banff</strong> online, and clients across Canada remotely.</>,
              <>Services span <strong>Express Entry, the Alberta AAIP, family sponsorship, and work &amp; study permits</strong>.</>,
              <>As a CICC-regulated consultant, our standing is <strong>publicly verifiable</strong> on the CICC register.</>,
              <>You <strong>don&apos;t need to live in Cochrane</strong> to work with us, most cases run smoothly by video call.</>,
            ]}
          />

          <h2>Why choose a local RCIC in Cochrane</h2>
          <p>
            Choosing an <strong>immigration consultant in Cochrane</strong> who actually knows Alberta gives your
            application a real advantage. We live and work in the Bow Valley, so we understand the local economy that
            shapes so many cases here. That includes the tech and energy employers in nearby Calgary, the year-round
            tourism and hospitality work in Canmore and Banff, and the agriculture and trades roles that drive
            Alberta&apos;s smaller communities. When your immigration route depends on Alberta employers and the
            province&apos;s nomination program, local context matters.
          </p>
          <p>
            Being a <strong>licensed immigration consultant in Cochrane</strong> also means a local, regulated
            professional who knows the Bow Valley is handling your file. Many of our clients start with a video call
            for the first consultation, then run the rest of the process by email and video. You get the convenience of
            working online, backed by the reassurance of an RCIC who understands the area.
          </p>

          <h2>Immigration services we offer from Cochrane</h2>
          <p>
            As a full-service <strong>RCIC in Cochrane, Alberta</strong>, we handle the federal and provincial routes
            that matter most to people settling in the Bow Valley and beyond. The table below shows our core services
            and how we help, follow the links for the in-depth guide on each.
          </p>
          <DataTable
            headers={["Service", "How we help"]}
            rows={[
              [
                <a href="/express-entry">Express Entry</a>,
                "Build your strongest CRS profile, choose the right program, and manage your permanent-residence application end to end.",
              ],
              [
                <a href="/alberta-immigration">Alberta AAIP</a>,
                "Assess Alberta Advantage Immigration Program streams, prepare your Expression of Interest, and run your nomination application.",
              ],
              [
                <a href="/family-sponsorship">Family sponsorship</a>,
                "Reunite with a spouse, partner, parent or grandparent through sponsorship and the Super Visa.",
              ],
              [
                <a href="/work-permits">Work permits</a>,
                "LMIA-based, employer-specific and open work permits, plus the PGWP, important for Bow Valley hospitality and seasonal roles.",
              ],
              [
                <a href="/study-permit">Study permits</a>,
                "Study in Canada and build a pathway to permanent residence after graduation.",
              ],
            ]}
            caption="Core immigration services from our Bow Valley RCIC practice, serving Cochrane."
          />
          <p>
            Not sure which route fits? That&apos;s exactly what a first consultation is for. We give you an honest read on
            your options rather than pushing a single program.
          </p>

          <h2>Serving Cochrane &amp; the Bow Valley, and Canada-wide remotely</h2>
          <p>
            We&apos;re proud to be a <strong>Bow Valley immigration consultant</strong> serving Cochrane from our base
            in nearby Canmore. In practice that means we regularly work with people in and around:
          </p>
          <ul>
            <li><strong>Cochrane</strong>, a core part of our service area, where many of our clients live and work.</li>
            <li><strong>Calgary</strong>, just down Highway 1A; a major source of skilled-worker and family cases.</li>
            <li><strong>Canmore &amp; Banff</strong>, our home base, where tourism and hospitality work drives many permit and PR enquiries.</li>
          </ul>
          <p>
            At the same time, immigration is national work. Once we represent you, your file is handled the same way
            whether you&apos;re in Cochrane or in Halifax, Vancouver or overseas. Video calls, secure document sharing and
            email mean distance is rarely a barrier, so our <strong>immigration help in Cochrane</strong> reaches
            clients right across Canada.
          </p>
          <Callout type="brand" title="A service-area practice">
            Wild Mountain Immigration is a service-area business serving Cochrane and the Bow Valley by appointment. We
            don&apos;t run a public walk-in storefront, all meetings are arranged online by video call and phone,
            wherever you are.
          </Callout>

          <h2>The Cochrane and Bow Valley economy behind your application</h2>
          <p>
            Cochrane has grown quickly from a ranching town into one of Alberta&apos;s fastest-expanding communities, and
            that growth shapes the immigration cases our team sees. Many newcomers here commute to Calgary, working in
            energy, technology and professional services.</p>
          <p>Others build careers closer to home in construction, trades,
            retail, health care and the tourism economy that runs west into Canmore and Banff. When we assess a Cochrane
            file, we look at how your occupation and employer line up with Alberta&apos;s priorities, because the
            province&apos;s nomination program rewards work experience in the sectors it is trying to grow.
          </p>
          <p>
            That local read matters in practice. A trades worker pursuing PR, a Calgary-based software developer and a
            Canmore hotel supervisor each have different realistic routes to permanent residence, and the strongest plan
            depends on the details: your National Occupational Classification (NOC) code, your hours, your language
            results and your employer&apos;s situation.</p>
          <p>For some Cochrane applicants, Alberta&apos;s Rural Renewal Stream
            opens a community-driven path when a designated employer is involved. Our team works through all of it so
            your application reflects the program as it runs today, not as it ran a year ago.
          </p>

          <h2>What working with our team looks like</h2>
          <p>
            From the first video call to your final submission, Wild Mountain Immigration keeps the process structured and
            transparent. You always know what stage your file is at, what it costs, and what comes next. Here is how most
            Cochrane cases unfold once we begin.
          </p>
          <ul>
            <li><strong>An honest assessment first.</strong> We map your realistic federal and Alberta options before you commit, rather than pushing a single program.</li>
            <li><strong>A clear, fixed-scope plan.</strong> You receive a written plan and fee so there are no surprises along the way.</li>
            <li><strong>Careful preparation.</strong> We build your forms, document strategy and submission, catching the small NOC and proof-of-funds errors that cause avoidable refusals.</li>
            <li><strong>Support to the finish.</strong> We stay with you through each IRCC and provincial milestone, all handled online by secure document sharing and video call.</li>
          </ul>

          <h2>What is an RCIC, and how to verify yours</h2>
          <p>
            An <strong>RCIC</strong> is a Regulated Canadian Immigration Consultant: a professional licensed to give
            immigration advice and represent clients with Immigration, Refugees and Citizenship Canada (IRCC). RCICs are
            governed by the{" "}
            <strong>College of Immigration and Citizenship Consultants (CICC)</strong>, which sets the rules of conduct,
            requires professional insurance, and disciplines anyone who breaches them. Working with a licensed RCIC is
            how you protect yourself from the unlicensed &ldquo;ghost agents&rdquo; that prey on newcomers.
          </p>
          <p>
            You should never take a consultant&apos;s word for their licence, verify it. Wild Mountain Immigration works
            under our lead RCIC, Nicola Wightman, who holds RCIC #{site.rcicNumber} and is a member in good standing of
            the CICC. You can confirm this yourself on the{" "}
            <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer">CICC public register</a>{" "}
            in under a minute, and we encourage every prospective client to do so before they hire anyone, us included.
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

          <h2>Do I need to live in Cochrane to work with you?</h2>
          <p>
            No. While we&apos;re a <strong>Canmore-based immigration consultant serving Cochrane</strong>, with deep local knowledge of the
            Bow Valley, where you live doesn&apos;t change the quality of representation you receive. Canadian
            immigration is handled with IRCC online, so we successfully represent clients living elsewhere in Alberta,
            across Canada, and abroad, all remotely. If you found us by searching for an{" "}
            <strong>immigration consultant in Cochrane</strong> but live in Edmonton, Toronto or overseas, you&apos;re
            still very welcome.
          </p>
          <p>
            Ready to talk it through? As an <strong>immigration consultant serving Cochrane</strong> from our base in
            nearby Canmore, we make it easy to get a clear, honest read on your options. Learn more{" "}
            <a href="/about">about Nicola and the practice</a>, then book a time that suits you.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Talk to a licensed RCIC in Cochrane"
        sub="Book a no-pressure consultation with a CICC-regulated immigration consultant serving Cochrane and the Bow Valley, online by video call and phone anywhere in Canada."
      />
    </>
  );
}
