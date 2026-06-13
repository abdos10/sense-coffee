"use client";

import { useEffect, useRef } from "react";

function CoffeeBean({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7.58 2 4 5.58 4 10c0 2.21.9 4.21 2.34 5.66L12 21l5.66-5.34A7.94 7.94 0 0 0 20 10c0-4.42-3.58-8-8-8m0 2c1.05 0 2.05.22 2.97.61C13.41 5.65 12 7.52 12 10c0 2.48 1.41 4.35 2.97 5.39A6.17 6.17 0 0 1 12 16c-3.31 0-6-2.69-6-6s2.69-6 6-6" />
    </svg>
  );
}

function ChocolateSquare({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="18" height="18" rx="2" />
      <rect x="4" y="4" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
      <line x1="1" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="1" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="7" y1="1" x2="7" y2="19" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="13" y1="1" x2="13" y2="19" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

function CinnamonStick({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="1" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.8" />
      <path d="M3 3h24" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
      <path d="M2 5h20" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
    </svg>
  );
}

function StarAnise({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" opacity="0.7" />
      <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function CoffeeLeaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C8 4 4 9 4 13c0 3.5 3 7 8 7 4 0 8-3 8-7 0-4-4-9-8-13Zm0 17c-2.5 0-4.5-1.5-4.5-4 0-2.5 2-6 4.5-9 2.5 3 4.5 6.5 4.5 9 0 2.5-2 4-4.5 4Z" opacity="0.6" />
      <line x1="12" y1="2" x2="12" y2="17" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

function ChocolateTruffle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" />
      <circle cx="7" cy="7" r="2" fill="currentColor" opacity="0.2" />
      <circle cx="13" cy="12" r="1.5" fill="currentColor" opacity="0.15" />
      <path d="M6 14 Q10 16 14 13" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.15" />
    </svg>
  );
}

function GoldParticle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="1.5" />
      <circle cx="3" cy="3" r="0.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function CocoaDust({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="1" opacity="0.25" />
      <circle cx="20" cy="15" r="0.8" opacity="0.2" />
      <circle cx="15" cy="25" r="1.2" opacity="0.15" />
      <circle cx="30" cy="20" r="0.6" opacity="0.2" />
      <circle cx="25" cy="30" r="0.9" opacity="0.15" />
      <circle cx="5" cy="22" r="0.7" opacity="0.2" />
      <circle cx="35" cy="10" r="0.5" opacity="0.15" />
      <circle cx="12" cy="32" r="0.6" opacity="0.1" />
    </svg>
  );
}

function CoffeeSplash({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="12" fill="currentColor" opacity="0.06" />
      <circle cx="15" cy="15" r="8" fill="currentColor" opacity="0.04" />
      <circle cx="15" cy="15" r="4" fill="currentColor" opacity="0.08" />
      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.05" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.04" />
      <circle cx="12" cy="20" r="1.8" fill="currentColor" opacity="0.03" />
    </svg>
  );
}

