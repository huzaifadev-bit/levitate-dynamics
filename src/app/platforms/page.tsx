import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HAPS_PLATFORM } from "@/lib/platforms";

export const metadata = {
  title: "Platforms — Levitate Dynamics",
  description: "Explore the Flagship High Altitude Pseudo-Satellite (HAPS) engineered by Levitate Dynamics for persistent stratospheric loiter at 65,000 feet.",
};

export default function PlatformsPage() {
  const platform = HAPS_PLATFORM;

  return (
    <>
      <Header />

      <main className="pt-24 sm:pt-28 pb-20 bg-[#09090b] text-white min-h-screen selection:bg-white selection:text-black">
        {/* Header Hero */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold block mb-3">
              SOVEREIGN AIRCRAFT
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-headline-md leading-[1.1] mb-6">
              OUR PLATFORM
            </h1>
            <p className="text-zinc-300 font-body-md text-base sm:text-lg leading-relaxed font-light">
              Levitate Dynamics designs and manufactures specialized solar-electric High Altitude Pseudo-Satellites (HAPS). Engineered for persistent stratospheric operations at 65,000 feet, our platform bridges the operational gap between tactical drones and orbital satellites.
            </p>
          </div>
        </section>

        {/* Platform Showcase */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto">
          <article className="rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 hover:border-white/20 transition-all duration-300 bg-[#121216]">
            {/* Visual Container */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] bg-black overflow-hidden group">
              <img
                src={platform.image}
                alt={platform.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#121216]"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300 tracking-widest uppercase rounded-sm">
                  {platform.badge}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 text-[11px] font-mono text-zinc-400">
                LEVITATE DYNAMICS HAPS
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#121216]">
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                  01 // {platform.designation}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-headline-sm uppercase tracking-wider mb-4">
                  {platform.name}
                </h2>
                <p className="text-zinc-300 font-body-md text-sm leading-relaxed mb-6 font-light">
                  {platform.summary}
                </p>

                {/* Key Verified Specifications */}
                <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/10 mb-8">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold font-headline-sm text-white">24 m</div>
                    <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase mt-1 font-semibold">WINGSPAN</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold font-headline-sm text-white">8 kg</div>
                    <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase mt-1 font-semibold">PAYLOAD</div>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/haps"
                  className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <span>VIEW FULL SPECIFICATIONS</span>
                  <span className="text-sm">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 border border-zinc-700 hover:border-zinc-400 text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-all text-center"
                >
                  INQUIRE MISSION
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* Modular Missions Banner */}
        <section className="mt-16 px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto">
          <div className="p-8 sm:p-12 bg-[#121216] border border-white/10 rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-headline-sm uppercase tracking-wide mb-2">
                Custom Mission Payloads &amp; Integration
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed font-light">
                Levitate Dynamics offers tailored platform airframes and payload integration services for defense agencies, national security entities, and telecommunication organizations.
              </p>
            </div>
            <Link
              href="/contact?dept=defense"
              className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all whitespace-nowrap"
            >
              CONTACT MISSION TEAM
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
