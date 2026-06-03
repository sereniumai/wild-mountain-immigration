# Per-Page SEO Master Checklist — On-Page + Off-Page + Technical (multi-engine)

**The definitive checklist EVERY page passes before + after publish.** Built to rank across all surfaces: Google + Gemini/AI Overviews, Bing + ChatGPT/Copilot/DuckDuckGo, Brave + Leo, Perplexity. Grounded in Google's official guidance. Exact numbers live in ON-PAGE-SPEC.md; strategy in ADVANCED-SEO-MASTERPLAN.md.

> The 6 cross-surface essentials (do these and you're visible everywhere): **server-rendered + fast · submit to Google + Bing/IndexNow · comprehensive schema · answer-first cited content ≤150 words · visible authorship + freshness · llms.txt.**

---

## ✅ PART 1 — ON-PAGE

### 1.1 Google's "people-first" gate (answer YES to all — Google's own questions)
- [ ] Would someone who came **directly to us** (not via search) find this useful? (Not made primarily for search engines.)
- [ ] Original info / first-hand experience / insight beyond the obvious — **substantial value vs other pages in results**?
- [ ] NOT mass-produced, NOT a summary of competitors without adding value, NOT chasing a word count.
- [ ] **Who/How/Why:** clear author (Nicola, RCIC #R706497) · process honest (AI use self-evident if any) · exists to *help*, not to rank.

### 1.2 Keyword placement (Bing-literal + Google-semantic — exact slots)
- [ ] Primary keyword in **first sentence** (≤100 chars), natural.
- [ ] Primary kw in: **Title (front), H1, first paragraph** (Bing weights these ~20% more than Google), URL slug, ≥1–2 H2s, one image alt, closing paragraph.
- [ ] Frequency per ON-PAGE-SPEC table (density 0.5–1.2%, cap 1.5%); **variations > exact repeats**.
- [ ] 3–8 secondary kws (each in an H2/H3); 12–40 LSI/entity terms (NOC, TEER, CLB, ECA, IRCC, stream names…) for topical completeness.
- [ ] Entity **salience high** — primary entity prominent in title/first-100-words/headings (target >0.7).

### 1.3 Structure & content
- [ ] **One H1** (kw, natural). Sequential H2→H3, no skips. Question-format H2s mirroring real search.
- [ ] **⭐ ANSWER-FIRST block** under H1: self-contained, definitional ("X is…"), **40–60 words (≤150 max)** — the #1 driver of featured snippets + AI/Brave/Perplexity citation. Each H2's first sentence is also a liftable answer.
- [ ] Depth to intent: pillar 2,500–5,000w · spoke 1,500–2,500 · local 1,200–1,600. **Real crawlable text, not just cards.**
- [ ] **Key-takeaways/TL;DR** box (pages ≥1,200w). **≥1 data table.** Short paras (40–80w), sentences ≤25w. **Bold** load-bearing facts.
- [ ] **1 statistic + 1 cited source + a date** in first ~150 words. Named-expert quote (Nicola) where natural.
- [ ] **FAQ block** (5–8 Qs, answers 40–80w, direct answer first) — answer the PAA questions (AlsoAsked).
- [ ] **Information gain:** ≥1 thing no competitor has (original AAIP data / real case pattern / RCIC commentary).

### 1.4 E-E-A-T (critical — YMYL)
- [ ] **Author byline** "Reviewed by Nicola Wightman, RCIC #R706497" → author/about page + **CICC register** link. (Visible bylines also required by Brave.)
- [ ] Inline **citations to primary sources** (IRCC/alberta.ca/laws-lois) with dates.
- [ ] Experience signal (first-hand practitioner framing). Trust elements (CICC badge, reviews where relevant).
- [ ] `[VERIFY]` every 2026 fee/date/cutoff against live official source.

### 1.5 Metadata
- [ ] **Title ≤60** (kw front + credibility marker: RCIC / 2026). **Meta ≤155** (kw + benefit + soft CTA — Bing *reads* it).
- [ ] Self-canonical (Metadata API). OpenGraph + Twitter + branded OG image. `index,follow` (noindex thank-you/search).

---

## ✅ PART 2 — TECHNICAL

### 2.1 Rendering & speed (multi-engine critical)
- [ ] **Server-rendered (SSG/SSR/PPR)** — Bingbot, Brave, and AI crawlers barely render JS. Critical content + internal links in initial HTML.
- [ ] **Core Web Vitals (mobile, p75):** LCP <2.5s · **INP <200ms** · CLS <0.1. Next.js: `next/image`+`priority` hero, `next/font`, **RSC + code-split + Suspense streaming** for INP, PPR for static+dynamic.
- [ ] Mobile-first, no horizontal scroll, tap ≥44px, base font 16px, HTTPS, no intrusive interstitials.

### 2.2 Schema / structured data (highest cross-surface leverage)
- [ ] One `@graph`, `@id`-cross-referenced:
  - [ ] **Organization/ProfessionalService** (entity home) — `sameAs` (CICC register, GBP, LinkedIn, **Wikidata**), **`knowsAbout`** (exact service topics), `areaServed`.
  - [ ] **LocalBusiness** — NAP **identical to GBP** (Cochrane canonical).
  - [ ] **Person (Nicola)** — `hasCredential` (RCIC licence), `worksFor`, `knowsAbout`, `sameAs`.
  - [ ] **Article/BlogPosting** (author→Person, publisher→Org, `datePublished`/`dateModified`).
  - [ ] **BreadcrumbList** (live rich result). **Service** node. **FAQPage** (parsed for AI even though SERP rich-result retired).
- [ ] Validate (Rich Results + Schema.org). On-page FAQ text = schema text.

### 2.3 Crawl, index & submission (do for EVERY new/updated page)
- [ ] In **XML sitemap** with accurate `lastmod`.
- [ ] **Submit to Google** (GSC URL inspection for priority pages) AND **Bing Webmaster Tools**.
- [ ] **Ping IndexNow** (host `{key}.txt` at root; POST the URL) → near-instant Bing/Copilot/ChatGPT indexing.
- [ ] **robots.txt** allows AI retrieval bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Google-Extended) + Bingbot + Brave.
- [ ] Reachable ≤3 clicks from home; not orphaned. Redirects ≤1 hop.

### 2.4 Media
- [ ] WebP/AVIF, `srcset`, width/height (no CLS), lazy-load below fold, hero preload. Descriptive filenames + alt (Bing/Brave favor multimedia w/ alt).

---

## ✅ PART 3 — OFF-PAGE (per-page actions)

### 3.1 Internal links (per INTERNAL-LINKING-PLAN.md)
- [ ] **1 up** (pillar) + **2–4 sideways** (siblings) + **1 conversion** (book/quiz) + relevant tool. Descriptive, varied anchors (no exact-match spam).

### 3.2 Entity & brand signals
- [ ] Page reinforces the entity: consistent naming of firm/Nicola/programs + link to their authority page. (Builds the Knowledge-Graph entity AI attributes claims to.)

### 3.3 Distribution & amplification (for substantive pages)
- [ ] **Share to LinkedIn** (direct Bing ranking signal + brand) and relevant socials.
- [ ] For cornerstone pages: support with a **genuine Reddit/YouTube/Quora** presence on the topic (AI-citation lever — never astroturf).
- [ ] Earmark for **digital PR / linkable-asset** outreach if it's a data study/tool/calculator.

### 3.4 Local pages only
- [ ] NAP matches GBP + Bing Places (Cochrane). Linked from GBP/Bing Places. Unique local content (≥40% city-specific).

---

## ✅ PART 4 — COMPLIANCE (CICC — binding)
- [ ] RCIC #R706497 + CICC register link present (microbar/footer + near CTAs).
- [ ] NO "guaranteed/100%/best"; no implied IRCC/government affiliation; process language not outcome promises.
- [ ] Testimonials only with written consent; reviews never gated/incentivized.
- [ ] In-scope only (no IRB/Federal Court representation; no Quebec).

---

## ✅ PART 5 — PRE-PUBLISH QA + POST-PUBLISH
**Pre:** run Parts 1–4 · all `[VERIFY]` confirmed · schema validates · CWV mobile pass · server-rendered HTML check (disable JS, is content there?) · compliance sweep.
**Post:** GSC + BWT submit + IndexNow ping · internal-link it from pillar + siblings within 24h · share to LinkedIn · set freshness review (90 days for AAIP/CRS/draws, 6 months evergreen) · after 2–4 weeks check GSC + BWT AI-Performance report (grounding queries) → iterate title/meta for CTR, expand sections earning impressions.

---

### The per-engine cheat line for any page
- **Google/Gemini:** people-first + E-E-A-T + backlinks/authority + CWV.
- **Bing/ChatGPT/Copilot:** exact-match in title/H1/para + server-render + IndexNow + answer-first.
- **Brave/Leo:** visible authorship + entity schema + ≤150-word cited answers + DON'T over-optimize.
- **Perplexity:** freshness + citation density.
- **All of them:** answer-first, cited, structured, crawlable, fresh. That's the 80%.
