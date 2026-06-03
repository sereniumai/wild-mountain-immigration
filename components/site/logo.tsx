import { clsx } from "clsx";

/* Official lockup (charcoal badge + mountain + wordmark) for light backgrounds */
export function Logo({ className }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/brand/WMI_Logo_Dark.png"
      alt="Wild Mountain Immigration"
      width={196}
      height={48}
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
