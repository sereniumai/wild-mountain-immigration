import type { Metadata } from "next";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  PageHero, Prose, KeyTakeaways, Faq, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { ContactForm } from "@/components/contact-form";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { site, consult } from "@/lib/site";
import { ClipboardCheck, FileCheck2, MessageSquare } from "lucide-react";

const PATH = "/consultation";

export const metadata: Metadata = pageMeta({
  title: "Book an Immigration Consultation, RCIC",
  titleAbsolute: "Immigration Consultation Canada: Book With an RCIC",
  description:
    "Book an immigration consultation with a licensed RCIC. Get an honest read on your options and a clear plan, online across Canada and worldwide.",
  path: PATH,
  keywords: ["immigration consultation canada", "book immigration consultant", "rcic consultation alberta"],
});

const faqs = [
  {
    q: "How do I book a consultation?",
    a: "Send us a few details through the form on this page. We reply within one business day to arrange a time that suits you, online by video call or phone, wherever you are in the world. The more you tell us up front, the more useful our first conversation will be.",
  },
  {
    q: "What happens in an immigration consultation?",
    a: "In a focused 30-minute to one-hour session we review your background, goals and any history with Canadian immigration, then give you an honest assessment of your realistic options. You leave with a clear sense of the best pathway, the likely timeline and the next steps, whether or not you choose to work with us.",
  },
  {
    q: "How much does an immigration consultation in Canada cost?",
    a: "A one-off consultation fee is $120. It is free for spousal sponsorship cases, and for every other service we waive the $120 entirely when you proceed with full File Management. To prepare for a consultation, have your passport, any past Canadian immigration history and a short note on your goals ready for your online appointment.",
  },
  {
    q: "Do I have to live in Canmore to book?",
    a: "No. We are based in Canmore, Alberta and work with clients across the Bow Valley and Calgary online, and we represent clients right across Canada and around the world by video call and phone. All of our work is done remotely.",
  },
  {
    q: "What is the difference between File Management and File Review?",
    a: "File Management is full service, we prepare and submit your entire application. File Review is a lower-cost option where you prepare your own application and Nicola reviews it for errors and missed opportunities before you submit. The consultation helps you choose the right fit.",
  },
  {
    q: "How quickly will you reply?",
    a: "We reply to enquiries within one business day. If your matter is time-sensitive, for example an approaching deadline, say so in your message and we will prioritise it.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({ headline: "Book an Immigration Consultation", description: "Book an immigration consultation with a licensed RCIC. Get an honest read on your options and a clear plan, online across Canada and worldwide.", path: PATH, dateModified: "2026-05-31" }),
          serviceLd({ name: "Immigration consultation", description: "Book an immigration consultation with a licensed RCIC. Get an honest read on your options and a clear plan, online across Canada and worldwide.", path: PATH }),
        ]}
      />

      <PageHero
        eyebrow="Get Started"
        crumbs={[{ name: "Book a Consultation", path: PATH }]}
        title={<>Book your immigration <span className="text-brand">consultation in Canada</span></>}
        lede={
          <p>
            Book an <strong>immigration consultation in Canada</strong> with a licensed RCIC and get an honest, personal
            read on your options. We give you straight advice and a clear plan in a focused online appointment, not
            promises about outcomes only IRCC can decide.
          </p>
        }
        primaryCta={{ href: "#book", label: "Send your enquiry" }}
        secondaryCta={{ href: "/tools/eligibility", label: "Check your eligibility first" }}
      />

      <section id="book" className="scroll-mt-24 py-14 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
            <div>
              <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink">Book your immigration consultation in Canada</h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                Share a few details and we&apos;ll come back within one business day to arrange your immigration
                consultation as an online appointment by video call or phone. To prepare for a consultation, have
                your passport, any past Canadian immigration history and a short note on your goals to hand. The
                more you tell us, the more useful our first conversation will be.
              </p>
              <div className="mt-7"><ContactForm /></div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <h3 className="font-heading text-base font-semibold text-ink">Speak to us directly</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3"><Phone className="size-4 text-brand" /><a href={site.phoneHref} className="text-ink-soft hover:text-brand">{site.phone}</a></li>
                  <li className="flex items-center gap-3"><Mail className="size-4 text-brand" /><a href="/contact" className="text-ink-soft hover:text-brand">Send us a message</a></li>
                  <li className="flex items-center gap-3"><Clock className="size-4 text-brand" /><span className="text-ink-soft">Replies within one business day</span></li>
                </ul>
                <p className="mt-4 border-t border-line pt-4 text-sm text-ink-soft">
                  A one-off consultation is <strong>$120</strong>, free for spousal sponsorship and waived when you
                  proceed with full File Management.
                </p>
              </div>
              <div className="rounded-2xl border border-brand/20 bg-brand-soft/60 p-6">
                <CheckCircle2 className="size-6 text-brand" />
                <h3 className="mt-3 font-heading text-base font-semibold text-ink">Regulated &amp; verifiable</h3>
                <p className="mt-1.5 text-sm text-ink-soft">
                  You&apos;ll work with a licensed RCIC (#{site.rcicNumber}), regulated by the CICC. You can confirm our
                  standing on the public register before we ever speak.
                </p>
              </div>
              <KeyTakeaways
                title="What you'll leave with"
                summary="An immigration consultation in Canada with Wild Mountain Immigration is a focused 30-minute to one-hour session with a licensed RCIC based in Canmore, Alberta. The flat fee is $120, free for spousal sponsorship and waived with full File Management. You receive an honest assessment of your realistic options, the best pathway for your goals and timeline, and clear next steps with transparent, fixed-scope fees. Sessions run online by video call and phone across Canada and worldwide."
                items={[
                  "An honest assessment of your realistic options",
                  "The best pathway for your goals and timeline",
                  "Clear next steps and transparent, fixed-scope fees",
                ]}
              />
            </aside>
          </div>
        </Container>
      </section>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">How working with us looks</h2>
          <p className="mt-3 text-ink-soft">A clear, three-step path from your immigration consultation in Canada to confirmation, all handled online.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={MessageSquare} title="1 · Consultation" desc="In a 30-minute to one-hour online session we learn your goals and history, then give you an honest assessment of your real options." />
            <FeatureCard icon={ClipboardCheck} title="2 · Your strategy" desc="We map the best pathway and a clear, fixed-scope plan with transparent fees, File Management or File Review." />
            <FeatureCard icon={FileCheck2} title="3 · Application & support" desc="We prepare and submit your strongest case and stay with you through every milestone." />
          </FeatureGrid>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Faq items={faqs} />
        </div>
      </Section>
    </>
  );
}
