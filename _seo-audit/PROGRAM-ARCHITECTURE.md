# Wild Mountain Immigration — Master Program Architecture & Build Sitemap

**The complete, current (May 2026) map of every Canadian immigration program, broken into categories, with the exact pages to build.** Based on deep research of IRCC (canada.ca) + all 11 provincial/territorial PNP sites + Quebec. Every program is tagged with build status and priority.

**Legend**
- **Status:** `LIVE` = open program, build a full lead-gen page · `INFO` = closed/paused program, build a short informational page with a status banner (keeps search traffic, no false "apply now") · `FORTHCOMING` = rules changing/not yet published, build a news/stub page.
- **Priority:** `P1` = build first (money, home-province Alberta, highest intent/traffic) · `P2` = second wave · `P3` = long-tail depth.
- Home base = **Cochrane, Alberta** (+ Calgary / Canmore / Alberta) — local SEO is built around this.

---

## TOP-LEVEL NAVIGATION (8 categories)

```
1. Immigrate (PR)      → Express Entry · PNP · Family · Regional/Pilots · Business   (NO Quebec)
2. Work                → Work permits (LMIA, IMP, IEC, PGWP, BOWP, Spousal OWP, ICT, Francophone Mobility)
3. Study               → Study permit · PGWP · Working while studying
4. Visit               → Visitor visa (TRV) · eTA · Extend stay · Super Visa
5. Citizenship & PR    → Citizenship (grant, test, descent) · PR card · PRTD · Residency obligation
6. Refused / Complex   → Inadmissibility · Criminal rehab/TRP/ARC · Refusals & reapplication · PFL response · GCMS notes · H&C · Restore status  (PREMIUM, RCIC-scope only — no IRB/court representation)
7. Move to Canada      → 20 country pages + 6 city relocation guides  (prospect engine)
8. Tools & Resources   → CRS/CLB calculators · guides · FAQs · insights
9. About / Fees / Contact / Book a Consultation
```

---

## 1. IMMIGRATE — Permanent Residence

### 1A. Express Entry — P1 (flagship)
| Page | Slug | Status |
|---|---|---|
| Express Entry (pillar) | `/immigrate/express-entry/` | LIVE |
| Federal Skilled Worker (FSW) | `/immigrate/express-entry/federal-skilled-worker/` | LIVE |
| Federal Skilled Trades (FST) | `/immigrate/express-entry/federal-skilled-trades/` | LIVE |
| Canadian Experience Class (CEC) | `/immigrate/express-entry/canadian-experience-class/` | LIVE |
| Category-Based Draws (healthcare, trades, education, French) | `/immigrate/express-entry/category-based-draws/` | LIVE |
| *(Note: CRS no longer awards job-offer/LMIA points — removed 2025)* | | |

### 1B. Provincial Nominee Programs (PNP) — the national coverage you asked for
**Hub:** `/immigrate/provincial-nominee-program/` — P1 (explains enhanced vs base, +600 CRS, links every province)

> **enhanced** = Express-Entry-aligned (nomination adds +600 CRS) · **base** = paper nomination, separate IRCC application.

#### Alberta — AAIP (HOME PROVINCE — full depth, P1)
| Page | Slug | Status |
|---|---|---|
| AAIP hub | `/immigrate/provincial-nominee-program/alberta/` | LIVE |
| Alberta Opportunity Stream (base) | `.../alberta/opportunity-stream/` | LIVE |
| Alberta Express Entry Stream (enhanced) | `.../alberta/express-entry-stream/` | LIVE |
| Rural Renewal Stream | `.../alberta/rural-renewal-stream/` | LIVE |
| Tourism & Hospitality Stream | `.../alberta/tourism-hospitality-stream/` | LIVE |
| Rural Entrepreneur Stream | `.../alberta/rural-entrepreneur-stream/` | LIVE |
| Graduate Entrepreneur Stream | `.../alberta/graduate-entrepreneur-stream/` | LIVE |
| Foreign Graduate Entrepreneur Stream | `.../alberta/foreign-graduate-entrepreneur-stream/` | LIVE |
| Farm Stream | `.../alberta/farm-stream/` | LIVE |
| *(Family Connection + Occupation-in-Demand pathway discontinued Mar 2025 — omit)* | | |

