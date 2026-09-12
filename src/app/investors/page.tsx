"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DataRoomModal from "@/components/DataRoomModal";

export default function Investors() {
  const [isDataRoomOpen, setIsDataRoomOpen] = useState(false);
  const [docTitle, setDocTitle] = useState("Institutional Investment Brief");

  const openDataRoom = (title?: string) => {
    if (title) setDocTitle(title);
    setIsDataRoomOpen(true);
  };

  return (
    <>
      <Header />

      <main className="pt-24 sm:pt-28 pb-20 bg-[#0b0b0e] text-white min-h-screen">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-20 sm:mb-28">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#00dbe9] uppercase font-semibold block mb-3">
              INVESTOR RELATIONS
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-headline-md leading-[1.08] mb-6">
              BUILDING THE NEXT GENERATION OF STRATOSPHERIC INFRASTRUCTURE.
            </h1>
            <p className="text-slate-300 font-body-md text-base sm:text-xl leading-relaxed font-light">
              Levitate Dynamics represents a sovereign aerospace investment opportunity at the convergence of autonomous systems, solar-electric propulsion, and defense infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={() => openDataRoom("Institutional Investment Overview")}
                className="btn-primary"
              >
                ACCESS DATA ROOM
              </button>
              <Link
                href="/contact?dept=investors"
                className="btn-secondary"
              >
                SCHEDULE INVESTOR BRIEFING
              </Link>
            </div>
          </div>
        </section>

        {/* Large Visual Section */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-24 sm:mb-32">
          <div className="relative h-[300px] sm:h-[420px] lg:h-[500px] rounded-sm overflow-hidden border border-white/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Wtrfa8obxadyVdEaTn9OF3ZRf__6ta1ex9YQIXo-ERLQf_EGyndwn84VArDq-ESpbRdchohsZlFk3oTlincxlFqgKSvWlQ2zVS0Ky6mL97f_zYK6fPEqJh5PgNyvHWFjjW0fJ2j9TdkQMm6nTJW5pA-Kn9r9h5elg9L1tP5ei_f9D7og8u3ElJ6lIk_shVf_2Q4iCnk8ZThNQTTmMgHW03rcdtig6xowKQz1fSjQDQg6-1tK9tvKHRcNXJZH27vLy3FCO5onIxE"
              alt="Levitate Dynamics Fleet Formation"
              className="w-full h-full object-cover opacity-60 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-xs font-mono text-slate-400">
              <span>HAPS FLEET SCALABILITY</span>
              <span>EQUITY SERIES: INSTITUTIONAL ALLOCATION</span>
            </div>
          </div>
        </section>

        {/* 1. Market Opportunity */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f0f13] border-y border-white/10 mb-24 sm:mb-32">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block">
                01 // MARKET OPPORTUNITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white tracking-wide">
                AN EXPANDING STRATOSPHERIC MARKET
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-slate-300 font-body-md text-base sm:text-lg leading-relaxed font-light">
              <p>
                The global High Altitude Pseudo-Satellite and sovereign defense loiter market is projected to reach \$14+ billion by 2032, driven by sovereign nations seeking independent surveillance and low-latency 5G telecom bridging.
              </p>
              <p>
                Orbital satellites are expensive to build, launch, and replace. Low-altitude drones cannot stay airborne long enough. HAPS bridges this gap at a fraction of the unit cost, delivering massive margin expansion on persistent data services.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="p-4 bg-[#141418] border border-white/10 rounded-sm">
                  <span className="text-xs font-mono text-slate-400 uppercase block mb-1">TOTAL ADDRESSABLE MARKET</span>
                  <span className="text-xl font-bold text-white font-headline-sm">$14B+</span>
                </div>
                <div className="p-4 bg-[#141418] border border-white/10 rounded-sm">
                  <span className="text-xs font-mono text-slate-400 uppercase block mb-1">COST PER STATION HR</span>
                  <span className="text-xl font-bold text-[#00dbe9] font-headline-sm">&lt; 5%</span>
                </div>
                <div className="p-4 bg-[#141418] border border-white/10 rounded-sm">
                  <span className="text-xs font-mono text-slate-400 uppercase block mb-1">LAUNCH CYCLE</span>
                  <span className="text-xl font-bold text-white font-headline-sm">HOURS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Technology Defensibility */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-24 sm:mb-32">
          <div className="mb-12 sm:mb-16">
            <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
              02 // DEFENSIBILITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
              PROPRIETARY INTELLECTUAL PROPERTY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm">
              <span className="text-xs font-mono text-slate-500 block mb-4">01</span>
              <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                HIGH-ASPECT AERODYNAMICS
              </h3>
              <p className="text-sm text-slate-400 font-body-md leading-relaxed">
                Proprietary carbon-composite airframe topologies engineered for extreme aerodynamic efficiency and low-density stratospheric lift.
              </p>
            </div>

            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm">
              <span className="text-xs font-mono text-slate-500 block mb-4">02</span>
              <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                ENERGY ARCHITECTURE
              </h3>
              <p className="text-sm text-slate-400 font-body-md leading-relaxed">
                Integrated multi-junction solar harvesting arrays paired with high-density energy storage and intelligent power management controllers.
              </p>
            </div>

            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm">
              <span className="text-xs font-mono text-slate-500 block mb-4">03</span>
              <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                AUTONOMOUS FLIGHT SUITE
              </h3>
              <p className="text-sm text-slate-400 font-body-md leading-relaxed">
                Proprietary real-time operating system (LD-RTOS) with automated energy-budget tracking, stratospheric wind optimization, and fail-safe recovery.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Company & Corporate Governance */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f0f13] border-y border-white/10 mb-20">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block">
                03 // CORPORATE GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white tracking-wide">
                CORPORATE STRUCTURE
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 font-mono text-xs text-slate-300">
              <div className="p-4 bg-[#141418] border border-white/10 rounded-sm flex justify-between">
                <span className="text-slate-500">LEGAL ENTITY:</span>
                <span className="text-white font-semibold">LEVITATE DYNAMICS PRIVATE LIMITED</span>
              </div>
              <div className="p-4 bg-[#141418] border border-white/10 rounded-sm flex justify-between">
                <span className="text-slate-500">CORPORATE CIN:</span>
                <span className="text-[#00dbe9] font-bold">U30305MH2025PTC447508</span>
              </div>
              <div className="p-4 bg-[#141418] border border-white/10 rounded-sm flex justify-between">
                <span className="text-slate-500">REGISTRATION:</span>
                <span className="text-white">MAHARASHTRA, INDIA</span>
              </div>
              <div className="p-4 bg-[#141418] border border-white/10 rounded-sm flex justify-between">
                <span className="text-slate-500">EXECUTIVE DIRECTORS:</span>
                <span className="text-white">PRANAY RAJESH NAGRALE / NIRMEET GANESH WANKHADE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Room Trigger Banner */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white">
              INSTITUTIONAL DUE DILIGENCE
            </h2>
            <p className="text-slate-400 font-body-md text-sm sm:text-base leading-relaxed">
              Accredited institutional investors and strategic sovereign venture partners can request access to the digital data room for capitalization tables, technical briefs, and financial projections.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openDataRoom("Institutional Due Diligence Data Room")}
                className="btn-primary"
              >
                REQUEST ACCESS TO DATA ROOM
              </button>
            </div>
          </div>
        </section>
      </main>

      <DataRoomModal
        isOpen={isDataRoomOpen}
        onClose={() => setIsDataRoomOpen(false)}
        documentTitle={docTitle}
      />

      <Footer />
    </>
  );
}
