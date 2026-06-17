export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    id: "arabic-coffee",
    name: "Arabic Coffee",
    description: "Traditional Arabic roast with a rich, aromatic profile.",
    image: "/images/collections/bean1.webp",
  },
  {
    id: "turkish-coffee",
    name: "Turkish Coffee",
    description: "Finely ground, smooth, and deeply aromatic.",
    image: "/images/collections/bean2.webp",
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Bold crema with a balanced, full-bodied character.",
    image: "/images/collections/bean3.webp",
  },
  {
    id: "single-origin",
    name: "Single Origin",
    description: "Distinctive flavors from world-renowned farms.",
    image: "/images/collections/bean4.webp",
  },
  {
    id: "signature-blends",
    name: "Signature Blends",
    description: "Consistent, unforgettable blends for every palate.",
    image: "/images/collections/bean5.webp",
  },
  {
    id: "coffee-capsules",
    name: "Coffee Capsules",
    description: "Premium convenience for café-quality coffee at home.",
    image: "/images/collections/bean6.webp",
  },
];
