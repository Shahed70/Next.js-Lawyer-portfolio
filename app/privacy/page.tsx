import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Attorney Privilege | Clario",
};

export default function PrivacyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Ethical Safeguards & Confidentiality</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Privacy Policy & Data Privilege
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed font-light">
            Last Updated: October 2026
          </p>

          <div className="space-y-6 text-sm text-gray-300 font-light leading-relaxed pt-6 border-t border-[#1E443E]">
            <section className="space-y-2">
              <h2 className="font-serif text-2xl text-white font-bold">
                1. Scope of Attorney-Client Privilege
              </h2>
              <p>
                All preliminary case submissions, consultation notes, and communications submitted through the Clario website are treated as strictly confidential under ethical legal standards. Transmission of preliminary information does not alone form a formal attorney-client retainer, but receipt of inquiries is protected under privileged duty-of-confidentiality doctrines.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-2xl text-white font-bold">
                2. Information We Collect
              </h2>
              <p>
                We only collect information willingly provided via our case evaluation and contact forms, including name, corporate affiliation, telephone number, email, and brief case summaries. We do not sell, rent, or lease personal data to any commercial third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-2xl text-white font-bold">
                3. Encryption & Data Security
              </h2>
              <p>
                All form submissions are encrypted in transit using industry-standard TLS 1.3 protocol and stored on air-gapped, zero-knowledge encrypted database infrastructures compliant with high-tier corporate regulatory directives.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
