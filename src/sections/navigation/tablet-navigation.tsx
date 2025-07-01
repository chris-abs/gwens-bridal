import { NavItem } from "@/components/atoms/nav-item";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { tabletNavigationItems } from "@/types/navigation";

export function TabletNav() {
  return (
    <NavigationMenu className="hidden md:flex xl:hidden">
      <NavigationMenuList className="space-x-2">
        {tabletNavigationItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
