import type { Metadata, Viewport } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { AppShell } from "@/components/site/app-shell";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { EligibilityNudge } from "@/components/site/eligibility-nudge";
import { Analytics } from "@/components/site/analytics";
import { GoogleTagManager } from "@next/third-parties/google";
import { buildGraph } from "@/lib/schema";
import { jsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Canmore Immigration Consultant | Wild Mountain Immigration",
    template: "%s | Wild Mountain Immigration",
  },
  description:
    "Canmore immigration consultant. A CICC-regulated RCIC helping clients across Canada with Express Entry, the Alberta AAIP, sponsorship and work permits.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_CA",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: false, email: false },
  other: { "facebook-domain-verification": "xk4mtv2sz3jama0zk8rakyrwky714e" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e00400",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${jost.variable} ${inter.variable} h-full`}
    >
      <head>
        {/* Speed up the LCP hero image (served from the image CDN) */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <GoogleTagManager gtmId="GTM-TWNKHJV" />
      <body className="min-h-full flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(buildGraph()) }}
        />
        <ScrollToTop />
        <Analytics />
        <Header />
        <main className="flex-1">
          <AppShell>{children}</AppShell>
        </main>
        <Footer />
        <EligibilityNudge />
      </body>
    </html>
  );
}
