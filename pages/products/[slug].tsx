import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import Layout from '@/components/layouts/AppLayout';
import Seo from '@/components/common/Seo';
import { selectSlugIdFromUrl } from '@/utils/slug.util';

export interface ProductPageProps {
  pageId: string;
  pageType: string;
}

const ProductPage: NextPage<ProductPageProps> = ({ pageId }) => {
  const { query } = useRouter();
  const handleErrorClick = () => {
    throw new Error('error');
  };
  const handleUndefinedClick = (test) => {
    return test.id.name;
  };

  return (
    <div>
      <Seo title={`${query.slug} | Product page`} description="description" />
      <Container>
        <div>Product {pageId}</div>
        <Button onClick={handleErrorClick}>Error Button</Button>
        <Button onClick={handleUndefinedClick}>Undefined Button</Button>
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query?.slug;
  const { pageType, pageId } = selectSlugIdFromUrl(slug);

  return {
    props: { pageType, pageId },
  };
};

(ProductPage as any).Layout = Layout;

export default ProductPage;
