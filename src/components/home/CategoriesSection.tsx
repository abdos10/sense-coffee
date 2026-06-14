export default function CategoriesSection() {
  const specialties = [
    "Arabic Coffee",
    "Turkish Coffee",
    "Espresso",
    "French Coffee",
    "Egyptian Coffee",
    "Single Origin",
    "Signature Blends",
    "Coffee Capsules",
  ];

  const origins = [
    "Brazil",
    "Ethiopia",
    "Colombia",
    "Peru",
    "Kenya",
    "Uganda",
    "Indonesia",
    "Honduras",
    "Costa Rica",
    "El Salvador",
  ];

  return (
    <section className="relative py-[100px] bg-[#F8F4EE]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="block text-[#B58A4A] text-xs tracking-[0.2em] uppercase mb-5">
          OUR SPECIALTIES
        </span>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark leading-tight mb-5">
          Crafted for Every Coffee Lover
        </h2>

        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-[600px] mx-auto mb-12 md:mb-14">
          From traditional recipes to specialty selections, discover coffees roasted with passion and prepared for every brewing style.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-[14px] max-w-[700px] mx-auto">
          {specialties.map((item) => (
            <span
              key={item}
              className="inline-block px-5 py-2.5 md:px-[22px] md:py-3 rounded-full bg-[#F2ECE3] text-[#4A3728] text-sm md:text-[15px] font-medium transition-[background-color,color] duration-250 ease-out cursor-default hover:bg-[#4A3728] hover:text-[#FFF8F0]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 md:mt-[48px]">
          <span className="block text-[#A28D74] text-[11px] md:text-xs tracking-[0.15em] uppercase mb-4">
            SOURCED FROM
          </span>
          <p className="text-[#7B7B7B] text-sm md:text-[15px] leading-[1.8] max-w-[700px] mx-auto">
            {origins.join(" \u2022 ")}
          </p>
        </div>
      </div>
    </section>
  );
}
