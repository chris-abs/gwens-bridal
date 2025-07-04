import { Link } from "@tanstack/react-router";

import { DesktopNav } from "@/sections/navigation/desktop-navigation";
import { MobileNav } from "@/sections/navigation/mobile-navigation";
import { ThemeToggle } from "@/components/molecules";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="relative z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-light tracking-wider text-primary hover:text-primary/80 transition-colors"
          >
            Gwen's Bridal
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <DesktopNav />
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="text-muted-foreground hover:bg-accent/50 transition-colors gap-2"
            >
              <span className="hidden sm:inline">Admin</span>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
