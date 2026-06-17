"use client";

import { useRef, useState, useEffect } from "react";
import { collections } from "@/data/collections";

export default function CollectionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    el.scrollBy({ left: dir === "left" ? -(card.offsetWidth + 40) : card.offsetWidth + 40, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = document.querySelectorAll("[data-animate-card]");
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collections" className="bg-brand-cream py-[120px]">
      <div className="max-w-7xl mx-auto ; px-4 md:px-8">
        <div className="text-center">
          <h2 className="font-display text-[32px] md:text-[42px] font-semibold text-brand-coffee max-w-[600px] mx-auto leading-[1.2]">
            Big collection !
          </h2>
          <p className="text-[15px] text-coffee leading-relaxed max-w-[600px] mx-auto mt-5">
            A wide range of coffee beans from different origins, roasted to perfection.
          </p>
        </div>

        <div className="relative ml-16 mt-14 md:mt-18">
          <button
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-brand-gold text-brand-espresso flex items-center justify-center hover:bg-brand-gold/80 transition-all shadow-lg ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            } max-md:-left-2`}
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-brand-gold text-brand-espresso flex items-center justify-center hover:bg-brand-gold/80 transition-all shadow-lg ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            } max-md:-right-2`}
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {collections.map((item) => (
              <div
                key={item.id}
                data-animate-card
                className="snap-start shrink-0 w-[calc(100%-60px)] md:basis-[calc(50%-20px)] lg:basis-[calc(25%-30px)] text-center opacity-0 translate-y-5 transition-all duration-700 ease-out"
              >
                <div className="w-[200px] sm:w-[230px] md:w-[260px] h-[200px] sm:h-[230px] md:h-[260px] md:ml-6 mx-auto rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:scale-[1.03] transition-transform duration-300 ease-out">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#2E241B] mt-4 md:mt-5 whitespace-nowrap">
                  {item.name}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#999] leading-relaxed max-w-[260px] mx-auto mt-2 md:mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
