import { Search, MessageSquare, Bell, User, Send, ChevronRight, FileText, PenTool, LayoutTemplate, Anchor, Shield, Ship } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import hituLogo from "@/assets/hitu-logo.png";

const promptSuggestions = [
  { icon: Anchor, text: "Assist with hull inspection checklist for corrosion and cracks" },
  { icon: FileText, text: "Generate a summary report for recent sea trials" },
  { icon: Shield, text: "Outline steps for fault isolation analysis after a hull failure" },
  { icon: Ship, text: "Create a defect history overview for a specific vessel" },
];

const quickActions = [
  { icon: FileText, title: "Defect History", desc: "Review past issues and inspections" },
  { icon: PenTool, title: "Report Drafting", desc: "Generate structured reports" },
  { icon: LayoutTemplate, title: "Templates", desc: "Utilize pre-made report templates" },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar />

      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="glass-input flex items-center gap-2 px-4 py-2 rounded-lg w-96">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="relative text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full" />
            </button>
            <button className="flex items-center gap-2 text-sm text-foreground">
              <User className="w-5 h-5" />
              <span>HITU123</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {/* Welcome */}
          <div className="flex items-start gap-4 mb-8 animate-fade-in-up">
            <img src={hituLogo} alt="" className="w-16 h-16" />
            <div>
              <h1 className="text-2xl font-bold font-display text-foreground">
                Welcome to HITU(MBI) AI
              </h1>
              <p className="text-muted-foreground mt-1">
                Hull Inspection & Trials Unit-focused AI model.<br />
                How can I assist you today?
              </p>
            </div>
          </div>

          {/* Prompt suggestions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {promptSuggestions.map((item, i) => (
              <button
                key={i}
                className="suggestion-card rounded-xl p-5 flex items-center gap-4 text-left"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-secondary-foreground flex-1">{item.text}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </button>
            ))}
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-3 gap-4">
            {quickActions.map((item, i) => (
              <button
                key={i}
                className="suggestion-card rounded-xl p-5 flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Chat input */}
        <div className="px-8 pb-6">
          <div className="glass-card rounded-xl flex items-center px-5 py-3 glow-border">
            <input
              placeholder="Send a message..."
              className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button className="ml-3 text-primary hover:text-ice transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
