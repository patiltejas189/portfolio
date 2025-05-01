/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dae5f3',
          200: '#bcd0e8',
          300: '#93b3d7',
          400: '#6590c3',
          500: '#4672af',
          600: '#345d94',
          700: '#294a77',
          800: '#233d63',
          900: '#1a365d',
          950: '#112644',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        success: {
          100: '#dcfce7',
          500: '#22c55e',
          900: '#14532d',
        },
        warning: {
          100: '#fef9c3',
          500: '#eab308',
          900: '#713f12',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};