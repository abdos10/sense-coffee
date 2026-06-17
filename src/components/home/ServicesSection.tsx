const services = [
  {
    title: "Custom Coffee Roasting",
    subtitle: "12 roast profiles available",
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
    subtitle: "15 grind settings available",
    iconClassName: "bg-[#F4EFE7] text-brand-coffee",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Packaging Solutions",
    subtitle: "20 packaging options available",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M21 8.5 12 3 3 8.5V17l9 4.5 9-4.5V8.5Z" strokeLinejoin="round" />
        <path d="M3 8.5 12 13l9-4.5M12 13v8.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Café Equipment",
    subtitle: "25 equipment options available",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M6 8h12v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
        <path d="M9 4h6v4H9V4Z" strokeLinejoin="round" />
        <path d="M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Restaurant & Café Supplies",
    subtitle: "40+ supply items available",
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
    title: "Express Delivery",
    subtitle: "24h delivery across Qatar",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] overflow-hidden opacity-30">
      <svg
        className="absolute top-1/2 right-0 h-[140%] w-full -translate-y-1/2 translate-x-[10%]"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="420" cy="300" rx="280" ry="280" stroke="#B58A4A" strokeWidth="0.75" opacity="0.25" />
        <ellipse cx="420" cy="300" rx="220" ry="220" stroke="#B58A4A" strokeWidth="0.75" opacity="0.25" />
        <ellipse cx="420" cy="300" rx="160" ry="160" stroke="#B58A4A" strokeWidth="0.75" opacity="0.25" />
        <ellipse cx="420" cy="300" rx="100" ry="100" stroke="#B58A4A" strokeWidth="0.75" opacity="0.25" />
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <line
            key={angle}
            x1="420"
            y1="20"
            x2="420"
            y2="580"
            stroke="#B58A4A"
            strokeWidth="0.75"
            opacity="0.2"
            transform={`rotate(${angle} 420 300)`}
          />
        ))}
      </svg>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand py-[100px] md:py-[120px]">
      <MeshBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center md:mb-16">
          <h2 className="font-display text-[30px] font-bold leading-[1.2] text-brand-coffee md:text-[42px]">
            whate we provide 
          </h2> 
          <p className="text-[15px] text-coffee leading-relaxed max-w-[600px] mx-auto mt-5">
More than a cup of coffee....          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-brand-gold/15 bg-white p-8 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(92,61,46,0.08)]"
            >
              <div
                className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl ${
                  service.iconClassName ?? "bg-brand-gold/10 text-[#B58A4A]"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="mb-2 text-[17px] font-bold leading-snug text-brand-espresso">
                {service.title}
              </h3>
              <p className="text-[14px] text-brand-coffee/60">{service.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
