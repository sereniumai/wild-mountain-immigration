import type { Metadata } from "next";
import {
  Rocket, Mountain, Map, Heart, Briefcase, GraduationCap, BadgeCheck,
  Calculator, FileCheck2, ClipboardCheck, Check,
} from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, Steps,
  Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { ReviewsStrip } from "@/components/content/reviews";
import { YouTubeEmbed } from "@/components/content/youtube-embed";
import { Button } from "@/components/ui/button";
import { pageMeta, serviceLd } from "@/lib/seo";

const PATH = "/services";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Canadian Immigration Services",
  titleAbsolute: "Canadian Immigration Services | RCIC-Led Online",
  description:
    "Canadian immigration services in one place: Express Entry, the Alberta AAIP, PNPs, sponsorship, work and study permits, citizenship. RCIC-led. Get started.",
  path: PATH,
  keywords: [
    "canadian immigration services",
    "immigration consultant services",
    "RCIC services canada",
    "express entry help",
    "family sponsorship services",
  ],
});

const catalogue = [
  { icon: Rocket, title: "Express Entry", desc: "Canadian Experience Class, Federal Skilled Worker and Trades. We build your strongest CRS profile and time your entry.", href: "/express-entry", badge: "Federal PR" },
  { icon: Mountain, title: "Alberta (AAIP)", desc: "Our home turf. Opportunity, Express Entry, Rural Renewal, Health Care, Tech and more streams of the Alberta Advantage Immigration Program.", href: "/alberta-immigration", badge: "Our specialty" },
  { icon: Map, title: "Provincial Nominee Programs", desc: "Every PNP outside Quebec, from the BC PNP and Saskatchewan SINP to Ontario, the Atlantic provinces and the territories.", href: "/pnp" },
  { icon: Heart, title: "Family Sponsorship", desc: "Spousal and partner sponsorship (our flagship), dependent children, parents and grandparents, and the Super Visa.", href: "/family-sponsorship", badge: "Our flagship" },
  { icon: Briefcase, title: "Work Permits", desc: "LMIA-based and open work permits, the PGWP for graduates, bridging permits, IEC and intra-company transfers.", href: "/work-permits" },
  { icon: GraduationCap, title: "Study Permits", desc: "Study permits, the Provincial Attestation Letter (PAL) and proof of funds, with a clear pathway to PR after you graduate.", href: "/study-permit" },
  { icon: BadgeCheck, title: "Canadian Citizenship", desc: "Citizenship applications, the citizenship test, and citizenship by descent for those with a Canadian parent.", href: "/citizenship" },
  { icon: Calculator, title: "Free Tools", desc: "Check where you stand before you spend a dollar with our free CRS and AAIP points calculators.", href: "/tools" },
];

