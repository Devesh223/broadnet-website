"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Camera,
  Fingerprint,
  PhoneCall,
  Wifi,
  Network,
  BellRing,
  Lock,
  Car,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SERVICES_LIST } from "@/data/services";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  cctv: Camera,
  "biometric-attendance": Fingerprint,
  "door-phones": PhoneCall,
  "enterprise-wifi": Wifi,
  networking: Network,
  "intrusion-alarms": BellRing,
  "access-control": Lock,
  "entrance-security": Car,
  internet: Globe,
};

export default function ServicesSection() {
  const cctvLead = SERVICES_LIST[0];
  const otherServices = SERVICES_LIST.slice(1);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAFAFE] relative overflow-hidden scroll-mt-20">
      {/* Background accents */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#16143E 1px, transparent 1px), linear-gradient(90deg, #16143E 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Technology & Security Infrastructure</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Our Core Services in Priority Order
          </h2>
          <p
            className="text-[#16143E]/70 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            From lead surveillance installations to biometric access, enterprise Wi-Fi, and network cabling across Chennai. Every system is deployed with precision and backed by genuine manufacturer warranties.
          </p>
        </div>

        {/* 1. LEAD DIVISION: CCTV Surveillance Hero Feature Card */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-white border-2 border-[#EF1313]/30 shadow-xl p-7 sm:p-10 relative overflow-hidden group hover:border-[#EF1313] transition-all"
          >
            {/* Top decorative badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-[#16143E]/8 pb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-[#EF1313] text-white flex items-center justify-center font-black text-sm">
                  #1
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EF1313]">
                  {cctvLead.badge}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA]">
                  Hikvision & CP PLUS Certified
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700">
                  {cctvLead.startingPrice}
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16143E] mb-2 leading-tight"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {cctvLead.title}
                </h3>
                <div className="text-sm sm:text-base font-semibold text-[#4E0DBA] mb-4">
                  “{cctvLead.tagline}”
                </div>
                <p
                  className="text-[#16143E]/75 text-sm sm:text-base leading-relaxed mb-6"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {cctvLead.description}
                </p>

                {/* Sub-sections bullet grid */}
                <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                  {cctvLead.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-[#16143E]/80">
                      <CheckCircle2 size={16} className="text-[#EF1313] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={cctvLead.href}
                    className="btn-crimson min-h-[46px] px-6 text-sm justify-center group"
                  >
                    <span>Explore CCTV Packages & AMC</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => scrollToWithPhysics("enquiry")}
                    className="px-6 py-2.5 rounded-full border border-[#16143E]/20 hover:border-[#4E0DBA] text-xs sm:text-sm font-semibold text-[#16143E] hover:text-[#4E0DBA] transition-colors min-h-[46px] cursor-pointer"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Request Free Site Visit
                  </button>

                  <a
                    href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20need%20a%20quotation%20for%20CCTV%20Surveillance%20installation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#16143E] text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors min-h-[46px]"
                  >
                    <MessageCircle size={15} className="text-[#25D366]" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>

              {/* Lead Division Visual Right Column */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#16143E] to-[#2B1055] rounded-2xl p-6 sm:p-7 text-white shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#EF1313] font-bold">
                      Direct Surveillance Assurance
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                      Chennai & Avadi
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
                    Why Choose Our CCTV Division?
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-[13px] text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#EF1313] font-bold">✓</span>
                      <span><strong>Genuine Optical Sensors:</strong> Only original Hikvision, CP PLUS, and Dahua cameras with genuine manufacturer serials.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EF1313] font-bold">✓</span>
                      <span><strong>Surveillance Hard Drives:</strong> WD Purple & Seagate SkyHawk 24/7 drives that never drop recorded frames.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EF1313] font-bold">✓</span>
                      <span><strong>2-Hour Dispatch:</strong> Quick local technicians in Avadi for emergency lens cleaning, cable repair, or NVR setup.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EF1313] font-bold">✓</span>
                      <span><strong>Dedicated CCTV Landing Page:</strong> Complete package calculators & camera previews available.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-white/60">Lead Division Hotline:</div>
                    <a href="tel:+919884344075" className="text-sm font-bold text-white hover:text-[#EF1313] transition-colors">
                      98843 44075 / 86818 88111
                    </a>
                  </div>
                  <Link
                    href="/cctv-landing"
                    className="px-3.5 py-1.5 rounded-lg bg-[#EF1313] hover:bg-[#d81010] text-white text-xs font-bold transition-all shadow-md"
                  >
                    Quick CCTV Page →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2 to 9: ALL OTHER SERVICES IN STRICT PRIORITY ORDER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => {
            const Icon = ICON_MAP[service.id] || ShieldCheck;
            const isMinor = service.isMinorOffering;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                  isMinor
                    ? "bg-[#F3F4F8] border border-[#16143E]/10 hover:border-[#16143E]/30"
                    : "bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-md"
                }`}
              >
                <div>
                  {/* Service Order Index + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-7 h-7 rounded-lg bg-[#16143E]/5 text-[#16143E] font-black text-xs flex items-center justify-center group-hover:bg-[#4E0DBA] group-hover:text-white transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      #{service.order}
                    </span>
                    {service.badge && (
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          isMinor
                            ? "bg-[#16143E]/10 text-[#16143E]/70"
                            : "bg-[#4E0DBA]/10 text-[#4E0DBA]"
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${
                      isMinor
                        ? "bg-[#16143E]/10 text-[#16143E]"
                        : "bg-[#4E0DBA]/10 text-[#4E0DBA] group-hover:bg-[#4E0DBA] group-hover:text-white"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className="text-lg font-bold text-[#16143E] mb-1.5 group-hover:text-[#4E0DBA] transition-colors leading-snug"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#EF1313] mb-3">
                    {service.tagline}
                  </div>

                  <p
                    className="text-xs sm:text-[13px] text-[#16143E]/70 leading-relaxed mb-4 line-clamp-3"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {service.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-[#16143E]/8">
                    {service.features.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-start gap-1.5 text-xs text-[#16143E]/75">
                        <span className="text-[#4E0DBA] font-bold">·</span>
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action button */}
                <div className="pt-3 border-t border-[#16143E]/8 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E0DBA] hover:text-[#EF1313] transition-colors group-hover:translate-x-0.5"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} />
                  </Link>
                  <span className="text-[11px] font-semibold text-[#16143E]/50">
                    {service.brands[0]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
