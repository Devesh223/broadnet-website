"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, Sparkles, Check, ArrowRight } from "lucide-react";
import { BRAND_PARTNERS } from "@/data/services";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

const CERTIFICATIONS_BADGES = [
  { name: "Hikvision HCSA", title: "Hikvision Certified Security Associate", brand: "Hikvision" },
  { name: "CP PLUS CSE", title: "CP PLUS Certified Surveillance Engineers", brand: "CP PLUS" },
  { name: "Grandstream GCNS", title: "Grandstream Certified Network Specialist", brand: "Grandstream" },
  { name: "eSSL Authorised", title: "eSSL Official Biometric Solution Partner", brand: "eSSL" },
  { name: "Tactine Dealer", title: "Tactine UTM Firewall Authorised Partner", brand: "Tactine" },
];

export default function BrandPartnersSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#16143E]/8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4E0DBA]/[0.025] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 border border-[#EF1313]/20 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3">
            <Award size={13} />
            <span>Authorized Hardware Partners</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16143E]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Direct Manufacturer Partnerships & Certifications
          </h2>
          <p
            className="text-[#16143E]/70 text-sm sm:text-base mt-2"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Genuine brand hardware backed by official manufacturer warranties, certified installation engineers, and rapid local RMA support.
          </p>
        </div>

        {/* Certifications Row */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-12">
          {CERTIFICATIONS_BADGES.map((cert) => (
            <div
              key={cert.name}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#FAFAFE] border border-[#16143E]/10 text-xs sm:text-sm font-semibold text-[#16143E] shadow-2xs hover:border-[#4E0DBA]/50 hover:shadow-sm transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={13} />
              </div>
              <div>
                <span className="font-bold text-[#4E0DBA]">{cert.name}: </span>
                <span className="text-[#16143E]/80">{cert.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4.5 mb-10">
          {BRAND_PARTNERS.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#EF1313]/40 shadow-xs hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-center items-center group relative overflow-hidden hover:-translate-y-1.5 cursor-pointer"
              onClick={() => scrollToWithPhysics("enquiry")}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#EF1313] group-hover:to-[#4E0DBA] transition-all" />
              <div
                className="text-lg sm:text-xl font-black text-[#16143E] group-hover:text-[#EF1313] transition-colors mb-1.5 tracking-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {brand.name}
              </div>
              <div className="text-[11px] font-bold text-[#4E0DBA] uppercase tracking-wider mb-1">
                {brand.tag}
              </div>
              <div className="text-[10.5px] text-[#16143E]/60 font-medium">
                {brand.cert}
              </div>
              <div className="mt-2 text-[10px] text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Official Warranty Included ✓
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authenticity Guarantee Ribbon */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-emerald-950 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
            <span>
              <strong>100% Genuine Box Sealed Hardware:</strong> We unbox original sealed packages on your property with serial-numbered manufacturer warranty cards.
            </span>
          </div>
          <button
            type="button"
            onClick={() => scrollToWithPhysics("enquiry")}
            className="text-emerald-800 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Request Genuine Brand Quote</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
