import type { Metadata } from "next";
import { Phone, MapPin, Clock, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Faq, JsonLd, KeyTakeaways } from "@/components/content/blocks";
import { ContactForm } from "@/components/contact-form";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/contact";

export const metadata: Metadata = pageMeta({
  title: "Contact an Immigration Consultant",
  titleAbsolute: "Contact an Immigration Consultant | RCIC in Canmore",
  description:
    "Contact an immigration consultant in Canmore, Alberta: a licensed RCIC. Send an enquiry and we reply within one business day. Serving all of Canada.",
  path: PATH,
  keywords: ["contact immigration consultant", "immigration consultant canmore contact", "rcic alberta contact"],
});

const faqs = [
  {
    q: "Where is Wild Mountain Immigration based?",
    a: "We are based in Canmore, Alberta, and serve clients across the Bow Valley and Calgary online. As a service-area business we meet clients by video call and phone, and we represent clients right across Canada and internationally.",
  },
  {
    q: "How soon will you respond?",
    a: "We reply to phone and email enquiries within one business day. If you have an approaching deadline, mention it in your message and we will prioritise your enquiry.",
  },
  {
    q: "How do I verify that you're a licensed consultant?",
    a: "Nicola Wightman is a Regulated Canadian Immigration Consultant, licence number R706497, governed by the College of Immigration and Citizenship Consultants (CICC). You can confirm her standing on the CICC public register at any time, we encourage it.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Wild Mountain Immigration",
          url: `${site.url}${PATH}`,
          mainEntity: {
            "@type": ["ProfessionalService", "LocalBusiness"],
            name: site.legalName,
            telephone: site.phone,
            email: site.email,
            url: site.url,
            address: { "@type": "PostalAddress", addressLocality: site.locality, addressRegion: site.regionCode, addressCountry: "CA" },
            areaServed: site.areasServed.map((n) => ({ "@type": "City", name: n })),
          },
        }}
      />

      <section className="relative overflow-hidden border-b border-line bg-linear-to-b from-brand-tint/50 via-white to-white">
        <Container className="py-12 lg:py-16">
          <div id="form" className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            {/* Left: hero content */}
            <div>
              <span className="inline-flex items-center rounded-full bg-blush px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">Contact</span>
              <h1 className="mt-5 font-heading text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3rem]">
                Contact our <span className="text-brand">immigration consultant</span>
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                Reach Wild Mountain Immigration, your licensed RCIC immigration consultant in Canmore, Alberta. Send
                your enquiry and we&apos;ll reply within one business day, wherever you are in the world.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href={site.phoneHref} className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-[15px] font-medium text-ink shadow-soft ring-1 ring-line transition-colors hover:text-brand">
                  <Phone className="size-4 text-brand" /> {site.phone}
                </a>
                <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-xl px-5 text-[15px] font-medium text-brand ring-1 ring-inset ring-brand/30 transition-colors hover:bg-brand-soft">
                  <BadgeCheck className="size-4" /> Verify RCIC #{site.rcicNumber}
                </a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13.5px] text-ink-soft">
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-4 text-brand" /> {site.locality}, {site.regionCode}</span>
                <span className="text-ink-faint">·</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="size-4 text-brand" /> Replies within one business day</span>
                <span className="text-ink-faint">·</span>
                <span>online across Canada &amp; worldwide</span>
              </p>
            </div>

            {/* Right: the enquiry form, in our pink */}
            <div>
              <ContactForm tone="pink" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="max-w-3xl space-y-10">
          <KeyTakeaways
            summary={
              <>
                To contact our immigration consultant, call the phone number{" "}
                <a href={site.phoneHref} className="font-medium text-brand hover:underline">{site.phone}</a>, send an
                email enquiry through the form on this page or request a quote. Wild Mountain Immigration is a licensed
                RCIC in Canmore, Alberta, and replies within one business day.
              </>
            }
            items={[
              <>Phone number: <a href={site.phoneHref} className="font-medium text-brand hover:underline">{site.phone}</a>, with calls and video appointments by arrangement.</>,
              <>Email address: use the secure enquiry form above to message us directly so your details reach the right consultant.</>,
              <>Business hours: enquiries answered Monday to Friday, with a reply within one business day.</>,
              <>Service area: based in {site.locality}, {site.regionCode}, serving the Bow Valley, Cochrane and Calgary, and representing clients across Canada and worldwide online.</>,
            ]}
          />

          <div className="prose-base max-w-none text-ink-soft">
            <h2 className="font-heading text-xl font-semibold text-ink">How to contact our immigration consultant</h2>
            <p className="mt-3">
              All of our work is handled online, so there is no office to visit. You simply reach us by phone, email or
              the enquiry form, wherever you are. Whether you want to ask a quick question, confirm your eligibility or
              get a quote, the fastest way to contact our immigration consultant is the form on this page. There, you can
              outline your situation and any deadlines so we can point you to the right next step.
            </p>
          </div>

          <Faq items={faqs} />
        </Container>
      </section>
    </>
  );
}
