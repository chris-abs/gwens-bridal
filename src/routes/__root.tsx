import React, { Suspense } from "react";
import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumbs } from "@/lib/breadcrumbs";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { CarouselSection } from "@/sections/shared";
import { shouldDisplayCarousel } from "@/types/images";

export const Route = createRootRoute({
  component: RootLayout,
});

function CarouselFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    </div>
  );
}

function RootLayout() {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();
  const showCarousel = shouldDisplayCarousel(location.pathname);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {breadcrumbs.length > 0 && (
        <div className="container mx-auto px-6 py-4 border-t border-white/10">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage className="text-primary cursor-default">
                        {crumb.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={crumb.href}
                        className="text-muted-foreground hover:text-accent-foreground transition-colors"
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator className="text-muted-foreground" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}

      {showCarousel && (
        <Suspense fallback={<CarouselFallback />}>
          <CarouselSection />
        </Suspense>
      )}

      <main className="relative">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}
