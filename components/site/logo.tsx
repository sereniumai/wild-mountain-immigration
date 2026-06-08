import Image from "next/image";
import { clsx } from "clsx";

/* Official lockup (charcoal badge + mountain + wordmark) for light backgrounds.
   Rendered through next/image so the oversized source PNG (1029x336, ~41 KB) is
   delivered as a tiny, correctly-sized AVIF/WebP. The raw <img> was being
   auto-preloaded at full size and stole bandwidth from the hero LCP on mobile.
   width/height keep the true ~1029:336 aspect so the lockup is never distorted. */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/WMI_Logo_Dark.png"
      alt="Wild Mountain Immigration"
      width={192}
      height={63}
      loading="eager"
      className={clsx("h-9 w-auto sm:h-10", className)}
    />
  );
}

/* Text wordmark for dark backgrounds (footer) */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "font-heading text-lg font-semibold tracking-tight leading-none",
        className
      )}
    >
      Wild Mountain<span className="text-brand"> Immigration</span>
    </span>
  );
}
