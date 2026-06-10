/* ============================================================================
   Eligibility engine. Maps a completed questionnaire to the programs a person
   MAY be eligible for. Deliberately conservative and hedged: it is an AI-assisted
   guide, never a decision, and it never guarantees an outcome (CICC rules).

   Rules reflect current public IRCC + provincial criteria (2026). Where a rule
   changes often, the result wording points the user to a consultation rather
   than asserting certainty. Quebec is never recommended.
============================================================================ */
import { type Answers, type PathId, val, arr, PROVINCE_NAME } from "./config";
import { POLICY } from "./constants";
import { EU, CUSMA, IEC, countryName } from "./countries";

export type Tier = "strong" | "possible" | "note";
export type ResultItem = { key: string; title: string; tier: Tier; why: string; href?: string };
export type ResultGroup = { heading: string; items: ResultItem[] };
export type EvalResult = {
  headline: string;
  intro: string;
  groups: ResultGroup[];
  provinceNote?: string;
  flags: string[];
};

const clb = (band: string): number => ({ none: 0, clb4: 4, clb6: 6, clb7: 7, clb9: 9 }[band] ?? 0);

function provinceLabel(code: string): string {
  if (!code || code === "unsure") return "several provinces outside Quebec";
  return PROVINCE_NAME[code] ?? "your chosen province";
}

/* small builder so each evaluator just pushes into named groups */
class Groups {
  private map = new Map<string, ResultItem[]>();
  add(heading: string, item: ResultItem) {
    if (!this.map.has(heading)) this.map.set(heading, []);
    // de-dupe by key within a group
    const list = this.map.get(heading)!;
    if (!list.some((i) => i.key === item.key)) list.push(item);
  }
  build(order: string[]): ResultGroup[] {
    const out: ResultGroup[] = [];
    for (const h of order) {
      const items = this.map.get(h);
      if (items && items.length) {
        // strong first, then possible, then notes
        items.sort((a, b) => rank(a.tier) - rank(b.tier));
        out.push({ heading: h, items });
      }
    }
    return out;
  }
  get count() {
    let n = 0;
    for (const items of this.map.values()) n += items.length;
    return n;
  }
}
const rank = (t: Tier) => (t === "strong" ? 0 : t === "possible" ? 1 : 2);

const PR = "Permanent residence";
const WORK = "Work permits";
const FAM = "Family sponsorship";
const BIZ = "Business immigration";
const STUDY = "Study in Canada";

