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
    // Show welcome screen initially with ASCII art
    handleCommand('welcome');
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
        addOutputLine('Loading personal information...\n');
        setTimeout(() => {
          setCurrentSection('about');
        }, 800);
        break;
      
      case 'projects':
        addOutputLine('Fetching project portfolio...\n');
        setTimeout(() => {
          setCurrentSection('projects');
        }, 800);
        break;
      
      case 'skills':
        addOutputLine('Analyzing technical capabilities...\n');
        setTimeout(() => {
          setCurrentSection('skills');
        }, 800);
        break;
      
      case 'contact':
        addOutputLine('Displaying contact information...\n');
        setTimeout(() => {
          setCurrentSection('contact');
        }, 800);
        break;
      
      case 'education':
        addOutputLine('Loading educational background...\n');
        setTimeout(() => {
          setCurrentSection('education');
        }, 800);
        break;
      
      case 'achievements':
        addOutputLine('Analyzing achievement records...\n');
        setTimeout(() => {
          setCurrentSection('achievements');
        }, 800);
        break;
      
      case 'interests':
        addOutputLine(`<div class="space-y-6">
  <div class="border border-border rounded-lg p-4 bg-muted/10">
    <h3 class="text-primary font-bold mb-3 flex items-center gap-2">
      <span class="text-accent">🎯</span> Personal Interests
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Reading tech blogs and staying updated with latest technologies</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Learning new programming languages and frameworks</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Contributing to open-source projects</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Playing cricket and football</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Watching movies and series</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Traveling and exploring new places</span>
      </li>
    </ul>
  </div>
  
  <div class="border border-border rounded-lg p-4 bg-muted/10">
    <h3 class="text-primary font-bold mb-3 flex items-center gap-2">
      <span class="text-accent">💼</span> Professional Interests
    </h3>
    <ul class="space-y-2">
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Mobile app development with Flutter</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Cross-platform development</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>UI/UX design principles</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Backend development with Node.js</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>Cloud services and deployment</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-primary mt-1">→</span>
        <span>DevOps and CI/CD pipelines</span>
      </li>
    </ul>
  </div>
</div>`);
        setTimeout(() => {
          setCurrentSection('interests');
        }, 800);
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
        addOutputLine(`<div class="text-center py-4">
  <div class="text-foreground text-xs sm:text-sm md:text-base font-bold whitespace-pre-line mb-2">
██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗
██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║
██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║
██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║
╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║
 ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
                                              
███████╗██╗  ██╗ █████╗ ██╗  ██╗ █████╗ ██████╗ 
██╔════╝██║  ██║██╔══██╗██║  ██║██╔══██╗██╔══██╗
███████╗███████║███████║███████║███████║██████╔╝
╚════██║██╔══██║██╔══██║██╔══██║██╔══██║██╔══██╗
███████║██║  ██║██║  ██║██║  ██║██║  ██║██████╔╝
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 
  </div>
  <div class="text-primary text-xs sm:text-sm md:text-base font-bold mt-2 whitespace-pre-line">
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
  </div>
  <div class="text-accent text-sm mt-4">Full-Stack Developer & Problem Solver</div>
</div>

Available commands:
• about      - Learn about me
• skills     - View my technical skills  
• projects   - Explore my projects
• achievements - See my accomplishments
• education  - Check my educational background
• interests  - Discover my interests
• contact    - Get in touch
• help       - Show this help message
• clear      - Clear the terminal

Type any command to get started, or click on files in the sidebar!`);
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
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'hidden' : 'block'} lg:block`}>
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
        
        {/* Main Content - Terminal Only */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Terminal */}
          <div className="flex-1 flex flex-col terminal-window h-full m-4 ml-2">
            <TerminalHeader title="usman@portfolio-terminal: ~" />
            <div className="flex-1 bg-terminal-bg border-l border-r border-b border-border overflow-hidden flex flex-col">
              <div 
                ref={outputRef}
                className="flex-1 p-4 overflow-y-auto space-y-2 font-mono text-sm"
                style={{ scrollBehavior: 'smooth' }}
              >
                <TerminalOutput lines={outputLines} />
                
                {/* Show styled content inside terminal for certain commands */}
                {currentSection !== 'welcome' && (
                  <div className="mt-4 p-4 bg-muted/20 rounded border border-border">
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
              <div className="border-t border-border bg-muted/10 p-2 space-y-3">
                <CommandPrompt 
                  onCommand={handleCommand}
                  isActive={!isProcessing}
                />
                
                {/* Section Navigation Buttons */}
                <div className="flex flex-wrap gap-2">
                  {['about', 'skills', 'projects', 'achievements', 'education', 'interests', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => handleCommand(section)}
                      className="px-3 py-1 text-xs bg-muted/30 border border-border rounded hover:bg-muted/50 transition-colors capitalize"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;