import { useQuery } from "@tanstack/react-query";
import { useLocation } from "@tanstack/react-router";

import { imageQueries } from "@/api/images";
import { getImageCategoryFromRoute } from "@/types/images";

export function useProductImages() {
  const location = useLocation();
  const category = getImageCategoryFromRoute(location.pathname);

  return useQuery(
    category
      ? imageQueries.byCategory(category)
      : {
          queryKey: ["images", "disabled"],
          queryFn: () => Promise.resolve([]),
          enabled: false,
        }
  );
}

export function useProductImagesForCategory(category: string) {
  return useQuery(imageQueries.byCategory(category));
}
