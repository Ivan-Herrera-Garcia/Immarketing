/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  content: [
    "./src/**/*.{html,js}",
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
      },
      fontFamily: {
        sans: ['var(--inter)'],
        mono: ['var(--roboto)'],
        redhat: ['var(--redhat)'],
        montserrat: ['var(--montserrat)'],
      },
      
    },
  },
  plugins: [
  ],
}
