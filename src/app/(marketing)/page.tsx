import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} - From Our Roastery to Your Cup`,
  description:
    `${site.name} - Premium coffee roasting and supply company in Qatar. Freshly roasted coffee from the world's finest origins.`,
  openGraph: {
    title: `${site.name} - From Our Roastery to Your Cup`,
    description:
      `${site.name} - Premium coffee roasting and supply company in Qatar.`,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
