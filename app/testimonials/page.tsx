"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight, CheckCircle2, ShieldCheck, Filter } from "lucide-react";

interface TestimonialItem {
  id: string;
  category: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  caseResult: string;
}

const FULL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    category: "Corporate & M&A",
    quote: "Clario's legal team provided unparalleled guidance during our international corporate restructuring. Their attention to detail, proactive communication, and strategic mastery made all the difference in preserving shareholder equity.",
    author: "David Harrison",
    title: "Chief Executive Officer",
    company: "Apex Global Holdings",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseResult: "$140M Acquisition Closed",
  },
  {
    id: "test-2",
    category: "Litigation & Trial",
    quote: "When facing a high-stakes patent dispute against an aggressive conglomerate, Marcus Sterling and Elena Vance dismantled the opposition's claims step-by-step. They secured a complete dismissal with prejudice that preserved our core market position.",
    author: "Sarah Montgomery",
    title: "Founder & Chief Technology Officer",
    company: "Aetheria BioSystems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseResult: "Full Trial Dismissal & $48M Preserved",
  },
  {
    id: "test-3",
    category: "Private Wealth",
    quote: "The level of empathy combined with razor-sharp legal acumen was unlike any firm I've ever retained. They resolved our complex family estate settlement amicably, saving years of court delays and protecting generational trust assets.",
    author: "Robert Kowalski",
    title: "Private Client & Trustee",
    company: "Kowalski Heritage Trust",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseResult: "Private Trust Successfully Restructured",
  },
  {
    id: "test-4",
    category: "Product & Digital",
    quote: "Working with this team on our enterprise digital platform was extraordinary. Their architectural clarity, flawless Next.js implementation, and pixel-perfect design standards elevated our company to a tier-one market leader.",
    author: "Elena Rostova",
    title: "VP of Product Engineering",
    company: "Vanguard FinTech Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseResult: "Enterprise SaaS Launched in 6 Weeks",
  },
  {
    id: "test-5",
    category: "Corporate & M&A",
    quote: "In cross-border negotiations where regulatory scrutiny is unforgiving, Clario delivered calm, unflinching, and commercially brilliant counsel. They are the only attorneys our executive board will trust for high-stakes governance.",
    author: "Julian Thorne",
    title: "Managing Director",
    company: "Crestview Capital Partners",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseResult: "Multi-Jurisdictional Regulatory Clearance",
  },
  {
    id: "test-6",
    category: "Litigation & Trial",
    quote: "In the courtroom, Elena Vance is truly formidable. Her command of statutory nuances and charismatic jury presence turned what seemed like an impossible commercial breach claim into a unanimous jury verdict in our favor.",
    author: "Amara Patel",
    title: "General Counsel",
    company: "Symphony Logistics Network",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    caseResult: "$26M Jury Award Secured",
  },
];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Corporate & M&A", "Litigation & Trial", "Private Wealth", "Product & Digital"];

  const filtered = selectedCategory === "All"
    ? FULL_TESTIMONIALS
    : FULL_TESTIMONIALS.filter((t) => t.category === selectedCategory);

  return (
    <main className="min-h-screen pt-24 bg-[#FAF8F4] text-[#1E2927]">
      {/* Testimonials Header */}
      <section className="bg-[#0A1917] text-white py-20 border-b border-[#1E443E] relative overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#163832]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B26] border border-[#C5A467]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A467]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A467]" />
            Verified Client Endorsements
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Customer Testimonials
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Read first-hand accounts from chief executives, private trustees, and technology innovators who placed their critical matters in our hands.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-1.5 bg-[#122A25] px-4 py-2 rounded-full border border-[#C5A467]/30">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#C5A467] fill-[#C5A467]" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">5.0 / 5.0</span>
              <span className="text-gray-400">Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A467]" />
              <span>100% Client Retention Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A467]" />
              <span>Independent Case Verifications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#EAE3D5] sticky top-20 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-gray-400 mr-2 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-[#0E1F1C] text-[#C5A467] shadow-sm"
                  : "bg-[#F5F2EA] text-[#526561] hover:bg-[#EAE4D2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Stacked Testimonial Cards Replicating Section 7 of image_0.png */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DFD1] shadow-lg hover:shadow-2xl transition-all duration-300 relative text-center group"
            >
              {/* Top Index & Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-[#8D6F39]">
                  Review 0{index + 1}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF5EC] text-[11px] font-bold uppercase tracking-wider text-[#8D6F39] border border-[#EBE1CF]">
                  {item.category}
                </span>
              </div>

              {/* 5 Gold Stars Graphic (Strict replicate of section 7) */}
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#C5A467] fill-[#C5A467]"
                  />
                ))}
              </div>

              {/* Large Serif Testimonial Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl text-[#172E2A] leading-relaxed italic mb-8 max-w-2xl mx-auto">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author Photo in Gold Ring + Name & Title */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-[#F0EBE0]">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C5A467] shadow-md group-hover:scale-105 transition-transform">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-[#0E1F1C]">
                    {item.author}
                  </h3>
                  <p className="text-xs text-[#8D6F39] font-semibold">
                    {item.title} • {item.company}
                  </p>
                  <p className="text-[11px] text-[#526561] mt-0.5 font-medium">
                    Verified Outcome: {item.caseResult}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#0E1F1C] text-white py-16 text-center border-t border-[#1E443E]">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="font-serif text-3xl font-bold">
            Experience the Clario Standard
          </h2>
          <p className="text-sm text-gray-300 font-light">
            Join the hundreds of leaders who depend on our counsel for their most defining opportunities and risks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase font-bold tracking-wider text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all shadow-goldglow"
            >
              <span>Schedule Case Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