#### British Columbia — BC PNP (P1)
| Page | Slug | Status |
|---|---|---|
| BC PNP hub | `.../british-columbia/` | LIVE |
| Skilled Worker (+ Express Entry BC) | `.../british-columbia/skilled-worker/` | LIVE |
| Health Authority | `.../british-columbia/health-authority/` | LIVE |
| Entrepreneur Immigration (Base / Regional / Strategic) | `.../british-columbia/entrepreneur-immigration/` | LIVE |
| International Graduate (closed 2025) | `.../british-columbia/international-graduate/` | INFO |

#### Saskatchewan — SINP (P2)
| Page | Slug | Status |
|---|---|---|
| SINP hub | `.../saskatchewan/` | LIVE |
| International Skilled Worker – Employment Offer | `.../saskatchewan/international-skilled-worker/` | LIVE |
| Health Talent Pathway | `.../saskatchewan/health-talent-pathway/` | LIVE |
| Tech Talent Pathway | `.../saskatchewan/tech-talent-pathway/` | LIVE |
| Agriculture Talent Pathway | `.../saskatchewan/agriculture-talent-pathway/` | LIVE |
| Student Pathway | `.../saskatchewan/student-pathway/` | LIVE |
| Entrepreneur / Farm | `.../saskatchewan/entrepreneur/`, `.../farm-owner-operator/` | LIVE |

#### Manitoba — MPNP (P2)
| Page | Slug | Status |
|---|---|---|
| MPNP hub | `.../manitoba/` | LIVE |
| Skilled Worker in Manitoba | `.../manitoba/skilled-worker-in-manitoba/` | LIVE |
| Skilled Worker Overseas | `.../manitoba/skilled-worker-overseas/` | LIVE |
| International Education Stream | `.../manitoba/international-education-stream/` | LIVE |
| Business Investor Stream | `.../manitoba/business-investor-stream/` | LIVE |

#### Ontario — OINP (P2) ⚠️ redesigned May 30 2026
| Page | Slug | Status |
|---|---|---|
| OINP hub | `.../ontario/` | LIVE |
| 2026 OINP Redesign (news hub) | `.../ontario/2026-redesign/` | FORTHCOMING |
| Employer Job Offer (merged stream) | `.../ontario/employer-job-offer/` | FORTHCOMING |
| Human Capital Priorities (enhanced) | `.../ontario/human-capital-priorities/` | FORTHCOMING |
| French-Speaking Skilled Worker | `.../ontario/french-speaking-skilled-worker/` | FORTHCOMING |
| Masters / PhD Graduate | `.../ontario/masters-graduate/`, `.../phd-graduate/` | FORTHCOMING |
| Entrepreneur | `.../ontario/entrepreneur/` | FORTHCOMING |
| *(Label all as forthcoming until ON publishes new rules; keep a living news hub)* | | |

#### Atlantic PNPs — PEI / NS / NB / NL (P2/P3)
| Province | Hub slug | Key streams |
|---|---|---|
| Prince Edward Island (PEI PNP) | `.../prince-edward-island/` | express-entry, skilled-worker, critical-worker, international-graduate, work-permit-entrepreneur |
| Nova Scotia (NSNP) — consolidated to 4 streams 2026 | `.../nova-scotia/` | express-entry, skilled-worker, entrepreneur, international-graduate-entrepreneur |
| New Brunswick (NBPNP/INB) — NB AIP paused | `.../new-brunswick/` | express-entry, skilled-worker, strategic-initiative, business, critical-worker-pilot, private-career-college-graduate-pilot |
| Newfoundland & Labrador (NLPNP) — $0 fees | `.../newfoundland-and-labrador/` | express-entry-skilled-worker, skilled-worker, international-graduate, priority-skills, entrepreneur, graduate-entrepreneur |

#### Territories — Yukon / NWT (P3)
| Territory | Hub slug | Key streams |
|---|---|---|
| Yukon (YNP) | `.../yukon/` | skilled-worker, critical-impact-worker, express-entry, community-program, business-nominee |
| Northwest Territories (NTNP) | `.../northwest-territories/` | employer-driven-skilled-worker, entry-level-semi-skilled, express-entry, business, francophone |

> **Full per-province stream tables, eligibility, 2026 changes, pages-to-build and expert content notes for all 11 PNPs are in `PNP-DEEP-DIVE.md`.** ~58 PNP pages total.

