import Link from "next/link";
import { site } from "@/data/site";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gold/50 bg-brand-cream text-brand-coffee">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center md:flex-row md:justify-between md:px-8 md:py-12 md:text-left">
        <div className="space-y-1">
          <p className="font-display text-base text-brand-gold">{site.name}</p>
          <p className="text-xs text-coffee">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm">
          {navLinks.map((link, index) => (
            <span key={link.href} className="inline-flex items-center">
              {index > 0 && <span className="mx-2 text-white/20" aria-hidden="true">·</span>}
              <Link
                href={link.href}
                className="text-coffee transition-colors hover:text-brand-gold"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee transition-colors hover:text-brand-gold"
            aria-label="Instagram"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.69 2.525c.636-.247 1.363-.416 2.427-.465C8.46 2.013 8.815 2 11.315 2h.01m-.016 1.908h-.176c-2.21 0-2.535.008-3.508.053-.96.044-1.483.204-1.83.338a3.01 3.01 0 0 0-1.11.722 3.01 3.01 0 0 0-.722 1.11c-.134.347-.294.87-.338 1.83-.045.973-.053 1.298-.053 3.508v.353c0 2.21.008 2.535.053 3.508.044.96.204 1.483.338 1.83.174.45.44.828.722 1.11.282.282.66.548 1.11.721.347.134.87.294 1.83.338.973.045 1.298.053 3.508.053h.353c2.21 0 2.535-.008 3.508-.053.96-.044 1.483-.204 1.83-.338a3.01 3.01 0 0 0 1.11-.722 3.01 3.01 0 0 0 .722-1.11c.134-.347.294-.87.338-1.83.045-.973.053-1.298.053-3.508v-.353c0-2.21-.008-2.535-.053-3.508-.044-.96-.204-1.483-.338-1.83a3.01 3.01 0 0 0-.722-1.11 3.01 3.01 0 0 0-1.11-.721c-.347-.134-.87-.294-1.83-.338-.973-.045-1.298-.053-3.508-.053" />
              <path d="M12 6.365a5.635 5.635 0 1 0 0 11.27 5.635 5.635 0 0 0 0-11.27m0 1.905a3.73 3.73 0 1 1 0 7.46 3.73 3.73 0 0 1 0-7.46" />
              <path d="M17.79 6.105a.51.51 0 0 0-.51.51v.48a.51.51 0 0 0 .51.51h.48a.51.51 0 0 0 .51-.51v-.48a.51.51 0 0 0-.51-.51h-.48z" />
            </svg>
          </a>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee transition-colors hover:text-brand-gold"
            aria-label="Facebook"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
