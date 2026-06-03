# Universal Page SEO Checklist — Wild Mountain Immigration

**Every single page on the site must pass this before publish.** Built for 2026: ranks in Google AND gets cited by AI engines (ChatGPT, Gemini, Perplexity, Google AI Overviews). Covers on-page, AEO/GEO, schema, E-E-A-T, internal linking, technical, compliance — plus an **Advanced Edge Tactics** section (aggressive white/gray-hat) and a **Do-NOT** section (black hat that would re-tank a recovering YMYL site).

> Context: we're a DA-23 site recovering from an algorithmic (not penalty) collapse. Confirmed clean GSC. So we play **aggressive but safe** — clever edges, never anything that risks a manual action on YMYL.

---

## A. BEFORE WRITING (every page)
- [ ] Identify **one primary keyword** + 3–8 secondary/long-tail (from LONGTAIL-KEYWORD-MAP.md).
- [ ] Confirm **search intent** (informational / commercial / transactional) and match the page type to it.
- [ ] **SERP analysis:** Google the primary kw — note who ranks, their word count, what's in the People-Also-Ask box, whether an AI Overview / featured snippet fires, and the gap we exploit.
- [ ] Decide the **conversion goal** (book / quiz / calculator / lead magnet).

## B. URL & METADATA
- [ ] **URL:** short, lowercase, hyphenated, keyword-bearing, no dates/stop-words (`/aaip/healthcare-pathway/`).
- [ ] **Title tag** ≤60 chars, primary kw near the front, brand at end, compelling (year/number/bracket where natural). CICC-safe (no "guaranteed/best").
- [ ] **Meta description** ≤155 chars, includes kw + a benefit + a soft CTA. Written to win the click (CTR).
- [ ] **Canonical** = self (Next.js Metadata API; not auto-added).
- [ ] **OpenGraph + Twitter** tags + a branded OG image (Nicola/RCIC badge).
- [ ] `index,follow` (except thank-you/search → noindex).

## C. ON-PAGE STRUCTURE
- [ ] **One H1**, contains the primary keyword, reads naturally (not stuffed).
- [ ] **⭐ ANSWER-FIRST PARAGRAPH** directly under the H1: a **40–60 word, self-contained paragraph that fully answers the page's core question.** This is the single highest-leverage element for both featured snippets AND AI citation. Every page has one. (See §D.)
- [ ] **Question-based H2/H3s** mirroring how people actually search ("How long does AAIP take in 2026?") — not marketing headings.
- [ ] **Heading hierarchy** sequential (H1→H2→H3, no skips).
- [ ] **Content depth to match intent:** pillars 2,500–5,000 words; spokes 1,500–2,500; local 1,200–1,600; tools 1,500+ supporting copy. **Real crawlable text — never just cards/visuals.**
- [ ] **Primary kw** in: H1, answer paragraph, first 100 words, ≥2 H2s, naturally through body, URL, title, meta, image alt. **Density natural (~0.5–1.5%), never stuffed.**
- [ ] **Semantic coverage:** include the related entities/terms competitors use (NOC, TEER, CLB, ECA, IRCC, stream names) — topical completeness, not just the head kw.
- [ ] **"Key takeaways" / TL;DR box** at top of long pages (3–5 bullets of load-bearing facts).
- [ ] **Tables** for any comparison/criteria/scores/fees (AI extracts tables extremely well; wins snippets).
- [ ] **Short paragraphs** (2–4 lines), bullet lists, numbered steps for processes.
- [ ] **Bold** the key facts/phrases (skimmability + emphasis signal).

## D. AEO / GEO — get cited by AI engines
- [ ] **Answer-first** (the §C paragraph) — 44% of AI citations come from the first 30% of a page.
- [ ] **Q&A block / FAQ** at the bottom answering adjacent long-tail (and the PAA questions).
- [ ] **Statistics with dates** ("As of the [date] draw, the cutoff was X") — adding stats lifts AI visibility ~30%.
- [ ] **Cite authoritative sources** (IRCC, alberta.ca, laws-lois) with the data's date — ~30% citation lift.
- [ ] **Named-expert quote** where natural ("Nicola Wightman, RCIC, notes…") — ~30% lift.
- [ ] **Entity clarity:** consistent naming of programs, the firm, and Nicola; link to the pillar/authority page for each entity.
- [ ] **Semantic HTML** (`<table>`, `<ul>`, `<dl>`, proper headings) so parsers map structure.
- [ ] **Visible "Last updated: [Month Year]"** + matching `dateModified` (freshness = ~26% more AI citations).
- [ ] Page is reachable by AI crawlers (robots allows GPTBot, Google-Extended, PerplexityBot, ClaudeBot) and listed in **llms.txt** if cornerstone.

