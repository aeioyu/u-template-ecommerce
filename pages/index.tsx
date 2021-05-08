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

const banners = [
  {
    id: '1',
    desktop: 'https://picsum.photos/seed/img1/1400/350',
    mobile: 'https://picsum.photos/seed/img1/1400/350',
    url: '/test-1',
  },
  {
    id: '2',
    desktop: 'https://picsum.photos/seed/img2/1400/350',
    mobile: 'https://picsum.photos/seed/img2/1400/350',
    url: '/test-1',
  },
  {
    id: '3',
    desktop: 'https://picsum.photos/seed/img3/1400/350',
    mobile: 'https://picsum.photos/seed/img3/1400/350',
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

const Home: NextPage<Props> = ({ config }) => {
  const { t } = useTranslate();
  const { products: accessoriesProducts } = useProductSearch({ page: 1, per_page: 10, category: '23' });
  const { products: clothingProducts } = useProductSearch({ page: 1, per_page: 10, category: '19' });
  const { products: hoodiesProducts } = useProductSearch({ page: 1, per_page: 10, category: '20' });

  return (
    <div>
      <Seo title={t('seo.title')} description={t('seo.description')} />
      <Container>
        {config}
        <div className="mb-10">
          <HeroBanner banners={banners} />
        </div>
        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            {t('home.recommended')}
          </Text>
          <GridCarousel>
            {gridCarousel.map((carousel) => (
              <GridCarousel.Item key={carousel.id}>
                <a href={carousel.url} target="blank">
                  <img data-src={carousel.desktop} className="w-full swiper-lazy" alt="example" />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                </a>
              </GridCarousel.Item>
            ))}
          </GridCarousel>
        </div>
        {/* 
        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Accessories
          </Text>
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
        </div>

        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Clothing
          </Text>
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
        </div>

        <div className="mb-10">
          <Text variant="heading2" as="h2" className="mb-4">
            Hoodies
          </Text>
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
        </div> */}
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      config: '',
    },
  };
};

(Home as any).Layout = Layout;

export default Home;
