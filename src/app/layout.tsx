import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: {
    default: "Levitate Dynamics | Persistent Stratospheric Flight",
    template: "%s | Levitate Dynamics",
  },
  description:
    "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite platforms for persistent surveillance, communications and wide-area situational awareness.",
  metadataBase: new URL("https://levitatedynamics.in"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Levitate Dynamics",
    "HAPS",
    "High Altitude Pseudo Satellite",
    "Stratospheric Flight",
    "Sovereign Defense",
    "Persistent Surveillance",
    "Aerospace India",
    "Nagpur Aerospace",
    "Solar Electric Aircraft",
  ],
  authors: [{ name: "Levitate Dynamics Private Limited" }],
  openGraph: {
    title: "Levitate Dynamics | Persistent Stratospheric Flight",
    description:
      "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite platforms for persistent surveillance, communications and wide-area situational awareness.",
    url: "https://levitatedynamics.in",
    siteName: "Levitate Dynamics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/haps-aircraft.jpg",
        width: 1200,
        height: 630,
        alt: "Levitate Dynamics Stratospheric HAPS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levitate Dynamics | Persistent Stratospheric Flight",
    description:
      "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite platforms for persistent surveillance, communications and wide-area situational awareness.",
    images: ["/haps-aircraft.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://levitatedynamics.in/#organization",
      "name": "Levitate Dynamics Private Limited",
      "legalName": "Levitate Dynamics Private Limited",
      "url": "https://levitatedynamics.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://levitatedynamics.in/logo.svg",
      },
      "identifier": {
        "@type": "PropertyValue",
        "name": "Corporate Identification Number (CIN)",
        "value": "U30305MH2025PTC447508",
      },
      "email": "levitateworks.office@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat No. 301, Borkute Lay Out, Narendra Nagar",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440015",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://www.tofler.in/levitate-dynamics-private-limited/company/U30305MH2025PTC447508",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://levitatedynamics.in/#website",
      "url": "https://levitatedynamics.in",
      "name": "Levitate Dynamics",
      "description":
        "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite platforms for persistent surveillance, communications and wide-area situational awareness.",
      "publisher": {
        "@id": "https://levitatedynamics.in/#organization",
      },
      "inLanguage": "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#09090b] text-[#f4f4f5] selection:bg-[#00f5ff]/25 selection:text-[#00f5ff] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
