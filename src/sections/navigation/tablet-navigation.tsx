import { NavItem } from "@/components/atoms/nav-item";
import { tabletNavigationItems } from "@/types/navigation";

export function TabletNav() {
  return (
    <div className="hidden md:flex xl:hidden space-x-6 items-center">
      {tabletNavigationItems.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </div>
  );
}
