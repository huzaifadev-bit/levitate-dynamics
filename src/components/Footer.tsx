"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const [disclosureOpen, setDisclosureOpen] = useState(false);

  // Close on Escape key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDisclosureOpen(false);
    };
    if (disclosureOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [disclosureOpen]);

  return (
    <>
      <footer className="w-full bg-[#08080a] border-t border-white/10 py-16 px-4 sm:px-6 md:px-10 lg:px-16 mt-auto">
        <div className="max-w-container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8 shrink-0">
                <img
                  src="/logo.svg"
                  alt="Levitate Dynamics"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white group-hover:text-zinc-200 transition-colors">
                LEVITATE DYNAMICS PRIVATE LIMITED
              </span>
            </Link>
            <p className="text-slate-400 font-body-md text-xs sm:text-sm leading-relaxed max-w-sm">
              Architecting sovereign high-altitude aerospace platforms for persistent sensing, sovereign communications, and national security.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500 space-y-1">
              <div>CIN: U30305MH2025PTC447508</div>
              <div>OPERATIONS COMMAND: NAGPUR, MAHARASHTRA, INDIA</div>
            </div>
          </div>

          {/* Platform Col */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold tracking-wider text-white uppercase mb-2">
              PLATFORM
            </span>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/haps">
              Flagship HAPS Overview
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/haps#specifications">
              Flight Envelope &amp; Loiter
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/haps#payloads">
              Modular Payload Bays
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/tech">
              Solar-Electric Propulsion
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/tech#autonomy">
              Autonomous Guidance
            </Link>
          </div>

          {/* Technology Col */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold tracking-wider text-white uppercase mb-2">
              TECHNOLOGY
            </span>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/tech#aerodynamics">
              Composite Aerodynamics
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/tech#solar-energy">
              Solar-Electric Propulsion
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/tech#autonomy">
              Autonomous Guidance
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/tech#mesh">
              Sovereign Mesh Encryption
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/tech#capabilities">
              Operational Superiority
            </Link>
          </div>

          {/* Company Col */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-semibold tracking-wider text-white uppercase mb-2">
              COMPANY
            </span>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/about">
              About Us
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/about#leadership">
              Leadership
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/investors">
              Investors
            </Link>
            <Link className="text-xs text-slate-400 hover:text-white transition-colors" href="/contact">
              Contact &amp; Procurement
            </Link>
            <button
              onClick={() => setDisclosureOpen(true)}
              className="text-left text-xs text-slate-400 hover:text-white transition-colors"
            >
              Legal Disclosure
            </button>
          </div>
        </div>

        <div className="max-w-container-max mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 LEVITATE DYNAMICS PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div>
            SOVEREIGN AEROSPACE INDEPENDENCE
          </div>
        </div>
      </footer>

      {/* Legal Disclosure Modal */}
      <AnimatePresence>
        {disclosureOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDisclosureOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-disclosure-title"
              className="relative w-full max-w-lg bg-[#111115] border border-white/15 rounded-sm p-6 sm:p-8 z-10 space-y-4 shadow-2xl"
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <h3
                  id="legal-disclosure-title"
                  className="font-headline-sm text-sm font-bold text-white uppercase tracking-wider"
                >
                  LEGAL &amp; REGULATORY DISCLOSURE
                </h3>
                <button
                  onClick={() => setDisclosureOpen(false)}
                  className="text-slate-400 hover:text-white"
                  aria-label="Close legal disclosure"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-body-md">
                Levitate Dynamics (CIN: U30305MH2025PTC447508) is an incorporated aerospace and defense technology entity registered in Maharashtra, India. All telemetry benchmarks and flight streams presented on public demonstrator portals reflect simulated and operational engineering profiles. Operational flight clearances remain subject to Directorate General of Civil Aviation (DGCA) and Ministry of Defence sovereign flight authorization corridors.
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setDisclosureOpen(false)}
                  className="px-5 py-2.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-slate-100"
                >
                  ACKNOWLEDGE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