### 1C. Quebec — NOT OFFERED
**We do not do Quebec immigration** (Quebec runs its own CSQ/Arrima/PSTQ system under the Canada-Québec Accord). No Quebec pages are built. If Quebec-intent traffic arrives, route to a short "We don't handle Quebec — here's who does" note, not a service page.

### 1D. Family Sponsorship — P1 (spousal is a top earner)
**Hub:** `/immigrate/family-sponsorship/`
| Page | Slug | Status |
|---|---|---|
| Spousal / Common-Law / Conjugal Sponsorship | `/immigrate/family-sponsorship/spousal-sponsorship/` | LIVE (P1) |
| → Lonely Canadian / last-remaining-relative | `/immigrate/family-sponsorship/lonely-canadian-program/` | LIVE (P1 — owns 292-click query) |
| Dependent Children | `/immigrate/family-sponsorship/dependent-children/` | LIVE |
| Parents & Grandparents (PGP) | `/immigrate/family-sponsorship/parents-grandparents/` | INFO (no new 2026 intake — steer to Super Visa) |
| Super Visa | `/visit/super-visa/` (cross-linked) | LIVE (P1) |
| Other Relatives | `/immigrate/family-sponsorship/other-relatives/` | LIVE |
| Adoption | `/immigrate/family-sponsorship/adoption/` | LIVE (P3) |
| Financial requirements / undertaking | `/immigrate/family-sponsorship/financial-requirements/` | LIVE (P3) |

### 1E. Regional & Pilot Programs — P2
**Hub:** `/immigrate/regional-pilots/`
| Page | Slug | Status |
|---|---|---|
| Atlantic Immigration Program (AIP) | `/immigrate/atlantic-immigration-program/` | LIVE (banner: NB paused) |
| Rural Community Immigration Pilot (RCIP) | `/immigrate/rural-community-immigration-pilot/` | LIVE |
| Francophone Community Immigration Pilot (FCIP) | `/immigrate/francophone-community-immigration-pilot/` | LIVE |
| Agri-Food Pilot | `/immigrate/agri-food-pilot/` | INFO (closed May 2025) |
| Home Care Worker Pilots | `/immigrate/home-care-worker-pilots/` | INFO (paused, not returning 2026 — waitlist capture) |
| Economic Mobility Pathways Pilot (EMPP) | `/immigrate/economic-mobility-pathways-pilot/` | INFO (closed Dec 2025) |

### 1F. Business Immigration — P3
**Hub:** `/immigrate/business-immigration/`
| Page | Slug | Status |
|---|---|---|
| Start-Up Visa (SUV) | `/immigrate/business-immigration/start-up-visa/` | INFO/CAUTION (intake paused — flag) |
| Self-Employed Persons | `/immigrate/business-immigration/self-employed/` | INFO (paused to end-2026) |

---

## 2. WORK — Work Permits — P1/P2
**Hub:** `/work/`
| Page | Slug | Status |
|---|---|---|
| LMIA Work Permit (TFWP) | `/work/lmia/` | LIVE (P1) |
| → Low-Wage LMIA | `/work/lmia/low-wage/` | LIVE |
| → High-Wage LMIA | `/work/lmia/high-wage/` | LIVE |
| → LMIA PR Stream | `/work/lmia/permanent-resident-stream/` | LIVE |
| → Agricultural Stream | `/work/lmia/agricultural-stream/` | LIVE |
| LMIA-Exempt / International Mobility Program (IMP) | `/work/lmia-exempt-international-mobility-program/` | LIVE |
| International Experience Canada (IEC) / Working Holiday | `/work/international-experience-canada/` | LIVE |
| Post-Graduation Work Permit (PGWP) | `/work/post-graduation-work-permit/` | LIVE (P1) |
| Bridging Open Work Permit (BOWP) | `/work/bridging-open-work-permit/` | LIVE |
| Spousal / Family Open Work Permit | `/work/spousal-open-work-permit/` | LIVE (flag Jan 2025 restrictions) |
| Intra-Company Transfers (ICT) | `/work/intra-company-transfer/` | LIVE |
| Francophone Mobility | `/work/francophone-mobility/` | LIVE (P3) |

---

