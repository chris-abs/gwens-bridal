import { NavItem } from "@/components/atoms/nav-item";
import { desktopNavigationItems } from "@/types/navigation";

export function DesktopNav() {
  return (
    <div className="hidden xl:flex space-x-8 items-center">
      {desktopNavigationItems.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </div>
  );
}
