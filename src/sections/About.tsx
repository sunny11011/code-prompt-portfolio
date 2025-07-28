import React, { useState, useEffect } from 'react';
import TypewriterText from '../components/TypewriterText';

const About: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="syntax-function">const</span>
        <span className="syntax-variable">aboutMe</span>
        <span className="text-foreground">=</span>
        <span className="text-foreground">{"{"}</span>
      </div>
      
      <div className="pl-6 space-y-4">
        <div className="space-y-2">
          <div className="flex">
            <span className="syntax-string">name:</span>
            <span className="text-muted-foreground ml-2">//</span>
            <span className="syntax-comment ml-1">Full-stack Developer</span>
          </div>
          <TypewriterText 
            text="  'Alex Chen',"
            speed={30}
            className="syntax-string ml-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex">
            <span className="syntax-string">role:</span>
            <span className="text-muted-foreground ml-2">//</span>
            <span className="syntax-comment ml-1">Current position</span>
          </div>
          <TypewriterText 
            text="  'Senior Software Engineer',"
            speed={30}
            delay={1000}
            className="syntax-string ml-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex">
            <span className="syntax-string">experience:</span>
            <span className="text-muted-foreground ml-2">//</span>
            <span className="syntax-comment ml-1">Years in the field</span>
          </div>
          <TypewriterText 
            text="  5,"
            speed={30}
            delay={2000}
            className="syntax-number ml-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex">
            <span className="syntax-string">description:</span>
            <span className="text-muted-foreground ml-2">//</span>
            <span className="syntax-comment ml-1">Professional summary</span>
          </div>
          <div className="ml-4">
            <TypewriterText 
              text="  'Passionate full-stack developer with expertise in modern"
              speed={20}
              delay={3000}
              className="syntax-string"
            />
            <br />
            <TypewriterText 
              text="   web technologies. I love building scalable applications"
              speed={20}
              delay={5000}
              className="syntax-string"
            />
            <br />
            <TypewriterText 
              text="   and solving complex problems with elegant code.',"
              speed={20}
              delay={7000}
              className="syntax-string"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex">
            <span className="syntax-string">interests:</span>
            <span className="text-muted-foreground ml-2">//</span>
            <span className="syntax-comment ml-1">What drives me</span>
          </div>
          <div className="ml-4">
            <TypewriterText 
              text="  ['Open Source', 'AI/ML', 'Cloud Architecture', 'DevOps'],"
              speed={20}
              delay={9000}
              className="text-foreground"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex">
            <span className="syntax-string">location:</span>
            <span className="text-muted-foreground ml-2">//</span>
            <span className="syntax-comment ml-1">Based in</span>
          </div>
          <TypewriterText 
            text="  'San Francisco, CA'"
            speed={30}
            delay={11000}
            className="syntax-string ml-4"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <TypewriterText 
          text="};"
          speed={30}
          delay={12000}
          className="text-foreground"
        />
      </div>
    </div>
  );
};

export default About;