import Layout from '@/layouts/AppLayout';
import Seo from '@/components/common/Seo';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';

const CategoryPage: NextPage = () => {
  const { query } = useRouter();
  const slug = (query?.slug as string[])?.join('/');

  return (
    <div>
      <Seo title={`${slug} | Category page`} description="description" />
      <Container>Url {slug}</Container>
    </div>
  );
};

(CategoryPage as any).Layout = Layout;

export default CategoryPage;
