"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { COMPANY_NUMBERS } from "@/data/services";

export default function HeroSection() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % COMPANY_NUMBERS.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-24 sm:pt-28 pb-16 bg-white text-[#16143E] scroll-mt-24"
    >
      {/* Background Subtle Geometric Grid & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(78,13,186,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(78,13,186,0.035) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(78,13,186,0.055) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(239,19,19,0.04) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center w-full">
        {/* Social Proof Trust Ribbon Above the Fold */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16143E]/[0.03] border border-[#16143E]/10 backdrop-blur-sm shadow-xs">
            <div className="flex items-center text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-[#F59E0B]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#16143E]">4.9/5 Rating</span>
            <span className="text-xs text-[#16143E]/40">·</span>
            <span className="text-xs font-semibold text-[#16143E]/80">12 Years Operating in Avadi</span>
            <span className="text-xs text-[#16143E]/40">·</span>
            <span className="text-xs font-bold text-[#EF1313]">Team of 10+</span>
          </div>
        </motion.div>

        {/* Company Slogan & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-4"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#4E0DBA] block mb-1">
            Connecting People · Securing Places · Managing Access
          </span>
          <div className="inline-block px-3 py-0.5 rounded-md bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold">
            Lead Division: “We Secure What Matters Most”
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight mb-5 text-[#16143E] max-w-4xl"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Engineered <span className="text-[#EF1313]">Surveillance.</span>
          <br className="hidden sm:inline" />
          Intelligent <span className="text-[#4E0DBA]">Security.</span>
        </motion.h1>

        {/* Value Proposition Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#16143E]/75 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto font-medium"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Broadnet delivers certified CCTV surveillance, biometric time attendance, video door phones, and enterprise network infrastructure across Chennai — with guaranteed &lt; 2-hour technician dispatch in Avadi.
        </motion.p>

        {/* Focused CTAs: Headline "Get Free Site Visit & Quote" + Direct Phone Number */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 w-full max-w-lg sm:max-w-none"
        >
          {/* Primary CTA: Free Site Visit */}
          <button
            type="button"
            onClick={() => scrollToWithPhysics("enquiry")}
            className="btn-crimson min-h-[50px] px-8 text-sm sm:text-base justify-center shadow-xl shadow-[#EF1313]/25 hover:shadow-[#EF1313]/40 transition-all duration-300 group cursor-pointer"
          >
            <span>Get Free Site Visit & Quote</span>
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Phone Number Call Link */}
          <a
            href="tel:+919884344075"
            className="min-h-[50px] px-7 rounded-full border-2 border-[#16143E]/15 hover:border-[#16143E] text-xs sm:text-sm font-bold text-[#16143E] bg-white/90 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <Phone size={16} className="text-[#EF1313]" />
            <span>Call 98843 44075</span>
          </a>

          {/* WhatsApp Instant Quote */}
          <a
            href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20and%20schedule%20a%20site%20visit."
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] px-5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#15803d] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </motion.div>

        {/* Free Site Visit Repeat Banner Above the Fold */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EF1313]/5 border border-[#EF1313]/15 text-xs text-[#16143E] font-medium mb-10"
        >
          <Sparkles size={13} className="text-[#EF1313]" />
          <span><strong>100% Free On-Site Inspection:</strong> No obligation quote for homes, apartments & offices across Chennai.</span>
        </motion.div>

        {/* Dynamic Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {COMPANY_NUMBERS.map((m, i) => (
            <div
              key={m.label}
              className={`p-4 rounded-2xl border transition-all duration-300 backdrop-blur-sm text-center ${
                tick === i
                  ? "border-[#4E0DBA]/40 bg-[#4E0DBA]/[0.05] shadow-md shadow-[#4E0DBA]/5"
                  : "border-[#16143E]/10 bg-white/90 shadow-2xs"
              }`}
            >
              <div
                className="text-2xl sm:text-3xl font-extrabold text-[#16143E] mb-0.5"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {m.value}
              </div>
              <div
                className="text-[11px] sm:text-xs text-[#16143E]/80 font-bold uppercase tracking-wider"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {m.label}
              </div>
              <div
                className="text-[10px] sm:text-[11px] text-[#EF1313] font-semibold mt-0.5"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {m.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-8 flex flex-col items-center gap-1 text-[#16143E]/30 z-20">
        <span className="text-[10px] tracking-widest uppercase font-bold">
          Explore Services
        </span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}