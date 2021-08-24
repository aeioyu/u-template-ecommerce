import React from 'react';
import { Meta } from '@storybook/react';
import ProductItem, { ProductItemProps } from './ProductItem';

export default {
  title: 'Features/Product/ProductItem',
  component: ProductItem,
  argTypes: {},
} as Meta;

const Template: React.VFC<ProductItemProps> = (args) => (
  <div style={{ maxWidth: 500 }}>
    <ProductItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: 'Example Product',
  sku: 'example sku',
  slug: 'slug',
  image: {
    alt: 'Example Product',
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  categories: [
    {
      id: 1,
      name: 'Category',
      slug: 'catslug',
    },
  ],
  price: '100',
  regular_price: '100',
  sale_price: '200',
};

export const withGridColumn = (args) => (
  <div className="grid grid-cols-3 gap-4">
    {[1, 2, 3, 4, 5, 6].map((key) => (
      <ProductItem {...args} key={key} />
    ))}
  </div>
);
withGridColumn.args = {
  id: 1,
  name: 'Example Product',
  sku: 'example sku',
  slug: 'slug',
  image: {
    alt: 'string',
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  categories: [
    {
      id: 1,
      name: 'Category',
      slug: 'catslug',
    },
  ],
  price: '100',
  regular_price: '100',
  sale_price: '200',
};
