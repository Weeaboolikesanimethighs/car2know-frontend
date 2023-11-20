/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',   // Extra Small
        'sm': '0.875rem',  // Small
        'base': '1rem',    // Default
        'lg': '1.125rem',  // Large
        'xl': '1.25rem',   // Extra Large
        '2xl': '1.5rem',   // 2 Extra Large
        '3xl': '1.875rem', // 3 Extra Large
        '4xl': '2.25rem',  // 4 Extra Large
        '5xl': '3rem',     // 5 Extra Large
        '6xl': '4rem',     // 6 Extra Large
        '7xl': '5rem',     // 7 Extra Large
      },
      borderWidth: {
        '2': '2px', // Add custom border width
      },

    },
  },
  plugins: [],
}

