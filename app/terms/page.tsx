import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Engagement & Legal Disclaimer | Clario",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#0A1917] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#C5A467] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132B26] border border-[#C5A467]/30 text-xs font-semibold text-[#C5A467]">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Notice & Engagement Terms</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Terms of Engagement
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed font-light">
            Effective Date: October 2026
          </p>

          <div className="space-y-6 text-sm text-gray-300 font-light leading-relaxed pt-6 border-t border-[#1E443E]">
            <section className="space-y-2">
              <h2 className="font-serif text-2xl text-white font-bold">
                1. Informational Purposes Only
              </h2>
              <p>
                The materials presented on this website are intended for general informational, educational, and portfolio review purposes only. They do not constitute formal legal counsel or create a binding attorney-client relationship until an explicit written engagement agreement is signed by both parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-2xl text-white font-bold">
                2. Prior Case Outcomes
              </h2>
              <p>
                Descriptions of prior cases, settlements, and verdicts do not guarantee a similar outcome in any future legal proceeding. Every dispute and transaction turns on its unique legal and factual circumstances.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
