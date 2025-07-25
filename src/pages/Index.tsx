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

  const addSectionContent = (sectionContent: string) => {
    const contentLine: TerminalLine = {
      id: `section-${Date.now()}`,
      type: 'output',
      content: sectionContent,
      timestamp: new Date()
    };
    setOutputLines(prev => [...prev, contentLine]);
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
          addSectionContent(`
# Usman - Full Stack Developer

## Profile
Passionate Full Stack Developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and modern development practices. I love turning complex problems into simple, beautiful, and intuitive solutions.

## Core Competencies
• Frontend: React, TypeScript, Next.js, Vue.js
• Backend: Node.js, Python, Express, FastAPI
• Databases: PostgreSQL, MongoDB, Redis
• Cloud: AWS, Docker, Kubernetes
• Mobile: React Native, Flutter

## Professional Philosophy
"Code is poetry written in logic. Every line should serve a purpose, every function should tell a story, and every application should make someone's life better."

## Current Focus
Building robust, user-centric applications with modern technologies while constantly learning and adapting to new development paradigms.
`);
        }, 800);
        break;
      
      case 'projects':
        addOutputLine('Fetching project portfolio...\n');
        setTimeout(() => {
          addSectionContent(`
# Project Portfolio

## 🏆 Featured Projects

### 1. Live Sports App
**Tech Stack:** Flutter, Firebase, Node.js
**Description:** Real-time sports tracking application with live scores, player statistics, and social features
**Key Features:**
• Real-time data synchronization
• Push notifications for live updates
• Social sharing and community features
• Offline-first architecture

### 2. Transport Management System
**Tech Stack:** React, Node.js, PostgreSQL
**Description:** Complete fleet management solution for logistics companies
**Key Features:**
• Vehicle tracking and route optimization
• Driver management and scheduling
• Real-time analytics dashboard
• Mobile app for drivers

### 3. Movie Streaming Platform
**Tech Stack:** React, Node.js, MongoDB, AWS
**Description:** Netflix-like streaming platform with content management
**Key Features:**
• Video streaming with adaptive quality
• User recommendation engine
• Content management system
• Payment integration

### 4. Amazon Clone
**Tech Stack:** React, Node.js, PostgreSQL, Stripe
**Description:** Full-featured e-commerce platform
**Key Features:**
• Product catalog with search and filters
• Shopping cart and checkout system
• Order management and tracking
• Admin dashboard for inventory

### 5. Data Visualization Dashboard
**Tech Stack:** Python, React, D3.js, FastAPI
**Description:** Interactive analytics dashboard for business intelligence
**Key Features:**
• Real-time data visualization
• Custom chart components
• Export functionality
• Role-based access control

## 📊 Project Statistics
• Total Projects: 15+
• Client Satisfaction: 98%
• On-time Delivery: 95%
• Technologies Mastered: 20+
`);
        }, 800);
        break;
      
      case 'skills':
        addOutputLine('Analyzing technical capabilities...\n');
        setTimeout(() => {
          addSectionContent(`
# Technical Skills Matrix

## 🚀 Frontend Development
**Expert Level:**
• React.js, Next.js (5+ years)
• TypeScript, JavaScript ES6+ (5+ years)
• HTML5, CSS3, SASS/SCSS (6+ years)
• Tailwind CSS, Material-UI, Ant Design (3+ years)
• State Management: Redux, Zustand, Context API (4+ years)

**Advanced Level:**
• Vue.js, Nuxt.js (2+ years)
• React Native, Flutter (3+ years)
• Progressive Web Apps (PWAs) (2+ years)
• WebGL, Three.js (1+ year)

## ⚙️ Backend Development
**Expert Level:**
• Node.js, Express.js (4+ years)
• RESTful APIs, GraphQL (4+ years)
• Authentication & Authorization (JWT, OAuth) (4+ years)
• Microservices Architecture (3+ years)

**Advanced Level:**
• Python, FastAPI, Django (3+ years)
• PostgreSQL, MongoDB, Redis (4+ years)
• Message Queues (RabbitMQ, Bull) (2+ years)
• WebSockets, Socket.io (3+ years)

## ☁️ DevOps & Cloud
**Advanced Level:**
• Docker, Kubernetes (3+ years)
• AWS (EC2, S3, Lambda, RDS) (3+ years)
• CI/CD Pipelines (GitHub Actions, Jenkins) (3+ years)
• Nginx, Load Balancing (2+ years)

**Intermediate Level:**
• Terraform, Infrastructure as Code (1+ year)
• Monitoring (Prometheus, Grafana) (1+ year)
• Google Cloud Platform, Azure (1+ year)

## 🛠️ Development Tools
• Git, GitHub, GitLab (6+ years)
• VS Code, WebStorm (5+ years)
• Figma, Adobe XD (3+ years)
• Postman, Insomnia (4+ years)
• Jest, Cypress, Playwright (3+ years)

## 📱 Mobile Development
• React Native (3+ years)
• Flutter, Dart (2+ years)
• iOS/Android Publishing (2+ years)
• Push Notifications, Deep Linking (2+ years)

## 🎯 Soft Skills
• Agile/Scrum Methodologies
• Team Leadership & Mentoring
• Code Review & Best Practices
• Technical Documentation
• Problem Solving & Critical Thinking
`);
        }, 800);
        break;
      
      case 'contact':
        addOutputLine('Displaying contact information...\n');
        setTimeout(() => {
          addSectionContent(`
# Contact Information

## 📧 Get In Touch

**Email:** usman.dev@example.com
**Phone:** +1 (555) 123-4567
**Location:** San Francisco, CA (Open to Remote)

## 🌐 Online Presence

**Portfolio:** https://usman-portfolio.dev
**GitHub:** https://github.com/usman-dev
**LinkedIn:** https://linkedin.com/in/usman-developer
**Twitter:** @usman_codes

## 💼 Professional Services

**Available for:**
• Full-stack web development
• Mobile app development
• Technical consulting
• Code reviews and architecture
• Team leadership and mentoring

**Preferred Communication:**
• Email for formal inquiries
• LinkedIn for professional networking
• GitHub for technical discussions
• Phone/Video calls for project discussions

## 🚀 Let's Build Something Amazing Together!

I'm always excited to work on innovative projects and collaborate with talented teams. Whether you're a startup looking to build your MVP or an established company needing to scale your technical infrastructure, I'd love to hear about your project.

**Response Time:** Usually within 24 hours
**Availability:** Open to new opportunities
**Time Zone:** PST (UTC-8)
`);
        }, 800);
        break;
      
      case 'education':
        addOutputLine('Loading educational background...\n');
        setTimeout(() => {
          addSectionContent(`
# Education Background

## 🎓 Formal Education

### Bachelor of Computer Science
**University of California, San Francisco**
**Duration:** 2018 - 2022
**CGPA:** 3.8/4.0
**Graduation:** Magna Cum Laude

### Relevant Coursework
• Data Structures & Algorithms
• Database Management Systems
• Software Engineering Principles
• Computer Networks & Security
• Operating Systems
• Web Development Technologies
• Machine Learning Fundamentals
• Cybersecurity Essentials

## 📚 Certifications & Continuous Learning

### Professional Certifications
• AWS Certified Developer - Associate (2023)
• Google Cloud Professional Developer (2022)
• MongoDB Certified Developer (2022)
• React Developer Certification - Meta (2021)

### Online Learning Platforms
• Advanced React Patterns - Kent C. Dodds
• Complete Node.js Bootcamp - Jonas Schmedtmann
• The Complete Guide to Database Design - Udemy
• Microservices Architecture - Pluralsight

## 🏆 Academic Achievements

### Senior Capstone Project
**Real-time Chat Application**
• Built with React, Node.js, and Socket.io
• Implemented end-to-end encryption
• Supported 1000+ concurrent users
• **Grade:** A+ (96/100)

### Database Systems Project
**E-commerce Analytics Platform**
• PostgreSQL-based system with complex queries
• Optimized for handling millions of transactions
• Real-time reporting dashboard
• **Grade:** A (94/100)

### Algorithms Competition
• Ranked 3rd in University Programming Contest
• Solved complex algorithmic problems
• Focus on optimization and efficiency

## 🧠 Self-Directed Learning

### Current Learning Focus (2024)
• Advanced Kubernetes orchestration
• Rust programming language
• WebAssembly (WASM) applications
• Blockchain development with Solidity
• AI/ML integration in web applications

### Technical Books Read
• "Clean Code" by Robert C. Martin
• "Designing Data-Intensive Applications" by Martin Kleppmann
• "You Don't Know JS" series by Kyle Simpson
• "System Design Interview" by Alex Xu
`);
        }, 800);
        break;
      
      case 'achievements':
        addOutputLine('Analyzing achievement records...\n');
        setTimeout(() => {
          addSectionContent(`
# Professional Achievements

## 🏆 Career Highlights

### Project Delivery Excellence
• **15+ Successfully Delivered Projects** - 100% client satisfaction rate
• **98% On-Time Delivery Record** - Consistently meeting tight deadlines
• **Zero Critical Bugs in Production** - Last 2 years across all projects
• **50% Performance Improvement** - Average optimization across client applications

### Technical Leadership
• **Led Development Teams of 3-8 Members** - 4 different projects
• **Mentored 12+ Junior Developers** - Career advancement success rate: 90%
• **Established Code Review Standards** - Reduced bug reports by 60%
• **Implemented CI/CD Pipelines** - Decreased deployment time by 80%

### Client Success Stories
• **Startup MVP to $1M ARR** - Led technical development for successful startup
• **Enterprise App Scaling** - Handled 10x user growth without downtime
• **Legacy System Modernization** - Migrated monolith to microservices
• **Cost Optimization** - Reduced cloud infrastructure costs by 40%

## 💼 Professional Recognition

### Industry Awards
• **"Outstanding Developer Award"** - TechCorp 2023
• **"Innovation Excellence"** - DevCon 2022
• **"Team Player of the Year"** - Previous Company 2021

### Speaking & Community
• **3 Technical Conference Talks** - React Summit, Node.js Conf
• **5+ Open Source Contributions** - Popular repositories with 1000+ stars
• **Technical Blog Writer** - 25+ articles, 50K+ monthly readers
• **Code Mentor** - Helped 100+ developers through online platforms

## 📊 Performance Metrics

### Development Speed
• **Feature Delivery:** 30% faster than team average
• **Bug Resolution:** 2x faster than industry standard
• **Code Quality Score:** 95/100 (SonarQube analysis)
• **Test Coverage:** Maintained 90%+ across all projects

### Client Retention
• **100% Client Retention Rate** - All clients returned for additional projects
• **Average Project Rating:** 4.9/5.0
• **Referral Rate:** 80% of new clients come from referrals
• **Long-term Partnerships:** 5+ ongoing client relationships

## 🌟 Specialized Expertise

### Offline-First Development
• **Pioneer in PWA Development** - Built 5+ offline-first applications
• **Service Worker Expert** - Custom caching strategies
• **IndexedDB Optimization** - Efficient local data management
• **Sync Mechanisms** - Seamless online/offline transitions

### Performance Optimization
• **Web Vitals Expert** - All projects achieve 90+ Lighthouse scores
• **Bundle Size Optimization** - Average 40% reduction in bundle sizes
• **Database Query Optimization** - 10x improvement in query performance
• **CDN & Caching Strategies** - Implemented across 10+ applications

## 🎯 Future Goals

### 2024 Objectives
• Launch personal SaaS product
• Achieve AWS Solutions Architect certification
• Speak at 2+ international conferences
• Open source project with 5K+ stars
• Build team of 10+ developers

### Long-term Vision
• Establish development consultancy
• Create educational content platform
• Contribute to major open source projects
• Mentor next generation of developers
`);
        }, 800);
        break;
      
      case 'interests':
        addOutputLine('Parsing personal interests...\n');
        setTimeout(() => {
          addSectionContent(`
# Personal Interests & Hobbies

## 🔒 Cybersecurity & Ethical Hacking

### Security Research
• **Penetration Testing** - Self-taught ethical hacking methodologies
• **Vulnerability Assessment** - Regular security audits of personal projects
• **CTF Competitions** - Participate in Capture The Flag events
• **Bug Bounty Hunting** - Discovered 3 minor vulnerabilities in open source projects

### Cryptography Fascination
• **Encryption Algorithms** - Deep dive into AES, RSA, and elliptic curve cryptography
• **Blockchain Technology** - Understanding consensus mechanisms and smart contracts
• **Zero-Knowledge Proofs** - Exploring privacy-preserving technologies
• **Post-Quantum Cryptography** - Preparing for quantum computing threats

## 💻 Technology Exploration

### Emerging Technologies
• **AI/Machine Learning** - Building personal projects with TensorFlow and PyTorch
• **WebAssembly (WASM)** - Experimenting with performance-critical applications
• **Edge Computing** - IoT projects with Raspberry Pi and Arduino
• **Quantum Computing** - Learning quantum algorithms with Qiskit

### Programming Languages Learning
• **Rust** - Systems programming for performance-critical applications
• **Go** - Microservices and concurrent programming
• **Haskell** - Functional programming paradigms
• **Assembly** - Low-level system understanding

## 🏠 Introvert Activities

### Reading & Learning
• **Technical Books** - 2-3 programming/technology books per month
• **Research Papers** - Stay updated with latest CS research
• **Online Courses** - Continuous learning through platforms like Coursera, edX
• **Documentation Diving** - Love exploring new frameworks and libraries

### Creative Projects
• **Side Projects** - Always working on 2-3 personal coding projects
• **Game Development** - Hobby game development with Unity and Godot
• **Digital Art** - Creating procedural art with p5.js and Processing
• **Music Production** - Electronic music creation with programming

### Solo Gaming
• **Strategy Games** - Chess, Go, and complex strategy video games
• **Puzzle Games** - Logic puzzles, programming challenges
• **Simulation Games** - City builders, management simulators
• **Retro Gaming** - Classic arcade and console games

## 🌱 Personal Growth

### Mindfulness & Health
• **Meditation** - Daily 20-minute sessions for mental clarity
• **Minimalism** - Decluttered lifestyle focused on essentials
• **Digital Detox** - Regular breaks from social media and notifications
• **Walking/Hiking** - Solo nature walks for reflection and inspiration

### Knowledge Sharing
• **Technical Writing** - Personal blog about development insights
• **Code Reviews** - Volunteer code review for open source projects
• **Stack Overflow** - Active contributor helping other developers
• **Local Meetups** - Occasional attendance at developer gatherings

## 🎨 Creative Outlets

### Digital Art & Design
• **Generative Art** - Creating algorithmic art with code
• **UI/UX Experiments** - Designing interfaces for imaginary applications
• **Data Visualization** - Beautiful charts and interactive graphics
• **ASCII Art** - Terminal-based art and animations

### Building & Making
• **Home Lab Setup** - Self-hosted services and network infrastructure
• **DIY Electronics** - Arduino and Raspberry Pi projects
• **3D Printing** - Designing and printing custom tools and gadgets
• **Automation Scripts** - Productivity tools and system automation

## 📚 Current Obsessions

### 2024 Learning Focus
• **Distributed Systems** - Understanding large-scale system design
• **Compiler Design** - Building a small programming language
• **Computer Graphics** - Ray tracing and rendering algorithms
• **Cryptographic Protocols** - Implementing secure communication systems

### Weekend Projects
• Building a personal VPN server
• Creating a cryptocurrency portfolio tracker
• Developing a password manager
• Writing a static site generator

## 🌟 Philosophy

"Technology is best when it brings people together, but sometimes the most productive and creative work happens in solitude. I believe in the power of deep work, continuous learning, and building things that matter - even if it's just for the joy of creation."

### Favorite Quote
"The best way to predict the future is to invent it." - Alan Kay
`);
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
                   {/* Full Terminal Interface */}
                   <div 
                     ref={outputRef}
                     className="min-h-[70vh] max-h-[80vh] overflow-y-auto border border-border rounded bg-muted/10 text-sm lg:text-base"
                   >
                     <div className="p-2 lg:p-4">
                       <TerminalOutput lines={outputLines} />
                     </div>
                     
                     {/* Command Prompt at bottom */}
                     <div className="sticky bottom-0 bg-muted/10 border-t border-border p-2 lg:p-4">
                       <CommandPrompt 
                         onCommand={handleCommand}
                         isActive={!isProcessing}
                       />
                     </div>
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
