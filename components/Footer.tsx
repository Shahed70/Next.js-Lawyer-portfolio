"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Scale, Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { NAV_LINKS, LEGAL_FIELDS } from "@/lib/data";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setIsSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#081513] text-[#A2B5B0] border-t border-[#1C3B34] relative overflow-hidden pt-16 pb-12">
      {/* Huge subtle Clario watermark in background */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 opacity-[0.04]">
        <span className="font-serif text-[18vw] leading-none font-bold text-white tracking-tight">
          Clario
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout Box */}
        <div className="bg-gradient-to-r from-[#122A25] to-[#0E201D] border border-[#C5A467]/30 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A467] font-semibold flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A467]" />
              Trusted Legal Partnership
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
              Have You Any Problems? Working With Us.
            </h3>
            <p className="text-sm text-gray-400 max-w-xl">
              Get direct access to seasoned legal counsel dedicated to protecting your legacy, rights, and enterprise value.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all duration-300 shadow-goldglow whitespace-nowrap flex items-center gap-2 group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E2CA93] to-[#B68C48] p-0.5 flex items-center justify-center shadow-goldglow">
                <div className="w-full h-full bg-[#0E1F1C] rounded-full flex items-center justify-center">
                  <Scale className="w-4 h-4 text-[#C5A467]" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                Clario
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              A premier legal practice and personal advisory portfolio committed to delivering meticulous strategy, decisive advocacy, and uncompromising integrity.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-gray-300">Accepting Select Client Matters</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold tracking-wide border-b border-[#C5A467]/20 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C5A467] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C5A467] text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold tracking-wide border-b border-[#C5A467]/20 pb-2">
              Practice Fields
            </h4>
            <ul className="space-y-2.5 text-sm">
              {LEGAL_FIELDS.map((field) => (
                <li key={field.id}>
                  <Link
                    href="/services"
                    className="hover:text-[#C5A467] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C5A467] text-xs">›</span>
                    <span>{field.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold tracking-wide border-b border-[#C5A467]/20 pb-2">
              Legal Insights Dispatch
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe to our monthly brief covering legislative shifts, case precedents, and strategic wealth protections.
            </p>

            {isSubscribed ? (
              <div className="p-3 rounded-lg bg-[#122A25] border border-[#C5A467]/40 text-xs text-[#C5A467] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription confirmed. Welcome.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#112723] border border-[#1E443E] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A467] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#C5A467] hover:bg-[#D5B87A] text-[#0A1917] rounded-md transition-colors flex items-center justify-center font-bold"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A467]" />
                <span>550 Madison Avenue, Suite 2400, New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A467]" />
                <span>+1 (800) 542-7460</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A467]" />
                <span>contact@clariolegal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#163630] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Clario Legal & Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#C5A467] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C5A467] transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-[#C5A467] transition-colors">
              Attorney Advertising Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
