import React from 'react';
import { Menu } from 'lucide-react';

interface TerminalHeaderProps {
  title?: string;
  onMenuClick?: () => void;
  showMenu?: boolean;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ 
  title = "portfolio@terminal", 
  onMenuClick,
  showMenu = false 
}) => {
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
      <div className="w-16 flex justify-end lg:hidden">
        {showMenu && onMenuClick && (
          <button
            onClick={onMenuClick}
            className="p-1 hover:bg-muted/30 rounded transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TerminalHeader;