"use client";

import { Phone, MessageCircle, Send } from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick Mobile Contact Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 py-2 bg-white/95 backdrop-blur-xl border-t border-[#16143E]/12 shadow-[0_-8px_30px_rgba(22,20,62,0.14)]"
      style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* 1. Direct Call */}
        <a
          href="tel:+919884344075"
          className="flex flex-col items-center justify-center min-h-[46px] py-1.5 px-1 rounded-xl bg-[#16143E]/5 hover:bg-[#16143E]/10 border border-[#16143E]/10 text-[#16143E] active:scale-95 transition-all text-center"
        >
          <Phone size={16} className="text-[#EF1313] mb-0.5" />
          <span className="text-[11px] font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
            Call Now
          </span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20your%20services%20and%20get%20a%20free%20site%20visit."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[46px] py-1.5 px-1 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#16143E] active:scale-95 transition-all text-center"
        >
          <MessageCircle size={16} className="text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-bold text-[#15803d]" style={{ fontFamily: "Syne, sans-serif" }}>
            WhatsApp
          </span>
        </a>

        {/* 3. Free Quote / Site Visit */}
        <button
          type="button"
          onClick={() => {
            if (document.getElementById("enquiry")) {
              scrollToWithPhysics("enquiry");
            } else if (document.getElementById("cctv-quote-form")) {
              scrollToWithPhysics("cctv-quote-form");
            } else {
              window.location.href = "/contact#enquiry";
            }
          }}
          className="flex flex-col items-center justify-center min-h-[46px] py-1.5 px-1 rounded-xl bg-[#EF1313] hover:bg-[#d81010] text-white shadow-md shadow-[#EF1313]/30 active:scale-95 transition-all text-center cursor-pointer"
        >
          <Send size={15} className="text-white mb-0.5" />
          <span className="text-[11px] font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
            Free Quote
          </span>
        </button>
      </div>
    </aside>
  );
}
