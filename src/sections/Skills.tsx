import React, { useState, useEffect } from 'react';
import TypewriterText from '../components/TypewriterText';

const Skills: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const scrollToBottom = () => {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    };
    scrollToBottom();
  }, [currentStep]);

  const skillsData = [
    { category: 'Frontend', skills: ['React.js (Expert)', 'TypeScript (Advanced)', 'Next.js (Advanced)', 'Tailwind CSS (Expert)', 'JavaScript ES6+ (Expert)'] },
    { category: 'Backend', skills: ['Node.js (Expert)', 'Python (Advanced)', 'Express.js (Advanced)', 'PostgreSQL (Intermediate)', 'MongoDB (Intermediate)'] },
    { category: 'DevOps', skills: ['Docker (Advanced)', 'AWS (Intermediate)', 'Kubernetes (Intermediate)', 'CI/CD (Advanced)'] },
    { category: 'Tools', skills: ['Git (Expert)', 'VS Code (Expert)', 'Figma (Intermediate)', 'Postman (Advanced)'] }
  ];

  return (
    <div className="space-y-6">
      <div className="font-mono">
        <TypewriterText 
          text="=== SKILLS.YAML ===" 
          speed={30}
          className="text-primary font-bold text-lg"
          onComplete={() => setCurrentStep(1)}
        />
      </div>

      <div className="space-y-4">
        {skillsData.map((category, categoryIndex) => (
          currentStep > categoryIndex && (
            <div key={category.category} className="space-y-2">
              <TypewriterText 
                text={`${category.category.toLowerCase()}:`}
                speed={50}
                className="text-blue-400 font-semibold"
                onComplete={() => setCurrentStep(categoryIndex + 2)}
              />
              {currentStep > categoryIndex + 1 && (
                <div className="pl-4 space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    currentStep > categoryIndex + skillIndex + 1 && (
                      <TypewriterText 
                        key={skill}
                        text={`→ ${skill}`}
                        speed={40}
                        className="text-muted-foreground block"
                        onComplete={() => setCurrentStep(categoryIndex + skillIndex + 3)}
                      />
                    )
                  ))}
                </div>
              )}
            </div>
          )
        ))}

        {currentStep >= 20 && (
          <div className="space-y-2">
            <TypewriterText 
              text="currently_learning:"
              speed={50}
              className="text-blue-400 font-semibold"
              onComplete={() => setCurrentStep(21)}
            />
            {currentStep >= 21 && (
              <div className="pl-4">
                <TypewriterText 
                  text="→ Rust, GraphQL, Machine Learning, Blockchain"
                  speed={40}
                  className="text-muted-foreground"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;