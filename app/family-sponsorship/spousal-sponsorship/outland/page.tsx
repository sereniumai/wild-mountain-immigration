import type { Metadata } from "next";
import { Plane, Heart, Scale } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd, serviceLd } from "@/lib/seo";
import { consult } from "@/lib/site";

const PATH = "/family-sponsorship/spousal-sponsorship/outland";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Outland Spousal Sponsorship Canada",
  titleAbsolute: "Outland Spousal Sponsorship Canada",
  description:
    "Outland spousal sponsorship Canada: sponsor a spouse living abroad, travel during processing, the appeal right if refused, outland vs inland. Free consult.",
  path: PATH,
  keywords: [
    "outland spousal sponsorship Canada",
    "outland sponsorship",
    "sponsor spouse living abroad",
    "can I travel during outland sponsorship",
    "outland vs inland spousal sponsorship",
  ],
});

const faqs = [
  {
    q: "What is outland spousal sponsorship?",
    a: "Outland spousal sponsorship is the route processed through an IRCC visa office rather than the in-Canada (inland) stream. It is the standard choice when the sponsored spouse or partner lives abroad, but a couple can also choose outland even when the spouse is already in Canada. Both inland and outland lead to the same permanent residence; outland is the more mobility-friendly route because it does not assume your partner stays in Canada throughout processing.",
  },
  {
    q: "Can I travel during outland sponsorship?",
    a: "Yes, travel flexibility is the main practical advantage of outland. Because the application is processed as if your partner is abroad, they can come and go without putting the application at risk, unlike the inland route where leaving Canada can jeopardise the file. Your partner still needs valid status to enter Canada as a visitor (a visitor visa or eTA, depending on nationality), and entry is always at the discretion of a border officer. But the outland route itself does not penalise travel.",
  },
  {
    q: "Can I use outland if my spouse is already in Canada?",
    a: "Yes. Outland is not limited to spouses who live abroad. A couple where the sponsored partner is already in Canada can still choose to apply outland, and many do, specifically to keep the freedom to travel during the roughly year-long processing time. The trade-off is that the Spousal Open Work Permit, which lets a partner work while waiting, is tied to the inland route and is not available through outland. We help you weigh travel freedom against the work-permit option.",
  },
  {
    q: "Is there an appeal right if an outland sponsorship is refused?",
    a: "Yes. A refused family-class outland sponsorship generally carries a right to appeal to the Immigration Appeal Division (IAD) of the Immigration and Refugee Board. This appeal right is an important difference from the inland route. Important: an IAD appeal is a tribunal proceeding. We do not represent clients at the IAD, because we are an informational and application-preparation practice. If you needed to appeal, you would retain a lawyer or an RCIC authorised for IRB work. The best protection is a complete, well-evidenced application the first time.",
  },
  {
    q: "Which is faster, outland or inland?",
    a: "IRCC publishes a single service standard of about 12 months for a spouse or common-law partner sponsorship, and it applies to both routes. In practice, outland has historically moved at a steady, predictable pace in many visa offices, while inland timelines can vary. Real-world speed depends on your partner's country of residence, biometrics, and, above all, the completeness of your package. An application returned as incomplete effectively restarts the clock, so accuracy matters far more than the route you pick.",
  },
  {
    q: "Does my spouse need to stay outside Canada during outland processing?",
    a: "No. Despite the name, your spouse does not have to remain abroad for the whole process. Outland describes where the file is processed (a visa office), not where your partner must physically live. They can visit or stay in Canada if they hold valid temporary status, and they can travel freely, that mobility is precisely why some couples already in Canada still choose outland.",
  },
  {
    q: "Is the spousal sponsorship consultation really free?",
    a: "Yes. Spousal and partner sponsorship is our flagship service, so the consultation is completely free, outland or inland. You get an honest read on your relationship evidence, the route decision and your likely timeline before you commit to anything. We work to a clear written service agreement with transparent fees, and we never guarantee an outcome.",
  },
];

export default function OutlandSpousalSponsorshipPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "Outland Spousal Sponsorship Canada, RCIC Guide",
            description:
              "Outland spousal sponsorship Canada: sponsor a spouse living abroad, travel during processing, the appeal right if refused, outland vs inland. Free consult.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-05-20",
          }),
          serviceLd({
            name: "Outland spousal sponsorship application support",
            description:
              "Outland spousal sponsorship Canada: sponsor a spouse living abroad, travel during processing, the appeal right if refused, outland vs inland. Free consult.",
            path: PATH,
            serviceType: "Outland spousal sponsorship immigration consulting",
          }),
        ]}
      />

      <PageHero
        eyebrow="Spousal Sponsorship"
        crumbs={[
          { name: "Immigrate", path: "/immigrate" },
          { name: "Family Sponsorship", path: "/family-sponsorship" },
          { name: "Spousal Sponsorship", path: "/family-sponsorship/spousal-sponsorship" },
          { name: "Outland", path: PATH },
        ]}
        title={<>Outland Spousal Sponsorship <span className="text-brand">in Canada</span></>}
        lede={
          <p>
            <strong>Outland spousal sponsorship in Canada is the visa-office route to sponsor a spouse abroad.</strong>{" "}
            It is also the more travel-friendly path during processing. This guide covers how outland works, travelling
            while you wait, the appeal right if refused, and outland versus inland.
          </p>
        }
        updated={UPDATED}
        secondaryCta={{ href: "/family-sponsorship/spousal-sponsorship", label: "Spousal sponsorship overview" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <Heart className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Free spousal consultation</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Outland or inland, spousal sponsorship is our flagship, and the consultation is completely free.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>Get started</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Spousal sponsorship overview", href: "/family-sponsorship/spousal-sponsorship", note: "Requirements, evidence & routes" },
                { label: "Inland sponsorship", href: "/family-sponsorship/spousal-sponsorship/inland", note: "Partner in Canada, work permit option" },
                { label: "Super Visa", href: "/family-sponsorship/super-visa", note: "Long stays for parents & grandparents" },
                { label: "Family sponsorship", href: "/family-sponsorship", note: "All ways to reunite your family" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary="Outland spousal sponsorship is processed through an IRCC visa office and is the standard choice when your spouse lives abroad. Many couples also use it when the spouse is in Canada, to keep the freedom to travel. Your partner can come and go during processing without putting the application at risk. A refused outland sponsorship generally carries a right to appeal to the IAD (we do not represent at appeals), and our consultation is free."
            items={[
              <><strong>Outland spousal sponsorship</strong> is processed through an IRCC visa office, the standard choice when your spouse lives abroad.</>,
              <>You can use outland <strong>even if your spouse is in Canada</strong>; many couples do, to keep the freedom to travel.</>,
              <><strong>Travel-friendly:</strong> your partner can come and go during processing without putting the application at risk.</>,
              <>A refused outland sponsorship generally carries a <strong>right to appeal to the IAD</strong>, a key difference from inland (we do not represent at appeals).</>,
              <>No <a href="/family-sponsorship/spousal-open-work-permit">Spousal Open Work Permit</a> through outland, that option is tied to the inland route. Our consultation is free.</>,
            ]}
          />

          <h2>What is outland spousal sponsorship?</h2>
          <p>
            Outland spousal sponsorship is the family-class route in which your application is{" "}
            <strong>processed through an IRCC visa office</strong> rather than the in-Canada (inland) stream. It is the
            standard choice when you are <strong>sponsoring a spouse living abroad</strong>, but, importantly, a couple
            can also choose outland even when the sponsored spouse is already in Canada. The name refers to where the file
            is processed, not where your partner must physically live. According to IRCC, both inland and outland lead to
            the same permanent residence (source: canada.ca, spouse, common-law or conjugal partner sponsorship, 2026).
          </p>
          <p>
            As with any spousal application, you, the Canadian citizen or permanent resident, sign an{" "}
            <em>undertaking</em> to support your partner, and your partner becomes the principal applicant. There is
            usually <strong>no minimum income test</strong> for a spouse or partner. What sets outland apart is the
            experience during processing: it is built for mobility, it does not assume your partner stays in Canada, and it
            carries a formal appeal right if the sponsorship is refused. Outland spousal sponsorship is part of our flagship
            service, which is why the consultation for it is free.
          </p>

          <h2>Can I sponsor a spouse who is living abroad?</h2>
          <p>
            Yes, this is the classic use of <strong>outland sponsorship</strong>. If your spouse, common-law or conjugal
            partner lives outside Canada, the outland route lets you sponsor them through the visa office that serves their
            region. Your partner does not need Canadian status to be sponsored outland; the assessment is made as if they
            are abroad. This is the only route available for a <strong>conjugal partner</strong>, who by definition must be
            outside Canada.
          </p>
          <p>
            Because the file is handled as an overseas application, your partner can continue to live and work in their home
            country while the permanent-residence application is processed, then land in Canada once approved. Sponsoring a
            spouse living abroad is one of the most common scenarios we manage, and getting the relationship evidence right
            across any distance is where careful preparation pays off.
          </p>

          <h2>Can I travel during outland sponsorship?</h2>
          <p>
            Yes, and this is the single biggest practical advantage of outland. Because the application is processed as if
            your partner is abroad, <strong>they can travel freely during processing</strong> without putting the
            application at risk. That is a meaningful contrast with the inland route, where leaving Canada can jeopardise
            the file. For couples who need to see family, work across borders, or simply keep their options open, the
            freedom to travel is often the deciding factor.
          </p>
          <Callout type="info" title="Travel is allowed, but entry is still discretionary">
            Outland does not penalise travel. However, if your partner wants to <strong>enter Canada as a visitor</strong>{" "}
            during processing, they still need valid temporary status, a visitor visa (TRV) or an electronic travel
            authorisation (eTA), depending on their nationality, and admission is always at the discretion of a border
            officer. The outland route itself is travel-friendly; entry to Canada is a separate question we help you plan for.
          </Callout>
          <p>
            This is also why a couple where the sponsored spouse is <strong>already in Canada</strong> may still choose
            outland: it keeps the door open to travel during the roughly year-long wait. The trade-off is the work permit,
            which we cover below.
          </p>

          <h2>Outland vs inland spousal sponsorship</h2>
          <p>
            Both routes lead to the same permanent residence, the difference is the experience during processing and the
            rights attached to each. Inland suits a partner already in Canada who wants to work and intends to stay
            throughout; outland suits a partner abroad, or anyone who values travel freedom and the appeal right. Use the
            comparison below, then read the dedicated{" "}
            <a href="/family-sponsorship/spousal-sponsorship/inland">inland spousal sponsorship</a> page for the other side.
          </p>
          <DataTable
            headers={["", "Outland", "Inland"]}
            rows={[
              ["Where it's processed", "Through an IRCC visa office", "In Canada (Case Processing Centre)"],
              ["Best for", "A spouse abroad, or anyone who values travel freedom", "A partner in Canada who wants to work and stay"],
              ["Travel during processing", "Travel-friendly, coming and going does not risk the file", "Leaving Canada can put the application at risk"],
              ["Spousal Open Work Permit", "Not available through this route", "May qualify after the application is acknowledged (AOR)"],
              ["Appeal if refused", "Right of appeal to the IAD (tribunal)", "No IAD appeal, judicial review only"],
              ["Conjugal partner", "Only route available (partner must be abroad)", "Not available"],
              ["Result", "Permanent residence", "Permanent residence"],
            ]}
            caption="Outland vs inland spousal sponsorship (2026). Both lead to the same permanent residence; confirm current rules on canada.ca."
          />

          <h2>What happens if an outland sponsorship is refused?</h2>
          <p>
            One of the defining features of outland is the <strong>appeal right</strong>. If a family-class outland
            sponsorship is refused, the sponsor generally has the right to appeal to the{" "}
            <strong>Immigration Appeal Division (IAD)</strong> of the Immigration and Refugee Board. Inland applicants do
            not have this appeal route, their recourse is judicial review in Federal Court. For some couples, the
            availability of an appeal is a reason to choose outland from the start.
          </p>
          <Callout type="warning" title="We do not represent at the IAD, informational only">
            An IAD appeal is a formal tribunal proceeding. We are an informational and application-preparation practice and
            we do <strong>not</strong> provide sponsorship-appeal or tribunal representation. If you ever needed to appeal a
            refusal, you would retain a lawyer or an RCIC who is authorised for IRB (IAD) work. This page explains the
            appeal right for information only; the best protection against ever needing it is a careful, complete
            application the first time, which is the service we focus on.
          </Callout>

          <h2>Pros and cons: who does outland suit?</h2>
          <p>
            Outland is the right call for many couples, but not all. The decision turns on where your partner lives, whether
            they need to work in Canada during processing, and how much travel matters. Here is the honest balance sheet.
          </p>
          <DataTable
            headers={["Outland advantages", "Outland trade-offs"]}
            rows={[
              ["Freedom to travel during processing without risking the file", "No Spousal Open Work Permit, your partner can't work in Canada on this route"],
              ["The only route for a partner who is abroad (and for conjugal partners)", "If your partner is in Canada and wants to work, inland may suit better"],
              ["A right of appeal to the IAD if the sponsorship is refused", "An IAD appeal needs a lawyer or RCIC-IRB, we don't represent at appeals"],
              ["Steady, predictable processing in many visa offices", "Country of residence and biometrics can affect the real timeline"],
            ]}
            caption="The trade-offs of the outland route. The right choice depends on location, work needs and travel plans."
          />
          <p>
            In short, outland suits couples where the spouse lives abroad, where travel freedom is essential, where the
            appeal right matters, or where the partner simply does not need to work in Canada while waiting. If your partner
            is in Canada and a paycheque during the wait is the priority, the inland{" "}
            <a href="/family-sponsorship/spousal-open-work-permit">Spousal Open Work Permit</a> may tip the balance the
            other way. This is exactly the conversation our free consultation is for.
          </p>

          <h2>How long does outland spousal sponsorship take?</h2>
          <p>
            IRCC&apos;s published service standard for a spouse or common-law partner sponsorship is about{" "}
            <strong>12 months</strong> from a complete application, and it applies to both the outland and inland routes.
            That clock assumes a complete, accurate package, an application returned as incomplete effectively restarts
            your wait. Your partner&apos;s country of residence, biometrics, and the depth of your relationship evidence all
            shape the real timeline.
          </p>
          <p>
            Processing times move regularly, so check the live IRCC processing-times tool for the current estimate before
            planning around a date. The single biggest factor you control is the quality of the submission, which is where
            most avoidable delay lives, and where an RCIC adds the most value.
          </p>

          <h2>How Wild Mountain Immigration helps with outland sponsorship</h2>
          <p>
            We make spousal and partner sponsorship our priority. Working under a licensed RCIC (CICC #R706497), our team
            confirms your eligibility, recommends outland or inland based on your partner&apos;s location, work needs and
            travel plans, and builds a relationship record that stands up to scrutiny across a visa-office review. We
            represent you with IRCC throughout the process.
          </p>
          <p>
            We work to a clear written service agreement with transparent fees. We never guarantee an outcome, because no
            honest consultant can, and we are not affiliated with the government. We also do not represent clients at the
            IAD or in other appeals; our focus is a careful, complete application the first time, from your partner&apos;s
            country of residence and biometrics through to landing in Canada. Because outland spousal sponsorship in Canada
            is part of our flagship service, the consultation is free.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <CtaBand
        title="Sponsoring a spouse who lives abroad?"
        sub="Outland spousal sponsorship consultations are free. Book a no-pressure session with a licensed RCIC and get an honest read on your route, evidence and timeline."
      />
    </>
  );
}
