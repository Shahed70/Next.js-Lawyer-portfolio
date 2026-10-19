import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_CASES } from "@/lib/data";

export default function ProvenExcellenceSection() {
  return (
    <section className="bg-[#FAF8F4] py-24 border-b border-[#EAE3D5] text-[#1E2927]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8D6F39] font-bold">
            Representative Matters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1F1C]">
            Proven Legal Excellence in Every Case.
          </h2>
          <p className="text-sm sm:text-base text-[#576B66] font-light">
            Selected precedent-setting transactions, trials, and risk-mitigation strategies executed with precision.
          </p>
        </div>

        {/* 3 Column Grid (Strict layout matching Section 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PORTFOLIO_CASES.map((item) => {
            const isFeatured = item.featured;

            if (isFeatured) {
              // Center Featured Card with Dark Glassmorphism Styling
              return (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden bg-[#0E1F1C] text-white border-2 border-[#C5A467] shadow-2xl flex flex-col justify-between relative group transform md:-translate-y-2"
                >
                  {/* Background Image with Dark Vignette */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F1C] via-[#0E1F1C]/70 to-transparent" />
                    <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#C5A467] text-[#0A1917] font-bold text-xs uppercase tracking-wider shadow-md">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-[#C5A467] font-bold">
                        <Trophy className="w-4 h-4 text-[#C5A467]" />
                        <span>{item.result}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C5A467] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1E443E] space-y-4">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A467]" />
                        <span>Corporate Restructuring Syndicate</span>
                      </div>
                      <Link
                        href="/contact"
                        className="w-full block text-center py-3 rounded-full text-xs uppercase font-bold tracking-wider text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all shadow-goldglow"
                      >
                        Request Case Briefing
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Card (Left and Right cards)
            return (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-white text-[#1E2927] border border-[#E5DFD1] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#0E1F1C]/80 text-[#C5A467] font-bold text-xs uppercase tracking-wider backdrop-blur-sm border border-[#C5A467]/30">
                    {item.tag}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#8D6F39]">
                      Result: {item.result}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1F1C] group-hover:text-[#8D6F39] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526561] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EAE0] flex items-center justify-between text-xs font-medium">
                    <span className="text-[#0E1F1C] font-semibold">{item.category}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[#0E1F1C] font-bold hover:text-[#C5A467] transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A467]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
