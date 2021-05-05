const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');
const { i18n } = require('./i18n.config');
const { withSentryConfig } = require('@sentry/nextjs');

const isProd = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const sentryConfig = (config) =>
  process.env.NEXT_PUBLIC_SENTRY_ENABLE === 'true'
    ? // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options.
      withSentryConfig(config, {
        release: 'v1.0.0',
        deploy: {
          env: 'development',
          name: 'Deploy name',
        },
      })
    : {};

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

module.exports = withPlugins([sentryConfig, withBundleAnalyzer], nextConfig);
