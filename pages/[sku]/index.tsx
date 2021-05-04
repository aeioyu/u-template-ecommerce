import Layout from '@/layouts/AppLayout';
import Seo from '@/components/common/Seo';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CategoryPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <Seo title={`${query.sku} | Category page`} description="description" />
    </Layout>
  );
};

export default CategoryPage;
