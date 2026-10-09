import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedSolutions from "@/components/RelatedSolutions";
import {
  Shield,
  Camera,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Eye,
  HardDrive,
  Smartphone,
  CloudRain,
  Cpu,
  BadgeCheck,
  Star,
  Quote,
  HelpCircle,
  Building,
  Home,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CCTV Camera Installation in Avadi, Chennai | CP PLUS & Hikvision HD/4K Systems",
  description:
    "Official CP PLUS & Hikvision certified CCTV camera installation in Avadi. Complete 4-camera kits from ₹8,499, enterprise IP solutions with no upper ceiling. 2-hour technician dispatch, free site inspection.",
  keywords: [
    "CCTV installation Avadi",
    "Hikvision CCTV dealer Chennai",
    "CP PLUS camera Avadi",
    "home security cameras Avadi",
    "commercial CCTV installation Chennai",
    "4K IP camera Avadi",
    "CCTV repair and AMC Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/security/cameras",
  },
  openGraph: {
    title: "CCTV Camera Installation & Services in Avadi | Broadnet",
    description:
      "24/7 HD & 4K CCTV surveillance systems. Free site survey, concealed conduit wiring, mobile live monitoring, and 2-hour local technician dispatch in Avadi.",
    url: "https://www.broadnet.in/security/cameras",
  },
};

import PackageCard from "@/components/PackageCard";
import { CCTV_PACKAGES } from "@/data/site";

const WORKFLOW = [
  {
    step: "01",
    title: "Free Site Survey & Blind-Spot Audit",
    desc: "Our certified security engineer visits your property in Avadi to map entry points, lighting conditions, and eliminate all camera blind spots.",
  },
  {
    step: "02",
    title: "Concealed Conduit Cabling",
    desc: "We route cables through heavy-duty concealed PVC conduits to protect against tampering, rodents, and weather without damaging your walls.",
  },
  {
    step: "03",
    title: "DVR/NVR & Surveillance Storage",
    desc: "We configure certified CP PLUS or Hikvision recording units with surveillance-rated hard drives for uninterrupted 24/7 video recording loops.",
  },
  {
    step: "04",
    title: "Mobile App Sync & Handover",
    desc: "We configure encrypted live monitoring on your iPhone, Android, and laptops, conduct staff/family training, and issue your 2-year warranty certificate.",
  },
];

const REVIEWS = [
  {
    quote:
      "BroadNet handled our entire 48-flat apartment complex surveillance. The conduit work was completely concealed without damaging building aesthetics. When a camera angle needed adjustment, their technician arrived within 90 minutes. That local SLA makes all the difference.",
    author: "K. Senthil Nathan",
    role: "President, Residents Welfare Association",
    location: "Kaveri Nagar, Avadi",
    system: "16-Camera Hikvision 4K IP Network",
  },
  {
    quote:
      "We run a retail grocery supermarket on MTH Road. BroadNet installed 8 CP PLUS cameras covering all cash counters and aisles. The mobile app lets me monitor everything clearly in real-time even when I am travelling for stock purchases.",
    author: "B. Sundaram",
    role: "Proprietor, Sundaram Supermarket",
    location: "MTH Road, Avadi",
    system: "8-Camera CP PLUS 1080p Kit",
  },
  {
    quote:
      "After a burglary incident in our neighborhood, we needed security urgently. BroadNet completed the site inspection and installed 4 ColorVu cameras the very next afternoon. Crisp night color clarity and superb customer care.",
    author: "R. Meenakshi",
    role: "Villa Homeowner",
    location: "TNHB Colony, Avadi",
    system: "4-Camera Hikvision ColorVu System",
  },
];

