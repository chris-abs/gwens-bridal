import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSettingsStore } from "@/stores/useSettingsStore";

export function ThemeToggle() {
  const { theme, toggleTheme } = useSettingsStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-muted-foreground hover:text-accent-foreground hover:bg-accent/50 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
