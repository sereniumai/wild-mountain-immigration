# Entity Assets — ready-to-deploy drafts

Built from confirmed data (Wild Mountain Immigration Inc · founded 2021 · service-area business, Cochrane AB · Nicola Wightman, RCIC #R706497, CICC). `[TO FINALIZE]` = fill at deploy (email, profile URLs, headshot, geo). Pairs with ENTITY-SETUP-PLAN.md.

---

## 1. Site-wide JSON-LD `@graph` (SAB version — no street address)
Place in the root layout / on the About page (entity home). All nodes cross-referenced by `@id`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://wildmountainimmigration.com/#org",
      "name": "Wild Mountain Immigration Inc",
      "alternateName": "Wild Mountain Immigration",
      "url": "https://wildmountainimmigration.com",
      "logo": { "@id": "https://wildmountainimmigration.com/#logo" },
      "image": { "@id": "https://wildmountainimmigration.com/#logo" },
      "slogan": "Stress-Free Canadian Immigration, Every Step of the Way",
      "foundingDate": "2021",
      "founder": { "@id": "https://wildmountainimmigration.com/#nicola" },
      "employee": { "@id": "https://wildmountainimmigration.com/#nicola" },
      "telephone": "+1-587-857-3692",
      "email": "[TO FINALIZE]",
      "priceRange": "$$",
      "knowsLanguage": "en",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cochrane",
        "addressRegion": "AB",
        "addressCountry": "CA"
      },
      "areaServed": [
        { "@type": "City", "name": "Cochrane" },
        { "@type": "City", "name": "Calgary" },
        { "@type": "City", "name": "Airdrie" },
        { "@type": "City", "name": "Canmore" },
        { "@type": "City", "name": "Banff" },
        { "@type": "AdministrativeArea", "name": "Alberta" },
        { "@type": "Country", "name": "Canada" }
      ],
      "knowsAbout": [
        "Express Entry", "Provincial Nominee Program",
        "Alberta Advantage Immigration Program", "Canadian permanent residence",
        "Spousal and family sponsorship", "Super Visa",
        "Labour Market Impact Assessment", "Work permits",
        "Post-Graduation Work Permit", "Study permits",
        "Canadian citizenship", "Visa refusals and reapplication",
        "Criminal inadmissibility", "Temporary Resident Permit"
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "College of Immigration and Citizenship Consultants",
        "alternateName": "CICC",
        "url": "https://college-ic.ca"
      },
      "sameAs": [
        "[TO FINALIZE — CICC public register listing URL]",
        "[TO FINALIZE — Google Business Profile URL]",
        "[TO FINALIZE — LinkedIn company page URL]",
        "[TO FINALIZE — Wikidata QID URL once created]",
        "[TO FINALIZE — Facebook]", "[TO FINALIZE — Instagram]", "[TO FINALIZE — YouTube]"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://wildmountainimmigration.com/#nicola",
      "name": "Nicola Wightman",
      "jobTitle": "Regulated Canadian Immigration Consultant (RCIC)",
      "worksFor": { "@id": "https://wildmountainimmigration.com/#org" },
      "url": "https://wildmountainimmigration.com/about/",
      "image": "[TO FINALIZE — headshot URL]",
      "nationality": { "@type": "Country", "name": "United Kingdom" },
      "description": "Founder and director of Wild Mountain Immigration; a Regulated Canadian Immigration Consultant and member in good standing of the CICC, with many years' experience in Canadian immigration law. A UK immigrant who navigated the Canadian immigration process herself.",
      "knowsAbout": [
        "Express Entry", "Provincial Nominee Program",
        "Alberta Advantage Immigration Program", "Family sponsorship",
        "Work permits", "Study permits", "Canadian citizenship",
        "Visa refusals", "Criminal inadmissibility"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "Regulated Canadian Immigration Consultant (RCIC)",
        "identifier": "R706497",
        "recognizedBy": {
          "@type": "Organization",
          "name": "College of Immigration and Citizenship Consultants",
          "url": "https://college-ic.ca"
        }
      },
      "sameAs": [
        "[TO FINALIZE — CICC register profile]",
        "[TO FINALIZE — Nicola's LinkedIn]"
      ]
    },
    {
      "@type": "ImageObject",
      "@id": "https://wildmountainimmigration.com/#logo",
      "url": "https://wildmountainimmigration.com/logo.png",
      "width": 512, "height": 512,
      "caption": "Wild Mountain Immigration"
    }
  ]
}
```
> Notes: SAB → no `streetAddress`/`geo` required; `areaServed` carries the locality signal. Add `aggregateRating`/`review` ONLY if real + visible on-page + consented (CICC). Add `floorLevel`/hours only if relevant. Validate in Rich Results Test.

---

## 2. Wikidata statements (create 2 items, cross-linked)

### Item A — Organization: "Wild Mountain Immigration"
| Property | Value |
|---|---|
| Label | Wild Mountain Immigration |
| Description | Canadian immigration consultancy based in Cochrane, Alberta |
| `instance of` (P31) | business (Q4830453) |
| `country` (P17) | Canada (Q16) |
| `headquarters location` (P159) | Cochrane (Q1104695) |
| `inception` (P571) | 2021 |
| `founded by` (P112) | Nicola Wightman (→ Item B) |
| `official website` (P856) | https://wildmountainimmigration.com |
| `industry` (P452) | immigration consulting |
| **References** (attach to statements) | CICC public register listing · Alberta corporate registry record · press feature (canmorealberta.com) |

### Item B — Person: "Nicola Wightman"
| Property | Value |
|---|---|
| Label | Nicola Wightman |
| Description | Regulated Canadian Immigration Consultant; founder of Wild Mountain Immigration |
| `instance of` (P31) | human (Q5) |
| `occupation` (P106) | immigration consultant |
| `employer` (P108) / `owner of` (P1830) | Wild Mountain Immigration (→ Item A) |
| `country of citizenship` (P27) | United Kingdom (Q145) |
| **References** | CICC public register (licence R706497) |

> After creating: add each item's QID URL to the site's `sameAs` arrays, and set each item's P856 to the website — bidirectional confirmation. Keep statements minimal + referenced so they survive notability review.

---

## 3. Platform bios (consistent across profiles)

**Google Business Profile description (≤750 chars):**
> Wild Mountain Immigration is a CICC-regulated Canadian immigration consultancy based in Cochrane, Alberta, led by founder and Regulated Canadian Immigration Consultant (RCIC #R706497) Nicola Wightman. We provide honest, stress-free help with Express Entry, the Alberta Advantage Immigration Program (AAIP), family sponsorship, Super Visas, work and study permits, and visa refusals — for clients across the Bow Valley, Calgary, all of Alberta, and remotely Canada-wide and internationally. Verify our standing on the CICC public register. Book a free consultation.

**LinkedIn company "About" (similar, professional):**
> Wild Mountain Immigration Inc — a CICC-regulated Canadian immigration consultancy founded in 2021, based in Cochrane, Alberta. Led by founder & director Nicola Wightman, RCIC #R706497. We guide individuals, families, and employers through Express Entry, the AAIP, family sponsorship, Super Visas, work and study permits, and refusal/reapplication cases — with honest, ethical, expert advice. Serving the Bow Valley, Calgary, and clients across Canada and abroad.

**Bing Places description:** use the GBP description (keep identical).

**Short bio (directories, ≤160 chars):**
> CICC-regulated Canadian immigration consultancy in Cochrane, AB. RCIC #R706497. Express Entry, AAIP, sponsorship, work/study permits. Free consultation.

**Nicola author bio (About page + LinkedIn personal):** use the full bio in ENTITY-SETUP-PLAN.md §10.

---

## 4. Canonical NAP string (byte-identical everywhere)
```
Wild Mountain Immigration
Cochrane, Alberta, Canada
+1 (587) 857-3692
https://wildmountainimmigration.com
```
(Service-area business — no street address displayed. Use this exact string on site footer, GBP, Bing Places, Wikidata, every directory.)
```
```
