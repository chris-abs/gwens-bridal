export interface ProductImage {
  id: string;
  category: ProductCategory;
  title: string;
  subtitle?: string;
  imageUrl: string;
  alt: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export type ProductCategory =
  | "bridal"
  | "prom"
  | "flower-girl"
  | "page-boy"
  | "children";
