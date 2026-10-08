"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const platformParam = searchParams.get("platform");
  const deptParam = searchParams.get("dept");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Defense & Strategic Security",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (platformParam) {
      setFormData((prev) => ({
        ...prev,
        interest: "Flagship HAPS Platform Deployment",
        message: prev.message || "Inquiry regarding the Levitate Dynamics Flagship HAPS platform deployment and operational envelope.",
      }));
    } else if (deptParam) {
      const depts: Record<string, string> = {
        defense: "Defense & Strategic Border Surveillance",
        telecom: "Airborne Telecommunications & 5G Relay",
        maritime: "Maritime Domain & EEZ Awareness",
        careers: "Engineering Careers & Operational Roles",
        tech: "Technical R&D & Payload Integration",
        investors: "Investor Relations & Capital Allocation",
      };
      setFormData((prev) => ({
        ...prev,
        interest: depts[deptParam.toLowerCase()] || "Defense & Strategic Border Surveillance",
      }));
    }
  }, [platformParam, deptParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please complete all required fields.");
      return;
    }
    setError("");
    setSubmitting(true);

    setTimeout(() => {
      const ref = `LD-TX-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(ref);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#111115] border border-white/10 rounded-sm p-6 sm:p-10">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <span className="material-symbols-outlined text-4xl text-[#00dbe9]">check_circle</span>
          <h2 className="text-2xl font-bold font-headline-sm uppercase text-white">
            THANK YOU
          </h2>
          <p className="text-slate-300 font-body-md text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Your inquiry has been received. A representative from Levitate Dynamics will be in touch shortly.
          </p>
          <div className="p-4 bg-white/5 border border-white/10 rounded-sm max-w-xs mx-auto font-mono text-sm space-y-1">
            <div className="text-slate-400 text-xs uppercase">Reference Code</div>
            <div className="text-[#00dbe9] font-bold text-base">{ticketId}</div>
          </div>
          <p className="text-[11px] font-mono text-slate-500">
            [Demonstration System // Synthetic Confirmation Receipt]
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                organization: "",
                interest: "Defense & Strategic Security",
                message: "",
              });
            }}
            className="pt-4 text-xs font-mono text-slate-400 hover:text-white uppercase tracking-wider"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono rounded-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dr. Rajesh / Capt. Sharma"
                className="w-full bg-[#18181e] border border-white/15 px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="official@agency.gov / partner@tech.com"
                className="w-full bg-[#18181e] border border-white/15 px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Organization / Agency
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Ministry of Defence / Telecom Consortium"
                className="w-full bg-[#18181e] border border-white/15 px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Interest
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-[#18181e] border border-white/15 px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-white"
              >
                <option value="Flagship HAPS Platform Deployment">Flagship HAPS Platform Deployment</option>
                <option value="Defense & Strategic Border Surveillance">Defense &amp; Strategic Border Surveillance</option>
                <option value="Airborne Telecommunications & 5G Relay">Airborne Telecommunications &amp; 5G Relay</option>
                <option value="Maritime Domain & EEZ Awareness">Maritime Domain &amp; EEZ Awareness</option>
                <option value="Technical R&D & Payload Integration">Technical R&amp;D &amp; Payload Integration</option>
                <option value="Investor Relations & Capital Allocation">Investor Relations &amp; Capital Allocation</option>
                <option value="Engineering Careers & Operational Roles">Careers / Engineering Roles</option>
                <option value="Other">Other Strategic Requirement</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
              Message *
            </label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your mission, technology requirement, or partnership..."
              className="w-full bg-[#18181e] border border-white/15 px-4 py-3 rounded-sm text-sm text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary"
            >
              {submitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-24 sm:pt-28 pb-20 bg-[#0b0b0e] text-white min-h-screen">
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto mb-12">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#00dbe9] uppercase font-semibold block mb-3">
              CONNECT WITH US
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-headline-md leading-[1.08] mb-4">
              CONTACT LEVITATE DYNAMICS
            </h1>
            <p className="text-slate-300 font-body-md text-base sm:text-lg leading-relaxed font-light">
              Tell us about your mission, technology requirement, or partnership.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading form...</div>}>
                <ContactFormInner />
              </Suspense>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-[#111115] border border-white/10 rounded-sm space-y-4">
                <span className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider block">
                  HEADQUARTERS
                </span>
                <h3 className="text-lg font-bold font-heading uppercase text-white">
                  NAGPUR OPERATIONS COMMAND
                </h3>
                <address className="not-italic text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  Flat No. 301, Borkute Lay Out,<br />
                  Narendra Nagar, Nagpur,<br />
                  Maharashtra 440015, India.
                </address>
                <div className="pt-2 text-xs font-mono text-zinc-500">
                  CIN: U30305MH2025PTC447508
                </div>
                <div className="pt-2">
                  <a
                    href="https://share.google/WappuysEw0qQjJH6W"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-300 hover:text-white underline inline-flex items-center gap-1"
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </div>

              <div className="p-8 bg-[#111115] border border-white/10 rounded-sm space-y-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  OFFICIAL CHANNELS
                </span>
                <div className="text-xs text-zinc-300 space-y-3 font-sans">
                  <div>
                    <span className="text-zinc-500 block text-xs font-mono uppercase mb-1">Mission &amp; Defense Inquiries:</span>
                    <a
                      href="mailto:levitateworks.office@gmail.com"
                      className="text-[#00f5ff] font-mono hover:underline text-sm"
                    >
                      levitateworks.office@gmail.com
                    </a>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.tofler.in/levitate-dynamics-private-limited/company/U30305MH2025PTC447508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-white underline"
                    >
                      Corporate Record (Tofler) ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
