"use client";

import { Check, ShieldCheck, ArrowRight, MessageCircle, AlertCircle, Sparkles } from "lucide-react";
import { CCTVPackage, buildWhatsAppLink } from "@/data/site";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { trackEvent } from "@/lib/analytics";

interface PackageCardProps {
  pkg: CCTVPackage;
  onSelect?: (pkg: CCTVPackage) => void;
  showWhatIsIncluded?: boolean;
  variant?: "light" | "dark";
}

export default function PackageCard({
  pkg,
  onSelect,
  showWhatIsIncluded = true,
  variant = "light",
}: PackageCardProps) {
  const isPopular = pkg.popular;
  const isDark = variant === "dark";

  const handleBook = () => {
    trackEvent("package_click", { category: "PackageCard", label: pkg.name });
    if (onSelect) {
      onSelect(pkg);
    } else {
      const formEl = document.getElementById("enquiry") || document.getElementById("cctv-quote-form");
      if (formEl) {
        scrollToWithPhysics(formEl.id);
      } else {
        window.location.href = `/cctv-landing#cctv-quote-form`;
      }
    }
  };

  const waLink = buildWhatsAppLink({
    text: `Hello Broadnet, I am interested in the ${pkg.name} (${pkg.price}). Please share details and schedule a free site survey.`,
  });

  return (
    <div
      className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
        isDark
          ? isPopular
            ? "bg-[#16143E] border-2 border-[#EF1313] shadow-2xl shadow-[#EF1313]/25"
            : "bg-[#120F2E] border-white/10 hover:border-white/25 shadow-lg"
          : isPopular
            ? "bg-white border-[#EF1313] shadow-xl hover:shadow-2xl ring-2 ring-[#EF1313]/20"
            : "bg-white border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-lg"
      }`}
    >
      {/* Popular / Highlight Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span
            className={`px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1 ${
              isPopular
                ? "bg-[#EF1313] text-white shadow-[#EF1313]/30"
                : isDark
                  ? "bg-[#4E0DBA] text-white"
                  : "bg-[#16143E] text-white"
            }`}
          >
            <Sparkles size={11} />
            <span>{pkg.badge}</span>
          </span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-4 pt-1">
          <h3
            className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug ${
              isDark ? "text-white" : "text-[#16143E]"
            }`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {pkg.name}
          </h3>
          <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${isDark ? "text-white/65" : "text-[#16143E]/65"}`}>
            {pkg.tagline}
          </p>
        </div>

        {/* Pricing */}
        <div
          className={`p-4 rounded-2xl mb-5 border ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-[#F8F9FD] border-[#16143E]/6"
          }`}
        >
          <div className="flex items-baseline gap-1.5">
            <span
              className={`text-3xl sm:text-4xl font-extrabold ${
                isDark ? "text-white" : "text-[#16143E]"
              }`}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {pkg.price}
            </span>
          </div>
          <span
            className={`text-[11.5px] font-medium block mt-0.5 ${
              isDark ? "text-white/60" : "text-[#16143E]/60"
            }`}
          >
            {pkg.unit}
          </span>
        </div>

        {/* Core Specs Pills */}
        <div
          className={`flex flex-wrap gap-1.5 mb-5 text-[11px] font-semibold ${
            isDark ? "text-white/80" : "text-[#16143E]/80"
          }`}
        >
          <span
            className={`px-2.5 py-1 rounded-lg border ${
              isDark ? "bg-white/5 border-white/10 text-white/85" : "bg-[#16143E]/5 border-[#16143E]/8"
            }`}
          >
            📹 {pkg.resolution}
          </span>
          <span
            className={`px-2.5 py-1 rounded-lg border ${
              isDark ? "bg-white/5 border-white/10 text-white/85" : "bg-[#16143E]/5 border-[#16143E]/8"
            }`}
          >
            💾 {pkg.storage}
          </span>
          <span
            className={`px-2.5 py-1 rounded-lg border ${
              isDark ? "bg-white/5 border-white/10 text-white/85" : "bg-[#16143E]/5 border-[#16143E]/8"
            }`}
          >
            ⚡ {pkg.dvrChannels}
          </span>
        </div>

        {/* Key Features */}
        <div className="space-y-2 mb-6">
          <span
            className={`text-[11px] font-black uppercase tracking-wider block ${
              isDark ? "text-white/50" : "text-[#16143E]/50"
            }`}
          >
            Package Inclusions
          </span>
          {pkg.features.map((feat) => (
            <div
              key={feat}
              className={`flex items-start gap-2 text-xs sm:text-[13px] ${
                isDark ? "text-white/80" : "text-[#16143E]/80"
              }`}
            >
              <Check size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* "What's Included" Breakdown Box */}
        {showWhatIsIncluded && pkg.included && (
          <div
            className={`mb-6 p-3.5 rounded-2xl border text-xs space-y-2 ${
              isDark
                ? "bg-white/[0.04] border-[#EF1313]/25 text-white/85"
                : "bg-[#FFF9F9] border-[#EF1313]/15 text-[#16143E]/85"
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold text-[#EF1313] text-[11.5px] uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>What&apos;s Included & Terms</span>
            </div>
            <div
              className={`space-y-1.5 text-[11px] leading-relaxed ${
                isDark ? "text-white/75" : "text-[#16143E]/75"
              }`}
            >
              <div>
                <strong className={isDark ? "text-white" : "text-[#16143E]"}>Wiring Included:</strong>{" "}
                {pkg.included.wiringMeters > 0
                  ? `${pkg.included.wiringMeters} metres conduit cabling`
                  : "Per custom survey"}
              </div>
              <div>
                <strong className={isDark ? "text-white" : "text-[#16143E]"}>Extra Cabling:</strong>{" "}
                {pkg.included.extraWiringCost}
              </div>
              <div>
                <strong className={isDark ? "text-white" : "text-[#16143E]"}>GST:</strong>{" "}
                {pkg.included.gstNote}
              </div>
              <div>
                <strong className={isDark ? "text-white" : "text-[#16143E]"}>Warranty:</strong>{" "}
                {pkg.included.warranty}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div
        className={`space-y-2 pt-2 border-t ${
          isDark ? "border-white/10" : "border-[#16143E]/8"
        }`}
      >
        <button
          type="button"
          onClick={handleBook}
          className={`w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
            isPopular
              ? "btn-crimson glow-btn-crimson"
              : isDark
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-[#16143E] hover:bg-[#25225E] text-white"
          }`}
        >
          <span>{pkg.ctaText}</span>
          <ArrowRight size={14} />
        </button>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { category: "PackageCard", label: pkg.name })}
          className={`w-full py-2.5 px-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 border transition-colors ${
            isDark
              ? "bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] border-[#25D366]/40"
              : "bg-[#25D366]/12 hover:bg-[#25D366]/20 text-[#15803d] border-[#25D366]/30"
          }`}
        >
          <MessageCircle size={14} className={isDark ? "text-[#4ade80]" : "text-[#25D366]"} />
          <span>WhatsApp Inquiry</span>
        </a>
      </div>
    </div>
  );
}
