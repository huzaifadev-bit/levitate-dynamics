import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-[85vh] bg-[#131316] flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20">
        {/* Background Radar grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none"></div>

        {/* Circular Radar Scan Target */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] aspect-square rounded-full border border-[#00dbe9]/15 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[300px] aspect-square rounded-full border border-[#00dbe9]/10 pointer-events-none"></div>

        <div className="relative z-10 max-w-lg text-center p-6 sm:p-10 glass-panel border border-[#00dbe9]/30 rounded-sm shadow-[0_0_40px_rgba(0,219,233,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-[10px] tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
            ALERT // TELEMETRY ANOMALY 404
          </div>

          <h1 className="text-4xl sm:text-6xl font-headline-md font-bold text-white uppercase tracking-wider mb-3">
            SIGNAL LOST
          </h1>

          <p className="text-xs sm:text-sm font-mono text-[#00dbe9] tracking-[0.2em] uppercase mb-6">
            TARGET COORDINATES NOT FOUND IN STRATOSPHERIC REGISTRY
          </p>

          <p className="text-xs sm:text-sm text-[#849495] leading-relaxed mb-8">
            The aerospace vector or document you requested does not exist or has been shifted outside the active orbital telemetry grid.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-[#00dbe9] hover:bg-[#7df4ff] text-black font-bold text-xs font-label-caps tracking-widest uppercase rounded-sm shadow-[0_0_15px_rgba(0,219,233,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">home</span>
              <span>RETURN TO BASE</span>
            </Link>
            <Link
              href="/haps"
              className="px-6 py-3 border border-white/20 hover:border-[#00dbe9] text-white hover:text-[#00dbe9] font-semibold text-xs font-label-caps tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">flight</span>
              <span>EXPLORE HAPS</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
