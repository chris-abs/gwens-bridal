import { queryOptions } from "@tanstack/react-query";

import { ProductCategory, ProductImage } from "@/types/images";

export async function fetchImagesByCategory(
  category: ProductCategory
): Promise<ProductImage[]> {
  const response = await fetch(`/api/images?category=${category}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch images for category: ${category}`);
  }
  return response.json();
}

export const imageQueries = {
  all: () => ["images"] as const,
  category: (category: ProductCategory) =>
    [...imageQueries.all(), category] as const,
  byCategory: (category: ProductCategory) =>
    queryOptions({
      queryKey: imageQueries.category(category),
      queryFn: () => fetchImagesByCategory(category),
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    }),
};
