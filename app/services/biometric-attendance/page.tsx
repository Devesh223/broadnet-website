import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Fingerprint,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  Building2,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Biometric Time Attendance Systems in Chennai & Avadi | eSSL Authorised Partner",
  description:
    "Authorised eSSL biometric time attendance installations across Chennai and Avadi. Facial recognition, fingerprint readers, cloud attendance software, and automated payroll integration. Call 98843 44075.",
  keywords: [
    "Biometric attendance system Avadi",
    "eSSL biometric Chennai",
    "Fingerprint attendance machine Avadi",
    "Face recognition attendance Chennai",
    "Biometric payroll software Chennai",
  ],
};

export default function BiometricAttendancePage() {
  return (
    <>
      <Header activePage="Services" />
      <main className="bg-white text-[#16143E]">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/#services" },
                  { label: "Biometric Time Attendance" },
                ]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>eSSL Authorised Enterprise Partner</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Biometric Time Attendance Systems
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed mb-8">
                Eliminate proxy attendance and streamline employee payroll. We deploy touchless 0.2s AI facial recognition terminals, scratch-resistant optical fingerprint readers, and cloud software for businesses, hospitals, schools, and factories across Chennai & Avadi.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson min-h-[46px] px-7 text-sm justify-center"
                >
                  Request Quote & Demo
                </a>
                <a
                  href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20am%20interested%20in%20eSSL%20Biometric%20Time%20Attendance%20systems."
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

        {/* Features & Modules */}
        <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#16143E]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Comprehensive Attendance Management Features
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                  <Fingerprint size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Face & Fingerprint Recognition
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Touchless 3D facial verification prevents skin infection transmission and works in dim lighting. Industrial optical sensors prevent fake rubber finger spoofs.
                </p>
                <ul className="space-y-1.5 text-xs text-[#16143E]/80">
                  <li className="flex items-center gap-1.5">✓ 0.2-second instant matching</li>
                  <li className="flex items-center gap-1.5">✓ Up to 10,000 face/card capacity</li>
                </ul>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Shift Rosters & Overtime Tracking
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Automate rotational night shifts, break hours, late grace periods, and overtime calculations without manual spreadsheet calculations.
                </p>
                <ul className="space-y-1.5 text-xs text-[#16143E]/80">
                  <li className="flex items-center gap-1.5">✓ Automated daily SMS alerts</li>
                  <li className="flex items-center gap-1.5">✓ Multi-shift flexibility</li>
                </ul>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Cloud Software & Payroll Export
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Direct one-click export into Tally, GreytHR, Keka, and custom payroll engines. Centralize multiple branches into a single management console.
                </p>
                <ul className="space-y-1.5 text-xs text-[#16143E]/80">
                  <li className="flex items-center gap-1.5">✓ Mobile app for field managers</li>
                  <li className="flex items-center gap-1.5">✓ Real-time cloud sync via Wi-Fi/LAN</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <EnquirySection initialService="Biometric Time Attendance" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
