import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface CTAButtonProps {
  to: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary: "bg-amber-300 text-slate-900 hover:bg-amber-400",
  secondary:
    "border border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-slate-900",
};

export function CTAButton({
  to,
  variant = "primary",
  children,
  className,
}: CTAButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        "px-8 py-3 font-light tracking-wide transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
