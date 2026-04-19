"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-subtil border border-violet-principal/20 text-violet-glow text-sm font-medium ${className}`}
    >
      {children}
    </motion.div>
  );
}
