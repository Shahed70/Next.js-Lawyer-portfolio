import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogInsightsSection() {
  return (
    <section className="bg-[#FAF8F4] py-24 text-[#1E2927]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8D6F39] font-bold flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#8D6F39]" />
              Thought Leadership & Precedents
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1F1C]">
              Proven Legal Excellence in Every Case.
            </h2>
          </div>

          <div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-[#0E1F1C] border border-[#0E1F1C] hover:bg-[#0E1F1C] hover:text-[#C5A467] transition-all duration-300 group"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid (Strict layout matching Section 9) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5DFD1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1F1C]/80 text-[#C5A467] text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm border border-[#C5A467]/30">
                  {post.category}
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#8D6F39]" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0E1F1C] group-hover:text-[#8D6F39] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526561] font-light leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE0] flex items-center justify-between text-xs font-bold text-[#0E1F1C]">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 hover:text-[#C5A467] transition-colors group/link"
                  >
                    <span>Read Legal Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A467] group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
