import React from 'react';
import TypewriterText from '../components/TypewriterText';

const Education: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="syntax-comment"># education.md</span>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <TypewriterText 
            text="## Education Background"
            speed={30}
            className="text-xl font-bold text-primary"
          />
          
          <div className="pl-4 space-y-4 mt-6">
            <div className="section-card">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <TypewriterText 
                    text="**Bachelor of Computer Science**"
                    speed={20}
                    delay={1000}
                    className="syntax-string text-lg font-semibold"
                  />
                  <TypewriterText 
                    text="2018-2022"
                    speed={20}
                    delay={2000}
                    className="syntax-comment text-sm"
                  />
                </div>
                
                <TypewriterText 
                  text="University of California, San Francisco"
                  speed={20}
                  delay={2500}
                  className="text-muted-foreground"
                />
                
                <div className="space-y-2">
                  <TypewriterText 
                    text="**CGPA:** 3.8/4.0"
                    speed={20}
                    delay={3000}
                    className="syntax-number"
                  />
                  
                  <TypewriterText 
                    text="**Graduation:** Magna Cum Laude"
                    speed={20}
                    delay={3500}
                    className="syntax-keyword"
                  />
                </div>
              </div>
            </div>
            
            <div className="section-card">
              <div className="space-y-3">
                <TypewriterText 
                  text="### Relevant Coursework"
                  speed={20}
                  delay={4000}
                  className="syntax-function font-semibold"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                  {[
                    'Data Structures & Algorithms',
                    'Database Management Systems',
                    'Software Engineering',
                    'Computer Networks',
                    'Operating Systems',
                    'Web Development',
                    'Machine Learning',
                    'Cybersecurity Fundamentals'
                  ].map((course, index) => (
                    <div key={course} className="flex items-center gap-2">
                      <TypewriterText 
                        text={`- ${course}`}
                        speed={15}
                        delay={4500 + (index * 200)}
                        className="text-muted-foreground text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="section-card">
              <div className="space-y-3">
                <TypewriterText 
                  text="### Academic Projects"
                  speed={20}
                  delay={6500}
                  className="syntax-function font-semibold"
                />
                
                <div className="space-y-3 mt-4">
                  <div>
                    <TypewriterText 
                      text="**Senior Capstone:** Real-time Chat Application"
                      speed={15}
                      delay={7000}
                      className="syntax-string text-sm font-medium"
                    />
                    <TypewriterText 
                      text="Built with React, Node.js, and Socket.io - Grade: A+"
                      speed={15}
                      delay={7500}
                      className="text-muted-foreground text-xs ml-2"
                    />
                  </div>
                  
                  <div>
                    <TypewriterText 
                      text="**Database Project:** E-commerce Analytics System"
                      speed={15}
                      delay={8000}
                      className="syntax-string text-sm font-medium"
                    />
                    <TypewriterText 
                      text="PostgreSQL-based system with complex queries - Grade: A"
                      speed={15}
                      delay={8500}
                      className="text-muted-foreground text-xs ml-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;