import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/site/logo";
import { site, consult } from "@/lib/site";
import { img } from "@/lib/images";

/* Comprehensive internal-link map. Every column points at a real cluster so the
   footer doubles as the site's deepest internal-linking surface (good for users
   and for crawl depth / SEO). */
type FooterCol = {
  title: string;
  links: { label: string; href: string }[];
  extra?: { title: string; links: { label: string; href: string }[] };
};

const cols: FooterCol[] = [
  {
    title: "Immigrate",
    links: [
      { label: "Immigrate to Canada", href: "/immigrate" },
      { label: "Express Entry", href: "/express-entry" },
      { label: "Comprehensive Ranking System", href: "/express-entry/comprehensive-ranking-system" },
      { label: "Provincial Nominee Programs", href: "/pnp" },
      { label: "Atlantic Immigration", href: "/atlantic-immigration-program" },
      { label: "Rural & Northern", href: "/rural-northern-immigration-pilot" },
      { label: "Start-up Visa", href: "/start-up-visa" },
      { label: "Canadian Citizenship", href: "/citizenship" },
    ],
  },
  {
    title: "Provinces",
    links: [
      { label: "Alberta", href: "/alberta-immigration" },
      { label: "British Columbia", href: "/pnp/british-columbia" },
      { label: "Saskatchewan", href: "/pnp/saskatchewan" },
      { label: "Manitoba", href: "/pnp/manitoba" },
      { label: "Ontario", href: "/pnp/ontario" },
      { label: "Nova Scotia", href: "/pnp/nova-scotia" },
      { label: "New Brunswick", href: "/pnp/new-brunswick" },
      { label: "All provinces & territories", href: "/pnp" },
    ],
  },
  {
    title: "Work & Study",
    links: [
      { label: "Work Permits", href: "/work-permits" },
      { label: "LMIA", href: "/work-permits/lmia" },
      { label: "Post-Graduation Work Permit", href: "/work-permits/pgwp" },
      { label: "Open Work Permit", href: "/work-permits/open-work-permit" },
      { label: "Study Permits", href: "/study-permit" },
      { label: "Proof of Funds", href: "/study-permit/proof-of-funds" },
    ],
    extra: {
      title: "Visit",
      links: [
        { label: "Visit Canada", href: "/visit" },
        { label: "Visitor Visa", href: "/visit/visitor-visa" },
        { label: "eTAs", href: "/visit/eta" },
      ],
    },
  },
  {
    title: "Family",
    links: [
      { label: "Family Sponsorship", href: "/family-sponsorship" },
      { label: "Spousal Sponsorship", href: "/family-sponsorship/spousal-sponsorship" },
      { label: "Spousal Open Work Permit", href: "/family-sponsorship/spousal-open-work-permit" },
      { label: "Conjugal Partner", href: "/family-sponsorship/conjugal-partner" },
      { label: "Child / Dependent", href: "/family-sponsorship/dependent-children" },
      { label: "Parents & Grandparents", href: "/family-sponsorship/parents-grandparents" },
      { label: "Super Visa", href: "/family-sponsorship/super-visa" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Eligibility Checker", href: "/tools/eligibility" },
      { label: "Free CRS Calculator", href: "/tools/crs-calculator" },
      { label: "AAIP Points Calculator", href: "/tools/aaip-calculator" },
      { label: "Express Entry draws", href: "/express-entry/draws" },
    ],
    extra: {
      title: "Company",
      links: [
        { label: "Our Services", href: "/services" },
        { label: "Our Fees", href: "/fees" },
        { label: "About us", href: "/about" },
        { label: "Contact us", href: "/contact" },
      ],
    },
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/wildmountainimmigration/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Wild-Mountain-Immigration/61554082919431/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@wildmountainimmigration",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const areas = [
  { label: "Canmore", href: "/" },
  { label: "Banff", href: "/immigration-consultant-banff" },
  { label: "Cochrane", href: "/immigration-consultant-cochrane" },
  { label: "Calgary", href: "/immigration-consultant-calgary" },
  { label: "Alberta-wide", href: "/alberta-immigration-consultant" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface text-ink-soft">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
          {/* Brand / contact */}
          <div className="lg:col-span-3 lg:pr-6">
            <Link href="/" aria-label="Wild Mountain Immigration, home" className="inline-flex">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              Honest, licensed Canadian immigration help. We guide people from around the
              world to Canada through Express Entry, the AAIP, sponsorship, work and study.
            </p>
            <div className="mt-6 space-y-2.5 text-[14px]">
              <p className="flex items-center gap-2.5 text-ink-soft">
                <MapPin className="size-4 shrink-0 text-brand" />
                {site.locality}, {site.regionCode} · serving all of Canada online
              </p>
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-brand">
                <Phone className="size-4 shrink-0 text-brand" />
                {site.phone}
              </a>
              <Link href="/contact" className="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-brand">
                <Mail className="size-4 shrink-0 text-brand" />
                Send us a message
              </Link>
            </div>
            <a
              href={site.ciccRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify our licence on the CICC public register"
              className="mt-6 block w-full max-w-xs rounded-xl transition-opacity hover:opacity-80"
            >
              <Image
                src={img.cicc}
                alt="College of Immigration and Citizenship Consultants (CICC)"
                width={720}
                height={235}
                className="h-auto w-full object-contain"
              />
            </a>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ path, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Wild Mountain Immigration on ${label}`}
                  className="flex size-9 items-center justify-center rounded-lg border border-line bg-white text-ink-soft transition-colors hover:border-brand/30 hover:text-brand"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4.5"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns: bounded to 9/12 so they sit tight against the brand
              block (no dead gap) and share the width evenly. */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            {cols.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-heading text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[13.5px] leading-snug text-ink-soft transition-colors hover:text-brand">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {col.extra && (
                  <>
                    <h3 className="mt-6 font-heading text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">{col.extra.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {col.extra.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="text-[13.5px] leading-snug text-ink-soft transition-colors hover:text-brand">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </nav>
            ))}
          </div>
        </div>

        {/* Service areas strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-line pt-8 text-[13px]">
          <span className="font-semibold text-ink">Immigration consultant near you:</span>
          {areas.map((a, i) => (
            <span key={a.href} className="flex items-center gap-2">
              <Link href={a.href} className="text-ink-soft transition-colors hover:text-brand">{a.label}</Link>
              {i < areas.length - 1 && <span className="text-line" aria-hidden>·</span>}
            </span>
          ))}
        </div>

        {/* Legal bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. Regulated by the {site.regulator}.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-brand">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-brand">Terms</Link>
            <Link href={consult.href} className="transition-colors hover:text-brand">Get started</Link>
            <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
              CICC Register
            </a>
          </div>
        </div>
        <p className="mt-6 text-[11px] leading-relaxed text-ink-faint">
          Wild Mountain Immigration provides regulated Canadian immigration consulting led by {site.rcicName},
          RCIC #{site.rcicNumber}. We do not guarantee application outcomes, which are decided by IRCC and provincial
          authorities. Information on this site is general and not legal advice. We are not affiliated with the
          Government of Canada.
        </p>
      </Container>
    </footer>
  );
}
