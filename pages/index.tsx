import React from 'react';
import Dropdown from '@/components/common/Dropdown';
import Seo from '@/components/common/Seo';
import useTranslate from '@/composables/useTranslate';
import Layout from '@/layouts/AppLayout';
import { GetServerSideProps, NextPage } from 'next';
import Button from '@/components/common/Button';

interface Props {
  config: string;
}

const Home: NextPage<Props> = ({ config }) => {
  const { t } = useTranslate();

  return (
    <Layout>
      <Seo title={t('seo.title')} description={t('seo.description')} />
      {config}

      <h1>Translate</h1>
      {t('title')}

      <Dropdown button={() => <Button variant="primary">Dropdown</Button>}>test</Dropdown>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      config: 'a',
    },
  };
};

export default Home;
