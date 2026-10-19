"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Code2,
  Layout,
  Cpu,
  Layers,
  Terminal,
  Server,
  Sparkles,
} from "lucide-react";

interface ServiceOffering {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  image: string;
  technologies: string[];
  deliverables: string[];
  timeline: string;
}

const PORTFOLIO_SERVICES: ServiceOffering[] = [
  {
    id: "ui-ux",
    title: "UI/UX & Design Systems",
    badge: "Product Strategy",
    shortDesc: "High-fidelity user interface architecture, interactive wireframing, design tokens, and comprehensive Figma design systems engineered for conversion and visual prestige.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
    technologies: ["Figma Enterprise", "Design Tokens", "Tailwind CSS", "Motion Prototypes", "Accessibility (WCAG 2.1)"],
    deliverables: [
      "End-to-End Component Libraries",
      "Interactive High-Fidelity Prototypes",
      "Comprehensive User Journey & Wireframes",
      "Mobile-First Responsive Guidelines",
    ],
    timeline: "2 - 4 Weeks",
  },
  {
    id: "frontend-dev",
    title: "Frontend Engineering & Next.js",
    badge: "Core Expertise",
    shortDesc: "Pixel-perfect, ultra-fast web application engineering using modern Next.js (App Router), TypeScript, Tailwind CSS, Server Actions, and fluid micro-animations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    technologies: ["Next.js 14/15", "TypeScript", "React Server Components", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Sub-Second Page Load Optimization",
      "Complete TypeScript Type Safety",
      "Dynamic SEO & OpenGraph Generation",
      "Lighthouse 98+ Performance Score",
    ],
    timeline: "3 - 6 Weeks",
  },
  {
    id: "fullstack-cloud",
    title: "Full-Stack & Cloud Architecture",
    badge: "Enterprise Scale",
    shortDesc: "Robust serverless backends, relational databases, RESTful and GraphQL APIs, authentication, and resilient cloud deployments on AWS and Vercel.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    technologies: ["Node.js", "PostgreSQL / Supabase", "Prisma ORM", "Docker", "Vercel / AWS"],
    deliverables: [
      "Scalable Serverless API Endpoints",
      "Zero-Trust Authentication & RBAC",
      "Automated CI/CD Deployment Pipelines",
      "Database Schema Design & Migrations",
    ],
    timeline: "4 - 8 Weeks",
  },
  {
    id: "ai-systems",
    title: "AI Integration & Intelligent Systems",
    badge: "Emerging Tech",
    shortDesc: "Connecting LLMs, custom vector embeddings, Retrieval-Augmented Generation (RAG) pipelines, and autonomous agent workflows into existing commercial software.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    technologies: ["OpenAI / Anthropic APIs", "LangChain / LlamaIndex", "Pinecone / pgvector", "Python Microservices"],
    deliverables: [
      "Context-Aware AI Chat & Agents",
      "Semantic Document Search & RAG",
      "Automated Prompt Engineering Pipelines",
      "Latency & Token Cost Optimization",
    ],
    timeline: "3 - 5 Weeks",
  },
  {
    id: "advisory-audits",
    title: "Technical Advisory & Code Auditing",
    badge: "Consulting",
    shortDesc: "Independent code review, architecture assessments, accessibility audits, and strategic technical due diligence for executives and investors.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    technologies: ["Static Code Analysis", "Security Auditing", "Core Web Vitals", "Architecture Reviews"],
    deliverables: [
      "Comprehensive Architectural Audit Report",
      "Prioritized Performance Action Plan",
      "Security & Vulnerability Assessment",
      "Team Mentorship & Best Practices Guide",
    ],
    timeline: "1 - 2 Weeks",
  },
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState<string>("frontend-dev");

  return (
    <main className="min-h-screen pt-24 bg-[#0A1917] text-white">
      {/* Services Hero Banner */}
      <section className="py-20 border-b border-[#1E443E] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#183933] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B26] border border-[#C5A467]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A467] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Portfolio Offerings
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Tailored Engineering & <br />
            <span className="text-[#C5A467] italic font-serif">Product Design Services.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Delivering high-caliber digital products with the same uncompromising precision, aesthetic elegance, and rigorous architectural integrity that defines top-tier legal advocacy.
          </p>
        </div>
      </section>

      {/* Large 'Legal Fields' List Style Replicating Section 3 of image_0.png */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C5A467] font-semibold flex items-center gap-2">
                <span className="w-6 h-px bg-[#C5A467]" />
                Full Portfolio Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Our Proficiency in Diverse <br />
                <span className="text-[#C5A467] italic font-serif">Portfolio Disciplines.</span>
              </h2>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all duration-300 shadow-goldglow"
              >
                <span>Initiate Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Large Typography Interactive List (Strict replicate of section 3) */}
          <div className="border-t border-[#1C3A33] divide-y divide-[#1C3A33]">
            {PORTFOLIO_SERVICES.map((field, idx) => {
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#0A1917]/90 text-[10px] uppercase font-bold text-[#C5A467] border border-[#C5A467]/30">
                          Est. Timeline: {field.timeline}
                        </div>
                      </div>

                      {/* Description and Key Practice Highlights */}
                      <div className="lg:col-span-5 space-y-4">
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                          {field.shortDesc}
                        </p>
                        <div className="space-y-1.5">
                          <p className="text-xs uppercase tracking-wider text-[#C5A467] font-semibold">
                            Key Deliverables:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                            {field.deliverables.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A467] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {field.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-[#163630] border border-[#1E443E] text-[10px] text-gray-300 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action button */}
                      <div className="lg:col-span-3 flex lg:justify-end">
                        <Link
                          href={`/contact?service=${encodeURIComponent(field.title)}`}
                          className="px-6 py-3 rounded-full text-xs uppercase font-bold tracking-wider text-[#0A1917] bg-[#C5A467] hover:bg-[#D5B87A] transition-all shadow-goldglow flex items-center gap-2"
                        >
                          <span>Request Proposal</span>
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

      {/* Engagement Workflow Section */}
      <section className="bg-[#FAF8F4] text-[#1E2927] py-24 border-t border-[#EAE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8D6F39] font-bold">
              Engineering Rigor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0E1F1C]">
              Structured Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Blueprint",
                desc: "Thorough requirements analysis, architectural diagrams, and user narrative alignment.",
              },
              {
                step: "02",
                title: "Design & Prototype",
                desc: "Figma design systems, high-fidelity responsive mockups, and interaction validation.",
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Sprint-based implementation with TypeScript, Next.js, test coverage, and code reviews.",
              },
              {
                step: "04",
                title: "Audit & Deployment",
                desc: "Lighthouse optimization, accessibility checks, automated CI/CD, and post-launch support.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-7 rounded-2xl bg-white border border-[#E5DFD1] shadow-sm space-y-3"
              >
                <span className="font-serif text-2xl font-bold text-[#8D6F39]">
                  {p.step}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#0E1F1C]">
                  {p.title}
                </h4>
                <p className="text-xs text-[#526561] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
