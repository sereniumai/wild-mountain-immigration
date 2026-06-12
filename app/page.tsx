import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import {
  Mountain, Heart, Briefcase, GraduationCap,
  BadgeCheck, ArrowRight, ArrowUpRight, Check,
  ClipboardCheck, ChevronDown, Compass,
  Layers, Award, Users, Star,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { Hero } from "@/components/home/hero";
import { Reviews } from "@/components/content/reviews";
import { VideoTestimonials } from "@/components/home/video-testimonials";
import { faqs, site, consult } from "@/lib/site";
import { img } from "@/lib/images";
import { jsonLd } from "@/lib/jsonld";

/* ---------------------------------------------------------------- label */
function Label({ children, center, light }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
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

function SectionHeading({ label, title, sub }: { label: string; title: string; sub?: React.ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Label center>{label}</Label>
      <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[2.9rem]">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{sub}</p>}
    </Reveal>
  );
}

/* ---------------------------------------------------------------- PATHWAY CHOOSER */
const pathways = [
  {
    intent: "I want to immigrate",
    title: "Permanent residence",
    href: "/immigrate",
    icon: Compass,
    desc: "Express Entry, the AAIP and provincial nominee programs, mapped to your profile.",
  },
  {
    intent: "I want to work",
    title: "Work permits",
    href: "/work-permits",
    icon: Briefcase,
    desc: "From LMIA-based permits to open work permits and the post-graduation PGWP.",
  },
  {
    intent: "I want to study",
    title: "Study permits",
    href: "/study-permit",
    icon: GraduationCap,
    desc: "Study in Canada and build a pathway to permanent residence after you graduate.",
  },
  {
    intent: "I want to sponsor family",
    title: "Family sponsorship",
    href: "/family-sponsorship",
    icon: Heart,
    desc: "Reunite with a spouse, partner, child, parent or grandparent here in Canada.",
  },
] as const;

function PathwayChooser() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          label="Where do you want to begin?"
          title="Find your path to Canada"
          sub={<>Tell us your goal and we point you to the right route,<br className="hidden sm:block" /> with a licensed RCIC guiding every step.</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((p, i) => (
            <Reveal key={p.href} delay={(i % 4) * 70}>
              <Link href={p.href} className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-brand/15 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[var(--shadow-lift)]">
                {/* glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-brand/0 blur-2xl transition-colors duration-500 group-hover:bg-brand/10" />
                <div className="relative flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <p.icon className="size-6" strokeWidth={1.7} />
                  </span>
                  <ArrowUpRight className="size-5 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <div className="relative mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{p.intent}</p>
                  <h3 className="mt-1.5 text-xl font-semibold text-ink">{p.title}</h3>
                </div>
                <p className="relative mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-soft">{p.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- STATS */
function Stats() {
  const stats = [
    {
      icon: Users, kicker: "People helped", value: 500, decimals: 0, suffix: "+",
      label: "Newcomers helped on their move to Canada",
      border: "border-line max-lg:border-r max-lg:border-b lg:border-r",
    },
    {
      icon: Star, kicker: "Rated", value: 5, decimals: 1, suffix: "",
      label: "A perfect five-star rating across our verified client reviews",
      border: "border-line max-lg:border-b lg:border-r",
    },
    {
      icon: Layers, kicker: "Pathways", value: 10, decimals: 0, suffix: "+",
      label: "Every major immigration program, handled in-house",
      border: "border-line max-lg:border-r lg:border-r",
    },
    {
      icon: Award, kicker: "Established", value: 2021, decimals: 0, suffix: "",
      label: "Established and trusted from Canmore to clients worldwide",
      border: "",
    },
  ];
  return (
    <Container className="relative z-10 mt-12 sm:mt-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-window ring-1 ring-line">
          {/* tinted wash + brand glow for depth, and a brand hairline on top */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blush/45 via-white to-surface" aria-hidden />
          <div className="pointer-events-none absolute -left-24 -top-28 size-72 rounded-full bg-brand/[0.07] blur-[80px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-brand/[0.06] blur-[80px]" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" aria-hidden />

          <div className="relative grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.kicker} className={clsx("group/stat relative px-6 py-9 transition-colors duration-300 hover:bg-blush/40 sm:px-8 sm:py-11", s.border)}>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15 transition-colors duration-300 group-hover/stat:bg-brand group-hover/stat:text-white group-hover/stat:ring-brand">
                    <s.icon className="size-4.5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{s.kicker}</span>
                </div>
                <p className="mt-5 font-heading text-[2.9rem] font-semibold leading-none tracking-[-0.04em] text-brand sm:text-[3.15rem]">
                  <CountUp value={s.value} decimals={s.decimals} />
                  {s.suffix && <span className="text-brand">{s.suffix}</span>}
                </p>
                <p className="mt-3 max-w-[15rem] text-[13.5px] leading-snug text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Container>
  );
}

/* ---------------------------------------------------------------- HOW WE HELP */
function HowWeHelp() {
  const rows = [
    {
      n: "01", name: "Consultation", tag: "First step", img: "/brand/Consultation-2.svg",
      title: "Start with an honest conversation",
      desc: "Tell us your goals and history. We give you a straight assessment of your real options and the route most likely to work, with no hype and no pressure.",
      points: ["An honest read on your options", "The best pathway for you", "Clear next steps and timeline", "Straight answers, no pressure"],
      reverse: false,
      secondary: { href: "/tools/eligibility", label: "Check what you qualify for" },
    },
    {
      n: "02", name: "File Review", tag: "Lower cost", img: "/brand/File-Review1.svg",
      title: "Prefer to do it yourself?",
      desc: "You prepare your own application and our RCIC reviews it for errors and missed opportunities before you submit, the peace of mind of an expert, at a lower cost.",
      points: ["Expert eyes before you submit", "Catch costly mistakes early", "A lower-cost, flexible option", "Confidence in your own filing"],
      reverse: true,
    },
    {
      n: "03", name: "File Management", tag: "Full service", img: "/brand/File-Management1.svg",
      title: "We handle everything, end to end",
      desc: "Our most popular service. We prepare and submit your entire application and represent you with IRCC from start to finish, so nothing slips through the cracks.",
      points: ["End-to-end application handling", "Document strategy and review", "We deal with IRCC for you", "Fixed-scope pricing up front"],
      reverse: false,
    },
  ];
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Container className="relative">
        <SectionHeading
          label="How we help"
          title="Three ways to work with us"
          sub="From a first honest conversation to full representation, or a lower-cost expert review, you only pay for the help you actually need."
        />
        <div className="mt-16 space-y-16 lg:space-y-24">
          {rows.map((r) => (
            <Reveal key={r.name}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={clsx("relative", r.reverse && "lg:order-last")}>
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.img} alt={`${r.name} illustration`} loading="lazy" className="mx-auto h-64 w-full object-contain sm:h-80" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand-tint font-heading text-sm font-bold text-brand ring-1 ring-inset ring-brand/15">{r.n}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">{r.name}</span>
                  </div>
                  <h3 className="mt-5 text-[1.7rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[2.1rem]">{r.title}</h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">{r.desc}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand"><Check className="size-3.5" /></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href={consult.href} withArrow>{consult.label}</Button>
                    <Button href="/tools/eligibility" variant="secondary">Check what you qualify for</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- ROCKIES BAND */
function RockiesBand() {
  return (
    <section className="relative">
      <div className="relative h-135 overflow-hidden sm:h-125">
        <Image src={img.rockies} alt="The Canadian Rockies near the Bow Valley, Alberta" fill quality={50} sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
        <Container className="relative flex h-full items-center">
          <Reveal className="max-w-xl">
            <Label light>Why Wild Mountain Immigration</Label>
            <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[3rem]">
              From the Bow Valley to your new beginning.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              We are your immigration consultant in the heart of the Rockies, based in Canmore. We live and work
              in the mountains we love, and we bring that same steadiness, honesty and care to every
              client&apos;s journey to Canada. No false promises. Just a licensed team that treats your
              file like it&apos;s our own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={consult.href} size="lg" withArrow>{consult.label}</Button>
              <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex h-13 items-center gap-2 rounded-xl px-6 text-base font-medium text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/10">
                <BadgeCheck className="size-5" /> Verify our licence
              </a>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- MEET NICOLA */
function MeetNicola() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-gradient-to-br from-brand/15 to-brand/10 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-window ring-1 ring-black/5">
            <Image src={img.nicola} alt="Nicola Wightman, Regulated Canadian Immigration Consultant" fill sizes="(max-width: 1024px) 90vw, 460px" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-window ring-1 ring-line sm:-right-6">
            <Image src={img.cicc} alt="College of Immigration and Citizenship Consultants (CICC)" width={44} height={44} className="size-11 shrink-0 object-contain" />
            <div>
              <div className="flex items-center gap-1.5 text-brand">
                <BadgeCheck className="size-4" />
                <span className="font-heading text-sm font-semibold text-ink">RCIC #{site.rcicNumber}</span>
              </div>
              <p className="mt-0.5 text-xs text-ink-soft">CICC member in good standing</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Label>The practice</Label>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
            A regulated Canmore immigration consultant you can verify
          </h2>
          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-ink-soft">
            <p>
              Wild Mountain Immigration is a CICC-regulated Canmore immigration consultant handling every major
              Canadian pathway in-house, from Express Entry
              and the AAIP to sponsorship, work and study. We believe in honest advice, careful work and no false
              promises, ever.
            </p>
            <p>
              Our team is led by Regulated Canadian Immigration Consultant{" "}
              <span className="font-medium text-ink">Nicola Wightman</span> (RCIC #{site.rcicNumber}). An immigrant
              from the UK who navigated the system herself, she brings first-hand understanding to every file.
              You can confirm our standing on the public CICC register at any time.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" withArrow>About us</Button>
            <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl px-5 text-[15px] font-medium text-brand ring-1 ring-brand/30 transition-colors hover:bg-brand-soft">
              <BadgeCheck className="size-4" /> Verify on CICC register
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- TOOLS */
function Tools() {
  const tools = [
    { title: "CRS Calculator", desc: "See your Express Entry score in two minutes.", href: "/tools/crs-calculator", icon: ClipboardCheck },
    { title: "AAIP Points Calculator", desc: "Estimate your Alberta (AAIP) Expression of Interest score.", href: "/tools/aaip-calculator", icon: Mountain },
  ];
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="fade-grid pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Label>Free tools</Label>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
              Know where you stand before you spend a dollar
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              Free to use. See what you qualify for and estimate your scores in minutes, then get started to build your plan.
            </p>
          </Reveal>
          <div className="space-y-4">
            {/* Featured: eligibility checker */}
            <Reveal>
              <Link href="/tools/eligibility" className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-brand/15 bg-blush p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-[var(--shadow-brand)]">
                  <Compass className="size-7" strokeWidth={1.7} />
                </span>
                <span className="flex-1">
                  <span className="inline-block rounded-full bg-brand px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-white">Start here</span>
                  <span className="mt-1.5 block text-lg font-semibold text-ink">Eligibility Checker</span>
                  <span className="mt-0.5 block text-sm text-ink-soft">Answer a few questions, see which PR and work permit routes fit you.</span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {tools.map(({ title, desc, href, icon: Icon }, i) => (
                <Reveal key={href} delay={i * 90}>
                  <Link href={href} className="group block h-full rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-lift)]">
                    <Icon className="size-8 text-brand" strokeWidth={1.6} />
                    <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Try it free <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- FAQ */
function Faq() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Label>FAQ</Label>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.5rem]">Questions, answered honestly</h2>
          <p className="mt-4 text-ink-soft">Still unsure? Get started and we&apos;ll give you a straight answer about your case.</p>
          <Button href={consult.href} className="mt-6" withArrow>{consult.label}</Button>
        </Reveal>
        <Reveal delay={80} className="divide-y divide-line overflow-hidden rounded-2xl bg-white ring-1 ring-line shadow-soft">
          {faqs.map((f) => (
            <details key={f.q} name="wmi-faq" className="group px-5 transition-colors open:bg-blush/30 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[16px] font-medium text-ink transition-colors hover:text-brand group-open:text-brand">
                {f.q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand ring-1 ring-inset ring-brand/15 transition-all duration-300 group-open:bg-brand group-open:text-white group-open:ring-brand">
                  <ChevronDown className="size-4 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <p className="pb-5 pr-10 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- MOVE TO CANADA */
function MoveToCanada() {
  const countries = [
    { country: "the UK", code: "gb", href: "/move-to-canada/from-the-uk" },
    { country: "Ireland", code: "ie", href: "/move-to-canada/from-ireland" },
    { country: "India", code: "in", href: "/move-to-canada/from-india" },
    { country: "Nigeria", code: "ng", href: "/move-to-canada/from-nigeria" },
    { country: "the USA", code: "us", href: "/move-to-canada/from-the-usa" },
    { country: "Australia", code: "au", href: "/move-to-canada/from-australia" },
  ];
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="fade-grid pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label center>Move to Canada</Label>
          <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[2.9rem]">
            Moving to Canada from abroad?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Country-by-country guides to the routes, costs and timelines that fit where you&apos;re starting from.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {countries.map((c, i) => (
            <Reveal key={c.href} delay={(i % 3) * 70}>
              <Link
                href={c.href}
                className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-window sm:p-5"
              >
                <span className="relative size-12 shrink-0 overflow-hidden rounded-xl shadow-soft ring-1 ring-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://flagcdn.com/w160/${c.code}.png`} alt={`Flag of ${c.country}`} loading="lazy" className="size-full object-cover" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Move to Canada</span>
                  <span className="mt-0.5 block truncate font-heading text-[16px] font-semibold text-ink transition-colors group-hover:text-brand">From {c.country}</span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/move-to-canada" variant="secondary">See all country guides</Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- CANMORE LOCAL */
function CanmoreLocal() {
  const areas = [
    { name: "Banff & Lake Louise", note: "Hotel and resort workers moving from seasonal permits to permanent residence.", href: "/immigration-consultant-banff" },
    { name: "Calgary", note: "Energy, tech and professional-services workers, an hour east along Highway 1.", href: "/immigration-consultant-calgary" },
    { name: "Cochrane", note: "Bow Valley commuters and growing families building a life between the city and the mountains.", href: "/immigration-consultant-cochrane" },
    { name: "Across Alberta & Canada", note: "Every federal and provincial route, handled online wherever you are.", href: "/alberta-immigration-consultant" },
  ];
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Label>The Bow Valley</Label>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
              Your immigration consultant in Canmore
            </h2>
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-ink-soft">
              <p>
                Canmore runs on tourism. The hotels, restaurants, ski hills and tour operators that keep the town
                moving rely on workers who arrive on temporary permits, hoping to build a permanent life in the
                Rockies. As your immigration consultant in Canmore, we turn a work permit that could quietly expire
                into a clear, planned route to permanent residence.
              </p>
              <p>
                Based right here in the Bow Valley, we know the local labour market and the Alberta streams built
                around it. For Canmore&apos;s tourism and hospitality workers, the{" "}
                <Link href="/alberta-immigration/tourism-hospitality-stream" className="font-medium text-brand hover:underline">Alberta Tourism &amp; Hospitality Stream</Link>{" "}
                is often the most direct path to a provincial nomination. For others it&apos;s{" "}
                <Link href="/express-entry" className="font-medium text-brand hover:underline">Express Entry</Link>, the wider{" "}
                <Link href="/alberta-immigration" className="font-medium text-brand hover:underline">Alberta AAIP</Link>, a{" "}
                <Link href="/work-permits" className="font-medium text-brand hover:underline">work permit</Link> or{" "}
                <Link href="/family-sponsorship" className="font-medium text-brand hover:underline">family sponsorship</Link>. We assess every route honestly and build the one that actually fits.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={consult.href} withArrow>{consult.label}</Button>
              <Button href="/tools/eligibility" variant="secondary">Check what you qualify for</Button>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid gap-4 sm:grid-cols-2">
              {areas.map((a) => (
                <Link
                  key={a.name}
                  href={a.href}
                  className="group flex flex-col rounded-2xl border border-brand/15 bg-brand-soft p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-window"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-tint text-brand ring-1 ring-inset ring-brand/15 transition-colors duration-300 group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                    <Compass className="size-4.5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-heading text-[15px] font-semibold tracking-tight text-ink">{a.name}</h3>
                  <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink-soft">{a.note}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- FINAL CTA */
function FinalCta() {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <Reveal className="sheen relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#ef1a16] to-brand px-8 py-14 text-center text-white shadow-window sm:px-16 sm:py-20">
          <div className="absolute inset-0 bg-topo opacity-20" aria-hidden />
          <div className="absolute -right-10 -top-10 size-56 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3rem]">
              Ready to start your<br className="hidden sm:block" /> Canadian journey?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Tell us about your situation and a licensed RCIC will map your best pathway. Honest advice, not promises.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={consult.href} size="lg" variant="secondary">{consult.label}</Button>
              <a href={site.phoneHref} className="inline-flex h-13 items-center gap-2 px-6 text-base font-medium text-white/90 hover:text-white">
                or call {site.phone}
              </a>
            </div>
            <p className="mt-6 text-xs text-white/65">
              CICC-regulated (RCIC #{site.rcicNumber}) · Based in Canmore, serving all of Canada.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function HomePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }} />
      <Hero />
      <Stats />
      <PathwayChooser />
      <HowWeHelp />
      <RockiesBand />
      <CanmoreLocal />
      <MeetNicola />
      <MoveToCanada />
      <VideoTestimonials />
      <Tools />
      <Reviews title="Trusted by people building their Canadian future" eyebrow="Google reviews" count={9} />
      <Faq />
      <FinalCta />
    </>
  );
}
