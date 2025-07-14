export interface ProductImage {
  id: number;
  filename: string;
  url: string;
  category: ProductCategory;
  created_at: string;
  is_active: boolean;
}

export type ProductCategory = "bridal" | "prom" | "flower-girl" | "page-boy";

export function getImageCategoryFromRoute(
  pathname: string
): ProductCategory | null {
  if (pathname === "/bridal") return "bridal";
  if (pathname === "/prom") return "prom";
  if (pathname === "/children/flower-girl") return "flower-girl";
  if (pathname === "/children/page-boy") return "page-boy";

  return null;
}

export function shouldDisplayCarousel(pathname: string): boolean {
  const excludedRoutes = [
    "/",
    "/about",
    "/contact",
    "/accessories",
    "/alterations",
    "/shoes",
  ];
  return !excludedRoutes.includes(pathname);
}
