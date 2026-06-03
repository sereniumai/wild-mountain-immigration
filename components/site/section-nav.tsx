"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import {
  Compass, Briefcase, GraduationCap, Heart, MapPin, Plane, Plus, Minus, ChevronDown, ChevronRight,
} from "lucide-react";
import { navSections, type NavNode, type NavSection } from "@/lib/site";

export const sectionIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  compass: Compass, briefcase: Briefcase, cap: GraduationCap, heart: Heart, map: MapPin, plane: Plane,
};

/* ----------------------------------------------------- active-section detection */
function flattenHrefs(nodes: NavNode[], acc: string[] = []): string[] {
  for (const n of nodes) {
    acc.push(n.href);
    if (n.children) flattenHrefs(n.children, acc);
  }
  return acc;
}

/** Section whose tree best matches the current path (longest prefix wins; earlier section breaks ties).
 *  Returns null when the path belongs to no section (e.g. the homepage or legal pages),
 *  so the top nav does not wrongly highlight a default section. */
export function activeSectionFor(pathname: string): NavSection | null {
  let best: NavSection | null = null;
  let bestLen = -1;
  for (const section of navSections) {
    for (const href of [section.href, ...flattenHrefs(section.tree)]) {
      const match = pathname === href || pathname.startsWith(href + "/");
      if (match && href.length > bestLen) { bestLen = href.length; best = section; }
    }
  }
  return best;
}

/** Program sections only (Immigrate, Work, Study, Sponsor Your Family, Visit).
 *  The "Resources" grab-bag (services, tools, location, company and legal pages)
 *  is excluded, so those pages render full-width with no section sidebar, while
 *  program guides still match their parent section by URL prefix. */
const programSections = navSections.filter((s) => s.href !== "/services");
export function activeProgramSectionFor(pathname: string): NavSection | null {
  let best: NavSection | null = null;
  let bestLen = -1;
  for (const section of programSections) {
    for (const href of [section.href, ...flattenHrefs(section.tree)]) {
      const match = pathname === href || pathname.startsWith(href + "/");
      if (match && href.length > bestLen) { bestLen = href.length; best = section; }
    }
  }
  return best;
}

/** Tree-aware: true if this node OR any descendant matches the current path. */
function containsActive(node: NavNode, pathname: string): boolean {
  if (node.href === pathname) return true;
  if (node.href !== "/" && pathname.startsWith(node.href + "/")) return true;
  return (node.children ?? []).some((c) => containsActive(c, pathname));
}

type Variant = "sidebar" | "panel";

