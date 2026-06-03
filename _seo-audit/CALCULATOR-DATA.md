# Calculator Data — AAIP EOI + Express Entry CRS (build-ready, current ~May 2026)

**Purpose:** Exact scoring grids to build our two flagship tools (AAIP EOI calculator + CRS calculator). Hand directly to the developer.

**Source confidence:**
- **AAIP Worker EOI grid** — extracted verbatim from the official Government of Alberta PDF (`alberta.ca/system/files/im-worker-stream-expression-of-interest-points-grid.pdf`, dated Aug 7 2025). **HIGH.**
- **CRS grids** — canada.ca blocked automated fetch (403); values cross-confirmed across two faithful reproductions of the official IRCC grid and match long-standing published values. **HIGH** structure/numbers; do one manual eyeball vs live canada.ca before shipping.
- **Draw cut-offs** — IRCC tracking + alberta.ca/aaip-processing-information. Time-sensitive; pull live, never hardcode. All flagged **[VERIFY]**.

---

## PART 1 — Alberta AAIP Worker Expression of Interest (EOI) — max 100

Covers all worker pathways incl. the Alberta Express Entry Stream. **Note:** the AAIP Express Entry Stream *also* requires a federal Express Entry profile with **minimum CRS 300** — a separate score from the EOI. Don't conflate.

**Total 100 = Human Capital (max 69) + Economic Factors (max 31)**

### 1A. Human Capital — max 69

**Highest education completed (max 12):** Doctorate 12 · Master's 10 · Bachelor's 7 · Trades cert/diploma 7 · Diploma/cert 4 · Secondary & lower 0
**Location of highest education (max 10):** In Alberta 10 · Another province 6 · Outside Canada 0

**General language proficiency (max 10)** — scored on lowest of 4 abilities; higher of English/French awarded. Min to submit: CLB/NCLC 4.
| CLB(Eng)/NCLC(Fr) | English | French |
|---|---|---|
| 6+ | 10 | 8 |
| 5 | 8 | 5 |
| 4 | 5 | 3 |
| ≤3 / none | 0 | 0 |

**Bilingual proficiency (max 3):** CLB/NCLC 4+ in BOTH English and French → 3.

**Total work experience, Canada + abroad (max 11):** 12+ mo 11 · 6–11 mo 7 · <6 mo 3
**Work experience in Canada (max 10):** 6+ mo in Alberta 10 · 6+ mo other province 6 (higher awarded)

**Age (max 5):** 18–20 = 3 · 21–34 = 5 · 35–49 = 4 · 50+ = 3

