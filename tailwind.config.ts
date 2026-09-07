import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'telegram-blue': 'var(--telegram-blue)',
        'telegram-dark-blue': 'var(--telegram-dark-blue)',
        'bg-dark': 'var(--bg-dark)',
        'chat-bg': 'var(--chat-bg)',
        'card-bg': 'var(--card-bg)',
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
        'success': 'var(--success)',
        'danger': 'var(--danger)',
        'gold': 'var(--gold)',
        'bubble-user': 'var(--bubble-user)',
        'bubble-bot': 'var(--bubble-bot)',
        'glass-border': 'var(--glass-border)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        messageFade: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shakeCard: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-8px) rotate(-1deg)' },
          '30%': { transform: 'translateX(8px) rotate(1deg)' },
          '45%': { transform: 'translateX(-6px)' },
          '60%': { transform: 'translateX(6px)' },
          '75%': { transform: 'translateX(-3px)' },
          '90%': { transform: 'translateX(3px)' },
        },
        trophyReveal: {
          '0%': { transform: 'scale(0) rotate(-30deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0)', opacity: '1' },
        },
        screenShake: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-4px,-4px)' },
          '20%': { transform: 'translate(4px,4px)' },
          '30%': { transform: 'translate(-4px,4px)' },
          '40%': { transform: 'translate(4px,-4px)' },
          '50%': { transform: 'translate(-6px,0)' },
          '60%': { transform: 'translate(6px,0)' },
          '70%': { transform: 'translate(0,-6px)' },
          '80%': { transform: 'translate(0,6px)' },
          '90%': { transform: 'translate(-2px,2px)' },
        }
      },
      animation: {
        messageFade: 'messageFade 0.3s ease-out',
        shakeCard: 'shakeCard 0.45s cubic-bezier(.36,.07,.19,.97) both',
        trophyReveal: 'trophyReveal 0.8s cubic-bezier(.34,1.56,.64,1) both',
        screenShake: 'screenShake 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;
