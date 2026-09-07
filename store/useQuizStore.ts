import { create } from 'zustand';

interface QuizState {
  isActive: boolean;
  currentQuestionIndex: number;
  score: number;
  questions: any[];
  startQuiz: (questions: any[]) => void;
  answerQuestion: (isCorrect: boolean) => void;
  endQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  isActive: false,
  currentQuestionIndex: 0,
  score: 0,
  questions: [],
  
  startQuiz: (questions) => set({ 
    isActive: true, 
    questions, 
    currentQuestionIndex: 0, 
    score: 0 
  }),
  
  answerQuestion: (isCorrect) => set((state) => ({
    score: isCorrect ? state.score + 1 : state.score,
    currentQuestionIndex: state.currentQuestionIndex + 1
  })),
  
  endQuiz: () => set({ isActive: false, questions: [] })
}));
