import React, { ReactElement } from 'react';
import Seo from '@/components/common/Seo';
import useTranslate from '@/composables/useTranslate';
import Layout from '@/components/layouts/AppLayout';
import { GetStaticProps, NextPage } from 'next';
import HeroBanner from '@/components/common/HeroBanner';
import Container from '@/components/common/Container';
import Text from '@/components/common/Text';
import GridCarousel from '@/components/common/GridCarousel';
import useProductSearch, { fetchProductSearch } from '@/composables/useProductSearch';
import ProductItem from '@/components/features/product/ProductItem';
import Head from 'next/head';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';

import { dehydrate } from 'react-query/hydration';
import { QueryClient } from 'react-query';
import { ProductTypesEnum, SimpleProduct } from '@/graphql/generated';

const banners = [
  {
    id: '1',
    desktop: 'https://icms-image.slatic.net/images/ims-web/91c79c8c-82c1-4bcb-b217-175acba9c93b.jpg_1200x1200.jpg',
    mobile: 'https://icms-image.slatic.net/images/ims-web/058e708a-8c96-42e9-b06e-0e2032531688.jpg_760x760Q50s150.jpg',
    url: '/test-1',
  },
  {
    id: '2',
    desktop: 'https://icms-image.slatic.net/images/ims-web/38787640-0742-4762-8b8c-ad62691fe955.jpg',
    mobile: 'https://icms-image.slatic.net/images/ims-web/4d6d0195-fe51-44fd-9366-fef47a8e0f8f.jpeg',
    url: '/test-1',
  },
  {
    id: '3',
    desktop: 'https://icms-image.slatic.net/images/ims-web/9a421648-2213-44b9-b54b-e68b023821fd.jpg',
    mobile: 'https://icms-image.slatic.net/images/ims-web/e1ba1482-4be7-48fa-8e60-4ddcb545916a.jpg',
    url: '/test-1',
  },
];

interface Props {
  config: string;
  Layout: ReactElement;
}

interface PageWithLayout {
  Layout?: React.FC;
}

const Home: NextPage<Props> & PageWithLayout = () => {
  const { t } = useTranslate();
  const { products: accessoriesProducts } = useProductSearch(
    { first: 15, where: { categoryId: 23, type: ProductTypesEnum.Simple } },
    { enabled: false },
  );
  const { products: clothingProducts } = useProductSearch(
    { first: 15, where: { categoryId: 19, type: ProductTypesEnum.Simple } },
    { enabled: false },
  );
  const { products: hoodiesProducts, isFetching: hoodiesFetching } = useProductSearch({
    first: 15,
    where: { categoryId: 20, type: ProductTypesEnum.Simple },
  });

  const slidePlaceholder = (
    <div className="flex justify-between">
      {[1, 2, 3, 4].map((val) => (
        <div key={val}>
          <Image src="/images/placeholder.jpeg" alt="example product 2" loading="lazy" width="300" height="300" />
          <div style={{ height: 48 }}></div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="homepage">
      <Seo title={t('seo.title')} description={t('seo.description')} />
      <Head>
        <link rel="preload" href={banners[0].desktop} as="image" />
        <link rel="preload" href={banners[0].mobile} as="image" />
        <link rel="preload" href="/images/placeholder.jpeg" as="image" />
        <link rel="dns-prefetch" href="http://instaparade.com/"></link>
      </Head>
      <Container>
        <div className="mb-10">
          <HeroBanner banners={banners} />
        </div>
        {/* <div className="mb-10" style={{ minHeight: 250 }}>
          <Text variant="heading2" as="h2" className="mb-4">
            {t('home.recommended')}
          </Text>
          <GridCarousel>
            {gridCarousel.map((carousel) => (
              <GridCarousel.Item key={carousel.id}>
                <a href={carousel.url} target="blank">
                  <img src={carousel.desktop} alt="this is alt" loading="lazy" />
                </a>
              </GridCarousel.Item>
            ))}
          </GridCarousel>
        </div> */}

        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Accessories
          </Text>

          <GridCarousel>
            {accessoriesProducts?.nodes?.map((product) => (
              <GridCarousel.Item key={product.id} className="home-slider-wrapper">
                <ProductItem
                  slug={product.slug}
                  name={product.name}
                  image={{
                    src: product.image.mediaItemUrl,
                    alt: product.image.altText,
                  }}
                  price={(product as SimpleProduct).price}
                  sku={product.sku}
                  productId={product.databaseId}
                />
              </GridCarousel.Item>
            ))}
          </GridCarousel>
        </div>

        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Clothing
          </Text>

          <GridCarousel>
            {clothingProducts?.nodes?.map((product) => (
              <GridCarousel.Item key={product.id} className="home-slider-wrapper">
                <ProductItem
                  slug={product.slug}
                  name={product.name}
                  image={{
                    src: product.image.mediaItemUrl,
                    alt: product.image.altText,
                  }}
                  price={(product as SimpleProduct).price}
                  sku={product.sku}
                  productId={product.databaseId}
                />
              </GridCarousel.Item>
            ))}
          </GridCarousel>
        </div>

        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Hoodies
          </Text>

          <LazyLoad once={true} placeholder={slidePlaceholder}>
            {hoodiesFetching ? (
              slidePlaceholder
            ) : (
              <GridCarousel>
                {hoodiesProducts?.nodes?.map((product) => (
                  <GridCarousel.Item key={product.id}>
                    <ProductItem
                      slug={product.slug}
                      name={product.name}
                      image={{
                        src: product.image.mediaItemUrl,
                        alt: product.image.altText,
                      }}
                      price={(product as SimpleProduct).price}
                      sku={product.sku}
                      productId={product.databaseId}
                    />
                  </GridCarousel.Item>
                ))}
              </GridCarousel>
            )}
          </LazyLoad>
        </div>
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const accessoriesProductsSearchParams = { first: 15, where: { categoryId: 23, type: ProductTypesEnum.Simple } };
  const clothingProductsProductSearchParams = { first: 15, where: { categoryId: 19, type: ProductTypesEnum.Simple } };
  const fetchAccessories = queryClient.prefetchQuery(['products', accessoriesProductsSearchParams], () =>
    fetchProductSearch(accessoriesProductsSearchParams),
  );
  const fetchClothing = queryClient.prefetchQuery(['products', clothingProductsProductSearchParams], () =>
    fetchProductSearch(clothingProductsProductSearchParams),
  );
  await Promise.all([fetchAccessories, fetchClothing]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Home.Layout = Layout;

export default Home;
