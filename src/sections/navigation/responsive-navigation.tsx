import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function MediumScreenNav() {
  return (
    <div className="hidden md:flex lg:hidden space-x-6 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-white/80 hover:text-amber-300 hover:bg-transparent font-light tracking-wide h-auto p-0 gap-1"
          >
            Dresses
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-slate-800 border-slate-700"
        >
          <DropdownMenuItem asChild>
            <Link
              to="/bridal"
              className="text-white/80 hover:text-amber-300 focus:text-amber-300 cursor-pointer"
            >
              Bridal
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              to="/prom"
              className="text-white/80 hover:text-amber-300 focus:text-amber-300 cursor-pointer"
            >
              Prom
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Children Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-white/80 hover:text-amber-300 hover:bg-transparent font-light tracking-wide h-auto p-0 gap-1"
          >
            Children
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-slate-800 border-slate-700"
        >
          <DropdownMenuItem asChild>
            <Link
              to="/children/flower-girl"
              className="text-white/80 hover:text-amber-300 focus:text-amber-300 cursor-pointer"
            >
              Flower Girl
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              to="/children/page-boy"
              className="text-white/80 hover:text-amber-300 focus:text-amber-300 cursor-pointer"
            >
              Page Boy
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        to="/accessories"
        className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
        activeProps={{ className: "text-amber-300" }}
      >
        Accessories
      </Link>

      <Link
        to="/alterations"
        className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
        activeProps={{ className: "text-amber-300" }}
      >
        Alterations
      </Link>

      <Link
        to="/contact"
        className="text-white/80 hover:text-amber-300 transition-colors duration-300 font-light tracking-wide"
        activeProps={{ className: "text-amber-300" }}
      >
        Contact
      </Link>
    </div>
  );
}
