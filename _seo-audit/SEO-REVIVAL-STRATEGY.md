# Wild Mountain Immigration — SEO Revival & Sitemap Strategy

**Starting position:** DA 23 · historically ~30k visits/mo · no manual/algorithmic penalty.
**Current:** ~600 clicks/mo (down ~96% from peak), avg position stable (~16–18) while impressions collapsed ~80%.
**Goal:** rebuild as a lean, conversion-first immigration site that recovers lost rankings and converts traffic into consultations.

---

## 1. Diagnosis (no penalty — this is dilution + decay + cannibalization)

Average position barely moved, but impressions cratered. That is **not** an out-ranked-by-competitors story — it's Google reducing how often it surfaces the domain. With no penalty, the three real causes are:

1. **Topical dilution.** ~40% of pages and ~30% of traffic are off-topic (city weather, webcams, coffee shops, "what is Canada known for"). A domain that *sells immigration services* but reads as a *local lifestyle blog* loses topical authority on its money terms. Proof: you rank **#65 for "immigration consultant"** and **#54 for "immigration consultant near me"** — but #1 for Canadian trivia.
2. **Keyword cannibalization.** Duplicate intent pages compete with each other: `move-to-canada-from-france` **and** `life-in-canada-vs-france` (same for Ireland, Germany, NZ, UK, Australia…). Google splits signals across both and ranks neither well.
3. **Content decay.** Dozens of dated 2024 news posts (`lmia-new-rules-2024`, `express-entry-changes-2024`, election guides) rot and drag freshness/quality signals.

**The fix is consolidation, not addition.** Cut to a tight ~70-page site, merge duplicates into definitive pages, and concentrate internal links + authority on money pages.

---

## 1.5 Full live-sitemap inventory (292 URLs across 8 Yoast child sitemaps)

The GSC export only showed pages with impressions. The live `sitemap_index.xml` shows the **whole** site — and it confirms the dilution thesis even harder:

| Section | Live URLs | Verdict |
|---|---|---|
| `/blog/*` | 67 | Mostly **DELETE** (dated news/trivia); a few consolidate |
| `/faqs/*` | 61 | **KEEP ~25** high-intent, consolidate the rest |
| `/move-from/*` (countries) | 36 | **KEEP ~20**, fold ~16 low-fit into hub |
| **City lifestyle** (`vancouver` 26, `calgary` 21, `canmore` 11, `edmonton` 9, `toronto` 5, `city-guides` 5, `canadian-city-guides` 1) | **78** | **27% of the entire site** — the core dilution. 410 utility (26); merge relocation cluster (25) into **5 new "Moving to {City}" guides** (Option B) |
| `/immigrate`, `/work`, `/study`, LMIA, AAIP, visas | ~28 | **KEEP** — money pages |
| `/express-entry/*` | 7 | Consolidate → Express Entry page + tools |
| Core (about, contact, fees, consultation, partners…) | ~10 | **KEEP** |
| **WP/page-builder artifacts** (`popups`, `accordion-panels`, `portfolio-agency`, `creative-software`, `creative-persona`) | 5 | **NOINDEX** — these should never have been crawlable (technical leak) |

**Total decision:** **KEEP 91 → build ~65 pages · CONSOLIDATE 83 (301) · DELETE 118 (113× 410 + 5 noindex).**

---

## 2. The new architecture (hub-and-spoke)

Flat, themed, every page ≤3 clicks from home. Hubs link down to spokes; spokes link up to hubs and across to the relevant **service** (money) page.

