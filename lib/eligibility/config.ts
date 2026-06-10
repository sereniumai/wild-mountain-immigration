/* ============================================================================
   Eligibility checker, question configuration.

   FIVE paths: immigrate (PR) · work · sponsor (family) · business · study.
   Comprehensive, Canadim-style questionnaires. The engine in ./engine.ts reads
   the answers and maps them to programs. Quebec is deliberately excluded
   everywhere (we do not handle Quebec-selected programs).

   This file is plain data so it is easy to audit and correct: every question a
   user sees is a `Field` below.
============================================================================ */

import { POLICY } from "./constants";
import { countryOptions } from "./countries";

export type PathId = "immigrate" | "work" | "sponsor" | "business" | "study";

export type Option = {
  value: string;
  label: string;
  hint?: string;
  /** In a "multi" field, choosing this clears every other option (and choosing
   *  any other option clears this). Use for a mutually-exclusive "None" choice. */
  exclusive?: boolean;
};

export type Field = {
  id: string;
  label: string;
  help?: string;
  type: "single" | "multi" | "select";
  options: Option[];
  optional?: boolean;
  /** Only show this question when the predicate passes (depends on prior answers). */
  showIf?: (a: Answers) => boolean;
};

export type Section = { title: string; intro?: string; fields: Field[] };

export type PathDef = {
  id: PathId;
  label: string;
  blurb: string;
  icon: "compass" | "briefcase" | "heart" | "building" | "cap";
  sections: Section[];
};

export type Answers = Record<string, string | string[]>;

export const val = (a: Answers, id: string): string =>
  (typeof a[id] === "string" ? (a[id] as string) : "");
export const arr = (a: Answers, id: string): string[] =>
  (Array.isArray(a[id]) ? (a[id] as string[]) : []);
export const has = (a: Answers, id: string, v: string): boolean => arr(a, id).includes(v);

/* ----------------------------------------------------------------- shared option sets */
const AGE: Option[] = [
  { value: "u18", label: "Under 18" },
  { value: "18-29", label: "18 to 29" },
  { value: "30-34", label: "30 to 34" },
  { value: "35-44", label: "35 to 44" },
  { value: "45+", label: "45 or older" },
];

const EDU: Option[] = [
  { value: "lt-secondary", label: "Less than high school" },
  { value: "secondary", label: "High school" },
  { value: "one-year", label: "1-year post-secondary certificate/diploma" },
  { value: "two-year", label: "2-year diploma" },
  { value: "bachelor", label: "Bachelor's degree (3+ years)" },
  { value: "master", label: "Master's or professional degree" },
  { value: "doctorate", label: "Doctorate (PhD)" },
];

const LANG = (lang: "English" | "French"): Option[] => [
  { value: "none", label: "None or very basic" },
  { value: "clb4", label: `Basic ${lang} (around CLB 4-5)` },
  { value: "clb6", label: `Intermediate (around CLB 6)` },
  { value: "clb7", label: `Good (around CLB 7-8)` },
  { value: "clb9", label: `Strong (CLB 9 or higher)` },
];

const WORK_YEARS: Option[] = [
  { value: "0", label: "None" },
  { value: "lt1", label: "Less than 1 year" },
  { value: "1-3", label: "1 to 3 years" },
  { value: "4-5", label: "4 to 5 years" },
  { value: "6+", label: "6 or more years" },
];

const SKILL: Option[] = [
  { value: "teer01", label: "Professional or managerial", hint: "e.g. manager, engineer, nurse, accountant" },
  { value: "teer23", label: "Technical or a skilled trade", hint: "e.g. technician, electrician, chef, administrator" },
  { value: "teer45", label: "Intermediate or labour role", hint: "e.g. server, driver, retail, general help" },
  { value: "none", label: "Not currently working in a skilled role" },
];

// PNP exists in every province and territory except Quebec (excluded) and Nunavut.
const PROVINCE: Option[] = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "SK", label: "Saskatchewan" },
  { value: "NT", label: "Northwest Territories" },
  { value: "YT", label: "Yukon" },
  { value: "QC", label: "Quebec" },
  { value: "unsure", label: "Not sure yet (anywhere outside Quebec)" },
];

