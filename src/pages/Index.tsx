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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 1024);
  const [showSectionContent, setShowSectionContent] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show welcome screen initially with ASCII art
    showWelcomeScreen();
  }, []);

  const showWelcomeScreen = () => {
    const welcomeLines: TerminalLine[] = [
      {
        id: 'welcome-ascii',
        type: 'output',
        content: `
┌────────────────────────────────────────┐
│                                        │
│    ██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗    
│    ██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║    
│    ██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║    
│    ██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║    
│    ╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║    
│     ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    
│                                        │
│               ███████╗██╗  ██╗ █████╗ ██╗  ██╗ █████╗ ██████╗ 
│               ██╔════╝██║  ██║██╔══██╗██║  ██║██╔══██╗██╔══██╗
│               ███████╗███████║███████║███████║███████║██████╔╝
│               ╚════██║██╔══██║██╔══██║██╔══██║██╔══██║██╔══██╗
│               ███████║██║  ██║██║  ██║██║  ██║██║  ██║██████╔╝
│               ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 
│                                        │
│              ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
│              ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
│              ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
│              ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
│              ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
│              ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
│                                        │
└────────────────────────────────────────┘

Available commands:
→ about      - Learn about me
→ skills     - View my technical skills  
→ projects   - Explore my projects
→ achievements - See my accomplishments
→ education  - Check my educational background
→ interests  - Discover my interests
→ contact    - Get in touch
→ help       - Show help message
→ clear      - Clear the terminal

Type any command to get started, or click on files in the sidebar!`,
        timestamp: new Date()
      }
    ];
    setOutputLines(welcomeLines);
    setCurrentSection('welcome');
    setShowSectionContent(false);
  };

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

    // Clear previous section content
    setShowSectionContent(false);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 300));

    switch (cmd) {
      case 'about':
        addOutputLine('→ Loading personal information...');
        setTimeout(() => {
          setCurrentSection('about');
          setShowSectionContent(true);
        }, 600);
        break;
      
      case 'projects':
        addOutputLine('→ Fetching project portfolio...');
        setTimeout(() => {
          setCurrentSection('projects');
          setShowSectionContent(true);
        }, 600);
        break;
      
      case 'skills':
        addOutputLine('→ Analyzing technical capabilities...');
        setTimeout(() => {
          setCurrentSection('skills');
          setShowSectionContent(true);
        }, 600);
        break;
      
      case 'contact':
        addOutputLine('→ Displaying contact information...');
        setTimeout(() => {
          setCurrentSection('contact');
          setShowSectionContent(true);
        }, 600);
        break;
      
      case 'education':
        addOutputLine('→ Loading educational background...');
        setTimeout(() => {
          setCurrentSection('education');
          setShowSectionContent(true);
        }, 600);
        break;
      
      case 'achievements':
        addOutputLine('→ Analyzing achievement records...');
        setTimeout(() => {
          setCurrentSection('achievements');
          setShowSectionContent(true);
        }, 600);
        break;
      
      case 'interests':
        addOutputLine('→ Loading personal interests...');
        setTimeout(() => {
          setCurrentSection('interests');
          setShowSectionContent(true);
        }, 600);
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
        setShowSectionContent(false);
        break;
      
      case 'home':
      case 'welcome':
        showWelcomeScreen();
        break;
      
      case 'ls':
      case 'dir':
        addOutputLine(`portfolio/
├── about.md
├── projects/
│   ├── live_sports_app.dart
│   ├── transport_management_app.dart
│   ├── movie_streaming_app.dart
│   ├── amazon_clone.dart
│   └── data_dashboard.py
├── skills.yaml
├── education.md
├── achievements.log
├── interests.json
└── contact_me.sh

Use file names or commands to explore.
`);
        break;
      
      case 'whoami':
        addOutputLine('usman@portfolio-terminal');
        break;
      
      case 'pwd':
        addOutputLine('/home/usman/portfolio');
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
      
      case 'themes':
        addOutputLine(`Available terminal themes:
        
📱 Theme Options:
  • vscode     - VSCode Dark+ theme
  • dracula    - Dracula theme  
  • classic    - Classic Linux terminal
  • hacker     - Green-on-black hacker theme
  • light      - Light theme for better readability
  
Usage: theme <name>
Example: theme hacker
`);
        break;
      
      case 'theme vscode':
      case 'theme dracula':
      case 'theme classic':
      case 'theme hacker':
      case 'theme light':
        const theme = cmd.split(' ')[1];
        addOutputLine(`Switching to ${theme} theme...
Theme will be applied in a future update! 🎨`);
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
      
      case 'cd /projects/next_big_idea':
        addOutputLine(`cd: /projects/next_big_idea: Directory under construction
        
🚧 COMING SOON: The Next Big Idea™ 🚧

╭─────────────────────────────────────╮
│  🔮 Project Status: In Planning     │
│  🎯 Impact Level: Revolutionary     │
│  📅 Timeline: When ready            │
│  🤝 Collaborators: Always welcome   │
╰─────────────────────────────────────╯

"The best time to plant a tree was 20 years ago. 
 The second best time is now." - Ancient Proverb

Stay tuned... 😉
`);
        break;
      
      case 'fortune':
        const fortunes = [
          "A bug in the code is worth two in the documentation.",
          "To iterate is human, to recurse divine.",
          "There are only 10 types of people: those who understand binary and those who don't.",
          "Real programmers count from 0.",
          "It's not a bug, it's an undocumented feature.",
          "Code never lies, comments sometimes do.",
          "Premature optimization is the root of all evil.",
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        addOutputLine(`🔮 Fortune Cookie Says:

"${randomFortune}"
`);
        break;
      
      case 'easter':
        addOutputLine(`🥚 Easter Eggs Found! Here are some hidden commands:

Fun Commands:
• sudo hire-me      - Submit hiring request
• npm run usman     - Display ASCII art
• cat resume.pdf    - Quick resume preview
• fortune          - Get a random programming quote
• themes           - List available themes
• cd /projects/next_big_idea - Future project teaser
• easter           - Show this list
• matrix           - Enter the Matrix (coming soon)
• konami           - Try the famous code

Try them out! 🎮
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

  return (
    <div className="h-screen bg-background overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar Overlay for Mobile */}
        {!sidebarCollapsed && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'hidden lg:block' : 'block'} ${!sidebarCollapsed ? 'fixed lg:relative z-50' : ''}`}>
          <Sidebar 
            onFileClick={(command) => {
              handleCommand(command);
              // Auto-close sidebar on mobile after clicking
              if (window.innerWidth < 1024) {
                setSidebarCollapsed(true);
              }
            }}
            isCollapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>
        
        {/* Main Content - Terminal */}
        <div className="flex-1 flex flex-col min-w-0 h-screen">
          {/* Terminal */}
          <div className="flex-1 flex flex-col terminal-window mx-2 my-2 lg:mx-4 lg:my-4">
            <TerminalHeader 
              title="usman@portfolio-terminal: ~" 
              onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              showMenu={true}
            />
            <div className="flex-1 bg-background border-l border-r border-b border-border overflow-hidden flex flex-col">
              <div 
                ref={outputRef}
                className="flex-1 px-2 py-3 lg:px-4 lg:py-4 overflow-y-auto font-mono text-sm"
                style={{ scrollBehavior: 'smooth' }}
              >
                <TerminalOutput lines={outputLines} />
                
                {/* Show styled content inside terminal for certain commands */}
                {showSectionContent && currentSection !== 'welcome' && (
                  <div className="mt-6 p-3 lg:p-4 bg-card/30 rounded border border-border/50">
                    {currentSection === 'about' && <About />}
                    {currentSection === 'projects' && <Projects />}
                    {currentSection === 'skills' && <Skills />}
                    {currentSection === 'contact' && <Contact />}
                    {currentSection === 'education' && <Education />}
                    {currentSection === 'achievements' && <Achievements />}
                    {currentSection === 'interests' && <Interests />}
                  </div>
                )}
              </div>
              <div className="border-t border-border bg-muted/10 px-2 py-2 lg:px-3 lg:py-2">
                <CommandPrompt 
                  onCommand={handleCommand}
                  isActive={!isProcessing}
                />
              </div>
            </div>
          </div>
          
          {/* Section Navigation Buttons - Below Terminal */}
          <div className="mx-2 mb-2 lg:mx-4 lg:mb-4">
            <div className="flex flex-wrap gap-1 lg:gap-2 p-2 lg:p-3 bg-card/20 rounded border border-border">
              {['about', 'skills', 'projects', 'achievements', 'education', 'interests', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleCommand(section)}
                  className="px-2 py-1 lg:px-3 lg:py-1 text-xs bg-muted/30 border border-border rounded hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;