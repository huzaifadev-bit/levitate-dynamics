"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
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
            <img
              src="/haps-aircraft.jpg"
              alt="Levitate Dynamics Sovereign HAPS Stratospheric Aircraft"
              className="w-full h-full object-cover object-center sm:object-[center_35%] opacity-90 sm:opacity-95 filter contrast-[1.04]"
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
                LEVITATE DYNAMICS // SOVEREIGN AEROSPACE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-heading leading-[1.08] mb-5">
              PERSISTENT STRATOSPHERIC FLIGHT. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                SOVEREIGN INTELLIGENCE &amp; CONNECTIVITY.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal max-w-2xl leading-relaxed mb-8 font-sans">
              We are developing indigenous High Altitude Pseudo-Satellites (HAPS) designed for persistent surveillance, communications and wide-area situational awareness from the stratosphere.
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
                EXPLORE PLATFORM
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
                Between tactical UAVs and orbital infrastructure, High Altitude Pseudo-Satellites can provide persistent wide-area coverage from the stratosphere.
              </p>
            </div>

            {/* 3-Tier Layer Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <span>Shorter endurance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Tactical / localized coverage</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Flexible deployment</span>
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
                      <span className="font-medium text-white">Persistent stratospheric operation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span>Wide-area coverage</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span>Solar-electric architecture</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00f5ff] mt-1">•</span>
                      <span>Modular payload capability</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-[#00f5ff]/20 text-[11px] font-mono text-[#00f5ff]">
                  ALTITUDE: 65,000 FT (STRATOSPHERE)
                </div>
              </div>

              {/* Satellite */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-zinc-500 block mb-2">TIER 03 // ORBITAL</span>
                  <h3 className="text-lg font-bold font-heading text-white uppercase tracking-wider mb-4">
                    SATELLITE
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-400 font-sans">
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Orbital infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>Very wide coverage</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-zinc-600 mt-1">•</span>
                      <span>High deployment complexity</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  ALTITUDE: 500+ KM (ORBIT)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. THE PLATFORM SECTION
            4 clean technical metric cards based on existing verified specs
            ============================================================ */}
        <section id="platform" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#09090b]">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                PLATFORM SPECIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                THE PLATFORM
              </h2>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                A high-aspect-ratio, solar-electric HAPS architecture designed for persistent operation in the stratosphere.
              </p>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Metric 1 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/25 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  24 M
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  WINGSPAN
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Ultra-high aspect ratio carbon-composite structure for aerodynamic efficiency in thin stratospheric air.
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/25 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  65,000 FT
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  DESIGN OPERATING ALTITUDE
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Cruising comfortably above commercial air lanes and turbulent tropospheric weather patterns.
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/25 rounded-sm transition-all duration-300 group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors">
                  8 KG
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  PAYLOAD CAPACITY
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Modular bay configured for electro-optical sensors, hyperspectral imaging, radar, and RF relays.
                </p>
              </div>

              {/* Metric 4 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/25 rounded-sm transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00f5ff] transition-colors pt-1">
                  SOLAR-ELECTRIC
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-300 mb-2">
                  ENERGY ARCHITECTURE
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Upper-surface solar arrays paired with high-density energy storage for continuous day/night survival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. TECHNOLOGY / ARCHITECTURE SECTION
            5-pillar technical grid without inventing hardware claims
            ============================================================ */}
        <section id="technology" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#0c0c0f]">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                AEROSPACE ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                ENGINEERED FOR THE STRATOSPHERE
              </h2>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                Platform systems optimized for low atmospheric pressure, extreme temperature variance, and autonomous station-keeping.
              </p>
            </div>

            {/* 5 Architecture Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/20 rounded-sm transition-all duration-300">
                <div className="text-xs font-mono text-[#00f5ff] mb-3">01 // STRUCTURAL</div>
                <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2.5">
                  HIGH-ASPECT-RATIO AIRFRAME
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  Efficient aerodynamic architecture designed for sustained stratospheric flight in low-density air.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/20 rounded-sm transition-all duration-300">
                <div className="text-xs font-mono text-[#00f5ff] mb-3">02 // PROPULSION</div>
                <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2.5">
                  SOLAR-ELECTRIC PROPULSION
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  Solar energy harvesting combined with energy storage for extended operation throughout diurnal cycles.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/20 rounded-sm transition-all duration-300">
                <div className="text-xs font-mono text-[#00f5ff] mb-3">03 // SENSING</div>
                <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2.5">
                  MODULAR PAYLOAD ARCHITECTURE
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  Payload bay designed around mission-specific sensing and communication systems with quick-swap integration.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/20 rounded-sm transition-all duration-300">
                <div className="text-xs font-mono text-[#00f5ff] mb-3">04 // AUTONOMY</div>
                <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2.5">
                  AUTONOMOUS FLIGHT SYSTEMS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  Flight-control and mission-management systems designed for autonomous operation, wind compensation, and station-keeping.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="p-7 sm:p-8 bg-[#111115] border border-white/10 hover:border-white/20 rounded-sm transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="text-xs font-mono text-[#00f5ff] mb-3">05 // AVIONICS &amp; RF</div>
                <h3 className="text-base font-bold font-heading text-white uppercase tracking-wider mb-2.5">
                  STRATOSPHERIC COMMUNICATIONS
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  Platform architecture intended to support surveillance and communications missions with secure ground and aerial relays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. THREE CORE MISSION VERTICALS
            Consolidated from 10 overlapping categories into 3 clear pillars
            ============================================================ */}
        <section id="missions" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10 bg-[#09090b]">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-mono text-[#00f5ff] tracking-[0.24em] uppercase font-semibold block mb-3">
                MISSION PROFILES
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading uppercase text-white tracking-tight mb-4">
                STRATEGIC MISSION VERTICALS
              </h2>
              <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                Focused operational capabilities tailored for defense commands, telecommunication operators, and emergency agencies.
              </p>
            </div>

            {/* 3 Core Vertical Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Mission 01 */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 hover:border-white/25 rounded-sm flex flex-col justify-between transition-all duration-300">
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
                    DEFENSE &amp; BORDER ISR
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    Persistent observation and situational awareness for borders, sensitive operational areas and strategic infrastructure.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-mono">
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">EO/IR surveillance</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Wide-area observation</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Border monitoring</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Persistent situational awareness</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission 02 */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 hover:border-white/25 rounded-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#00f5ff] tracking-widest uppercase">
                      MISSION 02
                    </span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase rounded-sm">
                      INFRASTRUCTURE
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-3">
                    TACTICAL &amp; SOVEREIGN COMMUNICATIONS
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    Stratospheric communications infrastructure designed to extend connectivity across areas where conventional infrastructure is limited.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-mono">
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Communications relay</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Wide-area connectivity</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Emergency communications</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Strategic communications</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission 03 */}
              <div className="p-8 sm:p-9 bg-[#111115] border border-white/10 hover:border-white/25 rounded-sm flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#00f5ff] tracking-widest uppercase">
                      MISSION 03
                    </span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase rounded-sm">
                      MARITIME &amp; CRISIS
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-3">
                    DISASTER &amp; MARITIME AWARENESS
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                    Persistent aerial observation for disaster response, environmental monitoring and maritime domain awareness.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-zinc-300 font-mono">
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Disaster mapping</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Cyclone monitoring</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Emergency response</span>
                      <span className="px-2.5 py-1 bg-[#18181f] border border-white/10 rounded-sm">Maritime observation</span>
                    </div>
                  </div>
                </div>
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
                    <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">OFFICIAL EMAIL</span>
                    <a
                      href="mailto:levitateworks.office@gmail.com"
                      className="text-sm sm:text-base font-mono text-[#00f5ff] hover:underline"
                    >
                      levitateworks.office@gmail.com
                    </a>
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
    </>
  );
}
