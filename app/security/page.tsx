import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecurityFinder from "@/components/SecurityFinder";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Shield,
  Camera,
  Lock,
  Zap,
  Radio,
  AlertTriangle,
  BadgeCheck,
  ArrowRight,
  Clock,
  Wrench,
  CheckCircle2,
  Building,
  Phone,
  MessageCircle,
  Wifi,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Electronic Security & CCTV Surveillance in Avadi, Chennai | Broadnet",
  description:
    "Official CP PLUS & Hikvision partner for CCTV surveillance, smart video door phones, eSSL biometric access control, and perimeter alarms in Avadi. Complete packages with no upper ceiling. 2-hour technician dispatch.",
  keywords: [
    "CCTV installation Avadi",
    "Hikvision dealer Chennai",
    "CP PLUS camera Avadi",
    "biometric access control Avadi",
    "video door phone installation",
    "perimeter intrusion alarm Chennai",
    "security camera price Avadi",
    "electronic security Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/security",
  },
  openGraph: {
    title: "Electronic Security & Surveillance Systems in Avadi | Broadnet",
    description:
      "Certified Hikvision & CP PLUS surveillance, smart video door phones, and biometric access control with 2-hour technician dispatch in Avadi.",
    url: "https://www.broadnet.in/security",
  },
};

const DOMAINS = [
  {
    icon: Camera,
    title: "HD & 4K CCTV Surveillance Systems",
    desc: "Complete IP & HD camera setups from CP PLUS and Hikvision with ColorVu night vision, NVR recording loops, and zero-latency smartphone remote monitoring.",
    badge: "CP PLUS CSE • Hikvision HCSA",
    startingPrice: "From ₹1,399 / Cam",
    ceilingNote: "No Upper Ceiling (16, 32, 64+ Channel Systems)",
    features: [
      "1080p to 4K Ultra-HD resolution with color night vision",
      "AI human & vehicle detection eliminating false alarms",
      "Concealed conduit piping protecting building aesthetics",
      "Surveillance-grade WD Purple / Seagate SkyHawk storage",
    ],
    pageUrl: "/security/cameras",
    ctaText: "Explore Camera Packages",
    color: "#EF1313",
  },
  {
    icon: Zap,
    title: "Smart Video Door Phones (VDP)",
    desc: "HD touchscreen door intercoms allowing you to see, speak with, and remotely unlock front gates for courier agents or visitors without opening the door.",
    badge: "Home & Villa Security",
    startingPrice: "From ₹3,999",
    ceilingNote: "Scalable for Multi-Apartment Complexes",
    features: [
      "7-Inch capacitive touchscreen indoor display panel",
      "Wide-angle infrared night vision outdoor doorbell camera",
      "One-touch electronic gate latch release from screen or phone",
      "Automatic visitor snapshot logging with photo memory",
    ],
    pageUrl: "/security/door-phones",
    ctaText: "Explore Video Door Phones",
    color: "#4E0DBA",
  },
  {
    icon: Lock,
    title: "eSSL Biometric Access Control & Attendance",
    desc: "Contactless facial recognition and optical fingerprint door locks with automated cloud attendance software for offices, clinics, schools, and factories.",
    badge: "eSSL Authorized Partner",
    startingPrice: "From ₹4,500",
    ceilingNote: "Enterprise Multi-Door & Turnstile Deployments",
    features: [
      "Sub-second (0.2s) contactless facial recognition & fingerprint",
      "Heavy-duty 600lbs electromagnetic (EM) door latch release",
      "Automated Excel & payroll attendance report generation",
      "Emergency battery backup maintaining security during blackouts",
    ],
    pageUrl: "/security/access-control",
    ctaText: "Explore Biometric Systems",
    color: "#4E0DBA",
  },
  {
    icon: AlertTriangle,
    title: "Perimeter Alarms & Intrusion Detection",
    desc: "Active boundary defense with compound wall laser trip beams, passive infrared sensors, loud 110dB sirens, and automated GSM phone calls upon breach.",
    badge: "Active Defense",
    startingPrice: "From ₹6,999",
    ceilingNote: "Multi-Zone Perimeter Laser Defense",
    features: [
      "Dual photo-electric laser trip beams for boundary walls",
      "Piercing 110dB outdoor siren scaring off intruders instantly",
      "Cellular GSM dialer automatically calling 5 mobile numbers",
      "Pet-immune motion sensors preventing false alarms",
    ],
    pageUrl: "/security/intrusion-alarms",
    ctaText: "Explore Intrusion Alarms",
    color: "#EF1313",
  },
  {
    icon: Radio,
    title: "Multi-Station Intercom & EPABX Systems",
    desc: "Dedicated internal communication infrastructure connecting security guard booths, individual flats, and management offices without recurring call costs.",
    badge: "Apartments & Societies",
    startingPrice: "Custom Society Quote",
    ceilingNote: "8 to 500+ Flats Network",
    features: [
      "Connects 8 to 500+ flats with dedicated security intercom lines",
      "Guard-to-resident visitor verification protocol",
      "Zero monthly subscription fees or external telephony charges",
      "Durable wiring and lightning surge protection",
    ],
    pageUrl: "/contact?service=Intercom+System",
    ctaText: "Request Society Intercom Survey",
    color: "#4E0DBA",
  },
  {
    icon: Shield,
    title: "RFID Boom Barriers & Flap Turnstiles",
    desc: "Automated vehicular access with RFID / ANPR license plate integration and pedestrian flap barriers for gated communities, factories, and corporate tech parks.",
    badge: "Authorized Dealer",
    startingPrice: "Custom Commercial Quote",
    ceilingNote: "High-Frequency Automated Barriers",
    features: [
      "Heavy-duty motorized barrier arms with safety edge sensors",
      "Automatic fast RFID tag vehicle entry with anti-smash loop",
      "Pedestrian optical flap barriers with access card integration",
      "Manual clutch override in case of complete power failure",
    ],
    pageUrl: "/contact?service=Boom+%26+Flap+Barriers",
    ctaText: "Request Barrier Consultation",
    color: "#EF1313",
  },
];