## E. SCHEMA / STRUCTURED DATA (JSON-LD)
- [ ] **BreadcrumbList** (every nested page).
- [ ] **FAQPage** (every page with a Q&A block — still feeds AI Overviews even though SERP rich-result retired May 2026).
- [ ] **Article/BlogPosting** (content pages) with `author`→Nicola Person, `datePublished`, `dateModified`.
- [ ] **HowTo** (process/step pages).
- [ ] **Service** (service pages) + **LocalBusiness/ProfessionalService** (home/contact/local).
- [ ] **Person** (Nicola) with `hasCredential`→CICC + `sameAs` (CICC register, LinkedIn) — strongest YMYL E-E-A-T signal.
- [ ] On-page FAQ text **matches** schema text exactly. Validate in Rich Results / Schema.org validator.

## F. E-E-A-T (critical for YMYL immigration)
- [ ] **Author byline** "Reviewed by Nicola Wightman, RCIC #R706497" → links to author/about page + CICC register.
- [ ] **Citations** to primary sources (IRCC/alberta.ca/statute) for every factual claim.
- [ ] **Experience signal** — first-hand practitioner framing ("In files we handle…"), anonymized compliant scenarios.
- [ ] **Last-reviewed date** visible.
- [ ] Trust elements where relevant (CICC badge, verify link, reviews — with consent).
- [ ] **`[VERIFY]` discipline:** every 2026 fee/date/cutoff checked against the live official source before publish.

## G. INTERNAL LINKING (per INTERNAL-LINKING-PLAN.md)
- [ ] Links **up** to its pillar (descriptive anchor).
- [ ] Links **across** to 2–4 sibling/related pages.
- [ ] Links to **one** conversion page (book/quiz).
- [ ] Links to a relevant **tool** where natural.
- [ ] Anchors descriptive + varied (no exact-match spam).
- [ ] Reachable ≤3 clicks from home; not orphaned.

## H. MEDIA / IMAGES
- [ ] Descriptive **alt text** (with kw where honest) on meaningful images.
- [ ] **WebP/AVIF**, responsive `srcset`, `width/height` set (no CLS), lazy-load below fold, hero preloaded.
- [ ] Descriptive **file names** (`aaip-rural-renewal-communities.webp`, not `IMG_1234`).
- [ ] Real, original imagery where possible (Rockies/Cochrane/Nicola) > generic stock.

## I. TECHNICAL / CORE WEB VITALS
- [ ] **LCP ≤2.5s · INP ≤200ms · CLS ≤0.1** (mobile, 75th pct).
- [ ] Mobile-first, no horizontal scroll, tap targets ≥44px, base font 16px+.
- [ ] Sitemap includes it with accurate `lastModified`; correct `index/noindex`.
- [ ] Accessible: semantic HTML, focus states, contrast AA, labelled forms.

## J. COMPLIANCE (CICC — binding)
- [ ] **RCIC #R706497 + CICC register link** present (microbar/footer sitewide; trust line near CTAs).
- [ ] ❌ No "guaranteed / 100% / best"; no implied IRCC/government affiliation.
- [ ] Process language, not outcome promises. Testimonials only with written consent.
- [ ] In-scope only (no IRB/Federal Court representation; no Quebec).

---

## K. ⚡ ADVANCED EDGE TACTICS (aggressive white / gray-hat — the expert moves)
*These are the "tricks" most sites don't do. All are safe-aggressive — they give a real edge without risking the recovery.*

