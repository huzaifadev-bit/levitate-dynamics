"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/tech", label: "TECHNOLOGY" },
  { href: "/platforms", label: "PLATFORMS" },
  { href: "/about", label: "ABOUT" },
  { href: "/investors", label: "INVESTORS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-4 bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group z-50 shrink-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
            <img
              src="/logo.svg"
              alt="Levitate Dynamics"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-white">
              LEVITATE
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.26em] text-zinc-400">
              DYNAMICS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-[0.14em] uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-white border-b-2 border-[#00dbe9] pb-0.5"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-white hover:bg-slate-100 text-black text-xs font-semibold tracking-wider uppercase rounded-sm transition-all"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="px-3.5 py-1.5 bg-white text-black text-[11px] font-semibold tracking-wider uppercase rounded-sm"
          >
            CONTACT US
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2 rounded-sm border border-white/10 hover:border-white/20 bg-white/5 text-white transition-colors focus:outline-none"
          >
            <span
              className={`w-5 h-0.5 bg-white block transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white block transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white block transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

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
              className="fixed top-[64px] left-0 w-full z-40 bg-[#0b0b0e] border-b border-white/10 shadow-2xl px-6 py-8 flex flex-col gap-4 max-h-[calc(100vh-70px)] overflow-y-auto lg:hidden"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-headline-sm font-semibold tracking-wider uppercase py-2 transition-colors ${
                      isActive ? "text-[#00dbe9]" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 px-4 bg-white text-black font-semibold text-xs uppercase tracking-wider text-center rounded-sm"
                >
                  CONTACT LEVITATE DYNAMICS
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
