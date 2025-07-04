import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/components/atoms/nav-item";
import { ThemeToggle } from "@/components/molecules";
import { desktopNavigationItems } from "@/types/navigation";

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenu className="relative">
        <NavigationMenuList className="flex space-x-2">
          {desktopNavigationItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle />
    </div>
  );
}
