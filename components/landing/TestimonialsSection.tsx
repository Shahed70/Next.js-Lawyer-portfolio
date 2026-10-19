"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1
    );
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-white py-24 border-b border-[#EAE3D5] text-[#1E2927] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <div className="space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest text-[#8D6F39] font-bold">
            Client Voices & Endorsements
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0E1F1C]">
            Customer Testimonials
          </h2>
        </div>

        {/* 5 Gold Stars Graphic */}
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-[#C5A467] fill-[#C5A467]"
            />
          ))}
        </div>

        {/* Main Testimonial Carousel Card */}
        <div className="relative px-6 sm:px-16 py-4">
          <Quote className="w-12 h-12 text-[#C5A467]/20 mx-auto mb-4" />

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-[#172E2A] leading-relaxed italic mb-8 min-h-[140px] flex items-center justify-center">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author info with avatar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C5A467] shadow-md">
              <Image
                src={current.avatar}
                alt={current.author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-[#0E1F1C]">
                {current.author}
              </h4>
              <p className="text-xs text-[#8D6F39] font-semibold">
                {current.title} • {current.company}
              </p>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF5EC] text-[10px] font-bold text-[#8D6F39] mt-1 border border-[#EBE1CF]">
                Case: {current.caseType}
              </span>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0E1F1C] hover:bg-[#1E3B35] text-[#C5A467] hover:text-white flex items-center justify-center shadow-lg transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0E1F1C] hover:bg-[#1E3B35] text-[#C5A467] hover:text-white flex items-center justify-center shadow-lg transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#C5A467]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
