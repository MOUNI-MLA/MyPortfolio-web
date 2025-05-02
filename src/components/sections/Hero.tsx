import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-10">
      <div className="container px-4 md:px-8 flex flex-col items-center text-center">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-primary to-purple-400 mb-8 overflow-hidden flex items-center justify-center">
          {/* Profile image with circular mask */}
          <img src="https://i.postimg.cc/FRR7Cdsy/alm.jpg" alt="Mounika Lakshmi" className="w-full h-full object-cover" />
        </div>
        
        <h1 className="heading mb-4 animate-fade-in">
          <span className="block text-xl md:text-2xl font-normal mb-1 text-muted-foreground">
            Hello, I'm
          </span>
          <span className="text-gradient bg-clip-text bg-gradient-to-r from-primary to-violet-400 text-transparent">
            Andhavarapu Mounika Lakshmi
          </span>
        </h1>
        
        <p className="subheading max-w-2xl mb-10 animate-fade-in opacity-0" style={{
        animationDelay: "0.3s"
      }}>Aspiring Full-Stack Web Developer | Passionate about Learning trending skills and creating digital work</p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in opacity-0" style={{
        animationDelay: "0.5s"
      }}>
          <Button size="lg" className="group">
            <a href="#portfolio" className="flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;