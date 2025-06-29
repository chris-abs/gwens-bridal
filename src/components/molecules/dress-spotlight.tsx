import { cn } from "@/lib/utils";

type SpotlightSize = "small" | "medium" | "large";

interface DressSpotlightProps {
  size?: SpotlightSize;
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  borderColor?: "amber" | "purple" | "white";
  onClick?: () => void;
}

const sizeClasses = {
  small: {
    container: "w-32 h-44",
    border: "p-1",
    content: "p-2",
  },
  medium: {
    container: "w-40 h-56",
    border: "p-1.5",
    content: "p-3",
  },
  large: {
    container: "w-48 h-72",
    border: "p-2",
    content: "p-4",
  },
};

const borderColors = {
  amber: "border-amber-300/40",
  purple: "border-purple-300/40",
  white: "border-white/30",
};

export function DressSpotlight({
  size = "medium",
  imageUrl,
  title,
  subtitle,
  className,
  borderColor = "amber",
  onClick,
}: DressSpotlightProps) {
  const sizeConfig = sizeClasses[size];

  return (
    <div
      className={cn(
        "relative cursor-pointer group transition-all duration-300 hover:scale-105",
        sizeConfig.container,
        className
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full border",
          borderColors[borderColor],
          "group-hover:border-opacity-60 transition-all duration-300"
        )}
      />

      <div
        className={cn(
          "absolute rounded-full overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/80",
          "group-hover:from-slate-700/50 group-hover:to-slate-800/80 transition-all duration-300",
          sizeConfig.border,
          "inset-0"
        )}
      >
        <div
          className={cn(
            "w-full h-full rounded-full overflow-hidden",
            sizeConfig.content
          )}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title || "Dress"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-700/50 flex flex-col items-center justify-center text-white/60 text-center">
              <div className="text-xs font-light">
                {title || "Featured Dress"}
              </div>
              {subtitle && (
                <div className="text-xs text-white/40 mt-1">{subtitle}</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300",
          borderColor === "amber" && "bg-amber-300",
          borderColor === "purple" && "bg-purple-300",
          borderColor === "white" && "bg-white",
          "blur-sm"
        )}
      />
    </div>
  );
}
