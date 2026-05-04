/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aqua: "#4EBCCB",
        slate: "#2C3E50",
        shell: "#F8F9FA",
        sand: "#D4C4B5",
        ink: "#17212B",
        muted: "#5F6B76",
        line: "#E4E8EB"
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      }
    }
  },
  plugins: []
};
