"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#platform", label: "PLATFORM" },
  { href: "/#technology", label: "TECHNOLOGY" },
  { href: "/#missions", label: "MISSIONS" },
  { href: "/#traction", label: "ROADMAP" },
  { href: "/#company", label: "COMPANY" },
  { href: "/#contact", label: "CONTACT" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* Subtle Top Announcement Banner */}
        {bannerVisible && (
          <div className="w-full bg-[#0d1520] border-b border-[#00f5ff]/20 px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs text-zinc-300">
            <div className="max-w-container-max mx-auto flex items-center justify-center gap-2 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-pulse shrink-0" />
              <span className="font-mono text-zinc-400">FLIGHT PROGRAM //</span>
              <span className="text-zinc-200">
                Flight Testing &amp; Mission Unveil —{" "}
                <Link href="/#contact" className="text-[#00f5ff] hover:underline font-semibold ml-1">
                  Stay Updated &rarr;
                </Link>
              </span>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              className="text-zinc-500 hover:text-white text-xs px-2 cursor-pointer hidden sm:block"
              aria-label="Dismiss banner"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main Sticky Navbar */}
        <header className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-3.5 bg-[#09090b]/85 backdrop-blur-md border-b border-white/10">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center group shrink-0" aria-label="Levitate Dynamics Home">
            <img
              src="/logo-header.svg"
              alt="Levitate Dynamics"
              className="h-8 sm:h-9 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              width={153}
              height={36}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-[0.14em] uppercase text-zinc-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className="px-5 py-2.5 bg-white hover:bg-zinc-200 text-black text-xs font-semibold tracking-wider uppercase rounded-sm transition-all"
            >
              REQUEST BRIEFING
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/#contact"
              className="px-3.5 py-1.5 bg-white text-black text-[11px] font-semibold tracking-wider uppercase rounded-sm"
            >
              BRIEFING
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="w-9 h-9 flex flex-col justify-center items-center gap-1.5 p-2 rounded-sm border border-white/15 bg-white/5 text-white transition-colors focus:outline-none"
            >
              <span
                className={`w-4 h-0.5 bg-white block transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white block transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white block transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[60px] left-0 w-full z-40 bg-[#09090b] border-b border-white/10 shadow-2xl px-6 py-8 flex flex-col gap-4 max-h-[calc(100vh-70px)] overflow-y-auto lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold tracking-wider uppercase py-2 text-zinc-300 hover:text-white transition-colors border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 mt-2 flex flex-col gap-3">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 bg-white text-black font-semibold text-xs uppercase tracking-wider text-center rounded-sm"
                >
                  REQUEST MISSION BRIEFING
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
