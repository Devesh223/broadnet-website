"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Shield,
  Camera,
  Zap,
  Lock,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

const SECURITY_SUB_ITEMS = [
  {
    label: "All Security Solutions",
    href: "/security",
    subtitle: "Complete ELV facility overview & packages",
    badge: "Hub",
    color: "#4E0DBA",
    icon: Shield,
  },
  {
    label: "HD & 4K CCTV Cameras",
    href: "/security/cameras",
    subtitle: "CP PLUS & Hikvision certified surveillance",
    badge: "From ₹1,399",
    color: "#EF1313",
    icon: Camera,
  },
  {
    label: "Smart Video Door Phones",
    href: "/security/door-phones",
    subtitle: "Touch intercom & remote gate release",
    badge: "From ₹3,999",
    color: "#4E0DBA",
    icon: Zap,
  },
  {
    label: "Biometric Access Control",
    href: "/security/access-control",
    subtitle: "Contactless face scan & attendance logs",
    badge: "From ₹4,500",
    color: "#4E0DBA",
    icon: Lock,
  },
  {
    label: "Perimeter Intrusion Alarms",
    href: "/security/intrusion-alarms",
    subtitle: "Laser trip beams & 110dB sirens",
    badge: "From ₹6,999",
    color: "#EF1313",
    icon: AlertTriangle,
  },
];

