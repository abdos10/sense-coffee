import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { branches } from "@/data/branches";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/products`, lastModified: new Date() },
    { url: `${baseUrl}/branches`, lastModified: new Date() },
    { url: `${baseUrl}/coffee-journey`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${encodeURIComponent(product.slug)}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...productPages];
}
