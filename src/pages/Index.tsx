import React, { useState, useEffect, useRef } from 'react';
import TerminalHeader from '../components/TerminalHeader';
import CommandPrompt from '../components/CommandPrompt';
import TerminalOutput, { TerminalLine } from '../components/TerminalOutput';
import Sidebar from '../components/Sidebar';
import Welcome from '../sections/Welcome';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import Education from '../sections/Education';
import Achievements from '../sections/Achievements';
import Interests from '../sections/Interests';

type Section = 'welcome' | 'about' | 'projects' | 'skills' | 'contact' | 'education' | 'achievements' | 'interests';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('welcome');
  const [outputLines, setOutputLines] = useState<TerminalLine[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
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
      
      case 'education':
        setCurrentSection('education');
        addOutputLine('Loading educational background...\n');
        break;
      
      case 'achievements':
        setCurrentSection('achievements');
        addOutputLine('Analyzing achievement records...\n');
        break;
      
      case 'interests':
        setCurrentSection('interests');
        addOutputLine('Parsing personal interests...\n');
        break;
      
      case 'help':
        addOutputLine(`Available commands:
  about        - Show personal information and background
  projects     - Display professional projects and portfolio
  skills       - List technical skills and expertise
  contact      - Get contact information and social links
  education    - View educational background and achievements
  achievements - Display professional accomplishments
  interests    - Show personal interests and hobbies
  clear        - Clear terminal output
  home         - Return to welcome screen
  help         - Show this help message
  
Fun commands:
  sudo hire-me - Display hiring call-to-action
  npm run usman - Show animated developer bio
  cat resume.pdf - Display resume summary
  
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
      
      case 'sudo hire-me':
        addOutputLine(`[sudo] password for user: ********
        
🚀 HIRING REQUEST APPROVED! 🚀

╔══════════════════════════════════════╗
║        READY TO JOIN YOUR TEAM       ║
╠══════════════════════════════════════╣
║ Status: Available for new projects  ║
║ Response Time: < 24 hours           ║
║ Commitment: 110% dedication         ║
║ Coffee Level: Always optimized      ║
╚══════════════════════════════════════╝

Type 'contact' to get in touch! 💼
`);
        break;
      
      case 'npm run usman':
        addOutputLine(`> usman-portfolio@1.0.0 start
> node --version && echo "Starting developer instance..."

v18.17.0
Starting developer instance...

██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗
██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║
██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║
██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║
╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║
 ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

Developer instance started successfully ✅
Passion: LOADED ⚡
Creativity: OPTIMIZED 🎨
Problem-solving: MAXED OUT 🧠
`);
        break;
      
      case 'cat resume.pdf':
        addOutputLine(`📄 RESUME.PDF - Quick Preview
        
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USMAN - Full-Stack Developer
📧 usman@email.com | 🌐 GitHub: /usman-dev
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 SUMMARY
5+ years crafting exceptional digital experiences
Specialized in React, Node.js, and modern web tech

🏆 KEY ACHIEVEMENTS  
• 15+ successful project deliveries
• 98% on-time completion rate
• Led teams of 3-8 developers

🛠️ CORE SKILLS
Frontend: React, TypeScript, Next.js
Backend: Node.js, Python, PostgreSQL
DevOps: Docker, AWS, Kubernetes

For full resume, type 'contact' to get in touch! 📬
`);
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
      case 'education':
        return <Education />;
      case 'achievements':
        return <Achievements />;
      case 'interests':
        return <Interests />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row">
        {/* Mobile Header with Sidebar Toggle */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <h1 className="text-lg font-mono text-primary">usman@portfolio-terminal</h1>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-muted rounded transition-colors"
          >
            <span className="sr-only">Toggle sidebar</span>
            <div className="w-5 h-5 flex flex-col justify-center">
              <span className="block w-full h-0.5 bg-foreground mb-1"></span>
              <span className="block w-full h-0.5 bg-foreground mb-1"></span>
              <span className="block w-full h-0.5 bg-foreground"></span>
            </div>
          </button>
        </div>

        <div className="flex flex-1">
          {/* Sidebar */}
          <div className={`${sidebarCollapsed ? 'hidden' : 'block'} lg:block ${
            sidebarCollapsed ? '' : 'fixed inset-0 z-50 lg:relative lg:inset-auto'
          } lg:z-auto`}>
            {!sidebarCollapsed && (
              <div 
                className="absolute inset-0 bg-black/50 lg:hidden" 
                onClick={() => setSidebarCollapsed(true)}
              />
            )}
            <div className="relative bg-background">
              <Sidebar 
                onFileClick={(command) => {
                  handleCommand(command);
                  // Auto-close sidebar on mobile after clicking
                  if (window.innerWidth < 1024) {
                    setSidebarCollapsed(true);
                  }
                }}
                isCollapsed={false}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-2 lg:p-4">
            <div className="max-w-6xl mx-auto">
              <div className="terminal-window">
                <TerminalHeader title="usman@portfolio-terminal: ~" />
                
                <div className="p-3 lg:p-6">
                  {/* Terminal Output */}
                  <div 
                    ref={outputRef}
                    className="mb-4 lg:mb-6 min-h-[150px] lg:min-h-[200px] max-h-[300px] lg:max-h-[400px] overflow-y-auto border border-border rounded bg-muted/10 p-2 lg:p-4 text-sm lg:text-base"
                  >
                    <TerminalOutput lines={outputLines} />
                  </div>

                  {/* Current Section Content */}
                  <div className="mb-4 lg:mb-6 min-h-[300px] lg:min-h-[400px]">
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
              <div className="mt-4 lg:mt-6 flex flex-wrap gap-1 lg:gap-2 justify-center px-2">
                {[
                  { key: 'about', label: 'About' },
                  { key: 'projects', label: 'Projects' },
                  { key: 'skills', label: 'Skills' },
                  { key: 'education', label: 'Education' },
                  { key: 'achievements', label: 'Achievements' },
                  { key: 'interests', label: 'Interests' },
                  { key: 'contact', label: 'Contact' }
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => handleCommand(key)}
                    className={`px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm rounded border transition-colors ${
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
        </div>
      </div>
    </div>
  );
};

export default Index;
