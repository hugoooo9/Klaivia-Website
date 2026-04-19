"use client";

import { motion } from "framer-motion";
import { MessageSquare, Star, Mail, ArrowRight, Send, Monitor, Calendar, Clock, ShieldCheck, RefreshCw, Headphones, Check } from "lucide-react";
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
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-noir-profond/70 border border-violet-principal/30">
          <Monitor className="w-3 h-3 text-violet-glow" />
          <span className="text-[10px] text-violet-glow font-semibold tracking-wider uppercase">Site web</span>
        </div>
        <div className="w-40 rounded-xl bg-noir-surface border border-gris-border p-3 shadow-xl">
          <div className="w-full h-14 rounded-md bg-gradient-to-br from-violet-principal/30 to-violet-glow/20 mb-2.5 flex items-center justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 text-violet-glow fill-violet-glow" />
            ))}
          </div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Calendar className="w-2.5 h-2.5 text-violet-glow" />
            <div className="w-16 h-1 bg-blanc/70 rounded" />
          </div>
          <div className="flex items-center gap-1.5 mb-2">
            <Clock className="w-2.5 h-2.5 text-violet-glow" />
            <div className="w-12 h-1 bg-gris-texte/50 rounded" />
          </div>
          <div className="w-full py-1 rounded-md bg-violet-principal/80 flex items-center justify-center">
            <span className="text-[8px] font-bold text-blanc uppercase tracking-wider">Réserver</span>
          </div>
        </div>
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
          <div className="self-start max-w-[75%] px-2.5 py-1.5 rounded-lg rounded-bl-sm bg-noir-surface border border-gris-border">
            <div className="w-16 h-1 bg-gris-texte/60 rounded mb-1" />
            <div className="w-20 h-1 bg-gris-texte/40 rounded" />
          </div>
          <div className="self-end max-w-[75%] px-2.5 py-1.5 rounded-lg rounded-br-sm bg-violet-principal/80">
            <div className="w-14 h-1 bg-blanc rounded mb-1" />
            <div className="w-18 h-1 bg-blanc/70 rounded" />
          </div>
          <div className="self-start flex items-center gap-1 px-2 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-glow animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-violet-glow animate-pulse [animation-delay:200ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-violet-glow animate-pulse [animation-delay:400ms]" />
          </div>
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
          <div className="w-12 h-7 rounded-md bg-noir-surface border border-gris-border flex items-center justify-center">
            <Mail className="w-3 h-3 text-violet-glow/70" />
          </div>
          <div className="w-12 h-7 rounded-md bg-noir-surface border border-gris-border flex items-center justify-center">
            <Mail className="w-3 h-3 text-violet-glow/70" />
          </div>
          <div className="w-12 h-7 rounded-md bg-noir-surface border border-gris-border flex items-center justify-center">
            <Mail className="w-3 h-3 text-violet-glow/70" />
          </div>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-violet-glow animate-pulse" />
        <div className="w-14 h-14 rounded-lg bg-violet-principal/30 border border-violet-principal/60 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          <Send className="w-6 h-6 text-violet-glow" />
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-violet-glow animate-pulse [animation-delay:300ms]" />
        <div className="flex flex-col gap-1.5">
          <div className="w-16 rounded-md bg-noir-surface border border-gris-border p-1.5">
            <div className="w-10 h-1 bg-violet-glow/80 rounded mb-1" />
            <div className="w-8 h-1 bg-gris-texte/40 rounded" />
          </div>
          <div className="w-16 rounded-md bg-noir-surface border border-violet-principal/40 p-1.5">
            <div className="w-10 h-1 bg-violet-glow/80 rounded mb-1" />
            <div className="w-12 h-1 bg-gris-texte/40 rounded" />
          </div>
          <div className="w-16 rounded-md bg-noir-surface border border-gris-border p-1.5">
            <div className="w-10 h-1 bg-violet-glow/80 rounded mb-1" />
            <div className="w-8 h-1 bg-gris-texte/40 rounded" />
          </div>
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
