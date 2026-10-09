"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { getFaqPageJsonLd } from "@/lib/jsonLd";
import { useLanguage } from "@/lib/i18n";

export const HOME_FAQS = [
  {
    q: "Do you offer free on-site inspections for CCTV in Avadi and Chennai?",
    a: "Yes, 100% free with zero obligation. Our certified security engineer visits your property (villa, apartment, factory, or shop) to assess viewing angles, eliminate blind spots, calculate conduit cabling runs, and provide a transparent itemized quotation.",
  },
  {
    q: "How fast is your technician dispatch SLA if an issue occurs?",
    a: "Because our headquarters and technical team are based directly at 1093 Fire Station Road, TNHB, Avadi, we guarantee < 2-hour technician response in Avadi and same-day priority dispatch across Chennai.",
  },
  {
    q: "Are the cameras and hardware authentic with manufacturer warranty?",
    a: "Yes, Broadnet is an authorized Hikvision and CP PLUS partner. We unbox original sealed boxes on your premises, hand over serial-numbered warranty certificates, and provide direct RMA replacement support.",
  },
  {
    q: "What is included in the CCTV packages? Are there hidden wiring charges?",
    a: "Our packages include cameras, DVR/NVR, surveillance HDD, power supply, mobile app sync, and dedicated conduit cabling (e.g., 40m for 2-camera, 90m for 4-camera). If your property requires extra cabling, it is charged transparently at ₹35/metre without surprises.",
  },
  {
    q: "Where is Broadnet fiber internet available?",
    a: "Fiber broadband is delivered across Avadi and nearby areas (TNHB Avadi, Thirumullaivoyal, Pattabiram, Paruthipattu, Cholambedu, etc.) powered by our private 100+ km optical fiber backbone and RailWire/BSNL partnerships.",
  },
];

export default function HomeFaqSection() {
  const { lang, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqJsonLd = getFaqPageJsonLd(HOME_FAQS);

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#16143E]/8 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {lang === "ta" ? "அடிக்கடி கேட்கப்படும் கேள்விகள்" : "Frequently Asked Questions"}
          </h2>
          <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
            Clear answers about our site visits, pricing, warranties, and technician response times.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5 mb-10">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#16143E]/10 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAFE] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bold text-sm sm:text-base text-[#16143E]"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#16143E]/60 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#EF1313]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#16143E]/75 leading-relaxed border-t border-[#16143E]/6 pt-4 bg-[#FAFAFE]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help prompt */}
        <div className="text-center p-6 rounded-2xl bg-[#F8F9FD] border border-[#16143E]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm text-[#16143E]/80">
            <strong>Have a specific property question?</strong> Chat directly with our technical team in Avadi.
          </div>
          <a
            href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#15803d] text-xs font-bold flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <MessageCircle size={15} className="text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
