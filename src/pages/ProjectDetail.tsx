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
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Button
          asChild
          variant="ghost"
          className="mb-8 hover-glow-blue"
        >
          <Link to="/projets">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux projets
          </Link>
        </Button>

        {/* Project header */}
        <div className="space-y-6 mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Project image */}
        <div className="mb-12 animate-fade-in">
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
                  className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 group-hover:bg-primary">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Voir le site</span>
                </div>
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[500px] object-cover"
              />
            )}
          </div>
        </div>

        {/* Project details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Description */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">
                À propos du projet
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contexte</h3>
              <p className="text-foreground/80">{project.context}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Fonctionnalités principales</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies & Links */}
          <div className="space-y-6 animate-slide-in-right">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">
                Technologies utilisées
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="glass p-4 rounded-xl hover-glow-gold transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <p className="font-medium">{tech.name}</p>
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
                    Voir le projet en ligne
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full glass hover-glow-blue"
                  size="lg"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Voir sur GitHub
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
