import { ProductFieldFragment, SimpleProduct } from '@/graphql/generated';

export interface ProductMediaGallery {
  id: string;
  url: string;
  alt: string;
}

export function selectMediaGallery(product: ProductFieldFragment): ProductMediaGallery[] {
  const isSimpleProduct = product?.__typename === 'SimpleProduct';
  const isMediaGalleryAvailable = isSimpleProduct && (product as SimpleProduct)?.galleryImages?.nodes?.length > 0;
  const productGallery = isMediaGalleryAvailable
    ? (product as SimpleProduct).galleryImages?.nodes.map((image) => ({
        id: image.id,
        url: image.mediaItemUrl,
        alt: image.altText,
      }))
    : [{ id: '0', url: product?.image?.mediaItemUrl, alt: product?.image?.altText }];

  return productGallery;
}
