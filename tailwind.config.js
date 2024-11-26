const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#a8ff37',
        'accent-2': '#586cec',
        'text-2': '#555555',
        'bg-2': '#e7e8ec',
        'bg-1': '#1c1c1c',
      },
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
};