/* ===================================================================== IMMIGRATE */
function evalImmigrate(a: Answers): EvalResult {
  const g = new Groups();
  const flags: string[] = [];
  const eng = clb(val(a, "english"));
  const fr = clb(val(a, "french"));
  const skill = val(a, "skillLevel");
  const skilled = skill === "teer01" || skill === "teer23";
  const years = val(a, "expYears");
  const hasExp = ["1-3", "4-5", "6+"].includes(years);
  const someExp = hasExp || years === "lt1";
  const where = val(a, "expWhere");
  const expCanada = someExp && (where === "canada" || where === "both");
  const expAbroad = someExp && (where === "abroad" || where === "both");
  const edu = val(a, "education");
  const degree = ["bachelor", "master", "doctorate"].includes(edu);
  const postSec = degree || ["one-year", "two-year"].includes(edu) || skill === "teer23";
  const young = ["18-29", "30-34", "35-44"].includes(val(a, "age"));
  const province = val(a, "province");
  const linkProv = val(a, "provinceLink") === "yes" ? val(a, "provinceLinkWhich") : "";
  const offer = val(a, "jobOffer");
  const nominated = val(a, "nomination") === "yes";

  // Canadian Experience Class
  if (expCanada && hasExp && ((skill === "teer01" && eng >= 7) || (skill === "teer23" && eng >= 5))) {
    g.add(PR, { key: "cec", title: "Express Entry, Canadian Experience Class", tier: "strong",
      why: "You have skilled Canadian work experience and the language to match, the heart of a CEC profile.",
      href: "/express-entry/canadian-experience-class" });
  } else if (expCanada && skilled && eng >= 6) {
    g.add(PR, { key: "cec", title: "Express Entry, Canadian Experience Class", tier: "possible",
      why: "You have Canadian experience; lifting your language scores would strengthen a CEC profile.",
      href: "/express-entry/canadian-experience-class" });
  }

  // Federal Skilled Worker
  if (hasExp && skilled && eng >= 7 && postSec) {
    g.add(PR, { key: "fsw", title: "Express Entry, Federal Skilled Worker", tier: degree && young ? "strong" : "possible",
      why: "A year or more of skilled work, strong language and post-secondary study are the basis of an FSW profile.",
      href: "/express-entry/federal-skilled-worker" });
  } else if (someExp && skilled && eng >= 6 && postSec) {
    g.add(PR, { key: "fsw", title: "Express Entry, Federal Skilled Worker", tier: "possible",
      why: "You have the building blocks for Federal Skilled Worker; the 67-point grid and language would decide it.",
      href: "/express-entry/federal-skilled-worker" });
  }

  // Federal Skilled Trades
  if (skill === "teer23" && hasExp && (offer === "offer" || val(a, "tradeCert") === "yes") && eng >= 4) {
    g.add(PR, { key: "fst", title: "Express Entry, Federal Skilled Trades", tier: (val(a, "tradeCert") === "yes" || offer === "offer") && eng >= 5 ? "strong" : "possible",
      why: "Skilled-trade experience plus a job offer or a certificate of qualification can open Federal Skilled Trades.",
      href: "/express-entry/federal-skilled-trades" });
  }

  // Provincial Nominee Programs (province-level)
  if (skilled && (eng >= 5 || fr >= 5)) {
    const strong = nominated || offer === "offer" || linkProv !== "" || expCanada;
    const focusProv = linkProv || province;
    g.add(PR, { key: "pnp", title: nominated ? "Provincial nomination, complete your PR" : "Provincial Nominee Programs", tier: strong ? "strong" : "possible",
      why: nominated
        ? "With a nomination, a +600 CRS boost puts permanent residence within close reach."
        : linkProv
          ? `Your study or work ties to ${provinceLabel(linkProv)} can open that province's nominee program, often a realistic route to PR.`
          : `Provinces nominate skilled workers directly, often a realistic route to ${provinceLabel(province)}.`,
      href: focusProv === "AB" ? "/alberta-immigration" : "/pnp" });
  }

  // Atlantic Immigration Program
  if (["NB", "NL", "NS", "PE"].includes(province) || (offer === "offer" && ["NB", "NL", "NS", "PE", "unsure"].includes(province))) {
    g.add(PR, { key: "aip", title: "Atlantic Immigration Program", tier: offer === "offer" ? "possible" : "note",
      why: "If an Atlantic employer offers you a job, this employer-driven route can lead straight to PR.",
      href: "/atlantic-immigration-program" });
  }

  // Rural & Northern
  if (offer === "offer") {
    g.add(PR, { key: "rnip", title: "Rural & Northern immigration pilots", tier: "note",
      why: "A job offer in a participating smaller community can open a rural pilot with lower thresholds.",
      href: "/rural-northern-immigration-pilot" });
  }

  // French advantage
  if (fr >= 7) {
    g.add(PR, { key: "french", title: "French-language category draws", tier: "possible",
      why: "Strong French opens category-based Express Entry draws, which have often had lower cut-offs.",
      href: "/express-entry/category-based-draws" });
  }

  // Spouse is a citizen/PR -> sponsorship is likely the better route
  if (val(a, "familyTies") === "spouse") {
    g.add(FAM, { key: "spousal", title: "Spousal / partner sponsorship", tier: "strong",
      why: "If your spouse or partner is a Canadian citizen or PR, they may be able to sponsor you, often the most direct route.",
      href: "/family-sponsorship/spousal-sponsorship" });
  }

  // How a partner affects an Express Entry score (only relevant if a PR profile exists).
  if (val(a, "marital") === "married" && g.count > 0) {
    const accompanying = val(a, "spouseAccompany") === "yes";
    g.add(PR, { key: "spouse-points", title: accompanying ? "Your partner can add points" : "You'd be scored as a single applicant", tier: "note",
      why: accompanying
        ? "With a partner coming too, their language and education can add Express Entry points, worth scoring together to see your true total."
        : "If your partner isn't coming, Express Entry scores you as a single applicant, which can actually lift your own CRS in some cases.",
      href: "/express-entry" });
  }

  const groups = g.build([PR, FAM]);
  const provinceNote = skilled ? provincePnpNote(province, linkProv) : undefined;
  return finalize(groups, flags, provinceNote, {
    none: "Your profile didn't match our quick PR rules, but that rarely means there's no route. A work permit first, more language points, or a provincial stream often opens the door, let's look properly.",
    some: "Here are the permanent-residence routes you may qualify for based on what you told us.",
  });
}

