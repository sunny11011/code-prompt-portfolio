import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

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

  const projects: Project[] = [
    {
      id: 'ecommerce-platform',
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/alexchen/ecommerce-platform',
      demo: 'https://demo-ecommerce.alexchen.dev',
      status: 'completed'
    },
    {
      id: 'ai-chatbot',
      name: 'AI-Powered Chatbot',
      description: 'Intelligent customer service chatbot using natural language processing and machine learning.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket', 'React'],
      github: 'https://github.com/alexchen/ai-chatbot',
      status: 'in-progress'
    },
    {
      id: 'task-manager',
      name: 'Collaborative Task Manager',
      description: 'Real-time collaborative task management application with team features and analytics.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'AWS'],
      github: 'https://github.com/alexchen/task-manager',
      demo: 'https://tasks.alexchen.dev',
      status: 'maintained'
    },
    {
      id: 'data-viz',
      name: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analysis with real-time charts and custom visualization tools.',
      technologies: ['D3.js', 'React', 'Python', 'Flask', 'PostgreSQL'],
      github: 'https://github.com/alexchen/data-dashboard',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-syntax-string';
      case 'in-progress': return 'text-accent';
      case 'maintained': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const renderProjectList = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <span className="syntax-function">const</span>
        <span className="syntax-variable">projects</span>
        <span className="text-foreground">=</span>
        <span className="text-foreground">[</span>
      </div>
      
      <div className="pl-6 space-y-4">
        {projects.map((project, index) => (
          <div key={project.id} className="space-y-2">
            <div className="text-muted-foreground">{`// Project ${index + 1}`}</div>
            <div className="section-card hover:bg-muted/20 cursor-pointer" 
                 onClick={() => setSelectedProject(project)}>
              <div className="flex items-center justify-between mb-2">
                <span className="syntax-string text-lg">{project.name}</span>
                <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="syntax-keyword text-xs px-2 py-1 bg-muted rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <span className="text-foreground">];</span>
      </div>
    </div>
  );

  const renderProjectDetail = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => setSelectedProject(null)}
          className="command-link"
        >
          ← Back to projects
        </button>
      </div>

      <div className="section-card">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="syntax-string text-xl">{selectedProject?.name}</h2>
            <span className={`text-sm px-3 py-1 rounded border ${getStatusColor(selectedProject?.status || '')}`}>
              {selectedProject?.status}
            </span>
          </div>
          
          <p className="text-muted-foreground">{selectedProject?.description}</p>
          
          <div className="space-y-2">
            <div className="syntax-comment">// Technologies used:</div>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.technologies.map((tech) => (
                <span key={tech} className="syntax-keyword px-3 py-1 bg-muted rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            {selectedProject?.github && (
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="command-link"
              >
                View Source Code
              </a>
            )}
            {selectedProject?.demo && (
              <a 
                href={selectedProject.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="command-link"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return selectedProject ? renderProjectDetail() : renderProjectList();
};

export default Projects;