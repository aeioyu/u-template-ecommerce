import WooCommerceAPI from 'woocommerce-api';

export default new WooCommerceAPI({
  url: 'https://instaparade.com',
  consumerKey: 'ck_3b1836f6bac40b02f4ad57873403b9b77362aff1',
  consumerSecret: 'cs_e38fdda4822cc7a49e70eab426d06a717b94908d',
  wpAPI: true,
  version: 'wc/v3',
});
