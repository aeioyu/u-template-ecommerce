import Text from '@/components/common/Text';
import Link from 'next/link';
import React from 'react';
import s from './ProductItem.module.css';

export interface ProductItemProps {
  productId: number;
  name: string;
  sku: string;
  slug: string;
  image: {
    alt?: string;
    src?: string;
  };
  categories?: {
    id?: number;
    name?: string;
    slug?: string;
  }[];
  price: string;
  regular_price?: string;
  sale_price?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ productId, slug, image, name, price }) => {
  return (
    <div>
      <Link href={`/products/${slug}-i.${productId}`}>
        <a>
          <img
            className="w-full"
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width="300"
            height="300"
            style={{ aspectRatio: '1 / 1' }}
          />
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
