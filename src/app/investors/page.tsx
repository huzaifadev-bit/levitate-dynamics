import type { Metadata } from "next";
import InvestorsClient from "@/components/InvestorsClient";

export const metadata: Metadata = {
  title: "Investor Relations & Capital Allocation | Levitate Dynamics",
  description:
    "Invest in sovereign stratospheric aerospace infrastructure. Discover Levitate Dynamics' high-altitude pseudo-satellite platform economics, market opportunity, and corporate structure.",
  alternates: {
    canonical: "/investors",
  },
  openGraph: {
    title: "Investor Relations & Capital Allocation | Levitate Dynamics",
    description:
      "Invest in sovereign stratospheric aerospace infrastructure. Discover Levitate Dynamics' high-altitude pseudo-satellite platform economics, market opportunity, and corporate structure.",
    url: "https://levitatedynamics.in/investors",
    siteName: "Levitate Dynamics",
    images: [
      {
        url: "/haps-aircraft.jpg",
        width: 1200,
        height: 630,
        alt: "Levitate Dynamics Investor Relations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Relations & Capital Allocation | Levitate Dynamics",
    description:
      "Invest in sovereign stratospheric aerospace infrastructure with Levitate Dynamics.",
    images: ["/haps-aircraft.jpg"],
  },
};

export default function InvestorsPage() {
  return <InvestorsClient />;
}
