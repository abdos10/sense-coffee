"use client";

import { useEffect, useRef } from "react";

const specialties = [
  { label: "Single Origin", size: "large" },
  { label: "Signature Blends", size: "large" },
  { label: "Arabic Coffee", size: "medium" },
  { label: "Turkish Coffee", size: "medium" },
  { label: "Espresso", size: "regular" },
  { label: "French Coffee", size: "regular" },
  { label: "Egyptian Coffee", size: "regular" },
  { label: "Coffee Capsules", size: "regular" },
];

const countries = [
  "Brazil", "Ethiopia", "Colombia", "Peru", "Kenya",
  "Uganda", "Indonesia", "Honduras", "Costa Rica", "El Salvador",
];

function Chip({ label, size, delay }: { label: string; size: string; delay: number }) {
  const sizeClasses =
    size === "large"
      ? "px-6 py-3 text-[15px]"
      : size === "medium"
        ? "px-5 py-2.5 text-[14px]"
        : "px-4 py-2 text-[13px]";

  return (
    <span
      className={`inline-block rounded-full bg-[#F4EFE7] border border-[rgba(181,138,74,0.15)] text-[#4A3728] font-medium transition-[background-color,color,border-color] duration-250 ease-out cursor-default hover:bg-[#4A3728] hover:text-[#FFF8F0] hover:border-[#4A3728] opacity-0 translate-y-[30px] ${sizeClasses}`}
      style={{
        animation: `categories-fade-in 700ms ease-out ${delay}ms forwards`,
      }}
    >
      {label}
    </span>
  );
}

function CountryPill({ label, delay }: { label: string; delay: number }) {
  return (
    <span
      className="inline-block px-4 py-2 rounded-full border border-[rgba(181,138,74,0.25)] text-[14px] text-[#7A6B5A] transition-[background-color] duration-250 ease-out cursor-default hover:bg-[rgba(181,138,74,0.08)] opacity-0 translate-y-[30px]"
      style={{
        animation: `categories-fade-in 700ms ease-out ${delay}ms forwards`,
      }}
    >
      {label}
    </span>
  );
}

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationPlayState = "running";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    el.style.animationPlayState = "paused";
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-[120px] bg-[#F8F4EE] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src="/images/svg/roasted-coffee-bean-svgrepo-com.svg" alt="" className="absolute top-[8%] left-[5%] w-16 h-16 opacity-[0.8]" />
        <img src="/images/svg/roasted-coffee-bean-svgrepo-com.svg" alt="" className="absolute top-[20%] right-[8%] w-20 h-20 opacity-[0.8] rotate-45" />
        <img src="/images/svg/roasted-coffee-bean-svgrepo-com.svg" alt="" className="absolute bottom-[15%] left-[10%] w-14 h-14 opacity-[0.9] -rotate-12" />
        <img src="/images/svg/roasted-coffee-bean-svgrepo-com.svg" alt="" className="absolute bottom-[30%] right-[4%] w-24 h-24 opacity-[0.8] rotate-90" />
        {/* <img src="/images/svg/roasted-coffee-bean-svgrepo-com.svg" alt="" className="absolute top-[55%] left-[50%] w-10 h-10 opacity-[0.1] -translate-x-1/2 rotate-30" /> */}
      </div>

      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-[32px] bg-[rgba(255,255,255,0.35)] border border-[rgba(255,255,255,0.15)] p-8 md:p-12 lg:p-16 text-center"
          style={{
            animation: "categories-fade-in 700ms ease-out forwards",
          }}
        >
          <div className="flex items-center justify-center gap-3 text-[rgba(181,138,74,0.4)] text-sm tracking-widest mb-8 select-none">
            <span className="block flex-1 h-px max-w-[100px] bg-[rgba(181,138,74,0.2)]" />
            <span className="text-base">&#9749;</span>
            <span className="block flex-1 h-px max-w-[100px] bg-[rgba(181,138,74,0.2)]" />
          </div>

          <span className="block text-[#B58A4A] text-[13px] font-semibold tracking-[0.25em] uppercase mb-5">
            OUR SPECIALTIES
          </span>

          <h2 className="font-display text-3xl md:text-[44px] text-[#2F241C] font-bold leading-tight mb-5">
            Crafted for Every Coffee Lover
          </h2>

          <p className="text-[#6F6F6F] text-base md:text-lg leading-relaxed max-w-[620px] mx-auto mb-12">
            From traditional recipes to specialty selections, discover coffees roasted with passion and prepared for every brewing style.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[14px] max-w-[700px] mx-auto">
            {specialties.map((item, i) => (
              <Chip key={item.label} label={item.label} size={item.size} delay={i * 40} />
            ))}
          </div>

          <div className="mt-[42px]">
            <p className="font-serif italic text-[18px] text-[#7B6A58] leading-relaxed max-w-[500px] mx-auto">
              &ldquo;Every roast tells a story, every cup begins with a carefully chosen bean.&rdquo;
            </p>
          </div>

          <div className="mt-[48px]">
            <span className="block text-[#A28D74] text-[12px] tracking-[0.2em] uppercase mb-4">
              SOURCED FROM
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[650px] mx-auto">
              {countries.map((country, i) => (
                <CountryPill key={country} label={country} delay={i * 30} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
