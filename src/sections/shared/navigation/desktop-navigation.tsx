import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/components/atoms/nav-item";
import { desktopNavigationItems } from "@/types/navigation";

export function DesktopNav() {
  return (
    <div className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 shadow-sm">
        <NavigationMenu className="relative">
          <NavigationMenuList className="flex space-x-2">
            {desktopNavigationItems.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
