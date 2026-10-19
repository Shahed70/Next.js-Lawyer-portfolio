"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Shield, Award, ArrowRight, X, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#091715] pt-28 pb-16 overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#1B3F38]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#C5A467]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle court/scales grid lines watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E423B_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B26] border border-[#C5A467]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A467] shadow-sm">
              <Shield className="w-3.5 h-3.5 text-[#C5A467]" />
              <span>Compassionate & Strategic Advocacy</span>
            </div>

            {/* Main Headline replicating image_0.png strictly */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Compassionate & <br />
              <span className="text-[#C5A467] italic font-serif">Expert Justice.</span>
            </h1>

            {/* Subtitle paragraph */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              We provide comprehensive legal solutions and decisive trial representation tailored to your personal and professional needs, protecting your rights and enterprise value.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all duration-300 shadow-goldglow hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Video button with glowing ring */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-full text-sm font-medium text-gray-200 hover:text-white bg-[#102723] hover:bg-[#163630] border border-[#1E443E] transition-all group"
              >
                <span className="w-9 h-9 rounded-full bg-[#C5A467]/20 flex items-center justify-center text-[#C5A467] group-hover:bg-[#C5A467] group-hover:text-[#0A1917] transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                <span className="tracking-wide">Watch Firm Overview</span>
              </button>
            </div>

            {/* Key trust bullets */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A467]" />
                <span>Over 1,500+ Cases Resolved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A467]" />
                <span>99% Courtroom Victory Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A467]" />
                <span>Confidential Attorney Advisory</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Image replicating image_0.png */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Outer decorative gold ring */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A467]/30 bg-gradient-to-b from-[#16332E] to-[#0A1917]">
              {/* Main Attorney Image */}
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="Lead Legal Counsel - Elena Vance"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 420px"
              />

              {/* Gradient overlay at bottom for card blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1917] via-transparent to-transparent opacity-80" />

              {/* Floating badge inside the image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E201D]/90 backdrop-blur-md border border-[#C5A467]/40 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A467]/20 border border-[#C5A467]/40 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#C5A467]" />
                </div>
                <div>
                  <h4 className="font-serif text-white font-bold text-base leading-tight">
                    Elena Vance, Esq.
                  </h4>
                  <p className="text-xs text-[#C5A467] font-medium">
                    Managing Partner & Lead Trial Advocate
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Harvard Law Alumni • Top 1% Trial Lawyers
                  </p>
                </div>
              </div>
            </div>

            {/* Floating side stat card */}
            <div className="hidden sm:flex absolute -bottom-4 -left-6 bg-[#122A25] border border-[#C5A467]/30 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A467] flex items-center justify-center text-[#0A1917] font-bold">
                25+
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-400">Experience</p>
                <p className="text-sm font-bold text-white">Years of Legal Mastery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#0E201D] border border-[#C5A467]/40 rounded-2xl max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-[#163630]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#C5A467]" />
                <h3 className="font-serif text-2xl font-bold text-white">
                  Clario Legal Advisory Overview
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Discover our methodology: rigorous empirical case preparation, cross-disciplinary strategy, and relentless courtroom advocacy.
              </p>
              <div className="aspect-video w-full rounded-xl bg-black/60 border border-[#1E443E] flex flex-col items-center justify-center p-8 text-center">
                <Play className="w-16 h-16 text-[#C5A467] mb-3 opacity-80" />
                <p className="text-sm text-gray-300 font-medium">
                  Watch Attorney Briefing & Case Retrospectives
                </p>
                <span className="text-xs text-[#C5A467] mt-1">Runtime: 3 minutes 45 seconds</span>
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="px-6 py-2 rounded-full text-xs uppercase font-bold text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A]"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
