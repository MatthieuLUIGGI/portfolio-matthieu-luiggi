import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0077B5]" },
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-foreground" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email", color: "hover:text-primary" },
  ];

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
                className="relative w-64 h-64 rounded-full object-cover border-4 border-glass-border shadow-elegant group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in-right">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Votre Nom</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Étudiant en développement informatique
              </p>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl">
              Passionné par le développement web et les technologies modernes, 
              je crée des expériences digitales élégantes et performantes. 
              Toujours en quête d'apprentissage et d'innovation.
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

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110 hover-glow-gold",
                      social.color
                    )}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function from utils
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default Index;
