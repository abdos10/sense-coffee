"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const activeSection = useActiveSection();

  const isActive = (href: string) => {
    if (href === "/" && activeSection === "") return true;
    if (href.startsWith("/#") && href.slice(1) === activeSection) return true;
    if (href === activeSection) return true;
    return false;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 h-20">
        <Link href="/" className="block" aria-label={site.name}>
          <Image
            src="/images/logo/logo.png"
            alt={site.name}
            width={80}
            height={45}
            className="h-[95px] md:h-24 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center justify-center flex-1 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`px-4 py-2 text-sm tracking-wide transition-all rounded-xl whitespace-nowrap ${
                isActive(link.href)
                  ? "text-brand-gold bg-brand-gold/10"
                  : "text-white/70 hover:text-brand-gold hover:bg-brand-gold/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 w-11 bg-brand-gold text-brand-dark rounded-full hover:bg-brand-gold/90 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.69 2.525c.636-.247 1.363-.416 2.427-.465C8.46 2.013 8.815 2 11.315 2h.01m-.016 1.908h-.176c-2.21 0-2.535.008-3.508.053-.96.044-1.483.204-1.83.338a3.01 3.01 0 0 0-1.11.722 3.01 3.01 0 0 0-.722 1.11c-.134.347-.294.87-.338 1.83-.045.973-.053 1.298-.053 3.508v.353c0 2.21.008 2.535.053 3.508.044.96.204 1.483.338 1.83.174.45.44.828.722 1.11.282.282.66.548 1.11.721.347.134.87.294 1.83.338.973.045 1.298.053 3.508.053h.353c2.21 0 2.535-.008 3.508-.053.96-.044 1.483-.204 1.83-.338a3.01 3.01 0 0 0 1.11-.722 3.01 3.01 0 0 0 .722-1.11c.134-.347.294-.87.338-1.83.045-.973.053-1.298.053-3.508v-.353c0-2.21-.008-2.535-.053-3.508-.044-.96-.204-1.483-.338-1.83a3.01 3.01 0 0 0-.722-1.11 3.01 3.01 0 0 0-1.11-.721c-.347-.134-.87-.294-1.83-.338-.973-.045-1.298-.053-3.508-.053" />
                <path d="M12 6.365a5.635 5.635 0 1 0 0 11.27 5.635 5.635 0 0 0 0-11.27m0 1.905a3.73 3.73 0 1 1 0 7.46 3.73 3.73 0 0 1 0-7.46" />
                <path d="M17.79 6.105a.51.51 0 0 0-.51.51v.48a.51.51 0 0 0 .51.51h.48a.51.51 0 0 0 .51-.51v-.48a.51.51 0 0 0-.51-.51h-.48z" />
              </svg>
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 w-11 bg-brand-gold text-brand-dark rounded-full hover:bg-brand-gold/90 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073" />
              </svg>
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center h-11 w-11 bg-brand-gold text-brand-dark rounded-full hover:bg-brand-gold/90 transition-all duration-300"
              aria-label="Contact"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
