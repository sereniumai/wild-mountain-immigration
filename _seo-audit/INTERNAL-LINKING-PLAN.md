# Internal Linking Plan — Wild Mountain Immigration

**Why this matters:** internal linking is how authority flows through the site and how Google understands topical relationships. For a DA-23 recovering site, a disciplined hub-and-spoke link graph is one of our highest-leverage *free* ranking levers — and it's the #1 strength of the competitors we're beating (canadavisa's internal linking is their superpower). This is the map.

## The model: 3-tier hub-and-spoke
```
HOME (top hub)
  └─► PILLARS (topic hubs)  ◄──────► PILLARS (sibling cross-links)
        └─► SPOKES (cluster pages) ──► sibling spokes (2–4)
              └─► every spoke ──► ONE conversion page (book/quiz)
  LOCAL pages ──► relevant pillars + each other + Alberta hub
  TOOLS (calculators) ──► relevant pillars (and pillars ──► tools)
  BLOG / draw trackers ──► pillars (pass freshness equity up)
  TRUST pages ──► linked sitewide (nav + footer)
```

## Tier 1 — HOME
- Links **down** to all 6 pillars (services section), the 2 tools, the local hub, About, Contact.
- Links to 3 latest blog/draw posts (freshness).
- Receives links from: **every page** (logo + footer) — so it stays the strongest page.

## Tier 2 — PILLARS (topic hubs)
The 6 pillars: **Express Entry** `/express-entry/` · **AAIP/Alberta** `/alberta-immigration/` · **Family & Super Visa** `/family-sponsorship/` · **Work Permits** `/work-permits/` · **Study** `/study-permit/` · **Refusals** `/refusals/`.

Each pillar:
- Links **down** to ALL its spokes (cluster pages).
- Links **up** to Home (breadcrumb).
- Links **sideways** to 1–2 related pillars (e.g. Express Entry ↔ AAIP; Work Permits ↔ Express Entry via CEC; Study ↔ Work via PGWP).
- Links to the relevant **tool** (Express Entry/AAIP → calculators).
- Has 1 primary **conversion** CTA (book/quiz).

## Tier 3 — SPOKES (cluster pages)
Each spoke (e.g. AAIP Healthcare Pathway, Refused Study Permit, Super Visa):
- Links **up** to its pillar with descriptive anchor.
- Links **sideways** to 2–4 sibling spokes (contextual).
- Links to **one conversion** page.
- May link to a relevant tool or local page where natural.

### Pillar → spoke map (Phase 1 + key Phase 2)
| Pillar | Spokes link down to |
|---|---|
| **AAIP** `/alberta-immigration/` | opportunity-stream, alberta-express-entry-stream, **healthcare-pathway**, **tourism-hospitality**, **rural-renewal** (+designated-communities), entrepreneur-streams, aaip-draws-tracker, aaip-processing-times |
| **Express Entry** `/express-entry/` | draws-tracker, category-based-draws, **good-crs-score-2026**, federal-skilled-worker, CEC, FST, improve-crs, low-crs-options |
| **Family** `/family-sponsorship/` | spousal, **super-visa**, parents-grandparents, dependent-child |
| **Work Permits** `/work-permits/` | **lmia**, pgwp, open-work-permit, IMP |
| **Study** `/study-permit/` | proof-of-funds, PAL, study-to-pr, study-permit-refusal |
| **Refusals** `/refusals/` | **procedural-fairness-letter**, **gcms-notes**, refused-study/work/visitor, reconsideration, criminal-rehab, TRP, DUI-entry |

## Local pages
- **Home (`/`) = Cochrane hub.** `/immigration-consultant-cochrane/`, Calgary, Airdrie, Canmore, Banff, + **`/alberta-immigration-consultant/`** provincial hub.
- Each local page links: **up** to the Alberta hub, **across** to 2–3 neighbouring city pages, **out** to the programs most relevant to that city (e.g. Banff/Canmore → AAIP Tourism & Hospitality; Calgary → Express Entry), and to **book**.
- Alberta hub links down to all city pages.

## Tools
- CRS calculator ↔ Express Entry pillar + "good CRS score" spoke + book.
- AAIP EOI calculator ↔ AAIP pillar + book.
- Pillars link *into* the tools; tools link *back* into pillars (equity loop on your 742k-impression asset).

## Blog / news / draw trackers
- Every post links **up** to its relevant pillar (draw recaps → Express Entry/AAIP pillar) — passes the freshness/external-link equity into money pages.
- Trackers are perennial URLs linked from the pillar + homepage freshness block.

## Trust / conversion pages (sitewide)
- **About/Nicola, Fees, RCIC-credentials, verify-a-consultant, Contact/Book** — linked from nav + footer on every page.
- The migrated high-value legacy pages (verify-immigration-consultant = 1,058 clicks) link up to the relevant trust/refusals cluster.

## Anchor-text rules
- **Descriptive, varied, natural** anchors ("Alberta's Rural Renewal Stream", not "click here").
- **Don't** over-optimize exact-match anchors (e.g. mass "immigration consultant Calgary") — keep brand/natural anchors dominant (recovering-site safety).
- Match anchor to the **target page's** primary keyword, loosely.

## Hard rules
1. Every money page reachable within **≤3 clicks** of home.
2. **No orphan pages** — everything is linked from ≥1 relevant page.
3. Every content page → **exactly one** primary conversion CTA.
4. Redirected legacy pages with backlinks (wanderlog → Canmore content, etc.) **301 to the closest live page** so equity flows into the new graph (see redirect-map.csv).
5. Keep redirects **≤1 hop**; fix any chains.
6. Breadcrumbs (with BreadcrumbList schema) auto-generated from URL path on every nested page.

## Automation (Next.js build)
- Auto-render breadcrumbs from route segments.
- A `relatedLinks` registry keyed by topic/cluster so each new spoke auto-links to its pillar + siblings.
- A reusable "explore services" footer block (all pillars) on every page.

*Pairs with PROGRAM-ARCHITECTURE.md (page list), HOMEPAGE-BRIEF.md, CONTENT-BRIEFS.md, redirect-map.csv.*
