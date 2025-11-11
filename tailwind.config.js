import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          primary: '#E87722',
          secondary: '#1F3E76',
          dark: '#0F172A',
          light: '#F8FAFC',
          white: '#FFFFFF',
          muted: '#4B5563',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #E87722 0%, #C05621 40%, #1F3E76 100%)',
      },
      boxShadow: {
        soft: '0 20px 45px -30px rgba(16, 24, 40, 0.45)',
      },
    },
  },
  plugins: [forms],
}

