import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
ServiceTrio,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { img } from "@/lib/images";
import { site, consult } from "@/lib/site";

const PATH = "/immigration-consultant-banff";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Immigration Consultant Banff",
  titleAbsolute: "Immigration Consultant Banff, Alberta | RCIC",
  description:
    "Immigration consultant in Banff, Alberta. Wild Mountain Immigration is a licensed RCIC practice (CICC #R706497) helping hospitality workers, online.",
  path: PATH,
  keywords: [
    "immigration consultant Banff",
    "Banff work permit help",
    "hospitality worker immigration Banff",
    "Bow Valley RCIC",
    "Banff PR pathways",
  ],
});

const faqs = [
  {
    q: "Do I have to live in Banff to work with you?",
    a: "No. We're a Bow Valley RCIC practice based right next door in Canmore, Alberta, and we work with Banff and Canmore clients online, by video call and phone. Banff hospitality workers run their files entirely online, the service is identical wherever you are.",
  },
  {
    q: "I'm on a seasonal work permit in Banff, can I move to permanent residence?",
    a: "Often, yes. Banff hospitality and tourism work counts as Canadian work experience, which can open Express Entry's Canadian Experience Class and Alberta's provincial streams, including the Alberta Tourism & Hospitality Stream. We assess your NOC code, hours and employer, then map a realistic seasonal-to-PR route.",
  },
  {
    q: "What is the Alberta Tourism & Hospitality Stream?",
    a: "It's an Alberta Advantage Immigration Program (AAIP) stream designed for workers in eligible tourism and hospitality occupations with a qualifying Alberta job offer, exactly the kind of roles common across Banff hotels, restaurants and attractions. We confirm whether your occupation and employer fit before you apply.",
  },
  {
    q: "My Banff employer wants to hire me, do they need an LMIA?",
    a: "Usually, yes. Most employer-specific work permits for Banff hospitality roles require a positive Labour Market Impact Assessment (LMIA) from the employer, though some workers qualify under LMIA-exempt categories. We review your situation and the employer's options so the work permit application is built correctly the first time.",
  },
  {
    q: "Are you a licensed immigration consultant?",
    a: "Yes. Wild Mountain Immigration works under a licensed Regulated Canadian Immigration Consultant (RCIC #R706497), governed by the College of Immigration and Citizenship Consultants (CICC). You can verify our standing on the CICC public register at any time, and we encourage every client to check before hiring anyone.",
  },
  {
    q: "Can you help if my work permit is expiring soon?",
    a: "Yes, and timing matters in Banff's seasonal economy. If your permit is nearing its end, reach out early so we can assess an extension, a bridging option, or a permanent-residence pathway before you lose status. The sooner we look at your file, the more options you usually have.",
  },
  {
    q: "How much does it cost to work with an immigration consultant?",
    a: "It depends on your case and whether you choose full File Management or our lower-cost File Review. We set out clear, fixed-scope fees in writing up front, so there are no surprises.",
  },
  {
    q: "How do I book a Banff consultation?",
    a: "Get started through our online booking page, or call us at +1 (587) 857-3692. We'll confirm a video call at a time that works for you, and tell you exactly what to bring.",
  },
];

export default function ImmigrationConsultantBanffPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Immigration Consultant in Banff, Alberta, Licensed RCIC",
            description:
              "Immigration consultant in Banff, Alberta. Wild Mountain Immigration is a licensed RCIC practice (CICC #R706497) helping hospitality workers, online.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-15",
          }),
          serviceLd({
            name: "Immigration consulting in Banff, Alberta",
            description:
              "Immigration consultant in Banff, Alberta. Wild Mountain Immigration is a licensed RCIC practice (CICC #R706497) helping hospitality workers, online.",
            path: PATH,
            serviceType: "Immigration consultant",
          }),
          {
            "@context": "https://schema.org",
            "@type": ["ProfessionalService", "LocalBusiness"],
            name: "Wild Mountain Immigration Inc",
            areaServed: ["Banff", "Canmore", "Bow Valley", "Cochrane", "Calgary", "Alberta"].map(
              (n) => ({ "@type": "City", name: n })
            ),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Canmore",
              addressRegion: "AB",
              addressCountry: "CA",
            },
            telephone: "+1 (587) 857-3692",
            url: "https://wildmountainimmigration.com/immigration-consultant-banff",
          },
        ]}
      />

      <PageHero
        eyebrow="Banff, Alberta"
        crumbs={[{ name: "Immigration Consultant Banff", path: PATH }]}
        title={<>Immigration consultant in <span className="text-brand">Banff, Alberta</span></>}
        lede={
          <p>
            Need an <strong>immigration consultant in Banff</strong>? Wild Mountain Immigration is a licensed Bow Valley
            RCIC practice helping Banff&apos;s tourism and hospitality workers with work permits, the Alberta Tourism &amp;
            Hospitality Stream, and realistic seasonal-to-permanent-residence pathways, with honest, CICC-regulated advice.
          </p>
        }
        updated={UPDATED}
        image={img.rockies}
        imageAlt="The Canadian Rockies around Banff, Alberta, in the Bow Valley"
        secondaryCta={{ href: site.phoneHref, label: `Call ${site.phone}` }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <MapPin className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Serving Banff &amp; the Bow Valley</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Licensed RCIC helping Banff hospitality and tourism workers with permits and PR, online by video and phone.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
              <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-brand">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
            <RelatedLinks
              links={[
                { label: "Immigration consultant Calgary", href: "/immigration-consultant-calgary", note: "Serving Alberta's largest city" },
                { label: "Tourism & Hospitality Stream", href: "/alberta-immigration/tourism-hospitality-stream", note: "Alberta AAIP for Banff workers" },
                { label: "Work permits", href: "/work-permits", note: "LMIA, employer-specific & open permits" },
                { label: "Immigration consultant Canmore", href: "/", note: "Our home base in the Bow Valley" },
                { label: "About us & the practice", href: "/about", note: "RCIC #R706497, verify on CICC" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary={`An immigration consultant serving Banff, Wild Mountain Immigration is a licensed Bow Valley RCIC practice (CICC #${site.rcicNumber}) based right next door in Canmore, Alberta. It focuses on Banff work permit help for tourism and hospitality workers, the Alberta Tourism and Hospitality Stream, and realistic seasonal-to-PR pathways. Banff and Bow Valley clients are served online by video call and phone, never in person, and we work with clients across Canada remotely.`}
            items={[
              <>Wild Mountain Immigration is a <strong>licensed Bow Valley RCIC</strong> (RCIC #{site.rcicNumber}) serving Banff and Canmore.</>,
              <>We focus on <strong>Banff work permit help</strong> for tourism and hospitality workers, including LMIA-based and employer-specific permits.</>,
              <>The <strong><a href="/alberta-immigration/tourism-hospitality-stream">Alberta Tourism &amp; Hospitality Stream</a></strong> can turn eligible Banff jobs into a provincial nomination.</>,
              <>We map realistic <strong>seasonal-to-PR pathways</strong> using your Canadian work experience in Banff.</>,
              <>As a CICC-regulated consultant, our standing is <strong>publicly verifiable</strong>, and you don&apos;t need to live in Banff to work with us.</>,
            ]}
          />

          <h2>Why Banff workers need an immigration consultant who knows the Bow Valley</h2>
          <p>
            Banff is unlike anywhere else in Canada. Tucked inside a national park, its economy runs almost entirely on
            tourism and hospitality. Hotels, restaurants, ski hills, tour operators and attractions staff up for peak
            seasons, and they rely heavily on temporary foreign workers and working holiday participants on International
            Experience Canada (IEC) permits.
          </p>
          <p>
            If you came to Banff on a work permit, you already know how fast a season moves and how easily a permit
            expiry can sneak up. That&apos;s exactly why working with an <strong>immigration consultant in Banff</strong>{" "}
            who understands the Bow Valley&apos;s labour market matters.
          </p>
          <p>
            As a <strong>Bow Valley RCIC</strong> based right next door in Canmore, we see the same patterns
            repeatedly: a hospitality worker on an employer-specific permit who wants to stay, a seasonal employee
            wondering whether their hours &ldquo;count,&rdquo; a couple trying to keep their status aligned. We translate
            Banff&apos;s realities into a concrete immigration plan, not a generic checklist.
          </p>

          <h2>Banff work permit help, LMIA and employer-specific permits</h2>
          <p>
            Most foreign nationals working in Banff hold an <strong>employer-specific work permit</strong> tied to a
            national park employer, and for hospitality roles that permit usually rests on a positive{" "}
            <strong>Labour Market Impact Assessment (LMIA)</strong> from the employer. Getting <strong>Banff work permit help</strong> early
            means the application is built correctly the first time, along with the employer&apos;s LMIA where one is
            needed. That includes the right National Occupational Classification (NOC) code and supporting documents.
            Small errors here cause refusals and processing delays that can cost you a whole season.
          </p>
          <p>
            We also advise workers and employers on LMIA-exempt categories, the open work permit for an eligible spouse, and
            the Post-Graduation Work Permit (PGWP) for those who studied in Canada before arriving in Banff. The table below
            shows the permit routes we see most often in the Bow Valley, follow the link for our full{" "}
            <a href="/work-permits">work permits guide</a>.
          </p>
          <DataTable
            headers={["Permit route", "Who it suits in Banff"]}
            rows={[
              [
                "Employer-specific (LMIA-based)",
                "Hospitality and tourism workers hired for a specific Banff employer and role, the most common route in the valley.",
              ],
              [
                "LMIA-exempt work permit",
                "Workers covered by international agreements, intra-company transfers, or other exemptions where no LMIA is required.",
              ],
              [
                "Open work permit (spouse)",
                "Eligible spouses or partners of certain Banff workers and students, free to work for most employers.",
              ],
              [
                <a key="pgwp" href="/work-permits">Post-Graduation Work Permit</a>,
                "Recent graduates of Canadian institutions building Canadian experience before, or while, working in Banff.",
              ],
            ]}
            caption="Common Banff work permit routes for tourism and hospitality workers."
          />

          <h2>The Alberta Tourism &amp; Hospitality Stream, built for Banff jobs</h2>
          <p>
            For many Banff workers, the clearest route to staying permanently runs through Alberta&apos;s provincial
            program. The <strong><a href="/alberta-immigration/tourism-hospitality-stream">Alberta Tourism &amp;
            Hospitality Stream</a></strong>, part of the Alberta Advantage Immigration Program (AAIP), is designed for
            people working in eligible tourism and hospitality occupations with a qualifying Alberta job offer, precisely
            the roles that fill Banff&apos;s hotels, restaurants and visitor attractions.
          </p>
          <p>
            We assess whether your occupation, employer and work history line up with the stream&apos;s requirements, then
            prepare your Expression of Interest and nomination application alongside your federal options. This is
            <strong> hospitality worker immigration in Banff</strong> at its most practical, and we keep it honest: if a
            stream doesn&apos;t fit your profile, we&apos;ll tell you, and we&apos;ll point you toward the route that does.
          </p>
          <Callout type="brand" title="A service-area practice">
            Wild Mountain Immigration is a service-area business serving Banff, Canmore and the wider Bow Valley by
            appointment. We don&apos;t run a public walk-in office in Banff, all meetings are arranged online by video
            call and phone, wherever you are.
          </Callout>

          <h2>Seasonal-to-PR pathways for Banff hospitality workers</h2>
          <p>
            The big question we hear in Banff is simple: &ldquo;I came for a season, how do I stay for good?&rdquo; The
            encouraging answer is that the Canadian work experience you build in Banff is genuinely valuable. Skilled
            hospitality and tourism work can help you qualify for Express Entry&apos;s <strong>Canadian Experience
            Class</strong> and for Alberta&apos;s provincial streams, including the Tourism &amp; Hospitality Stream.
          </p>
          <p>
            Mapping a <strong>Banff PR pathway</strong> starts with the details: your exact NOC code, the hours you&apos;ve
            worked, your language test results, your education and your employer&apos;s situation. We take stock of all of
            it and build a sequence, the right permit now, the right experience banked, and the strongest permanent-
            residence application when the timing is right. Here&apos;s how that typically unfolds.
          </p>
          <Steps
            steps={[
              { title: "Secure your status", desc: "We get your Banff work permit, extension or bridging in order so you keep valid status while you build experience." },
              { title: "Bank the right experience", desc: "We confirm your NOC code and hours count toward Express Entry and Alberta streams, no surprises later." },
              { title: "Apply for PR", desc: "When the timing fits, we build your strongest permanent-residence application through the route that suits you best." },
            ]}
          />

          <h2>Serving Banff, Canmore &amp; the wider Bow Valley</h2>
          <p>
            We&apos;re proud to be a <strong>Bow Valley RCIC</strong> close to the communities we serve. In practice that
            means we regularly work with people in and around:
          </p>
          <ul>
            <li><strong>Banff</strong>, tourism and hospitality workers on permits, plus those eyeing permanent residence.</li>
            <li><strong>Canmore</strong>, our home base in the Bow Valley, just down the highway; see our <a href="/">Canmore immigration consultant</a> homepage.</li>
            <li><strong>Lake Louise &amp; the wider Bow Valley</strong>, resort and seasonal workers across the corridor.</li>
            <li><strong>Cochrane &amp; Calgary</strong>, the town and gateway city out east on Highway 1, served online.</li>
          </ul>
          <p>
            At the same time, Canadian immigration is national work handled online with IRCC. Once we represent you, your
            file runs the same whether you live in staff accommodation in Banff or Lake Louise or anywhere else. Secure
            document sharing, video calls and email mean distance is rarely a barrier.
          </p>

          <h2>What is an RCIC, and how to verify yours</h2>
          <p>
            An <strong>RCIC</strong> is a Regulated Canadian Immigration Consultant: a professional licensed to give
            immigration advice and represent clients with Immigration, Refugees and Citizenship Canada (IRCC). RCICs are
            governed by the <strong>College of Immigration and Citizenship Consultants (CICC)</strong>, which sets the
            rules of conduct, requires professional insurance, and disciplines anyone who breaches them. In a transient
            town like Banff, where unlicensed &ldquo;ghost agents&rdquo; target newcomers, working with a licensed RCIC is
            how you protect yourself.
          </p>
          <p>
            Never take a consultant&apos;s word for their licence, verify it. Wild Mountain Immigration works under our
            lead RCIC, Nicola Wightman, who holds RCIC #{site.rcicNumber} and is a member in good standing of the CICC.
            You can confirm this yourself on the{" "}
            <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer">CICC public register</a>{" "}
            in under a minute, and we encourage every prospective client to do so before they hire anyone, us included.
          </p>

          <h2>Plan your Banff move with a free tool</h2>
          <p>
            Curious where you stand before you book? Try our free{" "}
            <a href="/tools/crs-calculator">CRS Calculator</a> to estimate your Express Entry score, or the{" "}
            <a href="/tools/aaip-calculator">AAIP Calculator</a> to gauge your fit for Alberta&apos;s provincial program.
            They&apos;re a useful starting point, and then a consultation turns the numbers into a real plan.
          </p>

          <h2>How we work with you</h2>
          <p>
            You only pay for the help you actually need. Here are the three ways to work with our licensed RCIC
            practice, choose the level of support that fits you. Whichever you pick, you get an{" "}
            <strong>immigration consultant for Banff</strong> who knows the Bow Valley and answers honestly about your
            work permit and permanent-residence options.
          </p>
          <ServiceTrio />
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Talk to a licensed RCIC for Banff"
        sub="Book a no-pressure consultation about your Banff work permit or PR pathway with a Bow Valley, CICC-regulated immigration consultant, online by video call and phone across Canada."
      />
    </>
  );
}
