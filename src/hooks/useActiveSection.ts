"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = ["about", "products", "branches", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname === "/coffee-journey" ? "/coffee-journey" : "");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return activeSection;
}