/* ===================================================================== WORK */
function evalWork(a: Answers): EvalResult {
  const g = new Groups();
  const flags: string[] = [];
  const offer = val(a, "offerType");
  const hasOffer = offer !== "none";
  const fr = clb(val(a, "french"));
  const status = val(a, "status");
  const skilledOffer = ["teer01", "teer23"].includes(val(a, "jobSkill"));

  // Citizenship drives the treaty + youth-mobility routes.
  const citizenship = val(a, "citizenship");
  const currentCountry = val(a, "currentCountry");
  const isCusma = CUSMA.has(citizenship);
  const isEu = EU.has(citizenship);
  const isIec = IEC.has(citizenship);
  const age = val(a, "age");
  const iecAge = age === "18-29" || age === "30-34"; // squarely in range
  const iecEdgeAge = age === "35-44";                // some countries cap at 35

  // Employer-specific (LMIA) route
  if (offer === "employer" || offer === "unsure") {
    g.add(WORK, { key: "lmia", title: "Employer-specific (LMIA) work permit", tier: offer === "employer" ? "strong" : "possible",
      why: "A Canadian job offer usually leads to an LMIA-based work permit, unless one of the LMIA-exempt routes below applies.",
      href: "/work-permits/lmia" });
  }
  // Intra-company transfer
  if (offer === "transfer") {
    g.add(WORK, { key: "ict", title: "Intra-company transfer (LMIA-exempt)", tier: "strong",
      why: "Moving within your company to a Canadian office can skip the LMIA entirely.",
      href: "/work-permits/intra-company-transfer" });
  }
  // CUSMA professional (US / Mexico)
  if (isCusma && hasOffer && (skilledOffer || offer === "treaty")) {
    g.add(WORK, { key: "cusma", title: "CUSMA professional work permit (LMIA-exempt)", tier: "strong",
      why: `As a ${countryName(citizenship)} citizen with a qualifying professional job offer, CUSMA can let you work in Canada without an LMIA.`,
      href: "/work-permits/cusma" });
  }
  // CETA (EU)
  if (isEu && hasOffer && (skilledOffer || offer === "treaty")) {
    g.add(WORK, { key: "ceta", title: "CETA work permit (EU, LMIA-exempt)", tier: skilledOffer ? "strong" : "possible",
      why: "CETA gives EU professionals, contractual service suppliers and intra-company transferees LMIA-exempt routes into Canada.",
      href: "/work-permits/ceta" });
  }
  // They selected a treaty role but we couldn't map their citizenship to one.
  if (offer === "treaty" && !isCusma && !isEu) {
    g.add(WORK, { key: "treaty", title: "Treaty-based work permit (LMIA-exempt)", tier: "possible",
      why: "Trade-agreement routes (CUSMA, CETA and others) can waive the LMIA for eligible nationals. We'll confirm which one fits your citizenship.",
      href: "/work-permits/international-mobility-program" });
  }
  // Francophone Mobility (outside Quebec, French speaker)
  if (fr >= 5 && hasOffer) {
    g.add(WORK, { key: "franco", title: "Francophone Mobility (LMIA-exempt)", tier: fr >= 6 ? "strong" : "possible",
      why: "As a French speaker taking a job outside Quebec, you may skip the LMIA under Francophone Mobility.",
      href: "/work-permits/francophone-mobility" });
  }
  if (status === "graduate") {
    g.add(WORK, { key: "pgwp", title: "Post-Graduation Work Permit (PGWP)", tier: "strong",
      why: "As a recent graduate of an eligible Canadian school, a PGWP lets you work and build toward PR.",
      href: "/work-permits/pgwp" });
  }
  // International Experience Canada (youth mobility), derived from citizenship + age
  if (isIec && iecAge) {
    g.add(WORK, { key: "iec", title: "International Experience Canada (Working Holiday)", tier: "strong",
      why: `${countryName(citizenship)} has a youth-mobility agreement with Canada and your age fits, often the simplest first work permit, and the Working Holiday is an open permit.`,
      href: "/work-permits/international-experience-canada" });
  } else if (isIec && iecEdgeAge) {
    g.add(WORK, { key: "iec", title: "International Experience Canada (Working Holiday)", tier: "possible",
      why: `${countryName(citizenship)} has a youth-mobility agreement with Canada. The upper age limit is 30 to 35 depending on the country, so it's worth checking whether you still qualify.`,
      href: "/work-permits/international-experience-canada" });
  }
  // IEC sometimes requires applying from your country of citizenship.
  if (isIec && (iecAge || iecEdgeAge) && currentCountry && currentCountry !== "OTHER" && currentCountry !== citizenship) {
    flags.push(`Heads up on IEC: some youth-mobility agreements require you to apply from your country of citizenship. You told us you're currently in ${countryName(currentCountry)}, so we'll confirm this doesn't affect your eligibility.`);
  }
  if (val(a, "partnerInCanada") === "yes") {
    g.add(WORK, { key: "owp", title: "Open work permit (partner of a worker or student)", tier: "possible",
      why: "If your spouse or partner works or studies in Canada, you may qualify for an open work permit to join them.",
      href: "/work-permits/open-work-permit" });
  }
  // PR pathway note
  if (hasOffer && skilledOffer) {
    g.add(PR, { key: "cec-note", title: "Permanent residence later (Express Entry)", tier: "note",
      why: "Skilled Canadian work experience on this permit can lead to PR through the Canadian Experience Class.",
      href: "/express-entry/canadian-experience-class" });
  }

  return finalize(g.build([WORK, PR]), flags, undefined, {
    none: "We couldn't match a clear work-permit route from your answers, often it just needs a job offer or a detail we should check together.",
    some: "Here are the work-permit routes that may fit your situation.",
  });
}