1. **Featured-snippet engineering** — for every "what is / how long / how much" target, place a 40–60 word definition block or a clean table/ordered-list exactly where Google lifts snippets. Win the box → win the AI citation.
2. **PAA harvesting** — scrape the People-Also-Ask for each target kw; answer each as an H2/H3 + add to FAQ schema. Captures the long-tail + expands AI surface.
3. **Information-gain content** — publish original angles competitors don't have: your own **AAIP draw analysis**, RCIC commentary on policy, real (anonymized) case patterns. Google's helpful-content system rewards "information gain"; AI engines preferentially cite original data.
4. **Barnacle / parasite SEO (legit)** — publish authoritative content on high-DA platforms that rank instantly and link/cite back: **Medium, LinkedIn articles, Reddit (genuine), Quora answers, YouTube descriptions, the CICC register, "best immigration consultant Calgary" roundups.** You borrow their DA while yours grows.
5. **Newsjacking / freshness capture** — same-day posts on IRCC/AAIP changes & each draw; perennial **draw-tracker URLs** updated on a schedule. QDF traffic competitors are too slow for.
6. **Comparison & "alternative" pages** — "RCIC vs immigration lawyer," "[big firm] alternative," "Express Entry vs AAIP" — capture high-intent decision traffic adjacent to terms you can't win head-on.
7. **Schema stacking** — multiple valid schema types per page (Article + FAQPage + HowTo + Breadcrumb + Person) for maximum machine-readability and rich-result/AI surface.
8. **Entity SEO / knowledge graph** — build **Wikidata** entries for Nicola (RCIC) + the firm; lock `sameAs` everywhere; consistent NAP. Makes you a *recognized entity* AI can attribute claims to.
9. **Internal-link sculpting** — concentrate link equity on money/pillar pages; the high-traffic trivia-replacement and tracker pages pass equity up to commercial pages; vary anchors.
10. **CTR optimization** — titles with year/number/bracket ("[2026]", "(RCIC Guide)"); benefit-driven metas; test + iterate via GSC. Higher CTR than your rank-neighbours can lift you.
11. **Keyword/entity gap mining** — pull the terms/entities competitor top-rankers use (NLP/TF-IDF) and ensure our page covers them = topical completeness Google measures.
12. **"Skyscraper" on the exact query** — for a priority term, out-depth/out-current the current #1 specifically (more complete, more recent, better structured), then earn a few links to it.
13. **Link reclamation** — Google-Alert your brand + "AAIP"; turn unlinked mentions into links; replicate competitors' replicable directory/resource links (backlink-gap method).
14. **Review velocity engine** — steady GBP review drip (1–2/week, consent, never gated) — local-pack fuel + third-party stars (safer than self-markup).
15. **Controlled programmatic long-tail** — occupation + country pages at *quality* scale (≥25% unique data each), rolled out in waves, human-reviewed — capture hundreds of long-tails without thin-content risk.
16. **llms.txt + AI-crawler allow-list** — explicitly invite the citation-driving bots; curate cornerstone pages for them.

## L. 🚫 DO NOT — black hat that would RE-TANK this recovering YMYL site
*You asked for gray-hat edges — here's the honest line I won't cross, because a manual action on a just-cleared site is catastrophic:*
- ❌ Keyword stuffing / hidden text / cloaking / sneaky redirects
- ❌ Doorway pages (city pages with only the name swapped)
- ❌ **PBNs, paid links, link exchanges, link schemes** (highest re-penalty risk for a recovering site)
- ❌ Exact-match anchor-text spam at scale
- ❌ **Mass AI-generated thin content** published unreviewed (scaled-content-abuse policy = overnight deindex)
- ❌ Fake reviews / fabricated review schema / fake AggregateRating
- ❌ Misrepresentation of credentials, or any "guaranteed PR" claims (also a CICC violation)
- ❌ Scraped/spun content

> The edge comes from **doing the safe-aggressive tactics in §K better and faster than competitors** — not from the cliff-edge stuff that tanks YMYL sites.

---

## M. PRE-PUBLISH QA + POST-PUBLISH
- [ ] Run the page against **§A–L**.
- [ ] All `[VERIFY]` facts confirmed against live official sources.
- [ ] Schema validated; links work (≤1 redirect hop); no orphan.
- [ ] CWV check (PageSpeed) on mobile.
- [ ] Compliance sweep (RCIC#, no guarantees).
- [ ] **Post-publish:** submit/inspect in GSC; add to sitemap; internal-link it from pillar + siblings within 24h; set a 90-day freshness review (faster for AAIP/CRS/draw pages).
