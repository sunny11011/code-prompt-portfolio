import React from 'react';

const Interests: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="syntax-comment"># interests.md</span>
      </div>
      
      <div className="space-y-6">
        <div className="section-card bg-muted/5">
          <div className="space-y-3">
            <h3 className="syntax-string font-semibold flex items-center gap-2">
              <span className="text-accent">🎯</span> Personal Interests
            </h3>
            <div className="pl-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Reading tech blogs and staying updated with latest technologies</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Learning new programming languages and frameworks</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Contributing to open-source projects</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Playing cricket and football</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Watching movies and series</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Traveling and exploring new places</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-card bg-muted/5">
          <div className="space-y-3">
            <h3 className="syntax-string font-semibold flex items-center gap-2">
              <span className="text-accent">💼</span> Professional Interests
            </h3>
            <div className="pl-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Mobile app development with Flutter</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Cross-platform development</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">UI/UX design principles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Backend development with Node.js</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Cloud services and deployment</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">DevOps and CI/CD pipelines</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-card bg-muted/5">
          <div className="space-y-3">
            <h3 className="syntax-string font-semibold flex items-center gap-2">
              <span className="text-accent">🎯</span> Learning Goals
            </h3>
            <div className="pl-4 space-y-2">
              <div className="syntax-comment text-sm">// 2024 Focus Areas:</div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Master Kubernetes & Container Orchestration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Learn Rust Programming Language</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Advance in Cloud-Native Architecture</span>
              </div>
              
              <div className="syntax-comment text-sm mt-3">// Future Goals:</div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Quantum Computing Fundamentals</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Advanced AI/ML Engineering</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-card bg-muted/5">
          <div className="space-y-3">
            <h3 className="syntax-string font-semibold flex items-center gap-2">
              <span className="text-accent">🎮</span> Hobbies & Activities
            </h3>
            <div className="pl-4 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Building IoT projects with Raspberry Pi</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Photography & digital art</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Chess & strategic board games</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Home lab setup & self-hosting services</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">Mentoring aspiring developers</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border border-border rounded bg-muted/10">
          <div className="syntax-comment text-sm">
            // Fun fact: I've built a custom mechanical keyboard and programmed it 
            // to execute terminal commands with single keystrokes! ⌨️
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;