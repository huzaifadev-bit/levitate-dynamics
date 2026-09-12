"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpecificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SpecRow {
  category: string;
  value: string;
  description: string;
}

const VERIFIED_SPECS: SpecRow[] = [
  {
    category: "WINGSPAN",
    value: "24 m",
    description: "Ultra-high aspect ratio carbon-composite airframe engineered for stratospheric flight.",
  },
  {
    category: "PAYLOAD CAPACITY",
    value: "8 kg",
    description: "Quick-swap standardized modular payload bay supporting electro-optical sensors, RF, and communications systems.",
  },
  {
    category: "STRUCTURAL MATERIAL",
    value: "CARBON COMPOSITE",
    description: "Ultra-lightweight composite structure formulated for low-density atmospheric persistence.",
  },
  {
    category: "PROPULSION ARCHITECTURE",
    value: "SOLAR-ELECTRIC",
    description: "High-efficiency brushless propulsion integrated with solar energy harvesting arrays.",
  },
];

export default function SpecificationsModal({ isOpen, onClose }: SpecificationsModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="specifications-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#0b0b0e] border border-white/15 rounded-sm shadow-2xl overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-[#111115] border-b border-white/10">
              <div>
                <h2
                  id="specifications-title"
                  className="font-headline-sm text-sm sm:text-base font-bold text-white uppercase tracking-wider"
                >
                  LEVITATE DYNAMICS // PLATFORM SPECIFICATIONS
                </h2>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                  SYSTEM: FLAGSHIP HIGH ALTITUDE PSEUDO-SATELLITE (HAPS)
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-1 rounded-sm transition-colors focus:outline-none"
                aria-label="Close specifications"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Prominent Minimal Key Specifications */}
            <div className="grid grid-cols-2 gap-8 px-6 sm:px-8 py-6 bg-[#0e0e12] border-b border-white/10">
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

            {/* Datasheet Table Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    <th className="pb-3 pr-4 font-semibold w-2/5">CATEGORY</th>
                    <th className="pb-3 pr-4 font-semibold w-1/4">VALUE</th>
                    <th className="pb-3 font-semibold">DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {VERIFIED_SPECS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pr-4 font-mono font-medium text-slate-300">
                        {row.category}
                      </td>
                      <td className="py-4 pr-4 font-bold font-headline-sm text-white">
                        {row.value}
                      </td>
                      <td className="py-4 text-slate-400 leading-relaxed font-body-md text-xs sm:text-sm">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-slate-500 font-mono">
                <span>DOCUMENT: LD-DS-2026 // UNRESTRICTED TECHNICAL OVERVIEW</span>
                <span className="text-zinc-400">VERIFIED SPECIFICATIONS</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#111115] border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-slate-100 transition-colors"
              >
                CLOSE DATASHEET
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
