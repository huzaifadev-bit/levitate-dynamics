"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CORE_TECHNOLOGIES = [
  {
    id: "01",
    title: "HAPS SYSTEMS",
    tag: "AEROSPACE HARDWARE",
    description:
      "Solar-electric aircraft designed for uninterrupted loiter in the stratosphere at 65,000 feet, well above civilian air routes and adverse tropospheric weather.",
  },
  {
    id: "02",
    title: "AUTONOMOUS FLIGHT",
    tag: "GUIDANCE & CONTROL",
    description:
      "Level 4 autonomous flight control algorithms managing station-keeping, seasonal wind vector optimization, and emergency return-to-base protocols.",
  },
  {
    id: "03",
    title: "AI-POWERED FLIGHT SYSTEMS",
    tag: "EMBEDDED COMPUTING",
    description:
      "Onboard edge computing delivering real-time sensory data processing, dynamic power allocation, and autonomous system health diagnostics.",
  },
  {
    id: "04",
    title: "SOLAR POWER",
    tag: "PERPETUAL ENERGY",
    description:
      "High-efficiency multi-junction solar harvesting arrays paired with high-density energy storage banks for continuous multi-day and night survival.",
  },
  {
    id: "05",
    title: "PERSISTENT SENSING",
    tag: "MODULAR PAYLOADS",
    description:
      "Standardized quick-swap bays supporting Wide-Area Motion Imagery (WAMI), hyperspectral cameras, optical feeds, and radar scanning.",
  },
  {
    id: "06",
    title: "SECURE COMMUNICATIONS",
    tag: "TACTICAL DATA RELAY",
    description:
      "Line-of-sight laser and RF links with quantum-resistant encryption, low ground latency, and multi-platform swarm mesh capability.",
  },
];