/* ===================================================================== SPONSOR */
function evalSponsor(a: Answers): EvalResult {
  const g = new Groups();
  const flags: string[] = [];
  const rel = val(a, "relationship");
  const status = val(a, "sponsorStatus");
  const ok18 = val(a, "sponsorAge") !== "no";
  const onSA = val(a, "socialAssistance") === "yes";

  // Hard eligibility flags for the sponsor.
  let blocked = false;
  if (status === "neither") {
    flags.push("To sponsor a relative, the sponsor must be a Canadian citizen or permanent resident (or a registered Indian under the Indian Act). Based on your answer, a sponsorship may not be possible yet.");
    blocked = true;
  }
  if (!ok18) { flags.push("A sponsor must be at least 18 years old."); blocked = true; }
  if (onSA) flags.push("A sponsor generally cannot receive social assistance (other than for a disability). This may affect eligibility.");
  if (status === "pr" && val(a, "sponsorWhere") === "abroad") {
    flags.push("A permanent-resident sponsor must be living in Canada to sponsor. A Canadian citizen can sometimes sponsor a spouse or child from abroad if they will return.");
  }
  if (arr(a, "sponsorBars").filter((v) => v !== "none").length) {
    flags.push("One or more of your answers (a past sponsorship default, an overdue immigration loan or bond, undischarged bankruptcy, a removal order, or a serious criminal conviction) can legally prevent a sponsorship even for a citizen or PR. This must be reviewed carefully before relying on a sponsorship.");
  }

  // For spouse/partner, the union type and cohabitation decide if it's possible now.
  const union = val(a, "unionType");
  const commonLawShort = union === "common-law" && val(a, "cohabit12") === "no";
  const spouseEligibleNow = rel === "spouse" && union !== "not-yet" && !commonLawShort;

  if (!blocked) {
    if (rel === "spouse") {
      if (union === "not-yet") {
        g.add(FAM, { key: "spousal", title: "Spousal / partner sponsorship (once you qualify)", tier: "possible",
          why: "Canada has no fiancé(e) visa. You can sponsor once you're married, once you've lived together for 12 continuous months as common-law, or as conjugal partners only if you genuinely can't do either.",
          href: "/family-sponsorship/spousal-sponsorship" });
        flags.push("You can't sponsor a fiancé(e) or a partner you're not yet living with. The routes are: marry, then spousal sponsorship; reach 12 months of continuous cohabitation for common-law; or, only if you truly cannot marry or live together, conjugal sponsorship.");
      } else if (commonLawShort) {
        g.add(FAM, { key: "spousal", title: "Common-law partner sponsorship (not eligible yet)", tier: "possible",
          why: "Common-law sponsorship needs 12 months of continuous living together, and you're not there yet. We'd look at the timing, or marriage, to open the spousal route sooner.",
          href: "/family-sponsorship/spousal-sponsorship" });
        flags.push("Common-law sponsorship requires 12 months of continuous cohabitation. Until you reach that, the options are to keep building the 12 months, marry (then sponsor as a spouse), or, only if you genuinely cannot live together or marry, conjugal sponsorship.");
      } else {
        g.add(FAM, { key: "spousal", title: union === "common-law" ? "Common-law partner sponsorship" : "Spousal / partner sponsorship", tier: "strong",
          why: "A spouse or common-law partner can usually be sponsored. Inland or outland depends on where they live now, we'll confirm the best route.",
          href: "/family-sponsorship/spousal-sponsorship" });
      }
    } else if (rel === "conjugal") {
      g.add(FAM, { key: "conjugal", title: "Conjugal partner sponsorship", tier: "possible",
        why: "Conjugal sponsorship is for partners who genuinely cannot marry or live together; it has a higher evidence bar we can assess.",
        href: "/family-sponsorship/conjugal-partner" });
    } else if (rel === "child") {
      g.add(FAM, { key: "child", title: "Dependent child sponsorship", tier: "strong",
        why: "A dependent child (generally under 22 and without a partner) can usually be sponsored.",
        href: "/family-sponsorship/dependent-children" });
    } else if (rel === "parent") {
      if (POLICY.pgpOpenToNewIntake) {
        const income = val(a, "meetsIncome");
        g.add(FAM, { key: "pgp", title: "Parents & Grandparents Program (PGP)", tier: income === "yes" ? "possible" : "note",
          why: income === "yes"
            ? "You indicated you meet the income test. PGP also depends on the annual intake, which we track."
            : "PGP needs three years of minimum income and runs on a limited intake. We'll check whether it fits.",
          href: "/family-sponsorship/parents-grandparents" });
        g.add(FAM, { key: "supervisa", title: "Super Visa (alternative to PGP)", tier: "strong",
          why: "A Super Visa lets parents and grandparents visit for long stays, with income and insurance requirements and no lottery.",
          href: "/family-sponsorship/super-visa" });
      } else {
        g.add(FAM, { key: "supervisa", title: "Super Visa for parents & grandparents", tier: "strong",
          why: "A Super Visa lets parents and grandparents visit for long stays (up to 5 years per entry), with income and medical-insurance requirements and no lottery. It's the realistic route right now.",
          href: "/family-sponsorship/super-visa" });
        g.add(FAM, { key: "pgp", title: "Parents & Grandparents Program (PGP)", tier: "note",
          why: "Heads up: the PGP is closed to new applications for 2026, IRCC is only processing sponsors invited from earlier years. We'll flag you when it reopens; for now the Super Visa is the way to bring them.",
          href: "/family-sponsorship/parents-grandparents" });
      }
    } else if (rel === "other") {
      flags.push("Canada lets you sponsor only certain relatives. Other relatives are limited to narrow situations (for example, an orphaned sibling, niece or nephew under 18, or where you have no closer relative to sponsor). It's worth a quick check with us.");
    }

    // Spousal open work permit cross-link (only once the sponsorship can actually go ahead)
    if (spouseEligibleNow) {
      g.add(WORK, { key: "sowp", title: "Spousal Open Work Permit (while you wait)", tier: "note",
        why: "Applying for spousal PR from inside Canada can come with an open work permit during processing.",
        href: "/family-sponsorship/spousal-open-work-permit" });
    }
  }

  return finalize(g.build([FAM, WORK]), flags, undefined, {
    none: blocked
      ? "Based on the sponsor's status, a sponsorship may not be possible right now, but there are often other routes. Let's talk it through."
      : "We couldn't match a standard sponsorship from your answers; your case may be one of the narrower ones we should review.",
    some: "Here's what your family sponsorship may look like.",
  });
}

