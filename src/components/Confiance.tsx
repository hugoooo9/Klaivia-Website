"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, ArrowRight, Send, Monitor, ShieldCheck, RefreshCw, Headphones, Check } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import {
  GARANTIES,
  PORTFOLIO,
  SITE_CONFIG,
} from "@/lib/constants";

function PortfolioVisual({ index }: { index: number }) {
  // E-commerce Mode → mini product card with price
  if (index === 0) {
    return (
      <div className="h-48 bg-gradient-to-br from-violet-principal/25 to-violet-glow/10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-noir-profond/70 border border-violet-principal/30 z-10">
          <Monitor className="w-3 h-3 text-violet-glow" />
          <span className="text-[10px] text-violet-glow font-semibold tracking-wider uppercase">Site web</span>
        </div>
        {/* Browser window */}
        <div className="w-32 mt-6 rounded-lg bg-noir-surface border border-gris-border shadow-xl overflow-hidden">
          {/* Chrome */}
          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-gris-border bg-noir-profond/60">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
            <div className="ml-1.5 flex-1 h-2 rounded-sm bg-noir-surface border border-gris-border/50 flex items-center px-1">
              <motion.div
                animate={{ width: ["20%", "100%", "100%"] }}
                transition={{ duration: 2, times: [0, 0.4, 1], repeat: Infinity, repeatDelay: 1 }}
                className="h-0.5 rounded-full bg-violet-glow/60"
              />
            </div>
          </div>
          {/* Page body */}
          <div className="p-2.5 space-y-1.5">
            {/* Hero band */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.5 }}
              className="w-full h-8 rounded bg-gradient-to-br from-violet-principal/40 to-violet-glow/20 flex items-center px-2 gap-1"
            >
              <div className="w-1 h-1 rounded-full bg-violet-glow" />
              <div className="h-1 w-12 rounded-full bg-blanc/80" />
            </motion.div>
            {/* Text lines */}
            <motion.div
              animate={{ width: ["0%", "85%"] }}
              transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2.2 }}
              className="h-1 rounded-full bg-violet-principal/40"
            />
            <motion.div
              animate={{ width: ["0%", "60%"] }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2.2 }}
              className="h-1 rounded-full bg-violet-principal/25"
            />
            {/* Card row */}
            <div className="grid grid-cols-3 gap-1 pt-0.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0, 1], y: [4, 0] }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                  className="h-5 rounded bg-noir-profond border border-violet-principal/20"
                />
              ))}
            </div>
            {/* CTA */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(168,85,247,0.6)",
                  "0 0 0 5px rgba(168,85,247,0)",
                ],
              }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-16 py-1 rounded-md bg-gradient-to-r from-violet-principal to-violet-glow flex items-center justify-center"
            >
              <span className="text-[7px] font-bold text-blanc uppercase tracking-wider">Démarrer</span>
            </motion.div>
          </div>
        </div>
        {/* Cursor */}
        <motion.div
          animate={{
            x: [-30, 18, 18, -30],
            y: [-10, 28, 28, -10],
          }}
          transition={{ duration: 4, times: [0, 0.5, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-blanc drop-shadow" fill="currentColor">
            <path d="M3 2l7 18 2.5-7.5L20 10z" />
          </svg>
        </motion.div>
      </div>
    );
  }

  // Cabinet de coaching → chat bubble WhatsApp style
  if (index === 1) {
    return (
      <div className="h-48 bg-gradient-to-br from-violet-glow/20 to-violet-principal/10 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-noir-profond/70 border border-violet-principal/30">
          <MessageSquare className="w-3 h-3 text-violet-glow" />
          <span className="text-[10px] text-violet-glow font-semibold tracking-wider uppercase">Agent IA</span>
        </div>
        <div className="flex flex-col gap-1.5 w-40">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 0, -10] }}
            transition={{ duration: 4, times: [0, 0.15, 0.85, 1], repeat: Infinity }}
            className="self-start max-w-[75%] px-2.5 py-1.5 rounded-lg rounded-bl-sm bg-noir-surface border border-gris-border"
          >
            <div className="w-16 h-1 bg-gris-texte/60 rounded mb-1" />
            <div className="w-20 h-1 bg-gris-texte/40 rounded" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: [0, 0, 1, 1, 0], x: [10, 10, 0, 0, 10] }}
            transition={{ duration: 4, times: [0, 0.3, 0.45, 0.85, 1], repeat: Infinity }}
            className="self-end max-w-[75%] px-2.5 py-1.5 rounded-lg rounded-br-sm bg-violet-principal/80"
          >
            <div className="w-14 h-1 bg-blanc rounded mb-1" />
            <div className="w-18 h-1 bg-blanc/70 rounded" />
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: 4, times: [0, 0.6, 0.7, 0.85, 1], repeat: Infinity }}
            className="self-start flex items-center gap-1 px-2 py-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -2, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                className="w-1.5 h-1.5 rounded-full bg-violet-glow"
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  // Automatisation email → email flow with arrows
  return (
    <div className="h-48 bg-gradient-to-br from-violet-principal/20 to-violet-glow/15 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-noir-profond/70 border border-violet-principal/30">
        <Mail className="w-3 h-3 text-violet-glow" />
        <span className="text-[10px] text-violet-glow font-semibold tracking-wider uppercase">Automatisation</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 18, 18, 0], opacity: [1, 1, 0, 1] }}
              transition={{ duration: 3, times: [0, 0.35, 0.5, 0.7], repeat: Infinity, delay: i * 0.5 }}
              className="w-12 h-7 rounded-md bg-noir-surface border border-gris-border flex items-center justify-center"
            >
              <Mail className="w-3 h-3 text-violet-glow/70" />
            </motion.div>
          ))}
        </div>
        <motion.div
          animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <ArrowRight className="w-3.5 h-3.5 text-violet-glow" />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 20px rgba(168,85,247,0.4)",
              "0 0 30px rgba(168,85,247,0.8)",
              "0 0 20px rgba(168,85,247,0.4)",
            ],
            rotate: [0, 6, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-lg bg-violet-principal/30 border border-violet-principal/60 flex items-center justify-center"
        >
          <Send className="w-6 h-6 text-violet-glow" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
        >
          <ArrowRight className="w-3.5 h-3.5 text-violet-glow" />
        </motion.div>
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 1, 1], x: [-10, 0, 0] }}
              transition={{ duration: 3, times: [0, 0.5, 1], repeat: Infinity, delay: i * 0.5 }}
              className={`w-16 rounded-md bg-noir-surface ${i === 1 ? "border border-violet-principal/40" : "border border-gris-border"} p-1.5`}
            >
              <div className="w-10 h-1 bg-violet-glow/80 rounded mb-1" />
              <div className={`${i === 1 ? "w-12" : "w-8"} h-1 bg-gris-texte/40 rounded`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Confiance() {
  return (
    <section id="confiance" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Pourquoi nous faire confiance" />

        {/* Garanties */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {[
            {
              icon: ShieldCheck,
              label: "Paiement sécurisé",
              title: "0 CHF avant validation",
              description: GARANTIES[0],
            },
            {
              icon: RefreshCw,
              label: "Satisfait ou refait",
              title: "Révisions illimitées",
              description: GARANTIES[1],
            },
            {
              icon: Headphones,
              label: "Support 7j/7",
              title: "Toujours joignables",
              description: GARANTIES[2],
            },
          ].map((g) => {
            const Icon = g.icon;
            return (
              <motion.div key={g.title} variants={item}>
                <div className="group relative h-full rounded-2xl border border-gris-border bg-gradient-to-b from-noir-carte to-noir-profond p-8 transition-all duration-300 hover:border-violet-principal/40 hover:-translate-y-1 hover:shadow-glow overflow-hidden">
                  {/* Accent glow */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet-principal/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-violet-subtil border border-violet-principal/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-violet-glow" strokeWidth={2} />
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-subtil border border-violet-principal/20">
                        <Check className="w-3 h-3 text-violet-glow" strokeWidth={3} />
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-violet-glow">
                          {g.label}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-sora font-bold text-blanc text-xl mb-3 leading-tight">
                      {g.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gris-texte text-sm leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Portfolio */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sora text-2xl md:text-3xl font-bold text-blanc text-center mb-4"
          >
            Nos domaines d&apos;expertise
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gris-texte text-center text-sm mb-10"
          >
            Les solutions que nous concevons sur mesure pour vous
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {PORTFOLIO.map((p, idx) => (
              <motion.div key={p.title} variants={item}>
                <div className="glass-card glow-hover overflow-hidden">
                  <PortfolioVisual index={idx} />
                  <div className="p-6">
                    <h4 className="font-sora font-bold text-blanc text-lg mb-2">
                      {p.title}
                    </h4>
                    <p className="text-gris-texte text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button href={SITE_CONFIG.calendlyUrl} variant="primary">
            Zéro risque. Lancer mon projet →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
