import type { Metadata, Viewport } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
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
  themeColor: "#131316",
};

export const metadata: Metadata = {
  title: "Levitate Dynamics — Stratospheric Aerospace Intelligence",
  description: "Architecting next-generation High Altitude Pseudo-Satellites (HAPS) for sovereign persistent surveillance, low-latency 5G telecom bridging, and autonomous stratospheric operations.",
  metadataBase: new URL("https://levitate-dynamics-real.vercel.app"),
  keywords: [
    "HAPS",
    "High Altitude Pseudo Satellite",
    "Aerospace India",
    "Stratospheric UAV",
    "Autonomous Flight",
    "Sovereign Defense Technology",
    "Nagpur Aerospace",
    "Solar Electric Aircraft",
  ],
  authors: [{ name: "Levitate Dynamics" }],
  openGraph: {
    title: "Levitate Dynamics — Stratospheric Aerospace Intelligence",
    description: "Architecting next-generation High Altitude Pseudo-Satellites (HAPS) for continuous observation, real-time sensing, and sovereign intelligence.",
    url: "https://levitate-dynamics-real.vercel.app",
    siteName: "Levitate Dynamics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levitate Dynamics — Stratospheric Aerospace Intelligence",
    description: "Sovereign high-altitude aerospace independence and persistent stratospheric presence.",
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
      className={`dark ${orbitron.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body-md bg-background text-on-surface selection:bg-primary-fixed/30 selection:text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
