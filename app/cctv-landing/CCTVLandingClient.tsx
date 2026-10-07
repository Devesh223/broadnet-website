"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Camera,
  Star,
  CheckCircle2,
  HardDrive,
  Eye,
  Sliders,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Send,
  Check,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

const CCTV_PACKAGES = [
  {
    name: "2-Camera Home Starter",
    desc: "Perfect for independent houses, duplex homes & small retail counters.",
    price: "₹8,499",
    savings: "Free On-Site Survey Included",
    features: [
      "2x 2MP Full HD Cameras (Indoor Dome + Outdoor Bullet)",
      "4-Channel High Definition DVR / XVR",
      "500GB Surveillance-Grade Storage Hard Disk",
      "Up to 40m Heavy-Duty Copper Coaxial Cabling",
      "Power Supply SMPS & Water-Resistant Junction Boxes",
      "Live Mobile Viewing App Setup on Android & iPhone",
      "1-Year Comprehensive On-Site Warranty",
    ],
    popular: false,
    recommendedFor: "Villas & Small Shops",
  },
  {
    name: "4-Camera Popular Security Kit",
    desc: "Our #1 best-selling setup for complete residential compound & shop coverage.",
    price: "₹14,999",
    badge: "Most Popular",
    savings: "Best Value · Free Site Survey",
    features: [
      "4x 2MP or 3MP ColorVu / Full-Color Night Vision Cameras",
      "4-Channel Smart Audio DVR with Built-in Mic Support",
      "1TB WD Purple / Seagate SkyHawk Surveillance HDD",
      "Up to 90m Precision Conduit Routing & Cabling",
      "Full Tamper-Proof Enclosure & Power Distribution",
      "Remote Notification Alerts on Perimeter Motion",
      "2-Year Manufacturer Warranty + 1-Year Broadnet On-Site AMC",
    ],
    popular: true,
    recommendedFor: "Independent Homes & Offices",
  },
  {
    name: "8-Camera Society & Enterprise",
    desc: "Engineered for gated communities, apartments, warehouses, and schools.",
    price: "₹28,999",
    savings: "Heavy-Duty IP / HD Setup",
    features: [
      "8x 3MP / 5MP IP Network or HD High-Res Cameras",
      "8-Channel Network Video Recorder (NVR) / HD DVR",
      "2TB Surveillance Hard Drive (15-20 Days Recording)",
      "High-Speed Gigabit PoE Switch & Cat6 Shielded Cabling",
      "Smart Dual-Light IR + Warm LED for Night Intruders",
      "Multi-User Access (Guard Cabin + Association President)",
      "Dedicated Technician Dispatch & Free Bi-Monthly Maintenance",
    ],
    popular: false,
    recommendedFor: "Apartments & Factories",
  },
  {
    name: "Commercial & Custom AMC",
    desc: "Tailored multi-location enterprise surveillance, ANPR plate cameras & cloud backup.",
    price: "Custom Estimate",
    savings: "100% Tailored Engineering",
    features: [
      "16 to 64+ Channel 4K IP Surveillance with PTZ 360° Tracking",
      "ANPR / OCR Automated Vehicle Number Plate Recognition",
      "Off-Site Cloud Video Backup & Redundant Storage RAID",
      "Server Rack Integration, Optical Fiber Splicing & Patch Panels",
      "Centralized Command Center / Multi-Monitor Video Wall Setup",
      "Custom SLA AMC Contract with 2-Hour Response Time Guarantee",
    ],
    popular: false,
    recommendedFor: "Commercial Parks & Institutions",
  },
];

const REVIEWS = [
  {
    name: "Karthik Rajagopalan",
    location: "TNHB Avadi",
    comment:
      "Installed a 4-camera Hikvision ColorVu system for our villa. The night clarity is outstanding and their technicians completed neat concealed cabling without damaging our walls. Highly recommended in Avadi!",
    stars: 5,
    tag: "Residential Installation",
  },
  {
    name: "Dr. Senthil Kumar",
    location: "Thirumullaivoyal",
    comment:
      "Broadnet setup IP cameras and biometric attendance for our clinic. The mobile app gives crystal clear live view with audio. Prompt service and genuine bills.",
    stars: 5,
    tag: "Commercial & Biometrics",
  },
  {
    name: "Venkatesh Prasad",
    location: "Pattabiram",
    comment:
      "They gave a free site visit within 2 hours of calling 9884344075. Very transparent quote with no surprise charges. Excellent support whenever we need DVR assistance.",
    stars: 5,
    tag: "Quick Dispatch & AMC",
  },
];

