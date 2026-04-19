"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Mail, User, MessageSquare, Sparkles, Lock } from "lucide-react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const services = [
  "Site Web Premium",
  "Automatisation IA",
  "Agent IA sur mesure",
  "Je ne sais pas encore",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Hide Spline watermark
  useEffect(() => {
    const hide = () => {
      const sv = document.querySelector("spline-viewer");
      if (sv?.shadowRoot) {
        const logo = sv.shadowRoot.querySelector("#logo");
        if (logo) (logo as HTMLElement).style.display = "none";
        sv.shadowRoot.querySelectorAll("div").forEach((d) => {
          if (d.textContent?.includes("Built with"))
            d.style.display = "none";
        });
      }
    };
    const interval = setInterval(hide, 500);
    const timeout = setTimeout(() => clearInterval(interval), 10000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Erreur réseau. Réessaie dans un instant.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-noir-profond text-blanc overflow-hidden">
      {/* Spline 3D background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* @ts-expect-error - spline-viewer is a web component loaded via external script */}
        <spline-viewer
          url="https://prod.spline.design/tFl0vR7Y1VTo6wjF/scene.splinecode"
          loading-anim-type="none"
          logo="false"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-noir-profond/75" />
      </div>

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-violet-principal/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-glow/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gris-texte hover:text-violet-glow transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 md:p-16 text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 rounded-full bg-violet-principal/20 border-2 border-violet-principal flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-violet-glow" />
            </motion.div>
            <h1 className="font-sora text-3xl md:text-4xl font-bold mb-4">
              Merci {form.name.split(" ")[0]} !
            </h1>
            <p className="text-gris-texte text-lg mb-8 leading-relaxed">
              On a bien reçu ta demande. Notre équipe te recontacte dans les{" "}
              <span className="text-violet-glow font-semibold">48 heures</span> pour
              discuter de ton projet.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-subtil border border-violet-principal/40 text-violet-glow hover:bg-violet-principal/20 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l&apos;accueil
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-subtil border border-violet-principal/20 text-violet-glow text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Réponse sous 48h
              </div>
              <h1 className="font-sora text-4xl md:text-5xl font-bold leading-tight mb-6">
                Donnez vie à{" "}
                <span className="bg-gradient-to-r from-violet-principal to-violet-glow bg-clip-text text-transparent">
                  votre projet.
                </span>
              </h1>
              <p className="text-gris-texte text-lg leading-relaxed mb-10">
                Remplissez ce formulaire et notre équipe vous recontacte sous 48h pour
                un premier échange. 100% gratuit, sans engagement.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-subtil border border-violet-principal/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-violet-glow" />
                  </div>
                  <div>
                    <div className="text-xs text-gris-texte">Email</div>
                    <div className="text-blanc text-sm">contact@klaivia.ch</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-subtil border border-violet-principal/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-violet-glow" />
                  </div>
                  <div>
                    <div className="text-xs text-gris-texte">Garantie</div>
                    <div className="text-blanc text-sm">Réponse rapide & 100% confidentiel</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 glass-card p-6 md:p-10 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  icon={<User className="w-4 h-4" />}
                  label="Nom complet"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                />
                <Field
                  icon={<Mail className="w-4 h-4" />}
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@exemple.com"
                />
              </div>

              <SelectField
                label="Service qui vous intéresse"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                options={services}
              />

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-blanc mb-2">
                  <MessageSquare className="w-4 h-4 text-violet-glow" />
                  Décrivez votre projet
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Décrivez brièvement votre projet ou vos objectifs.."
                  className="w-full px-4 py-3 rounded-xl bg-noir-surface border border-gris-border text-blanc placeholder:text-gris-texte/50 focus:border-violet-principal focus:outline-none focus:ring-2 focus:ring-violet-principal/20 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-principal to-violet-glow text-white font-sora font-semibold shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Envoi en cours..." : "Recevoir ma stratégie IA gratuite →"}
              </motion.button>

              {errorMsg && (
                <p className="text-sm text-red-400 text-center">{errorMsg}</p>
              )}

              <p className="text-xs text-gris-texte text-center flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-violet-glow" />
                Vos informations restent 100% confidentielles.
              </p>
            </motion.form>
          </div>
        )}
      </div>
    </main>
  );
}

function Field({
  icon,
  label,
  ...props
}: {
  icon: React.ReactNode;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-blanc mb-2">
        <span className="text-violet-glow">{icon}</span>
        {label}
        {props.required && <span className="text-violet-glow">*</span>}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-noir-surface border border-gris-border text-blanc placeholder:text-gris-texte/50 focus:border-violet-principal focus:outline-none focus:ring-2 focus:ring-violet-principal/20 transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  ...props
}: {
  label: string;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-blanc mb-2">
        {label}
        {props.required && <span className="text-violet-glow">*</span>}
      </label>
      <select
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-noir-surface border border-gris-border text-blanc focus:border-violet-principal focus:outline-none focus:ring-2 focus:ring-violet-principal/20 transition-all cursor-pointer"
      >
        <option value="">Sélectionnez...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
