import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Levitate Dynamics | Persistent Stratospheric Flight & Sovereign HAPS",
  description:
    "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite (HAPS) platforms for persistent surveillance, sovereign border security, telecommunications, and wide-area situational awareness at 65,000 feet.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Levitate Dynamics | Persistent Stratospheric Flight & Sovereign HAPS",
    description:
      "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite (HAPS) platforms for persistent surveillance, sovereign border security, telecommunications, and wide-area situational awareness at 65,000 feet.",
    url: "https://levitatedynamics.in",
    siteName: "Levitate Dynamics",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/haps-aircraft.jpg",
        width: 1200,
        height: 630,
        alt: "Levitate Dynamics Sovereign HAPS Stratospheric Aircraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levitate Dynamics | Persistent Stratospheric Flight & Sovereign HAPS",
    description:
      "Levitate Dynamics develops indigenous High Altitude Pseudo-Satellite (HAPS) platforms for persistent surveillance, sovereign border security, and telecommunications.",
    images: ["/haps-aircraft.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
