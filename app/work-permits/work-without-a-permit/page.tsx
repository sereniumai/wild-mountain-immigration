import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";

const PATH = "/work-permits/work-without-a-permit";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Work in Canada Without a Work Permit",
  titleAbsolute: "Work in Canada Without a Work Permit",
  description:
    "Some jobs let you work in Canada without a work permit, including business visitors and certain short-term roles. See who qualifies and the limits.",
  path: PATH,
  keywords: [
    "work in canada without a work permit",
    "work without work permit canada",
    "business visitor canada",
    "no work permit required",
    "work permit exemptions canada",
  ],
});

const faqs = [
  {
    q: "Can I work in Canada without a work permit?",
    a: "In a limited set of situations, yes. Canada lists specific roles that are exempt from needing a work permit, the best known being a business visitor who comes for meetings, training or after-sales service but does not enter the Canadian labour market. Other narrow categories exist too. The exemptions are specific, and getting them wrong can lead to a refusal at the border, so it is worth confirming your situation before you travel.",
  },
  {
    q: "Who counts as a business visitor?",
    a: "A business visitor comes to Canada for international business activities without directly entering the Canadian labour market. Typical examples include attending meetings or conferences, buying Canadian goods or services, receiving training from a Canadian parent company, or providing after-sales service under a warranty. The key test is that your main source of income and your employer remain outside Canada.",
  },
  {
    q: "What does 'entering the labour market' mean?",
    a: "Broadly, you are entering the Canadian labour market if you are doing work that a Canadian or permanent resident could be paid to do, or that competes directly in the Canadian market. Business visitors avoid this line: they carry out limited international business activities rather than taking up Canadian employment. If your activity crosses into actual work for a Canadian employer, you generally need a work permit.",
  },
  {
    q: "Are there other roles that don't need a work permit?",
    a: "Yes, Canada publishes a specific list. It includes certain short-term categories and roles such as some performing artists, athletes and team members, news reporters, certain public speakers and a few others, each with precise conditions. Because the rules are detailed and change, we confirm whether a genuine exemption applies to your exact circumstances rather than relying on a general label.",
  },
  {
    q: "I'll be visiting for business, do I still need a visa or eTA?",
    a: "Possibly. Being exempt from a work permit is not the same as being exempt from entry requirements. Depending on your nationality you may still need a visitor visa (TRV) or an Electronic Travel Authorization (eTA) to enter Canada as a business visitor. We help you confirm both the work-permit position and the entry document you need.",
  },
  {
    q: "What if I actually need a work permit?",
    a: "If your role does enter the Canadian labour market, you will need a work permit, either an LMIA-based permit under the Temporary Foreign Worker Program or an LMIA-exempt permit under the International Mobility Program. We assess which route fits and build the application. Getting this right matters: working without authorisation can affect future applications.",
  },
];

