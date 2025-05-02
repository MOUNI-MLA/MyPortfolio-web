
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Database, Layout } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating modern, responsive websites with clean aesthetics and intuitive user experiences.",
      icon: <Palette className="w-10 h-10 text-primary" />,
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building interactive user interfaces with modern frameworks and libraries to create seamless user experiences.",
      icon: <Layout className="w-10 h-10 text-primary" />,
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Developing robust server-side applications, APIs, and database structures for reliable web applications.",
      icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      id: 4,
      title: "Full-Stack Solutions",
      description: "End-to-end development services from concept to deployment, ensuring all components work together seamlessly.",
      icon: <Code className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading mb-4">My Services</h2>
          <p className="subheading max-w-2xl mx-auto">
            Professional solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="glass-card border-primary/10 transition-all duration-300 hover:border-primary/30"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a 
                  href="#contact" 
                  className="group flex items-center text-sm text-primary hover:text-primary/90 transition-colors"
                >
                  Request Service
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
