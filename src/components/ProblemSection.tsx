"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";

/**
 * Section "Le vrai problème que personne ne vous dit" — Klaivia
 * Remplace l'ancien composant Probleme.tsx
 */

// ---- ICÔNES SVG ----------------------------------------------------------

const IconX = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconCheck = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconStar = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3 6 6 .5-4.5 4 1.5 6.5L12 15.5 5.5 19l1.5-6.5L2.5 8.5 8.5 8z" />
  </svg>
);

const IconClock = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconBolt = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconSun = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const IconDiamond = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9z" />
    <line x1="11" y1="3" x2="8" y2="9" />
    <line x1="13" y1="3" x2="16" y2="9" />
    <line x1="2" y1="9" x2="22" y2="9" />
  </svg>
);

// ---- DONNÉES -------------------------------------------------------------

const painPoints = [
  { title: "Votre site se noie dans la masse", desc: "Identique à 10 000 autres sites. Zéro différenciation." },
  { title: "Vous répondez à la main, 7j/7", desc: "Chaque message = votre temps qui part en fumée." },
  { title: "Vos leads s'évaporent en attendant", desc: "78% achètent chez celui qui répond en premier." },
  { title: "Vous faites tout, vous vous épuisez", desc: "Admin, support, relances… et votre vrai métier ?" },
  { title: "Vos concurrents signent vos clients", desc: "Leur image inspire confiance. La vôtre doit se démarquer." },
];

const gainPoints = [
  { Icon: IconStar, title: "Un site qui reflète votre expertise", desc: "Design sur-mesure. Vous marquez les esprits dès la 1ère seconde." },
  { Icon: IconClock, title: "Un agent IA qui bosse pendant que vous dormez", desc: "Réponse 24/7, même à 3h du matin. Jamais de jour off." },
  { Icon: IconBolt, title: "Vos prospects contactés en moins de 5s", desc: "Taux de conversion x3 quand on est premier à répondre." },
  { Icon: IconSun, title: "Vos tâches tournent toutes seules", desc: "Vous reprenez votre temps pour ce que vous faites le mieux." },
  { Icon: IconDiamond, title: "Image premium, clients haut de gamme", desc: "Vous attirez naturellement des clients qui paient le juste prix." },
];

// ---- HOOK : compteur animé déclenché au scroll ---------------------------

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

// ---- COMPOSANT PRINCIPAL -------------------------------------------------

export default function ProblemSection() {
  const stat1 = useCountUp(20);
  const stat2 = useCountUp(3);
  const stat3 = useCountUp(5);

  return (
    <section id="probleme" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-subtil border border-violet-principal/30 text-[11px] font-medium text-violet-glow tracking-[1.5px] uppercase mb-5">
            La réalité du marché
          </div>
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-blanc leading-tight mb-4">
            Le vrai problème que personne ne vous dit
          </h2>
          <p className="text-gris-texte text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Pendant que vous lisez ces lignes, vos concurrents avancent. Chaque jour sans Klaivia, c&apos;est du chiffre d&apos;affaires qui s&apos;évapore.
          </p>
        </div>

        {/* Grille de comparaison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Colonne SANS Klaivia */}
          <div className="rounded-2xl p-7 bg-rose-500/[0.02] border border-rose-500/15 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-rose-500/15">
              <div className="w-9 h-9 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                <IconX className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <div className="font-sora text-[11px] font-semibold tracking-[1.5px] uppercase text-rose-400">Sans IA</div>
                <div className="text-[13px] text-gris-texte mt-0.5">Vous subissez</div>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-xl bg-white/[0.015] border border-rose-500/10 flex items-start gap-3.5 transition-all duration-300 hover:-translate-x-1 hover:border-rose-500/30 hover:bg-rose-500/[0.04]"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center text-base font-medium">
                    ×
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-blanc mb-1 leading-snug">{point.title}</div>
                    <div className="text-[12.5px] text-gris-texte leading-relaxed">{point.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-rose-500/[0.06] text-center">
              <div className="text-[10px] text-gris-texte tracking-[1.2px] uppercase mb-1.5">Clients perdus estimés</div>
              <div className="font-sora text-2xl font-bold text-rose-400">
                −8 <span className="text-[13px] text-gris-texte font-normal">/ mois</span>
              </div>
            </div>
          </div>

          {/* Colonne AVEC Klaivia */}
          <div className="rounded-2xl p-7 relative overflow-hidden border border-violet-principal/40 bg-gradient-to-b from-violet-principal/10 to-violet-principal/[0.02] shadow-glow-lg">
            <div className="absolute top-4 right-4 px-3 py-1 bg-violet-principal/20 border border-violet-principal/30 rounded-full text-[10px] font-semibold text-violet-glow tracking-[1.2px]">
              RECOMMANDÉ
            </div>

            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-violet-principal/20">
              <div className="w-9 h-9 rounded-full bg-violet-principal/20 flex items-center justify-center flex-shrink-0">
                <IconCheck className="w-4 h-4 text-violet-glow" />
              </div>
              <div>
                <div className="font-sora text-[11px] font-semibold tracking-[1.5px] uppercase text-violet-glow">Avec IA</div>
                <div className="text-[13px] text-gris-texte mt-0.5">Vous dominez</div>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              {gainPoints.map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-xl bg-violet-principal/[0.06] border border-violet-principal/20 flex items-start gap-3.5 transition-all duration-300 hover:translate-x-1 hover:border-violet-principal/50 hover:bg-violet-principal/[0.12]"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-violet-principal/20 flex items-center justify-center">
                    <Icon className="w-[18px] h-[18px] text-violet-glow" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-blanc mb-1 leading-snug">{title}</div>
                    <div className="text-[12.5px] text-gris-texte leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-violet-principal/[0.15] text-center">
              <div className="text-[10px] text-gris-texte tracking-[1.2px] uppercase mb-1.5">Clients gagnés en moyenne</div>
              <div className="font-sora text-2xl font-bold text-violet-glow">
                +12 <span className="text-[13px] text-gris-texte font-normal">/ mois</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats animés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-10">
          <div
            ref={stat1.ref}
            className="glass-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-principal/40"
          >
            <div className="font-sora text-4xl font-bold text-violet-glow mb-1.5 tracking-tight">
              {stat1.value}h
            </div>
            <div className="text-[11px] text-gris-texte tracking-[1px] uppercase">
              récupérées / semaine
            </div>
          </div>

          <div
            ref={stat2.ref}
            className="glass-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-principal/40"
          >
            <div className="font-sora text-4xl font-bold text-violet-glow mb-1.5 tracking-tight">
              ×{stat2.value}
            </div>
            <div className="text-[11px] text-gris-texte tracking-[1px] uppercase">
              conversion de leads
            </div>
          </div>

          <div
            ref={stat3.ref}
            className="glass-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-principal/40"
          >
            <div className="font-sora text-4xl font-bold text-violet-glow mb-1.5 tracking-tight">
              &lt;{stat3.value}s
            </div>
            <div className="text-[11px] text-gris-texte tracking-[1px] uppercase">
              temps de réponse moyen
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button href="#cta-final" variant="primary">
            Arrêtez de perdre du temps et de l&apos;argent →
          </Button>
          <div className="mt-4 text-[12.5px] text-gris-texte">
            Réponse sous 48h
          </div>
        </div>
      </div>
    </section>
  );
}
