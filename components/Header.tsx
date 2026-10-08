"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Camera,
  Fingerprint,
  PhoneCall,
  Wifi,
  Network,
  BellRing,
  Lock,
  Car,
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import BroadnetLogo from "./BroadnetLogo";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { SERVICES_LIST } from "@/data/services";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  cctv: Camera,
  "biometric-attendance": Fingerprint,
  "door-phones": PhoneCall,
  "enterprise-wifi": Wifi,
  networking: Network,
  "intrusion-alarms": BellRing,
  "access-control": Lock,
  "entrance-security": Car,
  internet: Globe,
};

export default function Header({ activePage = "" }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/" || activePage === "Home";
  const isServices =
    pathname?.startsWith("/security") ||
    pathname?.startsWith("/services") ||
    pathname?.startsWith("/cctv") ||
    pathname?.startsWith("/internet") ||
    activePage === "Services";
  const isIndustries = pathname?.startsWith("/industries") || activePage === "Industries";
  const isProjects = pathname?.startsWith("/projects") || activePage === "Projects";
  const isServiceAreas = pathname?.startsWith("/service-areas") || activePage === "Service Areas";
  const isAbout = pathname?.startsWith("/about") || activePage === "About Us";
  const isBlog = pathname?.startsWith("/blog") || activePage === "Blog";
  const isContact = pathname?.startsWith("/contact") || activePage === "Contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-header-scrolled" : "glass-header"
        }`}
        style={{ overflow: "visible" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18 sm:h-20 gap-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <BroadnetLogo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-[#16143E]/[0.03] p-1 rounded-full border border-[#16143E]/10 backdrop-blur-md">
              <Link
                href="/"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  isHomePage && !isServices && !isIndustries && !isProjects && !isServiceAreas && !isAbout && !isBlog && !isContact
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Home
              </Link>

              {/* Services Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                    isServices
                      ? "text-[#4E0DBA] bg-white shadow-xs"
                      : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-[#EF1313]" : "text-[#16143E]/50"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full -left-20 mt-2 w-[440px] rounded-3xl bg-white/98 backdrop-blur-2xl border border-[#16143E]/12 shadow-2xl p-3 z-50"
                    >
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#16143E]/8 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#16143E]/50">
                          Services in Priority Order
                        </span>
                        <Link
                          href="/cctv-landing"
                          onClick={() => setDropdownOpen(false)}
                          className="text-[10px] font-bold text-[#EF1313] hover:underline"
                        >
                          CCTV Landing Page →
                        </Link>
                      </div>

                      <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1">
                        {SERVICES_LIST.map((srv) => {
                          const Icon = ICON_MAP[srv.id] || ShieldCheck;
                          const isLead = srv.isLeadDivision;
                          return (
                            <Link
                              key={srv.id}
                              href={srv.href}
                              onClick={() => setDropdownOpen(false)}
                              className={`flex items-start gap-2.5 p-2 rounded-xl transition-all group ${
                                isLead
                                  ? "bg-[#FFF0F0] border border-[#EF1313]/25 hover:bg-[#FFE5E5]"
                                  : "hover:bg-[#16143E]/5"
                              }`}
                            >
                              <div
                                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  isLead
                                    ? "bg-[#EF1313] text-white"
                                    : "bg-[#4E0DBA]/10 text-[#4E0DBA] group-hover:bg-[#4E0DBA] group-hover:text-white"
                                } transition-colors`}
                              >
                                <Icon size={14} />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold text-[#16143E] group-hover:text-[#4E0DBA] truncate" style={{ fontFamily: "Syne, sans-serif" }}>
                                    #{srv.order}. {srv.shortTitle}
                                  </span>
                                  {srv.badge && (
                                    <span
                                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                                        isLead
                                          ? "bg-[#EF1313] text-white"
                                          : "bg-[#16143E]/5 text-[#16143E]/70"
                                      }`}
                                    >
                                      {srv.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10.5px] text-[#16143E]/60 truncate mt-0.5">
                                  {srv.tagline}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#16143E]/8 flex items-center justify-between px-2 text-xs">
                        <Link
                          href="/security#solution-finder"
                          onClick={() => setDropdownOpen(false)}
                          className="text-[11px] font-bold text-[#4E0DBA] hover:underline flex items-center gap-1"
                        >
                          <Sparkles size={11} className="text-[#EF1313]" /> Solution Advisor
                        </Link>
                        <a
                          href="tel:+919884344075"
                          className="text-[11px] font-bold text-[#EF1313] hover:underline"
                        >
                          Direct Call: 98843 44075
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/industries"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  isIndustries
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Industries
              </Link>

              <Link
                href="/projects"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  isProjects
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Projects
              </Link>

              <Link
                href="/service-areas"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  isServiceAreas
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Service Areas
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  isAbout
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                About Us
              </Link>

              <Link
                href="/blog"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  isBlog
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                  isContact
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="tel:+919884344075"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#16143E] hover:text-[#EF1313] hover:bg-[#16143E]/5 transition-colors"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <Phone size={14} className="text-[#EF1313]" />
                <span>98843 44075</span>
              </a>

              <a
                href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp Broadnet"
              >
                <MessageCircle size={16} />
              </a>

              <Link
                href="/contact#enquiry"
                onClick={handleEnquiryClick}
                className="btn-crimson text-xs py-2 px-4 shadow-sm glow-btn-crimson font-bold"
              >
                Free Site Visit
              </Link>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2.5 rounded-xl text-[#16143E] hover:bg-[#16143E]/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white/98 backdrop-blur-2xl border-t border-[#16143E]/10 max-h-[85vh] overflow-y-auto px-4 py-4 shadow-2xl"
            >
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div className="rounded-xl border border-[#16143E]/8 overflow-hidden bg-[#FAFAFE]">
                  <div className="flex items-center justify-between pr-2">
                    <span className="px-4 py-2.5 text-sm font-bold text-[#16143E] flex items-center gap-2">
                      <Camera size={16} className="text-[#EF1313]" />
                      <span>Services (Priority Order)</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2 text-[#16143E]/60"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-[#EF1313]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 space-y-1 border-t border-[#16143E]/8 pt-2">
                      {SERVICES_LIST.map((srv) => (
                        <Link
                          key={srv.id}
                          href={srv.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-[#16143E]/85 hover:bg-white"
                        >
                          <span>#{srv.order}. {srv.title}</span>
                          <span className="text-[10px] text-[#EF1313] font-bold">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/cctv-landing"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#EF1313] bg-[#FFF0F0] border border-[#EF1313]/20"
                >
                  <span>CCTV Lead Division Page</span>
                  <span>🔥</span>
                </Link>

                <Link
                  href="/industries"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  Industries & Solutions
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  Projects & Gallery
                </Link>

                <Link
                  href="/service-areas"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  Service Areas (Chennai / Avadi)
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  About Us (12 Yrs / 10+ Staff)
                </Link>

                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  Blog & Knowledge Hub
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  Contact & Dispatch Office
                </Link>
              </div>

              {/* Mobile CTA Strip */}
              <div className="pt-4 mt-4 border-t border-[#16143E]/10 flex flex-col gap-2">
                <a
                  href="tel:+919884344075"
                  className="w-full py-2.5 rounded-xl bg-[#16143E] text-white text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-[#EF1313]" /> Call 98843 44075 / 86818 88111
                </a>
                <Link
                  href="/contact#enquiry"
                  onClick={handleEnquiryClick}
                  className="w-full btn-crimson text-xs py-2.5 justify-center"
                >
                  Claim Free Site Visit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}