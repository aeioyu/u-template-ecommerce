import WooCommerceAPI from 'woocommerce-api';

export default new WooCommerceAPI({
  url: process.env.WP_DOMAIN,
  consumerKey: process.env.WP_CONSUMER_KEY,
  consumerSecret: process.env.WP_SECRET_KEY,
  wpAPI: true,
  version: 'wc/v3',
});
