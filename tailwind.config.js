/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'metal-dark': '#0a0a0a',
        'metal-gray': '#1a1a1a',
        'metal-medium': '#2a2a2a',
        'metal-light': '#3a3a3a',
        'chrome': '#4a4a4a',
        'chrome-light': '#6a6a6a',
        'steel': '#8a8a8a',
        'silver': '#b0b0b0',
      },
      fontFamily: {
        'courier': ['"Courier New"', 'Courier', 'monospace'],
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
