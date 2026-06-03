# Design System Master File — Wild Mountain Immigration

> **LOGIC:** When building a page, first check `design-system/wild-mountain-immigration/pages/[page-name].md`. If it exists, its rules override this Master. Otherwise follow this file.

**Project:** Wild Mountain Immigration Inc · **Category:** Regulated immigration consultancy (YMYL) · **Pattern:** Trust & Authority + Conversion
**Brand-locked (client-confirmed):** **RED `#E00400` is the MAIN/dominant colour** — it leads the brand (hero, headings/accents, links, primary CTAs, logo). Charcoal + white = the calm professional canvas. Forest green = a smaller trust/verified accent. Heading font **Jost**, body **Inter**. Logo: maple-leaf-over-mountain with red outline (`brand-assets/wmi-logo-light.svg`).
**Stack:** Next.js (App Router) + Tailwind + TypeScript + shadcn/ui. **Accessibility:** WCAG AA min.

> Contrast verified: white-on-red `#E00400` = 5.0:1 (AA ✓) · white-on-green `#1D5C1E` = 8.1:1 (AAA) · white-on-charcoal `#32373C` = 11.9:1 (AAA).

---

## Global Rules

### Color Palette — RED-LED
| Role | Hex | CSS Variable | Use |
|------|-----|--------------|-----|
| **Primary (MAIN)** | `#E00400` | `--color-primary` | CTAs, headings accents, links, key brand moments, logo |
| Primary hover | `#C40300` | `--color-primary-hover` | darken on hover |
| On Primary | `#FFFFFF` | `--color-on-primary` | text on red |
| Foreground | `#32373C` | `--color-foreground` | body text (charcoal) |
| Background | `#FFFFFF` | `--color-background` | main canvas |
| Surface | `#F5F6F4` | `--color-surface` | warm light section bg |
| Secondary (trust) | `#1D5C1E` | `--color-secondary` | CICC/verified badges, success, footer accents |
| Secondary hover | `#174A18` | `--color-secondary-hover` | |
| Accent (soft) | `#FBE9E8` | `--color-accent-soft` | pale red tint section bg (use sparingly) |
| Muted FG | `#565C61` | `--color-muted-foreground` | secondary text (~5.4:1 ✓) |
| Border | `#E3E5E2` | `--color-border` | |
| Input | `#D5D8D4` | `--color-input` | |
| Ring (focus) | `#1D5C1E` | `--color-ring` | green focus ring — distinct from red content |
| Destructive (error) | `#B00020` | `--color-destructive` | **distinct deeper crimson** so errors ≠ brand red |
| Charcoal (dark surface) | `#32373C` | `--color-charcoal` | dark CTA bands / footer |

**Dark mode (`.dark`):** background `#16191B` · foreground `#F2F3F1` · surface `#1F2326` · card `#22262A` · primary `#F0392E` (brighter red, white text 4.6:1) · secondary `#6CC070` (lightened green) · border `#343A3E` · muted-fg `#A8ADB0` · destructive `#F2554B` · ring `#6CC070`. Never invert brand hex; test contrast independently.

**Color strategy:** red is the brand's voice — use it confidently for action + emphasis, but NOT as large background fills (keeps it bold, not aggressive). Charcoal/white carry the bulk of surfaces; green is a supporting trust note.

### Typography
- **Heading Font:** **Jost** (geometric sans, brand) — weights 500/600/700, slight negative tracking on large sizes.
- **Body Font:** **Inter** — 400/500/600 (max readability for YMYL content + forms).
- Load via `next/font` (self-hosted, `display: swap`).
- **Scale (rem):** xs .75/12 · sm .875/14 · base 1/16 · lg 1.125/18 · xl 1.25/20 · 2xl 1.5/24 · 3xl 1.875/30 · 4xl 2.25/36 (h1 mobile) · 5xl 3/48 (h1 desktop) · 6xl 3.75/60 (hero).
- Line-height: body 1.6 · headings 1.1–1.25. Measure 60–75 chars desktop. Min body 16px.

### Spacing
xs 4px · sm 8px · md 16px · lg 24px · xl 32px · 2xl 48px · 3xl 64px. Section vertical `py-16 md:py-24`. Containers: content `max-w-3xl`, standard `max-w-6xl`, wide `max-w-7xl`. Gutters `px-4 md:px-6 lg:px-8`. Breakpoints 375/768/1024/1440. `min-h-dvh` over 100vh.

### Shadows (subtle, consistent)
sm `0 1px 2px rgba(0,0,0,.05)` (resting cards) · md `0 4px 6px rgba(0,0,0,.1)` (hover) · lg `0 10px 15px rgba(0,0,0,.1)` (modals) · xl `0 20px 25px rgba(0,0,0,.15)` (featured). Radius: buttons/inputs `rounded-lg` (8–10px) · cards `rounded-xl` (12px).

