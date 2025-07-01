export interface NavigationItem {
  label: string;
  to?: string;
  children?: NavigationItem[];
}

export const desktopNavigationItems: NavigationItem[] = [
  { label: "Bridal", to: "/bridal" },
  { label: "Prom", to: "/prom" },
  {
    label: "Children",
    children: [
      { label: "Flower Girl", to: "/children/flower-girl" },
      { label: "Page Boy", to: "/children/page-boy" },
    ],
  },
  { label: "Accessories", to: "/accessories" },
  { label: "Shoes", to: "/shoes" },
  { label: "Alterations", to: "/alterations" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const tabletNavigationItems: NavigationItem[] = [
  {
    label: "Dresses",
    children: [
      { label: "Bridal", to: "/bridal" },
      { label: "Prom", to: "/prom" },
      { label: "Alterations", to: "/alterations" },
    ],
  },
  {
    label: "Children",
    children: [
      { label: "Flower Girl", to: "/children/flower-girl" },
      { label: "Page Boy", to: "/children/page-boy" },
    ],
  },
  {
    label: "Extras",
    children: [
      { label: "Accessories", to: "/accessories" },
      { label: "Shoes", to: "/shoes" },
    ],
  },
  {
    label: "Shop",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export const mobileNavigationItems: NavigationItem[] = [
  {
    label: "Dresses",
    children: [
      { label: "Bridal", to: "/bridal" },
      { label: "Prom", to: "/prom" },
    ],
  },
  {
    label: "Children",
    children: [
      { label: "Flower Girl", to: "/children/flower-girl" },
      { label: "Page Boy", to: "/children/page-boy" },
    ],
  },
  { label: "Accessories", to: "/accessories" },
  { label: "Shoes", to: "/shoes" },
  { label: "Alterations", to: "/alterations" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
