import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: `تواصل مع شركة ${site.name} عبر الهاتف أو واتساب. فريقنا جاهز للإجابة عن استفساراتكم وتلبية طلباتكم.`,
  openGraph: {
    title: `تواصل معنا | ${site.name}`,
    description: `تواصل مع ${site.name} عبر الهاتف أو واتساب.`,
  },
};

export default function ContactPage() {
  return <div />;
}
