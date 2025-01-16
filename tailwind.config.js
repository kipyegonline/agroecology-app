/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {colors:{
       jungle: {
      400: '#4ade80',
      600: '#16a34a',
    }}},
  },
  plugins: [],
};
