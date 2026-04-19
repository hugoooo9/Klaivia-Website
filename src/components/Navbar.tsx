"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Button from "./ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-noir-profond/80 backdrop-blur-xl border-b border-gris-border"
            : "bg-transparent"
        }`}
      >
        {/* Glow line under navbar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent, #7C3AED, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <KlaiviaLogo />
              <span className="font-sora font-bold text-2xl text-blanc group-hover:text-violet-glow transition-colors">
                {SITE_CONFIG.shortName}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gris-texte hover:text-blanc transition-colors text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button href={SITE_CONFIG.calendlyUrl} variant="primary" className="!py-3 !px-7 !text-base">
                Démarrer
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-blanc p-2"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-blanc transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-blanc transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-blanc transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-noir-profond/95 backdrop-blur-2xl overflow-hidden"
          >
            {/* Ambient violet glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-violet-principal/15 blur-[120px] pointer-events-none" />

            <div className="relative h-full flex flex-col pt-24 pb-8 px-8">
              {/* Section label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="font-sora text-xs uppercase tracking-[0.2em] text-violet-glow/70 mb-8"
              >
                Navigation
              </motion.p>

              {/* Links */}
              <nav className="flex flex-col gap-1 flex-grow">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.35, ease: "easeOut" }}
                    className="group flex items-baseline gap-4 py-4 border-b border-gris-border/60 hover:border-violet-principal/50 transition-colors"
                  >
                    <span className="font-sora text-xs text-violet-glow/50 tabular-nums tracking-widest">
                      0{i + 1}
                    </span>
                    <span className="font-sora text-3xl font-medium text-blanc group-hover:text-violet-glow transition-colors tracking-tight">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_LINKS.length * 0.06, duration: 0.35 }}
                className="mt-8"
              >
                <Button
                  href={SITE_CONFIG.calendlyUrl}
                  variant="primary"
                  className="!w-full !py-4 !text-base text-center"
                >
                  Démarrer mon projet →
                </Button>
                <p className="font-sora text-xs text-gris-texte text-center mt-4 tracking-wide">
                  Réponse garantie sous 48h
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function KlaiviaLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Klaivia"
      width={44}
      height={44}
      className="flex-shrink-0 object-contain"
    />
  );
}
