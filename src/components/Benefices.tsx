"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { BENEFICES, SITE_CONFIG } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Benefices() {
  return (
    <section id="benefices" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Ce que vous gagnez vraiment" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BENEFICES.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              className="glass-card glow-hover p-8 text-center"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <div className="font-sora text-3xl font-bold text-violet-glow mb-1">
                {b.stat}
              </div>
              <div className="font-sora text-lg font-semibold text-blanc mb-3">
                {b.title}
              </div>
              <p className="text-gris-texte text-sm leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button href={SITE_CONFIG.calendlyUrl} variant="primary">
            Prêt à transformer votre business ? →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