const faqs = [
  {
    q: "Which immigration services do you offer?",
    a: "We cover the full range of Canadian immigration outside Quebec: Express Entry, the Alberta Advantage Immigration Program (AAIP), provincial nominee programs across the country, family and spousal sponsorship, Super Visas, work permits (including LMIA-based, open, bridging, IEC and intra-company), study permits, and Canadian citizenship. We do not provide tribunal, appeal or refugee representation, but we will tell you honestly if your situation needs that kind of help.",
  },
  {
    q: "Do you offer services in person or only online?",
    a: "All of our services are delivered online, by video call, phone and secure document sharing. Canadian immigration is handled with IRCC online, so working remotely makes no difference to the quality of your representation. We are based in Canmore, Alberta and work with clients across the Bow Valley, Calgary, all of Alberta, Canada and worldwide.",
  },
  {
    q: "How do I choose the right service for my situation?",
    a: "You do not have to work it out alone. Tell us your goals and background through our contact page, and we assess which program and service tier fits, then recommend the right route. Often there is more than one pathway, and our job is to find the one that gives you the best realistic chance.",
  },
  {
    q: "What is the difference between File Management and File Review?",
    a: "File Management is our full service: we prepare and submit your entire application and represent you with IRCC from start to finish. File Review is a lower-cost option where you prepare your own application and our RCIC reviews it for errors and missed opportunities before you submit. Both are delivered by the same licensed RCIC practice.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: "Canadian immigration services",
            description:
              "Every Canadian immigration service in one place: Express Entry, the Alberta AAIP, PNPs, sponsorship, work and study permits, citizenship. RCIC-led online.",
            path: PATH,
            serviceType: "Immigration consulting",
          }),
        ]}
      />

      <PageHero size="hub"
        eyebrow="Our Services"
        crumbs={[{ name: "Our Services", path: PATH }]}
        title={<>Canadian immigration services, <span className="text-brand">one trusted RCIC</span></>}
        lede={
          <p>
            Wild Mountain Immigration delivers the full range of <strong>Canadian immigration services</strong> outside
            Quebec, from <strong>Express Entry</strong> and the <strong>Alberta AAIP</strong> to{" "}
            <strong>family sponsorship</strong>, work and study permits and citizenship. Everything is handled online by
            a licensed RCIC, wherever you are in the world.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/fees", label: "See how fees work" }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "How Wild Mountain Immigration helps you move to Canada",
          description: "An introduction to Wild Mountain Immigration, a CICC-regulated immigration practice, and how our services help you move to Canada.",
          thumbnailUrl: "https://i.ytimg.com/vi/rezRd0yn21k/hqdefault.jpg",
          contentUrl: "https://www.youtube.com/watch?v=rezRd0yn21k",
          embedUrl: "https://www.youtube.com/embed/rezRd0yn21k",
          uploadDate: "2024-01-01",
        }}
      />

      <Section muted>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.5rem]">See how we work with you</h2>
            <p className="mt-3 text-lg text-ink-soft">A short introduction to our practice and how we help you move to Canada, start to finish.</p>
          </div>
          <div className="mt-8">
            <YouTubeEmbed id="rezRd0yn21k" title="How Wild Mountain Immigration helps you move to Canada" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.5rem]">Our Canadian immigration services</h2>
          <p className="mt-3 text-lg text-ink-soft">
            Choose a service to explore the programs, eligibility and steps in detail.
          </p>
        </div>
        <div className="mt-12">
          <FeatureGrid>
            {catalogue.map((s) => (
              <FeatureCard key={s.href} icon={s.icon} title={s.title} desc={s.desc} href={s.href} badge={s.badge} />
            ))}
          </FeatureGrid>
        </div>
      </Section>

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <BadgeCheck className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure which service?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Tell us your goals and we will point you to the right pathway, honestly.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Fees", href: "/fees", note: "How pricing works, fixed and written" },
                { label: "About us", href: "/about", note: "Licence #R706497, CICC-regulated" },
                { label: "Free tools", href: "/tools", note: "CRS and AAIP calculators" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Wild Mountain Immigration delivers Canadian immigration services across every route outside Quebec: Express Entry, the Alberta AAIP, provincial nominee programs, family and spousal sponsorship, work and study permits, and citizenship. A licensed RCIC in Canmore handles everything online. You can choose full File Management or a lower-cost File Review."
            items={[
              <>We handle <strong>every Canadian immigration route outside Quebec</strong>, federal, provincial, family, work, study and citizenship.</>,
              <>Two ways to work: full <strong>File Management</strong> or lower-cost <strong>File Review</strong>, both by a licensed RCIC.</>,
              <>The <strong>Alberta AAIP</strong> and <strong>spousal sponsorship</strong> are our specialties.</>,
              <>Everything is <strong>online</strong>, by video and secure document sharing, so location is no barrier.</>,
              <>We promise careful, complete work and straight answers.</>,
            ]}
          />

          <h2>How our Canadian immigration services work</h2>
          <p>
            Whatever service you need, the way we work is the same: honest, structured and transparent. Our
            immigration consultant services cover the PR pathways that matter most, from Express Entry and the
            Alberta AAIP to spousal sponsorship and the Super Visa, so you always know what is happening, what it
            costs, and what comes next.
          </p>
          <Steps
            steps={[
              { title: "Get in touch", desc: "Tell us your goals and history through our contact page. We give you an honest read on your real options." },
              { title: "Your strategy", desc: "We map the best pathway for your case and a clear, fixed-scope plan with transparent, written fees." },
              { title: "Application & support", desc: "We prepare and submit your strongest application, and stay with you through every milestone to the finish." },
            ]}
          />

          <h2>Two ways to work with us</h2>
          <p>
            Most firms only offer the expensive, full-service option. We give you a genuine choice across our
            Canadian immigration services, so whether you need a full permanent residence application built for you
            or a second set of expert eyes, you only pay for the level of help you actually need.
          </p>
          <div className="not-prose mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <FileCheck2 className="size-7 text-brand" strokeWidth={1.6} />
              <h3 className="mt-4 text-lg font-semibold text-ink">File Management</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">Full service. We handle every form, document and submission and represent you with IRCC from start to finish.</p>
              <ul className="mt-4 space-y-2 text-[14px] text-ink-soft">
                {["End-to-end application handling", "Document strategy and review", "We deal with IRCC for you", "Fixed-scope pricing up front"].map((p) => (
                  <li key={p} className="flex items-start gap-2"><span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand"><Check className="size-3" /></span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <ClipboardCheck className="size-7 text-brand" strokeWidth={1.6} />
              <h3 className="mt-4 text-lg font-semibold text-ink">File Review</h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">Lower cost. You prepare your own application and our RCIC reviews it for errors and missed opportunities before you submit.</p>
              <ul className="mt-4 space-y-2 text-[14px] text-ink-soft">
                {["Expert eyes before you submit", "Catch costly mistakes early", "Lower-cost, flexible option", "Peace of mind on your own filing"].map((p) => (
                  <li key={p} className="flex items-start gap-2"><span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand"><Check className="size-3" /></span>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <ReviewsStrip title="What our clients say" n={3} />
      </Section>

      <CtaBand
        title="Find the right pathway for you"
        sub="Tell us about your situation and a licensed RCIC will recommend the service and route that fit, with honest advice and clear fees."
      />
    </>
  );
}
