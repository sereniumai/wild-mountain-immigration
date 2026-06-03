/* ============================================================================
   Eligibility engine. Maps a completed questionnaire to the programs a person
   MAY be eligible for. Deliberately conservative and hedged: it is an AI-assisted
   guide, never a decision, and it never guarantees an outcome (CICC rules).

   Rules reflect current public IRCC + provincial criteria (2026). Where a rule
   changes often, the result wording points the user to a consultation rather
   than asserting certainty. Quebec is never recommended.
============================================================================ */
import { type Answers, type PathId, val, PROVINCE_NAME } from "./config";

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
    const strong = nominated || offer === "offer" || val(a, "provinceLink") === "yes" || expCanada;
    g.add(PR, { key: "pnp", title: nominated ? "Provincial nomination, complete your PR" : "Provincial Nominee Programs", tier: strong ? "strong" : "possible",
      why: nominated
        ? "With a nomination, a +600 CRS boost puts permanent residence within close reach."
        : `Provinces nominate skilled workers directly, often a realistic route to ${provinceLabel(province)}.`,
      href: province === "AB" ? "/alberta-immigration" : "/pnp" });
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

  const groups = g.build([PR, FAM]);
  const provinceNote = skilled ? provincePnpNote(province) : undefined;
  return finalize(groups, flags, provinceNote, {
    none: "Your profile didn't match our quick PR rules, but that rarely means there's no route. A work permit first, more language points, or a provincial stream often opens the door, let's look properly.",
    some: "Here are the permanent-residence routes you may qualify for based on what you told us.",
  });
}

