import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import {
  ArrowRight, BadgeCheck, Check, ChevronRight, ChevronDown,
  Info, TriangleAlert, CircleCheck, Sparkles,
  MessageSquare, ClipboardCheck, FileCheck2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site, consult } from "@/lib/site";
import { breadcrumbLd, faqLd, type Crumb } from "@/lib/seo";
import { jsonLd } from "@/lib/jsonld";

/* ------------------------------------------------------------------ JSON-LD */
export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(d) }} />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ label */
export function Label({ children, center, light }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={clsx("flex", center && "justify-center")}>
      <span
        className={clsx(
          "inline-flex items-center rounded-full px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em]",
          light ? "bg-white/15 text-white" : "bg-blush text-brand",
        )}
      >
        {children}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ breadcrumb */
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-faint">
      {all.map((c, i) => {
        const last = i === all.length - 1;
        return (
          <span key={c.path} className="flex items-center gap-1.5">
            {last ? (
              <span className="font-medium text-ink-soft">{c.name}</span>
            ) : (
              <Link href={c.path} className="transition-colors hover:text-brand">{c.name}</Link>
            )}
            {!last && <ChevronRight className="size-3.5" />}
          </span>
        );
      })}
    </nav>
  );
}

/* ------------------------------------------------------------------ byline */
export function Byline({ updated = "May 2026" }: { updated?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-ink-soft">
      <span className="inline-flex items-center gap-1.5">
        <BadgeCheck className="size-4 text-brand" />
        Reviewed by{" "}
        <Link href="/about" className="font-medium text-ink underline-offset-2 hover:underline">
          {site.rcicName}, RCIC #{site.rcicNumber}
        </Link>
      </span>
      <span className="hidden h-3 w-px bg-line sm:block" />
      <span>Last updated {updated}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ page hero */
type Cta = { href: string; label: string };
export function PageHero({
  eyebrow, title, lede, crumbs, updated, image, imageAlt,
  primaryCta = { href: consult.href, label: consult.label },
  secondaryCta, size = "default",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  crumbs: Crumb[];
  updated?: string;
  image?: string;
  imageAlt?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** "hub" gives section landing pages a larger, more authoritative hero so the
   *  pillar/cluster hierarchy reads clearly against their child pages. */
  size?: "default" | "hub";
}) {
  const hub = size === "hub";
  return (
    <section className="relative overflow-hidden bg-white">
      <JsonLd data={breadcrumbLd(crumbs)} />
      <div className="hero-spot" aria-hidden />
      <div className="absolute inset-0 fade-grid" aria-hidden />
      <Container className={clsx("relative pt-8 pb-14 lg:pt-12", hub ? "lg:pb-20" : "lg:pb-16", image && "lg:pb-20")}>
        <Breadcrumb crumbs={crumbs} />
        <div className={clsx("mt-7 grid items-center gap-x-12 gap-y-12", image && "lg:grid-cols-[1.08fr_0.92fr]")}>
          <div className={clsx(!image && (hub ? "max-w-4xl" : "max-w-3xl"))}>
            <Label>{eyebrow}</Label>
            <h1
              className={clsx(
                "mt-5 font-semibold leading-[1.04] tracking-[-0.035em] text-ink",
                // Hub (section landing) and default (cluster) pages share one H1
                // size so every program heading reads consistently.
                "text-[2.4rem] sm:text-[3.25rem] lg:text-[3.5rem]"
              )}
            >
              {title}
            </h1>
            <div className={clsx("mt-6 max-w-2xl leading-relaxed text-ink-soft", hub ? "text-lg sm:text-xl" : "text-lg")}>{lede}</div>
            <div className="mt-7"><Byline updated={updated} /></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg" withArrow>{primaryCta.label}</Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} size="lg" variant="secondary">{secondaryCta.label}</Button>
              )}
            </div>
          </div>
          {image && (
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/15 to-brand/10 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-window ring-1 ring-black/5">
                <Image src={image} alt={imageAlt ?? ""} fill loading="eager" fetchPriority="high" quality={60} sizes="(max-width: 1024px) 90vw, 440px" className="object-cover" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ section + layout */
export function Section({ children, muted, dark, className }: { children: React.ReactNode; muted?: boolean; dark?: boolean; className?: string }) {
  return (
    <section className={clsx("py-16 lg:py-20", muted && "bg-surface", dark && "bg-ink text-white", className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Two-column article layout: main prose + sticky aside (TOC / CTA / related). */
export function ArticleLayout({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <Container className="py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="min-w-0">{children}</div>
        {aside && <aside className="hidden lg:block"><div className="sticky top-28 space-y-6">{aside}</div></aside>}
      </div>
    </Container>
  );
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("prose-wmi max-w-2xl", className)}>{children}</div>;
}

/* ------------------------------------------------------------------ answer box */
export function AnswerBox({ children, label = "Quick answer" }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="rounded-2xl border border-brand/20 bg-brand-tint p-5 sm:p-6">
      <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brand">
        <Sparkles className="size-4" /> {label}
      </div>
      <div className="mt-2.5 text-[1.0625rem] leading-relaxed text-ink">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ key takeaways */
/**
 * KeyTakeaways with an optional answer-first `summary`: a concise, self-contained
 * 2 to 3 sentence overview written for Google featured snippets and AI/LLM answers.
 * Keep `summary` factual, lead with the page's primary keyword, and make it readable
 * out of context (it is the snippet engines and assistants will quote).
 */
export function KeyTakeaways({ items, title = "Key takeaways", summary }: { items: React.ReactNode[]; title?: string; summary?: React.ReactNode }) {
  return (
    <div className="not-prose rounded-2xl border border-line bg-surface/60 p-6">
      <h2 className="flex items-center gap-2 font-heading text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">
        <Sparkles className="size-3.5" /> {title}
      </h2>
      {summary && <p className="mt-3 text-base leading-relaxed text-ink">{summary}</p>}
      {items.length > 0 && (
        <ul className={clsx("space-y-2.5", summary ? "mt-5 border-t border-line pt-5" : "mt-4")}>
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand"><Check className="size-3.5" /></span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ data table */
export function DataTable({ headers, rows, caption }: { headers: string[]; rows: React.ReactNode[][]; caption?: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-line shadow-soft">
      <table className="w-full border-collapse text-left text-[14.5px]">
        {caption && <caption className="px-5 py-3 text-left text-xs text-ink-faint">{caption}</caption>}
        <thead>
          <tr className="bg-surface">
            {headers.map((h, i) => (
              <th key={i} className="border-b border-line px-4 py-3 font-heading text-[13px] font-semibold uppercase tracking-wide text-ink-soft">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="even:bg-surface/40">
              {r.map((c, ci) => (
                <td key={ci} className={clsx("border-b border-line-soft px-4 py-3 align-top text-ink-soft", ci === 0 && "font-medium text-ink")}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ feature grid */
export function FeatureGrid({ children, cols = 3 }: { children: React.ReactNode; cols?: 2 | 3 }) {
  return <div className={clsx("grid gap-5", cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>{children}</div>;
}

export function FeatureCard({ title, desc, href, badge, icon: Icon }: { title: string; desc: string; href?: string; badge?: string; icon?: React.ComponentType<{ className?: string; strokeWidth?: number }> }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        {Icon ? <Icon className="size-7 text-brand" strokeWidth={1.6} /> : <span />}
        {badge && <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[11px] font-semibold text-brand">{badge}</span>}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{desc}</p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
          Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </>
  );
  const cls = "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]";
  return href ? <Link href={href} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>;
}

/* ------------------------------------------------------------------ steps */
export function Steps({ steps }: { steps: { title: string; desc: React.ReactNode }[] }) {
  // Boxless numbered steps: a prominent badge anchors each step, content hugs
  // its own height (no equal-height card stretch, so no dead space), and the
  // generous gaps give the copy room to breathe. 3 steps = one row; more = 2-up.
  const grid = steps.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ol className={clsx("not-prose grid list-none gap-x-8 gap-y-10", grid)}>
      {steps.map((s, i) => (
        <li key={i} className="group relative">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-tint font-heading text-[17px] font-bold tracking-tight text-brand ring-1 ring-inset ring-brand/15 transition-colors group-hover:bg-brand group-hover:text-white">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{s.title}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ service trio */
/** The three ways to work with the practice: consultation, file review, file management. */
export function ServiceTrio() {
  const items = [
    { name: "Consultation", icon: MessageSquare, desc: "Start with an honest, one-to-one conversation. We assess your situation and map the right pathway, with clear next steps and no pressure." },
    { name: "File Review", icon: ClipboardCheck, desc: "Prefer to do it yourself? You prepare your own application and our RCIC reviews it for errors and missed opportunities before you submit." },
    { name: "File Management", icon: FileCheck2, desc: "Our full service. We prepare and submit your entire application and represent you with IRCC from start to finish." },
  ];
  return (
    <div className="not-prose grid gap-5 sm:grid-cols-3">
      {items.map((s) => (
        <div key={s.name} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
          <span className="flex size-11 items-center justify-center rounded-xl bg-blush text-brand ring-1 ring-inset ring-brand/15">
            <s.icon className="size-6" strokeWidth={1.7} />
          </span>
          <h3 className="mt-4 text-[17px] font-semibold text-ink">{s.name}</h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ callout */
const calloutStyles = {
  info: { wrap: "border-brand/20 bg-brand-soft/60", icon: "text-brand", Icon: Info },
  warning: { wrap: "border-amber-300 bg-amber-50", icon: "text-amber-600", Icon: TriangleAlert },
  success: { wrap: "border-brand/30 bg-brand-soft", icon: "text-brand", Icon: CircleCheck },
  brand: { wrap: "border-brand/20 bg-brand-tint", icon: "text-brand", Icon: Info },
} as const;
export function Callout({ type = "info", title, children }: { type?: keyof typeof calloutStyles; title?: string; children: React.ReactNode }) {
  const s = calloutStyles[type];
  return (
    <div className={clsx("my-6 flex gap-3 rounded-2xl border p-5", s.wrap)}>
      <s.Icon className={clsx("mt-0.5 size-5 shrink-0", s.icon)} />
      <div className="text-[14.5px] leading-relaxed text-ink-soft">
        {title && <p className="font-semibold text-ink">{title}</p>}
        <div className={clsx(title && "mt-1")}>{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ FAQ (+schema) */
export function Faq({ items, title = "Frequently asked questions", heading = true }: { items: { q: string; a: string }[]; title?: string; heading?: boolean }) {
  return (
    <div>
      <JsonLd data={faqLd(items)} />
      {heading && <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink">{title}</h2>}
      <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white px-6 shadow-soft">
        {items.map((f) => (
          <details key={f.q} name="wmi-faq" className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[16px] font-medium text-ink">
              {f.q}
              <ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ related links */
export function RelatedLinks({ title = "Keep exploring", links }: { title?: string; links: { label: string; href: string; note?: string }[] }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
      <h2 className="font-heading text-base font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 -mx-3 text-[14.5px] text-ink-soft transition-colors hover:bg-surface hover:text-brand">
              <span><span className="font-medium text-ink group-hover:text-brand">{l.label}</span>{l.note && <span className="block text-xs text-ink-faint">{l.note}</span>}</span>
              <ArrowRight className="size-4 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ CTA band */
export function CtaBand({ title, sub }: { title?: string; sub?: string }) {
  return (
    <section className="px-5 pb-20 lg:pb-28">
      <Container>
        <div className="sheen relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#ef1a16] to-brand px-8 py-14 text-center text-white shadow-window sm:px-16 sm:py-16">
          <div className="absolute inset-0 bg-topo opacity-20" aria-hidden />
          <div className="absolute -right-10 -top-10 size-56 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.6rem]">
              {title ?? "Ready to start your Canadian journey?"}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{sub ?? "Tell us about your situation and a licensed RCIC will map your best pathway. Honest advice, not promises."}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={consult.href} size="lg" variant="secondary">{consult.label}</Button>
              <a href={site.phoneHref} className="inline-flex h-13 items-center gap-2 px-6 text-base font-medium text-white/90 hover:text-white">
                or call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
