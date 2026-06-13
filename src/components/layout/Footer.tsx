import Link from "next/link";
import { site } from "@/data/site";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6B4F28] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-display text-brand-gold mb-4">{site.name}</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Premium coffee roasting and supply company based in {site.location}. From our roastery to your cup.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-gold tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brand-gold tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <span className="block">Phone: {site.phone}</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp: {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {currentYear} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
