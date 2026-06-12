import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/pnp/british-columbia/express-entry-bc";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Express Entry BC (EEBC), BC PNP +600 CRS Guide",
  titleAbsolute: "Express Entry BC (EEBC) 2026: BC PNP +600 CRS",
  description:
    "Express Entry BC (EEBC): the Express-Entry-aligned BC PNP route. Register in SIRS, get invited, and a BC nomination adds 600 CRS. RCIC-led guide.",
  path: PATH,
  keywords: [
    "Express Entry BC",
    "EEBC",
    "BC PNP Express Entry",
    "BC PNP +600 CRS",
    "SIRS score",
    "how to apply Express Entry BC",
  ],
});

const faqs = [
  {
    q: "What is Express Entry BC (EEBC)?",
    a: "Express Entry BC (EEBC) is the enhanced, Express-Entry-aligned option within British Columbia's Skills Immigration division, chiefly the Skilled Worker and Health Authority streams. To use it you need an active federal Express Entry profile and a qualifying BC job offer. You still register in the Skills Immigration Registration System (SIRS), and if your score earns an invitation, a BC nomination adds 600 points to your federal CRS. The +600 sits well above recent federal Express Entry cut-offs, though IRCC still issues the Invitation to Apply in a following draw. It is enhanced because the provincial nomination plugs directly into the federal system, rather than running as a separate paper application.",
  },
  {
    q: "How many CRS points does an Express Entry BC nomination add?",
    a: "An Express Entry BC nomination adds 600 points to your federal Comprehensive Ranking System (CRS) score. Because the federal core score tops out well below 600, the boost lifts most eligible profiles well above the cut-off in the next provincial-nominee Express Entry draw, though IRCC still issues the Invitation to Apply for permanent residence. The 600-point boost is what makes EEBC the fastest BC PNP route, but you only receive it once BC actually nominates you, not when you register or get invited.",
  },
  {
    q: "Do I need an Express Entry profile for EEBC?",
    a: "Yes. Express Entry BC only works if you already hold an active federal Express Entry profile and qualify under a federal program, Canadian Experience Class, Federal Skilled Worker or Federal Skilled Trades. You enter your federal Express Entry profile number and validation code into your BC PNP registration so the province can attach the nomination to your profile. If you do not have a valid Express Entry profile, you cannot use the EEBC option, though you may still qualify for the same BC stream as a base (non-enhanced) applicant.",
  },
  {
    q: "How does SIRS scoring work for Express Entry BC?",
    a: "The Skills Immigration Registration System (SIRS) ranks registrants out of 200 points across two groups: economic factors (your job, hourly wage, skill level and the region of the role) and human-capital factors (work experience, education and language). Hourly wage is the single largest factor, and jobs outside Metro Vancouver tend to score higher because BC aims to direct a share of nominations beyond Greater Vancouver. Your SIRS score decides whether BC invites you; it is separate from your federal CRS, which is where the +600 nomination later lands.",
  },
  {
    q: "Does Express Entry BC need a job offer?",
    a: "Yes, for the streams that use EEBC. The Skilled Worker stream requires an indeterminate (permanent), full-time job offer from an eligible BC employer, and the Health Authority stream runs through a BC public health authority. A qualifying BC job offer is therefore part of EEBC eligibility, this is different from some other provinces' Express Entry streams that can select from the federal pool without an offer. We can review your offer and profile to confirm the route fits before you register.",
  },
  {
    q: "Is EEBC faster than a base BC PNP nomination?",
    a: "Generally, yes. With Express Entry BC, the +600 CRS leads to a federal Invitation to Apply and an online permanent-residence application that IRCC processes in roughly six months. A base (non-enhanced) BC PNP nomination instead leads to a separate, paper-based PR application to IRCC, which typically takes longer. The registration and SIRS invitation steps are the same for both; the difference is what happens after nomination. If you qualify for Express Entry, the enhanced EEBC route is usually the faster path to PR.",
  },
  {
    q: "Does an EEBC invitation guarantee permanent residence?",
    a: "No. An invitation to apply to the BC PNP lets you submit a nomination application, it is not a nomination and not permanent residence. BC can still refuse if you do not meet every requirement, and even after a nomination and the +600 CRS, IRCC makes the final permanent-residence decision on medical, security and admissibility grounds. Meeting the basic eligibility no longer guarantees an invitation either, because BC's reduced 2026 allocation has concentrated selection on priority occupations. We build the strongest possible application.",
  },
];

