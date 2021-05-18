import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Seo from '@/components/common/Seo';
import ProductGallery from '@/components/features/product/ProductGallery';
import Text from '@/components/common/Text';
import AppLayout from '@/components/layouts/AppLayout';
import Button from '@/components/common/Button';
import useProduct from '@/composables/useProduct';
import { selectPageInfoFromSlug } from '@/utils/slug.util';
import { selectMediaGallery } from '@/selectors/productSelector';
import clsx from 'clsx';

type PageWithLayout = {
  Layout?: React.FC;
};

const ProductPage: NextPage & PageWithLayout = () => {
  const { query } = useRouter();
  const { slug } = query;
  const { pageType, pageId } = selectPageInfoFromSlug(slug);
  const { product, isFetching } = useProduct(pageId);

  const productGallery = selectMediaGallery(product);
  const productAvailable = !isFetching && (!pageType || !pageId || !product);
  const regularPrice = product?.__typename === 'SimpleProduct' && product?.regularPrice;
  const salePrice = product?.__typename === 'SimpleProduct' && product?.salePrice;

  const handleAddToCart = () => {
    alert(`add product ${product.databaseId} to cart`);
  };

  if (productAvailable) {
    return <div>404</div>;
  }

  if (isFetching) {
    return <div className="text-center">loading...</div>;
  }

  return (
    <div>
      <Seo title={product.name} description={product.shortDescription} />
      <Container>
        <div className="grid grid-cols-1 md:gap-2 md:grid-cols-4">
          <div className="md:col-span-2 md:pr-14">
            <ProductGallery gallery={productGallery} data-testid="product-gallery" />
          </div>
          <div className="pt-8 md:col-span-2">
            <div className="name">
              <Text variant="heading1" data-testid="product-name">
                {product?.name}
              </Text>
            </div>
            <div className="mb-8">Brand</div>
            <div className="flex mb-8">
              <div className="regularPrice">
                <Text
                  variant={salePrice ? 'heading4' : 'heading2'}
                  data-testid="product-regular-price"
                  className={clsx('mr-2', { ['line-through text-gray']: salePrice })}
                >
                  {regularPrice}
                </Text>
              </div>
              <div className="salePrice">
                <Text variant="heading2" data-testid="product-sale-price">
                  {salePrice}
                </Text>
              </div>
            </div>

            <div className="divide-x-8"></div>

            <div className="mb-8 name" data-testid="product-short-description">
              {product?.shortDescription}
            </div>

            <div className="addToCart">
              <div style={{ maxWidth: 400 }}>
                <Button variant="success" size="lg" block onClick={handleAddToCart} data-testid="product-add-cart-btn">
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-16" data-testid="product-description">
          {product?.description}
        </div>
      </Container>
    </div>
  );
};

ProductPage.Layout = AppLayout;

export default ProductPage;
