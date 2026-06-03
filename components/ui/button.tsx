import Link from "next/link";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "trust" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative isolate overflow-hidden inline-flex items-center justify-center font-heading font-medium rounded-xl transition-all duration-200 ease-[var(--ease-out-soft)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-[#ee100c] to-brand text-white shadow-[var(--shadow-brand)] hover:shadow-[0_14px_34px_-8px_rgba(224,4,0,0.55)] ring-1 ring-inset ring-white/15",
  secondary: "bg-white text-ink ring-1 ring-line hover:ring-ink/25 hover:bg-surface",
  trust: "bg-brand text-white hover:bg-brand-dark",
  ghost: "text-ink hover:text-brand hover:translate-y-0",
};

// Colour of the light streak that sweeps across on hover, per variant.
const sheen: Record<Variant, string> = {
  primary: "via-white/35",
  secondary: "via-ink/[0.07]",
  trust: "via-white/35",
  ghost: "via-transparent",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  withArrow,
  children,
  ...props
}: Props) {
  const cls = clsx(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {/* Diagonal sheen that sweeps across the button on hover. */}
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-y-0 -left-full w-full -skew-x-12 bg-linear-to-r from-transparent to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-[200%]",
          sheen[variant],
        )}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1" aria-hidden />
        )}
      </span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {content}
    </button>
  );
}
