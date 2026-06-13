import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "arabian-blend",
    name: "Arabian Blend",
    shortDescription: "Authentic Arabian coffee blend with a rich flavor and distinctive body.",
    price: "45 QAR",
    image: {
      src: "/images/products/product1.png",
      alt: "Arabian Blend",
    },
    roastLevel: "Medium Roast",
    flavorNotes: ["Cardamom", "Warm Spice"],
    featured: true,
  },
  {
    id: "p2",
    slug: "royal-blend",
    name: "Royal Blend",
    shortDescription: "A premium blend of the finest carefully roasted coffee beans.",
    price: "55 QAR",
    image: {
      src: "/images/products/product1.png",
      alt: "Royal Blend",
    },
    roastLevel: "Dark Roast",
    flavorNotes: ["Chocolate", "Caramel"],
    featured: true,
  },
  {
    id: "p3",
    slug: "hall-extra",
    name: "Hall Extra",
    shortDescription: "Rich and bold coffee with a thick, full-bodied texture.",
    price: "50 QAR",
    image: {
      src: "/images/products/product1.png",
      alt: "Hall Extra",
    },
    roastLevel: "Dark Roast",
    flavorNotes: ["Bold", "Earthy"],
    featured: true,
  },
  {
    id: "p4",
    slug: "turkish-blend",
    name: "Turkish Blend",
    shortDescription: "Traditional Turkish coffee blend with an authentic taste and golden foam.",
    price: "40 QAR",
    image: {
      src: "/images/products/product1.png",
      alt: "Turkish Blend",
    },
    roastLevel: "Fine Grind",
    flavorNotes: ["Cardamom", "Traditional"],
    featured: true,
  },
];
