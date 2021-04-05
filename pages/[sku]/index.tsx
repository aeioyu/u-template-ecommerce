import Layout from '@/layouts/AppLayout';
import Seo from '@/components/Seo';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import ProductPageView from './ProductPageView';
import useProductPageController from './ProductPageController';

const ProductPage: NextPage = () => {
  const { query } = useRouter();
  const sku = [query.sku].join('/');
  const { product, cart, onAddToCart, review, onAddReview } = useProductPageController(sku);

  return (
    <Layout>
      <Seo title={`${query.sku} | Product page`} description="description" />
      <ProductPageView product={product} cart={cart} onAddToCart={onAddToCart} />
    </Layout>
  );
};

export default ProductPage;
