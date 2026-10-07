import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedSolutions from "@/components/RelatedSolutions";
import {
  Shield,
  Lock,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Fingerprint,
  Users,
  FileSpreadsheet,
  Zap,
  BadgeCheck,
  Star,
  Quote,
  HelpCircle,
  Building,
  Key,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Biometric Access Control & Time-Attendance in Avadi | eSSL Partner",
  description:
    "Official eSSL biometric access control and employee time-attendance machines in Avadi, Chennai. Face recognition, fingerprint door locks from ₹4,500, electromagnetic latches, and 2-hour technician dispatch.",
  keywords: [
    "biometric access control Avadi",
    "fingerprint attendance machine Chennai",
    "eSSL dealer Avadi",
    "face recognition attendance Avadi",
    "electromagnetic door lock installation Chennai",
    "office access control system Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/security/access-control",
  },
  openGraph: {
    title: "Biometric Access Control & Attendance Systems in Avadi | Broadnet",
    description:
      "Eliminate buddy punching and secure restricted offices with certified eSSL biometric fingerprint and facial recognition systems in Avadi.",
    url: "https://www.broadnet.in/security/access-control",
  },
};

const PACKAGES = [
  {
    name: "Standalone Attendance Machine",
    tagline: "Essential attendance logging for clinics, retail shops & small offices",
    price: "₹4,500",
    unit: "standalone device with software",
    badge: "Attendance Only",
    popular: false,
    features: [
      "High-Precision Optical Fingerprint Sensor",
      "RFID Smart Keycard Reader Integration",
      "Up to 1,000 Users & 100,000 Transaction Logs",
      "USB Flash Drive & TCP/IP Network Log Export",
      "Free Desktop Attendance & Shift Management Software",
      "1-Year On-Site Manufacturer Warranty",
    ],
    ctaText: "Order Attendance Terminal",
  },
  {
    name: "Complete Biometric Door Lock Kit",
    tagline: "Secures entry doors with fingerprint verification and magnetic lock",
    price: "₹9,999",
    unit: "reader + lock + backup kit",
    badge: "Most Popular",
    popular: true,
    features: [
      "eSSL Biometric Reader with Door Access Relay",
      "600 lbs Heavy-Duty Electromagnetic (EM) Lock",
      "Stainless Steel Push-to-Exit Switch",
      "Power Supply with Inbuilt Battery Backup",
      "Compatible with Glass, Wooden & Aluminum Doors",
      "Concealed wiring & professional bracket fabrication",
      "2-Year On-Site Hardware Warranty",
    ],
    ctaText: "Book Biometric Lock Kit",
  },
  {
    name: "AI Face Recognition Terminal",
    tagline: "Ultra-fast contactless hygiene scanning for modern corporate offices",
    price: "₹14,500",
    unit: "AI touchless terminal",
    badge: "Contactless AI",
    popular: false,
    features: [
      "Sub-Second (0.2s) Contactless Facial Recognition",
      "Live Person Spoof Detection (prevents photo cheating)",
      "Supports 3,000 Face Profiles & RFID Cards",
      "Cloud Attendance Software with Real-Time Mobile Sync",
      "Automated Excel, CSV & Payroll Software Export",
      "Access control relay output for automatic door release",
      "Priority 2-Hour SLA Local Technician Support",
    ],
    ctaText: "Book Face Scan Terminal",
  },
  {
    name: "Multi-Door & Flap Barrier Turnstiles",
    tagline: "Enterprise access management for tech parks, factories & educational campuses",
    price: "Custom Quote",
    unit: "No Upper Ceiling — Any Facility",
    badge: "Enterprise Scale",
    popular: false,
    features: [
      "Centralized Multi-Door Controller Panels",
      "Motorized Optical Flap Barriers & Tripod Turnstiles",
      "Visitor Management Kiosk with QR-code visitor passes",
      "Anti-Passback & Interlocking Door Mantrap Logic",
      "Integration with Fire Alarm for Emergency Auto-Release",
      "Annual Maintenance Contract (AMC) with quarterly audits",
      "Dedicated technician support within 90 minutes",
    ],
    ctaText: "Request Enterprise Survey",
  },
];

const REVIEWS = [
  {
    quote:
      "Our medical clinic shifted from manual registers to BroadNet's eSSL biometric system. Attendance reports export cleanly and unauthorized access into sensitive pharmacy rooms has been completely eliminated.",
    author: "Dr. A. Meenakshi",
    role: "Chief Medical Director, LifeCare Centre",
    location: "Avadi, Chennai",
    system: "eSSL Face Recognition & EM Lock Setup",
  },
  {
    quote:
      "We run a precision engineering unit in Ambattur Industrial Estate with 60 workers on rotating shifts. BroadNet installed the biometric machine with backup battery. Shift timing and overtime calculation is now 100% accurate.",
    author: "K. Muralidharan",
    role: "Operations Head, Precision Tools",
    location: "Ambattur / Avadi Corridor",
    system: "eSSL Fingerprint Attendance System",
  },
  {
    quote:
      "BroadNet installed electromagnetic locks on our corporate office glass doors with push-to-exit buttons and RFID keycards. Neat bracket mounting and prompt local support whenever we onboard new staff.",
    author: "V. Shweta",
    role: "HR & Facilities Manager",
    location: "TNHB Main Road, Avadi",
    system: "Glass Door Biometric Access Control",
  },
];

