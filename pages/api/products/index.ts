import WooCommerce from '@/libs/wooCommerce';
import apiHandler from '@/libs/api-handler';

export default apiHandler().get(async (req, res) => {
  console.log('1');

  const products = await WooCommerce.get('products');
  res.status(200).json(products);
});
