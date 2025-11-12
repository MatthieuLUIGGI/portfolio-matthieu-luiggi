import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: "education" | "work";
}

const Journey = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2025",
      title: "Stage au Rectorat de Dijon",
      institution: "Rectorat de Dijon",
      description: "Développement d'une application de cartographie des systèmes d'information pour le personnel académique durant 7 semaines.",
      type: "work",
    },
    {
      year: "2024",
      title: "Stage au Rectorat de Dijon",
      institution: "Rectorat de Dijon",
      description: "Développement d'un site web pour la création de cartes de visite pour le personnel académique durant 5 semaines.",
      type: "work",
    },
    {
      year: "2023-2025",
      title: "BTS SIO option SLAM",
      institution: "BTS Services Informatiques aux Organisations",
      description: "Formation en Solutions Logicielles et Applications Métiers. Actuellement en 2ème année.",
      type: "education",
    },
    {
      year: "2020-2023",
      title: "Baccalauréat Général",
      institution: "Lycée",
      description: "Spécialités Mathématiques, Physique et NSI (Numérique et Sciences Informatiques).",
      type: "education",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 animate-slide-up">
          <span className="text-gradient">Mon Parcours</span>
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-blue to-gold hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.type === "education" ? GraduationCap : Briefcase;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-slide-in-${isLeft ? "left" : "right"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="glass p-6 rounded-xl hover-glow-gold transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold to-blue flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-2xl font-bold text-gradient">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary mb-2">{item.institution}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gold to-blue shadow-glow-gold" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
