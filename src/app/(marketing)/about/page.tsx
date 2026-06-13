import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "من نحن",
  description: `تعرف على قصة شركة ${site.name} منذ عام ${site.foundedYear} في ${site.location}. خبرة في تحميص وطحن القهوة تمتد لأكثر من ربع قرن.`,
  openGraph: {
    title: `من نحن | ${site.name}`,
    description: `تعرف على قصة ${site.name} في ${site.location}.`,
  },
};

export default function AboutPage() {
  return <div />;
}
