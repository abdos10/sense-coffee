import Link from "next/link";
import { site } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark bg-[url('/images/background-mobile.png')] md:bg-[url('/images/background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative pb-15 z-10 w-full mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight md:leading-tight lg:leading-tight mb-6 md:mb-8">
            From Our Roastery to Your Cup
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-8 md:mb-19">
            Premium coffee beans sourced from the world&apos;s finest origins, expertly roasted and crafted to deliver exceptional flavor in every cup.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/#products"
              className="group inline-flex items-center gap-2 px-6 md:px-6 py-3.5 md:py-4 text-base md:text-lg font-bold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-2xl shadow-lg shadow-brand-gold/20 hover:shadow-xl hover:shadow-brand-gold/30 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold focus:ring-offset-brand-dark"
            >
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/#products"
              className="group inline-flex items-center gap-2 px-6 md:px-6 py-3.5 md:py-4 text-base md:text-lg font-bold text-brand-gold border-2 border-brand-gold/40 rounded-2xl hover:bg-brand-gold/10 hover:border-brand-gold/60 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold focus:ring-offset-brand-dark"
            >
              Explore Coffee
            </Link>
          </div>
        </div>
      </div>

     
    </section>
  );
}
