import React, { ReactElement } from 'react';
import Seo from '@/components/common/Seo';
import useTranslate from '@/composables/useTranslate';
import Layout from '@/components/layouts/AppLayout';
import { GetServerSideProps, NextPage } from 'next';
import HeroBanner from '@/components/common/HeroBanner';
import Container from '@/components/common/Container';
import Text from '@/components/common/Text';
import GridCarousel from '@/components/common/GridCarousel';
import useProductSearch from '@/composables/useProductSearch';
import ProductItem from '@/components/features/product/ProductItem';
// import Image from 'next/image';
import Head from 'next/head';
// import { dehydrate } from 'react-query/hydration';
// import { QueryClient, useQuery } from 'react-query';
// import { getProductSearch } from '@/composables/useProductSearch/useProductSearch';

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

const gridCarousel = [
  {
    id: '1',
    desktop: 'https://picsum.photos/seed/grid1/400/350',
    mobile: 'https://picsum.photos/seed/grid1/400/350',
    url: '/test-1',
  },
  {
    id: '2',
    desktop: 'https://picsum.photos/seed/grid2/400/350',
    mobile: 'https://picsum.photos/seed/grid2/400/350',
    url: '/test-1',
  },
  {
    id: '3',
    desktop: 'https://picsum.photos/seed/grid3/400/350',
    mobile: 'https://picsum.photos/seed/grid3/400/350',
    url: '/test-1',
  },
  {
    id: '4',
    desktop: 'https://picsum.photos/seed/grid4/400/350',
    mobile: 'https://picsum.photos/seed/grid4/400/350',
    url: '/test-1',
  },
  {
    id: '5',
    desktop: 'https://picsum.photos/seed/grid5/400/350',
    mobile: 'https://picsum.photos/seed/grid5/400/350',
    url: '/test-1',
  },
  {
    id: '6',
    desktop: 'https://picsum.photos/seed/grid6/400/350',
    mobile: 'https://picsum.photos/seed/grid6/400/350',
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

const Home: NextPage<Props> & PageWithLayout = ({ config }) => {
  const { t } = useTranslate();
  const { products: accessoriesProducts } = useProductSearch({ page: 1, per_page: 10, category: '23' });
  const { products: clothingProducts } = useProductSearch({ page: 1, per_page: 10, category: '19' });
  const { products: hoodiesProducts } = useProductSearch({ page: 1, per_page: 10, category: '20' });

  return (
    <div>
      <Seo title={t('seo.title')} description={t('seo.description')} />
      <Head>
        <link rel="preload" href={banners[0].desktop} as="image" />
        <link rel="preload" href={banners[0].mobile} as="image" />
        <link rel="preload" href="/images/placeholder.jpeg" as="image" />
        
      </Head>
      <Container>
        {config}
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

          {accessoriesProducts?.data?.length > 0 ? (
            <GridCarousel>
              {accessoriesProducts?.data?.map((product) => (
                <GridCarousel.Item key={product.id}>
                  <ProductItem
                    slug={product.slug}
                    name={product.name}
                    images={product.images}
                    price={product.price}
                    sku={product.sku}
                    productId={product.id}
                  />
                </GridCarousel.Item>
              ))}
            </GridCarousel>
          ) : (
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((val) => (
                <div className="flex flex-col" key={val}>
                  <img src="/images/placeholder.jpeg" alt="this is alt" loading="lazy" width="268" height="268" />
                  <div style={{ height: 16 }}></div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Clothing
          </Text>

          {clothingProducts?.data?.length > 0 ? (
            <GridCarousel>
              {clothingProducts?.data?.map((product) => (
                <GridCarousel.Item key={product.id}>
                  <ProductItem
                    slug={product.slug}
                    name={product.name}
                    images={product.images}
                    price={product.price}
                    sku={product.sku}
                    productId={product.id}
                  />
                </GridCarousel.Item>
              ))}
            </GridCarousel>
          ) : (
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((val) => (
                <div className="flex flex-col" key={val}>
                  <img src="/images/placeholder.jpeg" alt="this is alt" loading="lazy" width="268" height="268" />
                  <div style={{ width: 268, height: 16 }}></div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Hoodies
          </Text>

          {hoodiesProducts?.data?.length > 0 ? (
            <GridCarousel>
              {hoodiesProducts?.data?.map((product) => (
                <GridCarousel.Item key={product.id}>
                  <ProductItem
                    slug={product.slug}
                    name={product.name}
                    images={product.images}
                    price={product.price}
                    sku={product.sku}
                    productId={product.id}
                  />
                </GridCarousel.Item>
              ))}
            </GridCarousel>
          ) : (
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((val) => (
                <div className="flex flex-col" key={val}>
                  <img src="/images/placeholder.jpeg" alt="this is alt" loading="lazy" width="268" height="268" />
                  <div style={{ width: 268, height: 16 }}></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const queryClient = new QueryClient();
  // const searchProducts = { page: 1, per_page: 10, category: '23' };
  // const searchProducts2 = { page: 1, per_page: 10, category: '19' };
  // await queryClient.prefetchQuery(['products', searchProducts], () => getProductSearch(searchProducts));
  // await queryClient.prefetchQuery(['products', searchProducts2], () => getProductSearch(searchProducts2));
  // return {
  //   props: {
  //     dehydratedState: dehydrate(queryClient),
  //   },
  // };
  return {
    props: {},
  };
};

Home.Layout = Layout;

export default Home;
