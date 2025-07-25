import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const Contact: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      name: 'Email',
      value: 'alex.chen@example.com',
      command: 'mailto:alex.chen@example.com',
      description: 'Best for detailed discussions and project inquiries'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: '/in/alexchen-dev',
      command: 'https://linkedin.com/in/alexchen-dev',
      description: 'Professional networking and career opportunities'
    },
    {
      id: 'github',
      name: 'GitHub',
      value: 'github.com/alexchen',
      command: 'https://github.com/alexchen',
      description: 'Code repositories and open source contributions'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      value: '@alexchen_dev',
      command: 'https://twitter.com/alexchen_dev',
      description: 'Tech thoughts and industry discussions'
    },
    {
      id: 'discord',
      name: 'Discord',
      value: 'alexchen#1234',
      command: 'discord://users/alexchen#1234',
      description: 'Quick chats and community discussions'
    }
  ];

  const handleContact = (method: any) => {
    if (method.command.startsWith('mailto:') || method.command.startsWith('http')) {
      window.open(method.command, '_blank');
    } else {
      // Copy to clipboard for Discord
      navigator.clipboard.writeText(method.value);
      setSelectedMethod(method.id);
      setTimeout(() => setSelectedMethod(null), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="syntax-function">const</span>
        <span className="syntax-variable">contactInfo</span>
        <span className="text-foreground">=</span>
        <span className="text-foreground">{"{"}</span>
      </div>

      <div className="pl-6 space-y-6">
        <div className="space-y-2">
          <div className="syntax-comment">// Let's connect! Available through multiple channels:</div>
        </div>

        <div className="space-y-4">
          <div className="syntax-string">methods: [</div>
          
          <div className="pl-6 space-y-4">
            {contactMethods.map((method, index) => (
              <div key={method.id} className="space-y-2">
                <div className="syntax-comment text-xs sm:text-sm">{`// ${method.description}`}</div>
                <div 
                  className="section-card cursor-pointer hover:bg-muted/20 transition-all duration-200"
                  onClick={() => handleContact(method)}
                >
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="syntax-keyword text-sm">{method.name}:</span>
                        <span className="syntax-string text-xs sm:text-sm break-all">"{method.value}"</span>
                      </div>
                      {selectedMethod === method.id && (
                        <span className="text-accent text-sm">Copied!</span>
                      )}
                    </div>
                    <div className="text-muted-foreground text-xs sm:text-sm">
                      Click to {method.command.startsWith('http') ? 'open' : method.command.startsWith('mailto') ? 'send email' : 'copy'}
                    </div>
                  </div>
                </div>
                {index < contactMethods.length - 1 && (
                  <span className="text-muted-foreground">,</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-foreground">],</div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="syntax-comment">// Current availability:</div>
            <div className="flex items-center gap-2">
              <span className="syntax-string">status:</span>
              <span className="syntax-string">"Available for new opportunities"</span>
              <span className="text-muted-foreground">,</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="syntax-comment">// Response time:</div>
            <div className="flex items-center gap-2">
              <span className="syntax-string">responseTime:</span>
              <span className="syntax-string">"Usually within 24 hours"</span>
              <span className="text-muted-foreground">,</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="syntax-comment">// Time zone:</div>
            <div className="flex items-center gap-2">
              <span className="syntax-string">timezone:</span>
              <span className="syntax-string">"PST (UTC-8)"</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-foreground">{"};"}</span>
      </div>

      {/* Quick Actions */}
      <div className="pl-6 mt-8 space-y-4">
        <div className="syntax-comment">// Quick actions:</div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <button
            onClick={() => handleContact(contactMethods[0])}
            className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            Send Email
          </button>
          <button
            onClick={() => window.open('https://calendly.com/alexchen-dev', '_blank')}
            className="px-4 py-2 text-sm bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
          >
            Schedule Call
          </button>
          <button
            onClick={() => handleContact(contactMethods[2])}
            className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors"
          >
            View GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;