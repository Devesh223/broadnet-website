import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Camera,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  Building,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Installation Gallery Chennai | Broadnet Internet & Security",
  description:
    "View completed CCTV, biometric attendance, network cabling, and boom barrier projects across Avadi, Pattabiram, Ambattur, and Chennai. Real installations since 2014.",
  keywords: [
    "CCTV projects Chennai",
    "Security camera installation gallery Avadi",
    "Broadnet installations",
    "Biometric installation photos Chennai",
  ],
};

const PROJECTS = [
  {
    title: "Gated Apartment Society IP CCTV & Boom Barrier",
    location: "Pattabiram, Chennai",
    category: "Residential Society",
    date: "Recent Handover",
    scope: "16x 4K Hikvision IP Cameras + Automatic RFID Boom Barrier + 32-Channel NVR Guard Cabin Video Wall",
    result: "Full perimeter protection, vehicle logging, and zero unauthorized gate entry.",
  },
  {
    title: "Commercial Clinic Biometrics & Video Door Phone",
    location: "Thirumullaivoyal, Chennai",
    category: "Healthcare",
    date: "Completed",
    scope: "eSSL Contactless Face Attendance + Hikvision 7-inch Touchscreen Video Door Phone with Electronic Latch",
    result: "Automated staff attendance export and touch-free sterile visitor screening.",
  },
  {
    title: "Industrial Warehouse Fiber Backbone & 360° PTZ",
    location: "Avadi Industrial Corridor",
    category: "Industrial",
    date: "Completed",
    scope: "1.2 km Fusion-Spliced Optical Fiber + 8x Long-Range ColorVu Bullet Cameras + 2x Optical Zoom PTZ Units",
    result: "Crystal clear night time monitoring of loading docks with zero cable attenuation.",
  },
  {
    title: "Multi-Storey Villa ColorVu CCTV & Mesh Wi-Fi 6",
    location: "Paruthipattu, Avadi",
    category: "Residential Villa",
    date: "Completed",
    scope: "4x CP PLUS Full-Color Night Vision Cameras + 3x Grandstream Ceiling PoE Access Points",
    result: "Concealed conduit piping with seamless roaming Wi-Fi from garden to rooftop.",
  },
  {
    title: "Corporate IT Office Cat6 Structured Cabling & UTM",
    location: "Ambattur Industrial Estate",
    category: "Corporate IT",
    date: "Completed",
    scope: "48-Node Cat6A Patch Panel Termination + 24U Server Rack Dressing + Tactine UTM Hardware Firewall",
    result: "Certified gigabit speeds across all developer desks and secure site-to-site VPN.",
  },
  {
    title: "Retail Showroom Audio Surveillance & Intrusion Alarm",
    location: "Avadi Market High Road",
    category: "Commercial Retail",
    date: "Completed",
    scope: "8x In-Built Audio Cameras + Hikvision Wireless AX PRO Alarm with 110dB Outdoor Siren & GSM Dialer",
    result: "Instant phone alert during unauthorized after-hours door breaches.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header activePage="Projects" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: "Projects & Gallery" }]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>2,500+ Deployments Completed Since 2014</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Our Installation Showcase
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed mb-8">
                Explore real projects engineered by our in-house certified technicians. From concealed home surveillance to complex multi-building optical fiber backbones and automated vehicle barriers.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson min-h-[46px] px-7 text-sm justify-center"
                >
                  Schedule Your Free Site Visit
                </a>
                <a
                  href="tel:+919884344075"
                  className="px-5 py-2.5 rounded-full border border-[#16143E]/20 text-[#16143E] text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors min-h-[46px]"
                >
                  Call 98843 44075
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((p) => (
                <div
                  key={p.title}
                  className="p-7 rounded-3xl bg-white border border-[#16143E]/10 hover:border-[#EF1313]/35 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313]">
                        {p.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#16143E]/60 font-semibold">
                        <MapPin size={13} className="text-[#4E0DBA]" />
                        <span>{p.location}</span>
                      </div>
                    </div>

                    <h3
                      className="text-lg font-bold text-[#16143E] mb-3 leading-snug"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {p.title}
                    </h3>

                    <div className="p-3.5 rounded-xl bg-[#FAFAFE] border border-[#16143E]/8 mb-4">
                      <div className="text-[11px] font-bold text-[#16143E]/50 uppercase tracking-wider mb-1">
                        Deployment Scope:
                      </div>
                      <p className="text-xs text-[#16143E]/80 leading-relaxed font-medium">
                        {p.scope}
                      </p>
                    </div>

                    <div className="text-xs text-[#16143E]/70 leading-relaxed mb-6">
                      <strong className="text-emerald-700 font-bold">Outcome: </strong>
                      {p.result}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#16143E]/8 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#4E0DBA]">{p.date}</span>
                    <a
                      href="#enquiry"
                      className="text-xs font-bold text-[#16143E] hover:text-[#EF1313] inline-flex items-center gap-1"
                    >
                      <span>Similar Solution</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EnquirySection initialService="Projects & Installation Quote" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
