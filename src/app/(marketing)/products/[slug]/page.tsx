import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { site } from "@/data/site";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: `${product.shortDescription} - ${site.name}`,
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return <div />;
}
