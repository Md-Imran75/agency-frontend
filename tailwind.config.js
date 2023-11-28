/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        100: "#fffbe8",
        200: "#fff7d0",
        300: "#fef2b9",
        400: "#feeea1",
        500: "#feea8a",
        600: "#cbbb6e",
        700: "#988c53",
        800: "#665e37",
        900: "#332f1c"
      },

      'secondary': {
        100: "#fbd5dc",
        200: "#f7aab9",
        300: "#f38097",
        400: "#ef5574",
        500: "#eb2b51",
        600: "#bc2241",
        700: "#8d1a31",
        800: "#5e1120",
        900: "#2f0910"
    },
      
    'black': {
      100: "#d3d3d3",
      200: "#a7a7a7",
      300: "#7a7a7a",
      400: "#4e4e4e",
      500: "#222222",
      600: "#1b1b1b",
      700: "#141414",
      800: "#0e0e0e",
      900: "#070707"
  },

  'background': {
    100: "#fefefe",
    200: "#fdfdfd",
    300: "#fcfcfc",
    400: "#fbfbfb",
    500: "#fafafa",
    600: "#c8c8c8",
    700: "#969696",
    800: "#646464",
    900: "#323232"
},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}


