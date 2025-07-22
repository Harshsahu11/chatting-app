import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // 👈 Crucial for React
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
