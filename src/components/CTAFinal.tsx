"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section
      id="cta-final"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
    >

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blanc mb-6 leading-tight"
        >
          Pendant que vous hésitez,{" "}
          <span className="bg-gradient-to-r from-violet-principal to-violet-glow bg-clip-text text-transparent">
            vos concurrents automatisent.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gris-texte text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Un simple message peut changer la trajectoire de votre business.
          Laissez-nous vos infos, on vous recontacte sous 48h. Gratuit, sans engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            href={SITE_CONFIG.calendlyUrl}
            variant="primary"
            className="!px-12 !py-5 !text-lg shadow-glow-lg hover:shadow-glow-xl"
          >
            Lancer mon projet →
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
