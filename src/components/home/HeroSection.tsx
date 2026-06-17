import Link from "next/link";
import { site } from "@/data/site";
// import LuxuryBadge from "./LuxuryBadge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-dark bg-[url('/images/background-mobile.png')] md:bg-[url('/images/background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative pb-15 z-10 w-full mx-auto max-w-7xl px-4 md:px-8 flex flex-col flex-1">
        <div className="w-fit text-center mx-auto flex-1 flex flex-col justify-end pb-16">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white leading-tight md:leading-tight lg:leading-tight mb-6 md:mb-8 sm:whitespace-nowrap">
          Experience the difference from the first sip ☕
          </h1>

          <p className="mb-8 text-[11.5px]  font-semibold tracking-wide text-brand-gold drop-shadow-[0_1px_3px_rgba(0, 0, 0, 0.78)] text-brand-gold/90 whitespace-nowrap sm:mb-19 sm:text-lg sm:tracking-normal md:text-xl sm:whitespace-normal">
            • Unique selection • Fresh Roasted • Premium Quality
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#products"
              className="group inline-flex items-center gap-2 px-6 md:px-6 py-3.5 md:py-4 text-base md:text-lg font-light text-white/90 border-2 border-brand-gold/70 rounded-2xl hover:bg-brand-gold/10 hover:border-brand-gold/60 hover:-translate-y-0.5 transition-all duration-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold focus:ring-offset-brand-dark"
            >
              Explore Coffee
            </Link>
          </div>
        </div>
        {/* <div className="mb-12"><LuxuryBadge /></div> */}
        
      </div>
    </section>
  );
}
