export default function AboutSection() {
  const cards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 2v2m4-2v2M2 6h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h2m2 0h2" />
        </svg>
      ),
      title: "Premium Coffee Beans",
      desc: "We carefully source exceptional beans from renowned coffee-growing regions around the world to ensure outstanding quality in every batch.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 0-2.133 1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      ),
      title: "Fresh Roasting",
      desc: "Every order is roasted with precision to preserve freshness, aroma, and the unique character of each origin.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      ),
      title: "Custom Grinding",
      desc: "Whether you brew Turkish, Espresso, Filter, or French Press, we grind every order exactly the way you need it.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 7h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h.01M12 11h.01M16 11h.01" />
        </svg>
      ),
      title: "Cafe Equipment",
      desc: "From professional coffee machines to accessories and complete caf\u00e9 solutions, we help businesses and coffee lovers create exceptional coffee experiences.",
    },
  ];

  return (
    <section id="about" className="relative py-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-medium text-brand-gold tracking-[0.15em] bg-brand-gold/10 rounded-full">
            OUR EXPERTISE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark leading-tight mb-5">
            More Than Coffee — We Craft the Perfect Experience
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            From sourcing the world&apos;s finest beans to roasting, grinding, and equipping caf&eacute;s, we bring every step of the coffee journey together under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`group rounded-[20px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300 ease-out animate-fade-in-up ${
                index % 2 === 0 ? "bg-white" : "bg-[#F8F4EE]"
              }`}
            >
              <div className="text-brand-gold mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gold/10">
                {card.icon}
              </div>
              <h3 className="font-display text-xl text-brand-dark mb-3">
                {card.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
