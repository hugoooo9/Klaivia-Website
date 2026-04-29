"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, User, MessageSquare, Sparkles, Lock, Building2, Users } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  companySize: string;
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

const companySizes = ["1-10", "10-50", "50-100", "100-500", "Plus de 500"];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    companySize: "",
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
    <section id="cta-final" className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
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
            <h2 className="font-sora text-3xl md:text-4xl font-bold mb-4">
              Merci {form.name.split(" ")[0]} !
            </h2>
            <p className="text-gris-texte text-lg leading-relaxed">
              On a bien reçu ta demande. Notre équipe te recontacte dans les{" "}
              <span className="text-violet-glow font-semibold">48 heures</span> pour
              discuter de ton projet.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-subtil border border-violet-principal/20 text-violet-glow text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Réponse sous 48h
              </div>
              <h2 className="font-sora text-4xl md:text-5xl font-bold leading-tight mb-6">
                Donnez vie à{" "}
                <span className="bg-gradient-to-r from-violet-principal to-violet-glow bg-clip-text text-transparent">
                  votre projet.
                </span>
              </h2>
              <p className="text-gris-texte text-lg leading-relaxed mb-10">
                Remplissez ce formulaire et notre équipe vous recontacte sous 48h pour
                un premier échange. 100% gratuit, sans engagement.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-violet-subtil border border-violet-principal/30 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-violet-glow" />
                  </div>
                  <div>
                    <div className="text-sm text-gris-texte mb-0.5">Email</div>
                    <div className="text-blanc text-base font-medium">contact@klaivia.ch</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-violet-subtil border border-violet-principal/30 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-violet-glow" />
                  </div>
                  <div>
                    <div className="text-sm text-gris-texte mb-0.5">Garantie</div>
                    <div className="text-blanc text-base font-medium">Réponse rapide & 100% confidentiel</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
                <Field
                  icon={<Building2 className="w-4 h-4" />}
                  label="Nom de l'entreprise"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="Acme SA"
                />
                <SelectField
                  icon={<Users className="w-4 h-4" />}
                  label="Taille de l'entreprise"
                  name="companySize"
                  value={form.companySize}
                  onChange={handleChange}
                  required
                  options={companySizes}
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
                initial={{ "--x": "100%" } as Record<string, string>}
                animate={{ "--x": "-100%" } as Record<string, string>}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                  type: "spring",
                  stiffness: 20,
                  damping: 15,
                  mass: 2,
                }}
                className="relative overflow-hidden w-full py-4 rounded-xl bg-gradient-to-r from-violet-principal to-violet-glow text-white font-sora font-semibold shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {loading ? "Envoi en cours..." : "Recevoir ma stratégie IA gratuite →"}
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{
                    background:
                      "linear-gradient(-75deg, transparent calc(var(--x) + 20%), rgba(255,255,255,0.35) calc(var(--x) + 25%), transparent calc(var(--x) + 100%))",
                  }}
                />
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
    </section>
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
  icon,
  ...props
}: {
  label: string;
  options: string[];
  icon?: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-blanc mb-2">
        {icon && <span className="text-violet-glow">{icon}</span>}
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