/* ===================================================================== BUSINESS */
function evalBusiness(a: Answers): EvalResult {
  const g = new Groups();
  const eng = clb(val(a, "english"));
  const fr = clb(val(a, "french"));
  const role = val(a, "bizRole");
  const mgmt = val(a, "mgmtYears");
  const hasMgmt = mgmt === "1-2" || mgmt === "3+";
  const netWorth = val(a, "netWorth");
  const province = val(a, "province");
  const bizType = val(a, "bizType");
  const wealthy = netWorth === "300-600k" || netWorth === "600k+";

  // Start-up Visa (closed to new applicants from the end of 2025; only holders of
  // a 2025 letter of support can still apply, until 30 June 2026). Flip the
  // POLICY flag to restore the normal result if/when it reopens.
  if (bizType === "startup") {
    if (POLICY.startUpVisaOpenToNewApplicants) {
      g.add(BIZ, { key: "suv", title: "Start-up Visa", tier: hasMgmt ? "possible" : "note",
        why: "If you can build an innovative business backed by a designated Canadian organisation, the Start-up Visa leads to PR. It needs language at CLB 5 and settlement funds.",
        href: "/start-up-visa" });
    } else {
      g.add(BIZ, { key: "suv", title: "Start-up Visa", tier: "note",
        why: "The Start-up Visa needs an innovative business backed by a designated Canadian organisation. Important: it closed to new applicants at the end of 2025, only those who already hold a 2025 letter of support can still apply (until 30 June 2026). A provincial entrepreneur stream is usually the route now.",
        href: "/start-up-visa" });
    }
  }

  // Provincial entrepreneur streams (province-level)
  if ((role === "owner" || role === "manager") && hasMgmt && netWorth !== "lt100k") {
    g.add(BIZ, { key: "pnp-ent", title: "Provincial entrepreneur / business streams", tier: wealthy && mgmt === "3+" ? "possible" : "note",
      why: `Most provinces run entrepreneur streams for people who will own and actively run a business in ${provinceLabel(province)}. They set their own net-worth and investment minimums.`,
      href: province === "AB" ? "/alberta-immigration" : "/pnp" });
  }

  // Self-employed caveat
  if (bizType === "invest" || (role === "neither" && bizType !== "startup")) {
    g.add(BIZ, { key: "self-note", title: "A note on passive investment", tier: "note",
      why: POLICY.selfEmployedOpenToNewApplicants
        ? "Canada has no simple 'investor visa'. The federal Self-Employed Persons Program (cultural or athletic work) is narrow, so an active provincial business route is usually the answer."
        : "Canada has no simple 'investor visa'. The federal Self-Employed Persons Program (cultural or athletic work) has been paused to new applications since 2024, so an active provincial business route is usually the answer.",
      href: "/self-employed-immigration" });
  }

  // If they have a skilled background, PR via Express Entry might be simpler
  g.add(PR, { key: "ee-note", title: "Consider Express Entry too", tier: "note",
    why: "Business routes need capital and active management. If you also have skilled work experience, a faster PR route through Express Entry may exist, worth checking.",
    href: "/express-entry" });

  return finalize(g.build([BIZ, PR]), [], province && province !== "unsure" ? provincePnpNote(province) : undefined, {
    none: "Business immigration usually needs real capital and hands-on management experience. From your answers a standard skilled route may suit you better, let's find the best fit.",
    some: "Here are the business-immigration routes worth exploring, plus a reality check.",
  });
}

