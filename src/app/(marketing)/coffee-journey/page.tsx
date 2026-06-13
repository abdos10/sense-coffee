import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { journeySteps } from "@/data/journey";
import { site } from "@/data/site";
import type { JourneyStep } from "@/types";

export const metadata: Metadata = {
  title: "رحلة القهوة",
  description: `رحلة قهوة ${site.name} من اختيار أجود حبات البن وحتى التحميص والطحن والتعبئة. خبرة تمتد لأكثر من 25 عاماً في ${site.location}.`,
  openGraph: {
    title: `رحلة القهوة | ${site.name}`,
    description: `رحلة القهوة من الحبة إلى الفنجان مع ${site.name}.`,
  },
};

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.7C15.5 4.9 17 3 17 3s0 4.5-2.7 8.5A7 7 0 0 1 11 20Z" />
      <path d="M9.2 14.8 17 3" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  );
}

function CupIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

const stepIconMap: Record<string, React.ReactNode> = {
  sourcing: <LeafIcon />,
  roasting: <FlameIcon />,
  grinding: <GearIcon />,
  packaging: <PackageIcon />,
  distribution: <CupIcon />,
};

function getStepNumber(n: number): string {
  return String(n).padStart(2, "0");
}

function TimelineCard({ step, index }: { step: JourneyStep; index: number }) {
  const imgSrc = "/images/journey/placeholder.webp";
  const icon = stepIconMap[step.id];

  return (
    <div
      className="relative pr-14 md:pr-20 pb-16 md:pb-24 last:pb-0 animate-fade-in-up"
      style={{ animationDelay: `${0.1 + index * 0.15}s`, opacity: 0 }}
    >
      <div className="absolute right-[14px] md:right-[22px] top-6 w-[20px] h-[20px] rounded-full border-[3px] border-brand-gold bg-brand-dark z-10" />

      <div className="group bg-brand-cream/95 rounded-2xl overflow-hidden shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
        <div className="relative aspect-video bg-gradient-to-br from-brand-coffee to-brand-dark">
          <Image
            src={imgSrc}
            alt={step.image?.alt || step.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-light text-brand-dark text-sm font-bold font-display">
              {getStepNumber(step.order)}
            </span>
            {icon && (
              <span className="text-brand-gold">{icon}</span>
            )}
            <h3 className="font-display text-xl md:text-2xl text-brand-dark">
              {step.title}
            </h3>
          </div>
          <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CoffeeJourneyPage() {
  return (
    <>
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-dark via-brand-coffee to-brand-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(213,115,2,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/background.png')", backgroundSize: "24px 24px" }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 mb-8 text-xs font-medium text-brand-gold tracking-wider bg-brand-gold/10 border border-brand-gold/30 rounded-full">
            من الحبة إلى الفنجان
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-cream leading-tight mb-6">
            رحلة القهوة
          </h1>

          <p className="text-brand-cream/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            من اختيار أجود حبات البن، مروراً بعمليات التحميص والطحن الدقيقة، وصولاً إلى فنجان يجسد خبرة تمتد لأكثر من 25 عاماً.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-brand-coffee to-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,115,2,0.06)_0%,transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="absolute right-[23px] md:right-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-gold via-brand-gold/20 to-transparent" />

          {journeySteps
            .sort((a, b) => a.order - b.order)
            .map((step, index) => (
              <TimelineCard key={step.id} step={step} index={index} />
            ))}
        </div>
      </section>

      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/journey/placeholder.webp"
          alt="قهوة بن الزيتوني "
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-brand-dark/60" />

        <div className="relative z-10 text-center px-4">
          <p className="font-display text-2xl md:text-4xl lg:text-5xl text-brand-cream leading-relaxed">
            منذ أكثر من 25 عاماً
            <br />
            نرافق رحلتك مع كل فنجان
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-brand-coffee to-brand-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-brand-cream mb-4">
            هل ترغب بتجربة مذاق بن الزيتوني
          </h2>
          <p className="text-brand-cream/60 leading-relaxed mb-10 max-w-lg mx-auto">
            اكتشف تشكيلتنا المختارة بعناية واستمتع بتجربة قهوة تجمع بين الجودة والأصالة.
          </p>
          <Link
            href="/#products"
            className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-2xl shadow-lg shadow-brand-gold/20 hover:shadow-xl hover:shadow-brand-gold/30 hover:-translate-y-1 transition-all duration-300"
          >
            استعرض منتجاتنا
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
