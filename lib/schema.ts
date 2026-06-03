// Entity / Knowledge-Graph JSON-LD @graph (from ENTITY-ASSETS-DRAFT.md)
import { site } from "./site";
import { reviewSchema } from "./reviews";

const ORG_ID = `${site.url}/#org`;
const PERSON_ID = `${site.url}/#nicola`;
const LOGO_ID = `${site.url}/#logo`;

export function buildGraph(faqs?: { q: string; a: string }[]) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      logo: { "@id": LOGO_ID },
      image: { "@id": LOGO_ID },
      slogan: site.tagline,
      description:
        "Canmore immigration consultant: a CICC-regulated RCIC practice helping clients across Canada with Express Entry, the Alberta AAIP, family sponsorship and work permits.",
      foundingDate: site.founded,
      founder: { "@id": PERSON_ID },
      employee: { "@id": PERSON_ID },
      telephone: site.phone,
      email: site.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone,
        email: site.email,
        areaServed: "CA",
        availableLanguage: ["en"],
      },
      priceRange: "$$",
      knowsLanguage: "en",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressRegion: site.regionCode,
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.0884,
        longitude: -115.3479,
      },
      areaServed: [
        ...site.areasServed.map((name) => ({ "@type": "City", name })),
        { "@type": "Country", name: "Canada" },
      ],
      knowsAbout: [
        "Express Entry",
        "Provincial Nominee Program",
        "Alberta Advantage Immigration Program",
        "Canadian permanent residence",
        "Spousal and family sponsorship",
        "Super Visa",
        "Labour Market Impact Assessment",
        "Work permits",
        "Post-Graduation Work Permit",
        "Study permits",
        "Canadian citizenship",
      ],
      memberOf: {
        "@type": "Organization",
        name: "College of Immigration and Citizenship Consultants",
        alternateName: "CICC",
        url: "https://college-ic.ca",
      },
      ...reviewSchema(),
      hasMap: "https://maps.app.goo.gl/rq6E6ejWW1q6z77x8",
      sameAs: [
        "https://maps.app.goo.gl/rq6E6ejWW1q6z77x8",
        "https://www.youtube.com/@wildmountainimmigration",
        "https://www.facebook.com/people/Wild-Mountain-Immigration/61554082919431/",
        "https://www.instagram.com/wildmountainimmigration/",
      ],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: site.rcicName,
      jobTitle: "Regulated Canadian Immigration Consultant (RCIC)",
      worksFor: { "@id": ORG_ID },
      url: `${site.url}/about`,
      image: `${site.url}/brand/nicola-wightman.avif`,
      nationality: { "@type": "Country", name: "United Kingdom" },
      description:
        "Founder of Wild Mountain Immigration and a Canmore-based Regulated Canadian Immigration Consultant (RCIC) in good standing with the CICC. A UK immigrant who navigated the Canadian immigration system herself.",
      knowsAbout: [
        "Express Entry",
        "Alberta Advantage Immigration Program",
        "Family sponsorship",
        "Work permits",
        "Study permits",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional License",
        name: "Regulated Canadian Immigration Consultant (RCIC)",
        identifier: site.rcicNumber,
        recognizedBy: {
          "@type": "Organization",
          name: "College of Immigration and Citizenship Consultants",
          url: "https://college-ic.ca",
        },
      },
    },
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${site.url}/brand/wmi-logo.svg`,
      caption: site.name,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-CA",
    },
  ];

  if (faqs && faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
