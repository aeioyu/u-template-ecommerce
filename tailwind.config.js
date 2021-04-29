const pxToRem = (px, base = 16) => `${px / base}rem`;

const fontSize = {
  h1: pxToRem(36),
  h2: pxToRem(28),
  h3: pxToRem(24),
  h4: pxToRem(20),
  h5: pxToRem(16),
  h6: pxToRem(12),
  subtitle1: pxToRem(20),
  subtitle2: pxToRem(16),
  subtitle3: pxToRem(12),
  body1: pxToRem(20),
  body2: pxToRem(16),
  body3: pxToRem(12),
};

const colors = {
  darkBlue: '#051E42',
  blue: '#0446AD',
  lightBlue: '#0071DC',
  lightGray: '#F5F5F5',
  yellow: '#FFC21F',
  lightYellow: '#FCED70',
  black: '#000000',
  white: '#ffffff',
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
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize,
    colors,
    screens,
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
