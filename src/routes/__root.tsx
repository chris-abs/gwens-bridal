import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-background">
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-primary">
                Gwen's Bridal
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  About
                </Link>
                <Link
                  to="/bridal"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Bridal
                </Link>
                <Link
                  to="/prom"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Prom
                </Link>
                <Link
                  to="/children"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Children
                </Link>
                <Link
                  to="/accessories"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Accessories
                </Link>
                <Link
                  to="/shoes"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Shoes
                </Link>
                <Link
                  to="/alterations"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Alterations
                </Link>
                <Link
                  to="/contact"
                  className="text-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-medium" }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer className="border-t mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            <p>&copy; 2025 Gwen's Bridal. All rights reserved.</p>
          </div>
        </footer>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
