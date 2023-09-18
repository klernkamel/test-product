module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#c2c7ca",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#121212",
          900: "#191919",
        },
      },
      padding: {
        sm: '13px',
        md: '17px',
        lg: '15px',
        xl: '48px',
      },
      inset: {
        sm: '75px',
        smx: '85px',
        smxl: '108px',
        mdx: '120px',
        md: '185px',
      },
    },
    screens: {
      'sm': {'max': '680px'},
      'md': {'min': '818px'},
      'smx': {'min':'681px', 'max':'817px'},
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#E82125',
      'secondary': '#F9C113',
      'danger': '#e3342f',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
