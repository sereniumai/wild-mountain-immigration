import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Steps, Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/pnp/nova-scotia/physician";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Nova Scotia Physician Stream (NSNP) 2026 Guide",
  titleAbsolute: "NSNP Physician Stream: Nova Scotia 2026",
  description:
    "Nova Scotia Physician stream: NSNP eligibility for doctors with a Nova Scotia Health or IWK offer, licensure, language and how to apply. RCIC-led.",
  path: PATH,
  keywords: [
    "Nova Scotia Physician stream",
    "NSNP Physician",
    "Nova Scotia doctor immigration",
    "physician PR Nova Scotia",
    "NSNP doctors",
  ],
});

const faqs = [
  {
    q: "What is the Nova Scotia Physician stream?",
    a: "It is the Nova Scotia Nominee Program (NSNP) pathway for internationally trained and Canadian physicians who hold an approved offer of employment or an appointment from Nova Scotia Health (the Nova Scotia Health Authority) or the IWK Health Centre. A provincial nomination is a step toward permanent residence, once nominated, you apply separately to IRCC. After the 2026 stream consolidation, the Physician route is delivered through Nova Scotia's Express Entry-aligned selection. With a valid Express Entry profile, a nomination can add 600 CRS points.",
  },
  {
    q: "Do I need a job offer to apply as a physician?",
    a: "Yes. The Nova Scotia Physician stream is anchored to a genuine offer of employment or a clinical appointment from Nova Scotia Health or the IWK Health Centre. Without that offer or appointment, you cannot use this route. The employer offer is the foundation of the application, so confirming it meets NSNP requirements is the first thing we check. Requirements change, so always verify the current rules on novascotia.ca before relying on them.",
  },
  {
    q: "Do I need to be licensed with the College of Physicians & Surgeons of Nova Scotia first?",
    a: "Licensure is handled by the College of Physicians & Surgeons of Nova Scotia (CPSNS), not by the NSNP, and it is separate from your immigration application. In practice your Nova Scotia Health or IWK offer is tied to obtaining the appropriate licence or registration with the College, so you should start that process early because it runs in parallel and can take time. The NSNP does not grant your right to practise medicine, only the College does.",
  },
  {
    q: "Does a Nova Scotia Physician nomination guarantee permanent residence?",
    a: "No. A nomination is a provincial endorsement, not permanent residence. Where it is delivered through Express Entry it adds 600 CRS points, which puts most candidates well above the typical cut-off, but you still file a separate permanent-residence application with IRCC, which makes the final decision on medical, security and admissibility grounds. Meeting the stream's eligibility also does not guarantee an invitation. What we do is build the strongest possible case.",
  },
  {
    q: "What language test results do physicians need?",
    a: "You generally need an approved language test result (such as IELTS, CELPIP or, for French, TEF/TCF) meeting the relevant minimum, and language is scored on your lowest of four abilities. Where the Physician route runs through Express Entry, you must also meet the federal program's language threshold. The College of Physicians & Surgeons of Nova Scotia sets its own English-language proficiency requirement for licensure, which can be higher, so confirm both the immigration and the College standard for your situation.",
  },
  {
    q: "Did the NSNP Physician stream change in 2026?",
    a: "Yes. Nova Scotia consolidated its lineup in early 2026 (effective for new expressions of interest from February 18, 2026), folding the standalone Physician stream into broader Express Entry and Skilled Worker selections. The eligibility for physicians with a Nova Scotia Health or IWK offer largely survives as sub-criteria, and expressions of interest already in the system remain valid. Older guides that list the Physician stream as a fully separate pathway predate this change.",
  },
  {
    q: "Can family physicians and specialists both apply?",
    a: "Both family physicians and specialist physicians can be eligible, provided each holds an approved offer of employment or a clinical appointment from Nova Scotia Health or the IWK Health Centre and meets the licensure and language requirements. Nova Scotia treats physician recruitment as a top health-care priority. The exact terms attached to family-medicine versus specialist appointments differ, so we assess your specific offer against the current novascotia.ca program guide.",
  },
];

export default function NovaScotiaPhysicianPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Nova Scotia Physician Stream (NSNP), 2026 RCIC Guide",
            description:
              "Nova Scotia Physician stream: NSNP eligibility for doctors with a Nova Scotia Health or IWK offer, licensure, language and how to apply. RCIC-led.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-22",
          }),
          serviceLd({
            name: "Nova Scotia Physician stream (NSNP) application support",
            description:
              "Nova Scotia Physician stream: NSNP eligibility for doctors with a Nova Scotia Health or IWK offer, licensure, language and how to apply. RCIC-led.",
            path: PATH,
            serviceType: "Provincial Nominee Program immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Nova Scotia (NSNP), Physician"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Provincial Nominee Programs", path: "/pnp" },
          { name: "Nova Scotia (NSNP)", path: "/pnp/nova-scotia" },
          { name: "Physician", path: PATH },
        ]}
        title={<>Nova Scotia <span className="text-brand">Physician stream</span></>}
        lede={
          <p>
            The <strong>Nova Scotia Physician stream</strong> nominates doctors who hold an approved offer or appointment
            from Nova Scotia Health or the IWK Health Centre for permanent residence. For family physicians and
            specialists, it is one of the most direct routes to settling, and practising, in Nova Scotia in 2026.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/tools/crs-calculator", label: "Check your CRS score, free" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Stethoscope className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Are you a doctor with an NS offer?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                With Nova Scotia&apos;s streams consolidated for 2026, getting the route and timing right matters. Get an
                honest read from a licensed RCIC.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Nova Scotia Nominee Program (NSNP)", href: "/pnp/nova-scotia", note: "How the whole NSNP works" },
                { label: "Labour Market Priorities", href: "/pnp/nova-scotia/labour-market-priorities", note: "The Express Entry-aligned route" },
                { label: "Alberta Health Care Pathway", href: "/alberta-immigration/dedicated-health-care-pathway", note: "Compare a health-care PNP route" },
                { label: "Provincial Nominee Programs", href: "/pnp", note: "Every province explained" },
                { label: "Free CRS calculator", href: "/tools/crs-calculator", note: "See your Express Entry score" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="The Nova Scotia Physician stream is the Nova Scotia Nominee Program (NSNP) pathway for doctors with an approved offer or appointment from Nova Scotia Health or the IWK Health Centre. It is open to internationally trained and Canadian physicians, and it assesses your offer, medical licensure and language. A nomination is a provincial recommendation toward permanent residence, not PR itself; once nominated, you apply separately to IRCC for the final decision."
            items={[
              <>The <strong>Nova Scotia Physician stream</strong> is the NSNP route for doctors with an approved offer or appointment from <strong>Nova Scotia Health or the IWK Health Centre</strong>.</>,
              <>A <strong>genuine employer offer or clinical appointment</strong> is the anchor, without it, you cannot use this route.</>,
              <>Licensure is via the <strong>College of Physicians &amp; Surgeons of Nova Scotia</strong>, separate from the NSNP; start it early.</>,
              <>Since the 2026 consolidation, the Physician route is delivered through Nova Scotia&apos;s <strong>Express Entry-aligned selection</strong>, which can add 600 CRS points.</>,
              <>A <strong>nomination is not permanent residence</strong>, IRCC decides PR on a separate application, and eligibility does not guarantee an invitation.</>,
            ]}
          />

          <h2>What is the Nova Scotia Physician stream?</h2>
          <p>
            The <strong>Nova Scotia Physician stream</strong> is the province&apos;s Nova Scotia Nominee Program (NSNP)
            pathway for internationally trained and Canadian physicians who hold an approved offer of employment or a
            clinical appointment from <strong>Nova Scotia Health</strong> (the Nova Scotia Health Authority) or the{" "}
            <strong>IWK Health Centre</strong>. A provincial nomination is your stepping stone to applying to IRCC for
            permanent residence, it is not permanent residence in itself.</p>
          <p>Physician recruitment is one of Nova
            Scotia&apos;s clearest health priorities, which is why this dedicated route exists at all. In early 2026, Nova
            Scotia consolidated its older streams (effective for new expressions of interest from February 18, 2026;
            source: novascotia.ca, May 2026). That change folded the Physician stream into the province&apos;s broader
            Express Entry and Skilled Worker selections, so this <strong>NSNP Physician</strong> route now runs through
            those selections rather than as a fully standalone stream.
          </p>
          <p>
            One feature still sets Nova Scotia apart: it charges <strong>no provincial application fee</strong> for an NSNP
            nomination, one of the few provinces to do so. That said, the federal IRCC fees for the permanent-residence
            application itself still apply, as do the costs of language tests, an educational credential assessment and
            other documents. Figures and policies change frequently, so always verify the current rules on novascotia.ca
            before acting, and remember that meeting the eligibility criteria is not the same as receiving an invitation.
          </p>
          <Callout type="brand" title="Nomination is a step, not the finish line">
            An NSNP nomination, even for a needed physician, does not grant permanent residence. Where it runs through
            Express Entry it adds 600 CRS points, but you still file a separate application with IRCC, which decides on
            medical, security and admissibility grounds. Be wary of any source that implies a nomination equals PR.
          </Callout>

          <h2>Who is the Physician stream for?</h2>
          <p>
            This route is built for doctors, both <strong>family physicians and specialist physicians</strong>, who are
            being recruited into Nova Scotia&apos;s public health system. The defining feature is the employer: your offer
            of employment or clinical appointment must come from <strong>Nova Scotia Health</strong> or the{" "}
            <strong>IWK Health Centre</strong> (the province&apos;s women&apos;s, children&apos;s and youth health centre
            in Halifax).</p>
          <p>If you are a physician without such an offer, or you are practising in a non-physician health
            role, a different NSNP route, or a federal program, is likely the better fit. As a piece of{" "}
            <strong>Nova Scotia doctor immigration</strong> planning, confirming the source and terms of your offer is the
            first and most important step.
          </p>

          <h2>Nova Scotia Physician stream eligibility</h2>
          <p>
            Eligibility for <strong>physician PR Nova Scotia</strong> applications rests on a small number of building
            blocks. Because the route is now delivered through Nova Scotia&apos;s Express Entry-aligned selection, you
            generally also need a valid federal Express Entry profile and must meet that program&apos;s minimums. The table
            below summarises the core requirements; treat it as a starting point and confirm each item against the current
            novascotia.ca program guide, since details change.
          </p>
          <DataTable
            headers={["Requirement", "What it means", "Verify with"]}
            rows={[
              ["Approved offer or appointment", "A genuine offer of employment or clinical appointment as a physician from Nova Scotia Health or the IWK Health Centre, the anchor of the application", "Your NSHA / IWK recruiter; novascotia.ca"],
              ["Medical licensure", "Appropriate licence or registration as a physician (this comes through the College of Physicians & Surgeons of Nova Scotia, not the NSNP)", "College of Physicians & Surgeons of NS (CPSNS)"],
              ["Language ability", "An approved test result (e.g. IELTS/CELPIP, or TEF/TCF for French) meeting the relevant minimum; scored on your lowest of four abilities", "Immigration minimum + CPSNS English-language standard"],
              ["Express Entry profile", "A valid federal Express Entry profile, since the Physician route is delivered through the enhanced selection", "novascotia.ca; IRCC Express Entry"],
              ["Supporting documents", "Educational credentials (with an ECA where required), work-experience evidence and proof of settlement funds as applicable", "novascotia.ca program guide"],
            ]}
            caption="Core Nova Scotia Physician stream requirements (novascotia.ca, May 2026). Requirements change, verify each item before applying, and note that eligibility does not guarantee an invitation."
          />
          <Callout type="warning" title="Licensure is via the College of Physicians & Surgeons of Nova Scotia">
            The NSNP does not grant your right to practise medicine. Registration is handled by the College of Physicians
            &amp; Surgeons of Nova Scotia (CPSNS), and it runs separately from, and in parallel with, your immigration
            file. Start that process early, as it can take time and your Nova Scotia Health or IWK offer is usually tied
            to obtaining the appropriate licence. For an internationally trained physician, this can also involve a{" "}
            practice-ready assessment through the province&apos;s assessment route before independent practice.
          </Callout>

          <h2>What language results do physicians need?</h2>
          <p>
            Language is scored on your <strong>lowest of four abilities</strong>, reading, writing, listening and
            speaking, so a single weak skill can quietly hold back the whole file. Where the Physician route runs through
            Express Entry, you must meet the federal program&apos;s language threshold using an approved test such as
            IELTS or CELPIP (or TEF/TCF for French).</p>
          <p>Separately, the College of Physicians &amp; Surgeons of Nova Scotia
            applies its own English-language proficiency requirement for licensure, which can be higher than the
            immigration minimum. The safest approach is to confirm both the immigration standard and the College standard
            for your situation before you book a test, so you only sit it once.
          </p>

          <h2>How to apply to the Nova Scotia Physician stream</h2>
          <p>
            How to apply follows a clear sequence, with physician-specific steps layered in. The order below is typical;
            confirm the live requirements on novascotia.ca before you begin, because the 2026 consolidation changed how
            the route is packaged.
          </p>
          <Steps
            steps={[
              { title: "Secure an NSHA or IWK offer", desc: "Obtain a genuine offer of employment or clinical appointment as a physician from Nova Scotia Health or the IWK Health Centre, the anchor of your eligibility." },
              { title: "Start licensure with the CPSNS", desc: "Begin registration with the College of Physicians & Surgeons of Nova Scotia. It runs in parallel with your immigration file and can take time, so start early." },
              { title: "Test language & gather documents", desc: "Take an approved language test to meet both the immigration and College standards, obtain an ECA for foreign credentials, and collect work-experience evidence." },
              { title: "Create your Express Entry profile", desc: "Build a valid federal Express Entry profile, since the Physician route is now delivered through Nova Scotia's enhanced, Express Entry-aligned selection." },
              { title: "Submit your expression of interest", desc: "Submit an EOI to Nova Scotia, which ranks candidates and invites the strongest profiles in periodic rounds, meeting the bar does not guarantee an invitation." },
              { title: "Get invited, nominated & apply to IRCC", desc: "If invited, file your full nomination application; on nomination through Express Entry you gain 600 CRS points, then submit your separate IRCC permanent-residence application." },
            ]}
          />
          <Callout type="info" title="The 2026 stream consolidation">
            If you are reading older material that lists the Physician stream as a fully separate NSNP pathway, it predates
            the early-2026 changes. Physician selection now runs through Nova Scotia&apos;s Express Entry-aligned route,
            with the underlying eligibility for doctors broadly unchanged, only the packaging is different. Expressions of
            interest already in the system remain valid.
          </Callout>

          <h2>How Wild Mountain helps physicians immigrate to Nova Scotia</h2>
          <p>
            Our team is led by a licensed <abbr title="Regulated Canadian Immigration Consultant">RCIC</abbr> (CICC
            #R706497); we help physicians confirm that a Nova Scotia Health or IWK offer meets NSNP requirements,
            coordinate the timing between your College of Physicians &amp; Surgeons of Nova Scotia registration and your{" "}
            <a href="/express-entry">Express Entry</a> profile, and prepare an expression of interest and nomination
            application that stands up to scrutiny.</p>
          <p>We catch the small mistakes, a language score one band short of the
            College&apos;s standard, an offer that doesn&apos;t quite meet program requirements, a thin document set, that
            cause avoidable delays or refusals. We work entirely online and are not affiliated with any government.
          </p>
          <p>
            Prefer to handle the legwork yourself? Our lower-cost <a href="/contact">File Review</a> gives your own
            Nova Scotia Physician stream application an expert check before you submit. Figures on this page are current
            to May 2026 and change, so we always confirm the live novascotia.ca page before advising.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Bring your medical skills to Nova Scotia"
        sub="Get started with a licensed RCIC for an honest read on your Nova Scotia Physician stream eligibility and route to permanent residence."
      />
    </>
  );
}
