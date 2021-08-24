import { NextPage } from 'next';
import Container from '@/components/common/Container';
import Layout from '@/components/layouts/AppLayout';
import Seo from '@/components/common/Seo';
import useProductSearch from '@/composables/useProductSearch';
import ProductItem from '@/components/features/product/ProductItem';
import { selectPageInfoFromSlug } from '@/utils/slug.util';
import { useRouter } from 'next/router';
import { SimpleProduct } from '@/graphql/generated';
export interface CategoryPageProps {
  pageId: string;
  pageType: string;
}

const CategoryPage: NextPage<CategoryPageProps> = () => {
  const { query } = useRouter();
  const { slug } = query;
  const { pageType, pageId } = selectPageInfoFromSlug(slug);
  const productSearchParams = {
    first: 15,
    after: '',
    where: {
      categoryId: Number(pageId),
    },
  };
  const { products } = useProductSearch(productSearchParams, {
    enabled: !!pageId && pageType === 'cat',
  });

  if (!pageId || !pageType) {
    return <div>404</div>;
  }

  return (
    <div>
      <Seo title={`Category page`} description="description" />
      <Container>
        <div>Url {pageId}</div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products?.nodes?.map((product) => (
            <ProductItem
              key={`catPage-${product.id}`}
              productId={product.databaseId}
              sku={product.sku}
              slug={product.slug}
              name={product.name}
              price={(product as SimpleProduct).price}
              image={{
                src: product.image.mediaItemUrl,
                alt: product.image.altText,
              }}
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