const TRUST_PILLARS = [
  {
    icon: BadgeCheck,
    title: "Official Brand Authorization",
    desc: "We are direct certified partners of CP PLUS, Hikvision, and eSSL. 100% genuine equipment with official 2-year on-site replacement warranty.",
  },
  {
    icon: Clock,
    title: "< 2-Hour Local Technician SLA",
    desc: "Our engineering operations hub is physically located right on Fire Station Road in Avadi. We don't make you wait days for a technician.",
  },
  {
    icon: Wrench,
    title: "Concealed Conduit Cabling",
    desc: "We never leave loose, dangling wires. All wiring is routed through heavy-duty concealed PVC conduits to protect building aesthetics.",
  },
  {
    icon: Building,
    title: "From ₹1,399 to Enterprise Scale",
    desc: "Whether you need a single doorbell camera for your villa or a 128-camera industrial mesh for a factory, we deliver without upper ceiling limits.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Header activePage="Security" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pb-28 bg-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(circle, #EF1313 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: "Security Solutions" }]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-4 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Certified Electronic Security & ELV Systems
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-tight mb-5 font-display">
                Intelligent Security.
                <br />
                <span className="text-gradient">Zero Compromise.</span>
              </h1>
              <p className="text-[#16143E]/65 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                Official CP PLUS and Hikvision certified solutions engineered for residential villas, gated apartment communities, commercial retail, and industrial facilities across Avadi and Chennai.
              </p>

              {/* Partner Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {["CP PLUS CSE Certified", "Hikvision HCSA Trained", "eSSL Biometric Partner", "2-Hour Local SLA"].map(
                  (c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold border border-[#EF1313]/25 text-[#EF1313] bg-[#EF1313]/5"
                    >
                      <BadgeCheck size={14} className="text-[#EF1313] flex-shrink-0" />
                      {c}
                    </span>
                  )
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a href="#solution-finder" className="btn-crimson flex items-center gap-2 text-sm font-bold">
                  <span>Find Your Solution</span>
                  <ArrowRight size={15} />
                </a>
                <Link
                  href="/security/cameras"
                  className="px-6 py-3 rounded-full bg-[#16143E] hover:bg-[#232057] text-white font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <span>Explore CCTV Cameras</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/919884344075?text=Hi%20Broadnet,%20I%20am%20looking%20for%20security%20solutions%20in%20Avadi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm transition-colors"
                >
                  <MessageCircle size={15} className="fill-white" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive "Find Your Perfect Solution" Quiz/Recommendation */}
        <SecurityFinder />

        {/* Detailed Domain Showcase Grid */}
        <section id="solutions-catalog" className="py-24 bg-white text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Dedicated Security Portals <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Full-Spectrum Electronic Security Systems
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Click into any specific security domain below to view complete technical specifications, camera kits, and customized package pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {DOMAINS.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={domain.title}
                    className="p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/10 flex flex-col justify-between hover:border-[#EF1313]/35 transition-all duration-300 hover:shadow-xl hover:shadow-[#16143E]/5 group"
                  >
                    <div>
                      {/* Header & Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-bold text-[#4E0DBA] uppercase tracking-wider">
                          {domain.badge}
                        </span>
                        <span className="text-xs font-bold text-[#EF1313] bg-[#EF1313]/10 border border-[#EF1313]/25 px-2.5 py-0.5 rounded-md">
                          {domain.startingPrice}
                        </span>
                      </div>

                      <div className="flex items-start gap-3.5 mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${domain.color}15`, color: domain.color }}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#16143E] font-display leading-snug group-hover:text-[#EF1313] transition-colors">
                            {domain.title}
                          </h3>
                          <span className="text-[11px] text-[#16143E]/50 block mt-0.5">{domain.ceilingNote}</span>
                        </div>
                      </div>

                      <p className="text-[#16143E]/65 text-xs sm:text-sm leading-relaxed mb-6">
                        {domain.desc}
                      </p>

                      <ul className="space-y-2.5 mb-7 pt-4 border-t border-[#16143E]/8">
                        {domain.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-[#16143E]/80 leading-snug">
                            <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#16143E]/10">
                      <Link
                        href={domain.pageUrl}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#16143E] hover:bg-[#EF1313] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <span>{domain.ctaText}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Broadnet Trust Pillars */}
        <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> The Broadnet Assurance <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                Why Property Owners Choose Us For Security in Avadi
              </h2>
              <p className="text-[#16143E]/65 text-base leading-relaxed">
                We combine the engineering reliability of an integrated ISP with certified electronic security specialists:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRUST_PILLARS.map((tp) => {
                const Icon = tp.icon;
                return (
                  <div key={tp.title} className="p-7 rounded-3xl bg-white border border-[#16143E]/8 shadow-sm">
                    <div className="w-12 h-12 rounded-2xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-base text-[#16143E] mb-2 font-display">{tp.title}</h3>
                    <p className="text-xs text-[#16143E]/65 leading-relaxed font-body">{tp.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* High-Speed Fiber Backbone Cross-Link Banner */}
        <section className="py-14 bg-white border-t border-[#16143E]/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#1D1A52] to-[#252060] text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/15 text-[#00C2FF] flex items-center justify-center flex-shrink-0 mt-1">
                  <Wifi size={24} />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#00C2FF] mb-1 font-display">
                    Integrated ISP Backbone
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Need High-Speed Optical Fiber for Your Security Cameras?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mt-1.5 max-w-xl font-body leading-relaxed">
                    Broadnet operates 100+ km of dedicated fiber in Avadi. Ensure zero-buffering 24/7 CCTV mobile feeds, instant cloud sync, and single-window technician support.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-shrink-0 w-full md:w-auto">
                <Link
                  href="/internet"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00C2FF] hover:bg-[#00a8dd] text-[#16143E] font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Explore Fiber Plans</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/#coverage"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  Check Coverage
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* General Security Enquiry Section */}
        <EnquirySection initialType="security" />
      </main>
      <Footer />
    </>
  );
}
