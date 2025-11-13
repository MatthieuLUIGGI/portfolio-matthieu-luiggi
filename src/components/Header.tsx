import { Link, useLocation } from "react-router-dom";
import { Home, GraduationCap, Briefcase, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/parcours", label: "Parcours", icon: GraduationCap },
    { path: "/projets", label: "Projets", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass animate-slide-down">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            Matthieu LUIGGI
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 font-medium transition-all duration-300 relative group",
                      isActive 
                        ? "text-primary" 
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    <span 
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-blue transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 font-medium transition-all duration-300 p-3 rounded-lg",
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
