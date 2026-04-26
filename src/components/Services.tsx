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

// ============ Animated visuals per service ============

function VisualSiteWeb() {
  return (
    <div className="relative h-32 rounded-xl border border-violet-principal/20 bg-gradient-to-br from-noir-surface to-noir-carte overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-violet-principal/15">
        <div className="w-2 h-2 rounded-full bg-red-400/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <div className="w-2 h-2 rounded-full bg-green-400/60" />
        <div className="ml-2 flex-1 h-3 rounded-md bg-noir-surface border border-violet-principal/10" />
      </div>
      {/* Page content build-up */}
      <div className="p-3 space-y-2">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "70%" }}
          transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className="h-3 rounded bg-gradient-to-r from-violet-principal to-violet-glow"
        />
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "90%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className="h-2 rounded bg-violet-principal/30"
        />
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className="h-2 rounded bg-violet-principal/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.4 }}
          className="inline-block h-5 px-3 rounded-md bg-gradient-to-r from-violet-principal to-violet-glow shadow-glow"
        />
      </div>
    </div>
  );
}

function VisualAutomation() {
  const tasks = [
    "Nouveau lead reçu",
    "Email envoyé",
    "RDV planifié",
  ];
  return (
    <div className="relative h-32 rounded-xl border border-violet-principal/20 bg-gradient-to-br from-noir-surface to-noir-carte overflow-hidden p-3">
      {/* Top: pipeline */}
      <div className="flex items-center justify-between gap-1.5 mb-3">
        {[
          // Mail icon
          <svg key="mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>,
          // Gear icon
          <svg key="gear" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>,
          // Calendar icon
          <svg key="cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
            <path d="m9 16 2 2 4-4" />
          </svg>,
        ].map((icon, i, arr) => (
          <div key={i} className="flex items-center gap-1.5 flex-1 last:flex-initial">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(192,132,252,0)",
                  "0 0 0 4px rgba(192,132,252,0.25)",
                  "0 0 0 0 rgba(192,132,252,0)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6 }}
              className="w-7 h-7 rounded-lg bg-violet-principal/20 border border-violet-principal/50 flex items-center justify-center text-violet-glow flex-shrink-0"
            >
              {icon}
            </motion.div>
            {i < arr.length - 1 && (
              <div className="relative flex-1 h-px bg-violet-principal/25 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-violet-glow to-transparent"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom: task checklist */}
      <div className="space-y-1.5">
        {tasks.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 1, 0.3] }}
            transition={{ duration: 4, times: [0, 0.2, 0.8, 1], repeat: Infinity, delay: i * 0.6 }}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={{ scale: [0.8, 1, 1, 0.8] }}
              transition={{ duration: 4, times: [0, 0.2, 0.8, 1], repeat: Infinity, delay: i * 0.6 }}
              className="w-3 h-3 rounded-full bg-violet-principal/20 border border-violet-glow/60 flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-2 h-2 text-violet-glow">
                <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
            <div className="flex-1 h-1.5 rounded-full bg-violet-principal/15 overflow-hidden">
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.8, delay: i * 0.6, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-violet-principal to-violet-glow"
              />
            </div>
            <span className="text-[8px] text-gris-texte/70 font-mono">{t.split(" ")[0]}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VisualAgent() {
  return (
    <div className="relative h-32 rounded-xl border border-violet-principal/20 bg-gradient-to-br from-noir-surface to-noir-carte overflow-hidden p-3 flex flex-col gap-2">
      {/* User bubble */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.4 }}
        className="self-end max-w-[70%] px-2.5 py-1.5 rounded-lg rounded-tr-sm bg-violet-principal/25 border border-violet-principal/40"
      >
        <div className="h-1.5 w-16 rounded-full bg-violet-glow/70" />
      </motion.div>
      {/* AI typing bubble */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.4 }}
        className="self-start max-w-[70%] px-2.5 py-1.5 rounded-lg rounded-tl-sm bg-noir-surface border border-violet-principal/30 flex items-center gap-1"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
            className="w-1 h-1 rounded-full bg-violet-glow"
          />
        ))}
      </motion.div>
      {/* AI response bubble */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.6 }}
        className="self-start max-w-[80%] px-2.5 py-1.5 rounded-lg rounded-tl-sm bg-noir-surface border border-violet-principal/30 space-y-1"
      >
        <div className="h-1.5 w-20 rounded-full bg-violet-principal/50" />
        <div className="h-1.5 w-14 rounded-full bg-violet-principal/30" />
      </motion.div>
    </div>
  );
}

const VISUALS = [VisualSiteWeb, VisualAutomation, VisualAgent];

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
          {SERVICES.map((service, idx) => {
            const Visual = VISUALS[idx];
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col backdrop-blur-sm transition-all duration-500 bg-noir-carte/80 border border-gris-border hover:border-violet-principal/40"
              >
                {/* Decorative gradient blob */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-violet-principal/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />

{/* Icon tile */}
                <div className="relative z-10 mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-principal/30 to-violet-principal/5 border border-violet-principal/30 text-violet-glow shadow-inner shadow-violet-principal/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="[&_svg]:w-8 [&_svg]:h-8">
                      {serviceIcons[service.icon]}
                    </div>
                  </div>
                </div>

                <h3 className="relative z-10 font-sora text-2xl font-bold text-blanc mb-3">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gris-texte text-base mb-6 leading-relaxed">
                  {service.subtitle}
                </p>

                <div className="relative z-10 mb-6">
                  {Visual && <Visual />}
                </div>

                <ul className="relative z-10 space-y-3 mb-8 flex-grow">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-principal/15 border border-violet-principal/30">
                        <svg
                          className="w-3 h-3 text-violet-glow"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-blanc/85 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 pt-6 mt-auto border-t border-gris-border/60">
                  <Button
                    href={SITE_CONFIG.calendlyUrl}
                    variant="secondary"
                    className="w-full text-center"
                  >
                    {service.cta} →
                  </Button>
                </div>
              </motion.div>
            );
          })}
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
