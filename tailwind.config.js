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
        primary: 'var(--color-primary)',
        primaryVariant: 'var(--color-primary-variant)',
        white: 'var(--color-white)',
        light: 'var(--color-light)',
        backGround: 'var(--color-bg)',
        backGroundVariant: 'var(--color-bg-variant)',
        backGroundOpac: 'var(--color-bg-opacity)',
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
