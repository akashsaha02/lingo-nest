/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

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
        'bg-1': '#1c1c1c',
      },
    },
  },
  plugins: [
    daisyui,
  ],
};