const FAQS = [
  {
    q: "What is included in the Free Site Visit?",
    a: "Our certified CCTV engineer visits your premises anywhere in Chennai (with priority in Avadi, Pattabiram, Thirumullaivoyal, etc.) to assess coverage angles, identify blind spots, calculate necessary cable footage, and provide an exact, itemized quotation with zero obligation.",
  },
  {
    q: "Can I view the cameras live on my mobile phone when away?",
    a: "Yes! Every CCTV package includes free mobile application configuration on your Android phone, iPhone, iPad, or laptop. You can monitor live views, play back past footage, and receive push notifications from anywhere in the world.",
  },
  {
    q: "What is the difference between IP and HD cameras?",
    a: "HD (Analog HD/TVI) cameras use coaxial cable and offer fantastic 1080p to 5MP clarity at economical prices. IP (Network) cameras connect via Cat6 ethernet cables, offer ultra-high resolutions up to 4K, smart AI human/vehicle detection, and plug-and-play scalability.",
  },
  {
    q: "Do you provide CCTV Annual Maintenance Contracts (AMC)?",
    a: "Yes! We manage CCTV AMC contracts for apartments, commercial stores, factories, and schools across Chennai with guaranteed 2-hour technician dispatch, regular camera cleaning, and NVR health checks.",
  },
];

