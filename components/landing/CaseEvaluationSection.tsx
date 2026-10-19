"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, ShieldCheck, Clock, Lock } from "lucide-react";

export default function CaseEvaluationSection() {
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
    }, 900);
  };

  return (
    <section className="relative min-h-[680px] flex items-center py-20 overflow-hidden bg-[#0A1917]">
      {/* Background Image: Lawyer's desk with documents, calculator, phone (strictly matching image_0.png) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1800&q=85"
          alt="Attorney Desk & Legal Documentation"
          fill
          className="object-cover object-center filter brightness-[0.45] contrast-110"
          sizes="100vw"
        />
        {/* Dark Teal Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1917]/90 via-[#0A1917]/60 to-[#0A1917]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-6 space-y-6 text-white text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163630]/90 border border-[#C5A467]/40 text-xs font-semibold uppercase tracking-widest text-[#C5A467]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A467]" />
              Confidential Attorney-Client Review
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Get A Free Initial <br />
              <span className="text-[#C5A467] italic font-serif">Case Evaluation.</span>
            </h2>

            <p className="text-base text-gray-300 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Facing a critical business dispute, contract negotiation, or high-asset personal matter? Submit your inquiry for a confidential assessment by our senior partner within 24 business hours.
            </p>

            <div className="space-y-3 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <div className="w-8 h-8 rounded-full bg-[#163630] flex items-center justify-center shrink-0 border border-[#C5A467]/30">
                  <Lock className="w-4 h-4 text-[#C5A467]" />
                </div>
                <span>Strict 100% attorney-client privilege protection</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <div className="w-8 h-8 rounded-full bg-[#163630] flex items-center justify-center shrink-0 border border-[#C5A467]/30">
                  <Clock className="w-4 h-4 text-[#C5A467]" />
                </div>
                <span>Guaranteed callback within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Dark Teal Glassmorphic Form (Replicating Section 8) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-[#0E201D]/95 backdrop-blur-xl border border-[#C5A467]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Subtle top gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8D6F39] via-[#C5A467] to-[#8D6F39]" />

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#C5A467]/20 border border-[#C5A467] flex items-center justify-center mx-auto text-[#C5A467]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-gray-300 max-w-xs mx-auto">
                    Thank you, <span className="text-[#C5A467] font-semibold">{formData.name}</span>. Senior Counsel Elena Vance is reviewing your case details and will contact you promptly at {formData.phone || formData.email}.
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
                      Request A Free Case Evaluation
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      No obligation. All information remains strictly privileged.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jonathan@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Practice Area Selector */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                      Practice Field / Area of Concern
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#132A25] border border-[#1E443E] text-sm text-white focus:outline-none focus:border-[#C5A467] transition-colors"
                    >
                      <option value="Corporate and Business Law">Corporate and Business Law</option>
                      <option value="Family Law & Private Wealth">Family Law & Private Wealth</option>
                      <option value="Civil Litigation & Defense">Civil Litigation & Defense</option>
                      <option value="Real Estate & Estate Planning">Real Estate & Estate Planning</option>
                      <option value="Intellectual Property & Cyber Law">Intellectual Property & Cyber Law</option>
                    </select>
                  </div>

                  {/* Case Details Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-1">
                      Brief Case Summary *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Outline the key facts, counterparty information, or urgency regarding your legal matter..."
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
                        <span>Encrypting & Sending...</span>
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
  );
}
