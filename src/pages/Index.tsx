import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-blue rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <img
                src={profileImage}
                alt="Photo de profil"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-glass-border shadow-elegant group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-4 sm:space-y-6 animate-slide-in-right">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Matthieu LUIGGI</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Étudiant en développement
              </p>
            </div>

            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              Bonjour, je m'appelle Matthieu LUIGGI, je suis actuellement en Bachelor Développement Full Stack à l'école CODA à Dijon, je poursuis mon parcours après l'obtention de mon BTS SIO option SLAM. J'ai 20 ans et je fais du développement depuis le lycée. Je pratique le tennis depuis de nombreuses années et j'adore voyager. Durant ma scolarité, j'ai passé un bac général avec spécialités Maths, Physique et NSI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-gold to-blue hover:opacity-90 transition-opacity shadow-lg hover-glow-gold"
              >
                <Link to="/projets">Voir mes projets</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="glass border-2 hover:bg-muted/20 hover-glow-blue"
              >
                <Link to="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
