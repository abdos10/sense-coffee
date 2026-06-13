import type { Metadata } from "next";
import { branches } from "@/data/branches";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "الفروع",
  description: `${branches.length} فروع لشركة ${site.name} في ${site.location}. زورونا في فروعنا في الأكرمية، باب الفرج، وحلب الجديدة.`,
  openGraph: {
    title: `الفروع | ${site.name}`,
    description: `${branches.length} فروع في ${site.location}.`,
  },
};

export default function BranchesPage() {
  return <div />;
}
