import { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { CategoryModel } from '@/composables/types/category.type';
import apiHandler from '@/libs/api-handler';
import WPClient from '@/libs/wp-client';

export default apiHandler().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const categories: AxiosResponse<CategoryModel> = await WPClient.get(`/wp-json/wc/v3/products/categories`);

  res.status(200).json(categories?.data);
});
