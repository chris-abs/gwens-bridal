import { useLocation } from "@tanstack/react-router";

import { ProductCarousel } from "@/components/molecules";
import { useProductImages } from "@/queries/images";
import { getImageCategoryFromRoute, type ProductImage } from "@/types/images";

export function CarouselSection() {
  const location = useLocation();
  const category = getImageCategoryFromRoute(location.pathname);
  const { data: images = [], isLoading, error } = useProductImages();

  if (!category) return null;

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground">
          Failed to load images. Please try again later.
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return null;
  }

  // TODO: lightbox when images are clicked?
  const handleImageClick = (image: ProductImage) => {
    console.log("Image clicked:", image);
  };

  return (
    <div className="container mx-auto px-4 py-8 border-b border-border/50">
      <ProductCarousel
        images={images}
        aspectRatio="portrait"
        onImageClick={handleImageClick}
      />
    </div>
  );
}
