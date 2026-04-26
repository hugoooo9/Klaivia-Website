"use client";

import { motion } from "framer-motion";
import { Brain, Code, Database, Globe, Target, TrendingUp, Zap, Sparkles, Workflow, Bot, Mail } from "lucide-react";
import Button from "./ui/Button";
import { METHODOLOGIE, SITE_CONFIG } from "@/lib/constants";

// ─── Visual mockups (animate only on hover) ───────────────────────────────────

interface MockupProps {
  active: boolean;
}

function MockupContact({ active }: MockupProps) {
  return (
    <div className="relative h-56 rounded-xl border border-violet-principal/20 bg-gradient-to-br from-violet-subtil/40 to-transparent p-4 overflow-hidden">
      {/* Mock form card */}
      <div className="rounded-lg border border-violet-principal/25 bg-noir-profond/60 p-3 mb-3">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-violet-glow" />
            <span className="text-[11px] font-semibold text-blanc">Nouveau message</span>
          </div>
          <span className="text-[9px] uppercase tracking-[1.5px] text-violet-glow font-bold">Reçu</span>
        </div>
        {/* Name field */}
        <div className="mb-2">
          <div className="text-[9px] text-gris-texte mb-1">Nom</div>
          <div className="h-6 rounded-md bg-noir-surface border border-violet-principal/15 px-2 flex items-center">
            <motion.div
              animate={active ? { width: ["0%", "60%"] } : { width: "60%" }}
              transition={active ? { duration: 1.2, ease: "easeOut" } : { duration: 0.3 }}
              className="h-1.5 rounded-full bg-violet-principal/40"
            />
            <motion.span
              animate={active ? { opacity: [1, 0, 1] } : { opacity: 0 }}
              transition={active ? { duration: 1, repeat: Infinity } : { duration: 0.3 }}
              className="ml-0.5 inline-block w-px h-3 bg-violet-glow"
            />
          </div>
        </div>
        {/* Email field */}
        <div>
          <div className="text-[9px] text-gris-texte mb-1">Email</div>
          <div className="h-6 rounded-md bg-noir-surface border border-violet-principal/15 px-2 flex items-center">
            <motion.div
              animate={active ? { width: ["0%", "75%"] } : { width: "75%" }}
              transition={active ? { duration: 1.4, delay: 0.4, ease: "easeOut" } : { duration: 0.3 }}
              className="h-1.5 rounded-full bg-violet-principal/30"
            />
          </div>
        </div>
      </div>

      {/* Send button + reply pulse */}
      <div className="flex items-center gap-2">
        <motion.div
          animate={active ? { scale: [1, 0.96, 1], boxShadow: ["0 0 0 0 rgba(168,85,247,0.5)", "0 0 0 6px rgba(168,85,247,0)", "0 0 0 0 rgba(168,85,247,0)"] } : { scale: 1 }}
          transition={active ? { duration: 1.6, repeat: Infinity, ease: "easeOut" } : { duration: 0.3 }}
          className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-violet-principal to-violet-glow text-white text-[11px] font-semibold text-center shadow-glow"
        >
          Envoyer →
        </motion.div>
        <motion.div
          animate={active ? { opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] } : { opacity: 1, scale: 1 }}
          transition={active ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
          className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-violet-principal/20 border border-violet-principal/40"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] text-violet-glow font-semibold">48h</span>
        </motion.div>
      </div>
    </div>
  );
}

