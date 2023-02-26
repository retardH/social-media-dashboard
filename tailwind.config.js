/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        light__white: 'hsl(0, 0%, 100%)',
        light__paleBlue: 'hsl(225, 100%, 98%)',
        light__grayishBlue: 'hsl(227, 47%, 96%)',
        light__darkGrayishBlue: 'hsl(228, 12%, 44%)',
        light__veryDarkBlue: 'hsl(230, 17%, 14%)',

        dark__veryDarkBlue: 'hsl(230, 17%, 14%)',
        dark__veryDarkBluePattern: 'hsl(232, 19%, 15%)',
        dark__darkSaturatedBlue: 'hsl(228, 28%, 20%)',
        dark__desaturatedBlue: 'hsl(228, 34%, 66%)',

        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram__left: 'hsl(37, 97%, 70%)',
        instagram__right: 'hsl(329, 70%, 58%)',
        youtube: 'hsl(348, 97%, 39%)'
      },
      fontFamily: {
        inter: "'Inter','san-serif'"
      }
    },
  },
  plugins: [],
}
