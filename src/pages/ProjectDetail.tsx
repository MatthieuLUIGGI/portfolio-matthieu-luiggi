import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Button asChild>
            <Link to="/projets">Retour aux projets</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Button
          asChild
          variant="ghost"
          className="mb-6 sm:mb-8 hover-glow-blue"
        >
          <Link to="/projets">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Retour aux projets</span>
            <span className="sm:hidden">Retour</span>
          </Link>
        </Button>

        {/* Project header */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Project image */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <div className="glass rounded-2xl overflow-hidden shadow-elegant relative">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer group relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-lg transition-all duration-300 group-hover:bg-primary">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">Voir le site</span>
                </div>
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
              />
            )}
          </div>
        </div>

        {/* Project details */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Description */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-left">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gradient">
                À propos du projet
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Contexte</h3>
              <p className="text-foreground/80 text-sm sm:text-base">{project.context}</p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Fonctionnalités principales</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span className="text-foreground/80 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies & Links */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-right">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gradient">
                Technologies utilisées
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="glass p-3 sm:p-4 rounded-xl hover-glow-gold transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-3xl sm:text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <p className="font-medium text-sm sm:text-base">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              {project.liveUrl && (
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-gold to-blue hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Voir le projet en ligne</span>
                    <span className="sm:hidden">Voir en ligne</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
