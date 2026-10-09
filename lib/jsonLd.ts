import { SITE_CONFIG, CCTV_PACKAGES, BROADBAND_PLANS } from "@/data/site";

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SecuritySystemInstaller",
    "@id": "https://www.broadnet.in/#localbusiness",
    "name": SITE_CONFIG.name,
    "alternateName": ["Broadnet", "Broadnet CCTV & Security", "Broadnet Fiber"],
    "url": "https://www.broadnet.in",
    "logo": "https://www.broadnet.in/assets/logo.png",
    "image": "https://www.broadnet.in/og-image.png",
    "description":
      "Avadi & Chennai's authorized security systems integrator for Hikvision & CP PLUS CCTV cameras, eSSL biometrics, video door phones, and high-speed fiber broadband. Established 2014.",
    "telephone": SITE_CONFIG.phones.primaryFormatted,
    "email": SITE_CONFIG.email,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.area,
      "addressRegion": SITE_CONFIG.address.state,
      "postalCode": SITE_CONFIG.address.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.1147,
      "longitude": 80.1018,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "14:00",
      },
    ],
    "areaServed": [
      { "@type": "City", "name": "Avadi" },
      { "@type": "City", "name": "Chennai" },
      { "@type": "AdministrativeArea", "name": "Thirumullaivoyal" },
      { "@type": "AdministrativeArea", "name": "Pattabiram" },
      { "@type": "AdministrativeArea", "name": "Ambattur" },
      { "@type": "AdministrativeArea", "name": "Poonamallee" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security & Connectivity Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "CCTV Surveillance Systems",
        },
        {
          "@type": "OfferCatalog",
          "name": "Biometric Time Attendance & Access Control",
        },
        {
          "@type": "OfferCatalog",
          "name": "Fiber Broadband Internet",
        },
      ],
    },
  };
}

export function getFaqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };
}

export function getCctvPackagesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Broadnet CCTV Camera Packages & Kits",
    "itemListElement": CCTV_PACKAGES.filter((p) => p.priceValue).map((pkg, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": pkg.name,
      "description": `${pkg.tagline}. Resolution: ${pkg.resolution}, Storage: ${pkg.storage}. Includes ${pkg.included.wiringMeters}m wiring.`,
      "brand": {
        "@type": "Brand",
        "name": "Broadnet (Hikvision / CP PLUS)",
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": pkg.priceValue,
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.broadnet.in/security/cameras",
        "seller": {
          "@type": "Organization",
          "name": SITE_CONFIG.name,
        },
      },
    })),
  };
}

export function getBroadbandPlansJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Broadnet FTTH High-Speed Fiber Broadband Plans",
    "itemListElement": BROADBAND_PLANS.map((plan, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": plan.name,
      "description": `${plan.speed} symmetric high-speed unlimited fiber broadband in Avadi. Features: ${plan.features.join(", ")}.`,
      "brand": {
        "@type": "Brand",
        "name": plan.type === "railwire" ? "RailWire Broadband" : "Broadnet Fiber",
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": plan.priceNum,
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.broadnet.in/internet",
        "seller": {
          "@type": "Organization",
          "name": SITE_CONFIG.name,
        },
      },
    })),
  };
}
