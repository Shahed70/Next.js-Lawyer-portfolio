"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Lock,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Corporate and Business Law",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen pt-24 bg-[#0A1917] text-white">
      {/* Top Page Header */}
      <section className="py-16 text-center border-b border-[#1E443E] relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B26] border border-[#C5A467]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A467]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A467]" />
            Direct Attorney Advisory
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Confidential Consultation & <br />
            <span className="text-[#C5A467] italic font-serif">Case Evaluation.</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Reach out directly to schedule a private advisory session with our senior partners. We guarantee absolute privilege and rapid response.
          </p>
        </div>
      </section>

      {/* Main Precise Replicate of Section 8: Overlay Form on Top of Desk Background */}
      <section className="relative min-h-[720px] flex items-center py-20 overflow-hidden">
        {/* Background Desk Image (Strict match to Section 8) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1800&q=85"
            alt="Lawyer Desk with Documents and Telephone"
            fill
            className="object-cover object-center filter brightness-[0.4] contrast-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1917]/95 via-[#0A1917]/70 to-[#0A1917]/95" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Office Details and Assurances */}
            <div className="lg:col-span-6 space-y-8 text-white">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C5A467] font-semibold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C5A467]" />
                  Privileged Communications
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Protecting What Matters Most.
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  Whether you require defense in high-stakes litigation, guidance through an enterprise acquisition, or bespoke portfolio consultation, our dedicated partners stand ready.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#0E201D]/80 border border-[#1E443E] backdrop-blur-md space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A467]/20 flex items-center justify-center text-[#C5A467]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">Direct Line</h4>
                  <p className="text-xs text-gray-300">+1 (800) 542-7460</p>
                  <p className="text-[11px] text-[#C5A467]">Available 24/7 For Urgent Matters</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0E201D]/80 border border-[#1E443E] backdrop-blur-md space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A467]/20 flex items-center justify-center text-[#C5A467]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">Confidential Email</h4>
                  <p className="text-xs text-gray-300">counsel@clariolegal.com</p>
                  <p className="text-[11px] text-[#C5A467]">PGP Encrypted Channel Ready</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0E201D]/80 border border-[#1E443E] backdrop-blur-md space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A467]/20 flex items-center justify-center text-[#C5A467]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">Executive Chambers</h4>
                  <p className="text-xs text-gray-300">550 Madison Ave, Suite 2400</p>
                  <p className="text-[11px] text-[#C5A467]">New York, NY 10022</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0E201D]/80 border border-[#1E443E] backdrop-blur-md space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#C5A467]/20 flex items-center justify-center text-[#C5A467]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">Consultation Hours</h4>
                  <p className="text-xs text-gray-300">Mon - Fri: 8:00 AM - 7:00 PM EST</p>
                  <p className="text-[11px] text-[#C5A467]">Weekend By Special Appointment</p>
                </div>
              </div>
            </div>

            {/* Right Column: Precise Replicate of Section 8 Overlay Form */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg bg-[#0E201D]/95 backdrop-blur-xl border border-[#C5A467]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8D6F39] via-[#C5A467] to-[#8D6F39]" />

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#C5A467]/20 border border-[#C5A467] flex items-center justify-center mx-auto text-[#C5A467]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Evaluation Request Received
                    </h3>
                    <p className="text-sm text-gray-300 max-w-xs mx-auto">
                      Thank you, <span className="text-[#C5A467] font-semibold">{formData.name}</span>. Your brief has been secured under attorney-client privilege. Elena Vance will review and reach out directly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          serviceType: "Corporate and Business Law",
                          message: "",
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Get A Free Case Evaluation
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Strictly confidential. No consultation fees for initial assessments.
                      </p>
                    </div>

                    {/* Field 1: Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Richard Sterling"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors"
                      />
                    </div>

                    {/* Field 2: Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="richard@sterlingholdings.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors"
                      />
                    </div>

                    {/* Field 3: Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 349-8821"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors"
                      />
                    </div>

                    {/* Category Selector */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                        Area of Representation
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white focus:outline-none focus:border-[#C5A467] transition-colors"
                      >
                        <option value="Corporate and Business Law">Corporate and Business Law</option>
                        <option value="Commercial Litigation & Trial">Commercial Litigation & Trial</option>
                        <option value="Family Law & Private Wealth">Family Law & Private Wealth</option>
                        <option value="Real Estate & Asset Protection">Real Estate & Asset Protection</option>
                        <option value="UI/UX & Frontend Portfolio Consultation">UI/UX & Frontend Portfolio Consultation</option>
                      </select>
                    </div>

                    {/* Field 4: Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                        Case or Project Message *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Describe the key circumstances, counterparties involved, or timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all duration-300 shadow-goldglow flex items-center justify-center gap-2 group disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Privileged Brief...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Evaluation Request</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-[#FAF8F4] text-[#1E2927] border-t border-[#EAE3D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8D6F39] font-bold">
              Consultation FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0E1F1C]">
              What to Expect During Your Evaluation
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is the initial case evaluation completely confidential?",
                a: "Yes. All communications submitted through our portal are protected under the strict ethical doctrine of attorney-client privilege, regardless of whether you formally retain our firm.",
              },
              {
                q: "How quickly will I receive a formal response?",
                a: "A senior partner reviews every submission within 24 business hours. For emergency preliminary injunctions or immediate trial needs, our expedited hotline is monitored 24/7.",
              },
              {
                q: "What documentation should I prepare beforehand?",
                a: "Any relevant contracts, demand letters, corporate filings, or correspondence regarding the dispute will allow our team to provide a far more concrete strategic assessment during the initial session.",
              },
              {
                q: "Do you offer both retainer and contingency fee structures?",
                a: "Yes. Depending on the nature of the matter (commercial litigation, business formation, or transactional advisory), we offer transparent flat-fee retainers, hybrid fee structures, and milestone-based engagements.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5DFD1] shadow-sm space-y-2"
              >
                <h4 className="font-serif text-lg font-bold text-[#0E1F1C]">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-[#526561] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
