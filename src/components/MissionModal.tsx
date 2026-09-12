"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionModal({ isOpen, onClose }: MissionModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  // Close on Escape key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      setHasError(false);
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mission Video Stream"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#0b0b0e] border border-white/15 rounded-sm shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111115]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00dbe9]"></span>
                <span className="text-xs font-headline-sm font-semibold tracking-wider uppercase text-white">
                  LEVITATE DYNAMICS // FLIGHT DEMONSTRATOR
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-1 rounded-sm transition-colors focus:outline-none"
                aria-label="Close mission video"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {hasError ? (
                <div className="p-8 text-center space-y-3 font-mono">
                  <span className="material-symbols-outlined text-4xl text-slate-500">videocam_off</span>
                  <p className="text-sm text-slate-400">Video playback unavailable in current environment.</p>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src="/video.mp4"
                  controls
                  autoPlay
                  playsInline
                  onError={() => setHasError(true)}
                  className="w-full h-full object-contain"
                >
                  Your browser does not support video playback.
                </video>
              )}
            </div>

            {/* Video Caption Footer */}
            <div className="px-6 py-3 bg-[#111115] border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-body-md">
              <span>Flagship HAPS Flight Test // High Altitude Loiter Demonstration</span>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-slate-300 hover:text-white uppercase tracking-wider"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
