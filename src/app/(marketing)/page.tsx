import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ProductsSection from "@/components/home/ProductsSection";
import AboutSection from "@/components/home/ServicesSection";
import ContactSection from "@/components/home/ContactSection";
import { site } from "@/data/site";
import CoffeeJourneyPage from "./coffee-journey/page";

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
      <CollectionsSection />
      {/* <FeaturesSection /> */}
      <ProductsSection />
      {/* <CoffeeJourneyPage /> */}
      {/* <CategoriesSection /> */}
      <AboutSection />
      {/* <ContactSection /> */}
    </>
  );
}
