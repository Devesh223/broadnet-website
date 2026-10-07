import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import MilestonesSection from "@/components/MilestonesSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Users, Award, MapPin, Clock, TrendingUp, Heart, BadgeCheck, ArrowRight, Shield, Wifi, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Broadnet | Avadi's Leading Security & Network Integrator Since 2014",
  description:
    "Broadnet Internet Services operates in Avadi, Chennai since 2014 with 10+ certified engineers. 2,500+ installations, 100+ km fiber network, and certified partner for Hikvision, CP PLUS, Grandstream, and eSSL.",
  alternates: {
    canonical: "https://www.broadnet.in/about",
  },
  openGraph: {
    title: "About Broadnet Internet Services | 12 Years in Avadi, Chennai",
    description:
      "Avadi's technology and security systems provider. CCTV, biometrics, enterprise Wi-Fi, and network infrastructure.",
    url: "https://www.broadnet.in/about",
  },
};

const STATS = [
  { value: "2014", label: "Year Established", icon: Clock },
  { value: "12+", label: "Years in Operation", icon: Award },
  { value: "2,500+", label: "Satisfied Clients", icon: Heart },
  { value: "10+", label: "Technical Staff", icon: Users },
];

const VALUES = [
  { title: "Engineering Excellence", desc: "Every installation is executed with precision — from cable routing to system configuration — following international standards." },
  { title: "Client-First Philosophy", desc: "We design solutions around your needs, not off-the-shelf packages. Every project begins with a thorough consultation and site survey." },
  { title: "Certified Expertise", desc: "Our team holds certified credentials from Hikvision, CP PLUS, Grandstream, eSSL, and Tactine — ensuring manufacturer-level proficiency." },
  { title: "After-Sales Commitment", desc: "Our relationship doesn't end at handover. AMC contracts, priority support, and remote diagnostics keep your systems running flawlessly." },
];

export default function AboutPage() {
  return (
    <>
      <Header activePage="About Us" />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: "radial-gradient(circle, #16143E 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #4E0DBA 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: "About Broadnet" }]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-4">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Our Story
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-tight mb-4 sm:mb-6">
                Built in Avadi.
                <br />
                <span className="text-gradient">Trusted Across Chennai.</span>
              </h1>
              <div className="inline-block px-4 py-2 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] font-bold text-sm sm:text-base mb-4">
                “Connecting People. Securing Places. Managing Access.”
              </div>
              <p className="text-[#16143E]/60 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                Operating since 2014 from Fire Station Road, TNHB Avadi with a dedicated in-house team of 10+ certified engineers, Broadnet Internet Services delivers integrated technology and security solutions for homes, businesses, institutions, industries, apartments, hotels, and commercial establishments across Chennai.
              </p>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#4E0DBA]" />
                <span className="text-[#16143E]/60 text-sm">
                  1093, Fire Station Road, TNHB, Avadi, Chennai – 600 054
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-[#16143E] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/8 bg-white/4">
                  <stat.icon size={24} className="mx-auto mb-3 text-[#4E0DBA]" />
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/40 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <MilestonesSection />

        {/* Brand Partners & Certifications */}
        <BrandPartnersSection />

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-4">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Our Principles
              </span>
              <h2 className="text-4xl font-bold text-[#16143E]">What Drives Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {VALUES.map((v, i) => (
                <div key={v.title} className="flex gap-5 p-7 rounded-2xl border border-[#16143E]/8 hover:border-[#4E0DBA]/25 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#4E0DBA]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4E0DBA]/15 transition-colors">
                    <span className="text-sm font-bold text-[#4E0DBA]">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-[#16143E] font-bold text-lg mb-2">{v.title}</h3>
                    <p className="text-[#16143E]/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Services Link Strip */}
        <section className="py-14 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4E0DBA] font-display">
                Engineered In Avadi
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#16143E] mt-1 font-display">
                Ready to Upgrade Your Connectivity or Security?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link
                href="/internet"
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4E0DBA] group-hover:text-white transition-colors">
                    <Wifi size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#16143E] font-display">Fiber Internet</h3>
                    <p className="text-xs text-[#16143E]/60">FTTH plans from ₹499/mo</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-[#4E0DBA] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/security"
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#EF1313]/40 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EF1313] group-hover:text-white transition-colors">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#16143E] font-display">Security Solutions</h3>
                    <p className="text-xs text-[#16143E]/60">CCTV, VDP & Biometrics</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-[#EF1313] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
