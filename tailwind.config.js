/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'alexis-red':   '#C41414',
        'alexis-red-d': '#9B1010',
        'alexis-black': '#000000',
        'alexis-dark':  '#0A0A0A',
        'alexis-gray':  '#F0EFED',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', '"Plus Jakarta Sans Placeholder"', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}