/* ===================================================================== STUDY */
function evalStudy(a: Answers): EvalResult {
  const g = new Groups();
  const flags: string[] = [];
  const acceptance = val(a, "acceptance");
  const funds = val(a, "funds");
  const refused = val(a, "refused") === "yes";
  const intent = val(a, "intendLeave");

  const fundsOk = funds === "yes";
  const intentOk = intent !== "no";
  const palExempt = val(a, "studyLevel") === "masters-doctoral";
  const palLine = palExempt
    ? "As a master's or doctoral student at a public university, you're now exempt from the Provincial Attestation Letter (PAL)."
    : "Most applicants also need a Provincial Attestation Letter (PAL); we'll make sure yours is in order.";

  if (acceptance === "yes") {
    if (fundsOk && intentOk) {
      g.add(STUDY, { key: "sp", title: "Study permit", tier: "strong",
        why: `You have an acceptance and can show funds, the core of a study-permit application. ${palLine}`,
        href: "/study-permit" });
    } else {
      g.add(STUDY, { key: "sp", title: "Study permit", tier: "possible",
        why: `You have an acceptance, but a study permit also needs clear proof of funds (tuition plus living costs). ${palLine} Let's shore those up.`,
        href: "/study-permit" });
    }
  } else {
    // No DLI yet, per the brief: tell them whether they look eligible, but they must secure a DLI + PAL first.
    if (fundsOk) {
      g.add(STUDY, { key: "sp-pending", title: "Study permit (once you have a school)", tier: "possible",
        why: "You look well placed for a study permit on funds, but you must first get a letter of acceptance from a designated learning institution (DLI) and a Provincial Attestation Letter. We don't place students in schools, but we prepare the permit once you do.",
        href: "/study-permit" });
      flags.push("Your first step is a letter of acceptance from a DLI, then a Provincial Attestation Letter (PAL/TAL). After that we can prepare your study permit.");
    } else {
      g.add(STUDY, { key: "sp-pending", title: "Study permit (groundwork needed)", tier: "note",
        why: "Before a study permit is realistic you'll need a DLI acceptance, a Provincial Attestation Letter, and clear proof of funds (tuition plus about CAD 22,895 in living costs).",
        href: "/study-permit" });
      flags.push("Two things to line up first: a DLI acceptance (plus a Provincial Attestation Letter), and proof of funds for tuition and living costs.");
    }
  }

  if (refused) flags.push("A previous study-permit refusal must be addressed carefully, the reasons for the refusal shape the next application, and this is exactly where a review helps.");

  if (val(a, "inCanada") === "inside") flags.push("You told us you're already in Canada. A study permit can usually only be applied for from inside Canada in specific situations (for example, if you, your spouse or your parent already hold a study or work permit). Otherwise it's applied for from outside Canada. We'll confirm which applies to you.");

  // PGWP -> PR note
  g.add(STUDY, { key: "study-pr", title: "Study can lead to permanent residence", tier: "note",
    why: "An eligible program can lead to a Post-Graduation Work Permit, then to PR through the Canadian Experience Class. We plan study with that finish line in mind.",
    href: "/study-permit/study-to-pr" });

  return finalize(g.build([STUDY]), flags, undefined, {
    none: "Let's map your study plan together.",
    some: "Here's an honest read on your Canadian study options.",
  });
}

