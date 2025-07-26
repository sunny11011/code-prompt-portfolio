import React from 'react';
import TypewriterText from '../components/TypewriterText';

const Achievements: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="syntax-comment"># achievements.log</span>
      </div>
      
      <div className="space-y-4">
        <TypewriterText 
          text="[INFO] Loading achievement records..."
          speed={30}
          className="text-muted-foreground font-mono text-sm"
        />
        
        <div className="space-y-4 mt-6">
          <div className="section-card bg-muted/5">
            <div className="space-y-3">
              <TypewriterText 
                text="[SUCCESS] 🚀 Project Delivery Statistics"
                speed={20}
                delay={1000}
                className="syntax-string font-semibold"
              />
              
              <div className="pl-4 space-y-2 font-mono text-sm">
                <TypewriterText 
                  text="  → Total Projects Completed: 15+"
                  speed={15}
                  delay={1500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → On-time Delivery Rate: 98%"
                  speed={15}
                  delay={2000}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Client Satisfaction: 4.9/5.0"
                  speed={15}
                  delay={2500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Budget Efficiency: 95% avg"
                  speed={15}
                  delay={3000}
                  className="text-muted-foreground"
                />
              </div>
            </div>
          </div>
          
          <div className="section-card bg-muted/5">
            <div className="space-y-3">
              <TypewriterText 
                text="[SUCCESS] 🏆 Technical Excellence"
                speed={20}
                delay={3500}
                className="syntax-string font-semibold"
              />
              
              <div className="pl-4 space-y-2 font-mono text-sm">
                <TypewriterText 
                  text="  → Performance Optimization Expert"
                  speed={15}
                  delay={4000}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="    → Average 40% load time reduction"
                  speed={15}
                  delay={4500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Offline-First Architecture Specialist"
                  speed={15}
                  delay={5000}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="    → Implemented PWA features in 8+ apps"
                  speed={15}
                  delay={5500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Cross-Platform Development"
                  speed={15}
                  delay={6000}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="    → React Native, Flutter expertise"
                  speed={15}
                  delay={6500}
                  className="text-muted-foreground"
                />
              </div>
            </div>
          </div>
          
          <div className="section-card bg-muted/5">
            <div className="space-y-3">
              <TypewriterText 
                text="[SUCCESS] 👥 Team Leadership & Impact"
                speed={20}
                delay={7000}
                className="syntax-string font-semibold"
              />
              
              <div className="pl-4 space-y-2 font-mono text-sm">
                <TypewriterText 
                  text="  → Led development teams of 3-8 members"
                  speed={15}
                  delay={7500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Mentored 12+ junior developers"
                  speed={15}
                  delay={8000}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Established CI/CD pipelines (5 companies)"
                  speed={15}
                  delay={8500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Code review accuracy: 99.2%"
                  speed={15}
                  delay={9000}
                  className="text-muted-foreground"
                />
              </div>
            </div>
          </div>
          
          <div className="section-card bg-muted/5">
            <div className="space-y-3">
              <TypewriterText 
                text="[SUCCESS] 🌟 Recognition & Certifications"
                speed={20}
                delay={9500}
                className="syntax-string font-semibold"
              />
              
              <div className="pl-4 space-y-2 font-mono text-sm">
                <TypewriterText 
                  text="  → AWS Solutions Architect (Professional)"
                  speed={15}
                  delay={10000}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Google Cloud Professional Developer"
                  speed={15}
                  delay={10500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Employee of the Year (2023)"
                  speed={15}
                  delay={11000}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Open Source Contributor (500+ commits)"
                  speed={15}
                  delay={11500}
                  className="text-muted-foreground"
                />
                <TypewriterText 
                  text="  → Tech Speaker (8 conferences)"
                  speed={15}
                  delay={12000}
                  className="text-muted-foreground"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <TypewriterText 
            text="[INFO] Achievement log complete. Status: IMPRESSIVE ✨"
            speed={20}
            delay={12500}
            className="syntax-comment font-mono text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;