/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
      },
      fontWeight: {
        extrabold: '800',
        medium: '500',
        black: '900',
        semibold: '600',
        extralight: '200',
      },
    },
  },
  plugins: [],
}
