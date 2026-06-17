"use client";

import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { placeholderProducts } from "@/data/placeholderProducts";
import { site } from "@/data/site";
import type { Product } from "@/types";

export default function ProductsSection() {
  const [showAll, setShowAll] = useState(false);

  const handleOrder = (product: Product) => {
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        `Hello, I would like to inquire about ${product.name}`
      )}`,
      "_blank"
    );
  };

  const first3 = placeholderProducts.slice(0, 3);
  const next3 = placeholderProducts.slice(3, 6);
  const rest = placeholderProducts.slice(6);

  return (
    <section id="products" className="relative py-20 md:py-6 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-coffee">
            Our Products
          </h2>
          <p className="text-brand-coffee max-w-2xl mx-auto leading-relaxed mt-3">
            A wide selection of carefully roasted coffee to suit every taste
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {first3.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={handleOrder}
            />
          ))}
          {next3.map((product) => (
            <div key={product.id} className="hidden sm:block">
              <ProductCard
                product={product}
                onOrder={handleOrder}
              />
            </div>
          ))}
          {showAll && rest.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={handleOrder}
            />
          ))}
        </div>

        {placeholderProducts.length > 3 && (
          <div className="text-center mt-10 sm:hidden">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-dark text-white text-sm font-semibold transition-all duration-200 hover:bg-brand-coffee active:scale-[0.98]"
              >
                View All Products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-dark text-white text-sm font-semibold transition-all duration-200 hover:bg-brand-coffee active:scale-[0.98]"
              >
                Show Less
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
