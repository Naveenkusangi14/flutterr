/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '320px', 'max': '639px'},   // Small screens like smartphones
        'md': '768px',   // Medium screens like tablets
        'lg': '1024px',  // Large screens like laptops
        'xl': '1280px',  // Extra large screens like desktops
      },
    },
  },
  plugins: [],
}
