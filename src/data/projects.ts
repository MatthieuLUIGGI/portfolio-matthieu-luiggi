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
    title: "Générateur de Mot de Passe",
    description: "Application web pour générer des mots de passe sécurisés et personnalisables",
    fullDescription: "Générateur de mots de passe robuste avec interface intuitive permettant de créer des mots de passe sécurisés selon différents critères. L'utilisateur peut personnaliser la longueur et les types de caractères inclus.",
    image: new URL("@/assets/password-generator.png", import.meta.url).href,
    technologies: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
    ],
    githubUrl: "https://github.com/MatthieuLUIGGI",
    context: "Projet personnel réalisé pour développer mes compétences en JavaScript",
    features: [
      "Génération aléatoire de mots de passe",
      "Personnalisation de la longueur (1-50 caractères)",
      "Options multiples : minuscules, majuscules, chiffres, caractères spéciaux",
      "Copie en un clic du mot de passe généré",
      "Interface claire et responsive",
    ],
  },
  {
    id: "2",
    title: "Cartes de Visite",
    description: "Application de génération de cartes de visite pour le personnel académique",
    fullDescription: "Plateforme web développée durant mon stage de première année au Rectorat de Dijon. Elle permet de créer et personnaliser des cartes de visite professionnelles pour le personnel académique avec une mise en page automatisée.",
    image: new URL("@/assets/business-cards.png", import.meta.url).href,
    technologies: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "PHP", icon: "🐘" },
      { name: "PostgreSQL", icon: "🗄️" },
      { name: "Symfony", icon: "🎼" },
    ],
    githubUrl: "https://github.com/MatthieuLUIGGI",
    context: "Projet réalisé durant mon stage de 5 semaines au Rectorat de Dijon en 2024",
    features: [
      "Génération automatique de cartes de visite",
      "Personnalisation des informations (nom, poste, coordonnées)",
      "Intégration des logos et identité visuelle académique",
      "Gestion base de données avec PostgreSQL",
      "Export et impression optimisés",
    ],
  },
  {
    id: "3",
    title: "DokuCenter - Cartographie SI",
    description: "Application de cartographie des systèmes d'information pour le Rectorat",
    fullDescription: "Application web complète développée durant mon stage de deuxième année permettant de cartographier et gérer l'ensemble des systèmes d'information du Rectorat de Dijon. Interface intuitive avec gestion multi-niveaux et API REST.",
    image: new URL("@/assets/dokucenter.png", import.meta.url).href,
    technologies: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "PHP", icon: "🐘" },
      { name: "PostgreSQL", icon: "🗄️" },
      { name: "API REST", icon: "🔌" },
      { name: "Symfony", icon: "🎼" },
    ],
    githubUrl: "https://github.com/MatthieuLUIGGI",
    context: "Projet réalisé durant mon stage de 7 semaines au Rectorat de Dijon en 2025",
    features: [
      "Cartographie complète des systèmes d'information",
      "Gestion des utilisateurs et des responsabilités",
      "Interface de navigation intuitive avec tableau de bord",
      "Gestion des contacts, applications, logiciels, ports et hosts",
      "Architecture modulaire avec API REST",
      "Base de données PostgreSQL robuste",
    ],
  },
  {
    id: "4",
    title: "Site Web Copropriété Le Rameau",
    description: "Plateforme web moderne pour la gestion d'une copropriété",
    fullDescription: "Site web développé avec les technologies modernes (React, TypeScript) pour faciliter la communication et la gestion d'une copropriété. Interface élégante et responsive avec base de données PostgreSQL.",
    image: new URL("@/assets/le-rameau.png", import.meta.url).href,
    technologies: [
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
      { name: "CSS", icon: "🎨" },
      { name: "PostgreSQL", icon: "🗄️" },
    ],
    liveUrl: "https://lerameau.vercel.app",
    githubUrl: "https://github.com/MatthieuLUIGGI",
    context: "Projet personnel pour moderniser la gestion d'une copropriété",
    features: [
      "Interface moderne et responsive",
      "Gestion des informations de copropriété",
      "Communication entre copropriétaires",
      "Base de données sécurisée",
      "Design épuré et professionnel",
    ],
  },
];
