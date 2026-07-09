/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        bg_image: "url('/assets/bg-texture.png')",
      },
      colors: {
        primary: 'rgb(84 215 255 / <alpha-value>)',
        primaryLight: 'rgb(185 236 255 / <alpha-value>)',
        primaryVariant: 'rgb(84 215 255 / 0.28)',
        white: 'rgb(255 255 255 / <alpha-value>)',
        light: 'rgb(216 229 239 / <alpha-value>)',
        backGround: 'rgb(6 9 20 / <alpha-value>)',
        backGroundVariant: 'rgb(16 24 39 / <alpha-value>)',
        backGroundOpac: 'rgb(6 9 20 / 0.8)',
      },
    },
    screens: {
      largePhone: '576px',
      tablet: '768px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    container: {
      center: true,
    },
    transitionProperty: {
      custom: 'var(--transition)',
    },
  },
  plugins: [],
};
