"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  Navigation,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import BroadnetLogo from "./BroadnetLogo";
import { SERVICES_LIST, CONTACT_INFO } from "@/data/services";

const QUICK_LINKS = [
  { label: "Home Overview", href: "/" },
  { label: "CCTV Lead Landing Page", href: "/cctv-landing" },
  { label: "Industries & Solutions", href: "/industries" },
  { label: "Projects & Installation Gallery", href: "/projects" },
  { label: "Service Areas (Chennai / Avadi)", href: "/service-areas" },
  { label: "About Us (12 Years / 10+ Staff)", href: "/about" },
  { label: "Blog & Local Guides", href: "/blog" },
  { label: "Contact & Technician Dispatch", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#16143E] text-white relative overflow-hidden pb-16 pt-16">
      {/* Top decorative gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EF1313] via-[#4E0DBA] to-[#EF1313]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BroadnetLogo variant="dark" />
            </div>

            <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-3">
              “{CONTACT_INFO.slogan}”
            </p>
            <p className="text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-5">
              CCTV: “{CONTACT_INFO.cctvTagline}”
            </p>

            <div className="space-y-2 text-xs text-white/70 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Operating Since 2014 · 12+ Years Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#EF1313]" />
                <span>Hikvision & CP PLUS Certified Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#A78BFA]" />
                <span>eSSL & Grandstream Authorised Partner</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-4">
              Explore Broadnet
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5 py-1"
                  >
                    <ArrowUpRight size={12} className="text-[#EF1313] opacity-60" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services in Priority Order (1 to 9) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-4">
              Services (Priority Order)
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={srv.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF1313]" />
                    <span className="truncate">#{srv.order}. {srv.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-4">
              Avadi Dispatch Office
            </h3>
            <address className="not-italic space-y-3.5 text-xs sm:text-[13px] text-white/70">
              <div className="flex gap-2.5">
                <MapPin size={16} className="text-[#EF1313] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">
                    1093, Fire Station Road, TNHB,
                  </span>
                  <span>Avadi, Chennai – 600 054</span>
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-[#A78BFA] hover:text-white flex items-center gap-1 font-bold text-[11px] block"
                  >
                    <Navigation size={11} /> Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5">
                <Phone size={16} className="text-[#EF1313] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919884344075" className="hover:text-white font-bold block text-white">
                    98843 44075
                  </a>
                  <a href="tel:+918681888111" className="hover:text-white font-bold block text-white/90">
                    86818 88111
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5">
                <Mail size={16} className="text-[#A78BFA] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:admin@broadnet.in" className="hover:text-white block">
                    admin@broadnet.in
                  </a>
                  <a href="mailto:support@broadnet.in" className="hover:text-white block">
                    support@broadnet.in
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5 pt-2 border-t border-white/10 text-[11px]">
                <Clock size={15} className="text-[#EF1313] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/90 font-medium">Mon — Sat: 9:00 AM — 7:00 PM</span>
                  <span className="block text-emerald-400">Emergency: 24/7 On-Call Support</span>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © {new Date().getFullYear()} Broadnet Internet Services. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/cctv-landing" className="hover:text-white transition-colors">
              CCTV Division
            </Link>
            <span>·</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">
              Service Areas
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Free Site Survey
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
