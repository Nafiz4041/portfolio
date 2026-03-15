/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: '#3b82f6',
        'accent-dark': '#2563eb',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 3.5s infinite',
        'spin-slow': 'spin 14s linear infinite',
        'spin-slow-reverse': 'spin 18s linear infinite reverse',
        'blob-move': 'blobMove 20s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1.5deg)' },
        },
        blobMove: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.9)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #60a5fa, #22d3ee)',
      },
    },
  },
  plugins: [],
};
