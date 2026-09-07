import { Menu, Settings, BarChart2 } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-[250px] shrink-0 bg-[#0d0820] border-r border-white/20 flex flex-col p-3 h-full overflow-hidden hidden md:flex">
      <div className="flex flex-col flex-1 overflow-hidden min-h-0">
        <div className="mb-2 text-center border-b border-white/5 pb-2 shrink-0">
          <div className="text-[1.8rem] text-telegram-blue mb-1">🤖</div>
          <h2 className="text-[0.95rem] font-semibold">Quiz Bot</h2>
        </div>
        
        <div className="flex flex-col gap-1 overflow-y-auto flex-1 pr-1 mb-2">
          <div className="text-[0.65rem] text-text-muted uppercase tracking-wider font-bold mt-2 mb-1 pl-1 border-l-2 border-telegram-blue">
            Command Center
          </div>
          
          <button className="bg-white/5 border border-glass-border text-text-main px-2 py-1 rounded-md text-left cursor-pointer transition-all text-[0.7rem] font-medium flex items-center gap-1 hover:bg-telegram-blue hover:border-telegram-blue hover:translate-x-1">
            <Menu size={14} /> Start Quiz
          </button>
          <button className="bg-white/5 border border-glass-border text-text-main px-2 py-1 rounded-md text-left cursor-pointer transition-all text-[0.7rem] font-medium flex items-center gap-1 hover:bg-telegram-blue hover:border-telegram-blue hover:translate-x-1">
            <Settings size={14} /> Configure
          </button>
          <button className="bg-white/5 border border-glass-border text-text-main px-2 py-1 rounded-md text-left cursor-pointer transition-all text-[0.7rem] font-medium flex items-center gap-1 hover:bg-telegram-blue hover:border-telegram-blue hover:translate-x-1">
            <BarChart2 size={14} /> View Stats
          </button>
        </div>
      </div>
    </aside>
  );
}
