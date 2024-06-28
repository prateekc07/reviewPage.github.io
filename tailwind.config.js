/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: "Helvetica Neue",
      },
      colors: {
        HelveticaColor: "#6C757D",
        ThanksBg: "#F2F9FF",
        gradientBackgroud:
          "linear-gradient(to bottom, #FFECED, #F0F7FF, #FFFFFF)",
      },
      screens: {
        custom510: "510px",
        custom430: "430px",
        custom320: "321px",
        custom310: "310px",
        custom301: "301px",
        custom490: "490px",
        custom370: "370px",
        custom400: "400px",
        custom300: "300px",
      },
    },
  },
  plugins: [],
};