export default function Header({ activePage = "" }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSecurityOpen, setMobileSecurityOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/" || activePage === "Home";
  const isSecurity = pathname?.startsWith("/security") || activePage === "Security";
  const isInternet = pathname?.startsWith("/internet") || activePage === "Internet";
  const isAbout = pathname?.startsWith("/about") || activePage === "About Us";
  const isContact = pathname?.startsWith("/contact") || activePage === "Contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        if (document.getElementById(hashId)) {
          scrollToWithPhysics(hashId);
        }
      }, 450);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-expand mobile security when browsing security pages
  useEffect(() => {
    if (isSecurity) {
      setMobileSecurityOpen(true);
    }
  }, [isSecurity]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 260);
  };

  const handleCoverageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    if (isHomePage) {
      const el = document.getElementById("coverage");
      if (el) {
        e.preventDefault();
        window.history.pushState(null, "", "#coverage");
        scrollToWithPhysics("coverage");
      }
    }
  };

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const enquiryEl = document.getElementById("enquiry");
    if (enquiryEl) {
      e.preventDefault();
      window.history.pushState(null, "", "#enquiry");
      scrollToWithPhysics("enquiry");
    }
  };

  return (
    <>
      {/* ── Main header bar with Glassmorphism ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-header-scrolled" : "glass-header"
        }`}
        style={{ overflow: "visible" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ overflow: "visible" }}>
          <div className="flex items-center h-16 gap-3 sm:gap-4" style={{ overflow: "visible" }}>

            {/* Left: Logo */}
            <div className="flex-shrink-0 cursor-pointer group flex items-center">
              <Link
                href="/"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    window.history.pushState(null, "", "/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMobileOpen(false);
                }}
              >
                <Image
                  src="/assets/logo.png"
                  alt="Broadnet Internet & Security Services Logo"
                  width={200}
                  height={82}
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Center: Nav links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#16143E]/[0.03] p-1 rounded-full border border-white/40 backdrop-blur-sm">
              {/* Home */}
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-full group ${
                  isHomePage && !isSecurity && !isInternet && !isAbout && !isContact
                    ? "text-[#4E0DBA] bg-white shadow-sm"
                    : "text-[#16143E]/70 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Home
              </Link>

              {/* Security with Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href="/security"
                  className={`relative px-3.5 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-full flex items-center gap-1 group ${
                    isSecurity
                      ? "text-[#4E0DBA] bg-white shadow-sm"
                      : "text-[#16143E]/70 hover:text-[#16143E] hover:bg-white/60"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span>Security</span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-[#4E0DBA]" : "text-[#16143E]/40 group-hover:text-[#16143E]"
                    }`}
                  />
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#4E0DBA] transition-transform duration-200 origin-left ${
                      isSecurity ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>

                {/* Floating Glassmorphic Dropdown */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2.5 z-50">
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.94, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(2px)" }}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 26,
                          mass: 0.6,
                        }}
                        className="w-[375px] rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#16143E]/10 shadow-2xl shadow-[#16143E]/18 p-2.5"
                        style={{
                          WebkitBackdropFilter: "blur(24px) saturate(180%)",
                          backdropFilter: "blur(24px) saturate(180%)",
                          willChange: "transform, opacity",
                        }}
                      >
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#16143E]/45 px-3 py-1.5 font-display flex items-center justify-between">
                          <span>Electronic Security Domains</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EF1313] animate-pulse" />
                        </div>

                        <div className="space-y-1 mt-1">
                          {SECURITY_SUB_ITEMS.map((item) => {
                            const Icon = item.icon;
                            const isCurrent = pathname === item.href;
                            return (
                              <motion.div
                                key={item.href}
                                whileHover={{
                                  y: -2.5,
                                  scale: 1.02,
                                  transition: { type: "spring", stiffness: 450, damping: 20 },
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="relative rounded-xl"
                              >
                                <Link
                                  href={item.href}
                                  onClick={() => setDropdownOpen(false)}
                                  className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group border ${
                                    isCurrent
                                      ? "bg-[#4E0DBA]/10 border-[#4E0DBA]/25 shadow-sm"
                                      : "bg-transparent border-transparent hover:bg-white hover:border-[#4E0DBA]/20 hover:shadow-lg hover:shadow-[#4E0DBA]/10"
                                  }`}
                                >
                                  <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-110 group-hover:shadow-md"
                                    style={{ background: `${item.color}15`, color: item.color }}
                                  >
                                    <Icon size={16} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1.5">
                                      <span className="text-xs font-bold text-[#16143E] group-hover:text-[#4E0DBA] transition-colors font-display">
                                        {item.label}
                                      </span>
                                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#16143E]/5 text-[#16143E]/70 group-hover:bg-[#4E0DBA]/10 group-hover:text-[#4E0DBA] transition-colors flex-shrink-0">
                                        {item.badge}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-[#16143E]/60 group-hover:text-[#16143E]/80 transition-colors line-clamp-1 mt-0.5">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* Bottom Advisor Teaser */}
                        <div className="mt-2 pt-2 border-t border-[#16143E]/8">
                          <motion.div
                            whileHover={{
                              scale: 1.02,
                              y: -1.5,
                              transition: { type: "spring", stiffness: 400, damping: 20 },
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              href="/security#solution-finder"
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#16143E] to-[#252060] text-white hover:shadow-lg hover:shadow-[#16143E]/20 transition-all text-xs font-semibold group"
                            >
                              <div className="flex items-center gap-2">
                                <Sparkles size={14} className="text-[#EF1313] animate-pulse" />
                                <span className="text-[11px] font-display">Interactive Solution Advisor</span>
                              </div>
                              <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform text-white/90" />
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Internet */}
              <Link
                href="/internet"
                className={`relative px-3.5 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-full group ${
                  isInternet
                    ? "text-[#4E0DBA] bg-white shadow-sm"
                    : "text-[#16143E]/70 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Internet
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#4E0DBA] transition-transform duration-200 origin-left ${
                    isInternet ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              {/* Coverage */}
              <Link
                href="/#coverage"
                onClick={handleCoverageClick}
                className="relative px-3.5 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-full text-[#16143E]/70 hover:text-[#16143E] hover:bg-white/60 group"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Coverage
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#4E0DBA] transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100" />
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className={`relative px-3.5 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-full group ${
                  isAbout
                    ? "text-[#4E0DBA] bg-white shadow-sm"
                    : "text-[#16143E]/70 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                About Us
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#4E0DBA] transition-transform duration-200 origin-left ${
                    isAbout ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`relative px-3.5 py-1.5 text-sm font-semibold tracking-wide transition-all duration-200 rounded-full group ${
                  isContact
                    ? "text-[#4E0DBA] bg-white shadow-sm"
                    : "text-[#16143E]/70 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Contact
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#4E0DBA] transition-transform duration-200 origin-left ${
                    isContact ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact#enquiry"
                onClick={handleEnquiryClick}
                className="btn-crimson"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Request Enquiry
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-[#16143E] hover:bg-[#16143E]/5 transition-colors"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden border-t border-white/50 bg-white/95 backdrop-blur-2xl overflow-y-auto max-h-[85vh] shadow-2xl"
              style={{
                WebkitBackdropFilter: "blur(24px) saturate(190%)",
                backdropFilter: "blur(24px) saturate(190%)",
              }}
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                    isHomePage && !isSecurity && !isInternet && !isAbout && !isContact
                      ? "bg-[#4E0DBA]/8 text-[#4E0DBA]"
                      : "text-[#16143E]/75 hover:bg-[#16143E]/5"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Home
                </Link>

                {/* Security Accordion in Mobile */}
                <div className="rounded-2xl border border-[#16143E]/8 overflow-hidden bg-[#16143E]/[0.02]">
                  <div className="flex items-center justify-between pr-2">
                    <Link
                      href="/security"
                      onClick={() => setMobileOpen(false)}
                      className={`min-h-[44px] flex-1 flex items-center px-4 py-2.5 text-sm font-semibold transition-colors ${
                        isSecurity ? "text-[#4E0DBA]" : "text-[#16143E]/85"
                      }`}
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      <Shield size={16} className="mr-2 text-[#4E0DBA]" />
                      <span>Security Solutions</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileSecurityOpen(!mobileSecurityOpen)}
                      className="p-2 rounded-xl text-[#16143E]/60 hover:text-[#16143E] hover:bg-[#16143E]/5"
                      aria-label="Toggle Security Submenu"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileSecurityOpen ? "rotate-180 text-[#4E0DBA]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileSecurityOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="px-3 pb-3 pt-1 space-y-1 bg-white/60 border-t border-[#16143E]/5"
                      >
                        {SECURITY_SUB_ITEMS.map((sub) => {
                          const Icon = sub.icon;
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                                isSubActive
                                  ? "bg-[#4E0DBA] text-white"
                                  : "text-[#16143E]/75 hover:bg-[#16143E]/5"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <Icon size={14} className={isSubActive ? "text-white" : "text-[#4E0DBA]"} />
                                <span>{sub.label}</span>
                              </div>
                              <span
                                className={`text-[10px] px-1.5 py-0.5 rounded ${
                                  isSubActive ? "bg-white/20 text-white" : "bg-[#16143E]/5 text-[#16143E]/60"
                                }`}
                              >
                                {sub.badge}
                              </span>
                            </Link>
                          );
                        })}
                        <Link
                          href="/security#solution-finder"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#16143E] text-white text-[11px] font-bold mt-2"
                        >
                          <Sparkles size={12} className="text-[#EF1313]" />
                          <span>Interactive Solution Advisor</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Internet */}
                <Link
                  href="/internet"
                  onClick={() => setMobileOpen(false)}
                  className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                    isInternet
                      ? "bg-[#4E0DBA]/8 text-[#4E0DBA]"
                      : "text-[#16143E]/75 hover:bg-[#16143E]/5"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Internet & Broadband
                </Link>

                {/* Coverage */}
                <Link
                  href="/#coverage"
                  onClick={handleCoverageClick}
                  className="min-h-[44px] flex items-center px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#16143E]/75 hover:bg-[#16143E]/5 transition-colors"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Coverage Area
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                    isAbout
                      ? "bg-[#4E0DBA]/8 text-[#4E0DBA]"
                      : "text-[#16143E]/75 hover:bg-[#16143E]/5"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  About Broadnet
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                    isContact
                      ? "bg-[#4E0DBA]/8 text-[#4E0DBA]"
                      : "text-[#16143E]/75 hover:bg-[#16143E]/5"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Contact & Support
                </Link>

                {/* CTA & Quick dials */}
                <div className="pt-2 border-t border-[#16143E]/10 flex flex-col gap-2">
                  <Link
                    href="/contact#enquiry"
                    onClick={handleEnquiryClick}
                    className="btn-crimson min-h-[44px] justify-center w-full shadow-lg shadow-[#EF1313]/25"
                  >
                    Request Enquiry
                  </Link>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <a
                      href="tel:+919884344075"
                      className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#16143E]/15 text-xs font-semibold text-[#16143E] bg-[#16143E]/4 hover:bg-[#16143E]/8 transition-colors active:scale-98"
                    >
                      <Phone size={14} className="text-[#4E0DBA]" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#25D366]/30 text-xs font-semibold text-[#16143E] bg-[#25D366]/8 hover:bg-[#25D366]/15 transition-colors active:scale-98"
                    >
                      <MessageCircle size={14} className="text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}