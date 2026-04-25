"use client";

import { motion, type AnimationProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}

// Shiny shimmer animation — sweeps across button on loop
const shimmerAnim: AnimationProps = {
  initial: { "--x": "100%" } as Record<string, string>,
  animate: { "--x": "-100%" } as Record<string, string>,
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
  },
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 font-sora font-semibold rounded-xl px-8 py-4 text-sm md:text-base transition-all duration-300 cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-violet-principal to-violet-glow text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02]",
    secondary:
      "bg-violet-subtil text-violet-glow border border-violet-principal/30 hover:bg-violet-principal/20 hover:shadow-glow hover:scale-[1.02]",
    outline:
      "bg-transparent text-blanc border border-gris-border hover:border-violet-principal/50 hover:text-violet-glow hover:scale-[1.02]",
  };

  // Shimmer color tuned per variant
  const shimmerColor =
    variant === "primary"
      ? "rgba(255,255,255,0.35)"
      : "rgba(200,154,255,0.35)";

  const classes = `${base} ${variants[variant]} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
      {...shimmerAnim}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `linear-gradient(-75deg, transparent calc(var(--x) + 20%), ${shimmerColor} calc(var(--x) + 25%), transparent calc(var(--x) + 100%))`,
        }}
      />
    </Component>
  );
}