## 3. STUDY — P2
**Hub:** `/study/`
| Page | Slug | Status |
|---|---|---|
| Study Permit (incl. PAL/TAL, financial proof) | `/study/study-permit/` | LIVE |
| Post-Graduation Work Permit (cross-link to /work/) | `/work/post-graduation-work-permit/` | LIVE |
| Working While Studying (24 hrs/wk) | `/study/working-while-studying/` | LIVE |
| Student Direct Stream (ended Nov 2024) | `/study/student-direct-stream/` | INFO |

---

## 4. VISIT — P2
**Hub:** `/visit/`
| Page | Slug | Status |
|---|---|---|
| Visitor Visa (TRV) | `/visit/visitor-visa/` | LIVE |
| eTA (Electronic Travel Authorization) | `/visit/eta/` | LIVE |
| Extend Your Stay (Visitor Record) | `/visit/extend-your-stay/` | LIVE |
| Super Visa (Parents & Grandparents) | `/visit/super-visa/` | LIVE (P1) |
| Tourist Visa (alias/redirect → visitor visa) | `/visit/tourist-visa/` | LIVE |

---

## 5. CITIZENSHIP & PR STATUS — P2
**Citizenship hub:** `/citizenship/`
| Page | Slug | Status |
|---|---|---|
| Canadian Citizenship (grant / eligibility / how to apply) | `/citizenship/` | LIVE |
| Citizenship Test (Discover Canada) | `/citizenship/citizenship-test/` | LIVE |
| Citizenship by Descent (Bill C-3 / Lost Canadians) | `/citizenship/citizenship-by-descent/` | LIVE (P2 — high 2026 demand) |
| Proof of Citizenship (Certificate) | `/citizenship/proof-of-citizenship/` | LIVE |
| Dual Citizenship | `/citizenship/dual-citizenship/` | LIVE |
| Adopted Children | `/citizenship/adopted-children/` | LIVE (P3) |

**PR status hub:** `/permanent-residence/`
| Page | Slug | Status |
|---|---|---|
| PR Card Renewal | `/permanent-residence/pr-card-renewal/` | LIVE |
| PR Travel Document (PRTD) | `/permanent-residence/pr-travel-document/` | LIVE |
| Residency Obligation (730 days) — informational | `/permanent-residence/residency-obligation/` | LIVE |

---

## 5B. REFUSED / COMPLEX CASES — Inadmissibility & Refusals (within RCIC scope) — P1 (PREMIUM, high-converting)

> These searchers are post-refusal, on a hard legal clock (15/30/60/90 days), high willingness-to-pay. Every page: statute-cited, deadline-prominent CTA, "facts current as of [date]", Code-compliant (no "guaranteed" claims). Full legal detail in `LEGAL-FRAMEWORK-REFERENCE.md`.
>
> **SCOPE — CONFIRMED 2026-05-30:** Nicola Wightman is a **standard RCIC** (not RCIC-IRB). Per IRPA s.91, a standard RCIC **cannot represent clients at the IRB (IAD/RPD/RAD) or at the Federal Court.** Therefore **all IRB appeal pages and Federal Court / litigation pages are REMOVED** from our build. We keep only work squarely within RCIC scope: **inadmissibility applications (TRP, ARC, criminal rehab), refused-application reapplications, reconsideration requests, PFL responses, GCMS notes, H&C applications, and status restoration** — all paper applications made *to IRCC/CBSA*, not tribunal/court representation. We never imply we represent at the IAD, RAD, RPD, or Federal Court.

### Inadmissibility (`/inadmissibility/`)
| Page | Slug | Primary keyword |
|---|---|---|
| Inadmissibility hub | `/inadmissibility/` | inadmissible to Canada |
| Criminal inadmissibility | `/inadmissibility/criminal-inadmissibility/` | criminal inadmissibility Canada |
| Criminal rehabilitation | `/inadmissibility/criminal-rehabilitation/` | criminal rehabilitation Canada |
| Deemed rehabilitation | `/inadmissibility/deemed-rehabilitation/` | deemed rehabilitation Canada |
| Temporary Resident Permit (TRP) | `/inadmissibility/trp/` | temporary resident permit Canada |
| **DUI / entry to Canada** | `/inadmissibility/dui-entry-to-canada/` | DUI entry to Canada (huge US volume) |
| Medical inadmissibility | `/inadmissibility/medical-inadmissibility/` | medical inadmissibility excessive demand |
| Misrepresentation | `/inadmissibility/misrepresentation/` | misrepresentation Canada immigration |
| Authorization to Return (ARC) | `/inadmissibility/authorization-to-return/` | authorization to return to Canada |
| Record suspension / pardon | `/inadmissibility/record-suspension/` | record suspension Canada immigration |

