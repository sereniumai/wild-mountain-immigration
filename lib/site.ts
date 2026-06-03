// Wild Mountain Immigration, central site config (single source of truth)

export const site = {
  name: "Wild Mountain Immigration",
  legalName: "Wild Mountain Immigration Inc",
  tagline: "Stress-Free Canadian Immigration, Every Step of the Way",
  url: "https://wildmountainimmigration.com",
  phone: "+1 (587) 857-3692",
  phoneHref: "tel:+15878573692",
  email: "hello@wildmountainimmigration.com", // [TO FINALIZE]
  locality: "Canmore",
  region: "Alberta",
  regionCode: "AB",
  country: "Canada",
  rcicName: "Nicola Wightman",
  rcicNumber: "R706497",
  regulator: "College of Immigration and Citizenship Consultants (CICC)",
  ciccRegisterUrl: "https://college-ic.ca/protecting-the-public/find-an-immigration-consultant",
  founded: "2021",
  areasServed: ["Canmore", "Banff", "Bow Valley", "Cochrane", "Calgary", "Alberta"],
} as const;

// ---------------------------------------------------------------------------
// Navigation model
// A NavNode can nest to any depth. Each top-level Section drives one primary
// nav item AND the scoped sidebar tree shown on every page inside that section.
// ---------------------------------------------------------------------------
export type NavNode = { label: string; href: string; children?: NavNode[] };
export type NavSection = { label: string; href: string; icon: string; tree: NavNode[] };

