import React from 'react';

export interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp?: Date;
}

interface TerminalOutputProps {
  lines: TerminalLine[];
  className?: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ lines, className = "" }) => {
  const formatContent = (line: TerminalLine) => {
    switch (line.type) {
      case 'command':
        return (
          <div className="flex items-center gap-2">
            <span className="text-accent">user@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-foreground">$</span>
            <span className="text-foreground">{line.content}</span>
          </div>
        );
      case 'error':
        return (
          <div className="text-destructive">
            {line.content}
          </div>
        );
      default:
        return (
          <div className="text-foreground whitespace-pre-wrap">
            {line.content}
          </div>
        );
    }
  };

  return (
    <div className={`terminal-output space-y-1 ${className}`}>
      {lines.map((line) => (
        <div key={line.id} className="font-mono text-sm leading-relaxed">
          {formatContent(line)}
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;