```
/                                   Home (conversion-first)
├── /about/                         + /about/#team (RCIC credentials — E-E-A-T)
├── /fees/
├── /contact/
├── /consultation/                  hub
│   ├── /consultation/file-management/
│   └── /consultation/file-review/
│
├── IMMIGRATE (PR) ────────────────────────────────────
│   /immigrate/                     hub
│   ├── /immigrate/express-entry/
│   ├── /immigrate/aaip/            (Alberta Advantage)
│   │   ├── /immigrate/aaip/alberta-opportunity-stream/
│   │   ├── /immigrate/aaip/alberta-express-entry-stream/
│   │   └── /immigrate/aaip/alberta-accelerated-tech-pathway/
│   ├── /immigrate/bc-pnp/
│   ├── /immigrate/spousal-sponsorship/
│   └── /immigrate/canadian-citizenship/
│
├── WORK ──────────────────────────────────────────────
│   /work/                          hub
│   ├── /work/lmia/                 + /work/lmia/{low-wage,high-wage,permanent-resident,agricultural}/
│   ├── /work/international-experience-canada/
│   ├── /work/post-graduation-work-permit/
│   ├── /work/bridging-open-work-permit/
│   └── /work/intra-company-transfers/
│
├── STUDY / VISIT ─────────────────────────────────────
│   /study/
│   ├── /visit/super-visa/
│   └── /visit/tourist-visa/
│
├── LOCAL SERVICE (commercial — "immigration consultant {city}")
│   ├── /immigration-consultant-calgary/
│   ├── /immigration-consultant-vancouver/
│   ├── /immigration-consultant-toronto/
│   ├── /immigration-consultant-edmonton/
│   └── /immigration-consultant-canmore/
│
├── MOVE TO CANADA (prospect engine — top of funnel)
│   /move-to-canada/                hub
│   ├── /move-to-canada/from-{country}/   × ~20 priority countries
│   │   (UK, Ireland, Australia, New Zealand, Germany, France, Netherlands,
│   │    Sweden, Norway, Denmark, Belgium, Switzerland, Italy, Spain,
│   │    Portugal, Greece, Poland, USA, Mexico, Japan)
│   └── /move-to-canada/{city}/           × 5 relocation guides (Option B)
│       (calgary, vancouver, toronto, edmonton, canmore — cost of living,
│        neighbourhoods, jobs + immigration pathway; links to city service page)
│
├── TOOLS (lead magnets — gated for email capture)
│   ├── /tools/crs-calculator/      (744k impressions! biggest single opportunity)
│   ├── /tools/clb-calculator/
│   └── /tools/express-entry-guide/ (gated PDF)
│
├── KNOWLEDGE (topical authority + internal links to money pages)
│   ├── /guides/                    evergreen how-to (e.g. how-to-get-a-job-offer-in-canada)
│   ├── /faqs/                      hub + ~25 high-intent FAQs
│   └── /insights/                  lean blog — evergreen only, no dated news churn
│
└── /privacy-policy/  /terms-of-use/
```

**≈ 70 pages to build** (vs ~300 today), incl. 5 "Moving to {City}" relocation guides. The "lonely Canadian program" (292 clicks, nearly owned) gets its own page under `/immigrate/spousal-sponsorship/lonely-canadian-program/` or a dedicated guide — high-intent niche.

---

## 3. KEEP — rebuild these (91 legacy URLs → ~70 new pages, 65% of clicks)

| Group | What | Why |
|---|---|---|
| **Conversion core** | Home, About (+team/RCIC), Fees, Contact, Consultation (+File Management / File Review) | The pages that close clients. Home currently ranks #60 for its own brand context — rebuild. |
| **Program/service pages** | All `/immigrate/*`, `/work/*` (incl. LMIA streams), `/study/`, `/visit/super-visa/`, `/visit/tourist-visa/` | Your money keywords. Most rank 20–60 today → huge upside. |
| **Local service** | `immigration-consultant-{calgary, vancouver, toronto, edmonton, canmore}` | Buyer intent ("immigration consultant {city}"). You rank 47–63 → easy wins with proper pages. |
| **Country pages** | ~20 `/move-to-canada/from-{country}/` (UK, AU, IE, DE, FR, NL, SE… ) | 50%+ of all clicks. Your real prospect audience (high CTR from UK/AU/IE/Scandinavia). |
| **Tools** | CRS calculator, CLB calculator, Express Entry guide | CRS calc = 744k impressions. Gate as lead magnets. |
| **High-intent FAQs (~25)** | proof-of-work-experience, imm-5409, how-to-verify-immigration-consultant, spousal-sponsorship Qs, LMIA Qs, age-limit, lonely-canadian-rule, etc. | Support topical authority + internal-link juice to money pages. |
| **Best guide** | how-to-get-a-job-offer-in-canada-from-outside (1,472 clicks) → `/guides/` | Strong evergreen asset. |

---

