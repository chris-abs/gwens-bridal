export interface NavigationItem {
  label: string;
  to?: string;
  children?: NavigationItem[];
}

export const desktopNavigationItems: NavigationItem[] = [
  { label: "Home", to: "/" },
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
  { label: "Contact", to: "/contact" },
];

export const mobileNavigationItems: NavigationItem[] = [
  { label: "Home", to: "/" },
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