export default function CCTVLandingClient() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    locality: "",
    buildingType: "Home / Villa",
    requirement: "4-Camera Setup",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg("Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          location: form.locality,
          enquiryType: "CCTV Landing Lead",
          requirements: [`${form.requirement} (${form.buildingType})`],
          message: `Building Type: ${form.buildingType} | Locality: ${form.locality} | Package/Req: ${form.requirement}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            event_category: "CCTV_Landing",
            event_label: form.requirement,
          });
        }
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Failed to submit enquiry. Please call us directly.");
      }
    } catch {
      setErrorMsg("Something went wrong. Please call us at 98843 44075.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-[#16143E]">
      {/* 1. Hero Above the Fold */}
      <section className="relative pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-[#FFF5F5] via-white to-white overflow-hidden border-b border-[#16143E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Top Trust Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>Lead Surveillance Division · 12 Years in Avadi</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold">
              <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
              <span>4.9/5 Rating (500+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Instant Dispatch Buttons */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#16143E] tracking-tight leading-[1.1] mb-5"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                We Secure <br className="hidden sm:inline" />
                <span className="text-[#EF1313]">What Matters Most.</span>
              </h1>
              <p
                className="text-[#16143E]/75 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-medium"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Certified Hikvision & CP PLUS CCTV camera sales, professional conduit installation, and 24/7 surveillance maintenance for homes, apartments, and businesses across Avadi & Chennai.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => scrollToWithPhysics("cctv-quote-form")}
                  className="btn-crimson min-h-[50px] px-8 text-sm sm:text-base justify-center shadow-xl shadow-[#EF1313]/25 hover:shadow-[#EF1313]/40 cursor-pointer"
                >
                  <span>Get Free Site Visit & Quote</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href="tel:+919884344075"
                  className="min-h-[50px] px-6 rounded-full border-2 border-[#16143E]/15 hover:border-[#16143E] text-sm sm:text-base font-bold text-[#16143E] bg-white flex items-center justify-center gap-2 transition-all shadow-sm"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <Phone size={17} className="text-[#EF1313]" />
                  <span>Call 98843 44075</span>
                </a>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#16143E]/10 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/80">
                  <CheckCircle2 size={16} className="text-[#EF1313] flex-shrink-0" />
                  <span>Free Site Visit in 2 Hrs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/80">
                  <CheckCircle2 size={16} className="text-[#EF1313] flex-shrink-0" />
                  <span>Genuine 2-Yr Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/80">
                  <CheckCircle2 size={16} className="text-[#EF1313] flex-shrink-0" />
                  <span>Full-Color Night Vision</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Quote Box Above the Fold */}
            <div id="cctv-quote-form" className="lg:col-span-5 scroll-mt-28">
              <div className="rounded-3xl bg-white border-2 border-[#EF1313]/30 p-7 sm:p-8 shadow-2xl relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles size={12} /> Free Site Survey Offer
                </div>
                <h3
                  className="text-2xl font-bold text-[#16143E] mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Request Fast CCTV Quotation
                </h3>
                <p className="text-xs text-[#16143E]/60 mb-6">
                  Our engineer will inspect your property and provide an exact estimate.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                    <CheckCircle2 size={40} className="text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-lg font-bold text-emerald-900 mb-1">
                      Enquiry Received!
                    </h4>
                    <p className="text-xs text-emerald-700 mb-4 leading-relaxed">
                      Thank you, {form.name}! Our senior CCTV technician will call you at{" "}
                      <strong>{form.phone}</strong> within 15 minutes to confirm your site visit.
                    </p>
                    <a
                      href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20just%20submitted%20the%20CCTV%20quote%20request."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {errorMsg && (
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle size={14} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98843 44075"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                          Locality / Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Avadi, Pattabiram"
                          value={form.locality}
                          onChange={(e) => setForm({ ...form, locality: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                          Building Type
                        </label>
                        <select
                          value={form.buildingType}
                          onChange={(e) => setForm({ ...form, buildingType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all bg-white"
                        >
                          <option>Home / Villa</option>
                          <option>Apartment Society</option>
                          <option>Office / Commercial</option>
                          <option>Factory / Warehouse</option>
                          <option>School / College</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                        Requirement / Camera Count
                      </label>
                      <select
                        value={form.requirement}
                        onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all bg-white"
                      >
                        <option>2-Camera Starter Setup</option>
                        <option>4-Camera Popular Kit (Full Color)</option>
                        <option>8-Camera Commercial Setup</option>
                        <option>16+ Camera IP / Society Setup</option>
                        <option>CCTV AMC / Repair Service</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-crimson justify-center py-3 text-sm font-bold shadow-lg shadow-[#EF1313]/25 mt-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending Request..." : "Request Free On-Site Inspection"}
                    </button>

                    <p className="text-[11px] text-[#16143E]/50 text-center pt-1">
                      🔒 No spam. Sent directly to <span className="font-semibold">admin@broadnet.in</span>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CCTV Packages Breakdown */}
      <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
              Transparent Turnkey Pricing
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#16143E] mt-1"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Popular Complete CCTV Packages
            </h2>
            <p className="text-[#16143E]/65 text-sm sm:text-base mt-2">
              Includes original cameras, DVR/NVR, surveillance HDD, power supply, cabling, and certified installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CCTV_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl p-6.5 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-white border-2 border-[#EF1313] shadow-xl shadow-[#EF1313]/10"
                    : "bg-white border border-[#16143E]/12 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-md"
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#EF1313] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="text-xs font-bold text-[#4E0DBA] uppercase tracking-wider mb-1">
                    {pkg.recommendedFor}
                  </div>
                  <h3
                    className="text-xl font-bold text-[#16143E] mb-2 leading-snug"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {pkg.name}
                  </h3>
                  <div className="text-2xl font-black text-[#16143E] mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-xs text-[#EF1313] font-semibold mb-4">
                    {pkg.savings}
                  </div>
                  <p className="text-xs text-[#16143E]/65 mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#16143E]/8">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-xs text-[#16143E]/80">
                        <Check size={14} className="text-[#EF1313] mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#16143E]/8 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      pkg.name
                    )}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#16143E] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle size={15} className="text-[#25D366]" />
                    <span>Enquire via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setForm((prev) => ({ ...prev, requirement: pkg.name }));
                      scrollToWithPhysics("cctv-quote-form");
                    }}
                    className="w-full py-2 rounded-xl border border-[#16143E]/15 hover:border-[#16143E] text-xs font-semibold text-[#16143E] transition-colors"
                  >
                    Book Site Inspection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sub-Sections: Camera Types & Technologies */}
      <section className="py-20 bg-white border-b border-[#16143E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4E0DBA]">
              Advanced Surveillance Capabilities
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#16143E] mt-1"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Engineered for Real-World Security
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/10">
              <div className="w-11 h-11 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                <Eye size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#16143E] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                ColorVu & Full-Color Night Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed">
                No more grainy black-and-white night video. Large F1.0 apertures and warm supplemental LEDs illuminate dark compound walls in vivid color 24 hours a day.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/10">
              <div className="w-11 h-11 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                <Sliders size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#16143E] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                Built-in Audio & Dual-Light
              </h3>
              <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed">
                Equipped with noise-cancelling microphones to capture critical conversations. Smart dual-light switches from stealth IR to bright white light only when humans are detected.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/10">
              <div className="w-11 h-11 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                <HardDrive size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#16143E] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                ANPR & Cloud Surveillance
              </h3>
              <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed">
                Automated license plate recognition for apartment gates and factories. Optional cloud video archiving protects evidence even if physical recorders are tampered with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Customer Reviews Near Enquiry */}
      <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
              What Our Clients Say
            </span>
            <h2
              className="text-3xl font-bold text-[#16143E] mt-1"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Trusted Across Avadi & Chennai
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {REVIEWS.map((rev) => (
              <div
                key={rev.name}
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#16143E]/80 leading-relaxed italic mb-4">
                    “{rev.comment}”
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16143E]/8">
                  <div className="text-sm font-bold text-[#16143E]">{rev.name}</div>
                  <div className="text-xs text-[#4E0DBA] font-semibold">{rev.location} · {rev.tag}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Free Site Visit Reminder CTA */}
          <div className="p-8 rounded-3xl bg-[#16143E] text-white text-center max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
              Ready to Secure Your Property with a Free Site Visit?
            </h3>
            <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
              Call our technicians directly or request a callback. 2-hour dispatch guaranteed in Avadi and surrounding localities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919884344075"
                className="btn-crimson min-h-[48px] px-8 text-sm justify-center cursor-pointer"
              >
                <Phone size={16} /> Call 98843 44075
              </a>
              <a
                href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20would%20like%20a%20free%20CCTV%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold flex items-center gap-2 min-h-[48px] transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4E0DBA]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-[#16143E] mt-1" style={{ fontFamily: "Syne, sans-serif" }}>
              Got Questions About CCTV Installation?
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5.5 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/10">
                <h4 className="text-base font-bold text-[#16143E] mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#EF1313] flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
