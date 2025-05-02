
import React from "react";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "C", level: 75 },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-background/80">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading mb-4">About Me</h2>
          <p className="subheading max-w-2xl mx-auto">
            Get to know my background and skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Background</h3>
            <p className="text-muted-foreground">
              I am Andhavarapu Mounika Lakshmi, an aspiring full-stack web developer with a passion for building user-centered applications. My journey in web development started with a curiosity about how digital experiences are created, which led me to pursue a career in this field.
            </p>
            <p className="text-muted-foreground">
              I'm driven by the desire to create scalable, intuitive applications that solve real-world problems. My goal is to continuously expand my skills in both frontend and backend technologies, and to contribute to open-source projects that make a positive impact.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, I enjoy exploring new technologies, collaborating with other developers, and finding ways to optimize user experiences through thoughtful design and efficient functionality.
            </p>
          </div>
          
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-secondary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