export const navSections: NavSection[] = [
  {
    label: "Immigrate",
    href: "/immigrate",
    icon: "compass",
    tree: [
      { label: "Immigrate to Canada", href: "/immigrate" },
      { label: "Permanent Residence explained", href: "/immigrate/permanent-residence" },
      {
        label: "Express Entry",
        href: "/express-entry",
        children: [
          { label: "Canadian Experience Class (CEC)", href: "/express-entry/canadian-experience-class" },
          { label: "Federal Skilled Worker (FSW)", href: "/express-entry/federal-skilled-worker" },
          { label: "Federal Skilled Trades (FST)", href: "/express-entry/federal-skilled-trades" },
        ],
      },
      {
        label: "Provincial Nominee Programs (PNPs)",
        href: "/pnp",
        children: [
          {
            label: "Alberta (AAIP)",
            href: "/alberta-immigration",
            children: [
              { label: "Opportunity Stream", href: "/alberta-immigration/opportunity-stream" },
              { label: "Alberta Express Entry Stream", href: "/alberta-immigration/express-entry-stream" },
              { label: "Rural Renewal Stream", href: "/alberta-immigration/rural-renewal-stream" },
              { label: "Dedicated Health Care Pathway", href: "/alberta-immigration/dedicated-health-care-pathway" },
              { label: "Accelerated Tech Pathway", href: "/alberta-immigration/accelerated-tech-pathway" },
              { label: "Tourism & Hospitality Stream", href: "/alberta-immigration/tourism-hospitality-stream" },
              { label: "Law Enforcement Pathway", href: "/alberta-immigration/law-enforcement-pathway" },
              { label: "Rural Entrepreneur Stream", href: "/alberta-immigration/rural-entrepreneur-stream" },
              { label: "Graduate Entrepreneur Stream", href: "/alberta-immigration/graduate-entrepreneur-stream" },
              { label: "Foreign Graduate Entrepreneur Stream", href: "/alberta-immigration/foreign-graduate-entrepreneur-stream" },
              { label: "Farm Stream", href: "/alberta-immigration/farm-stream" },
            ],
          },
          {
            label: "British Columbia (BC PNP)",
            href: "/pnp/british-columbia",
            children: [
              { label: "Skilled Worker", href: "/pnp/british-columbia/skilled-worker" },
              { label: "BC PNP Tech", href: "/pnp/british-columbia/tech" },
              { label: "Health Authority", href: "/pnp/british-columbia/health-authority" },
              { label: "International Graduate", href: "/pnp/british-columbia/international-graduate" },
              { label: "Express Entry BC", href: "/pnp/british-columbia/express-entry-bc" },
              { label: "Entrepreneur Immigration", href: "/pnp/british-columbia/entrepreneur-immigration" },
            ],
          },
          {
            label: "Saskatchewan (SINP)",
            href: "/pnp/saskatchewan",
            children: [
              { label: "International Skilled Worker", href: "/pnp/saskatchewan/international-skilled-worker" },
              { label: "Saskatchewan Experience", href: "/pnp/saskatchewan/saskatchewan-experience" },
              { label: "Tech Talent Pathway", href: "/pnp/saskatchewan/tech-talent-pathway" },
              { label: "Health Talent Pathway", href: "/pnp/saskatchewan/health-talent-pathway" },
              { label: "Agriculture Talent Pathway", href: "/pnp/saskatchewan/agriculture-talent-pathway" },
              { label: "Entrepreneur", href: "/pnp/saskatchewan/entrepreneur" },
              { label: "Farm", href: "/pnp/saskatchewan/farm" },
            ],
          },
          {
            label: "Manitoba (MPNP)",
            href: "/pnp/manitoba",
            children: [
              { label: "Skilled Worker in Manitoba", href: "/pnp/manitoba/skilled-worker-in-manitoba" },
              { label: "Skilled Worker Overseas", href: "/pnp/manitoba/skilled-worker-overseas" },
              { label: "International Education Stream", href: "/pnp/manitoba/international-education-stream" },
              { label: "Business Investor Stream", href: "/pnp/manitoba/business-investor-stream" },
            ],
          },
          {
            label: "Ontario (OINP)",
            href: "/pnp/ontario",
            children: [
              { label: "Employer Job Offer", href: "/pnp/ontario/employer-job-offer" },
              { label: "Human Capital Priorities", href: "/pnp/ontario/human-capital-priorities" },
              { label: "French-Speaking Skilled Worker", href: "/pnp/ontario/french-speaking-skilled-worker" },
              { label: "Masters Graduate", href: "/pnp/ontario/masters-graduate" },
              { label: "PhD Graduate", href: "/pnp/ontario/phd-graduate" },
              { label: "Skilled Trades", href: "/pnp/ontario/skilled-trades" },
              { label: "Entrepreneur", href: "/pnp/ontario/entrepreneur" },
            ],
          },
          {
            label: "Nova Scotia (NSNP)",
            href: "/pnp/nova-scotia",
            children: [
              { label: "Skilled Worker", href: "/pnp/nova-scotia/skilled-worker" },
              { label: "Occupation in Demand", href: "/pnp/nova-scotia/occupation-in-demand" },
              { label: "Experience: Express Entry", href: "/pnp/nova-scotia/experience-express-entry" },
              { label: "Labour Market Priorities", href: "/pnp/nova-scotia/labour-market-priorities" },
              { label: "Physician", href: "/pnp/nova-scotia/physician" },
              { label: "Entrepreneur", href: "/pnp/nova-scotia/entrepreneur" },
              { label: "International Graduate Entrepreneur", href: "/pnp/nova-scotia/international-graduate-entrepreneur" },
            ],
          },
          {
            label: "New Brunswick (NBPNP)",
            href: "/pnp/new-brunswick",
            children: [
              { label: "Skilled Worker", href: "/pnp/new-brunswick/skilled-worker" },
              { label: "Express Entry Labour Market", href: "/pnp/new-brunswick/express-entry-labour-market" },
              { label: "Strategic Initiative", href: "/pnp/new-brunswick/strategic-initiative" },
              { label: "Critical Worker Pilot", href: "/pnp/new-brunswick/critical-worker-pilot" },
              { label: "Business Immigration", href: "/pnp/new-brunswick/business-immigration" },
            ],
          },
          {
            label: "Prince Edward Island (PEI PNP)",
            href: "/pnp/prince-edward-island",
            children: [
              { label: "Express Entry", href: "/pnp/prince-edward-island/express-entry" },
              { label: "Labour Impact", href: "/pnp/prince-edward-island/labour-impact" },
              { label: "Business Impact", href: "/pnp/prince-edward-island/business-impact" },
            ],
          },
          {
            label: "Newfoundland & Labrador (NLPNP)",
            href: "/pnp/newfoundland-and-labrador",
            children: [
              { label: "Skilled Worker", href: "/pnp/newfoundland-and-labrador/skilled-worker" },
              { label: "Express Entry Skilled Worker", href: "/pnp/newfoundland-and-labrador/express-entry-skilled-worker" },
              { label: "International Graduate", href: "/pnp/newfoundland-and-labrador/international-graduate" },
              { label: "Priority Skills", href: "/pnp/newfoundland-and-labrador/priority-skills" },
              { label: "International Entrepreneur", href: "/pnp/newfoundland-and-labrador/international-entrepreneur" },
              { label: "Graduate Entrepreneur", href: "/pnp/newfoundland-and-labrador/graduate-entrepreneur" },
            ],
          },
          {
            label: "Yukon (YNP)",
            href: "/pnp/yukon",
            children: [
              { label: "Skilled Worker", href: "/pnp/yukon/skilled-worker" },
              { label: "Critical Impact Worker", href: "/pnp/yukon/critical-impact-worker" },
              { label: "Express Entry", href: "/pnp/yukon/express-entry" },
              { label: "Business Nominee", href: "/pnp/yukon/business-nominee" },
              { label: "Community Pilot", href: "/pnp/yukon/community-pilot" },
            ],
          },
          {
            label: "Northwest Territories (NTNP)",
            href: "/pnp/northwest-territories",
            children: [
              { label: "Employer-Driven Skilled Worker", href: "/pnp/northwest-territories/employer-driven-skilled-worker" },
              { label: "Express Entry", href: "/pnp/northwest-territories/express-entry" },
              { label: "Entry-Level / Semi-Skilled", href: "/pnp/northwest-territories/entry-level-semi-skilled" },
              { label: "Business", href: "/pnp/northwest-territories/business" },
              { label: "Francophone", href: "/pnp/northwest-territories/francophone" },
            ],
          },
        ],
      },
      { label: "Atlantic Immigration Program", href: "/atlantic-immigration-program" },
      { label: "Rural & Northern Immigration Pilot", href: "/rural-northern-immigration-pilot" },
      { label: "Caregiver Pathways", href: "/caregiver-program-canada" },
      { label: "Start-up Visa", href: "/start-up-visa" },
      { label: "Self-Employed Persons Program", href: "/self-employed-immigration" },
      {
        label: "Your PR Card & Status",
        href: "/immigrate/pr-card",
        children: [
          { label: "PR Card", href: "/immigrate/pr-card" },
          { label: "Renew or Replace a PR Card", href: "/immigrate/pr-card-renewal" },
          { label: "Residency Obligation (730 days)", href: "/immigrate/residency-obligation" },
        ],
      },
      {
        label: "Canadian Citizenship",
        href: "/citizenship",
        children: [
          { label: "How to Apply for Citizenship", href: "/citizenship/citizenship-application" },
          { label: "Citizenship Requirements", href: "/citizenship/requirements" },
          { label: "Citizenship Test", href: "/citizenship/citizenship-test" },
          { label: "Citizenship by Descent", href: "/citizenship/citizenship-by-descent" },
        ],
      },
      {
        label: "Move to Canada by country",
        href: "/move-to-canada",
        children: [
          { label: "From the USA", href: "/move-to-canada/from-the-usa" },
          { label: "From the UK", href: "/move-to-canada/from-the-uk" },
          { label: "From India", href: "/move-to-canada/from-india" },
          { label: "From the Philippines", href: "/move-to-canada/from-the-philippines" },
          { label: "From Nigeria", href: "/move-to-canada/from-nigeria" },
          { label: "From Australia", href: "/move-to-canada/from-australia" },
          { label: "From Ireland", href: "/move-to-canada/from-ireland" },
          { label: "From South Africa", href: "/move-to-canada/from-south-africa" },
          { label: "From the UAE", href: "/move-to-canada/from-the-uae" },
          { label: "From Pakistan", href: "/move-to-canada/from-pakistan" },
        ],
      },
    ],
  },
  {
    label: "Work",
    href: "/work-permits",
    icon: "briefcase",
    tree: [
      { label: "Work in Canada", href: "/work-permits" },
      {
        label: "Work without a Work Permit",
        href: "/work-permits/work-without-a-permit",
        children: [
          { label: "Business Visitors", href: "/visit/business-visitor" },
        ],
      },
      {
        label: "Temporary Foreign Worker Program",
        href: "/work-permits/temporary-foreign-worker-program",
        children: [
          { label: "Labour Market Impact Assessment (LMIA)", href: "/work-permits/lmia" },
          { label: "Global Talent Stream (GTS)", href: "/work-permits/global-talent-stream" },
        ],
      },
      {
        label: "International Mobility Program",
        href: "/work-permits/international-mobility-program",
        children: [
          { label: "Intra-Company Transfers", href: "/work-permits/intra-company-transfer" },
          { label: "CUSMA Work Permit", href: "/work-permits/cusma" },
          { label: "CETA Work Permit", href: "/work-permits/ceta" },
        ],
      },
      {
        label: "Open Work Permits",
        href: "/work-permits/open-work-permit",
        children: [
          { label: "Post-Graduation Work Permit (PGWP)", href: "/work-permits/pgwp" },
          { label: "International Experience Canada (IEC)", href: "/work-permits/international-experience-canada" },
          { label: "Spousal Open Work Permit (SOWP)", href: "/family-sponsorship/spousal-open-work-permit" },
          { label: "Bridging Open Work Permit (BOWP)", href: "/work-permits/bridging-open-work-permit" },
        ],
      },
    ],
  },
  {
    label: "Study",
    href: "/study-permit",
    icon: "cap",
    tree: [
      { label: "Study Permits in Canada", href: "/study-permit" },
      { label: "Provincial Attestation Letter (PAL)", href: "/study-permit/provincial-attestation-letter" },
      { label: "Proof of Funds", href: "/study-permit/proof-of-funds" },
      { label: "Working While Studying", href: "/study-permit/work-while-studying" },
      { label: "Study to Permanent Residence", href: "/study-permit/study-to-pr" },
    ],
  },
  {
    label: "Sponsor Family",
    href: "/family-sponsorship",
    icon: "heart",
    tree: [
      { label: "Family Sponsorship", href: "/family-sponsorship" },
      { label: "Who Can Sponsor (Eligibility)", href: "/family-sponsorship/eligibility-requirements" },
      {
        label: "Spousal Sponsorship",
        href: "/family-sponsorship/spousal-sponsorship",
        children: [
          { label: "Inland Spousal Sponsorship", href: "/family-sponsorship/spousal-sponsorship/inland" },
          { label: "Outland Spousal Sponsorship", href: "/family-sponsorship/spousal-sponsorship/outland" },
          { label: "Spousal Open Work Permit (SOWP)", href: "/family-sponsorship/spousal-open-work-permit" },
        ],
      },
      { label: "Conjugal Partner Sponsorship", href: "/family-sponsorship/conjugal-partner" },
      { label: "Child or Dependent Sponsorship", href: "/family-sponsorship/dependent-children" },
      {
        label: "Parents & Grandparents (PGP)",
        href: "/family-sponsorship/parents-grandparents",
        children: [
          { label: "Super Visa", href: "/family-sponsorship/super-visa" },
        ],
      },
    ],
  },
  {
    label: "Visit",
    href: "/visit",
    icon: "plane",
    tree: [
      { label: "Visit Canada", href: "/visit" },
      { label: "Visitor Visa (TRV)", href: "/visit/visitor-visa" },
      { label: "Electronic Travel Authorization (eTA)", href: "/visit/eta" },
      { label: "Business Visitor", href: "/visit/business-visitor" },
      { label: "Super Visa", href: "/family-sponsorship/super-visa" },
    ],
  },
  {
    label: "Resources",
    href: "/tools",
    icon: "compass",
    tree: [
      { label: "Free Tools", href: "/tools" },
      { label: "Eligibility Checker", href: "/tools/eligibility" },
      { label: "CRS Calculator", href: "/tools/crs-calculator" },
      { label: "AAIP Calculator", href: "/tools/aaip-calculator" },
      { label: "IRCC Processing Times", href: "/tools/processing-times" },
      {
        label: "Immigration guides",
        href: "/express-entry/educational-credential-assessment",
        children: [
          { label: "Educational Credential Assessment (ECA)", href: "/express-entry/educational-credential-assessment" },
          { label: "NOC & TEER explained", href: "/express-entry/noc-teer" },
          { label: "Language requirements (CLB)", href: "/express-entry/language-requirements" },
        ],
      },
      {
        label: "Draw trackers",
        href: "/express-entry/draws",
        children: [
          { label: "Express Entry draws", href: "/express-entry/draws" },
          { label: "AAIP draws", href: "/alberta-immigration/draws" },
          { label: "PNP draws", href: "/pnp/draws" },
        ],
      },
    ],
  },
];

