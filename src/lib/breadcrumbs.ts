import { useLocation } from "@tanstack/react-router";

const segmentLabels: Record<string, string> = {
  "flower-girl": "Flower Girl",
  "page-boy": "Page Boy",
  bridal: "Bridal Collection",
  prom: "Prom Dresses",
  children: "Children's Wear",
  accessories: "Accessories",
  shoes: "Shoes",
  alterations: "Alterations",
  about: "About Us",
  contact: "Contact Us",
};

const hiddenRoutes = new Set(["/admin"]);

export function useBreadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  if (hiddenRoutes.has(pathname)) {
    return [];
  }

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [{ label: "Home", href: "/" }];

  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;

    const label =
      segmentLabels[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    breadcrumbs.push({ label, href: currentPath });
  }

  return breadcrumbs;
}
