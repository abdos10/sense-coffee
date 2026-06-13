import type { Metadata } from "next";
import { arabicFont, displayFont } from "@/styles/fonts";
import { site } from "@/data/site";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/logo/logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Doha",
        addressCountry: "QA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${site.whatsappNumber}`,
        contactType: "customer service",
      },
      sameAs: [
        `https://wa.me/${site.whatsappNumber}`,
      ],
    },
    {
      "@type": "LocalBusiness",
      name: site.name,
      description: "Premium coffee roasting and supply company based in Qatar",
      url: site.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Doha",
        addressCountry: "QA",
      },
      telephone: `+${site.whatsappNumber}`,
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} - From Our Roastery to Your Cup`,
    template: `%s | ${site.name}`,
  },
  description:
    `${site.name} - Premium coffee roasting and supply company in Qatar. Freshly roasted coffee beans sourced from the world's finest origins.`,
  metadataBase: new URL(site.url),
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} - From Our Roastery to Your Cup`,
    description:
      `${site.name} - Premium coffee roasting and supply company in Qatar.`,
    url: site.url,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: `${site.name} - Premium coffee roasting and supply company in Qatar.`,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="ltr" lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${arabicFont.variable} ${displayFont.variable} font-arabic antialiased`}>
        {children}
      </body>
    </html>
  );
}
