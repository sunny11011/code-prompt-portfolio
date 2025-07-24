import React from 'react';
import TypewriterText from '../components/TypewriterText';

const Interests: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="syntax-comment">// interests.json</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-foreground">{"{"}</span>
        </div>
        
        <div className="pl-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="syntax-string">"cybersecurity":</span>
              <span className="text-foreground">[</span>
            </div>
            
            <div className="pl-6 space-y-2">
              <TypewriterText 
                text='"Ethical Hacking & Penetration Testing",'
                speed={20}
                delay={1000}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Network Security & Vulnerability Assessment",'
                speed={20}
                delay={1500}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Cryptography & Encryption Algorithms",'
                speed={20}
                delay={2000}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Bug Bounty Programs & Responsible Disclosure"'
                speed={20}
                delay={2500}
                className="syntax-string text-sm"
              />
            </div>
            
            <span className="text-foreground">],</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="syntax-string">"technical_hobbies":</span>
              <span className="text-foreground">[</span>
            </div>
            
            <div className="pl-6 space-y-2">
              <TypewriterText 
                text='"Building IoT Projects with Raspberry Pi",'
                speed={20}
                delay={3000}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Contributing to Open Source Projects",'
                speed={20}
                delay={3500}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Machine Learning & AI Experimentation",'
                speed={20}
                delay={4000}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Blockchain & Smart Contract Development",'
                speed={20}
                delay={4500}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Home Lab Setup & Self-hosting Services"'
                speed={20}
                delay={5000}
                className="syntax-string text-sm"
              />
            </div>
            
            <span className="text-foreground">],</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="syntax-string">"learning_goals":</span>
              <span className="text-foreground">{"{"}</span>
            </div>
            
            <div className="pl-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="syntax-string">"2024":</span>
                <span className="text-foreground">[</span>
              </div>
              
              <div className="pl-6 space-y-1">
                <TypewriterText 
                  text='"Master Kubernetes & Container Orchestration",'
                  speed={15}
                  delay={5500}
                  className="syntax-string text-sm"
                />
                <TypewriterText 
                  text='"Learn Rust Programming Language",'
                  speed={15}
                  delay={6000}
                  className="syntax-string text-sm"
                />
                <TypewriterText 
                  text='"Advance in Cloud-Native Architecture"'
                  speed={15}
                  delay={6500}
                  className="syntax-string text-sm"
                />
              </div>
              
              <span className="text-foreground">],</span>
              
              <div className="flex items-center gap-2">
                <span className="syntax-string">"future":</span>
                <span className="text-foreground">[</span>
              </div>
              
              <div className="pl-6 space-y-1">
                <TypewriterText 
                  text='"Quantum Computing Fundamentals",'
                  speed={15}
                  delay={7000}
                  className="syntax-string text-sm"
                />
                <TypewriterText 
                  text='"Advanced AI/ML Engineering",'
                  speed={15}
                  delay={7500}
                  className="syntax-string text-sm"
                />
                <TypewriterText 
                  text='"Entrepreneurship & Tech Leadership"'
                  speed={15}
                  delay={8000}
                  className="syntax-string text-sm"
                />
              </div>
              
              <span className="text-foreground">]</span>
            </div>
            
            <span className="text-foreground">{"}"}</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="syntax-string">"personal_activities":</span>
              <span className="text-foreground">[</span>
            </div>
            
            <div className="pl-6 space-y-2">
              <TypewriterText 
                text='"Rock Climbing & Outdoor Adventures",'
                speed={20}
                delay={8500}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Photography & Digital Art",'
                speed={20}
                delay={9000}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Chess & Strategic Board Games",'
                speed={20}
                delay={9500}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Podcast Host: \\"Code & Coffee\\"",'
                speed={20}
                delay={10000}
                className="syntax-string text-sm"
              />
              <TypewriterText 
                text='"Mentoring Aspiring Developers"'
                speed={20}
                delay={10500}
                className="syntax-string text-sm"
              />
            </div>
            
            <span className="text-foreground">]</span>
          </div>
        </div>
        
        <div className="mt-6">
          <TypewriterText 
            text="}"
            speed={30}
            delay={11000}
            className="text-foreground"
          />
        </div>
        
        <div className="mt-6 p-4 border border-border rounded bg-muted/10">
          <TypewriterText 
            text={`// Fun fact: I've built a custom keyboard with mechanical switches 
// and programmed it to execute terminal commands with single keystrokes! ⌨️`}
            speed={15}
            delay={11500}
            className="syntax-comment text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Interests;