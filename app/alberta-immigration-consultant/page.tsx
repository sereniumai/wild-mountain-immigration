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

const PATH = "/alberta-immigration-consultant";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Immigration Consultant Alberta",
  titleAbsolute: "Immigration Consultant Alberta | Licensed RCIC",
  description:
    "Immigration consultant in Alberta: Wild Mountain is a licensed RCIC practice (CICC #R706497) helping with the AAIP and federal PR. Book a consultation.",
  path: PATH,
  keywords: [
    "immigration consultant Alberta",
    "RCIC Alberta",
    "licensed immigration consultant Alberta",
    "immigration consultants in Alberta",
    "AAIP help",
  ],
});

const faqs = [
  {
    q: "What does an immigration consultant in Alberta do?",
    a: "A licensed immigration consultant in Alberta gives regulated advice and represents you with IRCC and the province across permanent residence, work and study permits, and family sponsorship. We assess your profile, recommend the strongest federal and Alberta routes, and manage the paperwork from start to finish so nothing slips through the cracks.",
  },
  {
    q: "Are you a licensed immigration consultant in Alberta?",
    a: "Yes. Wild Mountain Immigration works under a licensed Regulated Canadian Immigration Consultant (RCIC #R706497), governed by the College of Immigration and Citizenship Consultants (CICC). You can confirm our standing on the CICC public register at any time, and we encourage every prospective client to do so before hiring any consultant.",
  },
  {
    q: "Do I have to live in Alberta to work with you?",
    a: "No. We're a Canmore-based RCIC practice working with clients across Alberta online, by video call and phone, and Canadian immigration is handled with IRCC online, so we represent clients right across the province, elsewhere in Canada, and overseas, all remotely.",
  },
  {
    q: "Can you help with the Alberta AAIP?",
    a: "Yes, Alberta is our home province, so the Alberta Advantage Immigration Program (AAIP) is core to what we do. We assess whether an AAIP stream fits your profile, build your Expression of Interest, and manage the nomination application alongside your federal options. See our in-depth Alberta AAIP guide for the full stream breakdown.",
  },
  {
    q: "Which Alberta cities and regions do you serve?",
    a: "We serve clients province-wide. We regularly work with people in Cochrane, Calgary, Canmore and Banff online, and represent clients in Edmonton, Red Deer, Lethbridge, Grande Prairie, Fort McMurray and Alberta's rural communities remotely. Wherever you are in Alberta, the representation is the same.",
  },
  {
    q: "What's the difference between an immigration consultant and a lawyer in Alberta?",
    a: "Both a licensed RCIC and an immigration lawyer can legally represent you with IRCC. An RCIC specialises exclusively in immigration and is regulated by the CICC. For most permanent-residence, work, study and family cases, a licensed RCIC offers focused expertise, often at a lower cost than a law firm.",
  },
  {
    q: "How much does it cost to hire an immigration consultant in Alberta?",
    a: "It depends on your case and whether you choose full File Management or our lower-cost File Review. We set out clear, fixed-scope fees in writing up front, so there are no surprises.",
  },
  {
    q: "How do I book a consultation?",
    a: "Book online through our consultation page, or call us at +1 (587) 857-3692. We'll confirm a video call at a time that suits you, anywhere in Alberta, and tell you exactly what to bring.",
  },
];

export default function AlbertaImmigrationConsultantPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Immigration Consultant in Alberta, Licensed RCIC, Province-Wide",
            description:
              "Immigration consultant in Alberta. Wild Mountain Immigration is a licensed RCIC practice (CICC #R706497) helping clients with the AAIP and federal PR.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Immigration consulting in Alberta",
            description:
              "Immigration consultant in Alberta. Wild Mountain Immigration is a licensed RCIC practice (CICC #R706497) helping clients with the AAIP and federal PR.",
            path: PATH,
            serviceType: "Immigration consultant",
          }),
          {
            "@context": "https://schema.org",
            "@type": ["ProfessionalService", "LocalBusiness"],
            name: "Wild Mountain Immigration Inc",
            areaServed: ["Cochrane", "Calgary", "Canmore", "Banff", "Alberta"].map(
              (n) => ({ "@type": "City", name: n })
            ),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Canmore",
              addressRegion: "AB",
              addressCountry: "CA",
            },
            telephone: "+1 (587) 857-3692",
            url: "https://wildmountainimmigration.com/alberta-immigration-consultant",
          },
        ]}
      />

      <PageHero
        eyebrow="Alberta, Canada"
        crumbs={[{ name: "Immigration Consultant Alberta", path: PATH }]}
        title={<>Immigration consultant in <span className="text-brand">Alberta</span></>}
        lede={
          <p>
            Searching for an <strong>immigration consultant in Alberta</strong>? Wild Mountain Immigration is a licensed
            RCIC practice serving clients province-wide, from Calgary and the Bow Valley to Edmonton, Red Deer and
            rural Alberta, with honest, regulated guidance on the Alberta AAIP, federal permanent residence, work and
            study permits, and family sponsorship.
          </p>
        }
        updated={UPDATED}
        image={img.rockies}
        imageAlt="The Canadian Rockies in Alberta, where Wild Mountain Immigration is based"
        secondaryCta={{ href: site.phoneHref, label: `Call ${site.phone}` }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Serving all of Alberta</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Licensed RCIC based in Canmore, AB, online by video and phone around Calgary and the Bow Valley, and province-wide remotely.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
              <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-brand">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
            <RelatedLinks
              links={[
                { label: "Alberta AAIP guide", href: "/alberta-immigration", note: "Our home-province program" },
                { label: "Immigration consultant Calgary", href: "/immigration-consultant-calgary", note: "Alberta's largest city" },
                { label: "Immigration consultant Canmore", href: "/", note: "Our home base in the Bow Valley" },
                { label: "Immigration consultant Cochrane", href: "/immigration-consultant-cochrane", note: "Served, east toward Calgary" },
                { label: "Express Entry", href: "/express-entry", note: "Fastest federal PR route" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary={`As an immigration consultant in Alberta, Wild Mountain Immigration is a licensed RCIC practice (CICC #${site.rcicNumber}) based in Canmore and serving clients province-wide. We help with the Alberta Advantage Immigration Program (AAIP) alongside federal Express Entry, family sponsorship, and work and study permits. Clients around Calgary and the Bow Valley, and across the rest of Alberta and Canada, are served online by video call and phone, never in person.`}
            items={[
              <>Wild Mountain Immigration is a <strong>licensed RCIC practice serving clients across Alberta</strong> (RCIC #{site.rcicNumber}).</>,
              <>We help with the <strong>Alberta Advantage Immigration Program (AAIP)</strong> as well as federal Express Entry and family routes.</>,
              <>We work with clients online around <strong>Calgary and the Bow Valley</strong> and represent the rest of Alberta remotely.</>,
              <>As a <strong>CICC-regulated consultant</strong>, our standing is publicly verifiable on the CICC register.</>,
              <>You <strong>don&apos;t need to live in Alberta</strong> to work with us, most cases run smoothly by video call.</>,
            ]}
          />

          <h2>Why work with a local immigration consultant in Alberta</h2>
          <p>
            Choosing an <strong>immigration consultant in Alberta</strong> who actually knows the province gives your
            application a genuine advantage. We live and work here, so we understand the economy that shapes so many
            cases across the province.</p>
          <p>That means the energy and tech employers in Calgary and Edmonton, the year-round
            tourism and hospitality work in Canmore and Banff, the healthcare demand in mid-sized cities, and the
            agriculture and trades roles that drive Alberta&apos;s rural communities. When your immigration route depends on Alberta
            employers, an Alberta job offer, and the Alberta PNP (the province&apos;s own provincial nominee program),
            that local context matters.
          </p>
          <p>
            Working with a <strong>licensed immigration consultant in Alberta</strong> also means a regulated
            professional you can hold accountable. Many clients start with a video call to talk through their options,
            then run the rest of the process by email and video. You get the convenience of remote work with the
            reassurance of a real, CICC-regulated <strong>RCIC in Alberta</strong> standing behind your file.
          </p>

          <h2>Immigration services we offer across Alberta</h2>
          <p>
            As a full-service <strong>RCIC in Alberta</strong>, we handle the federal and provincial routes that matter
            most to people building a life here. The table below shows our core services and how we help, follow the
            links for the in-depth guide on each.
          </p>
          <DataTable
            headers={["Service", "How we help"]}
            rows={[
              [
                <a href="/alberta-immigration">Alberta AAIP</a>,
                "Assess Alberta Advantage Immigration Program streams, prepare your Expression of Interest, and run your nomination application.",
              ],
              [
                <a href="/express-entry">Express Entry</a>,
                "Build your strongest CRS profile, choose the right program, and manage your permanent-residence application end to end.",
              ],
              [
                <a href="/family-sponsorship">Family sponsorship</a>,
                "Reunite with a spouse, partner, parent or grandparent through sponsorship and the Super Visa.",
              ],
              [
                <a href="/work-permits">Work permits</a>,
                "LMIA-based, employer-specific and open work permits, plus the PGWP, important for Alberta's hospitality and seasonal roles.",
              ],
              [
                <a href="/study-permit">Study permits</a>,
                "Study in Alberta and build a pathway to permanent residence after graduation.",
              ],
            ]}
            caption="Core immigration services from our Alberta-based RCIC practice."
          />
          <p>
            Not sure which route fits? That&apos;s exactly what a first consultation is for. We give you an honest read on
            your options rather than pushing a single program.
          </p>

          <h2>How we help with the Alberta AAIP</h2>
          <p>
            For many newcomers, the province&apos;s own program is the clearest route to permanent residence. In fact,
            <strong> AAIP help</strong> is one of the most common reasons people look for an <strong>immigration
            consultant in Alberta</strong>. As the province&apos;s provincial nominee program, the Alberta Advantage
            Immigration Program runs several streams, from the Alberta Opportunity Stream for workers already employed
            here, to the Express Entry Stream that draws from the federal pool, plus dedicated pathways for healthcare,
            tech, tourism and hospitality, and the Rural Renewal Stream for smaller communities.
          </p>
          <p>
            Each stream has its own eligibility rules, scoring, and document requirements, and they change as Alberta
            adjusts its priorities. We assess which stream genuinely fits your profile, prepare your Expression of
            Interest, and manage the nomination application alongside any federal options, so you&apos;re pursuing the
            strongest realistic path rather than guessing. Our full <a href="/alberta-immigration">Alberta AAIP
            guide</a> walks through every stream in detail.
          </p>
          <Callout type="brand" title="Alberta is our home turf">
            We&apos;re based in Canmore and the AAIP is core to our practice. That province-level focus means we keep on
            top of Alberta&apos;s stream changes and draw patterns so your application reflects how the program actually
            works today, not how it worked a year ago.
          </Callout>

          <h2>Serving clients across Alberta, and Canada-wide remotely</h2>
          <p>
            We&apos;re proud to be an <strong>immigration consultant serving the whole of Alberta</strong>. In practice
            that means we regularly work with people in and around:
          </p>
          <ul>
            <li><strong>Calgary</strong>, Alberta&apos;s largest city and a major source of skilled-worker and family cases. See our <a href="/immigration-consultant-calgary">Calgary immigration consultant</a> page.</li>
            <li><strong>Canmore &amp; the Bow Valley</strong>, our home base, with nearby Cochrane covered on our <a href="/immigration-consultant-cochrane">Cochrane immigration consultant</a> page.</li>
            <li><strong>Edmonton, Red Deer &amp; Lethbridge</strong>, clients across central and southern Alberta we represent remotely, so anyone searching for an Edmonton immigration consultant gets the same province-wide service.</li>
            <li><strong>Rural &amp; northern Alberta</strong>, Grande Prairie, Fort McMurray and smaller communities, often through the Rural Renewal Stream and other rural-focused AAIP routes.</li>
          </ul>
          <p>
            Immigration is national work, so once we represent you, your file is handled the same way whether you&apos;re
            in Calgary, Edmonton or a small Alberta town. Video calls, secure document sharing and email mean distance is
            rarely a barrier, so our <strong>immigration help in Alberta</strong> reaches clients province-wide and
            beyond.
          </p>
          <Callout type="info" title="A service-area practice">
            Wild Mountain Immigration is a service-area business serving Alberta by appointment. We don&apos;t run a
            public walk-in storefront, all meetings are arranged online by video call and phone, wherever you are.
          </Callout>

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
            in under a minute, and we encourage every prospective client across Alberta to do so before they hire anyone,
            us included.
          </p>
          <Callout type="info" title="How to verify any immigration consultant">
            Search the consultant&apos;s name or licence number on the CICC register, confirm the status reads
            &ldquo;active&rdquo; or &ldquo;good standing,&rdquo; and check the number matches. If a consultant can&apos;t
            give you a licence number, that&apos;s a red flag.
          </Callout>

          <h2>How to start with an Alberta immigration consultant</h2>
          <p>
            You only pay for the help you actually need. Here are the three ways to work with our licensed RCIC
            practice, choose the level of support that fits you.
          </p>
          <ServiceTrio />

          <h2>Do I need to live in Alberta to work with you?</h2>
          <p>
            No. While we&apos;re an <strong>Alberta-based immigration consultant</strong> with deep local knowledge of the
            province, where you live doesn&apos;t change the quality of representation you receive.
            Canadian immigration is handled with IRCC online, so we successfully represent clients elsewhere in Canada
            and abroad, all remotely. If you found us by searching for an <strong>immigration consultant in
            Alberta</strong> but live outside the province, or you&apos;re planning a move here from overseas, you&apos;re
            still very welcome.
          </p>
          <p>
            Ready to talk it through with an <strong>immigration consultant in Alberta</strong> who handles every step,
            from your Alberta job offer and AAIP nomination to permanent residence in Alberta? Learn more{" "}
            <a href="/about">about Nicola and the practice</a>, then book a time that suits you.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Talk to a licensed RCIC in Alberta"
        sub="Book a no-pressure consultation with an Alberta-based, CICC-regulated immigration consultant, online by video call and phone anywhere in the province."
      />
    </>
  );
}
