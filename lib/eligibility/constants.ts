/* ============================================================================
   SINGLE SOURCE OF TRUTH for volatile IRCC / PNP figures and program status.

   ⚠️  REVIEW QUARTERLY. These values change several times a year. When IRCC
   updates a figure or opens/closes a program, change it HERE and nowhere else,
   then bump `lastVerified`. To reopen a closed program, flip its boolean to true.

   Last verified: June 2026   ·   Next review due: September 2026
============================================================================ */
export const POLICY = {
  lastVerified: "June 2026",
  nextReview: "September 2026",

  /** Study-permit proof of funds: living costs for a single applicant, OUTSIDE
   *  Quebec, in addition to first-year tuition and travel. (CAD 22,895 from
   *  Sept 1 2025.) */
  studyLivingCostsCAD: 22895,

  /** Program intake status. Flip to true when IRCC reopens the program. */
  pgpOpenToNewIntake: false,            // Parents & Grandparents Program (closed for 2026)
  startUpVisaOpenToNewApplicants: false, // Start-up Visa (closed end of 2025; 2025 letters only, to 30 Jun 2026)
  selfEmployedOpenToNewApplicants: false, // Federal Self-Employed Persons Program (paused since Apr 2024)
} as const;

/** Standing caveat shown on every result: eligibility is not selection/approval,
 *  and figures/program status move. Keeps us on the right side of CICC rules. */
export const FRESHNESS_NOTE =
  "Being eligible isn't the same as being selected or approved, and some programs are capped or paused. Figures and program status change often; we confirm the current rules with you.";
