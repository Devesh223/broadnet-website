"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Check,
  Zap,
  Clock,
  ChevronRight,
  Phone,
  FileCheck,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

const STEPS = [
  {
    step: "01",
    title: "Enquiry",
    short: "Share your requirements via WhatsApp, phone, or our online form.",
    desc: "Speak directly with our technical team in Avadi. We assess your premise type (villa, apartment, factory, office) and recommend immediate options.",
    deliverables: ["Direct WhatsApp consultation", "Immediate requirement questionnaire", "< 15 Min response time"],
    turnaround: "< 15 Mins",
    icon: MessageSquare,
    badge: "Instant Response",
    color: "#4E0DBA",
    highlight: false,
  },
  {
    step: "02",
    title: "Site Visit",
    short: "100% FREE in-person assessment across Chennai to inspect angles & cable paths.",
    desc: "Our senior engineer visits your location at zero cost. We map camera blind spots, measure cable runs, assess lighting conditions for ColorVu vs IR, and inspect power backup points.",
    deliverables: ["Zero obligation site inspection", "Camera viewing angle mapping", "Concealed cable pathway planning"],
    turnaround: "Same-Day / 24 Hours",
    icon: MapPin,
    badge: "100% FREE",
    highlight: true,
    color: "#EF1313",
  },
  {
    step: "03",
    title: "Quotation",
    short: "Transparent, itemized proposal with genuine Hikvision / CP PLUS hardware.",
    desc: "You receive an official itemized quotation breaking down every camera model, NVR channel, WD Purple surveillance hard drive, Cat6 cable gauge, and conduit piping costs.",
    deliverables: ["Itemized hardware bill of materials", "Genuine manufacturer warranties", "Zero hidden or surprise fees"],
    turnaround: "Within 2 Hours",
    icon: FileText,
    badge: "Zero Hidden Fees",
    color: "#4E0DBA",
    highlight: false,
  },
  {
    step: "04",
    title: "Installation",
    short: "Concealed conduit piping, neat rack cabling, and precision camera mounting.",
    desc: "Certified technicians install your security system with heavy-duty PVC casing/pipes, punch-down patch panels, RJ45 crimping, and calibrated camera focal angles.",
    deliverables: ["Concealed wiring & neat aesthetic finish", "Dust-free wall drilling", "Official brand hardware unboxing on-site"],
    turnaround: "Scheduled to Suit You",
    icon: Wrench,
    badge: "Certified Techs",
    color: "#EF1313",
    highlight: false,
  },
  {
    step: "05",
    title: "Testing & Handover",
    short: "Live mobile viewing setup, NVR recording verification, and complete training.",
    desc: "We configure Hik-Connect or CP PLUS gCMOB on all family/staff smartphones, calibrate motion detection zones, test 2-way audio, and train your staff thoroughly.",
    deliverables: ["Smartphone remote viewing configured", "Motion alert sensitivity calibration", "Complete user training & admin credentials handed over"],
    turnaround: "Same-Day Handover",
    icon: CheckCircle2,
    badge: "Quality Passed",
    color: "#4E0DBA",
    highlight: false,
  },
  {
    step: "06",
    title: "AMC / Support",
    short: "Rapid <2-hour local dispatch, annual maintenance, and warranty assistance.",
    desc: "Never worry about downtime. Our Avadi-based support desk provides prompt camera cleaning, hard disk health checks, firmware updates, and immediate on-site dispatch.",
    deliverables: ["Guaranteed < 2-hour emergency dispatch", "Periodic camera lens & NVR health checks", "Hassle-free warranty RMA replacement support"],
    turnaround: "< 2-Hour SLA",
    icon: Headphones,
    badge: "2-Hr Local SLA",
    color: "#EF1313",
    highlight: false,
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1); // Default to Step 2 (Site Visit)

  const current = STEPS[activeStep];
  const IconComponent = current.icon;

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAFAFE] border-y border-[#16143E]/8 relative overflow-hidden scroll-mt-20">
      {/* Background ambient accents */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4E0DBA 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full bg-[#EF1313]/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full bg-[#4E0DBA]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 border border-[#EF1313]/20 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Our 6-Step Implementation Roadmap</span>
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
            We eliminate guesswork with an engineering-first workflow. Enjoy transparent pricing, certified workmanship, and our signature{" "}
            <strong className="text-[#EF1313] font-bold">100% Free On-Site Inspection</strong> across Chennai.
          </p>
        </div>

        {/* 6-Step Interactive Tabs Bar */}
        <div className="relative mb-10">
          {/* Subtle connected track line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#4E0DBA]/20 via-[#EF1313]/30 to-[#4E0DBA]/20 z-0 pointer-events-none" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {STEPS.map((item, index) => {
              const StepIcon = item.icon;
              const isSelected = activeStep === index;

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-left transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? "bg-white border-2 border-[#EF1313] shadow-xl shadow-[#EF1313]/15 ring-4 ring-[#EF1313]/10 scale-[1.03]"
                      : "bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-md"
                  }`}
                >
                  {/* Step number badge & Step Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-black tracking-widest transition-colors ${
                          isSelected
                            ? "text-[#EF1313]"
                            : item.highlight
                            ? "text-[#EF1313]"
                            : "text-[#16143E]/40 group-hover:text-[#4E0DBA]"
                        }`}
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        STEP {item.step}
                      </span>
                      <span
                        className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected || item.highlight
                            ? "bg-[#EF1313] text-white shadow-xs"
                            : "bg-[#16143E]/5 text-[#16143E]/70 border border-[#16143E]/10"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        isSelected
                          ? "bg-[#EF1313] text-white shadow-md shadow-[#EF1313]/30 scale-105"
                          : "bg-[#4E0DBA]/10 text-[#4E0DBA] group-hover:bg-[#4E0DBA] group-hover:text-white"
                      }`}
                    >
                      <StepIcon size={20} />
                    </div>

                    <h3
                      className={`text-base font-bold mb-1 leading-snug transition-colors ${
                        isSelected ? "text-[#EF1313]" : "text-[#16143E] group-hover:text-[#4E0DBA]"
                      }`}
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-[11.5px] text-[#16143E]/65 leading-relaxed line-clamp-2"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {item.short}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#16143E]/5 flex items-center justify-between text-[10.5px] text-[#16143E]/50 font-semibold">
                    <span className="flex items-center gap-1">
                      <Clock size={11} className={isSelected ? "text-[#EF1313]" : "text-[#16143E]/40"} />
                      <span>{item.turnaround}</span>
                    </span>
                    <span className={`text-[10px] font-bold ${isSelected ? "text-[#EF1313]" : "text-[#4E0DBA]"}`}>
                      {isSelected ? "Active" : "Details →"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Expanded View of Selected Step */}
        <div className="mb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-6 sm:p-9 border border-[#16143E]/12 shadow-xl relative overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold font-mono">
                      STEP {current.step} OF 06
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold">
                      Turnaround: {current.turnaround}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold">
                      {current.badge}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#16143E] mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {current.title}: Step-by-Step Execution
                  </h3>

                  <p
                    className="text-[#16143E]/80 text-sm sm:text-base leading-relaxed mb-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {current.desc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#16143E]/50">
                      Guaranteed Deliverables in this Step:
                    </div>
                    {current.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#16143E]/85">
                        <CheckCircle2 size={16} className="text-[#EF1313] flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => scrollToWithPhysics("enquiry")}
                      className="btn-crimson min-h-[46px] px-6 text-xs sm:text-sm font-bold justify-center cursor-pointer glow-btn-crimson"
                    >
                      <span>Claim Free Site Visit Now</span>
                      <ArrowRight size={15} />
                    </button>
                    <a
                      href="tel:+919884344075"
                      className="px-5 py-2.5 rounded-full border border-[#16143E]/20 hover:border-[#16143E] text-xs sm:text-sm font-bold text-[#16143E] flex items-center gap-2 transition-colors min-h-[46px]"
                    >
                      <Phone size={14} className="text-[#EF1313]" />
                      <span>Call Tech Desk: 98843 44075</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-[#16143E] to-[#251545] rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-lg border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-white/60">Quality Checkpoint</div>
                        <div className="text-sm font-bold">{current.title} Protocol</div>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                      100% VERIFIED
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4 text-xs sm:text-[13px] text-white/80 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#EF1313] font-bold">✓</span>
                      <span>Certified engineers with Hikvision HCSA & CP PLUS credentials.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#EF1313] font-bold">✓</span>
                      <span>Heavy-duty UV-stabilized conduit pipes and authentic Cat6 cables.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#EF1313] font-bold">✓</span>
                      <span>Zero charges if you choose not to proceed after the site survey.</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                    <span className="text-white/60">Need Next Step?</span>
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
                      className="text-white font-bold hover:text-[#EF1313] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Next Step</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Free Site Visit High-Impact Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#241247] to-[#16143E] text-white shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF1313]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 text-center md:text-left relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#EF1313] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#EF1313]/40">
              <ShieldCheck size={30} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] tracking-wider uppercase mb-1">
                <Sparkles size={12} /> Step 02 is Completely Complimentary
              </div>
              <h4
                className="text-xl sm:text-2xl font-bold tracking-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Book Your Free On-Site Security & Network Audit
              </h4>
              <p className="text-white/75 text-xs sm:text-sm mt-1 max-w-xl">
                Our certified technician visits your property in Avadi or anywhere across Chennai, checks camera viewing angles, calculates storage capacity, and provides a clear itemized quote with zero obligation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
            <button
              type="button"
              onClick={() => scrollToWithPhysics("enquiry")}
              className="btn-crimson min-h-[46px] px-7 text-sm font-bold justify-center whitespace-nowrap cursor-pointer glow-btn-crimson"
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
