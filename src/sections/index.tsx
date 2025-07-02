import { cn } from "@/lib/utils";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  noPadding = false,
}) => (
  <section
    className={cn(
      "container mx-auto w-full max-w-7xl",
      !noPadding && "px-2 md:px-4 lg:px-6 xl:px-8",
      className
    )}
  >
    {children}
  </section>
);
