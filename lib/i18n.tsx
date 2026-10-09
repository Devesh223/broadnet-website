"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ta";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    // Utility Bar
    "util.payBill": "Pay Bill",
    "util.raiseTicket": "Raise a Ticket",
    "util.speedTest": "Speed Test",
    "util.sla": "< 2h Technician Response",
    "util.call": "Call: 98843 44075",

    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.cctv": "CCTV Security",
    "nav.internet": "Fiber Broadband",
    "nav.projects": "Projects",
    "nav.areas": "Service Areas",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.freeQuote": "Free Quote",

    // Hero
    "hero.badge": "Lead Division · Surveillance & Security",
    "hero.title1": "Engineered Surveillance.",
    "hero.title2": "Intelligent Security Systems.",
    "hero.desc":
      "Avadi & Chennai's certified technology integrator for Hikvision & CP PLUS CCTV cameras, eSSL biometric attendance, smart video door phones, and optical enterprise networking. Backed by guaranteed < 2-hour technician dispatch and genuine warranties.",
    "hero.primaryCta": "Get Free Quote & Site Visit",
    "hero.callCta": "Call 98843 44075",
    "hero.whatsappCta": "WhatsApp Tech Desk",
    "hero.hudLabel": "Interactive Security Illustration",

    // Trust Bar
    "trust.experience": "12+ Years Established in Avadi",
    "trust.sla": "< 2-Hour Local Technician Response",
    "trust.survey": "100% Free On-Site Inspection",
    "trust.genuine": "Authorized Hikvision & CP PLUS Partner",
    "trust.reviews": "4.9/5 Rating (500+ Google Reviews)",

    // Sections
    "section.topServices": "Core Security & Network Services",
    "section.topServicesSub": "Professional turnkey engineering for residences, apartments & commercial facilities.",
    "section.viewAllServices": "View All 9 Services & Solutions →",
    "section.pricing": "Turnkey CCTV Package Pricing",
    "section.process": "Our 6-Step Precision Process",
    "section.fiber": "Fiber Broadband in Avadi & Nearby Areas",
    "section.fiberSub": "Private optical fiber network with symmetric speeds and zero evening throttling.",
  },
  ta: {
    // Utility Bar
    "util.payBill": "கட்டணம் செலுத்த",
    "util.raiseTicket": "புகார் பதிவு",
    "util.speedTest": "வேக சோதனை",
    "util.sla": "< 2 மணிநேர விரைவு சேவை",
    "util.call": "அழைக்க: 98843 44075",

    // Navigation
    "nav.home": "முகப்பு",
    "nav.services": "சேவைகள்",
    "nav.cctv": "சிசிடிவி பாதுகாப்பு",
    "nav.internet": "ஃபைபர் பிராட்பேண்ட்",
    "nav.projects": "திட்டங்கள்",
    "nav.areas": "சேவை பகுதிகள்",
    "nav.about": "எங்களை பற்றி",
    "nav.contact": "தொடர்புக்கு",
    "nav.freeQuote": "இலவச மதிப்பீடு",

    // Hero
    "hero.badge": "முதன்மை பிரிவு · சிசிடிவி & பாதுகாப்பு தீர்வுகள்",
    "hero.title1": "நம்பகமான சிசிடிவி.",
    "hero.title2": "பாதுகாப்பு அமைப்புகள்.",
    "hero.desc":
      "ஆவடி மற்றும் சென்னை முழுவதும் ஹிக்விஷன், சிபி பிளஸ் சிசிடிவி கேமராக்கள், பயோமெட்ரிக் வருகைப் பதிவு, வீடியோ டோர் போன் மற்றும் ஃபைபர் நெட்வொர்க்கிங் அமைப்புகள். 2 மணிநேர விரைவு தொழில்நுட்ப சேவை உத்தரவாதம்.",
    "hero.primaryCta": "இலவச ஆய்வு & மதிப்பீடு பெறுக",
    "hero.callCta": "அழைக்க: 98843 44075",
    "hero.whatsappCta": "வாட்ஸ்அப் செய்தி",
    "hero.hudLabel": "பாதுகாப்பு மாதிரி விளக்கம்",

    // Trust Bar
    "trust.experience": "ஆவடியில் 12+ ஆண்டுகள் அனுபவம்",
    "trust.sla": "< 2 மணிநேர உள்ளூர் சேவை",
    "trust.survey": "100% இலவச நேரடி ஆய்வு",
    "trust.genuine": "அங்கீகரிக்கப்பட்ட ஹிக்விஷன் & சிபி பிளஸ் பார்ட்னர்",
    "trust.reviews": "4.9/5 மதிப்பீடு (500+ கூகுள் விமர்சனங்கள்)",

    // Sections
    "section.topServices": "முக்கிய பாதுகாப்பு & நெட்வொர்க் சேவைகள்",
    "section.topServicesSub": "வீடுகள், அடுக்குமாடி குடியிருப்புகள் மற்றும் நிறுவனங்களுக்கான முழுமையான தீர்வுகள்.",
    "section.viewAllServices": "அனைத்து 9 சேவைகளையும் காண்க →",
    "section.pricing": "சிசிடிவி தொகுப்பு கட்டணங்கள்",
    "section.process": "எங்கள் 6 படிநிலைகள் கொண்ட சேவை முறை",
    "section.fiber": "ஆவடி & சுற்றுவட்டார ஃபைபர் பிராட்பேண்ட்",
    "section.fiberSub": "தடையற்ற வேகத்துடன் கூடிய பிரத்யேக ஃபைபர் ஆப்டிக் இணைய இணைப்பு.",
  },
};

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("broadnet_lang") as Language;
      if (saved === "en" || saved === "ta") {
        setLangState(saved);
      }
    } catch {
      // localStorage may fail in restricted browser modes
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("broadnet_lang", newLang);
    } catch {
      // Ignore
    }
  };

  const t = (key: string): string => {
    return DICTIONARY[lang]?.[key] || DICTIONARY.en[key] || key;
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useLanguage() {
  return useContext(I18nContext);
}
