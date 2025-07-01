import { Link } from "@tanstack/react-router";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/navigation";

interface NavItemProps {
  item: NavigationItem;
}

export function NavItem({ item }: NavItemProps) {
  if (item.children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white/80 hover:text-amber-300 bg-transparent hover:bg-slate-800/50">
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-48 gap-1 p-2 bg-slate-800 border-slate-700">
            {item.children.map((child) => (
              <Link key={child.to} to={child.to!}>
                <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-amber-300 text-white/80">
                  {child.label}
                </NavigationMenuLink>
              </Link>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link to={item.to!}>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "text-white/80 hover:text-amber-300 bg-transparent hover:bg-slate-800/50"
          )}
        >
          {item.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
