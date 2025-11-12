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
          blue: '#3333ccff',
          black: '#000000ff',
          white: '#ffffffff',
          greenLight: '#66cc66ff',
          green: '#33cc66ff',
          teal: '#00cc99ff',
          primary: '#33cc66ff',
          secondary: '#3333ccff',
          dark: '#000000ff',
          light: '#ffffffff',
          accent: '#00cc99ff',
          muted: '#66cc66ff',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #66cc66ff 0%, #33cc66ff 50%, #00cc99ff 100%)',
      },
      boxShadow: {
        soft: '0 20px 45px -30px rgba(16, 24, 40, 0.45)',
      },
    },
  },
  plugins: [forms],
}

