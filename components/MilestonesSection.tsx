"use client";

import { motion } from "framer-motion";
import { Flag, CheckCircle2, Award, Calendar } from "lucide-react";
import { MILESTONES, COMPANY_NUMBERS } from "@/data/services";

export default function MilestonesSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#16143E]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar size={13} />
            <span>12 Years of Proven Local Excellence</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Milestones of Trust Since 2014
          </h2>
          <p
            className="text-[#16143E]/70 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            From our founding at Fire Station Road, Avadi to partnering with global surveillance & networking giants, our journey is built on continuous technical credentials and client satisfaction.
          </p>
        </div>

        {/* Numbers Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPANY_NUMBERS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/10 text-center hover:border-[#4E0DBA]/40 transition-colors shadow-xs"
            >
              <div
                className="text-3xl sm:text-4xl font-extrabold text-[#16143E] mb-1"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#EF1313] uppercase tracking-wider mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-[#16143E]/60 font-medium">{item.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Horizontal / Desktop Grid */}
        <div className="relative">
          {/* Central connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EF1313]/30 via-[#4E0DBA]/40 to-[#EF1313]/30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {MILESTONES.map((m, index) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                className="p-5 rounded-2xl bg-white border border-[#16143E]/12 hover:border-[#4E0DBA] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xl font-extrabold text-[#EF1313] group-hover:text-[#4E0DBA] transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {m.year}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4E0DBA] ring-4 ring-[#4E0DBA]/15" />
                  </div>
                  <h3
                    className="text-sm font-bold text-[#16143E] mb-1.5 leading-snug"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-xs text-[#16143E]/65 leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
