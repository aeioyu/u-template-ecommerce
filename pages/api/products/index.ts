import { ProductSearchParams } from '@/composables/types/product.type';
import WPClient from '@/libs/wp-client';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query as ProductSearchParams;
  const queryParams = {
    page: query.page || 1,
    per_page: query.per_page || 10,
    category: query.category || null,
    order: query.order || null,
    orderBy: query.orderBy || null,
  };
  const products = await WPClient.get(`/wp-json/wc/v3/products`, { params: queryParams });

  res.status(200).json(products?.data);
}

export default handler;