const FAQS = [
  {
    q: "Do you offer free on-site inspection in Avadi?",
    a: "Yes! We provide 100% free site inspections across Avadi, Thirumullaivoyal, Ambattur, Pattabiram, Poonamallee, and surrounding areas. Our engineer assesses your premises, identifies blind spots, and provides an itemized quotation with zero obligation.",
  },
  {
    q: "Can I view my CCTV cameras on my smartphone when I am away from home?",
    a: "Absolutely. We set up official mobile applications (gCMOB for CP PLUS, Hik-Connect for Hikvision) on your iPhone, Android phone, tablet, and PC. As long as your DVR/NVR is connected to the internet, you can stream live footage and playback recordings from anywhere in the world.",
  },
  {
    q: "What happens if our home internet is down? Do the cameras still record?",
    a: "Yes. All our CCTV systems record continuously to the on-site DVR/NVR surveillance hard disk 24 hours a day, 7 days a week, regardless of internet connectivity. Internet is only required when you want to view live feeds remotely on your mobile phone.",
  },
  {
    q: "Why do you emphasize 'No Upper Ceiling' for packages?",
    a: "Whether you need a simple 2-camera setup for an independent home or an enterprise 128-camera industrial network spanning multiple factory sheds with optical fiber backhauls and license plate recognition, Broadnet has certified engineering capacity to design and execute any scale without limits.",
  },
  {
    q: "What is your warranty and maintenance support in Avadi?",
    a: "All equipment comes with 2 years manufacturer replacement warranty. Because our engineering hub is located right at Fire Station Road, Avadi, our dispatch team provides guaranteed on-site service support with emergency response under 2 hours.",
  },
];

import { getCctvPackagesJsonLd, getFaqPageJsonLd } from "@/lib/jsonLd";

