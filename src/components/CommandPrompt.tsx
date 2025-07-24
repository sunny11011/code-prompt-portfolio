import React, { useState, useRef, useEffect } from 'react';

interface CommandPromptProps {
  onCommand: (command: string) => void;
  currentDirectory?: string;
  isActive?: boolean;
}

const CommandPrompt: React.FC<CommandPromptProps> = ({ 
  onCommand, 
  currentDirectory = "~", 
  isActive = true 
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory(prev => [...prev, input]);
      onCommand(input.trim());
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 font-mono text-sm">
      <span className="text-accent">user@portfolio</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-primary">{currentDirectory}</span>
      <span className="text-foreground">$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-sm"
        placeholder={isActive ? "Enter command..." : ""}
        disabled={!isActive}
        autoComplete="off"
        spellCheck="false"
      />
      {isActive && <span className="terminal-cursor">|</span>}
    </form>
  );
};

export default CommandPrompt;