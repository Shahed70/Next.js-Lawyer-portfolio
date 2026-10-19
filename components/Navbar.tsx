"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Menu, X, PhoneCall, ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1917]/95 backdrop-blur-md py-4 shadow-xl border-b border-[#C5A467]/20"
          : "bg-[#0A1917]/80 backdrop-blur-sm py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E2CA93] to-[#B68C48] p-0.5 flex items-center justify-center shadow-goldglow group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0E1F1C] rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#C5A467]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-[#C5A467] transition-colors">
                Clario
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A467]/80 font-sans">
                Legal & Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-[#C5A467] font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#C5A467] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0E1F1C] bg-[#C5A467] hover:bg-[#D5B87A] transition-all duration-200 shadow-md hover:shadow-goldglow active:scale-95 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Free Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#16322D] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#C5A467]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1917] border-b border-[#C5A467]/20 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#16322D] text-[#C5A467] border-l-4 border-[#C5A467]"
                    : "text-gray-300 hover:bg-[#132523] hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </Link>
            );
          })}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center py-3 rounded-full text-xs uppercase tracking-wider font-bold text-[#0E1F1C] bg-[#C5A467] hover:bg-[#D5B87A] transition-all shadow-goldglow"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
