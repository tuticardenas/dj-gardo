/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brandDark: '#0d0e12',
        brandCard: '#14161d',
        brandSurface: '#1c1f2a',
        neonPink: '#ff2a75',
        neonPinkHover: '#ff0055',
        neonCyan: '#00f0ff',
        neonCyanHover: '#00d2ff',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
