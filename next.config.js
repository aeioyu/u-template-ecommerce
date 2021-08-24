const withPlugins = require('next-compose-plugins');

const isProd = process.env.NODE_ENV === 'production';
const isAnalysis = process.env.ANALYZE === 'true';

const withBundleAnalyzer = isAnalysis
  ? () => {
      const bundleAnalyzer = require('@next/bundle-analyzer');
      return bundleAnalyzer({
        enabled: process.env.ANALYZE === 'true',
      });
    }
  : {};

const nextConfig = {
  assetPrefix: isProd ? '' : '',
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