### Refusals (`/refusals/`)
| Page | Slug | Primary keyword |
|---|---|---|
| Refused study permit | `/refusals/refused-study-permit/` | study permit refused Canada |
| Refused work permit | `/refusals/refused-work-permit/` | work permit refused Canada |
| Refused visitor visa | `/refusals/refused-visitor-visa/` | visitor visa refused (TRV) |
| Reconsideration request | `/refusals/reconsideration-request/` | reconsideration request IRCC |
| Procedural fairness letter response | `/refusals/procedural-fairness-letter/` | procedural fairness letter IRCC |
| GCMS notes / ATIP | `/refusals/gcms-notes/` | GCMS notes / ATIP refusal |

### Status & H&C (`/status/`) — RCIC-scope paper applications to IRCC only
| Page | Slug | Primary keyword |
|---|---|---|
| Humanitarian & Compassionate (H&C) | `/humanitarian-compassionate/` | humanitarian and compassionate application |
| Restore status | `/status/restore-status/` | restore status Canada |
| Maintained status | `/status/maintained-status/` | maintained status Canada |

> **REMOVED (out of RCIC scope — IRB/Federal Court representation):** sponsorship appeal (IAD), residency-obligation appeal (IAD), removal-order appeal (IAD), Federal Court judicial review, stay of removal. We do not build or offer these as services. If a searcher needs them, the page (if any) is a brief informational explainer that refers them to a lawyer or RCIC-IRB — never an offer to represent.

### Trust / compliance (CICC-required — also strong SEO)
| Page | Slug | Primary keyword |
|---|---|---|
| RCIC credentials (Nicola Wightman R706497) | `/about/rcic-credentials/` | what is an RCIC |
| How to verify an immigration consultant | `/how-to-verify-an-immigration-consultant/` | how to verify immigration consultant (1,084 legacy clicks) |
| Authorized representative (IMM 5476 vs 5475) | `/authorized-representative/` | use of a representative immigration |

*~30 premium legal pages. These convert far above informational traffic — searchers have a problem and a deadline.*

---

## 6. MOVE TO CANADA — Prospect engine — P2
**Hub:** `/move-to-canada/`
- **20 country pages:** `/move-to-canada/from-{uk, ireland, australia, new-zealand, germany, france, netherlands, sweden, norway, denmark, belgium, switzerland, italy, spain, portugal, greece, poland, usa, mexico, japan}/`
- **6 city relocation guides:** `/move-to-canada/{cochrane, calgary, vancouver, toronto, edmonton, canmore}/`

---

## 7. LOCAL SERVICE PAGES — P1 (home turf) — UPDATED 2026-05-30

**Business now based in Cochrane (moved from Canmore).** Stay within a believable service radius: Cochrane + Calgary metro + Bow Valley corridor. ~8 genuinely-substantive city pages, not a thin page for every town.

| Page | Slug | Tier / note |
|---|---|---|
| **Home (`/`) = Cochrane-anchored** | `/` | Homepage geo-targets "immigration consultant Cochrane / Bow Valley" (NAP, LocalBusiness schema, Cochrane in title/H1) |
| Immigration Consultant Cochrane | `/immigration-consultant-cochrane/` | T1 — exact-match local money page (complements the homepage) |
| Immigration Consultant Calgary | `/immigration-consultant-calgary/` | T1 — biggest volume; Calgary energy/tech EE angle |
| Immigration Consultant Alberta (provincial hub) | `/alberta-immigration-consultant/` | T1 — province-wide "RCIC Alberta"; links down to all city pages |
| Immigration Consultant Airdrie | `/immigration-consultant-airdrie/` | T2 — commuter city, weak competition |
| Immigration Consultant Canmore | `/immigration-consultant-canmore/` | T2 — original base; tourism/hospitality LMIA angle |
| Immigration Consultant Banff | `/immigration-consultant-banff/` | T2 — tourism-worker hub, low competition |
| Immigration Consultant Okotoks | `/immigration-consultant-okotoks/` | T3 — Calgary commuter ring (add after T1/T2) |
| Immigration Consultant Chestermere | `/immigration-consultant-chestermere/` | T3 — Calgary commuter ring (add after T1/T2) |
| Bow Valley (regional) | `/bow-valley-immigration/` | T3 — Cochrane+Canmore+Banff+Kananaskis as one concept |

