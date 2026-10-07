"use client";

import Link from "next/link";

interface BroadnetLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showStrapline?: boolean;
}

export default function BroadnetLogo({
  variant = "light",
  className = "",
  showStrapline = true,
}: BroadnetLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4E0DBA] rounded-xl transition-transform active:scale-[0.98] ${className}`}
      aria-label="Broadnet Internet & Security Services - Home"
    >
      {/* Broadcast Tower Icon Mark */}
      <div
        className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all duration-300 ${
          isDark
            ? "bg-white/10 border border-white/15 text-[#A78BFA] group-hover:bg-white/15 group-hover:scale-105"
            : "bg-[#4E0DBA]/10 border border-[#4E0DBA]/20 text-[#4E0DBA] group-hover:bg-[#4E0DBA] group-hover:text-white group-hover:scale-105 shadow-sm"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-5.5 sm:h-5.5"
        >
          {/* Tower legs & mast */}
          <path d="M12 2v20" />
          <path d="M7 22l5-14 5 14" />
          <path d="M9 16h6" />
          {/* Broadcast wave rings */}
          <path d="M8 8a5.5 5.5 0 0 1 8 0" strokeDasharray="1 0" />
          <path d="M5.5 5.5a9 9 0 0 1 13 0" />
          {/* Crown pulse dot */}
          <circle cx="12" cy="3" r="1.2" fill="currentColor" />
        </svg>
      </div>

      {/* Wordmark and Strapline */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline font-display font-extrabold tracking-tight text-xl sm:text-2xl leading-none">
          <span className="text-[#EF1313]">BROAD</span>
          <span className={isDark ? "text-[#C084FC]" : "text-[#4E0DBA]"}>NET</span>
        </div>
        {showStrapline && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.16em] uppercase mt-0.5 leading-none transition-colors ${
              isDark ? "text-white/70" : "text-[#16143E]/75"
            }`}
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            INTERNET <span className="text-[#EF1313] mx-0.5">|</span> CCTV <span className="text-[#EF1313] mx-0.5">|</span> NETWORK
          </span>
        )}
      </div>
    </Link>
  );
}
