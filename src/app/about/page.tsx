"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="pt-24 sm:pt-28 pb-20 bg-[#0b0b0e] text-white min-h-screen">
        {/* ============================================================
            1. ABOUT US (Hero)
            ============================================================ */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#00dbe9] uppercase font-semibold block mb-3">
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-headline-md leading-[1.08] mb-6">
              LEVITATE DYNAMICS
            </h1>
            <p className="text-slate-300 font-body-md text-base sm:text-xl leading-relaxed font-light">
              Levitate Dynamics is an Indian deep-tech aerospace enterprise engineering autonomous High Altitude Pseudo-Satellites (HAPS). Headquartered in Nagpur, Maharashtra, we develop sovereign stratospheric platforms for persistent observation, communications, and atmospheric domain awareness.
            </p>
          </div>
        </section>

        {/* Large Imagery Banner */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-20 sm:mb-28">
          <div className="relative h-[300px] sm:h-[450px] lg:h-[520px] rounded-sm overflow-hidden border border-white/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXSQKXhfeJmYUGP6hSqWaeFyTS3J2CUoiokI2lQ5fSsG8IERxk1NEEtJgVrSb5pEI-3IU_39YFPdVHgUcQkIiQgDrtfp4vW7jIXrVwN-PlDhH24iCRkzO8bcjTLqQSuVUWqKl2Fe3GiQDBQut8bQJs9eBSO5Iy-L4E-fH8rLd48Ile91tT6aEd4cviNhD4IrF_CcDcGerRbSOzcU8xL9kEvwoazHfhhF2TTQu6UZyLoVkaHiiby035270r7gTmy0zjw5zQzYZrV1M"
              alt="High-altitude Earth curvature"
              className="w-full h-full object-cover opacity-60 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
              <span>NAGPUR, MAHARASHTRA, INDIA</span>
              <span className="text-white">CRUISE CEILING: 65,000 FT (20 KM)</span>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. OUR MISSION
            ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f0f13] border-y border-white/10 mb-20 sm:mb-28">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
                OUR MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white tracking-wide">
                SOVEREIGN STRATOSPHERIC INDEPENDENCE
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-slate-300 font-body-md text-base sm:text-lg leading-relaxed font-light">
              <p>
                Our mission is to build India&apos;s indigenous stratospheric infrastructure, eliminating foreign dependencies for persistent regional observation and critical communications.
              </p>
              <p>
                By developing autonomous solar-electric platforms that operate continuously at 65,000 feet, Levitate Dynamics provides defense forces, emergency responders, and telecommunication providers with perpetual regional coverage at a fraction of satellite launch costs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
                <div className="p-4 bg-[#141418] border border-white/10 rounded-sm">
                  <span className="text-slate-500 uppercase block mb-1">STATION CEILING</span>
                  <span className="text-base font-bold text-white font-headline-sm">65,000 FT</span>
                </div>
                <div className="p-4 bg-[#141418] border border-white/10 rounded-sm">
                  <span className="text-slate-500 uppercase block mb-1">STATION ENDURANCE</span>
                  <span className="text-base font-bold text-[#00dbe9] font-headline-sm">90+ DAYS</span>
                </div>
                <div className="p-4 bg-[#141418] border border-white/10 rounded-sm">
                  <span className="text-slate-500 uppercase block mb-1">INDIGENOUS DESIGN</span>
                  <span className="text-base font-bold text-white font-headline-sm">100% IN-HOUSE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. OUR TECHNOLOGY
            ============================================================ */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-20 sm:mb-28">
          <div className="mb-12 sm:mb-16">
            <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
              OUR TECHNOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
              AEROSPACE ARCHITECTURE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm">
              <span className="text-xs font-mono text-slate-500 block mb-4">01</span>
              <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                HIGH-ASPECT AERO STRUCTURE
              </h3>
              <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                Ultra-lightweight carbon-composite airframes engineered for structural efficiency and low-density stratospheric flight.
              </p>
            </div>

            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm">
              <span className="text-xs font-mono text-slate-500 block mb-4">02</span>
              <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                PERPETUAL ENERGY CYCLE
              </h3>
              <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                Solar energy harvesting arrays integrated directly into upper wing surfaces, paired with high-density energy storage for continuous nocturnal persistence.
              </p>
            </div>

            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm">
              <span className="text-xs font-mono text-slate-500 block mb-4">03</span>
              <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                AUTONOMOUS FLIGHT SUITE
              </h3>
              <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                Proprietary real-time operating software managing continuous energy optimization, automated wind compensation, and fail-safe return-to-base protocols.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. OUR APPROACH
            ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f0f13] border-y border-white/10 mb-20 sm:mb-28">
          <div className="max-w-container-max mx-auto">
            <div className="mb-12 sm:mb-16">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white tracking-tight">
                HOW WE BUILD
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-[#00dbe9] uppercase tracking-widest block mb-3">
                  RAPID ITERATION
                </span>
                <h3 className="text-base font-bold font-headline-sm uppercase text-white tracking-wider mb-2">
                  MODULAR PROTOTYPING
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  We validate airframes, avionics, and power systems through rapid ground testing, computational fluid dynamics (CFD), and sub-scale flight evaluations before full-envelope deployment.
                </p>
              </div>

              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-[#00dbe9] uppercase tracking-widest block mb-3">
                  SOVEREIGN FABRICATION
                </span>
                <h3 className="text-base font-bold font-headline-sm uppercase text-white tracking-wider mb-2">
                  IN-HOUSE ADVANCED MANUFACTURING
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  Composite spar layups, avionics firmware, solar encapsulation, and telemetry protocols are designed and assembled in India, guaranteeing sovereign integrity.
                </p>
              </div>

              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-[#00dbe9] uppercase tracking-widest block mb-3">
                  MISSION-FIRST DESIGN
                </span>
                <h3 className="text-base font-bold font-headline-sm uppercase text-white tracking-wider mb-2">
                  OPERATIONAL RESILIENCE
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  Platforms are engineered to deploy and recover from standard regional airfields, avoiding the need for dedicated rocket spaceports or specialized launch rails.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. WHY THE STRATOSPHERE
            ============================================================ */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
                THE STRATOSPHERIC ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white tracking-wide">
                WHY THE STRATOSPHERE?
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-slate-300 font-body-md text-base sm:text-lg leading-relaxed font-light">
              <p>
                The stratosphere (19 to 22 km altitude) offers an ideal physical layer for persistent flight: wind velocities are at their seasonal minimum, weather storms remain below in the troposphere, and solar exposure is completely unobstructed by clouds.
              </p>
              <p>
                By positioning platforms at 20 km rather than in low Earth orbit (500 km+), Levitate Dynamics achieves ground-resolving power up to 25x sharper, roundtrip communication latency under 10ms, and continuous station-keeping without orbital drift.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            LEADERSHIP (Founders Pranay Rajesh Nagrale & Nirmeet Ganesh Wankhade)
            ============================================================ */}
        <section id="leadership" className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-24 sm:mb-32">
          <div className="mb-12 sm:mb-16">
            <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
              COMPANY LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
              FOUNDERS &amp; DIRECTORS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Leader 1: Pranay Rajesh Nagrale */}
            <div className="bg-[#111115] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-white/25 transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-5">
                <div className="sm:col-span-2 relative h-[280px] sm:h-full bg-black/40 overflow-hidden flex items-center justify-center p-4">
                  <img
                    alt="Pranay Rajesh Nagrale"
                    src="/founders/pranay-nagrale.jpg"
                    className="w-full h-full max-h-[300px] object-contain"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-0.5 bg-black/70 border border-white/15 text-[9px] font-mono text-[#00dbe9] rounded-sm">
                      DIRECTOR
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-headline-sm uppercase tracking-wide">
                      PRANAY RAJESH NAGRALE
                    </h3>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1 mb-4">
                      DIRECTOR &amp; CHIEF ENGINEER
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 font-body-md leading-relaxed font-light">
                      Aerospace and UAV engineering specialist focused on VTOL propulsion and autonomous aircraft. Expert in CFD analysis, engine simulation, and composite airframes. Educated at RTM Nagpur University with a focus on sovereign stratospheric flight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 2: Nirmeet Ganesh Wankhade */}
            <div className="bg-[#111115] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-white/25 transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-5">
                <div className="sm:col-span-2 relative h-[280px] sm:h-full bg-black/40 overflow-hidden flex items-center justify-center p-4">
                  <img
                    alt="Nirmeet Ganesh Wankhade"
                    src="/founders/nirmeet-wankhade.jpg"
                    className="w-full h-full max-h-[300px] object-contain"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-0.5 bg-black/70 border border-white/15 text-[9px] font-mono text-[#00dbe9] rounded-sm">
                      DIRECTOR
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-headline-sm uppercase tracking-wide">
                      NIRMEET GANESH WANKHADE
                    </h3>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1 mb-4">
                      DIRECTOR &amp; OPS COMMAND
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 font-body-md leading-relaxed font-light">
                      Drone technology specialist in autonomous systems and Remote Pilot Operations. Background in CAD design and stratospheric surveillance systems. Holds dual category pilot licenses from FIDTR, driving tactical UAV and HAPS operational innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. CONTACT
            ============================================================ */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto text-center border-t border-white/10 pt-16 sm:pt-24">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white">
              CONTACT LEVITATE DYNAMICS
            </h2>
            <p className="text-slate-400 font-body-md text-sm sm:text-base leading-relaxed font-light">
              Connect with our leadership and engineering team in Nagpur, Maharashtra for defense evaluations, partnership discussions, or technical inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link href="/contact" className="btn-primary">
                CONTACT US
              </Link>
              <Link href="/platforms" className="btn-secondary">
                EXPLORE PLATFORMS
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
