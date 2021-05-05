import WooCommerce from '@/libs/wooCommerce';
import apiHandler from '@/libs/api-handler';

const router = apiHandler;

router.get(async (req, res) => {
  console.log('2s');

  const {
    query: { id },
  } = req;
  const products = await WooCommerce.get(`products/${id}`);
  res.status(200).json(products);
});

export default router;
