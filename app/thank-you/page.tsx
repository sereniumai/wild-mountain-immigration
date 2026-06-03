import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LeadConversion } from "@/components/site/lead-conversion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Thank You | Wild Mountain Immigration" },
  description: "Thanks for your enquiry. Here is what happens next.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="py-20 lg:py-28">
      <LeadConversion />
      <Container className="max-w-2xl text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-tint text-brand ring-1 ring-inset ring-brand/15">
          <Check className="size-8" strokeWidth={2.2} />
        </span>
        <h1 className="mt-6 text-[2.3rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.9rem]">
          Thank you, your enquiry is in
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
          We&apos;ve received your message and a member of the team will review it. Thank you for considering Wild
          Mountain Immigration.
        </p>

        {/* Honest expectation-setting: we cannot reply to everyone. */}
        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-line bg-surface/70 p-6 text-left shadow-soft sm:p-7">
          <h2 className="font-heading text-lg font-semibold text-ink">One honest note before you go</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            We&apos;re a small, regulated practice and we receive a high volume of enquiries. We can&apos;t take on
            every case, and we aren&apos;t always able to reply to everyone. If your situation falls outside what we can
            help with, or we&apos;re at capacity right now, you may not hear back from us.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            It&apos;s nothing personal. We&apos;d rather be upfront than make a promise we can&apos;t keep. If we can
            help and we have room, we&apos;ll be in touch, usually within one business day.
          </p>
        </div>

        {/* While you wait */}
        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-faint">While you wait</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/tools/eligibility" withArrow>Check what you qualify for</Button>
            <Button href="/" variant="secondary">Back to home</Button>
          </div>
          <p className="mt-6 text-[15px] text-ink-soft">
            Something urgent, like an approaching deadline? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-brand hover:underline">{site.phone}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
