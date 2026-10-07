import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import MilestonesSection from "@/components/MilestonesSection";
import LocationChecker from "@/components/LocationChecker";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Broadnet | CCTV Camera Installation & Security Systems in Chennai & Avadi",
  description:
    "Broadnet Internet Services (Est. 2014): Official Hikvision & CP PLUS CCTV camera installation, eSSL biometric attendance, video door phones, and enterprise networking across Chennai. Free site visit. Call 98843 44075.",
  alternates: {
    canonical: "https://www.broadnet.in",
  },
};

export default function HomePage() {
  return (
    <>
      <Header activePage="Home" />
      <main>
        {/* 1. Hero with strong CCTV headline, phone call link, and 'Get Free Site Visit & Quote' button */}
        <HeroSection />

        {/* 2. Brand Partners & Official Certifications (Hikvision, CP PLUS, Grandstream, eSSL, Tactine) */}
        <BrandPartnersSection />

        {/* 3. Core Services in strict priority order (CCTV Lead Division down to Internet minor card) */}
        <ServicesSection />

        {/* 4. Our Process (6-step graphic: Enquiry → Site Visit → Quotation → Installation → Testing → AMC/Support) */}
        <ProcessSection />

        {/* 5. Milestones timeline (2014 founded → 2016 → 2019 → 2024 → 2025 → 2026) + Company Numbers */}
        <MilestonesSection />

        {/* 6. Service Areas & Interactive Locality Coverage Checker (Chennai for CCTV, Avadi for Internet) */}
        <LocationChecker />

        {/* 7. Verified Customer Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 8. Short Quote / Site Visit Form with Building Type that emails admin@broadnet.in */}
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
