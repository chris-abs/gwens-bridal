import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-slate-900 text-white">
        <nav className="relative z-50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="text-3xl font-light tracking-wider text-amber-300"
              >
                Gwen's Bridal
              </Link>
              <div className="hidden lg:flex space-x-8">
                <Link
                  to="/"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Home
                </Link>
                <Link
                  to="/bridal"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Bridal
                </Link>
                <Link
                  to="/prom"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Prom
                </Link>
                <Link
                  to="/children"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Children
                </Link>
                <Link
                  to="/accessories"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Accessories
                </Link>
                <Link
                  to="/shoes"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Shoes
                </Link>
                <Link
                  to="/alterations"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Alterations
                </Link>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                  activeProps={{ className: "text-amber-300" }}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button className="text-white/80 hover:text-amber-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="relative">
          <Outlet />
        </main>

        <footer className="relative mt-20 border-t border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-amber-300 text-xl font-light mb-4">
                  Gwen's Bridal
                </h3>
                <p className="text-white/60 font-light">
                  Creating unforgettable moments with perfect fits and timeless
                  elegance.
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg font-light mb-4">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <Link
                    to="/bridal"
                    className="block text-white/60 hover:text-amber-300 transition-colors"
                  >
                    Bridal Collection
                  </Link>
                  <Link
                    to="/prom"
                    className="block text-white/60 hover:text-amber-300 transition-colors"
                  >
                    Prom Dresses
                  </Link>
                  <Link
                    to="/alterations"
                    className="block text-white/60 hover:text-amber-300 transition-colors"
                  >
                    Alterations
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-white text-lg font-light mb-4">Contact</h4>
                <div className="space-y-2 text-white/60 font-light">
                  <p>123 Bridal Lane, Runcorn</p>
                  <p>01928 123456</p>
                  <p>info@gwensbridal.co.uk</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-white/40 font-light">
                &copy; 2025 Gwen's Bridal. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
