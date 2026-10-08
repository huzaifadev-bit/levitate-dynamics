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
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8 shrink-0">
                <img
                  src="/logo.svg"
                  alt="Levitate Dynamics"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white">
                  LEVITATE DYNAMICS
                </span>
                <span className="text-[10px] font-mono text-[#00f5ff] tracking-wider uppercase">
                  Sovereign Stratospheric Aerospace
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed max-w-md">
              Persistent Stratospheric Flight. Sovereign Intelligence &amp; Connectivity. Developing indigenous High Altitude Pseudo-Satellites for national security, border surveillance, and resilient communications.
            </p>
            <div className="pt-2 text-[11px] font-mono text-zinc-500 space-y-1">
              <div>CIN: U30305MH2025PTC447508</div>
              <div>OPERATIONS: NAGPUR, MAHARASHTRA, INDIA</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="text-xs font-semibold tracking-wider text-white uppercase mb-2">
              NAVIGATION
            </span>
            <Link className="text-xs text-zinc-400 hover:text-white transition-colors" href="/#platform">
              Platform
            </Link>
            <Link className="text-xs text-zinc-400 hover:text-white transition-colors" href="/#technology">
              Technology
            </Link>
            <Link className="text-xs text-zinc-400 hover:text-white transition-colors" href="/#missions">
              Missions
            </Link>
            <Link className="text-xs text-zinc-400 hover:text-white transition-colors" href="/#company">
              Company
            </Link>
            <Link className="text-xs text-zinc-400 hover:text-white transition-colors" href="/#contact">
              Contact
            </Link>
            <button
              onClick={() => setDisclosureOpen(true)}
              className="text-left text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Legal &amp; Regulatory Disclosure
            </button>
          </div>

          {/* Location & Contact Col */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold tracking-wider text-white uppercase block mb-2">
              REGISTERED OFFICE &amp; CONTACT
            </span>
            <address className="not-italic text-xs text-zinc-400 leading-relaxed font-sans">
              Flat No. 301, Borkute Lay Out,<br />
              Narendra Nagar, Nagpur,<br />
              Maharashtra 440015, India.
            </address>
            <div className="pt-1 flex flex-col gap-1.5 text-xs">
              <a
                href="mailto:levitateworks.office@gmail.com"
                className="text-[#00f5ff] hover:underline font-mono"
              >
                levitateworks.office@gmail.com
              </a>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://share.google/WappuysEw0qQjJH6W"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white underline font-mono"
                >
                  View on Map ↗
                </a>
                <a
                  href="https://www.tofler.in/levitate-dynamics-private-limited/company/U30305MH2025PTC447508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white underline font-mono"
                >
                  Corporate Info (Tofler) ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-container-max mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © 2026 Levitate Dynamics Private Limited. All rights reserved.
          </div>
          <div className="text-[11px] text-zinc-500">
            SOVEREIGN AEROSPACE INDEPENDENCE // ATMANIRBHAR BHARAT
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
