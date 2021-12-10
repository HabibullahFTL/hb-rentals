module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        "300":"300px",
        "400":"400px",
        "500":"500px",
        "600":"600px",
        "700":"700px",
        "800":"800px",
        "900":"900px",
      },
      width:{},
      minWidth:{
        "300px":"300px",
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
