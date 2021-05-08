import Text from '@/components/common/Text';
import Link from 'next/link';
import React from 'react';

export interface ProductItemProps {
  productId: number;
  name: string;
  sku: string;
  slug: string;
  images: {
    alt?: string;
    id?: number;
    name?: string;
    src?: string;
  }[];
  categories?: {
    id?: number;
    name?: string;
    slug?: string;
  }[];
  price: string;
  regular_price?: string;
  sale_price?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ productId, slug, images, name, price }) => {
  return (
    <div>
      <Link href={`/products/${slug}-i.${productId}`}>
        <a>
          <img src={images[0]?.src} alt="" />
          <div>
            <Text>{name}</Text>
          </div>
          <div>
            <Text>{price}</Text>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductItem;