const APPLICATIONS = [
  {
    id: "01",
    title: "Border Surveillance",
    category: "DEFENSE & BORDERS",
    description:
      "Unbroken 24/7 observation along international frontiers and sensitive defense corridors without orbital revisit gaps or radar blind spots.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3IXBvpQW5iJvY_MSLP_JsPeBE1c1YpPNEnqVsYmJ6iXl8zwqXxIxJG-SgxV0VoE3WnuGKmX7x7EvwtrPjKVgaL4kwGv-XzuVjf0Y4y0gk8DvgB51r8ATkDxkHsX7DqsQ2EwG7RmpUBBMpnUPHnYAQHZndrqV3U4gL_MDl5qsG38-nVEi3Bu8So3UWYgBfcMzh6hpDLaneIPRhXnCgiF10WHtx44sE2HxaLfM5EcrjcojDk3vjimbKUu5XxwMe2H5j6STQbjGq_FQ",
  },
  {
    id: "02",
    title: "ISR (Intelligence, Surveillance & Reconnaissance)",
    category: "TACTICAL INTELLIGENCE",
    description:
      "Persistent aerial imaging and multi-spectral intelligence gathering for real-time situational awareness across theater commands.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXSQKXhfeJmYUGP6hSqWaeFyTS3J2CUoiokI2lQ5fSsG8IERxk1NEEtJgVrSb5pEI-3IU_39YFPdVHgUcQkIiQgDrtfp4vW7jIXrVwN-PlDhH24iCRkzO8bcjTLqQSuVUWqKl2Fe3GiQDBQut8bQJs9eBSO5Iy-L4E-fH8rLd48Ile91tT6aEd4cviNhD4IrF_CcDcGerRbSOzcU8xL9kEvwoazHfhhF2TTQu6UZyLoVkaHiiby035270r7gTmy0zjw5zQzYZrV1M",
  },
  {
    id: "03",
    title: "National Security",
    category: "SOVEREIGN DEFENSE",
    description:
      "Sovereign atmospheric observation safeguarding critical energy assets, border infrastructure, and strategic transportation corridors.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWa4_2QCd3XBWZUFL33SKVczZuZy0HLhsLEboxcq9pn_aw5a7CgGAaN9JxmZdVinA8DAO3Dm6L9p7Iajf4lgeONWZ_onqo9c-ZQqjJ0HjS8fIJPI1BkUSnI56-4pl9oEFndek9BkzPwC3EFHyqKnRuhN-C8MffIsZdS4tcFHWKtwY_YgibPZcjz6xOGoM5hKKfrb6yhCwm2jQNdmQCYE7ZArlXpkTvl6yOupnis8svjZKt-iCN36DUEwHt0zceVf-z5ZJnRu5479k",
  },
  {
    id: "04",
    title: "Strategic Monitoring",
    category: "AIRSPACE & FRONTIERS",
    description:
      "Wide-envelope radar monitoring and pattern-of-life analysis over contested territories and remote forward operational areas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3IXBvpQW5iJvY_MSLP_JsPeBE1c1YpPNEnqVsYmJ6iXl8zwqXxIxJG-SgxV0VoE3WnuGKmX7x7EvwtrPjKVgaL4kwGv-XzuVjf0Y4y0gk8DvgB51r8ATkDxkHsX7DqsQ2EwG7RmpUBBMpnUPHnYAQHZndrqV3U4gL_MDl5qsG38-nVEi3Bu8So3UWYgBfcMzh6hpDLaneIPRhXnCgiF10WHtx44sE2HxaLfM5EcrjcojDk3vjimbKUu5XxwMe2H5j6STQbjGq_FQ",
  },
  {
    id: "05",
    title: "Defense Communications",
    category: "TACTICAL RELAY",
    description:
      "Airborne pseudo-orbital nodes providing secure, jam-resistant data relays and communications continuity in contested operating environments.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWa4_2QCd3XBWZUFL33SKVczZuZy0HLhsLEboxcq9pn_aw5a7CgGAaN9JxmZdVinA8DAO3Dm6L9p7Iajf4lgeONWZ_onqo9c-ZQqjJ0HjS8fIJPI1BkUSnI56-4pl9oEFndek9BkzPwC3EFHyqKnRuhN-C8MffIsZdS4tcFHWKtwY_YgibPZcjz6xOGoM5hKKfrb6yhCwm2jQNdmQCYE7ZArlXpkTvl6yOupnis8svjZKt-iCN36DUEwHt0zceVf-z5ZJnRu5479k",
  },
  {
    id: "06",
    title: "Telecom & 5G",
    category: "COMMERCIAL INFRASTRUCTURE",
    description:
      "Stratospheric base stations bridging commercial 5G cellular and broadband access across 40,000 km² directly to standard mobile handsets.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBelNbIbGWGsaPKAC2IGDyNuLQtaEKLlRpr2KNcantqsoa4dBIhtvS7_uNdqOI6ctB3diW4Bha2LqpyVAI430iYUh8S7iIAfRqeBaj9yFZTz-avylorSIc1L6b5yTNZbZjH9jmnPI8Al_U7iLzpHZOcdiL6QOrbHKcaALaW345puD2kZhmNpo9Lrq0bQ52S0s--XS5EKYvvdWCmkSBiQTTXaCLx9a1KS9zI-lUjdA8AZ0U57emaYBIVY_WAVWKLWoBgZyUfPeP6qeQ",
  },
  {
    id: "07",
    title: "Rural Connectivity",
    category: "DIGITAL INCLUSION",
    description:
      "High-throughput network backhaul delivering affordable internet and telephony to disconnected islands, valleys, and remote rural communities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBelNbIbGWGsaPKAC2IGDyNuLQtaEKLlRpr2KNcantqsoa4dBIhtvS7_uNdqOI6ctB3diW4Bha2LqpyVAI430iYUh8S7iIAfRqeBaj9yFZTz-avylorSIc1L6b5yTNZbZjH9jmnPI8Al_U7iLzpHZOcdiL6QOrbHKcaALaW345puD2kZhmNpo9Lrq0bQ52S0s--XS5EKYvvdWCmkSBiQTTXaCLx9a1KS9zI-lUjdA8AZ0U57emaYBIVY_WAVWKLWoBgZyUfPeP6qeQ",
  },
  {
    id: "08",
    title: "Disaster Response",
    category: "CRISIS RELIEF",
    description:
      "Rapid deployment within hours of cyclones, floods, or earthquakes to restore emergency voice/data channels and stream real-time situational mapping.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Wtrfa8obxadyVdEaTn9OF3ZRf__6ta1ex9YQIXo-ERLQf_EGyndwn84VArDq-ESpbRdchohsZlFk3oTlincxlFqgKSvWlQ2zVS0Ky6mL97f_zYK6fPEqJh5PgNyvHWFjjW0fJ2j9TdkQMm6nTJW5pA-Kn9r9h5elg9L1tP5ei_f9D7og8u3ElJ6lIk_shVf_2Q4iCnk8ZThNQTTmMgHW03rcdtig6xowKQz1fSjQDQg6-1tK9tvKHRcNXJZH27vLy3FCO5onIxE",
  },
  {
    id: "09",
    title: "Environmental Monitoring",
    category: "EARTH SCIENCE",
    description:
      "Continuous hyperspectral monitoring of wildfire perimeters, agricultural canopy moisture, greenhouse gas emissions, and glacial retreat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXSQKXhfeJmYUGP6hSqWaeFyTS3J2CUoiokI2lQ5fSsG8IERxk1NEEtJgVrSb5pEI-3IU_39YFPdVHgUcQkIiQgDrtfp4vW7jIXrVwN-PlDhH24iCRkzO8bcjTLqQSuVUWqKl2Fe3GiQDBQut8bQJs9eBSO5Iy-L4E-fH8rLd48Ile91tT6aEd4cviNhD4IrF_CcDcGerRbSOzcU8xL9kEvwoazHfhhF2TTQu6UZyLoVkaHiiby035270r7gTmy0zjw5zQzYZrV1M",
  },
  {
    id: "10",
    title: "Maritime Surveillance",
    category: "MARITIME DOMAIN",
    description:
      "Persistent wide-area surveillance over Exclusive Economic Zones, tracking non-transponding dark vessels, piracy threats, and oceanic corridors.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCScxT3-_XFQGmnhXU0CPidEG810ep51gMgTGQvvvhicx7O0YHpTQNca49CmfplUpQ4V28YoXTsuHseUdjoFY7s_2WtETfSMRx4fOwLdvEkbUHCV-X2N70C4cLhxKw5PfYg9rtvVYXdEzvbbw-Ou9u3EPjrCEuQ2NIFQbPV6eN8zzI81NgynDxCgqa7KI-Xe6w34ogGsSBbThSECwN-sLVnTqfANWW_jT_0T_kGzTHrNOjNT5of9QFwV9kgk-PsvYzYuBj5VKV2cf0",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#09090b] text-white overflow-hidden selection:bg-white selection:text-black">
        {/* ============================================================
            3. HERO SECTION
            ============================================================ */}
        <section className="relative min-h-[92vh] flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-16 pt-28 pb-20 overflow-hidden">
          {/* Cinematic Background Visual - Official HAPS Aircraft */}
          <div className="absolute inset-0 z-0">
            <img
              src="/haps-aircraft.jpg"
              alt="Levitate Dynamics HAPS Stratospheric Aircraft"
              className="w-full h-full object-cover object-center sm:object-[center_35%] opacity-90 sm:opacity-95 filter contrast-[1.05]"
            />
            {/* Subtle aerospace vignette for clear typography contrast while keeping the aircraft fully visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/85 via-[#09090b]/30 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl max-w-container-max mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-[11px] font-mono text-zinc-200 tracking-[0.22em] uppercase font-semibold">
                LEVITATE DYNAMICS // SOVEREIGN AEROSPACE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase font-headline-md leading-[1.05] mb-6">
              BUILT FOR THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                STRATOSPHERE.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-light max-w-2xl leading-relaxed mb-8 font-body-md">
              Levitate Dynamics is building indigenous HAPS and autonomous aerospace systems for persistent intelligence, connectivity, and next-generation aerial operations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link
                href="/tech"
                className="px-8 py-4 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center"
              >
                EXPLORE TECHNOLOGY
              </Link>
              <Link
                href="/platforms"
                className="px-8 py-4 border border-zinc-500 hover:border-white text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center bg-black/40 backdrop-blur-sm"
              >
                EXPLORE PLATFORMS
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. KEY SPECIFICATIONS
            ============================================================ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 border-y border-white/10 bg-[#0c0c0f]">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 items-center max-w-3xl">
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-headline-md text-white tracking-tight">
                  24 m
                </div>
                <div className="text-sm font-mono text-zinc-400 tracking-[0.25em] uppercase mt-2 font-semibold">
                  WINGSPAN
                </div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-headline-md text-white tracking-tight">
                  8 kg
                </div>
                <div className="text-sm font-mono text-zinc-400 tracking-[0.25em] uppercase mt-2 font-semibold">
                  PAYLOAD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. 01 — LEVITATE DYNAMICS (Introduction)
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 border-b border-white/10">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-zinc-400 tracking-[0.25em] uppercase font-semibold block">
                01 — LEVITATE DYNAMICS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline-md uppercase text-white tracking-tight leading-[1.1]">
                ENGINEERING THE NEXT GENERATION OF AERIAL SYSTEMS
              </h2>
              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed pt-2 font-body-md">
                Levitate Dynamics Private Limited is a young Indian aerospace and deep-tech startup focused on building fully indigenous High Altitude Pseudo Satellite (HAPS) systems and autonomous stratospheric aircraft for defense, communication, surveillance, and aerospace intelligence.
              </p>
            </div>

            <div className="lg:col-span-5 relative h-[340px] sm:h-[440px] rounded-sm overflow-hidden border border-white/10 bg-zinc-950">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXSQKXhfeJmYUGP6hSqWaeFyTS3J2CUoiokI2lQ5fSsG8IERxk1NEEtJgVrSb5pEI-3IU_39YFPdVHgUcQkIiQgDrtfp4vW7jIXrVwN-PlDhH24iCRkzO8bcjTLqQSuVUWqKl2Fe3GiQDBQut8bQJs9eBSO5Iy-L4E-fH8rLd48Ile91tT6aEd4cviNhD4IrF_CcDcGerRbSOzcU8xL9kEvwoazHfhhF2TTQu6UZyLoVkaHiiby035270r7gTmy0zjw5zQzYZrV1M"
                alt="Stratospheric Earth Observation"
                className="w-full h-full object-cover opacity-80 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-[11px] font-mono text-zinc-400">
                <span>STRATOSPHERIC ENVELOPE</span>
                <span>SOVEREIGN AEROSPACE</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. 02 — TECHNOLOGY
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0e0e12] border-b border-white/10">
          <div className="max-w-container-max mx-auto">
            <div className="mb-14 sm:mb-20 max-w-3xl">
              <span className="text-xs font-mono text-zinc-400 tracking-[0.25em] uppercase font-semibold block mb-3">
                02 — TECHNOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
                TECHNOLOGY FOR PERSISTENT FLIGHT
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {CORE_TECHNOLOGIES.map((tech) => (
                <div
                  key={tech.title}
                  className="p-8 sm:p-10 bg-[#131317] border border-white/10 rounded-sm hover:border-white/25 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase block mb-6">
                      {tech.tag}
                    </span>
                    <h3 className="text-xl font-bold font-headline-sm uppercase text-white tracking-wide mb-4">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-body-md leading-relaxed font-light">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-end">
              <Link
                href="/tech"
                className="text-xs font-mono text-zinc-300 hover:text-white uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>EXPLORE TECHNICAL ARCHITECTURE</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. 03 — PLATFORMS
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 tracking-[0.25em] uppercase font-semibold block mb-3">
                03 — PLATFORMS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
                OUR STRATOSPHERIC PLATFORMS
              </h2>
            </div>
            <Link
              href="/platforms"
              className="text-xs font-mono text-zinc-400 hover:text-white uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>VIEW ALL PLATFORMS</span>
              <span>→</span>
            </Link>
          </div>

          {/* Featured Flagship Platform Card */}
          <div className="bg-[#121216] border border-white/10 rounded-sm overflow-hidden hover:border-white/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Aircraft Visual Container */}
              <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] bg-black overflow-hidden group">
                <img
                  src="/haps-aircraft.jpg"
                  alt="Levitate HAPS Platform"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#121216]"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300 tracking-widest uppercase rounded-sm">
                    FLAGSHIP STRATOSPHERIC PLATFORM
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-[11px] font-mono text-zinc-400">
                  LEVITATE HAPS
                </div>
              </div>

              {/* Specifications & Description Column */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#121216]">
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    SOVEREIGN AEROSPACE ARCHITECTURE
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-headline-sm uppercase text-white tracking-wide mb-4">
                    LEVITATE HAPS
                  </h3>
                  <p className="text-sm text-zinc-300 font-body-md leading-relaxed font-light mb-8">
                    A long-endurance high-altitude platform designed for persistent aerial intelligence, communication, surveillance, and remote sensing applications.
                  </p>

                  {/* Verified Specifications */}
                  <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/10 mb-8">
                    <div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline-sm text-white">
                        24 m
                      </div>
                      <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase mt-1 font-semibold">
                        WINGSPAN
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline-sm text-white">
                        8 kg
                      </div>
                      <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase mt-1 font-semibold">
                        PAYLOAD
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/haps"
                    className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>EXPLORE PLATFORM DETAILS</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 border border-zinc-700 hover:border-zinc-400 text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-all text-center"
                  >
                    INQUIRE MISSION
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            8. 04 — APPLICATIONS
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0e0e12] border-b border-white/10">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl mb-14 sm:mb-20">
              <span className="text-xs font-mono text-zinc-400 tracking-[0.25em] uppercase font-semibold block mb-3">
                04 — APPLICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight mb-4">
                PERSISTENT AERIAL INTELLIGENCE
              </h2>
              <p className="text-zinc-400 font-body-md text-base sm:text-lg leading-relaxed font-light">
                Stationed at 65,000 feet, Levitate Dynamics platforms deliver continuous regional coverage across critical strategic, defense, and civilian envelopes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {APPLICATIONS.map((app) => (
                <div
                  key={app.title}
                  className="bg-[#131317] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all"
                >
                  <div className="relative h-48 bg-black overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-black/70 border border-white/15 text-[9px] font-mono text-zinc-300 uppercase tracking-wider rounded-sm">
                        {app.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wide mb-3">
                        {app.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-body-md leading-relaxed font-light">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            9. 05 — INDIGENOUS TECHNOLOGY (Built in India)
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 border-b border-white/10">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-zinc-400 tracking-[0.25em] uppercase font-semibold block">
                SOVEREIGN INDEPENDENCE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline-md uppercase text-white tracking-tight leading-[1.1]">
                BUILT IN INDIA.
              </h2>
              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed font-body-md">
                Levitate Dynamics is working toward sovereign aerospace technologies designed and developed in India, combining aerospace engineering, AI-powered autonomy, and future-ready aviation systems.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed font-body-md">
                Rooted in Nagpur, Maharashtra, our systems are proudly aligned with the national <strong className="text-white font-semibold">Atmanirbhar Bharat</strong> vision—building self-reliance in high-altitude persistent surveillance, communications relay, and aerospace independence.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="px-6 py-3 border border-zinc-700 hover:border-zinc-400 text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-all inline-flex items-center gap-2"
                >
                  <span>LEARN MORE ABOUT OUR MISSION</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] rounded-sm overflow-hidden border border-white/10 bg-zinc-950">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Wtrfa8obxadyVdEaTn9OF3ZRf__6ta1ex9YQIXo-ERLQf_EGyndwn84VArDq-ESpbRdchohsZlFk3oTlincxlFqgKSvWlQ2zVS0Ky6mL97f_zYK6fPEqJh5PgNyvHWFjjW0fJ2j9TdkQMm6nTJW5pA-Kn9r9h5elg9L1tP5ei_f9D7og8u3ElJ6lIk_shVf_2Q4iCnk8ZThNQTTmMgHW03rcdtig6xowKQz1fSjQDQg6-1tK9tvKHRcNXJZH27vLy3FCO5onIxE"
                alt="Indigenous Aerospace Engineering in India"
                className="w-full h-full object-cover opacity-70 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 text-xs font-mono text-zinc-400">
                <span>HEADQUARTERS: NAGPUR, MAHARASHTRA</span>
                <span className="text-white">ATMANIRBHAR BHARAT ALIGNED</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            10. 05 — ABOUT
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs font-mono text-zinc-400 tracking-[0.25em] uppercase font-semibold block">
              05 — ABOUT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
              A NEW GENERATION OF INDIAN AEROSPACE
            </h2>
            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed font-body-md">
              Levitate Dynamics Private Limited is an Indian aerospace startup founded by young entrepreneurs, engineers, and innovators working toward indigenous aerospace and stratospheric technologies for defense, communication, surveillance, and aerospace intelligence.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed font-body-md max-w-2xl mx-auto">
              Operating out of Nagpur, Maharashtra, our multidisciplinary engineering team combines carbon composite aero-structures, solar harvesting arrays, and autonomous flight guidance.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="px-6 py-3.5 border border-zinc-700 hover:border-zinc-400 text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-all inline-flex items-center gap-2"
              >
                <span>LEARN MORE →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            11. 06 — INVESTORS
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0c0c10] border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs font-mono text-zinc-400 tracking-[0.25em] uppercase font-semibold block">
              06 — INVESTORS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
              BUILDING THE FUTURE OF INDIGENOUS AEROSPACE
            </h2>
            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed font-body-md">
              Levitate Dynamics is creating critical stratospheric infrastructure at the intersection of aerospace hardware, deep-tech, artificial intelligence, defense technology, telecommunication infrastructure, and space-adjacent systems.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed font-body-md max-w-2xl mx-auto">
              We collaborate with institutional investors, strategic partners, and sovereign aerospace entities committed to India&#39;s technological independence.
            </p>
            <div className="pt-4">
              <Link
                href="/investors"
                className="px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all inline-flex items-center gap-2"
              >
                <span>INVESTOR RELATIONS →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            12. FINAL CTA
            ============================================================ */}
        <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#09090b] text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline-md uppercase text-white tracking-tight leading-[1.08]">
              DESIGNED FOR THE STRATOSPHERE.
            </h2>
            <p className="text-zinc-400 font-body-md text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Building the next generation of indigenous aerospace systems from India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase rounded-sm transition-all"
              >
                CONTACT US
              </Link>
              <Link
                href="/tech"
                className="px-8 py-3.5 border border-zinc-700 hover:border-zinc-400 text-white font-semibold text-xs tracking-wider uppercase rounded-sm transition-all bg-transparent"
              >
                EXPLORE TECHNOLOGY
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
