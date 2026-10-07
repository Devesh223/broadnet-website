import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Car,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Sliders,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Boom Barriers, Turnstiles & Metal Detectors Chennai | Broadnet Entrance Automation",
  description:
    "Automated boom barriers, RFID vehicle tags, doorframe metal detectors (DFMD), and pedestrian flap barriers for apartments, tech parks, and factories across Chennai & Avadi. Call 98843 44075.",
  keywords: [
    "Boom barrier installation Chennai",
    "Automatic vehicle barrier Avadi",
    "Door frame metal detector DFMD Chennai",
    "Flap barrier turnstile Chennai",
    "RFID vehicle boom barrier Chennai",
  ],
};

export default function EntranceSecurityPage() {
  return (
    <>
      <Header activePage="Services" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/#services" },
                  { label: "Boom Barriers & Entrance Security" },
                ]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Heavy-Duty Commercial Entrance Automation</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Boom Barriers, Turnstiles & Security Screening
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed mb-8">
                Regulate unauthorized vehicles and secure pedestrian entry points with motorized automatic boom barriers, long-range windshield RFID tags, multi-zone doorframe metal detectors (DFMD), and optical flap turnstiles.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson min-h-[46px] px-7 text-sm justify-center"
                >
                  Request Gate Automation Survey
                </a>
                <a
                  href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20am%20interested%20in%20Boom%20Barriers%20and%20Entrance%20Security%20systems."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366]/10 text-[#16143E] hover:bg-[#25D366]/20 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors min-h-[46px]"
                >
                  <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Offerings */}
        <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                  <Car size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Automatic Boom Barriers
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  High-speed motorized boom arms (3 to 6 meters) with anti-smash loop detectors, optical safety photocells, and RFID windshield FASTag readers for registered residents and fleet vehicles.
                </p>
                <div className="text-xs text-[#EF1313] font-semibold">eSSL & Hikvision Heavy-Duty Motors</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Metal Detectors & Screening
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Multi-zone walk-through doorframe metal detectors (DFMD) with pinpoint LED location indicators, sensitivity calibration, and hand-held security inspection wands for event halls and schools.
                </p>
                <div className="text-xs text-[#4E0DBA] font-semibold">Anti-Interference Technology</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#16143E]/10 text-[#16143E] flex items-center justify-center mb-4">
                  <Sliders size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Flap Barriers & Turnstiles
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Architectural glass flap barriers and tripod turnstiles integrated with biometric face scanners or RFID cards to prevent tailgating in corporate office reception lobbies.
                </p>
                <div className="text-xs text-[#16143E] font-semibold">Brushless Motor & Anti-Tailgating Sensors</div>
              </div>
            </div>
          </div>
        </section>

        <EnquirySection initialService="Boom Barriers & Flap Barriers" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