> **REMOVED (off-area — 301-redirect the old pages to the Alberta hub / relevant program page):** Vancouver, Toronto, **and Edmonton** (in-province but no presence, strong local competition, 3-hr drive — province-wide intent is handled by the Alberta hub). An RCIC serves these clients Canada-wide via **program/service intent + the AAIP pillar**, not via thin local-pack pages.
>
> **Cochrane "as homepage":** the Home page (`/`) is geo-anchored to Cochrane AND a dedicated `/immigration-consultant-cochrane/` page captures the exact-match query. Both are planned (confirmed by client).

---

## 8. TOOLS, KNOWLEDGE & CORE
| Page | Slug | Priority |
|---|---|---|
| CRS Calculator (744k impressions) | `/tools/crs-calculator/` | P1 |
| CLB Calculator | `/tools/clb-calculator/` | P2 |
| Express Entry Guide (gated PDF) | `/tools/express-entry-guide/` | P2 |
| NOC / TEER reference | `/resources/noc-teer/` | P3 |
| Language Tests & CLB | `/resources/language-tests-clb/` | P3 |
| Educational Credential Assessment (ECA) | `/resources/educational-credential-assessment/` | P3 |
| Proof of Funds | `/resources/proof-of-funds/` | P3 |
| Guides hub | `/guides/` + ~10 evergreen guides | P3 |
| FAQ hub | `/faqs/` + 25 high-intent FAQs | P3 |
| Insights (lean blog) | `/insights/` | P3 |
| Home · About · Fees · Contact · Consultation (+File Mgmt/Review) | `/`, `/about/`, `/fees/`, `/contact/`, `/consultation/` | P1 |

---

## Build totals & phasing

| Category | Pages |
|---|---|
| Express Entry | 5 |
| PNP (hub + 11 provinces + streams) | ~58 |
| Family sponsorship | 8 |
| Regional & pilots | 7 |
| Business immigration | 3 |
| Work permits | 12 |
| Study | 4 |
| Visit | 5 |
| Citizenship & PR status | 10 |
| **Refused/Complex (inadmissibility, refusals/reapplication, PFL, GCMS, H&C, status, trust — RCIC scope, no IRB/court)** | **~24 (PREMIUM)** |
| Move to Canada (countries + cities) | 27 |
| Local service | 6 |
| Tools & reference | 7 |
| Knowledge (hubs + 25 FAQs + guides) | ~40 |
| Core/conversion | 7 |
| **TOTAL** | **~230 pages** (Quebec removed; legal cluster added) |

**Phased build (so it's not overwhelming):**
- **Phase 1 (P1, ~40 pages):** Home (Cochrane-anchored) + core + 6 local service + Express Entry cluster + AAIP (Alberta) full + Family spousal + Super Visa + LMIA + PGWP + CRS + AAIP calculators + **trust pages (RCIC credentials / verify-consultant)**. *(Refused / Complex legal cluster moved to Phase 2 per client, 2026-05-30.)*
- **Phase 2 (P2, ~100 pages):** All other PNP provinces + work/study/visit permits + citizenship & PR status + **the full Refused/Complex legal cluster (inadmissibility, criminal rehab, TRP, DUI, refusals/reapplication, PFL, GCMS, H&C, status — RCIC scope)** + 20 country pages + 6 city guides + regional pilots.
- **Phase 3 (P3, ~85 pages):** Long-tail PNP streams, business immigration, reference pages, 25 FAQs, guides, INFO pages for closed programs.

> Factual detail for every program is in **`IRCC-CONTENT-REFERENCE.md`** + **`PNP-DEEP-DIVE.md`** (all 11 PNPs) + **`LEGAL-FRAMEWORK-REFERENCE.md`** (IRPA/IRPR, CRS tables, inadmissibility, ethics) + **`IRPA-DEEP-REFERENCE.md`** + **`IRPR-DEEP-REFERENCE.md`** — the writer's sources of truth. **No Quebec** (business decision). **No IRB/Federal Court representation** (standard RCIC scope).
