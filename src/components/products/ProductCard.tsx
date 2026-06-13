import Image from "next/image";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export default function ProductCard({ product, onOrder }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-[20px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center text-center animate-fade-in-up">
      <div className="relative w-full h-[200px] flex items-center justify-center mb-5">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <h3 className="font-semibold text-[22px] text-[#2C2118] mb-2">
        {product.name}
      </h3>

      <p className="text-[18px] font-medium text-[#6B4B32] mb-4">
        {product.price}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
        <span className="inline-flex px-[14px] py-2 bg-[#F4EFE7] rounded-full text-[13px] text-[#6A5845]">
          {product.roastLevel}
        </span>
        {product.flavorNotes.map((note) => (
          <span
            key={note}
            className="inline-flex px-[14px] py-2 bg-[#F4EFE7] rounded-full text-[13px] text-[#6A5845]"
          >
            {note}
          </span>
        ))}
      </div>

      <button
        onClick={() => onOrder(product)}
        className="w-full py-2.5 rounded-xl bg-brand-dark text-white text-sm font-semibold transition-all duration-200 hover:bg-brand-coffee active:scale-[0.98]"
      >
        Order via WhatsApp
      </button>
    </div>
  );
}
