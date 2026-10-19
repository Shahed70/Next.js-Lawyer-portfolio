import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Award, Linkedin, Mail, ExternalLink } from "lucide-react";
import { EXPERT_TEAM } from "@/lib/data";

export default function ExpertTeamSection() {
  return (
    <section className="bg-white py-24 border-b border-[#EAE3D5] text-[#1E2927]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-xs font-bold uppercase tracking-widest text-[#8D6F39]">
            <Users className="w-3.5 h-3.5 text-[#8D6F39]" />
            <span>Senior Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E1F1C]">
            Meet the Experts Behind Your Legal Success.
          </h2>
          <p className="text-sm sm:text-base text-[#526561] font-light">
            Distinguished partners combining peerless trial reputations, transactional mastery, and dedicated client service.
          </p>
        </div>

        {/* 3 Portrait Cards Grid (Strict layout matching Section 5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERT_TEAM.map((member) => (
            <div
              key={member.name}
              className={`rounded-2xl overflow-hidden bg-[#FAF8F4] border transition-all duration-300 flex flex-col group ${
                member.featured
                  ? "border-[#C5A467] shadow-xl md:-translate-y-2 ring-1 ring-[#C5A467]/30"
                  : "border-[#E5DFD1] shadow-md hover:shadow-lg"
              }`}
            >
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0E1F1C]/85 backdrop-blur-sm text-[11px] font-bold text-[#C5A467] border border-[#C5A467]/40 flex items-center gap-1.5 shadow-md">
                  <Award className="w-3 h-3 text-[#C5A467]" />
                  <span>{member.experience}</span>
                </div>

                {/* Social icons on hover */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="w-8 h-8 rounded-full bg-[#0E1F1C] text-[#C5A467] flex items-center justify-center hover:bg-[#C5A467] hover:text-[#0E1F1C] transition-colors cursor-pointer shadow">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#0E1F1C] text-[#C5A467] flex items-center justify-center hover:bg-[#C5A467] hover:text-[#0E1F1C] transition-colors cursor-pointer shadow">
                    <Mail className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0E1F1C]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8D6F39] uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-1">
                    Specialty: {member.specialty}
                  </p>
                  <p className="text-sm text-[#526561] font-light leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE3D5] flex items-center justify-between">
                  <Link
                    href="/about"
                    className="text-xs font-bold uppercase tracking-wider text-[#0E1F1C] hover:text-[#8D6F39] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Credentials</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
