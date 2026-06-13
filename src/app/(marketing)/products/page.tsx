import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "اشهر منتجاتنا",
  description: `تشكيلة واسعة من منتجات ${site.name} من القهوة المحمصة والمطحونة بعناية. خلطات متنوعة تناسب جميع الأذواق.`,
  openGraph: {
    title: `اشهر منتجاتنا | ${site.name}`,
    description: `تشكيلة منتجات ${site.name} من القهوة.`,
  },
};

export default function ProductsPage() {
  return <div />;
}
