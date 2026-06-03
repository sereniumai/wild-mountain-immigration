"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { PanelLeft, X } from "lucide-react";
import { consult } from "@/lib/site";
import { SectionTree, activeSectionFor } from "@/components/site/section-nav";
import { SidebarCta } from "@/components/site/sidebar-cta";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const section = useMemo(() => activeSectionFor(pathname), [pathname]);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Pages inside a nav section (programs + the Resources tools/guides/draws) get
  // the section sidebar. The homepage and standalone pages not in any section
  // tree, the location, company and legal pages, render full-width.
  if (pathname === "/" || !section) return <>{children}</>;

  return (
    <div className="lg:flex lg:items-start">
      {/* Desktop compact sidebar (wider so labels fit on one line) */}
      <aside className="sticky top-18 hidden h-[calc(100vh-72px)] w-[348px] shrink-0 overflow-y-auto border-r border-line bg-white px-3 py-6 lg:block">
        <SectionTree section={section} variant="sidebar" />
        <SidebarCta />
      </aside>

      {/* Mobile "browse" bar */}
      <div className="sticky top-18 z-30 flex items-center justify-between border-b border-line bg-white/90 px-5 py-2.5 backdrop-blur lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 text-[13.5px] font-medium text-ink shadow-soft"
        >
          <PanelLeft className="size-4 text-brand" /> {section.label}
        </button>
        <Link
          href={consult.href}
          className="inline-flex items-center rounded-lg bg-linear-to-b from-[#ee100c] to-brand px-3.5 py-1.5 text-[13px] font-semibold text-white shadow-(--shadow-brand) ring-1 ring-inset ring-white/15 transition-transform hover:-translate-y-0.5"
        >
          {consult.label}
        </Link>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
            <motion.div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-white shadow-window"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <span className="font-heading text-sm font-semibold text-ink">Browse</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex size-9 items-center justify-center rounded-lg text-ink hover:bg-surface">
                  <X className="size-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-5">
                <SectionTree section={section} variant="sidebar" onNavigate={() => setOpen(false)} />
                <SidebarCta />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
