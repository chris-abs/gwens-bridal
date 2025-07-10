import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { DesktopNav, MobileNav } from "@/sections";
import { ThemeToggle } from "@/components/molecules";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/organisms";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAuthStore } from "@/stores/useAuthStore";

export function SiteHeader() {
  const { isAuthenticated, logout } = useAuthStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsDialogOpen(false);
  };

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

              {isAuthenticated ? (
                <Button
                  onClick={logout}
                  variant="ghost"
                  className="text-muted-foreground hover:text-accent-foreground hover:bg-accent/50 transition-colors"
                >
                  <span className="hidden sm:inline">Logout</span>
                  <span className="sm:hidden">⏻</span>
                </Button>
              ) : (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-muted-foreground hover:text-accent-foreground hover:bg-accent/50 transition-colors"
                    >
                      <span className="hidden sm:inline">Admin</span>
                      <span className="sm:hidden">👤</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <LoginForm onSuccess={handleLoginSuccess} />
                  </DialogContent>
                </Dialog>
              )}

              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <DesktopNav />
    </>
  );
}