function MockupStrategie({ active }: MockupProps) {
  // Orbit animation: center icon + 2 rings with small lucide icons
  const ringInner = [
    { Icon: Target },
    { Icon: TrendingUp },
    { Icon: Workflow },
    { Icon: Zap },
  ];
  const ringOuter = [
    { Icon: Code },
    { Icon: Database },
    { Icon: Globe },
    { Icon: Bot },
    { Icon: Sparkles },
    { Icon: Brain },
  ];

  return (
    <div className="relative h-56 rounded-xl border border-violet-principal/20 bg-gradient-to-br from-violet-subtil/40 to-transparent overflow-hidden flex items-center justify-center">
      {/* Soft glow behind orbits */}
      <div className="absolute w-44 h-44 rounded-full bg-violet-principal/15 blur-3xl" />

      {/* Orbit container — sized so outer ring + icons stay fully inside */}
      <div className="relative w-52 h-52 flex items-center justify-center">
        {/* Center node */}
        <motion.div
          animate={active ? { scale: [1, 1.08, 1], boxShadow: ["0 0 0 0 rgba(168,85,247,0.4)", "0 0 0 8px rgba(168,85,247,0)", "0 0 0 0 rgba(168,85,247,0)"] } : { scale: 1 }}
          transition={active ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
          className="relative z-20 w-14 h-14 rounded-full bg-gradient-to-br from-violet-principal to-violet-glow shadow-glow flex items-center justify-center"
        >
          <Brain className="w-7 h-7 text-white" />
        </motion.div>

        {/* Inner orbit ring */}
        <motion.div
          animate={active ? { rotate: 360 } : { rotate: 0 }}
          transition={active ? { duration: 14, repeat: Infinity, ease: "linear" } : { duration: 0.4 }}
          className="absolute w-32 h-32 rounded-full border border-dashed border-violet-principal/30"
        >
          {ringInner.map((cfg, i) => {
            const angle = (i / ringInner.length) * 2 * Math.PI;
            const x = 50 + 50 * Math.cos(angle);
            const y = 50 + 50 * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-9 h-9 rounded-lg bg-noir-surface border border-violet-principal/50 flex items-center justify-center shadow-md"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <cfg.Icon className="w-4 h-4 text-violet-glow" />
              </div>
            );
          })}
        </motion.div>

        {/* Outer orbit ring */}
        <motion.div
          animate={active ? { rotate: -360 } : { rotate: 0 }}
          transition={active ? { duration: 22, repeat: Infinity, ease: "linear" } : { duration: 0.4 }}
          className="absolute w-48 h-48 rounded-full border border-dashed border-violet-principal/20"
        >
          {ringOuter.map((cfg, i) => {
            const angle = (i / ringOuter.length) * 2 * Math.PI;
            const x = 50 + 50 * Math.cos(angle);
            const y = 50 + 50 * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-9 h-9 rounded-lg bg-noir-surface border border-violet-principal/35 flex items-center justify-center shadow-md"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <cfg.Icon className="w-4 h-4 text-violet-glow/85" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

function MockupDev({ active }: MockupProps) {
  const axes = [
    { Icon: Target, label: "Objectifs définis" },
    { Icon: TrendingUp, label: "Leviers identifiés" },
    { Icon: Workflow, label: "Plan d'action" },
  ];
  return (
    <div className="relative h-56 rounded-xl border border-violet-principal/20 bg-gradient-to-br from-violet-subtil/40 to-transparent p-4 overflow-hidden flex flex-col">
      {/* Doc header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <motion.div
            animate={active ? { rotate: [0, 8, -8, 0] } : { rotate: 0 }}
            transition={active ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
            className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-principal to-violet-glow shadow-glow flex items-center justify-center"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </motion.div>
          <span className="text-[12px] font-semibold text-blanc">Stratégie</span>
        </div>
        <motion.div
          animate={active ? { scale: [0.9, 1.08, 1] } : { scale: 1 }}
          transition={active ? { duration: 0.6, repeat: Infinity, repeatDelay: 2, ease: "easeOut" } : { duration: 0.3 }}
          className="px-2 py-0.5 rounded-md bg-violet-principal/20 border border-violet-glow text-[9px] font-bold uppercase tracking-[1px] text-violet-glow"
        >
          ✓ Validée
        </motion.div>
      </div>

      {/* Axes */}
      <div className="space-y-1.5 flex-1 flex flex-col justify-center">
        {axes.map((ax, i) => (
          <motion.div
            key={ax.label}
            animate={active ? { opacity: [0, 1, 1, 1], x: [-12, 0, 0, 0] } : { opacity: 1, x: 0 }}
            transition={active ? { duration: 2.4, repeat: Infinity, delay: i * 0.3, times: [0, 0.25, 0.95, 1], ease: "easeOut" } : { duration: 0.3 }}
            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-noir-profond/50 border border-violet-principal/15"
          >
            <div className="w-6 h-6 rounded-md bg-violet-principal/20 border border-violet-principal/40 flex items-center justify-center flex-shrink-0">
              <ax.Icon className="w-3 h-3 text-violet-glow" />
            </div>
            <span className="flex-1 text-[11px] text-blanc font-medium truncate">{ax.label}</span>
            <motion.div
              animate={active ? { scale: [0, 0, 1.2, 1], opacity: [0, 0, 1, 1] } : { scale: 1, opacity: 1 }}
              transition={active ? { duration: 2.4, repeat: Infinity, delay: i * 0.3, times: [0, 0.3, 0.45, 1], ease: "easeOut" } : { duration: 0.3 }}
              className="w-4 h-4 rounded-full bg-violet-principal/30 border border-violet-principal/60 flex items-center justify-center flex-shrink-0"
            >
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-violet-glow">
                <path d="M2 6 L5 9 L10 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MockupLaunch({ active }: MockupProps) {
  // Activity bars — clean vertical bars w/ wave-pulse
  const bars = Array.from({ length: 24 });
  return (
    <div className="relative h-56 rounded-xl border border-violet-principal/20 bg-gradient-to-br from-violet-subtil/40 via-noir-profond/40 to-transparent p-5 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <motion.span
              animate={active ? { opacity: [1, 0, 1], scale: [1, 2.4, 1] } : { opacity: 1, scale: 1 }}
              transition={active ? { duration: 1.6, repeat: Infinity, ease: "easeOut" } : { duration: 0.3 }}
              className="absolute inset-0 rounded-full bg-violet-glow"
            />
            <span className="relative w-2 h-2 rounded-full bg-violet-glow shadow-glow" />
          </span>
          <span className="text-xs font-medium text-blanc">Performance</span>
        </div>
        <span className="text-[10px] uppercase tracking-[1.5px] text-violet-glow font-semibold">En continu</span>
      </div>

      {/* Bars */}
      <div className="flex items-end justify-between gap-1 flex-1 mt-auto">
        {bars.map((_, i) => {
          // Ascending slope w/ slight jitter
          const base = 38 + (i / (bars.length - 1)) * 55 + Math.sin(i * 0.9) * 3;
          return (
            <motion.div
              key={i}
              animate={active ? {
                height: [
                  `${base}%`,
                  `${Math.min(95, base + 6)}%`,
                  `${Math.max(8, base - 5)}%`,
                  `${base}%`,
                ],
              } : { height: `${base}%` }}
              transition={active ? {
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.06,
                ease: "easeInOut",
              } : { duration: 0.4, ease: "easeOut" }}
              className="flex-1 rounded-full bg-gradient-to-t from-violet-principal/60 to-violet-glow"
              style={{ height: `${base}%`, minHeight: 4 }}
            />
          );
        })}
      </div>
    </div>
  );
}

const MOCKUPS = [MockupContact, MockupDev, MockupStrategie, MockupLaunch];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Methodologie() {
  return (
    <section id="methodologie" className="relative py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-blanc tracking-tight">
            Notre{" "}
            <span className="bg-gradient-to-r from-violet-principal to-violet-glow bg-clip-text text-transparent">
              procédé
            </span>
          </h2>
          <p className="mt-4 text-gris-texte text-base md:text-lg max-w-2xl">
            De l&apos;idée au résultat, en 4 étapes claires et maîtrisées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {METHODOLOGIE.map((step, i) => {
            const Mockup = MOCKUPS[i];
            const span = "";
            const active = true;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
className={`group relative rounded-2xl border border-gris-border bg-noir-surface/40 backdrop-blur-sm p-5 md:p-6 hover:border-violet-principal/40 transition-all duration-300 ${span}`}
              >
                <Mockup active={active} />
                <div className="mt-5">
                  <div className="font-sora text-violet-glow text-sm font-semibold tracking-wider mb-2">
                    {String(step.step).padStart(2, "0")}. {step.title}
                  </div>
                  <p className="text-gris-texte text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-principal/0 via-transparent to-violet-principal/0 group-hover:from-violet-principal/5 transition-all duration-500" />
              </motion.div>
            );
          })}
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
