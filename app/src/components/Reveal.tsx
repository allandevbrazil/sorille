import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade-in" | "slide-up" | "scale-up";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  
  const variants = {
    "fade-up": visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
    "fade-in": visible ? "opacity-100" : "opacity-0",
    "slide-up": visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    "scale-up": visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
  };

  const durations = {
    "fade-up": "duration-700",
    "fade-in": "duration-500",
    "slide-up": "duration-800",
    "scale-up": "duration-500",
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out motion-reduce:transition-none motion-reduce:transform-none ${durations[variant]} ${variants[variant]} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
