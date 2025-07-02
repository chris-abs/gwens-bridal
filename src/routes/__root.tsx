import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

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

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="min-h-screen bg-neutral-800 text-white">
      <SiteHeader />

      {breadcrumbs.length > 0 && (
        <div className="container mx-auto px-6 py-4 border-b border-white/10">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage className="text-amber-300">
                        {crumb.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={crumb.href}
                        className="text-white/60 hover:text-amber-300 transition-colors"
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator className="text-white/40" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}

      <main className="relative">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}
