import React, { useState, useEffect } from 'react';
import TypewriterText from '../components/TypewriterText';

const Education: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const scrollToBottom = () => {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    };
    scrollToBottom();
  }, [currentStep]);

  const courses = [
    'Data Structures & Algorithms',
    'Database Management Systems', 
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Web Development'
  ];

  const projects = [
    { name: 'Senior Capstone: Real-time Chat Application', details: 'Built with React, Node.js, and Socket.io - Grade: A+' },
    { name: 'Database Project: E-commerce Analytics System', details: 'PostgreSQL-based system with complex queries - Grade: A' }
  ];

  return (
    <div className="space-y-6">
      <div className="font-mono">
        <TypewriterText 
          text="=== EDUCATION.MD ===" 
          speed={30}
          className="text-primary font-bold text-lg"
          onComplete={() => setCurrentStep(1)}
        />
      </div>

      <div className="space-y-4">
        {currentStep >= 1 && (
          <div className="space-y-2">
            <TypewriterText 
              text="## Education Background"
              speed={30}
              className="text-xl font-bold text-blue-400"
              onComplete={() => setCurrentStep(2)}
            />
          </div>
        )}

        {currentStep >= 2 && (
          <div className="space-y-1">
            <TypewriterText 
              text="→ Degree: Bachelor of Computer Science"
              speed={40}
              className="text-muted-foreground"
              onComplete={() => setCurrentStep(3)}
            />
          </div>
        )}

        {currentStep >= 3 && (
          <TypewriterText 
            text="→ University: University of California, San Francisco"
            speed={40}
            className="text-muted-foreground"
            onComplete={() => setCurrentStep(4)}
          />
        )}

        {currentStep >= 4 && (
          <TypewriterText 
            text="→ Duration: 2018-2022"
            speed={40}
            className="text-muted-foreground"
            onComplete={() => setCurrentStep(5)}
          />
        )}

        {currentStep >= 5 && (
          <TypewriterText 
            text="→ CGPA: 3.8/4.0 (Magna Cum Laude)"
            speed={40}
            className="text-muted-foreground"
            onComplete={() => setCurrentStep(6)}
          />
        )}

        {currentStep >= 6 && (
          <div className="space-y-2 mt-4">
            <TypewriterText 
              text="### Relevant Coursework"
              speed={30}
              className="text-lg font-bold text-blue-400"
              onComplete={() => setCurrentStep(7)}
            />
          </div>
        )}

        <div className="space-y-1">
          {courses.map((course, index) => (
            currentStep >= 7 + index && (
              <TypewriterText 
                key={course}
                text={`→ ${course}`}
                speed={40}
                className="text-muted-foreground"
                onComplete={() => setCurrentStep(8 + index)}
              />
            )
          ))}
        </div>

        {currentStep >= 13 && (
          <div className="space-y-2 mt-4">
            <TypewriterText 
              text="### Academic Projects"
              speed={30}
              className="text-lg font-bold text-blue-400"
              onComplete={() => setCurrentStep(14)}
            />
          </div>
        )}

        <div className="space-y-2">
          {projects.map((project, index) => (
            currentStep >= 14 + index && (
              <div key={project.name} className="space-y-1">
                <TypewriterText 
                  text={`→ ${project.name}`}
                  speed={40}
                  className="text-muted-foreground"
                  onComplete={() => setCurrentStep(15 + index)}
                />
                {currentStep >= 15 + index && (
                  <TypewriterText 
                    text={`   ${project.details}`}
                    speed={35}
                    className="text-muted-foreground text-sm"
                    onComplete={() => setCurrentStep(16 + index)}
                  />
                )}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;