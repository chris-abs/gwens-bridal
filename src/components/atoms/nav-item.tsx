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
        <NavigationMenuTrigger className="text-white/80 hover:text-amber-300 bg-transparent hover:bg-slate-800/50 data-[state=open]:bg-slate-800/50">
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
          <div className="w-48 p-2 bg-slate-800 border border-slate-700 rounded-md shadow-lg">
            {item.children.map((child) => (
              <Link key={child.to} to={child.to!}>
                <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-700 hover:text-amber-300 text-white/80 text-sm">
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
