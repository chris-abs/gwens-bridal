import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/components/atoms/nav-item";
import { desktopNavigationItems } from "@/types/navigation";

export function DesktopNav() {
  return (
    <NavigationMenu className="hidden xl:flex relative">
      <NavigationMenuList className="flex space-x-2">
        {desktopNavigationItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
