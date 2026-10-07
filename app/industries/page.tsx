import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Home,
  Building,
  GraduationCap,
  Factory,
  Hotel,
  Briefcase,
  ShieldCheck,
  Camera,
  Fingerprint,
  Wifi,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Security & Networking Solutions Chennai | Broadnet",
  description:
    "Tailored surveillance and technology systems for homes, apartments, schools, factories, hotels, and offices across Chennai & Avadi. Free site survey. Call 98843 44075.",
  keywords: [
    "Apartment CCTV Chennai",
    "Factory security surveillance Avadi",
    "School campus CCTV Chennai",
    "Office biometric access Avadi",
    "Hotel Wi-Fi solutions Chennai",
  ],
};

const SECTORS = [
  {
    icon: Home,
    title: "Homes & Independent Villas",
    desc: "Discrete ColorVu night vision cameras, smart video door phones (VDP), mobile remote viewing, and perimeter infrared intrusion alarms.",
    recommended: ["4-Camera Full-Color HD Kit", "Smart Touchscreen Video Door Phone", "Compound Wall Intrusion Beam"],
    badge: "Residential",
  },
  {
    icon: Building,
    title: "Apartments & Gated Societies",
    desc: "Centralized guard cabin NVR setup, long-range RFID boom barriers, intercom calling between flats, and elevator traveling cable cameras.",
    recommended: ["16-32 Ch IP Surveillance", "Automated Vehicle Boom Barrier", "Multi-Flat Audio/Video Intercom"],
    badge: "Gated Communities",
  },
  {
    icon: GraduationCap,
    title: "Schools, Colleges & Institutions",
    desc: "Complete campus perimeter coverage, classroom dome cameras, RFID bus tracking attendance, and walk-through metal detectors.",
    recommended: ["High-Density IP Cameras", "Biometric Staff Attendance", "Campus Enterprise Wi-Fi"],
    badge: "Education",
  },
  {
    icon: Factory,
    title: "Factories, Warehouses & Industries",
    desc: "Industrial-grade explosion-proof metal bullet cameras, ANPR truck license plate capture, optical fiber backbone, and perimeter siren defense.",
    recommended: ["4K Optical Zoom PTZ Cameras", "OTDR Spliced Fiber Backbone", "Perimeter Infrared Beams"],
    badge: "Industrial",
  },
  {
    icon: Hotel,
    title: "Hotels, Resorts & Restaurants",
    desc: "Branded guest Wi-Fi captive portals, corridor and lobby dome cameras, kitchen monitoring, and electronic keycard access integration.",
    recommended: ["Grandstream Wi-Fi 6 Access Points", "Corridor IP Dome Cameras", "Staff Biometric Terminals"],
    badge: "Hospitality",
  },
  {
    icon: Briefcase,
    title: "Offices & IT Workspaces",
    desc: "Contactless facial recognition attendance synced with HR payroll, server room electromagnetic door locks, and Cat6 structured rack cabling.",
    recommended: ["eSSL Touchless Face Attendance", "Electromagnetic EM Door Locks", "Tactine UTM Firewall & Cat6 Cabling"],
    badge: "Corporate",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header activePage="Industries" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: "Industries & Solutions" }]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Sector-Specific Security Engineering</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Tailored Solutions for Every Facility
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed mb-8">
                No two properties are identical. From a private villa needing quiet night vision to a 200-flat society demanding automated vehicle boom barriers, we architect fit-for-purpose solutions with certified manufacturer hardware.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson min-h-[46px] px-7 text-sm justify-center"
                >
                  Book Free Sector Site Audit
                </a>
                <a
                  href="tel:+919884344075"
                  className="px-5 py-2.5 rounded-full border border-[#16143E]/20 text-[#16143E] text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors min-h-[46px]"
                >
                  <Phone size={16} className="text-[#EF1313]" /> Call 98843 44075
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECTORS.map((sec) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="p-7 rounded-3xl bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA]">
                          {sec.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#16143E]/5 text-[#16143E] flex items-center justify-center group-hover:bg-[#EF1313] group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                      </div>

                      <h3
                        className="text-xl font-bold text-[#16143E] mb-2 leading-snug"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {sec.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-6">
                        {sec.desc}
                      </p>

                      <div className="pt-4 border-t border-[#16143E]/8 space-y-2 mb-6">
                        <div className="text-[11px] font-bold text-[#16143E]/50 uppercase tracking-wider">
                          Recommended Systems:
                        </div>
                        {sec.recommended.map((r) => (
                          <div key={r} className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/85">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF1313]" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#enquiry"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E0DBA] hover:text-[#EF1313] transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      <span>Request Sector Quote</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <EnquirySection initialService="Industry Sector Solution" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
