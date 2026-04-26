"use client";

import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <>
    <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <Badge className="mb-8">
          <span>🚀</span>
          Agence Web & IA
        </Badge>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sora text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Votre business travaille.{" "}
          <span className="bg-gradient-to-r from-violet-principal to-violet-glow bg-clip-text text-transparent">
            Même quand vous dormez.
          </span>
        </motion.h1>

        {/* H2 subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gris-texte text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Site web, automatisations et agent IA conçus pour faire grandir votre business 24/24.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button href={SITE_CONFIG.calendlyUrl} variant="primary">
            Lancer mon projet →
          </Button>
          <Button href="#services" variant="outline">
            Découvrir nos services ↓
          </Button>
        </motion.div>

      </div>

      </section>

      {/* Partners marquee — hidden for now, may be re-enabled later.
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full bg-noir-profond pt-4 pb-10 -mt-8"
      >
        <p className="text-center font-sora font-bold text-sm md:text-base uppercase tracking-[0.25em] text-blanc mb-6">
          Ils nous font confiance
        </p>
        <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-20 md:gap-28 items-center pr-20 md:pr-28 [animation-direction:reverse]">
            {Array.from({ length: 24 }).map((_, i) => (
              <AllianzLogo key={i} />
            ))}
          </div>
        </div>
      </motion.section>
      */}
    </>
  );
}

// Kept for future re-enable of the partners marquee above.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AllianzLogo() {
  return (
    <div
      className="flex items-center shrink-0 h-10 md:h-12 opacity-90 hover:opacity-100 transition-opacity"
      aria-label="Allianz"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/allianz.png"
        alt="Allianz"
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
