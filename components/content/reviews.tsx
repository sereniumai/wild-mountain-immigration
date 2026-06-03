import { Star } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/content/blocks";
import { reviews, reviewStats, type Review } from "@/lib/reviews";
import { ReviewsCarousel } from "@/components/content/reviews-carousel";

function Stars({ className }: { className?: string }) {
  return (
    <span className={clsx("flex items-center gap-0.5", className)} aria-label={`${reviewStats.rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-[#f5a623] text-[#f5a623]" />
      ))}
    </span>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.85 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.67-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.67 2.84C6.71 7.3 9.14 5.38 12 5.38Z" />
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((p) => p[0]?.toUpperCase()).slice(0, 2).join("");
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[13px] font-semibold text-brand ring-1 ring-brand/15">
      {initials}
    </span>
  );
}

export function ReviewCard({ r, compact }: { r: Review; compact?: boolean }) {
  return (
    <figure className={clsx(
      "mb-5 break-inside-avoid rounded-2xl border border-line bg-white p-6 shadow-soft",
      compact && "mb-0"
    )}>
      <div className="flex items-center justify-between">
        <Stars />
        <GoogleMark className="size-5" />
      </div>
      <blockquote className={clsx("mt-4 text-[14.5px] leading-relaxed text-ink-soft", compact && "line-clamp-6")}>
        {r.text}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line-soft pt-4">
        <Avatar name={r.name} />
        <span>
          <span className="block text-[14px] font-semibold text-ink">{r.name}</span>
          <span className="block text-[12.5px] text-ink-faint">{r.tag}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Aggregate badge: 5.0, stars, "45 Google reviews". */
export function ReviewBadge({ light }: { light?: boolean }) {
  return (
    <a
      href={reviewStats.url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm shadow-soft transition-colors",
        light ? "border-white/25 bg-white/10 text-white hover:bg-white/15" : "border-line bg-white text-ink hover:border-brand/30"
      )}
    >
      <GoogleMark className="size-5" />
      <span className="flex items-center gap-1.5">
        <span className="font-semibold">{reviewStats.rating.toFixed(1)}</span>
        <Stars />
      </span>
      <span className={clsx("font-medium", light ? "text-white/80" : "text-ink-soft")}>{reviewStats.count} Google reviews</span>
    </a>
  );
}

/** Full reviews section with masonry of review cards. */
export function Reviews({
  title = "Trusted by newcomers across Canada",
  eyebrow = "Client reviews",
  count = 9,
  muted = true,
}: { title?: string; eyebrow?: string; count?: number; muted?: boolean }) {
  return (
    <section className={clsx("py-20 lg:py-28", muted && "bg-surface")}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Label center>{eyebrow}</Label>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            A perfect {reviewStats.rating.toFixed(1)} rating from {reviewStats.count} verified Google reviews. Here is what
            clients say about working with Nicola.
          </p>
          <div className="mt-6 flex justify-center">
            <ReviewBadge />
          </div>
        </div>
        <div className="mt-12">
          <ReviewsCarousel items={reviews.slice(0, count)} />
        </div>
      </Container>
    </section>
  );
}

/** Compact reviews carousel for interior pages: 3 visible, arrows for the rest. */
export function ReviewsStrip({ title = "What clients say", n = 9 }: { title?: string; n?: number }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-heading text-lg font-semibold text-ink">{title}</h2>
        <ReviewBadge />
      </div>
      <div className="mt-5">
        <ReviewsCarousel items={reviews.slice(0, n)} />
      </div>
    </div>
  );
}
