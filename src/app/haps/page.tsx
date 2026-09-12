import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HAPS_PLATFORM } from "@/lib/platforms";

export const metadata = {
  title: "Flagship HAPS — Autonomous Stratospheric Platform | Levitate Dynamics",
  description: "High-Altitude Pseudo-Satellite (HAPS) engineered for persistent stratospheric loiter, bridging tactical UAV agility with orbital satellite persistence.",
};

export default function HapsPage() {
  const p = HAPS_PLATFORM;

  return (
    <>
      <Header />

      <main className="pt-20 bg-[#09090b] text-white min-h-screen selection:bg-white selection:text-black">
        {/* ============================================================
            1. HERO SECTION
            ============================================================ */}
        <section className="relative min-h-[80vh] flex items-end pb-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <img
              src="/haps-aircraft.jpg"
              alt="Levitate Dynamics HAPS Platform"
              className="w-full h-full object-cover object-center sm:object-[center_35%] opacity-85 sm:opacity-90 filter contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/45 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-[#09090b]/35 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase font-semibold">
                {p.badge} // INDIGENOUS AEROSPACE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-headline-md uppercase tracking-tight text-white mb-4">
              {p.name}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light max-w-3xl leading-relaxed mb-6">
              {p.tagline}
            </p>

            {/* Key Verified Specifications */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 py-6 border-y border-white/10 my-8 max-w-md">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline-sm text-white">24 m</div>
                <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase mt-1 font-semibold">WINGSPAN</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline-sm text-white">8 kg</div>
                <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase mt-1 font-semibold">PAYLOAD</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center"
              >
                REQUEST MISSION BRIEFING
              </Link>
              <a
                href="#specifications"
                className="px-6 py-3.5 border border-zinc-700 hover:border-zinc-400 text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center bg-transparent"
              >
                VIEW SPECIFICATIONS
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. SYSTEM OVERVIEW
            ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase block mb-2 font-semibold">
                SYSTEM OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline-sm uppercase text-white tracking-wide">
                {p.headline}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-zinc-300 font-body-md text-base sm:text-lg leading-relaxed font-light">
              {p.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            3. KEY CAPABILITIES
            ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0e0e12] border-y border-white/10">
          <div className="max-w-container-max mx-auto">
            <div className="mb-12 sm:mb-16">
              <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase block mb-2 font-semibold">
                OPERATIONAL PERFORMANCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline-sm uppercase text-white tracking-wide">
                CORE SYSTEM CAPABILITIES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {p.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#131317] border border-white/10 rounded-sm hover:border-white/25 transition-colors"
                >
                  <span className="text-xs font-mono text-zinc-500 block mb-4">
                    {`0${idx + 1}`}
                  </span>
                  <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wide mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light font-body-md">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            4. SPECIFICATIONS DATASHEET
            ============================================================ */}
        <section id="specifications" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto scroll-mt-20">
          <div className="mb-12 sm:mb-16">
            <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase block mb-2 font-semibold">
              VERIFIED ENGINEERING MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline-md uppercase text-white tracking-wide">
              PLATFORM SPECIFICATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 sm:p-10 bg-[#121216] border border-white/10 rounded-sm flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline-sm text-white tracking-tight mb-2">
                  24 m
                </div>
                <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase font-semibold mb-4">
                  WINGSPAN
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light font-body-md leading-relaxed">
                  Ultra-lightweight high-aspect-ratio carbon composite airframe optimized for low atmospheric density in the stratosphere.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 bg-[#121216] border border-white/10 rounded-sm flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline-sm text-white tracking-tight mb-2">
                  8 kg
                </div>
                <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase font-semibold mb-4">
                  PAYLOAD
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light font-body-md leading-relaxed">
                  Quick-swap standardized modular payload bay supporting electro-optical sensors, communications relays, and edge compute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. MODULAR MISSION ARCHITECTURES
            ============================================================ */}
        <section id="payloads" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0e0e12] border-y border-white/10">
          <div className="max-w-container-max mx-auto">
            <div className="mb-12 sm:mb-16">
              <span className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase block mb-2 font-semibold">
                DEPLOYMENT PROFILES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline-sm uppercase text-white tracking-wide">
                MODULAR MISSION ARCHITECTURES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {p.missions.map((mission, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#131317] border border-white/10 rounded-sm space-y-4"
                >
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    {`CONFIGURATION 0${idx + 1}`}
                  </div>
                  <h3 className="text-xl font-bold font-headline-sm uppercase text-white tracking-wide">
                    {mission.title}
                  </h3>
                  <div className="space-y-2 text-sm text-zinc-400 font-light font-body-md">
                    <div>
                      <span className="text-zinc-300 font-normal">Context: </span>
                      {mission.context}
                    </div>
                    <div>
                      <span className="text-zinc-300 font-normal">Operational Impact: </span>
                      {mission.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            6. CTA SECTION
            ============================================================ */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white">
              DEPLOY PERSISTENT STRATOSPHERIC COVERAGE
            </h2>
            <p className="text-zinc-400 font-body-md text-sm sm:text-base leading-relaxed font-light">
              Contact our engineering and flight operations team to discuss airframe availability, custom payload integration, and mission timelines.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all inline-block"
              >
                CONTACT MISSION TEAM
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
