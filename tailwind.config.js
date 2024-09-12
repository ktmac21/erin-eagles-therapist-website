/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
      },
      colors: {
        beige: {
          100: '#f5f5dc',
          300: '#d2b48c',
          400: '#c19a6b',
        },
      },
    },
  },
  plugins: [],
}

