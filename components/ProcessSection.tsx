"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  FileText,
  Wrench,
  CheckCircle2,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

const STEPS = [
  {
    step: "01",
    title: "Enquiry",
    desc: "Share your requirements via WhatsApp, phone call, or quick quote form.",
    icon: MessageSquare,
    badge: "Instant Response",
    color: "#4E0DBA",
  },
  {
    step: "02",
    title: "Site Visit",
    desc: "100% FREE in-person assessment across Chennai to inspect angles & cable paths.",
    icon: MapPin,
    badge: "100% FREE",
    highlight: true,
    color: "#EF1313",
  },
  {
    step: "03",
    title: "Quotation",
    desc: "Transparent, itemized proposal with genuine Hikvision / CP PLUS hardware.",
    icon: FileText,
    badge: "Zero Hidden Fees",
    color: "#4E0DBA",
  },
  {
    step: "04",
    title: "Installation",
    desc: "Concealed conduit piping, neat rack cabling, and precision camera mounting.",
    icon: Wrench,
    badge: "Certified Techs",
    color: "#EF1313",
  },
  {
    step: "05",
    title: "Testing",
    desc: "Live mobile viewing setup, NVR recording verification, and complete training.",
    icon: CheckCircle2,
    badge: "Quality Passed",
    color: "#4E0DBA",
  },
  {
    step: "06",
    title: "AMC / Support",
    desc: "Rapid <2-hour local dispatch, annual maintenance, and warranty assistance.",
    icon: Headphones,
    badge: "2-Hr Local SLA",
    color: "#EF1313",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFE] border-y border-[#16143E]/8 relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4E0DBA 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-[#EF1313]/[0.025] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full bg-[#4E0DBA]/[0.035] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 border border-[#EF1313]/20 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Our 6-Step Implementation Journey</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            From First Call to Flawless Handover
          </h2>
          <p
            className="text-[#16143E]/70 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            We eliminate guesswork with an engineering-first workflow. Enjoy a dedicated project manager, zero hidden costs, and our signature{" "}
            <strong className="text-[#EF1313] font-bold">Free On-Site Assessment</strong>.
          </p>
        </div>

        {/* 6-Step Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 mb-12">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                  item.highlight
                    ? "bg-white border-2 border-[#EF1313] shadow-lg shadow-[#EF1313]/10"
                    : "bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/35 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Step number badge & Step Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-black tracking-widest text-[#16143E]/40 group-hover:text-[#4E0DBA] transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      STEP {item.step}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.highlight
                          ? "bg-[#EF1313] text-white"
                          : "bg-[#16143E]/5 text-[#16143E]/70 border border-[#16143E]/10"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                      item.highlight
                        ? "bg-[#EF1313]/10 text-[#EF1313]"
                        : "bg-[#4E0DBA]/10 text-[#4E0DBA]"
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className="text-lg font-bold text-[#16143E] mb-2 leading-snug group-hover:text-[#4E0DBA] transition-colors"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-xs sm:text-[13px] text-[#16143E]/65 leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Arrow indicator between steps (for desktop) */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-white border border-[#16143E]/15 flex items-center justify-center shadow-xs text-[#16143E]/40">
                      <ArrowRight size={11} />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Free Site Visit Highlight Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#2A1054] to-[#16143E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-13 h-13 rounded-2xl bg-[#EF1313] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#EF1313]/30">
              <ShieldCheck size={28} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] tracking-wider uppercase mb-1">
                <Sparkles size={12} /> Step 2 is Completely Complimentary
              </div>
              <h4
                className="text-xl sm:text-2xl font-bold tracking-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Book Your Free On-Site Security & Network Audit
              </h4>
              <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl">
                Our senior technician visits your property in Avadi or across Chennai, checks camera field-of-view, calculates storage days, and shares a zero-obligation quote.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => scrollToWithPhysics("enquiry")}
              className="btn-crimson min-h-[46px] px-6 text-sm justify-center whitespace-nowrap cursor-pointer shadow-lg shadow-[#EF1313]/30 hover:scale-[1.02] transition-transform"
            >
              Claim Free Site Visit
            </button>
            <a
              href="tel:+919884344075"
              className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all min-h-[46px]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Call 98843 44075
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
