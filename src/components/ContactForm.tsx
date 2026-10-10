"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
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
