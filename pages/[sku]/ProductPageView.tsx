import React from 'react';
import { ProductPageProps } from './ProductPageType';

const ProductPageView: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div>
      {product.name}
      <br />
      <br />
      <br />
      {product.price}
      {/* UI */}
      {/* UI */}
      {/* UI */}
      {/* UI */}
      {/* UI */}
      {/* UI */}
    </div>
  );
};

export default ProductPageView;
