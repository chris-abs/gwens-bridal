import { Link } from "@tanstack/react-router";

const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/bridal", label: "Bridal" },
  { to: "/prom", label: "Prom" },
  { to: "/children", label: "Children" },
  { to: "/accessories", label: "Accessories" },
  { to: "/shoes", label: "Shoes" },
  { to: "/alterations", label: "Alterations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
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
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
                activeProps={{ className: "text-amber-300" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

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
  );
}
