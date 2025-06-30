import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { navigationItems, type NavigationItem } from "@/types/navigation";

function NavItem({ item }: { item: NavigationItem }) {
  if (item.children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-white/80 hover:text-amber-300 hover:bg-transparent font-light tracking-wide h-auto p-0 gap-1"
          >
            {item.label}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-slate-800 border-slate-700"
        >
          {item.children.map((child) => (
            <DropdownMenuItem key={child.to} asChild>
              <Link
                to={child.to!}
                className="text-white/80 hover:text-amber-300 focus:text-amber-300 cursor-pointer"
              >
                {child.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      to={item.to!}
      className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
      activeProps={{ className: "text-amber-300" }}
    >
      {item.label}
    </Link>
  );
}

export function DesktopNav() {
  return (
    <div className="hidden lg:flex space-x-8 items-center">
      {navigationItems.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </div>
  );
}
