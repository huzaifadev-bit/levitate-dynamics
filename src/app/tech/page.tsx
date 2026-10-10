import type { Metadata } from "next";
import TechClient from "@/components/TechClient";

export const metadata: Metadata = {
  title: "Stratospheric Technology & Architecture | Levitate Dynamics",
  description:
    "Explore Levitate Dynamics' sovereign HAPS engineering: ultra-high aspect ratio carbon airframe, solar energy harvesting, autonomous flight stack, and modular payload architecture.",
  alternates: {
    canonical: "/tech",
  },
  openGraph: {
    title: "Stratospheric Technology & Architecture | Levitate Dynamics",
    description:
      "Explore Levitate Dynamics' sovereign HAPS aerospace architecture, aerodynamics, solar propulsion, and autonomous avionics.",
    url: "https://levitatedynamics.in/tech",
    siteName: "Levitate Dynamics",
    images: [
      {
        url: "/haps-aircraft.jpg",
        width: 1200,
        height: 630,
        alt: "Levitate Dynamics Stratospheric Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratospheric Technology & Architecture | Levitate Dynamics",
    description:
      "Explore Levitate Dynamics' sovereign HAPS aerospace architecture, aerodynamics, solar propulsion, and autonomous avionics.",
    images: ["/haps-aircraft.jpg"],
  },
};

export default function TechPage() {
  return <TechClient />;
}
