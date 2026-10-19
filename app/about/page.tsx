import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  Users,
  Shield,
  MapPin,
  ArrowRight,
  GraduationCap,
  Scale,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { STATS_GRID, OVERLAPPING_CARDS } from "@/lib/data";

export const metadata = {
  title: "About Us & Personal Bio | Clario Legal Services",
  description: "Learn about our extensive legal career, courtroom track record, and unwavering dedication to client success.",
};

export default function AboutPage() {
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

  const extendedGallery = [
    ...OVERLAPPING_CARDS,
    {
      title: "Arbitration & Cross-Border Commercial Settlement Conferences",
      category: "Global Dispute Resolution",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
      desc: "Representing Fortune 500 multinationals and visionary founders across Geneva, London, and New York arbitration venues.",
      author: "Elena Vance, Lead Arbitrator",
    },
    {
      title: "Constitutional Advocacy & High-Profile Regulatory Hearings",
      category: "Federal Appellate Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80",
      desc: "Delivering decisive oral arguments before appellate tribunals, shaping statutory precedents in digital commerce and privacy rights.",
      author: "Marcus Sterling & Senior Associates",
    },
  ];

  return (
    <main className="min-h-screen pt-24">
      {/* Top Hero Banner */}
      <section className="bg-[#0A1917] py-20 border-b border-[#1E443E] relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#C5A467]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B26] border border-[#C5A467]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A467] mb-4">
            <Scale className="w-3.5 h-3.5" />
            Personal Bio & Firm Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Advocacy Rooted in <br />
            <span className="text-[#C5A467] italic">Rigor & Compassion.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Founded by Elena Vance, Esq., Clario represents a modern convergence of elite courtroom mastery, commercial sophistication, and personalized executive counsel.
          </p>
        </div>
      </section>

      {/* Primary Section Replicating the 'Overlapping Image Blocks' & 2x2 Grid from Section 2 */}
      <section className="bg-[#FAF8F4] text-[#1E2927] py-24 border-b border-[#EAE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top 2x2 Grid + Narrative Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            {/* 2x2 Grid Blocks */}
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
                      Metric
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

            {/* Narrative Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#132A26] flex items-center justify-center shadow-md">
                <MapPin className="w-5 h-5 text-[#C5A467]" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0E1F1C] font-semibold leading-snug tracking-tight">
                An experienced legal professional who delivers strategic, proactive legal solutions to individuals and businesses to protect their rights.
              </h2>

              <p className="text-base text-[#4A5D58] leading-relaxed font-light">
                Over the past 25 years, our practice has represented prominent corporations, institutional investors, and individual clients in matters where freedom, reputation, and immense financial stakes intersect. We operate with a boutique ethos—every client engages directly with senior partners, ensuring uncompromising focus and relentless strategic execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-semibold text-[#0E1F1C]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8D6F39]" />
                  <span>Admitted to the Supreme Court Bar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8D6F39]" />
                  <span>Chambers USA Band 1 Ranked Counsel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8D6F39]" />
                  <span>Over \$850M In Verdicts & Settlements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8D6F39]" />
                  <span>National Trial Lawyers Top 100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Visual Cards Gallery (Section 2 layout expanded) */}
          <div className="space-y-4 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#8D6F39] font-bold">
              Practice In Action
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#0E1F1C]">
              Strategic Representation Across Core Arenas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {extendedGallery.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D4] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
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

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1F1C] group-hover:text-[#8D6F39] transition-colors leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-sm text-[#4E615C] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0EBE0] flex items-center justify-between text-xs font-medium text-[#7C8F8A]">
                    <span className="text-[#0E1F1C] font-semibold">{card.author}</span>
                    <span className="text-[#8D6F39] font-bold">Confirmed Case Matter</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Education Timeline */}
      <section className="bg-white py-24 border-b border-[#EAE3D5] text-[#1E2927]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8D6F39] font-bold">
              Pedigree & Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0E1F1C]">
              A Proven Career of Legal Distinction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E5DFD1] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F0E8D8] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#8D6F39]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#0E1F1C]">
                Harvard Law School
              </h4>
              <p className="text-xs font-semibold text-[#8D6F39]">
                Juris Doctor (J.D.), Magna Cum Laude
              </p>
              <p className="text-xs text-[#526561] leading-relaxed">
                Editor of the Harvard Law Review, specializing in antitrust doctrine and constitutional litigation frameworks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E5DFD1] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0EB] flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#3E6554]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#0E1F1C]">
                Federal Judicial Clerkship
              </h4>
              <p className="text-xs font-semibold text-[#3E6554]">
                U.S. Court of Appeals for the Second Circuit
              </p>
              <p className="text-xs text-[#526561] leading-relaxed">
                Authored bench memoranda and assisted in drafting precedent-setting opinions regarding securities fraud and civil rights enforcement.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F4] border border-[#E5DFD1] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F7ECE6] flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-[#97584A]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#0E1F1C]">
                Founder & Lead Counsel
              </h4>
              <p className="text-xs font-semibold text-[#97584A]">
                Clario Legal Advisory (2012 – Present)
              </p>
              <p className="text-xs text-[#526561] leading-relaxed">
                Built an internationally recognized boutique practice known for exceptional trial win-rates and premier corporate advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0A1917] py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">
            Ready to Discuss Your Legal Strategy?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Schedule a direct consultation with Elena Vance and the senior leadership team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase font-bold tracking-widest text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all shadow-goldglow"
            >
              <span>Schedule Initial Case Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
