"use client";

import React, { useEffect, useState, useRef } from "react";

/**
 * ============================================================================
 * LEVITATE DYNAMICS — COUNTDOWN TO THE NEXT HORIZON
 * High-precision 1:1 reproduction of the official launch countdown interface.
 * ============================================================================
 */

// Target timestamp: October 9, 2026 at 12:00 AM IST (UTC+05:30)
const COUNTDOWN_TARGET = "2026-10-09T00:00:00+05:30";
const TOTAL_SPAN_MS = 5 * 24 * 60 * 60 * 1000;

export default function CountdownLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: "05",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isLive: false,
    progressFraction: 0.22,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const target = new Date(COUNTDOWN_TARGET).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          isLive: true,
          progressFraction: 1,
        });
        return;
      }

      const totalSec = Math.floor(diff / 1000);
      const d = Math.floor(totalSec / 86400);
      const h = Math.floor((totalSec % 86400) / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;

      const fraction = Math.max(0.1, Math.min(1, diff / TOTAL_SPAN_MS));

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
        isLive: false,
        progressFraction: fraction,
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Atmospheric Starfield Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let stars: Array<{
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      stars = [];
      const count = Math.min(85, Math.floor((width * height) / 14000));
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.78,
          radius: Math.random() * 1.1 + 0.35,
          baseAlpha: Math.random() * 0.45 + 0.15,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const render = (ts: number) => {
      if (document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const a = s.baseAlpha + Math.sin(ts * s.twinkleSpeed + s.twinklePhase) * 0.22;
        ctx.fillStyle = `rgba(190, 240, 255, ${Math.max(0.04, Math.min(0.85, a))})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const HUD_RADIUS = 120;
  const HUD_CIRCUMFERENCE = 2 * Math.PI * HUD_RADIUS;
  const ARC_LENGTH = HUD_CIRCUMFERENCE * 0.22;

  return (
    <div className="relative min-h-screen w-full bg-[#020407] text-[#f8fafc] flex flex-col justify-between overflow-x-hidden selection:bg-[#00f5ff]/30 selection:text-[#00f5ff]">
      {/* Background Starfield Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Earth Horizon & Cloud Deck Layer */}
      <div 
        className="fixed bottom-0 left-0 right-0 w-full pointer-events-none z-0 select-none overflow-hidden h-[26vh] sm:h-[28vh] md:h-[30vh] max-h-[360px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 35%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%, black 100%)",
        }}
      >
        <img
          src="/earth-horizon-clean.png"
          alt="Stratospheric Earth Horizon"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* ============================================================
          TOP HEADER
          ============================================================ */}
      <header className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-12 pt-6 sm:pt-7">
        <div className="flex items-center justify-between pb-3">
          <span className="font-semibold tracking-[0.32em] text-white text-[11px] sm:text-xs uppercase select-none">
            LEVITATE DYNAMICS
          </span>
          <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.28em] text-[#94a3b8] uppercase select-none">
            HIGHER &nbsp;/&nbsp; SMARTER &nbsp;/&nbsp; AUTONOMOUS
          </span>
        </div>

        {/* Thin Futuristic Technical Cyan Line with Tick Notches */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff]/20 to-transparent">
          <div className="absolute left-[18%] top-[-1px] w-[1px] h-[3px] bg-[#00f5ff]/60" />
          <div className="absolute right-[18%] top-[-1px] w-[1px] h-[3px] bg-[#00f5ff]/60" />
        </div>
      </header>

      {/* ============================================================
          SIDE TECHNICAL ANNOTATIONS (Desktop & Large screens)
          ============================================================ */}
      {/* Left Side: Bracket & Mission Domains */}
      <aside className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center gap-3.5 select-none pointer-events-none">
        <svg className="w-5 h-64 text-[#00f5ff]/40" viewBox="0 0 20 260" fill="none">
          <line x1="2" y1="2" x2="16" y2="2" stroke="currentColor" strokeWidth="1.2" />
          <line x1="8" y1="2" x2="8" y2="35" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <path d="M 8 35 L 2 45 L 2 170" stroke="currentColor" strokeWidth="1.2" />
          <line x1="0" y1="170" x2="5" y2="170" stroke="#00f5ff" strokeWidth="1.5" />
          <path d="M 2 170 L 8 180 L 8 220" stroke="currentColor" strokeWidth="1.2" />
          <line x1="8" y1="220" x2="8" y2="258" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="2" y1="258" x2="16" y2="258" stroke="currentColor" strokeWidth="1.2" />
        </svg>

        <div className="flex flex-col gap-1.5 font-mono text-[9px] tracking-[0.24em] text-[#64748b] uppercase">
          <span className="hover:text-[#94a3b8] transition-colors">STRATOSPHERE</span>
          <span className="hover:text-[#94a3b8] transition-colors">DEFENCE</span>
          <span className="hover:text-[#94a3b8] transition-colors">COMMUNICATION</span>
          <span className="hover:text-[#94a3b8] transition-colors">SURVEILLANCE</span>
        </div>
      </aside>

      {/* Right Side: Meter & Coordinates */}
      <aside className="fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center gap-3.5 select-none pointer-events-none">
        <div className="flex flex-col text-right font-mono text-[10px] tracking-[0.24em] text-[#64748b]">
          <span>24.4° N</span>
          <span>77.6° E</span>
        </div>

        <svg className="w-4 h-64 text-[#00f5ff]/40" viewBox="0 0 16 260" fill="none">
          <line x1="2" y1="2" x2="14" y2="2" stroke="currentColor" strokeWidth="1.2" />
          <line x1="8" y1="2" x2="8" y2="200" stroke="currentColor" strokeWidth="1" />
          <line x1="6" y1="30" x2="10" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="6" y1="60" x2="10" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="4" y1="95" x2="12" y2="95" stroke="#00f5ff" strokeWidth="1.2" />
          <line x1="6" y1="130" x2="10" y2="130" stroke="currentColor" strokeWidth="1" />
          <line x1="6" y1="165" x2="10" y2="165" stroke="currentColor" strokeWidth="1" />
          <line x1="8" y1="200" x2="8" y2="258" stroke="#00f5ff" strokeWidth="2" />
          <line x1="2" y1="258" x2="14" y2="258" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </aside>

      {/* ============================================================
          MAIN CENTER HERO & COUNTDOWN
          ============================================================ */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full px-4 py-2 sm:py-3">
        
        {/* HUD Circular Dial & Official Emblem */}
        <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 flex items-center justify-center mb-3 sm:mb-4 select-none">
          {/* Radial Cyan Glow Behind Logo */}
          <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(0,245,255,0.18)_0%,rgba(0,245,255,0.05)_45%,transparent_70%)] pointer-events-none animate-pulse" />

          {/* Precision SVG HUD Ring */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
            <defs>
              <filter id="cyan-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer faint circle */}
            <circle
              cx="150"
              cy="150"
              r="138"
              fill="none"
              stroke="rgba(0, 245, 255, 0.16)"
              strokeWidth="1"
            />

            {/* Outer notches */}
            <line x1="150" y1="10" x2="150" y2="18" stroke="#00f5ff" strokeWidth="1.5" />
            <line x1="282" y1="150" x2="292" y2="150" stroke="#00f5ff" strokeWidth="1.5" />
            <line x1="8" y1="150" x2="18" y2="150" stroke="rgba(0, 245, 255, 0.35)" strokeWidth="1" />

            {/* Inner Circular Dial with 120 Radial Ticks */}
            {Array.from({ length: 120 }).map((_, i) => {
              const angle = (i * 3 * Math.PI) / 180;
              const isMajor = i % 10 === 0;
              const r1 = isMajor ? 123 : 127;
              const r2 = 132;
              const x1 = 150 + r1 * Math.cos(angle);
              const y1 = 150 + r1 * Math.sin(angle);
              const x2 = 150 + r2 * Math.cos(angle);
              const y2 = 150 + r2 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isMajor ? "rgba(0, 245, 255, 0.55)" : "rgba(0, 245, 255, 0.2)"}
                  strokeWidth={isMajor ? 1.2 : 0.75}
                />
              );
            })}

            {/* Glowing Active Arc (Clockwise from 12 o'clock) */}
            <circle
              cx="150"
              cy="150"
              r={HUD_RADIUS}
              fill="none"
              stroke="#00f5ff"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeDasharray={`${ARC_LENGTH} ${HUD_CIRCUMFERENCE}`}
              strokeDashoffset="0"
              transform="rotate(-90 150 150)"
              filter="url(#cyan-glow)"
              className="opacity-95"
            />
          </svg>

          {/* Official Emblem Asset */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center">
            <img
              src="/logo-emblem.png"
              alt="Levitate Dynamics Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_18px_rgba(0,245,255,0.75)] drop-shadow-[0_0_35px_rgba(0,245,255,0.35)] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Brand Title: Stylized LEVITATE DYNAMICS */}
        <div className="flex flex-col items-center mb-3 sm:mb-4 select-none">
          <img
            src="/levitate-dynamics-title.png"
            alt="LEVITATE DYNAMICS"
            className="w-56 sm:w-68 md:w-[290px] object-contain filter drop-shadow-[0_0_15px_rgba(0,245,255,0.3)] mb-2.5"
          />
          <h1 className="sr-only">LEVITATE DYNAMICS</h1>

          {/* Tagline */}
          <h2 className="font-medium tracking-[0.32em] text-white text-[11px] sm:text-xs md:text-sm uppercase drop-shadow-[0_0_14px_rgba(255,255,255,0.25)] mb-1.5">
            THE NEXT HORIZON IS NEAR
          </h2>

          {/* Subtitle with Horizontal Accents */}
          <div className="flex items-center justify-center gap-3 text-[#94a3b8] text-[10px] sm:text-[11px] font-light tracking-wide">
            <span className="w-5 sm:w-7 h-[1px] bg-[#00f5ff]/60 inline-block" />
            <p>Something is about to take flight.</p>
            <span className="w-5 sm:w-7 h-[1px] bg-[#00f5ff]/60 inline-block" />
          </div>
        </div>

        {/* Live Countdown Display */}
        {timeLeft.isLive ? (
          <div className="inline-flex items-center justify-center gap-4 px-8 sm:px-12 py-5 rounded-sm border border-[#00f5ff] bg-[#071830]/70 backdrop-blur-md shadow-[0_0_40px_rgba(0,245,255,0.4)] my-4">
            <span className="w-3 h-3 rounded-full bg-[#00f5ff] animate-ping" />
            <span className="text-2xl sm:text-4xl font-bold tracking-[0.26em] text-white drop-shadow-[0_0_25px_#00f5ff]">
              WE ARE LIVE
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center my-1 sm:my-2">
            {/* Number Digits */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5 font-sans">
              {[
                { val: timeLeft.days, lbl: "DAYS" },
                { val: timeLeft.hours, lbl: "HOURS" },
                { val: timeLeft.minutes, lbl: "MINUTES" },
                { val: timeLeft.seconds, lbl: "SECONDS" },
              ].map((unit, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center min-w-[52px] sm:min-w-[68px] md:min-w-[80px]">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-light text-[#00f5ff] tabular-nums tracking-tight drop-shadow-[0_0_20px_rgba(0,245,255,0.7)] drop-shadow-[0_0_35px_rgba(0,245,255,0.3)]">
                      {unit.val}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.26em] text-[#e2e8f0] uppercase mt-1 select-none">
                      {unit.lbl}
                    </span>
                  </div>

                  {idx < 3 && (
                    <div className="flex flex-col gap-2 pb-3.5 sm:pb-4 select-none opacity-85">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#00f5ff]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#00f5ff]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Bottom Cyan Notch Accent */}
            <div className="w-8 h-[1.5px] bg-[#00f5ff] my-3 shadow-[0_0_8px_#00f5ff]" />

            {/* Sub-label */}
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.26em] text-[#cbd5e1] uppercase select-none">
              AUTONOMOUS HIGH-ALTITUDE PLATFORM SYSTEMS
            </p>
          </div>
        )}
      </main>

      {/* ============================================================
          BOTTOM FOOTER: Globe Icon & Domain Link
          ============================================================ */}
      <footer className="relative z-20 w-full flex flex-col items-center justify-center pb-5 sm:pb-6 select-none">
        <a
          href="https://levitatedynamics.in"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-1.5 cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          {/* Glowing Cyan Wireframe Globe Icon */}
          <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[#00f5ff] drop-shadow-[0_0_8px_#00f5ff] group-hover:drop-shadow-[0_0_14px_#00f5ff]">
            <svg
              className="w-full h-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          {/* Domain text */}
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-[#94a3b8] group-hover:text-[#00f5ff] transition-colors lowercase">
            levitatedynamics.in
          </span>
        </a>
      </footer>
    </div>
  );
}
