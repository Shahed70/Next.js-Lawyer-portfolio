"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle, Scale } from "lucide-react";
import { LEGAL_FIELDS } from "@/lib/data";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<string>("family-law");

  return (
    <section id="services" className="bg-[#0A1917] text-white py-24 relative overflow-hidden">
      {/* Subtle background scales watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <Scale className="w-[600px] h-[600px] text-[#C5A467]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C5A467] font-semibold flex items-center gap-2">
              <span className="w-6 h-px bg-[#C5A467]" />
              Core Competencies
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Our Proficiency in Diverse <br />
              <span className="text-[#C5A467] italic">Legal Fields.</span>
            </h2>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-[#C5A467] border border-[#C5A467] hover:bg-[#C5A467] hover:text-[#0A1917] transition-all duration-300 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Large Typography Interactive List (Strict replicate of section 3) */}
        <div className="border-t border-[#1C3A33] divide-y divide-[#1C3A33]">
          {LEGAL_FIELDS.map((field, idx) => {
            const isActive = activeId === field.id;

            return (
              <div
                key={field.id}
                onClick={() => setActiveId(field.id)}
                className={`py-8 sm:py-10 transition-all duration-300 cursor-pointer group ${
                  isActive ? "bg-[#102723]/60 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl" : "hover:bg-[#102723]/30"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Title & Index */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8">
                    <span className="font-serif text-sm sm:text-base font-bold text-[#C5A467]/60 pt-1 sm:pt-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors ${
                          isActive
                            ? "text-[#C5A467]"
                            : "text-gray-200 group-hover:text-white"
                        }`}
                      >
                        {field.title}
                      </h3>
                      {!isActive && (
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl line-clamp-1">
                          {field.shortDesc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right trigger / status */}
                  <div className="hidden lg:flex items-center gap-4">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                      {field.badge}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                        isActive
                          ? "bg-[#C5A467] border-[#C5A467] text-[#0A1917]"
                          : "border-[#1E443E] text-gray-400 group-hover:border-[#C5A467] group-hover:text-[#C5A467]"
                      }`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Details when Active (Replicates active state shown in image_0.png) */}
                {isActive && (
                  <div className="mt-8 pt-6 border-t border-[#1C3A33]/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                    {/* Thumbnail Image */}
                    <div className="lg:col-span-4 relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-[#C5A467]/30">
                      <Image
                        src={field.image}
                        alt={field.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Description and Key Practice Highlights */}
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                        {field.shortDesc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
                        {field.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C5A467] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="lg:col-span-3 flex lg:justify-end">
                      <Link
                        href={`/services#${field.id}`}
                        className="px-6 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all shadow-goldglow flex items-center gap-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
