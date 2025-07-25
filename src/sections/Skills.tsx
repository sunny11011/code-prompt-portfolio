import React, { useState } from 'react';

interface Skill {
  name: string;
  category: string;
  level: number;
  description: string;
}

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', level: 9, description: 'Advanced component architecture and state management' },
    { name: 'TypeScript', category: 'frontend', level: 8, description: 'Type-safe application development' },
    { name: 'Vue.js', category: 'frontend', level: 7, description: 'Component-based UI development' },
    { name: 'Tailwind CSS', category: 'frontend', level: 9, description: 'Utility-first CSS framework' },
    { name: 'Next.js', category: 'frontend', level: 8, description: 'Full-stack React framework' },
    
    // Backend
    { name: 'Node.js', category: 'backend', level: 9, description: 'Server-side JavaScript runtime' },
    { name: 'Python', category: 'backend', level: 8, description: 'Backend development and data processing' },
    { name: 'Express.js', category: 'backend', level: 8, description: 'Web application framework' },
    { name: 'PostgreSQL', category: 'backend', level: 7, description: 'Relational database management' },
    { name: 'MongoDB', category: 'backend', level: 7, description: 'NoSQL database operations' },
    
    // DevOps
    { name: 'Docker', category: 'devops', level: 8, description: 'Containerization and deployment' },
    { name: 'AWS', category: 'devops', level: 7, description: 'Cloud infrastructure and services' },
    { name: 'Kubernetes', category: 'devops', level: 6, description: 'Container orchestration' },
    { name: 'CI/CD', category: 'devops', level: 8, description: 'Automated testing and deployment' },
    
    // Tools
    { name: 'Git', category: 'tools', level: 9, description: 'Version control and collaboration' },
    { name: 'VS Code', category: 'tools', level: 9, description: 'Code editor and debugging' },
    { name: 'Figma', category: 'tools', level: 7, description: 'UI/UX design and prototyping' },
    { name: 'Postman', category: 'tools', level: 8, description: 'API testing and documentation' }
  ];

  const categories = ['all', 'frontend', 'backend', 'devops', 'tools'];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getSkillBar = (level: number) => {
    const bars = Array.from({ length: 10 }, (_, i) => (
      <span
        key={i}
        className={`inline-block w-2 h-1 mr-1 ${
          i < level ? 'bg-primary' : 'bg-muted'
        }`}
      />
    ));
    return bars;
  };

  const getCategoryComment = (category: string) => {
    switch (category) {
      case 'frontend': return '// Client-side technologies';
      case 'backend': return '// Server-side technologies';
      case 'devops': return '// Infrastructure and deployment';
      case 'tools': return '// Development tools and utilities';
      default: return '// All technical skills';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="syntax-function">const</span>
        <span className="syntax-variable">skills</span>
        <span className="text-foreground">=</span>
        <span className="text-foreground">{"{"}</span>
      </div>

      {/* Category Navigation */}
      <div className="pl-6 mb-6">
        <div className="syntax-comment mb-2">// Filter by category:</div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded border transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted text-muted-foreground border-border hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills List */}
      <div className="pl-6 space-y-4">
        <div className="syntax-comment">{getCategoryComment(selectedCategory)}</div>
        
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="section-card">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="syntax-string font-medium text-sm sm:text-base">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {getSkillBar(skill.level)}
                    </div>
                    <span className="syntax-number text-sm">{skill.level}/10</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-xs sm:text-sm">{skill.description}</p>
                
                <div className="flex items-center gap-2">
                  <span className="syntax-keyword text-xs px-2 py-1 bg-muted rounded">
                    {skill.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <span className="text-foreground">{"};"}</span>
      </div>

      {/* Additional Info */}
      <div className="pl-6 mt-8 space-y-2">
        <div className="syntax-comment">// Currently learning:</div>
        <div className="flex flex-wrap gap-2">
          {['Rust', 'GraphQL', 'Machine Learning', 'Blockchain'].map((item) => (
            <span key={item} className="syntax-variable text-sm px-2 py-1 bg-muted/50 rounded border border-dashed border-accent">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;