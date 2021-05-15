import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Layout from '@/components/layouts/AppLayout';
import Seo from '@/components/common/Seo';
import { selectSlugIdFromUrl } from '@/utils/slug.util';
import ProductGallery from '@/components/features/product/ProductGallery';
import useProduct from '@/composables/useProduct';
import { SimpleProduct } from '@/composables/generated';
import Text from '@/components/common/Text';

export interface ProductPageProps {}
interface PageWithLayout {
  Layout?: React.FC;
}

const ProductPage: NextPage<ProductPageProps> & PageWithLayout = () => {
  const { query } = useRouter();
  const slug = query?.slug;
  const { pageType, pageId } = selectSlugIdFromUrl(slug);
  const { product, isFetching } = useProduct(pageId);

  if (!pageType || !pageId) {
    return <div>404</div>;
  }

  if (isFetching) {
    return <div className="text-center">loading...</div>;
  }

  const isSimpleProduct = product?.__typename === 'SimpleProduct';
  const isMediaGalleryAvailable = isSimpleProduct && (product as SimpleProduct)?.galleryImages?.nodes?.length > 0;
  const productGallery = isMediaGalleryAvailable
    ? (product as SimpleProduct).galleryImages?.nodes.map((image) => ({
        id: image.id,
        url: image.mediaItemUrl,
        alt: image.altText,
      }))
    : [{ id: '0', url: product?.image.mediaItemUrl, alt: product?.image.altText }];

  return (
    <div>
      <Seo title={`${query.slug} | Product page`} description="description" />
      <Container>
        <div className="grid grid-cols-1 md:gap-2 md:grid-cols-4">
          <div className="md:col-span-2 md:pr-14 ">
            <ProductGallery gallery={productGallery} />
          </div>
          <div className="pt-8 md:col-span-2">
            <div className="name">
              <Text variant="heading1">{product?.name}</Text>
            </div>
            <div className="mb-8">Brand</div>
            <div className="flex mb-8">
              <div className="price">
                <Text variant="heading2">{product?.__typename === 'SimpleProduct' && product?.regularPrice}</Text>
              </div>
              <div className="price">
                <Text variant="heading2">{product?.__typename === 'SimpleProduct' && product?.salePrice}</Text>
              </div>
            </div>

            <div className="divide-x-8"></div>

            <div className="name">{product?.shortDescription}</div>
          </div>
        </div>
        <div className="my-16">{product?.description}</div>
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

ProductPage.Layout = Layout;

export default ProductPage;
