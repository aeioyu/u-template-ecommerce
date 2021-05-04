import Layout from '@/layouts/AppLayout';
import Seo from '@/components/common/Seo';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

const ProductPage: NextPage = () => {
  const { query } = useRouter();
  const handleErrorClick = () => {
    throw new Error('error');
  };
  const handleUndefinedClick = (test) => {
    return test.id.name;
  };

  return (
    <Layout>
      <Seo title={`${query.sku} | Product page`} description="description" />
      <Container>
        <div>Product Page {query.sku}</div>
        <Button onClick={handleErrorClick}>Error Button</Button>
        <Button onClick={handleUndefinedClick}>Undefined Button</Button>
      </Container>
    </Layout>
  );
};

export default ProductPage;
