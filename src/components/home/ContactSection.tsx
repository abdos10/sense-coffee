import { site } from "@/data/site";
import { branches } from "@/data/branches";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-5 text-xs font-medium text-brand-gold tracking-wider bg-brand-gold/10 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-dark">
            Contact Us
          </h2>
          <p className="text-brand-coffee/60 max-w-2xl mx-auto leading-relaxed mt-3">
            Our team is ready to answer your inquiries and fulfill your orders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div className="space-y-5">
            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-brand-gold/10 shadow-sm shadow-black/5">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-brand-dark text-sm mb-1">Phone</p>
                <a href={`tel:${site.phone}`} className="text-brand-coffee/70 hover:text-brand-gold transition-colors text-sm">{site.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-brand-gold/10 shadow-sm shadow-black/5">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-brand-dark text-sm mb-1">WhatsApp</p>
                <a href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="text-brand-coffee/70 hover:text-brand-gold transition-colors text-sm">{site.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-brand-gold/10 shadow-sm shadow-black/5">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-brand-dark text-sm mb-1">Location</p>
                <p className="text-brand-coffee/70 text-sm">{site.location}</p>
              </div>
            </div>

            {branches.length > 0 && (() => {
              const branch = branches[0];
              const mapsUrl = branch.coordinates?.lat && branch.coordinates?.lng
                ? `https://www.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}`
                : null;
              return (
                <div className="bg-white rounded-2xl p-5 border border-brand-gold/10 shadow-sm shadow-black/5">
                  <h4 className="font-display text-base text-brand-dark mb-3">{branch.name}</h4>
                  <div className="space-y-2 text-sm text-brand-coffee/70">
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
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 px-4 py-2 text-xs font-semibold text-brand-gold bg-brand-gold/10 rounded-xl hover:bg-brand-gold hover:text-white transition-all duration-200">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      View on Map
                    </a>
                  )}
                </div>
              );
            })()}

            <a href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-full px-8 py-3.5 text-base font-bold text-white bg-brand-dark rounded-2xl transition-all duration-200 hover:bg-brand-coffee active:scale-[0.98]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact Us on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-gold/10 shadow-sm shadow-black/5">
            <h3 className="font-display text-xl md:text-2xl text-brand-dark mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
