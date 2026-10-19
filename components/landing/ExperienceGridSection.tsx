import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Award, Briefcase, Users, Shield } from "lucide-react";
import { STATS_GRID, OVERLAPPING_CARDS } from "@/lib/data";

export default function ExperienceGridSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-5 h-5 text-[#8A7145]" />;
      case "briefcase":
        return <Briefcase className="w-5 h-5 text-[#3E6554]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#97584A]" />;
      case "shield":
        return <Shield className="w-5 h-5 text-[#736948]" />;
      default:
        return <Award className="w-5 h-5 text-[#C5A467]" />;
    }
  };

  return (
    <section className="bg-[#FAF8F4] text-[#1E2927] py-24 border-y border-[#EAE3D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Part: 2x2 colored cards on left + Narrative & quote on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: 2x2 Soft-Colored Grid Blocks */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {STATS_GRID.map((stat) => (
              <div
                key={stat.id}
                className={`${stat.bgClass} p-6 sm:p-7 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between aspect-square group`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl ${stat.badgeClass} flex items-center justify-center`}>
                    {getIcon(stat.icon)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-60">
                    Stat
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight block group-hover:scale-105 transition-transform">
                    {stat.value}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold opacity-85 leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-[11px] opacity-70 line-clamp-2 mt-1">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Key Advocate Statement & Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pin Badge */}
            <div className="w-12 h-12 rounded-full bg-[#132A26] flex items-center justify-center shadow-md">
              <MapPin className="w-5 h-5 text-[#C5A467]" />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0E1F1C] font-semibold leading-snug tracking-tight">
              An experienced legal professional who delivers strategic, proactive legal solutions to individuals and businesses to protect their rights.
            </h2>

            <p className="text-base text-[#4A5D58] leading-relaxed font-light">
              With over two decades of trial expertise and corporate advisory acumen, our practice stands on relentless rigor, ethical mastery, and empathetic client advocacy. From high-stakes commercial transactions to protecting individual civil liberties, we deliver results that endure.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-wider text-white bg-[#0E1F1C] hover:bg-[#1B3A34] transition-all duration-300 shadow-md group"
              >
                <span>Read Full Bio & Story</span>
                <ArrowRight className="w-4 h-4 text-[#C5A467] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Part: Two Overlapping/Side-by-side Large Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {OVERLAPPING_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D4] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0E1F1C]/80 backdrop-blur-md text-[11px] uppercase font-bold tracking-wider text-[#C5A467] border border-[#C5A467]/30">
                  {card.category}
                </div>
              </div>

              {/* Text content below */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1F1C] group-hover:text-[#8D6F39] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#4E615C] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EBE0] flex items-center justify-between text-xs font-medium text-[#7C8F8A]">
                  <span className="text-[#0E1F1C] font-semibold">{card.author}</span>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-[#0E1F1C] font-bold hover:text-[#C5A467] transition-colors"
                  >
                    <span>Learn Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A467]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