// Real provinces only (no Quebec, no "unsure"), for the dropdown that asks which
// province someone has a tie to.
const PROVINCE_REAL: Option[] = PROVINCE.filter((p) => p.value !== "QC" && p.value !== "unsure");

// Every province and territory, for asking where someone physically is right now
// (distinct from where they'd settle). Quebec and Nunavut are valid answers here
// because this captures a location fact, not a program choice.
const PROVINCE_CURRENT: Option[] = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "YT", label: "Yukon" },
];

const YESNO: Option[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
const YESNOUNSURE: Option[] = [...YESNO, { value: "unsure", label: "I'm not sure" }];

/* reusable question blocks */
const Q_AGE: Field = { id: "age", label: "How old are you?", type: "single", options: AGE };
const Q_EDU: Field = { id: "education", label: "What is your highest completed level of education?", type: "single", options: EDU };
const Q_ENGLISH: Field = { id: "english", label: "How strong is your English?", help: "Your best honest estimate; you don't need exact test scores yet.", type: "single", options: LANG("English") };
const Q_FRENCH: Field = { id: "french", label: "How strong is your French?", help: "Skip or choose 'None' if you don't speak French.", type: "single", options: LANG("French") };
const Q_PROVINCE: Field = { id: "province", label: "Where in Canada would you like to settle?", help: "We don't handle Quebec. This helps us flag the right provincial programs.", type: "single", options: PROVINCE };

/* Asked on every path: which passport you hold, whether you're physically in
   Canada, and (if you are) which province. "currentProvince" is shown whenever
   any path signals the person is inside Canada, the binary "inCanada" question,
   the work path's richer "status", or the sponsor path's "role". */
const Q_PASSPORT: Field = { id: "citizenship", label: "Which country's passport do you hold?", help: "Your nationality. If you hold more than one, pick the one you'd most likely travel on.", type: "select", options: countryOptions };
const Q_IN_CANADA: Field = { id: "inCanada", label: "Are you currently inside or outside Canada?", type: "single", options: [
  { value: "inside", label: "Inside Canada" },
  { value: "outside", label: "Outside Canada" },
] };
const Q_CURRENT_PROVINCE: Field = { id: "currentProvince", label: "Which province or territory are you in right now?", type: "select", options: PROVINCE_CURRENT,
  showIf: (a) => val(a, "inCanada") === "inside" || ["visitor", "worker", "student", "graduate"].includes(val(a, "status")) || val(a, "role") === "sponsor" };

/* ============================================================================
   PATHS
============================================================================ */
export const PATHS: PathDef[] = [
  /* ----------------------------------------------------------- IMMIGRATE (PR) */
  {
    id: "immigrate",
    label: "Immigrate permanently",
    blurb: "Become a permanent resident through Express Entry or a provincial program.",
    icon: "compass",
    sections: [
      {
        title: "About you",
        fields: [
          Q_AGE,
          Q_PASSPORT,
          Q_IN_CANADA,
          Q_CURRENT_PROVINCE,
          { id: "marital", label: "What is your marital status?", type: "single", options: [
            { value: "single", label: "Single" },
            { value: "married", label: "Married or common-law" },
          ] },
          { id: "spouseAccompany", label: "Will your spouse or partner come with you to Canada?", help: "An accompanying partner's language and education can change your Express Entry score.", type: "single", options: YESNO, showIf: (a) => val(a, "marital") === "married" },
          Q_PROVINCE,
        ],
      },
      {
        title: "Education & language",
        fields: [
          Q_EDU,
          { id: "studiedWhere", label: "Where did you complete your highest education?", type: "single", options: [
            { value: "canada", label: "In Canada" },
            { value: "abroad", label: "Outside Canada" },
          ] },
          Q_ENGLISH,
          Q_FRENCH,
        ],
      },
      {
        title: "Your work experience",
        fields: [
          { id: "skillLevel", label: "What kind of work do you mainly do?", type: "single", options: SKILL },
          { id: "expYears", label: "How many years of skilled work experience do you have (last 10 years)?", type: "single", options: WORK_YEARS },
          { id: "expWhere", label: "Where did you gain that experience?", type: "single", options: [
            { value: "canada", label: "In Canada" },
            { value: "abroad", label: "Outside Canada" },
            { value: "both", label: "Both in Canada and abroad" },
            { value: "none", label: "I have no skilled experience yet" },
          ] },
          { id: "tradeCert", label: "Do you hold a trade certificate of qualification from a Canadian province?", type: "single", options: YESNO, showIf: (a) => val(a, "skillLevel") === "teer23" },
        ],
      },
      {
        title: "Your ties to Canada",
        fields: [
          { id: "jobOffer", label: "Do you have a job offer from a Canadian employer?", type: "single", options: [
            { value: "none", label: "Not yet" },
            { value: "offer", label: "Yes, a genuine job offer" },
            { value: "unsure", label: "In discussion / not sure" },
          ] },
          { id: "nomination", label: "Do you already have a provincial nomination?", type: "single", options: YESNO },
          { id: "familyTies", label: "Do you have close family who are Canadian citizens or permanent residents?", type: "single", options: [
            { value: "none", label: "No" },
            { value: "spouse", label: "Spouse or partner" },
            { value: "parent-child", label: "Parent or child" },
            { value: "sibling", label: "Sibling" },
          ] },
          { id: "provinceLink", label: "Have you ever studied or worked in a specific Canadian province?", help: "Provincial ties can open that province's nominee program.", type: "single", options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ] },
          { id: "provinceLinkWhich", label: "Which province was that?", help: "We don't handle Quebec ties.", type: "select", options: PROVINCE_REAL, showIf: (a) => val(a, "provinceLink") === "yes" },
          { id: "funds", label: "Roughly how much in settlement funds can you show?", help: "Federal Skilled Worker needs proof of funds unless you have a Canadian job offer.", type: "single", options: [
            { value: "lt15k", label: "Less than CAD 15,000" },
            { value: "15-30k", label: "CAD 15,000 to 30,000" },
            { value: "30k+", label: "More than CAD 30,000" },
          ] },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------- WORK */
  {
    id: "work",
    label: "Work in Canada",
    blurb: "Find the work permit route that fits your job, offer or background.",
    icon: "briefcase",
    sections: [
      {
        title: "About you",
        fields: [
          Q_AGE,
          Q_PASSPORT,
          Q_PROVINCE,
          { id: "status", label: "Are you currently inside or outside Canada?", help: "If you're in Canada, tell us your current status so we can match the right route.", type: "single", options: [
            { value: "outside", label: "Outside Canada" },
            { value: "visitor", label: "Visiting Canada" },
            { value: "worker", label: "Working in Canada" },
            { value: "student", label: "Studying in Canada" },
            { value: "graduate", label: "I recently graduated from a Canadian school" },
          ] },
          Q_CURRENT_PROVINCE,
          { id: "currentCountry", label: "Which country are you currently in?", help: "Some IEC youth-mobility agreements require you to apply from your home country.", type: "select", options: countryOptions, showIf: (a) => val(a, "status") === "outside" },
        ],
      },
      {
        title: "Your job offer",
        fields: [
          { id: "offerType", label: "Do you have a Canadian job offer?", type: "single", options: [
            { value: "none", label: "Not yet" },
            { value: "employer", label: "Yes, from a Canadian employer" },
            { value: "transfer", label: "Yes, a transfer within my company to Canada" },
            { value: "treaty", label: "Yes, a role under a trade agreement (US/Mexico, EU)" },
            { value: "unsure", label: "Yes, but I'm not sure of the type" },
          ] },
          { id: "jobSkill", label: "What is the skill level of the role?", type: "single", options: SKILL, showIf: (a) => val(a, "offerType") !== "none" },
        ],
      },
      {
        title: "Your background",
        fields: [
          Q_EDU,
          Q_ENGLISH,
          { id: "french", label: "How strong is your French?", help: "French speakers have an extra LMIA-exempt route outside Quebec.", type: "single", options: LANG("French") },
          { id: "expYears", label: "How many years of skilled work experience do you have?", type: "single", options: WORK_YEARS },
          { id: "partnerInCanada", label: "Is your spouse or partner a worker, student or PR in Canada (or applying)?", type: "single", options: YESNO },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------- SPONSOR (FAMILY) */
  {
    id: "sponsor",
    label: "Sponsor a partner or family",
    blurb: "Bring a spouse, common-law partner, child, parent or grandparent to live with you in Canada.",
    icon: "heart",
    sections: [
      {
        title: "Your situation",
        fields: [
          { id: "role", label: "What would you like to do?", type: "single", options: [
            { value: "sponsor", label: "I'm in Canada and want to sponsor a relative" },
            { value: "sponsored", label: "I'm abroad and want a relative in Canada to sponsor me" },
          ] },
          Q_PASSPORT,
          Q_CURRENT_PROVINCE,
          { id: "relationship", label: "Who is the relative you'd sponsor or be sponsored by?", help: "Spouse and common-law partner are the most common, and the most direct.", type: "single", options: [
            { value: "spouse", label: "Spouse or common-law partner" },
            { value: "conjugal", label: "Partner I can't live with or marry (conjugal)" },
            { value: "child", label: "Dependent child" },
            { value: "parent", label: "Parent or grandparent" },
            { value: "other", label: "Another relative" },
          ] },
          { id: "unionType", label: "What's your relationship status with them?", type: "single", options: [
            { value: "married", label: "We're legally married" },
            { value: "common-law", label: "We live together (common-law)" },
            { value: "not-yet", label: "Engaged or together, but not married or living together yet" },
          ], showIf: (a) => val(a, "relationship") === "spouse" },
          { id: "cohabit12", label: "Have you lived together continuously for at least 12 months?", help: "Common-law status needs 12 months of continuous cohabitation.", type: "single", options: YESNO, showIf: (a) => val(a, "relationship") === "spouse" && val(a, "unionType") === "common-law" },
        ],
      },
      {
        title: "About the sponsor",
        intro: "The sponsor is the person in Canada. These rules decide whether a sponsorship can go ahead.",
        fields: [
          { id: "sponsorStatus", label: "Is the sponsor a Canadian citizen or permanent resident?", type: "single", options: [
            { value: "citizen", label: "Canadian citizen" },
            { value: "pr", label: "Permanent resident" },
            { value: "neither", label: "Neither" },
          ] },
          { id: "sponsorAge", label: "Is the sponsor 18 or older?", type: "single", options: YESNO },
          { id: "sponsorWhere", label: "Where does the sponsor live?", type: "single", options: [
            { value: "in-canada", label: "In Canada" },
            { value: "abroad", label: "Outside Canada" },
          ] },
          { id: "socialAssistance", label: "Is the sponsor receiving social assistance (other than for a disability)?", type: "single", options: YESNO },
          { id: "sponsorBars", label: "Do any of these currently apply to the sponsor?", help: "These can legally prevent someone from sponsoring even if they're a citizen or PR. Select any that apply, or choose None of these.", type: "multi", options: [
            { value: "default", label: "Defaulted on a previous sponsorship undertaking" },
            { value: "loan", label: "Owes an overdue immigration loan or performance bond" },
            { value: "bankruptcy", label: "Is an undischarged bankrupt" },
            { value: "removal", label: "Is under a removal order" },
            { value: "criminal", label: "Has a serious criminal conviction" },
            { value: "none", label: "None of these apply", exclusive: true },
          ] },
        ],
      },
      {
        title: "Income (parents & grandparents)",
        fields: [
          { id: "meetsIncome", label: "Can the sponsor show they met the required income for the last 3 tax years?", help: "Parent and grandparent sponsorship has a minimum necessary income (MNI) test.", type: "single", options: YESNOUNSURE, showIf: (a) => val(a, "relationship") === "parent" },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------- BUSINESS */
  {
    id: "business",
    label: "Business immigration",
    blurb: "Start, buy or invest in a business as a route to permanent residence.",
    icon: "building",
    sections: [
      {
        title: "About you",
        fields: [
          Q_AGE,
          Q_PASSPORT,
          Q_IN_CANADA,
          Q_CURRENT_PROVINCE,
          Q_PROVINCE,
          Q_EDU,
          Q_ENGLISH,
        ],
      },
      {
        title: "Your business background",
        fields: [
          { id: "bizRole", label: "Which best describes you?", type: "single", options: [
            { value: "owner", label: "I own or co-own a business" },
            { value: "manager", label: "I'm a senior manager / executive" },
            { value: "neither", label: "Neither yet" },
          ] },
          { id: "mgmtYears", label: "How many years of business ownership or senior management experience do you have?", type: "single", options: [
            { value: "0", label: "None" },
            { value: "1-2", label: "1 to 2 years" },
            { value: "3+", label: "3 or more years" },
          ] },
          { id: "netWorth", label: "Roughly what is your personal net worth (assets minus debts)?", type: "single", options: [
            { value: "lt100k", label: "Less than CAD 100,000" },
            { value: "100-300k", label: "CAD 100,000 to 300,000" },
            { value: "300-600k", label: "CAD 300,000 to 600,000" },
            { value: "600k+", label: "More than CAD 600,000" },
          ] },
        ],
      },
      {
        title: "Your plan",
        fields: [
          { id: "bizType", label: "What kind of business move are you planning?", type: "single", options: [
            { value: "startup", label: "An innovative startup with a unique idea" },
            { value: "buy-run", label: "Start or buy a traditional business and run it" },
            { value: "invest", label: "Mainly invest, not run it day to day" },
            { value: "unsure", label: "Not sure yet" },
          ] },
          { id: "investFunds", label: "Roughly how much could you invest in a Canadian business?", type: "single", options: [
            { value: "lt100k", label: "Less than CAD 100,000" },
            { value: "100-200k", label: "CAD 100,000 to 200,000" },
            { value: "200k+", label: "More than CAD 200,000" },
          ] },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------- STUDY */
  {
    id: "study",
    label: "Study in Canada",
    blurb: "Check whether you look eligible for a Canadian study permit.",
    icon: "cap",
    sections: [
      {
        title: "About you",
        fields: [
          Q_AGE,
          Q_PASSPORT,
          Q_IN_CANADA,
          Q_CURRENT_PROVINCE,
          Q_EDU,
          Q_PROVINCE,
          Q_ENGLISH,
        ],
      },
      {
        title: "Your study plans",
        intro: "We help with the study permit itself; we don't place you in a school, so we won't ask what you want to study.",
        fields: [
          { id: "acceptance", label: "Do you have a letter of acceptance from a Canadian designated learning institution (DLI)?", type: "single", options: [
            { value: "yes", label: "Yes, I have an acceptance" },
            { value: "applied", label: "I've applied but not yet accepted" },
            { value: "no", label: "Not yet" },
          ] },
          { id: "studyLevel", label: "What level will you study at?", help: "Master's and doctoral students at public universities are now exempt from the Provincial Attestation Letter.", type: "single", options: [
            { value: "bachelor-college", label: "College or bachelor's (undergraduate)" },
            { value: "masters-doctoral", label: "Master's or doctorate (graduate)" },
            { value: "other", label: "Language, short course or other" },
          ], showIf: (a) => ["yes", "applied"].includes(val(a, "acceptance")) },
          { id: "funds", label: `Can you show enough money for tuition plus living costs (at least about CAD ${POLICY.studyLivingCostsCAD.toLocaleString()} for living costs, plus tuition)?`, type: "single", options: YESNOUNSURE },
          { id: "refused", label: "Have you ever been refused a Canadian study permit or visa?", type: "single", options: YESNO },
          { id: "intendLeave", label: "Can you show you'll have funds and ties to support a temporary stay?", help: "A study permit officer must be satisfied you'll respect its conditions.", type: "single", options: YESNOUNSURE },
        ],
      },
    ],
  },
];

export const PATH_BY_ID = Object.fromEntries(PATHS.map((p) => [p.id, p])) as Record<PathId, PathDef>;

/** Visible fields for a section given current answers (applies showIf). */
export function visibleFields(section: Section, a: Answers): Field[] {
  return section.fields.filter((f) => !f.showIf || f.showIf(a));
}

/** Province display names (excluding Quebec) for result messaging. */
export const PROVINCE_NAME: Record<string, string> = {
  AB: "Alberta", BC: "British Columbia", MB: "Manitoba", NB: "New Brunswick",
  NL: "Newfoundland and Labrador", NS: "Nova Scotia", ON: "Ontario",
  PE: "Prince Edward Island", SK: "Saskatchewan", NT: "Northwest Territories", YT: "Yukon",
};
