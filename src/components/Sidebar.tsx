import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react';

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  command?: string;
  extension?: string;
  children?: FileItem[];
}

interface SidebarProps {
  onFileClick: (command: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFileClick, isCollapsed, onToggle }) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['projects']));

  const fileStructure: FileItem[] = [
    { name: 'about.md', type: 'file', command: 'about', extension: 'md' },
    { name: 'skills.yaml', type: 'file', command: 'skills', extension: 'yaml' },
      {
        name: 'projects',
        type: 'folder',
        children: [
          { name: 'live_sports_app.dart', type: 'file', command: 'projects', extension: 'dart' },
          { name: 'transport_management_app.dart', type: 'file', command: 'projects', extension: 'dart' },
          { name: 'movie_streaming_app.dart', type: 'file', command: 'projects', extension: 'dart' },
          { name: 'amazon_clone.dart', type: 'file', command: 'projects', extension: 'dart' },
          { name: 'data_dashboard.py', type: 'file', command: 'projects', extension: 'py' }
        ]
      },
    { name: 'achievements.log', type: 'file', command: 'achievements', extension: 'log' },
    { name: 'education.md', type: 'file', command: 'education', extension: 'md' },
    { name: 'interests.json', type: 'file', command: 'interests', extension: 'json' },
    { name: 'contact_me.sh', type: 'file', command: 'contact', extension: 'sh' }
  ];

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  const getFileIcon = (extension?: string) => {
    const iconClass = "w-4 h-4";
    switch (extension) {
      case 'md': return <File className={`${iconClass} text-blue-400`} />;
      case 'yaml': return <File className={`${iconClass} text-yellow-400`} />;
      case 'dart': return <File className={`${iconClass} text-blue-500`} />;
      case 'py': return <File className={`${iconClass} text-green-400`} />;
      case 'log': return <File className={`${iconClass} text-orange-400`} />;
      case 'json': return <File className={`${iconClass} text-yellow-500`} />;
      case 'sh': return <File className={`${iconClass} text-green-500`} />;
      default: return <File className={`${iconClass} text-muted-foreground`} />;
    }
  };

  const renderFileItem = (item: FileItem, depth: number = 0) => {
    const isExpanded = expandedFolders.has(item.name);
    const paddingLeft = `${depth * 16 + 8}px`;

    if (item.type === 'folder') {
      return (
        <div key={item.name}>
          <div
            className="flex items-center gap-2 py-1 px-2 hover:bg-muted/30 cursor-pointer transition-colors"
            style={{ paddingLeft }}
            onClick={() => toggleFolder(item.name)}
          >
            {isExpanded ? (
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-blue-400" />
            ) : (
              <Folder className="w-4 h-4 text-blue-400" />
            )}
            {!isCollapsed && (
              <span className="text-sm text-foreground font-mono">{item.name}</span>
            )}
          </div>
          {isExpanded && item.children && (
            <div>
              {item.children.map(child => renderFileItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        key={item.name}
        className="flex items-center gap-2 py-1 px-2 hover:bg-muted/30 cursor-pointer transition-colors"
        style={{ paddingLeft }}
        onClick={() => item.command && onFileClick(item.command)}
      >
        {getFileIcon(item.extension)}
        {!isCollapsed && (
          <span className="text-sm text-foreground font-mono">{item.name}</span>
        )}
      </div>
    );
  };

  return (
    <div className={`bg-muted/20 border border-border rounded-lg transition-all duration-300 h-full overflow-y-auto ${
      isCollapsed ? 'w-12' : 'w-80'
    }`}>
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <span className="text-sm font-mono text-muted-foreground">~/usman_portfolio/</span>
          )}
          <button
            onClick={onToggle}
            className="p-1 hover:bg-muted/50 rounded transition-colors"
          >
            <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${
              isCollapsed ? 'rotate-0' : 'rotate-180'
            }`} />
          </button>
        </div>
      </div>
      
      <div className="py-3 px-3">
        {fileStructure.map(item => renderFileItem(item))}
      </div>
    </div>
  );
};

export default Sidebar;