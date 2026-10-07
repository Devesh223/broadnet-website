import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedSolutions from "@/components/RelatedSolutions";
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Radio,
  Volume2,
  Smartphone,
  Eye,
  BadgeCheck,
  Star,
  Quote,
  HelpCircle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Perimeter Alarms & Intrusion Detection in Avadi, Chennai | Hikvision Certified",
  description:
    "Active perimeter defense with laser trip sensors, boundary wall alarms, 110dB loud sirens, and GSM auto-dialer mobile alerts in Avadi. Complete kits from ₹6,999. Free site survey.",
  keywords: [
    "intrusion alarm system Avadi",
    "perimeter beam sensor Chennai",
    "burglar alarm installation Avadi",
    "compound wall security alarm",
    "Hikvision alarm dealer Avadi",
    "GSM wireless intruder alarm Chennai",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/security/intrusion-alarms",
  },
  openGraph: {
    title: "Perimeter Alarms & Intrusion Detection Systems in Avadi | Broadnet",
    description:
      "Stop intrusions before breaches occur with laser boundary sensors, high-decibel deterrent sirens, and automated GSM phone alerts in Avadi.",
    url: "https://www.broadnet.in/security/intrusion-alarms",
  },
};

const PACKAGES = [
  {
    name: "Entry Door / Shutter Siren",
    tagline: "Heavy-duty magnetic sensor for shop rolling shutters and villa main gates",
    price: "₹2,999",
    unit: "standalone alarm with siren",
    badge: "Basic Deterrence",
    popular: false,
    features: [
      "Heavy-Duty Metal Rolling Shutter Contact",
      "Loud 110dB Piercing Indoor/Outdoor Siren",
      "Keyfob Remote Arm & Disarm Functionality",
      "Battery Backup with Tamper Detection Sensor",
      "Simple surface mount with zero drilling damage",
      "1-Year On-Site Manufacturer Warranty",
    ],
    ctaText: "Order Shutter Alarm",
  },
  {
    name: "Wireless GSM Home Alarm Kit",
    tagline: "Comprehensive multi-sensor intrusion defense for independent homes",
    price: "₹6,999",
    unit: "complete wireless kit",
    badge: "Most Popular",
    popular: true,
    features: [
      "GSM Smart Alarm Control Panel with SIM Auto-Dialer",
      "2x Pet-Immune PIR Passive Infrared Motion Detectors",
      "2x Magnetic Door/Window Entry Contacts",
      "Loud 110dB Weatherproof External Strobe Siren",
      "Instantly calls up to 5 family mobile numbers on breach",
      "Smartphone App control for remote arming/disarming",
      "2-Year On-Site Hardware Warranty",
    ],
    ctaText: "Book GSM Alarm Kit",
  },
  {
    name: "Compound Wall Laser Beam Kit",
    tagline: "Active boundary wall defense detecting intruders before they touch your house",
    price: "₹14,999",
    unit: "dual laser perimeter kit",
    badge: "Perimeter Defense",
    popular: false,
    features: [
      "Dual Photo-Electric Infrared Laser Beams (up to 40m)",
      "Triggers instantly when an intruder scales compound walls",
      "Weatherproof IP65 optical sensors immune to rain and fog",
      "Loud flashing strobe siren alerting neighbors immediately",
      "Integrated GSM auto-dialer calling your phone",
      "Tamper-proof conduit wiring along compound parapet",
      "Priority 2-Hour SLA Local Technician Support",
    ],
    ctaText: "Book Perimeter Laser Kit",
  },
  {
    name: "Enterprise Multi-Zone Alarm Grid",
    tagline: "Custom-engineered for industrial factories, warehouses & luxury estates",
    price: "Custom Quote",
    unit: "No Upper Ceiling — Multi-Acre Scale",
    badge: "Industrial Scale",
    popular: false,
    features: [
      "Multi-Zone Addressable Alarm Control Panel",
      "Long-Range 100m+ Quad-Beam Laser Barrier Pillars",
      "Glass Break Acoustic Detectors & Vibration Sensors",
      "Integration with CCTV PTZ Cameras (Cameras swivel to alert zone)",
      "Direct Central Monitoring Station (CMS) IP reporting",
      "Quarterly preventive maintenance AMC options",
      "Dedicated technician support within 90 minutes",
    ],
    ctaText: "Request Enterprise Survey",
  },
];

