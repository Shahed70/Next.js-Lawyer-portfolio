import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import ExperienceGridSection from "@/components/landing/ExperienceGridSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProvenExcellenceSection from "@/components/landing/ProvenExcellenceSection";
import ExpertTeamSection from "@/components/landing/ExpertTeamSection";
import PricingPackagesSection from "@/components/landing/PricingPackagesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CaseEvaluationSection from "@/components/landing/CaseEvaluationSection";
import BlogInsightsSection from "@/components/landing/BlogInsightsSection";

export const metadata = {
  title: "Clario | Compassionate & Expert Justice | Executive Portfolio",
  description: "A premier legal and professional advisory portfolio replicating the classic Clario dark teal and gold aesthetic with comprehensive advocacy and strategic solutions.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section (Strict layout from image_0.png) */}
      <HeroSection />

      {/* 2. Feature Grid & Overlapping Image Blocks */}
      <ExperienceGridSection />

      {/* 3. Services Section with Large Typography */}
      <ServicesSection />

      {/* 4. Case Studies & Proven Excellence */}
      <ProvenExcellenceSection />

      {/* 5. Expert Team Leadership */}
      <ExpertTeamSection />

      {/* 6. Scalable Pricing Packages */}
      <PricingPackagesSection />

      {/* 7. Customer Testimonials */}
      <TestimonialsSection />

      {/* 8. Free Case Assessment Overlay Form */}
      <CaseEvaluationSection />

      {/* 9. Blog Insights & Precedents */}
      <BlogInsightsSection />
    </main>
  );
}
