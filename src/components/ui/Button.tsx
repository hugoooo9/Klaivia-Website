"use client";

import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-sora font-semibold rounded-xl px-8 py-4 text-sm md:text-base transition-all duration-300 cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-violet-principal to-violet-glow text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02]",
    secondary:
      "bg-violet-subtil text-violet-glow border border-violet-principal/30 hover:bg-violet-principal/20 hover:shadow-glow hover:scale-[1.02]",
    outline:
      "bg-transparent text-blanc border border-gris-border hover:border-violet-principal/50 hover:text-violet-glow hover:scale-[1.02]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </Component>
  );
}
