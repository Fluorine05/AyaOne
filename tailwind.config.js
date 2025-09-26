/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        inkwell: '#0b0b12',
        card: '#151521',
        grape: { 300:'#b790ff', 400:'#a274ff', 500:'#8a58ff', 600:'#6f3cff', 700:'#5128cc' },
        mint: { 400:'#6ef7c8', 500:'#3ae7b0' },
        sky: { 400:'#80d4ff', 500:'#5cc9ff' }
      },
      boxShadow: {
        float: '0 10px 30px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 8px 30px rgba(0,0,0,0.35)'
      },
      borderRadius: { xl2: '22px', pill: '999px' }
    },
  },
  plugins: [],
}
