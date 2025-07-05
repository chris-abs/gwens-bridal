import { Link } from "@tanstack/react-router";

import { DesktopNav } from "@/sections/navigation/desktop-navigation";
import { MobileNav } from "@/sections/navigation/mobile-navigation";
import { ThemeToggle } from "@/components/molecules";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <>
      <header className="relative z-30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-3xl font-light tracking-wider text-primary hover:text-primary transition-colors"
            >
              Gwen's Bridal
            </Link>

            <div className="hidden md:flex flex-1"></div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-accent-foreground hover:bg-accent/50 transition-colors gap-2"
              >
                <h3 className="hidden sm:inline">Admin</h3>
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <DesktopNav />
    </>
  );
}
