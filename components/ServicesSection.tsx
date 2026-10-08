"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Camera,
  Lock,
  Zap,
  Radio,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Network,
  Sparkles,
  Server,
} from "lucide-react";

interface SecuritySolution {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  category: "Residential" | "Commercial" | "Both";
  price?: string;
  badge?: string;
  desc: string;
  features: string[];
  pageUrl: string;
  ctaText: string;
  waText: string;
}

const SECURITY_SOLUTIONS: SecuritySolution[] = [
  {
    icon: Camera,
    title: "HD & 4K CCTV Surveillance Systems",
    category: "Both",
    price: "From ₹1,399",
    badge: "CP PLUS & Hikvision",
    desc: "End-to-end IP and HD camera installation for homes, retail stores, and commercial complexes with ColorVu 24/7 color night vision and zero-lag mobile viewing.",
    features: [
      "1080p to 4K resolution with color night vision",
      "Concealed conduit cabling & tamper-free routing",
      "Surveillance-grade WD Purple / Seagate SkyHawk storage",
      "Live remote monitoring on iPhone, Android & PC",
    ],
    pageUrl: "/security/cameras",
    ctaText: "Explore Cameras & Packages",
    waText: "Hi Broadnet, I am looking for CCTV surveillance installation in Avadi. Please provide a quotation.",
  },
  {
    icon: Zap,
    title: "Smart Video Door Phones (VDP)",
    category: "Residential",
    price: "From ₹3,999",
    badge: "Home Security",
    desc: "HD touchscreen door intercoms allowing you to screen callers, talk to delivery personnel, and release front gate latches from indoor panels or smartphones.",
    features: [
      "7-inch indoor color touchscreen display panel",
      "Wide-angle infrared night vision doorbell camera",
      "One-touch electronic gate latch release integration",
      "Visitor snapshot capture & tamper detection alarm",
    ],
    pageUrl: "/security/door-phones",
    ctaText: "Explore Video Door Phones",
    waText: "Hi Broadnet, I want to install a Video Door Phone system for my home in Avadi. Please share options and pricing.",
  },
  {
    icon: Lock,
    title: "Biometric Access Control & Attendance",
    category: "Commercial",
    price: "From ₹4,500",
    badge: "eSSL Authorized Partner",
    desc: "Contactless facial recognition and optical fingerprint door locks with automated payroll software integration for offices, clinics, and factories.",
    features: [
      "Sub-second (0.2s) contactless facial recognition scan",
      "Heavy-duty 600lbs electromagnetic drop-bolt door latch",
      "Automated attendance report generation & payroll sync",
      "Emergency battery backup operation during power outages",
    ],
    pageUrl: "/security/access-control",
    ctaText: "Explore Biometric Systems",
    waText: "Hi Broadnet, I am interested in Biometric Access Control for our office in Avadi. Please provide details.",
  },
  {
    icon: Shield,
    title: "Perimeter Alarms & Intrusion Detection",
    category: "Both",
    price: "From ₹6,999",
    badge: "Hikvision Certified",
    desc: "Active boundary wall defense with infrared photo-beam trip sensors, loud 110dB sirens, and automated GSM phone calls upon verified perimeter breach.",
    features: [
      "Laser photo-beam sensors along compound walls & gates",
      "GSM auto-dialer alerts your mobile phone during intrusion",
      "Pet-immune motion detectors preventing false triggers",
      "Seamless integration with existing CCTV camera setups",
    ],
    pageUrl: "/security/intrusion-alarms",
    ctaText: "Explore Intrusion Alarms",
    waText: "Hi Broadnet, I want to inquire about Perimeter Alarms and Intrusion Detection in Avadi.",
  },
];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Residential" | "Commercial">("All");
  const [arrived, setArrived] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    const handleArrival = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId: string }>;
      if (customEvent.detail?.targetId === "security" || customEvent.detail?.targetId === "services") {
        setArrived(true);
        setTimeout(() => setArrived(false), 3800);
      }
    };
    window.addEventListener("broadnet:section-arrived", handleArrival);
    return () => window.removeEventListener("broadnet:section-arrived", handleArrival);
  }, []);

  const filteredSolutions = SECURITY_SOLUTIONS.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter || item.category === "Both";
  });

  return (
    <section
      ref={ref}
      id="security"
      className={`py-24 sm:py-28 bg-[#0B091E] relative overflow-hidden transition-all duration-500 ${
        arrived ? "ring-2 ring-[#EF1313]/30 shadow-2xl shadow-[#EF1313]/15" : ""
      }`}
    >
      <span id="services" className="absolute -top-20" />

      {/* Subtle ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-[#EF1313]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[400px] bg-[#4E0DBA]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
            <span className="w-3 h-px bg-[#EF1313]" /> Integrated Security & ISP Infrastructure <span className="w-3 h-px bg-[#EF1313]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
            What An Integrated Security ISP Does For You
          </h2>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed font-body">
            By combining a high-bandwidth optical fiber backbone with certified electronic security hardware, Broadnet eliminates vendor finger-pointing. Your cameras stream at full bitrates with guaranteed &lt; 2-hour technician dispatch in Avadi.
          </p>

          {/* Value Props Bar */}
          <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mt-8 text-left">
            {[
              {
                icon: Network,
                title: "Fiber Backbone For 4K CCTV",
                desc: "Zero buffering on live feeds or cloud NVR loops",
              },
              {
                icon: Server,
                title: "Single-Window Accountability",
                desc: "One number for both internet & surveillance support",
              },
              {
                icon: Shield,
                title: "< 2-Hour Technician SLA",
                desc: "Direct local dispatch from Fire Station Road, Avadi",
              },
            ].map((prop) => (
              <div
                key={prop.title}
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EF1313]/15 text-[#EF1313] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <prop.icon size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white leading-snug">{prop.title}</h3>
                  <p className="text-[11px] text-white/55 leading-tight mt-0.5">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Category Filter */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {(["All", "Residential", "Commercial"] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center ${
                  activeFilter === filter
                    ? "bg-[#EF1313] text-white shadow-md shadow-[#EF1313]/30"
                    : "bg-white/5 text-white/60 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {filter === "All" ? "All Solutions" : filter === "Residential" ? "Homes & Villas" : "Offices & Commercial"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Security Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredSolutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-[#120F2E] border border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#EF1313]/40 hover:shadow-xl hover:shadow-[#EF1313]/10 group"
              >
                <div>
                  {/* Top Badge & Price */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-[#A78BFA] uppercase tracking-wider">
                      {sol.badge}
                    </span>
                    {sol.price && (
                      <span className="text-xs font-bold text-[#EF1313] bg-[#EF1313]/12 border border-[#EF1313]/25 px-2.5 py-0.5 rounded-md">
                        {sol.price}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#EF1313]/20 group-hover:border-[#EF1313]/35 text-[#EF1313] transition-colors">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#A78BFA] transition-colors font-display leading-snug">
                      {sol.title}
                    </h3>
                  </div>

                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    {sol.desc}
                  </p>

                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-white/8">
                    {sol.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[11px] text-white/75 leading-tight">
                        <CheckCircle2 size={12} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  <Link
                    href={sol.pageUrl}
                    className="w-full min-h-[42px] px-3.5 py-2.5 rounded-xl bg-[#EF1313] hover:bg-[#d60e0e] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href={`https://wa.me/919884344075?text=${encodeURIComponent(sol.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[38px] px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/10 transition-colors"
                  >
                    <MessageCircle size={13} className="text-emerald-400" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Solution Finder Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#211b54] to-[#16143E] border border-white/15 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EF1313]/20 border border-[#EF1313]/35 flex items-center justify-center text-[#EF1313] flex-shrink-0 mx-auto sm:mx-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Not Sure Which Security System Fits Your Property?
              </h3>
              <p className="text-xs sm:text-sm text-white/65 mt-1 leading-relaxed">
                Take our 3-question Interactive Solution Advisor. We will analyze your premises and recommend the ideal package.
              </p>
            </div>
          </div>
          <Link
            href="/security#solution-finder"
            className="flex-shrink-0 min-h-[44px] px-6 py-3 rounded-full bg-white text-[#16143E] hover:bg-white/90 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
          >
            <span>Launch Solution Finder</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