function CaramelDrop({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 14c2.5 0 4.5-2 4.5-4.5 0-3-3-7-4.5-9-1.5 2-4.5 6-4.5 9C1.5 12 3.5 14 6 14Z" />
      <circle cx="5" cy="11" r="0.8" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

function DessertCrumb({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="4" r="2" opacity="0.2" />
      <circle cx="7" cy="3" r="1.2" opacity="0.15" />
      <circle cx="5" cy="6" r="1" opacity="0.12" />
      <circle cx="1" cy="6" r="0.6" opacity="0.1" />
    </svg>
  );
}

function CoffeeGrounds({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="12" r="0.7" opacity="0.2" />
      <circle cx="15" cy="8" r="0.5" opacity="0.15" />
      <circle cx="22" cy="14" r="0.6" opacity="0.18" />
      <circle cx="12" cy="20" r="0.4" opacity="0.12" />
      <circle cx="18" cy="22" r="0.8" opacity="0.15" />
      <circle cx="6" cy="18" r="0.5" opacity="0.1" />
      <circle cx="25" cy="10" r="0.4" opacity="0.12" />
      <circle cx="10" cy="25" r="0.6" opacity="0.08" />
      <circle cx="20" cy="5" r="0.3" opacity="0.1" />
      <circle cx="4" cy="8" r="0.4" opacity="0.08" />
    </svg>
  );
}

interface DecoElement {
  id: string;
  Component: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotate: number;
  floatY: number[];
  floatR: number[];
}

const elements: DecoElement[] = [
  { id: "bean1", Component: CoffeeBean, x: 4, y: 12, size: 14, color: "text-brand-dark", delay: 0, duration: 6, rotate: 25, floatY: [-8, 3, -6], floatR: [1.5, -0.8, 1.2] },
  { id: "choc1", Component: ChocolateSquare, x: 2, y: 28, size: 12, color: "text-brand-coffee", delay: 1.2, duration: 7, rotate: -15, floatY: [-7, 4, -5], floatR: [-1, 0.6, -0.8] },
  { id: "leaf1", Component: CoffeeLeaf, x: 6, y: 6, size: 16, color: "text-brand-dark/30", delay: 0.5, duration: 8, rotate: -30, floatY: [-10, 2, -7], floatR: [-1.5, 0.5, -1] },
  { id: "gold1", Component: GoldParticle, x: 1.5, y: 20, size: 5, color: "text-brand-gold/40", delay: 0.8, duration: 5, rotate: 0, floatY: [-4, 3, -3], floatR: [0, 0, 0] },
  { id: "anise1", Component: StarAnise, x: 8, y: 35, size: 10, color: "text-brand-coffee/40", delay: 2, duration: 9, rotate: 45, floatY: [-6, 5, -4], floatR: [2, -1, 1.5] },
  { id: "dust1", Component: CocoaDust, x: -1, y: 50, size: 30, color: "text-brand-coffee/20", delay: 1, duration: 10, rotate: 0, floatY: [-5, 3, -4], floatR: [0, 0, 0] },
  { id: "crumb1", Component: DessertCrumb, x: 3, y: 60, size: 8, color: "text-brand-coffee/20", delay: 1.5, duration: 6, rotate: 10, floatY: [-4, 4, -3], floatR: [1, -0.5, 0.8] },
  { id: "bean2", Component: CoffeeBean, x: 82, y: 8, size: 16, color: "text-brand-dark", delay: 0.3, duration: 7, rotate: -20, floatY: [-9, 5, -7], floatR: [-1.8, 1, -1.2] },
  { id: "truffle1", Component: ChocolateTruffle, x: 88, y: 25, size: 14, color: "text-brand-coffee", delay: 1.5, duration: 8, rotate: 10, floatY: [-8, 4, -6], floatR: [1, -0.6, 0.8] },
  { id: "cinnamon1", Component: CinnamonStick, x: 78, y: 18, size: 18, color: "text-brand-coffee/50", delay: 0.7, duration: 9, rotate: 35, floatY: [-6, 6, -5], floatR: [2, -1.5, 1] },
  { id: "gold2", Component: GoldParticle, x: 92, y: 12, size: 6, color: "text-brand-gold/35", delay: 2.2, duration: 5, rotate: 0, floatY: [-5, 2, -3], floatR: [0, 0, 0] },
  { id: "leaf2", Component: CoffeeLeaf, x: 85, y: 40, size: 12, color: "text-brand-dark/25", delay: 1.8, duration: 7, rotate: 50, floatY: [-7, 4, -5], floatR: [1.2, -0.8, 1] },
  { id: "splash1", Component: CoffeeSplash, x: 80, y: 55, size: 25, color: "text-brand-coffee/10", delay: 0.5, duration: 11, rotate: 0, floatY: [-4, 3, -3], floatR: [0, 0, 0] },
  { id: "grounds1", Component: CoffeeGrounds, x: 90, y: 65, size: 22, color: "text-brand-coffee/15", delay: 2.5, duration: 8, rotate: 0, floatY: [-3, 2, -2], floatR: [0, 0, 0] },
  { id: "bean3", Component: CoffeeBean, x: 1, y: 45, size: 10, color: "text-brand-dark/60", delay: 3, duration: 6, rotate: 60, floatY: [-6, 4, -5], floatR: [1.5, -0.8, 1] },
  { id: "caramel1", Component: CaramelDrop, x: 3, y: 55, size: 10, color: "text-brand-gold/30", delay: 0.9, duration: 7, rotate: 0, floatY: [-5, 3, -4], floatR: [1, -0.5, 0.8] },
  { id: "choc2", Component: ChocolateSquare, x: 2, y: 72, size: 9, color: "text-brand-coffee/50", delay: 2.8, duration: 8, rotate: 20, floatY: [-6, 5, -4], floatR: [-1.2, 0.8, -1] },
  { id: "dust2", Component: CocoaDust, x: -1, y: 80, size: 25, color: "text-brand-coffee/15", delay: 1.6, duration: 9, rotate: 0, floatY: [-4, 2, -3], floatR: [0, 0, 0] },
  { id: "grounds2", Component: CoffeeGrounds, x: 1, y: 90, size: 18, color: "text-brand-coffee/12", delay: 3.2, duration: 7, rotate: 0, floatY: [-3, 2, -2], floatR: [0, 0, 0] },
  { id: "bean4", Component: CoffeeBean, x: 86, y: 48, size: 11, color: "text-brand-dark/60", delay: 2.5, duration: 7, rotate: -40, floatY: [-7, 5, -5], floatR: [-1.5, 0.8, -1.2] },
  { id: "truffle2", Component: ChocolateTruffle, x: 91, y: 58, size: 11, color: "text-brand-coffee/50", delay: 0.4, duration: 8, rotate: -10, floatY: [-6, 4, -5], floatR: [-1, 0.6, -0.8] },
  { id: "caramel2", Component: CaramelDrop, x: 88, y: 70, size: 8, color: "text-brand-gold/25", delay: 3.5, duration: 6, rotate: 0, floatY: [-4, 3, -3], floatR: [0.8, -0.4, 0.6] },
  { id: "crumb2", Component: DessertCrumb, x: 93, y: 78, size: 7, color: "text-brand-coffee/15", delay: 1.2, duration: 5, rotate: 15, floatY: [-3, 2, -2], floatR: [1, -0.5, 0.8] },
  { id: "grounds3", Component: CoffeeGrounds, x: 85, y: 85, size: 20, color: "text-brand-coffee/12", delay: 2, duration: 8, rotate: 0, floatY: [-3, 2, -2], floatR: [0, 0, 0] },
  { id: "bean5", Component: CoffeeBean, x: 12, y: 88, size: 12, color: "text-brand-dark/50", delay: 1.8, duration: 7, rotate: -35, floatY: [-6, 4, -5], floatR: [-1.2, 0.6, -0.8] },
  { id: "bean6", Component: CoffeeBean, x: 75, y: 90, size: 10, color: "text-brand-dark/40", delay: 0.2, duration: 6, rotate: 50, floatY: [-5, 3, -4], floatR: [1.5, -0.8, 1] },
  { id: "choc3", Component: ChocolateSquare, x: 94, y: 88, size: 10, color: "text-brand-coffee/40", delay: 2.2, duration: 7, rotate: -25, floatY: [-5, 4, -3], floatR: [-1, 0.5, -0.8] },
  { id: "gold3", Component: GoldParticle, x: 50, y: 92, size: 5, color: "text-brand-gold/25", delay: 3.8, duration: 5, rotate: 0, floatY: [-3, 2, -2], floatR: [0, 0, 0] },
  { id: "gold4", Component: GoldParticle, x: 20, y: 94, size: 4, color: "text-brand-gold/20", delay: 4.2, duration: 6, rotate: 0, floatY: [-2, 1, -2], floatR: [0, 0, 0] },
  { id: "gold5", Component: GoldParticle, x: 70, y: 95, size: 6, color: "text-brand-gold/20", delay: 1, duration: 5, rotate: 0, floatY: [-3, 2, -2], floatR: [0, 0, 0] },
  { id: "splash2", Component: CoffeeSplash, x: 18, y: 82, size: 22, color: "text-brand-coffee/8", delay: 2.8, duration: 10, rotate: 0, floatY: [-4, 3, -3], floatR: [0, 0, 0] },
  { id: "splash3", Component: CoffeeSplash, x: 65, y: 85, size: 18, color: "text-brand-coffee/8", delay: 0.8, duration: 11, rotate: 0, floatY: [-4, 2, -3], floatR: [0, 0, 0] },
  { id: "anise2", Component: StarAnise, x: 95, y: 48, size: 9, color: "text-brand-coffee/35", delay: 3, duration: 8, rotate: -20, floatY: [-5, 4, -4], floatR: [-1.5, 0.8, -1] },
  { id: "truffle3", Component: ChocolateTruffle, x: 5, y: 80, size: 10, color: "text-brand-coffee/40", delay: 1.4, duration: 7, rotate: 15, floatY: [-5, 3, -4], floatR: [0.8, -0.4, 0.6] },
  { id: "cinnamon2", Component: CinnamonStick, x: 94, y: 35, size: 15, color: "text-brand-coffee/40", delay: 2.6, duration: 8, rotate: -45, floatY: [-6, 4, -5], floatR: [-1.5, 0.8, -1] },
  { id: "leaf3", Component: CoffeeLeaf, x: 96, y: 75, size: 14, color: "text-brand-dark/20", delay: 3.4, duration: 7, rotate: 60, floatY: [-7, 5, -5], floatR: [1.5, -1, 1.2] },
];

const keyframeCSS = elements
  .map(({ id, duration, floatY, floatR }) =>
    `@keyframes float-${id} {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(${floatY[0]}px) rotate(${floatR[0]}deg); }
  50% { transform: translateY(${floatY[1]}px) rotate(${floatR[1]}deg); }
  75% { transform: translateY(${floatY[2]}px) rotate(${floatR[2]}deg); }
}`
  )
  .join("\n");

export default function DecorativeElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const items = container.querySelectorAll<HTMLElement>("[data-parallax]");
      items.forEach((item) => {
        const speed = parseFloat(item.dataset.parallax || "0.02");
        const x = (clientX - window.innerWidth / 2) * speed;
        const y = (clientY - window.innerHeight / 2) * speed;
        item.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
      aria-hidden="true"
    >
      {elements.map(({ id, Component, x, y, size, color, delay, duration, rotate }) => (
        <div
          key={id}
          data-parallax={0.015 + ((id.charCodeAt(id.length - 1) % 10) * 0.0015)}
          className="absolute"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animation: `float-${id} ${duration}s ease-in-out ${delay}s infinite`,
            opacity: 0,
          }}
        >
          <div
            className={color}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rotate}deg)`,
              animation: `fade-in-deco 1.5s ease-out ${delay}s forwards`,
            }}
          >
            <Component />
          </div>
        </div>
      ))}

      <style>{`
${keyframeCSS}
@keyframes fade-in-deco {
  from { opacity: 0; }
  to { opacity: 1; }
}
      `}</style>
    </div>
  );
}
