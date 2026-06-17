const services = [
  {
    title: "Custom Coffee Roasting",
    description: "Small-batch roasting tailored to your preferred flavor profile.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Custom Coffee Grinding",
    description: "Precision grinding for any brewing method you prefer.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Packaging",
    description: "Custom packaging solutions that preserve freshness and brand identity.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M21 8.5 12 3 3 8.5V17l9 4.5 9-4.5V8.5Z" strokeLinejoin="round" />
        <path d="M3 8.5 12 13l9-4.5M12 13v8.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Café Equipment",
    description: "Professional machines and accessories for your coffee business.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M6 8h12v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
        <path d="M9 4h6v4H9V4Z" strokeLinejoin="round" />
        <path d="M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Supplies to Restaurants & Cafes",
    description: "Wholesale coffee solutions for hospitality businesses of all sizes.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
        <path d="M15 13.5c2.5 0 4.5 2 4.5 4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Supplies to Companies",
    description: "Office coffee programs tailored to your team and workplace culture.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-[#FAF7F2] py-[100px] md:py-[120px]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[3px] text-[#B58A4A]">
            Our Services
          </p>
          <h2 className="font-display text-[34px] font-bold leading-[1.15] text-[#2D241C] md:text-[42px]">
            What We Offer
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-5/12">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
              <img
                src="/images/about/about.png"
                alt="Sense Coffee services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">

            <div className="space-y-7">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B58A4A]/10 text-[#B58A4A]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#2E241B] md:text-[17px]">
                      {service.title}
                    </h3>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-[#888]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
