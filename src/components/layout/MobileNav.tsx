"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection();

  const isActive = (href: string) => {
    if (href === "/" && activeSection === "") return true;
    if (href.startsWith("/#") && href.slice(1) === activeSection) return true;
    if (href === activeSection) return true;
    return false;
  };

  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    []
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      closeRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      toggleRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  return (
    <>
      <button
        ref={toggleRef}
        onClick={() => setOpen(true)}
        className="p-2 mb-3 text-brand-gold/80 hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Main menu">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => e.key === "Enter" && setOpen(false)}
            tabIndex={-1}
            role="presentation"
          />
          <div
            ref={drawerRef}
            className="relative h-full w-64 bg-[#F8F4EE] shadow-xl flex flex-col"
            id="mobile-menu"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-brand-gold/90">
              <Image
                src="/images/logo/logo.png"
                alt={site.name}
                width={120}
                height={32}
                className="h-12 w-auto"
              />
              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                className="p-2 text-brand-coffee/60 hover:text-brand-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block px-4 py-3 text-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-gold ${
                    isActive(link.href)
                      ? "text-brand-gold bg-brand-gold/5"
                      : "text-brand-coffee/80 hover:text-brand-gold hover:bg-brand-gold/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 py-4 border-t border-brand-gold/10">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                aria-current={isActive("/#contact") ? "page" : undefined}
                className="flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold text-white bg-brand-dark rounded-xl hover:bg-brand-coffee transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
                Contact Us
              </Link>
              <p className="text-center text-xs text-brand-coffee/50 mt-2">{site.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
