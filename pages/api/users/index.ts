import WooCommerce from '@/libs/wooCommerce';
import apiHandler from '@/libs/api-handler';
import ApiClient from '@/libs/api-client';

const router = apiHandler;

router.post(async (req, res) => {
  const data = {
    email: 'aeio.yu@gmail.com',
    password: '1234',
  };

  const axiosResponse = await ApiClient.post('jwt-auth/v1/token', data);

  res.status(200).json(user);
});

export default router;
