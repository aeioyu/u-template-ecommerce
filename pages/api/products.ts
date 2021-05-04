import WooCommerce from '@/libs/wooCommerce';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await WooCommerce.get('products');
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
