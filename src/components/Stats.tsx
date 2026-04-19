"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Zap,
  Clock,
  BarChart3,
  Shield,
} from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "Croissance client moyenne",
    trend: "+5% ce mois",
  },
  {
    icon: Users,
    value: "5+",
    label: "Clients accompagnés",
    trend: "+1 ce mois",
  },
  {
    icon: Zap,
    value: "10K+",
    label: "Tâches automatisées",
    trend: "+2K ce mois",
  },
  {
    icon: Clock,
    value: "48h",
    label: "Temps de réponse",
    trend: "Moyenne",
  },
];

const dashboardCards = [
  {
    title: "Performance IA",
    value: "97.8%",
    subtitle: "Précision des modèles",
    icon: BarChart3,
    chart: [40, 65, 55, 80, 70, 90, 85, 95, 88, 97],
  },
  {
    title: "Uptime",
    value: "99.9%",
    subtitle: "Disponibilité services",
    icon: Shield,
    chart: [95, 99, 98, 99, 100, 99, 100, 99, 100, 100],
  },
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-principal font-sora text-sm font-semibold tracking-widest uppercase">
            Dashboard
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-sora font-bold text-blanc">
            Résultats en{" "}
            <span className="text-violet-glow" style={{ textShadow: "0 0 20px rgba(168,85,247,0.5)" }}>
              temps réel
            </span>
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 glow-hover"
            >
              <stat.icon className="w-5 h-5 text-violet-glow mb-3" />
              <div className="text-2xl md:text-3xl font-sora font-bold text-blanc">
                {stat.value}
              </div>
              <div className="text-xs text-gris-texte mt-1">{stat.label}</div>
              <div className="text-xs text-green-400 mt-2">{stat.trend}</div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard chart cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboardCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="glass-card p-8 glow-hover"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gris-texte">{card.title}</div>
                  <div className="text-3xl font-sora font-bold text-blanc mt-1">
                    {card.value}
                  </div>
                  <div className="text-xs text-gris-texte mt-1">
                    {card.subtitle}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-violet-subtil border border-violet-principal/30 flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-violet-glow" />
                </div>
              </div>

              {/* Mini chart */}
              <div className="flex items-end gap-1 h-16">
                {card.chart.map((val, j) => (
                  <motion.div
                    key={j}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${val}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + j * 0.05, duration: 0.4 }}
                    className="flex-1 rounded-sm"
                    style={{
                      background: `linear-gradient(to top, rgba(124,58,237,0.4), rgba(168,85,247,0.8))`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
