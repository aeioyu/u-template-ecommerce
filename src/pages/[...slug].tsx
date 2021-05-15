import { GetServerSideProps, NextPage } from 'next';
import Container from '@/components/common/Container';
import Layout from '@/components/layouts/AppLayout';
import Seo from '@/components/common/Seo';
import useProductSearch from '@/composables/useProductSearch';
import ProductItem from '@/components/features/product/ProductItem';
import { selectSlugIdFromUrl } from '@/utils/slug.util';
import { useRouter } from 'next/router';

export interface CategoryPageProps {
  pageId: string;
  pageType: string;
}

const CategoryPage: NextPage<CategoryPageProps> = () => {
  const { query } = useRouter();
  const slug = query?.slug;
  const { pageType, pageId } = selectSlugIdFromUrl(slug);
  const { products } = useProductSearch(
    {
      page: 1,
      per_page: 10,
      category: pageId,
    },
    {
      enabled: !!pageId && pageType === 'cat',
    },
  );

  if (!pageId || !pageType) {
    return <div>404</div>;
  }

  return (
    <div>
      <Seo title={`Category page`} description="description" />
      <Container>
        <div>Url {pageId}</div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products?.data?.map((product) => (
            <ProductItem
              key={`catPage-${product.id}`}
              productId={product.id}
              sku={product.sku}
              slug={product.slug}
              name={product.name}
              price={product.price}
              images={product.images}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const slug = query?.slug;
//   const { pageType, pageId } = selectSlugIdFromUrl(slug);

//   return {
//     props: { pageType, pageId },
//   };
// };

(CategoryPage as any).Layout = Layout;

export default CategoryPage;
