const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');
const { i18n } = require('./i18n.config');

const isProd = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  i18n,
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '' : '',
  future: {
    webpack5: true,
  },
  // Use custom webpack config.
  webpack: (config, { webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    // Important: return the modified config
    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
