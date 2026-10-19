"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { PRICING_PACKAGES } from "@/lib/data";

export default function PricingPackagesSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-[#0A1917] text-white py-24 relative overflow-hidden border-b border-[#1E443E]">
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#163832]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A467] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A467]" />
            Transparent Engagements
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Check Out Our Scalable <br />
            <span className="text-[#C5A467] italic">Pricing Packages.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light">
            Predictable retainer packages and milestone-based representation structured for total clarity and ROI.
          </p>

          {/* Billing Toggle Switch */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-xs uppercase tracking-wider font-semibold ${!isAnnual ? "text-[#C5A467]" : "text-gray-400"}`}>
              Monthly Retainer
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-[#15342F] border border-[#C5A467]/40 p-1 flex items-center transition-colors focus:outline-none"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-5 h-5 rounded-full bg-[#C5A467] shadow-md transform transition-transform duration-300 ${
                  isAnnual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-xs uppercase tracking-wider font-semibold ${isAnnual ? "text-[#C5A467]" : "text-gray-400"}`}>
                Annual Partnership
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#C5A467]/20 border border-[#C5A467]/40 text-[10px] font-bold text-[#C5A467]">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid (Strict layout matching Section 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const price = isAnnual ? pkg.priceAnnual : pkg.priceMonthly;

            return (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-[#102723] border-2 border-[#C5A467] shadow-2xl lg:-translate-y-3 ring-1 ring-[#C5A467]/40"
                    : "bg-[#0E201D] border border-[#1E443E] shadow-xl hover:border-[#C5A467]/40"
                }`}
              >
                {/* Popular Banner */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C5A467] text-[#0A1917] text-[11px] uppercase tracking-widest font-extrabold shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Package Title & Description */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed min-h-[36px]">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pt-2 pb-4 border-b border-[#1C3B34]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                        ${price}
                      </span>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        / month
                      </span>
                    </div>
                    <p className="text-[11px] text-[#C5A467] mt-1 font-medium">
                      Or {pkg.caseFee} per project matter
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 pt-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-gray-300">
                      Included Privileges:
                    </p>
                    <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <span className="w-4 h-4 rounded-full bg-[#C5A467]/20 text-[#C5A467] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#C5A467]" />
                          </span>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action button */}
                <div className="pt-8">
                  <Link
                    href={`/contact?plan=${encodeURIComponent(pkg.name)}`}
                    className={`w-full py-3.5 rounded-full text-xs uppercase font-bold tracking-wider text-center transition-all shadow-md flex items-center justify-center gap-2 group ${
                      pkg.popular
                        ? "bg-[#C5A467] text-[#0A1917] hover:bg-[#D5B87A] shadow-goldglow"
                        : "bg-[#163630] text-white hover:bg-[#C5A467] hover:text-[#0A1917] border border-[#1E443E]"
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