---

## Component Specs

### Buttons (height ≥44px, font-jost 500, transition 150–200ms, cursor-pointer, visible focus ring; ONE primary per view)
```css
/* Primary CTA — RED (the main action) */
.btn-primary { background:#E00400; color:#fff; padding:12px 24px; border-radius:10px; font-weight:600; transition:all 180ms ease; cursor:pointer; }
.btn-primary:hover { background:#C40300; }
.btn-primary:focus-visible { outline:none; box-shadow:0 0 0 3px rgba(29,92,30,.45); } /* green ring */

/* Secondary — charcoal outline */
.btn-secondary { background:transparent; color:#32373C; border:2px solid #32373C; padding:12px 24px; border-radius:10px; font-weight:600; transition:all 180ms ease; cursor:pointer; }
.btn-secondary:hover { background:#F5F6F4; }

/* Trust/verify — green (for CICC/verify actions) */
.btn-trust { background:#1D5C1E; color:#fff; padding:12px 24px; border-radius:10px; font-weight:600; }
.btn-trust:hover { background:#174A18; }
```

### Cards
```css
.card { background:#fff; border:1px solid #E3E5E2; border-radius:12px; padding:24px; box-shadow:var(--shadow-sm); transition:box-shadow 180ms ease; }
.card:hover { box-shadow:var(--shadow-md); } /* no layout-shifting transform */
```
Service cards: red icon + Jost title + 1-line desc + red arrow link.

### Inputs (labels visible above, ≥44px, error below w/ icon)
```css
.input { padding:12px 16px; border:1px solid #D5D8D4; border-radius:10px; font-size:16px; transition:border-color 180ms ease; }
.input:focus-visible { border-color:#1D5C1E; outline:none; box-shadow:0 0 0 3px rgba(29,92,30,.35); }
.input[aria-invalid="true"] { border-color:#B00020; }
```

### Nav (sticky)
White bg, charcoal text, logo (red) left, links, **red "Book a consultation"** right. Trust microbar: `RCIC #R706497 · CICC-regulated · (587) 857-3692 · Verify us`. Mobile hamburger drawer. ≤6 items, active state in red.

### CTA bands
Charcoal or red-tinted band, white/charcoal Jost heading, **red primary button** + trust line (RCIC# + CICC verify).

### Badges/trust
CICC-regulated pill (green), RCIC# chip, star rating, "women-owned" badge, "Verify on CICC register" link.

---

## Page Pattern — Trust & Authority + Conversion
**Section order (homepage):** 1. Sticky nav + trust microbar · 2. Hero (Cochrane H1, one red CTA + soft secondary, Nicola photo, trust line) · 3. Proof bar (CICC, RCIC#, reviews, verify) · 4. Services (cards→pillars) · 5. Why WMI + File Mgmt/File Review tiers · 6. Meet Nicola (E-E-A-T) · 7. Free tools (CRS+AAIP calculators) · 8. How we work (3 steps) · 9. Social proof · 10. Latest insights (freshness) · 11. FAQ (schema) · 12. Final CTA band · 13. Footer (NAP, RCIC#, CICC link).
**Conversion:** one red primary CTA per view · low-friction forms · trust beside every CTA · ungated tools.

---

## Anti-Patterns (Do NOT Use)
- ❌ Red as large background fill (keep red for action/emphasis, not big fields)
- ❌ Outdated design · hidden credentials · AI purple/pink gradients
- ❌ Emojis as icons (use Lucide SVG) · missing cursor-pointer · layout-shifting hovers
- ❌ Low-contrast text (<4.5:1) · instant state changes (use 150–300ms) · invisible focus states
- ❌ Placeholder-only labels · colour-only error states · "guaranteed/best" copy (CICC)

---

## Pre-Delivery Checklist
- [ ] Red is the dominant brand colour; green only as trust accent; errors use distinct `#B00020`
- [ ] No emojis as icons (Lucide SVG); consistent icon set; cursor-pointer on clickables
- [ ] Hover transitions 150–300ms, no layout shift; focus states visible (green ring)
- [ ] Text contrast ≥4.5:1 (light + dark tested independently)
- [ ] Jost headings + Inter body via next/font; base 16px
- [ ] prefers-reduced-motion respected; responsive 375/768/1024/1440; no horizontal scroll
- [ ] One primary (red) CTA per view; RCIC #R706497 + CICC link present; no "guaranteed" claims
- [ ] Server-rendered; LCP<2.5s / INP<200ms / CLS<0.1
