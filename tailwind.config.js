/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      screens: {
        'sm': {max:'767px'},
        // => @media (min-width: 500px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
