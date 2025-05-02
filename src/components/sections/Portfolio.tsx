
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Grandhalayyam",
      description: "A comprehensive library management system with features for book tracking, member management, and loan services.",
      image: "/placeholder.svg",
      tags: ["Python", "Django", "SQLite", "Bootstrap"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Student and Faculty Management System",
      description: "A platform to manage student records, course enrollments, faculty assignments, and academic performance tracking.",
      image: "/placeholder.svg",
      tags: ["Java", "Spring Boot", "MySQL", "React"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Automate Invigilator System",
      description: "An automated system for exam supervision management, scheduling, and resource allocation for educational institutions.",
      image: "/placeholder.svg",
      tags: ["JavaScript", "Node.js", "MongoDB", "Express"],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading mb-4">My Portfolio</h2>
          <p className="subheading max-w-2xl mx-auto">
            Showcasing my notable projects and work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="h-48 bg-secondary/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary/20">{project.title}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github size={16} />
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
