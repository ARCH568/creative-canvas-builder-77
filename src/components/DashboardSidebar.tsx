import { Home, FileText, BookOpen, Upload, Clock, PenTool, LayoutTemplate, Settings, ChevronDown, Zap } from "lucide-react";
import hituLogo from "@/assets/hitu-logo.png";

const navItems = [
  { icon: Home, label: "New Chat", active: true },
  { icon: FileText, label: "Reports" },
  { icon: BookOpen, label: "Knowledge Base" },
  { icon: Upload, label: "Upload Files" },
  { icon: Clock, label: "History", hasSubmenu: true },
  { icon: PenTool, label: "Report Drafting" },
  { icon: LayoutTemplate, label: "Templates" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 h-screen flex flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-5 border-b border-sidebar-border">
        <img src={hituLogo} alt="HITU" className="w-8 h-8" />
        <span className="font-display font-bold text-xl text-sidebar-foreground tracking-wide">
          HITU (MBI)
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              item.active
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon className="w-4.5 h-4.5" />
            <span>{item.label}</span>
            {item.hasSubmenu && <ChevronDown className="w-4 h-4 ml-auto" />}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4 space-y-3">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent rounded-lg transition-all">
          <Zap className="w-4 h-4" /> Upgrade
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent rounded-lg transition-all">
          <Settings className="w-4 h-4" /> Settings
        </button>
        <div className="flex items-center gap-2 px-3 pt-2 border-t border-sidebar-border">
          <img src={hituLogo} alt="" className="w-8 h-8 rounded-full" />
          <div className="text-xs">
            <p className="font-semibold text-sidebar-foreground">HITU (MBI) AI</p>
            <p className="text-sidebar-foreground/50">Hull Inspection & Trial Unit</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
