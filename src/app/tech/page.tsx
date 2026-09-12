"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecificationsModal from "@/components/SpecificationsModal";

export default function Tech() {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "submitted">("idle");
  const [formError, setFormError] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [formData, setFormData] = useState({
    orgType: "Defense / Government",
    clearance: "Standard Civil",
    email: "",
    parameters: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.parameters.trim()) {
      setFormError("Please provide both an institutional email and mission operational parameters.");
      return;
    }
    setFormError("");
    setFormState("submitting");
    setTimeout(() => {
      const code = `LD-TX-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketId(code);
      setFormState("submitted");
    }, 800);
  };

  return (
    <>
      <Header />

      <main className="pt-24 sm:pt-28 pb-20 bg-[#0b0b0e] text-white min-h-screen">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-20 sm:mb-28">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#00dbe9] uppercase font-semibold block mb-3">
              STRATEGIC TECHNOLOGY
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-headline-md leading-[1.08] mb-6">
              SOVEREIGN STRATOSPHERIC SYSTEMS.
            </h1>
            <p className="text-slate-300 font-body-md text-base sm:text-xl leading-relaxed font-light">
              High-altitude platforms engineered for perpetual loiter, persistent real-time intelligence, and uncompromised communications. Designed and built in India.
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

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsSpecsOpen(true)}
                className="btn-primary"
              >
                VIEW SPECIFICATIONS
              </button>
              <a
                href="#capabilities"
                className="btn-secondary"
              >
                CORE CAPABILITIES
              </a>
            </div>
          </div>
        </section>

        {/* Large Cinematic Hero Image */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-24 sm:mb-32">
          <div className="relative h-[320px] sm:h-[450px] lg:h-[550px] rounded-sm overflow-hidden border border-white/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWa4_2QCd3XBWZUFL33SKVczZuZy0HLhsLEboxcq9pn_aw5a7CgGAaN9JxmZdVinA8DAO3Dm6L9p7Iajf4lgeONWZ_onqo9c-ZQqjJ0HjS8fIJPI1BkUSnI56-4pl9oEFndek9BkzPwC3EFHyqKnRuhN-C8MffIsZdS4tcFHWKtwY_YgibPZcjz6xOGoM5hKKfrb6yhCwm2jQNdmQCYE7ZArlXpkTvl6yOupnis8svjZKt-iCN36DUEwHt0zceVf-z5ZJnRu5479k"
              alt="HAPS Loitering at 65,000 FT"
              className="w-full h-full object-cover opacity-60 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-xs font-mono text-slate-400">
              <span>STRATOSPHERIC AERIAL PLATFORM</span>
              <span>ZERO-CARBON PROPULSION</span>
            </div>
          </div>
        </section>

        {/* Core Technology Pillars */}
        <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f0f13] border-y border-white/10 mb-24 sm:mb-32 scroll-mt-20">
          <div className="max-w-container-max mx-auto">
            <div className="mb-14 sm:mb-18">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
                TECHNOLOGY FOUNDATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
                OUR TECHNOLOGY PILLARS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-slate-500 block mb-4">01</span>
                <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                  HIGH-ALTITUDE PLATFORMS
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  Continuous solar-electric flight operating in the stratosphere, well above civilian air lanes and weather storms for perpetual loiter.
                </p>
              </div>

              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-slate-500 block mb-4">02</span>
                <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                  ADVANCED AERODYNAMICS
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  Ultra-high aspect ratio carbon-composite airframes engineered for extreme structural flexure and low-density stratospheric lift.
                </p>
              </div>

              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-slate-500 block mb-4">03</span>
                <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                  ENERGY SYSTEMS
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  High-efficiency multi-junction solar harvesting arrays paired with high-density energy storage for continuous day-night persistence.
                </p>
              </div>

              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-slate-500 block mb-4">04</span>
                <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                  AUTONOMOUS OPERATIONS
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  Proprietary onboard flight software managing autonomous energy budgets, wind loiter optimization, and emergency recovery.
                </p>
              </div>

              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-slate-500 block mb-4">05</span>
                <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                  SECURE COMMUNICATIONS
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  High-throughput line-of-sight laser and RF links with sub-10ms ground latency and sovereign quantum-resistant encryption.
                </p>
              </div>

              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-slate-500 block mb-4">06</span>
                <h3 className="text-lg font-bold font-headline-sm uppercase text-white tracking-wider mb-3">
                  MODULAR PAYLOADS
                </h3>
                <p className="text-sm text-slate-400 font-body-md leading-relaxed font-light">
                  Standardized quick-swap bays supporting 8 kg payloads: Wide-Area Motion Imagery (WAMI), electro-optical sensors, radar, and communications arrays.
                </p>
              </div>
            </div>

            <div className="mb-14 sm:mb-18 pt-12 border-t border-white/10">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
                MISSION CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
                PRIMARY OPERATIONAL ROLES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Capability 1 */}
              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-[#00dbe9] uppercase tracking-widest block mb-4">
                  01 // DEFENSE &amp; SECURITY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-headline-sm uppercase text-white tracking-wide mb-3">
                  PERSISTENT SURVEILLANCE
                </h3>
                <p className="text-sm text-slate-300 font-body-md leading-relaxed font-light mb-4">
                  Continuous 24/7 monitoring of borders, coastlines, and sensitive national corridors. Unlike orbital satellites that orbit past in minutes, our HAPS platforms loiter permanently, streaming optical and infrared intelligence without blind spots.
                </p>
                <div className="text-xs font-mono text-slate-500">
                  METRIC: SUB-METER OPTICAL RESOLUTION (10 CM/PX)
                </div>
              </div>

              {/* Capability 2 */}
              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-[#00dbe9] uppercase tracking-widest block mb-4">
                  02 // TELECOMMUNICATIONS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-headline-sm uppercase text-white tracking-wide mb-3">
                  TELECOM BRIDGING &amp; 5G
                </h3>
                <p className="text-sm text-slate-300 font-body-md leading-relaxed font-light mb-4">
                  Deploying broadband and 5G cellular connectivity to remote, mountainous, and rural regions. Operating as a pseudo-orbital tower at 20km, a single platform covers up to 40,000 km² directly to standard user handsets.
                </p>
                <div className="text-xs font-mono text-slate-500">
                  METRIC: &lt;10MS ROUNDTRIP LATENCY // 10 GBPS BACKHAUL
                </div>
              </div>

              {/* Capability 3 */}
              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-[#00dbe9] uppercase tracking-widest block mb-4">
                  03 // ENVIRONMENT &amp; CLIMATE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-headline-sm uppercase text-white tracking-wide mb-3">
                  ENVIRONMENTAL INTELLIGENCE
                </h3>
                <p className="text-sm text-slate-300 font-body-md leading-relaxed font-light mb-4">
                  Granular tracking of wildfire ignition points, atmospheric greenhouse gas concentrations, and glacial melt telemetry. High-resolution hyperspectral sensors detect changes invisible to standard satellites.
                </p>
                <div className="text-xs font-mono text-slate-500">
                  METRIC: CONTINUOUS THERMAL SENSING OVER 5,000 KM² FORESTRY
                </div>
              </div>

              {/* Capability 4 */}
              <div className="p-8 bg-[#141418] border border-white/10 rounded-sm">
                <span className="text-xs font-mono text-[#00dbe9] uppercase tracking-widest block mb-4">
                  04 // CRISIS RESPONSE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-headline-sm uppercase text-white tracking-wide mb-3">
                  RAPID DISASTER RESPONSE
                </h3>
                <p className="text-sm text-slate-300 font-body-md leading-relaxed font-light mb-4">
                  When earthquakes, cyclones, or floods destroy terrestrial communications and ground infrastructure, tactical HAPS platforms deploy in under two hours to establish emergency communication nodes for first responders.
                </p>
                <div className="text-xs font-mono text-slate-500">
                  METRIC: &lt;2 HOURS MOBILIZATION TIME FROM CONTAINER
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Superiority */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-24 sm:mb-32">
          <div className="mb-12 sm:mb-16">
            <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
              COMPARATIVE METRICS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline-md uppercase text-white tracking-tight">
              OPERATIONAL SUPERIORITY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                VS ORBITAL SATELLITES
              </span>
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10">
                <div>
                  <div className="text-2xl font-bold font-headline-sm text-white">10ms</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Latency (vs 600ms)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-headline-sm text-white">10cm</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Resolution (vs 50cm+)</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-body-md leading-relaxed font-light">
                By operating at 20km altitude rather than 500km+, our platforms deliver high-throughput bandwidth and optical clarity that makes orbital assets economically and technically inferior for regional observation.
              </p>
            </div>

            <div className="p-8 bg-[#111115] border border-white/10 rounded-sm space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                VS TACTICAL MILITARY DRONES
              </span>
              <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10">
                <div>
                  <div className="text-2xl font-bold font-headline-sm text-white">90 Days</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Endurance (vs 24 Hrs)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-headline-sm text-white">65,000 FT</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Cruising Ceiling</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-body-md leading-relaxed font-light">
                Flying far above adverse weather patterns and conventional anti-aircraft envelopes, Levitate Dynamics HAPS platforms offer months of unbroken mission presence compared to traditional fuel-burning UAVs.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Integration Form */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#0f0f13] border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[11px] font-mono text-[#00dbe9] tracking-widest uppercase font-semibold block mb-2">
                SYSTEM PROCUREMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline-md uppercase text-white tracking-tight mb-3">
                MISSION INTEGRATION
              </h2>
              <p className="text-sm text-slate-400 font-body-md">
                Levitate Dynamics collaborates with defense ministries, government agencies, and commercial telecom providers to deploy custom stratospheric architectures.
              </p>
            </div>

            <div className="p-6 sm:p-10 bg-[#141418] border border-white/10 rounded-sm">
              {formState === "submitted" ? (
                <div className="py-8 text-center space-y-4">
                  <span className="material-symbols-outlined text-4xl text-[#00dbe9]">check_circle</span>
                  <h3 className="text-xl font-bold text-white uppercase font-headline-sm">
                    INQUIRY RECEIVED
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your mission operational parameters have been received. Our aerospace flight operations team will review your specifications.
                  </p>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm max-w-xs mx-auto font-mono text-xs text-[#00dbe9]">
                    DISPATCH REF: {ticketId}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormState("idle");
                      setFormData({ orgType: "Defense / Government", clearance: "Standard Civil", email: "", parameters: "" });
                    }}
                    className="text-xs font-mono text-slate-400 hover:text-white uppercase tracking-wider pt-2"
                  >
                    TRANSMIT ANOTHER SPECIFICATION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono rounded-sm">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Organization Type
                      </label>
                      <select
                        value={formData.orgType}
                        onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                        className="w-full bg-[#1c1c22] border border-white/15 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-white"
                      >
                        <option value="Defense / Government">Defense / Government</option>
                        <option value="Telecommunications Provider">Telecommunications Provider</option>
                        <option value="Research / Academic Institution">Research / Academic Institution</option>
                        <option value="Commercial Venture">Commercial Venture</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Clearance Level
                      </label>
                      <select
                        value={formData.clearance}
                        onChange={(e) => setFormData({ ...formData, clearance: e.target.value })}
                        className="w-full bg-[#1c1c22] border border-white/15 px-3 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-white"
                      >
                        <option value="Standard Civil">Standard Civil (Unrestricted)</option>
                        <option value="Restricted Sovereign">Restricted Sovereign / Defense</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="officer@defense.gov / partner@telecom.com"
                      className="w-full bg-[#1c1c22] border border-white/15 px-4 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Mission Operational Parameters *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.parameters}
                      onChange={(e) => setFormData({ ...formData, parameters: e.target.value })}
                      placeholder="Outline mission operational requirements, target geographical coordinates, payload weight, or loiter duration requirements..."
                      className="w-full bg-[#1c1c22] border border-white/15 px-4 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full btn-primary"
                    >
                      {formState === "submitting" ? "TRANSMITTING..." : "TRANSMIT MISSION SPECIFICATIONS"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SpecificationsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
      />

      <Footer />
    </>
  );
}
