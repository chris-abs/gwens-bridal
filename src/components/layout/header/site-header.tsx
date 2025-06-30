import { Link } from "@tanstack/react-router";

import { DesktopNav } from "@/sections/navigation/desktop-navigation";
import { MobileNav } from "@/sections/navigation/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="relative z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-light tracking-wider text-amber-300 hover:text-amber-400 transition-colors"
          >
            Gwen's Bridal
          </Link>

          <DesktopNav />

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
