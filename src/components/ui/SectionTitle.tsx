"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-center mb-12 md:mb-16 ${className}`}
    >
      <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-blanc mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gris-texte text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
