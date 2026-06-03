import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const popular = [
  { label: "Immigrate to Canada", href: "/immigrate" },
  { label: "Free tools", href: "/tools" },
  { label: "Our fees", href: "/fees" },
  { label: "Contact us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-xl text-center">
        <p className="font-heading text-[5rem] font-bold leading-none text-brand">404</p>
        <h1 className="mt-4 text-[2rem] font-semibold tracking-[-0.03em] text-ink sm:text-[2.5rem]">
          This page took a wrong turn
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
          The page you&apos;re looking for has moved or never existed. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" withArrow>Back to home</Button>
          <Button href="/contact" variant="secondary">Contact us</Button>
        </div>
        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-faint">Popular pages</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[15px]">
            {popular.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="font-medium text-brand hover:underline">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
