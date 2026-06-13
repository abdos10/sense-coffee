import Image from "next/image";
import { branches } from "@/data/branches";

export default function BranchesSection() {
  return (
    <section id="branches" className="relative py-24 bg-gradient-to-b from-brand-dark via-brand-coffee to-brand-dark">
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 20px 20px, rgba(213,115,2,0.03) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 mb-6 text-xs font-medium text-brand-gold tracking-wider bg-brand-gold/10 border border-brand-gold/30 rounded-full">
            {branches.length} فروع في حلب
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-cream mb-4">
            الفروع
          </h2>
          <p className="text-brand-cream/60 max-w-2xl mx-auto leading-relaxed">
            زورونا في فروعنا المنتشرة في مدينة حلب لتجربة أجود أنواع القهوة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches
            .sort((a, b) => a.order - b.order)
            .map((branch) => {
              const imgSrc = branch.image?.src || "/images/branches/branch.png";
              const hasCoords = branch.coordinates?.lat && branch.coordinates?.lng;
              const mapsUrl = hasCoords
                ? `https://www.google.com/maps?q=${branch.coordinates!.lat},${branch.coordinates!.lng}`
                : null;

              return (
                <div key={branch.id} className="group bg-brand-cream/95 rounded-2xl overflow-hidden shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  <div className="relative aspect-video bg-gradient-to-br from-brand-coffee to-brand-dark">
                    <Image
                      src={imgSrc}
                      alt={branch.image?.alt || branch.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-brand-dark mb-4">
                      {branch.name}
                    </h3>
                    <div className="space-y-2 text-sm text-brand-dark/70">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>{branch.area}{branch.address ? ` - ${branch.address}` : ""}</span>
                      </div>
                      {branch.phone && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-brand-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                          <span>{branch.phone}</span>
                        </div>
                      )}
                    </div>
                    {mapsUrl && (
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-xl shadow-sm shadow-brand-gold/20 hover:shadow-md hover:shadow-brand-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        عرض على الخريطة
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
