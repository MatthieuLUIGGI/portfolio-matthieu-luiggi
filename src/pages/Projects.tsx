import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen py-20 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 animate-slide-up">
          <span className="text-gradient">Mes Projets</span>
        </h1>
        <p className="text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 animate-fade-in px-4">
          Découvrez une sélection de mes réalisations
        </p>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