/* ----------------------------------------------------- recursive nav item */
function NavItem({
  node, pathname, depth, variant, onNavigate, openKey, setOpenKey,
}: {
  node: NavNode; pathname: string; depth: number; variant: Variant; onNavigate?: () => void;
  openKey: string | null; setOpenKey: (k: string | null) => void;
}) {
  const kids = node.children ?? [];
  const active = pathname === node.href;
  const open = openKey === node.href;

  // Single-open among this node's own children: one accordion at a time.
  const [childOpen, setChildOpen] = useState<string | null>(
    kids.find((k) => containsActive(k, pathname))?.href ?? null,
  );
  useEffect(() => {
    setChildOpen(kids.find((k) => containsActive(k, pathname))?.href ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const panel = variant === "panel";

  return (
    <li className={panel ? "border-b border-line/70" : undefined}>
      <div
        className={clsx(
          "group relative flex items-center",
          panel ? "pr-2" : "rounded-lg pr-1 transition-colors",
          !panel && (active ? "bg-brand-tint" : "hover:bg-surface")
        )}
      >
        {!panel && active && <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-brand" />}
        <Link
          href={node.href}
          onClick={(e) => {
            // First click on a collapsed parent reveals its children instead of
            // navigating, so people can see what's inside; a second click (now
            // expanded) opens the section's own page.
            if (kids.length > 0 && !open) {
              e.preventDefault();
              setOpenKey(node.href);
            } else {
              onNavigate?.();
            }
          }}
          aria-current={active ? "page" : undefined}
          title={node.label}
          className={clsx(
            "flex min-w-0 flex-1 items-center transition-colors",
            panel
              ? clsx("py-3 text-[15px]", active ? "font-semibold text-brand" : depth === 0 ? "font-medium text-ink hover:text-brand" : "text-ink-soft hover:text-brand")
              : clsx("rounded-lg py-2 pr-2 text-[13.5px]", depth === 0 ? "font-semibold" : "font-medium", active ? "text-brand" : depth === 0 ? "text-ink group-hover:text-brand" : "text-ink-soft group-hover:text-brand")
          )}
          style={{ paddingLeft: depth > 0 ? depth * (panel ? 16 : 12) + (panel ? 0 : 12) : panel ? 0 : 12 }}
        >
          <span className="truncate">{node.label}</span>
        </Link>
        {kids.length > 0 && (
          <button
            type="button"
            onClick={() => setOpenKey(open ? null : node.href)}
            aria-label={open ? `Collapse ${node.label}` : `Expand ${node.label}`}
            aria-expanded={open}
            className={clsx(
              "flex shrink-0 items-center justify-center transition-colors",
              panel
                ? "size-7 rounded-full bg-brand text-white shadow-[var(--shadow-brand)] hover:opacity-90"
                : "size-7 rounded-md text-ink-faint hover:bg-white hover:text-brand"
            )}
          >
            {panel
              ? (open ? <Minus className="size-4" /> : <Plus className="size-4" />)
              : <ChevronDown className={clsx("size-4 transition-transform duration-200", open && "rotate-180")} />}
          </button>
        )}
      </div>

      {kids.length > 0 && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              key="kids"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className={clsx(panel ? "bg-surface/60" : "ml-[18px] mt-0.5 space-y-0.5 border-l border-line pl-1.5")}>
                {kids.map((child) => (
                  <NavItem key={child.href} node={child} pathname={pathname} depth={depth + 1} variant={variant} onNavigate={onNavigate} openKey={childOpen} setOpenKey={setChildOpen} />
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}

/* ----------------------------------------------------- section tree */
export function SectionTree({
  section, variant = "sidebar", onNavigate,
}: { section: NavSection; variant?: Variant; onNavigate?: () => void }) {
  const pathname = usePathname();
  const Icon = sectionIcons[section.icon] ?? Compass;

  // One top-level accordion open at a time. Defaults to the group that contains
  // the current page; resets when the route or section changes.
  const [openKey, setOpenKey] = useState<string | null>(
    section.tree.find((n) => containsActive(n, pathname))?.href ?? null,
  );
  useEffect(() => {
    setOpenKey(section.tree.find((n) => containsActive(n, pathname))?.href ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, section.href]);

  if (variant === "panel") {
    return (
      <div>
        <h2 className="font-heading text-[2.5rem] font-semibold leading-none tracking-tight text-brand">{section.label}</h2>
        <ul className="mt-7 border-t border-line/70">
          {section.tree.map((node) => (
            <NavItem key={node.href} node={node} pathname={pathname} depth={0} variant="panel" onNavigate={onNavigate} openKey={openKey} setOpenKey={setOpenKey} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Browse</p>
      <Link
        href={section.href}
        onClick={onNavigate}
        className="group mb-3 flex items-center gap-2.5 rounded-xl bg-blush px-3.5 py-3 text-ink ring-1 ring-inset ring-brand/15 transition-colors hover:bg-brand-soft"
      >
        <Icon className="size-[18px] shrink-0 text-brand" strokeWidth={1.8} />
        <span className="font-heading text-[15px] font-semibold tracking-tight">{section.label}</span>
        <ChevronRight className="ml-auto size-4 text-ink-faint transition-transform group-hover:translate-x-0.5" />
      </Link>
      <ul className="space-y-0.5">
        {section.tree.map((node) => (
          <NavItem key={node.href} node={node} pathname={pathname} depth={0} variant="sidebar" onNavigate={onNavigate} openKey={openKey} setOpenKey={setOpenKey} />
        ))}
      </ul>
    </div>
  );
}
