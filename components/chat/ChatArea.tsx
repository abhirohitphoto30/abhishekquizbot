import { Send } from "lucide-react";

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col bg-[#0f1821] relative min-w-0">
      {/* Header */}
      <header className="h-[60px] bg-[#0d0820] flex items-center justify-between px-5 border-b border-black/20 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-telegram-blue to-[#50a2e3] flex items-center justify-center text-white font-bold text-xl">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-base m-0">Quiz Bot Simulator</h3>
            <p className="text-xs text-text-muted m-0">bot</p>
          </div>
        </div>
      </header>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 bg-[#0e1621] bg-blend-overlay" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}>
        <div className="flex flex-col max-w-[80%] self-start animate-messageFade">
          <div className="bg-bubble-bot text-text-main p-3 rounded-2xl rounded-tl-sm text-[0.95rem] border border-white/5 leading-relaxed">
            Welcome to the Quiz Bot! Send /start to begin.
          </div>
        </div>
        
        <div className="flex flex-col max-w-[80%] self-end animate-messageFade">
          <div className="bg-bubble-user text-white p-3 rounded-2xl rounded-tr-sm text-[0.95rem] leading-relaxed">
            /start
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#0d0820] p-4 border-t border-black/20 flex flex-col gap-2">
        <div className="flex items-center gap-3 bg-[#24303f] rounded-full py-1 px-4">
          <input 
            type="text" 
            placeholder="Write a message..." 
            className="flex-1 bg-transparent border-none outline-none text-white py-2 text-base placeholder:text-text-muted"
          />
          <button className="bg-transparent border-none text-text-muted text-xl cursor-pointer transition-colors hover:text-telegram-blue">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