export default function WorkWithoutPermitPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Work in Canada Without a Work Permit: Who Qualifies",
            description:
              "Some jobs let you work in Canada without a work permit, including business visitors and certain short-term roles. See who qualifies and the limits.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Work-permit exemption guidance",
            description:
              "Some jobs let you work in Canada without a work permit, including business visitors and certain short-term roles. See who qualifies and the limits.",
            path: PATH,
            serviceType: "Work permit immigration consulting",
          }),
        ]}
      />

      <PageHero
        size="hub"
        eyebrow="Work in Canada"
        crumbs={[
          { name: "Work", path: "/work-permits" },
          { name: "Work without a Work Permit", path: PATH },
        ]}
        title={<>Work in Canada <span className="text-brand">without a work permit</span></>}
        lede={
          <p>
            You can work in Canada without a work permit in a limited set of situations. A short list of roles, most
            commonly the <strong>business visitor</strong>, lets you carry out international business activities under
            work permit exemptions. Here is who qualifies, where the line falls between a business visit and entering the
            labour market, and what to do if you do need a permit.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/visit/business-visitor", label: "Business visitor guide" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <CircleCheck className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Not sure if you need a permit?</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                We confirm whether your activity is exempt, and build the right application if it is not.
              </p>
              <Button href="/contact" className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Business Visitors", href: "/visit/business-visitor", note: "The most common exemption" },
                { label: "Work in Canada", href: "/work-permits", note: "All work permit routes" },
                { label: "Temporary Foreign Worker Program", href: "/work-permits/temporary-foreign-worker-program", note: "When you need an LMIA" },
                { label: "International Mobility Program", href: "/work-permits/international-mobility-program", note: "LMIA-exempt permits" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="You can work in Canada without a work permit only in a limited set of situations set out in the work permit exemptions (regulation R186). The best known is the business visitor, who comes for meetings, training or after-sales service without entering the Canadian labour market. Other narrow roles are also exempt under specific conditions. Being work-permit exempt does not remove entry requirements: you may still need a visitor visa or eTA. And if your activity crosses into actual Canadian employment, a work permit is required."
            items={[
              <>A <strong>business visitor</strong> can carry out international business activities without a work permit.</>,
              <>The test is whether you <strong>enter the Canadian labour market</strong>, business visitors do not.</>,
              <>A short list of <strong>other exempt roles</strong> exists, each with precise conditions.</>,
              <>You may still need a <a href="/visit/visitor-visa">visitor visa</a> or <a href="/visit/eta">eTA</a> to enter.</>,
              <>If your role is real Canadian work, you need a <a href="/work-permits">work permit</a>.</>,
            ]}
          />

          <h2>How to work in Canada without a work permit: the business visitor</h2>
          <p>
            The most common way to be in Canada for work-related reasons without a work permit is as a{" "}
            <a href="/visit/business-visitor">business visitor</a>. Business visitors come for international business
            activities, attending meetings or a conference, negotiating a contract, buying Canadian goods or services, or
            receiving training from a Canadian parent company, without taking a job in Canada. The defining feature is
            that your employer and your main source of income stay outside Canada.
          </p>
          <Callout type="info" title="Business visitor vs work permit">
            If a Canadian could be hired and paid to do what you are doing, you are likely entering the labour market and
            need a work permit. If you are carrying out limited international business activities for a foreign employer,
            you are likely a business visitor. A useful guide is the foreign employer income test: when your pay and
            employer stay outside Canada, the business-visitor side is in play. The details decide it.
          </Callout>

          <h2>Other work permit exemptions in Canada</h2>
          <p>
            Beyond business visitors, the work permit exemptions in Canada (set out at section R186 of the regulations)
            list several roles where no work permit is required, each with its own conditions. Common examples include:
          </p>
          <DataTable
            headers={["Activity", "Typical conditions"]}
            rows={[
              ["Business visitor", "Foreign employer and income; no entry into the Canadian labour market"],
              ["Performing artists", "Certain short-term performances, with limits and exceptions"],
              ["Athletes and team members", "Competing in Canada as part of a foreign team or as an individual"],
              ["News reporters and crew", "Reporting on Canadian events for a foreign outlet"],
              ["Public speakers", "Short engagements such as a guest speaker or commercial speaker"],
            ]}
            caption="Examples of work-permit-exempt activities (IRCC, 2026). Each has detailed conditions, confirm yours."
          />
          <p>
            These categories are narrower than they sound, and the conditions matter. We check your exact circumstances
            against the current rules rather than assuming a label fits.
          </p>

          <h2>Exempt from a permit is not exempt from entry rules</h2>
          <p>
            Even if you do not need a work permit, you still need to be admissible to Canada and to hold the right entry
            document. Depending on your nationality, that means a <a href="/visit/visitor-visa">visitor visa (TRV)</a> or
            an <a href="/visit/eta">Electronic Travel Authorization (eTA)</a>. We help you line up both the work-permit
            position and the entry document so you are not turned away at the border.
          </p>

          <h2>What if you do need a work permit?</h2>
          <p>
            If your activity is genuine Canadian work, you will need a permit, either an LMIA-based permit under the{" "}
            <a href="/work-permits/temporary-foreign-worker-program">Temporary Foreign Worker Program</a> or an
            LMIA-exempt permit under the{" "}
            <a href="/work-permits/international-mobility-program">International Mobility Program</a>. We assess which route
            fits your role and build the application. Whether you can work in Canada without a work permit or need one,
            our free <a href="/tools/eligibility">eligibility checker</a> is a quick first step.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Coming to Canada for business?"
        sub="Tell us what you'll be doing and a licensed RCIC will confirm whether you need a work permit, and the right entry document."
      />
    </>
  );
}