/* ===================================================================== WORK */
function evalWork(a: Answers): EvalResult {
  const g = new Groups();
  const offer = val(a, "offerType");
  const fr = clb(val(a, "french"));
  const status = val(a, "status");
  const skilledOffer = ["teer01", "teer23"].includes(val(a, "jobSkill"));

  if (offer === "employer" || offer === "unsure") {
    g.add(WORK, { key: "lmia", title: "Employer-specific (LMIA) work permit", tier: offer === "employer" ? "strong" : "possible",
      why: "A Canadian job offer usually leads to an LMIA-based work permit, unless an LMIA exemption applies.",
      href: "/work-permits/lmia" });
  }
  if (offer === "transfer") {
    g.add(WORK, { key: "ict", title: "Intra-company transfer (LMIA-exempt)", tier: "strong",
      why: "Moving within your company to a Canadian office can skip the LMIA entirely.",
      href: "/work-permits/intra-company-transfer" });
  }
  if (offer === "treaty" || (val(a, "treatyCitizen") === "yes" && ["employer", "unsure", "transfer"].includes(offer))) {
    g.add(WORK, { key: "treaty", title: "Treaty work permit (CUSMA / CETA, LMIA-exempt)", tier: "strong",
      why: "Trade-agreement routes let eligible US, Mexican and European professionals work without an LMIA.",
      href: "/work-permits/cusma" });
  }
  // Francophone Mobility (outside Quebec, French speaker)
  if (fr >= 5 && offer !== "none") {
    g.add(WORK, { key: "franco", title: "Francophone Mobility (LMIA-exempt)", tier: fr >= 6 ? "strong" : "possible",
      why: "As a French speaker taking a job outside Quebec, you may skip the LMIA under Francophone Mobility.",
      href: "/work-permits/francophone-mobility" });
  }
  if (status === "graduate") {
    g.add(WORK, { key: "pgwp", title: "Post-Graduation Work Permit (PGWP)", tier: "strong",
      why: "As a recent graduate of an eligible Canadian school, a PGWP lets you work and build toward PR.",
      href: "/work-permits/pgwp" });
  }
  if (val(a, "iec") === "yes") {
    g.add(WORK, { key: "iec", title: "International Experience Canada (Working Holiday)", tier: "strong",
      why: "Your age and country may qualify you for an open IEC permit, an easy first step into Canada.",
      href: "/work-permits/international-experience-canada" });
  } else if (val(a, "iec") === "unsure") {
    g.add(WORK, { key: "iec", title: "International Experience Canada (Working Holiday)", tier: "possible",
      why: "If your country has a youth-mobility agreement with Canada, IEC could be an open work permit option.",
      href: "/work-permits/international-experience-canada" });
  }
  if (val(a, "partnerInCanada") === "yes") {
    g.add(WORK, { key: "owp", title: "Open work permit (partner of a worker or student)", tier: "possible",
      why: "If your spouse or partner works or studies in Canada, you may qualify for an open work permit to join them.",
      href: "/work-permits/open-work-permit" });
  }
  // PR pathway note
  if (offer !== "none" && skilledOffer) {
    g.add(PR, { key: "cec-note", title: "Permanent residence later (Express Entry)", tier: "note",
      why: "Skilled Canadian work experience on this permit can lead to PR through the Canadian Experience Class.",
      href: "/express-entry/canadian-experience-class" });
  }

  return finalize(g.build([WORK, PR]), [], undefined, {
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

  if (!blocked) {
    if (rel === "spouse") {
      g.add(FAM, { key: "spousal", title: "Spousal / common-law partner sponsorship", tier: "strong",
        why: "A spouse or common-law partner can usually be sponsored. Inland or outland depends on where they live now, we'll confirm the best route.",
        href: "/family-sponsorship/spousal-sponsorship" });
    } else if (rel === "conjugal") {
      g.add(FAM, { key: "conjugal", title: "Conjugal partner sponsorship", tier: "possible",
        why: "Conjugal sponsorship is for partners who genuinely cannot marry or live together; it has a higher evidence bar we can assess.",
        href: "/family-sponsorship/conjugal-partner" });
    } else if (rel === "child") {
      g.add(FAM, { key: "child", title: "Dependent child sponsorship", tier: "strong",
        why: "A dependent child (generally under 22 and without a partner) can usually be sponsored.",
        href: "/family-sponsorship/dependent-children" });
    } else if (rel === "parent") {
      const income = val(a, "meetsIncome");
      g.add(FAM, { key: "pgp", title: "Parents & Grandparents Program (PGP)", tier: income === "yes" ? "possible" : "note",
        why: income === "yes"
          ? "You indicated you meet the income test. PGP also depends on the annual intake (often a lottery), which we track."
          : "PGP needs three years of minimum income and runs on a limited intake. We'll check whether it fits.",
        href: "/family-sponsorship/parents-grandparents" });
      g.add(FAM, { key: "supervisa", title: "Super Visa (alternative to PGP)", tier: "strong",
        why: "A Super Visa lets parents and grandparents visit for long stays without the PGP lottery, with income and insurance requirements.",
        href: "/family-sponsorship/super-visa" });
    } else if (rel === "other") {
      flags.push("Canada lets you sponsor only certain relatives. Other relatives are limited to narrow situations (for example, an orphaned sibling, niece or nephew under 18, or where you have no closer relative to sponsor). It's worth a quick check with us.");
    }

    // Spousal open work permit cross-link
    if (rel === "spouse") {
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

  // Start-up Visa
  if (bizType === "startup" && (eng >= 4 || fr >= 4)) {
    g.add(BIZ, { key: "suv", title: "Start-up Visa", tier: hasMgmt ? "possible" : "note",
      why: "If you can build an innovative business backed by a designated Canadian organisation, the Start-up Visa leads to PR. It needs language at CLB 5 and settlement funds.",
      href: "/start-up-visa" });
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
      why: "Canada has no simple 'investor visa'. The federal Self-Employed Persons Program is narrow (cultural or athletic) and its intake has been limited recently, so an active business route is usually the answer.",
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

  if (acceptance === "yes") {
    if (fundsOk && intentOk) {
      g.add(STUDY, { key: "sp", title: "Study permit", tier: "strong",
        why: "You have an acceptance and can show funds, the core of a study-permit application. You'll also need a Provincial Attestation Letter (PAL/TAL) in most cases.",
        href: "/study-permit" });
    } else {
      g.add(STUDY, { key: "sp", title: "Study permit", tier: "possible",
        why: "You have an acceptance, but a study permit also needs clear proof of funds (tuition plus living costs) and a Provincial Attestation Letter. Let's shore those up.",
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
        why: "Before a study permit is realistic you'll need a DLI acceptance, a Provincial Attestation Letter, and clear proof of funds (tuition plus about CAD 20,635 in living costs).",
        href: "/study-permit" });
      flags.push("Two things to line up first: a DLI acceptance (plus a Provincial Attestation Letter), and proof of funds for tuition and living costs.");
    }
  }

  if (refused) flags.push("A previous study-permit refusal must be addressed carefully, the reasons for the refusal shape the next application, and this is exactly where a review helps.");

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

function provincePnpNote(province: string): string {
  if (!province || province === "unsure") {
    return "Because you're open on location, several provinces' nominee programs (anywhere outside Quebec) could be in play. A consultation pins down which province and stream fit you best.";
  }
  return `Based on settling in ${provinceLabel(province)}, that province's nominee program is the one to focus on. We confirm the exact stream and its current criteria in a consultation.`;
}

/* ===================================================================== dispatch */
export function evaluate(path: PathId, a: Answers): EvalResult {
  switch (path) {
    case "work": return evalWork(a);
    case "sponsor": return evalSponsor(a);
    case "business": return evalBusiness(a);
    case "study": return evalStudy(a);
    case "immigrate":
    default: return evalImmigrate(a);
  }
}