**Family connection in Alberta (max 8):** 8 pts for parent/child/sibling who is a citizen/PR, 18+, living in Alberta (in-laws don't qualify). Legacy grandparent/aunt/uncle/niece/nephew only if submitted on/before Jan 29 2025.

### 1B. Economic Factors — max 31

**Permanent full-time Alberta job offer (max 10):** 10
**Job offer in select rural/sector (max 6)** — any one: Rural Renewal designated-community endorsement letter 6 · Tourism & Hospitality sector (assoc. member) 6 · Law enforcement (employer is Alberta Assoc. of Chiefs of Police member) 6
**Alberta job offer location (max 5):** Calgary CMA 0 · Edmonton CMA 0 · Rural Renewal community 5 · Other Alberta community 5
**Regulated occupation in Alberta (max 10):** 10 if Alberta job offer in a regulated occupation AND you hold the recognized Alberta certification/licensure (trades: valid Alberta Qualification Certificate or AIT-recognized cert).

**Collected but NOT scored:** IRCC status, NOC 2021 code, employer NAICS 2022 code (used for targeted draws).

### 1C. AAIP fees
| Fee | Amount | Effective |
|---|---|---|
| Worker EOI (WEOI) submission | **$135** | **Apr 7 2026** [VERIFY] |
| AAIP application | $1,500 (non-refundable) | current |
| Reconsideration request | $250 | current |

### 1D. Recent 2026 AAIP draws (illustrative — pull live) [VERIFY]
| Date | Stream/Pathway | Invites | Min EOI |
|---|---|---|---|
| Jan 26 | Dedicated Health Care (EE) | 63 | 61 |
| Jan 29 | Accelerated Tech (EE) | 148 | 63 |
| Feb 2 | Alberta Opportunity Stream | 915 | 57 |
| Apr 9 | Rural Renewal | 74 | 50 |
| Apr 14 | AB Express Entry – Priority Sectors (construction/trades) | 50 | 60 |
| May 6 | Alberta Opportunity Stream | 832 | 54 |
| May 13 | Dedicated Health Care (EE) | 61 | 57 |

Observed 2026 cut-off range ~45 (non-EE health) to ~63 (tech); Opportunity ~54–57; Rural Renewal ~46–50.
**Priority sectors 2026:** health care, tech, construction/trades, manufacturing, aviation, agriculture, tourism & hospitality, law enforcement, Rural Renewal communities.
**[VERIFY] allocation (~May 14 2026):** Opportunity 3,425 / Rural Renewal 1,000 / Tourism & Hospitality 150 / Health Care 500 / Accelerated Tech 600; ~6,403 total, ~4,212 remaining.

---

## PART 2 — Express Entry CRS — max 1,200

Sub-maxes: Core 500 (no spouse)/460 (spouse) + Spouse 40 + Skill transferability 100 + Additional 600.

### 2A. Core / Human Capital

**Age (max 110 no-spouse / 100 spouse):** 18→90/99 · 19→95/105 · 20–29→100/110 · 30→95/105 · 31→90/99 · 32→85/94 · 33→80/88 · 34→75/83 · 35→70/77 · 36→65/72 · 37→60/66 · 38→55/61 · 39→50/55 · 40→45/50 · 41→35/39 · 42→25/28 · 43→15/17 · 44→5/6 · 45+→0 (format: with-spouse / without-spouse)

**Education (with-spouse / without):** <secondary 0/0 · secondary 28/30 · 1-yr 84/90 · 2-yr 91/98 · bachelor's/3yr+ 112/120 · two+ creds 119/128 · master's/professional 126/135 · PhD 140/150

**First official language — PER ABILITY (with/without):** ≤CLB3 0/0 · CLB4 6/6 · CLB5 6/6 · CLB6 8/9 · CLB7 16/17 · CLB8 22/23 · CLB9 29/31 · CLB10+ 32/34. (×4 abilities. [VERIFY] aggregate cap shown as 160/150 on IRCC headline vs 136/128 per-ability math — treat per-ability table as authoritative, confirm cap.)

**Second official language — per ability (both scenarios):** ≤CLB4 0 · CLB5–6 1 · CLB7–8 3 · CLB9+ 6 (cap 24 no-spouse / 22 spouse)

**Canadian work experience (with/without):** none 0/0 · 1yr 35/40 · 2yr 46/53 · 3yr 56/64 · 4yr 63/72 · 5yr+ 70/80

### 2B. Spouse factors (max 40)
**Spouse education (max 10):** <sec 0 · sec 2 · 1yr 6 · 2yr 7 · bachelor's 8 · two+ 9 · master's 10 · PhD 10
**Spouse first language per ability (max 20 = 5×4):** ≤CLB4 0 · CLB5 1 · CLB6 1 · CLB7 3 · CLB8 3 · CLB9 5 · CLB10+ 5
**Spouse Canadian work experience (max 10):** none 0 · 1yr 5 · 2yr 7 · 3yr 8 · 4yr 9 · 5yr+ 10

### 2C. Skill transferability (max **100** — enforce caps, don't sum naively)
- **Education + language (max 50):** secondary 0/0 · 1yr+ post-sec 13 (CLB7+ all, one 9) / 25 (CLB9+ all) · two+ creds or master's/PhD 25 / 50
- **Education + Canadian experience (max 50):** secondary 0/0 · 1yr+ post-sec 13 (1yr) / 25 (2yr+) · two+ creds or higher 25 / 50
- **Foreign experience + language (max 50):** none 0/0 · 1–2yr 13 (CLB7+) / 25 (CLB9+) · 3yr+ 25 / 50
- **Foreign experience + Canadian experience (max 50):** none 0/0 · 1–2yr 13 (1yr Cdn) / 25 (2yr+) · 3yr+ 25 / 50
- **Certificate of qualification + language (max 50):** 25 (CLB5+ all, one 7) / 50 (CLB7+ all)
> **Cap logic:** education-combo tables jointly cap at 50; experience-combo tables jointly cap at 50; certificate combos cap at 50; **whole section hard-capped at 100.**

### 2D. Additional points (max 600)
| Factor | Points |
|---|---|
| Provincial nomination (enhanced PNP) | **600** |
| Sibling in Canada (citizen/PR, 18+, in Canada) | 15 |
| French NCLC7+ all four + English ≤CLB4 / none | 25 |
| French NCLC7+ all four + English CLB5+ all four | 50 |
| Canadian post-secondary 1–2 yr | 15 |
| Canadian post-secondary 3yr+ / master's+ | 30 |
| ~~Arranged employment / LMIA~~ | **REMOVED (effective Mar 25 2025)** |

**Confirmed:** all arranged-employment/job-offer CRS points removed Mar 25 2025 (previously 50, or 200 for NOC TEER 0 group 00). **CRS job-offer points = 0 in 2026.** Don't add any job-offer input that awards CRS points.

### 2E. Recent 2026 EE draws (illustrative — pull live from canada.ca rounds page) [VERIFY]
| # | Date | Category | ITAs | Cut-off |
|---|---|---|---|---|
| 418 | May 28 | French | 4,500 | 409 |
| 417 | May 27 | CEC | 3,000 | 518 |
| 416 | May 25 | PNP | 334 | 805 |
| 408 | Apr 2 | Trades | 3,000 | 477 |
| 398 | Feb 20 | Healthcare & social services | 4,000 | 467 |
| 397 | Feb 19 | Physicians | 391 | 169 |
| 402 | Mar 5 | Senior Managers | 250 | 429 |

**2026 ranges:** CEC ~507–518 · PNP ~710–805 · French ~393–419 · Healthcare ~467 · Trades ~477 · Physicians ~169 · Senior Managers ~429. No general/all-program draws observed in 2026 (IRCC running program-specific + category draws). **[VERIFY] STEM dormant** (last STEM draw Apr 2024 — STEM flows via CEC). 2026 categories: French, Healthcare & social services, Trades, STEM, Education + new 2026 additions Senior Managers, Researchers, Transport, Skilled Military, Physicians. **[VERIFY] all categories now need 12 months qualifying experience (up from 6).**

---

## Developer flags
1. **AAIP grid is 100% official** — build directly from Part 1; section caps HC 69 / Econ 31 are exact.
2. **AAIP EE Stream = TWO scores** (federal CRS ≥300 AND competitive Worker EOI).
3. **CRS: enforce cap logic** (transferability hard cap 100; sub-combos cap 50). Naive sum overcounts.
4. **CRS job-offer points = 0** (removed Mar 25 2025).
5. **Do one manual pass vs live canada.ca CRS page** before shipping (esp. first-language aggregate cap 160/150 vs 136/128).
6. **Draw cut-offs time-sensitive** — pull from live IRCC rounds page + alberta.ca/aaip-processing-information on a schedule.

### Sources
- AAIP EOI grid PDF (official): https://www.alberta.ca/system/files/im-worker-stream-expression-of-interest-points-grid.pdf
- AAIP apply/fees: https://www.alberta.ca/how-to-apply-to-aaip-worker-streams · processing/draws: https://www.alberta.ca/aaip-processing-information · EE stream (min CRS 300): https://www.alberta.ca/aaip-alberta-express-entry-stream-eligibility
- CRS criteria (verify here): https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html
- EE rounds of invitations (live draws): https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html
