import Link from "next/link";
import { Phone } from "lucide-react";
import { site, consult } from "@/lib/site";

/** Shared "Not sure where to start?" CTA card. Used in the content-page sidebars
 *  (app-shell) and the header's desktop slide-out section panel. */
export function SidebarCta() {
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface/70 p-4">
      <p className="text-[13px] font-semibold text-ink">Not sure where to start?</p>
      <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
        Tell us your situation and a licensed RCIC will map your best pathway.
      </p>
      <Link
        href={consult.href}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-b from-[#ee100c] to-brand px-3 py-2 text-[13.5px] font-medium text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5"
      >
        {consult.label}
      </Link>
      <a href={site.phoneHref} className="mt-2.5 flex items-center justify-center gap-1.5 text-[12.5px] font-medium text-ink-soft hover:text-brand">
        <Phone className="size-3.5" /> {site.phone}
      </a>
    </div>
  );
}
