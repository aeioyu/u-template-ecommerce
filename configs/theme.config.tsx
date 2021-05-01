// style of Button component in tailwind class format
const text = {
  default: 'leading-5',
  variants: {
    heading1: 'text-heading1',
    heading2: 'text-heading2',
    heading3: 'text-heading3',
    heading4: 'text-heading4',
    heading5: 'text-heading5',
    heading6: 'text-heading6',
    subtitle1: 'text-subtitle1',
    subtitle2: 'text-subtitle2',
    subtitle3: 'text-subtitle3',
    body: 'text-body',
    caption: 'text-caption leading-1',
  },
};

const button = {
  default: `focus:outline-none transition ease-in duration-200`,
  block: `flex justify-center w-full`,
  rounded: `rounded-full`,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  },
  variant: {
    primary: {
      bg: `bg-indigo-500 text-white hover:bg-indigo-700 text-body`,
      outline: `border-lightBlue border-2 text-lightBlue active:bg-lightBlue active:text-white`,
    },
    success: {
      bg: `text-black bg-yellow focus:ring-2 hover:bg-lightYellow`,
      outline: `border-green-700 border-2 text-green-700 active:bg-green-700 active:text-white`,
    },
    danger: {
      bg: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-200`,
      outline: `border-red-600 border-2 text-red-600 active:bg-red-600 active:text-white`,
    },
    dark: {
      bg: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-200`,
      outline: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    },
    warning: {
      bg: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-200`,
      outline: `border-yellow-500 border-2 text-yellow-500 active:bg-yellow-500 active:text-white`,
    },
    indigo: {
      bg: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-200`,
      outline: `border-indigo-900 border-2 text-indigo-900 active:bg-indigo-900 active:text-white`,
    },
    link: {
      bg: 'bg-white text-black',
    },
  },
};

export default {
  text,
  button,
};
