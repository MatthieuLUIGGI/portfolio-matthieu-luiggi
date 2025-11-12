import { Link, useLocation } from "react-router-dom";
import { Home, GraduationCap, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  
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
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            MonPortfolio
          </Link>
          
          <ul className="flex items-center gap-8">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
