import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CCTVLandingClient from "./CCTVLandingClient";

export const metadata: Metadata = {
  title: "CCTV Installation & Service in Avadi, Chennai | Broadnet Surveillance Division",
  description:
    "Official Hikvision & CP PLUS CCTV camera sales, installation and AMC services across Avadi & Chennai. HD, IP, Audio & ColorVu cameras. Free on-site survey and 2-hour technician dispatch. Call 98843 44075.",
  keywords: [
    "CCTV installation Avadi",
    "CCTV dealers Chennai",
    "Hikvision camera installation Chennai",
    "CP PLUS CCTV Avadi",
    "CCTV AMC Chennai",
    "IP camera installation Avadi",
    "Security camera setup Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/cctv-landing",
  },
};

export default function CCTVLandingPage() {
  return (
    <>
      <Header activePage="CCTV" />
      <main>
        <CCTVLandingClient />
      </main>
      <Footer />
    </>
  );
}
