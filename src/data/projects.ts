export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: {
    name: string;
    icon: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  context: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Moderne",
    description: "Une plateforme e-commerce complète avec panier et paiement sécurisé",
    fullDescription: "Application e-commerce full-stack avec gestion des produits, authentification utilisateur, panier d'achat et intégration de paiement. Interface moderne et responsive.",
    image: "/placeholder.svg",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    context: "Projet personnel réalisé pour approfondir mes compétences en développement full-stack",
    features: [
      "Authentification JWT sécurisée",
      "Gestion du panier en temps réel",
      "Intégration Stripe pour les paiements",
      "Interface admin pour gérer les produits",
      "Design responsive et animations fluides",
    ],
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser des données en temps réel",
    fullDescription: "Tableau de bord moderne avec graphiques interactifs, filtres dynamiques et mise à jour en temps réel des données. Optimisé pour les performances.",
    image: "/placeholder.svg",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Chart.js", icon: "📊" },
      { name: "Tailwind", icon: "🎨" },
      { name: "API REST", icon: "🔌" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    context: "Projet réalisé en stage pour une entreprise de data analytics",
    features: [
      "Graphiques interactifs et personnalisables",
      "Filtres dynamiques et recherche avancée",
      "Export des données en PDF/CSV",
      "Dark mode et thèmes personnalisables",
      "Optimisation des performances avec React Query",
    ],
  },
  {
    id: "3",
    title: "Portfolio Créatif",
    description: "Site portfolio moderne avec animations 3D et effets visuels",
    fullDescription: "Portfolio personnel avec animations Three.js, transitions fluides et design moderne. Optimisé pour tous les appareils.",
    image: "/placeholder.svg",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Three.js", icon: "🎮" },
      { name: "GSAP", icon: "✨" },
      { name: "Vite", icon: "⚡" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    context: "Projet personnel pour mettre en valeur mes compétences créatives",
    features: [
      "Animations 3D avec Three.js",
      "Transitions de page fluides avec GSAP",
      "Design responsive et moderne",
      "Optimisation des performances",
      "SEO optimisé",
    ],
  },
];
