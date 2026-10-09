"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Calculator, ShieldCheck } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import { CCTV_PACKAGES } from "@/data/site";
import { useLanguage } from "@/lib/i18n";

export default function PackagePricingTeaser() {
  const { lang, t } = useLanguage();

  // Teaser displays the 3 primary turnkey kits
  const teaserPackages = CCTV_PACKAGES.filter((p) =>
    ["home-starter-2", "popular-home-4", "society-enterprise-8"].includes(p.id)
  );

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#16143E]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Turnkey CCTV Pricing</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {lang === "ta" ? "சிசிடிவி தொகுப்பு கட்டணங்கள்" : "Transparent CCTV Package Packages"}
          </h2>
          <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
            Complete turnkey solutions with genuine cameras, surveillance HDD, DVR/NVR, power supply, concealed conduit cabling, and mobile app configuration.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teaserPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Configurator Teaser Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#24174D] to-[#16143E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
              <Calculator size={24} />
            </div>
            <div>
              <h4
                className="text-lg sm:text-xl font-bold"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Need a Custom Camera Count or Lens Setup?
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                Try our interactive cost calculator or request a custom site survey for gated apartments, factories, or commercial showrooms.
              </p>
            </div>
          </div>

          <Link
            href="/cctv-landing"
            className="btn-crimson text-xs sm:text-sm font-bold whitespace-nowrap glow-btn-crimson"
          >
            <span>Open CCTV System Configurator</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
