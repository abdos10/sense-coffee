import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import DecorativeElements from "@/components/decorative/DecorativeElements";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-brand-dark focus:rounded-xl focus:text-sm focus:font-bold focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <DecorativeElements />
      <main id="main-content" className="relative z-10">{children}</main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
