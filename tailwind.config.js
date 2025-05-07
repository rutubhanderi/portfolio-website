/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        secondary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Dark theme colors with improved contrast
        dark: {
          primary: '#0A1120', // Darker blue-gray for better contrast
          secondary: '#172334', // Darker blue-gray
          accent: '#6D67FF', // Brighter indigo
          highlight: '#2DDBF5', // Brighter cyan
          text: '#F8FAFC', // Brighter text
          muted: '#A3B3CC', // Lighter medium gray
          card: '#172334', // Darker card background
          border: '#334155', // Same border color
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-slow': 'fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-up-slow': 'slideUp 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-left': 'slideLeft 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'bounce-in': 'bounceIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'float-reverse': 'floatReverse 7s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'float-subtle': 'floatSubtle 8s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret .75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(25px)', opacity: '0' },
          '60%': { transform: 'translateY(-5px)', opacity: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-25px)', opacity: '0' },
          '60%': { transform: 'translateY(5px)', opacity: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(25px)', opacity: '0' },
          '60%': { transform: 'translateX(-5px)', opacity: '0.8' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-25px)', opacity: '0' },
          '60%': { transform: 'translateX(5px)', opacity: '0.8' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '70%': { transform: 'scale(1.02)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(0px) translateX(10px)' },
          '75%': { transform: 'translateY(10px) translateX(5px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        floatReverse: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(10px) translateX(-5px)' },
          '50%': { transform: 'translateY(0px) translateX(-10px)' },
          '75%': { transform: 'translateY(-10px) translateX(-5px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        floatSubtle: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-5px) translateX(3px)' },
          '50%': { transform: 'translateY(0px) translateX(5px)' },
          '75%': { transform: 'translateY(5px) translateX(3px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tech-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
