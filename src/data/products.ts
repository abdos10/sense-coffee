import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "الخلطة-المصرية",
    name: "الخلطة المصرية",
    shortDescription:
      "خلطة قهوة مصرية أصيلة بنكهة غنية وقوام مميز.",
    image: {
      src: "/images/products/egyptian-blend.jpg",
      alt: "الخلطة المصرية",
    },
    featured: true,
  },
  {
    id: "p2",
    slug: "الخلطة-الملكية",
    name: "الخلطة الملكية",
    shortDescription:
      "خلطة فاخرة من أجود أنواع البن المحمص بعناية.",
    image: {
      src: "/images/products/royal-blend.jpg",
      alt: "الخلطة الملكية",
    },
    featured: true,
  },
  {
    id: "p3",
    slug: "هال-اكسترا",
    name: "هال اكسترا",
    shortDescription:
      "قهوة هال اكسترا بنكهة غنية وقوام كثيف.",
    image: {
      src: "/images/products/hall-extra.jpg",
      alt: "هال اكسترا",
    },
    featured: true,
  },
  {
    id: "p4",
    slug: "الخلطة-التركية",
    name: "الخلطة التركية",
    shortDescription:
      "خلطة قهوة تركية تقليدية بمذاق أصيل ورغوة ذهبية.",
    image: {
      src: "/images/products/turkish-blend.jpg",
      alt: "الخلطة التركية",
    },
    featured: true,
  },
];
