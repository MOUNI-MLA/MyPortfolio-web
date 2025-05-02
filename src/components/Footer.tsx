
import React from "react";
import { Github, Linkedin, AtSign } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-card">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#home" className="text-lg font-bold text-primary">
              Mounika<span className="text-foreground">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Aspiring Full-Stack Web Developer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <nav className="flex gap-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Portfolio</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mounikalashmiandhavarapu@gmail.com"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <AtSign className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Andhavarapu Mounika Lakshmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
