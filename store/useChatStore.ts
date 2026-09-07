import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import localforage from 'localforage';

// Setup localForage adapter for Zustand
const storage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await localforage.getItem(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await localforage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await localforage.removeItem(name);
  },
};

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text?: string;
  type?: 'text' | 'quiz' | 'stats';
  quizData?: any; 
  timestamp: number;
}

interface ChatState {
  messages: ChatMessage[];
  isTyping: boolean;
  addMessage: (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  setTyping: (status: boolean) => void;
  clearHistory: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      isTyping: false,
      
      addMessage: (msg) => set((state) => ({
        messages: [
          ...state.messages, 
          { 
            ...msg, 
            id: Math.random().toString(36).substring(7),
            timestamp: Date.now() 
          }
        ]
      })),

      setTyping: (status) => set({ isTyping: status }),
      
      clearHistory: () => set({ messages: [] })
    }),
    {
      name: 'quiz-bot-chat-storage',
      storage: createJSONStorage(() => storage),
    }
  )
);
