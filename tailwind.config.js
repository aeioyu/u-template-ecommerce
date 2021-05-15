const pxToRem = (px, base = 16) => `${px / base}rem`;

const fontSize = {
  heading1: pxToRem(36),
  heading2: pxToRem(28),
  heading3: pxToRem(24),
  heading4: pxToRem(20),
  heading5: pxToRem(16),
  heading6: pxToRem(14),
  subtitle1: pxToRem(20),
  subtitle2: pxToRem(16),
  subtitle3: pxToRem(12),
  body: pxToRem(14),
  caption: pxToRem(12),
};

const colors = {
  darkBlue: '#051E42',
  blue: '#3565f2',
  lightBlue: '#0071DC',
  gray: '#777777',
  lightGray: '#e5e5e5',
  yellow: '#FFC21F',
  lightYellow: '#FCED70',
  black: '#000000',
  white: '#ffffff',
  indigo: {
    100: '#d7e0fc',
    200: '#aec1fa',
    300: '#86a3f7',
    400: '#5d84f5',
    500: '#3565f2',
    600: '#2a51c2',
    700: '#203d91',
    800: '#152861',
    900: '#0b1430',
  },
};

const screens = {
  // => @media (min-width: 640px) { ... }
  sm: '640px',

  // => @media (min-width: 768px) { ... }
  md: '768px',

  // => @media (min-width: 1024px) { ... }
  lg: '1024px',

  // => @media (min-width: 1280px) { ... }
  xl: '1280px',
};

const spacing = {};

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/configs/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize,
    colors,
    screens,
    text: {
      variants: {
        heading1: 'text-heading1',
        heading2: 'text-heading2',
        heading3: 'text-heading3',
        heading4: 'text-heading4',
        heading5: 'text-heading5',
        subtitle1: 'text-subtitle1',
        subtitle2: 'text-subtitle2',
        subtitle3: 'text-subtitle3',
        body: 'text-body',
        caption: 'text-caption leading-1',
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      textColor: ['disabled'],
      backgroundColor: ['disabled', 'active'],
      borderColor: ['disabled', 'active'],
    },
  },
  plugins: [],
};
