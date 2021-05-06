import apiHandler from '@/libs/api-handler';
import apiClient from '@/libs/api-client';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const categories = await apiClient.get(`/wp-json/wc/v3/products/categories`);

  res.status(200).json(categories?.data);
});