/* ===================================================================== shared finalize */
function finalize(groups: ResultGroup[], flags: string[], provinceNote: string | undefined, copy: { none: string; some: string }): EvalResult {
  const total = groups.reduce((n, gr) => n + gr.items.filter((i) => i.tier !== "note").length, 0);
  const strong = groups.reduce((n, gr) => n + gr.items.filter((i) => i.tier === "strong").length, 0);
  const headline = total === 0
    ? "Your situation needs a closer look"
    : strong > 0
      ? `${total} route${total > 1 ? "s" : ""} may fit you, ${strong} look${strong > 1 ? "" : "s"} strong`
      : `${total} route${total > 1 ? "s" : ""} worth exploring`;
  return { headline, intro: total === 0 ? copy.none : copy.some, groups, provinceNote, flags };
}

function provincePnpNote(province: string, tie?: string): string {
  const base = (!province || province === "unsure")
    ? "Because you're open on location, several provinces' nominee programs (anywhere outside Quebec) could be in play. A consultation pins down which province and stream fit you best."
    : `Based on settling in ${provinceLabel(province)}, that province's nominee program is the one to focus on. We confirm the exact stream and its current criteria in a consultation.`;
  if (tie && tie !== "unsure" && tie !== province && PROVINCE_NAME[tie]) {
    return `${base} You also mentioned ties to ${provinceLabel(tie)}, a real connection there can strengthen that province's nominee program too.`;
  }
  return base;
}

/* ===================================================================== Quebec off-ramp */
function quebecOffRamp(): EvalResult {
  return {
    headline: "Quebec runs its own immigration system",
    intro: "You chose Quebec as your destination. Quebec selects its own immigrants through a separate process (the CSQ and the Arrima portal), which is outside what we handle.",
    groups: [],
    flags: [
      "We don't advise on Quebec-selected immigration. If you're set on Quebec, you'll need a representative who handles the Quebec system.",
      "If you're open to settling anywhere else in Canada, start over and pick another province, we'd be glad to map your options.",
    ],
  };
}

/* ===================================================================== dispatch */
export function evaluate(path: PathId, a: Answers): EvalResult {
  if (val(a, "province") === "QC") return quebecOffRamp();
  switch (path) {
    case "work": return evalWork(a);
    case "sponsor": return evalSponsor(a);
    case "business": return evalBusiness(a);
    case "study": return evalStudy(a);
    case "immigrate":
    default: return evalImmigrate(a);
  }
}
