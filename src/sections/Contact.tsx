import React, { useState, useEffect } from 'react';
import TypewriterText from '../components/TypewriterText';

const Contact: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const scrollToBottom = () => {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    };
    scrollToBottom();
  }, [currentStep]);

  const contacts = [
    { label: 'email', value: 'usman@example.com' },
    { label: 'linkedin', value: '/in/usman-dev' },
    { label: 'github', value: 'github.com/usman' },
    { label: 'twitter', value: '@usman_dev' }
  ];

  return (
    <div className="space-y-6">
      <div className="font-mono">
        <TypewriterText 
          text="=== CONTACT_ME.SH ===" 
          speed={30}
          className="text-primary font-bold text-lg"
          onComplete={() => setCurrentStep(1)}
        />
      </div>

      <div className="space-y-4 font-mono">
        {currentStep >= 1 && (
          <div className="text-muted-foreground">
            <TypewriterText 
              text="#!/bin/bash" 
              speed={40}
              className="text-green-400"
              onComplete={() => setCurrentStep(2)}
            />
          </div>
        )}
        
        {currentStep >= 2 && (
          <div className="text-muted-foreground">
            <TypewriterText 
              text="# Get in touch with me through these channels:" 
              speed={30}
              onComplete={() => setCurrentStep(3)}
            />
          </div>
        )}

        <div className="space-y-2">
          {contacts.map((contact, index) => (
            currentStep >= 3 + index && (
              <div key={contact.label} className="flex items-center space-x-2">
                <TypewriterText 
                  text={`→ ${contact.label}: "${contact.value}"`}
                  speed={40}
                  className="text-muted-foreground"
                  onComplete={() => setCurrentStep(4 + index)}
                />
              </div>
            )
          ))}
        </div>

        {currentStep >= 7 && (
          <div className="space-y-2">
            <TypewriterText 
              text="→ status: 'Available for new opportunities'"
              speed={40}
              className="text-muted-foreground"
              onComplete={() => setCurrentStep(8)}
            />
          </div>
        )}

        {currentStep >= 8 && (
          <div className="space-y-2">
            <TypewriterText 
              text="→ response_time: 'Usually within 24 hours'"
              speed={40}
              className="text-muted-foreground"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;