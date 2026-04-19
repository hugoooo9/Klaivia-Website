"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Clock,
  Sparkles,
  RefreshCw,
  Wrench,
  Shield,
  Award,
  Building2,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import Button from "./ui/Button";
import { FAQ_ITEMS, SITE_CONFIG } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  wallet: Wallet,
  clock: Clock,
  sparkles: Sparkles,
  refresh: RefreshCw,
  wrench: Wrench,
  shield: Shield,
  award: Award,
  building: Building2,
};

function FAQItem({
  icon,
  question,
  answer,
  isOpen,
  onClick,
  isLast,
}: {
  icon: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
}) {
  const Icon = ICONS[icon] ?? Sparkles;
  return (
    <div className={isLast ? "" : "border-b border-gris-border"}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left cursor-pointer group"
      >
        <span className="flex items-center gap-3 font-sora font-semibold text-blanc text-base md:text-lg pr-4">
          <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-violet-subtil border border-violet-principal/30 flex-shrink-0">
            <Icon className="w-4 h-4 text-violet-glow" />
          </span>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-violet-glow flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
              <p className="text-gris-texte text-sm md:text-base leading-relaxed max-w-2xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Ambient violet glow — coherent with rest of the site */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-principal/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-blanc text-center mb-4"
        >
          Questions fréquentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gris-texte text-center text-sm md:text-base mb-12"
        >
          Tout ce qu'il faut savoir avant de lancer votre projet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card overflow-hidden"
        >
          {FAQ_ITEMS.map((faq, i) => (
            <FAQItem
              key={i}
              icon={faq.icon}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              isLast={i === FAQ_ITEMS.length - 1}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gris-texte mb-4">Une autre question en tête&nbsp;?</p>
          <Button href={SITE_CONFIG.calendlyUrl} variant="primary">
            Discuter de mon projet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
