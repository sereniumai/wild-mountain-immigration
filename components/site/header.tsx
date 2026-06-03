"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown, Phone } from "lucide-react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { SectionTree, activeSectionFor } from "@/components/site/section-nav";
import { navSections, utilityNav, aboutSection, site, type NavSection } from "@/lib/site";

// "Visit" stays on the site (footer + cross-links) but is kept out of the top nav.
const topNav = navSections.filter((s) => s.label !== "Visit");

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobExpanded, setMobExpanded] = useState<string | null>(null);
  const [panel, setPanel] = useState<NavSection | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const activeSection = activeSectionFor(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => { setMobileOpen(false); setPanel(null); }, [pathname]);
  // When the mobile menu opens, expand the section you're currently in.
  useEffect(() => { if (mobileOpen) setMobExpanded(activeSection?.label ?? null); }, [mobileOpen, activeSection]);
  // Close the desktop panel on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPanel(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  // Lock scroll when the panel or mobile menu is open.
  useEffect(() => {
    const lock = panel || mobileOpen;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [panel, mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Main bar (full width) */}
      <div
        className={clsx(
          "relative z-50 border-b transition-all duration-300",
          scrolled || panel
            ? "bg-white border-line shadow-[0_4px_20px_-12px_rgba(50,55,60,0.2)]"
            : "bg-white border-line/70"
        )}
      >
        <div className="flex h-18 w-full items-center px-5 lg:px-8">
          {/* Left: logo (equal flex so the nav stays optically centered) */}
          <div className="flex flex-1 items-center justify-start">
            <Link href="/" aria-label="Wild Mountain Immigration, home" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Center: primary nav. Each section opens the big side panel (does not navigate). */}
          <nav className="hidden items-center gap-2 lg:flex xl:gap-3">
            {topNav.map((s, i) => {
              const isActive = activeSection?.label === s.label;
              const isOpen = panel?.label === s.label;
              return (
                <Fragment key={s.label}>
                  {i > 0 && <span className="h-5 w-px shrink-0 bg-line" aria-hidden />}
                  <Link
                    href={s.href}
                    onClick={(e) => { e.preventDefault(); setPanel((p) => (p?.label === s.label ? null : s)); }}
                    aria-expanded={isOpen}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "group relative flex items-center rounded-lg px-2.5 py-2 text-[15px] font-semibold transition-colors",
                      isActive || isOpen ? "text-brand" : "text-ink hover:text-brand"
                    )}
                  >
                    {s.label}
                    {/* Animated underline */}
                    <span
                      className={clsx(
                        "absolute inset-x-2.5 bottom-1 h-[2.5px] origin-center rounded-full bg-brand transition-transform duration-300",
                        isActive || isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                </Fragment>
              );
            })}
            <span className="h-5 w-px shrink-0 bg-line" aria-hidden />

            {/* About: opens the left side panel (About / Our services / Our fees) */}
            <button
              type="button"
              onClick={() => setPanel((p) => (p?.label === "About" ? null : aboutSection))}
              aria-expanded={panel?.label === "About"}
              className={clsx(
                "group relative flex cursor-pointer items-center rounded-lg px-2.5 py-2 text-[15px] font-semibold transition-colors",
                panel?.label === "About" ? "text-brand" : "text-ink hover:text-brand"
              )}
            >
              About
              <span
                className={clsx(
                  "absolute inset-x-2.5 bottom-1 h-[2.5px] origin-center rounded-full bg-brand transition-transform duration-300",
                  panel?.label === "About" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            </button>
          </nav>

          {/* Right: phone + CTA (equal flex, justified right to balance the logo) */}
          <div className="hidden flex-1 items-center justify-end gap-5 lg:flex">
            <a href={site.phoneHref} className="flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-brand">
              <Phone className="size-4 text-brand" aria-hidden /> {site.phone}
            </a>
            <Button href="/contact" withArrow>Get started</Button>
          </div>

          <button
            className="ml-auto inline-flex size-11 items-center justify-center self-center rounded-lg text-ink hover:bg-surface cursor-pointer lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Desktop slide-out section panel */}
      <AnimatePresence>
        {panel && (
          <div className="fixed inset-x-0 bottom-0 top-18 z-40 hidden lg:block">
            <motion.div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setPanel(null)}
            />
            <motion.aside
              className="absolute inset-y-0 left-0 w-[460px] max-w-[92vw] overflow-y-auto border-r border-line bg-white px-10 py-10 shadow-window"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 38 }}
            >
              <SectionTree section={panel} variant="panel" onNavigate={() => setPanel(null)} />
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 top-18 z-40 lg:hidden">
            <motion.div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute inset-x-0 top-0 max-h-full overflow-y-auto bg-white px-5 py-4 shadow-window"
              initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col">
                {topNav.map((s) => {
                  const open = mobExpanded === s.label;
                  return (
                    <div key={s.label} className="border-b border-line-soft">
                      <div className="flex items-center">
                        <Link
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex-1 py-3.5 text-[16px] font-semibold text-ink"
                        >
                          {s.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobExpanded((p) => (p === s.label ? null : s.label))}
                          aria-label={open ? `Collapse ${s.label}` : `Expand ${s.label}`}
                          aria-expanded={open}
                          className="flex size-11 shrink-0 items-center justify-center rounded-lg text-ink-faint hover:bg-surface hover:text-brand"
                        >
                          <ChevronDown className={clsx("size-5 transition-transform duration-200", open && "rotate-180")} />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="ml-1 border-l-2 border-line pb-2 pl-3">
                              {s.tree.map((node) => (
                                <Link
                                  key={node.href}
                                  href={node.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2.5 text-[14.5px] text-ink-soft hover:text-brand"
                                >
                                  {node.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                {/* About (about us, services, fees) */}
                <div className="border-b border-line-soft">
                  <div className="flex items-center">
                    <Link
                      href="/about"
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 py-3.5 text-[16px] font-semibold text-ink"
                    >
                      About
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobExpanded((p) => (p === "About" ? null : "About"))}
                      aria-label={mobExpanded === "About" ? "Collapse About" : "Expand About"}
                      aria-expanded={mobExpanded === "About"}
                      className="flex size-11 shrink-0 items-center justify-center rounded-lg text-ink-faint hover:bg-surface hover:text-brand"
                    >
                      <ChevronDown className={clsx("size-5 transition-transform duration-200", mobExpanded === "About" && "rotate-180")} />
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {mobExpanded === "About" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="ml-1 border-l-2 border-line pb-2 pl-3">
                          {aboutSection.tree.map((node) => (
                            <Link
                              key={node.href}
                              href={node.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 text-[14.5px] text-ink-soft hover:text-brand"
                            >
                              {node.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {utilityNav.map((u) => (
                  <Link
                    key={u.href}
                    href={u.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3.5 text-[15px] font-medium text-ink-soft border-b border-line-soft last:border-0"
                  >
                    {u.label}
                    <ChevronRight className="size-4 text-ink-faint" />
                  </Link>
                ))}
              </nav>
              <div className="pt-4">
                <Button href="/contact" className="w-full" withArrow onClick={() => setMobileOpen(false)}>
                  Get started
                </Button>
                <a href={site.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-brand">
                  <Phone className="size-4 text-brand" /> {site.phone}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
