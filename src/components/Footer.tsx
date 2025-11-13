import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass border-t border-border/50 py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/matthieu-luiggi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground/80 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <div className="p-2 sm:p-3 rounded-xl glass group-hover:bg-[#0077b5]/10 transition-all duration-300">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/MatthieuLUIGGI"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <div className="p-2 sm:p-3 rounded-xl glass group-hover:bg-foreground/10 transition-all duration-300">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">GitHub</span>
            </a>
            
            <a
              href="mailto:matluiggi@sfr.fr"
              className="group flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors"
              aria-label="Email"
            >
              <div className="p-2 sm:p-3 rounded-xl glass group-hover:bg-gold/10 transition-all duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">Email</span>
            </a>
          </div>
          
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Matthieu LUIGGI. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
