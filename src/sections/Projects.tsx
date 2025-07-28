import React, { useState, useEffect } from 'react';
import TypewriterText from '../components/TypewriterText';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress' | 'maintained';
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const scrollToBottom = () => {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    };
    scrollToBottom();
  }, [currentStep]);

  const projects: Project[] = [
    {
      id: 'live-sports',
      name: 'Live Sports Streaming App',
      description: 'Real-time sports streaming application with live scores and commentary.',
      technologies: ['Flutter', 'Firebase', 'WebRTC', 'Node.js'],
      status: 'completed'
    },
    {
      id: 'transport-management',
      name: 'Transport Management System',
      description: 'Comprehensive solution for managing transportation logistics and routing.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Google Maps API'],
      status: 'maintained'
    },
    {
      id: 'movie-streaming',
      name: 'Movie Streaming Platform',
      description: 'Netflix-like streaming service with content management and user profiles.',
      technologies: ['Next.js', 'MongoDB', 'AWS', 'Stripe'],
      status: 'completed'
    },
    {
      id: 'amazon-clone',
      name: 'E-commerce Platform',
      description: 'Full-featured e-commerce solution with payment processing and inventory management.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      status: 'in-progress'
    }
  ];

  if (selectedProject) {
    return (
      <div className="space-y-6">
        <div className="font-mono">
          <TypewriterText 
            text={`=== ${selectedProject.name.toUpperCase().replace(/\s+/g, '_')}.INFO ===`}
            speed={30}
            className="text-primary font-bold text-lg"
            onComplete={() => setCurrentStep(1)}
          />
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => setSelectedProject(null)}
            className="text-blue-400 hover:text-blue-300 font-mono"
          >
            ← Back to projects
          </button>

          {currentStep >= 1 && (
            <TypewriterText 
              text={`→ name: "${selectedProject.name}"`}
              speed={40}
              className="text-muted-foreground"
              onComplete={() => setCurrentStep(2)}
            />
          )}

          {currentStep >= 2 && (
            <TypewriterText 
              text={`→ status: "${selectedProject.status}"`}
              speed={40}
              className="text-muted-foreground"
              onComplete={() => setCurrentStep(3)}
            />
          )}

          {currentStep >= 3 && (
            <TypewriterText 
              text={`→ description: "${selectedProject.description}"`}
              speed={30}
              className="text-muted-foreground"
              onComplete={() => setCurrentStep(4)}
            />
          )}

          {currentStep >= 4 && (
            <div className="space-y-1">
              <TypewriterText 
                text="→ technologies: ["
                speed={40}
                className="text-muted-foreground"
                onComplete={() => setCurrentStep(5)}
              />
              {currentStep >= 5 && (
                <div className="pl-4">
                  {selectedProject.technologies.map((tech, index) => (
                    currentStep >= 5 + index && (
                      <TypewriterText 
                        key={tech}
                        text={`"${tech}"${index < selectedProject.technologies.length - 1 ? ',' : ''}`}
                        speed={40}
                        className="text-muted-foreground block"
                        onComplete={() => setCurrentStep(6 + index)}
                      />
                    )
                  ))}
                </div>
              )}
              {currentStep >= 5 + selectedProject.technologies.length && (
                <TypewriterText 
                  text="]"
                  speed={40}
                  className="text-muted-foreground"
                />
              )}
            </div>
          )}

          {currentStep >= 6 + selectedProject.technologies.length && selectedProject.github && (
            <TypewriterText 
              text={`→ github: "${selectedProject.github}"`}
              speed={40}
              className="text-muted-foreground"
            />
          )}

          {selectedProject.demo && (
            <TypewriterText 
              text={`→ demo: "${selectedProject.demo}"`}
              speed={40}
              className="text-muted-foreground"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="font-mono">
        <TypewriterText 
          text="=== PROJECTS.JSON ===" 
          speed={30}
          className="text-primary font-bold text-lg"
          onComplete={() => setCurrentStep(1)}
        />
      </div>

      <div className="space-y-4">
        {currentStep >= 1 && (
          <TypewriterText 
            text="["
            speed={40}
            className="text-muted-foreground"
            onComplete={() => setCurrentStep(2)}
          />
        )}

        <div className="pl-4 space-y-4">
          {projects.map((project, index) => (
            currentStep >= 2 + index && (
              <div key={project.id} className="space-y-2">
                <TypewriterText 
                  text={`{`}
                  speed={40}
                  className="text-muted-foreground"
                  onComplete={() => setCurrentStep(3 + index)}
                />
                {currentStep >= 3 + index && (
                  <div className="pl-4 space-y-1">
                    <TypewriterText 
                      text={`"name": "${project.name}",`}
                      speed={40}
                      className="text-muted-foreground cursor-pointer hover:text-blue-400"
                      onComplete={() => setCurrentStep(4 + index)}
                    />
                    {currentStep >= 4 + index && (
                      <TypewriterText 
                        text={`"status": "${project.status}",`}
                        speed={40}
                        className="text-muted-foreground"
                        onComplete={() => setCurrentStep(5 + index)}
                      />
                    )}
                    {currentStep >= 5 + index && (
                      <div 
                        className="cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <TypewriterText 
                          text={`"description": "Click to view details..."`}
                          speed={40}
                          className="text-blue-400 hover:text-blue-300"
                          onComplete={() => setCurrentStep(6 + index)}
                        />
                      </div>
                    )}
                  </div>
                )}
                {currentStep >= 6 + index && (
                  <TypewriterText 
                    text={`}${index < projects.length - 1 ? ',' : ''}`}
                    speed={40}
                    className="text-muted-foreground"
                    onComplete={() => setCurrentStep(7 + index)}
                  />
                )}
              </div>
            )
          ))}
        </div>

        {currentStep >= 7 + projects.length && (
          <TypewriterText 
            text="]"
            speed={40}
            className="text-muted-foreground"
          />
        )}
      </div>
    </div>
  );
};

export default Projects;