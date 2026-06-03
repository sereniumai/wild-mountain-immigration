"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a number up from 0 to `value` the first time it scrolls into view,
 * with an easeOutExpo curve so it decelerates into the final figure. Respects
 * reduced-motion (renders the final value instantly). Renders only the integer
 * itself, so callers can wrap their own coloured prefix/suffix around it.
 */
export function CountUp({
  value,
  duration = 1500,
  decimals = 0,
  className,
}: {
  value: number;
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return;
        fired.current = true;
        io.disconnect();
        if (reduce) {
          setDisplay(value);
          return;
        }
        const startedAt = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - startedAt) / duration);
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setDisplay(value * eased);
          if (p < 1) requestAnimationFrame(step);
          else setDisplay(value);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
    </span>
  );
}
