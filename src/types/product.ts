export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  roastLevel: string;
  flavorNotes: string[];
  featured: boolean;
}
