import Sidebar from "@/components/layout/Sidebar";
import ChatArea from "@/components/chat/ChatArea";

export default function Home() {
  return (
    <main className="flex w-screen h-screen overflow-hidden bg-bg-dark font-inter text-text-main">
      <Sidebar />
      <ChatArea />
    </main>
  );
}
