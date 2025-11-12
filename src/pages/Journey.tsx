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
      year: "2024",
      title: "Formation Développement Web",
      institution: "École de Développement",
      description: "Spécialisation en React, TypeScript et développement full-stack moderne.",
      type: "education",
    },
    {
      year: "2023",
      title: "Stage Développeur Frontend",
      institution: "Tech Company",
      description: "Développement d'interfaces utilisateur réactives avec React et Tailwind CSS.",
      type: "work",
    },
    {
      year: "2022",
      title: "DUT Informatique",
      institution: "IUT de Technologie",
      description: "Formation en programmation, bases de données et architecture logicielle.",
      type: "education",
    },
    {
      year: "2021",
      title: "Baccalauréat Scientifique",
      institution: "Lycée",
      description: "Spécialité Mathématiques et Sciences de l'Ingénieur.",
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