## 4. CONSOLIDATE — merge & 301 (83 URLs, 14% of clicks)

These pass their equity into a stronger survivor (no new page needed):

| Legacy pattern | Merge into (301) | Reason |
|---|---|---|
| `move-from/life-in-canada-vs-{country}` | `/move-to-canada/from-{country}/` | **Kills the #1 cannibalization.** Combine the comparison + relocation page into one definitive country page. |
| Low-fit country pages (Taiwan, S.Korea, HK, Chile, Lithuania, Croatia, Slovakia, Czechia, Iceland, Estonia) | `/move-to-canada/` hub | Keep the equity, don't maintain 30 thin country pages. |
| `express-entry/*` sub-pages (use-of-a-representative, FSW, CEC, etc.) | `/immigrate/express-entry/` | Folded into one comprehensive Express Entry page + sections. |
| `work-in-canada/`, `how-to-move-to-canada/` | `/work/`, `/move-to-canada/` | De-duplicate hub-level pages. |
| Thin `/faqs/*` (not in keep list) | `/faqs/` hub (or relevant guide) | Consolidate FAQ long-tail under the hub. |
| Evergreen blog (pgwp-extension, super-visa-vs-visitor-visa, best-time-to-move) | matching service/guide page | Move signal to the permanent page. |
| Relocation-ish city pages (cost-of-living, pros-and-cons, moving-to-X, best-places-to-live, neighbourhoods) | `/move-to-canada/{city}/` | **Option B:** merge the relocation cluster into 5 "Moving to {City}" guides (not the service page — right content type to rank for relocation intent). |

> **Note:** where two legacy URLs map to the same NewURL (e.g. both `move-to-canada-from-nz` and `life-in-canada-vs-nz` → `/move-to-canada/from-new-zealand/`), build **one** page and 301 the second into it.

---

## 5. DELETE — prune (118 URLs, 21% of clicks → 113× 410 Gone + 5 noindex)

These attract **non-prospects** and dilute the domain. **Use 410 (Gone), not 301-to-home** — mass-redirecting irrelevant pages to the homepage is read by Google as soft-404 and can hurt. 410 cleanly tells Google "intentionally removed."

**Delete (city utility / lifestyle):** webcams, weather, time, coffee shops, cafés, breakfast, restaurants, nightlife/bars, best schools, neighbourhoods, "how to make friends in X", "is X safe", "why is X so expensive", salaries, road trips, skiing, hostels, real estate/realtor.

**Delete (trivia & dated news):** what-is-canada-known-for, are-forks-illegal-in-canada, cover-letter-for-ski-season, banff-history, how-much-do-loggers-make, all `*-2024`/`*-2025` news posts, election guides, draw recaps.

**Delete (orphans/assets):** creative-persona, creative-software, indexed `/wp-content/` image URLs (noindex these).

> Yes, this includes `what-is-canada-known-for` (7,163 clicks). It is **0% commercial** and a primary dilution source. Cutting it is *how the money pages recover.* You're trading vanity clicks for ranking power on terms that actually convert.

---

## 6. Redirect & implementation rules

1. **301** every CONSOLIDATE URL to its survivor (one-hop, never chains).
2. **410** every DELETE URL (or 301 only if a genuinely relevant target exists). Never bulk-301 to `/`.
3. **One redirect per old URL**, pointing at the *final* new URL (avoid 301→301 chains).
4. Submit a clean **`sitemap.xml`** with only the ~65 live URLs; remove old sitemaps.
5. Keep WWW/non-WWW + trailing-slash canonicalization consistent (data shows both `www.` and non-`www.` indexed — pick one, 301 the other).
6. **Internal linking:** every country/guide/FAQ page links to its relevant **service** page and to **/consultation/**. This is how authority flows to money pages.
7. **E-E-A-T:** surface Nicola Wightman RCIC #R706497 (CICC) on every page footer + author bylines on guides. Immigration is "Your Money or Your Life" — Google demands demonstrated expertise.
8. After launch: re-submit in Search Console, request indexing on money pages, monitor the 410s drop out over 4–8 weeks.

The machine-readable version of all of the above is **`redirect-map.csv`** (LegacyURL → Action → NewURL/Target → RedirectType).