export default function ExpressEntryBcPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Express Entry BC (EEBC), The Enhanced BC PNP Route Explained (2026)",
            description:
              "Express Entry BC (EEBC): the Express-Entry-aligned BC PNP route. Register in SIRS, get invited, and a BC nomination adds 600 CRS. RCIC-led guide.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Express Entry BC (EEBC) application support",
            description:
              "Express Entry BC (EEBC): the Express-Entry-aligned BC PNP route. Register in SIRS, get invited, and a BC nomination adds 600 CRS. RCIC-led guide.",
            path: PATH,
            serviceType: "Express Entry BC immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="British Columbia (BC PNP), Enhanced Route"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "British Columbia (BC PNP)", path: "/pnp/british-columbia" },
          { name: "Express Entry BC", path: PATH },
        ]}
        title={<>Express Entry BC: <span className="text-brand">the +600 CRS route</span></>}
        lede={
          <p>
            <strong>Express Entry BC</strong> is the Express-Entry-aligned route within BC&apos;s Skills Immigration:
            register in SIRS, get invited, and a BC nomination adds 600 CRS to your federal profile. It needs an active
            Express Entry profile and a qualifying BC job offer.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Calculator className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">See where the +600 lands</h2>
              <p className="mt-1.5 text-sm text-ink-soft">Express Entry BC only helps if you have a federal profile. Check your current CRS first, then see what a 600-point nomination does.</p>
              <Button href="/tools/crs-calculator" className="mt-4 w-full" withArrow>Calculate my CRS</Button>
              <Button href="/contact" className="mt-3 w-full" variant="secondary">Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province's PNP compared" },
                { label: "British Columbia (BC PNP)", href: "/pnp/british-columbia", note: "Every BC stream explained" },
                { label: "BC PNP Skilled Worker", href: "/pnp/british-columbia/skilled-worker", note: "The main stream behind EEBC" },
                { label: "Express Entry", href: "/express-entry", note: "The federal system EEBC plugs into" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "Where the +600 lands" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Express Entry BC (EEBC) is the enhanced, Express Entry aligned option within British Columbia's Skilled Worker and Health Authority streams. It suits candidates who hold an active federal Express Entry profile and a qualifying B.C. job offer, then register in the Skills Immigration Registration System (SIRS). An EEBC nomination adds 600 CRS points to your federal profile, well above recent federal cut-offs. That boost makes it the fastest BC route to permanent residence."
            items={[
              <><strong>Express Entry BC (EEBC)</strong> is the <strong>enhanced</strong>, Express-Entry-aligned option within BC&apos;s Skilled Worker and Health Authority streams.</>,
              <>A BC nomination through EEBC adds <strong>600 CRS points</strong> to your federal profile, well above recent federal cut-offs.</>,
              <>You still <strong>register in SIRS</strong> (scored out of 200) and must be invited; the +600 only attaches once BC <em>nominates</em> you.</>,
              <>It requires an <strong>active federal Express Entry profile</strong> AND a qualifying <strong>BC job offer</strong>.</>,
              <>EEBC is the <strong>fastest BC route</strong>, an enhanced PR application is processed in roughly six months versus a longer base, paper route.</>,
            ]}
          />

          <h2>What is Express Entry BC?</h2>
          <p>
            <strong>Express Entry BC (EEBC)</strong> is the enhanced option within British Columbia&apos;s Skills
            Immigration division, available chiefly through the{" "}
            <a href="/pnp/british-columbia/skilled-worker">BC PNP Skilled Worker</a> stream and the Health Authority
            stream. &ldquo;Enhanced&rdquo; means it is wired into the federal{" "}
            <a href="/express-entry">Express Entry</a> system: you register in BC&apos;s points-based system, BC invites
            you, and a provincial nomination then adds <strong>600 points</strong> to your federal Comprehensive Ranking
            System (CRS) score.</p>
          <p>According to welcomebc.ca, the program is divided into Skills Immigration and Entrepreneur
            Immigration, and only specific Skills Immigration streams offer the EEBC enhanced option (source:
            welcomebc.ca, May 2026).
          </p>
          <p>
            The mechanics are simple but easy to mis-state. You need an <strong>active federal Express Entry profile</strong>{" "}
            and a qualifying <strong>BC job offer</strong>. You submit a registration in the{" "}
            <strong>Skills Immigration Registration System (SIRS)</strong>; if your score earns an invitation, you apply
            for a nomination; and only once BC <em>nominates</em> you do the 600 CRS points attach to your federal profile.
            That +600 is the defining advantage of an enhanced route, and it sits well above the recent federal CRS cut-off.
            IRCC still issues the Invitation to Apply in the next provincial-nominee Express Entry draw.
          </p>
          <Callout type="brand" title="Enhanced vs base, the one fact that matters">
            Only an <strong>enhanced</strong> nomination adds CRS points. Express Entry BC is enhanced (+600 CRS) and runs
            through the federal pool. A <em>base</em> BC PNP nomination adds no CRS, it leads to a separate, paper-based
            permanent-residence application to IRCC. The SIRS registration step is the same for both.
          </Callout>

          <h2>How does SIRS scoring work for EEBC?</h2>
          <p>
            Express Entry BC is not a shortcut around BC&apos;s ranking, you still compete in the{" "}
            <strong>Skills Immigration Registration System (SIRS)</strong>. SIRS scores your registration out of{" "}
            <strong>200 points</strong> across two groups. <strong>Economic factors</strong> cover your job: your hourly
            wage (the single largest factor), the skill level of the occupation and the region of the role.{" "}
            <strong>Human-capital factors</strong> cover you: work experience, education and language ability. BC then
            issues invitations to the highest-ranked registrants in periodic draws.
          </p>
          <DataTable
            headers={["Factor group", "What counts", "Notes"]}
            rows={[
              ["Economic, wage", "Hourly wage of your BC job offer", "The single largest SIRS factor"],
              ["Economic, skill & region", "Occupation skill level; region of the job", "Jobs outside Metro Vancouver tend to score higher"],
              ["Human capital, experience", "Directly related work experience", "More qualifying months scores higher"],
              ["Human capital, education", "Highest credential (ECA for foreign study)", "Canadian credentials can score extra"],
              ["Human capital, language", "CLB/NCLC from an approved test", "Tested via IELTS, CELPIP or TEF/TCF"],
            ]}
            caption="How SIRS scores an Express Entry BC registration, out of 200 (welcomebc.ca, May 2026). Cut-offs change every draw, verify before relying on a score."
          />
          <p>
            Keep the two numbers separate. Your <strong>SIRS score</strong> (out of 200) decides whether BC{" "}
            <em>invites</em> you. Your federal <strong>CRS</strong> is a different score entirely, it is where the +600
            nomination later lands. A strong CRS does not earn a SIRS invitation, and a strong SIRS score does nothing for
            your federal profile until BC nominates you. Use our{" "}
            <a href="/tools/crs-calculator">free CRS calculator</a> to see where your federal score sits before the boost.
          </p>

          <h2>Who is eligible for Express Entry BC?</h2>
          <p>
            EEBC eligibility stacks the federal Express Entry minimums on top of a BC stream&apos;s requirements. At a
            minimum you must:
          </p>
          <ul>
            <li>hold an <strong>active federal Express Entry profile</strong> and qualify under a federal program, Canadian Experience Class, Federal Skilled Worker or Federal Skilled Trades;</li>
            <li>have a valid Express Entry <strong>profile number and validation code</strong> to enter in your BC registration;</li>
            <li>meet a BC Skills Immigration stream that offers EEBC, typically <strong>Skilled Worker</strong> or <strong>Health Authority</strong>;</li>
            <li>hold a qualifying <strong>BC job offer</strong> (indeterminate and full-time for Skilled Worker; through a public health authority for Health Authority); and</li>
            <li>meet the stream&apos;s work-experience, language and (where applicable) education requirements.</li>
          </ul>
          <p>
            A qualifying BC job offer is part of EEBC eligibility, this is a key difference from some other provinces&apos;
            Express Entry streams that can select skilled workers from the federal pool without an offer. If you qualify for
            the BC stream but not for federal Express Entry, you can still register, but as a <strong>base</strong>{" "}
            (non-enhanced) applicant without the +600.
          </p>
          <p>
            One more point worth stressing: your Express Entry profile must stay <strong>active throughout</strong> the
            process. If it expires or is withdrawn before BC nominates you, the enhanced link breaks and the +600 cannot be
            applied. Keep your language results, credential assessment and profile details current, and refresh the profile
            before it lapses. Because BC&apos;s <strong>2026 allocation was cut to roughly 5,254 nominations</strong>{" "}
            (source: welcomebc.ca / IRCC, May 2026), selection now favours BC&apos;s highest-priority occupations, so a
            well-built profile matters more than ever.
          </p>

          <h2>EEBC vs a base BC PNP nomination</h2>
          <p>
            The same BC stream can lead to either an enhanced (EEBC) or a base nomination, the difference is whether you
            hold a federal Express Entry profile. It changes your whole timeline and your final application.
          </p>
          <DataTable
            headers={["Feature", "Express Entry BC (enhanced)", "Base nomination"]}
            rows={[
              ["Federal Express Entry profile", "Required (active, with validation code)", "Not required"],
              ["CRS effect of nomination", "+600 CRS points", "None (no CRS involved)"],
              ["After nomination", "Federal ITA, then online PR application", "Separate IRCC paper PR application"],
              ["IRCC processing (typical)", "~6 months", "Generally longer"],
              ["SIRS registration", "Required, scored out of 200", "Required, scored out of 200"],
              ["Job offer", "Required (Skilled Worker / Health Authority)", "Required (Skilled Worker / Health Authority)"],
            ]}
            caption="Express Entry BC vs a base BC PNP nomination (welcomebc.ca, May 2026). Rules and timelines change, verify before applying."
          />
          <Callout type="info" title="An invitation is not a nomination">
            A SIRS invitation lets you <em>apply</em> for a nomination, it is not a nomination and not permanent residence.
            BC can still refuse your application, and even after a nomination and the +600 CRS, IRCC makes the final
            permanent-residence decision. Treat an invitation as the start of the provincial stage, not the finish line.
          </Callout>

          <h2>How to apply for Express Entry BC</h2>
          <p>
            Because BC selects from its SIRS pool, &ldquo;applying&rdquo; means making yourself visible and competitive,
            then moving quickly once invited. The sequence runs like this:
          </p>
          <Steps
            steps={[
              { title: "Create your Express Entry profile", desc: "Build an active federal Express Entry profile under CEC, FSW or FST. You will need its profile number and validation code for EEBC. Check your CRS with our free calculator." },
              { title: "Confirm a qualifying BC job offer", desc: "Secure an indeterminate, full-time offer from an eligible BC employer (Skilled Worker), or a role through a BC public health authority (Health Authority)." },
              { title: "Register in SIRS", desc: "Submit a free Skills Immigration registration, selecting the EEBC option. SIRS scores you out of 200, wage, skill level, region, experience, education and language." },
              { title: "Receive an invitation", desc: "If your SIRS score clears the draw cut-off, BC invites you to apply for a nomination. Eligibility alone does not guarantee an invitation under BC's reduced 2026 allocation." },
              { title: "Apply and get nominated", desc: "Submit a complete nomination application with supporting documents and pay the provincial fee. On approval, BC nominates you and the +600 CRS attaches to your federal profile." },
              { title: "Receive an ITA and apply to IRCC", desc: "With +600, you receive a federal Invitation to Apply, then file your online PR application. IRCC makes the final decision in roughly six months." },
            ]}
          />
          <p>
            On fees, SIRS registration is <strong>free</strong>, and the Skills Immigration nomination application fee is{" "}
            <strong>$1,750</strong> as of January 22, 2026 (source: welcomebc.ca). These provincial amounts are separate
            from the IRCC permanent-residence fees you pay at the federal stage, and all figures change, confirm current
            fees on welcomebc.ca before applying.
          </p>

          <h2>How Wild Mountain Immigration helps with Express Entry BC</h2>
          <p>
            As a CICC-regulated practice led by a licensed RCIC, our team makes sure your federal{" "}
            <a href="/express-entry">Express Entry</a> profile is built to score every point it should, and that your{" "}
            <a href="/pnp/british-columbia/skilled-worker">BC PNP Skilled Worker</a> or Health Authority registration
            captures every economic and human-capital factor SIRS rewards. We catch the small errors, the wrong{" "}
            <abbr title="National Occupational Classification">NOC</abbr> code, a language band one short, a credential
            assessment that does not match, a wage that misses a SIRS threshold, that quietly cost points or cause
            avoidable refusals. With BC&apos;s 2026 allocation reduced, that positioning is where good advice earns its
            keep.
          </p>
          <p>
            Prefer to do the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Express Entry profile and BC registration an expert check before you submit, so your Express Entry BC route is
            positioned to score. Figures here are current to May 2026 and change with every draw and fee update, so we
            always confirm the live welcomebc.ca and canada.ca pages before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Ready to target Express Entry BC?"
        sub="Get started with a licensed RCIC for an honest read on your SIRS score, your CRS and whether the enhanced EEBC route is your fastest path to permanent residence."
      />
    </>
  );
}
