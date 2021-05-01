const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    // tailwind configuration for storybook
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('tailwindcss'), require('autoprefixer')],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')];

    // absolute path configuration for storybook
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };

    return config;
  },
};
