import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "matluiggi@sfr.fr",
      href: "mailto:matluiggi@sfr.fr",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/matthieu-luiggi",
      href: "https://www.linkedin.com/in/matthieu-luiggi",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MatthieuLUIGGI",
      href: "https://github.com/MatthieuLUIGGI",
      color: "hover:text-foreground",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-4 animate-slide-up">
          <h1 className="text-5xl font-bold">
            <span className="text-gradient">Contactez-moi</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
        </div>

        {/* Email principal */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-muted-foreground mb-4">Vous pouvez me contacter à :</p>
          <a
            href="mailto:matluiggi@sfr.fr"
            className="text-4xl font-bold text-gradient hover:scale-105 transition-transform inline-block"
          >
            matluiggi@sfr.fr
          </a>
        </div>

        {/* Contact cards */}
        <div className="grid gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass p-6 rounded-xl hover-glow-gold transition-all duration-300 hover:scale-105 group ${contact.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-gold to-blue flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg mb-1">{contact.label}</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
