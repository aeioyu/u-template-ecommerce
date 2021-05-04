import WooCommerce from '@/libs/wooCommerce';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  try {
    throw new Error('this is api error');
    const products = await WooCommerce.get(`products/${id}`);
    res.status(200).json(products);
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
