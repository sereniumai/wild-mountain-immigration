import type { Metadata } from "next";
import { BadgeCheck, ShieldCheck, Heart, MapPin } from "lucide-react";
import {
  PageHero, ArticleLayout, Prose, KeyTakeaways, DataTable,
  Callout, Faq, RelatedLinks, CtaBand, JsonLd, Section, FeatureGrid, FeatureCard,
} from "@/components/content/blocks";
import { Button } from "@/components/ui/button";
import { pageMeta, articleLd } from "@/lib/seo";
import { img } from "@/lib/images";
import { site, consult } from "@/lib/site";

const PATH = "/about";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  titleAbsolute: "Regulated Canadian Immigration Consultant | About Us",
  description:
    "Meet Nicola Wightman, a Regulated Canadian Immigration Consultant (RCIC #R706497) and CICC member based in Canmore, Alberta. Honest help, online.",
  path: PATH,
  keywords: [
    "regulated canadian immigration consultant",
    "Nicola Wightman RCIC",
    "Wild Mountain Immigration",
    "what is an RCIC",
    "immigration consultant Canmore Alberta",
  ],
});

const faqs = [
  {
    q: "What is an RCIC?",
    a: "An RCIC is a Regulated Canadian Immigration Consultant, a professional licensed to advise on and represent clients in Canadian immigration matters. RCICs are regulated by the College of Immigration and Citizenship Consultants (CICC), the federal regulator established under law. Only an RCIC, a Canadian lawyer or a notary in Quebec may charge a fee to represent you before Immigration, Refugees and Citizenship Canada (IRCC). Nicola Wightman is an RCIC, licence #R706497.",
  },
  {
    q: "How do I verify your licence?",
    a: "We encourage every client to check. A quick public register search on the CICC site for Nicola Wightman or licence number R706497 will show her status as a member in good standing. Verifying your authorised representative's licence is one of the simplest ways to protect yourself from immigration fraud, and we welcome the scrutiny.",
  },
  {
    q: "Do I have to live in Canmore to work with you?",
    a: "Not at all. Wild Mountain Immigration is based in Canmore, Alberta, and we work with clients across the Bow Valley and Calgary online, by video call and phone. Immigration is paperwork and expertise, not geography, so we represent clients right across Canada and around the world remotely, by video call, phone, email and secure document sharing.",
  },
  {
    q: "How do I get started with Wild Mountain?",
    a: "Tell us your goals and background through our contact page. We give you an honest read on your realistic options and recommend the right pathway and service for your situation, whether that is full File Management or our lower-cost File Review. We set out clear, fixed-scope fees in writing before you commit to anything.",
  },
  {
    q: "What does an immigration consultant actually do?",
    a: "We assess your eligibility honestly, recommend the right pathway, prepare and review your forms and supporting documents, and represent you with IRCC so correspondence comes through us. The goal is a complete, accurate application that avoids the small errors that cause refusals and delays.",
  },
  {
    q: "Can you guarantee my application will be approved?",
    a: "No ethical consultant can, and the CICC rules prohibit guaranteeing outcomes. The decision always rests with IRCC. What we promise instead is honest advice, a clear assessment of your chances, and the strongest, most accurate application your circumstances allow.",
  },
  {
    q: "Do you handle Quebec immigration?",
    a: "No. Quebec runs its own immigration system with separate rules and selection programs, which we do not cover. We focus on federal programs and the provincial nominee programs outside Quebec, including our home province of Alberta.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: "About Nicola Wightman, RCIC, Wild Mountain Immigration",
            description:
              "Wild Mountain Immigration is a CICC-regulated immigration practice in Canmore, Alberta, led by RCIC Nicola Wightman (#R706497). Honest help, online.",
            path: PATH,
            dateModified: "2026-05-31",
            datePublished: "2026-01-15",
          }),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: `${site.url}${PATH}`,
            mainEntityOfPage: `${site.url}${PATH}`,
            mainEntity: { "@id": `${site.url}/#nicola` },
            about: { "@id": `${site.url}/#org` },
            inLanguage: "en-CA",
          },
        ]}
      />

      <PageHero
        eyebrow="About us"
        crumbs={[{ name: "About", path: PATH }]}
        title={<>Your Regulated <span className="text-brand">Canadian Immigration Consultant</span></>}
        lede={
          <p>
            Wild Mountain Immigration is led by <strong>Nicola Wightman, a Regulated Canadian Immigration
            Consultant (RCIC #{site.rcicNumber})</strong> and a member in good standing of the CICC. Founded in
            2021 and based in Canmore, Alberta, we guide individuals and families through Canadian immigration
            with honest, ethical advice, online by video call and phone across the Bow Valley and Calgary, and
            remotely for clients worldwide.
          </p>
        }
        updated={UPDATED}
        image={img.nicola}
        imageAlt="Nicola Wightman, Regulated Canadian Immigration Consultant"
        secondaryCta={{ href: site.ciccRegisterUrl, label: "Verify on the CICC register" }}
      />

      <ArticleLayout
        aside={
          <>
            <div className="rounded-2xl border border-brand/20 bg-brand-tint p-6">
              <BadgeCheck className="size-7 text-brand" />
              <h2 className="mt-3 font-heading text-lg font-semibold text-ink">Work with an RCIC</h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Get an honest read on your options from a licensed consultant.
              </p>
              <Button href={consult.href} className="mt-4 w-full" withArrow>{consult.label}</Button>
            </div>
            <RelatedLinks
              links={[
                { label: "Immigration consultant in Cochrane", href: "/immigration-consultant-cochrane", note: "How we serve the Bow Valley & Calgary" },
                { label: "Our fees", href: "/fees", note: "Transparent File Management & File Review pricing" },
                { label: "Get started", href: "/contact", note: "Free for spousal sponsorship" },
              ]}
            />
          </>
        }
      >
        <Prose>
          <KeyTakeaways
            summary={`A Regulated Canadian Immigration Consultant (RCIC) is licensed to advise on and represent clients with IRCC. Wild Mountain Immigration is a Canmore, Alberta practice led by Nicola Wightman, an RCIC (#${site.rcicNumber}) and member in good standing of the CICC. We serve the Bow Valley and Calgary online by video call and phone, and clients across Canada and worldwide remotely. We never meet in person.`}
            items={[
              <>Wild Mountain Immigration is founded and led by <strong>Nicola Wightman, RCIC #{site.rcicNumber}</strong>, a member in good standing of the CICC.</>,
              <>An <strong>RCIC</strong> is a Regulated Canadian Immigration Consultant, licensed to represent you with IRCC and regulated by the {site.regulator}.</>,
              <>You can <strong>verify our licence</strong> on the CICC public register at any time, we encourage it.</>,
              <>Based in <strong>Canmore, Alberta</strong>, we serve the Bow Valley and Calgary online and clients worldwide remotely.</>,
              <>We offer two ways to work together, <strong>File Management</strong> (full service) and <strong>File Review</strong>.</>,
            ]}
          />

          <h2>Meet Nicola Wightman, RCIC</h2>
          <p>
            Wild Mountain Immigration is led by <strong>Nicola Wightman</strong>, the firm&apos;s founder and director
            and a licensed <strong>Regulated Canadian Immigration Consultant (RCIC&nbsp;#{site.rcicNumber})</strong>.
            Nicola brings many years of experience in Canadian immigration and is a member in good standing of the{" "}
            <strong>{site.regulator}</strong>. She understands how the system works in practice, not just the rules on paper but how applications are actually assessed. On every file, she is committed to honest, ethical, high-quality service.
          </p>
          <p>
            Nicola is also an immigrant herself. She moved to Canada from the United Kingdom and navigated the
            immigration process first-hand, so she understands both the challenges and the opportunities from the
            client&apos;s side of the desk. That perspective shapes how she works: clearly, calmly and without the
            jargon that makes immigration feel more daunting than it needs to be.
          </p>
          <p>
            Beyond her practice, Nicola is an adventurer who has travelled to more than 25 countries and climbed some
            of the world&apos;s tallest mountains. It is no accident that those values, preparation, patience and
            steadiness under pressure, are exactly what she brings to a complex immigration file.
          </p>

          <h2>What is a Regulated Canadian Immigration Consultant (RCIC)?</h2>
          <p>
            If you are searching for help, you will see the term <strong>RCIC</strong> a lot. It stands for{" "}
            <strong>Regulated Canadian Immigration Consultant</strong>, a professional licensed to advise on and
            represent clients in Canadian immigration matters. RCICs are governed by the{" "}
            <strong>{site.regulator}</strong>, the federal body responsible for licensing consultants and protecting
            the public. By law, only an RCIC or a Canadian lawyer may charge a fee to act as your authorised
            representative before <abbr title="Immigration, Refugees and Citizenship Canada">IRCC</abbr>. Every
            Regulated Canadian Immigration Consultant must also carry professional liability insurance, a safeguard that
            protects the clients they serve.
          </p>
          <p>
            That regulation matters because immigration fraud is real, and unlicensed &quot;ghost&quot; consultants put
            applicants at serious risk. The simplest protection is to confirm your representative is licensed, and you
            can do exactly that with us.
          </p>
          <Callout type="success" title="Verify our licence in under a minute">
            Visit the{" "}
            <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer">CICC public register</a>, search
            for <strong>Nicola Wightman</strong> or licence number <strong>#{site.rcicNumber}</strong>, and you will
            see her listed as a member in good standing. We genuinely encourage you to check.
          </Callout>

          <h2>Our credentials at a glance</h2>
          <p>
            We believe in putting our regulatory standing in plain sight. Here is exactly who we are and how to confirm
            it.
          </p>
          <DataTable
            headers={["Credential", "Detail"]}
            rows={[
              ["Consultant", `${site.rcicName}, founder & director`],
              ["Licence", `Regulated Canadian Immigration Consultant (RCIC), #${site.rcicNumber}`],
              ["Regulator", `${site.regulator}`],
              ["Standing", "Member in good standing"],
              ["Firm", `${site.legalName}, founded ${site.founded}`],
              ["Based in", `${site.locality}, ${site.region}, Canada`],
              ["Serves", "Bow Valley & Calgary online · clients worldwide remotely"],
              ["Verify", "CICC public register (search #" + site.rcicNumber + ")"],
            ]}
            caption="Wild Mountain Immigration, credentials and regulatory standing."
          />

          <h2>Our story: why &quot;Wild Mountain&quot;</h2>
          <p>
            The name is not just scenery. We are based in <strong>Canmore, Alberta</strong>, right in the heart of the
            Rocky Mountains and the Bow Valley, the kind of place people dream of building a life. Nicola founded the
            firm in {site.founded} after making her own move to Canada, with a simple conviction: that the journey to
            permanent residence should be guided by someone honest, qualified and genuinely on your side.
          </p>
          <p>
            &quot;Wild Mountain&quot; reflects both where we are and how we work. Mountains reward preparation and
            respect for the conditions; so does immigration. We live and work in the landscape we love, and we bring
            that same steadiness, honesty and attention to detail to every client&apos;s file, whether you are around
            the corner in Canmore or on the other side of the world.
          </p>

          <h2>How we work: File Management vs File Review</h2>
          <p>
            Every case is different, so we offer two ways to work together. The right choice depends on how much you
            want to handle yourself and the complexity of your situation.
          </p>
          <DataTable
            headers={["Service", "What it is", "Best for"]}
            rows={[
              ["File Management", "Full service, Nicola handles every form, document and submission, and represents you with IRCC from start to finish.", "Anyone who wants their application fully managed by a licensed RCIC."],
              ["File Review", "A lower-cost option, you prepare your own application and Nicola reviews it for errors and missed opportunities before you submit.", "Confident self-applicants who want an expert second pair of eyes."],
            ]}
            caption="Two ways to work with Wild Mountain Immigration."
          />
          <p>
            We are also clear about consultations. They are <strong>free for spousal sponsorship</strong> cases. For
            other services the consultation carries a fee, but we waive it entirely when you proceed with full File
            Management. You can read more on our <a href="/fees">fees page</a>, or{" "}
            <a href="/contact">book a consultation</a> when you are ready.
          </p>
          <p>
            What you will never get from us is a false promise. We do not guarantee approvals, the decision always
            rests with IRCC, and we will tell you honestly if we think a pathway is weak or not the right fit. Honest
            advice, not promises, is the whole point.
          </p>

          <h2>Our values & CICC compliance</h2>
          <p>
            As a CICC-regulated practice, we are bound by a professional Code of Conduct, and we hold ourselves to it
            willingly. In practice, that means a few commitments you can count on:
          </p>
          <ul>
            <li><strong>Honesty first.</strong> We give you a realistic assessment, even when it is not what you hoped to hear.</li>
            <li><strong>No false promises.</strong> We never guarantee an outcome or claim a &quot;100% success rate&quot;, outcomes rest with IRCC.</li>
            <li><strong>Transparent fees.</strong> You know the cost up front, with no surprises.</li>
            <li><strong>Independent and accountable.</strong> We are a private firm and are not affiliated with, or endorsed by, the Government of Canada or IRCC.</li>
            <li><strong>Your privacy respected.</strong> Your documents and information are handled with care and confidentiality.</li>
          </ul>
          <p>
            Holding a licence is not a one-time badge; it is an ongoing obligation to keep current, act ethically and
            remain accountable to the regulator and to you. That is exactly the standard we want you to expect.
          </p>

          <h2>Areas we serve</h2>
          <p>
            We are proud to be an <strong>immigration consultant based in Canmore, Alberta</strong>. We work online, by
            video call and phone, with clients across the surrounding region: Canmore, Banff, Cochrane, Calgary and the
            wider Bow Valley. We also represent clients right across Canada and around the world remotely. Wherever you are,
            the process is the same: a clear plan, a carefully prepared application, and a Regulated Canadian Immigration
            Consultant acting as your authorised representative with IRCC. Learn more about how we serve the area on our{" "}
            <a href="/">Canmore immigration consultant</a> homepage.
          </p>
        </Prose>

        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </ArticleLayout>

      <Section muted>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-ink sm:text-[2.4rem]">What working with us means</h2>
          <p className="mt-3 text-ink-soft">A licensed RCIC, a clear plan and honest advice, from first call to landing.</p>
        </div>
        <div className="mt-10">
          <FeatureGrid>
            <FeatureCard icon={ShieldCheck} title="Licensed & accountable" desc={`RCIC #${site.rcicNumber}, CICC member in good standing. Verify us on the public register any time.`} href="/immigration-consultant-cochrane" />
            <FeatureCard icon={Heart} title="Honest, no false promises" desc="A realistic assessment of your options, and we will never oversell a weak pathway." href="/contact" />
            <FeatureCard icon={MapPin} title="Local roots, global reach" desc="Based in Canmore, Alberta. Online by video and phone across the Bow Valley & Calgary; remote for clients worldwide." href="/fees" />
          </FeatureGrid>
        </div>
      </Section>

      <CtaBand
        title="Talk to a licensed RCIC"
        sub="Book a no-pressure consultation with Nicola Wightman, RCIC. Honest advice, not promises."
      />
    </>
  );
}