const REVIEWS = [
  {
    quote:
      "We had blind spots along our rear warehouse boundary wall in Pattabiram. BroadNet installed perimeter laser sensors with instant siren and phone call alert. Flawless execution and prompt local service.",
    author: "S. Raghavan",
    role: "Logistics Manager",
    location: "Pattabiram Industrial Corridor, Avadi",
    system: "Compound Wall Dual Laser Beam System",
  },
  {
    quote:
      "Living in an independent villa in TNHB, we wanted an alarm that rings our mobile phones if someone steps onto our terrace or balcony at night. BroadNet set up the GSM panel in half a day. Very professional.",
    author: "K. Balachandar",
    role: "Homeowner",
    location: "TNHB Colony, Avadi",
    system: "Wireless GSM Home Alarm Kit",
  },
  {
    quote:
      "Our jewelry retail showroom required rolling shutter magnetic sensors and vibration detectors. BroadNet's concealed wiring and loud strobe siren give us complete peace of mind when we lock up for the night.",
    author: "P. Ranganathan",
    role: "Jewelry Showroom Owner",
    location: "Bazaar Street, Avadi",
    system: "Commercial Multi-Zone Intrusion Grid",
  },
];

const FAQS = [
  {
    q: "Will cats, birds, or wind trigger false alarms on motion sensors?",
    a: "No. We utilize advanced pet-immune digital PIR sensors and dual-beam laser technology. Small animals weighing under 25kg or falling leaves will not break both beams simultaneously, completely eliminating false triggers.",
  },
  {
    q: "How does the GSM auto-dialer contact me if the power or home Wi-Fi fails?",
    a: "The alarm panel has an internal rechargeable battery backup that lasts over 24 hours during blackouts. Because it uses a dedicated cellular GSM SIM card, it does not rely on home Wi-Fi or electricity to call your smartphone.",
  },
  {
    q: "Can the alarm system integrate with our CCTV cameras?",
    a: "Yes! In commercial and luxury villa installations, our alarm triggers can send an input relay to the Hikvision/CP PLUS NVR, causing PTZ cameras to instantly zoom and rotate directly toward the breached perimeter zone.",
  },
];

