/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#a8ff37',
        'accent-2': '#586cec',
        'text-2': '#555555',
        'bg-2': '#e7e8ec',
        

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}