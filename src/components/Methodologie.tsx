"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { METHODOLOGIE, SITE_CONFIG } from "@/lib/constants";

export default function Methodologie() {
  return (
    <section id="methodologie" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="De l'idée au résultat, en 4 étapes." />

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-8 top-0 w-0.5 bg-gradient-to-b from-violet-principal via-violet-glow to-violet-principal/20"
          />

          <div className="space-y-12">
            {METHODOLOGIE.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step circle */}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-noir-profond border-2 border-violet-principal flex items-center justify-center relative z-10 shadow-[0_0_0_4px_rgba(5,5,5,1)]">
                  <span className="font-sora font-bold text-violet-glow text-lg md:text-xl">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="glass-card p-6 md:p-8 flex-grow">
                  <h3 className="font-sora text-xl md:text-2xl font-bold text-blanc mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gris-texte text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button href={SITE_CONFIG.calendlyUrl} variant="primary">
            Lancer mon projet →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
