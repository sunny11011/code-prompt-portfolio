import React from 'react';
import TypewriterText from '../components/TypewriterText';

const Welcome: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <TypewriterText 
          text="Welcome to Alex Chen's Portfolio Terminal"
          speed={50}
          className="text-2xl font-bold text-primary"
        />
        
        <div className="mt-6">
          <TypewriterText 
            text="Initializing portfolio system..."
            speed={30}
            delay={2000}
            className="text-muted-foreground"
          />
        </div>
        
        <div className="mt-2">
          <TypewriterText 
            text="Loading modules... ✓"
            speed={30}
            delay={4000}
            className="text-syntax-string"
          />
        </div>
        
        <div className="mt-2">
          <TypewriterText 
            text="Connecting to portfolio database... ✓"
            speed={30}
            delay={5500}
            className="text-syntax-string"
          />
        </div>
        
        <div className="mt-2">
          <TypewriterText 
            text="System ready!"
            speed={30}
            delay={7000}
            className="text-accent font-bold"
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="space-y-4">
          <TypewriterText 
            text="Available Commands:"
            speed={30}
            delay={8000}
            className="text-lg font-semibold text-foreground"
          />
          
          <div className="pl-4 space-y-2 font-mono text-sm">
            <div>
              <TypewriterText 
                text="about        # Display personal information and background"
                speed={20}
                delay={9000}
                className="text-muted-foreground"
              />
            </div>
            <div>
              <TypewriterText 
                text="projects     # Show professional projects and portfolio"
                speed={20}
                delay={10000}
                className="text-muted-foreground"
              />
            </div>
            <div>
              <TypewriterText 
                text="skills       # List technical skills and expertise"
                speed={20}
                delay={11000}
                className="text-muted-foreground"
              />
            </div>
            <div>
              <TypewriterText 
                text="contact      # Get contact information and availability"
                speed={20}
                delay={12000}
                className="text-muted-foreground"
              />
            </div>
            <div>
              <TypewriterText 
                text="help         # Show available commands"
                speed={20}
                delay={13000}
                className="text-muted-foreground"
              />
            </div>
            <div>
              <TypewriterText 
                text="clear        # Clear terminal output"
                speed={20}
                delay={14000}
                className="text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6">
        <TypewriterText 
          text="Type a command below to explore my portfolio..."
          speed={30}
          delay={15000}
          className="text-primary italic"
        />
      </div>
    </div>
  );
};

export default Welcome;