# Entity / Knowledge-Graph Setup Plan — Wild Mountain Immigration

**Why this is priority #1:** In 2026, Google (Gemini/AI Overviews), ChatGPT, Perplexity, and Brave all attribute claims to **entities**, not URLs. If they can't resolve "Wild Mountain Immigration" and "Nicola Wightman, RCIC" to confident entities, we're invisible in AI answers and weaker in search — regardless of page quality. Pages with 15+ recognized entities show ~4.8× higher AI-citation probability; a recognized entity also earns a **"trust buffer"** (faster indexing + protection from algorithm volatility) — exactly what a recovering site needs. This is the highest-ROI, lowest-risk work we can do. It also fixes our biggest liability: NAP/entity confusion.

---

## 1. The two entities we're establishing
1. **Organization:** *Wild Mountain Immigration* (the firm)
2. **Person:** *Nicola Wightman* — Regulated Canadian Immigration Consultant (RCIC #R706497), the author/expertise entity behind all YMYL content.

Both must be described **identically everywhere** and cross-linked via `sameAs`. Consistency is the entire game — conflicting data fractures entity confidence.

---

## 2. Canonical Entity Record (single source of truth — use verbatim everywhere)
*Fill the [NEED] fields once, then copy-paste identically to the website, schema, Wikidata, GBP, Bing Places, LinkedIn, every directory.*

**Organization**
| Field | Value |
|---|---|
| Legal/registered name | **Wild Mountain Immigration Inc** |
| Display name | Wild Mountain Immigration |
| Website | https://wildmountainimmigration.com |
| Address (canonical) | **Service-area business — no public/visitable address.** Based in **Cochrane, Alberta, Canada**; serves clients remotely Canada-wide + internationally. → Hide street address on GBP/Bing Places; omit `streetAddress` in schema (use locality Cochrane + `areaServed`). |
| Phone | +1 (587) 857-3692 |
| Email | [NEED public business email] |
| Founded | **2021** |
| Founder / owner / director | **Nicola Wightman** (founder & director) |
| Industry | Immigration consultancy / regulated immigration consulting |
| Regulator | College of Immigration and Citizenship Consultants (CICC) |
| Area served | Cochrane, Bow Valley, Calgary, Airdrie, Canmore, Banff, Alberta, Canada (+ remote Canada-wide/international) |
| Tagline | Stress-Free Canadian Immigration, Every Step of the Way |
| `knowsAbout` topics | Express Entry · Provincial Nominee Program · Alberta Advantage Immigration Program · Canadian permanent residence · spousal & family sponsorship · Super Visa · LMIA / work permits · Post-Graduation Work Permit · study permits · Canadian citizenship · visa refusals & reapplication · criminal inadmissibility / TRP |

**Person — Nicola Wightman**
| Field | Value |
|---|---|
| Name | Nicola Wightman |
| Job title | Regulated Canadian Immigration Consultant (RCIC) |
| Credential / licence | **RCIC #R706497**, College of Immigration and Citizenship Consultants (CICC) |
| Works for | Wild Mountain Immigration |
| Based | Cochrane, Alberta, Canada |
| Expertise (`knowsAbout`) | same topic list as the firm |
| Nationality | Immigrant from the **United Kingdom** (personally navigated Canadian immigration) |
| Bio | Founder & director of Wild Mountain Immigration; member in good standing of the CICC (RCIC #R706497); many years' experience in Canadian immigration law; UK immigrant who went through the process herself; adventurer — 25+ countries, has climbed some of the world's tallest mountains. *(Full provided bio in §10.)* |
| Photo | [TO FINALIZE — professional headshot URL] |

---

## 3. The `sameAs` chain — every profile to create/claim + link (tiered)
The `sameAs` array is the **single most important entity signal** — it lets engines triangulate identity across trusted sources. Build these, keep NAP byte-identical, and list them all in the site's Organization/Person schema.

**Tier 1 — authority anchors (do first):**
- [ ] **CICC public register listing** (the RCIC authority anchor — highest trust; confirm Nicola's entry shows Cochrane + R706497) — get the exact profile URL.
- [ ] **Google Business Profile** (Cochrane; primary category "Immigration & naturalization service").
- [ ] **Bing Places** (import from GBP).
- [ ] **Wikidata QID** — org + person (see §4).
- [ ] **LinkedIn** — company page + Nicola's personal profile.

**Tier 2 — corroborating:**
- [ ] **Corporations Canada / Alberta corporate registry** record (business registration = strong trust reference).
- [ ] **Facebook** business page · **Instagram** · **YouTube** channel.
- [ ] **Crunchbase** company profile.
- [ ] Review presence: **Google reviews**, and (for ChatGPT trust proxies) **Trustpilot / ThreeBestRated**.

**Tier 3 — niche/local:**
- [ ] **RateMyImmigration** profile (RCIC-specific directory).
- [ ] Cochrane / Calgary **Chamber of Commerce** directory.
- [ ] Yelp.ca, YellowPages.ca, BBB.

Each profile must: use the canonical name + Cochrane NAP, link back to the website, and (where possible) link to the others.

---

## 4. Wikidata plan (cheapest highest-leverage move)
Wikidata feeds Google's Knowledge Graph and is heavily used by ChatGPT/Gemini. It has a lighter notability bar than Wikipedia, but items still need ≥1 credible external reference or they can be challenged/deleted — **we have them:** the **CICC public register** entry, the **business registration**, and existing press (e.g. the canmorealberta.com feature). Use those as references on the statements.

**Item 1 — Organization "Wild Mountain Immigration":**
- `instance of` (P31) → business / immigration consultancy
- `country` (P17) → Canada · `headquarters location` (P159) → Cochrane, Alberta
- `official website` (P856) → wildmountainimmigration.com
- `founded by` (P112) → Nicola Wightman · `inception` (P571) → [founding year]
- `industry` (P452) → immigration consulting
- references: CICC register, corporate registry, press feature.

**Item 2 — Person "Nicola Wightman":**
- `instance of` (P31) → human
- `occupation` (P106) → immigration consultant
- `employer` (P108) / `owner of` → Wild Mountain Immigration item
- `country of citizenship`/`residence` → Canada
- reference: CICC public register (licence R706497).
- Link the two items reciprocally (org `founded by` → person; person `employer` → org).

> After creating, add the **Wikidata QID** to the `sameAs` array on the site (and the items' P856 back to the site) — bidirectional confirmation.

---

## 5. Schema implementation (the site *declares* the entity)
Implement one site-wide `@graph` (entity home = About page) — this is the machine-readable version of the canonical record:
- **Organization/ProfessionalService** node (`@id`) with `name`, `url`, `logo`, `address`, `telephone`, `areaServed`, **`knowsAbout`** (the topic list), `founder`→Person, and **`sameAs`** = the full Tier-1/2 list incl. Wikidata QID + CICC register.
- **LocalBusiness** node — Cochrane NAP identical to GBP.
- **Person (Nicola)** node — `hasCredential` (Schema.org `Credential` class: RCIC licence, `recognizedBy` CICC), `worksFor`→Org `@id`, `knowsAbout`, `sameAs` (CICC register + LinkedIn).
- Every Article's `author`→Person `@id`, `publisher`→Org `@id`.

*(I can write this exact JSON-LD when we build — it's in the design/technical specs.)*

---

## 6. NAP / consistency rules (non-negotiable)
- **Cochrane is canonical.** Update every lingering **Canmore** reference (old listings, citations, the live site footer, CICC register if still Canmore) to the Cochrane address.
- Name, address, phone **byte-identical** across website, schema, GBP, Bing Places, Wikidata, and every directory. One canonical string.
- Quarterly NAP audit.

---

## 7. Measurement (is it working?)
- **Brand SERP:** Google "Wild Mountain Immigration" — does a Knowledge Panel appear? (Goal: yes, with correct info pulled from our entity.)
- **Entity recognition:** check the Google Knowledge Graph / "people also search for"; Bing entity card.
- **AI citation:** run the fixed prompt set (e.g. "best immigration consultant Cochrane", "is Wild Mountain Immigration legit", "what is a good CRS score 2026") across ChatGPT/Perplexity/Gemini/Google AIO monthly — are we named with correct facts?
- **GBP/Bing Places insights** + GSC/BWT brand-query impressions.

---

## 8. Ordered action sequence
1. Lock the **Canonical Entity Record** (§2) — fill the [NEED] fields.
2. **Fix NAP → Cochrane** everywhere (incl. CICC register + live site).
3. Claim/optimize **GBP** + **Bing Places** (Cochrane).
4. Create/clean **LinkedIn** (company + Nicola), Facebook, YouTube.
5. Create **Wikidata** items (org + person) with references.
6. Ship the **Organization + Person + LocalBusiness schema** on the site with full `sameAs`.
7. Build **Tier-2/3 citations** (corporate registry, Crunchbase, RateMyImmigration, chambers, Yelp/YP/BBB) — quality + consistency over volume.
8. Start the **review velocity** drip (Google + Trustpilot/ThreeBestRated) — fuels Bing/ChatGPT "popularity."
9. Stand up **monthly entity/AI-visibility tracking** (§7).

---

## 9. ✅ Confirmed vs ⏳ Finalize-later checklist
**Confirmed:** legal name (Wild Mountain Immigration Inc) · service-area business, Cochrane AB (no public address) · founded 2021 · founder/director Nicola Wightman · Nicola bio + UK-immigrant angle · RCIC #R706497 / CICC · phone (587) 857-3692 · tagline · knowsAbout topics.

**⏳ Finalize later (slot into the build checklist — don't block on these):**
- [ ] Public business **email**
- [ ] Professional **headshot** of Nicola (URL)
- [ ] Existing **profile URLs** to link (don't duplicate): LinkedIn (company + Nicola), GBP, CICC register profile, Facebook, Instagram, YouTube
- [ ] Confirm **CICC register** entry shows **Cochrane** (update if still Canmore)
- [ ] **Alberta corporate registry** record URL (for Wikidata reference)
- [ ] Approx. **geo coordinates** for Cochrane service area (optional for schema)

These are placeholders in the draft assets (§10–11) and get filled at deploy.

## 10. Nicola Wightman — full bio (for About page, LinkedIn, GBP, Person schema `description`)
> Our team of experienced and knowledgeable immigration consultants is led by our founder and director, Nicola Wightman. Nicola brings many years of experience in Canadian immigration law to our firm and is a member in good standing of the College of Immigration and Citizenship Consultants (CICC). She possesses a profound understanding of the Canadian immigration system and is committed to delivering high-quality and ethical immigration services to our clients.
>
> Beyond her expertise in immigration law, Nicola harbors a passion for adventure, having traveled to over 25 countries and climbed some of the world's tallest mountains. As an immigrant from the UK, Nicola has personally navigated the Canadian immigration process, giving her a firsthand understanding of the challenges and opportunities that come with immigrating to Canada.

*(Draft schema `@graph` + Wikidata statements + platform bios are in `ENTITY-ASSETS-DRAFT.md`.)*