export default function CamerasPage() {
  const packagesJsonLd = getCctvPackagesJsonLd();
  const faqJsonLd = getFaqPageJsonLd(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header activePage="Security" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pb-28 bg-[#0B091E] text-white overflow-hidden">
          {/* Subtle gradient glow & grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #EF1313 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-1/4 -right-20 w-[600px] h-[500px] bg-[#EF1313]/15 blur-[160px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-[#4E0DBA]/20 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Security Solutions", href: "/security" },
                  { label: "CCTV Cameras" },
                ]}
                variant="dark"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Value Proposition */}
              <div className="lg:col-span-7">
                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#EF1313]/15 text-[#EF1313] border border-[#EF1313]/30">
                    <BadgeCheck size={14} className="text-[#EF1313]" />
                    Official CP PLUS & Hikvision Partner
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/15">
                    <Clock size={13} className="text-emerald-400" />
                    &lt; 2-Hour Technician Dispatch in Avadi
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display mb-6">
                  Ensure Security.
                  <br />
                  <span className="text-gradient">24/7 Ultra-HD & 4K CCTV Surveillance.</span>
                </h1>

                <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  High-definition surveillance engineered for independent villas, gated apartment communities, retail shops, and commercial factories across Avadi & Chennai. Full-color night vision, concealed conduit wiring, and live smartphone monitoring.
                </p>

                {/* Key Bullet Highlights */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "1080p to 4K ColorVu Night Vision",
                    "Surveillance-grade 24/7 HDD storage",
                    "100% Concealed conduit cabling",
                    "2-Year on-site hardware warranty",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-white/85">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#packages"
                    className="btn-crimson flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#EF1313]/30"
                  >
                    <span>View Camera Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/919884344075?text=Hi%20Broadnet,%20I%20am%20looking%20for%20CCTV%20Camera%20installation%20in%20Avadi.%20Please%20share%20a%20quotation."
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

              {/* Right Column: Visual Product Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Decorative Card Frame */}
                  <div className="relative bg-[#16143E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#16143E]/60 overflow-hidden">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#EF1313]/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
                          Surveillance Hardware
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          Active Stock in Avadi
                        </span>
                      </div>

                      {/* Hardware Image */}
                      <div className="relative h-56 sm:h-64 w-full flex items-center justify-center my-2">
                        <Image
                          src="/assets/dome_camera_clean.png"
                          alt="High-Definition CCTV Dome Camera System"
                          width={320}
                          height={260}
                          className="object-contain drop-shadow-[0_20px_35px_rgba(239,19,19,0.25)] hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-white font-bold text-lg">CP PLUS & Hikvision Pro</h2>
                            <p className="text-xs text-white/55">Smart AI Bullet & Dome Cameras</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-[#EF1313]/10 border border-[#EF1313]/25 px-3 py-1.5 rounded-lg">
                            Starts ₹1,399
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Float Badge */}
                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#120F2E] border border-white/15 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EF1313]/20 flex items-center justify-center text-[#EF1313] flex-shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">2,500+ Installed</div>
                      <div className="text-[11px] text-white/50">Homes & Corporates in Avadi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevance to Modern Security Challenges */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> The Modern Security Reality <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Why Professional CCTV Is Essential in Today&apos;s Environment
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                As residential neighborhoods expand and commercial activity intensifies in Chennai and Avadi, unmonitored boundaries create unnecessary vulnerability. Here is why an active surveillance network is the primary line of defense:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Active Deterrence of Trespassing",
                  // TODO: Proof needed for claim: "deters over 85%" [CONFIRM]
                  desc: "Visible, professionally positioned CCTV bullet cameras deter over 85% of opportunistic property trespassing, vehicle tampering, and boundary breaches before they occur.",
                },
                {
                  icon: Smartphone,
                  title: "Real-Time Peace of Mind While Away",
                  desc: "Working couples and frequent travelers can instantly check live feeds of elderly parents, children arriving from school, or pets with crystal-clear audio and zero lag.",
                },
                {
                  icon: Eye,
                  title: "24/7 ColorVu Night Vision Evidence",
                  desc: "Most security incidents occur under low light. Unlike older grainy black-and-white cameras, our ColorVu sensors record vivid, full-color footage with readable facial features and vehicle license plates.",
                },
                {
                  icon: Store,
                  title: "Commercial Cash Counter & Inventory Oversight",
                  desc: "Retail shops, clinics, and offices eliminate cash discrepancies, unauthorized employee shrinkage, and customer dispute confusion with high-angle HD cameras.",
                },
                {
                  icon: Cpu,
                  title: "AI Human & Vehicle Motion Filtering",
                  desc: "Forget spam alerts caused by stray animals, tree branches, or wind. Smart AcuSense AI filters movement to notify your phone only when an actual person or vehicle crosses your perimeter.",
                },
                {
                  icon: HardDrive,
                  title: "Legally Admissible High-Definition Evidence",
                  // TODO: Proof needed for claim: "legally admissible" [CONFIRM]
                  desc: "Surveillance-grade continuous recording ensures tamper-free timestamped footage, critical for police FIR reports, insurance claims, and legal documentation.",
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

        {/* Packages & Pricing Section */}
        <section id="packages" className="py-20 sm:py-28 bg-[#0B091E] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Transparent Packages <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Tailored CCTV Packages For Every Budget
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                Starting from single-camera additions to high-density commercial campuses with <strong>no upper ceiling</strong>. We customize cable lengths, hard disk capacities, and camera counts to match your exact premises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {CCTV_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} variant="dark" />
              ))}
            </div>

            {/* Scope / No Upper Ceiling Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 max-w-4xl mx-auto text-center">
              <h4 className="text-lg font-bold text-white mb-2 font-display">
                Need a Custom Configuration or Enterprise Quote?
              </h4>
              <p className="text-xs sm:text-sm text-white/65 max-w-2xl mx-auto mb-5 leading-relaxed">
                We handle industrial complexes, multi-acre warehouses, schools, and apartment associations requiring 16 to 128+ cameras, optical fiber media converters, and continuous NVR storage racks.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#quote-form"
                  className="btn-crimson text-xs font-bold"
                >
                  Request Custom Site Survey
                </a>
                <a
                  href="tel:+919884344075"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15"
                >
                  Direct Call: 98843 44075
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How We Deliver the Service (Workflow) */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> The Broadnet Standard <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                How We Deliver CCTV Installation
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Every installation is executed by certified in-house technicians—never subcontracted out. Here is what our 4-step installation protocol looks like:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKFLOW.map((w) => (
                <div
                  key={w.step}
                  className="p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/8 relative group hover:border-[#EF1313]/30 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-[#EF1313]/25 group-hover:text-[#EF1313] transition-colors font-display block mb-4">
                    {w.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#16143E] mb-3 font-display">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-[#16143E]/65 leading-relaxed font-body">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Verified Social Proof <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                What Our Surveillance Clients in Avadi Say
              </h2>
              <div className="flex items-center justify-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F59E0B]" />
                ))}
                <span className="text-xs font-bold text-[#16143E] ml-2">4.9 / 5.0 Average Rating</span>
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
                Frequently Asked Questions About CCTV Setup
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
        <RelatedSolutions currentKey="cameras" />

        {/* Dedicated Enquiry Section */}
        <div id="quote-form">
          <EnquirySection initialService="CCTV Installation & Services" initialType="security" />
        </div>
      </main>
      <Footer />
    </>
  );
}
