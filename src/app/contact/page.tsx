import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Mission Command | Levitate Dynamics",
  description:
    "Connect with Levitate Dynamics headquarters in Nagpur, Maharashtra for defense procurement, platform payload integration, partnerships, and investor relations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Levitate Dynamics | Stratospheric Aerospace Command",
    description:
      "Get in touch with Levitate Dynamics headquarters in Nagpur, Maharashtra for defense, aerospace, and HAPS mission inquiries.",
    url: "https://levitatedynamics.in/contact",
    siteName: "Levitate Dynamics",
    images: [
      {
        url: "/haps-aircraft.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Levitate Dynamics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Levitate Dynamics | Stratospheric Aerospace Command",
    description:
      "Get in touch with Levitate Dynamics headquarters in Nagpur, Maharashtra for defense, aerospace, and HAPS mission inquiries.",
    images: ["/haps-aircraft.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-24 sm:pt-28 pb-20 bg-[#0b0b0e] text-white min-h-screen">
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-12">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#00dbe9] uppercase font-semibold block mb-3">
              CONNECT WITH US
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-headline-md leading-[1.08] mb-4">
              CONTACT LEVITATE DYNAMICS
            </h1>
            <p className="text-slate-300 font-body-md text-base sm:text-lg leading-relaxed font-light">
              Tell us about your mission, technology requirement, or partnership.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading mission inquiry form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-[#111115] border border-white/10 rounded-sm space-y-4">
                <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider block">
                  HEADQUARTERS
                </span>
                <h3 className="text-lg font-bold font-heading uppercase text-white">
                  NAGPUR OPERATIONS COMMAND
                </h3>
                <address className="not-italic text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  Flat No. 301, Borkute Lay Out,<br />
                  Narendra Nagar, Nagpur,<br />
                  Maharashtra 440015, India.
                </address>
                <div className="pt-2 text-xs font-mono text-zinc-500">
                  CIN: U30305MH2025PTC447508
                </div>
                <div className="pt-2">
                  <a
                    href="https://share.google/WappuysEw0qQjJH6W"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-300 hover:text-white underline inline-flex items-center gap-1"
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </div>

              <div className="p-8 bg-[#111115] border border-white/10 rounded-sm space-y-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  OFFICIAL CHANNELS
                </span>
                <div className="text-xs text-zinc-300 space-y-3 font-sans">
                  <div>
                    <span className="text-zinc-500 block text-xs font-mono uppercase mb-1">Mission &amp; Defense Inquiries:</span>
                    <a
                      href="mailto:levitateworks.office@gmail.com"
                      className="text-[#00f5ff] font-mono hover:underline text-sm"
                    >
                      levitateworks.office@gmail.com
                    </a>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.tofler.in/levitate-dynamics-private-limited/company/U30305MH2025PTC447508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-white underline"
                    >
                      Corporate Record (Tofler) ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
