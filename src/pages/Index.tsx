import React, { useState, useEffect, useRef } from 'react';
import TerminalHeader from '../components/TerminalHeader';
import CommandPrompt from '../components/CommandPrompt';
import TerminalOutput, { TerminalLine } from '../components/TerminalOutput';
import Welcome from '../sections/Welcome';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

type Section = 'welcome' | 'about' | 'projects' | 'skills' | 'contact';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('welcome');
  const [outputLines, setOutputLines] = useState<TerminalLine[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message
    setOutputLines([
      {
        id: 'welcome-1',
        type: 'output',
        content: `Portfolio Terminal v1.0.0
Licensed under MIT License
Type 'help' for available commands.

`,
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new output is added
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputLines]);

  const addOutputLine = (content: string, type: 'output' | 'error' = 'output') => {
    const newLine: TerminalLine = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      content,
      timestamp: new Date()
    };
    setOutputLines(prev => [...prev, newLine]);
  };

  const addCommandLine = (command: string) => {
    const commandLine: TerminalLine = {
      id: `cmd-${Date.now()}`,
      type: 'command',
      content: command,
      timestamp: new Date()
    };
    setOutputLines(prev => [...prev, commandLine]);
  };

  const handleCommand = async (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    setIsProcessing(true);
    addCommandLine(command);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    switch (cmd) {
      case 'about':
        setCurrentSection('about');
        addOutputLine('Loading personal information...\n');
        break;
      
      case 'projects':
        setCurrentSection('projects');
        addOutputLine('Fetching project portfolio...\n');
        break;
      
      case 'skills':
        setCurrentSection('skills');
        addOutputLine('Analyzing technical capabilities...\n');
        break;
      
      case 'contact':
        setCurrentSection('contact');
        addOutputLine('Displaying contact information...\n');
        break;
      
      case 'help':
        addOutputLine(`Available commands:
  about      - Show personal information and background
  projects   - Display professional projects and portfolio
  skills     - List technical skills and expertise
  contact    - Get contact information and social links
  clear      - Clear terminal output
  home       - Return to welcome screen
  help       - Show this help message
  
Use these commands to navigate through my portfolio.
`);
        break;
      
      case 'clear':
        setOutputLines([]);
        break;
      
      case 'home':
      case 'welcome':
        setCurrentSection('welcome');
        addOutputLine('Returning to welcome screen...\n');
        break;
      
      case 'ls':
      case 'dir':
        addOutputLine(`portfolio/
├── about.md
├── projects/
│   ├── ecommerce-platform/
│   ├── ai-chatbot/
│   ├── task-manager/
│   └── data-visualization/
├── skills.json
├── contact.json
└── README.md

Use 'about', 'projects', 'skills', or 'contact' to explore.
`);
        break;
      
      case 'whoami':
        addOutputLine('alex.chen@portfolio-terminal');
        break;
      
      case 'pwd':
        addOutputLine('/home/alex/portfolio');
        break;
      
      case 'date':
        addOutputLine(new Date().toString());
        break;
      
      case 'echo hello':
        addOutputLine('hello');
        break;
      
      default:
        if (cmd.startsWith('echo ')) {
          addOutputLine(cmd.substring(5));
        } else {
          addOutputLine(`Command not found: ${command}
Type 'help' for available commands.`, 'error');
        }
        break;
    }

    setIsProcessing(false);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-window">
          <TerminalHeader title="alex@portfolio-terminal: ~" />
          
          <div className="p-6">
            {/* Terminal Output */}
            <div 
              ref={outputRef}
              className="mb-6 h-32 overflow-y-auto"
            >
              <TerminalOutput lines={outputLines} />
            </div>

            {/* Current Section Content */}
            <div className="mb-6 min-h-[400px]">
              {renderCurrentSection()}
            </div>

            {/* Command Prompt */}
            <div className="border-t border-border pt-4">
              <CommandPrompt 
                onCommand={handleCommand}
                isActive={!isProcessing}
              />
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {[
            { key: 'about', label: 'About Me' },
            { key: 'projects', label: 'Projects' },
            { key: 'skills', label: 'Skills' },
            { key: 'contact', label: 'Contact' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleCommand(key)}
              className={`px-4 py-2 text-sm rounded border transition-colors ${
                currentSection === key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted text-muted-foreground border-border hover:border-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
