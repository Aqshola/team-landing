module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      dmsans: ['"DM Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        pink: {
          primary: '#EA3A60',
        },
        'black-primary': '#0F2137',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
