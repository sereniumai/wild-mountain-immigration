# On-Page Spec — the by-the-numbers formula (every page)

Granular, mechanical rules for writing each page. Use alongside PAGE-SEO-CHECKLIST.md.

> **Honest framing first:** Google does NOT count exact keyword density as a ranking factor — modern ranking is about **intent + semantic topical coverage + E-E-A-T**. These numbers are **guardrails**: they guarantee the keyword is *placed where it matters* and the topic is *fully covered*, while preventing stuffing. Hit the placements; treat the counts as "natural ranges," never as quotas to force.

---

## 1. PRIMARY KEYWORD — exact placement slots (all required)
The primary keyword (or a close natural variant) **must** appear in each of these:

| # | Slot | Rule |
|---|---|---|
| 1 | **Title tag** | within the first 60 chars, ideally the first 1–3 words |
| 2 | **Meta description** | once, naturally |
| 3 | **URL slug** | once (`/aaip/healthcare-pathway/`) |
| 4 | **H1** | once, reads naturally |
| 5 | **First sentence** | ✅ yes — in the first sentence, within the **first ~100 characters**, naturally |
| 6 | **Answer paragraph** (40–60 words under H1) | once, in the opening definitional sentence |
| 7 | **≥1 H2 (ideally 2)** | exact or close variant |
| 8 | **First 100 words** | at least once (covered by #5/#6) |
| 9 | **One image alt** | once, where honest |
| 10 | **Closing/summary paragraph** | once |
| 11 | **Inbound internal anchor** | ≥1 other page links to this page using the kw (or variant) as anchor |

**First-sentence pattern (LLM + snippet friendly):** start with the subject noun, not a hook.
> ✅ "The **Alberta Rural Renewal Stream** is a provincial nominee pathway that lets workers settle in smaller Alberta communities and apply for permanent residence."
> ❌ "Have you ever dreamed of moving to a small Canadian town?"

## 2. KEYWORD FREQUENCY — natural ranges by page length
Target **density ~0.5–1.2%**, hard cap **1.5%**. "Exact-match" = the literal phrase; "variations" = singular/plural, reordered, partial, synonyms.

| Page words | Primary exact-match | Primary variations | Each secondary kw | LSI / entity terms (distinct) |
|---|---|---|---|---|
| **800** (short spoke) | 3–5 | 3–6 | 1–2 | 8–12 |
| **1,500** (spoke/local) | 5–8 | 6–10 | 2–3 | 12–18 |
| **2,500** (big spoke) | 8–12 | 10–15 | 2–4 | 18–25 |
| **4,000** (pillar) | 12–18 | 15–25 | 3–5 | 25–40 |

Rules:
- **Lead with variations, not repetition** — Google rewards semantic variety; repeating the exact phrase reads as stuffing.
- Never two exact-match instances in the **same sentence or adjacent sentences**.
- If it doesn't read naturally aloud, cut it.

## 3. SECONDARY KEYWORDS
- 3–8 per page. Each appears **1–4 times**, with **≥1 in an H2/H3**.
- Assign from LONGTAIL-KEYWORD-MAP.md. Each secondary ideally owns its own H2 section.

## 4. LSI / SEMANTIC / ENTITY TERMS
"LSI" here = the **related terms and named entities** that prove topical depth. Coverage matters more than count.
- Include the count in §2 (e.g. 12–18 distinct on a 1,500-word page), each used naturally where relevant.
- **Source them from:** the People-Also-Ask box, "related searches," and the terms the current top-3 rankers use.
- **Example LSI/entity set for an AAIP page:** Expression of Interest (EOI), nomination, permanent residence, IRCC, NOC code, TEER, CLB / language test, ECA, work permit, job offer, eligibility, processing time, allocation, designated community, endorsement letter, Express Entry, provincial nominee, Alberta Advantage Immigration Program, $135 fee, draw / cut-off score.
- **Example for a refusals page:** procedural fairness, GCMS notes, ATIP, reapplication, inadmissibility, misrepresentation, refusal letter, officer, deadline, IRCC, reconsideration, study/work/visitor permit, R10/R216 (where relevant).

## 5. HEADINGS
- **1 × H1** (primary kw).
- **4–8 × H2** for a spoke; **8–14 × H2** for a pillar.
- **Primary kw in 1–2 H2s; secondary kws in others.** Remaining H2s = question-format (PAA-style).
- H3s nest real sub-points; never skip levels.
- Each **H2's first sentence = a self-contained answer** to that heading (so AI/snippets can lift it).

## 6. CONTENT STRUCTURE (per page)
- **Answer paragraph:** 40–60 words, self-contained, definitional, kw in sentence 1. (Mandatory.)
- **Key Takeaways box:** 3–5 bullets, top of any page ≥1,200 words.
- **≥1 data table** (criteria/fees/scores/comparison).
- **One statistic + one cited source + a date** inside the first ~150 words.
- **Paragraphs:** 2–4 sentences / ~40–80 words each. **Sentence avg ≤ 20–25 words.** Reading level ~Grade 8–10.
- **Bold** the load-bearing facts (numbers, deadlines, eligibility rules).
- **FAQ:** 5–8 questions; each answer **40–80 words**, the direct answer in the **first sentence**; questions phrased exactly as people search.
- **Closing:** short summary + one CTA.

## 7. MAKING IT LLM-READY (granular)
AI engines extract *passages*, attribute to *entities*, and prefer *fresh, sourced, structured* facts. Each page must:
- [ ] **Answer-first 40–60 word block** under H1 (the #1 citation driver).
- [ ] **Definitional sentence patterns:** "X is…", "X requires…", "To do X, you must…", "X takes about [N] months." (Liftable, quotable.)
- [ ] **Self-contained sections** — no "as mentioned above"; each section makes sense lifted out.
- [ ] **Fact tables** (programs, fees, scores, timelines) — AI lifts these directly.
- [ ] **A dated statistic** ("As of the [date] draw, the cut-off was [X]").
- [ ] **Inline source citations** to IRCC/alberta.ca/laws-lois with the date.
- [ ] **A named-expert quote** ("Nicola Wightman, RCIC #R706497, notes…").
- [ ] **Consistent entity naming** + an internal link to that entity's authority page (program pillar, About/Nicola).
- [ ] **FAQ + schema** (FAQPage) — pages with it are ~3.2× more likely to appear in AI Overviews.
- [ ] **Visible "Last updated: [Month] 2026"** + `dateModified`.
- [ ] **Semantic HTML** (`<table>`, `<ul>`, `<dl>`, heading order) — clean parse.
- [ ] Crawlable by GPTBot / Google-Extended / PerplexityBot / ClaudeBot; cornerstone pages listed in `llms.txt`.

## 8. TITLE & META FORMULAS
- **Title:** `Primary Keyword [modifier/year] | Brand` — ≤60 chars. Modifiers that lift CTR: `(2026)`, `(RCIC Guide)`, `Eligibility`, `Step-by-Step`. No "guaranteed/best".
- **Meta:** `[Answer/benefit with primary kw]. [Secondary benefit]. [Soft CTA].` ≤155 chars. e.g. *"Who qualifies for Alberta's Dedicated Health Care Pathway in 2026 — eligible jobs, language & licensing rules. Reviewed by an Alberta RCIC. Book a consult."*

## 9. QUICK NUMERIC CHEAT-SHEET
- Primary kw in **first sentence** (≤100 chars) ✓ · **1 H1** · primary in **1–2 H2s**
- Density **0.5–1.2%** (cap 1.5%) · variations > exact repeats
- Answer block **40–60 words** · FAQ **5–8 Qs**, answers **40–80 words**
- Paragraphs **40–80 words** · sentences **≤25 words** avg
- **≥1 table** · **1 stat + 1 source + date** in first 150 words
- Title **≤60** · meta **≤155** · "Last updated" date visible
- Internal links: **1 up (pillar) + 2–4 sideways + 1 conversion**
