"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecificationsModal from "@/components/SpecificationsModal";

export default function HomeClient() {
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    organization: "",
    email: "",
    inquiryType: "Defense",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Mission Inquiry [${formState.inquiryType}]: ${formState.fullName} (${formState.organization})`
    );
    const body = encodeURIComponent(
      `Name: ${formState.fullName}\nOrganization: ${formState.organization}\nEmail: ${formState.email}\nInquiry Type: ${formState.inquiryType}\n\nMessage:\n${formState.message}`
    );
    // Launch mail client fallback
    window.location.href = `mailto:levitateworks.office@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className="bg-[#09090b] text-[#f4f4f5] overflow-hidden selection:bg-[#00f5ff]/25 selection:text-[#00f5ff]">
        {/* ============================================================
            1. HERO SECTION
            Preserves the verified official /haps-aircraft.jpg image
            Clean defense-tech typography with subtle dark gradient overlay
            ============================================================ */}
        <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-16 pt-32 pb-20 overflow-hidden">
          {/* Official Aircraft Hero Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/haps-aircraft.jpg"
              alt="Levitate Dynamics Sovereign HAPS Stratospheric Aircraft"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center sm:object-[center_35%] opacity-90 sm:opacity-95 filter contrast-[1.04]"
              quality={90}
            />
            {/* Dark gradient overlays: ensure high-contrast readability without masking aircraft */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/45 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto w-full">
            {/* Program Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-pulse" />
              <span className="text-[11px] font-mono text-zinc-300 tracking-[0.22em] uppercase font-semibold">
                LEVITATE DYNAMICS // STRATOSPHERIC HAPS ARCHITECTURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-heading leading-[1.08] mb-5">
              WHERE DRONES MEET SATELLITES. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                PERSISTENT STRATOSPHERIC FLIGHT.
              </span>
            </h1>

            {/* Supporting Text from Source of Truth */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal max-w-2xl leading-relaxed mb-8 font-sans">
              Drone-grade agility with satellite-grade endurance. Developing indigenous High Altitude Pseudo-Satellites (HAPS) for 72+ hours persistent surveillance, hyperspectral imaging, and wide-area sovereign communications from the stratosphere.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center"
              >
                REQUEST MISSION BRIEFING
              </a>
              <a
                href="#platform"
                className="px-7 py-3.5 border border-zinc-500 hover:border-white text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center bg-black/40 backdrop-blur-sm"
              >
                EXPLORE PLATFORM SPECIFICATIONS
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. THE OPERATIONAL GAP (THE STRATOSPHERIC LAYER)
            Restrained aerospace comparison between UAVs, HAPS, and Satellites
            ============================================================ */}
        <section id="operational-gap" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#0c0c0f]">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                OPERATIONAL ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                THE STRATOSPHERIC LAYER
              </h2>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                Between tactical UAVs and orbital infrastructure, High Altitude Pseudo-Satellites bridge the critical operational dead zone with persistent wide-area coverage from the stratosphere.
              </p>
            </div>

            {/* 3-Tier Layer Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Tactical UAV */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-zinc-500 block mb-2">TIER 01 // LOW-ALTITUDE</span>
                  <h3 className="text-lg font-bold font-heading text-white uppercase tracking-wider mb-4">
                    TACTICAL UAV
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-400 font-sans">
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>30–90 minute battery endurance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Constant recovery, refuel &amp; redeployment</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Localized tactical line-of-sight coverage</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Vulnerable to tropospheric weather</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  ALTITUDE: 0 – 30,000 FT
                </div>
              </div>

              {/* Levitate HAPS (Highlighted Core Architecture) */}
              <div className="p-7 sm:p-8 bg-[#121820] border-2 border-[#00f5ff]/60 rounded-sm flex flex-col justify-between shadow-[0_0_35px_rgba(0,245,255,0.08)] relative">
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#00f5ff]/15 border border-[#00f5ff]/40 text-[#00f5ff] text-[10px] font-mono uppercase tracking-wider rounded-sm">
                  LEVITATE DOMAIN
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00f5ff] block mb-2">TIER 02 // STRATOSPHERE</span>
                  <h3 className="text-lg font-bold font-heading text-white uppercase tracking-wider mb-4">
                    LEVITATE HAPS
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-200 font-sans">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span className="font-semibold text-white">72+ hours continuous on-station loiter</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span>59,000 – 72,000 ft stratospheric cruise</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span>Solar-augmented diurnal energy cycle</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span>Up to ~12 kg modular payload bay</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span>Low-RCS stealth carbon-composite airframe</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-[#00f5ff]/20 text-[11px] font-mono text-[#00f5ff] flex items-center justify-between">
                  <span>ALTITUDE: 59,000 – 72,000 FT</span>
                  <span>72+ HR DWELL</span>
                </div>
              </div>

              {/* Satellite */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-zinc-500 block mb-2">TIER 03 // ORBITAL</span>
                  <h3 className="text-lg font-bold font-heading text-white uppercase tracking-wider mb-4">
                    ORBITAL SATELLITE
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-400 font-sans">
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Hours-to-days revisit gaps between passes</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Fixed orbital path; cannot loiter over live events</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>High deployment cost (₹50 Cr – ₹500 Cr+)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Contested orbit &amp; anti-satellite vulnerability</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  ALTITUDE: 500+ KM (LEO ORBIT)
                </div>
              </div>
            </div>

            {/* The Operational Dead Zone Callout */}
            <div className="p-4 sm:p-5 bg-[#111115] border border-white/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-[#00f5ff] shrink-0" />
                <span>
                  <strong className="text-white uppercase font-mono tracking-wider mr-1">THE COVERAGE DEAD ZONE:</strong>
                  Forest fires spread, borders are breached, and critical events unfold in the window nothing is watching. Levitate HAPS provides uninterrupted persistent observation to close this gap.
                </span>
              </div>
              <span className="font-mono text-[#00f5ff] shrink-0 text-[11px] uppercase tracking-wider">
                CONTINUOUS DWELL
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. THE PLATFORM SECTION
            9 clean technical design target cards based on verified source of truth
            ============================================================ */}
        <section id="platform" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#09090b]">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div className="max-w-2xl">
                <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                  PLATFORM SPECIFICATIONS
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                  PRELIMINARY DESIGN TARGETS
                </h2>
                <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                  TRL-2 validated design targets engineered for continuous stratospheric flight, to be validated through full-scale flight testing.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setIsSpecModalOpen(true)}
                  className="px-5 py-3 border border-[#00f5ff]/40 hover:border-[#00f5ff] bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 text-[#00f5ff] text-xs font-mono uppercase tracking-wider rounded-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>OPEN TECHNICAL DATASHEET</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* 9 Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  ~24 M
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  WINGSPAN
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Fixed-wing HAPS class; ultra-high aspect ratio carbon-composite airframe engineered for aerodynamic efficiency in thin stratospheric air.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  59,000 – 72,000 FT
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  CRUISE OPERATING ALTITUDE
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Stratospheric cruise band located well above tropospheric storms, cloud cover, and civil aviation flight routes.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-[#00f5ff] tracking-tight mb-2">
                  72+ HOURS
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  MINIMUM TARGET ENDURANCE
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Solar-augmented perpetual day/night cycle targeting continuous multi-day loitering over critical areas of interest.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  UP TO ~12 KG
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  PAYLOAD CAPACITY
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Modular dual-sensor bay designed specifically for hyperspectral imaging payloads and EO/IR stabilized thermal camera suites.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  ~110 – 120 KG
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  MAX TAKEOFF WEIGHT (MTOW)
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Total integrated system mass: carbon-fiber airframe structure, dual payload package, and high-density energy storage system.
                </p>
              </div>

              {/* Card 6 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  ~20 – 35 KM/H
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  CRUISE SPEED
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Mission-dependent stratospheric loiter speed tuned for low power consumption, steady station-keeping, and wind vector holding.
                </p>
              </div>

              {/* Card 7 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors pt-1">
                  SOLAR + LI-ION
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  POWER &amp; PROPULSION
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Upper-wing photovoltaic solar harvesting arrays paired with high energy density lithium-ion batteries for continuous in-flight recharge.
                </p>
              </div>

              {/* Card 8 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors pt-1">
                  BVLOS CAPABLE
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  COMMS &amp; RELAY RANGE
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Beyond Visual Line of Sight operational command enabled via satellite telemetry links and high-altitude airborne mesh networking.
                </p>
              </div>

              {/* Card 9 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors pt-1">
                  LOW-RCS
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  RADAR SIGNATURE
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Reduced radar cross-section stealth airframe profile designed for sensitive defense intelligence and border surveillance operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. TECHNOLOGY / ARCHITECTURE SECTION
            Dual-Layer: Hardware in the Air + Intelligence on the Ground
            ============================================================ */}
        <section id="technology" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#0c0c0f]">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                AEROSPACE ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                HARDWARE IN THE AIR. <br className="hidden sm:inline" />
                INTELLIGENCE ON THE GROUND.
              </h2>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                A comprehensive dual-layer architecture combining an ultra-high aspect ratio stratospheric aerial platform with an autonomous ground intelligence and analytics engine.
              </p>
            </div>

            {/* Dual Layer Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Layer 01: Aerial Platform */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 rounded-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider">
                    LAYER 01 // AERIAL PLATFORM
                  </span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase rounded-sm">
                    STRATOSPHERIC HARDWARE
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-6">
                  AUTONOMOUS HAPS AIRFRAME
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans">
                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">01</span>
                    <div>
                      <strong className="text-white block mb-0.5">High-Aspect-Ratio Airframe</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        ~24 m wingspan carbon-composite spar structure optimized for structural efficiency in thin stratospheric air.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">02</span>
                    <div>
                      <strong className="text-white block mb-0.5">72+ Hour Solar-Augmented Power</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        Upper-wing photovoltaic solar arrays combined with high-density Li-ion energy storage for continuous diurnal recharge.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">03</span>
                    <div>
                      <strong className="text-white block mb-0.5">Modular Dual-Sensor Bay</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        Up to ~12 kg payload capacity supporting hyperspectral imaging payloads and stabilized EO/IR thermal camera suites.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">04</span>
                    <div>
                      <strong className="text-white block mb-0.5">Autonomous AI Guidance &amp; Wind Compensation</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        Self-directed station-keeping, real-time dynamic energy budget balancing, and automated collision avoidance routing.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">05</span>
                    <div>
                      <strong className="text-white block mb-0.5">Low-RCS Stealth Airframe</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        Reduced radar cross-section composite geometry engineered for survivability in sensitive defense ISR operations.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 02: Ground Intelligence & Services */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 rounded-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider">
                    LAYER 02 // INTELLIGENCE &amp; DATA
                  </span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase rounded-sm">
                    SMART SERVICES
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-6">
                  TACTICAL DATA &amp; ANALYTICS ENGINE
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-sans">
                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">01</span>
                    <div>
                      <strong className="text-white block mb-0.5">Real-Time Recon-as-a-Service (RaaS)</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        On-demand persistent observation and live intelligence delivery direct to operational defense commands.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">02</span>
                    <div>
                      <strong className="text-white block mb-0.5">Object &amp; Thermal Analytics Engine</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        Automated computer-vision detection for vehicle tracking, perimeter intrusion, heat signatures, and thermal anomalies.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">03</span>
                    <div>
                      <strong className="text-white block mb-0.5">Subscription Intelligence Feed</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        High-cadence raster and vector feeds delivering agricultural moisture indices, infrastructure scans, and terrain monitoring.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">04</span>
                    <div>
                      <strong className="text-white block mb-0.5">White-Label Imaging APIs</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        Secure REST and gRPC endpoints for seamless integration into command-and-control software and enterprise geospatial platforms.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-[#16161c] border border-white/5 rounded-sm">
                    <span className="text-[#00f5ff] font-mono font-bold">05</span>
                    <div>
                      <strong className="text-white block mb-0.5">City-Block to Mountain-Range Reach</strong>
                      <span className="text-zinc-400 leading-relaxed">
                        Wide-area stratospheric sensor dwell covering tens of thousands of square kilometers from a single station-keeping orbit.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. THREE CORE MISSION VERTICALS
            Consolidated dual-use operational pillars
            ============================================================ */}
        <section id="missions" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#09090b]">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                DUAL-USE ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                STRATEGIC MISSION VERTICALS
              </h2>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                Dual-use from day one: persistent national defense ISR and commercial agritech / environmental intelligence deployed in parallel.
              </p>
            </div>

            {/* 3 Core Vertical Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Mission 01 */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#00f5ff] tracking-widest uppercase">
                      MISSION 01
                    </span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase rounded-sm">
                      DEFENSE &amp; BORDERS
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-3">
                    DEFENSE &amp; BORDER PERSISTENT ISR
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    Eliminates the satellite revisit gap along contested borders, strategic choke points, and maritime Exclusive Economic Zones (EEZ).
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      CORE CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-mono">
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">72+ hr persistent loiter</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">High-definition EO/IR feeds</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Low-RCS stealth airframe</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">BVLOS satellite command</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission 02 */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#00f5ff] tracking-widest uppercase">
                      MISSION 02
                    </span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase rounded-sm">
                      AGRITECH &amp; CLIMATE
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-3">
                    HYPERSPECTRAL SENSING &amp; CLIMATE
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    Satellite-grade hyperspectral sensing resolving crop stress, vegetation moisture indices, chemical plumes, wildfire perimeters, and glacier shifts.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      CORE CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-mono">
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Hyperspectral imaging</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Crop stress detection</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Wildfire perimeter tracking</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Disaster damage mapping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission 03 */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 hover:border-[#00f5ff]/40 rounded-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#00f5ff] tracking-widest uppercase">
                      MISSION 03
                    </span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase rounded-sm">
                      TELECOM &amp; CRISIS
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-3">
                    SOVEREIGN TACTICAL COMMUNICATIONS
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    Airborne stratospheric cell tower and mesh gateway projecting persistent wide-area broadband, tactical defense links, and emergency connectivity.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      CORE CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-mono">
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Stratospheric mesh relay</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Low-latency (&lt;10ms) bridge</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Disaster communications</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Secure tactical radio relay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. PROGRAM TRACTION & TECHNOLOGY READINESS (TRL)
            Source of truth roadmap & institutional alignment
            ============================================================ */}
        <section id="traction" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#0c0c0f]">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                PROGRAM MATURITY &amp; MILESTONES
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                TRL-2 COMPLETED. TARGETING FLIGHT-TESTED TRL-4.
              </h2>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                Conceptual design and aerodynamic energy simulations finalized; actively advancing through subscale prototyping toward full-scale stratospheric flight demonstration.
              </p>
            </div>

            {/* 4 Traction Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Card 1 */}
              <div className="p-7 bg-[#111115] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#00f5ff]" />
                    <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-semibold">
                      TRL STATUS
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2">
                    TRL-2 COMPLETE &rarr; TRL-4 TARGET
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Conceptual design, aerodynamic modeling, weight/power balance, and payload interface architecture defined. Target: flight-tested full-scale prototype.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  STAGE: PROTOTYPE R&amp;D
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-7 bg-[#111115] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#00f5ff]" />
                    <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-semibold">
                      DEFENSE PIPELINE
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2">
                    ARMY DESIGN BUREAU
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Interest from Army Design Bureau (ADB) pipeline pending formal iDEX registration; actively advised by an ex-Indian Army &amp; iDEX project mentor.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  INSTITUTIONAL VALIDATION
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-7 bg-[#111115] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#00f5ff]" />
                    <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-semibold">
                      CAPITAL PIPELINE
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2">
                    NON-DILUTIVE GRANTS
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Grant applications submitted under Startup India Seed Fund Scheme (SISFS) and DRDO Technology Development Fund (TDF) for hardware acceleration.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  FUNDING STATUS: ACTIVE PIPELINE
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-7 bg-[#111115] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#00f5ff]" />
                    <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-semibold">
                      POLICY ALIGNMENT
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2">
                    DAP-2020 &amp; MAKE-IN-INDIA
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    Aligned with liberalized Drone Rules 2021 and Defence Acquisition Procedure (DAP-2020) provisions granting statutory preference to indigenous platforms.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  100% INDIGENOUS IP
                </div>
              </div>
            </div>

            {/* Strategic Quote Callout from Verified Pitch Deck */}
            <div className="p-6 sm:p-8 bg-[#111115] border-l-2 border-[#00f5ff] rounded-sm">
              <blockquote className="text-sm sm:text-base text-zinc-200 font-sans italic leading-relaxed mb-3">
                &ldquo;Persistent ISR is no longer optional for high-altitude operations — platforms like HAPS close the coverage gaps that cost lives and strategic ground.&rdquo;
              </blockquote>
              <div className="text-xs font-mono text-zinc-400">
                — Levitate Dynamics Program Guidance // Sovereign Stratospheric Intelligence
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. COMPANY / CREDIBILITY SECTION
            Corporate governance, registration, no founder photos
            ============================================================ */}
        <section id="company" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#0c0c0f]">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block">
                  CORPORATE ENTITY
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight">
                  ENGINEERED IN INDIA
                </h2>
                <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                  Levitate Dynamics Private Limited is developing indigenous aerospace platforms focused on persistent stratospheric flight, surveillance and communications.
                </p>
              </div>

              <div className="lg:col-span-7 bg-[#111115] border border-white/10 rounded-sm p-7 sm:p-9 space-y-6">
                <div>
                  <span className="text-xs font-mono text-zinc-500 block uppercase mb-1">REGISTERED ENTITY NAME</span>
                  <div className="text-base sm:text-lg font-bold font-heading text-white">
                    LEVITATE DYNAMICS PRIVATE LIMITED
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 font-mono text-xs">
                  <div>
                    <span className="text-zinc-500 block uppercase mb-1">CORPORATE CIN</span>
                    <span className="text-zinc-200 font-semibold tracking-wider text-sm">
                      U30305MH2025PTC447508
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase mb-1">OPERATIONS BASE</span>
                    <span className="text-zinc-200 font-semibold text-sm">
                      Nagpur, Maharashtra, India
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-zinc-500 block uppercase mb-1">REGISTERED OFFICE ADDRESS</span>
                  <address className="not-italic text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                    Flat No. 301, Borkute Lay Out, Narendra Nagar, Nagpur, Maharashtra 440015, India.
                  </address>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="inline-flex items-center gap-2 text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-[#00f5ff]" />
                    <span>ALIGNED WITH ATMANIRBHAR BHARAT AEROSPACE INITIATIVE</span>
                  </div>
                  <a
                    href="https://www.tofler.in/levitate-dynamics-private-limited/company/U30305MH2025PTC447508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00f5ff] hover:underline"
                  >
                    View Corporate Record (Tofler) ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. CONTACT / MISSION BRIEFING SECTION
            Clean briefing request form + clickable mailto + exact address
            ============================================================ */}
        <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#09090b]">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Contact Info Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                    PROCUREMENT &amp; COLLABORATION
                  </span>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                    START A MISSION CONVERSATION
                  </h2>
                  <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                    For defense, telecommunications, research, investment and strategic partnership inquiries, contact the Levitate Dynamics team.
                  </p>
                </div>

                <div className="p-6 bg-[#111115] border border-white/10 rounded-sm space-y-5">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">OFFICIAL CORRESPONDENCE</span>
                    <div className="flex flex-col gap-1.5">
                      <a
                        href="mailto:levitateworks.office@gmail.com"
                        className="text-sm font-mono text-[#00f5ff] hover:underline"
                      >
                        levitateworks.office@gmail.com
                      </a>
                      <a
                        href="mailto:pranay910nagarale@gmail.com"
                        className="text-sm font-mono text-zinc-300 hover:text-[#00f5ff] hover:underline"
                      >
                        pranay910nagarale@gmail.com (Founder Desk)
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">OFFICE LOCATION</span>
                    <address className="not-italic text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      Flat No. 301, Borkute Lay Out,<br />
                      Narendra Nagar, Nagpur,<br />
                      Maharashtra 440015, India.
                    </address>
                    <div className="pt-2">
                      <a
                        href="https://share.google/WappuysEw0qQjJH6W"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-zinc-400 hover:text-white underline inline-flex items-center gap-1"
                      >
                        Open Location on Google Maps ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form Column */}
              <div className="lg:col-span-7 bg-[#111115] border border-white/10 rounded-sm p-7 sm:p-10">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#00f5ff]/20 border border-[#00f5ff] flex items-center justify-center text-[#00f5ff] text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white uppercase">
                      INQUIRY TRANSMITTED
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your mission parameters have been routed to our flight operations team at{" "}
                      <a href="mailto:levitateworks.office@gmail.com" className="text-[#00f5ff] underline">
                        levitateworks.office@gmail.com
                      </a>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase rounded-sm cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.fullName}
                          onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                          placeholder="e.g. Wing Commander / Project Director"
                          className="w-full px-4 py-3 bg-[#09090b] border border-white/10 focus:border-[#00f5ff] rounded-sm text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                          ORGANIZATION *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.organization}
                          onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                          placeholder="e.g. Defense Agency / Telecom Operator"
                          className="w-full px-4 py-3 bg-[#09090b] border border-white/10 focus:border-[#00f5ff] rounded-sm text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="name@organization.com"
                          className="w-full px-4 py-3 bg-[#09090b] border border-white/10 focus:border-[#00f5ff] rounded-sm text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                          INQUIRY TYPE *
                        </label>
                        <select
                          value={formState.inquiryType}
                          onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                          className="w-full px-4 py-3 bg-[#09090b] border border-white/10 focus:border-[#00f5ff] rounded-sm text-sm text-white outline-none transition-colors cursor-pointer"
                        >
                          <option value="Defense">Defense</option>
                          <option value="Telecommunications">Telecommunications</option>
                          <option value="Investor">Investor</option>
                          <option value="Research">Research</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        MESSAGE / MISSION REQUIREMENTS *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Detail your operational envelope, payload parameters, or institutional objectives..."
                        className="w-full px-4 py-3 bg-[#09090b] border border-white/10 focus:border-[#00f5ff] rounded-sm text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-[0.16em] uppercase rounded-sm transition-all text-center cursor-pointer"
                    >
                      SUBMIT INQUIRY
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Verified Technical Datasheet Modal */}
      <SpecificationsModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
      />
    </>
  );
}