const FAQS = [
  {
    q: "Can biometric access control be installed on glass doors?",
    a: "Yes! We specialize in frameless glass door installations using specialized U-brackets and frameless glass electromagnetic lock kits. There is zero drilling into the glass, ensuring a pristine architectural appearance.",
  },
  {
    q: "What happens during a power failure? Does the door stay locked or open?",
    a: "Our access control systems include dedicated battery backups ensuring several hours of continuous operation. In addition, for fire safety compliance, electromagnetic fail-safe locks can be integrated with emergency break-glass switches to unlock automatically in emergencies.",
  },
  {
    q: "How do we generate monthly employee attendance and salary reports?",
    a: "We provide and configure desktop and cloud-enabled attendance management software. You can generate one-click daily logs, late-entry reports, shift overtimes, and export them directly to Microsoft Excel or integrate with your payroll software.",
  },
  {
    q: "Can the face recognition system be tricked by a photograph on a phone?",
    a: "No. The AI face recognition terminals we install feature dual-camera infrared live-body verification and 3D depth geometry analysis. They completely reject 2D photos, smartphone screens, or printed masks.",
  },
];

export default function AccessControlPage() {
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
                backgroundImage: "radial-gradient(circle, #4E0DBA 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-1/4 -right-20 w-[600px] h-[500px] bg-[#4E0DBA]/25 blur-[160px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-[#EF1313]/15 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Security Solutions", href: "/security" },
                  { label: "Biometric Access Control" },
                ]}
                variant="dark"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#4E0DBA]/25 text-[#A78BFA] border border-[#4E0DBA]/40">
                    <BadgeCheck size={14} className="text-[#A78BFA]" />
                    Official eSSL Authorised Partner
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/15">
                    <Clock size={13} className="text-emerald-400" />
                    2-Hour On-Site Technician Dispatch in Avadi
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display mb-6">
                  Frictionless Access.
                  <br />
                  <span className="text-gradient">Biometric Access Control & Attendance.</span>
                </h1>

                <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  Eliminate buddy punching, secure server rooms, and automate employee payroll hours with certified eSSL facial recognition, fingerprint locks, and electromagnetic latches across Avadi & Chennai.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "0.2s Contactless Face Recognition",
                    "Heavy-Duty 600lbs EM Door Locks",
                    "Automated Excel & Payroll Reports",
                    "Battery Backup for Power Outages",
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
                    <span>View Access Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/919884344075?text=Hi%20Broadnet,%20I%20am%20interested%20in%20Biometric%20Access%20Control%20for%20our%20office%20in%20Avadi.%20Please%20share%20details."
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
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#4E0DBA]/30 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
                          Commercial Security
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          eSSL Certified Tech
                        </span>
                      </div>

                      <div className="h-56 sm:h-64 w-full flex flex-col items-center justify-center my-2 bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl border border-white/10 p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#EF1313]/20 border border-[#EF1313]/35 flex items-center justify-center text-[#EF1313] mb-4 shadow-lg shadow-[#EF1313]/20">
                          <Fingerprint size={34} />
                        </div>
                        <h3 className="text-white font-bold text-lg font-display">eSSL Biometric Console</h3>
                        <p className="text-xs text-white/55 mt-1 max-w-xs">
                          High-speed optical fingerprint and contactless facial recognition with EM lock relay
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-bold text-base">eSSL Attendance Series</div>
                            <p className="text-xs text-white/55">Standalone & Network Systems</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-[#EF1313]/10 border border-[#EF1313]/25 px-3 py-1.5 rounded-lg">
                            Starts ₹4,500
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#120F2E] border border-white/15 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <FileSpreadsheet size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Automated Reports</div>
                      <div className="text-[11px] text-white/50">One-click monthly payroll sync</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Relevance Section */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Commercial Accountability <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Why Biometric Control Is Critical For Growing Workplaces
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Manual register books and physical keys create vulnerabilities, wage leakage, and unmonitored entries. Digital access transforms workplace discipline:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Eliminate Buddy Punching & Proxy",
                  desc: "Employees can no longer punch attendance on behalf of late colleagues. Unique biometric fingerprints and face scans ensure 100% presence authenticity.",
                },
                {
                  icon: FileSpreadsheet,
                  title: "Automate HR & Payroll Calculations",
                  desc: "Say goodbye to hours of manual register tallying. Automatically generate clean monthly reports with late penalties, leaves, and overtime calculations.",
                },
                {
                  icon: Lock,
                  title: "Restrict High-Security Rooms",
                  desc: "Ensure only authorized personnel can enter server rooms, accounts departments, and pharmaceutical store rooms with designated privilege levels.",
                },
                {
                  icon: Key,
                  title: "No More Lost Physical Keys",
                  desc: "Eliminate the cost and security risk of replacing compromised locks when employees resign. Revoke digital credentials in seconds from the software.",
                },
                {
                  icon: Zap,
                  title: "Emergency Fire Release Compliance",
                  desc: "Integrated with emergency break-glass switches, the electronic locks automatically drop open during building alarms for safe evacuations.",
                },
                {
                  icon: Shield,
                  title: "Comprehensive Audit Trail Logs",
                  desc: "Every single door entry attempt is timestamped. Know exactly who entered every room and when with permanent audit trail logs.",
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
                Tailored Biometric Solutions For Any Facility
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                From single-door clinic attendance to multi-building corporate campuses with <strong>no upper ceiling</strong>.
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
                        `Hi Broadnet, I am interested in the ${pkg.name} (${pkg.price}) for Biometric Access Control in Avadi. Please share details.`
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
                <span className="w-4 h-px bg-[#4E0DBA]" /> Verified Commercial Reviews <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                Trusted by Businesses & Facilities Across Avadi
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
                <HelpCircle size={14} className="text-[#EF1313]" /> Common Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display">
                Biometric Access Control Frequently Asked Questions
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
        <RelatedSolutions currentKey="access-control" />

        {/* Dedicated Enquiry Section */}
        <EnquirySection initialService="Biometric Access Control" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
