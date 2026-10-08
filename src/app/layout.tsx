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
  title: "Levitate Dynamics | Persistent Stratospheric Flight",
  description:
    "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite platforms for persistent surveillance, communications and wide-area situational awareness.",
  metadataBase: new URL("https://levitatedynamics.in"),
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
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
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
      <body className="min-h-full flex flex-col font-sans bg-[#09090b] text-[#f4f4f5] selection:bg-[#00f5ff]/25 selection:text-[#00f5ff] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
