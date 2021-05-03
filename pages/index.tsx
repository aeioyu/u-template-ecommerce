import React from 'react';
import Seo from '@/components/common/Seo';
import useTranslate from '@/composables/useTranslate';
import Layout from '@/layouts/AppLayout';
import { GetServerSideProps, NextPage } from 'next';
import HeroBanner from '@/components/common/HeroBanner';
import Container from '@/components/common/Container';
import Text from '@/components/common/Text';
import GridCarousel from '@/components/common/GridCarousel';

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
}

const Home: NextPage<Props> = ({ config }) => {
  const { t } = useTranslate();

  return (
    <Layout>
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
          <GridCarousel banners={gridCarousel} />
        </div>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      config: '',
    },
  };
};

export default Home;
