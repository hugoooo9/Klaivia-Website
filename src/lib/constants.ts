export const SITE_CONFIG = {
  name: "Klaivia Agency",
  shortName: "Klaivia",
  slogan: "Votre business tourne. Même quand vous dormez.",
  tagline: "Sites web premium & services IA sur mesure. On conçoit, on déploie, vous encaissez. Réponse garantie sous 48h.",
  email: "contact@klaivia.com",
  calendlyUrl: "/contact",
  year: 2025,
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#methodologie" },
  { label: "Réalisations", href: "#confiance" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#cta-final" },
];

export const HERO_STATS: { value: number; prefix?: string; suffix: string; label: string }[] = [
  { value: 100, suffix: "h+", label: "Gagnées / mois" },
  { value: 98, suffix: "%", label: "Satisfaction client" },
  { value: 250, suffix: "h+", label: "Automatisées / mois" },
  { value: 30, prefix: "+", suffix: "%", label: "Productivité moyenne" },
];

export const CIBLES = [
  {
    icon: "building",
    title: "PME & Commerces",
    description: "Vous voulez un site pro qui reflète la qualité de votre travail, pas un template WordPress générique.",
  },
  {
    icon: "lightbulb",
    title: "Indépendants & Consultants",
    description: "Vous voulez automatiser l'administratif et vous recentrer sur votre expertise.",
  },
  {
    icon: "rocket",
    title: "Startups & Fondateurs",
    description: "Vous voulez un assistant IA qui répond à vos clients 24h/24 pendant que vous grandissez.",
  },
];

export const PROBLEMES = [
  {
    sans: "Votre site ressemble à des milliers d'autres",
    avec: "Un site unique qui marque les esprits",
  },
  {
    sans: "Vous répondez manuellement à chaque message",
    avec: "Un agent IA répond 24h/24, même à 3h du matin",
  },
  {
    sans: "Vous perdez des leads parce que vous êtes trop lent",
    avec: "Vos prospects sont contactés en moins de 60 secondes",
  },
  {
    sans: "Vous gérez tout vous-même, vous êtes épuisé",
    avec: "Vos process sont automatisés, vous vous concentrez sur votre zone de génie",
  },
  {
    sans: "Votre concurrent avec un meilleur site vous prend vos clients",
    avec: "Votre image premium attire les clients haut de gamme",
  },
];

export const SERVICES = [
  {
    icon: "monitor",
    title: "Sites Web",
    subtitle: "Un site qui attire et transforme vos visiteurs en clients.",
    points: [
      "Une image pro qui inspire confiance dès la 1ère seconde",
      "Plus de visiteurs transformés en clients",
      "Trouvé facilement sur Google par vos prospects",
      "Parfait sur mobile, tablette et desktop",
    ],
    price: "À partir de 1'500 CHF",
    cta: "Je veux mon site",
  },
  {
    icon: "zap",
    title: "Automatisations IA",
    subtitle: "Vos tâches répétitives disparaissent. Votre temps revient.",
    points: [
      "Automatisez les tâches répétitives qui vous épuisent",
      "Vos outils communiquent enfin entre eux",
      "Zéro oubli, zéro erreur humaine",
      "Jusqu'à 20h récupérées chaque semaine",
    ],
    price: "À partir de 1'000 CHF",
    cta: "Je veux automatiser",
  },
  {
    icon: "bot",
    title: "Agents IA Sur Mesure",
    subtitle: "Un employé IA qui travaille pour vous, 24h/24, 7j/7.",
    points: [
      "Vos prospects pris en charge, même à 3h du matin",
      "Aucun lead ne tombe plus dans l'oubli",
      "Une réponse instantanée, 24h/24, 7j/7",
      "Plus de ventes sans embaucher",
    ],
    price: "À partir de 2'500 CHF",
    cta: "Je veux mon agent IA",
  },
];

export const BENEFICES = [
  {
    icon: "💰",
    stat: "Boost",
    title: "de chiffre d'affaires",
    description: "Un site qui convertit + des automatisations = plus de clients sans plus d'efforts.",
  },
  {
    icon: "⏱️",
    stat: "20h",
    title: "économisées / semaine",
    description: "Les tâches répétitives sont gérées par l'IA. Vous vous concentrez sur ce qui compte.",
  },
  {
    icon: "⚡",
    stat: "< 5s",
    title: "de réponse client",
    description: "Votre agent IA qualifie et répond instantanément. Aucun lead ne tombe dans l'oubli.",
  },
  {
    icon: "🎨",
    stat: "Image",
    title: "premium immédiate",
    description: "Vos prospects vous prennent au sérieux avant même de vous parler.",
  },
  {
    icon: "📈",
    stat: "Croissance",
    title: "sans embauche",
    description: "Grandissez sans multiplier les salariés. L'IA fait le travail de 3 personnes.",
  },
  {
    icon: "🌙",
    stat: "24/7",
    title: "votre business tourne",
    description: "Pendant que vous dormez, votre site vend, votre agent répond, vos workflows tournent.",
  },
];

export const METHODOLOGIE = [
  {
    step: 1,
    title: "Prise de Contact (Gratuite)",
    description: "Vous nous laissez vos infos, on vous recontacte sous 48h pour analyser vos objectifs et vos blocages. Zéro engagement.",
  },
  {
    step: 2,
    title: "Stratégie & Proposition",
    description: "On vous livre une stratégie claire avec le plan d'action, le budget et le calendrier. Vous validez, on lance.",
  },
  {
    step: 3,
    title: "Conception & Développement",
    description: "Design, maquettes, développement et intégration : notre équipe construit votre solution sur mesure, à votre image et selon vos objectifs.",
  },
  {
    step: 4,
    title: "Lancement & Optimisation",
    description: "Mise en ligne, tests finaux et optimisations continues. Nous restons à vos côtés pour assurer la performance dans la durée.",
  },
];

export const GARANTIES = [
  "Aucun paiement avant validation de votre projet",
  "Satisfait ou refait — modifications illimitées jusqu'à validation",
  "Support réactif 7j/7, avant, pendant et après la livraison",
];

export const PORTFOLIO = [
  {
    title: "Sites vitrines & réservation",
    description: "Un site pensé pour convertir vos visiteurs en rendez-vous, avec réservation en ligne intégrée pour remplir votre agenda automatiquement.",
    gradient: "from-violet-principal to-purple-600",
  },
  {
    title: "Agents IA conversationnels",
    description: "Un assistant IA connecté à WhatsApp ou votre site qui qualifie vos prospects et prend vos rendez-vous, 24h/24, sans intervention.",
    gradient: "from-purple-600 to-violet-glow",
  },
  {
    title: "Automatisations email",
    description: "Des séquences d'emails intelligentes qui relancent, convertissent et fidélisent vos prospects pendant que vous vous concentrez sur votre métier.",
    gradient: "from-violet-glow to-violet-principal",
  },
];

export const TECH_STACK = [
  "Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel",
  "Make", "n8n", "OpenAI API", "Claude API", "WhatsApp Business API",
  "Stripe", "CRM",
];

export const ENGAGEMENTS = [
  "0 CHF à payer avant de voir la maquette",
  "10 jours max de livraison",
  "100% des projets livrés dans les délais",
  "Interlocuteur dédié du brief à la livraison",
];

export const FAQ_ITEMS = [
  {
    icon: "wallet",
    question: "Combien ça coûte ?",
    answer: "Chaque projet est unique. Nous établissons un devis clair et détaillé dès le départ, adapté à vos besoins, sans frais cachés ni surprise.",
  },
  {
    icon: "award",
    question: "En quoi Klaivia est différent d'une autre agence ?",
    answer: "Deux choses nous distinguent. D'abord, nous réunissons sous un même toit l'expertise web et l'IA — là où la plupart des agences ne maîtrisent que l'un ou l'autre. Ensuite, chaque projet est conçu sur mesure à partir de vos objectifs.",
  },
  {
    icon: "sparkles",
    question: "Je n'y connais rien en IA, est-ce un problème ?",
    answer: "Absolument pas. Nous prenons en charge l'ensemble du projet et vous accompagnons avec des explications claires, dans un langage simple et accessible.",
  },
  {
    icon: "refresh",
    question: "Et si le résultat ne me convient pas ?",
    answer: "Vous validez à chaque étape clé. Si un élément ne vous convient pas, nous le retravaillons jusqu'à votre satisfaction.",
  },
  {
    icon: "wrench",
    question: "Proposez-vous de la maintenance ?",
    answer: "Oui. Nous proposons un suivi mensuel dédié aux mises à jour, optimisations et support technique pour garder votre solution performante dans la durée.",
  },
  {
    icon: "building",
    question: "Travaillez-vous avec tous les secteurs d'activité ?",
    answer: "Oui. Notre approche sur mesure s'adapte à chaque métier, que vous soyez commerçant, consultant, cabinet ou startup. Nous commençons toujours par comprendre votre secteur avant de concevoir quoi que ce soit.",
  },
];
