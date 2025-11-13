import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getProjectIndex = (offset: number) => {
    const index = currentIndex + offset;
    if (index < 0) return projects.length + index;
    if (index >= projects.length) return index - projects.length;
    return index;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Carousel */}
      <div className="relative h-[350px] sm:h-[450px] md:h-[500px] mb-8 sm:mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Previous project - Hidden on mobile */}
          <Link
            to={`/projets/${projects[getProjectIndex(-1)].id}`}
            className="hidden lg:block absolute left-0 w-48 xl:w-64 h-64 xl:h-80 glass rounded-xl overflow-hidden transform -translate-x-20 rotate-y-12 opacity-50 hover:opacity-75 transition-all duration-500 hover:scale-105"
            style={{ transform: "translateX(-5rem) rotateY(12deg)" }}
          >
            <img
              src={projects[getProjectIndex(-1)].image}
              alt={projects[getProjectIndex(-1)].title}
              className="w-full h-full object-cover"
            />
          </Link>

          {/* Current project */}
          <Link
            to={`/projets/${projects[currentIndex].id}`}
            className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 glass rounded-xl overflow-hidden shadow-elegant hover:scale-105 hover-glow-gold transition-all duration-500 max-w-[90vw]"
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
              <div className="p-4 sm:p-6 w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-2">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-foreground/80 text-sm sm:text-base line-clamp-2">
                  {projects[currentIndex].description}
                </p>
              </div>
            </div>
          </Link>

          {/* Next project - Hidden on mobile */}
          <Link
            to={`/projets/${projects[getProjectIndex(1)].id}`}
            className="hidden lg:block absolute right-0 w-48 xl:w-64 h-64 xl:h-80 glass rounded-xl overflow-hidden transform translate-x-20 -rotate-y-12 opacity-50 hover:opacity-75 transition-all duration-500 hover:scale-105"
            style={{ transform: "translateX(5rem) rotateY(-12deg)" }}
          >
            <img
              src={projects[getProjectIndex(1)].image}
              alt={projects[getProjectIndex(1)].title}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 sm:gap-8">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="glass w-10 h-10 sm:w-12 sm:h-12 rounded-full hover-glow-blue flex-shrink-0"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>

        <div className="text-center min-w-0 flex-1">
          <p className="text-lg sm:text-2xl font-semibold text-gradient truncate px-2">
            {projects[currentIndex].title}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            {currentIndex + 1} / {projects.length}
          </p>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="glass w-10 h-10 sm:w-12 sm:h-12 rounded-full hover-glow-blue flex-shrink-0"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