export default function IntrusionAlarmsPage() {
  return (
    <>
      <Header activePage="Security" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pb-28 bg-[#0B091E] text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #EF1313 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-1/4 -right-20 w-[600px] h-[500px] bg-[#EF1313]/20 blur-[160px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-[#4E0DBA]/20 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Security Solutions", href: "/security" },
                  { label: "Perimeter Intrusion Alarms" },
                ]}
                variant="dark"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#EF1313]/15 text-[#EF1313] border border-[#EF1313]/30">
                    <BadgeCheck size={14} className="text-[#EF1313]" />
                    Hikvision Certified Intrusion Defense
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/15">
                    <Clock size={13} className="text-emerald-400" />
                    2-Hour On-Site Support in Avadi
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display mb-6">
                  Detect Breaches.
                  <br />
                  <span className="text-gradient">Active Perimeter Alarms & Intrusion Defense.</span>
                </h1>

                <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  Passive CCTV records evidence after the break-in; active perimeter alarms stop intruders at the boundary wall. High-decibel sirens, laser trip beams, and instant automated GSM phone calls in Avadi & Chennai.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Laser Beams on Compound Walls",
                    "110dB High-Decibel Siren Deterrence",
                    "Automated Mobile Phone Call on Breach",
                    "24-Hour Battery Backup for Power Cuts",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-white/85">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#packages"
                    className="btn-crimson flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#EF1313]/30"
                  >
                    <span>View Alarm Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/919884344075?text=Hi%20Broadnet,%20I%20am%20interested%20in%20Perimeter%20Alarms%20and%20Intrusion%20Detection%20in%20Avadi.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm transition-colors shadow-md"
                  >
                    <MessageCircle size={16} className="fill-white" />
                    <span>WhatsApp Quote</span>
                  </a>
                  <a
                    href="tel:+919884344075"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/15"
                  >
                    <Phone size={15} />
                    <span>Call: 98843 44075</span>
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-[#16143E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#16143E]/60 overflow-hidden">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#EF1313]/25 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
                          Perimeter Defense
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Active Deterrence
                        </span>
                      </div>

                      <div className="h-56 sm:h-64 w-full flex flex-col items-center justify-center my-2 bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl border border-white/10 p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#EF1313]/20 border border-[#EF1313]/35 flex items-center justify-center text-[#EF1313] mb-4 shadow-lg shadow-[#EF1313]/20">
                          <AlertTriangle size={34} />
                        </div>
                        <h3 className="text-white font-bold text-lg font-display">GSM Intrusion Control Hub</h3>
                        <p className="text-xs text-white/55 mt-1 max-w-xs">
                          Multi-zone alarm brain with laser photo-beam inputs and 110dB outdoor deterrent siren
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-bold text-base">Hikvision Certified Alarms</div>
                            <p className="text-xs text-white/55">Laser Beams & Motion Sensors</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-[#EF1313]/10 border border-[#EF1313]/25 px-3 py-1.5 rounded-lg">
                            Starts ₹2,999
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#120F2E] border border-white/15 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EF1313]/20 flex items-center justify-center text-[#EF1313] flex-shrink-0">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Instant GSM Calls</div>
                      <div className="text-[11px] text-white/50">Auto-dials 5 numbers on perimeter breach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevance Section */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Active vs Passive Defense <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Why Cameras Alone Are Not Enough: The Power of Active Alarms
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                While CCTV gives you recordings of what happened, perimeter alarms actively stop intruders before they ever touch your windows or doors:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertTriangle,
                  title: "Deterrence at the Boundary Wall",
                  desc: "Dual infrared laser beams create an invisible tripwire across compound walls. The instant an intruder scales the wall, sirens blare before they reach the building.",
                },
                {
                  icon: Volume2,
                  title: "110dB Siren Shocks Intruders",
                  desc: "Burglars rely on silence and darkness. A sudden 110-decibel piercing siren and strobe light panic intruders, causing them to flee immediately.",
                },
                {
                  icon: Smartphone,
                  title: "Instant Mobile Phone Auto-Dial",
                  desc: "Even if you are asleep or hundreds of kilometers away, the built-in cellular dialer calls your phone instantly, bypassing silenced app notifications.",
                },
                {
                  icon: Shield,
                  title: "Zero False Alarms with Pet Immunity",
                  desc: "Engineered with dual-optics and digital signal processing so that birds, squirrels, and cats never trigger sirens by mistake.",
                },
                {
                  icon: Zap,
                  title: "24-Hour Battery Backup Operation",
                  desc: "Burglars often cut exterior power lines first. Broadnet alarm panels continue operating silently on emergency internal batteries.",
                },
                {
                  icon: Eye,
                  title: "CCTV Camera Cross-Integration",
                  desc: "When a perimeter sensor trips, our integration prompts your CCTV cameras to immediately pan, zoom, and record the exact intrusion coordinates.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/8 hover:border-[#EF1313]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#16143E]/5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-5 group-hover:bg-[#EF1313] group-hover:text-white transition-colors">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#16143E] mb-3 font-display">{item.title}</h3>
                  <p className="text-[#16143E]/65 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 sm:py-28 bg-[#0B091E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Packages & Pricing <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Tailored Perimeter Alarm Packages
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                From residential shutter alarms to multi-acre factory laser grids with <strong>no upper ceiling</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    pkg.popular
                      ? "bg-[#16143E] border-2 border-[#EF1313] shadow-2xl shadow-[#EF1313]/20"
                      : "bg-[#120F2E] border border-white/10 hover:border-white/25"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#EF1313] text-white shadow-md">
                      {pkg.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider">
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-display">{pkg.name}</h3>
                    <p className="text-xs text-white/55 mb-6 leading-relaxed">{pkg.tagline}</p>

                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="text-3xl font-bold text-white font-display">{pkg.price}</div>
                      <div className="text-xs text-white/50 mt-1">{pkg.unit}</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed">
                          <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <a
                      href={`https://wa.me/919884344075?text=${encodeURIComponent(
                        `Hi Broadnet, I am interested in the ${pkg.name} (${pkg.price}) for Perimeter Alarm installation in Avadi. Please share details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                        pkg.popular
                          ? "bg-[#EF1313] hover:bg-[#d60e0e] text-white"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Verified Customer Reviews <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                What Perimeter Alarm Clients in Avadi Say
              </h2>
              <div className="flex items-center justify-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F59E0B]" />
                ))}
                <span className="text-xs font-bold text-[#16143E] ml-2">4.9 / 5.0 Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.author}
                  className="p-7 rounded-3xl bg-white border border-[#16143E]/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                      <Quote size={18} />
                    </div>
                    <p className="text-sm text-[#16143E]/75 italic leading-relaxed mb-6 font-body">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#16143E]/8">
                    <div className="font-bold text-sm text-[#16143E]">{rev.author}</div>
                    <div className="text-xs text-[#16143E]/55">{rev.role}</div>
                    <div className="text-xs font-semibold text-[#EF1313] mt-1">{rev.system}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white text-[#16143E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <HelpCircle size={14} className="text-[#EF1313]" /> Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display">
                Perimeter Intrusion Alarms FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="p-6 rounded-2xl bg-[#F8F9FD] border border-[#16143E]/8">
                  <h3 className="font-bold text-base text-[#16143E] mb-2 font-display">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed font-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complementary Solutions */}
        <RelatedSolutions currentKey="intrusion-alarms" />

        {/* Dedicated Enquiry Section */}
        <EnquirySection initialService="Intrusion Alarm System" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
