import React from 'react';
import TypewriterText from '../components/TypewriterText';

const Interests: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <TypewriterText 
          text="=== INTERESTS.MD ==="
          speed={30}
          className="text-accent font-bold text-lg"
        />
      </div>
      
      <div className="space-y-6">
        <div>
          <TypewriterText 
            text="## Technology & Innovation"
            speed={25}
            delay={500}
            className="text-primary font-semibold text-lg"
          />
          <div className="mt-3 pl-4">
            <TypewriterText 
              text="→ Exploring emerging technologies like AI/ML, blockchain, and quantum computing"
              speed={20}
              delay={1500}
              className="text-foreground"
            />
            <br />
            <TypewriterText 
              text="→ Always curious about the next breakthrough that will shape our future"
              speed={20}
              delay={3000}
              className="text-foreground"
            />
          </div>
        </div>

        <div>
          <TypewriterText 
            text="## Open Source Contributions"
            speed={25}
            delay={4500}
            className="text-primary font-semibold text-lg"
          />
          <div className="mt-3 pl-4">
            <TypewriterText 
              text="→ Active contributor to various open source projects"
              speed={20}
              delay={5500}
              className="text-foreground"
            />
            <br />
            <TypewriterText 
              text="→ Believes in building tools that benefit the entire developer community"
              speed={20}
              delay={7000}
              className="text-foreground"
            />
          </div>
        </div>

        <div>
          <TypewriterText 
            text="## Competitive Programming"
            speed={25}
            delay={8500}
            className="text-primary font-semibold text-lg"
          />
          <div className="mt-3 pl-4">
            <TypewriterText 
              text="→ Regular participant in coding competitions and hackathons"
              speed={20}
              delay={9500}
              className="text-foreground"
            />
            <br />
            <TypewriterText 
              text="→ Enjoys solving complex algorithmic challenges and learning new approaches"
              speed={20}
              delay={11000}
              className="text-foreground"
            />
          </div>
        </div>

        <div>
          <TypewriterText 
            text="## Photography & Creative Arts"
            speed={25}
            delay={12500}
            className="text-primary font-semibold text-lg"
          />
          <div className="mt-3 pl-4">
            <TypewriterText 
              text="→ Passionate about capturing moments and telling stories through photography"
              speed={20}
              delay={13500}
              className="text-foreground"
            />
            <br />
            <TypewriterText 
              text="→ Specializes in landscape and street photography"
              speed={20}
              delay={15000}
              className="text-foreground"
            />
          </div>
        </div>

        <div>
          <TypewriterText 
            text="## Travel & Culture"
            speed={25}
            delay={16500}
            className="text-primary font-semibold text-lg"
          />
          <div className="mt-3 pl-4">
            <TypewriterText 
              text="→ Love exploring different cultures and learning from diverse perspectives"
              speed={20}
              delay={17500}
              className="text-foreground"
            />
            <br />
            <TypewriterText 
              text="→ Each journey brings new insights that influence creative problem-solving"
              speed={20}
              delay={19000}
              className="text-foreground"
            />
          </div>
        </div>

        <div>
          <TypewriterText 
            text="## Music & Gaming"
            speed={25}
            delay={20500}
            className="text-primary font-semibold text-lg"
          />
          <div className="mt-3 pl-4">
            <TypewriterText 
              text="→ Enjoys playing musical instruments and strategic gaming"
              speed={20}
              delay={21500}
              className="text-foreground"
            />
            <br />
            <TypewriterText 
              text="→ Both activities help maintain creativity and strategic thinking skills"
              speed={20}
              delay={23000}
              className="text-foreground"
            />
          </div>
        </div>

        <div className="mt-8 p-4 bg-primary/10 rounded border border-primary/20">
          <TypewriterText 
            text="**Philosophy:** The intersection of technology and human creativity is where the most impactful innovations emerge. Every interest contributes to a broader understanding of the world and better problem-solving approaches."
            speed={15}
            delay={24500}
            className="text-foreground italic"
          />
        </div>
      </div>
    </div>
  );
};

export default Interests;