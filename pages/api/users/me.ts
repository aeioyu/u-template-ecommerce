import WooCommerce from '@/libs/wooCommerce';
import apiHandler from '@/libs/api-handler';
import guard from '@/libs/guard-middleware';

const router = apiHandler;

router.use(guard).get(async (req, res) => {
  console.log('user');

  const userId = req.userId;

  if (!userId) {
    throw new Error('');
  }

  const user = await WooCommerce.get(`customers/${userId}`);
  res.status(200).json(user);
});

export default router;
