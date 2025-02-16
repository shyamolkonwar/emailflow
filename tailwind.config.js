/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jet: '#000000',
        charcoal: '#333333',
        onyx: '#353535',
        gunmetal: '#2A3439',
        deepslate: '#1E2226',
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};