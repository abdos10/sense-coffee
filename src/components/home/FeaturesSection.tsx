export default function FeaturesSection() {
  const stats = [
    {
      value: "50+",
      label: "Coffee Origins Worldwide",
    },
    {
      value: "10,000+",
      label: "Kg Roasted Yearly",
    },
    {
      value: "15+",
      label: "Precision Grind Settings",
    },
    {
      value: "24h",
      label: "Express Delivery Across Qatar",
    },
  ];

  return (
    <section className="relative py-[100px] bg-[#7A5C2E] overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[13px] tracking-[3px] font-semibold text-[#C89B3C] uppercase mb-4">
            Our Expertise in Numbers
          </p>
          <h2 className="font-display text-3xl md:text-[42px] text-white font-bold leading-tight max-w-[600px] mx-auto">
            Crafting Excellence Across Every Metric
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-[48px] md:text-[64px] font-bold text-[#C89B3C] leading-none mb-3">
                {stat.value}
              </p>
              <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
