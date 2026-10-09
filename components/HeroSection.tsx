"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Eye,
  Sun,
  Moon,
  Activity,
  Zap,
  ZoomIn,
  Volume2,
  VolumeX,
  Crosshair,
  Maximize2,
  Camera,
  Layers,
  Clock,
  Radio,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { COMPANY_NUMBERS } from "@/data/services";
import { useLanguage } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

type CameraChannel = {
  id: string;
  name: string;
  location: string;
  lens: string;
  targetType: string;
  confidence: string;
  alert: string;
  badge: string;
  fps: number;
  bitrate: string;
};

const CAMERA_CHANNELS: CameraChannel[] = [
  {
    id: "cam-01",
    name: "CAM 01",
    location: "AVADI MAIN GATE & DRIVEWAY",
    lens: "4mm ColorVu F1.0",
    targetType: "VEHICLE & HUMAN",
    confidence: "99.4%",
    alert: "License Plate Captured: TN-02-BL-4075",
    badge: "ColorVu 24/7",
    fps: 30,
    bitrate: "4.8 Mbps",
  },
  {
    id: "cam-02",
    name: "CAM 02",
    location: "PERIMETER FENCE & WAREHOUSE",
    lens: "2.8mm Dual-Light IR",
    targetType: "INTRUSION BEAM",
    confidence: "98.7%",
    alert: "Perimeter Line Secure · 0 Blind Spots",
    badge: "Smart IR Matrix",
    fps: 30,
    bitrate: "3.9 Mbps",
  },
  {
    id: "cam-03",
    name: "CAM 03",
    location: "CORPORATE IT RACK & LOBBY",
    lens: "6mm PTZ Optical Zoom",
    targetType: "FACIAL RECOGNITION",
    confidence: "99.8%",
    alert: "eSSL Biometric Match Verified",
    badge: "AI DeepinView",
    fps: 30,
    bitrate: "5.2 Mbps",
  },
];

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const [tick, setTick] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState<number>(0);
  const [visionMode, setVisionMode] = useState<"colorvu" | "night" | "ai">("colorvu");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      return;
    }
    const id = setInterval(() => setTick((t) => (t + 1) % COMPANY_NUMBERS.length), 3200);
    return () => clearInterval(id);
  }, []);

  // Live ticking clock for CCTV telemetry HUD
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentCam = CAMERA_CHANNELS[selectedChannel];

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-center items-center overflow-hidden pt-28 sm:pt-32 pb-16 bg-white text-[#16143E] scroll-mt-24"
    >
      {/* Background Subtle Geometric Grid & Radial Aurora Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(78,13,186,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(78,13,186,0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Purple top-left aura */}
        <div
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(78,13,186,0.18) 0%, transparent 70%)" }}
        />
        {/* Crimson top-right aura */}
        <div
          className="absolute top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(239,19,19,0.16) 0%, transparent 70%)" }}
        />
        {/* Subtle center ambient light */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse at center, rgba(78,13,186,0.12) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Top Floating Dispatch & Trust Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
          {/* Live Dispatch Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 radar-dot flex-shrink-0" />
            <span>
              <strong>Active Dispatch:</strong> Technicians on-call in Avadi & Chennai · &lt;2h SLA
            </span>
          </motion.div>

          {/* Social Proof Review Rating */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16143E]/[0.03] border border-[#16143E]/10 backdrop-blur-sm text-xs font-semibold text-[#16143E] shadow-xs"
          >
            <div className="flex items-center text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-[#F59E0B]" />
              ))}
            </div>
            <span>4.9/5 Rating</span>
            <span className="text-[#16143E]/30">|</span>
            <span>12+ Yrs in Avadi</span>
            <span className="text-[#16143E]/30">|</span>
            <span className="text-[#EF1313] font-bold">500+ Projects</span>
          </motion.div>
        </div>

        {/* Dual-Column Split Hero (Editorial Text on Left + High-Tech HUD Simulator on Right) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-14">
          {/* Left Column: Headlines, Value Prop, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Slogan & Lead Division Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3.5 flex flex-wrap items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] border border-[#EF1313]/25 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>{t("hero.badge")}</span>
              </div>
            </motion.div>

            {/* Main Punchy Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5 text-[#16143E]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {lang === "ta" ? (
                <>
                  நம்பகமான சிசிடிவி.{" "}
                  <span className="text-[#EF1313] relative inline-block">
                    பாதுகாப்பு அமைப்புகள்.
                    <span className="absolute left-0 bottom-1 w-full h-1 bg-[#EF1313]/20 rounded-full" />
                  </span>
                </>
              ) : (
                <>
                  Engineered{" "}
                  <span className="text-[#EF1313] relative inline-block">
                    Surveillance.
                    <span className="absolute left-0 bottom-1 w-full h-1 bg-[#EF1313]/20 rounded-full" />
                  </span>
                  <br />
                  Intelligent <span className="text-[#4E0DBA]">Security Systems.</span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-[#16143E]/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {t("hero.desc")}
            </motion.p>

            {/* Above the fold CTAs: Exactly One Primary & One Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-6"
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => {
                  trackEvent("quote_request", { category: "Hero", label: "PrimaryCTA" });
                  scrollToWithPhysics("enquiry");
                }}
                className="btn-crimson min-h-[52px] px-8 text-sm sm:text-base font-bold justify-center glow-btn-crimson group cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                <span>{t("hero.primaryCta")}</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="https://wa.me/919884344075?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20and%20schedule%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { category: "Hero", label: "SecondaryCTA" })}
                className="min-h-[52px] px-6 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#15803d] text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>{t("hero.whatsappCta")} · 98843 44075</span>
              </a>
            </motion.div>

            {/* Reassurance line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-2 text-xs text-[#16143E]/75 font-medium"
            >
              <Sparkles size={14} className="text-[#EF1313] flex-shrink-0" />
              <span>
                <strong>100% Free On-Site Inspection</strong> across Avadi & Chennai · Zero Obligation Survey
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive CCTV Command Center HUD Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-3xl dark-hud-glass p-4 sm:p-5 text-white shadow-2xl overflow-hidden border border-white/15">
              {/* Scanline animation layer */}
              <div className="hud-scanline" />

              {/* Top Viewport Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono font-bold tracking-wider text-red-400">REC</span>
                  <span className="text-white/40">|</span>
                  <span className="font-mono text-white/90 text-[11px] font-bold">
                    {currentCam.name} · {currentCam.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/70 tracking-wider">
                    Illustration
                  </span>
                  <span className="font-mono text-[11px] text-white/70 hidden sm:inline">
                    {currentTime || "12:00:00"} IST
                  </span>
                </div>
              </div>

              {/* Multi-Channel Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                {CAMERA_CHANNELS.map((cam, idx) => (
                  <button
                    key={cam.id}
                    type="button"
                    onClick={() => setSelectedChannel(idx)}
                    className={`py-1.5 px-2 rounded-xl text-[10.5px] font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedChannel === idx
                        ? "bg-white/20 text-white border border-white/30 shadow-xs"
                        : "bg-white/5 text-white/60 hover:bg-white/10 border border-transparent"
                    }`}
                  >
                    <Camera size={11} className={selectedChannel === idx ? "text-[#EF1313]" : "text-white/40"} />
                    <span>{cam.name}</span>
                  </button>
                ))}
              </div>

              {/* Simulated Camera Feed Viewport */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden mb-3 border border-white/10 flex flex-col justify-between p-3.5 select-none transition-colors duration-500 bg-slate-950">
                {/* Background Simulation based on Vision Mode */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    visionMode === "colorvu" ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    background:
                      "radial-gradient(ellipse at 40% 30%, #1e1b4b 0%, #0f172a 60%, #020617 100%)",
                  }}
                >
                  {/* ColorVu daylight grid elements */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: "radial-gradient(#818cf8 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-indigo-500/15 blur-2xl" />
                </div>

                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    visionMode === "night" ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    background:
                      "radial-gradient(ellipse at center, #0f172a 0%, #030712 70%, #000000 100%)",
                  }}
                >
                  {/* Infrared green telemetry mesh */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(34,197,94,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.15) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color" />
                </div>

                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    visionMode === "ai" ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{
                    background:
                      "radial-gradient(ellipse at center, #2e1065 0%, #172554 60%, #020617 100%)",
                  }}
                >
                  {/* AI Matrix Mesh */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(168,85,247,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                {/* Viewport Corners HUD Crosshairs */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/60 pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/60 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/60 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/60 pointer-events-none" />

                {/* Top Overlay Badges inside Feed */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 font-bold">
                    4K UHD · {currentCam.fps} FPS · H.265+
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
                      {zoomLevel}x Optical Zoom
                    </span>
                    <button
                      type="button"
                      onClick={() => setAudioEnabled(!audioEnabled)}
                      className="p-1 rounded bg-black/60 border border-white/10 text-white/80 hover:text-white cursor-pointer"
                      title="Audio Stream"
                    >
                      {audioEnabled ? (
                        <Volume2 size={12} className="text-emerald-400" />
                      ) : (
                        <VolumeX size={12} className="text-white/50" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Simulated AI Target Recognition Bounding Box in Feed */}
                <div
                  className="relative z-10 my-auto flex flex-col items-center justify-center transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel === 1 ? 1 : zoomLevel === 2 ? 1.15 : 1.3})` }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className={`border-2 border-dashed rounded-lg px-4 py-2 text-center backdrop-blur-xs transition-colors duration-300 ${
                      visionMode === "colorvu"
                        ? "border-[#EF1313]/70 bg-[#EF1313]/10 text-white shadow-lg shadow-[#EF1313]/20"
                        : visionMode === "night"
                        ? "border-emerald-400/70 bg-emerald-500/10 text-emerald-300 shadow-lg shadow-emerald-500/20"
                        : "border-purple-400/80 bg-purple-500/15 text-purple-200 shadow-lg shadow-purple-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase font-mono font-bold tracking-wider">
                      <Crosshair size={11} />
                      <span>
                        [ AI TARGET: {currentCam.targetType} · {currentCam.confidence} ]
                      </span>
                    </div>
                    <div className="text-xs font-bold mt-0.5">
                      {currentCam.alert}
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Overlay Telemetry inside Feed */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/70">
                  <span>LAT 13.1143° N · LON 80.1009° E</span>
                  <span className="text-emerald-400 font-bold">
                    BITRATE: {currentCam.bitrate} · {audioEnabled ? "AUDIO 2-WAY ACTIVE" : "AUDIO MUTED"}
                  </span>
                </div>
              </div>

              {/* Interactive Vision Mode & Zoom Controls */}
              <div className="bg-white/5 rounded-2xl p-2.5 border border-white/10 mb-3 flex flex-wrap items-center justify-between gap-2">
                {/* Vision Modes */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setVisionMode("colorvu")}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      visionMode === "colorvu"
                        ? "bg-[#EF1313] text-white shadow-md shadow-[#EF1313]/30"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    <Sun size={12} />
                    <span>ColorVu Day</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisionMode("night")}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      visionMode === "night"
                        ? "bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/30"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    <Moon size={12} />
                    <span>Smart IR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisionMode("ai")}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      visionMode === "ai"
                        ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    <Sparkles size={12} />
                    <span>AI Matrix</span>
                  </button>
                </div>

                {/* Optical Zoom Switcher */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
                  <span className="text-[10px] text-white/50 px-1 font-mono">ZOOM:</span>
                  {[1, 2, 4].map((z) => (
                    <button
                      key={z}
                      type="button"
                      onClick={() => setZoomLevel(z)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold cursor-pointer transition-colors ${
                        zoomLevel === z ? "bg-white text-[#16143E]" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {z}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Certified Highlights Pill List */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-white/80">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-emerald-400 block font-bold">Hikvision & CP+</span>
                  <span>Certified Engineers</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[#A78BFA] block font-bold">&lt; 2-Hour Dispatch</span>
                  <span>Avadi & Surroundings</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[#EF1313] block font-bold">Concealed Wiring</span>
                  <span>Neat Clean Finish</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Metric Numbers Strip with Premium Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full"
        >
          {COMPANY_NUMBERS.map((m, i) => (
            <div
              key={m.label}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-center relative overflow-hidden group cursor-pointer ${
                tick === i
                  ? "border-[#4E0DBA]/40 bg-gradient-to-b from-[#4E0DBA]/[0.08] to-white shadow-lg shadow-[#4E0DBA]/5 scale-[1.02]"
                  : "border-[#16143E]/10 bg-white/90 shadow-2xs hover:border-[#4E0DBA]/30 hover:shadow-sm"
              }`}
              onClick={() => setTick(i)}
            >
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#16143E] mb-1 group-hover:text-[#4E0DBA] transition-colors"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {m.value}
              </div>
              <div
                className="text-xs sm:text-[13px] text-[#16143E] font-bold uppercase tracking-wider mb-0.5"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {m.label}
              </div>
              <div
                className="text-[11px] text-[#EF1313] font-semibold"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {m.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-10 flex flex-col items-center gap-1 text-[#16143E]/40 z-20">
        <span className="text-[10px] tracking-widest uppercase font-bold">
          Explore Services
        </span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}