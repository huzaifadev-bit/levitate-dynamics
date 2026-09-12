"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DataRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle?: string;
}

export default function DataRoomModal({
  isOpen,
  onClose,
  documentTitle = "Levitate Dynamics Institutional Data Room",
}: DataRoomModalProps) {
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setEmail("");
      setFirm("");
      setAccessCode("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firm) return;
    const randomCode = `LD-ACCESS-${Math.floor(100000 + Math.random() * 900000)}`;
    setAccessCode(randomCode);
    setSubmitted(true);
  };

  const handleDownloadDossier = (filename: string) => {
    const content = `======================================================================
LEVITATE DYNAMICS — SOVEREIGN STRATOSPHERIC AEROSPACE
DOCUMENT: ${filename}
OPERATIONAL HEADQUARTERS: NAGPUR, MAHARASHTRA, INDIA
CORPORATE CIN: U30305MH2025PTC447508
DISCLOSURE NOTICE: INSTITUTIONAL PORTFOLIO REVIEW & DEMONSTRATION BRIEF.
======================================================================

1. EXECUTIVE BRIEFING
Levitate Dynamics develops solar-electric High Altitude Pseudo-Satellites (HAPS)
operating continuously at 65,000 feet (20.4 km MSL) for persistent sensing,
telecom bridging, and sovereign atmospheric domain control.

2. CORPORATE GOVERNANCE
- Legal Entity: LEVITATE DYNAMICS PRIVATE LIMITED
- Corporate CIN: U30305MH2025PTC447508
- Headquarters: Nagpur, Maharashtra, India
- Directors:
  • Pranay Rajesh Nagrale (Director & Chief Engineer)
  • Nirmeet Ganesh Wankhade (Director & Ops Command)

3. PLATFORM SPECIFICATIONS
- System: Autonomous Solar-Electric High Altitude Pseudo-Satellite (HAPS)
- Wingspan: 24 m
- Payload Capacity: 8 kg
- Mission Capabilities: Persistent ISR, Sovereign Telecom Relay, Maritime Security, Crisis Mapping

4. ACCESS CREDENTIALS
- Reference: ${accessCode}
- Clearance Status: Authorized Institutional Review (Demonstrator)
======================================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="data-room-title"
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
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0b0b0e] border border-white/15 rounded-sm p-6 sm:p-8 z-10 space-y-6 shadow-2xl"
          >
            <div className="flex justify-between items-start pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#00dbe9] uppercase tracking-widest font-semibold block mb-1">
                  INSTITUTIONAL ACCESS
                </span>
                <h3
                  id="data-room-title"
                  className="font-headline-sm text-base sm:text-lg font-bold text-white uppercase tracking-wider"
                >
                  {documentTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-1 rounded-sm transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed font-body-md">
                  To view verified technical dossiers, financial overviews, and aerospace platform specifications, please confirm your institutional identity.
                </p>

                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@venturefund.com"
                    className="w-full bg-[#141418] border border-white/15 px-4 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Organization / Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={firm}
                    onChange={(e) => setFirm(e.target.value)}
                    placeholder="Institutional Partner / Defense Agency"
                    className="w-full bg-[#141418] border border-white/15 px-4 py-2.5 rounded-sm text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 border border-white/15 text-slate-400 hover:text-white text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-white hover:bg-slate-100 text-black font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    ACCESS DATA ROOM
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">STATUS:</span>
                    <span className="text-[#00dbe9] font-semibold font-mono">VERIFIED ACCESS</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">CREDENTIAL:</span>
                    <span className="text-white font-mono font-bold">{accessCode}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">REPRESENTING:</span>
                    <span className="text-white font-body-md">{firm}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    AVAILABLE INSTITUTIONAL BRIEFS
                  </span>

                  {[
                    "LEVITATE_DYNAMICS_EXECUTIVE_SUMMARY.txt",
                    "STRATOSPHERIC_PLATFORM_SPECIFICATIONS.txt",
                    "CORPORATE_GOVERNANCE_&_CAPITAL_TABLE.txt",
                  ].map((docName, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#141418] border border-white/10 rounded-sm flex items-center justify-between hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-200 font-mono truncate mr-2">
                        <span className="material-symbols-outlined text-sm text-[#00dbe9]">description</span>
                        <span className="truncate">{docName}</span>
                      </div>
                      <button
                        onClick={() => handleDownloadDossier(docName)}
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono uppercase tracking-wider rounded-sm transition-colors shrink-0"
                      >
                        DOWNLOAD
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-slate-100"
                  >
                    DONE
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
