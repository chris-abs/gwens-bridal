import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mobileNavigationItems, type NavigationItem } from "@/types/navigation";

function MobileNavItem({
  item,
  onItemClick,
  expandedItems,
  toggleExpanded,
}: {
  item: NavigationItem;
  onItemClick: () => void;
  expandedItems: Set<string>;
  toggleExpanded: (label: string) => void;
}) {
  const isExpanded = expandedItems.has(item.label);

  if (item.children) {
    return (
      <div className="space-y-2">
        <Button
          variant="ghost"
          onClick={() => toggleExpanded(item.label)}
          className="w-full justify-between text-white/80 hover:text-amber-300 hover:bg-slate-800/50 font-light h-auto py-3"
        >
          {item.label}
          {isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
        {isExpanded && (
          <div className="pl-4 space-y-2">
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to!}
                onClick={onItemClick}
                className="block py-2 text-white/60 hover:text-amber-300 transition-colors font-light"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.to!}
      onClick={onItemClick}
      className="block py-3 text-white/80 hover:text-amber-300 transition-colors font-light tracking-wide"
    >
      {item.label}
    </Link>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    setExpandedItems(new Set());
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white/80 hover:text-amber-300 hover:bg-transparent"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-slate-900 border-slate-700 w-80"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="text-amber-300 text-2xl font-light tracking-wider">
              Gwen's Bridal
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 space-y-1">
            {mobileNavigationItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onItemClick={handleItemClick}
                expandedItems={expandedItems}
                toggleExpanded={toggleExpanded}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
