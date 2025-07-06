import React from "react";

import { cn } from "@/lib/utils";

type SpotlightSize = "small" | "medium" | "large";

interface DressSpotlightProps {
  src: string;
  alt: string;
  size?: SpotlightSize;
  className?: string;
  children?: React.ReactNode;
}

const sizeVariants = {
  small: {
    container: "w-48 h-96",
    border: "border-2",
    gap: "p-1.5",
  },
  medium: {
    container: "w-64 h-[480px]",
    border: "border-2",
    gap: "p-1.5",
  },
  large: {
    container: "w-72 h-[580px]",
    border: "border-2",
    gap: "p-1.5",
  },
} as const;

export const DressSpotlight = ({
  src,
  alt,
  size = "medium",
  className,
  children,
}: DressSpotlightProps) => {
  const variant = sizeVariants[size];

  return (
    <div
      className={cn(
        "relative group cursor-pointer transition-all duration-300 hover:scale-105",
        variant.container,
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full border-amber-200/60 bg-gradient-to-br from-amber-100/10 via-transparent to-amber-200/10 border-2",
          variant.border
        )}
      >
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            variant.gap
          )}
        >
          <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-full"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-full" />

            {children && (
              <div className="absolute inset-0 flex items-end justify-center pb-6">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-amber-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm rounded-full" />
    </div>
  );
};