// Primary top nav = the section roots, in order.
export const nav: { label: string; href: string }[] = navSections.map((s) => ({ label: s.label, href: s.href }));

// The "About" top-nav item: opens the left side panel (desktop) / accordion (mobile).
// Kept out of navSections so /about /services /fees still render full-width.
export const aboutSection: NavSection = {
  label: "About",
  href: "/about",
  icon: "compass",
  tree: [
    { label: "About us", href: "/about" },
    { label: "Our services", href: "/services" },
    { label: "Our fees", href: "/fees" },
  ],
};

// Quick links shown in the red top bar (desktop) + mobile menu.
export const utilityNav: { label: string; href: string }[] = [
  { label: "Our Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export const services = [
  {
    title: "Express Entry",
    desc: "The fastest federal route to permanent residence, we build your strongest CRS profile.",
    href: "/express-entry",
    icon: "rocket",
  },
  {
    title: "Alberta (AAIP)",
    desc: "Our home turf. Nominate through Alberta's provincial program, healthcare, tech, rural & more.",
    href: "/alberta-immigration",
    icon: "mountain",
  },
  {
    title: "Family & Super Visa",
    desc: "Reunite with your spouse, partner, parents or grandparents, sponsorship and Super Visas.",
    href: "/family-sponsorship",
    icon: "heart",
  },
  {
    title: "Work Permits",
    desc: "LMIA, employer-specific and open work permits, plus the PGWP for graduates.",
    href: "/work-permits",
    icon: "briefcase",
  },
  {
    title: "Study Permits",
    desc: "Study in Canada and build a pathway to permanent residence after graduation.",
    href: "/study-permit",
    icon: "cap",
  },
  {
    title: "BC PNP",
    desc: "British Columbia's Provincial Nominee Program, skilled worker, tech and entrepreneur streams to PR in BC.",
    href: "/pnp/british-columbia",
    icon: "map",
  },
] as const;

// Primary call to action. Every "Get started" button routes to the contact page.
// We do not surface consultation pricing anywhere except spousal sponsorship pages,
// which add their own free-consultation note inline.
export const consult = {
  href: "/contact",
  label: "Get started",
  note: "",
} as const;

// Convenience alias for clarity in newer code.
export const cta = consult;

export const faqs = [
  {
    q: "Are you an immigration consultant in Canmore?",
    a: "Yes. Wild Mountain Immigration is a CICC-regulated immigration consultancy based in Canmore, Alberta, in the heart of the Bow Valley. We help Canmore and Bow Valley clients, including the town's tourism and hospitality workers, move from work permits to permanent residence through routes like the Alberta Tourism & Hospitality Stream, Express Entry and the wider AAIP. All of our work is done online by video call and phone, so you don't need to visit an office.",
  },
  {
    q: "Do I really need an immigration consultant, or can I apply myself?",
    a: "You can apply yourself, but Canadian immigration is detailed and unforgiving of small mistakes, and a single error can cost you months or a refusal. As a licensed RCIC, Nicola builds the strongest possible application and flags issues before they become problems. We also offer a lower-cost File Review tier if you'd rather do the work yourself and have an expert check it.",
  },
  {
    q: "What is an RCIC and how do I know you're licensed?",
    a: "An RCIC is a Regulated Canadian Immigration Consultant, licensed and governed by the College of Immigration and Citizenship Consultants (CICC). Nicola Wightman's licence number is R706497, and you can verify her standing on the CICC public register at any time, we encourage it.",
  },
  {
    q: "Do I have to live in Canmore to work with you?",
    a: "Not at all. We're based in Canmore, Alberta and love working with clients across the Bow Valley and Calgary, but we represent clients right across Canada and around the world remotely, by video call and phone.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on your case and the service you choose: full File Management, where we handle everything from start to finish, or our lower-cost File Review, where you prepare your own application and our RCIC checks it before you submit. We set out clear, fixed-scope fees in writing up front, so there are never any surprises.",
  },
  {
    q: "What's the difference between File Management and File Review?",
    a: "File Management is full service, we handle every form, document and submission for you. File Review is a lower-cost option where you prepare your own application and Nicola reviews it for errors and missed opportunities before you submit.",
  },
  {
    q: "Which provinces and programs do you cover?",
    a: "All of them (except Quebec). We handle federal Express Entry, the Alberta Advantage Immigration Program (AAIP), the BC PNP and other provincial nominee programs, family and spousal sponsorship, Super Visas, work and study permits, and citizenship, guiding you to the route that best fits your goals.",
  },
] as const;
