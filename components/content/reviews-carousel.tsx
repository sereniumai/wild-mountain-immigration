"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard } from "@/components/content/reviews";
import type { Review } from "@/lib/reviews";

/**
 * Reviews carousel: shows three review cards at a time (one on mobile, two on
 * tablet) and lets visitors page through the rest with the arrows. Uses native
 * scroll-snap so it stays smooth and accessible without a heavy slider library.
 */
export function ReviewsCarousel({ items }: { items: Review[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const page = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const showArrows = items.length > 3;

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((r) => (
          <div
            key={r.name}
            className="shrink-0 basis-[86%] snap-start sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.834rem)]"
          >
            <ReviewCard r={r} compact />
          </div>
        ))}
      </div>

      {showArrows && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => page(-1)}
            aria-label="Previous reviews"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition-colors hover:border-brand/40 hover:text-brand"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            aria-label="More reviews"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition-colors hover:border-brand/40 hover:text-brand"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}
