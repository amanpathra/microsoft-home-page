/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '540px',
      'md': '860px',
      'lg': '1050px',
      'xl': '1280px'
    },
    extend: {
      backgroundImage: {
        'microsoft365' : "url(/static/Highlight-M365-Icon-Bounce-Word-Merch_VP5-1920x600.avif)",
        'xboxsx' : "url(/static/xboxx.webp)"
      },
    },
  },
  plugins: [],
}
