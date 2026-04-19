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
      {/* Background */}
      <div className="absolute inset-0 bg-noir-profond" />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* Offset violet glows for depth */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-principal/25 blur-[140px]" />
      <div className="absolute -bottom-20 right-1/4 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-violet-glow/20 blur-[140px]" />
      {/* Top fade-in to blend with section above */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-noir-profond to-transparent pointer-events-none" />

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
