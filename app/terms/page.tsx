import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero, Prose, Callout, Faq, JsonLd } from "@/components/content/blocks";
import { pageMeta, articleLd } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/terms";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "Terms governing your use of the Wild Mountain Immigration website. Information is general, may not be current, and is not legal or immigration advice.",
  path: PATH,
  keywords: ["terms of use", "website terms", "immigration website disclaimer"],
});

const faqs = [
  {
    q: "Is the information on this website legal or immigration advice?",
    a: "No. Everything on this website is general information about Canadian immigration and our services. It is not legal or immigration advice, does not create a client relationship, and must not be relied on for decisions about your specific situation. For advice on your matter, contact us to begin a formal engagement.",
  },
  {
    q: "Is the information always accurate and up to date?",
    a: "Not necessarily. Immigration programs, fees, processing times and eligibility rules change frequently and sometimes without notice. We take care to keep content current and to link to official sources, but we make no warranty that any information is complete, accurate or current at the time you read it. Always confirm details against the official Government of Canada sources we link to before you act.",
  },
  {
    q: "Are you affiliated with the Government of Canada or IRCC?",
    a: "No. Wild Mountain Immigration is an independent, privately owned consulting practice. We are not affiliated with, endorsed by, or acting on behalf of Immigration, Refugees and Citizenship Canada (IRCC) or any government of Canada. Immigration decisions are made solely by IRCC and the relevant authorities.",
  },
  {
    q: "Do you guarantee my application will be approved?",
    a: "No. No ethical immigration professional can guarantee an outcome, and the CICC rules prohibit it. Decisions, processing times and approvals rest entirely with IRCC and the relevant provincial or federal authorities. Nothing on this site is a promise or guarantee of a particular result.",
  },
  {
    q: "Can I copy content from this website?",
    a: "No, not without our written permission. The text, design, logos, photographs and graphics on this site are owned by or licensed to Wild Mountain Immigration and are protected by law. You may view and print pages for your own personal, non-commercial use only.",
  },
  {
    q: "Are the online calculators official?",
    a: "No. The CRS, AAIP and any other tools on this site provide estimates only, based on publicly available points grids. They are not official, do not produce a binding score, and may not reflect the latest rules. Your official score is determined by IRCC or the relevant province from your documents.",
  },
  {
    q: "Which law governs these terms?",
    a: "These terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable there, and any disputes are subject to the courts of Alberta. If any part of these terms is found unenforceable, the rest continues to apply.",
  },
  {
    q: "Can these terms change?",
    a: "Yes. We may update these terms from time to time, and the version published here is the one that applies. The date at the top shows when they were last revised. Your continued use of the site after a change means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({ headline: "Terms of Use", description: "Terms governing your use of the Wild Mountain Immigration website. Information is general, may not be current, and is not legal or immigration advice.", path: PATH, dateModified: "2026-05-31" }),
        ]}
      />
      <PageHero
        eyebrow="Legal"
        crumbs={[{ name: "Terms of Use", path: PATH }]}
        title={<>Terms of <span className="text-brand">use</span></>}
        lede={<p>These <strong>terms of use</strong> govern your access to and use of the {site.legalName} website. By using this site you agree to them. Information here is general only, may not be current, and is not legal or immigration advice.</p>}
        primaryCta={{ href: "/contact", label: "Get started" }}
      />

      <section className="py-14 lg:py-20">
        <Container>
          <Prose className="max-w-3xl">
            <p className="text-sm text-ink-faint">Last updated: {UPDATED}.</p>

            <Callout type="warning" title="Please read this carefully">
              The information on this website is provided for general guidance only. It may not be current or complete,
              and you should not rely on it for decisions about your own immigration matter. Always verify details with
              the official Government of Canada sources and obtain advice tailored to your situation before you act.
            </Callout>

            <h2>1. Acceptance of these terms</h2>
            <p>
              These terms of use (the &quot;Terms&quot;) form a binding agreement between you and {site.legalName}
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) and govern your access to and use of this website and any
              content, tools or features on it (the &quot;Site&quot;). By accessing or using the Site you confirm that you
              have read, understood and agree to be bound by these Terms and our{" "}
              <a href="/privacy-policy">Privacy Policy</a>. If you do not agree, please do not use the Site.
            </p>

            <h2>2. No legal or immigration advice</h2>
            <p>
              The content on this Site is provided for general information about Canadian immigration and our services.
              It is not legal or immigration advice, does not create a consultant-client or any other professional
              relationship, and must not be relied upon for decisions about your specific circumstances. A professional
              relationship with us is created only by a signed retainer agreement. Immigration rules are complex and
              outcomes depend on your individual facts. For advice on your matter, please{" "}
              <a href="/contact">contact us</a> to begin a formal engagement.
            </p>

            <h2>3. Information may not be current or accurate</h2>
            <p>
              Canadian immigration programs, eligibility criteria, government fees, document requirements and processing
              times change frequently, sometimes without advance notice. While we take reasonable care to keep our
              content current and to cite or link to official sources, <strong>we make no representation or warranty that
              any information on this Site is complete, accurate, reliable or up to date</strong> at the time you read it.
              You are responsible for verifying all program details, figures and requirements against the official
              Government of Canada sources (such as canada.ca) before taking any action. Any reliance you place on the
              information here is strictly at your own risk.
            </p>

            <h2>4. No guarantee of outcomes</h2>
            <p>
              Immigration decisions are made solely by Immigration, Refugees and Citizenship Canada (IRCC) and the
              relevant provincial or federal authorities. We do not control and cannot guarantee any outcome, processing
              time, eligibility result or approval. Nothing on this Site is, or should be interpreted as, a promise or
              guarantee of a particular result.
            </p>

            <h2>5. Our regulated status and scope</h2>
            <p>
              {site.legalName} is led by {site.rcicName}, a Regulated Canadian Immigration Consultant (RCIC #
              {site.rcicNumber}), a member in good standing of the College of Immigration and Citizenship Consultants
              (CICC). You can verify our standing on the{" "}
              <a href={site.ciccRegisterUrl} target="_blank" rel="noopener noreferrer">CICC public register</a>. We are
              not a law firm. We do not provide representation before the Immigration and Refugee Board, the Federal Court
              or in any appeal, judicial review or refugee matter, and we do not handle Quebec immigration. We are
              independent and are not affiliated with, or endorsed by, IRCC or any government of Canada.
            </p>

            <h2>6. Permitted use and your responsibilities</h2>
            <p>You agree to use the Site lawfully and not to:</p>
            <ul>
              <li>copy, scrape, republish, sell or commercially exploit any part of the Site without our written permission;</li>
              <li>use the Site in any way that is unlawful, fraudulent or harmful, or to impersonate any person;</li>
              <li>attempt to gain unauthorised access to, interfere with, damage or disrupt the Site, its servers or security;</li>
              <li>introduce viruses, malware or other harmful code, or use automated systems to overload the Site; or</li>
              <li>submit false, misleading or unlawful information through any form or contact feature.</li>
            </ul>

            <h2>7. Submissions and communications</h2>
            <p>
              Information you send through a contact form, email or other feature is transmitted over the internet and is
              not guaranteed to be secure. Please do not send sensitive personal or immigration documents through the Site
              until we have established a secure, formal channel with you. Do not send us confidential information
              expecting it to create a professional relationship; none is created until a retainer is signed.
            </p>

            <h2>8. Tools and calculators</h2>
            <p>
              Any calculators or tools on this Site (such as the{" "}
              <a href="/tools/crs-calculator">CRS calculator</a> and{" "}
              <a href="/tools/aaip-calculator">AAIP calculator</a>) provide estimates only, based on publicly available
              points grids that may change. They are not official, do not produce a binding score, and may not reflect the
              latest rules. Your official score is determined by IRCC or the relevant province from your documents.
            </p>

            <h2>9. Intellectual property</h2>
            <p>
              The text, design, layout, logos, photographs, graphics and other materials on this Site are owned by or
              licensed to {site.legalName} and are protected by copyright, trademark and other laws. You may view and
              print pages for your own personal, non-commercial use only. All other use, including reproduction,
              distribution, modification or republication, requires our prior written permission.
            </p>

            <h2>10. Third-party links</h2>
            <p>
              This Site links to third-party websites, such as canada.ca and the CICC register, for your convenience.
              We do not control and are not responsible for the content, accuracy, policies or practices of those sites,
              and a link does not imply our endorsement.
            </p>

            <h2>11. Disclaimer of warranties</h2>
            <p>
              The Site and all content are provided &quot;as is&quot; and &quot;as available&quot;, without warranties of
              any kind, whether express or implied, including any implied warranties of accuracy, merchantability, fitness
              for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted,
              error-free, secure or free of harmful components.
            </p>

            <h2>12. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {site.legalName}, its owner, employees and contractors will not be
              liable for any direct, indirect, incidental, special, consequential or punitive loss or damage, including
              lost opportunities, costs, fees, delays or refusals, arising from or related to your use of, or inability to
              use, this Site or your reliance on any information, tool or content on it, even if we have been advised of
              the possibility of such loss. Your sole remedy if you are dissatisfied with the Site is to stop using it.
            </p>

            <h2>13. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {site.legalName} and its owner, employees and contractors from any
              claims, losses, liabilities and expenses (including reasonable legal fees) arising from your breach of these
              Terms or your misuse of the Site.
            </p>

            <h2>14. Changes to the Site and these Terms</h2>
            <p>
              We may change, suspend or discontinue any part of the Site at any time without notice. We may also revise
              these Terms from time to time; the version published here, with the &quot;last updated&quot; date above, is
              the one that applies. Your continued use of the Site after changes are posted means you accept the updated
              Terms.
            </p>

            <h2>15. Governing law and disputes</h2>
            <p>
              These Terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable
              there. You agree that the courts of Alberta have exclusive jurisdiction over any dispute relating to the
              Site or these Terms.
            </p>

            <h2>16. Severability and entire agreement</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full
              force. These Terms, together with our <a href="/privacy-policy">Privacy Policy</a>, are the entire agreement
              between you and us regarding your use of the Site.
            </p>

            <h2>17. Contact</h2>
            <p>
              Questions about these Terms can be sent through our <a href="/contact">contact page</a> or by phone at{" "}
              <a href={site.phoneHref}>{site.phone}</a>. {site.legalName} is based in {site.locality},{" "}
              {site.region}, and serves clients across Canada online.
            </p>
          </Prose>

          <div className="mx-auto mt-16 max-w-3xl">
            <Faq items={faqs} title="Terms of use: common questions" />
          </div>
        </Container>
      </section>
    </>
  );
}
