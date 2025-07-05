import { useQuery } from "@tanstack/react-query";
import { useLocation } from "@tanstack/react-router";

import { imageQueries } from "@/api/images";
import { mockImages } from "@/lib/mock-data/images";
import { getImageCategoryFromRoute } from "@/types/images";

export function useProductImages() {
  const location = useLocation();
  const category = getImageCategoryFromRoute(location.pathname);

  return useQuery({
    queryKey: ["images", category],
    queryFn: () => {
      return Promise.resolve(category ? mockImages[category] || [] : []);
    },
    // TODO: when the BE is ready for image fetching
    // queryFn: () => fetchImagesByCategory(category)
    enabled: Boolean(category),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

export function useProductImagesForCategory(category: string) {
  return useQuery(imageQueries.byCategory(category));
}
