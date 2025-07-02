import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { SiteHeader, SiteFooter } from "@/components/layout";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="relative">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
