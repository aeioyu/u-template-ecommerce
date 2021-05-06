import WooCommerce from '@/libs/wooCommerce';
import apiHandler from '@/libs/api-handler';

export default apiHandler().get(async (req, res) => {
  const {
    query: { id },
  } = req;
  const products = await WooCommerce.get(`products/${id}`);
  res.status(200).json(products);
});
