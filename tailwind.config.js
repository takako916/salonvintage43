/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "sans-serif"],
        "bebas-neue": ["var(--font-bebas-neue)", "sans-serif"],
        "oswald": ["var(--font-oswald)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

