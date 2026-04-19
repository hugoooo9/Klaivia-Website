"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

const serviceIcons: Record<string, React.ReactNode> = {
  globe: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  monitor: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25l1.5 1.5L12 11.25l-1.5-1.5L12 8.25Z" fill="#A855F7" stroke="#A855F7" strokeWidth="0" />
    </svg>
  ),
  zap: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  bot: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
  ),
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Trois leviers. Un seul objectif : votre croissance."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="glass-card glow-hover p-8 md:p-10 flex flex-col"
            >
              <div className="text-violet-glow mb-6">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="font-sora text-2xl font-bold text-blanc mb-3">
                {service.title}
              </h3>
              <p className="text-gris-texte text-base mb-6">
                {service.subtitle}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-violet-glow mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-blanc/80 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gris-border pt-6 mt-auto">
                <p className="text-violet-glow font-sora font-bold text-lg mb-1">
                  {service.price}
                </p>
                <p className="text-gris-texte text-xs mb-4">
                  + frais de maintenance mensuels
                </p>
                <Button
                  href={SITE_CONFIG.calendlyUrl}
                  variant="secondary"
                  className="w-full text-center"
                >
                  {service.cta} →
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button href={SITE_CONFIG.calendlyUrl} variant="primary">
            Besoin d&apos;un conseil ? Échangeons sans engagement →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
