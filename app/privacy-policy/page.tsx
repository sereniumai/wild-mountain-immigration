import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero, Prose, Callout, Faq, JsonLd } from "@/components/content/blocks";
import { pageMeta, articleLd } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/privacy-policy";
const UPDATED = "May 2026";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Wild Mountain Immigration collects, uses, tracks and protects your personal information under Canadian privacy law (PIPEDA and Alberta PIPA).",
  path: PATH,
  keywords: ["privacy policy", "PIPEDA", "cookies", "analytics", "data protection"],
});

const faqs = [
  {
    q: "Do you sell my personal information?",
    a: "No. We never sell, rent or trade your personal information. We share it only as needed to deliver our services (for example, submitting your application to IRCC on your instructions) or where the law requires it, and only with providers bound by confidentiality obligations.",
  },
  {
    q: "Does this website use cookies and tracking?",
    a: "Yes. We use cookies and similar technologies for basic site functionality and for analytics that help us understand how the site is used (such as Google Analytics) and, where applicable, advertising or conversion measurement tools. These collect information like pages viewed, device type and approximate region. These analytics load when you use the site (we do not show a separate cookie banner), which Canadian privacy law permits for non-identifying analytics, and you can control or block cookies at any time through your browser settings or the provider's opt-out tools.",
  },
  {
    q: "What analytics and third-party tools do you use?",
    a: "We may use privacy-conscious analytics and marketing measurement tools (for example, Google Analytics and similar platforms) to understand site traffic, improve content and measure the performance of our ads. These providers may set their own cookies and process limited data such as a truncated IP address, device and browser details, and the pages you view, under their own privacy terms.",
  },
  {
    q: "Is it safe to send my documents through the website?",
    a: "Please do not send sensitive immigration documents through the website's contact form or by ordinary email until we have set up a secure channel with you. Information sent over the internet is not guaranteed to be secure. Once you become a client we use secure document handling for your file.",
  },
  {
    q: "How long do you keep my information?",
    a: "We keep your information only as long as necessary for the purposes described in this policy and to meet professional and legal record-keeping requirements that apply to a regulated immigration practice. After that, we securely destroy or anonymise it.",
  },
  {
    q: "What are my privacy rights?",
    a: "Under PIPEDA and Alberta's PIPA you can ask to see the personal information we hold about you, ask us to correct it, withdraw your consent, or ask us to delete information we are not required to keep. Contact us and we will respond within the timeframes the law requires.",
  },
  {
    q: "Is my information ever stored or processed outside Canada?",
    a: "Some of our service providers (for example, email, analytics or cloud hosting) may store or process data outside Canada, including in the United States. Where that happens, the information may be subject to the laws of those countries. We use reputable providers and reasonable safeguards to protect it.",
  },
  {
    q: "How do I make a privacy complaint?",
    a: "Contact us first and we will work to resolve it. If you are not satisfied, you may contact the Office of the Privacy Commissioner of Canada or the Office of the Information and Privacy Commissioner of Alberta.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={articleLd({ headline: "Privacy Policy", description: "How Wild Mountain Immigration collects, uses, tracks and protects your personal information under Canadian privacy law (PIPEDA and Alberta PIPA).", path: PATH, dateModified: "2026-05-31" })} />
      <PageHero
        eyebrow="Legal"
        crumbs={[{ name: "Privacy Policy", path: PATH }]}
        title={<>Privacy <span className="text-brand">policy</span></>}
        lede={<p>This policy explains how <strong>{site.legalName}</strong> collects, uses, tracks, discloses and protects your personal information, in line with Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta&apos;s Personal Information Protection Act (PIPA).</p>}
        primaryCta={{ href: "/contact", label: "Contact us about privacy" }}
      />

      <section className="py-14 lg:py-20">
        <Container>
          <Prose className="max-w-3xl">
            <p className="text-sm text-ink-faint">Last updated: {UPDATED}.</p>

            <Callout type="info" title="Plain-language summary">
              We only collect what we need to advise on and prepare your immigration matter, plus basic website analytics
              to improve the site. We never sell your data, we keep it secure, and you can ask to see, correct or delete
              your information at any time.
            </Callout>

            <h2>1. Who we are</h2>
            <p>
              {site.legalName} (&ldquo;Wild Mountain Immigration&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is an immigration consulting practice based in {site.locality}, {site.region}, led by{" "}
              {site.rcicName}, a Regulated Canadian Immigration Consultant (RCIC #{site.rcicNumber}) governed by the
              College of Immigration and Citizenship Consultants (CICC). We are the organisation responsible for the
              personal information collected through this website and in the course of our services. You can reach us through our{" "}
              <a href="/contact">contact page</a> or by phone at <a href={site.phoneHref}>{site.phone}</a>.
            </p>

            <h2>2. The information we collect</h2>
            <p>We collect personal information that you give us and that is collected automatically when you use the site.</p>
            <h3>Information you provide</h3>
            <ul>
              <li>Contact details such as your name, email, phone number and country of residence.</li>
              <li>Enquiry and consultation details, including the message and background you choose to share.</li>
              <li>For active files: immigration history, education, work experience, language results, family details and identity or supporting documents needed to prepare your application.</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>Technical data such as your device type, browser, operating system and a truncated or full IP address.</li>
              <li>Usage data such as the pages you view, links you click, time on page, referring website and approximate region.</li>
              <li>Cookie and analytics identifiers set by us or our analytics and advertising providers (see Cookies and tracking below).</li>
            </ul>

            <h2>3. How we use your information</h2>
            <p>We use personal information only for legitimate purposes connected to our services and website, namely to:</p>
            <ul>
              <li>respond to your enquiry and provide a consultation;</li>
              <li>assess your eligibility and prepare, review or submit immigration applications on your instructions;</li>
              <li>communicate with you about your file and meet our professional, regulatory and legal obligations;</li>
              <li>operate, secure and improve the website and understand how visitors use it; and</li>
              <li>measure the performance of our marketing and, where permitted, show relevant ads.</li>
            </ul>

            <h2>4. Cookies and tracking technologies</h2>
            <p>
              This website uses cookies, pixels, tags and similar technologies. Some are strictly necessary for the site
              to function. Others support analytics and marketing: these load when you use the site, which Canadian
              privacy law permits for non-identifying analytics, and we do not show a separate cookie banner. You can opt
              out at any time using the controls below. We may use:
            </p>
            <ul>
              <li><strong>Essential cookies</strong>, required for security and core functionality.</li>
              <li><strong>Analytics cookies</strong> (for example, Google Analytics) that help us understand traffic and improve content. These typically collect a truncated IP address, device and browser details, and the pages you view.</li>
              <li><strong>Marketing and conversion cookies</strong> (for example, advertising or pixel tools) that help us measure and improve campaigns and may support remarketing, where applicable.</li>
            </ul>
            <p>
              You can control or block cookies through your browser settings and opt out of many analytics and advertising
              cookies through the provider&apos;s own tools. Disabling cookies may affect some features of the site.
            </p>

            <h2>5. Consent</h2>
            <p>
              We collect, use and disclose your personal information with your consent. By contacting us or submitting a
              form, you agree to us using your details to respond. For website analytics and marketing technologies, we
              rely on your implied consent through your continued use of the site, as permitted under PIPEDA and Alberta&apos;s
              PIPA for non-identifying analytics, rather than a cookie banner; you can opt out at any time using your
              browser settings or the provider&apos;s own tools. For active files, we obtain your informed consent before we
              act on your matter or submit anything to IRCC or another government body. You may withdraw consent at any
              time, subject to legal and contractual limits, by contacting us.
            </p>

            <h2>6. How we share information</h2>
            <p>
              We do not sell your personal information. We disclose it only as needed to deliver our services or as
              required by law, including:
            </p>
            <ul>
              <li>to Immigration, Refugees and Citizenship Canada (IRCC) or a provincial program when we submit your application on your instructions;</li>
              <li>to trusted service providers (such as secure document storage, email, cloud hosting, analytics and payment processing) who are bound by confidentiality and may only use the data to provide their service to us; and</li>
              <li>where required by law, a regulator, a court, or to protect our legal rights.</li>
            </ul>

            <h2>7. International storage and transfers</h2>
            <p>
              Some of our service providers may store or process information outside Canada, including in the United
              States. Where that occurs, your information may be subject to the laws of those jurisdictions, including
              lawful access by foreign authorities. We use reputable providers and reasonable safeguards to protect your
              information wherever it is processed.
            </p>

            <h2>8. How we protect your information</h2>
            <p>
              We use reasonable physical, technical and administrative safeguards to protect your information against loss,
              theft and unauthorised access, use or disclosure. As a CICC-regulated practice, we are also bound by
              professional rules on confidentiality and the secure handling of client records. No method of transmission or
              storage is completely secure, so we cannot guarantee absolute security.
            </p>

            <h2>9. How long we keep it</h2>
            <p>
              We keep your information only as long as necessary for the purposes in this policy and to meet the
              professional and legal record-keeping requirements that apply to a regulated immigration practice. When it is
              no longer needed, we securely destroy or anonymise it.
            </p>

            <h2>10. Your privacy rights</h2>
            <p>
              Under PIPEDA and Alberta&apos;s PIPA you may ask to access the personal information we hold about you, request
              a correction, withdraw your consent, or ask us to delete information we are not legally required to keep.
              Contact us through our <a href="/contact">contact page</a> and we will respond within the timeframes
              required by law. If you are not satisfied with our response, you may contact the Office of the Privacy
              Commissioner of Canada or the Office of the Information and Privacy Commissioner of Alberta.
            </p>

            <h2>11. Children&apos;s privacy</h2>
            <p>
              This website is intended for adults. We do not knowingly collect personal information from children without
              the consent of a parent or guardian, except as part of a family immigration application handled through a
              responsible adult.
            </p>

            <h2>12. Third-party links</h2>
            <p>
              Our website links to third-party sites, such as canada.ca and the CICC register. We are not responsible for
              the privacy practices of those sites, and we encourage you to read their policies.
            </p>

            <h2>13. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &ldquo;last updated&rdquo; date above reflects the current
              version, and material changes will be posted on this page. Your continued use of the site after changes are
              posted means you accept the updated policy.
            </p>

            <h2>14. Contact us</h2>
            <p>
              For any privacy question or request, contact {site.legalName} through our{" "}
              <a href="/contact">contact page</a> or by phone at <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </Prose>

          <div className="mx-auto mt-16 max-w-3xl">
            <Faq items={faqs} title="Privacy questions, answered" />
          </div>
        </Container>
      </section>
    </>
  );
}
