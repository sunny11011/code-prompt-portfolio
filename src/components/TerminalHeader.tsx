import React from 'react';

interface TerminalHeaderProps {
  title?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title = "portfolio@terminal" }) => {
  return (
    <div className="terminal-header">
      <div className="flex items-center gap-2">
        <div className="terminal-button close"></div>
        <div className="terminal-button minimize"></div>
        <div className="terminal-button maximize"></div>
      </div>
      <div className="flex-1 text-center">
        <span className="text-muted-foreground text-sm font-mono">{title}</span>
      </div>
      <div className="w-16"></div> {/* Spacer for centering */}
    </div>
  );
};

export default TerminalHeader;